(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Juyh:function(t,n,e){"use strict";e.r(n);var r=e("ln6h"),o=e.n(r),u=e("eVuF"),a=e.n(u);function s(t,n,e,r,o,u,s){try{var i=t[u](s),c=i.value}catch(f){return void e(f)}i.done?n(c):a.a.resolve(c).then(r,o)}var i=e("hfKm"),c=e.n(i);function f(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),c()(t,r.key,r)}}var l=e("XVgq"),p=e.n(l),d=e("Z7t5"),h=e.n(d);function v(t){return(v="function"===typeof h.a&&"symbol"===typeof p.a?function(t){return typeof t}:function(t){return t&&"function"===typeof h.a&&t.constructor===h.a&&t!==h.a.prototype?"symbol":typeof t})(t)}function w(t){return(w="function"===typeof h.a&&"symbol"===v(p.a)?function(t){return v(t)}:function(t){return t&&"function"===typeof h.a&&t.constructor===h.a&&t!==h.a.prototype?"symbol":v(t)})(t)}function y(t,n){return!n||"object"!==w(n)&&"function"!==typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}var b=e("Bhuq"),m=e.n(b),g=e("TRZx"),_=e.n(g);function x(t){return(x=_.a?m.a:function(t){return t.__proto__||m()(t)})(t)}var C=e("SqZg"),T=e.n(C);function P(t,n){return(P=_.a||function(t,n){return t.__proto__=n,t})(t,n)}var k=e("q1tI"),E=e.n(k),q=e("5Yp1"),R=e("zgjP"),j=e.n(R),J=e("Y0NT");e.d(n,"default",function(){return N});var L=E.a.createElement,N=function(t){function n(){return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),y(this,x(n).apply(this,arguments))}var e,r,u;return function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=T()(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&P(t,n)}(n,k["Component"]),e=n,r=[{key:"render",value:function(){var t=this.props,n=t.user,e=t.statusCode;return e?L(J.default,{statusCode:e}):L(q.a,{title:"About"},L("p",null,n.name),L("img",{src:n.avatar_url,alt:"Me",height:"200px"}))}}],u=[{key:"getInitialProps",value:function(){var t,n=(t=o.a.mark(function t(){var n,e,r;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j()("https://api.github.com/users/reedbarger");case 2:return n=t.sent,e=n.status>200&&n.status,t.next=6,n.json();case 6:return r=t.sent,t.abrupt("return",{user:r,statusCode:e});case 8:case"end":return t.stop()}},t)}),function(){var n=this,e=arguments;return new a.a(function(r,o){var u=t.apply(n,e);function a(t){s(u,r,o,a,i,"next",t)}function i(t){s(u,r,o,a,i,"throw",t)}a(void 0)})});return function(){return n.apply(this,arguments)}}()}],r&&f(e.prototype,r),u&&f(e,u),n}()},Y0NT:function(t,n,e){"use strict";e.r(n);var r=e("q1tI"),o=e.n(r),u=e("5Yp1"),a=o.a.createElement;n.default=function(t){var n=t.statusCode;return a(u.a,{title:"Error!!!"},n?"Could not load your user data: status code ".concat(n):"Couldn't get that page, sorry!",a("p",null))}},"m/Gl":function(t,n,e){"use strict";e.r(n),n.default=function(t,n){return n=n||{},new Promise(function(e,r){var o=new XMLHttpRequest,u=[],a=[],s={},i=function(){return{ok:2==(o.status/100|0),statusText:o.statusText,status:o.status,url:o.responseURL,text:function(){return Promise.resolve(o.responseText)},json:function(){return Promise.resolve(JSON.parse(o.responseText))},blob:function(){return Promise.resolve(new Blob([o.response]))},clone:i,headers:{keys:function(){return u},entries:function(){return a},get:function(t){return s[t.toLowerCase()]},has:function(t){return t.toLowerCase()in s}}}};for(var c in o.open(n.method||"get",t,!0),o.onload=function(){o.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(t,n,e){u.push(n=n.toLowerCase()),a.push([n,e]),s[n]=s[n]?s[n]+","+e:e}),e(i())},o.onerror=r,o.withCredentials="include"==n.credentials,n.headers)o.setRequestHeader(c,n.headers[c]);o.send(n.body||null)})}},rB5V:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return e("Juyh")}])},zgjP:function(t,n,e){t.exports=window.fetch||(window.fetch=e("m/Gl").default||e("m/Gl"))}},[["rB5V",1,0]]]);