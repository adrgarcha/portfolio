import { NextResponse } from 'next/server';

import { CAL_API_BASE, CAL_API_KEY, CAL_EVENT_SLUG, CAL_TIMEZONE, CAL_USERNAME, isCalConfigured } from '@/lib/cal';

export async function GET(request: Request) {
   const { searchParams } = new URL(request.url);
   const start = searchParams.get('start');
   const end = searchParams.get('end');

   if (!start || !end) {
      return NextResponse.json({ error: 'start y end son obligatorios' }, { status: 400 });
   }

   if (!isCalConfigured()) {
      return NextResponse.json({ configured: false, slots: {} });
   }

   const url = new URL(`${CAL_API_BASE}/slots`);
   url.searchParams.set('eventTypeSlug', CAL_EVENT_SLUG);
   url.searchParams.set('username', CAL_USERNAME);
   url.searchParams.set('start', start);
   url.searchParams.set('end', end);
   url.searchParams.set('timeZone', CAL_TIMEZONE);

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
         return NextResponse.json({ configured: true, error: json?.error?.message || 'Error al consultar disponibilidad', slots: {} }, { status: 502 });
      }

      return NextResponse.json({ configured: true, slots: json?.data || {} });
   } catch {
      return NextResponse.json({ configured: true, error: 'No se pudo conectar con el calendario', slots: {} }, { status: 502 });
   }
}
