'use client';

import posthog from 'posthog-js';
import { useState } from 'react';

import { useSlots } from '@/hooks/use-slots';
import { CAL_LINK } from '@/lib/constants';
import { formatDateShort, formatTime } from '@/lib/datetime';
import BookingForm from './booking-form';

const MONTHS = [
   'enero',
   'febrero',
   'marzo',
   'abril',
   'mayo',
   'junio',
   'julio',
   'agosto',
   'septiembre',
   'octubre',
   'noviembre',
   'diciembre',
];
const DOW = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];

function pad(n: number) {
   return String(n).padStart(2, '0');
}

export default function Booker() {
   const today = new Date();
   const [view, setView] = useState({ y: today.getFullYear(), m: today.getMonth() });
   const [selectedDate, setSelectedDate] = useState<string | null>(null);
   const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

   const { slotsByDate, loading, error, configured } = useSlots(view.y, view.m);

   const isCurrentMonth = view.y === today.getFullYear() && view.m === today.getMonth();

   const changeMonth = (dir: number) => {
      setSelectedDate(null);
      setSelectedSlot(null);
      setView((v) => {
         const next = new Date(v.y, v.m + dir, 1);
         return { y: next.getFullYear(), m: next.getMonth() };
      });
   };

   const firstOffset = (new Date(view.y, view.m, 1).getDay() + 6) % 7;
   const daysInMonth = new Date(view.y, view.m + 1, 0).getDate();
   const daySlots = selectedDate ? slotsByDate[selectedDate] || [] : [];

   return (
      <div className="cal" data-cal>
         <div className="cal-info">
            <span className="who">
               <span className="dot"></span>adri_chavero · disponible
            </span>
            <h3>Reunión de 30 min</h3>
            <ul className="meta-list">
               <li>
                  <b>◷</b> 30 minutos
               </li>
               <li>
                  <b>◉</b> Videollamada
               </li>
               <li>
                  <b>✓</b> Sin compromiso
               </li>
               <li>
                  <b>◍</b> Zona horaria: Europa/Madrid
               </li>
               <li>
                  <b>$</b> cal.com/adrichavero/30min
               </li>
            </ul>
            <p className="comment" style={{ marginTop: 'auto' }}>
               reserva conectada en tiempo real con Cal.com
            </p>
         </div>

         <div className="cal-body">
            {!configured ? (
               <div className="cal-success">
                  <p className="cal-state">El calendario se conectará muy pronto.</p>
                  <a className="btn btn-primary" href={CAL_LINK} target="_blank" rel="noopener noreferrer">
                     Abrir calendario
                  </a>
               </div>
            ) : selectedSlot ? (
               <BookingForm slot={selectedSlot} onBack={() => setSelectedSlot(null)} />
            ) : (
               <>
                  <div className="cal-month">
                     <span className="m">
                        {MONTHS[view.m]} {view.y}
                     </span>
                     <span className="navs">
                        <button onClick={() => changeMonth(-1)} disabled={isCurrentMonth} aria-label="Mes anterior">
                           ‹
                        </button>
                        <button onClick={() => changeMonth(1)} aria-label="Mes siguiente">
                           ›
                        </button>
                     </span>
                  </div>

                  <div className="cal-days">
                     {DOW.map((d) => (
                        <span className="dow" key={d}>
                           {d}
                        </span>
                     ))}
                     {Array.from({ length: firstOffset }).map((_, i) => (
                        <span className="cal-day muted" key={`offset-${i}`} />
                     ))}
                     {Array.from({ length: daysInMonth }).map((_, i) => {
                        const day = i + 1;
                        const dateStr = `${view.y}-${pad(view.m + 1)}-${pad(day)}`;
                        const avail = (slotsByDate[dateStr]?.length || 0) > 0;
                        const sel = selectedDate === dateStr;
                        const cls = sel ? 'cal-day avail sel' : avail ? 'cal-day avail' : 'cal-day muted';
                        return (
                           <button
                              key={dateStr}
                              className={cls}
                              disabled={!avail}
                              onClick={() => {
                                 setSelectedDate(dateStr);
                                 setSelectedSlot(null);
                                 posthog.capture('booking_date_selected', { date: dateStr });
                              }}
                           >
                              {day}
                           </button>
                        );
                     })}
                  </div>

                  <div className="cal-slots">
                     <p className="slots-head">{selectedDate ? `// huecos · ${formatDateShort(selectedDate)}` : '// elige un día'}</p>
                     {loading && <p className="cal-state">cargando disponibilidad…</p>}
                     {error && !loading && <p className="cal-error">{error}</p>}
                     {!loading && !error && selectedDate && daySlots.length === 0 && (
                        <p className="cal-state">sin huecos este día, prueba otro.</p>
                     )}
                     {!loading && !error && !selectedDate && (
                        <p className="cal-state">selecciona un día disponible para ver los huecos.</p>
                     )}
                     <div className="cal-slot-list">
                        {daySlots.map((slot) => (
                           <button
                              key={slot.start}
                              className="cal-slot"
                              onClick={() => {
                                 setSelectedSlot(slot.start);
                                 posthog.capture('booking_slot_selected', { slot: slot.start });
                              }}
                           >
                              {formatTime(slot.start)}
                           </button>
                        ))}
                     </div>
                  </div>
               </>
            )}
         </div>
      </div>
   );
}
