// 获取localStorage里的参数
export const getStore = name => {
  if (!name) return
  return window.localStorage.getItem(name)
}

// 修改localStorage里的参数
export const setStore = (name, content) => {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.localStorage.setItem(name, content)
}

// 移除localStorage里的参数（删除某个具体变量）
export const removeStore = name => {
  if (!name) return
  return window.localStorage.removeItem(name)
}

// 清空localStorage里的参数
export const clearStore = () => {
  window.localStorage.clear()
}

export const LocalStore = {
  install(Vue, options) {
    Vue.prototype.$getStore = getStore
    Vue.prototype.$setStore = setStore
    Vue.prototype.$removeStore = removeStore
    Vue.prototype.$clearStore = clearStore
  }
}
