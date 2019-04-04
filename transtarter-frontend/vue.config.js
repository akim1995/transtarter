const CopyWebpackPlugin = require('copy-webpack-plugin')

// we have two build types: simple vue app, web components
// When we use simple vue app we don't have encapsulated dom elements therefore we can include one big scss file
// for wc we include all css in one webcomponents
// TODO divide big main.scss to small chunks
const buildVueApp = Array.from(process.argv).includes('./dist/app')
let scssConfig = {}
if (buildVueApp) {
  scssConfig = `
    @import "@/assets/scss/base/_colors.scss";
    @import "@/assets/scss/mixins/_firefox-only.scss";
  `
} else {
  scssConfig = `@import "@/assets/scss/main.scss";`
}

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: scssConfig
      }
    }
  },
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin([
        { from: 'node_modules/oidc-client/dist/oidc-client.min.js', to: 'js' }
      ])
    ],
    // this section will remove hash from file names
    output: {
      filename: 'js/[name].js',
      chunkFilename: 'js/[name].js'
    }
    // end this section will remove hash from file names
  },
  // this section will remove hash from file names
  chainWebpack: config => {
    if (config.plugins.has('extract-css')) {
      const extractCSSPlugin = config.plugin('extract-css')
      extractCSSPlugin &&
        extractCSSPlugin.tap(() => [
          {
            filename: 'css/[name].css',
            chunkFilename: 'css/[name].css'
          }
        ])
    }
  }
  // end this section will remove hash from file names
}
