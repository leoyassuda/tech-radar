import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import CountryFlag from 'vue-country-flag-next'
import './index.css';

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.component('country-flag', CountryFlag)
app.mount('#app');
