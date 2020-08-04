<template>
  <div class="page">
    <img class="logo" src="@img/logo.png" alt="">
    <img class="page__title page__img" src="@img/happen/img_02.png" alt="">
    <img class="page__text page__img" src="@img/happen/img_04.png" alt="">
    <div class="page__line"></div>
    <a class="page__a" href="http://wkan.cn/fl/yian/gz">
      <img class="page__project page__img" src="@img/happen/img_06.png" alt="">
    </a>
    <div class="page__line"></div>
    <a class="page__a" href="http://wkan.cn/fl/yian/hz">
      <img class="page__project page__img" src="@img/happen/img_08.png" alt="">
    </a>
    <div class="page__line"></div>
    <a class="page__a" href="http://wkan.cn/fl/yian/tj">
      <img class="page__project page__img" src="@img/happen/img_10.png" alt="">
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // key: value
    }
  }
}
</script>

<style lang="scss" scoped>
.page{
  width: 100%;
  &__img{
    width: 100%;
    display: block;
  }
  &__title{
    margin-top:.14rem;
  }
  &__text{
    margin-bottom: .26rem;
  }
  &__line{
    width: 6.84rem;
    height: 0.02rem;
    background-color: #cfa36d;
    margin: .14rem auto;
  }
  &__a{
    display: block;
  }
}
</style>
