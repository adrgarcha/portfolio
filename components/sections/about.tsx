'use client';

import { Mail } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Button from '../button';
import LinkedIn from '../icons/linkedin';

export default function About() {
   const t = useTranslations('about');
   const tButton = useTranslations('button');

   return (
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-around gap-y-24 pb-12 md:pb-0" id="about">
         <div className="mt-16 mb-10 md:mt-0 md:mb-0">
            <h1 className="text-7xl md:text-8xl font-black !leading-[1.15] md:w-[425px] text-center md:text-left">
               {t.rich('title', {
                  name: chunks => <span className="text-primary">{chunks}</span>,
               })}
            </h1>
            <p className="mt-3 mb-6 md:text-xl leading-snug w-96 md:w-[500px] text-center md:text-left">
               {t.rich('description', {
                  career: chunks => <b className="text-primary">{chunks}</b>,
                  unique: chunks => <b>{chunks}</b>,
               })}
            </p>
            <div className="flex items-center justify-center md:justify-normal gap-x-8">
               <a href="mailto:garciachaveroadrian@gmail.com">
                  <Button>
                     <Mail />
                     {tButton('contact')}
                  </Button>
               </a>
               <a href="https://www.linkedin.com/in/adrian-garcia-chavero/" target="_blank">
                  <Button variant="secondary">
                     <LinkedIn />
                     LinkedIn
                  </Button>
               </a>
            </div>
         </div>
         <div className="relative">
            <Image
               src="/me.jpg"
               alt="A profile picture of myself."
               width={2092}
               height={2092}
               className="size-[384px] rounded-full border-4 border-primary"
               priority
            />
            <div className="absolute bottom-[5.10rem] md:bottom-[3.40rem] left-48 md:left-3/4 bg-primary w-[378px] md:w-[382px] h-[600px] md:h-[850px] -z-10 rotate-45" />
         </div>
      </section>
   );
}
