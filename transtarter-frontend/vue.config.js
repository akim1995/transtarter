const envArgs = require('./env')
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const PrerenderSpaPlugin = require('prerender-spa-plugin')

const buildLightConfig = envArgs.isServeBuild || envArgs.isBasicBuild
let scssConfig = {}
if (buildLightConfig) {
  scssConfig = `@import "@/assets/scss/precompile.scss";`
} else {
  /**
   * // Divide big main.scss to small chunks
   */
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
        { from: 'node_modules/oidc-client/dist/oidc-client.min.js', to: 'js' },
        { from: 'public' }
      ]),
      new PrerenderSpaPlugin({
        staticDir: path.join(__dirname, 'dist/app'),
        outputDir: path.join(__dirname, 'dist/app'),
        indexPath: path.join(__dirname, 'dist/app', 'index.html'),
        routes: [ '/index', '/settings' ]
      })
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
