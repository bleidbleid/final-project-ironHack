import{u as D,a as L,r as R,o as l,c,b as t,d as T,w as M,p as C,e as S,f as H,g as y,h as f,v as h,n as _,t as N,i as b,F as B,j as G,k as P,l as U}from"./file_index.41521023.js";import{_ as $}from"./file__plugin-vue_export-helper.e718e6fb.js";const j="/final-project-ironHack/logo.png";const F=r=>(C("data-v-28cb86e3"),r=r(),S(),r),Y={class:"navbar bg-blue sticky-0",role:"navigation","aria-label":"main navigation"},z={class:"navbar-start"},X=F(()=>t("img",{src:j,width:"64"},null,-1)),O={class:"navbar-end"},q={__name:"NavBar",setup(r){const e=D(),u=L();async function k(){try{await u.logout(),e.push({name:"login"})}finally{}}return(a,g)=>{const m=R("router-link");return l(),c("nav",Y,[t("div",z,[T(m,{to:{name:"home"}},{default:M(()=>[X]),_:1})]),t("div",O,[t("button",{onClick:g[0]||(g[0]=v=>k()),class:"button bg-grey"},"Log out")])])}}},J=$(q,[["__scopeId","data-v-28cb86e3"]]);const x=r=>(C("data-v-648806a2"),r=r(),S(),r),K={class:"task-component sticky-100 item1 bg-white"},Q=x(()=>t("h2",null,"New task",-1)),W={class:"task-container"},Z={class:"task-element"},tt=x(()=>t("span",{class:"font-sg"}," Title * ",-1)),et={class:"task-element"},st=x(()=>t("span",{class:"font-sg"}," Description * ",-1)),at={class:"task-element"},ot=x(()=>t("span",{class:"font-sg"}," Priority ",-1)),nt={class:"flex space-around mt-5"},it={__name:"TaskCreator",setup(r){const e=H(),u=y(""),k=y(""),a=y(0),g=async o=>(a.value=o,console.log(a.value),a.value),m=async o=>{o.preventDefault(),!k.value==""&&!u.value==""&&(await e.addTask(k.value,u.value,a.value),await e.getTasks(),k.value="",u.value="",a.value=0)};function v(o){var i=o.value;o.value="",o._baseScrollHeight=o.scrollHeight,o.value=i}function w({target:o}){if(!(!o.classList.contains("autoExpand")||!o.nodeName=="TEXTAREA")){var i=o.getAttribute("data-min-rows")|0,p;!o._baseScrollHeight&&v(o),o.rows=i,console.log("minrows",i),p=Math.ceil((o.scrollHeight-o._baseScrollHeight)/16),o.rows=i+p,console.log("elm.rows",o.rows),console.log("rows",p)}}return document.addEventListener("input",w),(o,i)=>(l(),c("aside",K,[Q,t("form",W,[t("div",Z,[tt,f(t("input",{"onUpdate:modelValue":i[0]||(i[0]=p=>k.value=p),class:"text task-input bg-grey",placeholder:"Title"},null,512),[[h,k.value]])]),t("div",et,[st,f(t("textarea",{"onUpdate:modelValue":i[1]||(i[1]=p=>u.value=p),class:"text task-input bg-grey autoExpand",name:"",id:"",rows:"3","data-min-rows":"3",placeholder:"New description"},null,512),[[h,u.value]])]),t("div",at,[ot,t("article",nt,[t("button",{class:_(["priority bg-grey border-green weight-regular font-lora",{bgGreen:a.value==1}]),value:"1",onClick:i[2]||(i[2]=p=>g(1))}," Low ",2),t("button",{class:_(["priority bg-grey border-yellow weight-regular font-lora",{bgYellow:a.value==2}]),value:"2",onClick:i[3]||(i[3]=p=>g(2))},"Medium",2),t("button",{class:_(["priority bg-grey border-red weight-regular font-lora",{bgRed:a.value==3}]),value:"3",onClick:i[4]||(i[4]=p=>g(3))},"High",2)])]),t("div",{class:"task-button"},[t("button",{onClick:m,class:"button bg-blue"},"Create")])])]))}},lt=$(it,[["__scopeId","data-v-648806a2"]]);const E=r=>(C("data-v-9f6aafbe"),r=r(),S(),r),rt={class:"containerGrid"},ct={class:"task-delete"},ut={class:"task-info"},dt={key:0,class:"task-title"},_t={key:1},vt=E(()=>t("div",{class:"edit-element font-sg"}," Title ",-1)),pt={key:2},kt={key:0,class:"task-content"},gt={class:"description"},bt={key:3,class:"mt-16"},yt=E(()=>t("div",{class:"edit-element font-sg"}," Description ",-1)),mt={key:4,class:"mt-16 mb-16"},wt=E(()=>t("div",{class:"edit-element font-sg"}," Priority ",-1)),ft={class:"flex space-around mt-5"},ht={key:5,class:"task-actions mt-16"},$t={key:1},xt={__name:"Tasks",props:{task:Object},setup(r){const e=r,u=H(),k=y(e.task.is_complete),a=y(!1),g=y(e.task.title),m=y(e.task.description);console.log(e.task.priority);const v=y(e.task.priority),w=async n=>(v.value=n,console.log(v.value),v.value),o=async()=>{await u.deleteTask(e.task.id),await u.getTasks(),a.value=!1},i=async(n,s)=>{k.value=n,await u.completeTask(e.task.id,n),await u.getTasks(),console.log(s)};function p(n){var s=n.value;n.value="",n._baseScrollHeight=n.scrollHeight,n.value=s}function I({target:n}){if(!(!n.classList.contains("autoExpand")||!n.nodeName=="TEXTAREA")){var s=n.getAttribute("data-min-rows")|0,d;!n._baseScrollHeight&&p(n),n.rows=s,d=Math.ceil((n.scrollHeight-n._baseScrollHeight)/16),n.rows=s+d}}document.addEventListener("input",I);const V=()=>{a.value=!0},A=async()=>{await u.editTask(g.value,m.value,e.task.id,v.value),await u.getTasks(),a.value=!1};return(n,s)=>(l(),c("div",rt,[t("figure",null,[t("div",{class:_(["card",{bgRed:e.task.priority==3&&e.task.is_complete},{bgGreen:e.task.priority==1&&e.task.is_complete},{bgYellow:e.task.priority==2&&e.task.is_complete},{colorDone:!e.task.is_complete}])},[t("div",ct,[t("button",{onClick:s[0]||(s[0]=d=>o())},[t("span",{class:_(["material-symbols-outlined",{blue:e.task.priority==0}])}," close ",2)])]),t("div",ut,[a.value?b("",!0):(l(),c("div",dt,[e.task.is_complete?(l(),c("button",{key:1,onClick:s[2]||(s[2]=d=>i(!1,e.task.id))},[t("span",{class:_(["material-symbols-outlined",{blue:e.task.priority==0}])}," check_box_outline_blank ",2)])):(l(),c("button",{key:0,onClick:s[1]||(s[1]=d=>i(!0,e.task.id))},[t("span",{class:_(["material-symbols-outlined",{blue:e.task.priority==0}])}," check_box ",2)])),t("span",{class:_(["title",{textDone:!e.task.is_complete}])},N(e.task.title),3)])),a.value?(l(),c("div",_t,[vt,f(t("input",{"onUpdate:modelValue":s[3]||(s[3]=d=>g.value=d),class:"text task-input bg-trans",placeholder:"New title"},null,512),[[h,g.value]])])):b("",!0),a.value?b("",!0):(l(),c("div",pt,[e.task.is_complete?(l(),c("div",kt,[t("span",gt,N(e.task.description),1)])):b("",!0)])),a.value?(l(),c("div",bt,[yt,f(t("textarea",{"onUpdate:modelValue":s[4]||(s[4]=d=>m.value=d),class:"text task-input bg-trans autoExpand",name:"",id:"","data-min-rows":"3",placeholder:"New description"},null,512),[[h,m.value]])])):b("",!0),a.value?(l(),c("div",mt,[wt,t("article",ft,[t("button",{class:_(["priority bg-trans weight-regular font-lora",{bgGreen:v.value==1,borderBlackish:v.value==1}]),value:"1",onClick:s[5]||(s[5]=d=>w(1))}," Low ",2),t("button",{class:_(["priority bg-trans weight-regular font-lora",{bgYellow:v.value==2,borderBlackish:v.value==2}]),value:"2",onClick:s[6]||(s[6]=d=>w(2))},"Medium",2),t("button",{class:_(["priority bg-trans weight-regular font-lora",{bgRed:v.value==3,borderBlackish:v.value==3}]),value:"3",onClick:s[7]||(s[7]=d=>w(3))},"High",2)])])):b("",!0),e.task.is_complete?(l(),c("div",ht,[a.value?b("",!0):(l(),c("button",{key:0,onClick:s[8]||(s[8]=d=>V())},[t("span",{class:_(["material-symbols-outlined",{blue:e.task.priority==0}])}," edit ",2)])),a.value?(l(),c("div",$t,[t("button",{onClick:s[9]||(s[9]=d=>A()),class:_(["button bg-blackish",{bgBlue:e.task.priority==0}])}," Apply ",2),t("button",{onClick:s[10]||(s[10]=d=>a.value=!a.value),class:_(["button blackish",{blue:e.task.priority==0}])}," Cancel ",2)])):b("",!0)])):b("",!0)])],2)])]))}},Tt=$(xt,[["__scopeId","data-v-9f6aafbe"]]);const Ct={class:"flex"},St={class:"task-creator is-4"},Ht={class:"is-8 container"},Et={__name:"Home",setup(r){const e=H();return e.getTasks(),(u,k)=>(l(),c(B,null,[T(J,{class:"sticky-0 z-index"}),t("section",Ct,[t("div",St,[T(lt)]),t("div",Ht,[(l(!0),c(B,null,G(P(e).task,a=>(l(),U(Tt,{task:a,class:"task-div"},null,8,["task"]))),256))])])],64))}},It=$(Et,[["__scopeId","data-v-bbe60648"]]);export{It as default};
