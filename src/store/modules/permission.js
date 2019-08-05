
// 固定的路由表
import { constantRouterMap } from '@/router/router'
// import { getMenus } from '@/api/getMenus'
import Layout from '@/layout/Layout.vue'

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
    router.meta = { title: router.text }

    delete router.subset
    delete router.parentId
    delete router.id
    delete router.text
    // delete router.href
    if (router.children && router.children.length) {
      router.component = Layout
      router.redirect = 'noredirect'
      router.children = filterAsyncRouter(router.children)
    } else {
      const component = router.href.replace(/^\//, '')
      router.component = loadView(component)
      delete router.children
    }
    return true
  })

  return asyncRouter
}

export const loadView = (view) => { // 路由懒加载
  return () => import(`@/views/${view}/index`)
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
