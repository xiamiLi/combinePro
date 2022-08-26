import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
const { userDetail } = storeToRefs(userStore)

const microApps = [
  {
    name: 'sub-vue',
    entry: import.meta.env.VITE_APP_SUB_VUE, //process.env.VUE_APP_SUB_VUE
    activeRule: '/sub-vue'
  },
  {
    name: 'sub-react',
    entry: import.meta.env.VITE_APP_SUB_REACT,
    activeRule: '/sub-react'
  }
]

const apps = microApps.map((item) => {
  return {
    ...item,
    container: '#subapp-viewport', // sub application mounted div
    props: {
      routerBase: item.activeRule, // Delivering the Basic Route
      userDetail
    }
  }
})

export default apps
