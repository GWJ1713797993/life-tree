import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import { rootPath } from '@/config'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: rootPath,
  routes
})

document.title = '生命树'

export default router
