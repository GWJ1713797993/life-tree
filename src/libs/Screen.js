/**
 * 一个有关屏幕的工具类
 */
export default class Screen {
  constructor() {
    this.width = document.documentElement.clientWidth
    this.height = document.documentElement.clientHeight
    this.onChange = null
  }

  unWatch() {
    window.removeEventListener('resize', this.onResize, false)
  }

  watch() {
    window.addEventListener('resize', this.onResize, false)
  }

  onResize() {
    this.onChange && this.onChange({
      width: this.width,
      height: this.height
    })
  }

  /**
   * 获取当前屏幕的尺寸
   */
  getSize() {
    this.width = document.documentElement.clientWidth
    this.height = document.documentElement.clientHeight
  }

  /**
   * 获取屏幕方向
   * @return { String } horizontal横屏   vertical竖屏
   */
  getDirection() {
    if (this.width > this.height) {
      return 'horizontal'
    } else {
      return 'vertical'
    }
  }

  /**
   * 设置方向
   * @param { Element } $el/body  需要设置的节点
   * @param { String } direction/vertical 方向 horizontal横屏，vertical竖屏
   */
  setDirection($el, direction = 'vertical') {
    if (!$el) $el = document.querySelect('body')
    let style = ''
    if (direction === 'vertical') { // 竖屏
      style += 'width:100%'
      style += 'height:100%;'
      style += '-webkit-transform: rotate(0); transform: rotate(0);'
      style += '-webkit-transform-origin: 0 0;'
      style += 'transform-origin: 0 0;'
    } else if (direction === 'horizontal') { // 横屏
      style += 'width:' + height + 'px;' // 注意旋转后的宽高切换
      style += 'height:' + width + 'px;'
      style += '-webkit-transform: rotate(90deg); transform: rotate(90deg);'
      // 注意旋转中点的处理
      style += '-webkit-transform-origin: ' + width / 2 + 'px ' + width / 2 + 'px;'
      style += 'transform-origin: ' + width / 2 + 'px ' + width / 2 + 'px;'
    }
    $el.style.cssText = style
  }
}
