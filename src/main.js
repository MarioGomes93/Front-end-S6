import { createApp } from 'vue'
import App from './App.vue'
import store from './store' // Importa a store que criamos

const app = createApp(App)
app.use(store)
app.mount('#app')