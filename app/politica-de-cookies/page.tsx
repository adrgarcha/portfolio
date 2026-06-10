import type { Metadata } from 'next';

import CookieConfigButton from '@/components/cookie-config-button';
import LegalShell from '@/components/legal-shell';

export const metadata: Metadata = {
   title: 'Política de cookies',
   robots: { index: false },
};

export default function PoliticaCookiesPage() {
   return (
      <LegalShell crumb="política de cookies" title="Política de cookies">
         <h2>1. Qué son las cookies</h2>
         <p>
            Las cookies son pequeños archivos que se descargan en tu dispositivo al visitar determinadas páginas y permiten, entre otras cosas,
            recordar preferencias o medir el uso del sitio.
         </p>
         <h2>2. Tipos de cookies que utiliza este sitio</h2>
         <ul>
            <li>Técnicas: necesarias para el funcionamiento del sitio. No requieren consentimiento.</li>
            <li>
               Analíticas: <span className="ph-field">[analítica]</span> para entender de forma agregada cómo se usa el sitio. Requieren
               consentimiento.
            </li>
            <li>
               De terceros: el embed del calendario de <span className="ph-field">[Cal.com]</span> puede instalar cookies propias regidas por su
               política.
            </li>
         </ul>
         <h2>3. Finalidad</h2>
         <p>
            Garantizar el funcionamiento del sitio, recordar tus preferencias de consentimiento y, si las aceptas, obtener estadísticas de uso.
         </p>
         <h2>4. Gestión y desactivación</h2>
         <p>
            Puedes aceptar, rechazar o configurar las cookies desde el banner de consentimiento. También puedes gestionarlas o eliminarlas desde la
            configuración de tu navegador.
         </p>
         <p style={{ marginTop: '1.4rem' }}>
            <CookieConfigButton label="Abrir configuración de cookies" className="btn btn-ghost" />
         </p>
      </LegalShell>
   );
}
