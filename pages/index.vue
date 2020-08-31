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
import ogImage from '@/static/test.png';
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
        title: 'Hello World!'
      }
    },
    head() {
      return {
        title: this.title,
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          {
            hid: 'description',
            name: 'description',
            content: 'My custom description'
          },
          {name: 'og:title', content: title},
          {hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image'},
          {hid: 'twitter:title', name: 'twitter:title', content: 'Aidan Murphy Title'},
          {hid: 'twitter:description', name: 'twitter:description', content: 'Aidan Murphy Desc.'},
          // image must be an absolute path
          {hid: 'twitter:image', name: 'twitter:image', content: 'http://graphics8.nytimes.com/images/2012/02/19/us/19whitney-span/19whitney-span-articleLarge.jpg'},
          // Facebook OpenGraph
          {property: 'og:title', content: 'Vue Social Cards Example'},
          {property: 'og:site_name', content: 'Vue Example'},
          {property: 'og:type', content: 'website'},
          {property: 'og:image', content:  'http://graphics8.nytimes.com/images/2012/02/19/us/19whitney-span/19whitney-span-articleLarge.jpg'},
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
