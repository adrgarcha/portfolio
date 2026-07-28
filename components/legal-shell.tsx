import type { ReactNode } from 'react';
import { getFormatter, getTranslations } from 'next-intl/server';

import Breadcrumb from './breadcrumb';

interface LegalShellProps {
   crumb: string;
   title: string;
   children: ReactNode;
}

const LAST_UPDATED = new Date(Date.UTC(2026, 5, 11));

export default async function LegalShell({ crumb, title, children }: LegalShellProps) {
   const t = await getTranslations('legal');
   const tCommon = await getTranslations('common');
   const format = await getFormatter();
   const updatedDate = format.dateTime(LAST_UPDATED, { dateStyle: 'long', timeZone: 'UTC' });

   return (
      <main>
         <section className="page-head">
            <div className="wrap">
               <Breadcrumb items={[{ label: tCommon('breadcrumbHome'), href: '/' }, { label: crumb }]} />
               <span className="eyebrow">{t('eyebrow')}</span>
               <h1 className="t-1" style={{ marginTop: '0.6rem' }}>
                  {title}
               </h1>
               <p className="legal-updated">
                  {t('updatedPrefix')}: {updatedDate}
               </p>
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
