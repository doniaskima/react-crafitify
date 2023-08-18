import{j as s}from"./jsx-runtime-e6a661ac.js";import{r as g}from"./index-61bf1805.js";import{A as X,a as W}from"./index.esm-a30d7021.js";import{T as S}from"./TextField-d7c238f5.js";import"./_commonjsHelpers-de833af9.js";import"./iconBase-e697fdb3.js";import"./index-e131923d.js";const re={component:S,title:"Components/Inputs/TextField"},e=r=>{const[n,a]=g.useState("");return s(S,{...r,onChange:t=>{a(t.target.value)},value:n})},v=e.bind({}),o=e.bind({});o.args={size:"small"};const l=e.bind({});l.args={size:"medium"};const u=e.bind({});u.args={size:"large"};const c=e.bind({});c.args={label:"TextField"};const i=e.bind({});i.args={disabled:!0,label:"Disabled"};const p=e.bind({});p.args={trailingIcon:s(X,{})};const d=e.bind({});d.args={type:"password"};const m=()=>{const[r,n]=g.useState(""),[a,t]=g.useState("password");return s(S,{onChange:y=>{n(y.target.value)},trailingIcon:s(W,{onClick:()=>{t(a==="password"?"text":"password")}}),type:a,value:r})},T=()=>{const[r,n]=g.useState(""),[a,t]=g.useState("password");return s(S,{label:"TextField",size:"small",onChange:y=>{n(y.target.value)},trailingIcon:s(W,{onClick:()=>{t(a==="password"?"text":"password")}}),type:a,value:r})};var x,V,F;v.parameters={...v.parameters,docs:{...(x=v.parameters)==null?void 0:x.docs,source:{originalSource:`args => {
  const [value, setValue] = React.useState<string>("");
  return <TextField {...args} onChange={event => {
    setValue(event.target.value);
  }} value={value} />;
}`,...(F=(V=v.parameters)==null?void 0:V.docs)==null?void 0:F.source}}};var b,w,C;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
  const [value, setValue] = React.useState<string>("");
  return <TextField {...args} onChange={event => {
    setValue(event.target.value);
  }} value={value} />;
}`,...(C=(w=o.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var h,R,A;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  const [value, setValue] = React.useState<string>("");
  return <TextField {...args} onChange={event => {
    setValue(event.target.value);
  }} value={value} />;
}`,...(A=(R=l.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var f,I,L;u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
  const [value, setValue] = React.useState<string>("");
  return <TextField {...args} onChange={event => {
    setValue(event.target.value);
  }} value={value} />;
}`,...(L=(I=u.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var P,z,D;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`args => {
  const [value, setValue] = React.useState<string>("");
  return <TextField {...args} onChange={event => {
    setValue(event.target.value);
  }} value={value} />;
}`,...(D=(z=c.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var E,k,_;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`args => {
  const [value, setValue] = React.useState<string>("");
  return <TextField {...args} onChange={event => {
    setValue(event.target.value);
  }} value={value} />;
}`,...(_=(k=i.parameters)==null?void 0:k.docs)==null?void 0:_.source}}};var j,M,O;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`args => {
  const [value, setValue] = React.useState<string>("");
  return <TextField {...args} onChange={event => {
    setValue(event.target.value);
  }} value={value} />;
}`,...(O=(M=p.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var q,B,G;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`args => {
  const [value, setValue] = React.useState<string>("");
  return <TextField {...args} onChange={event => {
    setValue(event.target.value);
  }} value={value} />;
}`,...(G=(B=d.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};var H,J,K;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState<string>("");
  const [type, setType] = React.useState<TextFieldType>("password");
  return <TextField onChange={event => {
    setValue(event.target.value);
  }} trailingIcon={<AiFillEye onClick={() => {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  }} />} type={type} value={value} />;
}`,...(K=(J=m.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var N,Q,U;T.parameters={...T.parameters,docs:{...(N=T.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState<string>("");
  const [type, setType] = React.useState<TextFieldType>("password");
  return <TextField label="TextField" size="small" onChange={event => {
    setValue(event.target.value);
  }} trailingIcon={<AiFillEye onClick={() => {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  }} />} type={type} value={value} />;
}`,...(U=(Q=T.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};const ne=["Default","Small","Medium","Large","Label","DisabledAndLabel","TrailingIcon","PasswordType","TrailingIconAndPasswordType","AllProps"];export{T as AllProps,v as Default,i as DisabledAndLabel,c as Label,u as Large,l as Medium,d as PasswordType,o as Small,p as TrailingIcon,m as TrailingIconAndPasswordType,ne as __namedExportsOrder,re as default};
//# sourceMappingURL=TextField.stories-95a40071.js.map
