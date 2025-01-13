/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'border-line': {
          '0%': { 
            top: '0',
            left: '-50px',
            transform: 'translateX(0)'
          },
          '25%': { 
            top: '0',
            left: '100%',
            transform: 'translateX(0)'
          },
          '25.1%': { 
            top: '0',
            right: '0',
            transform: 'translateX(0) rotate(90deg)'
          },
          '50%': { 
            top: '100%',
            right: '0',
            transform: 'translateX(0) rotate(90deg)'
          },
          '50.1%': { 
            bottom: '0',
            right: '0',
            transform: 'translateX(0) rotate(180deg)'
          },
          '75%': { 
            bottom: '0',
            left: '-50px',
            transform: 'translateX(0) rotate(180deg)'
          },
          '75.1%': { 
            left: '0',
            bottom: '0',
            transform: 'translateX(0) rotate(270deg)'
          },
          '100%': { 
            left: '0',
            top: '-50px',
            transform: 'translateX(0) rotate(270deg)'
          },
        },
      },
      animation: {
        'border-line': 'border-line 4s linear infinite',
      }
    }
  },
  plugins: [],
}