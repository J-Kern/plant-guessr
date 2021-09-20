import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index"
import Vuex from './store/index.js'
import 'virtual:windi.css'

createApp(App).use(router).use(Vuex).mount('#app')


