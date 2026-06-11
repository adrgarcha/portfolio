'use client';

import { useEffect, useState } from 'react';

interface HeroTypewriterProps {
   text: string;
}

const CHAR_DELAY = 38;
const CARET_FADE = 1400;

export default function HeroTypewriter({ text }: HeroTypewriterProps) {
   // Initial state renders the full text so it is present in the server-rendered HTML (crawlable);
   // the client restarts it as a typed animation after mount.
   const [typed, setTyped] = useState(text);
   const [done, setDone] = useState(true);

   // useEffect required: timed character reveal is a client-only animation over the mounted node.
   useEffect(() => {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReduced) return;

      setTyped('');
      setDone(false);
      let i = 0;
      const timers: ReturnType<typeof setTimeout>[] = [];
      const tick = () => {
         i += 1;
         setTyped(text.slice(0, i));
         if (i < text.length) {
            timers.push(setTimeout(tick, CHAR_DELAY + Math.random() * 30));
         } else {
            timers.push(setTimeout(() => setDone(true), CARET_FADE));
         }
      };
      timers.push(setTimeout(tick, CHAR_DELAY));
      return () => timers.forEach(clearTimeout);
   }, [text]);

   return (
      <b>
         {typed}
         {!done && <span className="tw-caret">&nbsp;</span>}
      </b>
   );
}
