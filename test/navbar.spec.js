import { mount, shallowMount } from '@vue/test-utils'
import navbar from '@/components/navbar.vue'

function createConfig(overrides) {
  const id = 1
  const mocks = {}
  const propsData = { id }
  return Object.assign({ mocks, propsData }, overrides)
}

describe('navbar.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(navbar)
  })

  it('renders correctly', () => {
    const wrapper = shallowMount(navbar, createConfig())
    expect(wrapper).toMatchSnapshot()
  })

  it('has title theme', () => {
    const themeTitle = wrapper.find('#themeTitle')
    expect(themeTitle.exists()).toBe(true)
    expect(themeTitle.text()).toBe('Rivers of the World')
    expect(themeTitle.attributes().class).toContain('uppercase')
  })

  it('has a button theme', () => {
    const themeButton = wrapper.find('#themeBtn')
    expect(themeButton.exists()).toBe(true)
  })
})
