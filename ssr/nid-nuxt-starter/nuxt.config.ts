// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    modules: [],
    runtimeConfig: {
        public: {
            apiBaseUrl: 'https://nid-node.ninghao.co'
        }
    }
})
