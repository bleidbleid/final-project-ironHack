import{u as x,a as d,o as r,c as u,b as s,p as b,d as f,e as T,f as w,r as m,g as h,w as k,v,F as p,h as N,i as S,j as C,k as g}from"./index.1478400b.js";import{_ as I}from"./_plugin-vue_export-helper.cdc0426e.js";const A=t=>(b("data-v-0610ed35"),t=t(),f(),t),B={class:"navbar bg-blackish",role:"navigation","aria-label":"main navigation"},V=A(()=>s("div",{class:"navbar-start"},[s("a",{href:"https://bulma.io"},[s("img",{src:"https://bulma.io/images/bulma-logo.png",width:"112",height:"28"})])],-1)),J={class:"navbar-end"},$={__name:"NavBar",setup(t){const a=x(),e=d();async function o(){try{await e.logout(),a.push({name:"login"})}finally{}}return(_,n)=>(r(),u("nav",B,[V,s("div",J,[s("button",{onClick:n[0]||(n[0]=c=>o()),class:"button"},"Log out")])]))}},Y=I($,[["__scopeId","data-v-0610ed35"]]),Z="https://dvpbspsdauggkqbrhbxs.supabase.co",z="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR2cGJzcHNkYXVnZ2txYnJoYnhzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2NjA3NjkyNiwiZXhwIjoxOTgxNjUyOTI2fQ.87Br6uuVzkasAmSkKQhO2yYyQel2vE6yu3AvQqFbCo4",l=T(Z,z),y=w("task",{state:()=>({task:null}),actions:{async getTasks(){const{data:t}=await l.from("task").select("*").order("is_complete").order("id",{ascending:!1});return this.task=t,this.task},async editTask(t,a,e){try{const{data:o,error:_}=await l.from("task").update({title:t,description:a}).match({id:e})}catch(o){console.log("this is my error",o)}},async taskComplete(t,a){try{const{data:e,error:o}=await l.from("task").update({is_complete:!a}).match({id:t})}catch(e){console.log("this is my error",e)}},async addTask(t,a){console.log(d().user.id),await l.from("task").insert([{user_id:d().user.id,title:t,is_complete:!1,description:a}])}}}),U={__name:"Tasks",setup(t){return y(),(a,e)=>null}};const j=t=>(b("data-v-4194ecfc"),t=t(),f(),t),O={class:"section"},Q={class:"task-component bg-white"},F=j(()=>s("h2",null,"New task",-1)),L={class:"task-container"},X={class:"task-element"},D={class:"task-element"},M={__name:"TaskCreator",setup(t){const a=y(),e=m(""),o=m(""),_=n=>{n.preventDefault(),console.log("AQUIII",o.value),console.log("ALLAAAA",e.value),a.addTask(o.value,e.value),o.value="",e.value="",a.publishTask()};return(n,c)=>(r(),u(p,null,[s("section",O,[s("div",Q,[F,s("form",L,[s("div",X,[h(" Title "),k(s("input",{"onUpdate:modelValue":c[0]||(c[0]=i=>o.value=i),class:"text task-input bg-grey",placeholder:"Title"},null,512),[[v,o.value]])]),s("div",D,[h(" Description "),k(s("textarea",{"onUpdate:modelValue":c[1]||(c[1]=i=>e.value=i),class:"textarea task-input bg-grey",placeholder:"Write thing to do"},null,512),[[v,e.value]])]),s("div",{class:"task-button"},[s("button",{onClick:_,class:"button bg-blackish"},"Create")])])])]),(r(!0),u(p,null,N(S(a),i=>(r(),C(U))),256))],64))}},R=I(M,[["__scopeId","data-v-4194ecfc"]]),G={__name:"Home",setup(t){return(a,e)=>(r(),u(p,null,[g(Y),g(R)],64))}};export{G as default};
