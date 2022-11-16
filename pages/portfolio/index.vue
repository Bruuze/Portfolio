<template>
  <div>
    <h1>Work Posts</h1>
    <li v-for="post of posts" :key="post.slug">
      <NuxtLink :to="post.slug">{{ post.title }}</NuxtLink>
  </li>
  </div>
</template>

<script>
//let ROOT_PATH = 'https://aidan-murphy.ie';
export default {
  
  async asyncData({ $content }) {
    const posts = await $content("work").fetch();

    return {
      posts
    };
  },

  data() {
      return {
        mixer: null,
        title: 'Aidan Murphy - Work - Designs for Streamers',
        pageImg: '/blog.png',
        rootPath: 'https://aidan-murphy.ie',
        route: this.$nuxt.$route.path,
        twitterUsername: '@AidanMurphy___'
      }
    },
    head() {
      return {
        title: this.title,
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          {hid: 'og:title',name: 'og:title', content: "Aidan Murphy - Work - Designs for Streamers"},
          {hid: 'og:description',name: 'og:description', content: "Aidan Murphy - Work - Web, Motion & Graphic Design all in one place, made for Streamers!"},
          {hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image'},
          {hid: 'twitter:title', name: 'twitter:title', content: 'Aidan Murphy - Work - Designs for Streamers'},
          {hid: 'twitter:description', name: 'twitter:description', content: 'Aidan Murphy - Work - Web, Motion & Graphic Design all in one place, made for Streamers!'},
          // image must be an absolute path
          {hid: 'twitter:image', name: 'twitter:image', content: this.rootPath + this.pageImg},
          // Facebook OpenGraph
          {property: 'og:title', content: 'Aidan Murphy - Work - Designs for Streamers'},
          {property: 'og:site_name', content: 'Aidan Murphy - Portfolio'},
          {property: 'og:type', content: 'website'},
          {property: 'og:image', content: this.pageImg},
          {property: 'og:description', content: 'Aidan Murphy - Web, Motion & Graphic Design all in one place, made for Streamers!'},
          {property: "og:url", content: this.rootPath + this.route }
        ]
      }
    }

}
</script>
