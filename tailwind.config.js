/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#121212",
          200: "rgba(0, 0, 0, 0)",
          300: "rgba(0, 0, 0, 0.66)",
        },
        darkslategray: "#3c3c3c",
        white: "#fff",
        black: "#000",
        gainsboro: { 100: "#d9d9d9", 200: "rgba(217, 217, 217, 0)" },
        royalblue: "#0075ff",
        whitesmoke: "#f5f5f5",
        crimson: "#ff2566",
        primaryGradient: "linear-gradient(90deg, #EB0CD5 0%, #E52727 100%)",
        secondaryGradient: "linear-gradient(90deg, #00F0FF 0%, #0075FF 100%)",
      },
      fontFamily: {
        "red-rose": "'Red Rose'",
        inter: "Inter",
        "work-sans": "'Work Sans'",
        "exo-2": "'Exo 2'",
      },
      borderRadius: { small: "9px", base: "10px", large: "50px" },
    },
    fontSize: {
      xs: "0.88rem",
      sm: "1rem",
      base: "1.25rem",
      lg: "1.5rem",
      xl: "2.5rem",
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
