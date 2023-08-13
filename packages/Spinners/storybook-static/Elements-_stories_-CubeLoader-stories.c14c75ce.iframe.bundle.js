"use strict";(self.webpackChunkreact_craftify_spinners=self.webpackChunkreact_craftify_spinners||[]).push([[828],{"./src/Elements/_stories_/CubeLoader.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomBorderColor:()=>CustomBorderColor,CustomClassName:()=>CustomClassName,CustomColor:()=>CustomColor,Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _CubeLoader__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Elements/CubeLoader.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Spinners/CubeLoader",component:_CubeLoader__WEBPACK_IMPORTED_MODULE_1__.Z,argTypes:{color:{control:"color"},borderColor:{control:"color"},className:{control:"text"}},parameters:{layout:"centered"}},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_CubeLoader__WEBPACK_IMPORTED_MODULE_1__.Z,{...args});Template.displayName="Template";const Default=Template.bind({});Default.args={};const CustomColor=Template.bind({});CustomColor.args={color:"#ff0000"};const CustomBorderColor=Template.bind({});CustomBorderColor.args={borderColor:"#00ff00"};const CustomClassName=Template.bind({});CustomClassName.args={className:"custom-style"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <CubeLoader {...args} />",...Default.parameters?.docs?.source}}},CustomColor.parameters={...CustomColor.parameters,docs:{...CustomColor.parameters?.docs,source:{originalSource:"args => <CubeLoader {...args} />",...CustomColor.parameters?.docs?.source}}},CustomBorderColor.parameters={...CustomBorderColor.parameters,docs:{...CustomBorderColor.parameters?.docs,source:{originalSource:"args => <CubeLoader {...args} />",...CustomBorderColor.parameters?.docs?.source}}},CustomClassName.parameters={...CustomClassName.parameters,docs:{...CustomClassName.parameters?.docs,source:{originalSource:"args => <CubeLoader {...args} />",...CustomClassName.parameters?.docs?.source}}};const __namedExportsOrder=["Default","CustomColor","CustomBorderColor","CustomClassName"]},"./src/Elements/CubeLoader.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const spinnerAnimation=styled_components__WEBPACK_IMPORTED_MODULE_2__.F4`
  0%, 100% {
    transform: rotate(45deg) rotateX(-25deg) rotateY(25deg);
  }

  50% {
    transform: rotate(45deg) rotateX(-385deg) rotateY(25deg);
  }
`,SpinnerContainer=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  width: 44px;
  height: 44px;
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
`,CubeLoader=_ref=>{let{color,borderColor,className}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SpinnerContainer,{color,borderColor,className,children:[...Array(6)].map(((_,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{},index)))})};CubeLoader.displayName="CubeLoader";const __WEBPACK_DEFAULT_EXPORT__=CubeLoader;try{CubeLoader.displayName="CubeLoader",CubeLoader.__docgenInfo={description:"",displayName:"CubeLoader",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},borderColor:{defaultValue:null,description:"",name:"borderColor",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Elements/CubeLoader.tsx#CubeLoader"]={docgenInfo:CubeLoader.__docgenInfo,name:"CubeLoader",path:"src/Elements/CubeLoader.tsx#CubeLoader"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=Elements-_stories_-CubeLoader-stories.c14c75ce.iframe.bundle.js.map