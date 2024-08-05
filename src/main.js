import '@/assets/styles.scss';
import '@/assets/tailwind.css';
import Aura from '@primevue/themes/aura';
import { MotionPlugin } from '@vueuse/motion';
import PrimeVue from 'primevue/config';
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';
import { createApp } from 'vue';
import VueWriter from 'vue-writer';
import App from './App.vue';
import './assets/global.css';
import router from './router';

const app = createApp(App);
app.use(VueWriter);
app.use(router);
app.use(MotionPlugin);
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: '.app-dark'
        }
    }
});
app.use(ToastService);
app.use(ConfirmationService);

app.mount('#app');
