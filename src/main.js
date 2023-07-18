// main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './person/router/router'
import store from '/store/index.js'
import ElementPlus from '../node_modules/element-plus';

// 新增代码：引入全部组件及样式
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(ElementPlus)
app.mount('#app')

