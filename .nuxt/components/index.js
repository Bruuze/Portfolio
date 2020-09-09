export { default as Loading } from '../..\\components\\loading.vue'
export { default as Logo } from '../..\\components\\Logo.vue'
export { default as NuxtError } from '../..\\components\\nuxt-error.vue'

export const LazyLoading = import('../..\\components\\loading.vue' /* webpackChunkName: "components_loading" */).then(c => c.default || c)
export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components_Logo" */).then(c => c.default || c)
export const LazyNuxtError = import('../..\\components\\nuxt-error.vue' /* webpackChunkName: "components_nuxt-error" */).then(c => c.default || c)
