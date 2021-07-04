module.exports = {
  purge: ['./src/pages/**/*.tsx', '../components/src/**/*.tsx'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'm-plus-rounded': ["'M PLUS Rounded 1c'", 'sans-serif']
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
