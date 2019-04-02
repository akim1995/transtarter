import { mount } from '@vue/test-utils'
import findDetail from '@/components/find-detail/find-detail.vue'
describe('Renders correct html', () => {
  const wrapper = mount(findDetail)
  it('Has an input tag', () => {
    expect(wrapper.contains('input')).toBe(true)
  })

  // it('test2', () => {
  //   const wrapper = mount(findDetail)
  //   const button = wrapper.find('.find-detail__filter-item')
  //   button.trigger('click')
  //   console.log(wrapper.vm)
  //   // expect(wrapper.vm.activeTab.toBe(0)
  // })
})
