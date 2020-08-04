import axios from 'axios'
import Qs from 'qs'
// import { apiUrl } from '../../config'
// import store from '@/store'
import router from '@/router'
import { Toast } from 'vant'

if (process.env.NODE_ENV === 'development') {
  // axios.defaults.headers.common['token'] = 'djkhdf@fhl*gd'
}

axios.interceptors.request.use(config => {
  // config.baseURL = apiUrl
  if (config.data) config.data = Qs.stringify(config.data)
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use((response) => {
  if (response.data.status === -1) {
    Toast({
      message: '登录失效，请刷新或重新进入',
      duration: 0
    })
  } else if (response.data.status === -2) {
    router.replace('/')
  } else {
    return response.data
  }
}, error => {
  return Promise.reject(error)
})

export default axios
