(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{261:function(t,e,n){var content=n(398);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(38).default)("11aa2c8e",content,!0,{sourceMap:!1})},397:function(t,e,n){"use strict";var o=n(261);n.n(o).a},398:function(t,e,n){(e=n(37)(!1)).push([t.i,'.container{margin:0 auto;min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center}.title{font-family:"Quicksand","Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}',""]),t.exports=e},415:function(t,e,n){"use strict";n.r(e);var o="https://aidanmurphy.netlify.app",r={transition:"bounce",computed:{blogPosts:function(){return this.$store.state.blogPosts}},data:function(){return{title:"Hello World!",metaImage:o+"/blog.png"}},head:function(){return{title:this.title,meta:[{hid:"og:title",name:"og:title",content:"Aidan Murphy - Blog"},{hid:"og:description",name:"og:description",content:"Aidan Murphy - Blog - Web, Motion & Graphic Design all in one place, made for Streamers!"},{hid:"twitter:card",name:"twitter:card",content:"summary_large_image"},{hid:"twitter:title",name:"twitter:title",content:"Aidan Murphy - Blog"},{hid:"twitter:description",name:"twitter:description",content:"Aidan Murphy - Blog - Web, Motion & Graphic Design all in one place, made for Streamers!"},{property:"og:url",content:o},{hid:"twitter:image",name:"twitter:image",content:this.metaImage},{property:"og:title",content:"Aidan Murphy - Blogs"},{property:"og:site_name",content:"Aidan Murphy - Portfolio"},{property:"og:type",content:"website"},{property:"og:image",content:"/blog.png"},{property:"og:description",content:"Aidan Murphy - Blog - Web, Motion & Graphic Design all in one place, made for Streamers!"}]}}},l=(n(397),n(33)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Blog Posts")]),t._v(" "),n("div",{staticClass:"blogs"},t._l(t.blogPosts,(function(e){return n("ul",{key:e.slug,staticClass:"blog"},[n("li",{staticClass:"blog__title"},[n("nuxt-link",{attrs:{to:"/blog/"+e.slug}},[n("h2",[t._v(t._s(e.title))])])],1)])})),0)])}),[],!1,null,null,null);e.default=component.exports}}]);