import{j as h}from"./jsx-runtime-e6a661ac.js";import{r as pe}from"./index-61bf1805.js";import{w as s,a as n,u as r}from"./allowLayoutCalculations-f7241181.js";import{P as ae}from"./Popup-23d7c9fa.js";import{B as ie}from"./Button-c88e35e0.js";import"./_commonjsHelpers-de833af9.js";import"./index-356e4a49.js";import"./index-e131923d.js";import"./MenuItem-769d4847.js";import"./Typography-3a700a27.js";import"./getLayoutStyle-ef736a71.js";import"./CSSTransition-581a361c.js";import"./extends-98964cd2.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./inheritsLoose-c82a83d4.js";import"./index-2801d3c9.js";import"./Ripple-55b24a9a.js";const Se={component:ae,parameters:{chromatic:{delay:2e3},layout:"centered"},title:"Components/Feedback/Popup"},o=e=>{const[t,y]=pe.useState(!1);return h(ae,{text:"I am a Popup!",...e,isOpen:t,onClose:()=>y(!1),onOpen:()=>y(!0),children:h(ie,{variant:"secondary",children:"Hover Me!"})})},v=o.bind({}),a=o.bind({});a.args={position:"bottom"};a.play=({canvasElement:e})=>{const t=s(e);n(()=>r.hover(t.getByRole("button")))};a.storyName="Position: Bottom";const p=o.bind({});p.args={hasIndicator:!0,position:"bottom"};p.play=({canvasElement:e})=>{const t=s(e);n(()=>r.hover(t.getByRole("button")))};p.storyName="Position: Bottom with Indicator";const i=o.bind({});i.args={hasIndicator:!0,position:"bottom",text:"I am some very, very, very, very long text!!!!!!"};i.play=({canvasElement:e})=>{const t=s(e);n(()=>r.hover(t.getByRole("button")))};i.storyName="Position: Bottom with Indicator and Long Text ";const c=o.bind({});c.args={position:"top"};c.play=({canvasElement:e})=>{const t=s(e);n(()=>r.hover(t.getByRole("button")))};c.storyName="Position: Top";const u=o.bind({});u.args={hasIndicator:!0,position:"top"};u.play=({canvasElement:e})=>{const t=s(e);n(()=>r.hover(t.getByRole("button")))};u.storyName="Position: Top with Indicator";const m=o.bind({});m.args={hasIndicator:!0,position:"top",text:"I am some very, very, very, very long text!!!!!!"};m.play=({canvasElement:e})=>{const t=s(e);n(()=>r.hover(t.getByRole("button")))};m.storyName="Position: Top with Indicator and Long Text ";const d=o.bind({});d.args={position:"left"};d.play=({canvasElement:e})=>{const t=s(e);n(()=>r.hover(t.getByRole("button")))};d.storyName="Position: Left";const l=o.bind({});l.args={hasIndicator:!0,position:"left"};l.play=({canvasElement:e})=>{const t=s(e);n(()=>r.hover(t.getByRole("button")))};l.storyName="Position: Left with Indicator";const O=o.bind({});O.args={hasIndicator:!0,position:"left",text:"I am some very, very, very, very long text!!!!!!"};O.play=({canvasElement:e})=>{const t=s(e);n(()=>r.hover(t.getByRole("button")))};O.storyName="Position: Left with Indicator and Long Text ";const g=o.bind({});g.args={position:"right"};g.play=({canvasElement:e})=>{const t=s(e);n(()=>r.hover(t.getByRole("button")))};g.storyName="Position: Right";const I=o.bind({});I.args={hasIndicator:!0,position:"right"};I.play=({canvasElement:e})=>{const t=s(e);n(()=>r.hover(t.getByRole("button")))};I.storyName="Position: Right with Indicator";const P=o.bind({});P.args={hasIndicator:!0,position:"right",text:"I am some very, very, very, very long text!!!!!!"};P.play=({canvasElement:e})=>{const t=s(e);n(()=>r.hover(t.getByRole("button")))};P.storyName="Position: Right with Indicator and Long Text ";var B,f,x;v.parameters={...v.parameters,docs:{...(B=v.parameters)==null?void 0:B.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = React.useState(false);
  return <Popup text="I am a Popup!" {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} onOpen={() => setIsOpen(true)}>\r
      <Button variant="secondary">Hover Me!</Button>\r
    </Popup>;
}`,...(x=(f=v.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var R,b,S;a.parameters={...a.parameters,docs:{...(R=a.parameters)==null?void 0:R.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = React.useState(false);
  return <Popup text="I am a Popup!" {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} onOpen={() => setIsOpen(true)}>\r
      <Button variant="secondary">Hover Me!</Button>\r
    </Popup>;
}`,...(S=(b=a.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var L,T,C;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = React.useState(false);
  return <Popup text="I am a Popup!" {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} onOpen={() => setIsOpen(true)}>\r
      <Button variant="secondary">Hover Me!</Button>\r
    </Popup>;
}`,...(C=(T=p.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var W,H,M;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = React.useState(false);
  return <Popup text="I am a Popup!" {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} onOpen={() => setIsOpen(true)}>\r
      <Button variant="secondary">Hover Me!</Button>\r
    </Popup>;
}`,...(M=(H=i.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var N,w,A;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = React.useState(false);
  return <Popup text="I am a Popup!" {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} onOpen={() => setIsOpen(true)}>\r
      <Button variant="secondary">Hover Me!</Button>\r
    </Popup>;
}`,...(A=(w=c.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var E,_,j;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = React.useState(false);
  return <Popup text="I am a Popup!" {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} onOpen={() => setIsOpen(true)}>\r
      <Button variant="secondary">Hover Me!</Button>\r
    </Popup>;
}`,...(j=(_=u.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var D,k,F;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = React.useState(false);
  return <Popup text="I am a Popup!" {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} onOpen={() => setIsOpen(true)}>\r
      <Button variant="secondary">Hover Me!</Button>\r
    </Popup>;
}`,...(F=(k=m.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var q,z,G;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = React.useState(false);
  return <Popup text="I am a Popup!" {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} onOpen={() => setIsOpen(true)}>\r
      <Button variant="secondary">Hover Me!</Button>\r
    </Popup>;
}`,...(G=(z=d.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var J,K,Q;l.parameters={...l.parameters,docs:{...(J=l.parameters)==null?void 0:J.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = React.useState(false);
  return <Popup text="I am a Popup!" {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} onOpen={() => setIsOpen(true)}>\r
      <Button variant="secondary">Hover Me!</Button>\r
    </Popup>;
}`,...(Q=(K=l.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,V,X;O.parameters={...O.parameters,docs:{...(U=O.parameters)==null?void 0:U.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = React.useState(false);
  return <Popup text="I am a Popup!" {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} onOpen={() => setIsOpen(true)}>\r
      <Button variant="secondary">Hover Me!</Button>\r
    </Popup>;
}`,...(X=(V=O.parameters)==null?void 0:V.docs)==null?void 0:X.source}}};var Y,Z,$;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = React.useState(false);
  return <Popup text="I am a Popup!" {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} onOpen={() => setIsOpen(true)}>\r
      <Button variant="secondary">Hover Me!</Button>\r
    </Popup>;
}`,...($=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,te,oe;I.parameters={...I.parameters,docs:{...(ee=I.parameters)==null?void 0:ee.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = React.useState(false);
  return <Popup text="I am a Popup!" {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} onOpen={() => setIsOpen(true)}>\r
      <Button variant="secondary">Hover Me!</Button>\r
    </Popup>;
}`,...(oe=(te=I.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var se,ne,re;P.parameters={...P.parameters,docs:{...(se=P.parameters)==null?void 0:se.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = React.useState(false);
  return <Popup text="I am a Popup!" {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} onOpen={() => setIsOpen(true)}>\r
      <Button variant="secondary">Hover Me!</Button>\r
    </Popup>;
}`,...(re=(ne=P.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};const Le=["Default","PositionBottom","PositionBottomWithIndicator","PositionBottomWithIndicatorAndLongText","PositionTop","PositionTopWithIndicator","PositionTopWithIndicatorAndLongText","PositionLeft","PositionLeftWithIndicator","PositionLeftWithIndicatorAndLongText","PositionRight","PositionRightWithIndicator","PositionRightWithIndicatorAndLongText"];export{v as Default,a as PositionBottom,p as PositionBottomWithIndicator,i as PositionBottomWithIndicatorAndLongText,d as PositionLeft,l as PositionLeftWithIndicator,O as PositionLeftWithIndicatorAndLongText,g as PositionRight,I as PositionRightWithIndicator,P as PositionRightWithIndicatorAndLongText,c as PositionTop,u as PositionTopWithIndicator,m as PositionTopWithIndicatorAndLongText,Le as __namedExportsOrder,Se as default};
//# sourceMappingURL=Popup.stories-7c9d94f6.js.map
