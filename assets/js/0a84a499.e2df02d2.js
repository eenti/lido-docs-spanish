"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3167],{7557:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var o=i(4848),n=i(8453);const s={},a="Join CSM",d={id:"staking-modules/csm/join-csm",title:"Join CSM",description:"join-csm-1",source:"@site/docs/staking-modules/csm/join-csm.md",sourceDirName:"staking-modules/csm",slug:"/staking-modules/csm/join-csm",permalink:"/staking-modules/csm/join-csm",draft:!1,unlisted:!1,editUrl:"https://github.com/adminseedlatam/lido-docs-spanish/edit/main/docs/staking-modules/csm/join-csm.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Introducci\xf3n",permalink:"/staking-modules/csm/intro"},next:{title:"Rewards",permalink:"/staking-modules/csm/rewards"}},r={},l=[{value:"Node Operator creation",id:"node-operator-creation",level:2},{value:"Deposit data preparation and upload",id:"deposit-data-preparation-and-upload",level:2},{value:"Bond",id:"bond",level:2},{value:"Unbonded validators",id:"unbonded-validators",level:3},{value:"Possible negative stETH rebase consequences",id:"possible-negative-steth-rebase-consequences",level:3},{value:"Deposit data validation and invalidation (aka vetting and unvetting)",id:"deposit-data-validation-and-invalidation-aka-vetting-and-unvetting",level:2},{value:"Depositable keys",id:"depositable-keys",level:2},{value:"Stake allocation queue",id:"stake-allocation-queue",level:2},{value:"Deposit data deletion",id:"deposit-data-deletion",level:2},{value:"Early Adoption period",id:"early-adoption-period",level:2},{value:"Further reading",id:"further-reading",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"join-csm",children:"Join CSM"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"join-csm-1",src:i(9667).A+"",width:"2753",height:"1979"})}),"\n",(0,o.jsx)(t.h2,{id:"node-operator-creation",children:"Node Operator creation"}),"\n",(0,o.jsxs)(t.p,{children:["To become a Node Operator in CSM or register new validators for an existing Node Operator, at least one ",(0,o.jsx)(t.code,{children:"validator pubkey"}),", corresponding ",(0,o.jsx)(t.a,{href:"https://github.com/ethereum/consensus-specs/blob/v1.4.0/specs/phase0/beacon-chain.md#signingdata",children:(0,o.jsx)(t.code,{children:"deposit signature"})}),", and the corresponding bond amount should be provided."]}),"\n",(0,o.jsx)(t.h2,{id:"deposit-data-preparation-and-upload",children:"Deposit data preparation and upload"}),"\n",(0,o.jsxs)(t.p,{children:["CSM accepts deposit data in the same ",(0,o.jsx)(t.a,{href:"../../contracts/node-operators-registry#addsigningkeys",children:"format"})," (",(0,o.jsx)(t.code,{children:"validator pubkey"})," + ",(0,o.jsx)(t.code,{children:"deposit signature"}),") as the ",(0,o.jsx)(t.a,{href:"/contracts/node-operators-registry",children:"Curated module"}),", with the main difference being a requirement to submit the bond prior to or alongside deposit data upload."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://github.com/ethereum/consensus-specs/blob/v1.4.0/specs/phase0/beacon-chain.md#signingdata",children:(0,o.jsx)(t.code,{children:"deposit signature"})})," ",(0,o.jsx)(t.strong,{children:"must"})," sign the root of the ",(0,o.jsx)(t.code,{children:"(deposit_message, domain)"}),". Where a ",(0,o.jsx)(t.code,{children:"domain"})," is used to identify the chain, and ",(0,o.jsx)(t.code,{children:"deposit_message"})," has the form of the following tuple:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"validator pubkey"}),";"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"withdrawal_credentials"})," with actual ",(0,o.jsx)(t.a,{href:"../../contracts/withdrawal-vault",children:(0,o.jsx)(t.code,{children:"Lido Withdrawal Vault contract"})})," address. Should be retrieved from ",(0,o.jsx)(t.a,{href:"/contracts/staking-router#getwithdrawalcredentials",children:"Staring Router"}),";"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"32 ETH amount"}),";"]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"bond",children:"Bond"}),"\n",(0,o.jsxs)(t.admonition,{type:"info",children:[(0,o.jsx)(t.p,{children:"Here and after, the term 'bond' has the following meaning:"}),(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Bond"})," - a security collateral that Node Operators must submit before uploading validator keys into CSM. This collateral covers possible losses caused by inappropriate actions on the Node Operator's side. Once the validator exits from the Beacon chain and all losses that occurred are covered, the collateral can be claimed or reused to upload new validator keys."]})]}),"\n",(0,o.jsx)(t.p,{children:"A bond is a property of a Node Operator, not a validator. Bond is stored in the form of stETH. Node Operators can submit bond tokens in ETH, stETH, and wstETH. Provided ETH is staked, and wstETH is unwrapped during submission to ensure stETH is the only form of a bond."}),"\n",(0,o.jsxs)(t.p,{children:["The total amount of the bond required depends on the total number of Node Operator's validators and has the form of a curve (see  ",(0,o.jsx)(t.a,{href:"https://github.com/lidofinance/community-staking-module/blob/main/src/abstract/CSBondCurve.sol#L92",children:(0,o.jsx)(t.code,{children:"getBondAmountByKeysCount(keysCount)"})}),")"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"join-csm-2",src:i(6456).A+"",width:"2226",height:"1314"})}),"\n",(0,o.jsx)(t.p,{children:"The graph above can be redrawn for the reader's convenience concerning the validator number, not total validators."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"join-csm-3",src:i(6673).A+"",width:"2170",height:"996"})}),"\n",(0,o.jsxs)(t.p,{children:["There might be several bond curves (",(0,o.jsx)(t.code,{children:"getBondAmountByKeysCount"})," function implementations). A default curve is assigned to all Node Operators upon creation. A custom curve can be set for the Node Operator later."]}),"\n",(0,o.jsx)(t.p,{children:"Existing Node Operators can top-up bond without uploading deposit data to compensate for the penalties or to have bond funds uploaded upfront."}),"\n",(0,o.jsx)(t.h3,{id:"unbonded-validators",children:"Unbonded validators"}),"\n",(0,o.jsx)(t.p,{children:'The term "unbonded" is introduced to refer to the validators for which the bond does not fully cover this validator. Taking into account the approach when the bond is common for all Node Operator\'s validators, unbonded validators can be determined in a way illustrated below. In the example, validator N+1 is unbonded.'}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"join-csm-4",src:i(3582).A+"",width:"2716",height:"528"})}),"\n",(0,o.jsx)(t.h3,{id:"possible-negative-steth-rebase-consequences",children:"Possible negative stETH rebase consequences"}),"\n",(0,o.jsxs)(t.p,{children:["With the bond being stored in stETH, there is a risk of a reduction in the bond amount due to a negative stETH rebase. This might result in some Node Operators being unable to claim rewards (due to the actual bond being lower than required) or even validators becoming unbonded. This problem is described in detail in ",(0,o.jsx)(t.a,{href:"https://hackmd.io/@lido/BJqWx7P0p",children:"Bond Mechanics in Lido ADR"}),". For this document, it is worth mentioning that no additional actions are required for CSM due to the low probability of the negative stETH rebase and a dedicated ",(0,o.jsx)(t.a,{href:"/contracts/insurance",children:"insurance fund"})," at the Lido DAO's disposal for possible use as cover."]}),"\n",(0,o.jsx)(t.h2,{id:"deposit-data-validation-and-invalidation-aka-vetting-and-unvetting",children:"Deposit data validation and invalidation (aka vetting and unvetting)"}),"\n",(0,o.jsxs)(t.p,{children:["Given the upcoming ",(0,o.jsx)(t.a,{href:"https://hackmd.io/@lido/rJrTnEc2a",children:"DSM"})," upgrade, CSM will utilize an ",(0,o.jsx)(t.a,{href:"https://hackmd.io/@lido/ryw2Qo5ia",children:"optimistic vetting"})," approach. Uploaded deposit data will be treated as valid unless DSM reports it is not. In case of invalid deposit data detection, DSM calls ",(0,o.jsx)(t.a,{href:"https://github.com/lidofinance/community-staking-module/blob/main/src/CSModule.sol#L861",children:(0,o.jsx)(t.code,{children:"decreaseVettedSigningKeysCount"})})," to set ",(0,o.jsx)(t.code,{children:"vettedKeys"})," pointer to the deposit data prior to the first invalid deposit data. In this case a Node Operator should remove invalid keys to resume stake allocation to the valid non-deposited keys."]}),"\n",(0,o.jsx)(t.h2,{id:"depositable-keys",children:"Depositable keys"}),"\n",(0,o.jsxs)(t.p,{children:["Several factors determine if the deposit can be made using corresponding deposit data. This information is reflected in the Node Operator's ",(0,o.jsx)(t.code,{children:"depositableKeys"})," property. This property indicates the number of deposit data records extracted sequentially starting from the last deposited record available in the Node Operator's key storage for deposits by the staking router. This number is determined as follows:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"targetLimit"})," is not set -> ",(0,o.jsx)(t.code,{children:"vettedKeys - depositedKeys - unbondedKeys"})]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"targetLimit"})," is set -> ",(0,o.jsx)(t.code,{children:"min(vettedKeys,targetLimit) - depositedKeys - unbondedKeys"})]}),"\n",(0,o.jsxs)(t.li,{children:["Node Operator has ",(0,o.jsx)(t.code,{children:"stuckKeys != 0"})," no matter the ",(0,o.jsx)(t.code,{children:"targetLimit"})," -> ",(0,o.jsx)(t.code,{children:"0"}),"."]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"stake-allocation-queue",children:"Stake allocation queue"}),"\n",(0,o.jsxs)(t.p,{children:["The stake allocation queue in CSM is a traditional ",(0,o.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/FIFO_(computing_and_electronics)",children:"FIFO"})," (first in, first out) queue. Node Operators occupy places in the queue with the ",(0,o.jsx)(t.code,{children:"{noId, keysCount}"})," batches and wait for their turn."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"join-csm-5",src:i(6071).A+"",width:"2616",height:"1385"})}),"\n",(0,o.jsxs)(t.p,{children:["Once the queue reaches the Node Operator's batch, CSM checks how many keys from the batch can be deposited using the formula: ",(0,o.jsx)(t.code,{children:"min(depositableKeys, keysInBatch)"}),"."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"join-csm-6",src:i(3420).A+"",width:"2058",height:"1025"})}),"\n",(0,o.jsxs)(t.p,{children:["There might be a case when a Node Operator has keys that are not in the queue since they were skipped during the queue iteration as they were not depositable at the moment of iteration. The ",(0,o.jsx)(t.code,{children:"normalizeQueue"})," method allows Node Operators to place all depositable keys back into the queue."]}),"\n",(0,o.jsxs)(t.p,{children:["There are several pointers regarding deposit data storage in CSM. Among the others, there are ",(0,o.jsx)(t.code,{children:"totalAddedKeys"})," and ",(0,o.jsx)(t.code,{children:"totalVettedKeys"})," pointers. With the optimistic vetting approach, these two pointers should be in sync most of the time (",(0,o.jsx)(t.code,{children:"totalAddedKeys == totalVettedKeys"}),"), given that there are no reports about the presence of invalid deposit data. Hence, there are two ways for the deposit data to be placed into the queue:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Once the deposit data is uploaded, if ",(0,o.jsx)(t.code,{children:"totalAddedKeys == totalVettedKeys"}),";"]}),"\n",(0,o.jsxs)(t.li,{children:["After the call of the ",(0,o.jsx)(t.a,{href:"https://github.com/lidofinance/community-staking-module/blob/main/src/CSModule.sol#L978",children:(0,o.jsx)(t.code,{children:"normalizeQueue"})})," method, in case some keys were not placed into the queue upon upload (",(0,o.jsx)(t.code,{children:"totalAddedKeys != totalVettedKeys"})," at the moment of upload) or were skipped during the queue iterations;"]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["There is a method to check the next ",(0,o.jsx)(t.code,{children:"X"}),'elements and remove those containing no depositable keys. This methods is required to ensure queue operation even in catastrophic scenarios resulting in significant queue "pollution" with the non-depositable keys.']}),"\n",(0,o.jsxs)(t.p,{children:["A detailed description of the queue is provided in a separate ",(0,o.jsx)(t.a,{href:"https://hackmd.io/@lido/ryw2Qo5ia",children:"document"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"deposit-data-deletion",children:"Deposit data deletion"}),"\n",(0,o.jsxs)(t.p,{children:["The Node Operator might delete uploaded deposit data voluntarily if it has not been deposited yet. The ",(0,o.jsx)(t.code,{children:"removalCharge"})," is confiscated from the Node Operator's bond on each deleted key to cover maximal possible operational costs associated with the queue processing. Deposit data can be deleted in continuous batches (ex., from index 5 to 10)."]}),"\n",(0,o.jsx)(t.p,{children:"If the protocol has already deposited the validator related to the deposit data, the Node Operator cannot delete the deposit data. The only way to stop validation duties is to exit the validator on the CL. Once the validator is fully withdrawn, the Node Operator can claim the excess bond."}),"\n",(0,o.jsx)(t.h2,{id:"early-adoption-period",children:"Early Adoption period"}),"\n",(0,o.jsxs)(t.p,{children:['One of the challenges with permissionless entry for the Node Operators with appealing conditions is the possibility of a huge actor occupying all seats in the staking module. To overcome this, an Early Adoption period is proposed as the first stage of the CSM mainnet lifecycle. A Merkle proof used as an entry ticket to the CSM on the mainnet is required to join during the Early Adoption period. On top of the ability to join, such node operators will be eligible for the "bond discount for the first validator". This will ensure that during the Early Adoption period, ',(0,o.jsx)(t.a,{href:"https://github.com/lidofinance/community-staking-module/tree/main/artifacts/holesky/early-adoption",children:"proven solo-stakers"})," will be able to join with a small benefit."]}),"\n",(0,o.jsxs)(t.p,{children:["Please refer to the ",(0,o.jsx)(t.a,{href:"https://hackmd.io/@lido/HyKgaBMj6",children:"detailed doc"})," to learn more about the mechanics of the Early Adoption period."]}),"\n",(0,o.jsx)(t.h2,{id:"further-reading",children:"Further reading"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"/staking-modules/csm/rewards",children:"Rewards"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"/staking-modules/csm/penalties",children:"Penalties"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"/staking-modules/csm/validator-exits",children:"Validator exits"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},9667:(e,t,i)=>{i.d(t,{A:()=>o});const o=i.p+"assets/images/join-csm-1-0d4160028c3b5a5ab570a5057990f45e.png"},6456:(e,t,i)=>{i.d(t,{A:()=>o});const o=i.p+"assets/images/join-csm-2-d5e059fd3dc0441b5aa1c53c4d7aaab6.png"},6673:(e,t,i)=>{i.d(t,{A:()=>o});const o=i.p+"assets/images/join-csm-3-9b11f664a1de1a98685b297aff004399.png"},3582:(e,t,i)=>{i.d(t,{A:()=>o});const o=i.p+"assets/images/join-csm-4-e16e693d85f61db74fc411e20b02749b.png"},6071:(e,t,i)=>{i.d(t,{A:()=>o});const o=i.p+"assets/images/join-csm-5-518cf6c776afc349ccaf75fcfcf8d868.png"},3420:(e,t,i)=>{i.d(t,{A:()=>o});const o=i.p+"assets/images/join-csm-6-3e7a41f56bbe2a5b6616a659db553616.png"},8453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>d});var o=i(6540);const n={},s=o.createContext(n);function a(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);