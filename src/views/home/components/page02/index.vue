<template>
  <div class="page">
    <img class="logo" src="@img/logo.png" alt="">
    <van-form class="form">
      <div class="form__item">
        <div class="form__item-text">1、请输入您的名字</div>
        <div class="form__item-input">
          <van-field
            v-model="useName"
            name="用户名"
          />
        </div>
      </div>
      <div class="form__item">
        <div class="form__item-text">2、请选择您的生日日期</div>
        <div class="form__item-input">
          <van-cell is-link @click="showPopup">{{ time }}</van-cell>
        </div>
      </div>
    </van-form>
    <v-animation  class="page__green ab" name="pulse" :infinite=true>
      <img class="page__green_img" src="@img/form/green.png" alt="">
    </v-animation>
    <v-animation  class="page__yellow ab" name="pulse" :infinite=true>
      <img class="page__yellow_img" src="@img/yellow.png" alt="">
    </v-animation>
    <img class="page__img ab" src="@img/form/img.png" alt="">
     <v-animation  class="page__white ab" name="pulse" :infinite=true>
      <img class="page__white_img" src="@img/white.png" alt="">
    </v-animation>
    <div class="page__white-box ab"></div>
    <div class="page__btn" @click="submitFun">立即寻找本命树</div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import layer from 'layer-mobile'
export default {
  data() {
    return {
      useName: ''
    }
  },
  computed: {
    ...mapState('app', ['time'])
  },
  methods: {
    ...mapMutations('app', ['showFun', 'setName', 'loadShowFun']),
    showPopup() {
      this.showFun()
    },
    submitFun() {
      if (this.useName.length === 0 || this.time.length === 0) {
        layer.open({
          content: '请填写信息！',
          skin: 'msg',
          time: 2 // 2秒后自动关闭
        })
        return false
      }
      this.loadShowFun()
      setTimeout(() => {
        this.$router.replace({
          name: 'Result'
        })
      }, 3000)
    }
  },
  updated() {
    this.setName(this.useName)
  }
}
</script>

<style lang="scss" scoped>
.page{
  width: 100%;
  background: url('~@img/form/bg.png') no-repeat;
  background-size: 100%;
  &__img{
    width: 1.54rem;
    top: 6.4rem;
    left: 50%;
    transform: translateX(-50%);
  }
  &__green{
    width: 100%;
    top: 7.5rem;
    &_img{
      width: 100%;
    }
  }
  &__yellow{
    width: 100%;
    top: 7.6rem;
    &_img{
      width: 100%;
    }
  }
  &__white{
    width: 100%;
    top: 8.02rem;
    &_img{
      width: 100%;
    }
    &-box{
      width: 100%;
      height: 1.2rem;
      background: #efeee7;
      top: 10.8rem;
    }
  }
  &__btn{
    text-align: center;
    font-size: 0.36rem;
    color: #fefefe;
    width: 4.62rem;
    line-height: 0.82rem;
    background-color: #738b5f;
    border-radius: 0.42rem;
    margin: 5.12rem auto 0;
    position: relative;
  }
}
.form{
  width: 5.42rem;
  margin: .82rem auto 0;
  /deep/ .van-overlay,
  /deep/ .van-popup
  {
    position: absolute;
  }
  &__item{
    width: 100%;
    margin-top: .72rem;
    &-text{
      font-size: 0.36rem;
      color: #333333;
      margin-bottom: .22rem;
    }
    &-input{
      box-sizing: border-box;
      padding: 0 .34rem;
    }
    /deep/ .van-cell{
      // height: .38rem;
      border-radius: 0.1rem;
      border: solid 0.02rem #c2c2c2;
    }
    /deep/ .van-cell__value {
      // opacity: 0;
      height: .3rem;
    }
    /deep/ .van-cell--clickable .van-cell__value{
      // color: transparent;
    }
    /deep/ .van-icon{
      display: none;
    }
  }
}

</style>
