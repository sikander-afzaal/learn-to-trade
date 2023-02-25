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
      boxShadow: {
        shadow1: "0 4px 16px 2px rgba(0,0,0,.1)",
        boxHover: "0 2px 24px 0 rgba(0,0,0,.15)",
      },
      backgroundImage: {
        footer: "linear-gradient(180deg,#e5bf5a,#d7b66a)",
        landingHero: "url('/landing/hero.jpg')",
      },
    },
  },
  plugins: [],
};
