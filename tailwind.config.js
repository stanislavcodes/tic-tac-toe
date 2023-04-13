/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Syne', 'ui-sans-serif', 'system-ui'],
    },
    extend: {
      colors: {
        primary: '#c2e812',
        secondary: '#85c7f2',
        bg: '#171717',
        gray: '#d3d3d3',
        dark: '#232323',
      },
      gridTemplateColumns: {
        three: 'repeat(3, minmax(80px, 1fr)',
      },
      gridTemplateRows: {
        three: 'repeat(3, minmax(80px, 1fr)',
      },
    },
  },
  plugins: [],
};
