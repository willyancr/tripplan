import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-poppins)", "sans-serif"],
    },
    extend: {
      colors: {
        "greenish-yellow": "#ccd5ae",
      },
      backgroundImage: {
        "image-black": "url('/bg.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        dancing_script: ["var(--font-dancing-script)", "mono"],
      },
      animation: {
        modal: "modal .2s ease-in-out ",
      },
      keyframes: {
        modal: {
          "0%": { transform: "scale(.8)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
