import server from '@/utils/request'
import qs from 'qs'

export function login (data) {
  return server({
    url: '/login',
    method: 'post',
    data: qs.stringify(data)
  })
}
