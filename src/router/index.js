import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import { rootPath, isDev } from '@/config'
import { wechatConfig } from '@/api'
import wx from 'weixin-js-sdk'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: rootPath,
  routes
})
document.title = '寻找本命树'
router.beforeEach(async(to, from, next) => {
  // 路由跳转改变title
  // if (to.meta.title) document.title = to.meta.title

  // 开发环境,直接下一步
  if (isDev) {
    return next()
  }

  const obj = {
    title: '寻找你的专属本命树',
    // desc: '长者全方位照护',
    // link: (window.location.href).replace(window.location.search, ''),
    link: 'http://wkan.cn/fl/yian/leftTree',
    imgUrl: 'http://www.wkan.cn/image/fl/yian/leftTree/share-icon.png'
  }

  wxConfig().then(res => {
    setShare(obj)
    next()
  }).catch((err) => {
    console.log(err)
    next()
  })
})

function wxConfig() {
  return new Promise((resolve, reject) => {
    wechatConfig({
      url: window.location.href
    }).then(({ data }) => {
      const { appid, signature, timestamp, noncestr } = data
      wx.config({
        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: appid, // 必填，公众号的唯一标识
        timestamp: timestamp, // 必填，生成签名的时间戳
        nonceStr: noncestr, // 必填，生成签名的随机串
        signature: signature, // 必填，签名
        jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone'] // 必填，需要使用的JS接口列表
      })
      wx.ready(() => {
        resolve()
      })
      wx.error((err) => {
        reject(err)
      })
    }).catch(reject)
  })
}

function setShare(options) {
  wx.onMenuShareTimeline(options)
  wx.onMenuShareAppMessage(options)
  wx.onMenuShareQQ(options)
  wx.onMenuShareWeibo(options)
}
export default router
