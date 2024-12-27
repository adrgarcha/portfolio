import type { Config } from 'tailwindcss';

export default {
   content: ['./components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
   theme: {
      extend: {
         colors: {
            background: 'var(--background)',
            foreground: 'var(--foreground)',
            primary: 'var(--primary)',
            secondary: 'var(--secondary)',
            tertiary: 'var(--tertiary)',
         },
      },
   },
   darkMode: 'selector',
   plugins: [],
} satisfies Config;
