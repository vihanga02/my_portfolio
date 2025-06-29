/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-dark': 'rgb(0, 6, 20)',
        'custom-green': 'rgb(166, 255, 0)',
        'custom-blue': 'rgba(18, 13, 41, 0.705)',
        'custom-navy': 'rgb(1, 23, 43)',
      },
      fontFamily: {
        'saira': ['Saira Stencil One', 'cursive'],
        'spicy': ['Spicy Rice', 'cursive'],
        'black-ops': ['Black Ops One', 'cursive'],
        'antic': ['Antic Slab', 'serif'],
        'courier': ['Courier New', 'Courier', 'monospace'],
      },
      screens: {
        'mobile': { 'max': '431px' },
        'tablet': { 'max': '821px' },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}
