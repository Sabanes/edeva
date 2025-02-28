import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        aurora: "aurora 60s linear infinite",
        shimmer: "shimmer 2s linear infinite",
        scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        aurora: {
          from: { backgroundPosition: "50% 50%, 50% 50%" },
          to:   { backgroundPosition: "350% 50%, 350% 50%" },
        },
        shimmer: {
          from: { backgroundPosition: "0 0" },
          to:   { backgroundPosition: "-200% 0" },
        },
        scroll: {
          to: { transform: "translate(calc(-50% - 0.5rem))" },
        },
      },
      screens: {
        xs: '150px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xlg: '1030px',
        xl: '1280px',
        '2xl': '1536px',
      },
      // Restore your custom Clash Display classes
      fontFamily: {
        light: ['"Clash Display"', 'sans-serif'],
        lightItalic: ['"Clash Display"', 'sans-serif'],
        regular: ['"Clash Display"', 'sans-serif'],
        italic: ['"Clash Display"', 'sans-serif'],
        medium: ['"Clash Display"', 'sans-serif'],
        mediumItalic: ['"Clash Display"', 'sans-serif'],
        bold: ['"Clash Display"', 'sans-serif'],
        boldItalic: ['"Clash Display"', 'sans-serif'],
        black: ['"Clash Display"', 'sans-serif'],
        blackItalic: ['"Clash Display"', 'sans-serif'],
        variable: ['"Clash Display"', 'sans-serif'],
        variableItalic: ['"Clash Display"', 'sans-serif'],
      },
    },
  },
  plugins: [
    addVariablesForColors,
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
};

function addVariablesForColors({ addBase, theme }) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
  addBase({ ":root": newVars });
}