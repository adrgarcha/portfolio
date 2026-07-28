'use client';

import Image from 'next/image';
import posthog from 'posthog-js';
import { useLocale, useTranslations } from 'next-intl';

import { Link } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';
import type { Case } from '@/lib/types';
import Tokens from './tokens';

interface CaseCardProps {
   item: Case;
}

function Thumb({ item }: CaseCardProps) {
   const t = useTranslations('common');

   if (item.img) {
      return (
         <div className="thumb">
            {item.featured && <span className="badge">{t('featuredCaseBadge')}</span>}
            <Image src={item.img} alt={item.shortTitle} fill sizes="(max-width: 620px) 100vw, 33vw" style={{ objectFit: 'cover', objectPosition: 'left' }} />
         </div>
      );
   }
   return (
      <div className="thumb">
         {item.featured && <span className="badge">{t('featuredCaseBadge')}</span>}
         <div className="ph">{item.thumb}</div>
      </div>
   );
}

function Body({ item }: CaseCardProps) {
   const t = useTranslations('common');

   return (
      <div className="case-body">
         <Tokens tokens={item.tokens} />
         <h3>{item.shortTitle}</h3>
         <p className="result">{item.result}</p>
         <p className="metric">{item.metric}</p>
         <span className="case-foot">
            <span className="link-arrow">
               {t('viewCase')} <span className="arrow">→</span>
            </span>
         </span>
      </div>
   );
}

function trackCaseClick(item: Case) {
   posthog.capture('case_clicked', { caseId: item.id, featured: item.featured || false });
}

export default function CaseCard({ item }: CaseCardProps) {
   const locale = useLocale() as Locale;
   const href = { pathname: '/casos-de-exito/[slug]', params: { slug: item.slug[locale] } } as const;

   if (item.featured) {
      return (
         <Link className="card case featured" href={href} onClick={() => trackCaseClick(item)}>
            <div className="case-inner">
               <Thumb item={item} />
               <Body item={item} />
            </div>
         </Link>
      );
   }

   return (
      <Link className="card case" href={href} onClick={() => trackCaseClick(item)}>
         <Thumb item={item} />
         <Body item={item} />
      </Link>
   );
}
