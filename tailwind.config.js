module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#6C63FF",
        black: "#232323",
        white: "#FFFFFF",
        lightGray: "#F7F8FA",
        pink: "#FF3366",
        darkBlue: "#2D2E83",
      },
      fontFamily: {
        sans: ["Jersey 10", "sans-serif"], // Configura "Roboto" como la fuente principal
      },
    },
  },
  plugins: [],
};
