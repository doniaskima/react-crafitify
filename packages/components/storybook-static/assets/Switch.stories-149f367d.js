import{a as h,j as o}from"./jsx-runtime-e6a661ac.js";import{r as b}from"./index-61bf1805.js";import{c as i}from"./index-e131923d.js";import{R as f}from"./Ripple-55b24a9a.js";import{T as y}from"./Typography-3a700a27.js";import{w as C,a as R,u as L}from"./allowLayoutCalculations-f7241181.js";import"./_commonjsHelpers-de833af9.js";import"./index-356e4a49.js";const N="_switchContainer_1dpz6_2",z="_switchPill_1dpz6_13",k="_on_1dpz6_22",x="_switchIndicator_1dpz6_26",I="_switchRipple_1dpz6_44",O="_switchLabel_1dpz6_62",t={switchContainer:N,switchPill:z,on:k,switchIndicator:x,switchRipple:I,switchLabel:O},r=c=>{const{className:e,isOn:s=!1,label:l,...g}=c;return h("button",{"aria-checked":s,className:i(e,t.switchContainer,s&&t.on),role:"switch",type:"button",...g,children:[h("span",{className:i(t.switchPill,s&&t.on),children:[o("span",{className:i(t.switchIndicator,s&&t.on)}),o("span",{className:i(t.switchRipple,s&&t.on),children:o(f,{duration:800,position:"center"})})]}),l&&o(y,{className:i(t.switchLabel,s&&t.on),children:l})]})};r.displayName="Switch";const q={component:r,parameters:{chromatic:{delay:2e3}},title:"Components/Inputs/Switch"},_=c=>{const[e,s]=b.useState(!1);return o(r,{...c,isOn:e,onClick:()=>s(!e)})},n=_.bind({}),a=_.bind({});a.args={label:" Switch Label"};a.play=({canvasElement:c})=>{const e=C(c);R(()=>L.click(e.getByRole("switch")))};var p,w,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  const [switchState, toggleSwitchState] = React.useState<boolean>(false);
  return <Switch {...args} isOn={switchState} onClick={() => toggleSwitchState(!switchState)} />;
}`,...(m=(w=n.parameters)==null?void 0:w.docs)==null?void 0:m.source}}};var d,S,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  const [switchState, toggleSwitchState] = React.useState<boolean>(false);
  return <Switch {...args} isOn={switchState} onClick={() => toggleSwitchState(!switchState)} />;
}`,...(u=(S=a.parameters)==null?void 0:S.docs)==null?void 0:u.source}}};const A=["Default","WithLabel"];export{n as Default,a as WithLabel,A as __namedExportsOrder,q as default};
//# sourceMappingURL=Switch.stories-149f367d.js.map
