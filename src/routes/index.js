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
            component: () => import('@/pages/index.vue'),
            children:[
                {
                    path:'/',
                    component:() => import('@/pages/MainPage.vue')
                }
            ]
        },
    ]
})

export default router;
