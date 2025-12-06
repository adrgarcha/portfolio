import { useRef, useState, useEffect } from 'react';
import type { TerminalLine, DisplayedLine } from '@/lib/types';
import { TYPING_SPEED, FAST_TYPING_SPEED, LINE_DELAY, FAST_LINE_DELAY, INITIAL_TYPING_DELAY } from '@/lib/constants';

interface UseTypewriterOptions {
    lines: TerminalLine[];
    isFast: boolean;
    onComplete?: () => void;
}

interface UseTypewriterReturn {
    displayedLines: DisplayedLine[];
    isTyping: boolean;
    animationStartTime: number;
}

export function useTypewriter({ lines, isFast, onComplete }: UseTypewriterOptions): UseTypewriterReturn {
    const [displayedLines, setDisplayedLines] = useState<DisplayedLine[]>([]);
    const [isTyping, setIsTyping] = useState(true);

    const lineIndexRef = useRef(0);
    const charIndexRef = useRef(0);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const animationCompletedRef = useRef(false);
    const animationStartTimeRef = useRef<number>(Date.now());
    const isFastRef = useRef(isFast);

    isFastRef.current = isFast;

    useEffect(() => {
        const typeNextChar = () => {
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

            if (currentCharIndex === 0) {
                setDisplayedLines(prev => [
                    ...prev,
                    { text: '', isCommand: currentLine.isCommand, isOutput: currentLine.isOutput },
                ]);

                if (currentLine.delay && currentLine.text === '') {
                    lineIndexRef.current += 1;
                    const delay = currentIsFast ? Math.min(currentLine.delay, FAST_LINE_DELAY) : currentLine.delay;
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

        timeoutRef.current = setTimeout(typeNextChar, INITIAL_TYPING_DELAY);

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [lines, onComplete]);

    return {
        displayedLines,
        isTyping,
        animationStartTime: animationStartTimeRef.current,
    };
}
