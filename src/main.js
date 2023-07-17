import { createApp } from 'vue'
import App from './person.vue'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import {store} from "core-js/internals/reflect-metadata";
import router from "@/router";

createApp(App).mount('#app')

const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')
createApp(App).use(store).use(router).use(ElementPlus).mount('#app')


