exports.ids = [4];
exports.modules = {

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(41);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("15fe488e", content, true, context)
};

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_test_vue_vue_type_style_index_0_id_bc875d54_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_test_vue_vue_type_style_index_0_id_bc875d54_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_test_vue_vue_type_style_index_0_id_bc875d54_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_test_vue_vue_type_style_index_0_id_bc875d54_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_test_vue_vue_type_style_index_0_id_bc875d54_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_test_vue_vue_type_style_index_0_id_bc875d54_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body[data-v-bc875d54]{max-width:1180px;margin:0 auto;padding:5px}.mixitup-control-active[data-v-bc875d54]{color:#fff;background:#000}.mix[data-v-bc875d54]{margin:5px}ul.container[data-v-bc875d54]{list-style-type:none;margin:0}li[data-v-bc875d54]{display:inline-block}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/test.vue?vue&type=template&id=bc875d54&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<h1 data-v-bc875d54><a target=\"_blank\" href=\"https://www.kunkalabs.com/mixitup/\" data-v-bc875d54>MixItUp-3 sorting</a> &amp; <a target=\"_blank\" href=\"http://fancyapps.com/fancybox/3/\" data-v-bc875d54>FancyBox-3 Lightbox</a></h1> <nav class=\"controls \" data-v-bc875d54><button type=\"button \" data-filter=\"all\" class=\"control \" data-v-bc875d54>All</button> <button type=\"button \" data-filter=\".logo \" class=\"control \" data-v-bc875d54>Logo</button> <button type=\"button \" data-filter=\".blue \" class=\"control \" data-v-bc875d54>Blue</button> <button type=\"button \" data-filter=\".tink \" class=\"control \" data-v-bc875d54>Pink</button> <button type=\"button \" data-filter=\"none \" class=\"control \" data-v-bc875d54>None</button></nav> <br data-v-bc875d54> <ul class=\"container \" data-v-bc875d54>"+(_vm._ssrList((_vm.posts),function(post){return ("<li"+(_vm._ssrClass("mix",post.type))+" data-v-bc875d54><a"+(_vm._ssrAttr("title",post.title))+(_vm._ssrAttr("href",post.imgLarge))+" itemprop=\"contentUrl \" data-size=\"1200x600 \" data-v-bc875d54><img"+(_vm._ssrAttr("src",post.imgSmall))+" itemprop=\"thumbnail \" alt=\"Image description \" data-v-bc875d54></a></li>")}))+"</ul>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/test.vue?vue&type=template&id=bc875d54&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/test.vue?vue&type=script&lang=js&
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
/* harmony default export */ var testvue_type_script_lang_js_ = ({
  transition: 'bounce',

  async asyncData({
    $content
  }) {
    const posts = await $content("onscreen").fetch();
    return {
      posts
    };
  },

  data() {
    return {
      mixer: null
    };
  },

  mounted() {
    this.$nextTick(() => {
      var containerEl = document.querySelector("ul.container"); // 2. Passing the configuration object inline
      //https://www.kunkalabs.com/mixitup/docs/configuration-object/

      var mixer = mixitup(containerEl, {
        animation: {
          effectsIn: 'fade translateZ(1000px)',
          effectsOut: 'fade translateZ(-1000px)',
          nudge: false,
          easing: "cubic-bezier(0.84, 0.00, 0.16, 1.00)",
          duration: 700
        }
      }); // fancybox insilaze & options //

      $("[data-fancybox]").fancybox({
        /* "TRICK" selector - group only visible items */
        selector: '.mix:visible a',
        toolbar: false,
        loop: true,
        hash: true,
        transitionEffect: "slide",
        protect: true,

        /* zoom VS next////////////////////
        clickContent - i modify the deafult - now when you click on the image you go to the next image - i more like this approach than zoom on desktop (This idea was in the classic/first lightbox) */
        clickContent: function (current, event) {
          return current.type === "image" ? "next" : false;
        }
      });
    });
  }

});
// CONCATENATED MODULE: ./pages/test.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_testvue_type_script_lang_js_ = (testvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/test.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(40)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_testvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "bc875d54",
  "5b6dfcee"
  
)

/* harmony default export */ var test = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=test.js.map