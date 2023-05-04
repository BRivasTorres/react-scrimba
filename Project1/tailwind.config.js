/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "sky-blue": "#61DBFB",
        "gray": "#9BA4B5",
      },
    },
  },
  plugins: [],
}

