'use client';

import posthog from 'posthog-js';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

import { CAL_SERVICE_OPTIONS, CAL_UNSURE_SERVICE_VALUE } from '@/lib/cal';
import { formatDateLong, formatTime } from '@/lib/datetime';

interface BookingFormProps {
   slot: string;
   onBack: () => void;
   locale: string;
   timeZone: string;
}

type Status = 'idle' | 'loading' | 'success' | 'error';

const ERROR_MESSAGE_KEYS: Record<string, string> = {
   not_configured: 'errors.not_configured',
   rate_limited: 'errors.rate_limited',
   invalid_request: 'errors.invalid_request',
   missing_fields: 'errors.missing_fields',
   too_long: 'errors.too_long',
   invalid_email: 'errors.invalid_email',
   no_service_selected: 'errors.no_service_selected',
   cal_unavailable: 'errors.cal_unavailable',
};

export default function BookingForm({ slot, onBack, locale, timeZone }: BookingFormProps) {
   const t = useTranslations('booking.serviceOptions');
   const tForm = useTranslations('booking.form');
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [services, setServices] = useState<string[]>([]);
   const [notes, setNotes] = useState('');
   const [status, setStatus] = useState<Status>('idle');
   const [error, setError] = useState<string | null>(null);

   const toggleService = (option: string) => {
      if (option === CAL_UNSURE_SERVICE_VALUE) {
         setServices((prev) => (prev.includes(option) ? [] : [option]));
         return;
      }

      setServices((prev) =>
         prev.includes(option)
            ? prev.filter((service) => service !== option)
            : [...prev.filter((service) => service !== CAL_UNSURE_SERVICE_VALUE), option],
      );
   };

   const submit = async (e: React.FormEvent) => {
      e.preventDefault();
      if (services.length === 0) {
         setError(tForm('errors.no_service_selected'));
         setStatus('error');
         return;
      }
      setStatus('loading');
      setError(null);
      try {
         const res = await fetch('/api/bookings', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ start: slot, name, email, notes, services, timeZone, locale }),
         });
         const json = await res.json();
         if (!res.ok) {
            const errorCode = json.error as string | undefined;
            const messageKey = ERROR_MESSAGE_KEYS[errorCode || ''] || 'errors.unknown';
            const errorMessage = tForm(messageKey as Parameters<typeof tForm>[0]);
            posthog.capture('booking_failed', { error: errorCode || 'unknown', slot });
            setError(errorMessage);
            setStatus('error');
            return;
         }
         posthog.capture('booking_created', { source: 'booker' });
         setStatus('success');
      } catch {
         setError(tForm('errors.connection_failed'));
         setStatus('error');
      }
   };

   if (status === 'success') {
      return (
         <div className="cal-success">
            <p className="ok">{tForm('confirmed.title')}</p>
            <p className="cal-state">
               {tForm.rich('confirmed.message', {
                  b: (chunks) => <b style={{ color: 'var(--text)' }}>{chunks}</b>,
                  email,
                  date: formatDateLong(slot, locale, timeZone),
                  time: formatTime(slot, locale, timeZone),
               })}
            </p>
            <p className="comment">{tForm('confirmed.note')}</p>
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
            {tForm('back')}
         </button>
         <p className="slots-head" style={{ marginBottom: '0.4rem' }}>
            // {formatDateLong(slot, locale, timeZone)} · {formatTime(slot, locale, timeZone)}
         </p>
         <div className="cal-field">
            <label htmlFor="bk-name">{tForm('name')}</label>
            <input id="bk-name" value={name} onChange={(e) => setName(e.target.value)} required autoComplete="name" />
         </div>
         <div className="cal-field">
            <label htmlFor="bk-email">{tForm('email')}</label>
            <input id="bk-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="email" />
         </div>
         <div className="cal-field">
            <label>{tForm('serviceQuestion')}</label>
            <div className="cal-chips">
               {CAL_SERVICE_OPTIONS.map((option) => (
                  <button
                     type="button"
                     key={option.id}
                     className={services.includes(option.value) ? 'cal-chip active' : 'cal-chip'}
                     aria-pressed={services.includes(option.value)}
                     onClick={() => toggleService(option.value)}
                  >
                     {t(option.id)}
                  </button>
               ))}
            </div>
         </div>
         <div className="cal-field">
            <label htmlFor="bk-notes">{tForm('notesQuestion')}</label>
            <textarea id="bk-notes" rows={3} value={notes} onChange={(e) => setNotes(e.target.value)} />
         </div>
         {error && <p className="cal-error">{error}</p>}
         <div style={{ marginTop: '1.1rem' }}>
            <button type="submit" className="btn btn-primary" disabled={status === 'loading'}>
               {status === 'loading' ? tForm('submitting') : tForm('submit')}
            </button>
         </div>
      </form>
   );
}
