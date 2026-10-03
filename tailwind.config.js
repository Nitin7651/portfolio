/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fdfbf7',
          100: '#fcf8f0',
          200: '#f5ecd8',
          300: '#eedebb',
          400: '#e5c994',
          500: '#ddb36e',
          600: '#d39850',
          700: '#b0763f',
          800: '#8e5d36',
          900: '#734c2e',
        },
        ink: {
          900: '#1a1a1a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        cursive: ['Dancing Script', 'cursive'],
      },
    },
  },
  plugins: [],
}
