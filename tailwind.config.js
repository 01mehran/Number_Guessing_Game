/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        myFont: ["Arvo", "cursive"],
      },
      colors: {
        dark: "#222",
        lightGray: "#eee",
        offWhite: "#f7f7f7"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "20px",
          md: "80px",
        },
      },
    },
  },
  plugins: [],
};
