'use client';

import { links, locales } from '@/lib/constants';
import { setUserLocale } from '@/lib/locale';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Globe, Moon, Sun } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import Link from 'next/link';

export default function Navbar() {
   const t = useTranslations('navbar');
   const { theme, setTheme } = useTheme();

   return (
      <header className="sticky md:fixed md:left-1/2 md:-translate-x-1/2 mt-6 z-10 dark:text-tertiary">
         <nav className="flex justify-center gap-x-2 md:gap-x-6 bg-foreground px-6 md:px-8 py-2 md:py-4 rounded-full border border-secondary dark:border-tertiary">
            <ul className="flex items-center gap-x-2 md:gap-x-4 font-semibold text-xs md:text-base">
               {links.map(link => (
                  <li key={link.id}>
                     <Link href={link.url}>{t(link.label)}</Link>
                  </li>
               ))}
            </ul>
            <button
               onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
               className="p-1 [&>svg]:size-4 [&>svg]:md:size-6 rounded-full hover:bg-black/10 transition-colors">
               {theme === 'light' ? <Sun /> : <Moon />}
            </button>
            <DropdownMenu.Root>
               <DropdownMenu.Trigger asChild>
                  <button className="p-1 rounded-full hover:bg-black/10 transition-colors">
                     <Globe className="size-4 md:size-6" />
                  </button>
               </DropdownMenu.Trigger>
               <DropdownMenu.Portal>
                  <DropdownMenu.Content className="z-20 min-w-24 md:min-w-32 rounded-md border border-secondary dark:border-tertiary bg-foreground p-1 shadow-lg">
                     {locales.map(locale => (
                        <DropdownMenu.Item
                           key={locale.id}
                           className="relative rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-black/10 transition-colors">
                           <button onClick={() => setUserLocale(locale.value)} className="w-full text-left">
                              <p className="font-medium dark:text-tertiary">{t(locale.label)}</p>
                           </button>
                        </DropdownMenu.Item>
                     ))}
                  </DropdownMenu.Content>
               </DropdownMenu.Portal>
            </DropdownMenu.Root>
         </nav>
      </header>
   );
}
