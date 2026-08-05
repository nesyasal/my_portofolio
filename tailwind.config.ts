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
          green: "#E63946",
          "green-hover": "#C70039",
          pink: "#FFC5D3",
          "pink-hover": "#FFB0C2",
          rose: "#E63946",
          black: "#FFFFFF",
          card: "#FFFFFF",
          "card-hover": "#FFF0F3",
          subtext: "#666666",
          light: "#FFE4E8",
          sidebar: "#FFFFFF"
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
