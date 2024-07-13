"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8168],{7175:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var s=r(4848),i=r(8453);const t={},o="Protocol levers",l={id:"gu\xedas/protocol-levers",title:"Protocol levers",description:"The protocol provides a number of settings controllable by the DAO. Modifying each of them requires",source:"@site/docs/gu\xedas/protocol-levers.md",sourceDirName:"gu\xedas",slug:"/gu\xedas/protocol-levers",permalink:"/lido-docs-spanish/gu\xedas/protocol-levers",draft:!1,unlisted:!1,editUrl:"https://github.com/adminseedlatam/lido-docs-spanish/edit/main/docs/gu\xedas/protocol-levers.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Despliegue de Multisig",permalink:"/lido-docs-spanish/gu\xedas/multisig-deployment"},next:{title:"DAO voting with Etherscan",permalink:"/lido-docs-spanish/gu\xedas/etherscan-voting"}},d={},c=[{value:"A note on upgradeability",id:"a-note-on-upgradeability",level:3},{value:"Lido",id:"lido",level:2},{value:"Burning stETH tokens",id:"burning-steth-tokens",level:3},{value:"Pausing",id:"pausing",level:3},{value:"Override deposited validators counter",id:"override-deposited-validators-counter",level:3},{value:"Oracle report",id:"oracle-report",level:3},{value:"Deposit access control",id:"deposit-access-control",level:3},{value:"Deposit loop iteration limit",id:"deposit-loop-iteration-limit",level:3},{value:"Execution layer rewards",id:"execution-layer-rewards",level:3},{value:"Staking rate limiting",id:"staking-rate-limiting",level:3},{value:"StakingRouter",id:"stakingrouter",level:2},{value:"Fee",id:"fee",level:3},{value:"Fee distribution",id:"fee-distribution",level:3},{value:"Ethereum withdrawal Credentials",id:"ethereum-withdrawal-credentials",level:3},{value:"NodeOperatorsRegistry",id:"nodeoperatorsregistry",level:2},{value:"Node Operators list",id:"node-operators-list",level:3},{value:"Deactivating a node operator",id:"deactivating-a-node-operator",level:3},{value:"Managing node operator\u2019s signing keys",id:"managing-node-operators-signing-keys",level:3},{value:"Reporting new stopped validators",id:"reporting-new-stopped-validators",level:3},{value:"LegacyOracle",id:"legacyoracle",level:2},{value:"Lido",id:"lido-1",level:3},{value:"Members list",id:"members-list",level:3},{value:"The quorum",id:"the-quorum",level:3},{value:"Sanity check",id:"sanity-check",level:3},{value:"Current reporting status",id:"current-reporting-status",level:3},{value:"Expected epoch",id:"expected-epoch",level:3},{value:"Version of the contract",id:"version-of-the-contract",level:3},{value:"Beacon specification",id:"beacon-specification",level:3},{value:"Current epoch",id:"current-epoch",level:3},{value:"Supplemental epoch information",id:"supplemental-epoch-information",level:3},{value:"Last completed epoch",id:"last-completed-epoch",level:3},{value:"Supplemental rewards information",id:"supplemental-rewards-information",level:3}];function a(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"protocol-levers",children:"Protocol levers"}),"\n",(0,s.jsxs)(n.p,{children:["The protocol provides a number of settings controllable by the DAO. Modifying each of them requires\nthe caller to have a specific permission. After deploying the DAO, all permissions belong to either DAO ",(0,s.jsx)(n.code,{children:"Voting"})," or ",(0,s.jsx)(n.code,{children:"Agent"})," apps,\nwhich can also manage them. This means that, initially, levers can only be changed by\nthe DAO voting, and other entities can be allowed to do the same only as a result of the voting."]}),"\n",(0,s.jsx)(n.p,{children:"All existing levers are listed below, grouped by the contract."}),"\n",(0,s.jsx)(n.h3,{id:"a-note-on-upgradeability",children:"A note on upgradeability"}),"\n",(0,s.jsx)(n.p,{children:"The following contracts are upgradeable by the DAO voting:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/contracts/lido-locator",children:(0,s.jsx)(n.code,{children:"LidoLocator"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/contracts/lido",children:(0,s.jsx)(n.code,{children:"Lido"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/contracts/staking-router",children:(0,s.jsx)(n.code,{children:"StakingRouter"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/contracts/node-operators-registry",children:(0,s.jsx)(n.code,{children:"NodeOperatorsRegistry"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/contracts/accounting-oracle",children:(0,s.jsx)(n.code,{children:"AccountingOracle"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/contracts/validators-exit-bus-oracle",children:(0,s.jsx)(n.code,{children:"ValidatorsExitBusOracle"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/contracts/withdrawal-vault",children:(0,s.jsx)(n.code,{children:"WithdrawalVault"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/contracts/withdrawal-queue-erc721",children:(0,s.jsx)(n.code,{children:"WithdrawalQueueERC721"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/contracts/legacy-oracle",children:(0,s.jsx)(n.code,{children:"LegacyOracle"})})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Upgradeability is implemented either by the Aragon kernel and base contracts OR by the ",(0,s.jsx)(n.a,{href:"/contracts/ossifiable-proxy",children:"OssifiableProxy"})," instances.\nTo upgrade an Aragon app, one needs the ",(0,s.jsx)(n.code,{children:"dao.APP_MANAGER_ROLE"})," permission provided by Aragon.\nTo upgrade an ",(0,s.jsx)(n.code,{children:"OssifiableProxy"})," implementation, one needs to be an owner of the proxy.\nAs it was said previously, both belong either to the DAO ",(0,s.jsx)(n.code,{children:"Voting"})," or ",(0,s.jsx)(n.code,{children:"Agent"})," apps."]}),"\n",(0,s.jsxs)(n.p,{children:["All upgradeable contracts use the ",(0,s.jsx)(n.a,{href:"https://blog.openzeppelin.com/upgradeability-using-unstructured-storage",children:"Unstructured Storage pattern"})," in order to provide stable storage structure across upgrades."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"Some of the contracts still contain structured storage data, hence the order of inheritance always matters."})}),"\n",(0,s.jsx)(n.h2,{id:"lido",children:(0,s.jsx)(n.a,{href:"/contracts/lido",children:"Lido"})}),"\n",(0,s.jsx)(n.h3,{id:"burning-steth-tokens",children:"Burning stETH tokens"}),"\n",(0,s.jsxs)(n.p,{children:["There is a dedicated contract responsible for ",(0,s.jsx)(n.code,{children:"stETH"})," tokens burning.\nThe burning itself is a part of the core protocol procedures:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["deduct underlying finalized withdrawal request ",(0,s.jsx)(n.code,{children:"stETH"}),", see ",(0,s.jsx)(n.a,{href:"/contracts/lido#handleoraclereport",children:(0,s.jsx)(n.code,{children:"Lido.handleOracleReport"})})]}),"\n",(0,s.jsxs)(n.li,{children:["penalize delinquent node operators by halving their rewards, see ",(0,s.jsx)(n.a,{href:"/gu%C3%ADas/oracle-spec/penalties",children:"Validator exits and penalties"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["These responsibilities are controlled by the ",(0,s.jsx)(n.code,{children:"REQUEST_BURN_SHARES_ROLE"})," role which is assigned to both\n",(0,s.jsx)(n.a,{href:"/contracts/lido",children:(0,s.jsx)(n.code,{children:"Lido"})})," and ",(0,s.jsx)(n.a,{href:"/contracts/node-operators-registry",children:(0,s.jsx)(n.code,{children:"NodeOperatorsRegistry"})})," contracts.\nThis role should not be ever permanently assigned to another entities."]}),"\n",(0,s.jsxs)(n.p,{children:["Apart from this, ",(0,s.jsx)(n.code,{children:"stETH"})," token burning can be applied to compensate for penalties/slashing losses by the DAO decision.\nIt's possible via more restrictive role ",(0,s.jsx)(n.code,{children:"REQUEST_BURN_MY_STETH_ROLE"})," which is currently unassigned."]}),"\n",(0,s.jsxs)(n.p,{children:["The key difference that despite of both roles rely on the ",(0,s.jsx)(n.code,{children:"stETH"})," allowance provided to the ",(0,s.jsx)(n.code,{children:"Burner"})," contract,\nthe latter allows token burning only from the request originator balance."]}),"\n",(0,s.jsx)(n.h3,{id:"pausing",children:"Pausing"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Mutator: ",(0,s.jsx)(n.code,{children:"stop()"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Permission required: ",(0,s.jsx)(n.code,{children:"PAUSE_ROLE"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Mutator: ",(0,s.jsx)(n.code,{children:"resume()"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Permission required: ",(0,s.jsx)(n.code,{children:"RESUME_ROLE"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Accessor: ",(0,s.jsx)(n.code,{children:"isStopped() returns (bool)"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["When paused, ",(0,s.jsx)(n.code,{children:"Lido"})," doesn't accept user submissions, doesn't allow user withdrawals and oracle\nreport submissions. No token actions (burning, transferring, approving transfers and changing\nallowances) are allowed. The following transactions revert:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["plain ether transfers to ",(0,s.jsx)(n.code,{children:"Lido"}),";"]}),"\n",(0,s.jsxs)(n.li,{children:["calls to ",(0,s.jsx)(n.code,{children:"submit(address)"}),";"]}),"\n",(0,s.jsxs)(n.li,{children:["calls to ",(0,s.jsx)(n.code,{children:"deposit(uint256, uint256, bytes)"}),";"]}),"\n",(0,s.jsxs)(n.li,{children:["calls to ",(0,s.jsx)(n.code,{children:"handleOracleReport(...)"}),";"]}),"\n",(0,s.jsxs)(n.li,{children:["calls to ",(0,s.jsx)(n.code,{children:"transfer(address, uint256)"}),";"]}),"\n",(0,s.jsxs)(n.li,{children:["calls to ",(0,s.jsx)(n.code,{children:"transferFrom(address, address, uint256)"}),";"]}),"\n",(0,s.jsxs)(n.li,{children:["calls to ",(0,s.jsx)(n.code,{children:"transferShares(address, uint256)"}),";"]}),"\n",(0,s.jsxs)(n.li,{children:["calls to ",(0,s.jsx)(n.code,{children:"transferSharesFrom(address, uint256)"}),";"]}),"\n",(0,s.jsxs)(n.li,{children:["calls to ",(0,s.jsx)(n.code,{children:"approve(address, uint256)"}),";"]}),"\n",(0,s.jsxs)(n.li,{children:["calls to ",(0,s.jsx)(n.code,{children:"increaseAllowance(address, uint256)"}),";"]}),"\n",(0,s.jsxs)(n.li,{children:["calls to ",(0,s.jsx)(n.code,{children:"decreaseAllowance(address, uint256)"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"As a consequence of the list above:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["calls to ",(0,s.jsx)(n.code,{children:"WithdrawalQueueERC721.requestWithdrawals(uint256[] calldata, address)"}),", and its variants;"]}),"\n",(0,s.jsxs)(n.li,{children:["calls to ",(0,s.jsx)(n.code,{children:"wstETH.wrap(uint256)"})," and ",(0,s.jsx)(n.code,{children:"wstETH.unwrap(uint256)"}),";"]}),"\n",(0,s.jsxs)(n.li,{children:["calls to ",(0,s.jsx)(n.code,{children:"Burner.requestBurnShares"}),", ",(0,s.jsx)(n.code,{children:"Burner.requestBurnMyStETH"}),", and its variants;"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"External stETH/wstETH DeFi integrations are directly affected as well."})}),"\n",(0,s.jsx)(n.h3,{id:"override-deposited-validators-counter",children:"Override deposited validators counter"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Mutator: ",(0,s.jsx)(n.code,{children:"unsafeChangeDepositedValidators(uint256)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Permission required: ",(0,s.jsx)(n.code,{children:"UNSAFE_CHANGE_DEPOSITED_VALIDATORS_ROLE"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The method unsafely changes deposited validator counter.\nCan be required when onboarding external validators to Lido (i.e., had deposited before and rotated their type-0x00 withdrawal credentials to Lido)."}),"\n",(0,s.jsx)(n.p,{children:"The incorrect values might disrupt protocol operation."}),"\n",(0,s.jsx)(n.h3,{id:"oracle-report",children:"Oracle report"}),"\n",(0,s.jsx)(n.p,{children:"TODO: oracle reports are committee-driven"}),"\n",(0,s.jsx)(n.h3,{id:"deposit-access-control",children:"Deposit access control"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"Lido.deposit"})," method performs an actual deposit (stake) of buffered ether to Consensus Layer\nundergoing through ",(0,s.jsx)(n.code,{children:"StakingRouter"}),", its selected module, and the official Ethereum deposit contract in the end."]}),"\n",(0,s.jsxs)(n.p,{children:["The method can be called only by ",(0,s.jsx)(n.code,{children:"DepositSecurityModule"})," since access control is a part of the deposits frontrunning vulnerability mitigation."]}),"\n",(0,s.jsxs)(n.p,{children:["Please see ",(0,s.jsx)(n.a,{href:"https://github.com/lidofinance/lido-improvement-proposals/blob/develop/LIPS/lip-5.md",children:"LIP-5"})," for more details."]}),"\n",(0,s.jsx)(n.h3,{id:"deposit-loop-iteration-limit",children:"Deposit loop iteration limit"}),"\n",(0,s.jsx)(n.p,{children:"Controls how many Ethereum deposits can be made in a single transaction."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"_maxDepositsCount"})," parameter of the ",(0,s.jsx)(n.code,{children:"deposit(uint256 _maxDepositsCount, uint256 _stakingModuleId, bytes _depositCalldata)"})," function"]}),"\n",(0,s.jsxs)(n.li,{children:["Default value: ",(0,s.jsx)(n.code,{children:"16"})]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/lidofinance/lido-dao/blob/master/test/scenario/lido_deposit_iteration_limit.js",children:"Scenario test"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["When DSM calls ",(0,s.jsx)(n.code,{children:"depositBufferedEther"}),", ",(0,s.jsx)(n.code,{children:"Lido"})," tries to register as many Ethereum validators\nas it can given the buffered ether amount. The limit is passed as an argument to this function and\nis needed to prevent the transaction from ",(0,s.jsx)(n.a,{href:"https://github.com/ConsenSys/smart-contract-best-practices/blob/8f99aef/docs/known_attacks.md#gas-limit-dos-on-a-contract-via-unbounded-operations",children:"failing due to the block gas limit"}),", which is possible\nif the amount of the buffered ether becomes sufficiently large."]}),"\n",(0,s.jsx)(n.h3,{id:"execution-layer-rewards",children:"Execution layer rewards"}),"\n",(0,s.jsxs)(n.p,{children:["Lido implements an architecture design which was proposed in the Lido Improvement Proposal ",(0,s.jsx)(n.a,{href:"https://github.com/lidofinance/lido-improvement-proposals/blob/develop/LIPS/lip-12.md",children:"#12"})," to collect the execution level rewards (starting from the Merge hardfork) and distribute them as part of the Lido Oracle report."]}),"\n",(0,s.jsxs)(n.p,{children:["These execution layer rewards are initially accumulated on the dedicated ",(0,s.jsx)(n.a,{href:"/contracts/lido-execution-layer-rewards-vault",children:(0,s.jsx)(n.code,{children:"LidoExecutionLayerRewardsVault"})})," contract and consists of priority fees and MEV."]}),"\n",(0,s.jsxs)(n.p,{children:["There is an additional limit to prevent drastic token rebase events.\nSee the following issue: ",(0,s.jsx)(n.a,{href:"https://github.com/lidofinance/lido-dao/issues/405",children:(0,s.jsx)(n.code,{children:"#405"})})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Mutator: ",(0,s.jsx)(n.code,{children:"setELRewardsVault()"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Permission required: ",(0,s.jsx)(n.code,{children:"SET_EL_REWARDS_VAULT_ROLE"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Mutator: ",(0,s.jsx)(n.code,{children:"setELRewardsWithdrawalLimit()"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Permission required: ",(0,s.jsx)(n.code,{children:"SET_EL_REWARDS_WITHDRAWAL_LIMIT_ROLE"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Accessors:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"getELRewardsVault()"}),";"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"getELRewardsWithdrawalLimit()"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"staking-rate-limiting",children:"Staking rate limiting"}),"\n",(0,s.jsxs)(n.p,{children:["Lido features a safeguard mechanism to prevent huge APR losses facing the ",(0,s.jsx)(n.a,{href:"https://blog.lido.fi/modelling-the-entry-queue-post-merge-an-analysis-of-impacts-on-lidos-socialized-model/",children:"post-merge entry queue demand"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"New staking requests could be rate-limited with a soft moving cap for the stake amount per desired period."}),"\n",(0,s.jsx)(n.p,{children:"Limit explanation scheme:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    * \u25b2 Stake limit\n    * \u2502.....  .....   ........ ...            ....     ... Stake limit = max\n    * \u2502      .       .        .   .   .      .    . . .\n    * \u2502     .       .              . .  . . .      . .\n    * \u2502            .                .  . . .\n    * \u2502\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500> Time\n    * \u2502     ^      ^          ^   ^^^  ^ ^ ^     ^^^ ^     Stake events\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Mutators: ",(0,s.jsx)(n.code,{children:"resumeStaking()"}),", ",(0,s.jsx)(n.code,{children:"setStakingLimit(uint256, uint256)"}),", ",(0,s.jsx)(n.code,{children:"removeStakingLimit()"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Permission required: ",(0,s.jsx)(n.code,{children:"STAKING_CONTROL_ROLE"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Mutator: ",(0,s.jsx)(n.code,{children:"pauseStaking()"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Permission required: ",(0,s.jsx)(n.code,{children:"STAKING_PAUSE_ROLE"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Accessors:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"isStakingPaused()"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"getCurrentStakeLimit()"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"getStakeLimitFullInfo()"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["When staking is paused, ",(0,s.jsx)(n.code,{children:"Lido"})," doesn't accept user submissions. The following transactions revert:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Plain ether transfers;"}),"\n",(0,s.jsxs)(n.li,{children:["calls to ",(0,s.jsx)(n.code,{children:"submit(address)"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["For details, see the Lido Improvement Proposal ",(0,s.jsx)(n.a,{href:"https://github.com/lidofinance/lido-improvement-proposals/blob/develop/LIPS/lip-14.md",children:"#14"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"stakingrouter",children:(0,s.jsx)(n.a,{href:"/contracts/staking-router",children:"StakingRouter"})}),"\n",(0,s.jsx)(n.h3,{id:"fee",children:"Fee"}),"\n",(0,s.jsxs)(n.p,{children:["The total fee, in basis points (",(0,s.jsx)(n.code,{children:"10000"})," corresponding to ",(0,s.jsx)(n.code,{children:"100%"}),")."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Mutator: ",(0,s.jsx)(n.code,{children:"setFee(uint16)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Permission required: ",(0,s.jsx)(n.code,{children:"MANAGE_FEE"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Accessor: ",(0,s.jsx)(n.code,{children:"getFee() returns (uint16)"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The fee is taken on staking rewards and distributed between the treasury, the insurance fund, and\nnode operators."}),"\n",(0,s.jsx)(n.h3,{id:"fee-distribution",children:"Fee distribution"}),"\n",(0,s.jsxs)(n.p,{children:["Controls how the fee is distributed between the treasury, the insurance fund, and node operators.\nEach fee component is in basis points; the sum of all components must add up to 1 (",(0,s.jsx)(n.code,{children:"10000"})," basis points)."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Mutator: ",(0,s.jsx)(n.code,{children:"setFeeDistribution(uint16 treasury, uint16 insurance, uint16 operators)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Permission required: ",(0,s.jsx)(n.code,{children:"MANAGE_FEE"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Accessor: ",(0,s.jsx)(n.code,{children:"getFeeDistribution() returns (uint16 treasury, uint16 insurance, uint16 operators)"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"ethereum-withdrawal-credentials",children:"Ethereum withdrawal Credentials"}),"\n",(0,s.jsx)(n.p,{children:"Credentials to withdraw ETH on the Execution Layer side"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Mutator: ",(0,s.jsx)(n.code,{children:"setWithdrawalCredentials(bytes)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Permission required: ",(0,s.jsx)(n.code,{children:"MANAGE_WITHDRAWAL_KEY"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Accessor: ",(0,s.jsx)(n.code,{children:"getWithdrawalCredentials() returns (bytes)"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The protocol uses these credentials to register new Ethereum validators."}),"\n",(0,s.jsx)(n.h2,{id:"nodeoperatorsregistry",children:(0,s.jsx)(n.a,{href:"/contracts/node-operators-registry",children:"NodeOperatorsRegistry"})}),"\n",(0,s.jsx)(n.h3,{id:"node-operators-list",children:"Node Operators list"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Mutator: ",(0,s.jsx)(n.code,{children:"addNodeOperator(string _name, address _rewardAddress, uint64 _stakingLimit)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Permission required: ",(0,s.jsx)(n.code,{children:"ADD_NODE_OPERATOR_ROLE"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Mutator: ",(0,s.jsx)(n.code,{children:"setNodeOperatorName(uint256 _id, string _name)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Permission required: ",(0,s.jsx)(n.code,{children:"SET_NODE_OPERATOR_NAME_ROLE"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Mutator: ",(0,s.jsx)(n.code,{children:"setNodeOperatorRewardAddress(uint256 _id, address _rewardAddress)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Permission required: ",(0,s.jsx)(n.code,{children:"SET_NODE_OPERATOR_ADDRESS_ROLE"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Mutator: ",(0,s.jsx)(n.code,{children:"setNodeOperatorStakingLimit(uint256 _id, uint64 _stakingLimit)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Permission required: ",(0,s.jsx)(n.code,{children:"SET_NODE_OPERATOR_LIMIT_ROLE"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Node Operators act as validators on the Beacon chain for the benefit of the protocol. Each\nnode operator submits no more than ",(0,s.jsx)(n.code,{children:"_stakingLimit"})," signing keys that will be used later\nby the protocol for registering the corresponding Ethereum validators. As oracle committee\nreports rewards on the Ethereum side, the fee is taken on these rewards, and part of that fee\nis sent to node operators\u2019 reward addresses (",(0,s.jsx)(n.code,{children:"_rewardAddress"}),")."]}),"\n",(0,s.jsx)(n.h3,{id:"deactivating-a-node-operator",children:"Deactivating a node operator"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Mutator: ",(0,s.jsx)(n.code,{children:"setNodeOperatorActive(uint256 _id, bool _active)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Permission required: ",(0,s.jsx)(n.code,{children:"SET_NODE_OPERATOR_ACTIVE_ROLE"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Misbehaving node operators can be deactivated by calling this function. The protocol skips\ndeactivated operators during validator registration; also, deactivated operators don\u2019t\ntake part in fee distribution."}),"\n",(0,s.jsx)(n.h3,{id:"managing-node-operators-signing-keys",children:"Managing node operator\u2019s signing keys"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Mutator: ",(0,s.jsx)(n.code,{children:"addSigningKeys(uint256 _operator_id, uint256 _quantity, bytes _pubkeys, bytes _signatures)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Permission required: ",(0,s.jsx)(n.code,{children:"MANAGE_SIGNING_KEYS"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Mutator: ",(0,s.jsx)(n.code,{children:"removeSigningKey(uint256 _operator_id, uint256 _index)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Permission required: ",(0,s.jsx)(n.code,{children:"MANAGE_SIGNING_KEYS"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Allow to manage signing keys for the given node operator."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Signing keys can also be managed by the reward address of a signing provider by calling\nthe equivalent functions with the ",(0,s.jsx)(n.code,{children:"OperatorBH"})," suffix: ",(0,s.jsx)(n.code,{children:"addSigningKeysOperatorBH"}),", ",(0,s.jsx)(n.code,{children:"removeSigningKeyOperatorBH"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"reporting-new-stopped-validators",children:"Reporting new stopped validators"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Mutator: ",(0,s.jsx)(n.code,{children:"reportStoppedValidators(uint256 _id, uint64 _stoppedIncrement)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Permission required: ",(0,s.jsx)(n.code,{children:"REPORT_STOPPED_VALIDATORS_ROLE"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Allows to report that ",(0,s.jsx)(n.code,{children:"_stoppedIncrement"})," more validators of a node operator have become stopped."]}),"\n",(0,s.jsx)(n.h2,{id:"legacyoracle",children:(0,s.jsx)(n.a,{href:"/contracts/legacy-oracle",children:"LegacyOracle"})}),"\n",(0,s.jsx)(n.h3,{id:"lido-1",children:"Lido"}),"\n",(0,s.jsx)(n.p,{children:"Address of the Lido contract."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Accessor: ",(0,s.jsx)(n.code,{children:"getLido() returns (address)"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"members-list",children:"Members list"}),"\n",(0,s.jsx)(n.p,{children:"The list of oracle committee members."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Mutators: ",(0,s.jsx)(n.code,{children:"addOracleMember(address)"}),", ",(0,s.jsx)(n.code,{children:"removeOracleMember(address)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Permission required: ",(0,s.jsx)(n.code,{children:"MANAGE_MEMBERS"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Accessor: ",(0,s.jsx)(n.code,{children:"getOracleMembers() returns (address[])"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"the-quorum",children:"The quorum"}),"\n",(0,s.jsx)(n.p,{children:"The number of exactly the same reports needed to finalize the epoch."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Mutator: ",(0,s.jsx)(n.code,{children:"setQuorum(uint256)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Permission required: ",(0,s.jsx)(n.code,{children:"MANAGE_QUORUM"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Accessor: ",(0,s.jsx)(n.code,{children:"getQuorum() returns (uint256)"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["When the ",(0,s.jsx)(n.code,{children:"quorum"})," number of the same reports is collected for the current epoch,"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"the epoch is finalized (no more reports are accepted for it),"}),"\n",(0,s.jsx)(n.li,{children:"the final report is pushed to the Lido,"}),"\n",(0,s.jsxs)(n.li,{children:["statistics collected and the ",(0,s.jsx)(n.a,{href:"#sanity-check",children:"sanity check"})," is evaluated,"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"sanity-check",children:"Sanity check"}),"\n",(0,s.jsx)(n.p,{children:"To make oracles less dangerous, we can limit rewards report by 0.1% increase in stake and 15%\ndecrease in stake, with both values configurable by the governance in case of extremely unusual\ncircumstances."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Mutators: ",(0,s.jsx)(n.code,{children:"setAllowedBeaconBalanceAnnualRelativeIncrease(uint256)"})," and\n",(0,s.jsx)(n.code,{children:"setAllowedBeaconBalanceRelativeDecrease(uint256)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Permission required: ",(0,s.jsx)(n.code,{children:"SET_REPORT_BOUNDARIES"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Accessors: ",(0,s.jsx)(n.code,{children:"getAllowedBeaconBalanceAnnualRelativeIncrease() returns (uint256)"})," and\n",(0,s.jsx)(n.code,{children:"getAllowedBeaconBalanceRelativeDecrease() returns (uint256)"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"current-reporting-status",children:"Current reporting status"}),"\n",(0,s.jsxs)(n.p,{children:['For transparency we provide accessors to return status of the oracle daemons reporting for the\ncurrent "',(0,s.jsx)(n.a,{href:"#expected-epoch",children:"expected epoch"}),'".']}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Accessors:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"getCurrentOraclesReportStatus() returns (uint256)"})," - returns the current reporting bitmap,\nrepresenting oracles who have already pushed their version of report during the ",(0,s.jsx)(n.a,{href:"#expected-epoch",children:"expected"}),"\nepoch, every oracle bit corresponds to the index of the oracle in the current members list,"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"getCurrentReportVariantsSize() returns (uint256)"})," - returns the current reporting variants\narray size,"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"getCurrentReportVariant(uint256 _index) returns (uint64 beaconBalance, uint32 beaconValidators, uint16 count)"})," - returns the current reporting array element with the given\nindex."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"expected-epoch",children:"Expected epoch"}),"\n",(0,s.jsx)(n.p,{children:"The oracle daemons may provide their reports only for the one epoch in every frame: the first\none. The following accessor can be used to look up the current epoch that this contract expects\nreports."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Accessor: ",(0,s.jsx)(n.code,{children:"getExpectedEpochId() returns (uint256)"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Note that any later epoch, that has already come ",(0,s.jsx)(n.em,{children:"and"})," is also the first epoch of its frame, is\nalso eligible for reporting. If some oracle daemon reports it, the contract discards any results of\nthis epoch and advances to the just reported one."]}),"\n",(0,s.jsx)(n.h3,{id:"version-of-the-contract",children:"Version of the contract"}),"\n",(0,s.jsx)(n.p,{children:"Returns the initialized version of this contract starting from 0."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Accessor: ",(0,s.jsx)(n.code,{children:"getVersion() returns (uint256)"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"beacon-specification",children:"Beacon specification"}),"\n",(0,s.jsx)(n.p,{children:"Sets and queries configurable beacon chain specification."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Mutator: ",(0,s.jsx)(n.code,{children:"setBeaconSpec( uint64 _epochsPerFrame, uint64 _slotsPerEpoch, uint64 _secondsPerSlot, uint64 _genesisTime )"}),",","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Permission required: ",(0,s.jsx)(n.code,{children:"SET_BEACON_SPEC"}),","]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Accessor: ",(0,s.jsx)(n.code,{children:"getBeaconSpec() returns (uint64 epochsPerFrame, uint64 slotsPerEpoch, uint64 secondsPerSlot, uint64 genesisTime)"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"current-epoch",children:"Current epoch"}),"\n",(0,s.jsx)(n.p,{children:"Returns the epoch calculated from current timestamp."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Accessor: ",(0,s.jsx)(n.code,{children:"getCurrentEpochId() returns (uint256)"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"supplemental-epoch-information",children:"Supplemental epoch information"}),"\n",(0,s.jsx)(n.p,{children:"Returns currently reportable epoch (the first epoch of the current frame) as well as its start and\nend times in seconds."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Accessor: ",(0,s.jsx)(n.code,{children:"getCurrentFrame() returns (uint256 frameEpochId, uint256 frameStartTime, uint256 frameEndTime)"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"last-completed-epoch",children:"Last completed epoch"}),"\n",(0,s.jsx)(n.p,{children:"Return the last epoch that has been pushed to Lido."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Accessor: ",(0,s.jsx)(n.code,{children:"getLastCompletedEpochId() returns (uint256)"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"supplemental-rewards-information",children:"Supplemental rewards information"}),"\n",(0,s.jsx)(n.p,{children:"Reports beacon balance and its change during the last frame."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Accessor: ",(0,s.jsx)(n.code,{children:"getLastCompletedReportDelta() returns (uint256 postTotalPooledEther, uint256 preTotalPooledEther, uint256 timeElapsed)"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>l});var s=r(6540);const i={},t=s.createContext(i);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);