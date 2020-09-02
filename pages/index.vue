<template>
  <main class="page__home">
    <section class="hhero__container dark responsive-padding">
      <div class="hhero section__content">

      </div>
    </section>
  </main>
</template>

<!--<h1>Index Page</h1>
    <div class="blogs">
      <nuxt-link :to="`/blog/`">
            <h2>Blog Page</h2>
      </nuxt-link>
      <h2>{{route}}</h2>
    </div>-->

<script>

export default {
  transition: 'bounce',
  
  computed: {
    // Fetching all posts data
    blogPosts() {
      return this.$store.state.blogPosts;
    },
  },

  data() {
      return {
        title: 'Aidan Murphy - Designs for Streamers',
        pageImg: '/test.png',
        rootPath: 'https://aidan-murphy.netlify.app',
        route: this.$nuxt.$route.path,
      }
    },
    head() {
      return {
        title: this.title,
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          {hid: 'og:title',name: 'og:title', content: "Aidan Murphy - Designs for Streamers"},
          {hid: 'og:description',name: 'og:description', content: "Aidan Murphy - Web, Motion & Graphic Design all in one place, made for Streamers!"},
          {hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image'},
          {hid: 'twitter:title', name: 'twitter:title', content: 'Aidan Murphy - Designs for Streamers'},
          {hid: 'twitter:description', name: 'twitter:description', content: 'Aidan Murphy - Web, Motion & Graphic Design all in one place, made for Streamers!'},
          {property: "og:url", content: this.rootPath + this.route },
          // image must be an absolute path
          {hid: 'twitter:image', name: 'twitter:image', content: this.rootPath + this.pageImg},
          // Facebook OpenGraph
          {property: 'og:title', content: 'Aidan Murphy - Designs for Streamers'},
          {property: 'og:site_name', content: 'Aidan Murphy - Portfolio'},
          {property: 'og:type', content: 'website'},
          {property: 'og:image', content: this.pageImg},
          {property: 'og:description', content: 'Aidan Murphy - Web, Motion & Graphic Design all in one place, made for Streamers!'}
        ]
      }
    }

}
</script>
