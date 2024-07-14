"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8201],{490:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var t=s(4848),a=s(8453);const o={},r="Votaci\xf3n en el DAO con Etherscan",c={id:"gu\xedas/etherscan-voting",title:"Votaci\xf3n en el DAO con Etherscan",description:"As\xed es como se vota en el Aragon DAO de Lido utilizando la interfaz de Etherscan.",source:"@site/docs/gu\xedas/etherscan-voting.md",sourceDirName:"gu\xedas",slug:"/gu\xedas/etherscan-voting",permalink:"/gu\xedas/etherscan-voting",draft:!1,unlisted:!1,editUrl:"https://github.com/adminseedlatam/lido-docs-spanish/edit/main/docs/gu\xedas/etherscan-voting.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Palancas del Protocolo",permalink:"/gu\xedas/protocol-levers"},next:{title:"Gu\xeda para Easy Track",permalink:"/gu\xedas/easy-track-guide"}},i={},d=[{value:"Gu\xeda en video",id:"gu\xeda-en-video",level:2},{value:"Preparaci\xf3n",id:"preparaci\xf3n",level:2},{value:"Votaci\xf3n",id:"votaci\xf3n",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"votaci\xf3n-en-el-dao-con-etherscan",children:"Votaci\xf3n en el DAO con Etherscan"}),"\n",(0,t.jsx)(n.p,{children:"As\xed es como se vota en el Aragon DAO de Lido utilizando la interfaz de Etherscan."}),"\n",(0,t.jsx)(n.h2,{id:"gu\xeda-en-video",children:"Gu\xeda en video"}),"\n",(0,t.jsx)("div",{style:{position:"relative",width:"100%",paddingBottom:"62.5%",height:0},children:(0,t.jsx)("iframe",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"},src:"https://www.youtube.com/embed/5YTJgudYHs8",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}),"\n",(0,t.jsx)(n.h2,{id:"preparaci\xf3n",children:"Preparaci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["Obt\xe9n la direcci\xf3n del contrato de votaci\xf3n Aragon del DAO de Lido desde la p\xe1gina ",(0,t.jsx)(n.a,{href:"/deployed-contracts/#dao-contracts",children:"Contratos Desplegados"}),". Deber\xeda ser: [0x2e59A20f205bB85a89C53f1936454680651E618e]."]}),"\n",(0,t.jsxs)(n.p,{children:["Obt\xe9n el ID del voto, ya sea desde ",(0,t.jsx)(n.a,{href:"https://vote.lido.fi",children:"la interfaz de votaci\xf3n"}),":"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(9321).A+"",width:"3037",height:"1631"})}),"\n",(0,t.jsxs)(n.p,{children:["o desde ",(0,t.jsx)(n.a,{href:"https://etherscan.io/address/0x2e59A20f205bB85a89C53f1936454680651E618e#readProxyContract",children:"Etherscan"}),":"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(2884).A+"",width:"2552",height:"1557"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:['Abre la pesta\xf1a "',(0,t.jsx)(n.a,{href:"https://etherscan.io/address/0x2e59A20f205bB85a89C53f1936454680651E618e#readProxyContract",children:"Contrato / Leer como Proxy"}),'".']}),"\n",(0,t.jsxs)(n.li,{children:["Obt\xe9n el n\xfamero total de votos desde el m\xe9todo ",(0,t.jsx)(n.code,{children:"votesLength"})," (n\xfamero 21 en ",(0,t.jsx)(n.a,{href:"https://etherscan.io/address/0x2e59A20f205bB85a89C53f1936454680651E618e#readProxyContract",children:"la p\xe1gina de Etherscan"}),")."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(4635).A+"",width:"2556",height:"1550"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsxs)(n.li,{children:["Si deseas votar en el \xfaltimo voto, toma ",(0,t.jsx)(n.code,{children:"votesLength - 1"})," como ID. Si ",(0,t.jsx)(n.code,{children:"votesLength"})," es ",(0,t.jsx)(n.code,{children:"89"}),", el \xfaltimo voto tendr\xeda el ID ",(0,t.jsx)(n.code,{children:"88"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Puedes verificar los datos del voto con el m\xe9todo ",(0,t.jsx)(n.code,{children:"getVote"})," (n\xfamero 6 en ",(0,t.jsx)(n.a,{href:"https://etherscan.io/address/0x2e59A20f205bB85a89C53f1936454680651E618e#readProxyContract",children:"la p\xe1gina de Etherscan"}),")."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(22).A+"",width:"2556",height:"1550"})}),"\n",(0,t.jsx)(n.h2,{id:"votaci\xf3n",children:"Votaci\xf3n"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:['Abre la pesta\xf1a "',(0,t.jsx)(n.a,{href:"https://etherscan.io/address/0x2e59A20f205bB85a89C53f1936454680651E618e#writeProxyContract",children:"Contrato / Escribir como Proxy"}),'" en Etherscan.']}),"\n",(0,t.jsx)(n.li,{children:"Conecta la interfaz de Etherscan a Web3 con MetaMask o WalletConnect."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(5991).A+"",width:"2556",height:"1550"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsxs)(n.li,{children:["Utiliza el m\xe9todo ",(0,t.jsx)(n.code,{children:"vote"})," (n\xfamero 6 en ",(0,t.jsx)(n.a,{href:"https://etherscan.io/address/0x2e59A20f205bB85a89C53f1936454680651E618e#writeProxyContract",children:"la p\xe1gina de Etherscan"}),")."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(6365).A+"",width:"2556",height:"1550"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"_voteId"})," es el ID del voto obtenido en el punto 2."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"_supports"})," es la bandera que indica si est\xe1s votando a favor (",(0,t.jsx)(n.code,{children:"true"}),") o en contra (",(0,t.jsx)(n.code,{children:"false"}),") del voto."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"_executesIfDecided"})," es la bandera para ejecutar el voto si se decide inmediatamente en la transacci\xf3n, ",(0,t.jsx)(n.code,{children:"true"})," o ",(0,t.jsx)(n.code,{children:"false"}),". Seg\xfan experiencias previas de votos, puedes dejar esto como ",(0,t.jsx)(n.code,{children:"false"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsxs)(n.li,{children:["Completa los par\xe1metros ",(0,t.jsx)(n.code,{children:"_voteId"}),", ",(0,t.jsx)(n.code,{children:"_supports"})," y ",(0,t.jsx)(n.code,{children:"_executesIsDecided"}),", y env\xeda la transacci\xf3n."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(2390).A+"",width:"2556",height:"1550"})}),"\n",(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsx)(n.li,{children:"Firma la transacci\xf3n."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(4787).A+"",width:"2556",height:"1550"})}),"\n",(0,t.jsx)(n.p,{children:"\xa1Eso es todo! \ud83c\udf89"})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},5991:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/connect-wallet-9d36c783bcdfc883e8a6bb67b0005f55.png"},2884:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/etherscan_vote_address-6b0ef7bc729d0a93c70708192704f6b7.png"},22:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/get-vote-e391f363a361a2c601a5c31824cce865.png"},4787:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/sign-transaction-43d7fe11cdb73563a7f24d4e72747a99.png"},6365:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/vote-1-2e9074532ab687daf29d69ec07fe62fd.png"},2390:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/vote-2-728cd473962eaf4f618b8ac7c55ca416.png"},4635:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/votes-length-64fe5aea0d17559b1a8841b3e8392279.png"},9321:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/voting_ui-fa656d75b1ffd97250faf3959d7c6aab.png"},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>c});var t=s(6540);const a={},o=t.createContext(a);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);