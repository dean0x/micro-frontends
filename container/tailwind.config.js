module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx,vue}", "./public/**/*.html"],
  theme: {
    fontFamily: {
      sans: [
        "HelveticaNeue-Light",
        "Helvetica Neue Light",
        "Helvetica Neue",
        "Helvetica, Arial",
        "Lucida Grande",
        "sans-serif",
      ],
    },
    extend: {
      flex: {
        "2/4": "0 0 50%",
      },
      maxWidth: {
        "2/4": "50%",
      },
    },
  },
};
