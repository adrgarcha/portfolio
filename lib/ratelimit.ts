import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

const isRedisConfigured = () => Boolean(process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN);

const redis = isRedisConfigured() ? Redis.fromEnv() : null;

export const bookingsLimiter = redis
   ? new Ratelimit({ redis, limiter: Ratelimit.slidingWindow(5, '10 m'), prefix: 'rl:bookings', analytics: false })
   : null;

export const slotsLimiter = redis
   ? new Ratelimit({ redis, limiter: Ratelimit.slidingWindow(30, '1 m'), prefix: 'rl:slots', analytics: false })
   : null;

export function clientIp(request: Request) {
   const forwarded = request.headers.get('x-forwarded-for');
   return forwarded?.split(',')[0]?.trim() || 'unknown';
}

interface EnforceResult {
   success: boolean;
   retryAfter: number;
}

export async function enforce(limiter: Ratelimit | null, ip: string): Promise<EnforceResult> {
   if (!limiter) return { success: true, retryAfter: 0 };
   const { success, reset } = await limiter.limit(ip);
   return { success, retryAfter: Math.max(0, Math.ceil((reset - Date.now()) / 1000)) };
}
