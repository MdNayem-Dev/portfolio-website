/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#2563EB',
          'blue-accent': '#0066FF',
          dark: '#0F172A',
          black: '#090D16',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Hind Siliguri', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['Playfair Display', 'Hind Siliguri', 'Georgia', 'serif'],
        'serif-display': ['Playfair Display', 'Hind Siliguri', 'Georgia', 'serif'],
        handwriting: ['Caveat', 'cursive'],
      },
      screens: {
        'xs': '480px',
      },
      keyframes: {
        heroBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        floatOrb: {
          '0%': { transform: 'translate(0) scale(1)' },
          '100%': { transform: 'translate(25px, -20px) scale(1.08)' },
        }
      },
      animation: {
        heroBounce: 'heroBounce 5s ease-in-out infinite',
        floatOrb: 'floatOrb 18s ease-in-out infinite alternate',
      }
    },
  },
  plugins: [],
}
