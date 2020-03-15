import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _67b54b30 = () => interopDefault(import('../pages/profile.vue' /* webpackChunkName: "pages/profile" */))
const _47982261 = () => interopDefault(import('../pages/signup.vue' /* webpackChunkName: "pages/signup" */))
const _d83a1ffe = () => interopDefault(import('../pages/hashtag/_id/index.vue' /* webpackChunkName: "pages/hashtag/_id/index" */))
const _e3bf6158 = () => interopDefault(import('../pages/post/_id.vue' /* webpackChunkName: "pages/post/_id" */))
const _1c7df252 = () => interopDefault(import('../pages/post/_id/index.vue' /* webpackChunkName: "pages/post/_id/index" */))
const _0190f2c2 = () => interopDefault(import('../pages/user/_id/index.vue' /* webpackChunkName: "pages/user/_id/index" */))
const _6a5384ce = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/profile",
    component: _67b54b30,
    name: "profile"
  }, {
    path: "/signup",
    component: _47982261,
    name: "signup"
  }, {
    path: "/hashtag/:id?",
    component: _d83a1ffe,
    name: "hashtag-id"
  }, {
    path: "/post/:id?",
    component: _e3bf6158,
    children: [{
      path: "",
      component: _1c7df252,
      name: "post-id"
    }]
  }, {
    path: "/user/:id?",
    component: _0190f2c2,
    name: "user-id"
  }, {
    path: "/",
    component: _6a5384ce,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
