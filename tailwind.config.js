/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}",
    "./node_modules/tw-elements/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FF9800",
        },
        secondary: {
          DEFAULT: "#4D231C",
        },
      },
      fontFamily: {
        pt: ["PT Sans", "sans-serif"],
      },
    },
  },
  plugins: [require("tw-elements/plugin.cjs")],
}

