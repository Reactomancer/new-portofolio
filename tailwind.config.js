/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontSize: {
      "heading-1": [
        "2.25rem",
        {
          lineHeight: "2.5rem",
          fontWeight: "600",
        },
      ],
      "heading-1-lg": [
        "3.75rem",
        {
          lineHeight: "4.5rem",
          letterSpacing: "-2%",
          fontWeight: "700",
        },
      ],
      "heading-1-md": [
        "3rem",
        {
          lineHeight: "3rem",
          letterSpacing: "-2%",
          fontWeight: "700",
        },
      ],
      "heading-2-lg": [
        "2.25rem",
        {
          lineHeight: "2.5rem",
          letterSpacing: "-2%",
          fontWeight: "600",
        },
      ],
      "heading-2": [
        "1.125rem",
        {
          lineHeight: "1.75rem",
          letterSpacing: "-2%",
          fontWeight: "600",
        },
      ],
      "heading-3": [
        "1.5rem",
        {
          lineHeight: "2rem",
          letterSpacing: "-2%",
          fontWeight: "600",
        },
      ],
      "heading-3-lg": [
        "1.875rem",
        {
          lineHeight: "2.25rem",
          letterSpacing: "-2%",
          fontWeight: "600",
        },
      ],
      subtitle: [
        "1.125rem",
        {
          lineHeight: "1.75rem",
          fontWeight: "400",
        },
      ],
      "subtitle-lg": [
        "1.25rem",
        {
          lineHeight: "1.75rem",
          fontWeight: "400",
        },
      ],
      "Body-1-lg": [
        "1.125rem",
        {
          lineHeight: "1.75rem",
          fontWeight: "400",
        },
      ],
      "Body-1": [
        "1rem",
        {
          lineHeight: "1.5rem",
          fontWeight: "400",
        },
      ],
      "Body-2": [
        "1rem",
        {
          lineHeight: "1.5rem",
          fontWeight: "400",
        },
      ],
      "Body-3": [
        "0.875rem",
        {
          lineHeight: "1.25rem",
          fontWeight: "400",
        },
      ],
    },
    colors: {
      gray: {
        light: {
          default: "#fff",
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
          950: "#030712",
        },

        dark: {
          default: "#030712",
          50: "#111827",
          100: "#1f2937",
          200: "#374151",
          300: "#4b5563",
          400: "#6b7280",
          500: "#9ca3af",
          600: "#d1d5db",
          700: "#e5e7eb",
          800: "#f3f4f6",
          900: "#f9fafb",
          950: "#ffffff",
        },

        emerald: "#10b981",
      },
    },
    dropShadow: {
      md: [
        "box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.06)",
        "0 4px 3px 0 rgba(0, 0, 0, 0.07)",
      ],
      lg: [
        "0 10px 8px 0 rgba(0, 0, 0, 0.04)",
        " 0 4px 3px 0 rgba(0, 0, 0, 0.1)",
      ],
      "2xl": "0 25px 25px 0 rgba(0, 0, 0, 0.15)",
    },
    extend: {},
  },
  plugins: [],
};
