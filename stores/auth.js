import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () => {
        return { 
            session: null,
            email: "aaaaaaaaa"
        }
    },
    actions: {
        saveEmail(email) {
        this.email = email
        },
    },
})