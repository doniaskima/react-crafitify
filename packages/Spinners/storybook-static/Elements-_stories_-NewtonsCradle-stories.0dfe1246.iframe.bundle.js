"use strict";(self.webpackChunkreact_craftify_spinners=self.webpackChunkreact_craftify_spinners||[]).push([[9274],{"./src/Elements/_stories_/NewtonsCradle.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomClassName:()=>CustomClassName,CustomColor:()=>CustomColor,Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _NewtonsCradle__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Elements/NewtonsCradle.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Spinners/NewtonsCradle",component:_NewtonsCradle__WEBPACK_IMPORTED_MODULE_1__.Z,argTypes:{color:{control:"color"},className:{control:"text"}},parameters:{layout:"centered"}},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_NewtonsCradle__WEBPACK_IMPORTED_MODULE_1__.Z,{...args});Template.displayName="Template";const Default=Template.bind({});Default.args={};const CustomColor=Template.bind({});CustomColor.args={color:"#00ff00"};const CustomClassName=Template.bind({});CustomClassName.args={className:"custom-style"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <NewtonsCradle {...args} />",...Default.parameters?.docs?.source}}},CustomColor.parameters={...CustomColor.parameters,docs:{...CustomColor.parameters?.docs,source:{originalSource:"args => <NewtonsCradle {...args} />",...CustomColor.parameters?.docs?.source}}},CustomClassName.parameters={...CustomClassName.parameters,docs:{...CustomClassName.parameters?.docs,source:{originalSource:"args => <NewtonsCradle {...args} />",...CustomClassName.parameters?.docs?.source}}};const __namedExportsOrder=["Default","CustomColor","CustomClassName"]},"./src/Elements/NewtonsCradle.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const swingAnimation=styled_components__WEBPACK_IMPORTED_MODULE_2__.F4`
  0% {
    transform: rotate(0deg);
    animation-timing-function: ease-out;
  }

  25% {
    transform: rotate(70deg);
    animation-timing-function: ease-in;
  }

  50% {
    transform: rotate(0deg);
    animation-timing-function: linear;
  }
`,swing2Animation=styled_components__WEBPACK_IMPORTED_MODULE_2__.F4`
  0% {
    transform: rotate(0deg);
    animation-timing-function: linear;
  }

  50% {
    transform: rotate(0deg);
    animation-timing-function: ease-out;
  }

  75% {
    transform: rotate(-70deg);
    animation-timing-function: ease-in;
  }
`,NewtonsCradleContainer=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  --uib-size: 50px;
  --uib-speed: 1.2s;
  --uib-color: ${props=>props.color||"#474554"};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--uib-size);
  height: var(--uib-size);
`,NewtonsCradleDot=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  width: 25%;
  transform-origin: center top;

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 25%;
    border-radius: 50%;
    background-color: var(--uib-color);
  }

  &:first-child {
    animation: ${swingAnimation} var(--uib-speed) linear infinite;
  }

  &:last-child {
    animation: ${swing2Animation} var(--uib-speed) linear infinite;
  }
};`,NewtonsCradle=_ref=>{let{color,className}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(NewtonsCradleContainer,{className,color,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(NewtonsCradleDot,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(NewtonsCradleDot,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(NewtonsCradleDot,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(NewtonsCradleDot,{})]})};NewtonsCradle.displayName="NewtonsCradle";const __WEBPACK_DEFAULT_EXPORT__=NewtonsCradle;try{NewtonsCradle.displayName="NewtonsCradle",NewtonsCradle.__docgenInfo={description:"",displayName:"NewtonsCradle",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Elements/NewtonsCradle.tsx#NewtonsCradle"]={docgenInfo:NewtonsCradle.__docgenInfo,name:"NewtonsCradle",path:"src/Elements/NewtonsCradle.tsx#NewtonsCradle"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/tslib/tslib.es6.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_T:()=>__rest,ev:()=>__spreadArray,pi:()=>__assign});var __assign=function(){return __assign=Object.assign||function __assign(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)};function __rest(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t}Object.create;function __spreadArray(to,from,pack){if(pack||2===arguments.length)for(var ar,i=0,l=from.length;i<l;i++)!ar&&i in from||(ar||(ar=Array.prototype.slice.call(from,0,i)),ar[i]=from[i]);return to.concat(ar||Array.prototype.slice.call(from))}Object.create;"function"==typeof SuppressedError&&SuppressedError}}]);
//# sourceMappingURL=Elements-_stories_-NewtonsCradle-stories.0dfe1246.iframe.bundle.js.map