export const FALLBACK_TIME_ZONE = 'Europe/Madrid';

const INTL_LOCALES: Record<string, string> = {
   es: 'es-ES',
   en: 'en-US',
};

function toIntlLocale(locale: string) {
   return INTL_LOCALES[locale] || INTL_LOCALES.es;
}

export function resolveTimeZone() {
   return Intl.DateTimeFormat().resolvedOptions().timeZone || FALLBACK_TIME_ZONE;
}

export function isValidTimeZone(timeZone: string) {
   try {
      Intl.DateTimeFormat(undefined, { timeZone });
      return true;
   } catch {
      return false;
   }
}

export function formatTime(iso: string, locale: string, timeZone: string) {
   return new Intl.DateTimeFormat(toIntlLocale(locale), { hour: '2-digit', minute: '2-digit', timeZone }).format(new Date(iso));
}

export function formatDateLong(iso: string, locale: string, timeZone: string) {
   return new Intl.DateTimeFormat(toIntlLocale(locale), {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      timeZone,
   }).format(new Date(iso));
}

export function formatDateShort(value: string, locale: string, timeZone: string) {
   const date = value.includes('T') ? new Date(value) : new Date(`${value}T12:00:00`);
   return new Intl.DateTimeFormat(toIntlLocale(locale), { day: 'numeric', month: 'long', timeZone }).format(date);
}

export function timeZoneAbbreviation(locale: string, timeZone: string) {
   const parts = new Intl.DateTimeFormat(toIntlLocale(locale), { timeZoneName: 'short', timeZone }).formatToParts(new Date());
   return parts.find((part) => part.type === 'timeZoneName')?.value || timeZone;
}
