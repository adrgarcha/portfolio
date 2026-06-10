const TZ = 'Europe/Madrid';

const timeFmt = new Intl.DateTimeFormat('es-ES', { hour: '2-digit', minute: '2-digit', timeZone: TZ });
const dateLongFmt = new Intl.DateTimeFormat('es-ES', { weekday: 'long', day: 'numeric', month: 'long', timeZone: TZ });
const dateShortFmt = new Intl.DateTimeFormat('es-ES', { day: 'numeric', month: 'long', timeZone: TZ });

export function formatTime(iso: string) {
   return timeFmt.format(new Date(iso));
}

export function formatDateLong(iso: string) {
   return dateLongFmt.format(new Date(iso));
}

export function formatDateShort(value: string) {
   const date = value.includes('T') ? new Date(value) : new Date(`${value}T12:00:00`);
   return dateShortFmt.format(date);
}
