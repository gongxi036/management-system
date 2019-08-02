
// 固定的路由表
import { constantRouterMap } from '@/router/router'
// import { getMenus } from '@/api/getMenus'

const state = {
  router: constantRouterMap,
  asyncRoutes: []
}

const mutations = {
  SET_ROUTERS: (state, routers) => {
    state.asyncRoutes = routers
    state.router = [...constantRouterMap, ...routers]
  }
}

const actions = {
  GenerateRoutes ({ commit }, asyncRouter) {
    return new Promise((resolve, reject) => {
      commit('SET_ROUTERS', asyncRouter)
      resolve()
    })
  }
}

export const filterAsyncRouter = (routers) => {
  const asyncRouter = routers.filter((router) => {
    router.name = router.text
    router.path = router.href

    delete router.subset
    delete router.parentId
    delete router.id
    delete router.text
    delete router.href
    if (router.children && router.children.length) {
      router.children = filterAsyncRouter(router.children)
    } else {
      delete router.children
    }
    return true
  })

  return asyncRouter
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
