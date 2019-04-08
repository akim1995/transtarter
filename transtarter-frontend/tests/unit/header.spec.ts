import { mount } from '@vue/test-utils'
import LayoutHeader from '@/components/shared/header/header.vue'

describe('Renders correct html', () => {
  const wrapper = mount(LayoutHeader)
  const desktopInput = wrapper.find('.search-input-desktop')
  const mobileInput = wrapper.find('.search-input-mobile')

  it('Component is mounted', () => {
    debugger
    expect(wrapper.element).toBeTruthy()
  })

  // it('Component has mobile input', () => {
  //   expect(desktopInput.isVisible).toBe(true)
  // })

  // it('Component has desktop input', () => {
  //   expect(mobileInput.isVisible).toBe(true)
  // })
})
