/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5ba4a4",
        Background: "	#effafa",
        light_cyan: "	#eef6f6",
        dark_cyan: "	#7b8e8e",
        very_dark_cyan: "#2c3a3a",
      },
      backgroundImage: {
        "mobile-bg": "url('/public/images/bg-header-mobile.svg')",
        "desktop-bg": "url('/public/images/bg-header-desktop.svg')",
      },
    },
  },
  plugins: [],
};
