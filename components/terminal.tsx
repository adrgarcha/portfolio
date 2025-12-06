'use client';

import { ExternalLinkIcon } from 'lucide-react';
import Link from 'next/link';
import posthog from 'posthog-js';
import { useEffect, useRef, useState } from 'react';

const TYPING_SPEED = 40;
const FAST_TYPING_SPEED = 10;
const LINE_DELAY = 600;
const FAST_LINE_DELAY = 150;

const CAL_LINK = 'https://cal.com/adrichavero';

interface TerminalLine {
   text: string;
   isCommand?: boolean;
   isOutput?: boolean;
   delay?: number;
}

const allLines: TerminalLine[] = [
   { text: '> Initializing adrichavero.com v2...', isCommand: true },
   { text: '> Status: En mantenimiento temporal.', isCommand: true },
   { text: '> Reason: Estamos afinando motores.', isCommand: true },
   { text: '> ETA: Próximamente.', isCommand: true },
   { text: '', delay: 1500 },
   { text: '> Ejecutando presentación rápida...', isCommand: true },
   { text: '', delay: 800 },
   { text: '> ¿Quién está detrás?', isCommand: true },
   { text: '', delay: 400 },
   { text: 'Soy Adrián.', isOutput: true },
   { text: 'Desarrollo aplicaciones web y móviles desde cero para startups y empresas.', isOutput: true },
   { text: 'Me enfoco en una arquitectura limpia, desarrollo ágil y productos que crecen sin sorpresas.', isOutput: true },
   { text: '', delay: 400 },
   { text: 'La nueva versión de mi web está casi lista.', isOutput: true },
   { text: '', delay: 1000 },
   { text: '> ¿Quieres hablar conmigo antes del lanzamiento?', isCommand: true },
   { text: '', delay: 400 },
   { text: '> Ejecuta el comando:', isCommand: true },
   { text: `  open ${CAL_LINK}`, isOutput: true },
];

