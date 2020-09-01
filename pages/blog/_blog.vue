<template>
  <div class="blog">
    <img v-bind:src="blogPost.thumbnail" class="blog__featured-img" />
    <h1 class="blog__title">{{blogPost.title}}</h1>
    <div class="blog__date">{{$moment(blogPost.date).format("MMM Do YYYY")}}</div>
    <div class="blog__body" v-html="$md.render(blogPost.body)"></div>
  </div>
</template>

<script>
import Vue from 'vue';
Vue.use(require('vue-moment'));
import moment from 'moment';
export default {

    data: () => ({
      moment: moment
   }),

  // Fetching Single BlogPost
  async asyncData({ params, payload }) {
    if (payload) return { blogPost: payload };
    else
      return {
        blogPost: await require(`~/assets/content/blog/${params.blog}.json`)
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
        title: this.blogPost.title + this.title,
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          {hid: 'og:title',name: 'og:title', content: "Aidan Murphy - Blog - Designs for Streamers"},
          {hid: 'og:description',name: 'og:description', content: "Aidan Murphy - Blog - Web, Motion & Graphic Design all in one place, made for Streamers!"},
          {hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image'},
          {hid: 'twitter:title', name: 'twitter:title', content: 'Aidan Murphy - Blog - Designs for Streamers'},
          {hid: 'twitter:description', name: 'twitter:description', content: 'Aidan Murphy - Blog - Web, Motion & Graphic Design all in one place, made for Streamers!'},
          {property: "og:url", content: this.rootPath + this.route },
          // image must be an absolute path
          {hid: 'twitter:image', name: 'twitter:image', content: this.rootPath + this.blogPost.thumbnail},
          // Facebook OpenGraph
          {property: 'og:title', content: 'Aidan Murphy - Blog - Designs for Streamers'},
          {property: 'og:site_name', content: 'Aidan Murphy - Portfolio'},
          {property: 'og:type', content: 'website'},
          {property: 'og:image', content: this.blogPost.thumbnail},
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