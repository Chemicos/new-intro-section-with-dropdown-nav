/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'medium-gray': 'var(--medium-gray)',
        'almost-white': 'var(--almost-white)',
        'almost-black': 'var(--almost-black)',
     },
    },
  },
  plugins: [],
}

