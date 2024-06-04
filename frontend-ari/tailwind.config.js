/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          "green": "#047857",
          "cardfont" : "#DDDDDD",
          "font" : "#F1F1F1",
      },
    },
  },
  plugins: [],
}

