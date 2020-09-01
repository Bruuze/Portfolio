<template>
<div>
    <div>
      
  </div>

</div>
</template>

<script>
import Vue from 'vue';
Vue.use(require('vue-moment'));
import moment from 'moment';
export default {
    transition: 'bounce',

    data: () => ({
      moment: moment
   }),

   components: {},

   async asyncData({ $content, params, error }) {
    let post;
    try {
      const article = await $content(`blog/${params.slug}`).fetch()
    } catch (e) {
      error({ message: "Blog Post not found" });
    }

    return {
      post,
    };
  },

  data() {
      return {
        title: ' - Aidan Murphy - Designs for Streamers',
        pageImg: '/blog.png',
        rootPath: 'https://aidan-murphy.netlify.app',
        route: this.$nuxt.$route.path,
      }
    },
    head() {
      return {
        title:  this.title,
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          {hid: 'og:title',name: 'og:title', content:  this.title},
          {hid: 'og:description',name: 'og:description', content: "Aidan Murphy - Web, Motion & Graphic Design all in one place, made for Streamers!"},
          {hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image'},
          {hid: 'twitter:title', name: 'twitter:title', content:  this.title},
          {hid: 'twitter:description', name: 'twitter:description', content: 'Aidan Murphy - Web, Motion & Graphic Design all in one place, made for Streamers!'},
          {property: "og:url", content: this.rootPath + this.route },
          // image must be an absolute path
          {hid: 'twitter:image', name: 'twitter:image', content: this.rootPath},
          // Facebook OpenGraph
          {property: 'og:title', content:  this.title},
          {property: 'og:site_name', content: 'Aidan Murphy - Portfolio'},
          {property: 'og:type', content: 'website'},
          {property: 'og:image', content: ''},
          {property: 'og:description', content: 'Aidan Murphy - Web, Motion & Graphic Design all in one place, made for Streamers!'}
        ]
      }
    }

};
</script>

<style>
.blog {
  max-width: 800px;
  margin: 2rem auto;
}
.blog__featured-img, .blog img {
  width: 100%;
  height: auto;
}
div,
h1,
img {
  margin-bottom: 1rem;
}
</style>