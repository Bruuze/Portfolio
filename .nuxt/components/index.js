export { default as Loading } from '../..\\components\\loading.vue'
export { default as Logo } from '../..\\components\\Logo.vue'
export { default as Test } from '../..\\components\\test.vue'

export const LazyLoading = import('../..\\components\\loading.vue' /* webpackChunkName: "components_loading" */).then(c => c.default || c)
export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components_Logo" */).then(c => c.default || c)
export const LazyTest = import('../..\\components\\test.vue' /* webpackChunkName: "components_test" */).then(c => c.default || c)
