<template>
  <div class="home">
    <div class="mask" v-if="load">
      <div class="mask__pop">
        <van-loading size="24px" vertical>生成中...</van-loading>
      </div>
    </div>
    <swiper ref="mySwiper" :options="swiperOptions"  style="height: 100%">
      <swiper-slide>
        <page01></page01>
      </swiper-slide>
      <swiper-slide>
        <page02></page02>
      </swiper-slide>
    </swiper>
    <van-popup :value="show" position="bottom" :style="{ height: '40%' }" @click-overlay="cancel">
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        title="选择年月日"
        :min-date="minDate"
        :max-date="maxDate"
         @confirm="confirm"
         @cancel="cancel"
      />
    </van-popup>
  </div>
</template>

<script>
import page01 from './components/page01'
import page02 from './components/page02'
import { mapState, mapMutations } from 'vuex'
export default {
  components: {
    page01,
    page02
  },
  name: 'carrousel',
  data() {
    return {
      minDate: new Date(1990, 0, 1),
      maxDate: new Date(2020, 11, 31),
      currentDate: new Date(),
      timeStr: '',
      swiperOptions: {
        direction: 'vertical',
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  computed: {
    ...mapState('app', ['show', 'load']),
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  methods: {
    ...mapMutations('app', ['hiddenFun', 'setTime']),
    confirm() {
      var timeStamp = parseInt(Date.parse(this.currentDate)) / 1000
      var date = new Date(timeStamp * 1000)
      this.timeStr = date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date.getDate() + '日'
      this.setTime(this.timeStr)
      this.hiddenFun()
    },
    cancel() {
      // console.log('yyy')
      this.hiddenFun()
    }
  }
}
</script>

<style lang="scss" scoped>
.home{
  height: 100vh;
  position: relative1;
}
.swiper-wrapper{
  height: 100%;
}
.mask{
  width: 100%;
  height: 100vh;
  background: url('~@img/home/bg.png') no-repeat;
  background-size: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999999;
  // &__load_img{
  //   width: 1.6rem;
  //   position: absolute;
  //   top: 50%;
  //   left: 50%;
  //   transform: translate(-50%,-70%);
  // }
  &__pop{
    width: 2.5rem;
    padding: .3rem;
    background: rgba($color: #000000, $alpha: .6);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
