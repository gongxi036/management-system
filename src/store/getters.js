const getters = {
  name: state => state.user.name,
  accessRoutes: state => state.permission.route,
  asyncRoutes: state => state.permission.asyncRoutes
}

export default getters
