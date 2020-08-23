<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item link nuxt to="/chats">
          <v-list-item-action>
            <font-awesome-icon :icon="['fas', 'list']" />
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Chats</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <font-awesome-icon :icon="['fas', 'user']" />
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer">
        <font-awesome-icon :icon="['fas', 'bars']" />
      </v-app-bar-nav-icon>
      <v-toolbar-title>Tiny hack for Microsoft Teams</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue"
export default Vue.extend({
  data: () => ({
    drawer: null,
  }),
})
</script>
