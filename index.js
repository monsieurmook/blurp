;var page_load_bundle_evaluation_failure_checker=true;
!function(e){var n={}
function r(t){if(n[t])return n[t].exports
var o=n[t]={i:t,l:!1,exports:{}}
return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=n,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:t})},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e}
return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="",r(r.s=0)}([function(e,n,r){"use strict"
Object.defineProperty(n,"__esModule",{value:!0})
var t=r(1),o=r(2)
const i=process.argv.slice(1).map(e=>e.split("=")),a=new Map
i.forEach(e=>{2===e.length&&a.set(e[0],e[1])})
let s=a.get("version"),d=""
s||(s="unknown",d=`No version found. argv length: ${process.argv.length}. argPairs length: ${i.length}`)
const l={platform:process.platform,version:s,architecture:process.arch,unknownVersionDebugInfo:d,systemVersion:process.getSystemVersion(),getIsFullScreen:()=>Object(t.__awaiter)(void 0,void 0,void 0,function*(){return o.ipcRenderer.invoke("get-is-full-screen")}),registerMenuBarPreferencesHandler:e=>{o.ipcRenderer.removeAllListeners("menu-bar-preferences-click"),o.ipcRenderer.on("menu-bar-preferences-click",e),o.ipcRenderer.send("preferences-handler-registered")},deregisterMenuBarPreferencesHandler:()=>{o.ipcRenderer.removeAllListeners("menu-bar-preferences-click"),o.ipcRenderer.send("preferences-handler-deregistered")},registerFullScreenHandler:e=>{o.ipcRenderer.removeAllListeners("enter-full-screen"),o.ipcRenderer.removeAllListeners("leave-full-screen"),o.ipcRenderer.on("enter-full-screen",()=>e(!0)),o.ipcRenderer.on("leave-full-screen",()=>e(!1))},registerToggleWindowMaximizedHandler:e=>{o.ipcRenderer.removeAllListeners("maximize-window"),o.ipcRenderer.removeAllListeners("unmaximize-window"),o.ipcRenderer.on("maximize-window",()=>e(!0)),o.ipcRenderer.on("unmaximize-window",()=>e(!1))},deregisterToggleWindowMaximizedHandler:()=>{o.ipcRenderer.removeAllListeners("maximize-window"),o.ipcRenderer.removeAllListeners("unmaximize-window")},deregisterFullScreenHandler:()=>{o.ipcRenderer.removeAllListeners("enter-full-screen"),o.ipcRenderer.removeAllListeners("leave-full-screen")},registerMetaFHandler:e=>{o.ipcRenderer.removeAllListeners("meta-f"),o.ipcRenderer.on("meta-f",()=>e())},deregisterMetaFHandler:()=>{o.ipcRenderer.removeAllListeners("meta-f")},registerLunaUiEventHandler:e=>{o.ipcRenderer.removeAllListeners("luna-ui-event"),o.ipcRenderer.on("luna-ui-event",(n,r,t)=>e(r,t)),o.ipcRenderer.send("logging-handlers-registered")},showAppBadgeNotificationDot:()=>{o.ipcRenderer.send("show-app-badge-notification-dot")},hideAppBadgeNotificationDot:()=>{o.ipcRenderer.send("hide-app-badge-notification-dot")},toggleMaximizeWindow:()=>{o.ipcRenderer.send("toggle-maximize-window")},getIsWindowMaximized:()=>Object(t.__awaiter)(void 0,void 0,void 0,function*(){return o.ipcRenderer.invoke("get-is-window-maximized")}),minimizeWindow:()=>{o.ipcRenderer.send("minimize-window")},closeWindow:()=>{o.ipcRenderer.send("close-window")},hideWindow:()=>{o.ipcRenderer.send("hide-window")},initializeLogin:e=>{o.ipcRenderer.send("login-initialized",{email:e})},registerSendClientIdToDesktopStartSessionHandler:e=>{o.ipcRenderer.removeAllListeners("send-client-id-to-desktop-start-session"),o.ipcRenderer.on("send-client-id-to-desktop-start-session",()=>{o.ipcRenderer.send("desktop-start-session",{client_identity_token:e()})})},initiateBrowserLoginFlow:e=>{o.ipcRenderer.send("initiate-browser-login-flow",e)},registerUpdatePendingHandler:e=>{o.ipcRenderer.removeAllListeners("update-pending"),o.ipcRenderer.on("update-pending",(n,r)=>{e(r.newVersion)})},deregisterUpdatePendingHandler:()=>{o.ipcRenderer.removeAllListeners("update-pending")},registerNavigateToTaskHandler:e=>{o.ipcRenderer.removeAllListeners("navigate-to-task-id"),o.ipcRenderer.on("navigate-to-task-id",(n,r)=>e(r.taskId))},registerNavigateToSettingsHandler:e=>{o.ipcRenderer.removeAllListeners("navigate-to-settings-dialogue"),o.ipcRenderer.on("navigate-to-settings-dialogue",()=>e())},getPendingUpdateVersion:()=>Object(t.__awaiter)(void 0,void 0,void 0,function*(){return o.ipcRenderer.invoke("get-pending-update-version")}),downloadUpdateAndRestart:()=>{o.ipcRenderer.send("download-update-and-restart")},restartForUpdate:()=>{o.ipcRenderer.send("restart-for-update")},retryLoadUrl:()=>{o.ipcRenderer.send("retry-load-url")},disableUndoRedoMenuItems:()=>{o.ipcRenderer.send("disable-undo-redo-menu-items")},enableUndoRedoMenuItems:()=>{o.ipcRenderer.send("enable-undo-redo-menu-items")},sendQuickAddTaskId:e=>{o.ipcRenderer.send("set-quick-add-task-id",{taskId:e})},sendSessionId:e=>{o.ipcRenderer.send("set-session-id",{sessionId:e})},openTaskInLastFocusedAsanaWindow:e=>{o.ipcRenderer.send("open-task-in-last-focused-asana-window",{taskId:e})},setGlobalKeyboardShortcutSettings:e=>{o.ipcRenderer.send("set-global-keyboard-shortcut-settings",{areGlobalKeyboardShortcutsEnabled:e})},getGlobalKeyboardShortcutSettings:()=>Object(t.__awaiter)(void 0,void 0,void 0,function*(){var e
const n=yield o.ipcRenderer.invoke("get-desktop-settings","GlobalKeyboardShortcuts")
return null!==(e=null==n?void 0:n.areGlobalKeyboardShortcutsEnabled)&&void 0!==e?e:null}),getDesktopSettings:e=>Object(t.__awaiter)(void 0,void 0,void 0,function*(){return o.ipcRenderer.invoke("get-desktop-settings",e)}),setDesktopSettings:(e,n,r)=>o.ipcRenderer.send("set-desktop-settings",e,n,r),enableTrayApp:()=>Object(t.__awaiter)(void 0,void 0,void 0,function*(){return o.ipcRenderer.send("enable-tray-app")}),maybeCloseQuickAddTaskWindow:()=>{o.ipcRenderer.send("maybe-close-quick-add-task-window")},openSettingsDialogInLastFocusedAsanaWindow:()=>{o.ipcRenderer.send("open-settings-dialog-in-last-focused-asana-window")},openLastFocusedAsanaWindow:()=>{o.ipcRenderer.send("open-last-focused-asana-window")},updateExperimentsData:e=>{o.ipcRenderer.send("update-experiments-data",{experimentsData:e})},registerLoggingHandlers:({lunaUiEventHandler:e,enrollmentEventHandler:n})=>{o.ipcRenderer.removeAllListeners("luna-ui-event"),o.ipcRenderer.on("luna-ui-event",(n,r,t)=>e(r,t)),o.ipcRenderer.removeAllListeners("log-enrollment-events"),o.ipcRenderer.on("log-enrollment-events",(e,r)=>n(r.enrollmentEvents)),o.ipcRenderer.send("logging-handlers-registered")},getIsKeyAsanaWindow:()=>Object(t.__awaiter)(void 0,void 0,void 0,function*(){return o.ipcRenderer.invoke("get-is-key-asana-window")}),registerSetIsKeyAsanaWindowHandler:e=>{o.ipcRenderer.removeAllListeners("set-is-key-asana-window"),o.ipcRenderer.on("set-is-key-asana-window",(n,r)=>{e(r.isKeyAsanaWindow)})},deregisterSetIsKeyAsanaWindowHandler:()=>{o.ipcRenderer.removeAllListeners("set-is-key-asana-window")},destroyTrayApp:()=>o.ipcRenderer.send("destroy-tray-window"),setTrayWindowDisplay:e=>o.ipcRenderer.send("set-tray-window-display",{displayType:e}),registerTrayWindowDisplayChangedHandler:e=>{o.ipcRenderer.removeAllListeners("tray-window-display-changed"),o.ipcRenderer.on("tray-window-display-changed",(n,r)=>e(r))},deregisterTrayWindowDisplayChangedHandler:()=>{o.ipcRenderer.removeAllListeners("tray-window-display-changed")},showTrayWindow:()=>o.ipcRenderer.send("show-tray-window"),playTimerSound:()=>o.ipcRenderer.send("play-timer-sound"),reloadTrayWindow:()=>o.ipcRenderer.send("reload-tray-window")}
o.contextBridge.exposeInMainWorld("electronInjectedApi",l)},function(e,n,r){var t,o,i,a,s,d,l,c,u,p,f,y,w,v,g,m,b,h,_,R,k,O,A,S,x,P
!function(r){var i="object"==typeof global?global:"object"==typeof self?self:"object"==typeof this?this:{}
function a(e,n){return e!==i&&("function"==typeof Object.create?Object.defineProperty(e,"__esModule",{value:!0}):e.__esModule=!0),function(r,t){return e[r]=n?n(r,t):t}}t=[n],o=function(e){r(a(i,a(e)))}.apply(n,t),void 0===o||(e.exports=o)}(function(e){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}
i=function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null")
function t(){this.constructor=e}n(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)},a=Object.assign||function(e){for(var n,r=1,t=arguments.length;r<t;r++)for(var o in n=arguments[r],n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])
return e},s=function(e,n){var r={}
for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t])
if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0
for(t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(r[t[o]]=e[t[o]])}return r},d=function(e,n,r,t){var o,i=arguments.length,a=i<3?n:null===t?t=Object.getOwnPropertyDescriptor(n,r):t
if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,n,r,t)
else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(n,r,a):o(n,r))||a)
return i>3&&a&&Object.defineProperty(n,r,a),a},l=function(e,n){return function(r,t){n(r,t,e)}},c=function(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)},u=function(e,n,r,t){return new(r||(r=Promise))(function(o,i){function a(e){try{d(t.next(e))}catch(e){i(e)}}function s(e){try{d(t.throw(e))}catch(e){i(e)}}function d(e){var n
e.done?o(e.value):(n=e.value,n instanceof r?n:new r(function(e){e(n)})).then(a,s)}d((t=t.apply(e,n||[])).next())})},p=function(e,n){var r,t,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1]
return o[1]},trys:[],ops:[]}
return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i
function s(e){return function(n){return d([e,n])}}function d(i){if(r)throw new TypeError("Generator is already executing.")
for(;a;)try{if(r=1,t&&(o=2&i[0]?t.return:i[0]?t.throw||((o=t.return)&&o.call(t),0):t.next)&&!(o=o.call(t,i[1])).done)return o
switch(t=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i
break
case 4:return a.label++,{value:i[1],done:!1}
case 5:a.label++,t=i[1],i=[0]
continue
case 7:i=a.ops.pop(),a.trys.pop()
continue
default:if(o=a.trys,!(o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0
continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1]
break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i
break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i)
break}o[2]&&a.ops.pop(),a.trys.pop()
continue}i=n.call(e,a)}catch(e){i=[6,e],t=0}finally{r=o=0}if(5&i[0])throw i[1]
return{value:i[0]?i[1]:void 0,done:!0}}},f=function(e,n){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(n,r)||P(n,e,r)},P=Object.create?function(e,n,r,t){void 0===t&&(t=r)
var o=Object.getOwnPropertyDescriptor(n,r)
o&&("get"in o?n.__esModule:!o.writable&&!o.configurable)||(o={enumerable:!0,get:function(){return n[r]}}),Object.defineProperty(e,t,o)}:function(e,n,r,t){void 0===t&&(t=r),e[t]=n[r]},y=function(e){var n="function"==typeof Symbol&&Symbol.iterator,r=n&&e[n],t=0
if(r)return r.call(e)
if(e&&"number"==typeof e.length)return{next:function(){return e&&t>=e.length&&(e=void 0),{value:e&&e[t++],done:!e}}}
throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")},w=function(e,n){var r="function"==typeof Symbol&&e[Symbol.iterator]
if(!r)return e
var t,o,i=r.call(e),a=[]
try{for(;(void 0===n||n-- >0)&&!(t=i.next()).done;)a.push(t.value)}catch(e){o={error:e}}finally{try{t&&!t.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return a},v=function(){for(var e=[],n=0;n<arguments.length;n++)e=e.concat(w(arguments[n]))
return e},_spreadArrays=function(){for(var e=0,n=0,r=arguments.length;n<r;n++)e+=arguments[n]?arguments[n].length:0
var t=Array(e),o=0
for(n=0;n<r;n++){var i=arguments[n]
if(i)for(j=0,jl=i.length;j<jl;j++,o++)t[o]=i[j]}return t},g=function(e,n){if(!n)return e
for(var r=0,t=n.length,o=e.length;r<t;r++,o++)e[o]=n[r]
return e},m=function(e){return this instanceof m?(this.v=e,this):new m(e)},b=function(e,n,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.")
var t,o=r.apply(e,n||[]),i=[]
return t={},a("next"),a("throw"),a("return"),t[Symbol.asyncIterator]=function(){return this},t
function a(e){o[e]&&(t[e]=function(n){return new Promise(function(r,t){i.push([e,n,r,t])>1||s(e,n)})})}function s(e,n){try{r=o[e](n),r.value instanceof m?Promise.resolve(r.value.v).then(d,l):c(i[0][2],r)}catch(e){c(i[0][3],e)}var r}function d(e){s("next",e)}function l(e){s("throw",e)}function c(e,n){e(n),i.shift(),i.length&&s(i[0][0],i[0][1])}},h=function(e){var n,r
return n={},t("next"),t("throw",function(e){throw e}),t("return"),n[Symbol.iterator]=function(){return this},n
function t(t,o){n[t]=e[t]?function(n){return(r=!r)?{value:m(e[t](n)),done:"return"===t}:o?o(n):n}:o}},_=function(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.")
var n,r=e[Symbol.asyncIterator]
return r?r.call(e):(e=y(e),n={},t("next"),t("throw"),t("return"),n[Symbol.asyncIterator]=function(){return this},n)
function t(r){n[r]=e[r]&&function(n){return new Promise(function(t,i){n=e[r](n),o(t,i,n.done,n.value)})}}function o(e,n,r,t){Promise.resolve(t).then(function(n){e({value:n,done:r})},n)}},R=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e}
var r=Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n}
k=function(e){if(e&&e.__esModule)return e
var n={}
if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&P(n,e,t)
return r(n,e),n},O=function(e){return e&&e.__esModule?e:{default:e}},A=function(e,n,r,t){if("a"===r&&!t)throw new TypeError("Private accessor was defined without a getter")
if("function"==typeof n?e!==n||!t:!n.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it")
return"m"===r?t:"a"===r?t.call(e):t?t.value:n.get(e)},S=function(e,n,r,t,o){if("m"===t)throw new TypeError("Private method is not writable")
if("a"===t&&!o)throw new TypeError("Private accessor was defined without a setter")
if("function"==typeof n?e!==n||!o:!n.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it")
return"a"===t?o.call(e,r):o?o.value=r:n.set(e,r),r},x=function(e,n){if(null===n||"object"!=typeof n&&"function"!=typeof n)throw new TypeError("Cannot use 'in' operator on non-object")
return"function"==typeof e?n===e:e.has(n)},e("__extends",i),e("__assign",a),e("__rest",s),e("__decorate",d),e("__param",l),e("__metadata",c),e("__awaiter",u),e("__generator",p),e("__exportStar",f),e("__createBinding",P),e("__values",y),e("__read",w),e("__spread",v),e("__spreadArrays",void 0),e("__spreadArray",g),e("__await",m),e("__asyncGenerator",b),e("__asyncDelegator",h),e("__asyncValues",_),e("__makeTemplateObject",R),e("__importStar",k),e("__importDefault",O),e("__classPrivateFieldGet",A),e("__classPrivateFieldSet",S),e("__classPrivateFieldIn",x)})},function(e,n){e.exports=require("electron")}])
;page_load_bundle_evaluation_failure_checker=false;