/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    "./pages/**/*.{js, jsx}",
    "./components/**/*.{js, jsx}",
  ],
  content: [],
  theme: {
    fontFamily:{
      'mono' :['Josephine Sans', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
