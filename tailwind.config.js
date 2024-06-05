/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#D1FAE5",
          DEFAULT: "#10B981",
        },
        secondary: {
          DEFAULT: "#1B1C57",
          500: "#626687",
          700: "#1B1C57",
        },
        neutral: {
          DEFAULT: "#888B97",
          500: "#626687",
          700: "#1B1C57",
        },
        third: "#F59E0B",
        base: "#fff",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
