import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes:[
        {
            path: '/',
            redirect: '/home',
        },
        {
            path: '/home',
            component: () => import('@/pages/mainPage.vue'),
        },
    ]
})

export default router;