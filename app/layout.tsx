import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';

const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
   title: 'Adrian Garcia - En mantenimiento',
   description: 'Estamos afinando motores. La nueva versión de mi web está casi lista.',
   metadataBase: new URL('https://adrigarcia.dev'),
   openGraph: {
      title: 'Adrian Garcia - En mantenimiento',
      description: 'Estamos afinando motores. La nueva versión de mi web está casi lista.',
      url: 'https://adrigarcia.dev',
      type: 'website',
      locale: 'es_ES',
      siteName: 'Adrian Garcia',
   },
   twitter: {
      card: 'summary_large_image',
      title: 'Adrian Garcia - En mantenimiento',
      description: 'Estamos afinando motores. La nueva versión de mi web está casi lista.',
   },
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="es" className={`${jetbrainsMono.className} scroll-smooth`}>
         <body className="bg-background text-foreground min-h-screen flex items-center justify-center p-4 md:p-8">
            {children}
            <Analytics />
         </body>
      </html>
   );
}
