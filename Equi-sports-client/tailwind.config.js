/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "ZenDots": ["Zen Dots", "serif"]
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

