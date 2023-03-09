import {createRouter, createWebHistory, RouterView} from "vue-router";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:"/",
            name: "Home",
            component: () => import("../views/Home.vue")
        },
        {
            path:"/registration",
            name: "Registration",
            component: () => import("../views/Registration.vue")
        },
        {
            path:"/authorization",
            name: "Authorization",
            component: () => import("../views/Authorization.vue")
        },
    ],
})