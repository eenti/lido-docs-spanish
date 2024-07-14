"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6708],{5545:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>d,contentTitle:()=>n,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var t=a(4848),s=a(8453);const o={},n="Rewards",i={id:"staking-modules/csm/rewards",title:"Rewards",description:"rewards-1",source:"@site/docs/staking-modules/csm/rewards.md",sourceDirName:"staking-modules/csm",slug:"/staking-modules/csm/rewards",permalink:"/lido-docs-spanish/staking-modules/csm/rewards",draft:!1,unlisted:!1,editUrl:"https://github.com/adminseedlatam/lido-docs-spanish/edit/main/docs/staking-modules/csm/rewards.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Join CSM",permalink:"/lido-docs-spanish/staking-modules/csm/join-csm"},next:{title:"Penalties",permalink:"/lido-docs-spanish/staking-modules/csm/penalties"}},d={},l=[{value:"Performance Oracle",id:"performance-oracle",level:2},{value:"Further reading",id:"further-reading",level:2}];function c(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"rewards",children:"Rewards"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{alt:"rewards-1",src:a(9335).A+"",width:"2607",height:"1750"})}),"\n",(0,t.jsx)(r.p,{children:"There are two types of rewards for CSM Node Operators:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.strong,{children:"Node Operator rewards;"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.strong,{children:"Bond rewards;"})}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{alt:"rewards-2",src:a(860).A+"",width:"1468",height:"653"})}),"\n",(0,t.jsxs)(r.p,{children:["Node Operator rewards come from the LoE protocol's share of the Consensus and Execution layers rewards. These rewards are calculated as a percentage of the rewards of a full 32 ETH validator. Node Operator rewards are distributed between all staking modules in the same ",(0,t.jsx)(r.a,{href:"../../contracts/staking-router#fee-distribution",children:"way"})," (proportionally based on the number of active validators per module, where ",(0,t.jsx)(r.code,{children:"active == deposited - exited"}),"). Each ",(0,t.jsx)(r.a,{href:"/lido-docs-spanish/contracts/accounting-oracle",children:"Accounting Oracle"})," report allocates a new portion of staking rewards to CSM. Allocated rewards are stored on the module. Then, the allocation of the Node Operator rewards for CSM Node Operators using a Merkle tree is provided by CSM Performance Oracle once in a ",(0,t.jsx)(r.code,{children:"frame"}),", making a new portion of the rewards available for claim."]}),"\n",(0,t.jsxs)(r.p,{children:["Bond rewards (rebase) part of the rewards come from stETH being a rebasing token and the bond being stored in stETH. After each Accounting Oracle report, ",(0,t.jsx)(r.code,{children:"shareRate"})," changes (most likely increases). Hence, the same amount of stETH shares will now be equal to a bigger stETH token balance."]}),"\n",(0,t.jsxs)(r.p,{children:["The overall equation for the total rewards looks like this ",(0,t.jsx)(r.code,{children:"totalRewards = validatorEffectiveBalance * moduleFee + bondAmount * shareRateChange"}),". More details on it are published in the ",(0,t.jsx)(r.a,{href:"https://research.lido.fi/t/bond-and-staking-fee-napkin-math/5999",children:"supplementary post"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["A meaningful part of total rewards comes from bond rebase. The bond and the Node Operator rewards are combined before the claim. The final amount of rewards available for claiming is calculated as ",(0,t.jsx)(r.code,{children:"bond + nodeOperatorRewards - bondRequired"}),". This approach also ensures that any missing bond will be recouped by the protocol prior to a rewards claim."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{alt:"rewards-3",src:a(3749).A+"",width:"1632",height:"506"})}),"\n",(0,t.jsx)(r.p,{children:"Also, any excess bond will be treated as a reward."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{alt:"rewards-4",src:a(9450).A+"",width:"1631",height:"503"})}),"\n",(0,t.jsx)(r.h2,{id:"performance-oracle",children:"Performance Oracle"}),"\n",(0,t.jsxs)(r.p,{children:["The Performance Oracle creates a Merkle tree with the allocation of the staking rewards and delivers the root on-chain. To make the original tree available to users, it is published on ",(0,t.jsx)(r.a,{href:"https://ipfs.tech/",children:"IPFS"})," and ",(0,t.jsx)(r.a,{href:"https://github.com/",children:"GitHub"}),". Instead of storing multiple roots, each new tree consists of all Node Operator rewards ever acquired by CSM Node Operators. Hence, only the latest tree is required to determine the reward allocation at any moment of time. The amount of rewards available for claiming can be calculated as ",(0,t.jsx)(r.code,{children:"totalAcquiredRewards - claimedRewards"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["The Performance Oracle uses the successful attestation rate ",(0,t.jsx)(r.code,{children:"successfulAttestations / totalAssignedAttestations"})," as a proxy for the overall performance of a validator. A performance threshold is utilized to determine the allocation of the actual Node Operator rewards. Validators with performance above the threshold are included in the allocation pool, while the rest are not. Activation and exit events are accounted for during the Node Operator's share calculation. Once the allocation pool is formed, each validator gets a staking rewards part of ",(0,t.jsx)(r.code,{children:"totalStakingRewardsAccumulated / totalValidatorsInAllocationPool"}),". This effectively means that all rewards acquired by the module will be allocated among well-performers. Then, validator shares are allocated to the corresponding Node Operators, and each Operator can claim rewards for all of their validators in one go."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{alt:"rewards-5",src:a(1027).A+"",width:"2252",height:"1050"})}),"\n",(0,t.jsxs)(r.p,{children:["It is crucial to note that the Performance Oracle manages only part of the total rewards. Even if the validator performs below the threshold within a frame, bond rewards (rebase) will still be acquired. One can find an example of the rewards calculation ",(0,t.jsx)(r.a,{href:"https://docs.google.com/spreadsheets/d/1hLvuOesPVOYHDqO373bdyiKn4_3UXQF1rATbgTrKhWc/edit?usp=sharing",children:"here"}),". ",(0,t.jsx)(r.strong,{children:"Note that even when performing below the threshold, the rewards per validator will be higher than those for vanilla solo staking."})]}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.code,{children:"frame"})," for the Performance Oracle report is set to 28 days. This makes the ",(0,t.jsx)(r.code,{children:"frame"})," long enough to account for short performance outages (with a smaller frame, this effect will be lower, and the performance threshold will be less useful). Making the ",(0,t.jsx)(r.code,{children:"frame"})," bigger than 28 days will result in an unnecessary delay in reward allocation."]}),"\n",(0,t.jsx)(r.p,{children:"The performance threshold is relative to the overall network attestation effectiveness to ensure that network issues outside the Node Operator's control do not affect reward allocation."}),"\n",(0,t.jsxs)(r.p,{children:["If you want to learn more about the actual Performance Oracle algorithm, check out this ",(0,t.jsx)(r.a,{href:"https://hackmd.io/@lido/BJclaWbi6",children:"detailed doc"}),"."]}),"\n",(0,t.jsx)(r.h2,{id:"further-reading",children:"Further reading"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"/lido-docs-spanish/staking-modules/csm/penalties",children:"Penalties"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"/lido-docs-spanish/staking-modules/csm/validator-exits",children:"Validator exits"})}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},9335:(e,r,a)=>{a.d(r,{A:()=>t});const t=a.p+"assets/images/rewards-1-5efce82007db4c31e88f8692085613b6.png"},860:(e,r,a)=>{a.d(r,{A:()=>t});const t=a.p+"assets/images/rewards-2-414fe144ed2306ac3ad4ff119c62acbe.png"},3749:(e,r,a)=>{a.d(r,{A:()=>t});const t=a.p+"assets/images/rewards-3-2fa345aed3cc678c8acf3134d4549d18.png"},9450:(e,r,a)=>{a.d(r,{A:()=>t});const t=a.p+"assets/images/rewards-4-3f00249b6b4bddf6d535a441735abba7.png"},1027:(e,r,a)=>{a.d(r,{A:()=>t});const t=a.p+"assets/images/rewards-5-73210973580391bebe328f8a3d384f19.png"},8453:(e,r,a)=>{a.d(r,{R:()=>n,x:()=>i});var t=a(6540);const s={},o=t.createContext(s);function n(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);