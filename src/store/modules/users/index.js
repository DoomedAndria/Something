import axios from "axios";
import router from "../../../router/index.js";

export default {
    namespaced: true,
    state() {
        return {
            user:null,
            token: null,
            profilePopup:false

        }
    },
    mutations: {

        SET_USER(state, user) {
            state.user = user
        },
        UPDATE_TOKEN(state, token) {
            state.token = token
        },
        TOGGLE_PROFILE_POPUP(state){
            state.profilePopup = !state.profilePopup
        }

    },
    getters: {
        getToken(state) {
            return state.token
        },
        getUser(state){
            return state.user
        },
        getProfilePopup(state){
            return state.profilePopup
        }
    },
    actions: {
        fetchUsers({commit}) {
            axios
                .get(import.meta.env.VITE_USERS_API)
                .then((result) => {
                    commit("updateUsers", result.data.data);
                })
                .catch(console.error);
        },
        authorizeUser({commit}, user) {
            axios
                .post(import.meta.env.VITE_AUTH_URL, {
                    email: user.email,
                    password: user.password
                }, {headers: {"Accept": "application/json"}})
                .then((result) => {
                    commit("SET_USER", result.data)
                    commit("UPDATE_TOKEN", result.data.token)
                    localStorage.setItem('user',JSON.stringify(result.data))
                    localStorage.setItem('token',JSON.stringify(result.data.token))
                    router.back()
                })
                .catch(console.error);
        },
        registerUser({commit}, user) {
            axios
                .post(import.meta.env.VITE_REG_URL, {
                    name:user.name,
                    email: user.email,
                    password: user.password
                }, {headers: {"Accept": "application/json"}})
                .then((result) => {
                    commit("SET_USER", result.data)
                    commit("UPDATE_TOKEN", result.data.token)
                    localStorage.setItem('user',JSON.stringify(result.data))
                    localStorage.setItem('token',JSON.stringify(result.data.token))
                    router.back()
                })
                .catch(console.error);
        },
        logOut({commit}){
            commit('TOGGLE_PROFILE_POPUP')
            commit('SET_USER',null)
            commit('UPDATE_TOKEN',null)
            localStorage.removeItem('user')
            localStorage.removeItem('token')
            router.push('/')
        }

    }
}