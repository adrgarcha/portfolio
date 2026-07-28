import { getTranslations } from 'next-intl/server';
import NextLink from 'next/link';

import { getPathname } from '@/i18n/navigation';

export default async function LegalNoticeEn() {
   const t = await getTranslations('legal');
   const esHref = getPathname({ href: '/aviso-legal', locale: 'es' });

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
         <h2>1. Identification data</h2>
         <p>
            In compliance with Law 34/2002 on Information Society Services and Electronic Commerce (LSSI-CE, the Spanish e-commerce law), the
            following data about the owner of this website is provided:
         </p>
         <ul>
            <li>Owner: Adrián García Chavero</li>
            <li>Tax ID (NIF): 45968205Z</li>
            <li>Address: Sevilla (Spain)</li>
            <li>Email: garciachaveroadrian@gmail.com</li>
            <li>Website: adrichavero.com</li>
         </ul>
         <h2>2. Purpose</h2>
         <p>
            This notice governs the use of the website adrichavero.com, whose purpose is to provide information about the owner&apos;s custom
            software development services and to facilitate contact for scheduling a meeting.
         </p>
         <h2>3. Terms of use</h2>
         <p>
            Accessing and using this site grants the status of user and implies acceptance of these terms. The user agrees to make appropriate use
            of the content and not to use it for unlawful activities.
         </p>
         <h2>4. Intellectual and industrial property</h2>
         <p>
            All content on the site (text, design, code, trademarks, and logos) is owned by the controller or by third parties who have authorized
            its use, and is protected by intellectual and industrial property regulations. Its reproduction without authorization is prohibited.
         </p>
         <h2>5. Liability</h2>
         <p>
            The owner is not liable for damages arising from misuse of the site or for service interruptions beyond its control. Links to third
            parties (such as the Cal.com calendar) are governed by their own terms.
         </p>
         <h2>6. Applicable law</h2>
         <p>
            These terms are governed by Spanish law. For any dispute, the parties submit to the courts and tribunals that correspond under the law.
         </p>
      </>
   );
}
