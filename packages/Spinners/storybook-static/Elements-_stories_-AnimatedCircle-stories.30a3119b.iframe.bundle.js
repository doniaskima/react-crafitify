"use strict";(self.webpackChunkreact_craftify_spinners=self.webpackChunkreact_craftify_spinners||[]).push([[7847],{"./src/Elements/_stories_/AnimatedCircle.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomColor:()=>CustomColor,CustomSize:()=>CustomSize,Default:()=>Default,WithClassName:()=>WithClassName,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _AnimatedCircle__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Elements/AnimatedCircle.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Spinners/AnimatedCircle",component:_AnimatedCircle__WEBPACK_IMPORTED_MODULE_1__.Z},CenteredStory=_ref=>{let{children}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children})};CenteredStory.displayName="CenteredStory";const Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CenteredStory,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_AnimatedCircle__WEBPACK_IMPORTED_MODULE_1__.Z,{...args})});Template.displayName="Template";const Default=Template.bind({});Default.args={color:"hsl(214, 97%, 59%)",size:"3.25em"};const CustomColor=Template.bind({});CustomColor.args={color:"blue",size:"3.5em"};const CustomSize=Template.bind({});CustomSize.args={color:"green",size:"4em"};const WithClassName=Template.bind({});WithClassName.args={color:"purple",size:"3.75em",className:"my-custom-class"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <CenteredStory>\r\n    <AnimatedCircle {...args} />\r\n  </CenteredStory>",...Default.parameters?.docs?.source}}},CustomColor.parameters={...CustomColor.parameters,docs:{...CustomColor.parameters?.docs,source:{originalSource:"args => <CenteredStory>\r\n    <AnimatedCircle {...args} />\r\n  </CenteredStory>",...CustomColor.parameters?.docs?.source}}},CustomSize.parameters={...CustomSize.parameters,docs:{...CustomSize.parameters?.docs,source:{originalSource:"args => <CenteredStory>\r\n    <AnimatedCircle {...args} />\r\n  </CenteredStory>",...CustomSize.parameters?.docs?.source}}},WithClassName.parameters={...WithClassName.parameters,docs:{...WithClassName.parameters?.docs,source:{originalSource:"args => <CenteredStory>\r\n    <AnimatedCircle {...args} />\r\n  </CenteredStory>",...WithClassName.parameters?.docs?.source}}};const __namedExportsOrder=["Default","CustomColor","CustomSize","WithClassName"]},"./src/Elements/AnimatedCircle.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const StyledSVG=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.svg`
  width: ${props=>props.size||"3.25em"};
  transform-origin: center;
  animation: rotateAnimation 2s linear infinite;

  @keyframes rotateAnimation {
    100% {
      transform: rotate(360deg);
    }
  }
`,StyledCircle=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.circle`
  fill: none;
  stroke: ${props=>props.color||"hsl(214, 97%, 59%)"};
  stroke-width: 2;
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  stroke-linecap: round;
  animation: dashAnimation 1.5s ease-in-out infinite;

  @keyframes dashAnimation {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 200;
      stroke-dashoffset: -35px;
    }

    100% {
      stroke-dashoffset: -125px;
    }
  }
`,AnimatedCircle=_ref=>{let{color,size,className}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(StyledSVG,{viewBox:"25 25 50 50",size,className,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(StyledCircle,{r:"20",cy:"50",cx:"50",color})})};AnimatedCircle.displayName="AnimatedCircle";const __WEBPACK_DEFAULT_EXPORT__=AnimatedCircle;try{AnimatedCircle.displayName="AnimatedCircle",AnimatedCircle.__docgenInfo={description:"",displayName:"AnimatedCircle",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Elements/AnimatedCircle.tsx#AnimatedCircle"]={docgenInfo:AnimatedCircle.__docgenInfo,name:"AnimatedCircle",path:"src/Elements/AnimatedCircle.tsx#AnimatedCircle"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=Elements-_stories_-AnimatedCircle-stories.30a3119b.iframe.bundle.js.map