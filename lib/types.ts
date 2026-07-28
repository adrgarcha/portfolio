import type { Locale } from '@/i18n/routing';

export interface NavLink {
   label: string;
   href: string;
}

export interface MainNavLink {
   key: 'home' | 'services' | 'cases';
   href: string;
}

export interface Brand {
   name: string;
   logo: string;
}

export interface FooterLink {
   key: string;
   href: string;
}

export interface FooterColumn {
   key: 'navigation' | 'services' | 'legal';
   links: FooterLink[];
}

export interface ServiceToken {
   label: string;
   accent?: boolean;
}

export interface Service {
   id: string;
   href: string;
   featured?: boolean;
   num?: string;
}

export interface ServiceCopy {
   title: string;
   lead: string;
   bullets: string[];
   kicker?: string;
   problem: string;
   howIWork?: string;
   includes: string[];
   tokens: string[];
   detailTokens: string[];
}

export interface CaseResult {
   metric: string;
   text: string;
}

export interface CaseCopy {
   tokens: ServiceToken[];
   title: string;
   shortTitle: string;
   metaTitle?: string;
   metaDescription?: string;
   thumb: string;
   result: string;
   metric: string;
   context: string[];
   challenge: string[];
   solution: string[];
   outcome: CaseResult;
}

export interface CaseStructure {
   id: string;
   slug: Record<Locale, string>;
   img?: string;
   featured?: boolean;
}

export type Case = CaseStructure & CaseCopy;

export interface Testimonial {
   name: string;
   avatar: string;
}
