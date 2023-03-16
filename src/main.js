import { createApp } from 'vue'
import './style.css'
import router from './router'
import store from './store'
import App from './App.vue'


router.beforeEach((to, from, next) => {

    //const isLoggedIn = store.state.users.user
    const isLoggedIn = store.getters["users/getUser"]
    if (to.matched.some(record => record.meta.requiresAuth) && !isLoggedIn) {
        next({ path: '/authorization' })
    } else {
        next()
    }
})


createApp(App)
    .use(router)
    .use(store)
    .mount('#app')
