import { createApp } from 'vue'
import router from '@/router/index'
import App from '@/App.vue'
import { start } from '@/micro/index'
import './sytle/main.less'
import pinia from '@/stores/index'

const app = createApp(App)

app.use(pinia).use(router)

app.mount('#mainApp')

// start qiankun
// prefetch: true  starts prefetching static resources for other subapplications after the first subapplication mount completes.
start({ prefetch: true })
