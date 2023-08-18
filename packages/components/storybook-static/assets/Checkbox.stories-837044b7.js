import{a as R,j as c}from"./jsx-runtime-e6a661ac.js";import{r as i}from"./index-61bf1805.js";import{c as k}from"./index-e131923d.js";import{g as j,h as v}from"./index.esm-6e9c663b.js";import{I as A}from"./IconButton-f8d199e3.js";import{T as E}from"./Typography-3a700a27.js";import"./_commonjsHelpers-de833af9.js";import"./iconBase-e697fdb3.js";import"./Ripple-55b24a9a.js";const M="_container_1x4xo_2",O="_disabled_1x4xo_9",r={container:M,disabled:O},a=e=>{const{children:s,className:y,disabled:C=!1,isChecked:h=!1,onChange:N,...B}=e;return R("div",{className:r.container,children:[c(A,{className:k(y,h&&r.isChecked),content:h?c(j,{}):c(v,{}),onClick:N,disabled:C,role:"checkbox",variant:"secondary",...B}),c(E,{className:k(C&&r.disabled,h&&r.checked),variant:"secondary",children:s})]})};a.displayName="Checkbox";const L={component:a,title:"Components/Inputs/Checkbox"},t=()=>{const[e,s]=i.useState(!1);return c(a,{isChecked:e,onChange:()=>s(!e),children:"Default"})},o=()=>{const[e,s]=i.useState(!1);return c(a,{disabled:!0,isChecked:e,onChange:()=>s(!e),children:"Disabled"})},n=()=>{const[e,s]=i.useState(!0);return c(a,{disabled:!0,isChecked:e,onChange:()=>s(!e),children:"Disabled"})},d=()=>{const[e,s]=i.useState(!0);return c(a,{isChecked:e,onChange:()=>s(!e),children:"Checked"})};var l,u,m;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  const [isChecked, setIsChecked] = React.useState<boolean>(false);
  return <Checkbox isChecked={isChecked} onChange={() => setIsChecked(!isChecked)}>\r
      Default\r
    </Checkbox>;
}`,...(m=(u=t.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var b,p,x;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  const [isChecked, setIsChecked] = React.useState<boolean>(false);
  return <Checkbox disabled isChecked={isChecked} onChange={() => setIsChecked(!isChecked)}>\r
      Disabled\r
    </Checkbox>;
}`,...(x=(p=o.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var f,g,I;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  const [isChecked, setIsChecked] = React.useState<boolean>(true);
  return <Checkbox disabled isChecked={isChecked} onChange={() => setIsChecked(!isChecked)}>\r
      Disabled\r
    </Checkbox>;
}`,...(I=(g=n.parameters)==null?void 0:g.docs)==null?void 0:I.source}}};var D,S,_;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  const [isChecked, setIsChecked] = React.useState<boolean>(true);
  return <Checkbox isChecked={isChecked} onChange={() => setIsChecked(!isChecked)}>\r
      Checked\r
    </Checkbox>;
}`,...(_=(S=d.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};const P=["Default","Disabled","DisabledAndChecked","Checked"];export{d as Checked,t as Default,o as Disabled,n as DisabledAndChecked,P as __namedExportsOrder,L as default};
//# sourceMappingURL=Checkbox.stories-837044b7.js.map
