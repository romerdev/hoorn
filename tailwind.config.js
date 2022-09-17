/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      white: "#fff",
      black: "#000",
      red: "#ca464c",
      yellow: "#fab102",
      purple: "#B02996",
      blue: "#266ea1",
      green: "#459828",
      orange: "#E18335",
      cyan: "#087E8B",
    },
    fontFamily: {
      sans: ["Noto Sans", "sans-serif"],
      serif: ["Noto Serif", "serif"],
    },
  },
  plugins: [],
};
