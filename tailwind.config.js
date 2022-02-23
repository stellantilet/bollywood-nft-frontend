module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Gabriela", "serif"],
      serif: ["Gabriela", "serif"],
      mono: ["Gabriela", "serif"],
      display: ["Gabriela", "serif"],
      body: ["Gabriela", "serif"],
    },
    extend: {
      aspectRatio: {
        "4/3": "4 / 3",
      },
      boxShadowColor: {
        white: '#fff'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
