"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6383],{6370:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>a,toc:()=>h});var n=s(4848),t=s(8453);const r={},o="Verifying address ownership for Lido DAO ops",a={id:"guides/address-ownership-guide",title:"Verifying address ownership for Lido DAO ops",description:'Using EOA across Lido DAO ops or protocol contracts requires providing a public "proof of ownership". Main use-cases here are using address as a signer in Lido DAO ops multisigs or using EOAs for offchain tooling where specific rights might be required.',source:"@site/docs/guides/address-ownership-guide.md",sourceDirName:"guides",slug:"/guides/address-ownership-guide",permalink:"/lido-docs-spanish/guides/address-ownership-guide",draft:!1,unlisted:!1,editUrl:"https://github.com/adminseedlatam/lido-docs-spanish/edit/main/docs/guides/address-ownership-guide.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Guide to Easy Track",permalink:"/lido-docs-spanish/guides/easy-track-guide"},next:{title:"Guide to being a signer at any Lido DAO multisigs",permalink:"/lido-docs-spanish/guides/multisig-signer-manual"}},l={},h=[{value:"Preparing and sharing address &amp; signature",id:"preparing-and-sharing-address--signature",level:2},{value:"In case of using externally owned account (EOA)",id:"in-case-of-using-externally-owned-account-eoa",level:3},{value:"In case of using Safe multisig",id:"in-case-of-using-safe-multisig",level:3},{value:"Ethereum signature verification",id:"ethereum-signature-verification",level:2},{value:"In case of using EOA",id:"in-case-of-using-eoa",level:3},{value:"Etherscan UI",id:"etherscan-ui",level:3},{value:"MyEtherWallet",id:"myetherwallet",level:3},{value:"Publishing the signature on Etherscan",id:"publishing-the-signature-on-etherscan",level:3},{value:"In case of using Safe multisig",id:"in-case-of-using-safe-multisig-1",level:3}];function d(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"verifying-address-ownership-for-lido-dao-ops",children:"Verifying address ownership for Lido DAO ops"}),"\n",(0,n.jsx)(i.p,{children:'Using EOA across Lido DAO ops or protocol contracts requires providing a public "proof of ownership". Main use-cases here are using address as a signer in Lido DAO ops multisigs or using EOAs for offchain tooling where specific rights might be required.'}),"\n",(0,n.jsx)(i.h2,{id:"preparing-and-sharing-address--signature",children:"Preparing and sharing address & signature"}),"\n",(0,n.jsx)(i.h3,{id:"in-case-of-using-externally-owned-account-eoa",children:"In case of using externally owned account (EOA)"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:["Sign the message along the lines of ",(0,n.jsx)(i.code,{children:"@my_social_handle is looking to join X Lido DAO multisig with address 0x..."})," with the private key you're looking to use as signing key. One of the options is going using MyEtherWallet web UI:","\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:["Connect your wallet to ",(0,n.jsx)(i.a,{href:"https://www.myetherwallet.com/wallet/access",children:"https://www.myetherwallet.com/wallet/access"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:["Go to ",(0,n.jsx)(i.a,{href:"https://www.myetherwallet.com/wallet/sign",children:"https://www.myetherwallet.com/wallet/sign"}),' (UI link is under "Message" dropdown on the left).']}),"\n",(0,n.jsx)(i.li,{children:'Enter the message, click "sign" and sign the message on the wallet.'}),"\n",(0,n.jsxs)(i.li,{children:["The ",(0,n.jsx)(i.code,{children:"sig"})," field in the result json is the signature hash."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.li,{children:"Publish the message along with the signature hash on twitter or other easily accessible social media."}),"\n",(0,n.jsxs)(i.li,{children:["Share the link to the post as a comment at the relevant ",(0,n.jsx)(i.a,{href:"https://research.lido.fi",children:"Lido DAO forum"})," post."]}),"\n",(0,n.jsxs)(i.li,{children:["Make sure to follow the ",(0,n.jsx)(i.a,{href:"./multisig-signer-manual",children:"general rules of thumb"})," for being a signer in Lido DAO ops multisigs."]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"in-case-of-using-safe-multisig",children:"In case of using Safe multisig"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:["In ",(0,n.jsx)(i.a,{href:"https://app.safe.global",children:"https://app.safe.global"}),' home screen of your multisig wallet hit the button "New transaction" and select "Contract interaction" in the appeared screen.']}),"\n",(0,n.jsx)(i.li,{children:'At the New Transaction screen toggle "Custom data" switch.'}),"\n",(0,n.jsxs)(i.li,{children:["Fill any EOA address (for example ",(0,n.jsx)(i.code,{children:"0x0000000000000000000000000000000000000000"}),') into "Enter Address or ENS Name" field.']}),"\n",(0,n.jsxs)(i.li,{children:["Use any hex encoder (like ",(0,n.jsx)(i.a,{href:"https://www.duplichecker.com/hex-to-text.php",children:"https://www.duplichecker.com/hex-to-text.php"}),") to encode a message that consists info about who is joining what Lido committee or multisig with which address, for example ",(0,n.jsx)(i.code,{children:"@my_social_handle is looking to join X Lido DAO multisig with address 0x..."}),"."]}),"\n",(0,n.jsx)(i.li,{children:'Paste a code generated at the previous step into "Data (Hex encoded)" field of "New Transaction" screen in the multisig interface (add "0x" in the start of a HEX code if it\'s missing), put "0" in the ETH value field.'}),"\n",(0,n.jsx)(i.li,{children:"Publish the message along with the transaction hash on twitter or other easily accessible social media."}),"\n",(0,n.jsxs)(i.li,{children:["Share the transaction hash in the post as a comment at the relevant ",(0,n.jsx)(i.a,{href:"https://research.lido.fi",children:"Lido DAO forum"})," post."]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"ethereum-signature-verification",children:"Ethereum signature verification"}),"\n",(0,n.jsx)(i.h3,{id:"in-case-of-using-eoa",children:"In case of using EOA"}),"\n",(0,n.jsx)(i.p,{children:"To verify the shared signature one can use Etherscan or MyEtherWallet UIs."}),"\n",(0,n.jsx)(i.h3,{id:"etherscan-ui",children:"Etherscan UI"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:["Go to ",(0,n.jsx)(i.a,{href:"https://etherscan.io/verifiedSignatures",children:"https://etherscan.io/verifiedSignatures"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:["Click ",(0,n.jsx)(i.code,{children:"Verify Signature"})," button."]}),"\n",(0,n.jsxs)(i.li,{children:["Input address, message & signature hash data & click ",(0,n.jsx)(i.code,{children:"Continue"}),"."]}),"\n",(0,n.jsx)(i.li,{children:"See whether the signature provided is valid."}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"myetherwallet",children:"MyEtherWallet"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:["Go to ",(0,n.jsx)(i.a,{href:"https://www.myetherwallet.com/tools?tool=verify",children:"https://www.myetherwallet.com/tools?tool=verify"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:["Encode the message text as hex string (use the tool like ",(0,n.jsx)(i.a,{href:"https://appdevtools.com/text-hex-converter",children:"https://appdevtools.com/text-hex-converter"}),")."]}),"\n",(0,n.jsxs)(i.li,{children:["Enter json & click ",(0,n.jsx)(i.code,{children:"Verify"}),":"]}),"\n"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{children:'{\n  "address": "0x...",\n  "msg": "0x...",\n  "sig": "signature_hash"\n}\n'})}),"\n",(0,n.jsxs)(i.p,{children:['Note that "msg" is hex text starting with ',(0,n.jsx)(i.code,{children:"0x"})," (add ",(0,n.jsx)(i.code,{children:"0x"})," before the hex encoded string if necessary).\n4. See whether the signature provided is valid."]}),"\n",(0,n.jsx)(i.h3,{id:"publishing-the-signature-on-etherscan",children:"Publishing the signature on Etherscan"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:["Go to ",(0,n.jsx)(i.a,{href:"https://etherscan.io/verifiedSignatures",children:"https://etherscan.io/verifiedSignatures"}),' and click "Verify Signature".']}),"\n",(0,n.jsxs)(i.li,{children:["Enter address, plain text message (not hex version MyEtherWallet will give!) & the signature (with ",(0,n.jsx)(i.code,{children:"0x"}),' prefix), choose "Verify & publish" option & click "Continue".']}),"\n",(0,n.jsx)(i.li,{children:"After the signature is verified you'll get the link for sharing."}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"in-case-of-using-safe-multisig-1",children:"In case of using Safe multisig"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:["Go to the signed transaction at the ",(0,n.jsx)(i.a,{href:"https://etherscan.io/",children:"Etherscan"}),"."]}),"\n",(0,n.jsx)(i.li,{children:'Click to show more details and find "input Data" field, click on "Decode input data".'}),"\n",(0,n.jsxs)(i.li,{children:['Copy a hex code in the "data" row and take it to any hex decoder (like ',(0,n.jsx)(i.a,{href:"https://www.duplichecker.com/hex-to-text.php",children:"duplichecker"}),")."]}),"\n",(0,n.jsxs)(i.li,{children:["Decode and verify the message (please note, that you may need to delete leading ",(0,n.jsx)(i.code,{children:"0x"})," from the hex code acquired in the previous step)."]}),"\n"]})]})}function c(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,i,s)=>{s.d(i,{R:()=>o,x:()=>a});var n=s(6540);const t={},r=n.createContext(t);function o(e){const i=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);