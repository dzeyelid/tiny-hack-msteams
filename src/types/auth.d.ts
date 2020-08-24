import Vue from 'vue'
import { AuthenticationResult } from '@azure/msal-browser'

export interface Auth {
  readonly isSignedIn: boolean
  signIn(): Promise<AuthenticationResult>
  signOut(): Promise<void>
}

declare module 'vue/types/vue' {
  interface Vue {
    $auth: Auth
  }
}
