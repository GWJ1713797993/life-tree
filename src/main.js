import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import plugins from '@/plugins'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Vant from 'vant'
import VAnimation from 'v-animation'
import 'v-animation/lib/v-animation.css'
import 'swiper/swiper-bundle.css'
import '@/styles/index.scss'
import './app.scss'
import 'vant/lib/index.css'
import 'h5-rem'

Vue.use(VAnimation)
Vue.use(Vant)
Vue.use(VueAwesomeSwiper)

// 注册插件
plugins(Vue)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
