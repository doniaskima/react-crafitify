import{j as x}from"./jsx-runtime-e6a661ac.js";import{r as p}from"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";var M={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function _(e){if(typeof e=="number")return{value:e,unit:"px"};var r,n=(e.match(/^[0-9.]*/)||"").toString();n.includes(".")?r=parseFloat(n):r=parseInt(n,10);var t=(e.match(/[^0-9]*$/)||"").toString();return M[t]?{value:r,unit:t}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(r,"px.")),{value:r,unit:"px"})}function y(e){var r=_(e);return"".concat(r.value).concat(r.unit)}var j=function(e,r,n){var t="react-spinners-".concat(e,"-").concat(n);if(typeof window>"u"||!window.document)return t;var a=document.createElement("style");document.head.appendChild(a);var o=a.sheet,i=`
    @keyframes `.concat(t,` {
      `).concat(r,`
    }
  `);return o&&o.insertRule(i,0),t},s=globalThis&&globalThis.__assign||function(){return s=Object.assign||function(e){for(var r,n=1,t=arguments.length;n<t;n++){r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},s.apply(this,arguments)},P=globalThis&&globalThis.__rest||function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n},L=j("RingLoader","0% {transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg)} 100% {transform: rotateX(180deg) rotateY(360deg) rotateZ(360deg)}","right"),T=j("RingLoader","0% {transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg)} 100% {transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg)}","left");function X(e){var r=e.loading,n=r===void 0?!0:r,t=e.color,a=t===void 0?"#000000":t,o=e.speedMultiplier,i=o===void 0?1:o,v=e.cssOverride,E=v===void 0?{}:v,f=e.size,l=f===void 0?60:f,S=P(e,["loading","color","speedMultiplier","cssOverride","size"]),g=_(l),u=g.value,d=g.unit,R=s({display:"inherit",width:y(l),height:y(l),position:"relative"},E),h=function(V){return{position:"absolute",top:"0",left:"0",width:"".concat(u).concat(d),height:"".concat(u).concat(d),border:"".concat(u/10).concat(d," solid ").concat(a),opacity:"0.4",borderRadius:"100%",animationFillMode:"forwards",perspective:"800px",animation:"".concat(V===1?L:T," ").concat(2/i,"s 0s infinite linear")}};return n?p.createElement("span",s({style:R},S),p.createElement("span",{style:h(1)}),p.createElement("span",{style:h(2)})):null}const m=e=>{const{className:r,color:n="#381438",loading:t,size:a,speedMultiplier:o,...i}=e;return x(X,{className:r,color:n,loading:t,size:a,speedMultiplier:o,...i})};m.displayName="Void";const F={component:m,title:"Components/Presentation/Void"},c=()=>x(m,{});var b,O,w;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:"() => <Void />",...(w=(O=c.parameters)==null?void 0:O.docs)==null?void 0:w.source}}};const N=["Default"];export{c as Default,N as __namedExportsOrder,F as default};
//# sourceMappingURL=Void.stories-c0a95064.js.map