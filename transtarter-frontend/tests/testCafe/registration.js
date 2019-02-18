import { Selector } from 'testcafe'

fixture`New Fixture`
  .page`http://localhost:8080/`

test('New Test', async t => {
  await t
    .maximizeWindow()
    .click(Selector('a').withText('Регистрация'))
    .click(Selector('.form-group').find('.form-control'))
    .typeText(Selector('.form-group').find('.form-control'), 'Serov')
    .pressKey('tab')
    .typeText(Selector('div').withText('Введите телефон').nth(7).find('.form-control'), '911')
    .pressKey('tab')
    .typeText(Selector('div').withText('Введите email').nth(7).find('.form-control'), 'serov@mail.ru')
    .debug()
    .pressKey('tab')
    .typeText(Selector('div').withText('Введите пароль').nth(7).find('.form-control'), '123$Asd')
    .click(Selector('div').withText('Какую организацию вы представляете').nth(7).find('.form-control'))
    .click(Selector('.two-selectors').find('.form-control.first-selector'))
    .typeText(Selector('.two-selectors').find('.form-control.second-selector'), 'Jhuf')
    .click(Selector('.registration-form').find('button').withText('Зарегистрироваться'))
})
