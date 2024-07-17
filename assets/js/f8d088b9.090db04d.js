"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8102],{4866:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var i=t(4848),o=t(8453);const s={},a="Release Flow",r={id:"ipfs/release-flow",title:"Release Flow",description:"Releasing the widget to IPFS involves several steps, including:",source:"@site/docs/ipfs/release-flow.md",sourceDirName:"ipfs",slug:"/ipfs/release-flow",permalink:"/ipfs/release-flow",draft:!1,unlisted:!1,editUrl:"https://github.com/adminseedlatam/lido-docs-spanish/edit/main/docs/ipfs/release-flow.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Acerca de IPFS",permalink:"/ipfs/about"},next:{title:"Security",permalink:"/ipfs/security"}},l={},d=[{value:"GitHub Actions workflow",id:"github-actions-workflow",level:2},{value:"Workflow steps",id:"workflow-steps",level:3}];function c(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"release-flow",children:"Release Flow"}),"\n",(0,i.jsx)(n.p,{children:"Releasing the widget to IPFS involves several steps, including:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Creating a content-addressable archive (CAR file) containing the necessary files for the widget to function."}),"\n",(0,i.jsx)(n.li,{children:"Uploading the CAR file to the IPFS network using an IPFS provider."}),"\n",(0,i.jsx)(n.li,{children:"Pinning the uploaded CAR file to ensure its permanent availability on the IPFS network."}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{title:"IPFS Pinning",type:"note",children:(0,i.jsx)(n.p,{children:"By default, IPFS nodes only keep data in their cache for a limited time.\nThen, the data is removed by an automatic garbage collection process.\nTo ensure that content remains available on the IPFS network permanently,\nit must be pinned using its Content Identifier (CID)."})}),"\n",(0,i.jsx)(n.p,{children:"The power of GitHub Actions is used to complete and automate these and other required steps."}),"\n",(0,i.jsx)(n.h2,{id:"github-actions-workflow",children:"GitHub Actions workflow"}),"\n",(0,i.jsx)(n.p,{children:"GitHub Actions has already been used to build and deploy Lido applications, so it was decided to adapt them for IPFS releases."}),"\n",(0,i.jsx)(n.p,{children:"IPFS release occurs as the next step after a regular application release.\nBut only major or critical updates are released to IPFS due to the numerous\nactions required to make an IPFS release, and also the fact that each new release of a Lido app\nwill produce a new CID and will be available at the new address,\nwhich is inconvenient for users willing to always use the latest version of an application."}),"\n",(0,i.jsx)(n.p,{children:"The developed workflow allows automatic pinning of any Lido app that is technically ready to operate on IPFS.\nAdditionally, pinning is not limited to a single provider but can be performed on multiple providers simultaneously.\nThis approach aims to leverage decentralization, guaranteeing accessibility to IPFS content\nfrom multiple providers in case one of them fails. This setup also enables independent testing of the UI on various\nnetworks and environments."}),"\n",(0,i.jsxs)(n.p,{children:["The IPFS pinning and preparing ENS transactions in the workflow are facilitated\nby the ",(0,i.jsx)(n.a,{href:"https://github.com/StauroDEV/blumen",children:"Blumen"})," package, developed in collaboration with Lido."]}),"\n",(0,i.jsxs)(n.p,{children:["On every IPFS release, the content verification is carried out by both development and QA Lido contributors\nto ensure that there is no unexpected content added to the code during CI process.\nThe verification relies on hash comparisons, and if you want, you can also\nperform it using the ",(0,i.jsx)(n.a,{href:"/ipfs/hash-verification",children:"provided instructions"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["After the verification, the IPFS release is initiated, which results in adding\nthe obtained pinning information to the application ",(0,i.jsx)(n.a,{href:"https://github.com/lidofinance/ethereum-staking-widget/releases",children:"releases page"}),".\nThe details about IPFS pinning (CID, IPFS providers, https gateway, source code archives) is attached to the release description."]}),"\n",(0,i.jsx)(n.h3,{id:"workflow-steps",children:"Workflow steps"}),"\n",(0,i.jsxs)(n.p,{children:["You can find the source code of the workflow ",(0,i.jsx)(n.a,{href:"https://github.com/lidofinance/actions/blob/main/.github/workflows/ci-ipfs.yml",children:"on GitHub"}),".\nThe workflow performs further steps:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Retrieving necessary secrets, tags, and the application's build files."}),"\n",(0,i.jsx)(n.li,{children:"Obtaining information about the date and the commit hash of the tag."}),"\n",(0,i.jsxs)(n.li,{children:["Executing the ",(0,i.jsx)(n.a,{href:"https://github.com/StauroDEV/blumen",children:"Blumen"})," script to perform IPFS pinning."]}),"\n",(0,i.jsx)(n.li,{children:"Creating artifacts to be attached to the release."}),"\n",(0,i.jsx)(n.li,{children:"Searching for an existing release on GitHub based on the provided tag for modifying the description."}),"\n",(0,i.jsx)(n.li,{children:"Generating and modifying the existing description of the release."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var i=t(6540);const o={},s=i.createContext(o);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);