"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[263],{771:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>d,metadata:()=>r,toc:()=>c});var s=a(4848),i=a(8453);const d={},o="Despliegue de Multisig",r={id:"gu\xedas/multisig-deployment",title:"Despliegue de Multisig",description:"Esta p\xe1gina est\xe1 muy desactualizada con el \xfaltimo lanzamiento de Lido V2.",source:"@site/docs/gu\xedas/multisig-deployment.md",sourceDirName:"gu\xedas",slug:"/gu\xedas/multisig-deployment",permalink:"/lido-docs-spanish/gu\xedas/multisig-deployment",draft:!1,unlisted:!1,editUrl:"https://github.com/adminseedlatam/lido-docs-spanish/edit/main/docs/gu\xedas/multisig-deployment.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Keys API",permalink:"/lido-docs-spanish/gu\xedas/kapi-guide"},next:{title:"Protocol levers",permalink:"/lido-docs-spanish/gu\xedas/protocol-levers"}},l={},c=[{value:"Preparaci\xf3n",id:"preparaci\xf3n",level:2},{value:"Pasos de despliegue",id:"pasos-de-despliegue",level:2},{value:"1. Despliegue de las implementaciones base y la plantilla",id:"1-despliegue-de-las-implementaciones-base-y-la-plantilla",level:2},{value:"Preparar el archivo de estado de la red",id:"preparar-el-archivo-de-estado-de-la-red",level:3},{value:"Generar archivos de datos de transacci\xf3n",id:"generar-archivos-de-datos-de-transacci\xf3n",level:3},{value:"Env\xedo de las transacciones",id:"env\xedo-de-las-transacciones",level:3},{value:"Actualizaci\xf3n del archivo de estado de la red",id:"actualizaci\xf3n-del-archivo-de-estado-de-la-red",level:3},{value:"2. Verificaci\xf3n de los contratos desplegados",id:"2-verificaci\xf3n-de-los-contratos-desplegados",level:2},{value:"3. Registro de un dominio ENS para Lido APM",id:"3-registro-de-un-dominio-ens-para-lido-apm",level:2},{value:"4. Despliegue de aplicaciones frontend de Lido",id:"4-despliegue-de-aplicaciones-frontend-de-lido",level:2},{value:"5. Despliegue de Lido APM",id:"5-despliegue-de-lido-apm",level:2},{value:"Usando Gnosis Safe",id:"usando-gnosis-safe",level:3},{value:"6. Verificaci\xf3n del APM desplegado",id:"6-verificaci\xf3n-del-apm-desplegado",level:2},{value:"7. Crear repositorios de aplicaciones APM",id:"7-crear-repositorios-de-aplicaciones-apm",level:2},{value:"8. Desplegar DAO y su token de gobernanza",id:"8-desplegar-dao-y-su-token-de-gobernanza",level:2},{value:"9. Verificar el DAO desplegado",id:"9-verificar-el-dao-desplegado",level:2},{value:"10. Emitir tokens de gobernanza del DAO",id:"10-emitir-tokens-de-gobernanza-del-dao",level:2},{value:"11. Finalizar el DAO",id:"11-finalizar-el-dao",level:2},{value:"12. Realizar las verificaciones finales",id:"12-realizar-las-verificaciones-finales",level:2}];function t(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"despliegue-de-multisig",children:"Despliegue de Multisig"}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["Esta p\xe1gina est\xe1 muy desactualizada con el \xfaltimo lanzamiento de ",(0,s.jsx)(n.a,{href:"https://github.com/lidofinance/lido-dao/releases/tag/v2.0.0",children:"Lido V2"}),"."]})}),"\n",(0,s.jsx)(n.p,{children:"Este tutorial describe el despliegue del DAO utilizando un firmante multisig/airgapped, paso a paso."}),"\n",(0,s.jsx)(n.h2,{id:"preparaci\xf3n",children:"Preparaci\xf3n"}),"\n",(0,s.jsx)(n.p,{children:"Clone el repositorio e instale las dependencias:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"$ git clone git@github.com:lidofinance/lido-dao.git\n$ cd lido-dao\n$ yarn\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Ejecutar los scripts de despliegue requiere una conexi\xf3n RPC a un cliente Ethereum, que puede configurarse\neditando el archivo ",(0,s.jsx)(n.code,{children:"hardhat.config.js"}),". Ya est\xe1 preconfigurado para utilizar el proveedor Infura,\nsimplemente copie ",(0,s.jsx)(n.code,{children:"accounts.sample.json"})," a ",(0,s.jsx)(n.code,{children:"accounts.json"})," y edite la clave ",(0,s.jsx)(n.code,{children:"infura"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "eth": {},\n  "infura": {\n    "projectId": "COLOQUE_SU_ID_DE_PROYECTO_AQU\xcd"\n  }\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Algunos pasos de despliegue (en particular, el despliegue de contratos) no pueden realizarse desde algunos\nproveedores de multisig y por lo tanto requieren enviar las transacciones desde una direcci\xf3n normal.\nEl repositorio proporciona una herramienta para hacerlo; si planea usarla, edite ",(0,s.jsx)(n.code,{children:"accounts.json"})," y coloque\nsu configuraci\xf3n de cuentas bajo la clave ",(0,s.jsx)(n.code,{children:"eth.<nombre-de-red>"}),". Si su cliente RPC proporciona una cuenta\ndesbloqueada, use ",(0,s.jsx)(n.code,{children:"remote"})," como valor (aqu\xed y m\xe1s adelante asumimos que la red de destino se llama ",(0,s.jsx)(n.code,{children:"mainnet"}),"):"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "eth": {\n    "mainnet": "remote"\n  },\n  "infura": {\n    "projectId": "COLOQUE_SU_ID_DE_PROYECTO_AQU\xcd"\n  }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Si planea usar una frase mnemot\xe9cnica BIP-44 en su lugar, use la siguiente forma de configuraci\xf3n:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "eth": {\n    "mainnet": {\n      "mnemonic": "SU_FRASE_MNEMOT\xc9CNICA_AQU\xcd",\n      "path": "m/44\'/60\'/0\'/0",\n      "initialIndex": 0,\n      "count": 1\n    }\n  },\n  "infura": {\n    "projectId": "COLOQUE_SU_ID_DE_PROYECTO_AQU\xcd"\n  }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Puede verificar la correcci\xf3n de la configuraci\xf3n listando las cuentas y sus saldos:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"$ yarn hardhat --network mainnet list-accts\n"})}),"\n",(0,s.jsx)(n.h2,{id:"pasos-de-despliegue",children:"Pasos de despliegue"}),"\n",(0,s.jsx)(n.p,{children:"El proceso de despliegue consta de varios pasos. Generalmente, despu\xe9s de cada paso se genera un conjunto de archivos de transacci\xf3n. Estas transacciones deben ejecutarse en orden secuencial: solo env\xede la siguiente transacci\xf3n despu\xe9s de que la anterior se haya incluido en un bloque. Despu\xe9s de que la \xfaltima transacci\xf3n de un paso en particular se incluya en un bloque, proceda al siguiente paso."}),"\n",(0,s.jsx)(n.p,{children:"Tambi\xe9n hay algunos pasos que no generan transacciones pero verifican la correcci\xf3n de los pasos anteriores."}),"\n",(0,s.jsx)(n.h2,{id:"1-despliegue-de-las-implementaciones-base-y-la-plantilla",children:"1. Despliegue de las implementaciones base y la plantilla"}),"\n",(0,s.jsx)(n.p,{children:"Lido utiliza contratos proxy actualizables como almacenamiento para el estado. Cada contrato proxy apunta a un contrato de implementaci\xf3n que proporciona el c\xf3digo que lee y modifica el estado del proxy. Los contratos de implementaci\xf3n pueden actualizarse mediante votaci\xf3n en el DAO. Las implementaciones son inmutables, solo se les permite modificar el estado del contrato llamante (es decir, el proxy)."}),"\n",(0,s.jsx)(n.p,{children:"Para configurar el protocolo, es necesario desplegar versiones iniciales de las implementaciones. Algunos vaults multisig populares, como Gnosis Safe, no admiten desplegar nuevos contratos, por lo que esto debe hacerse desde una direcci\xf3n normal."}),"\n",(0,s.jsxs)(n.p,{children:["Parte de la l\xf3gica de despliegue del protocolo est\xe1 incorporada en un contrato llamado ",(0,s.jsx)(n.code,{children:"LidoTemplate.sol"}),", que tambi\xe9n debe desplegarse antes de ejecutar los pasos siguientes."]}),"\n",(0,s.jsx)(n.h3,{id:"preparar-el-archivo-de-estado-de-la-red",children:"Preparar el archivo de estado de la red"}),"\n",(0,s.jsxs)(n.p,{children:["Los scripts de despliegue utilizan un archivo JSON llamado ",(0,s.jsx)(n.code,{children:"deployed-<nombre_de_red>.json"})," para leer el entorno inicial y la configuraci\xf3n del protocolo, y para almacenar datos que deben persistir entre los pasos de despliegue. Si un paso de despliegue requiere algo m\xe1s que el endpoint RPC y las cuentas ETH, debe especificarse en el archivo de estado de la red. Estos archivos est\xe1n destinados a ser agregados bajo el control de origen. Si falta alg\xfan dato en el archivo, el paso de despliegue fallar\xe1 con un error que indicar\xe1 exactamente qu\xe9 falta."]}),"\n",(0,s.jsx)(n.p,{children:"El primer paso requiere los siguientes valores:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"networkId"}),": identificaci\xf3n de la red"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ensAddress"}),": direcci\xf3n del registro ENS"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"daoFactoryAddress"}),": direcci\xf3n del contrato ",(0,s.jsx)(n.code,{children:"DAOFactory"})," de Aragon"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"apmRegistryFactoryAddress"}),": direcci\xf3n de ",(0,s.jsx)(n.code,{children:"APMRegistryFactory"})," de Aragon"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"miniMeTokenFactoryAddress"}),": direcci\xf3n de ",(0,s.jsx)(n.code,{children:"MiniMeTokenFactory"})," de Aragon"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"aragonIDAddress"}),": direcci\xf3n de ",(0,s.jsx)(n.code,{children:"FIFSResolvingRegistrar"})," de aragonID"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"multisigAddress"}),": la direcci\xf3n del contrato multisig que se utilizar\xe1 en los pasos siguientes para realizar el despliegue adicional"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Por ejemplo, un archivo de estado de red para ",(0,s.jsx)(n.code,{children:"mainnet"})," se llamar\xe1 ",(0,s.jsx)(n.code,{children:"deployed-mainnet.json"})," y inicialmente se ver\xe1 as\xed:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "networkId": 1,\n  "ensAddress": "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",\n  "daoFactoryAddress": "0x7378ad1ba8f3c8e64bbb2a04473edd35846360f1",\n  "apmRegistryFactoryAddress": "0xa0BC4B67F5FacDE4E50EAFF48691Cfc43F4E280A",\n  "miniMeTokenFactoryAddress": "0x909d05f384d0663ed4be59863815ab43b4f347ec",\n  "aragonIDAddress": "0x546aa2eae2514494eeadb7bbb35243348983c59d",\n  "multisigAddress": "SU_DIRECCI\xd3N_DE_CONTRATO_MULTISIG"\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Es importante destacar que configurar ",(0,s.jsx)(n.code,{children:"multisigAddress"})," correctamente es crucial: esta direcci\xf3n ser\xe1 la propietaria del contrato de plantilla desplegado, y solo esta direcci\xf3n podr\xe1 realizar los pasos de despliegue a partir del despliegue del APM de Lido (paso 5)."]}),"\n",(0,s.jsx)(n.h3,{id:"generar-archivos-de-datos-de-transacci\xf3n",children:"Generar archivos de datos de transacci\xf3n"}),"\n",(0,s.jsx)(n.p,{children:"Despu\xe9s de preparar los valores en el archivo de estado de la red, genere un conjunto de archivos JSON con datos de transacci\xf3n:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"$ yarn hardhat --network mainnet run ./scripts/multisig/01-deploy-lido-template-and-bases.js\n====================\nID de Red: 1\nLeyendo estado de red desde /Users/me/lido-dao/deployed-mainnet.json...\n====================\nGuardando datos de TX de despliegue para LidoTemplate en tx-01-1-deploy-template.json\nGuardando datos de TX de despliegue para Lido en tx-01-2-deploy-lido-base.json\nGuardando datos de TX de despliegue para LidoOracle en tx-01-3-deploy-oracle-base.json\nGuardando datos de TX de despliegue para NodeOperatorsRegistry en tx-01-4-deploy-nops-base.json\n====================\nAntes de continuar con el despliegue, por favor env\xede todas las transacciones de creaci\xf3n de contratos\nque pueda encontrar en los archivos mencionados anteriormente. Puede usar una direcci\xf3n multisig\nsi admite desplegar nuevas instancias de contrato.\n====================\nEscribiendo estado de red en /Users/me/lido-dao/deployed-mainnet.json...\n\xa1Todo listo!\n"})}),"\n",(0,s.jsx)(n.h3,{id:"env\xedo-de-las-transacciones",children:"Env\xedo de las transacciones"}),"\n",(0,s.jsxs)(n.p,{children:["Puede utilizar el ayudante ",(0,s.jsx)(n.code,{children:"tx"})," para enviar las transacciones desde los archivos. Admite las siguientes banderas:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--from"})," la direcci\xf3n del remitente"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--file"})," el archivo TX que puede contener los siguientes campos: ",(0,s.jsx)(n.code,{children:"to"}),", ",(0,s.jsx)(n.code,{children:"value"}),", ",(0,s.jsx)(n.code,{children:"data"}),", ",(0,s.jsx)(n.code,{children:"gas"}),", ",(0,s.jsx)(n.code,{children:"from"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--gas-price"})," precio del gas en wei (opcional)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--nonce"})," nonce del remitente (opcional)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--wait"})," el n\xfamero de segundos para esperar antes de enviar la transacci\xf3n (opcional, por defecto 5)"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Ejecute lo siguiente para desplegar las implementaciones y la plantilla:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"$ yarn hardhat --network mainnet tx --from $DEPLOYER --file tx-01-1-deploy-template.json\n$ yarn hardhat --network mainnet tx --from $DEPLOYER --file tx-01-2-deploy-lido-base.json\n$ yarn hardhat --network mainnet tx --from $DEPLOYER --file tx-01-3-deploy-oracle-base.json\n$ yarn hardhat --network mainnet tx --from $DEPLOYER --file tx-01-4-deploy-nops-base.json\n"})}),"\n",(0,s.jsx)(n.p,{children:"No es obligatorio utilizar este ayudante para enviar las transacciones definidas en los archivos generados; est\xe1 all\xed solo por conveniencia."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:'Este paso es una excepci\xf3n a la regla de "transacciones secuenciales": puede enviar las cuatro transacciones en paralelo desde direcciones diferentes.'}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"actualizaci\xf3n-del-archivo-de-estado-de-la-red",children:"Actualizaci\xf3n del archivo de estado de la red"}),"\n",(0,s.jsx)(n.p,{children:"Despu\xe9s de que las cuatro transacciones se incluyan en la cadena de bloques, actualice el archivo de estado de la red con los siguientes valores:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"daoTemplateDeployTx"}),": hash de la transacci\xf3n enviada desde el archivo ",(0,s.jsx)(n.code,{children:"tx-01-1-deploy-template.json"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"lidoBaseDeployTx"}),": hash de la transacci\xf3n enviada desde el archivo ",(0,s.jsx)(n.code,{children:"tx-01-2-deploy-lido-base.json"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"oracleBaseDeployTx"}),": hash de la transacci\xf3n enviada desde el archivo ",(0,s.jsx)(n.code,{children:"tx-01-3-deploy-oracle-base.json"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"nodeOperatorsRegistryBaseDeployTx"}),": hash de la transacci\xf3n enviada desde el archivo ",(0,s.jsx)(n.code,{children:"tx-01-4-deploy-nops-base.json"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"2-verificaci\xf3n-de-los-contratos-desplegados",children:"2. Verificaci\xf3n de los contratos desplegados"}),"\n",(0,s.jsx)(n.p,{children:"Ejecute lo siguiente:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"$ yarn hardhat --network mainnet run ./scripts/multisig/02-obtain-deployed-instances.js\n"})}),"\n",(0,s.jsx)(n.p,{children:"Este paso verificar\xe1 los contratos desplegados y agregar\xe1 los siguientes campos al archivo de estado de la red:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"daoTemplateAddress"}),": direcci\xf3n del contrato ",(0,s.jsx)(n.code,{children:"LidoTemplate"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"app:lido.baseAddress"}),": direcci\xf3n del contrato de implementaci\xf3n ",(0,s.jsx)(n.code,{children:"Lido"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"app:oracle.baseAddress"}),": direcci\xf3n del contrato de implementaci\xf3n ",(0,s.jsx)(n.code,{children:"LidoOracle"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"app:node-operators-registry.baseAddress"}),": direcci\xf3n del contrato de implementaci\xf3n ",(0,s.jsx)(n.code,{children:"NodeOperatorsRegistry"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"3-registro-de-un-dominio-ens-para-lido-apm",children:"3. Registro de un dominio ENS para Lido APM"}),"\n",(0,s.jsx)(n.p,{children:"Este dominio ENS es necesario para el Administrador de Paquetes de Aragon (APM) que el protocolo utilizar\xe1 para los mecanismos de actualizaci\xf3n. Antes de ejecutar este paso, agregue las siguientes claves al archivo de estado de la red:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"lidoApmEnsName"}),": el nombre ENS de segundo nivel que APM usar\xe1 para registrar paquetes"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"lidoApmEnsRegDurationSec"}),": la duraci\xf3n del arrendamiento del dominio en segundos"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Luego, ejecute:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"$ yarn hardhat --network mainnet run ./scripts/multisig/03-register-ens-domain.js\n...\n====================\nGuardando datos para la transacci\xf3n de confirmaci\xf3n en tx-02-1-commit-ens-registration.json (uso de gas proyectado es 53667)\nGuardando datos para la transacci\xf3n de registro en tx-02-2-make-ens-registration.json\n====================\nAntes de continuar con el despliegue, por favor env\xede todas las transacciones listadas arriba.\n\nAseg\xfarese de enviar la segunda transacci\xf3n al menos 60 segundos despu\xe9s de que\nla primera sea incluida en un bloque, pero no m\xe1s de 86400 segundos despu\xe9s de eso.\n====================\n"})}),"\n",(0,s.jsx)(n.p,{children:"Este paso generar\xe1 dos archivos de transacci\xf3n. Deber\xe1 enviar estas transacciones una despu\xe9s de otra, esperando al menos un minuto entre ellas:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"$ yarn hardhat --network mainnet tx --from $DEPLOYER --file tx-02-1-commit-ens-registration.json\n$ sleep 60\n$ yarn hardhat --network mainnet tx --from $DEPLOYER --file tx-02-2-make-ens-registration.json\n"})}),"\n",(0,s.jsx)(n.h2,{id:"4-despliegue-de-aplicaciones-frontend-de-lido",children:"4. Despliegue de aplicaciones frontend de Lido"}),"\n",(0,s.jsxs)(n.p,{children:["El DAO de Lido incluye aplicaciones frontend para la gobernanza del DAO y la gesti\xf3n del protocolo. Estas aplicaciones se despliegan en IPFS, por lo que necesitar\xe1 especificar la clave ",(0,s.jsx)(n.code,{children:"ipfsAPI"})," en el archivo de estado de la red apuntando a un endpoint de API de cliente IPFS, por ejemplo, ",(0,s.jsx)(n.code,{children:'"ipfsAPI": "http://localhost:5001/api/v0"'}),". Luego, ejecute lo siguiente:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"$ yarn hardhat --network mainnet run ./scripts/multisig/04-publish-app-frontends.js\n"})}),"\n",(0,s.jsx)(n.p,{children:"Aseg\xfarese de que el nodo IPFS que est\xe9 utilizando est\xe9 permanentemente activo y disponible p\xfablicamente, o que el contenido cargado est\xe9 anclado (pinned) a alg\xfan otro nodo p\xfablico permanente."}),"\n",(0,s.jsxs)(n.p,{children:["Este paso agregar\xe1 subclaves ",(0,s.jsx)(n.code,{children:"ipfsCid"})," y ",(0,s.jsx)(n.code,{children:"contentURI"})," para las tres aplicaciones de Lido (",(0,s.jsx)(n.code,{children:"app:lido"}),", ",(0,s.jsx)(n.code,{children:"app:oracle"}),", ",(0,s.jsx)(n.code,{children:"app:node-operators-registry"}),") en el archivo de estado de la red. La primera clave es el identificador IPFS para la entrada ra\xedz del frontend de la aplicaci\xf3n, y ",(0,s.jsx)(n.code,{children:"contentURI"})," es la misma clave codificada en un formato espec\xedfico de Aragon."]}),"\n",(0,s.jsx)(n.h2,{id:"5-despliegue-de-lido-apm",children:"5. Despliegue de Lido APM"}),"\n",(0,s.jsx)(n.p,{children:"Ejecute lo siguiente:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"$ yarn hardhat --network mainnet run ./scripts/multisig/05-deploy-apm.js\n...\n====================\nDominio padre: eth 0x93cdeb708b7545dc668eb9280176169d1c33cfd8ed6f04690a0bcc88a93fc4ae\nEtiqueta del subdominio: lidopm-pre 0x1353eb779a45ed66bdb49e45e006df81a69d9f73067e846003b5bb00984191d4\n====================\nGuardando datos para la transacci\xf3n de despliegue de APM en tx-03-deploy-apm.json (uso de gas proyectado es 6263517)\n====================\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Este paso generar\xe1 un archivo de transacci\xf3n; deber\xe1 enviar esta transacci\xf3n desde el contrato en ",(0,s.jsx)(n.code,{children:"multisigAddress"}),". Despu\xe9s de que la transacci\xf3n se incluya en un bloque, pase al siguiente paso."]}),"\n",(0,s.jsx)(n.h3,{id:"usando-gnosis-safe",children:"Usando Gnosis Safe"}),"\n",(0,s.jsxs)(n.p,{children:["Si est\xe1 utilizando Gnosis Safe, puede hacer esto eligiendo ",(0,s.jsx)(n.code,{children:"Nueva Transacci\xf3n > Interacci\xf3n con Contrato"})," y habilitando la opci\xf3n ",(0,s.jsx)(n.code,{children:"Usar datos personalizados (codificados en hexadecimal)"})," en el cuadro de di\xe1logo que aparece. Luego, copie el contenido del campo ",(0,s.jsx)(n.code,{children:"to"})," del archivo JSON de transacci\xf3n al campo ",(0,s.jsx)(n.code,{children:"Destinatario*"}),", el contenido del campo ",(0,s.jsx)(n.code,{children:"value"})," al campo ",(0,s.jsx)(n.code,{children:"Valor*"})," (ingrese ",(0,s.jsx)(n.code,{children:"0"})," si no hay una clave ",(0,s.jsx)(n.code,{children:"value"})," en el archivo de transacci\xf3n), y el contenido del campo ",(0,s.jsx)(n.code,{children:"data"})," al campo ",(0,s.jsx)(n.code,{children:"Datos (codificados en hexadecimal)*"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Aseg\xfarese de verificar el l\xedmite de gas de la transacci\xf3n: Gnosis Safe a menudo lo establece demasiado bajo. Como regla general, config\xfarelo al valor del campo ",(0,s.jsx)(n.code,{children:"gas"})," en el archivo JSON de transacci\xf3n m\xe1s ",(0,s.jsx)(n.code,{children:"1500000"})," (el gas adicional se usa para manejar la l\xf3gica multisig)."]}),"\n",(0,s.jsx)(n.h2,{id:"6-verificaci\xf3n-del-apm-desplegado",children:"6. Verificaci\xf3n del APM desplegado"}),"\n",(0,s.jsx)(n.p,{children:"Ejecute lo siguiente:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"$ yarn hardhat --network mainnet run ./scripts/multisig/06-obtain-deployed-apm.js\n"})}),"\n",(0,s.jsx)(n.p,{children:"Aseg\xfarese de que finalice sin errores y pase al siguiente paso. Se agregar\xe1 el siguiente campo al archivo de estado de la red:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"lidoApmAddress"}),": la direcci\xf3n del APM de Lido que controla el dominio ENS ",(0,s.jsx)(n.code,{children:"lidoApmEnsName"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"7-crear-repositorios-de-aplicaciones-apm",children:"7. Crear repositorios de aplicaciones APM"}),"\n",(0,s.jsx)(n.p,{children:"Ejecute lo siguiente:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"yarn hardhat --network mainnet run ./scripts/multisig/07-create-app-repos.js\n...\n====================\nGuardando datos para la transacci\xf3n createRepos en tx-04-create-app-repos.json (uso de gas proyectado es 7160587)\n====================\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Este paso generar\xe1 un archivo de transacci\xf3n; deber\xe1 enviar esta transacci\xf3n desde el contrato en ",(0,s.jsx)(n.code,{children:"multisigAddress"}),". Despu\xe9s de que la transacci\xf3n se incluya en un bloque, pase al siguiente paso."]}),"\n",(0,s.jsx)(n.h2,{id:"8-desplegar-dao-y-su-token-de-gobernanza",children:"8. Desplegar DAO y su token de gobernanza"}),"\n",(0,s.jsxs)(n.p,{children:["Este paso desplegar\xe1 las instancias del DAO y del token de gobernanza. Deber\xe1 agregar un campo llamado ",(0,s.jsx)(n.code,{children:"daoInitialSettings"})," al archivo de estado de la red antes de ejecutar el paso:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'  // ...\n  "daoInitialSettings": {\n    // Nombre/s\xedmbolo del token de gobernanza; no se puede cambiar despu\xe9s del despliegue\n    "token": {\n      "name": "Lido DAO Token",\n      "symbol": "LDO"\n    },\n    // Especificaci\xf3n de la cadena de beacons; puede cambiarse mediante votaci\xf3n en el DAO\n    "beaconSpec": {\n      "depositContractAddress": "0x00000000219ab540356cBB839Cbe05303d7705Fa",\n      "slotsPerEpoch": 32,\n      "secondsPerSlot": 12,\n      "genesisTime": 1606824023,\n      "epochsPerFrame": 225 // Los or\xe1culos de Lido reportan una vez por cada epochsPerFrame epochs\n    },\n    // Configuraci\xf3n de votaci\xf3n del DAO (app Aragon Voting)\n    "voting": {\n      "minSupportRequired": "500000000000000000", // 1e18 === 100%\n      "minAcceptanceQuorum": "50000000000000000", // 1e18 === 100%\n      "voteDuration": 172800 // en segundos\n    },\n    // Configuraci\xf3n de tarifas del protocolo; puede cambiarse mediante votaci\xf3n en el DAO\n    "fee": {\n      "totalPercent": 10,\n      "treasuryPercent": 0,\n      "insurancePercent": 50,\n      "nodeOperatorsPercent": 50\n    }\n  }\n  // ...\n'})}),"\n",(0,s.jsx)(n.p,{children:"Luego, ejecute lo siguiente:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"$ yarn hardhat --network mainnet run ./scripts/multisig/08-deploy-dao.js\n...\nGuardando datos para la transacci\xf3n newDAO en tx-05-deploy-dao.json (uso de gas proyectado es 7118882)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Env\xede la transacci\xf3n generada desde el contrato en ",(0,s.jsx)(n.code,{children:"multisigAddress"}),". Despu\xe9s de que la transacci\xf3n se incluya en un bloque, pase al siguiente paso."]}),"\n",(0,s.jsx)(n.h2,{id:"9-verificar-el-dao-desplegado",children:"9. Verificar el DAO desplegado"}),"\n",(0,s.jsx)(n.p,{children:"Ejecute lo siguiente:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"yarn hardhat --network mainnet run ./scripts/multisig/09-obtain-deployed-dao.js\n"})}),"\n",(0,s.jsx)(n.p,{children:"Aseg\xfarese de que finalice sin errores y pase al siguiente paso. Los siguientes campos se agregar\xe1n al archivo de estado de la red:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"daoAddress"}),": la direcci\xf3n de la instancia del DAO;"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"daoTokenAddress"}),": la direcci\xf3n del token de gobernanza del DAO;"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"proxyAddress"}),": claves bajo las claves ",(0,s.jsx)(n.code,{children:"app:*"}),": direcciones de las instancias de las aplicaciones."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"10-emitir-tokens-de-gobernanza-del-dao",children:"10. Emitir tokens de gobernanza del DAO"}),"\n",(0,s.jsxs)(n.p,{children:["Agregue la clave ",(0,s.jsx)(n.code,{children:"vestingParams"})," al archivo de estado de la red que contenga lo siguiente:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'  // ...\n  "vestingParams": {\n    // Tokens no vestidos ser\xe1n retenidos en la aplicaci\xf3n DAO Agent\n    "unvestedTokensAmount": "10000000000000000000000",\n    // Direcciones de los titulares de tokens y sus respectivas cantidades\n    "holders": {\n      "0xaabbcc0000000000000000000000000000000000": "100000000000000000000",\n      // ...\n    },\n    // Fecha de inicio del vesting\n    "start": 1608213253,\n    // Fecha del umbral del vesting\n    "cliff": 1608213253,\n    // Fecha de finalizaci\xf3n del vesting\n    "end": 1608501253,\n    // Si los vestings pueden ser revocados por el DAO\n    "revokable": false\n    // Ver https://github.com/aragon/aragon-apps/blob/master/apps/token-manager/contracts/TokenManager.sol\n  }\n  // ...\n'})}),"\n",(0,s.jsx)(n.p,{children:"Luego, ejecute lo siguiente:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"yarn hardhat --network mainnet run ./scripts/multisig/10-issue-tokens.js\n...\n====================\nTotal de lotes: 2\nGuardando datos para la transacci\xf3n issueTokens (lote 1) en tx-06-1-issue-tokens.json (uso de gas proyectado es 6478755)\nGuardando datos para la transacci\xf3n issueTokens (lote 2) en tx-06-2-issue-tokens.json\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Env\xede las transacciones generadas secuencialmente desde el contrato en ",(0,s.jsx)(n.code,{children:"multisigAddress"}),", esperando a que la primera sea incluida en un bloque antes de enviar la segunda. Despu\xe9s de que la segunda transacci\xf3n se incluya en un bloque, pase al siguiente paso."]}),"\n",(0,s.jsx)(n.h2,{id:"11-finalizar-el-dao",children:"11. Finalizar el DAO"}),"\n",(0,s.jsxs)(n.p,{children:["Agregue la clave ",(0,s.jsx)(n.code,{children:"daoAragonId"})," al archivo de estado de la red, estableci\xe9ndola como un nombre bajo el cual el DAO ser\xe1 registrado en aragonID, es decir, ",(0,s.jsx)(n.code,{children:"<daoAragonId>.aragonid.eth"})," resolver\xe1 a ",(0,s.jsx)(n.code,{children:"daoAddress"}),". Luego, ejecute lo siguiente:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"yarn hardhat --network mainnet run ./scripts/multisig/11-finalize-dao.js\n...\n====================\nGuardando datos para la transacci\xf3n finalizeDAO en tx-07-finalize-dao.json (uso de gas proyectado es 5011582)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Env\xede la transacci\xf3n generada desde el contrato en ",(0,s.jsx)(n.code,{children:"multisigAddress"}),". Despu\xe9s de que la transacci\xf3n se incluya en un bloque, pase al siguiente paso."]}),"\n",(0,s.jsx)(n.h2,{id:"12-realizar-las-verificaciones-finales",children:"12. Realizar las verificaciones finales"}),"\n",(0,s.jsx)(n.p,{children:"En este punto, el DAO est\xe1 completamente desplegado. Ejecute lo siguiente para verificar la correcci\xf3n de la configuraci\xf3n y la configuraci\xf3n de permisos:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"yarn hardhat --network mainnet run ./scripts/multisig/12-check-dao.js\n"})}),"\n",(0,s.jsx)(n.p,{children:"Si hay alg\xfan error, se imprimir\xe1 y se cancelar\xe1n las verificaciones adicionales. Este paso solo requiere que los siguientes campos est\xe9n definidos en el archivo de estado de la red:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ensAddress"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"lidoApmEnsName"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"daoAragonId"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"vestingParams"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"daoInitialSettings"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"daoTemplateAddress"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>r});var s=a(6540);const i={},d=s.createContext(i);function o(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);