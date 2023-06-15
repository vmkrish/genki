<script setup lang="ts">
import {
  VApp,
  VAppBar,
  VAppBarNavIcon,
  VList,
  VListGroup,
  VListItem,
  VListItemTitle,
  VNavigationDrawer,
  VComponentIcon,
  VToolbarTitle
} from 'vuetify/components';
</script>

<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer=true"></v-app-bar-nav-icon>
      <v-toolbar-title>Genki</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>

    <v-list nav dense>
      <v-list-group
        active-class="deep-purple--text text--accent-4"
      >
        <v-list-item>
          <!-- <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon> -->
          <v-list-item-title><router-link to="/">Home</router-link></v-list-item-title>
        </v-list-item>

        <v-list-item>
          <!-- <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon> -->
          <v-list-item-title><router-link to="/vocab">Vocab</router-link></v-list-item-title>
        </v-list-item>

        <v-list-item>
          <!-- <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon> -->
          <v-list-item-title><router-link to="/new">New</router-link></v-list-item-title>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
  <div>
    <router-view></router-view>
  </div>
  </v-app>

  <!-- <VocabView :vocab="vocab" /> -->
</template>

<script lang="ts">
export default {
  data: () => ({
    drawer: false,
  })
}
</script>

<style scoped>
/*
*/
</style>
