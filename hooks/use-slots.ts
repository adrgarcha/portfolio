import { useEffect, useState } from 'react';

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

function ymd(date: Date) {
   const y = date.getFullYear();
   const m = String(date.getMonth() + 1).padStart(2, '0');
   const d = String(date.getDate()).padStart(2, '0');
   return `${y}-${m}-${d}`;
}

export function useSlots(year: number, month: number): UseSlotsResult {
   const [slotsByDate, setSlotsByDate] = useState<SlotsByDate>({});
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState<string | null>(null);
   const [configured, setConfigured] = useState(true);

   // useEffect required: fetches availability from the API for the visible month on the client.
   useEffect(() => {
      const controller = new AbortController();
      const today = new Date();
      const isCurrentMonth = year === today.getFullYear() && month === today.getMonth();
      const startDate = isCurrentMonth ? today : new Date(year, month, 1);
      const endDate = new Date(year, month + 1, 0);

      setLoading(true);
      setError(null);

      fetch(`/api/slots?start=${ymd(startDate)}&end=${ymd(endDate)}`, { signal: controller.signal })
         .then((res) => res.json())
         .then((json) => {
            setConfigured(json.configured !== false);
            if (json.error) setError(json.error);
            setSlotsByDate(json.slots || {});
         })
         .catch((err) => {
            if (err.name !== 'AbortError') setError('No se pudo cargar la disponibilidad');
         })
         .finally(() => setLoading(false));

      return () => controller.abort();
   }, [year, month]);

   return { slotsByDate, loading, error, configured };
}
