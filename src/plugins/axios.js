// in HTTP.js
import Axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// create a new axios instance
const axios = Axios.create({
  baseURL: '/apper/'
})

// before a request is made start the nprogress
axios.interceptors.request.use(config => {
  NProgress.start()
  return config
})

// before a response is returned stop nprogress
axios.interceptors.response.use(response => {
  NProgress.done()
  return response
})

export default axios
