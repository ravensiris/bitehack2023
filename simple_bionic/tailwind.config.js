/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ['"Roboto"']
    },
    fontWeight: {
      sans: 700
    },
    colors: {
      black: '',
      coffee: '#A38D79',
      'coffee-milk': '#B7AA9E',
      'dark-gray': '#8C8C8C',
      purple: '#7F6180',
      yellow: '#BFAD6E',
      green: '#8C9F7D',
      blue: '#6375A5',
      'light-gray': '#CECECE',
      'lighter-gray': '#E8E8E8'
    },
    extend: {},
  },
  plugins: [],
};
