import { shallowMount, Wrapper } from '@vue/test-utils'
import LayoutHeader from '@/components/shared/header/header.vue'

describe('Header component behavior', () => {
  let wrapper: Wrapper<LayoutHeader>
  let inputSelectors: string[] = []
  let searchResultsSelectors: string[] = []

  beforeEach(() => {
    wrapper = shallowMount(LayoutHeader)

    inputSelectors.push('.search-input-desktop')
    inputSelectors.push('.search-input-mobile')

    searchResultsSelectors.push('.desktop-search-result')
    searchResultsSelectors.push('.mobile-search-result')
  })

  it('Component is mounted', () => {
    expect(wrapper.element).toBeTruthy()
  })

  it('Component has mobile and desktop input', () => {
    inputSelectors.forEach(inputSelector => {
      expect(wrapper.find(inputSelector).isVisible()).toBe(true)
    })
  })

  it('Mobile and Desktop search results are hidden when in search input 2 or less symbols', () => {
    searchResultsSelectors.forEach(searchResultSelector => {
      for (let i = 0; i < 2; i++) {
        wrapper.setData({ searchText: 't'.repeat(i) })
        expect(wrapper.find(searchResultSelector).exists()).toBe(false)
      }
    })
  })

  it('Mobile and Desktop search results are hidden when in search input 3 or more symbols', () => {
    searchResultsSelectors.forEach(searchResultSelector => {
      for (let i = 3; i < 10; i++) {
        wrapper.setData({ searchText: 't'.repeat(i) })
        expect(wrapper.find(searchResultSelector).isVisible()).toBe(true)
      }
    })
  })
})
