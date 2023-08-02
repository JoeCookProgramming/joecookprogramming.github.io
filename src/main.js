import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from "./router/index"
import store from './store'
import VueGtag from "vue-gtag";

createApp(App)
    .use(store)
    .use(router)
    .use(VueGtag, {
        config: { id: "G-YFZLQEKWK7" }
      })
    .mount('#app')

