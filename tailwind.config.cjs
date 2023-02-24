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
        headingColor: "#333",
        blueZodiac: "#16225b",
        textGray: "#666",
      },
      backgroundImage: {
        landingHero: "url('/landing/hero.jpg')",
      },
    },
  },
  plugins: [],
};
