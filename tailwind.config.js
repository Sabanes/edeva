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
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
        shimmer: {
          from: {
            "backgroundPosition": "0 0"
          },
          to: {
            "backgroundPosition": "-200% 0"
          }
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      screens: {
        'xs': '150px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xlg': '1030px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      fontFamily: {
        light: ['Satoshi-Light', 'sans-serif'],
        lightItalic: ['Satoshi-LightItalic', 'sans-serif'],
        regular: ['Satoshi-Regular', 'sans-serif'],
        italic: ['Satoshi-Italic', 'sans-serif'],
        medium: ['Satoshi-Medium', 'sans-serif'],
        mediumItalic: ['Satoshi-MediumItalic', 'sans-serif'],
        bold: ['Satoshi-Bold', 'sans-serif'],
        boldItalic: ['Satoshi-BoldItalic', 'sans-serif'],
        black: ['Satoshi-Black', 'sans-serif'],
        blackItalic: ['Satoshi-BlackItalic', 'sans-serif'],
        variable: ['Satoshi-Variable', 'sans-serif'],
        variableItalic: ['Satoshi-VariableItalic', 'sans-serif'],
      },
    },
  },
  plugins: [
    addVariablesForColors,
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
  addBase({
    ":root": newVars,
  });
}