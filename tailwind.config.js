/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "700px",
      md: "768px",
      lg: "1210px",
    },
    extend: {
      backgroundImage: {
        "hero-default": "url('../../assets/img/hero-bg.png')",
        // "hero-sm": "url('/assets/img/hero-img.png')",
      },
      container: {
        padding: "20px",
        screens: {
          lg: "1210px",
        },
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        textColor: "var(--color-text)",
        grey: "var(--color-grey)",
        bodyColor: "var(--color-bg)",
        error: "var(--color-error)",
      },
    },
  },
  plugins: [],
};
