import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4db51a26 = () => interopDefault(import('../pages/profile.vue' /* webpackChunkName: "pages/profile" */))
const _5f879cab = () => interopDefault(import('../pages/signup.vue' /* webpackChunkName: "pages/signup" */))
const _62bd0377 = () => interopDefault(import('../pages/hashtag/_id/index.vue' /* webpackChunkName: "pages/hashtag/_id/index" */))
const _681a5f1e = () => interopDefault(import('../pages/post/_id.vue' /* webpackChunkName: "pages/post/_id" */))
const _235e9721 = () => interopDefault(import('../pages/post/_id/index.vue' /* webpackChunkName: "pages/post/_id/index" */))
const _332e830c = () => interopDefault(import('../pages/user/_id/index.vue' /* webpackChunkName: "pages/user/_id/index" */))
const _fd6d5be2 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _4db51a26,
    name: "profile"
  }, {
    path: "/signup",
    component: _5f879cab,
    name: "signup"
  }, {
    path: "/hashtag/:id?",
    component: _62bd0377,
    name: "hashtag-id"
  }, {
    path: "/post/:id?",
    component: _681a5f1e,
    children: [{
      path: "",
      component: _235e9721,
      name: "post-id"
    }]
  }, {
    path: "/user/:id?",
    component: _332e830c,
    name: "user-id"
  }, {
    path: "/",
    component: _fd6d5be2,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
