/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
      'desktop-1': '1408px',
      'desktop-1/2': '1550px',
      'desktop-2': '1680px',
      'desktop-3': '1872px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
  
}