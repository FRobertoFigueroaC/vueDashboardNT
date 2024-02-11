import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import './index.css'
import App from './App.vue'
import Home from './pages/home.vue'
import About from './pages/about.vue'
import Email from './pages/email.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/email', component: Email },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(router)
app.mount('#app')
