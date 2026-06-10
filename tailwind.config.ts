import type { Config } from 'tailwindcss';

export default {
   content: ['./components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
   theme: {
      extend: {
         screens: {
            xs: '400px',
         },
         colors: {
            bg: 'var(--bg)',
            surface: 'var(--surface)',
            surface2: 'var(--surface-2)',
            border: 'var(--border)',
            borderSoft: 'var(--border-soft)',
            text: 'var(--text)',
            muted: 'var(--muted)',
            comment: 'var(--comment)',
            accent: 'var(--accent)',
            accentHover: 'var(--accent-hover)',
         },
         fontFamily: {
            mono: ['var(--font-mono)', 'ui-monospace', 'SF Mono', 'Menlo', 'monospace'],
         },
         maxWidth: {
            wrap: 'var(--maxw)',
         },
      },
   },
   plugins: [],
} satisfies Config;
