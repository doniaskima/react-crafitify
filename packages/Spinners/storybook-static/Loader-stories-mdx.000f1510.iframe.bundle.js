"use strict";(self.webpackChunkreact_craftify_spinners=self.webpackChunkreact_craftify_spinners||[]).push([[7244],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/blocks.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});var _storybook_client_logger__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("@storybook/client-logger"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");(0,_storybook_client_logger__WEBPACK_IMPORTED_MODULE_0__.deprecate)("Import from '@storybook/addon-docs/blocks' is deprecated. Please import from '@storybook/blocks' instead.")},"./demo/Loader.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:()=>__page,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/blocks.mjs"),_src_Elements_Loader__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/Elements/Loader.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",ul:"ul",li:"li",pre:"pre"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,{title:"Spinners/Loader",component:_src_Elements_Loader__WEBPACK_IMPORTED_MODULE_2__.LoaderRingContainer,parameters:{controls:{expanded:!0}},argTypes:{color:{control:{type:"color"}}}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h1,{id:"loader",children:"Loader"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:["The ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"Loader"})," component provides various spinner animations that can be used to indicate loading or processing in your application."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"loaderringcontainer",children:"LoaderRingContainer"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:["The ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"LoaderRingContainer"})," displays a rotating ring spinner. It takes the following props:"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"size"})," (number): The size of the spinner in pixels."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"borderSize"})," (number): The thickness of the spinner ring."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"color"})," (string): The color of the spinner."]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"Example usage:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{className:"language-jsx",children:'<LoaderRingContainer size={32} borderSize={4} color="#007bff" />\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"loaderrotatecontainer",children:"LoaderRotateContainer"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"The LoaderRotateContainer displays a rotating bar spinner. It takes the following props:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"size"})," (number): The size of the spinner in pixels."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"borderSize"})," (number): The thickness of the spinner ring."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"color"})," (string): The color of the spinner."]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{className:"language-jsx",children:'<LoaderRotateContainer size={32} borderSize={4} color="#007bff" />\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"loaderdotscontainder",children:"LoaderDotsContainder"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"The LoaderRotateContainer displays a rotating bar spinner. It takes the following props:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"size"})," (number): The size of the spinner in pixels."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"color"})," (string): The color of the spinner."]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{className:"language-jsx",children:'<LoaderDotsContainder size={32} color="#007bff" />\n'})})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Spinners/Loader",parameters:{controls:{expanded:!0}},component:_src_Elements_Loader__WEBPACK_IMPORTED_MODULE_2__.LoaderRingContainer,argTypes:{color:{control:{type:"color"}}},tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta},"./src/Elements/Loader.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Elements_Loader});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const loading=styled_components_browser_esm.F4`
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
//# sourceMappingURL=Loader-stories-mdx.000f1510.iframe.bundle.js.map