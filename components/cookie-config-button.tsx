'use client';

import { COOKIE_CONFIG_EVENT } from '@/lib/consent';

interface CookieConfigButtonProps {
   label: string;
   className?: string;
}

export default function CookieConfigButton({ label, className }: CookieConfigButtonProps) {
   return (
      <button className={className} onClick={() => window.dispatchEvent(new Event(COOKIE_CONFIG_EVENT))}>
         {label}
      </button>
   );
}
