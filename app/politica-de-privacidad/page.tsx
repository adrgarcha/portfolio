import type { Metadata } from 'next';

import LegalShell from '@/components/legal-shell';

export const metadata: Metadata = {
   title: 'Política de privacidad',
   robots: { index: false },
};

export default function PoliticaPrivacidadPage() {
   return (
      <LegalShell crumb="política de privacidad" title="Política de privacidad">
         <h2>1. Responsable del tratamiento</h2>
         <ul>
            <li>
               Responsable: <span className="ph-field">[NOMBRE Y APELLIDOS]</span>
            </li>
            <li>
               NIF: <span className="ph-field">[NIF]</span>
            </li>
            <li>
               Domicilio: <span className="ph-field">[DOMICILIO]</span>
            </li>
            <li>
               Correo electrónico: <span className="ph-field">[EMAIL]</span>
            </li>
         </ul>
         <h2>2. Datos que se recaban</h2>
         <p>
            Este sitio no dispone de formularios de contacto propios. Los datos se recaban únicamente cuando agendas una reunión a través del
            calendario de Cal.com (nombre, correo electrónico y, en su caso, la información que aportes al reservar).
         </p>
         <h2>3. Finalidad</h2>
         <p>Gestionar y mantener la reunión solicitada, así como atender la comunicación derivada de ella.</p>
         <h2>4. Base legal</h2>
         <p>El consentimiento del interesado al reservar la reunión y el interés legítimo en atender su solicitud.</p>
         <h2>5. Conservación</h2>
         <p>
            Los datos se conservarán durante el tiempo necesario para atender la finalidad y mientras existan obligaciones legales que lo requieran.
         </p>
         <h2>6. Destinatarios y encargados</h2>
         <p>Para la prestación del servicio se utilizan los siguientes proveedores, que actúan como encargados del tratamiento:</p>
         <ul>
            <li>
               Agendamiento: <span className="ph-field">[Cal.com]</span>
            </li>
            <li>
               Alojamiento web: <span className="ph-field">[hosting]</span>
            </li>
            <li>
               Analítica: <span className="ph-field">[analítica]</span>
            </li>
         </ul>
         <h2>7. Derechos del interesado</h2>
         <p>
            Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a{' '}
            <span className="ph-field">[EMAIL]</span>, acreditando tu identidad.
         </p>
         <h2>8. Autoridad de control</h2>
         <p>
            Si consideras que el tratamiento no se ajusta a la normativa, puedes presentar una reclamación ante la Agencia Española de Protección de
            Datos (AEPD), www.aepd.es.
         </p>
      </LegalShell>
   );
}
