'use client';

import posthog from 'posthog-js';

import Reveal from '@/components/reveal';
import { LINKEDIN_TOPICS, LINKEDIN_URL } from '@/lib/constants';

export default function Linkedin() {
   return (
      <section className="section-pad">
         <div className="wrap">
            <Reveal className="sec-head">
               <span className="eyebrow">me encuentras en linkedin hablando de</span>
               <h2 className="t-1">Comparto lo que aprendo construyendo.</h2>
            </Reveal>
            <Reveal className="topics">
               {LINKEDIN_TOPICS.map((topic) => (
                  <div className="topic" key={topic.text}>
                     <span className="hash">#</span>
                     <span className="t">{topic.text}</span>
                     <span className="meta">// {topic.meta}</span>
                  </div>
               ))}
            </Reveal>
            <Reveal>
               <div style={{ marginTop: '2rem' }}>
                  <a
                     className="footer-ext"
                     href={LINKEDIN_URL}
                     target="_blank"
                     rel="noopener noreferrer"
                     onClick={() => posthog.capture('linkedin_clicked')}
                  >
                     Sígueme en LinkedIn <span className="arrow">↗</span>
                  </a>
               </div>
            </Reveal>
         </div>
      </section>
   );
}
