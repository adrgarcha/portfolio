export interface NavLink {
   label: string;
   href: string;
}

export interface Brand {
   name: string;
   logo: string;
}

export interface FooterColumn {
   title: string;
   links: NavLink[];
}

export interface PainPoint {
   n: string;
   question: string;
   answer: string;
}

export interface ServiceToken {
   label: string;
   accent?: boolean;
}

export interface Service {
   id: string;
   title: string;
   lead: string;
   bullets: string[];
   tokens: ServiceToken[];
   detailTokens: ServiceToken[];
   href: string;
   featured?: boolean;
   num?: string;
   kicker?: string;
   problem?: string;
   howIWork?: string;
   includes?: string[];
}

export interface CaseResult {
   metric: string;
   text: string;
}

export interface Case {
   slug: string;
   title: string;
   shortTitle: string;
   tokens: ServiceToken[];
   thumb: string;
   img?: string;
   result: string;
   metric: string;
   featured?: boolean;
   contexto: string[];
   reto: string[];
   solucion: string[];
   resultado: CaseResult;
}

export interface Testimonial {
   quote: string;
   name: string;
   role: string;
   avatar: string;
}

export interface Topic {
   text: string;
   meta: string;
}
