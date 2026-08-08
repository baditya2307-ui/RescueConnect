/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        rescue: {
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48'
        }
      },
      boxShadow: {
        glow: '0 0 35px rgba(244,63,94,.18)'
      }
    }
  },
  plugins: []
}