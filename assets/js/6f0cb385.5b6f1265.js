"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1548],{3571:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var r=n(4848),t=n(8453);const i={},o="HashConsensus",d={id:"contracts/hash-consensus",title:"HashConsensus",description:"- Source code",source:"@site/docs/contracts/hash-consensus.md",sourceDirName:"contracts",slug:"/contracts/hash-consensus",permalink:"/lido-docs-spanish/contracts/hash-consensus",draft:!1,unlisted:!1,editUrl:"https://github.com/adminseedlatam/lido-docs-spanish/edit/main/docs/contracts/hash-consensus.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"ValidatorsExitBusOracle",permalink:"/lido-docs-spanish/contracts/validators-exit-bus-oracle"},next:{title:"LegacyOracle",permalink:"/lido-docs-spanish/contracts/legacy-oracle"}},l={},c=[{value:"What is HashConsensus",id:"what-is-hashconsensus",level:2},{value:"Report processor (<code>IReportAsyncProcessor</code>)",id:"report-processor-ireportasyncprocessor",level:2},{value:"Fast-lane members",id:"fast-lane-members",level:2},{value:"View methods",id:"view-methods",level:2},{value:"getChainConfig()",id:"getchainconfig",level:3},{value:"Returns",id:"returns",level:4},{value:"getFrameConfig()",id:"getframeconfig",level:3},{value:"Returns",id:"returns-1",level:4},{value:"getCurrentFrame()",id:"getcurrentframe",level:3},{value:"Returns",id:"returns-2",level:4},{value:"getInitialRefSlot()",id:"getinitialrefslot",level:3},{value:"getIsMember()",id:"getismember",level:3},{value:"getIsFastLaneMember()",id:"getisfastlanemember",level:3},{value:"getMembers()",id:"getmembers",level:3},{value:"getFastLaneMembers()",id:"getfastlanemembers",level:3},{value:"getQuorum()",id:"getquorum",level:3},{value:"getReportProcessor()",id:"getreportprocessor",level:3},{value:"getConsensusState()",id:"getconsensusstate",level:3},{value:"Returns",id:"returns-3",level:4},{value:"getReportVariants()",id:"getreportvariants",level:3},{value:"getConsensusStateForMember()",id:"getconsensusstateformember",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Methods",id:"methods",level:2},{value:"updateInitialEpoch()",id:"updateinitialepoch",level:3},{value:"setFrameConfig()",id:"setframeconfig",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"setFastLaneLengthSlots()",id:"setfastlanelengthslots",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"addMember()",id:"addmember",level:3},{value:"removeMember()",id:"removemember",level:3},{value:"setQuorum()",id:"setquorum",level:3},{value:"disableConsensus()",id:"disableconsensus",level:3},{value:"setReportProcessor()",id:"setreportprocessor",level:3},{value:"submitReport()",id:"submitreport",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Reverts",id:"reverts",level:4},{value:"Events",id:"events",level:2},{value:"FrameConfigSet()",id:"frameconfigset",level:3},{value:"FastLaneConfigSet()",id:"fastlaneconfigset",level:3},{value:"MemberAdded()",id:"memberadded",level:3},{value:"MemberRemoved()",id:"memberremoved",level:3},{value:"QuorumSet()",id:"quorumset",level:3},{value:"ReportReceived()",id:"reportreceived",level:3},{value:"ConsensusReached()",id:"consensusreached",level:3},{value:"ConsensusLost()",id:"consensuslost",level:3},{value:"ReportProcessorSet()",id:"reportprocessorset",level:3}];function a(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"hashconsensus",children:"HashConsensus"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://github.com/lidofinance/lido-dao/blob/master/contracts/0.8.9/oracle/HashConsensus.sol",children:"Source code"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://etherscan.io/address/0xD624B08C83bAECF0807Dd2c6880C3154a5F0B288",children:"Deployed instance for AccountingOracle"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://etherscan.io/address/0x7FaDB6358950c5fAA66Cb5EB8eE5147De3df355a",children:"Deployed instance for ValidatorsExitBusOracle"})}),"\n"]}),"\n",(0,r.jsx)(s.admonition,{type:"info",children:(0,r.jsxs)(s.p,{children:["It's advised to read ",(0,r.jsx)(s.a,{href:"/guides/oracle-operator-manual#intro",children:"What is Lido Oracle mechanism"})," before"]})}),"\n",(0,r.jsx)(s.h2,{id:"what-is-hashconsensus",children:"What is HashConsensus"}),"\n",(0,r.jsx)(s.p,{children:"HashConsensus is a contract responsible for managing oracle members committee and allowing the members to reach consensus on a data hash for each reporting frame."}),"\n",(0,r.jsx)(s.p,{children:"Time is divided in frames of equal length, each having reference slot and processing deadline. Report data must be gathered by looking at the world state (both Ethereum Consensus and Execution Layers) at the moment of the frame\u2019s reference slot (including any state changes made in that slot), and must be processed before the frame\u2019s processing deadline."}),"\n",(0,r.jsx)(s.p,{children:"Frame length is defined in Ethereum Consensus Layer epochs. Reference slot for each frame is set to the last slot of the epoch preceding the frame\u2019s first epoch. The processing deadline is set to the last slot of the last epoch of the frame."}),"\n",(0,r.jsx)(s.p,{children:"Note that all state changes a report processing could entail are guaranteed to be observed while gathering data for the next frame\u2019s report. This is an essential property given that oracle reports sometimes have to contain diffs instead of the entire state, which might be impractical or even impossible to transmit and process."}),"\n",(0,r.jsx)(s.p,{children:"Consensus members rotate within one time into two subsets:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Non-fast-lane members"}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/contracts/hash-consensus#fast-lane-members",children:"Fast-lane members"})}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Once the consensus is gathered, a ",(0,r.jsx)(s.a,{href:"#report-processor-ireportasyncprocessor",children:"Report processor"})," would allow submitting and processing the actual report data.\nThe latter is a part of the ",(0,r.jsx)(s.a,{href:"/lido-docs-spanish/gu%C3%ADas/oracle-operator-manual#oracle-phases",children:"phased Oracle report flow"}),"."]}),"\n",(0,r.jsxs)(s.h2,{id:"report-processor-ireportasyncprocessor",children:["Report processor (",(0,r.jsx)(s.code,{children:"IReportAsyncProcessor"}),")"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"IReportAsyncProcessor"})," defines the interface for a contract that gets consensus reports (i.e. hashes) pushed to and processes them asynchronously.\n",(0,r.jsx)(s.code,{children:"HashConsensus"})," doesn't expect any specific behavior from a report processor, and guarantees the following:"]}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"HashConsensus"})," won't submit reports via ",(0,r.jsx)(s.code,{children:"IReportAsyncProcessor.submitConsensusReport"})," or ask to discard\nreports via ",(0,r.jsx)(s.code,{children:"IReportAsyncProcessor.discardConsensusReport"})," for any slot up to (and including)\nthe slot returned from ",(0,r.jsx)(s.code,{children:"IReportAsyncProcessor.getLastProcessingRefSlot"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"HashConsensus"})," won't accept member reports (and thus won't include such reports in calculating the consensus)\nthat have ",(0,r.jsx)(s.code,{children:"consensusVersion"})," argument of the ",(0,r.jsx)(s.code,{children:"HashConsensus.submitReport"})," call holding a diff.\nvalue than the one returned from ",(0,r.jsx)(s.code,{children:"IReportAsyncProcessor.getConsensusVersion"}),"\nat the moment of the ",(0,r.jsx)(s.code,{children:"HashConsensus.submitReport"})," call."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"There are two core protocol contracts that implements this interface:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"./accounting-oracle",children:"AccountingOracle"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/lido-docs-spanish/contracts/validators-exit-bus-oracle",children:"ValidatorsExitBusOracle"})}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"fast-lane-members",children:"Fast-lane members"}),"\n",(0,r.jsxs)(s.p,{children:['Fast lane members is a subset of all members that changes each reporting frame. These members can, and are expected to, submit a report during the first part of the frame called the "fast lane interval" and defined via ',(0,r.jsx)(s.a,{href:"#setframeconfig",children:"setFrameConfig"})," or ",(0,r.jsx)(s.a,{href:"#setfastlanelengthslots",children:"setFastLaneLengthSlots"}),". The calculation of the Fast-lane members subset depends on ",(0,r.jsx)(s.code,{children:"frameIndex"}),", ",(0,r.jsx)(s.code,{children:"totalMembers"})," and ",(0,r.jsx)(s.code,{children:"quorum"}),". Under regular circumstances, all other members are only allowed to submit a report after the fast lane interval passes. This is done to encourage each oracle from the full set to participate in reporting on a regular basis, and identify any malfunctioning members."]}),"\n",(0,r.jsxs)(s.p,{children:["The fast lane subset consists of quorum members; selection is implemented as a sliding window of the quorum width over member indices (",(0,r.jsx)(s.code,{children:"mod"})," total members). The window advances by one index each reporting frame."]}),"\n",(0,r.jsx)(s.p,{children:"With the fast lane mechanism active, it's sufficient for the monitoring to check that consensus is consistently reached during the fast lane part of each frame to conclude that all members are active and share the same consensus rules."}),"\n",(0,r.jsxs)(s.admonition,{type:"note",children:[(0,r.jsx)(s.p,{children:"There is no guarantee that, at any given time, it holds true that only the current fast lane members can or were able to report during the currently-configured fast lane interval of the current frame."}),(0,r.jsx)(s.p,{children:"In particular, this assumption can be violated in any frame during which the members set, initial epoch, or the quorum number was changed, or the fast lane interval length was increased."}),(0,r.jsx)(s.p,{children:"Therefore, the fast lane mechanism should not be used for any purpose other than monitoring of the members liveness, and monitoring tools should take into consideration the potential irregularities within frames with any configuration changes."})]}),"\n",(0,r.jsx)(s.h2,{id:"view-methods",children:"View methods"}),"\n",(0,r.jsx)(s.h3,{id:"getchainconfig",children:"getChainConfig()"}),"\n",(0,r.jsx)(s.p,{children:"Returns the immutable chain parameters required to calculate epoch and slot given a timestamp."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-solidity",children:"function getChainConfig() external view returns (\n    uint256 slotsPerEpoch,\n    uint256 secondsPerSlot,\n    uint256 genesisTime\n)\n"})}),"\n",(0,r.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Name"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"slotsPerEpoch"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"uint256"})}),(0,r.jsxs)(s.td,{children:["Number of slots per epoch, ",(0,r.jsx)(s.code,{children:"32"})," by default"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"secondsPerSlot"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"uint256"})}),(0,r.jsxs)(s.td,{children:["The time allocated for each slot, ",(0,r.jsx)(s.code,{children:"12"})," by default"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"genesisTime"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"uint256"})}),(0,r.jsxs)(s.td,{children:["Consensus Layer genesis time, ",(0,r.jsx)(s.code,{children:"1606824023"})," on ",(0,r.jsx)(s.a,{href:"https://blog.ethereum.org/2020/11/27/eth2-quick-update-no-21",children:"Mainnet"})]})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"getframeconfig",children:"getFrameConfig()"}),"\n",(0,r.jsx)(s.p,{children:"Returns the time-related configuration."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-solidity",children:"function getFrameConfig() external view returns (\n    uint256 initialEpoch,\n    uint256 epochsPerFrame,\n    uint256 fastLaneLengthSlots\n)\n"})}),"\n",(0,r.jsx)(s.h4,{id:"returns-1",children:"Returns"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Name"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"initialEpoch"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"uint256"})}),(0,r.jsx)(s.td,{children:"Epoch of the frame with zero index"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"epochsPerFrame"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"uint256"})}),(0,r.jsx)(s.td,{children:"Length of a frame in epochs"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"fastLaneLengthSlots"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"uint256"})}),(0,r.jsxs)(s.td,{children:["Length of the fast lane interval in slots; see ",(0,r.jsx)(s.code,{children:"getIsFastLaneMember"})]})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"getcurrentframe",children:"getCurrentFrame()"}),"\n",(0,r.jsx)(s.p,{children:"Returns the current reporting frame."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-solidity",children:"function getCurrentFrame() external view returns (\n    uint256 refSlot,\n    uint256 reportProcessingDeadlineSlot\n)\n"})}),"\n",(0,r.jsx)(s.h4,{id:"returns-2",children:"Returns"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Name"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"refSlot"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"uint256"})}),(0,r.jsx)(s.td,{children:"The frame's reference slot: if the data the consensus is being reached upon includes or depends on any onchain state, this state should be queried at the reference slot. If the slot contains a block, the state should include all changes from that block."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"reportProcessingDeadlineSlot"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"uint256"})}),(0,r.jsx)(s.td,{children:"The last slot at which the report can be processed by the report processor contract."})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"getinitialrefslot",children:"getInitialRefSlot()"}),"\n",(0,r.jsx)(s.p,{children:"Returns the earliest possible reference slot, i.e. the reference slot of the reporting frame with zero index."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-solidity",children:"function getInitialRefSlot() external view returns (uint256)\n"})}),"\n",(0,r.jsx)(s.h3,{id:"getismember",children:"getIsMember()"}),"\n",(0,r.jsx)(s.p,{children:"Returns whether the given address is currently a member of the consensus."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-solidity",children:"function getIsMember(address addr) external view returns (bool)\n"})}),"\n",(0,r.jsx)(s.h3,{id:"getisfastlanemember",children:"getIsFastLaneMember()"}),"\n",(0,r.jsx)(s.p,{children:"Returns whether the given address is a fast lane member for the current reporting frame."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-solidity",children:"function getIsFastLaneMember(address addr) external view returns (bool)\n"})}),"\n",(0,r.jsx)(s.h3,{id:"getmembers",children:"getMembers()"}),"\n",(0,r.jsx)(s.p,{children:"Returns all current members, together with the last reference slot each member submitted a report for."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-solidity",children:"function getMembers() external view returns (\n    address[] memory addresses,\n    uint256[] memory lastReportedRefSlots\n)\n"})}),"\n",(0,r.jsx)(s.h3,{id:"getfastlanemembers",children:"getFastLaneMembers()"}),"\n",(0,r.jsxs)(s.p,{children:["Returns the subset of the oracle committee members (consisting of ",(0,r.jsx)(s.code,{children:"quorum"})," items) that changes each frame."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-solidity",children:"function getFastLaneMembers() external view returns (\n    address[] memory addresses,\n    uint256[] memory lastReportedRefSlots\n)\n"})}),"\n",(0,r.jsx)(s.h3,{id:"getquorum",children:"getQuorum()"}),"\n",(0,r.jsx)(s.p,{children:"Returns quorum number"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-solidity",children:"function getQuorum() external view returns (uint256)\n"})}),"\n",(0,r.jsx)(s.h3,{id:"getreportprocessor",children:"getReportProcessor()"}),"\n",(0,r.jsx)(s.p,{children:"Returns report processor address, i.e oracle address"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-solidity",children:"function getReportProcessor() external view returns (address)\n"})}),"\n",(0,r.jsx)(s.h3,{id:"getconsensusstate",children:"getConsensusState()"}),"\n",(0,r.jsx)(s.p,{children:"Returns info about the current frame and consensus state in that frame."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-solidity",children:"function getConsensusState() external view returns (\n    uint256 refSlot,\n    bytes32 consensusReport,\n    bool isReportProcessing\n)\n"})}),"\n",(0,r.jsx)(s.h4,{id:"returns-3",children:"Returns"}),"\n",(0,r.jsx)(s.p,{children:"Returns info about the current frame and consensus state in that frame."}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Name"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"refSlot"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"uint256"})}),(0,r.jsx)(s.td,{children:"Reference slot of the current reporting frame."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"consensusReport"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"bytes32"})}),(0,r.jsx)(s.td,{children:"Consensus report for the current frame, if any. Zero bytes otherwise."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"isReportProcessing"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"bool"})}),(0,r.jsx)(s.td,{children:"If consensus report for the current frame is already being processed. Consensus can be changed before the processing starts."})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"getreportvariants",children:"getReportVariants()"}),"\n",(0,r.jsx)(s.p,{children:"Returns report variants and their support for the current reference slot."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-solidity",children:"function getReportVariants() external view returns (\n    bytes32[] memory variants,\n    uint256[] memory support\n)\n"})}),"\n",(0,r.jsx)(s.h3,{id:"getconsensusstateformember",children:"getConsensusStateForMember()"}),"\n",(0,r.jsx)(s.p,{children:"Returns the extended information related to an oracle committee member with the\ngiven address and the current consensus state. Provides all the information needed for\nan oracle daemon to decide if it needs to submit a report."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-solidity",children:"function getConsensusStateForMember(address addr) external view returns (MemberConsensusState memory result)\n"})}),"\n",(0,r.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Name"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"addr"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"address"})}),(0,r.jsx)(s.td,{children:"The member address."})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"returns-4",children:"Returns"}),"\n",(0,r.jsxs)(s.p,{children:["Returns a new type ",(0,r.jsx)(s.code,{children:"MemberConsensusState"})]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-solidity",children:"struct MemberConsensusState {\n    /// @notice Current frame's reference slot.\n    uint256 currentFrameRefSlot;\n\n    /// @notice Consensus report for the current frame, if any. Zero bytes otherwise.\n    bytes32 currentFrameConsensusReport;\n\n    /// @notice Whether the provided address is a member of the oracle committee.\n    bool isMember;\n\n    /// @notice Whether the oracle committee member is in the fast lane members subset\n    /// of the current reporting frame. See `getIsFastLaneMember`.\n    bool isFastLane;\n\n    /// @notice Whether the oracle committee member is allowed to submit a report at\n    /// the moment of the call.\n    bool canReport;\n\n    /// @notice The last reference slot for which the member submitted a report.\n    uint256 lastMemberReportRefSlot;\n\n    /// @notice The hash reported by the member for the current frame, if any.\n    /// Zero bytes otherwise.\n    bytes32 currentFrameMemberReport;\n}\n"})}),"\n",(0,r.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(s.h3,{id:"updateinitialepoch",children:"updateInitialEpoch()"}),"\n",(0,r.jsx)(s.p,{children:"Sets a new initial epoch given that the current initial epoch is in the future."}),"\n",(0,r.jsxs)(s.p,{children:["Can only be called by users with ",(0,r.jsx)(s.code,{children:"DEFAULT_ADMIN_ROLE"}),"."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-solidity",children:"function updateInitialEpoch(uint256 initialEpoch) external\n"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Reverts with ",(0,r.jsx)(s.code,{children:"InitialEpochAlreadyArrived()"})," if current epoch more or equal initial epoch from current frame config."]}),"\n",(0,r.jsxs)(s.li,{children:["Reverts with ",(0,r.jsx)(s.code,{children:"InitialEpochRefSlotCannotBeEarlierThanProcessingSlot()"})," if initial frame refSlot less than last processing refSlot."]}),"\n",(0,r.jsxs)(s.li,{children:["Reverts with ",(0,r.jsx)(s.code,{children:"EpochsPerFrameCannotBeZero()"})," if ",(0,r.jsx)(s.code,{children:"epochsPerFrame"})," from frame config is zero."]}),"\n",(0,r.jsxs)(s.li,{children:["Reverts with ",(0,r.jsx)(s.code,{children:"FastLanePeriodCannotBeLongerThanFrame()"})," if ",(0,r.jsx)(s.code,{children:"fastLaneLengthSlots"})," from config more than frame length."]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"setframeconfig",children:"setFrameConfig()"}),"\n",(0,r.jsx)(s.p,{children:"Updates the time-related configuration."}),"\n",(0,r.jsxs)(s.p,{children:["Can only be called by users with ",(0,r.jsx)(s.code,{children:"MANAGE_FRAME_CONFIG_ROLE"}),"."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-solidity",children:"function setFrameConfig(uint256 epochsPerFrame, uint256 fastLaneLengthSlots) external\n"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Reverts with ",(0,r.jsx)(s.code,{children:"EpochsPerFrameCannotBeZero()"})," if ",(0,r.jsx)(s.code,{children:"epochsPerFrame"})," is zero."]}),"\n",(0,r.jsxs)(s.li,{children:["Reverts with ",(0,r.jsx)(s.code,{children:"FastLanePeriodCannotBeLongerThanFrame()"})," if ",(0,r.jsx)(s.code,{children:"fastLaneLengthSlots"})," more than frame length."]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Name"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"epochsPerFrame"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"uint256"})}),(0,r.jsx)(s.td,{children:"ALength of a frame in epochs."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"fastLaneLengthSlots"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"uint256"})}),(0,r.jsxs)(s.td,{children:["Length of the fast lane interval in slots; see ",(0,r.jsx)(s.code,{children:"getIsFastLaneMember"}),"."]})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"setfastlanelengthslots",children:"setFastLaneLengthSlots()"}),"\n",(0,r.jsx)(s.p,{children:"Sets the duration of the fast lane interval of the reporting frame."}),"\n",(0,r.jsxs)(s.p,{children:["Can only be called by users with ",(0,r.jsx)(s.code,{children:"MANAGE_FAST_LANE_CONFIG_ROLE"}),"."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-solidity",children:"function setFastLaneLengthSlots(uint256 fastLaneLengthSlots) external\n"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Reverts with ",(0,r.jsx)(s.code,{children:"FastLanePeriodCannotBeLongerThanFrame()"})," if ",(0,r.jsx)(s.code,{children:"fastLaneLengthSlots"})," more than frame length."]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Name"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"fastLaneLengthSlots"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"uint256"})}),(0,r.jsx)(s.td,{children:"The length of the fast lane reporting interval in slots. Setting it to zero disables the fast lane subset, allowing any oracle to report starting from the first slot of a frame and until the frame's reporting deadline."})]})})]}),"\n",(0,r.jsx)(s.h3,{id:"addmember",children:"addMember()"}),"\n",(0,r.jsx)(s.p,{children:"Add a new member of the consensus."}),"\n",(0,r.jsxs)(s.p,{children:["Can only be called by users with ",(0,r.jsx)(s.code,{children:"DISABLE_CONSENSUS_ROLE"})," role if ",(0,r.jsx)(s.code,{children:"quorum"})," set as UINT256_MAX."]}),"\n",(0,r.jsxs)(s.p,{children:["Can only be called by users with ",(0,r.jsx)(s.code,{children:"MANAGE_MEMBERS_AND_QUORUM_ROLE"})," role if ",(0,r.jsx)(s.code,{children:"quorum"})," not set as UINT256_MAX."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-solidity",children:"function addMember(address addr, uint256 quorum) external\n"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Reverts with ",(0,r.jsx)(s.code,{children:"DuplicateMember()"})," if ",(0,r.jsx)(s.code,{children:"addr"})," address is already the member of consensus."]}),"\n",(0,r.jsxs)(s.li,{children:["Reverts with ",(0,r.jsx)(s.code,{children:"AddressCannotBeZero()"})," if ",(0,r.jsx)(s.code,{children:"addr"})," address is zero."]}),"\n",(0,r.jsxs)(s.li,{children:["Reverts with ",(0,r.jsx)(s.code,{children:"QuorumTooSmall(uint256 minQuorum, uint256 receivedQuorum)"})," if ",(0,r.jsx)(s.code,{children:"quorum"})," less or equal than total members of consensus divided by 2  (",(0,r.jsx)(s.code,{children:"quorum <= total members / 2"}),")"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"removemember",children:"removeMember()"}),"\n",(0,r.jsx)(s.p,{children:"Remove a member from the consensus."}),"\n",(0,r.jsxs)(s.p,{children:["Can only be called by users with ",(0,r.jsx)(s.code,{children:"DISABLE_CONSENSUS_ROLE"})," role if ",(0,r.jsx)(s.code,{children:"quorum"})," set as UINT256_MAX."]}),"\n",(0,r.jsxs)(s.p,{children:["Can only be called by users with ",(0,r.jsx)(s.code,{children:"MANAGE_MEMBERS_AND_QUORUM_ROLE"})," role if ",(0,r.jsx)(s.code,{children:"quorum"})," not set as UINT256_MAX."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-solidity",children:"function removeMember(address addr, uint256 quorum) external\n"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Reverts with ",(0,r.jsx)(s.code,{children:"NonMember()"})," if ",(0,r.jsx)(s.code,{children:"addr"})," address doesn't exists"]}),"\n",(0,r.jsxs)(s.li,{children:["Reverts with ",(0,r.jsx)(s.code,{children:"QuorumTooSmall(uint256 minQuorum, uint256 receivedQuorum)"})," if ",(0,r.jsx)(s.code,{children:"quorum"})," less or equal than total members of consensus divided by 2  (",(0,r.jsx)(s.code,{children:"quorum <= total members / 2"}),")"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"setquorum",children:"setQuorum()"}),"\n",(0,r.jsx)(s.p,{children:"Update consensus quorum"}),"\n",(0,r.jsxs)(s.p,{children:["Can only be called by users with ",(0,r.jsx)(s.code,{children:"DISABLE_CONSENSUS_ROLE"})," role if ",(0,r.jsx)(s.code,{children:"quorum"})," set as UINT256_MAX."]}),"\n",(0,r.jsxs)(s.p,{children:["Can only be called by users with ",(0,r.jsx)(s.code,{children:"MANAGE_MEMBERS_AND_QUORUM_ROLE"})," role if ",(0,r.jsx)(s.code,{children:"quorum"})," not set as UINT256_MAX."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-solidity",children:"function setQuorum(uint256 quorum) external\n"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Reverts with ",(0,r.jsx)(s.code,{children:"QuorumTooSmall(uint256 minQuorum, uint256 receivedQuorum)"})," if ",(0,r.jsx)(s.code,{children:"quorum"})," less or equal than total members of consensus divided by 2  (",(0,r.jsx)(s.code,{children:"quorum <= total members / 2"}),")"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"disableconsensus",children:"disableConsensus()"}),"\n",(0,r.jsxs)(s.p,{children:["Disable consensus quorum, i.e set quorum as ",(0,r.jsx)(s.code,{children:"UINT256_MAX"})," (UNREACHABLE_QUORUM)"]}),"\n",(0,r.jsxs)(s.p,{children:["Can only be called by users with ",(0,r.jsx)(s.code,{children:"DISABLE_CONSENSUS_ROLE"})]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-solidity",children:"function disableConsensus() external\n"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Reverts with ",(0,r.jsx)(s.code,{children:"QuorumTooSmall(uint256 minQuorum, uint256 receivedQuorum)"})," if ",(0,r.jsx)(s.code,{children:"quorum"})," less or equal than total members of consensus divided by 2  (",(0,r.jsx)(s.code,{children:"quorum <= total members / 2"}),")"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"setreportprocessor",children:"setReportProcessor()"}),"\n",(0,r.jsx)(s.p,{children:"Set report processor address, i.e oracle address"}),"\n",(0,r.jsxs)(s.p,{children:["Can only be called by users with ",(0,r.jsx)(s.code,{children:"MANAGE_REPORT_PROCESSOR_ROLE"}),"."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-solidity",children:"function setReportProcessor(address newProcessor) external\n"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Reverts with ",(0,r.jsx)(s.code,{children:"ReportProcessorCannotBeZero()"})," if ",(0,r.jsx)(s.code,{children:"newProcessor"})," address is zero."]}),"\n",(0,r.jsxs)(s.li,{children:["Reverts with ",(0,r.jsx)(s.code,{children:"NewProcessorCannotBeTheSame()"})," if ",(0,r.jsx)(s.code,{children:"newProcessor"})," address is equal to the previous processor address."]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"submitreport",children:"submitReport()"}),"\n",(0,r.jsx)(s.p,{children:"Used by oracle members to submit hash of the data calculated for the given reference slot."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-solidity",children:"function submitReport(uint256 slot, bytes32 report, uint256 consensusVersion) external\n"})}),"\n",(0,r.jsx)(s.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Name"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"slot"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"uint256"})}),(0,r.jsx)(s.td,{children:"The reference slot the data was calculated for. Reverts if doesn't match the current reference slot."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"report"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"bytes32"})}),(0,r.jsx)(s.td,{children:"Hash of the data calculated for the given reference slot."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"consensusVersion"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"uint256"})}),(0,r.jsx)(s.td,{children:"Version of the oracle consensus rules. Reverts if doesn't match the version returned by the currently set consensus report processor, or zero if no report processor is set."})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"reverts",children:"Reverts"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Reverts with ",(0,r.jsx)(s.code,{children:"InvalidSlot()"})," if ",(0,r.jsx)(s.code,{children:"slot"})," is zero."]}),"\n",(0,r.jsxs)(s.li,{children:["Reverts with ",(0,r.jsx)(s.code,{children:"InvalidSlot()"})," if ",(0,r.jsx)(s.code,{children:"slot"})," is not equal current frame refSlot."]}),"\n",(0,r.jsxs)(s.li,{children:["Reverts with ",(0,r.jsx)(s.code,{children:"NumericOverflow()"})," if ",(0,r.jsx)(s.code,{children:"slot"})," is more than ",(0,r.jsx)(s.code,{children:"UINT64_MAX"})]}),"\n",(0,r.jsxs)(s.li,{children:["Reverts with ",(0,r.jsx)(s.code,{children:"EmptyReport()"})," if ",(0,r.jsx)(s.code,{children:"reports"})," is zero hash (",(0,r.jsx)(s.code,{children:"bytes32(0)"}),")"]}),"\n",(0,r.jsxs)(s.li,{children:["Reverts with ",(0,r.jsx)(s.code,{children:"NonMember()"})," if caller address doesn't exists in members array"]}),"\n",(0,r.jsxs)(s.li,{children:["Reverts with ",(0,r.jsx)(s.code,{children:"UnexpectedConsensusVersion(uint256 expected, uint256 received)"})," if ",(0,r.jsx)(s.code,{children:"consensusVersion"})," is not equal report processor consensus version."]}),"\n",(0,r.jsxs)(s.li,{children:["Reverts with ",(0,r.jsx)(s.code,{children:"StaleReport()"})," if the current frame slot is more than the frame report processing deadline slot."]}),"\n",(0,r.jsxs)(s.li,{children:["Reverts with ",(0,r.jsx)(s.code,{children:"NonFastLaneMemberCannotReportWithinFastLaneInterval()"})," if the current frame slot is less or equal frame ref slot plus fastlane length AND the member who submits the report is not fastlane member."]}),"\n",(0,r.jsxs)(s.li,{children:["Reverts with ",(0,r.jsx)(s.code,{children:"ConsensusReportAlreadyProcessing()"})," if the member sends a report for the same slot."]}),"\n",(0,r.jsxs)(s.li,{children:["Reverts with ",(0,r.jsx)(s.code,{children:"DuplicateReport()"})," if the member already sends the report."]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"events",children:"Events"}),"\n",(0,r.jsx)(s.h3,{id:"frameconfigset",children:"FrameConfigSet()"}),"\n",(0,r.jsxs)(s.p,{children:["Emits when a new frame config set via ",(0,r.jsx)(s.a,{href:"#setframeconfig",children:(0,r.jsx)(s.code,{children:"setFrameConfig"})}),"."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-solidity",children:"event FrameConfigSet(uint256 newInitialEpoch, uint256 newEpochsPerFrame)\n"})}),"\n",(0,r.jsx)(s.h3,{id:"fastlaneconfigset",children:"FastLaneConfigSet()"}),"\n",(0,r.jsx)(s.p,{children:"Emits when fast lane length changed (i.e., length defined in slots)."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-solidity",children:"event FastLaneConfigSet(uint256 fastLaneLengthSlots)\n"})}),"\n",(0,r.jsx)(s.h3,{id:"memberadded",children:"MemberAdded()"}),"\n",(0,r.jsx)(s.p,{children:"Emits when a new member of consensus is added."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-solidity",children:"event MemberAdded(address indexed addr, uint256 newTotalMembers, uint256 newQuorum)\n"})}),"\n",(0,r.jsx)(s.h3,{id:"memberremoved",children:"MemberRemoved()"}),"\n",(0,r.jsx)(s.p,{children:"Emits when an existing member of consensus is removed."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-solidity",children:"event MemberRemoved(address indexed addr, uint256 newTotalMembers, uint256 newQuorum)\n"})}),"\n",(0,r.jsx)(s.h3,{id:"quorumset",children:"QuorumSet()"}),"\n",(0,r.jsx)(s.p,{children:"Emits when a quorum of consensus members is changed."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-solidity",children:"event QuorumSet(uint256 newQuorum, uint256 totalMembers, uint256 prevQuorum)\n"})}),"\n",(0,r.jsx)(s.h3,{id:"reportreceived",children:"ReportReceived()"}),"\n",(0,r.jsxs)(s.p,{children:["Emits when a new report received for the provided ",(0,r.jsx)(s.code,{children:"refSlot"})," by ",(0,r.jsx)(s.code,{children:"member"})," containing the ",(0,r.jsx)(s.code,{children:"report"})," hash."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-solidity",children:" event ReportReceived(uint256 indexed refSlot, address indexed member, bytes32 report)\n"})}),"\n",(0,r.jsx)(s.h3,{id:"consensusreached",children:"ConsensusReached()"}),"\n",(0,r.jsxs)(s.p,{children:["Emits when a consensus reached for the provided ",(0,r.jsx)(s.code,{children:"refSlot"})," containing the ",(0,r.jsx)(s.code,{children:"report"})," hash."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-solidity",children:"event ConsensusReached(uint256 indexed refSlot, bytes32 report, uint256 support)\n"})}),"\n",(0,r.jsx)(s.h3,{id:"consensuslost",children:"ConsensusLost()"}),"\n",(0,r.jsxs)(s.p,{children:["Emits when the previously established consensus for the provided ",(0,r.jsx)(s.code,{children:"refSlot"})," is disbanded."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-solidity",children:"event ConsensusLost(uint256 indexed refSlot)\n"})}),"\n",(0,r.jsx)(s.h3,{id:"reportprocessorset",children:"ReportProcessorSet()"}),"\n",(0,r.jsxs)(s.p,{children:["Emits when the report processor is changed from ",(0,r.jsx)(s.code,{children:"prevProcessor"})," to ",(0,r.jsx)(s.code,{children:"processor"}),".\nBoth addresses must comply with the ",(0,r.jsx)(s.code,{children:"IReportAsyncProcessor"})," interface."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-solidity",children:"event ReportProcessorSet(address indexed processor, address indexed prevProcessor)\n"})})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>d});var r=n(6540);const t={},i=r.createContext(t);function o(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);