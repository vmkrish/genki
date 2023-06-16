<script setup lang="ts">
import { VApp, VMain } from 'vuetify/components';
import NavbarVue from './components/Navbar.vue'
</script>

<template>
    <v-app app>
      <navbar-vue />
      <v-main id="main">
        <router-view></router-view>
      </v-main>
    </v-app>
</template>