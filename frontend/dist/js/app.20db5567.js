(function(e){function n(n){for(var r,u,o=n[0],f=n[1],i=n[2],l=0,h=[];l<o.length;l++)u=o[l],Object.prototype.hasOwnProperty.call(a,u)&&a[u]&&h.push(a[u][0]),a[u]=0;for(r in f)Object.prototype.hasOwnProperty.call(f,r)&&(e[r]=f[r]);d&&d(n);while(h.length)h.shift()();return c.push.apply(c,i||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],r=!0,u=1;u<t.length;u++){var o=t[u];0!==a[o]&&(r=!1)}r&&(c.splice(n--,1),e=f(f.s=t[0]))}return e}var r={},u={app:0},a={app:0},c=[];function o(e){return f.p+"js/"+({}[e]||e)+"."+{"chunk-10fab2a1":"5f6092cb","chunk-5b2b4055":"d7c281ce","chunk-ebf00424":"482723dc","chunk-1e70aef4":"ae231f7e","chunk-2f270c66":"d0dbbb18","chunk-5e19fb72":"3ab9ab51","chunk-7c1eb72a":"56b7f788","chunk-7f1388fb":"aea64e46","chunk-9f35029c":"c98f3cf5","chunk-a9447804":"b13637a3"}[e]+".js"}function f(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,f),t.l=!0,t.exports}f.e=function(e){var n=[],t={"chunk-5b2b4055":1,"chunk-ebf00424":1,"chunk-2f270c66":1,"chunk-5e19fb72":1,"chunk-7c1eb72a":1,"chunk-7f1388fb":1,"chunk-9f35029c":1,"chunk-a9447804":1};u[e]?n.push(u[e]):0!==u[e]&&t[e]&&n.push(u[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-10fab2a1":"31d6cfe0","chunk-5b2b4055":"db33c660","chunk-ebf00424":"db33c660","chunk-1e70aef4":"31d6cfe0","chunk-2f270c66":"6891ba14","chunk-5e19fb72":"29abe21b","chunk-7c1eb72a":"f5b6e7b8","chunk-7f1388fb":"843666ac","chunk-9f35029c":"9bda02e4","chunk-a9447804":"06f38bf1"}[e]+".css",a=f.p+r,c=document.getElementsByTagName("link"),o=0;o<c.length;o++){var i=c[o],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===r||l===a))return n()}var h=document.getElementsByTagName("style");for(o=0;o<h.length;o++){i=h[o],l=i.getAttribute("data-href");if(l===r||l===a)return n()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=n,d.onerror=function(n){var r=n&&n.target&&n.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete u[e],d.parentNode.removeChild(d),t(c)},d.href=a;var s=document.getElementsByTagName("head")[0];s.appendChild(d)})).then((function(){u[e]=0})));var r=a[e];if(0!==r)if(r)n.push(r[2]);else{var c=new Promise((function(n,t){r=a[e]=[n,t]}));n.push(r[2]=c);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,f.nc&&l.setAttribute("nonce",f.nc),l.src=o(e);var h=new Error;i=function(n){l.onerror=l.onload=null,clearTimeout(d);var t=a[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.src;h.message="Loading chunk "+e+" failed.\n("+r+": "+u+")",h.name="ChunkLoadError",h.type=r,h.request=u,t[1](h)}a[e]=void 0}};var d=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(n)},f.m=e,f.c=r,f.d=function(e,n,t){f.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},f.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.t=function(e,n){if(1&n&&(e=f(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(f.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)f.d(t,r,function(n){return e[n]}.bind(null,r));return t},f.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return f.d(n,"a",n),n},f.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},f.p="/",f.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=n,i=i.slice();for(var h=0;h<i.length;h++)n(i[h]);var d=l;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";t("85ec")},"150b":function(e,n,t){},"199c":function(e,n){},"23be":function(e,n,t){"use strict";var r=t("199c"),u=t.n(r);n["default"]=u.a},"3dfd":function(e,n,t){"use strict";var r=t("7394"),u=t("23be"),a=(t("034f"),t("2877")),c=Object(a["a"])(u["default"],r["a"],r["b"],!1,null,null,null);n["default"]=c.exports},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),u=t("3dfd"),a=(t("d3b7"),t("3ca3"),t("ddb0"),t("8c4f"));r["default"].use(a["a"]);var c=[{path:"/login",name:"login",component:function(){return t.e("chunk-5e19fb72").then(t.bind(null,"1635"))}},{path:"/register",name:"register",component:function(){return t.e("chunk-7c1eb72a").then(t.bind(null,"b953"))}},{path:"/",redirect:"/home1"},{path:"/home1",name:"home1",component:function(){return t.e("chunk-2f270c66").then(t.bind(null,"1189"))}},{name:"404",path:"/404",component:function(){return t.e("chunk-a9447804").then(t.bind(null,"efd7"))}},{path:"/home",name:"home",component:function(){return t.e("chunk-7f1388fb").then(t.bind(null,"77b8"))},redirect:"/attendance",children:[{path:"/attendance",name:"Attendance",component:function(){return t.e("chunk-1e70aef4").then(t.bind(null,"738a"))}},{path:"/cashflow",name:"Cashflow",component:function(){return Promise.all([t.e("chunk-10fab2a1"),t.e("chunk-5b2b4055")]).then(t.bind(null,"b03f"))}},{path:"/marketing",name:"marketing",component:function(){return Promise.all([t.e("chunk-10fab2a1"),t.e("chunk-ebf00424")]).then(t.bind(null,"00c7"))}},{path:"/invoice",name:"invoice",component:function(){return t.e("chunk-9f35029c").then(t.bind(null,"987d"))}}]},{path:"*",redirect:"/404"}],o=new a["a"]({routes:c});o.beforeEach((function(e,n,t){if("/login"===e.path)return t();if("/register"===e.path)return t();var r=window.sessionStorage.getItem("token");return r?t():t("/login")}));var f=o,i=t("2f62");r["default"].use(i["a"]);var l=new i["a"].Store({state:{},mutations:{},actions:{},modules:{}}),h=t("5c96"),d=t.n(h),s=(t("0fae"),t("150b"),t("bc3a")),b=t.n(s);b.a.defaults.baseURL="http://iw.nyanbox.top/api/",r["default"].config.productionTip=!1,r["default"].use(d.a),r["default"].prototype.$http=b.a,new r["default"]({router:f,store:l,render:function(e){return e(u["default"])}}).$mount("#app")},7394:function(e,n,t){"use strict";t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return u}));var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},u=[]},"85ec":function(e,n,t){}});
//# sourceMappingURL=app.20db5567.js.map