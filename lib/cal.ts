export const CAL_API_BASE = 'https://api.cal.com/v2';
export const CAL_TIMEZONE = 'Europe/Madrid';

export const CAL_API_KEY = process.env.CAL_API_KEY || '';
export const CAL_USERNAME = process.env.CAL_USERNAME || 'adrichavero';
export const CAL_EVENT_SLUG = process.env.CAL_EVENT_SLUG || '30min';

export const isCalConfigured = () => CAL_API_KEY.length > 0;

export interface CalSlot {
   start: string;
}

export type SlotsByDate = Record<string, CalSlot[]>;
