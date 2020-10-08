module.exports = {
  publicPath: '/testTask/',
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "./src/assets/styles/styles.scss";'
      }
    }
  }
};
