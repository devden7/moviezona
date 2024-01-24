import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1024px",
        },
      },
      colors: {
        primary: {
          500: "#8A33FD",
        },
      },
      screens: {
        xs: "320px",
      },
    },
  },
  plugins: [],
};
export default config;
