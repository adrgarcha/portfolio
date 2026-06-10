'use client';

import Link from 'next/link';
import posthog from 'posthog-js';
import { useEffect, useState } from 'react';

import { CONSENT_KEY, COOKIE_CONFIG_EVENT, type Consent } from '@/lib/consent';

export default function CookieBanner() {
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
      <div className={`cookie${show ? ' show' : ''}`} role="dialog" aria-live="polite" aria-label="Consentimiento de cookies">
         <div className="ck-head">cookies</div>
         <p>
            Uso cookies técnicas y, si las aceptas, analíticas y las del calendario de Cal.com para mejorar tu experiencia. Puedes leer más en la{' '}
            <Link href="/politica-de-cookies">política de cookies</Link>.
         </p>
         <div className="cookie-actions">
            <button className="btn btn-primary" onClick={() => decide('accept')}>
               Aceptar
            </button>
            <button className="btn btn-ghost" onClick={() => decide('reject')}>
               Rechazar
            </button>
            <Link className="btn btn-ghost" href="/politica-de-cookies">
               Configurar
            </Link>
         </div>
      </div>
   );
}
