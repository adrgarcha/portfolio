import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import ObserverProvider from '@/components/observer-provider';
import { ThemeProvider } from '@/components/theme-provider';
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
   title: 'Adrian Garcia - Portfolio',
   description: 'Mi portfolio personal dónde podrás conocerme y saber más sobre mi carrera profesional como ingeniero de software 👋.',
   metadataBase: new URL('https://adrigarcia.dev'),
   openGraph: {
      title: 'Adrian Garcia - Portfolio',
      description: 'Mi portfolio personal dónde podrás conocerme y saber más sobre mi carrera profesional como ingeniero de software 👋.',
      url: 'https://adrigarcia.dev',
      type: 'website',
      locale: 'es_ES',
      siteName: 'Adrian Garcia - Portfolio',
   },
   twitter: {
      card: 'summary_large_image',
      title: 'Adrian Garcia - Portfolio',
      description: 'Mi portfolio personal dónde podrás conocerme y saber más sobre mi carrera profesional como ingeniero de software 👋.',
   },
   other: {
      'itemprop:name': 'Adrian Garcia - Portfolio',
      'itemprop:description': 'Mi portfolio personal dónde podrás conocerme y saber más sobre mi carrera profesional como ingeniero de software 👋.',
   },
};

export default async function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   const locale = await getLocale();
   const messages = await getMessages();

   return (
      <html lang={locale} className={`${inter.className} max-w-full overflow-x-hidden scroll-smooth`} suppressHydrationWarning>
         <body className="!px-2 lg:!px-16 2xl:!px-80 max-w-full overflow-x-hidden">
            <ThemeProvider attribute="class" enableSystem={false} disableTransitionOnChange>
               <NextIntlClientProvider messages={messages}>
                  <ObserverProvider>
                     <Navbar />
                     {children}
                     <Footer />
                  </ObserverProvider>
               </NextIntlClientProvider>
            </ThemeProvider>
            <Analytics />
         </body>
      </html>
   );
}
