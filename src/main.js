import './assets/main.css'
import 'primeicons/primeicons.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import  PrimeVue  from 'primevue/config';
import Aura from '@primevue/themes/aura'
// import router from "./router";
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(PrimeVue,{
    Theme:{
        present:Aura,
    },
});

app.mount('#app')
// createApp(App).use(router).mount("#app");
