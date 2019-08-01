
import { getToken, setToken } from '@/utils/auth'

const state = {
  token: getToken(),
  name: ''
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
    setToken(token)
  },
  SET_NAME: (state, name) => {
    state.name = name
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
