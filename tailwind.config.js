module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'deep-blue' : '#09081f',
        'pastel-yellow' : '#f5ff3d'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
