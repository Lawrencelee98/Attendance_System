(function(e){function n(n){for(var r,a,c=n[0],i=n[1],f=n[2],l=0,h=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&h.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(n);while(h.length)h.shift()();return u.push.apply(u,f||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],r=!0,a=1;a<t.length;a++){var c=t[a];0!==o[c]&&(r=!1)}r&&(u.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},a={app:0},o={app:0},u=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-10fab2a1":"5f6092cb","chunk-5b2b4055":"893c22cf","chunk-ebf00424":"86402f2c","chunk-1e70aef4":"a289c3fd","chunk-23212aa9":"a2973bbd","chunk-38d39e07":"d4e50be0","chunk-594eed2e":"8ae52025","chunk-7c1eb72a":"3522c984","chunk-a9447804":"f0a1a7fa"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-5b2b4055":1,"chunk-ebf00424":1,"chunk-23212aa9":1,"chunk-38d39e07":1,"chunk-594eed2e":1,"chunk-7c1eb72a":1,"chunk-a9447804":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-10fab2a1":"31d6cfe0","chunk-5b2b4055":"db33c660","chunk-ebf00424":"db33c660","chunk-1e70aef4":"31d6cfe0","chunk-23212aa9":"b33b8230","chunk-38d39e07":"0060e207","chunk-594eed2e":"8b9e110d","chunk-7c1eb72a":"6ae5ad3d","chunk-a9447804":"520b5531"}[e]+".css",o=i.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var f=u[c],l=f.getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(l===r||l===o))return n()}var h=document.getElementsByTagName("style");for(c=0;c<h.length;c++){f=h[c],l=f.getAttribute("data-href");if(l===r||l===o)return n()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=n,d.onerror=function(n){var r=n&&n.target&&n.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],d.parentNode.removeChild(d),t(u)},d.href=o;var s=document.getElementsByTagName("head")[0];s.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)n.push(r[2]);else{var u=new Promise((function(n,t){r=o[e]=[n,t]}));n.push(r[2]=u);var f,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(e);var h=new Error;f=function(n){l.onerror=l.onload=null,clearTimeout(d);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;h.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",h.name="ChunkLoadError",h.type=r,h.request=a,t[1](h)}o[e]=void 0}};var d=setTimeout((function(){f({type:"timeout",target:l})}),12e4);l.onerror=l.onload=f,document.head.appendChild(l)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],l=f.push.bind(f);f.push=n,f=f.slice();for(var h=0;h<f.length;h++)n(f[h]);var d=l;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";t("85ec")},"150b":function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},o=[],u=(t("034f"),t("2877")),c={},i=Object(u["a"])(c,a,o,!1,null,null,null),f=i.exports,l=(t("d3b7"),t("3ca3"),t("ddb0"),t("8c4f"));r["default"].use(l["a"]);var h=[{path:"/login",name:"login",component:function(){return t.e("chunk-23212aa9").then(t.bind(null,"1635"))}},{path:"/register",name:"register",component:function(){return t.e("chunk-7c1eb72a").then(t.bind(null,"b953"))}},{path:"/",redirect:"/home1"},{path:"/home1",name:"home1",component:function(){return t.e("chunk-38d39e07").then(t.bind(null,"1189"))}},{name:"404",path:"/404",component:function(){return t.e("chunk-a9447804").then(t.bind(null,"efd7"))}},{path:"/home",name:"home",component:function(){return t.e("chunk-594eed2e").then(t.bind(null,"77b8"))},redirect:"/attendance",children:[{path:"/attendance",name:"Attendance",component:function(){return t.e("chunk-1e70aef4").then(t.bind(null,"738a"))}},{path:"/cashflow",name:"Cashflow",component:function(){return Promise.all([t.e("chunk-10fab2a1"),t.e("chunk-5b2b4055")]).then(t.bind(null,"b03f"))}},{path:"/marketing",name:"marketing",component:function(){return Promise.all([t.e("chunk-10fab2a1"),t.e("chunk-ebf00424")]).then(t.bind(null,"00c7"))}}]},{path:"*",redirect:"/404"}],d=new l["a"]({routes:h});d.beforeEach((function(e,n,t){if("/login"===e.path)return t();if("/register"===e.path)return t();var r=window.sessionStorage.getItem("token");return r?t():t("/login")}));var s=d,p=t("2f62");r["default"].use(p["a"]);var b=new p["a"].Store({state:{},mutations:{},actions:{},modules:{}}),m=t("5c96"),k=t.n(m),g=(t("0fae"),t("150b"),t("bc3a")),v=t.n(g);v.a.defaults.baseURL="http://iw.nyanbox.top/api/",r["default"].config.productionTip=!1,r["default"].use(k.a),r["default"].prototype.$http=v.a,new r["default"]({router:s,store:b,render:function(e){return e(f)}}).$mount("#app")},"85ec":function(e,n,t){}});
//# sourceMappingURL=app.f99ba0e4.js.map