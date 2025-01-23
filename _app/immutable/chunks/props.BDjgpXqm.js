import{am as O,an as ie,ao as se,a3 as y,ap as te,d as P,aq as b,ar as S,g as w,N as C,as as ae,ak as fe,k as ue,O as V,S as U,L as B,T as F,M as D,B as W,at as X,P as le,Q as ce,A as de,z as Y,C as k,au as oe,av as ve,q as K,U as _e,aw as be,a2 as ee,ax as z,ay as pe,az as he,aA as we,aB as re,aC as Pe,aD as G,aE as N,ad as ne,aF as ye,aG as ge,aH as H,aI as Re,j as Ee,aJ as Ie,aK as Oe,a8 as Z,ah as Se,aL as xe}from"./utils.DRlAcBRU.js";function I(e,r=null,t){if(typeof e!="object"||e===null||O in e)return e;const s=fe(e);if(s!==ie&&s!==se)return e;var i=new Map,f=ue(e),v=y(0);f&&i.set("length",y(e.length));var _;return new Proxy(e,{defineProperty(c,n,a){(!("value"in a)||a.configurable===!1||a.enumerable===!1||a.writable===!1)&&te();var u=i.get(n);return u===void 0?(u=y(a.value),i.set(n,u)):P(u,I(a.value,_)),!0},deleteProperty(c,n){var a=i.get(n);if(a===void 0)n in c&&i.set(n,y(b));else{if(f&&typeof n=="string"){var u=i.get("length"),l=Number(n);Number.isInteger(l)&&l<u.v&&P(u,l)}P(a,b),$(v)}return!0},get(c,n,a){var p;if(n===O)return e;var u=i.get(n),l=n in c;if(u===void 0&&(!l||(p=S(c,n))!=null&&p.writable)&&(u=y(I(l?c[n]:b,_)),i.set(n,u)),u!==void 0){var d=w(u);return d===b?void 0:d}return Reflect.get(c,n,a)},getOwnPropertyDescriptor(c,n){var a=Reflect.getOwnPropertyDescriptor(c,n);if(a&&"value"in a){var u=i.get(n);u&&(a.value=w(u))}else if(a===void 0){var l=i.get(n),d=l==null?void 0:l.v;if(l!==void 0&&d!==b)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return a},has(c,n){var d;if(n===O)return!0;var a=i.get(n),u=a!==void 0&&a.v!==b||Reflect.has(c,n);if(a!==void 0||C!==null&&(!u||(d=S(c,n))!=null&&d.writable)){a===void 0&&(a=y(u?I(c[n],_):b),i.set(n,a));var l=w(a);if(l===b)return!1}return u},set(c,n,a,u){var R;var l=i.get(n),d=n in c;if(f&&n==="length")for(var p=a;p<l.v;p+=1){var g=i.get(p+"");g!==void 0?P(g,b):p in c&&(g=y(b),i.set(p+"",g))}l===void 0?(!d||(R=S(c,n))!=null&&R.writable)&&(l=y(void 0),P(l,I(a,_)),i.set(n,l)):(d=l.v!==b,P(l,I(a,_)));var h=Reflect.getOwnPropertyDescriptor(c,n);if(h!=null&&h.set&&h.set.call(u,a),!d){if(f&&typeof n=="string"){var x=i.get("length"),A=Number(n);Number.isInteger(A)&&A>=x.v&&P(x,A+1)}$(v)}return!0},ownKeys(c){w(v);var n=Reflect.ownKeys(c).filter(l=>{var d=i.get(l);return d===void 0||d.v!==b});for(var[a,u]of i)u.v!==b&&!(a in c)&&n.push(a);return n},setPrototypeOf(){ae()}})}function $(e,r=1){P(e,e.v+r)}function Le(e,r,t,s=null,i=!1){D&&W();var f=e,v=null,_=null,c=null,n=i?X:0;V(()=>{if(c===(c=!!r()))return;let a=!1;if(D){const u=f.data===le;c===u&&(f=ce(),de(f),Y(!1),a=!0)}c?(v?U(v):v=B(()=>t(f)),_&&F(_,()=>{_=null})):(_?U(_):s&&(_=B(()=>s(f))),v&&F(v,()=>{v=null})),a&&Y(!0)},n),D&&(f=k)}function qe(e,r,t){D&&W();var s=e,i,f;V(()=>{i!==(i=r())&&(f&&(F(f),f=null),i&&(f=B(()=>t(s,i))))},X),D&&(s=k)}function J(e,r){return e===r||(e==null?void 0:e[O])===r}function Ce(e={},r,t,s){return oe(()=>{var i,f;return ve(()=>{i=f,f=[],K(()=>{e!==t(...f)&&(r(e,...f),i&&J(t(...i),e)&&r(null,...i))})}),()=>{_e(()=>{f&&J(t(...f),e)&&r(null,...f)})}}),e}let m=!1;function Be(e,r,t){const s=t[r]??(t[r]={store:null,source:ee(void 0),unsubscribe:z});if(s.store!==e)if(s.unsubscribe(),s.store=e??null,e==null)s.source.v=void 0,s.unsubscribe=z;else{var i=!0;s.unsubscribe=pe(e,f=>{i?s.source.v=f:P(s.source,f)}),i=!1}return w(s.source)}function Fe(e,r){return e.set(r),r}function Ke(){const e={};return be(()=>{for(var r in e)e[r].unsubscribe()}),e}function Ae(e){var r=m;try{return m=!1,[e(),m]}finally{m=r}}function je(e,r=1){const t=e();return e(t+r),t}const Te={get(e,r){if(!e.exclude.includes(r))return w(e.version),r in e.special?e.special[r]():e.props[r]},set(e,r,t){return r in e.special||(e.special[r]=De({get[r](){return e.props[r]}},r,re)),e.special[r](t),G(e.version),!0},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},deleteProperty(e,r){return e.exclude.includes(r)||(e.exclude.push(r),G(e.version)),!0},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function Me(e,r){return new Proxy({props:e,exclude:r,special:{},version:y(0)},Te)}const Ne={get(e,r){let t=e.props.length;for(;t--;){let s=e.props[t];if(N(s)&&(s=s()),typeof s=="object"&&s!==null&&r in s)return s[r]}},set(e,r,t){let s=e.props.length;for(;s--;){let i=e.props[s];N(i)&&(i=i());const f=S(i,r);if(f&&f.set)return f.set(t),!0}return!1},getOwnPropertyDescriptor(e,r){let t=e.props.length;for(;t--;){let s=e.props[t];if(N(s)&&(s=s()),typeof s=="object"&&s!==null&&r in s){const i=S(s,r);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,r){if(r===O||r===ne)return!1;for(let t of e.props)if(N(t)&&(t=t()),t!=null&&r in t)return!0;return!1},ownKeys(e){const r=[];for(let t of e.props){N(t)&&(t=t());for(const s in t)r.includes(s)||r.push(s)}return r}};function Ue(...e){return new Proxy({props:e},Ne)}function Q(e){for(var r=C,t=C;r!==null&&!(r.f&(ye|ge));)r=r.parent;try{return H(r),e()}finally{H(t)}}function De(e,r,t,s){var M;var i=(t&Re)!==0,f=!Ee||(t&Ie)!==0,v=(t&Oe)!==0,_=(t&xe)!==0,c=!1,n;v?[n,c]=Ae(()=>e[r]):n=e[r];var a=O in e||ne in e,u=((M=S(e,r))==null?void 0:M.set)??(a&&v&&r in e?o=>e[r]=o:void 0),l=s,d=!0,p=!1,g=()=>(p=!0,d&&(d=!1,_?l=K(s):l=s),l);n===void 0&&s!==void 0&&(u&&f&&he(),n=g(),u&&u(n));var h;if(f)h=()=>{var o=e[r];return o===void 0?g():(d=!0,p=!1,o)};else{var x=Q(()=>(i?Z:Se)(()=>e[r]));x.f|=we,h=()=>{var o=w(x);return o!==void 0&&(l=void 0),o===void 0?l:o}}if(!(t&re))return h;if(u){var A=e.$$legacy;return function(o,E){return arguments.length>0?((!f||!E||A||c)&&u(E?h():o),o):h()}}var R=!1,j=!1,L=ee(n),T=Q(()=>Z(()=>{var o=h(),E=w(L);return R?(R=!1,j=!0,E):(j=!1,L.v=o)}));return i||(T.equals=Pe),function(o,E){if(arguments.length>0){const q=E?w(T):f&&v?I(o):o;return T.equals(q)||(R=!0,P(L,q),p&&l!==void 0&&(l=q),K(()=>w(T))),o}return w(T)}}export{Ke as a,Ce as b,qe as c,Be as d,I as e,Fe as f,Le as i,Me as l,De as p,Ue as s,je as u};
