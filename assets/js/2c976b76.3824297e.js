"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2505],{4929:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var s=n(4848),d=n(8453);const r={},o="Claves del Validador",i={id:"gu\xedas/node-operators/validator-keys",title:"Claves del Validador",description:"Las claves del validador se agregan en varios pasos secuenciales. Estos pasos son similares cada vez que se a\xf1aden nuevas claves.",source:"@site/docs/gu\xedas/node-operators/validator-keys.md",sourceDirName:"gu\xedas/node-operators",slug:"/gu\xedas/node-operators/validator-keys",permalink:"/gu\xedas/node-operators/validator-keys",draft:!1,unlisted:!1,editUrl:"https://github.com/adminseedlatam/lido-docs-spanish/edit/main/docs/gu\xedas/node-operators/validator-keys.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"general-overview",permalink:"/gu\xedas/node-operators/general-overview"},next:{title:"Configuraci\xf3n de Recompensas de Capa de Ejecuci\xf3n",permalink:"/gu\xedas/node-operators/el-rewards-configuration"}},l={},c=[{value:"Generaci\xf3n de Claves de Firma",id:"generaci\xf3n-de-claves-de-firma",level:2},{value:"Credenciales de Retiro",id:"credenciales-de-retiro",level:3},{value:"Uso de staking-deposit-cli",id:"uso-de-staking-deposit-cli",level:3},{value:"Validaci\xf3n de las Claves",id:"validaci\xf3n-de-las-claves",level:2},{value:"Env\xedo de las Claves",id:"env\xedo-de-las-claves",level:2},{value:"Uso de la Interfaz de Usuario para enviar m\xfaltiples claves",id:"uso-de-la-interfaz-de-usuario-para-enviar-m\xfaltiples-claves",level:3},{value:"Verificaci\xf3n de las Claves de Todos los Operadores de Nodo de Lido",id:"verificaci\xf3n-de-las-claves-de-todos-los-operadores-de-nodo-de-lido",level:2},{value:"Lido CLI",id:"lido-cli",level:3},{value:"Panel de Operadores de Nodo de Lido",id:"panel-de-operadores-de-nodo-de-lido",level:3},{value:"Resultados",id:"resultados",level:3},{value:"No se ven claves inv\xe1lidas",id:"no-se-ven-claves-inv\xe1lidas",level:4},{value:"Se detectan claves inv\xe1lidas",id:"se-detectan-claves-inv\xe1lidas",level:4},{value:"Aumento de los L\xedmites de Staking con una Propuesta de Easy Track",id:"aumento-de-los-l\xedmites-de-staking-con-una-propuesta-de-easy-track",level:2}];function t(e){const a={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h1,{id:"claves-del-validador",children:"Claves del Validador"}),"\n",(0,s.jsx)(a.p,{children:"Las claves del validador se agregan en varios pasos secuenciales. Estos pasos son similares cada vez que se a\xf1aden nuevas claves."}),"\n",(0,s.jsx)(a.h2,{id:"generaci\xf3n-de-claves-de-firma",children:"Generaci\xf3n de Claves de Firma"}),"\n",(0,s.jsxs)(a.p,{children:["Una vez incluido en el protocolo, un Operador de Nodo debe generar y enviar un conjunto de claves p\xfablicas ",(0,s.jsx)(a.a,{href:"https://ethresear.ch/t/pragmatic-signature-aggregation-with-bls/2105",children:"BLS12-381"}),". Estas claves ser\xe1n utilizadas por el protocolo para depositar ether en el ",(0,s.jsx)(a.a,{href:"https://etherscan.io/address/0x00000000219ab540356cBB839Cbe05303d7705Fa",children:"DepositContract de Ethereum"}),". Junto con las claves, el Operador de Nodo env\xeda un conjunto de firmas correspondientes ",(0,s.jsx)(a.a,{href:"https://github.com/ethereum/annotated-spec/blob/master/phase0/beacon-chain.md#depositmessage",children:"como se define en la especificaci\xf3n"}),". El ",(0,s.jsx)(a.code,{children:"DepositMessage"})," utilizado para generar la firma debe cumplir con los siguientes par\xe1metros:"]}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.code,{children:"pubkey"}),": Derivado de la clave privada utilizada para firmar el mensaje."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.code,{children:"amount"}),": Debe ser igual a 32 ether."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.code,{children:"withdrawal_credentials"}),": Debe coincidir con las credenciales de retiro establecidas por la DAO."]}),"\n"]}),"\n",(0,s.jsx)(a.h3,{id:"credenciales-de-retiro",children:"Credenciales de Retiro"}),"\n",(0,s.jsxs)(a.p,{children:["Aseg\xfarese de obtener la direcci\xf3n de retiro correcta encontr\xe1ndola dentro de las credenciales de retiro activas utilizando ",(0,s.jsx)(a.a,{href:"/contracts/staking-router#getwithdrawalcredentials",children:(0,s.jsx)(a.code,{children:"StakingRouter.getWithdrawalCredentials()"})}),"."]}),"\n",(0,s.jsxs)(a.p,{children:["Por ejemplo, las credenciales de retiro ",(0,s.jsx)(a.code,{children:"0x010000000000000000000000b9d7934878b5fb9610b3fe8a5e441e8fad7e293f"})," significan que la direcci\xf3n de retiro es ",(0,s.jsx)(a.code,{children:"0xb9d7934878b5fb9610b3fe8a5e441e8fad7e293f"}),". Para Mainnet, verifique siempre que la direcci\xf3n sea correcta utilizando un ",(0,s.jsx)(a.a,{href:"https://etherscan.io/address/0xb9d7934878b5fb9610b3fe8a5e441e8fad7e293f",children:"explorador"})," - ver\xe1 que fue desplegada desde el desplegador de Lido."]}),"\n",(0,s.jsx)(a.h3,{id:"uso-de-staking-deposit-cli",children:"Uso de staking-deposit-cli"}),"\n",(0,s.jsxs)(a.p,{children:["Utilice la \xfaltima versi\xf3n de ",(0,s.jsx)(a.a,{href:"https://github.com/ethereum/staking-deposit-cli/releases",children:(0,s.jsx)(a.code,{children:"staking-deposit-cli"})}),"."]}),"\n",(0,s.jsx)(a.p,{children:"Ejemplo de uso del comando:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sh",children:"./deposit new-mnemonic --folder . --num_validators 123 --mnemonic_language english --chain mainnet --eth1_withdrawal_address 0x123\n"})}),"\n",(0,s.jsxs)(a.p,{children:["Aqu\xed, ",(0,s.jsx)(a.code,{children:"chain"})," es uno de los nombres de cadena disponibles (ejecute el comando con la bandera ",(0,s.jsx)(a.code,{children:"--help"})," para ver los valores posibles: ",(0,s.jsx)(a.code,{children:"./deposit new-mnemonic --help"}),") y ",(0,s.jsx)(a.code,{children:"eth1_withdrawal_address"})," es la direcci\xf3n de retiro seg\xfan la documentaci\xf3n del protocolo."]}),"\n",(0,s.jsxs)(a.p,{children:["Como resultado de ejecutar esto, se crear\xe1 el directorio ",(0,s.jsx)(a.code,{children:"validator_keys"})," en el directorio de trabajo actual. Contendr\xe1 un archivo de datos de dep\xf3sito llamado ",(0,s.jsx)(a.code,{children:"deposit-data-*.json"})," y una serie de almacenes de claves privadas llamados ",(0,s.jsx)(a.code,{children:"keystore-*.json"}),", estos \xfaltimos encriptados con la contrase\xf1a solicitada al ejecutar el comando."]}),"\n",(0,s.jsxs)(a.p,{children:["Si opta por utilizar la interfaz de usuario para enviar las claves, deber\xe1 pasar los datos JSON encontrados en el archivo de datos de dep\xf3sito al protocolo (ver la siguiente secci\xf3n). Si lo desea, puede eliminar cualquier otro campo excepto ",(0,s.jsx)(a.code,{children:"pubkey"})," y ",(0,s.jsx)(a.code,{children:"signature"})," de los elementos del array."]}),"\n",(0,s.jsx)(a.p,{children:"Nunca comparta la mnemot\xe9cnica generada ni sus claves privadas con nadie, incluidos los miembros del protocolo y los titulares de la DAO."}),"\n",(0,s.jsx)(a.h2,{id:"validaci\xf3n-de-las-claves",children:"Validaci\xf3n de las Claves"}),"\n",(0,s.jsx)(a.p,{children:"Por favor, aseg\xfarese de verificar la validez de las claves antes de enviarlas a la cadena."}),"\n",(0,s.jsx)(a.p,{children:"El subidor de Lido tiene funcionalidad de validaci\xf3n incorporada; las claves se verificar\xe1n antes de enviarlas."}),"\n",(0,s.jsx)(a.p,{children:"Si va a enviar claves manualmente a trav\xe9s del contrato de Lido, puede utilizar Lido CLI. Es un paquete Python que puede instalar con pip:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sh",children:"pip install lido-cli\nlido-cli --rpc http://1.2.3.4:8545 validate_file_keys --file keys.json\n"})}),"\n",(0,s.jsx)(a.p,{children:"Necesitar\xe1 un punto final RPC: un nodo local / proveedor de RPC (por ejemplo, Alchemy/Infura)."}),"\n",(0,s.jsx)(a.h2,{id:"env\xedo-de-las-claves",children:"Env\xedo de las Claves"}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"Tenga en cuenta que la direcci\xf3n de retiro debe agregarse al Registro de Operadores de Nodo de Lido antes de poder enviar las claves de firma. Agregar una direcci\xf3n al Registro de Operadores de Nodo sucede a trav\xe9s de votaci\xf3n de la DAO. Al proporcionar la direcci\xf3n de retiro para que se agregue al Registro de Operadores de Nodo, tenga en cuenta lo siguiente:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"Es la direcci\xf3n que recibir\xe1 las recompensas."}),"\n",(0,s.jsx)(a.li,{children:"Es la direcci\xf3n que utilizar\xe1 para enviar claves a Lido."}),"\n",(0,s.jsx)(a.li,{children:"Debe poder acceder a ella en cualquier momento en caso de emergencia."}),"\n",(0,s.jsx)(a.li,{children:"Puede usar multi-firma si lo desea."}),"\n",(0,s.jsx)(a.li,{children:"No podr\xe1 reemplazarla por otra direcci\xf3n/multi-firma m\xe1s tarde."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(a.p,{children:["Despu\xe9s de generar las claves, un Operador de Nodo las env\xeda al protocolo. Para hacer esto, env\xedan una transacci\xf3n desde la direcci\xf3n de retiro del Operador de Nodo al contrato ",(0,s.jsx)(a.code,{children:"NodeOperatorsRegistry"}),", llamando a la funci\xf3n [",(0,s.jsx)(a.code,{children:"addSigningKeys"}),"] con los siguientes argumentos:"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{children:"* `uint256 _nodeOperatorId`: el n\xfamero de secuencia basado en cero del operador en la lista;\n* `uint256 _keysCount`: el n\xfamero de claves que se env\xedan;\n* `bytes _publicKeys`: las claves concatenadas;\n* `bytes _signatures`: las firmas concatenadas.\n"})}),"\n",(0,s.jsxs)(a.p,{children:["Puede obtener la direcci\xf3n del contrato ",(0,s.jsx)(a.code,{children:"NodeOperatorsRegistry"})," llamando a la funci\xf3n ",(0,s.jsx)(a.a,{href:"https://github.com/lidofinance/lido-dao/blob/971ac8f/contracts/0.4.24/Lido.sol#L361",children:(0,s.jsx)(a.code,{children:"getOperators()"})})," en la instancia del contrato ",(0,s.jsx)(a.code,{children:"Lido"}),". El ABI del contrato ",(0,s.jsx)(a.code,{children:"NodeOperatorsRegistry"})," se puede encontrar en la p\xe1gina correspondiente del contrato en Etherscan o en ",(0,s.jsx)(a.code,{children:"***-abi.zip"})," de la \xfaltima versi\xf3n en la ",(0,s.jsx)(a.a,{href:"https://github.com/lidofinance/lido-dao/releases",children:"p\xe1gina de lanzamientos de lido-dao en GitHub"}),"."]}),"\n",(0,s.jsxs)(a.p,{children:["El identificador del operador para una direcci\xf3n de recompensa dada se puede obtener llamando sucesivamente a ",(0,s.jsx)(a.a,{href:"https://github.com/lidofinance/lido-dao/blob/971ac8f/contracts/0.4.24/nos/NodeOperatorsRegistry.sol#L335",children:(0,s.jsx)(a.code,{children:"NodeOperatorsRegistry.getNodeOperator"})})," con el argumento ",(0,s.jsx)(a.code,{children:"_id"})," creciente hasta que se obtenga el operador con la direcci\xf3n de recompensa coincidente."]}),"\n",(0,s.jsx)(a.p,{children:"P\xe1ginas de Etherscan para los contratos Hole\u0161ky:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.a,{href:"https://holesky.etherscan.io/address/0x3F1c547b21f65e10480dE3ad8E19fAAC46C95034#readProxyContract",children:(0,s.jsx)(a.code,{children:"Lido"})})}),"\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.a,{href:"https://holesky.etherscan.io/address/0x595F64Ddc3856a3b5Ff4f4CC1d1fb4B46cFd2bAC",children:(0,s.jsx)(a.code,{children:"NodeOperatorsRegistry"})})}),"\n"]}),"\n",(0,s.jsx)(a.p,{children:"P\xe1ginas de Etherscan para los contratos de Mainnet:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.a,{href:"https://etherscan.io/address/0xae7ab96520de3a18e5e111b5eaab095312d7fe84#readProxyContract",children:(0,s.jsx)(a.code,{children:"Lido"})})}),"\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.a,{href:"https://etherscan.io/address/0x55032650b14df07b85bf18a3a3ec8e0af2e028d5#readProxyContract",children:(0,s.jsx)(a.code,{children:"NodeOperatorsRegistry"})})}),"\n"]}),"\n",(0,s.jsx)(a.h3,{id:"uso-de-la-interfaz-de-usuario-para-enviar-m\xfaltiples-claves",children:"Uso de la Interfaz de Usuario para enviar m\xfaltiples claves"}),"\n",(0,s.jsx)(a.p,{children:"Lido proporciona interfaces de usuario para la presentaci\xf3n de claves: [Interfaz web de Mainnet para enviar claves] y [Interfaz web de Testnet para enviar claves]."}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"Subidor",src:n(7106).A+"",width:"1960",height:"1560"})}),"\n",(0,s.jsxs)(a.p,{children:["Si ha utilizado ",(0,s.jsx)(a.code,{children:"staking-deposit-cli"}),", puede pegar el contenido del archivo generado ",(0,s.jsx)(a.code,{children:"deposit-data-*.json"})," tal cual."]}),"\n",(0,s.jsx)(a.p,{children:"De lo contrario, prepare un JSON con la siguiente estructura y p\xe9guelo en el \xe1rea de texto que aparecer\xe1 en el centro de la pantalla:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-json",children:'[\n  {\n    "pubkey": "PUBLIC_KEY_1",\n    "withdrawal_credentials": "WITHDRAWAL_CREDENTIALS_1",\n    "amount": 32000000000,\n    "signature": "SIGNATURE_1",\n    "fork_version": "FORK_VERSION_1",\n    "eth2_network_name": "ETH2_NETWORK_NAME_1",\n    "deposit_message_root": "DEPOSIT_MESSAGE_ROOT_1",\n    "deposit_data_root": "DEPOSIT_DATA_ROOT_1"\n  },\n  {\n    "pubkey": "PUBLIC_KEY_2",\n    "withdrawal_credentials": "WITHDRAWAL_CREDENTIALS_2",\n    "amount": 32000000000,\n    "signature": "SIGNATURE_2",\n    "fork_version": "FORK_VERSION_2",\n    "eth2_network_name": "ETH2_NETWORK_NAME_2",\n    "deposit_message_root": "DEPOSIT_MESSAGE_ROOT_2",\n    "deposit_data_root": "DEPOSIT_DATA_ROOT_2"\n  }\n]\n'})}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{children:'\nEsta herramienta dividir\xe1 autom\xe1ticamente las claves en fragmentos y enviar\xe1 las transacciones a su billetera para su aprobaci\xf3n. Las transacciones vendr\xe1n una por una para ser firmadas. Desafortunadamente, no podemos enviar un gran n\xfamero de claves en una sola transacci\xf3n. Actualmente, el tama\xf1o del fragmento es de 50 claves, cerca del l\xedmite de gas por bloque.\n\nConecte su billetera, haga clic en el bot\xf3n `Validar`, la interfaz realizar\xe1 las comprobaciones requeridas. Luego, haga clic en el bot\xf3n `Enviar claves`.\n\nActualmente, admitimos los siguientes conectores:\n\n- MetaMask y billeteras inyectadas similares\n- Wallet Connect\n- Gnosis Safe\n- Ledger HQ\n\nSi desea usar Gnosis, hay dos formas de conectar:\n\n- Agregue esta aplicaci\xf3n como una [aplicaci\xf3n personalizada] en su caja fuerte.\n- [Use WalletConnect] para conectarse a su caja fuerte.\n\nAl enviar un formulario, las claves se guardan en su navegador. Esta herramienta verifica los nuevos env\xedos de claves contra la lista previamente guardada para evitar duplicaciones. Por lo tanto, es importante usar un solo navegador para enviar.\n\n[interfaz web de mainnet para enviar claves]: https://operators.lido.fi/submitter\n[interfaz web de testnet para enviar claves]: https://operators.testnet.fi/submitter\n[aplicaci\xf3n personalizada]: https://help.gnosis-safe.io/en/articles/4022030-add-a-custom-safe-app\n[use walletconnect]: https://help.gnosis-safe.io/en/articles/4356253-walletconnect-safe-app\n\n## Importaci\xf3n de las Claves a un Cliente Validador de Lighthouse\n\nSi ha utilizado `staking-deposit-cli` bifurcado para generar las claves, puede importarlas a un cliente validador de Lighthouse ejecutando este comando:\n\n```sh\ndocker run --rm -it \\\n --name validator_keys_import \\\n -v "$KEYS_DIR":/root/validator_keys \\\n -v "$DATA_DIR":/root/.lighthouse \\\n sigp/lighthouse \\\n lighthouse account validator import \\\n --reuse-password \\\n --network "$TESTNET_NAME" \\\n --datadir /root/.lighthouse/data \\\n --directory /root/validator_keys\n'})}),"\n",(0,s.jsx)(a.h2,{id:"verificaci\xf3n-de-las-claves-de-todos-los-operadores-de-nodo-de-lido",children:"Verificaci\xf3n de las Claves de Todos los Operadores de Nodo de Lido"}),"\n",(0,s.jsx)(a.p,{children:"La verificaci\xf3n de claves funciona con datos en cadena. Aseg\xfarese de que las transacciones de env\xedo de claves se confirmen antes de verificar las claves."}),"\n",(0,s.jsx)(a.p,{children:"Nunca vote por aumentar los l\xedmites de claves de los Operadores de Nodo antes de verificar que las claves nuevas est\xe9n presentes y sean v\xe1lidas."}),"\n",(0,s.jsx)(a.h3,{id:"lido-cli",children:"Lido CLI"}),"\n",(0,s.jsx)(a.p,{children:"Aseg\xfarese de que Python con pip est\xe9 instalado y luego ejecute:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sh",children:"pip install lido-cli\nlido-cli --rpc http://1.2.3.4:8545 validate_network_keys --details\n"})}),"\n",(0,s.jsx)(a.p,{children:"Esta operaci\xf3n verifica todas las claves de Lido para su validez. Este es un proceso intensivo en CPU; por ejemplo, un escritorio moderno con 6 n\xfacleos, 12 hilos y un buen sistema de enfriamiento procesa 1,000 claves en 1-2 segundos."}),"\n",(0,s.jsx)(a.p,{children:"Necesitar\xe1 un punto final RPC: un nodo local / proveedor de RPC (por ejemplo, Alchemy/Infura)."}),"\n",(0,s.jsx)(a.h3,{id:"panel-de-operadores-de-nodo-de-lido",children:"Panel de Operadores de Nodo de Lido"}),"\n",(0,s.jsxs)(a.p,{children:["Tambi\xe9n puede verificar las claves cargadas en el ",(0,s.jsx)(a.a,{href:"https://operators.lido.fi",children:"Panel de Operadores de Nodo de Lido de Mainnet"})," o en el ",(0,s.jsx)(a.a,{href:"https://operators.testnet.fi",children:"Panel de Operadores de Nodo de Lido de Testnet"}),"."]}),"\n",(0,s.jsx)(a.p,{children:"Esta interfaz muestra el n\xfamero de claves enviadas, aprobadas y v\xe1lidas para cada Operador de Nodo, junto con todas las claves inv\xe1lidas en caso de haber alguna."}),"\n",(0,s.jsx)(a.p,{children:"Se actualiza cada 30 minutos mediante cron, pero el per\xedodo de actualizaci\xf3n puede cambiar en el futuro."}),"\n",(0,s.jsx)(a.h3,{id:"resultados",children:"Resultados"}),"\n",(0,s.jsx)(a.h4,{id:"no-se-ven-claves-inv\xe1lidas",children:"No se ven claves inv\xe1lidas"}),"\n",(0,s.jsx)(a.p,{children:"Si las nuevas claves est\xe1n presentes y son v\xe1lidas, los Operadores de Nodo pueden votar para aumentar el l\xedmite de claves para el Operador de Nodo."}),"\n",(0,s.jsx)(a.h4,{id:"se-detectan-claves-inv\xe1lidas",children:"Se detectan claves inv\xe1lidas"}),"\n",(0,s.jsx)(a.p,{children:"Es urgente notificar al equipo de Lido y a otros Operadores de Nodo lo antes posible. Por ejemplo, en el chat grupal."}),"\n",(0,s.jsx)(a.h2,{id:"aumento-de-los-l\xedmites-de-staking-con-una-propuesta-de-easy-track",children:"Aumento de los L\xedmites de Staking con una Propuesta de Easy Track"}),"\n",(0,s.jsx)(a.p,{children:"Una vez que las nuevas claves est\xe9n presentes y sean v\xe1lidas, se puede proponer una moci\xf3n para aumentar el l\xedmite de staking para el Operador de Nodo."}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.a,{href:"https://docs.lido.fi/guides/easy-track-guide#node-operators-guide-to-easy-track",children:"Gu\xeda de Operadores de Nodo para Easy Track"})})]})}function p(e={}){const{wrapper:a}={...(0,d.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}},7106:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/submitter-ae65872a11fb812735416eb5c61f2c84.png"},8453:(e,a,n)=>{n.d(a,{R:()=>o,x:()=>i});var s=n(6540);const d={},r=s.createContext(d);function o(e){const a=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),s.createElement(r.Provider,{value:a},e.children)}}}]);