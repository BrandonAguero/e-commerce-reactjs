/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        ms: "360px",
        mm: "480px",
        mg: "768px",
        tp: "992px",
        tg: "1200px",
        lp: "1440px",
        lm: "1680px",
        lg: "1920px",
        pg: "2400px",
      },
      transitionProperty: {
        "max-h": "max-height",
      },
    },
  },
  plugins: [],
};
