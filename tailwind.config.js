/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Orbitron:['Orbitron'],
        Inter:['Inter','sans'],
        Exo:'Exo',
      }
    },
  },
  plugins: [],
}