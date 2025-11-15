/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#0A1628',
          900: '#0F2439',
          800: '#1A3A52',
        },
        indigo: {
          600: '#4F46E5',
          500: '#6366F1',
          400: '#818CF8',
        },
        slate: {
          200: '#E2E8F0',
          300: '#94A3B8',
          400: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
        cyan: {
          400: '#22D3EE',
          500: '#06B6D4',
        },
        amber: {
          200: '#FDE68A',
          400: '#FBBF24',
          500: '#F59E0B',
        },
        green: {
          400: '#4ADE80',
          500: '#22C55E',
        },
        red: {
          400: '#F87171',
          500: '#EF4444',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },
      boxShadow: {
        'sm': '0 1px 2px rgba(0, 0, 0, 0.12)',
        'md': '0 4px 12px rgba(0, 0, 0, 0.15)',
        'lg': '0 12px 32px rgba(0, 0, 0, 0.25)',
        'xl': '0 20px 48px rgba(0, 0, 0, 0.35)',
        'glow': '0 0 32px rgba(79, 70, 229, 0.4)',
        'glow-lg': '0 8px 32px rgba(79, 70, 229, 0.6)',
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #0A1628 0%, #1E3A5F 50%, #4F46E5 100%)',
        'gradient-card': 'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
        'gradient-cta': 'linear-gradient(135deg, #4F46E5 0%, #6366F1 100%)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};
