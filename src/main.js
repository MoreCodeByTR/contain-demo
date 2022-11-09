import { createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import VConsole from 'vconsole'
import 'element-plus/dist/index.css'
import App from './App.vue'
import { router } from './router/index'

console.log(import.meta.env)
if(import.meta.env.MODE==='development'){
    new VConsole()
}

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.mount('#app')