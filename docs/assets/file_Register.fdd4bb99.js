import{u as w,a as b,f as l,r as y,o as x,c as S,b as e,s as V,j as n,h as t,v as p,x as _,d as R,w as k,p as C,e as I}from"./file_index.6d25bb22.js";import{_ as N}from"./file_logoBlack.e320ac00.js";import{_ as P}from"./file__plugin-vue_export-helper.e718e6fb.js";const m=i=>(C("data-v-ca93fae9"),i=i(),I(),i),T={class:"section"},A={class:"login-container is-4 bg-white"},B=m(()=>e("article",{class:"welcome"},[e("h2",null,[n("Welcome to "),e("img",{src:N,width:"88"})]),e("p",null,"A place where entropy does not exist")],-1)),E=["onSubmit"],M={class:"login-element"},U={class:"login-element"},j={class:"help is-danger"},D={class:"help is-danger"},H={class:"login-element"},L={class:"help is-danger"},W=m(()=>e("div",{class:"login-button"},[e("button",{class:"button bg-blue",type:"submit",placeholder:"Text input"},"Register")],-1)),$={class:"login-element"},q=m(()=>e("b",null,"Log in",-1)),z={__name:"Register",setup(i){const v=w(),h=b(),r=l(""),s=l(""),c=l(""),u=l(!1),d=l(!1),g=async()=>{s.value===c.value&&s.value.length>5?(d.value=!1,u.value=!1,await h.register(r.value,s.value),alert(`Hello ${r.value}, please confirm your email.`),v.push({name:"login"})):s.value.length<6?d.value=!0:s.value!==c.value&&(d.value=!1,u.value=!0)};return(F,o)=>{const f=y("router-link");return x(),S("section",T,[e("div",A,[B,e("form",{onSubmit:V(g,["prevent"]),class:"login-content"},[e("div",M,[n(" Email "),t(e("input",{"onUpdate:modelValue":o[0]||(o[0]=a=>r.value=a),class:"login-input bg-grey",type:"email",placeholder:"email@email.com"},null,512),[[p,r.value]])]),e("div",U,[n(" Password "),t(e("input",{"onUpdate:modelValue":o[1]||(o[1]=a=>s.value=a),class:"login-input bg-grey",type:"password",placeholder:"************"},null,512),[[p,s.value]]),t(e("p",j,"Passwords do not match!",512),[[_,u.value]]),t(e("p",D,"The password must be at least 6 characters long. ",512),[[_,d.value]])]),e("div",H,[n(" Confirm password "),t(e("input",{"onUpdate:modelValue":o[2]||(o[2]=a=>c.value=a),id:"confirmPassword",class:"login-input bg-grey",type:"password",placeholder:"************"},null,512),[[p,c.value]]),t(e("p",L,"Passwords do not match!",512),[[_,u.value]])]),W,e("div",$,[e("article",null,[R(f,{to:{name:"login"}},{default:k(()=>[n(" Already a member? "),q]),_:1})])])],40,E)])])}}},O=P(z,[["__scopeId","data-v-ca93fae9"]]);export{O as default};
