'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import posthog from 'posthog-js';

interface CtaLinkProps {
   label?: string;
   large?: boolean;
   className?: string;
   source?: string;
}

function track(source?: string) {
   posthog.capture('calendar_cta_clicked', { source: source || 'unknown' });
}

export default function CtaLink({ label = 'Agenda una reunión', large, className, source }: CtaLinkProps) {
   const pathname = usePathname();
   const classes = `btn btn-primary${large ? ' btn-lg' : ''}${className ? ` ${className}` : ''}`;

   if (pathname === '/') {
      return (
         <a href="#agenda" data-scroll-cal className={classes} onClick={() => track(source)}>
            {label}
         </a>
      );
   }

   return (
      <Link href="/agenda" className={classes} onClick={() => track(source)}>
         {label}
      </Link>
   );
}
