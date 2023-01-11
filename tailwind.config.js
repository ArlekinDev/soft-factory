module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      max: "1950px",
      "5xl": { max: "1900px" },
      "4xl": { max: "1700px" },
      "3xl": { max: "1500px" },
      "2xl": { max: "1200px" },
      xl: { max: "1000px" },
      lg: { max: "767px" },
      md: { max: "575px" },
      sm: { max: "320px" },
    },

    colors: {
      black: "black",
      aqua: "#04BAFE",
    },
    extend: {},
  },
  plugins: [],
};
