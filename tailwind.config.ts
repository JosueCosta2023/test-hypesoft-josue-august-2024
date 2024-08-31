import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/_components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        'brand-sec': '#7D00FF',
        'brand-secondary': '#ED1CA6',
        'brand-primary': '#242424',
        'brand-gray500': '#A5A5A5',
        'brand-gray100': '#DFE3EB',
        'brand-white': '#FFFFFF',
      }
    },
  },
  plugins: [],
};
export default config;
