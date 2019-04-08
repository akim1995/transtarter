/**
 * Business process description
 * We have two build types: simple vue app, web components
 * When we use simple vue app we don't have encapsulated dom elements therefore we can include one big scss file
 * for wc we include all css in one webcomponents
*/

/**
 * this file has .js file name because of using in global modules where typescript transpiling doesn't work
*/

module.exports = {
  isServeBuild: process.argv.includes('serve'),
  isBasicBuild: process.argv.includes('./dist/app'), // basic configuration of Vue.js app
  isWebComponentBuild: process.argv.includes('./dist/wc')
}
