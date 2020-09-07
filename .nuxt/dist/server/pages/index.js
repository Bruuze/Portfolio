exports.ids = [3];
exports.modules = {

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=5c5d11e6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('main',{staticClass:"page__home"},[_vm._ssrNode("<section class=\"hhero__container dark responsive-padding\">","</section>",[_vm._ssrNode("<div class=\"hhero section__content\">","</div>",[_vm._ssrNode("<h1 class=\"hhero__title mb-3\"> Hi, I'm Aidan :)</h1> <div class=\"hhero__text mb-5\"><p>I'm a Motion, Graphic and Web designer from <b class=\"ire\">Ire</b><b class=\"la\">la</b><b class=\"nd\">nd</b> who focuses on <b>Stream Design</b>. Check out my work and see why you should book with me!</p></div> "),_vm._ssrNode("<div class=\"hhero__text mb-5\">","</div>",[_c('nuxt-link',{staticClass:"button primary",attrs:{"to":"/"}},[_vm._v("Get in Touch!")]),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"button secondary",attrs:{"to":"/"}},[_vm._v("Commission Info")])],2)],2)]),_vm._ssrNode(" <section class=\"home-section responsive-padding home-section--light light\"><div class=\"container\"><div class=\"home__row flex--row-reverse\"><div class=\"home__col home__col-2 flex flex--align-v-center\"><div class=\"embed__container\"><iframe src=\"https://www.youtube.com/embed/5ikqcWz7j-U\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen=\"allowfullscreen\" class=\"embed\"></iframe></div></div> <div class=\"home__col home__col-2 flex flex--align-v-center\"></div></div></div></section>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=5c5d11e6&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//import mixitup from 'mixitup';
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  transition: 'bounce',

  data() {
    return {
      mixer: null,
      title: 'Aidan Murphy - Designs for Streamers',
      pageImg: '/test.png',
      rootPath: 'https://aidan-murphy.netlify.app',
      route: this.$nuxt.$route.path
    };
  },

  mounted() {
    this.$nextTick(() => {
      const containerEl = document.querySelector('.container');
      this.mixer = new this.mixitup(containerEl, {
        // Options
        animation: {
          //Some options ...
          clampHeight: false // Use this if use flexbox or css grid to get a smooth filter or sort transition

        }
      });
    });
  },

  head() {
    return {
      title: this.title,
      meta: [// hid is used as unique identifier. Do not use `vmid` for it as it will not work
      {
        hid: 'og:title',
        name: 'og:title',
        content: "Aidan Murphy - Designs for Streamers"
      }, {
        hid: 'og:description',
        name: 'og:description',
        content: "Aidan Murphy - Web, Motion & Graphic Design all in one place, made for Streamers!"
      }, {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      }, {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Aidan Murphy - Designs for Streamers'
      }, {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'Aidan Murphy - Web, Motion & Graphic Design all in one place, made for Streamers!'
      }, {
        property: "og:url",
        content: this.rootPath + this.route
      }, // image must be an absolute path
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: this.rootPath + this.pageImg
      }, // Facebook OpenGraph
      {
        property: 'og:title',
        content: 'Aidan Murphy - Designs for Streamers'
      }, {
        property: 'og:site_name',
        content: 'Aidan Murphy - Portfolio'
      }, {
        property: 'og:type',
        content: 'website'
      }, {
        property: 'og:image',
        content: this.pageImg
      }, {
        property: 'og:description',
        content: 'Aidan Murphy - Web, Motion & Graphic Design all in one place, made for Streamers!'
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2b275c26"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map