(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{262:function(t,e,n){var content=n(407);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("1b7833da",content,!0,{sourceMap:!1})},405:function(t,e,n){t.exports=n.p+"img/test.670ca36.png"},406:function(t,e,n){"use strict";var o=n(262);n.n(o).a},407:function(t,e,n){(e=n(50)(!1)).push([t.i,'.container{margin:0 auto;min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center}.title{font-family:"Quicksand","Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}',""]),t.exports=e},420:function(t,e,n){"use strict";n.r(e);n(405);var o={transition:"bounce",computed:{blogPosts:function(){return this.$store.state.blogPosts}},data:function(){return{title:"Hello World!"}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:"My custom description"},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:"Vue Social Cards Example"},{name:"twitter:description",content:"Vue sample site showing off Twitter and Facebook Cards."},{name:"twitter:image",content:"/test.png"},{property:"og:title",content:"Vue Social Cards Example"},{property:"og:site_name",content:"Vue Example"},{property:"og:type",content:"website"},{property:"og:image",content:"/test.png"},{property:"og:description",content:"Vue sample site showing off Twitter and Facebook Cards."}]}}},r=(n(406),n(30)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Blog Posts")]),t._v(" "),n("div",{staticClass:"blogs"},t._l(t.blogPosts,(function(e){return n("ul",{key:e.slug,staticClass:"blog"},[n("li",{staticClass:"blog__title"},[n("nuxt-link",{attrs:{to:"/blog/"+e.slug}},[n("h2",[t._v(t._s(e.title))])])],1)])})),0)])}),[],!1,null,null,null);e.default=component.exports}}]);