const getters = {
  name: state => state.user.name,
  permission_routers: state => state.permission.router,
  asyncRoutes: state => state.permission.asyncRoutes
}

export default getters
