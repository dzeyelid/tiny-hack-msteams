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
  'channelmessage.read.all',
  'group.read.all',
  'group.ReadWrite.all',
]

export class Auth implements AuthInterface {
  private _msalInstance: msal.PublicClientApplication
  private _isSignedIn: boolean = false

  constructor() {
    this._msalInstance = new msal.PublicClientApplication(msalConfig)
  }

  public get isSignedIn() {
    return this._isSignedIn
  }

  public signIn() {
    return this._msalInstance.loginPopup({
      scopes,
    })
  }

  public signOut() {
    return this._msalInstance.logout({})
  }
}

const authPlugin: Plugin = (_context, inject) => {
  inject('auth', new Auth())
}

export default authPlugin
