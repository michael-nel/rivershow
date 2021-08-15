import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import cases from '@/components/cases.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('cases.vue', () => {
  let store
  let actions
  let state

  beforeEach(() => {
    actions = {
      apiGetRivers: jest.fn(),
    }

    state = () => ({
      rivers: [
        {
          title: 'Title Test',
          image: 'image.jpg',
          description: 'Description Test',
          length: 'Length Test',
          countries: ['Country A', 'Country B'],
          continent: 'Continent Test',
        },
      ],
    })

    store = new Vuex.Store({
      state,
      actions,
      mutations: {
        updateRivers(state, river) {
          state.rivers = river
        },
      },
      getters: {
        getRivers: (state) => {
          return state.rivers
        },
      },
    })
  })

  it('has title, description, length, countries, continent', () => {
    const wrapper = mount(cases, {
      store,
      localVue,
    })
    wrapper.vm.updateIndex(0)
    expect(wrapper.vm.title).toBe('Title Test')
    expect(wrapper.vm.description).toBe('Description Test')
    expect(wrapper.vm.length).toBe('Length Test')
    expect(wrapper.vm.countries).toBe('Country A, Country B')
    expect(wrapper.vm.continent).toBe('Continent Test')
  })
})
