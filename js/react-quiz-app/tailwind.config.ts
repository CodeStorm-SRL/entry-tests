import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#495057",
        secondary: "#1098ad",
        dark: "#343a40",
        medium: "#ced4da",
        light: "#f1f3f5",
        danger: "#ffa94d",
      },
      fontSize: {
        h1: "5.6rem",
        h1r: "3.8rem",
        h2: "3.6rem",
        h2r: "2.8rem",
        h4: "2.2rem",
        h4r: "1.6rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
