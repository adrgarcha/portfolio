'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

import { Link, usePathname, type AppHref } from '@/i18n/navigation';
import { NAV_LINKS } from '@/lib/constants';
import CtaLink from './cta-link';
import LocaleSwitcher from './locale-switcher';

function isActive(pathname: string, href: string) {
   if (href === '/') return pathname === '/';
   return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Nav() {
   const t = useTranslations('nav');
   const tLinks = useTranslations('nav.links');
   const pathname = usePathname();
   const [open, setOpen] = useState(false);

   return (
      <header className="nav">
         <div className="wrap nav-inner">
            <Link className="brand" href="/" aria-label={t('brandAriaLabel')}>
               adri<span className="u">_</span>chavero<span className="caret">_</span>
            </Link>
            <nav className="nav-links" aria-label={t('primaryAriaLabel')}>
               {NAV_LINKS.map((link) => (
                  <Link
                     key={link.href}
                     className="navlink"
                     href={link.href as AppHref}
                     aria-current={isActive(pathname, link.href) ? 'page' : undefined}
                  >
                     {tLinks(link.key)}
                  </Link>
               ))}
               <LocaleSwitcher />
               <CtaLink className="nav-cta" source="nav" />
            </nav>
            <button
               className="nav-toggle"
               aria-label={open ? t('closeMenu') : t('openMenu')}
               aria-expanded={open}
               onClick={() => setOpen((v) => !v)}
            >
               {open ? '✕' : '≡'}
            </button>
         </div>
         <div className={`mobile-menu${open ? ' open' : ''}`} onClick={() => setOpen(false)}>
            {NAV_LINKS.map((link) => (
               <Link key={link.href} href={link.href as AppHref} aria-current={isActive(pathname, link.href) ? 'page' : undefined}>
                  {tLinks(link.key)}
               </Link>
            ))}
            <LocaleSwitcher />
            <CtaLink source="nav-mobile" />
         </div>
      </header>
   );
}
