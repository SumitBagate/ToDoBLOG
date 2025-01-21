/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'text': '0 2px 4px rgba(0, 0, 0, 0.2)',
        'text-lg': '0 4px 8px rgba(0, 0, 0, 0.3)',
        'text-xl': '0 6px 12px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
}