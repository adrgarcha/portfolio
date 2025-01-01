'use server';

import { cookies } from 'next/headers';
import { locales } from './constants';

type Locale = (typeof locales)[number]['value'];

const COOKIE_NAME = 'USER_LOCALE';
const defaultLocale = navigator.language.startsWith('es') ? 'es' : 'en';

export async function getUserLocale() {
   return (await cookies()).get(COOKIE_NAME)?.value || defaultLocale;
}

export async function setUserLocale(locale: Locale) {
   (await cookies()).set(COOKIE_NAME, locale);
}
