module.exports = {
  style: {
    postcss: {
      plugins: [
        // require('postcss-nested'),
        // require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
}