import { getMessages, getTranslations } from 'next-intl/server';

import { Link, type AppHref } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';
import { FOOTER_COLUMNS, LINKEDIN_URL } from '@/lib/constants';
import CookieConfigButton from './cookie-config-button';

function footerHref(href: string): AppHref {
   const [pathname, hash] = href.split('#');
   return (hash ? { pathname, hash } : pathname) as AppHref;
}

interface FooterColumnCopy {
   title: string;
   links: Record<string, string>;
}

interface FooterProps {
   locale: Locale;
}

export default async function Footer({ locale }: FooterProps) {
   const t = await getTranslations('footer');
   const messages = await getMessages();
   const columns = messages.footer.columns as unknown as Record<string, FooterColumnCopy>;
   const footerColumns =
      locale === 'en'
         ? FOOTER_COLUMNS.map((col) => (col.key === 'navigation' ? { ...col, links: col.links.filter((link) => link.key !== 'sevilla') } : col))
         : FOOTER_COLUMNS;

   return (
      <footer className="footer">
         <div className="wrap">
            <p className="footer-statement">
               <span className="prompt"></span>
               {t('statement')}
            </p>
            <div className="footer-cols">
               <div className="footer-col">
                  <h4>adri_chavero</h4>
                  <p className="footer-brand-line">{t('brandLine')}</p>
                  <p style={{ marginTop: '1rem' }}>
                     <a className="footer-ext" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                        {t('followLinkedin')} <span className="arrow">↗</span>
                     </a>
                  </p>
               </div>
               {footerColumns.map((col) => (
                  <div className="footer-col" key={col.key}>
                     <h4>{columns[col.key].title}</h4>
                     <ul>
                        {col.links.map((link) => (
                           <li key={`${col.key}-${link.href}`}>
                              <Link href={footerHref(link.href)}>{columns[col.key].links[link.key]}</Link>
                           </li>
                        ))}
                        {col.key === 'legal' && (
                           <li>
                              <CookieConfigButton label={t('cookieSettings')} />
                           </li>
                        )}
                     </ul>
                  </div>
               ))}
            </div>
            <div className="footer-bottom">
               <span>{t('copyright')}</span>
               <span className="built">{t('builtWith')}</span>
            </div>
         </div>
      </footer>
   );
}
