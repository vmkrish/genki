<script setup lang="ts">
import {
  VApp,
  VAppBar,
  VAppBarNavIcon,
  VIcon,
  VList,
  VListItem,
  VListItemTitle,
  VMain,
  VNavigationDrawer,
  VToolbarTitle
} from 'vuetify/components';
</script>

<template>
    <v-app app>
      <v-app-bar density="compact" flat>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Genki</v-toolbar-title>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" v-bind:width=70 permanent floating>
            <!-- :permanent="!$vuetify.breakpoint.xsOnly" -->


        <v-list nav dense>
          <v-list-item>
            <v-list-item-title>
              <router-link to="/new">New</router-link>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <router-link to="/vocab">Vocab</router-link>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <router-link to="/"><v-icon icon="$vuetify" /></router-link>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-icon icon="mdi-account"></v-icon>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main id="main">
        <router-view></router-view>
      </v-main>
    </v-app>
</template>

<script lang="ts">

export default {
  data: () => ({
    drawer: false,
    width: 70,
  })
}
</script>

<style scoped></style>