/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0B3251',
        secondary: '#87BBBA',
        light: '#EDEDED',
      },
      fontFamily: {
        sans: ['Urbanist', 'sans-serif'],
      },
      textColor: {
        'default': '#0B3251',
      }
    },
  },
  plugins: [],
};