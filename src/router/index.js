import router from './router'

router.beforeEach((to, from, next) => {
  // console.log(from, to)
  const role = localStorage.getItem('role')

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
