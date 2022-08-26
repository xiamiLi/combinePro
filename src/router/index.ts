import pinia from '@/stores/index'
import { localStorageFormat, session } from '@/utils/common'
import { LOCALSTORAGE_KEY_MAP, SESSION_KEY_MAP } from '@/utils/constant'
import { createRouter, createWebHistory } from 'vue-router'
import { staticRoutes } from './route'

import { useUserStore } from '@/stores/user'
const userStore = useUserStore(pinia)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...staticRoutes]
})

router.beforeEach(async (to, from, next) => {
  const childrenPath = ['/sub-vue', '/sub-react']
  const userInfo: string | null = localStorageFormat.get(LOCALSTORAGE_KEY_MAP.userInfo)
  if (userInfo !== null && Object.keys(userInfo).length > 0) {
    //store
    userStore.changeUserInfo(userInfo)
    if (to.name === 'Login') {
      localStorageFormat.remove(LOCALSTORAGE_KEY_MAP.userInfo)
      session.remove(SESSION_KEY_MAP.redirectUrl)
      next()
    } else {
      next()
    }

    // Whether the current route is equal to the sub application,yes will jump relevant sub application
    if (childrenPath.some((item) => item === to.path)) {
      next()
    }
    next('/404')
  } else if (to.path === '/login') {
    next()
  } else {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  }
})

export default router
