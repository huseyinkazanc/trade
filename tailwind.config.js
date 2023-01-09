/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "346px",
      // => @media (min-width: 346px) { ... }
      md: "1059px",
      // => @media (min-width: 768px) { ... }
      lg: "1105px",
      // => @media (min-width: 1010px) { ... }
      xl: "1200px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
