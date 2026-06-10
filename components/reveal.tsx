'use client';

import { useEffect, useRef, type ReactNode } from 'react';

interface RevealProps {
   children: ReactNode;
   className?: string;
   as?: 'div' | 'section' | 'li' | 'article';
}

export default function Reveal({ children, className, as = 'div' }: RevealProps) {
   const ref = useRef<HTMLElement>(null);

   // useEffect required: IntersectionObserver is a browser API tied to the mounted DOM node.
   useEffect(() => {
      const el = ref.current;
      if (!el) return;
      const observer = new IntersectionObserver(
         (entries) => {
            entries.forEach((entry) => {
               if (entry.isIntersecting) {
                  entry.target.classList.add('in');
                  observer.unobserve(entry.target);
               }
            });
         },
         { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
      );
      observer.observe(el);
      return () => observer.disconnect();
   }, []);

   const Tag = as;
   return (
      <Tag ref={ref as never} className={`reveal${className ? ` ${className}` : ''}`}>
         {children}
      </Tag>
   );
}
