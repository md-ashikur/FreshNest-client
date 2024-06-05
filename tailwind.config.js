/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#D8E7C7",
          500: "#A8B324",
          DEFAULT: "#81C408",
        },
        secondary: {
          DEFAULT: "#DDFDFB",
          500: "#626687",
          700: "#1B1C57",
        },
        neutral: {
          DEFAULT: "#FF3B22",
          500: "#626687",
          700: "#1B1C57",
        },
        third: { 
          DEFAULT: "#fafafa",
          300: "#EBEBEB"
         },
        base: "#fff",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
