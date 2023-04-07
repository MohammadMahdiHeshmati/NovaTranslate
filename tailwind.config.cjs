/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'vazir': ['Vazir', 'Arial', 'Helvetica', 'sans-serif'],
        'starlynx': ['STARLYNX', 'Arial', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
