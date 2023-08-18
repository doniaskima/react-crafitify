import{j as e,a as b}from"./jsx-runtime-e6a661ac.js";import{r as l}from"./index-61bf1805.js";import{G as W}from"./iconBase-e697fdb3.js";import{c as A}from"./index-e131923d.js";import"./MenuItem-769d4847.js";import{u as H}from"./useOnClickOutside-a433f730.js";import{u as J}from"./useOnKeyDown-943a5b41.js";import{I as q}from"./IconButton-f8d199e3.js";import{C as Q}from"./CSSTransition-581a361c.js";import{w,a as N,u as R}from"./allowLayoutCalculations-f7241181.js";import"./_commonjsHelpers-de833af9.js";import"./Typography-3a700a27.js";import"./Ripple-55b24a9a.js";import"./extends-98964cd2.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./inheritsLoose-c82a83d4.js";import"./index-2801d3c9.js";import"./index-356e4a49.js";const X=(t,s,c)=>{const[n,a]=l.useState(c??0),u=l.Children.count(t)-1,I=()=>{a(o=>o+1>u?0:o+1)},S=()=>{a(o=>o-1<0?u:o-1)};return l.useEffect(()=>{var i;const o=(i=s.current)==null?void 0:i.children[n];o==null||o.focus()},[n]),{focusNextItem:I,focusPreviousItem:S,focusedSelectItemIndex:n}},Y="_selectContainer_uarxq_2",Z="_select_uarxq_2",ee="_selectInput_uarxq_20",te="_isOpen_uarxq_32",se="_label_uarxq_36",ne="_selectIcon_uarxq_44",ce="_enter_uarxq_60",re="_enterActive_uarxq_65",le="_exit_uarxq_71",oe="_exitActive_uarxq_76",m={selectContainer:Y,select:Z,selectInput:ee,isOpen:te,label:se,selectIcon:ne,enter:ce,enterActive:re,exit:le,exitActive:oe};function ae(t){return W({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M128 192l128 128 128-128z"}}]})(t)}function ie(t){return W({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M128 320l128-128 128 128z"}}]})(t)}const me="_selectOptionsMenu_49fwh_2",ue={selectOptionsMenu:me},pe="_selectItem_lyzwx_2",de="_selected_lyzwx_11",k={selectItem:pe,selected:de},r=t=>{const{className:s,children:c,...n}=t;return e("div",{className:s,...n,children:c})};r.displayName="SelectItem";const V=t=>{const{children:s,selected:c,onClose:n,onSetSelectedIndex:a,selectRef:u,triggerRef:I}=t,S=l.useRef(null),{focusNextItem:o,focusPreviousItem:i,focusedSelectItemIndex:y}=X(s,S,c);return H(u,n),J(["Escape"],()=>{var f;n(),(f=I.current)==null||f.focus()}),e("div",{className:ue.selectOptionsMenu,ref:S,role:"listbox",children:l.Children.map(s,(f,p)=>{const h=f;return h.type===r?l.cloneElement(h,{className:A(k.selectItem,c===p&&k.selected),key:p,onClick:()=>{n(),a(p)},onKeyDown:d=>{var C;d.code==="Space"&&(n(),a(p),(C=I.current)==null||C.focus()),d.code==="ArrowUp"&&i(),d.code==="ArrowDown"&&o()},role:"listitem",tabIndex:p===y?0:void 0}):null})})};V.displayName="SelectContainer";const v=t=>{const{className:s,children:c,isOpen:n=!1,onClose:a,onOpen:u,placeholder:I,selected:S,...o}=t,[i,y]=l.useState(S),[f,p]=l.useState(),h=l.useRef(null),d=l.useRef(null);l.useEffect(()=>{i!==void 0&&p(l.Children.toArray(c)[i])},[i]);const C=$=>{y($)};return b("div",{className:A(s,m.selectContainer),ref:h,...o,children:[e("div",{className:A(m.selectInput,n&&m.isOpen),onClick:()=>{n?a():u()},children:f??e("div",{style:{color:"gray"},children:I})}),n?e(q,{ariaLabel:"Chevron Up",className:m.selectIcon,content:e(ie,{}),onClick:a,ref:d}):e(q,{ariaLabel:"Chevron Down",className:m.selectIcon,content:e(ae,{}),onClick:u,ref:d}),e(Q,{in:n,timeout:200,mountOnEnter:!0,unmountOnExit:!0,classNames:{enter:m.enter,enterActive:m.enterActive,exit:m.exit,exitActive:m.exitActive},children:e(V,{selected:i,isOpen:n,onOpen:u,onClose:a,onSetSelectedIndex:C,selectRef:h,triggerRef:d,children:c})})]})};v.displayName="Select";const ke={component:v,parameters:{chromatic:{delay:2e3}},title:"Components/Inputs/Select"},M=t=>{const[s,c]=l.useState(!1);return b(v,{...t,isOpen:s,onOpen:()=>c(!0),onClose:()=>c(!1),children:[e(r,{children:"CA"}),e(r,{children:"MA"}),e(r,{children:"FL"})]})},g=M.bind({}),O=M.bind({});O.args={placeholder:"State"};O.play=({canvasElement:t})=>{const s=w(t);N(()=>R.click(s.getByRole("button")))};const _=M.bind({});_.args={selected:1};_.play=({canvasElement:t})=>{const s=w(t);N(()=>R.click(s.getByRole("button")))};const x=t=>{const[s,c]=l.useState(!1);return b(v,{...t,isOpen:s,onOpen:()=>c(!0),onClose:()=>c(!1),children:[e(r,{children:"10"}),e(r,{children:"20"}),e(r,{children:"30"}),e(r,{children:"40"}),e(r,{children:"50"}),e(r,{children:"60"}),e(r,{children:"70"}),e(r,{children:"80"}),e(r,{children:"90"})]})};x.play=({canvasElement:t})=>{const s=w(t);N(()=>R.click(s.getByRole("button")))};var E,D,L;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return <Select {...args} isOpen={isOpen} onOpen={() => setIsOpen(true)} onClose={() => setIsOpen(false)}>\r
      <SelectItem>CA</SelectItem>\r
      <SelectItem>MA</SelectItem>\r
      <SelectItem>FL</SelectItem>\r
    </Select>;
}`,...(L=(D=g.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var B,F,z;O.parameters={...O.parameters,docs:{...(B=O.parameters)==null?void 0:B.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return <Select {...args} isOpen={isOpen} onOpen={() => setIsOpen(true)} onClose={() => setIsOpen(false)}>\r
      <SelectItem>CA</SelectItem>\r
      <SelectItem>MA</SelectItem>\r
      <SelectItem>FL</SelectItem>\r
    </Select>;
}`,...(z=(F=O.parameters)==null?void 0:F.docs)==null?void 0:z.source}}};var P,j,G;_.parameters={..._.parameters,docs:{...(P=_.parameters)==null?void 0:P.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return <Select {...args} isOpen={isOpen} onOpen={() => setIsOpen(true)} onClose={() => setIsOpen(false)}>\r
      <SelectItem>CA</SelectItem>\r
      <SelectItem>MA</SelectItem>\r
      <SelectItem>FL</SelectItem>\r
    </Select>;
}`,...(G=(j=_.parameters)==null?void 0:j.docs)==null?void 0:G.source}}};var K,T,U;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return <Select {...args} isOpen={isOpen} onOpen={() => setIsOpen(true)} onClose={() => setIsOpen(false)}>\r
      <SelectItem>10</SelectItem>\r
      <SelectItem>20</SelectItem>\r
      <SelectItem>30</SelectItem>\r
      <SelectItem>40</SelectItem>\r
      <SelectItem>50</SelectItem>\r
      <SelectItem>60</SelectItem>\r
      <SelectItem>70</SelectItem>\r
      <SelectItem>80</SelectItem>\r
      <SelectItem>90</SelectItem>\r
    </Select>;
}`,...(U=(T=x.parameters)==null?void 0:T.docs)==null?void 0:U.source}}};const Ee=["Default","Placeholder","Selected","WithManySelectItems"];export{g as Default,O as Placeholder,_ as Selected,x as WithManySelectItems,Ee as __namedExportsOrder,ke as default};
//# sourceMappingURL=Select.stories-c3d4b86f.js.map
