import { defineStore } from 'pinia'
export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    userDetail: {}
  }),
  getters: {},
  actions: {
    async changeUserInfo(userInfo: any) {
      Object.assign(this.userDetail, userInfo)
    }
  }
})
