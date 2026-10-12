import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { cream: "#f5ede3", peach: "#fbe6da", step: "#fdece3", pill: "#f3dfd1", brand: "#ad3306", brown: "#85583c", ink: "#2a1d14", muted: "#7a6a5e" },
    fontFamily: { sans: ["var(--font-sans)", "system-ui", "sans-serif"] },
  } },
  plugins: [],
};
export default config;
