import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// route-level code splitting
const Home = () => import('../views/home/index.vue')
const Battle = () => import('../views/battle/index.vue')

export function createRouter () {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/home', component: Home },
      { path: '/', redirect: '/home' }
    ]
  })
}
