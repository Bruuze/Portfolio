<template>
  <div>
    <h1>Index Page</h1>
    <div class="blogs">
      <nuxt-link :to="`/blog`">
            <h2>Blog Page</h2>
      </nuxt-link>
    </div>
  </div>
</template>

<script>

let ROOT_PATH = 'https://aidan-murphy.netlify.app';
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
        title: 'Hello World!',
        metaImage: ROOT_PATH + '/test.png'
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
          {property: "og:url", content: ROOT_PATH },
          // image must be an absolute path
          {hid: 'twitter:image', name: 'twitter:image', content: this.metaImage},
          // Facebook OpenGraph
          {property: 'og:title', content: 'Aidan Murphy - Designs for Streamers'},
          {property: 'og:site_name', content: 'Aidan Murphy - Portfolio'},
          {property: 'og:type', content: 'website'},
          {property: 'og:image', content: '/test.png'},
          {property: 'og:description', content: 'Aidan Murphy - Web, Motion & Graphic Design all in one place, made for Streamers!'}
        ]
      }
    }

}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
