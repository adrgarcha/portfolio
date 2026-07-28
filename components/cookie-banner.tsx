'use client';

import posthog from 'posthog-js';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

import { Link } from '@/i18n/navigation';
import { CONSENT_KEY, COOKIE_CONFIG_EVENT, type Consent } from '@/lib/consent';

export default function CookieBanner() {
   const t = useTranslations('cookies');
   const [show, setShow] = useState(false);

   // useEffect required: reads localStorage + schedules first-visit reveal, both client-only side effects.
   useEffect(() => {
      const stored = window.localStorage.getItem(CONSENT_KEY);
      const timers: ReturnType<typeof setTimeout>[] = [];
      if (!stored) {
         timers.push(setTimeout(() => setShow(true), 900));
      }
      const reopen = () => setShow(true);
      window.addEventListener(COOKIE_CONFIG_EVENT, reopen);
      return () => {
         timers.forEach(clearTimeout);
         window.removeEventListener(COOKIE_CONFIG_EVENT, reopen);
      };
   }, []);

   const decide = (consent: Consent) => {
      window.localStorage.setItem(CONSENT_KEY, consent);
      if (consent === 'accept') {
         posthog.set_config({ persistence: 'localStorage+cookie' });
         posthog.opt_in_capturing();
         posthog.capture('cookie_consent_accepted');
      } else {
         posthog.capture('cookie_consent_rejected');
         posthog.opt_out_capturing();
      }
      setShow(false);
   };

   return (
      <div className={`cookie${show ? ' show' : ''}`} role="dialog" aria-live="polite" aria-label={t('ariaLabel')}>
         <div className="ck-head">{t('heading')}</div>
         <p>
            {t.rich('body', {
               link: (chunks) => <Link href="/politica-de-cookies">{chunks}</Link>,
            })}
         </p>
         <div className="cookie-actions">
            <button className="btn btn-primary" onClick={() => decide('accept')}>
               {t('accept')}
            </button>
            <button className="btn btn-ghost" onClick={() => decide('reject')}>
               {t('reject')}
            </button>
         </div>
      </div>
   );
}