export default function Terminal() {
   const [displayedLines, setDisplayedLines] = useState<{ text: string; isCommand?: boolean; isOutput?: boolean }[]>([]);
   const [isTyping, setIsTyping] = useState(true);
   const [showHint, setShowHint] = useState(false);
   const [hintVisible, setHintVisible] = useState(false);
   const [isTouchDevice, setIsTouchDevice] = useState(false);
   const lineIndexRef = useRef(0);
   const charIndexRef = useRef(0);
   const timeoutRef = useRef<NodeJS.Timeout | null>(null);
   const hintTimeoutRef = useRef<NodeJS.Timeout | null>(null);
   const isSpaceHeldRef = useRef(false);
   const hasUsedSpaceRef = useRef(false);
   const animationStartTimeRef = useRef<number>(Date.now());
   const speedBoostUsedRef = useRef(false);
   const animationCompletedRef = useRef(false);
   const terminalRef = useRef<HTMLDivElement>(null);

   const scheduleHint = () => {
      if (hintTimeoutRef.current) {
         clearTimeout(hintTimeoutRef.current);
      }
      hintTimeoutRef.current = setTimeout(() => {
         if (isTyping && !hasUsedSpaceRef.current) {
            setShowHint(true);
            requestAnimationFrame(() => setHintVisible(true));
         }
      }, 2000);
   };

   useEffect(() => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
   }, []);

   useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
         if (e.code === 'Space' && isTyping) {
            e.preventDefault();
            isSpaceHeldRef.current = true;
            hasUsedSpaceRef.current = true;
            setHintVisible(false);
            setTimeout(() => setShowHint(false), 300);
            if (hintTimeoutRef.current) {
               clearTimeout(hintTimeoutRef.current);
            }
         }
      };

      const handleKeyUp = (e: KeyboardEvent) => {
         if (e.code === 'Space') {
            isSpaceHeldRef.current = false;
            if (isTyping) {
               hasUsedSpaceRef.current = false;
               scheduleHint();
            }
         }
      };

      const handleFirstSpeedBoost = () => {
         if (!speedBoostUsedRef.current) {
            speedBoostUsedRef.current = true;
            posthog.capture('terminal_speed_boost_used', {
               time_until_boost_seconds: (Date.now() - animationStartTimeRef.current) / 1000,
            });
         }
      };

      const originalKeyDown = handleKeyDown;
      const wrappedKeyDown = (e: KeyboardEvent) => {
         if (e.code === 'Space' && isTyping) {
            handleFirstSpeedBoost();
         }
         originalKeyDown(e);
      };

      window.addEventListener('keydown', wrappedKeyDown);
      window.addEventListener('keyup', handleKeyUp);

      return () => {
         window.removeEventListener('keydown', wrappedKeyDown);
         window.removeEventListener('keyup', handleKeyUp);
      };
   }, [isTyping]);

   useEffect(() => {
      const terminal = terminalRef.current;
      if (!terminal) return;

      const handleTouchStart = (e: TouchEvent) => {
         if (!isTyping) return;
         e.preventDefault();
         isSpaceHeldRef.current = true;
         hasUsedSpaceRef.current = true;
         setHintVisible(false);
         setTimeout(() => setShowHint(false), 300);
         if (hintTimeoutRef.current) {
            clearTimeout(hintTimeoutRef.current);
         }
         if (!speedBoostUsedRef.current) {
            speedBoostUsedRef.current = true;
            posthog.capture('terminal_speed_boost_used', {
               time_until_boost_seconds: (Date.now() - animationStartTimeRef.current) / 1000,
               input_type: 'touch',
            });
         }
      };

      const handleTouchEnd = () => {
         isSpaceHeldRef.current = false;
         if (isTyping) {
            hasUsedSpaceRef.current = false;
            scheduleHint();
         }
      };

      terminal.addEventListener('touchstart', handleTouchStart, { passive: false });
      terminal.addEventListener('touchend', handleTouchEnd);

      return () => {
         terminal.removeEventListener('touchstart', handleTouchStart);
         terminal.removeEventListener('touchend', handleTouchEnd);
      };
   }, [isTyping]);

   useEffect(() => {
      scheduleHint();

      return () => {
         if (hintTimeoutRef.current) {
            clearTimeout(hintTimeoutRef.current);
         }
      };
   }, []);

   useEffect(() => {
      if (!isTyping) {
         setHintVisible(false);
         setTimeout(() => setShowHint(false), 300);
         if (hintTimeoutRef.current) {
            clearTimeout(hintTimeoutRef.current);
         }
      }
   }, [isTyping]);

   useEffect(() => {
      const typeNextChar = () => {
         const currentLineIndex = lineIndexRef.current;
         const currentCharIndex = charIndexRef.current;
         const isFast = isSpaceHeldRef.current;

         if (currentLineIndex >= allLines.length) {
            setIsTyping(false);
            if (!animationCompletedRef.current) {
               animationCompletedRef.current = true;
               posthog.capture('terminal_animation_completed', {
                  total_duration_seconds: (Date.now() - animationStartTimeRef.current) / 1000,
                  used_speed_boost: speedBoostUsedRef.current,
               });
            }
            return;
         }

         const currentLine = allLines[currentLineIndex];
         const currentTypingSpeed = isFast ? FAST_TYPING_SPEED : TYPING_SPEED;
         const currentLineDelay = isFast ? FAST_LINE_DELAY : LINE_DELAY;

         if (currentCharIndex === 0) {
            setDisplayedLines(prev => [...prev, { text: '', isCommand: currentLine.isCommand, isOutput: currentLine.isOutput }]);

            if (currentLine.delay && currentLine.text === '') {
               lineIndexRef.current += 1;
               const delay = isFast ? Math.min(currentLine.delay, FAST_LINE_DELAY) : currentLine.delay;
               timeoutRef.current = setTimeout(typeNextChar, delay);
               return;
            }

            if (currentLine.text === '') {
               lineIndexRef.current += 1;
               timeoutRef.current = setTimeout(typeNextChar, currentLineDelay);
               return;
            }
         }

         if (currentCharIndex < currentLine.text.length) {
            setDisplayedLines(prev => {
               const newLines = [...prev];
               const lastIndex = newLines.length - 1;
               if (lastIndex >= 0) {
                  newLines[lastIndex] = {
                     ...newLines[lastIndex],
                     text: currentLine.text.slice(0, currentCharIndex + 1),
                  };
               }
               return newLines;
            });
            charIndexRef.current += 1;
            timeoutRef.current = setTimeout(typeNextChar, currentTypingSpeed);
         } else {
            lineIndexRef.current += 1;
            charIndexRef.current = 0;
            timeoutRef.current = setTimeout(typeNextChar, currentLineDelay);
         }
      };

      timeoutRef.current = setTimeout(typeNextChar, 500);

      return () => {
         if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
         }
      };
   }, []);

   const hintText = isTouchDevice ? 'mantén pulsado para acelerar' : '[espacio] para acelerar';

   return (
      <div className="w-full max-w-3xl mx-auto">
         <div
            ref={terminalRef}
            className="bg-background/95 border border-secondary/15 rounded-lg overflow-hidden shadow-2xl shadow-black/50 ring-1 ring-primary/10 select-none touch-none">
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

            <div className="p-4 sm:p-6 md:p-8 min-h-[350px] sm:min-h-[400px] md:min-h-[500px]">
               <div className="space-y-1 text-sm sm:text-base">
                  {displayedLines.map((line, index) => (
                     <div key={index} className="flex">
                        <span className={`${line.isCommand ? 'text-primary' : 'text-foreground/90'} ${line.isOutput ? 'pl-2' : ''} break-words`}>
                           {line.text}
                           {index === displayedLines.length - 1 && isTyping && (
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

               {!isTyping && (
                  <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-foreground/10">
                     <Link
                        href={CAL_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => {
                           posthog.capture('calendar_cta_clicked', {
                              time_to_click_seconds: (Date.now() - animationStartTimeRef.current) / 1000,
                              used_speed_boost: speedBoostUsedRef.current,
                           });
                        }}
                        className="group inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 bg-primary/10 border border-primary/30 rounded-lg hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 w-full sm:w-auto">
                        <span className="text-primary font-medium text-sm sm:text-base">$ open</span>
                        <span className="text-foreground group-hover:text-primary transition-colors text-sm sm:text-base truncate">
                           <span className="hidden sm:inline">{CAL_LINK}</span>
                           <span className="sm:hidden">cal.com/adrichavero</span>
                        </span>
                        <ExternalLinkIcon className="size-4 text-primary flex-shrink-0 sm:opacity-0 sm:-translate-x-2 sm:group-hover:opacity-100 sm:group-hover:translate-x-0 transition-all duration-300" />
                     </Link>
                  </div>
               )}
            </div>
         </div>

         <p className="text-center mt-4 sm:mt-6 text-foreground/40 text-xs sm:text-sm">© {new Date().getFullYear()} Adrián García</p>
      </div>
   );
}
