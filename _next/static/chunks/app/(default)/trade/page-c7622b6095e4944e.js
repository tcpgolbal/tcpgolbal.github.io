(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9378],{3188:function(e,s,t){Promise.resolve().then(t.bind(t,69524)),Promise.resolve().then(t.bind(t,15680))},15680:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return S}});var r=t(60202),a=t(9268),n=t(92688),l=t.n(n),i=t(55449),d=t(86006),o=t(56008),c=t(20222),m=t(11951),u=t(79889),x=t(81292),h=t(70238),p=t(53430),f=t(82108),v=t(37437);let N=["出售","購買"];function b(e){var s,t,r;let{close:n,c2cAdvertised:l}=e,[o,c]=(0,d.useState)(0),[m,x]=(0,d.useState)(0),[b,j]=(0,d.useState)(0),[g,w]=(0,d.useState)(0),[y,T]=(0,d.useState)(0),[S,k]=(0,d.useState)(Number((0,u.dF)(l.total))),[C,F]=(0,d.useState)(Number((0,u.dF)(l.price))),[P,L]=(0,d.useState)(Number((0,u.dF)(l.min))),[E,D]=(0,d.useState)(Number((0,u.dF)(l.max))),[z,A]=(0,d.useState)(!1),[B,M]=(0,d.useState)(!1),[R,G]=(0,d.useState)(!1),{address:_,isConnecting:W,isDisconnected:Z}=(0,i.mA)(),q=(0,i.xx)();(0,i.do)({address:p.lS.address[q],abi:p.lS.abi,functionName:"allowance",args:[_,p.c7.address[q]],chainId:q,watch:!0,onSuccess(e){console.log("tcp allowance",e),e&&w(Number((0,u.dF)(null==e?void 0:e.toString())))}}),(0,i.do)({address:p.xR.address,abi:p.xR.abi,functionName:"allowance",args:[_,p.c7.address[q]],chainId:q,watch:!0,onSuccess(e){e&&T(Number((0,u.dF)(null==e?void 0:e.toString())))}}),(0,d.useEffect)(()=>{0==o&&(0==l.orderType&&g>=1e3&&c(1),1==l.orderType&&y>=1e3&&c(1))},[g,y]);let{data:Q,isSuccess:U,write:X}=(0,i.GG)({address:p.lS.address[q],abi:p.lS.abi,functionName:"approve",onError(e){v.default.error(e.details)}}),$=(0,i.GG)({address:p.xR.address,abi:p.xR.abi,functionName:"approve",onError(e){v.default.error(e.details)}});(0,i.BX)({hash:null===(s=$.data)||void 0===s?void 0:s.hash,onSuccess(e){e.blockNumber&&A(!1)}}),(0,i.BX)({hash:null==Q?void 0:Q.hash,onSuccess(e){e.blockNumber&&A(!1)}}),(0,d.useEffect)(()=>{(1!=l.orderType||y)&&(0!=l.orderType||g)&&((1==l.orderType&&Number(S)<=Number(y)||0==l.orderType&&Number(S)<=Number(g))&&G(!1),(1==l.orderType&&Number(S)>Number(y)||0==l.orderType&&Number(S)>Number(g)&&1==o)&&(G(!0),v.default.custom(e=>(0,a.jsxs)("div",{className:"".concat(e.visible?"animate-enter":"animate-leave"," max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5"),children:[(0,a.jsx)("div",{className:"flex-1 w-0 p-2",children:(0,a.jsxs)("div",{className:"flex items-start",children:[(0,a.jsx)("div",{className:"flex-shrink-0 pt-0.5",children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6 text-red-500",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"})})}),(0,a.jsx)("div",{className:"ml-3 flex-1",children:(0,a.jsx)("p",{className:"mt-1 text-sm text-gray-500",children:"你输入的金额超过授权额度.需要前往增加授权额度嘛?"})})]})}),(0,a.jsx)("div",{className:"flex border-l border-gray-200",children:(0,a.jsx)("button",{onClick:s=>{s.preventDefault(),c(0),v.default.dismiss(e.id),console.log("close")},className:"w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-red-500 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500",children:"去授权"})})]}),{position:"bottom-center",duration:5e3})))},[S]),(0,i.KQ)({address:_,token:p.lS.address[q],watch:!0,onSuccess(e){x(Number(e.formatted))}}),(0,i.KQ)({address:_,token:p.xR.address,watch:!0,onSuccess(e){j(Number(e.formatted))}});let K=(0,i.GG)({address:p.c7.address[q],abi:p.c7.abi,functionName:"addC2CAdvertise",onError(e){v.default.error(e.details),M(!1),G(!1)}}),O=(0,i.GG)({address:p.c7.address[q],abi:p.c7.abi,functionName:"editC2CAdvertise",onError(e){v.default.error(e.details),M(!1),G(!1)}}),H=(0,i.BX)({hash:null===(t=K.data)||void 0===t?void 0:t.hash,onSuccess(e){e.blockNumber&&(v.default.success("發布成功"),setTimeout(()=>{M(!1),G(!1),n()},3e3))},onError(e){console.log("addC2CAdvertiseWrite.data?.hash",e),"TransactionNotFoundError"==e.name&&setTimeout(()=>{H.refetch()},2e3)}}),I=(0,i.BX)({hash:null===(r=O.data)||void 0===r?void 0:r.hash,onSuccess(e){e.blockNumber&&(v.default.success("發布成功"),setTimeout(()=>{M(!1),G(!1),n()},3e3))},onError(e){console.log("editC2CAdvertiseWrite.data?.hash",e),"TransactionNotFoundError"==e.name&&setTimeout(()=>{I.refetch()},2e3)}}),J=()=>{if(S<1){v.default.error("交易數量太低");return}M(!0),void 0==l.id?K.write({args:[(0,u.fi)(S.toString()),(0,u.fi)(C.toString()),(0,u.fi)(P.toString()),(0,u.fi)(E.toString()),l.orderType,""],value:(0,u.fi)("0.003")}):(console.log((0,u.vz)(l.id.toString(),0),(0,u.fi)(S.toString()),(0,u.fi)(C.toString()),(0,u.fi)(P.toString()),(0,u.fi)(E.toString())),O.write({args:[(0,u.vz)(l.id.toString(),0),(0,u.fi)(S.toString()),(0,u.fi)(C.toString()),(0,u.fi)(P.toString()),(0,u.fi)(E.toString()),""],value:(0,u.fi)("0.003")}))};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"",children:(0,a.jsx)("div",{className:"  flex flex-col justify-center",children:(0,a.jsx)("div",{className:"px-5 sm:px-6 py-8",children:(0,a.jsxs)("div",{className:"max-w-md mx-auto",children:[(0,a.jsxs)("div",{className:"mb-6 flex justify-between",children:[(0,a.jsxs)("h1",{className:"h4 font-playfair-display text-slate-800",children:["发布",N[l.orderType]," TCP"]}),(0,a.jsx)("button",{onClick:n,children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-10 h-10",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})})]}),(0,a.jsxs)("div",{className:"text-sm space-y-3",children:[(0,a.jsxs)("div",{className:"".concat(0!=o?"text-slate-400":""," flex"),children:[(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"".concat(o<=0?"hidden":""," w-6 h-6 text-green-600"),children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),"1、需要透過鏈上 ERC20 一次性批准",N[l.orderType]," TCP"]}),(0,a.jsxs)("div",{className:"".concat(1!=o?"text-slate-400":""," flex"),children:[(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"".concat(o<=1?"hidden":""," w-6 h-6 text-green-600"),children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),"2、確認",N[l.orderType]," TCP"]}),(0,a.jsxs)("div",{className:"".concat(1!=o?"hidden":""," space-y-3"),children:[void 0!=l.id&&(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"flex justify-between",children:(0,a.jsxs)("label",{className:" text-sm font-medium mb-1",htmlFor:"total",children:["已",N[l.orderType],"數量 "]})}),(0,a.jsx)("input",{id:"total",className:"form-input py-2 w-full text-gray-400",type:"number",value:(0,u.dF)(l.sold),disabled:!0})]}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"flex justify-between",children:[(0,a.jsxs)("label",{className:" text-sm font-medium mb-1",htmlFor:"total",children:[N[l.orderType],"數量 ",(0,a.jsx)("span",{className:"text-rose-500",children:"*"})]}),(0,a.jsxs)("label",{className:" text-sm font-medium mb-1",htmlFor:"total",children:["餘額:",0==l.orderType?m:b," ",0==l.orderType?"TCP":"USDT",(0,a.jsx)("span",{className:"text-blue-700",onClick:e=>{e.preventDefault(),k(0==l.orderType?m:b)},children:"最大"})]})]}),(0,a.jsx)("input",{id:"total",className:"form-input py-2 w-full",type:"number",value:S,onChange:e=>{e.preventDefault(),e.stopPropagation(),void 0!=l.sold&&Number(e.target.value)<=Number((0,u.dF)(l.sold))&&v.default.error("總量不可以低於已交易"),k(e.target.value)},required:!0})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"flex justify-between",children:(0,a.jsxs)("label",{className:" text-sm font-medium mb-1",htmlFor:"price",children:["價格 ",(0,a.jsx)("span",{className:"text-rose-500",children:"*"})]})}),(0,a.jsx)("input",{id:"price",className:"form-input py-2 w-full",type:"number",step:.001,value:C,onChange:e=>{e.preventDefault(),e.stopPropagation(),F(e.target.value)},required:!0})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"flex justify-between",children:(0,a.jsxs)("label",{className:" text-sm font-medium mb-1",htmlFor:"min",children:["每單最小限額 ",(0,a.jsx)("span",{className:"text-rose-500",children:"*"})]})}),(0,a.jsx)("input",{id:"min",className:"form-input py-2 w-full",type:"number",value:P,onChange:e=>{e.preventDefault(),e.stopPropagation(),L(e.target.value)},required:!0})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"flex justify-between",children:(0,a.jsxs)("label",{className:" text-sm font-medium mb-1",htmlFor:"max",children:["每單最大限額 ",(0,a.jsx)("span",{className:"text-rose-500",children:"*"})]})}),(0,a.jsx)("input",{id:"max",className:"form-input py-2 w-full",type:"number",value:E,onChange:e=>{e.preventDefault(),e.stopPropagation(),D(e.target.value)},required:!0})]})]})]}),(0,a.jsxs)("div",{className:"mt-4",children:[(0,a.jsx)("div",{className:"".concat(0!=o?"hidden":""),children:(0,a.jsxs)(f.Z,{isLoading:z,disabled:z,onClick:()=>{A(!0),0==l.orderType?X({args:[p.c7.address[q],h.Bz]}):$.write({args:[p.c7.address[q],h.Bz]})},children:["允許",N[l.orderType]," TCP"]})}),(0,a.jsx)("div",{className:"".concat(1!=o?"hidden":""),children:(0,a.jsx)(f.Z,{isLoading:B,disabled:R||B,onClick:J,children:"發布"})})]})]})})})})})}let j=["购买","出售"];function g(e){var s,t;let{close:r,c2cAdvertised:n}=e,[l,o]=(0,d.useState)(0),[c,m]=(0,d.useState)(0),[x,N]=(0,d.useState)(0),[b,g]=(0,d.useState)(0),[w,y]=(0,d.useState)(0),[T,S]=(0,d.useState)(0),[k,C]=(0,d.useState)(Number((0,u.dF)(n.price))),[F,P]=(0,d.useState)(Number((0,u.dF)(n.min))),[L,E]=(0,d.useState)(Number((0,u.dF)(n.max))),[D,z]=(0,d.useState)(!1),[A,B]=(0,d.useState)(!1),[M,R]=(0,d.useState)(!1),{address:G,isConnecting:_,isDisconnected:W}=(0,i.mA)(),Z=(0,i.xx)();(0,i.do)({address:p.lS.address[Z],abi:p.lS.abi,functionName:"allowance",args:[G,p.c7.address[Z]],chainId:Z,watch:!0,onSuccess(e){e&&g(Number((0,u.dF)(null==e?void 0:e.toString())))}}),(0,i.do)({address:p.xR.address,abi:p.xR.abi,functionName:"allowance",args:[G,p.c7.address[Z]],chainId:Z,watch:!0,onSuccess(e){e&&y(Number((0,u.dF)(null==e?void 0:e.toString())))}}),(0,d.useEffect)(()=>{0==l&&(console.log("tcp allowance",b),console.log("usdt allowance",w),1==n.orderType&&b>=1e3&&o(1),0==n.orderType&&w>=1e3&&o(1))},[b,w]);let{data:q,isSuccess:Q,write:U}=(0,i.GG)({address:p.lS.address[Z],abi:p.lS.abi,functionName:"approve",onError(e){v.default.error(e.details)}}),X=(0,i.GG)({address:p.xR.address,abi:p.xR.abi,functionName:"approve",onError(e){v.default.error(e.details)}});(0,i.BX)({hash:null===(s=X.data)||void 0===s?void 0:s.hash,onSuccess(e){e.blockNumber&&z(!1)}}),(0,i.BX)({hash:null==q?void 0:q.hash,onSuccess(e){e.blockNumber&&z(!1)}}),(0,d.useEffect)(()=>{console.log("step",l)},[l]),(0,d.useEffect)(()=>{(Number(T)<Number(b)&&1==n.orderType||0==n.orderType&&Number(T)<Number(w))&&R(!1),(Number(T)>Number(b)&&1==n.orderType||Number(T)>Number(w)&&0==n.orderType)&&1==l&&(R(!0),v.default.custom(e=>(0,a.jsxs)("div",{className:"".concat(e.visible?"animate-enter":"animate-leave"," max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5"),children:[(0,a.jsx)("div",{className:"flex-1 w-0 p-2",children:(0,a.jsxs)("div",{className:"flex items-start",children:[(0,a.jsx)("div",{className:"flex-shrink-0 pt-0.5",children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6 text-red-500",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"})})}),(0,a.jsx)("div",{className:"ml-3 flex-1",children:(0,a.jsx)("p",{className:"mt-1 text-sm text-gray-500",children:"你輸入的金額超過授權額度.需要前往增加授權額度嘛?"})})]})}),(0,a.jsx)("div",{className:"flex border-l border-gray-200",children:(0,a.jsx)("button",{onClick:s=>{s.preventDefault(),o(0),v.default.dismiss(e.id),console.log("close")},className:"w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-red-500 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500",children:"去授權"})})]}),{position:"bottom-center",duration:5e3}))},[T,b]),(0,i.KQ)({address:G,token:p.lS.address[Z],watch:!0,onSuccess(e){m(Number(e.formatted))}}),(0,i.KQ)({address:G,token:p.xR.address,watch:!0,onSuccess(e){N(Number(e.formatted))}});let $=(0,i.GG)({address:p.c7.address[Z],abi:p.c7.abi,functionName:"createC2COrder",onError(e){v.default.error(e.details),B(!1),R(!1)}});(0,i.BX)({hash:null===(t=$.data)||void 0===t?void 0:t.hash,onSuccess(e){e.blockNumber&&(v.default.success("交易成功"),setTimeout(()=>{B(!1),R(!1),r()},3e3))}});let K=()=>{if(T<1){v.default.error("交易數量太低");return}if("0"==n.orderType&&x<Number((0,u.dF)(n.price))*T){v.default.error("USDT餘額不足");return}if("1"==n.orderType&&c<T){v.default.error("TCP餘額不足");return}B(!0),$.write({args:[(0,u.vz)(n.id.toString(),0),(0,u.fi)(T.toString())],value:(0,u.fi)("0.003")})};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"",children:(0,a.jsx)("div",{className:"  flex flex-col justify-center",children:(0,a.jsx)("div",{className:"px-5 sm:px-6 py-8",children:(0,a.jsxs)("div",{className:"max-w-md mx-auto",children:[(0,a.jsxs)("div",{className:"mb-6 flex justify-between",children:[(0,a.jsxs)("h1",{className:"h4 font-playfair-display text-slate-800",children:[j[n.orderType]," TCP"]}),(0,a.jsx)("button",{onClick:r,children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-10 h-10",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})})]}),(0,a.jsxs)("div",{className:"text-sm space-y-3",children:[(0,a.jsxs)("div",{className:"".concat(0!=l?"text-slate-400":""," flex"),children:[(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"".concat(l<=0?"hidden":""," w-6 h-6 text-green-600"),children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),"1、需要透過鏈上 ERC20 一次性批准",j[n.orderType]," TCP"]}),(0,a.jsxs)("div",{className:"".concat(1!=l?"text-slate-400":""," flex"),children:[(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"".concat(l<=1?"hidden":""," w-6 h-6 text-green-600"),children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),"2、確認",j[n.orderType]," TCP"]}),(0,a.jsxs)("div",{className:"".concat(1!=l?"hidden":""," space-y-3"),children:[(0,a.jsxs)("div",{className:"flex ",children:[(0,a.jsx)("div",{children:"單價"}),(0,a.jsxs)("div",{className:"ml-2 text-green-600 font-bold",children:[(0,u.dF)(n.price)," USDT"]})]}),(0,a.jsxs)("div",{className:"flex  text-sm",children:[(0,a.jsx)("div",{children:"每筆限額"}),(0,a.jsxs)("div",{className:"ml-2  font-bold",children:[(0,u.dF)(n.min),"-",(0,u.dF)(n.max)," TCP"]})]}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"flex justify-between",children:[(0,a.jsxs)("label",{className:" text-sm font-medium mb-1",htmlFor:"total",children:[j[n.orderType],"數量 ",(0,a.jsx)("span",{className:"text-rose-500",children:"*"})]}),(0,a.jsxs)("label",{className:" text-sm mb-1",htmlFor:"total",children:["可用餘額:",(0,a.jsxs)("span",{className:"font-medium ",children:[0==n.orderType?x:c," ",0==n.orderType?"USDT":"TCP"]})]})]}),(0,a.jsx)("input",{id:"total",className:"form-input py-2 w-full",type:"number",value:T,onChange:e=>{e.preventDefault(),e.stopPropagation(),(Number(e.target.value)<Number((0,u.dF)(n.min))||Number(e.target.value)>Number((0,u.dF)(n.max)))&&v.default.error("超出每比限額範圍"),S(e.target.value)},required:!0})]}),(0,a.jsxs)("div",{className:"flex ",children:[(0,a.jsx)("div",{children:0==n.orderType?"需支付":"將得到"}),(0,a.jsxs)("div",{className:"ml-2  font-bold",children:[Number((0,u.dF)(n.price))*T," USDT"]})]})]})]}),(0,a.jsxs)("div",{className:"mt-4",children:[(0,a.jsx)("div",{className:"".concat(0!=l?"hidden":""),children:(0,a.jsxs)(f.Z,{isLoading:D,disabled:D,onClick:()=>{z(!0),1==n.orderType?U({args:[p.c7.address[Z],h.Bz]}):X.write({args:[p.c7.address[Z],h.Bz]})},children:["允許",j[n.orderType]," TCP"]})}),(0,a.jsx)("div",{className:"".concat(1!=l?"hidden":""),children:(0,a.jsx)(f.Z,{isLoading:A,disabled:M||A,onClick:K,children:"交易"})})]})]})})})})})}function w(){let e=(0,r._)(['\n    query defaultQuery($where: C2CAdvertised_filter = {orderType: "-1",isDelete:false}) {\n      c2Cadvertiseds(where: $where) {\n        total\n        sold\n        price\n        owner\n        orderType\n        orderCount\n        min\n        max\n        isDelete\n        id\n        createTime\n        nickName\n      }\n    }\n  ']);return w=function(){return e},e}function y(){let e=(0,r._)(['\n    query cerQuery($orderType: BigInt = "0") {\n      c2Cadvertiseds(where: {nickName_not: "0", orderType: $orderType,isDelete:false}) {\n        total\n        sold\n        price\n        owner\n        orderType\n        orderCount\n        min\n        max\n        isDelete\n        id\n        createTime\n        nickName\n      }\n    }\n  ']);return y=function(){return e},e}function T(){let e=(0,r._)(['\n  query ownerQuery($owner: String = "") {\n    c2Cadvertiseds(\n      where: {owner: $owner,isDelete:false}\n    ) {\n      id\n      isDelete\n      max\n      min\n      orderCount\n      orderType\n      owner\n      sold\n      price\n      total\n      createTime\n      nickName\n    }\n  }\n  ']);return T=function(){return e},e}function S(){let{address:e}=(0,i.mA)(),s=(0,i.xx)(),[t,r]=(0,d.useState)({orderType:"-1",isDelete:!1}),[h,f]=(0,d.useState)("-1"),v=(0,c.Ps)(w()),N=(0,c.Ps)(y()),j=(0,c.Ps)(T()),[S,k]=(0,d.useState)(),[C,F]=(0,d.useState)(),[P,L]=(0,d.useState)(!1),[E,D]=(0,d.useState)(!1),[z,A]=(0,d.useState)(!1),[B,M]=(0,d.useState)({max:"0",min:"0",orderCount:"0",orderType:1,price:"0",sold:"0",total:"0"}),[R,G]=(0,d.useState)(),_=(0,m.a)(j,{variables:{owner:e&&e.toLowerCase()}}),W=(0,o.useSearchParams)();(0,d.useEffect)(()=>{let e=W.get("type");"buy"==e?(S?M(S):M(e=>({max:"0",min:"0",orderCount:"0",orderType:1,price:"0",sold:"0",total:"0"})),f("0")):"sell"==e&&(C?M(C):M(e=>({max:"0",min:"0",orderCount:"0",orderType:0,price:"0",sold:"0",total:"0"})),f("1"))},[W]),(0,i.Dm)({contracts:[{address:p.wA.address[s.toString()],abi:p.wA.abi,functionName:"getParentAddress",args:[e]},{address:p.wA.address[s.toString()],abi:p.wA.abi,functionName:"getRecommendAccounts",args:[e]}],watch:!0,onSuccess:e=>{let s=[];if(e[0].result&&s.push(e[0].result.toString().toLowerCase()),e[1].result)for(let t=0;t<e[1].result.length;t++){let r=e[1].result[t];s.push(r.toString())}r(e=>({...e,orderType:h,owner_in:s}))},onError:e=>{console.log("useContractReads error",e)}}),(0,d.useEffect)(()=>{if(_.data&&_.data.c2Cadvertiseds){let e=_.data.c2Cadvertiseds;for(let s=0;s<e.length;s++){let t=e[s];1==t.orderType&&k(t),0==t.orderType&&F(t)}}},[_.data]),(0,d.useEffect)(()=>{E||_.refetch()},[E]),(0,d.useEffect)(()=>{let e=W.get("type");"buy"==e&&S&&M(S)},[S]),(0,d.useEffect)(()=>{let e=W.get("type");"sell"==e&&C&&M(C)},[C]);let{loading:Z,error:q,data:Q}=(0,m.a)(v,{variables:{where:t}}),U=(0,m.a)(N,{variables:{orderType:t.orderType}}),X=e=>{if(!e)return"No Account";let s=e.match(/^(0x[a-zA-Z0-9]{6})[a-zA-Z0-9]+([a-zA-Z0-9]{8})$/);return s?"".concat(s[1],"...").concat(s[2]):e};return(0,a.jsxs)("section",{className:"",children:[(0,a.jsx)("div",{className:"max-w-6xl mx-auto px-4 sm:px-6",children:(0,a.jsxs)("div",{className:"py-6 md:py-20 ",children:[(0,a.jsxs)("div",{className:"max-w-sm mx-auto sm:max-w-none grid gap-3 sm:grid-cols-2 md:grid-cols-3 sm:gap-x-6 sm:gap-y-8 items-start mb-12 md:mb-16","data-aos-id-testimonials":!0,children:[U.data&&U.data.c2Cadvertiseds.map((e,s)=>(0,a.jsxs)("article",{className:"h-full flex flex-col bg-white p-6 shadow-xl","data-aos":"fade-up","data-aos-anchor":"[data-aos-id-testimonials]",children:[(0,a.jsxs)("header",{className:"",children:[(0,a.jsxs)("div",{className:"flex items-center align-middle space-x-1",children:[(0,a.jsx)(l(),{diameter:20,seed:(0,n.jsNumberForAddress)(e.owner)}),(0,a.jsx)("span",{className:"font-playfair-display text-blue-600",children:e.nickName?e.nickName:X(e.owner)}),e.nickName&&(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"w-6 h-6 text-yellow-400",children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z",clipRule:"evenodd"})})]}),(0,a.jsxs)("div",{className:"text-slate-500",children:[(0,a.jsx)("span",{className:"font-playfair-display ",children:(0,u.dF)(e.sold)}),(0,a.jsx)("label",{className:"text-sm",children:" 成交量"})]})]}),(0,a.jsxs)("div",{className:" mt-5 w-full",children:[(0,a.jsx)("span",{className:"h3 text-slate-800  font-playfair-display mr-2",children:(0,u.dF)(e.price)}),(0,a.jsx)("span",{className:"text-sm font-medium",children:"USDT"})]}),(0,a.jsxs)("div",{className:"flex space-x-2 mt-2 font-medium",children:[(0,a.jsx)("p",{className:"text-slate-500",children:"數量"}),(0,a.jsxs)("p",{className:"",children:[Number((0,u.dF)(e.total))-Number((0,u.dF)(e.sold))," TCP"]})]}),(0,a.jsxs)("div",{className:"flex space-x-2 mt-2 font-medium",children:[(0,a.jsx)("p",{className:"text-slate-500",children:"限額"}),(0,a.jsxs)("p",{className:"",children:[(0,u.dF)(e.min),"-",(0,u.dF)(e.max)," TCP"]})]}),(0,a.jsxs)("div",{className:"mt-2",children:[0==e.orderType&&(0,a.jsx)("button",{className:"btn bg-green-600 w-full text-white rounded-md",onClick:s=>{s.preventDefault(),s.stopPropagation(),G(e),A(!0)},children:"購買 TCP"}),1==e.orderType&&(0,a.jsx)("button",{className:"btn bg-red-600 w-full text-white rounded-md",onClick:s=>{s.preventDefault(),s.stopPropagation(),G(e),A(!0)},children:"出售 TCP"})]})]},s)),Q&&Q.c2Cadvertiseds.map((e,s)=>(0,a.jsxs)("article",{className:"h-full flex flex-col bg-white p-6 shadow-xl","data-aos":"fade-up","data-aos-anchor":"[data-aos-id-testimonials]",children:[(0,a.jsxs)("header",{className:"",children:[(0,a.jsxs)("div",{className:"flex items-center align-middle space-x-1",children:[(0,a.jsx)(l(),{diameter:20,seed:(0,n.jsNumberForAddress)(e.owner)}),(0,a.jsx)("span",{className:"font-playfair-display text-blue-600",children:e.nickName?e.nickName:X(e.owner)}),e.nickName&&(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"w-6 h-6 text-yellow-400",children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z",clipRule:"evenodd"})})]}),(0,a.jsxs)("div",{className:"text-slate-500",children:[(0,a.jsx)("span",{className:"font-playfair-display ",children:(0,u.dF)(e.sold)}),(0,a.jsx)("label",{className:"text-sm",children:" 成交量"})]})]}),(0,a.jsxs)("div",{className:" mt-5 w-full",children:[(0,a.jsx)("span",{className:"h3 text-slate-800  font-playfair-display mr-2",children:(0,u.dF)(e.price)}),(0,a.jsx)("span",{className:"text-sm font-medium",children:"USDT"})]}),(0,a.jsxs)("div",{className:"flex space-x-2 mt-2 font-medium",children:[(0,a.jsx)("p",{className:"text-slate-500",children:"數量"}),(0,a.jsxs)("p",{className:"",children:[Number((0,u.dF)(e.total))-Number((0,u.dF)(e.sold))," TCP"]})]}),(0,a.jsxs)("div",{className:"flex space-x-2 mt-2 font-medium",children:[(0,a.jsx)("p",{className:"text-slate-500",children:"限額"}),(0,a.jsxs)("p",{className:"",children:[(0,u.dF)(e.min),"-",(0,u.dF)(e.max)," TCP"]})]}),(0,a.jsxs)("div",{className:"mt-2",children:[0==e.orderType&&(0,a.jsx)("button",{className:"btn bg-green-600 w-full text-white rounded-md",onClick:s=>{s.preventDefault(),s.stopPropagation(),G(e),A(!0)},children:"購買 TCP"}),1==e.orderType&&(0,a.jsx)("button",{className:"btn bg-red-600 w-full text-white rounded-md",onClick:s=>{s.preventDefault(),s.stopPropagation(),G(e),A(!0)},children:"出售 TCP"})]})]},s))]}),(0,a.jsx)("div",{className:"text-center fixed bottom-0 right-0 ".concat(P||"buy"==W.get("type")?"hidden":""),onClick:()=>{L(!0)},children:(0,a.jsx)("button",{className:" text-white bg-yellow-600 hover:bg-yellow-700 group w-10 h-16 rounded-l-lg  animate-bounce2",children:(0,a.jsx)("div",{className:"tracking-normal text-white-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out",children:"<-"})})}),(0,a.jsx)("div",{className:"text-center fixed bottom-0 right-0 ".concat(P?"":"hidden"),children:(0,a.jsxs)("div",{className:" text-white  h-16",children:[(0,a.jsx)("div",{className:"h-full my-auto btn border-r-white bg-yellow-600 hover:bg-yellow-700 rounded-l-lg",onClick:()=>{D(!0)},children:"發布"}),(0,a.jsx)("button",{className:"text-white bg-yellow-600 hover:bg-yellow-700 group w-10 h-16 rounded-r-lg ",onClick:()=>{L(!1)},children:(0,a.jsx)("div",{className:"tracking-normal text-white-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out",children:"->"})})]})})]})}),(0,a.jsx)(x.Z,{id:"C2cOrderAdd",ariaLabel:"1232",show:z,handleClose:()=>{A(!1)},children:(0,a.jsx)(g,{close:()=>{A(!1)},c2cAdvertised:R})}),(0,a.jsx)(x.Z,{id:"C2cAdd",ariaLabel:"1232",show:E,handleClose:()=>{D(!1)},children:(0,a.jsx)(b,{close:()=>{D(!1)},c2cAdvertised:B})})]})}},69524:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return n}});var r=t(9268),a=t(56008);function n(){let e=(0,a.useSearchParams)(),s=e.get("type");return(0,r.jsxs)("section",{className:"relative",children:[(0,r.jsx)("div",{className:"absolute inset-0 bg-slate-900 pointer-events-none -z-10","aria-hidden":"true"}),(0,r.jsx)("div",{className:"relative max-w-6xl mx-auto px-4 sm:px-6",children:(0,r.jsx)("div",{className:"pt-24 pb-12",children:(0,r.jsx)("div",{className:"max-w-3xl mx-auto text-center",children:(0,r.jsx)("h2",{className:"h2 font-playfair-display text-white",children:"buy"==s?"我要買":"我要賣"})})})})]})}},82108:function(e,s,t){"use strict";t.d(s,{Z:function(){return a}});var r=t(9268);function a(e){let{children:s,isLoading:t=!1,disabled:a=!1,className:n="w-full btn-sm  mt-4",onClick:l}=e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("button",{disabled:a,className:"".concat(a?"text-white bg-slate-600 hover:bg-slate-700":"text-white bg-blue-600 hover:bg-blue-700"," ").concat(n),onClick:e=>{e.preventDefault(),e.stopPropagation(),l()},children:[(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"".concat(t?"flex":"hidden"," w-6 h-6 animate-spin"),children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"})}),s]})})}},81292:function(e,s,t){"use strict";t.d(s,{Z:function(){return l}});var r=t(9268),a=t(86006),n=t(9666);function l(e){let{children:s,id:t,ariaLabel:l,show:i,handleClose:d}=e,o=(0,a.useRef)(null);return(0,a.useEffect)(()=>{let e=e=>{var s;let{target:t}=e;!i||(null===(s=o.current)||void 0===s?void 0:s.contains(t))||d()};return document.addEventListener("click",e),()=>document.removeEventListener("click",e)},[i,d,o]),(0,a.useEffect)(()=>{let e=e=>{let{keyCode:s}=e;27===s&&d()};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[d]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.u,{show:i,enter:"transition ease-out duration-200",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition ease-out duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",className:"fixed inset-0 z-50 bg-black bg-opacity-75 transition-opacity","aria-hidden":"true"}),(0,r.jsx)(n.u,{show:i,enter:"transition ease-out duration-200",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ttransition ease-out duration-200",leaveFrom:"oopacity-100 scale-100",leaveTo:"opacity-0 scale-95",id:t,className:"fixed inset-0 z-50 overflow-hidden flex items-center justify-center transform px-4 sm:px-6",role:"dialog","aria-modal":"true","aria-labelledby":l,children:(0,r.jsx)("div",{className:"bg-white overflow-auto  max-h-full",ref:o,children:s})})]})}}},function(e){e.O(0,[6882,9889,6032,3684,7388,2091,3829,3430,2667,8139,1744],function(){return e(e.s=3188)}),_N_E=e.O()}]);