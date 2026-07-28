import { Analytics } from '@vercel/analytics/react';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import { notFound } from 'next/navigation';
import '../globals.css';

import CookieBanner from '@/components/cookie-banner';
import Footer from '@/components/footer';
import LocaleNotice from '@/components/locale-notice';
import Nav from '@/components/nav';
import type { Locale } from '@/i18n/routing';
import { routing } from '@/i18n/routing';
import { localizedUrls } from '@/lib/seo';

const jetbrainsMono = JetBrains_Mono({
   subsets: ['latin'],
   weight: ['300', '400', '500', '700', '800'],
   style: ['normal', 'italic'],
   variable: '--font-mono',
   display: 'swap',
});

interface GenerateMetadataProps {
   params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: GenerateMetadataProps): Promise<Metadata> {
   const { locale } = await params;
   const t = await getTranslations({ locale: locale as Locale, namespace: 'meta.site' });
   const homeUrls = localizedUrls({ pathname: '/' });
   const ogLocale = locale === 'es' ? 'es_ES' : 'en_US';
   const ogAlternateLocale = locale === 'es' ? 'en_US' : 'es_ES';

   return {
      title: {
         default: t('title'),
         template: t('titleTemplate'),
      },
      description: t('description'),
      metadataBase: new URL('https://adrichavero.com'),
      openGraph: {
         title: t('ogTitle'),
         description: t('ogDescription'),
         url: homeUrls[locale as Locale],
         type: 'website',
         locale: ogLocale,
         alternateLocale: ogAlternateLocale,
         siteName: 'Adri Chavero',
      },
      twitter: {
         card: 'summary_large_image',
         title: t('ogTitle'),
         description: t('twitterDescription'),
      },
   };
}

export function generateStaticParams() {
   return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
   children,
   params,
}: Readonly<{
   children: React.ReactNode;
   params: Promise<{ locale: string }>;
}>) {
   const { locale } = await params;
   if (!hasLocale(routing.locales, locale)) notFound();

   setRequestLocale(locale);
   const messages = await getMessages();

   return (
      <html lang={locale} className={`${jetbrainsMono.variable} scroll-smooth`}>
         <body>
            <NextIntlClientProvider messages={messages}>
               <Nav />
               <LocaleNotice />
               {children}
               <Footer locale={locale as Locale} />
               <CookieBanner />
               <Analytics />
            </NextIntlClientProvider>
         </body>
      </html>
   );
}
