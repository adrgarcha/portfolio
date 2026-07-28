'use client';

import posthog from 'posthog-js';
import { useEffect, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';

import { useSlots } from '@/hooks/use-slots';
import { CAL_LINK } from '@/lib/constants';
import { FALLBACK_TIME_ZONE, formatDateShort, formatTime, resolveTimeZone, timeZoneAbbreviation } from '@/lib/datetime';
import BookingForm from './booking-form';

function pad(n: number) {
   return String(n).padStart(2, '0');
}

export default function Booker() {
   const t = useTranslations('booking.booker');
   const locale = useLocale();
   const MONTHS = t.raw('months') as string[];
   const DOW = t.raw('dow') as string[];
   const today = new Date();
   const [view, setView] = useState({ y: today.getFullYear(), m: today.getMonth() });
   const [selectedDate, setSelectedDate] = useState<string | null>(null);
   const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
   const [timeZone, setTimeZone] = useState<string | null>(null);

   // useEffect required: the visitor's timezone is unknown during SSR; resolving it after mount keeps the
   // server-rendered markup (no timezone-dependent content yet) in sync with the first client render.
   useEffect(() => {
      setTimeZone(resolveTimeZone());
   }, []);

   const { slotsByDate, loading, error, configured } = useSlots(view.y, view.m, timeZone);
   const effectiveTimeZone = timeZone || FALLBACK_TIME_ZONE;

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
               <span className="dot"></span>{t('whoStatus')}
            </span>
            <h3>{t('meetingTitle')}</h3>
            <ul className="meta-list">
               <li>
                  <b>◷</b> {t('meta.duration')}
               </li>
               <li>
                  <b>◉</b> {t('meta.videocall')}
               </li>
               <li>
                  <b>✓</b> {t('meta.noCommitment')}
               </li>
               <li>
                  <b>◍</b> {t('meta.timezone', { tz: timeZoneAbbreviation(locale, effectiveTimeZone) })}
               </li>
               <li>
                  <b>$</b> cal.com/adrichavero/30min
               </li>
            </ul>
            <p className="comment" style={{ marginTop: 'auto' }}>
               {t('connectedNote')}
            </p>
         </div>

         <div className="cal-body">
            {!configured ? (
               <div className="cal-success">
                  <p className="cal-state">{t('notConfigured.message')}</p>
                  <a className="btn btn-primary" href={CAL_LINK} target="_blank" rel="noopener noreferrer">
                     {t('notConfigured.openCalendar')}
                  </a>
               </div>
            ) : selectedSlot ? (
               <BookingForm
                  slot={selectedSlot}
                  onBack={() => setSelectedSlot(null)}
                  locale={locale}
                  timeZone={effectiveTimeZone}
               />
            ) : (
               <>
                  <div className="cal-month">
                     <span className="m">
                        {MONTHS[view.m]} {view.y}
                     </span>
                     <span className="navs">
                        <button onClick={() => changeMonth(-1)} disabled={isCurrentMonth} aria-label={t('prevMonth')}>
                           ‹
                        </button>
                        <button onClick={() => changeMonth(1)} aria-label={t('nextMonth')}>
                           ›
                        </button>
                     </span>
                  </div>

                  <div className="cal-days">
                     {DOW.map((d, i) => (
                        <span className="dow" key={`dow-${i}`}>
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
                     <p className="slots-head">
                        {selectedDate
                           ? t('slots.forDate', { date: formatDateShort(selectedDate, locale, effectiveTimeZone) })
                           : t('slots.chooseDay')}
                     </p>
                     {loading && <p className="cal-state">{t('slots.loading')}</p>}
                     {error && !loading && <p className="cal-error">{error}</p>}
                     {!loading && !error && selectedDate && daySlots.length === 0 && (
                        <p className="cal-state">{t('slots.noSlotsThisDay')}</p>
                     )}
                     {!loading && !error && !selectedDate && (
                        <p className="cal-state">{t('slots.selectDay')}</p>
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
                              {formatTime(slot.start, locale, effectiveTimeZone)}
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
