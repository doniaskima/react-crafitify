"use strict";(self.webpackChunkreact_craftify_spinners=self.webpackChunkreact_craftify_spinners||[]).push([[5553],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/blocks.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});var _storybook_client_logger__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("@storybook/client-logger"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");(0,_storybook_client_logger__WEBPACK_IMPORTED_MODULE_0__.deprecate)("Import from '@storybook/addon-docs/blocks' is deprecated. Please import from '@storybook/blocks' instead.")},"./demo/PlaceholderLoader.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:()=>__page,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/blocks.mjs"),_src_Elements_PlaceholderLoader__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/Elements/PlaceholderLoader.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,{title:"Spinners/PlaceholderLoader",component:_src_Elements_PlaceholderLoader__WEBPACK_IMPORTED_MODULE_2__.Z}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h1,{id:"placeholderloader",children:"PlaceholderLoader"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"The PlaceholderLoader component displays a loading animation with placeholder elements."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"default",children:"Default"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{className:"language-jsx",children:"import React from 'react';\r\nimport NewtonsCradle from 'react-craftify-spinners';\r\n\r\nconst MyComponent = () => {\r\n  return (\r\n    <div>\r\n      <h1>Loading</h1>\r\n        <PlaceholderLoader width=\"250px\" height=\"130px\" />\r\n    </div>\r\n  );\r\n};\n"})})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Spinners/PlaceholderLoader",component:_src_Elements_PlaceholderLoader__WEBPACK_IMPORTED_MODULE_2__.Z,tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta},"./src/Elements/PlaceholderLoader.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const PlaceholderAnimation=styled_components__WEBPACK_IMPORTED_MODULE_2__.F4`
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
//# sourceMappingURL=PlaceholderLoader-stories-mdx.43ce7d0f.iframe.bundle.js.map