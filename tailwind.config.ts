import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1200px',
    },
    outlineOffset: {
      '-2': '-2px',
      '-4': '-4px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '2rem',
      },
    },
    extend: {
      fontFamily: {
        sans: 'var(--font-sans)',
        serif: 'var(--font-serif)',
      },
      animation: {
        wiggle: 'wiggle 0.5s ease-in-out infinite',
        'ping-slow': 'ping 2s ease-in-out infinite',
        'ping-large': 'ping-large 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        'move-left': 'move-left 30s linear infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-6deg)' },
          '50%': { transform: 'rotate(6deg)' },
        },
        'ping-large': {
          '0%, 100%': {
            transform: 'scale(3)',
            opacity: '0',
          },
          '50%': {
            transform: 'scale(1)',
            opacity: '100%',
          },
        },
        'move-left': {
          '0%': {
            transform: 'translateX(0%)',
          },
          '100%': {
            transform: 'translateX(-50%)',
          },
        },
      },
      boxShadow: {
        footer: '0 16px 120px 140px',
      },
    },
  },
  plugins: [],
};
export default config;
