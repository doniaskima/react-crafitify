"use strict";(self.webpackChunkreact_craftify_spinners=self.webpackChunkreact_craftify_spinners||[]).push([[435],{"./src/Elements/_stories_/DotSpinner.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _DotSpinner__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Elements/DotSpinner.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Spinners/DotSpinner",component:_DotSpinner__WEBPACK_IMPORTED_MODULE_1__.Z,parameters:{layout:"centered"}},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_DotSpinner__WEBPACK_IMPORTED_MODULE_1__.Z,{...args});Template.displayName="Template";const Default=Template.bind({});Default.args={},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <DotSpinner {...args} />",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/Elements/DotSpinner.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const pulse0112=styled_components__WEBPACK_IMPORTED_MODULE_2__.F4`
  0%, 100% {
    transform: scale(0);
    opacity: 0.5;
  }
  50% {
    transform: scale(1);
    opacity: 1;
  }
`,DotSpinnerContainer=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  --uib-size: 2.8rem;
  --uib-speed: 0.9s;
  --uib-color: ${props=>props.color||"#183153"};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: var(--uib-size);
  width: var(--uib-size);
`,Dot=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: 100%;

  &::before {
    content: '';
    height: 20%;
    width: 20%;
    border-radius: 50%;
    background-color: var(--uib-color);
    transform: scale(0);
    opacity: 0.5;
    animation: ${pulse0112} calc(var(--uib-speed) * 1.111) ease-in-out infinite;
    box-shadow: 0 0 20px rgba(18, 31, 53, 0.3);
  }
};`,DotSpinner=_ref=>{let{className,color}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(DotSpinnerContainer,{className,color,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Dot,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Dot,{style:{transform:"rotate(45deg)"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Dot,{style:{transform:"rotate(90deg)"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Dot,{style:{transform:"rotate(135deg)"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Dot,{style:{transform:"rotate(180deg)"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Dot,{style:{transform:"rotate(225deg)"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Dot,{style:{transform:"rotate(270deg)"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Dot,{style:{transform:"rotate(315deg)"}})]})};DotSpinner.displayName="DotSpinner";const __WEBPACK_DEFAULT_EXPORT__=DotSpinner;try{DotSpinner.displayName="DotSpinner",DotSpinner.__docgenInfo={description:"",displayName:"DotSpinner",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Elements/DotSpinner.tsx#DotSpinner"]={docgenInfo:DotSpinner.__docgenInfo,name:"DotSpinner",path:"src/Elements/DotSpinner.tsx#DotSpinner"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=Elements-_stories_-DotSpinner-stories.08030372.iframe.bundle.js.map