import service from '@/utils/request'

export function getMenus () {
  return service({
    url: '/admin/resource/menu',
    method: 'get'
  })
}
