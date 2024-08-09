import { createRouter, createWebHistory } from 'vue-router';
import Homepage from '../views/Homepage.vue';
import ProcessFlow from '../views/ProcessFlow.vue';
import ResultsView from '../views/ResultsView.vue';
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
        },
        {
            path: '/Results',
            component: ResultsView
        }
    ]
});

export default router;
