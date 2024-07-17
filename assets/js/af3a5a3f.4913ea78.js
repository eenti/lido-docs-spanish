"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1955],{3308:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>c});var n=t(4848),r=t(8453);const d={},i="wstETH",l={id:"contracts/wsteth",title:"wstETH",description:"- C\xf3digo Fuente",source:"@site/docs/contracts/wsteth.md",sourceDirName:"contracts",slug:"/contracts/wsteth",permalink:"/contracts/wsteth",draft:!1,unlisted:!1,editUrl:"https://github.com/adminseedlatam/lido-docs-spanish/edit/main/docs/contracts/wsteth.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"WithdrawalVault",permalink:"/contracts/withdrawal-vault"},next:{title:"DepositSecurityModule",permalink:"/contracts/deposit-security-module"}},a={},c=[{value:"\xbfQu\xe9 es wrapped stETH (wstETH)?",id:"qu\xe9-es-wrapped-steth-wsteth",level:2},{value:"\xbfPor qu\xe9 usar wstETH?",id:"por-qu\xe9-usar-wsteth",level:2},{value:"\xbfC\xf3mo usar wstETH?",id:"c\xf3mo-usar-wsteth",level:2},{value:"Atajo de Staking",id:"atajo-de-staking",level:3},{value:"Est\xe1ndares",id:"est\xe1ndares",level:2},{value:"M\xe9todos de Vista",id:"m\xe9todos-de-vista",level:2},{value:"getWstETHByStETH()",id:"getwstethbysteth",level:3},{value:"Par\xe1metros",id:"par\xe1metros",level:4},{value:"getStETHByWstETH()",id:"getstethbywsteth",level:3},{value:"Par\xe1metros",id:"par\xe1metros-1",level:4},{value:"stEthPerToken()",id:"stethpertoken",level:3},{value:"tokensPerStEth()",id:"tokenspersteth",level:3},{value:"M\xe9todos",id:"m\xe9todos",level:2},{value:"wrap()",id:"wrap",level:3},{value:"Par\xe1metros",id:"par\xe1metros-2",level:4},{value:"Devuelve",id:"devuelve",level:4},{value:"unwrap()",id:"unwrap",level:3},{value:"Par\xe1metros",id:"par\xe1metros-3",level:4},{value:"Devuelve",id:"devuelve-1",level:4},{value:"receive()",id:"receive",level:3}];function o(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"wsteth",children:"wstETH"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://github.com/lidofinance/lido-dao/blob/master/contracts/0.6.12/WstETH.sol",children:"C\xf3digo Fuente"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://etherscan.io/token/0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0",children:"Contrato Desplegado"})}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"qu\xe9-es-wrapped-steth-wsteth",children:"\xbfQu\xe9 es wrapped stETH (wstETH)?"}),"\n",(0,n.jsxs)(s.p,{children:["Es un token envoltorio ",(0,n.jsx)(s.a,{href:"https://eips.ethereum.org/EIPS/eip-20",children:"ERC-20"})," de acumulaci\xf3n de valor para ",(0,n.jsx)(s.code,{children:"stETH"}),". Su balance no cambia con cada informe del or\xe1culo, pero su valor en ",(0,n.jsx)(s.code,{children:"stETH"})," s\xed lo hace. Internamente, representa la ",(0,n.jsx)(s.a,{href:"https://lidofinance.github.io/docs/guides/lido-tokens-integration-guide#steth-internals-share-mechanics",children:"participaci\xf3n"})," del usuario en el suministro total de tokens ",(0,n.jsx)(s.code,{children:"stETH"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"por-qu\xe9-usar-wsteth",children:"\xbfPor qu\xe9 usar wstETH?"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"wstETH"})," se utiliza principalmente como una capa de compatibilidad para integrar ",(0,n.jsx)(s.code,{children:"stETH"})," en otros protocolos DeFi que no soportan tokens rebasables, especialmente puentes hacia L2s y otras cadenas, ya que los rebases no funcionan por defecto para activos puenteados."]}),"\n",(0,n.jsx)(s.h2,{id:"c\xf3mo-usar-wsteth",children:"\xbfC\xf3mo usar wstETH?"}),"\n",(0,n.jsxs)(s.p,{children:["El contrato puede ser utilizado como un envoltorio sin confianza que acepta tokens stETH y emite wstETH a cambio. Cuando el usuario desenvuelve, el contrato quema el ",(0,n.jsx)(s.code,{children:"wstETH"})," del usuario y le env\xeda el ",(0,n.jsx)(s.code,{children:"stETH"})," bloqueado a cambio."]}),"\n",(0,n.jsx)(s.h3,{id:"atajo-de-staking",children:"Atajo de Staking"}),"\n",(0,n.jsx)(s.p,{children:"El usuario puede enviar ETH con una transferencia regular a la direcci\xf3n del contrato y recibir wstETH a cambio. El contrato enviar\xe1 ETH al m\xe9todo submit de Lido, haciendo staking y envolviendo el stETH recibido de manera transparente."}),"\n",(0,n.jsx)(s.h2,{id:"est\xe1ndares",children:"Est\xe1ndares"}),"\n",(0,n.jsx)(s.p,{children:"El contrato implementa los siguientes est\xe1ndares de Ethereum:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://eips.ethereum.org/EIPS/eip-20",children:"ERC-20: Est\xe1ndar de Token"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://eips.ethereum.org/EIPS/eip-2612",children:"ERC-2612: Extensi\xf3n de Permiso para Aprobaciones Firmadas ERC-20"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://eips.ethereum.org/EIPS/eip-712",children:"EIP-712: Hashing y firma de datos estructurados tipados"})}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"m\xe9todos-de-vista",children:"M\xe9todos de Vista"}),"\n",(0,n.jsx)(s.h3,{id:"getwstethbysteth",children:"getWstETHByStETH()"}),"\n",(0,n.jsxs)(s.p,{children:["Devuelve la cantidad de ",(0,n.jsx)(s.code,{children:"wstETH"})," para una cantidad dada de ",(0,n.jsx)(s.code,{children:"stETH"})]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sol",children:"function getWstETHByStETH(uint256 _stETHAmount) returns (uint256)\n"})}),"\n",(0,n.jsx)(s.h4,{id:"par\xe1metros",children:"Par\xe1metros"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Nombre"}),(0,n.jsx)(s.th,{children:"Tipo"}),(0,n.jsx)(s.th,{children:"Descripci\xf3n"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"_stETHAmount"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"uint256"})}),(0,n.jsx)(s.td,{children:"cantidad de stETH"})]})})]}),"\n",(0,n.jsx)(s.h3,{id:"getstethbywsteth",children:"getStETHByWstETH()"}),"\n",(0,n.jsxs)(s.p,{children:["Devuelve la cantidad de ",(0,n.jsx)(s.code,{children:"stETH"})," para una cantidad dada de ",(0,n.jsx)(s.code,{children:"wstETH"})]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sol",children:"function getStETHByWstETH(uint256 _wstETHAmount) returns (uint256)\n"})}),"\n",(0,n.jsx)(s.h4,{id:"par\xe1metros-1",children:"Par\xe1metros"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Nombre del Par\xe1metro"}),(0,n.jsx)(s.th,{children:"Tipo"}),(0,n.jsx)(s.th,{children:"Descripci\xf3n"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"_wstETHAmount"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"uint256"})}),(0,n.jsx)(s.td,{children:"cantidad de wstETH"})]})})]}),"\n",(0,n.jsx)(s.h3,{id:"stethpertoken",children:"stEthPerToken()"}),"\n",(0,n.jsxs)(s.p,{children:["Devuelve la cantidad de tokens stETH correspondientes a un ",(0,n.jsx)(s.code,{children:"wstETH"})]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sol",children:"function stEthPerToken() returns (uint256)\n"})}),"\n",(0,n.jsx)(s.h3,{id:"tokenspersteth",children:"tokensPerStEth()"}),"\n",(0,n.jsxs)(s.p,{children:["Devuelve la cantidad de tokens ",(0,n.jsx)(s.code,{children:"wstETH"})," correspondientes a un ",(0,n.jsx)(s.code,{children:"stETH"})]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sol",children:"function tokensPerStEth() returns (uint256)\n"})}),"\n",(0,n.jsx)(s.h2,{id:"m\xe9todos",children:"M\xe9todos"}),"\n",(0,n.jsx)(s.h3,{id:"wrap",children:"wrap()"}),"\n",(0,n.jsxs)(s.p,{children:["Intercambia ",(0,n.jsx)(s.code,{children:"stETH"})," por ",(0,n.jsx)(s.code,{children:"wstETH"})]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sol",children:"function wrap(uint256 _stETHAmount) returns (uint256)\n"})}),"\n",(0,n.jsxs)(s.admonition,{type:"note",children:[(0,n.jsx)(s.p,{children:"Requisitos:"}),(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"_stETHAmount"})," debe ser mayor a cero"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"msg.sender"})," debe aprobar al menos ",(0,n.jsx)(s.code,{children:"_stETHAmount"})," de stETH a este contrato."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"msg.sender"})," debe tener al menos ",(0,n.jsx)(s.code,{children:"_stETHAmount"})," de stETH."]}),"\n"]})]}),"\n",(0,n.jsx)(s.h4,{id:"par\xe1metros-2",children:"Par\xe1metros"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Nombre del Par\xe1metro"}),(0,n.jsx)(s.th,{children:"Tipo"}),(0,n.jsx)(s.th,{children:"Descripci\xf3n"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"_stETHAmount"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"uint256"})}),(0,n.jsx)(s.td,{children:"cantidad de stETH para envolver a cambio de wstETH"})]})})]}),"\n",(0,n.jsx)(s.h4,{id:"devuelve",children:"Devuelve"}),"\n",(0,n.jsx)(s.p,{children:"Cantidad de wstETH que el usuario recibe despu\xe9s de envolver"}),"\n",(0,n.jsx)(s.h3,{id:"unwrap",children:"unwrap()"}),"\n",(0,n.jsxs)(s.p,{children:["Intercambia wstETH por ",(0,n.jsx)(s.code,{children:"stETH"})]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sol",children:"function unwrap(uint256 _wstETHAmount) returns (uint256)\n"})}),"\n",(0,n.jsxs)(s.admonition,{type:"note",children:[(0,n.jsx)(s.p,{children:"Requisitos:"}),(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"_wstETHAmount"})," debe ser mayor a cero"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"msg.sender"})," debe tener al menos ",(0,n.jsx)(s.code,{children:"_wstETHAmount"})," de wstETH."]}),"\n"]})]}),"\n",(0,n.jsx)(s.h4,{id:"par\xe1metros-3",children:"Par\xe1metros"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Nombre del Par\xe1metro"}),(0,n.jsx)(s.th,{children:"Tipo"}),(0,n.jsx)(s.th,{children:"Descripci\xf3n"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"_wstETHAmount"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"uint256"})}),(0,n.jsx)(s.td,{children:"cantidad de wstETH para desenvolver a cambio de stETH"})]})})]}),"\n",(0,n.jsx)(s.h4,{id:"devuelve-1",children:"Devuelve"}),"\n",(0,n.jsx)(s.p,{children:"Cantidad de stETH que el usuario recibe despu\xe9s de desenvolver"}),"\n",(0,n.jsx)(s.h3,{id:"receive",children:"receive()"}),"\n",(0,n.jsxs)(s.p,{children:["Atajo para hacer staking de ETH y envolver autom\xe1ticamente el ",(0,n.jsx)(s.code,{children:"stETH"})," recibido"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sol",children:"receive() payable\n"})})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},8453:(e,s,t)=>{t.d(s,{R:()=>i,x:()=>l});var n=t(6540);const r={},d=n.createContext(r);function i(e){const s=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(d.Provider,{value:s},e.children)}}}]);