import{u as g,a as h,e as n,o as v,c as b,b as e,w as f,f as c,g as r,v as u,p as y,j as w}from"./index.37fde3f0.js";import{_ as S}from"./_plugin-vue_export-helper.cdc0426e.js";const p=t=>(y("data-v-40204b55"),t=t(),w(),t),x={class:"section"},k={class:"login-container bg-white"},R=p(()=>e("h2",null,"Register",-1)),I=["onSubmit"],V={class:"login-element"},B={class:"login-element"},T=p(()=>e("div",{classe:"login-button bg-blackish"},[e("input",{class:"button",type:"submit",placeholder:"Text input"})],-1)),E={__name:"Register",setup(t){const d=g(),_=h(),o=n(""),a=n("");n("Please, confirm your email adress");const m=async()=>{try{await _.register(o.value,a.value),d.push({name:"login"})}catch(l){console.log(l),alert("Check your email for confirmation link")}};return(l,s)=>(v(),b("section",x,[e("div",k,[R,e("form",{onSubmit:f(m,["prevent"]),class:"login-content"},[e("div",V,[c(" Email "),r(e("input",{"onUpdate:modelValue":s[0]||(s[0]=i=>o.value=i),class:"login-input bg-grey",type:"email",placeholder:"email@email.com"},null,512),[[u,o.value]])]),e("div",B,[c(" Password "),r(e("input",{"onUpdate:modelValue":s[1]||(s[1]=i=>a.value=i),class:"login-input bg-grey",type:"password",placeholder:"************"},null,512),[[u,a.value]])]),T],40,I)])]))}},P=S(E,[["__scopeId","data-v-40204b55"]]);export{P as default};
