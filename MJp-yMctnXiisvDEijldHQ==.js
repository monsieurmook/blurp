;var page_load_bundle_evaluation_failure_checker=true;/*! For license information please see load_failed_bundle_application_js.js.LICENSE.txt */
(()=>{var e={75:(e,t,n)=>{var r,o,i
e=n.nmd(e),"undefined"!=typeof process&&"true"!==process.env.OVERRIDE_PREVENTCOMMONJS&&"string"!=typeof process.versions.electron&&(e=void 0,t=void 0),o=[n(181)],r=function(e){var t=Array.prototype.slice,n=Object.prototype.hasOwnProperty,r=s
function o(t,n){return e.isUndefined(n)?""+n:e.isNumber(n)&&!isFinite(n)||e.isFunction(n)||e.isRegExp(n)?n.toString():n}function i(t,n){return e.isString(t)?t.length<n?t:t.slice(0,n):t}function a(e,t,n,o,i){throw new r.AssertionError({message:n,actual:e,expected:t,operator:o,stackStartFunction:i})}function s(e,t){e||a(e,!0,t,"==",r.ok)}function l(n,r){if(n===r)return!0
if(e.isBuffer(n)&&e.isBuffer(r)){if(n.length!=r.length)return!1
for(var o=0;o<n.length;o++)if(n[o]!==r[o])return!1
return!0}return e.isDate(n)&&e.isDate(r)?n.getTime()===r.getTime():e.isRegExp(n)&&e.isRegExp(r)?n.source===r.source&&n.global===r.global&&n.multiline===r.multiline&&n.lastIndex===r.lastIndex&&n.ignoreCase===r.ignoreCase:e.isObject(n)||e.isObject(r)?function(n,r){if(e.isNullOrUndefined(n)||e.isNullOrUndefined(r))return!1
if(n.prototype!==r.prototype)return!1
if(e.isPrimitive(n)||e.isPrimitive(r))return n===r
var o=u(n),i=u(r)
if(o&&!i||!o&&i)return!1
if(o)return n=t.call(n),r=t.call(r),l(n,r)
var a,s,c=f(n),d=f(r)
if(c.length!=d.length)return!1
for(c.sort(),d.sort(),s=c.length-1;s>=0;s--)if(c[s]!=d[s])return!1
for(s=c.length-1;s>=0;s--)if(a=c[s],!l(n[a],r[a]))return!1
return!0}(n,r):n==r}function u(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function c(e,t){return!(!e||!t)&&("[object RegExp]"==Object.prototype.toString.call(t)?t.test(e):e instanceof t||!0===t.call({},e))}function d(t,n,r,o){var i
e.isString(r)&&(o=r,r=null)
try{n()}catch(e){i=e}if(o=(r&&r.name?" ("+r.name+").":".")+(o?" "+o:"."),t&&!i&&a(i,r,"Missing expected exception"+o),!t&&c(i,r)&&a(i,r,"Got unwanted exception"+o),t&&i&&r&&!c(i,r)||!t&&i)throw i}r.AssertionError=function(e){this.name="AssertionError",this.actual=e.actual,this.expected=e.expected,this.operator=e.operator,e.message?(this.message=e.message,this.generatedMessage=!1):(this.message=function(e){return i(JSON.stringify(e.actual,o),128)+" "+e.operator+" "+i(JSON.stringify(e.expected,o),128)}(this),this.generatedMessage=!0)
var t=e.stackStartFunction||a
if(Error.captureStackTrace)Error.captureStackTrace(this,t)
else{var n=new Error
if(n.stack){var r=n.stack,s=t.name,l=r.indexOf("\n"+s)
if(l>=0){var u=r.indexOf("\n",l+1)
r=r.substring(u+1)}this.stack=r}}},e.inherits(r.AssertionError,Error),r.fail=a,r.ok=s,r.equal=function(e,t,n){e!=t&&a(e,t,n,"==",r.equal)},r.notEqual=function(e,t,n){e==t&&a(e,t,n,"!=",r.notEqual)},r.deepEqual=function(e,t,n){l(e,t)||a(e,t,n,"deepEqual",r.deepEqual)},r.notDeepEqual=function(e,t,n){l(e,t)&&a(e,t,n,"notDeepEqual",r.notDeepEqual)},r.strictEqual=function(e,t,n){e!==t&&a(e,t,n,"===",r.strictEqual)},r.notStrictEqual=function(e,t,n){e===t&&a(e,t,n,"!==",r.notStrictEqual)},r.throws=function(e,n,r){d.apply(this,[!0].concat(t.call(arguments)))},r.doesNotThrow=function(e,n){d.apply(this,[!1].concat(t.call(arguments)))},r.ifError=function(e){if(e)throw e}
var f=Object.keys||function(e){var t=[]
for(var r in e)n.call(e,r)&&t.push(r)
return t}
return r},i="function"==typeof r?r.apply(t,o):r,void 0===i||(e.exports=i)},873:function(e,t,n){e=n.nmd(e),"undefined"!=typeof process&&"true"!==process.env.OVERRIDE_PREVENTCOMMONJS&&"string"!=typeof process.versions.electron&&(e=void 0,t=void 0),global.REACT_DEBUG=!0,function(){"use strict"
!function(e,t){function n(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])
return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(e,t){o(e,t),o(e+"Capture",t)}function o(e,t){for(Mo[e]=t,e=0;e<t.length;e++)Lo.add(t[e])}function i(e){return!!Uo.call(qo,e)||!Uo.call(Bo,e)&&(Wo.test(e)?qo[e]=!0:(Bo[e]=!0,!1))}function a(e,t,n,r){if(null!==n&&0===n.type)return!1
switch(typeof t){case"function":case"symbol":return!0
case"boolean":return!r&&(null!==n?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),"data-"!==e&&"aria-"!==e))
default:return!1}}function s(e,t,n,r){if(null==t||a(e,t,n,r))return!0
if(r)return!1
if(null!==n)switch(n.type){case 3:return!t
case 4:return!1===t
case 5:return isNaN(t)
case 6:return isNaN(t)||1>t}return!1}function l(e,t,n,r,o,i,a){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}function u(e,t,n,r){var o=Ho.hasOwnProperty(t)?Ho[t]:null,a=null!==o?0===o.type:!r&&2<t.length&&("o"===t[0]||"O"===t[0])&&("n"===t[1]||"N"===t[1])
a||(s(t,n,o,r)&&(n=null),r||null===o?i(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=null===n?3!==o.type&&"":n:(t=o.attributeName,r=o.attributeNamespace,null===n?e.removeAttribute(t):(o=o.type,n=3===o||4===o&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}function c(e){return null===e||"object"!=typeof e?null:(e=gi&&e[gi]||e["@@iterator"],"function"==typeof e?e:null)}function d(e,t,n){if(void 0===pi)try{throw Error()}catch(e){pi=(t=e.stack.trim().match(/\n( *(at )?)/))&&t[1]||""}return"\n"+pi+e}function f(e,t){if(!e||yi)return""
yi=!0
var n=Error.prepareStackTrace
Error.prepareStackTrace=void 0
try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var r=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){r=e}e.call(t.prototype)}else{try{throw Error()}catch(e){r=e}e()}}catch(e){if(e&&r&&"string"==typeof e.stack){for(var o=e.stack.split("\n"),i=r.stack.split("\n"),a=o.length-1,s=i.length-1;1<=a&&0<=s&&o[a]!==i[s];)s--
for(;1<=a&&0<=s;a--,s--)if(o[a]!==i[s]){if(1!==a||1!==s)do{if(a--,s--,0>s||o[a]!==i[s])return"\n"+o[a].replace(" at new "," at ")}while(1<=a&&0<=s)
break}}}finally{yi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?d(e):""}function p(e){switch(e.tag){case 5:return d(e.type)
case 16:return d("Lazy")
case 13:return d("Suspense")
case 19:return d("SuspenseList")
case 0:case 2:case 15:return e=f(e.type,!1),e
case 11:return e=f(e.type.render,!1),e
case 22:return e=f(e.type._render,!1),e
case 1:return e=f(e.type,!0),e
default:return""}}function h(e){if(null==e)return null
if("function"==typeof e)return e.displayName||e.name||null
if("string"==typeof e)return e
switch(e){case Jo:return"Fragment"
case Yo:return"Portal"
case Xo:return"Profiler"
case Zo:return"StrictMode"
case ri:return"Suspense"
case oi:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case ti:return(e.displayName||"Context")+".Consumer"
case ei:return(e._context.displayName||"Context")+".Provider"
case ni:var t=e.render
return t=t.displayName||t.name||"",e.displayName||(""!==t?"ForwardRef("+t+")":"ForwardRef")
case ii:return h(e.type)
case si:return h(e._render)
case ai:t=e._payload,e=e._init
try{return h(e(t))}catch(e){}}return null}function v(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e
default:return""}}function g(e){var t=e.type
return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function y(e){var t=g(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t]
if(!e.hasOwnProperty(t)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var o=n.get,i=n.set
return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(e){r=""+e,i.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function m(e){e._valueTracker||(e._valueTracker=y(e))}function _(e){if(!e)return!1
var t=e._valueTracker
if(!t)return!0
var n=t.getValue(),r=""
return e&&(r=g(e)?e.checked?"true":"false":e.value),e=r,e!==n&&(t.setValue(e),!0)}function b(e){if(e=e||("undefined"!=typeof document?document:void 0),void 0===e)return null
try{return e.activeElement||e.body}catch(t){return e.body}}function w(e,t){var n=t.checked
return Go({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function k(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked
n=v(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function S(e,t){t=t.checked,null!=t&&u(e,"checked",t,!1)}function E(e,t){S(e,t)
var n=v(t.value),r=t.type
if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n)
else if("submit"===r||"reset"===r)return void e.removeAttribute("value")
t.hasOwnProperty("value")?j(e,t.type,n):t.hasOwnProperty("defaultValue")&&j(e,t.type,v(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function x(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type
if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return
t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,""!==n&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function j(e,t,n){"number"===t&&b(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}function T(e){var n=""
return t.Children.forEach(e,(function(e){null!=e&&(n+=e)})),n}function A(e,t){return e=Go({children:void 0},t),(t=T(t.children))&&(e.children=t),e}function z(e,t,n,r){if(e=e.options,t){t={}
for(var o=0;o<n.length;o++)t["$"+n[o]]=!0
for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+v(n),t=null,o=0;o<e.length;o++){if(e[o].value===n)return e[o].selected=!0,void(r&&(e[o].defaultSelected=!0))
null!==t||e[o].disabled||(t=e[o])}null!==t&&(t.selected=!0)}}function I(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(n(91))
return Go({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function P(e,t){var r=t.value
if(null==r){if(r=t.children,t=t.defaultValue,null!=r){if(null!=t)throw Error(n(92))
if(Array.isArray(r)){if(!(1>=r.length))throw Error(n(93))
r=r[0]}t=r}null==t&&(t=""),r=t}e._wrapperState={initialValue:v(r)}}function C(e,t){var n=v(t.value),r=v(t.defaultValue)
null!=n&&(n=""+n,n!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function O(e,t){t=e.textContent,t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function N(e){switch(e){case"svg":return"http://www.w3.org/2000/svg"
case"math":return"http://www.w3.org/1998/Math/MathML"
default:return"http://www.w3.org/1999/xhtml"}}function D(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?N(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}function R(e,t,n){return null==t||"boolean"==typeof t||""===t?"":n||"number"!=typeof t||0===t||bi.hasOwnProperty(e)&&bi[e]?(""+t).trim():t+"px"}function L(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),o=R(n,t[n],r)
"float"===n&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}function M(e,t){if(t){if(ki[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(n(137,e))
if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(n(60))
if("object"!=typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(n(61))}if(null!=t.style&&"object"!=typeof t.style)throw Error(n(62))}}function F(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is
switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1
default:return!0}}function W(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}function U(e){if(e=Et(e)){if("function"!=typeof Si)throw Error(n(280))
var t=e.stateNode
t&&(t=jt(t),Si(e.stateNode,e.type,t))}}function B(e){Ei?xi?xi.push(e):xi=[e]:Ei=e}function q(){if(Ei){var e=Ei,t=xi
if(xi=Ei=null,U(e),t)for(e=0;e<t.length;e++)U(t[e])}}function H(){null===Ei&&null===xi||(Ai(),q())}function V(e,t,n){if(Pi)return e(t,n)
Pi=!0
try{return zi(e,t,n)}finally{Pi=!1,H()}}function $(e,t){var r=e.stateNode
if(null===r)return null
var o=jt(r)
if(null===o)return null
r=o[t]
e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!("button"===e||"input"===e||"select"===e||"textarea"===e)),e=!o
break e
default:e=!1}if(e)return null
if(r&&"function"!=typeof r)throw Error(n(231,t,typeof r))
return r}function G(e,t,n,r,o,i,a,s,l){Ni=!1,Di=null,window.invokeGuardedCallbackImpl$1.apply(Mi,arguments)}function K(e,t,r,o,i,a,s,l,u){if(G.apply(this,arguments),Ni){if(!Ni)throw Error(n(198))
var c=Di
Ni=!1,Di=null,Ri||(Ri=!0,Li=c)}}function Q(e){var t=e,n=e
if(e.alternate)for(;t.return;)t=t.return
else{e=t
do{t=e,0!=(1026&t.flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function Y(e){if(13===e.tag){var t=e.memoizedState
if(null===t&&(e=e.alternate,null!==e&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function J(e){if(Q(e)!==e)throw Error(n(188))}function Z(e){var t=e.alternate
if(!t){if(t=Q(e),null===t)throw Error(n(188))
return t!==e?null:e}for(var r=e,o=t;;){var i=r.return
if(null===i)break
var a=i.alternate
if(null===a){if(o=i.return,null!==o){r=o
continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===r)return J(i),e
if(a===o)return J(i),t
a=a.sibling}throw Error(n(188))}if(r.return!==o.return)r=i,o=a
else{for(var s=!1,l=i.child;l;){if(l===r){s=!0,r=i,o=a
break}if(l===o){s=!0,o=i,r=a
break}l=l.sibling}if(!s){for(l=a.child;l;){if(l===r){s=!0,r=a,o=i
break}if(l===o){s=!0,o=a,r=i
break}l=l.sibling}if(!s)throw Error(n(189))}}if(r.alternate!==o)throw Error(n(190))}if(3!==r.tag)throw Error(n(188))
return r.stateNode.current===r?e:t}function X(e){if(e=Z(e),!e)return null
for(var t=e;;){if(5===t.tag||6===t.tag)return t
if(t.child)t.child.return=t,t=t.child
else{if(t===e)break
for(;!t.sibling;){if(!t.return||t.return===e)return null
t=t.return}t.sibling.return=t.return,t=t.sibling}}return null}function ee(e,t){for(var n=e.alternate;null!==t;){if(t===e||t===n)return!0
t=t.return}return!1}function te(e,t,n,r,o){return{blockedOn:e,domEventName:t,eventSystemFlags:16|n,nativeEvent:o,targetContainers:[r]}}function ne(e,t){switch(e){case"focusin":case"focusout":ea=null
break
case"dragenter":case"dragleave":ta=null
break
case"mouseover":case"mouseout":na=null
break
case"pointerover":case"pointerout":ra.delete(t.pointerId)
break
case"gotpointercapture":case"lostpointercapture":oa.delete(t.pointerId)}}function re(e,t,n,r,o,i){return null===e||e.nativeEvent!==i?(e=te(t,n,r,o,i),null!==t&&(t=Et(t),null!==t&&Nu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==o&&-1===t.indexOf(o)&&t.push(o),e)}function oe(e,t,n,r,o){switch(t){case"focusin":return ea=re(ea,e,t,n,r,o),!0
case"dragenter":return ta=re(ta,e,t,n,r,o),!0
case"mouseover":return na=re(na,e,t,n,r,o),!0
case"pointerover":var i=o.pointerId
return ra.set(i,re(ra.get(i)||null,e,t,n,r,o)),!0
case"gotpointercapture":return i=o.pointerId,oa.set(i,re(oa.get(i)||null,e,t,n,r,o)),!0}return!1}function ie(e){var t=St(e.target)
if(null!==t){var n=Q(t)
if(null!==n)if(t=n.tag,13===t){if(t=Y(n),null!==t)return e.blockedOn=t,void Ru(e.lanePriority,(function(){Vi(e.priority,(function(){Du(n)}))}))}else if(3===t&&n.stateNode.hydrate)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function ae(e){if(null!==e.blockedOn)return!1
for(var t=e.targetContainers;0<t.length;){var n=Te(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent)
if(null!==n)return t=Et(n),null!==t&&Nu(t),e.blockedOn=n,!1
t.shift()}return!0}function se(e,t,n){ae(e)&&n.delete(t)}function le(){for(Zi=!1;0<Xi.length;){var e=Xi[0]
if(null!==e.blockedOn){e=Et(e.blockedOn),null!==e&&Ou(e)
break}for(var t=e.targetContainers;0<t.length;){var n=Te(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent)
if(null!==n){e.blockedOn=n
break}t.shift()}null===e.blockedOn&&Xi.shift()}null!==ea&&ae(ea)&&(ea=null),null!==ta&&ae(ta)&&(ta=null),null!==na&&ae(na)&&(na=null),ra.forEach(se),oa.forEach(se)}function ue(e,t){e.blockedOn===t&&(e.blockedOn=null,Zi||(Zi=!0,Bi(Qi,le)))}function ce(e){if(0<Xi.length){ue(Xi[0],e)
for(var t=1;t<Xi.length;t++){var n=Xi[t]
n.blockedOn===e&&(n.blockedOn=null)}}for(null!==ea&&ue(ea,e),null!==ta&&ue(ta,e),null!==na&&ue(na,e),t=function(t){return ue(t,e)},ra.forEach(t),oa.forEach(t),t=0;t<ia.length;t++)n=ia[t],n.blockedOn===e&&(n.blockedOn=null)
for(;0<ia.length&&(t=ia[0],null===t.blockedOn);)ie(t),null===t.blockedOn&&ia.shift()}function de(e,t){var n={}
return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}function fe(e){if(la[e])return la[e]
if(!sa[e])return e
var t,n=sa[e]
for(t in n)if(n.hasOwnProperty(t)&&t in ua)return la[e]=n[t]
return e}function pe(e,t){for(var n=0;n<e.length;n+=2){var o=e[n],i=e[n+1]
i="on"+(i[0].toUpperCase()+i.slice(1)),va.set(o,t),ha.set(o,i),r(i,[o])}}function he(e){if(0!=(1&e))return ba=15,1
if(0!=(2&e))return ba=14,2
if(0!=(4&e))return ba=13,4
var t=24&e
return 0!==t?(ba=12,t):0!=(32&e)?(ba=11,32):(t=192&e,0!==t?(ba=10,t):0!=(256&e)?(ba=9,256):(t=3584&e,0!==t?(ba=8,t):0!=(4096&e)?(ba=7,4096):(t=4186112&e,0!==t?(ba=6,t):(t=62914560&e,0!==t?(ba=5,t):67108864&e?(ba=4,67108864):0!=(134217728&e)?(ba=3,134217728):(t=805306368&e,0!==t?(ba=2,t):0!=(1073741824&e)?(ba=1,1073741824):(ba=8,e))))))}function ve(e){switch(e){case 99:return 15
case 98:return 10
case 97:case 96:return 8
case 95:return 2
default:return 0}}function ge(e){switch(e){case 15:case 14:return 99
case 13:case 12:case 11:case 10:return 98
case 9:case 8:case 7:case 6:case 4:case 5:return 97
case 3:case 2:case 1:return 95
case 0:return 90
default:throw Error(n(358,e))}}function ye(e,t){var n=e.pendingLanes
if(0===n)return ba=0
var r=0,o=0,i=e.expiredLanes,a=e.suspendedLanes,s=e.pingedLanes
if(0!==i)r=i,o=ba=15
else if(i=134217727&n,0!==i){var l=i&~a
0!==l?(r=he(l),o=ba):(s&=i,0!==s&&(r=he(s),o=ba))}else i=n&~a,0!==i?(r=he(i),o=ba):0!==s&&(r=he(s),o=ba)
if(0===r)return 0
if(r=31-wa(r),r=n&((0>r?0:1<<r)<<1)-1,0!==t&&t!==r&&0==(t&a)){if(he(t),o<=ba)return t
ba=o}if(t=e.entangledLanes,0!==t)for(e=e.entanglements,t&=r;0<t;)n=31-wa(t),o=1<<n,r|=e[n],t&=~o
return r}function me(e){return e=-1073741825&e.pendingLanes,0!==e?e:1073741824&e?1073741824:0}function _e(e,t){switch(e){case 15:return 1
case 14:return 2
case 12:return e=be(24&~t),0===e?_e(10,t):e
case 10:return e=be(192&~t),0===e?_e(8,t):e
case 8:return e=be(3584&~t),0===e&&(e=be(4186112&~t),0===e&&(e=512)),e
case 2:return t=be(805306368&~t),0===t&&(t=268435456),t}throw Error(n(358,e))}function be(e){return e&-e}function we(e){for(var t=[],n=0;31>n;n++)t.push(e)
return t}function ke(e,t,n){e.pendingLanes|=t
var r=t-1
e.suspendedLanes&=r,e.pingedLanes&=r,e=e.eventTimes,t=31-wa(t),e[t]=n}function Se(e){return 0===e?32:31-(ka(e)/Sa|0)|0}function Ee(e,t,n,r){Ii||Ai()
var o=je,i=Ii
Ii=!0
try{Ti(o,e,t,n,r)}finally{(Ii=i)||H()}}function xe(e,t,n,r){xa(Ea,je.bind(null,e,t,n,r))}function je(e,t,n,r){var o
if(ja)if((o=0==(4&t))&&0<Xi.length&&-1<aa.indexOf(e))e=te(null,e,t,n,r),Xi.push(e)
else{var i=Te(e,t,n,r)
if(null===i)o&&ne(e,r)
else{if(o){if(-1<aa.indexOf(e))return e=te(i,e,t,n,r),void Xi.push(e)
if(oe(i,e,t,n,r))return
ne(e,r)}dt(e,t,r,null,n)}}}function Te(e,t,n,r){var o=W(r)
if(o=St(o),null!==o){var i=Q(o)
if(null===i)o=null
else{var a=i.tag
if(13===a){if(o=Y(i),null!==o)return o
o=null}else if(3===a){if(i.stateNode.hydrate)return 3===i.tag?i.stateNode.containerInfo:null
o=null}else i!==o&&(o=null)}}return dt(e,t,r,o,n),null}function Ae(){if(za)return za
var e,t,n=Aa,r=n.length,o="value"in Ta?Ta.value:Ta.textContent,i=o.length
for(e=0;e<r&&n[e]===o[e];e++);var a=r-e
for(t=1;t<=a&&n[r-t]===o[i-t];t++);return za=o.slice(e,1<t?1-t:void 0)}function ze(e){var t=e.keyCode
return"charCode"in e?(e=e.charCode,0===e&&13===t&&(e=13)):e=t,10===e&&(e=13),32<=e||13===e?e:0}function Ie(){return!0}function Pe(){return!1}function Ce(e){function t(t,n,r,o,i){for(var a in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=o,this.target=i,this.currentTarget=null,e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(o):o[a])
return this.isDefaultPrevented=(null!=o.defaultPrevented?o.defaultPrevented:!1===o.returnValue)?Ie:Pe,this.isPropagationStopped=Pe,this}return Go(t.prototype,{preventDefault:function(){this.defaultPrevented=!0
var e=this.nativeEvent
e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=Ie)},stopPropagation:function(){var e=this.nativeEvent
e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=Ie)},persist:function(){},isPersistent:Ie}),t}function Oe(e){var t=this.nativeEvent
return t.getModifierState?t.getModifierState(e):!!(e=Qa[e])&&!!t[e]}function Ne(e){return Oe}function De(e,t){switch(e){case"keyup":return-1!==as.indexOf(t.keyCode)
case"keydown":return 229!==t.keyCode
case"keypress":case"mousedown":case"focusout":return!0
default:return!1}}function Re(e){return e=e.detail,"object"==typeof e&&"data"in e?e.data:null}function Le(e,t){switch(e){case"compositionend":return Re(t)
case"keypress":return 32!==t.which?null:(fs=!0,ds)
case"textInput":return e=t.data,e===ds&&fs?null:e
default:return null}}function Me(e,t){if(ps)return"compositionend"===e||!ss&&De(e,t)?(e=Ae(),za=Aa=Ta=null,ps=!1,e):null
switch(e){case"paste":return null
case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char
if(t.which)return String.fromCharCode(t.which)}return null
case"compositionend":return cs&&"ko"!==t.locale?null:t.data
default:return null}}function Fe(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase()
return"input"===t?!!hs[e.type]:"textarea"===t}function We(e){if(!Fo)return!1
e="on"+e
var t=e in document
return t||(t=document.createElement("div"),t.setAttribute(e,"return;"),t="function"==typeof t[e]),t}function Ue(e,t,n,r){B(r),t=pt(t,"onChange"),0<t.length&&(n=new Pa("onChange","change",null,n,r),e.push({event:n,listeners:t}))}function Be(e){at(e,0)}function qe(e){var t=xt(e)
if(_(t))return e}function He(e,t){if("change"===e)return t}function Ve(){vs&&(vs.detachEvent("onpropertychange",$e),gs=vs=null)}function $e(e){if("value"===e.propertyName&&qe(gs)){var t=[]
if(Ue(t,gs,e,W(e)),e=Be,Ii)e(t)
else{Ii=!0
try{ji(e,t)}finally{Ii=!1,H()}}}}function Ge(e,t,n){"focusin"===e?(Ve(),vs=t,gs=n,vs.attachEvent("onpropertychange",$e)):"focusout"===e&&Ve()}function Ke(e,t){if("selectionchange"===e||"keyup"===e||"keydown"===e)return qe(gs)}function Qe(e,t){if("click"===e)return qe(t)}function Ye(e,t){if("input"===e||"change"===e)return qe(t)}function Je(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t}function Ze(e,t){if(ms(e,t))return!0
if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1
var n=Object.keys(e),r=Object.keys(t)
if(n.length!==r.length)return!1
for(r=0;r<n.length;r++)if(!_s.call(t,n[r])||!ms(e[n[r]],t[n[r]]))return!1
return!0}function Xe(e){for(;e&&e.firstChild;)e=e.firstChild
return e}function et(e,t){var n,r=Xe(e)
for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e}
e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling
break e}r=r.parentNode}r=void 0}r=Xe(r)}}function tt(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?tt(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function nt(){for(var e=window,t=b();t instanceof e.HTMLIFrameElement;){try{var n="string"==typeof t.contentWindow.location.href}catch(e){n=!1}if(!n)break
e=t.contentWindow,t=b(e.document)}return t}function rt(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase()
return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function ot(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument
Es||null==ws||ws!==b(r)||(r=ws,"selectionStart"in r&&rt(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ss&&Ze(Ss,r)||(Ss=r,r=pt(ks,"onSelect"),0<r.length&&(t=new Pa("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ws)))}function it(e,t,n){var r=e.type||"unknown-event"
e.currentTarget=n,K(r,t,void 0,e),e.currentTarget=null}function at(e,t){t=0!=(4&t)
for(var n=0;n<e.length;n++){var r=e[n],o=r.event
r=r.listeners
e:{var i=void 0
if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,u=s.currentTarget
if(s=s.listener,l!==i&&o.isPropagationStopped())break e
it(o,s,u),i=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,u=s.currentTarget,s=s.listener,l!==i&&o.isPropagationStopped())break e
it(o,s,u),i=l}}}if(Ri)throw e=Li,Ri=!1,Li=null,e}function st(e,t){var n=Tt(t),r=e+"__bubble"
n.has(r)||(ct(t,e,2,!1),n.add(r))}function lt(e){e[Ts]||(e[Ts]=!0,Lo.forEach((function(t){js.has(t)||ut(t,!1,e,null),ut(t,!0,e,null)})))}function ut(e,t,n,r){var o=4<arguments.length&&void 0!==arguments[4]?arguments[4]:0,i=n
if("selectionchange"===e&&9!==n.nodeType&&(i=n.ownerDocument),null!==r&&!t&&js.has(e)){if("scroll"!==e)return
o|=2,i=r}var a=Tt(i),s=e+"__"+(t?"capture":"bubble")
a.has(s)||(t&&(o|=4),ct(i,e,o,t),a.add(s))}function ct(e,t,n,r,o){switch(o=va.get(t),void 0===o?2:o){case 0:o=Ee
break
case 1:o=xe
break
default:o=je}n=o.bind(null,t,n,e),o=void 0,!Ci||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(o=!0),r?void 0!==o?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):void 0!==o?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function dt(e,t,n,r,o){var i=r
if(0==(1&t)&&0==(2&t)&&null!==r)e:for(;;){if(null===r)return
var a=r.tag
if(3===a||4===a){var s=r.stateNode.containerInfo
if(s===o||8===s.nodeType&&s.parentNode===o)break
if(4===a)for(a=r.return;null!==a;){var l=a.tag
if((3===l||4===l)&&(l=a.stateNode.containerInfo,l===o||8===l.nodeType&&l.parentNode===o))return
a=a.return}for(;null!==s;){if(a=St(s),null===a)return
if(l=a.tag,5===l||6===l){r=i=a
continue e}s=s.parentNode}}r=r.return}V((function(){var r=i,o=W(n),a=[]
e:{var s=ha.get(e)
if(void 0!==s){var l=Pa,u=e
switch(e){case"keypress":if(0===ze(n))break e
case"keydown":case"keyup":l=Ja
break
case"focusin":u="focus",l=Fa
break
case"focusout":u="blur",l=Fa
break
case"beforeblur":case"afterblur":l=Fa
break
case"click":if(2===n.button)break e
case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=Da
break
case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=La
break
case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=ts
break
case ca:case da:case fa:l=Ua
break
case pa:l=rs
break
case"scroll":l=Oa
break
case"wheel":l=is
break
case"copy":case"cut":case"paste":l=qa
break
case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=Xa}var c=0!=(4&t),d=!c&&"scroll"===e,f=c?null!==s?s+"Capture":null:s
c=[]
for(var p,h=r;null!==h;){p=h
var v=p.stateNode
if(5===p.tag&&null!==v&&(p=v,null!==f&&(v=$(h,f),null!=v&&c.push(ft(h,v,p)))),d)break
h=h.return}0<c.length&&(s=new l(s,u,null,n,o),a.push({event:s,listeners:c}))}}if(0==(7&t)){if(s="mouseover"===e||"pointerover"===e,l="mouseout"===e||"pointerout"===e,(!s||0!=(16&t)||!(u=n.relatedTarget||n.fromElement)||!St(u)&&!u[Rs])&&(l||s)&&(s=o.window===o?o:(s=o.ownerDocument)?s.defaultView||s.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?St(u):null,null!==u&&(d=Q(u),u!==d||5!==u.tag&&6!==u.tag)&&(u=null)):(l=null,u=r),l!==u)){if(c=Da,v="onMouseLeave",f="onMouseEnter",h="mouse","pointerout"!==e&&"pointerover"!==e||(c=Xa,v="onPointerLeave",f="onPointerEnter",h="pointer"),d=null==l?s:xt(l),p=null==u?s:xt(u),s=new c(v,h+"leave",l,n,o),s.target=d,s.relatedTarget=p,v=null,St(o)===r&&(c=new c(f,h+"enter",u,n,o),c.target=p,c.relatedTarget=d,v=c),d=v,l&&u)e:{for(c=l,f=u,h=0,p=c;p;p=ht(p))h++
for(p=0,v=f;v;v=ht(v))p++
for(;0<h-p;)c=ht(c),h--
for(;0<p-h;)f=ht(f),p--
for(;h--;){if(c===f||null!==f&&c===f.alternate)break e
c=ht(c),f=ht(f)}c=null}else c=null
null!==l&&vt(a,s,l,c,!1),null!==u&&null!==d&&vt(a,d,u,c,!0)}if(s=r?xt(r):window,l=s.nodeName&&s.nodeName.toLowerCase(),"select"===l||"input"===l&&"file"===s.type)var g=He
else if(Fe(s))if(ys)g=Ye
else{g=Ke
var y=Ge}else(l=s.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===s.type||"radio"===s.type)&&(g=Qe)
switch(g&&(g=g(e,r))?Ue(a,g,n,o):(y&&y(e,s,r),"focusout"===e&&(y=s._wrapperState)&&y.controlled&&"number"===s.type&&j(s,"number",s.value)),y=r?xt(r):window,e){case"focusin":(Fe(y)||"true"===y.contentEditable)&&(ws=y,ks=r,Ss=null)
break
case"focusout":Ss=ks=ws=null
break
case"mousedown":Es=!0
break
case"contextmenu":case"mouseup":case"dragend":Es=!1,ot(a,n,o)
break
case"selectionchange":if(bs)break
case"keydown":case"keyup":ot(a,n,o)}var m
if(ss)e:{switch(e){case"compositionstart":var _="onCompositionStart"
break e
case"compositionend":_="onCompositionEnd"
break e
case"compositionupdate":_="onCompositionUpdate"
break e}_=void 0}else ps?De(e,n)&&(_="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(_="onCompositionStart")
_&&(cs&&"ko"!==n.locale&&(ps||"onCompositionStart"!==_?"onCompositionEnd"===_&&ps&&(m=Ae()):(Ta=o,Aa="value"in Ta?Ta.value:Ta.textContent,ps=!0)),y=pt(r,_),0<y.length&&(_=new Va(_,e,null,n,o),a.push({event:_,listeners:y}),m?_.data=m:(m=Re(n),null!==m&&(_.data=m)))),(m=us?Le(e,n):Me(e,n))&&(r=pt(r,"onBeforeInput"),0<r.length&&(o=new $a("onBeforeInput","beforeinput",null,n,o),a.push({event:o,listeners:r}),o.data=m))}at(a,t)}))}function ft(e,t,n){return{instance:e,listener:t,currentTarget:n}}function pt(e,t){for(var n=t+"Capture",r=[];null!==e;){var o=e,i=o.stateNode
5===o.tag&&null!==i&&(o=i,i=$(e,n),null!=i&&r.unshift(ft(e,i,o)),i=$(e,t),null!=i&&r.push(ft(e,i,o))),e=e.return}return r}function ht(e){if(null===e)return null
do{e=e.return}while(e&&5!==e.tag)
return e||null}function vt(e,t,n,r,o){for(var i=t._reactName,a=[];null!==n&&n!==r;){var s=n,l=s.alternate,u=s.stateNode
if(null!==l&&l===r)break
5===s.tag&&null!==u&&(s=u,o?(l=$(n,i),null!=l&&a.unshift(ft(n,l,s))):o||(l=$(n,i),null!=l&&a.push(ft(n,l,s)))),n=n.return}0!==a.length&&e.push({event:t,listeners:a})}function gt(){}function yt(e,t){switch(e){case"button":case"input":case"select":case"textarea":return!!t.autoFocus}return!1}function mt(e,t){return"textarea"===e||"option"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}function _t(e){1===e.nodeType?e.textContent="":9===e.nodeType&&(e=e.body,null!=e&&(e.textContent=""))}function bt(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType
if(1===t||3===t)break}return e}function wt(e){e=e.previousSibling
for(var t=0;e;){if(8===e.nodeType){var n=e.data
if("$"===n||"$!"===n||"$?"===n){if(0===t)return e
t--}else"/$"===n&&t++}e=e.previousSibling}return null}function kt(e){return{$$typeof:li,toString:e,valueOf:e}}function St(e){var t=e[Ns]
if(t)return t
for(var n=e.parentNode;n;){if(t=n[Rs]||n[Ns]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=wt(e);null!==e;){if(n=e[Ns])return n
e=wt(e)}return t}e=n,n=e.parentNode}return null}function Et(e){return e=e[Ns]||e[Rs],!e||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function xt(e){if(5===e.tag||6===e.tag)return e.stateNode
throw Error(n(33))}function jt(e){return e[Ds]||null}function Tt(e){var t=e[Ls]
return void 0===t&&(t=e[Ls]=new Set),t}function At(e){return{current:e}}function zt(e,t){0>Fs||(e.current=Ms[Fs],Ms[Fs]=null,Fs--)}function It(e,t,n){Fs++,Ms[Fs]=e.current,e.current=t}function Pt(e,t){var n=e.type.contextTypes
if(!n)return Ws
var r=e.stateNode
if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext
var o,i={}
for(o in n)i[o]=t[o]
return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ct(e){return e=e.childContextTypes,null!=e}function Ot(e,t,r){if(Us.current!==Ws)throw Error(n(168))
It(Us,t),It(Bs,r)}function Nt(e,t,r){var o=e.stateNode
if(e=t.childContextTypes,"function"!=typeof o.getChildContext)return r
for(var i in o=o.getChildContext(),o)if(!(i in e))throw Error(n(108,h(t)||"Unknown",i))
return Go({},r,o)}function Dt(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ws,qs=Us.current,It(Us,e),It(Bs,Bs.current),!0}function Rt(e,t,r){var o=e.stateNode
if(!o)throw Error(n(169))
r?(e=Nt(e,t,qs),o.__reactInternalMemoizedMergedChildContext=e,zt(Bs),zt(Us),It(Us,e)):zt(Bs),It(Bs,r)}function Lt(){switch(Qs()){case Ys:return 99
case Js:return 98
case Zs:return 97
case Xs:return 96
case el:return 95
default:throw Error(n(332))}}function Mt(e){switch(e){case 99:return Ys
case 98:return Js
case 97:return Zs
case 96:return Xs
case 95:return el
default:throw Error(n(332))}}function Ft(e,t){return e=Mt(e),$s(e,t)}function Wt(e,t,n){return e=Mt(e),Gs(e,t,n)}function Ut(){if(null!==il){var e=il
il=null,Ks(e)}Bt()}function Bt(){if(!al&&null!==ol){al=!0
var e=0
try{var t=ol
Ft(99,(function(){for(;e<t.length;e++){var n=t[e]
do{n=n(!0)}while(null!==n)}})),ol=null}catch(t){throw null!==ol&&(ol=ol.slice(e+1)),Gs(Ys,Ut),t}finally{al=!1}}}function qt(e,t){if(e&&e.defaultProps){for(var n in t=Go({},t),e=e.defaultProps,e)void 0===t[n]&&(t[n]=e[n])
return t}return t}function Ht(){pl=fl=dl=null}function Vt(e){var t=cl.current
zt(cl),e.type._context._currentValue=t}function $t(e,t){for(;null!==e;){var n=e.alternate
if((e.childLanes&t)===t){if(null===n||(n.childLanes&t)===t)break
n.childLanes|=t}else e.childLanes|=t,null!==n&&(n.childLanes|=t)
e=e.return}}function Gt(e,t){dl=e,pl=fl=null,e=e.dependencies,null!==e&&null!==e.firstContext&&(0!=(e.lanes&t)&&(Bl=!0),e.firstContext=null)}function Kt(e,t){if(pl!==e&&!1!==t&&0!==t)if("number"==typeof t&&1073741823!==t||(pl=e,t=1073741823),t={context:e,observedBits:t,next:null},null===fl){if(null===dl)throw Error(n(308))
fl=t,dl.dependencies={lanes:0,firstContext:t,responders:null}}else fl=fl.next=t
return e._currentValue}function Qt(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}function Yt(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Jt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Zt(e,t){if(e=e.updateQueue,null!==e){e=e.shared
var n=e.pending
null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}}function Xt(e,t){var n=e.updateQueue,r=e.alternate
if(null!==r&&(r=r.updateQueue,n===r)){var o=null,i=null
if(n=n.firstBaseUpdate,null!==n){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null}
null===i?o=i=a:i=i.next=a,n=n.next}while(null!==n)
null===i?o=i=t:i=i.next=t}else o=i=t
return n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}e=n.lastBaseUpdate,null===e?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function en(e,t,n,r){var o=e.updateQueue
hl=!1
var i=o.firstBaseUpdate,a=o.lastBaseUpdate,s=o.shared.pending
if(null!==s){o.shared.pending=null
var l=s,u=l.next
l.next=null,null===a?i=u:a.next=u,a=l
var c=e.alternate
if(null!==c){c=c.updateQueue
var d=c.lastBaseUpdate
d!==a&&(null===d?c.firstBaseUpdate=u:d.next=u,c.lastBaseUpdate=l)}}if(null!==i){for(d=o.baseState,a=0,c=u=l=null;;){s=i.lane
var f=i.eventTime
if((r&s)===s){null!==c&&(c=c.next={eventTime:f,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null})
e:{var p=e,h=i
switch(s=t,f=n,h.tag){case 1:if(p=h.payload,"function"==typeof p){d=p.call(f,d,s)
break e}d=p
break e
case 3:p.flags=-4097&p.flags|64
case 0:if(p=h.payload,s="function"==typeof p?p.call(f,d,s):p,null==s)break e
d=Go({},d,s)
break e
case 2:hl=!0}}null!==i.callback&&(e.flags|=32,s=o.effects,null===s?o.effects=[i]:s.push(i))}else f={eventTime:f,lane:s,tag:i.tag,payload:i.payload,callback:i.callback,next:null},null===c?(u=c=f,l=d):c=c.next=f,a|=s
if(i=i.next,null===i){if(s=o.shared.pending,null===s)break
i=s.next,s.next=null,o.lastBaseUpdate=s,o.shared.pending=null}}null===c&&(l=d),o.baseState=l,o.firstBaseUpdate=u,o.lastBaseUpdate=c,lu|=a,e.lanes=a,e.memoizedState=d}}function tn(e,t,r){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var o=e[t],i=o.callback
if(null!==i){if(o.callback=null,o=r,"function"!=typeof i)throw Error(n(191,i))
i.call(o)}}}function nn(e,t,n,r){t=e.memoizedState,n=n(r,t),n=null==n?t:Go({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}function rn(e,t,n,r,o,i,a){return e=e.stateNode,"function"==typeof e.shouldComponentUpdate?e.shouldComponentUpdate(r,i,a):!(t.prototype&&t.prototype.isPureReactComponent&&Ze(n,r)&&Ze(o,i))}function on(e,t,n){var r=!1,o=Ws,i=t.contextType
return"object"==typeof i&&null!==i?i=Kt(i):(o=Ct(t)?qs:Us.current,r=t.contextTypes,i=(r=null!=r)?Pt(e,o):Ws),t=new t(n,i),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=gl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function an(e,t,n,r){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&gl.enqueueReplaceState(t,t.state,null)}function sn(e,t,n,r){var o=e.stateNode
o.props=n,o.state=e.memoizedState,o.refs=vl,Qt(e)
var i=t.contextType
"object"==typeof i&&null!==i?o.context=Kt(i):(i=Ct(t)?qs:Us.current,o.context=Pt(e,i)),en(e,n,o,r),o.state=e.memoizedState,i=t.getDerivedStateFromProps,"function"==typeof i&&(nn(e,t,i,n),o.state=e.memoizedState),"function"==typeof t.getDerivedStateFromProps||"function"==typeof o.getSnapshotBeforeUpdate||"function"!=typeof o.UNSAFE_componentWillMount&&"function"!=typeof o.componentWillMount||(t=o.state,"function"==typeof o.componentWillMount&&o.componentWillMount(),"function"==typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount(),t!==o.state&&gl.enqueueReplaceState(o,o.state,null),en(e,n,o,r),o.state=e.memoizedState),"function"==typeof o.componentDidMount&&(e.flags|=4)}function ln(e,t,r){if(e=r.ref,null!==e&&"function"!=typeof e&&"object"!=typeof e){if(r._owner){if(r=r._owner,r){if(1!==r.tag)throw Error(n(309))
var o=r.stateNode}if(!o)throw Error(n(147,e))
var i=""+e
return null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===i?t.ref:(t=function(e){var t=o.refs
t===vl&&(t=o.refs={}),null===e?delete t[i]:t[i]=e},t._stringRef=i,t)}if("string"!=typeof e)throw Error(n(284))
if(!r._owner)throw Error(n(290,e))}return e}function un(e,t){if("textarea"!==e.type)throw Error(n(31,"[object Object]"===Object.prototype.toString.call(t)?"object with keys {"+Object.keys(t).join(", ")+"}":t))}function cn(e){function t(t,n){if(e){var r=t.lastEffect
null!==r?(r.nextEffect=n,t.lastEffect=n):t.firstEffect=t.lastEffect=n,n.nextEffect=null,n.flags=8}}function r(n,r){if(!e)return null
for(;null!==r;)t(n,r),r=r.sibling
return null}function o(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling
return e}function i(e,t){return e=mo(e,t),e.index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?(r=t.alternate,null!==r?(r=r.index,r<n?(t.flags=2,n):r):(t.flags=2,n)):n}function s(t){return e&&null===t.alternate&&(t.flags=2),t}function l(e,t,n,r){return null===t||6!==t.tag?(t=ko(n,e.mode,r),t.return=e,t):(t=i(t,n),t.return=e,t)}function u(e,t,n,r){return null!==t&&t.elementType===n.type?(r=i(t,n.props),r.ref=ln(e,t,n),r.return=e,r):(r=_o(n.type,n.key,n.props,null,e.mode,r),r.ref=ln(e,t,n),r.return=e,r)}function d(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=So(n,e.mode,r),t.return=e,t):(t=i(t,n.children||[]),t.return=e,t)}function f(e,t,n,r,o){return null===t||7!==t.tag?(t=bo(n,e.mode,r,o),t.return=e,t):(t=i(t,n),t.return=e,t)}function p(e,t,n){if("string"==typeof t||"number"==typeof t)return t=ko(""+t,e.mode,n),t.return=e,t
if("object"==typeof t&&null!==t){switch(t.$$typeof){case Qo:return n=_o(t.type,t.key,t.props,null,e.mode,n),n.ref=ln(e,null,t),n.return=e,n
case Yo:return t=So(t,e.mode,n),t.return=e,t}if(yl(t)||c(t))return t=bo(t,e.mode,n,null),t.return=e,t
un(e,t)}return null}function v(e,t,n,r){var o=null!==t?t.key:null
if("string"==typeof n||"number"==typeof n)return null!==o?null:l(e,t,""+n,r)
if("object"==typeof n&&null!==n){switch(n.$$typeof){case Qo:return n.key===o?n.type===Jo?f(e,t,n.props.children,r,o):u(e,t,n,r):null
case Yo:return n.key===o?d(e,t,n,r):null}if(yl(n)||c(n))return null!==o?null:f(e,t,n,r,null)
un(e,n)}return null}function g(e,t,n,r,o){if("string"==typeof r||"number"==typeof r)return e=e.get(n)||null,l(t,e,""+r,o)
if("object"==typeof r&&null!==r){switch(r.$$typeof){case Qo:return e=e.get(null===r.key?n:r.key)||null,r.type===Jo?f(t,e,r.props.children,o,r.key):u(t,e,r,o)
case Yo:return e=e.get(null===r.key?n:r.key)||null,d(t,e,r,o)}if(yl(r)||c(r))return e=e.get(n)||null,f(t,e,r,o,null)
un(t,r)}return null}function y(n,i,s,l){for(var u=null,c=null,d=i,f=i=0,h=null;null!==d&&f<s.length;f++){d.index>f?(h=d,d=null):h=d.sibling
var y=v(n,d,s[f],l)
if(null===y){null===d&&(d=h)
break}e&&d&&null===y.alternate&&t(n,d),i=a(y,i,f),null===c?u=y:c.sibling=y,c=y,d=h}if(f===s.length)return r(n,d),u
if(null===d){for(;f<s.length;f++)d=p(n,s[f],l),null!==d&&(i=a(d,i,f),null===c?u=d:c.sibling=d,c=d)
return u}for(d=o(n,d);f<s.length;f++)h=g(d,n,f,s[f],l),null!==h&&(e&&null!==h.alternate&&d.delete(null===h.key?f:h.key),i=a(h,i,f),null===c?u=h:c.sibling=h,c=h)
return e&&d.forEach((function(e){return t(n,e)})),u}function m(i,s,l,u){var d=c(l)
if("function"!=typeof d)throw Error(n(150))
if(l=d.call(l),null==l)throw Error(n(151))
for(var f=d=null,h=s,y=s=0,m=null,_=l.next();null!==h&&!_.done;y++,_=l.next()){h.index>y?(m=h,h=null):m=h.sibling
var b=v(i,h,_.value,u)
if(null===b){null===h&&(h=m)
break}e&&h&&null===b.alternate&&t(i,h),s=a(b,s,y),null===f?d=b:f.sibling=b,f=b,h=m}if(_.done)return r(i,h),d
if(null===h){for(;!_.done;y++,_=l.next())_=p(i,_.value,u),null!==_&&(s=a(_,s,y),null===f?d=_:f.sibling=_,f=_)
return d}for(h=o(i,h);!_.done;y++,_=l.next())_=g(h,i,y,_.value,u),null!==_&&(e&&null!==_.alternate&&h.delete(null===_.key?y:_.key),s=a(_,s,y),null===f?d=_:f.sibling=_,f=_)
return e&&h.forEach((function(e){return t(i,e)})),d}return function(e,o,a,l){var u="object"==typeof a&&null!==a&&a.type===Jo&&null===a.key
u&&(a=a.props.children)
var d="object"==typeof a&&null!==a
if(d)switch(a.$$typeof){case Qo:e:{for(d=a.key,u=o;null!==u;){if(u.key===d){switch(u.tag){case 7:if(a.type===Jo){r(e,u.sibling),o=i(u,a.props.children),o.return=e,e=o
break e}break
default:if(u.elementType===a.type){r(e,u.sibling),o=i(u,a.props),o.ref=ln(e,u,a),o.return=e,e=o
break e}}r(e,u)
break}t(e,u),u=u.sibling}a.type===Jo?(o=bo(a.props.children,e.mode,l,a.key),o.return=e,e=o):(l=_o(a.type,a.key,a.props,null,e.mode,l),l.ref=ln(e,o,a),l.return=e,e=l)}return s(e)
case Yo:e:{for(u=a.key;null!==o;){if(o.key===u){if(4===o.tag&&o.stateNode.containerInfo===a.containerInfo&&o.stateNode.implementation===a.implementation){r(e,o.sibling),o=i(o,a.children||[]),o.return=e,e=o
break e}r(e,o)
break}t(e,o),o=o.sibling}o=So(a,e.mode,l),o.return=e,e=o}return s(e)}if("string"==typeof a||"number"==typeof a)return a=""+a,null!==o&&6===o.tag?(r(e,o.sibling),o=i(o,a),o.return=e,e=o):(r(e,o),o=ko(a,e.mode,l),o.return=e,e=o),s(e)
if(yl(a))return y(e,o,a,l)
if(c(a))return m(e,o,a,l)
if(d&&un(e,a),void 0===a&&!u)switch(e.tag){case 1:case 22:case 0:case 11:case 15:throw Error(n(152,h(e.type)||"Component"))}return r(e,o)}}function dn(e){if(e===bl)throw Error(n(174))
return e}function fn(e,t){switch(It(Sl,t),It(kl,e),It(wl,bl),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:D(null,"")
break
default:e=8===e?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=D(t,e)}zt(wl),It(wl,t)}function pn(e){zt(wl),zt(kl),zt(Sl)}function hn(e){dn(Sl.current)
var t=dn(wl.current),n=D(t,e.type)
t!==n&&(It(kl,e),It(wl,n))}function vn(e){kl.current===e&&(zt(wl),zt(kl))}function gn(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState
if(null!==n&&(n=n.dehydrated,null===n||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!=(64&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child
continue}if(t===e)break
for(;null===t.sibling;){if(null===t.return||t.return===e)return null
t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function yn(e,t){var n=Cu(5,null,null,0)
n.elementType="DELETED",n.type="DELETED",n.stateNode=t,n.return=e,n.flags=8,null!==e.lastEffect?(e.lastEffect.nextEffect=n,e.lastEffect=n):e.firstEffect=e.lastEffect=n}function mn(e,t){switch(e.tag){case 5:var n=e.type
return t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,null!==t&&(e.stateNode=t,!0)
case 6:return t=""===e.pendingProps||3!==t.nodeType?null:t,null!==t&&(e.stateNode=t,!0)
case 13:default:return!1}}function _n(e){if(Tl){var t=jl
if(t){var n=t
if(!mn(e,t)){if(t=bt(n.nextSibling),!t||!mn(e,t))return e.flags=-1025&e.flags|2,Tl=!1,void(xl=e)
yn(xl,n)}xl=e,jl=bt(t.firstChild)}else e.flags=-1025&e.flags|2,Tl=!1,xl=e}}function bn(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return
xl=e}function wn(e){if(e!==xl)return!1
if(!Tl)return bn(e),Tl=!0,!1
var t=e.type
if(5!==e.tag||"head"!==t&&"body"!==t&&!mt(t,e.memoizedProps))for(t=jl;t;)yn(e,t),t=bt(t.nextSibling)
if(bn(e),13===e.tag){if(e=e.memoizedState,e=null!==e?e.dehydrated:null,!e)throw Error(n(317))
e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var r=e.data
if("/$"===r){if(0===t){jl=bt(e.nextSibling)
break e}t--}else"$"!==r&&"$!"!==r&&"$?"!==r||t++}e=e.nextSibling}jl=null}}else jl=xl?bt(e.stateNode.nextSibling):null
return!0}function kn(){jl=xl=null,Tl=!1}function Sn(){for(var e=0;e<Al.length;e++)Al[e]._workInProgressVersionPrimary=null
Al.length=0}function En(){throw Error(n(321))}function xn(e,t){if(null===t)return!1
for(var n=0;n<t.length&&n<e.length;n++)if(!ms(e[n],t[n]))return!1
return!0}function jn(e,t,r,o,i,a){if(Pl=a,Cl=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,zl.current=null===e||null===e.memoizedState?Ml:Fl,e=r(o,i),Rl){a=0
do{if(Rl=!1,!(25>a))throw Error(n(301))
a+=1,Nl=Ol=null,t.updateQueue=null,zl.current=Wl,e=r(o,i)}while(Rl)}if(zl.current=Ll,t=null!==Ol&&null!==Ol.next,Pl=0,Nl=Ol=Cl=null,Dl=!1,t)throw Error(n(300))
return e}function Tn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null}
return null===Nl?Cl.memoizedState=Nl=e:Nl=Nl.next=e,Nl}function An(){if(null===Ol){var e=Cl.alternate
e=null!==e?e.memoizedState:null}else e=Ol.next
var t=null===Nl?Cl.memoizedState:Nl.next
if(null!==t)Nl=t,Ol=e
else{if(null===e)throw Error(n(310))
Ol=e,e={memoizedState:Ol.memoizedState,baseState:Ol.baseState,baseQueue:Ol.baseQueue,queue:Ol.queue,next:null},null===Nl?Cl.memoizedState=Nl=e:Nl=Nl.next=e}return Nl}function zn(e,t){return"function"==typeof t?t(e):t}function In(e,t,r){if(t=An(),r=t.queue,null===r)throw Error(n(311))
r.lastRenderedReducer=e
var o=Ol,i=o.baseQueue,a=r.pending
if(null!==a){if(null!==i){var s=i.next
i.next=a.next,a.next=s}o.baseQueue=i=a,r.pending=null}if(null!==i){i=i.next,o=o.baseState
var l=s=a=null,u=i
do{var c=u.lane
if((Pl&c)===c)null!==l&&(l=l.next={lane:0,action:u.action,eagerReducer:u.eagerReducer,eagerState:u.eagerState,next:null}),o=u.eagerReducer===e?u.eagerState:e(o,u.action)
else{var d={lane:c,action:u.action,eagerReducer:u.eagerReducer,eagerState:u.eagerState,next:null}
null===l?(s=l=d,a=o):l=l.next=d,Cl.lanes|=c,lu|=c}u=u.next}while(null!==u&&u!==i)
null===l?a=o:l.next=s,ms(o,t.memoizedState)||(Bl=!0),t.memoizedState=o,t.baseState=a,t.baseQueue=l,r.lastRenderedState=o}return[t.memoizedState,r.dispatch]}function Pn(e,t,r){if(t=An(),r=t.queue,null===r)throw Error(n(311))
r.lastRenderedReducer=e
var o=r.dispatch,i=r.pending,a=t.memoizedState
if(null!==i){r.pending=null
var s=i=i.next
do{a=e(a,s.action),s=s.next}while(s!==i)
ms(a,t.memoizedState)||(Bl=!0),t.memoizedState=a,null===t.baseQueue&&(t.baseState=a),r.lastRenderedState=a}return[a,o]}function Cn(e,t,r){var o=t._getVersion
o=o(t._source)
var i=t._workInProgressVersionPrimary
if(null!==i?e=i===o:(e=e.mutableReadLanes,(e=(Pl&e)===e)&&(t._workInProgressVersionPrimary=o,Al.push(t))),e)return r(t._source)
throw Al.push(t),Error(n(350))}function On(e,t,r,o){var i=eu
if(null===i)throw Error(n(349))
var a=t._getVersion,s=a(t._source),l=zl.current,u=l.useState((function(){return Cn(i,t,r)})),c=u[1],d=u[0]
u=Nl
var f=e.memoizedState,p=f.refs,h=p.getSnapshot,v=f.source
f=f.subscribe
var g=Cl
return e.memoizedState={refs:p,source:t,subscribe:o},l.useEffect((function(){p.getSnapshot=r,p.setSnapshot=c
var e=a(t._source)
if(!ms(s,e)){e=r(t._source),ms(d,e)||(c(e),e=Mr(g),i.mutableReadLanes|=e&i.pendingLanes),e=i.mutableReadLanes,i.entangledLanes|=e
for(var n=i.entanglements,o=e;0<o;){var l=31-wa(o),u=1<<l
n[l]|=e,o&=~u}}}),[r,t,o]),l.useEffect((function(){return o(t._source,(function(){var e=p.getSnapshot,n=p.setSnapshot
try{n(e(t._source))
var r=Mr(g)
i.mutableReadLanes|=r&i.pendingLanes}catch(e){n((function(){throw e}))}}))}),[t,o]),ms(h,r)&&ms(v,t)&&ms(f,o)||(e={pending:null,dispatch:null,lastRenderedReducer:zn,lastRenderedState:d},e.dispatch=c=Yn.bind(null,Cl,e),u.queue=e,u.baseQueue=null,d=Cn(i,t,r),u.memoizedState=u.baseState=d),d}function Nn(e,t,n){var r=An()
return On(r,e,t,n)}function Dn(e){var t=Tn()
return"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e,e=t.queue={pending:null,dispatch:null,lastRenderedReducer:zn,lastRenderedState:e},e=e.dispatch=Yn.bind(null,Cl,e),[t.memoizedState,e]}function Rn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Cl.updateQueue,null===t?(t={lastEffect:null},Cl.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,null===n?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ln(e){var t=Tn()
return e={current:e},t.memoizedState=e}function Mn(e){return An().memoizedState}function Fn(e,t,n,r){var o=Tn()
Cl.flags|=e,o.memoizedState=Rn(1|t,n,void 0,void 0===r?null:r)}function Wn(e,t,n,r){var o=An()
r=void 0===r?null:r
var i=void 0
if(null!==Ol){var a=Ol.memoizedState
if(i=a.destroy,null!==r&&xn(r,a.deps))return void Rn(t,n,i,r)}Cl.flags|=e,o.memoizedState=Rn(1|t,n,i,r)}function Un(e,t){return Fn(516,4,e,t)}function Bn(e,t){return Wn(516,4,e,t)}function qn(e,t){return Wn(4,2,e,t)}function Hn(e,t){return"function"==typeof t?(e=e(),t(e),function(){t(null)}):null!=t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Vn(e,t,n){return n=null!=n?n.concat([e]):null,Wn(4,2,Hn.bind(null,t,e),n)}function $n(e,t){}function Gn(e,t){var n=An()
t=void 0===t?null:t
var r=n.memoizedState
return null!==r&&null!==t&&xn(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Kn(e,t){var n=An()
t=void 0===t?null:t
var r=n.memoizedState
return null!==r&&null!==t&&xn(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Qn(e,t){var n=Lt()
Ft(98>n?98:n,(function(){e(!0)})),Ft(97<n?97:n,(function(){var n=Il.transition
Il.transition=1
try{e(!1),t()}finally{Il.transition=n}}))}function Yn(e,t,n){var r=Lr(),o=Mr(e),i={lane:o,action:n,eagerReducer:null,eagerState:null,next:null},a=t.pending
if(null===a?i.next=i:(i.next=a.next,a.next=i),t.pending=i,a=e.alternate,e===Cl||null!==a&&a===Cl)Rl=Dl=!0
else{if(0===e.lanes&&(null===a||0===a.lanes)&&(a=t.lastRenderedReducer,null!==a))try{var s=t.lastRenderedState,l=a(s,n)
if(i.eagerReducer=a,i.eagerState=l,ms(l,s))return}catch(e){}Fr(e,o,r)}}function Jn(e,t,n,r){t.child=null===e?_l(t,null,n,r):ml(t,e.child,n,r)}function Zn(e,t,n,r,o){n=n.render
var i=t.ref
return Gt(t,o),r=jn(e,t,n,r,i,o),null===e||Bl?(t.flags|=1,Jn(e,t,r,o),t.child):(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~o,hr(e,t,o))}function Xn(e,t,n,r,o,i){if(null===e){var a=n.type
return"function"!=typeof a||go(a)||void 0!==a.defaultProps||null!==n.compare||void 0!==n.defaultProps?(e=_o(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=a,er(e,t,a,r,o,i))}return a=e.child,0==(o&i)&&(o=a.memoizedProps,n=n.compare,n=null!==n?n:Ze,n(o,r)&&e.ref===t.ref)?hr(e,t,i):(t.flags|=1,e=mo(a,r),e.ref=t.ref,e.return=t,t.child=e)}function er(e,t,n,r,o,i){if(null!==e&&Ze(e.memoizedProps,r)&&e.ref===t.ref){if(Bl=!1,0==(i&o))return t.lanes=e.lanes,hr(e,t,i)
0!=(16384&e.flags)&&(Bl=!0)}return rr(e,t,n,r,i)}function tr(e,t,n){var r=t.pendingProps,o=r.children,i=null!==e?e.memoizedState:null
if("hidden"===r.mode||"unstable-defer-without-hiding"===r.mode)if(0==(4&t.mode))t.memoizedState={baseLanes:0},Kr(t,n)
else{if(0==(1073741824&n))return e=null!==i?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e},Kr(t,e),null
t.memoizedState={baseLanes:0},Kr(t,null!==i?i.baseLanes:n)}else null!==i?(r=i.baseLanes|n,t.memoizedState=null):r=n,Kr(t,r)
return Jn(e,t,o,n),t.child}function nr(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=128)}function rr(e,t,n,r,o){var i=Ct(n)?qs:Us.current
return i=Pt(t,i),Gt(t,o),n=jn(e,t,n,r,i,o),null===e||Bl?(t.flags|=1,Jn(e,t,n,o),t.child):(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~o,hr(e,t,o))}function or(e,t,n,r,o){if(Ct(n)){var i=!0
Dt(t)}else i=!1
if(Gt(t,o),null===t.stateNode)null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2),on(t,n,r),sn(t,n,r,o),r=!0
else if(null===e){var a=t.stateNode,s=t.memoizedProps
a.props=s
var l=a.context,u=n.contextType
"object"==typeof u&&null!==u?u=Kt(u):(u=Ct(n)?qs:Us.current,u=Pt(t,u))
var c=n.getDerivedStateFromProps,d="function"==typeof c||"function"==typeof a.getSnapshotBeforeUpdate
d||"function"!=typeof a.UNSAFE_componentWillReceiveProps&&"function"!=typeof a.componentWillReceiveProps||(s!==r||l!==u)&&an(t,a,r,u),hl=!1
var f=t.memoizedState
a.state=f,en(t,r,a,o),l=t.memoizedState,s!==r||f!==l||Bs.current||hl?("function"==typeof c&&(nn(t,n,c,r),l=t.memoizedState),(s=hl||rn(t,n,s,r,f,l,u))?(d||"function"!=typeof a.UNSAFE_componentWillMount&&"function"!=typeof a.componentWillMount||("function"==typeof a.componentWillMount&&a.componentWillMount(),"function"==typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount()),"function"==typeof a.componentDidMount&&(t.flags|=4)):("function"==typeof a.componentDidMount&&(t.flags|=4),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=u,r=s):("function"==typeof a.componentDidMount&&(t.flags|=4),r=!1)}else{a=t.stateNode,Yt(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:qt(t.type,s),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,"object"==typeof l&&null!==l?l=Kt(l):(l=Ct(n)?qs:Us.current,l=Pt(t,l))
var p=n.getDerivedStateFromProps;(c="function"==typeof p||"function"==typeof a.getSnapshotBeforeUpdate)||"function"!=typeof a.UNSAFE_componentWillReceiveProps&&"function"!=typeof a.componentWillReceiveProps||(s!==d||f!==l)&&an(t,a,r,l),hl=!1,f=t.memoizedState,a.state=f,en(t,r,a,o)
var h=t.memoizedState
s!==d||f!==h||Bs.current||hl?("function"==typeof p&&(nn(t,n,p,r),h=t.memoizedState),(u=hl||rn(t,n,u,r,f,h,l))?(c||"function"!=typeof a.UNSAFE_componentWillUpdate&&"function"!=typeof a.componentWillUpdate||("function"==typeof a.componentWillUpdate&&a.componentWillUpdate(r,h,l),"function"==typeof a.UNSAFE_componentWillUpdate&&a.UNSAFE_componentWillUpdate(r,h,l)),"function"==typeof a.componentDidUpdate&&(t.flags|=4),"function"==typeof a.getSnapshotBeforeUpdate&&(t.flags|=256)):("function"!=typeof a.componentDidUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!=typeof a.getSnapshotBeforeUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=256),t.memoizedProps=r,t.memoizedState=h),a.props=r,a.state=h,a.context=l,r=u):("function"!=typeof a.componentDidUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!=typeof a.getSnapshotBeforeUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=256),r=!1)}return ir(e,t,n,r,i,o)}function ir(e,t,n,r,o,i){nr(e,t)
var a=0!=(64&t.flags)
if(!r&&!a)return o&&Rt(t,n,!1),hr(e,t,i)
r=t.stateNode,Ul.current=t
var s=a&&"function"!=typeof n.getDerivedStateFromError?null:r.render()
return t.flags|=1,null!==e&&a?(t.child=ml(t,e.child,null,i),t.child=ml(t,null,s,i)):Jn(e,t,s,i),t.memoizedState=r.state,o&&Rt(t,n,!0),t.child}function ar(e){var t=e.stateNode
t.pendingContext?Ot(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ot(e,t.context,!1),fn(e,t.containerInfo)}function sr(e,t,n){var r,o=t.pendingProps,i=El.current,a=!1
return(r=0!=(64&t.flags))||(r=(null===e||null!==e.memoizedState)&&0!=(2&i)),r?(a=!0,t.flags&=-65):null!==e&&null===e.memoizedState||void 0===o.fallback||!0===o.unstable_avoidThisFallback||(i|=1),It(El,1&i),null===e?(void 0!==o.fallback&&_n(t),e=o.children,i=o.fallback,a?(e=lr(t,e,i,n),t.child.memoizedState={baseLanes:n},t.memoizedState=ql,e):"number"==typeof o.unstable_expectedLoadTime?(e=lr(t,e,i,n),t.child.memoizedState={baseLanes:n},t.memoizedState=ql,t.lanes=33554432,e):(n=wo({mode:"visible",children:e},t.mode,n,null),n.return=t,t.child=n)):(e.memoizedState,a?(o=cr(e,t,o.children,o.fallback,n),a=t.child,i=e.child.memoizedState,a.memoizedState=null===i?{baseLanes:n}:{baseLanes:i.baseLanes|n},a.childLanes=e.childLanes&~n,t.memoizedState=ql,o):(n=ur(e,t,o.children,n),t.memoizedState=null,n))}function lr(e,t,n,r){var o=e.mode,i=e.child
return t={mode:"hidden",children:t},0==(2&o)&&null!==i?(i.childLanes=0,i.pendingProps=t):i=wo(t,o,0,null),n=bo(n,o,r,null),i.return=e,n.return=e,i.sibling=n,e.child=i,n}function ur(e,t,n,r){var o=e.child
return e=o.sibling,n=mo(o,{mode:"visible",children:n}),0==(2&t.mode)&&(n.lanes=r),n.return=t,n.sibling=null,null!==e&&(e.nextEffect=null,e.flags=8,t.firstEffect=t.lastEffect=e),t.child=n}function cr(e,t,n,r,o){var i=t.mode,a=e.child
e=a.sibling
var s={mode:"hidden",children:n}
return 0==(2&i)&&t.child!==a?(n=t.child,n.childLanes=0,n.pendingProps=s,a=n.lastEffect,null!==a?(t.firstEffect=n.firstEffect,t.lastEffect=a,a.nextEffect=null):t.firstEffect=t.lastEffect=null):n=mo(a,s),null!==e?r=mo(e,r):(r=bo(r,i,o,null),r.flags|=2),r.return=t,n.return=t,n.sibling=r,t.child=n,r}function dr(e,t){e.lanes|=t
var n=e.alternate
null!==n&&(n.lanes|=t),$t(e.return,t)}function fr(e,t,n,r,o,i){var a=e.memoizedState
null===a?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o,lastEffect:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=o,a.lastEffect=i)}function pr(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail
if(Jn(e,t,r.children,n),r=El.current,0!=(2&r))r=1&r|2,t.flags|=64
else{if(null!==e&&0!=(64&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&dr(e,n)
else if(19===e.tag)dr(e,n)
else if(null!==e.child){e.child.return=e,e=e.child
continue}if(e===t)break e
for(;null===e.sibling;){if(null===e.return||e.return===t)break e
e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(It(El,r),0==(2&t.mode))t.memoizedState=null
else switch(o){case"forwards":for(n=t.child,o=null;null!==n;)e=n.alternate,null!==e&&null===gn(e)&&(o=n),n=n.sibling
n=o,null===n?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),fr(t,!1,o,n,i,t.lastEffect)
break
case"backwards":for(n=null,o=t.child,t.child=null;null!==o;){if(e=o.alternate,null!==e&&null===gn(e)){t.child=o
break}e=o.sibling,o.sibling=n,n=o,o=e}fr(t,!0,n,null,i,t.lastEffect)
break
case"together":fr(t,!1,null,null,void 0,t.lastEffect)
break
default:t.memoizedState=null}return t.child}function hr(e,t,r){if(null!==e&&(t.dependencies=e.dependencies),lu|=t.lanes,0!=(r&t.childLanes)){if(null!==e&&t.child!==e.child)throw Error(n(153))
if(null!==t.child){for(e=t.child,r=mo(e,e.pendingProps),t.child=r,r.return=t;null!==e.sibling;)e=e.sibling,r=r.sibling=mo(e,e.pendingProps),r.return=t
r.sibling=null}return t.child}return null}function vr(e,t){if(!Tl)switch(e.tailMode){case"hidden":t=e.tail
for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling
null===n?e.tail=null:n.sibling=null
break
case"collapsed":n=e.tail
for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling
null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function gr(e,t,r){var o=t.pendingProps
switch(t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null
case 1:return Ct(t.type)&&(zt(Bs),zt(Us)),null
case 3:return pn(),zt(Bs),zt(Us),Sn(),o=t.stateNode,o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),null!==e&&null!==e.child||(wn(t)?t.flags|=4:o.hydrate||(t.flags|=256)),Vl(t),null
case 5:vn(t)
var i=dn(Sl.current)
if(r=t.type,null!==e&&null!=t.stateNode)$l(e,t,r,o,i),e.ref!==t.ref&&(t.flags|=128)
else{if(!o){if(null===t.stateNode)throw Error(n(166))
return null}if(e=dn(wl.current),wn(t)){o=t.stateNode,r=t.type
var a=t.memoizedProps
switch(o[Ns]=t,o[Ds]=a,r){case"dialog":st("cancel",o),st("close",o)
break
case"iframe":case"object":case"embed":st("load",o)
break
case"video":case"audio":for(e=0;e<xs.length;e++)st(xs[e],o)
break
case"source":st("error",o)
break
case"img":case"image":case"link":st("error",o),st("load",o)
break
case"details":st("toggle",o)
break
case"input":k(o,a),st("invalid",o)
break
case"select":o._wrapperState={wasMultiple:!!a.multiple},st("invalid",o)
break
case"textarea":P(o,a),st("invalid",o)}for(var s in M(r,a),e=null,a)a.hasOwnProperty(s)&&(i=a[s],"children"===s?"string"==typeof i?o.textContent!==i&&(e=["children",i]):"number"==typeof i&&o.textContent!==""+i&&(e=["children",""+i]):Mo.hasOwnProperty(s)&&null!=i&&"onScroll"===s&&st("scroll",o))
switch(r){case"input":m(o),x(o,a,!0)
break
case"textarea":m(o),O(o)
break
case"select":case"option":break
default:"function"==typeof a.onClick&&(o.onclick=gt)}o=e,t.updateQueue=o,null!==o&&(t.flags|=4)}else{switch(s=9===i.nodeType?i:i.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=N(r)),"http://www.w3.org/1999/xhtml"===e?"script"===r?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"==typeof o.is?e=s.createElement(r,{is:o.is}):(e=s.createElement(r),"select"===r&&(s=e,o.multiple?s.multiple=!0:o.size&&(s.size=o.size))):e=s.createElementNS(e,r),e[Ns]=t,e[Ds]=o,Hl(e,t,!1,!1),t.stateNode=e,s=F(r,o),r){case"dialog":st("cancel",e),st("close",e),i=o
break
case"iframe":case"object":case"embed":st("load",e),i=o
break
case"video":case"audio":for(i=0;i<xs.length;i++)st(xs[i],e)
i=o
break
case"source":st("error",e),i=o
break
case"img":case"image":case"link":st("error",e),st("load",e),i=o
break
case"details":st("toggle",e),i=o
break
case"input":k(e,o),i=w(e,o),st("invalid",e)
break
case"option":i=A(e,o)
break
case"select":e._wrapperState={wasMultiple:!!o.multiple},i=Go({},o,{value:void 0}),st("invalid",e)
break
case"textarea":P(e,o),i=I(e,o),st("invalid",e)
break
default:i=o}M(r,i)
var l=i
for(a in l)if(l.hasOwnProperty(a)){var c=l[a]
"style"===a?L(e,c):"dangerouslySetInnerHTML"===a?(c=c?c.__html:void 0,null!=c&&mi(e,c)):"children"===a?"string"==typeof c?("textarea"!==r||""!==c)&&_i(e,c):"number"==typeof c&&_i(e,""+c):"suppressContentEditableWarning"!==a&&"suppressHydrationWarning"!==a&&"autoFocus"!==a&&(Mo.hasOwnProperty(a)?null!=c&&"onScroll"===a&&st("scroll",e):null!=c&&u(e,a,c,s))}switch(r){case"input":m(e),x(e,o,!1)
break
case"textarea":m(e),O(e)
break
case"option":null!=o.value&&e.setAttribute("value",""+v(o.value))
break
case"select":e.multiple=!!o.multiple,a=o.value,null!=a?z(e,!!o.multiple,a,!1):null!=o.defaultValue&&z(e,!!o.multiple,o.defaultValue,!0)
break
default:"function"==typeof i.onClick&&(e.onclick=gt)}yt(r,o)&&(t.flags|=4)}null!==t.ref&&(t.flags|=128)}return null
case 6:if(e&&null!=t.stateNode)Gl(e,t,e.memoizedProps,o)
else{if("string"!=typeof o&&null===t.stateNode)throw Error(n(166))
r=dn(Sl.current),dn(wl.current),wn(t)?(o=t.stateNode,r=t.memoizedProps,o[Ns]=t,o.nodeValue!==r&&(t.flags|=4)):(o=(9===r.nodeType?r:r.ownerDocument).createTextNode(o),o[Ns]=t,t.stateNode=o)}return null
case 13:return zt(El),o=t.memoizedState,0!=(64&t.flags)?(t.lanes=r,t):(o=null!==o,r=!1,null===e?void 0!==t.memoizedProps.fallback&&wn(t):r=null!==e.memoizedState,o&&!r&&0!=(2&t.mode)&&(null===e&&!0!==t.memoizedProps.unstable_avoidThisFallback||0!=(1&El.current)?0===iu&&(iu=3):(0!==iu&&3!==iu||(iu=4),null===eu||0==(134217727&lu)&&0==(134217727&uu)||qr(eu,nu))),(o||r)&&(t.flags|=4),null)
case 4:return pn(),Vl(t),null===e&&lt(t.stateNode.containerInfo),null
case 10:return Vt(t),null
case 17:return Ct(t.type)&&(zt(Bs),zt(Us)),null
case 19:if(zt(El),o=t.memoizedState,null===o)return null
if(a=0!=(64&t.flags),s=o.rendering,null===s)if(a)vr(o,!1)
else{if(0!==iu||null!==e&&0!=(64&e.flags))for(e=t.child;null!==e;){if(s=gn(e),null!==s){for(t.flags|=64,vr(o,!1),a=s.updateQueue,null!==a&&(t.updateQueue=a,t.flags|=4),null===o.lastEffect&&(t.firstEffect=null),t.lastEffect=o.lastEffect,o=r,r=t.child;null!==r;)a=r,e=o,a.flags&=2,a.nextEffect=null,a.firstEffect=null,a.lastEffect=null,s=a.alternate,null===s?(a.childLanes=0,a.lanes=e,a.child=null,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=s.childLanes,a.lanes=s.lanes,a.child=s.child,a.memoizedProps=s.memoizedProps,a.memoizedState=s.memoizedState,a.updateQueue=s.updateQueue,a.type=s.type,e=s.dependencies,a.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling
return It(El,1&El.current|2),t.child}e=e.sibling}null!==o.tail&&ll()>pu&&(t.flags|=64,a=!0,vr(o,!1),t.lanes=33554432)}else{if(!a)if(e=gn(s),null!==e){if(t.flags|=64,a=!0,r=e.updateQueue,null!==r&&(t.updateQueue=r,t.flags|=4),vr(o,!0),null===o.tail&&"hidden"===o.tailMode&&!s.alternate&&!Tl)return t=t.lastEffect=o.lastEffect,null!==t&&(t.nextEffect=null),null}else 2*ll()-o.renderingStartTime>pu&&1073741824!==r&&(t.flags|=64,a=!0,vr(o,!1),t.lanes=33554432)
o.isBackwards?(s.sibling=t.child,t.child=s):(r=o.last,null!==r?r.sibling=s:t.child=s,o.last=s)}return null!==o.tail?(r=o.tail,o.rendering=r,o.tail=r.sibling,o.lastEffect=t.lastEffect,o.renderingStartTime=ll(),r.sibling=null,t=El.current,It(El,a?1&t|2:1&t),r):null
case 23:case 24:return ru=ou.current,zt(ou),null!==e&&null!==e.memoizedState!=(null!==t.memoizedState)&&"unstable-defer-without-hiding"!==o.mode&&(t.flags|=4),null}throw Error(n(156,t.tag))}function yr(e,t){switch(e.tag){case 1:return Ct(e.type)&&(zt(Bs),zt(Us)),t=e.flags,4096&t?(e.flags=-4097&t|64,e):null
case 3:if(pn(),zt(Bs),zt(Us),Sn(),t=e.flags,0!=(64&t))throw Error(n(285))
return e.flags=-4097&t|64,e
case 5:return vn(e),null
case 13:return zt(El),t=e.flags,4096&t?(e.flags=-4097&t|64,e):null
case 19:return zt(El),null
case 4:return pn(),null
case 10:return Vt(e),null
case 23:case 24:return ru=ou.current,zt(ou),null
default:return null}}function mr(e,t){try{var n="",r=t
do{n+=p(r),r=r.return}while(r)
var o=n}catch(e){o="\nError generating stack: "+e.message+"\n"+e.stack}return{value:e,source:t,stack:o}}function _r(e,t){try{console.error(t.value)}catch(e){setTimeout((function(){throw e}))}}function br(e,t,n){n=Jt(-1,n),n.tag=3,n.payload={element:null}
var r=t.value
return n.callback=function(){vu||(vu=!0,gu=r),_r(e,t)},n}function wr(e,t,n){n=Jt(-1,n),n.tag=3
var r=e.type.getDerivedStateFromError
if("function"==typeof r){var o=t.value
n.payload=function(){return _r(e,t),r(o)}}var i=e.stateNode
return null!==i&&"function"==typeof i.componentDidCatch&&(n.callback=function(){"function"!=typeof r&&(null===yu?yu=new Set([this]):yu.add(this),_r(e,t))
var n=t.stack
this.componentDidCatch(t.value,{componentStack:null!==n?n:""})}),n}function kr(e){var t=e.ref
if(null!==t)if("function"==typeof t)try{t(null)}catch(t){fo(e,t)}else t.current=null}function Sr(e,t){switch(t.tag){case 0:case 11:case 15:case 22:return
case 1:if(256&t.flags&&null!==e){var r=e.memoizedProps,o=e.memoizedState
e=t.stateNode,t=e.getSnapshotBeforeUpdate(t.elementType===t.type?r:qt(t.type,r),o),e.__reactInternalSnapshotBeforeUpdate=t}return
case 3:return void(256&t.flags&&_t(t.stateNode.containerInfo))
case 5:case 6:case 4:case 17:return}throw Error(n(163))}function Er(e,t,r,o){switch(r.tag){case 0:case 11:case 15:case 22:if(t=r.updateQueue,t=null!==t?t.lastEffect:null,null!==t){e=t=t.next
do{3==(3&e.tag)&&(o=e.create,e.destroy=o()),e=e.next}while(e!==t)}if(t=r.updateQueue,t=null!==t?t.lastEffect:null,null!==t){e=t=t.next
do{var i=e
o=i.next,i=i.tag,0!=(4&i)&&0!=(1&i)&&(lo(r,e),so(r,e)),e=o}while(e!==t)}return
case 1:return e=r.stateNode,4&r.flags&&(null===t?e.componentDidMount():(o=r.elementType===r.type?t.memoizedProps:qt(r.type,t.memoizedProps),e.componentDidUpdate(o,t.memoizedState,e.__reactInternalSnapshotBeforeUpdate))),t=r.updateQueue,void(null!==t&&tn(r,t,e))
case 3:if(t=r.updateQueue,null!==t){if(e=null,null!==r.child)switch(r.child.tag){case 5:e=r.child.stateNode
break
case 1:e=r.child.stateNode}tn(r,t,e)}return
case 5:return e=r.stateNode,void(null===t&&4&r.flags&&yt(r.type,r.memoizedProps)&&e.focus())
case 6:case 4:case 12:return
case 13:return void(null===r.memoizedState&&(r=r.alternate,null!==r&&(r=r.memoizedState,null!==r&&(r=r.dehydrated,null!==r&&ce(r)))))
case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(n(163))}function xr(e,t){for(var n=e;;){if(5===n.tag){var r=n.stateNode
if(t)r=r.style,"function"==typeof r.setProperty?r.setProperty("display","none","important"):r.display="none"
else{r=n.stateNode
var o=n.memoizedProps.style
o=null!=o&&o.hasOwnProperty("display")?o.display:null,r.style.display=R("display",o)}}else if(6===n.tag)n.stateNode.nodeValue=t?"":n.memoizedProps
else if((23!==n.tag&&24!==n.tag||null===n.memoizedState||n===e)&&null!==n.child){n.child.return=n,n=n.child
continue}if(n===e)break
for(;null===n.sibling;){if(null===n.return||n.return===e)return
n=n.return}n.sibling.return=n.return,n=n.sibling}}function jr(e,t,n){if(Vs&&"function"==typeof Vs.onCommitFiberUnmount)try{Vs.onCommitFiberUnmount(Hs,t)}catch(e){}switch(t.tag){case 0:case 11:case 14:case 15:case 22:if(e=t.updateQueue,null!==e&&(e=e.lastEffect,null!==e)){n=e=e.next
do{var r=n,o=r.destroy
if(r=r.tag,void 0!==o)if(0!=(4&r))lo(t,n)
else{r=t
try{o()}catch(e){fo(r,e)}}n=n.next}while(n!==e)}break
case 1:if(kr(t),e=t.stateNode,"function"==typeof e.componentWillUnmount)try{e.props=t.memoizedProps,e.state=t.memoizedState,e.componentWillUnmount()}catch(e){fo(t,e)}break
case 5:kr(t)
break
case 4:Cr(e,t)}}function Tr(e){e.alternate=null,e.child=null,e.dependencies=null,e.firstEffect=null,e.lastEffect=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.return=null,e.updateQueue=null}function Ar(e){return 5===e.tag||3===e.tag||4===e.tag}function zr(e){e:{for(var t=e.return;null!==t;){if(Ar(t))break e
t=t.return}throw Error(n(160))}var r=t
switch(t=r.stateNode,r.tag){case 5:var o=!1
break
case 3:case 4:t=t.containerInfo,o=!0
break
default:throw Error(n(161))}16&r.flags&&(_i(t,""),r.flags&=-17)
e:t:for(r=e;;){for(;null===r.sibling;){if(null===r.return||Ar(r.return)){r=null
break e}r=r.return}for(r.sibling.return=r.return,r=r.sibling;5!==r.tag&&6!==r.tag&&18!==r.tag;){if(2&r.flags)continue t
if(null===r.child||4===r.tag)continue t
r.child.return=r,r=r.child}if(!(2&r.flags)){r=r.stateNode
break e}}o?Ir(e,r,t):Pr(e,r,t)}function Ir(e,t,n){var r=e.tag,o=5===r||6===r
if(o)e=o?e.stateNode:e.stateNode.instance,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,null!=n||null!==t.onclick||(t.onclick=gt))
else if(4!==r&&(e=e.child,null!==e))for(Ir(e,t,n),e=e.sibling;null!==e;)Ir(e,t,n),e=e.sibling}function Pr(e,t,n){var r=e.tag,o=5===r||6===r
if(o)e=o?e.stateNode:e.stateNode.instance,t?n.insertBefore(e,t):n.appendChild(e)
else if(4!==r&&(e=e.child,null!==e))for(Pr(e,t,n),e=e.sibling;null!==e;)Pr(e,t,n),e=e.sibling}function Cr(e,t,r){r=t
for(var o,i,a=!1;;){if(!a){o=r.return
e:for(;;){if(null===o)throw Error(n(160))
switch(i=o.stateNode,o.tag){case 5:o=i,i=!1
break e
case 3:case 4:o=i.containerInfo,i=!0
break e}o=o.return}a=!0}if(5===r.tag||6===r.tag){e:for(var s=e,l=r,u=l;;)if(jr(s,u),null!==u.child&&4!==u.tag)u.child.return=u,u=u.child
else{if(u===l)break e
for(;null===u.sibling;){if(null===u.return||u.return===l)break e
u=u.return}u.sibling.return=u.return,u=u.sibling}i?(s=o,l=r.stateNode,8===s.nodeType?s.parentNode.removeChild(l):s.removeChild(l)):o.removeChild(r.stateNode)}else if(4===r.tag){if(null!==r.child){o=r.stateNode.containerInfo,i=!0,r.child.return=r,r=r.child
continue}}else if(jr(e,r),null!==r.child){r.child.return=r,r=r.child
continue}if(r===t)break
for(;null===r.sibling;){if(null===r.return||r.return===t)return
r=r.return,4===r.tag&&(a=!1)}r.sibling.return=r.return,r=r.sibling}}function Or(e,t){switch(t.tag){case 0:case 11:case 14:case 15:case 22:var r=t.updateQueue
if(r=null!==r?r.lastEffect:null,null!==r){var o=r=r.next
do{3==(3&o.tag)&&(e=o.destroy,o.destroy=void 0,void 0!==e&&e()),o=o.next}while(o!==r)}return
case 1:return
case 5:if(r=t.stateNode,null!=r){o=t.memoizedProps
var i=null!==e?e.memoizedProps:o
e=t.type
var a=t.updateQueue
if(t.updateQueue=null,null!==a){for(r[Ds]=o,"input"===e&&"radio"===o.type&&null!=o.name&&S(r,o),F(e,i),t=F(e,o),i=0;i<a.length;i+=2){var s=a[i],l=a[i+1]
"style"===s?L(r,l):"dangerouslySetInnerHTML"===s?mi(r,l):"children"===s?_i(r,l):u(r,s,l,t)}switch(e){case"input":E(r,o)
break
case"textarea":C(r,o)
break
case"select":e=r._wrapperState.wasMultiple,r._wrapperState.wasMultiple=!!o.multiple,a=o.value,null!=a?z(r,!!o.multiple,a,!1):e!==!!o.multiple&&(null!=o.defaultValue?z(r,!!o.multiple,o.defaultValue,!0):z(r,!!o.multiple,o.multiple?[]:"",!1))}}}return
case 6:if(null===t.stateNode)throw Error(n(162))
return void(t.stateNode.nodeValue=t.memoizedProps)
case 3:return r=t.stateNode,void(r.hydrate&&(r.hydrate=!1,ce(r.containerInfo)))
case 12:return
case 13:return null!==t.memoizedState&&(fu=ll(),xr(t.child,!0)),void Nr(t)
case 19:return void Nr(t)
case 17:return
case 23:case 24:return void xr(t,null!==t.memoizedState)}throw Error(n(163))}function Nr(e){var t=e.updateQueue
if(null!==t){e.updateQueue=null
var n=e.stateNode
null===n&&(n=e.stateNode=new Ql),t.forEach((function(t){var r=ho.bind(null,e,t)
n.has(t)||(n.add(t),t.then(r,r))}))}}function Dr(e,t){return null!==e&&(e=e.memoizedState,null===e||null!==e.dehydrated)&&(t=t.memoizedState,null!==t&&null===t.dehydrated)}function Rr(){pu=ll()+500}function Lr(){return 0!=(48&Xl)?ll():-1!==ju?ju:ju=ll()}function Mr(e){if(e=e.mode,0==(2&e))return 1
if(0==(4&e))return 99===Lt()?1:2
if(0===Tu&&(Tu=su),0!==ul.transition){0!==Au&&(Au=null!==du?du.pendingLanes:0),e=Tu
var t=4186112&~Au
return t&=-t,0===t&&(e=4186112&~e,t=e&-e,0===t&&(t=8192)),t}return e=Lt(),0!=(4&Xl)&&98===e?e=_e(12,Tu):(e=ve(e),e=_e(e,Tu)),e}function Fr(e,t,r){if(50<Eu)throw Eu=0,xu=null,Error(n(185))
if(e=Wr(e,t),null===e)return null
ke(e,t,r),e===eu&&(uu|=t,4===iu&&qr(e,nu))
var o=Lt()
1===t?0!=(8&Xl)&&0==(48&Xl)?Hr(e):(Ur(e,r),0===Xl&&(Rr(),Ut())):(0==(4&Xl)||98!==o&&99!==o||(null===Su?Su=new Set([e]):Su.add(e)),Ur(e,r)),du=e}function Wr(e,t){e.lanes|=t
var n=e.alternate
for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,n=e.alternate,null!==n&&(n.childLanes|=t),n=e,e=e.return
return 3===n.tag?n.stateNode:null}function Ur(e,t){for(var n=e.callbackNode,r=e.suspendedLanes,o=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var s=31-wa(a),l=1<<s,u=i[s]
if(-1===u){if(0==(l&r)||0!=(l&o)){u=t,he(l)
var c=ba
i[s]=10<=c?u+250:6<=c?u+5e3:-1}}else u<=t&&(e.expiredLanes|=l)
a&=~l}if(r=ye(e,e===eu?nu:0),t=ba,0===r)null!==n&&(n!==tl&&Ks(n),e.callbackNode=null,e.callbackPriority=0)
else{if(null!==n){if(e.callbackPriority===t)return
n!==tl&&Ks(n)}15===t?(n=Hr.bind(null,e),null===ol?(ol=[n],il=Gs(Ys,Bt)):ol.push(n),n=tl):14===t?n=Wt(99,Hr.bind(null,e)):(n=ge(t),n=Wt(n,Br.bind(null,e))),e.callbackPriority=t,e.callbackNode=n}}function Br(e){if(ju=-1,Au=Tu=0,0!=(48&Xl))throw Error(n(327))
var t=e.callbackNode
if(ao()&&e.callbackNode!==t)return null
var r=ye(e,e===eu?nu:0)
if(0===r)return null
var o=r,i=Xl
Xl|=16
var a=Jr()
for(eu===e&&nu===o||(Rr(),Qr(e,o));;)try{eo()
break}catch(t){Yr(e,t)}if(Ht(),Jl.current=a,Xl=i,null!==tu?o=0:(eu=null,nu=0,o=iu),0!=(su&uu))Qr(e,0)
else if(0!==o){if(2===o&&(Xl|=64,e.hydrate&&(e.hydrate=!1,_t(e.containerInfo)),r=me(e),0!==r&&(o=Zr(e,r))),1===o)throw t=au,Qr(e,0),qr(e,r),Ur(e,ll()),t
switch(e.finishedWork=e.current.alternate,e.finishedLanes=r,o){case 0:case 1:throw Error(n(345))
case 2:ro(e)
break
case 3:if(qr(e,r),(62914560&r)===r&&(o=fu+500-ll(),10<o)){if(0!==ye(e,0))break
if(i=e.suspendedLanes,(i&r)!==r){Lr(),e.pingedLanes|=e.suspendedLanes&i
break}e.timeoutHandle=Is(ro.bind(null,e),o)
break}ro(e)
break
case 4:if(qr(e,r),(4186112&r)===r)break
for(o=e.eventTimes,i=-1;0<r;){var s=31-wa(r)
a=1<<s,s=o[s],s>i&&(i=s),r&=~a}if(r=i,r=ll()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Yl(r/1960))-r,10<r){e.timeoutHandle=Is(ro.bind(null,e),r)
break}ro(e)
break
case 5:ro(e)
break
default:throw Error(n(329))}}return Ur(e,ll()),e.callbackNode===t?Br.bind(null,e):null}function qr(e,t){for(t&=~cu,t&=~uu,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-wa(t),r=1<<n
e[n]=-1,t&=~r}}function Hr(e){if(0!=(48&Xl))throw Error(n(327))
if(ao(),e===eu&&0!=(e.expiredLanes&nu)){var t=nu,r=Zr(e,t)
0!=(su&uu)&&(t=ye(e,t),r=Zr(e,t))}else t=ye(e,0),r=Zr(e,t)
if(0!==e.tag&&2===r&&(Xl|=64,e.hydrate&&(e.hydrate=!1,_t(e.containerInfo)),t=me(e),0!==t&&(r=Zr(e,t))),1===r)throw r=au,Qr(e,0),qr(e,t),Ur(e,ll()),r
return e.finishedWork=e.current.alternate,e.finishedLanes=t,ro(e),Ur(e,ll()),null}function Vr(){if(null!==Su){var e=Su
Su=null,e.forEach((function(e){e.expiredLanes|=24&e.pendingLanes,Ur(e,ll())}))}Ut()}function $r(e,t){var n=Xl
Xl|=1
try{return e(t)}finally{Xl=n,0===Xl&&(Rr(),Ut())}}function Gr(e,t){var n=Xl
Xl&=-2,Xl|=8
try{return e(t)}finally{Xl=n,0===Xl&&(Rr(),Ut())}}function Kr(e,t){It(ou,ru),ru|=t,su|=t}function Qr(e,t){e.finishedWork=null,e.finishedLanes=0
var n=e.timeoutHandle
if(-1!==n&&(e.timeoutHandle=-1,Ps(n)),null!==tu)for(n=tu.return;null!==n;){var r=n
switch(r.tag){case 1:r=r.type.childContextTypes,null!=r&&(zt(Bs),zt(Us))
break
case 3:pn(),zt(Bs),zt(Us),Sn()
break
case 5:vn(r)
break
case 4:pn()
break
case 13:case 19:zt(El)
break
case 10:Vt(r)
break
case 23:case 24:ru=ou.current,zt(ou)}n=n.return}eu=e,tu=mo(e.current,null),nu=ru=su=t,iu=0,au=null,cu=uu=lu=0}function Yr(e,t){for(;;){var n=tu
try{if(Ht(),zl.current=Ll,Dl){for(var r=Cl.memoizedState;null!==r;){var o=r.queue
null!==o&&(o.pending=null),r=r.next}Dl=!1}if(Pl=0,Nl=Ol=Cl=null,Rl=!1,Zl.current=null,null===n||null===n.return){iu=1,au=t,tu=null
break}e:{var i=e,a=n.return,s=n,l=t
if(t=nu,s.flags|=2048,s.firstEffect=s.lastEffect=null,null!==l&&"object"==typeof l&&"function"==typeof l.then){var u=l
if(0==(2&s.mode)){var c=s.alternate
c?(s.updateQueue=c.updateQueue,s.memoizedState=c.memoizedState,s.lanes=c.lanes):(s.updateQueue=null,s.memoizedState=null)}var d=0!=(1&El.current),f=a
do{var p
if(p=13===f.tag){var v=f.memoizedState
if(null!==v)p=null!==v.dehydrated
else{var g=f.memoizedProps
p=void 0!==g.fallback&&(!0!==g.unstable_avoidThisFallback||!d)}}if(p){var y=f.updateQueue
if(null===y){var m=new Set
m.add(u),f.updateQueue=m}else y.add(u)
if(0==(2&f.mode)){if(f.flags|=64,s.flags|=16384,s.flags&=-2981,1===s.tag)if(null===s.alternate)s.tag=17
else{var _=Jt(-1,1)
_.tag=2,Zt(s,_)}s.lanes|=1
break e}l=void 0,s=t
var b=i.pingCache
if(null===b?(b=i.pingCache=new Kl,l=new Set,b.set(u,l)):(l=b.get(u),void 0===l&&(l=new Set,b.set(u,l))),!l.has(s)){l.add(s)
var w=po.bind(null,i,u,s)
u.then(w,w)}f.flags|=4096,f.lanes=t
break e}f=f.return}while(null!==f)
l=Error((h(s.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.")}5!==iu&&(iu=2),l=mr(l,s),f=a
do{switch(f.tag){case 3:i=l,f.flags|=4096,t&=-t,f.lanes|=t
var k=br(f,i,t)
Xt(f,k)
break e
case 1:i=l
var S=f.type,E=f.stateNode
if(0==(64&f.flags)&&("function"==typeof S.getDerivedStateFromError||null!==E&&"function"==typeof E.componentDidCatch&&(null===yu||!yu.has(E)))){f.flags|=4096,t&=-t,f.lanes|=t
var x=wr(f,i,t)
Xt(f,x)
break e}}f=f.return}while(null!==f)}no(n)}catch(e){t=e,tu===n&&null!==n&&(tu=n=n.return)
continue}break}}function Jr(){var e=Jl.current
return Jl.current=Ll,null===e?Ll:e}function Zr(e,t){var r=Xl
Xl|=16
var o=Jr()
for(eu===e&&nu===t||Qr(e,t);;)try{Xr()
break}catch(t){Yr(e,t)}if(Ht(),Xl=r,Jl.current=o,null!==tu)throw Error(n(261))
return eu=null,nu=0,iu}function Xr(){for(;null!==tu;)to(tu)}function eo(){for(;null!==tu&&!nl();)to(tu)}function to(e){var t=Pu(e.alternate,e,ru)
e.memoizedProps=e.pendingProps,null===t?no(e):tu=t,Zl.current=null}function no(e){var t=e
do{var n=t.alternate
if(e=t.return,0==(2048&t.flags)){if(n=gr(n,t,ru),null!==n)return void(tu=n)
if(n=t,24!==n.tag&&23!==n.tag||null===n.memoizedState||0!=(1073741824&ru)||0==(4&n.mode)){for(var r=0,o=n.child;null!==o;)r|=o.lanes|o.childLanes,o=o.sibling
n.childLanes=r}null!==e&&0==(2048&e.flags)&&(null===e.firstEffect&&(e.firstEffect=t.firstEffect),null!==t.lastEffect&&(null!==e.lastEffect&&(e.lastEffect.nextEffect=t.firstEffect),e.lastEffect=t.lastEffect),1<t.flags&&(null!==e.lastEffect?e.lastEffect.nextEffect=t:e.firstEffect=t,e.lastEffect=t))}else{if(n=yr(t),null!==n)return n.flags&=2047,void(tu=n)
null!==e&&(e.firstEffect=e.lastEffect=null,e.flags|=2048)}if(t=t.sibling,null!==t)return void(tu=t)
tu=t=e}while(null!==t)
0===iu&&(iu=5)}function ro(e){var t=Lt()
return Ft(99,oo.bind(null,e,t)),null}function oo(e,t){do{ao()}while(null!==_u)
if(0!=(48&Xl))throw Error(n(327))
var r=e.finishedWork
if(null===r)return null
if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(n(177))
e.callbackNode=null
var o=r.lanes|r.childLanes,i=o,a=e.pendingLanes&~i
e.pendingLanes=i,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=i,e.mutableReadLanes&=i,e.entangledLanes&=i,i=e.entanglements
for(var s=e.eventTimes,l=e.expirationTimes;0<a;){var u=31-wa(a),c=1<<u
i[u]=0,s[u]=-1,l[u]=-1,a&=~c}if(null!==Su&&0==(24&o)&&Su.has(e)&&Su.delete(e),e===eu&&(tu=eu=null,nu=0),1<r.flags?null!==r.lastEffect?(r.lastEffect.nextEffect=r,o=r.firstEffect):o=r:o=r.firstEffect,null!==o){if(i=Xl,Xl|=32,Zl.current=null,As=ja,s=nt(),rt(s)){if("selectionStart"in s)l={start:s.selectionStart,end:s.selectionEnd}
else e:if(l=(l=s.ownerDocument)&&l.defaultView||window,(c=l.getSelection&&l.getSelection())&&0!==c.rangeCount){l=c.anchorNode,a=c.anchorOffset,u=c.focusNode,c=c.focusOffset
try{l.nodeType,u.nodeType}catch(e){l=null
break e}var d=0,f=-1,p=-1,h=0,v=0,g=s,y=null
t:for(;;){for(var m;g!==l||0!==a&&3!==g.nodeType||(f=d+a),g!==u||0!==c&&3!==g.nodeType||(p=d+c),3===g.nodeType&&(d+=g.nodeValue.length),null!==(m=g.firstChild);)y=g,g=m
for(;;){if(g===s)break t
if(y===l&&++h===a&&(f=d),y===u&&++v===c&&(p=d),null!==(m=g.nextSibling))break
g=y,y=g.parentNode}g=m}l=-1===f||-1===p?null:{start:f,end:p}}else l=null
l=l||{start:0,end:0}}else l=null
zs={focusedElem:s,selectionRange:l},ja=!1,zu=null,Iu=!1,hu=o
do{try{io()}catch(e){if(null===hu)throw Error(n(330))
fo(hu,e),hu=hu.nextEffect}}while(null!==hu)
zu=null,hu=o
do{try{for(s=e;null!==hu;){var _=hu.flags
if(16&_&&_i(hu.stateNode,""),128&_){var b=hu.alternate
if(null!==b){var w=b.ref
null!==w&&("function"==typeof w?w(null):w.current=null)}}switch(1038&_){case 2:zr(hu),hu.flags&=-3
break
case 6:zr(hu),hu.flags&=-3,Or(hu.alternate,hu)
break
case 1024:hu.flags&=-1025
break
case 1028:hu.flags&=-1025,Or(hu.alternate,hu)
break
case 4:Or(hu.alternate,hu)
break
case 8:l=hu,Cr(s,l)
var k=l.alternate
Tr(l),null!==k&&Tr(k)}hu=hu.nextEffect}}catch(e){if(null===hu)throw Error(n(330))
fo(hu,e),hu=hu.nextEffect}}while(null!==hu)
if(w=zs,b=nt(),_=w.focusedElem,s=w.selectionRange,b!==_&&_&&_.ownerDocument&&tt(_.ownerDocument.documentElement,_)){null!==s&&rt(_)&&(b=s.start,w=s.end,void 0===w&&(w=b),"selectionStart"in _?(_.selectionStart=b,_.selectionEnd=Math.min(w,_.value.length)):(w=(b=_.ownerDocument||document)&&b.defaultView||window,w.getSelection&&(w=w.getSelection(),l=_.textContent.length,k=Math.min(s.start,l),s=void 0===s.end?k:Math.min(s.end,l),!w.extend&&k>s&&(l=s,s=k,k=l),l=et(_,k),a=et(_,s),l&&a&&(1!==w.rangeCount||w.anchorNode!==l.node||w.anchorOffset!==l.offset||w.focusNode!==a.node||w.focusOffset!==a.offset)&&(b=b.createRange(),b.setStart(l.node,l.offset),w.removeAllRanges(),k>s?(w.addRange(b),w.extend(a.node,a.offset)):(b.setEnd(a.node,a.offset),w.addRange(b)))))),b=[]
for(w=_;w=w.parentNode;)1===w.nodeType&&b.push({element:w,left:w.scrollLeft,top:w.scrollTop})
for("function"==typeof _.focus&&_.focus(),_=0;_<b.length;_++)w=b[_],w.element.scrollLeft=w.left,w.element.scrollTop=w.top}ja=!!As,zs=As=null,e.current=r,hu=o
do{try{for(_=e;null!==hu;){var S=hu.flags
if(36&S&&Er(_,hu.alternate,hu),128&S){b=void 0
var E=hu.ref
if(null!==E){var x=hu.stateNode
switch(hu.tag){case 5:b=x
break
default:b=x}"function"==typeof E?E(b):E.current=b}}hu=hu.nextEffect}}catch(e){if(null===hu)throw Error(n(330))
fo(hu,e),hu=hu.nextEffect}}while(null!==hu)
hu=null,rl(),Xl=i}else e.current=r
if(mu)mu=!1,_u=e,bu=t
else for(hu=o;null!==hu;)t=hu.nextEffect,hu.nextEffect=null,8&hu.flags&&(S=hu,S.sibling=null,S.stateNode=null),hu=t
if(o=e.pendingLanes,0===o&&(yu=null),1===o?e===xu?Eu++:(Eu=0,xu=e):Eu=0,r=r.stateNode,Vs&&"function"==typeof Vs.onCommitFiberRoot)try{Vs.onCommitFiberRoot(Hs,r,void 0,64==(64&r.current.flags))}catch(e){}if(Ur(e,ll()),vu)throw vu=!1,e=gu,gu=null,e
return 0!=(8&Xl)||Ut(),null}function io(){for(;null!==hu;){var e=hu.alternate
Iu||null===zu||(0!=(8&hu.flags)?ee(hu,zu)&&(Iu=!0):13===hu.tag&&Dr(e,hu)&&ee(hu,zu)&&(Iu=!0))
var t=hu.flags
0!=(256&t)&&Sr(e,hu),0==(512&t)||mu||(mu=!0,Wt(97,(function(){return ao(),null}))),hu=hu.nextEffect}}function ao(){if(90!==bu){var e=97<bu?97:bu
return bu=90,Ft(e,uo)}return!1}function so(e,t){wu.push(t,e),mu||(mu=!0,Wt(97,(function(){return ao(),null})))}function lo(e,t){ku.push(t,e),mu||(mu=!0,Wt(97,(function(){return ao(),null})))}function uo(){if(null===_u)return!1
var e=_u
if(_u=null,0!=(48&Xl))throw Error(n(331))
var t=Xl
Xl|=32
var r=ku
ku=[]
for(var o=0;o<r.length;o+=2){var i=r[o],a=r[o+1],s=i.destroy
if(i.destroy=void 0,"function"==typeof s)try{s()}catch(e){if(null===a)throw Error(n(330))
fo(a,e)}}for(r=wu,wu=[],o=0;o<r.length;o+=2){i=r[o],a=r[o+1]
try{var l=i.create
i.destroy=l()}catch(e){if(null===a)throw Error(n(330))
fo(a,e)}}for(l=e.current.firstEffect;null!==l;)e=l.nextEffect,l.nextEffect=null,8&l.flags&&(l.sibling=null,l.stateNode=null),l=e
return Xl=t,Ut(),!0}function co(e,t,n){t=mr(n,t),t=br(e,t,1),Zt(e,t),t=Lr(),e=Wr(e,1),null!==e&&(ke(e,1,t),Ur(e,t))}function fo(e,t){if(3===e.tag)co(e,e,t)
else for(var n=e.return;null!==n;){if(3===n.tag){co(n,e,t)
break}if(1===n.tag){var r=n.stateNode
if("function"==typeof n.type.getDerivedStateFromError||"function"==typeof r.componentDidCatch&&(null===yu||!yu.has(r))){e=mr(t,e)
var o=wr(n,e,1)
if(Zt(n,o),o=Lr(),n=Wr(n,1),null!==n)ke(n,1,o),Ur(n,o)
else if("function"==typeof r.componentDidCatch&&(null===yu||!yu.has(r)))try{r.componentDidCatch(t,e)}catch(e){}break}}n=n.return}}function po(e,t,n){var r=e.pingCache
null!==r&&r.delete(t),t=Lr(),e.pingedLanes|=e.suspendedLanes&n,eu===e&&(nu&n)===n&&(4===iu||3===iu&&(62914560&nu)===nu&&500>ll()-fu?Qr(e,0):cu|=n),Ur(e,t)}function ho(e,t){var n=e.stateNode
null!==n&&n.delete(t),t=0,0===t&&(t=e.mode,0==(2&t)?t=1:0==(4&t)?t=99===Lt()?1:2:(0===Tu&&(Tu=su),t=be(62914560&~Tu),0===t&&(t=4194304))),n=Lr(),e=Wr(e,t),null!==e&&(ke(e,t,n),Ur(e,n))}function vo(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.flags=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childLanes=this.lanes=0,this.alternate=null}function go(e){return e=e.prototype,!(!e||!e.isReactComponent)}function yo(e){if("function"==typeof e)return go(e)?1:0
if(null!=e){if(e=e.$$typeof,e===ni)return 11
if(e===ii)return 14}return 2}function mo(e,t){var n=e.alternate
return null===n?(n=Cu(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function _o(e,t,r,o,i,a){var s=2
if(o=e,"function"==typeof e)go(e)&&(s=1)
else if("string"==typeof e)s=5
else e:switch(e){case Jo:return bo(r.children,i,a,t)
case ui:s=8,i|=16
break
case Zo:s=8,i|=1
break
case Xo:return e=Cu(12,r,t,8|i),e.elementType=Xo,e.type=Xo,e.lanes=a,e
case ri:return e=Cu(13,r,t,i),e.type=ri,e.elementType=ri,e.lanes=a,e
case oi:return e=Cu(19,r,t,i),e.elementType=oi,e.lanes=a,e
case ci:return wo(r,i,a,t)
case di:return e=Cu(24,r,t,i),e.elementType=di,e.lanes=a,e
default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case ei:s=10
break e
case ti:s=9
break e
case ni:s=11
break e
case ii:s=14
break e
case ai:s=16,o=null
break e
case si:s=22
break e}throw Error(n(130,null==e?e:typeof e,""))}return t=Cu(s,r,t,i),t.elementType=e,t.type=o,t.lanes=a,t}function bo(e,t,n,r){return e=Cu(7,e,r,t),e.lanes=n,e}function wo(e,t,n,r){return e=Cu(23,e,r,t),e.elementType=ci,e.lanes=n,e}function ko(e,t,n){return e=Cu(6,e,null,t),e.lanes=n,e}function So(e,t,n){return t=Cu(4,null!==e.children?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Eo(e,t,n){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=0,this.eventTimes=we(0),this.expirationTimes=we(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=we(0),this.mutableSourceEagerHydrationData=null}function xo(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null
return{$$typeof:Yo,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}function jo(e,t,r,o){var i=t.current,a=Lr(),s=Mr(i)
e:if(r){r=r._reactInternals
t:{if(Q(r)!==r||1!==r.tag)throw Error(n(170))
var l=r
do{switch(l.tag){case 3:l=l.stateNode.context
break t
case 1:if(Ct(l.type)){l=l.stateNode.__reactInternalMemoizedMergedChildContext
break t}}l=l.return}while(null!==l)
throw Error(n(171))}if(1===r.tag){var u=r.type
if(Ct(u)){r=Nt(r,u,l)
break e}}r=l}else r=Ws
return null===t.context?t.context=r:t.pendingContext=r,t=Jt(a,s),t.payload={element:e},o=void 0===o?null:o,null!==o&&(t.callback=o),Zt(i,t),Fr(i,s,a),s}function To(e){if(e=e.current,!e.child)return null
switch(e.child.tag){case 5:default:return e.child.stateNode}}function Ao(e,t){if(e=e.memoizedState,null!==e&&null!==e.dehydrated){var n=e.retryLane
e.retryLane=0!==n&&n<t?n:t}}function zo(e,t){Ao(e,t),(e=e.alternate)&&Ao(e,t)}function Io(e){return e=X(e),null===e?null:e.stateNode}function Po(e){return null}function Co(e,t,n){var r=null!=n&&null!=n.hydrationOptions&&n.hydrationOptions.mutableSources||null
if(n=new Eo(e,t,null!=n&&!0===n.hydrate),t=Cu(3,null,null,2===t?7:1===t?3:0),n.current=t,t.stateNode=n,Qt(t),e[Rs]=n.current,lt(8===e.nodeType?e.parentNode:e),r)for(e=0;e<r.length;e++){t=r[e]
var o=t._getVersion
o=o(t._source),null==n.mutableSourceEagerHydrationData?n.mutableSourceEagerHydrationData=[t,o]:n.mutableSourceEagerHydrationData.push(t,o)}this._internalRoot=n}function Oo(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function No(e,t){if(t||(t=e?9===e.nodeType?e.documentElement:e.firstChild:null,t=!(!t||1!==t.nodeType||!t.hasAttribute("data-reactroot"))),!t)for(var n;n=e.lastChild;)e.removeChild(n)
return new Co(e,0,t?{hydrate:!0}:void 0)}function Do(e,t,n,r,o){var i=n._reactRootContainer
if(i){var a=i._internalRoot
if("function"==typeof o){var s=o
o=function(){var e=To(a)
s.call(e)}}jo(t,a,e,o)}else{if(i=n._reactRootContainer=No(n,r),a=i._internalRoot,"function"==typeof o){var l=o
o=function(){var e=To(a)
l.call(e)}}Gr((function(){jo(t,a,e,o)}))}return To(a)}function Ro(e,t){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null
if(!Oo(t))throw Error(n(200))
return xo(e,t,null,r)}if(!t)throw Error(n(227))
var Lo=new Set,Mo={},Fo=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),Wo=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Uo=Object.prototype.hasOwnProperty,Bo={},qo={},Ho={}
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){Ho[e]=new l(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0]
Ho[t]=new l(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){Ho[e]=new l(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){Ho[e]=new l(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){Ho[e]=new l(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){Ho[e]=new l(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){Ho[e]=new l(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){Ho[e]=new l(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){Ho[e]=new l(e,5,!1,e.toLowerCase(),null,!1,!1)}))
var Vo=/[\-:]([a-z])/g,$o=function(e){return e[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(Vo,$o)
Ho[t]=new l(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(Vo,$o)
Ho[t]=new l(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(Vo,$o)
Ho[t]=new l(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){Ho[e]=new l(e,1,!1,e.toLowerCase(),null,!1,!1)})),Ho.xlinkHref=new l("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){Ho[e]=new l(e,1,!1,e.toLowerCase(),null,!0,!0)}))
var Go=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.assign,Ko=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qo=60103,Yo=60106,Jo=60107,Zo=60108,Xo=60114,ei=60109,ti=60110,ni=60112,ri=60113,oi=60120,ii=60115,ai=60116,si=60121,li=60128,ui=60129,ci=60130,di=60131
if("function"==typeof Symbol&&Symbol.for){var fi=Symbol.for
Qo=fi("react.element"),Yo=fi("react.portal"),Jo=fi("react.fragment"),Zo=fi("react.strict_mode"),Xo=fi("react.profiler"),ei=fi("react.provider"),ti=fi("react.context"),ni=fi("react.forward_ref"),ri=fi("react.suspense"),oi=fi("react.suspense_list"),ii=fi("react.memo"),ai=fi("react.lazy"),si=fi("react.block"),fi("react.scope"),li=fi("react.opaque.id"),ui=fi("react.debug_trace_mode"),ci=fi("react.offscreen"),di=fi("react.legacy_hidden")}var pi,hi,vi,gi="function"==typeof Symbol&&Symbol.iterator,yi=!1,mi=(vi=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t
else{for(hi=hi||document.createElement("div"),hi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=hi.firstChild;e.firstChild;)e.removeChild(e.firstChild)
for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return vi(e,t,n,r)}))}:vi),_i=function(e,t){if(t){var n=e.firstChild
if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t},bi={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},wi=["Webkit","ms","Moz","O"]
Object.keys(bi).forEach((function(e){wi.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),bi[t]=bi[e]}))}))
var ki=Go({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}),Si=null,Ei=null,xi=null,ji=function(e,t){return e(t)},Ti=function(e,t,n,r,o){return e(t,n,r,o)},Ai=function(){},zi=ji,Ii=!1,Pi=!1,Ci=!1
if(Fo)try{var Oi={}
Object.defineProperty(Oi,"passive",{get:function(){Ci=!0}}),window.addEventListener("test",Oi,Oi),window.removeEventListener("test",Oi,Oi)}catch(vi){Ci=!1}window.invokeGuardedCallbackImpl$1=function(e,t,n,r,o,i,a,s,l){var u=Array.prototype.slice.call(arguments,3)
try{t.apply(n,u)}catch(e){this.onError(e)}}
var Ni=!1,Di=null,Ri=!1,Li=null,Mi={onError:function(e){Ni=!0,Di=e}},Fi=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Scheduler,Wi=Fi.unstable_cancelCallback,Ui=Fi.unstable_now,Bi=Fi.unstable_scheduleCallback,qi=Fi.unstable_shouldYield,Hi=Fi.unstable_requestPaint,Vi=Fi.unstable_runWithPriority,$i=Fi.unstable_getCurrentPriorityLevel,Gi=Fi.unstable_ImmediatePriority,Ki=Fi.unstable_UserBlockingPriority,Qi=Fi.unstable_NormalPriority,Yi=Fi.unstable_LowPriority,Ji=Fi.unstable_IdlePriority,Zi=!1,Xi=[],ea=null,ta=null,na=null,ra=new Map,oa=new Map,ia=[],aa="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" "),sa={animationend:de("Animation","AnimationEnd"),animationiteration:de("Animation","AnimationIteration"),animationstart:de("Animation","AnimationStart"),transitionend:de("Transition","TransitionEnd")},la={},ua={}
Fo&&(ua=document.createElement("div").style,"AnimationEvent"in window||(delete sa.animationend.animation,delete sa.animationiteration.animation,delete sa.animationstart.animation),"TransitionEvent"in window||delete sa.transitionend.transition)
var ca=fe("animationend"),da=fe("animationiteration"),fa=fe("animationstart"),pa=fe("transitionend"),ha=new Map,va=new Map,ga=["abort","abort",ca,"animationEnd",da,"animationIteration",fa,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",pa,"transitionEnd","waiting","waiting"]
Ui()
var ya,ma,_a,ba=8,wa=Math.clz32?Math.clz32:Se,ka=Math.log,Sa=Math.LN2,Ea=Ki,xa=Vi,ja=!0,Ta=null,Aa=null,za=null,Ia={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pa=Ce(Ia),Ca=Go({},Ia,{view:0,detail:0}),Oa=Ce(Ca),Na=Go({},Ca,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ne,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_a&&(_a&&"mousemove"===e.type?(ya=e.screenX-_a.screenX,ma=e.screenY-_a.screenY):ma=ya=0,_a=e),ya)},movementY:function(e){return"movementY"in e?e.movementY:ma}}),Da=Ce(Na),Ra=Go({},Na,{dataTransfer:0}),La=Ce(Ra),Ma=Go({},Ca,{relatedTarget:0}),Fa=Ce(Ma),Wa=Go({},Ia,{animationName:0,elapsedTime:0,pseudoElement:0}),Ua=Ce(Wa),Ba=Go({},Ia,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),qa=Ce(Ba),Ha=Go({},Ia,{data:0}),Va=Ce(Ha),$a=Va,Ga={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ka={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qa={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"},Ya=Go({},Ca,{key:function(e){if(e.key){var t=Ga[e.key]||e.key
if("Unidentified"!==t)return t}return"keypress"===e.type?(e=ze(e),13===e?"Enter":String.fromCharCode(e)):"keydown"===e.type||"keyup"===e.type?Ka[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ne,charCode:function(e){return"keypress"===e.type?ze(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?ze(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),Ja=Ce(Ya),Za=Go({},Na,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xa=Ce(Za),es=Go({},Ca,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ne}),ts=Ce(es),ns=Go({},Ia,{propertyName:0,elapsedTime:0,pseudoElement:0}),rs=Ce(ns),os=Go({},Na,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),is=Ce(os),as=[9,13,27,32],ss=Fo&&"CompositionEvent"in window,ls=null
Fo&&"documentMode"in document&&(ls=document.documentMode)
var us=Fo&&"TextEvent"in window&&!ls,cs=Fo&&(!ss||ls&&8<ls&&11>=ls),ds=String.fromCharCode(32),fs=!1,ps=!1,hs={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0},vs=null,gs=null,ys=!1
Fo&&(ys=We("input")&&(!document.documentMode||9<document.documentMode))
var ms="function"==typeof Object.is?Object.is:Je,_s=Object.prototype.hasOwnProperty,bs=Fo&&"documentMode"in document&&11>=document.documentMode,ws=null,ks=null,Ss=null,Es=!1
pe("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0),pe("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1),pe(ga,2),function(e,t){for(var n=0;n<e.length;n++)va.set(e[n],t)}("change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),0),o("onMouseEnter",["mouseout","mouseover"]),o("onMouseLeave",["mouseout","mouseover"]),o("onPointerEnter",["pointerout","pointerover"]),o("onPointerLeave",["pointerout","pointerover"]),r("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),r("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),r("onBeforeInput",["compositionend","keypress","textInput","paste"]),r("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),r("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),r("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "))
var xs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),js=new Set("cancel close invalid load scroll toggle".split(" ").concat(xs)),Ts="_reactListening"+Math.random().toString(36).slice(2),As=null,zs=null,Is="function"==typeof setTimeout?setTimeout:void 0,Ps="function"==typeof clearTimeout?clearTimeout:void 0,Cs=0,Os=Math.random().toString(36).slice(2),Ns="__reactFiber$"+Os,Ds="__reactProps$"+Os,Rs="__reactContainer$"+Os,Ls="__reactEvents$"+Os,Ms=[],Fs=-1,Ws={},Us=At(Ws),Bs=At(!1),qs=Ws,Hs=null,Vs=null,$s=Vi,Gs=Bi,Ks=Wi,Qs=$i,Ys=Gi,Js=Ki,Zs=Qi,Xs=Yi,el=Ji,tl={},nl=qi,rl=void 0!==Hi?Hi:function(){},ol=null,il=null,al=!1,sl=Ui(),ll=1e4>sl?Ui:function(){return Ui()-sl},ul=Ko.ReactCurrentBatchConfig,cl=At(null),dl=null,fl=null,pl=null,hl=!1,vl=(new t.Component).refs,gl={isMounted:function(e){return!!(e=e._reactInternals)&&Q(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals
var r=Lr(),o=Mr(e),i=Jt(r,o)
i.payload=t,null!=n&&(i.callback=n),Zt(e,i),Fr(e,o,r)},enqueueReplaceState:function(e,t,n){e=e._reactInternals
var r=Lr(),o=Mr(e),i=Jt(r,o)
i.tag=1,i.payload=t,null!=n&&(i.callback=n),Zt(e,i),Fr(e,o,r)},enqueueForceUpdate:function(e,t){e=e._reactInternals
var n=Lr(),r=Mr(e),o=Jt(n,r)
o.tag=2,null!=t&&(o.callback=t),Zt(e,o),Fr(e,r,n)}},yl=Array.isArray,ml=cn(!0),_l=cn(!1),bl={},wl=At(bl),kl=At(bl),Sl=At(bl),El=At(0),xl=null,jl=null,Tl=!1,Al=[],zl=Ko.ReactCurrentDispatcher,Il=Ko.ReactCurrentBatchConfig,Pl=0,Cl=null,Ol=null,Nl=null,Dl=!1,Rl=!1,Ll={readContext:Kt,useCallback:En,useContext:En,useEffect:En,useImperativeHandle:En,useLayoutEffect:En,useMemo:En,useReducer:En,useRef:En,useState:En,useDebugValue:En,useDeferredValue:En,useTransition:En,useMutableSource:En,useOpaqueIdentifier:En,unstable_isNewReconciler:!1},Ml={readContext:Kt,useCallback:function(e,t){return Tn().memoizedState=[e,void 0===t?null:t],e},useContext:Kt,useEffect:Un,useImperativeHandle:function(e,t,n){return n=null!=n?n.concat([e]):null,Fn(4,2,Hn.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Fn(4,2,e,t)},useMemo:function(e,t){var n=Tn()
return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Tn()
return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e=r.queue={pending:null,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},e=e.dispatch=Yn.bind(null,Cl,e),[r.memoizedState,e]},useRef:Ln,useState:Dn,useDebugValue:$n,useDeferredValue:function(e){var t=Dn(e),n=t[0],r=t[1]
return Un((function(){var t=Il.transition
Il.transition=1
try{r(e)}finally{Il.transition=t}}),[e]),n},useTransition:function(){var e=Dn(!1),t=e[0]
return e=Qn.bind(null,e[1]),Ln(e),[e,t]},useMutableSource:function(e,t,n){var r=Tn()
return r.memoizedState={refs:{getSnapshot:t,setSnapshot:null},source:e,subscribe:n},On(r,e,t,n)},useOpaqueIdentifier:function(){if(Tl){var e=!1,t=kt((function(){throw e||(e=!0,r("r:"+(Cs++).toString(36))),Error(n(355))})),r=Dn(t)[1]
return 0==(2&Cl.mode)&&(Cl.flags|=516,Rn(5,(function(){r("r:"+(Cs++).toString(36))}),void 0,null)),t}return t="r:"+(Cs++).toString(36),Dn(t),t},unstable_isNewReconciler:!1},Fl={readContext:Kt,useCallback:Gn,useContext:Kt,useEffect:Bn,useImperativeHandle:Vn,useLayoutEffect:qn,useMemo:Kn,useReducer:In,useRef:Mn,useState:function(e){return In(zn)},useDebugValue:$n,useDeferredValue:function(e){var t=In(zn),n=t[0],r=t[1]
return Bn((function(){var t=Il.transition
Il.transition=1
try{r(e)}finally{Il.transition=t}}),[e]),n},useTransition:function(){var e=In(zn)[0]
return[Mn().current,e]},useMutableSource:Nn,useOpaqueIdentifier:function(){return In(zn)[0]},unstable_isNewReconciler:!1},Wl={readContext:Kt,useCallback:Gn,useContext:Kt,useEffect:Bn,useImperativeHandle:Vn,useLayoutEffect:qn,useMemo:Kn,useReducer:Pn,useRef:Mn,useState:function(e){return Pn(zn)},useDebugValue:$n,useDeferredValue:function(e){var t=Pn(zn),n=t[0],r=t[1]
return Bn((function(){var t=Il.transition
Il.transition=1
try{r(e)}finally{Il.transition=t}}),[e]),n},useTransition:function(){var e=Pn(zn)[0]
return[Mn().current,e]},useMutableSource:Nn,useOpaqueIdentifier:function(){return Pn(zn)[0]},unstable_isNewReconciler:!1},Ul=Ko.ReactCurrentOwner,Bl=!1,ql={dehydrated:null,retryLane:0},Hl=function(e,t,n,r){for(n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode)
else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child
continue}if(n===t)break
for(;null===n.sibling;){if(null===n.return||n.return===t)return
n=n.return}n.sibling.return=n.return,n=n.sibling}},Vl=function(e){},$l=function(e,t,n,r,o){var i=e.memoizedProps
if(i!==r){switch(e=t.stateNode,dn(wl.current),o=null,n){case"input":i=w(e,i),r=w(e,r),o=[]
break
case"option":i=A(e,i),r=A(e,r),o=[]
break
case"select":i=Go({},i,{value:void 0}),r=Go({},r,{value:void 0}),o=[]
break
case"textarea":i=I(e,i),r=I(e,r),o=[]
break
default:"function"!=typeof i.onClick&&"function"==typeof r.onClick&&(e.onclick=gt)}var a
for(u in M(n,r),n=null,i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&null!=i[u])if("style"===u){var s=i[u]
for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else"dangerouslySetInnerHTML"!==u&&"children"!==u&&"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(Mo.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null))
for(u in r){var l=r[u]
if(s=null!=i?i[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(null!=l||null!=s))if("style"===u)if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="")
for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(o||(o=[]),o.push(u,n)),n=l
else"dangerouslySetInnerHTML"===u?(l=l?l.__html:void 0,s=s?s.__html:void 0,null!=l&&s!==l&&(o=o||[]).push(u,l)):"children"===u?"string"!=typeof l&&"number"!=typeof l||(o=o||[]).push(u,""+l):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&(Mo.hasOwnProperty(u)?(null!=l&&"onScroll"===u&&st("scroll",e),o||s===l||(o=[])):"object"==typeof l&&null!==l&&l.$$typeof===li?l.toString():(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n)
var u=o;(t.updateQueue=u)&&(t.flags|=4)}},Gl=function(e,t,n,r){n!==r&&(t.flags|=4)},Kl="function"==typeof WeakMap?WeakMap:Map,Ql="function"==typeof WeakSet?WeakSet:Set,Yl=Math.ceil,Jl=Ko.ReactCurrentDispatcher,Zl=Ko.ReactCurrentOwner,Xl=0,eu=null,tu=null,nu=0,ru=0,ou=At(0),iu=0,au=null,su=0,lu=0,uu=0,cu=0,du=null,fu=0,pu=1/0,hu=null,vu=!1,gu=null,yu=null,mu=!1,_u=null,bu=90,wu=[],ku=[],Su=null,Eu=0,xu=null,ju=-1,Tu=0,Au=0,zu=null,Iu=!1,Pu=function(e,t,r){var o=t.lanes
if(null!==e)if(e.memoizedProps!==t.pendingProps||Bs.current)Bl=!0
else{if(0==(r&o)){switch(Bl=!1,t.tag){case 3:ar(t),kn()
break
case 5:hn(t)
break
case 1:Ct(t.type)&&Dt(t)
break
case 4:fn(t,t.stateNode.containerInfo)
break
case 10:o=t.memoizedProps.value
var i=t.type._context
It(cl,i._currentValue),i._currentValue=o
break
case 13:if(null!==t.memoizedState)return 0!=(r&t.child.childLanes)?sr(e,t,r):(It(El,1&El.current),t=hr(e,t,r),null!==t?t.sibling:null)
It(El,1&El.current)
break
case 19:if(o=0!=(r&t.childLanes),0!=(64&e.flags)){if(o)return pr(e,t,r)
t.flags|=64}if(i=t.memoizedState,null!==i&&(i.rendering=null,i.tail=null,i.lastEffect=null),It(El,El.current),o)break
return null
case 23:case 24:return t.lanes=0,tr(e,t,r)}return hr(e,t,r)}Bl=0!=(16384&e.flags)}else Bl=!1
switch(t.lanes=0,t.tag){case 2:if(o=t.type,null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,i=Pt(t,Us.current),Gt(t,r),i=jn(null,t,o,e,i,r),t.flags|=1,"object"==typeof i&&null!==i&&"function"==typeof i.render&&void 0===i.$$typeof){if(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ct(o)){var a=!0
Dt(t)}else a=!1
t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,Qt(t)
var s=o.getDerivedStateFromProps
"function"==typeof s&&nn(t,o,s,e),i.updater=gl,t.stateNode=i,i._reactInternals=t,sn(t,o,e,r),t=ir(null,t,o,!0,a,r)}else t.tag=0,Jn(null,t,i,r),t=t.child
return t
case 16:i=t.elementType
e:{switch(null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,a=i._init,i=a(i._payload),t.type=i,a=t.tag=yo(i),e=qt(i,e),a){case 0:t=rr(null,t,i,e,r)
break e
case 1:t=or(null,t,i,e,r)
break e
case 11:t=Zn(null,t,i,e,r)
break e
case 14:t=Xn(null,t,i,qt(i.type,e),o,r)
break e}throw Error(n(306,i,""))}return t
case 0:return o=t.type,i=t.pendingProps,i=t.elementType===o?i:qt(o,i),rr(e,t,o,i,r)
case 1:return o=t.type,i=t.pendingProps,i=t.elementType===o?i:qt(o,i),or(e,t,o,i,r)
case 3:if(ar(t),o=t.updateQueue,null===e||null===o)throw Error(n(282))
if(o=t.pendingProps,i=t.memoizedState,i=null!==i?i.element:null,Yt(e,t),en(t,o,null,r),o=t.memoizedState.element,o===i)kn(),t=hr(e,t,r)
else{if(i=t.stateNode,(a=i.hydrate)&&(jl=bt(t.stateNode.containerInfo.firstChild),xl=t,a=Tl=!0),a){if(e=i.mutableSourceEagerHydrationData,null!=e)for(i=0;i<e.length;i+=2)a=e[i],a._workInProgressVersionPrimary=e[i+1],Al.push(a)
for(r=_l(t,null,o,r),t.child=r;r;)r.flags=-3&r.flags|1024,r=r.sibling}else Jn(e,t,o,r),kn()
t=t.child}return t
case 5:return hn(t),null===e&&_n(t),o=t.type,i=t.pendingProps,a=null!==e?e.memoizedProps:null,s=i.children,mt(o,i)?s=null:null!==a&&mt(o,a)&&(t.flags|=16),nr(e,t),Jn(e,t,s,r),t.child
case 6:return null===e&&_n(t),null
case 13:return sr(e,t,r)
case 4:return fn(t,t.stateNode.containerInfo),o=t.pendingProps,null===e?t.child=ml(t,null,o,r):Jn(e,t,o,r),t.child
case 11:return o=t.type,i=t.pendingProps,i=t.elementType===o?i:qt(o,i),Zn(e,t,o,i,r)
case 7:return Jn(e,t,t.pendingProps,r),t.child
case 8:case 12:return Jn(e,t,t.pendingProps.children,r),t.child
case 10:e:{o=t.type._context,i=t.pendingProps,s=t.memoizedProps,a=i.value
var l=t.type._context
if(It(cl,l._currentValue),l._currentValue=a,null!==s)if(l=s.value,a=ms(l,a)?0:0|("function"==typeof o._calculateChangedBits?o._calculateChangedBits(l,a):1073741823),0===a){if(s.children===i.children&&!Bs.current){t=hr(e,t,r)
break e}}else for(l=t.child,null!==l&&(l.return=t);null!==l;){var u=l.dependencies
if(null!==u){s=l.child
for(var c=u.firstContext;null!==c;){if(c.context===o&&0!=(c.observedBits&a)){1===l.tag&&(c=Jt(-1,r&-r),c.tag=2,Zt(l,c)),l.lanes|=r,c=l.alternate,null!==c&&(c.lanes|=r),$t(l.return,r),u.lanes|=r
break}c=c.next}}else s=10===l.tag&&l.type===t.type?null:l.child
if(null!==s)s.return=l
else for(s=l;null!==s;){if(s===t){s=null
break}if(l=s.sibling,null!==l){l.return=s.return,s=l
break}s=s.return}l=s}Jn(e,t,i.children,r),t=t.child}return t
case 9:return i=t.type,a=t.pendingProps,o=a.children,Gt(t,r),i=Kt(i,a.unstable_observedBits),o=o(i),t.flags|=1,Jn(e,t,o,r),t.child
case 14:return i=t.type,a=qt(i,t.pendingProps),a=qt(i.type,a),Xn(e,t,i,a,o,r)
case 15:return er(e,t,t.type,t.pendingProps,o,r)
case 17:return o=t.type,i=t.pendingProps,i=t.elementType===o?i:qt(o,i),null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2),t.tag=1,Ct(o)?(e=!0,Dt(t)):e=!1,Gt(t,r),on(t,o,i),sn(t,o,i,r),ir(null,t,o,!0,e,r)
case 19:return pr(e,t,r)
case 23:case 24:return tr(e,t,r)}throw Error(n(156,t.tag))},Cu=function(e,t,n,r){return new vo(e,t,n,r)}
Co.prototype.render=function(e){jo(e,this._internalRoot,null,null)},Co.prototype.unmount=function(){var e=this._internalRoot,t=e.containerInfo
jo(null,e,null,(function(){t[Rs]=null}))}
var Ou=function(e){if(13===e.tag){var t=Lr()
Fr(e,4,t),zo(e,4)}},Nu=function(e){if(13===e.tag){var t=Lr()
Fr(e,67108864,t),zo(e,67108864)}},Du=function(e){if(13===e.tag){var t=Lr(),n=Mr(e)
Fr(e,n,t),zo(e,n)}},Ru=function(e,t){return t()}
Si=function(e,t,r){switch(t){case"input":if(E(e,r),t=r.name,"radio"===r.type&&null!=t){for(r=e;r.parentNode;)r=r.parentNode
for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var o=r[t]
if(o!==e&&o.form===e.form){var i=jt(o)
if(!i)throw Error(n(90))
_(o),E(o,i)}}}break
case"textarea":C(e,r)
break
case"select":t=r.value,null!=t&&z(e,!!r.multiple,t,!1)}},function(e,t,n,r){ji=e,Ti=t,Ai=n,zi=r}($r,(function(e,t,n,r,o){var i=Xl
Xl|=4
try{return Ft(98,e.bind(null,t,n,r,o))}finally{Xl=i,0===Xl&&(Rr(),Ut())}}),(function(){0==(49&Xl)&&(Vr(),ao())}),(function(e,t){var n=Xl
Xl|=2
try{return e(t)}finally{Xl=n,0===Xl&&(Rr(),Ut())}}))
var Lu={Events:[Et,xt,jt,B,q,ao,{current:!1}]};(function(e){if(e={bundleType:e.bundleType,version:e.version,rendererPackageName:e.rendererPackageName,rendererConfig:e.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ko.ReactCurrentDispatcher,findHostInstanceByFiber:Io,findFiberByHostInstance:e.findFiberByHostInstance||Po,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null},"undefined"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)e=!1
else{var t=__REACT_DEVTOOLS_GLOBAL_HOOK__
if(!t.isDisabled&&t.supportsFiber)try{Hs=t.inject(e),Vs=t}catch(e){}e=!0}})({findFiberByHostInstance:St,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"}),e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lu,e.createPortal=Ro,e.findDOMNode=function(e){if(null==e)return null
if(1===e.nodeType)return e
var t=e._reactInternals
if(void 0===t){if("function"==typeof e.render)throw Error(n(188))
throw Error(n(268,Object.keys(e)))}return e=X(t),e=null===e?null:e.stateNode,e},e.flushSync=function(e,t){var n=Xl
if(0!=(48&n))return e(t)
Xl|=1
try{if(e)return Ft(99,e.bind(null,t))}finally{Xl=n,Ut()}},e.hydrate=function(e,t,r){if(!Oo(t))throw Error(n(200))
return Do(null,e,t,!0,r)},e.render=function(e,t,r){if(!Oo(t))throw Error(n(200))
return Do(null,e,t,!1,r)},e.unmountComponentAtNode=function(e){if(!Oo(e))throw Error(n(40))
return!!e._reactRootContainer&&(Gr((function(){Do(null,null,e,!1,(function(){e._reactRootContainer=null,e[Rs]=null}))})),!0)},e.unstable_batchedUpdates=$r,e.unstable_createPortal=function(e,t){return Ro(e,t,2<arguments.length&&void 0!==arguments[2]?arguments[2]:null)},e.unstable_renderSubtreeIntoContainer=function(e,t,r,o){if(!Oo(r))throw Error(n(200))
if(null==e||void 0===e._reactInternals)throw Error(n(38))
return Do(e,t,r,!1,o)},e.version="17.0.2"}(t,n(244))}()},244:function(e,t,n){e=n.nmd(e),"undefined"!=typeof process&&"true"!==process.env.OVERRIDE_PREVENTCOMMONJS&&"string"!=typeof process.versions.electron&&(e=void 0,t=void 0),global.REACT_DEBUG=!0,function(){"use strict"
!function(e){function t(e){return null===e||"object"!=typeof e?null:(e=I&&e[I]||e["@@iterator"],"function"==typeof e?e:null)}function n(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])
return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(e,t,n){this.props=e,this.context=t,this.refs=N,this.updater=n||O}function o(){}function i(e,t,n){this.props=e,this.context=t,this.refs=N,this.updater=n||O}function a(e,t,n){var r,o={},i=null,a=null
if(null!=t)for(r in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(i=""+t.key),t)L.call(t,r)&&!M.hasOwnProperty(r)&&(o[r]=t[r])
var s=arguments.length-2
if(1===s)o.children=n
else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2]
o.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)void 0===o[r]&&(o[r]=s[r])
return{$$typeof:k,type:e,key:i,ref:a,props:o,_owner:R.current}}function s(e,t){return{$$typeof:k,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function l(e){return"object"==typeof e&&null!==e&&e.$$typeof===k}function u(e){var t={"=":"=0",":":"=2"}
return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}function c(e,t){return"object"==typeof e&&null!==e&&null!=e.key?u(""+e.key):t.toString(36)}function d(e,r,o,i,a){var u=typeof e
"undefined"!==u&&"boolean"!==u||(e=null)
var f=!1
if(null===e)f=!0
else switch(u){case"string":case"number":f=!0
break
case"object":switch(e.$$typeof){case k:case S:f=!0}}if(f)return f=e,a=a(f),e=""===i?"."+c(f,0):i,Array.isArray(a)?(o="",null!=e&&(o=e.replace(F,"$&/")+"/"),d(a,r,o,"",(function(e){return e}))):null!=a&&(l(a)&&(a=s(a,o+(!a.key||f&&f.key===a.key?"":(""+a.key).replace(F,"$&/")+"/")+e)),r.push(a)),1
if(f=0,i=""===i?".":i+":",Array.isArray(e))for(var p=0;p<e.length;p++){u=e[p]
var h=i+c(u,p)
f+=d(u,r,o,h,a)}else if(h=t(e),"function"==typeof h)for(e=h.call(e),p=0;!(u=e.next()).done;)u=u.value,h=i+c(u,p++),f+=d(u,r,o,h,a)
else if("object"===u)throw r=""+e,Error(n(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r))
return f}function f(e,t,n){if(null==e)return e
var r=[],o=0
return d(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function p(e){if(-1===e._status){var t=e._result
t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result
throw e._result}function h(){var e=W.current
if(null===e)throw Error(n(321))
return e}function v(e,t){var n=e.length
e.push(t)
e:for(;;){var r=n-1>>>1,o=e[r]
if(!(void 0!==o&&0<m(o,t)))break e
e[r]=t,e[n]=o,n=r}}function g(e){return e=e[0],void 0===e?null:e}function y(e){var t=e[0]
if(void 0!==t){var n=e.pop()
if(n!==t){e[0]=n
e:for(var r=0,o=e.length;r<o;){var i=2*(r+1)-1,a=e[i],s=i+1,l=e[s]
if(void 0!==a&&0>m(a,n))void 0!==l&&0>m(l,a)?(e[r]=l,e[s]=n,r=s):(e[r]=a,e[i]=n,r=i)
else{if(!(void 0!==l&&0>m(l,n)))break e
e[r]=l,e[s]=n,r=s}}}return t}return null}function m(e,t){var n=e.sortIndex-t.sortIndex
return 0!==n?n:e.id-t.id}function _(e){for(var t=g(le);null!==t;){if(null===t.callback)y(le)
else{if(!(t.startTime<=e))break
y(le),t.sortIndex=t.expirationTime,v(se,t)}t=g(le)}}function b(e){if(he=!1,_(e),!pe)if(null!==g(se))pe=!0,K(w)
else{var t=g(le)
null!==t&&Q(b,t.startTime-e)}}function w(e,t){pe=!1,he&&(he=!1,Y()),fe=!0
var n=de
try{for(_(t),ce=g(se);null!==ce&&(!(ce.expirationTime>t)||e&&!J());){var r=ce.callback
if("function"==typeof r){ce.callback=null,de=ce.priorityLevel
var o=r(ce.expirationTime<=t)
t=B(),"function"==typeof o?ce.callback=o:ce===g(se)&&y(se),_(t)}else y(se)
ce=g(se)}if(null!==ce)var i=!0
else{var a=g(le)
null!==a&&Q(b,a.startTime-t),i=!1}return i}finally{ce=null,de=n,fe=!1}}var k=60103,S=60106
e.Fragment=60107,e.StrictMode=60108,e.Profiler=60114
var E=60109,x=60110,j=60112
e.Suspense=60113
var T=60115,A=60116
if("function"==typeof Symbol&&Symbol.for){var z=Symbol.for
k=z("react.element"),S=z("react.portal"),e.Fragment=z("react.fragment"),e.StrictMode=z("react.strict_mode"),e.Profiler=z("react.profiler"),E=z("react.provider"),x=z("react.context"),j=z("react.forward_ref"),e.Suspense=z("react.suspense"),T=z("react.memo"),A=z("react.lazy")}var I="function"==typeof Symbol&&Symbol.iterator,P=Object.prototype.hasOwnProperty,C=Object.assign||function(e,t){if(null==e)throw new TypeError("Object.assign target cannot be null or undefined")
for(var n=Object(e),r=1;r<arguments.length;r++){var o=arguments[r]
if(null!=o){var i=void 0
for(i in o=Object(o),o)P.call(o,i)&&(n[i]=o[i])}}return n},O={isMounted:function(e){return!1},enqueueForceUpdate:function(e,t,n){},enqueueReplaceState:function(e,t,n,r){},enqueueSetState:function(e,t,n,r){}},N={}
r.prototype.isReactComponent={},r.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(n(85))
this.updater.enqueueSetState(this,e,t,"setState")},r.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},o.prototype=r.prototype,z=i.prototype=new o,z.constructor=i,C(z,r.prototype),z.isPureReactComponent=!0
var D,R={current:null},L=Object.prototype.hasOwnProperty,M={key:!0,ref:!0,__self:!0,__source:!0},F=/\/+/g,W={current:null}
if("object"==typeof performance&&"function"==typeof performance.now)var U=performance,B=function(){return U.now()}
else{var q=Date,H=q.now()
B=function(){return q.now()-H}}if("undefined"==typeof window||"function"!=typeof MessageChannel){var V=null,$=null,G=function(){if(null!==V)try{var e=B()
V(!0,e),V=null}catch(e){throw setTimeout(G,0),e}},K=function(e){null!==V?setTimeout(K,0,e):(V=e,setTimeout(G,0))},Q=function(e,t){$=setTimeout(e,t)},Y=function(){clearTimeout($)},J=function(){return!1}
z=D=function(){}}else{var Z=window.setTimeout,X=window.clearTimeout
"undefined"!=typeof console&&(z=window.cancelAnimationFrame,"function"!=typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),"function"!=typeof z&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"))
var ee=!1,te=null,ne=-1,re=5,oe=0
J=function(){return B()>=oe},z=function(){},D=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):re=0<e?Math.floor(1e3/e):5}
var ie=new MessageChannel,ae=ie.port2
ie.port1.onmessage=function(){if(null!==te){var e=B()
oe=e+re
try{te(!0,e)?ae.postMessage(null):(ee=!1,te=null)}catch(e){throw ae.postMessage(null),e}}else ee=!1},K=function(e){te=e,ee||(ee=!0,ae.postMessage(null))},Q=function(e,t){ne=Z((function(){e(B())}),t)},Y=function(){X(ne),ne=-1}}var se=[],le=[],ue=1,ce=null,de=3,fe=!1,pe=!1,he=!1,ve=0
z={ReactCurrentDispatcher:W,ReactCurrentOwner:R,IsSomeRendererActing:{current:!1},ReactCurrentBatchConfig:{transition:0},assign:C,Scheduler:{__proto__:null,unstable_ImmediatePriority:1,unstable_UserBlockingPriority:2,unstable_NormalPriority:3,unstable_IdlePriority:5,unstable_LowPriority:4,unstable_runWithPriority:function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break
default:e=3}var n=de
de=e
try{return t()}finally{de=n}},unstable_next:function(e){switch(de){case 1:case 2:case 3:var t=3
break
default:t=de}var n=de
de=t
try{return e()}finally{de=n}},unstable_scheduleCallback:function(e,t,n){var r=B()
switch("object"==typeof n&&null!==n?(n=n.delay,n="number"==typeof n&&0<n?r+n:r):n=r,e){case 1:var o=-1
break
case 2:o=250
break
case 5:o=1073741823
break
case 4:o=1e4
break
default:o=5e3}return o=n+o,e={id:ue++,callback:t,priorityLevel:e,startTime:n,expirationTime:o,sortIndex:-1},n>r?(e.sortIndex=n,v(le,e),null===g(se)&&e===g(le)&&(he?Y():he=!0,Q(b,n-r))):(e.sortIndex=o,v(se,e),pe||fe||(pe=!0,K(w))),e},unstable_cancelCallback:function(e){e.callback=null},unstable_wrapCallback:function(e){var t=de
return function(){var n=de
de=t
try{return e.apply(this,arguments)}finally{de=n}}},unstable_getCurrentPriorityLevel:function(){return de},get unstable_shouldYield(){return J},unstable_requestPaint:z,unstable_continueExecution:function(){pe||fe||(pe=!0,K(w))},unstable_pauseExecution:function(){},unstable_getFirstCallbackNode:function(){return g(se)},get unstable_now(){return B},get unstable_forceFrameRate(){return D},unstable_Profiling:null},SchedulerTracing:{__proto__:null,__interactionsRef:null,__subscriberRef:null,unstable_clear:function(e){return e()},unstable_getCurrent:function(){return null},unstable_getThreadID:function(){return++ve},unstable_trace:function(e,t,n){return n()},unstable_wrap:function(e){return e},unstable_subscribe:function(e){},unstable_unsubscribe:function(e){}}},e.Children={map:f,forEach:function(e,t,n){f(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0
return f(e,(function(){t++})),t},toArray:function(e){return f(e,(function(e){return e}))||[]},only:function(e){if(!l(e))throw Error(n(143))
return e}},e.Component=r,e.PureComponent=i,e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=z,e.cloneElement=function(e,t,r){if(null==e)throw Error(n(267,e))
var o=C({},e.props),i=e.key,a=e.ref,s=e._owner
if(null!=t){if(void 0!==t.ref&&(a=t.ref,s=R.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps
for(u in t)L.call(t,u)&&!M.hasOwnProperty(u)&&(o[u]=void 0===t[u]&&void 0!==l?l[u]:t[u])}var u=arguments.length-2
if(1===u)o.children=r
else if(1<u){l=Array(u)
for(var c=0;c<u;c++)l[c]=arguments[c+2]
o.children=l}return{$$typeof:k,type:e.type,key:i,ref:a,props:o,_owner:s}},e.createContext=function(e,t){return void 0===t&&(t=null),e={$$typeof:x,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider={$$typeof:E,_context:e},e.Consumer=e},e.createElement=a,e.createFactory=function(e){var t=a.bind(null,e)
return t.type=e,t},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:j,render:e}},e.isValidElement=l,e.lazy=function(e){return{$$typeof:A,_payload:{_status:-1,_result:e},_init:p}},e.memo=function(e,t){return{$$typeof:T,type:e,compare:void 0===t?null:t}},e.useCallback=function(e,t){return h().useCallback(e,t)},e.useContext=function(e,t){return h().useContext(e,t)},e.useDebugValue=function(e,t){},e.useEffect=function(e,t){return h().useEffect(e,t)},e.useImperativeHandle=function(e,t,n){return h().useImperativeHandle(e,t,n)},e.useLayoutEffect=function(e,t){return h().useLayoutEffect(e,t)},e.useMemo=function(e,t){return h().useMemo(e,t)},e.useReducer=function(e,t,n){return h().useReducer(e,t,n)},e.useRef=function(e){return h().useRef(e)},e.useState=function(e){return h().useState(e)},e.version="17.0.2"}(t)}()},461:function(e,t,n){var r,o,i,a
e=n.nmd(e),"undefined"!=typeof process&&"true"!==process.env.OVERRIDE_PREVENTCOMMONJS&&"string"!=typeof process.versions.electron&&(e=void 0,t=void 0),a=function(t){"use strict"
var n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},n(e,t)}
function r(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var o,i,a,s=function(){return s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])
return e},s.apply(this,arguments)}
function l(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator]
if(!n)return e
var r,o,i=n.call(e),a=[]
try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a}function u(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(l(arguments[t]))
return e}!function(e){e[e.None=0]="None",e[e.Error=1]="Error",e[e.Debug=2]="Debug",e[e.Verbose=3]="Verbose"}(o||(o={})),i=t.Severity||(t.Severity={}),i.Fatal="fatal",i.Error="error",i.Warning="warning",i.Log="log",i.Info="info",i.Debug="debug",i.Critical="critical",function(e){e.fromString=function(t){switch(t){case"debug":return e.Debug
case"info":return e.Info
case"warn":case"warning":return e.Warning
case"error":return e.Error
case"fatal":return e.Fatal
case"critical":return e.Critical
case"log":default:return e.Log}}}(t.Severity||(t.Severity={})),a=t.Status||(t.Status={}),a.Unknown="unknown",a.Skipped="skipped",a.Success="success",a.RateLimit="rate_limit",a.Invalid="invalid",a.Failed="failed",function(e){e.fromHttpCode=function(t){return t>=200&&t<300?e.Success:429===t?e.RateLimit:t>=400&&t<500?e.Invalid:t>=500?e.Failed:e.Unknown}}(t.Status||(t.Status={}))
var c=function(e){function t(t){var n=this.constructor,r=e.call(this,t)||this
return r.message=t,r.name=n.prototype.constructor.name,Object.setPrototypeOf(r,n.prototype),r}return r(t,e),t}(Error)
function d(e){switch(Object.prototype.toString.call(e)){case"[object Error]":case"[object Exception]":case"[object DOMException]":return!0
default:return e instanceof Error}}function f(e){return"[object ErrorEvent]"===Object.prototype.toString.call(e)}function p(e){return"[object DOMError]"===Object.prototype.toString.call(e)}function h(e){return"[object String]"===Object.prototype.toString.call(e)}function v(e){return null===e||"object"!=typeof e&&"function"!=typeof e}function g(e){return"[object Object]"===Object.prototype.toString.call(e)}function y(e){return Boolean(e&&e.then&&"function"==typeof e.then)}var m={}
function _(){return"[object process]"===Object.prototype.toString.call("undefined"!=typeof process?process:0)?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:m}function b(){var e=_(),t=e.crypto||e.msCrypto
if(void 0!==t&&t.getRandomValues){var n=new Uint16Array(8)
t.getRandomValues(n),n[3]=4095&n[3]|16384,n[4]=16383&n[4]|32768
var r=function(e){for(var t=e.toString(16);t.length<4;)t="0"+t
return t}
return r(n[0])+r(n[1])+r(n[2])+r(n[3])+r(n[4])+r(n[5])+r(n[6])+r(n[7])}return"xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0,n="x"===e?t:3&t|8
return n.toString(16)}))}function w(e){if(!e)return{}
var t=e.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/)
if(!t)return{}
var n=t[6]||"",r=t[8]||""
return{host:t[4],path:t[5],protocol:t[2],relative:t[5]+n+r}}function k(e){if(e.message)return e.message
if(e.exception&&e.exception.values&&e.exception.values[0]){var t=e.exception.values[0]
return t.type&&t.value?t.type+": "+t.value:t.type||t.value||e.event_id||"<unknown>"}return e.event_id||"<unknown>"}function S(e){var t=_()
if(!("console"in t))return e()
var n=t.console,r={};["debug","info","warn","error","log","assert"].forEach((function(e){e in t.console&&n[e].__sentry__&&(r[e]=n[e].__sentry_wrapped__,n[e]=n[e].__sentry_original__)}))
var o=e()
return Object.keys(r).forEach((function(e){n[e]=r[e]})),o}function E(e,t,n,r){void 0===r&&(r={handled:!0,type:"generic"}),e.exception=e.exception||{},e.exception.values=e.exception.values||[],e.exception.values[0]=e.exception.values[0]||{},e.exception.values[0].value=e.exception.values[0].value||t||"",e.exception.values[0].type=e.exception.values[0].type||n||"Error",e.exception.values[0].mechanism=e.exception.values[0].mechanism||r}var x=_(),j="Sentry Logger ",T=function(){function e(){this._enabled=!1}return e.prototype.disable=function(){this._enabled=!1},e.prototype.enable=function(){this._enabled=!0},e.prototype.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
this._enabled&&S((function(){x.console.log(j+"[Log]: "+e.join(" "))}))},e.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
this._enabled&&S((function(){x.console.warn(j+"[Warn]: "+e.join(" "))}))},e.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
this._enabled&&S((function(){x.console.error(j+"[Error]: "+e.join(" "))}))},e}()
x.__SENTRY__=x.__SENTRY__||{}
var A=x.__SENTRY__.logger||(x.__SENTRY__.logger=new T),z=function(){function e(){this._hasWeakSet="function"==typeof WeakSet,this._inner=this._hasWeakSet?new WeakSet:[]}return e.prototype.memoize=function(e){if(this._hasWeakSet)return!!this._inner.has(e)||(this._inner.add(e),!1)
for(var t=0;t<this._inner.length;t++){var n=this._inner[t]
if(n===e)return!0}return this._inner.push(e),!1},e.prototype.unmemoize=function(e){if(this._hasWeakSet)this._inner.delete(e)
else for(var t=0;t<this._inner.length;t++)if(this._inner[t]===e){this._inner.splice(t,1)
break}},e}()
function I(e,t,n){if(t in e){var r=e[t],o=n(r)
if("function"==typeof o)try{o.prototype=o.prototype||{},Object.defineProperties(o,{__sentry__:{enumerable:!1,value:!0},__sentry_original__:{enumerable:!1,value:r},__sentry_wrapped__:{enumerable:!1,value:o}})}catch(e){}e[t]=o}}function P(e){return function(e){return~-encodeURI(e).split(/%..|./).length}(JSON.stringify(e))}function C(e,t,n){void 0===t&&(t=3),void 0===n&&(n=102400)
var r=D(e,t)
return P(r)>n?C(e,t-1,n):r}function O(e,t){return"domain"===t&&"object"==typeof e&&e._events?"[Domain]":"domainEmitter"===t?"[DomainEmitter]":"undefined"!=typeof global&&e===global?"[Global]":"undefined"!=typeof window&&e===window?"[Window]":"undefined"!=typeof document&&e===document?"[Document]":"undefined"!=typeof Event&&e instanceof Event?Object.getPrototypeOf(e)?e.constructor.name:"Event":(n=e,g(n)&&"nativeEvent"in n&&"preventDefault"in n&&"stopPropagation"in n?"[SyntheticEvent]":Number.isNaN(e)?"[NaN]":void 0===e?"[undefined]":"function"==typeof e?"[Function: "+(e.name||"<unknown-function-name>")+"]":e)
var n}function N(e,t,n,r){if(void 0===n&&(n=1/0),void 0===r&&(r=new z),0===n)return function(e){var t=Object.prototype.toString.call(e)
if("string"==typeof e)return e
if("[object Object]"===t)return"[Object]"
if("[object Array]"===t)return"[Array]"
var n=O(e)
return v(n)?n:t}(t)
if(null!=t&&"function"==typeof t.toJSON)return t.toJSON()
var o=O(t,e)
if(v(o))return o
var i=d(t)?function(e){var t={message:e.message,name:e.name,stack:e.stack}
for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
return t}(t):t,a=Array.isArray(t)?[]:{}
if(r.memoize(t))return"[Circular ~]"
for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(a[s]=N(s,i[s],n-1,r))
return r.unmemoize(t),a}function D(e,t){try{return JSON.parse(JSON.stringify(e,(function(e,n){return N(e,n,t)})))}catch(e){return"**non-serializable**"}}var R,L=function(){function e(e){this._limit=e,this._buffer=[]}return e.prototype.isReady=function(){return void 0===this._limit||this.length()<this._limit},e.prototype.add=function(e){var t=this
return this.isReady()?(-1===this._buffer.indexOf(e)&&this._buffer.push(e),e.then((function(){return t.remove(e)})).catch((function(){return t.remove(e).catch((function(){}))})),e):Promise.reject(new c("Not adding Promise due to buffer limit reached."))},e.prototype.remove=function(e){var t=this._buffer.splice(this._buffer.indexOf(e),1)[0]
return t},e.prototype.length=function(){return this._buffer.length},e.prototype.drain=function(e){var t=this
return new Promise((function(n){var r=setTimeout((function(){e&&e>0&&n(!1)}),e)
Promise.all(t._buffer).then((function(){clearTimeout(r),n(!0)})).catch((function(){n(!0)}))}))},e}()
function M(e,t){return void 0===t&&(t=0),"string"!=typeof e||0===t||e.length<=t?e:e.substr(0,t)+"..."}function F(e,t){if(!Array.isArray(e))return""
for(var n=[],r=0;r<e.length;r++){var o=e[r]
try{n.push(String(o))}catch(e){n.push("[value cannot be serialized]")}}return n.join(t)}function W(e,t){if(void 0===t&&(t=40),!e.length)return"[object has no keys]"
if(e[0].length>=t)return M(e[0],t)
for(var n=e.length;n>0;n--){var r=e.slice(0,n).join(", ")
if(!(r.length>t))return n===e.length?r:M(r,t)}return""}function U(e,t){return n=t,"[object RegExp]"===Object.prototype.toString.call(n)?t.test(e):"string"==typeof t&&e.includes(t)
var n}function B(){if(!("fetch"in _()))return!1
try{return new Headers,new Request(""),new Response,!0}catch(e){return!1}}function q(){if(!B())return!1
try{return new Request("_",{referrerPolicy:"origin"}),!0}catch(e){return!1}}!function(e){e.PENDING="PENDING",e.RESOLVED="RESOLVED",e.REJECTED="REJECTED"}(R||(R={}))
var H=function(){function e(e){var t=this
this._state=R.PENDING,this._handlers=[],this._resolve=function(e){t._setResult(e,R.RESOLVED)},this._reject=function(e){t._setResult(e,R.REJECTED)},this._setResult=function(e,n){t._state===R.PENDING&&(y(e)?e.then(t._resolve,t._reject):(t._value=e,t._state=n,t._executeHandlers()))},this._executeHandlers=function(){t._state!==R.PENDING&&(t._state===R.REJECTED?t._handlers.forEach((function(e){return e.onFail&&e.onFail(t._value)})):t._handlers.forEach((function(e){return e.onSuccess&&e.onSuccess(t._value)})),t._handlers=[])},this._attachHandler=function(e){t._handlers=t._handlers.concat(e),t._executeHandlers()}
try{e(this._resolve,this._reject)}catch(e){this._reject(e)}}return e.prototype.then=function(t,n){var r=this
return new e((function(e,o){r._attachHandler({onFail:function(t){if(n)try{return void e(n(t))}catch(e){return void o(e)}else o(t)},onSuccess:function(n){if(t)try{return void e(t(n))}catch(e){return void o(e)}else e(n)}})}))},e.prototype.catch=function(e){return this.then((function(e){return e}),e)},e.prototype.toString=function(){return"[object SyncPromise]"},e.resolve=function(t){return new e((function(e){e(t)}))},e.reject=function(t){return new e((function(e,n){n(t)}))},e}(),V=/([0-9a-f]{2})-([0-9a-f]{32})-([0-9a-f]{16})-([0-9a-f]{2})/,$=function(){function e(e,t,n,r){void 0===e&&(e=b()),void 0===t&&(t=b().substring(16)),void 0===n&&(n=!1),this._traceId=e,this._spanId=t,this._recorded=n,this._parent=r}return e.fromTraceparent=function(t){var n=t.match(V)
if(n){var r=new e(n[2],n[3],"01"===n[4])
return new e(n[2],void 0,void 0,r)}},e.prototype.toTraceparent=function(){return"00-"+this._traceId+"-"+this._spanId+"-"+(this._recorded?"01":"00")},e.prototype.toJSON=function(){return{parent:this._parent&&this._parent.toJSON()||void 0,span_id:this._spanId,trace_id:this._traceId}},e}(),G=function(){function e(){this._notifyingListeners=!1,this._scopeListeners=[],this._eventProcessors=[],this._breadcrumbs=[],this._user={},this._tags={},this._extra={},this._context={}}return e.prototype.addScopeListener=function(e){this._scopeListeners.push(e)},e.prototype.addEventProcessor=function(e){return this._eventProcessors.push(e),this},e.prototype._notifyScopeListeners=function(){var e=this
this._notifyingListeners||(this._notifyingListeners=!0,setTimeout((function(){e._scopeListeners.forEach((function(t){t(e)})),e._notifyingListeners=!1})))},e.prototype._notifyEventProcessors=function(e,t,n,r){var o=this
return void 0===r&&(r=0),new H((function(i,a){var l=e[r]
if(null===t||"function"!=typeof l)i(t)
else{var u=l(s({},t),n)
y(u)?u.then((function(t){return o._notifyEventProcessors(e,t,n,r+1).then(i)})).catch(a):o._notifyEventProcessors(e,u,n,r+1).then(i).catch(a)}}))},e.prototype.setUser=function(e){return this._user=D(e),this._notifyScopeListeners(),this},e.prototype.setTags=function(e){return this._tags=s({},this._tags,D(e)),this._notifyScopeListeners(),this},e.prototype.setTag=function(e,t){var n
return this._tags=s({},this._tags,(n={},n[e]=D(t),n)),this._notifyScopeListeners(),this},e.prototype.setExtras=function(e){return this._extra=s({},this._extra,D(e)),this._notifyScopeListeners(),this},e.prototype.setExtra=function(e,t){var n
return this._extra=s({},this._extra,(n={},n[e]=D(t),n)),this._notifyScopeListeners(),this},e.prototype.setFingerprint=function(e){return this._fingerprint=D(e),this._notifyScopeListeners(),this},e.prototype.setLevel=function(e){return this._level=D(e),this._notifyScopeListeners(),this},e.prototype.setTransaction=function(e){return this._transaction=e,this._notifyScopeListeners(),this},e.prototype.setContext=function(e,t){return this._context[e]=t?D(t):void 0,this._notifyScopeListeners(),this},e.prototype.setSpan=function(e){return this._span=e,this._notifyScopeListeners(),this},e.prototype.startSpan=function(){var e=new $
return this.setSpan(e),e},e.prototype.getSpan=function(){return this._span},e.clone=function(t){var n=new e
return Object.assign(n,t,{_scopeListeners:[]}),t&&(n._breadcrumbs=u(t._breadcrumbs),n._tags=s({},t._tags),n._extra=s({},t._extra),n._context=s({},t._context),n._user=t._user,n._level=t._level,n._span=t._span,n._transaction=t._transaction,n._fingerprint=t._fingerprint,n._eventProcessors=u(t._eventProcessors)),n},e.prototype.clear=function(){return this._breadcrumbs=[],this._tags={},this._extra={},this._user={},this._context={},this._level=void 0,this._transaction=void 0,this._fingerprint=void 0,this._span=void 0,this._notifyScopeListeners(),this},e.prototype.addBreadcrumb=function(e,t){var n=(new Date).getTime()/1e3,r=s({timestamp:n},e)
return this._breadcrumbs=void 0!==t&&t>=0?u(this._breadcrumbs,[D(r)]).slice(-t):u(this._breadcrumbs,[D(r)]),this._notifyScopeListeners(),this},e.prototype.clearBreadcrumbs=function(){return this._breadcrumbs=[],this._notifyScopeListeners(),this},e.prototype._applyFingerprint=function(e){e.fingerprint=e.fingerprint?Array.isArray(e.fingerprint)?e.fingerprint:[e.fingerprint]:[],this._fingerprint&&(e.fingerprint=e.fingerprint.concat(this._fingerprint)),e.fingerprint&&!e.fingerprint.length&&delete e.fingerprint},e.prototype.applyToEvent=function(e,t){return this._extra&&Object.keys(this._extra).length&&(e.extra=s({},this._extra,e.extra)),this._tags&&Object.keys(this._tags).length&&(e.tags=s({},this._tags,e.tags)),this._user&&Object.keys(this._user).length&&(e.user=s({},this._user,e.user)),this._context&&Object.keys(this._context).length&&(e.contexts=s({},this._context,e.contexts)),this._level&&(e.level=this._level),this._transaction&&(e.transaction=this._transaction),this._span&&(e.contexts=e.contexts||{},e.contexts.trace=this._span),this._applyFingerprint(e),e.breadcrumbs=u(e.breadcrumbs||[],this._breadcrumbs),e.breadcrumbs=e.breadcrumbs.length>0?e.breadcrumbs:void 0,this._notifyEventProcessors(u(K(),this._eventProcessors),e,t)},e}()
function K(){var e=_()
return e.__SENTRY__=e.__SENTRY__||{},e.__SENTRY__.globalEventProcessors=e.__SENTRY__.globalEventProcessors||[],e.__SENTRY__.globalEventProcessors}function Q(e){K().push(e)}var Y=function(){function e(e,t,n){void 0===t&&(t=new G),void 0===n&&(n=3),this._version=n,this._stack=[],this._stack.push({client:e,scope:t})}return e.prototype._invokeClient=function(e){for(var t,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r]
var o=this.getStackTop()
o&&o.client&&o.client[e]&&(t=o.client)[e].apply(t,u(n,[o.scope]))},e.prototype.isOlderThan=function(e){return this._version<e},e.prototype.bindClient=function(e){var t=this.getStackTop()
t.client=e},e.prototype.pushScope=function(){var e=this.getStack(),t=e.length>0?e[e.length-1].scope:void 0,n=G.clone(t)
return this.getStack().push({client:this.getClient(),scope:n}),n},e.prototype.popScope=function(){return void 0!==this.getStack().pop()},e.prototype.withScope=function(e){var t=this.pushScope()
try{e(t)}finally{this.popScope()}},e.prototype.getClient=function(){return this.getStackTop().client},e.prototype.getScope=function(){return this.getStackTop().scope},e.prototype.getStack=function(){return this._stack},e.prototype.getStackTop=function(){return this._stack[this._stack.length-1]},e.prototype.captureException=function(e,t){var n=this._lastEventId=b()
return this._invokeClient("captureException",e,s({},t,{event_id:n})),n},e.prototype.captureMessage=function(e,t,n){var r=this._lastEventId=b()
return this._invokeClient("captureMessage",e,t,s({},n,{event_id:r})),r},e.prototype.captureEvent=function(e,t){var n=this._lastEventId=b()
return this._invokeClient("captureEvent",e,s({},t,{event_id:n})),n},e.prototype.lastEventId=function(){return this._lastEventId},e.prototype.addBreadcrumb=function(e,t){var n=this.getStackTop()
if(n.scope&&n.client){var r=n.client.getOptions&&n.client.getOptions()||{},o=r.beforeBreadcrumb,i=void 0===o?null:o,a=r.maxBreadcrumbs,l=void 0===a?30:a
if(!(l<=0)){var u=(new Date).getTime()/1e3,c=s({timestamp:u},e),d=i?S((function(){return i(c,t)})):c
null!==d&&n.scope.addBreadcrumb(d,Math.min(l,100))}}},e.prototype.setUser=function(e){var t=this.getStackTop()
t.scope&&t.scope.setUser(e)},e.prototype.setTags=function(e){var t=this.getStackTop()
t.scope&&t.scope.setTags(e)},e.prototype.setExtras=function(e){var t=this.getStackTop()
t.scope&&t.scope.setExtras(e)},e.prototype.setTag=function(e,t){var n=this.getStackTop()
n.scope&&n.scope.setTag(e,t)},e.prototype.setExtra=function(e,t){var n=this.getStackTop()
n.scope&&n.scope.setExtra(e,t)},e.prototype.setContext=function(e,t){var n=this.getStackTop()
n.scope&&n.scope.setContext(e,t)},e.prototype.configureScope=function(e){var t=this.getStackTop()
t.scope&&t.client&&e(t.scope)},e.prototype.run=function(e){var t=Z(this)
try{e(this)}finally{Z(t)}},e.prototype.getIntegration=function(e){var t=this.getClient()
if(!t)return null
try{return t.getIntegration(e)}catch(t){return A.warn("Cannot retrieve integration "+e.id+" from the current Hub"),null}},e.prototype.traceHeaders=function(){var e=this.getStackTop()
if(e.scope&&e.client){var t=e.scope.getSpan()
if(t)return{"sentry-trace":t.toTraceparent()}}return{}},e}()
function J(){var e=_()
return e.__SENTRY__=e.__SENTRY__||{hub:void 0},e}function Z(e){var t=J(),n=te(t)
return ne(t,e),n}function X(){var t,n,r=J()
ee(r)&&!te(r).isOlderThan(3)||ne(r,new Y)
try{var o=(t=e,n="domain",t.require(n)),i=o.active
if(!i)return te(r)
if(!ee(i)||te(i).isOlderThan(3)){var a=te(r).getStackTop()
ne(i,new Y(a.client,G.clone(a.scope)))}return te(i)}catch(e){return te(r)}}function ee(e){return!!(e&&e.__SENTRY__&&e.__SENTRY__.hub)}function te(e){return e&&e.__SENTRY__&&e.__SENTRY__.hub||(e.__SENTRY__=e.__SENTRY__||{},e.__SENTRY__.hub=new Y),e.__SENTRY__.hub}function ne(e,t){return!!e&&(e.__SENTRY__=e.__SENTRY__||{},e.__SENTRY__.hub=t,!0)}function re(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n]
var r=X()
if(r&&r[e])return r[e].apply(r,u(t))
throw new Error("No hub defined or "+e+" was not found on the hub, please open a bug report.")}function oe(e){var t
try{throw new Error("Sentry syntheticException")}catch(e){t=e}return re("captureException",e,{originalException:e,syntheticException:t})}function ie(e){re("withScope",e)}var ae=/^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w\.-]+)(?::(\d+))?\/(.+)/,se="Invalid Dsn",le=function(){function e(e){"string"==typeof e?this._fromString(e):this._fromComponents(e),this._validate()}return e.prototype.toString=function(e){void 0===e&&(e=!1)
var t=this,n=t.host,r=t.path,o=t.pass,i=t.port,a=t.projectId,s=t.protocol,l=t.user
return s+"://"+l+(e&&o?":"+o:"")+"@"+n+(i?":"+i:"")+"/"+(r?r+"/":r)+a},e.prototype._fromString=function(e){var t=ae.exec(e)
if(!t)throw new c(se)
var n=l(t.slice(1),6),r=n[0],o=n[1],i=n[2],a=void 0===i?"":i,s=n[3],u=n[4],d=void 0===u?"":u,f=n[5],p="",h=f,v=h.split("/")
v.length>1&&(p=v.slice(0,-1).join("/"),h=v.pop()),Object.assign(this,{host:s,pass:a,path:p,projectId:h,port:d,protocol:r,user:o})},e.prototype._fromComponents=function(e){this.protocol=e.protocol,this.user=e.user,this.pass=e.pass||"",this.host=e.host,this.port=e.port||"",this.path=e.path||"",this.projectId=e.projectId},e.prototype._validate=function(){var e=this
if(["protocol","user","host","projectId"].forEach((function(t){if(!e[t])throw new c(se)})),"http"!==this.protocol&&"https"!==this.protocol)throw new c(se)
if(this.port&&Number.isNaN(parseInt(this.port,10)))throw new c(se)},e}(),ue=function(){function e(e){this.dsn=e,this._dsnObject=new le(e)}return e.prototype.getDsn=function(){return this._dsnObject},e.prototype.getStoreEndpoint=function(){return""+this._getBaseUrl()+this.getStoreEndpointPath()},e.prototype.getStoreEndpointWithUrlEncodedAuth=function(){var e,t=this._dsnObject,n={sentry_key:t.user,sentry_version:"7"}
return this.getStoreEndpoint()+"?"+(e=n,Object.keys(e).map((function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])})).join("&"))},e.prototype._getBaseUrl=function(){var e=this._dsnObject,t=e.protocol?e.protocol+":":"",n=e.port?":"+e.port:""
return t+"//"+e.host+n},e.prototype.getStoreEndpointPath=function(){var e=this._dsnObject
return(e.path?"/"+e.path:"")+"/api/"+e.projectId+"/store/"},e.prototype.getRequestHeaders=function(e,t){var n=this._dsnObject,r=["Sentry sentry_version=7"]
return r.push("sentry_timestamp="+(new Date).getTime()),r.push("sentry_client="+e+"/"+t),r.push("sentry_key="+n.user),n.pass&&r.push("sentry_secret="+n.pass),{"Content-Type":"application/json","X-Sentry-Auth":r.join(", ")}},e.prototype.getReportDialogEndpoint=function(e){void 0===e&&(e={})
var t=this._dsnObject,n=this._getBaseUrl()+(t.path?"/"+t.path:"")+"/api/embed/error-page/",r=[]
for(var o in r.push("dsn="+t.toString()),e)if("user"===o){if(!e.user)continue
e.user.name&&r.push("name="+encodeURIComponent(e.user.name)),e.user.email&&r.push("email="+encodeURIComponent(e.user.email))}else r.push(encodeURIComponent(o)+"="+encodeURIComponent(e[o]))
return r.length?n+"?"+r.join("&"):n},e}(),ce=[]
function de(e){var t={}
return function(e){var t=e.defaultIntegrations&&u(e.defaultIntegrations)||[],n=e.integrations,r=[]
if(Array.isArray(n)){var o=n.map((function(e){return e.name})),i=[]
t.forEach((function(e){-1===o.indexOf(e.name)&&-1===i.indexOf(e.name)&&(r.push(e),i.push(e.name))})),n.forEach((function(e){-1===i.indexOf(e.name)&&(r.push(e),i.push(e.name))}))}else{if("function"!=typeof n)return u(t)
r=n(t),r=Array.isArray(r)?r:[r]}return r}(e).forEach((function(e){t[e.name]=e,function(e){-1===ce.indexOf(e.name)&&(e.setupOnce(Q,X),ce.push(e.name),A.log("Integration installed: "+e.name))}(e)})),t}var fe,pe=function(){function e(e,t){this._processing=!1,this._backend=new e(t),this._options=t,t.dsn&&(this._dsn=new le(t.dsn)),this._integrations=de(this._options)}return e.prototype.captureException=function(e,t,n){var r=this,o=t&&t.event_id
return this._processing=!0,this._getBackend().eventFromException(e,t).then((function(e){return r._processEvent(e,t,n)})).then((function(e){o=e&&e.event_id,r._processing=!1})).catch((function(e){A.error(e),r._processing=!1})),o},e.prototype.captureMessage=function(e,t,n,r){var o=this,i=n&&n.event_id
this._processing=!0
var a=v(e)?this._getBackend().eventFromMessage(""+e,t,n):this._getBackend().eventFromException(e,n)
return a.then((function(e){return o._processEvent(e,n,r)})).then((function(e){i=e&&e.event_id,o._processing=!1})).catch((function(e){A.error(e),o._processing=!1})),i},e.prototype.captureEvent=function(e,t,n){var r=this,o=t&&t.event_id
return this._processing=!0,this._processEvent(e,t,n).then((function(e){o=e&&e.event_id,r._processing=!1})).catch((function(e){A.error(e),r._processing=!1})),o},e.prototype.getDsn=function(){return this._dsn},e.prototype.getOptions=function(){return this._options},e.prototype.flush=function(e){var t=this
return this._isClientProcessing(e).then((function(n){return t._processingInterval&&clearInterval(t._processingInterval),t._getBackend().getTransport().close(e).then((function(e){return n&&e}))}))},e.prototype.close=function(e){var t=this
return this.flush(e).then((function(e){return t.getOptions().enabled=!1,e}))},e.prototype.getIntegrations=function(){return this._integrations||{}},e.prototype.getIntegration=function(e){try{return this._integrations[e.id]||null}catch(t){return A.warn("Cannot retrieve integration "+e.id+" from the current Client"),null}},e.prototype._isClientProcessing=function(e){var t=this
return new Promise((function(n){var r=0
t._processingInterval&&clearInterval(t._processingInterval),t._processingInterval=setInterval((function(){t._processing?(r+=1,e&&r>=e&&n(!1)):n(!0)}),1)}))},e.prototype._getBackend=function(){return this._backend},e.prototype._isEnabled=function(){return!1!==this.getOptions().enabled&&void 0!==this._dsn},e.prototype._prepareEvent=function(e,t,n){var r=this.getOptions(),o=r.environment,i=r.release,a=r.dist,l=r.maxValueLength,u=void 0===l?250:l,c=s({},e)
void 0===c.environment&&void 0!==o&&(c.environment=o),void 0===c.release&&void 0!==i&&(c.release=i),void 0===c.dist&&void 0!==a&&(c.dist=a),c.message&&(c.message=M(c.message,u))
var d=c.exception&&c.exception.values&&c.exception.values[0]
d&&d.value&&(d.value=M(d.value,u))
var f=c.request
f&&f.url&&(f.url=M(f.url,u)),void 0===c.event_id&&(c.event_id=b()),this._addIntegrations(c.sdk)
var p=H.resolve(c)
return t&&(p=t.applyToEvent(c,n)),p},e.prototype._addIntegrations=function(e){var t=Object.keys(this._integrations)
e&&t.length>0&&(e.integrations=t)},e.prototype._processEvent=function(e,t,n){var r=this,o=this.getOptions(),i=o.beforeSend,a=o.sampleRate
return this._isEnabled()?"number"==typeof a&&Math.random()>a?H.reject("This event has been sampled, will not send event."):new H((function(o,a){r._prepareEvent(e,n,t).then((function(e){if(null!==e){var n=e
try{var s=t&&t.data&&!0===t.data.__sentry__
if(s||!i)return r._getBackend().sendEvent(n),void o(n)
var l=i(e,t)
if(void 0===l)A.error("`beforeSend` method has to return `null` or a valid event.")
else if(y(l))r._handleAsyncBeforeSend(l,o,a)
else{if(n=l,null===n)return A.log("`beforeSend` returned `null`, will not send event."),void o(null)
r._getBackend().sendEvent(n),o(n)}}catch(e){r.captureException(e,{data:{__sentry__:!0},originalException:e}),a("`beforeSend` throw an error, will not send event.")}}else a("An event processor returned null, will not send event.")}))})):H.reject("SDK not enabled, will not send event.")},e.prototype._handleAsyncBeforeSend=function(e,t,n){var r=this
e.then((function(e){null!==e?(r._getBackend().sendEvent(e),t(e)):n("`beforeSend` returned `null`, will not send event.")})).catch((function(e){n("beforeSend rejected with "+e)}))},e}(),he=function(){function e(){}return e.prototype.sendEvent=function(e){return Promise.resolve({reason:"NoopTransport: Event has been skipped because no Dsn is configured.",status:t.Status.Skipped})},e.prototype.close=function(e){return Promise.resolve(!0)},e}(),ve=function(){function e(e){this._options=e,this._options.dsn||A.warn("No DSN provided, backend will not do anything."),this._transport=this._setupTransport()}return e.prototype._setupTransport=function(){return new he},e.prototype.eventFromException=function(e,t){throw new c("Backend has to implement `eventFromException` method")},e.prototype.eventFromMessage=function(e,t,n){throw new c("Backend has to implement `eventFromMessage` method")},e.prototype.sendEvent=function(e){this._transport.sendEvent(e).catch((function(e){A.error("Error while sending event: "+e)}))},e.prototype.getTransport=function(){return this._transport},e}(),ge=function(){function e(){this.name=e.id}return e.prototype.setupOnce=function(){fe=Function.prototype.toString,Function.prototype.toString=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
var n=this.__sentry__?this.__sentry_original__:this
return fe.apply(n,e)}},e.id="FunctionToString",e}(),ye=[/^Script error\.?$/,/^Javascript error: Script error\.? on line 0$/],me=function(){function e(t){void 0===t&&(t={}),this._options=t,this.name=e.id}return e.prototype.setupOnce=function(){Q((function(t){var n=X()
if(!n)return t
var r=n.getIntegration(e)
if(r){var o=n.getClient(),i=o?o.getOptions():{},a=r._mergeOptions(i)
if(r._shouldDropEvent(t,a))return null}return t}))},e.prototype._shouldDropEvent=function(e,t){return this._isSentryError(e,t)?(A.warn("Event dropped due to being internal Sentry Error.\nEvent: "+k(e)),!0):this._isIgnoredError(e,t)?(A.warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: "+k(e)),!0):this._isBlacklistedUrl(e,t)?(A.warn("Event dropped due to being matched by `blacklistUrls` option.\nEvent: "+k(e)+".\nUrl: "+this._getEventFilterUrl(e)),!0):!this._isWhitelistedUrl(e,t)&&(A.warn("Event dropped due to not being matched by `whitelistUrls` option.\nEvent: "+k(e)+".\nUrl: "+this._getEventFilterUrl(e)),!0)},e.prototype._isSentryError=function(e,t){if(void 0===t&&(t={}),!t.ignoreInternal)return!1
try{return"SentryError"===e.exception.values[0].type}catch(e){return!1}},e.prototype._isIgnoredError=function(e,t){return void 0===t&&(t={}),!(!t.ignoreErrors||!t.ignoreErrors.length)&&this._getPossibleEventMessages(e).some((function(e){return t.ignoreErrors.some((function(t){return U(e,t)}))}))},e.prototype._isBlacklistedUrl=function(e,t){if(void 0===t&&(t={}),!t.blacklistUrls||!t.blacklistUrls.length)return!1
var n=this._getEventFilterUrl(e)
return!!n&&t.blacklistUrls.some((function(e){return U(n,e)}))},e.prototype._isWhitelistedUrl=function(e,t){if(void 0===t&&(t={}),!t.whitelistUrls||!t.whitelistUrls.length)return!0
var n=this._getEventFilterUrl(e)
return!n||t.whitelistUrls.some((function(e){return U(n,e)}))},e.prototype._mergeOptions=function(e){return void 0===e&&(e={}),{blacklistUrls:u(this._options.blacklistUrls||[],e.blacklistUrls||[]),ignoreErrors:u(this._options.ignoreErrors||[],e.ignoreErrors||[],ye),ignoreInternal:void 0===this._options.ignoreInternal||this._options.ignoreInternal,whitelistUrls:u(this._options.whitelistUrls||[],e.whitelistUrls||[])}},e.prototype._getPossibleEventMessages=function(e){if(e.message)return[e.message]
if(e.exception)try{var t=e.exception.values[0],n=t.type,r=t.value
return[""+r,n+": "+r]}catch(t){return A.error("Cannot extract message for event "+k(e)),[]}return[]},e.prototype._getEventFilterUrl=function(e){try{if(e.stacktrace){var t=e.stacktrace.frames
return t[t.length-1].filename}if(e.exception){var n=e.exception.values[0].stacktrace.frames
return n[n.length-1].filename}return null}catch(t){return A.error("Cannot extract url for event "+k(e)),null}},e.id="InboundFilters",e}(),_e=Object.freeze({FunctionToString:ge,InboundFilters:me}),be=_(),we={_report:!1,_collectWindowErrors:!1,_computeStackTrace:!1,_linesOfContext:!1},ke="?",Se=/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/
function Ee(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function xe(){return"undefined"==typeof document||null==document.location?"":document.location.href}we._report=function(){var e,t,n=[],r=null,o=null
function i(e,t,r){var o=null
if(!t||we._collectWindowErrors){for(var i in n)if(Ee(n,i))try{n[i](e,t,r)}catch(e){o=e}if(o)throw o}}function a(t,n,r,a,l){var c=null
if(l=f(l)?l.error:l,t=f(t)?t.message:t,o)we._computeStackTrace._augmentStackTraceWithInitialElement(o,n,r,t),u()
else if(l&&d(l))c=we._computeStackTrace(l),c.mechanism="onerror",i(c,!0,l)
else{var p,h={url:n,line:r,column:a},v=t
if("[object String]"==={}.toString.call(t)){var g=t.match(Se)
g&&(p=g[1],v=g[2])}h.func=ke,h.context=null,c={name:p,message:v,mode:"onerror",mechanism:"onerror",stack:[s({},h,{url:h.url||xe()})]},i(c,!0,null)}return!!e&&e.apply(this,arguments)}function l(e){var t=e&&(e.detail?e.detail.reason:e.reason)||e,n=we._computeStackTrace(t)
n.mechanism="onunhandledrejection",n.message||(n.message=JSON.stringify(D(t))),i(n,!0,t)}function u(){var e=o,t=r
o=null,r=null,i(e,!1,t)}function c(e){if(o){if(r===e)return
u()}var t=we._computeStackTrace(e)
throw o=t,r=e,setTimeout((function(){r===e&&u()}),t.incomplete?2e3:0),e}return c._subscribe=function(e){n.push(e)},c._installGlobalHandler=function(){!0!==t&&(e=be.onerror,be.onerror=a,t=!0)},c._installGlobalUnhandledRejectionHandler=function(){be.onunhandledrejection=l},c}(),we._computeStackTrace=function(){function e(e){if(!e||!e.stack)return null
for(var t,n,r,o,i=/^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|[a-z]:|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,a=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js))(?::(\d+))?(?::(\d+))?\s*$/i,s=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,l=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i,u=/\((\S*)(?::(\d+))(?::(\d+))\)/,c=e.stack.split("\n"),d=[],f=/^(.*) is undefined$/.exec(e.message),p=0,h=c.length;p<h;++p){if(r=i.exec(c[p])){var v=r[2]&&0===r[2].indexOf("native")
t=r[2]&&0===r[2].indexOf("eval"),t&&(n=u.exec(r[2]))&&(r[2]=n[1],r[3]=n[2],r[4]=n[3]),o={url:r[2],func:r[1]||ke,args:v?[r[2]]:[],line:r[3]?+r[3]:null,column:r[4]?+r[4]:null}}else if(r=s.exec(c[p]))o={url:r[2],func:r[1]||ke,args:[],line:+r[3],column:r[4]?+r[4]:null}
else{if(!(r=a.exec(c[p])))continue
t=r[3]&&r[3].indexOf(" > eval")>-1,t&&(n=l.exec(r[3]))?(r[1]=r[1]||"eval",r[3]=n[1],r[4]=n[2],r[5]=""):0!==p||r[5]||void 0===e.columnNumber||(d[0].column=e.columnNumber+1),o={url:r[3],func:r[1]||ke,args:r[2]?r[2].split(","):[],line:r[4]?+r[4]:null,column:r[5]?+r[5]:null}}!o.func&&o.line&&(o.func=ke),o.context=null,d.push(o)}return d.length?(d[0]&&d[0].line&&!d[0].column&&f&&(d[0].column=null),{mode:"stack",name:e.name,message:e.message,stack:d}):null}function t(e,t,n,r){var o={url:t,line:n}
if(o.url&&o.line){e.incomplete=!1,o.func||(o.func=ke),o.context||(o.context=null)
var i=/ '([^']+)' /.exec(r)
if(i&&(o.column=null),e.stack.length>0&&e.stack[0].url===o.url){if(e.stack[0].line===o.line)return!1
if(!e.stack[0].line&&e.stack[0].func===o.func)return e.stack[0].line=o.line,e.stack[0].context=o.context,!1}return e.stack.unshift(o),e.partial=!0,!0}return e.incomplete=!0,!1}function n(e,r){for(var o,i,a=/function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i,s=[],l={},u=!1,c=n.caller;c&&!u;c=c.caller)if(c!==ze&&c!==we._report){if(i={url:null,func:ke,args:[],line:null,column:null},c.name?i.func=c.name:(o=a.exec(c.toString()))&&(i.func=o[1]),void 0===i.func)try{i.func=o.input.substring(0,o.input.indexOf("{"))}catch(e){}l[""+c]?u=!0:l[""+c]=!0,s.push(i)}r&&s.splice(0,r)
var d={mode:"callers",name:e.name,message:e.message,stack:s}
return t(d,e.sourceURL||e.fileName,e.line||e.lineNumber,e.message||e.description),d}function r(t,r){var o=null
r=null==r?0:+r
try{if(o=function(e){var t=e.stacktrace
if(t){for(var n,r=/ line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,o=/ line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^\)]+))\((.*)\))? in (.*):\s*$/i,i=t.split("\n"),a=[],s=0;s<i.length;s+=2){var l=null;(n=r.exec(i[s]))?l={url:n[2],line:+n[1],column:null,func:n[3],args:[]}:(n=o.exec(i[s]))&&(l={url:n[6],line:+n[1],column:+n[2],func:n[3]||n[4],args:n[5]?n[5].split(","):[]}),l&&(!l.func&&l.line&&(l.func=ke),l.line&&(l.context=null),l.context||(l.context=[i[s+1]]),a.push(l))}return a.length?{mode:"stacktrace",name:e.name,message:e.message,stack:a}:null}}(t),o)return o}catch(e){}try{if(o=e(t),o)return o}catch(e){}try{if(o=function(e){var t=e.message.split("\n")
if(t.length<4)return null
var n,r=/^\s*Line (\d+) of linked script ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i,o=/^\s*Line (\d+) of inline#(\d+) script in ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i,i=/^\s*Line (\d+) of function script\s*$/i,a=[],s=be&&be.document&&be.document.getElementsByTagName("script"),l=[]
for(var u in s)Ee(s,u)&&!s[u].src&&l.push(s[u])
for(var c=2;c<t.length;c+=2){var d=null
if(n=r.exec(t[c]))d={url:n[2],func:n[3],args:[],line:+n[1],column:null}
else if(n=o.exec(t[c]))d={url:n[3],func:n[4],args:[],line:+n[1],column:null}
else if(n=i.exec(t[c])){var f=xe().replace(/#.*$/,"")
d={url:f,func:"",args:[],line:n[1],column:null}}d&&(d.func||(d.func=ke),d.context=[t[c+1]],a.push(d))}return a.length?{mode:"multiline",name:e.name,message:t[0],stack:a}:null}(t),o)return o}catch(e){}try{if(o=n(t,r+1),o)return o}catch(e){}return{original:t,name:t.name,message:t.message,mode:"failed"}}return r._augmentStackTraceWithInitialElement=t,r._computeStackTraceFromStackProp=e,r}(),we._collectWindowErrors=!0,we._linesOfContext=11
var je=we._report._subscribe,Te=we._report._installGlobalHandler,Ae=we._report._installGlobalUnhandledRejectionHandler,ze=we._computeStackTrace
function Ie(e){var t=Ce(e.stack),n={type:e.name,value:e.message}
return t&&t.length&&(n.stacktrace={frames:t}),void 0===n.type&&""===n.value&&(n.value="Unrecoverable error caught"),n}function Pe(e){var t=Ie(e)
return{exception:{values:[t]}}}function Ce(e){if(!e||!e.length)return[]
var t=e,n=t[0].func||"",r=t[t.length-1].func||""
return(n.includes("captureMessage")||n.includes("captureException"))&&(t=t.slice(1)),r.includes("sentryWrapped")&&(t=t.slice(0,-1)),t.map((function(e){return{colno:e.column,filename:e.url||t[0].url,function:e.func||"?",in_app:!0,lineno:e.line}})).slice(0,50).reverse()}var Oe,Ne,De=function(){function e(e){this.options=e,this._buffer=new L(30),this.url=new ue(this.options.dsn).getStoreEndpointWithUrlEncodedAuth()}return e.prototype.sendEvent=function(e){throw new c("Transport Class has to implement `sendEvent` method")},e.prototype.close=function(e){return this._buffer.drain(e)},e}(),Re=_(),Le=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return r(n,e),n.prototype.sendEvent=function(e){var n={body:JSON.stringify(e),method:"POST",referrerPolicy:q()?"origin":""}
return this._buffer.add(Re.fetch(this.url,n).then((function(e){return{status:t.Status.fromHttpCode(e.status)}})))},n}(De),Me=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return r(n,e),n.prototype.sendEvent=function(e){var n=this
return this._buffer.add(new Promise((function(r,o){var i=new XMLHttpRequest
i.onreadystatechange=function(){4===i.readyState&&(200===i.status&&r({status:t.Status.fromHttpCode(i.status)}),o(i))},i.open("POST",n.url),i.send(JSON.stringify(e))})))},n}(De),Fe=Object.freeze({BaseTransport:De,FetchTransport:Le,XHRTransport:Me}),We=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return r(n,e),n.prototype._setupTransport=function(){if(!this._options.dsn)return e.prototype._setupTransport.call(this)
var t=this._options.transportOptions?this._options.transportOptions:{dsn:this._options.dsn}
return this._options.transport?new this._options.transport(t):B()?new Le(t):new Me(t)},n.prototype.eventFromException=function(e,n){var r,o,i=this
if(f(e)&&e.error){var a=e
return e=a.error,r=Pe(ze(e)),H.resolve(this._buildEvent(r,n))}if(p(e)||(o=e,"[object DOMException]"===Object.prototype.toString.call(o))){var s=e,l=s.name||(p(s)?"DOMError":"DOMException"),u=s.message?l+": "+s.message:l
return this.eventFromMessage(u,t.Severity.Error,n).then((function(e){return E(e,u),H.resolve(i._buildEvent(e,n))}))}if(d(e))return r=Pe(ze(e)),H.resolve(this._buildEvent(r,n))
if(g(e)&&n&&n.syntheticException){var c=e
return r=function(e,t){var n=Object.keys(e).sort(),r={extra:{__serialized__:C(e)},message:"Non-Error exception captured with keys: "+W(n)}
if(t){var o=ze(t),i=Ce(o.stack)
r.stacktrace={frames:i}}return r}(c,n.syntheticException),E(r,"Custom Object",void 0,{handled:!0,synthetic:!0,type:"generic"}),r.level=t.Severity.Error,H.resolve(this._buildEvent(r,n))}var h=e
return this.eventFromMessage(h,void 0,n).then((function(e){return E(e,""+h,void 0,{handled:!0,synthetic:!0,type:"generic"}),e.level=t.Severity.Error,H.resolve(i._buildEvent(e,n))}))},n.prototype._buildEvent=function(e,t){return s({},e,{event_id:t&&t.event_id})},n.prototype.eventFromMessage=function(e,n,r){void 0===n&&(n=t.Severity.Info)
var o={event_id:r&&r.event_id,level:n,message:e}
if(this._options.attachStacktrace&&r&&r.syntheticException){var i=ze(r.syntheticException),a=Ce(i.stack)
o.stacktrace={frames:a}}return H.resolve(o)},n}(ve),Ue="sentry.javascript.browser",Be="5.4.0",qe=function(e){function t(t){return void 0===t&&(t={}),e.call(this,We,t)||this}return r(t,e),t.prototype._prepareEvent=function(t,n,r){return t.platform=t.platform||"javascript",t.sdk=s({},t.sdk,{name:Ue,packages:u(t.sdk&&t.sdk.packages||[],[{name:"npm:@sentry/browser",version:Be}]),version:Be}),e.prototype._prepareEvent.call(this,t,n,r)},t.prototype.showReportDialog=function(e){void 0===e&&(e={})
var t=_().document
if(t)if(this._isEnabled()){var n=e.dsn||this.getDsn()
if(e.eventId)if(n){var r=t.createElement("script")
r.async=!0,r.src=new ue(n).getReportDialogEndpoint(e),e.onLoad&&(r.onload=e.onLoad),(t.head||t.body).appendChild(r)}else A.error("Missing `Dsn` option in showReportDialog call")
else A.error("Missing `eventId` option in showReportDialog call")}else A.error("Trying to call showReportDialog with Sentry Client is disabled")},t}(pe),He=0
function Ve(){He+=1,setTimeout((function(){He-=1}))}function $e(e,t,n){if(void 0===t&&(t={}),"function"!=typeof e)return e
try{if(e.__sentry__)return e
if(e.__sentry_wrapped__)return e.__sentry_wrapped__}catch(t){return e}var r=function(){n&&"function"==typeof n&&n.apply(this,arguments)
var r=Array.prototype.slice.call(arguments)
try{var o=r.map((function(e){return $e(e,t)}))
return e.handleEvent?e.handleEvent.apply(this,o):e.apply(this,o)}catch(e){throw Ve(),ie((function(n){n.addEventProcessor((function(e){var n=s({},e)
return t.mechanism&&E(n,void 0,void 0,t.mechanism),n.extra=s({},n.extra,{arguments:D(r,3)}),n})),oe(e)})),e}}
try{for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o])}catch(e){}e.prototype=e.prototype||{},r.prototype=e.prototype,Object.defineProperty(e,"__sentry_wrapped__",{enumerable:!1,value:r}),Object.defineProperties(r,{__sentry__:{enumerable:!1,value:!0},__sentry_original__:{enumerable:!1,value:e}})
try{Object.defineProperty(r,"name",{get:function(){return e.name}})}catch(e){}return r}var Ge=0
function Ke(e,t){return void 0===t&&(t=!1),function(n){if(Oe=void 0,n&&Ne!==n){Ne=n
var r=function(){var t
try{t=n.target?Ye(n.target):Ye(n)}catch(e){t="<unknown>"}0!==t.length&&X().addBreadcrumb({category:"ui."+e,message:t},{event:n,name:e})}
Ge&&clearTimeout(Ge),t?Ge=setTimeout(r):r()}}}function Qe(){return function(e){var t
try{t=e.target}catch(e){return}var n=t&&t.tagName
n&&("INPUT"===n||"TEXTAREA"===n||t.isContentEditable)&&(Oe||Ke("input")(e),clearTimeout(Oe),Oe=setTimeout((function(){Oe=void 0}),1e3))}}function Ye(e){for(var t,n=e,r=[],o=0,i=0,a=" > ".length;n&&o++<5&&(t=Je(n),!("html"===t||o>1&&i+r.length*a+t.length>=80));)r.push(t),i+=t.length,n=n.parentNode
return r.reverse().join(" > ")}function Je(e){var t,n,r,o,i,a=[]
if(!e||!e.tagName)return""
if(a.push(e.tagName.toLowerCase()),e.id&&a.push("#"+e.id),t=e.className,t&&h(t))for(n=t.split(/\s+/),i=0;i<n.length;i++)a.push("."+n[i])
var s=["type","name","title","alt"]
for(i=0;i<s.length;i++)r=s[i],o=e.getAttribute(r),o&&a.push("["+r+'="'+o+'"]')
return a.join("")}var Ze=function(){function e(t){this.name=e.id,this._options=s({onerror:!0,onunhandledrejection:!0},t)}return e.prototype.setupOnce=function(){Error.stackTraceLimit=50,je((function(t,n,r){if(!(He>0)){var o=X().getIntegration(e)
o&&X().captureEvent(o._eventFromGlobalHandler(t),{data:{stack:t},originalException:r})}})),this._options.onerror&&(A.log("Global Handler attached: onerror"),Te()),this._options.onunhandledrejection&&(A.log("Global Handler attached: onunhandledrejection"),Ae())},e.prototype._eventFromGlobalHandler=function(e){if(!h(e.message)&&"onunhandledrejection"!==e.mechanism){var t=e.message
e.message=t.error&&h(t.error.message)?t.error.message:"No error message"}var n=Pe(e),r={mode:e.mode}
e.message&&(r.message=e.message),e.name&&(r.name=e.name)
var o=X().getClient(),i=o&&o.getOptions().maxValueLength||250,a=e.original?M(JSON.stringify(D(e.original)),i):"",s="onunhandledrejection"===e.mechanism?"UnhandledRejection":"Error"
return E(n,a,s,{data:r,handled:!1,type:e.mechanism}),n},e.id="GlobalHandlers",e}(),Xe=function(){function e(){this._ignoreOnError=0,this.name=e.id}return e.prototype._wrapTimeFunction=function(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n]
var r=t[0]
return t[0]=$e(r,{mechanism:{data:{function:et(e)},handled:!0,type:"instrument"}}),e.apply(this,t)}},e.prototype._wrapRAF=function(e){return function(t){return e($e(t,{mechanism:{data:{function:"requestAnimationFrame",handler:et(e)},handled:!0,type:"instrument"}}))}},e.prototype._wrapEventTarget=function(e){var t=_(),n=t[e]&&t[e].prototype
n&&n.hasOwnProperty&&n.hasOwnProperty("addEventListener")&&(I(n,"addEventListener",(function(t){return function(n,r,o){try{r.handleEvent=$e(r.handleEvent.bind(r),{mechanism:{data:{function:"handleEvent",handler:et(r),target:e},handled:!0,type:"instrument"}})}catch(e){}return t.call(this,n,$e(r,{mechanism:{data:{function:"addEventListener",handler:et(r),target:e},handled:!0,type:"instrument"}}),o)}})),I(n,"removeEventListener",(function(e){return function(t,n,r){var o=n
try{o=o&&(o.__sentry_wrapped__||o)}catch(e){}return e.call(this,t,o,r)}})))},e.prototype.setupOnce=function(){this._ignoreOnError=this._ignoreOnError
var e=_()
I(e,"setTimeout",this._wrapTimeFunction.bind(this)),I(e,"setInterval",this._wrapTimeFunction.bind(this)),I(e,"requestAnimationFrame",this._wrapRAF.bind(this)),["EventTarget","Window","Node","ApplicationCache","AudioTrackList","ChannelMergerNode","CryptoOperation","EventSource","FileReader","HTMLUnknownElement","IDBDatabase","IDBRequest","IDBTransaction","KeyOperation","MediaController","MessagePort","ModalWindow","Notification","SVGElementInstance","Screen","TextTrack","TextTrackCue","TextTrackList","WebSocket","WebSocketWorker","Worker","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload"].forEach(this._wrapEventTarget.bind(this))},e.id="TryCatch",e}()
function et(e){try{return e&&e.name||"<anonymous>"}catch(e){return"<anonymous>"}}var tt,nt=_(),rt=function(){function e(t){this.name=e.id,this._options=s({console:!0,dom:!0,fetch:!0,history:!0,sentry:!0,xhr:!0},t)}return e.prototype._instrumentConsole=function(){"console"in nt&&["debug","info","warn","error","log","assert"].forEach((function(n){n in nt.console&&I(nt.console,n,(function(r){return function(){for(var o=[],i=0;i<arguments.length;i++)o[i]=arguments[i]
var a={category:"console",data:{extra:{arguments:D(o,3)},logger:"console"},level:t.Severity.fromString(n),message:F(o," ")}
"assert"===n&&!1===o[0]&&(a.message="Assertion failed: "+(F(o.slice(1)," ")||"console.assert"),a.data.extra.arguments=D(o.slice(1),3)),e.addBreadcrumb(a,{input:o,level:n}),r&&Function.prototype.apply.call(r,nt.console,o)}}))}))},e.prototype._instrumentDOM=function(){"document"in nt&&(nt.document.addEventListener("click",Ke("click"),!1),nt.document.addEventListener("keypress",Qe(),!1),["EventTarget","Node"].forEach((function(e){var t=nt[e]&&nt[e].prototype
t&&t.hasOwnProperty&&t.hasOwnProperty("addEventListener")&&(I(t,"addEventListener",(function(e){return function(t,n,r){return n&&n.handleEvent?("click"===t&&I(n,"handleEvent",(function(e){return function(t){return Ke("click")(t),e.call(this,t)}})),"keypress"===t&&I(n,"handleEvent",Qe())):("click"===t&&Ke("click",!0)(this),"keypress"===t&&Qe()(this)),e.call(this,t,n,r)}})),I(t,"removeEventListener",(function(e){return function(t,n,r){var o=n
try{o=o&&(o.__sentry_wrapped__||o)}catch(e){}return e.call(this,t,o,r)}})))})))},e.prototype._instrumentFetch=function(){(function(){if(!B())return!1
var e=_()
return-1!==e.fetch.toString().indexOf("native")})()&&I(nt,"fetch",(function(n){return function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o]
var i,a=r[0],s="GET"
"string"==typeof a?i=a:"Request"in nt&&a instanceof Request?(i=a.url,a.method&&(s=a.method)):i=String(a),r[1]&&r[1].method&&(s=r[1].method)
var l=X().getClient(),u=l&&l.getDsn()
if(u){var c=new ue(u).getStoreEndpoint()
if(c&&i.includes(c))return"POST"===s&&r[1]&&r[1].body&&ot(r[1].body),n.apply(nt,r)}var d={method:s,url:i}
return n.apply(nt,r).then((function(t){return d.status_code=t.status,e.addBreadcrumb({category:"fetch",data:d,type:"http"},{input:r,response:t}),t})).catch((function(n){throw e.addBreadcrumb({category:"fetch",data:d,level:t.Severity.Error,type:"http"},{error:n,input:r}),n}))}}))},e.prototype._instrumentHistory=function(){var t=this
if(function(){var e=_(),t=e.chrome,n=t&&t.app&&t.app.runtime,r="history"in e&&!!e.history.pushState&&!!e.history.replaceState
return!n&&r}()){var n=function(t,n){var r=w(nt.location.href),o=w(n),i=w(t)
i.path||(i=r),tt=n,r.protocol===o.protocol&&r.host===o.host&&(n=o.relative),r.protocol===i.protocol&&r.host===i.host&&(t=i.relative),e.addBreadcrumb({category:"navigation",data:{from:t,to:n}})},r=nt.onpopstate
nt.onpopstate=function(){for(var e=[],o=0;o<arguments.length;o++)e[o]=arguments[o]
var i=nt.location.href
if(n(tt,i),r)return r.apply(t,e)},I(nt.history,"pushState",o),I(nt.history,"replaceState",o)}function o(e){return function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r]
var o=t.length>2?t[2]:void 0
return o&&n(tt,String(o)),e.apply(this,t)}}},e.prototype._instrumentXHR=function(){if("XMLHttpRequest"in nt){var t=XMLHttpRequest.prototype
I(t,"open",(function(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n]
var r=t[1]
this.__sentry_xhr__={method:t[0],url:t[1]}
var o=X().getClient(),i=o&&o.getDsn()
if(i){var a=new ue(i).getStoreEndpoint()
h(r)&&a&&r.includes(a)&&(this.__sentry_own_request__=!0)}return e.apply(this,t)}})),I(t,"send",(function(t){return function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o]
var i=this
function a(){if(4===i.readyState){if(i.__sentry_own_request__)return
try{i.__sentry_xhr__&&(i.__sentry_xhr__.status_code=i.status)}catch(e){}e.addBreadcrumb({category:"xhr",data:i.__sentry_xhr__,type:"http"},{xhr:i})}}return i.__sentry_own_request__&&ot(r[0]),["onload","onerror","onprogress"].forEach((function(e){n(e,i)})),"onreadystatechange"in i&&"function"==typeof i.onreadystatechange?I(i,"onreadystatechange",(function(e){return $e(e,{mechanism:{data:{function:"onreadystatechange",handler:e&&e.name||"<anonymous>"},handled:!0,type:"instrument"}},a)})):i.onreadystatechange=a,t.apply(this,r)}}))}function n(e,t){e in t&&"function"==typeof t[e]&&I(t,e,(function(t){return $e(t,{mechanism:{data:{function:e,handler:t&&t.name||"<anonymous>"},handled:!0,type:"instrument"}})}))}},e.addBreadcrumb=function(t,n){X().getIntegration(e)&&X().addBreadcrumb(t,n)},e.prototype.setupOnce=function(){this._options.console&&this._instrumentConsole(),this._options.dom&&this._instrumentDOM(),this._options.xhr&&this._instrumentXHR(),this._options.fetch&&this._instrumentFetch(),this._options.history&&this._instrumentHistory()},e.id="Breadcrumbs",e}()
function ot(e){try{var n=JSON.parse(e)
rt.addBreadcrumb({category:"sentry",event_id:n.event_id,level:n.level||t.Severity.fromString("error"),message:k(n)},{event:n})}catch(e){A.error("Error while adding sentry type breadcrumb")}}var it=function(){function e(t){void 0===t&&(t={}),this.name=e.id,this._key=t.key||"cause",this._limit=t.limit||5}return e.prototype.setupOnce=function(){Q((function(t,n){var r=X().getIntegration(e)
return r?r._handler(t,n):t}))},e.prototype._handler=function(e,t){if(!(e.exception&&e.exception.values&&t&&t.originalException instanceof Error))return e
var n=this._walkErrorTree(t.originalException,this._key)
return e.exception.values=u(n,e.exception.values),e},e.prototype._walkErrorTree=function(e,t,n){if(void 0===n&&(n=[]),!(e[t]instanceof Error)||n.length+1>=this._limit)return n
var r=ze(e[t]),o=Ie(r)
return this._walkErrorTree(e[t],t,u([o],n))},e.id="LinkedErrors",e}(),at=_(),st=function(){function e(){this.name=e.id}return e.prototype.setupOnce=function(){Q((function(t){if(X().getIntegration(e)){if(!at.navigator||!at.location)return t
var n=t.request||{}
return n.url=n.url||at.location.href,n.headers=n.headers||{},n.headers["User-Agent"]=at.navigator.userAgent,s({},t,{request:n})}return t}))},e.id="UserAgent",e}(),lt=Object.freeze({GlobalHandlers:Ze,TryCatch:Xe,Breadcrumbs:rt,LinkedErrors:it,UserAgent:st}),ut=[new me,new ge,new Xe,new rt,new Ze,new it,new st],ct={},dt=_()
dt.Sentry&&dt.Sentry.Integrations&&(ct=dt.Sentry.Integrations)
var ft=s({},ct,_e,lt)
return t.BrowserClient=qe,t.Hub=Y,t.Integrations=ft,t.SDK_NAME=Ue,t.SDK_VERSION=Be,t.Scope=G,t.Transports=Fe,t.addBreadcrumb=function(e){re("addBreadcrumb",e)},t.addGlobalEventProcessor=Q,t.captureEvent=function(e){return re("captureEvent",e)},t.captureException=oe,t.captureMessage=function(e,t){var n
try{throw new Error(e)}catch(e){n=e}return re("captureMessage",e,t,{originalException:e,syntheticException:n})},t.close=function(e){var t=X().getClient()
return t?t.close(e):Promise.reject(!1)},t.configureScope=function(e){re("configureScope",e)},t.defaultIntegrations=ut,t.flush=function(e){var t=X().getClient()
return t?t.flush(e):Promise.reject(!1)},t.forceLoad=function(){},t.getCurrentHub=X,t.getHubFromCarrier=te,t.init=function(e){void 0===e&&(e={}),void 0===e.defaultIntegrations&&(e.defaultIntegrations=ut),function(e,t){!0===t.debug&&A.enable(),X().bindClient(new e(t))}(qe,e)},t.lastEventId=function(){return X().lastEventId()},t.onLoad=function(e){e()},t.setContext=function(e,t){re("setContext",e,t)},t.setExtra=function(e,t){re("setExtra",e,t)},t.setExtras=function(e){re("setExtras",e)},t.setTag=function(e,t){re("setTag",e,t)},t.setTags=function(e){re("setTags",e)},t.setUser=function(e){re("setUser",e)},t.showReportDialog=function(e){void 0===e&&(e={}),e.eventId||(e.eventId=X().lastEventId())
var t=X().getClient()
t&&t.showReportDialog(e)},t.withScope=ie,t.wrap=function(e){$e(e)()},t},o=[t],r=a,i="function"==typeof r?r.apply(t,o):r,void 0===i||(e.exports=i)},675:(e,t,n)=>{var r,o,i
e=n.nmd(e),"undefined"!=typeof process&&"true"!==process.env.OVERRIDE_PREVENTCOMMONJS&&"string"!=typeof process.versions.electron&&(e=void 0,t=void 0),o=[],r=function(e){"use strict"
e={},e.parse=d,e.format=function(e){return"string"==typeof e&&(e=new d(e)),e instanceof d?e.format():d.prototype.format.call(e)},e.Url=d
var t=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,n=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,r={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},o=Object.prototype.hasOwnProperty
function i(e){return decodeURIComponent(e.replace(/\+/g," "))}function a(e){for(var t,n=/([^=?&]+)=?([^&]*)/g,r={};t=n.exec(e);){var o=i(t[1]),a=i(t[2])
o in r||(r[o]=a)}return r}var s=[["#","hash"],["?","query"],function(e){return e.replace("\\","/")},["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d+)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],l={hash:1,query:1}
function u(e){var t=global&&global.location||{}
e=e||t
var r,o={},i=typeof e
if("blob:"===e.protocol)o=new d(unescape(e.pathname),{})
else if("string"===i)for(r in o=new d(e,{}),l)delete o[r]
else if("object"===i){for(r in e)r in l||(o[r]=e[r])
void 0===o.slashes&&(o.slashes=n.test(e.href))}return o}function c(e){var n=t.exec(e)
return{protocol:n[1]?n[1].toLowerCase():"",slashes:!!n[2],rest:n[3]}}function d(e,t,n){if(!(this instanceof d))return new d(e,t,n)
var r,o,i,l,f,p,h=s.slice(),v=typeof t,g=this,y=0
for("object"!==v&&"string"!==v&&(n=t,t=null),n&&"function"!=typeof n&&(n=a),t=u(t),o=c(e||""),r=!o.protocol&&!o.slashes,g.slashes=o.slashes||r&&t.slashes,g.protocol=o.protocol||t.protocol||"",e=o.rest,o.slashes||(h[3]=[/(.*)/,"pathname"]);y<h.length;y++)l=h[y],"function"!=typeof l?(i=l[0],p=l[1],i!=i?g[p]=e:"string"==typeof i?~(f=e.indexOf(i))&&("number"==typeof l[2]?(g[p]=e.slice(0,f),e=e.slice(f+l[2])):(g[p]=e.slice(f),e=e.slice(0,f))):(f=i.exec(e))&&(g[p]=f[1],e=e.slice(0,f.index)),g[p]=g[p]||r&&l[3]&&t[p]||"",l[4]&&(g[p]=g[p].toLowerCase())):e=l(e)
if(g.search=g.query,g.pathname||g.search){var m=g.pathname||"",_=g.search||""
g.path=m+_}else g.path=null
g.query=n?n(g.query):g.query.substr(1),r&&t.slashes&&"/"!==g.pathname.charAt(0)&&(""!==g.pathname||""!==t.pathname)&&(g.pathname=function(e,t){for(var n=(t||"/").split("/").slice(0,-1).concat(e.split("/")),r=n.length,o=n[r-1],i=!1,a=0;r--;)"."===n[r]?n.splice(r,1):".."===n[r]?(n.splice(r,1),a++):a&&(0===r&&(i=!0),n.splice(r,1),a--)
return i&&n.unshift(""),"."!==o&&".."!==o||n.push(""),n.join("/")}(g.pathname,t.pathname)),function(e,t){if(t=t.split(":")[0],e=+e,!e)return!1
switch(t){case"http":case"ws":return 80!==e
case"https":case"wss":return 443!==e
case"ftp":return 21!==e
case"gopher":return 70!==e
case"file":return!1}return 0!==e}(g.port,g.protocol)||(g.host=g.hostname,g.port=""),g.username=g.password="",g.auth&&(l=g.auth.split(":"),g.username=l[0]||"",g.password=l[1]||""),g.href=g.format()}return d.prototype.format=function(){var e=this.auth||""
e&&(e=encodeURIComponent(e),e=e.replace(/%3A/i,":"),e+="@")
var t=this.protocol||"",n=this.pathname||"",i=this.hash||"",a=!1,s=""
this.host?a=e+this.host:this.hostname&&(a=e+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(a+=":"+this.port)),this.query&&"object"==typeof this.query&&Object.keys(this.query).length&&(s=function(e,t){t=t||""
var n=[]
for(var r in"string"!=typeof t&&(t="?"),e)o.call(e,r)&&n.push(encodeURIComponent(r)+"="+encodeURIComponent(e[r]))
return n.length?t+n.join("&"):""}(this.query,""))
var l=this.search||s&&"?"+s||""
return t&&":"!==t.substr(-1)&&(t+=":"),this.slashes||(!t||r[t])&&!1!==a?(a="//"+(a||""),"/"!==n.charAt(0)&&(n="/"+n)):a||(a=""),i&&"#"!==i.charAt(0)&&(i="#"+i),l&&"?"!==l.charAt(0)&&(l="?"+l),n=n.replace(/[?#]/g,(function(e){return encodeURIComponent(e)})),l=l.replace("#","%23"),t+a+n+l+i},d.extractProtocol=c,d.location=u,e},i="function"==typeof r?r.apply(t,o):r,void 0===i||(e.exports=i)},181:(e,t,n)=>{var r,o,i
e=n.nmd(e),"undefined"!=typeof process&&"true"!==process.env.OVERRIDE_PREVENTCOMMONJS&&"string"!=typeof process.versions.electron&&(e=void 0,t=void 0),o=[],r=function(){var e={},t=/%[sdj%]/g
e.format=function(e){if(!h(e)){for(var n=[],r=0;r<arguments.length;r++)n.push(o(arguments[r]))
return n.join(" ")}r=1
for(var i=arguments,a=i.length,s=String(e).replace(t,(function(e){if("%%"===e)return"%"
if(r>=a)return e
switch(e){case"%s":return String(i[r++])
case"%d":return Number(i[r++])
case"%j":try{return JSON.stringify(i[r++])}catch(e){return"[Circular]"}default:return e}})),l=i[r];r<a;l=i[++r])f(l)||!y(l)?s+=" "+l:s+=" "+o(l)
return s},e.deprecate=function(t,n){if(v(global.process))return function(){return e.deprecate(t,n).apply(this,arguments)}
if(!0===process.noDeprecation)return t
var r=!1
return function(){if(!r){if(process.throwDeprecation)throw new Error(n)
process.traceDeprecation?console.trace(n):console.error(n),r=!0}return t.apply(this,arguments)}}
var n,r={}
function o(t,n){var r={seen:[],stylize:a}
return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),d(n)?r.showHidden=n:n&&e._extend(r,n),v(r.showHidden)&&(r.showHidden=!1),v(r.depth)&&(r.depth=2),v(r.colors)&&(r.colors=!1),v(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=i),s(r,t,r.depth)}function i(e,t){var n=o.styles[t]
return n?"["+o.colors[n][0]+"m"+e+"["+o.colors[n][1]+"m":e}function a(e,t){return e}function s(t,n,r){if(t.customInspect&&n&&b(n.inspect)&&n.inspect!==e.inspect&&(!n.constructor||n.constructor.prototype!==n)){var o=n.inspect(r,t)
return h(o)||(o=s(t,o,r)),o}var i=function(e,t){if(v(t))return e.stylize("undefined","undefined")
if(h(t)){var n="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'"
return e.stylize(n,"string")}return p(t)?e.stylize(""+t,"number"):d(t)?e.stylize(""+t,"boolean"):f(t)?e.stylize("null","null"):void 0}(t,n)
if(i)return i
var a=Object.keys(n),y=function(e){var t={}
return e.forEach((function(e,n){t[e]=!0})),t}(a)
if(t.showHidden&&(a=Object.getOwnPropertyNames(n)),_(n)&&(a.indexOf("message")>=0||a.indexOf("description")>=0))return l(n)
if(0===a.length){if(b(n)){var w=n.name?": "+n.name:""
return t.stylize("[Function"+w+"]","special")}if(g(n))return t.stylize(RegExp.prototype.toString.call(n),"regexp")
if(m(n))return t.stylize(Date.prototype.toString.call(n),"date")
if(_(n))return l(n)}var k,S="",E=!1,j=["{","}"]
if(c(n)&&(E=!0,j=["[","]"]),b(n)){var T=n.name?": "+n.name:""
S=" [Function"+T+"]"}return g(n)&&(S=" "+RegExp.prototype.toString.call(n)),m(n)&&(S=" "+Date.prototype.toUTCString.call(n)),_(n)&&(S=" "+l(n)),0!==a.length||E&&0!=n.length?r<0?g(n)?t.stylize(RegExp.prototype.toString.call(n),"regexp"):t.stylize("[Object]","special"):(t.seen.push(n),k=E?function(e,t,n,r,o){for(var i=[],a=0,s=t.length;a<s;++a)x(t,String(a))?i.push(u(e,t,n,r,String(a),!0)):i.push("")
return o.forEach((function(o){o.match(/^\d+$/)||i.push(u(e,t,n,r,o,!0))})),i}(t,n,r,y,a):a.map((function(e){return u(t,n,r,y,e,E)})),t.seen.pop(),function(e,t,n){var r=e.reduce((function(e,t){return t.indexOf("\n"),e+t.replace(/\u001b\[\d\d?m/g,"").length+1}),0)
return r>60?n[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+n[1]:n[0]+t+" "+e.join(", ")+" "+n[1]}(k,S,j)):j[0]+S+j[1]}function l(e){return"["+Error.prototype.toString.call(e)+"]"}function u(e,t,n,r,o,i){var a,l,u
if(u=Object.getOwnPropertyDescriptor(t,o)||{value:t[o]},u.get?l=u.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):u.set&&(l=e.stylize("[Setter]","special")),x(r,o)||(a="["+o+"]"),l||(e.seen.indexOf(u.value)<0?(l=f(n)?s(e,u.value,null):s(e,u.value,n-1),l.indexOf("\n")>-1&&(l=i?l.split("\n").map((function(e){return"  "+e})).join("\n").substr(2):"\n"+l.split("\n").map((function(e){return"   "+e})).join("\n"))):l=e.stylize("[Circular]","special")),v(a)){if(i&&o.match(/^\d+$/))return l
a=JSON.stringify(""+o),a.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(a=a.substr(1,a.length-2),a=e.stylize(a,"name")):(a=a.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),a=e.stylize(a,"string"))}return a+": "+l}function c(e){return Array.isArray(e)}function d(e){return"boolean"==typeof e}function f(e){return null===e}function p(e){return"number"==typeof e}function h(e){return"string"==typeof e}function v(e){return void 0===e}function g(e){return y(e)&&"[object RegExp]"===w(e)}function y(e){return"object"==typeof e&&null!==e}function m(e){return y(e)&&"[object Date]"===w(e)}function _(e){return y(e)&&("[object Error]"===w(e)||e instanceof Error)}function b(e){return"function"==typeof e}function w(e){return Object.prototype.toString.call(e)}function k(e){return e<10?"0"+e.toString(10):e.toString(10)}e.debuglog=function(t){if(v(n)&&(n=process.env.NODE_DEBUG||""),t=t.toUpperCase(),!r[t])if(new RegExp("\\b"+t+"\\b","i").test(n)){var o=process.pid
r[t]=function(){var n=e.format.apply(e,arguments)
console.error("%s %d: %s",t,o,n)}}else r[t]=function(){}
return r[t]},e.inspect=o,o.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},o.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},e.isArray=c,e.isBoolean=d,e.isNull=f,e.isNullOrUndefined=function(e){return null==e},e.isNumber=p,e.isString=h,e.isSymbol=function(e){return"symbol"==typeof e},e.isUndefined=v,e.isRegExp=g,e.isObject=y,e.isDate=m,e.isError=_,e.isFunction=b,e.isPrimitive=function(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e},e.isBuffer=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8}
var S=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
function E(){var e=new Date,t=[k(e.getHours()),k(e.getMinutes()),k(e.getSeconds())].join(":")
return[e.getDate(),S[e.getMonth()],t].join(" ")}function x(e,t){return Object.prototype.hasOwnProperty.call(e,t)}return e.log=function(){console.log("%s - %s",E(),e.format.apply(e,arguments))},e.inherits=function(e,t){if(null===t)e.prototype=Object.create(t)
else{for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])
var r=function(){this.constructor=e}
r.prototype=t.prototype,e.prototype=new r}},e._extend=function(e,t){if(!t||!y(t))return e
for(var n=Object.keys(t),r=n.length;r--;)e[n[r]]=t[n[r]]
return e},e},i="function"==typeof r?r.apply(t,o):r,void 0===i||(e.exports=i)}},t={}
function n(r){var o=t[r]
if(void 0!==o)return o.exports
var i=t[r]={id:r,loaded:!1,exports:{}}
return e[r].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{"use strict"
var e
!function(e){e[e.Backspace=8]="Backspace",e[e.Tab=9]="Tab",e[e.Enter=13]="Enter",e[e.Shift=16]="Shift",e[e.Escape=27]="Escape",e[e.Spacebar=32]="Spacebar",e[e.PageUp=33]="PageUp",e[e.PageDown=34]="PageDown",e[e.End=35]="End",e[e.Home=36]="Home",e[e.ArrowLeft=37]="ArrowLeft",e[e.ArrowUp=38]="ArrowUp",e[e.ArrowRight=39]="ArrowRight",e[e.ArrowDown=40]="ArrowDown",e[e.Zero=48]="Zero",e[e.One=49]="One",e[e.Two=50]="Two",e[e.Three=51]="Three",e[e.Four=52]="Four",e[e.Five=53]="Five",e[e.Six=54]="Six",e[e.Seven=55]="Seven",e[e.Eight=56]="Eight",e[e.Nine=57]="Nine",e[e.A=65]="A",e[e.B=66]="B",e[e.C=67]="C",e[e.D=68]="D",e[e.E=69]="E",e[e.F=70]="F",e[e.G=71]="G",e[e.H=72]="H",e[e.I=73]="I",e[e.J=74]="J",e[e.K=75]="K",e[e.L=76]="L",e[e.M=77]="M",e[e.N=78]="N",e[e.O=79]="O",e[e.P=80]="P",e[e.Q=81]="Q",e[e.R=82]="R",e[e.S=83]="S",e[e.T=84]="T",e[e.U=85]="U",e[e.V=86]="V",e[e.W=87]="W",e[e.X=88]="X",e[e.Y=89]="Y",e[e.Z=90]="Z",e[e.OUmlaut=186]="OUmlaut",e[e.Comma=188]="Comma",e[e.Period=190]="Period",e[e.Slash=191]="Slash",e[e.OpenBracket=219]="OpenBracket",e[e.CloseBracket=221]="CloseBracket"}(e||(e={}))
e.ArrowLeft,e.ArrowRight,e.ArrowUp,e.ArrowDown,e.PageUp,e.PageDown,e.Home,e.End
var t=n(244)
E("a")
const r=E("abbr"),o=(E("address"),E("area"),E("article"),E("aside"),E("audio"),E("b"),E("base"),E("bdi")),i=E("bdo"),a=(E("big"),E("blockquote"),E("body"),E("br"),E("button"),E("canvas"),E("caption"),E("cite")),s=(E("code"),E("col"),E("colgroup"),E("data"),E("datalist"),E("dd"),E("del"),E("details"),E("dfn"),E("dialog"),E("div")),l=(E("dl"),E("dt"),E("em")),u=(E("embed"),E("fieldset"),E("figcaption"),E("figure"),E("footer"),E("form"),E("h1")),c=E("h2"),d=E("h3"),f=E("h4"),p=E("h5"),h=E("h6"),v=(E("head"),E("header"),E("hgroup"),E("hr"),E("html"),E("i"),E("iframe"),E("img")),g=(E("input"),E("ins"),E("kbd"),E("keygen"),E("label"),E("legend"),E("li"),E("link"),E("main"),E("map"),E("mark")),y=(E("menu"),E("menuitem"),E("meta"),E("meter"),E("nav"),E("noscript"),E("object"),E("ol"),E("optgroup"),E("option"),E("output"),E("p")),m=(E("param"),E("picture"),E("pre"),E("progress"),E("q"),E("rp"),E("rt"),E("ruby"),E("s")),_=(E("samp"),E("script"),E("section"),E("select"),E("small")),b=(E("source"),E("span")),w=E("strong"),k=(E("style"),E("sub"),E("summary"),E("sup")),S=(E("table"),E("tbody"),E("td"),E("textarea"),E("tfoot"),E("th"),E("thead"),E("time"),E("title"),E("tr"),E("track"),E("u"),E("ul"),E("var"),E("video"),E("wbr"),E("svg"),E("circle"),E("defs"),E("ellipse"),E("g"),E("image"),E("line"),E("linearGradient"),E("mask"),E("path"),E("pattern"),E("polygon"),E("polyline"),E("radialGradient"),E("rect"),E("stop"),E("text"),E("tspan"),(e,...n)=>t.createElement(t.Fragment,e,...n))
function E(e){const n=t.createElement.bind(null,e)
return n.type=e,n}const x=null,j=e=>null!=e,T=e=>!j(e),A=(e,t)=>j(e)?t(e):e,z=(e,t)=>j(e)?e:t(),I=e=>j(e)?e:null,P={div:s,span:b},C=t.forwardRef(((t,n)=>{const r=z(t.element,(()=>"div"))
return P[r]({ref:n,id:t.id,className:t.className,role:t.role?t.role:"button","aria-checked":t.ariaChecked,"aria-invalid":t.ariaInvalid,"aria-disabled":t.isDisabled,"aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,"aria-describedby":t.ariaDescribedby,"aria-pressed":t.isPressed,"aria-expanded":t.isExpanded,"aria-selected":t.ariaSelected,tabIndex:t.isDisabled?z(t.tabIndex,(()=>{})):z(t.tabIndex,(()=>0)),onMouseDown:t.onMouseDown,onMouseEnter:t.onMouseEnter,onFocus:t.onFocus,onBlur:t.onBlur,onMouseLeave:t.onMouseLeave,onMouseMove:t.onMouseMove,onClick:e=>{!t.isDisabled&&t.onClick&&t.onClick(e)},onKeyDown:n=>{t.isDisabled||(t.onKeyDown&&t.onKeyDown(n),!t.onClick||n.keyCode!==e.Spacebar&&n.keyCode!==e.Enter||!1!==n.defaultPrevented||(n.preventDefault(),t.onClick(n)))}},t.children)}))
C.displayName="BaseButton"
const O=t.createFactory(C)
function N(e,...t){let n,r=""
if("object"==typeof e)for(const t in e)e.hasOwnProperty(t)&&e[t]&&(r+=" "+t)
else e&&(r=" "+e)
for(n=0;n<t.length;++n)t[n]&&(r+=" "+t[n])
return r.substr(1)}function D(e){return e.ariaLabel?e.ariaLabel:e.shouldHideLabel&&"string"==typeof e.label?e.label:void 0}const R=t.forwardRef(((e,n)=>{const r=z(e.size,(()=>"large"))
return O(Object.assign(Object.assign({ref:n},e),{ariaLabel:D(e),className:N({"ThemeableRectangularButton--isActive":!!e.isExpanded,"ThemeableRectangularButton--isEnabled":!e.isDisabled,"ThemeableRectangularButton--isDisabled":!!e.isDisabled,"ThemeableRectangularButton--withNoLabel":!!e.shouldHideLabel},"ThemeableRectangularButton",`ThemeableRectangularButton--${r}`,e.className),element:"div"}),I(A(e.icon,(e=>t.cloneElement(e,{className:N("ThemeableRectangularButton-leftIcon",e.props.className)})))),e.shouldHideLabel?null:e.label,I(A(e.rightIcon,(e=>t.cloneElement(e,{className:N("ThemeableRectangularButton-rightIcon",e.props.className)})))))}))
R.displayName="ThemeableRectangularButton"
const L=t.createFactory(R),M=t.forwardRef(((e,t)=>L(Object.assign(Object.assign({},e),{ref:t,className:N({"PrimaryButton--standardTheme":!e.isInverse,"PrimaryButton--inverseTheme":!!e.isInverse},"PrimaryButton",e.className)}))))
M.displayName="PrimaryButton"
const F=t.createFactory(M)
class W extends t.PureComponent{render(){const e=z(this.props.size,(()=>"small"))
return v({className:N("Illustration",`Illustration--${e}`,`Illustration--${this.props.kind}`,this.props.className),alt:this.props.alt||"",src:this.props.src})}}W.displayName="Illustration"
const U=t.createFactory(W)
const B="none",q="deuteranopia"
function H(e,n,r={}){const o=t.useRef()
t.useEffect((()=>{var t
if(e&&function(){try{MutationObserver}catch(e){return!1}return!0}())return o.current=new MutationObserver(n),null===(t=o.current)||void 0===t||t.observe(e,r),()=>{o.current&&(o.current.disconnect(),o.current=null)}}),[])}const V=({targetElement:e,callback:t,options:n={}})=>(H(e,t,n),null)
V.displayName="AsanaMutationObserver"
const $=t.createFactory(V)
function G(e,t){try{return t.window.matchMedia(e)}catch(e){return}}const K=({mediaQueryToCheck:e,render:n,services:r})=>{const o=function({mediaQueryToCheck:e,services:n}){var r
const o=t.useRef(),[i,a]=t.useState((null===(r=G(e,n))||void 0===r?void 0:r.matches)||!1),s=t.useCallback((e=>{a(e.matches)}),[])
return t.useEffect((()=>(o.current=G(e,n),o&&o.current&&"addEventListener"in o.current&&o.current.addEventListener("change",s),()=>{var e
null===(e=o.current)||void 0===e||e.removeEventListener("change",s),o.current=void 0})),[e,s,n]),i}({mediaQueryToCheck:e,services:r})
return n(o)}
K.displayName="MediaMatch"
const Q=t.createFactory(K)
function Y(e,t){return!!(e===t||Number.isNaN(e)&&Number.isNaN(t))||!(!e||!t)&&("function"==typeof e.valueOf&&"function"==typeof t.valueOf&&(e=e.valueOf(),t=t.valueOf()),"function"==typeof(null==e?void 0:e.equals)&&"function"==typeof(null==t?void 0:t.equals)?e.equals(t):e===t||Number.isNaN(e)&&Number.isNaN(t))}function J(e,t){return e===t||!T(e)&&!T(t)&&function(e,t){const n=Object.keys(e),r=Object.keys(t)
if(n.length!==r.length)return!1
let o
for(let r=n.length-1;r>=0;r--){o=n[r]
const i=e[o],a=t[o]
if(!Y(i,a))return!1}return!0}(e,t)}class Z extends t.Component{shouldComponentUpdate(e,t){return!J(this.props,e)||!J(this.state,t)}}const X="(prefers-color-scheme: dark)"
class ee extends Z{constructor(){super(...arguments),this.state={inferredUserDarkModeSetting:x,inferredColorFriendlyMode:x},this._onBodyClassNameChange=()=>{this.setState({inferredUserDarkModeSetting:re(this.props.services),inferredColorFriendlyMode:ne(this.props.services)})}}componentDidMount(){this.setState({inferredUserDarkModeSetting:re(this.props.services),inferredColorFriendlyMode:ne(this.props.services)})}render(){return S({},$({targetElement:this.props.services.document.body(),callback:this._onBodyClassNameChange,options:{attributes:!0,attributeFilter:["class"],subtree:!1}}),Q({mediaQueryToCheck:X,services:this.props.services,render:e=>{const t=j(e)&&j(this.state.inferredUserDarkModeSetting)&&j(this.state.inferredColorFriendlyMode)
return t?this.props.render(this._computeTokensReactive(e)):null}}))}_computeTokensReactive(e){const t=e?"dark":"light"
return oe(this.props.tokenDefinitions,this._getComputedDarkModeValueFromState(t),this.state.inferredColorFriendlyMode)}_getComputedDarkModeValueFromState(e){return te(this.state.inferredUserDarkModeSetting,e)}}ee.displayName="ColorTokenInjectorInternal"
function te(e,t){if(T(e)||T(t))return"light"
switch(e){case"light":return"light"
case"systemSetting":return t
case"dark":return"dark"}}function ne(e){return e.document.body().classList.contains("DesignTokenThemeSelectors-theme--deuteranopiaMode")?q:B}function re(e){const t=e.document.body().classList
return t.contains("DesignTokenThemeSelectors-theme--systemDarkMode")?"systemSetting":t.contains("DesignTokenThemeSelectors-theme--darkMode")?"dark":"light"}const oe=function(e,t,n,r){return e.map((e=>{if(n===q&&j(e.deuteranopiaValue))return e.deuteranopiaValue
switch(t){case"light":return e.defaultValue
case"dark":return e.darkValue}}))}
var ie=32,ae=31,se={}
function le(e){e&&(e.value=!0)}function ue(){}function ce(e){return void 0===e.size&&(e.size=e.__iterate(fe)),e.size}function de(e,t){if("number"!=typeof t){var n=t>>>0
if(""+n!==t||4294967295===n)return NaN
t=n}return t<0?ce(e)+t:t}function fe(){return!0}function pe(e,t,n){return(0===e&&!ye(e)||void 0!==n&&e<=-n)&&(void 0===t||void 0!==n&&t>=n)}function he(e,t){return ge(e,t,0)}function ve(e,t){return ge(e,t,t)}function ge(e,t,n){return void 0===e?n:ye(e)?t===1/0?t:0|Math.max(0,t+e):void 0===t||t===e?e:0|Math.min(t,e)}function ye(e){return e<0||0===e&&1/e==-1/0}var me="@@__IMMUTABLE_ITERABLE__@@"
function _e(e){return Boolean(e&&e[me])}var be="@@__IMMUTABLE_KEYED__@@"
function we(e){return Boolean(e&&e[be])}var ke="@@__IMMUTABLE_INDEXED__@@"
function Se(e){return Boolean(e&&e[ke])}function Ee(e){return we(e)||Se(e)}var xe=function(e){return _e(e)?e:Ke(e)},je=function(e){function t(e){return we(e)?e:Qe(e)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t}(xe),Te=function(e){function t(e){return Se(e)?e:Ye(e)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t}(xe),Ae=function(e){function t(e){return _e(e)&&!Ee(e)?e:Je(e)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t}(xe)
xe.Keyed=je,xe.Indexed=Te,xe.Set=Ae
var ze="@@__IMMUTABLE_SEQ__@@"
function Ie(e){return Boolean(e&&e[ze])}var Pe="@@__IMMUTABLE_RECORD__@@"
function Ce(e){return Boolean(e&&e[Pe])}function Oe(e){return _e(e)||Ce(e)}var Ne="@@__IMMUTABLE_ORDERED__@@"
function De(e){return Boolean(e&&e[Ne])}var Re="function"==typeof Symbol&&Symbol.iterator,Le="@@iterator",Me=Re||Le,Fe=function(e){this.next=e}
function We(e,t,n,r){var o=0===e?t:1===e?n:[t,n]
return r?r.value=o:r={value:o,done:!1},r}function Ue(){return{value:void 0,done:!0}}function Be(e){return!!Array.isArray(e)||!!Ve(e)}function qe(e){return e&&"function"==typeof e.next}function He(e){var t=Ve(e)
return t&&t.call(e)}function Ve(e){var t=e&&(Re&&e[Re]||e["@@iterator"])
if("function"==typeof t)return t}Fe.prototype.toString=function(){return"[Iterator]"},Fe.KEYS=0,Fe.VALUES=1,Fe.ENTRIES=2,Fe.prototype.inspect=Fe.prototype.toSource=function(){return this.toString()},Fe.prototype[Me]=function(){return this}
var $e=Object.prototype.hasOwnProperty
function Ge(e){return!(!Array.isArray(e)&&"string"!=typeof e)||e&&"object"==typeof e&&Number.isInteger(e.length)&&e.length>=0&&(0===e.length?1===Object.keys(e).length:e.hasOwnProperty(e.length-1))}var Ke=function(e){function t(e){return null==e?nt():Oe(e)?e.toSeq():function(e){var t=it(e)
if(t)return n=e,r=Ve(n),r&&r===n.entries?t.fromEntrySeq():function(e){var t=Ve(e)
return t&&t===e.keys}(e)?t.toSetSeq():t
var n,r
if("object"==typeof e)return new Xe(e)
throw new TypeError("Expected Array or collection object of values, or keyed object: "+e)}(e)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.toSeq=function(){return this},t.prototype.toString=function(){return this.__toString("Seq {","}")},t.prototype.cacheResult=function(){return!this._cache&&this.__iterateUncached&&(this._cache=this.entrySeq().toArray(),this.size=this._cache.length),this},t.prototype.__iterate=function(e,t){var n=this._cache
if(n){for(var r=n.length,o=0;o!==r;){var i=n[t?r-++o:o++]
if(!1===e(i[1],i[0],this))break}return o}return this.__iterateUncached(e,t)},t.prototype.__iterator=function(e,t){var n=this._cache
if(n){var r=n.length,o=0
return new Fe((function(){if(o===r)return{value:void 0,done:!0}
var i=n[t?r-++o:o++]
return We(e,i[0],i[1])}))}return this.__iteratorUncached(e,t)},t}(xe),Qe=function(e){function t(e){return null==e?nt().toKeyedSeq():_e(e)?we(e)?e.toSeq():e.fromEntrySeq():Ce(e)?e.toSeq():rt(e)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.toKeyedSeq=function(){return this},t}(Ke),Ye=function(e){function t(e){return null==e?nt():_e(e)?we(e)?e.entrySeq():e.toIndexedSeq():Ce(e)?e.toSeq().entrySeq():ot(e)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.of=function(){return t(arguments)},t.prototype.toIndexedSeq=function(){return this},t.prototype.toString=function(){return this.__toString("Seq [","]")},t}(Ke),Je=function(e){function t(e){return(_e(e)&&!Ee(e)?e:Ye(e)).toSetSeq()}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.of=function(){return t(arguments)},t.prototype.toSetSeq=function(){return this},t}(Ke)
Ke.isSeq=Ie,Ke.Keyed=Qe,Ke.Set=Je,Ke.Indexed=Ye,Ke.prototype[ze]=!0
var Ze=function(e){function t(e){this._array=e,this.size=e.length}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.get=function(e,t){return this.has(e)?this._array[de(this,e)]:t},t.prototype.__iterate=function(e,t){for(var n=this._array,r=n.length,o=0;o!==r;){var i=t?r-++o:o++
if(!1===e(n[i],i,this))break}return o},t.prototype.__iterator=function(e,t){var n=this._array,r=n.length,o=0
return new Fe((function(){if(o===r)return{value:void 0,done:!0}
var i=t?r-++o:o++
return We(e,i,n[i])}))},t}(Ye),Xe=function(e){function t(e){var t=Object.keys(e).concat(Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[])
this._object=e,this._keys=t,this.size=t.length}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.get=function(e,t){return void 0===t||this.has(e)?this._object[e]:t},t.prototype.has=function(e){return $e.call(this._object,e)},t.prototype.__iterate=function(e,t){for(var n=this._object,r=this._keys,o=r.length,i=0;i!==o;){var a=r[t?o-++i:i++]
if(!1===e(n[a],a,this))break}return i},t.prototype.__iterator=function(e,t){var n=this._object,r=this._keys,o=r.length,i=0
return new Fe((function(){if(i===o)return{value:void 0,done:!0}
var a=r[t?o-++i:i++]
return We(e,a,n[a])}))},t}(Qe)
Xe.prototype[Ne]=!0
var et,tt=function(e){function t(e){this._collection=e,this.size=e.length||e.size}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.__iterateUncached=function(e,t){if(t)return this.cacheResult().__iterate(e,t)
var n=this._collection,r=He(n),o=0
if(qe(r))for(var i;!(i=r.next()).done&&!1!==e(i.value,o++,this););return o},t.prototype.__iteratorUncached=function(e,t){if(t)return this.cacheResult().__iterator(e,t)
var n=this._collection,r=He(n)
if(!qe(r))return new Fe(Ue)
var o=0
return new Fe((function(){var t=r.next()
return t.done?t:We(e,o++,t.value)}))},t}(Ye)
function nt(){return et||(et=new Ze([]))}function rt(e){var t=it(e)
if(t)return t.fromEntrySeq()
if("object"==typeof e)return new Xe(e)
throw new TypeError("Expected Array or collection object of [k, v] entries, or keyed object: "+e)}function ot(e){var t=it(e)
if(t)return t
throw new TypeError("Expected Array or collection object of values: "+e)}function it(e){return Ge(e)?new Ze(e):Be(e)?new tt(e):void 0}var at="@@__IMMUTABLE_MAP__@@"
function st(e){return Boolean(e&&e[at])}function lt(e){return st(e)&&De(e)}function ut(e){return Boolean(e&&"function"==typeof e.equals&&"function"==typeof e.hashCode)}function ct(e,t){if(e===t||e!=e&&t!=t)return!0
if(!e||!t)return!1
if("function"==typeof e.valueOf&&"function"==typeof t.valueOf){if(e=e.valueOf(),t=t.valueOf(),e===t||e!=e&&t!=t)return!0
if(!e||!t)return!1}return!!(ut(e)&&ut(t)&&e.equals(t))}var dt="function"==typeof Math.imul&&-2===Math.imul(4294967295,2)?Math.imul:function(e,t){e|=0,t|=0
var n=65535&e,r=65535&t
return n*r+((e>>>16)*r+n*(t>>>16)<<16>>>0)|0}
function ft(e){return e>>>1&1073741824|3221225471&e}var pt=Object.prototype.valueOf
function ht(e){if(null==e)return vt(e)
if("function"==typeof e.hashCode)return ft(e.hashCode(e))
var t,n=(t=e,t.valueOf!==pt&&"function"==typeof t.valueOf?t.valueOf(t):t)
if(null==n)return vt(n)
switch(typeof n){case"boolean":return n?1108378657:1108378656
case"number":return function(e){if(e!=e||e===1/0)return 0
var t=0|e
t!==e&&(t^=4294967295*e)
for(;e>4294967295;)e/=4294967295,t^=e
return ft(t)}(n)
case"string":return n.length>xt?function(e){var t=At[e]
void 0===t&&(t=gt(e),Tt===jt&&(Tt=0,At={}),Tt++,At[e]=t)
return t}(n):gt(n)
case"object":case"function":return function(e){var t
if(wt&&(t=bt.get(e),void 0!==t))return t
if(t=e[Et],void 0!==t)return t
if(!mt){if(t=e.propertyIsEnumerable&&e.propertyIsEnumerable[Et],void 0!==t)return t
if(t=function(e){if(e&&e.nodeType>0)switch(e.nodeType){case 1:return e.uniqueID
case 9:return e.documentElement&&e.documentElement.uniqueID}}(e),void 0!==t)return t}if(t=_t(),wt)bt.set(e,t)
else{if(void 0!==yt&&!1===yt(e))throw new Error("Non-extensible objects are not allowed as keys.")
if(mt)Object.defineProperty(e,Et,{enumerable:!1,configurable:!1,writable:!1,value:t})
else if(void 0!==e.propertyIsEnumerable&&e.propertyIsEnumerable===e.constructor.prototype.propertyIsEnumerable)e.propertyIsEnumerable=function(){return this.constructor.prototype.propertyIsEnumerable.apply(this,arguments)},e.propertyIsEnumerable[Et]=t
else{if(void 0===e.nodeType)throw new Error("Unable to set a non-enumerable property on object.")
e[Et]=t}}return t}(n)
case"symbol":return function(e){var t=kt[e]
if(void 0!==t)return t
return t=_t(),kt[e]=t,t}(n)
default:if("function"==typeof n.toString)return gt(n.toString())
throw new Error("Value type "+typeof n+" cannot be hashed.")}}function vt(e){return null===e?1108378658:1108378659}function gt(e){for(var t=0,n=0;n<e.length;n++)t=31*t+e.charCodeAt(n)|0
return ft(t)}var yt=Object.isExtensible,mt=function(){try{return Object.defineProperty({},"@",{}),!0}catch(e){return!1}}()
function _t(){var e=++St
return 1073741824&St&&(St=0),e}var bt,wt="function"==typeof WeakMap
wt&&(bt=new WeakMap)
var kt=Object.create(null),St=0,Et="__immutablehash__"
"function"==typeof Symbol&&(Et=Symbol(Et))
var xt=16,jt=255,Tt=0,At={},zt=function(e){function t(e,t){this._iter=e,this._useKeys=t,this.size=e.size}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.get=function(e,t){return this._iter.get(e,t)},t.prototype.has=function(e){return this._iter.has(e)},t.prototype.valueSeq=function(){return this._iter.valueSeq()},t.prototype.reverse=function(){var e=this,t=Dt(this,!0)
return this._useKeys||(t.valueSeq=function(){return e._iter.toSeq().reverse()}),t},t.prototype.map=function(e,t){var n=this,r=Nt(this,e,t)
return this._useKeys||(r.valueSeq=function(){return n._iter.toSeq().map(e,t)}),r},t.prototype.__iterate=function(e,t){var n=this
return this._iter.__iterate((function(t,r){return e(t,r,n)}),t)},t.prototype.__iterator=function(e,t){return this._iter.__iterator(e,t)},t}(Qe)
zt.prototype[Ne]=!0
var It=function(e){function t(e){this._iter=e,this.size=e.size}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.includes=function(e){return this._iter.includes(e)},t.prototype.__iterate=function(e,t){var n=this,r=0
return t&&ce(this),this._iter.__iterate((function(o){return e(o,t?n.size-++r:r++,n)}),t)},t.prototype.__iterator=function(e,t){var n=this,r=this._iter.__iterator(1,t),o=0
return t&&ce(this),new Fe((function(){var i=r.next()
return i.done?i:We(e,t?n.size-++o:o++,i.value,i)}))},t}(Ye),Pt=function(e){function t(e){this._iter=e,this.size=e.size}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.has=function(e){return this._iter.includes(e)},t.prototype.__iterate=function(e,t){var n=this
return this._iter.__iterate((function(t){return e(t,t,n)}),t)},t.prototype.__iterator=function(e,t){var n=this._iter.__iterator(1,t)
return new Fe((function(){var t=n.next()
return t.done?t:We(e,t.value,t.value,t)}))},t}(Je),Ct=function(e){function t(e){this._iter=e,this.size=e.size}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.entrySeq=function(){return this._iter.toSeq()},t.prototype.__iterate=function(e,t){var n=this
return this._iter.__iterate((function(t){if(t){$t(t)
var r=_e(t)
return e(r?t.get(1):t[1],r?t.get(0):t[0],n)}}),t)},t.prototype.__iterator=function(e,t){var n=this._iter.__iterator(1,t)
return new Fe((function(){for(;;){var t=n.next()
if(t.done)return t
var r=t.value
if(r){$t(r)
var o=_e(r)
return We(e,o?r.get(0):r[0],o?r.get(1):r[1],t)}}}))},t}(Qe)
function Ot(e){var t=Kt(e)
return t._iter=e,t.size=e.size,t.flip=function(){return e},t.reverse=function(){var t=e.reverse.apply(this)
return t.flip=function(){return e.reverse()},t},t.has=function(t){return e.includes(t)},t.includes=function(t){return e.has(t)},t.cacheResult=Qt,t.__iterateUncached=function(t,n){var r=this
return e.__iterate((function(e,n){return!1!==t(n,e,r)}),n)},t.__iteratorUncached=function(t,n){if(2===t){var r=e.__iterator(t,n)
return new Fe((function(){var e=r.next()
if(!e.done){var t=e.value[0]
e.value[0]=e.value[1],e.value[1]=t}return e}))}return e.__iterator(1===t?0:1,n)},t}function Nt(e,t,n){var r=Kt(e)
return r.size=e.size,r.has=function(t){return e.has(t)},r.get=function(r,o){var i=e.get(r,se)
return i===se?o:t.call(n,i,r,e)},r.__iterateUncached=function(r,o){var i=this
return e.__iterate((function(e,o,a){return!1!==r(t.call(n,e,o,a),o,i)}),o)},r.__iteratorUncached=function(r,o){var i=e.__iterator(2,o)
return new Fe((function(){var o=i.next()
if(o.done)return o
var a=o.value,s=a[0]
return We(r,s,t.call(n,a[1],s,e),o)}))},r}function Dt(e,t){var n=this,r=Kt(e)
return r._iter=e,r.size=e.size,r.reverse=function(){return e},e.flip&&(r.flip=function(){var t=Ot(e)
return t.reverse=function(){return e.flip()},t}),r.get=function(n,r){return e.get(t?n:-1-n,r)},r.has=function(n){return e.has(t?n:-1-n)},r.includes=function(t){return e.includes(t)},r.cacheResult=Qt,r.__iterate=function(n,r){var o=this,i=0
return r&&ce(e),e.__iterate((function(e,a){return n(e,t?a:r?o.size-++i:i++,o)}),!r)},r.__iterator=function(r,o){var i=0
o&&ce(e)
var a=e.__iterator(2,!o)
return new Fe((function(){var e=a.next()
if(e.done)return e
var s=e.value
return We(r,t?s[0]:o?n.size-++i:i++,s[1],e)}))},r}function Rt(e,t,n,r){var o=Kt(e)
return r&&(o.has=function(r){var o=e.get(r,se)
return o!==se&&!!t.call(n,o,r,e)},o.get=function(r,o){var i=e.get(r,se)
return i!==se&&t.call(n,i,r,e)?i:o}),o.__iterateUncached=function(o,i){var a=this,s=0
return e.__iterate((function(e,i,l){if(t.call(n,e,i,l))return s++,o(e,r?i:s-1,a)}),i),s},o.__iteratorUncached=function(o,i){var a=e.__iterator(2,i),s=0
return new Fe((function(){for(;;){var i=a.next()
if(i.done)return i
var l=i.value,u=l[0],c=l[1]
if(t.call(n,c,u,e))return We(o,r?u:s++,c,i)}}))},o}function Lt(e,t,n,r){var o=e.size
if(pe(t,n,o))return e
var i=he(t,o),a=ve(n,o)
if(i!=i||a!=a)return Lt(e.toSeq().cacheResult(),t,n,r)
var s,l=a-i
l==l&&(s=l<0?0:l)
var u=Kt(e)
return u.size=0===s?s:e.size&&s||void 0,!r&&Ie(e)&&s>=0&&(u.get=function(t,n){return t=de(this,t),t>=0&&t<s?e.get(t+i,n):n}),u.__iterateUncached=function(t,n){var o=this
if(0===s)return 0
if(n)return this.cacheResult().__iterate(t,n)
var a=0,l=!0,u=0
return e.__iterate((function(e,n){if(!l||!(l=a++<i))return u++,!1!==t(e,r?n:u-1,o)&&u!==s})),u},u.__iteratorUncached=function(t,n){if(0!==s&&n)return this.cacheResult().__iterator(t,n)
if(0===s)return new Fe(Ue)
var o=e.__iterator(t,n),a=0,l=0
return new Fe((function(){for(;a++<i;)o.next()
if(++l>s)return{value:void 0,done:!0}
var e=o.next()
return r||1===t||e.done?e:We(t,l-1,0===t?void 0:e.value[1],e)}))},u}function Mt(e,t,n,r){var o=Kt(e)
return o.__iterateUncached=function(o,i){var a=this
if(i)return this.cacheResult().__iterate(o,i)
var s=!0,l=0
return e.__iterate((function(e,i,u){if(!s||!(s=t.call(n,e,i,u)))return l++,o(e,r?i:l-1,a)})),l},o.__iteratorUncached=function(o,i){var a=this
if(i)return this.cacheResult().__iterator(o,i)
var s=e.__iterator(2,i),l=!0,u=0
return new Fe((function(){var e,i,c
do{if(e=s.next(),e.done)return r||1===o?e:We(o,u++,0===o?void 0:e.value[1],e)
var d=e.value
i=d[0],c=d[1],l&&(l=t.call(n,c,i,a))}while(l)
return 2===o?e:We(o,i,c,e)}))},o}function Ft(e,t){var n=we(e),r=[e].concat(t).map((function(e){return _e(e)?n&&(e=je(e)):e=n?rt(e):ot(Array.isArray(e)?e:[e]),e})).filter((function(e){return 0!==e.size}))
if(0===r.length)return e
if(1===r.length){var o=r[0]
if(o===e||n&&we(o)||Se(e)&&Se(o))return o}var i=new Ze(r)
return n?i=i.toKeyedSeq():Se(e)||(i=i.toSetSeq()),i=i.flatten(!0),i.size=r.reduce((function(e,t){if(void 0!==e){var n=t.size
if(void 0!==n)return e+n}}),0),i}function Wt(e,t,n){var r=Kt(e)
return r.__iterateUncached=function(o,i){if(i)return this.cacheResult().__iterate(o,i)
var a=0,s=!1
return function e(l,u){l.__iterate((function(i,l){return(!t||u<t)&&_e(i)?e(i,u+1):(a++,!1===o(i,n?l:a-1,r)&&(s=!0)),!s}),i)}(e,0),a},r.__iteratorUncached=function(r,o){if(o)return this.cacheResult().__iterator(r,o)
var i=e.__iterator(r,o),a=[],s=0
return new Fe((function(){for(;i;){var e=i.next()
if(!1===e.done){var l=e.value
if(2===r&&(l=l[1]),t&&!(a.length<t)||!_e(l))return n?e:We(r,s++,l,e)
a.push(i),i=l.__iterator(r,o)}else i=a.pop()}return{value:void 0,done:!0}}))},r}function Ut(e,t,n){t||(t=Yt)
var r=we(e),o=0,i=e.toSeq().map((function(t,r){return[r,t,o++,n?n(t,r,e):t]})).valueSeq().toArray()
return i.sort((function(e,n){return t(e[3],n[3])||e[2]-n[2]})).forEach(r?function(e,t){i[t].length=2}:function(e,t){i[t]=e[1]}),r?Qe(i):Se(e)?Ye(i):Je(i)}function Bt(e,t,n){if(t||(t=Yt),n){var r=e.toSeq().map((function(t,r){return[t,n(t,r,e)]})).reduce((function(e,n){return qt(t,e[1],n[1])?n:e}))
return r&&r[0]}return e.reduce((function(e,n){return qt(t,e,n)?n:e}))}function qt(e,t,n){var r=e(n,t)
return 0===r&&n!==t&&(null==n||n!=n)||r>0}function Ht(e,t,n,r){var o=Kt(e),i=new Ze(n).map((function(e){return e.size}))
return o.size=r?i.max():i.min(),o.__iterate=function(e,t){for(var n,r=this.__iterator(1,t),o=0;!(n=r.next()).done&&!1!==e(n.value,o++,this););return o},o.__iteratorUncached=function(e,o){var i=n.map((function(e){return e=xe(e),He(o?e.reverse():e)})),a=0,s=!1
return new Fe((function(){var n
return s||(n=i.map((function(e){return e.next()})),s=r?n.every((function(e){return e.done})):n.some((function(e){return e.done}))),s?{value:void 0,done:!0}:We(e,a++,t.apply(null,n.map((function(e){return e.value}))))}))},o}function Vt(e,t){return e===t?e:Ie(e)?t:e.constructor(t)}function $t(e){if(e!==Object(e))throw new TypeError("Expected [K, V] tuple: "+e)}function Gt(e){return we(e)?je:Se(e)?Te:Ae}function Kt(e){return Object.create((we(e)?Qe:Se(e)?Ye:Je).prototype)}function Qt(){return this._iter.cacheResult?(this._iter.cacheResult(),this.size=this._iter.size,this):Ke.prototype.cacheResult.call(this)}function Yt(e,t){return void 0===e&&void 0===t?0:void 0===e?1:void 0===t?-1:e>t?1:e<t?-1:0}function Jt(e,t){t=t||0
for(var n=Math.max(0,e.length-t),r=new Array(n),o=0;o<n;o++)r[o]=e[o+t]
return r}function Zt(e,t){if(!e)throw new Error(t)}function Xt(e){Zt(e!==1/0,"Cannot perform this action with an infinite size.")}function en(e){if(Ge(e)&&"string"!=typeof e)return e
if(De(e))return e.toArray()
throw new TypeError("Invalid keyPath: expected Ordered Collection or Array: "+e)}It.prototype.cacheResult=zt.prototype.cacheResult=Pt.prototype.cacheResult=Ct.prototype.cacheResult=Qt
var tn=Object.prototype.toString
function nn(e){if(!e||"object"!=typeof e||"[object Object]"!==tn.call(e))return!1
var t=Object.getPrototypeOf(e)
if(null===t)return!0
for(var n=t,r=Object.getPrototypeOf(t);null!==r;)n=r,r=Object.getPrototypeOf(n)
return n===t}function rn(e){return"object"==typeof e&&(Oe(e)||Array.isArray(e)||nn(e))}function on(e){try{return"string"==typeof e?JSON.stringify(e):String(e)}catch(t){return JSON.stringify(e)}}function an(e,t){return Oe(e)?e.has(t):rn(e)&&$e.call(e,t)}function sn(e,t,n){return Oe(e)?e.get(t,n):an(e,t)?"function"==typeof e.get?e.get(t):e[t]:n}function ln(e){if(Array.isArray(e))return Jt(e)
var t={}
for(var n in e)$e.call(e,n)&&(t[n]=e[n])
return t}function un(e,t){if(!rn(e))throw new TypeError("Cannot update non-data-structure value: "+e)
if(Oe(e)){if(!e.remove)throw new TypeError("Cannot update immutable value without .remove() method: "+e)
return e.remove(t)}if(!$e.call(e,t))return e
var n=ln(e)
return Array.isArray(n)?n.splice(t,1):delete n[t],n}function cn(e,t,n){if(!rn(e))throw new TypeError("Cannot update non-data-structure value: "+e)
if(Oe(e)){if(!e.set)throw new TypeError("Cannot update immutable value without .set() method: "+e)
return e.set(t,n)}if($e.call(e,t)&&n===e[t])return e
var r=ln(e)
return r[t]=n,r}function dn(e,t,n,r){r||(r=n,n=void 0)
var o=fn(Oe(e),e,en(t),0,n,r)
return o===se?n:o}function fn(e,t,n,r,o,i){var a=t===se
if(r===n.length){var s=a?o:t,l=i(s)
return l===s?t:l}if(!a&&!rn(t))throw new TypeError("Cannot update within non-data-structure value in path ["+n.slice(0,r).map(on)+"]: "+t)
var u=n[r],c=a?se:sn(t,u,se),d=fn(c===se?e:Oe(c),c,n,r+1,o,i)
return d===c?t:d===se?un(t,u):cn(a?e?Vn():{}:t,u,d)}function pn(e,t,n){return dn(e,t,se,(function(){return n}))}function hn(e,t){return pn(this,e,t)}function vn(e,t){return dn(e,t,(function(){return se}))}function gn(e){return vn(this,e)}function yn(e,t,n,r){return dn(e,[t],n,r)}function mn(e,t,n){return 1===arguments.length?e(this):yn(this,e,t,n)}function _n(e,t,n){return dn(this,e,t,n)}function bn(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t]
return kn(this,e)}function wn(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1]
if("function"!=typeof e)throw new TypeError("Invalid merger function: "+e)
return kn(this,t,e)}function kn(e,t,n){for(var r=[],o=0;o<t.length;o++){var i=je(t[o])
0!==i.size&&r.push(i)}return 0===r.length?e:0!==e.toSeq().size||e.__ownerID||1!==r.length?e.withMutations((function(e){for(var t=n?function(t,r){yn(e,r,se,(function(e){return e===se?t:n(e,t,r)}))}:function(t,n){e.set(n,t)},o=0;o<r.length;o++)r[o].forEach(t)})):e.constructor(r[0])}function Sn(e,t,n){return En(e,t,function(e){function t(n,r,o){return rn(n)&&rn(r)&&(i=n,a=r,s=Ke(i),l=Ke(a),Se(s)===Se(l)&&we(s)===we(l))?En(n,[r],t):e?e(n,r,o):r
var i,a,s,l}return t}(n))}function En(e,t,n){if(!rn(e))throw new TypeError("Cannot merge into non-data-structure value: "+e)
if(Oe(e))return"function"==typeof n&&e.mergeWith?e.mergeWith.apply(e,[n].concat(t)):e.merge?e.merge.apply(e,t):e.concat.apply(e,t)
for(var r=Array.isArray(e),o=e,i=r?Te:je,a=r?function(t){o===e&&(o=ln(o)),o.push(t)}:function(t,r){var i=$e.call(o,r),a=i&&n?n(o[r],t,r):t
i&&a===o[r]||(o===e&&(o=ln(o)),o[r]=a)},s=0;s<t.length;s++)i(t[s]).forEach(a)
return o}function xn(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t]
return Sn(this,e)}function jn(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1]
return Sn(this,t,e)}function Tn(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1]
return dn(this,e,Vn(),(function(e){return En(e,t)}))}function An(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1]
return dn(this,e,Vn(),(function(e){return Sn(e,t)}))}function zn(e){var t=this.asMutable()
return e(t),t.wasAltered()?t.__ensureOwner(this.__ownerID):this}function In(){return this.__ownerID?this:this.__ensureOwner(new ue)}function Pn(){return this.__ensureOwner()}function Cn(){return this.__altered}var On=function(e){function t(t){return null==t?Vn():st(t)&&!De(t)?t:Vn().withMutations((function(n){var r=e(t)
Xt(r.size),r.forEach((function(e,t){return n.set(t,e)}))}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.of=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t]
return Vn().withMutations((function(t){for(var n=0;n<e.length;n+=2){if(n+1>=e.length)throw new Error("Missing value for key: "+e[n])
t.set(e[n],e[n+1])}}))},t.prototype.toString=function(){return this.__toString("Map {","}")},t.prototype.get=function(e,t){return this._root?this._root.get(0,void 0,e,t):t},t.prototype.set=function(e,t){return $n(this,e,t)},t.prototype.remove=function(e){return $n(this,e,se)},t.prototype.deleteAll=function(e){var t=xe(e)
return 0===t.size?this:this.withMutations((function(e){t.forEach((function(t){return e.remove(t)}))}))},t.prototype.clear=function(){return 0===this.size?this:this.__ownerID?(this.size=0,this._root=null,this.__hash=void 0,this.__altered=!0,this):Vn()},t.prototype.sort=function(e){return yr(Ut(this,e))},t.prototype.sortBy=function(e,t){return yr(Ut(this,t,e))},t.prototype.map=function(e,t){var n=this
return this.withMutations((function(r){r.forEach((function(o,i){r.set(i,e.call(t,o,i,n))}))}))},t.prototype.__iterator=function(e,t){return new Un(this,e,t)},t.prototype.__iterate=function(e,t){var n=this,r=0
return this._root&&this._root.iterate((function(t){return r++,e(t[1],t[0],n)}),t),r},t.prototype.__ensureOwner=function(e){return e===this.__ownerID?this:e?Hn(this.size,this._root,e,this.__hash):0===this.size?Vn():(this.__ownerID=e,this.__altered=!1,this)},t}(je)
On.isMap=st
var Nn=On.prototype
Nn[at]=!0,Nn.delete=Nn.remove,Nn.removeAll=Nn.deleteAll,Nn.setIn=hn,Nn.removeIn=Nn.deleteIn=gn,Nn.update=mn,Nn.updateIn=_n,Nn.merge=Nn.concat=bn,Nn.mergeWith=wn,Nn.mergeDeep=xn,Nn.mergeDeepWith=jn,Nn.mergeIn=Tn,Nn.mergeDeepIn=An,Nn.withMutations=zn,Nn.wasAltered=Cn,Nn.asImmutable=Pn,Nn["@@transducer/init"]=Nn.asMutable=In,Nn["@@transducer/step"]=function(e,t){return e.set(t[0],t[1])},Nn["@@transducer/result"]=function(e){return e.asImmutable()}
var Dn=function(e,t){this.ownerID=e,this.entries=t}
Dn.prototype.get=function(e,t,n,r){for(var o=this.entries,i=0,a=o.length;i<a;i++)if(ct(n,o[i][0]))return o[i][1]
return r},Dn.prototype.update=function(e,t,n,r,o,i,a){for(var s=o===se,l=this.entries,u=0,c=l.length;u<c&&!ct(r,l[u][0]);u++);var d=u<c
if(d?l[u][1]===o:s)return this
if(le(a),(s||!d)&&le(i),!s||1!==l.length){if(!d&&!s&&l.length>=Zn)return function(e,t,n,r){e||(e=new ue)
for(var o=new Fn(e,ht(n),[n,r]),i=0;i<t.length;i++){var a=t[i]
o=o.update(e,0,void 0,a[0],a[1])}return o}(e,l,r,o)
var f=e&&e===this.ownerID,p=f?l:Jt(l)
return d?s?u===c-1?p.pop():p[u]=p.pop():p[u]=[r,o]:p.push([r,o]),f?(this.entries=p,this):new Dn(e,p)}}
var Rn=function(e,t,n){this.ownerID=e,this.bitmap=t,this.nodes=n}
Rn.prototype.get=function(e,t,n,r){void 0===t&&(t=ht(n))
var o=1<<((0===e?t:t>>>e)&ae),i=this.bitmap
return 0==(i&o)?r:this.nodes[Yn(i&o-1)].get(e+5,t,n,r)},Rn.prototype.update=function(e,t,n,r,o,i,a){void 0===n&&(n=ht(r))
var s=(0===t?n:n>>>t)&ae,l=1<<s,u=this.bitmap,c=0!=(u&l)
if(!c&&o===se)return this
var d=Yn(u&l-1),f=this.nodes,p=c?f[d]:void 0,h=Gn(p,e,t+5,n,r,o,i,a)
if(h===p)return this
if(!c&&h&&f.length>=Xn)return function(e,t,n,r,o){for(var i=0,a=new Array(ie),s=0;0!==n;s++,n>>>=1)a[s]=1&n?t[i++]:void 0
return a[r]=o,new Ln(e,i+1,a)}(e,f,u,s,h)
if(c&&!h&&2===f.length&&Kn(f[1^d]))return f[1^d]
if(c&&h&&1===f.length&&Kn(h))return h
var v=e&&e===this.ownerID,g=c?h?u:u^l:u|l,y=c?h?Jn(f,d,h,v):function(e,t,n){var r=e.length-1
if(n&&t===r)return e.pop(),e
for(var o=new Array(r),i=0,a=0;a<r;a++)a===t&&(i=1),o[a]=e[a+i]
return o}(f,d,v):function(e,t,n,r){var o=e.length+1
if(r&&t+1===o)return e[t]=n,e
for(var i=new Array(o),a=0,s=0;s<o;s++)s===t?(i[s]=n,a=-1):i[s]=e[s+a]
return i}(f,d,h,v)
return v?(this.bitmap=g,this.nodes=y,this):new Rn(e,g,y)}
var Ln=function(e,t,n){this.ownerID=e,this.count=t,this.nodes=n}
Ln.prototype.get=function(e,t,n,r){void 0===t&&(t=ht(n))
var o=(0===e?t:t>>>e)&ae,i=this.nodes[o]
return i?i.get(e+5,t,n,r):r},Ln.prototype.update=function(e,t,n,r,o,i,a){void 0===n&&(n=ht(r))
var s=(0===t?n:n>>>t)&ae,l=o===se,u=this.nodes,c=u[s]
if(l&&!c)return this
var d=Gn(c,e,t+5,n,r,o,i,a)
if(d===c)return this
var f=this.count
if(c){if(!d&&(f--,f<er))return function(e,t,n,r){for(var o=0,i=0,a=new Array(n),s=0,l=1,u=t.length;s<u;s++,l<<=1){var c=t[s]
void 0!==c&&s!==r&&(o|=l,a[i++]=c)}return new Rn(e,o,a)}(e,u,f,s)}else f++
var p=e&&e===this.ownerID,h=Jn(u,s,d,p)
return p?(this.count=f,this.nodes=h,this):new Ln(e,f,h)}
var Mn=function(e,t,n){this.ownerID=e,this.keyHash=t,this.entries=n}
Mn.prototype.get=function(e,t,n,r){for(var o=this.entries,i=0,a=o.length;i<a;i++)if(ct(n,o[i][0]))return o[i][1]
return r},Mn.prototype.update=function(e,t,n,r,o,i,a){void 0===n&&(n=ht(r))
var s=o===se
if(n!==this.keyHash)return s?this:(le(a),le(i),Qn(this,e,t,n,[r,o]))
for(var l=this.entries,u=0,c=l.length;u<c&&!ct(r,l[u][0]);u++);var d=u<c
if(d?l[u][1]===o:s)return this
if(le(a),(s||!d)&&le(i),s&&2===c)return new Fn(e,this.keyHash,l[1^u])
var f=e&&e===this.ownerID,p=f?l:Jt(l)
return d?s?u===c-1?p.pop():p[u]=p.pop():p[u]=[r,o]:p.push([r,o]),f?(this.entries=p,this):new Mn(e,this.keyHash,p)}
var Fn=function(e,t,n){this.ownerID=e,this.keyHash=t,this.entry=n}
Fn.prototype.get=function(e,t,n,r){return ct(n,this.entry[0])?this.entry[1]:r},Fn.prototype.update=function(e,t,n,r,o,i,a){var s=o===se,l=ct(r,this.entry[0])
return(l?o===this.entry[1]:s)?this:(le(a),s?void le(i):l?e&&e===this.ownerID?(this.entry[1]=o,this):new Fn(e,this.keyHash,[r,o]):(le(i),Qn(this,e,t,ht(r),[r,o])))},Dn.prototype.iterate=Mn.prototype.iterate=function(e,t){for(var n=this.entries,r=0,o=n.length-1;r<=o;r++)if(!1===e(n[t?o-r:r]))return!1},Rn.prototype.iterate=Ln.prototype.iterate=function(e,t){for(var n=this.nodes,r=0,o=n.length-1;r<=o;r++){var i=n[t?o-r:r]
if(i&&!1===i.iterate(e,t))return!1}},Fn.prototype.iterate=function(e,t){return e(this.entry)}
var Wn,Un=function(e){function t(e,t,n){this._type=t,this._reverse=n,this._stack=e._root&&qn(e._root)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.next=function(){for(var e=this._type,t=this._stack;t;){var n=t.node,r=t.index++,o=void 0
if(n.entry){if(0===r)return Bn(e,n.entry)}else if(n.entries){if(o=n.entries.length-1,r<=o)return Bn(e,n.entries[this._reverse?o-r:r])}else if(o=n.nodes.length-1,r<=o){var i=n.nodes[this._reverse?o-r:r]
if(i){if(i.entry)return Bn(e,i.entry)
t=this._stack=qn(i,t)}continue}t=this._stack=this._stack.__prev}return{value:void 0,done:!0}},t}(Fe)
function Bn(e,t){return We(e,t[0],t[1])}function qn(e,t){return{node:e,index:0,__prev:t}}function Hn(e,t,n,r){var o=Object.create(Nn)
return o.size=e,o._root=t,o.__ownerID=n,o.__hash=r,o.__altered=!1,o}function Vn(){return Wn||(Wn=Hn(0))}function $n(e,t,n){var r,o
if(e._root){var i={value:!1},a={value:!1}
if(r=Gn(e._root,e.__ownerID,0,void 0,t,n,i,a),!a.value)return e
o=e.size+(i.value?n===se?-1:1:0)}else{if(n===se)return e
o=1,r=new Dn(e.__ownerID,[[t,n]])}return e.__ownerID?(e.size=o,e._root=r,e.__hash=void 0,e.__altered=!0,e):r?Hn(o,r):Vn()}function Gn(e,t,n,r,o,i,a,s){return e?e.update(t,n,r,o,i,a,s):i===se?e:(le(s),le(a),new Fn(t,r,[o,i]))}function Kn(e){return e.constructor===Fn||e.constructor===Mn}function Qn(e,t,n,r,o){if(e.keyHash===r)return new Mn(t,r,[e.entry,o])
var i,a=(0===n?e.keyHash:e.keyHash>>>n)&ae,s=(0===n?r:r>>>n)&ae,l=a===s?[Qn(e,t,n+5,r,o)]:(i=new Fn(t,r,o),a<s?[e,i]:[i,e])
return new Rn(t,1<<a|1<<s,l)}function Yn(e){return e-=e>>1&1431655765,e=(858993459&e)+(e>>2&858993459),e=e+(e>>4)&252645135,e+=e>>8,e+=e>>16,127&e}function Jn(e,t,n,r){var o=r?e:Jt(e)
return o[t]=n,o}var Zn=8,Xn=16,er=8,tr="@@__IMMUTABLE_LIST__@@"
function nr(e){return Boolean(e&&e[tr])}var rr=function(e){function t(t){var n=cr()
if(null==t)return n
if(nr(t))return t
var r=e(t),o=r.size
return 0===o?n:(Xt(o),o>0&&o<ie?ur(0,o,5,null,new ir(r.toArray())):n.withMutations((function(e){e.setSize(o),r.forEach((function(t,n){return e.set(n,t)}))})))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.of=function(){return this(arguments)},t.prototype.toString=function(){return this.__toString("List [","]")},t.prototype.get=function(e,t){if(e=de(this,e),e>=0&&e<this.size){e+=this._origin
var n=pr(this,e)
return n&&n.array[e&ae]}return t},t.prototype.set=function(e,t){return function(e,t,n){if(t=de(e,t),t!=t)return e
if(t>=e.size||t<0)return e.withMutations((function(e){t<0?hr(e,t).set(0,n):hr(e,0,t+1).set(t,n)}))
t+=e._origin
var r=e._tail,o=e._root,i={value:!1}
t>=vr(e._capacity)?r=dr(r,e.__ownerID,0,t,n,i):o=dr(o,e.__ownerID,e._level,t,n,i)
if(!i.value)return e
if(e.__ownerID)return e._root=o,e._tail=r,e.__hash=void 0,e.__altered=!0,e
return ur(e._origin,e._capacity,e._level,o,r)}(this,e,t)},t.prototype.remove=function(e){return this.has(e)?0===e?this.shift():e===this.size-1?this.pop():this.splice(e,1):this},t.prototype.insert=function(e,t){return this.splice(e,0,t)},t.prototype.clear=function(){return 0===this.size?this:this.__ownerID?(this.size=this._origin=this._capacity=0,this._level=5,this._root=this._tail=this.__hash=void 0,this.__altered=!0,this):cr()},t.prototype.push=function(){var e=arguments,t=this.size
return this.withMutations((function(n){hr(n,0,t+e.length)
for(var r=0;r<e.length;r++)n.set(t+r,e[r])}))},t.prototype.pop=function(){return hr(this,0,-1)},t.prototype.unshift=function(){var e=arguments
return this.withMutations((function(t){hr(t,-e.length)
for(var n=0;n<e.length;n++)t.set(n,e[n])}))},t.prototype.shift=function(){return hr(this,1)},t.prototype.concat=function(){for(var t=arguments,n=[],r=0;r<arguments.length;r++){var o=t[r],i=e("string"!=typeof o&&Be(o)?o:[o])
0!==i.size&&n.push(i)}return 0===n.length?this:0!==this.size||this.__ownerID||1!==n.length?this.withMutations((function(e){n.forEach((function(t){return t.forEach((function(t){return e.push(t)}))}))})):this.constructor(n[0])},t.prototype.setSize=function(e){return hr(this,0,e)},t.prototype.map=function(e,t){var n=this
return this.withMutations((function(r){for(var o=0;o<n.size;o++)r.set(o,e.call(t,r.get(o),o,n))}))},t.prototype.slice=function(e,t){var n=this.size
return pe(e,t,n)?this:hr(this,he(e,n),ve(t,n))},t.prototype.__iterator=function(e,t){var n=t?this.size:0,r=lr(this,t)
return new Fe((function(){var o=r()
return o===sr?{value:void 0,done:!0}:We(e,t?--n:n++,o)}))},t.prototype.__iterate=function(e,t){for(var n,r=t?this.size:0,o=lr(this,t);(n=o())!==sr&&!1!==e(n,t?--r:r++,this););return r},t.prototype.__ensureOwner=function(e){return e===this.__ownerID?this:e?ur(this._origin,this._capacity,this._level,this._root,this._tail,e,this.__hash):0===this.size?cr():(this.__ownerID=e,this.__altered=!1,this)},t}(Te)
rr.isList=nr
var or=rr.prototype
or[tr]=!0,or.delete=or.remove,or.merge=or.concat,or.setIn=hn,or.deleteIn=or.removeIn=gn,or.update=mn,or.updateIn=_n,or.mergeIn=Tn,or.mergeDeepIn=An,or.withMutations=zn,or.wasAltered=Cn,or.asImmutable=Pn,or["@@transducer/init"]=or.asMutable=In,or["@@transducer/step"]=function(e,t){return e.push(t)},or["@@transducer/result"]=function(e){return e.asImmutable()}
var ir=function(e,t){this.array=e,this.ownerID=t}
ir.prototype.removeBefore=function(e,t,n){if(n===t?1<<t:0===this.array.length)return this
var r=n>>>t&ae
if(r>=this.array.length)return new ir([],e)
var o,i=0===r
if(t>0){var a=this.array[r]
if(o=a&&a.removeBefore(e,t-5,n),o===a&&i)return this}if(i&&!o)return this
var s=fr(this,e)
if(!i)for(var l=0;l<r;l++)s.array[l]=void 0
return o&&(s.array[r]=o),s},ir.prototype.removeAfter=function(e,t,n){if(n===(t?1<<t:0)||0===this.array.length)return this
var r,o=n-1>>>t&ae
if(o>=this.array.length)return this
if(t>0){var i=this.array[o]
if(r=i&&i.removeAfter(e,t-5,n),r===i&&o===this.array.length-1)return this}var a=fr(this,e)
return a.array.splice(o+1),r&&(a.array[o]=r),a}
var ar,sr={}
function lr(e,t){var n=e._origin,r=e._capacity,o=vr(r),i=e._tail
return a(e._root,e._level,0)
function a(e,s,l){return 0===s?function(e,a){var s=a===o?i&&i.array:e&&e.array,l=a>n?0:n-a,u=r-a
u>ie&&(u=ie)
return function(){if(l===u)return sr
var e=t?--u:l++
return s&&s[e]}}(e,l):function(e,o,i){var s,l=e&&e.array,u=i>n?0:n-i>>o,c=1+(r-i>>o)
c>ie&&(c=ie)
return function(){for(;;){if(s){var e=s()
if(e!==sr)return e
s=null}if(u===c)return sr
var n=t?--c:u++
s=a(l&&l[n],o-5,i+(n<<o))}}}(e,s,l)}}function ur(e,t,n,r,o,i,a){var s=Object.create(or)
return s.size=t-e,s._origin=e,s._capacity=t,s._level=n,s._root=r,s._tail=o,s.__ownerID=i,s.__hash=a,s.__altered=!1,s}function cr(){return ar||(ar=ur(0,0,5))}function dr(e,t,n,r,o,i){var a,s=r>>>n&ae,l=e&&s<e.array.length
if(!l&&void 0===o)return e
if(n>0){var u=e&&e.array[s],c=dr(u,t,n-5,r,o,i)
return c===u?e:(a=fr(e,t),a.array[s]=c,a)}return l&&e.array[s]===o?e:(i&&le(i),a=fr(e,t),void 0===o&&s===a.array.length-1?a.array.pop():a.array[s]=o,a)}function fr(e,t){return t&&e&&t===e.ownerID?e:new ir(e?e.array.slice():[],t)}function pr(e,t){if(t>=vr(e._capacity))return e._tail
if(t<1<<e._level+5){for(var n=e._root,r=e._level;n&&r>0;)n=n.array[t>>>r&ae],r-=5
return n}}function hr(e,t,n){void 0!==t&&(t|=0),void 0!==n&&(n|=0)
var r=e.__ownerID||new ue,o=e._origin,i=e._capacity,a=o+t,s=void 0===n?i:n<0?i+n:o+n
if(a===o&&s===i)return e
if(a>=s)return e.clear()
for(var l=e._level,u=e._root,c=0;a+c<0;)u=new ir(u&&u.array.length?[void 0,u]:[],r),l+=5,c+=1<<l
c&&(a+=c,o+=c,s+=c,i+=c)
for(var d=vr(i),f=vr(s);f>=1<<l+5;)u=new ir(u&&u.array.length?[u]:[],r),l+=5
var p=e._tail,h=f<d?pr(e,s-1):f>d?new ir([],r):p
if(p&&f>d&&a<i&&p.array.length){u=fr(u,r)
for(var v=u,g=l;g>5;g-=5){var y=d>>>g&ae
v=v.array[y]=fr(v.array[y],r)}v.array[d>>>5&ae]=p}if(s<i&&(h=h&&h.removeAfter(r,0,s)),a>=f)a-=f,s-=f,l=5,u=null,h=h&&h.removeBefore(r,0,a)
else if(a>o||f<d){for(c=0;u;){var m=a>>>l&ae
if(m!==f>>>l&ae)break
m&&(c+=(1<<l)*m),l-=5,u=u.array[m]}u&&a>o&&(u=u.removeBefore(r,l,a-c)),u&&f<d&&(u=u.removeAfter(r,l,f-c)),c&&(a-=c,s-=c)}return e.__ownerID?(e.size=s-a,e._origin=a,e._capacity=s,e._level=l,e._root=u,e._tail=h,e.__hash=void 0,e.__altered=!0,e):ur(a,s,l,u,h)}function vr(e){return e<ie?0:e-1>>>5<<5}var gr,yr=function(e){function t(e){return null==e?_r():lt(e)?e:_r().withMutations((function(t){var n=je(e)
Xt(n.size),n.forEach((function(e,n){return t.set(n,e)}))}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.of=function(){return this(arguments)},t.prototype.toString=function(){return this.__toString("OrderedMap {","}")},t.prototype.get=function(e,t){var n=this._map.get(e)
return void 0!==n?this._list.get(n)[1]:t},t.prototype.clear=function(){return 0===this.size?this:this.__ownerID?(this.size=0,this._map.clear(),this._list.clear(),this.__altered=!0,this):_r()},t.prototype.set=function(e,t){return br(this,e,t)},t.prototype.remove=function(e){return br(this,e,se)},t.prototype.__iterate=function(e,t){var n=this
return this._list.__iterate((function(t){return t&&e(t[1],t[0],n)}),t)},t.prototype.__iterator=function(e,t){return this._list.fromEntrySeq().__iterator(e,t)},t.prototype.__ensureOwner=function(e){if(e===this.__ownerID)return this
var t=this._map.__ensureOwner(e),n=this._list.__ensureOwner(e)
return e?mr(t,n,e,this.__hash):0===this.size?_r():(this.__ownerID=e,this.__altered=!1,this._map=t,this._list=n,this)},t}(On)
function mr(e,t,n,r){var o=Object.create(yr.prototype)
return o.size=e?e.size:0,o._map=e,o._list=t,o.__ownerID=n,o.__hash=r,o.__altered=!1,o}function _r(){return gr||(gr=mr(Vn(),cr()))}function br(e,t,n){var r,o,i=e._map,a=e._list,s=i.get(t),l=void 0!==s
if(n===se){if(!l)return e
a.size>=ie&&a.size>=2*i.size?(o=a.filter((function(e,t){return void 0!==e&&s!==t})),r=o.toKeyedSeq().map((function(e){return e[0]})).flip().toMap(),e.__ownerID&&(r.__ownerID=o.__ownerID=e.__ownerID)):(r=i.remove(t),o=s===a.size-1?a.pop():a.set(s,void 0))}else if(l){if(n===a.get(s)[1])return e
r=i,o=a.set(s,[t,n])}else r=i.set(t,a.size),o=a.set(a.size,[t,n])
return e.__ownerID?(e.size=r.size,e._map=r,e._list=o,e.__hash=void 0,e.__altered=!0,e):mr(r,o)}yr.isOrderedMap=lt,yr.prototype[Ne]=!0,yr.prototype.delete=yr.prototype.remove
var wr="@@__IMMUTABLE_STACK__@@"
function kr(e){return Boolean(e&&e[wr])}var Sr=function(e){function t(e){return null==e?Tr():kr(e)?e:Tr().pushAll(e)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.of=function(){return this(arguments)},t.prototype.toString=function(){return this.__toString("Stack [","]")},t.prototype.get=function(e,t){var n=this._head
for(e=de(this,e);n&&e--;)n=n.next
return n?n.value:t},t.prototype.peek=function(){return this._head&&this._head.value},t.prototype.push=function(){var e=arguments
if(0===arguments.length)return this
for(var t=this.size+arguments.length,n=this._head,r=arguments.length-1;r>=0;r--)n={value:e[r],next:n}
return this.__ownerID?(this.size=t,this._head=n,this.__hash=void 0,this.__altered=!0,this):jr(t,n)},t.prototype.pushAll=function(t){if(t=e(t),0===t.size)return this
if(0===this.size&&kr(t))return t
Xt(t.size)
var n=this.size,r=this._head
return t.__iterate((function(e){n++,r={value:e,next:r}}),!0),this.__ownerID?(this.size=n,this._head=r,this.__hash=void 0,this.__altered=!0,this):jr(n,r)},t.prototype.pop=function(){return this.slice(1)},t.prototype.clear=function(){return 0===this.size?this:this.__ownerID?(this.size=0,this._head=void 0,this.__hash=void 0,this.__altered=!0,this):Tr()},t.prototype.slice=function(t,n){if(pe(t,n,this.size))return this
var r=he(t,this.size),o=ve(n,this.size)
if(o!==this.size)return e.prototype.slice.call(this,t,n)
for(var i=this.size-r,a=this._head;r--;)a=a.next
return this.__ownerID?(this.size=i,this._head=a,this.__hash=void 0,this.__altered=!0,this):jr(i,a)},t.prototype.__ensureOwner=function(e){return e===this.__ownerID?this:e?jr(this.size,this._head,e,this.__hash):0===this.size?Tr():(this.__ownerID=e,this.__altered=!1,this)},t.prototype.__iterate=function(e,t){var n=this
if(t)return new Ze(this.toArray()).__iterate((function(t,r){return e(t,r,n)}),t)
for(var r=0,o=this._head;o&&!1!==e(o.value,r++,this);)o=o.next
return r},t.prototype.__iterator=function(e,t){if(t)return new Ze(this.toArray()).__iterator(e,t)
var n=0,r=this._head
return new Fe((function(){if(r){var t=r.value
return r=r.next,We(e,n++,t)}return{value:void 0,done:!0}}))},t}(Te)
Sr.isStack=kr
var Er,xr=Sr.prototype
function jr(e,t,n,r){var o=Object.create(xr)
return o.size=e,o._head=t,o.__ownerID=n,o.__hash=r,o.__altered=!1,o}function Tr(){return Er||(Er=jr(0))}xr[wr]=!0,xr.shift=xr.pop,xr.unshift=xr.push,xr.unshiftAll=xr.pushAll,xr.withMutations=zn,xr.wasAltered=Cn,xr.asImmutable=Pn,xr["@@transducer/init"]=xr.asMutable=In,xr["@@transducer/step"]=function(e,t){return e.unshift(t)},xr["@@transducer/result"]=function(e){return e.asImmutable()}
var Ar="@@__IMMUTABLE_SET__@@"
function zr(e){return Boolean(e&&e[Ar])}function Ir(e){return zr(e)&&De(e)}function Pr(e,t){if(e===t)return!0
if(!_e(t)||void 0!==e.size&&void 0!==t.size&&e.size!==t.size||void 0!==e.__hash&&void 0!==t.__hash&&e.__hash!==t.__hash||we(e)!==we(t)||Se(e)!==Se(t)||De(e)!==De(t))return!1
if(0===e.size&&0===t.size)return!0
var n=!Ee(e)
if(De(e)){var r=e.entries()
return t.every((function(e,t){var o=r.next().value
return o&&ct(o[1],e)&&(n||ct(o[0],t))}))&&r.next().done}var o=!1
if(void 0===e.size)if(void 0===t.size)"function"==typeof e.cacheResult&&e.cacheResult()
else{o=!0
var i=e
e=t,t=i}var a=!0,s=t.__iterate((function(t,r){if(n?!e.has(t):o?!ct(t,e.get(r,se)):!ct(e.get(r,se),t))return a=!1,!1}))
return a&&e.size===s}function Cr(e,t){var n=function(n){e.prototype[n]=t[n]}
return Object.keys(t).forEach(n),Object.getOwnPropertySymbols&&Object.getOwnPropertySymbols(t).forEach(n),e}function Or(e){if(!e||"object"!=typeof e)return e
if(!_e(e)){if(!rn(e))return e
e=Ke(e)}if(we(e)){var t={}
return e.__iterate((function(e,n){t[n]=Or(e)})),t}var n=[]
return e.__iterate((function(e){n.push(Or(e))})),n}var Nr=function(e){function t(t){return null==t?Fr():zr(t)&&!De(t)?t:Fr().withMutations((function(n){var r=e(t)
Xt(r.size),r.forEach((function(e){return n.add(e)}))}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.of=function(){return this(arguments)},t.fromKeys=function(e){return this(je(e).keySeq())},t.intersect=function(e){return e=xe(e).toArray(),e.length?Rr.intersect.apply(t(e.pop()),e):Fr()},t.union=function(e){return e=xe(e).toArray(),e.length?Rr.union.apply(t(e.pop()),e):Fr()},t.prototype.toString=function(){return this.__toString("Set {","}")},t.prototype.has=function(e){return this._map.has(e)},t.prototype.add=function(e){return Lr(this,this._map.set(e,e))},t.prototype.remove=function(e){return Lr(this,this._map.remove(e))},t.prototype.clear=function(){return Lr(this,this._map.clear())},t.prototype.map=function(e,t){var n=this,r=!1,o=Lr(this,this._map.mapEntries((function(o){var i=o[1],a=e.call(t,i,i,n)
return a!==i&&(r=!0),[a,a]}),t))
return r?o:this},t.prototype.union=function(){for(var t=[],n=arguments.length;n--;)t[n]=arguments[n]
return t=t.filter((function(e){return 0!==e.size})),0===t.length?this:0!==this.size||this.__ownerID||1!==t.length?this.withMutations((function(n){for(var r=0;r<t.length;r++)e(t[r]).forEach((function(e){return n.add(e)}))})):this.constructor(t[0])},t.prototype.intersect=function(){for(var t=[],n=arguments.length;n--;)t[n]=arguments[n]
if(0===t.length)return this
t=t.map((function(t){return e(t)}))
var r=[]
return this.forEach((function(e){t.every((function(t){return t.includes(e)}))||r.push(e)})),this.withMutations((function(e){r.forEach((function(t){e.remove(t)}))}))},t.prototype.subtract=function(){for(var t=[],n=arguments.length;n--;)t[n]=arguments[n]
if(0===t.length)return this
t=t.map((function(t){return e(t)}))
var r=[]
return this.forEach((function(e){t.some((function(t){return t.includes(e)}))&&r.push(e)})),this.withMutations((function(e){r.forEach((function(t){e.remove(t)}))}))},t.prototype.sort=function(e){return oo(Ut(this,e))},t.prototype.sortBy=function(e,t){return oo(Ut(this,t,e))},t.prototype.wasAltered=function(){return this._map.wasAltered()},t.prototype.__iterate=function(e,t){var n=this
return this._map.__iterate((function(t){return e(t,t,n)}),t)},t.prototype.__iterator=function(e,t){return this._map.__iterator(e,t)},t.prototype.__ensureOwner=function(e){if(e===this.__ownerID)return this
var t=this._map.__ensureOwner(e)
return e?this.__make(t,e):0===this.size?this.__empty():(this.__ownerID=e,this._map=t,this)},t}(Ae)
Nr.isSet=zr
var Dr,Rr=Nr.prototype
function Lr(e,t){return e.__ownerID?(e.size=t.size,e._map=t,e):t===e._map?e:0===t.size?e.__empty():e.__make(t)}function Mr(e,t){var n=Object.create(Rr)
return n.size=e?e.size:0,n._map=e,n.__ownerID=t,n}function Fr(){return Dr||(Dr=Mr(Vn()))}Rr[Ar]=!0,Rr.delete=Rr.remove,Rr.merge=Rr.concat=Rr.union,Rr.withMutations=zn,Rr.asImmutable=Pn,Rr["@@transducer/init"]=Rr.asMutable=In,Rr["@@transducer/step"]=function(e,t){return e.add(t)},Rr["@@transducer/result"]=function(e){return e.asImmutable()},Rr.__empty=Fr,Rr.__make=Mr
var Wr,Ur=function(e){function t(e,n,r){if(!(this instanceof t))return new t(e,n,r)
if(Zt(0!==r,"Cannot step a Range by 0"),e=e||0,void 0===n&&(n=1/0),r=void 0===r?1:Math.abs(r),n<e&&(r=-r),this._start=e,this._end=n,this._step=r,this.size=Math.max(0,Math.ceil((n-e)/r-1)+1),0===this.size){if(Wr)return Wr
Wr=this}}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.toString=function(){return 0===this.size?"Range []":"Range [ "+this._start+"..."+this._end+(1!==this._step?" by "+this._step:"")+" ]"},t.prototype.get=function(e,t){return this.has(e)?this._start+de(this,e)*this._step:t},t.prototype.includes=function(e){var t=(e-this._start)/this._step
return t>=0&&t<this.size&&t===Math.floor(t)},t.prototype.slice=function(e,n){return pe(e,n,this.size)?this:(e=he(e,this.size),n=ve(n,this.size),n<=e?new t(0,0):new t(this.get(e,this._end),this.get(n,this._end),this._step))},t.prototype.indexOf=function(e){var t=e-this._start
if(t%this._step==0){var n=t/this._step
if(n>=0&&n<this.size)return n}return-1},t.prototype.lastIndexOf=function(e){return this.indexOf(e)},t.prototype.__iterate=function(e,t){for(var n=this.size,r=this._step,o=t?this._start+(n-1)*r:this._start,i=0;i!==n&&!1!==e(o,t?n-++i:i++,this);)o+=t?-r:r
return i},t.prototype.__iterator=function(e,t){var n=this.size,r=this._step,o=t?this._start+(n-1)*r:this._start,i=0
return new Fe((function(){if(i===n)return{value:void 0,done:!0}
var a=o
return o+=t?-r:r,We(e,t?n-++i:i++,a)}))},t.prototype.equals=function(e){return e instanceof t?this._start===e._start&&this._end===e._end&&this._step===e._step:Pr(this,e)},t}(Ye)
function Br(e,t,n){for(var r=en(t),o=0;o!==r.length;)if(e=sn(e,r[o++],se),e===se)return n
return e}function qr(e,t){return Br(this,e,t)}function Hr(e,t){return Br(e,t,se)!==se}function Vr(){Xt(this.size)
var e={}
return this.__iterate((function(t,n){e[n]=t})),e}xe.isIterable=_e,xe.isKeyed=we,xe.isIndexed=Se,xe.isAssociative=Ee,xe.isOrdered=De,xe.Iterator=Fe,Cr(xe,{toArray:function(){Xt(this.size)
var e=new Array(this.size||0),t=we(this),n=0
return this.__iterate((function(r,o){e[n++]=t?[o,r]:r})),e},toIndexedSeq:function(){return new It(this)},toJS:function(){return Or(this)},toKeyedSeq:function(){return new zt(this,!0)},toMap:function(){return On(this.toKeyedSeq())},toObject:Vr,toOrderedMap:function(){return yr(this.toKeyedSeq())},toOrderedSet:function(){return oo(we(this)?this.valueSeq():this)},toSet:function(){return Nr(we(this)?this.valueSeq():this)},toSetSeq:function(){return new Pt(this)},toSeq:function(){return Se(this)?this.toIndexedSeq():we(this)?this.toKeyedSeq():this.toSetSeq()},toStack:function(){return Sr(we(this)?this.valueSeq():this)},toList:function(){return rr(we(this)?this.valueSeq():this)},toString:function(){return"[Collection]"},__toString:function(e,t){return 0===this.size?e+t:e+" "+this.toSeq().map(this.__toStringMapper).join(", ")+" "+t},concat:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t]
return Vt(this,Ft(this,e))},includes:function(e){return this.some((function(t){return ct(t,e)}))},entries:function(){return this.__iterator(2)},every:function(e,t){Xt(this.size)
var n=!0
return this.__iterate((function(r,o,i){if(!e.call(t,r,o,i))return n=!1,!1})),n},filter:function(e,t){return Vt(this,Rt(this,e,t,!0))},find:function(e,t,n){var r=this.findEntry(e,t)
return r?r[1]:n},forEach:function(e,t){return Xt(this.size),this.__iterate(t?e.bind(t):e)},join:function(e){Xt(this.size),e=void 0!==e?""+e:","
var t="",n=!0
return this.__iterate((function(r){n?n=!1:t+=e,t+=null!=r?r.toString():""})),t},keys:function(){return this.__iterator(0)},map:function(e,t){return Vt(this,Nt(this,e,t))},reduce:function(e,t,n){return Yr(this,e,t,n,arguments.length<2,!1)},reduceRight:function(e,t,n){return Yr(this,e,t,n,arguments.length<2,!0)},reverse:function(){return Vt(this,Dt(this,!0))},slice:function(e,t){return Vt(this,Lt(this,e,t,!0))},some:function(e,t){return!this.every(Xr(e),t)},sort:function(e){return Vt(this,Ut(this,e))},values:function(){return this.__iterator(1)},butLast:function(){return this.slice(0,-1)},isEmpty:function(){return void 0!==this.size?0===this.size:!this.some((function(){return!0}))},count:function(e,t){return ce(e?this.toSeq().filter(e,t):this)},countBy:function(e,t){return function(e,t,n){var r=On().asMutable()
return e.__iterate((function(o,i){r.update(t.call(n,o,i,e),0,(function(e){return e+1}))})),r.asImmutable()}(this,e,t)},equals:function(e){return Pr(this,e)},entrySeq:function(){var e=this
if(e._cache)return new Ze(e._cache)
var t=e.toSeq().map(Zr).toIndexedSeq()
return t.fromEntrySeq=function(){return e.toSeq()},t},filterNot:function(e,t){return this.filter(Xr(e),t)},findEntry:function(e,t,n){var r=n
return this.__iterate((function(n,o,i){if(e.call(t,n,o,i))return r=[o,n],!1})),r},findKey:function(e,t){var n=this.findEntry(e,t)
return n&&n[0]},findLast:function(e,t,n){return this.toKeyedSeq().reverse().find(e,t,n)},findLastEntry:function(e,t,n){return this.toKeyedSeq().reverse().findEntry(e,t,n)},findLastKey:function(e,t){return this.toKeyedSeq().reverse().findKey(e,t)},first:function(e){return this.find(fe,null,e)},flatMap:function(e,t){return Vt(this,function(e,t,n){var r=Gt(e)
return e.toSeq().map((function(o,i){return r(t.call(n,o,i,e))})).flatten(!0)}(this,e,t))},flatten:function(e){return Vt(this,Wt(this,e,!0))},fromEntrySeq:function(){return new Ct(this)},get:function(e,t){return this.find((function(t,n){return ct(n,e)}),void 0,t)},getIn:qr,groupBy:function(e,t){return function(e,t,n){var r=we(e),o=(De(e)?yr():On()).asMutable()
e.__iterate((function(i,a){o.update(t.call(n,i,a,e),(function(e){return e=e||[],e.push(r?[a,i]:i),e}))}))
var i=Gt(e)
return o.map((function(t){return Vt(e,i(t))})).asImmutable()}(this,e,t)},has:function(e){return this.get(e,se)!==se},hasIn:function(e){return Hr(this,e)},isSubset:function(e){return e="function"==typeof e.includes?e:xe(e),this.every((function(t){return e.includes(t)}))},isSuperset:function(e){return e="function"==typeof e.isSubset?e:xe(e),e.isSubset(this)},keyOf:function(e){return this.findKey((function(t){return ct(t,e)}))},keySeq:function(){return this.toSeq().map(Jr).toIndexedSeq()},last:function(e){return this.toSeq().reverse().first(e)},lastKeyOf:function(e){return this.toKeyedSeq().reverse().keyOf(e)},max:function(e){return Bt(this,e)},maxBy:function(e,t){return Bt(this,t,e)},min:function(e){return Bt(this,e?eo(e):no)},minBy:function(e,t){return Bt(this,t?eo(t):no,e)},rest:function(){return this.slice(1)},skip:function(e){return 0===e?this:this.slice(Math.max(0,e))},skipLast:function(e){return 0===e?this:this.slice(0,-Math.max(0,e))},skipWhile:function(e,t){return Vt(this,Mt(this,e,t,!0))},skipUntil:function(e,t){return this.skipWhile(Xr(e),t)},sortBy:function(e,t){return Vt(this,Ut(this,t,e))},take:function(e){return this.slice(0,Math.max(0,e))},takeLast:function(e){return this.slice(-Math.max(0,e))},takeWhile:function(e,t){return Vt(this,function(e,t,n){var r=Kt(e)
return r.__iterateUncached=function(r,o){var i=this
if(o)return this.cacheResult().__iterate(r,o)
var a=0
return e.__iterate((function(e,o,s){return t.call(n,e,o,s)&&++a&&r(e,o,i)})),a},r.__iteratorUncached=function(r,o){var i=this
if(o)return this.cacheResult().__iterator(r,o)
var a=e.__iterator(2,o),s=!0
return new Fe((function(){if(!s)return{value:void 0,done:!0}
var e=a.next()
if(e.done)return e
var o=e.value,l=o[0],u=o[1]
return t.call(n,u,l,i)?2===r?e:We(r,l,u,e):(s=!1,{value:void 0,done:!0})}))},r}(this,e,t))},takeUntil:function(e,t){return this.takeWhile(Xr(e),t)},update:function(e){return e(this)},valueSeq:function(){return this.toIndexedSeq()},hashCode:function(){return this.__hash||(this.__hash=function(e){if(e.size===1/0)return 0
var t=De(e),n=we(e),r=t?1:0,o=e.__iterate(n?t?function(e,t){r=31*r+ro(ht(e),ht(t))|0}:function(e,t){r=r+ro(ht(e),ht(t))|0}:t?function(e){r=31*r+ht(e)|0}:function(e){r=r+ht(e)|0})
return function(e,t){return t=dt(t,3432918353),t=dt(t<<15|t>>>-15,461845907),t=dt(t<<13|t>>>-13,5),t=(t+3864292196|0)^e,t=dt(t^t>>>16,2246822507),t=dt(t^t>>>13,3266489909),t=ft(t^t>>>16),t}(o,r)}(this))}})
var $r=xe.prototype
$r[me]=!0,$r[Me]=$r.values,$r.toJSON=$r.toArray,$r.__toStringMapper=on,$r.inspect=$r.toSource=function(){return this.toString()},$r.chain=$r.flatMap,$r.contains=$r.includes,Cr(je,{flip:function(){return Vt(this,Ot(this))},mapEntries:function(e,t){var n=this,r=0
return Vt(this,this.toSeq().map((function(o,i){return e.call(t,[i,o],r++,n)})).fromEntrySeq())},mapKeys:function(e,t){var n=this
return Vt(this,this.toSeq().flip().map((function(r,o){return e.call(t,r,o,n)})).flip())}})
var Gr=je.prototype
Gr[be]=!0,Gr[Me]=$r.entries,Gr.toJSON=Vr,Gr.__toStringMapper=function(e,t){return on(t)+": "+on(e)},Cr(Te,{toKeyedSeq:function(){return new zt(this,!1)},filter:function(e,t){return Vt(this,Rt(this,e,t,!1))},findIndex:function(e,t){var n=this.findEntry(e,t)
return n?n[0]:-1},indexOf:function(e){var t=this.keyOf(e)
return void 0===t?-1:t},lastIndexOf:function(e){var t=this.lastKeyOf(e)
return void 0===t?-1:t},reverse:function(){return Vt(this,Dt(this,!1))},slice:function(e,t){return Vt(this,Lt(this,e,t,!1))},splice:function(e,t){var n=arguments.length
if(t=Math.max(t||0,0),0===n||2===n&&!t)return this
e=he(e,e<0?this.count():this.size)
var r=this.slice(0,e)
return Vt(this,1===n?r:r.concat(Jt(arguments,2),this.slice(e+t)))},findLastIndex:function(e,t){var n=this.findLastEntry(e,t)
return n?n[0]:-1},first:function(e){return this.get(0,e)},flatten:function(e){return Vt(this,Wt(this,e,!1))},get:function(e,t){return e=de(this,e),e<0||this.size===1/0||void 0!==this.size&&e>this.size?t:this.find((function(t,n){return n===e}),void 0,t)},has:function(e){return e=de(this,e),e>=0&&(void 0!==this.size?this.size===1/0||e<this.size:-1!==this.indexOf(e))},interpose:function(e){return Vt(this,function(e,t){var n=Kt(e)
return n.size=e.size&&2*e.size-1,n.__iterateUncached=function(n,r){var o=this,i=0
return e.__iterate((function(e){return(!i||!1!==n(t,i++,o))&&!1!==n(e,i++,o)}),r),i},n.__iteratorUncached=function(n,r){var o,i=e.__iterator(1,r),a=0
return new Fe((function(){return(!o||a%2)&&(o=i.next(),o.done)?o:a%2?We(n,a++,t):We(n,a++,o.value,o)}))},n}(this,e))},interleave:function(){var e=[this].concat(Jt(arguments)),t=Ht(this.toSeq(),Ye.of,e),n=t.flatten(!0)
return t.size&&(n.size=t.size*e.length),Vt(this,n)},keySeq:function(){return Ur(0,this.size)},last:function(e){return this.get(-1,e)},skipWhile:function(e,t){return Vt(this,Mt(this,e,t,!1))},zip:function(){var e=[this].concat(Jt(arguments))
return Vt(this,Ht(this,to,e))},zipAll:function(){var e=[this].concat(Jt(arguments))
return Vt(this,Ht(this,to,e,!0))},zipWith:function(e){var t=Jt(arguments)
return t[0]=this,Vt(this,Ht(this,e,t))}})
var Kr=Te.prototype
Kr[ke]=!0,Kr[Ne]=!0,Cr(Ae,{get:function(e,t){return this.has(e)?e:t},includes:function(e){return this.has(e)},keySeq:function(){return this.valueSeq()}})
var Qr=Ae.prototype
function Yr(e,t,n,r,o,i){return Xt(e.size),e.__iterate((function(e,i,a){o?(o=!1,n=e):n=t.call(r,n,e,i,a)}),i),n}function Jr(e,t){return t}function Zr(e,t){return[t,e]}function Xr(e){return function(){return!e.apply(this,arguments)}}function eo(e){return function(){return-e.apply(this,arguments)}}function to(){return Jt(arguments)}function no(e,t){return e<t?1:e>t?-1:0}function ro(e,t){return e^t+2654435769+(e<<6)+(e>>2)|0}Qr.has=$r.includes,Qr.contains=Qr.includes,Qr.keys=Qr.values,Cr(Qe,Gr),Cr(Ye,Kr),Cr(Je,Qr)
var oo=function(e){function t(e){return null==e?lo():Ir(e)?e:lo().withMutations((function(t){var n=Ae(e)
Xt(n.size),n.forEach((function(e){return t.add(e)}))}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.of=function(){return this(arguments)},t.fromKeys=function(e){return this(je(e).keySeq())},t.prototype.toString=function(){return this.__toString("OrderedSet {","}")},t}(Nr)
oo.isOrderedSet=Ir
var io,ao=oo.prototype
function so(e,t){var n=Object.create(ao)
return n.size=e?e.size:0,n._map=e,n.__ownerID=t,n}function lo(){return io||(io=so(_r()))}ao[Ne]=!0,ao.zip=Kr.zip,ao.zipWith=Kr.zipWith,ao.zipAll=Kr.zipAll,ao.__empty=lo,ao.__make=so
var uo=function(e,t){var n
!function(e){if(Ce(e))throw new Error("Can not call `Record` with an immutable Record as default values. Use a plain javascript object instead.")
if(Oe(e))throw new Error("Can not call `Record` with an immutable Collection as default values. Use a plain javascript object instead.")
if(null===e||"object"!=typeof e)throw new Error("Can not call `Record` with a non-object as default values. Use a plain javascript object instead.")}(e)
var r=function(i){var a=this
if(i instanceof r)return i
if(!(this instanceof r))return new r(i)
if(!n){n=!0
var s=Object.keys(e),l=o._indices={}
o._name=t,o._keys=s,o._defaultValues=e
for(var u=0;u<s.length;u++){var c=s[u]
l[c]=u,o[c]?"object"==typeof console&&console.warn&&console.warn("Cannot define "+po(this)+' with property "'+c+'" since that property name is part of the Record API.'):vo(o,c)}}return this.__ownerID=void 0,this._values=rr().withMutations((function(e){e.setSize(a._keys.length),je(i).forEach((function(t,n){e.set(a._indices[n],t===a._defaultValues[n]?void 0:t)}))})),this},o=r.prototype=Object.create(co)
return o.constructor=r,t&&(r.displayName=t),r}
uo.prototype.toString=function(){for(var e,t=po(this)+" { ",n=this._keys,r=0,o=n.length;r!==o;r++)e=n[r],t+=(r?", ":"")+e+": "+on(this.get(e))
return t+" }"},uo.prototype.equals=function(e){return this===e||Ce(e)&&ho(this).equals(ho(e))},uo.prototype.hashCode=function(){return ho(this).hashCode()},uo.prototype.has=function(e){return this._indices.hasOwnProperty(e)},uo.prototype.get=function(e,t){if(!this.has(e))return t
var n=this._indices[e],r=this._values.get(n)
return void 0===r?this._defaultValues[e]:r},uo.prototype.set=function(e,t){if(this.has(e)){var n=this._values.set(this._indices[e],t===this._defaultValues[e]?void 0:t)
if(n!==this._values&&!this.__ownerID)return fo(this,n)}return this},uo.prototype.remove=function(e){return this.set(e)},uo.prototype.clear=function(){var e=this._values.clear().setSize(this._keys.length)
return this.__ownerID?this:fo(this,e)},uo.prototype.wasAltered=function(){return this._values.wasAltered()},uo.prototype.toSeq=function(){return ho(this)},uo.prototype.toJS=function(){return Or(this)},uo.prototype.entries=function(){return this.__iterator(2)},uo.prototype.__iterator=function(e,t){return ho(this).__iterator(e,t)},uo.prototype.__iterate=function(e,t){return ho(this).__iterate(e,t)},uo.prototype.__ensureOwner=function(e){if(e===this.__ownerID)return this
var t=this._values.__ensureOwner(e)
return e?fo(this,t,e):(this.__ownerID=e,this._values=t,this)},uo.isRecord=Ce,uo.getDescriptiveName=po
var co=uo.prototype
function fo(e,t,n){var r=Object.create(Object.getPrototypeOf(e))
return r._values=t,r.__ownerID=n,r}function po(e){return e.constructor.displayName||e.constructor.name||"Record"}function ho(e){return rt(e._keys.map((function(t){return[t,e.get(t)]})))}function vo(e,t){try{Object.defineProperty(e,t,{get:function(){return this.get(t)},set:function(e){Zt(this.__ownerID,"Cannot set on an immutable record."),this.set(t,e)}})}catch(e){}}co[Pe]=!0,co.delete=co.remove,co.deleteIn=co.removeIn=gn,co.getIn=qr,co.hasIn=$r.hasIn,co.merge=bn,co.mergeWith=wn,co.mergeIn=Tn,co.mergeDeep=xn,co.mergeDeepWith=jn,co.mergeDeepIn=An,co.setIn=hn,co.update=mn,co.updateIn=_n,co.withMutations=zn,co.asMutable=In,co.asImmutable=Pn,co[Me]=co.entries,co.toJSON=co.toObject=$r.toObject,co.inspect=co.toSource=function(){return this.toString()}
var go
!function(e){function t(e,n){if(!(this instanceof t))return new t(e,n)
if(this._value=e,this.size=void 0===n?1/0:Math.max(0,n),0===this.size){if(go)return go
go=this}}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.toString=function(){return 0===this.size?"Repeat []":"Repeat [ "+this._value+" "+this.size+" times ]"},t.prototype.get=function(e,t){return this.has(e)?this._value:t},t.prototype.includes=function(e){return ct(this._value,e)},t.prototype.slice=function(e,n){var r=this.size
return pe(e,n,r)?this:new t(this._value,ve(n,r)-he(e,r))},t.prototype.reverse=function(){return this},t.prototype.indexOf=function(e){return ct(this._value,e)?0:-1},t.prototype.lastIndexOf=function(e){return ct(this._value,e)?this.size:-1},t.prototype.__iterate=function(e,t){for(var n=this.size,r=0;r!==n&&!1!==e(this._value,t?n-++r:r++,this););return r},t.prototype.__iterator=function(e,t){var n=this,r=this.size,o=0
return new Fe((function(){return o===r?{value:void 0,done:!0}:We(e,t?r-++o:o++,n._value)}))},t.prototype.equals=function(e){return e instanceof t?ct(this._value,e._value):Pr(e)}}(Ye)
class yo extends t.PureComponent{render(){return e={tokenDefinitions:On({asset:this.props.asset}),render:e=>this.props.render(e.get("asset")),services:this.props.services},t.createFactory(ee)(e)
var e}}yo.displayName="ColorAssetInjector"
const mo=(e,n)=>{var r
return r=class extends Z{render(){return U({className:this.props.className,size:this.props.size,alt:this.props.alt,kind:"scene",src:n})}},r.displayName=`${e}SceneIllustration`,r.create=t.createFactory(r),r},_o=(e,n)=>{var r
return r=class extends Z{render(){return e={asset:n,render:e=>U({className:this.props.className,size:this.props.size,alt:this.props.alt,kind:"scene",src:e}),services:this.props.services},t.createFactory(yo)(e)
var e}},r.displayName=`${e}ColorThemeAwareSceneIllustration`,r.create=t.createFactory(r),r},bo=(_o("AsanaLogo",{defaultValue:"https://d3ki9tyy5l5ruj.cloudfront.net/obj/4dadc07a52c3f442d684b0830ad432659e0ef3f5/Asana-Logo-Horizontal-Coral-Black.svg",darkValue:"https://d3ki9tyy5l5ruj.cloudfront.net/obj/6622ad572b5223bcb1ad696eae8f988e5dd04631/Asana-Logo-Horizontal-Coral-White.svg"}),_o("CustomizeMenuApps",{defaultValue:"https://d3ki9tyy5l5ruj.cloudfront.net/obj/52e7ff86ec9aa38e4af5a96c3f81b2e9a9251280/apps_illustration_light.png",darkValue:"https://d3ki9tyy5l5ruj.cloudfront.net/obj/2f14ca2d949e03883e642199d98cabe56ff2aa33/apps_illustration_dark.png"}),_o("CustomizeMenuTaskTemplates",{defaultValue:"https://d3ki9tyy5l5ruj.cloudfront.net/obj/7ec45d57d70d9486ce2e43d600b96aa1f68525a6/task_templates_illustration_light.png",darkValue:"https://d3ki9tyy5l5ruj.cloudfront.net/obj/5c809bf37ba08556cbb2726025b095408520e72f/task_templates_illustration_dark.png"}),_o("HomeDraftsWidgetPreview",{defaultValue:"https://d3ki9tyy5l5ruj.cloudfront.net/obj/ad4b32290aaa523f392eb0cdb2760f1e7b30c368/HomeDraftCommentsWidgetPreview.svg",darkValue:"https://d3ki9tyy5l5ruj.cloudfront.net/obj/f262a4ef131e4e3ee970e88c60892b94fc41dcc2/HomeDraftCommentsWidgetPreviewDark.svg"}),_o("HomeMyGoalsWidgetPreview",{defaultValue:"https://d3ki9tyy5l5ruj.cloudfront.net/obj/ec85642230ac48bac45c4cb7e28c992f73fff94a/HomeMyGoalsWidgetPreview.svg",darkValue:"https://d3ki9tyy5l5ruj.cloudfront.net/obj/53dfd2e69033a5d89fdb2448d3147a14220e130c/HomeMyGoalsWidgetPreviewDark.svg"}),_o("HomeMyTasksWidgetPreview",{defaultValue:"https://d3ki9tyy5l5ruj.cloudfront.net/obj/93bda3a5ad623cd95069474aeb663bdb996bc59e/home_my_tasks_widget_preview.png",darkValue:"https://d3ki9tyy5l5ruj.cloudfront.net/obj/e153ea93c2347e506eb7d4f4364665a45663baa1/home_my_tasks_widget_preview_dark.png"}),_o("HomeNotepadWidgetPreview",{defaultValue:"https://d3ki9tyy5l5ruj.cloudfront.net/obj/db9eb507988adb920113597969e84801cc034912/home_notepad_widget_preview.png",darkValue:"https://d3ki9tyy5l5ruj.cloudfront.net/obj/e711267ba178099e4e66e7f67cfe90f9642af74b/home_notepad_widget_preview_dark.png"}),_o("HomePeopleWidgetPreview",{defaultValue:"https://d3ki9tyy5l5ruj.cloudfront.net/obj/48a22353195f0d9fbee7a9d2f1ffbe2560d57946/home_people_widget_preview.png",darkValue:"https://d3ki9tyy5l5ruj.cloudfront.net/obj/d5c7b0e2b9ccf21153e7abef317f6bd84a619929/home_people_widget_preview_dark.png"}),_o("HomeProjectsWidgetPreview",{defaultValue:"https://d3ki9tyy5l5ruj.cloudfront.net/obj/dd9b78898cf50c3d60335bbff6b7b74ff5bb49e3/home_projects_widget_preview.png",darkValue:"https://d3ki9tyy5l5ruj.cloudfront.net/obj/13d3c48bd06cf9f0dd21031999daf90c365c55d6/home_projects_widget_preview_dark.png"}),_o("HomeTasksAssignedToOthersReportWidgetPreview",{defaultValue:"https://d3ki9tyy5l5ruj.cloudfront.net/obj/470a143b1ec3008f3ec80033c8974fbaa0193eb4/home_tasks_assigned_to_others_widget_preview.png",darkValue:"https://d3ki9tyy5l5ruj.cloudfront.net/obj/bac896e70aef9e2a49e4469456dedac058107ff3/home_tasks_assigned_to_others_widget_preview_dark.png"}),_o("ArrowWithCirclesAndTaskCompletion",{defaultValue:"https://d3ki9tyy5l5ruj.cloudfront.net/obj/7ca3440d16f6215639837975a89692b20de2ff3a/Upgrade.png",darkValue:"https://d3ki9tyy5l5ruj.cloudfront.net/obj/522d712a3994cd15ee8682103c72c24d58975a36/Upgrade-DarkMode.png"}),_o("TwoPyramidsWithFlags",{defaultValue:"https://d3ki9tyy5l5ruj.cloudfront.net/obj/d4de8af5c44b811760c63cb11a5a175d6562a1b2/two_pyramids_with_flags.svg",darkValue:"https://d3ki9tyy5l5ruj.cloudfront.net/obj/5221bcf7b054b72117d06c3f03d60db19125acae/No-Goals-Yet-Empty-State.svg"}),{AbstractedListUi:mo("AbstractedListUi","https://d3ki9tyy5l5ruj.cloudfront.net/obj/1ed3976060f589e7552ceb0c59de98c777536771/Abstracted-list-UI.svg"),AppAddedToProjectEmpty:mo("AppAddedToProjectEmpty","https://d3ki9tyy5l5ruj.cloudfront.net/obj/04dd882ba1b3d190a0445e48fbb91d74b7675e0d/installSuccessGeneric.svg"),ArrowNavigatingTaskCells:mo("ArrowNavigatingTaskCells","https://d3ki9tyy5l5ruj.cloudfront.net/obj/cc56193528deaffaebd096d2920f35254dafa507/arrow-navigating-task-cells.svg"),AsanaAtlassianLogoComputerPlants:mo("AsanaAtlassianLogoComputerPlants","https://d3ki9tyy5l5ruj.cloudfront.net/obj/1f1825f5d64604b1fc32c787c76cb695846fef7c/asana-atlassian-logo-computer-plants.svg"),AsanaZoomLogoComputerPlants:mo("AsanaZoomLogoComputerPlants","https://d3ki9tyy5l5ruj.cloudfront.net/obj/b8578a10c1329b8793c6a907e2c7980cc823cc1d/asana-zoom-logo-computer-plants.svg"),AsanaLogoComputerPlants:mo("AsanaLogoComputerPlants","https://d3ki9tyy5l5ruj.cloudfront.net/obj/d1328893368b3c7aedcb3306dd8b30cf2c31c347/Asana-logo-computer-plants.svg"),AttachmentsSpread:mo("AttachmentsSpread","https://d3ki9tyy5l5ruj.cloudfront.net/obj/5dfaccb19d82c04a49ea9d1ca628d6206dcaa39d/attachments_spread.svg"),AsanaWireframeGrid:mo("AsanaWireframeGrid","https://d3ki9tyy5l5ruj.cloudfront.net/obj/6853f3eea5232a9c6c4498b678c8fca594801c68/asana_wireframe_grid.svg"),AsanaWireframeTaskDetails:mo("AsanaWireframeTaskDetails","https://d3ki9tyy5l5ruj.cloudfront.net/obj/62208f36643f7e56123fa72a7b579e0c16111c07/asana_wireframe_task_detail.svg"),AsanaAlignConnection:mo("AsanaAlignConnection","https://d3ki9tyy5l5ruj.cloudfront.net/obj/2f11ab4ab44ea19177b0180ac404b1c2826c113a/AlignConnectIcon.svg"),Cats:mo("Cats","https://d3ki9tyy5l5ruj.cloudfront.net/obj/604f3053dbeb55f26e96399906ac648974ea6cd1/Cats.svg"),CheckmarkOnTiles:mo("CheckmarkOnTiles","https://d3ki9tyy5l5ruj.cloudfront.net/obj/3f1346f5e3a6c83a64af10797fe456d236537675/checkmark-on-tiles.svg"),ClockWithAsanaFeatures:mo("ClockWithAsanaFeatures","https://d3ki9tyy5l5ruj.cloudfront.net/obj/42dbd8d1f7d2aa7fb712e1248a6b89a8c1517fe1/clock_with_asana_features.svg"),CompletedTasks:mo("CompletedTasks","https://d3ki9tyy5l5ruj.cloudfront.net/obj/d355c64f255933a55fb04665751ab669a73fb422/completed_tasks.svg"),ComputerWarningWithPeople:mo("ComputerWarningWithPeople","https://d3ki9tyy5l5ruj.cloudfront.net/obj/5e1b8deb1d293fed1b10a14ae41b335d611002f0/computer_warning_with_people.svg"),ComputerWithMessyPostIts:mo("ComputerWithMessyPostIts","https://d3ki9tyy5l5ruj.cloudfront.net/obj/698746cb8fe99f975a7b1266a0161e45696acad3/Computer-with–messy-post-its.svg"),DancingPeopleOnGray:mo("DancingPeopleOnGray","https://d3ki9tyy5l5ruj.cloudfront.net/obj/7a49ccca6c2c71412c2cc33b4499cff37dcf48d6/dancing-people-1200x600.gif"),DancingPeopleOnWhite:mo("DancingPeopleOnWhite","https://d3ki9tyy5l5ruj.cloudfront.net/obj/85b29acdf79da1d1bdbe531c56b9ee1a783f285a/dancing-people-1200x600.gif"),DarkScene:mo("DarkScene","https://d3ki9tyy5l5ruj.cloudfront.net/obj/465a42f60e99cd8b31b52e11aeaba77b15450f5c/Desk-scene.svg"),DocumentWithCirclesAndDollarSigns:mo("DocumentWithCirclesAndDollarSigns","https://d3ki9tyy5l5ruj.cloudfront.net/obj/55d3239efb525561394e97dcc2a6103e3d496a76/document_with_circles_and_dollar_signs.svg"),FlyingYeti:mo("FlyingYeti","https://d3ki9tyy5l5ruj.cloudfront.net/obj/c1b40456ba97ca2c07f6a5e15510a0020b79a3b2/yeti_welcome.svg"),GlobeWithFlags:mo("GlobeWithFlags","https://d3ki9tyy5l5ruj.cloudfront.net/obj/280179835a28bff07329c288c3b2a9a12ddef2b6/Globe_with_flags.svg"),GlobeWithSpeechBubbles:mo("GlobeWithSpeechBubbles","https://d3ki9tyy5l5ruj.cloudfront.net/obj/09c3fcb56b12574b17de27687b35a2bc115886dd/Globe-with-speech-bubbles.svg"),HeartConfetti:mo("HeartConfetti","https://d3ki9tyy5l5ruj.cloudfront.net/obj/a68b1131a85fd8b5714e6b796adc9b45b58fffe4/Heart-confetti.svg"),HeartLogoComputerPlants:mo("HeartLogoComputerPlants","https://d3ki9tyy5l5ruj.cloudfront.net/obj/a31e9745ba9285e252345835912bb87e79bac513/heart-logo-computer-plants.svg"),HeartStripes:mo("HeartStripes","https://d3ki9tyy5l5ruj.cloudfront.net/obj/e2fd474ad76f847dc1aa87bc8603799af125834c/Heart-stripes-15.svg"),LadderAndCheckmark:mo("LadderAndCheckmark","https://d3ki9tyy5l5ruj.cloudfront.net/obj/b09506cb2b043cbe60dde05ed67fc1435fb0e05b/Upgrade-Success-Page-Illustration.png"),LargeCheckmarkAndTwoCircles:mo("LargeCheckmarkAndTwoCircles","https://d3ki9tyy5l5ruj.cloudfront.net/obj/4ab299036708c3c284e8b99924a63c5e0281103a/large_checkmark_and_two_circles.png"),LargeCheckmarkWithThreeColorfulBubbles:mo("LargeCheckmarkWithThreeColorfulBubbles","https://d3ki9tyy5l5ruj.cloudfront.net/obj/7efbfa8b351b071fff8d85a23b9901e8fb1c84c9/large-checkmark-with-three-colorful-bubbles.svg"),LookingUnderCouch:mo("LookingUnderCouch","https://d3ki9tyy5l5ruj.cloudfront.net/obj/9f8d5b2a42a727d4d17bd24ce168923cdde0015a/looking_under_couch.svg"),ManageProjects:mo("ManageProjects","https://d3ki9tyy5l5ruj.cloudfront.net/obj/0ff8beeb750d534caade7e5bce7db4572003a12e/Manage-Projects.png"),MountainWithTrees:mo("MountainWithTrees","https://d3ki9tyy5l5ruj.cloudfront.net/obj/f66d2f7147fd6c669a73db86d32d984d14babf6b/Mountain-with-trees-19.svg"),MovingFromBigHouseToMediumHouse:mo("MovingFromBigHouseToMediumHouse","https://d3ki9tyy5l5ruj.cloudfront.net/obj/7fa80421e45a7dede8741a1f649a9e4bf7574019/Downgrade_modal_business_to_premium-02.svg"),NotesOnABoard:mo("NotesOnABoard","https://d3ki9tyy5l5ruj.cloudfront.net/obj/6802082f1242231a89b15074b03fd57c8e685653/notes_on_a_board.svg"),PeopleAroundUiHoldingChart:mo("PeopleAroundUiHoldingChart","https://d3ki9tyy5l5ruj.cloudfront.net/obj/f301da19ca238e33ce9567a9090ecdd904a64304/people_around_ui_holding_chart.svg"),PeopleAtDeskWithRisingChart:mo("PeopleAtDeskWithRisingChart","https://d3ki9tyy5l5ruj.cloudfront.net/obj/c7d0099e0cd471c570872d2d05cf315e951b2f17/People-at-desk-with-rising-chart.svg"),PeopleCelebrating:mo("PeopleCelebrating","https://d3ki9tyy5l5ruj.cloudfront.net/obj/99be55921651dcc82a69e3502803bfb19f95217f/people_celebrating.svg"),PeopleCelebratingAtWinnersPodium:mo("PeopleCelebratingAtWinnersPodium","https://d3ki9tyy5l5ruj.cloudfront.net/obj/a322c3321af5e950d4565ab0aaf892dffa100afc/People-celebrating-at-winners-podium.svg"),PeopleDancing:mo("PeopleDancing","https://d3ki9tyy5l5ruj.cloudfront.net/obj/d9ca3563176950bd7431ed8bf5267393f34c4e65/People-dancing.svg"),PeopleHighFiving:mo("PeopleHighFiving","https://d3ki9tyy5l5ruj.cloudfront.net/obj/f8fea7dcf23a5ced7cc9fc626b33ee087077f127/People-high-fiving.svg"),PeopleHighFivingWithIcons:mo("PeopleHighFivingWithIcons","https://d3ki9tyy5l5ruj.cloudfront.net/obj/51e5f92d7d083ff02f5713bdc94884fe3c0d3548/People-high-fiving-with-icons.svg"),PeopleHoldingCheckmarkAroundUi:mo("PeopleHoldingCheckmarkAroundUi","https://d3ki9tyy5l5ruj.cloudfront.net/obj/f1c40615ca59d7d21424ce03a7e36a010b014c4d/People-holding-checkmark-around-UI.svg"),PeopleHoldingPapersAroundDesk:mo("PeopleHoldingPapersAroundDesk","https://d3ki9tyy5l5ruj.cloudfront.net/obj/ea0de2a22a03260c682f451d6c1e5b4cd43cbf28/people_holding_papers_around_desk.svg"),PeopleJuggling:mo("PeopleJuggling","https://d3ki9tyy5l5ruj.cloudfront.net/obj/3fc8bef8eaa7272029587241a1bee1819dd70a37/People-juggling.svg"),PeopleLookingRightAtCheckmarkLightbulb:mo("PeopleLookingRightAtCheckmarkLightbulb","https://d3ki9tyy5l5ruj.cloudfront.net/obj/59b05b659cf0d6ae2e0c65be5cc862bf1df88bd3/People-looking-right-at-checkmark-lightbulb.svg"),PeopleLookingUpAtCheckmarkLightbulb:mo("PeopleLookingUpAtCheckmarkLightbulb","https://d3ki9tyy5l5ruj.cloudfront.net/obj/453aef9864f0cafb392a2b14f3476e2b1dd0e8b8/People-looking-up-at-checkmark-lightbulb.svg"),PeopleOnPodiumWithFlag:mo("PeopleOnPodiumWithFlag","https://d3ki9tyy5l5ruj.cloudfront.net/obj/929942360b225736f82284cf92aa8736bd0623bb/people_on_podium_with_flag.svg"),PeopleThinking:mo("PeopleThinking","https://d3ki9tyy5l5ruj.cloudfront.net/obj/56329334f475b79e572a13e3d82cfe0da4788efb/People-thinking.svg"),PeopleThinkingWithIcons:mo("PeopleThinkingWithIcons","https://d3ki9tyy5l5ruj.cloudfront.net/obj/261df20f406e96e2a073fc31feb2db47fdfd31c0/People-thinking-with-icons.svg"),PeopleWaving:mo("PeopleWaving","https://d3ki9tyy5l5ruj.cloudfront.net/obj/0a4fddeae7ca0122430b10c53a95c1af16cf4f25/People-waving-29.svg"),PeopleWithClipboards:mo("PeopleWithClipboards","https://d3ki9tyy5l5ruj.cloudfront.net/obj/91184442f716dd9ddd4132611b6e9f8a940a88e9/Person_with_clipboards.svg"),PeopleWithClock:mo("PeopleWithClock","https://d3ki9tyy5l5ruj.cloudfront.net/obj/8c0d37b9f7acf7d102ea01b912a515ed9bf36d26/People-with-clock.svg"),PeopleWithFlag:mo("PeopleWithFlag","https://d3ki9tyy5l5ruj.cloudfront.net/obj/19e1e46f817cbdc899c54df25014ebb9325c014d/People-with-flag.svg"),PeopleWithGauge:mo("PeopleWithGauge","https://d3ki9tyy5l5ruj.cloudfront.net/obj/5baa34575cb552c96719c38143e223498f150852/People-with-gauge.svg"),PeopleWithIcons:mo("PeopleWithIcons","https://d3ki9tyy5l5ruj.cloudfront.net/obj/77b4a60e09bbea1e6b8f27df94f8c5e9b91077f2/People-with-icons.svg"),PeopleWithKeyAndLock:mo("PeopleWithKeyAndLock","https://d3ki9tyy5l5ruj.cloudfront.net/obj/1f71178649993eb187ab4a381a99374e19b03668/People-with-lock-and-key.svg"),PeopleWithPortfoliosUi:mo("PeopleWithPortfoliosUi","https://d3ki9tyy5l5ruj.cloudfront.net/obj/d14b6d1e4c9beed213d97c6002f8af7b36119d54/People-with-Portfolios-UI.svg"),PersonAtDesk:mo("PersonAtDesk","https://d3ki9tyy5l5ruj.cloudfront.net/obj/93092112c0023307839b10928b4f710cedb78c3d/Person-at-desk.svg"),PersonAtDeskListeningToMusic:mo("PersonAtDeskListeningToMusic","https://d3ki9tyy5l5ruj.cloudfront.net/obj/afd2ba69161b9c0470486cdb35f6cbf8ae4886b1/Person-at-desk-listening-to-music.svg"),PersonCheckmarkBubbleWithTasks:mo("PersonCheckmarkBubbleWithTasks","https://d3ki9tyy5l5ruj.cloudfront.net/obj/94dbc59f9a420de12868c7768057a5dcc2636321/Person-checkmark-bubble-with-tasks.svg"),PersonDeliveringDocument:mo("PersonDeliveringDocument","https://d3ki9tyy5l5ruj.cloudfront.net/obj/09d1e7e9552e1722cabcad3ca6f308552c9b435a/Person-delivering-document.svg"),PersonMeditatingWithIcons:mo("PersonMeditatingWithIcons","https://d3ki9tyy5l5ruj.cloudfront.net/obj/064999857175ea50068ace1411e4abb34626c779/Person-meditating-with-icons.svg"),PersonOnSubway:mo("PersonOnSubway","https://d3ki9tyy5l5ruj.cloudfront.net/obj/8dec02f7ed3da25cd1ff6cf4d11534c616c020e8/Person-on-subway.svg"),PersonPaintingLine:mo("PersonPaintingLine","https://d3ki9tyy5l5ruj.cloudfront.net/obj/b487e2d4330b8d9f50e3408872ca8862fb149916/Person-painting.svg"),PersonPointing:mo("PersonPointing","https://d3ki9tyy5l5ruj.cloudfront.net/obj/4f84ceab14fbb86c2982e1ebcb71f8c935c1ee7f/Person-pointing-2.svg"),PersonSurroundedFeatures:mo("PersonSurroundedFeatures","https://d3ki9tyy5l5ruj.cloudfront.net/obj/9283287eda3fc85257caa6c8c9361d682f04cbd6/Person-surrounded-features.svg"),PersonThinking:mo("PersonThinking","https://d3ki9tyy5l5ruj.cloudfront.net/obj/88fcdc899bbe8d9cd9db5d215f24c4822d9c187a/Person-thinking.svg"),PersonWavingDoor:mo("PersonWavingDoor","https://d3ki9tyy5l5ruj.cloudfront.net/obj/8367aee70416d520146b812284cf03625e9da831/person_waving_door.svg"),PersonWavingYellowHair:mo("PersonWavingYellowHair","https://d3ki9tyy5l5ruj.cloudfront.net/obj/6bc46df8d80e9797e991964f079a3420135fd33b/person-waving-yellow-hair.svg"),PersonWithAsanaApp:mo("PersonWithAsanaApp","https://d3ki9tyy5l5ruj.cloudfront.net/obj/7cb0196c0646b11594d7dc436612df540f3efb0d/Person-with-Asana-app.svg"),PersonWithBoxAtTable:mo("PersonWithBoxAtTable","https://d3ki9tyy5l5ruj.cloudfront.net/obj/7f79de81d8890b08ab2d16835b4cec971284599b/person_with_box_at_table.svg"),PersonWithCalendarUi:mo("PersonWithCalendarUi","https://d3ki9tyy5l5ruj.cloudfront.net/obj/97fa975f7de23406c2383d5a02786f359d6826ac/Person-with-calendar-UI.svg"),PersonWithClipboard:mo("PersonWithClipboard","https://d3ki9tyy5l5ruj.cloudfront.net/obj/a8c7ee2f978ea409474d1ea8c2a378084ffcd264/Person-with-clipboard.svg"),PersonWithClipboardWaving:mo("PersonWithClipboardWaving","https://d3ki9tyy5l5ruj.cloudfront.net/obj/8d8dde7f7190981a520734a5bea046b089a67f38/Person-with-clipboard-waving.svg"),PersonWithPointerAndAnnotatedUi:mo("PersonWithPointerAndAnnotatedUi","https://d3ki9tyy5l5ruj.cloudfront.net/obj/bad666a721dfb73c369a21e31c32e265724cb689/Person-with-pointer-and-annotated-UI.svg"),PersonWithTimeline:mo("PersonWithTimeline","https://d3ki9tyy5l5ruj.cloudfront.net/obj/2ceb67396595f611ab83dc5e24d9eb57f4b35071/person_with_timeline.svg"),PiggyBank:mo("PiggyBank","https://d3ki9tyy5l5ruj.cloudfront.net/obj/e3fe8f4558f06ece7c215762b72f82b486bfdf6b/piggy_bank.svg"),Planner:mo("Planner","https://d3ki9tyy5l5ruj.cloudfront.net/obj/996ef48c48132c770f5232e5faf16f3737ba8d73/Planner.svg"),Plant:mo("Plant","https://d3ki9tyy5l5ruj.cloudfront.net/obj/0aa37f60e774879d7112af1f14f3323dc07f719a/Plant.svg"),PostIts:mo("PostIts","https://d3ki9tyy5l5ruj.cloudfront.net/obj/4b1fa61afe4b5a84353f724c9be137e2f8d49547/Post-its.svg"),ProjectIcons:mo("ProjectIcons","https://d3ki9tyy5l5ruj.cloudfront.net/obj/dccca2e92ec101c7f687243f68cd2db42a36bad7/Create project.png"),Safe:mo("Safe","https://d3ki9tyy5l5ruj.cloudfront.net/obj/0f1f3aac368732461c84887d5ec03faadee3cb4a/Safe.svg"),SeatedPeopleTalking:mo("SeatedPeopleTalking","https://d3ki9tyy5l5ruj.cloudfront.net/obj/472879b5780f21e9639e5fa39e23261859367c42/Seated-people-talking.svg"),ShootingTarget:mo("ShootingTarget","https://d3ki9tyy5l5ruj.cloudfront.net/obj/80c8620ec3b09b01367fb6a4c6db212b260dfc4a/shooting_target.svg"),SpeechBubblesCheckmarkLogo:mo("SpeechBubblesCheckmarkLogo","https://d3ki9tyy5l5ruj.cloudfront.net/obj/958d4ed53a13c3022ffbe12828fccb81521cbabc/Speech-bubbles–checkmark-logo.svg"),TeamChampion:mo("TeamChampion","https://d3ki9tyy5l5ruj.cloudfront.net/obj/c6eb1dae36b163312b0d192b7bf03e3d673ccf98/team_champion.svg"),TeamWithTasksUi:mo("TeamWithTasksUi","https://d3ki9tyy5l5ruj.cloudfront.net/obj/e588887760d53405a2bc6a4a86e767bcc8061bcf/Team-with-tasks-UI.svg"),TelephoneOperatorWithTask:mo("TelephoneOperatorWithTask","https://d3ki9tyy5l5ruj.cloudfront.net/obj/146bd4357d08a9577a667f7cf8d7d9f12f83b2f3/telephone-operator-with-task.svg"),ThreeAvatarsRow:mo("ThreeAvatarsRow","https://d3ki9tyy5l5ruj.cloudfront.net/obj/6ed0392393f4bd7d227adc052c9aa157a6b51b1d/three_avatars_row.svg"),ThreeCirclesAndOneArrow:mo("ThreeCirclesAndOneArrow","https://d3ki9tyy5l5ruj.cloudfront.net/obj/31bc5e65d81f4534f4411a93a9d1faa4f426eb3e/ThreeCirclesAndOneArrow.svg"),TwoCompletedTasks:mo("TwoCompletedTasks","https://d3ki9tyy5l5ruj.cloudfront.net/obj/50544816a11896f9695930a69c8899a7eda8a7ff/two-completed-tasks.svg"),TwoPeopleAroundPortfolio:mo("TwoPeopleAroundPortfolio","https://d3ki9tyy5l5ruj.cloudfront.net/obj/6fc91619fd1aa98176ca818b1ac09a3550d1c0b7/two_people_around_portfolio.svg"),TwoPeopleAroundTimeline:mo("TwoPeopleAroundTimeline","https://d3ki9tyy5l5ruj.cloudfront.net/obj/912aee2b287e17cbe3c031c076ed2dd203eedf3c/two_people_around_timeline.svg"),TwoPeopleCharts:mo("TwoPeopleCharts","https://d3ki9tyy5l5ruj.cloudfront.net/obj/981dee929e11f1b5eccfa4a86a0d13e9155c52a7/two_people_charts.svg"),TwoPeopleConfetti:mo("TwoPeopleConfetti","https://d3ki9tyy5l5ruj.cloudfront.net/obj/b7e539ee94e9f26d146a6b7bc7bbb1d848e80964/TwoPeopleConfetti.svg"),TwoPeopleConversationBubble:mo("TwoPeopleConversationBubble","https://d3ki9tyy5l5ruj.cloudfront.net/obj/aeafa37051caa4e36cf55f94da54a51178757ebd/two_people_conversation_bubble.svg"),TwoPeopleGraph:mo("TwoPeopleGraph","https://d3ki9tyy5l5ruj.cloudfront.net/obj/5da923c0cac7ab0caa6c3e43e3106afd4145fc16/two_people_graph.svg"),TwoPeopleHighFiving:mo("TwoPeopleHighFiving","https://d3ki9tyy5l5ruj.cloudfront.net/obj/2e5febee91c90619604aef044eada6a9043e8bca/two_people_high_fiving.svg"),TwoPeopleLookingAtAsanaUi:mo("TwoPeopleLookingAtAsanaUi","https://d3ki9tyy5l5ruj.cloudfront.net/obj/bd43136ff3d988adfd1fa9e2bd49d9cba99d1343/two_people_looking_at_asana_ui.svg"),TwoPeopleLookingAtCalendar:mo("TwoPeopleLookingAtCalendar","https://d3ki9tyy5l5ruj.cloudfront.net/obj/72d3cf10a2d23ce86f016316543fc59034b99b05/two_people_looking_at_calendar.svg"),TwoPeoplePartyingInFrontOfCalendar:mo("TwoPeoplePartyingInFrontOfCalendar","https://d3ki9tyy5l5ruj.cloudfront.net/obj/ef572886c92392108c0d151fd2be4e71bfab598c/calendar_party_people.svg"),TwoPeoplePointingAtAsanaUi:mo("TwoPeoplePointingAtAsanaUi","https://d3ki9tyy5l5ruj.cloudfront.net/obj/01f6b9dec2a018703f1afad5a95dadb7588b481c/two_people_pointing_at_asana_ui.svg"),TwoPeoplePointingAtUi:mo("TwoPeoplePointingAtUi","https://d3ki9tyy5l5ruj.cloudfront.net/obj/52504a8fcecbb0058067cea2aa5faf16344dd119/Two-people-pointing-at-UI.svg"),TwoPeoplePonderingAboutAsanaFeatures:mo("TwoPeoplePonderingAboutAsanaFeatures","https://d3ki9tyy5l5ruj.cloudfront.net/obj/e29b826d06438a88358cbd9373647c2c1e35f01c/two_people_pondering_about_asana_features.svg"),TwoPeopleWaving:mo("TwoPeopleWaving","https://d3ki9tyy5l5ruj.cloudfront.net/obj/5b239858adeb37df5f13d60fa1108dbdb9e445b9/two_people_waving.svg"),TwoPeopleWithFlags:mo("TwoPeopleWithFlags","https://d3ki9tyy5l5ruj.cloudfront.net/obj/c3ff9ea5faa393c5d3e4164a6ef781bd423aa9ff/two_people_with_flags.svg"),TwoPeopleByBulletinBoard:mo("TwoPeopleByBulletinBoard","https://d3ki9tyy5l5ruj.cloudfront.net/obj/eac3bfb932d7d141284b833bf396fc657ef40ac3/two_people_by_bulletin_board.svg"),UnmatchedShapes:mo("UnmatchedShapes","https://d3ki9tyy5l5ruj.cloudfront.net/obj/b6d0557fe8bc3c777673aafa6eaad8c56fd36b65/No-Search-Results_Final@2x.png"),WFHMeow:mo("WFHMeow","https://d3ki9tyy5l5ruj.cloudfront.net/obj/100409568709efa944d2204aa984fed7c83ab44a/WFH-meow.svg")}),wo=(mo("Sample","https://d3ki9tyy5l5ruj.cloudfront.net/obj/1e095023d51775d6aacbd2d3563e5c2f39fe1fca/scene_placeholder.svg"),/\{(\w*?)\}/g),ko=/<(\w+)>(.*?)<\/\1>/
function So(e,t){return e.replace(wo,((e,n)=>t(n)))}function Eo(e,t){const n=[]
let r=0
for(;r<t.length;){const o=e.exec(t.slice(r))
if(e.lastIndex=0,null==o){n.push(t.slice(r))
break}o.index>0&&n.push(t.slice(r,r+o.index)),o.length>1&&n.push({tagName:o[1],contents:o[2]}),r+=o.index+o[0].length}return n}function xo(e){return`{${e}}`}function jo(e,t){const n=`You tried to interpolate the string "${e.slice(50)}" `,r=function(e){const t=[]
return So(e,(e=>(t.push(e),""))),t}(e).filter((e=>void 0===t[e]))
let o
if(1===r.length)o=`- but you didn't provide a value for {${r[0]}}.`
else{const e=r.map(xo).join(", ")
o=`- but you didn't provide values for ${e}.`}return n+o}function To(e,t){const n=t||{},r=So(e,(t=>{if(void 0===n[t])throw new Error(jo(e,n))
return function(e){if("number"!=typeof e)return e
try{return Math.round(e).toLocaleString()}catch(t){return Math.round(e).toFixed()}}(n[t])}))
return r}const Ao=["((http|ftp|https):\\/\\/)|","([0-9a-z_-]+\\.)+",`(${["aero","asia","biz","cat","club","com","coop","edu","gov","info","int","jobs","mil","mobi","museum","name","net","org","onion","pro","tel","travel","ac","ad","ae","af","ag","ai","al","am","an","ao","aq","ar","as","at","au","aw","ax","az","ba","bb","bd","be","bf","bg","bh","bi","bj","bm","bn","bo","br","bs","bt","bv","bw","by","bz","ca","cc","cd","cf","cg","ch","ci","ck","cl","cm","cn","co","cr","cu","cv","cx","cy","cz","cz","de","dj","dk","dm","do","dz","ec","ee","eg","er","es","et","eu","fi","fj","fk","fm","fo","fr","ga","gb","gd","ge","gf","gg","gh","gi","gl","gm","gn","gp","gq","gr","gs","gt","gu","gw","gy","hk","hm","hn","hr","ht","hu","id","ie","il","im","in","io","iq","ir","is","it","je","jm","jo","jp","ke","kg","kh","ki","km","kn","kp","kr","kw","ky","kz","la","lb","lc","li","lk","lr","ls","lt","lu","lv","ly","ma","mc","md","me","mg","mh","mk","ml","mn","mn","mo","mp","mr","ms","mt","mu","mv","mw","mx","my","mz","na","nc","ne","nf","ng","ni","nl","no","np","nr","nu","nz","nom","pa","pe","pf","pg","ph","pk","pl","pm","pn","pr","ps","pt","pw","py","qa","re","ra","rs","ru","rw","sa","sb","sc","sd","se","sg","sh","si","sj","sj","sk","sl","sm","sn","so","sr","st","su","sv","sy","sz","tc","td","tf","tg","th","tj","tk","tl","tm","tn","to","tp","tr","tt","tv","tw","tz","ua","ug","uk","us","uy","uz","va","vc","ve","vg","vi","vn","vu","wf","ws","ye","yt","yu","za","zm","zw","arpa"].join("|")})\\b`].join(""),zo=(new RegExp(Ao,"i"),"(https?://(www\\.)?|www\\.)"),Io="[0-9a-z_-]+(\\.[0-9a-z_-]+)?(\\.[0-9a-z_-]+)?",Po="[0-9a-z_-]+(\\.[0-9a-z_-]+)*",Co=`(${["biz","com","edu","gov","info","net","org","ar","au","be","bo","br","cl","co","de","ec","es","eu","fr","io","jp","ly","mx","pe","ru","uk","ve"].join("|")})`,Oo=`${Io}\\.${Co}(/[^\\s<>]*)?`,No=`${zo}${Io}(/[^\\s<>]*)?`,Do=`${Po}\\.[0-9a-z_-]+(\\:[0-9]+)?(/[^\\s<>]*)?`,Ro=`${zo}${Po}(\\:[0-9]+)?(/[^\\s<>]*)?`,Lo=`${No}|${Oo}`,Mo=`^(${Lo})$`,Fo=(new RegExp(Mo,"i"),`^((${Ro}|${Do})(\\?(&?[^=&]*=[^=&]*)*)?)$`),Wo=(new RegExp(Fo,"i"),`^(${["http://","https://","mailto:"].join("|")})`)
new RegExp(Wo,"i")
function Uo(e){return e.charAt(0).toUpperCase()+e.slice(1)}const Bo="((?:[a-z0-9\\+](?:[a-z0-9-\\+]*[a-z0-9\\+])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9]))"
new RegExp(`^${Bo}$`,"i"),new RegExp(`^([A-Za-z0-9_*][^@<>$#;,\`"{|}()]*)@${Bo}$`,"i")
const qo={abbr:r,bdi:o,bdo:i,cite:a,div:s,em:l,h1:u,h2:c,h3:d,h4:f,h5:p,h6:h,mark:g,p:y,s:m,small:_,span:b,strong:w,sup:k},Ho=t.forwardRef(((e,t)=>{var n
const r=null!==(n=e.element)&&void 0!==n?n:"span",{overflow:o}=e
return qo[r]({className:N(e.className,"Typography",j(e.color)?`Typography--color${Uo(e.color)}`:"",j(o)?`Typography--overflow${Uo(o)}`:"",e.size?`Typography--${e.size}`:"",e.fontWeight?`Typography--fontWeight${Uo(e.fontWeight)}`:"",e.align?`Typography--textAlign${Uo(e.align)}`:""),id:e.id,ref:t,role:e.role,tabIndex:e.isProgrammaticallyFocusable?-1:void 0},e.numWidowsToGroup?((e,t)=>{if("string"!=typeof e||t<2)return e
const n=e.split(" "),r=n.length
if(r<=t)return n.join(" ")
const o=n.splice(r-t,t),i=o.join(" ")
return n.push(i),n.join(" ")})(e.children,e.numWidowsToGroup):e.children)}))
Ho.displayName="Typography"
const Vo=t.createFactory(Ho),$o=t.forwardRef(((e,t)=>{const n=z(e.size,(()=>"m"))
return Vo({align:e.align,children:e.children,className:e.className,color:e.color,size:n,element:e.element,fontWeight:e.fontWeight,id:e.id,numWidowsToGroup:e.numWidowsToGroup,ref:t,role:e.role,overflow:e.overflow})}))
$o.displayName="BodyText"
const Go=t.createFactory($o),Ko=t.forwardRef(((e,t)=>{var n,r,o,i
const{color:a,fontWeight:s}=(e=>{switch(e){case"h1":return{color:"default",fontWeight:"light"}
case"h2":return{color:"default",fontWeight:"normal"}
case"h3":case"h4":case"h5":return{color:"default",fontWeight:"medium"}
case"h6":return{color:"weak",fontWeight:"medium"}}})(e.level)
return Vo({align:e.align,className:e.className,color:null!==(n=e.color)&&void 0!==n?n:a,id:e.id,size:e.level,element:null!==(r=e.as)&&void 0!==r?r:e.level,fontWeight:null!==(o=e.fontWeight)&&void 0!==o?o:s,numWidowsToGroup:null!==(i=e.numWidowsToGroup)&&void 0!==i?i:2,ref:t,role:e.role,overflow:e.overflow,isProgrammaticallyFocusable:e.isProgrammaticallyFocusable},e.children)}))
Ko.displayName="Heading"
const Qo=t.createFactory(Ko)
class Yo extends Z{constructor(){super(...arguments),this._onRetryButtonClick=()=>{this.props.services.desktop.retryLoadUrl()}}render(){const{tx:e}=this.props.services.localization
return s({className:"DesktopLoadFailedPage"},bo.LookingUnderCouch.create({className:"DesktopLoadFailedPage-scene",size:"large"}),Qo({className:"DesktopLoadFailedPage-headline",level:"h2",align:"center",color:"darkGray2"},e("Oops... something is wrong")),Go({className:"DesktopLoadFailedPage-messageBody",size:"l",color:"darkGray2",align:"center"},e("You're not currently connected to the internet. Please check your connection and [...]")),F({className:"DesktopLoadFailedPage-retryButton",label:e("Refresh [verb]"),size:"xlarge",onClick:this._onRetryButtonClick,services:this.props.services}))}}Yo.displayName="DesktopLoadFailedPage"
const Jo=t.createFactory(Yo),Zo={en:{"1qeam7p":[0,"A new version of Asana is available!"],"3zqyfo":[0,"About Asana"],"1hzbqzy":[0,"Actual Size"],bclld3:[0,"Add to Dictionary"],"3z85jc":[0,"Asana Help"],"1dp57t1":[0,"Asana"],"84cm08":[0,"Asana help"],qzzbrf:[0,"Back"],"10tyjzi":[0,"Back"],"1i6z886":[0,"Cancel"],"1yic3jq":[0,"Close"],ivekyp:[0,"Continue"],"1370y1z":[0,"Copy Image"],"1lyzxli":[0,"Copy Link Address"],lhr64z:[0,"Copy Page Link"],"1c9tp8l":[0,"Copy Page Link Address"],"14w4605":[0,"Copy"],"1vyql7m":[0,"Cut"],"1hrbwwp":[0,"Delete"],"14vwda4":[0,"Edit"],"3nsben":[0,"File"],"14vjxhh":[0,"Find"],tn39xl:[0,"Force Reload"],bahha6:[0,"Forward"],"1m8w1yx":[0,"Hide Asana"],bt70du:[0,"Hide Others"],"1sxt5qz":[0,"History"],vfc30l:[0,"Install and Relaunch"],mux9vm:[0,"Later"],"11ewrcl":[0,"New Window"],"2614jd":[0,"Oops... something is wrong"],"1m8nqgd":[0,"Open Asana"],fgsl0m:[0,"Open in New Window"],"1yi9eyb":[0,"Paste"],aeabix:[0,"Paste and Match Style"],"12l6r2p":[0,"Preferences"],"1m8iy2o":[0,"Quit Asana"],"14vwcux":[0,"Quit"],qatuok:[0,"Ready to install"],"14vtrek":[0,"Redo"],"9wot5p":[0,"Refresh"],"1d3hnqp":[0,"Reload"],x2febb:[0,"Restart"],"15gzctt":[0,"Save Image As…"],"187zo18":[0,"Select All"],v2t2c7:[0,"Services"],ee5nlz:[0,"Show All"],inuwxd:[0,"Something is wrong with this link. Please check it and try again."],"10wna95":[0,"Start Speaking"],"1pdut2p":[0,"Stop Speaking"],"1koh9u2":[0,"Toggle Developer Tools"],"1jlfivc":[0,"Toggle Full Screen"],"14vtr68":[0,"Undo"],"14vzrjh":[0,"View"],"1kvc5iz":[0,"Would you like to update your app now?"],"1k0hvxf":[0,"You may have unsaved changes. Do you still want to continue?"],"6he93v":[0,"You're not currently connected to the internet. Please check your connection and try again!"],"1ua7vw5":[0,"Zoom In"],"1vlbirg":[0,"Zoom Out"]},fr:{"1qeam7p":[0,"Une nouvelle version d’Asana est disponible !"],"3zqyfo":[0,"À propos d’Asana"],"1hzbqzy":[0,"Taille réelle"],bclld3:[0,"Ajouter au dictionnaire"],"3z85jc":[0,"Aide Asana"],"1dp57t1":[0,"Asana"],"84cm08":[0,"Aide Asana"],qzzbrf:[0,"Retour"],"10tyjzi":[0,"Précédent"],"1i6z886":[0,"Annuler"],"1yic3jq":[0,"Fermer"],ivekyp:[0,"Continuer"],"1370y1z":[0,"Copier l’image"],"1lyzxli":[0,"Copier le lien de l’adresse"],lhr64z:[0,"Copier le lien de la page"],"1c9tp8l":[0,"Copier le lien de la page"],"14w4605":[0,"Copier"],"1vyql7m":[0,"Couper"],"1hrbwwp":[0,"Supprimer"],"14vwda4":[0,"Modifier"],"3nsben":[0,"Fichier"],"14vjxhh":[0,"Trouver"],tn39xl:[0,"Forcer le rechargement"],bahha6:[0,"Suivant"],"1m8w1yx":[0,"Masquer Asana"],bt70du:[0,"Masquer les autres"],"1sxt5qz":[0,"Historique"],vfc30l:[0,"Installer et redémarrer"],mux9vm:[0,"Plus tard"],"11ewrcl":[0,"Nouvelle fenêtre"],"2614jd":[0,"Oups... une erreur s’est produite"],"1m8nqgd":[0,"Ouvrir Asana"],fgsl0m:[0,"Ouvrir dans une nouvelle fenêtre"],"1yi9eyb":[0,"Coller"],aeabix:[0,"Coller et appliquer le même style"],"12l6r2p":[0,"Préférences"],"1m8iy2o":[0,"Quitter Asana"],"14vwcux":[0,"Fermer"],qatuok:[0,"Prêt à l’installation"],"14vtrek":[0,"Refaire"],"9wot5p":[0,"Actualiser"],"1d3hnqp":[0,"Recharger"],x2febb:[0,"Redémarrer"],"15gzctt":[0,"Enregistrer l’image sous…"],"187zo18":[0,"Tout sélectionner"],v2t2c7:[0,"Services"],ee5nlz:[0,"Tout afficher"],inuwxd:[0,"Une erreur s’est produite avec ce lien. Veuillez le vérifier et réessayer."],"10wna95":[0,"Commencer à parler"],"1pdut2p":[0,"Arrêter de parler"],"1koh9u2":[0,"Activer les outils de développement"],"1jlfivc":[0,"Activer le mode plein écran"],"14vtr68":[0,"Annuler"],"14vzrjh":[0,"Afficher"],"1kvc5iz":[0,"Voulez-vous mettre à jour votre application maintenant ?"],"1k0hvxf":[0,"Certaines informations n’ont pas été sauvegardées. Souhaitez-vous continuer ?"],"6he93v":[0,"Pas de connexion à internet actuellement. Veuillez vérifier la connexion et réessayer !"],"1ua7vw5":[0,"Zoom +"],"1vlbirg":[0,"Zoom -"]},de:{"1qeam7p":[0,"Eine neue Version von Asana ist verfügbar!"],"3zqyfo":[0,"Über Asana"],"1hzbqzy":[0,"Tatsächliche Größe"],bclld3:[0,"Zum Wörterbruch hinzufügen"],"3z85jc":[0,"Asana-Hilfe"],"1dp57t1":[0,"Asana"],"84cm08":[0,"Asana-Hilfe"],qzzbrf:[0,"Zurück"],"10tyjzi":[0,"Zurück"],"1i6z886":[0,"Abbrechen"],"1yic3jq":[0,"Schließen"],ivekyp:[0,"Weiter"],"1370y1z":[0,"Bild kopieren"],"1lyzxli":[0,"Link kopieren"],lhr64z:[0,"Seitenlink kopieren"],"1c9tp8l":[0,"Link zur Seite kopieren"],"14w4605":[0,"Kopieren"],"1vyql7m":[0,"Ausschneiden"],"1hrbwwp":[0,"Löschen"],"14vwda4":[0,"Bearbeiten"],"3nsben":[0,"Datei"],"14vjxhh":[0,"Suchen"],tn39xl:[0,"Neu laden erzwingen"],bahha6:[0,"Vor"],"1m8w1yx":[0,"Asana ausblenden"],bt70du:[0,"Andere ausblenden"],"1sxt5qz":[0,"Verlauf"],vfc30l:[0,"Installieren und neu starten"],mux9vm:[0,"Später"],"11ewrcl":[0,"Neues Fenster"],"2614jd":[0,"Ups! Etwas scheint nicht ganz zu funktionieren"],"1m8nqgd":[0,"Asana öffnen"],fgsl0m:[0,"In neuem Fenster öffnen"],"1yi9eyb":[0,"Einfügen"],aeabix:[0,"Einfügen und Stil übernehmen"],"12l6r2p":[0,"Präferenzen"],"1m8iy2o":[0,"Asana schließen"],"14vwcux":[0,"Schließen"],qatuok:[0,"Bereit zur Installation"],"14vtrek":[0,"Wiederherstellen"],"9wot5p":[0,"Aktualisieren"],"1d3hnqp":[0,"Neu laden"],x2febb:[0,"Neu starten"],"15gzctt":[0,"Bild speichern unter..."],"187zo18":[0,"Alle auswählen"],v2t2c7:[0,"Dienstleistungen"],ee5nlz:[0,"Alle anzeigen"],inuwxd:[0,"Mit diesem Link stimmt etwas nicht. Bitte überprüfen Sie ihn und versuchen Sie es erneut."],"10wna95":[0,"Mikrofon aktivieren"],"1pdut2p":[0,"Stummschalten"],"1koh9u2":[0,"Entwicklertools aktivieren/deaktivieren"],"1jlfivc":[0,"Vollbildmodus aktivieren/deaktivieren"],"14vtr68":[0,"Rückgängig machen"],"14vzrjh":[0,"Ansehen"],"1kvc5iz":[0,"Möchten Sie Ihre App jetzt aktualisieren?"],"1k0hvxf":[0,"Sie haben möglicherweise ungespeicherte Änderungen vorgenommen. Möchten Sie trotzdem fortfahren?"],"6he93v":[0,"Sie sind derzeit nicht mit dem Internet verbunden. Bitte überprüfen Sie Ihre Verbindung und versuchen Sie es erneut."],"1ua7vw5":[0,"Vergrößern"],"1vlbirg":[0,"Verkleinern"]},es:{"1qeam7p":[0,"¡Hay una versión nueva de Asana!"],"3zqyfo":[0,"Acerca de Asana"],"1hzbqzy":[0,"Tamaño real"],bclld3:[0,"Agregar al diccionario"],"3z85jc":[0,"Ayuda de Asana"],"1dp57t1":[0,"Asana"],"84cm08":[0,"Ayuda de Asana"],qzzbrf:[0,"Atrás"],"10tyjzi":[0,"Volver"],"1i6z886":[0,"Cancelar"],"1yic3jq":[0,"Cerrar"],ivekyp:[0,"Continuar"],"1370y1z":[0,"Copiar imagen"],"1lyzxli":[0,"Copiar el enlace"],lhr64z:[0,"Copiar enlace de la página"],"1c9tp8l":[0,"Copiar el enlace de la página"],"14w4605":[0,"Copiar"],"1vyql7m":[0,"Cortar"],"1hrbwwp":[0,"Eliminar"],"14vwda4":[0,"Editar"],"3nsben":[0,"Archivo"],"14vjxhh":[0,"Buscar"],tn39xl:[0,"Forzar la recarga"],bahha6:[0,"Avanzar"],"1m8w1yx":[0,"Ocultar Asana"],bt70du:[0,"Ocultar otros"],"1sxt5qz":[0,"Historial"],vfc30l:[0,"Instalar y relanzar"],mux9vm:[0,"Más tarde"],"11ewrcl":[0,"Nueva ventana"],"2614jd":[0,"¡Oh, no! Algo salió mal."],"1m8nqgd":[0,"Abrir Asana"],fgsl0m:[0,"Abrir en una ventana nueva"],"1yi9eyb":[0,"Pegar"],aeabix:[0,"Pegar y hacer coincidir el estilo"],"12l6r2p":[0,"Preferencias"],"1m8iy2o":[0,"Salir de Asana"],"14vwcux":[0,"Salir"],qatuok:[0,"Todo listo para instalar"],"14vtrek":[0,"Rehacer"],"9wot5p":[0,"Actualizar"],"1d3hnqp":[0,"Volver a cargar"],x2febb:[0,"Reiniciar"],"15gzctt":[0,"Guardar imagen como..."],"187zo18":[0,"Seleccionar todo"],v2t2c7:[0,"Servicios"],ee5nlz:[0,"Mostrar todo"],inuwxd:[0,"Hay un problema con este enlace. Verifícalo y vuelve a intentarlo."],"10wna95":[0,"Empezar a hablar"],"1pdut2p":[0,"Dejar de hablar"],"1koh9u2":[0,"Activar/desactivar las herramientas para desarrolladores"],"1jlfivc":[0,"Activar/desactivar la pantalla completa"],"14vtr68":[0,"Deshacer"],"14vzrjh":[0,"Ver"],"1kvc5iz":[0,"¿Quieres actualizar la aplicación ahora?"],"1k0hvxf":[0,"Puede haber cambios que no se hayan guardado. ¿Deseas continuar de todos modos?"],"6he93v":[0,"En este momento no estás conectado a internet. Verifica tu conexión y vuelve a intentarlo."],"1ua7vw5":[0,"Acercar"],"1vlbirg":[0,"Alejar"]},ja:{"1qeam7p":[0,"Asana の新しいバージョンがあります！"],"3zqyfo":[0,"Asana について"],"1hzbqzy":[0,"実際のサイズ"],bclld3:[0,"辞書に追加"],"3z85jc":[0,"Asana ヘルプ"],"1dp57t1":[0,"Asana"],"84cm08":[0,"Asana ヘルプ"],qzzbrf:[0,"戻る"],"10tyjzi":[0,"後"],"1i6z886":[0,"キャンセル"],"1yic3jq":[0,"閉じる"],ivekyp:[0,"続行"],"1370y1z":[0,"画像をコピー"],"1lyzxli":[0,"リンクアドレスをコピー"],lhr64z:[0,"ページのリンクをコピー"],"1c9tp8l":[0,"ページのリンクアドレスをコピー"],"14w4605":[0,"コピー"],"1vyql7m":[0,"切り取り"],"1hrbwwp":[0,"削除"],"14vwda4":[0,"編集"],"3nsben":[0,"ファイル"],"14vjxhh":[0,"探す"],tn39xl:[0,"強制的にリロード"],bahha6:[0,"前"],"1m8w1yx":[0,"Asana を非表示にする"],bt70du:[0,"その他を非表示にする"],"1sxt5qz":[0,"履歴"],vfc30l:[0,"インストールして再起動"],mux9vm:[0,"後日"],"11ewrcl":[0,"新しいウィンドウ"],"2614jd":[0,"問題が発生しました"],"1m8nqgd":[0,"Asana を開く"],fgsl0m:[0,"新しいウインドウで開く"],"1yi9eyb":[0,"ペースト"],aeabix:[0,"ペーストしてスタイルを合わせる"],"12l6r2p":[0,"環境設定"],"1m8iy2o":[0,"Asana を終了する"],"14vwcux":[0,"終了"],qatuok:[0,"インストール準備完了"],"14vtrek":[0,"やり直す"],"9wot5p":[0,"更新"],"1d3hnqp":[0,"リロード"],x2febb:[0,"再起動"],"15gzctt":[0,"名前を付けて画像を保存…"],"187zo18":[0,"すべて選択"],v2t2c7:[0,"サービス"],ee5nlz:[0,"すべて表示"],inuwxd:[0,"リンクに問題があります。ご確認の上もう一度お試しください。"],"10wna95":[0,"話し始める"],"1pdut2p":[0,"話すのをやめる"],"1koh9u2":[0,"デベロッパーツールを切り替える"],"1jlfivc":[0,"フルスクリーンに切り替え"],"14vtr68":[0,"元に戻す"],"14vzrjh":[0,"表示"],"1kvc5iz":[0,"今すぐアプリをアップデートしますか？"],"1k0hvxf":[0,"変更が保存されていない可能性があります。続行しますか？"],"6he93v":[0,"現在インターネットに接続していません。接続を確認してからもう一度お試しください！"],"1ua7vw5":[0,"ズームイン"],"1vlbirg":[0,"ズームアウト"]},pt:{"1qeam7p":[0,"Há uma nova versão da Asana disponível!"],"3zqyfo":[0,"Sobre Asana"],"1hzbqzy":[0,"Tamanho real"],bclld3:[0,"Adicionar ao dicionário"],"3z85jc":[0,"Ajuda da Asana"],"1dp57t1":[0,"Asana"],"84cm08":[0,"Ajuda da Asana"],qzzbrf:[0,"Voltar"],"10tyjzi":[0,"Voltar"],"1i6z886":[0,"Cancelar"],"1yic3jq":[0,"Fechar"],ivekyp:[0,"Avançar"],"1370y1z":[0,"Copiar a imagem"],"1lyzxli":[0,"Copiar o endereço do link"],lhr64z:[0,"Copiar o link da página"],"1c9tp8l":[0,"Copiar o endereço do link da página"],"14w4605":[0,"copiar"],"1vyql7m":[0,"Cortar"],"1hrbwwp":[0,"Excluir"],"14vwda4":[0,"Editar"],"3nsben":[0,"Arquivo"],"14vjxhh":[0,"Encontrar"],tn39xl:[0,"Forçar o recarregamento"],bahha6:[0,"Avançar"],"1m8w1yx":[0,"Ocultar a Asana"],bt70du:[0,"Ocultar os demais"],"1sxt5qz":[0,"Histórico"],vfc30l:[0,"Instalar e recarregar"],mux9vm:[0,"Mais tarde"],"11ewrcl":[0,"Nova janela"],"2614jd":[0,"Ops! Algo deu errado."],"1m8nqgd":[0,"Abrir a Asana"],fgsl0m:[0,"Abrir em uma nova janela"],"1yi9eyb":[0,"Colar"],aeabix:[0,"Colar e igualar ao estilo"],"12l6r2p":[0,"Preferências"],"1m8iy2o":[0,"Sair da Asana"],"14vwcux":[0,"Sair"],qatuok:[0,"Pronto para instalar"],"14vtrek":[0,"Refazer"],"9wot5p":[0,"Atualizar"],"1d3hnqp":[0,"Recarregar"],x2febb:[0,"Recarregar"],"15gzctt":[0,"Salvar imagem como..."],"187zo18":[0,"Selecionar tudo"],v2t2c7:[0,"Serviços"],ee5nlz:[0,"Mostrar todas"],inuwxd:[0,"Há algo errado com este link. Verifique-o e tente novamente."],"10wna95":[0,"Começar a falar"],"1pdut2p":[0,"Parar de falar"],"1koh9u2":[0,"Alternar ferramentas do desenvolvedor"],"1jlfivc":[0,"Ativar/desativar a tela cheia"],"14vtr68":[0,"Desfazer"],"14vzrjh":[0,"Ver"],"1kvc5iz":[0,"Quer atualizar o aplicativo agora?"],"1k0hvxf":[0,"Talvez haja alterações não salvas. Quer continuar mesmo assim?"],"6he93v":[0,"Você está sem Internet. Por favor, verifique a sua conexão e tente novamente."],"1ua7vw5":[0,"Aumentar o zoom"],"1vlbirg":[0,"Diminuir o zoom"]},zh:{"1qeam7p":[0,"有可用的 Asana 新版本！"],"3zqyfo":[0,"關於 Asana"],"1hzbqzy":[0,"實際尺寸"],bclld3:[0,"新增至字典"],"3z85jc":[0,"Asana 說明"],"1dp57t1":[0,"Asana"],"84cm08":[0,"Asana 說明"],qzzbrf:[0,"返回"],"10tyjzi":[0,"返回"],"1i6z886":[0,"取消"],"1yic3jq":[0,"關閉"],ivekyp:[0,"繼續"],"1370y1z":[0,"複製影像"],"1lyzxli":[0,"複製連結位址"],lhr64z:[0,"複製頁面連結"],"1c9tp8l":[0,"複製頁面連結位址"],"14w4605":[0,"複製"],"1vyql7m":[0,"剪下"],"1hrbwwp":[0,"刪除"],"14vwda4":[0,"編輯"],"3nsben":[0,"檔案"],"14vjxhh":[0,"尋找"],tn39xl:[0,"強制重新載入"],bahha6:[0,"往前"],"1m8w1yx":[0,"隱藏 Asana"],bt70du:[0,"隱藏其他"],"1sxt5qz":[0,"歷程記錄"],vfc30l:[0,"安裝並重新啟動"],mux9vm:[0,"稍後"],"11ewrcl":[0,"新視窗"],"2614jd":[0,"糟糕...有地方出錯了。"],"1m8nqgd":[0,"開啟 Asana"],fgsl0m:[0,"在新視窗開啟"],"1yi9eyb":[0,"貼上"],aeabix:[0,"貼上並符合風格"],"12l6r2p":[0,"偏好設定"],"1m8iy2o":[0,"退出 Asana"],"14vwcux":[0,"退出"],qatuok:[0,"已就緒可供安裝"],"14vtrek":[0,"取消復原"],"9wot5p":[0,"重新整理"],"1d3hnqp":[0,"重新載入"],x2febb:[0,"重新啟動"],"15gzctt":[0,"將影像儲存為..."],"187zo18":[0,"選取全部"],v2t2c7:[0,"服務"],ee5nlz:[0,"顯示全部"],inuwxd:[0,"此連結有些問題。請檢查一下然後再試一次。"],"10wna95":[0,"開始說話"],"1pdut2p":[0,"停止說話"],"1koh9u2":[0,"切換開發人員工具"],"1jlfivc":[0,"切換成全螢幕"],"14vtr68":[0,"復原"],"14vzrjh":[0,"檢視"],"1kvc5iz":[0,"您要立即更新應用程式嗎？"],"1k0hvxf":[0,"您可能有變更尚未儲存。您還要繼續嗎？"],"6he93v":[0,"您目前未連線至網際網路。請檢查您的網路連線，然後再試一次！"],"1ua7vw5":[0,"放大"],"1vlbirg":[0,"縮小"]},pl:{"1qeam7p":[0,"Dostępna jest nowa wersja Asany!"],"3zqyfo":[0,"O Asanie"],"1hzbqzy":[0,"Rzeczywisty rozmiar"],bclld3:[0,"Dodaj do słownika"],"3z85jc":[0,"Pomoc Asany"],"1dp57t1":[0,"Asana"],"84cm08":[0,"Pomoc Asana"],qzzbrf:[0,"Wróć"],"10tyjzi":[0,"Wróć"],"1i6z886":[0,"Anuluj"],"1yic3jq":[0,"Zamknij"],ivekyp:[0,"Dalej"],"1370y1z":[0,"Kopiuj obraz"],"1lyzxli":[0,"Kopiuj adres linku"],lhr64z:[0,"Kopiuj link do strony"],"1c9tp8l":[0,"Kopiuj adres linku do strony"],"14w4605":[0,"Kopiuj"],"1vyql7m":[0,"Wytnij"],"1hrbwwp":[0,"Usuń"],"14vwda4":[0,"Edytuj"],"3nsben":[0,"Plik"],"14vjxhh":[0,"Znajdź"],tn39xl:[0,"Wymuś ponowne ładowanie"],bahha6:[0,"Dalej"],"1m8w1yx":[0,"Ukryj Asanę"],bt70du:[0,"Ukryj inne"],"1sxt5qz":[0,"Historia"],vfc30l:[0,"Zainstaluj i uruchom ponownie"],mux9vm:[0,"Później"],"11ewrcl":[0,"Nowe okno"],"2614jd":[0,"Ups... Coś poszło nie tak."],"1m8nqgd":[0,"Otwórz Asanę"],fgsl0m:[0,"Otwórz w nowym oknie"],"1yi9eyb":[0,"Wklej"],aeabix:[0,"Wklej i dopasuj styl"],"12l6r2p":[0,"Preferencje"],"1m8iy2o":[0,"Zamknij Asanę"],"14vwcux":[0,"Zamknij"],qatuok:[0,"Gotowa do instalacji"],"14vtrek":[0,"Ponów"],"9wot5p":[0,"Odśwież"],"1d3hnqp":[0,"Załaduj ponownie"],x2febb:[0,"Uruchom ponownie"],"15gzctt":[0,"Zapisz obraz jako..."],"187zo18":[0,"Zaznacz wszystko"],v2t2c7:[0,"Usługi"],ee5nlz:[0,"Pokaż wszystko"],inuwxd:[0,"Wystąpił problem z tym linkiem. Sprawdź go i spróbuj ponownie."],"10wna95":[0,"Rozpocznij mówienie"],"1pdut2p":[0,"Zakończ mówienie"],"1koh9u2":[0,"Włącz/wyłącz narzędzia dla deweloperów"],"1jlfivc":[0,"Włącz/wyłącz pełny ekran"],"14vtr68":[0,"Cofnij"],"14vzrjh":[0,"Wyświetl"],"1kvc5iz":[0,"Czy chcesz zaktualizować swoją aplikację teraz?"],"1k0hvxf":[0,"Masz niezapisane zmiany. Czy na pewno chcesz kontynuować?"],"6he93v":[0,"Aktualnie nie masz połączenia z Internetem. Sprawdź połączenie i spróbuj ponownie!"],"1ua7vw5":[0,"Powiększ"],"1vlbirg":[0,"Pomniejsz"]},it:{"1qeam7p":[0,"È disponibile una nuova versione di Asana!"],"3zqyfo":[0,"A proposito di Asana"],"1hzbqzy":[0,"Dimensioni reali"],bclld3:[0,"Aggiungi al dizionario"],"3z85jc":[0,"Guida di Asana"],"1dp57t1":[0,"Asana"],"84cm08":[0,"Guida di Asana"],qzzbrf:[0,"Indietro"],"10tyjzi":[0,"Indietro"],"1i6z886":[0,"Annulla"],"1yic3jq":[0,"Chiudi"],ivekyp:[0,"Continua"],"1370y1z":[0,"Copia immagine"],"1lyzxli":[0,"Copia indirizzo del link"],lhr64z:[0,"Copia link della pagina"],"1c9tp8l":[0,"Copia indirizzo del link della pagina"],"14w4605":[0,"Copia"],"1vyql7m":[0,"Taglia"],"1hrbwwp":[0,"Elimina"],"14vwda4":[0,"Modifica"],"3nsben":[0,"File"],"14vjxhh":[0,"Cerca"],tn39xl:[0,"Forzare il caricamento"],bahha6:[0,"Avanti"],"1m8w1yx":[0,"Nascondi Asana"],bt70du:[0,"Nascondi altri"],"1sxt5qz":[0,"Cronologia"],vfc30l:[0,"Installa e riavvia"],mux9vm:[0,"Più tardi"],"11ewrcl":[0,"Nuova finestra"],"2614jd":[0,"Ops, si è verificato un errore"],"1m8nqgd":[0,"Apri Asana"],fgsl0m:[0,"Apri in una nuova finestra"],"1yi9eyb":[0,"Incolla"],aeabix:[0,"Incolla e unisci formattazione"],"12l6r2p":[0,"Preferenze"],"1m8iy2o":[0,"Esci da Asana"],"14vwcux":[0,"Esci"],qatuok:[0,"Pronto per l'installazione"],"14vtrek":[0,"Ripristina"],"9wot5p":[0,"Ricarica"],"1d3hnqp":[0,"Ricarica"],x2febb:[0,"Riavvia"],"15gzctt":[0,"Salva immagine come..."],"187zo18":[0,"Seleziona tutto"],v2t2c7:[0,"Servizi"],ee5nlz:[0,"Mostra tutto"],inuwxd:[0,"Si è verificato un errore con questo link. Controllalo e riprova."],"10wna95":[0,"Inizia a parlare"],"1pdut2p":[0,"Muto"],"1koh9u2":[0,"Attiva/disattiva strumenti per gli sviluppatori"],"1jlfivc":[0,"Attiva/disattiva schermo intero"],"14vtr68":[0,"Annulla"],"14vzrjh":[0,"Vista"],"1kvc5iz":[0,"Vuoi aggiornare l'app ora?"],"1k0hvxf":[0,"Potrebbero esserci modifiche non salvate. Vuoi ancora continuare?"],"6he93v":[0,"Al momento non sei collegato a internet. Controlla la connessione e riprova."],"1ua7vw5":[0,"Zoom avanti"],"1vlbirg":[0,"Zoom indietro"]},ru:{"1qeam7p":[0,"Доступна новая версия Asana!"],"3zqyfo":[0,"О системе Asana"],"1hzbqzy":[0,"Фактический размер"],bclld3:[0,"Добавить в словарь"],"3z85jc":[0,"Справка Asana"],"1dp57t1":[0,"Asana"],"84cm08":[0,"Справка Asana"],qzzbrf:[0,"Назад"],"10tyjzi":[0,"Назад"],"1i6z886":[0,"Отмена"],"1yic3jq":[0,"Закрыть"],ivekyp:[0,"Продолжить"],"1370y1z":[0,"Копировать изображение"],"1lyzxli":[0,"Копировать адрес ссылки"],lhr64z:[0,"Копировать ссылку на страницу"],"1c9tp8l":[0,"Копировать ссылку на страницу"],"14w4605":[0,"Копировать"],"1vyql7m":[0,"Вырезать"],"1hrbwwp":[0,"Удалить"],"14vwda4":[0,"Изменить"],"3nsben":[0,"Файл"],"14vjxhh":[0,"Найти"],tn39xl:[0,"Принудительная перезагрузка"],bahha6:[0,"Вперёд"],"1m8w1yx":[0,"Скрыть Asana"],bt70du:[0,"Скрыть другие"],"1sxt5qz":[0,"История"],vfc30l:[0,"Установить и перезапустить"],mux9vm:[0,"Позднее"],"11ewrcl":[0,"Новое окно"],"2614jd":[0,"Ой... что-то пошло не так"],"1m8nqgd":[0,"Открыть Asana"],fgsl0m:[0,"Открыть в новом окне"],"1yi9eyb":[0,"Вставить"],aeabix:[0,"Вставить с сохранением стиля"],"12l6r2p":[0,"Предпочтения"],"1m8iy2o":[0,"Выйти из Asana"],"14vwcux":[0,"Выйти"],qatuok:[0,"Готово к установке"],"14vtrek":[0,"Вернуть"],"9wot5p":[0,"Обновить"],"1d3hnqp":[0,"Перезагрузить"],x2febb:[0,"Перезапуск"],"15gzctt":[0,"Сохранить изображение как..."],"187zo18":[0,"Выбрать все"],v2t2c7:[0,"Службы"],ee5nlz:[0,"Показать всё"],inuwxd:[0,"С этой ссылкой что-то не так. Проверьте её и попробуйте ещё раз."],"10wna95":[0,"Начать говорить"],"1pdut2p":[0,"Перестать говорить"],"1koh9u2":[0,"Переключение инструментов разработчика"],"1jlfivc":[0,"На весь экран и обратно"],"14vtr68":[0,"Отменить"],"14vzrjh":[0,"Просмотр"],"1kvc5iz":[0,"Обновить приложение сейчас?"],"1k0hvxf":[0,"У вас есть несохранённые изменения. Продолжить?"],"6he93v":[0,"Сейчас у вас отсутствует подключение к интернету. Проверьте соединение и попробуйте ещё раз!"],"1ua7vw5":[0,"Увеличить"],"1vlbirg":[0,"Уменьшить"]},ko:{"1qeam7p":[0,"Asana의 새로운 버전을 사용할 수 있습니다!"],"3zqyfo":[0,"Asana 소개"],"1hzbqzy":[0,"실제 크기"],bclld3:[0,"사전에 추가"],"3z85jc":[0,"Asana 도움말"],"1dp57t1":[0,"Asana"],"84cm08":[0,"Asana 도움말"],qzzbrf:[0,"뒤로"],"10tyjzi":[0,"뒤로"],"1i6z886":[0,"취소"],"1yic3jq":[0,"닫기"],ivekyp:[0,"계속"],"1370y1z":[0,"이미지 복사"],"1lyzxli":[0,"링크 주소 복사"],lhr64z:[0,"페이지 링크 복사"],"1c9tp8l":[0,"페이지 링크 주소 복사"],"14w4605":[0,"복사"],"1vyql7m":[0,"잘라내기"],"1hrbwwp":[0,"삭제"],"14vwda4":[0,"편집"],"3nsben":[0,"파일"],"14vjxhh":[0,"찾기"],tn39xl:[0,"강제 새로고침"],bahha6:[0,"앞으로"],"1m8w1yx":[0,"Asana 숨기기"],bt70du:[0,"기타 숨기기"],"1sxt5qz":[0,"기록"],vfc30l:[0,"설치 및 다시 시작"],mux9vm:[0,"나중에"],"11ewrcl":[0,"새 창"],"2614jd":[0,"오류가 발생했습니다"],"1m8nqgd":[0,"Asana 열기"],fgsl0m:[0,"새 창에서 열기"],"1yi9eyb":[0,"붙여넣기"],aeabix:[0,"스타일 붙여넣기 및 일치"],"12l6r2p":[0,"기본 설정"],"1m8iy2o":[0,"Asana 종료"],"14vwcux":[0,"종료"],qatuok:[0,"설치 준비 완료"],"14vtrek":[0,"다시 실행"],"9wot5p":[0,"새로 고침"],"1d3hnqp":[0,"새로고침"],x2febb:[0,"다시 시작"],"15gzctt":[0,"다른 이름으로 이미지 저장..."],"187zo18":[0,"모두 선택"],v2t2c7:[0,"서비스"],ee5nlz:[0,"모두 표시"],inuwxd:[0,"이 링크에 문제가 있습니다. 확인 후 다시 시도해 주세요."],"10wna95":[0,"말하기 시작"],"1pdut2p":[0,"말하기 중지"],"1koh9u2":[0,"개발자 도구 전환"],"1jlfivc":[0,"전체 화면 전환"],"14vtr68":[0,"실행 취소"],"14vzrjh":[0,"보기"],"1kvc5iz":[0,"지금 앱을 업데이트할까요?"],"1k0hvxf":[0,"변경 사항을 저장하지 않았을 수 있습니다. 계속할까요?"],"6he93v":[0,"현재 인터넷에 연결되어 있지 않습니다. 연결 상태를 확인하고 다시 시도해 주세요!"],"1ua7vw5":[0,"확대"],"1vlbirg":[0,"축소"]},sv:{"1qeam7p":[0,"Nu finns en ny version av Asana!"],"3zqyfo":[0,"Om Asana"],"1hzbqzy":[0,"Faktisk storlek"],bclld3:[0,"Lägg till i ordbok"],"3z85jc":[0,"Asana hjälp"],"1dp57t1":[0,"Asana"],"84cm08":[0,"Asana-hjälp"],qzzbrf:[0,"Tillbaka"],"10tyjzi":[0,"Tillbaka"],"1i6z886":[0,"Avbryt"],"1yic3jq":[0,"Stäng"],ivekyp:[0,"Fortsätt"],"1370y1z":[0,"Kopiera bild"],"1lyzxli":[0,"Kopiera länkadress"],lhr64z:[0,"Kopiera sidlänk"],"1c9tp8l":[0,"Kopiera sidans länkadress"],"14w4605":[0,"Kopiera"],"1vyql7m":[0,"Klipp"],"1hrbwwp":[0,"Ta bort"],"14vwda4":[0,"Redigera"],"3nsben":[0,"Fil"],"14vjxhh":[0,"Hitta"],tn39xl:[0,"Tvinga omladdning"],bahha6:[0,"Framåt"],"1m8w1yx":[0,"Dölj Asana"],bt70du:[0,"Dölj andra"],"1sxt5qz":[0,"Historik"],vfc30l:[0,"Installera och starta om"],mux9vm:[0,"Senare"],"11ewrcl":[0,"Nytt fönster"],"2614jd":[0,"Hoppsan ... något gick fel"],"1m8nqgd":[0,"Öppna Asana"],fgsl0m:[0,"Öppna i nytt fönster"],"1yi9eyb":[0,"Klistra in"],aeabix:[0,"Klistra in och matcha stilen"],"12l6r2p":[0,"Inställningar"],"1m8iy2o":[0,"Avsluta Asana"],"14vwcux":[0,"Avsluta"],qatuok:[0,"Redo för installation"],"14vtrek":[0,"Gör om"],"9wot5p":[0,"Uppdatera"],"1d3hnqp":[0,"Hämta igen"],x2febb:[0,"Starta om"],"15gzctt":[0,"Spara bild som ..."],"187zo18":[0,"Markera alla"],v2t2c7:[0,"Tjänster"],ee5nlz:[0,"Visa alla"],inuwxd:[0,"Det är något fel på den här länken. Kontrollera den och försök igen."],"10wna95":[0,"Börja prata"],"1pdut2p":[0,"Sluta prata"],"1koh9u2":[0,"Växla utvecklarverktyg"],"1jlfivc":[0,"Växla helskärm"],"14vtr68":[0,"Ångra"],"14vzrjh":[0,"Vy"],"1kvc5iz":[0,"Vill du uppdatera din app nu?"],"1k0hvxf":[0,"Du kan ha osparade ändringar. Vill du fortfarande fortsätta?"],"6he93v":[0,"Du är för närvarande inte ansluten till internet. Kontrollera din anslutning och försök igen!"],"1ua7vw5":[0,"Zooma in"],"1vlbirg":[0,"Zooma ut"]},nl:{"1qeam7p":[0,"Er is een nieuwe versie van Asana beschikbaar!"],"3zqyfo":[0,"Over Asana"],"1hzbqzy":[0,"Werkelijke grootte"],bclld3:[0,"Toevoegen aan woordenboek"],"3z85jc":[0,"Asana Help"],"1dp57t1":[0,"Asana"],"84cm08":[0,"Asana-help"],qzzbrf:[0,"Terug"],"10tyjzi":[0,"Terug"],"1i6z886":[0,"Annuleren"],"1yic3jq":[0,"Sluiten"],ivekyp:[0,"Doorgaan"],"1370y1z":[0,"Afbeelding kopiëren"],"1lyzxli":[0,"Linkadres kopiëren"],lhr64z:[0,"Pagina-link kopiëren"],"1c9tp8l":[0,"Linkadres pagina kopiëren"],"14w4605":[0,"Kopiëren"],"1vyql7m":[0,"Knippen"],"1hrbwwp":[0,"Verwijderen"],"14vwda4":[0,"Bewerken"],"3nsben":[0,"Bestand"],"14vjxhh":[0,"Zoeken"],tn39xl:[0,"Reload forceren"],bahha6:[0,"Verder"],"1m8w1yx":[0,"Asana verbergen"],bt70du:[0,"Anderen verbergen"],"1sxt5qz":[0,"Geschiedenis"],vfc30l:[0,"Installeren en opnieuw opstarten"],mux9vm:[0,"Later"],"11ewrcl":[0,"Nieuw venster"],"2614jd":[0,"Oeps...er is iets fout gegaan"],"1m8nqgd":[0,"Asana openen"],fgsl0m:[0,"Openen in nieuw venster"],"1yi9eyb":[0,"Plakken"],aeabix:[0,"Plakken-en-overeenkomen-stijl"],"12l6r2p":[0,"Voorkeursinstellingen"],"1m8iy2o":[0,"Asana verlaten"],"14vwcux":[0,"Sluiten"],qatuok:[0,"Klaar om te installeren"],"14vtrek":[0,"Opnieuw"],"9wot5p":[0,"Vernieuwen"],"1d3hnqp":[0,"Opnieuw laden"],x2febb:[0,"Opnieuw starten"],"15gzctt":[0,"Afbeelding opslaan als..."],"187zo18":[0,"Alles selecteren"],v2t2c7:[0,"Services"],ee5nlz:[0,"Alles weergeven"],inuwxd:[0,"Er is iets mis met deze link. Controleer de link en probeer het opnieuw."],"10wna95":[0,"Start met praten"],"1pdut2p":[0,"Stop met praten"],"1koh9u2":[0,"Tools voor ontwikkelaars schakelen"],"1jlfivc":[0,"Volledig scherm schakelen"],"14vtr68":[0,"Ongedaan maken"],"14vzrjh":[0,"Weergeven"],"1kvc5iz":[0,"Wenst u uw app nu bij te werken?"],"1k0hvxf":[0,"U hebt mogelijk niet-opgeslagen veranderingen. Weet u zeker dat u wil verdergaan?"],"6he93v":[0,"U bent momenteel niet verbonden met het internet. Controleer uw verbinding en probeer het opnieuw!"],"1ua7vw5":[0,"Inzoomen"],"1vlbirg":[0,"Uitzoomen"]}}
var Xo=n(75)
function ei(e){let t=5381,n=e.length
for(;n;)t=33*t^e.charCodeAt(--n)
return t>>>0}class ti{constructor(e,t){this.type=e,this.id=t}equals(e){return t=this,n=e,!(!T(t)||!T(n))||!T(t)&&!T(n)&&t.id===n.id
var t,n}hashCode(){return ei(this.id)}}function ni(e,t){if(null===e||"object"!=typeof e)return JSON.stringify(e)
if(void 0===e)return
if(-1!==t.indexOf(e))throw new Error("Cannot stabilize json of circular object")
t=t.slice(),t.push(e)
const n=[]
let r
if(Array.isArray(e)){for(r=0;r<e.length;r++)n.push(ni(e[r],t))
return`[${n.join(",")}]`}const o=Object.keys(e)
for(o.sort(),r=0;r<o.length;r++){const i=o[r],a=e[i]
void 0!==a&&n.push(JSON.stringify(i)+":"+ni(a,t))}return`{${n.join(",")}}`}function ri(e){return ni(e,[])}class oi{constructor(){this.equals=function(e){const t=Object.keys(this).filter((e=>"equals"!==e))
return t.length===Object.keys(e).length-1&&t.every((t=>e.hasOwnProperty(t)&&((e,t)=>{if(ct(e,t))return!0
if(e instanceof Array&&t instanceof Array&&e.length===t.length){for(let n=0;n<e.length;n++)if(!ct(e[n],t[n]))return!1
return!0}return!1})(this[t],e[t])))}}}class ii{constructor(e){this.jsonObject=e,this.sortedJson=ri(e)}equals(e){return this.sortedJson===e.sortedJson}hashCode(){return ei(this.sortedJson)}}var ai,si
!function(e){e[e.None=0]="None",e[e.Lower=1]="Lower",e[e.Upper=2]="Upper",e[e.Digit=3]="Digit",e[e.Other=4]="Other"}(ai||(ai={})),function(e){e[e.FirstCharOfWord=0]="FirstCharOfWord",e[e.MiddleOfWord=1]="MiddleOfWord",e[e.BetweenWords=2]="BetweenWords"}(si||(si={}))
const li=(()=>{const e=new Array(256),t="a".charCodeAt(0),n="z".charCodeAt(0),r="A".charCodeAt(0),o="Z".charCodeAt(0),i="0".charCodeAt(0),a="9".charCodeAt(0)
for(let s=0;s<256;s++){let l
l=s>=t&&s<=n?ai.Lower:s>=r&&s<=o?ai.Upper:s>=i&&s<=a?ai.Digit:ai.Other,e[s]=l}return e})(),ui=(()=>{function e(e,t){if(t===ai.Other)return si.BetweenWords
if(t===ai.Digit)return si.MiddleOfWord
switch(e){case ai.Lower:case ai.Upper:switch(t){case ai.Lower:return si.MiddleOfWord
case ai.Upper:return si.FirstCharOfWord}break
case ai.Digit:switch(t){case ai.Lower:case ai.Upper:return si.FirstCharOfWord}break
case ai.None:case ai.Other:return si.FirstCharOfWord}return si.FirstCharOfWord}const t=[]
for(let n=ai.None;n<=ai.Other;++n){t[n]=[]
for(let r=ai.None;r<=ai.Other;++r)t[n][r]=e(n,r)}return t})()
function ci(e,t){let n=""
const r=e.toLowerCase(),o=e.toUpperCase()
let i,a=""
for(i=0;"_"===e[i];i++)a+="_"
let s=ai.None
for(;i<e.length;i++){const a=e.charCodeAt(i),l=li[a],u=ui[s][l]
switch(u){case si.FirstCharOfWord:n+=t(0===n.length,i,r,o)
break
case si.MiddleOfWord:n+=r[i]
break
case si.BetweenWords:}s=l}return a.length>0&&(n=a+n),n}const di=(e,t,n,r)=>e?n[t]:"_"+n[t],fi=(e,t,n,r)=>e?n[t]:r[t],pi=(e,t,n,r)=>r[t]
function hi(e){return ci(e,di)}function vi(e){return ci(e,fi)}class gi{constructor(e){return this._value=null,!gi._isEmpty(gi.NONE)&&gi._isEmpty(e)?gi.NONE:(this._value=e,this)}static fromMaybe(e){return j(e)?new gi(e):gi.NONE}static flatten(e){return e.reduce(((e,t)=>(t.forEach((t=>{e.push(t)})),e)),[])}static _isEmpty(e){return null==e}toMaybe(){return this.getOrNull()}equals(e){return this.getOrNull()===e.getOrNull()}isEmpty(){return gi._isEmpty(this._value)}isNonEmpty(){return!this.isEmpty()}filter(e){return this.isNonEmpty()&&e(this._value)?this:gi.NONE}forEach(e){this.isNonEmpty()&&e(this._value)}map(e){return this.isNonEmpty()?new gi(e(this._value)):gi.NONE}flatMap(e){return this.isNonEmpty()?e(this._value):gi.NONE}getOrNull(){return this._value}getOrThrow(e="Called getOrThrow on an empty Optional"){if(this.isEmpty())throw new Error(e)
return this._value}getOrElse(e){return this.isNonEmpty()?this._value:e()}orElse(e){return this.isNonEmpty()?this:e()}toArray(){return this.isNonEmpty()?[this._value]:[]}}function yi(e,t){for(const[n,r]of Object.entries(e))t(r,n,e)}gi.NONE=new gi(null)
class mi{constructor(e,t,n,r){if(this._logger=e,this._errorNotification=t,this._isInTests=n,this._map=On(),Xo.ok(this._logger,mi.ERROR_MISSING_LOGGER),r){const e=Object.keys(r).filter((e=>"equals"!==e))
this._map=e.reduce(((e,t)=>e.set(hi(t),r[t])),this._map)}}static _convertLunaUiEventLogValue(e){if(e instanceof ii){const t=Object.keys(e.jsonObject).reduce(((t,n)=>Object.assign(Object.assign({},t),{[n]:mi._convertArrayValueOrSingleValue(e.jsonObject[n])})),{})
return t}return mi._convertArrayValueOrSingleValue(e)}static _convertArrayValueOrSingleValue(e){return Array.isArray(e)?e.map(mi._convertSingleValue):mi._convertSingleValue(e)}static _convertObjectId(e){return e?Number(e.id):null}toLunaUiEvent(){const e=new oi
return this._map.reduce(((e,t,n)=>Object.assign(Object.assign({},e),{[vi(n)]:t})),e)}getMap(){return this._map}setAction(e){return this._setValue(mi._action_field,e)}setSubAction(e){return this._setValue(mi._sub_action_field,e)}setLocation(e){return this._setValue(mi._location_field,e)}setSubLocation(e){return this._setValue(mi._sub_location_field,e)}setTask(e){return this._setValue("task",e)}setProject(e){return this._setValue("project",e)}setAssignee(e){return this._setValue("assignee",e)}set(e,t){return this._setValue(e,t)}setMap(e){let t=this
return yi(e,((e,n)=>{t=t.set(n,e)})),t}buildAndLogDefaultingToUserActionEvent(){const e=mi._non_user_action_event_field,t=this._map.get(e)
return!0===t?this._buildAndLogNonUserActionEvent():this._buildAndLogUserActionEvent()}buildEvent(){return this._build()}equals(e){return this._map.equals(e.getMap())}_buildAndLogUserActionEvent(){this._logger.logUserActionEvent(this._setNonUserActionEventWarningOnMismatch(!1)._build())}_buildAndLogNonUserActionEvent(){this._logger.logNonUserActionEvent(this._setNonUserActionEventWarningOnMismatch(!0)._build())}_getConvertedMapAsObject(){return this._getConvertedMap().toObject()}_setNonUserActionEventWarningOnMismatch(e){const t=mi._non_user_action_event_field,n=this._map.get(t)
if(null!=n&&n!==e){if(this._isInTests)throw new Error(mi.ERROR_SETTING_NON_USER_ACTION_EVENT_WITH_CONFLICTING_VALUE)
this._errorNotification.recordWarning(mi.ERROR_SETTING_NON_USER_ACTION_EVENT_WITH_CONFLICTING_VALUE,{subscriberTaskIds:mi.taskIdsForNonUserActionEventMismatches,extraMessages:[`we set ${mi._non_user_action_event_field} = '${e}' but had '${n}' previously`],allowMultiple:!0})}return this._setValue(t,e)}_build(){if(!this._map.has(mi._action_field)){if(this._isInTests)throw new Error(mi.ERROR_ACTION_REQUIRED)
this._errorNotification.recordWarning(mi.ERROR_ACTION_REQUIRED,{allowMultiple:!0})}this._isInTests||(this._map.has(mi._location_field)||this._errorNotification.recordWarning(mi.ERROR_LOCATION_REQUIRED,{allowMultiple:!0}),this._map.has(mi._non_user_action_event_field)||this._errorNotification.recordWarning(mi.ERROR_NON_USER_ACTION_EVENT_REQUIRED,{allowMultiple:!0})),this._isInTests&&[mi._action_field,mi._sub_action_field,mi._location_field,mi._sub_location_field].forEach((e=>{const t=this._map.get(e)
this._assertNoEmptyValues(e,t),t&&(this._assertNoSpecialCharacters(e,t),this._assertPascalCase(e,t))})),this._map.has("name")&&this._map.get("name")!==this._map.get(mi._action_field)&&this._errorNotification.recordWarning(mi.ERROR_ACTION_NEEDS_TO_OVERWRITE_NAME,{allowMultiple:!0})
const e=this._getConvertedMap(),t=e.get(mi._action_field)
let n
return"string"==typeof t?n=t:this._map.has(mi._action_field)&&this._errorNotification.recordWarning(mi.ERROR_ACTION_HAS_WRONG_TYPE,{allowMultiple:!0}),Object.assign({name:n,action:e.get(mi._action_field),sub_action:e.get(mi._sub_action_field),location:e.get(mi._location_field),sub_location:e.get(mi._sub_location_field),task:e.get("task"),project:e.get("project"),assignee:e.get("assignee"),luna2:!0},e.toObject())}_getConvertedMap(){return this._map.reduce(((e,t,n)=>e.set(n,mi._convertLunaUiEventLogValue(t))),On())}_assertNoEmptyValues(e,t){const n="Please fix this by providing a non-empty string"+(e===mi._action_field||e===mi._location_field?".":", by not setting any value, or by setting null/undefined.")
Xo.notStrictEqual(t,"",`The event ${e} = ""; empty string fields are invalid. ${n}`)}_assertNoSpecialCharacters(e,t){["@","-","_"," ",":","."].forEach((n=>{Xo.ok(!t.includes(n),`The event ${e} "${t}" can't contain a "${n}".`)}))}_assertPascalCase(e,t){const n=function(e){return ci(e,pi)}(t)
Xo.strictEqual(t,n,`The event ${e} "${t}" should be in PascalCase. Did you mean "${n}"?`)}_clone(e){const t=new mi(this._logger,this._errorNotification,this._isInTests)
return t._map=e,t}_setValue(e,t){return this._clone(this._map.set(e,t))}}mi._action_field="action",mi._sub_action_field="sub_action",mi._location_field="location",mi._sub_location_field="sub_location",mi._non_user_action_event_field="non_user_action_event",mi.ERROR_ACTION_NEEDS_TO_OVERWRITE_NAME="name set but it isn't === action",mi.ERROR_ACTION_REQUIRED="required action is not set",mi.ERROR_ACTION_HAS_WRONG_TYPE="required action must be a string",mi.ERROR_LOCATION_REQUIRED="required location is not set",mi.ERROR_NON_USER_ACTION_EVENT_REQUIRED=`required ${mi._non_user_action_event_field} is not set`,mi.ERROR_SETTING_NON_USER_ACTION_EVENT_WITH_CONFLICTING_VALUE=`setting ${mi._non_user_action_event_field} but it's already set with a conflicting value (opposite boolean)`,mi.ERROR_MISSING_LOGGER="setting null logger into log builder",mi.taskIdsForNonUserActionEventMismatches=["1125786444236914"],mi._convertSingleValue=e=>{return t=e,t instanceof ti?mi._convertObjectId(e):e
var t}
class _i{constructor(e,t){this._requester=e,this._errorNotification=t,this.logNonUserActionEvent=e=>this._requester(e),this.logUserActionEvent=e=>this._requester(e)}_builderFromLogEvent(e){return new mi(this,this._errorNotification,!1,e)}buildAndLogDefaultingToUserActionEvent(e){this._builderFromLogEvent(e).buildAndLogDefaultingToUserActionEvent()}buildAndLogUserActionEvent(e){this._builderFromLogEvent(e)._buildAndLogUserActionEvent()}buildAndLogNonUserActionEvent(e){this._builderFromLogEvent(e)._buildAndLogNonUserActionEvent()}serializableJsonFromLogEvent(e){return this._builderFromLogEvent(e)._getConvertedMapAsObject()}addLoggingToUrlOnServerForEmailAction(e,t){throw new Error("addLoggingToUrlOnServerForEmailAction can only be invoked on the server")}trackingPixelUrlOnServer(e){throw new Error("trackingPixelUrlOnServer can only be invoked on the server")}registerAutomatedLogger(e){}runWithMetadata(e,t){return t()}runCustomAction(e,t){return t()}wrapInteraction(e,t){return t}wrapAction(e,t){return t}getActionsWithLogging(e){return e}}var bi=n(461)
function wi(e){return"string"==typeof e?e:JSON.stringify(e)}class ki{constructor(){this._recordedErrors={warn:new Set,info:new Set},this.panic=(e,t)=>{const n=t&&t.extraMessages||[]
throw new Error(`${e} ${n.map((e=>e.toString()))}`)},this.recordInfo=(e,t={})=>{this._recordError("info",e,t)},this.recordWarning=(e,t={})=>{this._recordError("warn",e,t)},this._recordError=(e,t,n={})=>{if(!n.allowMultiple){if(this._recordedErrors[e].has(t))return
this._recordedErrors[e].add(t)}this._maybeWarnForSubscriptionNotificationParams(e,n)
const r=n.extraMessages||[],o="info"===e?console.info:console.warn
o(t,...r),function(e,t,...n){const r=[t,...n].map(wi).join(" ")
"warn"!==e&&"error"!==e||bi.captureEvent({level:bi.Severity.fromString(e),fingerprint:[t],message:r})}(e,t,...r)},this._maybeWarnForSubscriptionNotificationParams=(e,t)=>{void 0===t.additionalProjectIds&&void 0===t.assigneeTaskId&&void 0===t.subscriberTaskIds||console.warn(`Attempted to subscribe to this ${e} but that doesn't work here.`)}}reportExecutionContextActivity(e){}wrapNonReactAsyncHandler(e){return e}wrapNonReactAsyncHandlerWithExecutionContexts(e,t){return t}}var Si=n(675)
class Ei extends class{constructor(){this._isReleased=!1}isReleased(){return this._isReleased}release(){this._isReleased=!0}}{constructor(e){super(),this._onRelease=e}release(){const e=this.isReleased()
super.release(),e||this._onRelease()}}class xi{constructor(e,t,n){this._domWindow=e,this._domURL=t,this._errorNotificationService=n,this.addEventListener=(e,t,n)=>{const r=t
return r.__wrapped=this._errorNotificationService.wrapNonReactAsyncHandler(t),this._domWindow.addEventListener(e,r.__wrapped,n),new Ei((()=>{this._domWindow.removeEventListener(e,r.__wrapped,n)}))},this.removeEventListener=(e,t,n)=>{const r=t
if(void 0===r.__wrapped)throw new Error("Window Service can only remove listeners that it added.")
this._domWindow.removeEventListener(e,r.__wrapped,n)},this.createObjectURL=e=>{const t=this._domURL.createObjectURL(e)
return new ji(this._domURL.revokeObjectURL,t)},this.confirm=e=>this._domWindow.confirm(e),this.devicePixelRatio=()=>this._domWindow.devicePixelRatio,this.fetch=(e,t)=>this._domWindow.fetch(e,t),this.getComputedStyle=e=>this._domWindow.getComputedStyle(e),this.getSelection=()=>this._domWindow.getSelection(),this.innerHeight=()=>this._domWindow.innerHeight,this.innerWidth=()=>this._domWindow.innerWidth,this.location=()=>this._domWindow.location,this.matchMedia=e=>this._domWindow.matchMedia(e),this.navigator=()=>this._domWindow.navigator,this.openNewWindow=e=>{const t=this._domWindow.open(e,"_blank")
t&&(t.opener=null)},this.openWindow=(e,t,n)=>{const r=this._domWindow.open(e,t,n)
r&&(r.opener=null)},this.print=()=>{this._domWindow.print()},this.requestAnimationFrame=e=>{const t=this._domWindow.requestAnimationFrame(e)
return new Ei((()=>{this._domWindow.cancelAnimationFrame(t)}))},this.windowObject=()=>this._domWindow,this.localStorage=()=>this._domWindow.localStorage}static createFromGlobals(e){return new xi(window,URL,e)}}class ji extends Ei{constructor(e,t){super((()=>e(this._objectUrl))),this._objectUrl=t}url(){return this.isReleased()?x:this._objectUrl}}class Ti extends xi{constructor(e,t,n){var r
super(e,t,n),this.alert=e=>{this._domWindow.alert(e)},this.close=()=>{this._domWindow.close()},this.confirm=e=>this._domWindow.confirm(e),this.history=()=>this._historyService,this.isDatadogSynthetic=()=>Ti.isDatadogSynthetic(this._domWindow),this.location=()=>this._domWindow.location,this.navigate=e=>{this._domWindow.location.href=Si.format(e)},this.open=(e,t,n)=>null!==this._domWindow.open(Si.format(e),t,n),this.opener=()=>this._domWindow.opener?new Ti(this._domWindow.opener,this._domURL,this._errorNotificationService):x,this.parent=()=>this._domWindow.parent!==this._domWindow?new Ti(this._domWindow.parent,this._domURL,this._errorNotificationService):x,this.postMessage=(e,t)=>{this._domWindow.postMessage(e,t)},this.replace=e=>{this._domWindow.location.replace(Si.format(e))},this.setTimeout=e=>new Promise(((t,n)=>{this._domWindow.setTimeout(t,e)})),this._historyService=(r=e,{back:()=>r.history.back(),forward:()=>r.history.forward(),go:e=>r.history.go(e),length:()=>r.history.length,push:(e,t,n)=>r.history.pushState(e,t,n),replace:(e,t,n)=>r.history.replaceState(e,t,n),addPopStateListener:e=>(r.addEventListener("popstate",e),new Ei((()=>{r.removeEventListener("popstate",e)})))})}static createFromGlobals(e){return new Ti(window,URL,e)}static isDatadogSynthetic(e){try{return e._DATADOG_SYNTHETICS_BROWSER}catch(e){return!1}}}const Ai=[{searchString:"AsanaDesktopOfficial",name:"AsanaDesktopOfficial",versionSearchString:"AsanaDesktopOfficial/"},{searchString:"Edge",name:"Edge"},{searchString:"Chrome",name:"Chrome"},{searchString:"AsanaAndroidApp",name:"AsanaAndroidApp",versionSearchString:"AsanaAndroidApp"},{searchString:"Apple",name:"Safari",versionSearchString:"Version"},{searchString:"Firefox",name:"Firefox"},{searchString:"MSIE",name:"Explorer"},{searchString:"Trident",name:"Explorer",versionSearchString:"rv"},{searchString:"Gecko",name:"Mozilla",versionSearchString:"rv"},{searchString:"Android",name:"Android"}],zi="an unknown version"
function Ii(e){if(!e)return null
const t=/iphone|ipad|ipod/gi.test(e),n=-1!==e.indexOf("Android")
return t?"ios":n?"android":null}const Pi={red:80,orangeNondismissible:80,orangeDismissible:80,yellow:81},Ci={red:68,orangeNondismissible:68,orangeDismissible:68,yellow:68},Oi={red:1/0,orangeNondismissible:1/0,orangeDismissible:1/0,yellow:1/0},Ni={red:12,orangeNondismissible:12,orangeDismissible:12,yellow:12}
function Di(e,t){return e<t.red?"red":e<t.orangeNondismissible?"orangeNondismissible":e<t.orangeDismissible?"orangeDismissible":e<t.yellow?"yellow":"green"}class Ri{constructor(e){if(this._matchingRecord=null,this._userAgent=null!=e?e:"",this._userAgent)for(let e=0;e<Ai.length;e++){const t=Ai[e]
if(-1!==this._userAgent.indexOf(t.searchString)){this._matchingRecord=t
break}}}userAgent(){return this._userAgent}name(){return null===this._matchingRecord?"An unknown browser":this._matchingRecord.name}version(){if(null!==this._matchingRecord){const e=this._matchingRecord.versionSearchString||this._matchingRecord.searchString,t=this._userAgent.indexOf(e)
if(-1!==t)return parseFloat(this._userAgent.substring(t+e.length+1))}return zi}isMacDesktop(){return!!this._userAgent&&-1!==this._userAgent.indexOf("AsanaDesktopOfficial darwin")}isWindowsDesktop(){return!!this._userAgent&&-1!==this._userAgent.indexOf("AsanaDesktopOfficial win32")}mobileOsType(){return Ii(this._userAgent)}osType(){const e=Ii(this._userAgent)
if(null!==e)return e
const t=!!this._userAgent&&(-1!==this._userAgent.indexOf("Mac OS")||this.isMacDesktop()),n=!!this._userAgent&&(-1!==this._userAgent.indexOf("Windows")||this.isWindowsDesktop()),r=!!this._userAgent&&-1!==this._userAgent.indexOf("Linux")
return t?"Mac OS":n?"Windows":r?"Linux":null}nameAndVersion(){return`${this.name()} ${this.version()}`}isSupported(){return"red"!==this.deprecationLevel()}deprecationLevel(){const e=this.name(),t=this.version()
if(t===zi)return"Safari"===e||"AsanaAndroidApp"===e||"AsanaDesktopOfficial"===e?"green":"red"
switch(e){case"Firefox":return Di(t,Ci)
case"Chrome":return Di(t,Pi)
case"Edge":return Di(t,Oi)
case"Safari":return Di(t,Ni)
case"AsanaAndroidApp":case"AsanaDesktopOfficial":return"green"
case"Explorer":case"Mozilla":case"An unknown browser":case"Android":return"red"
default:const n=e
throw new Error(`Invalid name ${n}`)}}}class Li{constructor(e){var t
this._browserInfo=new Ri(null===(t=null!=e?e:navigator)||void 0===t?void 0:t.userAgent)}isMac(){return"Mac OS"===this._browserInfo.osType()||this.isMacDesktop()}isWindows(){return"Windows"===this._browserInfo.osType()||this.isWindowsDesktop()}isIOS(){return"ios"===this._browserInfo.mobileOsType()}isAndroid(){return"android"===this._browserInfo.mobileOsType()}isMobile(){return!!this._browserInfo.mobileOsType()}isDesktop(){return this.isMacDesktop()||this.isWindowsDesktop()}isMacDesktop(){return this._browserInfo.isMacDesktop()}isWindowsDesktop(){return this._browserInfo.isWindowsDesktop()}isIe(){return"Explorer"===this._browserInfo.name()}isEdge(){return"Edge"===this._browserInfo.name()}isFirefox(){return"Firefox"===this._browserInfo.name()}isSafari(){return"Safari"===this._browserInfo.name()}isChrome(){return"Chrome"===this._browserInfo.name()}browser(){if(this.isDesktop())return"Asana Desktop"
if(this.isIe())return"Internet Explorer"
if(this.isEdge())return"Edge"
{const e=this._browserInfo.name()
return"An unknown browser"===e?"Unknown browser: "+this._browserInfo.userAgent():e}}deprecationLevel(){return this._browserInfo.deprecationLevel()}version(){const e=this._browserInfo.version()
return e===zi?x:e}}const Mi=(e,t,n)=>{let r=`${e}=${t}`
return void 0!==n.maxAgeInSeconds&&(r+="; max-age="+n.maxAgeInSeconds),void 0!==n.sameSite&&(r+="; SameSite="+n.sameSite),void 0!==n.secure&&n.secure&&(r+="; Secure"),void 0!==n.domain&&(r+="; Domain="+n.domain),void 0!==n.path&&(r+="; Path="+n.path),r},Fi=(e,t,n={})=>{const r=((e,t)=>{const n=t+"=",r=e.split(";")
for(let e=0;e<r.length;e++){let t=r[e]
for(;" "===t.charAt(0);)t=t.substring(1,t.length)
if(0===t.indexOf(n))return decodeURIComponent(t.substring(n.length,t.length))}return x})(e,t)
return j(r)?Mi(t,r,Object.assign(Object.assign({},n),{maxAgeInSeconds:0})):x}
class Wi{constructor(e,t,n){this._domDocument=e,this._domWindow=t,this._errorNotificationService=n}static createFromGlobals(e){return new Wi(document,window,e)}activeElement(){return this._domDocument.activeElement}addEventListener(e,t,n){const r=this._errorNotificationService.wrapNonReactAsyncHandler(t)
return this._domDocument.addEventListener(e,r,n),new Ei((()=>{this._domDocument.removeEventListener(e,r,n)}))}addEventListenerToElement(e,t,n,r){const o=this._errorNotificationService.wrapNonReactAsyncHandler(t)
return n.addEventListener(e,o,r),new Ei((()=>{n.removeEventListener(e,o,r)}))}body(){return this._domDocument.body}head(){return this._domDocument.head}createElement(e){return this._domDocument.createElement(e)}createRange(){return this._domDocument.createRange()}execCommand(e){return this._domDocument.execCommand(e)}getElementById(e){return this._domDocument.getElementById(e)}getElementsByTagName(e){return this._domDocument.getElementsByTagName(e)}hasFocus(){return this._domDocument.hasFocus()}setTitle(e){this._domDocument.title=e}setCookie(e,t,n={}){n=this._cookieOptionsWithDefaults(n),this._domDocument.cookie=Mi(e,t,n)}deleteCookie(e,t={}){t=this._cookieOptionsWithDefaults(t),A(Fi(this._domDocument.cookie,e,t),(e=>{this._domDocument.cookie=e}))}visibilityState(){return this._domDocument.visibilityState}_cookieOptionsWithDefaults(e){return Object.assign(Object.assign({},e),{domain:void 0!==e.domain?e.domain:this._domWindow.location.hostname,path:void 0!==e.path?e.path:"/"})}}function Ui(e,t){return function(e,t){return new ti(e,t)}(e,t)}const Bi=t.createContext({applyTitle:()=>{},removeTitle:()=>{}}),qi=({services:e,getDocumentTitle:n,children:r})=>{const[o,i]=t.useState([]),a=0===o.length?null:o.reduce(((e,{parts:t})=>Object.assign(Object.assign({},e),t)),{}),s=null!==a?n(a):null
return t.useEffect((()=>{null!==s&&e.document.setTitle(s)}),[s,e.document]),t.createElement(Bi.Provider,{value:{applyTitle:t.useCallback(((e,t)=>{i((n=>[...n,{key:e,parts:t}]))}),[]),removeTitle:t.useCallback((e=>{i((t=>t.filter((({key:t})=>e!==t))))}),[])},children:r})}
qi.displayName="DocumentTitleContext"
const Hi=t.createFactory(qi),Vi=["prod","prod-eu1","prod-au1"],$i=({services:e,children:t})=>Hi({services:e,children:t,getDocumentTitle:t=>((e,t)=>{const n=t.showNotificationBlip?"● ":"",r=e.lunaAdapter.clusterFlag(),o=-1===Vi.indexOf(r)?` (${r})`:"",i=t.viewName?`${t.viewName} - `:"",a=t.subViewName?`${t.subViewName} - `:""
return n+i+a+"Asana"+o})(e,t)})
$i.displayName="AsanaDocumentTitleContext"
t.createFactory($i)
const Gi="ACCESS_DENIED",Ki="BILLING",Qi="CONVERSATION",Yi="DEFAULT",Ji="DESKTOP_QUICK_ADD_TASK",Zi="GOALS",Xi="HOME",ea="INBOX",ta="MY_TASKS",na="NUX",ra="PORTFOLIOS",oa="USER_PROFILE",ia="PROJECT",aa="PROJECT_TEMPLATE",sa="REPORTING",la="SEARCH",ua="SINGLE_DASHBOARD",ca="SINGLE_GOAL",da="SINGLE_PORTFOLIO",fa="TAG",pa="TASK",ha="TEAM",va=(new Set([Qi,ea,ia,aa,ua,ca,da,fa,pa,ha]),new Set([Ji]))
function ga(e){const{routeType:t,objectId:n}=function(e){const t=e.state
switch(t.name){case"AccessDeniedRoute":case"AccessDeniedDomainRoute":return{routeType:Gi,objectId:""}
case"BillingRoute":return{routeType:Ki,objectId:""}
case"SingleConversationRoute":return{routeType:Qi,objectId:t.conversation.id}
case"DeveloperConsoleRoute":return{routeType:Yi,objectId:""}
case"DesktopQuickAddTaskRoute":return{routeType:Ji,objectId:t.task.id}
case"GoalIndexRoute":return{routeType:Zi,objectId:""}
case"HomeRoute":return{routeType:Xi,objectId:""}
case"InboxRoute":return{routeType:ea,objectId:t.child?t.child.item.id:""}
case"NuxRoute":return{routeType:na,objectId:""}
case"UserProfilePageRoute":return{routeType:oa,objectId:""}
case"PortfolioIndexRoute":return{routeType:ra,objectId:""}
case"PotListRoute":case"PotBoardRoute":case"PotCalendarRoute":case"PotFilesRoute":case"PotTimelineRoute":case"PotOverviewRoute":if(t.child&&"TaskRoute"===t.child.name)return{routeType:pa,objectId:t.child.task.id}
case"PotConversationsRoute":case"PotProgressRouteDeprecated":case"PotFormRoute":case"PotDashboardRoute":case"PotWorkflowRoute":return"MyTasks"===t.potType?{routeType:ta,objectId:t.pot.id}:"Tag"===t.potType?{routeType:fa,objectId:t.pot.id}:{routeType:ia,objectId:t.pot.id}
case"ProjectTemplateListRoute":case"ProjectTemplateSettingsRoute":case"ProjectTemplateDashboardRoute":case"ProjectTemplateOverviewRoute":return{routeType:aa,objectId:t.projectTemplateConfiguration.id}
case"DomainDashboardIndexRoute":return{routeType:sa,objectId:""}
case"SearchListRoute":case"SearchCalendarRoute":case"UrlBasedSearchRoute":return{routeType:la,objectId:""}
case"DomainDashboardRoute":return{routeType:ua,objectId:t.domainDashboard.id}
case"GoalRoute":return{routeType:ca,objectId:t.goal.id}
case"PortfolioListRoute":case"PortfolioWorkloadRoute":case"PortfolioProgressRoute":case"PortfolioTimelineRoute":case"PortfolioConversationsRoute":return{routeType:da,objectId:t.portfolio.id}
case"TeamCalendarRoute":case"TeamOverviewRoute":case"TeamConversationsRoute":return{routeType:ha,objectId:t.team.id}}}(e)
return{historyItem:e,objectId:n,routeType:t}}function ya(e){return!va.has(e.routeType)}function ma(e,t){return e.objectId===t.objectId&&e.routeType===t.routeType&&("DEFAULT"!==e.routeType||e.historyItem.state.name===t.historyItem.state.name)}function _a(e){const t=e.map(ga),n=t.filter(ya)
return n.filter(((e,t,n)=>n.findIndex((t=>ma(t,e)))===t))}const ba=(e,t)=>e.modal?Object.assign(Object.assign({},e),{modal:ba(e.modal,t)}):t(e)
const wa=(e,t)=>Object.assign(Object.assign({},e),{modal:e.modal?ba(e.modal,t):t(x)})
function ka(e,t){var n,r,o,i
if(e===t)return 0
const a=e.split(".").map((e=>parseInt(e,10))),s=t.split(".").map((e=>parseInt(e,10))),l=Math.max(a.length,s.length)
for(let e=0;e<l;e++){if((null!==(n=a[e])&&void 0!==n?n:0)>(null!==(r=s[e])&&void 0!==r?r:0))return 1
if((null!==(o=a[e])&&void 0!==o?o:0)<(null!==(i=s[e])&&void 0!==i?i:0))return-1}return 0}function Sa({currentVersion:e,minVersionInclusive:t,maxVersionExclusive:n}){const r=!t||ka(e,t)>=0,o=!n||ka(e,n)<0
return r&&o}var Ea
!function(e){e.General="General",e.Profile="Profile",e.EmailNotifications="EmailNotifications",e.EmailForwarding="EmailForwarding",e.Account="Account",e.Display="Display",e.Apps="Apps",e.Hacks="Hacks"}(Ea||(Ea={}))
const xa=/^\d+$/
class ja{constructor(e){var t,n,r,o,i,a,s,l,u,c,d
this._excludedNotificationIds=new Set,this._logEnrollmentEvents=e=>{for(const t of e)this._loggingService.logNonUserActionEvent(t)},this._lunaUiEventHandler=(e,t)=>{t?this._loggingService.buildAndLogUserActionEvent(this._logEventWithDesktopMetadata(e)):this._loggingService.buildAndLogNonUserActionEvent(this._logEventWithDesktopMetadata(e))},this._parseRouteHistoryJson=e=>{const t=JSON.parse(e)
return t&&Array.isArray(t.history)?t.history:(this._errorNotificationService.recordWarning("Attempted to parse invalid desktop route history JSON"),[])},this._currentRoute=null,this._routeHistory=[],this._electronInjectedApi=e.electronInjectedApi,this._loggingService=null!==(t=e.loggingService)&&void 0!==t?t:null,this._errorNotificationService=e.errorNotificationService,this._experimentsService=e.experimentsService,this._navigationService=null!==(n=e.navigationService)&&void 0!==n?n:null,this._lunaAdapter=null!==(r=e.lunaAdapter)&&void 0!==r?r:null,this._windowService=e.windowService,this._softDeprecatedClientVersion=e.softDeprecatedClientVersion,this._hardDeprecatedClientVersion=e.hardDeprecatedClientVersion,this._sessionId=null!==(o=e.sessionId)&&void 0!==o?o:null,null===(i=e.navigationService)||void 0===i||i.currentRouteSubscriptionManager.subscribe((e=>{j(e)&&(this._currentRoute&&this._addItemToPersistentHistory({state:this._currentRoute,title:document.title}),this._routingInfo=e,this._currentRoute=e.currentRoute)})),this._windowService.addEventListener("pagehide",(()=>{this._currentRoute&&this._addItemToPersistentHistory({state:this._currentRoute,title:document.title})})),null===(a=this._electronInjectedApi.sendSessionId)||void 0===a||a.call(this,this._sessionId),e.experimentsData&&(null===(s=this._electronInjectedApi.updateExperimentsData)||void 0===s||s.call(this,e.experimentsData)),null!==this._loggingService&&(d=this._electronInjectedApi.version,Sa({currentVersion:d,minVersionInclusive:"1.8.1"})?this._electronInjectedApi.registerLoggingHandlers({lunaUiEventHandler:this._errorNotificationService.wrapNonReactAsyncHandler(this._lunaUiEventHandler),enrollmentEventHandler:this._errorNotificationService.wrapNonReactAsyncHandler(this._logEnrollmentEvents)}):null===(l=this._electronInjectedApi.registerLunaUiEventHandler)||void 0===l||l.call(this,this._errorNotificationService.wrapNonReactAsyncHandler(this._lunaUiEventHandler))),function(e){return Sa({currentVersion:e,minVersionInclusive:"1.6.0"})}(this.getVersion())&&this.getGlobalKeyboardShortcutSettings().then((e=>{null===e&&this.setGlobalKeyboardShortcutSettings(!0)})),function(e){return Sa({currentVersion:e,minVersionInclusive:"1.9.1"})}(this.getVersion())&&this._experimentsService.enabled("desktop_tray_app_2")&&(this.enableTrayApp(),null!==this._lunaAdapter&&(null===(u=this._electronInjectedApi.registerNavigateToTaskHandler)||void 0===u||u.call(this,(e=>{if(!xa.test(e))return void this._errorNotificationService.recordWarning("Desktop task navigation handler received an invalid task ID",{notifyExecutionContextOwners:!0,metadata:{taskId:e}})
const t=this._lunaAdapter.serializeTaskUrlWithoutContext(((e,t=!1,n=null,r)=>{return{name:"TaskRoute",task:(o="Task",i=e,{type:o,id:i.id}),isFocusMode:t,initialSectionToScrollTo:n,child:r}
var o,i})(Ui("Task",e),!0))
this._windowService.location().href=t}))),null===(c=this._electronInjectedApi.registerNavigateToSettingsHandler)||void 0===c||c.call(this,(()=>{var t,n,r,o
null===(t=e.navigationService)||void 0===t||t.requestChangeRoute((e=>Object.assign(Object.assign({},e),{modal:void 0}))),null===(n=e.navigationService)||void 0===n||n.requestChangeRoute((o={initialTab:Ea.General},r=Object.assign({appName:"Asana",name:"ProfileSettingsModalRoute"},o),e=>wa(e,(e=>j(e)?Object.assign(Object.assign({},e),{modal:r}):r))))}))),"unknown"===this._electronInjectedApi.version&&this._electronInjectedApi.unknownVersionDebugInfo&&this._errorNotificationService.recordWarning("UnknownDesktopVersion",{subscriberTaskIds:["1199615418525051"],extraMessages:[this._electronInjectedApi.unknownVersionDebugInfo]})}getRouteHistoryForDisplay(){this._currentRoute||this._errorNotificationService.panic("Attempted to call getRouteHistoryForDisplay while _currentRoute was null")
const e=this._getPersistentHistory(this._currentRoute.domain),t=ga({state:this._currentRoute,title:document.title})
return e.filter((e=>!ma(t,ga(e))))}setRouteHistory(e){this._routeHistory=e}getVersion(){return this._electronInjectedApi.version}getPlatform(){return this._electronInjectedApi.platform}getArchitecture(){return this._electronInjectedApi.architecture}getSystemVersion(){return this._electronInjectedApi.systemVersion}getIsFullScreen(){var e
return null===(e=this._electronInjectedApi.getIsFullScreen)||void 0===e?void 0:e.call(this)}registerMenuBarPreferencesHandler(e){var t
null===(t=this._electronInjectedApi.registerMenuBarPreferencesHandler)||void 0===t||t.call(this,e)}deregisterMenuBarPreferencesHandler(){var e
null===(e=this._electronInjectedApi.deregisterMenuBarPreferencesHandler)||void 0===e||e.call(this)}registerFullScreenHandler(e){var t
null===(t=this._electronInjectedApi.registerFullScreenHandler)||void 0===t||t.call(this,e)}deregisterFullScreenHandler(){var e
null===(e=this._electronInjectedApi.deregisterFullScreenHandler)||void 0===e||e.call(this)}registerToggleWindowMaximizedHandler(e){var t
null===(t=this._electronInjectedApi.registerToggleWindowMaximizedHandler)||void 0===t||t.call(this,e)}deregisterToggleWindowMaximizedHandler(){var e
null===(e=this._electronInjectedApi.deregisterToggleWindowMaximizedHandler)||void 0===e||e.call(this)}registerMetaFHandler(e){var t
null===(t=this._electronInjectedApi.registerMetaFHandler)||void 0===t||t.call(this,e)}deregisterMetaFHandler(){var e
null===(e=this._electronInjectedApi.deregisterMetaFHandler)||void 0===e||e.call(this)}registerNavigateToTaskHandler(e){var t
null===(t=this._electronInjectedApi.registerNavigateToSettingsHandler)||void 0===t||t.call(this,e)}registerNavigateToSettingsHandler(e){var t
null===(t=this._electronInjectedApi.registerNavigateToSettingsHandler)||void 0===t||t.call(this,e)}showAppBadgeNotificationDot(){this._electronInjectedApi.showAppBadgeNotificationDot()}hideAppBadgeNotificationDot(){this._electronInjectedApi.hideAppBadgeNotificationDot()}toggleMaximizeWindow(){var e
null===(e=this._electronInjectedApi.toggleMaximizeWindow)||void 0===e||e.call(this)}minimizeWindow(){var e
null===(e=this._electronInjectedApi.minimizeWindow)||void 0===e||e.call(this)}closeWindow(){var e
null===(e=this._electronInjectedApi.closeWindow)||void 0===e||e.call(this)}hideWindow(){var e
null===(e=this._electronInjectedApi.hideWindow)||void 0===e||e.call(this)}getIsWindowMaximized(){return this._electronInjectedApi.getIsWindowMaximized?this._electronInjectedApi.getIsWindowMaximized.call(this):Promise.resolve(!1)}registerSendClientIdToDesktopStartSessionHandler(e){this._electronInjectedApi.registerSendClientIdToDesktopStartSessionHandler(e)}mustUpdateDesktopApp(){return"unknown"!==this._electronInjectedApi.version&&void 0!==this._electronInjectedApi.version&&void 0!==this._hardDeprecatedClientVersion&&void 0!==this._electronInjectedApi.downloadUpdateAndRestart&&void 0!==this._electronInjectedApi.restartForUpdate&&ka(this._electronInjectedApi.version,this._hardDeprecatedClientVersion)<=0}downloadUpdateAndRestart(){var e
null===(e=this._electronInjectedApi.downloadUpdateAndRestart)||void 0===e||e.call(this)}registerUpdatePendingHandler(e){var t
null===(t=this._electronInjectedApi.registerUpdatePendingHandler)||void 0===t||t.call(this,e)}deregisterUpdatePendingHandler(){var e
null===(e=this._electronInjectedApi.deregisterUpdatePendingHandler)||void 0===e||e.call(this)}getPendingUpdateVersion(){return this._electronInjectedApi.getPendingUpdateVersion?this._electronInjectedApi.getPendingUpdateVersion():Promise.resolve(null)}restartForUpdate(){var e
null===(e=this._electronInjectedApi.restartForUpdate)||void 0===e||e.call(this)}retryLoadUrl(){var e
null===(e=this._electronInjectedApi.retryLoadUrl)||void 0===e||e.call(this)}disableUndoRedoMenuItems(){var e
null===(e=this._electronInjectedApi.disableUndoRedoMenuItems)||void 0===e||e.call(this)}enableUndoRedoMenuItems(){var e
null===(e=this._electronInjectedApi.enableUndoRedoMenuItems)||void 0===e||e.call(this)}excludeNotificationsFromDisplay(e){e.forEach((e=>{this._excludedNotificationIds.add(e)}))}isNotificationExcludedFromDisplay(e){return this._excludedNotificationIds.has(e)}initializeLogin(e){var t
null===(t=this._electronInjectedApi.initializeLogin)||void 0===t||t.call(this,e)}openTaskInLastFocusedAsanaWindow(e){var t
return null===(t=this._electronInjectedApi.openTaskInLastFocusedAsanaWindow)||void 0===t?void 0:t.call(this,e)}getGlobalKeyboardShortcutSettings(){var e
return null===(e=this._electronInjectedApi.getGlobalKeyboardShortcutSettings)||void 0===e?void 0:e.call(this)}setGlobalKeyboardShortcutSettings(e){var t
return null===(t=this._electronInjectedApi.setGlobalKeyboardShortcutSettings)||void 0===t?void 0:t.call(this,e)}enableTrayApp(){var e
null===(e=this._electronInjectedApi.enableTrayApp)||void 0===e||e.call(this)}maybeCloseQuickAddTaskWindow(){var e
null===(e=this._electronInjectedApi.maybeCloseQuickAddTaskWindow)||void 0===e||e.call(this)}openAsanaLinkInNewWindow(e){if(!this._navigationService)return void this._errorNotificationService.recordWarning("services.desktop.openAsanaLinkInNewWindow invoked without a navigation service")
if(!this._routingInfo)return void this._errorNotificationService.recordWarning("services.desktop.openAsanaLinkInNewWindow could not find current routing info")
const{currentRoute:t,defaultRoutingInfo:n}=this._routingInfo,r=new URL(this._navigationService.routeToUrl(e(t,n)))
var o
o=this._electronInjectedApi.version,Sa({currentVersion:o,minVersionInclusive:"1.7.2"})&&r.searchParams.append("link_opened_window","true"),this._windowService.openNewWindow(r.href)}openSettingsDialogInLastFocusedAsanaWindow(){var e
null===(e=this._electronInjectedApi.openSettingsDialogInLastFocusedAsanaWindow)||void 0===e||e.call(this)}openLastFocusedAsanaWindow(){var e
null===(e=this._electronInjectedApi.openLastFocusedAsanaWindow)||void 0===e||e.call(this)}setQuickAddTaskId(e){var t
null===(t=this._electronInjectedApi.sendQuickAddTaskId)||void 0===t||t.call(this,e)}getIsKeyAsanaWindow(){return this._electronInjectedApi.getIsKeyAsanaWindow?this._electronInjectedApi.getIsKeyAsanaWindow.call(this):Promise.resolve(!0)}registerSetIsKeyAsanaWindowHandler(e){var t
null===(t=this._electronInjectedApi.registerSetIsKeyAsanaWindowHandler)||void 0===t||t.call(this,e)}deregisterSetIsKeyAsanaWindowHandler(){var e
null===(e=this._electronInjectedApi.deregisterSetIsKeyAsanaWindowHandler)||void 0===e||e.call(this)}destroyTrayApp(){var e
null===(e=this._electronInjectedApi.destroyTrayApp)||void 0===e||e.call(this)}setTrayWindowDisplay(e){var t
null===(t=this._electronInjectedApi.setTrayWindowDisplay)||void 0===t||t.call(this,e)}registerTrayWindowDisplayChangedHandler(e){var t
return null===(t=this._electronInjectedApi.registerTrayWindowDisplayChangedHandler)||void 0===t?void 0:t.call(this,e)}deregisterTrayWindowDisplayChangedHandler(){var e
return null===(e=this._electronInjectedApi.deregisterTrayWindowDisplayChangedHandler)||void 0===e?void 0:e.call(this)}getDesktopSettings(e){var t
return null===(t=this._electronInjectedApi.getDesktopSettings)||void 0===t?void 0:t.call(this,e)}setDesktopSettings(e,t,n){var r
null===(r=this._electronInjectedApi.setDesktopSettings)||void 0===r||r.call(this,e,t,n)}showTrayWindow(){var e
null===(e=this._electronInjectedApi.showTrayWindow)||void 0===e||e.call(this)}playTimerSound(){var e
null===(e=this._electronInjectedApi.playTimerSound)||void 0===e||e.call(this)}reloadTrayWindow(){var e
null===(e=this._electronInjectedApi.reloadTrayWindow)||void 0===e||e.call(this)}_logEventWithDesktopMetadata(e){return Object.assign(Object.assign(Object.assign({},new oi),e),{desktopAppVersion:this.getVersion(),osVersion:this.getSystemVersion()})}_getPersistentHistory(e){const t=this._windowService.localStorage().getItem(`history_${e.id}`)
return t?this._parseRouteHistoryJson(t):[]}_setPersistentHistory(e,t){const n={schemaVersion:1,history:t}
this._windowService.localStorage().setItem(`history_${e.id}`,JSON.stringify(n))}_addItemToPersistentHistory(e){const t=e.state.domain,n=[e].concat(this._getPersistentHistory(t)),r=_a(n).map((({historyItem:e})=>e)).slice(0,16)
this._setPersistentHistory(t,r)}}class Ta{constructor(){this.enabled=(e,t)=>!1,this.hasFlag=e=>!1,this.allFeatureFlags=()=>[{name:"",help:"",safeToDogfood:!1,options:[],experimentName:"",enabledGlobally:!1}],this.variant=(e,t)=>"disabled",this.featureFlagEnabledIgnoringExperiments=e=>!1}}var Aa
!function(e){e[e.None=0]="None",e[e.Param=1]="Param",e[e.Tag=2]="Tag"}(Aa||(Aa={}))
const za={en:"English",de:"Deutsch",es:"Español",fr:"Français",id:"Bahasa Indonesia",it:"Italiano",ja:"日本語",ko:"한국어",nl:"Nederlands",pl:"Polski",pt:"Português",ru:"Русский",sv:"Svenska",zh:"繁體中文","x-asana-accents":"Áccénts (pseudo)","x-asana-ui-expansion":"UI Expansion (pseudo)","x-asana-attribution":"Who wrapped what? (pseudo)"},Ia=new Set(Object.keys(za).filter((e=>-1!==e.indexOf("x-asana"))))
class Pa{constructor(e){this.name=e}static isSupportedLocale(e){const t=za
return void 0!==t[e]}static stringToSupportedLocale(e){const t=this.normalizeLocaleFormat(e)
if(this.isSupportedLocale(t))return t
const n=t.replace(/-.*/,"")
return this.isSupportedLocale(n)?n:null}static normalizeLocaleFormat(e){return e.toLowerCase().replace(/;.*/,"").replace(/[^a-z-]+/,"-")}static fromString(e){if(!e)return null
const t=this._firstSupportedLocaleFromString(e)
return t&&new Pa(t)}static _firstSupportedLocaleFromString(e){return function(e,t){for(const n of e){const e=t(n)
if(e)return e}return null}(e.split(/,\s*/),(e=>Pa.stringToSupportedLocale(e)))}isAsanaLocale(){return Ia.has(this.name)}localeForMarketingSiteUrl(){const e={en:"",de:"de",es:"es",fr:"fr",id:"id",it:"it",ja:"ja",ko:"ko",nl:"nl",pl:"pl",pt:"pt",ru:"ru",sv:"sv",zh:"zh-tw","x-asana-accents":"","x-asana-ui-expansion":"","x-asana-attribution":""}
return e[this.name]?e[this.name]:""}}const Ca={en:{englishName:"English",displayName:za.en,feedbackLink:"https://app.asana.com/0/346162350700782/list",isPublic:!0,isSupportedBySoyTemplates:!0,isSelectableForUsersWithBetaLanguages:!1,shouldDisplayBetaTopbarWhenSelected:!1,shouldDisplayBetaBadge:!1,shouldDisplayInternalBadge:!1,hasInstantTranslations:!0,displayFeedbackLink:!1,grammaticalListSeparator:", ",sentenceTerminator:".",isTransferableToInvitedUsers:!0,hasLocalizedTermsOfService:!0,languageCodeForWistiaCaptions:"eng",syncPreferenceToMarketingSite:!0,hasGenderedPronouns:!0},de:{englishName:"German",displayName:za.de,feedbackLink:"https://asanaops.wufoo.com/forms/z33k94k19pftpy/",isPublic:!0,isSupportedBySoyTemplates:!0,isSelectableForUsersWithBetaLanguages:!1,shouldDisplayBetaTopbarWhenSelected:!1,shouldDisplayBetaBadge:!1,shouldDisplayInternalBadge:!1,hasInstantTranslations:!1,displayFeedbackLink:!1,grammaticalListSeparator:", ",sentenceTerminator:".",isTransferableToInvitedUsers:!0,hasLocalizedTermsOfService:!0,languageCodeForWistiaCaptions:"ger",syncPreferenceToMarketingSite:!0,hasGenderedPronouns:!0},fr:{englishName:"French",displayName:za.fr,feedbackLink:"https://asanaops.wufoo.com/forms/zgrvyiw16y33q7/",isPublic:!0,isSupportedBySoyTemplates:!0,isSelectableForUsersWithBetaLanguages:!1,shouldDisplayBetaTopbarWhenSelected:!1,shouldDisplayBetaBadge:!1,shouldDisplayInternalBadge:!1,hasInstantTranslations:!1,displayFeedbackLink:!1,grammaticalListSeparator:", ",sentenceTerminator:".",isTransferableToInvitedUsers:!0,hasLocalizedTermsOfService:!0,languageCodeForWistiaCaptions:"fre",syncPreferenceToMarketingSite:!0,hasGenderedPronouns:!0},es:{englishName:"Spanish",displayName:za.es,feedbackLink:"https://asanaops.wufoo.com/forms/comentarios-sobre-la-versian-beta-en-espaaol/",isPublic:!0,isSupportedBySoyTemplates:!0,isSelectableForUsersWithBetaLanguages:!1,shouldDisplayBetaTopbarWhenSelected:!1,shouldDisplayBetaBadge:!1,shouldDisplayInternalBadge:!1,hasInstantTranslations:!1,displayFeedbackLink:!1,grammaticalListSeparator:", ",sentenceTerminator:".",isTransferableToInvitedUsers:!0,hasLocalizedTermsOfService:!0,languageCodeForWistiaCaptions:"spa",syncPreferenceToMarketingSite:!0,hasGenderedPronouns:!0},pt:{englishName:"Portuguese",displayName:za.pt,feedbackLink:"https://asanaops.wufoo.com/forms/comentarios-para-a-versao-beta-em-portuguas/",isPublic:!0,isSupportedBySoyTemplates:!0,isSelectableForUsersWithBetaLanguages:!1,shouldDisplayBetaTopbarWhenSelected:!1,shouldDisplayBetaBadge:!1,shouldDisplayInternalBadge:!1,hasInstantTranslations:!1,displayFeedbackLink:!1,grammaticalListSeparator:", ",sentenceTerminator:".",isTransferableToInvitedUsers:!0,hasLocalizedTermsOfService:!0,languageCodeForWistiaCaptions:"por",syncPreferenceToMarketingSite:!0,hasGenderedPronouns:!0},ja:{englishName:"Japanese",displayName:za.ja,feedbackLink:"https://asanaops.wufoo.com/forms/m1s3huop0ihbhi7/",isPublic:!0,isSupportedBySoyTemplates:!0,isSelectableForUsersWithBetaLanguages:!1,shouldDisplayBetaTopbarWhenSelected:!1,shouldDisplayBetaBadge:!1,shouldDisplayInternalBadge:!1,hasInstantTranslations:!1,displayFeedbackLink:!1,grammaticalListSeparator:"、",sentenceTerminator:"。",isTransferableToInvitedUsers:!0,hasLocalizedTermsOfService:!0,languageCodeForWistiaCaptions:"jpn",syncPreferenceToMarketingSite:!0,hasGenderedPronouns:!1},zh:{englishName:"Traditional Chinese",displayName:za.zh,feedbackLink:"https://form.asana.com/?k=pjPU1EPH8o9dqTCxlAhwSg&d=15793206719",isPublic:!0,isSupportedBySoyTemplates:!0,isSelectableForUsersWithBetaLanguages:!1,shouldDisplayBetaTopbarWhenSelected:!1,shouldDisplayBetaBadge:!1,shouldDisplayInternalBadge:!1,hasInstantTranslations:!1,displayFeedbackLink:!1,grammaticalListSeparator:"，",sentenceTerminator:"。",isTransferableToInvitedUsers:!0,hasLocalizedTermsOfService:!1,languageCodeForWistiaCaptions:"zho",syncPreferenceToMarketingSite:!0,hasGenderedPronouns:!1},id:{englishName:"Bahasa Indonesia",displayName:za.id,feedbackLink:"https://form.asana.com/?k=pjPU1EPH8o9dqTCxlAhwSg&d=15793206719",isPublic:!0,isSupportedBySoyTemplates:!0,isSelectableForUsersWithBetaLanguages:!1,shouldDisplayBetaTopbarWhenSelected:!1,shouldDisplayBetaBadge:!1,shouldDisplayInternalBadge:!1,hasInstantTranslations:!1,displayFeedbackLink:!1,grammaticalListSeparator:", ",sentenceTerminator:".",isTransferableToInvitedUsers:!0,hasLocalizedTermsOfService:!1,languageCodeForWistiaCaptions:"idn",syncPreferenceToMarketingSite:!0,hasGenderedPronouns:!1},it:{englishName:"Italian",displayName:za.it,feedbackLink:"https://form.asana.com/?k=pjPU1EPH8o9dqTCxlAhwSg&d=15793206719",isPublic:!0,isSupportedBySoyTemplates:!0,isSelectableForUsersWithBetaLanguages:!1,shouldDisplayBetaTopbarWhenSelected:!1,shouldDisplayBetaBadge:!1,shouldDisplayInternalBadge:!1,hasInstantTranslations:!1,displayFeedbackLink:!1,grammaticalListSeparator:", ",sentenceTerminator:".",isTransferableToInvitedUsers:!0,hasLocalizedTermsOfService:!1,languageCodeForWistiaCaptions:"ita",syncPreferenceToMarketingSite:!0,hasGenderedPronouns:!0},ko:{englishName:"Korean",displayName:za.ko,feedbackLink:"https://form.asana.com/?k=pjPU1EPH8o9dqTCxlAhwSg&d=15793206719",isPublic:!0,isSupportedBySoyTemplates:!0,isSelectableForUsersWithBetaLanguages:!1,shouldDisplayBetaTopbarWhenSelected:!1,shouldDisplayBetaBadge:!1,shouldDisplayInternalBadge:!1,hasInstantTranslations:!1,displayFeedbackLink:!1,grammaticalListSeparator:", ",sentenceTerminator:".",isTransferableToInvitedUsers:!0,hasLocalizedTermsOfService:!1,languageCodeForWistiaCaptions:"kor",syncPreferenceToMarketingSite:!0,hasGenderedPronouns:!1},nl:{englishName:"Dutch",displayName:za.nl,feedbackLink:"https://form.asana.com/?k=pjPU1EPH8o9dqTCxlAhwSg&d=15793206719",isPublic:!0,isSupportedBySoyTemplates:!1,isSelectableForUsersWithBetaLanguages:!1,shouldDisplayBetaTopbarWhenSelected:!1,shouldDisplayBetaBadge:!1,shouldDisplayInternalBadge:!1,hasInstantTranslations:!1,displayFeedbackLink:!1,grammaticalListSeparator:", ",sentenceTerminator:".",isTransferableToInvitedUsers:!0,hasLocalizedTermsOfService:!0,languageCodeForWistiaCaptions:"nld",syncPreferenceToMarketingSite:!0,hasGenderedPronouns:!0},pl:{englishName:"Polish",displayName:za.pl,feedbackLink:"https://form.asana.com/?k=pjPU1EPH8o9dqTCxlAhwSg&d=15793206719",isPublic:!0,isSupportedBySoyTemplates:!0,isSelectableForUsersWithBetaLanguages:!1,shouldDisplayBetaTopbarWhenSelected:!1,shouldDisplayBetaBadge:!1,shouldDisplayInternalBadge:!1,hasInstantTranslations:!1,displayFeedbackLink:!1,grammaticalListSeparator:", ",sentenceTerminator:".",isTransferableToInvitedUsers:!0,hasLocalizedTermsOfService:!1,languageCodeForWistiaCaptions:"pol",syncPreferenceToMarketingSite:!0,hasGenderedPronouns:!0},ru:{englishName:"Russian",displayName:za.ru,feedbackLink:"https://form.asana.com/?k=pjPU1EPH8o9dqTCxlAhwSg&d=15793206719",isPublic:!0,isSupportedBySoyTemplates:!0,isSelectableForUsersWithBetaLanguages:!1,shouldDisplayBetaTopbarWhenSelected:!1,shouldDisplayBetaBadge:!1,shouldDisplayInternalBadge:!1,hasInstantTranslations:!1,displayFeedbackLink:!1,grammaticalListSeparator:", ",sentenceTerminator:".",isTransferableToInvitedUsers:!0,hasLocalizedTermsOfService:!1,languageCodeForWistiaCaptions:"rus",syncPreferenceToMarketingSite:!0,hasGenderedPronouns:!0},sv:{englishName:"Swedish",displayName:za.sv,feedbackLink:"https://form.asana.com/?k=pjPU1EPH8o9dqTCxlAhwSg&d=15793206719",isPublic:!0,isSupportedBySoyTemplates:!0,isSelectableForUsersWithBetaLanguages:!1,shouldDisplayBetaTopbarWhenSelected:!1,shouldDisplayBetaBadge:!1,shouldDisplayInternalBadge:!1,hasInstantTranslations:!1,displayFeedbackLink:!1,grammaticalListSeparator:", ",sentenceTerminator:".",isTransferableToInvitedUsers:!0,hasLocalizedTermsOfService:!1,languageCodeForWistiaCaptions:"swe",syncPreferenceToMarketingSite:!0,hasGenderedPronouns:!0},"x-asana-accents":{englishName:za["x-asana-accents"],displayName:za["x-asana-accents"],feedbackLink:"https://app.asana.com/0/346162350700782/list",isPublic:!1,isSupportedBySoyTemplates:!1,isSelectableForUsersWithBetaLanguages:!1,shouldDisplayBetaTopbarWhenSelected:!1,shouldDisplayBetaBadge:!1,shouldDisplayInternalBadge:!0,hasInstantTranslations:!0,displayFeedbackLink:!1,grammaticalListSeparator:", ",sentenceTerminator:".",isTransferableToInvitedUsers:!1,hasLocalizedTermsOfService:!1,languageCodeForWistiaCaptions:x,syncPreferenceToMarketingSite:!1,hasGenderedPronouns:!0},"x-asana-ui-expansion":{englishName:za["x-asana-ui-expansion"],displayName:za["x-asana-ui-expansion"],feedbackLink:"https://app.asana.com/0/346162350700782/list",isPublic:!1,isSupportedBySoyTemplates:!1,isSelectableForUsersWithBetaLanguages:!1,shouldDisplayBetaTopbarWhenSelected:!1,shouldDisplayBetaBadge:!1,shouldDisplayInternalBadge:!0,hasInstantTranslations:!0,displayFeedbackLink:!1,grammaticalListSeparator:", ",sentenceTerminator:".",isTransferableToInvitedUsers:!1,hasLocalizedTermsOfService:!1,languageCodeForWistiaCaptions:x,syncPreferenceToMarketingSite:!1,hasGenderedPronouns:!0},"x-asana-attribution":{englishName:za["x-asana-attribution"],displayName:za["x-asana-attribution"],feedbackLink:"https://app.asana.com/0/346162350700782/list",isPublic:!1,isSupportedBySoyTemplates:!1,isSelectableForUsersWithBetaLanguages:!1,shouldDisplayBetaTopbarWhenSelected:!1,shouldDisplayBetaBadge:!1,shouldDisplayInternalBadge:!0,hasInstantTranslations:!0,displayFeedbackLink:!1,grammaticalListSeparator:", ",sentenceTerminator:".",isTransferableToInvitedUsers:!1,hasLocalizedTermsOfService:!1,languageCodeForWistiaCaptions:x,syncPreferenceToMarketingSite:!1,hasGenderedPronouns:!0}}
function Oa(e){return Pa.isSupportedLocale(e)?Ca[e]:Ca.en}function Na(e,t={},n){const r=function(e,t){let n=null
const r="_"+Object.keys(Da(t))[0]
return Object.keys(e).forEach((e=>{var t,o
t=e,o=r,t.indexOf(o)===t.length-o.length&&(n=e.slice(0,-1*r.length))})),((e,t)=>z(e,(()=>{throw new Error(t)})))(n,`pluralization_helper: Expected basePart to not be null. Check if ${t} has quantificationRules defined properly or if strings have missing pluralization variants.`)}(e,n),o=function(e,t){if("number"!=typeof t)throw new Error("Expected cardinality to be a number.")
const n=Da(e)
return function(e){if(0===e.length)throw new Error("Didn't expect this array to be empty.")
if(e.length>1)throw new Error("Didn't expect this array to have more than one element.")
return e[0]}(Object.keys(n).filter((e=>{const r=n[e]
return r(t)})))}(n,t[r])
return function(e,t,n){const r=e[`${t}_${n}`]
return null!=r?r:e[`${t}_other`]}(e,r,o)}function Da(e){if("fr"===e)return{one:e=>e<=1,other:e=>e>1}
if("ja"===e||"ko"===e||"zh"===e||"id"===e)return{other:e=>!0}
if("ru"===e){const e=e=>e%10==1&&e%100!=11,t=e=>e%10>=2&&e%10<=4&&(e%100<12||e%100>14),n=e=>e%10==0||e%10>=5&&e%10<=9||e%100>=11&&e%100<=14
return{one:e,few:t,many:n,other:r=>!e(r)&&!t(r)&&!n(r)}}if("pl"===e){const e=e=>1===e,t=e=>e%10>=2&&e%10<=4&&(e%100<12||e%100>14),n=e=>1!==e&&(e%10==0||e%10==1)||e%10>=5&&e%10<=9||e%100>=12&&e%100<=14
return{one:e,few:t,many:n,other:r=>!e(r)&&!t(r)&&!n(r)}}return{one:e=>1===e,other:e=>1!==e}}class Ra{constructor(){this.previousSibling=null,this.nextSibling=null}}class La extends Ra{constructor(e,t={}){if(!La._tagNameRegex.test(e))throw new Error(`tag name cannot have non-alphanumeric characters or non-underscores: ${e}`)
const n=Object.assign({},t)
Object.keys(t).forEach((e=>{if(!La._attrNameRegex.test(e))throw new Error(`attr name cannot have non-alphanumeric characters or non-underscores: ${e}`)
const r=t[e]
if(null==r)delete n[e]
else if(Wa(r))throw new Error("Attr value cannot contain invalid xml characters")})),super(),this.firstChild=null,this.lastChild=null,this.name=e,this._attrs=n}attrs(){return this._attrs}setAttrs(e){this._attrs=e}append(e){const t=this.lastChild
this.lastChild=e,null!==t?t.nextSibling=e:this.firstChild=e,e.previousSibling=t}forEachChild(e){let t=this.firstChild
for(;null!==t;)e(t),t=t.nextSibling}toString(){const e=["<"+this.name]
return Object.keys(this._attrs).forEach((t=>{e.push(" "+t+'="'+Ma.escape(this._attrs[t])+'"')})),e.push(">"),this.forEachChild((t=>{e.push(t.toString())})),e.push("</"+this.name+">"),e.join("")}}La._tagNameRegex=new RegExp("^[a-zA-Z0-9_]*$"),La._attrNameRegex=new RegExp("^[a-zA-Z0-9_-]*$")
class Ma extends Ra{constructor(e){if(super(),Wa(e))throw new Error("Text cannot contain invalid xml characters")
this.value=e}static escape(e){return e.replace(/&/g,"&amp;").replace(/'/g,"&apos;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}static unescape(e){return e.replace(/&apos;/g,"'").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&amp;/g,"&")}toString(){return Ma.escape(this.value)}}const Fa=/((?:[\0-\x08\x0B\f\x0E-\x1F\uFFFD\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]))/g
function Wa(e){return e.match(Fa)}const Ua="1182088101567272"
function Ba(e){return S({},...e)}class qa{constructor(e){this.tx=(e,t,n)=>this._txImpl(e,null!=t?t:{},n),this._txImpl=(e,t,n)=>{const r=this._lookupWithFallback(e)
if(T(r))return this._handleMissingEntry(e)
this._warnIfDeprecated(e,r)
const o=r[0],i=r[1],a=this._messageForEntry(e,i,t)
switch((null==n?void 0:n.richText)&&(t=this._updateParamsForRichText(e,t)),o){case Aa.Param:const e=this._assembleCurlyBrace(a,t)
return"string"==typeof e?e:Ba(e)
case Aa.Tag:const r=Eo(ko,a),i=function(e){let t=[]
for(let n=0;n<e.length;n++)Array.isArray(e[n])?t=t.concat(e[n]):t.push(e[n])
return t}(r.map((e=>"string"==typeof e?this._assembleCurlyBrace(e,t):this._interpolateTag(e,t))))
return(null==n?void 0:n.richText)?i.join(""):Ba(i)
case Aa.None:return a
default:throw new Error(`Invalid dictionary entry type ${o}`)}},this._dictionary=e.dictionary,this._defaultLocale=Pa.fromString("en"),this._errorNotification=e.errorNotification,this.setLocale(e.locale),this._validateDictionaryPresence()}setLocale(e){this._locale=Pa.fromString(e)||this._defaultLocale,this.config=Oa(this._locale.name)}localeNonReactive(){return this._locale}toString(){return"[LocalizationService]"}_interpolateTag(e,t){return t[e.tagName](To(e.contents,t))}_validateDictionaryPresence(){if(void 0===this._dictionary)throw new Error("Set of language dictionaries is undefined. Cannot display the UI.")
if(0===Object.keys(this._dictionary).length)throw new Error("No language dictionaries provided. Cannot display the UI.")
if(void 0===this._dictionary[this._locale.name]){const e=Object.keys(this._dictionary).join(", ")
this._errorNotification.panic("Localization dictionary mismatch.",{extraMessages:[`Requested locale: ${this._locale.name}`,`Available locales: ${e}`]})}}_assembleCurlyBrace(e,t){return Object.values(t).every((e=>"string"==typeof e||"number"==typeof e))?To(e,t):Eo(wo,e).map((e=>"string"==typeof e?e:t[e.tagName]))}_lookupVariant(e,t,n){return function(e){return void 0!==e&&"variant"in e}(n)?n.variant in t.variants?t.variants[n.variant]:(this._errorNotification.recordWarning(`Specified unknown variant "${n.variant}" for "${e}". Falling back to default.`,{subscriberTaskIds:[Ua]}),t.variants._default):(this._errorNotification.recordWarning(`Didn't specify variant for "${e}". Rendering an empty string.`,{subscriberTaskIds:[Ua]})," ")}_extractStringFromMessage(e,t){return n=e,"string"!=typeof n?Na(e,t,this._locale.name):e
var n}_handleMissingEntry(e){return this._errorNotification.recordWarning("Tried to display translation for unknown key. Rendering an empty string.",{extraMessages:[`key: ${e}`],subscriberTaskIds:[Ua]})," "}_warnIfDeprecated(e,t){const n=t[3]
n&&this._errorNotification.recordWarning("Detected usage of deprecated translation key",{extraMessages:[e]})}_messageForEntry(e,t,n){let r
var o
return o=t,r="object"==typeof o&&"variants"in o?this._lookupVariant(e,t,n):t,this._extractStringFromMessage(r,n)}_lookupKey(e,t){return Ha(e,t,this._dictionary).entry}_lookupWithFallback(e){return this._lookupKey(e,this._locale)||this._lookupKey(e,this._defaultLocale)}_updateParamsForRichText(e,t){const n=function(e,t){const n={}
return yi(e,((e,r,o)=>{n[r]=t(e,r,o)})),n}(t,(e=>"string"==typeof e?Ma.escape(e):e)),r=Eo(ko,e)
return r.forEach((e=>{if("string"!=typeof e){const t=e,r=t.tagName
r in n||(n[r]=e=>`<${r}>${e}</${r}>`)}})),n}}const Ha=(e,t,n)=>{const r=(o=e,ei(o).toString(36))
var o
const i=n[t.name]?n[t.name][r]:void 0
return{hashedKey:r,entry:i}}
class Va{constructor(e){this._webserver_uri=e}webserverURI(){return this._webserver_uri}}class $a extends Ei{constructor(e,t){super((()=>e(t)))}}class Ga{constructor({now:e=Date.now.bind(null),dateNow:t=Date.now.bind(null),setTimeout:n=window.setTimeout.bind(window),clearTimeout:r=window.clearTimeout.bind(window),setInterval:o=window.setInterval.bind(window),clearInterval:i=window.clearInterval.bind(window)}={}){this.now=()=>this._now(),this.dateNow=()=>this._dateNow(),this._now=e,this._dateNow=t,this._setTimeout=n,this._clearTimeout=r,this._setInterval=o,this._clearInterval=i}timeout(e,t,n){const r=this._setTimeout(e,t,n)
return new $a(this._clearTimeout,r)}interval(e,t,n){const r=this._setInterval(e,t,n)
return new $a(this._clearInterval,r)}}class Ka{logPerfEvent(e,t,n){}startPerfEvent(e,t){}endPerfEvent(e,t){}}class Qa{constructor(e){this._enableMarkAndMeasure=e}now(){return this._isPerformanceAvailable()?performance.now():Date.now()}mark(e,t){this._enableMarkAndMeasure()&&this._isPerformanceAvailable()&&j(performance.mark)&&performance.mark(e)}measure(e,t,n){this._enableMarkAndMeasure()&&this._isPerformanceAvailable()&&j(performance.measure)&&(void 0===n?performance.measure(e,t):performance.measure(e,t,n))}_isPerformanceAvailable(){return"undefined"!=typeof performance&&null!==performance}}function Ya(...e){}var Ja=n(873)
const Za=function(){const e=new _i(Ya,{recordWarning:Ya}),t=new Ga,n=new ki,r=Ti.createFromGlobals(n),o=Wi.createFromGlobals(n),i=r.windowObject()
if(!function(e){return!!e.electronInjectedApi}(i)){const e="AsanaDesktopServices instantiation failed: electronInjectedApi not found"
throw n.panic(e),new Error(e)}const a=new Ta,s=new ja({electronInjectedApi:i.electronInjectedApi,loggingService:e,errorNotificationService:n,experimentsService:a,windowService:r,softDeprecatedClientVersion:"0.0.0",hardDeprecatedClientVersion:"0.0.0"}),l=new Li,u=new Ka,c=new Qa((()=>!1)),d=new qa({errorNotification:n,dictionary:Zo,locale:r.navigator().language}),f=new Va(r.location().origin)
return{chronometer:t,errorNotification:n,experiments:a,localization:d,logger:e,browserHost:l,desktop:s,document:o,window:r,perfLogger:u,perfTiming:c,urlService:f}}(),Xa=document.createElement("div")
document.body.appendChild(Xa),Ja.render(Jo({services:Za}),Xa)})()})()
;page_load_bundle_evaluation_failure_checker=false;