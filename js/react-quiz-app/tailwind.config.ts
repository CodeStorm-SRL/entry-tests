import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#1098ad",
        secondary: "#495057",
        dark: "#343a40",
        medium: "#ced4da",
        light: "#f1f3f5",
      },
    },
  },
  plugins: [],
} satisfies Config;
