import axios from '@/utils/request'
import { userDetail } from '@/interface/user'
export const queryUserDetail = (token: string): Promise<userDetail> => {
  return axios.get('v1/user/userInfo', {
    params: { token: token }
  })
}
