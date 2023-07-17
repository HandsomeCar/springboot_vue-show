// main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './person/router/router'
import store from '/store/index.js'
import {
    components,
    plugins
} from './common/element'

// 新增代码：引入全部组件及样式
import 'element-plus/theme-chalk/index.css'

const app = createApp(App)
components.forEach(component => {
    app.component(component.name, component)
})

plugins.forEach(plugin => {
    app.use(plugin)
})

app.use(store)
app.use(router)
// 新增代码：注册特定组件
// app.component(ElButton.name, ElButton)
// 新增代码：注册全部组件
// app.use(ElementPlus)

app.mount('#app')

