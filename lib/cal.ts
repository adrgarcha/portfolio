export const CAL_API_BASE = 'https://api.cal.com/v2';
export const CAL_TIMEZONE = 'Europe/Madrid';

export const CAL_API_KEY = process.env.CAL_API_KEY || '';
export const CAL_USERNAME = process.env.CAL_USERNAME || 'adrichavero';
export const CAL_EVENT_SLUG = process.env.CAL_EVENT_SLUG || '30min';

export const isCalConfigured = () => CAL_API_KEY.length > 0;

export const CAL_SERVICE_FIELD = 'interested_services';
export const CAL_SERVICE_OPTIONS = [
   { id: 'web', value: 'Aplicaciones web a medida' },
   { id: 'integrations', value: 'Integraciones y conexión de sistemas' },
   { id: 'mobile', value: 'Aplicaciones móviles' },
   { id: 'maintenance', value: 'Mantenimiento y evolución web' },
] as const;

export interface CalSlot {
   start: string;
}

export type SlotsByDate = Record<string, CalSlot[]>;
