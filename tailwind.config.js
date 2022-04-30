module.exports = {
  darkMode: "class",
  mode: 'jit',
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        github: {
          gray: '#c9d1d9',
          dark: '#0d1117',
          blue: '#4c8eda',
        },
      },
      borderWidth: ['hover'],
    },
  },
  plugins: [],
}