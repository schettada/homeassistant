!function(e){"use strict";
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */function t(e,t,a,i){var s,n=arguments.length,r=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,a,i);else for(var o=e.length-1;o>=0;o--)(s=e[o])&&(r=(n<3?s(r):n>3?s(t,a,r):s(t,a))||r);return n>3&&r&&Object.defineProperty(t,a,r),r
/**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */}const a=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol();class s{constructor(e,t){if(t!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return a&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const n=new Map,r=e=>{let t=n.get(e);return void 0===t&&n.set(e,t=new s(e,i)),t},o=(e,...t)=>{const a=1===e.length?e[0]:t.reduce((t,a,i)=>t+(e=>{if(e instanceof s)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+e[i+1],e[0]);return r(a)},d=(e,t)=>{a?e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(t=>{const a=document.createElement("style");a.textContent=t.cssText,e.appendChild(a)})},l=a?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const a of e.cssRules)t+=a.cssText;return(e=>r("string"==typeof e?e:e+""))(t)})(e):e
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */;var c,h,m,u;const p={toAttribute(e,t){switch(t){case Boolean:e=e?"":null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let a=e;switch(t){case Boolean:a=null!==e;break;case Number:a=null===e?null:Number(e);break;case Object:case Array:try{a=JSON.parse(e)}catch(e){a=null}}return a}},g=(e,t)=>t!==e&&(t==t||e==e),v={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:g};class f extends HTMLElement{constructor(){super(),this.??i=new Map,this.??o=void 0,this.??l=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.??h=null,this.u()}static addInitializer(e){var t;null!==(t=this.v)&&void 0!==t||(this.v=[]),this.v.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,a)=>{const i=this.??p(a,t);void 0!==i&&(this.??m.set(i,a),e.push(i))}),e}static createProperty(e,t=v){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const a="symbol"==typeof e?Symbol():"__"+e,i=this.getPropertyDescriptor(e,a,t);void 0!==i&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,t,a){return{get(){return this[t]},set(i){const s=this[e];this[t]=i,this.requestUpdate(e,s,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||v}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this.??m=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const a of t)this.createProperty(a,e[a])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const a=new Set(e.flat(1/0).reverse());for(const e of a)t.unshift(l(e))}else void 0!==e&&t.push(l(e));return t}static"??p"(e,t){const a=t.attribute;return!1===a?void 0:"string"==typeof a?a:"string"==typeof e?e.toLowerCase():void 0}u(){var e;this.??g=new Promise(e=>this.enableUpdating=e),this.L=new Map,this.??_(),this.requestUpdate(),null===(e=this.constructor.v)||void 0===e||e.forEach(e=>e(this))}addController(e){var t,a;(null!==(t=this.??U)&&void 0!==t?t:this.??U=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(a=e.hostConnected)||void 0===a||a.call(e))}removeController(e){var t;null===(t=this.??U)||void 0===t||t.splice(this.??U.indexOf(e)>>>0,1)}"??_"(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this.??i.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return d(t,this.constructor.elementStyles),t}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this.??U)||void 0===e||e.forEach(e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}),this.??l&&(this.??l(),this.??o=this.??l=void 0)}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this.??U)||void 0===e||e.forEach(e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}),this.??o=new Promise(e=>this.??l=e)}attributeChangedCallback(e,t,a){this.K(e,a)}"??j"(e,t,a=v){var i,s;const n=this.constructor.??p(e,a);if(void 0!==n&&!0===a.reflect){const r=(null!==(s=null===(i=a.converter)||void 0===i?void 0:i.toAttribute)&&void 0!==s?s:p.toAttribute)(t,a.type);this.??h=e,null==r?this.removeAttribute(n):this.setAttribute(n,r),this.??h=null}}K(e,t){var a,i,s;const n=this.constructor,r=n.??m.get(e);if(void 0!==r&&this.??h!==r){const e=n.getPropertyOptions(r),o=e.converter,d=null!==(s=null!==(i=null===(a=o)||void 0===a?void 0:a.fromAttribute)&&void 0!==i?i:"function"==typeof o?o:null)&&void 0!==s?s:p.fromAttribute;this.??h=r,this[r]=d(t,e.type),this.??h=null}}requestUpdate(e,t,a){let i=!0;void 0!==e&&(((a=a||this.constructor.getPropertyOptions(e)).hasChanged||g)(this[e],t)?(this.L.has(e)||this.L.set(e,t),!0===a.reflect&&this.??h!==e&&(void 0===this.??k&&(this.??k=new Map),this.??k.set(e,a))):i=!1),!this.isUpdatePending&&i&&(this.??g=this.??q())}async"??q"(){this.isUpdatePending=!0;try{for(await this.??g;this.??o;)await this.??o}catch(e){Promise.reject(e)}const e=this.performUpdate();return null!=e&&await e,!this.isUpdatePending}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this.??i&&(this.??i.forEach((e,t)=>this[t]=e),this.??i=void 0);let t=!1;const a=this.L;try{t=this.shouldUpdate(a),t?(this.willUpdate(a),null===(e=this.??U)||void 0===e||e.forEach(e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)}),this.update(a)):this.??$()}catch(e){throw t=!1,this.??$(),e}t&&this.E(a)}willUpdate(e){}E(e){var t;null===(t=this.??U)||void 0===t||t.forEach(e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}"??$"(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.??g}shouldUpdate(e){return!0}update(e){void 0!==this.??k&&(this.??k.forEach((e,t)=>this.??j(t,this[t],e)),this.??k=void 0),this.??$()}updated(e){}firstUpdated(e){}}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var _,b,y,w;f.finalized=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},null===(h=(c=globalThis).reactiveElementPlatformSupport)||void 0===h||h.call(c,{ReactiveElement:f}),(null!==(m=(u=globalThis).reactiveElementVersions)&&void 0!==m?m:u.reactiveElementVersions=[]).push("1.0.0-rc.2");const k=globalThis.trustedTypes,A=k?k.createPolicy("lit-html",{createHTML:e=>e}):void 0,$=`lit$${(Math.random()+"").slice(9)}$`,j="?"+$,x=`<${j}>`,O=document,T=(e="")=>O.createComment(e),E=e=>null===e||"object"!=typeof e&&"function"!=typeof e,z=Array.isArray,S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,C=/-->/g,M=/>/g,N=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,D=/'/g,P=/"/g,L=/^(?:script|style|textarea)$/i,q=(e=>(t,...a)=>({_$litType$:e,strings:t,values:a}))(1),R=Symbol.for("lit-noChange"),U=Symbol.for("lit-nothing"),I=new WeakMap,V=(e,t,a)=>{var i,s;const n=null!==(i=null==a?void 0:a.renderBefore)&&void 0!==i?i:t;let r=n._$litPart$;if(void 0===r){const e=null!==(s=null==a?void 0:a.renderBefore)&&void 0!==s?s:null;n._$litPart$=r=new B(t.insertBefore(T(),e),e,void 0,a)}return r.I(e),r},G=O.createTreeWalker(O,129,null,!1);class F{constructor({strings:e,_$litType$:t},a){let i;this.parts=[];let s=0,n=0;const r=e.length-1,o=this.parts,[d,l]=((e,t)=>{const a=e.length-1,i=[];let s,n=2===t?"<svg>":"",r=S;for(let t=0;t<a;t++){const a=e[t];let o,d,l=-1,c=0;for(;c<a.length&&(r.lastIndex=c,d=r.exec(a),null!==d);)c=r.lastIndex,r===S?"!--"===d[1]?r=C:void 0!==d[1]?r=M:void 0!==d[2]?(L.test(d[2])&&(s=RegExp("</"+d[2],"g")),r=N):void 0!==d[3]&&(r=N):r===N?">"===d[0]?(r=null!=s?s:S,l=-1):void 0===d[1]?l=-2:(l=r.lastIndex-d[2].length,o=d[1],r=void 0===d[3]?N:'"'===d[3]?P:D):r===P||r===D?r=N:r===C||r===M?r=S:(r=N,s=void 0);const h=r===N&&e[t+1].startsWith("/>")?" ":"";n+=r===S?a+x:l>=0?(i.push(o),a.slice(0,l)+"$lit$"+a.slice(l)+$+h):a+$+(-2===l?(i.push(void 0),t):h)}const o=n+(e[a]||"<?>")+(2===t?"</svg>":"");return[void 0!==A?A.createHTML(o):o,i]})(e,t);if(this.el=F.createElement(d,a),G.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(i=G.nextNode())&&o.length<r;){if(1===i.nodeType){if(i.hasAttributes()){const e=[];for(const t of i.getAttributeNames())if(t.endsWith("$lit$")||t.startsWith($)){const a=l[n++];if(e.push(t),void 0!==a){const e=i.getAttribute(a.toLowerCase()+"$lit$").split($),t=/([.?@])?(.*)/.exec(a);o.push({type:1,index:s,name:t[2],strings:e,ctor:"."===t[1]?Z:"?"===t[1]?Q:"@"===t[1]?W:K})}else o.push({type:6,index:s})}for(const t of e)i.removeAttribute(t)}if(L.test(i.tagName)){const e=i.textContent.split($),t=e.length-1;if(t>0){i.textContent=k?k.emptyScript:"";for(let a=0;a<t;a++)i.append(e[a],T()),G.nextNode(),o.push({type:2,index:++s});i.append(e[t],T())}}}else if(8===i.nodeType)if(i.data===j)o.push({type:2,index:s});else{let e=-1;for(;-1!==(e=i.data.indexOf($,e+1));)o.push({type:7,index:s}),e+=$.length-1}s++}}static createElement(e,t){const a=O.createElement("template");return a.innerHTML=e,a}}function H(e,t,a=e,i){var s,n,r,o;if(t===R)return t;let d=void 0!==i?null===(s=a.??i)||void 0===s?void 0:s[i]:a.??o;const l=E(t)?void 0:t._$litDirective$;return(null==d?void 0:d.constructor)!==l&&(null===(n=null==d?void 0:d.O)||void 0===n||n.call(d,!1),void 0===l?d=void 0:(d=new l(e),d.T(e,a,i)),void 0!==i?(null!==(r=(o=a).??i)&&void 0!==r?r:o.??i=[])[i]=d:a.??o=d),void 0!==d&&(t=H(e,d.S(e,t.values),d,i)),t}class Y{constructor(e,t){this.l=[],this.N=void 0,this.D=e,this.M=t}u(e){var t;const{el:{content:a},parts:i}=this.D,s=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:O).importNode(a,!0);G.currentNode=s;let n=G.nextNode(),r=0,o=0,d=i[0];for(;void 0!==d;){if(r===d.index){let t;2===d.type?t=new B(n,n.nextSibling,this,e):1===d.type?t=new d.ctor(n,d.name,d.strings,this,e):6===d.type&&(t=new X(n,this,e)),this.l.push(t),d=i[++o]}r!==(null==d?void 0:d.index)&&(n=G.nextNode(),r++)}return s}v(e){let t=0;for(const a of this.l)void 0!==a&&(void 0!==a.strings?(a.I(e,a,t),t+=a.strings.length-2):a.I(e[t])),t++}}class B{constructor(e,t,a,i){this.type=2,this.N=void 0,this.A=e,this.B=t,this.M=a,this.options=i}setConnected(e){var t;null===(t=this.P)||void 0===t||t.call(this,e)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(e,t=this){e=H(this,e,t),E(e)?e===U||null==e||""===e?(this.H!==U&&this.R(),this.H=U):e!==this.H&&e!==R&&this.m(e):void 0!==e._$litType$?this._(e):void 0!==e.nodeType?this.$(e):(e=>{var t;return z(e)||"function"==typeof(null===(t=e)||void 0===t?void 0:t[Symbol.iterator])})(e)?this.g(e):this.m(e)}k(e,t=this.B){return this.A.parentNode.insertBefore(e,t)}$(e){this.H!==e&&(this.R(),this.H=this.k(e))}m(e){const t=this.A.nextSibling;null!==t&&3===t.nodeType&&(null===this.B?null===t.nextSibling:t===this.B.previousSibling)?t.data=e:this.$(O.createTextNode(e)),this.H=e}_(e){var t;const{values:a,_$litType$:i}=e,s="number"==typeof i?this.C(e):(void 0===i.el&&(i.el=F.createElement(i.h,this.options)),i);if((null===(t=this.H)||void 0===t?void 0:t.D)===s)this.H.v(a);else{const e=new Y(s,this),t=e.u(this.options);e.v(a),this.$(t),this.H=e}}C(e){let t=I.get(e.strings);return void 0===t&&I.set(e.strings,t=new F(e)),t}g(e){z(this.H)||(this.H=[],this.R());const t=this.H;let a,i=0;for(const s of e)i===t.length?t.push(a=new B(this.k(T()),this.k(T()),this,this.options)):a=t[i],a.I(s),i++;i<t.length&&(this.R(a&&a.B.nextSibling,i),t.length=i)}R(e=this.A.nextSibling,t){var a;for(null===(a=this.P)||void 0===a||a.call(this,!1,!0,t);e&&e!==this.B;){const t=e.nextSibling;e.remove(),e=t}}}class K{constructor(e,t,a,i,s){this.type=1,this.H=U,this.N=void 0,this.V=void 0,this.element=e,this.name=t,this.M=i,this.options=s,a.length>2||""!==a[0]||""!==a[1]?(this.H=Array(a.length-1).fill(U),this.strings=a):this.H=U}get tagName(){return this.element.tagName}I(e,t=this,a,i){const s=this.strings;let n=!1;if(void 0===s)e=H(this,e,t,0),n=!E(e)||e!==this.H&&e!==R,n&&(this.H=e);else{const i=e;let r,o;for(e=s[0],r=0;r<s.length-1;r++)o=H(this,i[a+r],t,r),o===R&&(o=this.H[r]),n||(n=!E(o)||o!==this.H[r]),o===U?e=U:e!==U&&(e+=(null!=o?o:"")+s[r+1]),this.H[r]=o}n&&!i&&this.W(e)}W(e){e===U?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class Z extends K{constructor(){super(...arguments),this.type=3}W(e){this.element[this.name]=e===U?void 0:e}}class Q extends K{constructor(){super(...arguments),this.type=4}W(e){e&&e!==U?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class W extends K{constructor(){super(...arguments),this.type=5}I(e,t=this){var a;if((e=null!==(a=H(this,e,t,0))&&void 0!==a?a:U)===R)return;const i=this.H,s=e===U&&i!==U||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==U&&(i===U||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this.H=e}handleEvent(e){var t,a;"function"==typeof this.H?this.H.call(null!==(a=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==a?a:this.element,e):this.H.handleEvent(e)}}class X{constructor(e,t,a){this.element=e,this.type=6,this.N=void 0,this.V=void 0,this.M=t,this.options=a}I(e){H(this,e)}}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var J,ee,te,ae,ie,se;null===(b=(_=globalThis).litHtmlPlatformSupport)||void 0===b||b.call(_,F,B),(null!==(y=(w=globalThis).litHtmlVersions)&&void 0!==y?y:w.litHtmlVersions=[]).push("2.0.0-rc.3"),(null!==(J=(se=globalThis).litElementVersions)&&void 0!==J?J:se.litElementVersions=[]).push("3.0.0-rc.2");class ne extends f{constructor(){super(...arguments),this.renderOptions={host:this},this.??t=void 0}createRenderRoot(){var e,t;const a=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=a.firstChild),a}update(e){const t=this.render();super.update(e),this.??t=V(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this.??t)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this.??t)||void 0===e||e.setConnected(!1)}render(){return R}}ne.finalized=!0,ne._$litElement$=!0,null===(te=(ee=globalThis).litElementHydrateSupport)||void 0===te||te.call(ee,{LitElement:ne}),null===(ie=(ae=globalThis).litElementPlatformSupport)||void 0===ie||ie.call(ae,{LitElement:ne});
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const re=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:a,elements:i}=t;return{kind:a,elements:i,finisher(t){window.customElements.define(e,t)}}})(e,t)
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */,oe=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(a){a.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(a){a.createProperty(t.key,e)}};function de(e){return(t,a)=>void 0!==a?((e,t,a)=>{t.constructor.createProperty(a,e)})(e,t,a):oe(e,t)
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */}function le(e){return de({...e,state:!0,attribute:!1})}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
function ce(e,t){return(({finisher:e,descriptor:t})=>(a,i)=>{var s;if(void 0===i){const i=null!==(s=a.originalKey)&&void 0!==s?s:a.key,n=null!=t?{kind:"method",placement:"prototype",key:i,descriptor:t(a.key)}:{...a,key:i};return null!=e&&(n.finisher=function(t){e(t,i)}),n}{const s=a.constructor;void 0!==t&&Object.defineProperty(a,i,t(i)),null==e||e(s,i)}})({descriptor:a=>{const i={get(){var t;return null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e)},enumerable:!0,configurable:!0};if(t){const t="symbol"==typeof a?Symbol():"__"+a;i.get=function(){var a;return void 0===this[t]&&(this[t]=null===(a=this.renderRoot)||void 0===a?void 0:a.querySelector(e)),this[t]}}return i}})}var he=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,me="[^\\s]+",ue=/\[([^]*?)\]/gm;function pe(e,t){for(var a=[],i=0,s=e.length;i<s;i++)a.push(e[i].substr(0,t));return a}var ge=function(e){return function(t,a){var i=a[e].map((function(e){return e.toLowerCase()})).indexOf(t.toLowerCase());return i>-1?i:null}};function ve(e){for(var t=[],a=1;a<arguments.length;a++)t[a-1]=arguments[a];for(var i=0,s=t;i<s.length;i++){var n=s[i];for(var r in n)e[r]=n[r]}return e}var fe=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],_e=["January","February","March","April","May","June","July","August","September","October","November","December"],be=pe(_e,3),ye={dayNamesShort:pe(fe,3),dayNames:fe,monthNamesShort:be,monthNames:_e,amPm:["am","pm"],DoFn:function(e){return e+["th","st","nd","rd"][e%10>3?0:(e-e%10!=10?1:0)*e%10]}},we=ve({},ye),ke=function(e,t){for(void 0===t&&(t=2),e=String(e);e.length<t;)e="0"+e;return e},Ae={D:function(e){return String(e.getDate())},DD:function(e){return ke(e.getDate())},Do:function(e,t){return t.DoFn(e.getDate())},d:function(e){return String(e.getDay())},dd:function(e){return ke(e.getDay())},ddd:function(e,t){return t.dayNamesShort[e.getDay()]},dddd:function(e,t){return t.dayNames[e.getDay()]},M:function(e){return String(e.getMonth()+1)},MM:function(e){return ke(e.getMonth()+1)},MMM:function(e,t){return t.monthNamesShort[e.getMonth()]},MMMM:function(e,t){return t.monthNames[e.getMonth()]},YY:function(e){return ke(String(e.getFullYear()),4).substr(2)},YYYY:function(e){return ke(e.getFullYear(),4)},h:function(e){return String(e.getHours()%12||12)},hh:function(e){return ke(e.getHours()%12||12)},H:function(e){return String(e.getHours())},HH:function(e){return ke(e.getHours())},m:function(e){return String(e.getMinutes())},mm:function(e){return ke(e.getMinutes())},s:function(e){return String(e.getSeconds())},ss:function(e){return ke(e.getSeconds())},S:function(e){return String(Math.round(e.getMilliseconds()/100))},SS:function(e){return ke(Math.round(e.getMilliseconds()/10),2)},SSS:function(e){return ke(e.getMilliseconds(),3)},a:function(e,t){return e.getHours()<12?t.amPm[0]:t.amPm[1]},A:function(e,t){return e.getHours()<12?t.amPm[0].toUpperCase():t.amPm[1].toUpperCase()},ZZ:function(e){var t=e.getTimezoneOffset();return(t>0?"-":"+")+ke(100*Math.floor(Math.abs(t)/60)+Math.abs(t)%60,4)},Z:function(e){var t=e.getTimezoneOffset();return(t>0?"-":"+")+ke(Math.floor(Math.abs(t)/60),2)+":"+ke(Math.abs(t)%60,2)}},$e=function(e){return+e-1},je=[null,"[1-9]\\d?"],xe=[null,me],Oe=["isPm",me,function(e,t){var a=e.toLowerCase();return a===t.amPm[0]?0:a===t.amPm[1]?1:null}],Te=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(e){var t=(e+"").match(/([+-]|\d\d)/gi);if(t){var a=60*+t[1]+parseInt(t[2],10);return"+"===t[0]?a:-a}return 0}],Ee=(ge("monthNamesShort"),ge("monthNames"),{default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",isoDate:"YYYY-MM-DD",isoDateTime:"YYYY-MM-DDTHH:mm:ssZ",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"});var ze=function(e,t,a){if(void 0===t&&(t=Ee.default),void 0===a&&(a={}),"number"==typeof e&&(e=new Date(e)),"[object Date]"!==Object.prototype.toString.call(e)||isNaN(e.getTime()))throw new Error("Invalid Date pass to format");var i=[];t=(t=Ee[t]||t).replace(ue,(function(e,t){return i.push(t),"@@@"}));var s=ve(ve({},we),a);return(t=t.replace(he,(function(t){return Ae[t](e,s)}))).replace(/@@@/g,(function(){return i.shift()}))};(function(){try{(new Date).toLocaleDateString("i")}catch(e){return"RangeError"===e.name}})(),function(){try{(new Date).toLocaleString("i")}catch(e){return"RangeError"===e.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(e){return"RangeError"===e.name}}();function Se(e){return e.substr(0,e.indexOf("."))}function Ce(e){return e.substr(e.indexOf(".")+1)}var Me="hass:bookmark",Ne=function(e,t,a,i){i=i||{},a=null==a?{}:a;var s=new Event(t,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});return s.detail=a,e.dispatchEvent(s),s},De={alert:"hass:alert",automation:"hass:playlist-play",calendar:"hass:calendar",camera:"hass:video",climate:"hass:thermostat",configurator:"hass:settings",conversation:"hass:text-to-speech",device_tracker:"hass:account",fan:"hass:fan",group:"hass:google-circles-communities",history_graph:"hass:chart-line",homeassistant:"hass:home-assistant",homekit:"hass:home-automation",image_processing:"hass:image-filter-frames",input_boolean:"hass:drawing",input_datetime:"hass:calendar-clock",input_number:"hass:ray-vertex",input_select:"hass:format-list-bulleted",input_text:"hass:textbox",light:"hass:lightbulb",mailbox:"hass:mailbox",notify:"hass:comment-alert",person:"hass:account",plant:"hass:flower",proximity:"hass:apple-safari",remote:"hass:remote",scene:"hass:google-pages",script:"hass:file-document",sensor:"hass:eye",simple_alarm:"hass:bell",sun:"hass:white-balance-sunny",switch:"hass:flash",timer:"hass:timer",updater:"hass:cloud-upload",vacuum:"hass:robot-vacuum",water_heater:"hass:thermometer",weblink:"hass:open-in-new"};function Pe(e,t){if(e in De)return De[e];switch(e){case"alarm_control_panel":switch(t){case"armed_home":return"hass:bell-plus";case"armed_night":return"hass:bell-sleep";case"disarmed":return"hass:bell-outline";case"triggered":return"hass:bell-ring";default:return"hass:bell"}case"binary_sensor":return t&&"off"===t?"hass:radiobox-blank":"hass:checkbox-marked-circle";case"cover":return"closed"===t?"hass:window-closed":"hass:window-open";case"lock":return t&&"unlocked"===t?"hass:lock-open":"hass:lock";case"media_player":return t&&"off"!==t&&"idle"!==t?"hass:cast-connected":"hass:cast";case"zwave":switch(t){case"dead":return"hass:emoticon-dead";case"sleeping":return"hass:sleep";case"initializing":return"hass:timer-sand";default:return"hass:z-wave"}default:return console.warn("Unable to find icon for domain "+e+" ("+t+")"),Me}}var Le=function(e,t,a){void 0===a&&(a=!1),a?history.replaceState(null,"",t):history.pushState(null,"",t),Ne(window,"location-changed",{replace:a})},qe={humidity:"hass:water-percent",illuminance:"hass:brightness-5",temperature:"hass:thermometer",pressure:"hass:gauge",power:"hass:flash",signal_strength:"hass:wifi"},Re={binary_sensor:function(e){var t=e.state&&"off"===e.state;switch(e.attributes.device_class){case"battery":return t?"hass:battery":"hass:battery-outline";case"cold":return t?"hass:thermometer":"hass:snowflake";case"connectivity":return t?"hass:server-network-off":"hass:server-network";case"door":return t?"hass:door-closed":"hass:door-open";case"garage_door":return t?"hass:garage":"hass:garage-open";case"gas":case"power":case"problem":case"safety":case"smoke":return t?"hass:shield-check":"hass:alert";case"heat":return t?"hass:thermometer":"hass:fire";case"light":return t?"hass:brightness-5":"hass:brightness-7";case"lock":return t?"hass:lock":"hass:lock-open";case"moisture":return t?"hass:water-off":"hass:water";case"motion":return t?"hass:walk":"hass:run";case"occupancy":return t?"hass:home-outline":"hass:home";case"opening":return t?"hass:square":"hass:square-outline";case"plug":return t?"hass:power-plug-off":"hass:power-plug";case"presence":return t?"hass:home-outline":"hass:home";case"sound":return t?"hass:music-note-off":"hass:music-note";case"vibration":return t?"hass:crop-portrait":"hass:vibrate";case"window":return t?"hass:window-closed":"hass:window-open";default:return t?"hass:radiobox-blank":"hass:checkbox-marked-circle"}},cover:function(e){var t="closed"!==e.state;switch(e.attributes.device_class){case"garage":return t?"hass:garage-open":"hass:garage";case"door":return t?"hass:door-open":"hass:door-closed";case"shutter":return t?"hass:window-shutter-open":"hass:window-shutter";case"blind":return t?"hass:blinds-open":"hass:blinds";case"window":return t?"hass:window-open":"hass:window-closed";default:return Pe("cover",e.state)}},sensor:function(e){var t=e.attributes.device_class;if(t&&t in qe)return qe[t];if("battery"===t){var a=Number(e.state);if(isNaN(a))return"hass:battery-unknown";var i=10*Math.round(a/10);return i>=100?"hass:battery":i<=0?"hass:battery-alert":"hass:battery-"+i}var s=e.attributes.unit_of_measurement;return"??C"===s||"??F"===s?"hass:thermometer":Pe("sensor")},input_datetime:function(e){return e.attributes.has_date?e.attributes.has_time?Pe("input_datetime"):"hass:calendar":"hass:clock"}};const Ue=async()=>{if(customElements.get("ha-checkbox")&&customElements.get("ha-slider"))return;await customElements.whenDefined("partial-panel-resolver");const e=document.createElement("partial-panel-resolver");e.hass={panels:[{url_path:"tmp",component_name:"config"}]},e._updateRoutes(),await e.routerOptions.routes.tmp.load(),await customElements.whenDefined("ha-panel-config");const t=document.createElement("ha-panel-config");await t.routerOptions.routes.automation.load(),e.hass={panels:[{url_path:"tmp",component_name:"developer-tools"}]},e._updateRoutes(),await e.routerOptions.routes.tmp.load(),await customElements.whenDefined("ha-app-layout")},Ie=async()=>{var e,t,a,i,s,n,r,o;if(customElements.get("ha-yaml-editor"))return;const d=document.createElement("partial-panel-resolver").getRoutes([{component_name:"developer-tools",url_path:"a"}]);await(null===(a=null===(t=null===(e=null==d?void 0:d.routes)||void 0===e?void 0:e.a)||void 0===t?void 0:t.load)||void 0===a?void 0:a.call(t));const l=document.createElement("developer-tools-router");await(null===(o=null===(r=null===(n=null===(s=null===(i=l)||void 0===i?void 0:i.routerOptions)||void 0===s?void 0:s.routes)||void 0===n?void 0:n.service)||void 0===r?void 0:r.load)||void 0===o?void 0:o.call(r))},Ve=e=>e.callWS({type:"alarmo/config"}),Ge=e=>e.callWS({type:"alarmo/sensors"}),Fe=e=>e.callWS({type:"alarmo/users"}),He=e=>e.callWS({type:"alarmo/automations"}),Ye=e=>e.callWS({type:"alarmo/sensor_groups"}),Be=(e,t)=>e.callApi("POST","alarmo/config",t),Ke=(e,t)=>e.callApi("POST","alarmo/sensors",t),Ze=(e,t)=>e.callApi("POST","alarmo/users",t),Qe=(e,t)=>e.callApi("POST","alarmo/automations",t),We=(e,t)=>e.callApi("POST","alarmo/automations",{automation_id:t,remove:!0}),Xe=e=>e.callWS({type:"alarmo/areas"}),Je=(e,t)=>e.callApi("POST","alarmo/area",t),et=e=>{class a extends e{connectedCallback(){super.connectedCallback(),this.__checkSubscribed()}disconnectedCallback(){if(super.disconnectedCallback(),this.__unsubs){for(;this.__unsubs.length;){const e=this.__unsubs.pop();e instanceof Promise?e.then(e=>e()):e()}this.__unsubs=void 0}}updated(e){super.updated(e),e.has("hass")&&this.__checkSubscribed()}hassSubscribe(){return[]}__checkSubscribed(){void 0===this.__unsubs&&this.isConnected&&void 0!==this.hass&&(this.__unsubs=this.hassSubscribe())}}return t([de({attribute:!1})],a.prototype,"hass",void 0),a};var tt={modes_short:{armed_away:"Fora",armed_home:"Casa",armed_night:"Nit",armed_custom_bypass:"Personalitzat",armed_vacation:"Vacation"},enabled:"Activat",disabled:"Desactivat"},at={time_slider:{seconds:"seg",minutes:"min",infinite:"infinit",none:"cap"},editor:{ui_mode:"Canvia a UI",yaml_mode:"Canvia a YAML",edit_in_yaml:"Edit in YAML"},table:{filter:{label:"Filter items",item:"Filter by {name}",hidden_items:"{number} {number, plural,\n  one {item is}\n  other {items are}\n} hidden"}}},it={general:{title:"General",cards:{general:{description:"Aquest tauler defineix alguns par??metres globals de l'alarma.",fields:{disarm_after_trigger:{heading:"Desactivar despr??s del disparador",description:"Quan hagi transcorregut el temps d???activaci??, desactiveu l???alarma en lloc de tornar a l???estat armat."},enable_mqtt:{heading:"Activa MQTT",description:"Permet controlar el tauler d'alarma mitjan??ant MQTT."},enable_master:{heading:"Activa l'alarma mestra",description:"Crea una entitat per controlar totes les ??rees simult??niament."}},actions:{setup_mqtt:"Configuraci?? MQTT",setup_master:"Configuraci?? mestra"}},modes:{title:"Modes",description:"Aquest tauler es pot utilitzar per configurar els modes d'activaci?? de l'alarma.",modes:{armed_away:"El mode fora de casa s'utilitzar?? quan totes les persones surtin de casa. Es controlen totes les portes i finestres que permeten l'acc??s a la casa, aix?? com els sensors de moviment dins de la casa.",armed_home:"El mode a casa (tamb?? conegut com mode casa) s'utilitzar?? quan configureu l'alarma mentre hi hagi persones a la casa. Es controlen totes les portes i finestres que permetin l'acc??s a la casa, per?? no els sensors de moviment a l'interior de la casa.",armed_night:"El mode nit s'utilitzar?? quan configureu l'alarma abans d'anar a dormir. Es controlaran totes les portes i finestres que permetin l'acc??s a la casa i es seleccionaran els sensors de moviment (per exemple, a la planta baixa) de la casa.",armed_vacation:"Armed vacation can be used as an extension to the armed away mode in case of absence for longer duration. The delay times and trigger responses can be adapted (as desired) to being distant from home.",armed_custom_bypass:"Un mode addicional per definir el vostre propi per??metre de seguretat."},number_sensors_active:"{number} {number, plural,\n  one {sensor}\n  other {sensors}\n} activa",fields:{status:{heading:"Status",description:"Controls whether the alarm can be armed in this mode."},exit_delay:{heading:"Retard de sortida",description:"Quan activeu l'alarma, en aquest per??ode de temps els sensors encara no activaran l'alarma."},entry_delay:{heading:"Retard d'entrada",description:"Temps de retard fins que s'activi l'alarma despr??s que s'activi un dels sensors."},trigger_time:{heading:"Temps d'activaci??",description:"Temps durant el qual sonar?? la sirena"}}},mqtt:{title:"Configuraci?? MQTT",description:"Aquest tauler es pot utilitzar per configurar la interf??cie MQTT.",fields:{state_topic:{heading:"Tema d'estat",description:"Tema sobre el qual es publiquen les actualitzacions d'estat"},event_topic:{heading:"Tema d'esdeveniment",description:"Tema sobre el qual es publiquen els esdeveniments d'alarma"},command_topic:{heading:"Tama d'ordre",description:"Tema sobre el qual s'envien les ordres d'activaci??/desactivaci??."},require_code:{heading:"Requereix codi",description:"Requereix l'enviament d'un codi amb l'ordre."},state_payload:{heading:"Configura la c??rrega ??til per estat",item:"Definiu una c??rrega ??til per a l'estat ''{state}''"},command_payload:{heading:"Configura la c??rrega ??til per ordre",item:"Definiu una c??rrega ??til per a l'ordre ''{command}''"}}},areas:{title:"??rees",description:"Les ??rees es poden utilitzar per dividir el sistema d'alarma en diversos compartiments.",no_items:"Encara no hi ha ??rees definides.",table:{remarks:"Observacions",summary:"Aquesta ??rea cont?? {summary_sensors} i {summary_automations}.",summary_sensors:"{number} {number, plural,\n  one {sensor}\n  other {sensors}\n}",summary_automations:"{number} {number, plural,\n  one {automatisme}\n  other {automatismes}\n}"},actions:{add:"Afegeix"}}},dialogs:{create_area:{title:"??rea nova",fields:{copy_from:"Copia la configuraci?? de"}},edit_area:{title:"Edita l'??rea ''{area}''",name_warning:"Nota: si canvieu el nom, es canviar?? l'identificador d'entitat"},remove_area:{title:"Voleu eliminar l'??rea?",description:"Confirmeu que voleu eliminar aquesta ??rea? Aquesta ??rea cont?? {sensors} sensors i {automatismes} automatismes, que tamb?? s'eliminaran."},edit_master:{title:"Configuraci?? mestra"},disable_master:{title:"Voleu desactivar l'alarma mestra?",description:"Confirmeu que voleu eliminar l'alarma mestra? Aquesta ??rea cont?? automatismes {automatismes}, que s'eliminaran amb aquesta acci??."}}},sensors:{title:"Sensors",cards:{sensors:{description:"Sensors configurats actualment. Feu clic a una entitat per fer canvis.",table:{no_items:"No hi ha cap sensor per mostrar",arm_modes:"Modes d'armat",always_on:"(Sempre)",no_area_warning:"Sensor is not assigned to any area."}},add_sensors:{title:"Afegeix sensors",description:"Afegiu m??s sensors. Assegureu-vos que els vostres sensors tinguin un friendly_name perqu?? pugueu identificar-los.",no_items:"No hi ha entitats HA disponibles que es puguin configurar per a l'alarma. Assegureu-vos d'incloure entitats del tipus binary_sensor.",table:{type:"Detected type"},actions:{add_to_alarm:"afegeix a l'alarma",show_all:"Mostra-ho tot"}},editor:{title:"Edita el sensor",description:"Edita la configuraci?? del sensor de ''{entity}''.",fields:{area:{heading:"??rea",description:"Seleccioneu una ??rea que contingui aquest sensor."},group:{heading:"Group",description:"Group with other sensors for combined triggering."},device_type:{heading:"Tipus de dispositiu",description:"Trieu un tipus de dispositiu per aplicar autom??ticament la configuraci?? adequada.",choose:{door:{name:"Porta",description:"Porta, porta de garatge o altra entrada que s'utilitzi per entrar/sortir de casa."},window:{name:"Finestra",description:"Finestra o una porta que no s'utilitza per entrar a la casa, com ara un balc??."},motion:{name:"Moviment",description:"Sensor de pres??ncia o dispositiu similar que t?? un retard entre les activacions."},tamper:{name:"Antisabotatge",description:"Detector de retirada de la coberta del sensor, sensor de trencament de vidre, etc."},environmental:{name:"Ambiental",description:"Sensor de fum o gas, detector de fuites, etc. (no relacionat amb la protecci?? antirobatori)."},other:{name:"Gen??ric"}}},always_on:{heading:"Sempre activat",description:"El sensor sempre ha de disparar l'alarma."},modes:{heading:"Modes habilitats",description:"Modes d'alarma en qu?? aquest sensor est?? actiu."},arm_on_close:{heading:"Arma despr??s de tancar",description:"Despr??s de la desactivaci?? d'aquest sensor, s'omet autom??ticament el temps de retard de sortida restant."},use_exit_delay:{heading:"Use exit delay",description:"Sensor is allowed to be active when the exit delay starts."},use_entry_delay:{heading:"Use entry delay",description:"Sensor activation triggers the alarm after the entry delay rather than directly."},allow_open:{heading:"Permet obrir mentre s'arma l'alarma",description:"Permeteu que aquest sensor estigui actiu poc despr??s de configurar-lo de manera que no bloquegi l'activaci?? de l'alarma."},auto_bypass:{heading:"Omet autom??ticament",description:"Excloeu aquest sensor de l'alarma si est?? obert mentre s'arma l'alarma.",modes:"Modes in which sensor may be bypassed"},trigger_unavailable:{heading:"Activador quan no estigui disponible",description:"Quan l'estat del sensor no estigui disponible, aix?? activar?? el sensor."}},actions:{toggle_advanced:"Configuraci?? avan??ada",remove:"Elimina",setup_groups:"Setup groups"},errors:{description:"Corregiu els errors seg??ents:",no_area:"No s'ha seleccionat cap ??rea",no_modes:"No s'han seleccionat modes per als quals el sensor hauria d'estar actiu",no_auto_bypass_modes:"No modes are selected for the sensor may be automatically bypassed"}}},dialogs:{manage_groups:{title:"Manage sensor groups",description:"In a sensor group multiple sensors must be activated within a time period before the alarm is triggered.",no_items:"No groups yet",actions:{new_group:"New group"}},create_group:{title:"New sensor group",fields:{name:{heading:"Name",description:"Name for sensor group"},timeout:{heading:"Time-out",description:"Time period during which consecutive sensor activations triggers the alarm."},sensors:{heading:"Sensors",description:"Select the sensors which are contained by this group."}},errors:{invalid_name:"Invalid name provided.",insufficient_sensors:"At least 2 sensors need to be selected."}},edit_group:{title:"Edit sensor group ''{name}''"}}},codes:{title:"Codis",cards:{codes:{description:"Canvieu la configuraci?? del codi.",fields:{code_arm_required:{heading:"Utilitzeu un codi d'activaci??",description:"Requereix un codi per activar l'alarma"},code_disarm_required:{heading:"Utilitzeu un codi de desactivaci??",description:"Requereix un codi per desactivar l'alarma"},code_format:{heading:"Format del codi",description:"Estableix el tipus de codi per a la targeta d'alarma Lovelace.",code_format_number:"codi PIN",code_format_text:"contrasenya"}}},user_management:{title:"Gesti?? d'usuaris",description:"Cada usuari t?? el seu propi codi per activar/desactivar l'alarma.",no_items:"Encara no hi ha usuaris",actions:{new_user:"usuari nou"}},new_user:{title:"Crea un usuari nou",description:"Es poden crear usuaris per proporcionar acc??s al funcionament de l'alarma.",fields:{name:{heading:"Nom",description:"Nom de l'usuari."},code:{heading:"Codi",description:"Codi d'aquest usuari."},confirm_code:{heading:"Confirmeu el codi",description:"Repetiu el codi."},can_arm:{heading:"Permetre que el codi active l'alarma",description:"Entering this code activates the alarm"},can_disarm:{heading:"Permetre que el codi desactive l'alarma",description:"Entering this code deactivates the alarm"},is_override_code:{heading:"??s un codi de sobreescriptura",description:"Si introdu??u aquest codi, es for??ar?? l'estat d'activaci?? de l'alarma"},area_limit:{heading:"Restricted areas",description:"Limit user to control only the selected areas"}},errors:{no_name:"No s'ha proporcionat cap nom.",no_code:"El codi ha de tenir 4 car??cters o n??meros com a m??nim.",code_mismatch:"Els codis no coincideixen."}},edit_user:{title:"Edita l'usuari",description:"Canvia la configuraci?? de l'usuari ''{name}''.",fields:{old_code:{heading:"Codi actual",description:"Codi actual, deixeu-lo en blanc per deixar-lo sense canvis."}}}}},actions:{title:"Accions",cards:{notifications:{title:"Notificacions",description:"Utilitzant aquest tauler, podeu gestionar les notificacions que s'envien quan es produeix un determinat esdeveniment d'alarma.",table:{no_items:"Encara no s'han creat notificacions.",no_area_warning:"Action is not assigned to any area."},actions:{new_notification:"nova notificaci??"}},actions:{description:"Aquest tauler es pot utilitzar per canviar un dispositiu quan l'estat d'alarma canvia.",table:{no_items:"Encara no s'han creat accions."},actions:{new_action:"nova acci??"}},new_notification:{title:"Crea una notificaci??",description:"Crea una nova notificaci??.",trigger:"Condition",action:"Task",options:"Options",fields:{event:{heading:"Esdeveniment",description:"Quan s'ha d'enviar la notificaci??",choose:{armed:{name:"L'alarma est?? activada",description:"L'alarma s'ha activat correctament"},disarmed:{name:"L'alarma est?? desactivada",description:"L'alarma est?? desactivada"},triggered:{name:"L'alarma s'activat per esdeveniment",description:"L'alarma s'activat per esdeveniment"},untriggered:{name:"Alarm not longer triggered",description:"The triggered state of the alarm has ended"},arm_failure:{name:"No s'ha pogut activar l'alarma",description:"L'activaci?? de l'alarma ha fallat a causa d'un o m??s sensors estan oberts"},arming:{name:"S'ha iniciat el retard de sortida",description:"S'ha iniciat el retard de sortida, a punt per sortir de casa."},pending:{name:"S'ha iniciat el retard d'entrada",description:"El retard d'entrada s'ha iniciat, l'alarma s'activar?? aviat."}}},mode:{heading:"Mode",description:"Limita l'acci?? a modes espec??fics d'activaci?? (opcional)"},title:{heading:"T??tol",description:"T??tol del missatge de notificaci??"},message:{heading:"Missatge",description:"Contingut del missatge de notificaci??",insert_wildcard:"Insert wildcard",placeholders:{armed:"The alarm is set to {{arm_mode}}",disarmed:"The alarm is now OFF",triggered:"The alarm is triggered! Cause: {{open_sensors}}.",untriggered:"The alarm is not longer triggered.",arm_failure:"The alarm could not be armed right now, due to: {{open_sensors}}.",arming:"The alarm will be armed soon, please leave the house.",pending:"The alarm is about to trigger, disarm it quickly!"}},open_sensors_format:{heading:"Format for open_sensors wildcard",description:"Choose which sensor information in inserted in the message",options:{default:"Names and states",short:"Names only"}},arm_mode_format:{heading:"Translation for arm_mode wildcard",description:"Choose in which language the arm mode is inserted in the message"},target:{heading:"Destinatari",description:"Dispositiu al qual enviar el missatge"},name:{heading:"Nom",description:"Descripci?? d'aquesta notificaci??",placeholders:{armed:"Notify {target} upon arming",disarmed:"Notify {target} upon disarming",triggered:"Notify {target} when triggered",untriggered:"Notify {target} when triggering stops",arm_failure:"Notify {target} on failure",arming:"Notify {target} when leaving",pending:"Notify {target} when arriving"}},delete:{heading:"Delete automation",description:"Permanently remove this automation"}},actions:{test:"Prova-ho"}},new_action:{title:"Crea una acci??",description:"Aquest tauler es pot utilitzar per canviar un dispositiu quan l'estat d'alarma canvia.",fields:{event:{heading:"Esdeveniment",description:"Quan s'ha d'executar l'acci??"},area:{heading:"??rea",description:"??rea per a la qual s'aplica l'esdeveniment, deixeu-la en blanc per seleccionar l'alarma global."},mode:{heading:"Mode",description:"Limita l'acci?? a modes espec??fics d'activaci?? (opcional)"},entity:{heading:"Entitat",description:"Entitat en qu?? es realitzar?? l'acci??"},action:{heading:"Acci??",description:"Acci?? a realitzar a l'entitat",no_common_actions:"Actions can only be assigned in YAML mode for the selected entities."},name:{heading:"Nom",description:"Descripci?? d'aquesta acci??",placeholders:{armed:"Set {entity} to {state} upon arming",disarmed:"Set {entity} to {state} upon disarming",triggered:"Set {entity} to {state} when triggered",untriggered:"Set {entity} to {state} when triggering stops",arm_failure:"Set {entity} to {state} on failure",arming:"Set {entity} to {state} when leaving",pending:"Set {entity} to {state} when arriving"}}}}}}},st={common:tt,components:at,title:"Tauler alarma",panels:it},nt=Object.freeze({__proto__:null,common:tt,components:at,title:"Tauler alarma",panels:it,default:st}),rt={modes_short:{armed_away:"Pry??",armed_home:"Doma",armed_night:"Noc",armed_custom_bypass:"Vlastn??",armed_vacation:"Dovolen??"},enabled:"Povoleno",disabled:"Zak??z??no"},ot={time_slider:{seconds:"sek",minutes:"min",infinite:"neomezeno",none:"????dn??"},editor:{ui_mode:"Do UI",yaml_mode:"Do YAML",edit_in_yaml:"Upravit v YAML"},table:{filter:{label:"Filtrovat polo??ky",item:"Filtrovat podle {name}",hidden_items:"{number} {number, plural,\n  one {polo??ka je}\n  other {polo??ky jsou}\n} skryt??"}}},dt={general:{title:"Obecn??",cards:{general:{description:"Tento panel definuje obecn?? nastaven?? alarmu.",fields:{disarm_after_trigger:{heading:"Deaktivovat alarm po spu??t??n??",description:"Po vypr??en?? ??asu spu??t??n??ho alarmu, deatkivovat alarm m??sto n??vratu do zaji??t??n??ho stavu."},enable_mqtt:{heading:"Povolit MQTT",description:"Povolen?? kontroly alarmu p??es MQTT."},enable_master:{heading:"Povolit centr??ln?? alarm",description:"Vytvo???? entitu pro kontrolu alarmu pro v??echny z??ny."}},actions:{setup_mqtt:"Nastaven?? MQTT",setup_master:"Nastaven?? centr??ln??ho alarmu"}},modes:{title:"Re??imy",description:"Tento panel slou???? k nastaven?? re??im?? alarmu.",modes:{armed_away:"Zaji??t??no Pry?? se pou????v?? v p????pad??, ??e nikdo nen?? doma. Ve??ker?? dve??e a okna jsou hl??dan?? proti otev??en?? a pohybov?? senzory kontroluj?? uvnit??",armed_home:"Zaji??t??no Doma se pou????v?? v p????pad??, ??e se n??kdo v dom?? pohybuje. Ve??ker?? dve??e a okna jsou hl??dan?? proti otev??en??, ale pohybov?? senzory hl??dan?? nejsou.",armed_night:"Zaji??t??no Noc se pou????v?? v p????pade, ??e chceme zajistit p??i sp??nku. M????ete vybrat kter?? dve??e a pohybov?? senzory spust?? alarm a kter?? ne. (nap????klad v p????zem?? domu)",armed_vacation:"Zaji??t??no Dovolen?? se pou????v?? jako ro??????en?? Zaji??t??no Pry??, pro nastaven?? r??zn??ho chov??n?? alarmu. Nap????klad del???? doba sir??ny, odesl??n?? notifikace ...",armed_custom_bypass:"Speci??ln?? re??im pro kompletn?? kontrolu nad nastaven??m alarmu."},number_sensors_active:"{number} {number, plural,\n  one {senzor}\n  other {senzor??}\n} aktivn??",fields:{status:{heading:"Stav",description:"Ur??uje, zda v tomto re??imu je mo??n?? alarm zajistit."},exit_delay:{heading:"??ek??n?? na odchod",description:"V p????pad?? zaji??t??n?? alarmu, po tuto dobu nebudou vyhodnoceny zm??ny seznor?? (nap????klad otev??en?? hlavn??ch dve????)"},entry_delay:{heading:"??ek??n?? p??i p????chodu",description:"Zpo??d??n?? spu??t??n?? alarmu pro mo??nost zad??n?? k??du p??i p????chodu dom??."},trigger_time:{heading:"D??lka spu??t??n?? alarmu",description:"Doba po kterou alarm z??stane ve spu??t??n??m stavu."}}},mqtt:{title:"Nastaven?? MQTT",description:"Tento panel slou???? pro nastaven?? MQTT komunikace.",fields:{state_topic:{heading:"State topic",description:"Topic on which state updates are published"},event_topic:{heading:"Event topic",description:"Topic on which alarm events are published"},command_topic:{heading:"Command topic",description:"Topic which Alarmo listens to for arm/disarm commands."},require_code:{heading:"Require code",description:"Require the code to be sent with the command."},state_payload:{heading:"Configure payload per state",item:"Define a payload for state ''{state}''"},command_payload:{heading:"Configure payload per command",item:"Define a payload for command ''{command}''"}}},areas:{title:"Z??ny",description:"Z??ny mohou b??t pou??ity pro rozd??len?? alarmu do v??ce oblast??.",no_items:"Zat??m nejsou definovan?? ????dn?? z??ny.",table:{remarks:"Pozn??mka",summary:"Tato z??na obsahuje {summary_sensors} a {summary_automations}.",summary_sensors:"{number} {number, plural,\n  one {senzor}\n  other {senzor??}\n}",summary_automations:"{number} {number, plural,\n  one {automatizace}\n  other {automatiac??}\n}"},actions:{add:"P??idat"}}},dialogs:{create_area:{title:"Nov?? z??na",fields:{copy_from:"Zkop??rovat nastaven?? z"}},edit_area:{title:"??prava z??ny ''{area}''",name_warning:"Pozn??mka: zm??na jm??na z??rov???? zm??n?? i ID entity"},remove_area:{title:"Odebrat z??nu?",description:"Jste si jist??? Tato z??na obsahuje {sensors} senzory a {automations} automatizace, kter?? budou odstran??ny tak??."},edit_master:{title:"Centr??ln?? nastaven??"},disable_master:{title:"Zak??zat centr??ln?? ovl??d??n???",description:"Jste si jist???  Tato z??na obsahuje {sensors} senzory a {automations} automatizace, kter?? budou odstran??ny tak??."}}},sensors:{title:"Senzory",cards:{sensors:{description:"Aktu??ln?? nastaven?? senzory. Pro zm??nu klikn??te na polo??ku.",table:{no_items:"????dn?? senzory k zobrazen??.",no_area_warning:"Senzor nen?? p??i??azen k ????dn?? z??n??",arm_modes:"Re??imy alarmu",always_on:"(V??dy)"}},add_sensors:{title:"P??idat Senzor",description:"P??idat dal???? senzory. Ujist??te se, ??e va??e senzory jsou spr??vn?? pojmenov??ny.",no_items:"Nejsou ????dn?? dostupn?? HA entity, kter?? mohou b??t nastaveny pro alarm. P??idejte pros??m pouze entity typu binary_sensor.",table:{type:"Zji??t??n?? typ"},actions:{add_to_alarm:"p??idat do alarmu",filter_supported:"Skr??t polo??ky nezn??m??ho typu"}},editor:{title:"Upravit Senzor",description:"Nastaven?? senzoru entity ''{entity}''.",fields:{area:{heading:"Z??na",description:"Vyberte z??nu do kter?? m?? senzor pat??it."},group:{heading:"Skupina",description:"Seskupit senzory pro kombinovan?? spu??t??n?? alarmu."},device_type:{heading:"Typ za????zen??",description:"Vyberte typ za????zen?? pro automatick?? p??edvypln??n?? parametr??.",choose:{door:{name:"Dve??e",description:"Dve??e, br??na nebo jin?? prost??edek pro vstup/opu??t??n?? domu."},window:{name:"Okno",description:"Okno nebo balkonov?? dve??e, kter?? neslou???? pro vstup do domu."},motion:{name:"Pohyb",description:"Pohybov?? senzor nebo podobn?? za????zeni pro zji??t??n?? p????tomnosti osob."},tamper:{name:"Manipulace",description:"Detektor manipulace se senzorem, senzor rozbit??ho okna, atd."},environmental:{name:"Prost??ed??",description:"Senzor kou??e/plynu, detektor ??niku vody, atd. (neslou???? k ochran?? p??ed zlod??ji)."},other:{name:"Obecn??"}}},always_on:{heading:"V??dy zapnuto",description:"Senzor v??dy spust?? alarm."},modes:{heading:"Povolen?? re??imy",description:"Re??imy alarmu, pro kter?? se m?? senzor vyhodnocovat."},arm_on_close:{heading:"Zajistit po zav??en??",description:"Po deaktivaci tohoto senzoru, p??esko??it ??ek??n?? na odchod."},use_exit_delay:{heading:"Pou????t p??i ??ek??n?? na odchod",description:"Senzor m????e b??t aktivn?? kdy?? za??ne ??ek??n?? na odchod."},use_entry_delay:{heading:"Pou????y ??ek??n?? na vstup",description:"Aktivace senzoru spust?? alarm a?? uplyne doba ??ek??n?? na vstup."},allow_open:{heading:"Povolit aktivn?? senzor po zaji??t??n??",description:"Pokud je senzor st??le aktivn?? i po ??ek??n?? na odchod, nezp??sob?? chybu zaji??t??n??."},auto_bypass:{heading:"Automaticky vy??adit senzor",description:"Pokud je senzor v dob?? zaji??t??n?? aktivn??, bude automaticky vy??azen z alarmu.",modes:"Re??imy, ve kter??ch m????e b??t senzor automaticky vy??azen"},trigger_unavailable:{heading:"Spustit alarm p??i nedostupnosti",description:"Pokud stav senzoru nen?? dostupn??, spust?? alarm."}},actions:{toggle_advanced:"Roz??????en?? nastaven??",remove:"Odebrat",setup_groups:"Nastavit skupiny"},errors:{description:"Pros??m opravte n??sleduj??c?? chyby:",no_area:"Nen?? vybr??na ????dn?? z??na",no_modes:"Nen?? vybr??n ????dn?? re??im, ve kter??m m?? b??t seznor aktivn??",no_auto_bypass_modes:"Nen?? vybr??n ????dn?? re??im, ve kter??m m?? b??t senzor automaticky vy??azen"}}},dialogs:{manage_groups:{title:"Spravovat skupiny senzor??",description:"Ve skupin?? senzor?? mus?? byt aktivov??no v??ce senzor?? v ur??it??m ??asov??m ??seku pro spu??t??n?? alarmu.",no_items:"Nejsou ????dn?? skupiny",actions:{new_group:"Nov?? skupina"}},create_group:{title:"Nov?? skupina senzor??",fields:{name:{heading:"N??zev",description:"N??zev skupiny senzor??"},timeout:{heading:"??asov?? ??sek",description:"??asov?? ??sek ve kter??m mus?? b??t aktivov??ny senzory aby byl alarm spu??t??n."},sensors:{heading:"Senzory",description:"Vyberte senzory, kter?? maj?? b??t v t??to skupin??."}},errors:{invalid_name:"Neplatn?? jm??no.",insufficient_sensors:"Mus?? b??t vybr??ny alespo?? 2 senzory."}},edit_group:{title:"Upravit skupinu senzor?? ''{name}''"}}},codes:{title:"K??dy",cards:{codes:{description:"Zm??nit nastaven?? k??du.",fields:{code_arm_required:{heading:"Pou????t k??d k zaji??t??n??",description:"Vy??adovat k??d p??i zaji??t??n?? alarmu"},code_disarm_required:{heading:"Pou????t k??d k deaktivaci alarmu",description:"Vy??adovat k??d pro deaktivaci alarmu"},code_format:{heading:"Form??t k??du",description:"Nastav?? typ kl??vesnice pro kartu alarmu v Lovelace.",code_format_number:"pin",code_format_text:"heslo"}}},user_management:{title:"Spr??va u??ivatel??",description:"Ka??d?? u??ivatel m?? sv??j vlastn?? k??d pro zaji??t??n??/deaktivaci alarmu.",no_items:"Neexistuj?? ????dn?? u??ivatel??",actions:{new_user:"nov?? u??ivatel"}},new_user:{title:"Vytvo??it nov??ho u??ivatele",description:"U??ivatel?? mohou b??t vytvo??eni pro pr??ci s alarmem.",fields:{name:{heading:"Jm??no",description:"Jm??no u??ivatele."},code:{heading:"K??d",description:"K??d u??ivatele."},confirm_code:{heading:"Ov????en?? k??du",description:"Zopakujte k??d."},can_arm:{heading:"Povolit k??d pro zaji??t??n??",description:"Zad??n?? tohoto k??du zajist?? alarm"},can_disarm:{heading:"Povolit k??d pro deaktivaci",description:"Zad??n?? tohoto k??du deaktivuje alarm"},is_override_code:{heading:"Je to override k??d",description:"Zad??n?? tohoto k??du zajist?? alarm i p??es otev??en?? senzory"},area_limit:{heading:"Povolen?? z??ny",description:"Omezen?? u??ivatele ovl??dat pouze vybran?? z??ny alarmu"}},errors:{no_name:"Nen?? zad??no jm??no.",no_code:"K??d by m??l m??t minim??ln?? 4 znaky.",code_mismatch:"K??dy se neshoduj??."}},edit_user:{title:"Upravit u??ivatele",description:"ZM??nit nastaven?? u??ivatele ''{name}''.",fields:{old_code:{heading:"Aktu??ln?? k??d",description:"Aktu??ln?? k??d, nechte pr??zdn?? pokud nechcete m??nit."}}}}},actions:{title:"Akce",cards:{notifications:{title:"Notifikace",description:"Tento panel slou???? k nastaven?? notifikac??, kter?? maj?? b??t odesl??ny v p????pad?? ur??it??ch ud??lost?? alarmu.",table:{no_items:"Nejsou ????dn?? vytvo??en?? notifikace.",no_area_warning:"Akce nen?? p??i??azena k ????dn?? z??n??."},actions:{new_notification:"nov?? notifikace"}},actions:{description:"Tento panel slou???? k nastaven?? zm??ny za????zen?? v p????pad?? zm??ny stavu alarmu.",table:{no_items:"Nejsou ????dn?? vytvo??en?? akce."},actions:{new_action:"nov?? akce"}},new_notification:{title:"Nastaven?? notifikac??",description:"Odesl??n?? notifikace p??i zaji??t??n??/deaktivaci alarmu, p??i spu??t??n?? alarmu, atd.",trigger:"Podm??nka",action:"Akce",options:"Mo??nosti",fields:{event:{heading:"Ud??lost",description:"Kdy by m??la b??t notifikace odesl??na",choose:{armed:{name:"Alarm je zaji??t??n??",description:"Zaji??t??n?? alarmu prob??hlo ??sp????n??"},disarmed:{name:"Alarm je deaktivovan??",description:"Deaktivace alarmu prob??hla ??sp????n??"},triggered:{name:"Alarm je spu??t??n??",description:"Byl spust??n?? alarm"},untriggered:{name:"Spu??t??n?? alarm skon??il",description:"Skon??ilo spust??n?? alarmu (nap????klad vypr??en??m nastaven?? doby nebo deaktivac??)"},arm_failure:{name:"Zaji??t??n?? se nepoda??ilo",description:"Zaji??t??n?? alarmu se nepoda??ilo d??ky jendomu nebo v??ce aktivn??m senzor??m"},arming:{name:"??as na odchod za??al",description:"Za??al odpo??et ??asu pro odchod."},pending:{name:"??as na p????chod",description:"Za??al odpo??et ??asu na p????chod."}}},mode:{heading:"Re??im",description:"Omezit notifikaci na specifick?? re??im alarmu (nepovinn??)"},title:{heading:"Nadpis",description:"Nadpis notifikace"},message:{heading:"Zpr??va",description:"Obsah zpr??vy v notifikaci",insert_wildcard:"Vlo??it prom??nnou",placeholders:{armed:"Alarm je nastaven na {{arm_mode}}",disarmed:"Alarm je deaktovovan??",triggered:"Alarm je spu??t??n??! P??????ina: {{open_sensors}}.",untriggered:"Alarm byl ukon??en.",arm_failure:"Alarm nemohl b??t zaji??t??n?? v tuto chv??li, kv??li: {{open_sensors}}.",arming:"Prob??h?? zaji??t??n?? alarmu, m????ete opustit d??m.",pending:"Alarm bude brzy spu??t??n??, rychle ho deaktivujte!"}},open_sensors_format:{heading:"Form??t pro open_sensors prom??nnou",description:"Vyberte, kter?? informace o senzoru budou do zpr??vy p??id??ny",options:{default:"Jm??na a stavy",short:"Pouze jm??na"}},arm_mode_format:{heading:"P??eklad pro arm_mode prom??nnou",description:"Vyberte ve kter??m jazyce se m?? do zpr??vy p??idat re??im alarmu"},target:{heading:"P??ijemce",description:"Na kter?? za????zen?? m?? b??t notifikace odesl??na"},name:{heading:"Jm??no",description:"Popis t??to notifikace",placeholders:{armed:"Upozornit {target} p??i zaji??t??n??",disarmed:"Upozornit {target} p??i deaktivaci",triggered:"Upozornit {target} p??i spu??t??n??",untriggered:"Upozornit {target} kdy?? se alarm ukon????",arm_failure:"Upozornit {target} p??i chyb?? v zaji??t??n??",arming:"Upozornit {target} p??i odchodu",pending:"Upozornit {target} p??i p????chodu"}},delete:{heading:"Odstranit automatizaci",description:"Trvale odstranit tuto automatizaci"}},actions:{test:"Vyzkou??et"}},new_action:{title:"Nastaven?? akce",description:"Rozsv??tit sv??tla, spustit sir??nu nap????klad p??i spu??t??n?? alarmu.",fields:{event:{heading:"Ud??lost",description:"Kdy by m??la b??t akce provedena"},area:{heading:"Z??na",description:"Pro kterou z??nu se m?? akce prov??st, pro glob??ln?? alarm nechte pr??zdn??."},mode:{heading:"Re??im",description:"Omezit akci na specifick?? re??im alarmu (nepovinn??)"},entity:{heading:"Entita",description:"Na kter?? entit?? m?? b??t akce provedena"},action:{heading:"Akce",description:"Akce, kter?? m?? b??t provedena na entit??",no_common_actions:"Pro vybran?? entity m????e b??t akce nastavena pouze v YAML."},name:{heading:"N??zev",description:"Popis t??to akce",placeholders:{armed:"Nastav {entity} na {state} p??i zaji??t??n??",disarmed:"Nastav {entity} na {state} p??i deaktivaci",triggered:"Nastav {entity} na {state} p??i spu??t??n??",untriggered:"Nastav {entity} na {state} kdy?? se alarm ukon????",arm_failure:"Nastav {entity} na {state} p??i chyb?? v zaji??t??n??",arming:"Nastav {entity} na {state} p??i odchod",pending:"Nastav {entity} na {state} p??i p????chodu"}}}}}}},lt={common:rt,components:ot,title:"Alarm panel",panels:dt},ct=Object.freeze({__proto__:null,common:rt,components:ot,title:"Alarm panel",panels:dt,default:lt}),ht={modes_short:{armed_away:"Away",armed_home:"Home",armed_night:"Night",armed_custom_bypass:"Custom",armed_vacation:"Vacation"},enabled:"Enabled",disabled:"Disabled"},mt={time_slider:{seconds:"sec",minutes:"min",infinite:"infinite",none:"none"},editor:{ui_mode:"To UI",yaml_mode:"To YAML",edit_in_yaml:"Edit in YAML"},table:{filter:{label:"Filter items",item:"Filter by {name}",hidden_items:"{number} {number, plural,\n  one {item is}\n  other {items are}\n} hidden"}}},ut={general:{title:"General",cards:{general:{description:"This panel defines some global settings for the alarm.",fields:{disarm_after_trigger:{heading:"Disarm after trigger",description:"After trigger time has expired, disarm the alarm instead of returning to armed state."},enable_mqtt:{heading:"Enable MQTT",description:"Allow the alarm panel to be controlled through MQTT."},enable_master:{heading:"Enable alarm master",description:"Creates an entity for controlling all areas simultaneously."}},actions:{setup_mqtt:"MQTT Configuration",setup_master:"Master Configuration"}},modes:{title:"Modes",description:"This panel can be used to set up the arm modes of the alarm.",modes:{armed_away:"Armed away will be used when all people left the house. All doors and windows allowing access to the house will be guarded, as well as motion sensors inside the house.",armed_home:"Armed home (also known as armed stay) will be used when setting the alarm while people are in the house. All doors and windows allowing access to the house will be guarded, but not motion sensors inside the house.",armed_night:"Armed night will be used when setting the alarm before going to sleep. All doors and windows allowing access to the house will be guarded, and selected motion sensors (downstairs) in the house.",armed_vacation:"Armed vacation can be used as an extension to the armed away mode in case of absence for longer duration. The delay times and trigger responses can be adapted (as desired) to being distant from home.",armed_custom_bypass:"An extra mode for defining your own security perimeter."},number_sensors_active:"{number} {number, plural,\n  one {sensor}\n  other {sensors}\n} active",fields:{status:{heading:"Status",description:"Controls whether the alarm can be armed in this mode."},exit_delay:{heading:"Exit delay",description:"When arming the alarm, within this time period the sensors will not trigger the alarm yet."},entry_delay:{heading:"Entry delay",description:"Delay time until the alarm is triggered after one of the sensors is activated."},trigger_time:{heading:"Trigger time",description:"Time during which the alarm will remain in the triggered state after activation."}}},mqtt:{title:"MQTT configuration",description:"This panel can be used for configuration of the MQTT interface.",fields:{state_topic:{heading:"State topic",description:"Topic on which state updates are published"},event_topic:{heading:"Event topic",description:"Topic on which alarm events are published"},command_topic:{heading:"Command topic",description:"Topic which Alarmo listens to for arm/disarm commands."},require_code:{heading:"Require code",description:"Require the code to be sent with the command."},state_payload:{heading:"Configure payload per state",item:"Define a payload for state ''{state}''"},command_payload:{heading:"Configure payload per command",item:"Define a payload for command ''{command}''"}}},areas:{title:"Areas",description:"Areas can be used for dividing your alarm system into multiple compartments.",no_items:"There are no areas defined yet.",table:{remarks:"Remarks",summary:"This area contains {summary_sensors} and {summary_automations}.",summary_sensors:"{number} {number, plural,\n  one {sensor}\n  other {sensors}\n}",summary_automations:"{number} {number, plural,\n  one {automation}\n  other {automations}\n}"},actions:{add:"Add"}}},dialogs:{create_area:{title:"New area",fields:{copy_from:"Copy settings from"}},edit_area:{title:"Editing area ''{area}''",name_warning:"Note: changing the name will change the entity ID"},remove_area:{title:"Remove area?",description:"Are you sure you want to remove this area? This area contains {sensors} sensors and {automations} automations, which will be removed as well."},edit_master:{title:"Master configuration"},disable_master:{title:"Disable master?",description:"Are you sure you want to remove the alarm master? This area contains {automations} automations, which will be removed with this action."}}},sensors:{title:"Sensors",cards:{sensors:{description:"Currently configured sensors. Click on an item to make changes.",table:{no_items:"There are no sensors to be displayed here.",no_area_warning:"Sensor is not assigned to any area.",arm_modes:"Arm Modes",always_on:"(Always)"}},add_sensors:{title:"Add Sensors",description:"Add more sensors. Make sure that your sensors have a suitable name, so you can identify them.",no_items:"There are no available HA entities that can be configured for the alarm. Make sure to include entities of the type binary_sensor.",table:{type:"Detected type"},actions:{add_to_alarm:"add to alarm",filter_supported:"Hide items with unknown type"}},editor:{title:"Edit Sensor",description:"Configuring the sensor settings of ''{entity}''.",fields:{area:{heading:"Area",description:"Select an area which contains this sensor."},group:{heading:"Group",description:"Group with other sensors for combined triggering."},device_type:{heading:"Device Type",description:"Choose a device type to automatically apply appropriate settings.",choose:{door:{name:"Door",description:"A door, gate or other entrance that is used for entering/leaving the home."},window:{name:"Window",description:"A window, or a door not used for entering the house such as balcony."},motion:{name:"Motion",description:"Presence sensor or similar device having a delay between activations."},tamper:{name:"Tamper",description:"Detector of sensor cover removal, glass break sensor, etc."},environmental:{name:"Environmental",description:"Smoke/gas sensor, leak detector, etc. (not related to burglar protection)."},other:{name:"Generic"}}},always_on:{heading:"Always on",description:"Sensor should always trigger the alarm."},modes:{heading:"Enabled modes",description:"Alarm modes in which this sensor is active."},arm_on_close:{heading:"Arm after closing",description:"After deactivation of this sensor, the remaining exit delay will automatically be skipped."},use_exit_delay:{heading:"Use exit delay",description:"Sensor is allowed to be active when the exit delay starts."},use_entry_delay:{heading:"Use entry delay",description:"Sensor activation triggers the alarm after the entry delay rather than directly."},allow_open:{heading:"Allow open after arming",description:"Initial state of the sensor is ignored upon arming."},auto_bypass:{heading:"Bypass automatically",description:"Exclude this sensor from the alarm if it is open while arming.",modes:"Modes in which sensor may be bypassed"},trigger_unavailable:{heading:"Trigger when unavailable",description:"When the sensor state becomes 'unavailable', this will activate the sensor."}},actions:{toggle_advanced:"Advanced settings",remove:"Remove",setup_groups:"Setup groups"},errors:{description:"Please correct the following errors:",no_area:"No area is selected",no_modes:"No modes are selected for which the sensor should be active",no_auto_bypass_modes:"No modes are selected for the sensor may be automatically bypassed"}}},dialogs:{manage_groups:{title:"Manage sensor groups",description:"In a sensor group multiple sensors must be activated within a time period before the alarm is triggered.",no_items:"No groups yet",actions:{new_group:"New group"}},create_group:{title:"New sensor group",fields:{name:{heading:"Name",description:"Name for sensor group"},timeout:{heading:"Time-out",description:"Time period during which consecutive sensor activations triggers the alarm."},sensors:{heading:"Sensors",description:"Select the sensors which are contained by this group."}},errors:{invalid_name:"Invalid name provided.",insufficient_sensors:"At least 2 sensors need to be selected."}},edit_group:{title:"Edit sensor group ''{name}''"}}},codes:{title:"Codes",cards:{codes:{description:"Change settings for the code.",fields:{code_arm_required:{heading:"Use arm code",description:"Require a code for arming the alarm"},code_disarm_required:{heading:"Use disarm code",description:"Require a code for disarming the alarm"},code_format:{heading:"Code format",description:"Sets the input type for Lovelace alarm card.",code_format_number:"pincode",code_format_text:"password"}}},user_management:{title:"User management",description:"Each user has its own code to arm/disarm the alarm.",no_items:"There are no users yet",actions:{new_user:"new user"}},new_user:{title:"Create new user",description:"Users can be created for providing access to operating the alarm.",fields:{name:{heading:"Name",description:"Name of the user."},code:{heading:"Code",description:"Code for this user."},confirm_code:{heading:"Confirm code",description:"Repeat the code."},can_arm:{heading:"Allow code for arming",description:"Entering this code activates the alarm"},can_disarm:{heading:"Allow code for disarming",description:"Entering this code deactivates the alarm"},is_override_code:{heading:"Is override code",description:"Entering this code will arm the alarm in force"},area_limit:{heading:"Restricted areas",description:"Limit user to control only the selected areas"}},errors:{no_name:"No name provided.",no_code:"Code should have 4 characters/numbers minimum.",code_mismatch:"The codes don't match."}},edit_user:{title:"Edit User",description:"Change configuration for user ''{name}''.",fields:{old_code:{heading:"Current code",description:"Current code, leave empty to leave unchanged."}}}}},actions:{title:"Actions",cards:{notifications:{title:"Notifications",description:"Using this panel, you can manage notifications to be sent when a certain alarm event occurs.",table:{no_items:"There are no notifications created yet.",no_area_warning:"Action is not assigned to any area."},actions:{new_notification:"new notification"}},actions:{description:"This panel can be used to switch a device when the alarm state changes.",table:{no_items:"There are no actions created yet."},actions:{new_action:"new action"}},new_notification:{title:"Configure notification",description:"Receive a notification when arming/disarming the alarm, on activation, etc.",trigger:"Condition",action:"Task",options:"Options",fields:{event:{heading:"Event",description:"When should the notification be sent",choose:{armed:{name:"Alarm is armed",description:"The alarm is succesfully armed"},disarmed:{name:"Alarm is disarmed",description:"The alarm is disarmed"},triggered:{name:"Alarm is triggered",description:"The alarm is triggered"},untriggered:{name:"Alarm no longer triggered",description:"The triggered state of the alarm has ended"},arm_failure:{name:"Failed to arm",description:"The arming of the alarm failed due to one or more open sensors"},arming:{name:"Exit delay started",description:"Exit delay started, ready to leave the house."},pending:{name:"Entry delay started",description:"Entry delay started, the alarm will trigger soon."}}},mode:{heading:"Mode",description:"Limit the action to specific arm modes (optional)"},title:{heading:"Title",description:"Title for the notification message"},message:{heading:"Message",description:"Content of the notification message",insert_wildcard:"Insert wildcard",placeholders:{armed:"The alarm is set to {{arm_mode}}",disarmed:"The alarm is now OFF",triggered:"The alarm is triggered! Cause: {{open_sensors}}.",untriggered:"The alarm is no longer triggered.",arm_failure:"The alarm could not be armed right now, due to: {{open_sensors}}.",arming:"The alarm will be armed soon, please leave the house.",pending:"The alarm is about to trigger, disarm it quickly!"}},open_sensors_format:{heading:"Format for open_sensors wildcard",description:"Choose which sensor information in inserted in the message",options:{default:"Names and states",short:"Names only"}},arm_mode_format:{heading:"Translation for arm_mode wildcard",description:"Choose in which language the arm mode is inserted in the message"},target:{heading:"Target",description:"Device to send the notification to"},name:{heading:"Name",description:"Description for this notification",placeholders:{armed:"Notify {target} upon arming",disarmed:"Notify {target} upon disarming",triggered:"Notify {target} when triggered",untriggered:"Notify {target} when triggering stops",arm_failure:"Notify {target} on failure",arming:"Notify {target} when leaving",pending:"Notify {target} when arriving"}},delete:{heading:"Delete automation",description:"Permanently remove this automation"}},actions:{test:"Try it"}},new_action:{title:"Configure action",description:"Switch lights or devices (such as sirens) when arming/disarming the alarm, on activation, etc.",fields:{event:{heading:"Event",description:"When should the action be executed"},area:{heading:"Area",description:"Area for which the event applies, leave empty to select the global alarm."},mode:{heading:"Mode",description:"Limit the action to specific arm modes (optional)"},entity:{heading:"Entity",description:"Entity to perform action on"},action:{heading:"Action",description:"Action to perform on the entity",no_common_actions:"Actions can only be assigned in YAML mode for the selected entities."},name:{heading:"Name",description:"Description for this action",placeholders:{armed:"Set {entity} to {state} upon arming",disarmed:"Set {entity} to {state} upon disarming",triggered:"Set {entity} to {state} when triggered",untriggered:"Set {entity} to {state} when triggering stops",arm_failure:"Set {entity} to {state} on failure",arming:"Set {entity} to {state} when leaving",pending:"Set {entity} to {state} when arriving"}}}}}}},pt={common:ht,components:mt,title:"Alarm panel",panels:ut},gt=Object.freeze({__proto__:null,common:ht,components:mt,title:"Alarm panel",panels:ut,default:pt}),vt={modes_short:{armed_away:"Ausente",armed_home:"En casa",armed_night:"Nocturno",armed_custom_bypass:"Personalizado",armed_vacation:"Vacaciones"},enabled:"Habilitar",disabled:"Deshabilitar"},ft={time_slider:{seconds:"seg",minutes:"min",infinite:"infinito",none:"ninguno"},editor:{ui_mode:"Editar en la UI",yaml_mode:"Editar en YAML",edit_in_yaml:"Editar en YAML"},table:{filter:{label:"Filtrar entidades",item:"Filtrar por {name}",hidden_items:"{number} {number, plural,\n  one {entidas est??}\n  other {entidades est??n}\n} oculta"}}},_t={general:{title:"General",cards:{general:{description:"Este panel define algunos ajustes globales para la alarma.",fields:{disarm_after_trigger:{heading:"Desarmar despu??s de disparar",description:"Una vez transcurrido el tiempo de activaci??n, desactivar la alarma en lugar de volver al estado de armada."},enable_mqtt:{heading:"Habilitar MQTT",description:"Permitir que el panel de alarma se controle a trav??s de MQTT."},enable_master:{heading:"Habilitar alarma maestra",description:"Crea una entidad para controlar todas las ??reas simult??neamente."}},actions:{setup_mqtt:"Configuraci??n MQTT",setup_master:"Configuraci??n maestra"}},modes:{title:"Modos",description:"Este panel se puede utilizar para configurar los modos de armado de la alarma.",modes:{armed_away:"Armado ausente se utilizar?? cuando todas las personas salgan de la casa. Todas las puertas y ventanas que permitan el acceso a la casa estar??n vigiladas, as?? como los sensores de movimiento dentro de la casa.",armed_home:"Armado en casa (tambi??n conocido como estancia armada) se utilizar?? cuando se active la alarma mientras haya personas en la casa. Todas las puertas y ventanas que permitan el acceso a la casa estar??n protegidas, pero no los sensores de movimiento dentro de la casa.",armed_night:"Armado nocturno se usar?? al configurar la alarma antes de irse a dormir. Todas las puertas y ventanas que permitan el acceso a la casa estar??n resguardadas y se seleccionar??n sensores de movimiento en la casa.",armed_vacation:"Armado en vacaciones se puede usar como una extensi??n del modo armado ausente en caso de ausencia de mayor duraci??n. Los tiempos de retardo y las respuestas de activaci??n se pueden adaptar (como se desee) a estar lejos de casa.",armed_custom_bypass:"Un modo adicional para definir su propio per??metro de seguridad."},number_sensors_active:"{number} {number, plural,\n  one {sensor}\n  other {sensores}\n} activo",fields:{status:{heading:"Estado",description:"Controla si la alarma se puede armar en este modo."},exit_delay:{heading:"Retardo de salida",description:"Al armar la alarma, dentro de este per??odo de tiempo, los sensores a??n no disparar??n la alarma."},entry_delay:{heading:"Retardo de entrada",description:"Tiempo de retardo hasta que se activa la alarma despu??s de que se active alguno de los sensores."},trigger_time:{heading:"Tiempo de activaci??n",description:"Tiempo durante el cual sonar?? la sirena."}}},mqtt:{title:"Configuraci??n MQTT",description:"Este panel se puede utilizar para configurar la interfaz MQTT.",fields:{state_topic:{heading:"Tema del estado",description:"Tema sobre el que se publican las actualizaciones de estado."},event_topic:{heading:"Tema del evento",description:"Tema sobre el que se publican los eventos de alarma."},command_topic:{heading:"Tema del comando",description:"Tema sobre el que se env??an los comandos de armado / desarmado."},require_code:{heading:"Requerir c??digo",description:"Requiere que el c??digo se env??e con el comando."},state_payload:{heading:"Configurar la carga ??til por estado",item:"Defina una carga ??til para el estado ''{state}''"},command_payload:{heading:"Configurar la carga ??til por comando",item:"Defina una carga ??til para el comando ''{command}''"}}},areas:{title:"??reas",description:"Las ??reas se pueden utilizar para dividir su sistema de alarma en varios compartimentos.",no_items:"A??n no hay ??reas definidas.",table:{remarks:"Comentarios",summary:"Esta ??rea contiene {summary_sensors} y {summary_automations}.",summary_sensors:"{number} {number, plural,\n  one {sensor}\n  other {sensores}\n}",summary_automations:"{number} {number, plural,\n  one {automatizacion}\n  other {automatizaciones}\n}"},actions:{add:"Agregar"}}},dialogs:{create_area:{title:"Nueva ??rea",fields:{copy_from:"Copiar la configuraci??n de"}},edit_area:{title:"Editando ??rea ''{area}''",name_warning:"Nota: cambiar el nombre cambiar?? el ID de la entidad."},remove_area:{title:"??Eliminar ??rea?",description:"??Est?? seguro de que desea eliminar esta ??rea? Esta ??rea contiene {sensors} sensores y {automations} automatizaciones que tambi??n se eliminar??n."},edit_master:{title:"Configuraci??n maestra"},disable_master:{title:"??Deshabilitar maestro?",description:"??Est?? seguro de que desea eliminar la alarma maestra? Esta ??rea contiene {sensors} sensores y {automations} automatizaciones que tambi??n se eliminar??n."}}},sensors:{title:"Sensores",cards:{sensors:{description:"Sensores configurados actualmente. Haga clic en una entidad para realizar cambios.",table:{no_items:"No hay sensores para mostrar aqu??.",no_area_warning:"El sensor no est?? asignado a ning??n ??rea.",arm_modes:"Modos de armado",always_on:"(Siempre)"}},add_sensors:{title:"Agregar sensores",description:"Agrega m??s sensores. Aseg??rate de que tus sensores tengan un nombre amigable, para que puedas identificarlos.",no_items:"No hay entidades HA disponibles que se puedan configurar para la alarma. Aseg??rese de incluir entidades del tipo sensor binario.",table:{type:"Tipo detectado"},actions:{add_to_alarm:"agregar a la alarma",filter_supported:"Ocultar elementos con tipo desconocido"}},editor:{title:"Editar sensor",description:"Configurando los ajustes del sensor de ''{entity}''.",fields:{area:{heading:"??rea",description:"Seleccione un ??rea que contenga este sensor."},group:{heading:"Grupo",description:"Agrupar con otros sensores para un disparado combinado."},device_type:{heading:"Tipo de dispositivo",description:"Elija un tipo de dispositivo para aplicar autom??ticamente la configuraci??n adecuada.",choose:{door:{name:"Puerta",description:"Una puerta, port??n u otra entrada que se utilice para entrar / salir de la casa."},window:{name:"Ventana",description:"Una ventana o una puerta que no se use para entrar a la casa, como un balc??n."},motion:{name:"Movimiento",description:"Sensor de presencia o dispositivo similar que tiene un retardo entre activaciones."},tamper:{name:"Sabotaje",description:"Detector de extracci??n de la cubierta del sensor, sensor de rotura de vidrio, etc."},environmental:{name:"Medioambiental",description:"Sensor de humo / gas, detector de fugas, etc. (no relacionado con la protecci??n antirrobo)."},other:{name:"Gen??rico"}}},always_on:{heading:"Siempre encendido",description:"El sensor siempre debe activar la alarma."},modes:{heading:"Modos habilitados",description:"Modos de alarma en los que este sensor est?? activo."},arm_on_close:{heading:"Armar despu??s de cerrar",description:"Despu??s de la desactivaci??n de este sensor, se saltar?? autom??ticamente el retardo de salida restante."},use_exit_delay:{heading:"Usar retardo de salida",description:"Se permite que el sensor est?? activo cuando comienza el retardo de salida."},use_entry_delay:{heading:"Usar retardo de entrada",description:"La activaci??n del sensor activa la alarma despu??s del retardo de entrada en lugar de directamente."},allow_open:{heading:"Permitir abrir mientras se arma",description:"Si el sensor a??n est?? activo despu??s del retardo de salida, esto no har?? que falle el armado."},auto_bypass:{heading:"Omitir autom??ticamente",description:"Excluya este sensor de la alarma si est?? abierto mientras se arma.",modes:"Modos en los que se puede omitir el sensor"},trigger_unavailable:{heading:"Activar cuando no est?? disponible",description:"Cuando el estado del sensor se vuelve 'no disponible', esto activar?? el sensor."}},actions:{toggle_advanced:"Configuraci??n avanzada",remove:"Eliminar",setup_groups:"Configurar grupos"},errors:{description:"Por favor, corrija los siguientes errores:",no_area:"No se ha seleccionado ninguna ??rea",no_modes:"No se han seleccionados modos para los que el sensor deba estar activo",no_auto_bypass_modes:"No se han seleccionados modos para los que el sensor pueda ser omitido"}}},dialogs:{manage_groups:{title:"Administrar grupos de sensores",description:"En un grupo de sensores, se deben activar varios sensores dentro de un per??odo de tiempo antes de que se dispare la alarma.",no_items:"Todav??a no hay grupos",actions:{new_group:"Nuevo grupo"}},create_group:{title:"Nuevo grupo de sensores",fields:{name:{heading:"Nombre",description:"Nombre del grupo de sensores"},timeout:{heading:"Tiempo muerto",description:"Per??odo de tiempo durante el cual las activaciones consecutivas del sensor activan la alarma."},sensors:{heading:"Sensores",description:"Seleccione los sensores que est??n contenidos en este grupo."}},errors:{invalid_name:"Nombre proporcionado no v??lido.",insufficient_sensors:"Se deben seleccionar al menos 2 sensores."}},edit_group:{title:"Editar grupo de sensores '{name}'"}}},codes:{title:"C??digos",cards:{codes:{description:"Cambiar la configuraci??n del c??digo.",fields:{code_arm_required:{heading:"Usar c??digo de armado",description:"Requiere un c??digo para armar la alarma."},code_disarm_required:{heading:"Usar c??digo de desarmado",description:"Requiere un c??digo para desarmar la alarma."},code_format:{heading:"Formato del c??digo",description:"Establece el tipo de entrada para la tarjeta de la alarma.",code_format_number:"c??digo PIN",code_format_text:"contrase??a"}}},user_management:{title:"Gesti??n de usuarios",description:"Cada usuario tiene su propio c??digo para armar / desarmar la alarma.",no_items:"A??n no hay usuarios",actions:{new_user:"nuevo usuario"}},new_user:{title:"Crear nuevo usuario",description:"Se pueden crear usuarios para proporcionar acceso a la operaci??n de la alarma.",fields:{name:{heading:"Nombre",description:"Nombre del usuario."},code:{heading:"C??digo",description:"C??digo para este usuario."},confirm_code:{heading:"Confirmar c??digo",description:"Repite el c??digo."},can_arm:{heading:"Permitir c??digo para armar",description:"Al ingresar este c??digo se activa la alarma."},can_disarm:{heading:"Permitir c??digo para desarmar",description:"Al ingresar este c??digo se desactiva la alarma."},is_override_code:{heading:"Es un c??digo de anulaci??n",description:"Al ingresar este c??digo se forzar?? el armado de la alarma."},area_limit:{heading:"??reas restringidas",description:"Limitar al usuario a controlar solo las ??reas seleccionadas"}},errors:{no_name:"No se proporcion?? ning??n nombre.",no_code:"El c??digo debe tener 4 caracteres / n??meros como m??nimo.",code_mismatch:"Los c??digos no coinciden."}},edit_user:{title:"Editar usuario",description:"Cambiar la configuraci??n del usuario ''{name}''.",fields:{old_code:{heading:"C??digo actual",description:"C??digo actual, d??jelo en blanco para no modificarlo."}}}}},actions:{title:"Acciones",cards:{notifications:{title:"Notificaciones",description:"Usando este panel, puede administrar las notificaciones que se enviar??n durante un evento de alarma determinado.",table:{no_items:"A??n no se han creado notificaciones.",no_area_warning:"La acci??n no est?? asignada a ning??n ??rea."},actions:{new_notification:"nueva notificaci??n"}},actions:{description:"Este panel se puede utilizar para cambiar un dispositivo cuando cambia el estado de alarma.",table:{no_items:"A??n no se han creado acciones."},actions:{new_action:"nueva acci??n"}},new_notification:{title:"Crear notificaci??n",description:"Crear una nueva notificaci??n.",trigger:"Condici??n",action:"Tarea",options:"Opciones",fields:{event:{heading:"Evento",description:"Cu??ndo debe enviarse la notificaci??n.",choose:{armed:{name:"La alarma est?? armada",description:"La alarma est?? correctamente armada."},disarmed:{name:"La alarma est?? desarmada",description:"La alarma est?? desarmada."},triggered:{name:"Se ha disparado la alarma",description:"La alarma se ha disparado."},untriggered:{name:"Alarm not longer triggered",description:"The triggered state of the alarm has ended"},arm_failure:{name:"No se pudo armar",description:"El armado de la alarma fall?? debido a uno o m??s sensores abiertos."},arming:{name:"Se ha iniciado el retardo de salida",description:"Se ha iniciado el retardo de salida, listo para salir de la casa."},pending:{name:"Se ha iniciado el retardo de entrada",description:"Se ha iniciado el retardo de entrada, la alarma se disparar?? pronto."}}},mode:{heading:"Modo",description:"Limita la acci??n a modos de armado espec??ficos (opcional)."},title:{heading:"T??tulo",description:"T??tulo del mensaje de notificaci??n."},message:{heading:"Mensaje",description:"Contenido del mensaje de notificaci??n.",insert_wildcard:"Insertar comod??n",placeholders:{armed:"La alarma est?? configurada en {{arm_mode}}",disarmed:"Ahora la alarma est?? APAGADA",triggered:"??Se ha disparado la alarma! Causa: {{open_sensors}}.",untriggered:"The alarm is not longer triggered.",arm_failure:"No se pudo armar la alarma en este momento debido a: {{open_sensors}}.",arming:"Se armar?? pronto la alarma, por favor, salga de la casa.",pending:"??La alarma est?? a punto de dispararse, desarme r??pidamente!"}},open_sensors_format:{heading:"Formato para el comod??n open_sensors",description:"Elija qu?? informaci??n del sensor se inserta en el mensaje",options:{default:"Nombres y estados",short:"Solo nombres"}},arm_mode_format:{heading:"Traducci??n del comod??n arm_mode",description:"Elija en qu?? idioma se inserta el modo de armado en el mensaje"},target:{heading:"Objetivo",description:"Dispositivo al que enviar el mensaje push."},name:{heading:"Nombre",description:"Descripci??n de esta notificaci??n.",placeholders:{armed:"Notificar a {target} al armar",disarmed:"Notificar a {target} al desarmar",triggered:"Notificar a {target} cuando se dispare",untriggered:"Notify {target} when triggering stops",arm_failure:"Notificar a {target} si falla",arming:"Notificar a {target} cuando se vaya",pending:"Notificar a {target} cuando llegue"}},delete:{heading:"Eliminar automatizaci??n",description:"Eliminar esta automatizaci??n de forma permanente"}},actions:{test:"Pru??belo"}},new_action:{title:"Crear acci??n",description:"Este panel se puede utilizar para cambiar un dispositivo cuando cambia el estado de la alarma.",fields:{event:{heading:"Evento",description:"??Cu??ndo debe ejecutarse la acci??n?"},area:{heading:"??rea",description:"??rea para la que se aplica el evento, d??jelo en blanco para seleccionar la alarma global."},mode:{heading:"Modo",description:"Limita la acci??n a modos de armado espec??ficos (opcional)"},entity:{heading:"Entidad",description:"Entidad sobre la que realizar la acci??n."},action:{heading:"Acci??n",description:"Acci??n a realizar en la entidad.",no_common_actions:"Las acciones solo se pueden asignar en modo YAML para las entidades seleccionadas."},name:{heading:"Nombre",description:"Descripci??n de esta acci??n.",placeholders:{armed:"Establecer {entity} en {state} al armar",disarmed:"Establecer {entity} en {state} al desarmar",triggered:"Establecer {entity} en {state} cuando se dispare",untriggered:"Set {entity} to {state} when triggering stops",arm_failure:"Establecer {entity} en {state} si falla",arming:"Establecer {entity} en {state} cuando se vaya",pending:"Establecer {entity} en {state} cuando llegue"}}}}}}},bt={common:vt,components:ft,title:"Panel de alarma",panels:_t},yt=Object.freeze({__proto__:null,common:vt,components:ft,title:"Panel de alarma",panels:_t,default:bt}),wt={modes_short:{armed_away:"Eemal",armed_home:"Kodus",armed_night:"????seks",armed_custom_bypass:"Valikuline",armed_vacation:"Vacation"},enabled:"Lubatud",disabled:"Keelatud"},kt={time_slider:{seconds:"sek",minutes:"min",infinite:"piiranguta",none:"puudub"},editor:{ui_mode:"Kasutajaliides",yaml_mode:"Koodiredaktor",edit_in_yaml:"Edit in YAML"},table:{filter:{label:"Filter items",item:"Filter by {name}",hidden_items:"{number} {number, plural,\n  one {item is}\n  other {items are}\n} hidden"}}},At={general:{title:"??lds??tted",cards:{general:{description:"Need seaded kehtivad k??ikides valve olekutes.",fields:{disarm_after_trigger:{heading:"H??ire summutamine",description:"Peale h??ire l??ppu v??ta valvest maha miite ??ra valvesta uuesti."},enable_mqtt:{heading:"Luba MQTT juhtimine",description:"Luba nupustiku juhtimist MQTT abil."},enable_master:{heading:"Luba p??hivalvestus",description:"Loob olemi mis haldab k??iki valvestamise alasid korraga."}},actions:{setup_mqtt:"MQTT seadistamine",setup_master:"P??hivalvestuse s??tted"}},modes:{title:"Re??iimid",description:"Selles vaates seadistatakse valvestamise re??iime.",modes:{armed_away:"T??ielik valvestamine kui kedagi pole kodus. Kasutusel on k??ik andurid.",armed_home:"Valvestatud kodus ei kasuta liikumisandureid kuid v??isuksed ja aknad on valve all.",armed_night:"Valvestatud ????seks ei kasuta m????ratud liikumisandureid, v??lisperimeeter on valve all.",armed_vacation:"Armed vacation can be used as an extension to the armed away mode in case of absence for longer duration. The delay times and trigger responses can be adapted (as desired) to being distant from home.",armed_custom_bypass:"Valikulise valvestuse puhul saab m????rata kasutatavad andurid."},number_sensors_active:"{number} {number, plural,\n  one {andur}\n  other {andurit}\n} aktiiv",fields:{status:{heading:"Status",description:"Controls whether the alarm can be armed in this mode."},exit_delay:{heading:"Ooteaeg valvestamisel",description:"Viivitus enne valvestamise rakendumist."},entry_delay:{heading:"Sisenemise viivitus",description:"Viivitus sisenemisel enne h??ire rakendumist."},trigger_time:{heading:"H??ire kestus",description:"Sireeni jne. aktiveerimise kestus."}}},mqtt:{title:"MQTT s??tted",description:"MQTT parameetrite seadistamine.",fields:{state_topic:{heading:"Oleku teema (topic)",description:"Teema milles avaldatakse oleku muutused."},event_topic:{heading:"Event topic",description:"Topic on which alarm events are published"},command_topic:{heading:"K??skude teema (topic)",description:"Teema milles avaldatakse valvestamise k??sud."},require_code:{heading:"N??ua PIN koodi",description:"K??skude edastamiseks on vajalik PIN kood."},state_payload:{heading:"M????ra olekute toimeandmed",item:"M????ra oleku ''{state}'' toimeandmed"},command_payload:{heading:"M????ra k??skude toimeandmed",item:"M????ra k??su ''{command}'' toimeandmed"}}},areas:{title:"Alad",description:"Alasid kasutatakse elamise jagamiseks valvetsoonideks.",no_items:"Valvestamise alad on loomata.",table:{remarks:"Ala teave",summary:"See ala sisaldab {summary_sensors} ja {summary_automations}.",summary_sensors:"{number} {number, plural,\n  one {andur}\n  other {andurit}\n}",summary_automations:"{number} {number, plural,\n  one {automatiseering}\n  other {automatiseeringut}\n}"},actions:{add:"Lisa"}}},dialogs:{create_area:{title:"Uus ala",fields:{copy_from:"Kopeeri s??tted allikast:"}},edit_area:{title:"Ala ''{area}'' muutmine",name_warning:"NB! Nime muutmisel muutub ka olemi ID"},remove_area:{title:"Kas kustutada ala?",description:"Kas kustutada see ala? Ala kaasab andurid {sensors} ja automatiseeringud {automations} mis samuti eemaldatakse."},edit_master:{title:"P??hiala seaded"},disable_master:{title:"Kas keelata p??hiala?",description:"Kas keelata p??hiala? Ala kaasab andurid {sensors} ja automatiseeringud {automations} mis samuti eemaldatakse.."}}},sensors:{title:"Andurid",cards:{sensors:{description:"Kasutusel olevad andurid. Kl??psa olemil, et seadistada.",table:{no_items:"Andureid pole lisatud. Alustuseks lisa m??ni andur.",no_area_warning:"Sensor is not assigned to any area.",arm_modes:"Valvestamise olek",always_on:"(alati)"}},add_sensors:{title:"Andurite lisamine",description:"Lisa veel andureid. M??istlik on panna neile arusaadav nimi (friendly_name).",no_items:"Puuduvad valvestamiseks sobivad Home Assistanti olemid. Lisatavad olemid peavad olema olekuandurid (binary_sensor).",table:{type:"Detected type"},actions:{add_to_alarm:"Lisa valves??steemile",filter_supported:"Hide items with unknown type"}},editor:{title:"Andurite s??tted",description:"Muuda olemi ''{entity}'' s??tteid.",fields:{area:{heading:"Ala",description:"Vali ala kus see andur asub."},group:{heading:"Group",description:"Group with other sensors for combined triggering."},device_type:{heading:"Seadme t????p",description:"Vali anduri t????p, et automaatselt rakendada sobivad s??tted.",choose:{door:{name:"Uks",description:"Uks, v??rav v??i muu piire mida kasutatakse sisenemiseks v??i v??ljumiseks."},window:{name:"Aken",description:"Aken v??i uks mida ei kasutata sisenemiseks nagu r??duuks."},motion:{name:"Liikumisandur",description:"Kohaloleku andurid mille rakendumiste vahel on viide."},tamper:{name:"Terviklikkus",description:"Anduri muukimine v??i klaasipurustusandur jms."},environmental:{name:"Ohu andurid",description:"Suitsu v??i gaasilekke andur, veeleke jne. (ei ole seotud sissetungimisega)."},other:{name:"Tavaandur"}}},always_on:{heading:"Alati kasutusel",description:"Andur k??ivitab h??ire igas valve olekus."},modes:{heading:"Valve olekute valik",description:"Valve olekud kus seda andurit kasutatakse."},arm_on_close:{heading:"Valvesta sulgemisel",description:"Selle anduri rakendumisel valvestatakse kohe ilma viiveta."},use_exit_delay:{heading:"Use exit delay",description:"Sensor is allowed to be active when the exit delay starts."},use_entry_delay:{heading:"Use entry delay",description:"Sensor activation triggers the alarm after the entry delay rather than directly."},allow_open:{heading:"Lahkumisviivitus",description:"See andur ei aktiveeru enne lahkumisviivituse l??ppu."},auto_bypass:{heading:"Bypass automatically",description:"Exclude this sensor from the alarm if it is open while arming.",modes:"Modes in which sensor may be bypassed"},trigger_unavailable:{heading:"Andurite saadavus",description:"K??ivita h??ire kui andur muutub k??ttesaamatuks."}},actions:{toggle_advanced:"T??psemad s??tted",remove:"Eemalda",setup_groups:"Setup groups"},errors:{description:"Palun paranda j??gmised vead:",no_area:"Ala pole m????ratud",no_modes:"Anduri t????p on m????ramata, ei tea kuida kasutada",no_auto_bypass_modes:"No modes are selected for the sensor may be automatically bypassed"}}},dialogs:{manage_groups:{title:"Manage sensor groups",description:"In a sensor group multiple sensors must be activated within a time period before the alarm is triggered.",no_items:"No groups yet",actions:{new_group:"New group"}},create_group:{title:"New sensor group",fields:{name:{heading:"Name",description:"Name for sensor group"},timeout:{heading:"Time-out",description:"Time period during which consecutive sensor activations triggers the alarm."},sensors:{heading:"Sensors",description:"Select the sensors which are contained by this group."}},errors:{invalid_name:"Invalid name provided.",insufficient_sensors:"At least 2 sensors need to be selected."}},edit_group:{title:"Edit sensor group ''{name}''"}}},codes:{title:"Koodid",cards:{codes:{description:"Valvestuskoodide muutmine.",fields:{code_arm_required:{heading:"Valvestamine koodiga",description:"Valvestamiseks tuleb sisestada kood"},code_disarm_required:{heading:"Valvest vabastamise kood",description:"Valvest vabastamiseks tulem sisestada kood"},code_format:{heading:"Koodi vorming",description:"Kasutajaliidese koodi t????bid.",code_format_number:"PIN kood",code_format_text:"Salas??na"}}},user_management:{title:"Kasutajate haldus",description:"Igal kasutajal on oma juhtkood.",no_items:"Kasutajaid pole m????ratud",actions:{new_user:"Uus kasutaja"}},new_user:{title:"Lisa uus kasutaja",description:"Valves??steemi kasutaja lisamine.",fields:{name:{heading:"Nimi",description:"Kasutaja nimi."},code:{heading:"Valvestuskood",description:"Selle kasutaja kood."},confirm_code:{heading:"Koodi kinnitamine",description:"Sisesta sama kood uuesti."},can_arm:{heading:"Tohib valvestada",description:"Koodi sisestamine valvestab."},can_disarm:{heading:"Tohib valvest maha v??tta",description:"Koodi sisestamine v??tab valvest maha."},is_override_code:{heading:"Alistuskood",description:"Koodi sisestamine k??ivitab kohese h??ire"},area_limit:{heading:"Restricted areas",description:"Limit user to control only the selected areas"}},errors:{no_name:"Nimi puudub.",no_code:"Kood peab olema vhemalt 4 t??rki.",code_mismatch:"Sisestatud koodid ei klapi."}},edit_user:{title:"Muuda kasutaja s??tteid",description:"Muuda kasutaja ''{name}'' s??tteid.",fields:{old_code:{heading:"Kehtiv kood",description:"Kehtiv kood, j??ta t??hjaks kui ei taha muuta."}}}}},actions:{title:"Toimingud",cards:{notifications:{title:"Teavitused",description:"Halda saadetavaid teavitusi",table:{no_items:"Teavitusi pole veel loodud.",no_area_warning:"Action is not assigned to any area."},actions:{new_notification:"Uus teavitus"}},actions:{description:"Arenduses, m??eldud seadmete l??litamiseks.",table:{no_items:"Toiminguid pole veel m????ratud."},actions:{new_action:"Uus toiming"}},new_notification:{title:"Loo teavitus",description:"Uue teavituse loomine.",trigger:"Condition",action:"Task",options:"Options",fields:{event:{heading:"S??ndmus",description:"Mille puhul teavitada",choose:{armed:{name:"Valvestatud",description:"Valvestamine oli edukas"},disarmed:{name:"Valvest maas",description:"Valve mahav??tmine ??nnestus"},triggered:{name:"H??ire",description:"Valves??steem andis h??ire"},untriggered:{name:"Alarm not longer triggered",description:"The triggered state of the alarm has ended"},arm_failure:{name:"Valvestamine nurjus",description:"Valvestamine ei ??nnestunud m??ne anduri oleku v??i vea t??ttu"},arming:{name:"Valvestamise eelne viivitus algas",description:"Algas valvestamise eelviide, majast v??ib lahkuda."},pending:{name:"Sisenemise viide rakendus",description:"M??rgati sisenemist, h??ire rakendub peale viidet."}}},mode:{heading:"Olek",description:"Millises valve olekus teavitada (valikuline)"},title:{heading:"P??is",description:"Teavituss??numi p??is"},message:{heading:"Sisu",description:"Teavituss??numi tekst",insert_wildcard:"Insert wildcard",placeholders:{armed:"The alarm is set to {{arm_mode}}",disarmed:"The alarm is now OFF",triggered:"The alarm is triggered! Cause: {{open_sensors}}.",untriggered:"The alarm is not longer triggered.",arm_failure:"The alarm could not be armed right now, due to: {{open_sensors}}.",arming:"The alarm will be armed soon, please leave the house.",pending:"The alarm is about to trigger, disarm it quickly!"}},open_sensors_format:{heading:"Format for open_sensors wildcard",description:"Choose which sensor information in inserted in the message",options:{default:"Names and states",short:"Names only"}},arm_mode_format:{heading:"Translation for arm_mode wildcard",description:"Choose in which language the arm mode is inserted in the message"},target:{heading:"Saaja",description:"Seade millele edastada teavitus"},name:{heading:"Nimi",description:"Teavituse kirjeldus",placeholders:{armed:"Notify {target} upon arming",disarmed:"Notify {target} upon disarming",triggered:"Notify {target} when triggered",untriggered:"Notify {target} when triggering stops",arm_failure:"Notify {target} on failure",arming:"Notify {target} when leaving",pending:"Notify {target} when arriving"}},delete:{heading:"Delete automation",description:"Permanently remove this automation"}},actions:{test:"Try it"}},new_action:{title:"Loo toiming",description:"Seadme oleku muutmine valve oleku muutmisel.",fields:{event:{heading:"S??ndmus",description:"Millisel juhul k??ivitada toiming"},area:{heading:"Ala",description:"Ala millele s??ndmus rakendub, p??hiala puhul j??ta t??hjaks."},mode:{heading:"Olek",description:"Millises valve olekus toiming k??ivitada (valikuline)"},entity:{heading:"Olem",description:"Toimingu olem"},action:{heading:"Toiming",description:"Olemi toiming",no_common_actions:"Actions can only be assigned in YAML mode for the selected entities."},name:{heading:"Nimi",description:"Toimingu kirjeldus",placeholders:{armed:"Set {entity} to {state} upon arming",disarmed:"Set {entity} to {state} upon disarming",triggered:"Set {entity} to {state} when triggered",untriggered:"Set {entity} to {state} when triggering stops",arm_failure:"Set {entity} to {state} on failure",arming:"Set {entity} to {state} when leaving",pending:"Set {entity} to {state} when arriving"}}}}}}},$t={common:wt,components:kt,title:"Alarm panel",panels:At},jt=Object.freeze({__proto__:null,common:wt,components:kt,title:"Alarm panel",panels:At,default:$t}),xt={modes_short:{armed_away:"Absence",armed_home:"Pr??sence",armed_night:"Nuit",armed_custom_bypass:"Personnalis??",armed_vacation:"Vacances"},enabled:"Actif",disabled:"Inactif"},Ot={time_slider:{seconds:"sec",minutes:"min",infinite:"infini",none:"Aucune"},editor:{ui_mode:"Afficher l'??diteur visuel",yaml_mode:"Afficher l'??diteur de code",edit_in_yaml:"Editer en YAML"},table:{filter:{label:"Filtrer par items",item:"Filtrer par {name}",hidden_items:"{number} {number, plural,\n  one { item est cach??}\n  other { items sont cach??s}\n} "}}},Tt="Configuration de l' alarme",Et={general:{title:"G??n??raux",cards:{general:{description:"Ce panneau d??finit les param??tres globaux de l'alarme.",fields:{disarm_after_trigger:{heading:"D??sactivation apr??s d??clenchement",description:"Lors que le temps de fonctionnement de la sir??ne est ??coul??, d??sactive l'alarme au lieu de la r??activer."},enable_mqtt:{heading:"Utilisation avec MQTT",description:"Permet au panneau d'alarme d'??tre contr??l?? via MQTT."},enable_master:{heading:"Activation de commande centralis??e",description:"Cr??er une entit?? pour piloter toutes les zones en m??me temps."}},actions:{setup_mqtt:"Configuration MQTT",setup_master:"Configuration pricipale"}},modes:{title:"Modes",description:"Ce panneau d??finit le mode de gestion pour chaque type d'activation.",modes:{armed_away:"Ce mode sera utilis?? lorsque toutes les personnes auront quitt?? la maison. Toutes les portes et fen??tres permettant l'acc??s ?? la maison seront surveill??es, les d??tecteurs de mouvement ?? l'int??rieur de la maison seront op??rationnels.",armed_home:"Ce mode sera utilis??e lorsque des personnes sont dans la maison. Toutes les portes et fen??tres permettant l'acc??s ?? la maison seront surveill??es (p??rim??trie), les d??tecteurs de mouvement ?? l'int??rieur de la maison seront inop??rants.",armed_night:"Ce mode sera utilis?? lors du r??glage de l'alarme avant de s'endormir. Toutes les portes et fen??tres permettant l'acc??s ?? la maison seront surveill??es, et les capteurs de mouvement s??lectionn??s (ex : rez de chauss??e) dans la maison seront op??rationnels.",armed_vacation:"Ce mode peut ??tre utilis?? comme une extension du mode arm?? absent en cas d'absence pour une dur??e plus longue. Les temps de retard et les r??ponses de d??clenchement peuvent ??tre adapt??s (au choix) ?? l'??loignement du domicile.",armed_custom_bypass:"Ce mode suppl??mentaire permet de d??finir votre propre p??rim??tre de s??curit??."},number_sensors_active:"{number} {number, plural,\n  one {capteur actif}\n  other {capteurs actifs}\n} ",fields:{status:{heading:"Statut",description:"Active l'alarme dans ce mode."},exit_delay:{heading:"D??lai pour sortir",description:"Lors de l'activation, pendant cette p??riode, les capteurs ne d??clencheront pas l'alarme."},entry_delay:{heading:"D??lai pour entrer",description:"Temps d'attente avant que l'alarme ne se d??clenche apr??s d??tection d'un des capteurs."},trigger_time:{heading:"Temps de fonctionnement",description:"Temps de fonctionnement de la sir??ne"}}},mqtt:{title:"Configuration MQTT",description:"Ce panneau peut ??tre utilis?? pour la configuration de l'interface MQTT.",fields:{state_topic:{heading:"Etat des donn??es",description:"Donn??e sur laquelle les mises ?? jour d'??tat sont publi??es"},event_topic:{heading:"Ev??nement de donn??es",description:"Donn??e sur laquelle les ??v??nements d'??tat sont publi??s"},command_topic:{heading:"Commande de donn??es",description:"Donn??e sur laquelle les commandes d'armement / d??sarmement sont envoy??es."},require_code:{heading:"Code requis",description:"Exige que le code soit envoy?? avec la commande."},state_payload:{heading:"Configurer une valeur par ??tat",item:"D??finir une valeur par ??tat ''{state}''"},command_payload:{heading:"Configurer une valeur par commande",item:"D??finir une valeur par commande ''{command}''"}}},areas:{title:"Zones",description:"Les zones peuvent ??tre utilis??es pour diviser votre syst??me d'alarme en plusieurs secteurs.",no_items:"Il n'y a pas encore de zone d??finie.",table:{remarks:"Remarque",summary:"Cette zone contient des {summary_sensors} et {summary_automations}.",summary_sensors:"{number} {number, plural,\n  one {capteur}\n  other {capteurs}\n}",summary_automations:"{number} {number, plural,\n  one {automatisation}\n  other {automatisations}\n}"},actions:{add:"Ajouter"}}},dialogs:{create_area:{title:"Nouvelle zone",fields:{copy_from:"Copier les param??tres"}},edit_area:{title:"Editer la zone ''{area}''",name_warning:"Note: Changer le nom, changera l'entity ID"},remove_area:{title:"Suppression de zone?",description:"Etes vous sur de vouloir supprimer cette zone? Cette zone contient {sensors} des capteurs et {automations} automatisations, qui seront ??galement supprim??s."},edit_master:{title:"Configuration principale"},disable_master:{title:"D??sactiver la configuration principale?",description:"Etes vous sur de vouloir supprimer la configuration principale? Cette zone contient {automations} automatisations, qui seront ??galement supprim??es."}}},sensors:{title:"Capteurs",cards:{sensors:{description:"Capteurs actuellement configur??s. Cliquez sur une entit?? pour apporter des modifications.",table:{no_items:"Il n'y a pas encore de capteur ajout?? ?? l'alarme. Assurez-vous de les ajouter d'abord.",no_area_warning:"Le capteur n'est affect?? ?? aucune zone.",arm_modes:"Type d'activation",always_on:"(Toujours)"}},add_sensors:{title:"Ajouter un capteur",description:"Ajoutez plus de capteurs. Assurez-vous que vos capteurs ont un nom personnalis?? afin de pouvoir les identifier.",no_items:"Aucune entit?? HA disponible ne peut ??tre configur??e pour l'alarme. Assurez-vous d'inclure les entit??s de type binary_sensor.",table:{type:"Type de d??tection"},actions:{add_to_alarm:"Ajouter ?? l'alarme",filter_supported:"Masquer les ??l??ments de type inconnu"}},editor:{title:"Editer un capteur",description:"Configurer les param??tres du capteur ''{entity}''.",fields:{area:{heading:"Zone",description:"Selectionner une zone contenant ce capteur."},group:{heading:"Groupe",description:"Grouper avec d'autres capteurs pour un d??clenchement combin??."},device_type:{heading:"Type de d??tection",description:"Choisissez un type de d??tection pour appliquer automatiquement les param??tres appropri??s.",choose:{door:{name:"Porte",description:"Une porte, un portail ou une autre entr??e utilis??e pour entrer / sortir de la maison."},window:{name:"Fen??tre",description:"Une fen??tre, ou une porte non utilis??e pour entrer dans la maison comme un balcon."},motion:{name:"Mouvement",description:"Capteur de pr??sence ou appareil similaire pr??sentant un d??lai entre les activations."},tamper:{name:"Effraction",description:"D??tection d'arrachage du capteur, capteur de bris de verre, etc.."},environmental:{name:"D??tecteur Environmental",description:"D??tecteur de fum??e / gaz, d??tecteur de fuite, etc. (non li?? ?? la protection anti-effraction)."},other:{name:"G??n??rique"}}},always_on:{heading:"Toujours en service",description:"Le capteur doit toujours d??clencher l'alarme."},modes:{heading:"Mode possible",description:"Modes d'alarme dans lesquels ce capteur est actif."},arm_on_close:{heading:"Activer apr??s fermeture",description:"Apr??s la d??sactivation de ce capteur, le d??lai de sortie restant sera automatiquement ignor??."},use_exit_delay:{heading:"Utiliser le d??lai de sortie",description:"Le capteur sera actif ?? la fin du d??lai de sortie."},use_entry_delay:{heading:"Utiliser le d??lai d'entr??e",description:"L'activation du capteur d??clenche l'alarme apr??s le d??lai d'entr??e plut??t qu'instantan??ment."},allow_open:{heading:"Autoriser l'ouverture lors de l'activation",description:"Permet ?? ce capteur d'??tre actif, peu de temps apr??s votre d??part afin qu'il ne bloque pas l'armement."},auto_bypass:{heading:"Bypass automatique",description:"Exclut ce capteur de l'alarme s'il est ouvert lors de l'armement.",modes:"Modes dans lesquels le capteur peut ??tre  ignor??"},trigger_unavailable:{heading:"D??clenchement lorsqu'il n'est pas disponible",description:"Lorsque l'??tat du capteur devient `` indisponible '', cela activera l'alarme."}},actions:{toggle_advanced:"Param??tres avanc??es",remove:"Supprimer",setup_groups:"Configuration de Groupe"},errors:{description:"Veuillez corriger les erreurs suivantes:",no_area:"Aucune zone n'est s??lectionn??e",no_modes:"Aucun mode s??lectionn?? pour lequel le capteur doit ??tre actif",no_auto_bypass_modes:"Aucun mode n'est s??lectionn?? car le capteur peut ??tre automatiquement ignor??"}}},dialogs:{manage_groups:{title:"G??rer les groupes de capteurs",description:"Dans un groupe de capteurs, plusieurs capteurs doivent ??tre activ??s dans un laps de temps avant que l'alarme ne se d??clenche.",no_items:"Aucun groupe",actions:{new_group:"Nouveau groupe"}},create_group:{title:"Nouveau groupe de capteurs",fields:{name:{heading:"Nom",description:"Nom du nouveau groupe de capteurs"},timeout:{heading:"Laps de temps",description:"P??riode de temps pendant laquelle les activations cons??cutives du capteur d??clenchent l'alarme."},sensors:{heading:"Capteurs",description:"S??lectionnez les capteurs qui sont contenus dans ce groupe."}},errors:{invalid_name:"Nom fourni non valide.",insufficient_sensors:"Au moins 2 capteurs doivent ??tre s??lectionn??s."}},edit_group:{title:"Editer le groupe de capteurs ''{name}''"}}},codes:{title:"Codes",cards:{codes:{description:"Gestion des param??tres des codes.",fields:{code_arm_required:{heading:"Utiliser un code pour l'activation",description:"Code requis pour l'activation de l'alarme"},code_disarm_required:{heading:"Utiliser un code pour la d??sactivation",description:"Code requis pour la d??sactivation de l'alarme"},code_format:{heading:"Format du code",description:"D??finit le type d'entr??e pour la carte d'alarme Lovelace.",code_format_number:"pincode",code_format_text:"password"}}},user_management:{title:"Gestion des utilisateurs",description:"Chaque utilisateur a son propre code pour activer / d??sactiver l'alarme.",no_items:"Il n'y a aucun utilisateur de d??fini",actions:{new_user:"Nouvel utilisateur"}},new_user:{title:"Cr??er un nouvel utilisateur",description:"Des utilisateurs peuvent ??tre cr????s pour donner acc??s au fonctionnement de l'alarme.",fields:{name:{heading:"Nom",description:"Nom de l'utilisateur."},code:{heading:"Code",description:"Code personnel de l'utilisateur."},confirm_code:{heading:"Confirmation du code",description:"R??p??ter le  code."},can_arm:{heading:"Demande de code pour l'activation",description:"Entrer ce code pour activer l'alarme."},can_disarm:{heading:"Demande de code pour d??sactivation",description:"Entrer ce code pour d??sactiver l'alarme."},is_override_code:{heading:"Code de s??curit??",description:"La saisie de ce code forcera l'activation l'alarme."},area_limit:{heading:"Zones Restreintes",description:"L'utilisateur ne peut contr??ler uniquement les zones s??lectionn??es"}},errors:{no_name:"Aucun nom saisi.",no_code:"Le code doit contenir 4 caract??res/chiffres minimum.",code_mismatch:"Les codes sont diff??rents."}},edit_user:{title:"Editer l'utilisateur",description:"Changer la  configuration pour l'utilisateur ''{name}''.",fields:{old_code:{heading:"Code utilis??",description:"Code actuel, laissez vide pour ne rien changer."}}}}},actions:{title:"Actions",cards:{notifications:{title:"Notifications",description:"?? l'aide de ce panneau, vous pouvez g??rer les notifications ?? envoyer lors d'un ??v??nement d'alarme",table:{no_items:"Il n'y a aucune notification de cr????e.",no_area_warning:"L'action n'est affect??e ?? aucune zone."},actions:{new_notification:"Nouvelle notification"}},actions:{description:"Ce panneau est  utilis?? pour changer d'??tat les appareils de votre choix.",table:{no_items:"Il n'y a aucune action de cr??er."},actions:{new_action:"Nouvelle action"}},new_notification:{title:"Cr??er une notification",description:"Cr??er une nouvelle notification.",trigger:"Condition",action:"Action",options:"Options",fields:{event:{heading:"Ev??nement",description:"D??termine quand la notification doit ??tre envoy??e",choose:{armed:{name:"Alarme activ??e ",description:"l'alarme s'est correctement activ??e"},disarmed:{name:"Alarme d??sactiv??e",description:"L'alarme est d??sactiv??e"},triggered:{name:"Alarme d??clench??e",description:"L'alarme est d??clench??e"},untriggered:{name:"L'alarme n'est plus d??clench??e",description:"Le temps de d??clenchement de l'alarme est termin??"},arm_failure:{name:"Armement impossible",description:"L'armement est impossible d?? ?? un ou plusieurs capteurs"},arming:{name:"D??lai de sortie activ??",description:"Le d??lai de sortie est activ??, vous devez quitter la maison."},pending:{name:"D??lai d'entr??e activ??",description:"Le d??lai d'entr??e est activ??, sans action de d??sarmement, l'alarme va se d??clencher."}}},mode:{heading:"Mode",description:"Limite la notification ?? un mode sp??cifique (optionnel)"},title:{heading:"Titre",description:"Titre du message de la notification"},message:{heading:"Message",description:"Contenu du message de la notification",insert_wildcard:"Inserer la wildcard",placeholders:{armed:"L'alarme est r??gl??e sur {{arm_mode}}",disarmed:"L'alarme est maintenant d??sactiv??e",triggered:"L'alarme est d??clench??e! En cause: {{open_sensors}}.",untriggered:"L'alarme n'est plus d??clench??e.",arm_failure:"L'alarme n'a pas pu ??tre arm??e pour le moment, en cause: {{open_sensors}}.",arming:"L'alarme sera bient??t arm??e, veuillez quitter la maison.",pending:"L'alarme est sur le point de se d??clencher, d??sarmez-la rapidement!"}},open_sensors_format:{heading:"Format pour les  'open_sensors wildcard'",description:"Choisissez les informations du capteur ?? ins??rer dans le message",options:{default:"Noms et ??tats",short:"Noms seulement"}},arm_mode_format:{heading:"Traduction pour 'arm_mode wildcard'",description:"Choisissez dans quelle langue le mode d'armement est ins??r?? dans le message"},target:{heading:"Cible",description:"Appareil recevant le message"},name:{heading:"Nom",description:"Description de la notification",placeholders:{armed:"Notification ?? l'armement de : {target}",disarmed:"Notification au d??sarmement de : {target}",triggered:"Notification au d??clenchement de : {target}",untriggered:"Notification {target}, quand le temps de d??clenchement est termin??",arm_failure:"Notification en cas d'??chec de : {target}",arming:"Notification en quittant de : {target}",pending:"Notification au retour de : {target}"}},delete:{heading:"Supprimer l'automatisme",description:"Supprimer d??finitivement cet automatisme"}},actions:{test:"Essai"}},new_action:{title:"Cr??er une action",description:"Ce panneau peut ??tre utilis?? pour commuter un appareil lorsque l'??tat de l'alarme change.",fields:{event:{heading:"Ev??nement",description:"D??termine quand l'action doit ??tre ex??cut??e"},area:{heading:"Zone",description:"Zone pour laquelle l'??v??nement s'applique, laissez vide pour s??lectionner l'alarme globale."},mode:{heading:"Mode",description:"Limite l'action ?? un mode sp??cifique (optionnel)"},entity:{heading:"Entit??",description:"Entit?? sur laquelle effectuer une action"},action:{heading:"Action",description:"Action ?? ex??cuter sur l'entit??",no_common_actions:"Les actions ne peuvent ??tre affect??es qu'en mode YAML pour les entit??s s??lectionn??es."},name:{heading:"Nom",description:"Description de  l'action",placeholders:{armed:"Mettre {entity} ?? {state} lors de l'armement",disarmed:"Mettre {entity} ?? {state} lors du d??sarmement",triggered:"Mettre {entity} ?? {state} lors du d??clenchement de l'alarme",untriggered:"Mettre {entity} ?? {state} quand le temps de d??clenchement s'arr??te",arm_failure:"Mettre {entity} ?? {state} en cas d'??chec de l'armement",arming:"Mettre {entity} ?? {state} lors du d??part de la maison",pending:"Mettre {entity} ?? {state} lors du retour ?? la maison"}}}}}}},zt={common:xt,components:Ot,title:Tt,panels:Et},St=Object.freeze({__proto__:null,common:xt,components:Ot,title:Tt,panels:Et,default:zt}),Ct={modes_short:{armed_away:"Fuori casa",armed_home:"In casa",armed_night:"Notte",armed_custom_bypass:"Personalizzato",armed_vacation:"Vacanza"},enabled:"Abilitato",disabled:"Disabilitato"},Mt={time_slider:{seconds:"sec",minutes:"min",infinite:"infinito",none:"niente"},editor:{ui_mode:"Passa a UI",yaml_mode:"Passa a YAML",edit_in_yaml:"Modifica in YAML"},table:{filter:{label:"Filtra elementi",item:"Filtra per {name}",hidden_items:"{number} {number, plural,\n  one {item is}\n  other {items are}\n} hidden"}}},Nt={general:{title:"Generale",cards:{general:{description:"Questo pannello definisce alcune impostazioni da applicare alle modalit?? di allarme.",fields:{disarm_after_trigger:{heading:"Disattiva allarme dopo l'attivazione",description:"Dopo che il tempo di attivazione ?? scaduto, disattivare l'allarme invece di tornare allo stato inserito."},enable_mqtt:{heading:"Abilita MQTT",description:"Permetti al pannello allarme di essere controllato attraverso MQTT."},enable_master:{heading:"Abilita Allarme Master",description:"Crea una entit?? per controllare tutte le aree simultaneamente."}},actions:{setup_mqtt:"Configurazione MQTT",setup_master:"Configurazione Master"}},modes:{title:"Modalit??",description:"Questo pannello pu?? essere usato per impostare le modalit?? dell'allarme.",modes:{armed_away:"Modalit?? 'fuori casa': da utilizzare quando tutte le persone lasciano la casa. Tutti i sensori di porte e finestre che consentono l'accesso alla casa saranno attivi, cos?? come i sensori di movimento all'interno della casa.",armed_home:"Modalit?? 'in casa': da utilizzare quando si attiva l'allarme mentre le persone sono in casa. Tutti i sensori di porte e finestre che consentono l'accesso alla casa saranno attivi, ma non i sensori di movimento all'interno della casa.",armed_night:"Modalit?? 'notte': da utilizzare quando si imposta la sveglia prima di andare a dormire. Tutti i sensori di porte e finestre che consentono l'accesso alla casa saranno attivi e sensori di movimento selezionati (ad esempio al piano di sotto) nella casa.",armed_vacation:"Modalit?? 'vacanza': da utlizzare come estensione della modalit?? 'fuori casa' in caso di assenza prolungata. I ritardi e i tempi di attivazione possono essere adattati per essere distanti da casa.",armed_custom_bypass:"Modalit?? 'personalizzato': da utilizzare per definire una modalit?? di allarme specifica per le esigenze dell'utilizzatore."},number_sensors_active:"{number} {number, plural,\n  one {sensor}\n  other {sensors}\n} active",fields:{status:{heading:"Stato",description:"Definisce quando l'allarme pu?? essere armato in questa modalit??."},exit_delay:{heading:"Tempo di preattivazione",description:"Quando si attiva l'allarme, entro questo periodo di tempo i sensori non attiveranno ancora l'allarme."},entry_delay:{heading:"Ritardo di attivazione",description:"Tempo di ritardo fino allo scatto dell'allarme dopo l'attivazione di uno dei sensori."},trigger_time:{heading:"Tempo di attivazione",description:"Tempo durante il quale suoner?? la sirena."}}},mqtt:{title:"Configurazione MQTT",description:"Questo pannello pu?? essere usato per le impostazioni MQTT.",fields:{state_topic:{heading:"Topic di stato",description:"Topic su cui vengono pubblicati gli aggiornamenti di stato"},event_topic:{heading:"Event topic",description:"opic su cui vengono pubblicati gli eventi"},command_topic:{heading:"Topic di comando",description:"Topic su cui vengono inviati i comandi di inserimento / disinserimento."},require_code:{heading:"Richiedi Codice",description:"Richiedi il codice da inviare con il comando."},state_payload:{heading:"Configura payload per stato",item:"Definisci un payload per lo stato ''{state}''"},command_payload:{heading:"Configura payload per comando",item:"Definisci un payload per il comando ''{command}''"}}},areas:{title:"Aree",description:"Le aree possono essere utilizzate per dividere il tuo allarme in pi?? sezioni.",no_items:"Non ci sono ancora aree definite.",table:{remarks:"Commenti",summary:"Questa area contiene {summary_sensors} e {summary_automations}.",summary_sensors:"{number} {number, plural,\n  one {sensor}\n  other {sensors}\n}",summary_automations:"{number} {number, plural,\n  one {automation}\n  other {automations}\n}"},actions:{add:"Add"}}},dialogs:{create_area:{title:"Nuova area",fields:{copy_from:"Copia impostazioni da"}},edit_area:{title:"Modifica Area ''{area}''",name_warning:"Nota: cambiare il nome modificher?? l'entity ID"},remove_area:{title:"Rimuovi Area?",description:"Sei sicuro che vuoi rimuovere questa area? Questa area contiene {sensors} sensori e {automations} automazioni, che verranno anch'esse rimossi."},edit_master:{title:"Configura Master"},disable_master:{title:"Disabilita Master?",description:"Sei sicuro che vuoi rimuovere l'allarme master? Questa area contiene {automations} automazioni, che verranno eliminate con questa azione."}}},sensors:{title:"Sensori",cards:{sensors:{description:"Sensori attualmente configurati. Clicca sull'entit?? per modificare.",table:{no_items:"Non ci sono ancora sensori aggiunti a questo allarme. Assicurati di aggiungerli prima.",no_area_warning:"Sensore non assegnato a nessuna area.",arm_modes:"Modalit?? di attivazione",always_on:"(Sempre)"}},add_sensors:{title:"Aggiungi Sensori",description:"Aggiungi pi?? sensori. Assicurati che i sensori abbiano un friendly_name (nome amichevole), in modo da identificarli pi?? facilmente.",no_items:"Non ci sono entit?? disponibili che possono essere configurate con l'allarme. Assicurati di includere entit?? del tipo binary_sensor (sensore binario).",table:{type:"Tipologia Innesco"},actions:{add_to_alarm:"aggiungi all'allarme",filter_supported:"Nascondi elementi con tipologia sconosciuta"}},editor:{title:"Modifica Sensore",description:"Configura le impostazioni del sensore ''{entity}''.",fields:{area:{heading:"Area",description:"Seleziona una area che contiene questo sensore."},group:{heading:"Gruppo",description:"Raggruppa con altri sensori per inneschi combinati."},device_type:{heading:"Tipologia Dispositivo",description:"Scegli la tipologia del dispositivo per applicare le impostazioni appropriate.",choose:{door:{name:"Porta",description:"Una porta, cancello o altro ingresso che ?? usato per entrare/lasciare casa."},window:{name:"Finestra",description:"Una finestra, o una porta-finestra non usata per accedere alla casa."},motion:{name:"Movimento",description:"Sensore di presenza o simile che ha un ritardo tra le attivazioni."},tamper:{name:"Vibrazione",description:"Rilaveamento di vibrazione, rottura vetri, ecc."},environmental:{name:"Ambientale",description:"Rilevatori fumo/gas, ecc. (non correlati alla protezione intrusi)."},other:{name:"Generico"}}},always_on:{heading:"Sempre attivo",description:"Il sensore attiver?? sempre l'allarme."},modes:{heading:"Modalit?? attive",description:"Modalit?? di allarme in cui il sensore risulta collegato."},arm_on_close:{heading:"Attiva dopo chisura after closing",description:"Dopo la disattivazione di questo sensore il ritardo rimanente verr?? automaticamente skippato."},use_exit_delay:{heading:"Usa Ritardo d'uscita",description:"Sensore che pu?? rimanre attivo mentre il ritardo di uscita ?? in corso."},use_entry_delay:{heading:"Usa ritardo in ingresso",description:"Sensore che innesca l'allarme dopo il ritardo in ingresso anzich?? direttamente."},allow_open:{heading:"Permetti apertura",description:"Consentire a questo sensore di rimanere attivo poco dopo essere usciti."},auto_bypass:{heading:"Bypass automatico",description:"Escludi questo sensore dall'allarme se ?? aperto durante l'attivazione.",modes:"Modalit?? in cui il sensore pu?? essere bypassato"},trigger_unavailable:{heading:"Fai scattare l'allarme quando non disponibile",description:"L'allarme scatter?? quando lo stato del sensore diverr?? 'non disponibile'."}},actions:{toggle_advanced:"Impostazione avanzate",remove:"Rimuovi",setup_groups:"Setup gruppi"},errors:{description:"Per favore correggi i seguenti errori:",no_area:"Nessuna area ?? selezionata",no_modes:"Nessuna modalit?? ?? selezionata per la quale il sensore dovrebbe essere attivo",no_auto_bypass_modes:"Nessuna modalit?? ?? selezionata per il sensore che pu?? essere automaticamente bypassato"}}},dialogs:{manage_groups:{title:"Gestisci gruppi sensori",description:"In un gruppo sensori pi?? sensori devono essere attivi in un intevallo di tempo prima che l'allarme sia innescato.",no_items:"Nessun gruppo",actions:{new_group:"Nuovo gruppo"}},create_group:{title:"Nuovo gruppo sensori",fields:{name:{heading:"Nome",description:"Nome del gruppo sensori"},timeout:{heading:"Time-out",description:"Periodo di tempo durante il quale l'attivazione consecutiva innesca l'allarme."},sensors:{heading:"Sensori",description:"Seleziona i sensori che fanno parte di questo gruppo."}},errors:{invalid_name:"Nome non valido.",insufficient_sensors:"Almeno 2 sensori devono essere selezionati."}},edit_group:{title:"Modifica gruppo sensori ''{name}''"}}},codes:{title:"Codici",cards:{codes:{description:"Modifica le impostazioni dei codici.",fields:{code_arm_required:{heading:"Usa codice d'attivazione",description:"Richiedi un codice per attivare l'allarme"},code_disarm_required:{heading:"Usa codice di disattivazione",description:"Richiedi un codice per disattivare l'allarme"},code_format:{heading:"Formato del codice",description:"Imposta il tipo di codice da digitare nella card di Lovelace.",code_format_number:"codice numerico",code_format_text:"password"}}},user_management:{title:"Gestione utente",description:"Ogni utente ha il suo codice per attivare/disattivare l'allarme.",no_items:"Non ?? stato creato nessun utente per ora",actions:{new_user:"Nuovo utente"}},new_user:{title:"Crea nuovo utente",description:"Gli utenti potranno operare con l'allarme.",fields:{name:{heading:"Nome",description:"Nome dell'utente."},code:{heading:"Codice operativo",description:"Codice che utilizzer?? quest'utente."},confirm_code:{heading:"Ripeti codice operativo",description:"Ripeti il codice operativo scelto."},can_arm:{heading:"Utilizza codice per attivare l'allarme",description:"Utilizza codice per attivare l'allarme"},can_disarm:{heading:"Utilizza codice per disattivare l'allarme",description:"Utilizza codice per disattivare l'allarme"},is_override_code:{heading:"E' un codice di forzatura",description:"Inserendo questo codice forzerai lo stato di attivazione dell'allarme"},area_limit:{heading:"Aree riservate areas",description:"Limita l'utente a controllare solo le aree selezionate"}},errors:{no_name:"Non hai inserito il nome.",no_code:"Il codice deve avere almeno 4 numeri o caratteri.",code_mismatch:"Il codice scelto non combacia, verifica il codice inserito."}},edit_user:{title:"Modifica Utente",description:"Cambia impostazioni per l'utente ''{name}''.",fields:{old_code:{heading:"Modifica Codice",description:"Codice attuale, lascia vuoto per non modificare."}}}}},actions:{title:"Azioni",cards:{notifications:{title:"Notifiche",description:"Con questo pannello puoi gestire le notifiche da inviare quanto accade un determinato evento",table:{no_items:"Non ?? stata creata nessuna notifica per ora.",no_area_warning:"Azione non assegnata a nessuna."},actions:{new_notification:"Nuova notifica"}},actions:{description:"Questo pannello ?? in fase di sviluppo. Sar?? usato per cambiare lo stato di una o pi?? entit??.",table:{no_items:"Non ?? stata creata nessuna azione per ora."},actions:{new_action:"Nuova azione"}},new_notification:{title:"Crea notifica",description:"Crea una nuova notifica.",trigger:"Condizione",action:"Azione",options:"Opzioni",fields:{event:{heading:"Evento",description:"Quando questa notifica deve essere inviata",choose:{armed:{name:"Allarme attivato",description:"L'allarme ?? attivo"},disarmed:{name:"Allarme disattivato",description:"L'allarme ?? disattivato"},triggered:{name:"Allarme innescato",description:"L'allarme ?? innescato"},untriggered:{name:"Allarme non innescato",description:"L'allarme non ?? pi?? innescato"},arm_failure:{name:"Impossibile attivare",description:"L'attivazione dell'allarme non ?? riuscita a casa di uno o pi?? sensori aperti"},arming:{name:"Ritardo d'uscita partito",description:"Ritardo d'uscita partito, preparati a lasciare la casa."},pending:{name:"Ritardo in ingresso partito",description:"Ritardo in ingresso partito, l'allarme verr?? innescato a breve."}}},mode:{heading:"Modalit??",description:"Limita ad una specifica modalit?? di allarme (opzionale)"},title:{heading:"Titolo",description:"Titolo per il messaggio di notifica"},message:{heading:"Messaggio",description:"Contenuto del messaggio di notifica",insert_wildcard:"Inserisci wildcard",placeholders:{armed:"L'allarme ?? impostato in {{arm_mode}}",disarmed:"L'allarme ?? disattivatoF",triggered:"L'allarme ?? stato innescato! Causa: {{open_sensors}}.",untriggered:"The alarm is not longer triggered.",arm_failure:"L'allarme non pu?? essere attivato adesso. Causa: {{open_sensors}}.",arming:"L'allarme verr?? attivato a breve, per favore lascia la casa.",pending:"L'allarme sta per essere innescato, disattivalo velocemente!"}},open_sensors_format:{heading:"Formato per la wildcard open_sensors",description:"Scegli quale informazione ?? inserita nel messaggio",options:{default:"Nomi e stati",short:"Nomi soltanto"}},arm_mode_format:{heading:"Traduzione per le wildcard per arm_mode",description:"Scegli la lingua in cui ?? scritto il messaggio"},target:{heading:"Destinatario",description:"Dispositivo a cui inviare il messaggio di notifica"},name:{heading:"Nome",description:"Descrizione della notifica",placeholders:{armed:"Notifica {target} in attivazione",disarmed:"Notifica {target} in disattivazione",triggered:"Notifica {target} quando innescato",untriggered:"Notifica {target} quando l'innesco termina",arm_failure:"Notifica {target} quando impossibile attivare",arming:"Notifica {target} in uscita",pending:"Notifica {target} in ingresso"}},delete:{heading:"Elimina automazione",description:"Elimina l'automazione permanentemente"}},actions:{test:"Prova"}},new_action:{title:"Crea azione",description:"Questo pannello pu?? essere usato per cambiare lo stato di un entit?? quando lo stato dell'allarme cambia.",fields:{event:{heading:"Evento",description:"Quando questa azione deve essere eseguita"},area:{heading:"Area",description:"Area nella quale l'evento avviene, lascia vuoti per selezionare l'intero allarme."},mode:{heading:"Modalit??",description:"Limita ad una specifica modalit?? di allarme (opzionale)"},entity:{heading:"Entit??",description:"Entit?? su cui eseguire l'azione"},action:{heading:"Azione",description:"Azione che deve eseguire l'entit??",no_common_actions:"Le azioni possono essere definite solo in YAML mode per le entit?? selezionate."},name:{heading:"Nome",description:"Descrizione dell'azione",placeholders:{armed:"Imposta {entity} su {state} in attivazione",disarmed:"Imposta {entity} su {state} in disattivazione",triggered:"Imposta {entity} su {state} in innesco",untriggered:"Imposta {entity} su {state} quando l'innesco termina",arm_failure:"Imposta {entity} su {state} quando ?? impossibile attivare",arming:"Imposta {entity} su {state} in uscita",pending:"Imposta {entity} su {state} in entrata"}}}}}}},Dt={common:Ct,components:Mt,title:"Pannello Allarme",panels:Nt},Pt=Object.freeze({__proto__:null,common:Ct,components:Mt,title:"Pannello Allarme",panels:Nt,default:Dt}),Lt={modes_short:{armed_away:"Afwezig",armed_home:"Thuis",armed_night:"Nacht",armed_custom_bypass:"Aangepast",armed_vacation:"Vakantie"},enabled:"Actief",disabled:"Inactief"},qt={time_slider:{seconds:"sec",minutes:"min",infinite:"oneindig",none:"geen"},editor:{ui_mode:"Naar UI",yaml_mode:"Naar YAML",edit_in_yaml:"In YAML bewerken"},table:{filter:{label:"Items filteren",item:"Filter op {name}",hidden_items:"{number} {number, plural,\n  one {item is}\n  other {items zijn}\n} verborgen"}}},Rt={general:{title:"Algemeen",cards:{general:{description:"Dit paneel definieert enkele instellingen die van toepassing zijn op alle inschakelmodi.",fields:{disarm_after_trigger:{heading:"Uitschakelen na activatie",description:"Nadat de triggertijd is verstreken, schakelt u het alarm uit in plaats van terug te keren naar de ingeschakelde toestand."},enable_mqtt:{heading:"MQTT inschakelen",description:"Toestaan het alarmpaneel via MQTT aan te sturen."},enable_master:{heading:"Master alarm inschakelen",description:"Cre??ert een entiteit om alle gebieden tegelijkertijd te besturen."}},actions:{setup_mqtt:"MQTT Configuratie",setup_master:"Master configuratie"}},modes:{title:"Modi",description:"Dit paneel kan worden gebruikt om de inschakelmodi van het alarm in te stellen.",modes:{armed_away:"De afwezigheidsmodus wordt gebruikt als alle mensen het huis hebben verlaten. Alle deuren en ramen die toegang geven tot het huis worden bewaakt, evenals bewegingssensoren in het huis.",armed_home:"De thuismodus wordt gebruikt bij het instellen van het alarm terwijl er mensen in huis zijn. Alle deuren en ramen die toegang geven tot het huis worden bewaakt, maar bewegingssensoren in het huis worden niet gebruikt.",armed_night:"De nachtmodus wordt gebruikt bij het instellen van het alarm voordat u gaat slapen. Alle deuren en ramen die toegang geven tot het huis worden bewaakt, en geselecteerde bewegingssensoren (beneden) in het huis.",armed_vacation:"De vakantiemodus dient voor afwezigheid voor langere duur. Er kunnen desgewenst andere vertragingstijden en acties worden ingesteld die beter passen bij de situatie.",armed_custom_bypass:"Een extra modus om uw eigen beveiligingsperimeter te defini??ren."},number_sensors_active:"{number} {number, plural,\n  one {sensor}\n  other {sensoren}\n} ingesteld",fields:{status:{heading:"Status",description:"Stel in of het alarm op deze modus kan worden ingesteld."},exit_delay:{heading:"Vertrek vertraging",description:"Bij het inschakelen van het alarm zullen de sensoren binnen deze tijdsperiode het alarm nog niet activeren."},entry_delay:{heading:"Binnenkomst vertraging",description:"Vertragingstijd totdat het alarm afgaat nadat een van de sensoren is geactiveerd."},trigger_time:{heading:"Activatie tijd",description:"Tijd waarin het alarm in de geactiveerde toestand blijft na activatie."}}},mqtt:{title:"MQTT configuratie",description:"Dit paneel kan worden gebruikt voor configuratie van de MQTT-interface.",fields:{state_topic:{heading:"Toestand topic",description:"Topic waarop statusupdates worden gepubliceerd"},event_topic:{heading:"Gebeurtenis topic",description:"Topic waarop gebeurtenissen worden gepubliceerd"},command_topic:{heading:"Commando topic",description:"Topic waarop commando's voor in- / uitschakelen worden verzonden."},require_code:{heading:"Vereis code",description:"Vereis dat de code wordt verzonden met de opdracht."},state_payload:{heading:"Configureer de payload per toestand",item:"Definieer een payload voor toestand ''{state}''"},command_payload:{heading:"Configureer een payload per commando",item:"Definieer een payload voor commando ''{command}''"}}},areas:{title:"Gebieden",description:"Gebieden kunnen worden gebruikt om uw alarmsysteem in meerdere compartimenten op te delen.",no_items:"Er zijn nog geen gebieden gedefinieerd.",table:{remarks:"Opmerkingen",summary:"Dit gebied bevat {summary_sensors} en {summary_automations}.",summary_sensors:"{number} {number, plural,\n  one {sensor}\n  other {sensoren}\n}",summary_automations:"{number} {number, plural,\n  one {automatisering}\n  other {automatiseringen}\n}"},actions:{add:"Toevoegen"}}},dialogs:{create_area:{title:"Nieuw gebied",fields:{copy_from:"Kopieer instellingen van"}},edit_area:{title:"Bewerken van gebied ''{area}''",name_warning:"Opmerking: als u de naam wijzigt, wordt de entiteits-ID gewijzigd"},remove_area:{title:"Gebied verwijderen?",description:"Weet u zeker dat u dit gebied wilt verwijderen? Dit gebied bevat {sensors} sensoren en {automations} automatiseringen, die ook zullen worden verwijderd."},edit_master:{title:"Master configuratie"},disable_master:{title:"Master uitschakelen?",description:"Weet u zeker dat u het master alarm wilt verwijderen? Dit gebied bevat {automations} automatiseringen, die met deze actie worden verwijderd."}}},sensors:{title:"Sensoren",cards:{sensors:{description:"Momenteel geconfigureerde sensoren. Klik op een entiteit om wijzigingen aan te brengen.",table:{no_items:"Er zijn nog geen sensoren aan het alarm toegevoegd. Zorg ervoor dat u ze eerst toevoegt.",no_area_warning:"Sensor is niet aan een gebied toegewezen.",arm_modes:"Inschakelmodi",always_on:"(Altijd)"}},add_sensors:{title:"Voeg sensoren toe",description:"Voeg meer sensoren toe. Zorg ervoor dat uw sensoren een duidelijke naam hebben, zodat u ze kunt identificeren.",no_items:"Er zijn geen beschikbare HA-entiteiten die voor het alarm kunnen worden geconfigureerd. Zorg ervoor dat u entiteiten van het type binary_sensor opneemt.",table:{type:"Gedetecteerd type"},actions:{add_to_alarm:"Voeg aan alarm toe",filter_supported:"Verberg items met onbekend type"}},editor:{title:"Wijzig Sensor",description:"Configureren van de sensorinstellingen van ''{entity}''.",fields:{area:{heading:"Gebied",description:"Selecteer een gebied dat deze sensor bevat."},group:{heading:"Groep",description:"Groepeer met andere sensors voor gecombineerde triggers."},device_type:{heading:"Apparaat Type",description:"Kies een apparaattype om automatisch de juiste instellingen toe te passen.",choose:{door:{name:"Deur",description:"Een deur, poort of andere ingang die wordt gebruikt voor het betreden/verlaten van de woning."},window:{name:"Raam",description:"Een raam of een deur die niet wordt gebruikt om het huis binnen te komen, zoals een balkon."},motion:{name:"Beweging",description:"Aanwezigheidssensor of soortgelijk apparaat met een vertraging tussen activeringen."},tamper:{name:"Sabotage",description:"Detector van verwijdering van sensorkap, glasbreuksensor, enz."},environmental:{name:"Klimaat",description:"Rook/gassensor, lekkage detector, etc. (niet gerelateerd aan inbraakbeveiliging)."},other:{name:"Algemeen"}}},always_on:{heading:"Altijd aan",description:"Een sensor moet altijd het alarm activeren."},modes:{heading:"Ingeschakelde modi",description:"Alarmmodi waarin deze sensor actief is."},arm_on_close:{heading:"Inschakelen na sluiten",description:"Na deactivering van deze sensor wordt de resterende vertrek vertraging automatisch overgeslagen."},use_exit_delay:{heading:"Vertragingstijd bij vertrek",description:"De sensor mag actief zijn wanneer de vertrekperiode wordt gestart."},use_entry_delay:{heading:"Vertragingstijd bij binnenkomst",description:"Als de sensor actief wordt, activeert deze het alarm pas na de vertragingstijd voor binnenkomst."},allow_open:{heading:"Actieve toestand toestaan bij inschakelen",description:"Initi??le toestand bij inschakelen van het alarm wordt genegeerd."},auto_bypass:{heading:"Automatisch omzeilen",description:"Elimineer de sensor als deze actief is tijdens het inschakelen van het alarm.",modes:"Modi waarin de sensor automatisch omzeild mag worden"},trigger_unavailable:{heading:"Activeren indien niet beschikbaar",description:"Wanneer de sensorstatus 'niet beschikbaar' wordt, wordt de sensor geactiveerd."}},actions:{toggle_advanced:"Geavanceerde instellingen",remove:"Verwijder",setup_groups:"Configureer groepen"},errors:{description:"Corrigeer de volgende fouten:",no_area:"Er is geen gebied geselecteerd",no_modes:"Er zijn geen modi geselecteerd waarvoor de sensor actief zou moeten zijn",no_auto_bypass_modes:"Er zijn geen modi geselecteerd waarin de sensor automatisch omzeild mag worden"}}},dialogs:{manage_groups:{title:"Beheer sensorgroepen",description:"In een sensorgroep moeten twee of meer sensoren worden geactiveerd binnen een tijdsperiode voordat het alarm wordt geactiveerd.",no_items:"Nog geen groepen ingesteld.",actions:{new_group:"Nieuwe groep"}},create_group:{title:"Nieuwe sensorgroep",fields:{name:{heading:"Naam",description:"Naam voor sensorgroep."},timeout:{heading:"Time-out",description:"Tijdsperiode waarin meerdere sensoren moeten worden geactiveerd om het alarm te activeren."},sensors:{heading:"Sensoren",description:"Selecteer de sensoren die deel moeten uitmaken van deze groep."}},errors:{invalid_name:"Verkeerde naam opgegeven.",insufficient_sensors:"Tenminste 2 sensoren moeten worden geselecteerd."}},edit_group:{title:"Bewerk sensorgroep ''{name}''"}}},codes:{title:"Codes",cards:{codes:{description:"Wijzig de instellingen voor de code.",fields:{code_arm_required:{heading:"Gebruik inschakel code",description:"Vereist een code voor het inschakelen van het alarm"},code_disarm_required:{heading:"Gebruik uitschakelcode",description:"Vereist een code om het alarm uit te schakelen"},code_format:{heading:"Code opmaak",description:"Stelt het invoertype in voor de Lovelace alarmkaart.",code_format_number:"pincode",code_format_text:"wachtwoord"}}},user_management:{title:"Gebruikersbeheer",description:"Elke gebruiker heeft zijn eigen code om het alarm in/uit te schakelen.",no_items:"Er zijn nog geen gebruikers",actions:{new_user:"nieuwe gebruiker"}},new_user:{title:"Maak een nieuwe gebruiker aan",description:"Gebruikers kunnen worden aangemaakt om toegang te verlenen tot het bedienen van het alarm.",fields:{name:{heading:"Naam",description:"Naam van de gebruiker."},code:{heading:"Code",description:"Code voor deze gebruiker."},confirm_code:{heading:"Bevestig de code",description:"Herhaal de code."},can_arm:{heading:"Code toestaan voor inschakeling",description:"Door deze code in te voeren, wordt het alarm geactiveerd"},can_disarm:{heading:"Code toestaan voor uitschakelen",description:"Door deze code in te voeren, wordt het alarm gedeactiveerd"},is_override_code:{heading:"Is een forceer code",description:"Als u deze code invoert, wordt het alarm geforceerd geactiveerd"},area_limit:{heading:"Beperk gebieden",description:"Beperk de gebruiker tot controle over alleen de gelesecteerde gebieden"}},errors:{no_name:"Geen naam opgegeven.",no_code:"Code moet minimaal 4 tekens/cijfers bevatten.",code_mismatch:"De codes komen niet overeen."}},edit_user:{title:"Wijzig Gebruiker",description:"Wijzig de configuratie voor gebruiker ''{name}''.",fields:{old_code:{heading:"Huidige code",description:"Huidige code, laat leeg om ongewijzigd te laten."}}}}},actions:{title:"Acties",cards:{notifications:{title:"Meldingen",description:"Met dit paneel kunt u meldingen beheren die moeten worden verzonden tijdens een bepaalde alarmgebeurtenis",table:{no_items:"Er zijn nog geen notificaties aangemaakt.",no_area_warning:"Actie is niet toegewezen aan een gebied."},actions:{new_notification:"nieuwe melding"}},actions:{description:"Dit paneel kan worden gebruikt om een apparaat te schakelen wanneer de status van het alarm veranderd.",table:{no_items:"Er zijn nog geen acties gemaakt."},actions:{new_action:"nieuwe actie"}},new_notification:{title:"Notificatie instellen",description:"Ontvang een notificatie wanneer het alarm wordt in- of uitgeschakeld, wordt geactiveerd etc.",trigger:"Conditie",action:"Taak",options:"Opties",fields:{event:{heading:"Gebeurtenis",description:"Wanneer moet de notificatie worden verzonden",choose:{armed:{name:"Alarm is ingeschakeld",description:"Het alarm is succesvol ingeschakeld"},disarmed:{name:"Alarm is uitgeschakeld",description:"Het alarm is uitgeschakeld"},triggered:{name:"Alarm is afgegaan",description:"Het alarm gaat af"},untriggered:{name:"Gestopt na afgaan",description:"Het alarm gaat niet meer af"},arm_failure:{name:"Kan niet inschakelen",description:"Het inschakelen van het alarm is mislukt vanwege een of meerdere blokkerende sensoren"},arming:{name:"Vertrek",description:"Vertrekvertraging ingegaan, tijd om het huis te verlaten."},pending:{name:"Binnenkomst",description:"Binnenkomstvertraging ingegaan, het alarm dient te worden uitgeschakeld."}}},mode:{heading:"Modi",description:"Beperk de actie tot specifieke inschakel modi."},title:{heading:"Titel",description:"Titel voor de notificatie"},message:{heading:"Bericht",description:"Tekst voor de notificatie",insert_wildcard:"Wildcard invoegen",placeholders:{armed:"Het alarm is ingeschakeld op {{arm_mode}}",disarmed:"Het alarm is nu uit",triggered:"Het alarm is geactiveerd! Oorzaak: {{open_sensors}}.",untriggered:"The alarm gaat niet langer af.",arm_failure:"Het alarm kon niet worden ingeschakeld. Oorzaak: {{open_sensors}}.",arming:"Het alarm wordt ingeschakeld, verlaat het huis.",pending:"Het alarm moet nu worden uitgeschakeld, anders wordt deze geactiveerd."}},open_sensors_format:{heading:"Opmaak voor open_sensors wildcard",description:"Kies welke sensor informatie wordt weergegeven in het bericht",options:{default:"Naam en status",short:"Alleen naam"}},arm_mode_format:{heading:"Vertaling voor arm_mode wildcard",description:"Kies in welke taal de inschakelmodus wordt weergegeven in het bericht"},target:{heading:"Doel",description:"Apparaat om het push-bericht naar te sturen"},name:{heading:"Naam",description:"Beschrijving voor deze notificatie",placeholders:{armed:"Stuur notificatie naar {target} bij inschakelen",disarmed:"Stuur notificatie naar {target} bij uitschakelen",triggered:"Stuur notificatie naar {target} bij alarm",untriggered:"Stuur notificatie naar {target} als het alarm stopt met afgaan",arm_failure:"Stuur notificatie naar {target} bij fout",arming:"Stuur notificatie naar {target} bij vertrek",pending:"Stuur notificatie naar {target} bij binnenkomst"}},delete:{heading:"Automatisering verwijderen",description:"Verwijder deze automatisering permanent"}},actions:{test:"Testen"}},new_action:{title:"Actie instellen",description:"Schakel verlichting of apparaatuur (bijv. sirene) wanneer het alarm wordt in- of uitgeschakeld of wordt geactiveerd etc.",fields:{event:{heading:"Gebeurtenis",description:"Wanneer moet de actie worden uitgevoerd"},area:{heading:"Gebied",description:"Het gebied waarop de gebeurtenis van toepassing is, laat leeg om het algemene alarm te selecteren."},mode:{heading:"Mode",description:"Beperk de actie tot specifieke inschakel modi (optioneel)"},entity:{heading:"Entiteit",description:"Entiteit om actie op uit te voeren"},action:{heading:"Actie",description:"Actie die op de entiteit moet worden uitgevoerd",no_common_actions:"Acties kunnen alleen worden toegewezen in de YAML modus voor de geselecteerde entiteiten."},name:{heading:"Naam",description:"Beschrijving voor deze actie",placeholders:{armed:"Schakel {entity} naar {state} bij inschakelen",disarmed:"Schakel {entity} naar {state} bij uitschakelen",triggered:"Schakel {entity} naar {state} bij alarm",untriggered:"Set {entity} to {state} when triggering stops",arm_failure:"Schakel {entity} naar {state} bij fout",arming:"Schakel {entity} naar {state} bij vertrek",pending:"Schakel {entity} naar {state} bij binnenkomst"}}}}}}},Ut={common:Lt,components:qt,title:"Alarmpaneel",panels:Rt},It=Object.freeze({__proto__:null,common:Lt,components:qt,title:"Alarmpaneel",panels:Rt,default:Ut}),Vt={modes_short:{armed_away:"Pre??",armed_home:"Doma",armed_night:"Noc",armed_custom_bypass:"Vlastn??",armed_vacation:"Dovolenka"},enabled:"Aktivovan??",disabled:"Deaktivovan??"},Gt={time_slider:{seconds:"sek",minutes:"min",infinite:"nekone??n??",none:"nie je"},editor:{ui_mode:"Do UI",yaml_mode:"Do YAML",edit_in_yaml:"Upravi?? v YAML"},table:{filter:{label:"Filtrova?? polo??ky",item:"Filter pod??a {name}",hidden_items:"{number} {number, plural,\n  jeden {item is}\n  other {items are}\n} skri??"}}},Ft={general:{title:"Hlavn??",cards:{general:{description:"Tento panel definuje niektor?? glob??lne nastavenia pre alarm.",fields:{disarm_after_trigger:{heading:"Deaktivujte po spusten??",description:"Po uplynut?? ??asu spustenia alarm namiesto n??vratu do str????en??ho stavu deaktivujte."},enable_mqtt:{heading:"Povoli?? MQTT",description:"Umo??nite, aby bol panel alarmu ovl??dan?? cez MQTT."},enable_master:{heading:"Povoli?? hlavn?? alarm",description:"Vytvor?? entitu na kontrolu v??etk??ch oblast?? s????asne."}},actions:{setup_mqtt:"MQTT Konfigur??cia",setup_master:"Hlavn?? konfigur??cia"}},modes:{title:"Re??imy",description:"Tento panel mo??no pou??i?? na nastavenie re??imov str????enia alarmu.",modes:{armed_away:"Aktivovan?? pre?? sa pou??ije, ke?? v??etci ??udia opustia dom. V??etky dvere a okn?? umo????uj??ce vstup do domu bud?? str????en??, ako aj pohybov?? senzory vo vn??tri domu.",armed_home:"Aktivovan?? doma (zn??my aj ako zabezpe??en?? pobyt) sa pou??ije pri nastavovan?? alarmu, ke?? s?? ??udia v dome. Str????en?? bud?? v??etky dvere a okn?? umo????uj??ce vstup do domu, nie v??ak pohybov?? senzory vo vn??tri domu.",armed_night:"Aktivovan?? noc sa pou??ije pri nastavovan?? alarmu pred span??m. V??etky dvere a okn?? umo????uj??ce vstup do domu bud?? str????en?? a vybran?? pohybov?? senzory (na pr??zem??) v dome.",armed_vacation:"Aktivovan?? dovolenku mo??no pou??i?? ako roz????renie re??imu str????enia v pr??pade dlh??ej nepr??tomnosti. ??asy oneskorenia a odozvy sp??????a??a je mo??n?? prisp??sobi?? pod??a potreby.",armed_custom_bypass:"Extra re??im na definovanie vlastn??ho bezpe??nostn??ho obvodu."},number_sensors_active:"{number} {number, plural,\n  jeden {sensor}\n  other {sensors}\n} akt??vny",fields:{status:{heading:"Stav",description:"Ovl??da, ??i je mo??n?? v tomto re??ime zapn???? alarm."},exit_delay:{heading:"Oneskorenie odchodu",description:"Pri aktiv??cii alarmu v tomto ??asovom obdob?? senzory e??te nespustia alarm."},entry_delay:{heading:"Oneskorenie pri vstupe",description:"??as oneskorenia, k??m sa spust?? alarm po aktiv??cii jedn??ho zo senzorov."},trigger_time:{heading:"Sp??????ac?? ??as",description:"??as, po??as ktor??ho zostane alarm po aktiv??cii v spustenom stave."}}},mqtt:{title:"MQTT konfigur??cia",description:"Tento panel je mo??n?? pou??i?? na konfigur??ciu rozhrania MQTT.",fields:{state_topic:{heading:"Stav topic",description:"Topic o ktorom zverej??uje aktualiz??cia stavu"},event_topic:{heading:"Udalos?? topic",description:"Topicna na ktor?? sa zverej??uj?? poplachov?? udalosti"},command_topic:{heading:"Pr??kazov?? topic",description:"Topic na ktor?? Alarmo po????va pr??kazy na zapnutie/vypnutie."},require_code:{heading:"Vy??adova?? k??d",description:"Vy??adova?? k??du ktor?? sa m?? odosla?? s pr??kazom."},state_payload:{heading:"Konfigura??n?? payload pre stav",item:"Definuje payload pre stav ''{state}''"},command_payload:{heading:"Konfigura??n?? payload pre pr??kaz",item:"Definuje payload pre pr??kaz ''{command}''"}}},areas:{title:"Oblasti",description:"Oblasti m????u by?? pou??it?? na rozdelenie v????ho popla??n??ho syst??mu do viacer??ch oddelen??.",no_items:"Zatia?? nie s?? definovan?? ??iadne oblasti.",table:{remarks:"Pozn??mky",summary:"T??to oblas?? obsahuje {summary_sensors} a {summary_automations}.",summary_sensors:"{number} {number, plural,\n  jeden {sensor}\n  other {sensors}\n}",summary_automations:"{number} {number, plural,\n  jeden {automation}\n  other {automations}\n}"},actions:{add:"Prida??"}}},dialogs:{create_area:{title:"Nov?? oblas??",fields:{copy_from:"Kop??rova?? nastavenia z"}},edit_area:{title:"??prava oblasti ''{area}''",name_warning:"Pozn??mka: Zmena n??zvu zmen?? ID entity"},remove_area:{title:"Odstr??ni?? oblas???",description:"Naozaj chcete odstr??ni?? t??to oblas??? T??to oblas?? obsahuje {sensors} senzory a {automations} automatiz??cie, ktor?? bud?? tie?? odstr??nen??."},edit_master:{title:"Hlavn?? konfigur??cia"},disable_master:{title:"Zak??za?? hlavn???",description:"Naozaj chcete odstr??ni?? hlavn?? alarm? T??to oblas?? obsahuje {automations} automatiz??cie, ktor?? bud?? touto akciou odstr??nen??."}}},sensors:{title:"Senzory",cards:{sensors:{description:"Aktu??lne nakonfigurovan?? senzory. Kliknut??m na polo??ku vykon??te zmeny.",table:{no_items:"Nie s?? tu ??iadne senzory na zobrazenie.",no_area_warning:"Senzor nie je priraden?? k ??iadnej oblasti.",arm_modes:"Re??im alarmu",always_on:"(V??dy zapnut??)"}},add_sensors:{title:"prida?? senzor",description:"Pridajte ??al??ie senzory. Uistite sa, ??e va??e senzory maj?? vhodn?? n??zov, aby ste ich mohli identifikova??.",no_items:"Neexistuj?? ??iadne dostupn?? entity HA, ktor?? je mo??n?? nakonfigurova?? pre alarm. Nezabudnite zahrn???? entity typu bin??rny_senzor.",table:{type:"Zisten?? typ"},actions:{add_to_alarm:"prida?? k alarmu",filter_supported:"Skry?? polo??ky s nezn??mym typom"}},editor:{title:"Upravi?? senzor",description:"Konfigur??cia nastaven?? senzorov ''{entity}''.",fields:{area:{heading:"Oblas??",description:"Vyberte oblas??, ktor?? obsahuje tento senzor."},group:{heading:"Skupina",description:"Zoskupenie s ??al????mi sn??ma??mi pre kombinovan?? sp??????anie."},device_type:{heading:"Typ zariadenia",description:"Vyberte typ zariadenia, aby sa automaticky pou??ili pr??slu??n?? nastavenia.",choose:{door:{name:"Dvere",description:"Dvere, br??na alebo in?? vchod, ktor?? sa pou????va na vstup/v??stup z domu."},window:{name:"Okno",description:"Okno alebo dvere, ktor?? sa nepou????vaj?? na vstup do domu, ako je balk??n."},motion:{name:"Senzor pohybu",description:"Sn??ma?? pr??tomnosti alebo podobn?? zariadenie s oneskoren??m medzi aktiv??ciami."},tamper:{name:"Tamper",description:"Detektor odstr??nenia krytu sn??ma??a, sn??ma?? rozbitia skla at??."},environmental:{name:"Environment??lne",description:"Sn??ma?? dymu/plynu, detektor ??niku at??. (nes??vis?? s ochranou proti vl??maniu)."},other:{name:"Generic"}}},always_on:{heading:"V??dy zapnut??",description:"Senzor by mal v??dy spusti?? alarm."},modes:{heading:"Povolen?? re??imy",description:"Alarmov?? re??imy, v ktor??ch je tento sn??ma?? akt??vny."},arm_on_close:{heading:"Zabezpe??i?? po zatvorn??",description:"Po deaktiv??cii tohto senzora sa zost??vaj??ce odchodov?? oneskorenie automaticky presko????."},use_exit_delay:{heading:"Pou??ite odchodov?? oneskoreniey",description:"Sn??ma?? m????e by?? akt??vny, ke?? sa spust?? odchodov?? oneskorenie."},use_entry_delay:{heading:"Pou??ite oneskorenie vstupu",description:"Aktiv??cia senzora spust?? alarm po vstupnom oneskoren??, nie priamo."},allow_open:{heading:"Po aktiv??cii povoli?? otvoren??",description:"Ak je senzor akt??vny aj po odchodovom oneskoren??, nesp??sob?? to zlyhanie str????enia."},auto_bypass:{heading:"Ob??s?? automaticky",description:"Vyl????te tento senzor z alarmu, ak je otvoren?? po??as zapnutia str????enia.",modes:"Re??imy, v ktor??ch m????e by?? senzor ob??den??"},trigger_unavailable:{heading:"Spusti??, ke?? nie je k dispoz??cii",description:"Ke?? sa stav senzora stane ???nedostupn??m???, senzor sa aktivuje."}},actions:{toggle_advanced:"Pokro??il?? nastavenia",remove:"Odstr??ni??",setup_groups:"Nastavte skupiny"},errors:{description:"Opravte nasleduj??ce chyby:",no_area:"Nie je vybrat?? ??iadna oblas??",no_modes:"Nie s?? zvolen?? ??iadne re??imy, pre ktor?? by mal by?? sn??ma?? akt??vny",no_auto_bypass_modes:"Nie s?? zvolen?? ??iadne re??imy, aby sa senzor mohol automaticky ob??s??"}}},dialogs:{manage_groups:{title:"Spravujte skupiny senzorov",description:"V skupine senzorov mus?? by?? aktivovan??ch viacero senzorov v ??asovom ??seku pred spusten??m alarmu.",no_items:"Zatia?? ??iadne skupiny",actions:{new_group:"Nov?? skupina"}},create_group:{title:"Nov?? skupina senzorov",fields:{name:{heading:"N??zov",description:"N??zov skupiny senzorov"},timeout:{heading:"??as vypr??al",description:"??asov?? obdobie, po??as ktor??ho po sebe id??ce aktiv??cie senzora spustia alarm."},sensors:{heading:"Senzory",description:"Vyberte sn??ma??e, ktor?? s?? obsiahnut?? v tejto skupine."}},errors:{invalid_name:"Zadan?? neplatn?? meno.",insufficient_sensors:"Je potrebn?? vybra?? aspo?? 2 senzory."}},edit_group:{title:"Upravte skupinu senzorov ''{name}''"}}},codes:{title:"K??dy",cards:{codes:{description:"Zme??te nastavenia k??du.",fields:{code_arm_required:{heading:"Pou??ite k??d zabezpe??enia",description:"Vy??aduje sa k??d na aktiv??ciu alarmu"},code_disarm_required:{heading:"Pou??ite deaktiva??n?? k??d",description:"Vy??aduje sa k??d na vypnutie alarmu"},code_format:{heading:"Form??t k??du",description:"Nastav?? typ vstupu pre kartu alarmu Lovelace.",code_format_number:"PIN",code_format_text:"heslo"}}},user_management:{title:"Spr??va u????vate??ov",description:"Ka??d?? u????vate?? m?? svoj vlastn?? k??d na zapnutie/vypnutie alarmu.",no_items:"Zatia?? nie s?? ??iadni pou????vatelia",actions:{new_user:"nov?? u????vate??"}},new_user:{title:"Vytvori?? nov??ho pou????vate??a",description:"Je mo??n?? vytvori?? pou????vate??ov na poskytovanie pr??stupu k ovl??daniu alarmu.",fields:{name:{heading:"Meno",description:"Meno pou????vate??a."},code:{heading:"K??d",description:"K??d pre tohto pou????vate??a."},confirm_code:{heading:"Potvr??te k??d",description:"Opakujte k??d."},can_arm:{heading:"Povoli?? k??d na zapnutie str????enia",description:"Zadan??m tohto k??du sa aktivuje alarm"},can_disarm:{heading:"Povoli?? k??d na vypnutie str????enia",description:"Zadan??m tohto k??du sa alarm deaktivuje"},is_override_code:{heading:"Povinn?? k??d",description:"Zadan??m tohto k??du aktivujete alarm"},area_limit:{heading:"Zak??zan?? oblasti",description:"Obmedzte pou????vate??a na ovl??danie iba vybran??ch oblast??"}},errors:{no_name:"Nebolo zadan?? ??iadne meno.",no_code:"K??d by mal ma?? minim??lne 4 znaky/????sla.",code_mismatch:"K??dy sa nezhoduj??."}},edit_user:{title:"Upravi?? pou????vate??a",description:"Zmena konfigur??cie pre pou????vate??a ''{name}''.",fields:{old_code:{heading:"Aktu??lny k??d",description:"Aktu??lny k??d, ponechajte pole pr??zdne, ak chcete ponecha?? nezmenen??."}}}}},actions:{title:"Akcie",cards:{notifications:{title:"Upozornenia",description:"Pomocou tohto panela m????ete spravova?? upozornenia, ktor?? sa maj?? odosla??, ke?? nastane ur??it?? poplachov?? udalos??.",table:{no_items:"Zatia?? nie s?? vytvoren?? ??iadne upozornenia.",no_area_warning:"Akcia nie je priraden?? ??iadnej oblasti."},actions:{new_notification:"nov?? notifik??cia"}},actions:{description:"Tento panel je mo??n?? pou??i?? na prepnutie zariadenia pri zmene stavu alarmu.",table:{no_items:"Zatia?? nie s?? vytvoren?? ??iadne akcie."},actions:{new_action:"nov?? akcia"}},new_notification:{title:"Konfigur??cia upozornenia",description:"Dost??va?? upozornenie pri zapnut??/vypnut?? alarmu, aktiv??cii at??.",trigger:"Podmienka",action:"??loha",options:"Mo??nosti",fields:{event:{heading:"Udalos??",description:"Kedy treba posla?? ozn??menie",choose:{armed:{name:"Alarm je aktivovan??",description:"Alarm je ??spe??ne aktivovan??"},disarmed:{name:"Alarm je deaktivovan??",description:"Alarm je deaktivovan??"},triggered:{name:"Alarm je spusten??",description:"Alarm sa spust??"},untriggered:{name:"Alarm u?? nie je spusten??",description:"Spusten?? stav poplachu skon??il"},arm_failure:{name:"Nepodarilo sa zapn????",description:"Zapnutie alarmu zlyhalo kv??li jedn??mu alebo viacer??m otvoren??m senzorom"},arming:{name:"Oneskorenie odchodu za??alo",description:"Spustilo sa oneskorenie odchodu, pripraven?? opusti?? dom."},pending:{name:"Za??alo sa oneskorenie vstupu",description:"Vstupn?? oneskorenie za??alo, alarm sa spust?? ??oskoro."}}},mode:{heading:"Re??im",description:"Obmedzte akciu na konkr??tne re??imy spustenia (volite??n??)"},title:{heading:"N??zov",description:"N??zov spr??vy s upozornen??m"},message:{heading:"Spr??va",description:"Obsah spr??vy s upozornen??m",insert_wildcard:"Vlo??te z??stupn?? znak",placeholders:{armed:"Alarm je nastaven?? na {{arm_mode}}",disarmed:"Alarm je teraz VYPNUT??",triggered:"Spustil sa alarm! d??vod: {{open_sensors}}.",untriggered:"Alarm u?? nie je spusten??.",arm_failure:"Alarm teraz nebolo mo??n?? aktivova?? z nasleduj??cich d??vodov: {{open_sensors}}.",arming:"Alarm bude ??oskoro aktivovan??, pros??m opustite dom.",pending:"Alarm sa spust??, r??chlo ho deaktivujte!"}},open_sensors_format:{heading:"Form??t pre z??stupn?? znak open_sensors",description:"Vyberte, ktor?? inform??cie o senzore sa vlo??ia do spr??vy",options:{default:"Meno a stav",short:"Iba men??"}},arm_mode_format:{heading:"Preklad pre z??stupn?? znak re??imu alarmu",description:"Vyberte, v akom jazyku sa do spr??vy vlo???? re??im str????enia"},target:{heading:"Cie??",description:"Zariadenie, do ktor??ho sa m?? odosla?? upozornenie"},name:{heading:"N??zov",description:"Popis tohto upozornenia",placeholders:{armed:"Upozorni?? {target} pri aktiv??cii",disarmed:"Upozorni?? {target} pri deaktiv??cii",triggered:"Upozorni?? {target} pri spusten??",untriggered:"Upozorni?? {target}, ke?? sa sp??????anie zastav??",arm_failure:"Upozorni?? {target} na zlyhanie",arming:"Upozorni?? {target} pri odchode",pending:"Upozorni?? {target} pri pr??chode"}},delete:{heading:"Odstr??ni?? automatiz??ciu",description:"Natrvalo odstr????te t??to automatiz??ciu"}},actions:{test:"Sk??s to"}},new_action:{title:"Konfigurova?? akciu",description:"Zapnite svetl?? alebo zariadenia (napr??klad sir??ny) pri zap??nan??/vyp??nan?? str????enia, pri aktiv??cii at??.",fields:{event:{heading:"Udalos??",description:"Kedy sa m?? akcia vykona??"},area:{heading:"Oblas??",description:"Oblas??, pre ktor?? sa udalos?? vz??ahuje, ponechajte pr??zdne, aby ste vybrali glob??lny alarm."},mode:{heading:"Re??im",description:"Obmedzte akciu na konkr??tne re??imy str????enia (volite??n??)"},entity:{heading:"Entity",description:"Entita, na ktorej sa m?? vykona?? akcia"},action:{heading:"Akcia",description:"Akcia, ktor?? sa m?? vykona?? na entite",no_common_actions:"Akcie m????u by?? priraden?? iba v re??ime YAML pre vybran?? entity."},name:{heading:"N??zov",description:"Popis tejto akcie",placeholders:{armed:"Nastavte {entity} na {state} pri aktiv??cii",disarmed:"Nastavte {entity} na {state} pri deaktiv??cii",triggered:"Nastavte {entity} na {state} pri spusten??",untriggered:"Nastavte {entity} na {state}, ke?? sa sp??????anie zastav??",arm_failure:"Nastavte {entity} na {state} pri zlyhani",arming:"Nastavte {entity} na {state} pri odchode",pending:"Nastavte {entity} na {state} pri pr??chode"}}}}}}},Ht={common:Vt,components:Gt,title:"Alarov?? panel",panels:Ft},Yt=Object.freeze({__proto__:null,common:Vt,components:Gt,title:"Alarov?? panel",panels:Ft,default:Ht}),Bt={modes_short:{armed_away:"Borta",armed_home:"Hemma",armed_night:"Natt",armed_custom_bypass:"Anpassad",armed_vacation:"Semester"},enabled:"Aktiverat",disabled:"Inaktiverat"},Kt={time_slider:{seconds:"sek",minutes:"min",infinite:"o??ndligt",none:"inget"},editor:{ui_mode:"Till UI",yaml_mode:"Till YAML",edit_in_yaml:"Redigera i YAML"},table:{filter:{label:"Filtrera sensorer",item:"Filtrera med {name}",hidden_items:"{number} {number, plural,\n  en {item is}\n  other {items are}\n} dolda"}}},Zt={general:{title:"Generellt",cards:{general:{description:"Denna panel definierar n??gra globala inst??llningar f??r larmet.",fields:{disarm_after_trigger:{heading:"Larma av efter trigger",description:"Efter trigger tiden har g??tt ut, larma av larmet ist??llet f??r att ??terg?? till larmat l??ge."},enable_mqtt:{heading:"Aktivera MQTT",description:"Till??t alarm panelen att kontrolleras via MQTT."},enable_master:{heading:"Aktivera alarm master",description:"Skapar en entity f??r att kontrollera alla areor samtidigt."}},actions:{setup_mqtt:"MQTT konfiguration",setup_master:"Master konfiguration"}},modes:{title:"L??gen",description:"Denna panel kan anv??ndas f??r att konfigurera larmets olika larml??gen.",modes:{armed_away:"Larmat borta anv??nds n??r alla personer l??mnat huset. Alla d??rrar och f??nster som till??ter tillg??ng till huset kommer att larmas, det samma g??ller r??relsesensorer inne i huset.",armed_home:"Larmat hemma anv??nds n??r det finns personer kvar i huset. Alla d??rrar och f??nster som till??ter tillg??ng till huset kommer att larmas, dock inga r??relsesensorer inne i huset.",armed_night:"Larmat natt anv??nds n??r du aktiverar larmen innan du l??gger dig. Alla d??rrar och f??nster som till??ter tillg??ng till huset kommer att larmas, det samma g??ller utvalda r??relsesensorer inne i huset.",armed_vacation:"Larmat semester kan anv??ndas som en f??rl??ngning av l??get f??r larmat borta vid l??ngre fr??nvaro. F??rdr??jningstiderna och triggersvaren kan anpassas (efter ??nskem??l) f??r att vara borta l??ngre tid fr??n hemmet.",armed_custom_bypass:"Ett extra l??ge f??r f??r att definiera sin egen s??kerhetsperimeter."},number_sensors_active:"{number} {number, plural,\n  en {sensor}\n  other {sensorer}\n} aktiv",fields:{status:{heading:"Status",description:"Styr om larmet kan aktiveras i detta l??ge."},exit_delay:{heading:"L??mna f??rdr??jning",description:"Efter att du har aktiverat larmet kommer dina sensorer inte trigga ditt larm inom denna tid."},entry_delay:{heading:"Ankomst f??rdr??jning",description:"F??rdr??jning i tid tills att ditt larm triggas efter att en av dina sensorer har aktiverats."},trigger_time:{heading:"Trigger tid",description:"Tid som ditt larm kommer vara i triggat l??ge efter att ett larm har triggats."}}},mqtt:{title:"MQTT konfiguration",description:"Denna panel kan anv??ndas f??r att anpassa konfigurationen av MQTT.",fields:{state_topic:{heading:"Status topic",description:"Topic p?? vilket status uppdateringar publiceras till."},event_topic:{heading:"Event topic",description:"Topic p?? vilket alarm events publiceras till."},command_topic:{heading:"Kommando topic",description:"Topic p?? vilket Alarmo lyssnar p?? f??r larma/larma av kommandon."},require_code:{heading:"Kr??v kod",description:"Kr??v att koden ska skickas med kommandot."},state_payload:{heading:"Konfigurera payload per state",item:"Definiera en payload f??r state ''{state}''"},command_payload:{heading:"Konfigurera payload per kommando",item:"Definiera en payload f??r kommando ''{command}''"}}},areas:{title:"Omr??den",description:"Omr??den kan anv??ndas f??r att dela upp ditt larm till flera omr??den.",no_items:"Det ??r inga omr??den definierade ??n.",table:{remarks:"Anm??rkningar",summary:"Detta omr??de inneh??ller {summary_sensors} och {summary_automations}.",summary_sensors:"{number} {number, plural,\n  en {sensor}\n  other {sensorer}\n}",summary_automations:"{number} {number, plural,\n  en {automation}\n  other {automationer}\n}"},actions:{add:"L??gg till"}}},dialogs:{create_area:{title:"Nytt omr??de",fields:{copy_from:"Kopiera inst??llningarna fr??n"}},edit_area:{title:"Redigera omr??de ''{area}''",name_warning:"OBS: ??ndrar du namn kommer entity ID att ??ndras"},remove_area:{title:"Ta bort omr??de?",description:"??r du s??ker att du vill ta bort detta omr??de? Detta omr??de inneh??ller {sensors} sensorer och {automations} automationer, som ocks?? kommer att tas bort."},edit_master:{title:"Master konfiguration"},disable_master:{title:"Inaktivera master?",description:"??r du s??ker att du vill ta bort master alarm? Denna area inneh??ller {automations} automationer, som kommer att tas bort med detta val."}}},sensors:{title:"Sensorer",cards:{sensors:{description:"Nuvarande konfigurerade sensorer. Klicka p?? ett entity f??r att g??ra f??r??ndringar.",table:{no_items:"Det finns inga sensorer att visa h??r.",no_area_warning:"Sensor ??r inte tilldelat till n??got omr??de.",arm_modes:"Larml??ge",always_on:"(Alltid)"}},add_sensors:{title:"L??gg till sensorer",description:"L??gg till mer sensorer. S??kerst??ll att dina sensorer har ett friendly_name, s?? du kan identifiera dem.",no_items:"Det finns inga tillg??ngliga HA entities som kan konfigureras f??r larmet. S??kerst??ll att inkludera entities av type binary_sensor.",table:{type:"Detekteringstyp"},actions:{add_to_alarm:"Addera till larmet",filter_supported:"D??lj sensorer av typen unknown"}},editor:{title:"Justera Sensor",description:"Justera inst??llningarna f??r sensor ''{entity}''.",fields:{area:{heading:"Omr??de",description:"V??lj ett omr??de som inneh??ller denna sensor."},group:{heading:"Grupp",description:"Gruppera med andra sensorer f??r kombinerad trigger."},device_type:{heading:"Enhetstyp",description:"V??lj en enhetstyp att automatiskt applicera rekommenderade inst??llningar p??.",choose:{door:{name:"D??rr",description:"En d??rr, grind eller annan entre som anv??nds f??r att g?? in/l??mna hemmet."},window:{name:"F??nster",description:"Ett f??nster eller en d??rr som inte anv??nds f??r att g?? in/l??mna huset, t.ex. en balkongd??rr."},motion:{name:"R??relse",description:"N??rvarosensor eller liknande som har f??rdr??jning mellan sina aktiveringar."},tamper:{name:"Manipulering",description:"Detektor av sensorskydd, glaskross sensor etc."},environmental:{name:"Milj??",description:"R??k/gas sensor eller l??ckage sensor etc. (Inte relaterat till inbrottsskydd)."},other:{name:"Generell"}}},always_on:{heading:"Larma alltid",description:"Sensorn ska alltid trigga larmet."},modes:{heading:"Aktiverat l??ge",description:"Larml??ge n??r sensorn ska vara aktiv."},arm_on_close:{heading:"Larma efter st??ngning",description:"Resterande l??mna f??rdr??jning skippas automatiskt n??r denna sensor inaktiveras."},use_exit_delay:{heading:"Anv??nd l??mna f??rdr??jning",description:"Sensorn ??r till??ten att vara aktiv n??r l??mna f??rdr??jningen startar."},use_entry_delay:{heading:"Anv??nd ankomst f??rdr??jning",description:"Sensor aktivering triggar larmet after ankomst f??rdr??jningen ist??llet f??r direkt."},allow_open:{heading:"Till??t ??ppnad efter larmning.",description:"Om sensorn fortfarande ??r aktiv efter l??mna f??rdr??jningen kommer det inte misslyckas att larma."},auto_bypass:{heading:"Exkludera automatiskt",description:"Exkludera denna sensor fr????n larmet open den ??r ??ppen vid p??larmning.",modes:"L??gen d??r sensor kan bli exkluderad"},trigger_unavailable:{heading:"Trigga vid otillg??nglig",description:"Detta kommer aktiveras n??r sensorns status blir 'unavailable'."}},actions:{toggle_advanced:"Avancerade inst??llningar",remove:"Ta bort",setup_groups:"Hantera grupper"},errors:{description:"Var v??nlig att justera f??ljande fel:",no_area:"Inget omr??de ??r vald",no_modes:"Inga l??gen ??r valda n??r sensorn ska vara aktiv",no_auto_bypass_modes:"Inga l??gen ??r valda n??r sensorn eventuellt automatiskt ska f??rbikopplas"}}},dialogs:{manage_groups:{title:"Hantera sensor grupper",description:"I en sensor grupp m??ste flera sensorer bli aktiverade inom en tidsperiod f??r att larmet ska triggas.",no_items:"Inga grupper ??nnu",actions:{new_group:"Ny grupp"}},create_group:{title:"Ny sensor grupp",fields:{name:{heading:"Namn",description:"Namn f??r sensor gruppen"},timeout:{heading:"Time-out",description:"Tidsperiod f??r de sammankopplade sensorernas aktivitet ska trigga larmet."},sensors:{heading:"Sensorer",description:"V??lj sensorer som tillh??ra gruppen."}},errors:{invalid_name:"Ogiltigt namn specificerat.",insufficient_sensors:"Minst tv?? sensorer beh??ver v??ljas."}},edit_group:{title:"Justera sensor grupp ''{name}''"}}},codes:{title:"Koder",cards:{codes:{description:"??ndra inst??llningar f??r kod.",fields:{code_arm_required:{heading:"Anv??nd p??larmningskod",description:"Kr??v en kod f??r att aktivera larmet"},code_disarm_required:{heading:"Anv??nd avlarmningskod",description:"Kr??v en kod f??r att inaktivera larmet"},code_format:{heading:"Kodformat",description:"??ndra inmatningstyp f??r Lovelace alarm kortet.",code_format_number:"pinkod",code_format_text:"l??senord"}}},user_management:{title:"Anv??ndarhantering",description:"Varje anv??ndare har sin egen kod f??r aktivera/inaktivera larmet.",no_items:"Det finns inga anv??ndare ??n",actions:{new_user:"Ny anv??ndare"}},new_user:{title:"Skapa en ny anv??ndare",description:"Anv??ndare kan skapas f??r att ge tillg??ng att styra larmet.",fields:{name:{heading:"Namn",description:"Namn p?? anv??ndaren"},code:{heading:"Kod",description:"Koden f??r anv??ndaren."},confirm_code:{heading:"Repetera koden",description:"Repetera koden."},can_arm:{heading:"Till??t kod f??r p??larmning",description:"Denna kod aktiverar larmet"},can_disarm:{heading:"Till??t kod f??r avlarmning",description:"Denna kod inaktiverar larmet"},is_override_code:{heading:"Tvingande kod",description:"Denna kod tvingar aktivering av larmet"},area_limit:{heading:"Begr??nsade omr??den",description:"Begr??nsa anv??ndare att hantera utvalda omr??den"}},errors:{no_name:"Inget namn angivet.",no_code:"Koden ska vara minst 4 tecken eller siffror.",code_mismatch:"Koderna matchar inte."}},edit_user:{title:"Justera anv??ndare",description:"??ndra inst??llningar f??r anv??ndare ''{name}''.",fields:{old_code:{heading:"Nuvarande kod",description:"Nuvarande kod, l??mna tomt f??r att inte ??ndra."}}}}},actions:{title:"??tg??rder",cards:{notifications:{title:"Notifikationer",description:"Du anv??nder denna panel f??r att hantera notifikationer som ska s??ndas vid utvalda larmevents.",table:{no_items:"Det ??r inga notifikationer skapade ??n.",no_area_warning:"??tg??rd ??r inte tilldelad till n??got omr??de."},actions:{new_notification:"ny notifikation"}},actions:{description:"I denna panel kan du trigga olika beteende p?? enheter baserat p?? oliak events fr??n ditt larm.",table:{no_items:"Det finns inga ??tg??rder skapade ??nnu."},actions:{new_action:"ny ??tg??rd"}},new_notification:{title:"Konfigurera notifikationer",description:"Ta emot en notifikation n??r ditt larm aktivera/inaktiveras eller om en sensor aktiveras eller liknande.",trigger:"Villkor",action:"??tg??rd",options:"Inst??llningar",fields:{event:{heading:"Event",description:"N??r ska notifikationen skickas",choose:{armed:{name:"Larmet ??r aktiverat",description:"Larmet aktiveras framg??ngsrikt"},disarmed:{name:"Larmet ??r inaktiverat",description:"Larmet ??r inaktiverat"},triggered:{name:"Larmet har triggats",description:"Larmet har triggats"},untriggered:{name:"Alarm not longer triggered",description:"The triggered state of the alarm has ended"},arm_failure:{name:"Misslyckas att aktivera larm",description:"Larmet misslyckas att kativeras p?? grund av n??gon sensor"},arming:{name:"L??mna f??rdr??jning startas",description:"L??mna f??rdr??jning startas, redo att l??mna huset."},pending:{name:"Ankomst f??rdr??jning startas",description:"Ankomst f??rdr??jning startas, larmet kommer triggas snart."}}},mode:{heading:"L??ge",description:"Begr??nsa ??tg??rd till specifikt larml??ge (valfritt)"},title:{heading:"Titel",description:"Titel f??r notifikationsmeddelandet"},message:{heading:"Meddelande",description:"Inneh??ll av notifikationsmeddelandet",insert_wildcard:"L??gg in wildcard",placeholders:{armed:"Larmet har bytt status till {{arm_mode}}",disarmed:"Larmet ??r nu AVST??NGT",triggered:"Larmet har triggats! Anledning: {{open_sensors}}.",untriggered:"The alarm is not longer triggered.",arm_failure:"Larmet kunde inte aktiveras nu, detta p?? grund av: {{open_sensors}}.",arming:"Larmet kommer aktiveras snart, l??mna huset.",pending:"Larmet kommer snart triggas, inaktivera larmet snarast!"}},open_sensors_format:{heading:"Format f??r open_sensors wildcard",description:"V??lj vilken sensorinformation som ska infogas i meddelandet",options:{default:"Namn och tillst??nd",short:"Endast namn"}},arm_mode_format:{heading:"??vers??ttning f??r larml??ge wildcard",description:"V??lj vilket spr??k som larml??ge ska infogas i meddelandet"},target:{heading:"M??l",description:"Enhet att skicka push-meddelandet till"},name:{heading:"Namn",description:"Beskrivning av notifikationen",placeholders:{armed:"Notifiera {target} vid aktivering av larm",disarmed:"Notifiera {target} vid inaktivering av larm",triggered:"Notifiera {target} vid triggning av larm",untriggered:"Notify {target} when triggering stops",arm_failure:"Notifiera {target} vid fel av larm",arming:"Notifiera {target} vid utpassering",pending:"Notifiera {target} vid ankomst"}},delete:{heading:"Ta bort automation",description:"Ta bort automation permanent"}},actions:{test:"Testa"}},new_action:{title:"Konfigurera action",description:"Aktivera lampor eller andra enheter som sirener eller h??gatalare vid aktivering/inaktivering av larmet, triggning av larmet osv.",fields:{event:{heading:"Event",description:"N??r ska denna action aktiveras"},area:{heading:"Omr??de",description:"Omr??de som detta event ska appliceras p??, l??mna tomt om det ska g??lla globalt."},mode:{heading:"L??ge",description:"Begr??nsa ??tg??rd till specifika larml??gen (frivilligt)"},entity:{heading:"Entitet",description:"Entitet att utf??ra ??tg??rd p??"},action:{heading:"??tg??rd",description:"??tg??rd att utf??ra p?? entitet",no_common_actions:"??tg??rder kan enbart bli applicerade i YAML l??ge f??r utvalda entiteter."},name:{heading:"Namn",description:"Beskrivning av denna ??tg??rd",placeholders:{armed:"S??tt {entity} till {state} vid aktivering av larmet",disarmed:"S??tt {entity} till {state} vid inaktivering av larmet",triggered:"S??tt {entity} till {state} n??r larmet triggas",untriggered:"Set {entity} to {state} when triggering stops",arm_failure:"S??tt {entity} till {state} vid fel av larmet",arming:"S??tt {entity} till {state} vid utpassering",pending:"S??tt {entity} till {state} vid ankomst"}}}}}}},Qt={common:Bt,components:Kt,title:"Alarm panel",panels:Zt},Wt=Object.freeze({__proto__:null,common:Bt,components:Kt,title:"Alarm panel",panels:Zt,default:Qt}),Xt={modes_short:{armed_away:"????????????",armed_home:"????????????",armed_night:"????????????",armed_custom_bypass:"???????????????",armed_vacation:"????????????"},enabled:"?????????",disabled:"?????????"},Jt={time_slider:{seconds:"???",minutes:"???",infinite:"??????",none:"???"},editor:{ui_mode:"UI??????",yaml_mode:"YAML??????",edit_in_yaml:"???YAML?????????"},table:{filter:{label:"????????????",item:"??????{name}??????",hidden_items:"{number} {number, plural,\n  1 {item is}\n  ?????? {items are}\n} ?????????"}}},ea={general:{title:"??????",cards:{general:{description:"????????????????????????????????????????????????",fields:{disarm_after_trigger:{heading:"?????????????????????",description:"?????????????????????????????????????????????????????????????????????"},enable_mqtt:{heading:"??????MQTT",description:"????????????MQTT?????????????????????"},enable_master:{heading:"??????????????????",description:"??????????????????????????????????????????????????????"}},actions:{setup_mqtt:"MQTT??????",setup_master:"????????????"}},modes:{title:"??????",description:"???????????????????????????????????????????????????",modes:{armed_away:"????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????",armed_home:"?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????",armed_night:"???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????",armed_vacation:"???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????",armed_custom_bypass:"???????????????????????????????????????????????????????????????"},number_sensors_active:"{number} {number, plural,\n  1 {sensor}\n  ?????? {sensors}\n} ??????",fields:{status:{heading:"??????",description:"???????????????????????????????????????????????????"},exit_delay:{heading:"????????????",description:"??????????????????????????????????????????????????????????????????????????????"},entry_delay:{heading:"????????????",description:"???????????????????????????????????????????????????????????????????????????"},trigger_time:{heading:"????????????",description:"???????????????????????????????????????????????????"}}},mqtt:{title:"MQTT??????",description:"????????????????????????MQTT?????????",fields:{state_topic:{heading:"???????????????Topic???",description:"???????????????????????????"},event_topic:{heading:"???????????????Topic???",description:"???????????????????????????"},command_topic:{heading:"???????????????Topic???",description:"Alarmo ???????????????????????????????????????"},require_code:{heading:"????????????",description:"?????????????????????????????????"},state_payload:{heading:"?????????????????????????????????",item:"??????????????????????????? ''{state}''"},command_payload:{heading:"?????????????????????????????????",item:"??????????????????????????? ''{command}''"}}},areas:{title:"??????",description:"????????????????????????????????????????????????????????????",no_items:"????????????????????????????????????",table:{remarks:"??????",summary:"?????????????????? {summary_sensors} ??? {summary_automations}.",summary_sensors:"{number} {number, plural,\n  1 {sensor}\n  ?????? {sensors}\n}",summary_automations:"{number} {number, plural,\n  1 {automation}\n  ?????? {automations}\n}"},actions:{add:"??????"}}},dialogs:{create_area:{title:"?????????",fields:{copy_from:"??????????????????"}},edit_area:{title:"???????????? ''{area}''",name_warning:"????????????????????????????????????ID???"},remove_area:{title:"?????????????",description:"???????????????????????????? ?????????????????? {sensors} ???????????? {automations} ?????????, ?????????????????????"},edit_master:{title:"????????????"},disable_master:{title:"?????????????",description:"???????????????????????????????????????? ?????????????????? {automations} ?????????, ?????????????????????"}}},sensors:{title:"?????????",cards:{sensors:{description:"???????????????????????????????????????????????????????????????",table:{no_items:"????????????????????????????????????",no_area_warning:"??????????????????????????????????????????",arm_modes:"????????????",always_on:"(????????????)"}},add_sensors:{title:"???????????????",description:"????????????????????????????????????????????????????????????????????????????????????????????????????????????",no_items:"???????????????HA??????????????????????????????????????????????????? binary_sensor ??????????????????",table:{type:"??????????????????"},actions:{add_to_alarm:"??????????????????",filter_supported:"???????????????????????????"}},editor:{title:"???????????????",description:"??????????????? ''{entity}'' ????????????",fields:{area:{heading:"??????",description:"??????????????????????????????????????????"},group:{heading:"??????",description:"?????????????????????????????????????????????"},device_type:{heading:"????????????",description:"?????????????????????????????????????????????????????????",choose:{door:{name:"???",description:"????????????/????????????????????????????????????"},window:{name:"???",description:"???????????????????????????????????????????????????"},motion:{name:"??????",description:"??????????????????????????????????????????????????????????????????"},tamper:{name:"??????",description:"????????????????????????????????????????????????????????????"},environmental:{name:"??????",description:"??????/???????????????????????????????????????????????????????????????"},other:{name:"??????"}}},always_on:{heading:"????????????",description:"?????????????????????????????????"},modes:{heading:"???????????????",description:"????????????????????????????????????????????????"},arm_on_close:{heading:"???????????????",description:"??????????????????????????????????????????????????????????????????"},use_exit_delay:{heading:"??????????????????",description:"??????????????????????????????????????????????????????????????????"},use_entry_delay:{heading:"??????????????????",description:"??????????????????????????????????????????????????????????????????????????????"},allow_open:{heading:"????????????????????????",description:"??????????????????????????????????????????????????????"},auto_bypass:{heading:"????????????",description:"???????????????????????????????????????????????????????????????????????????",modes:"???????????????????????????"},trigger_unavailable:{heading:"??????????????????",description:'????????????????????????"?????????"???????????????????????????'}},actions:{toggle_advanced:"????????????",remove:"??????",setup_groups:"????????????"},errors:{description:"????????????????????????",no_area:"????????????????????????",no_modes:"???????????????????????????????????????????????????",no_auto_bypass_modes:"???????????????????????????????????????????????????????????????"}}},dialogs:{manage_groups:{title:"?????????????????????",description:"?????????????????????????????????????????????????????????????????????????????????????????????????????????",no_items:"????????????",actions:{new_group:"?????????"}},create_group:{title:"??????????????????",fields:{name:{heading:"??????",description:"????????????????????????"},timeout:{heading:"??????",description:"???????????????????????????????????????????????????"},sensors:{heading:"?????????",description:"???????????????????????????????????????"}},errors:{invalid_name:"????????????????????????",insufficient_sensors:"??????????????????2???????????????"}},edit_group:{title:"?????????????????????''{name}''"}}},codes:{title:"??????",cards:{codes:{description:"????????????????????????",fields:{code_arm_required:{heading:"??????????????????",description:"?????????????????????????????????"},code_disarm_required:{heading:"????????????????????????",description:"?????????????????????????????????"},code_format:{heading:"????????????",description:"??????Lovelace alarm card??????????????????",code_format_number:"PIN???",code_format_text:"??????"}}},user_management:{title:"????????????",description:"??????????????????????????????????????????/???????????????",no_items:"????????????",actions:{new_user:"?????????"}},new_user:{title:"???????????????",description:"??????????????????????????????????????????????????????",fields:{name:{heading:"??????",description:"?????????????????????"},code:{heading:"??????",description:"??????????????????"},confirm_code:{heading:"????????????",description:"?????????????????????"},can_arm:{heading:"????????????????????????",description:"??????????????????????????????"},can_disarm:{heading:"??????????????????????????????",description:"??????????????????????????????"},is_override_code:{heading:"???????????????",description:"???????????????????????????????????????"},area_limit:{heading:"????????????",description:"????????????????????????????????????"}},errors:{no_name:"?????????????????????",no_code:"??????????????????4?????????/?????????",code_mismatch:"??????????????????"}},edit_user:{title:"????????????",description:"????????? ''{name}'' ???????????????",fields:{old_code:{heading:"????????????",description:"??????????????????????????????????????????"}}}}},actions:{title:"??????",cards:{notifications:{title:"??????",description:"????????????????????????????????????????????????????????????????????????????????????",table:{no_items:"????????????????????????????????????",no_area_warning:"???????????????????????????????????????"},actions:{new_notification:"?????????"}},actions:{description:"??????????????????????????????????????????????????????????????????",table:{no_items:"????????????????????????????????????"},actions:{new_action:"?????????"}},new_notification:{title:"????????????",description:"?????????/?????????????????????????????????????????????",trigger:"??????",action:"??????",options:"??????",fields:{event:{heading:"??????",description:"????????????????????????",choose:{armed:{name:"??????????????????",description:"????????????????????????"},disarmed:{name:"????????????????????????",description:"????????????????????????"},triggered:{name:"??????????????????",description:"??????????????????"},untriggered:{name:"????????????????????????",description:"????????????????????????????????????"},arm_failure:{name:"????????????",description:"??????????????????????????????????????????????????????????????????"},arming:{name:"??????????????????",description:"??????????????????????????????????????????"},pending:{name:"??????????????????",description:"?????????????????????????????????????????????"}}},mode:{heading:"??????",description:"??????????????????????????????????????????????????????"},title:{heading:"??????",description:"?????????????????????"},message:{heading:"??????",description:"?????????????????????",insert_wildcard:"???????????????",placeholders:{armed:"????????????????????? {{arm_mode}}",disarmed:"??????????????????????????????",triggered:"??????????????????! ?????????{{open_sensors}}.",untriggered:"???????????????????????????",arm_failure:"??????????????????????????????????????? {{open_sensors}}.",arming:"????????????????????????????????????????????????",pending:"?????????????????????????????????????????????!"}},open_sensors_format:{heading:"open_sensors??????????????????",description:"?????????????????????????????????????????????",options:{default:"???????????????",short:"?????????"}},arm_mode_format:{heading:"??????????????????????????????",description:"?????????????????????????????????????????????"},target:{heading:"??????",description:"????????????????????????"},name:{heading:"??????",description:"??????????????????",placeholders:{armed:"??????????????? {target}",disarmed:"????????????????????? {target}",triggered:"????????????????????? {target}",untriggered:"????????????????????? {target}",arm_failure:"????????????????????? {target}",arming:"??????????????????????????? {target}",pending:"??????????????????????????? {target}"}},delete:{heading:"???????????????",description:"?????????????????????????????????"}},actions:{test:"??????"}},new_action:{title:"????????????",description:"?????????/????????????????????????????????????????????????????????????????????????",fields:{event:{heading:"??????",description:"?????????????????????????????????"},area:{heading:"??????",description:"???????????????????????????????????????????????????"},mode:{heading:"??????",description:"??????????????????????????????????????????????????????"},entity:{heading:"??????",description:"????????????????????????"},action:{heading:"??????",description:"????????????????????????",no_common_actions:"???????????????YAML????????????????????????????????????"},name:{heading:"??????",description:"??????????????????",placeholders:{armed:"???????????? {entity} ????????? {state}???",disarmed:"?????????????????? {entity} ????????? {state}???",triggered:"?????????????????? {entity} ????????? {state}???",untriggered:"?????????????????? {entity} ????????? {state}???",arm_failure:"?????????????????? {entity} ????????? {state}???",arming:"???????????????????????? {entity} ????????? {state}???",pending:"???????????????????????? {entity} ????????? {state}???"}}}}}}},ta={common:Xt,components:Jt,title:"????????????",panels:ea},aa=Object.freeze({__proto__:null,common:Xt,components:Jt,title:"????????????",panels:ea,default:ta}),ia=function(e,t){return(ia=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])})(e,t)};function sa(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function a(){this.constructor=e}ia(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}var na=function(){return(na=Object.assign||function(e){for(var t,a=1,i=arguments.length;a<i;a++)for(var s in t=arguments[a])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)};function ra(e,t,a){if(a||2===arguments.length)for(var i,s=0,n=t.length;s<n;s++)!i&&s in t||(i||(i=Array.prototype.slice.call(t,0,s)),i[s]=t[s]);return e.concat(i||Array.prototype.slice.call(t))}
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */var oa,da,la,ca=function(){return(ca=Object.assign||function(e){for(var t,a=1,i=arguments.length;a<i;a++)for(var s in t=arguments[a])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)};function ha(e){return e.type===da.literal}function ma(e){return e.type===da.argument}function ua(e){return e.type===da.number}function pa(e){return e.type===da.date}function ga(e){return e.type===da.time}function va(e){return e.type===da.select}function fa(e){return e.type===da.plural}function _a(e){return e.type===da.pound}function ba(e){return e.type===da.tag}function ya(e){return!(!e||"object"!=typeof e||e.type!==la.number)}function wa(e){return!(!e||"object"!=typeof e||e.type!==la.dateTime)}!function(e){e[e.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",e[e.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",e[e.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",e[e.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",e[e.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",e[e.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",e[e.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",e[e.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",e[e.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",e[e.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",e[e.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",e[e.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",e[e.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",e[e.INVALID_TAG=23]="INVALID_TAG",e[e.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",e[e.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",e[e.UNCLOSED_TAG=27]="UNCLOSED_TAG"}(oa||(oa={})),function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"}(da||(da={})),function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"}(la||(la={}));var ka=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,Aa=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function $a(e){var t={};return e.replace(Aa,(function(e){var a=e.length;switch(e[0]){case"G":t.era=4===a?"long":5===a?"narrow":"short";break;case"y":t.year=2===a?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":t.month=["numeric","2-digit","short","long","narrow"][a-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":t.day=["numeric","2-digit"][a-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":t.weekday=4===a?"short":5===a?"narrow":"short";break;case"e":if(a<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");t.weekday=["short","long","narrow","short"][a-4];break;case"c":if(a<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");t.weekday=["short","long","narrow","short"][a-4];break;case"a":t.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":t.hourCycle="h12",t.hour=["numeric","2-digit"][a-1];break;case"H":t.hourCycle="h23",t.hour=["numeric","2-digit"][a-1];break;case"K":t.hourCycle="h11",t.hour=["numeric","2-digit"][a-1];break;case"k":t.hourCycle="h24",t.hour=["numeric","2-digit"][a-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":t.minute=["numeric","2-digit"][a-1];break;case"s":t.second=["numeric","2-digit"][a-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":t.timeZoneName=a<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""})),t}
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */var ja=function(){return(ja=Object.assign||function(e){for(var t,a=1,i=arguments.length;a<i;a++)for(var s in t=arguments[a])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)},xa=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;var Oa,Ta=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,Ea=/^(@+)?(\+|#+)?[rs]?$/g,za=/(\*)(0+)|(#+)(0+)|(0+)/g,Sa=/^(0+)$/;function Ca(e){var t={};return"r"===e[e.length-1]?t.roundingPriority="morePrecision":"s"===e[e.length-1]&&(t.roundingPriority="lessPrecision"),e.replace(Ea,(function(e,a,i){return"string"!=typeof i?(t.minimumSignificantDigits=a.length,t.maximumSignificantDigits=a.length):"+"===i?t.minimumSignificantDigits=a.length:"#"===a[0]?t.maximumSignificantDigits=a.length:(t.minimumSignificantDigits=a.length,t.maximumSignificantDigits=a.length+("string"==typeof i?i.length:0)),""})),t}function Ma(e){switch(e){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function Na(e){var t;if("E"===e[0]&&"E"===e[1]?(t={notation:"engineering"},e=e.slice(2)):"E"===e[0]&&(t={notation:"scientific"},e=e.slice(1)),t){var a=e.slice(0,2);if("+!"===a?(t.signDisplay="always",e=e.slice(2)):"+?"===a&&(t.signDisplay="exceptZero",e=e.slice(2)),!Sa.test(e))throw new Error("Malformed concise eng/scientific notation");t.minimumIntegerDigits=e.length}return t}function Da(e){var t=Ma(e);return t||{}}function Pa(e){for(var t={},a=0,i=e;a<i.length;a++){var s=i[a];switch(s.stem){case"percent":case"%":t.style="percent";continue;case"%x100":t.style="percent",t.scale=100;continue;case"currency":t.style="currency",t.currency=s.options[0];continue;case"group-off":case",_":t.useGrouping=!1;continue;case"precision-integer":case".":t.maximumFractionDigits=0;continue;case"measure-unit":case"unit":t.style="unit",t.unit=s.options[0].replace(/^(.*?)-/,"");continue;case"compact-short":case"K":t.notation="compact",t.compactDisplay="short";continue;case"compact-long":case"KK":t.notation="compact",t.compactDisplay="long";continue;case"scientific":t=ja(ja(ja({},t),{notation:"scientific"}),s.options.reduce((function(e,t){return ja(ja({},e),Da(t))}),{}));continue;case"engineering":t=ja(ja(ja({},t),{notation:"engineering"}),s.options.reduce((function(e,t){return ja(ja({},e),Da(t))}),{}));continue;case"notation-simple":t.notation="standard";continue;case"unit-width-narrow":t.currencyDisplay="narrowSymbol",t.unitDisplay="narrow";continue;case"unit-width-short":t.currencyDisplay="code",t.unitDisplay="short";continue;case"unit-width-full-name":t.currencyDisplay="name",t.unitDisplay="long";continue;case"unit-width-iso-code":t.currencyDisplay="symbol";continue;case"scale":t.scale=parseFloat(s.options[0]);continue;case"integer-width":if(s.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");s.options[0].replace(za,(function(e,a,i,s,n,r){if(a)t.minimumIntegerDigits=i.length;else{if(s&&n)throw new Error("We currently do not support maximum integer digits");if(r)throw new Error("We currently do not support exact integer digits")}return""}));continue}if(Sa.test(s.stem))t.minimumIntegerDigits=s.stem.length;else if(Ta.test(s.stem)){if(s.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");s.stem.replace(Ta,(function(e,a,i,s,n,r){return"*"===i?t.minimumFractionDigits=a.length:s&&"#"===s[0]?t.maximumFractionDigits=s.length:n&&r?(t.minimumFractionDigits=n.length,t.maximumFractionDigits=n.length+r.length):(t.minimumFractionDigits=a.length,t.maximumFractionDigits=a.length),""}));var n=s.options[0];"w"===n?t=ja(ja({},t),{trailingZeroDisplay:"stripIfInteger"}):n&&(t=ja(ja({},t),Ca(n)))}else if(Ea.test(s.stem))t=ja(ja({},t),Ca(s.stem));else{var r=Ma(s.stem);r&&(t=ja(ja({},t),r));var o=Na(s.stem);o&&(t=ja(ja({},t),o))}}return t}var La=new RegExp("^".concat(ka.source,"*")),qa=new RegExp("".concat(ka.source,"*$"));function Ra(e,t){return{start:e,end:t}}var Ua=!!String.prototype.startsWith,Ia=!!String.fromCodePoint,Va=!!Object.fromEntries,Ga=!!String.prototype.codePointAt,Fa=!!String.prototype.trimStart,Ha=!!String.prototype.trimEnd,Ya=!!Number.isSafeInteger?Number.isSafeInteger:function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e&&Math.abs(e)<=9007199254740991},Ba=!0;try{Ba="a"===(null===(Oa=ti("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu").exec("a"))||void 0===Oa?void 0:Oa[0])}catch(C){Ba=!1}var Ka,Za=Ua?function(e,t,a){return e.startsWith(t,a)}:function(e,t,a){return e.slice(a,a+t.length)===t},Qa=Ia?String.fromCodePoint:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var a,i="",s=e.length,n=0;s>n;){if((a=e[n++])>1114111)throw RangeError(a+" is not a valid code point");i+=a<65536?String.fromCharCode(a):String.fromCharCode(55296+((a-=65536)>>10),a%1024+56320)}return i},Wa=Va?Object.fromEntries:function(e){for(var t={},a=0,i=e;a<i.length;a++){var s=i[a],n=s[0],r=s[1];t[n]=r}return t},Xa=Ga?function(e,t){return e.codePointAt(t)}:function(e,t){var a=e.length;if(!(t<0||t>=a)){var i,s=e.charCodeAt(t);return s<55296||s>56319||t+1===a||(i=e.charCodeAt(t+1))<56320||i>57343?s:i-56320+(s-55296<<10)+65536}},Ja=Fa?function(e){return e.trimStart()}:function(e){return e.replace(La,"")},ei=Ha?function(e){return e.trimEnd()}:function(e){return e.replace(qa,"")};function ti(e,t){return new RegExp(e,t)}if(Ba){var ai=ti("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");Ka=function(e,t){var a;return ai.lastIndex=t,null!==(a=ai.exec(e)[1])&&void 0!==a?a:""}}else Ka=function(e,t){for(var a=[];;){var i=Xa(e,t);if(void 0===i||ri(i)||oi(i))break;a.push(i),t+=i>=65536?2:1}return Qa.apply(void 0,a)};var ii=function(){function e(e,t){void 0===t&&(t={}),this.message=e,this.position={offset:0,line:1,column:1},this.ignoreTag=!!t.ignoreTag,this.requiresOtherClause=!!t.requiresOtherClause,this.shouldParseSkeletons=!!t.shouldParseSkeletons}return e.prototype.parse=function(){if(0!==this.offset())throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},e.prototype.parseMessage=function(e,t,a){for(var i=[];!this.isEOF();){var s=this.char();if(123===s){if((n=this.parseArgument(e,a)).err)return n;i.push(n.val)}else{if(125===s&&e>0)break;if(35!==s||"plural"!==t&&"selectordinal"!==t){if(60===s&&!this.ignoreTag&&47===this.peek()){if(a)break;return this.error(oa.UNMATCHED_CLOSING_TAG,Ra(this.clonePosition(),this.clonePosition()))}if(60===s&&!this.ignoreTag&&si(this.peek()||0)){if((n=this.parseTag(e,t)).err)return n;i.push(n.val)}else{var n;if((n=this.parseLiteral(e,t)).err)return n;i.push(n.val)}}else{var r=this.clonePosition();this.bump(),i.push({type:da.pound,location:Ra(r,this.clonePosition())})}}}return{val:i,err:null}},e.prototype.parseTag=function(e,t){var a=this.clonePosition();this.bump();var i=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:da.literal,value:"<".concat(i,"/>"),location:Ra(a,this.clonePosition())},err:null};if(this.bumpIf(">")){var s=this.parseMessage(e+1,t,!0);if(s.err)return s;var n=s.val,r=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!si(this.char()))return this.error(oa.INVALID_TAG,Ra(r,this.clonePosition()));var o=this.clonePosition();return i!==this.parseTagName()?this.error(oa.UNMATCHED_CLOSING_TAG,Ra(o,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:da.tag,value:i,children:n,location:Ra(a,this.clonePosition())},err:null}:this.error(oa.INVALID_TAG,Ra(r,this.clonePosition())))}return this.error(oa.UNCLOSED_TAG,Ra(a,this.clonePosition()))}return this.error(oa.INVALID_TAG,Ra(a,this.clonePosition()))},e.prototype.parseTagName=function(){var e=this.offset();for(this.bump();!this.isEOF()&&ni(this.char());)this.bump();return this.message.slice(e,this.offset())},e.prototype.parseLiteral=function(e,t){for(var a=this.clonePosition(),i="";;){var s=this.tryParseQuote(t);if(s)i+=s;else{var n=this.tryParseUnquoted(e,t);if(n)i+=n;else{var r=this.tryParseLeftAngleBracket();if(!r)break;i+=r}}}var o=Ra(a,this.clonePosition());return{val:{type:da.literal,value:i,location:o},err:null}},e.prototype.tryParseLeftAngleBracket=function(){return this.isEOF()||60!==this.char()||!this.ignoreTag&&(si(e=this.peek()||0)||47===e)?null:(this.bump(),"<");var e},e.prototype.tryParseQuote=function(e){if(this.isEOF()||39!==this.char())return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if("plural"===e||"selectordinal"===e)break;return null;default:return null}this.bump();var t=[this.char()];for(this.bump();!this.isEOF();){var a=this.char();if(39===a){if(39!==this.peek()){this.bump();break}t.push(39),this.bump()}else t.push(a);this.bump()}return Qa.apply(void 0,t)},e.prototype.tryParseUnquoted=function(e,t){if(this.isEOF())return null;var a=this.char();return 60===a||123===a||35===a&&("plural"===t||"selectordinal"===t)||125===a&&e>0?null:(this.bump(),Qa(a))},e.prototype.parseArgument=function(e,t){var a=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(oa.EXPECT_ARGUMENT_CLOSING_BRACE,Ra(a,this.clonePosition()));if(125===this.char())return this.bump(),this.error(oa.EMPTY_ARGUMENT,Ra(a,this.clonePosition()));var i=this.parseIdentifierIfPossible().value;if(!i)return this.error(oa.MALFORMED_ARGUMENT,Ra(a,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(oa.EXPECT_ARGUMENT_CLOSING_BRACE,Ra(a,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:da.argument,value:i,location:Ra(a,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(oa.EXPECT_ARGUMENT_CLOSING_BRACE,Ra(a,this.clonePosition())):this.parseArgumentOptions(e,t,i,a);default:return this.error(oa.MALFORMED_ARGUMENT,Ra(a,this.clonePosition()))}},e.prototype.parseIdentifierIfPossible=function(){var e=this.clonePosition(),t=this.offset(),a=Ka(this.message,t),i=t+a.length;return this.bumpTo(i),{value:a,location:Ra(e,this.clonePosition())}},e.prototype.parseArgumentOptions=function(e,t,a,i){var s,n=this.clonePosition(),r=this.parseIdentifierIfPossible().value,o=this.clonePosition();switch(r){case"":return this.error(oa.EXPECT_ARGUMENT_TYPE,Ra(n,o));case"number":case"date":case"time":this.bumpSpace();var d=null;if(this.bumpIf(",")){this.bumpSpace();var l=this.clonePosition();if((v=this.parseSimpleArgStyleIfPossible()).err)return v;if(0===(m=ei(v.val)).length)return this.error(oa.EXPECT_ARGUMENT_STYLE,Ra(this.clonePosition(),this.clonePosition()));d={style:m,styleLocation:Ra(l,this.clonePosition())}}if((f=this.tryParseArgumentClose(i)).err)return f;var c=Ra(i,this.clonePosition());if(d&&Za(null==d?void 0:d.style,"::",0)){var h=Ja(d.style.slice(2));if("number"===r)return(v=this.parseNumberSkeletonFromString(h,d.styleLocation)).err?v:{val:{type:da.number,value:a,location:c,style:v.val},err:null};if(0===h.length)return this.error(oa.EXPECT_DATE_TIME_SKELETON,c);var m={type:la.dateTime,pattern:h,location:d.styleLocation,parsedOptions:this.shouldParseSkeletons?$a(h):{}};return{val:{type:"date"===r?da.date:da.time,value:a,location:c,style:m},err:null}}return{val:{type:"number"===r?da.number:"date"===r?da.date:da.time,value:a,location:c,style:null!==(s=null==d?void 0:d.style)&&void 0!==s?s:null},err:null};case"plural":case"selectordinal":case"select":var u=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(oa.EXPECT_SELECT_ARGUMENT_OPTIONS,Ra(u,ca({},u)));this.bumpSpace();var p=this.parseIdentifierIfPossible(),g=0;if("select"!==r&&"offset"===p.value){if(!this.bumpIf(":"))return this.error(oa.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,Ra(this.clonePosition(),this.clonePosition()));var v;if(this.bumpSpace(),(v=this.tryParseDecimalInteger(oa.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,oa.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err)return v;this.bumpSpace(),p=this.parseIdentifierIfPossible(),g=v.val}var f,_=this.tryParsePluralOrSelectOptions(e,r,t,p);if(_.err)return _;if((f=this.tryParseArgumentClose(i)).err)return f;var b=Ra(i,this.clonePosition());return"select"===r?{val:{type:da.select,value:a,options:Wa(_.val),location:b},err:null}:{val:{type:da.plural,value:a,options:Wa(_.val),offset:g,pluralType:"plural"===r?"cardinal":"ordinal",location:b},err:null};default:return this.error(oa.INVALID_ARGUMENT_TYPE,Ra(n,o))}},e.prototype.tryParseArgumentClose=function(e){return this.isEOF()||125!==this.char()?this.error(oa.EXPECT_ARGUMENT_CLOSING_BRACE,Ra(e,this.clonePosition())):(this.bump(),{val:!0,err:null})},e.prototype.parseSimpleArgStyleIfPossible=function(){for(var e=0,t=this.clonePosition();!this.isEOF();){switch(this.char()){case 39:this.bump();var a=this.clonePosition();if(!this.bumpUntil("'"))return this.error(oa.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,Ra(a,this.clonePosition()));this.bump();break;case 123:e+=1,this.bump();break;case 125:if(!(e>0))return{val:this.message.slice(t.offset,this.offset()),err:null};e-=1;break;default:this.bump()}}return{val:this.message.slice(t.offset,this.offset()),err:null}},e.prototype.parseNumberSkeletonFromString=function(e,t){var a=[];try{a=function(e){if(0===e.length)throw new Error("Number skeleton cannot be empty");for(var t=[],a=0,i=e.split(xa).filter((function(e){return e.length>0}));a<i.length;a++){var s=i[a].split("/");if(0===s.length)throw new Error("Invalid number skeleton");for(var n=s[0],r=s.slice(1),o=0,d=r;o<d.length;o++){if(0===d[o].length)throw new Error("Invalid number skeleton")}t.push({stem:n,options:r})}return t}(e)}catch(e){return this.error(oa.INVALID_NUMBER_SKELETON,t)}return{val:{type:la.number,tokens:a,location:t,parsedOptions:this.shouldParseSkeletons?Pa(a):{}},err:null}},e.prototype.tryParsePluralOrSelectOptions=function(e,t,a,i){for(var s,n=!1,r=[],o=new Set,d=i.value,l=i.location;;){if(0===d.length){var c=this.clonePosition();if("select"===t||!this.bumpIf("="))break;var h=this.tryParseDecimalInteger(oa.EXPECT_PLURAL_ARGUMENT_SELECTOR,oa.INVALID_PLURAL_ARGUMENT_SELECTOR);if(h.err)return h;l=Ra(c,this.clonePosition()),d=this.message.slice(c.offset,this.offset())}if(o.has(d))return this.error("select"===t?oa.DUPLICATE_SELECT_ARGUMENT_SELECTOR:oa.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,l);"other"===d&&(n=!0),this.bumpSpace();var m=this.clonePosition();if(!this.bumpIf("{"))return this.error("select"===t?oa.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:oa.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,Ra(this.clonePosition(),this.clonePosition()));var u=this.parseMessage(e+1,t,a);if(u.err)return u;var p=this.tryParseArgumentClose(m);if(p.err)return p;r.push([d,{value:u.val,location:Ra(m,this.clonePosition())}]),o.add(d),this.bumpSpace(),d=(s=this.parseIdentifierIfPossible()).value,l=s.location}return 0===r.length?this.error("select"===t?oa.EXPECT_SELECT_ARGUMENT_SELECTOR:oa.EXPECT_PLURAL_ARGUMENT_SELECTOR,Ra(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!n?this.error(oa.MISSING_OTHER_CLAUSE,Ra(this.clonePosition(),this.clonePosition())):{val:r,err:null}},e.prototype.tryParseDecimalInteger=function(e,t){var a=1,i=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(a=-1);for(var s=!1,n=0;!this.isEOF();){var r=this.char();if(!(r>=48&&r<=57))break;s=!0,n=10*n+(r-48),this.bump()}var o=Ra(i,this.clonePosition());return s?Ya(n*=a)?{val:n,err:null}:this.error(t,o):this.error(e,o)},e.prototype.offset=function(){return this.position.offset},e.prototype.isEOF=function(){return this.offset()===this.message.length},e.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},e.prototype.char=function(){var e=this.position.offset;if(e>=this.message.length)throw Error("out of bound");var t=Xa(this.message,e);if(void 0===t)throw Error("Offset ".concat(e," is at invalid UTF-16 code unit boundary"));return t},e.prototype.error=function(e,t){return{val:null,err:{kind:e,message:this.message,location:t}}},e.prototype.bump=function(){if(!this.isEOF()){var e=this.char();10===e?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=e<65536?1:2)}},e.prototype.bumpIf=function(e){if(Za(this.message,e,this.offset())){for(var t=0;t<e.length;t++)this.bump();return!0}return!1},e.prototype.bumpUntil=function(e){var t=this.offset(),a=this.message.indexOf(e,t);return a>=0?(this.bumpTo(a),!0):(this.bumpTo(this.message.length),!1)},e.prototype.bumpTo=function(e){if(this.offset()>e)throw Error("targetOffset ".concat(e," must be greater than or equal to the current offset ").concat(this.offset()));for(e=Math.min(e,this.message.length);;){var t=this.offset();if(t===e)break;if(t>e)throw Error("targetOffset ".concat(e," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},e.prototype.bumpSpace=function(){for(;!this.isEOF()&&ri(this.char());)this.bump()},e.prototype.peek=function(){if(this.isEOF())return null;var e=this.char(),t=this.offset(),a=this.message.charCodeAt(t+(e>=65536?2:1));return null!=a?a:null},e}();function si(e){return e>=97&&e<=122||e>=65&&e<=90}function ni(e){return 45===e||46===e||e>=48&&e<=57||95===e||e>=97&&e<=122||e>=65&&e<=90||183==e||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8255&&e<=8256||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039}function ri(e){return e>=9&&e<=13||32===e||133===e||e>=8206&&e<=8207||8232===e||8233===e}function oi(e){return e>=33&&e<=35||36===e||e>=37&&e<=39||40===e||41===e||42===e||43===e||44===e||45===e||e>=46&&e<=47||e>=58&&e<=59||e>=60&&e<=62||e>=63&&e<=64||91===e||92===e||93===e||94===e||96===e||123===e||124===e||125===e||126===e||161===e||e>=162&&e<=165||166===e||167===e||169===e||171===e||172===e||174===e||176===e||177===e||182===e||187===e||191===e||215===e||247===e||e>=8208&&e<=8213||e>=8214&&e<=8215||8216===e||8217===e||8218===e||e>=8219&&e<=8220||8221===e||8222===e||8223===e||e>=8224&&e<=8231||e>=8240&&e<=8248||8249===e||8250===e||e>=8251&&e<=8254||e>=8257&&e<=8259||8260===e||8261===e||8262===e||e>=8263&&e<=8273||8274===e||8275===e||e>=8277&&e<=8286||e>=8592&&e<=8596||e>=8597&&e<=8601||e>=8602&&e<=8603||e>=8604&&e<=8607||8608===e||e>=8609&&e<=8610||8611===e||e>=8612&&e<=8613||8614===e||e>=8615&&e<=8621||8622===e||e>=8623&&e<=8653||e>=8654&&e<=8655||e>=8656&&e<=8657||8658===e||8659===e||8660===e||e>=8661&&e<=8691||e>=8692&&e<=8959||e>=8960&&e<=8967||8968===e||8969===e||8970===e||8971===e||e>=8972&&e<=8991||e>=8992&&e<=8993||e>=8994&&e<=9e3||9001===e||9002===e||e>=9003&&e<=9083||9084===e||e>=9085&&e<=9114||e>=9115&&e<=9139||e>=9140&&e<=9179||e>=9180&&e<=9185||e>=9186&&e<=9254||e>=9255&&e<=9279||e>=9280&&e<=9290||e>=9291&&e<=9311||e>=9472&&e<=9654||9655===e||e>=9656&&e<=9664||9665===e||e>=9666&&e<=9719||e>=9720&&e<=9727||e>=9728&&e<=9838||9839===e||e>=9840&&e<=10087||10088===e||10089===e||10090===e||10091===e||10092===e||10093===e||10094===e||10095===e||10096===e||10097===e||10098===e||10099===e||10100===e||10101===e||e>=10132&&e<=10175||e>=10176&&e<=10180||10181===e||10182===e||e>=10183&&e<=10213||10214===e||10215===e||10216===e||10217===e||10218===e||10219===e||10220===e||10221===e||10222===e||10223===e||e>=10224&&e<=10239||e>=10240&&e<=10495||e>=10496&&e<=10626||10627===e||10628===e||10629===e||10630===e||10631===e||10632===e||10633===e||10634===e||10635===e||10636===e||10637===e||10638===e||10639===e||10640===e||10641===e||10642===e||10643===e||10644===e||10645===e||10646===e||10647===e||10648===e||e>=10649&&e<=10711||10712===e||10713===e||10714===e||10715===e||e>=10716&&e<=10747||10748===e||10749===e||e>=10750&&e<=11007||e>=11008&&e<=11055||e>=11056&&e<=11076||e>=11077&&e<=11078||e>=11079&&e<=11084||e>=11085&&e<=11123||e>=11124&&e<=11125||e>=11126&&e<=11157||11158===e||e>=11159&&e<=11263||e>=11776&&e<=11777||11778===e||11779===e||11780===e||11781===e||e>=11782&&e<=11784||11785===e||11786===e||11787===e||11788===e||11789===e||e>=11790&&e<=11798||11799===e||e>=11800&&e<=11801||11802===e||11803===e||11804===e||11805===e||e>=11806&&e<=11807||11808===e||11809===e||11810===e||11811===e||11812===e||11813===e||11814===e||11815===e||11816===e||11817===e||e>=11818&&e<=11822||11823===e||e>=11824&&e<=11833||e>=11834&&e<=11835||e>=11836&&e<=11839||11840===e||11841===e||11842===e||e>=11843&&e<=11855||e>=11856&&e<=11857||11858===e||e>=11859&&e<=11903||e>=12289&&e<=12291||12296===e||12297===e||12298===e||12299===e||12300===e||12301===e||12302===e||12303===e||12304===e||12305===e||e>=12306&&e<=12307||12308===e||12309===e||12310===e||12311===e||12312===e||12313===e||12314===e||12315===e||12316===e||12317===e||e>=12318&&e<=12319||12320===e||12336===e||64830===e||64831===e||e>=65093&&e<=65094}function di(e,t){void 0===t&&(t={}),t=ca({shouldParseSkeletons:!0,requiresOtherClause:!0},t);var a=new ii(e,t).parse();if(a.err){var i=SyntaxError(oa[a.err.kind]);throw i.location=a.err.location,i.originalMessage=a.err.message,i}return(null==t?void 0:t.captureLocation)||function e(t){t.forEach((function(t){if(delete t.location,va(t)||fa(t))for(var a in t.options)delete t.options[a].location,e(t.options[a].value);else ua(t)&&ya(t.style)||(pa(t)||ga(t))&&wa(t.style)?delete t.style.location:ba(t)&&e(t.children)}))}(a.val),a.val}function li(e,t){var a=t&&t.cache?t.cache:fi,i=t&&t.serializer?t.serializer:pi;return(t&&t.strategy?t.strategy:ui)(e,{cache:a,serializer:i})}function ci(e,t,a,i){var s,n=null==(s=i)||"number"==typeof s||"boolean"==typeof s?i:a(i),r=t.get(n);return void 0===r&&(r=e.call(this,i),t.set(n,r)),r}function hi(e,t,a){var i=Array.prototype.slice.call(arguments,3),s=a(i),n=t.get(s);return void 0===n&&(n=e.apply(this,i),t.set(s,n)),n}function mi(e,t,a,i,s){return a.bind(t,e,i,s)}function ui(e,t){return mi(e,this,1===e.length?ci:hi,t.cache.create(),t.serializer)}var pi=function(){return JSON.stringify(arguments)};function gi(){this.cache=Object.create(null)}gi.prototype.get=function(e){return this.cache[e]},gi.prototype.set=function(e,t){this.cache[e]=t};var vi,fi={create:function(){return new gi}},_i={variadic:function(e,t){return mi(e,this,hi,t.cache.create(),t.serializer)},monadic:function(e,t){return mi(e,this,ci,t.cache.create(),t.serializer)}};!function(e){e.MISSING_VALUE="MISSING_VALUE",e.INVALID_VALUE="INVALID_VALUE",e.MISSING_INTL_API="MISSING_INTL_API"}(vi||(vi={}));var bi,yi=function(e){function t(t,a,i){var s=e.call(this,t)||this;return s.code=a,s.originalMessage=i,s}return sa(t,e),t.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},t}(Error),wi=function(e){function t(t,a,i,s){return e.call(this,'Invalid values for "'.concat(t,'": "').concat(a,'". Options are "').concat(Object.keys(i).join('", "'),'"'),vi.INVALID_VALUE,s)||this}return sa(t,e),t}(yi),ki=function(e){function t(t,a,i){return e.call(this,'Value for "'.concat(t,'" must be of type ').concat(a),vi.INVALID_VALUE,i)||this}return sa(t,e),t}(yi),Ai=function(e){function t(t,a){return e.call(this,'The intl string context variable "'.concat(t,'" was not provided to the string "').concat(a,'"'),vi.MISSING_VALUE,a)||this}return sa(t,e),t}(yi);function $i(e){return"function"==typeof e}function ji(e,t,a,i,s,n,r){if(1===e.length&&ha(e[0]))return[{type:bi.literal,value:e[0].value}];for(var o=[],d=0,l=e;d<l.length;d++){var c=l[d];if(ha(c))o.push({type:bi.literal,value:c.value});else if(_a(c))"number"==typeof n&&o.push({type:bi.literal,value:a.getNumberFormat(t).format(n)});else{var h=c.value;if(!s||!(h in s))throw new Ai(h,r);var m=s[h];if(ma(c))m&&"string"!=typeof m&&"number"!=typeof m||(m="string"==typeof m||"number"==typeof m?String(m):""),o.push({type:"string"==typeof m?bi.literal:bi.object,value:m});else if(pa(c)){var u="string"==typeof c.style?i.date[c.style]:wa(c.style)?c.style.parsedOptions:void 0;o.push({type:bi.literal,value:a.getDateTimeFormat(t,u).format(m)})}else if(ga(c)){u="string"==typeof c.style?i.time[c.style]:wa(c.style)?c.style.parsedOptions:void 0;o.push({type:bi.literal,value:a.getDateTimeFormat(t,u).format(m)})}else if(ua(c)){(u="string"==typeof c.style?i.number[c.style]:ya(c.style)?c.style.parsedOptions:void 0)&&u.scale&&(m*=u.scale||1),o.push({type:bi.literal,value:a.getNumberFormat(t,u).format(m)})}else{if(ba(c)){var p=c.children,g=c.value,v=s[g];if(!$i(v))throw new ki(g,"function",r);var f=v(ji(p,t,a,i,s,n).map((function(e){return e.value})));Array.isArray(f)||(f=[f]),o.push.apply(o,f.map((function(e){return{type:"string"==typeof e?bi.literal:bi.object,value:e}})))}if(va(c)){if(!(_=c.options[m]||c.options.other))throw new wi(c.value,m,Object.keys(c.options),r);o.push.apply(o,ji(_.value,t,a,i,s))}else if(fa(c)){var _;if(!(_=c.options["=".concat(m)])){if(!Intl.PluralRules)throw new yi('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',vi.MISSING_INTL_API,r);var b=a.getPluralRules(t,{type:c.pluralType}).select(m-(c.offset||0));_=c.options[b]||c.options.other}if(!_)throw new wi(c.value,m,Object.keys(c.options),r);o.push.apply(o,ji(_.value,t,a,i,s,m-(c.offset||0)))}else;}}}return function(e){return e.length<2?e:e.reduce((function(e,t){var a=e[e.length-1];return a&&a.type===bi.literal&&t.type===bi.literal?a.value+=t.value:e.push(t),e}),[])}(o)}function xi(e,t){return t?Object.keys(e).reduce((function(a,i){var s,n;return a[i]=(s=e[i],(n=t[i])?na(na(na({},s||{}),n||{}),Object.keys(s).reduce((function(e,t){return e[t]=na(na({},s[t]),n[t]||{}),e}),{})):s),a}),na({},e)):e}function Oi(e){return{create:function(){return{get:function(t){return e[t]},set:function(t,a){e[t]=a}}}}}!function(e){e[e.literal=0]="literal",e[e.object=1]="object"}(bi||(bi={}));var Ti=function(){function e(t,a,i,s){var n,r=this;if(void 0===a&&(a=e.defaultLocale),this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(e){var t=r.formatToParts(e);if(1===t.length)return t[0].value;var a=t.reduce((function(e,t){return e.length&&t.type===bi.literal&&"string"==typeof e[e.length-1]?e[e.length-1]+=t.value:e.push(t.value),e}),[]);return a.length<=1?a[0]||"":a},this.formatToParts=function(e){return ji(r.ast,r.locales,r.formatters,r.formats,e,void 0,r.message)},this.resolvedOptions=function(){return{locale:Intl.NumberFormat.supportedLocalesOf(r.locales)[0]}},this.getAst=function(){return r.ast},"string"==typeof t){if(this.message=t,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");this.ast=e.__parse(t,{ignoreTag:null==s?void 0:s.ignoreTag})}else this.ast=t;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=xi(e.formats,i),this.locales=a,this.formatters=s&&s.formatters||(void 0===(n=this.formatterCache)&&(n={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:li((function(){for(var e,t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];return new((e=Intl.NumberFormat).bind.apply(e,ra([void 0],t,!1)))}),{cache:Oi(n.number),strategy:_i.variadic}),getDateTimeFormat:li((function(){for(var e,t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];return new((e=Intl.DateTimeFormat).bind.apply(e,ra([void 0],t,!1)))}),{cache:Oi(n.dateTime),strategy:_i.variadic}),getPluralRules:li((function(){for(var e,t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];return new((e=Intl.PluralRules).bind.apply(e,ra([void 0],t,!1)))}),{cache:Oi(n.pluralRules),strategy:_i.variadic})})}return Object.defineProperty(e,"defaultLocale",{get:function(){return e.memoizedDefaultLocale||(e.memoizedDefaultLocale=(new Intl.NumberFormat).resolvedOptions().locale),e.memoizedDefaultLocale},enumerable:!1,configurable:!0}),e.memoizedDefaultLocale=null,e.__parse=di,e.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e}(),Ei={ca:nt,cs:ct,en:gt,et:jt,es:yt,fr:St,it:Pt,nl:It,sk:Yt,sv:Wt,"zh-Hans":aa};function zi(e,t,...a){const i=t.replace(/['"]+/g,"").replace("-","_");var s;try{s=e.split(".").reduce((e,t)=>e[t],Ei[i])}catch(t){s=e.split(".").reduce((e,t)=>e[t],Ei.en)}if(void 0===s&&(s=e.split(".").reduce((e,t)=>e[t],Ei.en)),!a.length)return s;const n={};for(let e=0;e<a.length;e+=2){let t=a[e];t=t.replace(/^{([^}]+)?}$/,"$1"),n[t]=a[e+1]}try{return new Ti(s,t).format(n)}catch(e){return"Translation "+e}}var Si,Ci,Mi,Ni,Di,Pi,Li,qi;function Ri(e){return function(e){if(!e)return Me;if(e.attributes.icon)return e.attributes.icon;var t=Se(e.entity_id);return t in Re?Re[t](e):Pe(t,e.state)}(e)}function Ui(e){return(e=e.replace("_"," ")).charAt(0).toUpperCase()+e.slice(1)}function Ii(e){return e?e.attributes&&e.attributes.friendly_name?e.attributes.friendly_name:String(e.entity_id.split(".").pop()):"(unrecognized entity)"}function Vi(e){let t=[];return e.forEach(e=>{t.find(t=>"object"==typeof e?function(...e){return e.every(t=>JSON.stringify(t)===JSON.stringify(e[0]))}(t,e):t===e)||t.push(e)}),t}function Gi(e,t){return e.filter(e=>e!==t)}function Fi(e,t){return e?Object.entries(e).filter(([e])=>t.includes(e)).reduce((e,[t,a])=>Object.assign(e,{[t]:a}),{}):{}}!function(e){e.ArmedAway="hass:car-traction-control",e.ArmedHome="hass:home-outline",e.ArmedNight="hass:weather-night",e.ArmedCustom="hass:star-outline",e.ArmedVacation="hass:airplane-takeoff"}(Si||(Si={})),function(e){e.STATE_ALARM_DISARMED="disarmed",e.STATE_ALARM_ARMED_HOME="armed_home",e.STATE_ALARM_ARMED_AWAY="armed_away",e.STATE_ALARM_ARMED_NIGHT="armed_night",e.STATE_ALARM_ARMED_CUSTOM_BYPASS="armed_custom_bypass",e.STATE_ALARM_ARMED_VACATION="armed_vacation",e.STATE_ALARM_PENDING="pending",e.STATE_ALARM_ARMING="arming",e.STATE_ALARM_DISARMING="disarming",e.STATE_ALARM_TRIGGERED="triggered"}(Ci||(Ci={})),function(e){e.COMMAND_ALARM_DISARM="disarm",e.COMMAND_ALARM_ARM_HOME="arm_home",e.COMMAND_ALARM_ARM_AWAY="arm_away",e.COMMAND_ALARM_ARM_NIGHT="arm_night",e.COMMAND_ALARM_ARM_CUSTOM_BYPASS="arm_custom_bypass",e.COMMAND_ALARM_ARM_VACATION="arm_vacation"}(Mi||(Mi={})),function(e){e.Door="door",e.Window="window",e.Motion="motion",e.Tamper="tamper",e.Environmental="environmental",e.Other="other"}(Ni||(Ni={})),function(e){e.Door="hass:door-closed",e.Window="hass:window-closed",e.Motion="hass:motion-sensor",e.Tamper="hass:vibrate",e.Environmental="hass:fire",e.Other="hass:contactless-payment-circle-outline"}(Di||(Di={})),function(e){e.Notification="notification",e.Action="action"}(Pi||(Pi={})),function(e){e.ArmedAway="armed_away",e.ArmedHome="armed_home",e.ArmedNight="armed_night",e.ArmedVacation="armed_vacation",e.ArmedCustom="armed_custom_bypass"}(Li||(Li={})),function(e){e.Armed="armed",e.Disarmed="disarmed",e.Triggered="triggered",e.Untriggered="untriggered",e.ArmFailure="arm_failure",e.Arming="arming",e.Pending="pending"}(qi||(qi={}));const Hi=(e,...t)=>{const a={};let i;for(i in e)t.includes(i)||(a[i]=e[i]);return a};function Yi(e){return null!=e}function Bi(e,t){if(null===e||null===t)return e===t;const a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(const i of a)if("object"==typeof e[i]&&"object"==typeof t[i]){if(!Bi(e[i],t[i]))return!1}else if(e[i]!==t[i])return!1;return!0}function Ki(e,t){const a=e.hasOwnProperty("tagName")?e:e.target;Ne(a,"show-dialog",{dialogTag:"error-dialog",dialogImport:()=>Promise.resolve().then((function(){return Us})),dialogParams:{error:t}})}function Zi(e,t){Ki(t,q`
    <b>Something went wrong!</b>
    <br />
    ${e.body.message?q`
          ${e.body.message}
          <br />
          <br />
        `:""}
    ${e.error}
    <br />
    <br />
    Please
    <a href="https://github.com/nielsfaber/alarmo/issues">report</a>
    the bug.
  `)}const Qi=(e,t)=>{var a,i,s,n,r;if(!e)return!1;switch(e){case Ci.STATE_ALARM_ARMED_AWAY:return null===(a=t[Li.ArmedAway])||void 0===a?void 0:a.enabled;case Ci.STATE_ALARM_ARMED_HOME:return null===(i=t[Li.ArmedHome])||void 0===i?void 0:i.enabled;case Ci.STATE_ALARM_ARMED_NIGHT:return null===(s=t[Li.ArmedNight])||void 0===s?void 0:s.enabled;case Ci.STATE_ALARM_ARMED_CUSTOM_BYPASS:return null===(n=t[Li.ArmedCustom])||void 0===n?void 0:n.enabled;case Ci.STATE_ALARM_ARMED_VACATION:return null===(r=t[Li.ArmedVacation])||void 0===r?void 0:r.enabled;default:return!0}};function Wi(e,t){return Object.entries(t).forEach(([t,a])=>{e=t in e&&"object"==typeof e[t]&&null!==e[t]?Object.assign(Object.assign({},e),{[t]:Wi(e[t],a)}):Object.assign(Object.assign({},e),{[t]:a})}),e}function Xi(e,t){const a=e=>"object"==typeof e?a(e.name):e.trim().toLowerCase();return a(e)<a(t)?-1:1}const Ji=o`
  ha-card {
    display: flex;
    flex-direction: column;
    margin: 5px;
    max-width: calc(100vw - 10px);
  }

  .card-header {
    display: flex;
    justify-content: space-between;
  }
  .card-header .name {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  div.warning {
    color: var(--error-color);
    margin-top: 20px;
  }

  div.checkbox-row {
    min-height: 40px;
    display: flex;
    align-items: center;
  }

  div.checkbox-row ha-switch {
    margin-right: 20px;
  }

  div.checkbox-row.right ha-switch {
    margin-left: 20px;
    position: absolute;
    right: 0px;
  }

  mwc-button.active {
    background: var(--primary-color);
    --mdc-theme-primary: var(--text-primary-color);
    border-radius: 4px;
  }
  mwc-button.warning {
    --mdc-theme-primary: var(--error-color);
  }
  mwc-button.success {
    --mdc-theme-primary: var(--success-color);
  }

  mwc-button.disabled.active {
    opacity: 0.5;
  }

  div.entity-row {
    display: flex;
    align-items: center;
    flex-direction: row;
    margin: 10px 0px;
  }
  div.entity-row .info {
    margin-left: 16px;
    flex: 1 0 60px;
  }
  div.entity-row .info,
  div.entity-row .info > * {
    color: var(--primary-text-color);
    transition: color 0.2s ease-in-out;
  }
  div.entity-row .secondary {
    display: block;
    color: var(--secondary-text-color);
    transition: color 0.2s ease-in-out;
  }
  div.entity-row state-badge {
    flex: 0 0 40px;
  }

  ha-dialog div.wrapper {
    margin-bottom: -20px;
  }

  ha-textfield {
    min-width: 220px;
  }

  a,
  a:visited {
    color: var(--primary-color);
  }
  mwc-button ha-icon {
    padding-right: 11px;
  }
  mwc-button[trailingIcon] ha-icon {
    padding: 0px 0px 0px 6px;
  }
  mwc-button.vertical {
    height: 60px;
    --mdc-button-height: 60px;
    background: var(--primary-color);
    --mdc-theme-primary: var(--text-primary-color);
  }
  mwc-button.vertical div {
    display: flex;
    flex-direction: column;
  }
  mwc-button.vertical span {
    display: flex;
  }
  mwc-button.vertical ha-icon {
    display: flex;
    margin-left: 50%;
  }
  mwc-tab {
    --mdc-tab-color-default: var(--secondary-text-color);
    --mdc-tab-text-label-color-default: var(--secondary-text-color);
  }
  mwc-tab ha-icon {
    --mdc-icon-size: 20px;
  }
  mwc-tab.disabled {
    --mdc-theme-primary: var(--disabled-text-color);
    --mdc-tab-color-default: var(--disabled-text-color);
    --mdc-tab-text-label-color-default: var(--disabled-text-color);
  }

  ha-card settings-row:first-child,
  ha-card settings-row:first-of-type {
    border-top: 0px;
  }

  ha-card > ha-card {
    margin: 10px;
  }
`,es=o`
  /* mwc-dialog (ha-dialog) styles */
  ha-dialog {
    --mdc-dialog-min-width: 400px;
    --mdc-dialog-max-width: 600px;
    --mdc-dialog-heading-ink-color: var(--primary-text-color);
    --mdc-dialog-content-ink-color: var(--primary-text-color);
    --justify-action-buttons: space-between;
  }
  /* make dialog fullscreen on small screens */
  @media all and (max-width: 450px), all and (max-height: 500px) {
    ha-dialog {
      --mdc-dialog-min-width: calc(100vw - env(safe-area-inset-right) - env(safe-area-inset-left));
      --mdc-dialog-max-width: calc(100vw - env(safe-area-inset-right) - env(safe-area-inset-left));
      --mdc-dialog-min-height: 100%;
      --mdc-dialog-max-height: 100%;
      --vertial-align-dialog: flex-end;
      --ha-dialog-border-radius: 0px;
    }
  }
  ha-dialog div.description {
    margin-bottom: 10px;
  }
`,ts=()=>{const e=e=>{let t={};for(var a=0;a<e.length;a+=2){const i=e[a],s=a<e.length?e[a+1]:void 0;t=Object.assign(Object.assign({},t),{[i]:s})}return t},t=window.location.pathname.split("/");let a={page:t[2]||"general",params:{}};if(t.length>3){let i=t.slice(3);if(t.includes("filter")){const t=i.findIndex(e=>"filter"==e),s=i.slice(t+1);i=i.slice(0,t),a=Object.assign(Object.assign({},a),{filter:e(s)})}i.length&&(i.length%2&&(a=Object.assign(Object.assign({},a),{subpage:i.shift()})),i.length&&(a=Object.assign(Object.assign({},a),{params:e(i)})))}return a},as=(e,...t)=>{let a={page:e,params:{}};t.forEach(e=>{"string"==typeof e?a=Object.assign(Object.assign({},a),{subpage:e}):"params"in e?a=Object.assign(Object.assign({},a),{params:e.params}):"filter"in e&&(a=Object.assign(Object.assign({},a),{filter:e.filter}))});const i=e=>{let t=Object.keys(e);t=t.filter(t=>e[t]),t.sort();let a="";return t.forEach(t=>{let i=e[t];a=a.length?`${a}/${t}/${i}`:`${t}/${i}`}),a};let s="/alarmo/"+a.page;return a.subpage&&(s=`${s}/${a.subpage}`),i(a.params).length&&(s=`${s}/${i(a.params)}`),a.filter&&(s=`${s}/filter/${i(a.filter)}`),s};let is=class extends ne{constructor(){super(...arguments),this.min=0,this.max=100,this.step=10,this.value=0,this.scaleFactor=1,this.unit="",this.disabled=!1}firstUpdated(){this.value>0&&this.value<60&&(this.unit="sec"),"min"==this.unit&&(this.scaleFactor=1/60),"min"==this.unit&&(this.step=1)}render(){return q`
      <div class="container">
        <div class="prefix">
          <slot name="prefix"></slot>
        </div>
        <div class="slider">
          ${this.getSlider()}
        </div>
        <div class="value${this.disabled?" disabled":""}" @click=${this.toggleUnit}>
          ${this.getValue()}
        </div>
      </div>
    `}getValue(){const e=Number(Math.round(this.value*this.scaleFactor));return!e&&this.zeroValue?this.zeroValue:`${e} ${this.getUnit()}`}getUnit(){switch(this.unit){case"sec":return zi("components.time_slider.seconds",this.hass.language);case"min":return zi("components.time_slider.minutes",this.hass.language);default:return""}}getSlider(){return q`
      <ha-slider
        pin
        min=${Math.round(this.min*this.scaleFactor)}
        max=${Math.round(this.max*this.scaleFactor)}
        step=${this.step}
        value=${Math.round(this.value*this.scaleFactor)}
        ?disabled=${this.disabled}
        @change=${this.updateValue}
      ></ha-slider>
    `}updateValue(e){const t=Number(e.target.value);this.value=Math.round(t/this.scaleFactor)}toggleUnit(){this.unit="min"==this.unit?"sec":"min",this.scaleFactor="min"==this.unit?1/60:1,this.step="min"==this.unit?1:10}};is.styles=o`
    :host {
      display: flex;
      flex-direction: column;
      min-width: 250px;
    }

    div.container {
      display: grid;
      grid-template-columns: max-content 1fr 60px;
      grid-template-rows: min-content;
      grid-template-areas: 'prefix slider value';
    }

    div.prefix {
      grid-area: prefix;
      display: flex;
      align-items: center;
    }

    div.slider {
      grid-area: slider;
      display: flex;
      align-items: center;
      flex: 1;
    }

    div.value {
      grid-area: value;
      min-width: 40px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      cursor: pointer;
    }

    ha-slider {
      width: 100%;
    }

    .disabled {
      color: var(--disabled-text-color);
    }
  `,t([de({type:Number})],is.prototype,"min",void 0),t([de({type:Number})],is.prototype,"max",void 0),t([de({type:Number})],is.prototype,"step",void 0),t([de({type:Number})],is.prototype,"value",void 0),t([de()],is.prototype,"scaleFactor",void 0),t([de({type:String})],is.prototype,"unit",void 0),t([de({type:Boolean})],is.prototype,"disabled",void 0),t([de({type:String})],is.prototype,"zeroValue",void 0),is=t([re("time-slider")],is);var ss="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z",ns="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z";
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const rs=2,os=6,ds=e=>(...t)=>({_$litDirective$:e,values:t});class ls{constructor(e){}T(e,t,a){this.??dt=e,this.M=t,this.??ct=a}S(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}let cs=class extends ne{constructor(){super(...arguments),this.label="",this.items=[],this.clearable=!1,this.icons=!1,this.disabled=!1,this.invalid=!1,this.rowRenderer=e=>{const t=Yi(e.description);return this.icons?q`
        <style>
          mwc-list-item {
            font-size: 15px;
            --mdc-typography-body2-font-size: 14px;
            --mdc-list-item-meta-size: 8px;
            --mdc-list-item-graphic-margin: 8px;
          }
        </style>
        <mwc-list-item graphic="avatar" .twoline=${t}>
          <ha-icon icon="${e.icon}" slot="graphic"></ha-icon>
          <span>${e.name}</span>
          ${t?q`
                <span slot="secondary">${e.description}</span>
              `:""}
        </mwc-list-item>
      `:q`
        <style>
          mwc-list-item {
            font-size: 15px;
            --mdc-typography-body2-font-size: 14px;
          }
        </style>
        <mwc-list-item .twoline=${t}>
          <span>${e.name}</span>
          ${t?q`
                <span slot="secondary">${e.description}</span>
              `:""}
        </mwc-list-item>
      `}}open(){this.updateComplete.then(()=>{var e,t;null===(t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("vaadin-combo-box-light"))||void 0===t||t.open()})}disconnectedCallback(){super.disconnectedCallback(),this._overlayMutationObserver&&(this._overlayMutationObserver.disconnect(),this._overlayMutationObserver=void 0)}focus(){this.updateComplete.then(()=>{var e;(null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("ha-textfield")).focus()})}shouldUpdate(e){if(e.get("items"))if(Bi(this.items,e.get("items"))){if(1==e.size)return!1}else this.firstUpdated();return!0}firstUpdated(){this._comboBox.items=this.items}render(){const e=Yi(this._value)&&this.items.find(e=>e.value==this._value);return q`
      <vaadin-combo-box-light
        item-value-path="value"
        item-id-path="value"
        item-label-path="name"
        .value=${this._value}
        ${ps(this.rowRenderer)}
        .allowCustomValue=${this.allowCustomValue}
        ?disabled=${this.disabled}
        @opened-changed=${this._openedChanged}
        @value-changed=${this._valueChanged}
      >
        <ha-textfield
          .label=${this.label}
          class="input"
          autocapitalize="none"
          autocomplete="off"
          autocorrect="off"
          spellcheck="false"
          ?disabled=${this.disabled}
          ?invalid=${this.invalid}
          .icon=${this.icons&&e}
        >
          <ha-icon
            name="icon"
            slot="leadingIcon"
            icon="${this.icons&&e?this.items.find(e=>e.value==this._value).icon:void 0}"
          ></ha-icon>
        </ha-textfield>
        <ha-svg-icon
          class="toggle-button ${this.items.length?"":"disabled"}"
          .path=${this._opened&&this.items.length?"M7,15L12,10L17,15H7Z":"M7,10L12,15L17,10H7Z"}
          @click=${this._toggleOpen}
        ></ha-svg-icon>
        ${this.clearable&&e?q`
              <ha-svg-icon class="clear-button" @click=${this._clearValue} .path=${ns}></ha-svg-icon>
            `:""}
      </vaadin-combo-box-light>
    `}_clearValue(e){e.stopPropagation(),this._setValue("")}get _value(){return Yi(this.value)?this.value:""}_toggleOpen(e){var t,a,i,s,n,r;this.items.length?this._opened?(null===(i=null===(a=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("vaadin-combo-box-light"))||void 0===a?void 0:a.inputElement)||void 0===i||i.blur(),e.stopPropagation()):null===(r=null===(n=null===(s=this.shadowRoot)||void 0===s?void 0:s.querySelector("vaadin-combo-box-light"))||void 0===n?void 0:n.inputElement)||void 0===r||r.focus():e.stopPropagation()}_openedChanged(e){if(this._opened=e.detail.value,this._opened&&"MutationObserver"in window&&!this._overlayMutationObserver){const e=document.querySelector("vaadin-combo-box-overlay");if(!e)return;this._overlayMutationObserver=new MutationObserver(t=>{t.forEach(t=>{var a;"attributes"===t.type&&"inert"===t.attributeName&&!0===e.inert?(e.inert=!1,null===(a=this._overlayMutationObserver)||void 0===a||a.disconnect(),this._overlayMutationObserver=void 0):"childList"===t.type&&t.removedNodes.forEach(e=>{var t;"VAADIN-COMBO-BOX-OVERLAY"===e.nodeName&&(null===(t=this._overlayMutationObserver)||void 0===t||t.disconnect(),this._overlayMutationObserver=void 0)})})}),this._overlayMutationObserver.observe(e,{attributes:!0}),this._overlayMutationObserver.observe(document.body,{childList:!0})}}_valueChanged(e){const t=e.detail.value;t!==this._value&&this._setValue(t)}_setValue(e){this.value=e,setTimeout(()=>{Ne(this,"value-changed",{value:e})},0)}static get styles(){return o`
      :host {
        display: block;
      }
      vaadin-combo-box-light {
        position: relative;
      }
      ha-textfield {
        width: 100%;
      }
      ha-textfield > ha-icon-button {
        --mdc-icon-button-size: 24px;
        padding: 2px;
        color: var(--secondary-text-color);
      }
      ha-svg-icon {
        color: var(--input-dropdown-icon-color);
        position: absolute;
        cursor: pointer;
      }
      ha-svg-icon.disabled {
        cursor: default;
        color: var(--disabled-text-color);
      }
      .toggle-button {
        right: 12px;
        bottom: 5px;
      }
      :host([opened]) .toggle-button {
        color: var(--primary-color);
      }
      .clear-button {
        --mdc-icon-size: 20px;
        bottom: 5px;
        right: 36px;
      }
    `}};t([de()],cs.prototype,"label",void 0),t([de()],cs.prototype,"value",void 0),t([de()],cs.prototype,"items",void 0),t([de()],cs.prototype,"clearable",void 0),t([de()],cs.prototype,"icons",void 0),t([de({type:Boolean})],cs.prototype,"disabled",void 0),t([le()],cs.prototype,"_opened",void 0),t([de({attribute:"allow-custom-value",type:Boolean})],cs.prototype,"allowCustomValue",void 0),t([de({type:Boolean})],cs.prototype,"invalid",void 0),t([ce("vaadin-combo-box-light",!0)],cs.prototype,"_comboBox",void 0),cs=t([re("alarmo-select")],cs);const hs={};class ms extends ls{constructor(e){if(super(e),this.previousValue=hs,e.type!==os)throw new Error("renderer only supports binding to element")}render(e,t){return U}update(e,[t,a]){var i;const s=this.previousValue===hs;if(!this.hasChanged(a))return U;this.previousValue=Array.isArray(a)?Array.from(a):a;const n=e.element;if(s){const a=null===(i=e.options)||void 0===i?void 0:i.host;this.addRenderer(n,t,{host:a})}else this.runRenderer(n);return U}hasChanged(e){let t=!0;return Array.isArray(e)?Array.isArray(this.previousValue)&&this.previousValue.length===e.length&&e.every((e,t)=>e===this.previousValue[t])&&(t=!1):this.previousValue===e&&(t=!1),t}}const us=ds(class extends ms{addRenderer(e,t,a){e.renderer=(e,i,s)=>{V(t.call(a.host,s.item,s,i),e,a)}}runRenderer(e){e.requestContentUpdate()}}),ps=(e,t)=>us(e,t);let gs=class extends ne{static get styles(){return o`
      :host {
        display: block;
      }
    `}render(){return q`
      <slot></slot>
    `}constructor(){super(),this.addEventListener("clickHeader",this.manageSpoilers)}manageSpoilers(e){const t=e.target;t.getAttribute("active")?t.removeAttribute("active"):t.setAttribute("active","true"),this.querySelectorAll("alarmo-collapsible-header[active]").forEach((function(e){e!==t&&e.removeAttribute("active")}))}};gs=t([re("alarmo-collapsible-group")],gs);let vs=class extends ne{static get styles(){return o`
      :host {
        display: block;
      }
    `}render(){return q`
      <slot></slot>
    `}};vs=t([re("alarmo-collapsible-item")],vs);let fs=class extends ne{constructor(){super(),this.clickHeader=new CustomEvent("clickHeader",{detail:{message:"clickHeader happened."},bubbles:!0,composed:!0}),this.active=!1,this.addEventListener("click",this.handleClick)}handleClick(){this.dispatchEvent(this.clickHeader)}render(){return q`
      <mwc-list-item graphic="avatar" twoline hasMeta>
        <slot name="icon" slot="graphic"></slot>
        <span><slot name="title"></slot></span>
        <span slot="secondary"><slot name="description"></slot></span>
        <ha-icon slot="meta" icon="hass:chevron-down" class="chevron"></ha-icon>
      </mwc-list-item>
    `}static get styles(){return o`
      :host {
        display: block;
        cursor: pointer;
      }
      :host mwc-list-item::before {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        pointer-events: none;
        content: '';
        transition: opacity 15ms linear;
        will-change: opacity;
        background-color: black;
        opacity: 0;
      }
      :host mwc-list-item:hover::before {
        opacity: 0.04;
      }
      :host([active]) mwc-list-item::before {
        opacity: 0.1;
      }
      :host([active]) mwc-list-item:hover::before {
        opacity: 0.12;
      }
      :host mwc-list-item:active::before,
      :host([active]) mwc-list-item:active::before {
        opacity: 0.14;
      }
      ::slotted(ha-icon) {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 16px;
      }
      :host mwc-list-item {
        font-size: 15px;
        --mdc-typography-body2-font-size: 14px;
      }
      :host .chevron {
        display: block;
        transition: 0.4s;
      }
      :host([active]) .chevron {
        transform: rotate(180deg);
      }
    `}attributeChangedCallback(e,t,a){this.hasAttribute("active")&&this.nextElementSibling?this.nextElementSibling.style.maxHeight=this.nextElementSibling.scrollHeight+"px":this.nextElementSibling&&(this.nextElementSibling.style.maxHeight="0px"),super.attributeChangedCallback(e,t,a)}};t([de({type:CustomEvent})],fs.prototype,"clickHeader",void 0),t([de({type:Boolean,attribute:!0,reflect:!0})],fs.prototype,"active",void 0),fs=t([re("alarmo-collapsible-header")],fs);let _s=class extends ne{static get styles(){return o`
      :host {
        display: block;
        background-color: var(--card-background-color);
        max-height: 0px;
        overflow: hidden;
        transition: max-height 0.2s ease-out;
      }
      .wrapper {
      }
    `}render(){return q`
      <div class="wrapper">
        <slot>Default details</slot>
      </div>
    `}};_s=t([re("alarmo-collapsible-body")],_s);let bs=class extends(et(ne)){hassSubscribe(){return this._fetchData(),[this.hass.connection.subscribeMessage(()=>this._fetchData(),{type:"alarmo_config_updated"})]}async _fetchData(){this.hass&&(this.areas=await Xe(this.hass),this.sensors=await Ge(this.hass))}async firstUpdated(){await this._fetchData(),this.selectedArea=Object.keys(this.areas)[0],this.data=Object.assign({},this.areas[this.selectedArea].modes)}render(){return this.data?q`
      <ha-card>
        <div class="card-header">
          <div class="name">
            ${zi("panels.general.cards.modes.title",this.hass.language)}
          </div>

          ${Object.keys(this.areas).length>1?q`
                <alarmo-select
                  .items=${Object.values(this.areas).map(e=>Object({value:e.area_id,name:e.name}))}
                  value=${this.selectedArea}
                  label=${this.hass.localize("ui.components.area-picker.area")}
                  @value-changed=${e=>this.selectArea(e.target.value)}
                ></alarmo-select>
              `:""}
        </div>
        <div class="card-content">
          ${zi("panels.general.cards.modes.description",this.hass.language)}
        </div>

        <alarmo-collapsible-group>
          ${Object.entries(Li).map(([e,t])=>{var a;return q`
                <alarmo-collapsible-item>
                  <alarmo-collapsible-header>
                    <ha-icon slot="icon" icon="${Si[e]}"></ha-icon>
                    <span slot="title">
                      ${this.hass.localize("component.alarm_control_panel.state._."+t)}
                    </span>
                    <span slot="description">
                      ${(null===(a=this.data[t])||void 0===a?void 0:a.enabled)?q`
                            ${zi("common.enabled",this.hass.language)},
                            <a href="${as("sensors",{filter:{area:this.selectedArea,mode:t}})}">
                              ${zi("panels.general.cards.modes.number_sensors_active",this.hass.language,"number",this.getSensorsByMode(t))}
                            </a>
                          `:zi("common.disabled",this.hass.language)}
                    </span>
                  </alarmo-collapsible-header>
                  <alarmo-collapsible-body>
                    ${this.renderModeConfig(t)}
                  </alarmo-collapsible-body>
                </alarmo-collapsible-item>
              `})}
        </alarmo-collapsible-group>
      </ha-card>
    `:q``}getSensorsByMode(e){return Object.values(this.sensors).filter(t=>t.modes.includes(e)||t.always_on).length}renderModeConfig(e){const t=e in this.data?this.data[e]:void 0;return q`
      <div class="description">
        <ha-icon icon="mdi:information-outline"></ha-icon>
        ${zi("panels.general.cards.modes.modes."+e,this.hass.language)}
      </div>
      <settings-row .narrow=${this.narrow}>
        <span slot="heading">
          ${zi("panels.general.cards.modes.fields.status.heading",this.hass.language)}
        </span>
        <span slot="description">
          ${zi("panels.general.cards.modes.fields.status.description",this.hass.language)}
        </span>
        <div>
          <mwc-button class="${(null==t?void 0:t.enabled)?"active":""}" @click=${()=>this.saveData(e,{enabled:!0})}>
            <ha-icon icon="mdi:check"></ha-icon>
            ${zi("common.enabled",this.hass.language)}
          </mwc-button>
          <mwc-button
            class="${(null==t?void 0:t.enabled)?"":"active"}"
            @click=${()=>this.saveData(e,{enabled:!1})}
          >
            <ha-icon icon="mdi:close"></ha-icon>
            ${zi("common.disabled",this.hass.language)}
          </mwc-button>
        </div>
      </settings-row>
      <settings-row .narrow=${this.narrow}>
        <span slot="heading">
          ${zi("panels.general.cards.modes.fields.exit_delay.heading",this.hass.language)}
        </span>
        <span slot="description">
          ${zi("panels.general.cards.modes.fields.exit_delay.description",this.hass.language)}
        </span>
        <time-slider
          .hass=${this.hass}
          unit="sec"
          max="180"
          zeroValue=${zi("components.time_slider.none",this.hass.language)}
          value=${(null==t?void 0:t.exit_time)||0}
          @change=${t=>this.saveData(e,{exit_time:Number(t.target.value)})}
          ?disabled=${!(null==t?void 0:t.enabled)}
        ></time-slider>
      </settings-row>
      <settings-row .narrow=${this.narrow}>
        <span slot="heading">
          ${zi("panels.general.cards.modes.fields.entry_delay.heading",this.hass.language)}
        </span>
        <span slot="description">
          ${zi("panels.general.cards.modes.fields.entry_delay.description",this.hass.language)}
        </span>
        <time-slider
          .hass=${this.hass}
          unit="sec"
          max="180"
          zeroValue=${zi("components.time_slider.none",this.hass.language)}
          value=${(null==t?void 0:t.entry_time)||0}
          @change=${t=>this.saveData(e,{entry_time:Number(t.target.value)})}
          ?disabled=${!(null==t?void 0:t.enabled)}
        ></time-slider>
      </settings-row>
      <settings-row .narrow=${this.narrow}>
        <span slot="heading">
          ${zi("panels.general.cards.modes.fields.trigger_time.heading",this.hass.language)}
        </span>
        <span slot="description">
          ${zi("panels.general.cards.modes.fields.trigger_time.description",this.hass.language)}
        </span>
        <time-slider
          .hass=${this.hass}
          unit="min"
          max="3600"
          zeroValue=${zi("components.time_slider.infinite",this.hass.language)}
          value=${(null==t?void 0:t.trigger_time)||0}
          @change=${t=>this.saveData(e,{trigger_time:Number(t.target.value)})}
          ?disabled=${!(null==t?void 0:t.enabled)}
        ></time-slider>
      </settings-row>
    `}selectArea(e){e!=this.selectedArea&&(this.selectedArea=e,this.data=Object.assign({},this.areas[e].modes))}saveClick(e){Je(this.hass,{area_id:this.selectedArea,modes:this.data}).catch(t=>Zi(t,e)).then()}saveData(e,t){this.data=Object.assign(Object.assign({},this.data),{[e]:Object.assign(Object.assign({},this.data[e]||{enabled:!1,exit_time:0,entry_time:0,trigger_time:0}),t)}),Je(this.hass,{area_id:this.selectedArea,modes:this.data}).catch(e=>Zi(e,this.shadowRoot.querySelector("ha-card"))).then()}static get styles(){return o`
      ${Ji}
      alarmo-collapsible-header:first-of-type {
        border-top: 1px solid var(--divider-color);
      }
      .description {
        margin: 8px;
        padding: 12px;
        color: var(--primary-color);
        filter: brightness(0.85);
        font-size: 14px;
        line-height: 1.5em;
        min-height: 36px;
        display: flex;
        align-items: center;
        position: relative;
      }
      .description::before {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        pointer-events: none;
        content: '';
        background: rgba(var(--rgb-primary-color), 0.12);
        border-radius: 5px;
      }
      .description ha-icon {
        --mdc-icon-size: 36px;
        display: inline;
        float: left;
        margin-right: 12px;
        align-self: flex-start;
      }
    `}};t([de()],bs.prototype,"hass",void 0),t([de({type:Boolean})],bs.prototype,"narrow",void 0),t([de()],bs.prototype,"config",void 0),t([de()],bs.prototype,"areas",void 0),t([de()],bs.prototype,"sensors",void 0),t([de()],bs.prototype,"data",void 0),t([de()],bs.prototype,"selectedArea",void 0),bs=t([re("alarm-mode-card")],bs);let ys=class extends ne{constructor(){super(...arguments),this.threeLine=!1}render(){return q`
      <div class="info">
        <slot name="heading"></slot>
        <div class="secondary"><slot name="description"></slot></div>
      </div>
      <slot></slot>
    `}static get styles(){return o`
      :host {
        display: flex;
        flex-direction: row;
        padding: 0px 16px;
        align-items: center;
        min-height: 72px;
      }
      :host([large]) {
        align-items: normal;
        flex-direction: column;
        border-top: 1px solid var(--divider-color);
        border-bottom: 1px solid var(--divider-color);
        padding: 16px 16px;
      }
      :host([narrow]) {
        align-items: normal;
        flex-direction: column;
        border-bottom: none;
        border-top: 1px solid var(--divider-color);
        padding: 16px 16px;
      }
      :host([nested]) {
        border: none;
        padding: 8px 16px 16px 16px;
        margin-top: -16px;
        min-height: 40px;
      }
      :host([nested]:not([narrow])) {
        padding: 16px 16px 16px 32px;
      }
      :host([first]) {
        border-top: none;
      }
      :host([last]) {
        border-bottom: none;
      }
      :host([dialog]) {
        border: none;
        padding: 12px 0px;
      }
      ::slotted(ha-switch) {
        padding: 16px 0;
      }
      .info {
        flex: 1 0 60px;
      }
      :host([large]) .info,
      :host([narrow]) .info {
        flex: 1 0 40px;
      }
      :host([nested]) .info {
        flex: 1 0 26px;
      }
      :host([dialog]) .info {
        flex: 1 0 40px;
        padding-bottom: 8px;
      }
      .secondary {
        color: var(--secondary-text-color);
      }
      :host(:not([large]):not([narrow])):not([dialog])) ::slotted(*) {
        max-width: 66%;
      }
    `}};t([de({type:Boolean,reflect:!0})],ys.prototype,"narrow",void 0),t([de({type:Boolean,reflect:!0})],ys.prototype,"large",void 0),t([de({type:Boolean,attribute:"three-line"})],ys.prototype,"threeLine",void 0),t([de({type:Boolean})],ys.prototype,"nested",void 0),t([de({type:Boolean})],ys.prototype,"dialog",void 0),ys=t([re("settings-row")],ys);let ws=class extends ne{constructor(){super(...arguments),this.header="",this.open=!1}render(){return q`
      ${this.open?q`
            <div class="header open">
              <span @click=${()=>{this.open=!1}}>${this.header}</span>
              <ha-icon-button .path=${"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"} @click=${()=>{this.open=!1}}>
              </ha-icon-button>
            </div>
            <slot></slot>
            <div class="header open">
              <span @click=${()=>{this.open=!1}}>${this.header}</span>
              <ha-icon-button .path=${"M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"} @click=${()=>{this.open=!1}}>
              </ha-icon-button>
            </div>
          `:q`
            <div class="header">
              <span @click=${()=>{this.open=!0}}>${this.header}</span>
              <ha-icon-button .path=${ss} @click=${()=>{this.open=!0}}>
              </ha-icon-button>
            </div>
          `}
    `}static get styles(){return o`
      :host {
      }

      div.header {
        display: flex;
        align-items: center;
        padding: 0px 16px;
        cursor: pointer;
      }
      div.header.open:first-of-type {
        border-bottom: 1px solid var(--divider-color);
      }
      div.header.open:last-of-type {
        border-top: 1px solid var(--divider-color);
      }

      :host([narrow]) div.header {
        border-top: 1px solid var(--divider-color);
        border-bottom: none;
      }

      div.header span {
        display: flex;
        flex-grow: 1;
      }

      div.seperator {
        height: 1px;
        background: var(--divider-color);
      }
    `}};t([de({type:Boolean,reflect:!0})],ws.prototype,"narrow",void 0),t([de()],ws.prototype,"header",void 0),t([de()],ws.prototype,"open",void 0),ws=t([re("collapsible-section")],ws);let ks=class extends(et(ne)){constructor(){super(...arguments),this.areas={}}hassSubscribe(){return this._fetchData(),[this.hass.connection.subscribeMessage(()=>this._fetchData(),{type:"alarmo_config_updated"})]}async _fetchData(){if(!this.hass)return;const e=await Ve(this.hass);this.config=e,this.areas=await Xe(this.hass),this.selection=e.mqtt}firstUpdated(){(async()=>{await Ue()})()}render(){return this.hass&&this.selection?q`
      <ha-card>
        <div class="card-header">
          <div class="name">${zi("panels.general.cards.mqtt.title",this.hass.language)}</div>
          <ha-icon-button .path=${ns} @click=${this.cancelClick}></ha-icon-button>
        </div>
        <div class="card-content">${zi("panels.general.cards.mqtt.description",this.hass.language)}</div>

        <settings-row .narrow=${this.narrow}>
          <span slot="heading">
            ${zi("panels.general.cards.mqtt.fields.state_topic.heading",this.hass.language)}
          </span>
          <span slot="description">
            ${zi("panels.general.cards.mqtt.fields.state_topic.description",this.hass.language)}
          </span>
          <ha-textfield
            label="${zi("panels.general.cards.mqtt.fields.state_topic.heading",this.hass.language)}"
            value=${this.selection.state_topic}
            @change=${e=>{this.selection={...this.selection,state_topic:e.target.value}}}
          ></ha-textfield>
        </settings-row>

        <collapsible-section
          .narrow=${this.narrow}
          header=${zi("panels.general.cards.mqtt.fields.state_payload.heading",this.hass.language)}
        >
          ${Object.values(Ci).filter(e=>Object.values(this.areas).some(t=>Qi(e,t.modes))).map(e=>q`
                <settings-row .narrow=${this.narrow}>
                  <span slot="heading">${Ui(e)}</span>
                  <span slot="description">
                    ${zi("panels.general.cards.mqtt.fields.state_payload.item",this.hass.language,"{state}",Ui(e))}
                  </span>
                  <ha-textfield
                    label=${Ui(e)}
                    placeholder=${e}
                    value=${this.selection.state_payload[e]||""}
                    @change=${t=>{this.selection=Wi(this.selection,{state_payload:{[e]:t.target.value}})}}
                  ></ha-textfield>
                </settings-row>
              `)}
        </collapsible-section>

        <settings-row .narrow=${this.narrow}>
          <span slot="heading">
            ${zi("panels.general.cards.mqtt.fields.event_topic.heading",this.hass.language)}
          </span>
          <span slot="description">
            ${zi("panels.general.cards.mqtt.fields.event_topic.description",this.hass.language)}
          </span>
          <ha-textfield
            label="${zi("panels.general.cards.mqtt.fields.event_topic.heading",this.hass.language)}"
            value=${this.selection.event_topic}
            @change=${e=>{this.selection={...this.selection,event_topic:e.target.value}}}
          ></ha-textfield>
        </settings-row>

        <settings-row .narrow=${this.narrow}>
          <span slot="heading">
            ${zi("panels.general.cards.mqtt.fields.command_topic.heading",this.hass.language)}
          </span>
          <span slot="description">
            ${zi("panels.general.cards.mqtt.fields.command_topic.description",this.hass.language)}
          </span>
          <ha-textfield
            label="${zi("panels.general.cards.mqtt.fields.command_topic.heading",this.hass.language)}"
            value=${this.selection.command_topic}
            @change=${e=>{this.selection={...this.selection,command_topic:e.target.value}}}
          ></ha-textfield>
        </settings-row>

        <collapsible-section
          .narrow=${this.narrow}
          header=${zi("panels.general.cards.mqtt.fields.command_payload.heading",this.hass.language)}
        >
          ${Object.values(Mi).filter(e=>Object.values(this.areas).some(t=>Qi((e=>{switch(e){case Mi.COMMAND_ALARM_DISARM:return Ci.STATE_ALARM_DISARMED;case Mi.COMMAND_ALARM_ARM_HOME:return Ci.STATE_ALARM_ARMED_HOME;case Mi.COMMAND_ALARM_ARM_AWAY:return Ci.STATE_ALARM_ARMED_AWAY;case Mi.COMMAND_ALARM_ARM_NIGHT:return Ci.STATE_ALARM_ARMED_NIGHT;case Mi.COMMAND_ALARM_ARM_CUSTOM_BYPASS:return Ci.STATE_ALARM_ARMED_CUSTOM_BYPASS;case Mi.COMMAND_ALARM_ARM_VACATION:return Ci.STATE_ALARM_ARMED_VACATION;default:return}})(e),t.modes))).map(e=>q`
                <settings-row .narrow=${this.narrow}>
                  <span slot="heading">${Ui(e)}</span>
                  <span slot="description">
                    ${zi("panels.general.cards.mqtt.fields.command_payload.item",this.hass.language,"{command}",Ui(e))}
                  </span>
                  <ha-textfield
                    label=${Ui(e)}
                    placeholder=${e}
                    value=${this.selection.command_payload[e]||""}
                    @change=${t=>{this.selection=Wi(this.selection,{command_payload:{[e]:t.target.value}})}}
                  ></ha-textfield>
                </settings-row>
              `)}
        </collapsible-section>

        <settings-row .narrow=${this.narrow}>
          <span slot="heading">
            ${zi("panels.general.cards.mqtt.fields.require_code.heading",this.hass.language)}
          </span>
          <span slot="description">
            ${zi("panels.general.cards.mqtt.fields.require_code.description",this.hass.language)}
          </span>
          <ha-switch
            ?checked=${this.selection.require_code}
            ?disabled=${!this.config.code_arm_required&&!this.config.code_disarm_required}
            @change=${e=>{this.selection={...this.selection,require_code:e.target.checked}}}
          ></ha-switch>
        </settings-row>

        <div class="card-actions">
          <mwc-button @click=${this.saveClick}>
            ${this.hass.localize("ui.common.save")}
          </mwc-button>
        </div>
      </ha-card>
    `:q``}saveClick(e){this.hass&&Be(this.hass,{mqtt:Object.assign(Object.assign({},this.selection),{enabled:!0})}).catch(t=>Zi(t,e)).then(()=>{this.cancelClick()})}cancelClick(){Le(0,as("general"),!0)}};ks.styles=Ji,t([de()],ks.prototype,"narrow",void 0),t([de()],ks.prototype,"config",void 0),t([de()],ks.prototype,"areas",void 0),t([de()],ks.prototype,"selection",void 0),ks=t([re("mqtt-config-card")],ks);
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
class As extends ls{constructor(e){if(super(e),this.vt=U,e.type!==rs)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===U)return this.Vt=void 0,this.vt=e;if(e===R)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.vt)return this.Vt;this.vt=e;const t=[e];return t.raw=t,this.Vt={_$litType$:this.constructor.resultType,strings:t,values:[]}}}As.directiveName="unsafeHTML",As.resultType=1;const $s=ds(As);let js=class extends ne{render(){return q`
      <div class="chip ${this.checked?"selected":""}" @click=${this._toggleSelect}>
        ${this.renderCheckmark()}
        <slot></slot>
        ${this.renderButton()}
      </div>
    `}renderCheckmark(){return this.checkmark?q`
      <div class="checkmark-container">
        <ha-icon icon="mdi:check"></ha-icon>
      </div>
    `:q``}renderButton(){return this.cancellable?q`
        <div class="button-container" @click=${this._buttonClick}>
          <ha-icon icon="mdi:close"></ha-icon>
        </div>
      `:void 0!==this.badge?q`
        <div class="badge-container" @click=${this._buttonClick}>
          ${this.badge}
        </div>
      `:q``}_toggleSelect(){if(!this.value||!this.clickable)return;this.selectable&&(this.checked=!this.checked);const e=new CustomEvent("value-changed",{detail:this.value});this.dispatchEvent(e)}_buttonClick(){const e=new CustomEvent("button-clicked",{detail:this.value});this.dispatchEvent(e)}static get styles(){return o`
      :host {
        margin: 4px;
      }
      .chip {
        display: flex;
        position: relative;
        height: 36px;
        padding: 0px 16px;
        align-items: center;
        color: var(--primary-text-color);
        user-select: none;
        font-weight: 400;
        z-index: 1;
      }
      :host([clickable]) .chip {
        cursor: pointer;
        color: var(--rgb-primary-color);
        opacity: 0.85;
      }
      .chip:before {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        pointer-events: none;
        content: '';
        border-radius: 8px;
        border: 1px solid var(--primary-text-color);
        opacity: 0.24;
        z-index: -1;
      }
      :host([clickable]) .chip:hover,
      :host([clickable]) .chip:active {
        opacity: 1;
      }
      :host([clickable]) .chip:hover:before {
        opacity: 0.3;
      }
      :host([clickable]) .chip:active:before {
        opacity: 0.06;
        background: var(--primary-text-color);
      }
      :host .chip.selected:before,
      :host([cancellable]) .chip:before {
        background: rgba(var(--rgb-primary-color), 0.18);
        border: none;
        opacity: 1;
      }
      :host .chip.selected:hover:before {
        background: rgba(var(--rgb-primary-color), 0.24);
        opacity: 1;
      }
      :host .chip.selected:active:before {
        background: rgba(var(--rgb-primary-color), 0.3);
        opacity: 1;
      }
      .chip div.checkmark-container {
        width: 0px;
        height: 100%;
        transition: width 0.1s ease-in-out;
        overflow: hidden;
        display: flex;
        align-items: center;
        margin: 0px 4px 0px -4px;
        --mdc-icon-size: 18px;
      }
      .chip.selected div.checkmark-container {
        width: 18px;
      }
      .chip div.button-container {
        width: 36px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0px -16px 0px 6px;
        cursor: pointer;
        --mdc-icon-size: 20px;
        position: relative;
        z-index: 1;
        opacity: 0.85;
        color: var(--dark-primary-color);
      }
      .chip div.button-container:before {
        position: absolute;
        top: 3px;
        right: 3px;
        bottom: 3px;
        left: 3px;
        pointer-events: none;
        content: '';
        border-radius: 15px;
        z-index: -1;
      }
      .chip div.button-container:hover,
      .chip div.button-container:hover {
        opacity: 1;
      }
      .chip div.button-container:hover:before {
        background: rgba(var(--rgb-primary-color), 0.12);
      }
      .chip div.button-container:active:before {
        background: rgba(var(--rgb-primary-color), 0.24);
      }
      .chip div.badge-container {
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0px -9px 0px 9px;
        position: relative;
        z-index: 1;
        font-size: 0.875em;
      }
      .chip div.badge-container:before {
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        pointer-events: none;
        content: '';
        border-radius: 50%;
        z-index: -1;
      }
      :host([table]) .chip {
        height: 40px;
      }
      :host([table]) .chip:before {
        border-radius: 4px;
      }
    `}};t([de({type:String})],js.prototype,"value",void 0),t([de({type:Boolean})],js.prototype,"checked",void 0),t([de({type:Boolean})],js.prototype,"checkmark",void 0),t([de({type:Boolean})],js.prototype,"selectable",void 0),t([de({type:Boolean})],js.prototype,"clickable",void 0),t([de({type:Boolean})],js.prototype,"cancellable",void 0),t([de({type:Number})],js.prototype,"badge",void 0),t([de({type:Boolean})],js.prototype,"table",void 0),js=t([re("alarmo-chip")],js);let xs=class extends ne{constructor(){super(...arguments),this.value=[]}render(){return this.items?q`
      ${Object.values(this.items).map(e=>q`
          <alarmo-chip
            value="${e.value}"
            ?checked=${this.value.includes(e.value)}
            .badge=${e.badge}
            ?selectable=${this.selectable}
            ?checkmark=${this.selectable}
            clickable
            @value-changed=${this._itemChanged}
          >
            ${e.name}
          </alarmo-chip>
        `)}
    `:q``}_itemChanged(e){const t=e.target.checked,a=String(e.detail);if(this.selectable){this.value.includes(a)&&!t?this.value=this.value.filter(e=>e!=a):!this.value.includes(a)&&t&&(this.value=[...this.value,a]);const e=new CustomEvent("value-changed",{detail:this.value});this.dispatchEvent(e)}else{const e=new CustomEvent("value-changed",{detail:a});this.dispatchEvent(e)}}static get styles(){return o`
      :host {
        display: flex;
        flex-direction: row;
        flex: 1;
        margin: 0px -4px;
        flex-wrap: wrap;
      }
    `}};t([de()],xs.prototype,"items",void 0),t([de()],xs.prototype,"value",void 0),t([de({type:Boolean})],xs.prototype,"selectable",void 0),xs=t([re("alarmo-chip-set")],xs);let Os=class extends ne{set filters(e){this.filterConfig||(this.filterConfig=e)}shouldUpdate(e){return e.get("filters")&&!this.filterConfig&&(this.filterConfig=e.get("filters")),!0}render(){if(!this.columns||!this.data)return q``;const e=this.data.filter(e=>this.filterTableData(e,this.filterConfig));return q`
      ${this.renderFilterRow()}
      <div class="table">
        ${this.renderHeaderRow()}
        ${e.length?e.map(e=>this.renderDataRow(e)):q`
              <div class="table-row">
                <div class="table-cell text grow">
                  <slot></slot>
                </div>
              </div>
            `}
      </div>
    `}renderHeaderRow(){return this.columns?q`
      <div class="table-row header">
        ${Object.values(this.columns).map(e=>e.hide?"":q`
                <div
                  class="table-cell ${e.text?"text":""} ${e.grow?"grow":""} ${e.align?e.align:""}"
                  style="${e.grow?"":"width: "+e.width}"
                >
                  <span>${e.title||""}</span>
                </div>
              `)}
      </div>
    `:q``}renderDataRow(e){return this.columns?q`
      <div
        class="table-row ${this.selectable?"selectable":""} ${e.warning?"warning":""}"
        @click=${()=>this.handleClick(String(e.id))}
      >
        ${Object.entries(this.columns).map(([t,a])=>a.hide?"":q`
                <div
                  class="table-cell ${a.text?"text":""} ${a.grow?"grow":""} ${a.align?a.align:""}"
                  style="${a.grow?"":"width: "+a.width}"
                >
                  ${a.renderer?a.renderer(e):e[t]}
                </div>
              `)}
      </div>
    `:q``}filterTableData(e,t){return!t||Object.keys(t).every(a=>{if(!Object.keys(e).includes(a))return!0;const i=t[a].value;return!i||!i.length||(Array.isArray(e[a])?e[a].some(e=>i.includes(e)):i.includes(e[a]))})}_getFilteredItems(){return this.data.filter(e=>!this.filterTableData(e,this.filterConfig)).length}handleClick(e){if(!this.selectable)return;const t=new CustomEvent("row-click",{detail:{id:e}});this.dispatchEvent(t)}renderFilterRow(){var e;return this.filterConfig?q`
      <div class="table-filter">
        <ha-icon-button
          .path=${"M6,13H18V11H6M3,6V8H21V6M10,18H14V16H10V18Z"}
          ?disabled=${!(null===(e=this.data)||void 0===e?void 0:e.length)}
          label=${zi("components.table.filter.label",this.hass.language)}
          @click=${this._toggleFilterMenu}
        ></ha-icon-button>
        <mwc-menu .corner=${"BOTTOM_START"} .fixed=${!0} @closed=${this._applyFilterSelection}>
          ${this.renderFilterMenu()}
        </mwc-menu>

        ${this._getFilteredItems()?q`
              <alarmo-chip cancellable table @button-clicked=${this._clearFilters}>
                ${zi("components.table.filter.hidden_items",this.hass.language,"number",this._getFilteredItems())}
              </alarmo-chip>
            `:""}
      </div>
    `:q``}_toggleFilterMenu(e){const t=e.target;this._menu.anchor=t,this._menu.open?this._menu.close():(this.filterSelection=Object.entries(this.filterConfig).reduce((e,[t,a])=>Object.assign(Object.assign({},e),{[t]:Fi(a,["value"])}),{}),this._menu.show())}renderFilterMenu(){return this.filterConfig&&this.filterSelection?q`
      <span class="header">
        ${zi("components.table.filter.label",this.hass.language)}
      </span>
      <ha-icon-button
        .path=${ns}
        @click=${()=>{this._menu.close(),setTimeout(()=>this._menu.anchor.blur(),50)}}
      ></ha-icon-button>
      ${Object.keys(this.filterConfig).map(e=>{if(this.filterConfig[e].binary)return q`
            <div class="dropdown-item checkbox">
              <ha-checkbox
                @change=${t=>this._updateFilterSelection(e,t.target.checked)}
                ?checked=${this.filterSelection[e].value.length}
              ></ha-checkbox>
              <span class="name">
                ${this.filterConfig[e].name}
              </span>
            </div>
          `;let t=this.filterConfig[e].items;t=t.map(t=>{var a;return t.badge&&"function"==typeof t.badge?{...t,badge:t.badge(null===(a=this.data)||void 0===a?void 0:a.filter(t=>this.filterTableData(t,Hi(this.filterSelection,e))))}:t});const a=this.filterSelection[e].value;return q`
          <div class="dropdown-item">
            <span class="name">
              ${this.filterConfig[e].name}
            </span>
            <alarmo-chip-set
              selectable
              .items=${t}
              @value-changed=${t=>this._updateFilterSelection(e,t.detail)}
              .value=${a}
            ></alarmo-chip-set>
          </div>
        `})}
    `:q``}_updateFilterSelection(e,t){"boolean"==typeof t&&(t=t?this.filterConfig[e].items[0].value:[],1==Object.keys(this.filterConfig).length&&(this._menu.close(),setTimeout(()=>this._menu.anchor.blur(),50))),this.filterSelection=Object.assign(Object.assign({},this.filterSelection),{[e]:{value:t}})}_clearFilters(){Object.keys(this.filterConfig).forEach(e=>{this.filterConfig=Object.assign(Object.assign({},this.filterConfig),{[e]:Object.assign(Object.assign({},this.filterConfig[e]),{value:[]})})})}_applyFilterSelection(){Object.keys(this.filterConfig).forEach(e=>{this.filterConfig=Object.assign(Object.assign({},this.filterConfig),{[e]:Object.assign(Object.assign({},this.filterConfig[e]),this.filterSelection[e])})})}};Os.styles=o`
    :host {
      width: 100%;
    }
    div.table {
      display: inline-flex;
      flex-direction: column;
      box-sizing: border-box;
      width: 100%;
    }
    div.table .header {
      font-weight: bold;
    }
    div.table-row {
      display: flex;
      width: 100%;
      height: 52px;
      border-top: 1px solid var(--divider-color);
      flex-direction: row;
      position: relative;
    }
    div.table-cell {
      align-self: center;
      overflow: hidden;
      text-overflow: ellipsis;
      flex-shrink: 0;
      box-sizing: border-box;
    }
    div.table-cell.text {
      padding: 4px 16px;
    }
    div.table-cell.grow {
      flex-grow: 1;
      flex-shrink: 1;
    }

    div.table-cell > ha-switch {
      width: 68px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    div.table-cell.center {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    div.table-cell.right {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }

    div.table-cell > ha-icon-button {
      color: var(--secondary-text-color);
    }
    div.table-cell > * {
      transition: color 0.2s ease-in-out;
    }
    div.table .header div.table-cell span {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      min-width: 0;
    }
    div.table-row.selectable {
      cursor: pointer;
    }
    .table-row::before {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      opacity: 0.12;
      pointer-events: none;
      content: '';
      border-radius: 4px;
    }
    div.table-row.selectable:hover::before {
      background-color: rgba(var(--rgb-primary-text-color), 0.5);
    }
    div.table-row.warning::before {
      background-color: var(--error-color);
      opacity: 0.06;
    }
    div.table-row.warning:hover::before {
      background-color: var(--error-color);
      opacity: 0.12;
    }
    div.table-row.warning span {
      color: var(--error-color);
    }

    ha-icon {
      color: var(--state-icon-color);
      padding: 8px;
    }

    .secondary {
      color: var(--secondary-text-color);
      display: flex;
      padding-top: 4px;
    }

    a,
    a:visited {
      color: var(--primary-color);
    }

    span.disabled {
      color: var(--secondary-text-color);
    }
    span.secondary.disabled {
      color: var(--disabled-text-color);
    }
    ha-icon.disabled {
      color: var(--state-unavailable-color);
    }

    div.table-filter {
      display: flex;
      width: 100%;
      min-height: 52px;
      border-top: 1px solid var(--divider-color);
      box-sizing: border-box;
      padding: 2px 8px;
      flex: 1;
      position: relative;
      flex-direction: row;
      align-items: center;
    }
    mwc-menu .header {
      display: flex;
      padding: 8px 16px;
      font-weight: bold;
    }
    mwc-menu ha-icon-button {
      position: absolute;
      top: 8px;
      right: 8px;
    }
    div.dropdown-item {
      display: flex;
      flex-direction: column;
      flex-shrink: 0;
      padding: 8px 16px;
      width: 100%;
      min-height: 52px;
      box-sizing: border-box;
    }
    div.dropdown-item .name {
      display: inline-flex;
    }
    div.dropdown-item alarmo-chips {
      display: flex;
      flex-direction: row;
    }
    div.dropdown-item.checkbox {
      flex-direction: row;
      align-items: center;
    }
    ha-button-menu mwc-button {
      margin-left: 16px;
    }
  `,t([de()],Os.prototype,"hass",void 0),t([de()],Os.prototype,"columns",void 0),t([de()],Os.prototype,"data",void 0),t([le()],Os.prototype,"filterConfig",void 0),t([le()],Os.prototype,"filterSelection",void 0),t([de({type:Boolean})],Os.prototype,"selectable",void 0),t([ce("mwc-menu",!0)],Os.prototype,"_menu",void 0),Os=t([re("alarmo-table")],Os);let Ts=class extends ne{async showDialog(e){this._params=e,await this.updateComplete}async closeDialog(){this._params&&this._params.cancel(),this._params=void 0}render(){return this._params?q`
      <ha-dialog open .heading=${!0} @closed=${this.closeDialog} @close-dialog=${this.closeDialog}>
        <div slot="heading">
          <ha-header-bar>
            <ha-icon-button slot="navigationIcon" dialogAction="cancel" .path=${ns}>
            </ha-icon-button>
            <span slot="title">${this._params.title}</span>
          </ha-header-bar>
        </div>
        <div class="wrapper">
          ${this._params.description}
        </div>

        <mwc-button slot="primaryAction" @click=${this.cancelClick} dialogAction="close">
          ${this.hass.localize("ui.dialogs.generic.cancel")}
        </mwc-button>
        <mwc-button slot="secondaryAction" style="float: left" @click=${this.confirmClick} dialogAction="close">
          ${this.hass.localize("ui.dialogs.generic.ok")}
        </mwc-button>
      </ha-dialog>
    `:q``}confirmClick(){this._params.confirm()}cancelClick(){this._params.cancel()}static get styles(){return o`
      ${Ji}
      div.wrapper {
        color: var(--primary-text-color);
      }
    `}};t([de({attribute:!1})],Ts.prototype,"hass",void 0),t([le()],Ts.prototype,"_params",void 0),Ts=t([re("confirm-delete-dialog")],Ts);var Es=Object.freeze({__proto__:null,get ConfirmDeleteDialog(){return Ts}});let zs=class extends(et(ne)){constructor(){super(...arguments),this.areas={},this.sensors={},this.automations={},this.name=""}hassSubscribe(){return this._fetchData(),[this.hass.connection.subscribeMessage(()=>this._fetchData(),{type:"alarmo_config_updated"})]}async _fetchData(){this.hass&&(this.areas=await Xe(this.hass),this.sensors=await Ge(this.hass),this.automations=await He(this.hass))}async showDialog(e){await this._fetchData(),this._params=e,e.area_id&&(this.area_id=e.area_id,this.name=this.areas[this.area_id].name),await this.updateComplete}async closeDialog(){this._params=void 0,this.area_id=void 0,this.name=""}render(){return this._params?q`
      <ha-dialog open .heading=${!0} @closed=${this.closeDialog} @close-dialog=${this.closeDialog}>
        <div slot="heading">
          <ha-header-bar>
            <ha-icon-button slot="navigationIcon" dialogAction="cancel" .path=${ns}></ha-icon-button>
            <span slot="title">
              ${this.area_id?zi("panels.general.dialogs.edit_area.title",this.hass.language,"{area}",this.areas[this.area_id].name):zi("panels.general.dialogs.create_area.title",this.hass.language)}
            </span>
          </ha-header-bar>
        </div>
        <div class="wrapper">
          <ha-textfield
            label=${this.hass.localize("ui.components.area-picker.add_dialog.name")}
            @input=${e=>this.name=e.target.value}
            value="${this.name}"
          ></ha-textfield>
          ${this.area_id?q`
                <span class="note">
                  ${zi("panels.general.dialogs.edit_area.name_warning",this.hass.language)}
                </span>
              `:""}
          ${this.area_id?"":q`
                <alarmo-select
                  .items=${Object.values(this.areas).map(e=>Object({value:e.area_id,name:e.name}))}
                  value=${this.selectedArea}
                  label="${zi("panels.general.dialogs.create_area.fields.copy_from",this.hass.language)}"
                  clearable=${!0}
                  @value-changed=${e=>this.selectedArea=e.target.value}
                ></alarmo-select>
              `}
        </div>
        <mwc-button slot="primaryAction" @click=${this.saveClick}>
          ${this.hass.localize("ui.common.save")}
        </mwc-button>
        ${this.area_id?q`
              <mwc-button
                slot="secondaryAction"
                @click=${this.deleteClick}
                class="warning"
                ?disabled=${1==Object.keys(this.areas).length}
              >
                ${this.hass.localize("ui.common.delete")}
              </mwc-button>
            `:""}
      </ha-dialog>
    `:q``}saveClick(e){const t=this.name.trim();if(!t.length)return;let a={name:t};this.area_id?a=Object.assign(Object.assign({},a),{area_id:this.area_id}):this.selectedArea&&(a=Object.assign(Object.assign({},a),{modes:Object.assign({},this.areas[this.selectedArea].modes)})),Je(this.hass,a).catch(t=>Zi(t,e)).then(()=>{this.closeDialog()})}async deleteClick(e){if(!this.area_id)return;const t=Object.values(this.sensors).filter(e=>e.area==this.area_id).length,a=Object.values(this.automations).filter(e=>{var t;return null===(t=e.triggers)||void 0===t?void 0:t.map(e=>e.area).includes(this.area_id)}).length;let i=!1;var s,n;i=!t&&!a||await new Promise(i=>{Ne(e.target,"show-dialog",{dialogTag:"confirm-delete-dialog",dialogImport:()=>Promise.resolve().then((function(){return Es})),dialogParams:{title:zi("panels.general.dialogs.remove_area.title",this.hass.language),description:zi("panels.general.dialogs.remove_area.description",this.hass.language,"sensors",String(t),"automations",String(a)),cancel:()=>i(!1),confirm:()=>i(!0)}})}),i&&(s=this.hass,n=this.area_id,s.callApi("POST","alarmo/area",{area_id:n,remove:!0})).catch(t=>Zi(t,e)).then(()=>{this.closeDialog()})}static get styles(){return o`
      ${Ji}
      div.wrapper {
        color: var(--primary-text-color);
      }
      span.note {
        color: var(--secondary-text-color);
      }
      ha-textfield {
        display: block;
      }
      alarmo-select {
        margin-top: 10px;
      }
    `}};t([de({attribute:!1})],zs.prototype,"hass",void 0),t([le()],zs.prototype,"_params",void 0),t([de()],zs.prototype,"areas",void 0),t([de()],zs.prototype,"sensors",void 0),t([de()],zs.prototype,"automations",void 0),t([de()],zs.prototype,"name",void 0),t([de()],zs.prototype,"area_id",void 0),t([de()],zs.prototype,"selectedArea",void 0),zs=t([re("create-area-dialog")],zs);var Ss=Object.freeze({__proto__:null,get CreateAreaDialog(){return zs}});let Cs=class extends(et(ne)){constructor(){super(...arguments),this.areas={},this.sensors={},this.automations={}}hassSubscribe(){return this._fetchData(),[this.hass.connection.subscribeMessage(()=>this._fetchData(),{type:"alarmo_config_updated"})]}async _fetchData(){this.hass&&(this.areas=await Xe(this.hass),this.sensors=await Ge(this.hass),this.automations=await He(this.hass))}render(){if(!this.hass)return q``;const e=Object.values(this.areas);e.sort(Xi);const t={actions:{width:"48px"},name:{title:this.hass.localize("ui.components.area-picker.add_dialog.name"),width:"40%",grow:!0,text:!0},remarks:{title:zi("panels.general.cards.areas.table.remarks",this.hass.language),width:"60%",hide:this.narrow,text:!0}},a=Object.values(e).map(t=>{const a=Object.values(this.sensors).filter(e=>e.area==t.area_id).length,i=1==Object.values(e).length?Object.values(this.automations).filter(e=>{var a,i;return(null===(a=e.triggers)||void 0===a?void 0:a.map(e=>e.area).includes(t.area_id))||!(null===(i=e.triggers)||void 0===i?void 0:i.map(e=>e.area).length)}).length:Object.values(this.automations).filter(e=>{var a;return null===(a=e.triggers)||void 0===a?void 0:a.map(e=>e.area).includes(t.area_id)}).length,s=`<a href="${as("sensors",{filter:{area:t.area_id}})}">${zi("panels.general.cards.areas.table.summary_sensors",this.hass.language,"number",a)}</a>`,n=`<a href="${as("actions",{filter:{area:t.area_id}})}">${zi("panels.general.cards.areas.table.summary_automations",this.hass.language,"number",i)}</a>`;return{id:t.area_id,actions:q`
          <ha-icon-button @click=${e=>this.editClick(e,t.area_id)} .path=${"M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"}></ha-icon-button>
        `,name:Ui(t.name),remarks:$s(zi("panels.general.cards.areas.table.summary",this.hass.language,"summary_sensors",s,"summary_automations",n))}});return q`
      <ha-card header="${zi("panels.general.cards.areas.title",this.hass.language)}">
        <div class="card-content">
          ${zi("panels.general.cards.areas.description",this.hass.language)}
        </div>

        <alarmo-table .columns=${t} .data=${a}>
          ${zi("panels.general.cards.areas.no_items",this.hass.language)}
        </alarmo-table>
        <div class="card-actions">
          <mwc-button @click=${this.addClick}>
            ${zi("panels.general.cards.areas.actions.add",this.hass.language)}
          </mwc-button>
        </div>
      </ha-card>
    `}addClick(e){const t=e.target;Ne(t,"show-dialog",{dialogTag:"create-area-dialog",dialogImport:()=>Promise.resolve().then((function(){return Ss})),dialogParams:{}})}editClick(e,t){const a=e.target;Ne(a,"show-dialog",{dialogTag:"create-area-dialog",dialogImport:()=>Promise.resolve().then((function(){return Ss})),dialogParams:{area_id:t}})}};Cs.styles=Ji,t([de()],Cs.prototype,"narrow",void 0),t([de()],Cs.prototype,"path",void 0),t([de()],Cs.prototype,"config",void 0),t([de()],Cs.prototype,"areas",void 0),t([de()],Cs.prototype,"sensors",void 0),t([de()],Cs.prototype,"automations",void 0),Cs=t([re("area-config-card")],Cs);let Ms=class extends ne{constructor(){super(...arguments),this.name=""}async showDialog(e){this._params=e;const t=await Ve(this.hass);this.name=t.master.name||"",await this.updateComplete}async closeDialog(){this._params=void 0}render(){return this._params?q`
      <ha-dialog open .heading=${!0} @closed=${this.closeDialog} @close-dialog=${this.closeDialog}>
        <div slot="heading">
          <ha-header-bar>
            <ha-icon-button slot="navigationIcon" dialogAction="cancel" .path=${ns}></ha-icon-button>
            <span slot="title">${zi("panels.general.dialogs.edit_master.title",this.hass.language)}</span>
          </ha-header-bar>
        </div>
        <div class="wrapper">
          <ha-textfield
            label=${this.hass.localize("ui.components.area-picker.add_dialog.name")}
            @input=${e=>this.name=e.target.value}
            value="${this.name}"
          ></ha-textfield>
          <span class="note">${zi("panels.general.dialogs.edit_area.name_warning",this.hass.language)}</span>
        </div>
        <mwc-button slot="primaryAction" @click=${this.saveClick}>
          ${this.hass.localize("ui.common.save")}
        </mwc-button>
        <mwc-button slot="secondaryAction" @click=${this.closeDialog}>
          ${this.hass.localize("ui.common.cancel")}
        </mwc-button>
      </ha-dialog>
    `:q``}saveClick(){const e=this.name.trim();e.length&&Be(this.hass,{master:{enabled:!0,name:e}}).catch().then(()=>{this.closeDialog()})}static get styles(){return o`
      div.wrapper {
        color: var(--primary-text-color);
      }
      span.note {
        color: var(--secondary-text-color);
      }
      ha-textfield {
        display: block;
      }
    `}};t([de({attribute:!1})],Ms.prototype,"hass",void 0),t([le()],Ms.prototype,"_params",void 0),t([de()],Ms.prototype,"name",void 0),Ms=t([re("edit-master-dialog")],Ms);var Ns=Object.freeze({__proto__:null,get EditMasterDialog(){return Ms}});let Ds=class extends(et(ne)){constructor(){super(...arguments),this.areas={},this.automations={}}hassSubscribe(){return this._fetchData(),[this.hass.connection.subscribeMessage(()=>this._fetchData(),{type:"alarmo_config_updated"})]}async _fetchData(){this.hass&&(this.config=await Ve(this.hass),this.areas=await Xe(this.hass),this.automations=await He(this.hass),this.data=Fi(this.config,["trigger_time","disarm_after_trigger","mqtt","master"]))}firstUpdated(){(async()=>{await Ue()})()}render(){var e,t,a,i,s,n,r,o;return this.hass&&this.config&&this.data?"mqtt_configuration"==this.path.subpage?q`
        <mqtt-config-card .hass=${this.hass} .narrow=${this.narrow}></mqtt-config-card>
      `:this.path.params.edit_area?q`
        <area-editor-card
          .hass=${this.hass}
          .narrow=${this.narrow}
          item=${this.path.params.edit_area}
        ></area-editor-card>
      `:q`
        <ha-card header="${zi("panels.general.title",this.hass.language)}">
          <div class="card-content">
            ${zi("panels.general.cards.general.description",this.hass.language)}
          </div>

          <settings-row .narrow=${this.narrow}>
            <span slot="heading">
              ${zi("panels.general.cards.general.fields.disarm_after_trigger.heading",this.hass.language)}
            </span>
            <span slot="description">
              ${zi("panels.general.cards.general.fields.disarm_after_trigger.description",this.hass.language)}
            </span>
            <ha-switch
              ?checked=${this.data.disarm_after_trigger}
              @change=${e=>{this.saveData({disarm_after_trigger:e.target.checked})}}
            ></ha-switch>
          </settings-row>

          <settings-row .narrow=${this.narrow}>
            <span slot="heading">
              ${zi("panels.general.cards.general.fields.enable_mqtt.heading",this.hass.language)}
            </span>
            <span slot="description">
              ${zi("panels.general.cards.general.fields.enable_mqtt.description",this.hass.language)}
            </span>
            <ha-switch
              ?checked=${null===(t=null===(e=this.data)||void 0===e?void 0:e.mqtt)||void 0===t?void 0:t.enabled}
              @change=${e=>{this.saveData({mqtt:{...this.data.mqtt,enabled:e.target.checked}})}}
            ></ha-switch>
          </settings-row>

          ${(null===(i=null===(a=this.data)||void 0===a?void 0:a.mqtt)||void 0===i?void 0:i.enabled)?q`
                <div style="padding: 0px 0px 16px 16px">
                  <mwc-button
                    outlined
                    @click=${()=>Le(0,as("general","mqtt_configuration"),!0)}
                  >
                    ${zi("panels.general.cards.general.actions.setup_mqtt",this.hass.language)}
                  </mwc-button>
                </div>
              `:""}
          ${Object.keys(this.areas).length>=2?q`
                <settings-row .narrow=${this.narrow}>
                  <span slot="heading">
                    ${zi("panels.general.cards.general.fields.enable_master.heading",this.hass.language)}
                  </span>
                  <span slot="description">
                    ${zi("panels.general.cards.general.fields.enable_master.description",this.hass.language)}
                  </span>
                  <ha-switch
                    ?checked=${(null===(n=null===(s=this.data)||void 0===s?void 0:s.master)||void 0===n?void 0:n.enabled)&&Object.keys(this.areas).length>=2}
                    ?disabled=${Object.keys(this.areas).length<2}
                    @change=${this.toggleEnableMaster}
                  ></ha-switch>
                </settings-row>
              `:""}
          ${(null===(o=null===(r=this.data)||void 0===r?void 0:r.master)||void 0===o?void 0:o.enabled)&&Object.keys(this.areas).length>=2?q`
                <div style="padding: 0px 0px 16px 16px">
                  <mwc-button outlined @click=${this.setupMasterClick}>
                    ${zi("panels.general.cards.general.actions.setup_master",this.hass.language)}
                  </mwc-button>
                </div>
              `:""}
        </ha-card>

        <alarm-mode-card .hass=${this.hass} .narrow=${this.narrow}></alarm-mode-card>

        <area-config-card .hass=${this.hass} .narrow=${this.narrow}></area-config-card>
      `:q``}setupMasterClick(e){const t=e.target;Ne(t,"show-dialog",{dialogTag:"edit-master-dialog",dialogImport:()=>Promise.resolve().then((function(){return Ns})),dialogParams:{}})}async toggleEnableMaster(e){const t=e.target;let a=t.checked;if(!a){const i=Object.values(this.automations).filter(e=>e.triggers.some(e=>!e.area));if(i.length){await new Promise(e=>{Ne(t,"show-dialog",{dialogTag:"confirm-delete-dialog",dialogImport:()=>Promise.resolve().then((function(){return Es})),dialogParams:{title:zi("panels.general.dialogs.disable_master.title",this.hass.language),description:zi("panels.general.dialogs.disable_master.description",this.hass.language,"automations",String(i.length)),cancel:()=>e(!1),confirm:()=>e(!0)}})})?!a&&i.length&&i.forEach(t=>{We(this.hass,t.automation_id).catch(t=>Zi(t,e))}):(a=!0,t.checked=!0)}}this.saveData({master:Object.assign(Object.assign({},this.data.master),{enabled:a})})}saveData(e){this.hass&&this.data&&(this.data=Object.assign(Object.assign({},this.data),e),Be(this.hass,this.data).catch(e=>Zi(e,this.shadowRoot.querySelector("ha-card"))).then())}};Ds.styles=Ji,t([de()],Ds.prototype,"narrow",void 0),t([de()],Ds.prototype,"path",void 0),t([de()],Ds.prototype,"data",void 0),t([de()],Ds.prototype,"config",void 0),t([de()],Ds.prototype,"areas",void 0),t([de()],Ds.prototype,"automations",void 0),Ds=t([re("alarm-view-general")],Ds);const Ps=(e,t)=>{if("binary_sensor"==function(e){const t="string"==typeof e?e:e.entity_id;return String(t.split(".").shift())}(e.entity_id)){if(t)return!0;const a=e.attributes.device_class;return!!a&&!!["carbon_monoxide","door","garage_door","gas","heat","lock","moisture","motion","moving","occupancy","opening","presence","safety","smoke","sound","tamper","vibration","window"].includes(a)}return!1},Ls=e=>{switch(e.attributes.device_class){case"door":case"garage_door":case"lock":return Ni.Door;case"window":return Ni.Window;case"carbon_monoxide":case"gas":case"heat":case"moisture":case"smoke":case"safety":return Ni.Environmental;case"motion":case"moving":case"occupancy":case"presence":return Ni.Motion;case"sound":case"opening":case"vibration":case"tamper":return Ni.Tamper;default:return}},qs=e=>{const t=t=>t.filter(t=>e.includes(t));return{[Ni.Door]:{modes:t([Li.ArmedAway,Li.ArmedHome,Li.ArmedNight,Li.ArmedVacation]),always_on:!1,allow_open:!1,arm_on_close:!1,use_entry_delay:!0,use_exit_delay:!1},[Ni.Window]:{modes:t([Li.ArmedAway,Li.ArmedHome,Li.ArmedNight,Li.ArmedVacation]),always_on:!1,allow_open:!1,arm_on_close:!1,use_entry_delay:!1,use_exit_delay:!1},[Ni.Motion]:{modes:t([Li.ArmedAway,Li.ArmedVacation]),always_on:!1,allow_open:!0,arm_on_close:!1,use_entry_delay:!0,use_exit_delay:!0},[Ni.Tamper]:{modes:t([Li.ArmedAway,Li.ArmedHome,Li.ArmedNight,Li.ArmedVacation,Li.ArmedCustom]),always_on:!1,allow_open:!1,arm_on_close:!1,use_entry_delay:!1,use_exit_delay:!1},[Ni.Environmental]:{modes:t([Li.ArmedAway,Li.ArmedHome,Li.ArmedNight,Li.ArmedVacation,Li.ArmedCustom]),always_on:!0,allow_open:!1,arm_on_close:!1,use_entry_delay:!1,use_exit_delay:!1}}};let Rs=class extends ne{async showDialog(e){this._params=e,await this.updateComplete}async closeDialog(){this._params=void 0}render(){return this._params?q`
      <ha-dialog open .heading=${!0} @closed=${this.closeDialog} @close-dialog=${this.closeDialog}>
        <div slot="heading">
          <ha-header-bar>
            <ha-icon-button slot="navigationIcon" dialogAction="cancel" .path=${ns}>
            </ha-icon-button>
            <span slot="title">
              ${this.hass.localize("state_badge.default.error")}
            </span>
          </ha-header-bar>
        </div>
        <div class="wrapper">
          ${this._params.error||""}
        </div>

        <mwc-button slot="primaryAction" style="float: left" @click=${this.closeDialog} dialogAction="close">
          ${this.hass.localize("ui.dialogs.generic.ok")}
        </mwc-button>
      </ha-dialog>
    `:q``}static get styles(){return o`
      div.wrapper {
        color: var(--primary-text-color);
      }
    `}};t([de({attribute:!1})],Rs.prototype,"hass",void 0),t([le()],Rs.prototype,"_params",void 0),Rs=t([re("error-dialog")],Rs);var Us=Object.freeze({__proto__:null,get ErrorDialog(){return Rs}});let Is=class extends(et(ne)){constructor(){super(...arguments),this.sensorGroups={},this.sensors={}}hassSubscribe(){return this._fetchData(),[this.hass.connection.subscribeMessage(()=>this._fetchData(),{type:"alarmo_config_updated"})]}async _fetchData(){this.hass&&(this.sensorGroups=await Ye(this.hass),this.sensors=await Ge(this.hass))}async showDialog(e){await this._fetchData(),this._params=e,e.group_id&&Object.keys(this.sensorGroups).includes(e.group_id)?this.data=Object.assign({},this.sensorGroups[e.group_id]):this.data={name:"",entities:[],timeout:600},await this.updateComplete}async closeDialog(){this._params=void 0}render(){return this._params?q`
      <ha-dialog open @closed=${this.closeDialog} @close-dialog=${this.closeDialog} .heading=${this.renderHeader()}>
        <div class="wrapper">
          <settings-row dialog>
            <span slot="heading">
              ${zi("panels.sensors.dialogs.create_group.fields.name.heading",this.hass.language)}
            </span>
            <span slot="description">
              ${zi("panels.sensors.dialogs.create_group.fields.name.description",this.hass.language)}
            </span>
            <ha-textfield
              label=${this.hass.localize("ui.components.area-picker.add_dialog.name")}
              @input=${e=>this.data={...this.data,name:String(e.target.value).trim()}}
              value="${this.data.name}"
            ></ha-textfield>
          </settings-row>

          <settings-row large dialog>
            <span slot="heading">
              ${zi("panels.sensors.dialogs.create_group.fields.sensors.heading",this.hass.language)}
            </span>
            <span slot="description">
              ${zi("panels.sensors.dialogs.create_group.fields.sensors.description",this.hass.language)}
            </span>
            <div>
              ${this.renderSensorOptions()}
            </div>
          </settings-row>

          <settings-row dialog>
            <span slot="heading">
              ${zi("panels.sensors.dialogs.create_group.fields.timeout.heading",this.hass.language)}
            </span>
            <span slot="description">
              ${zi("panels.sensors.dialogs.create_group.fields.timeout.description",this.hass.language)}
            </span>
            <time-slider
              .hass=${this.hass}
              unit="min"
              max="1200"
              .value=${this.data.timeout}
              @change=${e=>this.data={...this.data,timeout:Number(e.target.value)}}
            ></time-slider>
          </settings-row>
        </div>
        <mwc-button slot="secondaryAction" @click=${this.saveClick}>
          ${this.hass.localize("ui.common.save")}
        </mwc-button>
        ${this.data.group_id?q`
              <mwc-button slot="secondaryAction" @click=${this.deleteClick} class="warning">
                ${this.hass.localize("ui.common.delete")}
              </mwc-button>
            `:""}
      </ha-dialog>
    `:q``}renderHeader(){return q`
      <span class="header_title">
        ${this.data.group_id?zi("panels.sensors.dialogs.edit_group.title",this.hass.language,"{name}",this.sensorGroups[this.data.group_id].name):zi("panels.sensors.dialogs.create_group.title",this.hass.language)}
      </span>
      <ha-icon-button
        .label=${this.hass.localize("ui.dialogs.generic.close")}
        .path=${ns}
        dialogAction="close"
        class="header_button"
      ></ha-icon-button>
    `}renderSensorOptions(){const e=Object.keys(this.sensors).filter(e=>!Yi(this.sensors[e].group)||this.sensors[e].group===this.data.group_id).map(e=>{const t=this.hass.states[e],a=Object.entries(Ni).find(([,t])=>t==this.sensors[e].type)[0];return{value:e,name:Ui(Ii(t)),icon:Di[a]}});return e.sort(Xi),e.length?q`
      <alarmo-chip-set
        .items=${e}
        .value=${this.data.entities}
        ?selectable=${!0}
        @value-changed=${e=>this.data={...this.data,entities:e.detail}}
      ></alarmo-chip-set>
    `:zi("panels.sensors.cards.sensors.no_items",this.hass.language)}saveClick(e){var t,a;this.data.name.length&&(this.data.group_id&&this.data.name==this.sensorGroups[this.data.group_id].name||!Object.values(this.sensorGroups).find(e=>e.name.toLowerCase()==this.data.name.toLowerCase()))?this.data.entities.length<2?Ki(e,zi("panels.sensors.dialogs.create_group.errors.insufficient_sensors",this.hass.language)):(t=this.hass,a=this.data,t.callApi("POST","alarmo/sensor_groups",a)).catch(t=>Zi(t,e)).then(()=>{this.closeDialog()}):Ki(e,zi("panels.sensors.dialogs.create_group.errors.invalid_name",this.hass.language))}deleteClick(e){var t,a;this.data.group_id&&(t=this.hass,a=this.data.group_id,t.callApi("POST","alarmo/sensor_groups",{group_id:a,remove:!0})).catch(t=>Zi(t,e)).then(()=>{this.closeDialog()})}static get styles(){return o`
      ${es}
      div.wrapper {
        color: var(--primary-text-color);
      }
      mwc-button.warning {
        --mdc-theme-primary: var(--error-color);
      }
    `}};t([de({attribute:!1})],Is.prototype,"hass",void 0),t([le()],Is.prototype,"_params",void 0),t([de()],Is.prototype,"sensorGroups",void 0),t([de()],Is.prototype,"sensors",void 0),t([de()],Is.prototype,"data",void 0),Is=t([re("create-sensor-group-dialog")],Is);var Vs=Object.freeze({__proto__:null,get CreateSensorGroupDialog(){return Is}});let Gs=class extends(et(ne)){constructor(){super(...arguments),this.sensorGroups={},this.sensors={}}hassSubscribe(){return this._fetchData(),[this.hass.connection.subscribeMessage(()=>this._fetchData(),{type:"alarmo_config_updated"})]}async _fetchData(){this.hass&&(this.sensorGroups=await Ye(this.hass),this.sensors=await Ge(this.hass))}async showDialog(e){await this._fetchData(),this._params=e,await this.updateComplete}async closeDialog(){this._params=void 0}render(){return this._params?q`
      <ha-dialog open .heading=${this.renderHeader()} @closed=${this.closeDialog} @close-dialog=${this.closeDialog}>
        <div class="wrapper">
          <div class="description">
            ${zi("panels.sensors.dialogs.manage_groups.description",this.hass.language)}
          </div>
          <div class="container">
            ${Object.keys(this.sensorGroups).length?Object.values(this.sensorGroups).map(e=>this.renderGroup(e)):zi("panels.sensors.dialogs.manage_groups.no_items",this.hass.language)}
          </div>
        </div>
        <mwc-button slot="secondaryAction" @click=${this.createGroupClick}>
          <ha-icon icon="hass:plus"></ha-icon>
          ${zi("panels.sensors.dialogs.manage_groups.actions.new_group",this.hass.language)}
        </mwc-button>
      </ha-dialog>
    `:q``}renderHeader(){return q`
      <span class="header_title">${zi("panels.sensors.dialogs.manage_groups.title",this.hass.language)}</span>
      <ha-icon-button
        .label=${this.hass.localize("ui.dialogs.generic.close")}
        .path=${ns}
        dialogAction="close"
        class="header_button"
      >
      </ha-icon-button>
    `}renderGroup(e){return q`
    <ha-card
      outlined
      @click=${t=>this.editGroupClick(t,e.group_id)}
    >
      <ha-icon icon="hass:folder-outline"></ha-icon>
      <div>
        <span class="name">${e.name}</span>
        <span class="description">${zi("panels.general.cards.areas.table.summary_sensors",this.hass.language,"{number}",String(e.entities.length))}
      </div>
      <ha-icon-button .path=${ss}>
      </ha-icon-button>
    </ha-card>
    `}createGroupClick(e){const t=e.target;Ne(t,"show-dialog",{dialogTag:"create-sensor-group-dialog",dialogImport:()=>Promise.resolve().then((function(){return Vs})),dialogParams:{}})}editGroupClick(e,t){const a=e.target;Ne(a,"show-dialog",{dialogTag:"create-sensor-group-dialog",dialogImport:()=>Promise.resolve().then((function(){return Vs})),dialogParams:{group_id:t}})}static get styles(){return o`
      ${es}

      div.wrapper {
        color: var(--primary-text-color);
      }
      div.container {
        display: flex;
        flex-wrap: wrap;
      }
      ha-card {
        width: 100%;
        text-align: center;
        margin: 4px;
        box-sizing: border-box;
        padding: 8px;
        color: var(--primary-text-color);
        font-size: 16px;
        cursor: pointer;
        display: flex;
        flex-direction: row;
      }
      ha-card:hover {
        background: rgba(var(--rgb-secondary-text-color), 0.1);
      }
      ha-card ha-icon {
        --mdc-icon-size: 24px;
        display: flex;
        flex: 0 0 40px;
        margin: 0px 10px;
        align-items: center;
        color: var(--state-icon-color);
      }
      ha-card ha-icon-button {
        --mdc-icon-size: 24px;
        display: flex;
        flex: 0 0 40px;
        margin: 0px 10px;
        align-items: center;
      }
      ha-card div {
        display: flex;
        flex-wrap: wrap;
        flex: 1;
      }
      ha-card span {
        display: flex;
        flex: 0 0 100%;
      }
      ha-card span.description {
        color: var(--secondary-text-color);
      }
      mwc-button ha-icon {
        padding-right: 11px;
      }
    `}};t([de({attribute:!1})],Gs.prototype,"hass",void 0),t([le()],Gs.prototype,"_params",void 0),t([de()],Gs.prototype,"sensorGroups",void 0),t([de()],Gs.prototype,"sensors",void 0),Gs=t([re("manage-sensor-groups-dialog")],Gs);var Fs=Object.freeze({__proto__:null,get ManageSensorGroupsDialog(){return Gs}});let Hs=class extends(et(ne)){constructor(){super(...arguments),this.showBypassModes=!1}hassSubscribe(){return this._fetchData(),[this.hass.connection.subscribeMessage(()=>this._fetchData(),{type:"alarmo_config_updated"})]}async _fetchData(){var e;if(!this.hass)return;const t=await Xe(this.hass);this.areas=t;const a=await Ye(this.hass);this.sensorGroups=a;const i=await Ge(this.hass);this.data=Object.keys(i).includes(this.item)?i[this.item]:void 0,this.data&&!(null===(e=this.data)||void 0===e?void 0:e.area)&&1==Object.keys(t).length&&(this.data=Object.assign(Object.assign({},this.data),{area:Object.keys(this.areas)[0]}))}render(){if(!this.data)return q``;this.hass.states[this.data.entity_id];return q`
      <ha-card>
        <div class="card-header">
          <div class="name">${zi("panels.sensors.cards.editor.title",this.hass.language)}</div>
          <ha-icon-button .path=${ns} @click=${this.cancelClick}></ha-icon-button>
        </div>
        <div class="card-content">
          ${zi("panels.sensors.cards.editor.description",this.hass.language,"{entity}",Ii(this.hass.states[this.item]))}
        </div>

        ${Object.keys(this.areas).length>1?q`
              <settings-row .narrow=${this.narrow}>
                <span slot="heading">
                  ${zi("panels.sensors.cards.editor.fields.area.heading",this.hass.language)}
                </span>
                <span slot="description">
                  ${zi("panels.sensors.cards.editor.fields.area.description",this.hass.language)}
                </span>

                <alarmo-select
                  .items=${Object.values(this.areas).map(e=>Object({value:e.area_id,name:e.name}))}
                  value=${this.data.area}
                  label=${zi("panels.sensors.cards.editor.fields.area.heading",this.hass.language)}
                  @value-changed=${e=>this.data={...this.data,area:e.target.value}}
                  ?invalid=${!this.data.area}
                ></alarmo-select>
              </settings-row>
            `:""}

        <settings-row .narrow=${this.narrow} .large=${!0}>
          <span slot="heading">
            ${zi("panels.sensors.cards.editor.fields.device_type.heading",this.hass.language)}
          </span>
          <span slot="description">
            ${zi("panels.sensors.cards.editor.fields.device_type.description",this.hass.language)}
          </span>

          <alarmo-select
            .hass=${this.hass}
            .items=${e=this.hass,Object.entries(Ni).filter(([,e])=>e!=Ni.Other).map(([t,a])=>Object({value:a,name:zi(`panels.sensors.cards.editor.fields.device_type.choose.${a}.name`,e.language),description:zi(`panels.sensors.cards.editor.fields.device_type.choose.${a}.description`,e.language),icon:Di[t]}))}
            label=${zi("panels.sensors.cards.editor.fields.device_type.heading",this.hass.language)}
            clearable=${!0}
            icons=${!0}
            value=${this.data.type}
            @value-changed=${e=>this.setType(e.target.value||Ni.Other)}
          ></alarmo-select>
        </settings-row>

        <settings-row .narrow=${this.narrow} .large=${this.modesByArea(this.data.area).length>3}>
          <span slot="heading">
            ${zi("panels.sensors.cards.editor.fields.modes.heading",this.hass.language)}
          </span>
          <span slot="description">
            ${zi("panels.sensors.cards.editor.fields.modes.description",this.hass.language)}
          </span>

          <div>
            ${this.modesByArea(this.data.area).map(e=>q`
                <mwc-button
                  class="${this.data.modes.includes(e)||this.data.always_on?"active":""}"
                  @click=${()=>{this.setMode(e)}}
                  ?disabled=${this.data.always_on}
                >
                  <ha-icon icon="${Si[Object.entries(Li).find(([,t])=>t==e)[0]]}"></ha-icon>
                  ${zi("common.modes_short."+e,this.hass.language)}
                </mwc-button>
              `)}
          </div>
        </settings-row>

        <settings-row .narrow=${this.narrow}>
          <span slot="heading">
            ${zi("panels.sensors.cards.editor.fields.group.heading",this.hass.language)}
          </span>
          <span slot="description">
            ${zi("panels.sensors.cards.editor.fields.group.description",this.hass.language)}
          </span>

          <div>
            ${Object.keys(this.sensorGroups).length?q`
                  <alarmo-select
                    .clearable=${!0}
                    .items=${this.getSensorGroups()}
                    value=${this.data.group}
                    label="${zi("panels.sensors.cards.editor.fields.group.heading",this.hass.language)}"
                    @value-changed=${e=>{this.data={...this.data,group:e.detail.value}}}
                  ></alarmo-select>
                `:""}
            <mwc-button @click=${this.manageGroupsClick}>
              ${zi("panels.sensors.cards.editor.actions.setup_groups",this.hass.language)}
            </mwc-button>
          </div>
        </settings-row>

        <collapsible-section
          .narrow=${this.narrow}
          header=${zi("panels.sensors.cards.editor.actions.toggle_advanced",this.hass.language)}
        >
          ${!this.data.type||[Ni.Environmental,Ni.Other].includes(this.data.type)?q`
                <settings-row .narrow=${this.narrow}>
                  <span slot="heading">
                    ${zi("panels.sensors.cards.editor.fields.always_on.heading",this.hass.language)}
                  </span>
                  <span slot="description">
                    ${zi("panels.sensors.cards.editor.fields.always_on.description",this.hass.language)}
                  </span>

                  <ha-switch
                    ?checked=${this.data.always_on}
                    @change=${e=>this._SetData({always_on:e.target.checked})}
                  ></ha-switch>
                </settings-row>
              `:""}
          ${!this.data.type||[Ni.Window,Ni.Door,Ni.Motion,Ni.Other].includes(this.data.type)?q`
                <settings-row .narrow=${this.narrow}>
                  <span slot="heading">
                    ${zi("panels.sensors.cards.editor.fields.use_exit_delay.heading",this.hass.language)}
                  </span>
                  <span slot="description">
                    ${zi("panels.sensors.cards.editor.fields.use_exit_delay.description",this.hass.language)}
                  </span>

                  <ha-switch
                    ?checked=${this.data.use_exit_delay}
                    ?disabled=${this.data.always_on}
                    @change=${e=>this._SetData({use_exit_delay:e.target.checked})}
                  ></ha-switch>
                </settings-row>

                ${this.data.type&&![Ni.Motion,Ni.Window,Ni.Other].includes(this.data.type)||!this.data.use_exit_delay?"":q`
                      <settings-row .narrow=${this.narrow} nested>
                        <span slot="heading">
                          ${zi("panels.sensors.cards.editor.fields.allow_open.heading",this.hass.language)}
                        </span>
                        <span slot="description">
                          ${zi("panels.sensors.cards.editor.fields.allow_open.description",this.hass.language)}
                        </span>

                        <ha-switch
                          ?checked=${this.data.allow_open}
                          ?disabled=${this.data.always_on||this.data.arm_on_close}
                          @change=${e=>this._SetData({allow_open:e.target.checked})}
                        ></ha-switch>
                      </settings-row>
                    `}
              `:""}
          ${!this.data.type||[Ni.Window,Ni.Door,Ni.Motion,Ni.Other].includes(this.data.type)?q`
                <settings-row .narrow=${this.narrow}>
                  <span slot="heading">
                    ${zi("panels.sensors.cards.editor.fields.use_entry_delay.heading",this.hass.language)}
                  </span>
                  <span slot="description">
                    ${zi("panels.sensors.cards.editor.fields.use_entry_delay.description",this.hass.language)}
                  </span>

                  <ha-switch
                    ?checked=${this.data.use_entry_delay}
                    ?disabled=${this.data.always_on}
                    @change=${e=>this._SetData({use_entry_delay:e.target.checked})}
                  ></ha-switch>
                </settings-row>
              `:""}
          ${!this.data.type||[Ni.Door,Ni.Other].includes(this.data.type)?q`
                <settings-row .narrow=${this.narrow}>
                  <span slot="heading">
                    ${zi("panels.sensors.cards.editor.fields.arm_on_close.heading",this.hass.language)}
                  </span>
                  <span slot="description">
                    ${zi("panels.sensors.cards.editor.fields.arm_on_close.description",this.hass.language)}
                  </span>

                  <ha-switch
                    ?checked=${this.data.arm_on_close}
                    ?disabled=${this.data.always_on}
                    @change=${e=>this._SetData({arm_on_close:e.target.checked})}
                  ></ha-switch>
                </settings-row>
              `:""}
          ${!this.data.type||[Ni.Window,Ni.Door,Ni.Other].includes(this.data.type)?q`
                <settings-row .narrow=${this.narrow}>
                  <span slot="heading">
                    ${zi("panels.sensors.cards.editor.fields.auto_bypass.heading",this.hass.language)}
                  </span>
                  <span slot="description">
                    ${zi("panels.sensors.cards.editor.fields.auto_bypass.description",this.hass.language)}
                  </span>

                  <ha-switch
                    ?checked=${this.data.auto_bypass}
                    ?disabled=${this.data.always_on}
                    @change=${e=>this._SetData({auto_bypass:e.target.checked})}
                  ></ha-switch>
                </settings-row>

                ${this.data.auto_bypass?q`
                      <settings-row .narrow=${this.narrow} .large=${this.modesByArea(this.data.area).length>2} nested>
                        <span slot="heading">
                          ${zi("panels.sensors.cards.editor.fields.auto_bypass.modes",this.hass.language)}
                        </span>
                        <div>
                          ${this.modesByArea(this.data.area).map(e=>q`
                              <mwc-button
                                class="${this.data.auto_bypass_modes.includes(e)&&this.data.modes.includes(e)?"active":""}"
                                ?disabled=${!this.data.modes.includes(e)}
                                @click=${()=>{this.setBypassMode(e)}}
                              >
                                <ha-icon
                                  icon="${Si[Object.entries(Li).find(([,t])=>t==e)[0]]}"
                                ></ha-icon>
                                ${zi("common.modes_short."+e,this.hass.language)}
                              </mwc-button>
                            `)}
                        </div>
                      </settings-row>
                    `:""}
              `:""}

          <settings-row .narrow=${this.narrow}>
            <span slot="heading">
              ${zi("panels.sensors.cards.editor.fields.trigger_unavailable.heading",this.hass.language)}
            </span>
            <span slot="description">
              ${zi("panels.sensors.cards.editor.fields.trigger_unavailable.description",this.hass.language)}
            </span>

            <ha-switch
              ?checked=${this.data.trigger_unavailable}
              @change=${e=>this._SetData({trigger_unavailable:e.target.checked})}
            ></ha-switch>
          </settings-row>
        </collapsible-section>

        <div class="card-actions">
          <mwc-button @click=${this.saveClick}>
            ${this.hass.localize("ui.common.save")}
          </mwc-button>

          <mwc-button class="warning" @click=${this.deleteClick}>
            ${zi("panels.sensors.cards.editor.actions.remove",this.hass.language)}
          </mwc-button>
        </div>
      </ha-card>
    `;var e}modesByArea(e){const t=Object.keys(this.areas).reduce((e,t)=>Object.assign(e,{[t]:Object.entries(this.areas[t].modes).filter(([,e])=>e.enabled).map(([e])=>e)}),{});return e?t[e]:Object.values(t).reduce((e,t)=>e.filter(e=>t.includes(e)))}_SetData(e){if(this.data)for(const[t,a]of Object.entries(e))switch(t){case"always_on":this.data=Object.assign(Object.assign({},this.data),{always_on:1==a}),a&&(this.data=Object.assign(Object.assign({},this.data),{arm_on_close:!1,use_exit_delay:!1,use_entry_delay:!1,allow_open:!1,auto_bypass:!1}));break;case"use_entry_delay":this.data=Object.assign(Object.assign({},this.data),{use_entry_delay:1==a});break;case"use_exit_delay":this.data=Object.assign(Object.assign({},this.data),{use_exit_delay:1==a}),a&&(this.data=Object.assign(Object.assign({},this.data),{allow_open:!1}));break;case"arm_on_close":this.data=Object.assign(Object.assign({},this.data),{arm_on_close:1==a}),a&&(this.data=Object.assign(Object.assign({},this.data),{always_on:!1,allow_open:!1}));break;case"allow_open":this.data=Object.assign(Object.assign({},this.data),{allow_open:1==a}),a&&(this.data=Object.assign(Object.assign({},this.data),{arm_on_close:!1,always_on:!1,use_exit_delay:!0}));break;case"auto_bypass":this.data=Object.assign(Object.assign({},this.data),{auto_bypass:1==a}),a&&(this.data=Object.assign(Object.assign({},this.data),{always_on:!1}));break;case"trigger_unavailable":this.data=Object.assign(Object.assign({},this.data),{trigger_unavailable:1==a})}}setMode(e){this.data&&(this.data=Object.assign(Object.assign({},this.data),{modes:this.data.modes.includes(e)?Gi(this.data.modes,e):Vi(this.data.modes.concat([e]))}))}setBypassMode(e){this.data&&(this.data=Object.assign(Object.assign({},this.data),{auto_bypass_modes:this.data.auto_bypass_modes.includes(e)?Gi(this.data.auto_bypass_modes,e):Vi(this.data.auto_bypass_modes.concat([e]))}))}setType(e){if(!this.data)return;const t=e!=Ni.Other?qs(this.modesByArea(this.data.area))[e]:{};this.data=Object.assign(Object.assign(Object.assign({},this.data),{type:e}),t)}deleteClick(e){var t,a;(t=this.hass,a=this.item,t.callApi("POST","alarmo/sensors",{entity_id:a,remove:!0})).catch(t=>Zi(t,e)).then(()=>{this.cancelClick()})}saveClick(e){if(!this.data)return;const t=[];this.data=Object.assign(Object.assign({},this.data),{auto_bypass_modes:this.data.auto_bypass_modes.filter(e=>this.data.modes.includes(e))}),this.data.area||t.push(zi("panels.sensors.cards.editor.errors.no_area",this.hass.language)),this.data.modes.length||this.data.always_on||t.push(zi("panels.sensors.cards.editor.errors.no_modes",this.hass.language)),this.data.auto_bypass&&!this.data.auto_bypass_modes.length&&t.push(zi("panels.sensors.cards.editor.errors.no_auto_bypass_modes",this.hass.language)),t.length?Ki(e,q`
          ${zi("panels.sensors.cards.editor.errors.description",this.hass.language)}
          <ul>
            ${t.map(e=>q`
                  <li>${e}</li>
                `)}
          </ul>
        `):Ke(this.hass,Object.assign({},this.data)).catch(t=>Zi(t,e)).then(()=>{this.cancelClick()})}cancelClick(){Le(0,as("sensors"),!0)}manageGroupsClick(e){const t=e.target;Ne(t,"show-dialog",{dialogTag:"manage-sensor-groups-dialog",dialogImport:()=>Promise.resolve().then((function(){return Fs})),dialogParams:{}})}getSensorGroups(){return Object.keys(this.sensorGroups).map(e=>Object({value:e,name:this.sensorGroups[e].name}))}};Hs.styles=Ji,t([de()],Hs.prototype,"hass",void 0),t([de()],Hs.prototype,"narrow",void 0),t([de()],Hs.prototype,"item",void 0),t([de()],Hs.prototype,"data",void 0),t([de()],Hs.prototype,"showBypassModes",void 0),Hs=t([re("sensor-editor-card")],Hs);const Ys=e=>Object.keys(e.modes).filter(t=>e.modes[t].enabled),Bs=e=>{let t=[];return Object.values(e).forEach(e=>{t=[...t,...Ys(e)]}),t=Vi(t),t.sort((e,t)=>{const a=Object.values(Li);return a.findIndex(t=>t==e)-a.findIndex(e=>e==t)}),t},Ks="no_area";let Zs=class extends(et(ne)){hassSubscribe(){return this._fetchData(),[this.hass.connection.subscribeMessage(()=>this._fetchData(),{type:"alarmo_config_updated"})]}async _fetchData(){this.hass&&(this.areas=await Xe(this.hass),this.sensors=await Ge(this.hass))}async firstUpdated(){this.path&&2==this.path.length&&"filter"==this.path[0]&&(this.selectedArea=this.path[1])}render(){return this.hass&&this.areas&&this.sensors?q`
      <ha-card header="${zi("panels.sensors.title",this.hass.language)}">
        <div class="card-content">
          ${zi("panels.sensors.cards.sensors.description",this.hass.language)}
        </div>

        <alarmo-table
          .hass=${this.hass}
          ?selectable=${!0}
          .columns=${this.tableColumns()}
          .data=${this.getTableData()}
          .filters=${this.getTableFilterOptions()}
          @row-click=${e=>{Le(0,as("sensors",{params:{edit:e.detail.id}}),!0)}}
        >
          ${zi("panels.sensors.cards.sensors.table.no_items",this.hass.language)}
        </alarmo-table>
      </ha-card>
    `:q``}tableColumns(){const e=()=>q`
      <paper-tooltip animation-delay="0">
        ${zi("panels.sensors.cards.sensors.table.no_area_warning",this.hass.language)}
      </paper-tooltip>
    `;return{icon:{width:"40px",renderer:t=>{const a=this.hass.states[t.entity_id],i=Object.keys(Ni).find(e=>Ni[e]==t.type),s=a?Di[i]:"hass:help-circle-outline";return t.area==Ks?q`
                ${e()}
                <ha-icon icon="mdi:alert" style="color: var(--error-color)"></ha-icon>
              `:q`
                <paper-tooltip animation-delay="0">
                  ${a?zi(`panels.sensors.cards.editor.fields.device_type.choose.${t.type}.name`,this.hass.language):this.hass.localize("state_badge.default.entity_not_found")}
                </paper-tooltip>
                <ha-icon icon="${s}" class="${t.enabled?"":"disabled"}"></ha-icon>
              `}},name:{title:this.hass.localize("ui.components.entity.entity-picker.entity"),width:"60%",grow:!0,text:!0,renderer:t=>q`
          ${t.area==Ks?e():""}
          <span class="${t.enabled?"":"disabled"}">${t.name}</span>
          <span class="secondary ${t.enabled?"":"disabled"}">${t.entity_id}</span>
        `},modes:{title:zi("panels.sensors.cards.sensors.table.arm_modes",this.hass.language),width:"25%",hide:this.narrow,text:!0,renderer:t=>q`
          ${t.area==Ks?e():""}
          <span class="${t.enabled?"":"disabled"}">
            ${t.always_on?zi("panels.sensors.cards.sensors.table.always_on",this.hass.language):t.modes.length?t.modes.map(e=>zi("common.modes_short."+e,this.hass.language)).join(", "):this.hass.localize("state_attributes.climate.preset_mode.none")}
          </span>
        `},enabled:{title:zi("common.enabled",this.hass.language),width:"68px",align:"center",renderer:e=>q`
          <ha-switch
            @click=${e=>{e.stopPropagation()}}
            ?checked=${e.enabled}
            @change=${t=>this.toggleEnabled(t,e.entity_id)}
          ></ha-switch>
        `}}}getTableData(){let e=Object.keys(this.sensors).map(e=>{const t=this.hass.states[e],a=this.sensors[e],i=a.area?Ys(this.areas[a.area]):Bs(this.areas);return Object.assign(Object.assign({},a),{id:e,name:Ii(t),modes:a.always_on?i:a.modes.filter(e=>i.includes(e)),warning:!a.area,area:a.area||Ks})});return e.sort(Xi),e}toggleEnabled(e,t){const a=e.target.checked;Ke(this.hass,{entity_id:t,enabled:a}).catch(t=>Zi(t,e)).then()}removeCustomName(e){let t={entity_id:e,name:""};Ke(this.hass,t)}getTableFilterOptions(){let e=Object.values(this.areas).map(e=>Object({value:e.area_id,name:e.name,badge:t=>t.filter(t=>t.area==e.area_id).length})).sort(Xi);Object.values(this.sensors).filter(e=>!e.area).length&&(e=[{value:Ks,name:this.hass.localize("state_attributes.climate.preset_mode.none"),badge:e=>e.filter(e=>e.area==Ks).length},...e]);const t=Bs(this.areas).map(e=>Object({value:e,name:zi("common.modes_short."+e,this.hass.language),badge:t=>t.filter(t=>t.modes.includes(e)).length}));return{area:{name:zi("components.table.filter.item",this.hass.language,"name",zi("panels.actions.cards.new_action.fields.area.heading",this.hass.language)),items:e,value:this.selectedArea?[this.selectedArea]:[]},modes:{name:zi("components.table.filter.item",this.hass.language,"name",zi("panels.actions.cards.new_action.fields.mode.heading",this.hass.language)),items:t,value:this.selectedMode?[this.selectedMode]:[]}}}};Zs.styles=Ji,t([de()],Zs.prototype,"hass",void 0),t([de()],Zs.prototype,"narrow",void 0),t([de()],Zs.prototype,"areas",void 0),t([de()],Zs.prototype,"sensors",void 0),t([de()],Zs.prototype,"selectedArea",void 0),t([de()],Zs.prototype,"selectedMode",void 0),t([de()],Zs.prototype,"path",void 0),Zs=t([re("sensors-overview-card")],Zs);let Qs=class extends(et(ne)){constructor(){super(...arguments),this.addSelection=[],this.areas={},this.sensors={}}hassSubscribe(){return this._fetchData(),[this.hass.connection.subscribeMessage(()=>this._fetchData(),{type:"alarmo_config_updated"})]}async _fetchData(){this.hass&&(this.areas=await Xe(this.hass))}async firstUpdated(){this.areas=await Xe(this.hass),this.sensors=await Ge(this.hass)}render(){const e={checkbox:{width:"48px",renderer:e=>q`
          <ha-checkbox
            @change=${t=>this.toggleSelect(t,e.id)}
            ?checked=${this.addSelection.includes(e.id)}
          ></ha-checkbox>
        `},icon:{width:"40px",renderer:e=>q`
          <state-badge .hass=${this.hass} .stateObj=${this.hass.states[e.id]}></state-badge>
        `},name:{title:this.hass.localize("ui.components.entity.entity-picker.entity"),width:"40%",grow:!0,text:!0,renderer:e=>q`
          ${Ui(e.name)}
          <span class="secondary">${e.id}</span>
        `},type:{title:zi("panels.sensors.cards.add_sensors.table.type",this.hass.language),width:"40%",hide:this.narrow,text:!0,renderer:e=>e.type?zi(`panels.sensors.cards.editor.fields.device_type.choose.${e.type}.name`,this.hass.language):this.hass.localize("state.default.unknown")}},t=((e,t,a=!1)=>{const i=Object.values(e.states).filter(e=>Ps(e,a)).filter(e=>!t.includes(e.entity_id)).map(e=>Object({id:e.entity_id,name:Ii(e),icon:Ri(e)}));return i.sort(Xi),i})(this.hass,Object.keys(this.sensors),!0).map(e=>Object.assign(Object.assign({},e),{type:Ls(this.hass.states[e.id]),isSupportedType:void 0!==Ls(this.hass.states[e.id])?"true":"false"}));return q`
      <ha-card header="${zi("panels.sensors.cards.add_sensors.title",this.hass.language)}">
        <div class="card-content">
          ${zi("panels.sensors.cards.add_sensors.description",this.hass.language)}
        </div>

        <alarmo-table
          .hass=${this.hass}
          .columns=${e}
          .data=${t}
          .filters=${this.getTableFilterOptions()}
        >
          ${zi("panels.sensors.cards.add_sensors.no_items",this.hass.language)}
        </alarmo-table>

        <div class="card-actions">
          <mwc-button @click=${this.addSelected} ?disabled=${0==this.addSelection.length}>
            ${zi("panels.sensors.cards.add_sensors.actions.add_to_alarm",this.hass.language)}
          </mwc-button>
        </div>
      </ha-card>
    `}toggleSelect(e,t){const a=e.target.checked;this.addSelection=a&&!this.addSelection.includes(t)?[...this.addSelection,t]:a?this.addSelection:this.addSelection.filter(e=>e!=t)}addSelected(e){if(!this.hass)return;const t=Object.values(this.areas).map(e=>Object.entries(e.modes).filter(([,e])=>e.enabled).map(([e])=>e)).reduce((e,t)=>e.filter(e=>t.includes(e)));this.addSelection.map(e=>function(e,t){if(!e)return null;const a=Se(e.entity_id);let i={entity_id:e.entity_id,modes:[],use_entry_delay:!0,use_exit_delay:!0,arm_on_close:!1,allow_open:!1,always_on:!1,auto_bypass:!1,auto_bypass_modes:[],trigger_unavailable:!1,type:Ni.Other,enabled:!0};if("binary_sensor"==a){const a=Ls(e);a&&(i=Object.assign(Object.assign(Object.assign({},i),{type:a}),qs(t)[a]))}return i}(this.hass.states[e],t)).map(e=>1==Object.keys(this.areas).length?Object.assign(e,{area:Object.keys(this.areas)[0]}):e).filter(e=>e).forEach(t=>{Ke(this.hass,t).catch(t=>Zi(t,e)).then()}),this.addSelection=[]}getTableFilterOptions(){return{isSupportedType:{name:zi("panels.sensors.cards.add_sensors.actions.filter_supported",this.hass.language),items:[{value:"true",name:"true"}],value:["true"],binary:!0}}}};Qs.styles=Ji,t([de()],Qs.prototype,"hass",void 0),t([de()],Qs.prototype,"narrow",void 0),t([de()],Qs.prototype,"addSelection",void 0),t([de()],Qs.prototype,"areas",void 0),t([de()],Qs.prototype,"sensors",void 0),Qs=t([re("add-sensors-card")],Qs);let Ws=class extends ne{firstUpdated(){(async()=>{await Ue()})()}render(){var e,t;if(!this.hass)return q``;if(this.path.params.edit)return q`
        <sensor-editor-card
          .hass=${this.hass}
          .narrow=${this.narrow}
          .item=${this.path.params.edit}
        ></sensor-editor-card>
      `;{const a=null===(e=this.path.filter)||void 0===e?void 0:e.area,i=null===(t=this.path.filter)||void 0===t?void 0:t.mode;return q`
        <sensors-overview-card
          .hass=${this.hass}
          .narrow=${this.narrow}
          .selectedArea=${a}
          .selectedMode=${i}
        ></sensors-overview-card>
        <add-sensors-card .hass=${this.hass} .narrow=${this.narrow}></add-sensors-card>
      `}}};t([de()],Ws.prototype,"hass",void 0),t([de()],Ws.prototype,"narrow",void 0),t([de()],Ws.prototype,"path",void 0),Ws=t([re("alarm-view-sensors")],Ws);let Xs=class extends ne{constructor(){super(...arguments),this.data={can_arm:!0,can_disarm:!0,is_override_code:!1},this.repeatCode="",this.areas={}}async firstUpdated(){if(this.users=await Fe(this.hass),this.areas=await Xe(this.hass),this.item){const e=this.users[this.item];this.data=Hi(e,"code","code_format","code_length")}this.data=Object.assign(Object.assign({},this.data),{area_limit:(this.data.area_limit||[]).filter(e=>Object.keys(this.areas).includes(e))}),(this.data.area_limit||[]).length||(this.data=Object.assign(Object.assign({},this.data),{area_limit:Object.keys(this.areas)}))}render(){var e;return this.users?q`
      <ha-card>
        <div class="card-header">
          <div class="name">
            ${this.item?zi("panels.codes.cards.edit_user.title",this.hass.language):zi("panels.codes.cards.new_user.title",this.hass.language)}
          </div>
          <ha-icon-button .path=${ns} @click=${this.cancelClick}></ha-icon-button>
        </div>
        <div class="card-content">
          ${this.item?zi("panels.codes.cards.edit_user.description",this.hass.language,"{name}",this.users[this.item].name):zi("panels.codes.cards.new_user.description",this.hass.language)}
        </div>

        <settings-row .narrow=${this.narrow}>
          <span slot="heading">${zi("panels.codes.cards.new_user.fields.name.heading",this.hass.language)}</span>
          <span slot="description">
            ${zi("panels.codes.cards.new_user.fields.name.description",this.hass.language)}
          </span>

          <ha-textfield
            label="${zi("panels.codes.cards.new_user.fields.name.heading",this.hass.language)}"
            placeholder=""
            value=${this.data.name}
            @input=${e=>this.data={...this.data,name:e.target.value}}
          ></ha-textfield>
        </settings-row>

        ${this.item?q`
              <settings-row .narrow=${this.narrow}>
                <span slot="heading">
                  ${zi("panels.codes.cards.edit_user.fields.old_code.heading",this.hass.language)}
                </span>
                <span slot="description">
                  ${zi("panels.codes.cards.edit_user.fields.old_code.description",this.hass.language)}
                </span>

                <ha-textfield
                  label="${zi("panels.codes.cards.edit_user.fields.old_code.heading",this.hass.language)}"
                  placeholder=""
                  type="password"
                  value=${this.data.old_code||""}
                  @input=${e=>this.data={...this.data,old_code:String(e.target.value).trim()}}
                ></ha-textfield>
              </settings-row>
            `:""}
        ${this.item&&!(null===(e=this.data.old_code)||void 0===e?void 0:e.length)?"":q`
              <settings-row .narrow=${this.narrow}>
                <span slot="heading">
                  ${zi("panels.codes.cards.new_user.fields.code.heading",this.hass.language)}
                </span>
                <span slot="description">
                  ${zi("panels.codes.cards.new_user.fields.code.description",this.hass.language)}
                </span>

                <ha-textfield
                  label="${zi("panels.codes.cards.new_user.fields.code.heading",this.hass.language)}"
                  placeholder=""
                  type="password"
                  value=${this.data.code}
                  @input=${e=>this.data={...this.data,code:String(e.target.value).trim()}}
                ></ha-textfield>
              </settings-row>

              <settings-row .narrow=${this.narrow}>
                <span slot="heading">
                  ${zi("panels.codes.cards.new_user.fields.confirm_code.heading",this.hass.language)}
                </span>
                <span slot="description">
                  ${zi("panels.codes.cards.new_user.fields.confirm_code.description",this.hass.language)}
                </span>

                <ha-textfield
                  label="${zi("panels.codes.cards.new_user.fields.confirm_code.heading",this.hass.language)}"
                  placeholder=""
                  type="password"
                  value=${this.repeatCode||""}
                  @input=${e=>this.repeatCode=String(e.target.value).trim()}
                ></ha-textfield>
              </settings-row>
            `}

        <settings-row .narrow=${this.narrow}>
          <span slot="heading">
            ${zi("panels.codes.cards.new_user.fields.can_arm.heading",this.hass.language)}
          </span>
          <span slot="description">
            ${zi("panels.codes.cards.new_user.fields.can_arm.description",this.hass.language)}
          </span>

          <ha-switch
            ?checked=${this.data.can_arm}
            @change=${e=>this.data={...this.data,can_arm:e.target.checked}}
          ></ha-switch>
        </settings-row>

        <settings-row .narrow=${this.narrow}>
          <span slot="heading">
            ${zi("panels.codes.cards.new_user.fields.can_disarm.heading",this.hass.language)}
          </span>
          <span slot="description">
            ${zi("panels.codes.cards.new_user.fields.can_disarm.description",this.hass.language)}
          </span>

          <ha-switch
            ?checked=${this.data.can_disarm}
            @change=${e=>this.data={...this.data,can_disarm:e.target.checked}}
          ></ha-switch>
        </settings-row>

        ${this.getAreaOptions().length>=2?q`
              <settings-row .narrow=${this.narrow}>
                <span slot="heading">
                  ${zi("panels.codes.cards.new_user.fields.area_limit.heading",this.hass.language)}
                </span>
                <span slot="description">
                  ${zi("panels.codes.cards.new_user.fields.area_limit.description",this.hass.language)}
                </span>

                <div class="checkbox-list">
                  ${this.getAreaOptions().map(e=>{var t;const a=(this.data.area_limit||[]).includes(e.value)||!(null===(t=this.data.area_limit)||void 0===t?void 0:t.length);return q`
                      <div>
                        <ha-checkbox
                          @change=${t=>this.toggleSelectArea(e.value,t.target.checked)}
                          ?disabled=${a&&(this.data.area_limit||[]).length<=1}
                          ?checked=${a}
                        ></ha-checkbox>
                        <span @click=${()=>this.toggleSelectArea(e.value,!a)}>
                          ${e.name}
                        </span>
                      </div>
                    `})}
                </div>
              </settings-row>
            `:""}

        <settings-row .narrow=${this.narrow}>
          <span slot="heading">
            ${zi("panels.codes.cards.new_user.fields.is_override_code.heading",this.hass.language)}
          </span>
          <span slot="description">
            ${zi("panels.codes.cards.new_user.fields.is_override_code.description",this.hass.language)}
          </span>

          <ha-switch
            ?checked=${this.data.is_override_code}
            @change=${e=>this.data={...this.data,is_override_code:e.target.checked}}
          ></ha-switch>
        </settings-row>

        <div class="card-actions">
          <mwc-button @click=${this.saveClick}>
            ${this.hass.localize("ui.common.save")}
          </mwc-button>

          ${this.item?q`
                <mwc-button class="warning" @click=${this.deleteClick}>
                  ${this.hass.localize("ui.common.delete")}
                </mwc-button>
              `:""}
        </div>
      </ha-card>
    `:q``}getAreaOptions(){let e=Object.keys(this.areas||{}).map(e=>Object({value:e,name:this.areas[e].name}));return e.sort(Xi),e}toggleSelectArea(e,t){if((this.data.area_limit||[]).length<=1&&!t)return;let a=this.data.area_limit||[];a=t?a.includes(e)?a:[...a,e]:a.includes(e)?a.filter(t=>t!=e):a,this.data=Object.assign(Object.assign({},this.data),{area_limit:a})}deleteClick(e){var t,a;this.item&&(t=this.hass,a=this.item,t.callApi("POST","alarmo/users",{user_id:a,remove:!0})).catch(t=>Zi(t,e)).then(()=>{this.cancelClick()})}saveClick(e){var t,a,i;let s=Object.assign({},this.data);(null===(t=s.name)||void 0===t?void 0:t.length)?(null===(a=s.code)||void 0===a?void 0:a.length)&&!(s.code.length<4)||this.item&&!(null===(i=s.old_code)||void 0===i?void 0:i.length)?(s.code||"").length&&s.code!==this.repeatCode?(Ki(e,zi("panels.codes.cards.new_user.errors.code_mismatch",this.hass.language)),this.data=Hi(this.data,"code"),this.repeatCode=""):(this.item&&(s.old_code||"").length<4&&Hi(s,"old_code","code"),this.getAreaOptions().length&&!this.getAreaOptions().every(e=>(this.data.area_limit||[]).includes(e.value))||(s=Object.assign(Object.assign({},s),{area_limit:[]})),Ze(this.hass,s).catch(t=>Zi(t,e)).then(()=>{this.cancelClick()})):Ki(e,zi("panels.codes.cards.new_user.errors.no_code",this.hass.language)):Ki(e,zi("panels.codes.cards.new_user.errors.no_name",this.hass.language))}cancelClick(){Le(0,as("codes"),!0)}static get styles(){return o`
      ${Ji}
      div.checkbox-list {
        display: flex;
        flex-direction: row;
      }
      div.checkbox-list div {
        display: flex;
        align-items: center;
      }
      div.checkbox-list div span {
        cursor: pointer;
      }
    `}};t([de()],Xs.prototype,"hass",void 0),t([de()],Xs.prototype,"narrow",void 0),t([de()],Xs.prototype,"item",void 0),t([de()],Xs.prototype,"data",void 0),t([de()],Xs.prototype,"repeatCode",void 0),Xs=t([re("user-editor-card")],Xs);let Js=class extends(et(ne)){constructor(){super(...arguments),this.users={}}hassSubscribe(){return this._fetchData(),[this.hass.connection.subscribeMessage(()=>this._fetchData(),{type:"alarmo_config_updated"})]}async _fetchData(){if(!this.hass)return;const e=await Ve(this.hass);this.data=Fi(e,["code_arm_required","code_disarm_required","code_format"]);const t=await Fe(this.hass);this.users=t}render(){return this.hass&&this.data?"new_user"==this.path.subpage?q`
        <user-editor-card .hass=${this.hass} .narrow=${this.narrow}></user-editor-card>
      `:this.path.params.edit_user?q`
        <user-editor-card
          .hass=${this.hass}
          .narrow=${this.narrow}
          item=${this.path.params.edit_user}
        ></user-editor-card>
      `:q`
        <ha-card header="${zi("panels.codes.title",this.hass.language)}">
          <div class="card-content">${zi("panels.codes.cards.codes.description",this.hass.language)}</div>

          <settings-row .narrow=${this.narrow}>
            <span slot="heading">
              ${zi("panels.codes.cards.codes.fields.code_arm_required.heading",this.hass.language)}
            </span>
            <span slot="description">
              ${zi("panels.codes.cards.codes.fields.code_arm_required.description",this.hass.language)}
            </span>
            <ha-switch
              ?checked=${this.data.code_arm_required}
              @change=${e=>{this.saveData({code_arm_required:e.target.checked})}}
            ></ha-switch>
          </settings-row>

          <settings-row .narrow=${this.narrow}>
            <span slot="heading">
              ${zi("panels.codes.cards.codes.fields.code_disarm_required.heading",this.hass.language)}
            </span>
            <span slot="description">
              ${zi("panels.codes.cards.codes.fields.code_disarm_required.description",this.hass.language)}
            </span>
            <ha-switch
              ?checked=${this.data.code_disarm_required}
              @change=${e=>{this.saveData({code_disarm_required:e.target.checked})}}
            ></ha-switch>
          </settings-row>

          <settings-row .narrow=${this.narrow}>
            <span slot="heading">
              ${zi("panels.codes.cards.codes.fields.code_format.heading",this.hass.language)}
            </span>
            <span slot="description">
              ${zi("panels.codes.cards.codes.fields.code_format.description",this.hass.language)}
            </span>
            <mwc-button
              class="${"number"==this.data.code_format?"active":""} ${this.data.code_arm_required||this.data.code_disarm_required?"":"disabled"}"
              @click=${()=>{this.saveData({code_format:"number"})}}
              ?disabled=${!this.data.code_arm_required&&!this.data.code_disarm_required}
            >
              ${zi("panels.codes.cards.codes.fields.code_format.code_format_number",this.hass.language)}
            </mwc-button>
            <mwc-button
              class="${"text"==this.data.code_format?"active":""} ${this.data.code_arm_required||this.data.code_disarm_required?"":"disabled"}"
              @click=${()=>{this.saveData({code_format:"text"})}}
              ?disabled=${!this.data.code_arm_required&&!this.data.code_disarm_required}
            >
              ${zi("panels.codes.cards.codes.fields.code_format.code_format_text",this.hass.language)}
            </mwc-button>
          </settings-row>
        </ha-card>

        ${this.usersPanel()}
      `:q``}usersPanel(){if(!this.hass)return q``;const e=Object.values(this.users);e.sort(Xi);const t={icon:{width:"40px"},name:{title:this.hass.localize("ui.components.area-picker.add_dialog.name"),width:"40%",grow:!0,text:!0},code_format:{title:zi("panels.codes.cards.codes.fields.code_format.heading",this.hass.language),width:"40%",hide:this.narrow,text:!0},enabled:{title:zi("common.enabled",this.hass.language),width:"68px",align:"center"}},a=e.map(e=>({id:e.user_id,icon:q`
          <ha-icon icon="mdi:account-outline"></ha-icon>
        `,name:Ui(e.name),code_format:"number"==e.code_format?Ui(zi("panels.codes.cards.codes.fields.code_format.code_format_number",this.hass.language)):"text"==e.code_format?Ui(zi("panels.codes.cards.codes.fields.code_format.code_format_text",this.hass.language)):this.hass.localize("state.default.unknown"),enabled:q`
          <ha-switch
            @click=${e=>{e.stopPropagation()}}
            ?checked=${e.enabled}
            @change=${t=>this.toggleEnabled(t,e.user_id)}
          ></ha-switch>
        `}));return q`
      <ha-card header="${zi("panels.codes.cards.user_management.title",this.hass.language)}">
        <div class="card-content">
          ${zi("panels.codes.cards.user_management.description",this.hass.language)}
        </div>

        <alarmo-table
          ?selectable=${!0}
          .columns=${t}
          .data=${a}
          @row-click=${e=>{const t=String(e.detail.id);Le(0,as("codes",{params:{edit_user:t}}),!0)}}
        >
          ${zi("panels.codes.cards.user_management.no_items",this.hass.language)}
        </alarmo-table>
        <div class="card-actions">
          <mwc-button @click=${this.addUserClick}>
            ${zi("panels.codes.cards.user_management.actions.new_user",this.hass.language)}
          </mwc-button>
        </div>
      </ha-card>
    `}addUserClick(){Le(0,as("codes","new_user"),!0)}saveData(e){this.hass&&(this.data=Object.assign(Object.assign({},this.data),e),Be(this.hass,this.data).catch(e=>Zi(e,this.shadowRoot.querySelector("ha-card"))).then())}toggleEnabled(e,t){const a=e.target.checked;Ze(this.hass,{user_id:t,enabled:a}).catch(t=>Zi(t,e)).then()}};Js.styles=Ji,t([de()],Js.prototype,"hass",void 0),t([de()],Js.prototype,"narrow",void 0),t([de()],Js.prototype,"path",void 0),t([de()],Js.prototype,"data",void 0),t([de()],Js.prototype,"users",void 0),Js=t([re("alarm-view-codes")],Js);const en=(e,t)=>{switch(e){case Li.ArmedAway:return{value:Li.ArmedAway,name:zi("common.modes_short.armed_away",t.language),icon:Si.ArmedAway};case Li.ArmedHome:return{value:Li.ArmedHome,name:zi("common.modes_short.armed_home",t.language),icon:Si.ArmedHome};case Li.ArmedNight:return{value:Li.ArmedNight,name:zi("common.modes_short.armed_night",t.language),icon:Si.ArmedNight};case Li.ArmedCustom:return{value:Li.ArmedCustom,name:zi("common.modes_short.armed_custom_bypass",t.language),icon:Si.ArmedCustom};case Li.ArmedVacation:return{value:Li.ArmedVacation,name:zi("common.modes_short.armed_vacation",t.language),icon:Si.ArmedVacation}}},tn=(e,t)=>{switch(e){case qi.Armed:return{value:qi.Armed,name:zi("panels.actions.cards.new_notification.fields.event.choose.armed.name",t.language),description:zi("panels.actions.cards.new_notification.fields.event.choose.armed.description",t.language),icon:"hass:shield-check-outline"};case qi.Disarmed:return{value:qi.Disarmed,name:zi("panels.actions.cards.new_notification.fields.event.choose.disarmed.name",t.language),description:zi("panels.actions.cards.new_notification.fields.event.choose.disarmed.description",t.language),icon:"hass:shield-off-outline"};case qi.Triggered:return{value:qi.Triggered,name:zi("panels.actions.cards.new_notification.fields.event.choose.triggered.name",t.language),description:zi("panels.actions.cards.new_notification.fields.event.choose.triggered.description",t.language),icon:"hass:bell-alert-outline"};case qi.Untriggered:return{value:qi.Untriggered,name:zi("panels.actions.cards.new_notification.fields.event.choose.untriggered.name",t.language),description:zi("panels.actions.cards.new_notification.fields.event.choose.untriggered.description",t.language),icon:"hass:bell-off-outline"};case qi.ArmFailure:return{value:qi.ArmFailure,name:zi("panels.actions.cards.new_notification.fields.event.choose.arm_failure.name",t.language),description:zi("panels.actions.cards.new_notification.fields.event.choose.arm_failure.description",t.language),icon:"hass:alert-outline"};case qi.Arming:return{value:qi.Arming,name:zi("panels.actions.cards.new_notification.fields.event.choose.arming.name",t.language),description:zi("panels.actions.cards.new_notification.fields.event.choose.arming.description",t.language),icon:"hass:home-export-outline"};case qi.Pending:return{value:qi.Pending,name:zi("panels.actions.cards.new_notification.fields.event.choose.pending.name",t.language),description:zi("panels.actions.cards.new_notification.fields.event.choose.pending.description",t.language),icon:"hass:home-import-outline"}}},an=(e,t,a)=>0==e?{name:a.master.name,value:0}:Object.keys(t).includes(String(e))?{name:t[e].name,value:e}:{name:String(e),value:e},sn=(e,...t)=>{const a=t.map(t=>{if(!t)return null;const a=Se(t),i=Ce(t);let s={value:t,name:i.replace(/_/g," ").split(" ").map(e=>e.substring(0,1).toUpperCase()+e.substring(1)).join(" "),icon:"hass:home",description:t};switch(a){case"notify":const t=e.states["device_tracker."+i.replace("mobile_app_","")];s=t?Object.assign(Object.assign({},s),{name:t.attributes.friendly_name||Ce(t.entity_id),icon:t.attributes.icon||"hass:cellphone-text"}):Object.assign(Object.assign({},s),{icon:"hass:comment-alert"});break;case"tts":s=Object.assign(Object.assign({},s),{icon:"hass:microphone"})}return s}).filter(Yi);return a.sort((e,t)=>{const a=Se(e.value),i=Se(t.value);return a!=i?Xi(a,i):Xi(e,t)}),a},nn=(e,t)=>{let a=[];const i=Object.keys(e).filter(t=>Object.values(e[t].modes).some(e=>e.enabled));return t.master.enabled&&i.length>1&&(a=[...a,0]),a=[...a,...i],a},rn=(e,t)=>{const a=e=>Object.keys(e.modes).filter(t=>e.modes[t].enabled);if(Yi(e)&&Object.keys(t).includes(String(e)))return a(t[e]);{const e=Object.keys(t).map(e=>a(t[e]));return e[0].filter(t=>e.every(e=>e.includes(t)))}},on=(e,t)=>e.map(e=>({value:e,name:e in t.states?t.states[e].attributes.friendly_name||Ce(e):e,icon:e in t.states?t.states[e].attributes.icon||Pe(Se(e)):void 0,description:e})),dn=e=>{let t=[];return"notify"in e.services&&(t=[...t,...Object.keys(e.services.notify).map(e=>"notify."+e)]),"tts"in e.services&&(t=[...t,...Object.keys(e.services.tts).filter(e=>"clear_cache"!=e).map(e=>"tts."+e)]),t},ln=(...e)=>{if(!e.length||!e.every(e=>e.length))return[];if(1==e.length&&e[0].length>1&&Vi(e[0].map(Se)).length>1)return ln(...e[0].map(e=>Array(e)));let t=[...e[0]];return e.forEach(e=>{t=t.map(t=>e.includes(t)?t:"script"==Se(t)&&e.map(Se).includes("script")?"script.script":e.map(Ce).includes(Ce(t))?"homeassistant."+Ce(t):null).filter(Yi)}),t},cn=(e,t,a=1)=>{if(a>10)return[];if(Array.isArray(e)){const i=e.map(e=>cn(e,t,a+1));return ln(...i)}if(!Yi(e))return[];const i=Se(e);switch(i){case"light":case"switch":case"input_boolean":case"siren":return[i+".turn_on",i+".turn_off"];case"script":return[e];case"lock":return["lock.lock","lock.unlock"];case"group":const s=e in t.states?t.states[e]:void 0,n=(null==s?void 0:s.attributes.entity_id)||[];return cn(n,t,a+1);default:return[]}},hn=(e,t)=>{let a=[...Object.keys(e.states).filter(t=>cn(t,e).length)];return t&&t.length&&(a=[...a,...t.filter(e=>!a.includes(e))]),a.sort(Xi),a},mn=e=>{let t=[...Object.keys(e.states).filter(e=>"media_player"==Se(e))];return t.sort(Xi),t},un=e=>{let t=[{value:"{{arm_mode}}",name:e.translationMetadata.translations.en.nativeName}];return"en"!=e.language&&(t=[...t,{value:`{{arm_mode|lang=${e.language}}}`,name:e.translationMetadata.translations[e.language].nativeName}]),t},pn=e=>"string"==typeof e&&e.trim().length,gn=(e,t)=>pn(e)&&t.services[Se(e)]&&t.services[Se(e)][Ce(e)],vn=(e,t)=>pn(e)&&t.states[e],fn=e=>"object"==typeof e&&null!==e&&!Array.isArray(e),_n=e=>"string"==typeof e;let bn=class extends ne{constructor(){super(...arguments),this.items=[],this.value=[],this.label="",this.invalid=!1}shouldUpdate(e){return e.get("items")&&(Bi(this.items,e.get("items"))||this.firstUpdated()),!0}firstUpdated(){this.value.some(e=>!this.items.map(e=>e.value).includes(e))&&(this.value=this.value.filter(e=>this.items.map(e=>e.value).includes(e)),Ne(this,"value-changed",{value:this.value}))}render(){return q`
      <div class="chip-set">
        ${this.value.length?this.value.map(e=>this.items.find(t=>t.value==e)).filter(Yi).map(e=>q`
          <div class="chip">
            <ha-icon class="icon" icon=${e.icon}>
            </ha-icon>
            <span class="label">
              ${e.name}
            </span>            
            <ha-icon class="button" icon="hass:close" @click=${()=>this._removeClick(e.value)}>
            </ha-icon>
            </mwc-icon-button>
          </div>
        `):""}
      </div>
      <alarmo-select
        .hass=${this.hass}
        .items=${this.items.filter(e=>!this.value.includes(e.value))}
        ?disabled=${this.value.length==this.items.length}
        label=${this.label}
        icons=${!0}
        @value-changed=${this._addClick}
        ?invalid=${this.invalid&&this.value.length!=this.items.length}
      ></alarmo-select>
    `}_removeClick(e){this.value=this.value.filter(t=>t!==e),Ne(this,"value-changed",{value:this.value})}_addClick(e){e.stopPropagation();const t=e.target,a=t.value;this.value.includes(a)||(this.value=[...this.value,a]),t.value="",Ne(this,"value-changed",{value:[...this.value]})}static get styles(){return o`
      div.chip-set {
        margin: 0px -4px;
      }
      div.chip {
        height: 32px;
        border-radius: 16px;
        border: 2px solid rgb(168, 232, 251);
        line-height: 1.25rem;
        font-size: 0.875rem;
        font-weight: 400;
        padding: 0px 12px;
        display: inline-flex;
        align-items: center;
        box-sizing: border-box;
        margin: 4px;
      }
      .icon {
        vertical-align: middle;
        outline: none;
        display: flex;
        align-items: center;
        border-radius: 50%;
        padding: 6px;
        color: rgba(0, 0, 0, 0.54);
        background: rgb(168, 232, 251);
        --mdc-icon-size: 20px;
        margin-left: -14px !important;
      }
      .label {
        margin: 0px 4px;
      }
      .button {
        cursor: pointer;
        background: var(--secondary-text-color);
        border-radius: 50%;
        --mdc-icon-size: 14px;
        color: var(--card-background-color);
        width: 16px;
        height: 16px;
        padding: 1px;
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
        margin-right: -6px !important;
      }
    `}};var yn;t([de()],bn.prototype,"hass",void 0),t([de()],bn.prototype,"items",void 0),t([de({type:Array})],bn.prototype,"value",void 0),t([de()],bn.prototype,"label",void 0),t([de({type:Boolean})],bn.prototype,"invalid",void 0),bn=t([re("alarmo-selector")],bn),function(e){e[e.Yaml=0]="Yaml",e[e.UI=1]="UI"}(yn||(yn={}));let wn=class extends ne{constructor(){super(...arguments),this.config={type:Pi.Notification,triggers:[{}],actions:[{}]},this.viewMode=yn.UI,this.errors={}}async firstUpdated(){if(await Ie(),this.areas=await Xe(this.hass),this.alarmoConfig=await Ve(this.hass),this.item){let e=this.item.actions.map(e=>Hi(e,"entity_id"));this.config=Object.assign(Object.assign({},this.item),{actions:[e[0],...e.slice(1)]}),this.config.triggers.length>1&&(this.config=Object.assign(Object.assign({},this.config),{triggers:[this.config.triggers[0]]}));let t=this.config.triggers[0].area;Yi(t)&&!nn(this.areas,this.alarmoConfig).includes(t)?t=void 0:null===t&&(t=0),this._setArea(new CustomEvent("value-changed",{detail:{value:t}}))}if(!Yi(this.config.triggers[0].area)){const e=nn(this.areas,this.alarmoConfig);1==e.length?this._setArea(new CustomEvent("value-changed",{detail:{value:e[0]}})):e.includes(0)&&this._setArea(new CustomEvent("value-changed",{detail:{value:0}}))}}render(){var e,t,a,i;return this.hass&&this.areas&&this.alarmoConfig?q`
      <div class="heading">
        <ha-icon-button .path=${ns} @click=${this._cancelClick} class="icon"></ha-icon-button>
        <div class="header">${zi("panels.actions.cards.new_notification.title",this.hass.language)}</div>
        <div class="description">
          ${zi("panels.actions.cards.new_notification.description",this.hass.language)}
        </div>
      </div>
      <div class="section-header">${zi("panels.actions.cards.new_notification.trigger",this.hass.language)}</div>
      <ha-card>
        <div class="card-content">
          <settings-row .narrow=${this.narrow} .large=${!0} first>
            <span slot="heading">
              ${zi("panels.actions.cards.new_notification.fields.event.heading",this.hass.language)}
            </span>
            <span slot="description">
              ${zi("panels.actions.cards.new_notification.fields.event.description",this.hass.language)}
            </span>

            <alarmo-select
              .hass=${this.hass}
              .items=${Object.values(qi).map(e=>tn(e,this.hass))}
              label=${zi("panels.actions.cards.new_action.fields.event.heading",this.hass.language)}
              icons=${!0}
              .value=${this.config.triggers[0].event}
              @value-changed=${this._setEvent}
              ?invalid=${this.errors.event}
            ></alarmo-select>
          </settings-row>

          ${Object.keys(this.areas).length>1?q`
                <settings-row .narrow=${this.narrow} .large=${!0}>
                  <span slot="heading">
                    ${zi("panels.actions.cards.new_action.fields.area.heading",this.hass.language)}
                  </span>
                  <span slot="description">
                    ${zi("panels.actions.cards.new_action.fields.area.description",this.hass.language)}
                  </span>

                  <alarmo-select
                    .hass=${this.hass}
                    .items=${nn(this.areas,this.alarmoConfig).map(e=>an(e,this.areas,this.alarmoConfig))}
                    clearable=${!0}
                    label=${zi("panels.actions.cards.new_action.fields.area.heading",this.hass.language)}
                    .value=${this.config.triggers[0].area}
                    @value-changed=${this._setArea}
                    ?invalid=${this.errors.area||!this.config.triggers[0].area&&!this.alarmoConfig.master.enabled}
                  ></alarmo-select>
                </settings-row>
              `:""}

          <settings-row .narrow=${this.narrow} .large=${!0} last>
            <span slot="heading">
              ${zi("panels.actions.cards.new_notification.fields.mode.heading",this.hass.language)}
            </span>
            <span slot="description">
              ${zi("panels.actions.cards.new_notification.fields.mode.description",this.hass.language)}
            </span>

            <alarmo-selector
              .hass=${this.hass}
              .items=${rn(this.config.triggers[0].area,this.areas).map(e=>en(e,this.hass))}
              label=${zi("panels.actions.cards.new_action.fields.mode.heading",this.hass.language)}
              .value=${this.config.triggers[0].modes||[]}
              @value-changed=${this._setModes}
              ?invalid=${this.errors.modes}
            ></alarmo-selector>
          </settings-row>
        </div>
      </ha-card>

      <div class="section-header">${zi("panels.actions.cards.new_notification.action",this.hass.language)}</div>
      <ha-card>
        <div class="card-content">
          ${this.viewMode==yn.UI?q`
                <settings-row .narrow=${this.narrow} .large=${!0} first>
                  <span slot="heading">
                    ${zi("panels.actions.cards.new_notification.fields.target.heading",this.hass.language)}
                  </span>
                  <span slot="description">
                    ${zi("panels.actions.cards.new_notification.fields.target.description",this.hass.language)}
                  </span>

                  <alarmo-select
                    .hass=${this.hass}
                    .items=${sn(this.hass,...dn(this.hass))}
                    ?disabled=${!dn(this.hass).length}
                    label=${zi("panels.actions.cards.new_notification.fields.target.heading",this.hass.language)}
                    icons=${!0}
                    .value=${this.config.actions[0].service}
                    @value-changed=${this._setService}
                    ?invalid=${this.errors.service}
                    allow-custom-value
                  ></alarmo-select>
                </settings-row>

                ${this.config.actions[0].service&&"notify"!=Se(this.config.actions[0].service)?"":q`
                      <settings-row .narrow=${this.narrow}>
                        <span slot="heading">
                          ${zi("panels.actions.cards.new_notification.fields.title.heading",this.hass.language)}
                        </span>
                        <span slot="description">
                          ${zi("panels.actions.cards.new_notification.fields.title.description",this.hass.language)}
                        </span>

                        <ha-textfield
                          label="${zi("panels.actions.cards.new_notification.fields.title.heading",this.hass.language)}"
                          .value=${(null===(e=this.config.actions[0].data)||void 0===e?void 0:e.title)||""}
                          @input=${this._setTitle}
                          ?invalid=${this.errors.title}
                        ></ha-textfield>
                      </settings-row>
                    `}
                ${this.config.actions[0].service&&"tts"==Se(this.config.actions[0].service)?q`
                      <settings-row .narrow=${this.narrow} .large=${!0} first>
                        <span slot="heading">
                          ${zi("panels.actions.cards.new_action.fields.entity.heading",this.hass.language)}
                        </span>
                        <span slot="description">
                          ${zi("panels.actions.cards.new_action.fields.entity.description",this.hass.language)}
                        </span>

                        <alarmo-select
                          .items=${on(mn(this.hass),this.hass)}
                          label=${zi("panels.actions.cards.new_action.fields.entity.heading",this.hass.language)}
                          .value=${(null===(t=this.config.actions[0].data)||void 0===t?void 0:t.entity_id)||""}
                          @value-changed=${this._setEntity}
                          .icons=${!0}
                          ?invalid=${this.errors.entity}
                        ></alarmo-select>
                      </settings-row>
                    `:""}

                <settings-row .narrow=${this.narrow} .large=${!0} last>
                  <span slot="heading">
                    ${zi("panels.actions.cards.new_notification.fields.message.heading",this.hass.language)}
                  </span>
                  <span slot="description">
                    ${zi("panels.actions.cards.new_notification.fields.message.description",this.hass.language)}
                  </span>

                  <ha-textarea
                    id="message"
                    label="${zi("panels.actions.cards.new_notification.fields.message.heading",this.hass.language)}"
                    placeholder=${this._messagePlaceholder()}
                    .value=${(null===(a=this.config.actions[0].data)||void 0===a?void 0:a.message)||""}
                    @input=${e=>this._setMessage(e.target.value)}
                    ?invalid=${this.errors.message}
                  ></ha-textarea>

                  ${this.config.triggers[0].event?q`
                        <div style="margin-top: 10px">
                          <span style="padding-right: 10px">
                            ${zi("panels.actions.cards.new_notification.fields.message.insert_wildcard",this.hass.language)}:
                          </span>
                          <alarmo-chip-set
                            .items=${((e,t)=>{let a=[];return a=[],e&&![qi.Pending,qi.Triggered,qi.ArmFailure].includes(e)||(a=[...a,{name:"Open Sensors",value:"{{open_sensors}}"}]),e&&![qi.Armed].includes(e)||(a=[...a,{name:"Bypassed Sensors",value:"{{bypassed_sensors}}"}]),(!e||(null==t?void 0:t.code_arm_required)&&[qi.Armed,qi.Arming,qi.ArmFailure].includes(e)||(null==t?void 0:t.code_disarm_required)&&[qi.Disarmed,qi.Untriggered].includes(e))&&(a=[...a,{name:"Changed By",value:"{{changed_by}}"}]),e&&![qi.Armed,qi.Arming,qi.Pending,qi.Triggered,qi.ArmFailure].includes(e)||(a=[...a,{name:"Arm Mode",value:"{{arm_mode}}"}]),a})(this.config.triggers[0].event,this.alarmoConfig)}
                            @value-changed=${e=>this._insertWildCard(e.detail)}
                          ></alarmo-chip-set>
                        </div>
                      `:""}
                </settings-row>

                ${null!==this._getOpenSensorsFormat()?q`
                      <settings-row .narrow=${this.narrow} .large=${!0}>
                        <span slot="heading">
                          ${zi("panels.actions.cards.new_notification.fields.open_sensors_format.heading",this.hass.language)}
                        </span>

                        <span slot="description">
                          ${zi("panels.actions.cards.new_notification.fields.open_sensors_format.description",this.hass.language)}
                        </span>

                        <alarmo-select
                          .items=${(e=>{let t=[];return t="en"!=e.language?[...t,{value:"{{open_sensors}}",name:`${zi("panels.actions.cards.new_notification.fields.open_sensors_format.options.default",e.language)} (${e.translationMetadata.translations.en.nativeName})`},{value:`{{open_sensors|lang=${e.language}}}`,name:`${zi("panels.actions.cards.new_notification.fields.open_sensors_format.options.default",e.language)} (${e.translationMetadata.translations[e.language].nativeName})`}]:[...t,{value:"{{open_sensors}}",name:zi("panels.actions.cards.new_notification.fields.open_sensors_format.options.default",e.language)}],t=[...t,{value:"{{open_sensors|format=short}}",name:zi("panels.actions.cards.new_notification.fields.open_sensors_format.options.short",e.language)}],t})(this.hass)}
                          .value=${this._getOpenSensorsFormat(!0)}
                          @value-changed=${this._setOpenSensorsFormat}
                        ></alarmo-select>
                      </settings-row>
                    `:""}
                ${null!==this._getArmModeFormat()&&(un(this.hass).length>1||1==un(this.hass).length&&un(this.hass)[0].value!=this._getArmModeFormat())?q`
                      <settings-row .narrow=${this.narrow} .large=${!0}>
                        <span slot="heading">
                          ${zi("panels.actions.cards.new_notification.fields.arm_mode_format.heading",this.hass.language)}
                        </span>

                        <span slot="description">
                          ${zi("panels.actions.cards.new_notification.fields.arm_mode_format.description",this.hass.language)}
                        </span>

                        <alarmo-select
                          .items=${un(this.hass)}
                          .value=${this._getArmModeFormat(!0)}
                          @value-changed=${this._setArmModeFormat}
                        ></alarmo-select>
                      </settings-row>
                    `:""}
              `:q`
                <h2>${zi("components.editor.edit_in_yaml",this.hass.language)}</h2>

                <ha-yaml-editor
                  .defaultValue=${this.config.actions[0]||""}
                  @value-changed=${this._setYaml}
                ></ha-yaml-editor>

                ${this.errors.service||this.errors.title||this.errors.message?q`
                      <span class="error-message">
                        ${this.hass.localize("ui.errors.config.key_missing","key",Object.entries(this.errors).find(([e,t])=>t&&["service","title","message","entity"].includes(e))[0])}
                      </span>
                    `:""}
              `}
        </div>

        <div class="toggle-button">
          <mwc-button @click=${this._toggleYamlMode}>
            <ha-icon icon="hass:shuffle-variant"></ha-icon>
            ${this.viewMode==yn.Yaml?zi("components.editor.ui_mode",this.hass.language):zi("components.editor.yaml_mode",this.hass.language)}
          </mwc-button>
        </div>

        <div class="card-actions">
          <mwc-button trailingIcon ?disabled=${!this._validAction()} @click=${this._testClick}>
            ${zi("panels.actions.cards.new_notification.actions.test",this.hass.language)}
            <ha-icon icon="hass:arrow-right"></ha-icon>
          </mwc-button>
        </div>
      </ha-card>

      <div class="section-header">${zi("panels.actions.cards.new_notification.options",this.hass.language)}</div>
      <ha-card>
        <div class="card-content">
          <settings-row .narrow=${this.narrow} .large=${!0} first>
            <span slot="heading">
              ${zi("panels.actions.cards.new_notification.fields.name.heading",this.hass.language)}
            </span>
            <span slot="description">
              ${zi("panels.actions.cards.new_notification.fields.name.description",this.hass.language)}
            </span>

            <ha-textfield
              label="${zi("panels.actions.cards.new_notification.fields.name.heading",this.hass.language)}"
              .placeholder=${this._namePlaceholder()}
              .value=${this.config.name||""}
              @input=${this._setName}
              ?invalid=${this.errors.name}
            ></ha-textfield>
          </settings-row>

          ${(null===(i=this.item)||void 0===i?void 0:i.automation_id)?q`
                <settings-row .narrow=${this.narrow}>
                  <span slot="heading">
                    ${zi("panels.actions.cards.new_notification.fields.delete.heading",this.hass.language)}
                  </span>
                  <span slot="description">
                    ${zi("panels.actions.cards.new_notification.fields.delete.description",this.hass.language)}
                  </span>
                  <div>
                    <mwc-button class="warning" outlined @click=${this._deleteClick}>
                      <ha-icon icon="hass:trash-can-outline"></ha-icon>
                      ${this.hass.localize("ui.common.delete")}
                    </mwc-button>
                  </div>
                </settings-row>
              `:""}
        </div>
      </ha-card>

      <div class="actions">
        <mwc-button raised @click=${this._saveClick} style="width: 100%" class="save-button">
          <ha-icon icon="hass:content-save-outline"></ha-icon>
          ${this.hass.localize("ui.common.save")}
        </mwc-button>
      </div>
    `:q``}_setEvent(e){e.stopPropagation();const t=e.detail.value;let a=this.config.triggers;Object.assign(a,{0:Object.assign(Object.assign({},a[0]),{event:t})}),this.config=Object.assign(Object.assign({},this.config),{triggers:a}),Object.keys(this.errors).includes("event")&&this._validateConfig()}_setArea(e){var t;e.stopPropagation();const a=e.detail.value;let i=this.config.triggers;Object.assign(i,{0:Object.assign(Object.assign({},i[0]),{area:a})});const s=rn(a,this.areas);(null===(t=i[0].modes)||void 0===t?void 0:t.length)&&this._setModes(new CustomEvent("value-changed",{detail:{value:i[0].modes.filter(e=>s.includes(e))}})),this.config=Object.assign(Object.assign({},this.config),{triggers:i}),Object.keys(this.errors).includes("area")&&this._validateConfig()}_setModes(e){e.stopPropagation();const t=e.detail.value;let a=this.config.triggers;Object.assign(a,{0:Object.assign(Object.assign({},a[0]),{modes:t})}),this.config=Object.assign(Object.assign({},this.config),{triggers:a}),Object.keys(this.errors).includes("modes")&&this._validateConfig()}_setService(e){e.stopPropagation();const t=String(e.detail.value);let a=this.config.actions;Object.assign(a,{0:Object.assign(Object.assign(Object.assign({},a[0]),{service:t}),Hi(a[0],"service"))}),(a[0].data||{}).entity_id&&"notify"==Se(t)&&Object.assign(a,{0:Object.assign(Object.assign({},a[0]),{data:Hi(a[0].data||{},"entity_id")})}),this.config=Object.assign(Object.assign({},this.config),{actions:a}),Object.keys(this.errors).includes("service")&&this._validateConfig()}_setTitle(e){e.stopPropagation();const t=e.target.value;let a=this.config.actions;Object.assign(a,{0:Object.assign(Object.assign({},a[0]),{service:a[0].service||"",data:Object.assign(Object.assign({},a[0].data||{}),{title:t})})}),this.config=Object.assign(Object.assign({},this.config),{actions:a}),Object.keys(this.errors).includes("title")&&this._validateConfig()}_setEntity(e){e.stopPropagation();const t=e.target.value;let a=this.config.actions;Object.assign(a,{0:Object.assign(Object.assign({},a[0]),{service:a[0].service||"",data:Object.assign(Object.assign({},a[0].data||{}),{entity_id:t})})}),this.config=Object.assign(Object.assign({},this.config),{actions:a}),Object.keys(this.errors).includes("entity")&&this._validateConfig()}_setMessage(e){let t=this.config.actions;Object.assign(t,{0:Object.assign(Object.assign({},t[0]),{service:t[0].service||"",data:Object.assign(Object.assign({},t[0].data||{}),{message:e})})}),this.config=Object.assign(Object.assign({},this.config),{actions:t}),Object.keys(this.errors).includes("message")&&this._validateConfig()}_setName(e){e.stopPropagation();const t=e.target.value;this.config=Object.assign(Object.assign({},this.config),{name:t})}_setYaml(e){const t=e.detail.value;let a={};_n(null==t?void 0:t.service)&&(a=Object.assign(Object.assign({},a),{service:String(t.service)})),fn(null==t?void 0:t.data)&&(a=Object.assign(Object.assign({},a),{data:t.data})),Object.keys(a).length&&(this.config=Object.assign(Object.assign({},this.config),{actions:Object.assign(this.config.actions,{0:Object.assign(Object.assign({},this.config.actions[0]),a)})})),Object.keys(this.errors).some(e=>["service","message","title"].includes(e))&&this._validateConfig()}_validateConfig(){var e;this.errors={};const t=this._parseAutomation(),a=t.triggers[0];a.event&&Object.values(qi).includes(a.event)||(this.errors=Object.assign(Object.assign({},this.errors),{event:!0})),Yi(a.area)&&nn(this.areas,this.alarmoConfig).includes(a.area)||(this.errors=Object.assign(Object.assign({},this.errors),{area:!0})),(a.modes||[]).every(e=>rn(a.area,this.areas).includes(e))||(this.errors=Object.assign(Object.assign({},this.errors),{modes:!0}));const i=t.actions[0];return!i.service||!dn(this.hass).includes(i.service)&&"script"!=Se(i.service)?this.errors=Object.assign(Object.assign({},this.errors),{service:!0}):!i.service||"tts"!=Se(i.service)||Object.keys(i.data||{}).includes("entity_id")&&mn(this.hass).includes(i.data.entity_id)||(this.errors=Object.assign(Object.assign({},this.errors),{entity:!0})),pn(null===(e=i.data)||void 0===e?void 0:e.message)||(this.errors=Object.assign(Object.assign({},this.errors),{message:!0})),pn(t.name)||(this.errors=Object.assign(Object.assign({},this.errors),{name:!0})),!Object.values(this.errors).length}_validAction(){var e;const t=this._parseAutomation().actions[0];return t.service&&("script"==Se(t.service)||dn(this.hass).includes(t.service))&&pn(null===(e=t.data)||void 0===e?void 0:e.message)}_insertWildCard(e){var t;const a=this.shadowRoot.querySelector("#message");a&&a.focus();let i=(null===(t=this.config.actions[0].data)||void 0===t?void 0:t.message)||"";i=a&&null!==a.selectionStart&&null!==a.selectionEnd?i.substring(0,a.selectionStart)+e+i.substring(a.selectionEnd,i.length):i+e,this._setMessage(i)}_toggleYamlMode(){if(this.viewMode=this.viewMode==yn.UI?yn.Yaml:yn.UI,this.viewMode==yn.Yaml){let e=Object.assign({},this.config.actions[0]),t="object"==typeof e.data&&Yi(e.data)?e.data:{};e=Object.assign(Object.assign({},e),{service:e.service||""}),t.message||(t=Object.assign(Object.assign({},t),{message:""})),dn(this.hass).includes(e.service)&&("notify"!=Se(e.service)||t.title||(t=Object.assign(Object.assign({},t),{title:""})),"tts"!=Se(e.service)||t.entity_id||(t=Object.assign(Object.assign({},t),{entity_id:""}))),e=Object.assign(Object.assign({},e),{data:t}),this.config=Object.assign(Object.assign({},this.config),{actions:Object.assign(this.config.actions,{0:e})})}}_namePlaceholder(){const e=this.config.triggers[0].event,t=this.config.actions[0].service?Se(this.config.actions[0].service):null;if(!e)return"";if("notify"==t){const t=sn(this.hass,this.config.actions[0].service);return t.length?zi("panels.actions.cards.new_notification.fields.name.placeholders."+e,this.hass.language,"{target}",t[0].name):""}if("tts"==t){const t="object"==typeof this.config.actions[0].data&&Yi(this.config.actions[0].data)?this.config.actions[0].data.entity_id:null;if(!t||!this.hass.states[t])return"";const a=Ii(this.hass.states[t]);return zi("panels.actions.cards.new_notification.fields.name.placeholders."+e,this.hass.language,"{target}",a)}return""}_messagePlaceholder(){const e=this.config.triggers[0].event;return e?zi("panels.actions.cards.new_notification.fields.message.placeholders."+e,this.hass.language):""}_parseAutomation(){var e;let t=Object.assign({},this.config),a=t.actions[0];return!pn(null===(e=a.data)||void 0===e?void 0:e.message)&&this.viewMode==yn.UI&&this._messagePlaceholder()&&(a=Object.assign(Object.assign({},a),{data:Object.assign(Object.assign({},a.data),{message:this._messagePlaceholder()})}),Object.assign(t,{actions:Object.assign(t.actions,{0:a})})),!pn(t.name)&&this._namePlaceholder()&&(t=Object.assign(Object.assign({},t),{name:this._namePlaceholder()})),t}_getOpenSensorsFormat(e=!1){var t;const a=((null===(t=this.config.actions[0].data)||void 0===t?void 0:t.message)||"").match(/{{open_sensors(\|[^}]+)?}}/);return null!==a?a[0]:e?"{{open_sensors}}":null}_setOpenSensorsFormat(e){var t;e.stopPropagation();const a=String(e.detail.value);let i=(null===(t=this.config.actions[0].data)||void 0===t?void 0:t.message)||"";i=i.replace(/{{open_sensors(\|[^}]+)?}}/,a);let s=this.config.actions;Object.assign(s,{0:Object.assign(Object.assign({},s[0]),{service:s[0].service||"",data:Object.assign(Object.assign({},s[0].data||{}),{message:i})})}),this.config=Object.assign(Object.assign({},this.config),{actions:s})}_getArmModeFormat(e=!1){var t;const a=((null===(t=this.config.actions[0].data)||void 0===t?void 0:t.message)||"").match(/{{arm_mode(\|[^}]+)?}}/);return null!==a?a[0]:e?"{{arm_mode}}":null}_setArmModeFormat(e){var t;e.stopPropagation();const a=String(e.detail.value);let i=(null===(t=this.config.actions[0].data)||void 0===t?void 0:t.message)||"";i=i.replace(/{{arm_mode(\|[^}]+)?}}/,a);let s=this.config.actions;Object.assign(s,{0:Object.assign(Object.assign({},s[0]),{service:s[0].service||"",data:Object.assign(Object.assign({},s[0].data||{}),{message:i})})}),this.config=Object.assign(Object.assign({},this.config),{actions:s})}_saveClick(e){if(!this._validateConfig())return;let t=this._parseAutomation();rn(t.triggers[0].area,this.areas).every(e=>{var a;return null===(a=t.triggers[0].modes)||void 0===a?void 0:a.includes(e)})&&(t=Object.assign(Object.assign({},t),{triggers:Object.assign(t.triggers,{0:Object.assign(Object.assign({},t.triggers[0]),{modes:[]})})})),this.item&&(t=Object.assign(Object.assign({},t),{automation_id:this.item.automation_id})),Qe(this.hass,t).catch(t=>Zi(t,e)).then(()=>this._cancelClick())}_deleteClick(e){var t;(null===(t=this.item)||void 0===t?void 0:t.automation_id)&&We(this.hass,this.item.automation_id).catch(t=>Zi(t,e)).then(()=>this._cancelClick())}_testClick(e){const t=this._parseAutomation().actions[0],[a,i]=t.service.split(".");let s=t.data.message;s=s.replace("{{open_sensors|format=short}}","Some Example Sensor"),s=s.replace(/{{open_sensors(\|[^}]+)?}}/,"Some Example Sensor is open"),s=s.replace("{{bypassed_sensors}}","Some Bypassed Sensor"),s=s.replace(/{{arm_mode(\|[^}]+)?}}/,"Armed away"),s=s.replace("{{changed_by}}","Some Example User"),this.hass.callService(a,i,Object.assign(Object.assign({},t.data),{message:s})).then().catch(t=>{Ki(e,t.message)})}_cancelClick(){Le(0,as("actions"),!0)}static get styles(){return o`
      div.content {
        padding: 28px 20px 0;
        max-width: 1040px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
      }
      div.header {
        font-size: 24px;
        font-weight: 400;
        letter-spacing: -0.012em;
        line-height: 32px;
        opacity: var(--dark-primary-opacity);
      }
      div.section-header {
        font-size: 18px;
        font-weight: 400;
        letter-spacing: -0.012em;
        line-height: 32px;
        opacity: var(--dark-primary-opacity);
        margin: 20px 0px 5px 10px;
      }
      div.actions {
        padding: 20px 0px 30px 0px;
      }
      mwc-button ha-icon {
        margin-right: 6px;
        --mdc-icon-size: 20px;
      }
      .toggle-button {
        position: absolute;
        right: 20px;
        top: 20px;
      }
      h2 {
        margin-top: 10px;
        font-size: 24px;
        font-weight: 400;
        letter-spacing: -0.012em;
      }
      span.error-message {
        color: var(--error-color);
      }
      mwc-button.warning {
        --mdc-theme-primary: var(--error-color);
      }
      mwc-button.save-button {
        --mdc-theme-primary: rgba(var(--rgb-primary-color), 0.8);
      }
      div.heading {
        display: grid;
        grid-template-areas:
          'header icon'
          'description icon';
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr 48px;
        margin: 20px 0px 10px 10px;
      }
      div.heading .icon {
        grid-area: icon;
      }
      div.heading .header {
        grid-area: header;
      }
      div.heading .description {
        grid-area: description;
      }
      ha-textarea[invalid] {
        --mdc-text-field-idle-line-color: var(--mdc-theme-error);
        --mdc-text-field-label-ink-color: var(--mdc-theme-error);
      }
    `}};var kn;t([de({attribute:!1})],wn.prototype,"hass",void 0),t([de()],wn.prototype,"narrow",void 0),t([de()],wn.prototype,"config",void 0),t([de()],wn.prototype,"item",void 0),t([de()],wn.prototype,"areas",void 0),t([de()],wn.prototype,"alarmoConfig",void 0),t([de()],wn.prototype,"viewMode",void 0),t([de()],wn.prototype,"errors",void 0),wn=t([re("notification-editor-card")],wn),function(e){e[e.Yaml=0]="Yaml",e[e.UI=1]="UI"}(kn||(kn={}));let An=class extends ne{constructor(){super(...arguments),this.config={type:Pi.Action,triggers:[{}],actions:[{}]},this.viewMode=kn.UI,this.errors={}}async firstUpdated(){if(await Ie(),this.areas=await Xe(this.hass),this.alarmoConfig=await Ve(this.hass),this.item){let e=this.item.actions.map(e=>e.entity_id?e:Hi(e,"entity_id"));this.config=Object.assign(Object.assign({},this.item),{actions:[e[0],...e.slice(1)]}),this.config.triggers.length>1&&(this.config=Object.assign(Object.assign({},this.config),{triggers:[this.config.triggers[0]]}));let t=this.config.triggers[0].area;Yi(t)&&!nn(this.areas,this.alarmoConfig).includes(t)?t=void 0:null===t&&(t=0),this._setArea(new CustomEvent("value-changed",{detail:{value:t}})),this._hasCustomEntities()&&(this.viewMode=kn.Yaml)}if(!Yi(this.config.triggers[0].area)){const e=nn(this.areas,this.alarmoConfig);1==e.length?this._setArea(new CustomEvent("value-changed",{detail:{value:e[0]}})):e.includes(0)&&this._setArea(new CustomEvent("value-changed",{detail:{value:0}}))}!this.item||this.config.triggers[0].area||this.alarmoConfig.master.enabled||(this.errors=Object.assign(Object.assign({},this.errors),{area:!0}))}render(){var e;return this.hass&&this.areas&&this.alarmoConfig?q`
      <div class="heading">
        <ha-icon-button .path=${ns} @click=${this._cancelClick} class="icon"></ha-icon-button>
        <div class="header">${zi("panels.actions.cards.new_action.title",this.hass.language)}</div>
        <div class="description">${zi("panels.actions.cards.new_action.description",this.hass.language)}</div>
      </div>
      <div class="section-header">${zi("panels.actions.cards.new_notification.trigger",this.hass.language)}</div>
      <ha-card>
        <div class="card-content">
          <settings-row .narrow=${this.narrow} .large=${!0} first>
            <span slot="heading">
              ${zi("panels.actions.cards.new_action.fields.event.heading",this.hass.language)}
            </span>
            <span slot="description">
              ${zi("panels.actions.cards.new_action.fields.event.description",this.hass.language)}
            </span>

            <alarmo-select
              .hass=${this.hass}
              .items=${Object.values(qi).map(e=>tn(e,this.hass))}
              label=${zi("panels.actions.cards.new_action.fields.event.heading",this.hass.language)}
              icons=${!0}
              .value=${this.config.triggers[0].event}
              @value-changed=${this._setEvent}
              ?invalid=${this.errors.event}
            ></alarmo-select>
          </settings-row>

          ${Object.keys(this.areas).length>1?q`
                <settings-row .narrow=${this.narrow} .large=${!0}>
                  <span slot="heading">
                    ${zi("panels.actions.cards.new_action.fields.area.heading",this.hass.language)}
                  </span>
                  <span slot="description">
                    ${zi("panels.actions.cards.new_action.fields.area.description",this.hass.language)}
                  </span>

                  <alarmo-select
                    .hass=${this.hass}
                    .items=${nn(this.areas,this.alarmoConfig).map(e=>an(e,this.areas,this.alarmoConfig))}
                    clearable=${!0}
                    label=${zi("panels.actions.cards.new_action.fields.area.heading",this.hass.language)}
                    .value=${this.config.triggers[0].area}
                    @value-changed=${this._setArea}
                    ?invalid=${this.errors.area}
                  ></alarmo-select>
                </settings-row>
              `:""}

          <settings-row .narrow=${this.narrow} .large=${!0} last>
            <span slot="heading">
              ${zi("panels.actions.cards.new_notification.fields.mode.heading",this.hass.language)}
            </span>
            <span slot="description">
              ${zi("panels.actions.cards.new_notification.fields.mode.description",this.hass.language)}
            </span>

            <alarmo-selector
              .hass=${this.hass}
              .items=${rn(this.config.triggers[0].area,this.areas).map(e=>en(e,this.hass))}
              label=${zi("panels.actions.cards.new_action.fields.mode.heading",this.hass.language)}
              .value=${this.config.triggers[0].modes||[]}
              @value-changed=${this._setModes}
              ?invalid=${this.errors.modes}
            ></alarmo-selector>
          </settings-row>
        </div>
      </ha-card>

      <div class="section-header">${zi("panels.actions.cards.new_notification.action",this.hass.language)}</div>
      <ha-card>
        <div class="card-content">
          ${this.viewMode==kn.UI?q`
                <settings-row .narrow=${this.narrow} .large=${!0} first>
                  <span slot="heading">
                    ${zi("panels.actions.cards.new_action.fields.entity.heading",this.hass.language)}
                  </span>
                  <span slot="description">
                    ${zi("panels.actions.cards.new_action.fields.entity.description",this.hass.language)}
                  </span>

                  <alarmo-selector
                    .hass=${this.hass}
                    .items=${on(hn(this.hass,this._getEntities()),this.hass)}
                    ?disabled=${!hn(this.hass,this._getEntities()).length}
                    label=${zi("panels.actions.cards.new_action.fields.entity.heading",this.hass.language)}
                    .value=${this._getEntities()}
                    @value-changed=${this._setEntity}
                    ?invalid=${this.errors.entity_id}
                  ></alarmo-selector>
                </settings-row>

                ${this._getEntities().length?q`
                      <settings-row .narrow=${this.narrow} .large=${!0}>
                        <span slot="heading">
                          ${zi("panels.actions.cards.new_action.fields.action.heading",this.hass.language)}
                        </span>
                        <span slot="description">
                          ${zi("panels.actions.cards.new_action.fields.action.description",this.hass.language)}
                        </span>

                        <div>
                          ${this.renderActions()||zi("panels.actions.cards.new_action.fields.action.no_common_actions",this.hass.language)}
                        </div>
                        ${this.errors.service?q`
                              <span class="error-message">
                                ${this.hass.localize("ui.common.error_required",this.hass.language)}
                              </span>
                            `:""}
                      </settings-row>
                    `:""}
              `:q`
                <h2>${zi("components.editor.edit_in_yaml",this.hass.language)}</h2>

                <ha-yaml-editor
                  .defaultValue=${this.config.actions||""}
                  @value-changed=${this._setYaml}
                ></ha-yaml-editor>

                ${this.errors.service||this.errors.entity_id?q`
                      <span class="error-message">
                        ${this.hass.localize("ui.errors.config.key_missing","key",Object.entries(this.errors).find(([e,t])=>t&&["service","entity_id"].includes(e))[0])}
                      </span>
                    `:""}
              `}
        </div>

        <div class="toggle-button">
          <mwc-button @click=${this._toggleYamlMode}>
            <ha-icon icon="hass:shuffle-variant"></ha-icon>
            ${this.viewMode==kn.Yaml?zi("components.editor.ui_mode",this.hass.language):zi("components.editor.yaml_mode",this.hass.language)}
          </mwc-button>
        </div>

        <div class="card-actions">
          <mwc-button trailingIcon ?disabled=${!this._validAction()} @click=${this._testClick}>
            ${zi("panels.actions.cards.new_notification.actions.test",this.hass.language)}
            <ha-icon icon="hass:arrow-right"></ha-icon>
          </mwc-button>
        </div>
      </ha-card>

      <div class="section-header">${zi("panels.actions.cards.new_notification.options",this.hass.language)}</div>
      <ha-card>
        <div class="card-content">
          <settings-row .narrow=${this.narrow} .large=${!0} first>
            <span slot="heading">
              ${zi("panels.actions.cards.new_action.fields.name.heading",this.hass.language)}
            </span>
            <span slot="description">
              ${zi("panels.actions.cards.new_action.fields.name.description",this.hass.language)}
            </span>

            <ha-textfield
              label="${zi("panels.actions.cards.new_action.fields.name.heading",this.hass.language)}"
              .placeholder=${this._namePlaceholder()}
              .value=${this.config.name||""}
              @input=${this._setName}
              ?invalid=${this.errors.name}
            ></ha-textfield>
          </settings-row>

          ${(null===(e=this.item)||void 0===e?void 0:e.automation_id)?q`
                <settings-row .narrow=${this.narrow}>
                  <span slot="heading">
                    ${zi("panels.actions.cards.new_notification.fields.delete.heading",this.hass.language)}
                  </span>
                  <span slot="description">
                    ${zi("panels.actions.cards.new_notification.fields.delete.description",this.hass.language)}
                  </span>
                  <div>
                    <mwc-button class="warning" outlined @click=${this._deleteClick}>
                      <ha-icon icon="hass:trash-can-outline"></ha-icon>
                      ${this.hass.localize("ui.common.delete")}
                    </mwc-button>
                  </div>
                </settings-row>
              `:""}
        </div>
      </ha-card>

      <div class="actions">
        <mwc-button raised @click=${this._saveClick} style="width: 100%" class="save-button">
          <ha-icon icon="hass:content-save-outline"></ha-icon>
          ${this.hass.localize("ui.common.save")}
        </mwc-button>
      </div>
    `:q``}renderActions(){let e=this.config.actions.map(e=>e.entity_id),t=cn(e,this.hass);if(!t.length)return;return t.map(e=>q`
        <mwc-button
          class="${((...e)=>!!e.every(Yi)&&1==Vi(ln(e.filter(Yi))).length)(this._selectedAction(),e)?"active":""}"
          @click=${()=>this._setAction(e)}
        >
          ${((e,t)=>{let a=Ce(e);switch("script"==Se(e)&&(a="run"),a){case"turn_on":return t.localize("ui.card.media_player.turn_on");case"turn_off":return t.localize("ui.card.media_player.turn_off");case"lock":return t.localize("ui.card.lock.lock");case"unlock":return t.localize("ui.card.lock.unlock");case"run":return t.localize("ui.card.script.run");default:return a}})(e,this.hass)}
        </mwc-button>
      `)}_selectedAction(){let e=this.config.actions.map(e=>e.service);return e.every(Yi)?(e=Vi(ln(e.filter(Yi))),1==e.length?e[0]:null):null}_setEvent(e){e.stopPropagation();const t=e.detail.value;let a=this.config.triggers;Object.assign(a,{0:Object.assign(Object.assign({},a[0]),{event:t})}),this.config=Object.assign(Object.assign({},this.config),{triggers:a}),Object.keys(this.errors).includes("event")&&this._validateConfig()}_setArea(e){var t;e.stopPropagation();const a=e.detail.value;let i=this.config.triggers;Object.assign(i,{0:Object.assign(Object.assign({},i[0]),{area:a})});const s=rn(a,this.areas);(null===(t=i[0].modes)||void 0===t?void 0:t.length)&&this._setModes(new CustomEvent("value-changed",{detail:{value:i[0].modes.filter(e=>s.includes(e))}})),this.config=Object.assign(Object.assign({},this.config),{triggers:i}),Object.keys(this.errors).includes("area")&&this._validateConfig()}_setModes(e){e.stopPropagation();const t=e.detail.value,a=this.config.triggers;Object.assign(a,{0:Object.assign(Object.assign({},a[0]),{modes:t})}),this.config=Object.assign(Object.assign({},this.config),{triggers:a}),Object.keys(this.errors).includes("service")&&this._validateConfig()}_setEntity(e){e.stopPropagation();const t=e.detail.value;let a=this.config.actions,i=null;if(t.length>a.length&&this._selectedAction()&&(i=this._selectedAction()),a.length>t.length){let e=a.findIndex(e=>!t.includes(e.entity_id||""));e<0&&(e=a.length-1),a.splice(e,1)}t.length||Object.assign(a,{0:Hi(a[0],"entity_id")}),t.forEach((e,t)=>{let i=a.length>t?Object.assign({},a[t]):{};i=i.entity_id==e?Object.assign({},i):{entity_id:e},Object.assign(a,{[t]:i})}),this.config=Object.assign(Object.assign({},this.config),{actions:a}),i&&this._setAction(i),Object.keys(this.errors).includes("entity_id")&&this._validateConfig()}_setAction(e){let t=this.config.actions,a=this.config.actions.map(e=>e.entity_id);cn(a,this.hass).length&&(t.forEach((a,i)=>{let s=cn(a.entity_id,this.hass),n=(r=e,s.find(e=>e==r||"turn_on"==Ce(r)&&"turn_on"==Ce(e)||"turn_off"==Ce(r)&&"turn_off"==Ce(e)||"script"==Se(r)&&"script"==Se(e)));var r;Object.assign(t,{[i]:Object.assign({service:n},Hi(a,"service"))})}),this.config=Object.assign(Object.assign({},this.config),{actions:t}),Object.keys(this.errors).includes("service")&&this._validateConfig())}_setName(e){e.stopPropagation();const t=e.target.value;this.config=Object.assign(Object.assign({},this.config),{name:t})}_setYaml(e){let t=e.detail.value,a=[{}];var i;fn(t)&&(t=[t]),"object"==typeof(i=t)&&null!==i&&Array.isArray(i)&&(t.forEach((e,t)=>{let i={};fn(e)&&_n(e.service)&&(i=Object.assign(Object.assign({},i),{service:e.service})),fn(e)&&_n(e.entity_id)&&(i=Object.assign(Object.assign({},i),{entity_id:e.entity_id})),fn(e)&&fn(e.data)&&(i=Object.assign(Object.assign({},i),{data:e.data})),Object.assign(a,{[t]:i})}),this.config=Object.assign(Object.assign({},this.config),{actions:a}))}_validateConfig(){this.errors={};const e=this._parseAutomation(),t=e.triggers[0];t.event&&Object.values(qi).includes(t.event)||(this.errors=Object.assign(Object.assign({},this.errors),{event:!0})),Yi(t.area)&&nn(this.areas,this.alarmoConfig).includes(t.area)||(this.errors=Object.assign(Object.assign({},this.errors),{area:!0})),(t.modes||[]).every(e=>rn(t.area,this.areas).includes(e))||(this.errors=Object.assign(Object.assign({},this.errors),{modes:!0}));let a=e.actions.map(e=>e.entity_id);this.viewMode==kn.Yaml&&(a=a.filter(Yi)),e.actions.length&&a.every(e=>vn(e,this.hass))||(this.errors=Object.assign(Object.assign({},this.errors),{entity_id:!0}));const i=e.actions.map(e=>e.service).filter(Yi);if(!i.length||!i.every(e=>gn(e,this.hass))){this.errors=Object.assign(Object.assign({},this.errors),{service:!0}),!cn(a,this.hass).length&&i.length&&(this.viewMode=kn.Yaml)}return pn(e.name)||(this.errors=Object.assign(Object.assign({},this.errors),{name:!0})),!Object.values(this.errors).length}_validAction(){const e=this._parseAutomation(),t=e.actions.map(e=>e.service);let a=e.actions.map(e=>e.entity_id);return this.viewMode==kn.Yaml&&(a=a.filter(Yi)),t.length&&t.every(e=>gn(e,this.hass))&&a.every(e=>vn(e,this.hass))}_toggleYamlMode(){this.viewMode=this.viewMode==kn.UI?kn.Yaml:kn.UI,this.viewMode==kn.Yaml&&(this.config=Object.assign(Object.assign({},this.config),{actions:Object.assign(this.config.actions,{0:Object.assign(Object.assign({},this.config.actions[0]),{service:this.config.actions[0].service||"",data:Object.assign({},this.config.actions[0].data||{})})})}))}_namePlaceholder(){var e,t,a,i;if(!this._validAction)return"";const s=this.config.triggers[0].event,n=this.config.actions.map(e=>e.entity_id).filter(Yi),r=on(n,this.hass).map(e=>e.name).join(", "),o=Vi(this.config.actions.map(e=>e.service).filter(Yi).map(e=>Ce(e)));let d=void 0;return 1==o.length&&(null===(e=o[0])||void 0===e?void 0:e.includes("turn_on"))&&(d=this.hass.localize("state.default.on")),1==o.length&&(null===(t=o[0])||void 0===t?void 0:t.includes("turn_off"))&&(d=this.hass.localize("state.default.off")),1==o.length&&(null===(a=o[0])||void 0===a?void 0:a.includes("lock"))&&(d=this.hass.localize("component.lock.state._.locked")),1==o.length&&(null===(i=o[0])||void 0===i?void 0:i.includes("unlock"))&&(d=this.hass.localize("component.lock.state._.unlocked")),s&&r&&d?zi("panels.actions.cards.new_action.fields.name.placeholders."+s,this.hass.language,"entity",r,"state",d):""}_getEntities(){return Vi(this.config.actions.map(e=>e.entity_id).filter(Yi))||[]}_hasCustomEntities(){return this._getEntities().some(e=>!hn(this.hass).includes(e))}_parseAutomation(){let e=Object.assign({},this.config);return!pn(e.name)&&this._namePlaceholder()&&(e=Object.assign(Object.assign({},e),{name:this._namePlaceholder()})),e}_saveClick(e){if(!this._validateConfig())return;let t=this._parseAutomation();rn(t.triggers[0].area,this.areas).every(e=>{var a;return null===(a=t.triggers[0].modes)||void 0===a?void 0:a.includes(e)})&&(t=Object.assign(Object.assign({},t),{triggers:Object.assign(t.triggers,{0:Object.assign(Object.assign({},t.triggers[0]),{modes:[]})})})),Qe(this.hass,t).catch(t=>Zi(t,e)).then(()=>this._cancelClick())}_deleteClick(e){var t;(null===(t=this.item)||void 0===t?void 0:t.automation_id)&&We(this.hass,this.item.automation_id).catch(t=>Zi(t,e)).then(()=>this._cancelClick())}_testClick(e){this._parseAutomation().actions.forEach(t=>{const[a,i]=t.service.split(".");let s=Object.assign({},t.data);t.entity_id&&(s=Object.assign(Object.assign({},s),{entity_id:t.entity_id})),this.hass.callService(a,i,s).then().catch(t=>{Ki(e,t.message)})})}_cancelClick(){Le(0,as("actions"),!0)}static get styles(){return o`
      div.content {
        padding: 28px 20px 0;
        max-width: 1040px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
      }
      div.header {
        font-size: 24px;
        font-weight: 400;
        letter-spacing: -0.012em;
        line-height: 32px;
        opacity: var(--dark-primary-opacity);
      }
      div.section-header {
        font-size: 18px;
        font-weight: 400;
        letter-spacing: -0.012em;
        line-height: 32px;
        opacity: var(--dark-primary-opacity);
        margin: 20px 0px 5px 10px;
      }
      div.actions {
        padding: 20px 0px 30px 0px;
      }
      mwc-button ha-icon {
        margin-right: 6px;
        --mdc-icon-size: 20px;
      }
      .toggle-button {
        position: absolute;
        right: 20px;
        top: 20px;
      }
      h2 {
        margin-top: 10px;
        font-size: 24px;
        font-weight: 400;
        letter-spacing: -0.012em;
      }
      span.error-message {
        color: var(--error-color);
        font-size: 0.875rem;
        display: flex;
        margin-top: 10px;
      }
      mwc-button.warning {
        --mdc-theme-primary: var(--error-color);
      }
      mwc-button.save-button {
        --mdc-theme-primary: rgba(var(--rgb-primary-color), 0.8);
      }
      mwc-button.active {
        background: var(--primary-color);
        --mdc-theme-primary: var(--text-primary-color);
        border-radius: 4px;
      }
      mwc-button[disabled].active {
        background: var(--disabled-text-color);
        --mdc-button-disabled-ink-color: var(--text-primary-color);
      }
      div.heading {
        display: grid;
        grid-template-areas:
          'header icon'
          'description icon';
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr 48px;
        margin: 20px 0px 10px 10px;
      }
      div.heading .icon {
        grid-area: icon;
      }
      div.heading .header {
        grid-area: header;
      }
      div.heading .description {
        grid-area: description;
      }
    `}};t([de({attribute:!1})],An.prototype,"hass",void 0),t([de()],An.prototype,"narrow",void 0),t([de()],An.prototype,"config",void 0),t([de()],An.prototype,"item",void 0),t([de()],An.prototype,"areas",void 0),t([de()],An.prototype,"alarmoConfig",void 0),t([de()],An.prototype,"viewMode",void 0),t([de()],An.prototype,"errors",void 0),An=t([re("automation-editor-card")],An);let $n=class extends(et(ne)){constructor(){super(...arguments),this.areas={},this.getAreaForAutomation=e=>{if(!this.config)return;const t=nn(this.areas,this.config);let a=e.triggers[0].area;return Yi(a)&&t.includes(a)?a:void 0}}hassSubscribe(){return this._fetchData(),[this.hass.connection.subscribeMessage(()=>this._fetchData(),{type:"alarmo_config_updated"})]}async _fetchData(){if(!this.hass)return;const e=await He(this.hass);this.automations=Object.values(e),this.areas=await Xe(this.hass),this.config=await Ve(this.hass)}firstUpdated(){var e;this.path.filter&&(this.selectedArea=null===(e=this.path.filter)||void 0===e?void 0:e.area),(async()=>{await Ue()})()}render(){if(!this.hass||!this.automations||!this.config)return q``;if("new_notification"==this.path.subpage)return q`
        <notification-editor-card .hass=${this.hass} .narrow=${this.narrow}></notification-editor-card>
      `;if(this.path.params.edit_notification){const e=this.automations.find(e=>e.automation_id==this.path.params.edit_notification&&e.type==Pi.Notification);return q`
        <notification-editor-card .hass=${this.hass} .narrow=${this.narrow} .item=${e}></notification-editor-card>
      `}if("new_action"==this.path.subpage)return q`
        <automation-editor-card .hass=${this.hass} .narrow=${this.narrow}></automation-editor-card>
      `;if(this.path.params.edit_action){const e=this.automations.find(e=>e.automation_id==this.path.params.edit_action&&e.type==Pi.Action);return q`
        <automation-editor-card .hass=${this.hass} .narrow=${this.narrow} .item=${e}></automation-editor-card>
      `}{const e=()=>q`
        <paper-tooltip animation-delay="0">
          ${zi("panels.actions.cards.notifications.table.no_area_warning",this.hass.language)}
        </paper-tooltip>
      `,t={type:{width:"40px",renderer:t=>"no_area"!=t.area||this.config.master.enabled?t.type==Pi.Notification?q`
                  <ha-icon icon="hass:message-text-outline"></ha-icon>
                `:q`
                  <ha-icon icon="hass:flash"></ha-icon>
                `:q`
                  ${e()}
                  <ha-icon icon="mdi:alert" style="color: var(--error-color)"></ha-icon>
                `},name:{title:this.hass.localize("ui.components.area-picker.add_dialog.name"),renderer:t=>q`
            ${"no_area"!=t.area||this.config.master.enabled?"":e()}
            <span>${t.name}</span>
          `,width:"40%",grow:!0,text:!0},enabled:{title:zi("common.enabled",this.hass.language),width:"68px",align:"center",renderer:e=>q`
            <ha-switch
              ?checked=${e.enabled}
              @click=${t=>{t.stopPropagation(),this.toggleEnable(t,e.automation_id)}}
            ></ha-switch>
          `}},a=this.automations.filter(e=>e.type==Pi.Notification).map(e=>Object(Object.assign(Object.assign({},e),{id:e.automation_id,warning:!this.config.master.enabled&&!this.getAreaForAutomation(e),area:this.getAreaForAutomation(e)||"no_area"}))),i=this.automations.filter(e=>e.type==Pi.Action).map(e=>Object(Object.assign(Object.assign({},e),{id:e.automation_id,warning:!this.config.master.enabled&&!this.getAreaForAutomation(e),area:this.getAreaForAutomation(e)||"no_area"})));return q`
        <ha-card header="${zi("panels.actions.cards.notifications.title",this.hass.language)}">
          <div class="card-content">
            ${zi("panels.actions.cards.notifications.description",this.hass.language)}
          </div>

          <alarmo-table
            .hass=${this.hass}
            ?selectable=${!0}
            .columns=${t}
            .data=${a}
            .filters=${this.getTableFilterOptions()}
            @row-click=${e=>Le(0,as("actions",{params:{edit_notification:e.detail.id}}),!0)}
          >
            ${zi("panels.actions.cards.notifications.table.no_items",this.hass.language)}
          </alarmo-table>

          <div class="card-actions">
            <mwc-button @click=${this.addNotificationClick}>
              ${zi("panels.actions.cards.notifications.actions.new_notification",this.hass.language)}
            </mwc-button>
          </div>
        </ha-card>

        <ha-card header="${zi("panels.actions.title",this.hass.language)}">
          <div class="card-content">${zi("panels.actions.cards.actions.description",this.hass.language)}</div>

          <alarmo-table
            .hass=${this.hass}
            ?selectable=${!0}
            .columns=${t}
            .data=${i}
            .filters=${this.getTableFilterOptions()}
            @row-click=${e=>Le(0,as("actions",{params:{edit_action:e.detail.id}}),!0)}
          >
            ${zi("panels.actions.cards.actions.table.no_items",this.hass.language)}
          </alarmo-table>

          <div class="card-actions">
            <mwc-button @click=${this.addActionClick}>
              ${zi("panels.actions.cards.actions.actions.new_action",this.hass.language)}
            </mwc-button>
          </div>
        </ha-card>
      `}}toggleEnable(e,t){Qe(this.hass,{automation_id:t,enabled:!e.target.checked}).catch(t=>Zi(t,e)).then()}getTableFilterOptions(){if(!this.hass)return;let e=Object.values(this.areas).map(e=>Object({value:e.area_id,name:e.name,badge:t=>t.filter(t=>t.area==e.area_id).length})).sort(Xi);Object.values(this.automations||[]).filter(e=>!this.getAreaForAutomation(e)).length&&(e=[{value:"no_area",name:this.config.master.enabled?this.config.master.name:this.hass.localize("state_attributes.climate.preset_mode.none"),badge:e=>e.filter(e=>"no_area"==e.area).length},...e]);return{area:{name:zi("components.table.filter.item",this.hass.language,"name",zi("panels.actions.cards.new_action.fields.area.heading",this.hass.language)),items:e,value:this.selectedArea?[this.selectedArea]:[]}}}addNotificationClick(){Le(0,as("actions","new_notification"),!0)}addActionClick(){Le(0,as("actions","new_action"),!0)}};$n.styles=Ji,t([de()],$n.prototype,"hass",void 0),t([de()],$n.prototype,"narrow",void 0),t([de()],$n.prototype,"path",void 0),t([de()],$n.prototype,"alarmEntity",void 0),t([de()],$n.prototype,"automations",void 0),t([de()],$n.prototype,"areas",void 0),t([de()],$n.prototype,"config",void 0),t([de()],$n.prototype,"selectedArea",void 0),$n=t([re("alarm-view-actions")],$n),e.MyAlarmPanel=class extends ne{async firstUpdated(){window.addEventListener("location-changed",()=>{this.requestUpdate()}),await Ue(),this.userConfig=await Fe(this.hass),this.requestUpdate()}render(){if(!customElements.get("ha-app-layout")||!this.userConfig)return q`
        loading...
      `;const e=ts();return q`
      <ha-app-layout>
        <app-header fixed slot="header">
          <app-toolbar>
            <ha-menu-button .hass=${this.hass} .narrow=${this.narrow}></ha-menu-button>
            <div main-title>
              ${zi("title",this.hass.language)}
            </div>
            <div class="version">
              v${"1.9.7"}
            </div>
          </app-toolbar>
          <ha-tabs
            scrollable
            attr-for-selected="page-name"
            .selected=${e.page}
            @iron-activate=${this.handlePageSelected}
          >
            <paper-tab page-name="general">
              ${zi("panels.general.title",this.hass.language)}
            </paper-tab>
            <paper-tab page-name="sensors">
              ${zi("panels.sensors.title",this.hass.language)}
            </paper-tab>
            <paper-tab page-name="codes">
              ${zi("panels.codes.title",this.hass.language)}
            </paper-tab>
            <paper-tab page-name="actions">
              ${zi("panels.actions.title",this.hass.language)}
            </paper-tab>
          </ha-tabs>
        </app-header>
      </ha-app-layout>
      <div class="view">
        ${this.getView(e)}
      </div>
    `}getView(e){switch(e.page){case"general":return q`
          <alarm-view-general .hass=${this.hass} .narrow=${this.narrow} .path=${e}></alarm-view-general>
        `;case"sensors":return q`
          <alarm-view-sensors .hass=${this.hass} .narrow=${this.narrow} .path=${e}></alarm-view-sensors>
        `;case"codes":return q`
          <alarm-view-codes .hass=${this.hass} .narrow=${this.narrow} .path=${e}></alarm-view-codes>
        `;case"actions":return q`
          <alarm-view-actions .hass=${this.hass} .narrow=${this.narrow} .path=${e}></alarm-view-actions>
        `;default:return q`
          <ha-card header="Page not found">
            <div class="card-content">
              The page you are trying to reach cannot be found. Please select a page from the menu above to continue.
            </div>
          </ha-card>
        `}}handlePageSelected(e){const t=e.detail.item.getAttribute("page-name");t!==ts()?(Le(0,as(t)),this.requestUpdate()):scrollTo(0,0)}static get styles(){return o`
      ${Ji} :host {
        color: var(--primary-text-color);
        --paper-card-header-color: var(--primary-text-color);
      }

      app-header,
      app-toolbar {
        background-color: var(--app-header-background-color);
        font-weight: 400;
        color: var(--app-header-text-color, white);
      }
      app-toolbar {
        height: var(--header-height);
      }

      ha-app-layout {
        display: block;
        z-index: 2;
      }

      app-toolbar [main-title] {
        margin-left: 20px;
      }

      ha-tabs {
        margin-left: max(env(safe-area-inset-left), 24px);
        margin-right: max(env(safe-area-inset-right), 24px);
        --paper-tabs-selection-bar-color: var(--app-header-selection-bar-color, var(--app-header-text-color, #fff));
        text-transform: uppercase;
      }

      .view {
        height: calc(100vh - 112px);
        display: flex;
        justify-content: center;
      }

      .view > * {
        width: 600px;
        max-width: 600px;
      }

      .view > *:last-child {
        margin-bottom: 20px;
      }

      .version {
        font-size: 14px;
        font-weight: 500;
        color: rgba(var(--rgb-text-primary-color), 0.9);
      }
    `}},t([de()],e.MyAlarmPanel.prototype,"hass",void 0),t([de({type:Boolean,reflect:!0})],e.MyAlarmPanel.prototype,"narrow",void 0),t([de()],e.MyAlarmPanel.prototype,"userConfig",void 0),e.MyAlarmPanel=t([re("alarm-panel")],e.MyAlarmPanel)}({});
