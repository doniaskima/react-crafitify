"use strict";(self.webpackChunkreact_craftify_spinners=self.webpackChunkreact_craftify_spinners||[]).push([[2304],{"./src/Elements/_stories_/SpinnerCircularSplit.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SpinnerCircularSplit_stories});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),helpers=__webpack_require__("./src/helpers.ts"),withSharedProps=__webpack_require__("./src/withSharedProps.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const spinAnimation=styled_components_browser_esm.F4`
  0% {
    stroke-dashoffset: 1;
    stroke-dasharray: 5, 170;
  }
  10% {
    stroke-dashoffset: 13;
    stroke-dasharray: 30, 145;
  }
  13% {
    stroke-dashoffset: -11;
    stroke-dasharray: 5, 145;
  }
  50% {
    stroke-dasharray: 5, 0, 5, 165;
    stroke-dashoffset: -82;
  }
  51% {
    stroke-dasharray: 2, 0, 2, 139;
    stroke-dashoffset: -85;
  }
  61% {
    stroke-dasharray: 15, 0, 15, 165;
    stroke-dashoffset: -72;
  }
  64% {
    stroke-dasharray: 5, 20, 5, 145;
    stroke-dashoffset: -72;
  }
`,StyledSvg=styled_components_browser_esm.ZP.svg`
  display: block;
`,StyledCircle=styled_components_browser_esm.ZP.circle`
  fill: none;
  stroke: ${props=>props.secondaryColor};
  stroke-width: ${props=>props.thickness/100*4};
`,StyledAnimatedCircle=(0,styled_components_browser_esm.ZP)(StyledCircle)`
  stroke: currentColor;
  stroke-dasharray: 5, 170;
  stroke-dashoffset: 1;
  stroke-linecap: round;
  transform: rotate(-90deg);
  animation: ${props=>props.still?"none":styled_components_browser_esm.iv`
          ${spinAnimation} ${140/props.speed}s linear infinite
        `};
`,Component=_ref=>{let{secondaryColor,speed,still,thickness,...svgProps}=_ref;return(0,jsx_runtime.jsxs)(StyledSvg,{fill:"none",...svgProps,viewBox:"0 0 66 66",children:[(0,jsx_runtime.jsx)(StyledCircle,{cx:"33",cy:"33",r:"28",secondaryColor,thickness}),(0,jsx_runtime.jsx)(StyledAnimatedCircle,{cx:"33",cy:"33",r:"28",thickness,speed,still})]})};Component.displayName="Component",Component.defaultProps=helpers.k;const SpinnerCircularSplit=(0,withSharedProps.k)(Component);try{SpinnerCircularSplit.displayName="SpinnerCircularSplit",SpinnerCircularSplit.__docgenInfo={description:"",displayName:"SpinnerCircularSplit",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},enabled:{defaultValue:null,description:"",name:"enabled",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"Width<string | number>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},speed:{defaultValue:null,description:"",name:"speed",required:!1,type:{name:"number"}},still:{defaultValue:null,description:"",name:"still",required:!1,type:{name:"boolean"}},thickness:{defaultValue:null,description:"",name:"thickness",required:!1,type:{name:"number"}},secondaryColor:{defaultValue:null,description:"",name:"secondaryColor",required:!1,type:{name:"Color"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Elements/SpinnerCircularSplit.tsx#SpinnerCircularSplit"]={docgenInfo:SpinnerCircularSplit.__docgenInfo,name:"SpinnerCircularSplit",path:"src/Elements/SpinnerCircularSplit.tsx#SpinnerCircularSplit"})}catch(__react_docgen_typescript_loader_error){}const SpinnerCircularSplit_stories={title:"Spinners/SpinnerCircularSplit",component:SpinnerCircularSplit},Template=args=>(0,jsx_runtime.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:(0,jsx_runtime.jsx)(SpinnerCircularSplit,{...args})});Template.displayName="Template";const Default=Template.bind({});Default.args={secondaryColor:"#1BFD9C",speed:100,still:!1,thickness:4,width:66,height:66},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <div style={{\n  display: 'flex',\n  justifyContent: 'center',\n  alignItems: 'center',\n  height: '100vh'\n}}>\r\n    <SpinnerCircularSplit {...args} />\r\n  </div>",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/helpers.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>secondaryColorDefaultProps,l:()=>defaultProps});const defaultProps={speed:100,still:!1,thickness:100},secondaryColorDefaultProps={...defaultProps,secondaryColor:"rgba(0,0,0,0.44)"}},"./src/withSharedProps.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>withSharedProps});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const defaultProps={color:"#38ad48",enabled:!0,size:50,style:{}},normalizeSize=size=>parseFloat(size.toString()).toString()===size.toString()?`${size}px`:size.toString(),withSharedProps=Component=>{const Wrapper=props=>{const{color,enabled,size,style,...otherProps}=props,componentProps={...otherProps,style:{color,overflow:"visible",width:normalizeSize(size),...style}};return enabled?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Component,{...componentProps}):null};return Wrapper.defaultProps=defaultProps,Wrapper};try{withSharedProps.displayName="withSharedProps",withSharedProps.__docgenInfo={description:"",displayName:"withSharedProps",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/withSharedProps.tsx#withSharedProps"]={docgenInfo:withSharedProps.__docgenInfo,name:"withSharedProps",path:"src/withSharedProps.tsx#withSharedProps"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=Elements-_stories_-SpinnerCircularSplit-stories.d5f0fcec.iframe.bundle.js.map