const axios = require('axios')
const qs = require('qs')

import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css' // Progress 进度条样式

import {
  Message, // 消息提示
  Notification // 消息通知
} from 'element-ui'
// host
import { baseUrl } from './env.js'
// 清除localStore
import { clearStore } from "@/config/localStore.js"

// 异步请求设置，允许跨域
axios.defaults.withCredentials = true
const service = axios.create()

// request拦截器   添加请求拦截器
service.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  NProgress.start() // 显示进度条
  return config
}, error => {
  // 对请求错误做些什么
  return Promise.reject(error)
})
// 添加响应拦截器
service.interceptors.response.use(response => {
  // 对响应数据做点什么
  NProgress.done() // 完成进度条
  return response
}, error => {
  // 对响应错误做点什么
  NProgress.done() // 完成进度条
  if (error.response.status === 302) {
    Notification({
      title: "警告",
      message: '登录超时',
      type: "warning",
    })
    // 跳转到login页面
    setTimeout(() => {
      router.replace({
        path: '/login'
      })
      clearStore()
      window.location.reload()
    }, 500)
  } else {
    Message({
      message: '网络不稳定',
      type: 'warning',
      duration: 5 * 1000
    })
    setTimeout(() => {
      router.replace({
        path: '/login'
      })
      clearStore()
      window.location.reload()
    }, 500)
  }
  return Promise.reject(error)
})

export const LYD = {
  POST(url, params, type) {
    if (type === 'json') {
      return service.post(baseUrl + url, params)
    } else {
      return service.post(baseUrl + url, qs.stringify(params), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        }
      })
    }
  },
  GET(url, params) {
    if (params) {
      return service.get(baseUrl + url + '/?' + qs.stringify(params), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        }
      })
    } else {
      return service.get(baseUrl + url + '/', {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        }
      })
    }
  }
}
