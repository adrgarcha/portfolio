import { getTranslations } from 'next-intl/server';
import NextLink from 'next/link';

import { getPathname } from '@/i18n/navigation';

export default async function PrivacyPolicyEn() {
   const t = await getTranslations('legal');
   const esHref = getPathname({ href: '/politica-de-privacidad', locale: 'es' });

   return (
      <>
         <p>
            <strong>
               {t.rich('prevalenceNotice', {
                  link: (chunks) => (
                     <NextLink href={esHref}>
                        {chunks}
                     </NextLink>
                  ),
               })}
            </strong>
         </p>
         <h2>1. Data controller</h2>
         <ul>
            <li>Controller: Adrián García Chavero</li>
            <li>Tax ID (NIF): 45968205Z</li>
            <li>Address: Sevilla (Spain)</li>
            <li>Email: garciachaveroadrian@gmail.com</li>
         </ul>
         <h2>2. Data collected</h2>
         <p>
            This site does not have its own contact forms. Data is collected only when you book a meeting through the Cal.com calendar (name,
            email, and, where applicable, the information you provide when booking).
         </p>
         <h2>3. Purpose</h2>
         <p>To manage and follow up on the requested meeting, as well as to handle communication arising from it.</p>
         <h2>4. Legal basis</h2>
         <p>The data subject&apos;s consent when booking the meeting and the legitimate interest in handling their request.</p>
         <h2>5. Retention</h2>
         <p>Data will be retained for as long as necessary to fulfill the purpose and while any legal obligations require it.</p>
         <h2>6. Recipients and processors</h2>
         <p>The following providers, acting as data processors, are used to deliver the service:</p>
         <ul>
            <li>Scheduling: Cal.com</li>
            <li>Web hosting: Vercel</li>
            <li>Analytics: PostHog (servers in the EU) and Vercel Analytics</li>
            <li>Abuse prevention: Upstash (per-IP rate limiting)</li>
         </ul>
         <h2>7. Data subject rights</h2>
         <p>
            You can exercise your rights of access, rectification, erasure, objection, restriction, and portability by writing to{' '}
            garciachaveroadrian@gmail.com, providing proof of identity.
         </p>
         <h2>8. Supervisory authority</h2>
         <p>
            If you believe the processing does not comply with the regulations, you can file a complaint with the Agencia Española de Protección
            de Datos (AEPD, the Spanish Data Protection Agency), www.aepd.es.
         </p>
      </>
   );
}
