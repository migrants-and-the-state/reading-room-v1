import{R as S,aM as p,aH as h,Y as N,I as g,aw as x,ag as D,i as R,D as y,k as m,aN as V,aO as W,G as l,w as c,q,v as B}from"./BHJvm40H.js";function K(e,t){if(t){const r=document.body;e.autofocus=!0,S(()=>{document.activeElement===r&&e.focus()})}}let L=!1;function C(){L||(L=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const r of e.target.elements)(t=r.__on_r)==null||t.call(r)})},{capture:!0}))}function k(e){var t=N,r=g;p(null),h(null);try{return e()}finally{p(t),h(r)}}function Q(e,t,r,o=r){e.addEventListener(t,()=>k(r));const a=e.__on_r;a?e.__on_r=()=>{a(),o()}:e.__on_r=o,C()}const j=new Set,G=new Set;function U(e,t,r,o){function a(n){if(o.capture||$.call(t,n),!n.cancelBubble)return k(()=>r.call(this,n))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?S(()=>{t.addEventListener(e,a,o)}):t.addEventListener(e,a,o),a}function X(e,t,r,o,a){var n={capture:o,passive:a},i=U(e,t,r,n);(t===document.body||t===window||t===document)&&x(()=>{t.removeEventListener(e,i,n)})}function Z(e){for(var t=0;t<e.length;t++)j.add(e[t]);for(var r of G)r(e)}function $(e){var T;var t=this,r=t.ownerDocument,o=e.type,a=((T=e.composedPath)==null?void 0:T.call(e))||[],n=a[0]||e.target,i=0,f=e.__root;if(f){var s=a.indexOf(f);if(s!==-1&&(t===document||t===window)){e.__root=t;return}var w=a.indexOf(t);if(w===-1)return;s<=w&&(i=s)}if(n=a[i]||e.target,n!==t){D(e,"currentTarget",{configurable:!0,get(){return n||r}});var A=N,I=g;p(null),h(null);try{for(var d,b=[];n!==null;){var E=n.assignedSlot||n.parentNode||n.host||null;try{var _=n["__"+o];if(_!==void 0&&!n.disabled)if(R(_)){var[O,...P]=_;O.apply(n,[e,...P])}else _.call(n,e)}catch(v){d?b.push(v):d=v}if(e.cancelBubble||E===t||E===null)break;n=E}if(d){for(let v of b)queueMicrotask(()=>{throw v});throw d}}finally{e.__root=t,delete e.currentTarget,p(A),h(I)}}}function M(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function u(e,t){var r=g;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function ee(e,t){var r=(t&V)!==0,o=(t&W)!==0,a,n=!e.startsWith("<!>");return()=>{if(l)return u(c,null),c;a===void 0&&(a=M(n?e:"<!>"+e),r||(a=m(a)));var i=o?document.importNode(a,!0):a.cloneNode(!0);if(r){var f=m(i),s=i.lastChild;u(f,s)}else u(i,i);return i}}function te(e,t,r="svg"){var o=!e.startsWith("<!>"),a=`<${r}>${o?e:"<!>"+e}</${r}>`,n;return()=>{if(l)return u(c,null),c;if(!n){var i=M(a),f=m(i);n=m(f)}var s=n.cloneNode(!0);return u(s,s),s}}function re(e=""){if(!l){var t=y(e+"");return u(t,t),t}var r=c;return r.nodeType!==3&&(r.before(r=y()),q(r)),u(r,r),r}function ne(){if(l)return u(c,null),c;var e=document.createDocumentFragment(),t=document.createComment(""),r=y();return e.append(t,r),u(t,r),e}function ae(e,t){if(l){g.nodes_end=c,B();return}e!==null&&e.before(t)}function oe(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const F=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function ie(e){return F.includes(e)}const H={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",srcobject:"srcObject"};function se(e){return e=e.toLowerCase(),H[e]??e}const z=["touchstart","touchmove"];function ue(e){return z.includes(e)}const Y="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Y);export{ae as a,re as b,j as c,u as d,X as e,ne as f,C as g,$ as h,ue as i,oe as j,U as k,Z as l,K as m,te as n,se as o,ie as p,Q as q,G as r,ee as t};
