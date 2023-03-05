import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () => {
        return { 
            session: null,
            email: ""
        }
    },
    actions: {
        saveEmail(email) {
        this.email = email
        },
    },
})