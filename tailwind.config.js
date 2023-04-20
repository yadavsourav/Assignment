/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        en:["Inter","ui-sans-serif","system-ui","-apple-system", "BlinkMacSystemFont" ,"Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif","Apple Color Emoji","Segoe UI Emoji", "Segoe UI Symbol","Noto Color Emoji" ],
        hi:["Eczar", "Inter","ui-sans-serif","system-ui","-apple-system", "BlinkMacSystemFont" ,"Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif","Apple Color Emoji","Segoe UI Emoji", "Segoe UI Symbol","Noto Color Emoji" ]

      }
    },
    
  },
  plugins: [],
}