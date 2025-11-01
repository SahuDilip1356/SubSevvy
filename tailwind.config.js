/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        coral: {
          DEFAULT: '#FF6B6B',
          light: '#FF8787',
          dark: '#E85555',
        },
        teal: {
          DEFAULT: '#4ECDC4',
          light: '#6FE3DA',
          dark: '#44A08D',
        },
        dark: {
          DEFAULT: '#2C3E50',
          light: '#34495E',
        },
        gray: {
          DEFAULT: '#7F8C8D',
          light: '#95A5A6',
          lighter: '#BDC3C7',
          lightest: '#ECF0F1',
        },
        background: '#F8F9FA',
      },
      fontFamily: {
        serif: ['"DM Serif Display"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },
      boxShadow: {
        'card': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 8px 30px rgba(0, 0, 0, 0.12)',
        'lg': '0 10px 40px rgba(0, 0, 0, 0.1)',
        'xl': '0 20px 50px rgba(0, 0, 0, 0.15)',
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #FFB6C1 0%, #DDA0DD 100%)',
        'gradient-teal': 'linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%)',
        'gradient-dark': 'linear-gradient(135deg, #34495E 0%, #2C3E50 100%)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};
