import { useRef, useState, useEffect } from 'react';
import type { TerminalLine, DisplayedLine } from '@/lib/types';
import { TYPING_SPEED, FAST_TYPING_SPEED, LINE_DELAY, FAST_LINE_DELAY, INITIAL_TYPING_DELAY } from '@/lib/constants';

interface UseTypewriterOptions {
   lines: TerminalLine[];
   isFastRef: React.RefObject<boolean>;
   onComplete?: () => void;
}

interface UseTypewriterReturn {
   displayedLines: DisplayedLine[];
   isTyping: boolean;
   animationStartTime: number;
}

export function useTypewriter({ lines, isFastRef, onComplete }: UseTypewriterOptions): UseTypewriterReturn {
   const [displayedLines, setDisplayedLines] = useState<DisplayedLine[]>([]);
   const [isTyping, setIsTyping] = useState(true);

   const lineIndexRef = useRef(0);
   const charIndexRef = useRef(0);
   const animationCompletedRef = useRef(false);
   const animationStartTimeRef = useRef<number>(Date.now());
   const lastUpdateTimeRef = useRef<number>(0);
   const rafIdRef = useRef<number | null>(null);
   const initialDelayPassedRef = useRef(false);

   useEffect(() => {
      const animate = (currentTime: number) => {
         if (!initialDelayPassedRef.current) {
            if (lastUpdateTimeRef.current === 0) {
               lastUpdateTimeRef.current = currentTime;
            }
            if (currentTime - lastUpdateTimeRef.current < INITIAL_TYPING_DELAY) {
               rafIdRef.current = requestAnimationFrame(animate);
               return;
            }
            initialDelayPassedRef.current = true;
            lastUpdateTimeRef.current = currentTime;
         }

         const currentLineIndex = lineIndexRef.current;
         const currentCharIndex = charIndexRef.current;
         const currentIsFast = isFastRef.current;

         if (currentLineIndex >= lines.length) {
            setIsTyping(false);
            if (!animationCompletedRef.current) {
               animationCompletedRef.current = true;
               onComplete?.();
            }
            return;
         }

         const currentLine = lines[currentLineIndex];
         const currentTypingSpeed = currentIsFast ? FAST_TYPING_SPEED : TYPING_SPEED;
         const currentLineDelay = currentIsFast ? FAST_LINE_DELAY : LINE_DELAY;

         const elapsed = currentTime - lastUpdateTimeRef.current;

         if (currentCharIndex === 0) {
            setDisplayedLines(prev => [...prev, { text: '', isCommand: currentLine.isCommand, isOutput: currentLine.isOutput }]);

            if (currentLine.delay && currentLine.text === '') {
               const delay = currentIsFast ? Math.min(currentLine.delay, FAST_LINE_DELAY) : currentLine.delay;
               if (elapsed < delay) {
                  rafIdRef.current = requestAnimationFrame(animate);
                  return;
               }
               lineIndexRef.current += 1;
               lastUpdateTimeRef.current = currentTime;
               rafIdRef.current = requestAnimationFrame(animate);
               return;
            }

            if (currentLine.text === '') {
               if (elapsed < currentLineDelay) {
                  rafIdRef.current = requestAnimationFrame(animate);
                  return;
               }
               lineIndexRef.current += 1;
               lastUpdateTimeRef.current = currentTime;
               rafIdRef.current = requestAnimationFrame(animate);
               return;
            }

            charIndexRef.current = 1;
            setDisplayedLines(prev => {
               const newLines = [...prev];
               const lastIndex = newLines.length - 1;
               if (lastIndex >= 0) {
                  newLines[lastIndex] = {
                     ...newLines[lastIndex],
                     text: currentLine.text.slice(0, 1),
                  };
               }
               return newLines;
            });
            lastUpdateTimeRef.current = currentTime;
            rafIdRef.current = requestAnimationFrame(animate);
            return;
         }

         if (currentCharIndex < currentLine.text.length) {
            if (elapsed < currentTypingSpeed) {
               rafIdRef.current = requestAnimationFrame(animate);
               return;
            }

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
            lastUpdateTimeRef.current = currentTime;
            rafIdRef.current = requestAnimationFrame(animate);
         } else {
            if (elapsed < currentLineDelay) {
               rafIdRef.current = requestAnimationFrame(animate);
               return;
            }
            lineIndexRef.current += 1;
            charIndexRef.current = 0;
            lastUpdateTimeRef.current = currentTime;
            rafIdRef.current = requestAnimationFrame(animate);
         }
      };

      rafIdRef.current = requestAnimationFrame(animate);

      return () => {
         if (rafIdRef.current !== null) {
            cancelAnimationFrame(rafIdRef.current);
         }
      };
   }, [lines, isFastRef, onComplete]);

   return {
      displayedLines,
      isTyping,
      animationStartTime: animationStartTimeRef.current,
   };
}
