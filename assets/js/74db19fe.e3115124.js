"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8201],{490:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=s(4848),i=s(8453);const o={},r="DAO voting with Etherscan",c={id:"gu\xedas/etherscan-voting",title:"DAO voting with Etherscan",description:"This how to vote on Lido DAO Aragon with Etherscan UI",source:"@site/docs/gu\xedas/etherscan-voting.md",sourceDirName:"gu\xedas",slug:"/gu\xedas/etherscan-voting",permalink:"/lido-docs-spanish/gu\xedas/etherscan-voting",draft:!1,unlisted:!1,editUrl:"https://github.com/adminseedlatam/lido-docs-spanish/edit/main/docs/gu\xedas/etherscan-voting.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Palancas del Protocolo",permalink:"/lido-docs-spanish/gu\xedas/protocol-levers"},next:{title:"Guide to Easy Track",permalink:"/lido-docs-spanish/gu\xedas/easy-track-guide"}},a={},d=[{value:"Video guide",id:"video-guide",level:2},{value:"Preparation",id:"preparation",level:2},{value:"Voting",id:"voting",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"dao-voting-with-etherscan",children:"DAO voting with Etherscan"}),"\n",(0,n.jsx)(t.p,{children:"This how to vote on Lido DAO Aragon with Etherscan UI"}),"\n",(0,n.jsx)(t.h2,{id:"video-guide",children:"Video guide"}),"\n",(0,n.jsx)("div",{style:{position:"relative",width:"100%",paddingBottom:"62.5%",height:0},children:(0,n.jsx)("iframe",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"},src:"https://www.youtube.com/embed/5YTJgudYHs8",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}),"\n",(0,n.jsx)(t.h2,{id:"preparation",children:"Preparation"}),"\n",(0,n.jsxs)(t.p,{children:["Get the address of the Lido DAO ",(0,n.jsx)(t.code,{children:"Aragon Voting"})," contract from ",(0,n.jsx)(t.a,{href:"/deployed-contracts/#dao-contracts",children:"Deployed Contracts"})," page. It should be: ",(0,n.jsx)(t.a,{href:"https://etherscan.io/address/0x2e59A20f205bB85a89C53f1936454680651E618e",children:"0x2e59A20f205bB85a89C53f1936454680651E618e"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Get the vote id, either from ",(0,n.jsx)(t.a,{href:"https://vote.lido.fi",children:"voting ui"}),":"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(51).A+"",width:"3037",height:"1631"})}),"\n",(0,n.jsxs)(t.p,{children:["or from ",(0,n.jsx)(t.a,{href:"https://etherscan.io/address/0x2e59A20f205bB85a89C53f1936454680651E618e#readProxyContract",children:"Etherscan"}),":"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(3130).A+"",width:"2552",height:"1557"})}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:['Open "',(0,n.jsx)(t.a,{href:"https://etherscan.io/address/0x2e59A20f205bB85a89C53f1936454680651E618e#readProxyContract",children:"Contract/Read as Proxy"}),'" tab']}),"\n",(0,n.jsxs)(t.li,{children:["Get the total number of the votes from ",(0,n.jsx)(t.code,{children:"votesLength"})," method (number 21 on ",(0,n.jsx)(t.a,{href:"https://etherscan.io/address/0x2e59A20f205bB85a89C53f1936454680651E618e#readProxyContract",children:"Etherscan page"}),")"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(4785).A+"",width:"2556",height:"1550"})}),"\n",(0,n.jsxs)(t.ol,{start:"3",children:["\n",(0,n.jsxs)(t.li,{children:["If you're looking to vote on the last vote, take ",(0,n.jsx)(t.code,{children:"votesLength - 1"})," as an id. If the ",(0,n.jsx)(t.code,{children:"votesLength"})," is ",(0,n.jsx)(t.code,{children:"89"}),", last vote would have the id ",(0,n.jsx)(t.code,{children:"88"})]}),"\n",(0,n.jsxs)(t.li,{children:["You can check the vote data with ",(0,n.jsx)(t.code,{children:"getVote"})," method (number 6 on ",(0,n.jsx)(t.a,{href:"https://etherscan.io/address/0x2e59A20f205bB85a89C53f1936454680651E618e#readProxyContract",children:"Etherscan page"}),")"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(9871).A+"",width:"2556",height:"1550"})}),"\n",(0,n.jsx)(t.h2,{id:"voting",children:"Voting"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:['Open "',(0,n.jsx)(t.a,{href:"https://etherscan.io/address/0x2e59A20f205bB85a89C53f1936454680651E618e#writeProxyContract",children:"Contract / Write as Proxy"}),'" tab on Etherscan']}),"\n",(0,n.jsx)(t.li,{children:"Connect Etherscan UI to Web3 with either MetaMask or WalletConnect"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(3041).A+"",width:"2556",height:"1550"})}),"\n",(0,n.jsxs)(t.ol,{start:"3",children:["\n",(0,n.jsxs)(t.li,{children:["Use method ",(0,n.jsx)(t.code,{children:"vote"})," (number 6 on the ",(0,n.jsx)(t.a,{href:"https://etherscan.io/address/0x2e59A20f205bB85a89C53f1936454680651E618e#writeProxyContract",children:"Etherscan Page"}),")"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(8871).A+"",width:"2556",height:"1550"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"_voteId"})," is the vote id from the point 2."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"_supports"})," is the flag of whether you're voting for (type ",(0,n.jsx)(t.code,{children:"true"}),") or against (type ",(0,n.jsx)(t.code,{children:"false"}),") the vote"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"_executesIfDecided"})," is the flag to enact the vote if it could be executed right away in the tx sending the vote, ",(0,n.jsx)(t.code,{children:"true"})," or ",(0,n.jsx)(t.code,{children:"false"}),"; from the experience of the previous votes, you may leave that as ",(0,n.jsx)(t.code,{children:"false"})]}),"\n"]}),"\n",(0,n.jsxs)(t.ol,{start:"4",children:["\n",(0,n.jsxs)(t.li,{children:["Fill in the parameters ",(0,n.jsx)(t.code,{children:"_voteId"}),", ",(0,n.jsx)(t.code,{children:"_supports"})," & ",(0,n.jsx)(t.code,{children:"_executesIsDecided"})," and send the transaction"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(1292).A+"",width:"2556",height:"1550"})}),"\n",(0,n.jsxs)(t.ol,{start:"5",children:["\n",(0,n.jsx)(t.li,{children:"Sign the transaction"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(9921).A+"",width:"2556",height:"1550"})}),"\n",(0,n.jsx)(t.p,{children:"That's it! \ud83c\udf89"})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},3041:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/connect-wallet-9d36c783bcdfc883e8a6bb67b0005f55.png"},3130:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/etherscan_vote_address-6b0ef7bc729d0a93c70708192704f6b7.png"},9871:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/get-vote-e391f363a361a2c601a5c31824cce865.png"},9921:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/sign-transaction-43d7fe11cdb73563a7f24d4e72747a99.png"},8871:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/vote-1-2e9074532ab687daf29d69ec07fe62fd.png"},1292:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/vote-2-728cd473962eaf4f618b8ac7c55ca416.png"},4785:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/votes-length-64fe5aea0d17559b1a8841b3e8392279.png"},51:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/voting_ui-fa656d75b1ffd97250faf3959d7c6aab.png"},8453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>c});var n=s(6540);const i={},o=n.createContext(i);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);