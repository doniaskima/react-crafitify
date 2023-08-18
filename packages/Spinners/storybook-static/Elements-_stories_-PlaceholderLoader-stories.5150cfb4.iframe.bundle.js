"use strict";(self.webpackChunkreact_craftify_spinners=self.webpackChunkreact_craftify_spinners||[]).push([[7313],{"./src/Elements/_stories_/PlaceholderLoader.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomSize:()=>CustomSize,Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _PlaceholderLoader__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/Elements/PlaceholderLoader.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Spinners/PlaceholderLoader",component:_PlaceholderLoader__WEBPACK_IMPORTED_MODULE_0__.Z},CenteredStory=_ref=>{let{children}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children})};CenteredStory.displayName="CenteredStory";const Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(CenteredStory,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_PlaceholderLoader__WEBPACK_IMPORTED_MODULE_0__.Z,{...args})});Template.displayName="Template";const Default=Template.bind({});Default.args={width:"250px",height:"130px"};const CustomSize=Template.bind({});CustomSize.args={width:"250px",height:"130px"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <CenteredStory>\r\n    <PlaceholderLoader {...args} />\r\n  </CenteredStory>",...Default.parameters?.docs?.source}}},CustomSize.parameters={...CustomSize.parameters,docs:{...CustomSize.parameters?.docs,source:{originalSource:"args => <CenteredStory>\r\n    <PlaceholderLoader {...args} />\r\n  </CenteredStory>",...CustomSize.parameters?.docs?.source}}};const __namedExportsOrder=["Default","CustomSize"]},"./src/Elements/PlaceholderLoader.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const PlaceholderAnimation=styled_components__WEBPACK_IMPORTED_MODULE_2__.F4`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`,LoaderWrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  position: relative;
  width: ${props=>props.width} || 250px;
  height: ${props=>props.height} || 130px;
  margin-bottom: 10px;
  border: 1px solid #d3d3d3;
  padding: 15px;
  background-color: #e3e3e3;
  overflow: hidden;

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(
      110deg,
      rgba(227, 227, 227, 0) 0%,
      rgba(227, 227, 227, 0) 40%,
      rgba(227, 227, 227, 0.5) 50%,
      rgba(227, 227, 227, 0) 60%,
      rgba(227, 227, 227, 0) 100%
    );
    animation: ${PlaceholderAnimation} 1.2s linear infinite;
  }
`,Wrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  width: 100%;
  height: 100%;
  position: relative;
`,Circle=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  background-color: #cacaca;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`,Line=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  background-color: #cacaca;
  position: absolute;
  height: 10px;
  width: 100%;
`,Line1=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP)(Line)`
  top: 11px;
  left: 58px;
  width: 100px;
`,Line2=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP)(Line)`
  top: 34px;
  left: 58px;
  width: 150px;
`,Line3=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP)(Line)`
  top: 57px;
`,Line4=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP)(Line)`
  top: 80px;
  width: 92%;
`,PlaceholderLoader=_ref=>{let{width,height}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(LoaderWrapper,{width,height,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Wrapper,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Circle,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Line1,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Line2,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Line3,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Line4,{})]})})};PlaceholderLoader.displayName="PlaceholderLoader";const __WEBPACK_DEFAULT_EXPORT__=PlaceholderLoader;try{PlaceholderLoader.displayName="PlaceholderLoader",PlaceholderLoader.__docgenInfo={description:"",displayName:"PlaceholderLoader",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"string"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Elements/PlaceholderLoader.tsx#PlaceholderLoader"]={docgenInfo:PlaceholderLoader.__docgenInfo,name:"PlaceholderLoader",path:"src/Elements/PlaceholderLoader.tsx#PlaceholderLoader"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=Elements-_stories_-PlaceholderLoader-stories.5150cfb4.iframe.bundle.js.map