import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { ThemeProvider } from '@/components/theme-provider';
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
      <html lang="es" className={`${inter.className} max-w-full overflow-x-hidden scroll-smooth`} suppressHydrationWarning>
         <body className="px-5 md:px-32 2xl:px-80 max-w-full overflow-x-hidden">
            <ThemeProvider attribute="class" enableSystem={false} disableTransitionOnChange>
               <Navbar />
               {children}
               <Footer />
            </ThemeProvider>
         </body>
      </html>
   );
}
