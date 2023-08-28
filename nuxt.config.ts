// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@element-plus/nuxt',
    '@nuxtjs/color-mode',
    'nuxt-icon'
  ],
  colorMode: {
    classSuffix: "",
  },
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/H.png' }
      ]
    }
  }
})
