module.exports = {
  plugins: {
    tailwindcss: {},
    require("./postcss-fix-daisyui")(),
    autoprefixer: {},
  },
};
