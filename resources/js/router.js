import {createRouter, createWebHistory} from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/fruits',
            component: () => import('./components/Fruit/Index.vue'),
            name: 'fruit.index'
        },
        {
            path: '/users/login',
            component: () => import('./components/User/Login.vue'),
            name: 'user.login'
        },
        {
            path: '/users/registration',
            component: () => import('./components/User/Registration.vue'),
            name: 'user.registration'
        },
    ]
})

export default router;
