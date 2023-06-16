<script setup lang="ts">
import {
  VApp,
  VAppBar,
  VAppBarNavIcon,
  VIcon,
  VList,
  VListGroup,
  VListItem,
  VListItemTitle,
  VNavigationDrawer,
  VToolbarTitle
} from 'vuetify/components';
</script>

<template>
  <v-app>
    <v-app-bar density="compact" flat>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Genki</v-toolbar-title>
    </v-app-bar>


    <!-- :permanent="!$vuetify.breakpoint.xsOnly" -->

    <v-navigation-drawer
      v-model="drawer"
      :scrim=false
      width="80px"
      app
      clipped
      flat
    >

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
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">

export default {
  data: () => ({
    drawer: true,
  })
}
</script>

<style scoped></style>