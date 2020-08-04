import axios from '@/libs/api.request'

// 微信分享配置
export const wechatConfig = data => {
  return axios.request({
    url: '/fl/show/config',
    data,
    methods: 'post'
  })
}
