"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8465],{39670:function(e,t,s){s.d(t,{ConfigCtrl:function(){return C},zv:function(){return f},uA:function(){return g},ExplorerCtrl:function(){return R},jb:function(){return V},OptionsCtrl:function(){return w},AV:function(){return u},ThemeCtrl:function(){return G},ToastCtrl:function(){return X}}),Symbol();let r=Symbol(),o=Object.getPrototypeOf,n=new WeakMap,l=e=>e&&(n.has(e)?n.get(e):o(e)===Object.prototype||o(e)===Array.prototype),y=e=>l(e)&&e[r]||null,h=(e,t=!0)=>{n.set(e,t)},isObject=e=>"object"==typeof e&&null!==e,i=new WeakMap,a=new WeakSet,buildProxyFunction=(e=Object.is,t=(e,t)=>new Proxy(e,t),s=e=>isObject(e)&&!a.has(e)&&(Array.isArray(e)||!(Symbol.iterator in e))&&!(e instanceof WeakMap)&&!(e instanceof WeakSet)&&!(e instanceof Error)&&!(e instanceof Number)&&!(e instanceof Date)&&!(e instanceof String)&&!(e instanceof RegExp)&&!(e instanceof ArrayBuffer),r=e=>{switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:throw e}},o=new WeakMap,n=(e,t,s=r)=>{let c=o.get(e);if((null==c?void 0:c[0])===t)return c[1];let p=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));return h(p,!0),o.set(e,[t,p]),Reflect.ownKeys(e).forEach(t=>{if(Object.getOwnPropertyDescriptor(p,t))return;let r=Reflect.get(e,t),o={value:r,enumerable:!0,configurable:!0};if(a.has(r))h(r,!1);else if(r instanceof Promise)delete o.value,o.get=()=>s(r);else if(i.has(r)){let[e,t]=i.get(r);o.value=n(e,t(),s)}Object.defineProperty(p,t,o)}),Object.preventExtensions(p)},c=new WeakMap,p=[1,1],u=r=>{if(!isObject(r))throw Error("object required");let o=c.get(r);if(o)return o;let f=p[0],b=new Set,notifyUpdate=(e,t=++p[0])=>{f!==t&&(f=t,b.forEach(s=>s(e,t)))},m=p[1],ensureVersion=(e=++p[1])=>(m===e||b.size||(m=e,g.forEach(([t])=>{let s=t[1](e);s>f&&(f=s)})),f),createPropListener=e=>(t,s)=>{let r=[...t];r[1]=[e,...r[1]],notifyUpdate(r,s)},g=new Map,addPropListener=(e,t)=>{if(g.has(e))throw Error("prop listener already exists");if(b.size){let s=t[3](createPropListener(e));g.set(e,[t,s])}else g.set(e,[t])},removePropListener=e=>{var t;let s=g.get(e);s&&(g.delete(e),null==(t=s[1])||t.call(s))},addListener=e=>{b.add(e),1===b.size&&g.forEach(([e,t],s)=>{if(t)throw Error("remove already exists");let r=e[3](createPropListener(s));g.set(s,[e,r])});let removeListener=()=>{b.delete(e),0===b.size&&g.forEach(([e,t],s)=>{t&&(t(),g.set(s,[e]))})};return removeListener},v=Array.isArray(r)?[]:Object.create(Object.getPrototypeOf(r)),w={deleteProperty(e,t){let s=Reflect.get(e,t);removePropListener(t);let r=Reflect.deleteProperty(e,t);return r&&notifyUpdate(["delete",[t],s]),r},set(t,r,o,n){let p=Reflect.has(t,r),f=Reflect.get(t,r,n);if(p&&(e(f,o)||c.has(o)&&e(f,c.get(o))))return!0;removePropListener(r),isObject(o)&&(o=y(o)||o);let b=o;if(o instanceof Promise)o.then(e=>{o.status="fulfilled",o.value=e,notifyUpdate(["resolve",[r],e])}).catch(e=>{o.status="rejected",o.reason=e,notifyUpdate(["reject",[r],e])});else{!i.has(o)&&s(o)&&(b=u(o));let e=!a.has(b)&&i.get(b);e&&addPropListener(r,e)}return Reflect.set(t,r,b,n),notifyUpdate(["set",[r],o,f]),!0}},I=t(v,w);c.set(r,I);let C=[v,ensureVersion,n,addListener];return i.set(I,C),Reflect.ownKeys(r).forEach(e=>{let t=Object.getOwnPropertyDescriptor(r,e);"value"in t&&(I[e]=r[e],delete t.value,delete t.writable),Object.defineProperty(v,e,t)}),I})=>[u,i,a,e,t,s,r,o,n,c,p],[c]=buildProxyFunction();function proxy(e={}){return c(e)}function subscribe(e,t,s){let r;let o=i.get(e);o||console.warn("Please use proxy object");let n=[],a=o[3],c=!1,p=a(e=>{if(n.push(e),s){t(n.splice(0));return}r||(r=Promise.resolve().then(()=>{r=void 0,c&&t(n.splice(0))}))});return c=!0,()=>{c=!1,p()}}let p=proxy({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),u={state:p,subscribe:e=>subscribe(p,()=>e(p)),push(e,t){e!==p.view&&(p.view=e,t&&(p.data=t),p.history.push(e))},reset(e){p.view=e,p.history=[e]},replace(e){p.history.length>1&&(p.history[p.history.length-1]=e,p.view=e)},goBack(){if(p.history.length>1){p.history.pop();let[e]=p.history.slice(-1);p.view=e}},setData(e){p.data=e}},f={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",WCM_VERSION:"WCM_VERSION",RECOMMENDED_WALLET_AMOUNT:9,isMobile:()=>"u">typeof window&&!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)),isAndroid:()=>f.isMobile()&&navigator.userAgent.toLowerCase().includes("android"),isIos(){let e=navigator.userAgent.toLowerCase();return f.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl:e=>e.startsWith("http://")||e.startsWith("https://"),isArray:e=>Array.isArray(e)&&e.length>0,formatNativeUrl(e,t,s){if(f.isHttpUrl(e))return this.formatUniversalUrl(e,t,s);let r=e;r.includes("://")||(r=e.replaceAll("/","").replaceAll(":",""),r=`${r}://`),r.endsWith("/")||(r=`${r}/`),this.setWalletConnectDeepLink(r,s);let o=encodeURIComponent(t);return`${r}wc?uri=${o}`},formatUniversalUrl(e,t,s){if(!f.isHttpUrl(e))return this.formatNativeUrl(e,t,s);let r=e;r.endsWith("/")||(r=`${r}/`),this.setWalletConnectDeepLink(r,s);let o=encodeURIComponent(t);return`${r}wc?uri=${o}`},wait:async e=>new Promise(t=>{setTimeout(t,e)}),openHref(e,t){window.open(e,t,"noreferrer noopener")},setWalletConnectDeepLink(e,t){try{localStorage.setItem(f.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},setWalletConnectAndroidDeepLink(e){try{let[t]=e.split("?");localStorage.setItem(f.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:t,name:"Android"}))}catch{console.info("Unable to set WalletConnect android deep link")}},removeWalletConnectDeepLink(){try{localStorage.removeItem(f.WALLETCONNECT_DEEPLINK_CHOICE)}catch{console.info("Unable to remove WalletConnect deep link")}},setModalVersionInStorage(){try{"u">typeof localStorage&&localStorage.setItem(f.WCM_VERSION,"2.6.2")}catch{console.info("Unable to set Web3Modal version in storage")}},getWalletRouterData(){var e;let t=null==(e=u.state.data)?void 0:e.Wallet;if(!t)throw Error('Missing "Wallet" view data');return t}},b="u">typeof location&&(location.hostname.includes("localhost")||location.protocol.includes("https")),m=proxy({enabled:b,userSessionId:"",events:[],connectedWalletId:void 0}),g={state:m,subscribe:e=>subscribe(m.events,()=>e(function(e,t){let s=i.get(e);s||console.warn("Please use proxy object");let[r,o,n]=s;return n(r,o(),void 0)}(m.events[m.events.length-1]))),initialize(){m.enabled&&"u">typeof(null==crypto?void 0:crypto.randomUUID)&&(m.userSessionId=crypto.randomUUID())},setConnectedWalletId(e){m.connectedWalletId=e},click(e){if(m.enabled){let t={type:"CLICK",name:e.name,userSessionId:m.userSessionId,timestamp:Date.now(),data:e};m.events.push(t)}},track(e){if(m.enabled){let t={type:"TRACK",name:e.name,userSessionId:m.userSessionId,timestamp:Date.now(),data:e};m.events.push(t)}},view(e){if(m.enabled){let t={type:"VIEW",name:e.name,userSessionId:m.userSessionId,timestamp:Date.now(),data:e};m.events.push(t)}}},v=proxy({chains:void 0,walletConnectUri:void 0,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1}),w={state:v,subscribe:e=>subscribe(v,()=>e(v)),setChains(e){v.chains=e},setWalletConnectUri(e){v.walletConnectUri=e},setIsCustomDesktop(e){v.isCustomDesktop=e},setIsCustomMobile(e){v.isCustomMobile=e},setIsDataLoaded(e){v.isDataLoaded=e},setIsUiLoaded(e){v.isUiLoaded=e},setIsAuth(e){v.isAuth=e}},I=proxy({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chains:void 0,enableAuthMode:!1,enableExplorer:!0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),C={state:I,subscribe:e=>subscribe(I,()=>e(I)),setConfig(e){var t,s;g.initialize(),w.setChains(e.chains),w.setIsAuth(!!e.enableAuthMode),w.setIsCustomMobile(!!(null==(t=e.mobileWallets)?void 0:t.length)),w.setIsCustomDesktop(!!(null==(s=e.desktopWallets)?void 0:s.length)),f.setModalVersionInStorage(),Object.assign(I,e)}};var O=Object.defineProperty,L=Object.getOwnPropertySymbols,W=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,M=(e,t,s)=>t in e?O(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,K=(e,t)=>{for(var s in t||(t={}))W.call(t,s)&&M(e,s,t[s]);if(L)for(var s of L(t))E.call(t,s)&&M(e,s,t[s]);return e};let j="https://explorer-api.walletconnect.com",A="js-2.6.2";async function dist_w(e,t){let s=K({sdkType:"wcm",sdkVersion:A},t),r=new URL(e,j);return r.searchParams.append("projectId",C.state.projectId),Object.entries(s).forEach(([e,t])=>{t&&r.searchParams.append(e,String(t))}),(await fetch(r)).json()}let U={getDesktopListings:async e=>dist_w("/w3m/v1/getDesktopListings",e),getMobileListings:async e=>dist_w("/w3m/v1/getMobileListings",e),getInjectedListings:async e=>dist_w("/w3m/v1/getInjectedListings",e),getAllListings:async e=>dist_w("/w3m/v1/getAllListings",e),getWalletImageUrl:e=>`${j}/w3m/v1/getWalletImage/${e}?projectId=${C.state.projectId}&sdkType=wcm&sdkVersion=${A}`,getAssetImageUrl:e=>`${j}/w3m/v1/getAssetImage/${e}?projectId=${C.state.projectId}&sdkType=wcm&sdkVersion=${A}`};var P=Object.defineProperty,D=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable,k=(e,t,s)=>t in e?P(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,F=(e,t)=>{for(var s in t||(t={}))x.call(t,s)&&k(e,s,t[s]);if(D)for(var s of D(t))N.call(t,s)&&k(e,s,t[s]);return e};let T=f.isMobile(),_=proxy({wallets:{listings:[],total:0,page:1},search:{listings:[],total:0,page:1},recomendedWallets:[]}),R={state:_,async getRecomendedWallets(){let{explorerRecommendedWalletIds:e,explorerExcludedWalletIds:t}=C.state;if("NONE"===e||"ALL"===t&&!e)return _.recomendedWallets;if(f.isArray(e)){let t={recommendedIds:e.join(",")},{listings:s}=await U.getAllListings(t),r=Object.values(s);r.sort((t,s)=>{let r=e.indexOf(t.id),o=e.indexOf(s.id);return r-o}),_.recomendedWallets=r}else{let{chains:e,isAuth:s}=w.state,r=e?.join(","),o=f.isArray(t),n={page:1,sdks:s?"auth_v1":void 0,entries:f.RECOMMENDED_WALLET_AMOUNT,chains:r,version:2,excludedIds:o?t.join(","):void 0},{listings:i}=T?await U.getMobileListings(n):await U.getDesktopListings(n);_.recomendedWallets=Object.values(i)}return _.recomendedWallets},async getWallets(e){let t=F({},e),{explorerRecommendedWalletIds:s,explorerExcludedWalletIds:r}=C.state,{recomendedWallets:o}=_;if("ALL"===r)return _.wallets;o.length?t.excludedIds=o.map(e=>e.id).join(","):f.isArray(s)&&(t.excludedIds=s.join(",")),f.isArray(r)&&(t.excludedIds=[t.excludedIds,r].filter(Boolean).join(",")),w.state.isAuth&&(t.sdks="auth_v1");let{page:n,search:i}=e,{listings:a,total:c}=T?await U.getMobileListings(t):await U.getDesktopListings(t),p=Object.values(a),u=i?"search":"wallets";return _[u]={listings:[..._[u].listings,...p],total:c,page:n??1},{listings:p,total:c}},getWalletImageUrl:e=>U.getWalletImageUrl(e),getAssetImageUrl:e=>U.getAssetImageUrl(e),resetSearch(){_.search={listings:[],total:0,page:1}}},$=proxy({open:!1}),V={state:$,subscribe:e=>subscribe($,()=>e($)),open:async e=>new Promise(t=>{let{isUiLoaded:s,isDataLoaded:r}=w.state;if(f.removeWalletConnectDeepLink(),w.setWalletConnectUri(e?.uri),w.setChains(e?.chains),u.reset("ConnectWallet"),s&&r)$.open=!0,t();else{let e=setInterval(()=>{let s=w.state;s.isUiLoaded&&s.isDataLoaded&&(clearInterval(e),$.open=!0,t())},200)}}),close(){$.open=!1}};var H=Object.defineProperty,z=Object.getOwnPropertySymbols,B=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable,S=(e,t,s)=>t in e?H(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Y=(e,t)=>{for(var s in t||(t={}))B.call(t,s)&&S(e,s,t[s]);if(z)for(var s of z(t))J.call(t,s)&&S(e,s,t[s]);return e};let q=proxy({themeMode:"u">typeof matchMedia&&matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}),G={state:q,subscribe:e=>subscribe(q,()=>e(q)),setThemeConfig(e){let{themeMode:t,themeVariables:s}=e;t&&(q.themeMode=t),s&&(q.themeVariables=Y({},s))}},Q=proxy({open:!1,message:"",variant:"success"}),X={state:Q,subscribe:e=>subscribe(Q,()=>e(Q)),openToast(e,t){Q.open=!0,Q.message=e,Q.variant=t},closeToast(){Q.open=!1}}},78465:function(e,t,s){s.d(t,{WalletConnectModal:function(){return d}});var r=s(39670);let d=class d{constructor(e){this.openModal=r.jb.open,this.closeModal=r.jb.close,this.subscribeModal=r.jb.subscribe,this.setTheme=r.ThemeCtrl.setThemeConfig,r.ThemeCtrl.setThemeConfig(e),r.ConfigCtrl.setConfig(e),this.initUi()}async initUi(){if("u">typeof window){await s.e(9601).then(s.bind(s,59601));let e=document.createElement("wcm-modal");document.body.insertAdjacentElement("beforeend",e),r.OptionsCtrl.setIsUiLoaded(!0)}}}}}]);