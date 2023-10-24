"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2950],{27856:function(e,n,l){l.d(n,{u:function(){return K}});var m,h,_,b,y=l(2265),x=l.t(y,2);function class_names_t(...e){return Array.from(new Set(e.flatMap(e=>"string"==typeof e?e.split(" "):[]))).filter(Boolean).join(" ")}function match_u(e,n,...l){if(e in n){let m=n[e];return"function"==typeof m?m(...l):m}let m=Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(m,match_u),m}var E=((m=E||{})[m.None=0]="None",m[m.RenderStrategy=1]="RenderStrategy",m[m.Static=2]="Static",m),w=((h=w||{})[h.Unmount=0]="Unmount",h[h.Hidden=1]="Hidden",h);function X({ourProps:e,theirProps:n,slot:l,defaultTag:m,features:h,visible:_=!0,name:b}){let y=N(n,e);if(_)return c(y,l,m,b);let x=null!=h?h:0;if(2&x){let{static:e=!1,...n}=y;if(e)return c(n,l,m,b)}if(1&x){let{unmount:e=!0,...n}=y;return match_u(e?0:1,{0:()=>null,1:()=>c({...n,hidden:!0,style:{display:"none"}},l,m,b)})}return c(y,l,m,b)}function c(e,n={},l,m){let{as:h=l,children:_,refName:b="ref",...x}=g(e,["unmount","static"]),E=void 0!==e.ref?{[b]:e.ref}:{},w="function"==typeof _?_(n):_;"className"in x&&x.className&&"function"==typeof x.className&&(x.className=x.className(n));let S={};if(n){let e=!1,l=[];for(let[m,h]of Object.entries(n))"boolean"==typeof h&&(e=!0),!0===h&&l.push(m);e&&(S["data-headlessui-state"]=l.join(" "))}if(h===y.Fragment&&Object.keys(R(x)).length>0){if(!(0,y.isValidElement)(w)||Array.isArray(w)&&w.length>1)throw Error(['Passing props on "Fragment"!',"",`The current component <${m} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(x).map(e=>`  - ${e}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(e=>`  - ${e}`).join(`
`)].join(`
`));let e=w.props,n="function"==typeof(null==e?void 0:e.className)?(...n)=>class_names_t(null==e?void 0:e.className(...n),x.className):class_names_t(null==e?void 0:e.className,x.className),l=n?{className:n}:{};return(0,y.cloneElement)(w,Object.assign({},N(w.props,R(g(x,["ref"]))),S,E,function(...e){return{ref:e.every(e=>null==e)?void 0:n=>{for(let l of e)null!=l&&("function"==typeof l?l(n):l.current=n)}}}(w.ref,E.ref),l))}return(0,y.createElement)(h,Object.assign({},g(x,["ref"]),h!==y.Fragment&&E,h!==y.Fragment&&S),w)}function N(...e){if(0===e.length)return{};if(1===e.length)return e[0];let n={},l={};for(let m of e)for(let e in m)e.startsWith("on")&&"function"==typeof m[e]?(null!=l[e]||(l[e]=[]),l[e].push(m[e])):n[e]=m[e];if(n.disabled||n["aria-disabled"])return Object.assign(n,Object.fromEntries(Object.keys(l).map(e=>[e,void 0])));for(let e in l)Object.assign(n,{[e](n,...m){for(let h of l[e]){if((n instanceof Event||(null==n?void 0:n.nativeEvent)instanceof Event)&&n.defaultPrevented)return;h(n,...m)}}});return n}function D(e){var n;return Object.assign((0,y.forwardRef)(e),{displayName:null!=(n=e.displayName)?n:e.name})}function R(e){let n=Object.assign({},e);for(let e in n)void 0===n[e]&&delete n[e];return n}function g(e,n=[]){let l=Object.assign({},e);for(let e of n)e in l&&delete l[e];return l}let S=(0,y.createContext)(null);S.displayName="OpenClosedContext";var O=((_=O||{})[_.Open=1]="Open",_[_.Closed=2]="Closed",_[_.Closing=4]="Closing",_[_.Opening=8]="Opening",_);function C(){return(0,y.useContext)(S)}function open_closed_c({value:e,children:n}){return y.createElement(S.Provider,{value:e},n)}var F=Object.defineProperty,d=(e,n,l)=>n in e?F(e,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[n]=l,r=(e,n,l)=>(d(e,"symbol"!=typeof n?n+"":n,l),l);let k=new class{constructor(){r(this,"current",this.detect()),r(this,"handoffState","pending"),r(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}},use_iso_morphic_effect_l=(e,n)=>{k.isServer?(0,y.useEffect)(e,n):(0,y.useLayoutEffect)(e,n)};function f(){let e=(0,y.useRef)(!1);return use_iso_morphic_effect_l(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function use_latest_value_s(e){let n=(0,y.useRef)(e);return use_iso_morphic_effect_l(()=>{n.current=e},[e]),n}function use_server_handoff_complete_l(){let e;let n=(e="undefined"==typeof document,(0,x.useSyncExternalStore)(()=>()=>{},()=>!1,()=>!e)),[l,m]=y.useState(k.isHandoffComplete);return l&&!1===k.isHandoffComplete&&m(!1),y.useEffect(()=>{!0!==l&&m(!0)},[l]),y.useEffect(()=>k.handoff(),[]),!n&&l}let use_event_o=function(e){let n=use_latest_value_s(e);return y.useCallback((...e)=>n.current(...e),[n])},P=Symbol();function use_sync_refs_y(...e){let n=(0,y.useRef)(e);(0,y.useEffect)(()=>{n.current=e},[e]);let l=use_event_o(e=>{for(let l of n.current)null!=l&&("function"==typeof l?l(e):l.current=e)});return e.every(e=>null==e||(null==e?void 0:e[P]))?void 0:l}function disposables_o(){let e=[],n={addEventListener:(e,l,m,h)=>(e.addEventListener(l,m,h),n.add(()=>e.removeEventListener(l,m,h))),requestAnimationFrame(...e){let l=requestAnimationFrame(...e);return n.add(()=>cancelAnimationFrame(l))},nextFrame:(...e)=>n.requestAnimationFrame(()=>n.requestAnimationFrame(...e)),setTimeout(...e){let l=setTimeout(...e);return n.add(()=>clearTimeout(l))},microTask(...e){var l;let m={current:!0};return l=()=>{m.current&&e[0]()},"function"==typeof queueMicrotask?queueMicrotask(l):Promise.resolve().then(l).catch(e=>setTimeout(()=>{throw e})),n.add(()=>{m.current=!1})},style(e,n,l){let m=e.style.getPropertyValue(n);return Object.assign(e.style,{[n]:l}),this.add(()=>{Object.assign(e.style,{[n]:m})})},group(e){let n=disposables_o();return e(n),this.add(()=>n.dispose())},add:n=>(e.push(n),()=>{let l=e.indexOf(n);if(l>=0)for(let n of e.splice(l,1))n()}),dispose(){for(let n of e.splice(0))n()}};return n}function transition_g(e,...n){e&&n.length>0&&e.classList.add(...n)}function v(e,...n){e&&n.length>0&&e.classList.remove(...n)}function use_disposables_p(){let[e]=(0,y.useState)(disposables_o);return(0,y.useEffect)(()=>()=>e.dispose(),[e]),e}function transition_S(e=""){return e.split(" ").filter(e=>e.trim().length>1)}let A=(0,y.createContext)(null);A.displayName="TransitionContext";var L=((b=L||{}).Visible="visible",b.Hidden="hidden",b);let H=(0,y.createContext)(null);function U(e){return"children"in e?U(e.children):e.current.filter(({el:e})=>null!==e.current).filter(({state:e})=>"visible"===e).length>0}function oe(e,n){let l=use_latest_value_s(e),m=(0,y.useRef)([]),h=f(),_=use_disposables_p(),b=use_event_o((e,n=w.Hidden)=>{let b=m.current.findIndex(({el:n})=>n===e);-1!==b&&(match_u(n,{[w.Unmount](){m.current.splice(b,1)},[w.Hidden](){m.current[b].state="hidden"}}),_.microTask(()=>{var e;!U(m)&&h.current&&(null==(e=l.current)||e.call(l))}))}),x=use_event_o(e=>{let n=m.current.find(({el:n})=>n===e);return n?"visible"!==n.state&&(n.state="visible"):m.current.push({el:e,state:"visible"}),()=>b(e,w.Unmount)}),E=(0,y.useRef)([]),S=(0,y.useRef)(Promise.resolve()),O=(0,y.useRef)({enter:[],leave:[],idle:[]}),F=use_event_o((e,l,m)=>{E.current.splice(0),n&&(n.chains.current[l]=n.chains.current[l].filter(([n])=>n!==e)),null==n||n.chains.current[l].push([e,new Promise(e=>{E.current.push(e)})]),null==n||n.chains.current[l].push([e,new Promise(e=>{Promise.all(O.current[l].map(([e,n])=>n)).then(()=>e())})]),"enter"===l?S.current=S.current.then(()=>null==n?void 0:n.wait.current).then(()=>m(l)):m(l)}),k=use_event_o((e,n,l)=>{Promise.all(O.current[n].splice(0).map(([e,n])=>n)).then(()=>{var e;null==(e=E.current.shift())||e()}).then(()=>l(n))});return(0,y.useMemo)(()=>({children:m,register:x,unregister:b,onStart:F,onStop:k,wait:S,chains:O}),[x,b,m,F,k,O,S])}function xe(){}H.displayName="NestingContext";let B=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function se(e){var n;let l={};for(let m of B)l[m]=null!=(n=e[m])?n:xe;return l}let z=E.RenderStrategy,q=D(function(e,n){let{show:l,appear:m=!1,unmount:h=!0,..._}=e,b=(0,y.useRef)(null),x=use_sync_refs_y(b,n);use_server_handoff_complete_l();let E=C();if(void 0===l&&null!==E&&(l=(E&O.Open)===O.Open),![!0,!1].includes(l))throw Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[w,S]=(0,y.useState)(l?"visible":"hidden"),F=oe(()=>{S("hidden")}),[k,P]=(0,y.useState)(!0),L=(0,y.useRef)([l]);use_iso_morphic_effect_l(()=>{!1!==k&&L.current[L.current.length-1]!==l&&(L.current.push(l),P(!1))},[L,l]);let B=(0,y.useMemo)(()=>({show:l,appear:m,initial:k}),[l,m,k]);(0,y.useEffect)(()=>{if(l)S("visible");else if(U(F)){let e=b.current;if(!e)return;let n=e.getBoundingClientRect();0===n.x&&0===n.y&&0===n.width&&0===n.height&&S("hidden")}else S("hidden")},[l,F]);let q={unmount:h},Y=use_event_o(()=>{var n;k&&P(!1),null==(n=e.beforeEnter)||n.call(e)}),K=use_event_o(()=>{var n;k&&P(!1),null==(n=e.beforeLeave)||n.call(e)});return y.createElement(H.Provider,{value:F},y.createElement(A.Provider,{value:B},X({ourProps:{...q,as:y.Fragment,children:y.createElement(V,{ref:x,...q,..._,beforeEnter:Y,beforeLeave:K})},theirProps:{},defaultTag:y.Fragment,features:z,visible:"visible"===w,name:"Transition"})))}),V=D(function(e,n){var l,m,h;let _;let{beforeEnter:b,afterEnter:x,beforeLeave:E,afterLeave:S,enter:F,enterFrom:k,enterTo:P,entered:L,leave:B,leaveFrom:q,leaveTo:V,...Y}=e,K=(0,y.useRef)(null),Q=use_sync_refs_y(K,n),et=null==(l=Y.unmount)||l?w.Unmount:w.Hidden,{show:er,appear:en,initial:es}=function(){let e=(0,y.useContext)(A);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),[ei,ea]=(0,y.useState)(er?"visible":"hidden"),eo=function(){let e=(0,y.useContext)(H);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),{register:el,unregister:eu}=eo;(0,y.useEffect)(()=>el(K),[el,K]),(0,y.useEffect)(()=>{if(et===w.Hidden&&K.current){if(er&&"visible"!==ei){ea("visible");return}return match_u(ei,{hidden:()=>eu(K),visible:()=>el(K)})}},[ei,K,el,eu,er,et]);let ef=use_latest_value_s({base:transition_S(Y.className),enter:transition_S(F),enterFrom:transition_S(k),enterTo:transition_S(P),entered:transition_S(L),leave:transition_S(B),leaveFrom:transition_S(q),leaveTo:transition_S(V)}),ec=(h={beforeEnter:b,afterEnter:x,beforeLeave:E,afterLeave:S},_=(0,y.useRef)(se(h)),(0,y.useEffect)(()=>{_.current=se(h)},[h]),_),ed=use_server_handoff_complete_l();(0,y.useEffect)(()=>{if(ed&&"visible"===ei&&null===K.current)throw Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[K,ei,ed]);let ep=en&&er&&es,em=ed&&(!es||en)?er?"enter":"leave":"idle",eh=function(e=0){let[n,l]=(0,y.useState)(e),m=f(),h=(0,y.useCallback)(e=>{m.current&&l(n=>n|e)},[n,m]),_=(0,y.useCallback)(e=>!!(n&e),[n]);return{flags:n,addFlag:h,hasFlag:_,removeFlag:(0,y.useCallback)(e=>{m.current&&l(n=>n&~e)},[l,m]),toggleFlag:(0,y.useCallback)(e=>{m.current&&l(n=>n^e)},[l])}}(0),ev=use_event_o(e=>match_u(e,{enter:()=>{eh.addFlag(O.Opening),ec.current.beforeEnter()},leave:()=>{eh.addFlag(O.Closing),ec.current.beforeLeave()},idle:()=>{}})),eg=use_event_o(e=>match_u(e,{enter:()=>{eh.removeFlag(O.Opening),ec.current.afterEnter()},leave:()=>{eh.removeFlag(O.Closing),ec.current.afterLeave()},idle:()=>{}})),e_=oe(()=>{ea("hidden"),eu(K)},eo);!function({immediate:e,container:n,direction:l,classes:m,onStart:h,onStop:_}){let b=f(),y=use_disposables_p(),x=use_latest_value_s(l);use_iso_morphic_effect_l(()=>{e&&(x.current="enter")},[e]),use_iso_morphic_effect_l(()=>{let e=disposables_o();y.add(e.dispose);let l=n.current;if(l&&"idle"!==x.current&&b.current){var E,w,S;let n,b,y,O,F,k,P;return e.dispose(),h.current(x.current),e.add((E=m.current,w="enter"===x.current,S=()=>{e.dispose(),_.current(x.current)},b=w?"enter":"leave",y=disposables_o(),O=void 0!==S?(n={called:!1},(...e)=>{if(!n.called)return n.called=!0,S(...e)}):()=>{},"enter"===b&&(l.removeAttribute("hidden"),l.style.display=""),F=match_u(b,{enter:()=>E.enter,leave:()=>E.leave}),k=match_u(b,{enter:()=>E.enterTo,leave:()=>E.leaveTo}),P=match_u(b,{enter:()=>E.enterFrom,leave:()=>E.leaveFrom}),v(l,...E.base,...E.enter,...E.enterTo,...E.enterFrom,...E.leave,...E.leaveFrom,...E.leaveTo,...E.entered),transition_g(l,...E.base,...F,...P),y.nextFrame(()=>{v(l,...E.base,...F,...P),transition_g(l,...E.base,...F,...k),function(e,n){let l=disposables_o();if(!e)return l.dispose;let{transitionDuration:m,transitionDelay:h}=getComputedStyle(e),[_,b]=[m,h].map(e=>{let[n=0]=e.split(",").filter(Boolean).map(e=>e.includes("ms")?parseFloat(e):1e3*parseFloat(e)).sort((e,n)=>n-e);return n}),y=_+b;if(0!==y){l.group(l=>{l.setTimeout(()=>{n(),l.dispose()},y),l.addEventListener(e,"transitionrun",e=>{e.target===e.currentTarget&&l.dispose()})});let m=l.addEventListener(e,"transitionend",e=>{e.target===e.currentTarget&&(n(),m())})}else n();l.add(()=>n()),l.dispose}(l,()=>(v(l,...E.base,...F),transition_g(l,...E.base,...E.entered),O()))}),y.dispose)),e.dispose}},[l])}({immediate:ep,container:K,classes:ef,direction:em,onStart:use_latest_value_s(e=>{e_.onStart(K,e,ev)}),onStop:use_latest_value_s(e=>{e_.onStop(K,e,eg),"leave"!==e||U(e_)||(ea("hidden"),eu(K))})});let eb=Y;return ep?eb={...eb,className:class_names_t(Y.className,...ef.current.enter,...ef.current.enterFrom)}:(eb.className=class_names_t(Y.className,null==(m=K.current)?void 0:m.className),""===eb.className&&delete eb.className),y.createElement(H.Provider,{value:e_},y.createElement(open_closed_c,{value:match_u(ei,{visible:O.Open,hidden:O.Closed})|eh.flags},X({ourProps:{ref:Q},theirProps:eb,defaultTag:"div",features:z,visible:"visible"===ei,name:"Transition.Child"})))}),Y=D(function(e,n){let l=null!==(0,y.useContext)(A),m=null!==C();return y.createElement(y.Fragment,null,!l&&m?y.createElement(q,{ref:n,...e}):y.createElement(V,{ref:n,...e}))}),K=Object.assign(q,{Child:Y,Root:q})},40210:function(e,n,l){l.d(n,{Bz:function(){return m}}),BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),BigInt("1000000000000000000");let m=BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");BigInt("0x8000000000000000000000000000000000000000000000000000000000000000"),BigInt(-1),BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff")},5925:function(e,n,l){let m,h;l.r(n),l.d(n,{CheckmarkIcon:function(){return es},ErrorIcon:function(){return K},LoaderIcon:function(){return et},ToastBar:function(){return ec},ToastIcon:function(){return M},Toaster:function(){return Ie},default:function(){return ep},resolveValue:function(){return T},toast:function(){return dist_n},useToaster:function(){return D},useToasterStore:function(){return I}});var _,b=l(2265);let y={data:""},t=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||y,x=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,E=/\/\*[^]*?\*\/|  +/g,w=/\n+/g,o=(e,n)=>{let l="",m="",h="";for(let _ in e){let b=e[_];"@"==_[0]?"i"==_[1]?l=_+" "+b+";":m+="f"==_[1]?o(b,_):_+"{"+o(b,"k"==_[1]?"":n)+"}":"object"==typeof b?m+=o(b,n?n.replace(/([^,])+/g,e=>_.replace(/(^:.*)|([^,])+/g,n=>/&/.test(n)?n.replace(/&/g,e):e?e+" "+n:n)):_):null!=b&&(_=/^--/.test(_)?_:_.replace(/[A-Z]/g,"-$&").toLowerCase(),h+=o.p?o.p(_,b):_+":"+b+";")}return l+(n&&h?n+"{"+h+"}":h)+m},S={},s=e=>{if("object"==typeof e){let n="";for(let l in e)n+=l+s(e[l]);return n}return e},i=(e,n,l,m,h)=>{var _;let b=s(e),y=S[b]||(S[b]=(e=>{let n=0,l=11;for(;n<e.length;)l=101*l+e.charCodeAt(n++)>>>0;return"go"+l})(b));if(!S[y]){let n=b!==e?e:(e=>{let n,l,m=[{}];for(;n=x.exec(e.replace(E,""));)n[4]?m.shift():n[3]?(l=n[3].replace(w," ").trim(),m.unshift(m[0][l]=m[0][l]||{})):m[0][n[1]]=n[2].replace(w," ").trim();return m[0]})(e);S[y]=o(h?{["@keyframes "+y]:n}:n,l?"":"."+y)}let O=l&&S.g?S.g:null;return l&&(S.g=S[y]),_=S[y],O?n.data=n.data.replace(O,_):-1===n.data.indexOf(_)&&(n.data=m?_+n.data:n.data+_),y},p=(e,n,l)=>e.reduce((e,m,h)=>{let _=n[h];if(_&&_.call){let e=_(l),n=e&&e.props&&e.props.className||/^go/.test(e)&&e;_=n?"."+n:e&&"object"==typeof e?e.props?"":o(e,""):!1===e?"":e}return e+m+(null==_?"":_)},"");function u(e){let n=this||{},l=e.call?e(n.p):e;return i(l.unshift?l.raw?p(l,[].slice.call(arguments,1),n.p):l.reduce((e,l)=>Object.assign(e,l&&l.call?l(n.p):l),{}):l,t(n.target),n.g,n.o,n.k)}u.bind({g:1});let O,F,k,P=u.bind({k:1});function j(e,n){let l=this||{};return function(){let m=arguments;function a(h,_){let b=Object.assign({},h),y=b.className||a.className;l.p=Object.assign({theme:F&&F()},b),l.o=/ *go\d+/.test(y),b.className=u.apply(l,m)+(y?" "+y:""),n&&(b.ref=_);let x=e;return e[0]&&(x=b.as||e,delete b.as),k&&x[0]&&k(b),O(x,b)}return n?n(a):a}}var W=e=>"function"==typeof e,T=(e,n)=>W(e)?e(n):e,A=(m=0,()=>(++m).toString()),dist_b=()=>{if(void 0===h&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");h=!e||e.matches}return h},L=new Map,$=e=>{if(L.has(e))return;let n=setTimeout(()=>{L.delete(e),dist_u({type:4,toastId:e})},1e3);L.set(e,n)},J=e=>{let n=L.get(e);n&&clearTimeout(n)},v=(e,n)=>{switch(n.type){case 0:return{...e,toasts:[n.toast,...e.toasts].slice(0,20)};case 1:return n.toast.id&&J(n.toast.id),{...e,toasts:e.toasts.map(e=>e.id===n.toast.id?{...e,...n.toast}:e)};case 2:let{toast:l}=n;return e.toasts.find(e=>e.id===l.id)?v(e,{type:1,toast:l}):v(e,{type:0,toast:l});case 3:let{toastId:m}=n;return m?$(m):e.toasts.forEach(e=>{$(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===m||void 0===m?{...e,visible:!1}:e)};case 4:return void 0===n.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==n.toastId)};case 5:return{...e,pausedAt:n.time};case 6:let h=n.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+h}))}}},H=[],B={toasts:[],pausedAt:void 0},dist_u=e=>{B=v(B,e),H.forEach(e=>{e(B)})},z={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},I=(e={})=>{let[n,l]=(0,b.useState)(B);(0,b.useEffect)(()=>(H.push(l),()=>{let e=H.indexOf(l);e>-1&&H.splice(e,1)}),[n]);let m=n.toasts.map(n=>{var l,m;return{...e,...e[n.type],...n,duration:n.duration||(null==(l=e[n.type])?void 0:l.duration)||(null==e?void 0:e.duration)||z[n.type],style:{...e.style,...null==(m=e[n.type])?void 0:m.style,...n.style}}});return{...n,toasts:m}},G=(e,n="blank",l)=>({createdAt:Date.now(),visible:!0,type:n,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...l,id:(null==l?void 0:l.id)||A()}),dist_h=e=>(n,l)=>{let m=G(n,e,l);return dist_u({type:2,toast:m}),m.id},dist_n=(e,n)=>dist_h("blank")(e,n);dist_n.error=dist_h("error"),dist_n.success=dist_h("success"),dist_n.loading=dist_h("loading"),dist_n.custom=dist_h("custom"),dist_n.dismiss=e=>{dist_u({type:3,toastId:e})},dist_n.remove=e=>dist_u({type:4,toastId:e}),dist_n.promise=(e,n,l)=>{let m=dist_n.loading(n.loading,{...l,...null==l?void 0:l.loading});return e.then(e=>(dist_n.success(T(n.success,e),{id:m,...l,...null==l?void 0:l.success}),e)).catch(e=>{dist_n.error(T(n.error,e),{id:m,...l,...null==l?void 0:l.error})}),e};var Z=(e,n)=>{dist_u({type:1,toast:{id:e,height:n}})},ee=()=>{dist_u({type:5,time:Date.now()})},D=e=>{let{toasts:n,pausedAt:l}=I(e);(0,b.useEffect)(()=>{if(l)return;let e=Date.now(),m=n.map(n=>{if(n.duration===1/0)return;let l=(n.duration||0)+n.pauseDuration-(e-n.createdAt);if(l<0){n.visible&&dist_n.dismiss(n.id);return}return setTimeout(()=>dist_n.dismiss(n.id),l)});return()=>{m.forEach(e=>e&&clearTimeout(e))}},[n,l]);let m=(0,b.useCallback)(()=>{l&&dist_u({type:6,time:Date.now()})},[l]),h=(0,b.useCallback)((e,l)=>{let{reverseOrder:m=!1,gutter:h=8,defaultPosition:_}=l||{},b=n.filter(n=>(n.position||_)===(e.position||_)&&n.height),y=b.findIndex(n=>n.id===e.id),x=b.filter((e,n)=>n<y&&e.visible).length;return b.filter(e=>e.visible).slice(...m?[x+1]:[0,x]).reduce((e,n)=>e+(n.height||0)+h,0)},[n]);return{toasts:n,handlers:{updateHeight:Z,startPause:ee,endPause:m,calculateOffset:h}}},q=P`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,V=P`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Y=P`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,K=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${q} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${V} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Y} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Q=P`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,et=j("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${Q} 1s linear infinite;
`,er=P`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,en=P`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,es=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${er} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${en} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,ei=j("div")`
  position: absolute;
`,ea=j("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,eo=P`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,el=j("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${eo} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,M=({toast:e})=>{let{icon:n,type:l,iconTheme:m}=e;return void 0!==n?"string"==typeof n?b.createElement(el,null,n):n:"blank"===l?null:b.createElement(ea,null,b.createElement(et,{...m}),"loading"!==l&&b.createElement(ei,null,"error"===l?b.createElement(K,{...m}):b.createElement(es,{...m})))},ye=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ge=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,eu=j("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,ef=j("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Ae=(e,n)=>{let l=e.includes("top")?1:-1,[m,h]=dist_b()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[ye(l),ge(l)];return{animation:n?`${P(m)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${P(h)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ec=b.memo(({toast:e,position:n,style:l,children:m})=>{let h=e.height?Ae(e.position||n||"top-center",e.visible):{opacity:0},_=b.createElement(M,{toast:e}),y=b.createElement(ef,{...e.ariaProps},T(e.message,e));return b.createElement(eu,{className:e.className,style:{...h,...l,...e.style}},"function"==typeof m?m({icon:_,message:y}):b.createElement(b.Fragment,null,_,y))});_=b.createElement,o.p=void 0,O=_,F=void 0,k=void 0;var Ee=({id:e,className:n,style:l,onHeightUpdate:m,children:h})=>{let _=b.useCallback(n=>{if(n){let i=()=>{m(e,n.getBoundingClientRect().height)};i(),new MutationObserver(i).observe(n,{subtree:!0,childList:!0,characterData:!0})}},[e,m]);return b.createElement("div",{ref:_,className:n,style:l},h)},Re=(e,n)=>{let l=e.includes("top"),m=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:dist_b()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${n*(l?1:-1)}px)`,...l?{top:0}:{bottom:0},...m}},ed=u`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Ie=({reverseOrder:e,position:n="top-center",toastOptions:l,gutter:m,children:h,containerStyle:_,containerClassName:y})=>{let{toasts:x,handlers:E}=D(l);return b.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",..._},className:y,onMouseEnter:E.startPause,onMouseLeave:E.endPause},x.map(l=>{let _=l.position||n,y=Re(_,E.calculateOffset(l,{reverseOrder:e,gutter:m,defaultPosition:n}));return b.createElement(Ee,{id:l.id,key:l.id,onHeightUpdate:E.updateHeight,className:l.visible?ed:"",style:y},"custom"===l.type?T(l.message,l):h?h(l):b.createElement(ec,{toast:l,position:_}))}))},ep=dist_n}}]);