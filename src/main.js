import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// address-cared -> faAddressCard
import { faAddressCard, faArrowUp } from '@fortawesome/free-solid-svg-icons'
// axios 引用
import axios from 'axios'
import VueAxios from 'vue-axios'

// font-awsome
library.add(faAddressCard, faArrowUp)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// 使用 axios
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
