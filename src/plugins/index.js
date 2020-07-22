import storage from './module/storage'
import { Calendar } from 'vant'

export default Vue => {
  Vue.use(Calendar)
  Vue.prototype.$storage = storage
}
