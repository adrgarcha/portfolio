'use client';

import { BriefcaseBusiness } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function Experience() {
   const t = useTranslations('experience');

   return (
      <section className="py-12 md:pt-24 md:pb-20" id="experience">
         <div className="relative flex items-center justify-center gap-x-4 py-4 dark:text-tertiary">
            <BriefcaseBusiness className="size-6 md:size-10" />
            <h2 className="font-bold text-xl md:text-4xl">{t('title')}</h2>
            <div className="absolute w-screen h-[40px] md:h-[72px] mr-12 md:mr-64 bg-foreground border border-l-0 border-secondary rounded-lg rounded-l-none -z-10" />
         </div>
         <div className="grid md:flex grid-rows-2 grid-flow-col md:justify-center gap-x-10 md:gap-x-24 mt-10">
            <ExperienceSection role={t('first.role')} company="Golgorio" period={t('first.period')} className="md:text-right mt-16 md:mt-14">
               {t('first.description')}
            </ExperienceSection>
            <div className="relative w-3 h-0 intersect:h-[618px] duration-[2000ms] transition-all intersect-full intersect-once border-r border-l border-secondary dark:border-secondary/30 row-span-2 order-first md:order-none">
               <div className="absolute flex items-center left-1/2 -translate-x-1/2 mt-16">
                  <div className="size-6 bg-primary border border-secondary dark:border-secondary/30 rounded-full opacity-0 intersect:opacity-100 intersect:motion-preset-bounce intersect:motion-delay-200 intersect-once" />
                  <div className="absolute md:right-0 w-0 intersect:w-12 intersect:md:w-24 transition-all intersect-full intersect-once duration-500 delay-200 h-px bg-secondary dark:bg-secondary/30 -z-10" />
               </div>
               <div className="absolute flex items-center left-1/2 -translate-x-1/2 mt-80">
                  <div className="size-6 bg-primary border border-secondary dark:border-secondary/30 rounded-full opacity-0 intersect:opacity-100 intersect:motion-preset-bounce intersect:motion-delay-500 intersect-once" />
                  <div className="absolute w-0 intersect:w-12 intersect:md:w-24 transition-all intersect-full intersect-once duration-500 delay-500 h-px bg-secondary dark:bg-secondary/30 -z-10" />
               </div>
            </div>
            <ExperienceSection role={t('second.role')} company="Guadaltel" period={t('second.period')} className="mt-2 md:mt-[19.65rem]">
               {t('second.description')}
            </ExperienceSection>
         </div>
      </section>
   );
}

function ExperienceSection({
   role,
   company,
   period,
   className,
   children,
}: {
   role: string;
   company: string;
   period: string;
   className?: string;
   children: React.ReactNode;
}) {
   return (
      <section className={className}>
         <h3 className="font-bold text-2xl md:text-3xl text-primary leading-none">{role}</h3>
         <h4 className="font-bold text-2xl md:text-3xl">{company}</h4>
         <p className="font-medium text-sm md:text-base mt-1 md:t-2 mb-2 md:mb-4">{period}</p>
         <p className="lg:w-[410px] text-sm md:text-base">{children}</p>
      </section>
   );
}
