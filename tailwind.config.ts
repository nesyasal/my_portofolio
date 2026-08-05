import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        spotify: {
          green: "#FFC5D3",
          "green-hover": "#FFB0C2",
          pink: "#FFC5D3",
          "pink-hover": "#FFB0C2",
          black: "#121212",
          card: "#181818",
          "card-hover": "#282828",
          subtext: "#b3b3b3",
          light: "#282828",
          sidebar: "#000000"
        },
      },
      fontFamily: {
        sans: ["Circular Std", "Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
      animation: {
        'equalizer': 'equalizer 1.5s ease-in-out infinite alternate',
      },
      keyframes: {
        equalizer: {
          '0%': { height: '15%' },
          '100%': { height: '100%' }
        }
      }
    },
  },
  plugins: [],
};
export default config;
