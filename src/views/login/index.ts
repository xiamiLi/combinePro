import { queryUserDetail } from '@/apis/user'
import { useActions } from '@/micro'
import { useUserStore } from '@/stores/user'

import AuthService from '@/utils/authService'
import { localStorageFormat } from '@/utils/common'
import { SESSION_KEY_MAP, LOCALSTORAGE_KEY_MAP } from '@/utils/constant'

export const useInitLogin = async (token: string, redirect: string): Promise<void> => {
  const userStore = useUserStore()
  redirect && sessionStorage.setItem(SESSION_KEY_MAP.redirectUrl, redirect)
  if (token) {
    try {
      // get userInfo api
      const res = await queryUserDetail(token)
      //local storage
      localStorageFormat.set(LOCALSTORAGE_KEY_MAP.userInfo, res)
      //store
      userStore.changeUserInfo(res)
      //set globalState
      const commonStore = useActions()
      commonStore.setGlobalState({
        userDetail: res || {}
      })
      // jump url
      const redirectUrl = sessionStorage.getItem(SESSION_KEY_MAP.redirectUrl) || '/home'
      location.href = redirectUrl
    } catch (err) {}
  }
}
