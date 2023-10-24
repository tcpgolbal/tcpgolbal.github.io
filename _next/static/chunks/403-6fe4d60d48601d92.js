(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[403],{35883:function(){},8746:function(e,s,t){"use strict";t.d(s,{Z:function(){return Animation}});var l=t(57437),a=t(2265),n=t(94840),r=t.n(n);function Animation(e){let{renderer:s,loop:t,path:n,canvasStyle:i}=e,o=(0,a.useRef)(null),[,c]=(0,a.useState)();return(0,a.useEffect)(()=>{c(r().loadAnimation({container:o.current,renderer:s,loop:t,path:n}))},[]),(0,l.jsx)("div",{children:(0,l.jsx)("div",{ref:o,className:"lottie",style:i})})}},42170:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return Header}});var l=t(57437),a=t(61396),n=t.n(a),r=t(2265),i=t(27856);function Dropdown(e){let{children:s,title:t}=e,[a,n]=(0,r.useState)(!1);return(0,l.jsxs)("li",{className:"relative",onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),onFocus:()=>n(!0),onBlur:()=>n(!1),children:[(0,l.jsxs)("a",{className:"font-medium text-slate-800 dark:text-slate-400 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out",href:"#0","aria-expanded":a,onClick:e=>e.preventDefault(),children:[t,(0,l.jsx)("svg",{className:"w-3 h-3 fill-current text-slate-400 dark:text-slate-500 cursor-pointer ml-1 shrink-0",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{d:"M10.28 4.305L5.989 8.598 1.695 4.305A1 1 0 00.28 5.72l5 5a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414z"})})]}),(0,l.jsx)(i.u,{show:a,as:"ul",className:"origin-top-right absolute top-full right-0 w-40 bg-white py-2 ml-4 rounded shadow-lg",enter:"transition ease-out duration-200 transform",enterFrom:"opacity-0 -translate-y-2",enterTo:"opacity-100 translate-y-0",leave:"transition ease-out duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:s})]})}var o=t(56926),c=t(14181),utils_ConnectWallet=e=>{let{show:s="always"}=e,{isConnected:t}=(0,o.mA)();return"connected"==s&&!t||"not_connected"==s&&t?null:(0,l.jsx)(c.x3,{})};function MobileMenu(){let[e,s]=(0,r.useState)(!1),t=(0,r.useRef)(null),a=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let clickHandler=l=>{let{target:n}=l;a.current&&t.current&&(!e||a.current.contains(n)||t.current.contains(n)||s(!1))};return document.addEventListener("click",clickHandler),()=>document.removeEventListener("click",clickHandler)}),(0,r.useEffect)(()=>{let keyHandler=t=>{let{keyCode:l}=t;e&&27===l&&s(!1)};return document.addEventListener("keydown",keyHandler),()=>document.removeEventListener("keydown",keyHandler)}),(0,l.jsxs)("div",{className:"flex md:hidden space-x-2",children:[(0,l.jsx)(utils_ConnectWallet,{}),(0,l.jsxs)("button",{ref:t,className:"hamburger ".concat(e&&"active"),"aria-controls":"mobile-nav","aria-expanded":e,onClick:()=>s(!e),children:[(0,l.jsx)("span",{className:"sr-only",children:"Menu"}),(0,l.jsxs)("svg",{className:"w-6 h-6 fill-current text-slate-900 dark:text-slate-100",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("rect",{y:"4",width:"24",height:"2"}),(0,l.jsx)("rect",{y:"11",width:"24",height:"2"}),(0,l.jsx)("rect",{y:"18",width:"24",height:"2"})]})]}),(0,l.jsx)("div",{ref:a,children:(0,l.jsx)(i.u,{show:e,as:"nav",id:"mobile-nav",className:"absolute top-full h-screen pb-16 z-20 left-0 w-full overflow-scroll bg-white",enter:"transition ease-out duration-200 transform",enterFrom:"opacity-0 -translate-y-2",enterTo:"opacity-100 translate-y-0",leave:"transition ease-out duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,l.jsxs)("ul",{className:"px-5 py-2",children:[(0,l.jsx)("li",{children:(0,l.jsxs)(n(),{href:"/",className:"flex font-medium text-slate-800 hover:text-blue-600 py-2 items-center  w-full",onClick:()=>s(!1),children:[(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-5 h-5 mr-2",children:(0,l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"})}),"首頁"]})}),(0,l.jsxs)("li",{className:"pb-4 border-b border-gray-200",children:[(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-5 h-5 mr-2",children:(0,l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"})}),(0,l.jsx)("span",{className:"flex font-medium text-slate-800 hover:text-blue-600 py-2",onClick:()=>s(!1),children:"交易"})]}),(0,l.jsxs)("ul",{className:"pl-4",children:[(0,l.jsx)("li",{className:"flex",children:(0,l.jsxs)(n(),{href:{pathname:"/trade",query:{type:"buy"}},className:"text-sm flex font-medium text-slate-600 hover:text-blue-600 py-2 items-center  w-full",onClick:()=>s(!1),children:[(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-4 h-4 mr-4",children:(0,l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"})}),"我要買"]})}),(0,l.jsx)("li",{className:"flex",children:(0,l.jsxs)(n(),{href:{pathname:"/trade",query:{type:"sell"}},className:"text-sm flex font-medium text-slate-600 hover:text-blue-600 py-2 items-center  w-full",onClick:()=>s(!1),children:[(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-4 h-4 mr-4",children:(0,l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181"})}),"我要賣"]})}),(0,l.jsx)("li",{className:"flex",children:(0,l.jsxs)(n(),{href:{pathname:"/transaction"},className:"text-sm flex font-medium text-slate-600 hover:text-blue-600 py-2 items-center  w-full",onClick:()=>s(!1),children:[(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-4 h-4 mr-4",children:(0,l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"})}),"成交記錄"]})}),(0,l.jsx)("li",{className:"flex",children:(0,l.jsxs)(n(),{href:{pathname:"/record"},className:"text-sm flex font-medium text-slate-600 hover:text-blue-600 py-2 items-center  w-full",onClick:()=>s(!1),children:[(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-4 h-4 mr-4",children:(0,l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"})}),"交易記錄"]})})]})]}),(0,l.jsxs)("li",{className:"py-2 my-2 border-b border-gray-200",children:[(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-5 h-5 mr-2",children:(0,l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"})}),(0,l.jsx)("span",{className:"flex font-medium text-slate-800 hover:text-blue-600 py-2",onClick:()=>s(!1),children:"我的"})]}),(0,l.jsx)("ul",{className:"pl-4",children:(0,l.jsx)("li",{className:"flex",children:(0,l.jsxs)(n(),{href:"/group",className:"text-sm flex font-medium text-slate-600 hover:text-blue-600 py-2 items-center  w-full",onClick:()=>s(!1),children:[(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-4 h-4 mr-4",children:(0,l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"})}),"我的團隊"]})})})]})]})})})]})}var d=t(85091),x=t(8746),m=t(37239),u=t(5925),h=t(41935),f=t(40210),v=t(8152);function NewVersion(e){var s;let{close:t}=e,a=(0,o.xx)(),{address:n,isConnecting:i,isDisconnected:c}=(0,o.mA)(),[d,p]=(0,r.useState)(0),[w,j]=(0,r.useState)(0),[g,N]=(0,r.useState)(0),[b,k]=(0,r.useState)(!1),y=0!=d&&d>=w,[L,M]=(0,r.useState)(!1),[C,z]=(0,r.useState)(!1),[S,B]=(0,r.useState)(!1),E=(0,o.GG)({address:m.X9.address[a],abi:m.X9.abi,functionName:"update",onError(e){z(!1),B(!1),u.default.error(e.details)}});(0,o.BX)({hash:null===(s=E.data)||void 0===s?void 0:s.hash,onSuccess(e){e.blockNumber&&(u.default.success("升级成功,即将关闭窗口"),setTimeout(()=>{t()},2e3))}});let{data:H,isSuccess:A,write:T}=(0,o.GG)({address:m.T0.address[a],abi:m.T0.abi,functionName:"approve",onError(e){k(!1),u.default.error(e.details)}});return(0,o.do)({address:m.T0.address[a],abi:m.T0.abi,functionName:"allowance",args:[n,m.X9.address[a]],chainId:a,watch:!0,onSuccess(e){e&&p(Number((0,h.dF)(null==e?void 0:e.toString())))},onError(e){console.log("allowance",e)}}),(0,o.KQ)({address:n,token:m.T0.address[a],watch:!0,onSuccess(e){e&&j(Number(e.formatted))}}),(0,r.useEffect)(()=>{d>=w&&k(!1)},[d,w]),(0,r.useEffect)(()=>{console.log("approveDisabled,postionDisabled1",y,L),y&&L?B(!1):(console.log("approveDisabled,postionDisabled2",y,L),B(!0))},[y,L]),(0,o.Dm)({contracts:[{address:m.z4.address[a],abi:m.z4.abi,functionName:"getLockAmount",args:[n]},{address:m.z4.address[a],abi:m.z4.abi,functionName:"getWaitHarvest",args:[n]}],watch:!0,onSuccess:e=>{console.log("useContractReads old lockAmount",e),N((Number((0,h.dF)(e[0].result))+Number((0,h.dF)(e[1].result))).toFixed(3))}}),(0,l.jsxs)("section",{className:"w-full",children:[(0,l.jsx)(x.Z,{renderer:"svg",loop:!0,path:"/videos/boost.json"}),(0,l.jsx)("div",{className:"text-center mt-3 w-full",children:(0,l.jsxs)("div",{className:"font-bold text-2xl",children:[(0,l.jsx)("span",{children:"全新版本,"}),(0,l.jsx)("span",{className:"animate-pulse bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-800",children:"更加安全"})]})}),(0,l.jsxs)("div",{className:"mt-3 space-y-2 break-all",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"font-bold text-lg",children:"「代币升级」"}),(0,l.jsxs)("ul",{className:"list-inside list-disc ml-3",children:[(0,l.jsxs)("li",{className:"text-sm",children:["新代币地址:",m.lS.address[a]]}),(0,l.jsx)("li",{className:"text-sm text-blue-800 ",children:(0,l.jsxs)("span",{className:"inline-flex",children:["请批准将您的",w||"","TCP被映射到新的地址",(0,l.jsxs)(v.Z,{isLoading:b,disabled:y||b,className:"w-10 h-6 rounded-lg justify-center flex items-center ml-2",onClick:()=>{k(!0),T({args:[m.X9.address[a],f.Bz]})},children:[!y&&(0,l.jsx)("span",{className:"text-sm",children:"批准"}),y&&(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"w-4 h-4 text-blue-400",children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z",clipRule:"evenodd"})})]})]})})]})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"font-bold text-lg",children:"「资产升级」"}),(0,l.jsxs)("ul",{className:"list-inside list-disc ml-3",children:[(0,l.jsx)("li",{className:"text-sm",children:"优化锁仓BUG,让你的资产更安全"}),(0,l.jsxs)("li",{className:"text-sm text-blue-800",children:["请批准将您的",g||"","TCP锁仓资产和待领取资产被映射新的地址",(0,l.jsxs)(v.Z,{isLoading:!1,disabled:L,className:"w-10 h-6 rounded-lg justify-center flex items-center ml-2 inline-flex",onClick:()=>{M(!0)},children:[!L&&(0,l.jsx)("span",{className:"text-sm",children:"批准"}),L&&(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"w-4 h-4 text-blue-400",children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z",clipRule:"evenodd"})})]})]})]})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"font-bold text-lg",children:"「交易升级」"}),(0,l.jsx)("ul",{className:"list-inside list-disc ml-3",children:(0,l.jsx)("li",{className:"text-sm",children:"全新的交易模式,加速社区发展"})})]})]}),(0,l.jsx)("div",{className:"w-full my-3 mx-auto justify-center flex",children:(0,l.jsxs)("div",{className:"flex flex-col justify-center items-center space-y-3",children:[(0,l.jsxs)("button",{disabled:S||C,className:"".concat(S?"bg-slate-600 hover:bg-slate-700 ring-slate-400":"bg-gradient-to-b from-blue-400 to-blue-800 ring-blue-400","  btn w-24 h-24 rounded-full ring-8 font-bold text-white"),onClick:e=>{e.preventDefault(),e.stopPropagation(),z(!0),E.write({value:(0,h.fi)("0.003")})},children:[(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"".concat(C?"flex":"hidden"," w-24 h-24 animate-spin"),children:(0,l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"})}),(0,l.jsxs)("div",{className:"".concat(C?"hidden":" flex"," flex-col justify-center items-center "),children:[(0,l.jsx)("div",{children:(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"w-6 h-6",children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M11.47 4.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 6.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5zm.53 7.59l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 12.31z",clipRule:"evenodd"})})}),(0,l.jsx)("div",{className:"w-full",children:"立刻升级"})]})]}),(0,l.jsx)("span",{className:"text-sm text-gray-400",children:"升级前,请核对上方蓝色字体"})]})})]})}var p=t(24033),w=t(63739),j=t(65018);function Header(e){let{mode:s="dark"}=e,[t,a]=(0,r.useState)(!1),[i,c]=(0,w.Xs)("parent-address",""),x=(0,o.xx)(),{address:u,isConnecting:h,isDisconnected:f}=(0,o.mA)();(0,o.do)({address:m.X9.address[x],abi:m.X9.abi,functionName:"needToUpgrade",args:[u],watch:!0,onSuccess:e=>{console.log("needToUpgrade",e),a(e)}}),(0,o.do)({address:m.wA.address[x],abi:m.wA.abi,functionName:"getParentAddress",args:[u],watch:!0,onSuccess:e=>{console.log("getParentAddress",e);let s=v.get("address");s?c(s):e!==j.N?c(e):c("")}});let v=(0,p.useSearchParams)();return(0,l.jsxs)("header",{className:"absolute w-full z-30 ".concat("light"!==s&&"dark"),children:[(0,l.jsx)("div",{className:"max-w-6xl mx-auto px-5 sm:px-6",children:(0,l.jsxs)("div",{className:"flex items-center justify-between h-16 md:h-20",children:[(0,l.jsx)("div",{className:"shrink-0 mr-4"}),(0,l.jsxs)("nav",{className:"hidden md:flex md:grow",children:[(0,l.jsxs)("ul",{className:"flex grow justify-start flex-wrap items-center",children:[(0,l.jsx)("li",{children:(0,l.jsx)(n(),{href:"/",className:"font-medium text-slate-800 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out",children:"首頁"})}),(0,l.jsxs)(Dropdown,{title:"交易",children:[(0,l.jsx)("li",{children:(0,l.jsx)(n(),{href:{pathname:"/trade",query:{type:"buy"}},className:"font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight",children:"我要買"})}),(0,l.jsx)("li",{children:(0,l.jsx)(n(),{href:{pathname:"/trade",query:{type:"sell"}},className:"font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight",children:"我要賣"})}),(0,l.jsx)("li",{children:(0,l.jsx)(n(),{href:{pathname:"/transaction"},className:"font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight",children:"成交記錄"})}),(0,l.jsx)("li",{children:(0,l.jsx)(n(),{href:{pathname:"/record"},className:"font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight",children:"交易記錄"})})]}),(0,l.jsx)(Dropdown,{title:"我的",children:(0,l.jsx)("li",{children:(0,l.jsx)(n(),{href:"/group",className:"font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight",children:"我的團隊"})})})]}),(0,l.jsx)("ul",{className:"flex grow justify-end flex-wrap items-center",children:(0,l.jsx)("li",{children:(0,l.jsx)(utils_ConnectWallet,{})})})]}),(0,l.jsx)(MobileMenu,{})]})}),(0,l.jsx)(d.Z,{id:"PositionAdd",ariaLabel:"1232",show:t,handleClose:()=>{},children:(0,l.jsx)(NewVersion,{close:()=>{a(!1)}})})]})}},8152:function(e,s,t){"use strict";t.d(s,{Z:function(){return Button}});var l=t(57437);function Button(e){let{children:s,isLoading:t=!1,disabled:a=!1,className:n="w-full btn-sm  mt-4",onClick:r}=e;return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("button",{disabled:a,className:"".concat(a?"text-white bg-slate-600 hover:bg-slate-700":"text-white bg-blue-600 hover:bg-blue-700"," ").concat(n),onClick:e=>{e.preventDefault(),e.stopPropagation(),r()},children:[(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"".concat(t?"flex":"hidden"," w-6 h-6 animate-spin"),children:(0,l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"})}),s]})})}},85091:function(e,s,t){"use strict";t.d(s,{Z:function(){return Modal}});var l=t(57437),a=t(2265),n=t(27856);function Modal(e){let{children:s,id:t,ariaLabel:r,show:i,handleClose:o}=e,c=(0,a.useRef)(null);return(0,a.useEffect)(()=>{let clickHandler=e=>{var s;let{target:t}=e;!i||(null===(s=c.current)||void 0===s?void 0:s.contains(t))||o()};return document.addEventListener("click",clickHandler),()=>document.removeEventListener("click",clickHandler)},[i,o,c]),(0,a.useEffect)(()=>{let keyHandler=e=>{let{keyCode:s}=e;27===s&&o()};return document.addEventListener("keydown",keyHandler),()=>document.removeEventListener("keydown",keyHandler)},[o]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.u,{show:i,enter:"transition ease-out duration-200",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition ease-out duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",className:"fixed inset-0 z-50 bg-black bg-opacity-75 transition-opacity","aria-hidden":"true"}),(0,l.jsx)(n.u,{show:i,enter:"transition ease-out duration-200",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ttransition ease-out duration-200",leaveFrom:"oopacity-100 scale-100",leaveTo:"opacity-0 scale-95",id:t,className:"fixed inset-0 z-50 overflow-hidden flex items-center justify-center transform px-4 sm:px-6",role:"dialog","aria-modal":"true","aria-labelledby":r,children:(0,l.jsx)("div",{className:"bg-white overflow-auto  max-h-full",ref:c,children:s})})]})}}}]);