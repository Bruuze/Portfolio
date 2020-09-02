<template>
  <div>
    <h1>Work Posts</h1>
    <li v-for="post of posts" :key="post.slug">
      <NuxtLink :to="'work/' + post.slug">{{ post.title }}</NuxtLink>
  </li>
  </div>
</template>

<script>
let ROOT_PATH = 'https://aidanmurphy.netlify.app';
export default {
  transition: 'bounce',
  
  async asyncData({ $content }) {
    const posts = await $content("work").fetch();

    return {
      posts,
    };
  },

  data() {
      return {
        title: 'Blog - Aidan Murphy - Designs for Streamers',
        pageImg: '/blog.png',
        rootPath: 'https://aidan-murphy.netlify.app',
        route: this.$nuxt.$route.path,
      }
    },
    head() {
      return {
        title: this.title,
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          {hid: 'og:title',name: 'og:title', content: "Aidan Murphy - Blog - Designs for Streamers"},
          {hid: 'og:description',name: 'og:description', content: "Aidan Murphy - Blog - Web, Motion & Graphic Design all in one place, made for Streamers!"},
          {hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image'},
          {hid: 'twitter:title', name: 'twitter:title', content: 'Aidan Murphy - Blog - Designs for Streamers'},
          {hid: 'twitter:description', name: 'twitter:description', content: 'Aidan Murphy - Blog - Web, Motion & Graphic Design all in one place, made for Streamers!'},
          {property: "og:url", content: this.rootPath + this.route },
          // image must be an absolute path
          {hid: 'twitter:image', name: 'twitter:image', content: this.rootPath + this.pageImg},
          // Facebook OpenGraph
          {property: 'og:title', content: 'Aidan Murphy - Blog - Designs for Streamers'},
          {property: 'og:site_name', content: 'Aidan Murphy - Portfolio'},
          {property: 'og:type', content: 'website'},
          {property: 'og:image', content: this.pageImg},
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
