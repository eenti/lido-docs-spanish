"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3081],{4573:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>o,contentTitle:()=>t,default:()=>p,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var s=r(4848),n=r(8453);const c={},t="Verificaci\xf3n del script EVM desde el voto de Aragon",a={id:"gu\xedas/checking-aragon-vote",title:"Verificaci\xf3n del script EVM desde el voto de Aragon",description:"Hemos publicado un breve replit con las partes del script que usamos para preparar los votos: EVMVoteScriptParser#main.py",source:"@site/docs/gu\xedas/checking-aragon-vote.md",sourceDirName:"gu\xedas",slug:"/gu\xedas/checking-aragon-vote",permalink:"/lido-docs-spanish/gu\xedas/checking-aragon-vote",draft:!1,unlisted:!1,editUrl:"https://github.com/adminseedlatam/lido-docs-spanish/edit/main/docs/gu\xedas/checking-aragon-vote.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Gu\xeda para ser un firmante en cualquier multisig del Lido DAO",permalink:"/lido-docs-spanish/gu\xedas/multisig-signer-manual"},next:{title:"C\xf3mo verificar que el multisig es uno de Gnosis",permalink:"/lido-docs-spanish/gu\xedas/checking-gnosis-safe"}},o={},l=[{value:"Verificaci\xf3n del script EVM",id:"verificaci\xf3n-del-script-evm",level:2},{value:"C\xf3mo verificar el propio replit",id:"c\xf3mo-verificar-el-propio-replit",level:2}];function d(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"verificaci\xf3n-del-script-evm-desde-el-voto-de-aragon",children:"Verificaci\xf3n del script EVM desde el voto de Aragon"}),"\n",(0,s.jsxs)(i.p,{children:["Hemos publicado un breve replit con las partes del script que usamos para preparar los votos: ",(0,s.jsx)(i.a,{href:"https://replit.com/@VictorSuzdalev/EVMVoteScriptParser#main.py",children:"EVMVoteScriptParser#main.py"})]}),"\n",(0,s.jsx)(i.h2,{id:"verificaci\xf3n-del-script-evm",children:"Verificaci\xf3n del script EVM"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Iniciar replit."}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"https://user-images.githubusercontent.com/4445523/149335803-4b7c71e2-12a1-4c48-973c-c064ffa4d0a7.jpeg",alt:""})}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["Abre el ",(0,s.jsx)(i.a,{href:"https://replit.com/@VictorSuzdalev/EVMVoteScriptParser#main.py",children:"script replit"}),"."]}),"\n",(0,s.jsxs)(i.li,{children:["Haz clic en el gran bot\xf3n verde ",(0,s.jsx)(i.code,{children:"RUN"})," en la parte superior."]}),"\n",(0,s.jsx)(i.li,{children:"El script comenzar\xe1 a instalar las dependencias, esto tomar\xe1 un par de minutos."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Obtener el script EVM del voto."}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"https://user-images.githubusercontent.com/4445523/149335811-1332324b-b1ba-4e4a-af2e-9c79c347ff43.jpeg",alt:""})}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["Abre el contrato de votaci\xf3n en Etherscan ",(0,s.jsx)(i.a,{href:"https://etherscan.io/address/0x2e59A20f205bB85a89C53f1936454680651E618e#readProxyContract",children:"0x2e59A20f205bB85a89C53f1936454680651E618e#readProxyContract"})," (puedes verificar la direcci\xf3n del contrato de votaci\xf3n en ",(0,s.jsx)(i.a,{href:"/deployed-contracts/#dao-contracts",children:"Contratos Desplegados"}),")."]}),"\n",(0,s.jsxs)(i.li,{children:["Revisa el m\xe9todo ",(0,s.jsx)(i.code,{children:"getVote"})," (sexto en la lista): ingresa el voto en cuesti\xf3n y presiona ",(0,s.jsx)(i.code,{children:"query"}),"."]}),"\n",(0,s.jsxs)(i.li,{children:["Copia el texto del ",(0,s.jsx)(i.code,{children:"script"})," (una cadena larga que comienza con 0x)."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Verificar el script."}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:"Vuelve a replit y espera a que termine la configuraci\xf3n."}),"\n",(0,s.jsxs)(i.li,{children:["El replit te pedir\xe1 el script EVM; pega el texto de Etherscan y presiona ",(0,s.jsx)(i.code,{children:"enter"})," para ver las acciones en el script."]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.img,{src:"https://user-images.githubusercontent.com/4445523/149335822-1bdc0c66-18f0-43c3-b2cf-124f3706ae36.png",alt:""}),"\n",(0,s.jsx)(i.img,{src:"https://user-images.githubusercontent.com/4445523/149335833-3701273a-cb7a-4076-91c7-93cde4d2db4c.png",alt:""})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"\xa1Eso es todo! \ud83d\udcaa\ud83c\udf89\ud83c\udfdd"}),"\n",(0,s.jsx)(i.h2,{id:"c\xf3mo-verificar-el-propio-replit",children:"C\xf3mo verificar el propio replit"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Se pueden comparar los resultados del an\xe1lisis para votos ya aprobados con las descripciones en la interfaz de usuario de votaci\xf3n (",(0,s.jsx)(i.a,{href:"https://vote.lido.fi/vote/172",children:"voto #172"})," puede ser un buen ejemplo)."]}),"\n",(0,s.jsxs)(i.li,{children:["El c\xf3digo del replit est\xe1 disponible bajo el bot\xf3n ",(0,s.jsx)(i.code,{children:"Show files"})," en la izquierda; est\xe1 basado en gran medida en los scripts y herramientas del repositorio ",(0,s.jsx)(i.a,{href:"https://github.com/lidofinance/scripts",children:"scripts"}),"."]}),"\n"]})]})}function p(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,i,r)=>{r.d(i,{R:()=>t,x:()=>a});var s=r(6540);const n={},c=s.createContext(n);function t(e){const i=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),s.createElement(c.Provider,{value:i},e.children)}}}]);