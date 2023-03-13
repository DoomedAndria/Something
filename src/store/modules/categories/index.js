import axios from 'axios'
import store from '../../../store'
import router from "../../../router/index.js";

export default {
    namespaced: true,
    state() {
        return {
            categories: null,
            popupOpen: false,
            popupType: null,

            category_id: null
        }
    },
    mutations: {
        TOGGLE_POPUP_OPEN(state) {
            state.popupOpen = !state.popupOpen
        },
        SET_CATEGORIES(state, categories) {
            state.categories = categories
        },
        SET_POPUP_TYPE(state, type) {
            state.popupType = type
        },
        SET_CATEGORY_ID(state, id) {
            state.category_id = id
        }

    },
    getters: {
        getPopupOpen(state) {
            return state.popupOpen
        },
        getCategories(state) {
            return state.categories
        },
        getPopupType(state) {
            return state.popupType
        },
        getCategoryId(state) {
            return state.category_id
        }
    },
    actions: {
        fetchCategories({commit}) {
            axios
                .get(import.meta.env.VITE_CATEGORIES_URL, {headers: {"Accept": "application/json"}})
                .then((result) => {
                    commit('SET_CATEGORIES', result.data.data)
                })
                .catch(console.error);
        },
        async deleteCategory({state}) {
           await axios
                .delete(import.meta.env.VITE_CATEGORIES_URL + `/${state.category_id}`, {
                    headers: {
                        "Accept": "application/json",
                        "Authorization": `Bearer ${store.getters['users/getToken']}`
                    }
                })
                .then((result)=>{
                    console.log(result)
                })
                .catch(console.error);
        }
    }
}