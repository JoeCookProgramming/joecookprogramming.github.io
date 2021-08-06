import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Initiative from '../views/Initiative.vue'
import DiceRoller from '../views/DiceRoller.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/Initiative',
        name: 'Initiative',
        component: Initiative,
    },
    {
        path: '/Dice',
        name: 'Dice',
        component: DiceRoller,
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')            
    },
    {
        path: '/login',
        name: 'Login',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')            
    },
    {
        path: "/:catchAll(.*)",
        redirect: "/"
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
    base: '/emporium/'
})
export default router