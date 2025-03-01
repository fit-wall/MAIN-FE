import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff2525",
        secondary: "#e30000",
        background: "#101010",
        mainfont: "#eaeaea",
      },
    },
  },
  plugins: [],
} satisfies Config;
