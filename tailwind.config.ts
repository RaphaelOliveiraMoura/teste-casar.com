import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: "2rem",
    },
    extend: {
      colors: {
        primary: "#32c0c6",
        "primary-dark": "#339599",
        "primary-light": "#d4edef",
        placeholder: "#8c8c8c",
        "grey-neutral": "#616161",
        "grey-dark": "#4e4e4e",
        "white-background-light": "#ffffff",
        "white-background-matte": "#f3f3f5",
        "border-line": "#e4e6e9",
        success: "#5db85b",
        warning: "#ffb22c",
        danger: "#fc4b6c",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
