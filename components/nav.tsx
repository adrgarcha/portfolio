'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { NAV_LINKS } from '@/lib/constants';
import CtaLink from './cta-link';

function isActive(pathname: string, href: string) {
   if (href === '/') return pathname === '/';
   return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Nav() {
   const pathname = usePathname();
   const [open, setOpen] = useState(false);

   return (
      <header className="nav">
         <div className="wrap nav-inner">
            <Link className="brand" href="/" aria-label="adri_chavero — inicio">
               adri<span className="u">_</span>chavero<span className="caret">_</span>
            </Link>
            <nav className="nav-links" aria-label="principal">
               {NAV_LINKS.map((link) => (
                  <Link
                     key={link.href}
                     className="navlink"
                     href={link.href}
                     aria-current={isActive(pathname, link.href) ? 'page' : undefined}
                  >
                     {link.label}
                  </Link>
               ))}
               <CtaLink className="nav-cta" source="nav" />
            </nav>
            <button
               className="nav-toggle"
               aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
               aria-expanded={open}
               onClick={() => setOpen((v) => !v)}
            >
               {open ? '✕' : '≡'}
            </button>
         </div>
         <div className={`mobile-menu${open ? ' open' : ''}`} onClick={() => setOpen(false)}>
            {NAV_LINKS.map((link) => (
               <Link key={link.href} href={link.href} aria-current={isActive(pathname, link.href) ? 'page' : undefined}>
                  {link.label}
               </Link>
            ))}
            <CtaLink source="nav-mobile" />
         </div>
      </header>
   );
}
