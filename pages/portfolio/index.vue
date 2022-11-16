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
        //title: this.title,
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          {hid: 'og:description',name: 'og:description', content: "Aidan Murphy - Work - Web, Motion & Graphic Design all in one place, made for Streamers!"},
          {hid: 'keywords', name: 'keywords', content: 'stream, design, twitch, graphics, youtube, panels, package, scenes, screens, offline, offline image, banner, content, creation, influncer, facebook, streaming, quality, designer, code, website, motion, animation, animated, aidan, murphy, VBI, Nerd, or, die, Nerdordie, visuals, by, impulse, youtuber, irish, ireland, english'},

          {hid: 'twitter:title', name: 'twitter:title', content: 'Aidan Murphy - Work - Designs for Streamers'},
          {hid: 'twitter:description', name: 'twitter:description', content: 'Aidan Murphy - Work - Web, Motion & Graphic Design all in one place, made for Streamers!'},
          {hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image'},
          {hid: 'twitter:image', name: 'twitter:image', content: this.rootPath + this.pageImg},
          {hid: 'twitter:image:alt' , name: 'twitter:image:alt', content: 'Aidan Murphy Portflio: Designs for Streamers & Content Creators'},
          {hid: 'twitter:site', name: 'twitter:site', content: this.twitterUsername},
          {hid: 'twitter:creator', name: 'twitter:creator', content: this.twitterUsername},

          // Facebook OpenGraph
          {hid: 'og:title', name: 'og:title', content: "Aidan Murphy - Work - Designs for Streamers"},
          {hid: 'og:site_name', property: 'og:site_name', content: 'Aidan Murphy - Portfolio'},
          {hid: 'og:type', property: 'og:type', content: 'website'},
          {hid: 'og:image', property: 'og:image', content: this.pageImg},
          {hid: 'og:description', property: 'og:description', content: 'Aidan Murphy - Web, Motion & Graphic Design all in one place, made for Streamers!'},
          {hid: 'og:url', property: "og:url", content: this.rootPath + this.route }
        ]
      }
    }

}
</script>
