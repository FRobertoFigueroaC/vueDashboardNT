import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import './index.css'
import App from './App.vue'
import Email from './pages/email.vue'
import EmailPanels from './pages/EmailPanels.vue'

const routes = [
  { path: '/email', component: Email },
  { path: '/email-panels', component: EmailPanels },
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
