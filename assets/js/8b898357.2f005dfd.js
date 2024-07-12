"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3999],{1239:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>c});var s=a(4848),r=a(8453);const i={},o="Generaci\xf3n y Firma de Mensajes de Salida",t={id:"guides/node-operators/exits/exit-message-generation-signing",title:"Generaci\xf3n y Firma de Mensajes de Salida",description:"Almacenamiento de Claves o Dirk",source:"@site/docs/guides/node-operators/exits/exit-message-generation-signing.md",sourceDirName:"guides/node-operators/exits",slug:"/guides/node-operators/exits/exit-message-generation-signing",permalink:"/lido-docs-spanish/guides/node-operators/exits/exit-message-generation-signing",draft:!1,unlisted:!1,editUrl:"https://github.com/adminseedlatam/lido-docs-spanish/edit/main/docs/guides/node-operators/exits/exit-message-generation-signing.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Informaci\xf3n General",permalink:"/lido-docs-spanish/guides/node-operators/exits/general-information"},next:{title:"Ejemplos de Flujo",permalink:"/lido-docs-spanish/guides/node-operators/exits/flow-examples"}},d={},c=[{value:"Almacenamiento de Claves o Dirk",id:"almacenamiento-de-claves-o-dirk",level:2},{value:"Para Keystores:",id:"para-keystores",level:3},{value:"Para Dirk:",id:"para-dirk",level:3},{value:"Para Web3Signer u Otros Firmadores Propietarios",id:"para-web3signer-u-otros-firmadores-propietarios",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"generaci\xf3n-y-firma-de-mensajes-de-salida",children:"Generaci\xf3n y Firma de Mensajes de Salida"}),"\n",(0,s.jsx)(n.h2,{id:"almacenamiento-de-claves-o-dirk",children:"Almacenamiento de Claves o Dirk"}),"\n",(0,s.jsxs)(n.p,{children:["Si tus claves de firma de validador est\xe1n en ",(0,s.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-2335",children:"keystores"})," o en un gestor de claves remoto como ",(0,s.jsx)(n.a,{href:"https://github.com/attestantio/dirk",children:"Dirk"}),", el m\xe9todo m\xe1s sencillo es utilizar ",(0,s.jsx)(n.a,{href:"https://github.com/wealdtech/ethdo",children:"ethdo"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"para-keystores",children:"Para Keystores:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Crear una billetera ethdo"}),"\n",(0,s.jsx)(n.li,{children:"Importar keystores"}),"\n",(0,s.jsx)(n.li,{children:"Generar un retiro"}),"\n",(0,s.jsx)(n.li,{children:"Borrar la billetera si ya no es necesaria"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Crear una nueva billetera:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"./ethdo --base-dir=./temp wallet create --wallet=wallet\n"})}),"\n",(0,s.jsx)(n.p,{children:"Agregar una clave desde un keystore:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"./ethdo --base-dir=./temp account import --account=wallet/account --keystore=./ethdo/keystore.json --keystore-passphrase=12345678 --passphrase=pass\n"})}),"\n",(0,s.jsx)(n.p,{children:"Generar y firmar un mensaje de salida:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"./ethdo --base-dir=./temp validator exit --account=wallet/account --passphrase=pass --json --connection=http://consensus_node:5052\n"})}),"\n",(0,s.jsxs)(n.p,{children:["ethdo imprimir\xe1 el mensaje de salida en la salida est\xe1ndar. Puedes guardar el archivo ",(0,s.jsx)(n.code,{children:"ethdo ... > 0x123.json"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Una vez finalizado, borrar la billetera:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"./ethdo --base-dir=./temp wallet delete --wallet=wallet\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Si buscas automatizar el proceso, revisa ",(0,s.jsx)(n.a,{href:"https://gist.github.com/kolyasapphire/d2bafce3cdd04305bc109cbd49728ffe",children:"este ejemplo"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"Aunque los keystores est\xe1n encriptados, se recomienda interactuar con ellos en un entorno seguro sin acceso a internet."})}),"\n",(0,s.jsx)(n.p,{children:"ethdo te permite preparar todo lo necesario para la generaci\xf3n offline de mensajes de salida en un archivo conveniente. Para ello, en una m\xe1quina con acceso a un Nodo de Consenso ejecuta:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"./ethdo validator exit --prepare-offline --connection=http://consensus_node:5052 --timeout=300s\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Este comando obtendr\xe1 la informaci\xf3n de los validadores, versiones de forks, epoch actual y otros datos de la cadena para la generaci\xf3n offline de mensajes de salida, guardando todo en ",(0,s.jsx)(n.code,{children:"offline-preparation.json"})," en el directorio ",(0,s.jsx)(n.code,{children:"ethdo"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Este archivo puede ser transferido luego a una m\xe1quina segura junto con el binario de ",(0,s.jsx)(n.code,{children:"ethdo"}),", por ejemplo en una unidad USB encriptada."]}),"\n",(0,s.jsxs)(n.p,{children:["En la m\xe1quina segura, coloca ",(0,s.jsx)(n.code,{children:"offline-preparation.json"})," en el directorio desde donde se ejecuta ",(0,s.jsx)(n.code,{children:"ethdo"}),", utiliza el argumento ",(0,s.jsx)(n.code,{children:"--offline"})," para el comando ",(0,s.jsx)(n.code,{children:"validator exit"})," y elimina ",(0,s.jsx)(n.code,{children:"--connection"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"./ethdo --base-dir=./temp validator exit --account=wallet/account --passphrase=pass --json --offline\n"})}),"\n",(0,s.jsx)(n.h3,{id:"para-dirk",children:"Para Dirk:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"./ethdo --remote=server.example.com:9091 --client-cert=client.crt --client-key=client.key --server-ca-cert=dirk_authority.crt validator exit --account=Validators/1 --json --connection=http://127.0.0.1:5051\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/wealdtech/ethdo",children:"ethdo"}),"\n",(0,s.jsx)(n.a,{href:"https://github.com/wealdtech/ethdo/blob/master/docs/usage.md#exit",children:"Documentaci\xf3n de ethdo"})]}),"\n",(0,s.jsx)(n.h2,{id:"para-web3signer-u-otros-firmadores-propietarios",children:"Para Web3Signer u Otros Firmadores Propietarios"}),"\n",(0,s.jsxs)(n.p,{children:["Si est\xe1s utilizando el endpoint ",(0,s.jsx)(n.code,{children:"/api/v1/modules/{module_id}/validators/generate-unsigned-exit-messages/{operator_id}"})," de KAPI, puedes omitir obtener el epoch y construir un mensaje de salida no firmado en el siguiente ejemplo."]}),"\n",(0,s.jsx)(n.p,{children:"Obtener el epoch actual:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"const blockReq = await fetch(CONSENSUS_BLOCK_ENDPOINT)\nconst blockRes = await blockReq.json()\nconst blockNumber = blockRes.data.message.slot\nconst currentEpoch = Math.floor(blockNumber / 32)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Obtener par\xe1metros del fork:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"const forkReq = await fetch(CONSENSUS_FORK_ENDPOINT)\nconst forkRes = await forkReq.json()\nconst fork = forkRes.data\n"})}),"\n",(0,s.jsx)(n.p,{children:"Obtener par\xe1metros de genesis:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"const genesisReq = await fetch(CONSENSUS_GENESIS_ENDPOINT)\nconst genesisRes = await genesisReq.json()\nconst genesis_validators_root = genesisRes.data.genesis_validators_root\n"})}),"\n",(0,s.jsx)(n.p,{children:"Construir un mensaje de salida:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"const voluntaryExit = {\n  epoch: String(currentEpoch),\n  validator_index: String(VALIDATOR_INDEX),\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Preparar una solicitud de firma:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"const body = {\n  type: 'VOLUNTARY_EXIT',\n  fork_info: {\n    fork,\n    genesis_validators_root,\n  },\n  voluntary_exit: voluntaryExit,\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Enviar la solicitud:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"const signerReq = await fetch(WEB3SIGNER_ENDPOINT, {\n  method: 'POST',\n  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },\n  body: JSON.stringify(body),\n})\nconst signature = await signerReq.text()\n"})}),"\n",(0,s.jsx)(n.p,{children:"Finalmente, construir un mensaje de salida firmado:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"const signedMessage = {\n  message: voluntaryExit,\n  signature,\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://gist.github.com/kolyasapphire/53dbdab35f1a033b0d37ddf582dce414",children:"Ejemplo Completo"})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"Se recomienda preparar todos los par\xe1metros necesarios (forks, epoch, etc.) con anticipaci\xf3n y comunicarse con Web3Signer de manera segura, por ejemplo, a trav\xe9s de una red segura sin otro acceso a internet."})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://consensys.github.io/web3signer/web3signer-eth2.html#tag/Signing",children:"Documentaci\xf3n de la API de Web3Signer"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>t});var s=a(6540);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);