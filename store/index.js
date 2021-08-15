import axios from 'axios'
export const state = () => ({
  rivers: [],
})

export const mutations = {
  updateRivers(state, river) {
    state.rivers = river
  },
}

export const actions = {
  async apiGetRivers({ commit }) {
    const { data } = await axios.get(`https://api.nuxtjs.dev/rivers`)
    commit('updateRivers', data)
  },
}

export const getters = {
  getRivers: (state) => {
    return state.rivers
  },
}
