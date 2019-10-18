// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import './assets/css/reset.css'
import '../static/iconfont/iconfont.css'
import '../static/iconfont/iconfont.js'

Vue.config.productionTip = false

import {
    LocalStore
  } from './config/localStore.js'
  Vue.use(LocalStore)
  
import $global from './utils/manifest.js'
// 设置全局请求头token
// axios.defaults.headers['Auth-Token'] = localStorage.ns_token
// 项目根目录
Vue.prototype.$root_url = $global.setImg
// 本地存储token
Vue.prototype.$token = $global.token


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {
        App
    },
    template: '<App/>'
})