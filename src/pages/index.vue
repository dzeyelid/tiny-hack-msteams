<template>
  <v-container>
    <v-row>
      <v-col>
        <p>
          Let's hack the Microsoft Teams and get more efficiently!
        </p>
        <v-btn v-if="!signedIn" @click="signin">
          Sign in
        </v-btn>
        <v-btn v-if="signedIn" @click="signout">
          Sign out
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      signedIn: false,
    }
  },
  methods: {
    async signin() {
      await this.$auth.signin()
    },
    async signout() {
      await this.$auth.signout()
    },
  },
})
</script>
