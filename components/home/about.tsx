import Portrait from '@/components/portrait';
import Reveal from '@/components/reveal';

export default function About() {
   return (
      <section className="section-pad" id="sobre-mi">
         <div className="wrap about-grid">
            <Reveal className="about-photo">
               <Portrait
                  src="/about-me/monesterio.webp"
                  alt="Monesterio, pueblo de Extremadura donde se crió Adri Chavero"
                  placeholder="foto · Extremadura"
                  tagPrefix="$"
                  tagText="cd ~/origenes"
               />
            </Reveal>
            <Reveal className="about-copy">
               <span className="eyebrow">sobre mí</span>
               <h2 className="t-1" style={{ margin: '0.6rem 0 1.4rem' }}>
                  De un pueblo de Extremadura a tu proyecto.
               </h2>
               <p>
                  Soy de <strong>Monesterio</strong>, un pueblo al sur de Extremadura, de una familia humilde donde no se mira a nadie
                  por encima del hombro. No fui de esos que con doce años ya programaban: me metí en esto porque mi padre me dijo que
                  tenía futuro, y la pasión la encontré después, ya en la carrera.
               </p>
               <p>
                  Lo que vino luego me enseñó sobre todo qué trabajo <strong>no</strong> quería. En cada empresa por la que pasé había un
                  muro entre yo y la gente que de verdad usaba lo que construía: un intermediario, un proceso, siempre algo de por medio.
                  Trabajaba un poco a ciegas, sin llegar a saber si lo que hacía le servía a alguien. Y resulta que eso, saber que le
                  mejoro el día a una persona, es justo lo que me mueve.
               </p>
               <p>
                  Por eso me hice freelance: para tirar ese muro abajo. Para mí esto no va de entregarte un trabajo y desaparecer, sino de{' '}
                  <strong>preocuparme por tu producto como si fuera mío</strong>. Trabajando conmigo hablas claro y directo con quien
                  construye tu software, y yo veo de primera mano si te cambia las cosas. Sin intermediarios y sin sorpresas.
               </p>
            </Reveal>
         </div>
      </section>
   );
}
