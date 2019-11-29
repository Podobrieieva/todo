import Vue from 'vue';
import App from './App.vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { MdButton, MdField, MdDivider, MdIcon } from 'vue-material/dist/components';
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import store from './store/index';

    
Vue.use(VueAxios, axios)
Vue.use(MdButton)
Vue.use(MdField)
Vue.use(MdDivider)
Vue.use(MdIcon)
Vue.use(Vuex)


Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')

   
