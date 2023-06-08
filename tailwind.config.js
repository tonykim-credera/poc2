/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = withMT({
  content: ["./src/**/*.{html,js,tsx,ts}"],
  theme: {
    fontFamily: {
      playfair: ["Playfair Display", ...defaultTheme.fontFamily.serif],
      roboto: ["Roboto", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        "credera-red": "#E55F4C",
        "credera-dark-blue": "#496A86",
        "credera-sky": "#D7ECF3",
        "credera-sand": "#F8F5F2",
        "credera stone": "#CFCFCF",
        "credera-black": "#3A3A3a",
      },
    },
  },
  plugins: [],
});
