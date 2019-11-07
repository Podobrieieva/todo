import Vue from 'vue'
import { MdButton, MdField  } from 'vue-material/dist/components'
import App from './App.vue'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(MdButton)
Vue.use(MdField)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
