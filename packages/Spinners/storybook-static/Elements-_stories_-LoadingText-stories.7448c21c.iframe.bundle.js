"use strict";(self.webpackChunkreact_craftify_spinners=self.webpackChunkreact_craftify_spinners||[]).push([[1778],{"./src/Elements/_stories_/LoadingText.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>LoadingText_stories});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const GlitchAnimation=styled_components_browser_esm.F4`
  0% {
    transform: translate(0);
  }

  20% {
    transform: translate(-3px, 3px);
  }

  40% {
    transform: translate(-3px, -3px);
  }

  60% {
    transform: translate(3px, 3px);
  }

  80% {
    transform: translate(3px, -3px);
  }

  to {
    transform: translate(0);
  }
`,ShiftAnimation=styled_components_browser_esm.F4`
  0%, 40%, 44%, 58%, 61%, 65%, 69%, 73%, 100% {
    transform: skewX(0deg);
  }

  41% {
    transform: skewX(10deg);
  }

  42% {
    transform: skewX(-10deg);
  }

  59% {
    transform: skewX(40deg) skewY(10deg);
  }

  60% {
    transform: skewX(-40deg) skewY(-10deg);
  }

  63% {
    transform: skewX(10deg) skewY(-5deg);
  }

  70% {
    transform: skewX(-50deg) skewY(-20deg);
  }

  71% {
    transform: skewX(10deg) skewY(-10deg);
  }
`,LoaderWrapper=styled_components_browser_esm.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #000;
`,GlitchText=styled_components_browser_esm.ZP.div`
  position: relative;
  font-size: 25px;
  font-weight: 700;
  line-height: 1.2;
  color: #fff;
  letter-spacing: 5px;
  z-index: 1;
  animation: ${ShiftAnimation} 1s ease-in-out infinite alternate;
`,GlitchEffect=styled_components_browser_esm.ZP.div`
  display: block;
  content: attr(data-glitch);
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.8;
`,GlitchEffectBefore=(0,styled_components_browser_esm.ZP)(GlitchEffect)`
  animation: ${GlitchAnimation} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
  color: #8b00ff;
  z-index: -1;
`,GlitchEffectAfter=(0,styled_components_browser_esm.ZP)(GlitchEffect)`
  animation: ${GlitchAnimation} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both infinite;
  color: #00e571;
  z-index: -2;
`,LoadingText=()=>(0,jsx_runtime.jsx)(LoaderWrapper,{children:(0,jsx_runtime.jsxs)(GlitchText,{"data-glitch":"Loading...",children:[(0,jsx_runtime.jsx)(GlitchEffectBefore,{}),(0,jsx_runtime.jsx)(GlitchEffectAfter,{}),"Loading..."]})});LoadingText.displayName="LoadingText";const Elements_LoadingText=LoadingText,LoadingText_stories={title:"Spinners/LoadingText",component:Elements_LoadingText},Template=()=>(0,jsx_runtime.jsx)(Elements_LoadingText,{});Template.displayName="Template";const Default=Template.bind({});Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"() => <LoadingText />",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]}}]);
//# sourceMappingURL=Elements-_stories_-LoadingText-stories.7448c21c.iframe.bundle.js.map