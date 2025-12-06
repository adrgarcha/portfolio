import { useRef, useState, useEffect, useCallback, type RefObject } from 'react';
import { HINT_DELAY, HINT_FADE_DELAY } from '@/lib/constants';

interface UseSpeedBoostOptions {
   isTypingRef: RefObject<boolean>;
   containerRef: RefObject<HTMLElement | null>;
   onFirstBoost?: (timeElapsed: number, inputType?: string) => void;
}

interface UseSpeedBoostReturn {
   isBoosting: boolean;
   showHint: boolean;
   hintVisible: boolean;
   isTouchDevice: boolean;
}

export function useSpeedBoost({ isTypingRef, containerRef, onFirstBoost }: UseSpeedBoostOptions): UseSpeedBoostReturn {
   const [isBoosting, setIsBoosting] = useState(false);
   const [showHint, setShowHint] = useState(false);
   const [hintVisible, setHintVisible] = useState(false);
   const [isTouchDevice, setIsTouchDevice] = useState(false);

   const hintTimeoutRef = useRef<NodeJS.Timeout | null>(null);
   const hasUsedBoostRef = useRef(false);
   const speedBoostTrackedRef = useRef(false);
   const startTimeRef = useRef<number>(Date.now());
   const onFirstBoostRef = useRef(onFirstBoost);

   onFirstBoostRef.current = onFirstBoost;

   const clearHintTimeout = useCallback(() => {
      if (hintTimeoutRef.current) {
         clearTimeout(hintTimeoutRef.current);
         hintTimeoutRef.current = null;
      }
   }, []);

   const hideHint = useCallback(() => {
      setHintVisible(false);
      setTimeout(() => setShowHint(false), HINT_FADE_DELAY);
   }, []);

   const scheduleHint = useCallback(() => {
      clearHintTimeout();
      hintTimeoutRef.current = setTimeout(() => {
         if (isTypingRef.current && !hasUsedBoostRef.current) {
            setShowHint(true);
            requestAnimationFrame(() => setHintVisible(true));
         }
      }, HINT_DELAY);
   }, [clearHintTimeout, isTypingRef]);

   const trackFirstBoost = useCallback((inputType?: string) => {
      if (!speedBoostTrackedRef.current) {
         speedBoostTrackedRef.current = true;
         const timeElapsed = (Date.now() - startTimeRef.current) / 1000;
         onFirstBoostRef.current?.(timeElapsed, inputType);
      }
   }, []);

   const startBoosting = useCallback(
      (inputType?: string) => {
         setIsBoosting(true);
         hasUsedBoostRef.current = true;
         hideHint();
         clearHintTimeout();
         trackFirstBoost(inputType);
      },
      [hideHint, clearHintTimeout, trackFirstBoost]
   );

   const stopBoosting = useCallback(() => {
      setIsBoosting(false);
      if (isTypingRef.current) {
         hasUsedBoostRef.current = false;
         scheduleHint();
      }
   }, [isTypingRef, scheduleHint]);

   useEffect(() => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
   }, []);

   useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
         if (e.code === 'Space' && isTypingRef.current) {
            e.preventDefault();
            startBoosting('keyboard');
         }
      };

      const handleKeyUp = (e: KeyboardEvent) => {
         if (e.code === 'Space') {
            stopBoosting();
         }
      };

      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('keyup', handleKeyUp);

      return () => {
         window.removeEventListener('keydown', handleKeyDown);
         window.removeEventListener('keyup', handleKeyUp);
      };
   }, [isTypingRef, startBoosting, stopBoosting]);

   useEffect(() => {
      const container = containerRef.current;
      if (!container) return;

      const handleTouchStart = (e: TouchEvent) => {
         if (!isTypingRef.current) return;
         e.preventDefault();
         startBoosting('touch');
      };

      const handleTouchEnd = () => {
         stopBoosting();
      };

      container.addEventListener('touchstart', handleTouchStart, { passive: false });
      container.addEventListener('touchend', handleTouchEnd);

      return () => {
         container.removeEventListener('touchstart', handleTouchStart);
         container.removeEventListener('touchend', handleTouchEnd);
      };
   }, [containerRef, isTypingRef, startBoosting, stopBoosting]);

   useEffect(() => {
      scheduleHint();
      return clearHintTimeout;
   }, [scheduleHint, clearHintTimeout]);

   return {
      isBoosting,
      showHint,
      hintVisible,
      isTouchDevice,
   };
}
