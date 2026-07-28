import { NextResponse } from 'next/server';

import { CAL_API_BASE, CAL_API_KEY, CAL_EVENT_SLUG, CAL_TIMEZONE, CAL_USERNAME, isCalConfigured } from '@/lib/cal';
import { isValidTimeZone } from '@/lib/datetime';
import { clientIp, enforce, slotsLimiter } from '@/lib/ratelimit';

export async function GET(request: Request) {
   const { searchParams } = new URL(request.url);
   const start = searchParams.get('start');
   const end = searchParams.get('end');
   const requestedTimeZone = searchParams.get('timeZone');

   if (!start || !end) {
      return NextResponse.json({ error: 'missing_fields' }, { status: 400 });
   }

   if (!isCalConfigured()) {
      return NextResponse.json({ configured: false, slots: {} });
   }

   const { success, retryAfter } = await enforce(slotsLimiter, clientIp(request));
   if (!success) {
      return NextResponse.json(
         { configured: true, error: 'rate_limited', slots: {} },
         { status: 429, headers: { 'Retry-After': String(retryAfter) } },
      );
   }

   const timeZone = requestedTimeZone && isValidTimeZone(requestedTimeZone) ? requestedTimeZone : CAL_TIMEZONE;

   const url = new URL(`${CAL_API_BASE}/slots`);
   url.searchParams.set('eventTypeSlug', CAL_EVENT_SLUG);
   url.searchParams.set('username', CAL_USERNAME);
   url.searchParams.set('start', start);
   url.searchParams.set('end', end);
   url.searchParams.set('timeZone', timeZone);

   try {
      const res = await fetch(url, {
         headers: {
            Authorization: `Bearer ${CAL_API_KEY}`,
            'cal-api-version': '2024-09-04',
         },
         next: { revalidate: 60 },
      });

      const json = await res.json();
      if (!res.ok) {
         console.error('[slots] cal error', json?.error?.message || res.statusText);
         return NextResponse.json({ configured: true, error: 'cal_unavailable', slots: {} }, { status: 502 });
      }

      return NextResponse.json({ configured: true, slots: json?.data || {} });
   } catch (err) {
      console.error('[slots] request failed', err);
      return NextResponse.json({ configured: true, error: 'cal_unavailable', slots: {} }, { status: 502 });
   }
}
