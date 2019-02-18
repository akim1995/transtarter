// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

var faker = require('faker')

var randomName = faker.name.findName() // Rowan Nikolaus
var randomEmail = faker.internet.email() // Kassandra.Haley@erich.biz
var randomCard = faker.helpers.createCard() // random contact card containing many properties

const defaultDelay = 5000

const devServerUrl = process.env.VUE_DEV_SERVER_URL

module.exports = {
  before: function (browser) {
    browser.resizeWindow(1600, 2000)
  },
  'registration process': browser => {
    browser
      .url(devServerUrl)
      .waitForElementVisible('#app', defaultDelay)
      .click('.register')
      .waitForElementVisible('.modal-wrapper.registration', defaultDelay)
      .setValue('input.form-control.name-input', faker.name.findName())
      .setValue('input.form-control.phone-input', faker.phone.phoneNumber())
      .setValue('input.form-control.email-input', faker.internet.email())
      .setValue('input.form-control.password-input', faker.internet.password(10))
      .setValue('select.form-control.org-input', 'Автосервис')
      .setValue('select.form-control.first-selector.name-org-input', 'ООО')
      .setValue('input.form-control.second-selector', faker.company.companyName())
      .click('button.btn.btn-orange.btn-reg', function (d) {
        debugger
        console.log(d)
      })
      .waitForElementVisible('.log-in', defaultDelay)
      .end()
  }
}
