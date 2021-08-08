module.exports = {
  mode: 'jit',
  purge: {
    content: [
      'layouts/**/*.htm',
      'pages/**/*.htm',
      'partials/**/*.htm'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
