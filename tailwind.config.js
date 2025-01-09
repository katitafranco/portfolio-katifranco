module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgBase: "#F5FCFF", // Color Base
        colorPrimary: "#5E3BEE",
        colorDribble: "#E62872", //
        colorHeading: "#282938",
        colorBody: "#1C1E53",
      },
      fontFamily: {
        sans: ["Jersey 10", "sans-serif"], // Configura "Roboto" como la fuente principal
      },
    },
  },
  plugins: [],
};
