// we have two build types: simple vue app, web components
// When we use simple vue app we don't have encapsulated dom elements therefore we can include one big scss file
// for wc we include all css in one webcomponents
// TODO divide big main.scss to small chunks

export const envArgs = {
  isServeBuild: process.argv.includes('serve'),
  isBasicBuild: process.argv.includes('./dist/app'), // basic configuration of Vue.js app
  isWebComponentBuild: process.argv.includes('./dist/wc')
}
