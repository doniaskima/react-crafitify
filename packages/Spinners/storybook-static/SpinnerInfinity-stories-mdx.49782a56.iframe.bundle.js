"use strict";(self.webpackChunkreact_craftify_spinners=self.webpackChunkreact_craftify_spinners||[]).push([[664],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/blocks.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});var _storybook_client_logger__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("@storybook/client-logger"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");(0,_storybook_client_logger__WEBPACK_IMPORTED_MODULE_0__.deprecate)("Import from '@storybook/addon-docs/blocks' is deprecated. Please import from '@storybook/blocks' instead.")},"./demo/SpinnerInfinity.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:()=>__page,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/blocks.mjs"),_src_Elements_SpinnerInfinity_SpinnerInfinity__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/Elements/SpinnerInfinity/SpinnerInfinity.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h2:"h2",p:"p",em:"em",h3:"h3",ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,{title:"Spinners/SpinnerInfinity",component:_src_Elements_SpinnerInfinity_SpinnerInfinity__WEBPACK_IMPORTED_MODULE_2__.Z}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"spinnerinfinity-brew-some-fun-into-your-ui",children:"SpinnerInfinity: Brew Some Fun into Your UI!"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:["Introducing the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.em,{children:"SpinnerInfinity"})," component, a delightful way to add a touch of warmth and charm to your user interface. ☕🌀"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"Bring the cozy vibe of a coffee break to your app as the SpinnerInfinity swirls and twirls with enchanting animations. Whether it's a caffeine-driven app or just a playful twist to your design, the SpinnerInfinity is here to lift your spirits."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3,{id:"features",children:"Features:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.strong,{children:"Automatic Brewing"}),": The SpinnerInfinity starts its joyful spin as soon as it's summoned, giving your UI an instant dose of cheer."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.strong,{children:"Infinite Sips"}),": Like a bottomless cup, the SpinnerInfinity keeps spinning endlessly, providing a comforting and captivating experience."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.strong,{children:"Easy Integration"}),": Adding the SpinnerInfinity to your project is as smooth as a perfectly brewed latte, thanks to its user-friendly API."]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3,{id:"how-to-brew-the-fun",children:"How to Brew the Fun:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{className:"language-jsx",children:"import React from 'react';\r\nimport SpinnerInfinity from 'react-craftify-buttons';  \r\n\r\nconst MyComponent = () => {\r\n  return (\r\n    <div>\r\n        <SpinnerInfinity style={{ width: \"200px\", height: \"200px\" }} />\r\n    </div>\r\n  );\r\n};\r\n\n"})})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Spinners/SpinnerInfinity",component:_src_Elements_SpinnerInfinity_SpinnerInfinity__WEBPACK_IMPORTED_MODULE_2__.Z,tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta},"./src/Elements/SpinnerInfinity/SpinnerInfinity.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>SpinnerInfinity_SpinnerInfinity});__webpack_require__("./node_modules/react/index.js");var lottie_react_esm=__webpack_require__("./node_modules/@lottiefiles/react-lottie-player/dist/lottie-react.esm.js");const SpinnerInfinity_namespaceObject=JSON.parse('{"v":"4.8.0","meta":{"g":"LottieFiles AE 1.1.0","a":"","k":"","d":"","tc":""},"fr":60,"ip":0,"op":60,"w":1920,"h":1080,"nm":"Comp 12","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Shape Layer 1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[696.075,278.612,0],"to":[274.221,-209.719,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":29,"s":[1271.535,284.69,0],"to":[0,0,0],"ti":[282.326,-205.666,0]},{"t":60,"s":[696.075,278.612,0]}],"ix":2},"a":{"a":0,"k":[-259.925,-261.388,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[13.988,0],[0,-13.988],[-13.988,0],[0,13.988]],"o":[[-13.988,0],[0,13.988],[13.988,0],[0,-13.988]],"v":[[0,-25.328],[-25.328,0],[0,25.328],[25.328,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.717647058824,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-259.925,-261.388],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":60,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Path 1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[959.622,539.674,0],"ix":2},"a":{"a":0,"k":[274.565,112.646,0],"ix":1},"s":{"a":0,"k":[200,200,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[25.098,34.933],[0,0],[0,0],[-46.15,23.4],[-53.202,-33.229],[-37.683,-39.525],[-48.036,-37.298],[-45.775,36.733],[0,0],[19.529,30.358],[134.916,-158.807],[31.472,-16.355]],"o":[[-24.017,-33.429],[0,0],[0,0],[26.481,-16.518],[27.811,17.37],[36.763,38.56],[53.687,35.038],[35.038,-33.342],[0,0],[-33.666,-52.335],[-38.113,44.862],[-73.054,37.965]],"v":[[17.448,179.453],[1.198,87.153],[1.198,87.153],[52.548,17.603],[181.898,20.853],[274.848,107.953],[369.419,189.264],[513.526,199.436],[545.076,122.003],[529.915,39.506],[267.048,122.003],[166.298,208.053]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.717647058824,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":15,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Path 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":0,"k":18,"ix":2},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":60,"s":[360]}],"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":60,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Path 2","sr":1,"ks":{"o":{"a":0,"k":5,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[959.622,539.674,0],"ix":2},"a":{"a":0,"k":[274.565,112.646,0],"ix":1},"s":{"a":0,"k":[200,200,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[25.098,34.933],[0,0],[0,0],[-46.15,23.4],[-53.202,-33.229],[-37.683,-39.525],[-48.036,-37.298],[-45.775,36.733],[0,0],[19.529,30.358],[134.916,-158.807],[31.472,-16.355]],"o":[[-24.017,-33.429],[0,0],[0,0],[26.481,-16.518],[27.811,17.37],[36.763,38.56],[53.687,35.038],[35.038,-33.342],[0,0],[-33.666,-52.335],[-38.113,44.862],[-73.054,37.965]],"v":[[17.448,179.453],[1.198,87.153],[1.198,87.153],[52.548,17.603],[181.898,20.853],[274.848,107.953],[369.419,189.264],[513.526,199.436],[545.076,122.003],[529.915,39.506],[267.048,122.003],[166.298,208.053]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.717647058824,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":15,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Path 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":72,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":60,"st":0,"bm":0}],"markers":[]}');var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const SpinnerInfinity_SpinnerInfinity=_ref=>{let{style}=_ref;return(0,jsx_runtime.jsx)(lottie_react_esm.J5,{autoplay:!0,loop:!0,src:SpinnerInfinity_namespaceObject,style:{...style}})};try{SpinnerInfinity.displayName="SpinnerInfinity",SpinnerInfinity.__docgenInfo={description:"",displayName:"SpinnerInfinity",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Elements/SpinnerInfinity/SpinnerInfinity.tsx#SpinnerInfinity"]={docgenInfo:SpinnerInfinity.__docgenInfo,name:"SpinnerInfinity",path:"src/Elements/SpinnerInfinity/SpinnerInfinity.tsx#SpinnerInfinity"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/tslib/tslib.es6.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_T:()=>__rest,ev:()=>__spreadArray,pi:()=>__assign});var __assign=function(){return __assign=Object.assign||function __assign(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)};function __rest(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t}Object.create;function __spreadArray(to,from,pack){if(pack||2===arguments.length)for(var ar,i=0,l=from.length;i<l;i++)!ar&&i in from||(ar||(ar=Array.prototype.slice.call(from,0,i)),ar[i]=from[i]);return to.concat(ar||Array.prototype.slice.call(from))}Object.create;"function"==typeof SuppressedError&&SuppressedError}}]);