/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html',"./src/**/*.{jsx, js}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily:{
        raleway: ['raleway', 'serif']
      }
    },
  },
  plugins: [],
};
