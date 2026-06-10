import CtaLink from './cta-link';
import HeroTypewriter from './hero-typewriter';
import Portrait from './portrait';

export default function Hero() {
   return (
      <section className="hero">
         <div className="wrap hero-grid">
            <div className="hero-copy">
               <p className="hero-meta">
                  <span className="prompt"></span>
                  <HeroTypewriter text="adri_chavero · desarrollo a medida" />
               </p>
               <h1 className="h-hero">Tú me cuentas el problema. Yo te entrego el software que lo resuelve.</h1>
               <p className="lede">
                  Hecho para resolver un problema concreto de tu negocio. Tratas solamente conmigo de principio a fin.
               </p>
               <div className="hero-actions">
                  <CtaLink large source="hero" />
                  <span className="note comment">30 min · sin compromiso</span>
               </div>
            </div>
            <div className="hero-photo">
               <Portrait
                  src="/me.webp"
                  alt="Retrato de Adri Chavero, desarrollador full-stack"
                  tagPrefix="$"
                  tagText="whoami → adri_chavero"
               />
            </div>
         </div>
      </section>
   );
}
