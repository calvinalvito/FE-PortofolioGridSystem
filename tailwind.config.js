/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'card':'#131315',
        'grey':'#888888',
        'grey-text':'#B5B5B5',
        'green-button':'#079211'

      },
      maxWidth:{
        'phone':'390px',
        'tablet': '904px',
        'desktop':'1315px'
      },
      fontFamily:{
        poppins: ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}