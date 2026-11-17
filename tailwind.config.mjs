/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#0B131C',
          900: '#111D2B', // Midnight navy
          850: '#162436',
          800: '#1D2E42',
          700: '#2A415C',
          600: '#3A577A',
        },
        amber: {
          brand: '#F1B83E', // Engineering amber
          glow: '#FFCA58',
          dark: '#C89322',
        },
        ivory: {
          brand: '#F4F1EA', // Warm ivory
          50: '#FAF8F5',
          100: '#F4F1EA',
          200: '#E9E4D8',
          300: '#DDD5C4',
        },
        steel: {
          brand: '#607286', // Steel blue
          light: '#7F93A8',
          dark: '#455465',
        },
        silver: {
          brand: '#D9E0E5',
          light: '#EAF0F4',
        }
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['"IBM Plex Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
        heading: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.025em',
        tracked: '0.08em',
        widest: '0.18em',
      },
      lineHeight: {
        compressed: '0.96',
        tightest: '1.05',
      },
      boxShadow: {
        'amber-glow': '0 0 35px -5px rgba(241, 184, 62, 0.35)',
        'amber-sm': '0 0 15px -2px rgba(241, 184, 62, 0.25)',
        'editorial': '0 25px 50px -12px rgba(11, 19, 28, 0.25)',
        'card-dark': '0 15px 35px -10px rgba(0, 0, 0, 0.4)',
      },
      animation: {
        'marquee': 'marquee 32s linear infinite',
        'marquee-slow': 'marquee 45s linear infinite',
        'scanline': 'scanline 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        scanline: {
          '0%, 100%': { transform: 'translateY(0%)', opacity: '0.2' },
          '50%': { transform: 'translateY(100%)', opacity: '0.8' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        }
      }
    },
  },
  plugins: [],
};
