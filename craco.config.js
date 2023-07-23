module.exports = {
    style: {
      modules: {
        localIdentName: '[local]_[hash:base64:5]',
      },
      css: {
        loaderOptions: {
          modules: { localIdentName: '[local]_[hash:base64:5]' },
        },
      },
      sass: {
        loaderOptions: {
          sassOptions: {
            prependData: `@import "./src/styles/variables.scss";`,
          },
        },
      },
    },
  };
  