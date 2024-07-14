"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3997],{7519:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(4848),d=n(8453);const r={},t="DepositSecurityModule",l={id:"contracts/deposit-security-module",title:"DepositSecurityModule",description:"- Source Code",source:"@site/docs/contracts/deposit-security-module.md",sourceDirName:"contracts",slug:"/contracts/deposit-security-module",permalink:"/lido-docs-spanish/contracts/deposit-security-module",draft:!1,unlisted:!1,editUrl:"https://github.com/adminseedlatam/lido-docs-spanish/edit/main/docs/contracts/deposit-security-module.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"wstETH",permalink:"/lido-docs-spanish/contracts/wsteth"},next:{title:"Burner",permalink:"/lido-docs-spanish/contracts/burner"}},a={},c=[{value:"View Methods",id:"view-methods",level:2},{value:"getOwner()",id:"getowner",level:3},{value:"getPauseIntentValidityPeriodBlocks()",id:"getpauseintentvalidityperiodblocks",level:3},{value:"getMaxDeposits()",id:"getmaxdeposits",level:3},{value:"getMinDepositBlockDistance()",id:"getmindepositblockdistance",level:3},{value:"getGuardianQuorum()",id:"getguardianquorum",level:3},{value:"getGuardians()",id:"getguardians",level:3},{value:"isGuardian()",id:"isguardian",level:3},{value:"Parameters",id:"parameters",level:4},{value:"getGuardianIndex()",id:"getguardianindex",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"canDeposit()",id:"candeposit",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Methods",id:"methods",level:2},{value:"setOwner()",id:"setowner",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"setPauseIntentValidityPeriodBlocks()",id:"setpauseintentvalidityperiodblocks",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"setMaxDeposits()",id:"setmaxdeposits",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"setMinDepositBlockDistance()",id:"setmindepositblockdistance",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"setGuardianQuorum()",id:"setguardianquorum",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"addGuardian()",id:"addguardian",level:3},{value:"Parameters",id:"parameters-8",level:4},{value:"addGuardians()",id:"addguardians",level:3},{value:"Parameters",id:"parameters-9",level:4},{value:"removeGuardian()",id:"removeguardian",level:3},{value:"Parameters",id:"parameters-10",level:4},{value:"pauseDeposits()",id:"pausedeposits",level:3},{value:"Parameters",id:"parameters-11",level:4},{value:"unpauseDeposits()",id:"unpausedeposits",level:3},{value:"Parameters",id:"parameters-12",level:4},{value:"depositBufferedEther()",id:"depositbufferedether",level:3},{value:"Parameters",id:"parameters-13",level:4}];function o(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"depositsecuritymodule",children:"DepositSecurityModule"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://github.com/lidofinance/lido-dao/blob/master/contracts/0.8.9/DepositSecurityModule.sol",children:"Source Code"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://etherscan.io/address/0xC77F8768774E1c9244BEed705C4354f2113CFc09",children:"Deployed Contract"})}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Due to front-running vulnerability, we ",(0,i.jsx)(s.a,{href:"https://github.com/lidofinance/lido-improvement-proposals/blob/develop/LIPS/lip-5.md",children:"proposed"})," to establish the Deposit Security Committee dedicated to ensuring the safety of deposits on the Beacon chain:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"monitoring the history of deposits and the set of Lido keys available for the deposit, signing and disseminating messages allowing deposits;"}),"\n",(0,i.jsx)(s.li,{children:"signing the special message allowing anyone to pause deposits once the malicious Node Operator pre-deposits are detected."}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Each member must generate an EOA address to sign messages with their private key. The addresses of the committee members will be added to the smart contract."}),"\n",(0,i.jsx)(s.p,{children:"To make a deposit, we propose to collect a quorum of 4/6 of the signatures of the committee members. Members of the committee can collude with node operators and steal money by signing bad data that contains malicious pre-deposits. To mitigate this, we propose allowing a single committee member to stop deposits and also enforce space deposits in time (e.g., no more than 150 deposits with 25 blocks in between them) to provide the single honest participant the ability to stop further deposits even if the supermajority colludes."}),"\n",(0,i.jsxs)(s.p,{children:["The guardian himself, or anyone else who has a signed pause message, can call ",(0,i.jsx)(s.code,{children:"pauseDeposits"})," that pauses ",(0,i.jsx)(s.code,{children:"DepositSecurityModule"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["To prevent a replay attack, the guardians sign the block number when  malicious pre-deposits are observed. After a certain number of blocks (",(0,i.jsx)(s.code,{children:"pauseIntentValidityPeriodBlocks"}),") message becomes invalid."]}),"\n",(0,i.jsxs)(s.p,{children:["Values of the parameters ",(0,i.jsx)(s.code,{children:"maxDepositsPerBlock"})," and ",(0,i.jsx)(s.code,{children:"minDepositBlockDistance"})," are controlled by Lido DAO and must be harmonized with ",(0,i.jsx)(s.code,{children:"churnValidatorsPerDayLimit"})," of ",(0,i.jsx)(s.a,{href:"/contracts/oracle-report-sanity-checker",children:(0,i.jsx)(s.code,{children:"OracleReportSanityChecker"})}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"view-methods",children:"View Methods"}),"\n",(0,i.jsx)(s.h3,{id:"getowner",children:"getOwner()"}),"\n",(0,i.jsx)(s.p,{children:"Returns the contract's owner address."}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sol",children:"function getOwner() external view returns (address);\n"})}),"\n",(0,i.jsx)(s.h3,{id:"getpauseintentvalidityperiodblocks",children:"getPauseIntentValidityPeriodBlocks()"}),"\n",(0,i.jsxs)(s.p,{children:["Returns ",(0,i.jsx)(s.code,{children:"PAUSE_INTENT_VALIDITY_PERIOD_BLOCKS"})," (see ",(0,i.jsx)(s.code,{children:"pauseDeposits"}),")."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sol",children:"function getPauseIntentValidityPeriodBlocks() external view returns (uint256)\n"})}),"\n",(0,i.jsx)(s.h3,{id:"getmaxdeposits",children:"getMaxDeposits()"}),"\n",(0,i.jsxs)(s.p,{children:["Returns max amount of deposits per block (see ",(0,i.jsx)(s.code,{children:"depositBufferedEther"}),")."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sol",children:"function getMaxDeposits() external view returns (uint256)\n"})}),"\n",(0,i.jsx)(s.h3,{id:"getmindepositblockdistance",children:"getMinDepositBlockDistance()"}),"\n",(0,i.jsxs)(s.p,{children:["Returns min distance in blocks between deposits (see ",(0,i.jsx)(s.code,{children:"depositBufferedEther"}),")."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sol",children:"function getMinDepositBlockDistance() external view returns (uint256)\n"})}),"\n",(0,i.jsx)(s.h3,{id:"getguardianquorum",children:"getGuardianQuorum()"}),"\n",(0,i.jsx)(s.p,{children:"Returns the number of valid guardian signatures required to vet (depositRoot, nonce) pair."}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sol",children:"function getGuardianQuorum() external view returns (uint256)\n"})}),"\n",(0,i.jsx)(s.h3,{id:"getguardians",children:"getGuardians()"}),"\n",(0,i.jsx)(s.p,{children:"Returns guardian committee member list."}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sol",children:"function getGuardians() external view returns (address[] memory)\n"})}),"\n",(0,i.jsx)(s.h3,{id:"isguardian",children:"isGuardian()"}),"\n",(0,i.jsx)(s.p,{children:"Checks whether the given address is a guardian."}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sol",children:"function isGuardian(address addr) external view returns (bool)\n"})}),"\n",(0,i.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Name"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"addr"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"address"})}),(0,i.jsx)(s.td,{children:"Valid ETH-1 address"})]})})]}),"\n",(0,i.jsx)(s.h3,{id:"getguardianindex",children:"getGuardianIndex()"}),"\n",(0,i.jsx)(s.p,{children:"Returns index of the guardian, or -1 if the address is not a guardian."}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sol",children:"function getGuardianIndex(address addr) external view returns (int256)\n"})}),"\n",(0,i.jsx)(s.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Name"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"addr"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"address"})}),(0,i.jsx)(s.td,{children:"Valid ETH-1 address"})]})})]}),"\n",(0,i.jsx)(s.h3,{id:"candeposit",children:"canDeposit()"}),"\n",(0,i.jsxs)(s.p,{children:["Returns whether ",(0,i.jsx)(s.code,{children:"LIDO.deposit()"})," can be called and a deposit can be made for the staking module with\nid ",(0,i.jsx)(s.code,{children:"stakingModuleId"}),", given that the caller will provide guardian attestations of non-stale deposit\nroot and ",(0,i.jsx)(s.code,{children:"nonce"})," and the number of such attestations will be enough to reach a quorum."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sol",children:"function canDeposit(uint256 stakingModuleId) external view returns (bool)\n"})}),"\n",(0,i.jsx)(s.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Name"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"stakingModuleId"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"uint256"})}),(0,i.jsx)(s.td,{children:"Id of the staking module"})]})})]}),"\n",(0,i.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(s.h3,{id:"setowner",children:"setOwner()"}),"\n",(0,i.jsx)(s.p,{children:"Sets new owner."}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sol",children:"function setOwner(address newValue) external;\n"})}),"\n",(0,i.jsxs)(s.admonition,{type:"note",children:[(0,i.jsx)(s.p,{children:"Reverts if any of the following is true:"}),(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"msg.sender"})," is not the owner;"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"newValue"})," is zero address."]}),"\n"]})]}),"\n",(0,i.jsx)(s.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Name"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"newValue"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"address"})}),(0,i.jsx)(s.td,{children:"New owner address"})]})})]}),"\n",(0,i.jsx)(s.h3,{id:"setpauseintentvalidityperiodblocks",children:"setPauseIntentValidityPeriodBlocks()"}),"\n",(0,i.jsxs)(s.p,{children:["Sets ",(0,i.jsx)(s.code,{children:"pauseIntentValidityPeriodBlocks"}),"."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sol",children:"function setPauseIntentValidityPeriodBlocks(uint256 newValue)\n"})}),"\n",(0,i.jsxs)(s.admonition,{type:"note",children:[(0,i.jsx)(s.p,{children:"Reverts if any of the following is true:"}),(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"msg.sender"})," is not the owner;"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"newValue"})," is 0 (zero)."]}),"\n"]})]}),"\n",(0,i.jsx)(s.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Name"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"newValue"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"uint256"})}),(0,i.jsx)(s.td,{children:"Number of blocks after which message becomes invalid"})]})})]}),"\n",(0,i.jsx)(s.h3,{id:"setmaxdeposits",children:"setMaxDeposits()"}),"\n",(0,i.jsxs)(s.p,{children:["Sets ",(0,i.jsx)(s.code,{children:"maxDepositsPerBlock"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["The value must be harmonized with the parameter ",(0,i.jsx)(s.code,{children:"churnValidatorsPerDayLimit"})," of ",(0,i.jsx)(s.a,{href:"/contracts/oracle-report-sanity-checker",children:"OracleReportSanityChecker"}),"."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sol",children:"function setMaxDeposits(uint256 newValue)\n"})}),"\n",(0,i.jsxs)(s.admonition,{type:"note",children:[(0,i.jsx)(s.p,{children:"Reverts if any of the following is true:"}),(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"msg.sender"})," is not the owner."]}),"\n"]})]}),"\n",(0,i.jsx)(s.h4,{id:"parameters-5",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Name"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"newValue"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"uint256"})}),(0,i.jsx)(s.td,{children:"New value of the maxDepositsPerBlock parameter"})]})})]}),"\n",(0,i.jsx)(s.h3,{id:"setmindepositblockdistance",children:"setMinDepositBlockDistance()"}),"\n",(0,i.jsxs)(s.p,{children:["Sets ",(0,i.jsx)(s.code,{children:"minDepositBlockDistance"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["The value must be harmonized with the parameter ",(0,i.jsx)(s.code,{children:"churnValidatorsPerDayLimit"})," of ",(0,i.jsx)(s.a,{href:"/contracts/oracle-report-sanity-checker",children:"OracleReportSanityChecker"}),"."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sol",children:"function setMinDepositBlockDistance(uint256 newValue)\n"})}),"\n",(0,i.jsxs)(s.admonition,{type:"note",children:[(0,i.jsx)(s.p,{children:"Reverts if any of the following is true:"}),(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"msg.sender"})," is not the owner."]}),"\n"]})]}),"\n",(0,i.jsx)(s.h4,{id:"parameters-6",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Name"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"newValue"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"uint256"})}),(0,i.jsx)(s.td,{children:"New value of the min DepositsPerBlock parameter"})]})})]}),"\n",(0,i.jsx)(s.h3,{id:"setguardianquorum",children:"setGuardianQuorum()"}),"\n",(0,i.jsx)(s.p,{children:'Sets the number of valid guardian signatures required to vet (depositRoot, nonce) pair (aka "quorum").'}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sol",children:"function setGuardianQuorum(uint256 newValue)\n"})}),"\n",(0,i.jsxs)(s.admonition,{type:"note",children:[(0,i.jsx)(s.p,{children:"Reverts if any of the following is true:"}),(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"msg.sender"})," is not the owner;"]}),"\n"]})]}),"\n",(0,i.jsx)(s.h4,{id:"parameters-7",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Name"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"newValue"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"uint256"})}),(0,i.jsx)(s.td,{children:"New quorum value"})]})})]}),"\n",(0,i.jsx)(s.h3,{id:"addguardian",children:"addGuardian()"}),"\n",(0,i.jsx)(s.p,{children:"Adds a guardian address and sets a new quorum value."}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sol",children:"function addGuardian(address addr, uint256 newQuorum)\n"})}),"\n",(0,i.jsxs)(s.admonition,{type:"note",children:[(0,i.jsx)(s.p,{children:"Reverts if any of the following is true:"}),(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"msg.sender"})," is not the owner;"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"addr"})," is already a guardian."]}),"\n"]})]}),"\n",(0,i.jsx)(s.h4,{id:"parameters-8",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Name"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"addr"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"address"})}),(0,i.jsx)(s.td,{children:"Guardian address"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"newQuorum"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"uint256"})}),(0,i.jsx)(s.td,{children:"New Quorum value"})]})]})]}),"\n",(0,i.jsx)(s.h3,{id:"addguardians",children:"addGuardians()"}),"\n",(0,i.jsx)(s.p,{children:"Adds a set of guardian addresses and sets a new quorum value."}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sol",children:"function addGuardians(address[] memory addresses, uint256 newQuorum)\n"})}),"\n",(0,i.jsxs)(s.admonition,{type:"note",children:[(0,i.jsx)(s.p,{children:"Reverts if any of the following is true:"}),(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"msg.sender"})," is not the owner;"]}),"\n",(0,i.jsxs)(s.li,{children:["any of the ",(0,i.jsx)(s.code,{children:"addresses"})," is already a guardian."]}),"\n"]})]}),"\n",(0,i.jsx)(s.h4,{id:"parameters-9",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Name"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"addresses"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"address[]"})}),(0,i.jsx)(s.td,{children:"Array of Guardian addresses"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"newQuorum"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"uint256"})}),(0,i.jsx)(s.td,{children:"New Quorum value"})]})]})]}),"\n",(0,i.jsx)(s.h3,{id:"removeguardian",children:"removeGuardian()"}),"\n",(0,i.jsx)(s.p,{children:"Removes a guardian with the given address and sets a new quorum value."}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sol",children:"function removeGuardian(address addr, uint256 newQuorum)\n"})}),"\n",(0,i.jsxs)(s.admonition,{type:"note",children:[(0,i.jsx)(s.p,{children:"Reverts if any of the following is true:"}),(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"msg.sender"})," is not the owner;"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"addr"})," is not a guardian."]}),"\n"]})]}),"\n",(0,i.jsx)(s.h4,{id:"parameters-10",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Name"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"addr"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"address"})}),(0,i.jsx)(s.td,{children:"Guardian address"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"newQuorum"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"uint256"})}),(0,i.jsx)(s.td,{children:"New Quorum value"})]})]})]}),"\n",(0,i.jsx)(s.h3,{id:"pausedeposits",children:"pauseDeposits()"}),"\n",(0,i.jsx)(s.p,{children:"Pauses deposits for staking module given that both conditions are satisfied (reverts otherwise):"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"The function is called by the guardian with index guardianIndex OR sig\nis a valid signature by the guardian with index guardianIndex of the data\ndefined below."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"block.number - blockNumber <= pauseIntentValidityPeriodBlocks"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"The signature, if present, must be produced for keccak256 hash of the following\nmessage (each component taking 32 bytes):"}),"\n",(0,i.jsx)(s.p,{children:"| PAUSE_MESSAGE_PREFIX | blockNumber | stakingModuleId |"}),"\n",(0,i.jsxs)(s.p,{children:["If the staking module is not active does nothing.\nIn case of an emergency, the function ",(0,i.jsx)(s.code,{children:"pauseDeposits"})," is supposed to be called\nby all guardians. Thus only the first call will do the actual change. So\nthe other calls would be OK operations from the point of view of the protocol logic."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sol",children:"function pauseDeposits(uint256 blockNumber, uint256 stakingModuleId, Signature memory sig)\n"})}),"\n",(0,i.jsx)(s.h4,{id:"parameters-11",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Name"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"blockNumber"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"uint256"})}),(0,i.jsx)(s.td,{children:"Block number with malicious pre-deposits have been observed by the guardian"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"stakingModuleId"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"uint256"})}),(0,i.jsx)(s.td,{children:"Id of the staking module to pause deposits for"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"sig"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"Signature"})}),(0,i.jsxs)(s.td,{children:["Short ECDSA guardian signature as defined in ",(0,i.jsx)(s.a,{href:"https://eips.ethereum.org/EIPS/eip-2098",children:"EIP-2098"})]})]})]})]}),"\n",(0,i.jsx)(s.h3,{id:"unpausedeposits",children:"unpauseDeposits()"}),"\n",(0,i.jsx)(s.p,{children:"Unpauses deposits for staking module.\nIf the staking module is not paused, do nothing."}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sol",children:"function unpauseDeposits(uint256 stakingModuleId)\n"})}),"\n",(0,i.jsxs)(s.admonition,{type:"note",children:[(0,i.jsx)(s.p,{children:"Reverts if any of the following is true:"}),(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"msg.sender"})," is not the owner."]}),"\n"]})]}),"\n",(0,i.jsx)(s.h4,{id:"parameters-12",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Name"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"stakingModuleId"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"uint256"})}),(0,i.jsx)(s.td,{children:"Id of the staking module"})]})})]}),"\n",(0,i.jsx)(s.h3,{id:"depositbufferedether",children:"depositBufferedEther()"}),"\n",(0,i.jsxs)(s.p,{children:["Verifies the deposit security conditions are met and calls ",(0,i.jsx)(s.code,{children:"LIDO.deposit(maxDepositsPerBlock, stakingModuleId, depositCalldata)"}),". Otherwise reverts."]}),"\n",(0,i.jsxs)(s.admonition,{type:"note",children:[(0,i.jsx)(s.p,{children:"Reverts if any of the following is true:"}),(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsx)(s.li,{children:"IDepositContract.get_deposit_root() != depositRoot;"}),"\n",(0,i.jsx)(s.li,{children:"StakingModule.getNonce() != nonce;"}),"\n",(0,i.jsx)(s.li,{children:"The number of guardian signatures is less than getGuardianQuorum();"}),"\n",(0,i.jsx)(s.li,{children:"An invalid or non-guardian signature received;"}),"\n",(0,i.jsx)(s.li,{children:"block.number - StakingModule.getLastDepositBlock() < minDepositBlockDistance;"}),"\n",(0,i.jsx)(s.li,{children:"blockhash(blockNumber) != blockHash."}),"\n"]})]}),"\n",(0,i.jsx)(s.p,{children:"Signatures must be sorted in ascending order by the index of the guardian. Each signature must\nbe produced for the keccak256 hash of the following message (each component taking 32 bytes):"}),"\n",(0,i.jsx)(s.p,{children:"| ATTEST_MESSAGE_PREFIX | blockNumber | blockHash | depositRoot | stakingModuleId | nonce |"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sol",children:"function depositBufferedEther(\n        uint256 blockNumber,\n        bytes32 blockHash,\n        bytes32 depositRoot,\n        uint256 stakingModuleId,\n        uint256 nonce,\n        bytes calldata depositCalldata,\n        Signature[] calldata sortedGuardianSignatures\n    )\n"})}),"\n",(0,i.jsx)(s.h4,{id:"parameters-13",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Name"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"blockNumber"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"uint256"})}),(0,i.jsx)(s.td,{children:"Number of the current deposit block"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"blockHash"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"bytes32"})}),(0,i.jsx)(s.td,{children:"Hash of the current deposit block"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"depositRoot"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"bytes32"})}),(0,i.jsx)(s.td,{children:"Deposit root of the Ethereum DepositContract"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"stakingModuleId"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"uint256"})}),(0,i.jsx)(s.td,{children:"Id of the staking module to deposit with"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"nonce"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"uint256"})}),(0,i.jsx)(s.td,{children:"Nonce of key operations of the staking module"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"depositCalldata"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"bytes"})}),(0,i.jsx)(s.td,{children:"Staking module deposit calldata"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"sortedGuardianSignatures"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"Signature[]"})}),(0,i.jsxs)(s.td,{children:["Short ECDSA guardians signatures as defined in ",(0,i.jsx)(s.a,{href:"https://eips.ethereum.org/EIPS/eip-2098",children:"EIP-2098"})]})]})]})]})]})}function h(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>t,x:()=>l});var i=n(6540);const d={},r=i.createContext(d);function t(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);