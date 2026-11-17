/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#0a121c',
          900: '#101D2D', // Midnight navy
          800: '#17293e',
          700: '#203B53', // Steel blue
          600: '#2c4e6e',
          500: '#3c6790',
        },
        gold: {
          400: '#f7c86a',
          500: '#F0B641', // Engineering gold
          600: '#d79e2c',
          700: '#b8811b',
        },
        slate: {
          custom: '#667483', // Slate grey
          muted: '#8c9ba9',
          border: '#2a3e52',
        },
        cloud: {
          50: '#ffffff',
          100: '#F2F4F6', // Cloud white
          200: '#e5e9ed',
          300: '#d5dbe2',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Manrope', 'Sora', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 10px 30px -10px rgba(16, 29, 45, 0.1)',
        'premium-lg': '0 20px 40px -15px rgba(16, 29, 45, 0.15)',
        'gold-glow': '0 0 25px -5px rgba(240, 182, 65, 0.3)',
      }
    },
  },
  plugins: [],
};
