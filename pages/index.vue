<template>
  <div>
    <h1>Blog Posts</h1>
    <div class="blogs">
      <ul class="blog" v-for="blog in blogPosts" :key="blog.slug">
        <li class="blog__title">
          <nuxt-link :to="`/blog/${blog.slug}`">
            <h2>{{ blog.title }}</h2>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
let ROOT_PATH = 'https://flamboyant-turing-0d29fe.netlify.app';
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
          {hid: 'og:title',name: 'og:title', content: "title"},
          {hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image'},
          {hid: 'twitter:title', name: 'twitter:title', content: 'Aidan Murphy Title'},
          {hid: 'twitter:description', name: 'twitter:description', content: 'Aidan Murphy Desc.'},
          // image must be an absolute path
          {hid: 'twitter:image', name: 'twitter:image', content: this.metaImage},
          // Facebook OpenGraph
          {property: 'og:title', content: 'FB Aidan Murphy'},
          {property: 'og:site_name', content: 'Aidan Murphy Portfolio'},
          {property: 'og:type', content: 'website'},
          {property: 'og:image', content:  '/test.png'},
          {property: 'og:description', content: 'Vue sample site showing off Twitter and Facebook Cards.'}
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
