import Vue from 'vue'
import { MdButton, MdField, MdDivider, MdIcon } from 'vue-material/dist/components'
import App from './App.vue'
import Vuex from 'vuex'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(MdButton)
Vue.use(MdField)
Vue.use(MdDivider)
Vue.use(MdIcon)
Vue.use(Vuex)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
