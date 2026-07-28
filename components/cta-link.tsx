'use client';

import posthog from 'posthog-js';
import { useTranslations } from 'next-intl';

import { Link, usePathname } from '@/i18n/navigation';

interface CtaLinkProps {
   label?: string;
   large?: boolean;
   className?: string;
   source?: string;
}

function track(source?: string) {
   posthog.capture('calendar_cta_clicked', { source: source || 'unknown' });
}

export default function CtaLink({ label, large, className, source }: CtaLinkProps) {
   const t = useTranslations('common');
   const pathname = usePathname();
   const resolvedLabel = label || t('bookMeetingCta');
   const classes = `btn btn-primary${large ? ' btn-lg' : ''}${className ? ` ${className}` : ''}`;

   if (pathname === '/') {
      return (
         <a href="#agenda" data-scroll-cal className={classes} onClick={() => track(source)}>
            {resolvedLabel}
         </a>
      );
   }

   return (
      <Link href="/agenda" className={classes} onClick={() => track(source)}>
         {resolvedLabel}
      </Link>
   );
}
