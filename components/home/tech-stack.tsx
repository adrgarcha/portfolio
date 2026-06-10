import Reveal from '@/components/reveal';
import { TECH_STACK } from '@/lib/constants';

export default function TechStack() {
   return (
      <section className="section-pad">
         <div className="wrap">
            <Reveal className="sec-head">
               <span className="kicker">las herramientas con las que construyo</span>
               <h2 className="t-2" style={{ marginTop: '0.6rem' }}>
                  Stack
               </h2>
            </Reveal>
            <Reveal className="stack-row">
               {TECH_STACK.map((tech) => (
                  <span className="tech" key={tech}>
                     <span className="dot"></span>
                     {tech}
                  </span>
               ))}
            </Reveal>
         </div>
      </section>
   );
}
