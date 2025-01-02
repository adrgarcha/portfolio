import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { ThemeProvider } from '@/components/theme-provider';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter();

export const metadata: Metadata = {
   title: 'Adrian Garcia - Portfolio',
   description: 'Mi portfolio personal dónde podrás conocerme y saber más sobre mi carrera profesional como ingeniero de software 👋.',
   openGraph: {
      title: 'Adrian Garcia - Portfolio',
      description: 'Mi portfolio personal dónde podrás conocerme y saber más sobre mi carrera profesional como ingeniero de software 👋.',
      url: 'https://adrigarcia.dev',
      type: 'website',
      locale: 'es_ES',
      siteName: 'Adrian Garcia - Portfolio',
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
                  <Navbar />
                  {children}
                  <Footer />
               </NextIntlClientProvider>
            </ThemeProvider>
         </body>
      </html>
   );
}
