import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px", // mobile
      md: "768px", // tablet
      lg: "1024px", // laptop
      xl: "1280px", // desktop
      "2xl": "1536px", // large desktop
    },
    extend: {},
  },
  plugins: [],
};

export default config;
