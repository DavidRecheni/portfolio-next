module.exports = {
  darkMode: "class",
  mode: "jit",
  content: [
    "node_modules/daisyui/dist/**/*.js",
    "node_modules/react-daisyui/dist/**/*.js",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        github: {
          gray: "#c9d1d9",
          dark: "#0d1117",
          blue: "#4c8eda",
        },
      },
      borderWidth: ["hover"],
      animation: {
        marquee: "marquee 80s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
