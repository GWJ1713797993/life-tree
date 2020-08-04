import wx from 'weixin-js-sdk'

export default class Wechat {
  static install(options) {
    if (this.installed) return this.installed
    this.installed = new Wechat(options)
    return this.installed
  }

  constructor(options) {
    this.init(options)
    this.shareConfig = false
  }

  init(options) {
    this.options = options
    this.systemInfo = window.navigator
  }

  config(options) {
    return new Promise((resolve, reject) => {
      console.log(this.isIPhone(), this.shareConfig)
      if (this.isIPhone() && this.shareConfig) return resolve()
      // console.log('配置')
      this.shareConfig = true
      wx.config(options)
      wx.ready(resolve(options))
      wx.error(reject)
    })
  }

  isIPhone() {
    const u = this.systemInfo.userAgent
    return u.indexOf('iPhone') > -1
  }

  share(options) {
    return new Promise((resolve, reject) => {
      // 如果不是安卓，且已经配置过一次直接执行成功
      options.success = resolve
      options.cancel = reject

      wx.onMenuShareTimeline(options)
      wx.onMenuShareAppMessage(options)
      wx.onMenuShareQQ(options)
      wx.onMenuShareWeibo(options)
      wx.onMenuShareQZone(options)
    })
  }
}
