import Axios, { AxiosRequestConfig } from 'axios'

const baseURL = import.meta.env.MODE === 'development' ? 'http://localhost:8080' : ''
const axios = Axios.create({
  baseURL,
  timeout: 20000
})
// Whether cookies are allowed
axios.defaults.withCredentials = false
// Request header Information
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
// The default format is application/json
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
// Request interceptor
axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config
  },
  (err) => Promise.reject(err)
)

// Response interceptor
axios.interceptors.response.use(
  (res) => res.data,
  (err) => {
    alert('network error')
    console.error('network error')
    return Promise.reject(err)
  }
)
export default axios
