/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#4D79FF',
          600: '#3b82f6',
          700: '#1d4ed8',
          900: '#1e3a8a',
        },
        secondary: {
          500: '#FF4DFF',
          600: '#e879f9',
        },
        accent: {
          500: '#FFA500',
          600: '#f59e0b',
        },
        dark: {
          900: '#0E0B1D',
          800: '#1a1625',
          700: '#2d2438',
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #FF4DFF 0%, #4D79FF 50%, #FFA500 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #4D79FF 0%, #FF4DFF 100%)',
        'gradient-accent': 'linear-gradient(135deg, #FFA500 0%, #FF4DFF 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.8s ease-out',
        'fade-in': 'fadeIn 1s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(77, 121, 255, 0.5)' },
          '100%': { boxShadow: '0 0 30px rgba(255, 77, 255, 0.8)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};