<template>
  <div style="position:relative;">
    <img class="page__canvas" :src="src" alt="">
    <div class="page" id="capture">
      <img class="logo" src="@img/logo.png" alt="">
      <div class="page__name-box">
        <p class="page__name-p">{{ useName + "君"}}</p>
        <p class="page__name-p">你的专属<span class="page__name_text">本命树</span></p>
      </div>
      <img class="page__img" :src="url" alt="">
      <!-- <img class="page__code page__img" v-show="false" src="@img/flower/code.png" alt=""> -->
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import html2canvas from 'html2canvas'
// import VConsole from 'vconsole'
export default {
  data() {
    return {
      src: '',
      isShow: true
    }
  },
  computed: {
    ...mapState('app', ['useName', 'time']),
    monthValue() {
      return this.time.slice(this.time.indexOf('年') + 1, this.time.indexOf('年') + 2)
    },
    url() {
      return require(`@img/flower/${this.monthValue}.png`)
    }
  },
  created() {
    // console.log(this.useName, this.time)
    window.addEventListener('load', e => this.refreshFun(e))
  },
  mounted() {
    // const vconsole = new VConsole()
    // console.log(vconsole)
    html2canvas(document.querySelector('#capture')).then(canvas => {
      // document.body.appendChild(canvas)
      // 导出为base64
      this.src = canvas.toDataURL('images/png')
    })
  },
  methods: {
    refreshFun() {
      this.$router.replace({
        name: 'Home'
      })
    }
  },
  destroyed() {
    window.removeEventListener('load', e => this.refreshFun(e))
  }
}
</script>

<style lang="scss" scoped>
.page{
  width: 100%;
  &__name-box{
    box-sizing: border-box;
    font-size: 0.36rem;
    color: #333333;
    position: absolute;
    top: 1.46rem;
    left: .36rem;
  }
  &__name-p{
    margin-bottom: .1rem;
    &:last-child{
      margin: 0;
    }
  }
  &__name_text{
    color: #738b5f;
  }
  &__img{
    margin-top: .2rem;
    width: 100%;
    display: block;
  }
  &__canvas{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
  }
}
</style>
