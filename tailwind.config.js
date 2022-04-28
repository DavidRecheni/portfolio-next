module.exports = {
  darkMode: "class",
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        github: {
          gray: '#c9d1d9',
          dark: '#0c1117',
          blue: '#4c8eda',
        },
      },
      borderWidth: ['hover'],
    },
  },
  plugins: [],
}