/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'fasthand':['Fasthand', 'cursive'],
        'poppins':["Poppins", 'sans-serif'],
      }
    },
  },
  plugins: [],
}