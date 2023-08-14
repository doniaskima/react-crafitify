import n from"react";import t,{keyframes as e}from"styled-components";function r(n,t,e){if(e||2===arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return n.concat(r||Array.prototype.slice.call(t))}function o(n,t){return Object.defineProperty?Object.defineProperty(n,"raw",{value:t}):n.raw=t,n}"function"==typeof SuppressedError&&SuppressedError;var a,i,s,c,l,f,u,p,d,m,y,b,g,h,v,x,w=e(a||(a=o(["\n  0%, 10%, 20%, 30%, 50%, 60%, 70%, 80%, 90%, 100% {\n    transform: rotate(calc(var(--rotation) * 1deg)) translate(0, calc(var(--translation) * 1%));\n  }\n  50% {\n    transform: rotate(calc(var(--rotation) * 1deg)) translate(0, calc(var(--translation) * 1.5%));\n  }\n"],["\n  0%, 10%, 20%, 30%, 50%, 60%, 70%, 80%, 90%, 100% {\n    transform: rotate(calc(var(--rotation) * 1deg)) translate(0, calc(var(--translation) * 1%));\n  }\n  50% {\n    transform: rotate(calc(var(--rotation) * 1deg)) translate(0, calc(var(--translation) * 1.5%));\n  }\n"]))),E=t.div(i||(i=o(["\n  position: absolute;\n  width: 9px;\n  height: 9px;\n"],["\n  position: absolute;\n  width: 9px;\n  height: 9px;\n"]))),S=t.div(s||(s=o(["\n  position: absolute;\n  width: 50%;\n  height: 150%;\n  background: ",";\n  transform: rotate(calc(var(--rotation) * 1deg)) translate(0, calc(var(--translation) * 1%));\n  animation: "," 1s calc(var(--delay) * 1s) infinite ease;\n"],["\n  position: absolute;\n  width: 50%;\n  height: 150%;\n  background: ",";\n  transform: rotate(calc(var(--rotation) * 1deg)) translate(0, calc(var(--translation) * 1%));\n  animation: "," 1s calc(var(--delay) * 1s) infinite ease;\n"])),(function(n){return n.color||"#000000"}),w),O=function(t){var e=t.color;return n.createElement(E,{className:"spinner"},r([],Array(10),!0).map((function(t,r){return n.createElement(S,{key:r,color:e,style:{"--delay":.1*(r+1),"--rotation":36*(r+1),"--translation":150}})})))},k=e(c||(c=o(["\n  0% {\n    transform: scale(1) rotate(0);\n  }\n  20%, 25% {\n    transform: scale(1.3) rotate(90deg);\n  }\n  45%, 50% {\n    transform: scale(1) rotate(180deg);\n  }\n  70%, 75% {\n    transform: scale(1.3) rotate(270deg);\n  }\n  95%, 100% {\n    transform: scale(1) rotate(360deg);\n  }\n"],["\n  0% {\n    transform: scale(1) rotate(0);\n  }\n  20%, 25% {\n    transform: scale(1.3) rotate(90deg);\n  }\n  45%, 50% {\n    transform: scale(1) rotate(180deg);\n  }\n  70%, 75% {\n    transform: scale(1.3) rotate(270deg);\n  }\n  95%, 100% {\n    transform: scale(1) rotate(360deg);\n  }\n"]))),j=t.div(l||(l=o(["\n  --dim: 3rem;\n  width: var(--dim);\n  height: var(--dim);\n  position: relative;\n  animation: "," 2s linear infinite;\n"],["\n  --dim: 3rem;\n  width: var(--dim);\n  height: var(--dim);\n  position: relative;\n  animation: "," 2s linear infinite;\n"])),k),C=t.div(f||(f=o(["\n  --dim: 1.2rem;\n  width: var(--dim);\n  height: var(--dim);\n  background-color: ",";\n  border-radius: 50%;\n  position: absolute;\n"],["\n  --dim: 1.2rem;\n  width: var(--dim);\n  height: var(--dim);\n  background-color: ",";\n  border-radius: 50%;\n  position: absolute;\n"])),(function(n){return n.color||"#333"})),N=t(C)(u||(u=o(["\n  top: 0;\n  left: 0;\n"],["\n  top: 0;\n  left: 0;\n"]))),X=t(C)(p||(p=o(["\n  top: 0;\n  right: 0;\n"],["\n  top: 0;\n  right: 0;\n"]))),$=t(C)(d||(d=o(["\n  bottom: 0;\n  left: 0;\n"],["\n  bottom: 0;\n  left: 0;\n"]))),T=t(C)(m||(m=o(["\n  bottom: 0;\n  right: 0;\n"],["\n  bottom: 0;\n  right: 0;\n"]))),P=function(t){var e=t.color,r=t.className;return n.createElement(j,{className:r},n.createElement(N,{color:e}),n.createElement(X,{color:e}),n.createElement($,{color:e}),n.createElement(T,{color:e}))},_=e(y||(y=o(["\n  0% {\n    background-color: #69717d;\n  }\n\n  100% {\n    background-color: transparent;\n  }\n"],["\n  0% {\n    background-color: #69717d;\n  }\n\n  100% {\n    background-color: transparent;\n  }\n"]))),z=t.div(b||(b=o(["\n  font-size: 28px;\n  position: relative;\n  display: inline-block;\n  width: 1em;\n  height: 1em;\n\n  &.center {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    margin: auto;\n  }\n"],["\n  font-size: 28px;\n  position: relative;\n  display: inline-block;\n  width: 1em;\n  height: 1em;\n\n  &.center {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    margin: auto;\n  }\n"]))),I=t.div(g||(g=o(["\n  position: absolute;\n  left: 0.4629em;\n  bottom: 0;\n  width: 0.074em;\n  height: 0.2777em;\n  border-radius: 0.0555em;\n  background-color: transparent;\n  transform-origin: center -0.2222em;\n  animation: "," 1s infinite linear;\n\n  ","\n\n  ","\n"],["\n  position: absolute;\n  left: 0.4629em;\n  bottom: 0;\n  width: 0.074em;\n  height: 0.2777em;\n  border-radius: 0.0555em;\n  background-color: transparent;\n  transform-origin: center -0.2222em;\n  animation: "," 1s infinite linear;\n\n  ","\n\n  ","\n"])),_,(function(n){return n.index&&"\n    animation-delay: ".concat(.083*n.index,"s;\n    transform: rotate(").concat(30*n.index,"deg);\n  ")}),(function(n){return n.color&&"\n    background-color: ".concat(n.color,";\n  ")})),A=function(t){var e=t.color,o=t.center;return n.createElement(z,{className:"spinner ".concat(o?"center":"")},r([],Array(12),!0).map((function(t,r){return n.createElement(I,{key:r,index:r+1,style:{backgroundColor:e}})})))},R=e(h||(h=o(["\n  0%, 100% {\n    transform: scale(0);\n    opacity: 0.5;\n  }\n  50% {\n    transform: scale(1);\n    opacity: 1;\n  }\n"],["\n  0%, 100% {\n    transform: scale(0);\n    opacity: 0.5;\n  }\n  50% {\n    transform: scale(1);\n    opacity: 1;\n  }\n"]))),F=t.div(v||(v=o(["\n  --uib-size: 2.8rem;\n  --uib-speed: 0.9s;\n  --uib-color: ",";\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  height: var(--uib-size);\n  width: var(--uib-size);\n"],["\n  --uib-size: 2.8rem;\n  --uib-speed: 0.9s;\n  --uib-color: ",";\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  height: var(--uib-size);\n  width: var(--uib-size);\n"])),(function(n){return n.color||"#183153"})),M=t.div(x||(x=o(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  height: 100%;\n  width: 100%;\n\n  &::before {\n    content: '';\n    height: 20%;\n    width: 20%;\n    border-radius: 50%;\n    background-color: var(--uib-color);\n    transform: scale(0);\n    opacity: 0.5;\n    animation: "," calc(var(--uib-speed) * 1.111) ease-in-out infinite;\n    box-shadow: 0 0 20px rgba(18, 31, 53, 0.3);\n  }\n};"],["\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  height: 100%;\n  width: 100%;\n\n  &::before {\n    content: '';\n    height: 20%;\n    width: 20%;\n    border-radius: 50%;\n    background-color: var(--uib-color);\n    transform: scale(0);\n    opacity: 0.5;\n    animation: "," calc(var(--uib-speed) * 1.111) ease-in-out infinite;\n    box-shadow: 0 0 20px rgba(18, 31, 53, 0.3);\n  }\n};"])),R),V=function(t){var e=t.className,r=t.color;return n.createElement(F,{className:e,color:r},n.createElement(M,null),n.createElement(M,{style:{transform:"rotate(45deg)"}}),n.createElement(M,{style:{transform:"rotate(90deg)"}}),n.createElement(M,{style:{transform:"rotate(135deg)"}}),n.createElement(M,{style:{transform:"rotate(180deg)"}}),n.createElement(M,{style:{transform:"rotate(225deg)"}}),n.createElement(M,{style:{transform:"rotate(270deg)"}}),n.createElement(M,{style:{transform:"rotate(315deg)"}}))};function Y(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var D,L={exports:{}},W={exports:{}},q={};var U,Z,B,J,H,G,K,Q,nn,tn,en,rn,on,an,sn={};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function cn(){return Z||(Z=1,"production"===process.env.NODE_ENV?W.exports=function(){if(D)return q;D=1;var n="function"==typeof Symbol&&Symbol.for,t=n?Symbol.for("react.element"):60103,e=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,o=n?Symbol.for("react.strict_mode"):60108,a=n?Symbol.for("react.profiler"):60114,i=n?Symbol.for("react.provider"):60109,s=n?Symbol.for("react.context"):60110,c=n?Symbol.for("react.async_mode"):60111,l=n?Symbol.for("react.concurrent_mode"):60111,f=n?Symbol.for("react.forward_ref"):60112,u=n?Symbol.for("react.suspense"):60113,p=n?Symbol.for("react.suspense_list"):60120,d=n?Symbol.for("react.memo"):60115,m=n?Symbol.for("react.lazy"):60116,y=n?Symbol.for("react.block"):60121,b=n?Symbol.for("react.fundamental"):60117,g=n?Symbol.for("react.responder"):60118,h=n?Symbol.for("react.scope"):60119;function v(n){if("object"==typeof n&&null!==n){var p=n.$$typeof;switch(p){case t:switch(n=n.type){case c:case l:case r:case a:case o:case u:return n;default:switch(n=n&&n.$$typeof){case s:case f:case m:case d:case i:return n;default:return p}}case e:return p}}}function x(n){return v(n)===l}return q.AsyncMode=c,q.ConcurrentMode=l,q.ContextConsumer=s,q.ContextProvider=i,q.Element=t,q.ForwardRef=f,q.Fragment=r,q.Lazy=m,q.Memo=d,q.Portal=e,q.Profiler=a,q.StrictMode=o,q.Suspense=u,q.isAsyncMode=function(n){return x(n)||v(n)===c},q.isConcurrentMode=x,q.isContextConsumer=function(n){return v(n)===s},q.isContextProvider=function(n){return v(n)===i},q.isElement=function(n){return"object"==typeof n&&null!==n&&n.$$typeof===t},q.isForwardRef=function(n){return v(n)===f},q.isFragment=function(n){return v(n)===r},q.isLazy=function(n){return v(n)===m},q.isMemo=function(n){return v(n)===d},q.isPortal=function(n){return v(n)===e},q.isProfiler=function(n){return v(n)===a},q.isStrictMode=function(n){return v(n)===o},q.isSuspense=function(n){return v(n)===u},q.isValidElementType=function(n){return"string"==typeof n||"function"==typeof n||n===r||n===l||n===a||n===o||n===u||n===p||"object"==typeof n&&null!==n&&(n.$$typeof===m||n.$$typeof===d||n.$$typeof===i||n.$$typeof===s||n.$$typeof===f||n.$$typeof===b||n.$$typeof===g||n.$$typeof===h||n.$$typeof===y)},q.typeOf=v,q}():W.exports=(U||(U=1,"production"!==process.env.NODE_ENV&&function(){var n="function"==typeof Symbol&&Symbol.for,t=n?Symbol.for("react.element"):60103,e=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,o=n?Symbol.for("react.strict_mode"):60108,a=n?Symbol.for("react.profiler"):60114,i=n?Symbol.for("react.provider"):60109,s=n?Symbol.for("react.context"):60110,c=n?Symbol.for("react.async_mode"):60111,l=n?Symbol.for("react.concurrent_mode"):60111,f=n?Symbol.for("react.forward_ref"):60112,u=n?Symbol.for("react.suspense"):60113,p=n?Symbol.for("react.suspense_list"):60120,d=n?Symbol.for("react.memo"):60115,m=n?Symbol.for("react.lazy"):60116,y=n?Symbol.for("react.block"):60121,b=n?Symbol.for("react.fundamental"):60117,g=n?Symbol.for("react.responder"):60118,h=n?Symbol.for("react.scope"):60119;function v(n){if("object"==typeof n&&null!==n){var p=n.$$typeof;switch(p){case t:var y=n.type;switch(y){case c:case l:case r:case a:case o:case u:return y;default:var b=y&&y.$$typeof;switch(b){case s:case f:case m:case d:case i:return b;default:return p}}case e:return p}}}var x=c,w=l,E=s,S=i,O=t,k=f,j=r,C=m,N=d,X=e,$=a,T=o,P=u,_=!1;function z(n){return v(n)===l}sn.AsyncMode=x,sn.ConcurrentMode=w,sn.ContextConsumer=E,sn.ContextProvider=S,sn.Element=O,sn.ForwardRef=k,sn.Fragment=j,sn.Lazy=C,sn.Memo=N,sn.Portal=X,sn.Profiler=$,sn.StrictMode=T,sn.Suspense=P,sn.isAsyncMode=function(n){return _||(_=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),z(n)||v(n)===c},sn.isConcurrentMode=z,sn.isContextConsumer=function(n){return v(n)===s},sn.isContextProvider=function(n){return v(n)===i},sn.isElement=function(n){return"object"==typeof n&&null!==n&&n.$$typeof===t},sn.isForwardRef=function(n){return v(n)===f},sn.isFragment=function(n){return v(n)===r},sn.isLazy=function(n){return v(n)===m},sn.isMemo=function(n){return v(n)===d},sn.isPortal=function(n){return v(n)===e},sn.isProfiler=function(n){return v(n)===a},sn.isStrictMode=function(n){return v(n)===o},sn.isSuspense=function(n){return v(n)===u},sn.isValidElementType=function(n){return"string"==typeof n||"function"==typeof n||n===r||n===l||n===a||n===o||n===u||n===p||"object"==typeof n&&null!==n&&(n.$$typeof===m||n.$$typeof===d||n.$$typeof===i||n.$$typeof===s||n.$$typeof===f||n.$$typeof===b||n.$$typeof===g||n.$$typeof===h||n.$$typeof===y)},sn.typeOf=v}()),sn)),W.exports}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/function ln(){if(J)return B;J=1;var n=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,e=Object.prototype.propertyIsEnumerable;return B=function(){try{if(!Object.assign)return!1;var n=new String("abc");if(n[5]="de","5"===Object.getOwnPropertyNames(n)[0])return!1;for(var t={},e=0;e<10;e++)t["_"+String.fromCharCode(e)]=e;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(n){return t[n]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(n){r[n]=n})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(n){return!1}}()?Object.assign:function(r,o){for(var a,i,s=function(n){if(null==n)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(n)}(r),c=1;c<arguments.length;c++){for(var l in a=Object(arguments[c]))t.call(a,l)&&(s[l]=a[l]);if(n){i=n(a);for(var f=0;f<i.length;f++)e.call(a,i[f])&&(s[i[f]]=a[i[f]])}}return s},B}function fn(){if(G)return H;G=1;return H="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}function un(){return Q?K:(Q=1,K=Function.call.bind(Object.prototype.hasOwnProperty))}if("production"!==process.env.NODE_ENV){var pn=cn();L.exports=function(){if(rn)return en;rn=1;var n=cn(),t=ln(),e=fn(),r=un(),o=function(){if(tn)return nn;tn=1;var n=function(){};if("production"!==process.env.NODE_ENV){var t=fn(),e={},r=un();n=function(n){var t="Warning: "+n;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(n){}}}function o(o,a,i,s,c){if("production"!==process.env.NODE_ENV)for(var l in o)if(r(o,l)){var f;try{if("function"!=typeof o[l]){var u=Error((s||"React class")+": "+i+" type `"+l+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof o[l]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw u.name="Invariant Violation",u}f=o[l](a,l,s,i,null,t)}catch(n){f=n}if(!f||f instanceof Error||n((s||"React class")+": type specification of "+i+" `"+l+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof f+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),f instanceof Error&&!(f.message in e)){e[f.message]=!0;var p=c?c():"";n("Failed "+i+" type: "+f.message+(null!=p?p:""))}}}return o.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(e={})},nn=o}(),a=function(){};function i(){return null}return"production"!==process.env.NODE_ENV&&(a=function(n){var t="Warning: "+n;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(n){}}),en=function(s,c){var l="function"==typeof Symbol&&Symbol.iterator,f="@@iterator",u="<<anonymous>>",p={array:b("array"),bigint:b("bigint"),bool:b("boolean"),func:b("function"),number:b("number"),object:b("object"),string:b("string"),symbol:b("symbol"),any:y(i),arrayOf:function(n){return y((function(t,r,o,a,i){if("function"!=typeof n)return new m("Property `"+i+"` of component `"+o+"` has invalid PropType notation inside arrayOf.");var s=t[r];if(!Array.isArray(s))return new m("Invalid "+a+" `"+i+"` of type `"+v(s)+"` supplied to `"+o+"`, expected an array.");for(var c=0;c<s.length;c++){var l=n(s,c,o,a,i+"["+c+"]",e);if(l instanceof Error)return l}return null}))},element:y((function(n,t,e,r,o){var a=n[t];return s(a)?null:new m("Invalid "+r+" `"+o+"` of type `"+v(a)+"` supplied to `"+e+"`, expected a single ReactElement.")})),elementType:y((function(t,e,r,o,a){var i=t[e];return n.isValidElementType(i)?null:new m("Invalid "+o+" `"+a+"` of type `"+v(i)+"` supplied to `"+r+"`, expected a single ReactElement type.")})),instanceOf:function(n){return y((function(t,e,r,o,a){if(!(t[e]instanceof n)){var i=n.name||u;return new m("Invalid "+o+" `"+a+"` of type `"+((s=t[e]).constructor&&s.constructor.name?s.constructor.name:u)+"` supplied to `"+r+"`, expected instance of `"+i+"`.")}var s;return null}))},node:y((function(n,t,e,r,o){return h(n[t])?null:new m("Invalid "+r+" `"+o+"` supplied to `"+e+"`, expected a ReactNode.")})),objectOf:function(n){return y((function(t,o,a,i,s){if("function"!=typeof n)return new m("Property `"+s+"` of component `"+a+"` has invalid PropType notation inside objectOf.");var c=t[o],l=v(c);if("object"!==l)return new m("Invalid "+i+" `"+s+"` of type `"+l+"` supplied to `"+a+"`, expected an object.");for(var f in c)if(r(c,f)){var u=n(c,f,a,i,s+"."+f,e);if(u instanceof Error)return u}return null}))},oneOf:function(n){return Array.isArray(n)?y((function(t,e,r,o,a){for(var i=t[e],s=0;s<n.length;s++)if(d(i,n[s]))return null;var c=JSON.stringify(n,(function(n,t){return"symbol"===x(t)?String(t):t}));return new m("Invalid "+o+" `"+a+"` of value `"+String(i)+"` supplied to `"+r+"`, expected one of "+c+".")})):("production"!==process.env.NODE_ENV&&a(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),i)},oneOfType:function(n){if(!Array.isArray(n))return"production"!==process.env.NODE_ENV&&a("Invalid argument supplied to oneOfType, expected an instance of array."),i;for(var t=0;t<n.length;t++){var o=n[t];if("function"!=typeof o)return a("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+w(o)+" at index "+t+"."),i}return y((function(t,o,a,i,s){for(var c=[],l=0;l<n.length;l++){var f=(0,n[l])(t,o,a,i,s,e);if(null==f)return null;f.data&&r(f.data,"expectedType")&&c.push(f.data.expectedType)}return new m("Invalid "+i+" `"+s+"` supplied to `"+a+"`"+(c.length>0?", expected one of type ["+c.join(", ")+"]":"")+".")}))},shape:function(n){return y((function(t,r,o,a,i){var s=t[r],c=v(s);if("object"!==c)return new m("Invalid "+a+" `"+i+"` of type `"+c+"` supplied to `"+o+"`, expected `object`.");for(var l in n){var f=n[l];if("function"!=typeof f)return g(o,a,i,l,x(f));var u=f(s,l,o,a,i+"."+l,e);if(u)return u}return null}))},exact:function(n){return y((function(o,a,i,s,c){var l=o[a],f=v(l);if("object"!==f)return new m("Invalid "+s+" `"+c+"` of type `"+f+"` supplied to `"+i+"`, expected `object`.");var u=t({},o[a],n);for(var p in u){var d=n[p];if(r(n,p)&&"function"!=typeof d)return g(i,s,c,p,x(d));if(!d)return new m("Invalid "+s+" `"+c+"` key `"+p+"` supplied to `"+i+"`.\nBad object: "+JSON.stringify(o[a],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(n),null,"  "));var y=d(l,p,i,s,c+"."+p,e);if(y)return y}return null}))}};function d(n,t){return n===t?0!==n||1/n==1/t:n!=n&&t!=t}function m(n,t){this.message=n,this.data=t&&"object"==typeof t?t:{},this.stack=""}function y(n){if("production"!==process.env.NODE_ENV)var t={},r=0;function o(o,i,s,l,f,p,d){if(l=l||u,p=p||s,d!==e){if(c){var y=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw y.name="Invariant Violation",y}if("production"!==process.env.NODE_ENV&&"undefined"!=typeof console){var b=l+":"+s;!t[b]&&r<3&&(a("You are manually calling a React.PropTypes validation function for the `"+p+"` prop on `"+l+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),t[b]=!0,r++)}}return null==i[s]?o?null===i[s]?new m("The "+f+" `"+p+"` is marked as required in `"+l+"`, but its value is `null`."):new m("The "+f+" `"+p+"` is marked as required in `"+l+"`, but its value is `undefined`."):null:n(i,s,l,f,p)}var i=o.bind(null,!1);return i.isRequired=o.bind(null,!0),i}function b(n){return y((function(t,e,r,o,a,i){var s=t[e];return v(s)!==n?new m("Invalid "+o+" `"+a+"` of type `"+x(s)+"` supplied to `"+r+"`, expected `"+n+"`.",{expectedType:n}):null}))}function g(n,t,e,r,o){return new m((n||"React class")+": "+t+" type `"+e+"."+r+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+o+"`.")}function h(n){switch(typeof n){case"number":case"string":case"undefined":return!0;case"boolean":return!n;case"object":if(Array.isArray(n))return n.every(h);if(null===n||s(n))return!0;var t=function(n){var t=n&&(l&&n[l]||n[f]);if("function"==typeof t)return t}(n);if(!t)return!1;var e,r=t.call(n);if(t!==n.entries){for(;!(e=r.next()).done;)if(!h(e.value))return!1}else for(;!(e=r.next()).done;){var o=e.value;if(o&&!h(o[1]))return!1}return!0;default:return!1}}function v(n){var t=typeof n;return Array.isArray(n)?"array":n instanceof RegExp?"object":function(n,t){return"symbol"===n||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,n)?"symbol":t}function x(n){if(null==n)return""+n;var t=v(n);if("object"===t){if(n instanceof Date)return"date";if(n instanceof RegExp)return"regexp"}return t}function w(n){var t=x(n);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return m.prototype=Error.prototype,p.checkPropTypes=o,p.resetWarningCache=o.resetWarningCache,p.PropTypes=p,p},en}()(pn.isElement,!0)}else L.exports=function(){if(an)return on;an=1;var n=fn();function t(){}function e(){}return e.resetWarningCache=t,on=function(){function r(t,e,r,o,a,i){if(i!==n){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function o(){return r}r.isRequired=r;var a={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:o,element:r,elementType:r,instanceOf:o,node:r,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:e,resetWarningCache:t};return a.PropTypes=a,a}}()();var dn,mn,yn,bn,gn=Y(L.exports),hn=e(dn||(dn=o(["\n  0% {\n    transform: translateX(-100%);\n  }\n  50% {\n    transform: translateX(100%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n"],["\n  0% {\n    transform: translateX(-100%);\n  }\n  50% {\n    transform: translateX(100%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n"]))),vn=t.div(mn||(mn=o(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"],["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]))),xn=t.div(yn||(yn=o(["\n  font-size: 24px;\n  color: ",";\n  margin-bottom: 20px;\n  align-self: center;\n"],["\n  font-size: 24px;\n  color: ",";\n  margin-bottom: 20px;\n  align-self: center;\n"])),(function(n){return n.textColor||"rgb(0, 0, 0)"})),wn=t.div(bn||(bn=o(["\n  width: 30%;\n  height: 10px;\n  border-radius: 5px;\n  background-color: ",";\n  animation: "," 2s ease-in-out infinite;\n"],["\n  width: 30%;\n  height: 10px;\n  border-radius: 5px;\n  background-color: ",";\n  animation: "," 2s ease-in-out infinite;\n"])),(function(n){return n.barColor||"rgb(0, 0, 0)"}),hn),En=function(t){var e=t.text,r=t.textColor,o=t.barColor,a=t.className;return n.createElement(vn,{className:"loader ".concat(a||"")},n.createElement(xn,{className:"loader-text",textColor:r},e||"Loading..."),n.createElement(wn,{className:"loader-bar",barColor:o}))};En.propTypes={text:gn.string,textColor:gn.string,barColor:gn.string,className:gn.string};var Sn,On,kn,jn,Cn=e(Sn||(Sn=o(["\n  0%, 100% {\n    transform: rotate(45deg) rotateX(-25deg) rotateY(25deg);\n  }\n\n  50% {\n    transform: rotate(45deg) rotateX(-385deg) rotateY(25deg);\n  }\n"],["\n  0%, 100% {\n    transform: rotate(45deg) rotateX(-25deg) rotateY(25deg);\n  }\n\n  50% {\n    transform: rotate(45deg) rotateX(-385deg) rotateY(25deg);\n  }\n"]))),Nn=t.div(On||(On=o(["\n  width: 44px;\n  height: 44px;\n  animation: "," 2s infinite ease;\n  transform-style: preserve-3d;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  & > div {\n    background-color: ",";\n    height: 100%;\n    position: absolute;\n    width: 100%;\n    border: 2px solid ",";\n  }\n\n  & > div:nth-of-type(1) {\n    transform: translateZ(-22px) rotateY(180deg);\n  }\n\n  & > div:nth-of-type(2) {\n    transform: rotateY(-270deg) translateX(50%);\n    transform-origin: top right;\n  }\n\n  & > div:nth-of-type(3) {\n    transform: rotateY(270deg) translateX(-50%);\n    transform-origin: center left;\n  }\n\n  & > div:nth-of-type(4) {\n    transform: rotateX(90deg) translateY(-50%);\n    transform-origin: top center;\n  }\n\n  & > div:nth-of-type(5) {\n    transform: rotateX(-90deg) translateY(50%);\n    transform-origin: bottom center;\n  }\n\n  & > div:nth-of-type(6) {\n    transform: translateZ(22px);\n  }\n"],["\n  width: 44px;\n  height: 44px;\n  animation: "," 2s infinite ease;\n  transform-style: preserve-3d;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  & > div {\n    background-color: ",";\n    height: 100%;\n    position: absolute;\n    width: 100%;\n    border: 2px solid ",";\n  }\n\n  & > div:nth-of-type(1) {\n    transform: translateZ(-22px) rotateY(180deg);\n  }\n\n  & > div:nth-of-type(2) {\n    transform: rotateY(-270deg) translateX(50%);\n    transform-origin: top right;\n  }\n\n  & > div:nth-of-type(3) {\n    transform: rotateY(270deg) translateX(-50%);\n    transform-origin: center left;\n  }\n\n  & > div:nth-of-type(4) {\n    transform: rotateX(90deg) translateY(-50%);\n    transform-origin: top center;\n  }\n\n  & > div:nth-of-type(5) {\n    transform: rotateX(-90deg) translateY(50%);\n    transform-origin: bottom center;\n  }\n\n  & > div:nth-of-type(6) {\n    transform: translateZ(22px);\n  }\n"])),Cn,(function(n){return n.color||"rgba(221, 0, 213, 1)"}),(function(n){return n.borderColor||"rgba(49, 13, 90, 1)"})),Xn=function(t){var e=t.color,o=t.borderColor,a=t.className;return n.createElement(Nn,{color:e,borderColor:o,className:a},r([],Array(6),!0).map((function(t,e){return n.createElement("div",{key:e})})))},$n=e(kn||(kn=o(["\n  0% {\n    transform: rotate(0);\n  }\n\n  50% {\n    transform: rotate(180deg);\n    border-top-color: rgb(139, 46, 46);\n    border-bottom-color: rgb(243, 92, 33);\n    border-right-color: transparent;\n    border-left-color: transparent;\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n"],["\n  0% {\n    transform: rotate(0);\n  }\n\n  50% {\n    transform: rotate(180deg);\n    border-top-color: rgb(139, 46, 46);\n    border-bottom-color: rgb(243, 92, 33);\n    border-right-color: transparent;\n    border-left-color: transparent;\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n"]))),Tn=t.div(jn||(jn=o(["\n  width: 50px;\n  height: 50px;\n  display: inline-block;\n  border: 5px solid ",";\n  border-radius: 50%;\n  border-top-color: transparent;\n  border-bottom-color: transparent;\n  animation: "," 1s infinite;\n"],["\n  width: 50px;\n  height: 50px;\n  display: inline-block;\n  border: 5px solid ",";\n  border-radius: 50%;\n  border-top-color: transparent;\n  border-bottom-color: transparent;\n  animation: "," 1s infinite;\n"])),(function(n){return n.color||"rgb(255, 17, 0)"}),$n),Pn=function(t){var e=t.color,r=t.className;return n.createElement(Tn,{color:e,className:r})};Pn.propTypes={color:gn.string,className:gn.string};var _n,zn,In,An,Rn,Fn,Mn,Vn,Yn,Dn,Ln,Wn,qn,Un,Zn=e(_n||(_n=o(["\n  to {\n    transform: rotate(1turn);\n  }\n"],["\n  to {\n    transform: rotate(1turn);\n  }\n"]))),Bn=t.div(zn||(zn=o(["\n  width: 6em;\n  height: 6em;\n  font-size: 10px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"],["\n  width: 6em;\n  height: 6em;\n  font-size: 10px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),Jn=t.div(In||(In=o(["\n  position: absolute;\n  border-radius: 50%;\n  border-style: solid;\n  animation: "," 3s linear infinite;\n"],["\n  position: absolute;\n  border-radius: 50%;\n  border-style: solid;\n  animation: "," 3s linear infinite;\n"])),Zn),Hn=t.div(An||(An=o(["\n  position: absolute;\n  width: 50%;\n  height: 0.1em;\n  top: 50%;\n  left: 50%;\n  background-color: transparent;\n  transform: rotate(var(--deg));\n  transform-origin: left;\n\n  &::before {\n    position: absolute;\n    top: -0.5em;\n    right: -0.5em;\n    content: '';\n    width: 1em;\n    height: 1em;\n    background-color: currentColor;\n    border-radius: 50%;\n    box-shadow: 0 0 2em,\n      0 0 4em,\n      0 0 6em,\n      0 0 8em,\n      0 0 10em,\n      0 0 0 0.5em rgba(255, 255, 0, 0.1);\n  }\n"],["\n  position: absolute;\n  width: 50%;\n  height: 0.1em;\n  top: 50%;\n  left: 50%;\n  background-color: transparent;\n  transform: rotate(var(--deg));\n  transform-origin: left;\n\n  &::before {\n    position: absolute;\n    top: -0.5em;\n    right: -0.5em;\n    content: '';\n    width: 1em;\n    height: 1em;\n    background-color: currentColor;\n    border-radius: 50%;\n    box-shadow: 0 0 2em,\n      0 0 4em,\n      0 0 6em,\n      0 0 8em,\n      0 0 10em,\n      0 0 0 0.5em rgba(255, 255, 0, 0.1);\n  }\n"]))),Gn=function(t){var e=t.color,r=void 0===e?"currentColor":e,o=t.className;return n.createElement(Bn,{className:o},n.createElement(Jn,{style:{width:"100%",height:"100%",color:r,borderColor:"".concat(r," transparent transparent currentColor")}},n.createElement(Hn,null)),n.createElement(Jn,{style:{width:"70%",height:"70%",color:r,borderColor:"currentColor ".concat(r," transparent transparent")}},n.createElement(Hn,{style:{"--deg":"-135deg"}})))},Kn=e(Rn||(Rn=o(["\n  0% {\n    transform: rotate(0deg);\n    animation-timing-function: ease-out;\n  }\n\n  25% {\n    transform: rotate(70deg);\n    animation-timing-function: ease-in;\n  }\n\n  50% {\n    transform: rotate(0deg);\n    animation-timing-function: linear;\n  }\n"],["\n  0% {\n    transform: rotate(0deg);\n    animation-timing-function: ease-out;\n  }\n\n  25% {\n    transform: rotate(70deg);\n    animation-timing-function: ease-in;\n  }\n\n  50% {\n    transform: rotate(0deg);\n    animation-timing-function: linear;\n  }\n"]))),Qn=e(Fn||(Fn=o(["\n  0% {\n    transform: rotate(0deg);\n    animation-timing-function: linear;\n  }\n\n  50% {\n    transform: rotate(0deg);\n    animation-timing-function: ease-out;\n  }\n\n  75% {\n    transform: rotate(-70deg);\n    animation-timing-function: ease-in;\n  }\n"],["\n  0% {\n    transform: rotate(0deg);\n    animation-timing-function: linear;\n  }\n\n  50% {\n    transform: rotate(0deg);\n    animation-timing-function: ease-out;\n  }\n\n  75% {\n    transform: rotate(-70deg);\n    animation-timing-function: ease-in;\n  }\n"]))),nt=t.div(Mn||(Mn=o(["\n  --uib-size: 50px;\n  --uib-speed: 1.2s;\n  --uib-color: ",";\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: var(--uib-size);\n  height: var(--uib-size);\n"],["\n  --uib-size: 50px;\n  --uib-speed: 1.2s;\n  --uib-color: ",";\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: var(--uib-size);\n  height: var(--uib-size);\n"])),(function(n){return n.color||"#474554"})),tt=t.div(Vn||(Vn=o(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  height: 100%;\n  width: 25%;\n  transform-origin: center top;\n\n  &::after {\n    content: '';\n    display: block;\n    width: 100%;\n    height: 25%;\n    border-radius: 50%;\n    background-color: var(--uib-color);\n  }\n\n  &:first-child {\n    animation: "," var(--uib-speed) linear infinite;\n  }\n\n  &:last-child {\n    animation: "," var(--uib-speed) linear infinite;\n  }\n};"],["\n  position: relative;\n  display: flex;\n  align-items: center;\n  height: 100%;\n  width: 25%;\n  transform-origin: center top;\n\n  &::after {\n    content: '';\n    display: block;\n    width: 100%;\n    height: 25%;\n    border-radius: 50%;\n    background-color: var(--uib-color);\n  }\n\n  &:first-child {\n    animation: "," var(--uib-speed) linear infinite;\n  }\n\n  &:last-child {\n    animation: "," var(--uib-speed) linear infinite;\n  }\n};"])),Kn,Qn),et=function(t){var e=t.color,r=t.className;return n.createElement(nt,{className:r,color:e},n.createElement(tt,null),n.createElement(tt,null),n.createElement(tt,null),n.createElement(tt,null))},rt=e(Yn||(Yn=o(["\n  0% {\n    letter-spacing: 1px;\n    transform: translateX(0px);\n  }\n\n  40% {\n    letter-spacing: 2px;\n    transform: translateX(26px);\n  }\n\n  80% {\n    letter-spacing: 1px;\n    transform: translateX(32px);\n  }\n\n  90% {\n    letter-spacing: 2px;\n    transform: translateX(0px);\n  }\n\n  100% {\n    letter-spacing: 1px;\n    transform: translateX(0px);\n  }\n"],["\n  0% {\n    letter-spacing: 1px;\n    transform: translateX(0px);\n  }\n\n  40% {\n    letter-spacing: 2px;\n    transform: translateX(26px);\n  }\n\n  80% {\n    letter-spacing: 1px;\n    transform: translateX(32px);\n  }\n\n  90% {\n    letter-spacing: 2px;\n    transform: translateX(0px);\n  }\n\n  100% {\n    letter-spacing: 1px;\n    transform: translateX(0px);\n  }\n"]))),ot=e(Dn||(Dn=o(["\n  0% {\n    width: 16px;\n    transform: translateX(0px);\n  }\n\n  40% {\n    width: 100%;\n    transform: translateX(0px);\n  }\n\n  80% {\n    width: 16px;\n    transform: translateX(64px);\n  }\n\n  90% {\n    width: 100%;\n    transform: translateX(0px);\n  }\n\n  100% {\n    width: 16px;\n    transform: translateX(0px);\n  }\n"],["\n  0% {\n    width: 16px;\n    transform: translateX(0px);\n  }\n\n  40% {\n    width: 100%;\n    transform: translateX(0px);\n  }\n\n  80% {\n    width: 16px;\n    transform: translateX(64px);\n  }\n\n  90% {\n    width: 100%;\n    transform: translateX(0px);\n  }\n\n  100% {\n    width: 16px;\n    transform: translateX(0px);\n  }\n"]))),at=e(Ln||(Ln=o(["\n  0% {\n    transform: translateX(0px);\n    width: 16px;\n  }\n\n  40% {\n    transform: translateX(0%);\n    width: 80%;\n  }\n\n  80% {\n    width: 100%;\n    transform: translateX(0px);\n  }\n\n  90% {\n    width: 80%;\n    transform: translateX(15px);\n  }\n\n  100% {\n    transform: translateX(0px);\n    width: 16px;\n  }\n"],["\n  0% {\n    transform: translateX(0px);\n    width: 16px;\n  }\n\n  40% {\n    transform: translateX(0%);\n    width: 80%;\n  }\n\n  80% {\n    width: 100%;\n    transform: translateX(0px);\n  }\n\n  90% {\n    width: 80%;\n    transform: translateX(15px);\n  }\n\n  100% {\n    transform: translateX(0px);\n    width: 16px;\n  }\n"]))),it=t.div(Wn||(Wn=o(["\n  width: 80px;\n  height: 50px;\n  position: relative;\n"],["\n  width: 80px;\n  height: 50px;\n  position: relative;\n"]))),st=t.span(qn||(qn=o(["\n  position: absolute;\n  top: 0;\n  padding: 0;\n  margin: 0;\n  color: ",";\n  animation: "," 3.5s ease both infinite;\n  font-size: 0.8rem;\n  letter-spacing: 1px;\n"],["\n  position: absolute;\n  top: 0;\n  padding: 0;\n  margin: 0;\n  color: ",";\n  animation: "," 3.5s ease both infinite;\n  font-size: 0.8rem;\n  letter-spacing: 1px;\n"])),(function(n){return n.textColor||"#C8B6FF"}),rt),ct=t.span(Un||(Un=o(["\n  background-color: #9A79FF;\n  border-radius: 50px;\n  display: block;\n  height: 16px;\n  width: 16px;\n  bottom: 0;\n  position: absolute;\n  transform: translateX(64px);\n  animation: ",' 3.5s ease both infinite;\n\n  &::before {\n    position: absolute;\n    content: "";\n    width: 100%;\n    height: 100%;\n    background-color: #D1C2FF;\n    border-radius: inherit;\n    animation: '," 3.5s ease both infinite;\n  }\n"],["\n  background-color: #9A79FF;\n  border-radius: 50px;\n  display: block;\n  height: 16px;\n  width: 16px;\n  bottom: 0;\n  position: absolute;\n  transform: translateX(64px);\n  animation: ",' 3.5s ease both infinite;\n\n  &::before {\n    position: absolute;\n    content: "";\n    width: 100%;\n    height: 100%;\n    background-color: #D1C2FF;\n    border-radius: inherit;\n    animation: '," 3.5s ease both infinite;\n  }\n"])),ot,at),lt=function(t){var e=t.text,r=t.textColor,o=t.className;return n.createElement(it,{className:o},n.createElement(st,{textColor:r},e||"Loading"),n.createElement(ct,null))};export{O as CircleLoader,P as CornerLoader,Xn as CubeLoader,lt as CustomLoader,A as CustomSpinner,V as DotSpinner,En as LoadingBar,et as NewtonsCradle,Pn as RotatingCircleBorderLoader,Gn as RotatingCirclesLoader};
//# sourceMappingURL=index.esm.js.map