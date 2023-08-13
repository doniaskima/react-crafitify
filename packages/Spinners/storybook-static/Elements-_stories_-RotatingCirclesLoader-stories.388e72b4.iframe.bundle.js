"use strict";(self.webpackChunkreact_craftify_spinners=self.webpackChunkreact_craftify_spinners||[]).push([[117],{"./src/Elements/_stories_/RotatingCirclesLoader.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomClassName:()=>CustomClassName,CustomColor:()=>CustomColor,Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _RotatingCirclesLoader__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Elements/RotatingCirclesLoader.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Spinners/RotatingCirclesLoader",component:_RotatingCirclesLoader__WEBPACK_IMPORTED_MODULE_1__.Z,argTypes:{color:{control:"color"},className:{control:"text"}},parameters:{layout:"centered"}},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_RotatingCirclesLoader__WEBPACK_IMPORTED_MODULE_1__.Z,{...args});Template.displayName="Template";const Default=Template.bind({});Default.args={};const CustomColor=Template.bind({});CustomColor.args={color:"#00ff00"};const CustomClassName=Template.bind({});CustomClassName.args={className:"custom-style"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <RotatingCirclesLoader {...args} />",...Default.parameters?.docs?.source}}},CustomColor.parameters={...CustomColor.parameters,docs:{...CustomColor.parameters?.docs,source:{originalSource:"args => <RotatingCirclesLoader {...args} />",...CustomColor.parameters?.docs?.source}}},CustomClassName.parameters={...CustomClassName.parameters,docs:{...CustomClassName.parameters?.docs,source:{originalSource:"args => <RotatingCirclesLoader {...args} />",...CustomClassName.parameters?.docs?.source}}};const __namedExportsOrder=["Default","CustomColor","CustomClassName"]},"./src/Elements/RotatingCirclesLoader.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const rotateAnimation=styled_components__WEBPACK_IMPORTED_MODULE_2__.F4`
  to {
    transform: rotate(1turn);
  }
`,LoaderContainer=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  width: 6em;
  height: 6em;
  font-size: 10px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`,Face=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  position: absolute;
  border-radius: 50%;
  border-style: solid;
  animation: ${rotateAnimation} 3s linear infinite;
`,Circle=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  position: absolute;
  width: 50%;
  height: 0.1em;
  top: 50%;
  left: 50%;
  background-color: transparent;
  transform: rotate(var(--deg));
  transform-origin: left;

  &::before {
    position: absolute;
    top: -0.5em;
    right: -0.5em;
    content: '';
    width: 1em;
    height: 1em;
    background-color: currentColor;
    border-radius: 50%;
    box-shadow: 0 0 2em,
      0 0 4em,
      0 0 6em,
      0 0 8em,
      0 0 10em,
      0 0 0 0.5em rgba(255, 255, 0, 0.1);
  }
`,RotatingCirclesLoader=_ref=>{let{color="currentColor",className}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(LoaderContainer,{className,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Face,{style:{width:"100%",height:"100%",color,borderColor:`${color} transparent transparent currentColor`},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Circle,{})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Face,{style:{width:"70%",height:"70%",color,borderColor:`currentColor ${color} transparent transparent`},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Circle,{style:{"--deg":"-135deg"}})})]})};RotatingCirclesLoader.displayName="RotatingCirclesLoader";const __WEBPACK_DEFAULT_EXPORT__=RotatingCirclesLoader;try{RotatingCirclesLoader.displayName="RotatingCirclesLoader",RotatingCirclesLoader.__docgenInfo={description:"",displayName:"RotatingCirclesLoader",props:{color:{defaultValue:{value:"currentColor"},description:"",name:"color",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Elements/RotatingCirclesLoader.tsx#RotatingCirclesLoader"]={docgenInfo:RotatingCirclesLoader.__docgenInfo,name:"RotatingCirclesLoader",path:"src/Elements/RotatingCirclesLoader.tsx#RotatingCirclesLoader"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=Elements-_stories_-RotatingCirclesLoader-stories.388e72b4.iframe.bundle.js.map