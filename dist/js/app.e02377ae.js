(function(e){function t(t){for(var r,o,c=t[0],s=t[1],u=t[2],l=0,d=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function c(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-17bc2355":"3f0f610d","chunk-2d21d18e":"ca877adf"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-17bc2355":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-17bc2355":"ea0b1567","chunk-2d21d18e":"31d6cfe0"}[e]+".css",a=s.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===a))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===r||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],f.parentNode.removeChild(f),n(i)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",{attrs:{id:"inspire"}},[r("v-navigation-drawer",{attrs:{app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[r("v-list-item",[r("v-list-item-content",[r("v-list-item-title",{staticClass:"text-h6"},[e._v(" Vue.js ")]),r("v-list-item-subtitle",[e._v(" Lista de Tarefas ")])],1)],1),r("v-divider"),r("v-list",{attrs:{dense:"",nav:""}},e._l(e.items,(function(t){return r("v-list-item",{key:t.title,attrs:{to:t.to,link:""}},[r("v-list-item-icon",[r("v-icon",[e._v(e._s(t.icon))])],1),r("v-list-item-content",[r("v-list-item-title",[e._v(e._s(t.title))])],1)],1)})),1)],1),r("v-app-bar",{attrs:{app:"",color:"#fcb69f",dark:"",prominent:"",src:n("82d1")},scopedSlots:e._u([{key:"img",fn:function(t){var n=t.props;return[r("v-img",e._b({attrs:{gradient:"to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"}},"v-img",n,!1))]}}])},[r("v-app-bar-nav-icon",{on:{click:function(t){e.drawer=!e.drawer}}}),r("v-app-bar-title",[e._v("Lista de Tarefas")]),r("v-spacer"),r("v-btn",{attrs:{icon:""}},[r("v-icon",[e._v("mdi-magnify")])],1),r("v-btn",{attrs:{icon:""}},[r("v-icon",[e._v("mdi-heart")])],1),r("v-btn",{attrs:{icon:""}},[r("v-icon",[e._v("mdi-dots-vertical")])],1)],1),r("v-main",[r("router-view")],1)],1)},a=[],i={data:function(){return{drawer:!1,items:[{title:"Tarefas",icon:"mdi-view-dashboard",to:"/"},{title:"Sobre",icon:"mdi-image",to:"/sobre"}]}}},c=i,s=n("2877"),u=n("6544"),l=n.n(u),d=n("7496"),f=n("40dc"),p=n("5bc1"),v=n("bb78"),m=n("8336"),h=n("ce7e"),g=n("132d"),b=n("adda"),w=n("8860"),y=n("da13"),k=n("5d23"),_=n("34c3"),V=n("f6c4"),T=n("f774"),j=n("2fa4"),S=Object(s["a"])(c,o,a,!1,null,null,null),O=S.exports;l()(S,{VApp:d["a"],VAppBar:f["a"],VAppBarNavIcon:p["a"],VAppBarTitle:v["a"],VBtn:m["a"],VDivider:h["a"],VIcon:g["a"],VImg:b["a"],VList:w["a"],VListItem:y["a"],VListItemContent:k["a"],VListItemIcon:_["a"],VListItemSubtitle:k["b"],VListItemTitle:k["c"],VMain:V["a"],VNavigationDrawer:T["a"],VSpacer:j["a"]});var A=n("9483");Object(A["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7"),n("3ca3"),n("ddb0");var L=n("8c4f");r["a"].use(L["a"]);var I=[{path:"/",name:"Tarefas",component:function(){return n.e("chunk-17bc2355").then(n.bind(null,"25f9"))}},{path:"/sobre",name:"Sobre",component:function(){return n.e("chunk-2d21d18e").then(n.bind(null,"d09e"))}}],x=new L["a"]({mode:"history",base:"/",routes:I}),C=x,E=(n("4de4"),n("2f62"));r["a"].use(E["a"]);var N=new E["a"].Store({state:{tarefas:[{id:1,titulo:"Ir ao mercado",concluido:!1},{id:2,titulo:"Comprar Ração",concluido:!0}]},mutations:{adicionaTarefa:function(e,t){t&&(e.tarefas.push({id:(new Date).getTime(),titulo:t,concluido:!1}),this.campoInput=null)},removeTarefa:function(e,t){e.tarefas=e.tarefas.filter((function(e){return e.id!==t}))}},actions:{},modules:{}}),P=n("f309");r["a"].use(P["a"]);var B=new P["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:C,store:N,vuetify:B,render:function(e){return e(O)}}).$mount("#app")},"82d1":function(e,t,n){e.exports=n.p+"img/bg-parking.0f558ff0.jpg"}});
//# sourceMappingURL=app.e02377ae.js.map