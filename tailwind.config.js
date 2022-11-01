module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        exeter: '#9A1D2E',
      },
      fontFamily: {
        sans: ['Inter'],
        monospace: ['JetBrains Mono'],
      },
    },
  },
  plugins: [],
};
