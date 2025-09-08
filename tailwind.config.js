/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#2C5798',
        secondary: '#D6E9F3',
        accent: {
          1: '#E6EFF4',
          2: '#0B1376',
          3: '#A8E1F2',
          4: '#224CA2',
        },
        gray: {
          950: '#030712',
        }
      },
      animation: {
        'pulse': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce': 'bounce 2s infinite',
        'float': 'float 20s infinite ease-in-out',
        'rotate': 'rotate 10s linear infinite',
        'fade-in-up': 'fade-in-up 0.8s ease-out',
      },
      keyframes: {
        'fade-in-up': {
          from: {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'float': {
          '0%, 100%': {
            transform: 'translate(0, 0) scale(1)',
            opacity: '0.8',
          },
          '25%': {
            transform: 'translate(30px, -50px) scale(1.1)',
            opacity: '0.6',
          },
          '50%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
            opacity: '0.9',
          },
          '75%': {
            transform: 'translate(50px, 10px) scale(1.05)',
            opacity: '0.7',
          },
        },
        'rotate': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0, 0, 0, 0.3)',
        'glow-primary': '0 0 20px rgba(44, 87, 152, 0.3)',
        'glow-secondary': '0 0 20px rgba(214, 233, 243, 0.3)',
      },
    },
  },
  plugins: [],
};