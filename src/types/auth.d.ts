import Vue from 'vue'

export interface Auth {
  signin(): Promise<void>
  signout(): Promise<void>
}

declare module 'vue/types/vue' {
  interface Vue {
    $auth: Auth
  }
}
