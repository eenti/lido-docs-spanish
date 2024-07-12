"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9117],{4486:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>a});var d=s(4848),r=s(8453);const l={},t="TRP VestingEscrow",i={id:"contracts/trp-vesting-escrow",title:"TRP VestingEscrow",description:"- Source Code",source:"@site/docs/contracts/trp-vesting-escrow.md",sourceDirName:"contracts",slug:"/contracts/trp-vesting-escrow",permalink:"/lido-docs-spanish/contracts/trp-vesting-escrow",draft:!1,unlisted:!1,editUrl:"https://github.com/adminseedlatam/lido-docs-spanish/edit/main/docs/contracts/trp-vesting-escrow.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"MevBoostRelayAllowedList",permalink:"/lido-docs-spanish/contracts/mev-boost-relays-allowed-list"},next:{title:"GateSeal",permalink:"/lido-docs-spanish/contracts/gate-seal"}},c={},a=[{value:"VestingEscrowFactory",id:"vestingescrowfactory",level:2},{value:"Public variables",id:"public-variables",level:3},{value:"View methods",id:"view-methods",level:3},{value:"target()",id:"target",level:4},{value:"token()",id:"token",level:4},{value:"Methods",id:"methods",level:3},{value:"deploy_vesting_contract()",id:"deploy_vesting_contract",level:4},{value:"Parameters",id:"parameters",level:5},{value:"recover_erc20()",id:"recover_erc20",level:4},{value:"Parameters",id:"parameters-1",level:5},{value:"recover_ether()",id:"recover_ether",level:4},{value:"update_voting_adapter()",id:"update_voting_adapter",level:4},{value:"Parameters",id:"parameters-2",level:5},{value:"change_owner()",id:"change_owner",level:4},{value:"Parameters",id:"parameters-3",level:5},{value:"change_manager()",id:"change_manager",level:4},{value:"Parameters",id:"parameters-4",level:5},{value:"VestingEscrow",id:"vestingescrow",level:2},{value:"Public variables",id:"public-variables-1",level:3},{value:"View methods",id:"view-methods-1",level:3},{value:"unclaimed()",id:"unclaimed",level:4},{value:"locked()",id:"locked",level:4},{value:"Methods",id:"methods-1",level:3},{value:"claim()",id:"claim",level:4},{value:"Parameters",id:"parameters-5",level:5},{value:"revoke_unvested()",id:"revoke_unvested",level:4},{value:"revoke_all()",id:"revoke_all",level:4},{value:"recover_erc20()",id:"recover_erc20-1",level:4},{value:"Parameters",id:"parameters-6",level:5},{value:"recover_ether()",id:"recover_ether-1",level:4},{value:"aragon_vote()",id:"aragon_vote",level:4},{value:"Parameters",id:"parameters-7",level:5},{value:"snapshot_set_delegate()",id:"snapshot_set_delegate",level:4},{value:"Parameters",id:"parameters-8",level:5},{value:"delegate()",id:"delegate",level:4},{value:"Parameters",id:"parameters-9",level:5},{value:"VotingAdapter",id:"votingadapter",level:2},{value:"Public variables",id:"public-variables-2",level:3},{value:"View methods",id:"view-methods-2",level:3},{value:"encode_aragon_vote_calldata()",id:"encode_aragon_vote_calldata",level:4},{value:"Parameters",id:"parameters-10",level:5},{value:"encode_snapshot_set_delegate_calldata()",id:"encode_snapshot_set_delegate_calldata",level:4},{value:"Parameters",id:"parameters-11",level:5},{value:"encode_delegate_calldata()",id:"encode_delegate_calldata",level:4},{value:"Parameters",id:"parameters-12",level:5},{value:"Methods",id:"methods-2",level:3},{value:"aragon_vote()",id:"aragon_vote-1",level:4},{value:"Parameters",id:"parameters-13",level:5},{value:"snapshot_set_delegate()",id:"snapshot_set_delegate-1",level:4},{value:"Parameters",id:"parameters-14",level:5},{value:"delegate()",id:"delegate-1",level:4},{value:"Parameters",id:"parameters-15",level:5},{value:"recover_erc20()",id:"recover_erc20-2",level:4},{value:"Parameters",id:"parameters-16",level:5},{value:"recover_ether()",id:"recover_ether-2",level:4},{value:"change_owner()",id:"change_owner-1",level:4},{value:"Parameters",id:"parameters-17",level:5}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"trp-vestingescrow",children:"TRP VestingEscrow"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"https://github.com/lidofinance/lido-vesting-escrow/tree/main/contracts",children:"Source Code"})}),"\n",(0,d.jsxs)(n.li,{children:["Deployed Contracts (mainnet)","\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"https://etherscan.io/address/0xDA1DF6442aFD2EC36aBEa91029794B9b2156ADD0",children:"VestingEscrowFactory"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"https://etherscan.io/address/0x484FD04c598A095360DF89bF85AB34c37127AA39",children:"VestingEscrowProto"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"https://etherscan.io/address/0xCFda8aB0AE5F4Fa33506F9C51650B890E4871Cc1",children:"VotingAdapter"})}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"https://hackmd.io/@lido/rkKpFX8So",children:"Detailed contracts spec"})}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"https://research.lido.fi/t/lidodao-token-rewards-plan-trp/3364",children:"Token Reward Program (TRP)"})," escrow contracts allow transparent on-chain distribution and vesting of the token rewards for the Lido DAO contributors."]}),"\n",(0,d.jsx)(n.h2,{id:"vestingescrowfactory",children:"VestingEscrowFactory"}),"\n",(0,d.jsx)(n.h3,{id:"public-variables",children:"Public variables"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"voting_adapter: address"})," - address of the VotingAdapter used in the vestings"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"owner: address"})," - factory and vestings owner"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"manager: address"})," - vestings manager"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"view-methods",children:"View methods"}),"\n",(0,d.jsx)(n.h4,{id:"target",children:"target()"}),"\n",(0,d.jsxs)(n.p,{children:["Returns immutable ",(0,d.jsx)(n.code,{children:"TARGET"})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-vyper",children:"@external\n@view\ndef target() -> uint256\n"})}),"\n",(0,d.jsx)(n.h4,{id:"token",children:"token()"}),"\n",(0,d.jsxs)(n.p,{children:["Returns immutable ",(0,d.jsx)(n.code,{children:"TOKEN"})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-vyper",children:"@external\n@view\ndef token() -> uint256\n"})}),"\n",(0,d.jsx)(n.h3,{id:"methods",children:"Methods"}),"\n",(0,d.jsx)(n.h4,{id:"deploy_vesting_contract",children:"deploy_vesting_contract()"}),"\n",(0,d.jsx)(n.admonition,{type:"note",children:(0,d.jsxs)(n.p,{children:["Before calling ",(0,d.jsx)(n.code,{children:"deploy_vesting_contract()"})," caller need to have enough tokens on the balance and call ",(0,d.jsx)(n.code,{children:"approve(vestingFactoryAddress, fundAmount)"})," on the token contract"]})}),"\n",(0,d.jsxs)(n.p,{children:["Deploy and fund a new instance of the ",(0,d.jsx)(n.code,{children:"VestingEscrow"})," for the given ",(0,d.jsx)(n.code,{children:"recipient"}),". Set all params for the deployed escrow.\nReturns address of the deployed escrow"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-vyper",children:"@external\ndef deploy_vesting_contract(\n    amount: uint256,\n    recipient: address,\n    vesting_duration: uint256,\n    vesting_start: uint256 = block.timestamp,\n    cliff_length: uint256 = 0,\n    is_fully_revokable: bool = False\n) -> address\n"})}),"\n",(0,d.jsx)(n.h5,{id:"parameters",children:"Parameters"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Name"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"amount"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"uint256"})}),(0,d.jsx)(n.td,{children:"Amount of the tokens to be controlled by vesting"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"recipient"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"address"})}),(0,d.jsx)(n.td,{children:"Recipient of the vested funds"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"vesting_duration"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"uint256"})}),(0,d.jsx)(n.td,{children:"Vesting duration in seconds"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"vesting_start"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"uint256"})}),(0,d.jsx)(n.td,{children:"Vesting start time in seconds (unix time in sec)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"cliff_length"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"uint256"})}),(0,d.jsx)(n.td,{children:"Cliff duration in seconds"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"is_fully_revokable"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"bool"})}),(0,d.jsxs)(n.td,{children:["Flag that enables ",(0,d.jsx)(n.code,{children:"revoke_all"})," method"]})]})]})]}),"\n",(0,d.jsxs)(n.admonition,{type:"note",children:[(0,d.jsx)(n.p,{children:"Reverts if any of the following is true:"}),(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"vesting_duration <= 0"}),"."]}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"cliff_length >= vesting_duration"})}),"\n",(0,d.jsx)(n.li,{children:"token transfer from caller to factory fails"}),"\n",(0,d.jsx)(n.li,{children:"approve of the tokens to the actual vesting fails"}),"\n"]})]}),"\n",(0,d.jsx)(n.h4,{id:"recover_erc20",children:"recover_erc20()"}),"\n",(0,d.jsxs)(n.p,{children:["Collect ERC20 tokens from the contract to the ",(0,d.jsx)(n.code,{children:"owner"}),"."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-vyper",children:"@external\ndef recover_erc20(\n    token: address,\n    amount: uint256\n)\n"})}),"\n",(0,d.jsx)(n.h5,{id:"parameters-1",children:"Parameters"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Name"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"token"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"address"})}),(0,d.jsx)(n.td,{children:"Address of ERC20 token to recover"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"amount"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"uint256"})}),(0,d.jsx)(n.td,{children:"Amount of the tokens to recover"})]})]})]}),"\n",(0,d.jsxs)(n.admonition,{type:"note",children:[(0,d.jsx)(n.p,{children:"Reverts if:"}),(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["tokens transfer to ",(0,d.jsx)(n.code,{children:"owner"})," fails"]}),"\n"]})]}),"\n",(0,d.jsx)(n.h4,{id:"recover_ether",children:"recover_ether()"}),"\n",(0,d.jsxs)(n.p,{children:["Collect all ether from the contract to the ",(0,d.jsx)(n.code,{children:"owner"}),"."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-vyper",children:"@external\ndef recover_ether()\n"})}),"\n",(0,d.jsxs)(n.admonition,{type:"note",children:[(0,d.jsx)(n.p,{children:"Reverts if:"}),(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Ether transfer to ",(0,d.jsx)(n.code,{children:"owner"})," fails"]}),"\n"]})]}),"\n",(0,d.jsx)(n.h4,{id:"update_voting_adapter",children:"update_voting_adapter()"}),"\n",(0,d.jsxs)(n.p,{children:["Set ",(0,d.jsx)(n.code,{children:"self.voting_adapter"})," to ",(0,d.jsx)(n.code,{children:"voting_adapter"}),"."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-vyper",children:"@external\ndef update_voting_adapter(\n    voting_adapter: address\n)\n"})}),"\n",(0,d.jsx)(n.h5,{id:"parameters-2",children:"Parameters"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Name"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"voting_adapter"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"address"})}),(0,d.jsx)(n.td,{children:"New voting adapter"})]})})]}),"\n",(0,d.jsxs)(n.admonition,{type:"note",children:[(0,d.jsx)(n.p,{children:"Reverts if:"}),(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["called by anyone except ",(0,d.jsx)(n.code,{children:"VestingEscrowFactory"})," owner"]}),"\n"]})]}),"\n",(0,d.jsx)(n.h4,{id:"change_owner",children:"change_owner()"}),"\n",(0,d.jsxs)(n.p,{children:["Set ",(0,d.jsx)(n.code,{children:"self.owner"})," to ",(0,d.jsx)(n.code,{children:"owner"}),"."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-vyper",children:"@external\ndef change_owner(\n    owner: address\n)\n"})}),"\n",(0,d.jsx)(n.h5,{id:"parameters-3",children:"Parameters"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Name"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"owner"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"address"})}),(0,d.jsxs)(n.td,{children:["New ",(0,d.jsx)(n.code,{children:"owner"})," address"]})]})})]}),"\n",(0,d.jsxs)(n.admonition,{type:"note",children:[(0,d.jsx)(n.p,{children:"Reverts if:"}),(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["called by anyone except ",(0,d.jsx)(n.code,{children:"VestingEscrowFactory"})," owner"]}),"\n",(0,d.jsxs)(n.li,{children:["arg ",(0,d.jsx)(n.code,{children:"owner"})," is empty address"]}),"\n"]})]}),"\n",(0,d.jsx)(n.h4,{id:"change_manager",children:"change_manager()"}),"\n",(0,d.jsxs)(n.p,{children:["Set ",(0,d.jsx)(n.code,{children:"self.manager"})," to ",(0,d.jsx)(n.code,{children:"manager"}),"."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-vyper",children:"@external\ndef change_manager(\n    manager: address\n)\n"})}),"\n",(0,d.jsx)(n.h5,{id:"parameters-4",children:"Parameters"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Name"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"manager"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"address"})}),(0,d.jsxs)(n.td,{children:["New ",(0,d.jsx)(n.code,{children:"manager"})," address"]})]})})]}),"\n",(0,d.jsxs)(n.admonition,{type:"note",children:[(0,d.jsx)(n.p,{children:"Reverts if:"}),(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["called by anyone except ",(0,d.jsx)(n.code,{children:"VestingEscrowFactory"})," owner"]}),"\n"]})]}),"\n",(0,d.jsx)(n.h2,{id:"vestingescrow",children:"VestingEscrow"}),"\n",(0,d.jsx)(n.h3,{id:"public-variables-1",children:"Public variables"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"recipient: address"})," - address that can claim tokens from escrow"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"token: ERC20"})," - address of the vested token"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"start_time: uint256"})," - vesting start time (UTC time in UNIX seconds)"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"end_time: uint256"})," - vesting end time (UTC time in UNIX seconds)"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"cliff_length: uint256"})," - cliff length in seconds"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"factory: IVestingEscrowFactory"})," - address of the parent factory"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"total_locked: uint256"})," - total amount of the tokens to be vested (does not change after claims)"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"is_fully_revokable: bool"})," - flag showing if the escrow is fully revocable or not"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"total_claimed: uint256"})," - total amount of the claimed tokens"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"disabled_at: uint256"})," - effective vesting end time (UTC time in UNIX seconds). Can differ from end_time in case of the revoke_xxx methods call"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"initialized: bool"})," - flag indicating that escrow was initialized"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"is_fully_revoked: bool"})," - flag indicating that escrow was fully revoked and there are no more tokens"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"view-methods-1",children:"View methods"}),"\n",(0,d.jsx)(n.h4,{id:"unclaimed",children:"unclaimed()"}),"\n",(0,d.jsx)(n.p,{children:"Returns the current amount of the tokens available for the claim."}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-vyper",children:"@external\n@view\ndef unclaimed() -> uint256\n"})}),"\n",(0,d.jsx)(n.h4,{id:"locked",children:"locked()"}),"\n",(0,d.jsx)(n.p,{children:"Returns the current amount of the tokens locked."}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-vyper",children:"@external\n@view\ndef locked() -> uint256\n"})}),"\n",(0,d.jsx)(n.h3,{id:"methods-1",children:"Methods"}),"\n",(0,d.jsx)(n.h4,{id:"claim",children:"claim()"}),"\n",(0,d.jsxs)(n.p,{children:["Claim tokens to the ",(0,d.jsx)(n.code,{children:"beneficiary"})," address. If the requested amount is larger than ",(0,d.jsx)(n.code,{children:"unclaimed"}),", then the ",(0,d.jsx)(n.code,{children:"unclaimed"})," amount will be claimed."]}),"\n",(0,d.jsx)(n.p,{children:"Returns actual amount of the tokens claimed."}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-vyper",children:"@external\ndef claim(\n    beneficiary: address = msg.sender,\n    amount: uint256 = max_value(uint256)\n)\n"})}),"\n",(0,d.jsx)(n.h5,{id:"parameters-5",children:"Parameters"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Name"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"beneficiary"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"address"})}),(0,d.jsx)(n.td,{children:"Address to claim tokens to"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"amount"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"uint256"})}),(0,d.jsx)(n.td,{children:"Amount of the tokens to claim"})]})]})]}),"\n",(0,d.jsxs)(n.admonition,{type:"note",children:[(0,d.jsx)(n.p,{children:"Reverts if:"}),(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["called by anyone except vesting ",(0,d.jsx)(n.code,{children:"recipient"})]}),"\n",(0,d.jsxs)(n.li,{children:["tokens transfer to ",(0,d.jsx)(n.code,{children:"beneficiary"})," fails"]}),"\n"]})]}),"\n",(0,d.jsx)(n.h4,{id:"revoke_unvested",children:"revoke_unvested()"}),"\n",(0,d.jsx)(n.p,{children:"Disable further flow of tokens and revoke the unvested part to the owner."}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-vyper",children:"@external\ndef revoke_unvested()\n"})}),"\n",(0,d.jsxs)(n.admonition,{type:"note",children:[(0,d.jsx)(n.p,{children:"Reverts if:"}),(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["called by anyone except ",(0,d.jsx)(n.code,{children:"VestingEscrowFactory"})," owner or manager"]}),"\n",(0,d.jsxs)(n.li,{children:["tokens transfer to ",(0,d.jsx)(n.code,{children:"VestingEscrowFactory.owner()"})," fails"]}),"\n"]})]}),"\n",(0,d.jsx)(n.h4,{id:"revoke_all",children:"revoke_all()"}),"\n",(0,d.jsx)(n.p,{children:"Disable further flow of tokens and revoke all tokens to the owner."}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-vyper",children:"@external\ndef revoke_all()\n"})}),"\n",(0,d.jsxs)(n.admonition,{type:"note",children:[(0,d.jsx)(n.p,{children:"Reverts if:"}),(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"is_fully_revocable"})," param of the ",(0,d.jsx)(n.code,{children:"VestingEscrow"})," is not True"]}),"\n",(0,d.jsxs)(n.li,{children:["called by anyone except ",(0,d.jsx)(n.code,{children:"VestingEscrowFactory"})," owner"]}),"\n",(0,d.jsxs)(n.li,{children:["tokens transfer to ",(0,d.jsx)(n.code,{children:"VestingEscrowFactory.owner"})," fails"]}),"\n"]})]}),"\n",(0,d.jsx)(n.h4,{id:"recover_erc20-1",children:"recover_erc20()"}),"\n",(0,d.jsxs)(n.p,{children:["Collect ERC20 tokens from the contract to the ",(0,d.jsx)(n.code,{children:"recipient"}),"."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-vyper",children:"@external\ndef recover_erc20(\n    token: address,\n    amount: uint256\n)\n"})}),"\n",(0,d.jsx)(n.h5,{id:"parameters-6",children:"Parameters"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Name"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"token"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"address"})}),(0,d.jsx)(n.td,{children:"Address of ERC20 token to recover"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"amount"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"uint256"})}),(0,d.jsx)(n.td,{children:"Amount of the tokens to recover"})]})]})]}),"\n",(0,d.jsxs)(n.admonition,{type:"note",children:[(0,d.jsx)(n.p,{children:"Reverts if:"}),(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["tokens transfer to ",(0,d.jsx)(n.code,{children:"recipient"})," fails"]}),"\n"]})]}),"\n",(0,d.jsx)(n.h4,{id:"recover_ether-1",children:"recover_ether()"}),"\n",(0,d.jsxs)(n.p,{children:["Collect all ether from the contract to the ",(0,d.jsx)(n.code,{children:"recipient"}),"."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-vyper",children:"@external\ndef recover_ether()\n"})}),"\n",(0,d.jsxs)(n.admonition,{type:"note",children:[(0,d.jsx)(n.p,{children:"Reverts if:"}),(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Ether transfer to ",(0,d.jsx)(n.code,{children:"recipient"})," fails"]}),"\n"]})]}),"\n",(0,d.jsx)(n.h4,{id:"aragon_vote",children:"aragon_vote()"}),"\n",(0,d.jsxs)(n.p,{children:["Participate in the Aragon vote using all available tokens on the contract's balance. Uses ",(0,d.jsx)(n.code,{children:"delegateCall"})," to ",(0,d.jsx)(n.code,{children:"VotingAdapter"}),". ",(0,d.jsx)(n.code,{children:"VotingAdapter"})," address is fetched from ",(0,d.jsx)(n.code,{children:"self.factory"}),"."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-vyper",children:"@external\ndef aragon_vote(\n    abi_encoded_params: Bytes[1000]\n)\n"})}),"\n",(0,d.jsx)(n.h5,{id:"parameters-7",children:"Parameters"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Name"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"abi_encoded_params"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Bytes[1000]"})}),(0,d.jsxs)(n.td,{children:["ABI encoded params for the ",(0,d.jsx)(n.code,{children:"vote"})," method call. can be compiled using ",(0,d.jsx)(n.code,{children:"VotingAdapter.encode_aragon_vote_calldata"})]})]})})]}),"\n",(0,d.jsxs)(n.admonition,{type:"note",children:[(0,d.jsx)(n.p,{children:"Reverts if:"}),(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["called by anyone except vesting ",(0,d.jsx)(n.code,{children:"recipient"})]}),"\n"]})]}),"\n",(0,d.jsx)(n.h4,{id:"snapshot_set_delegate",children:"snapshot_set_delegate()"}),"\n",(0,d.jsxs)(n.p,{children:["Delegate Snapshot voting power of all available tokens on the contract's balance to ",(0,d.jsx)(n.code,{children:"delegate"}),". Uses ",(0,d.jsx)(n.code,{children:"delegateCall"})," to ",(0,d.jsx)(n.code,{children:"VotingAdapter"}),". ",(0,d.jsx)(n.code,{children:"VotingAdapter"})," address is fetched from ",(0,d.jsx)(n.code,{children:"self.factory"}),"."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-vyper",children:"@external\ndef snapshot_set_delegate(\n    abi_encoded_params: Bytes[1000]\n)\n"})}),"\n",(0,d.jsx)(n.h5,{id:"parameters-8",children:"Parameters"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Name"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"abi_encoded_params"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Bytes[1000]"})}),(0,d.jsxs)(n.td,{children:["ABI encoded params for the ",(0,d.jsx)(n.code,{children:"delegate"})," method call. can be compiled using ",(0,d.jsx)(n.code,{children:"VotingAdapter.encode_snapshot_set_delegate_calldata"})]})]})})]}),"\n",(0,d.jsxs)(n.admonition,{type:"note",children:[(0,d.jsx)(n.p,{children:"Reverts if:"}),(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["called by anyone except vesting ",(0,d.jsx)(n.code,{children:"recipient"})]}),"\n"]})]}),"\n",(0,d.jsx)(n.h4,{id:"delegate",children:"delegate()"}),"\n",(0,d.jsx)(n.admonition,{type:"note",children:(0,d.jsx)(n.p,{children:"Stub at the moment of writing"})}),"\n",(0,d.jsxs)(n.p,{children:["Delegate voting power of all available tokens on the contract's balance to ",(0,d.jsx)(n.code,{children:"delegate"}),". Uses ",(0,d.jsx)(n.code,{children:"delegateCall"})," to VotingAdapter. ",(0,d.jsx)(n.code,{children:"VotingAdapter"})," address is fetched from ",(0,d.jsx)(n.code,{children:"self.factory"}),"."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-vyper",children:"@external\ndef delegate(\n    abi_encoded_params: Bytes[1000]\n)\n"})}),"\n",(0,d.jsx)(n.h5,{id:"parameters-9",children:"Parameters"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Name"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"abi_encoded_params"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Bytes[1000]"})}),(0,d.jsxs)(n.td,{children:["ABI encoded params for the ",(0,d.jsx)(n.code,{children:"vote"})," method call. can be compiled using ",(0,d.jsx)(n.code,{children:"VotingAdapter.encode_delegate_calldata"})]})]})})]}),"\n",(0,d.jsxs)(n.admonition,{type:"note",children:[(0,d.jsx)(n.p,{children:"Reverts if:"}),(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["called by anyone except vesting ",(0,d.jsx)(n.code,{children:"recipient"})]}),"\n"]})]}),"\n",(0,d.jsx)(n.h2,{id:"votingadapter",children:"VotingAdapter"}),"\n",(0,d.jsx)(n.h3,{id:"public-variables-2",children:"Public variables"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"owner: address"})," - votingAdapter owner"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"view-methods-2",children:"View methods"}),"\n",(0,d.jsx)(n.h4,{id:"encode_aragon_vote_calldata",children:"encode_aragon_vote_calldata()"}),"\n",(0,d.jsxs)(n.p,{children:["Returns abi encoded params for the ",(0,d.jsx)(n.code,{children:"aragon_vote"})," call."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-vyper",children:"@external\n@view\ndef encode_aragon_vote_calldata(\n    voteId: uint256,\n    supports: bool\n) -> Bytes[1000]\n"})}),"\n",(0,d.jsx)(n.h5,{id:"parameters-10",children:"Parameters"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Name"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"voteId"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"uint256"})}),(0,d.jsx)(n.td,{children:"Aragon vote id"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"amount"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"bool"})}),(0,d.jsxs)(n.td,{children:["Supports flag. ",(0,d.jsx)(n.code,{children:"True"})," - for, ",(0,d.jsx)(n.code,{children:"False"})," - against"]})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"encode_snapshot_set_delegate_calldata",children:"encode_snapshot_set_delegate_calldata()"}),"\n",(0,d.jsxs)(n.p,{children:["Returns abi encoded params for the ",(0,d.jsx)(n.code,{children:"snapshot_set_delegate"})," call."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-vyper",children:"@external\n@view\ndef encode_snapshot_set_delegate_calldata(\n    delegate: address\n) -> Bytes[1000]\n"})}),"\n",(0,d.jsx)(n.h5,{id:"parameters-11",children:"Parameters"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Name"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"delegate"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"address"})}),(0,d.jsx)(n.td,{children:"Address to delegate snapshot voting power to"})]})})]}),"\n",(0,d.jsx)(n.h4,{id:"encode_delegate_calldata",children:"encode_delegate_calldata()"}),"\n",(0,d.jsxs)(n.p,{children:["Returns abi encoded params for the ",(0,d.jsx)(n.code,{children:"delegate"})," call."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-vyper",children:"@external\n@view\ndef encode_delegate_calldata(\n    delegate: address\n) -> Bytes[1000]\n"})}),"\n",(0,d.jsx)(n.h5,{id:"parameters-12",children:"Parameters"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Name"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"delegate"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"address"})}),(0,d.jsx)(n.td,{children:"Address to delegate voting power to"})]})})]}),"\n",(0,d.jsx)(n.h3,{id:"methods-2",children:"Methods"}),"\n",(0,d.jsx)(n.h4,{id:"aragon_vote-1",children:"aragon_vote()"}),"\n",(0,d.jsxs)(n.p,{children:["Participate in the Aragon vote using all available tokens on the contract's balance. It makes sense only for delegateCalls, so the caller's balance will be used. Uses ",(0,d.jsx)(n.code,{children:"VOTING_CONTRACT_ADDR"})," as the voting contract address."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-vyper",children:"@external\ndef aragon_vote(\n    abi_encoded_params: Bytes[1000]\n)\n"})}),"\n",(0,d.jsx)(n.h5,{id:"parameters-13",children:"Parameters"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Name"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"abi_encoded_params"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Bytes[1000]"})}),(0,d.jsxs)(n.td,{children:["ABI encoded params for the ",(0,d.jsx)(n.code,{children:"vote"})," method call. can be compiled using ",(0,d.jsx)(n.code,{children:"VotingAdapter.encode_aragon_vote_calldata"})]})]})})]}),"\n",(0,d.jsxs)(n.admonition,{type:"note",children:[(0,d.jsx)(n.p,{children:"Reverts if:"}),(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["called by anyone except vesting ",(0,d.jsx)(n.code,{children:"recipient"})]}),"\n"]})]}),"\n",(0,d.jsx)(n.h4,{id:"snapshot_set_delegate-1",children:"snapshot_set_delegate()"}),"\n",(0,d.jsxs)(n.p,{children:["Delegate Snapshot voting power of all available tokens. Makes sense only for delegateCalls so that the balance of the caller will be used. Uses ",(0,d.jsx)(n.code,{children:"SNAPSHOT_DELEGATE_CONTRACT_ADDR"})," as the voting contract address."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-vyper",children:"@external\ndef snapshot_set_delegate(\n    abi_encoded_params: Bytes[1000]\n)\n"})}),"\n",(0,d.jsx)(n.h5,{id:"parameters-14",children:"Parameters"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Name"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"abi_encoded_params"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Bytes[1000]"})}),(0,d.jsxs)(n.td,{children:["ABI encoded params for the ",(0,d.jsx)(n.code,{children:"delegate"})," method call. can be compiled using ",(0,d.jsx)(n.code,{children:"VotingAdapter.encode_snapshot_set_delegate_calldata"})]})]})})]}),"\n",(0,d.jsxs)(n.admonition,{type:"note",children:[(0,d.jsx)(n.p,{children:"Reverts if:"}),(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["called by anyone except vesting ",(0,d.jsx)(n.code,{children:"recipient"})]}),"\n"]})]}),"\n",(0,d.jsx)(n.h4,{id:"delegate-1",children:"delegate()"}),"\n",(0,d.jsx)(n.admonition,{type:"note",children:(0,d.jsx)(n.p,{children:"Stub at the moment of writing"})}),"\n",(0,d.jsx)(n.p,{children:"Stub for the future implementation of the Voting with Delegation."}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-vyper",children:"@external\ndef delegate(\n    abi_encoded_params: Bytes[1000]\n)\n"})}),"\n",(0,d.jsx)(n.h5,{id:"parameters-15",children:"Parameters"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Name"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"abi_encoded_params"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Bytes[1000]"})}),(0,d.jsxs)(n.td,{children:["ABI encoded params for the ",(0,d.jsx)(n.code,{children:"vote"})," method call. can be compiled using ",(0,d.jsx)(n.code,{children:"VotingAdapter.encode_delegate_calldata"})]})]})})]}),"\n",(0,d.jsx)(n.admonition,{type:"note",children:(0,d.jsx)(n.p,{children:"Always reverts"})}),"\n",(0,d.jsx)(n.h4,{id:"recover_erc20-2",children:"recover_erc20()"}),"\n",(0,d.jsxs)(n.p,{children:["Collect ERC20 tokens from the contract to the ",(0,d.jsx)(n.code,{children:"owner"}),"."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-vyper",children:"@external\ndef recover_erc20(\n    token: address,\n    amount: uint256\n)\n"})}),"\n",(0,d.jsx)(n.h5,{id:"parameters-16",children:"Parameters"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Name"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"token"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"address"})}),(0,d.jsx)(n.td,{children:"Address of ERC20 token to recover"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"amount"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"uint256"})}),(0,d.jsx)(n.td,{children:"Amount of the tokens to recover"})]})]})]}),"\n",(0,d.jsxs)(n.admonition,{type:"note",children:[(0,d.jsx)(n.p,{children:"Reverts if:"}),(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["tokens transfer to ",(0,d.jsx)(n.code,{children:"owner"})," fails"]}),"\n"]})]}),"\n",(0,d.jsx)(n.h4,{id:"recover_ether-2",children:"recover_ether()"}),"\n",(0,d.jsxs)(n.p,{children:["Collect all ether from the contract to the ",(0,d.jsx)(n.code,{children:"owner"}),"."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-vyper",children:"@external\ndef recover_ether()\n"})}),"\n",(0,d.jsxs)(n.admonition,{type:"note",children:[(0,d.jsx)(n.p,{children:"Reverts if:"}),(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Ether transfer to ",(0,d.jsx)(n.code,{children:"owner"})," fails"]}),"\n"]})]}),"\n",(0,d.jsx)(n.h4,{id:"change_owner-1",children:"change_owner()"}),"\n",(0,d.jsxs)(n.p,{children:["Set ",(0,d.jsx)(n.code,{children:"self.owner"})," to ",(0,d.jsx)(n.code,{children:"owner"})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-vyper",children:"@external\ndef change_owner(\n    owner: address\n)\n"})}),"\n",(0,d.jsx)(n.h5,{id:"parameters-17",children:"Parameters"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Name"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"owner"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"address"})}),(0,d.jsxs)(n.td,{children:["New ",(0,d.jsx)(n.code,{children:"owner"})," address"]})]})})]}),"\n",(0,d.jsxs)(n.admonition,{type:"note",children:[(0,d.jsx)(n.p,{children:"Reverts if:"}),(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["called by anyone except ",(0,d.jsx)(n.code,{children:"VotingAdapter"})," owner"]}),"\n",(0,d.jsxs)(n.li,{children:["arg ",(0,d.jsx)(n.code,{children:"owner"})," is empty address"]}),"\n"]})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>i});var d=s(6540);const r={},l=d.createContext(r);function t(e){const n=d.useContext(l);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),d.createElement(l.Provider,{value:n},e.children)}}}]);