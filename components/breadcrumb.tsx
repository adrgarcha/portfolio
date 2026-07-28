import { Fragment } from 'react';
import { getTranslations } from 'next-intl/server';

import { Link, type AppHref } from '@/i18n/navigation';
import type { NavLink } from '@/lib/types';

interface BreadcrumbProps {
   items: (NavLink | { label: string; href?: undefined })[];
}

export default async function Breadcrumb({ items }: BreadcrumbProps) {
   const t = await getTranslations('common');

   return (
      <nav className="breadcrumb" aria-label={t('breadcrumbAriaLabel')}>
         {items.map((item, i) => (
            <Fragment key={item.label}>
               {i > 0 && <span className="sep">/</span>}
               {item.href ? <Link href={item.href as AppHref}>{item.label}</Link> : <span>{item.label}</span>}
            </Fragment>
         ))}
      </nav>
   );
}
