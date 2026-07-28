'use client';

import posthog from 'posthog-js';
import { useTranslations } from 'next-intl';

import Reveal from '@/components/reveal';
import { LINKEDIN_URL } from '@/lib/constants';

interface Topic {
   text: string;
   meta: string;
}

export default function Linkedin() {
   const t = useTranslations('linkedin');
   const topics = t.raw('topics') as Topic[];

   return (
      <section className="section-pad">
         <div className="wrap">
            <Reveal className="sec-head">
               <span className="eyebrow">{t('eyebrow')}</span>
               <h2 className="t-1">{t('heading')}</h2>
            </Reveal>
            <Reveal className="topics">
               {topics.map((topic) => (
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
                     {t('followLinkedin')} <span className="arrow">↗</span>
                  </a>
               </div>
            </Reveal>
         </div>
      </section>
   );
}
