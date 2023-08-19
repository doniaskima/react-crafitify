"use strict";(self.webpackChunkreact_craftify_spinners=self.webpackChunkreact_craftify_spinners||[]).push([[5828],{"./src/Elements/_stories_/CubeLoader.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomColor:()=>CustomColor,CustomSize:()=>CustomSize,Default:()=>Default,WithClassName:()=>WithClassName,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _CubeLoader__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Elements/CubeLoader.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Spinners/CubeLoader",component:_CubeLoader__WEBPACK_IMPORTED_MODULE_1__.Z},CenteredStory=_ref=>{let{children}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children})};CenteredStory.displayName="CenteredStory";const Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CenteredStory,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_CubeLoader__WEBPACK_IMPORTED_MODULE_1__.Z,{...args})});Template.displayName="Template";const Default=Template.bind({});Default.args={};const CustomColor=Template.bind({});CustomColor.args={color:"#3498db",borderColor:"#e74c3c"};const CustomSize=Template.bind({});CustomSize.args={size:"80px"};const WithClassName=Template.bind({});WithClassName.args={className:"my-custom-class"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <CenteredStory>\r\n    <CubeLoader {...args} />\r\n  </CenteredStory>",...Default.parameters?.docs?.source}}},CustomColor.parameters={...CustomColor.parameters,docs:{...CustomColor.parameters?.docs,source:{originalSource:"args => <CenteredStory>\r\n    <CubeLoader {...args} />\r\n  </CenteredStory>",...CustomColor.parameters?.docs?.source}}},CustomSize.parameters={...CustomSize.parameters,docs:{...CustomSize.parameters?.docs,source:{originalSource:"args => <CenteredStory>\r\n    <CubeLoader {...args} />\r\n  </CenteredStory>",...CustomSize.parameters?.docs?.source}}},WithClassName.parameters={...WithClassName.parameters,docs:{...WithClassName.parameters?.docs,source:{originalSource:"args => <CenteredStory>\r\n    <CubeLoader {...args} />\r\n  </CenteredStory>",...WithClassName.parameters?.docs?.source}}};const __namedExportsOrder=["Default","CustomColor","CustomSize","WithClassName"]},"./src/Elements/CubeLoader.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const spinnerAnimation=styled_components__WEBPACK_IMPORTED_MODULE_2__.F4`
  0%, 100% {
    transform: rotate(45deg) rotateX(-25deg) rotateY(25deg);
  }

  50% {
    transform: rotate(45deg) rotateX(-385deg) rotateY(25deg);
  }
`,SpinnerContainer=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  width: ${props=>props.size||"44px"};
  height: ${props=>props.size||"44px"};
  animation: ${spinnerAnimation} 2s infinite ease;
  transform-style: preserve-3d;
  display: flex;
  align-items: center;
  justify-content: center;

  & > div {
    background-color: ${props=>props.color||"rgba(221, 0, 213, 1)"};
    height: 100%;
    position: absolute;
    width: 100%;
    border: 2px solid ${props=>props.borderColor||"rgba(49, 13, 90, 1)"};
  }

  & > div:nth-of-type(1) {
    transform: translateZ(-22px) rotateY(180deg);
  }

  & > div:nth-of-type(2) {
    transform: rotateY(-270deg) translateX(50%);
    transform-origin: top right;
  }

  & > div:nth-of-type(3) {
    transform: rotateY(270deg) translateX(-50%);
    transform-origin: center left;
  }

  & > div:nth-of-type(4) {
    transform: rotateX(90deg) translateY(-50%);
    transform-origin: top center;
  }

  & > div:nth-of-type(5) {
    transform: rotateX(-90deg) translateY(50%);
    transform-origin: bottom center;
  }

  & > div:nth-of-type(6) {
    transform: translateZ(22px);
  }
`,CubeLoader=_ref=>{let{color,borderColor,size,className}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SpinnerContainer,{color,borderColor,size,className,children:[...Array(6)].map(((_,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{},index)))})};CubeLoader.displayName="CubeLoader";const __WEBPACK_DEFAULT_EXPORT__=CubeLoader;try{CubeLoader.displayName="CubeLoader",CubeLoader.__docgenInfo={description:"",displayName:"CubeLoader",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},borderColor:{defaultValue:null,description:"",name:"borderColor",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Elements/CubeLoader.tsx#CubeLoader"]={docgenInfo:CubeLoader.__docgenInfo,name:"CubeLoader",path:"src/Elements/CubeLoader.tsx#CubeLoader"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/tslib/tslib.es6.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_T:()=>__rest,ev:()=>__spreadArray,pi:()=>__assign});var __assign=function(){return __assign=Object.assign||function __assign(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)};function __rest(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t}Object.create;function __spreadArray(to,from,pack){if(pack||2===arguments.length)for(var ar,i=0,l=from.length;i<l;i++)!ar&&i in from||(ar||(ar=Array.prototype.slice.call(from,0,i)),ar[i]=from[i]);return to.concat(ar||Array.prototype.slice.call(from))}Object.create;"function"==typeof SuppressedError&&SuppressedError}}]);
//# sourceMappingURL=Elements-_stories_-CubeLoader-stories.701485b4.iframe.bundle.js.map