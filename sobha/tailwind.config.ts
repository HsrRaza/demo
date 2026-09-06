import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Custom Malnad palette
        'malnad-green': {
          900: '#0F2416',
          800: '#132B20',
          700: '#1B3B2B',
          600: '#2D5A45',
        },
        'warm-bronze': {
          700: '#A67C52',
          600: '#B8956A',
          500: '#C59B27',
          400: '#D4A373',
        },
        'cream': {
          100: '#FAF8F5',
          50: '#F3EFEA',
        },
        'charcoal': '#1F2421',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'ui-serif'],
        sans: ['var(--font-jakarta)', 'ui-sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.5rem',
        '2xl': '1rem',
      },
      boxShadow: {
        card: '0 2px 8px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 4px 16px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
};

export default config;
