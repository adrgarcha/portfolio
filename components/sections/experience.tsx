'use client';

import { BriefcaseBusiness } from 'lucide-react';
import { useMessages, useTranslations } from 'next-intl';

const timelineMargins = ["mt-[4rem]", "mt-[20rem]", "mt-[36rem]", "mt-[52rem]"];

export default function Experience() {
   const t = useTranslations('experience');

   const messages = useMessages();
   const keys = Object.keys(messages.experience).slice(1).reverse() as ["first", "second", "third", "fourth"];

   return (
      <section className="py-12 md:pt-24 md:pb-20" id="experience">
         <div className="relative flex items-center justify-center gap-x-4 py-4 dark:text-tertiary">
            <BriefcaseBusiness className="size-6 md:size-10" />
            <h2 className="font-bold text-xl md:text-4xl">{t('title')}</h2>
            <div className="absolute w-screen h-[40px] md:h-[72px] mr-12 md:mr-64 bg-foreground border border-l-0 border-secondary rounded-lg rounded-l-none -z-10" />
         </div>
         <div className="flex md:justify-center gap-x-10 md:gap-x-24 mt-10">
            <div className='hidden md:flex flex-col gap-y-64 mt-10'>
               {keys.filter((_, index) => index % 2 === 0).map(key => (
                  <ExperienceSection key={key} role={t(`${key}.role`)} company={t(`${key}.company`)} period={t(`${key}.period`)} className="md:text-right">
                     {t(`${key}.description`)}
                  </ExperienceSection>
               ))}
            </div>
            <div className="relative w-10 md:w-3 h-0 intersect:h-[1084px] duration-[2000ms] transition-all intersect-full intersect-once border-r border-l border-secondary dark:border-secondary/30">
               {keys.map((_, index) => (
                  <TimelinePoint key={index} orientation={index % 2 === 0 ? "left" : "right"} className={timelineMargins[index]} />
               ))}
            </div>
            <div className='flex md:hidden flex-col gap-y-[4.5rem] mt-14'>
               {keys.map(key => (
                  <ExperienceSection key={key} role={t(`${key}.role`)} company={t(`${key}.company`)} period={t(`${key}.period`)} className="md:text-right">
                     {t(`${key}.description`)}
                  </ExperienceSection>
               ))}
            </div>
            <div className='hidden md:flex flex-col gap-y-64 mt-[19rem]'>
               {keys.filter((_, index) => index % 2 !== 0).map(key => (
                  <ExperienceSection key={key} role={t(`${key}.role`)} company={t(`${key}.company`)} period={t(`${key}.period`)}>
                     {t(`${key}.description`)}
                  </ExperienceSection>
               ))}
            </div>
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

function TimelinePoint({ orientation, className }: { orientation: "left" | "right"; className?: string }) {
   return (
      <div className={`absolute flex items-center left-1/2 -translate-x-1/2 ${className}`}>
         <div className="size-6 bg-primary border border-secondary dark:border-secondary/30 rounded-full opacity-0 intersect:opacity-100 intersect:motion-preset-bounce intersect:motion-delay-500 intersect-once" />
         <div className={`absolute ${orientation === "left" && "md:right-0"} w-0 intersect:w-12 intersect:md:w-24 transition-all intersect-full intersect-once duration-500 delay-500 h-px bg-secondary dark:bg-secondary/30 -z-10`} />
      </div>
   )
}
