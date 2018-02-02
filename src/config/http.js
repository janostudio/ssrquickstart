import axios from 'axios'
import Qs from 'qs'
import { baseUrl } from './env'

const instance = axios.create({
  baseURL: baseUrl,
  timeout: 20000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

// http request 拦截器
instance.interceptors.request.use(
  config => {
    // if (localStorage.jwtToken) {
    //   config.headers.Authorization = 'Bearer ' + localStorage.jwtToken
    // }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// http response 拦截器
instance.interceptors.response.use(
  response => {
    return handleData(response.data)
  },
  error => {
    return Promise.reject(error.response.data)
  })

// 二次封装方法
const getFn = (url, data) => {
  let newurl = url
  if (data) {
    newurl += '?'
    for (let i in data) {
      if (data[i] !== '' && data[i] !== null) {
        newurl += i + '=' + data[i] + '&'
      }
    }
    newurl = newurl.toString().substring(0, newurl.length - 1)
  }
  return instance
    .get(url)
    .catch(handleError)
}

const postFn = (url, data) => {
  return instance
    .post(url, data)
    .catch(handleError)
}

const deleteFn = (url, data) => {
  return instance
    .delete(url, data)
    .catch(handleError)
}

const postJSON = (url, data) => {
  data = Qs.stringify(data)
  return instance
    .post(url, data)
    .catch(handleError)
}

const patchFn = (url, data) => {
  return instance
    .patch(url, data)
    .catch(handleError)
}

const postFile = (url, data, config) => {
  return instance
    .post(url, data, config)
    .catch(handleError)
}

// 捕获请求错误
function handleError (error) {
  // Promise.reject(error)
  return error
}

// 处理数据
function handleData (data) {
  return data
}

export default {
  postFile: postFile,
  postJSON: postJSON,
  post: postFn,
  get: getFn,
  delete: deleteFn,
  patch: patchFn
}
