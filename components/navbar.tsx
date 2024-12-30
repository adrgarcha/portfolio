'use client';

import { links } from '@/lib/constants';
import { Globe, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import Link from 'next/link';

export default function Navbar() {
   const { theme, setTheme } = useTheme();

   return (
      <header className="sticky md:fixed md:left-1/2 md:-translate-x-1/2 mt-6 z-10 dark:text-tertiary">
         <nav className="flex gap-x-2 md:gap-x-6 bg-foreground px-6 md:px-8 py-2 md:py-4 rounded-full border border-secondary dark:border-tertiary">
            <ul className="flex items-center gap-x-2 md:gap-x-4 font-semibold text-xs md:text-base">
               {links.map(link => (
                  <li key={link.id}>
                     <Link href={link.url}>{link.label}</Link>
                  </li>
               ))}
            </ul>
            <button
               onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
               className="p-1 [&>svg]:size-4 [&>svg]:md:size-6 rounded-full hover:bg-black/10 transition-colors">
               {theme === 'light' ? <Sun /> : <Moon />}
            </button>
            <button className="p-1 rounded-full hover:bg-black/10 transition-colors">
               <Globe className="size-4 md:size-6" />
            </button>
         </nav>
      </header>
   );
}
