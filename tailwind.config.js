/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "./**/*.js"],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0B1120', 
        'dark-card': '#1E293B',
        'primary': '#CE952A', 
      },
      fontFamily: {
        'style': ['Montserrat', 'sans-serif'], 
      },
    },
  },

  plugins: [],
}