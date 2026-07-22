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
        primary: {
          DEFAULT: "#6366F1",
          light: "#818CF8",
          dark: "#4F46E5",
        },
        secondary: {
          DEFAULT: "#8B5CF6",
          light: "#A78BFA",
          dark: "#7C3AED",
        },
        accent: {
          cyan: "#22D3EE",
          green: "#10B981",
          amber: "#F59E0B",
          red: "#EF4444",
        },
        background: {
          DEFAULT: "#0A0A0F",
          surface: "#12121A",
          elevated: "#1A1A24",
        },
        border: {
          DEFAULT: "rgba(255, 255, 255, 0.08)",
          hover: "rgba(255, 255, 255, 0.15)",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#A1A1AA",
          muted: "#71717A",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      animation: {
        "gradient-shift": "gradient-shift 8s ease infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "particle": "particle 20s linear infinite",
      },
      keyframes: {
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        particle: {
          "0%": { transform: "translateY(100vh) rotate(0deg)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateY(-100vh) rotate(720deg)", opacity: "0" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient": "linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #A855F7 100%)",
        "mesh-gradient": "radial-gradient(at 40% 20%, #6366F1 0px, transparent 50%), radial-gradient(at 80% 0%, #8B5CF6 0px, transparent 50%), radial-gradient(at 0% 50%, #A855F7 0px, transparent 50%), radial-gradient(at 80% 50%, #22D3EE 0px, transparent 50%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(99, 102, 241, 0.3)",
        "glow-lg": "0 0 60px rgba(99, 102, 241, 0.4)",
        "glow-cyan": "0 0 40px rgba(34, 211, 238, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
