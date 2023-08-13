"use strict";(self.webpackChunkreact_craftify_spinners=self.webpackChunkreact_craftify_spinners||[]).push([[980],{"./src/Elements/_stories_/CustomSpinner.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Centered:()=>Centered,Colored:()=>Colored,CustomClass:()=>CustomClass,Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _CustomSpinner__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Elements/CustomSpinner.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Spinners/CustomSpinner",component:_CustomSpinner__WEBPACK_IMPORTED_MODULE_1__.Z,argTypes:{color:{control:"color"},center:{control:"boolean"},className:{control:"text"}},parameters:{layout:"centered"}},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_CustomSpinner__WEBPACK_IMPORTED_MODULE_1__.Z,{...args});Template.displayName="Template";const Default=Template.bind({});Default.args={};const Colored=Template.bind({});Colored.args={color:"#ff0000"};const Centered=Template.bind({});Centered.args={center:!0};const CustomClass=Template.bind({});CustomClass.args={className:"custom-spinner"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <CustomSpinner {...args} />",...Default.parameters?.docs?.source}}},Colored.parameters={...Colored.parameters,docs:{...Colored.parameters?.docs,source:{originalSource:"args => <CustomSpinner {...args} />",...Colored.parameters?.docs?.source}}},Centered.parameters={...Centered.parameters,docs:{...Centered.parameters?.docs,source:{originalSource:"args => <CustomSpinner {...args} />",...Centered.parameters?.docs?.source}}},CustomClass.parameters={...CustomClass.parameters,docs:{...CustomClass.parameters?.docs,source:{originalSource:"args => <CustomSpinner {...args} />",...CustomClass.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Colored","Centered","CustomClass"]},"./src/Elements/CustomSpinner.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const spinnerFadeAnimation=styled_components__WEBPACK_IMPORTED_MODULE_2__.F4`
  0% {
    background-color: #69717d;
  }

  100% {
    background-color: transparent;
  }
`,SpinnerContainer=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  font-size: 28px;
  position: relative;
  display: inline-block;
  width: 1em;
  height: 1em;

  &.center {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }
`,SpinnerBlade=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  position: absolute;
  left: 0.4629em;
  bottom: 0;
  width: 0.074em;
  height: 0.2777em;
  border-radius: 0.0555em;
  background-color: transparent;
  transform-origin: center -0.2222em;
  animation: ${spinnerFadeAnimation} 1s infinite linear;

  ${props=>props.index&&`\n    animation-delay: ${.083*props.index}s;\n    transform: rotate(${30*props.index}deg);\n  `}

  ${props=>props.color&&`\n    background-color: ${props.color};\n  `}
`,CustomSpinner=_ref=>{let{color,center}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SpinnerContainer,{className:"spinner "+(center?"center":""),children:[...Array(12)].map(((_,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SpinnerBlade,{index:index+1,style:{backgroundColor:color}},index)))})};CustomSpinner.displayName="CustomSpinner";const __WEBPACK_DEFAULT_EXPORT__=CustomSpinner;try{CustomSpinner.displayName="CustomSpinner",CustomSpinner.__docgenInfo={description:"",displayName:"CustomSpinner",props:{color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"any"}},center:{defaultValue:null,description:"",name:"center",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Elements/CustomSpinner.tsx#CustomSpinner"]={docgenInfo:CustomSpinner.__docgenInfo,name:"CustomSpinner",path:"src/Elements/CustomSpinner.tsx#CustomSpinner"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=Elements-_stories_-CustomSpinner-stories.f627caf3.iframe.bundle.js.map