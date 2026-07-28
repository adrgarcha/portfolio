import { getTranslations } from 'next-intl/server';
import NextLink from 'next/link';

import CookieConfigButton from '@/components/cookie-config-button';
import { getPathname } from '@/i18n/navigation';

export default async function CookiePolicyEn() {
   const t = await getTranslations('legal');
   const esHref = getPathname({ href: '/politica-de-cookies', locale: 'es' });

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
         <h2>1. What cookies are</h2>
         <p>
            Cookies are small files that are downloaded to your device when you visit certain pages and allow, among other things, remembering
            preferences or measuring site usage.
         </p>
         <h2>2. Types of cookies used on this site</h2>
         <ul>
            <li>Technical: necessary for the site to function. They do not require consent.</li>
            <li>Analytics: PostHog, to understand in aggregate how the site is used. They require consent.</li>
            <li>
               Cookie-less analytics: Vercel Analytics measures usage in an aggregated and anonymous way without installing cookies, so it does not
               require consent.
            </li>
            <li>Third-party: the Cal.com calendar embed may set its own cookies, governed by its own policy.</li>
         </ul>
         <h2>3. Purpose</h2>
         <p>To ensure the site functions properly, remember your consent preferences, and, if you accept them, obtain usage statistics.</p>
         <h2>4. Management and opt-out</h2>
         <p>
            You can accept, reject, or configure cookies from the consent banner. You can also manage or delete them from your browser settings.
         </p>
         <p style={{ marginTop: '1.4rem' }}>
            <CookieConfigButton label={t('cookiePolicy.openSettings')} className="btn btn-ghost" />
         </p>
      </>
   );
}
