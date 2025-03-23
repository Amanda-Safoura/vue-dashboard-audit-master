import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/main.css' // Import des styles globaux

import BootstrapVueNext from 'bootstrap-vue-next'

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

const app = createApp(App)

app.use(BootstrapVueNext)
app.use(router)
app.use(store)

app.mount('#app')
