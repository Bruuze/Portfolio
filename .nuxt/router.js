import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ce7b723c = () => interopDefault(import('..\\pages\\404.vue' /* webpackChunkName: "pages/404" */))
const _6c16131a = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _0d03cad0 = () => interopDefault(import('..\\pages\\portfolio\\index.vue' /* webpackChunkName: "pages/portfolio/index" */))
const _4a91cd50 = () => interopDefault(import('..\\pages\\test.vue' /* webpackChunkName: "pages/test" */))
const _6a5f71d2 = () => interopDefault(import('..\\pages\\blog\\_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _0b4d2988 = () => interopDefault(import('..\\pages\\portfolio\\_slug.vue' /* webpackChunkName: "pages/portfolio/_slug" */))
const _d5fc6608 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    path: "/404",
    component: _ce7b723c,
    name: "404"
  }, {
    path: "/blog",
    component: _6c16131a,
    name: "blog"
  }, {
    path: "/portfolio",
    component: _0d03cad0,
    name: "portfolio"
  }, {
    path: "/test",
    component: _4a91cd50,
    name: "test"
  }, {
    path: "/blog/:slug",
    component: _6a5f71d2,
    name: "blog-slug"
  }, {
    path: "/portfolio/:slug",
    component: _0b4d2988,
    name: "portfolio-slug"
  }, {
    path: "/",
    component: _d5fc6608,
    name: "index"
  }, {
    path: "*",
    component: _ce7b723c,
    name: "custom"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
