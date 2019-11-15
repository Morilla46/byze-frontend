import axios from 'axios'
import { Message } from 'element-ui'
import config from '@/config'
import router from '@/router/index'
// import Cookie from 'js-cookie'
export const root = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro

const instance = axios.create({
  baseURL: root,
  // params: {
  //   access_token: ''
  // },
  withCredentials: true
})

const loginInstance = axios.create({
  baseURL: root,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  withCredentials: false
})

instance.interceptors.request.use(
  config => {
    // let token = Cookie.get('byze_token') || null
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`
    // }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

instance.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          Message.error('身份过期，请重新登录')
          router.replace({
            path: '/login'
          })
          break
        case 404:
          error.message = '请求无效'
          break
        case 504:
          error.message = '请求超时'
          break
        case 500:
          error.message = '请求失败'
          break
      }
      // Message.error(error.message)
    }
    return Promise.reject(error)
  })

export { instance, loginInstance }
