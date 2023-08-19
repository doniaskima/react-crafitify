"use strict";(self.webpackChunkreact_craftify_spinners=self.webpackChunkreact_craftify_spinners||[]).push([[9828],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/blocks.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});var _storybook_client_logger__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("@storybook/client-logger"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");(0,_storybook_client_logger__WEBPACK_IMPORTED_MODULE_0__.deprecate)("Import from '@storybook/addon-docs/blocks' is deprecated. Please import from '@storybook/blocks' instead.")},"./demo/NewtonsCradle.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__,defaultStory:()=>defaultStory});__webpack_require__("./node_modules/react/index.js");var _storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/blocks.mjs"),_src_Elements_NewtonsCradle__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/Elements/NewtonsCradle.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",ul:"ul",li:"li",pre:"pre"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,{title:"Spinners/NewtonsCradle",component:_src_Elements_NewtonsCradle__WEBPACK_IMPORTED_MODULE_2__.Z}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h1,{id:"newtons-cradle--the-dance-of-momentum-",children:"Newton's Cradle: 🌟 The Dance of Momentum 🌟"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"A customizable Newton's Cradle component that demonstrates the physics of conservation of momentum. ⚖️✨"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:["To use the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"NewtonsCradle"})," component, import it and render it in your React application. You can customize the appearance of the Newton's Cradle using the following props:"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"color"}),": Change the color of the balls. 🎨🔵"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"className"}),": Add a custom className to the component. 🆒🖋️"]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"default",children:"Default"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Default",args:{}})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{className:"language-jsx",children:"import React from 'react';\r\nimport NewtonsCradle from 'react-craftify-spinners';\r\n\r\nconst MyComponent = () => {\r\n  return (\r\n    <div>\r\n      <h1>Loading</h1>\r\n      <NewtonsCradle />\r\n    </div>\r\n  );\r\n};\r\n\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"custom-color",children:"Custom Color"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"You can change the color of the Newton's Cradle balls by using the color prop. 🌈🔴"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{className:"language-jsx",children:"import React from 'react';\r\nimport NewtonsCradle from 'react-craftify-spinners/NewtonsCradle';\r\n\r\nconst MyComponent = () => {\r\n  return (\r\n    <div>\r\n      <h1>Loading</h1>\r\n      <NewtonsCradle color=\"#00ff00\" />\r\n    </div>\r\n  );\r\n};\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"custom-classname",children:"Custom ClassName"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"You can add a custom className to the Newton's Cradle component by using the className prop. 🆒🎩"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{className:"language-jsx",children:"import React from 'react';\r\nimport NewtonsCradle from 'react-craftify-spinners/NewtonsCradle';\r\n\r\nconst MyComponent = () => {\r\n  return (\r\n    <div>\r\n      <h1>Loading</h1>\r\n      <NewtonsCradle className=\"your className\" />\r\n    </div>\r\n  );\r\n};\n"})})]})}const defaultStory={storyName:"Default",args:{},parameters:{storySource:{source:"{}"}}},componentMeta={title:"Spinners/NewtonsCradle",component:_src_Elements_NewtonsCradle__WEBPACK_IMPORTED_MODULE_2__.Z,tags:["stories-mdx"],includeStories:["defaultStory"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta},"./src/Elements/NewtonsCradle.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const swingAnimation=styled_components__WEBPACK_IMPORTED_MODULE_2__.F4`
  0% {
    transform: rotate(0deg);
    animation-timing-function: ease-out;
  }

  25% {
    transform: rotate(70deg);
    animation-timing-function: ease-in;
  }

  50% {
    transform: rotate(0deg);
    animation-timing-function: linear;
  }
`,swing2Animation=styled_components__WEBPACK_IMPORTED_MODULE_2__.F4`
  0% {
    transform: rotate(0deg);
    animation-timing-function: linear;
  }

  50% {
    transform: rotate(0deg);
    animation-timing-function: ease-out;
  }

  75% {
    transform: rotate(-70deg);
    animation-timing-function: ease-in;
  }
`,NewtonsCradleContainer=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  --uib-size: 50px;
  --uib-speed: 1.2s;
  --uib-color: ${props=>props.color||"#474554"};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--uib-size);
  height: var(--uib-size);
`,NewtonsCradleDot=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  width: 25%;
  transform-origin: center top;

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 25%;
    border-radius: 50%;
    background-color: var(--uib-color);
  }

  &:first-child {
    animation: ${swingAnimation} var(--uib-speed) linear infinite;
  }

  &:last-child {
    animation: ${swing2Animation} var(--uib-speed) linear infinite;
  }
};`,NewtonsCradle=_ref=>{let{color,className}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(NewtonsCradleContainer,{className,color,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(NewtonsCradleDot,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(NewtonsCradleDot,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(NewtonsCradleDot,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(NewtonsCradleDot,{})]})};NewtonsCradle.displayName="NewtonsCradle";const __WEBPACK_DEFAULT_EXPORT__=NewtonsCradle;try{NewtonsCradle.displayName="NewtonsCradle",NewtonsCradle.__docgenInfo={description:"",displayName:"NewtonsCradle",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Elements/NewtonsCradle.tsx#NewtonsCradle"]={docgenInfo:NewtonsCradle.__docgenInfo,name:"NewtonsCradle",path:"src/Elements/NewtonsCradle.tsx#NewtonsCradle"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=NewtonsCradle-stories-mdx.4af009cc.iframe.bundle.js.map