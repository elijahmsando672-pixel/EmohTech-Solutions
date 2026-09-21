/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Backgrounds (dark navy technical palette)
        night: {
          950: "#070B14",
          900: "#0D1320",
          800: "#111827",
          700: "#182234",
        },
        // Primary accent — cyan
        brand: {
          50: "#e6fdff",
          100: "#ccfaff",
          200: "#99f5ff",
          300: "#66efff",
          400: "#33eaff",
          500: "#00e5ff",
          600: "#00c2d9",
          700: "#009cb0",
          800: "#00717f",
          900: "#005762",
        },
        // Secondary accent — purple
        accent: {
          50: "#f5f3ff",
          100: "#ede9fe",
          200: "#ddd6fe",
          300: "#c4b5fd",
          400: "#a78bfa",
          500: "#7c3aed",
          600: "#6d28d9",
          700: "#5b21b6",
          800: "#4c1d95",
          900: "#3b0764",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
        display: ["Manrope", "Inter", "system-ui", "sans-serif"],
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(1)", opacity: "0.6" },
          "100%": { transform: "scale(1.8)", opacity: "0" },
        },
        "draw-line": {
          from: { "stroke-dashoffset": "1" },
          to: { "stroke-dashoffset": "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 9s ease-in-out infinite",
        "pulse-ring": "pulse-ring 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite",
      },
      boxShadow: {
        card: "0 10px 40px rgba(0, 0, 0, 0.4)",
        "card-lg": "0 24px 80px rgba(0, 0, 0, 0.55)",
        "glow-cyan": "0 0 40px rgba(0, 229, 255, 0.25)",
        "glow-purple": "0 0 40px rgba(124, 58, 237, 0.25)",
      },
      backgroundImage: {
        "grid-light":
          "linear-gradient(to right, rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.04) 1px, transparent 1px)",
        "grid-dark":
          "linear-gradient(to right, rgba(148,163,184,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.05) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};