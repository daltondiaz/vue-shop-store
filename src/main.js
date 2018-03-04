import Vue from 'vue'
import App from './App.vue'
import 'vue-material/dist/vue-material.min.css'
import VueMaterial from 'vue-material'
import { MdButton } from 'vue-material/dist/components'


Vue.use(VueMaterial)
Vue.use(MdButton)

new Vue({
  el: '#app',
  render: h => h(App)
})
