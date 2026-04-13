import Vue from 'vue'
import App from './App.vue'
import store from './store' // Importa a store que criamos

Vue.config.productionTip = false

new Vue({
  store, // Injeta a store aqui
  render: h => h(App),
}).$mount('#app')