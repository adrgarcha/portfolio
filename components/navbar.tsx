import { links } from '@/lib/constants';
import { Globe, Sun } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
   return (
      <header className="sticky md:fixed md:left-1/2 md:-translate-x-1/2 mt-6 z-10">
         <nav className="flex gap-x-4 md:gap-x-8 bg-foreground px-6 md:px-8 py-3 md:py-4 rounded-full border border-secondary">
            <ul className="flex items-center gap-x-2 md:gap-x-4 font-semibold text-xs md:text-base">
               {links.map(link => (
                  <li key={link.id}>
                     <Link href={link.url}>{link.label}</Link>
                  </li>
               ))}
            </ul>
            <Sun className="size-4 md:size-6" />
            <Globe className="size-4 md:size-6" />
         </nav>
      </header>
   );
}
