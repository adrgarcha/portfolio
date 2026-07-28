import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

export interface Slot {
   start: string;
}

export type SlotsByDate = Record<string, Slot[]>;

interface UseSlotsResult {
   slotsByDate: SlotsByDate;
   loading: boolean;
   error: string | null;
   configured: boolean;
}

const ERROR_MESSAGE_KEYS: Record<string, string> = {
   missing_fields: 'errors.missing_fields',
   rate_limited: 'errors.rate_limited',
   cal_unavailable: 'errors.cal_unavailable',
};

function ymd(date: Date) {
   const y = date.getFullYear();
   const m = String(date.getMonth() + 1).padStart(2, '0');
   const d = String(date.getDate()).padStart(2, '0');
   return `${y}-${m}-${d}`;
}

export function useSlots(year: number, month: number, timeZone: string | null): UseSlotsResult {
   const t = useTranslations('booking.form');
   const [slotsByDate, setSlotsByDate] = useState<SlotsByDate>({});
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState<string | null>(null);
   const [configured, setConfigured] = useState(true);

   // useEffect required: fetches availability from the API for the visible month on the client, once the
   // visitor timezone is known, so slots are grouped by the same zone used for display.
   useEffect(() => {
      if (!timeZone) return;

      const controller = new AbortController();
      const today = new Date();
      const isCurrentMonth = year === today.getFullYear() && month === today.getMonth();
      const startDate = isCurrentMonth ? today : new Date(year, month, 1);
      const endDate = new Date(year, month + 1, 0);

      setLoading(true);
      setError(null);

      fetch(`/api/slots?start=${ymd(startDate)}&end=${ymd(endDate)}&timeZone=${encodeURIComponent(timeZone)}`, {
         signal: controller.signal,
      })
         .then((res) => res.json())
         .then((json) => {
            setConfigured(json.configured !== false);
            if (json.error) {
               const messageKey = ERROR_MESSAGE_KEYS[json.error] || 'errors.unknown';
               setError(t(messageKey as Parameters<typeof t>[0]));
            }
            setSlotsByDate(json.slots || {});
         })
         .catch((err) => {
            if (err.name !== 'AbortError') setError(t('errors.connection_failed'));
         })
         .finally(() => setLoading(false));

      return () => controller.abort();
   }, [year, month, timeZone]);

   return { slotsByDate, loading, error, configured };
}
