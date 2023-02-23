/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: '#0D1723',
      secondary: '#55A4E6',
      gold: '#E6972F',
      dark: '#1b1b1b',
      black: '#000000',
      white: '#ffffff',
      offWhite: '#ccdef6',
      red: '#ff0000',
      transparent: 'transparent',
    },
    fontFamily: {
      Bodoni: ['Bodoni Moda', 'sans-serif'],
      RedHat: ['Red Hat Text', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
