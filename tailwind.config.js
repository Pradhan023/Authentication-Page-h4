/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
    screens:{
      'sm': {'min': '320px', 'max': '767px'},

      'md': {'min': '768px', 'max': '1023px'},
     
      'lg': {'min': '1024px', 'max': '1536px'},
    },
  },
  plugins: [],
}

