"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9773],{8251:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var s=o(4848),r=o(8453);const a={},i="Manual del Operador del Or\xe1culo",d={id:"gu\xedas/oracle-operator-manual",title:"Manual del Operador del Or\xe1culo",description:"Este documento est\xe1 destinado a aquellos que desean participar en el protocolo Lido como entidad que ejecuta un demonio para sincronizar el estado desde la Capa Beacon hasta la Capa de Ejecuci\xf3n del protocolo. Debido a la falta de comunicaci\xf3n nativa entre estas dos redes, Lido emplea una red de or\xe1culos para sincronizar el sistema en intervalos regulares.",source:"@site/docs/gu\xedas/oracle-operator-manual.md",sourceDirName:"gu\xedas",slug:"/gu\xedas/oracle-operator-manual",permalink:"/gu\xedas/oracle-operator-manual",draft:!1,unlisted:!1,editUrl:"https://github.com/adminseedlatam/lido-docs-spanish/edit/main/docs/gu\xedas/oracle-operator-manual.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Configuraci\xf3n y Configuraci\xf3n de Herramientas",permalink:"/gu\xedas/node-operators/exits/tooling-setup"},next:{title:"Or\xe1culo contable",permalink:"/gu\xedas/oracle-spec/accounting-oracle"}},l={},c=[{value:"TL;DR",id:"tldr",level:2},{value:"Introducci\xf3n",id:"introducci\xf3n",level:2},{value:"Fases del Or\xe1culo",id:"fases-del-or\xe1culo",level:2},{value:"Fase 1. Env\xedo de un hash de informe y alcanzar consenso",id:"fase-1-env\xedo-de-un-hash-de-informe-y-alcanzar-consenso",level:3},{value:"Fase 2. Env\xedo de datos del informe",id:"fase-2-env\xedo-de-datos-del-informe",level:3},{value:"Fase 3. Env\xedo de datos adicionales del informe",id:"fase-3-env\xedo-de-datos-adicionales-del-informe",level:3},{value:"Membres\xeda del Comit\xe9",id:"membres\xeda-del-comit\xe9",level:2},{value:"Requisitos Previos",id:"requisitos-previos",level:2},{value:"Nodo Cliente de Ejecuci\xf3n",id:"nodo-cliente-de-ejecuci\xf3n",level:3},{value:"Nodo Cliente de Consenso",id:"nodo-cliente-de-consenso",level:3},{value:"Servicio de API de Keys",id:"servicio-de-api-de-keys",level:3},{value:"El daemon del Or\xe1culo",id:"el-daemon-del-or\xe1culo",level:2},{value:"Variables de entorno",id:"variables-de-entorno",level:3},{value:"Direcci\xf3n del Lido Locator",id:"direcci\xf3n-del-lido-locator",level:3},{value:"Ejecuci\xf3n del daemon",id:"ejecuci\xf3n-del-daemon",level:3},{value:"M\xe9tricas y Alertas",id:"m\xe9tricas-y-alertas",level:3}];function t(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"manual-del-operador-del-or\xe1culo",children:"Manual del Operador del Or\xe1culo"}),"\n",(0,s.jsx)(n.p,{children:"Este documento est\xe1 destinado a aquellos que desean participar en el protocolo Lido como entidad que ejecuta un demonio para sincronizar el estado desde la Capa Beacon hasta la Capa de Ejecuci\xf3n del protocolo. Debido a la falta de comunicaci\xf3n nativa entre estas dos redes, Lido emplea una red de or\xe1culos para sincronizar el sistema en intervalos regulares."}),"\n",(0,s.jsx)(n.h2,{id:"tldr",children:"TL;DR"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Genera una direcci\xf3n Ethereum."}),"\n",(0,s.jsx)(n.li,{children:"Inicia y sincroniza un nodo de Capa de Ejecuci\xf3n (archivado durante al menos 2 semanas) con el endpoint JSON-RPC habilitado."}),"\n",(0,s.jsx)(n.li,{children:"Inicia y sincroniza un nodo de Capa de Consenso (archivado) con el endpoint de API habilitado."}),"\n",(0,s.jsx)(n.li,{children:"Inicia el servicio de la API de Keys."}),"\n",(0,s.jsx)(n.li,{children:"Inicia los m\xf3dulos de contabilidad y ejector del Or\xe1culo."}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Opcional:"})," A\xf1ade alertas a las m\xe9tricas de Prometheus del Or\xe1culo."]}),"\n",(0,s.jsxs)(n.li,{children:["En caso de mainnet, comparte tu direcci\xf3n e intenci\xf3n de unirte al conjunto del Or\xe1culo de forma p\xfablica. Debes publicarlo en Twitter y tambi\xe9n escribir un mensaje con el enlace de Twitter bajo la publicaci\xf3n de Onboarding en ",(0,s.jsx)(n.a,{href:"https://research.lido.fi/",children:"el foro de Investigaci\xf3n"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Proporciona tu direcci\xf3n Ethereum del Or\xe1culo al equipo de Lido para que vote por agregar tu direcci\xf3n al conjunto de miembros del Or\xe1culo."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"introducci\xf3n",children:"Introducci\xf3n"}),"\n",(0,s.jsx)(n.p,{children:"El mecanismo Or\xe1culo de Lido comprende tres componentes principales. El primer componente es el conjunto de contratos inteligentes de Or\xe1culo, que recibe informes de actualizaci\xf3n de los or\xe1culos y los transmite al contrato Lido para ejecutar las acciones necesarias basadas en los cambios reportados. El segundo componente es el demonio or\xe1culo fuera de la cadena, ejecutado por cada nodo or\xe1culo y responsable de monitorear el estado del protocolo y generar informes de actualizaci\xf3n. El tercer componente es la red de nodos inform\xe1ticos que ejecutan los miembros del or\xe1culo, que proporcionan colectivamente la informaci\xf3n necesaria para que el contrato inteligente Or\xe1culo calcule el nuevo estado del protocolo."}),"\n",(0,s.jsx)(n.p,{children:"Bas\xe1ndose en los informes de actualizaci\xf3n recibidos de los or\xe1culos, el contrato inteligente Lido realiza transiciones de estado como actualizar los saldos de los usuarios, procesar solicitudes de retiro y distribuir recompensas a los operadores de nodos. As\xed, el mecanismo Or\xe1culo de Lido act\xfaa como un dispositivo de sincronizaci\xf3n que conecta el protocolo a trav\xe9s de las capas de ejecuci\xf3n y consenso. Garantiza que el protocolo se actualice de manera oportuna y precisa, permitiendo el funcionamiento fluido y eficiente de todo el sistema Lido."}),"\n",(0,s.jsxs)(n.p,{children:["Los dos contratos principales en el suite Or\xe1culo de Lido se llaman ",(0,s.jsx)(n.a,{href:"/contracts/accounting-oracle",children:"AccountingOr\xe1culo"})," y ",(0,s.jsx)(n.a,{href:"/contracts/validators-exit-bus-oracle",children:"ValidatorsExitBus"}),". Juntos, estos contratos recopilan informaci\xf3n presentada por los or\xe1culos sobre el estado de los validadores y sus saldos, la cantidad de fondos acumulados en las b\xf3vedas del protocolo, el n\xfamero de solicitudes de retiro que el protocolo puede procesar y los validadores que se espera que salgan voluntariamente para finalizar m\xe1s solicitudes de retiro. Esta informaci\xf3n se utiliza luego para procesos cruciales como:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Rebasar los saldos de los usuarios."}),"\n",(0,s.jsx)(n.li,{children:"Distribuir recompensas a los operadores de nodos."}),"\n",(0,s.jsx)(n.li,{children:"Procesar solicitudes de retiro."}),"\n",(0,s.jsx)(n.li,{children:"Decidir qu\xe9 validadores deben iniciar la salida voluntaria."}),"\n",(0,s.jsx)(n.li,{children:"Distribuir la participaci\xf3n."}),"\n",(0,s.jsx)(n.li,{children:"Poner el protocolo en modo b\xfanker."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"fases-del-or\xe1culo",children:"Fases del Or\xe1culo"}),"\n",(0,s.jsxs)(n.p,{children:["Para enviar los datos del informe por parte del operador del or\xe1culo tanto a ",(0,s.jsx)(n.code,{children:"AccountingOr\xe1culo"})," como a ",(0,s.jsx)(n.code,{children:"ValidatorsExitBusOr\xe1culo"}),", es necesario que:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Este operador participe en el comit\xe9 del or\xe1culo, y"}),"\n",(0,s.jsx)(n.li,{children:"Se debe alcanzar un consenso para el informe correspondiente."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"El proceso de enviar los datos del informe se puede dividir en 3 etapas principales:"}),"\n",(0,s.jsx)(n.h3,{id:"fase-1-env\xedo-de-un-hash-de-informe-y-alcanzar-consenso",children:"Fase 1. Env\xedo de un hash de informe y alcanzar consenso"}),"\n",(0,s.jsxs)(n.p,{children:["En la primera etapa, los operadores del or\xe1culo recopilan un informe para un determinado ",(0,s.jsx)(n.code,{children:"refSlot"})," y env\xedan el hash al contrato ",(0,s.jsx)(n.code,{children:"HashConsensus"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["El diagrama siguiente muestra:\n",(0,s.jsx)(n.code,{children:"ReportProcessor"})," - Contrato ",(0,s.jsx)(n.code,{children:"AccountingOr\xe1culo"})," o ",(0,s.jsx)(n.code,{children:"ValidatorsExitBusOr\xe1culo"}),".\n",(0,s.jsx)(n.code,{children:"HashConsensus"})," - Un contrato que gestiona el comit\xe9 de miembros del or\xe1culo y permite a los miembros alcanzar consenso sobre el hash de datos particular para cada marco de informe."]}),"\n",(0,s.jsxs)(n.p,{children:["Puedes leer m\xe1s sobre ",(0,s.jsx)(n.code,{children:"HashConsensus"})," ",(0,s.jsx)(n.a,{href:"/contracts/hash-consensus",children:"aqu\xed"}),"."]}),"\n",(0,s.jsx)(n.mermaid,{value:"graph LR;\n\n  O1[Or\xe1culo 1] --submitReport--\x3e HashConsensus;\n  O2[Or\xe1culo N] --submitReport--\x3e HashConsensus;\n\n  subgraph or\xe1culos\n  O1\n  O2\n  end\n\n  HashConsensus--\x3e|evento ReportReceived| B{\xbfConsenso alcanzado?}\n  B --\x3e|S\xed| cns[/submitReportForProcessing/]--\x3eReportProcessor\n  B --\x3e|No| prev[/check prevConsensusLost/]"}),"\n",(0,s.jsx)(n.h3,{id:"fase-2-env\xedo-de-datos-del-informe",children:"Fase 2. Env\xedo de datos del informe"}),"\n",(0,s.jsxs)(n.p,{children:["Cuando se alcanza el consenso, uno de los operadores del or\xe1culo env\xeda los datos del informe y activa la actualizaci\xf3n del estado central del protocolo (incluido el rebase del token, la distribuci\xf3n de recompensas a los operadores de nodos, la finalizaci\xf3n de solicitudes de retiro y la decisi\xf3n de entrar en el modo b\xfanker) o emite eventos ",(0,s.jsx)(n.code,{children:"ValidatorExitRequest"})," para informar a los operadores de nodos sobre las nuevas solicitudes de salida voluntaria necesarias para realizar."]}),"\n",(0,s.jsx)(n.mermaid,{value:"graph LR;\n\n  O1[Or\xe1culo 1] --submitReportData--\x3e ReportContract;\n  ReportContract --\x3e B{\xbfConsenso alcanzado?}\n  B--\x3e|S\xed| handleConsensusReportData"}),"\n",(0,s.jsx)(n.h3,{id:"fase-3-env\xedo-de-datos-adicionales-del-informe",children:"Fase 3. Env\xedo de datos adicionales del informe"}),"\n",(0,s.jsxs)(n.p,{children:["Este paso es necesario para ",(0,s.jsx)(n.code,{children:"AccountingOr\xe1culo"}),", que implica la distribuci\xf3n de recompensas para m\xf3dulos de staking en esta fase."]}),"\n",(0,s.jsx)(n.mermaid,{value:"graph LR;\n\n  O1[Or\xe1culo 1] --\x3eB{\xbfdatos adicionales?};\n  B--\x3eS\xed\n  B--\x3eNo\n\n  S\xed --\x3e|submitReportExtraDataList| AccountingOr\xe1culo\n  No --\x3e|submitReportExtraDataEmpty| AccountingOr\xe1culo\n\n  subgraph or\xe1culo\n  O1\n  B\n  S\xed\n  No\n  end\n"}),"\n",(0,s.jsx)(n.h2,{id:"membres\xeda-del-comit\xe9",children:"Membres\xeda del Comit\xe9"}),"\n",(0,s.jsx)(n.p,{children:"El conjunto actual de Or\xe1culo consta de 9 participantes:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Chorus One ",(0,s.jsx)(n.code,{children:"0x140bd8fbdc884f48da7cb1c09be8a2fadfea776e"})]}),"\n",(0,s.jsxs)(n.li,{children:["Staking Facilities ",(0,s.jsx)(n.code,{children:"0x404335bce530400a5814375e7ec1fb55faff3ea2"})]}),"\n",(0,s.jsxs)(n.li,{children:["stakefish ",(0,s.jsx)(n.code,{children:"0x946d3b081ed19173dc83cd974fc69e1e760b7d78"})]}),"\n",(0,s.jsxs)(n.li,{children:["P2P Validator ",(0,s.jsx)(n.code,{children:"0x007de4a5f7bc37e2f26c0cb2e8a95006ee9b89b5"})]}),"\n",(0,s.jsxs)(n.li,{children:["Rated ",(0,s.jsx)(n.a,{href:"https://research.lido.fi/t/expansion-of-lidos-ethereum-Or%C3%A1culo-set/2836/49",children:"0xec4bfbaf681eb505b94e4a7849877dc6c600ca3a"})]}),"\n",(0,s.jsxs)(n.li,{children:["bloXroute ",(0,s.jsx)(n.a,{href:"https://research.lido.fi/t/expansion-of-lidos-ethereum-Or%C3%A1culo-set/2836/54",children:"0x61c91ECd902EB56e314bB2D5c5C07785444Ea1c8"})]}),"\n",(0,s.jsxs)(n.li,{children:["Instadapp ",(0,s.jsx)(n.a,{href:"https://research.lido.fi/t/expansion-of-lidos-ethereum-Or%C3%A1culo-set/2836/53",children:"0x1ca0fec59b86f549e1f1184d97cb47794c8af58d"})]}),"\n",(0,s.jsxs)(n.li,{children:["Kyber Network ",(0,s.jsx)(n.a,{href:"https://research.lido.fi/t/expansion-of-lidos-ethereum-Or%C3%A1culo-set/2836/52",children:"0xA7410857ABbf75043d61ea54e07D57A6EB6EF186"})]}),"\n",(0,s.jsxs)(n.li,{children:["ChainLayer ",(0,s.jsx)(n.a,{href:"https://research.lido.fi/t/expansion-of-lidos-ethereum-Or%C3%A1culo-set/2836/69",children:"0xc79F702202E3A6B0B6310B537E786B9ACAA19BAf"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"El qu\xf3rum es 5/9. Esto significa que la finalizaci\xf3n del informe solo puede ocurrir cuando hay 5 informes id\xe9nticos de 5 miembros de or\xe1culos diferentes."}),"\n",(0,s.jsxs)(n.p,{children:["Consulta ",(0,s.jsx)(n.a,{href:"https://research.lido.fi/t/expansion-of-lidos-ethereum-Or%C3%A1culo-set/2836",children:"Expansion of Lido on Ethereum Or\xe1culo set"})," para m\xe1s detalles."]}),"\n",(0,s.jsx)(n.h2,{id:"requisitos-previos",children:"Requisitos Previos"}),"\n",(0,s.jsx)(n.h3,{id:"nodo-cliente-de-ejecuci\xf3n",children:"Nodo Cliente de Ejecuci\xf3n"}),"\n",(0,s.jsx)(n.p,{children:"Para preparar el informe, el Or\xe1culo recupera hasta 10 d\xedas de eventos antigu"}),"\n",(0,s.jsx)(n.p,{children:"os, realiza solicitudes hist\xf3ricas de datos de saldo y genera informes simulados en bloques hist\xf3ricos. Esto requiere un nodo de ejecuci\xf3n archivado con al menos dos semanas de datos archivados."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Cliente"}),(0,s.jsx)(n.th,{children:"Probado"}),(0,s.jsx)(n.th,{children:"Notas"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://geth.ethereum.org/",children:"Geth"})}),(0,s.jsx)(n.td,{}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"--gcmode=archive"})," ",(0,s.jsx)("br",{})," ",(0,s.jsx)(n.code,{children:"--syncmode=snap"})," ",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"O",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)(n.code,{children:"--gcmode=archive"}),(0,s.jsx)("br",{}),(0,s.jsx)(n.code,{children:"--syncmode=full"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://nethermind.io/",children:"Nethermind"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"No probado a\xfan"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://besu.hyperledger.org/en/stable/",children:"Besu"})}),(0,s.jsx)(n.td,{}),(0,s.jsxs)(n.td,{children:["Usar ",(0,s.jsx)("br",{})," ",(0,s.jsx)(n.code,{children:"--rpc-max-logs-range=100000"})," ",(0,s.jsx)("br",{})," ",(0,s.jsx)(n.code,{children:"--sync-mode=FULL"})," ",(0,s.jsx)("br",{})," ",(0,s.jsx)(n.code,{children:'--data-storage-format="FOREST"'})," ",(0,s.jsx)("br",{})," ",(0,s.jsx)(n.code,{children:"--pruning-enabled"})," ",(0,s.jsx)("br",{}),(0,s.jsx)(n.code,{children:"--pruning-blocks-retained=100000"})," ",(0,s.jsx)("br",{})," par\xe1metros"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://github.com/ledgerwatch/erigon",children:"Erigon"})}),(0,s.jsx)(n.td,{}),(0,s.jsxs)(n.td,{children:["Usar ",(0,s.jsx)("br",{})," ",(0,s.jsx)(n.code,{children:"--prune=htc"})," ",(0,s.jsx)("br",{})," ",(0,s.jsx)(n.code,{children:"--prune.h.before=100000"})," ",(0,s.jsx)("br",{})," ",(0,s.jsx)(n.code,{children:"--prune.t.before=100000"})," ",(0,s.jsx)("br",{})," ",(0,s.jsx)(n.code,{children:"--prune.c.before=100000"})," ",(0,s.jsx)("br",{})," par\xe1metros"]})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"nodo-cliente-de-consenso",children:"Nodo Cliente de Consenso"}),"\n",(0,s.jsx)(n.p,{children:"Para calcular algunas m\xe9tricas para el modo b\xfanker, Or\xe1culo necesita un nodo de consenso archivado."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Cliente"}),(0,s.jsx)(n.th,{children:"Probado"}),(0,s.jsx)(n.th,{children:"Notas"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://lighthouse.sigmaprime.io/",children:"Lighthouse"})}),(0,s.jsx)(n.td,{}),(0,s.jsxs)(n.td,{children:["Usar el par\xe1metro ",(0,s.jsx)(n.code,{children:"--reconstruct-historic-states"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://nethermind.io/",children:"Lodestar"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"No probado a\xfan"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://nimbus.guide/quick-start.html",children:"Nimbus"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"No probado a\xfan"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://github.com/ledgerwatch/erigon",children:"Prysm"})}),(0,s.jsx)(n.td,{}),(0,s.jsxs)(n.td,{children:["Usar ",(0,s.jsx)("br",{})," ",(0,s.jsx)(n.code,{children:"--grpc-max-msg-size=104857600"})," ",(0,s.jsx)("br",{})," ",(0,s.jsx)(n.code,{children:"--enable-historical-state-representation=true"})," ",(0,s.jsx)("br",{})," ",(0,s.jsx)(n.code,{children:"--slots-per-archive-point=1024"})," ",(0,s.jsx)("br",{})," par\xe1metros"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://docs.teku.consensys.net",children:"Teku"})}),(0,s.jsx)(n.td,{}),(0,s.jsxs)(n.td,{children:["Usar ",(0,s.jsx)("br",{})," ",(0,s.jsx)(n.code,{children:"--data-storage-mode=archive"})," ",(0,s.jsx)("br",{}),(0,s.jsx)(n.code,{children:"--data-storage-archive-frequency=1024"}),(0,s.jsx)("br",{})," ",(0,s.jsx)(n.code,{children:"--reconstruct-historic-states=true"}),(0,s.jsx)("br",{})," par\xe1metros"]})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"servicio-de-api-de-keys",children:"Servicio de API de Keys"}),"\n",(0,s.jsx)(n.p,{children:"Este es un servicio separado que utiliza el cliente de ejecuci\xf3n para recuperar todas las claves de Lido. Almacena el estado m\xe1s reciente de las claves de Lido en la base de datos."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/lidofinance/lido-keys-api",children:"Repositorio de Lido Keys API"})}),"\n",(0,s.jsx)(n.h2,{id:"el-daemon-del-or\xe1culo",children:"El daemon del Or\xe1culo"}),"\n",(0,s.jsx)(n.p,{children:"El daemon Or\xe1culo es una aplicaci\xf3n en Python que contiene dos m\xf3dulos:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"M\xf3dulo de contabilidad"}),"\n",(0,s.jsx)(n.li,{children:"M\xf3dulo ejector"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["El c\xf3digo fuente del Or\xe1culo est\xe1 disponible en ",(0,s.jsx)(n.a,{href:"https://github.com/lidofinance/lido-Or%C3%A1culo",children:"https://github.com/lidofinance/lido-Or\xe1culo"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Los m\xf3dulos obtienen el slot reportable, y si este slot est\xe1 finalizado, calculan y env\xedan el informe a los contratos inteligentes AccountingOr\xe1culo y ExitBusOr\xe1culo."}),"\n",(0,s.jsx)(n.h3,{id:"variables-de-entorno",children:"Variables de entorno"}),"\n",(0,s.jsx)(n.p,{children:"El daemon Or\xe1culo requiere las siguientes variables de entorno:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Requeridas"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"EXECUTION_CLIENT_URI"})," - lista de URI del cliente de ejecuci\xf3n separados por coma. El segundo y siguientes URI se usar\xe1n como respaldo."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"CONSENSUS_CLIENT_URI"})," - lista de URI del cliente de consenso separados por coma. El segundo y siguientes URI se usar\xe1n como respaldo."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"KEYS_API_URI"})," - lista de URI del cliente de API de Keys separados por coma. El segundo y siguientes URI se usar\xe1n como respaldo."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"LIDO_LOCATOR_ADDRESS"})," - direcci\xf3n del contrato inteligente Lido Locator."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Opcional"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Uno de:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"MEMBER_PRIV_KEY"})," - Clave privada de la cuenta de miembro del Or\xe1culo."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"MEMBER_PRIV_KEY_FILE"})," - Ruta al archivo que contiene la clave privada de la cuenta de miembro del Or\xe1culo."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Se puede encontrar una lista completa ",(0,s.jsx)(n.a,{href:"https://github.com/lidofinance/lido-Or%C3%A1culo#env-variables",children:"aqu\xed"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"direcci\xf3n-del-lido-locator",children:"Direcci\xf3n del Lido Locator"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Mainnet"}),"\n",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"https://etherscan.io/address/0xC1d0b3DE6792Bf6b4b37EccdcC24e45978Cfd2Eb",children:"0xC1d0b3DE6792Bf6b4b37EccdcC24e45978Cfd2Eb"})})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Hole\u0161ky"}),"\n",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"https://holesky.etherscan.io/address/0x28FAB2059C713A7F9D8c86Db49f9bb0e96Af1ef8",children:"0x28FAB2059C713A7F9D8c86Db49f9bb0e96Af1ef8"})})]}),"\n",(0,s.jsx)(n.h3,{id:"ejecuci\xf3n-del-daemon",children:"Ejecuci\xf3n del daemon"}),"\n",(0,s.jsx)(n.p,{children:"Iniciar el m\xf3dulo de contabilidad"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'docker run -d --name lido-Or\xe1culo-accounting \\\n  --env "EXECUTION_CLIENT_URI=$EXECUTION_CLIENT_URI" \\\n  --env "CONSENSUS_CLIENT_URI=$CONSENSUS_CLIENT_URI" \\\n  --env "KEYS_API_URI=$KEYS_API_URI" \\\n  --env "LIDO_LOCATOR_ADDRESS=$LOCATOR_ADDRESS" \\\n  --env "MEMBER_PRIV_KEY=$MEMBER_PRIV_KEY" \\\n  lidofinance/Or\xe1culo@<hash de la imagen> accounting\n'})}),"\n",(0,s.jsx)(n.p,{children:"Iniciar el m\xf3dulo ejector"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'docker run -d --name lido-Or\xe1culo-ejector \\\n  --env "EXECUTION_CLIENT_URI=$EXECUTION_CLIENT_URI" \\\n  --env "CONSENSUS_CLIENT_URI=$CONSENSUS_CLIENT_URI" \\\n  --env "KEYS_API_URI=$KEYS_API_URI" \\\n  --env "LIDO_LOCATOR_ADDRESS=$LOCATOR_ADDRESS" \\\n  --env "MEMBER_PRIV_KEY=$MEMBER_PRIV_KEY" \\\n  lidofinance/Or\xe1culo@<hash de la imagen> ejector\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Hash de la imagen m\xe1s reciente"}),"\n",(0,s.jsx)(n.a,{href:"https://docs.lido.fi/guides/tooling/#Or%C3%A1culo",children:"https://docs.lido.fi/gu\xedas/tooling/#Or\xe1culo"})]}),"\n",(0,s.jsxs)(n.p,{children:["Esto iniciar\xe1 el Or\xe1culo en modo daemon. Tambi\xe9n puedes ejecutarlo en modo puntual, por ejemplo, si prefieres activar la ejecuci\xf3n del Or\xe1culo como un trabajo ",(0,s.jsx)(n.code,{children:"cron"}),". En este caso, establece la variable de entorno ",(0,s.jsx)(n.code,{children:"DAEMON"})," en 0."]}),"\n",(0,s.jsx)(n.h3,{id:"m\xe9tricas-y-alertas",children:"M\xe9tricas y Alertas"}),"\n",(0,s.jsxs)(n.p,{children:["C\xf3mo configurar alertas y detalles sobre m\xe9tricas se pueden encontrar ",(0,s.jsx)(n.a,{href:"https://github.com/lidofinance/lido-Or%C3%A1culo#alerts",children:"aqu\xed"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>d});var s=o(6540);const r={},a=s.createContext(r);function i(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);