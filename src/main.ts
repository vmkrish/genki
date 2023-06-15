import './assets/main.css'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { registerSW } from 'virtual:pwa-register'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import VocabViewVue from './components/VocabView.vue'

const updateSW = registerSW({
    onOfflineReady() {},
})

const app = createApp(App)
app.use(createPinia())
app.use(createVuetify({
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
      },
    },
  }))
app.use(createRouter({
    history: createWebHistory('/genki/'),
    routes: [
        { path: '/', component: VocabViewVue },
        { path: '/vocab', component: VocabViewVue },
        { path: '/new', component: () => import('./components/NewView.vue') }
    ],
}))
app.mount('#app')