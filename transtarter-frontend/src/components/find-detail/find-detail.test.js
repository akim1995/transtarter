import { mount } from '@vue/test-utils'
import findDetail from './find-detail.vue';
const wrapper = mount(findDetail);
console.log(wrapper);
  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('<span class="count">0</span>')
  })