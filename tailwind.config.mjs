/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        copper: {
          DEFAULT: '#F07842',
          primary: '#F07842',
          secondary: '#D96532',
          light: '#FFAB78',
          dark: '#111920',
          charcoal: '#17232D',
          graphite: '#252F38',
        },
        navy: {
          950: '#0B131C',
          900: '#111D2B', // Midnight navy
          850: '#152435',
          800: '#1D2E42',
          700: '#203B53', // Steel blue
          600: '#2E4C6D',
        },
        amber: {
          brand: '#F1B83E', // Engineering amber
          glow: '#FFE4A0',  // Champagne gold
          light: '#FFF4D6', // Metallic ivory
          dark: '#C98319',  // Deep amber
          pale: '#F6C963',  // Warm pale gold
        },
        ivory: {
          brand: '#F4F1EA', // Warm ivory
          50: '#FAF8F5',
          100: '#F4F1EA',
          200: '#E8E3D7',
          300: '#DDD5C4',
        },
        steel: {
          brand: '#203B53', // Steel blue
          light: '#607286', // Slate blue
          dark: '#162838',
        },
        silver: {
          brand: '#D9E0E5',
          light: '#EDF2F6',
        }
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'glass-navy': '0 20px 50px -10px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.08) inset',
        'glass-floating': '0 25px 60px -15px rgba(0, 0, 0, 0.55), 0 1px 0 0 rgba(255, 255, 255, 0.15) inset',
        'glass-amber': '0 10px 30px -5px rgba(241, 184, 62, 0.25), 0 0 0 1px rgba(241, 184, 62, 0.35) inset',
        'glass-ivory': '0 15px 35px -10px rgba(17, 29, 43, 0.08), 0 0 0 1px rgba(17, 29, 43, 0.06) inset',
        'metallic-glow': '0 0 35px -5px rgba(241, 184, 62, 0.4)',
      },
      animation: {
        'marquee': 'marquee 32s linear infinite',
        'marquee-slow': 'marquee 45s linear infinite',
        'scanline': 'scanline 6s ease-in-out infinite',
        'metallic': 'metallicFlow 10s ease-in-out infinite',
        'float-slow': 'floatSlow 7s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3.5s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        scanline: {
          '0%, 100%': { transform: 'translateY(0%)', opacity: '0.15' },
          '50%': { transform: 'translateY(100%)', opacity: '0.75' },
        },
        metallicFlow: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.85' },
        }
      }
    },
  },
  plugins: [],
};
