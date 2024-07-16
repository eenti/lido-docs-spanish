"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[435],{6448:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>h,toc:()=>c});var t=n(4848),s=n(8453);const o={},r="Hash verification",h={id:"ipfs/hash-verification",title:"Hash verification",description:"You may want to verify the authenticity and integrity of the application, deployed on IPFS.",source:"@site/docs/ipfs/hash-verification.md",sourceDirName:"ipfs",slug:"/ipfs/hash-verification",permalink:"/ipfs/hash-verification",draft:!1,unlisted:!1,editUrl:"https://github.com/adminseedlatam/lido-docs-spanish/edit/main/docs/ipfs/hash-verification.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Security",permalink:"/ipfs/security"},next:{title:"Lido IPFS applications",permalink:"/ipfs/apps-list"}},l={},c=[{value:"Steps",id:"steps",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"1. Clone the repository",id:"1-clone-the-repository",level:3},{value:"2. Git checkout a commit, matching the IPFS version",id:"2-git-checkout-a-commit-matching-the-ipfs-version",level:3},{value:"Method 1 \u2013 using git tags",id:"method-1--using-git-tags",level:4},{value:"Method 2 \u2013 searching on the GitHub Release page",id:"method-2--searching-on-the-github-release-page",level:4},{value:"3. Set up the project",id:"3-set-up-the-project",level:3},{value:"Without Docker",id:"without-docker",level:4},{value:"Using Docker",id:"using-docker",level:4},{value:"4. Configure build-info.json",id:"4-configure-build-infojson",level:3},{value:"5. Build the IPFS version",id:"5-build-the-ipfs-version",level:3},{value:"6. Create a CAR file and get its CID (hash)",id:"6-create-a-car-file-and-get-its-cid-hash",level:3},{value:"7. Get CID (hash) of the application deployed to IPFS",id:"7-get-cid-hash-of-the-application-deployed-to-ipfs",level:3}];function a(e){const i={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Details:n}=i;return n||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"hash-verification",children:"Hash verification"}),"\n",(0,t.jsxs)(i.p,{children:["You may want to verify the authenticity and integrity of the application, deployed on IPFS.\nIt can be done by CID (hash) verifying. In order to do so, you will need to download the source code of the application and build it locally.",(0,t.jsx)(i.br,{}),"\n","See the detailed instructions below."]}),"\n",(0,t.jsx)(i.h2,{id:"steps",children:"Steps"}),"\n",(0,t.jsx)(i.admonition,{type:"info",children:(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"https://github.com/lidofinance/ethereum-staking-widget",children:"Lido Ethereum Staking Widget"})," is taken as example here."]})}),"\n",(0,t.jsx)(i.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(i.p,{children:"You will need these tools installed in your system:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Node.js 20+"}),"\n",(0,t.jsx)(i.li,{children:"Yarn package manager v1 (classic)"}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Alternatively, you can use Docker to set up a building environment; read the sections below for the instructions."}),"\n",(0,t.jsx)(i.h3,{id:"1-clone-the-repository",children:"1. Clone the repository"}),"\n",(0,t.jsxs)(i.p,{children:["The repo for Ethereum Staking Widget is here: ",(0,t.jsx)(i.a,{href:"https://github.com/lidofinance/ethereum-staking-widget",children:"https://github.com/lidofinance/ethereum-staking-widget"})]}),"\n",(0,t.jsx)(i.h3,{id:"2-git-checkout-a-commit-matching-the-ipfs-version",children:"2. Git checkout a commit, matching the IPFS version"}),"\n",(0,t.jsxs)(i.p,{children:["You need to ",(0,t.jsx)(i.code,{children:"git checkout"})," the specific commit, matching the release of an app you want to verify.\nThis way, you can be sure that the app will not include any other changes, which affect the CID.",(0,t.jsx)(i.br,{}),"\n","There are several ways to do it."]}),"\n",(0,t.jsx)(i.h4,{id:"method-1--using-git-tags",children:"Method 1 \u2013 using git tags"}),"\n",(0,t.jsx)(i.p,{children:"Each released version has its own git tag, one can use it for git checkout."}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"Open the app in your browser and check the right side of its footer.\nThere will be a version number, which is actually a link to a Releases page on GitHub."}),"\n",(0,t.jsxs)(i.li,{children:["Run ",(0,t.jsx)(i.code,{children:"git fetch --all --tags --prune"})," to fetch all tags."]}),"\n",(0,t.jsxs)(i.li,{children:["Run ",(0,t.jsx)(i.code,{children:"git checkout tags/<version>"}),", where ",(0,t.jsx)(i.code,{children:"<version>"})," is the version from step 1."]}),"\n"]}),"\n",(0,t.jsx)(i.h4,{id:"method-2--searching-on-the-github-release-page",children:"Method 2 \u2013 searching on the GitHub Release page"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["Open the Releases page of the project's repository on GitHub. For Ethereum Staking Widget it is ",(0,t.jsx)(i.a,{href:"https://github.com/lidofinance/ethereum-staking-widget/releases",children:"here"}),"."]}),"\n",(0,t.jsx)(i.li,{children:"Search manually for the latest release, where IPFS pinning happened."}),"\n",(0,t.jsx)(i.li,{children:"Look for the commit hash near the release information."}),"\n",(0,t.jsxs)(i.li,{children:["Run ",(0,t.jsx)(i.code,{children:"git checkout <hash>"}),", where ",(0,t.jsx)(i.code,{children:"<hash>"})," is the commit hash from the previous step."]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"3-set-up-the-project",children:"3. Set up the project"}),"\n",(0,t.jsx)(i.h4,{id:"without-docker",children:"Without Docker"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"Add ENV variables as instructed in README."}),"\n",(0,t.jsxs)(i.li,{children:["Remove ",(0,t.jsx)(i.code,{children:"node_modules"})," directory if the project was set up earlier."]}),"\n",(0,t.jsxs)(i.li,{children:["Install node modules using ",(0,t.jsx)(i.code,{children:"yarn install --frozen-lockfile"}),"."]}),"\n",(0,t.jsx)(i.li,{children:"Follow other instructions described in the project's README."}),"\n"]}),"\n",(0,t.jsx)(i.h4,{id:"using-docker",children:"Using Docker"}),"\n",(0,t.jsx)(i.p,{children:"If you have problems with setting up the environment or if it is your preference,\nyou can use Docker to set up and build the project."}),"\n",(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"Steps for Docker"})})}),(0,t.jsxs)("div",{children:[(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["Configure ",(0,t.jsx)(i.code,{children:"build-info.json"})," as instructed in ",(0,t.jsx)(i.a,{href:"/ipfs/hash-verification#4-configure-build-infojson",children:"this step"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:["Create ",(0,t.jsx)(i.code,{children:"verification.Dockerfile"})," file in the project's root with this content:"]}),"\n"]}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"# build env\nFROM node:20-alpine as build\n\nWORKDIR /app\n\nRUN apk add --no-cache git=~2\nCOPY package.json yarn.lock ./\n\nRUN yarn install --frozen-lockfile --non-interactive --ignore-scripts && yarn cache clean\n\nCOPY . .\nRUN NODE_NO_BUILD_DYNAMICS=true yarn typechain && yarn build-ipfs\n# public/runtime is used to inject runtime vars; it should exist and user node should have write access there for it\nRUN rm -rf /app/public/runtime && mkdir /app/public/runtime && chown node /app/public/runtime\n\n# final image\nFROM node:20-alpine as base\n\nWORKDIR /app\nRUN apk add --no-cache curl=~8\nCOPY --from=build /app /app\n"})}),(0,t.jsxs)(i.ol,{start:"3",children:["\n",(0,t.jsx)(i.li,{children:"Add ENV variables as instructed in the project's README."}),"\n",(0,t.jsx)(i.li,{children:"Run these commands:"}),"\n"]}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"docker build --no-cache -t verification:0 -f verification.Dockerfile .\ndocker create --name verification-container verification:0\ndocker cp verification-container:/app/out /Users/${Name}/${Path-to-project}/dockerbuild-verification\ndocker rm verification-container\n"})}),(0,t.jsxs)(i.ol,{start:"5",children:["\n",(0,t.jsxs)(i.li,{children:["Run further steps from ",(0,t.jsx)(i.a,{href:"/ipfs/hash-verification#6-create-a-car-file-and-get-its-cid-hash",children:"step 6"})," of this instruction."]}),"\n"]})]})]}),"\n",(0,t.jsx)(i.h3,{id:"4-configure-build-infojson",children:"4. Configure build-info.json"}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.code,{children:"build-info.json"})," file is located in the project's root, ",(0,t.jsx)(i.a,{href:"https://github.com/lidofinance/ethereum-staking-widget/blob/develop/build-info.json",children:"here is the link"}),".",(0,t.jsx)(i.br,{}),"\n","It must contain information about the version of the application, which is currently deployed to IPFS.",(0,t.jsx)(i.br,{}),"\n","You can take this information from the latest GitHub action in which IPFS pinning happened:"]}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:'Open the app\'s repo, follow the "Actions" tab.'}),"\n",(0,t.jsxs)(i.li,{children:['On the left, in the navigation, find the workflow for IPFS releasing, for the Ethereum Staking Widget it is called "',(0,t.jsx)(i.a,{href:"https://github.com/lidofinance/ethereum-staking-widget/actions/workflows/ci-ipfs.yml",children:"IPFS Release"}),'".']}),"\n",(0,t.jsxs)(i.li,{children:['Open the latest successful workflow and look for the "prepare-for-ipfs summary" title or the JSON data which looks like this:',"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-json",children:'{ "branch": "main", "commit": "56ab68d", "version": "0.0.1" }\n'})}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["Copy the data to your local ",(0,t.jsx)(i.code,{children:"build-info.json"})]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"5-build-the-ipfs-version",children:"5. Build the IPFS version"}),"\n",(0,t.jsxs)(i.p,{children:["Run a suitable npm script to build the IPFS version.",(0,t.jsx)(i.br,{}),"\n","In case of Ethereum Staking Widget, it is ",(0,t.jsx)(i.code,{children:"yarn build-ipfs"}),"."]}),"\n",(0,t.jsx)(i.h3,{id:"6-create-a-car-file-and-get-its-cid-hash",children:"6. Create a CAR file and get its CID (hash)"}),"\n",(0,t.jsxs)(i.p,{children:["For Next.js applications the build files will be in the ",(0,t.jsx)(i.code,{children:"out"})," directory.",(0,t.jsx)(i.br,{}),"\n","The following command generates a CAR file from the ",(0,t.jsx)(i.code,{children:"out"})," directory with build files, and it will display the IPFS hash in the console:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"npx ipfs-car pack ./out --output ./out.car\n"})}),"\n",(0,t.jsx)(i.h3,{id:"7-get-cid-hash-of-the-application-deployed-to-ipfs",children:"7. Get CID (hash) of the application deployed to IPFS"}),"\n",(0,t.jsxs)(i.p,{children:["You will need to get the hash of the latest released CAR file.",(0,t.jsx)(i.br,{}),"\n",'It can be found on the Releases page of the repository under the "Assets" collapsible block.\nDownload the CAR file and run the following command:']}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"npx ipfs-car roots ipfs_source_code.car\n"})}),"\n",(0,t.jsx)(i.p,{children:"It will show CID roots found in the CAR header. The CID (hash) must be the same as in the previous step."})]})}function d(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>h});var t=n(6540);const s={},o=t.createContext(s);function r(e){const i=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function h(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:i},e.children)}}}]);