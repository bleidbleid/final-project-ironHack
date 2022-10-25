import{u as V,a as B,r as H,o as a,c as o,b as t,d as g,w as U,p as x,e as T,f as C,g as v,h as y,v as h,i as E,n as S,t as I,j as r,F as D,k as j,l as F}from"./file_index.1325dec1.js";import{_ as f}from"./file__plugin-vue_export-helper.e718e6fb.js";const L="/final-project-ironHack/logo.png";const M=n=>(x("data-v-bb7d7df2"),n=n(),T(),n),A={class:"navbar bg-blue",role:"navigation","aria-label":"main navigation"},P={class:"navbar-start"},z=M(()=>t("img",{src:L,width:"88"},null,-1)),O={class:"navbar-end"},R={__name:"NavBar",setup(n){const s=V(),i=B();async function c(){try{await i.logout(),s.push({name:"login"})}finally{}}return(e,d)=>{const p=H("router-link");return a(),o("nav",A,[t("div",P,[g(p,{to:{name:"home"}},{default:U(()=>[z]),_:1})]),t("div",O,[t("button",{onClick:d[0]||(d[0]=m=>c()),class:"button bg-grey"},"Log out")])])}}},q=f(R,[["__scopeId","data-v-bb7d7df2"]]);const w=n=>(x("data-v-0d31feb0"),n=n(),T(),n),G={class:"task-component item1 bg-white"},J=w(()=>t("h2",null,"New task",-1)),K={class:"task-container"},Q={class:"task-element"},W=w(()=>t("span",{class:"font-sg"}," Title * ",-1)),X={class:"task-element"},Y=w(()=>t("span",{class:"font-sg"}," Description * ",-1)),Z={class:"task-element"},tt=w(()=>t("span",{class:"font-sg"}," Priority ",-1)),st={__name:"TaskCreator",setup(n){const s=C(),i=v(""),c=v(""),e=v(),d=async m=>{e=e.value,console.log(value.value)},p=async m=>{m.preventDefault(),!c.value==""&&!i.value==""&&(await s.addTask(c.value,i.value),await s.getTasks(),c.value="",i.value="")};return(m,_)=>(a(),o("aside",G,[J,t("form",K,[t("div",Q,[W,y(t("input",{"onUpdate:modelValue":_[0]||(_[0]=k=>c.value=k),class:"text task-input bg-grey",placeholder:"Title"},null,512),[[h,c.value]])]),t("div",X,[Y,y(t("textarea",{"onUpdate:modelValue":_[1]||(_[1]=k=>i.value=k),class:"textarea task-input bg-grey",placeholder:"Description of what I have to do"},`
                    `,512),[[h,i.value]])]),t("div",Z,[tt,y(t("select",{"onUpdate:modelValue":_[2]||(_[2]=k=>e.value=k),multiple:"",class:"bg-none"},[t("option",{onClick:d,class:"priority bg-grey",value:"1"},"Low"),t("option",{onClick:d,class:"priority bg-grey",value:"2"},"Medium"),t("option",{onClick:d,class:"priority bg-grey",value:"3"},"High")],512),[[E,e.value]])]),t("div",{class:"task-button"},[t("button",{onClick:p,class:"button bg-blue"},"Create")])])]))}},et=f(st,[["__scopeId","data-v-0d31feb0"]]);const b=n=>(x("data-v-fb3a3af2"),n=n(),T(),n),at={class:"task-delete"},ot=b(()=>t("span",{class:"material-symbols-outlined blackish"}," close ",-1)),nt=[ot],lt={class:"task-info"},it={key:0,class:"task-title"},ct=b(()=>t("span",{class:"material-symbols-outlined blackish"}," check_box ",-1)),dt=[ct],_t=b(()=>t("span",{class:"material-symbols-outlined blackish"}," check_box_outline_blank ",-1)),rt=[_t],ut={key:1},pt=b(()=>t("div",{class:"edit-element"}," Title ",-1)),kt={key:2},vt={key:0,class:"task-content"},mt={class:"description"},bt={key:3,class:"mt-16"},yt=b(()=>t("div",{class:"edit-element"}," Description ",-1)),gt={key:4,class:"task-actions"},ht=b(()=>t("span",{class:"material-symbols-outlined blackish"}," edit ",-1)),ft=[ht],wt={__name:"Tasks",props:{task:Object},setup(n){const s=n,i=C(),c=v(s.task.is_complete),e=v(!1),d=v(s.task.title),p=v(s.task.description),m=async()=>{await i.deleteTask(s.task.id),await i.getTasks()},_=async($,l)=>{c.value=$,await i.completeTask(s.task.id,$),await i.getTasks(),console.log(l)},k=()=>{e.value=!0},N=async()=>{await i.editTask(d.value,p.value,s.task.id),await i.getTasks(),e.value=!1};return($,l)=>(a(),o("div",{class:S(["card",{colorDone:!s.task.is_complete}])},[t("div",at,[t("button",{onClick:l[0]||(l[0]=u=>m())},nt)]),t("div",lt,[e.value?r("",!0):(a(),o("div",it,[s.task.is_complete?(a(),o("button",{key:1,onClick:l[2]||(l[2]=u=>_(!1,s.task.id))},rt)):(a(),o("button",{key:0,onClick:l[1]||(l[1]=u=>_(!0,s.task.id))},dt)),t("span",{class:S(["title",{textDone:!s.task.is_complete}])},I(s.task.title),3)])),e.value?(a(),o("div",ut,[pt,y(t("input",{"onUpdate:modelValue":l[3]||(l[3]=u=>d.value=u),class:"text task-input bg-grey",placeholder:"New title"},null,512),[[h,d.value]])])):r("",!0),e.value?r("",!0):(a(),o("div",kt,[s.task.is_complete?(a(),o("div",vt,[t("span",mt,I(s.task.description),1)])):r("",!0)])),e.value?(a(),o("div",bt,[yt,e.value?y((a(),o("textarea",{key:0,"onUpdate:modelValue":l[4]||(l[4]=u=>p.value=u),class:"text task-input bg-grey",name:"",id:"",cols:"25",rows:"10",placeholder:"New description"},null,512)),[[h,p.value]]):r("",!0)])):r("",!0),s.task.is_complete?(a(),o("div",gt,[e.value?r("",!0):(a(),o("button",{key:0,onClick:l[5]||(l[5]=u=>k())},ft)),e.value?(a(),o("button",{key:1,onClick:l[6]||(l[6]=u=>N())}," Apply changes ")):r("",!0)])):r("",!0)])],2))}},$t=f(wt,[["__scopeId","data-v-fb3a3af2"]]);const xt={class:"flex"},Tt={class:"task-creator is-4"},Ct={class:"taks-viewer is-8 flex flex-wrap"},St={class:"task-div"},It={__name:"Home",setup(n){const s=C();return s.getTasks(),(i,c)=>(a(),o(D,null,[g(q),t("section",xt,[t("div",Tt,[g(et)]),t("div",Ct,[(a(!0),o(D,null,j(F(s).task,e=>(a(),o("div",St,[g($t,{task:e},null,8,["task"])]))),256))])])],64))}},Vt=f(It,[["__scopeId","data-v-728e9709"]]);export{Vt as default};
