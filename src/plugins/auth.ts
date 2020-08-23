import { Plugin } from '@nuxt/types'
import * as msal from '@azure/msal-browser'
import { Auth as AuthInterface } from '@/types/auth'

const msalConfig: msal.Configuration = {
  auth: {
    clientId: process.env.AZUREAD_CLIENT_ID as string,
    redirectUri: process.env.REDIRECT_URI_LOGIN as string,
    postLogoutRedirectUri: process.env.REDIRECT_URI_LOGOUT as string,
  },
}

const scopes = [
  'openid',
  'profile',
  'user.read',
  'ChannelMessage.Read.All',
  'Group.Read.All',
  'Group.ReadWrite.All',
]

export class Auth implements AuthInterface {
  private _msalInstance: msal.PublicClientApplication

  constructor() {
    this._msalInstance = new msal.PublicClientApplication(msalConfig)
  }

  async signin() {
    console.log('Processing signin')
    try {
      const loginResponse = await this._msalInstance.loginPopup({
        scopes,
      })
      // this.signedIn = true
      // this.authResult = loginResponse
      console.log(loginResponse)
    } catch (err) {
      console.log(err)
    }
  }

  async signout() {
    await this._msalInstance.logout({})
  }
}

const authPlugin: Plugin = (_context, inject) => {
  inject('auth', new Auth())
}

export default authPlugin
