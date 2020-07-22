<!-- 音乐 -->
<template>
  <div class="v-audio" :class="{ 'v-audio_run': isPlay }" :style="_style" @click="handleActive">
    <i class="iconfont icon-yinle icon"></i>
    <audio :loop="loop" :id="id" :autoplay="autoplay" :preload="preload">
      <source :src="_src">
    </audio>
  </div>
</template>

<script>
export default {
  props: {
    // 音乐路径
    src: {
      type: String,
      default: ''
    },
    // 是否自动播放
    autoplay: {
      type: Boolean,
      default: false
    },
    // 预加载
    preload: {
      type: Boolean,
      default: false
    },
    // 循环播放
    loop: {
      type: Boolean,
      default: false
    },
    // 音量
    volume: {
      type: Number,
      default: 1
    },
    // 图标左边距
    left: {
      type: String,
      default: '86%'
    },
    // 图标上边距
    top: {
      type: String,
      default: '18px'
    },
    // 图标尺寸
    size: {
      type: String,
      default: '36px'
    },
    // 背景色
    background: {
      type: String,
      default: 'rgba(0, 0, 0, .5)'
    },
    // 图标颜色
    color: {
      type: String,
      default: 'rgba(255, 255, 255, 1)'
    }
  },
  data() {
    return {
      id: 'id' + Math.floor(new Date().getTime() + '' + Math.random() * 1000),
      isPlay: false,
      audio: null
    }
  },
  computed: {
    _src() {
      return this.src
    },
    _style() {
      let str = ''
      if (this.top) {
        str += `top: ${this.top};`
      }
      if (this.left) {
        str += `left: ${this.left};`
      }
      if (this.size) {
        str += `width: ${this.size}; height: ${this.size};`
        str += `font-size: ${this.size};`
      }
      if (this.background) {
        str += `background: ${this.background};`
      }
      if (this.color) {
        str += `color: ${this.color};`
      }
      return str
    }
  },
  mounted() {
    this.audio = document.getElementById(this.id)
    // 自动播放
    if (this.autoplay) {
      this.isPlay = true
      this.play()
    }
  },
  methods: {
    play() {
      this.audio.play()
      this.audio.volume = this.volume
      document.addEventListener('WeixinJSBridgeReady', this.onPlay, false)
    },
    stop() {
      this.audio.pause()
    },
    handleActive() {
      // 音乐是否播放
      this.isPlay = this.audio.paused
      if (this.audio.paused) {
        this.play()
      } else {
        this.stop()
      }
    },
    onPlay() {
      this.audio.play()
    }
  },
  beforeDestroy() {
    document.removeEventListener('WeixinJSBridgeReady', this.onPlay, false)
    this.isPlay = false
  }
}
</script>

<style lang="scss" scoped>
  @import './fonts/iconfont.css';
  .v-audio {
    position: fixed;
    background-color: rgba(0, 0, 0, .5);
    border-radius: 50%;
    z-index: 9999;
    &_run {
      animation: rotate 3s linear infinite;
    }
    .icon {
      position: absolute;
      left: 50%;
      top: 50%;
      color: white;
      font-weight: bold;
      transform: translate(-50%, -50%);
      font-size: .6em;
    }
  }
  @keyframes rotate {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
