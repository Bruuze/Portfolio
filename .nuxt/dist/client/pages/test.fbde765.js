(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{398:function(t,n,e){var content=e(402);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(32).default)("15fe488e",content,!0,{sourceMap:!1})},401:function(t,n,e){"use strict";var r=e(398);e.n(r).a},402:function(t,n,e){(n=e(31)(!1)).push([t.i,"body[data-v-bc875d54]{max-width:1180px;margin:0 auto;padding:5px}.mixitup-control-active[data-v-bc875d54]{color:#fff;background:#000}.mix[data-v-bc875d54]{margin:5px}ul.container[data-v-bc875d54]{list-style-type:none;margin:0}li[data-v-bc875d54]{display:inline-block}",""]),t.exports=n},413:function(t,n,e){"use strict";e.r(n);e(26);var r=e(4),o={transition:"bounce",asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function n(){var e,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.$content,n.next=3,e("onscreen").fetch();case 3:return r=n.sent,n.abrupt("return",{posts:r});case 5:case"end":return n.stop()}}),n)})))()},data:function(){return{mixer:null}},mounted:function(){this.$nextTick((function(){var t=document.querySelector("ul.container");mixitup(t,{animation:{effectsIn:"fade translateZ(1000px)",effectsOut:"fade translateZ(-1000px)",nudge:!1,easing:"cubic-bezier(0.84, 0.00, 0.16, 1.00)",duration:700}});$("[data-fancybox]").fancybox({selector:".mix:visible a",toolbar:!1,loop:!0,hash:!0,transitionEffect:"slide",protect:!0,clickContent:function(t,n){return"image"===t.type&&"next"}})}))}},c=(e(401),e(11)),component=Object(c.a)(o,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",[this._m(0),this._v(" "),this._m(1),this._v(" "),n("br"),this._v(" "),n("ul",{staticClass:"container "},this._l(this.posts,(function(t){return n("li",{key:t.slug,staticClass:"mix",class:t.type},[n("a",{attrs:{title:t.title,href:t.imgLarge,itemprop:"contentUrl ","data-size":"1200x600 "}},[n("img",{attrs:{src:t.imgSmall,itemprop:"thumbnail ",alt:"Image description "}})])])})),0)])}),[function(){var t=this.$createElement,n=this._self._c||t;return n("h1",[n("a",{attrs:{target:"_blank",href:"https://www.kunkalabs.com/mixitup/"}},[this._v("MixItUp-3 sorting")]),this._v(" & "),n("a",{attrs:{target:"_blank",href:"http://fancyapps.com/fancybox/3/"}},[this._v("FancyBox-3 Lightbox")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("nav",{staticClass:"controls "},[e("button",{staticClass:"control ",attrs:{type:"button ","data-filter":"all"}},[t._v("All")]),t._v(" "),e("button",{staticClass:"control ",attrs:{type:"button ","data-filter":".logo "}},[t._v("Logo")]),t._v(" "),e("button",{staticClass:"control ",attrs:{type:"button ","data-filter":".blue "}},[t._v("Blue")]),t._v(" "),e("button",{staticClass:"control ",attrs:{type:"button ","data-filter":".tink "}},[t._v("Pink")]),t._v(" "),e("button",{staticClass:"control ",attrs:{type:"button ","data-filter":"none "}},[t._v("None")])])}],!1,null,"bc875d54",null);n.default=component.exports}}]);