/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // ativa suporte a dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // para funcionar em arquivos React
  ],
  theme: {
    extend: {
      animation: {
        "fade-in": "fadeIn 0.5s ease-in forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      colors: {
        darkBlue: "#070724",
        darkGrey: "#38384F",
        lightGrey: "#838391",
        pastelBlue: "#419EBB",
        yellow: "#EDA249",
        purple: "#6F2ED6",
        orangeRed: "#D14C32",
        pastelRed: "#D83A34",
        orange: "#CD5120",
        lightGreen: "#1EC2A4",
        lightBlue: "#2D68F0",
      },
      fontFamily: {
        antonio: "Antonio",
        spartan: "League Spartan",
      },
    },
  },
  plugins: [],
};
