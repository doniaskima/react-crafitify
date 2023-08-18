import{j as r,a as h}from"./jsx-runtime-e6a661ac.js";import{r as o}from"./index-61bf1805.js";import{R as s}from"./Radio-de3d19a8.js";import{c as g}from"./index-e131923d.js";import"./_commonjsHelpers-de833af9.js";import"./index.esm-6e9c663b.js";import"./iconBase-e697fdb3.js";import"./IconButton-f8d199e3.js";import"./Ripple-55b24a9a.js";import"./Typography-3a700a27.js";const C="_radioSet_1irsw_1",I="_radioSetItem_1irsw_8",d={radioSet:C,radioSetItem:I},n=e=>{const{children:a,className:R,...p}=e;return r("ul",{className:g(d.radioSet,R),role:"list",...p,children:o.Children.map(a,(i,A)=>i.type===s?r("li",{className:d.radioSetItem,role:"listitem",children:i},A):null)})};n.displayName="RadioSet";const b={component:n,title:"Components/Inputs/RadioSet"},t=()=>{const[e,a]=o.useState([!1,!1,!1,!1]);return h(n,{children:[r(s,{isSelected:e[0],onChange:()=>a([!0,!1,!1,!1]),children:"Galaxy"}),r(s,{isSelected:e[1],onChange:()=>a([!1,!0,!1,!1]),children:"Dark Matter"}),r(s,{isSelected:e[2],onChange:()=>a([!1,!1,!0,!1]),children:"Gravity"}),r(s,{isSelected:e[3],onChange:()=>a([!1,!1,!1,!0]),children:"Void"})]})},l=()=>{const[e,a]=o.useState([!1,!1,!0,!1]);return h(n,{children:[r(s,{isSelected:e[0],onChange:()=>a([!0,!1,!1,!1]),children:"Galaxy"}),r(s,{isSelected:e[1],onChange:()=>a([!1,!0,!1,!1]),children:"Dark Matter"}),r(s,{isSelected:e[2],onChange:()=>a([!1,!1,!0,!1]),children:"Gravity"}),r(s,{isSelected:e[3],onChange:()=>a([!1,!1,!1,!0]),children:"Void"})]})};var c,f,S;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  const [isSelectedArray, setIsSelectedArray] = React.useState<Array<boolean>>([false, false, false, false]);
  return <RadioSet>\r
      <Radio isSelected={isSelectedArray[0]} onChange={() => setIsSelectedArray([true, false, false, false])}>\r
        Galaxy\r
      </Radio>\r
      <Radio isSelected={isSelectedArray[1]} onChange={() => setIsSelectedArray([false, true, false, false])}>\r
        Dark Matter\r
      </Radio>\r
      <Radio isSelected={isSelectedArray[2]} onChange={() => setIsSelectedArray([false, false, true, false])}>\r
        Gravity\r
      </Radio>\r
      <Radio isSelected={isSelectedArray[3]} onChange={() => setIsSelectedArray([false, false, false, true])}>\r
        Void\r
      </Radio>\r
    </RadioSet>;
}`,...(S=(f=t.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var u,y,m;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const [isSelectedArray, setIsSelectedArray] = React.useState<Array<boolean>>([false, false, true, false]);
  return <RadioSet>\r
      <Radio isSelected={isSelectedArray[0]} onChange={() => setIsSelectedArray([true, false, false, false])}>\r
        Galaxy\r
      </Radio>\r
      <Radio isSelected={isSelectedArray[1]} onChange={() => setIsSelectedArray([false, true, false, false])}>\r
        Dark Matter\r
      </Radio>\r
      <Radio isSelected={isSelectedArray[2]} onChange={() => setIsSelectedArray([false, false, true, false])}>\r
        Gravity\r
      </Radio>\r
      <Radio isSelected={isSelectedArray[3]} onChange={() => setIsSelectedArray([false, false, false, true])}>\r
        Void\r
      </Radio>\r
    </RadioSet>;
}`,...(m=(y=l.parameters)==null?void 0:y.docs)==null?void 0:m.source}}};const w=["Default","Selected"];export{t as Default,l as Selected,w as __namedExportsOrder,b as default};
//# sourceMappingURL=RadioSet.stories-8fc395d1.js.map
