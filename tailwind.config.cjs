const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        blackEel: "#444",
        blueZodiac: "#16225b",
      },
      backgroundImage: {
        landingHero: "url('/landing/hero.jpg')",
      },
    },
  },
  plugins: [],
};
