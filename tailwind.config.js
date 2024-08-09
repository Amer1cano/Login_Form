/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundSize:{
      'ful':"100%"
    },
    extend: {
      backgroundImage: {
        'cosmos': "url('./src/assets/cosmon.avif')",
      }
      
    },
  },
  plugins: [],
}