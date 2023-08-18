import{j as t,a as r,F as bt}from"./jsx-runtime-e6a661ac.js";import{r as i}from"./index-61bf1805.js";import{B as _t}from"./Backdrop-f82c2594.js";import{I as vt}from"./IconButton-f8d199e3.js";import"./MenuItem-769d4847.js";import{u as Tt}from"./useOnClickOutside-a433f730.js";import{u as yt}from"./useOnKeyDown-943a5b41.js";import{G as Nt}from"./iconBase-e697fdb3.js";import{F as Vt}from"./FocusTrap-244593d1.js";import{S as x}from"./Separator-652f3cb8.js";import{c as k}from"./index-e131923d.js";import{T as W}from"./Typography-3a700a27.js";import{C as Ft}from"./CSSTransition-581a361c.js";import{B as n}from"./Button-c88e35e0.js";import{B as u}from"./ButtonSet-40a9bf0d.js";import"./_commonjsHelpers-de833af9.js";import"./Ripple-55b24a9a.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./extends-98964cd2.js";import"./medium-f4a61dfe.js";import"./inheritsLoose-c82a83d4.js";import"./defineProperty-f2693585.js";import"./index-2801d3c9.js";const Rt=o=>i.useEffect(()=>{const e=document.body.style;e.overflowY=o?"hidden":"auto"},[o]),kt="_dialogBackground_3irhm_2",xt="_center_3irhm_11",Wt="_left_3irhm_15",zt="_right_3irhm_18",Lt="_bottom_3irhm_21",wt="_enter_3irhm_26",At="_enterActive_3irhm_30",Et="_exit_3irhm_35",Ht="_exitActive_3irhm_39",p={dialogBackground:kt,center:xt,left:Wt,right:zt,bottom:Lt,enter:wt,enterActive:At,exit:Et,exitActive:Ht},$t="_dialogContainer_uycoz_2",jt="_center_uycoz_8",Mt="_bottom_uycoz_11",Gt="_left_uycoz_15",Kt="_right_uycoz_15",Xt="_dialogHeader_uycoz_21",Yt="_dialogContent_uycoz_28",qt="_dialogButtons_uycoz_33",Jt="_dialogTitle_uycoz_41",Pt="_dialogButtonsContainer_uycoz_45",Qt="_dialogIcon_uycoz_49",c={dialogContainer:$t,center:jt,bottom:Mt,left:Gt,right:Kt,dialogHeader:Xt,dialogContent:Yt,dialogButtons:qt,dialogTitle:Jt,dialogButtonsContainer:Pt,dialogIcon:Qt};function Ut(o){return Nt({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M18 6l-12 12"}},{tag:"path",attr:{d:"M6 6l12 12"}}]})(o)}const St=o=>{const{ariaLabel:e,buttons:l,className:s,content:F,onClose:d,title:y,variant:g,...R}=o,N=i.useRef(null);return Tt(N,d),yt(["Escape"],d),t(Vt,{children:r("div",{"aria-label":e??"dialog",className:k(s,c.dialogContainer,g==="bottom"&&c.bottom,g==="center"&&c.center,g==="left"&&c.left,g==="right"&&c.right),ref:N,role:"dialog",...R,children:[r("div",{className:c.dialogHeader,children:[t(W,{className:c.dialogTitle,type:"h1",variant:"primary",children:y}),t(vt,{className:c.dialogIcon,content:t(Ut,{}),onClick:d})]}),(g==="left"||g==="right")&&t(x,{direction:"horizontal",stroke:1}),t(W,{className:c.dialogContent,type:"h2",variant:"primary",children:F}),l&&r("div",{className:k(g==="left"&&c.dialogButtonsContainer,g==="right"&&c.dialogButtonsContainer),children:[t(x,{direction:"horizontal",stroke:1}),t("div",{className:c.dialogButtons,children:l})]})]})})};St.displayName="BaseDialog";const a=o=>{const{ariaLabel:e,buttons:l,className:s,content:F,hasBackdrop:d=!0,isOpen:y=!1,onClose:g,onOpen:R,title:N,trigger:ft,variant:O="center",...It}=o;return Rt(y),r(bt,{children:[i.cloneElement(ft,{onClick:R,role:"button",tabIndex:0}),t(Ft,{in:y,timeout:250,mountOnEnter:!0,unmountOnExit:!0,classNames:{enter:p.enter,enterActive:p.enterActive,exit:p.exit,exitActive:p.exitActive},children:t(_t,{showBackground:d,children:t("div",{className:k(p.dialogBackground,O==="bottom"&&p.bottom,O==="center"&&p.center,O==="left"&&p.left,O==="right"&&p.right),children:t(St,{ariaLabel:e,buttons:l,className:s,content:F,onClose:g,title:N,variant:O,...It})})})})]})};a.displayName="Dialog";const Ie={component:a,title:"Components/Feedback/Dialog"},V=()=>{const[o,e]=i.useState(!1);return t(a,{content:"Dialog Content",isOpen:o,onOpen:()=>e(!0),onClose:()=>e(!1),trigger:t(n,{children:"Open Dialog!"}),title:"Dialog Title"})},D=()=>{const[o,e]=i.useState(!0);return t(a,{content:"Dialog Content",isOpen:o,onOpen:()=>e(!0),onClose:()=>e(!1),trigger:t(n,{children:"Open Dialog!"}),title:"Dialog Title",variant:"bottom"})};D.storyName="Variant: Bottom";const m=()=>{const[o,e]=i.useState(!0);return t(a,{buttons:r(u,{children:[t(n,{children:"Cancel"}),t(n,{children:"Confirm"})]}),content:"Dialog Content",isOpen:o,onOpen:()=>e(!0),onClose:()=>e(!1),trigger:t(n,{children:"Open Dialog!"}),title:"Dialog Title",variant:"bottom"})};m.storyName="Variant: Bottom with Button Set";const B=()=>{const[o,e]=i.useState(!0),[l,s]=i.useState(!0);return t(a,{buttons:r(u,{children:[t(n,{children:"Cancel"}),t(a,{buttons:r(u,{children:[t(n,{children:"Cancel"}),t(n,{children:"Confirm"})]}),content:"Dialog Content",hasBackdrop:!1,isOpen:l,onOpen:()=>s(!0),onClose:()=>s(!1),trigger:t(n,{children:"Open Second Dialog!"}),title:"Dialog Title",variant:"bottom"})]}),content:"Dialog Content",isOpen:o,onOpen:()=>e(!0),onClose:()=>e(!1),trigger:t(n,{children:"Open Dialog!"}),title:"Dialog Title",variant:"bottom"})};B.storyName="Variant: Bottom with Nested Dialogs";const h=()=>{const[o,e]=i.useState(!0);return t(a,{content:"Dialog Content",isOpen:o,onOpen:()=>e(!0),onClose:()=>e(!1),trigger:t(n,{children:"Open Dialog!"}),title:"Dialog Title",variant:"center"})};h.storyName="Variant: Center";const C=()=>{const[o,e]=i.useState(!0);return t(a,{buttons:r(u,{children:[t(n,{children:"Cancel"}),t(n,{children:"Confirm"})]}),content:"Dialog Content",isOpen:o,onOpen:()=>e(!0),onClose:()=>e(!1),trigger:t(n,{children:"Open Dialog!"}),title:"Dialog Title",variant:"center"})};C.storyName="Variant: Center with Button Set";const S=()=>{const[o,e]=i.useState(!0),[l,s]=i.useState(!0);return t(a,{buttons:r(u,{children:[t(n,{children:"Cancel"}),t(a,{buttons:r(u,{children:[t(n,{children:"Cancel"}),t(n,{children:"Confirm"})]}),content:"Dialog Content",hasBackdrop:!1,isOpen:l,onOpen:()=>s(!0),onClose:()=>s(!1),trigger:t(n,{children:"Open Second Dialog!"}),title:"Dialog Title",variant:"center"})]}),content:"Dialog Content",isOpen:o,onOpen:()=>e(!0),onClose:()=>e(!1),trigger:t(n,{children:"Open Dialog!"}),title:"Dialog Title",variant:"center"})};S.storyName="Variant: Center with Nested Dialogs";const f=()=>{const[o,e]=i.useState(!0);return t(a,{content:"Dialog Content",isOpen:o,onOpen:()=>e(!0),onClose:()=>e(!1),trigger:t(n,{children:"Open Dialog!"}),title:"Dialog Title",variant:"left"})};f.storyName="Variant: Left";const I=()=>{const[o,e]=i.useState(!0);return t(a,{buttons:r(u,{children:[t(n,{children:"Cancel"}),t(n,{children:"Confirm"})]}),content:"Dialog Content",isOpen:o,onOpen:()=>e(!0),onClose:()=>e(!1),trigger:t(n,{children:"Open Dialog!"}),title:"Dialog Title",variant:"left"})};I.storyName="Variant: Left with Button Set";const b=()=>{const[o,e]=i.useState(!0),[l,s]=i.useState(!0);return t(a,{buttons:r(u,{children:[t(n,{children:"Cancel"}),t(a,{buttons:r(u,{children:[t(n,{children:"Cancel"}),t(n,{children:"Confirm"})]}),content:"Dialog Content",hasBackdrop:!1,isOpen:l,onOpen:()=>s(!0),onClose:()=>s(!1),trigger:t(n,{children:"Open Second Dialog!"}),title:"Dialog Title",variant:"left"})]}),content:"Dialog Content",isOpen:o,onOpen:()=>e(!0),onClose:()=>e(!1),trigger:t(n,{children:"Open Dialog!"}),title:"Dialog Title",variant:"left"})};b.storyName="Variant: Left with Nested Dialogs";const _=()=>{const[o,e]=i.useState(!0);return t(a,{content:"Dialog Content",isOpen:o,onOpen:()=>e(!0),onClose:()=>e(!1),trigger:t(n,{children:"Open Dialog!"}),title:"Dialog Title",variant:"right"})};_.storyName="Variant: Right";const v=()=>{const[o,e]=i.useState(!0);return t(a,{buttons:r(u,{children:[t(n,{children:"Cancel"}),t(n,{children:"Confirm"})]}),content:"Dialog Content",isOpen:o,onOpen:()=>e(!0),onClose:()=>e(!1),trigger:t(n,{children:"Open Dialog!"}),title:"Dialog Title",variant:"right"})};v.storyName="Variant: Right with Button Set";const T=()=>{const[o,e]=i.useState(!0),[l,s]=i.useState(!0);return t(a,{buttons:r(u,{children:[t(n,{children:"Cancel"}),t(a,{buttons:r(u,{children:[t(n,{children:"Cancel"}),t(n,{children:"Confirm"})]}),content:"Dialog Content",hasBackdrop:!1,isOpen:l,onOpen:()=>s(!0),onClose:()=>s(!1),trigger:t(n,{children:"Open Second Dialog!"}),title:"Dialog Title",variant:"right"})]}),content:"Dialog Content",isOpen:o,onOpen:()=>e(!0),onClose:()=>e(!1),trigger:t(n,{children:"Open Dialog!"}),title:"Dialog Title",variant:"right"})};T.storyName="Variant: Right with Nested Dialogs";var z,L,w;V.parameters={...V.parameters,docs:{...(z=V.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return <Dialog content="Dialog Content" isOpen={isOpen} onOpen={() => setIsOpen(true)} onClose={() => setIsOpen(false)} trigger={<Button>Open Dialog!</Button>} title="Dialog Title" />;
}`,...(w=(L=V.parameters)==null?void 0:L.docs)==null?void 0:w.source}}};var A,E,H;D.parameters={...D.parameters,docs:{...(A=D.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = React.useState<boolean>(true);
  return <Dialog content="Dialog Content" isOpen={isOpen} onOpen={() => setIsOpen(true)} onClose={() => setIsOpen(false)} trigger={<Button>Open Dialog!</Button>} title="Dialog Title" variant="bottom" />;
}`,...(H=(E=D.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var $,j,M;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = React.useState<boolean>(true);
  return <Dialog buttons={<ButtonSet>\r
          <Button>Cancel</Button>\r
          <Button>Confirm</Button>\r
        </ButtonSet>} content="Dialog Content" isOpen={isOpen} onOpen={() => setIsOpen(true)} onClose={() => setIsOpen(false)} trigger={<Button>Open Dialog!</Button>} title="Dialog Title" variant="bottom" />;
}`,...(M=(j=m.parameters)==null?void 0:j.docs)==null?void 0:M.source}}};var G,K,X;B.parameters={...B.parameters,docs:{...(G=B.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
  const [isFirstDialogOpen, setIsFirstDialogOpen] = React.useState<boolean>(true);
  const [isSecondDialogOpen, setSecondDialogIsOpen] = React.useState<boolean>(true);
  return <Dialog buttons={<ButtonSet>\r
          <Button>Cancel</Button>\r
          <Dialog buttons={<ButtonSet>\r
                <Button>Cancel</Button>\r
                <Button>Confirm</Button>\r
              </ButtonSet>} content="Dialog Content" hasBackdrop={false} isOpen={isSecondDialogOpen} onOpen={() => setSecondDialogIsOpen(true)} onClose={() => setSecondDialogIsOpen(false)} trigger={<Button>Open Second Dialog!</Button>} title="Dialog Title" variant="bottom" />\r
        </ButtonSet>} content="Dialog Content" isOpen={isFirstDialogOpen} onOpen={() => setIsFirstDialogOpen(true)} onClose={() => setIsFirstDialogOpen(false)} trigger={<Button>Open Dialog!</Button>} title="Dialog Title" variant="bottom" />;
}`,...(X=(K=B.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};var Y,q,J;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = React.useState<boolean>(true);
  return <Dialog content="Dialog Content" isOpen={isOpen} onOpen={() => setIsOpen(true)} onClose={() => setIsOpen(false)} trigger={<Button>Open Dialog!</Button>} title="Dialog Title" variant="center" />;
}`,...(J=(q=h.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var P,Q,U;C.parameters={...C.parameters,docs:{...(P=C.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = React.useState<boolean>(true);
  return <Dialog buttons={<ButtonSet>\r
          <Button>Cancel</Button>\r
          <Button>Confirm</Button>\r
        </ButtonSet>} content="Dialog Content" isOpen={isOpen} onOpen={() => setIsOpen(true)} onClose={() => setIsOpen(false)} trigger={<Button>Open Dialog!</Button>} title="Dialog Title" variant="center" />;
}`,...(U=(Q=C.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var Z,tt,et;S.parameters={...S.parameters,docs:{...(Z=S.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  const [isFirstDialogOpen, setIsFirstDialogOpen] = React.useState<boolean>(true);
  const [isSecondDialogOpen, setSecondDialogIsOpen] = React.useState<boolean>(true);
  return <Dialog buttons={<ButtonSet>\r
          <Button>Cancel</Button>\r
          <Dialog buttons={<ButtonSet>\r
                <Button>Cancel</Button>\r
                <Button>Confirm</Button>\r
              </ButtonSet>} content="Dialog Content" hasBackdrop={false} isOpen={isSecondDialogOpen} onOpen={() => setSecondDialogIsOpen(true)} onClose={() => setSecondDialogIsOpen(false)} trigger={<Button>Open Second Dialog!</Button>} title="Dialog Title" variant="center" />\r
        </ButtonSet>} content="Dialog Content" isOpen={isFirstDialogOpen} onOpen={() => setIsFirstDialogOpen(true)} onClose={() => setIsFirstDialogOpen(false)} trigger={<Button>Open Dialog!</Button>} title="Dialog Title" variant="center" />;
}`,...(et=(tt=S.parameters)==null?void 0:tt.docs)==null?void 0:et.source}}};var nt,ot,it;f.parameters={...f.parameters,docs:{...(nt=f.parameters)==null?void 0:nt.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = React.useState<boolean>(true);
  return <Dialog content="Dialog Content" isOpen={isOpen} onOpen={() => setIsOpen(true)} onClose={() => setIsOpen(false)} trigger={<Button>Open Dialog!</Button>} title="Dialog Title" variant="left" />;
}`,...(it=(ot=f.parameters)==null?void 0:ot.docs)==null?void 0:it.source}}};var at,rt,st;I.parameters={...I.parameters,docs:{...(at=I.parameters)==null?void 0:at.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = React.useState<boolean>(true);
  return <Dialog buttons={<ButtonSet>\r
          <Button>Cancel</Button>\r
          <Button>Confirm</Button>\r
        </ButtonSet>} content="Dialog Content" isOpen={isOpen} onOpen={() => setIsOpen(true)} onClose={() => setIsOpen(false)} trigger={<Button>Open Dialog!</Button>} title="Dialog Title" variant="left" />;
}`,...(st=(rt=I.parameters)==null?void 0:rt.docs)==null?void 0:st.source}}};var lt,ct,ut;b.parameters={...b.parameters,docs:{...(lt=b.parameters)==null?void 0:lt.docs,source:{originalSource:`() => {
  const [isFirstDialogOpen, setIsFirstDialogOpen] = React.useState<boolean>(true);
  const [isSecondDialogOpen, setSecondDialogIsOpen] = React.useState<boolean>(true);
  return <Dialog buttons={<ButtonSet>\r
          <Button>Cancel</Button>\r
          <Dialog buttons={<ButtonSet>\r
                <Button>Cancel</Button>\r
                <Button>Confirm</Button>\r
              </ButtonSet>} content="Dialog Content" hasBackdrop={false} isOpen={isSecondDialogOpen} onOpen={() => setSecondDialogIsOpen(true)} onClose={() => setSecondDialogIsOpen(false)} trigger={<Button>Open Second Dialog!</Button>} title="Dialog Title" variant="left" />\r
        </ButtonSet>} content="Dialog Content" isOpen={isFirstDialogOpen} onOpen={() => setIsFirstDialogOpen(true)} onClose={() => setIsFirstDialogOpen(false)} trigger={<Button>Open Dialog!</Button>} title="Dialog Title" variant="left" />;
}`,...(ut=(ct=b.parameters)==null?void 0:ct.docs)==null?void 0:ut.source}}};var gt,pt,dt;_.parameters={..._.parameters,docs:{...(gt=_.parameters)==null?void 0:gt.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = React.useState<boolean>(true);
  return <Dialog content="Dialog Content" isOpen={isOpen} onOpen={() => setIsOpen(true)} onClose={() => setIsOpen(false)} trigger={<Button>Open Dialog!</Button>} title="Dialog Title" variant="right" />;
}`,...(dt=(pt=_.parameters)==null?void 0:pt.docs)==null?void 0:dt.source}}};var Ot,Dt,mt;v.parameters={...v.parameters,docs:{...(Ot=v.parameters)==null?void 0:Ot.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = React.useState<boolean>(true);
  return <Dialog buttons={<ButtonSet>\r
          <Button>Cancel</Button>\r
          <Button>Confirm</Button>\r
        </ButtonSet>} content="Dialog Content" isOpen={isOpen} onOpen={() => setIsOpen(true)} onClose={() => setIsOpen(false)} trigger={<Button>Open Dialog!</Button>} title="Dialog Title" variant="right" />;
}`,...(mt=(Dt=v.parameters)==null?void 0:Dt.docs)==null?void 0:mt.source}}};var Bt,ht,Ct;T.parameters={...T.parameters,docs:{...(Bt=T.parameters)==null?void 0:Bt.docs,source:{originalSource:`() => {
  const [isFirstDialogOpen, setIsFirstDialogOpen] = React.useState<boolean>(true);
  const [isSecondDialogOpen, setSecondDialogIsOpen] = React.useState<boolean>(true);
  return <Dialog buttons={<ButtonSet>\r
          <Button>Cancel</Button>\r
          <Dialog buttons={<ButtonSet>\r
                <Button>Cancel</Button>\r
                <Button>Confirm</Button>\r
              </ButtonSet>} content="Dialog Content" hasBackdrop={false} isOpen={isSecondDialogOpen} onOpen={() => setSecondDialogIsOpen(true)} onClose={() => setSecondDialogIsOpen(false)} trigger={<Button>Open Second Dialog!</Button>} title="Dialog Title" variant="right" />\r
        </ButtonSet>} content="Dialog Content" isOpen={isFirstDialogOpen} onOpen={() => setIsFirstDialogOpen(true)} onClose={() => setIsFirstDialogOpen(false)} trigger={<Button>Open Dialog!</Button>} title="Dialog Title" variant="right" />;
}`,...(Ct=(ht=T.parameters)==null?void 0:ht.docs)==null?void 0:Ct.source}}};const be=["Default","VariantBottom","VariantBottomWithButtonSet","VariantBottomWithNestedDialogs","VariantCenter","VariantCenterWithButtonSet","VariantCenterWithNestedDialogs","VariantLeft","VariantLeftWithButtonSet","VariantLeftWithNestedDialogs","VariantRight","VariantRightWithButtonSet","VariantRightWithNestedDialogs"];export{V as Default,D as VariantBottom,m as VariantBottomWithButtonSet,B as VariantBottomWithNestedDialogs,h as VariantCenter,C as VariantCenterWithButtonSet,S as VariantCenterWithNestedDialogs,f as VariantLeft,I as VariantLeftWithButtonSet,b as VariantLeftWithNestedDialogs,_ as VariantRight,v as VariantRightWithButtonSet,T as VariantRightWithNestedDialogs,be as __namedExportsOrder,Ie as default};
//# sourceMappingURL=Dialog.stories-2c2a6048.js.map