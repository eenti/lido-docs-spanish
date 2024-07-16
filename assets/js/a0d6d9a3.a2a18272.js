"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9755],{2642:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>o});var r=t(4848),s=t(8453);const d={},c="LegacyOracle",l={id:"contracts/legacy-oracle",title:"LegacyOracle",description:"- Source code",source:"@site/docs/contracts/legacy-oracle.md",sourceDirName:"contracts",slug:"/contracts/legacy-oracle",permalink:"/contracts/legacy-oracle",draft:!1,unlisted:!1,editUrl:"https://github.com/adminseedlatam/lido-docs-spanish/edit/main/docs/contracts/legacy-oracle.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"HashConsensus",permalink:"/contracts/hash-consensus"},next:{title:"OracleReportSanityChecker",permalink:"/contracts/oracle-report-sanity-checker"}},i={},o=[{value:"What is LegacyOracle?",id:"what-is-legacyoracle",level:2},{value:"Key changes",id:"key-changes",level:2},{value:"How does LegacyOracle receive the AccountingOracle reports anyway (flow)",id:"how-does-legacyoracle-receive-the-accountingoracle-reports-anyway-flow",level:3},{value:"Rebase and APR",id:"rebase-and-apr",level:3},{value:"How it was with LidoOracle",id:"how-it-was-with-lidooracle",level:4},{value:"What&#39;s new from Lido V2",id:"whats-new-from-lido-v2",level:4},{value:"Why does it matter",id:"why-does-it-matter",level:4},{value:"View Methods",id:"view-methods",level:2},{value:"getLido()",id:"getlido",level:3},{value:"getAccountingOracle()",id:"getaccountingoracle",level:3},{value:"getContractVersion()",id:"getcontractversion",level:3},{value:"getVersion()",id:"getversion",level:3},{value:"getBeaconSpec()",id:"getbeaconspec",level:3},{value:"Returns",id:"returns",level:4},{value:"getCurrentEpochId()",id:"getcurrentepochid",level:3},{value:"getCurrentFrame()",id:"getcurrentframe",level:3},{value:"Returns",id:"returns-1",level:4},{value:"getLastCompletedEpochId()",id:"getlastcompletedepochid",level:3},{value:"getLastCompletedReportDelta()",id:"getlastcompletedreportdelta",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Methods",id:"methods",level:2},{value:"handlePostTokenRebase()",id:"handleposttokenrebase",level:3},{value:"Parameters",id:"parameters",level:4},{value:"handleConsensusLayerReport()",id:"handleconsensuslayerreport",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Events",id:"events",level:2},{value:"Completed()",id:"completed",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"PostTotalShares()",id:"posttotalshares",level:3},{value:"Parameters",id:"parameters-3",level:4}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"legacyoracle",children:"LegacyOracle"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/lidofinance/lido-dao/blob/master/contracts/0.4.24/oracle/LegacyOracle.sol",children:"Source code"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://etherscan.io/address/0x442af784A788A5bd6F42A01Ebe9F287a871243fb",children:"Deployed contract"})}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"LegacyOracle"})," will be maintained till the end of 2023.\nAfterwards, it will be discontinued and external integrations should rely on ",(0,r.jsx)(n.a,{href:"/contracts/accounting-oracle",children:(0,r.jsx)(n.code,{children:"AccountingOracle"})}),"."]})}),"\n",(0,r.jsx)(n.h2,{id:"what-is-legacyoracle",children:"What is LegacyOracle?"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"LegacyOracle"})," is an Aragon app previously known as ",(0,r.jsx)(n.code,{children:"LidoOracle"}),", used to track changes on the Beacon Chain.\nFollowing the Lido V2 upgrade, this was replaced by the ",(0,r.jsx)(n.a,{href:"/contracts/accounting-oracle",children:(0,r.jsx)(n.code,{children:"AccountingOracle"})}),"\nand the oracle workflow was redesigned to deliver synchronized historical data chunks for the same reference slot\nboth for the Consensus and Execution Layer parts."]}),"\n",(0,r.jsx)(n.h2,{id:"key-changes",children:"Key changes"}),"\n",(0,r.jsxs)(n.p,{children:["In Lido V2, ",(0,r.jsx)(n.code,{children:"LegacyOracle"})," only supports a subset of view functions and events.\n",(0,r.jsx)(n.code,{children:"AccountingOracle"})," interacts with it to push data changes on each report."]}),"\n",(0,r.jsx)(n.h3,{id:"how-does-legacyoracle-receive-the-accountingoracle-reports-anyway-flow",children:"How does LegacyOracle receive the AccountingOracle reports anyway (flow)"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"LegacyOracle"})," contract receives the data changes on each ",(0,r.jsx)(n.code,{children:"AccountingOracle"})," report using two stages\n(still within the same transaction):"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Invoke ",(0,r.jsx)(n.a,{href:"./legacy-oracle#handleconsensuslayerreport",children:(0,r.jsx)(n.code,{children:"handleConsensusLayerReport"})}),"\nproviding the reference slot and validators data from ",(0,r.jsx)(n.code,{children:"AccountingOracle"})," itself."]}),"\n",(0,r.jsxs)(n.li,{children:["Invoke ",(0,r.jsx)(n.a,{href:"./legacy-oracle#handleposttokenrebase",children:(0,r.jsx)(n.code,{children:"handlePostTokenRebase"})}),"\nfrom ",(0,r.jsx)(n.a,{href:"/contracts/lido",children:(0,r.jsx)(n.code,{children:"Lido"})}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.mermaid,{value:"graph LR;\n  A[/  \\]--submitReportData--\x3eAccountingOracle--handleConsensusLayerReport---\x3eLegacyOracle;\n  AccountingOracle--handleOracleReport--\x3eLido--handlePostTokenRebase--\x3eLegacyOracle"}),"\n",(0,r.jsx)(n.h3,{id:"rebase-and-apr",children:"Rebase and APR"}),"\n",(0,r.jsxs)(n.p,{children:["To calculate the protocol's daily rebase and APR projections one would use the old ",(0,r.jsx)(n.code,{children:"LidoOracle"})," APIs for a while.\nAlthough the old way of calculating the APR would still result in relevant numbers, the math might be off in case of significant withdrawals."]}),"\n",(0,r.jsx)(n.h4,{id:"how-it-was-with-lidooracle",children:"How it was with LidoOracle"}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["The formula is outdated and inaccurate since the ",(0,r.jsx)(n.a,{href:"https://blog.lido.fi/lido-v2-launch/",children:"Lido V2 upgrade"})," happened."]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"protocolAPR = (postTotalPooledEther - preTotalPooledEther) * secondsInYear / (preTotalPooledEther * timeElapsed)\nlidoFeeAsFraction = lidoFee / basisPoint\nuserAPR = protocolAPR * (1 - lidoFeeAsFraction)\n"})}),"\n",(0,r.jsx)(n.h4,{id:"whats-new-from-lido-v2",children:"What's new from Lido V2"}),"\n",(0,r.jsxs)(n.p,{children:["See the new Lido API docs with regards to ",(0,r.jsx)(n.a,{href:"/integrations/api#lido-apr",children:"APR"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"// Emits when token rebased (total supply and/or total shares were changed)\nevent TokenRebased(\n    uint256 indexed reportTimestamp,\n    uint256 timeElapsed,\n    uint256 preTotalShares,\n    uint256 preTotalEther, /* preTotalPooledEther */\n    uint256 postTotalShares,\n    uint256 postTotalEther, /* postTotalPooledEther */\n    uint256 sharesMintedAsFees /* fee part included in `postTotalShares` */\n);\n\npreShareRate = preTotalEther * 1e27 / preTotalShares\npostShareRate = postTotalEther * 1e27 / postTotalShares\n\nuserAPR =\n    secondsInYear * (\n        (postShareRate - preShareRate) / preShareRate\n    ) / timeElapsed\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In short, the new formula takes into account both ",(0,r.jsx)(n.code,{children:"preTotalShares"})," and ",(0,r.jsx)(n.code,{children:"postTotalShares"})," values, while,\nin contrast, the old formula didn't use them. The new formula also doesn't require to calculate ",(0,r.jsx)(n.code,{children:"lidoFee"}),"\nat all (because the fee distribution works by changing the total shares amount under the hood)."]}),"\n",(0,r.jsx)(n.h4,{id:"why-does-it-matter",children:"Why does it matter"}),"\n",(0,r.jsxs)(n.p,{children:["When Lido V2 protocol finalizes withdrawal requests, the ",(0,r.jsx)(n.code,{children:"Lido"})," contract sends ether to ",(0,r.jsx)(n.code,{children:"WithdrawalQueue"})," (excluding these funds from ",(0,r.jsx)(n.code,{children:"totalPooledEther"}),", i.e., decreasing TVL) and assigns to burn underlying locked requests' ",(0,r.jsx)(n.code,{children:"stETH"})," shares in return."]}),"\n",(0,r.jsx)(n.p,{children:"In other words, withdrawal finalization decreases both TVL and total shares."}),"\n",(0,r.jsx)(n.p,{children:"Old formula isn't suitable anymore because it catches TVL changes, but skips total shares changes."}),"\n",(0,r.jsx)(n.p,{children:"Illustrative example (using smallish numbers far from the real ones for simplicity):"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"preTotalEther = 1000 ETH\npreTotalShares = 1000 * 10^18 // 1 share : 1 wei\n\npostTotalEther = 999 ETH\npostTotalShares = 990 * 10^18\n\ntimeElapsed = 24 * 60 * 60 // 1 day, or 86400 seconds\n\n//!!! using the old (imprecise) method\n\n// protocolAPR = (postTotalPooledEther - preTotalPooledEther) * secondsInYear / (preTotalPooledEther * timeElapsed)\nprotocolAPR = (999ETH - 1000ETH) * 31557600 / (1000ETH * 86400) = -0.36525\n//lidoFeeAsFraction = lidoFee / basisPoint = 0.1\n//userAPR = protocolAPR * (1 - lidoFeeAsFraction) = protocolAPR * (1 - 0.1)\n\nuserAPR = -0.36525 * (1 - 0.1) = -0.328725\n\n//!!! i.e, userAPR now is ~minus 32.9%\n\n//!!! using the updated (proper) method\n\npreShareRate = 1000 ETH * 1e27 / 1000 * 10^18 = 1e27\npostShareRate = 999 ETH * 1e27 / 990 * 10^18 = 1.009090909090909e+27\nuserAPR = 31557600 * ((postShareRate - preShareRate) / preShareRate) / 86400 = 3.320454545454529\n\n//!!! i.e., userAPR now is ~plus 332%\n"})}),"\n",(0,r.jsx)(n.h2,{id:"view-methods",children:"View Methods"}),"\n",(0,r.jsx)(n.h3,{id:"getlido",children:"getLido()"}),"\n",(0,r.jsxs)(n.p,{children:["Returns the ",(0,r.jsx)(n.code,{children:"Lido"})," contract address."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sol",children:"function getLido() returns (address)\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Always returns the ",(0,r.jsx)(n.code,{children:"Lido"})," address stated in the ",(0,r.jsx)(n.a,{href:"/deployed-contracts",children:"deployed addresses"})," list."]})}),"\n",(0,r.jsx)(n.h3,{id:"getaccountingoracle",children:"getAccountingOracle()"}),"\n",(0,r.jsxs)(n.p,{children:["Returns the ",(0,r.jsx)(n.code,{children:"AccountingOracle"})," contract address."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sol",children:"function getAccountingOracle() returns (address)\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Always returns the ",(0,r.jsx)(n.code,{children:"AccountingOracle"})," address stated in the ",(0,r.jsx)(n.a,{href:"/deployed-contracts",children:"deployed addresses"})," list."]})}),"\n",(0,r.jsx)(n.h3,{id:"getcontractversion",children:"getContractVersion()"}),"\n",(0,r.jsx)(n.p,{children:"Returns the current contract version."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sol",children:"function getContractVersion() returns (uint256)\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Always returns ",(0,r.jsx)(n.code,{children:"4"}),"."]})}),"\n",(0,r.jsx)(n.h3,{id:"getversion",children:"getVersion()"}),"\n",(0,r.jsx)(n.p,{children:"Returns the current contract version (compatibility method)."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sol",children:"function getVersion() returns (uint256)\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Always returns ",(0,r.jsx)(n.code,{children:"4"}),", calls ",(0,r.jsx)(n.code,{children:"getContractVersion()"})," internally."]})}),"\n",(0,r.jsx)(n.h3,{id:"getbeaconspec",children:"getBeaconSpec()"}),"\n",(0,r.jsxs)(n.p,{children:["Returns the ",(0,r.jsx)(n.code,{children:"AccountingOracle"})," frame period together with Ethereum Beacon Chain specification constants."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sol",children:"function getBeaconSpec() returns (\n    uint64 epochsPerFrame,\n    uint64 slotsPerEpoch,\n    uint64 secondsPerSlot,\n    uint64 genesisTime\n)\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"Always returns (225, 32, 12, 1606824023) for Mainnet and (225, 32, 12, 1616508000) for G\xf6rli."})}),"\n",(0,r.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"epochsPerFrame"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"uint64"})}),(0,r.jsxs)(n.td,{children:["Beacon Chain epochs per single ",(0,r.jsx)(n.code,{children:"AccountingOracle"})," report frame"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"slotsPerEpoch"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"uint64"})}),(0,r.jsx)(n.td,{children:"Beacon Chain slots per single Beacon Chain epoch"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"secondsPerSlot"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"uint64"})}),(0,r.jsx)(n.td,{children:"Seconds per single Beacon Chain slot"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"genesisTime"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"uint64"})}),(0,r.jsx)(n.td,{children:"Beacon Chain genesis timestamp"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"getcurrentepochid",children:"getCurrentEpochId()"}),"\n",(0,r.jsxs)(n.p,{children:["Returns the Beacon Chain epoch id calculated from the current timestamp using the ",(0,r.jsx)(n.a,{href:"./legacy-oracle#getbeaconspec",children:"beacon chain spec"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sol",children:"function getCurrentEpochId() returns (uint256)\n"})}),"\n",(0,r.jsx)(n.h3,{id:"getcurrentframe",children:"getCurrentFrame()"}),"\n",(0,r.jsxs)(n.p,{children:["Returns the first epoch of the current ",(0,r.jsx)(n.code,{children:"AccountingOracle"})," reporting frame as well as its start and end times in seconds."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sol",children:"function getCurrentFrame() returns (\n    uint256 frameEpochId,\n    uint256 frameStartTime,\n    uint256 frameEndTime\n)\n"})}),"\n",(0,r.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"frameEpochId"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"uint256"})}),(0,r.jsxs)(n.td,{children:["The first epoch of the current ",(0,r.jsx)(n.code,{children:"AccountingOracle"})," reporting frame"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"frameStartTime"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"uint256"})}),(0,r.jsx)(n.td,{children:"The start timestamp of the current reporting frame"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"frameEndTime"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"uint256"})}),(0,r.jsx)(n.td,{children:"The end timestamp of the current reporting frame"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"getlastcompletedepochid",children:"getLastCompletedEpochId()"}),"\n",(0,r.jsxs)(n.p,{children:["Returns the starting epoch of the last frame in which the last ",(0,r.jsx)(n.code,{children:"AccountingOracle"})," report was received and applied."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sol",children:"function getLastCompletedEpochId() returns (uint256)\n"})}),"\n",(0,r.jsx)(n.h3,{id:"getlastcompletedreportdelta",children:"getLastCompletedReportDelta()"}),"\n",(0,r.jsxs)(n.p,{children:["Returns the total supply change ocurred with the last completed ",(0,r.jsx)(n.code,{children:"AccountingOracle"})," report."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sol",children:"function getLastCompletedReportDelta() returns (\n    uint256 postTotalPooledEther,\n    uint256 preTotalPooledEther,\n    uint256 timeElapsed\n)\n"})}),"\n",(0,r.jsx)(n.h4,{id:"returns-2",children:"Returns"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"postTotalPooledEther"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"uint256"})}),(0,r.jsx)(n.td,{children:"Post-report `stETH`` total pooled ether (i.e., total supply)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"preTotalPooledEther"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"uint256"})}),(0,r.jsxs)(n.td,{children:["Pre-report ",(0,r.jsx)(n.code,{children:"stETH"})," total pooled ether (i.e., total supply)"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"timeElapsed"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"uint256"})}),(0,r.jsx)(n.td,{children:"Time elapsed since the previously completed report, seconds"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(n.h3,{id:"handleposttokenrebase",children:"handlePostTokenRebase()"}),"\n",(0,r.jsxs)(n.p,{children:["Handles a ",(0,r.jsx)(n.code,{children:"stETH"})," token rebase incurred by the succeeded ",(0,r.jsx)(n.code,{children:"AccountingOracle"})," report storing\nthe total ether and time elapsed stats."]}),"\n",(0,r.jsxs)(n.p,{children:["Emits ",(0,r.jsx)(n.a,{href:"./legacy-oracle#posttotalshares",children:(0,r.jsx)(n.code,{children:"PostTotalShares"})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sol",children:"function handlePostTokenRebase(\n    uint256 reportTimestamp,\n    uint256 timeElapsed,\n    uint256 preTotalShares,\n    uint256 preTotalEther,\n    uint256 postTotalShares,\n    uint256 postTotalEther,\n    uint256 totalSharesMintedAsFees\n)\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["The caller must be ",(0,r.jsx)(n.code,{children:"Lido"}),"."]})}),"\n",(0,r.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"reportTimestamp"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"uint256"})}),(0,r.jsx)(n.td,{children:"The reference timestamp corresponding to the moment of the oracle report calculation"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"timeElapsed"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"uint256"})}),(0,r.jsx)(n.td,{children:"Time elapsed since the previously completed report, seconds"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"preTotalShares"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"uint256"})}),(0,r.jsxs)(n.td,{children:["Pre-report ",(0,r.jsx)(n.code,{children:"stETH"})," total shares"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"preTotalEther"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"uint256"})}),(0,r.jsxs)(n.td,{children:["Pre-report ",(0,r.jsx)(n.code,{children:"stETH"})," total pooled ether (i.e., total supply)"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"postTotalShares"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"uint256"})}),(0,r.jsxs)(n.td,{children:["Post-report ",(0,r.jsx)(n.code,{children:"stETH"})," total shares"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"postTotalEther"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"uint256"})}),(0,r.jsxs)(n.td,{children:["Post-report ",(0,r.jsx)(n.code,{children:"stETH"})," total pooled ether (i.e., total supply)"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"totalSharesMintedAsFees"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"uint256"})}),(0,r.jsx)(n.td,{children:"Total shares amount minted as the protocol fees on top of the accrued rewards"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"handleconsensuslayerreport",children:"handleConsensusLayerReport()"}),"\n",(0,r.jsxs)(n.p,{children:["Handles a new completed ",(0,r.jsx)(n.code,{children:"AccountingOracle"})," report storing the corresponding Beacon Chain epoch id."]}),"\n",(0,r.jsxs)(n.p,{children:["Emits ",(0,r.jsx)(n.a,{href:"./legacy-oracle#completed",children:(0,r.jsx)(n.code,{children:"Completed"})}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sol",children:"function handleConsensusLayerReport(\n    uint256 _refSlot,\n    uint256 _clBalance,\n    uint256 _clValidators\n)\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["The caller must be ",(0,r.jsx)(n.code,{children:"AccountingOracle"}),"."]})}),"\n",(0,r.jsx)(n.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"_refSlot"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"uint256"})}),(0,r.jsx)(n.td,{children:"The reference slot corresponding to the moment of the oracle report calculation"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"_clBalance"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"uint256"})}),(0,r.jsx)(n.td,{children:"Lido-participating validators balance on the Beacon Chain side"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"_clValidators"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"uint256"})}),(0,r.jsx)(n.td,{children:"Number of the Lido-participating validators on the Beacon Chain side"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"events",children:"Events"}),"\n",(0,r.jsx)(n.h3,{id:"completed",children:"Completed()"}),"\n",(0,r.jsxs)(n.p,{children:["Emits whenever the ",(0,r.jsx)(n.code,{children:"AccountingOracle"})," report landed."]}),"\n",(0,r.jsx)(n.p,{children:"This event is still emitted after oracle committee reaches consensus on a report, but only for compatibility purposes.\nThe values in this event are not enough to calculate APR or TVL anymore due to withdrawals, Execution Layer rewards, and Consensus Layer rewards skimming."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-solidity",children:"event Completed(\n    uint256 epochId,\n    uint128 beaconBalance,\n    uint128 beaconValidators\n);\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Emits inside the ",(0,r.jsx)(n.a,{href:"./legacy-oracle#handleconsensuslayerreport",children:(0,r.jsx)(n.code,{children:"handleConsensusLayerReport"})})," methods."]})}),"\n",(0,r.jsx)(n.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"epochId"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"uint256"})}),(0,r.jsx)(n.td,{children:"Report reference epoch identifier"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"beaconBalance"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"uint128"})}),(0,r.jsx)(n.td,{children:"The balance of the Lido-participating validators on the Consensus Layer side"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"beaconValidators"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"uint128"})}),(0,r.jsx)(n.td,{children:"The number of the ever appeared Lido-participating validators"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"posttotalshares",children:"PostTotalShares()"}),"\n",(0,r.jsxs)(n.p,{children:["Emits whenever the ",(0,r.jsx)(n.code,{children:"AccountingOracle"})," report landed."]}),"\n",(0,r.jsx)(n.p,{children:"This event is still emitted after each rebase but only for compatibility purposes. The values in this event are not enough to correctly calculate the rebase APR since a rebase can result from shares burning without changing total ETH held by the protocol."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-solidity",children:"event PostTotalShares(\n    uint256 postTotalPooledEther,\n    uint256 preTotalPooledEther,\n    uint256 timeElapsed,\n    uint256 totalShares\n)\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["The new [",(0,r.jsx)(n.code,{children:"TokenRebased"}),"](/docs/integrations/api.md#ultimo-apr-de-lido-para steth) event emitted from the main Lido contract should be used instead because it provides the pre-report total shares amount as well which is essential to properly estimate a token rebase and its projected APR."]})}),"\n",(0,r.jsx)(n.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"postTotalPooledEther"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"uint256"})}),(0,r.jsx)(n.td,{children:"Post-report total pooled ether"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"preTotalPooledEther"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"uint256"})}),(0,r.jsx)(n.td,{children:"Pre-report total pooled ether"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"timeElapsed"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"uint256"})}),(0,r.jsx)(n.td,{children:"Time elapsed since the previous report, seconds"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"totalShares"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"uint256"})}),(0,r.jsx)(n.td,{children:"Post-report total shares"})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>l});var r=t(6540);const s={},d=r.createContext(s);function c(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);