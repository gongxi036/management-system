import router from './router'
import store from '@/store'
import { getToken } from '@/utils/auth'
// import { getMenus } from '@/api/getMenus'

router.beforeEach((to, from, next) => {
  // console.log(from, to)
  if (to.meta.title) {
    document.title = to.meta.title
  }
  const role = localStorage.getItem('role')
  if (getToken()) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      const asyncRoutes = store.getters.asyncRoutes
      if (asyncRoutes) {
        next()
      } else {
        // 有登录 但是没有生成路由表
        loadMenus(next, to)
      }
    }
  } else {
    next('/login')
  }
  if (role) {
    if (to.path === '/login') {
      console.log(1)
      next('/')
    } else {
      console.log(2)
      next()
    }
  } else if (to.path !== '/login') {
    console.log(3)
    next({ path: '/login' })
  } else {
    next()
  }
})

export const loadMenus = (next, to) => {

}
