import{j as r,a as E}from"./jsx-runtime-e6a661ac.js";import{r as a}from"./index-61bf1805.js";import{w as c,a as p,u as l}from"./allowLayoutCalculations-f7241181.js";import{c as w}from"./index-e131923d.js";import{M as m}from"./MenuItem-769d4847.js";import{u as we}from"./useOnClickOutside-a433f730.js";import{u as He}from"./useOnKeyDown-943a5b41.js";import{g as ke}from"./getLayoutStyle-ef736a71.js";import{C as xe}from"./CSSTransition-581a361c.js";import{B as ve}from"./Button-c88e35e0.js";import{S as Le}from"./Separator-652f3cb8.js";import{T as Fe}from"./Typography-3a700a27.js";import"./_commonjsHelpers-de833af9.js";import"./index-356e4a49.js";import"./extends-98964cd2.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./inheritsLoose-c82a83d4.js";import"./index-2801d3c9.js";import"./Ripple-55b24a9a.js";const $=(t,e)=>{let n=t+1>e.length-1?0:t+1;for(;e[n].type!==m;)n+1>e.length-1?n=0:n+=1;return n},Ee=(t,e)=>{let n=t-1<0?e.length-1:t-1;for(;e[n].type!==m;)n-1<0?n=e.length-1:n-=1;return n},Pe=(t,e)=>{const n=a.Children.toArray(t),[o,u]=a.useState($(-1,n)),M=()=>{u(s=>$(s,n))},I=()=>{u(s=>Ee(s,n))};return a.useEffect(()=>{var i;const s=(i=e.current)==null?void 0:i.children[o];setTimeout(()=>s==null?void 0:s.focus(),120)},[]),a.useEffect(()=>{var i;const s=(i=e.current)==null?void 0:i.children[o];s==null||s.focus()},[o]),{focusNextItem:M,focusPreviousItem:I,focusedMenuItemIndex:o}},We="_container_1g26b_2",$e="_enter_1g26b_8",De="_top_1g26b_11",je="_bottom_1g26b_14",ze="_enterActive_1g26b_18",Ke="_exit_1g26b_26",Ue="_exitActive_1g26b_30",qe="_trigger_1g26b_41",Ge="_isOpen_1g26b_44",g={container:We,enter:$e,top:De,bottom:je,enterActive:ze,exit:Ke,exitActive:Ue,trigger:qe,isOpen:Ge},Je="_baseMenu_xzn6l_2",Qe={baseMenu:Je},Re=a.forwardRef((t,e)=>{const{children:n,onClose:o,triggerRef:u}=t,M=a.useRef(null),{focusNextItem:I,focusPreviousItem:s,focusedMenuItemIndex:i}=Pe(n,M);return we([M,u],o),He(["Escape"],()=>{var d;o(),(d=u.current)==null||d.focus()}),r("div",{className:Qe.baseMenu,ref:e,children:r("div",{ref:M,role:"menu",children:a.Children.map(n,(d,P)=>{const Te=d;return a.cloneElement(Te,{key:P,onClick:o,onKeyDown:x=>{var W;x.code==="Space"&&(o(),(W=u.current)==null||W.focus()),x.code==="ArrowUp"&&s(),x.code==="ArrowDown"&&I()},tabIndex:P===i?0:void 0})})})})});Re.displayName="BaseMenu";const Ve="_layoutContainer_pyxin_1",Xe="_bottom_pyxin_8",Ye="_top_pyxin_12",L={layoutContainer:Ve,bottom:Xe,top:Ye},Ze=({alignment:t,referrerRef:e,targetRef:n})=>ke({calculateLayout({referrerHeight:o,referrerWidth:u,targetHeight:M,targetWidth:I}){const s=t==="topLeft"||t==="bottomLeft"?0:t==="topCenter"||t==="bottomCenter"?(I-u)/2:I-u,i=t.startsWith("bottom")?M+2:-o-2;return{left:s,top:i}},referrerRef:e,targetRef:n}),_e=t=>{const{alignment:e,className:n,triggerRef:o,...u}=t,[M,I]=a.useState({visibility:"hidden"}),s=a.useRef(null);return a.useEffect(()=>{I(Ze({alignment:e,referrerRef:s,targetRef:o}))},[e,s,o]),r("div",{className:w(n,e.startsWith("bottom")&&L.bottom,e.startsWith("top")&&L.top,L.layoutContainer),ref:s,style:M,...u})};_e.displayName="MenuLayoutContainer";const k=t=>{const{alignment:e="bottomLeft",children:n,isOpen:o=!1,onClose:u,onOpen:M,trigger:I,...s}=t,i=a.useRef(null),d=a.useRef(null);return E("span",{className:w(e.startsWith("bottom")&&g.bottom,e.startsWith("top")&&g.top,g.container),...s,children:[a.cloneElement(I,{className:w(o&&g.isOpen,g.trigger),onClick:()=>{o?u():M()},ref:d,role:"button",tabIndex:0}),r(xe,{classNames:{enter:g.enter,enterActive:g.enterActive,exit:g.exit,exitActive:g.exitActive},in:o,mountOnEnter:!0,nodeRef:i,timeout:150,unmountOnExit:!0,children:r(_e,{alignment:e,triggerRef:d,children:r(Re,{onClose:u,ref:i,triggerRef:d,children:n})})})]})};k.displayName="Menu";const et="_menuSeparator_1yv2g_1",tt={menuSeparator:et},F=t=>{const{ariaLabel:e,className:n,...o}=t;return r(Le,{ariaLabel:e,className:w(n,tt.menuSeparator),direction:"horizontal",stroke:1,...o})};F.displayName="MenuSeparator";const nt="_menuHeader_1j2xi_2",rt={menuHeader:nt},Ne=t=>{const{children:e,className:n,...o}=t;return r(Fe,{className:w(rt.menuHeader,n),role:"presentation",type:"h3",variant:"primary",...o,children:e.toUpperCase()})};Ne.displayName="MenuHeader";const bt={component:k,parameters:{chromatic:{delay:2e3},layout:"centered"},title:"Components/Navigation/Menu"},N=t=>{const[e,n]=a.useState(!1);return E(k,{...t,isOpen:e,onOpen:()=>n(!0),onClose:()=>n(!1),trigger:r(ve,{variant:"secondary",children:"Click Me!"}),children:[r(m,{children:"Menu Item One"}),r(m,{children:"Menu Item Two"}),r(m,{children:"Menu Item Three"}),r(m,{children:"Menu Item Four"})]})},T=t=>{const[e,n]=a.useState(!1);return E(k,{...t,isOpen:e,onOpen:()=>n(!0),onClose:()=>n(!1),trigger:r(ve,{variant:"secondary",children:"Click Me!"}),children:[r(m,{children:"New File"}),r(m,{children:"New Folder"}),r(m,{children:"Save As"}),r(F,{}),r(Ne,{children:"Edit"}),r(m,{children:"Cut"}),r(m,{children:"Copy"}),r(m,{children:"Paste"}),r(F,{}),r(m,{children:"Print"})]})},H=N.bind({}),O=N.bind({});O.args={alignment:"bottomLeft"};O.play=({canvasElement:t})=>{const e=c(t);p(()=>l.click(e.getByRole("button")))};O.storyName="Alignment: Bottom Left";const f=T.bind({});f.args={alignment:"bottomLeft"};f.play=({canvasElement:t})=>{const e=c(t);p(()=>l.click(e.getByRole("button")))};f.storyName="Alignment: Bottom Left with Header and Separator";const y=N.bind({});y.args={alignment:"bottomRight"};y.play=({canvasElement:t})=>{const e=c(t);p(()=>l.click(e.getByRole("button")))};y.storyName="Alignment: Bottom Right";const h=T.bind({});h.args={alignment:"bottomRight"};h.play=({canvasElement:t})=>{const e=c(t);p(()=>l.click(e.getByRole("button")))};h.storyName="Alignment: Bottom Right with Header and Separator";const S=N.bind({});S.args={alignment:"bottomCenter"};S.play=({canvasElement:t})=>{const e=c(t);p(()=>l.click(e.getByRole("button")))};S.storyName="Alignment: Bottom Center";const C=T.bind({});C.args={alignment:"bottomCenter"};C.play=({canvasElement:t})=>{const e=c(t);p(()=>l.click(e.getByRole("button")))};C.storyName="Alignment: Bottom Center with Header and Separator";const b=N.bind({});b.args={alignment:"topLeft"};b.play=({canvasElement:t})=>{const e=c(t);p(()=>l.click(e.getByRole("button")))};b.storyName="Alignment: Top Left";const A=T.bind({});A.args={alignment:"topLeft"};A.play=({canvasElement:t})=>{const e=c(t);p(()=>l.click(e.getByRole("button")))};A.storyName="Alignment: Top Left with Header and Separator";const B=N.bind({});B.args={alignment:"topRight"};B.play=({canvasElement:t})=>{const e=c(t);p(()=>l.click(e.getByRole("button")))};B.storyName="Alignment: Top Right";const v=T.bind({});v.args={alignment:"topRight"};v.play=({canvasElement:t})=>{const e=c(t);p(()=>l.click(e.getByRole("button")))};v.storyName="Alignment: Top Right with Header and Separator";const R=N.bind({});R.args={alignment:"topCenter"};R.play=({canvasElement:t})=>{const e=c(t);p(()=>l.click(e.getByRole("button")))};R.storyName="Alignment: Top Center";const _=T.bind({});_.args={alignment:"topCenter"};_.play=({canvasElement:t})=>{const e=c(t);p(()=>l.click(e.getByRole("button")))};_.storyName="Alignment: Top Center with Header and Separator";var D,j,z;H.parameters={...H.parameters,docs:{...(D=H.parameters)==null?void 0:D.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return <Menu {...args} isOpen={isOpen} onOpen={() => setIsOpen(true)} onClose={() => setIsOpen(false)} trigger={<Button variant="secondary">Click Me!</Button>}>\r
      <MenuItem>Menu Item One</MenuItem>\r
      <MenuItem>Menu Item Two</MenuItem>\r
      <MenuItem>Menu Item Three</MenuItem>\r
      <MenuItem>Menu Item Four</MenuItem>\r
    </Menu>;
}`,...(z=(j=H.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var K,U,q;O.parameters={...O.parameters,docs:{...(K=O.parameters)==null?void 0:K.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return <Menu {...args} isOpen={isOpen} onOpen={() => setIsOpen(true)} onClose={() => setIsOpen(false)} trigger={<Button variant="secondary">Click Me!</Button>}>\r
      <MenuItem>Menu Item One</MenuItem>\r
      <MenuItem>Menu Item Two</MenuItem>\r
      <MenuItem>Menu Item Three</MenuItem>\r
      <MenuItem>Menu Item Four</MenuItem>\r
    </Menu>;
}`,...(q=(U=O.parameters)==null?void 0:U.docs)==null?void 0:q.source}}};var G,J,Q;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return <Menu {...args} isOpen={isOpen} onOpen={() => setIsOpen(true)} onClose={() => setIsOpen(false)} trigger={<Button variant="secondary">Click Me!</Button>}>\r
      <MenuItem>New File</MenuItem>\r
      <MenuItem>New Folder</MenuItem>\r
      <MenuItem>Save As</MenuItem>\r
      <MenuSeparator />\r
      <MenuHeader>Edit</MenuHeader>\r
      <MenuItem>Cut</MenuItem>\r
      <MenuItem>Copy</MenuItem>\r
      <MenuItem>Paste</MenuItem>\r
      <MenuSeparator />\r
      <MenuItem>Print</MenuItem>\r
    </Menu>;
}`,...(Q=(J=f.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var V,X,Y;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return <Menu {...args} isOpen={isOpen} onOpen={() => setIsOpen(true)} onClose={() => setIsOpen(false)} trigger={<Button variant="secondary">Click Me!</Button>}>\r
      <MenuItem>Menu Item One</MenuItem>\r
      <MenuItem>Menu Item Two</MenuItem>\r
      <MenuItem>Menu Item Three</MenuItem>\r
      <MenuItem>Menu Item Four</MenuItem>\r
    </Menu>;
}`,...(Y=(X=y.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,te;h.parameters={...h.parameters,docs:{...(Z=h.parameters)==null?void 0:Z.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return <Menu {...args} isOpen={isOpen} onOpen={() => setIsOpen(true)} onClose={() => setIsOpen(false)} trigger={<Button variant="secondary">Click Me!</Button>}>\r
      <MenuItem>New File</MenuItem>\r
      <MenuItem>New Folder</MenuItem>\r
      <MenuItem>Save As</MenuItem>\r
      <MenuSeparator />\r
      <MenuHeader>Edit</MenuHeader>\r
      <MenuItem>Cut</MenuItem>\r
      <MenuItem>Copy</MenuItem>\r
      <MenuItem>Paste</MenuItem>\r
      <MenuSeparator />\r
      <MenuItem>Print</MenuItem>\r
    </Menu>;
}`,...(te=(ee=h.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,re,oe;S.parameters={...S.parameters,docs:{...(ne=S.parameters)==null?void 0:ne.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return <Menu {...args} isOpen={isOpen} onOpen={() => setIsOpen(true)} onClose={() => setIsOpen(false)} trigger={<Button variant="secondary">Click Me!</Button>}>\r
      <MenuItem>Menu Item One</MenuItem>\r
      <MenuItem>Menu Item Two</MenuItem>\r
      <MenuItem>Menu Item Three</MenuItem>\r
      <MenuItem>Menu Item Four</MenuItem>\r
    </Menu>;
}`,...(oe=(re=S.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var se,ae,ue;C.parameters={...C.parameters,docs:{...(se=C.parameters)==null?void 0:se.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return <Menu {...args} isOpen={isOpen} onOpen={() => setIsOpen(true)} onClose={() => setIsOpen(false)} trigger={<Button variant="secondary">Click Me!</Button>}>\r
      <MenuItem>New File</MenuItem>\r
      <MenuItem>New Folder</MenuItem>\r
      <MenuItem>Save As</MenuItem>\r
      <MenuSeparator />\r
      <MenuHeader>Edit</MenuHeader>\r
      <MenuItem>Cut</MenuItem>\r
      <MenuItem>Copy</MenuItem>\r
      <MenuItem>Paste</MenuItem>\r
      <MenuSeparator />\r
      <MenuItem>Print</MenuItem>\r
    </Menu>;
}`,...(ue=(ae=C.parameters)==null?void 0:ae.docs)==null?void 0:ue.source}}};var me,ie,ce;b.parameters={...b.parameters,docs:{...(me=b.parameters)==null?void 0:me.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return <Menu {...args} isOpen={isOpen} onOpen={() => setIsOpen(true)} onClose={() => setIsOpen(false)} trigger={<Button variant="secondary">Click Me!</Button>}>\r
      <MenuItem>Menu Item One</MenuItem>\r
      <MenuItem>Menu Item Two</MenuItem>\r
      <MenuItem>Menu Item Three</MenuItem>\r
      <MenuItem>Menu Item Four</MenuItem>\r
    </Menu>;
}`,...(ce=(ie=b.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var pe,le,Me;A.parameters={...A.parameters,docs:{...(pe=A.parameters)==null?void 0:pe.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return <Menu {...args} isOpen={isOpen} onOpen={() => setIsOpen(true)} onClose={() => setIsOpen(false)} trigger={<Button variant="secondary">Click Me!</Button>}>\r
      <MenuItem>New File</MenuItem>\r
      <MenuItem>New Folder</MenuItem>\r
      <MenuItem>Save As</MenuItem>\r
      <MenuSeparator />\r
      <MenuHeader>Edit</MenuHeader>\r
      <MenuItem>Cut</MenuItem>\r
      <MenuItem>Copy</MenuItem>\r
      <MenuItem>Paste</MenuItem>\r
      <MenuSeparator />\r
      <MenuItem>Print</MenuItem>\r
    </Menu>;
}`,...(Me=(le=A.parameters)==null?void 0:le.docs)==null?void 0:Me.source}}};var Ie,ge,de;B.parameters={...B.parameters,docs:{...(Ie=B.parameters)==null?void 0:Ie.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return <Menu {...args} isOpen={isOpen} onOpen={() => setIsOpen(true)} onClose={() => setIsOpen(false)} trigger={<Button variant="secondary">Click Me!</Button>}>\r
      <MenuItem>Menu Item One</MenuItem>\r
      <MenuItem>Menu Item Two</MenuItem>\r
      <MenuItem>Menu Item Three</MenuItem>\r
      <MenuItem>Menu Item Four</MenuItem>\r
    </Menu>;
}`,...(de=(ge=B.parameters)==null?void 0:ge.docs)==null?void 0:de.source}}};var Oe,fe,ye;v.parameters={...v.parameters,docs:{...(Oe=v.parameters)==null?void 0:Oe.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return <Menu {...args} isOpen={isOpen} onOpen={() => setIsOpen(true)} onClose={() => setIsOpen(false)} trigger={<Button variant="secondary">Click Me!</Button>}>\r
      <MenuItem>New File</MenuItem>\r
      <MenuItem>New Folder</MenuItem>\r
      <MenuItem>Save As</MenuItem>\r
      <MenuSeparator />\r
      <MenuHeader>Edit</MenuHeader>\r
      <MenuItem>Cut</MenuItem>\r
      <MenuItem>Copy</MenuItem>\r
      <MenuItem>Paste</MenuItem>\r
      <MenuSeparator />\r
      <MenuItem>Print</MenuItem>\r
    </Menu>;
}`,...(ye=(fe=v.parameters)==null?void 0:fe.docs)==null?void 0:ye.source}}};var he,Se,Ce;R.parameters={...R.parameters,docs:{...(he=R.parameters)==null?void 0:he.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return <Menu {...args} isOpen={isOpen} onOpen={() => setIsOpen(true)} onClose={() => setIsOpen(false)} trigger={<Button variant="secondary">Click Me!</Button>}>\r
      <MenuItem>Menu Item One</MenuItem>\r
      <MenuItem>Menu Item Two</MenuItem>\r
      <MenuItem>Menu Item Three</MenuItem>\r
      <MenuItem>Menu Item Four</MenuItem>\r
    </Menu>;
}`,...(Ce=(Se=R.parameters)==null?void 0:Se.docs)==null?void 0:Ce.source}}};var be,Ae,Be;_.parameters={..._.parameters,docs:{...(be=_.parameters)==null?void 0:be.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return <Menu {...args} isOpen={isOpen} onOpen={() => setIsOpen(true)} onClose={() => setIsOpen(false)} trigger={<Button variant="secondary">Click Me!</Button>}>\r
      <MenuItem>New File</MenuItem>\r
      <MenuItem>New Folder</MenuItem>\r
      <MenuItem>Save As</MenuItem>\r
      <MenuSeparator />\r
      <MenuHeader>Edit</MenuHeader>\r
      <MenuItem>Cut</MenuItem>\r
      <MenuItem>Copy</MenuItem>\r
      <MenuItem>Paste</MenuItem>\r
      <MenuSeparator />\r
      <MenuItem>Print</MenuItem>\r
    </Menu>;
}`,...(Be=(Ae=_.parameters)==null?void 0:Ae.docs)==null?void 0:Be.source}}};const At=["Default","AlignmentBottomLeft","AlignmentBottomLeftWithHeaderAndSeparator","AlignmentBottomRight","AlignmentBottomRightWithHeaderAndSeparator","AlignmentBottomCenter","AlignmentBottomCenterWithHeaderAndSeparator","AlignmentTopLeft","AlignmentTopLeftWithHeaderAndSeparator","AlignmentTopRight","AlignmentTopRightWithHeaderAndSeparator","AlignmentTopCenter","AlignmentTopCenterWithHeaderAndSeparator"];export{S as AlignmentBottomCenter,C as AlignmentBottomCenterWithHeaderAndSeparator,O as AlignmentBottomLeft,f as AlignmentBottomLeftWithHeaderAndSeparator,y as AlignmentBottomRight,h as AlignmentBottomRightWithHeaderAndSeparator,R as AlignmentTopCenter,_ as AlignmentTopCenterWithHeaderAndSeparator,b as AlignmentTopLeft,A as AlignmentTopLeftWithHeaderAndSeparator,B as AlignmentTopRight,v as AlignmentTopRightWithHeaderAndSeparator,H as Default,At as __namedExportsOrder,bt as default};
//# sourceMappingURL=Menu.stories-fe15b7ac.js.map
