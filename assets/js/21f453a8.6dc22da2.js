"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8165],{6177:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var s=n(4848),r=n(8453);const o={},a="How to Bridge Tokens through Jumpgate",i={id:"gu\xedas/jumpgates",title:"How to Bridge Tokens through Jumpgate",description:"Jumpgates are a class of contracts that facilitate cross-chain token transfers under DAO operations. Each jumpgate is set up to work with a particular token and a pre-defined recipient. Below is the procedure of transferring tokens using a jumpgate.",source:"@site/docs/gu\xedas/jumpgates.md",sourceDirName:"gu\xedas",slug:"/gu\xedas/jumpgates",permalink:"/lido-docs-spanish/gu\xedas/jumpgates",draft:!1,unlisted:!1,editUrl:"https://github.com/adminseedlatam/lido-docs-spanish/edit/main/docs/gu\xedas/jumpgates.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"How to claim Lido early stakers airdrop",permalink:"/lido-docs-spanish/gu\xedas/early-staker-airdrop"},next:{title:"Lido V2 mainnet parameters",permalink:"/lido-docs-spanish/gu\xedas/verify-lido-v2-upgrade-manual"}},c={},d=[{value:"1. Verify Jumpgate",id:"1-verify-jumpgate",level:3},{value:"2. Transfer tokens to Jumpgate",id:"2-transfer-tokens-to-jumpgate",level:3},{value:"3. Bridge Tokens",id:"3-bridge-tokens",level:3},{value:"4. Claim tokens",id:"4-claim-tokens",level:3}];function h(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"how-to-bridge-tokens-through-jumpgate",children:"How to Bridge Tokens through Jumpgate"}),"\n",(0,s.jsx)(t.p,{children:"Jumpgates are a class of contracts that facilitate cross-chain token transfers under DAO operations. Each jumpgate is set up to work with a particular token and a pre-defined recipient. Below is the procedure of transferring tokens using a jumpgate."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://youtu.be/IqphF28aTUU",children:(0,s.jsx)(t.strong,{children:"Watch video tutorial"})})}),"\n",(0,s.jsx)(t.h3,{id:"1-verify-jumpgate",children:"1. Verify Jumpgate"}),"\n",(0,s.jsx)(t.p,{children:"In this step we will be making sure that the jumpgate is correctly configured. You will only need to do this once because jumpgates are non-upgradeable contracts."}),"\n",(0,s.jsxs)(t.p,{children:["Go to ",(0,s.jsx)(t.a,{href:"https://etherscan.io/",children:"Etherscan"}),'  and open the Jumpgate page. Click the "Contract" tab, the green check mark confirms that the source code is verified. Check the parameters:']}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"arbiterFee"})," is always 0;"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"bridge"})," is the address of the bridge. Currently, all jumpgates use only Wormhole Token bridge at ",(0,s.jsx)(t.a,{href:"https://etherscan.io/address/0x3ee18B2214AFF97000D974cf647E7C347E8fa585",children:(0,s.jsx)(t.code,{children:"0x3ee18B2214AFF97000D974cf647E7C347E8fa585"})}),", and you can check the address against the ",(0,s.jsx)(t.a,{href:"https://book.wormhole.com/reference/contracts.html",children:"Wormhole docs"}),";"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"nonce"})," is always 0;"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"owner"})," is the Aragon Agent at ",(0,s.jsx)(t.a,{href:"https://etherscan.io/address/0x3e40D73EB977Dc6a537aF587D48316feE66E9C8c",children:(0,s.jsx)(t.code,{children:"0x3e40D73EB977Dc6a537aF587D48316feE66E9C8c"})})," verifiable against ",(0,s.jsx)(t.a,{href:"/deployed-contracts/#dao-contracts",children:"Deployed contracts"}),";"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"recipient"})," is the recipient address in hexadecimal form. For Solana, this will an encoded LDO token account. Use ",(0,s.jsx)(t.a,{href:"https://appdevtools.com/base58-encoder-decoder",children:"Base 58 decoder"})," to decode this hexadecimal sequence to the Solana address format."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"recipientChain"})," is the target chain identifier. If the Jumpgate is using Wormhole bridge, you can check the id against the ",(0,s.jsx)(t.a,{href:"https://book.wormhole.com/reference/contracts.html",children:"Wormhole docs"}),", Solana id is 1;"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"renounceOwnership"})," should yield an error;"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"token"})," is the address of the token being transferred, e.g. LDO at ",(0,s.jsx)(t.a,{href:"https://etherscan.io/address/0x5A98FcBEA516Cf06857215779Fd812CA3beF1B32",children:"0x5A98FcBEA516Cf06857215779Fd812CA3beF1B32"}),". Check the LDO address against ",(0,s.jsx)(t.a,{href:"/deployed-contracts/#dao-contracts",children:"Deployed contracts"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(4659).A+"",width:"2784",height:"1434"})}),"\n",(0,s.jsx)(t.h3,{id:"2-transfer-tokens-to-jumpgate",children:"2. Transfer tokens to Jumpgate"}),"\n",(0,s.jsx)(t.p,{children:"The jumpgate is agnostic to how tokens were received. You can either transfer tokens directly or in the context of DAO operations via an Aragon vote or Easytrack transfer motion."}),"\n",(0,s.jsx)(t.h3,{id:"3-bridge-tokens",children:"3. Bridge Tokens"}),"\n",(0,s.jsx)(t.p,{children:"Now we can send tokens through the bridge. We cannot input the amount of tokens to bridge and the jumpgate will transfer the entirety of its token balance."}),"\n",(0,s.jsxs)(t.p,{children:['Open "Write contract" tab and connect your wallet by clicking the "Connect to Web3" button. We will now expand ',(0,s.jsx)(t.code,{children:"bridgeTokens"}),' function and click "Write". Remember that this function is permissionless and you can initiate the transfer from any account as long as you have enough ether for gas.']}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(3322).A+"",width:"1016",height:"580"})}),"\n",(0,s.jsx)(t.h3,{id:"4-claim-tokens",children:"4. Claim tokens"}),"\n",(0,s.jsx)(t.p,{children:"Claiming process may be different depending on the bridge but for now all jumpgates only support Wormhole Token Bridge. We will be using Portal Bridge (formerly Wormhole) website to claim tokens on Solana."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["To go ",(0,s.jsx)(t.a,{href:"https://www.portalbridge.com/#/redeem",children:"Portal Bridge website"}),' Redeem page and connect your Ethereum wallet. Select "Token" in "Type" dropdown and "Ethereum" in "Source Chain". Paste the hash of the ',(0,s.jsx)(t.code,{children:"bridgeTokens"}),' transaction. At first, this should produce an error because it takes some time for Portal Bridge to process the bridge transaction. Try this step again in 10-20 minutes and click "Recover" button.']}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(1508).A+"",width:"2186",height:"1332"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:'"Recover" will redirect you to "Tokens" tab, where you will be able to confirm the recipient address. Connect your Solana wallet, click "Redeem". You will be prompted to sign a few transactions. Once those are confirmed, you will be able to see the tokens on the recipient.'}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(8994).A+"",width:"1962",height:"1474"})})]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},4659:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/read-contract-b92acaf5b67c4e3fe78f250ba7144b25.png"},1508:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/recover-07dbb89650584510b48159abbd96463b.png"},8994:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/redeem-a3efe4f96f27e876c9784d53eb773d21.png"},3322:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/write-contract-98f7c6456f59b6ddc0e21e7f6d5fab86.png"},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var s=n(6540);const r={},o=s.createContext(r);function a(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);