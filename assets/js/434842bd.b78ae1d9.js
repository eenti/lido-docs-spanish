"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5024],{9304:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var s=n(4848),i=n(8453);const a={},r="Penalties",o={id:"staking-modules/csm/penalties",title:"Penalties",description:"Reasons",source:"@site/docs/staking-modules/csm/penalties.md",sourceDirName:"staking-modules/csm",slug:"/staking-modules/csm/penalties",permalink:"/staking-modules/csm/penalties",draft:!1,unlisted:!1,editUrl:"https://github.com/adminseedlatam/lido-docs-spanish/edit/main/docs/staking-modules/csm/penalties.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Rewards",permalink:"/staking-modules/csm/rewards"},next:{title:"Validator Exits",permalink:"/staking-modules/csm/validator-exits"}},l={},d=[{value:"Reasons",id:"reasons",level:2},{value:"Immediate and delayed",id:"immediate-and-delayed",level:2},{value:"Mechanics",id:"mechanics",level:2},{value:"Bond shortage",id:"bond-shortage",level:2},{value:"Benefits reset",id:"benefits-reset",level:2},{value:"Further reading",id:"further-reading",level:2},{value:"Useful links",id:"useful-links",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"penalties",children:"Penalties"}),"\n",(0,s.jsx)(t.h2,{id:"reasons",children:"Reasons"}),"\n",(0,s.jsx)(t.p,{children:"There are three major reasons for CSM Node Operator's bond to be penalized:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"The validator has been slashed."})," In this case, the ",(0,s.jsx)(t.a,{href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/altair/beacon-chain.md#modified-slash_validator",children:"initial (minimal) slashing penalty"})," is confiscated. Penalty amount = ",(0,s.jsx)(t.code,{children:"1 ETH"}),";"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"The operator has stolen EL rewards (MEV)."})," Penalty amount = ",(0,s.jsx)(t.code,{children:"amount stolen + fixed stealing fine"})," (can be applied across multiple NO validators);"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsxs)(t.strong,{children:["The validator's withdrawal balance is less than ",(0,s.jsx)(t.code,{children:"DEPOSIT_AMOUNT"})," (32 ETH)"]}),". Penalty amount = ",(0,s.jsx)(t.code,{children:"DEPOSIT_AMOUNT - validator's withdrawal balance"}),";"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["The first penalty is reported permissionlessly using ",(0,s.jsx)(t.a,{href:"https://eips.ethereum.org/EIPS/eip-4788",children:"EIP-4788"})," to prove the fact of slashing. This penalty is applied immediately within the reporting transaction."]}),"\n",(0,s.jsxs)(t.p,{children:["The second penalty has the form of a delayed penalty with a challenge period. A dedicated committee (reporter) detects MEV stealing (violation of the ",(0,s.jsx)(t.a,{href:"https://snapshot.org/#/lido-snapshot.eth/proposal/0x7ac2431dc0eddcad4a02ba220a19f451ab6b064a0eaef961ed386dc573722a7f",children:"Lido on Ethereum Block Proposer Rewards Policy"}),") and reports this fact on-chain, locking the bond funds. Settlement over EasyTrack motion (settler) ensures alignment between the DAO and detection committee. Once the penalty is settled (confirmed), all Node Operator's benefits are reset due to the violation of protocol rules. If the penalty is not settled for ",(0,s.jsx)(t.code,{children:"retention_period"})," the locked bond is automatically unlocked."]}),"\n",(0,s.jsx)(t.p,{children:"The third penalty type is calculated using the validator withdrawal balance (actual reporting is described in the section below). This penalty is applied immediately within the reporting transaction. If the initial slashing penalty is applied (first penalty type), it will be accounted for to avoid double penalization."}),"\n",(0,s.jsx)(t.h2,{id:"immediate-and-delayed",children:"Immediate and delayed"}),"\n",(0,s.jsx)(t.p,{children:"The following penalization schemes are introduced:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Immediate penalization"})," (for penalties that are unambiguous and can be assessed via trustless proofs);"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Delayed penalty with challenge period"})," (for cases where false positives may occur or investigation might be needed);"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"The challenge period for delayed penalties is implemented by separating two roles involved in the application of the penalty."}),"\n",(0,s.jsx)(t.p,{children:'The first role is the "reporter". Members of this role can initially report a fact that should result in a penalty. Bond funds will be locked but not burned or confiscated at this stage. "Reporters" can also revoke the initial report in case of the challenge resolution in favor of the Node Operator.'}),"\n",(0,s.jsx)(t.p,{children:'The second role is called "settler". Members of this role can finalize (settle) previously reported penalties.'}),"\n",(0,s.jsx)(t.p,{children:"Separating these two roles ensures that a penalty can only be applied when two independent actors agree."}),"\n",(0,s.jsx)(t.h2,{id:"mechanics",children:"Mechanics"}),"\n",(0,s.jsx)(t.p,{children:"There are two mechanics related to Node Operator bond penalization."}),"\n",(0,s.jsxs)(t.p,{children:["The first one is burning stETH shares using the ",(0,s.jsx)(t.a,{href:"../../contracts/burner",children:"Burner"}),". Once confiscated shares are burnt, the total amount of stETH shares decreases. Hence, ",(0,s.jsx)(t.code,{children:"shareRate"})," increases, effectively distributing all burned stETH value between other stETH holders."]}),"\n",(0,s.jsxs)(t.p,{children:["The second mechanic is transferring confiscated stETH to the ",(0,s.jsx)(t.a,{href:"https://etherscan.io/address/0x3e40D73EB977Dc6a537aF587D48316feE66E9C8c",children:"Lido DAO Treasury"}),". This approach is applied to penalties that are used to address protocol operational costs (e.g., ",(0,s.jsx)(t.code,{children:"removalCharge"}),")."]}),"\n",(0,s.jsxs)(t.p,{children:["Penalized funds are burned for all the reasons described in the previous section. At the moment, only one penalty transferred to the Treasury is the ",(0,s.jsx)(t.code,{children:"removalCharge"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"bond-shortage",children:"Bond shortage"}),"\n",(0,s.jsx)(t.p,{children:"If, after penalties have been applied, a Node Operator's bond is less than required to cover the current Node Operator's validators, all new rewards will be used to replenish the NO bond until it is back to the required level. Node Operators can also \"top-up\" the bond themselves (by submitting the required difference) to be able to claim new rewards."}),"\n",(0,s.jsx)(t.p,{children:"If the amount of the penalty exceeds the amount of the Node Operator bond available, all available funds are burned."}),"\n",(0,s.jsx)(t.h2,{id:"benefits-reset",children:"Benefits reset"}),"\n",(0,s.jsx)(t.p,{children:"A bond curve different from the default one can be treated as a benefit for the Node Operator. It is crucial to ensure a reset of the benefits in case of inappropriate performance or rule violations. There are 4 cases when benefits can be reset for the Node Operator in CSM:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"EL rewards stealing is detected and confirmed;"}),"\n",(0,s.jsx)(t.li,{children:"Slashing is reported for one of the NO's validators;"}),"\n",(0,s.jsxs)(t.li,{children:["One of the NO's validators is ejected due to insufficient CL balance (to be implemented after the Pectra hardfork bringing ",(0,s.jsx)(t.a,{href:"https://eips.ethereum.org/EIPS/eip-7002",children:"EIP-7002"})," to life);"]}),"\n",(0,s.jsx)(t.li,{children:"Based on the DAO decision;"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"If the Node Operator voluntarily exits all validators and claims all bond, benefits are not reset since there were no malicious or illegal actions from the Node Operator's side."}),"\n",(0,s.jsxs)(t.p,{children:["Detailed research on this topic is presented in a ",(0,s.jsx)(t.a,{href:"https://hackmd.io/@lido/SygBLW5ja",children:"separate document"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"further-reading",children:"Further reading"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/staking-modules/csm/validator-exits",children:"Validator exits"})}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"useful-links",children:"Useful links"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://eips.ethereum.org/EIPS/eip-4788",children:"EIP-4788"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://snapshot.org/#/lido-snapshot.eth/proposal/0x7ac2431dc0eddcad4a02ba220a19f451ab6b064a0eaef961ed386dc573722a7f",children:"Lido on Ethereum Block Proposer Rewards Policy"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var s=n(6540);const i={},a=s.createContext(i);function r(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);