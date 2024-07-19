import {defineStore} from "pinia";

export const useUsersStore = defineStore({
    id: 'users',
    state: () => ({
        users: [],
        user: null,
        error: null,
    }),
    getters: {
        isLoggedIn() {
            return this.user !== null
        },
        getCurrentUser() {
            return this.user["email"]
        }
    },
    actions:{
        signup(email, password, confirmPassword) {
            if (password !== confirmPassword) {
                this.error = 'Passwords do not match'
                return
            }
            if (this.users.find(user => user["email"] === email)) {
                this.error = 'User already exists'
                return
            }
            this.users.push({email, password})
            this.error = null
        },
        login(email, password) {
            const user = this.users.find(user => user["email"] === email)
            if (!user) {
                this.error = 'User not found'
                return
            }
            if (user["password"] !== password) {
                this.error = 'Invalid password'
                return
            }
            this.user = user
            this.error = null
        },
        logout() {
            this.user = null
        }
    }
})
