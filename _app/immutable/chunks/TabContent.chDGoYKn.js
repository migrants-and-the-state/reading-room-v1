import{a as K,t as at,b as ft}from"./disclose-version.Dqm1zY1T.js";import"./legacy.D_fMKO2q.js";import{p as st,ak as pt,m as I,l as p,a as nt,f as Tt,t as N,b as it,c as b,g as e,X as Ct,s as et,d as S,r as z,q as O,ai as vt}from"./runtime.Np9cZvI5.js";import{e as g,s as ht}from"./render.BjNr2k31.js";import{l as X,c as lt,p as _,i as wt,b as _t,d as $}from"./props.Bw1rhrWh.js";import{t as x,b as Q,c as U,d as dt,s as H}from"./misc.BCyIydmA.js";import{i as rt}from"./lifecycle.DLUrB-YD.js";import{c as It,a as $t}from"./index-client.BbjUdm2n.js";import{d as ut,w as J}from"./index.8f2b8lKJ.js";import{C as At}from"./ChevronDown.CFjw3eMp.js";function Bt(n,t,d,q){var r=n.__styles??(n.__styles={});r[t]!==d&&(r[t]=d,d==null?n.style.removeProperty(t):n.style.setProperty(t,d,""))}function Dt(n){return function(...t){var d=t[0];return d.stopPropagation(),n==null?void 0:n.apply(this,t)}}function V(n){return function(...t){var d=t[0];return d.preventDefault(),n==null?void 0:n.apply(this,t)}}var Pt=at('<div><div role="listbox" tabindex="0"><a tabindex="-1"><!></a> <!></div> <ul role="tablist"><!></ul></div> <!>',1);function jt(n,t){const d=X(t,["children","$$slots","$$events","$$legacy"]),q=X(d,["selected","type","autoWidth","iconDescription","triggerHref"]);st(t,!1);const r=lt(),W=()=>$(E,"$tabsById",r),u=()=>$(y,"$tabs",r),T=()=>$(c,"$content",r),C=()=>$(L,"$selectedTab",r),h=I(),o=I();let f=_(t,"selected",12,0),m=_(t,"type",8,"default"),A=_(t,"autoWidth",8,!1),j=_(t,"iconDescription",8,"Show menu options"),F=_(t,"triggerHref",8,"#");const w=It(),y=J([]),E=ut(y,s=>s.reduce((a,P)=>({...a,[P.id]:P}),{})),l=J(A()),L=J(void 0),c=J([]),Y=ut(c,s=>s.reduce((a,P)=>({...a,[P.id]:P}),{})),i=J(void 0);let M=I(null);pt("Tabs",{tabs:y,contentById:Y,selectedTab:L,selectedContent:i,useAutoWidth:l,add:s=>{y.update(a=>[...a,{...s,index:a.length}])},addContent:s=>{c.update(a=>[...a,{...s,index:a.length}])},update:s=>{b(v,W()[s].index)},change:async s=>{var bt;let a=e(v)+s;a<0?a=u().length-1:a>=u().length&&(a=0);let P=u()[a].disabled;for(;P;)a=a+s,a<0?a=u().length-1:a>=u().length&&(a=0),P=u()[a].disabled;b(v,a),await Ct();const tt=(bt=e(M))==null?void 0:bt.querySelectorAll("[role='tab']")[e(v)];tt==null||tt.focus()}}),$t(()=>{f(e(v)),Z>-1&&Z!==e(v)&&w("change",e(v)),Z=e(v)});let B=I(!0),v=I(f()),Z=-1;p(()=>O(f()),()=>{b(v,f())}),p(()=>(u(),e(v)),()=>{b(h,u()[e(v)]||void 0)}),p(()=>(T(),e(v)),()=>{b(o,T()[e(v)]||void 0)}),p(()=>(e(h),e(o)),()=>{e(h)&&L.set(e(h).id),e(o)&&i.set(e(o).id)}),p(()=>C(),()=>{C()&&b(B,!0)}),p(()=>O(A()),()=>{l.set(A())}),nt(),rt();var ot=Pt(),R=Tt(ot);let ct;var D=S(R),k=S(D),gt=S(k);wt(gt,()=>e(h),s=>{var a=ft();N(()=>ht(a,e(h).label)),K(s,a)}),z(k);var xt=et(k,2);At(xt,{"aria-hidden":"true",get title(){return j()}}),z(D);var G=et(D,2);x(G,"bx--tabs__nav",!0);var mt=S(G);Q(mt,t,"default",{},null),z(G),_t(G,s=>b(M,s),()=>e(M)),z(R);var yt=et(R,2);Q(yt,t,"content",{},null),N(()=>{ct=dt(R,ct,{role:"navigation",...q}),x(R,"bx--tabs",!0),x(R,"bx--tabs--container",m()==="container"),H(D,"aria-label",d["aria-label"]||"listbox"),x(D,"bx--tabs-trigger",!0),H(k,"href",F()),x(k,"bx--tabs-trigger-text",!0),x(G,"bx--tabs__nav--hidden",e(B))}),g("click",k,V(function(s){U.call(this,t,s)})),g("click",k,V(Dt(()=>{b(B,!e(B))}))),g("click",D,()=>{b(B,!e(B))}),g("keypress",D,function(s){U.call(this,t,s)}),g("keypress",D,()=>{b(B,!e(B))}),K(n,ot),it()}var Wt=at('<li><a role="tab"><!></a></li>');function Ft(n,t){const d=X(t,["children","$$slots","$$events","$$legacy"]),q=X(d,["label","href","disabled","tabindex","id","ref"]);st(t,!1);const r=lt(),W=()=>$(j,"$selectedTab",r),u=()=>$(F,"$useAutoWidth",r),T=I();let C=_(t,"label",8,""),h=_(t,"href",8,"#"),o=_(t,"disabled",8,!1),f=_(t,"tabindex",8,"0"),m=_(t,"id",24,()=>"ccs-"+Math.random().toString(36)),A=_(t,"ref",12,null);const{selectedTab:j,useAutoWidth:F,add:w,update:y,change:E}=vt("Tabs");w({id:m(),label:C(),disabled:o()}),p(()=>(W(),O(m())),()=>{b(T,W()===m())}),nt(),rt();var l=Wt();let L;var c=S(l),Y=S(c);Q(Y,t,"default",{},i=>{var M=ft();N(()=>ht(M,C())),K(i,M)}),z(c),_t(c,i=>A(i),()=>A()),z(l),N(()=>{L=dt(l,L,{tabindex:"-1",role:"presentation",...q}),x(l,"bx--tabs__nav-item",!0),x(l,"bx--tabs__nav-item--disabled",o()),x(l,"bx--tabs__nav-item--selected",e(T)),H(c,"tabindex",o()?"-1":f()),H(c,"aria-selected",e(T)),H(c,"aria-disabled",o()),H(c,"id",m()),H(c,"href",h()),x(c,"bx--tabs__nav-link",!0),Bt(c,"width",u()?"auto":void 0)}),g("click",l,V(function(i){U.call(this,t,i)})),g("click",l,V(()=>{o()||y(m())})),g("mouseover",l,function(i){U.call(this,t,i)}),g("mouseenter",l,function(i){U.call(this,t,i)}),g("mouseleave",l,function(i){U.call(this,t,i)}),g("keydown",l,({key:i})=>{o()||(i==="ArrowRight"?E(1):i==="ArrowLeft"?E(-1):(i===" "||i==="Enter")&&y(m()))}),K(n,l),it()}var kt=at("<div><!></div>");function Gt(n,t){const d=X(t,["children","$$slots","$$events","$$legacy"]),q=X(d,["id"]);st(t,!1);const r=lt(),W=()=>$(m,"$selectedContent",r),u=()=>$(F,"$contentById",r),T=()=>$(j,"$tabs",r),C=I(),h=I(),o=I();let f=_(t,"id",24,()=>"ccs-"+Math.random().toString(36));const{selectedContent:m,addContent:A,tabs:j,contentById:F}=vt("Tabs");A({id:f()}),p(()=>(W(),O(f())),()=>{b(C,W()===f())}),p(()=>(u(),O(f())),()=>{b(h,u()[f()].index)}),p(()=>(T(),e(h)),()=>{b(o,T()[e(h)].id)}),nt(),rt();var w=kt();let y;var E=S(w);Q(E,t,"default",{},null),z(w),N(()=>{y=dt(w,y,{role:"tabpanel","aria-labelledby":e(o),"aria-hidden":!e(C),hidden:e(C)?void 0:"",id:f(),...q}),x(w,"bx--tab-content",!0)}),K(n,w),it()}export{jt as T,Bt as a,Ft as b,Gt as c,V as p,Dt as s};
