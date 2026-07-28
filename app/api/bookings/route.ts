import { NextResponse } from 'next/server';

import {
   CAL_API_BASE,
   CAL_API_KEY,
   CAL_EVENT_SLUG,
   CAL_SERVICE_FIELD,
   CAL_SERVICE_OPTIONS,
   CAL_TIMEZONE,
   CAL_USERNAME,
   isCalConfigured,
} from '@/lib/cal';
import { isValidTimeZone } from '@/lib/datetime';
import { getPostHogClient } from '@/lib/posthog-server';
import { bookingsLimiter, clientIp, enforce } from '@/lib/ratelimit';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NAME_MAX = 120;
const EMAIL_MAX = 160;

interface BookingBody {
   start?: string;
   name?: string;
   email?: string;
   notes?: string;
   services?: string[];
   timeZone?: string;
   locale?: string;
}

export async function POST(request: Request) {
   if (!isCalConfigured()) {
      return NextResponse.json({ error: 'not_configured' }, { status: 503 });
   }

   const { success, retryAfter } = await enforce(bookingsLimiter, clientIp(request));
   if (!success) {
      return NextResponse.json({ error: 'rate_limited' }, { status: 429, headers: { 'Retry-After': String(retryAfter) } });
   }

   let body: BookingBody;
   try {
      body = await request.json();
   } catch {
      return NextResponse.json({ error: 'invalid_request' }, { status: 400 });
   }

   const { start, name, email, notes, services, timeZone, locale } = body;
   if (!start || !name?.trim() || !email?.trim()) {
      return NextResponse.json({ error: 'missing_fields' }, { status: 400 });
   }
   if (name.trim().length > NAME_MAX || email.trim().length > EMAIL_MAX) {
      return NextResponse.json({ error: 'too_long' }, { status: 400 });
   }
   if (!EMAIL_RE.test(email)) {
      return NextResponse.json({ error: 'invalid_email' }, { status: 400 });
   }

   const allowedServices: string[] = CAL_SERVICE_OPTIONS.map((option) => option.value);
   const selectedServices = (services || []).filter((s) => allowedServices.includes(s));
   if (selectedServices.length === 0) {
      return NextResponse.json({ error: 'no_service_selected' }, { status: 400 });
   }

   const attendeeTimeZone = typeof timeZone === 'string' && isValidTimeZone(timeZone) ? timeZone : CAL_TIMEZONE;
   const attendeeLanguage = locale === 'es' || locale === 'en' ? locale : 'es';

   try {
      const res = await fetch(`${CAL_API_BASE}/bookings`, {
         method: 'POST',
         headers: {
            Authorization: `Bearer ${CAL_API_KEY}`,
            'cal-api-version': '2024-08-13',
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            eventTypeSlug: CAL_EVENT_SLUG,
            username: CAL_USERNAME,
            start,
            attendee: {
               name: name.trim(),
               email: email.trim(),
               timeZone: attendeeTimeZone,
               language: attendeeLanguage,
            },
            bookingFieldsResponses: { [CAL_SERVICE_FIELD]: selectedServices },
            metadata: notes ? { notes: notes.slice(0, 480) } : {},
         }),
      });

      const json = await res.json();
      if (!res.ok || json?.status === 'error') {
         const errorMessage = json?.error?.message || 'unknown';
         console.error('[bookings] cal error', errorMessage);
         getPostHogClient().capture({
            distinctId: crypto.randomUUID(),
            event: 'booking_api_failed',
            properties: { error: errorMessage, start },
         });
         return NextResponse.json({ error: 'cal_unavailable' }, { status: 502 });
      }

      getPostHogClient().capture({
         distinctId: json?.data?.uid || crypto.randomUUID(),
         event: 'booking_api_success',
         properties: { start, booking_id: json?.data?.uid || null },
      });
      return NextResponse.json({ ok: true, booking: json?.data || null }, { status: 201 });
   } catch (err) {
      console.error('[bookings] request failed', err);
      return NextResponse.json({ error: 'cal_unavailable' }, { status: 502 });
   }
}
