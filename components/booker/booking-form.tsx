'use client';

import posthog from 'posthog-js';
import { useState } from 'react';

import { CAL_SERVICE_OPTIONS } from '@/lib/cal';
import { formatDateLong, formatTime } from '@/lib/datetime';

interface BookingFormProps {
   slot: string;
   onBack: () => void;
}

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function BookingForm({ slot, onBack }: BookingFormProps) {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [services, setServices] = useState<string[]>([]);
   const [notes, setNotes] = useState('');
   const [status, setStatus] = useState<Status>('idle');
   const [error, setError] = useState<string | null>(null);

   const toggleService = (option: string) => {
      setServices((prev) => (prev.includes(option) ? prev.filter((s) => s !== option) : [...prev, option]));
   };

   const submit = async (e: React.FormEvent) => {
      e.preventDefault();
      if (services.length === 0) {
         setError('Selecciona al menos un servicio');
         setStatus('error');
         return;
      }
      setStatus('loading');
      setError(null);
      try {
         const res = await fetch('/api/bookings', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ start: slot, name, email, notes, services }),
         });
         const json = await res.json();
         if (!res.ok) {
            const errorMessage = json.error || 'No se pudo crear la reserva';
            posthog.capture('booking_failed', { error: errorMessage, slot });
            setError(errorMessage);
            setStatus('error');
            return;
         }
         posthog.capture('booking_created', { source: 'booker' });
         setStatus('success');
      } catch {
         setError('No se pudo conectar. Inténtalo de nuevo.');
         setStatus('error');
      }
   };

   if (status === 'success') {
      return (
         <div className="cal-success">
            <p className="ok">✓ Reunión confirmada</p>
            <p className="cal-state">
               Te he enviado la confirmación a <b style={{ color: 'var(--text)' }}>{email}</b> para el {formatDateLong(slot)} a las{' '}
               {formatTime(slot)}.
            </p>
            <p className="comment">Nos vemos en la videollamada. Recibirás el enlace por email.</p>
         </div>
      );
   }

   return (
      <form onSubmit={submit}>
         <button
            type="button"
            className="cal-back link-arrow"
            onClick={() => {
               posthog.capture('booking_form_abandoned', { slot });
               onBack();
            }}
         >
            ‹ volver al calendario
         </button>
         <p className="slots-head" style={{ marginBottom: '0.4rem' }}>
            // {formatDateLong(slot)} · {formatTime(slot)}
         </p>
         <div className="cal-field">
            <label htmlFor="bk-name">Nombre</label>
            <input id="bk-name" value={name} onChange={(e) => setName(e.target.value)} required autoComplete="name" />
         </div>
         <div className="cal-field">
            <label htmlFor="bk-email">Email</label>
            <input id="bk-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="email" />
         </div>
         <div className="cal-field">
            <label>¿En qué servicio estás interesado?</label>
            <div className="cal-chips">
               {CAL_SERVICE_OPTIONS.map((option) => (
                  <button
                     type="button"
                     key={option}
                     className={services.includes(option) ? 'cal-chip active' : 'cal-chip'}
                     aria-pressed={services.includes(option)}
                     onClick={() => toggleService(option)}
                  >
                     {option}
                  </button>
               ))}
            </div>
         </div>
         <div className="cal-field">
            <label htmlFor="bk-notes">¿De qué quieres hablar? (opcional)</label>
            <textarea id="bk-notes" rows={3} value={notes} onChange={(e) => setNotes(e.target.value)} />
         </div>
         {error && <p className="cal-error">{error}</p>}
         <div style={{ marginTop: '1.1rem' }}>
            <button type="submit" className="btn btn-primary" disabled={status === 'loading'}>
               {status === 'loading' ? 'Reservando…' : 'Confirmar reunión'}
            </button>
         </div>
      </form>
   );
}
