import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6B00',
        'primary-dark': '#CC5500',
        'primary-light': '#FF9F4A',
        secondary: '#1E3A8A',
        'secondary-dark': '#0F172A',
        'accent-blue': '#3B82F6',
        dark: '#0F172A',
        'gray-900': '#1E293B',
        'gray-600': '#64748B',
        'gray-100': '#F1F5F9',
        white: '#FFFFFF',
        gold: '#F59E0B',
        green: '#10B981'
      },
      fontFamily: {
        display: ['var(--font-poppins)', 'sans-serif'],
        sans: ['var(--font-inter)', 'system-ui']
      },
      transitionProperty: {
        'height': 'height'
      }
    }
  },
  plugins: []
};

export default config;