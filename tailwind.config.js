import tailwindcssAnimate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--color-border)" /* gray-200 */,
        input: "var(--color-input)" /* white */,
        ring: "var(--color-ring)" /* electric-blue */,
        background: "var(--color-background)" /* white */,
        foreground: "var(--color-foreground)" /* rich-black */,
        primary: {
          DEFAULT: "var(--color-primary)" /* deep-navy */,
          foreground: "var(--color-primary-foreground)" /* white */,
        },
        secondary: {
          DEFAULT: "var(--color-secondary)" /* electric-blue */,
          foreground: "var(--color-secondary-foreground)" /* deep-navy */,
        },
        para: {
          DEFAULT: "var(--color-para)",
        },
        hover: {
          bg: "var(--color-hover-bg)",
        },
        destructive: {
          DEFAULT: "var(--color-destructive)" /* red-500 */,
          foreground: "var(--color-destructive-foreground)" /* white */,
        },
        muted: {
          DEFAULT: "var(--color-muted)" /* gray-50 */,
          foreground: "var(--color-muted-foreground)" /* gray-600 */,
        },
        accent: {
          DEFAULT: "var(--color-accent)" /* warm-gold */,
          foreground: "var(--color-accent-foreground)" /* deep-navy */,
        },
        popover: {
          DEFAULT: "var(--color-popover)" /* white */,
          foreground: "var(--color-popover-foreground)" /* rich-black */,
        },
        card: {
          DEFAULT: "var(--color-card)" /* white */,
          foreground: "var(--color-card-foreground)" /* rich-black */,
        },
        success: {
          DEFAULT: "var(--color-success)" /* green-500 */,
          foreground: "var(--color-success-foreground)" /* white */,
        },
        warning: {
          DEFAULT: "var(--color-warning)" /* yellow-600 */,
          foreground: "var(--color-warning-foreground)" /* white */,
        },
        error: {
          DEFAULT: "var(--color-error)" /* red-500 */,
          foreground: "var(--color-error-foreground)" /* white */,
        },
        surface: "var(--color-surface)" /* gray-50 */,
      },
      fontFamily: {
        "space-grotesk": ["Space Grotesk", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        jetbrains: ["JetBrains Mono", "monospace"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-left": {
          from: { opacity: "0", transform: "translateX(-100vw)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0)" },
          to: { opacity: "1", transform: "scale(1.2)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.8s ease-out",
        "slide-in-left": "slide-in-left 1.2s cubic-bezier(0.4, 0, 0.2, 1)",
        "scale-in": "scale-in 2s ease-out",
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
      },
      boxShadow: {
        "brand-card": "0 4px 16px rgba(10, 22, 40, 0.08)",
        "brand-modal": "0 8px 32px rgba(10, 22, 40, 0.12)",
        "brand-subtle": "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
      },
      transitionTimingFunction: {
        brand: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  // plugins: [require("tailwindcss-animate")],
};
