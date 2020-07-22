const isDev = process.env.NODE_ENV === 'development'
const publicPath = isDev ? '/' : '/image/ys_service/app'
const rootPath = isDev ? '/' : '/completion/index/index'

module.exports = {
  debug: false,

  /** 是否开发环境 */
  isDev,

  /** 静态资源路径 */
  publicPath,

  /** 路由根路径 */
  rootPath,

  /** proxy 跨域代理 */
  proxy: {
    '/api': {
      target: 'http://xx.xxxx.xx/api',
      // ws: true,
      changOrigin: true, // 接口跨域
      pathRewrite: {
        '^/api': '' // 路径重写
      }
    }
  }
}
