'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Footer() {
   const t = useTranslations();

   return (
      <footer className="flex justify-between mb-3 md:mb-5 font-medium text-xs">
         <p>
            {t('footer.copyright', {
               date: new Date().getFullYear(),
            })}
         </p>
         <div className="flex gap-x-3 md:gap-x-8">
            <Link href="/#about">{t('navbar.about')}</Link>
            <Link href="mailto:garciachaveroadrian@gmail.com">{t('navbar.contact')}</Link>
         </div>
      </footer>
   );
}
