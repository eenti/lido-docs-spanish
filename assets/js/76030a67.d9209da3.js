"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8503],{3573:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>n,metadata:()=>c,toc:()=>d});var o=t(4848),i=t(8453);const n={},r="How to verify the multisig is a Gnosis one",c={id:"guides/checking-gnosis-safe",title:"How to verify the multisig is a Gnosis one",description:"Gnosis multisig contracts are usually deployed from the Gnosis factory contracts. Gnosis has the list of proxy_factory contracts addresses deployed to different networks \u2014 https://github.com/safe-global/safe-deployments/tree/main/src/assets",source:"@site/docs/guides/checking-gnosis-safe.md",sourceDirName:"guides",slug:"/guides/checking-gnosis-safe",permalink:"/lido-docs-spanish/guides/checking-gnosis-safe",draft:!1,unlisted:!1,editUrl:"https://github.com/adminseedlatam/lido-docs-spanish/edit/main/docs/guides/checking-gnosis-safe.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Checking the evm script from Aragon vote",permalink:"/lido-docs-spanish/guides/checking-aragon-vote"},next:{title:"How to claim 1inch stETH/LDO pool rewards",permalink:"/lido-docs-spanish/guides/1inch-pool-rewards"}},a={},d=[{value:"How to verify my multisig is deployed from Gnosis factory",id:"how-to-verify-my-multisig-is-deployed-from-gnosis-factory",level:2}];function l(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h1,{id:"how-to-verify-the-multisig-is-a-gnosis-one",children:"How to verify the multisig is a Gnosis one"}),"\n",(0,o.jsxs)(s.p,{children:["Gnosis multisig contracts are usually deployed from the Gnosis factory contracts. Gnosis has the list of ",(0,o.jsx)(s.code,{children:"proxy_factory"})," contracts addresses deployed to different networks \u2014 ",(0,o.jsx)(s.a,{href:"https://github.com/safe-global/safe-deployments/tree/main/src/assets",children:"https://github.com/safe-global/safe-deployments/tree/main/src/assets"})]}),"\n",(0,o.jsx)(s.h2,{id:"how-to-verify-my-multisig-is-deployed-from-gnosis-factory",children:"How to verify my multisig is deployed from Gnosis factory"}),"\n",(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsxs)(s.li,{children:["Pick the contract version in gnosis UI (settings->safe details) \u2014 those usually are ",(0,o.jsx)(s.code,{children:"1.0.0"}),", ",(0,o.jsx)(s.code,{children:"1.1.1"}),", ",(0,o.jsx)(s.code,{children:"1.2.0"})," or ",(0,o.jsx)(s.code,{children:"1.3.0"}),"."]}),"\n",(0,o.jsx)(s.li,{children:"Open the safe address in network explorer"}),"\n",(0,o.jsx)(s.li,{children:'Find the safe creation tx (should be the oldest one in "Internal Transactions" tab & have "Contract Creation" note)'}),"\n",(0,o.jsx)(s.li,{children:"Get the address the safe creation tx went to \u2014 should be a factory contract"}),"\n",(0,o.jsxs)(s.li,{children:["Open the corresponding version's folder on github ",(0,o.jsx)(s.a,{href:"https://github.com/safe-global/safe-deployments/tree/main/src/assets",children:"https://github.com/safe-global/safe-deployments/tree/main/src/assets"}),", open ",(0,o.jsx)(s.code,{children:"proxy_factory.json"})," file & find the address in the list of deployed addresses"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,s,t)=>{t.d(s,{R:()=>r,x:()=>c});var o=t(6540);const i={},n=o.createContext(i);function r(e){const s=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(n.Provider,{value:s},e.children)}}}]);