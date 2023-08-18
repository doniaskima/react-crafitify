import{a as _,j as n,F as L}from"./jsx-runtime-e6a661ac.js";import{r as p}from"./index-61bf1805.js";import{T as q}from"./Typography-3a700a27.js";import{c as g}from"./index-e131923d.js";import{e as z,f as G}from"./index.esm-6e9c663b.js";import{I as u}from"./IconButton-f8d199e3.js";import"./_commonjsHelpers-de833af9.js";import"./iconBase-e697fdb3.js";import"./Ripple-55b24a9a.js";const H="_paginationContainer_rpov6_2",J="_pagesButtonsContainer_rpov6_8",K="_currentPageIcon_rpov6_13",Q="_firstPage_rpov6_16",U="_lastPage_rpov6_19",X="_ellipse_rpov6_23",s={paginationContainer:H,pagesButtonsContainer:J,currentPageIcon:K,firstPage:Q,lastPage:U,ellipse:X},c=r=>{const{className:t,currentPage:a,onChangePage:e,pages:P,variant:i="secondary",...M}=r,$=()=>{a-1>0&&e(a-1)},A=()=>{a+1<P+1&&e(a+1)};return _("nav",{className:g(s.paginationContainer,t),role:"navigation",...M,children:[n(u,{className:g(s.paginationIconButton),content:n(z,{}),onClick:$,disabled:a===1,variant:i}),_("div",{className:s.pagesButtonsContainer,children:[a-2>0?n(u,{className:g(s.paginationIconButton,s.ellipse),tabIndex:-1,variant:i,children:"..."}):n("div",{style:{height:"38px",width:"38px"}}),Array.from({length:P},(o,l)=>l+1).map((o,l)=>(o===a-1||o===a+1)&&o!==0?n(u,{className:g(s.paginationIconButton),onClick:()=>e(o),variant:i,children:o},l):o===a?n(u,{className:g(o===1&&s.firstPage,o===P&&s.lastPage,s.paginationIconButton,s.currentPageIcon),tabIndex:-1,variant:i,children:o},l):null),a+1<P?n(u,{className:g(s.paginationIconButton,s.ellipse),tabIndex:-1,variant:i,children:"..."}):n("div",{style:{height:"38px",width:"38px"}})]}),n(u,{className:g(s.paginationIconButton),content:n(G,{}),onClick:A,disabled:a===P,variant:i})]})},ge={component:c,parameters:{layout:"centered"},title:"Components/Navigation/Pagination"},d=()=>{const[r,t]=p.useState(3),a=e=>{t(e)};return n(c,{currentPage:r,pages:5,onChangePage:e=>a(e)})},C=()=>{const[r,t]=p.useState(1),a=e=>{t(e)};return n(c,{currentPage:r,pages:1,onChangePage:e=>a(e)})},y=()=>{const[r,t]=p.useState(5),a=e=>{t(e)};return n(c,{currentPage:r,pages:10,onChangePage:e=>a(e)})},b=()=>{const[r,t]=p.useState(5),a=e=>{t(e)};return _(L,{children:[n(q,{type:"h1",variant:"secondary",weight:"bold",children:`Page: ${r}`}),n(c,{currentPage:r,pages:10,onChangePage:e=>a(e)})]})},m=()=>{const[r,t]=p.useState(5),a=e=>{t(e)};return n(c,{currentPage:r,pages:10,onChangePage:e=>a(e),variant:"primary"})};m.storyName="Variant: Primary";const h=()=>{const[r,t]=p.useState(5),a=e=>{t(e)};return n(c,{currentPage:r,pages:10,onChangePage:e=>a(e),variant:"secondary"})};h.storyName="Variant: Secondary";var v,S,f;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  const [currentPage, setCurrentPage] = React.useState<number>(3);
  const handleChange = (page: number) => {
    setCurrentPage(page);
  };
  return <Pagination currentPage={currentPage} pages={5} onChangePage={(page: number) => handleChange(page)} />;
}`,...(f=(S=d.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var I,N,x;C.parameters={...C.parameters,docs:{...(I=C.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const handleChange = (page: number) => {
    setCurrentPage(page);
  };
  return <Pagination currentPage={currentPage} pages={1} onChangePage={(page: number) => handleChange(page)} />;
}`,...(x=(N=C.parameters)==null?void 0:N.docs)==null?void 0:x.source}}};var B,V,R;y.parameters={...y.parameters,docs:{...(B=y.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
  const [currentPage, setCurrentPage] = React.useState<number>(5);
  const handleChange = (page: number) => {
    setCurrentPage(page);
  };
  return <Pagination currentPage={currentPage} pages={10} onChangePage={(page: number) => handleChange(page)} />;
}`,...(R=(V=y.parameters)==null?void 0:V.docs)==null?void 0:R.source}}};var T,W,w;b.parameters={...b.parameters,docs:{...(T=b.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  const [currentPage, setCurrentPage] = React.useState<number>(5);
  const handleChange = (page: number) => {
    setCurrentPage(page);
  };
  return <>\r
      <Typography type="h1" variant="secondary" weight="bold">{\`Page: \${currentPage}\`}</Typography>\r
      <Pagination currentPage={currentPage} pages={10} onChangePage={(page: number) => handleChange(page)} />\r
    </>;
}`,...(w=(W=b.parameters)==null?void 0:W.docs)==null?void 0:w.source}}};var j,k,O;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  const [currentPage, setCurrentPage] = React.useState<number>(5);
  const handleChange = (page: number) => {
    setCurrentPage(page);
  };
  return <Pagination currentPage={currentPage} pages={10} onChangePage={(page: number) => handleChange(page)} variant="primary" />;
}`,...(O=(k=m.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var D,E,F;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  const [currentPage, setCurrentPage] = React.useState<number>(5);
  const handleChange = (page: number) => {
    setCurrentPage(page);
  };
  return <Pagination currentPage={currentPage} pages={10} onChangePage={(page: number) => handleChange(page)} variant="secondary" />;
}`,...(F=(E=h.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};const ce=["Default","WithOnePage","WithTenPages","WithPageValue","VariantPrimary","VariantSecondary"];export{d as Default,m as VariantPrimary,h as VariantSecondary,C as WithOnePage,b as WithPageValue,y as WithTenPages,ce as __namedExportsOrder,ge as default};
//# sourceMappingURL=Pagination.stories-d13d6cc3.js.map
