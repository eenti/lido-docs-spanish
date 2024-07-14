"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3152],{261:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>o,frontMatter:()=>d,metadata:()=>c,toc:()=>h});var s=r(4848),i=r(8453);const d={},t="InsuranceFund",c={id:"contracts/insurance",title:"InsuranceFund",description:"- Source code",source:"@site/docs/contracts/insurance.md",sourceDirName:"contracts",slug:"/contracts/insurance",permalink:"/lido-docs-spanish/contracts/insurance",draft:!1,unlisted:!1,editUrl:"https://github.com/adminseedlatam/lido-docs-spanish/edit/main/docs/contracts/insurance.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"GateSeal",permalink:"/lido-docs-spanish/contracts/gate-seal"},next:{title:"OssifiableProxy",permalink:"/lido-docs-spanish/contracts/ossifiable-proxy"}},l={},h=[{value:"Mechanics",id:"mechanics",level:2},{value:"View methods",id:"view-methods",level:2},{value:"owner()",id:"owner",level:3},{value:"renounceOwnership()",id:"renounceownership",level:3},{value:"Methods",id:"methods",level:2},{value:"transferERC1155()",id:"transfererc1155",level:3},{value:"Parameters",id:"parameters",level:4},{value:"transferERC20()",id:"transfererc20",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"transferERC721()",id:"transfererc721",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"transferEther()",id:"transferether",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"transferOwnership()",id:"transferownership",level:3},{value:"Parameters",id:"parameters-4",level:4}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"insurancefund",children:"InsuranceFund"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/lidofinance/insurance-fund/blob/main/contracts/InsuranceFund.sol",children:"Source code"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://etherscan.io/address/0x8B3f33234ABD88493c0Cd28De33D583B70beDe35",children:"Deployed contract"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/lidofinance/lido-improvement-proposals/blob/develop/LIPS/lip-18.md",children:"LIP-18"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The Lido Insurance Fund is a vault contract that serves as a simple transparent store for funds allocated for self-insurance purposes."}),"\n",(0,s.jsx)(n.h2,{id:"mechanics",children:"Mechanics"}),"\n",(0,s.jsxs)(n.p,{children:["The Insurance Fund is a simple vault that inherits OpenZeppelin's ",(0,s.jsx)(n.a,{href:"https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v4.7.3/contracts/access/Ownable.sol",children:"Ownable"})," and allows the owner to transfer ether, ERC20, ERC721, ERC1155 tokens from the contract. The owner, which will the Lido DAO Agent, can transfer ownership to another entity with an exception of ",(0,s.jsx)(n.a,{href:"https://etherscan.io/address/0x0000000000000000000000000000000000000000",children:"zero address"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"view-methods",children:"View methods"}),"\n",(0,s.jsx)(n.h3,{id:"owner",children:"owner()"}),"\n",(0,s.jsxs)(n.p,{children:["Returns the current ",(0,s.jsx)(n.code,{children:"owner"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"function owner() public view returns (address);\n"})}),"\n",(0,s.jsx)(n.h3,{id:"renounceownership",children:"renounceOwnership()"}),"\n",(0,s.jsx)(n.p,{children:"Reverts always."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"function renounceOwnership() public pure override;\n"})}),"\n",(0,s.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsx)(n.h3,{id:"transfererc1155",children:"transferERC1155()"}),"\n",(0,s.jsxs)(n.p,{children:["Transfer a single ERC1155 token with the specified id in the specified amount to an entity from the contract balance. A contract recipient must implement ",(0,s.jsx)(n.code,{children:"ERC1155TokenReceiver"})," in accordance to ",(0,s.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-1155",children:"EIP-1155"})," in order to safely receive tokens."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["reverts if ",(0,s.jsx)(n.code,{children:"msg.sender"})," is not ",(0,s.jsx)(n.code,{children:"owner"}),";"]}),"\n",(0,s.jsxs)(n.li,{children:["reverts if ",(0,s.jsx)(n.code,{children:"_recipient"})," is zero address;"]}),"\n",(0,s.jsx)(n.li,{children:"reverts if the contract balance is insufficient;"}),"\n",(0,s.jsxs)(n.li,{children:["emits ",(0,s.jsx)(n.code,{children:"ERC721Transferred(address indexed _token, address indexed _recipient, uint256 _tokenId, bytes _data)"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"function transferERC1155(address _token, address _recipient, uint256 _tokenId, uint256 _amount, bytes calldata _data) external;\n"})}),"\n",(0,s.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_token"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"address"})}),(0,s.jsx)(n.td,{children:"an ERC1155 token"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_recipient"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"address"})}),(0,s.jsx)(n.td,{children:"recipient entity"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_tokenId"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"uint256"})}),(0,s.jsx)(n.td,{children:"token identifier"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_amount"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"uint256"})}),(0,s.jsx)(n.td,{children:"transfer amount"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_data"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"bytes"})}),(0,s.jsxs)(n.td,{children:["byte sequence for ",(0,s.jsx)(n.code,{children:"onERC1155Received"})," hook"]})]})]})]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Note: ",(0,s.jsx)(n.code,{children:"transferERC1155"})," does not support multi-token batch transfers."]})}),"\n",(0,s.jsx)(n.h3,{id:"transfererc20",children:"transferERC20()"}),"\n",(0,s.jsx)(n.p,{children:"Transfer an ERC20 token to an entity in the specified amount from the contract balance."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["reverts if ",(0,s.jsx)(n.code,{children:"msg.sender"})," is not ",(0,s.jsx)(n.code,{children:"owner"}),";"]}),"\n",(0,s.jsxs)(n.li,{children:["reverts if ",(0,s.jsx)(n.code,{children:"_recipient"})," is zero address;"]}),"\n",(0,s.jsx)(n.li,{children:"reverts if the contract balance is insufficient;"}),"\n",(0,s.jsxs)(n.li,{children:["emits ",(0,s.jsx)(n.code,{children:"ERC20Transferred(address indexed _token, address indexed _recipient, uint256 _amount)"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"function transferERC20(address _token, address _recipient, uint256 _amount) external;\n"})}),"\n",(0,s.jsx)(n.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_token"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"address"})}),(0,s.jsx)(n.td,{children:"an ERC20 token"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_recipient"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"address"})}),(0,s.jsx)(n.td,{children:"recipient entity"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_amount"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"uint256"})}),(0,s.jsx)(n.td,{children:"transfer amount"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"transfererc721",children:"transferERC721()"}),"\n",(0,s.jsxs)(n.p,{children:["Transfer a single ERC721 token with the specified id to an entity from the contract balance. A contract recipient must implement ",(0,s.jsx)(n.code,{children:"ERC721TokenReceiver"})," in accordance to ",(0,s.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-721",children:"EIP-721"})," in order to safely receive tokens."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["reverts if ",(0,s.jsx)(n.code,{children:"msg.sender"})," is not ",(0,s.jsx)(n.code,{children:"owner"}),";"]}),"\n",(0,s.jsxs)(n.li,{children:["reverts if ",(0,s.jsx)(n.code,{children:"_recipient"})," is zero address;"]}),"\n",(0,s.jsxs)(n.li,{children:["emits ",(0,s.jsx)(n.code,{children:"ERC721Transferred(address indexed _token, address indexed _recipient, uint256 _tokenId, bytes _data)"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"function transferERC721(address _token, address _recipient, uint256 _tokenId, bytes memory _data) external;\n"})}),"\n",(0,s.jsx)(n.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_token"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"address"})}),(0,s.jsx)(n.td,{children:"an ERC721 token"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_recipient"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"address"})}),(0,s.jsx)(n.td,{children:"recipient entity"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_tokenId"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"uint256"})}),(0,s.jsx)(n.td,{children:"token identifier"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_data"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"bytes"})}),(0,s.jsxs)(n.td,{children:["byte sequence for ",(0,s.jsx)(n.code,{children:"onERC721Received"})," hook"]})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"transferether",children:"transferEther()"}),"\n",(0,s.jsx)(n.p,{children:"Transfers ether to an entity from the contract balance."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["reverts if ",(0,s.jsx)(n.code,{children:"msg.sender"})," is not ",(0,s.jsx)(n.code,{children:"owner"}),";"]}),"\n",(0,s.jsxs)(n.li,{children:["reverts if ",(0,s.jsx)(n.code,{children:"_recipient"})," is zero address;"]}),"\n",(0,s.jsx)(n.li,{children:"reverts if the contract balance is insufficient;"}),"\n",(0,s.jsxs)(n.li,{children:["reverts if the actual transfer OP fails (e.g. ",(0,s.jsx)(n.code,{children:"_recipient"})," is a contract with no fallback);"]}),"\n",(0,s.jsxs)(n.li,{children:["emits ",(0,s.jsx)(n.code,{children:"EtherTransferred(address indexed _recipient, uint256 _amount)"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"function transferEther(address _recipient, uint256 _amount) external;\n"})}),"\n",(0,s.jsx)(n.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_recipient"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"address"})}),(0,s.jsx)(n.td,{children:"recipient entity"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_amount"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"uint256"})}),(0,s.jsx)(n.td,{children:"transfer amount"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"transferownership",children:"transferOwnership()"}),"\n",(0,s.jsxs)(n.p,{children:["Assigns ",(0,s.jsx)(n.code,{children:"newOwner"})," as the ",(0,s.jsx)(n.code,{children:"owner"}),"."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["reverts if ",(0,s.jsx)(n.code,{children:"msg.sender"})," is not ",(0,s.jsx)(n.code,{children:"owner"}),";"]}),"\n",(0,s.jsxs)(n.li,{children:["reverts if ",(0,s.jsx)(n.code,{children:"newOwner"})," is zero address;"]}),"\n",(0,s.jsxs)(n.li,{children:["emits ",(0,s.jsx)(n.code,{children:"emit OwnershipTransferred(address indexed previousOwner, address indexed newOwner)"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"function transferOwnership(address newOwner) public;\n"})}),"\n",(0,s.jsx)(n.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"newOwner"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"address"})}),(0,s.jsx)(n.td,{children:"entity which will have access to all state-mutating operations"})]})})]})]})}function o(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>c});var s=r(6540);const i={},d=s.createContext(i);function t(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);