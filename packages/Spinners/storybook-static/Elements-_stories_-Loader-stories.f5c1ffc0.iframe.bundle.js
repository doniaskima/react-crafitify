"use strict";(self.webpackChunkreact_craftify_spinners=self.webpackChunkreact_craftify_spinners||[]).push([[8182],{"./src/Elements/_stories_/Loader.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Loader__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/Elements/Loader.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Spinners/Loader",component:_Loader__WEBPACK_IMPORTED_MODULE_0__.Z,parameters:{controls:{expanded:!0}},argTypes:{type:{description:"Type of the loader component",options:["ring","rotate","dots"],control:{type:"select"}},color:{control:{type:"color"}}}},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{style:{display:"flex",width:"100%",justifyContent:"center",alignItems:"center",height:"150px",gap:"50px"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Loader__WEBPACK_IMPORTED_MODULE_0__.Z,{...args}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Loader__WEBPACK_IMPORTED_MODULE_0__.Z,{...args,type:"rotate"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Loader__WEBPACK_IMPORTED_MODULE_0__.Z,{...args,type:"dots"})]});Template.displayName="Template";const Default=Template.bind({});Default.args={size:32,borderSize:4},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <div style={{\n  display: 'flex',\n  width: '100%',\n  justifyContent: 'center',\n  alignItems: 'center',\n  height: '150px',\n  gap: '50px'\n}}>\r\n    <Loader {...args} />\r\n    <Loader {...args} type=\"rotate\" />\r\n    <Loader {...args} type=\"dots\" />\r\n  </div>",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/Elements/Loader.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Elements_Loader});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const loading=styled_components_browser_esm.F4`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,rotation=styled_components_browser_esm.F4`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,dotsAnimation=styled_components_browser_esm.F4`
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
`,LoaderRingContainer=styled_components_browser_esm.ZP.div`
  display: inline-block;
  position: relative;
  width: ${props=>`${props.size}px`};
  height: ${props=>`${props.size}px`};

  & > div {
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    box-sizing: border-box;
    position: absolute;
    width: ${props=>`${props.size}px`};
    height: ${props=>`${props.size}px`};
    margin: auto;
    border: ${props=>`${props.borderSize}px solid ${props.color}`};
    border-radius: 50%;
    animation: ${loading} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${props=>`${props.color} transparent transparent transparent`};
  }

  & > div:nth-of-type(1) {
    animation-delay: -0.45s;
  }

  & > div:nth-of-type(2) {
    animation-delay: -0.3s;
  }

  & > div:nth-of-type(3) {
    animation-delay: -0.15s;
  }
`,LoaderRotateContainer=styled_components_browser_esm.ZP.div`
  width: ${props=>`${props.size}px`};
  height: ${props=>`${props.size}px`};
  border-radius: 50%;
  display: inline-block;
  border-top: ${props=>`${props.borderSize}px solid ${props.color}`};
  border-right: 3px solid transparent;
  box-sizing: border-box;
  animation: ${rotation} 1s linear infinite;
`,LoaderDotsContainder=styled_components_browser_esm.ZP.div`
  width: ${props=>`${props.size}px`};
  height: ${props=>`${props.size}px`};
  display: inline-block;
  position: relative;

  &::after,
  &::before {
    content: '';
    box-sizing: border-box;
    width: ${props=>`${props.size}px`};
    height: ${props=>`${props.size}px`};
    border-radius: 50%;
    background: ${props=>props.color};
    position: absolute;
    left: 0;
    top: 0;
    animation: ${dotsAnimation} 2s linear infinite;
  }

  &::after {
    animation-delay: 0.5s;
  }
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const{black}={black:"#000000",dismiss:"#7f8c8d",primary:"#7666f1",error:"#e03a3b",secondary:"#3e989b","dismiss-lighter":"#899697","dismiss-darker":"#6b7879","primary-lighter":"#9484ff","primary-darker":"#5848d3","error-lighter":"#fe5859","error-darker":"#c21c1d","secondary-lighter":"#52acaf","secondary-darker":"#207a7d"},Loader=_ref=>{let{color=black,size=64,borderSize=8,type="ring"}=_ref;return{ring:(0,jsx_runtime.jsxs)(LoaderRingContainer,{color,size,borderSize,children:[(0,jsx_runtime.jsx)("div",{}),(0,jsx_runtime.jsx)("div",{}),(0,jsx_runtime.jsx)("div",{}),(0,jsx_runtime.jsx)("div",{})]}),dots:(0,jsx_runtime.jsx)(LoaderDotsContainder,{color,size}),rotate:(0,jsx_runtime.jsx)(LoaderRotateContainer,{color,size,borderSize})}[type]},Elements_Loader=Loader;try{Loader.displayName="Loader",Loader.__docgenInfo={description:"",displayName:"Loader",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},size:{defaultValue:{value:"64"},description:"",name:"size",required:!1,type:{name:"number"}},type:{defaultValue:{value:"ring"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"ring"'},{value:'"rotate"'},{value:'"dots"'}]}},borderSize:{defaultValue:{value:"8"},description:"",name:"borderSize",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Elements/Loader.tsx#Loader"]={docgenInfo:Loader.__docgenInfo,name:"Loader",path:"src/Elements/Loader.tsx#Loader"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=Elements-_stories_-Loader-stories.f5c1ffc0.iframe.bundle.js.map