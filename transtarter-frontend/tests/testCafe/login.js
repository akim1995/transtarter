import { Selector, RequestLogger } from 'testcafe'

fixture`New Fixture`
  .page`http://localhost:8080/`

test('Login Process', async t => {
  await t
    .maximizeWindow()
    .click(Selector('a').withText('Вход'))
    .click(Selector('button').withText('Войти через IdentityServer'))
    .typeText(Selector('#Username'), 'admin')
    .pressKey('tab')
    .typeText(Selector('#Password'), 'Pa$$word123')
    .click(Selector('button').withText('Login'))
    .click(Selector('.user-sidebar-top').find('.user-picture'))
    .click(Selector('button').withText('Регистрационные данные'))
    .click(Selector('button').withText('Адреса доставки'))
    .click(Selector('button').withText('Реквизиты и юр'))
})
