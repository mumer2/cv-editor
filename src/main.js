import './assets/main.css'
import 'primeicons/primeicons.css'
import ColorPicker from 'primevue/colorpicker';
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import  PrimeVue  from 'primevue/config';
import Aura from '@primevue/themes/aura'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(PrimeVue,{
    Theme:{
        present:Aura,
    },
});

app.mount('#app')
