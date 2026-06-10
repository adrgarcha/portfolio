import Link from 'next/link';

import { BUILT_WITH, COPYRIGHT, FOOTER_COLUMNS, FOOTER_STATEMENT, LINKEDIN_URL } from '@/lib/constants';
import CookieConfigButton from './cookie-config-button';

export default function Footer() {
   return (
      <footer className="footer">
         <div className="wrap">
            <p className="footer-statement">
               <span className="prompt"></span>
               {FOOTER_STATEMENT}
            </p>
            <div className="footer-cols">
               <div className="footer-col">
                  <h4>adri_chavero</h4>
                  <p className="footer-brand-line">Desarrollo de aplicaciones web y móviles a medida para PYMEs.</p>
                  <p style={{ marginTop: '1rem' }}>
                     <a className="footer-ext" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                        Sígueme en LinkedIn <span className="arrow">↗</span>
                     </a>
                  </p>
               </div>
               {FOOTER_COLUMNS.map((col) => (
                  <div className="footer-col" key={col.title}>
                     <h4>{col.title}</h4>
                     <ul>
                        {col.links.map((link) => (
                           <li key={`${col.title}-${link.href}`}>
                              <Link href={link.href}>{link.label}</Link>
                           </li>
                        ))}
                        {col.title === 'legal' && (
                           <li>
                              <CookieConfigButton label="Configuración de cookies" />
                           </li>
                        )}
                     </ul>
                  </div>
               ))}
            </div>
            <div className="footer-bottom">
               <span>{COPYRIGHT}</span>
               <span className="built">{BUILT_WITH}</span>
            </div>
         </div>
      </footer>
   );
}
