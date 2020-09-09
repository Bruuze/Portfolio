import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _12bdecac = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _469c6e40 = () => interopDefault(import('..\\pages\\portfolio\\index.vue' /* webpackChunkName: "pages/portfolio/index" */))
const _15d53670 = () => interopDefault(import('..\\pages\\test.vue' /* webpackChunkName: "pages/test" */))
const _162b2f3c = () => interopDefault(import('..\\pages\\blog\\_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _44e5ccf8 = () => interopDefault(import('..\\pages\\portfolio\\_slug.vue' /* webpackChunkName: "pages/portfolio/_slug" */))
const _732620e8 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    path: "/blog",
    component: _12bdecac,
    name: "blog"
  }, {
    path: "/portfolio",
    component: _469c6e40,
    name: "portfolio"
  }, {
    path: "/test",
    component: _15d53670,
    name: "test"
  }, {
    path: "/blog/:slug",
    component: _162b2f3c,
    name: "blog-slug"
  }, {
    path: "/portfolio/:slug",
    component: _44e5ccf8,
    name: "portfolio-slug"
  }, {
    path: "/",
    component: _732620e8,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
