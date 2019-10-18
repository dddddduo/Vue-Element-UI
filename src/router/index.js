import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import {
  getStore
} from "../config/localStore.js"

const router = new Router({
  routes: [
    {
      path: "/",
      name: '',
      component: () =>
        import( /* webpackChunkName: "business" */ '@/components/home'),
      meta: {
        requiresAuth: true
      },
      children: [
        {
          path: '/home_one',
          name: 'home_one',
          component: () =>
            import('@/pages/home/home_one')
        },
        {
          path: '/home_two',
          name: 'home_two',
          component: () =>
            import('@/pages/home/home_two')
        },
        {
          path: '/home_one1',
          name: 'home_one1',
          component: () =>
            import('@/pages/home/home_one1')
        },
        {
          path: '/home_two1',
          name: 'home_two1',
          component: () =>
            import('@/pages/home/home_two1')
        },
        {
          path: '/list_one',
          name: 'list_one',
          component: () =>
            import('@/pages/list/list_one')
        },
        {
          path: '/list_two',
          name: 'list_two',
          component: () =>
            import('@/pages/list/list_two')
        }
      ]
    },

  ],
  scrollBehavior(to, from) {
    // return 期望滚动到哪个的位置
    return {
      x: 0,
      y: 0
    }
  }
})

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (!getStore('token')) {
//       next({
//         path: "/",
//       })
//     } else {
//       next()
//     }
//   } else {
//     next() // 确保一定要调用 next()
//   }
// })

export default router
