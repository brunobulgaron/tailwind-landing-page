module.exports = {
  purge: {
    enabled: true, // trocar para true antes de subir em produção
    content: [
      './**/*.html'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Rubik']
    },
    extend: {
      colors: {
        primary: '#F53855',
        secondary: '#FFECEC',
        boldText: '#0B132A',
        normalText: '#4F5665'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
