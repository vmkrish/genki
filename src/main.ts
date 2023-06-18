import './assets/main.css'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { registerSW } from 'virtual:pwa-register'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import { createRouter, createWebHistory } from 'vue-router'
import Vue3TouchEvents from "vue3-touch-events";

import App from './App.vue'
import VocabViewVue from './components/VocabTable/VocabView.vue'

import * as vuetifyComponents from 'vuetify/components'

const updateSW = registerSW({
    onOfflineReady() {},
})

const app = createApp(App)
app.use(Vue3TouchEvents);
app.use(createPinia())
app.use(createVuetify({
    components: vuetifyComponents,
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
      },
    },
    theme: {
      defaultTheme: 'light'
    }
  }))
app.use(createRouter({
    history: createWebHistory('/genki/'),
    routes: [
        { path: '/', component: VocabViewVue },
        { path: '/vocab', component: VocabViewVue },
        { path: '/vocab-vtable', component: () => import('./components/VocabTable/VocabVTable.vue') },
        { path: '/vocab-vdtable', component: () => import('./components/VocabTable/VocabVDTable.vue') },
        { path: '/vocab-btable', component: () => import('./components/VocabTable/BulmaTable.vue') },
        { path: '/flashcards', component: () => import('./components/Flashcards/Viewer.vue') },
        { path: '/new', component: () => import('./components/NewView.vue') }
    ],
}))
app.mount('#app')