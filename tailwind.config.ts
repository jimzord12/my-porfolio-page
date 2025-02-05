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
        'ping-large': 'ping-large 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        'move-left': 'move-left 30s linear infinite',
        'move-right': 'move-right 25s linear infinite',
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
        'move-right': {
          '0%': {
            transform: 'translateX(-50%)',
          },
          '100%': {
            transform: 'translateX(0%)',
          },
        },
      },
      boxShadow: {
        footer: '0 16px 120px 140px',
        'soft-layered':
          '0 -2px 4px rgba(0, 0, 0, 0.5), 0 -4px 8px rgba(0, 0, 0, 0.25)',
        'deep-layered':
          '0 -2px 4px rgba(0, 0, 0, 0.5), 0 -6px 12px rgba(0, 0, 0, 0.3), 0 -10px 20px rgba(0, 0, 0, 0.15)',
        'intense-layered':
          '0 -2px 4px rgba(0, 0, 0, 0.5), 0 -6px 12px rgba(0, 0, 0, 0.4), 0 -12px 24px rgba(0, 0, 0, 0.2), 0 -20px 40px rgba(0, 0, 0, 0.1)',

        // Inset Versions
        'soft-inset':
          'inset 0 -2px 4px rgba(0, 0, 0, 0.5), inset 0 -4px 8px rgba(0, 0, 0, 0.25)',
        'deep-inset':
          'inset 0 -2px 4px rgba(0, 0, 0, 0.5), inset 0 -6px 12px rgba(0, 0, 0, 0.3), inset 0 -10px 20px rgba(0, 0, 0, 0.15)',
        'intense-inset':
          'inset 0 0px 4px rgba(0, 0, 0, 0.5), inset 0 0px 12px rgba(0, 0, 0, 0.4), inset 0 0px 24px rgba(0, 0, 0, 0.2), inset 0 0px 40px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
export default config;
