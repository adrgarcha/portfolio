import type { ReactNode } from 'react';

import Breadcrumb from './breadcrumb';

interface LegalShellProps {
   crumb: string;
   title: string;
   children: ReactNode;
}

export default function LegalShell({ crumb, title, children }: LegalShellProps) {
   return (
      <main>
         <section className="page-head">
            <div className="wrap">
               <Breadcrumb items={[{ label: 'inicio', href: '/' }, { label: crumb }]} />
               <span className="eyebrow">legal</span>
               <h1 className="t-1" style={{ marginTop: '0.6rem' }}>
                  {title}
               </h1>
               <p className="legal-updated">Última actualización: 11 de junio de 2026</p>
            </div>
         </section>
         <section style={{ paddingBottom: 'clamp(56px, 8vw, 110px)' }}>
            <div className="wrap">
               <div className="prose">{children}</div>
            </div>
         </section>
      </main>
   );
}
