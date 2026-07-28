import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import type { Locale } from '@/i18n/routing';

import AgendaSection from '@/components/home/agenda-section';
import About from '@/components/home/about';
import CasesHome from '@/components/home/cases-home';
import Linkedin from '@/components/home/linkedin';
import LogosWall from '@/components/home/logos-wall';
import Pains from '@/components/home/pains';
import ServicesHome from '@/components/home/services-home';
import TechStack from '@/components/home/tech-stack';
import Testimonials from '@/components/home/testimonials';
import Hero from '@/components/hero';
import JsonLd, { professionalServiceSchema } from '@/components/json-ld';
import { alternatesFor } from '@/lib/seo';

interface PageProps {
   params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
   const { locale } = await params;
   const t = await getTranslations({ locale: locale as Locale, namespace: 'meta.pages.home' });

   return {
      title: { absolute: t('title') },
      description: t('description'),
      alternates: alternatesFor(locale as Locale, { pathname: '/' }),
   };
}

export default async function Home({ params }: PageProps) {
   const { locale } = await params;
   setRequestLocale(locale as Locale);

   const tSchema = await getTranslations({ locale: locale as Locale, namespace: 'schema' });
   const schema = professionalServiceSchema(
      locale as Locale,
      tSchema('name'),
      tSchema('description'),
      tSchema.raw('knowsAbout') as string[],
   );

   return (
      <main>
         <JsonLd data={schema} />
         <Hero />
         <Pains />
         <hr className="divider" />
         <ServicesHome />
         <hr className="divider" />
         <TechStack />
         <hr className="divider" />
         <CasesHome locale={locale as Locale} />
         <hr className="divider" />
         <LogosWall />
         <hr className="divider" />
         <Testimonials />
         <hr className="divider" />
         <About />
         <hr className="divider" />
         <Linkedin />
         <hr className="divider" />
         <AgendaSection />
      </main>
   );
}
