import Vue from 'vue'
import App from './App.vue'
import VueUi from '@vue/ui'

import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import VueMaterial from 'vue-material'
import store from './store.js'
import '@vue/ui/dist/vue-ui.css'

Vue.use(VueMaterial)
Vue.use(VueUi)

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
