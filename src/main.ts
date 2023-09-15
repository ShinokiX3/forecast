import './assets/styles/main.sass'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import { MotionPlugin } from '@vueuse/motion'

import App from './App.vue'
import router from './router'
import { MotionPlugin } from '../node_modules/@vueuse/motion/dist'

const app = createApp(App)

app.use(createPinia())
app.use(MotionPlugin)
app.use(router)

app.mount('#app')
