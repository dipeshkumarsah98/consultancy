/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  
  ],
  theme: {
    extend: {
      fontFamily: {
        'open-sans': ["'Open Sans'", 'sans-serif'],
        'lato': ["'Lato'", 'sans-serif'],
        'merriweather': ["'Merriweather'", 'serif'],
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}
