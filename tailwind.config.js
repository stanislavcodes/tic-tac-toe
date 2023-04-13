/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'light': '#FAFAFA',
        'blue': '#2846F9',
        'yellow': '#FFDD00',
        'gray': '#2d2d2d',
        'dark': '#171717',
      },
      gridTemplateColumns: {
        'three': 'repeat(3, minmax(80px, 1fr)',
      },
      gridTemplateRows: {
        'three': 'repeat(3, minmax(80px, 1fr)',
      }
    },
  },
  plugins: [],
};
