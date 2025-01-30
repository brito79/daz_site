/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'daz-green': '#008751',
        'daz-blue': '#000080',
      },
    },
  },
  plugins: [],
};