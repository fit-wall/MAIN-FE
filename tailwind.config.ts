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
        primary: "#E30500",
        "secondary-100": "#FFBBBB",
        "secondary-200": "#F56060",
        "background-100": "#141414",
        "background-200": "#1B1B1B",
        "background-300": "#2A2A2A",
        "gray-50": "#F9FAFB",
        "gray-100": "#F3F4F6",
        "gray-200": "#E5E7EB",
        "gray-300": "#DEE2E6",
        "gray-400": "#CED4DA",
        "gray-500": "#BAC0C7",
        "gray-600": "#A1A8AF",
        "gray-700": "#686C70",
        "gray-800": "#4D5155",
        "gray-900": "#303235",
        mainfont: "#eaeaea",
      },
    },
  },
  plugins: [],
} satisfies Config;
