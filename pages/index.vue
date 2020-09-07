<template>
  <main class="page__home">

    <section class="hhero__container dark responsive-padding">
      <div class="hhero section__content">
          <h1 class="hhero__title mb-3"> Hi, I'm Aidan :)</h1>
          <div class="hhero__text mb-5">
            <p>I'm a Motion, Graphic and Web designer from <b class="ire">Ire</b><b class="la">la</b><b class="nd">nd</b> who focuses on <b>Stream Design</b>. Check out my work and see why you should book with me!</p>
          </div>

          <div class="hhero__text mb-5">
            <nuxt-link to="/" class="button primary">Get in Touch!</nuxt-link>
            <nuxt-link to="/" class="button secondary">Commission Info</nuxt-link>
          </div>
          
      </div>
    </section>

    <section class="home-section responsive-padding home-section--light light">
        <div class="container">
          <div class="home__row flex--row-reverse">
            <div class="home__col home__col-2 flex flex--align-v-center">
              <div class="embed__container"><iframe src="https://www.youtube.com/embed/5ikqcWz7j-U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen" class="embed"></iframe></div>
            </div>
            <div class="home__col home__col-2 flex flex--align-v-center">

            </div>
          </div>
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
//import mixitup from 'mixitup';

export default {
  transition: 'bounce',

  data() {
      return {
        mixer: null,
        title: 'Aidan Murphy - Designs for Streamers',
        description: 'Aidan Murphy - Web, Motion & Graphic Design all in one place, made for Streamers!',
        pageImg: '/test.png',
        rootPath: 'https://aidan-murphy.netlify.app',
        route: this.$nuxt.$route.path,
      }
    },
    mounted () {
      this.$nextTick(() => {
      const containerEl = document.querySelector('.container')
      this.mixer = new this.mixitup(containerEl, {
      // Options
        animation: {
        //Some options ...
        clampHeight: false // Use this if use flexbox or css grid to get a smooth filter or sort transition
        }
      });
      })
    },
    head() {
      return {
        title: this.title,
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          {hid: 'og:title',name: 'og:title', content: "Aidan Murphy - Designs for Streamers"},
          {hid: 'description', name:'description', content: this.description},
          {hid: 'og:description',name: 'og:description', content: this.description},
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
          {property: 'og:image', content: this.rootPath + this.pageImg},
          {property: 'og:description', content: 'Aidan Murphy - Web, Motion & Graphic Design all in one place, made for Streamers!'}
        ]
      }
    }

}
</script>
