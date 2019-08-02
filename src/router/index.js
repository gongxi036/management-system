import router from './router'
import store from '@/store'
import { getToken } from '@/utils/auth'
import { getMenus } from '@/api/getMenus'
import { filterAsyncRouter } from '@/store/modules/permission'

const whiteList = ['/login']// no redirect whitelist
router.beforeEach((to, from, next) => {
  // console.log(from, to)
  if (to.meta.title) {
    document.title = to.meta.title
  }
  // const role = localStorage.getItem('role')
  if (getToken()) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      const asyncRoutes = store.getters.asyncRoutes
      console.log(asyncRoutes)
      if (asyncRoutes.length) {
        next()
      } else {
        // 有登录 但是没有生成路由表
        loadMenus(next, to)
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
      next()
    } else {
      next(`/login?redirect=${to.path}`) // 否则全部重定向到登录页
    }
  }
  // if (role) {
  //   if (to.path === '/login') {
  //     console.log(1)
  //     next('/')
  //   } else {
  //     console.log(2)
  //     next()
  //   }
  // } else if (to.path !== '/login') {
  //   console.log(3)
  //   next({ path: '/login' })
  // } else {
  //   next()
  // }
})

export const loadMenus = (next, to) => {
  getMenus().then(res => {
    console.log(res)
    const asyncRouter = filterAsyncRouter(res.data)
    asyncRouter.push({ path: '*', redirect: '/404', hidden: true })
    // console.log(asyncRouter)
    store.dispatch('permission/GenerateRoutes', asyncRouter).then(() => {
      // router.addRoutes(asyncRouter)
      console.log(router)
      next({ ...to, replace: true })
    })
    // next()
  }).catch(err => {
    console.log(err)
  })
}
