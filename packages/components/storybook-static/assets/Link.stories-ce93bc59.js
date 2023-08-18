import{j as r,a as u}from"./jsx-runtime-e6a661ac.js";import{F as g}from"./FlexRowContainer-5f99a0ca.js";import{c as v}from"./index-e131923d.js";import{T as _}from"./Typography-3a700a27.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";const x="_linkContainer_a440e_2",L="_primary_a440e_6",b="_secondary_a440e_18",i={linkContainer:x,primary:L,secondary:b},n=l=>{const{className:y,children:h,href:f,variant:t="primary",...k}=l;return r("a",{className:v(y,i.linkContainer,t==="primary"?i.primary:i.secondary),href:f,...k,children:r(_,{type:"h2",variant:t,children:h})})};n.displayName="Link";const j={component:n,title:"Components/Navigation/Link"},a=()=>r("div",{style:{background:"rgb(60 60 60)",padding:"6px",width:"fit-content"},children:r(n,{href:"#",children:"Default"})}),e=()=>u(g,{children:[r("div",{style:{background:"rgb(60 60 60)",padding:"6px"},children:r(n,{href:"#",variant:"primary",children:"Primary"})}),r("div",{children:r(n,{href:"#",variant:"secondary",children:"Secondary"})})]});var o,s,c;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`() => <div style={{
  background: "rgb(60 60 60)",
  padding: "6px",
  width: "fit-content"
}}>\r
    <Link href="#">Default</Link>\r
  </div>`,...(c=(s=a.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var d,p,m;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  return <FlexRowContainer>\r
      <div style={{
      background: "rgb(60 60 60)",
      padding: "6px"
    }}>\r
        <Link href="#" variant="primary">\r
          Primary\r
        </Link>\r
      </div>\r
      <div>\r
        <Link href="#" variant="secondary">\r
          Secondary\r
        </Link>\r
      </div>\r
    </FlexRowContainer>;
}`,...(m=(p=e.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const R=["Default","Variant"];export{a as Default,e as Variant,R as __namedExportsOrder,j as default};
//# sourceMappingURL=Link.stories-ce93bc59.js.map
