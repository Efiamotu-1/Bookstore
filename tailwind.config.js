/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
        colors: {
            'blue': {
                '100' : '#4386bf'
            },
          },
          gridTemplateColumns: {
            // configured 3 column grid
            '3': '3fr 1fr 2fr',
    
            
          },
    },
  },
  plugins: [],
}