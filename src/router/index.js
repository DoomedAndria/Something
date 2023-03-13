import {createRouter, createWebHistory, RouterView} from "vue-router";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "Home",
            component: () => import("../views/Home.vue")
        },
        {
            path: "/registration",
            name: "Registration",
            component: () => import("../views/Registration.vue")
        },
        {
            path: "/authorization",
            name: "Authorization",
            component: () => import("../views/Authorization.vue")
        },
        {
            path: "/dashboard",
            name: "Dashboard",
            component: () => import("../views/Dashboard.vue"),
            meta: {
                requiresAuth: true
            }
        },
        {
            path: "/users",
            name: "Users",
            component: () => import("../views/Dashboard.vue"),
            meta: {
                requiresAuth: true
            }
        },
        {
            path: "/categories",
            name: "Categories",
            component: () => import("../views/Categories.vue"),
            meta: {
                requiresAuth: true
            }
        }
    ],
})