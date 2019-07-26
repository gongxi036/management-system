import axios from 'axios'
// import { Message } from 'element-ui' //  todo 添加加载动画
// import { getToken, removeToken } from '../assets/js/storage/token.js'
// 创建axios实例
const service = axios.create({
  baseURL: '/api', // api 的 base_url
  timeout: 10000, // 请求超时时间
  headers: {
    'Cache-Control': 'no-cache, no-store',
    'Pragma': 'no-cache'
  }
})

// request拦截器
service.interceptors.request.use(
  config => {
    // config.headers['Authorization'] = getToken()
    return config
  },
  error => {
    console.log('请求发送失败')
    // Do something with request error
    console.error(error) // for debug
    // Message.error(error.message)
    return Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    // console.log('请求响应成功')
    // console.log(response)
    // if (response.data && typeof response.data === 'string' && response.data.indexOf('99') > -1) {
    //   // removeToken()
    //   // Message.error('登录态过期，请重新登录')
    //   location.reload()
    // }
    return response.data
  },
  error => {
    console.log('请求响应失败')
    console.error(error) // for debug
    if (error && error.response) {
      switch (error.response.status) {
        case 401: error.message = '未授权，请登录'; break
        case 403: error.message = '拒绝访问'; break
        case 404: error.message = `请求地址出错: ${error.response.config.url}`; break
        case 408: error.message = '请求超时'; break
        case 500: error.message = '服务器内部错误'; break
        case 501: error.message = '服务未实现'; break
        case 502: error.message = '网关错误'; break
        case 503: error.message = '服务不可用'; break
        case 504: error.message = '网关超时'; break
        case 505: error.message = 'HTTP版本不受支持'; break
        default: break
      }
    }
    // Message.error(error.message)
    return Promise.reject(error)
  }
)

export default service
