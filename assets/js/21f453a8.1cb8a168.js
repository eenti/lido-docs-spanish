"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8165],{6177:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var r=n(4848),s=n(8453);const t={},i="C\xf3mo transferir tokens a trav\xe9s de Jumpgate",o={id:"gu\xedas/jumpgates",title:"C\xf3mo transferir tokens a trav\xe9s de Jumpgate",description:"Los Jumpgates son contratos que facilitan transferencias de tokens entre cadenas bajo operaciones DAO. Cada Jumpgate est\xe1 configurado para trabajar con un token espec\xedfico y un destinatario predefinido. A continuaci\xf3n se describe el procedimiento para transferir tokens utilizando un Jumpgate.",source:"@site/docs/gu\xedas/jumpgates.md",sourceDirName:"gu\xedas",slug:"/gu\xedas/jumpgates",permalink:"/lido-docs-spanish/gu\xedas/jumpgates",draft:!1,unlisted:!1,editUrl:"https://github.com/adminseedlatam/lido-docs-spanish/edit/main/docs/gu\xedas/jumpgates.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"C\xf3mo reclamar el airdrop para los primeros stakers de Lido (LDO)",permalink:"/lido-docs-spanish/gu\xedas/early-staker-airdrop"},next:{title:"Par\xe1metros de Lido V2 en la red principal",permalink:"/lido-docs-spanish/gu\xedas/verify-lido-v2-upgrade-manual"}},c={},d=[{value:"1. Verificar el Jumpgate",id:"1-verificar-el-jumpgate",level:3},{value:"2. Transferir tokens al Jumpgate",id:"2-transferir-tokens-al-jumpgate",level:3},{value:"3. Transferir tokens a trav\xe9s del puente",id:"3-transferir-tokens-a-trav\xe9s-del-puente",level:3},{value:"4. Reclamar tokens",id:"4-reclamar-tokens",level:3}];function l(e){const a={a:"a",code:"code",h1:"h1",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.h1,{id:"c\xf3mo-transferir-tokens-a-trav\xe9s-de-jumpgate",children:"C\xf3mo transferir tokens a trav\xe9s de Jumpgate"}),"\n",(0,r.jsx)(a.p,{children:"Los Jumpgates son contratos que facilitan transferencias de tokens entre cadenas bajo operaciones DAO. Cada Jumpgate est\xe1 configurado para trabajar con un token espec\xedfico y un destinatario predefinido. A continuaci\xf3n se describe el procedimiento para transferir tokens utilizando un Jumpgate."}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.a,{href:"https://youtu.be/IqphF28aTUU",children:(0,r.jsx)(a.strong,{children:"Ver tutorial en video"})})}),"\n",(0,r.jsx)(a.h3,{id:"1-verificar-el-jumpgate",children:"1. Verificar el Jumpgate"}),"\n",(0,r.jsx)(a.p,{children:"En este paso nos aseguraremos de que el Jumpgate est\xe9 configurado correctamente. Solo necesitar\xe1s hacer esto una vez, ya que los Jumpgates son contratos no actualizables."}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["Ve a ",(0,r.jsx)(a.a,{href:"https://etherscan.io/",children:"Etherscan"}),' y abre la p\xe1gina del Jumpgate. Haz clic en la pesta\xf1a "Contract" (Contrato). El tick verde confirma que el c\xf3digo fuente est\xe1 verificado. Verifica los par\xe1metros:',"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"arbiterFee"})," siempre es 0;"]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"bridge"})," es la direcci\xf3n del puente. Actualmente, todos los Jumpgates utilizan el puente del Token Wormhole en ",(0,r.jsx)(a.a,{href:"https://etherscan.io/address/0x3ee18B2214AFF97000D974cf647E7C347E8fa585",children:(0,r.jsx)(a.code,{children:"0x3ee18B2214AFF97000D974cf647E7C347E8fa585"})}),". Puedes verificar la direcci\xf3n contra la ",(0,r.jsx)(a.a,{href:"https://book.wormhole.com/reference/contracts.html",children:"documentaci\xf3n de Wormhole"}),";"]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"nonce"})," siempre es 0;"]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"owner"})," es el Agente de Aragon en ",(0,r.jsx)(a.a,{href:"https://etherscan.io/address/0x3e40D73EB977Dc6a537aF587D48316feE66E9C8c",children:(0,r.jsx)(a.code,{children:"0x3e40D73EB977Dc6a537aF587D48316feE66E9C8c"})}),", verificable en ",(0,r.jsx)(a.a,{href:"/deployed-contracts/#dao-contracts",children:"Contratos desplegados"}),";"]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"recipient"})," es la direcci\xf3n del destinatario en formato hexadecimal. Para Solana, esto ser\xe1 una cuenta de token LDO codificada. Usa un ",(0,r.jsx)(a.a,{href:"https://appdevtools.com/base58-encoder-decoder",children:"decodificador Base 58"})," para decodificar esta secuencia hexadecimal al formato de direcci\xf3n de Solana."]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"recipientChain"})," es el identificador de la cadena de destino. Si el Jumpgate utiliza el puente Wormhole, puedes verificar el ID en la ",(0,r.jsx)(a.a,{href:"https://book.wormhole.com/reference/contracts.html",children:"documentaci\xf3n de Wormhole"}),", el ID de Solana es 1;"]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"renounceOwnership"})," deber\xeda producir un error;"]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"token"})," es la direcci\xf3n del token que se est\xe1 transfiriendo, por ejemplo, LDO en ",(0,r.jsx)(a.a,{href:"https://etherscan.io/address/0x5A98FcBEA516Cf06857215779Fd812CA3beF1B32",children:"0x5A98FcBEA516Cf06857215779Fd812CA3beF1B32"}),". Verifica la direcci\xf3n de LDO contra ",(0,r.jsx)(a.a,{href:"/deployed-contracts/#dao-contracts",children:"Contratos desplegados"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{src:n(4659).A+"",width:"2784",height:"1434"})}),"\n",(0,r.jsx)(a.h3,{id:"2-transferir-tokens-al-jumpgate",children:"2. Transferir tokens al Jumpgate"}),"\n",(0,r.jsx)(a.p,{children:"El Jumpgate es agn\xf3stico respecto a c\xf3mo se recibieron los tokens. Puedes transferir los tokens directamente o en el contexto de operaciones DAO mediante una votaci\xf3n de Aragon o una moci\xf3n de transferencia Easytrack."}),"\n",(0,r.jsx)(a.h3,{id:"3-transferir-tokens-a-trav\xe9s-del-puente",children:"3. Transferir tokens a trav\xe9s del puente"}),"\n",(0,r.jsx)(a.p,{children:"Ahora podemos enviar tokens a trav\xe9s del puente. No podemos ingresar la cantidad de tokens para transferir, el Jumpgate transferir\xe1 el saldo completo de sus tokens."}),"\n",(0,r.jsxs)(a.p,{children:['Abre la pesta\xf1a "Write contract" y conecta tu cartera haciendo clic en el bot\xf3n "Connect to Web3". Ahora expandiremos la funci\xf3n ',(0,r.jsx)(a.code,{children:"bridgeTokens"}),' y haremos clic en "Write". Recuerda que esta funci\xf3n es sin permisos y puedes iniciar la transferencia desde cualquier cuenta siempre que tengas suficiente ether para la gasolina.']}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{src:n(3322).A+"",width:"1016",height:"580"})}),"\n",(0,r.jsx)(a.h3,{id:"4-reclamar-tokens",children:"4. Reclamar tokens"}),"\n",(0,r.jsx)(a.p,{children:"El proceso de reclamo puede variar seg\xfan el puente, pero por ahora todos los Jumpgates solo admiten el puente del Token Wormhole. Utilizaremos el sitio web del Portal Bridge (anteriormente Wormhole) para reclamar tokens en Solana."}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["Ve al sitio web de ",(0,r.jsx)(a.a,{href:"https://www.portalbridge.com/#/redeem",children:"Portal Bridge"}),' en la p\xe1gina de Redenci\xf3n y conecta tu cartera Ethereum. Selecciona "Token" en el men\xfa desplegable "Type" y "Ethereum" en "Source Chain". Pega el hash de la transacci\xf3n ',(0,r.jsx)(a.code,{children:"bridgeTokens"}),'. Al principio, esto puede producir un error porque Portal Bridge tarda un tiempo en procesar la transacci\xf3n del puente. Intenta este paso nuevamente en 10-20 minutos y haz clic en el bot\xf3n "Recover".']}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{src:n(1508).A+"",width:"2186",height:"1332"})}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:'"Recover" te redirigir\xe1 a la pesta\xf1a "Tokens", donde podr\xe1s confirmar la direcci\xf3n del destinatario. Conecta tu cartera de Solana, haz clic en "Redeem". Se te pedir\xe1 que firmes algunas transacciones. Una vez confirmadas, podr\xe1s ver los tokens en el destinatario.'}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{src:n(8994).A+"",width:"1962",height:"1474"})})]})}function p(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},4659:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/images/read-contract-b92acaf5b67c4e3fe78f250ba7144b25.png"},1508:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/images/recover-07dbb89650584510b48159abbd96463b.png"},8994:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/images/redeem-a3efe4f96f27e876c9784d53eb773d21.png"},3322:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/images/write-contract-98f7c6456f59b6ddc0e21e7f6d5fab86.png"},8453:(e,a,n)=>{n.d(a,{R:()=>i,x:()=>o});var r=n(6540);const s={},t=r.createContext(s);function i(e){const a=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(t.Provider,{value:a},e.children)}}}]);