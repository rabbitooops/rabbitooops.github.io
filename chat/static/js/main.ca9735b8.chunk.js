(this.webpackJsonpchat=this.webpackJsonpchat||[]).push([[0],{151:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(18),i=n.n(o),c=(n(87),n(81)),l=n(76),u=n.n(l),s=(n(88),n(89),n(32)),d=new s.c;function f(e){var t=e.name,n=e.bgColor;return r.a.createElement("div",{style:{backgroundColor:n,color:"#fff",borderRadius:"50%",width:40,height:40,textAlign:"center",lineHeight:0,fontSize:30,display:"flex",flexShrink:0}},r.a.createElement("div",{style:{margin:"auto"}},t.substr(0,1).toUpperCase()))}function m(e){var t=e.msg,n=e.img,a=t||r.a.createElement("img",{src:n.src,style:{width:n.width,height:n.height}});return r.a.createElement("div",{style:{padding:"10px",backgroundColor:"#adcbf1",borderRadius:"10px",margin:"0 10px",maxWidth:"60%"}},a)}var g={0:function(e){var t=e.data,n=e.self,a=e.style,o=e.ref;return r.a.createElement("div",{ref:o,style:a},r.a.createElement("div",{style:{display:"flex",padding:"5px 0",flexDirection:n===t.author?"row-reverse":""}},r.a.createElement(f,{name:t.author,bgColor:n===t.author?"#3ece53":"#2cb9d9"}),r.a.createElement(m,{msg:t.msg,img:t.img})))},1:function(e){var t=e.data,n=e.style,a=e.ref;return r.a.createElement("div",{ref:a,style:n},r.a.createElement("div",{style:{display:"flex",padding:"5px 0"}},r.a.createElement("div",{style:{margin:"auto",padding:"5px 8px",borderRadius:"10px",backgroundColor:"#e1e1e1"}},t.msg)))}};function h(e){var t=e.list,n=e.self,o=Object(a.useRef)(null),i=function(e,t,n){return Object(a.useCallback)((function(a){var o=a.index,i=a.key,c=a.parent,l=a.style,u=e[o],f=u.type,m=u.data,g=n[f];return r.a.createElement(s.b,{cache:d,columnIndex:0,key:i,rowIndex:o,parent:c},(function(e){var n=e.registerChild;return r.a.createElement(g,{self:t,data:m,ref:n,style:l})}))}),[e,t,n])}(t,n,g);return Object(a.useLayoutEffect)((function(){var e=o.current;e.scrollTop=e.offsetHeight}),[]),r.a.createElement("div",{className:"chat",ref:o},r.a.createElement(s.a,null,(function(e){var n=e.height,a=e.width;return r.a.createElement(s.d,{height:n,width:a,deferredMeasurementCache:d,overscanColumnCount:0,rowCount:t.length,rowHeight:d.rowHeight,rowRenderer:i,scrollToIndex:t.length-1})})))}var p=["\u8fd9\u662f\u4e00\u6bb5\u5e9f\u8bdd","\u8fd9\u662f\u53e6\u4e00\u6bb5\u5e9f\u8bdd","\u8fd9\u662f\u7b2c\u4e09\u6bb5\u5e9f\u8bdd","\u8fd9\u662f\u7b2c\u56db\u53e5\u5e9f\u8bdd","\u518d\u8bf4\u4e00\u53e5\u5e9f\u8bdd","\u52a0\u6cb9","\u5dee\u4e0d\u591a\u4e86\u628a","\u6765\u4e00\u6bb5\u957f\u957f\u7684\u5e9f\u8bdd\uff01\u6765\u4e00\u6bb5\u957f\u957f\u7684\u5e9f\u8bdd\uff01\u6765\u4e00\u6bb5\u957f\u957f\u7684\u5e9f\u8bdd\uff01\u6765\u4e00\u6bb5\u957f\u957f\u7684\u5e9f\u8bdd\uff01\u6765\u4e00\u6bb5\u957f\u957f\u7684\u5e9f\u8bdd\uff01\u6765\u4e00\u6bb5\u957f\u957f\u7684\u5e9f\u8bdd\uff01\u6765\u4e00\u6bb5\u957f\u957f\u7684\u5e9f\u8bdd\uff01\u6765\u4e00\u6bb5\u957f\u957f\u7684\u5e9f\u8bdd\uff01\u6765\u4e00\u6bb5\u957f\u957f\u7684\u5e9f\u8bdd\uff01\u6765\u4e00\u6bb5\u957f\u957f\u7684\u5e9f\u8bdd\uff01\u6765\u4e00\u6bb5\u957f\u957f\u7684\u5e9f\u8bdd\uff01\u6765\u4e00\u6bb5\u957f\u957f\u7684\u5e9f\u8bdd\uff01","\u6765\u4e00\u6bb5\u957f\u957f\u7684\u5e9f\u8bdd again!\u6765\u4e00\u6bb5\u957f\u957f\u7684\u5e9f\u8bdd again!\u6765\u4e00\u6bb5\u957f\u957f\u7684\u5e9f\u8bdd again!\u6765\u4e00\u6bb5\u957f\u957f\u7684\u5e9f\u8bdd again!\u6765\u4e00\u6bb5\u957f\u957f\u7684\u5e9f\u8bdd again!\u6765\u4e00\u6bb5\u957f\u957f\u7684\u5e9f\u8bdd again!","\u597d\u4e86\uff0c\u5c31\u8fd9\u6837\u628a","\u62dc\u62dc"];function v(e,t){return Array.from({length:t},(function(){return e[(1e3*Math.random()>>0)%e.length]}))}var y=["\u8fd9\u662f\u4e00\u4e2a\u5f88\u4e25\u8083\u7684\u7cfb\u7edf\u6d88\u606f","\u4f60\u5df2\u88ab\u79fb\u9664\u7fa4\u7ec4","\u6211\u662f\u4e00\u4e2a\u7cfb\u7edf\u6d88\u606f","\u7cfb\u7edf\u6d88\u606f\u5dee\u4e0d\u591a\u4e86"];var E=function(){var e=Object(a.useState)([]),t=Object(c.a)(e,2),n=t[0],o=t[1];return Object(a.useEffect)((function(){new Promise((function(e){setTimeout((function(){var t=v(p,600).map((function(e,t){return{type:0,data:{msg:t%50>5?e:void 0,img:t%50<=5?{src:u.a,height:150}:void 0,author:t<250?"oops":"yoo"}}})),n=v(y,50).map((function(e){return{type:1,data:{msg:e}}}));e(t.concat(n).sort((function(){return Math.random()-.5})))}),100)})).then((function(e){return o(e)}))}),[]),r.a.createElement("div",null,n.length&&r.a.createElement(h,{self:"oops",list:n}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},76:function(e,t,n){e.exports=n.p+"static/media/github-mark.09f5c6ae.png"},82:function(e,t,n){e.exports=n(151)},87:function(e,t,n){},88:function(e,t,n){}},[[82,1,2]]]);
//# sourceMappingURL=main.ca9735b8.chunk.js.map