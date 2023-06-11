import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { registerSW } from 'virtual:pwa-register'

import App from './App.vue'

const updateSW = registerSW({
    onOfflineReady() {},
})

const app = createApp(App)

app.use(createPinia())
// app.use(router)

app.mount('#app')