import { createRouter, createWebHistory } from 'vue-router';
import Homepage from '../views/Homepage.vue';
import ProcessFlow from '../views/ProcessFlow.vue';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Homepage
        },
        {
            path: '/ProcessFlow',
            component: ProcessFlow
        }
    ]
});

export default router;
