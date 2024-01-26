import './assets/main.css'
import './../src/style.css';
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css';
const app = createApp(App);
axios.interceptors.request.use(
    (config) => {
        console.log('Request interceptor:', config);
        return config;
    },
    (error) => {
        console.error('Request error interceptor:', error);
        return Promise.reject(error);
    }
);
axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);
app.use(createPinia());
app.use(router);
app.mount('#app')
