import{i as y,j as w,k as _,l as g,m as I,R as i,T as P,B as S,r as b,c as R,w as C,a as O,b as D,d as E,n as z,s as j}from"./B0RUVhFE.js";import{S as f}from"./ChX6u5Am.js";var c={},p;function H(){if(p)return c;p=1;var t=y(),e=w();Object.defineProperty(c,"__esModule",{value:!0}),c.default=void 0;var o=e(_()),n=t(g()),r=(0,n.default)(o.createElement("path",{d:"M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7zm-4 6h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"}),"ListSharp");return c.default=r,c}var q=H();const T=I(q);function k(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function x(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function L(t,e,o){return e&&x(t.prototype,e),t}function B(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}function s(t,e){return s=Object.setPrototypeOf||function(n,r){return n.__proto__=r,n},s(t,e)}function M(t){var e=W();return function(){var n=l(t),r;if(e){var a=l(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return V(this,r)}}function V(t,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return h(t)}function h(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function W(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function l(t){return l=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)},l(t)}var v=function(t){B(o,t);var e=M(o);function o(n){var r;return k(this,o),r=e.call(this,n),r.openCollectionDialog=r.openCollectionDialog.bind(h(r)),r}return L(o,[{key:"openCollectionDialog",value:function(){var r=this.props,a=r.collectionPath,u=r.manifestId,d=r.showCollectionDialog,m=r.windowId;d(u,a.slice(0,-1),m)}},{key:"render",value:function(){var r=this.props.t;return i.createElement(f,{container:!0,justify:"center",alignItems:"center"},i.createElement(f,{container:!0,direction:"column",alignItems:"center"},i.createElement(P,{variant:"h4",paragraph:!0},i.createElement("em",null,r("noItemSelected"))),i.createElement(S,{color:"primary",variant:"contained",onClick:this.openCollectionDialog,startIcon:i.createElement(T,null)},r("showCollection"))))}}]),o}(b.Component);v.defaultProps={collectionPath:[],manifestId:null,t:function(){},windowId:null};var N=function(e,o){var n=o.windowId,r=z(e,{windowId:n})||{},a=r.collectionPath,u=r.manifestId;return{collectionPath:a,manifestId:u}},$={showCollectionDialog:j},F=function(e){return{}},G=R(E(),D(F),O(N,$),C("SelectCollection"));const K=G(v);export{K as default};
