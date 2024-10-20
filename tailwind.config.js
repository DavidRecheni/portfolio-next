module.exports = {
  darkMode: "class",
  mode: "jit",
  content: [
    "node_modules/daisyui/dist/**/*.js",
    "node_modules/react-daisyui/dist/**/*.js",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./modules/**/*.{ts,tsx}",
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
    },
  },
  plugins: [require("daisyui")],
};
