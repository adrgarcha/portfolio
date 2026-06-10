import Image from 'next/image';

import Reveal from '@/components/reveal';
import { TESTIMONIALS } from '@/lib/constants';

export default function Testimonials() {
   return (
      <section className="section-pad">
         <div className="wrap">
            <Reveal className="sec-head">
               <span className="eyebrow">testimonios</span>
               <h2 className="t-1">Qué dicen quienes han trabajado conmigo.</h2>
            </Reveal>
            <Reveal className="quotes">
               {TESTIMONIALS.map((testimonial, i) => (
                  <blockquote className="card quote" key={i}>
                     <span className="mark">&quot;</span>
                     <p style={{ color: 'var(--text)', fontWeight: 300, lineHeight: 1.6, fontSize: '1.05rem' }}>{testimonial.quote}</p>
                     <span className="who">
                        <span className="avatar">
                           <Image src={testimonial.avatar} alt={testimonial.name} fill sizes="44px" style={{ objectFit: 'cover' }} />
                        </span>
                        <span>
                           <span className="name">{testimonial.name}</span>
                           <br />
                           <span className="role">{testimonial.role}</span>
                        </span>
                     </span>
                  </blockquote>
               ))}
            </Reveal>
         </div>
      </section>
   );
}
