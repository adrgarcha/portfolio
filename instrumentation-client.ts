import posthog from 'posthog-js';

import { CONSENT_KEY } from './lib/consent';

const consent = typeof window !== 'undefined' ? window.localStorage.getItem(CONSENT_KEY) : null;

posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
   api_host: '/ingest',
   ui_host: process.env.NEXT_PUBLIC_POSTHOG_HOST!,
   defaults: '2025-05-24',
   capture_exceptions: true,
   debug: process.env.NODE_ENV === 'development',
   opt_out_capturing_by_default: consent !== 'accept',
   persistence: consent === 'accept' ? 'localStorage+cookie' : 'memory',
});
