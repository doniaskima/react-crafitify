"use strict";(self.webpackChunkreact_craftify_spinners=self.webpackChunkreact_craftify_spinners||[]).push([[4542],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/blocks.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});var _storybook_client_logger__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("@storybook/client-logger"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");(0,_storybook_client_logger__WEBPACK_IMPORTED_MODULE_0__.deprecate)("Import from '@storybook/addon-docs/blocks' is deprecated. Please import from '@storybook/blocks' instead.")},"./demo/SpinnerCircular.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:()=>__page,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/blocks.mjs"),_src_Elements_SpinnerCircular__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/Elements/SpinnerCircular.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h3:"h3",pre:"pre",code:"code"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,{title:"Spinners/SpinnerCircular",component:_src_Elements_SpinnerCircular__WEBPACK_IMPORTED_MODULE_2__.s}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h1,{id:"spinnercircular",children:"SpinnerCircular"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"A circular spinner component."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{className:"language-jsx",children:"import React from 'react';\r\nimport { SpinnerCircular } from 'your-library'; // Replace 'your-library' with the actual path\r\n\r\nfunction App() {\r\n  return (\r\n    <div>\r\n      <h1>Adding Joyful Animation to Your UI!</h1>\r\n      <SpinnerCircular\r\n        secondaryColor=\"#1BFD9C\" // Customize the secondary color\r\n        speed={1.2} // Adjust the animation speed\r\n        still={false} // Set to true to stop the animation\r\n        thickness={5} // Customize the thickness of the spinner\r\n        style={{ width: \"200px\", height: \"200px\" }} // Set the size of the spinner\r\n      />\r\n    </div>\r\n  );\r\n}\r\n\r\nexport default App;\r\n\r\n\n"})})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Spinners/SpinnerCircular",component:_src_Elements_SpinnerCircular__WEBPACK_IMPORTED_MODULE_2__.s,tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta},"./src/Elements/SpinnerCircular.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>SpinnerCircular});__webpack_require__("./node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_helpers__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/helpers.ts"),_withSharedProps__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/withSharedProps.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const spinAnimation=styled_components__WEBPACK_IMPORTED_MODULE_4__.F4`
  0% {
    stroke-dashoffset: 306;
  }
  50% {
    stroke-dasharray: 40, 134;
  }
  100% {
    stroke-dasharray: 1, 174;
    stroke-dashoffset: 132;
  }
`,StyledSvg=styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP.svg`
  display: block;
`,StyledCircle=styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP.circle`
  fill: none;
  stroke: ${props=>props.secondaryColor};
  stroke-width: ${props=>props.thickness/100*4};
`,StyledAnimatedCircle=(0,styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP)(StyledCircle)`
  stroke: currentColor;
  stroke-dasharray: 1, 174;
  stroke-dashoffset: 306;
  stroke-linecap: round;
  animation: ${props=>props.still?"none":styled_components__WEBPACK_IMPORTED_MODULE_4__.iv`
          ${spinAnimation} ${140/props.speed}s linear infinite
        `};
`,Component=_ref=>{let{secondaryColor,speed,still,thickness,...svgProps}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(StyledSvg,{fill:"none",...svgProps,viewBox:"0 0 66 66",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(StyledCircle,{cx:"33",cy:"33",r:"28",secondaryColor,thickness}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(StyledAnimatedCircle,{cx:"33",cy:"33",r:"28",thickness,speed,still})]})};Component.displayName="Component",Component.defaultProps=_helpers__WEBPACK_IMPORTED_MODULE_1__.k;const SpinnerCircular=(0,_withSharedProps__WEBPACK_IMPORTED_MODULE_2__.k)(Component);try{SpinnerCircular.displayName="SpinnerCircular",SpinnerCircular.__docgenInfo={description:"",displayName:"SpinnerCircular",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},enabled:{defaultValue:null,description:"",name:"enabled",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"Width<string | number>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},speed:{defaultValue:null,description:"",name:"speed",required:!1,type:{name:"number"}},still:{defaultValue:null,description:"",name:"still",required:!1,type:{name:"boolean"}},thickness:{defaultValue:null,description:"",name:"thickness",required:!1,type:{name:"number"}},secondaryColor:{defaultValue:null,description:"",name:"secondaryColor",required:!1,type:{name:"Color"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Elements/SpinnerCircular.tsx#SpinnerCircular"]={docgenInfo:SpinnerCircular.__docgenInfo,name:"SpinnerCircular",path:"src/Elements/SpinnerCircular.tsx#SpinnerCircular"})}catch(__react_docgen_typescript_loader_error){}},"./src/helpers.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>secondaryColorDefaultProps,l:()=>defaultProps});const defaultProps={speed:100,still:!1,thickness:100},secondaryColorDefaultProps={...defaultProps,secondaryColor:"rgba(0,0,0,0.44)"}},"./src/withSharedProps.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>withSharedProps});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const defaultProps={color:"#38ad48",enabled:!0,size:50,style:{}},normalizeSize=size=>parseFloat(size.toString()).toString()===size.toString()?`${size}px`:size.toString(),withSharedProps=Component=>{const Wrapper=props=>{const{color,enabled,size,style,...otherProps}=props,componentProps={...otherProps,style:{color,overflow:"visible",width:normalizeSize(size),...style}};return enabled?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Component,{...componentProps}):null};return Wrapper.defaultProps=defaultProps,Wrapper};try{withSharedProps.displayName="withSharedProps",withSharedProps.__docgenInfo={description:"",displayName:"withSharedProps",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/withSharedProps.tsx#withSharedProps"]={docgenInfo:withSharedProps.__docgenInfo,name:"withSharedProps",path:"src/withSharedProps.tsx#withSharedProps"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=SpinnerCircular-stories-mdx.b5ab8954.iframe.bundle.js.map