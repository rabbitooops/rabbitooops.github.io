(this["webpackJsonpcute-editor"]=this["webpackJsonpcute-editor"]||[]).push([[0],{12:function(e,t,n){e.exports={editable:"IntentSystem_editable__3bj95"}},16:function(e,t,n){e.exports=n(23)},21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var r,o,a,i=n(0),c=n.n(i),s=n(11),l=n.n(s),d=(n(21),n(2)),f=n(3),u=n(4),h=n(6);function v(){return Math.random().toString(36).substr(2)}function p(e){return function(e,t){for(var n=e;n;){var r=t(n);if(void 0!==r)return r;n=n.parentElement}}(e,(function(e){return"__ABSTRACT__"in e?e.__ABSTRACT__:void 0}))}function y(e,t){if(!e)throw new Error(t||"assert: ".concat(e))}function g(e,t){for(var n=e;n;){if(n===t)return t;n=n.parent}}function w(e,t){for(var n=[],r=e;r&&(n.push(r),r!==t);)r=r.parent;return n.reverse()}function b(e,t){if(e===t)return a.Same;var n=w(e),r=w(t);if(n[0]!==r[0])return a.Disconnected;for(var o=Math.min(n.length,r.length),i=0;i<o;i++){var c=n[i],s=r[i];if(c!==s){var l=n[i-1].abstractNodes;return y(l),l.indexOf(c)<=l.indexOf(s)?a.Following:a.Preceding}}return n.length<=r.length?a.ContainedBy:a.Contains}function k(e,t){var n,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o={},a=Object(h.a)(t);try{for(a.s();!(n=a.n()).done;){var i=n.value,c=e[i];r&&void 0===c||(o[i]=e[i])}}catch(s){a.e(s)}finally{a.f()}return o}!function(e){e[e.Doc=0]="Doc",e[e.List=1]="List",e[e.ListItem=2]="ListItem",e[e.Paragraph=3]="Paragraph",e[e.Text=4]="Text"}(r||(r={})),function(e){e[e.SelectionSynchronize=0]="SelectionSynchronize",e[e.SelectionRendering=1]="SelectionRendering",e[e.SelectionMove=2]="SelectionMove",e[e.SelectionTryMove=3]="SelectionTryMove",e[e.SelectionBlur=4]="SelectionBlur",e[e.TextStyle=5]="TextStyle",e[e.TextDelete=6]="TextDelete",e[e.TextDeleteBackward=7]="TextDeleteBackward",e[e.ContentReplace=8]="ContentReplace",e[e.TextEnter=9]="TextEnter",e[e.TextFormatStyle=10]="TextFormatStyle",e[e.TextQueryStyle=11]="TextQueryStyle"}(o||(o={})),function(e){e[e.Disconnected=0]="Disconnected",e[e.Same=1]="Same",e[e.Preceding=2]="Preceding",e[e.Following=3]="Following",e[e.Contains=4]="Contains",e[e.ContainedBy=5]="ContainedBy"}(a||(a={}));var x=n(14);function S(e,t){var n="function"===typeof t?t(e.data):t;(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(Object.is(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var r=Object.keys(e),o=Object.keys(t);if(n&&r.length!==o.length)return!1;for(var a=0,i=r;a<i.length;a++){var c=i[a];if(!Object.prototype.hasOwnProperty.call(t,c)||!Object.is(e[c],t[c]))return!1}return!0})(n,e.data,!0)||(e.data=n,e.render&&e.render(n))}function O(e,t,n,r,o){var i=Array.isArray(r)?r:r&&w(r,t),c=r===o?i:Array.isArray(o)?o:o&&w(o,t);y(!i||i[0]===t),y(!c||c[0]===t);var s=i,l=c;if(i&&c){var d=b(i[i.length-1],c[c.length-1]);if(d===a.Following&&!n.forward||d===a.Preceding&&n.forward){var f=[s,l];l=f[0],s=f[1]}}n.boundary1=s,n.boundary2=l,function e(t,n,r,o,a,i,c){n.depth=a;var s,l,d=n.index,f=r.abstractNodes,u=n.leftEdge,h=n.rightEdge,v=a+1;if(n.propagating&&!n.bailed&&f){var p=i&&v<i.length&&i[v],g=c&&v<c.length&&c[v];y(-1!==(s=p?f.indexOf(p):o?0:f.length-1)),y(-1!==(l=g?o?f.indexOf(g,s):f.lastIndexOf(g,s):o?f.length-1:0)),y(o?s<=l:l<=s)}n.leftEdge=u,n.rightEdge=h;var w=o?s:l,b=o?l:s;n.leftChildIndex=w,n.rightChildIndex=b;var k=t.call(r,n);if(void 0!==s&&void 0!==l){y(f);for(var x=n.leftEdge&&(o?s:l),S=n.rightEdge&&(o?l:s),O=s;!n.bailed&&(o?O<=l:O>=l);O=o?O+1:O-1)y(f[O].parent),n.index=O,O===x?n.leftEdge=!0:n.leftEdge&&(n.leftEdge=!1),O===S?n.leftEdge=!0:n.rightEdge&&(n.rightEdge=!1),e(t,n,f[O],o,v,O===s?i:void 0,O===l?c:void 0)}n.leftChildIndex=w,n.rightChildIndex=b,n.depth=a,n.index=d,k&&k.call(r),n.propagating=!0}(e,n,t,n.forward,0,s,l)}var j,m=function(){function e(t,n,r,o,a){Object(f.a)(this,e),this.root=t,this.forward=n,this.range=r,this.initiator=o,this.originEvent=a,this.propagating=!0,this.bailed=!1,this.depth=-1,this.index=-2,this.boundary1=void 0,this.boundary2=void 0,this.leftEdge=!0,this.rightEdge=!0,this.trace=void 0,this.returnValue=void 0,this.leftChildIndex=void 0,this.rightChildIndex=void 0}return Object(u.a)(e,[{key:"stopPropagation",value:function(){this.propagating=!1}},{key:"bail",value:function(){this.bailed=!0}}]),e}(),E=n(15),N=n(13),C=function(e){Object(E.a)(n,e);var t=Object(N.a)(n);function n(e,r,o,a,i,c,s){var l;return Object(f.a)(this,n),(l=t.call(this,e,o,i,c,s)).configs=a,l.type=void 0,l.payload=void 0,l.trace={},l.context=void 0,l.type=r.type,l.payload=r.payload,l}return n}(m);function F(){return j.Succuss}function T(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.some((function(t){return t===e.type}))?j.Succuss:j.Fail}}function D(e){if(null==e)return F;if("function"===typeof e)return e;for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return T.apply(void 0,[e].concat(n))}function B(e,t,n){var r=null;return O((function(e){switch(t(this)){case j.Succuss:r={node:this,index:e.index};case j.Bail:e.bail()}}),e,new m(e,n)),r}function M(e){return function(t){var n=e[this.type];if(n){var r=n.hook,o=n.browserHook,a=r&&r.call(this,t),i=o&&o.call(this,t,this.state);return a&&i?function(){i(),a()}:a||i||void 0}}}!function(e){e[e.Bail=-1]="Bail",e[e.Fail=0]="Fail",e[e.Succuss=1]="Succuss"}(j||(j={}));var A=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;Object(f.a)(this,e),this.current=t,this.index=n,this._parent=null;var r=(null===t||void 0===t?void 0:t.parent)||null;this._parent=r,y(n>=-1),-1!==n&&y(r&&r.abstractNodes&&n<r.abstractNodes.length&&this.current===r.abstractNodes[n])}return Object(u.a)(e,[{key:"sync",value:function(){var e;this._parent=(null===(e=this.current)||void 0===e?void 0:e.parent)||null;var t=this._parent,n=this.index,r=this.current;t?(y(r&&t.abstractNodes),t.abstractNodes[n]!==r&&(this.index=t.abstractNodes.indexOf(r),y(-1!==this.index))):this.index=-1}},{key:"prepare",value:function(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];var a=D.apply(void 0,[t].concat(r));return e&&this.sync(),a}},{key:"dispatchEvent",value:function(e,t){var n=t.initiator,r=t.range,o=t.forward,a=t.point1,i=t.point2,c=t.boundary1,s=t.boundary2,l=t.configs,f=t.originEvent,u=t.createCaptureCallback,h=this.current;if(h){for(var v={},p=0,y=Object.entries(l);p<y.length;p++){var g=Object(d.a)(y[p],2),w=g[0],b=g[1],k=b.hooks,x=b.browserHooks,S=k[e.type],j=x[e.type];(S||j)&&(v[w]={hook:S,browserHook:j})}var m=(u||M)(v),E=new C(h,e,o,l,r,n,f);return O(m,h,E,c||a,s||i),E.returnValue}}},{key:"is",value:function(e){return e(this.current)?this:R}},{key:"assert",value:function(e){return y(e(this.current)),this}},{key:"parent",value:function(t){if(!this.current)return this;for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];for(var a=this.prepare.apply(this,[!0,t].concat(r)),i=this.current.parent,c=R;i;){if(a(i)){c=new e(i);break}i=i.parent}return c}},{key:"find",value:function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];var a=this.prepare.apply(this,[!1,t].concat(r)),i=this.current&&B(this.current,a,!0);return i?new e(i.node,i.index):R}},{key:"findBackward",value:function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];var a=this.prepare.apply(this,[!1,t].concat(r)),i=this.current&&B(this.current,a,!1);return i?new e(i.node,i.index):R}},{key:"nextSibling",value:function(t){var n=this.current;if(!n)return this;for(var r=arguments.length,o=new Array(r>1?r-1:0),a=1;a<r;a++)o[a-1]=arguments[a];var i=this.prepare.apply(this,[!0,t].concat(o)),c=this._parent;if(c){y(c.abstractNodes);for(var s=this.index+1;s<c.abstractNodes.length;s++){var l=c.abstractNodes[s];if(i(l))return new e(l,s)}}return R}},{key:"prevSibling",value:function(t){var n=this.current;if(!n)return this;for(var r=arguments.length,o=new Array(r>1?r-1:0),a=1;a<r;a++)o[a-1]=arguments[a];var i=this.prepare.apply(this,[!0,t].concat(o)),c=this._parent;if(c){y(c.abstractNodes);for(var s=this.index-1;s>=0;s++){var l=c.abstractNodes[s];if(i(l))return new e(l,s)}}return R}},{key:"next",value:function(t){var n=this.current,r=this._parent;if(!n)return this;for(var o=arguments.length,a=new Array(o>1?o-1:0),i=1;i<o;i++)a[i-1]=arguments[i];var c=this.prepare.apply(this,[!0,t].concat(a));if(r){y(r.abstractNodes);for(var s=this.index+1;s<r.abstractNodes.length;s++){var l=r.abstractNodes[s],d=B(l,c,!0);if(d)return new e(d.node,d.index)}}return R}},{key:"prev",value:function(t){var n=this.current,r=this._parent;if(!n)return this;if(r){for(var o=arguments.length,a=new Array(o>1?o-1:0),i=1;i<o;i++)a[i-1]=arguments[i];var c=this.prepare.apply(this,[!0,t].concat(a));y(r.abstractNodes);for(var s=this.index-1;s>=0;s--){var l=r.abstractNodes[s],d=B(l,c,!1);if(d)return new e(d.node,d.index)}}return R}},{key:"only",value:function(){this.sync();var e=this._parent;return e&&e.abstractNodes&&1===e.abstractNodes.length?this:R}},{key:"assertOnly",value:function(){this.sync();var e=this._parent;return y(e&&e.abstractNodes&&1===e.abstractNodes.length),this}}]),e}(),R=new A(null);function V(e,t){return new A(e,t)}window.$=V;var L=function(){function e(t,n){Object(f.a)(this,e),this.node=t,this.offset=n}return Object(u.a)(e,null,[{key:"equals",value:function(e,t){return e===t||e.node===t.node&&e.offset===t.offset}}]),e}(),P=function(){function e(t,n){var r;switch(Object(f.a)(this,e),this.anchor=t,this.focus=n,this.collapsed=void 0,this.isForward=void 0,this.collapsed=L.equals(t,n),b(t.node,n.node)){case a.Same:r=t.offset<=n.offset;break;case a.Following:r=!0;break;case a.Preceding:r=!1;break;case a.Contains:r=0===n.offset;break;case a.ContainedBy:r=0===t.offset;break;default:throw new Error("Disconnect.")}this.isForward=r}return Object(u.a)(e,null,[{key:"equals",value:function(e,t){return e===t||e.collapsed===t.collapsed&&e.isForward===t.isForward&&L.equals(e.anchor,t.anchor)&&L.equals(e.focus,t.focus)}}]),e}(),_=function(){function e(t,n){Object(f.a)(this,e),this.configs=n,this.range=null,this.helper=void 0,this.helper=new A(t)}return Object(u.a)(e,[{key:"moveSelection",value:function(e,t,n){var r=this.range,a=this.helper,i=this.configs;if(!r)return!1;var c=r.anchor,s=r.focus,l=r.isForward,d=(r.collapsed,a.dispatchEvent({type:o.SelectionMove,payload:{shift:e,forward:t,step:n}},{range:r,forward:l,configs:i,point1:c.node,point2:s.node})||null);return this.updateRange(d)}},{key:"forward",value:function(e,t,n){return n.preventDefault(),this.moveSelection(e,!0,t)}},{key:"backward",value:function(e,t,n){return n.preventDefault(),this.moveSelection(e,!1,t)}},{key:"updateRange",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.getSelection();return!(this.range===e&&this.range&&e&&P.equals(this.range,e))&&(this.range=e,y(t),this.renderWindowSelection(t),!0)}},{key:"renderWindowSelection",value:function(e){var t=this.helper;if(this.range){var n=this.range,r=n.anchor,a=n.focus,i=n.isForward,c=t.dispatchEvent({type:o.SelectionRendering,payload:void 0},{range:this.range,forward:i,configs:this.configs,point1:r.node,point2:a.node});if(c){var s=c.anchorNode,l=c.anchorOffset,d=c.focusNode,f=c.focusOffset;return y(s&&null!=l&&d&&null!=f),void(s===e.anchorNode&&l===e.anchorOffset&&d===e.focusNode&&f===e.focusOffset||(e.collapse(s,l),e.extend(d,f)))}}(e.anchorNode||e.focusNode)&&e.removeAllRanges()}},{key:"synchronizeWindowSelection",value:function(){var e=window.getSelection();y(e);var t=e.anchorNode,n=e.anchorOffset,r=e.focusNode,i=e.focusOffset,c=e.isCollapsed;if(t&&r){var s=p(t),l=s&&t!==r?p(r):s;if(s&&l){var d=this.helper.current;if(y(d),g(s,d)&&g(l,d)){var f;switch(b(s,l)){case a.Same:f=n<=i;break;case a.Following:f=!0;break;case a.Preceding:f=!1;break;case a.Contains:f=0===i;break;case a.ContainedBy:f=0===n;break;default:throw new Error}var u=this.helper.dispatchEvent({type:o.SelectionSynchronize,payload:{isCollapsed:c,anchorNode:t,anchorOffset:n,focusNode:r,focusOffset:i,anchorAbstractNode:s,focusAbstractNode:l}},{range:this.range,forward:f,configs:this.configs,point1:s,point2:l})||null;this.updateRange(u,e)}}}else this.updateRange(null,e)}}]),e}(),W=n(8),z="undefined"!==typeof navigator&&/Mac OS X/.test(navigator.userAgent),I={Bold:"mod+b",Compose:["down","left","right","up","backspace","enter"],MoveBackward:"left",MoveForward:"right",MoveWordBackward:"ctrl+left",MoveWordForward:"ctrl+right",DeleteBackward:"shift?+backspace",DeleteForward:"shift?+delete",ExtendBackward:"shift+left",ExtendForward:"shift+right",Italic:"mod+i",SplitBlock:"shift?+enter",Undo:"mod+z"},K={MoveLineBackward:"opt+up",MoveLineForward:"opt+down",MoveWordBackward:"opt+left",MoveWordForward:"opt+right",DeleteBackward:["ctrl+backspace","ctrl+h"],DeleteForward:["ctrl+delete","ctrl+d"],DeleteLineBackward:"cmd+shift?+backspace",DeleteLineForward:["cmd+shift?+delete","ctrl+k"],DeleteWordBackward:"opt+shift?+backspace",DeleteWordForward:"opt+shift?+delete",ExtendLineBackward:"opt+shift+up",ExtendLineForward:"opt+shift+down",Redo:"cmd+shift+z",TransposeCharacter:"ctrl+t"},H={DeleteWordBackward:"ctrl+shift?+backspace",DeleteWordForward:"ctrl+shift?+delete",Redo:["ctrl+y","ctrl+shift+z"]};function U(e){var t=I[e],n=K[e],r=H[e],o=t&&Object(W.isKeyHotkey)(t),a=n&&Object(W.isKeyHotkey)(n),i=r&&Object(W.isKeyHotkey)(r);return function(e){return o&&o(e)||z&&a&&a(e)||!z&&i&&i(e)}}var q=U("Bold"),Q=(U("Compose"),U("MoveBackward")),J=U("MoveForward"),$=U("DeleteBackward"),X=U("DeleteForward"),G=(U("DeleteLineBackward"),U("DeleteLineForward"),U("DeleteWordBackward"),U("DeleteWordForward"),U("ExtendBackward")),Y=U("ExtendForward"),Z=(U("ExtendLineBackward"),U("ExtendLineForward"),U("Italic")),ee=(U("MoveLineBackward"),U("MoveLineForward"),U("MoveWordBackward"),U("MoveWordForward"),U("Redo"),U("SplitBlock")),te=(U("TransposeCharacter"),U("Undo"),n(12)),ne=n.n(te);function re(e){return function(t){var n,r,o=t.context,a=new oe(this,t,o);t.context=a;var i=e[this.type];if(i){var c=i.hook,s=i.browserHook;n=c&&c.call(this,t),r=s&&s.call(this,t,this.state)}return function(){r&&r.call(this),n&&n.call(this),a.replace(),t.context=o}}}var oe=function(){function e(t,n,r){Object(f.a)(this,e),this.current=t,this.event=n,this.parentContext=r,this.sliceNodes=[],this.replaced=!1}return Object(u.a)(e,[{key:"peek",value:function(){return this.sliceNodes.length?this.sliceNodes[this.sliceNodes.length-1]:void 0}},{key:"push",value:function(e){this.sliceNodes.push(e)}},{key:"replace",value:function(){if(!this.replaced){this.replaced=!0;var e=this.event,t=e.leftChildIndex,n=e.rightChildIndex;null!=t&&null!=n&&(y(t<=n),function(e,t,n,r){var o=e.abstractNodes,a=e.renderAbstractNodes;if(y(o),n!==r.length||!r.every((function(e,n){return e===o[t+n]}))){var i=o.slice();i.splice.apply(i,[t,n].concat(Object(x.a)(r))),e.abstractNodes=i.length?i:void 0,a&&a(e.abstractNodes)}}(this.current,t,n-t+1,this.sliceNodes))}}}]),e}(),ae=function(){function e(t,n){Object(f.a)(this,e),this.configs=n,this.helper=void 0,this.abstractSelection=void 0,this.helper=V(t),this.abstractSelection=new _(t,n),window.sel=this.abstractSelection}return Object(u.a)(e,[{key:"nextKeyUp",value:function(e){}},{key:"nextKeyDown",value:function(e){var t=this,n=this.abstractSelection,r=this.configs,a=this.helper,i=e.nativeEvent;if(y(a.current),J(i))console.log("forward"),n.forward(!1,1,i);else if(Q(i))console.log("backward"),n.backward(!1,1,i);else if(Y(i))console.log("extend forward"),n.forward(!0,1,i);else if(G(i))console.log("extend backward"),n.backward(!0,1,i);else if(q(i)||Z(i)){var c=q(i),s=Z(i),l=[];c&&(l.push("fontWeight"),console.log("bold")),s&&(l.push("fontStyle"),console.log("italic")),e.preventDefault();var f=this.abstractSelection.range;if(f){var u=f.anchor,h=f.focus,v=f.isForward,p=a.dispatchEvent({type:o.TextQueryStyle,payload:{keys:l}},{forward:!0,point1:u.node,point2:h.node,configs:this.configs});if(p){console.log(p);var g=void 0===p.fontWeight,w=void 0===p.fontStyle,b=v?[u,h]:[h,u],k=Object(d.a)(b,2),x=k[0],S=k[1],O=V(x.node).prevSibling().current||x.node,j=V(S.node).nextSibling().current||S.node,m={style:{},excludes:[]};O!==x.node&&m.excludes.push(O),j!==S.node&&m.excludes.push(j),c&&(m.style.fontWeight=g?600:void 0),s&&(m.style.fontStyle=w?"italic":void 0);var E=a.dispatchEvent({type:o.TextFormatStyle,payload:m},{forward:!0,range:f,point1:O,point2:j,configs:this.configs,createCaptureCallback:re});y(E),Promise.resolve().then((function(){t.abstractSelection.updateRange(E)}))}}}else if($(i)||X(i)){var N=!!X(i);console.log(N?"delete backward":"delete forward"),i.preventDefault();var C=this.abstractSelection.range;if(C){var F,T=C.isForward,D=C.collapsed,B=C.anchor,M=C.focus;if((F=D?a.dispatchEvent({type:o.SelectionMove,payload:{shift:!0,forward:N,step:1}},{range:C,forward:T,point1:B.node,point2:M.node,configs:this.configs}):C)&&!F.collapsed){var A=a.dispatchEvent({type:o.ContentReplace,payload:{key:""}},{range:F,forward:!0,point1:F.anchor.node,point2:F.focus.node,configs:r,originEvent:e,createCaptureCallback:re});y(A),Promise.resolve().then((function(){t.abstractSelection.updateRange(A)}))}}}else if(ee(i)){e.preventDefault();var R=n.range;if(R){var L=R.anchor,P=R.focus;R.isForward;a.dispatchEvent({type:o.TextEnter,payload:void 0},{range:R,forward:!0,point1:L.node,point2:P.node,configs:r})}}else if(!e.metaKey&&(32===e.keyCode||e.keyCode>=48&&e.keyCode<=90||e.keyCode>=186&&e.keyCode<=223)){console.log(e.key);var _=n.range;if(_){var W=_.anchor,z=_.focus;_.isForward;e.preventDefault();var I=a.dispatchEvent({type:o.ContentReplace,payload:{key:e.key}},{range:_,forward:!0,point1:W.node,point2:z.node,configs:r,originEvent:e,createCaptureCallback:re});y(I),Promise.resolve().then((function(){t.abstractSelection.updateRange(I)}))}}}},{key:"nextSelectionChange",value:function(){this.abstractSelection.synchronizeWindowSelection()}}]),e}();function ie(e){var t=e.editable,n=e.root,r=e.configs,o=e.children,a=function(e,t){return Object(i.useMemo)((function(){var n=new ae(e,t);return{nextKeyDown:n.nextKeyDown.bind(n),nextKeyUp:n.nextKeyUp.bind(n),nextSelectionChange:n.nextSelectionChange.bind(n)}}),[t,e])}(n,r),s=a.nextKeyDown,l=a.nextKeyUp,d=a.nextSelectionChange;return Object(i.useEffect)((function(){return document.addEventListener("selectionchange",d),function(){document.removeEventListener("selectionchange",d)}}),[d]),c.a.createElement("div",{className:ne.a.editable,spellCheck:!1,tabIndex:0,contentEditable:t,suppressContentEditableWarning:!0,onKeyDown:s,onKeyUp:l},o)}var ce,se,le=n(1),de={View:function(){return null}},fe=Object(i.createContext)({configs:(ce={},Object(le.a)(ce,r.Doc,de),Object(le.a)(ce,r.List,de),Object(le.a)(ce,r.ListItem,de),Object(le.a)(ce,r.Paragraph,de),Object(le.a)(ce,r.Text,de),ce)});function ue(e){var t=e.root,n=e.configs,r=Object(i.useMemo)((function(){return{configs:n}}),[n]),o=t.type,a=n[o].View;return c.a.createElement(fe.Provider,{value:r},c.a.createElement(a,{key:t.id,context:t}))}function he(e){var t=Object(i.useRef)(null);return Object(i.useLayoutEffect)((function(){t.current&&(t.current.__ABSTRACT__=e)}),[e]),t}function ve(e){var t=Object(i.useContext)(fe).configs,n=Object(i.useState)(e.abstractNodes),r=Object(d.a)(n,2),o=r[0],a=r[1];return Object(i.useLayoutEffect)((function(){return e.renderAbstractNodes=a,function(){e.renderAbstractNodes=void 0}}),[e]),Object(i.useMemo)((function(){return o?o.map((function(e){var n=t[e.type].View;return c.a.createElement(n,{key:e.id,context:e})})):null}),[o,t])}function pe(e){var t=Object(i.useState)(e.data),n=Object(d.a)(t,2),r=n[0],o=n[1];return Object(i.useLayoutEffect)((function(){return e.render=o,function(){e.render=void 0}}),[e]),r}var ye,ge={View:function(e){var t=e.context,n=he(t);return c.a.createElement("div",{ref:n},ve(t))},hooks:{},browserHooks:(se={},Object(le.a)(se,o.SelectionSynchronize,(function(e){return function(){var t=e.trace.selection;t&&t.anchorPoint&&t.focusPoint&&(e.returnValue=new P(t.anchorPoint,t.focusPoint))}})),Object(le.a)(se,o.SelectionRendering,(function(e){return function(){var t=e.trace.windowSelection;t&&t.anchorNode&&null!=t.anchorOffset&&t.focusNode&&null!=t.focusOffset&&(e.returnValue=t)}})),se)};var we=Object(le.a)({},o.SelectionSynchronize,(function(e){var t=e.payload;t.anchorAbstractNode===this||t.focusAbstractNode}));var be,ke,xe={View:function(e){var t=e.context,n=he(t),r=pe(t),o=ve(t);return c.a.createElement("div",{ref:n,style:{textAlign:r&&r.align}},o)},hooks:(ye={},Object(le.a)(ye,o.ContentReplace,(function(e){var t=e.context;return function(){y(t),t.replace(),this.abstractNodes&&t.parentContext.push(this)}})),Object(le.a)(ye,o.TextFormatStyle,(function(e){var t=e.context;return function(){y(t),t.replace(),this.abstractNodes&&t.parentContext.push(this)}})),ye),browserHooks:we},Se=n(9);function Oe(e){var t=e.id,n=void 0===t?v():t,o=e.data,a=e.parent;return{type:r.Text,id:n,data:o,parent:a}}function je(e,t){var n=e.data.style,r=t.data.style;return!n&&!r||(null===n||void 0===n?void 0:n.color)===(null===r||void 0===r?void 0:r.color)&&(null===n||void 0===n?void 0:n.fontFamily)===(null===r||void 0===r?void 0:r.fontFamily)&&(null===n||void 0===n?void 0:n.fontSize)===(null===r||void 0===r?void 0:r.fontSize)&&(null===n||void 0===n?void 0:n.fontStyle)===(null===r||void 0===r?void 0:r.fontStyle)&&(null===n||void 0===n?void 0:n.fontWeight)===(null===r||void 0===r?void 0:r.fontWeight)&&(null===n||void 0===n?void 0:n.textDecoration)===(null===r||void 0===r?void 0:r.textDecoration)}function me(e){var t=e.context,n=pe(t),r=n.content,o=n.style,a=he(t);return function(e,t){Object(i.useLayoutEffect)((function(){return e.state=t,function(){e.state=void 0}}),[e,t])}(t,Object(i.useMemo)((function(){return{ref:a}}),[a])),c.a.createElement("span",{ref:a,style:o},r.replace(/ /g,"\xa0"))}function Ee(e,t,n){var o=e.parentContext,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:Oe({data:t,parent:n});y(o);var i=o.peek();return S(a,t),i&&i.type===r.Text&&je(i,a)?(S(i,(function(e){return{content:e.content+t.content,style:e.style}})),i):(o.push(a),a)}me.displayName="TextView";for(var Ne,Ce={View:c.a.memo(me,(function(){return!0})),hooks:(be={},Object(le.a)(be,o.SelectionMove,(function(e){y(e.range);var t=e.range,n=t.anchor,r=t.focus,a=t.isForward,i=t.collapsed,c=e.payload,s=c.forward,l=c.shift,d=c.step;if(r.node===this){var f;if(!l&&!i){var u=s===a?r:n;if(!s&&0===u.offset){var h=V(e.root).dispatchEvent({type:o.SelectionTryMove,payload:{step:0,forward:!1}},{initiator:u.node,point1:u.node,forward:!1,configs:e.configs});h&&(u=h)}return void(e.returnValue=new P(u,u))}if(s){var v=this.data.content.length-r.offset-d;if(v>=0)f=new L(this,r.offset+d);else f=V(e.root).dispatchEvent({type:o.SelectionTryMove,payload:{step:-v,forward:!0}},{initiator:this,point1:this,forward:!0,configs:e.configs})||new L(this,this.data.content.length)}else{var p=r.offset-d;if(p>0||l&&0===p)f=new L(this,p);else f=V(e.root).dispatchEvent({type:o.SelectionTryMove,payload:{step:-p,forward:!1}},{initiator:this,point1:this,forward:!1,configs:e.configs})||new L(this,0)}var g=l?n:f;if(l&&(s?n.offset===n.node.data.content.length:0===n.offset)){var w=V(e.root).dispatchEvent({type:o.SelectionTryMove,payload:{step:0,forward:s}},{initiator:n.node,point1:n.node,forward:s,configs:e.configs});w&&(g=w)}console.log(g,f),e.returnValue=new P(g,f)}})),Object(le.a)(be,o.SelectionTryMove,(function(e){var t=e.payload,n=t.forward,r=t.step,o=e.initiator;y(o),this!==o?(e.payload.step=Math.max(0,r-this.data.content.length),0===e.payload.step&&(e.returnValue=new L(this,n?r:this.data.content.length-r),e.bail())):e.stopPropagation()})),Object(le.a)(be,o.ContentReplace,(function(e){y(e.range);var t=e.range,n=t.anchor,r=t.focus,a=t.isForward,i=n.node===this,c=r.node===this;if(i||c){var s,l,d=this.data.content;a?(s=i?n.offset:0,l=c?r.offset:d.length):(s=i&&!c?0:r.offset,l=c&&!i?d.length:n.offset),y(s<=l);var f=a?i:c,u=f?e.payload.key:"",h=Array.from(d);h.splice(s,l-s,u);var v=h.join("");S(this,(function(e){var t=e.style;return{content:v,style:t}}));var p=e.context;if(p&&v){if(p.parentContext.push(this),f){var g=new L(this,s+u.length);if(0===g.offset){var w=V(e.root).dispatchEvent({type:o.SelectionTryMove,payload:{step:0,forward:!1}},{initiator:this,point1:this,forward:!1,configs:e.configs});w&&(g=w)}e.returnValue=new P(g,g)}}else if(f){var b=V(e.root).dispatchEvent({type:o.SelectionTryMove,payload:{step:0,forward:!1}},{initiator:this,point1:this,forward:!1,configs:e.configs});b||(b=V(e.root).dispatchEvent({type:o.SelectionTryMove,payload:{step:0,forward:!0}},{initiator:this,point1:this,forward:!0,configs:e.configs})),y(b),e.returnValue=new P(b,b)}}})),Object(le.a)(be,o.TextEnter,(function(e){console.log("enter")})),Object(le.a)(be,o.TextQueryStyle,(function(e){var t=this.data.style,n=e.payload;if(!t)return e.returnValue={},void e.bail();void 0===e.returnValue&&(e.returnValue=k(t,n.keys,!0),n.keys=Object.keys(e.returnValue));var r,o=e.returnValue,a=n.keys,i=!1,c=Object(h.a)(a);try{for(c.s();!(r=c.n()).done;){var s=r.value;t[s]!==o[s]&&(o[s]=void 0,i||(i=!0))}}catch(l){c.e(l)}finally{c.f()}i&&(e.returnValue=k(o,a,!0),n.keys=Object.keys(e.returnValue),n.keys.length||e.bail())})),Object(le.a)(be,o.TextFormatStyle,(function(e){var t,n,r=this.data,o=r.content,a=r.style,i=e.payload,c=e.context,s=e.range;y(c&&s);var l,f,u,h,v=s.anchor,p=s.focus,g=s.isForward;if(!s.collapsed&&(v.node===this||p.node===this)){var w=v.node===this?v:void 0,b=p.node===this?p:void 0,k=g?[w,b]:[b,w],x=Object(d.a)(k,2);u=x[0],h=x[1],u&&u.offset>0&&(l=o.slice(0,u.offset)),h&&h.offset<o.length&&(f=o.slice(h.offset))}var S=l||f?o.slice(null===(t=u)||void 0===t?void 0:t.offset,null===(n=h)||void 0===n?void 0:n.offset):o;l&&Ee(c,{content:l,style:a},this.parent);var O=Ee(c,-1!==i.excludes.indexOf(this)?this.data:{content:S,style:Object(Se.a)(Object(Se.a)({},a),i.style)},this.parent,this),j=f?Ee(c,{content:f,style:a},this.parent):void 0;if(u||h){var m,E,N=e.returnValue,C=u&&new L(O,O.data.content.length-S.length),F=h&&new L(O,O.data.content.length-(j===O?f.length:0));g?(m=C||(null===N||void 0===N?void 0:N.anchor)||F,E=F||(null===N||void 0===N?void 0:N.focus)||C):(m=F||(null===N||void 0===N?void 0:N.anchor)||C,E=C||(null===N||void 0===N?void 0:N.focus)||F),e.returnValue=new P(m,E)}})),be),browserHooks:(ke={},Object(le.a)(ke,o.SelectionSynchronize,(function(e){var t=this.state.ref,n=e.payload;if(n.anchorAbstractNode===this||n.focusAbstractNode===this){var r,o=null===(r=t.current)||void 0===r?void 0:r.firstChild;if(o){var a=e.trace.selection||{anchorPoint:void 0,focusPoint:void 0};e.trace.selection=a,n.anchorNode===o&&(a.anchorPoint=new L(this,n.anchorOffset)),n.focusNode===o&&(a.focusPoint=new L(this,n.focusOffset))}}})),Object(le.a)(ke,o.SelectionRendering,(function(e){var t=this.state.ref,n=e.range;if(y(n),n.anchor.node===this||n.focus.node===this){var r,o=null===(r=t.current)||void 0===r?void 0:r.firstChild;if(o){var a=e.trace.windowSelection||{anchorNode:void 0,anchorOffset:void 0,focusNode:void 0,focusOffset:void 0};e.trace.windowSelection=a,n.anchor.node===this&&(a.anchorNode=o,a.anchorOffset=n.anchor.offset),n.focus.node===this&&(a.focusNode=o,a.focusOffset=n.focus.offset)}}})),ke)},Fe=(Ne={},Object(le.a)(Ne,r.Doc,ge),Object(le.a)(Ne,r.List,{View:function(e){var t=function(e){var t=Object(i.useContext)(fe).configs,n=Object(i.useState)(e.abstractNodes),r=Object(d.a)(n,2),o=r[0],a=r[1];return e.renderAbstractNodes=a,Object(i.useMemo)((function(){return o?o.map((function(e){var n=t[e.type].View;return c.a.createElement(n,{key:e.id,context:e})})):null}),[o,t])}(e.context);return c.a.createElement("div",null,t)},hooks:{},browserHooks:{}}),Object(le.a)(Ne,r.ListItem,{View:function(e){var t=e.context,n=pe(t).order,r=ve(t);return c.a.createElement("div",{style:{display:"flex"}},c.a.createElement("div",{style:{display:"flex",flexDirection:"row",alignItems:"baseline"}},c.a.createElement("div",{contentEditable:!1,style:{userSelect:"none",paddingRight:5}},n,"."),r))},hooks:{},browserHooks:{}}),Object(le.a)(Ne,r.Paragraph,xe),Object(le.a)(Ne,r.Text,Ce),Ne),Te=Oe({data:{content:"0123456789",style:{color:"darkred",fontSize:60}}}),De=Oe({data:{content:"0123456789",style:{color:"red",fontSize:80}}}),Be=Oe({data:{content:"0123456789",style:{color:"green",fontSize:70}}}),Me=[],Ae=new URLSearchParams(document.location.search),Re=+(Ae.get("size")||0)/2,Ve=0;Ve<Re;Ve++)Me.push(Oe({data:{content:"0123456789",style:{color:"red",fontSize:80}}})),Me.push(Oe({data:{content:"0123456789",style:{color:"green",fontSize:70}}}));"true"!==Ae.get("log")&&(window.console._log=window.console.log,window.console.log=function(){});var Le={type:r.Paragraph,id:v(),data:void 0,abstractNodes:[Te,De,Be].concat(Me)},Pe={type:r.Doc,id:v(),data:void 0,abstractNodes:[Le]};function _e(e){var t=e.editable,n=void 0===t||t,r=e.abstractNode,o=void 0===r?Pe:r,a=e.configs,i=void 0===a?Fe:a;return window.root=o,c.a.createElement(ie,{editable:n,root:o,configs:i},c.a.createElement(ue,{root:o,configs:i}))}!function e(t){var n=t.abstractNodes;if(n){var r,o=Object(h.a)(n);try{for(o.s();!(r=o.n()).done;){var a=r.value;a.parent=t,e(a)}}catch(i){o.e(i)}finally{o.f()}}}(Pe);n(22);var We=function(){var e=Object(i.useState)(null),t=Object(d.a)(e,2),n=t[0],r=t[1];return Object(i.useEffect)((function(){setTimeout((function(){r(c.a.createElement(_e,null))}),200)}),[]),n};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(We,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.a09f39da.chunk.js.map