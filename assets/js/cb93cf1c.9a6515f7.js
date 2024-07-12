"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8967],{1363:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>n,toc:()=>l});var o=s(4848),i=s(8453);const r={},a="Intro",n={id:"staking-modules/csm/intro",title:"Intro",description:'Terms "validator", "key", "validator key", and "deposit data" have the same meaning within the document.',source:"@site/docs/staking-modules/csm/intro.md",sourceDirName:"staking-modules/csm",slug:"/staking-modules/csm/intro",permalink:"/lido-docs-spanish/staking-modules/csm/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/adminseedlatam/lido-docs-spanish/edit/main/docs/staking-modules/csm/intro.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Lido IPFS applications",permalink:"/lido-docs-spanish/ipfs/apps-list"},next:{title:"Join CSM",permalink:"/lido-docs-spanish/staking-modules/csm/join-csm"}},d={},l=[{value:"\u2211 TL;DR",id:"-tldr",level:2},{value:"\ud83d\udcd3 Glossary",id:"-glossary",level:2},{value:"\ud83c\udf0e General info",id:"-general-info",level:2},{value:"\ud83e\udd13 Module specifics",id:"-module-specifics",level:2},{value:"Exited and Withdrawn",id:"exited-and-withdrawn",level:3},{value:"Stake distribution queue",id:"stake-distribution-queue",level:3},{value:"Alternative measures for &quot;stuck&quot; keys",id:"alternative-measures-for-stuck-keys",level:3},{value:"Node Operator structure",id:"node-operator-structure",level:3},{value:"Further reading",id:"further-reading",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"intro",children:"Intro"}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsx)(t.p,{children:'Terms "validator", "key", "validator key", and "deposit data" have the same meaning within the document.'})}),"\n",(0,o.jsx)(t.h2,{id:"-tldr",children:"\u2211 TL;DR"}),"\n",(0,o.jsx)(t.p,{children:"Community Staking Module (CSM) is a permissionless staking module aimed at attracting community stakers to participate in Lido on Ethereum protocol as Node Operators. The only requirement to join CSM as a Node Operator is to be able to run validators (according to the Lido on Ethereum policies) and supply a bond. The stake is allocated to the validator keys in the order in which the keys are provided, given the keys are valid. The bond is not directly associated with the actual validator's stake but instead treated as a security collateral. The bond is a characteristic of a Node Operator; hence, it is collateral for all Node Operator's validators. This allows for the bond reduction. The more validators the Node Operator has, the less the bond for one validator. Node Operators get their rewards from the bond rebase and from the Node Operator's portion of the staking rewards. Node Operator's portion of the staking rewards is socialized (averaged) if the validators perform above the threshold. Accumulated CL penalties resulting in a balance reduction below the deposit balance and stolen EL rewards are confiscated from the Node Operator's bond. Node Operators should perform validator exits upon protocol request or can exit voluntarily."}),"\n",(0,o.jsx)(t.h2,{id:"-glossary",children:"\ud83d\udcd3 Glossary"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["The\xa0",(0,o.jsx)(t.a,{href:"/lido-docs-spanish/contracts/staking-router",children:(0,o.jsx)(t.strong,{children:"staking router"})}),"\xa0(SR) is a smart contract within the Lido on Ethereum protocol that facilitates stake allocation and rewards distribution across different modules;"]}),"\n",(0,o.jsxs)(t.li,{children:["A\xa0",(0,o.jsx)(t.strong,{children:"staking module"}),"\xa0(SM) is a smart contract or a set of smart contracts connected to the staking router, which:","\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"maintains the underlying operator and validator sets,"}),"\n",(0,o.jsx)(t.li,{children:"is responsible for on/off-boarding operators,"}),"\n",(0,o.jsx)(t.li,{children:"maintains validator deposits, withdrawals, and exits,"}),"\n",(0,o.jsx)(t.li,{children:"maintains fee structure and distribution for the module and participants, etc,"}),"\n",(0,o.jsx)(t.li,{children:"conforms to the IStakingModule interface;"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Bond"})," - a security collateral that Node Operators must submit before uploading validator keys into CSM. This collateral covers possible losses caused by inappropriate actions on the Node Operator's side. Once the validator exits from the Beacon chain and all losses that occurred are covered, the collateral can be claimed or reused to upload new validator keys."]}),"\n",(0,o.jsxs)(t.li,{children:["The ",(0,o.jsx)(t.strong,{children:"Lido DAO"})," is a Decentralized Autonomous Organization that decides on the critical parameters of controlled liquid staking protocols through the voting power of governance token (LDO)."]}),"\n",(0,o.jsxs)(t.li,{children:["A\xa0",(0,o.jsx)(t.strong,{children:"Node Operator"}),"\xa0(NO)\xa0is a person or entity that runs validators;"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"/lido-docs-spanish/contracts/lido",children:(0,o.jsx)(t.code,{children:"Lido"})})," is a core contract of the Lido on Ethereum protocol that stores the protocol state, accepts user submissions, and includes the stETH token;"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"stETH"}),"\xa0is an ERC-20 token minted by\xa0",(0,o.jsx)(t.a,{href:"https://etherscan.io/address/0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84",children:(0,o.jsx)(t.code,{children:"Lido"})})," smart contract\xa0and representing a share of the ",(0,o.jsx)(t.a,{href:"/lido-docs-spanish/contracts/lido#rebase",children:(0,o.jsx)(t.code,{children:"totalPooledEther"})}),";"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Deposit data"}),"\xa0refers to a structure\xa0consisting of the validator\u2019s public key and deposit signature submitted to\xa0",(0,o.jsx)(t.code,{children:"DepositContract"}),". This term can also be referred to as ",(0,o.jsx)(t.code,{children:"keys"})," in the text. Validator private keys are created, stored, and managed by Node Operators exclusively;"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"DepositContract"})," is the official Ethereum deposit contract for validator deposits;"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"DepositSecurityModule"})," or ",(0,o.jsx)(t.a,{href:"/lido-docs-spanish/gu%C3%ADas/deposit-security-manual",children:(0,o.jsx)(t.strong,{children:"DSM"})})," is a set of smart contract and off-chain parts mitigating the ",(0,o.jsx)(t.a,{href:"/lido-docs-spanish/gu%C3%ADas/deposit-security-manual#the-vulnerability",children:"deposit front-run vulnerability"}),";"]}),"\n",(0,o.jsxs)(t.li,{children:["A validator is considered to be\xa0",(0,o.jsx)(t.a,{href:"/lido-docs-spanish/staking-modules/csm/join-csm#unbonded-validators",children:(0,o.jsx)(t.strong,{children:"\u201cunbonded\u201d"})}),"\xa0when the current Node Operator bond is not sufficient to cover this validator;"]}),"\n",(0,o.jsxs)(t.li,{children:["A validator is considered to be ",(0,o.jsxs)(t.a,{href:"/lido-docs-spanish/contracts/staking-router#exited-and-stuck-validators",children:['"',(0,o.jsx)(t.strong,{children:"stuck"}),'"']})," if it has not been exited timely following an exit signal from the protocol;"]}),"\n",(0,o.jsxs)(t.li,{children:["The ",(0,o.jsx)(t.strong,{children:"Curated module"})," is the first Lido staking module previously referred to as ",(0,o.jsx)(t.a,{href:"../../contracts/node-operators-registry",children:"Node Operators Registry"}),";"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Easy Track"})," is a suite of smart contracts and an alternative veto-based voting model that streamlines routine DAO operations;"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"/lido-docs-spanish/contracts/accounting-oracle",children:(0,o.jsx)(t.strong,{children:"Accounting Oracle"})})," is a contract which collects information submitted by the off-chain oracles about state of the Lido-participating validators and their balances, the amount of funds accumulated on the protocol vaults (i.e., withdrawal and execution layer rewards vaults), the number of exited and stuck validators, the number of withdrawal requests the protocol can process and distributes node-operator rewards and performs ",(0,o.jsx)(t.code,{children:"stETH"})," token rebase;"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"/lido-docs-spanish/contracts/validators-exit-bus-oracle",children:(0,o.jsx)(t.strong,{children:"VEBO"})}),' or Validators Exit Bus Oracle is a contract that implements an on-chain "source of truth" message bus between the protocol\'s off-chain oracle and off-chain observers, with the main goal of delivering validator exit requests to the Lido-participating Node Operators.']}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"-general-info",children:"\ud83c\udf0e General info"}),"\n",(0,o.jsxs)(t.p,{children:["CSM is a staking module offering permissionless entry with a bond. This module aims to become a clear pathway for independent ",(0,o.jsx)(t.a,{href:"https://research.lido.fi/t/lido-on-ethereum-community-validation-manifesto/3331#lido-on-ethereum-community-validation-manifesto-1",children:"community stakers"})," (solo stakers or home stakers) to enter the Lido on Ethereum protocol (LoE) node operator set. The bond requirement is an essential security and alignment tool that makes permissionless entry possible without compromising the security or reliability of the underlying staking protocol (LoE)."]}),"\n",(0,o.jsx)(t.h2,{id:"-module-specifics",children:"\ud83e\udd13 Module specifics"}),"\n",(0,o.jsxs)(t.p,{children:["All staking modules should conform to the same ",(0,o.jsx)(t.a,{href:"https://github.com/lidofinance/lido-dao/blob/master/contracts/0.8.9/interfaces/IStakingModule.sol",children:"IStakingModule"})," interface. That inevitably results in modules having a lot of common or similar components and logic. CSM is no exception here. For example, key storage components are based on the existing ",(0,o.jsx)(t.a,{href:"/lido-docs-spanish/contracts/node-operators-registry",children:"Curated module"}),". However, several aspects are different and worth a separate mention."]}),"\n",(0,o.jsx)(t.h3,{id:"exited-and-withdrawn",children:"Exited and Withdrawn"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.a,{href:"/lido-docs-spanish/contracts/node-operators-registry",children:"Curated module"}),' uses the "exited" statuses of the validator (both ',(0,o.jsx)(t.a,{href:"https://notes.ethereum.org/7CFxjwMgQSWOHIxLgJP2Bw#44-Step-4-Slashed-and-Exited",children:"Slashed and Exited"})," and ",(0,o.jsx)(t.a,{href:"https://notes.ethereum.org/7CFxjwMgQSWOHIxLgJP2Bw#45-Step-5-Unslashed-and-Exited",children:"Unslashed and Exited"}),') as the last meaningful status in accounting since, after this status, the validator is no longer responsible for any duties on the Beacon chain (except for the rare cases of the delayed sync committee participation). CSM, in turn, needs to know about each validator\'s exact withdrawal balance to decide on bond penalization. Hence, the module uses the "exited" counter reported by the accounting oracle only to return a correct number of "active" keys to the staking router and implements permissionless reporting methods to report the validator\'s withdrawal balance once the validator is ',(0,o.jsx)(t.a,{href:"https://consensys.io/shanghai-capella-upgrade#:~:text=Finally%2C%20the%20withdrawable%20validator%20is%20subject%20to%20the%20same%2C%20automated%20%E2%80%9Csweep%E2%80%9D%20that%20processes%20partial%20withdrawals%2C%20and%20its%20balance%20is%20withdrawn",children:"withdrawn"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"stake-distribution-queue",children:"Stake distribution queue"}),"\n",(0,o.jsxs)(t.p,{children:["A Node Operator must supply a bond to upload a new validator key to CSM. It is reasonable to allocate a stake in an order similar to the bond submission order. For this purpose, a FIFO (first in, first out) ",(0,o.jsx)(t.a,{href:"/lido-docs-spanish/staking-modules/csm/join-csm#stake-allocation-queue",children:"stake allocation queue"})," is utilized. Once the Staking Router requests keys to make a deposit, the next ",(0,o.jsx)(t.code,{children:"X"})," keys from the queue are returned, preserving the bond submit order."]}),"\n",(0,o.jsx)(t.h3,{id:"alternative-measures-for-stuck-keys",children:'Alternative measures for "stuck" keys'}),"\n",(0,o.jsxs)(t.p,{children:['The presence of "stuck" ("Delinquent" in the ',(0,o.jsx)(t.a,{href:"https://snapshot.org/#/lido-snapshot.eth/proposal/0xa4eb1220a15d46a1825d5a0f44de1b34644d4aa6bb95f910b86b29bb7654e330",children:"original terms"}),") keys for the Node Operator indicates the ",(0,o.jsx)(t.a,{href:"../../guides/node-operators/general-overview#validator-exits-policy-penalties-and-recovering",children:"Lido exit policy"})," violation. In this case, a module should apply measures for the policy-violating Node Operator. CSM uses measures that are different from those of the curated module. The measures are described in the corresponding ",(0,o.jsx)(t.a,{href:"/lido-docs-spanish/staking-modules/csm/validator-exits#protocol-initiated-exits",children:"section"}),"."]}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsx)(t.p,{children:'Note: CSM does not apply any measures to "Delayed" validators.'})}),"\n",(0,o.jsx)(t.h3,{id:"node-operator-structure",children:"Node Operator structure"}),"\n",(0,o.jsxs)(t.p,{children:["The Node Operator data structure in CSM is similar to that of the ",(0,o.jsx)(t.a,{href:"/lido-docs-spanish/contracts/node-operators-registry",children:"Curated module"}),", with several minor differences:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["The ",(0,o.jsx)(t.code,{children:"name"})," property is omitted as redundant for the permissionless module;"]}),"\n",(0,o.jsxs)(t.li,{children:["The ",(0,o.jsx)(t.code,{children:"rewardAddress"})," is used as a recipient of rewards and excess bond claims;"]}),"\n",(0,o.jsxs)(t.li,{children:["A new property, ",(0,o.jsx)(t.code,{children:"managerAddress"}),", is introduced. The Node Operator should perform method calls from this address;"]}),"\n",(0,o.jsxs)(t.li,{children:["A new property, ",(0,o.jsx)(t.code,{children:"totalWithdrawnKeys"}),", is introduced to count the total count of the withdrawn keys per Node Operator;"]}),"\n",(0,o.jsxs)(t.li,{children:["A new property, ",(0,o.jsx)(t.code,{children:"depositableValidatorsCount"}),", is introduced to count the current deposit data eligible for deposits;"]}),"\n",(0,o.jsxs)(t.li,{children:["A new property, ",(0,o.jsx)(t.code,{children:"enqueuedCount"}),", is introduced to keep track of the depositable keys that are in the queue. Also useful to determine depositable keys that are not in the queue at the moment;"]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"further-reading",children:"Further reading"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"/lido-docs-spanish/staking-modules/csm/join-csm",children:"Join CSM"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"/lido-docs-spanish/staking-modules/csm/rewards",children:"Rewards"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"/lido-docs-spanish/staking-modules/csm/penalties",children:"Penalties"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"/lido-docs-spanish/staking-modules/csm/validator-exits",children:"Validator exits"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>n});var o=s(6540);const i={},r=o.createContext(i);function a(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);