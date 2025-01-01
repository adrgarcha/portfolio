'use client';

import { Code2, Link } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Button from '../button';
import AmazonWebServices from '../icons/aws';
import Cloudflare from '../icons/cloudflare';
import Expo from '../icons/expo';
import Github from '../icons/github';
import MongoDB from '../icons/mongodb';
import Nextjs from '../icons/nextjs';
import TailwindCSS from '../icons/tailwind';
import TypeScript from '../icons/typescript';

export default function Projects() {
   const t = useTranslations('projects');
   const tButton = useTranslations('button');

   return (
      <section className="py-12 md:pt-24 md:pb-20" id="projects">
         <div className="relative flex items-center justify-center gap-x-4 py-4 dark:text-tertiary">
            <Code2 className="size-6 md:size-10" />
            <h2 className="font-bold text-xl md:text-4xl">{t('title')}</h2>
            <div className="absolute w-screen h-[40px] md:h-[72px] ml-12 md:ml-64 bg-foreground border border-r-0 border-secondary rounded-lg rounded-r-none -z-10" />
         </div>
         <div className="flex flex-col items-center gap-y-10 md:gap-y-16 mt-10 md:mt-16 mx-2 md:mx-32">
            <section className="flex flex-col md:flex-row gap-y-4 md:gap-x-8">
               <Image
                  src="/golgorio-app.jpg"
                  alt="A picture of two phones in which the Golgorio App is being used"
                  width={960}
                  height={720}
                  className="w-96 h-64 border border-secondary dark:border-secondary/30 rounded-lg"
               />
               <div>
                  <h3 className="font-semibold text-2xl md:text-3xl">{t('first.name')}</h3>
                  <div className="flex gap-x-2 mt-2 md:mt-3 mb-4">
                     <TechBadge backgroundColor="white">
                        <Expo />
                        Expo
                     </TechBadge>
                     <TechBadge backgroundColor="#D5F3FD">
                        <TailwindCSS />
                        Tailwind CSS
                     </TechBadge>
                     <TechBadge backgroundColor="#FFE8C6">
                        <AmazonWebServices />
                        AWS
                     </TechBadge>
                  </div>
                  <p className="text-sm md:text-base">{t('first.description')}</p>
               </div>
            </section>
            <section className="flex flex-col md:flex-row gap-y-4 md:gap-x-8">
               <Image
                  src="/memify.jpg"
                  alt="A picture of a laptop with the browser opened in the Memify website"
                  width={1920}
                  height={1440}
                  className="w-96 h-64 border border-secondary dark:border-secondary/30 rounded-lg"
               />
               <div>
                  <h3 className="font-semibold text-2xl md:text-3xl">{t('second.name')}</h3>
                  <div className="flex gap-x-2 mt-2 md:mt-3 mb-4">
                     <TechBadge backgroundColor="black" color="white">
                        <Nextjs />
                        Next.js
                     </TechBadge>
                     <TechBadge backgroundColor="#D5F3FD">
                        <TailwindCSS />
                        Tailwind CSS
                     </TechBadge>
                     <TechBadge backgroundColor="#FFDABA">
                        <Cloudflare />
                        Cloudflare
                     </TechBadge>
                  </div>
                  <p className="text-sm md:text-base">{t('second.description')}</p>
                  <div className="flex gap-x-2 mt-3">
                     <a href="https://memify-delta.vercel.app" target="_blank">
                        <Button>
                           <Link />
                           {tButton('visit')}
                        </Button>
                     </a>
                     <a href="https://github.com/adrgarcha/memify" target="_blank">
                        <Button variant="secondary">
                           <Github />
                           {tButton('code')}
                        </Button>
                     </a>
                  </div>
               </div>
            </section>
            <section className="flex flex-col md:flex-row gap-y-4 md:gap-x-8">
               <Image
                  src="/mariwano.jpg"
                  alt="A picture of a laptop with the browser opened in the Mariwano website"
                  width={1920}
                  height={1440}
                  className="w-96 h-64 border border-secondary dark:border-secondary/30 rounded-lg"
               />
               <div>
                  <h3 className="font-semibold text-2xl md:text-3xl">{t('third.name')}</h3>
                  <div className="flex gap-x-2 mt-2 md:mt-3 mb-4">
                     <TechBadge backgroundColor="#6097D5" color="white">
                        <TypeScript />
                        TypeScript
                     </TechBadge>
                     <TechBadge backgroundColor="#D3FCE4">
                        <MongoDB />
                        MongoDB
                     </TechBadge>
                  </div>
                  <p className="text-sm md:text-base">{t('third.description')}</p>
                  <div className="flex gap-x-2 mt-3">
                     <a href="https://www.mariwano.dev" target="_blank">
                        <Button>
                           <Link />
                           {tButton('visit')}
                        </Button>
                     </a>
                     <a href="https://github.com/adrgarcha/mariwano" target="_blank">
                        <Button variant="secondary">
                           <Github />
                           {tButton('code')}
                        </Button>
                     </a>
                  </div>
               </div>
            </section>
         </div>
      </section>
   );
}

function TechBadge({ backgroundColor, color = 'black', children }: { backgroundColor: string; color?: string; children: React.ReactNode }) {
   return (
      <div className="flex items-center gap-x-2 px-3 py-px rounded-full text-xs md:text-sm" style={{ backgroundColor, color }}>
         {children}
      </div>
   );
}
