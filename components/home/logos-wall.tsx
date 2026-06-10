import Image from 'next/image';
import Reveal from '@/components/reveal';
import { BRANDS } from '@/lib/constants';

export default function LogosWall() {
   return (
      <section className="section-pad">
         <div className="wrap">
            <Reveal className="sec-head">
               <span className="kicker">marcas con las que he trabajado</span>
               <h2 className="t-2" style={{ marginTop: '0.6rem' }}>
                  Han confiado en mi trabajo
               </h2>
            </Reveal>
            <Reveal className="logos">
               {BRANDS.map((brand) => (
                  <span className="logo-cell" key={brand.name}>
                     <Image src={brand.logo} alt={brand.name} fill sizes="(max-width: 480px) 50vw, (max-width: 1024px) 33vw, 20vw" />
                  </span>
               ))}
            </Reveal>
         </div>
      </section>
   );
}
