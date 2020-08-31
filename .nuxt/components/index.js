export { default as Loading } from '../..\\components\\loading.vue'
export { default as Logo } from '../..\\components\\Logo.vue'

export const LazyLoading = import('../..\\components\\loading.vue' /* webpackChunkName: "components_loading" */).then(c => c.default || c)
export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components_Logo" */).then(c => c.default || c)
