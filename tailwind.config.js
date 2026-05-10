/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#f97316', // Migros Orange
          DEFAULT: '#ea580c',
          dark: '#c2410c',
        }
      }
    },
  },
  plugins: [],
}
