<template>
  <div class="page">
    <img class="logo" src="@img/logo.png" alt="">
    <img class="page__text" src="@img/home/text.png" alt="">
    <img class="page__tree" src="@img/home/tree.png" alt="">
    <v-animation  class="page__green ab" name="pulse" :infinite=true>
      <img class="page__green_img" src="@img/home/green.png" alt="">
    </v-animation>
    <v-animation  class="page__yellow ab" name="pulse" :infinite=true>
      <img class="page__yellow_img" src="@img/yellow.png" alt="">
    </v-animation>
    <v-animation  class="page__white ab" name="pulse" :infinite=true>
      <img class="page__white_img" src="@img/white.png" alt="">
    </v-animation>
    <img class="page__up" src="@img/home/next-icon.png" alt="">
  </div>
</template>

<script>
export default {
  data() {
    return {
      animationName: [{
        name: 'bounce',
        duration: 3,
        infinite: true
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.page{
  width: 100%;
  background: url('~@img/home/bg.png') no-repeat;
  background-size: 100%;
  &__text{
    width: 100%;
  }
  &__tree{
    width: 3.9rem;
    position: absolute;
    top: 5.9rem;
    left: 50%;
    transform: translateX(-50%);
  }
  &__green{
    top: 9.92rem;
    &_img{
      width: 100%;
    }
  }
  &__yellow{
    width: 100%;
    top: 10.04rem;
    &_img{
      width: 100%;
    }
  }
  &__white{
    width: 100%;
    top: 10.46rem;
    &_img{
      width: 100%;
    }
  }
  &__up{
    width: 0.26rem;
    height: 0.12rem;
    position: fixed;
    bottom: .4rem;
    left: 50%;
    transform: translateX(-100%);
    z-index: 9;
    animation: toTop 1s ease infinite;
  }
}
@keyframes toTop {
  0% {
    transform: translateY(0);
    opacity: 0;
  }
  100% {
    transform: translateY(-.3rem);
    opacity: 1;
  }
}
.box{
  margin: 30px auto;
}
</style>
