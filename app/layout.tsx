import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';

import CookieBanner from '@/components/cookie-banner';
import Footer from '@/components/footer';
import Nav from '@/components/nav';

const jetbrainsMono = JetBrains_Mono({
   subsets: ['latin'],
   weight: ['300', '400', '500', '700', '800'],
   style: ['normal', 'italic'],
   variable: '--font-mono',
   display: 'swap',
});

export const metadata: Metadata = {
   title: {
      default: 'Adri Chavero — Desarrollo de software a medida',
      template: '%s · Adri Chavero',
   },
   description:
      'Desarrollo aplicaciones web y móviles a medida. De la idea al producto, software hecho para resolver un problema concreto de tu negocio. Desde Sevilla.',
   metadataBase: new URL('https://adrichavero.com'),
   openGraph: {
      title: 'Adri Chavero — Desarrollo de software a medida',
      description:
         'Desarrollo aplicaciones web y móviles a medida. Software hecho para resolver un problema concreto de tu negocio. Desde Sevilla.',
      url: 'https://adrichavero.com',
      type: 'website',
      locale: 'es_ES',
      siteName: 'Adri Chavero',
   },
   twitter: {
      card: 'summary_large_image',
      title: 'Adri Chavero — Desarrollo de software a medida',
      description: 'Desarrollo aplicaciones web y móviles a medida. Desde Sevilla.',
   },
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="es" className={`${jetbrainsMono.variable} scroll-smooth`}>
         <body>
            <Nav />
            {children}
            <Footer />
            <CookieBanner />
            <Analytics />
         </body>
      </html>
   );
}
