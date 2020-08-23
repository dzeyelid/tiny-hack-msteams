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
import Vue from "vue"
import * as msal from "@azure/msal-browser"

const msalConfig: msal.Configuration = {
  auth: {
    clientId: process.env.AZUREAD_CLIENT_ID as string,
    redirectUri: process.env.REDIRECT_URI_LOGIN as string,
    postLogoutRedirectUri: process.env.REDIRECT_URI_LOGOUT as string,
  },
}

const scopes = [
  "openid",
  "profile",
  "user.read",
  "ChannelMessage.Read.All",
  "Group.Read.All",
  "Group.ReadWrite.All",
]

const msalInstance = new msal.PublicClientApplication(msalConfig)

export default Vue.extend({
  data() {
    return {
      signedIn: false,
      authResult: {} as msal.AuthenticationResult,
    }
  },
  methods: {
    async signin() {
      console.log("Processing signin")
      try {
        const loginResponse = await msalInstance.loginPopup({
          scopes,
        })
        this.signedIn = true
        this.authResult = loginResponse
        console.log(loginResponse)
      } catch (err) {
        console.log(err)
      }
    },
    async signout() {
      await msalInstance.logout({})
    },
  },
})
</script>
