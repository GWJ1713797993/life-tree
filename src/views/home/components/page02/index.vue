<template>
  <div class="page">
    <img class="logo" src="@img/logo.png" alt="">
    <van-form class="form">
      <div class="form__item">
        <div class="form__item-text">1、请输入您的名字</div>
        <div class="form__item-input">
          <van-field
            name="用户名"
          />
        </div>
      </div>
      <div class="form__item">
        <div class="form__item-text">2、请选择您的生日日期</div>
        <div class="form__item-input">
          <van-cell is-link @click="showPopup">111</van-cell>
        </div>
      </div>
    </van-form>
    <img class="page__green ab" src="@img/form/green.png" alt="">
    <img class="page__yellow ab" src="@img/yellow.png" alt="">
    <img class="page__img ab" src="@img/form/img.png" alt="">
    <img class="page__white ab" src="@img/white.png" alt="">
    <div class="page__white-box ab"></div>
    <div class="page__btn" @click="submitFun">立即寻找本命树</div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import layer from 'layer-mobile'
export default {
  data() {
    return {
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date(),
      value: '',
      showCalendar: false,
      show: false
    }
  },
  methods: {
    ...mapMutations('app', ['showFun']),
    showPopup() {
      this.showFun()
    },
    submitFun() {
      layer.open({
        content: 'hello layer',
        skin: 'msg',
        time: 2 // 2秒后自动关闭
      })
      this.$router.replace({
        name: 'happen'
      })
    }
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
  }
  &__yellow{
    width: 100%;
    top: 7.6rem;
  }
  &__white{
    width: 100%;
    top: 8.02rem;
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
      color: transparent;
    }
    /deep/ .van-icon{
      display: none;
    }
  }
}
</style>
