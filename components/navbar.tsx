import { links } from '@/lib/constants';
import { Globe, Sun } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
   return (
      <header className="fixed left-1/2 -translate-x-1/2 mt-6 z-10">
         <nav className="flex gap-x-6 bg-foreground px-8 py-4 rounded-full border border-secondary">
            <ul className="flex items-center gap-x-4 font-semibold">
               {links.map(link => (
                  <li key={link.id}>
                     <Link href={link.url}>{link.label}</Link>
                  </li>
               ))}
            </ul>
            <Sun />
            <Globe />
         </nav>
      </header>
   );
}
