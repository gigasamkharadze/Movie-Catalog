import App from './App.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createMemoryHistory, createRouter } from 'vue-router'
import './style.css'

const routes = [
    {path: '/', component: App},
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

const pinia = createPinia()

const app = createApp(App)
    .use(router)
    .use(pinia)
    .mount('#app')
