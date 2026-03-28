/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "./**/*.js"], // Ini wajib ada supaya Tailwind membaca file HTML di foldermu
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0B1120',    /*  warna latar belakang */
        'dark-card': '#1E293B',  /* kode Hex untuk kotak form (sedikit lebih terang dari background) */
        'primary': '#CE952A',    /* Ganti dengan kode Hex warna aksen untuk tombol/logo */
      },
      fontFamily: {
        'style': ['Montserrat', 'sans-serif'], 
      },
    },
  },

  plugins: [],
}