/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "card-color": "#FFFFFF",
        "card-border": "#E6E6E6",
        dark: "#212121",
        white: "#FAFAFA",
        error: "#D86161",
        grey: "#7A7A7A",
      },
    },
  },
  plugins: [],
};
