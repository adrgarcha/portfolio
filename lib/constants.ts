import type { TerminalLine } from './types';

export const TYPING_SPEED = 40;
export const FAST_TYPING_SPEED = 10;
export const LINE_DELAY = 600;
export const FAST_LINE_DELAY = 150;
export const HINT_DELAY = 2000;
export const INITIAL_TYPING_DELAY = 500;
export const HINT_FADE_DELAY = 300;

export const CAL_LINK = 'https://cal.com/adrichavero';

export const TERMINAL_LINES: TerminalLine[] = [
   { text: '> Initializing adrichavero.com v2...', isCommand: true },
   { text: '> Status: En mantenimiento.', isCommand: true },
   { text: '> Reason: Estamos afinando motores.', isCommand: true },
   { text: '> ETA: Próximamente.', isCommand: true },
   { text: '> Ejecutando presentación rápida...', isCommand: true },
   { text: 'Soy Adrián.', isOutput: true },
   { text: 'Desarrollo aplicaciones web y móviles desde cero para startups y empresas.', isOutput: true },
   { text: 'Me enfoco en una arquitectura limpia, desarrollo ágil y productos que crecen sin sorpresas.', isOutput: true },
   { text: '> ¿Quieres hablar conmigo antes del lanzamiento?', isCommand: true },
   { text: '> Ejecuta el comando:', isCommand: true },
   { text: `  open ${CAL_LINK}`, isOutput: true },
];
