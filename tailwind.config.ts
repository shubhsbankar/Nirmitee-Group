// tailwind.config.js
const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // ✅ watch everything under src
    // If you also keep files outside src, keep these too:
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
      },
      colors: {
        midnight: "#0B1221", // your dark “bark blue”
        royal: "#1B2A4A",
      },
      backgroundImage: {
        "gradient-hero": "linear-gradient(to right, #3B82F6, #9333EA)",
      },
    },
  },
  plugins: [
    // require("tailwindcss-animate"), // ← uncomment if you’re using it
  ],
};
