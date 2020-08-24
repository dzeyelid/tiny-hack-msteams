import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { AuthenticationResult } from '@azure/msal-browser'

export const state = () => ({
  isSignedIn: false,
  authenticatedResult: {} as AuthenticationResult,
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  isSignedIn: (state) => state.isSignedIn,
  authenticatedResult: (state) => state.authenticatedResult,
}

export const mutations: MutationTree<RootState> = {
  SIGNEDIN: (state) => {
    state.isSignedIn = true
  },
  SIGNEDOUT: (state) => {
    state.isSignedIn = false
  },
  UPDATE_USER: (state, newAuthenticatedResult: AuthenticationResult) => {
    state.authenticatedResult = newAuthenticatedResult
  },
}

export const actions: ActionTree<RootState, RootState> = {
  async signIn({ commit }) {
    const result = await this.app.$auth.signIn()
    commit('SIGNEDIN')
    commit('UPDATE_USER', result)
  },
  async signOut({ commit }) {
    await this.app.$auth.signOut()
    commit('SIGNEDOUT')
    commit('UPDATE_USER', {})
  },
}
