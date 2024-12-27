import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import type { Metadata } from 'next';
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

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="es" className={inter.className}>
         <body className="md:mx-40 2xl:mx-80 overflow-x-hidden">
            <Navbar />
            {children}
            <Footer />
         </body>
      </html>
   );
}
