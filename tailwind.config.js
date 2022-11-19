/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
  ],
  theme: {
    extend: {
      colors: {
        mercury: '#dce2df',
        'deep_teal': {
          '50': '#f3f5f5', 
          '100': '#e7ebeb', 
          '200': '#c3cdcc', 
          '300': '#9eafad', 
          '400': '#567270', 
          '500': '#0d3632', 
          '600': '#0c312d', 
          '700': '#0a2926', 
          '800': '#08201e', 
          '900': '#061a19'
        }
      },
    
    },
  },
  plugins: [],
}
