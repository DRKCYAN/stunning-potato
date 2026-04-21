/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'system-ui', '-apple-system', 'BlinkMacSystemFont',
          '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial',
          '"Noto Sans"', 'sans-serif',
        ],
      },
      fontSize: {
        base: ['17px', { lineHeight: '1.7' }],
      },
      maxWidth: {
        prose: '65ch',
      },
    },
  },
  plugins: [],
};
