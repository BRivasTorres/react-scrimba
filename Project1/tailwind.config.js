/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "nav-black": "#191825",
        "main-black": "#393E46",
        "sky-blue": "#61DBFB",
        "gray": "#9BA4B5",
      },
    },
  },
  plugins: [],
}

