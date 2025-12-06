import type { Config } from 'tailwindcss';

export default {
   content: ['./components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
   theme: {
      extend: {
         screens: {
            xs: '400px',
         },
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
   plugins: [],
} satisfies Config;
