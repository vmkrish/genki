<script setup lang="ts">
import {
  VAppBar,
  VAppBarNavIcon,
  VIcon,
  VList,
  VListItem,
  VListItemTitle,
  VNavigationDrawer,
  VToolbarTitle
} from 'vuetify/components';
</script>

<template>
  <v-app-bar density="compact" flat>
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-toolbar-title>Genki</v-toolbar-title>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" v-bind:width="80" permanent floating>
    <!-- :permanent="!$vuetify.breakpoint.xsOnly" -->
    <v-list nav dense>
      <v-list-item>
          <v-list-item-title><router-link to="/">Home</router-link></v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title><router-link to="/vocab">Vocab</router-link></v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title><router-link to="/vocab-vtable">VTable</router-link></v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title><router-link to="/vocab-vdtable">VDTable</router-link></v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title><router-link to="/vocab-btable">BTable</router-link></v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title><router-link to="/new">New</router-link></v-list-item-title>
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
</template>

<script lang="ts">
export default {
  data: () => ({
    drawer: false,
    width: 70,
  })
}
</script>