'use strict'
/*
  date: 2019-10-16
  desc: 项目配置文件，处理json 文件中的配置数据，将所有统一的路由写在这里当作全局变量使用，每个路由器使用不同，将公共方法写在这里
*/
// 路由
import { baseUrl } from '@/config/env.js'
// 获取token
import { getStore } from "@/config/localStore.js"
let $global = {}

$global.token = getStore('token')
$global.root_url = baseUrl

// token function
$global.setToken = () => {
  return ($global.token)
}

// img Url funtion
$global.setImg = () => {
  return ($global.root_url)
}

export default $global;