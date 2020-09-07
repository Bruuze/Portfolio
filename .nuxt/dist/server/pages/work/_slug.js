exports.ids = [5];
exports.modules = {

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/work/_slug.vue?vue&type=template&id=512e39d3&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div><h2>"+_vm._ssrEscape(_vm._s(_vm.post.title))+"</h2> <div>"+(_vm._s(_vm.$md.render(_vm.post.body)))+"</div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/work/_slug.vue?vue&type=template&id=512e39d3&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(38);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/work/_slug.vue?vue&type=script&lang=js&
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

external_vue_default.a.use(__webpack_require__(37));

/* harmony default export */ var _slugvue_type_script_lang_js_ = ({
  transition: 'bounce',
  data: () => ({
    moment: external_moment_default.a
  }),
  components: {},

  async asyncData({
    $content,
    params,
    error
  }) {
    let post;

    try {
      post = await $content("work", params.slug).fetch(); // OR const article = await $content(`articles/${params.slug}`).fetch()
    } catch (e) {
      error({
        message: "Work Post not found"
      });
    }

    return {
      post
    };
  },

  data() {
    return {
      title: ' - Aidan Murphy - Designs for Streamers',
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
        content: this.title
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
        content: this.title
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
        content: this.rootPath
      }, // Facebook OpenGraph
      {
        property: 'og:title',
        content: this.title
      }, {
        property: 'og:site_name',
        content: 'Aidan Murphy - Portfolio'
      }, {
        property: 'og:type',
        content: 'website'
      }, {
        property: 'og:image',
        content: ''
      }, {
        property: 'og:description',
        content: 'Aidan Murphy - Web, Motion & Graphic Design all in one place, made for Streamers!'
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/work/_slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var work_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/work/_slug.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  work_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "47f2ec4a"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_slug.js.map