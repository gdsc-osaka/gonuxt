(window.webpackJsonp=window.webpackJsonp||[]).push([[20,15],{433:function(t,e,o){"use strict";o.d(e,"a",(function(){return r}));o(71),o(33),o(14),o(5),o(13),o(78),o(96);var n=o(1);function r(t){return n.a.extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,o){var n=o.props,data=o.data,r=o.children;data.staticClass="".concat(t," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var d=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));d.length&&(data.staticClass+=" ".concat(d.join(" ")))}return n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),e(n.tag,data,r)}})}},435:function(t,e,o){var content=o(443);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(19).default)("cc9abda2",content,!0,{sourceMap:!1})},442:function(t,e,o){"use strict";o(435)},443:function(t,e,o){var n=o(18)(!1);n.push([t.i,".btn-container{opacity:0;transition:all .3s cubic-bezier(.39,.575,.565,1);position:fixed;right:-40px;bottom:32px;z-index:9}",""]),t.exports=n},444:function(t,e){t.exports=function(component,t){var e="function"==typeof component.exports?component.exports.extendOptions:component.options;for(var i in"function"==typeof component.exports&&(e.directives=component.exports.options.directives),e.directives=e.directives||{},t)e.directives[i]=e.directives[i]||t[i]}},445:function(t,e,o){"use strict";o.r(e);var n={name:"ScrollTopBtn",props:{color:{type:String,default:"warning"}},methods:{scrollTop:function(){window.scrollTo({top:0,behavior:"smooth"})},handleScroll:function(t,e,o){e=document.getElementById("btnmenu"),o=document.documentElement.scrollHeight-document.documentElement.clientHeight,window.scrollY>100&&window.scrollY<o-100?e.setAttribute("style","opacity: 1; transform: translate3d(-64px, 0, 0)"):e.setAttribute("style","opacity: 0;")}}},r=(o(442),o(65)),c=o(69),d=o.n(c),l=o(222),v=o(201),m=o(444),f=o.n(m),h=o(221),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{directives:[{name:"scroll",rawName:"v-scroll",value:t.handleScroll,expression:"handleScroll"}],staticClass:"btn-container",attrs:{id:"btnmenu"}},[o("v-btn",{attrs:{fab:"",elevation:"6",color:t.color},on:{click:t.scrollTop}},[o("v-icon",{attrs:{large:"",color:"white"}},[t._v("mdi-chevron-up")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:l.a,VIcon:v.a}),f()(component,{Scroll:h.b})},446:function(t,e,o){"use strict";o(14),o(5),o(13),o(78),o(33),o(297),o(218);var n=o(433),r=o(72);e.a=Object(n.a)("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var o,n=e.props,data=e.data,c=e.children,d=data.attrs;return d&&(data.attrs={},o=Object.keys(d).filter((function(t){if("slot"===t)return!1;var e=d[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,Object(r.a)(data,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(o||[])}),c)}})},473:function(t,e,o){var content=o(516);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(19).default)("01329d17",content,!0,{sourceMap:!1})},515:function(t,e,o){"use strict";o(473)},516:function(t,e,o){var n=o(18)(!1);n.push([t.i,".v-application .page-title[data-v-2620b6d2]{font-size:2.4rem;color:#b9b9b9;margin-bottom:0}.v-application .v-card[data-v-2620b6d2]{box-shadow:0 3px 11px 0 #e8eafc,0 3px 3px -2px hsla(0,0%,69.8%,.10196),0 1px 8px 0 hsla(0,0%,60.4%,.10196)!important}.v-application .v-card .v-card__title p[data-v-2620b6d2]{color:#6e6e6e;line-height:1.33;margin:0;font-size:20px;font-weight:400}.v-application .v-card .card-dark-grey[data-v-2620b6d2]{color:#4a4a4a!important}.v-application .v-card .card-light-grey[data-v-2620b6d2]{color:#6e6e6e!important}.v-application .v-navigation-drawer .v-navigation-drawer__content .v-list .v-list-item--active[data-v-2620b6d2]{background-color:#f3f5ff}.v-application .v-navigation-drawer .v-navigation-drawer__content .v-list .v-list-item--active[data-v-2620b6d2]:before{opacity:0}.v-application .v-navigation-drawer .v-navigation-drawer__content .v-list .v-list-item[data-v-2620b6d2]:hover{background-color:#f3f5ff}.v-application .v-navigation-drawer .v-navigation-drawer__content .v-list .v-list-item[data-v-2620b6d2]:hover:before{opacity:0}.v-application h1[data-v-2620b6d2]{font-size:3rem}.v-application h1[data-v-2620b6d2],.v-application h2[data-v-2620b6d2]{font-weight:400;margin-bottom:16px;line-height:1}.v-application h2[data-v-2620b6d2]{font-size:2rem}.v-application h3[data-v-2620b6d2]{font-size:1.64rem}.v-application h3[data-v-2620b6d2],.v-application h4[data-v-2620b6d2]{font-weight:400;margin-bottom:16px;line-height:1}.v-application h4[data-v-2620b6d2]{font-size:1.5rem}.v-application h5[data-v-2620b6d2]{font-size:1.285rem;font-weight:400;margin-bottom:16px}.v-application h6[data-v-2620b6d2]{font-size:1.142rem;font-weight:400;margin-bottom:16px}.mapContainer+footer.v-footer[data-v-2620b6d2]{display:none}.toasted-container .toasted[data-v-2620b6d2]{height:50px!important;box-shadow:none}.toasted-container .toasted.default[data-v-2620b6d2]{background:#536dfe!important}.toasted-container .toasted.error[data-v-2620b6d2]{background:#ff4081!important}.toasted-container .toasted.success[data-v-2620b6d2]{background:#3cd4a0!important}.toasted-container .toasted.info[data-v-2620b6d2]{background-color:#536dfe!important}.toasted-container .toasted.warning[data-v-2620b6d2]{background:#ffc260!important}.toasted-container .toasted .action[data-v-2620b6d2]{color:#6e6e6e}.gnt-sec-0[data-v-2620b6d2],.gnt-sec-1[data-v-2620b6d2]{flex:0 0 100%;max-width:100%}.gnt-sec-1[data-v-2620b6d2]{margin-top:5em;margin-bottom:5em}.gnt-sec-2[data-v-2620b6d2]{margin-top:4em;margin-bottom:4em}.gnt-sec-2[data-v-2620b6d2],.gnt-sec-3[data-v-2620b6d2]{flex:0 0 100%;max-width:100%}.gnt-sec-3[data-v-2620b6d2]{margin-top:3em;margin-bottom:3em}.gnt-sec-4[data-v-2620b6d2]{margin-top:2em;margin-bottom:2em}.gnt-sec-4[data-v-2620b6d2],.gnt-sec-5[data-v-2620b6d2]{flex:0 0 100%;max-width:100%}.gnt-sec-5[data-v-2620b6d2]{margin-top:1em;margin-bottom:1em}",""]),t.exports=n},633:function(t,e,o){"use strict";o.r(e);var n={name:"AccessA",data:function(){return{mapURL:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.360867873206!2d135.5222789155346!3d34.82201828421804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000fb60db96a653%3A0xf584717b6ac7c9ef!2z5aSn6Ziq5aSn5a2m!5e0!3m2!1sja!2sjp!4v1646917496927!5m2!1sja!2sjp",mapHeight:350}}},r=(o(515),o(65)),c=o(69),d=o.n(c),l=o(423),v=o(446),m=o(425),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"gnt-sec-2"},[o("v-container",[o("u",[o("h1",{staticClass:"pb-8 text-center"},[t._v("ACCESS")])]),t._v(" "),o("v-row",[o("v-col",{attrs:{cols:"12",sm:"6"}},[o("iframe",{staticStyle:{border:"0"},attrs:{src:t.mapURL,width:"100%",height:t.mapHeight,allowfullscreen:"",loading:"lazy"}})]),t._v(" "),o("v-col",{staticClass:"pt-8 pl-8",attrs:{cols:"12",sm:"6"}},[o("h2",[t._v("交通アクセス")]),t._v(" "),o("p",[t._v("阪急電車千里線「北千里駅」下車。東へ徒歩 約15分")]),t._v(" "),o("h2",[t._v("活動日")]),t._v(" "),o("p",[t._v("毎週 月・水・金")]),t._v(" "),o("h2",[t._v("連絡先")]),t._v(" "),o("p",[t._v("mail: 〇〇〇〇@gmail.com")]),t._v(" "),o("p",[t._v("tel: 012-3456-6789")])])],1)],1)],1)}),[],!1,null,"2620b6d2",null),f=component.exports;d()(component,{VCol:l.a,VContainer:v.a,VRow:m.a});var h={name:"AccessPage",components:{AccessA:f},head:{meta:[{hid:"og:title",property:"og:title",content:"List"},{hid:"og:description",property:"og:description",content:"GONuxTテンプレート一覧 (Access)"}]}},x=o(410),w=o(426),_=Object(r.a)(h,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-main",[o("ScrollTopBtn"),t._v(" "),o("section",{staticClass:"gnt-sec-2"},[o("v-row",[o("v-col",{staticClass:"text-center font-weight-bold",attrs:{cols:"12"}},[o("h1",[t._v("Template Showcase (Access)")])])],1)],1),t._v(" "),o("v-divider"),t._v(" "),o("section",{staticClass:"gnt-sec-2"},[o("v-row",[o("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[o("h2",[t._v("No.1 AccessA")])]),t._v(" "),o("AccessA")],1)],1),t._v(" "),o("v-divider")],1)}),[],!1,null,null,null);e.default=_.exports;d()(_,{ScrollTopBtn:o(445).default}),d()(_,{VCol:l.a,VDivider:x.a,VMain:w.a,VRow:m.a})}}]);