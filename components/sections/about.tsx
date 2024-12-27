import { Mail } from 'lucide-react';
import Image from 'next/image';
import Button from '../button';
import LinkedIn from '../icons/linkedin';

export default function About() {
   return (
      <section className="min-h-screen flex items-center justify-between" id="about">
         <div>
            <h1 className="text-8xl font-black leading-[1.15] w-[425px]">
               Hey, soy <span className="text-primary">Adrián</span>
            </h1>
            <p className="mt-3 mb-6 text-xl leading-snug w-[500px]">
               +1 año de experiencia. <b className="text-primary">Ingeniero de Software y Desarrollador full stack</b> de Sevilla, España 🇪🇸.
               Especializado en el desarrollo de aplicaciones web y móviles <b>únicas</b>.
            </p>
            <div className="flex items-center gap-x-8">
               <a href="mailto:garciachaveroadrian@gmail.com">
                  <Button>
                     <Mail />
                     Contáctame
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
               className="size-96 rounded-full border-4 border-primary"
            />
            <div className="absolute bottom-[3.40rem] left-3/4 bg-primary w-[382px] h-[850px] -z-10 rotate-45" />
         </div>
      </section>
   );
}
