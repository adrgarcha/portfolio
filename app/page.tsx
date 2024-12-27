import About from '@/components/sections/about';
import Contact from '@/components/sections/contact';
import Experience from '@/components/sections/experience';
import Projects from '@/components/sections/projects';

export default function Home() {
   return (
      <main>
         <About />
         <Experience />
         <Projects />
         <Contact />
      </main>
   );
}
