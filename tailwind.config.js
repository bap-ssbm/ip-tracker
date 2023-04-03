/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
    
  theme: {
    fontFamily:{
      'sans' : ['Rubik', 'sans-serif'],
      'serif' : ['Rubik', 'sans-serif'],
      'mono' : ['Rubik', 'sans-serif'],
    },
    extend: {
      colors: {
        gray: {
          1000: "hsl(0, 0%, 59%)",
          1100: "hsl(0, 0%, 17%)",
        },
      },
    },
  },
  plugins: [],
}

