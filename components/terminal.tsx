'use client';

import { ExternalLinkIcon } from 'lucide-react';
import Link from 'next/link';
import posthog from 'posthog-js';
import { useRef } from 'react';
import { useTypewriter } from '@/hooks/use-typewriter';
import { useSpeedBoost } from '@/hooks/use-speed-boost';
import { CAL_LINK, TERMINAL_LINES } from '@/lib/constants';
import type { DisplayedLine } from '@/lib/types';

interface TerminalHeaderProps {
   showHint: boolean;
   hintVisible: boolean;
   hintText: string;
}

function TerminalHeader({ showHint, hintVisible, hintText }: TerminalHeaderProps) {
   return (
      <div className="bg-tertiary/90 border-b border-secondary/15 px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-1.5 sm:gap-2 flex-wrap">
         <div className="flex items-center gap-1.5 sm:gap-2">
            <div className="size-2.5 sm:size-3 rounded-full bg-[#ff5f56]" />
            <div className="size-2.5 sm:size-3 rounded-full bg-[#ffbd2e]" />
            <div className="size-2.5 sm:size-3 rounded-full bg-[#27c93f]" />
         </div>
         <span className="ml-2 sm:ml-4 text-xs sm:text-sm text-foreground/50 truncate">
            <span className="hidden xs:inline">adrichavero.com — </span>bash
         </span>
         {showHint && (
            <span
               className={`ml-auto text-[10px] sm:text-xs text-foreground/30 transition-opacity duration-300 whitespace-nowrap ${hintVisible ? 'opacity-100' : 'opacity-0'}`}>
               {hintText}
            </span>
         )}
      </div>
   );
}

interface TerminalLinesProps {
   lines: DisplayedLine[];
   isTyping: boolean;
}

function TerminalLines({ lines, isTyping }: TerminalLinesProps) {
   return (
      <div className="space-y-1 text-sm sm:text-base">
         {lines.map((line, index) => (
            <div key={index} className="flex">
               <span className={`${line.isCommand ? 'text-primary' : 'text-foreground/90'} ${line.isOutput ? 'pl-2' : ''} break-words`}>
                  {line.text}
                  {index === lines.length - 1 && isTyping && (
                     <span className="inline-block w-1.5 sm:w-2 h-4 sm:h-5 bg-primary ml-1 align-middle animate-blink" />
                  )}
               </span>
            </div>
         ))}
         {!isTyping && (
            <div className="flex items-center mt-4">
               <span className="text-primary">{'> '}</span>
               <span className="inline-block w-1.5 sm:w-2 h-4 sm:h-5 bg-primary animate-blink" />
            </div>
         )}
      </div>
   );
}

interface TerminalCtaProps {
   onLinkClick: () => void;
}

function TerminalCta({ onLinkClick }: TerminalCtaProps) {
   return (
      <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-foreground/10">
         <Link
            href={CAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onLinkClick}
            className="group inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 bg-primary/10 border border-primary/30 rounded-lg hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 w-full sm:w-auto">
            <span className="text-primary font-medium text-sm sm:text-base">$ open</span>
            <span className="text-foreground group-hover:text-primary transition-colors text-sm sm:text-base truncate">
               <span className="hidden sm:inline">{CAL_LINK}</span>
               <span className="sm:hidden">cal.com/adrichavero</span>
            </span>
            <ExternalLinkIcon className="size-4 text-primary flex-shrink-0 sm:opacity-0 sm:-translate-x-2 sm:group-hover:opacity-100 sm:group-hover:translate-x-0 transition-all duration-300" />
         </Link>
      </div>
   );
}

export default function Terminal() {
   const containerRef = useRef<HTMLDivElement>(null);
   const speedBoostUsedRef = useRef(false);
   const animationStartTimeRef = useRef<number>(Date.now());
   const isTypingRef = useRef(true);
   const isFastRef = useRef(false);

   const handleSpeedBoostUsed = (timeElapsed: number, inputType?: string) => {
      speedBoostUsedRef.current = true;
      posthog.capture('terminal_speed_boost_used', {
         time_until_boost_seconds: timeElapsed,
         input_type: inputType,
      });
   };

   const handleAnimationComplete = () => {
      isTypingRef.current = false;
      posthog.capture('terminal_animation_completed', {
         total_duration_seconds: (Date.now() - animationStartTimeRef.current) / 1000,
         used_speed_boost: speedBoostUsedRef.current,
      });
   };

   const { isBoosting, showHint, hintVisible, isTouchDevice } = useSpeedBoost({
      isTypingRef,
      containerRef,
      onFirstBoost: handleSpeedBoostUsed,
   });

   isFastRef.current = isBoosting;

   const { displayedLines, isTyping } = useTypewriter({
      lines: TERMINAL_LINES,
      isFastRef,
      onComplete: handleAnimationComplete,
   });

   isTypingRef.current = isTyping;

   const hintText = isTouchDevice ? 'mantén pulsado para acelerar' : '[espacio] para acelerar';

   const handleCtaClick = () => {
      posthog.capture('calendar_cta_clicked', {
         time_to_click_seconds: (Date.now() - animationStartTimeRef.current) / 1000,
         used_speed_boost: speedBoostUsedRef.current,
      });
   };

   return (
      <div className="w-full max-w-3xl mx-auto">
         <div
            ref={containerRef}
            className="bg-background/95 border border-secondary/15 rounded-lg overflow-hidden shadow-2xl shadow-black/50 ring-1 ring-primary/10 select-none touch-none">
            <TerminalHeader showHint={showHint && isTyping} hintVisible={hintVisible} hintText={hintText} />
            <div className="p-4 sm:p-6 md:p-8 min-h-[350px] sm:min-h-[400px] md:min-h-[500px]">
               <TerminalLines lines={displayedLines} isTyping={isTyping} />
               {!isTyping && <TerminalCta onLinkClick={handleCtaClick} />}
            </div>
         </div>
         <p className="text-center mt-4 sm:mt-6 text-foreground/40 text-xs sm:text-sm">© {new Date().getFullYear()} Adrián García</p>
      </div>
   );
}
