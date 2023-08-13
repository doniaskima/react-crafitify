"use strict";(self.webpackChunkreact_craftify_spinners=self.webpackChunkreact_craftify_spinners||[]).push([[382],{"./src/Elements/_stories_/CornerLoader.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomColor:()=>CustomColor,Default:()=>Default,WithClassName:()=>WithClassName,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _CornerLoader__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Elements/CornerLoader.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Spinners/CornerLoader",component:_CornerLoader__WEBPACK_IMPORTED_MODULE_1__.Z,parameters:{layout:"centered"}},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_CornerLoader__WEBPACK_IMPORTED_MODULE_1__.Z,{...args});Template.displayName="Template";const Default=Template.bind({});Default.args={};const CustomColor=Template.bind({});CustomColor.args={color:"#ff0000"};const WithClassName=Template.bind({});WithClassName.args={className:"custom-class"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <CornerLoader {...args} />",...Default.parameters?.docs?.source}}},CustomColor.parameters={...CustomColor.parameters,docs:{...CustomColor.parameters?.docs,source:{originalSource:"args => <CornerLoader {...args} />",...CustomColor.parameters?.docs?.source}}},WithClassName.parameters={...WithClassName.parameters,docs:{...WithClassName.parameters?.docs,source:{originalSource:"args => <CornerLoader {...args} />",...WithClassName.parameters?.docs?.source}}};const __namedExportsOrder=["Default","CustomColor","WithClassName"]},"./src/Elements/CornerLoader.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const spin988=styled_components__WEBPACK_IMPORTED_MODULE_2__.F4`
  0% {
    transform: scale(1) rotate(0);
  }
  20%, 25% {
    transform: scale(1.3) rotate(90deg);
  }
  45%, 50% {
    transform: scale(1) rotate(180deg);
  }
  70%, 75% {
    transform: scale(1.3) rotate(270deg);
  }
  95%, 100% {
    transform: scale(1) rotate(360deg);
  }
`,LoaderContainer=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  --dim: 3rem;
  width: var(--dim);
  height: var(--dim);
  position: relative;
  animation: ${spin988} 2s linear infinite;
`,Circle=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  --dim: 1.2rem;
  width: var(--dim);
  height: var(--dim);
  background-color: ${props=>props.color||"#333"};
  border-radius: 50%;
  position: absolute;
`,TopLeftCircle=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP)(Circle)`
  top: 0;
  left: 0;
`,TopRightCircle=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP)(Circle)`
  top: 0;
  right: 0;
`,BottomLeftCircle=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP)(Circle)`
  bottom: 0;
  left: 0;
`,BottomRightCircle=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP)(Circle)`
  bottom: 0;
  right: 0;
`,CornerLoader=_ref=>{let{color,className}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(LoaderContainer,{className,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TopLeftCircle,{color}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TopRightCircle,{color}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(BottomLeftCircle,{color}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(BottomRightCircle,{color})]})};CornerLoader.displayName="CornerLoader";const __WEBPACK_DEFAULT_EXPORT__=CornerLoader;try{CornerLoader.displayName="CornerLoader",CornerLoader.__docgenInfo={description:"",displayName:"CornerLoader",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Elements/CornerLoader.tsx#CornerLoader"]={docgenInfo:CornerLoader.__docgenInfo,name:"CornerLoader",path:"src/Elements/CornerLoader.tsx#CornerLoader"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=Elements-_stories_-CornerLoader-stories.af072a89.iframe.bundle.js.map