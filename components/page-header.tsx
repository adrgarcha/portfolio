import type { NavLink } from '@/lib/types';
import Breadcrumb from './breadcrumb';

interface PageHeaderProps {
   breadcrumb: (NavLink | { label: string; href?: undefined })[];
   eyebrow: string;
   title: string;
   lede?: string;
}

export default function PageHeader({ breadcrumb, eyebrow, title, lede }: PageHeaderProps) {
   return (
      <section className="page-head">
         <div className="wrap">
            <Breadcrumb items={breadcrumb} />
            <span className="eyebrow">{eyebrow}</span>
            <h1 className="t-1" style={{ marginTop: '0.5rem' }}>
               {title}
            </h1>
            {lede && (
               <p className="lede" style={{ marginTop: '1rem' }}>
                  {lede}
               </p>
            )}
         </div>
      </section>
   );
}
