import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F5F7F8",
        panel: "#EAF0F3",
        ink: "#12202B",
        inkfade: "#4C5E68",
        blueprint: "#1D4E6B",
        blueprintdeep: "#123449",
        brass: "#B5793B",
        brassdeep: "#8F5E2A",
        line: "#C7D2D8",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      backgroundImage: {
        blueprintgrid:
          "linear-gradient(to right, rgba(29,78,107,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(29,78,107,0.08) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "28px 28px",
      },
    },
  },
  plugins: [],
};
export default config;
