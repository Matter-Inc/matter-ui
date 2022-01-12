import e,{useState as t,useRef as r,useEffect as n}from"react";function o(e,t){return e(t={exports:{}},t.exports),t.exports
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */}var a="function"==typeof Symbol&&Symbol.for,i=a?Symbol.for("react.element"):60103,c=a?Symbol.for("react.portal"):60106,s=a?Symbol.for("react.fragment"):60107,u=a?Symbol.for("react.strict_mode"):60108,f=a?Symbol.for("react.profiler"):60114,l=a?Symbol.for("react.provider"):60109,p=a?Symbol.for("react.context"):60110,d=a?Symbol.for("react.async_mode"):60111,y=a?Symbol.for("react.concurrent_mode"):60111,m=a?Symbol.for("react.forward_ref"):60112,b=a?Symbol.for("react.suspense"):60113,v=a?Symbol.for("react.suspense_list"):60120,g=a?Symbol.for("react.memo"):60115,h=a?Symbol.for("react.lazy"):60116,x=a?Symbol.for("react.block"):60121,S=a?Symbol.for("react.fundamental"):60117,w=a?Symbol.for("react.responder"):60118,O=a?Symbol.for("react.scope"):60119;function E(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case i:switch(e=e.type){case d:case y:case s:case f:case u:case b:return e;default:switch(e=e&&e.$$typeof){case p:case m:case h:case g:case l:return e;default:return t}}case c:return t}}}function $(e){return E(e)===y}var T={AsyncMode:d,ConcurrentMode:y,ContextConsumer:p,ContextProvider:l,Element:i,ForwardRef:m,Fragment:s,Lazy:h,Memo:g,Portal:c,Profiler:f,StrictMode:u,Suspense:b,isAsyncMode:function(e){return $(e)||E(e)===d},isConcurrentMode:$,isContextConsumer:function(e){return E(e)===p},isContextProvider:function(e){return E(e)===l},isElement:function(e){return"object"==typeof e&&null!==e&&e.$$typeof===i},isForwardRef:function(e){return E(e)===m},isFragment:function(e){return E(e)===s},isLazy:function(e){return E(e)===h},isMemo:function(e){return E(e)===g},isPortal:function(e){return E(e)===c},isProfiler:function(e){return E(e)===f},isStrictMode:function(e){return E(e)===u},isSuspense:function(e){return E(e)===b},isValidElementType:function(e){return"string"==typeof e||"function"==typeof e||e===s||e===y||e===f||e===u||e===b||e===v||"object"==typeof e&&null!==e&&(e.$$typeof===h||e.$$typeof===g||e.$$typeof===l||e.$$typeof===p||e.$$typeof===m||e.$$typeof===S||e.$$typeof===w||e.$$typeof===O||e.$$typeof===x)},typeOf:E},C=o((function(e,t){"production"!==process.env.NODE_ENV&&function(){var e="function"==typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,a=e?Symbol.for("react.strict_mode"):60108,i=e?Symbol.for("react.profiler"):60114,c=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,u=e?Symbol.for("react.async_mode"):60111,f=e?Symbol.for("react.concurrent_mode"):60111,l=e?Symbol.for("react.forward_ref"):60112,p=e?Symbol.for("react.suspense"):60113,d=e?Symbol.for("react.suspense_list"):60120,y=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,b=e?Symbol.for("react.block"):60121,v=e?Symbol.for("react.fundamental"):60117,g=e?Symbol.for("react.responder"):60118,h=e?Symbol.for("react.scope"):60119;function x(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:var d=e.type;switch(d){case u:case f:case o:case i:case a:case p:return d;default:var b=d&&d.$$typeof;switch(b){case s:case l:case m:case y:case c:return b;default:return t}}case n:return t}}}var S=u,w=f,O=s,E=c,$=r,T=l,C=o,j=m,P=y,N=n,I=i,k=a,A=p,_=!1;function R(e){return x(e)===f}t.AsyncMode=S,t.ConcurrentMode=w,t.ContextConsumer=O,t.ContextProvider=E,t.Element=$,t.ForwardRef=T,t.Fragment=C,t.Lazy=j,t.Memo=P,t.Portal=N,t.Profiler=I,t.StrictMode=k,t.Suspense=A,t.isAsyncMode=function(e){return _||(_=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),R(e)||x(e)===u},t.isConcurrentMode=R,t.isContextConsumer=function(e){return x(e)===s},t.isContextProvider=function(e){return x(e)===c},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return x(e)===l},t.isFragment=function(e){return x(e)===o},t.isLazy=function(e){return x(e)===m},t.isMemo=function(e){return x(e)===y},t.isPortal=function(e){return x(e)===n},t.isProfiler=function(e){return x(e)===i},t.isStrictMode=function(e){return x(e)===a},t.isSuspense=function(e){return x(e)===p},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===f||e===i||e===a||e===p||e===d||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===y||e.$$typeof===c||e.$$typeof===s||e.$$typeof===l||e.$$typeof===v||e.$$typeof===g||e.$$typeof===h||e.$$typeof===b)},t.typeOf=x}()}));C.AsyncMode,C.ConcurrentMode,C.ContextConsumer,C.ContextProvider,C.Element,C.ForwardRef,C.Fragment,C.Lazy,C.Memo,C.Portal,C.Profiler,C.StrictMode,C.Suspense,C.isAsyncMode,C.isConcurrentMode,C.isContextConsumer,C.isContextProvider,C.isElement,C.isForwardRef,C.isFragment,C.isLazy,C.isMemo,C.isPortal,C.isProfiler,C.isStrictMode,C.isSuspense,C.isValidElementType,C.typeOf;var j=o((function(e){"production"===process.env.NODE_ENV?e.exports=T:e.exports=C})),P=Object.getOwnPropertySymbols,N=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/function k(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var A=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;var n=Object.getOwnPropertyNames(t).map((function(e){return t[e]}));if("0123456789"!==n.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(e){o[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var r,n,o=k(e),a=1;a<arguments.length;a++){for(var i in r=Object(arguments[a]))N.call(r,i)&&(o[i]=r[i]);if(P){n=P(r);for(var c=0;c<n.length;c++)I.call(r,n[c])&&(o[n[c]]=r[n[c]])}}return o},_=Function.call.bind(Object.prototype.hasOwnProperty),R="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",M=_,F=function(){};if("production"!==process.env.NODE_ENV){var z=R,V={},D=M;F=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}}function q(e,t,r,n,o){if("production"!==process.env.NODE_ENV)for(var a in e)if(D(e,a)){var i;try{if("function"!=typeof e[a]){var c=Error((n||"React class")+": "+r+" type `"+a+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[a]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw c.name="Invariant Violation",c}i=e[a](t,a,n,r,null,z)}catch(e){i=e}if(!i||i instanceof Error||F((n||"React class")+": type specification of "+r+" `"+a+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof i+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),i instanceof Error&&!(i.message in V)){V[i.message]=!0;var s=o?o():"";F("Failed "+r+" type: "+i.message+(null!=s?s:""))}}}q.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(V={})};var L=q,W=function(){};function Y(){return null}"production"!==process.env.NODE_ENV&&(W=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}});function B(){}function U(){}U.resetWarningCache=B;var J=function(e,t){var r="function"==typeof Symbol&&Symbol.iterator;var n="<<anonymous>>",o={array:s("array"),bigint:s("bigint"),bool:s("boolean"),func:s("function"),number:s("number"),object:s("object"),string:s("string"),symbol:s("symbol"),any:c(Y),arrayOf:function(e){return c((function(t,r,n,o,a){if("function"!=typeof e)return new i("Property `"+a+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var c=t[r];if(!Array.isArray(c))return new i("Invalid "+o+" `"+a+"` of type `"+l(c)+"` supplied to `"+n+"`, expected an array.");for(var s=0;s<c.length;s++){var u=e(c,s,n,o,a+"["+s+"]",R);if(u instanceof Error)return u}return null}))},element:c((function(t,r,n,o,a){var c=t[r];return e(c)?null:new i("Invalid "+o+" `"+a+"` of type `"+l(c)+"` supplied to `"+n+"`, expected a single ReactElement.")})),elementType:c((function(e,t,r,n,o){var a=e[t];return j.isValidElementType(a)?null:new i("Invalid "+n+" `"+o+"` of type `"+l(a)+"` supplied to `"+r+"`, expected a single ReactElement type.")})),instanceOf:function(e){return c((function(t,r,o,a,c){if(!(t[r]instanceof e)){var s=e.name||n;return new i("Invalid "+a+" `"+c+"` of type `"+(((u=t[r]).constructor&&u.constructor.name?u.constructor.name:n)+"` supplied to `")+o+"`, expected instance of `"+s+"`.")}var u;return null}))},node:c((function(e,t,r,n,o){return f(e[t])?null:new i("Invalid "+n+" `"+o+"` supplied to `"+r+"`, expected a ReactNode.")})),objectOf:function(e){return c((function(t,r,n,o,a){if("function"!=typeof e)return new i("Property `"+a+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var c=t[r],s=l(c);if("object"!==s)return new i("Invalid "+o+" `"+a+"` of type `"+s+"` supplied to `"+n+"`, expected an object.");for(var u in c)if(M(c,u)){var f=e(c,u,n,o,a+"."+u,R);if(f instanceof Error)return f}return null}))},oneOf:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&W(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),Y;function t(t,r,n,o,c){for(var s=t[r],u=0;u<e.length;u++)if(a(s,e[u]))return null;var f=JSON.stringify(e,(function(e,t){return"symbol"===p(t)?String(t):t}));return new i("Invalid "+o+" `"+c+"` of value `"+String(s)+"` supplied to `"+n+"`, expected one of "+f+".")}return c(t)},oneOfType:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&W("Invalid argument supplied to oneOfType, expected an instance of array."),Y;for(var t=0;t<e.length;t++){var r=e[t];if("function"!=typeof r)return W("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+d(r)+" at index "+t+"."),Y}return c((function(t,r,n,o,a){for(var c=[],s=0;s<e.length;s++){var u=(0,e[s])(t,r,n,o,a,R);if(null==u)return null;u.data&&M(u.data,"expectedType")&&c.push(u.data.expectedType)}return new i("Invalid "+o+" `"+a+"` supplied to `"+n+"`"+(c.length>0?", expected one of type ["+c.join(", ")+"]":"")+".")}))},shape:function(e){return c((function(t,r,n,o,a){var c=t[r],s=l(c);if("object"!==s)return new i("Invalid "+o+" `"+a+"` of type `"+s+"` supplied to `"+n+"`, expected `object`.");for(var f in e){var d=e[f];if("function"!=typeof d)return u(n,o,a,f,p(d));var y=d(c,f,n,o,a+"."+f,R);if(y)return y}return null}))},exact:function(e){return c((function(t,r,n,o,a){var c=t[r],s=l(c);if("object"!==s)return new i("Invalid "+o+" `"+a+"` of type `"+s+"` supplied to `"+n+"`, expected `object`.");var f=A({},t[r],e);for(var d in f){var y=e[d];if(M(e,d)&&"function"!=typeof y)return u(n,o,a,d,p(y));if(!y)return new i("Invalid "+o+" `"+a+"` key `"+d+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(t[r],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var m=y(c,d,n,o,a+"."+d,R);if(m)return m}return null}))}};function a(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function i(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function c(e){if("production"!==process.env.NODE_ENV)var r={},o=0;function a(a,c,s,u,f,l,p){if(u=u||n,l=l||s,p!==R){if(t){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}if("production"!==process.env.NODE_ENV&&"undefined"!=typeof console){var y=u+":"+s;!r[y]&&o<3&&(W("You are manually calling a React.PropTypes validation function for the `"+l+"` prop on `"+u+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),r[y]=!0,o++)}}return null==c[s]?a?null===c[s]?new i("The "+f+" `"+l+"` is marked as required in `"+u+"`, but its value is `null`."):new i("The "+f+" `"+l+"` is marked as required in `"+u+"`, but its value is `undefined`."):null:e(c,s,u,f,l)}var c=a.bind(null,!1);return c.isRequired=a.bind(null,!0),c}function s(e){return c((function(t,r,n,o,a,c){var s=t[r];return l(s)!==e?new i("Invalid "+o+" `"+a+"` of type `"+p(s)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null}))}function u(e,t,r,n,o){return new i((e||"React class")+": "+t+" type `"+r+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+o+"`.")}function f(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(f);if(null===t||e(t))return!0;var n=function(e){var t=e&&(r&&e[r]||e["@@iterator"]);if("function"==typeof t)return t}(t);if(!n)return!1;var o,a=n.call(t);if(n!==t.entries){for(;!(o=a.next()).done;)if(!f(o.value))return!1}else for(;!(o=a.next()).done;){var i=o.value;if(i&&!f(i[1]))return!1}return!0;default:return!1}}function l(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function p(e){if(null==e)return""+e;var t=l(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function d(e){var t=p(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return i.prototype=Error.prototype,o.checkPropTypes=L,o.resetWarningCache=L.resetWarningCache,o.PropTypes=o,o},H=function(){function e(e,t,r,n,o,a){if(a!==R){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:U,resetWarningCache:B};return r.PropTypes=r,r},G=o((function(e){if("production"!==process.env.NODE_ENV){var t=j;e.exports=J(t.isElement,!0)}else e.exports=H()}));function K(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===r&&n.firstChild?n.insertBefore(o,n.firstChild):n.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}K(".dateInput::selection{background-color:#f74b73;color:#f5f5f5}.dateInput::-moz-selection{background-color:#f74b73;color:#f5f5f5}");const Q=({size:o="md",className:a=""})=>{const[i,c]=t(),s=r();let u;"xs"===o?u=190:"sm"===o?u=260:"md"===o?u=350:"lg"===o&&(u=520);const f={backgroundColor:"#F2F2F2",textAlign:"center",width:`${u}px`,height:"20px",paddingTop:"12px",paddingBottom:"12px",borderRadius:"40px",fontFamily:"Cabin",fontSize:"15px",color:"#A7A7A7",border:"none",outline:"none"},l=()=>{const e=s.current.value.replace(/\D/g,"").match(/(\d{0,2})(\d{0,2})(\d{0,4})/);s.current.value=e[2]?`${e[1]}.${e[2]}${""+(e[3]?`.${e[3]}`:"")}${""+(e[4]?`.${e[4]}`:"")}`:e[1];const t=s.current.value.replace(/(\D)/g,"");c(t)};return n((()=>{l()}),[i]),e.createElement("input",{type:"text",ref:s,onChange:l,style:f,placeholder:"DD.MM.YYYY",className:`dateInput ${a}`})};Q.propTypes={size:G.oneOf(["xs","sm","md","lg"]),className:G.string};K(".passwordInput::selection{background-color:#f74b73;color:#f5f5f5}.passwordInput::-moz-selection{background-color:#f74b73;color:#f5f5f5}");const X=({size:t="md",className:r="",visible:n=!1,placeholder:o="•••••••••••••••••"})=>{let a;"xs"===t?a=190:"sm"===t?a=260:"md"===t?a=350:"lg"===t&&(a=520);const i={backgroundColor:"#F2F2F2",textAlign:"center",width:`${a}px`,height:"20px",paddingTop:"12px",paddingBottom:"12px",borderRadius:"40px",fontFamily:"Cabin",fontSize:""+(n?"15px":"18px"),overflow:"hidden",color:"#A7A7A7",border:"none",outline:"none"};return e.createElement("input",{type:n?"text":"password",placeholder:o,style:i,className:`passwordInput ${r}`})};X.prototypes={size:G.oneOf(["xs","sm","md","lg"]),className:G.string,visible:G.bool,placeholder:G.string};K(".textInput::selection{background-color:#f74b73;color:#f5f5f5}.textInput::-moz-selection{background-color:#f74b73;color:#f5f5f5}");const Z=({placeholder:t,size:r="md",className:n=""})=>{let o;"xs"===r?o=190:"sm"===r?o=260:"md"===r?o=350:"lg"===r&&(o=520);const a={backgroundColor:"#F2F2F2",textAlign:"center",width:`${o}px`,height:"20px",paddingTop:"12px",paddingBottom:"12px",borderRadius:"40px",fontFamily:"Cabin",fontSize:"15px",color:"#A7A7A7",border:"none",outline:"none"};return e.createElement("input",{type:"text",placeholder:t,style:a,className:`textInput ${n}`})};Z.propTypes={placeholder:G.string.isRequired,size:G.oneOf(["xs","sm","md","lg"]),className:G.string};export{Q as DateInput,X as PasswordInput,Z as TextInput};
