// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

var faker = require('faker')

const defaultDelay = 5000

const devServerUrl = process.env.VUE_DEV_SERVER_URL
const regExpForPassword = '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'

module.exports = {
  before: function (browser) {
    browser.resizeWindow(1600, 2000)
  },
  'registration process': browser => {
    browser
      .url(devServerUrl)
      .pause(5000)
      .waitForElementVisible('#app', defaultDelay)
      .click('.register')
      .waitForElementVisible('.modal-wrapper.registration', defaultDelay)
      .setValue('input.form-control.name-input', faker.name.findName())
      .setValue('input.form-control.phone-input', faker.phone.phoneNumber())
      .setValue('input.form-control.email-input', faker.internet.email())
      .setValue('input.form-control.password-input', faker.internet.password(len = 10, pattern = regExpForPassword))
      .setValue('select.form-control.org-input', 'Автосервис')
      .setValue('select.form-control.first-selector.name-org-input', 'ООО')
      .setValue('input.form-control.second-selector', faker.company.companyName())
      .pause(5000)
      .submitForm('form.registration-form')
      .pause(5000)
      .waitForElementVisible('.log-in', defaultDelay)
      .end()
  }
}
