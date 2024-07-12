"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1421],{8464:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>n,metadata:()=>l,toc:()=>d});var i=a(4848),r=a(8453);const n={},s="Validators Exit Bus",l={id:"gu\xedas/oracle-spec/validator-exit-bus",title:"Validators Exit Bus",description:"It's advised to read What is Lido Oracle mechanism before",source:"@site/docs/gu\xedas/oracle-spec/validator-exit-bus.md",sourceDirName:"gu\xedas/oracle-spec",slug:"/gu\xedas/oracle-spec/validator-exit-bus",permalink:"/lido-docs-spanish/gu\xedas/oracle-spec/validator-exit-bus",draft:!1,unlisted:!1,editUrl:"https://github.com/adminseedlatam/lido-docs-spanish/edit/main/docs/gu\xedas/oracle-spec/validator-exit-bus.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Accounting oracle",permalink:"/lido-docs-spanish/gu\xedas/oracle-spec/accounting-oracle"},next:{title:"Validator exits and penalties",permalink:"/lido-docs-spanish/gu\xedas/oracle-spec/penalties"}},o={},d=[{value:"Next validator to exit algorithm",id:"next-validator-to-exit-algorithm",level:2},{value:"Get information to prepare ordered queue",id:"get-information-to-prepare-ordered-queue",level:2},{value:"Report limits",id:"report-limits",level:3},{value:"Get exitable validators",id:"get-exitable-validators",level:3},{value:"Node operator stats",id:"node-operator-stats",level:3},{value:"Last requested validators indices",id:"last-requested-validators-indices",level:4},{value:"State collection",id:"state-collection",level:3},{value:"Fetching data",id:"fetching-data",level:3},{value:"Get uncovered withdrawal requests amount of stETH",id:"get-uncovered-withdrawal-requests-amount-of-steth",level:4},{value:"Calculate average rewards speed per epoch",id:"calculate-average-rewards-speed-per-epoch",level:4},{value:"Calculate epochs to sweep",id:"calculate-epochs-to-sweep",level:4},{value:"Average sweep prediction",id:"average-sweep-prediction",level:5},{value:"Withdrawable validators",id:"withdrawable-validators",level:5},{value:"Predict available ether before next withdrawn",id:"predict-available-ether-before-next-withdrawn",level:4},{value:"Calculate expected balance to withdraw",id:"calculate-expected-balance-to-withdraw",level:4},{value:"Future rewards",id:"future-rewards",level:5},{value:"Future withdrawals amount",id:"future-withdrawals-amount",level:5},{value:"Total available balance",id:"total-available-balance",level:5},{value:"Validators to eject cummulative amount",id:"validators-to-eject-cummulative-amount",level:5},{value:"Validators going to exit",id:"validators-going-to-exit",level:5},{value:"Compare expected_balance vs to_withdrawn_balance",id:"compare-expected_balance-vs-to_withdrawn_balance",level:5},{value:"Helpful links",id:"helpful-links",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"validators-exit-bus",children:"Validators Exit Bus"}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["It's advised to read ",(0,i.jsx)(t.a,{href:"/guides/oracle-operator-manual#intro",children:"What is Lido Oracle mechanism"})," before"]})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/contracts/validators-exit-bus-oracle",children:"Validators Exit Bus"})," is an oracle that ejects Lido validators when the protocol requires additional funds to process user withdrawals."]}),"\n",(0,i.jsx)(t.p,{children:"A report calculation consists of 4 key steps:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Calculate withdrawals amount to cover with ether."}),"\n",(0,i.jsx)(t.li,{children:"Calculate ether rewards prediction per epoch."}),"\n",(0,i.jsx)(t.li,{children:"Calculate withdrawal epoch for next validator eligible for exit to cover withdrawal requests if needed"}),"\n",(0,i.jsx)(t.li,{children:"Prepare validators exit order queue"}),"\n",(0,i.jsx)(t.li,{children:"Go through the queue until the exited validators\u2019 balances cover all withdrawal requests (considering the predicated final exited balance of each validator)."}),"\n"]}),"\n",(0,i.jsxs)(t.admonition,{type:"note",children:[(0,i.jsxs)(t.p,{children:["Placed exit requests via ",(0,i.jsx)(t.code,{children:"ValidatorsExitBusOracle"})," should be processed timely according to the ratified ",(0,i.jsx)(t.a,{href:"https://snapshot.org/#/lido-snapshot.eth/proposal/0xa4eb1220a15d46a1825d5a0f44de1b34644d4aa6bb95f910b86b29bb7654e330",children:"Lido on Ethereum Validator Exits Policy V1.0"}),"."]}),(0,i.jsxs)(t.p,{children:["See also the provided ",(0,i.jsx)(t.a,{href:"/lido-docs-spanish/gu%C3%ADas/oracle-spec/penalties",children:"penalties"})," spec."]})]}),"\n",(0,i.jsx)(t.h2,{id:"next-validator-to-exit-algorithm",children:"Next validator to exit algorithm"}),"\n",(0,i.jsxs)(t.p,{children:["The algorithm for the validators exiting is based on ",(0,i.jsx)(t.a,{href:"https://research.lido.fi/t/withdrawals-on-validator-exiting-order/3048#combined-approach-17",children:"the algorithm described on the research forum"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"The algorithm is supposed to correct the future number of validators for each Node Operator. Suppose the validators and deposits in-flight of one of the Node Operator are represented in the following form, where validators are sorted by their indexes:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"VEBO 1",src:a(6710).A+"",width:"1000",height:"160"})}),"\n",(0,i.jsx)(t.p,{children:"The algorithm assumes that the oldest validators are exited first. Therefore, previously requested validators can be separated to exit by knowing the index of the last requested."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"VEBO 2",src:a(7389).A+"",width:"1000",height:"160"})}),"\n",(0,i.jsx)(t.p,{children:"Worth noting, each validator has a status. Some validators may be slashed or be exited without an request from the protocol:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"VEBO 3",src:a(1236).A+"",width:"1000",height:"180"})}),"\n",(0,i.jsxs)(t.p,{children:["Among all validators the projected ones are the point of interest. They include all active validators and in-flight deposits, but exclude validators whose ",(0,i.jsx)(t.code,{children:"exit_epoch != FAR_FUTURE_EPOCH"})," and those validators that were requested to exit."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"VEBO 4",src:a(1179).A+"",width:"1000",height:"240"})}),"\n",(0,i.jsxs)(t.p,{children:["A few hours later it might look like the following:\n",(0,i.jsx)(t.img,{alt:"VEBO 5",src:a(5826).A+"",width:"1000",height:"240"})]}),"\n",(0,i.jsx)(t.p,{children:"Note that th described algorithm is looking for a validator to exit only among those that can be exited, while using the projected number of validators, which includes non-existent yet validators. It's only weights, so there is no misconception here."}),"\n",(0,i.jsx)(t.p,{children:"The final exit order predicate sequence:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Validator whose operator with the lowest number of delayed validators"}),"\n",(0,i.jsx)(t.li,{children:"Validator whose operator with the highest number of targeted validators to exit"}),"\n",(0,i.jsx)(t.li,{children:"Validator whose operator with the highest stake weight"}),"\n",(0,i.jsx)(t.li,{children:"Validator whose operator with the highest number of validators"}),"\n",(0,i.jsx)(t.li,{children:"Validator with the lowest index"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"get-information-to-prepare-ordered-queue",children:"Get information to prepare ordered queue"}),"\n",(0,i.jsx)(t.p,{children:"In order to prepare a queue of validators to exit, the following actions and considerations involved:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"the maximum number of validators that can be requested to exit in one report;"}),"\n",(0,i.jsx)(t.li,{children:"operator network penetration percent - only if the operator's share is greater than 1%;"}),"\n",(0,i.jsx)(t.li,{children:"'exitable' Lido validators;"}),"\n",(0,i.jsx)(t.li,{children:"fetch node operators stats to sort exitable validators;"}),"\n",(0,i.jsx)(t.li,{children:"total predictable validators count;"}),"\n",(0,i.jsx)(t.li,{children:"last requested validators indices."}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"report-limits",children:"Report limits"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"maxValidatorExitRequestsPerReport"})," - max number of exit requests allowed in report to ",(0,i.jsx)(t.code,{children:"ValidatorsExitBusOracle"})," from ",(0,i.jsx)(t.code,{children:"OracleReportSanityChecker.getOracleReportLimits()"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"VALIDATOR_DELAYED_TIMEOUT_IN_SLOTS"})," - A parameter from from ",(0,i.jsx)(t.code,{children:"OracleDaemonConfig"})," contract used to calculate validators going to exit."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"NODE_OPERATOR_NETWORK_PENETRATION_THRESHOLD_BP"})," - - A parameter from ",(0,i.jsx)(t.code,{children:"OracleDaemonConfig"})," that is taken into account when determining the penetration of the operator into the network."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"get-exitable-validators",children:"Get exitable validators"}),"\n",(0,i.jsx)(t.p,{children:"A validator is 'exitable' if two conditions are strictly have NOT met:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"validator.exit_epoch != FAR_FUTURE_EPOCH"})," and"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"validator.index <= last_requested_to_exit_index"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"node-operator-stats",children:"Node operator stats"}),"\n",(0,i.jsx)(t.p,{children:"Statistics for each node operator, which are needed for sorting their validators in exit order:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"validators count that are not yet in CL"}),"\n",(0,i.jsx)(t.li,{children:"validators that are in CL and are not yet requested to exit and not on exit"}),"\n",(0,i.jsx)(t.li,{children:"validators that are in CL and requested to exit but not on exit and not requested to exit recently"}),"\n",(0,i.jsx)(t.li,{children:"target validators count"}),"\n",(0,i.jsx)(t.li,{children:"checks whether the target limit flag is enabled"}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["NB: A validator can not be considered as delayed if it was requested to exit in last ",(0,i.jsx)(t.code,{children:"VALIDATOR_DELAYED_TIMEOUT_IN_SLOTS"})," slots"]}),"\n",(0,i.jsx)(t.h4,{id:"last-requested-validators-indices",children:"Last requested validators indices"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.a,{href:"/lido-docs-spanish/contracts/validators-exit-bus-oracle",children:(0,i.jsx)(t.code,{children:"ValidatorsExitBusOracle"})})," contract stores the index of the last validator that was requested to exit. Since validators are requested in strict order from the lowest ",(0,i.jsx)(t.code,{children:"validatorIndex"})," to the highest, the indexes help find all the previously requested validators without fetching all events."]}),"\n",(0,i.jsxs)(t.p,{children:["Returns the latest validator indices that were requested to exit for the given\n",(0,i.jsx)(t.code,{children:"operator_indexes"})," in the given ",(0,i.jsx)(t.code,{children:"module"}),". For node operators that were never requested to exit\nany validator yet, index is set to ",(0,i.jsx)(t.code,{children:"-1"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"ValidatorsExitBusOracle.getLastRequestedValidatorIndices(\n    uint256 moduleId,\n    uint256[] nodeOpIds\n): int256[]\n"})}),"\n",(0,i.jsx)(t.h3,{id:"state-collection",children:"State collection"}),"\n",(0,i.jsx)(t.p,{children:"To find the next validators to exit, Validators Exit Bus Oracle collects the following state from both Ethereum Consensus and Execution layers."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["From ",(0,i.jsx)(t.a,{href:"/contracts/oracle-daemon-config",children:"OracleDaemonConfig"})," contract:","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"PREDICTION_DURATION_IN_SLOTS"}),"\n",(0,i.jsx)(t.li,{children:"VALIDATOR_DELAYED_TIMEOUT_IN_SLOTS"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["From ",(0,i.jsx)(t.a,{href:"/contracts/withdrawal-queue-erc721",children:"Withdrawal Queue"}),":","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Get total unfinalized withdrawal request amount"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["From ",(0,i.jsx)(t.a,{href:"/contracts/lido",children:"Lido"})," contract:","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Recent postCLBalance/preCLBalance and withdrawals from Execution Layer Rewards and Withdrawal vaults via events"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["From Consensus Layer node:","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"All validators and their states on the reference slot"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["From ",(0,i.jsx)(t.a,{href:"/contracts/staking-router",children:"Staking Router"}),":","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Public keys of all Lido validators"}),"\n",(0,i.jsx)(t.li,{children:"Indices of the last requested validator to exit for each Node Operator"}),"\n",(0,i.jsx)(t.li,{children:"Validator keys statistics for each Node Operator"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["From Oracle contract:","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Maximum number of exit requests for the current frame"}),"\n",(0,i.jsx)(t.li,{children:"Recently requested via Exit Bus public keys to exit"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"fetching-data",children:"Fetching data"}),"\n",(0,i.jsx)(t.h4,{id:"get-uncovered-withdrawal-requests-amount-of-steth",children:"Get uncovered withdrawal requests amount of stETH"}),"\n",(0,i.jsxs)(t.p,{children:["Collects the amount of stETH in the queue yet to be finalized from ",(0,i.jsx)(t.code,{children:"WithdrawalQueue.unfinalizedStETH()"})]}),"\n",(0,i.jsx)(t.h4,{id:"calculate-average-rewards-speed-per-epoch",children:"Calculate average rewards speed per epoch"}),"\n",(0,i.jsxs)(t.p,{children:["Fetches ",(0,i.jsx)(t.code,{children:"ETHDistributed"})," and ",(0,i.jsx)(t.code,{children:"TokenRebased"})," events from the ",(0,i.jsx)(t.a,{href:"../../contracts/lido",children:(0,i.jsx)(t.code,{children:"Lido"})})," contract and calculate average rewards amount per epoch. The rewards prediction period config fetches from the ",(0,i.jsx)(t.a,{href:"/contracts/oracle-daemon-config",children:"OracleDaemonConfig"})," contract."]}),"\n",(0,i.jsx)(t.p,{children:"To get events in past, addressing the cases where there can be slots with missed block, the next scheme is introduced:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"VEBO 6",src:a(969).A+"",width:"3712",height:"1888"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Get from ",(0,i.jsx)(t.a,{href:"/contracts/oracle-daemon-config",children:"OracleDaemonConfig"})," contract ",(0,i.jsx)(t.code,{children:"PREDICTION_DURATION_IN_SLOTS"})," value"]}),"\n",(0,i.jsxs)(t.li,{children:["Get ",(0,i.jsx)(t.code,{children:"TokenRebased"})," events from Lido"]}),"\n",(0,i.jsxs)(t.li,{children:["Get ",(0,i.jsx)(t.code,{children:"ETHDistributed"})," events from Lido"]}),"\n",(0,i.jsx)(t.li,{children:"Group that events by transaction hash"}),"\n",(0,i.jsxs)(t.li,{children:["Collect from events:","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"total_rewards"})," as ",(0,i.jsx)(t.code,{children:"postCLBalance + withdrawalsWithdrawn - preCLBalance executionLayerRewardsWithdrawn"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"time_spent"})," as sum of each event ",(0,i.jsx)(t.code,{children:"timeElapsed"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["calculate ",(0,i.jsx)(t.code,{children:"rewards_speed_per_epoch"})," as ",(0,i.jsx)(t.code,{children:"max(total_rewards * chain_configs.seconds_per_slot * chain_configs.slots_per_epoch // time_spent, 0)"})]}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"calculate-epochs-to-sweep",children:"Calculate epochs to sweep"}),"\n",(0,i.jsx)(t.h5,{id:"average-sweep-prediction",children:"Average sweep prediction"}),"\n",(0,i.jsxs)(t.p,{children:["Predicts the average epochs of the sweep cycle. In the spec: ",(0,i.jsx)(t.a,{href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/capella/beacon-chain.md#new-get_expected_withdrawals",children:"get expected withdrawals"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/capella/beacon-chain.md#new-process_withdrawals",children:"process withdrawals"})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/lidofinance/lido-oracle/blob/master/src/modules/ejector/ejector.py#L301",children:"source"})}),"\n",(0,i.jsx)(t.h5,{id:"withdrawable-validators",children:"Withdrawable validators"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Check if ",(0,i.jsx)(t.code,{children:"validator"}),' has the 0x01 prefixed "eth1" withdrawal credentials, and']}),"\n",(0,i.jsxs)(t.li,{children:["Check if ",(0,i.jsx)(t.code,{children:"validator"})," is partially withdrawable, or"]}),"\n",(0,i.jsxs)(t.li,{children:["Check if ",(0,i.jsx)(t.code,{children:"validator"})," is fully withdrawable"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/lidofinance/lido-oracle/blob/master/src/modules/ejector/ejector.py#L306",children:"source"})}),"\n",(0,i.jsx)(t.h4,{id:"predict-available-ether-before-next-withdrawn",children:"Predict available ether before next withdrawn"}),"\n",(0,i.jsx)(t.p,{children:"In order to estimate the amount is needed to fully cover the non-finalized withdraw requests, the following values are calculated"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:"Future rewards"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:"Future withdrawals amount"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:"Total available balance"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:"Validators to eject cummulative amount"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:"Going to withdrawn balance"})}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["To calculate ",(0,i.jsx)(t.strong,{children:"future rewards"}),", it's needed to ",(0,i.jsx)(t.a,{href:"https://github.com/lidofinance/lido-oracle/blob/master/src/modules/ejector/ejector.py#L244",children:"predict"})," an epoch when all validators in queue and ",(0,i.jsx)(t.code,{children:"validators_to_eject"})," will be withdrawn:"]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Calculate latest exit epoch number and amount of validators that are exiting in this epoch"}),"\n",(0,i.jsxs)(t.li,{children:["If queue is empty - exit epoch will be calculated as ",(0,i.jsx)(t.code,{children:"current epoch + MAX_SEED_LOOK AHEAD + 1"}),". ",(0,i.jsx)(t.strong,{children:"MAX_SEED_LOOKAHEAD"})," constant needs to mitigate some attacks, more details ",(0,i.jsx)(t.a,{href:"https://eth2book.info/bellatrix/part3/config/preset/#max_seed_lookahead",children:"here"})]}),"\n",(0,i.jsxs)(t.li,{children:["Calculate ",(0,i.jsx)(t.strong,{children:"churn limit"})," - like a rate-limit on changes to the validator set. Minimum is 4 validators per epoch. And recalculates each ",(0,i.jsx)(t.code,{children:"CHURN_LIMIT_QUOTIENT = 2**16"}),". For example when active validators reaches up to 327,680 amount, ",(0,i.jsx)(t.code,{children:"churn limit"})," rises to 5, ",(0,i.jsx)(t.a,{href:"https://github.com/ethereum/consensus-specs/blob/master/specs/phase0/beacon-chain.md#get_validator_churn_limit",children:"spec"})]}),"\n",(0,i.jsx)(t.li,{children:"Calculate slots capacity for exit:"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-!",children:"remain_exits_capacity_for_epoch=churn_limit - (amount of validators that are exiting in this epoch)\n"})}),"\n",(0,i.jsxs)(t.ol,{start:"5",children:["\n",(0,i.jsxs)(t.li,{children:["Calculate epoch to exit all ",(0,i.jsx)(t.code,{children:"validators_to_eject_count"}),":"]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-!",children:"epochs_required_to_exit_validators = (validators_to_eject_count - remain_exits_capacity_for_epoch) // churn_limit + 1\n"})}),"\n",(0,i.jsxs)(t.ol,{start:"6",children:["\n",(0,i.jsx)(t.li,{children:"So the predictable withdrawable epoch:"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-!",children:"withdrawal_epoch=max_exit_epoch_number + epochs_required_to_exit_validators + MIN_VALIDATOR_WITHDRAWABILITY_DELAY)\n"})}),"\n",(0,i.jsxs)(t.p,{children:["MIN_VALIDATOR_WITHDRAWABILITY_DELAY ",(0,i.jsx)(t.a,{href:"https://eth2book.info/altair/part3/config/configuration#min_validator_withdrawability_delay",children:"here"})]}),"\n",(0,i.jsx)(t.p,{children:"So now we can calculate what amount (and validators count) is needed to fully cover amount of non-finalized WithdrawQueue requests."}),"\n",(0,i.jsx)(t.h4,{id:"calculate-expected-balance-to-withdraw",children:"Calculate expected balance to withdraw"}),"\n",(0,i.jsx)(t.h5,{id:"future-rewards",children:"Future rewards"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-!",children:"future_rewards = (withdrawal_epoch + epochs_to_sweep - blockstamp.ref_epoch ) * rewards_speed_per_epoch\n"})}),"\n",(0,i.jsx)(t.h5,{id:"future-withdrawals-amount",children:"Future withdrawals amount"}),"\n",(0,i.jsx)(t.p,{children:"Get total balance from validators which can be fully withdrawn."}),"\n",(0,i.jsx)(t.h5,{id:"total-available-balance",children:"Total available balance"}),"\n",(0,i.jsx)(t.p,{children:"Fetch total balance as sum from:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Lido.getBufferedEther()"})," +"]}),"\n",(0,i.jsxs)(t.li,{children:["Balance from ",(0,i.jsx)(t.code,{children:"elRewardsVault"})," +"]}),"\n",(0,i.jsxs)(t.li,{children:["Balance from ",(0,i.jsx)(t.code,{children:"withdrawalVault"})]}),"\n"]}),"\n",(0,i.jsx)(t.h5,{id:"validators-to-eject-cummulative-amount",children:"Validators to eject cummulative amount"}),"\n",(0,i.jsx)(t.p,{children:"Get balance from next validator in exit queue."}),"\n",(0,i.jsx)(t.h5,{id:"validators-going-to-exit",children:"Validators going to exit"}),"\n",(0,i.jsxs)(t.p,{children:["Fetches recently emitted ",(0,i.jsx)(t.code,{children:"ValidatorExitRequest"})," events from ",(0,i.jsx)(t.code,{children:"ValidatorsExitBusOracle"})," contract and extract pubkeys from them. The delayed timeout config fetches from the ",(0,i.jsx)(t.code,{children:"OracleDaemonConfig"})," contract."]}),"\n",(0,i.jsx)(t.p,{children:"Validators requested to exit, but didn't send exit message.\nIn case:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Activation epoch is not old enough to initiate exit"}),"\n",(0,i.jsx)(t.li,{children:"Node operator had not enough time to send exit message (VALIDATOR_DELAYED_TIMEOUT_IN_SLOTS)"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"To get validators, oracle calculates:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"lido_validators_by_operator"})," - Fetches all used Lido keys from ",(0,i.jsx)(t.a,{href:"https://github.com/lidofinance/lido-keys-api",children:"Keys API"})," + Fetches all validators at the reference slot and merge them with keys"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"ejected_indexes"})," - get operators with last exited validator indexes from for all staking_modules and node operators via ",(0,i.jsx)(t.code,{children:"ValidatorsExitBusOracle.getLastRequestedValidatorIndices(module_id, uint256[] nodeOpIds)"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"recent_pubkeys"})," - get last requested to exit pubkeys from ",(0,i.jsx)(t.code,{children:"ValidatorExitRequest"})," event"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["For each ",(0,i.jsx)(t.code,{children:"lido_validators_by_operator"})," oracle tries to find ",(0,i.jsx)(t.strong,{children:"non exited validators"}),", so:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["if not ",(0,i.jsx)(t.code,{children:"validator_asked_to_exit"})," -> return False"]}),"\n",(0,i.jsxs)(t.li,{children:["if ",(0,i.jsx)(t.code,{children:"is_on_exit"})," -> return false"]}),"\n",(0,i.jsxs)(t.li,{children:["if ",(0,i.jsx)(t.code,{children:"validator_recently_asked_to_exit"})," -> return ",(0,i.jsx)(t.strong,{children:"True"})]}),"\n",(0,i.jsxs)(t.li,{children:["if not ",(0,i.jsx)(t.code,{children:"validator_eligible_to_exit"})," -> return ",(0,i.jsx)(t.strong,{children:"True"})]}),"\n",(0,i.jsx)(t.li,{children:"otherwise return False"}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Oracle calculates ",(0,i.jsx)(t.code,{children:"going_to_withdraw_balance"})," for all ",(0,i.jsx)(t.strong,{children:"non exited validators"})]}),"\n",(0,i.jsx)(t.h5,{id:"compare-expected_balance-vs-to_withdrawn_balance",children:"Compare expected_balance vs to_withdrawn_balance"}),"\n",(0,i.jsx)(t.p,{children:"Expected balance is:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"expected_balance = (\n  future_withdrawals +  # Validators that have withdrawal_epoch\n  future_rewards +  # Rewards we get until last validator in validators_to_eject will be withdrawn\n  total_available_balance +  # Current EL balance (el vault, wc vault, buffered eth)\n  validator_to_eject_balance_sum +  # Validators that we expected to be ejected (requested to exit, not delayed)\n  going_to_withdraw_balance  # validators_to_eject balance\n)\n"})}),"\n",(0,i.jsx)(t.p,{children:"First of all, it's checked without exiting the validator, whether the protocol already has enough available ether to cover withdrawal requests in the queue. If yes, then it's not reasonable to exit validators."}),"\n",(0,i.jsx)(t.p,{children:"If there is not enough, one more validator is considered to be exited and the expected balance gets calculated again. The process continues until the expected balance becomes greater than or equal to the unfinalized withdrawal requests amount."}),"\n",(0,i.jsx)(t.h2,{id:"helpful-links",children:"Helpful links"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/lidofinance/lido-oracle",children:"Lido Oracle source code"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},6710:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/vebo-1-145f4921e5955dba11d50f16f253a99b.png"},7389:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/vebo-2-fa54c7fe656cf66c7e255590ee86ecf0.png"},1236:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/vebo-3-46967b3a524c0a3a468c05b85db3281f.png"},1179:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/vebo-4-35a93314617c2d7a596a0b331b05ebcd.png"},5826:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/vebo-5-3ca953cdab240ac6a58164f07e42efeb.png"},969:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/vebo-6-f4da2f2471dcb76ffd9a05a3abd9c0b5.png"},8453:(e,t,a)=>{a.d(t,{R:()=>s,x:()=>l});var i=a(6540);const r={},n=i.createContext(r);function s(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);