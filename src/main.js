import Vue from 'vue'
import App from './App.vue'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import VueMaterial from 'vue-material'
import store from './store.js'

Vue.use(VueMaterial)

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
