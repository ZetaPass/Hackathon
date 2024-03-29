/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        gray: {
          "100": "#867070",
          "200": "rgba(255, 255, 255, 0.5)",
          "300": "rgba(0, 0, 0, 0.19)",
          "400": "rgba(255, 255, 255, 0)",
          "500": "rgba(0, 0, 0, 0.5)",
          "600": "rgba(0, 0, 0, 0)",
          "700": "rgba(0, 0, 0, 0.66)",
          "800": "rgba(0, 0, 0, 0.6)",
        },
        darkslategray: "#3c3c3c",
        white: "#fff",
        darkgray: "#a6a6a6",
        crimson: "#e52727",
        royalblue: { "100": "#0075ff", "200": "rgba(0, 117, 255, 0.99)" },
        gainsboro: { "100": "#d9d9d9", "200": "rgba(217, 217, 217, 0)" },
        dimgray: { "100": "#686868", "200": "#555" },
        lightgray: "#d2d2d2",
        yellow: "#fff501",
        cornflowerblue: "#699bf7",
      },
      fontFamily: {
        "red-rose": "'Red Rose'",
        inherit: "inherit",
        roboto: "Roboto",
      },
      borderRadius: {
        "3xs": "10px",
        "4xs": "9px",
        "31xl": "50px",
        smi: "13px",
        "6xl": "25px",
      },
    },
    fontSize: {
      base: "16px",
      sm: "14px",
      xl: "20px",
      "5xl": "24px",
      "21xl": "40px",
      "11xl": "30px",
      mini: "15px",
      smi: "13px",
      "41xl": "60px",
      "51xl": "70px",
      "45xl": "64px",
      "31xl": "50px",
      "29xl": "48px",
      "13xl": "32px",
      "17xl": "36px",
      "151xl": "170px",
      "10xl": "29px",
    },
  },
  corePlugins: { preflight: false },
};
