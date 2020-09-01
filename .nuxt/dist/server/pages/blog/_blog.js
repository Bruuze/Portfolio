exports.ids = [1];
exports.modules = {

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(44);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("379b446c", content, true, context)
};

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_blog_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_blog_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_blog_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_blog_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_blog_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_blog_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".blog{max-width:800px;margin:2rem auto}.blog__featured-img,.blog img{width:100%;height:auto}div,h1,img{margin-bottom:1rem}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/_blog.vue?vue&type=template&id=b9dc8d6c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<h2>"+_vm._ssrEscape(_vm._s(_vm.post.title))+"</h2> "),_c('nuxt-content',{attrs:{"document":_vm.post}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/blog/_blog.vue?vue&type=template&id=b9dc8d6c&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(37);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/_blog.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//

external_vue_default.a.use(__webpack_require__(36));

/* harmony default export */ var _blogvue_type_script_lang_js_ = ({
  transition: 'bounce',
  data: () => ({
    moment: external_moment_default.a
  }),

  async asyncData({
    $content,
    params,
    error
  }) {
    let post;

    try {
      post = await $content("blog", params.slug).fetch(); // OR const article = await $content(`articles/${params.slug}`).fetch()
    } catch (e) {
      error({
        message: "Blog Post not found"
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
// CONCATENATED MODULE: ./pages/blog/_blog.vue?vue&type=script&lang=js&
 /* harmony default export */ var blog_blogvue_type_script_lang_js_ = (_blogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/blog/_blog.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(43)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blog_blogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "2e7322a3"
  
)

/* harmony default export */ var _blog = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_blog.js.map