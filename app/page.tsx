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

export default function Home() {
   return (
      <main>
         <Hero />
         <Pains />
         <hr className="divider" />
         <ServicesHome />
         <hr className="divider" />
         <TechStack />
         <hr className="divider" />
         <CasesHome />
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
