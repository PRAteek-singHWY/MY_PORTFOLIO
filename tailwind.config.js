/** @type {import('tailwindcss').Config} */
// Colours come from CSS variables in src/index.css (the dark purple look).
// See CLAUDE.md Part 2, constraint 5.
const v = (name) => `rgb(var(--c-${name}) / <alpha-value>)`;

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: v("primary"),
        secondary: v("secondary"),
        tertiary: v("tertiary"),
        "black-100": v("black-100"),
        "black-200": v("black-200"),
        // "white" is the page ink
        white: v("ink"),
        "white-100": v("ink-soft"),
        accent: v("accent"),
        "accent-dim": v("accent-dim"),
        "on-accent": v("on-accent"),
        card: v("card"),
        gsoc: "#F9AB00",
      },
      fontFamily: {
        display: ['"Playfair Display"', "Georgia", "serif"],
      },
      boxShadow: {
        card: "0px 35px 120px -15px rgb(0 0 0 / 0.55)",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};
