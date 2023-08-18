import{j as a,a as m}from"./jsx-runtime-e6a661ac.js";import{r}from"./index-61bf1805.js";import{c as W}from"./index.esm-a30d7021.js";import{c as j}from"./index-e131923d.js";import"./MenuItem-769d4847.js";import{u as K}from"./useOnClickOutside-a433f730.js";import{u as U}from"./useOnKeyDown-943a5b41.js";import{T as G,a as q,b as J,c as Q}from"./index.esm-bba77cb6.js";import{B as X}from"./Button-c88e35e0.js";import{F as Z}from"./FocusTrap-244593d1.js";import{I as C}from"./IconButton-f8d199e3.js";import{C as ee}from"./CSSTransition-581a361c.js";import{T as te}from"./TextField-d7c238f5.js";import{w as ae,a as ne,u as re}from"./allowLayoutCalculations-f7241181.js";import"./_commonjsHelpers-de833af9.js";import"./iconBase-e697fdb3.js";import"./Typography-3a700a27.js";import"./Ripple-55b24a9a.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./extends-98964cd2.js";import"./medium-f4a61dfe.js";import"./inheritsLoose-c82a83d4.js";import"./defineProperty-f2693585.js";import"./index-2801d3c9.js";import"./index-356e4a49.js";const oe=e=>{const n=new Date(e.getFullYear(),e.getMonth()+1,0).getDate(),l=[...Array(n).keys()].map(d=>d+1),i=new Date(e.getFullYear(),e.getMonth(),1).getDay(),u=new Date(e.getFullYear(),e.getMonth(),n).getDay(),t=[...Array(i).keys()].map(()=>null),c=[...Array(6-u).keys()].map(()=>null);return[...t,...l,...c]},se=e=>new Date(e.getFullYear(),e.getMonth(),e.getDate()+1),ie=e=>new Date(e.getFullYear(),e.getMonth(),e.getDate()-1),ce=e=>new Date(e.getFullYear(),e.getMonth(),e.getDate()+7),le=e=>new Date(e.getFullYear(),e.getMonth(),e.getDate()-7),de=e=>e?`${e.getMonth()+1}/${e.getDate()}/${e.getFullYear()}`:"",ue="_enter_yif1v_1",ge="_enterActive_yif1v_6",me="_exit_yif1v_12",Ce="_exitActive_yif1v_17",v={enter:ue,enterActive:ge,exit:me,exitActive:Ce},De="_datePickerCalendarContainer_3wrpa_2",pe="_datePickerCalendarNavigationContainer_3wrpa_15",ke="_datePickerCalendarNavigationMonth_3wrpa_21",fe="_datePickerCalendarHeaderContainer_3wrpa_27",ve="_datePickerCalendarHeaderLabel_3wrpa_32",_e="_datePickerCalendarBodyContainer_3wrpa_38",ye="_datePickerCalendarDayContainer_3wrpa_44",Pe="_datePickerCalendarDay_3wrpa_44",he="_selected_3wrpa_63",we="_today_3wrpa_67",Ne="_buttonContainer_3wrpa_79",s={datePickerCalendarContainer:De,datePickerCalendarNavigationContainer:pe,datePickerCalendarNavigationMonth:ke,datePickerCalendarHeaderContainer:fe,datePickerCalendarHeaderLabel:ve,datePickerCalendarBodyContainer:_e,datePickerCalendarDayContainer:ye,datePickerCalendarDay:Pe,selected:he,today:we,buttonContainer:Ne},T=r.createContext({selectedDate:void 0,setSelectedDate:()=>{}}),I=e=>{const{onClose:n,triggerRef:l}=e,{selectedDate:i,setSelectedDate:u}=r.useContext(T),[t,c]=r.useState(i??new Date),[d,y]=r.useState(0),[D,p]=r.useState([]),w=r.useRef([]),N=r.useRef(null),O=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],E=()=>{c(new Date(t.getFullYear(),t.getMonth()+1,t.getDate()))},L=()=>{c(new Date(t.getFullYear()+1,t.getMonth(),t.getDate()))},H=()=>{c(new Date(t.getFullYear(),t.getMonth()-1,t.getDate()))},V=()=>{c(new Date(t.getFullYear()-1,t.getMonth(),t.getDate()))};return r.useEffect(()=>{p(oe(t)),y(t.getDate())},[t]),r.useEffect(()=>{var o;(o=w.current[d])==null||o.focus()},[d]),K([N,l],n),U(["Escape"],n),a("div",{className:s.datePickerCalendarContainer,ref:N,children:m(Z,{children:[m("div",{className:s.datePickerCalendarNavigationContainer,children:[m("div",{style:{display:"flex",gap:"2px"},children:[a(C,{content:a(G,{}),size:"medium",onClick:V}),a(C,{content:a(q,{}),size:"medium",onClick:H})]}),a("div",{className:s.datePickerCalendarNavigationMonth,children:`${t.toLocaleString("en-US",{month:"long"})} ${t.getFullYear()}`}),m("div",{style:{display:"flex",gap:"2px"},children:[a(C,{content:a(J,{}),size:"medium",onClick:E}),a(C,{content:a(Q,{}),size:"medium",onClick:L})]})]}),a("div",{className:s.datePickerCalendarHeaderContainer,children:O.map((o,k)=>a("div",{className:s.datePickerCalendarHeaderLabel,children:o},k))}),a("div",{className:s.datePickerCalendarBodyContainer,children:D.map((o,k)=>{if(o!==null){const $=new Date(t.getFullYear(),t.getMonth(),o).getTime()===(i==null?void 0:i.getTime()),z=new Date(t.getFullYear(),t.getMonth(),o).getTime()===new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate()).getTime();return a("div",{className:s.datePickerCalendarDayContainer,children:a("button",{className:j(s.datePickerCalendarDay,$&&s.selected,z&&s.today),tabIndex:o===t.getDate()?0:-1,onClick:()=>{u(new Date(t.getFullYear(),t.getMonth(),o)),n()},onKeyDown:f=>{const{code:P}=f,x={ArrowUp:le,ArrowDown:ce,ArrowLeft:ie,ArrowRight:se};P in x&&(f.preventDefault(),c(x[P])),P==="Enter"&&(u(new Date(t.getFullYear(),t.getMonth(),o)),n())},ref:f=>w.current[o]=f,children:o})},k)}else return a("div",{className:s.datePickerCalendarDayContainer},k)})}),a("div",{className:s.buttonContainer,children:a(X,{onClick:()=>u(void 0),children:"Clear"})})]})})};I.displayName="BaseDatePickerCalendar";const R=e=>{const{onClose:n,isOpen:l=!1,triggerRef:i}=e;return a(ee,{in:l,timeout:200,mountOnEnter:!0,unmountOnExit:!0,classNames:{enter:v.enter,enterActive:v.enterActive,exit:v.exit,exitActive:v.exitActive},children:a(I,{onClose:n,triggerRef:i})})};R.displayName="DatePickerCalendar";const xe="_customInput_ecwvw_2",Me="_datePickerIconContainer_ecwvw_6",Fe={customInput:xe,datePickerIconContainer:Me},h=e=>{const{className:n,selected:l,setValue:i,value:u,...t}=e,c=r.useRef(null),[d,y]=r.useState(l),[D,p]=r.useState(!1);return r.useEffect(()=>{i(de(d))},[d]),a(T.Provider,{value:{selectedDate:d,setSelectedDate:y},children:m("div",{className:n,...t,children:[a(te,{className:Fe.customInput,onChange:()=>{},value:u,label:"Select a Date",trailingIcon:a(C,{content:a(W,{}),size:"medium",onClick:()=>p(!D),ref:c})}),a(R,{isOpen:D,onClose:()=>p(!1),triggerRef:c})]})})};h.displayName="DatePicker";const et={component:h,parameters:{chromatic:{delay:2e3}},title:"Components/Inputs/DatePicker"},B=e=>{const[n,l]=r.useState("");return a(h,{...e,setValue:l,value:n})},_=B.bind({}),g=B.bind({});g.args={selected:new Date(2022,5,2)};g.play=({canvasElement:e})=>{const n=ae(e);ne(()=>re.click(n.getByRole("button")))};var M,F,S;_.parameters={..._.parameters,docs:{...(M=_.parameters)==null?void 0:M.docs,source:{originalSource:`args => {
  const [value, setValue] = React.useState<string>("");
  return <DatePicker {...args} setValue={setValue} value={value} />;
}`,...(S=(F=_.parameters)==null?void 0:F.docs)==null?void 0:S.source}}};var A,Y,b;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`args => {
  const [value, setValue] = React.useState<string>("");
  return <DatePicker {...args} setValue={setValue} value={value} />;
}`,...(b=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:b.source}}};const tt=["Default","Selected"];export{_ as Default,g as Selected,tt as __namedExportsOrder,et as default};
//# sourceMappingURL=DatePicker.stories-f3e3a8d6.js.map