import { defineStore } from 'pinia'

export const useSessionStore = defineStore('session', {
    state: () => ({
      isLoggedIn: false,
      user: null as { name: string } | null,
    }),
    actions: {
      login(userName: string) {
        this.isLoggedIn = true
        this.user = { name: userName }
      },
      logout() {
        this.isLoggedIn = false
        this.user = null
      },
    },
    persist: {
      storage: import.meta.client ? sessionStorage : null
    },
}
)