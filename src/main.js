import App from './App.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import './style.css'

const pinia = createPinia()

const app = createApp(App)
    .use(router)
    .use(pinia)
    .mount('#app')
