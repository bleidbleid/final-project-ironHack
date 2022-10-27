import{u as R,a as G,r as L,o as c,c as d,b as t,d as f,w as F,p as C,e as S,f as y,n as p,g as I,h as x,v as T,i as g,t as D,j as H,F as N,k as U,l as z,m as Y,q as j}from"./file_index.a3139052.js";import{_ as w}from"./file__plugin-vue_export-helper.e718e6fb.js";const K="/final-project-ironHack/logo.png";const O=i=>(C("data-v-2c80f169"),i=i(),S(),i),X={class:"navbar bg-blue sticky-0",role:"navigation","aria-label":"main navigation"},q={class:"navbar-start"},W=O(()=>t("img",{src:K,width:"64"},null,-1)),J={class:"navbar-end"},Q={__name:"NavBar",setup(i){const _=R(),e=G();async function l(){try{await e.logout(),_.push({name:"login"})}finally{}}return(v,o)=>{const r=L("router-link");return c(),d("nav",X,[t("div",q,[f(r,{to:{name:"home"}},{default:F(()=>[W]),_:1})]),t("div",J,[t("button",{onClick:o[0]||(o[0]=$=>l()),class:"button bg-grey"},"Log out")])])}}},Z=w(Q,[["__scopeId","data-v-2c80f169"]]);const tt={class:"center width-90 padding-20 bg-realwhite"},et={class:"center width-100 bgGrey flex is-horitzontal space-between prioContainer"},st={__name:"PrioritySorter",emits:["prior","date"],setup(i,{emit:_}){const e=y(!0),l=()=>{_("prior"),e.value=!1},v=()=>{_("date"),e.value=!0};return(o,r)=>(c(),d("div",tt,[t("div",et,[t("button",{class:p(["fs-14 bg-blackish width-50",{bgGrey:!e.value}]),onClick:v}," by date",2),t("button",{class:p(["fs-14 width-50 bg-blackish",{bgGrey:e.value}]),onClick:l},"by priority",2)])]))}},M=w(st,[["__scopeId","data-v-d00380a1"]]);const E=i=>(C("data-v-73676a48"),i=i(),S(),i),ot={class:"task-component sticky-100 bg-white"},at=E(()=>t("h2",null,"New task",-1)),nt={class:"task-container"},it={class:"task-element"},lt=E(()=>t("span",{class:"font-sg"}," Title * ",-1)),rt={class:"task-element"},ct=E(()=>t("span",{class:"font-sg"}," Description * ",-1)),dt={class:"task-element"},ut=E(()=>t("span",{class:"font-sg"}," Priority ",-1)),_t={class:"flex space-around mt-5"},pt={__name:"TaskCreator",emits:["create","prior","date"],setup(i,{emit:_}){const e=I(),l=y(""),v=y(""),o=y(0),r=async s=>(o.value=s,o.value),$=async s=>{s.preventDefault(),!v.value==""&&!l.value==""&&(await e.addTask(v.value,l.value,o.value),_("create"),v.value="",l.value="",o.value=0)};function m(s){let a=s.value;s.value="",s._baseScrollHeight=s.scrollHeight,s.value=a}function h({target:s}){if(!s.classList.contains("autoExpand")||!s.nodeName=="TEXTAREA")return;let a=s.getAttribute("data-min-rows")|0,b;!s._baseScrollHeight&&m(s),s.rows=a,b=Math.ceil((s.scrollHeight-s._baseScrollHeight)/16),s.rows=a+b}return(s,a)=>(c(),d("aside",ot,[at,t("form",nt,[t("div",it,[lt,x(t("input",{"onUpdate:modelValue":a[0]||(a[0]=b=>v.value=b),class:"text task-input bg-grey",placeholder:"Title"},null,512),[[T,v.value]])]),t("div",rt,[ct,x(t("textarea",{"onUpdate:modelValue":a[1]||(a[1]=b=>l.value=b),class:"text task-input bg-grey autoExpand",name:"",id:"",rows:"3","data-min-rows":"3",onInput:h,placeholder:"New description"},null,544),[[T,l.value]])]),t("div",dt,[ut,t("article",_t,[t("button",{class:p(["priority bg-grey border-green weight-regular font-lora",{bgGreen:o.value==1}]),value:"1",onClick:a[2]||(a[2]=b=>r(1))}," Low ",2),t("button",{class:p(["priority bg-grey border-yellow weight-regular font-lora",{bgYellow:o.value==2}]),value:"2",onClick:a[3]||(a[3]=b=>r(2))},"Medium",2),t("button",{class:p(["priority bg-grey border-red weight-regular font-lora",{bgRed:o.value==3}]),value:"3",onClick:a[4]||(a[4]=b=>r(3))},"High",2)])]),t("div",{class:"task-button"},[t("button",{onClick:$,class:"button bg-blue"},"Create")])]),f(M,{onPrior:a[5]||(a[5]=b=>_("prior")),onDate:a[6]||(a[6]=b=>_("date")),class:"bottom"})]))}},vt=w(pt,[["__scopeId","data-v-73676a48"]]);const P=i=>(C("data-v-5a742481"),i=i(),S(),i),kt={class:"containerGrid"},bt={class:"task-delete"},gt={class:"date"},yt={class:"task-info"},mt={key:0,class:"task-title"},ht=P(()=>t("span",{class:"material-symbols-outlined"}," check_box ",-1)),ft=[ht],wt={key:1},$t=P(()=>t("div",{class:"edit-element font-sg"}," Title ",-1)),xt=["placeholder"],Tt={key:2},Ct={key:0,class:"task-content"},St={class:"description"},Ht={key:3,class:"mt-16"},It=P(()=>t("div",{class:"edit-element font-sg"}," Description ",-1)),Et={key:4,class:"mt-16 mb-16"},Pt=P(()=>t("div",{class:"edit-element font-sg"}," Priority ",-1)),Dt={class:"flex space-around mt-5"},Nt={key:5,class:"task-actions mt-16"},Bt={key:1,class:"center width-100 mt-24 flex space-between"},Mt={__name:"Tasks",props:{task:Object},emits:["edit","orderTasks"],setup(i,{emit:_}){const e=i,l=I(),v=y(e.task.is_complete),o=y(!1),r=y(e.task.priority),$=y(e.task.created_at.slice(0,10)),m=async u=>{if(r.value==u)r.value=0;else return r.value=u,r.value},h=async()=>{await l.deleteTask(e.task.id),await l.getTasks(),o.value=!1},s=async(u,n)=>{v.value=u,await l.completeTask(e.task.id,u),await l.getTasks()};function a(u){var n=u.value;u.value="",u._baseScrollHeight=u.scrollHeight,u.value=n}function b({target:u}){if(!(!u.classList.contains("autoExpand")||!u.nodeName=="TEXTAREA")){var n=u.getAttribute("data-min-rows")|0,k;!u._baseScrollHeight&&a(u),u.rows=n,k=Math.ceil((u.scrollHeight-u._baseScrollHeight)/16),u.rows=n+k}}const V=()=>{o.value=!0},A=async()=>{await l.editTask(e.task.title,e.task.description,e.task.id,r.value),_("edit"),o.value=!1};return(u,n)=>(c(),d("div",kt,[t("figure",null,[t("div",{class:p(["card",{bgRed:e.task.priority==3&&e.task.is_complete},{bgGreen:e.task.priority==1&&e.task.is_complete},{bgYellow:e.task.priority==2&&e.task.is_complete},{colorDone:!e.task.is_complete}])},[t("div",bt,[o.value?g("",!0):(c(),d("button",{key:0,onClick:n[0]||(n[0]=k=>h())},[t("span",{class:p(["material-symbols-outlined close",{blue:e.task.priority==0&&e.task.is_complete}])}," close ",2)])),t("p",gt,D($.value),1)]),t("div",yt,[o.value?g("",!0):(c(),d("div",mt,[e.task.is_complete?(c(),d("button",{key:1,onClick:n[2]||(n[2]=k=>s(!1,e.task.id))},[t("span",{class:p(["material-symbols-outlined",{blue:e.task.priority==0}])}," check_box_outline_blank ",2)])):(c(),d("button",{key:0,onClick:n[1]||(n[1]=k=>s(!0,e.task.id))},ft)),t("span",{class:p(["title",{textDone:!e.task.is_complete}])},D(e.task.title),3)])),o.value?(c(),d("div",wt,[$t,x(t("input",{"onUpdate:modelValue":n[3]||(n[3]=k=>e.task.title=k),class:"text task-input bg-trans",placeholder:e.task.title},null,8,xt),[[T,e.task.title]])])):g("",!0),o.value?g("",!0):(c(),d("div",Tt,[e.task.is_complete?(c(),d("div",Ct,[t("span",St,D(e.task.description),1)])):g("",!0)])),o.value?(c(),d("div",Ht,[It,x(t("textarea",{"onUpdate:modelValue":n[4]||(n[4]=k=>e.task.description=k),class:"text task-input bg-trans autoExpand",name:"",onInput:b,"data-min-rows":"3"},null,544),[[T,e.task.description]])])):g("",!0),o.value?(c(),d("div",Et,[Pt,t("article",Dt,[t("button",{class:p(["priority bg-trans weight-regular font-lora",{bgGreen:r.value==1,borderBlackish:r.value==1}]),value:"1",onClick:n[5]||(n[5]=k=>m(1))}," Low ",2),t("button",{class:p(["priority bg-trans weight-regular font-lora",{bgYellow:r.value==2,borderBlackish:r.value==2}]),value:"2",onClick:n[6]||(n[6]=k=>m(2))},"Medium",2),t("button",{class:p(["priority bg-trans weight-regular font-lora",{bgRed:r.value==3,borderBlackish:r.value==3}]),value:"3",onClick:n[7]||(n[7]=k=>m(3))},"High",2)])])):g("",!0),e.task.is_complete?(c(),d("div",Nt,[o.value?g("",!0):(c(),d("button",{key:0,class:"paddingr-0",onClick:n[8]||(n[8]=k=>V())},[t("span",{class:p(["material-symbols-outlined",{blue:e.task.priority==0}])}," edit_note ",2)])),o.value?(c(),d("div",Bt,[t("button",{onClick:n[9]||(n[9]=k=>o.value=!o.value),class:p(["button blackish",{blue:e.task.priority==0}])}," Cancel ",2),t("button",{onClick:n[10]||(n[10]=k=>A()),class:p(["button bg-blackish",{bgBlue:e.task.priority==0}])}," Apply ",2)])):g("",!0)])):g("",!0)])],2)])]))}},Vt=w(Mt,[["__scopeId","data-v-5a742481"]]);const At=i=>(C("data-v-05155e14"),i=i(),S(),i),Rt={class:"footer"},Gt=At(()=>t("div",{class:"content center"},[t("p",null,[t("strong",null,"Kaosn't"),H(" by "),t("a",{href:"https://github.com/bleidbleid"},"Maria Blad\xE9"),H(". The source code is licensed "),t("a",{href:"http://opensource.org/licenses/mit-license.php"},"MIT"),H(". ")])],-1)),Lt=[Gt],Ft={__name:"Footer",setup(i){return(_,e)=>(c(),d("footer",Rt,Lt))}},Ut=w(Ft,[["__scopeId","data-v-05155e14"]]);const B=i=>(C("data-v-7a63a028"),i=i(),S(),i),zt={class:"center mobile bg-realwhite borderbottom-blackish"},Yt={key:0,class:"material-symbols-outlined"},jt={key:1,class:"material-symbols-outlined"},Kt={key:0},Ot={class:"task-component bg-realwhite"},Xt={class:"task-container"},qt={class:"task-element mt-24"},Wt=B(()=>t("span",{class:"font-sg"}," Title * ",-1)),Jt={class:"task-element"},Qt=B(()=>t("span",{class:"font-sg"}," Description * ",-1)),Zt={class:"task-element"},te=B(()=>t("span",{class:"font-sg"}," Priority ",-1)),ee={class:"flex space-around mt-5"},se={__name:"MobileTasker",emits:["prior","date"],setup(i,{emit:_}){const e=I(),l=y(""),v=y(""),o=y(0),r=async h=>(o.value=h,o.value),$=async h=>{h.preventDefault(),!v.value==""&&!l.value==""&&(await e.addTask(v.value,l.value,o.value),await e.getTasks(),_("create"),v.value="",l.value="",o.value=0)},m=y(!1);return(h,s)=>(c(),d(N,null,[t("div",zt,[t("button",{class:"width-100 center block fontsize-24",onClick:s[0]||(s[0]=a=>m.value=!m.value)},[H(" NEW TASK "),m.value?g("",!0):(c(),d("span",Yt," expand_more ")),m.value?(c(),d("span",jt," expand_less ")):g("",!0)]),m.value?(c(),d("div",Kt,[t("aside",Ot,[t("form",Xt,[t("div",qt,[Wt,x(t("input",{"onUpdate:modelValue":s[1]||(s[1]=a=>v.value=a),class:"text task-input bg-grey",placeholder:"Title"},null,512),[[T,v.value]])]),t("div",Jt,[Qt,x(t("textarea",{"onUpdate:modelValue":s[2]||(s[2]=a=>l.value=a),class:"text task-input bg-grey autoExpand",name:"",id:"",rows:"3","data-min-rows":"3",placeholder:"New description"},null,512),[[T,l.value]])]),t("div",Zt,[te,t("article",ee,[t("button",{class:p(["priority bg-grey border-green weight-regular font-lora",{bgGreen:o.value==1}]),value:"1",onClick:s[3]||(s[3]=a=>r(1))}," Low ",2),t("button",{class:p(["priority bg-grey border-yellow weight-regular font-lora",{bgYellow:o.value==2}]),value:"2",onClick:s[4]||(s[4]=a=>r(2))},"Medium",2),t("button",{class:p(["priority bg-grey border-red weight-regular font-lora",{bgRed:o.value==3}]),value:"3",onClick:s[5]||(s[5]=a=>r(3))},"High",2)])]),t("div",{class:"task-button"},[t("button",{onClick:$,class:"button bg-blue"},"Create")])])])])):g("",!0)]),f(M,{class:"mobile width-100 center",onPrior:s[6]||(s[6]=a=>_("prior")),onDate:s[7]||(s[7]=a=>_("date"))})],64))}},oe=w(se,[["__scopeId","data-v-7a63a028"]]);const ae={class:"flex"},ne={class:"task-creator is-4"},ie={class:"is-8 container"},le={__name:"Home",setup(i){const _=I(),e=()=>{_.getTasks()},l=()=>{_.getOrdered()};return U(()=>{e()}),(v,o)=>(c(),d(N,null,[f(Z,{class:"sticky-0 z-index"}),f(oe,{onPrior:l,onDate:e}),t("section",ae,[t("div",ne,[f(vt,{onCreate:e,onPrior:l,onDate:e})]),t("div",ie,[(c(!0),d(N,null,z(Y(_).task,r=>(c(),j(Vt,{onEdit:e,task:r,class:"task-div"},null,8,["task"]))),256))])]),f(Ut)],64))}},de=w(le,[["__scopeId","data-v-e3d1a000"]]);export{de as default};
