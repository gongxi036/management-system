
// 固定的路由表
import { constantRouterMap } from '@/router/router'
import { getMenus } from '@/api/getMenus'

const state = {
  router: constantRouterMap,
  asyncRoutes: []
}

const mutatios = {
  SET_ROUTERS: (state, routers) => {
    state.asyncRoutes = routers
    state.router = [...routers, ...constantRouterMap]
  }
}

const actions = {
  GenerateRoutes ({ commit }, asyncRouter) {
    commit('SET_ROUTERS', asyncRouter)
    // return getMenus().then( res => {

    // })
  }
}

export default {
  namespaced: true,
  state,
  mutatios,
  actions
}
