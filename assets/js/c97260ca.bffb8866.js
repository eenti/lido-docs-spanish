"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7198],{3823:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>n,toc:()=>l});var r=i(4848),o=i(8453);const a={},s="Validator exits and penalties",n={id:"guides/oracle-spec/penalties",title:"Validator exits and penalties",description:'The Lido protocol has laid out the policy on validator exit order, performance expectations over time, node operator responsibilities, and monitoring and penalties. The validators\' exit should be deterministic and independent to ensure trustlessness, and the current proposed exit order is the "combined approach." Initially, the enforcement mechanisms and service level expectations are mild enough to work out initial kinks without unreasonable penalty, but penalties for non-performance should increase once the processes and mechanisms mature. Node Operators have a duty to exit validators correctly and timely, and the tooling for the semi- or fully-automated processing of validator exit requests includes the Key API Service, Ejector Oracle reports, and Validator Ejector. Node Operators must adhere to the required service levels for validator exits, or they risk being classified as delayed or delinquent.',source:"@site/docs/guides/oracle-spec/penalties.md",sourceDirName:"guides/oracle-spec",slug:"/guides/oracle-spec/penalties",permalink:"/lido-docs-spanish/guides/oracle-spec/penalties",draft:!1,unlisted:!1,editUrl:"https://github.com/adminseedlatam/lido-docs-spanish/edit/main/docs/guides/oracle-spec/penalties.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Validators Exit Bus",permalink:"/lido-docs-spanish/guides/oracle-spec/validator-exit-bus"},next:{title:"Deposit Security Committee manual",permalink:"/lido-docs-spanish/guides/deposit-security-manual"}},d={},l=[{value:"Helpful links",id:"helpful-links",level:4}];function c(e){const t={a:"a",h1:"h1",h4:"h4",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"validator-exits-and-penalties",children:"Validator exits and penalties"}),"\n",(0,r.jsx)(t.p,{children:'The Lido protocol has laid out the policy on validator exit order, performance expectations over time, node operator responsibilities, and monitoring and penalties. The validators\' exit should be deterministic and independent to ensure trustlessness, and the current proposed exit order is the "combined approach." Initially, the enforcement mechanisms and service level expectations are mild enough to work out initial kinks without unreasonable penalty, but penalties for non-performance should increase once the processes and mechanisms mature. Node Operators have a duty to exit validators correctly and timely, and the tooling for the semi- or fully-automated processing of validator exit requests includes the Key API Service, Ejector Oracle reports, and Validator Ejector. Node Operators must adhere to the required service levels for validator exits, or they risk being classified as delayed or delinquent.'}),"\n",(0,r.jsx)(t.p,{children:'A piece of tooling dubbed the "Monitor Daemon" is served to reconcile signalled validator exit requests with processed exits by the Ethereum Consensus Layer in order to determine if validators have been exited in a timely manner. The results of this monitoring are publicly available in order to ensure the DAO has access to the data it needs to understand the rate, flow, and efficacy of validator exits.'}),"\n",(0,r.jsx)(t.p,{children:"Although the process might be largely automated, to account for differences in infrastructure, working hours, and mechanism timings, the below are the required service levels for validator exits that Node Operators must adhere to."}),"\n",(0,r.jsx)(t.p,{children:"If Node Operators are processing signalled validator exit requests as soon as they are available, the shortest possible time for a validator exit request to go from \u201csignalled\u201d to \u201cprocessed\u201d will be somewhere within the range of a few minutes to an hour. With respect to validator exit performance, each Node Operator may be considered to have one of the below three statuses."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"In good standing - validator exit requests are being processed fully, correctly, and timely."}),"\n",(0,r.jsx)(t.li,{children:"Delayed - validator exit requests are being processed incompletely, incorrectly, or not within the desired time frame."}),"\n",(0,r.jsx)(t.li,{children:"Delinquent - validator exit requests are being processed incompletely, incorrectly, or not within the maximum acceptable time frame."}),"\n"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Event"}),(0,r.jsx)(t.th,{children:"Requirement to not be considered Delayed"}),(0,r.jsx)(t.th,{children:"Requirement not be considered Delinquent"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Processing of signalled validator exit requests"}),(0,r.jsx)(t.td,{children:"All signalled requests are processed ASAP (no longer than 1 day)"}),(0,r.jsx)(t.td,{children:"Some signalled requests are taking longer than 1 but less than 4 days to process"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Escalation of inability to execute signalled validator exit request with reason"}),(0,r.jsx)(t.td,{children:"ASAP but no longer than 1 day"}),(0,r.jsx)(t.td,{children:"ASAP but no longer than 4 days"})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"In the case that Node Operators are not processing validator exit requests in a timely manner, the below actions shall be taken:\nIf a Node Operator has a status of Delayed, there should be raised an issue in internal communications with the Node Operator and request remediative action."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["If a Node Operator has a status of Delinquent, the DAO contributors can raise a formal issue with the Node Operator on the Lido research forum. While a Node Operator has a status of Delinquent:","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"no new stake will be allocated to the Node Operator (happens automatically);"}),"\n",(0,r.jsx)(t.li,{children:"the daily rewards sent to the Node Operator will be halved (with the remaining half sent towards that day\u2019s rebase) (happens automatically);"}),"\n",(0,r.jsx)(t.li,{children:"reduced rewards will continue for the duration of a cooldown period long enough to determine whether, immediately after service restoration by the Node Operator, subsequently received validator exit requests are processed in a timely manner."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["If a Node Operator has a status of Delayed or Delinquent, the ",(0,r.jsx)(t.a,{href:"/lido-docs-spanish/guides/oracle-spec/validator-exit-bus",children:"Validators Exit Bus"})," Oracle off-chain module will assume that the Node Operator is unresponsive and re-route new incoming validator exit requests to operators that are not considered delinquent. Due to the re-routing of validator exit requests, the DAO shall consider (via an ad-hoc vote) overriding the total limit of active validators for the relevant Node Operator such that if/when they resume a status of in good standing, they are not benefiting at the expense of Node Operators who took over the processing of the re-routed exits requests."]}),"\n",(0,r.jsx)(t.li,{children:"Once a Delinquent Node Operator has processed all signalled validator exit requests (and thus their number of Delinquent validators in next Accounting Oracle report is updated to 0), they will recommence receiving validator exit requests. Their status shall revert to \u201cIn good standing\u201d after 5 days (i.e. provided any newly received validator exit requests are processed timely). During this 5 day \u201ccooldown period\u201d they will continue to not receive new stake and receive halved rewards."}),"\n",(0,r.jsx)(t.li,{children:"In the most egregious of cases (e.g. delinquency for weeks at a time) the DAO may consider an on-chain vote to \u201cstop\u201d the Node Operator which has the effect of setting the fees that they receive to zero (the DAO may consider such a vote at any time). If the Node Operator is unresponsive to the DAO\u2019s requests, then the Node Operator is considered to have been effectively \u201coff boarded\u201d from the Lido protocol and the DAO should take further steps to formalize the exit of the Node Operator."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"In the case that a Node Operator cannot, for any reason, exit a validator (e.g. loss of the private key associated with that validator), they are expected to reimburse the protocol participants by supplying the maximum irretrievable balance of the validator (i.e. 32 ETH, since anything over that can be obtained via partial rewards). Doing so renders the validator in question \u201cunrecoverable and reimbursed\u201d and does not count against the Node Operator in terms of assessing its validator exit request status."}),"\n",(0,r.jsx)(t.h4,{id:"helpful-links",children:"Helpful links"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/lidofinance/documents-and-policies/blob/main/Lido%20on%20Ethereum%20-%20Validator%20Exits%20Policy.md",children:"Lido Validator Exits Policy"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://research.lido.fi/t/lido-validator-exits-policy-draft-for-discussion/3864",children:"Lido Validator Exits Policy: Forum discussion"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://research.lido.fi/t/withdrawals-on-validator-exiting-order/3048/1",children:"Withdrawals: on Validator Exiting Order"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>n});var r=i(6540);const o={},a=r.createContext(o);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);