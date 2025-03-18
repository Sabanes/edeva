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
      // Restore your custom General Sans classes
      fontFamily: {
        light: ['"General Sans"', 'sans-serif'],
        lightItalic: ['"General Sans"', 'sans-serif'],
        regular: ['"General Sans"', 'sans-serif'],
        italic: ['"General Sans"', 'sans-serif'],
        medium: ['"General Sans"', 'sans-serif'],
        mediumItalic: ['"General Sans"', 'sans-serif'],
        bold: ['"General Sans"', 'sans-serif'],
        boldItalic: ['"General Sans"', 'sans-serif'],
        black: ['"General Sans"', 'sans-serif'],
        blackItalic: ['"General Sans"', 'sans-serif'],
        variable: ['"General Sans"', 'sans-serif'],
        variableItalic: ['"General Sans"', 'sans-serif'],
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