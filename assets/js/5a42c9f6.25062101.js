"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7883],{8030:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(4848),t=r(8453);const o={},a="How to claim 1inch stETH/LDO pool rewards",s={id:"guides/1inch-pool-rewards",title:"How to claim 1inch stETH/LDO pool rewards",description:"This is how to claim 1inch stETH/LDO pool rewards with Etherscan UI.",source:"@site/docs/guides/1inch-pool-rewards.md",sourceDirName:"guides",slug:"/guides/1inch-pool-rewards",permalink:"/lido-docs-spanish/guides/1inch-pool-rewards",draft:!1,unlisted:!1,editUrl:"https://github.com/adminseedlatam/lido-docs-spanish/edit/main/docs/guides/1inch-pool-rewards.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"How to verify the multisig is a Gnosis one",permalink:"/lido-docs-spanish/guides/checking-gnosis-safe"},next:{title:"How to claim Lido early stakers airdrop",permalink:"/lido-docs-spanish/guides/early-staker-airdrop"}},d={},c=[{value:"Reward claiming",id:"reward-claiming",level:2},{value:"1. Check if you are eligible to claim the reward",id:"1-check-if-you-are-eligible-to-claim-the-reward",level:3},{value:"2. Check if you haven\u2019t already claimed your reward",id:"2-check-if-you-havent-already-claimed-your-reward",level:3},{value:"3. Claim your reward",id:"3-claim-your-reward",level:3}];function l(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"how-to-claim-1inch-stethldo-pool-rewards",children:"How to claim 1inch stETH/LDO pool rewards"}),"\n",(0,n.jsx)(i.p,{children:"This is how to claim 1inch stETH/LDO pool rewards with Etherscan UI."}),"\n",(0,n.jsxs)(i.p,{children:["Rewards distributed to LP on ",(0,n.jsx)(i.a,{href:"https://etherscan.io/address/0x1f629794b34ffb3b29ff206be5478a52678b47ae",children:"1inch\xa0stETH/LDO pool"})," proportional to the amount of liquidity and timespan of providing it as described in the\xa0",(0,n.jsx)(i.a,{href:"https://research.lido.fi/t/proposal-ldo-incentives-to-liquidity-providers-on-ldo-steth-pair-on-1inch-exchange/274",children:"proposal"}),"."]}),"\n",(0,n.jsx)(i.h2,{id:"reward-claiming",children:"Reward claiming"}),"\n",(0,n.jsx)(i.h3,{id:"1-check-if-you-are-eligible-to-claim-the-reward",children:"1. Check if you are eligible to claim the reward"}),"\n",(0,n.jsxs)(i.p,{children:["Find your address ",(0,n.jsx)(i.a,{href:"https://github.com/lidofinance/airdrop-data/blob/main/oneinch_lido_airdrop.csv",children:"here"})," and get your index."]}),"\n",(0,n.jsxs)(i.p,{children:["If there is no your address ",(0,n.jsx)(i.a,{href:"https://github.com/lidofinance/airdrop-data/blob/main/oneinch_lido_airdrop.csv",children:"here"})," you are not eligible to claim the reward."]}),"\n",(0,n.jsx)(i.h3,{id:"2-check-if-you-havent-already-claimed-your-reward",children:"2. Check if you haven\u2019t already claimed your reward"}),"\n",(0,n.jsxs)(i.p,{children:["2.1 Go to ",(0,n.jsx)(i.a,{href:"https://etherscan.io/address/0xdB46C277dA1599390eAb394327602889E9546296",children:"Etherscan"})," (contract address  - ",(0,n.jsx)(i.a,{href:"https://etherscan.io/address/0xdB46C277dA1599390eAb394327602889E9546296",children:"0xdB46C277dA1599390eAb394327602889E9546296"}),")"]}),"\n",(0,n.jsxs)(i.p,{children:["2.2 Paste your index on ",(0,n.jsx)(i.code,{children:"isClaimed"})," method (1 row on ",(0,n.jsx)(i.a,{href:"https://etherscan.io/address/0xdB46C277dA1599390eAb394327602889E9546296#readContract",children:"\u201cContract/Read contract\u201d"})," tab)"]}),"\n",(0,n.jsx)(i.p,{children:"2.3 Press the \u201cQuery\u201d button"}),"\n",(0,n.jsxs)(i.p,{children:["2.4 Make sure that the method result is ",(0,n.jsx)(i.code,{children:"false"})]}),"\n",(0,n.jsx)(i.admonition,{type:"note",children:(0,n.jsxs)(i.p,{children:["if you get ",(0,n.jsx)(i.code,{children:"true"})," as a result of this step, it means that this reward was claimed earlier, and you can\u2019t claim it once again"]})}),"\n",(0,n.jsx)(i.h3,{id:"3-claim-your-reward",children:"3. Claim your reward"}),"\n",(0,n.jsxs)(i.p,{children:["3.1 Open ",(0,n.jsx)(i.a,{href:"https://etherscan.io/address/0xdB46C277dA1599390eAb394327602889E9546296#writeContract",children:"\u201cContract/Write contract\u201d"})," tab on Etherscan"]}),"\n",(0,n.jsx)(i.p,{children:"3.2 Connect your wallet to Etherscan with either MetaMask or WalletConnect"}),"\n",(0,n.jsxs)(i.p,{children:["3.3 Fill-in ",(0,n.jsx)(i.code,{children:"Claim"})," method fields with data from ",(0,n.jsx)(i.a,{href:"https://github.com/lidofinance/airdrop-data/blob/main/oneinch_lido_airdrop.csv",children:"here"})]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"index (uint256)"}),"\n",(0,n.jsx)(i.li,{children:"account (address)"}),"\n",(0,n.jsx)(i.li,{children:"amount (uint256)"}),"\n",(0,n.jsx)(i.li,{children:"merkleProof (bytes32[])"}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"3.4 Press the \u201cWrite\u201d button and confirm the transaction in your wallet"}),"\n",(0,n.jsx)(i.p,{children:"3.5 Wait for the transaction to succeed"}),"\n",(0,n.jsx)(i.admonition,{type:"note",children:(0,n.jsx)(i.p,{children:"in case of invalid input transaction can be reverted"})}),"\n",(0,n.jsx)(i.p,{children:"That's it! \ud83d\udcaa\ud83c\udf89\ud83c\udfdd"})]})}function h(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,i,r)=>{r.d(i,{R:()=>a,x:()=>s});var n=r(6540);const t={},o=n.createContext(t);function a(e){const i=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),n.createElement(o.Provider,{value:i},e.children)}}}]);