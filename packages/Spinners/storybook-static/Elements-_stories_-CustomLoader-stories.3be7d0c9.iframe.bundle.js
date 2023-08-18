"use strict";(self.webpackChunkreact_craftify_spinners=self.webpackChunkreact_craftify_spinners||[]).push([[692],{"./src/Elements/_stories_/CustomLoader.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomBackgroundColor:()=>CustomBackgroundColor,CustomClassName:()=>CustomClassName,CustomText:()=>CustomText,Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _CustomLoader__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Elements/CustomLoader.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Spinners/CustomLoader",component:_CustomLoader__WEBPACK_IMPORTED_MODULE_1__.Z},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_CustomLoader__WEBPACK_IMPORTED_MODULE_1__.Z,{...args});Template.displayName="Template";const Default=Template.bind({});Default.args={text:"Loading..."};const CustomText=Template.bind({});CustomText.args={text:"Custom Text",textColor:"#FF0000"};const CustomBackgroundColor=Template.bind({});CustomBackgroundColor.args={text:"Custom Background Color",backgroundColor:"#00FF00"};const CustomClassName=Template.bind({});CustomClassName.args={text:"Custom Class Name",className:"custom-loader"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <CustomLoader {...args} />",...Default.parameters?.docs?.source}}},CustomText.parameters={...CustomText.parameters,docs:{...CustomText.parameters?.docs,source:{originalSource:"args => <CustomLoader {...args} />",...CustomText.parameters?.docs?.source}}},CustomBackgroundColor.parameters={...CustomBackgroundColor.parameters,docs:{...CustomBackgroundColor.parameters?.docs,source:{originalSource:"args => <CustomLoader {...args} />",...CustomBackgroundColor.parameters?.docs?.source}}},CustomClassName.parameters={...CustomClassName.parameters,docs:{...CustomClassName.parameters?.docs,source:{originalSource:"args => <CustomLoader {...args} />",...CustomClassName.parameters?.docs?.source}}};const __namedExportsOrder=["Default","CustomText","CustomBackgroundColor","CustomClassName"]},"./src/Elements/CustomLoader.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const loaderTextAnimation=styled_components__WEBPACK_IMPORTED_MODULE_2__.F4`
  0% {
    letter-spacing: 1px;
    transform: translateX(0px);
  }

  40% {
    letter-spacing: 2px;
    transform: translateX(26px);
  }

  80% {
    letter-spacing: 1px;
    transform: translateX(32px);
  }

  90% {
    letter-spacing: 2px;
    transform: translateX(0px);
  }

  100% {
    letter-spacing: 1px;
    transform: translateX(0px);
  }
`,loadingAnimation=styled_components__WEBPACK_IMPORTED_MODULE_2__.F4`
  0% {
    width: 16px;
    transform: translateX(0px);
  }

  40% {
    width: 100%;
    transform: translateX(0px);
  }

  80% {
    width: 16px;
    transform: translateX(64px);
  }

  90% {
    width: 100%;
    transform: translateX(0px);
  }

  100% {
    width: 16px;
    transform: translateX(0px);
  }
`,loading2Animation=styled_components__WEBPACK_IMPORTED_MODULE_2__.F4`
  0% {
    transform: translateX(0px);
    width: 16px;
  }

  40% {
    transform: translateX(0%);
    width: 80%;
  }

  80% {
    width: 100%;
    transform: translateX(0px);
  }

  90% {
    width: 80%;
    transform: translateX(15px);
  }

  100% {
    transform: translateX(0px);
    width: 16px;
  }
`,LoaderContainer=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
width: ${props=>props.size||"80px"};
height: ${props=>props.size?`calc(${props.size} * 0.625)`:"50px"};
position: relative;
`,LoaderText=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.span`
  position: absolute;
  top: 0;
  padding: 0;
  margin: 0;
  color: ${props=>props.textColor||"#C8B6FF"};
  animation: ${loaderTextAnimation} 3.5s ease both infinite;
  font-size: 0.8rem;
  letter-spacing: 1px;
`,Load=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.span`  
  background-color: ${props=>props.backgroundColor||"#9A79FF"};  
  border-radius: 50px;
  display: block;
  height: 16px;
  width: 16px;
  bottom: 0;
  position: absolute;
  transform: translateX(64px);
  animation: ${loadingAnimation} 3.5s ease both infinite;

  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background-color: ${props=>props.backgroundColor||"#D1C2FF"}; // Update this line
    border-radius: inherit;
    animation: ${loading2Animation} 3.5s ease both infinite;
  }
`,CustomLoader=_ref=>{let{text,textColor,size,className}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(LoaderContainer,{size,className,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(LoaderText,{textColor,children:text||"Loading"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Load,{})]})};CustomLoader.displayName="CustomLoader";const __WEBPACK_DEFAULT_EXPORT__=CustomLoader;try{CustomLoader.displayName="CustomLoader",CustomLoader.__docgenInfo={description:"",displayName:"CustomLoader",props:{text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},textColor:{defaultValue:null,description:"",name:"textColor",required:!1,type:{name:"string"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Elements/CustomLoader.tsx#CustomLoader"]={docgenInfo:CustomLoader.__docgenInfo,name:"CustomLoader",path:"src/Elements/CustomLoader.tsx#CustomLoader"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=Elements-_stories_-CustomLoader-stories.3be7d0c9.iframe.bundle.js.map