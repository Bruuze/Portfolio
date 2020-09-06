
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'msapplication-TileColor', content: '#181425'},
      { name: 'theme-color', content: '#FF7CD7'}
    ],
    link: [
      //{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel:'apple-touch-icon', sizes: "180x180", href: "/apple-touch-icon.png"},
      { rel:'icon', type: "image/png", sizes: "32x32", href: "/favicon-32x32.png"},
      { rel:'icon', type: "image/png", sizes: "16x16", href: "/favicon-16x16.png"},
      { rel: "manifest", href: "/site.webmanifest"},
      { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#181425"},
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css'
      }
    ],
    css: [
      'https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css'
    ],
    script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/mixitup/3.3.1/mixitup.min.js'
      },
      {
        src: 'https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js'
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.5.3/lottie_svg.min.js'
      },
      {
        src: '/main.js'
      },
    ]
  },

  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },

  loading: { color: '#FF7CD7',throttle: 400},



  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/main.css'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    { src: '~/plugins/mixitup.client.js', mode: 'client' }
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxt/content',
    "@nuxtjs/markdownit"
  ],

  markdownit: {
    injected: true
  },

  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  },

  generate: {
    routes: function() {
      const fs = require('fs');
      const path = require('path');
      return fs.readdirSync('./content/blog').map(file => {
        return {
          route: `/blog/${path.parse(file).name}`, // Return the slug
          payload: require(`./content/blog/${file}`),
        };
      })
    },
    routes: function() {
      const fs = require('fs');
      const path = require('path');
      return fs.readdirSync('./content/work').map(file => {
        return {
          route: `/work/${path.parse(file).name}`, // Return the slug
          payload: require(`./content/work/${file}`),
        };
      })
    }
  },
}
