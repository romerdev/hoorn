import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#fff",
      gray: "#e8e9ea",
      black: "#000",
      red: "#ca464c",
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
export default config;
