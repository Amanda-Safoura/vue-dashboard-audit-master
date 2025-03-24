import { createApp } from 'vue';
import App from './App.vue';
import router from './router';  // Assure-toi que tu as configuré Vue Router
import store from './store';  // Assure-toi que tu as configuré Vuex

import './assets/styles/main.css' // Import des styles globaux

import { createBootstrap } from 'bootstrap-vue-next'

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

// Plugin Axios
import axios from './plugins/axios';

// Créer l'application Vue
const app = createApp(App);

app.use(createBootstrap())

// Utiliser Vue Router et Vuex
app.use(router);
app.use(store);

// Ajouter Axios à l'instance globale (facilite son utilisation dans les composants)
app.config.globalProperties.$axios = axios;

// Monter l'application sur l'élément DOM
app.mount('#app');
