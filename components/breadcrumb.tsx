import Link from 'next/link';
import { Fragment } from 'react';

import type { NavLink } from '@/lib/types';

interface BreadcrumbProps {
   items: (NavLink | { label: string; href?: undefined })[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
   return (
      <nav className="breadcrumb" aria-label="migas de pan">
         {items.map((item, i) => (
            <Fragment key={item.label}>
               {i > 0 && <span className="sep">/</span>}
               {item.href ? <Link href={item.href}>{item.label}</Link> : <span>{item.label}</span>}
            </Fragment>
         ))}
      </nav>
   );
}
