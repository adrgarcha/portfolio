import { getPathname } from '@/i18n/navigation';
import { routing, type Locale } from '@/i18n/routing';

const BASE = 'https://adrichavero.com';
const LOCALES = routing.locales;

type AppPathname = keyof typeof routing.pathnames;
type RouteParams = Record<string, string | string[]>;
type ParamsForLocale = RouteParams | ((locale: Locale) => RouteParams);

interface LocalizedUrlsInput {
   pathname: AppPathname;
   params?: ParamsForLocale;
}

export function localizedUrls({ pathname, params }: LocalizedUrlsInput): Record<Locale, string> {
   return LOCALES.reduce((acc, locale) => {
      const resolvedParams = typeof params === 'function' ? params(locale) : params;
      const href = resolvedParams ? { pathname, params: resolvedParams } : pathname;
      acc[locale] = `${BASE}${getPathname({ locale, href } as Parameters<typeof getPathname>[0])}`;
      return acc;
   }, {} as Record<Locale, string>);
}

export function alternatesFor(locale: Locale, input: LocalizedUrlsInput) {
   const urls = localizedUrls(input);
   return {
      canonical: urls[locale],
      languages: { es: urls.es, en: urls.en, 'x-default': urls.en },
   };
}

type StaticAppPathname = Exclude<AppPathname, '/casos-de-exito/[slug]'>;

export function esOnlyCanonical(pathname: StaticAppPathname) {
   return { canonical: `${BASE}${getPathname({ locale: 'es', href: pathname })}` };
}
