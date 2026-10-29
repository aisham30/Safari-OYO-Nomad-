import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        nomad: {
          charcoal: "#171A1D",
          darker: "#0F1113",
          surface: "#1E2227",
          surfaceBorder: "#2D333B",
          offwhite: "#F5F3EE",
          safariRed: "#D8292F",
          oyoRed: "#EE2E35",
          forest: "#536B54",
          forestLight: "#6C8A6D",
          muted: "#8A8F96",
          mutedDark: "#52575E",
          sand: "#E5DEC9",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      boxShadow: {
        "glow-red": "0 0 25px -5px rgba(238, 46, 53, 0.25)",
        "tech": "0 4px 20px -2px rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [],
};
export default config;
