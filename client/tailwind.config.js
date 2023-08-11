/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.jsx",
  ],
  theme: {
    extend: {
      screens: {
        'desktop': { 'min': '1024px' },
        'tablet': { 'min': '768px', 'max': '1024px' },
        'mobile': { 'min': '320px', 'max': '767px' }
      },
    },
  },
  plugins: [],
}

