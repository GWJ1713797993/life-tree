/**
 * 基于howler的音乐播放工具
 */
import { Howl } from 'howler'

export default class Audio {
  constructor(options) {
    this.audio = null
    this.options = options
    this.infinite = false
    this.init(options.src)
  }

  init(src) {
    if (this.audio) return this.audio
    this.audio = new Howl({
      src: [src],
      autoplay: this.options.autoplay || false,
      autoUnlock: this.options.autoUnlock || false,
      loop: this.options.loop || false
    })
    return this.audio
  }

  play() {
    if (this.infinite) return
    if (!this.options.infinite) this.infinite = true

    this.audio.play()
  }

  replay() {
    if (this.audio.playing()) this.audio.stop()
    this.play()
  }
}
