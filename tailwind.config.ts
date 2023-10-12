import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        Fm: "376px",
      },
      fontFamily: {
        ubuntu: ["var(--font-ubuntu)", "sans-serif"],
        overpass: ["var(--font-overpass)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
