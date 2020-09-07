exports.ids = [2];
exports.modules = {

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/index.vue?vue&type=template&id=b7b147f8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<h1>Blog Posts</h1> "),_vm._l((_vm.posts),function(post){return _vm._ssrNode("<li>","</li>",[_c('NuxtLink',{attrs:{"to":post.slug}},[_vm._v(_vm._s(post.title))])],1)})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/blog/index.vue?vue&type=template&id=b7b147f8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
let ROOT_PATH = 'https://aidanmurphy.netlify.app';
/* harmony default export */ var blogvue_type_script_lang_js_ = ({
  transition: 'bounce',

  async asyncData({
    $content
  }) {
    const posts = await $content("blog").fetch();
    return {
      posts
    };
  },

  data() {
    return {
      title: 'Aidan Murphy - Blog - Designs for Streamers',
      pageImg: '/blog.png',
      rootPath: 'https://aidan-murphy.netlify.app',
      route: this.$nuxt.$route.path
    };
  },

  head() {
    return {
      title: this.title,
      meta: [// hid is used as unique identifier. Do not use `vmid` for it as it will not work
      {
        hid: 'og:title',
        name: 'og:title',
        content: "Aidan Murphy - Blog - Designs for Streamers"
      }, {
        hid: 'og:description',
        name: 'og:description',
        content: "Aidan Murphy - Blog - Web, Motion & Graphic Design all in one place, made for Streamers!"
      }, {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      }, {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Aidan Murphy - Blog - Designs for Streamers'
      }, {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'Aidan Murphy - Blog - Web, Motion & Graphic Design all in one place, made for Streamers!'
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
        content: 'Aidan Murphy - Blog - Designs for Streamers'
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
// CONCATENATED MODULE: ./pages/blog/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_blogvue_type_script_lang_js_ = (blogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/blog/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_blogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "205ad274"
  
)

/* harmony default export */ var blog = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map