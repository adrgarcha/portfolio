/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from 'tailwindcss';

export default {
   content: ['./components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
   theme: {
      extend: {
         colors: {
            background: 'rgb(var(--background))',
            foreground: 'rgb(var(--foreground))',
            primary: 'rgb(var(--primary))',
            secondary: 'rgb(var(--secondary))',
            tertiary: 'rgb(var(--tertiary))',
         },
      },
   },
   darkMode: 'selector',
   plugins: [require('tailwindcss-motion'), require('tailwindcss-intersect')],
} satisfies Config;
