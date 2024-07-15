"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8168],{7175:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=s(4848),d=s(8453);const r={},a="Palancas del Protocolo",o={id:"gu\xedas/protocol-levers",title:"Palancas del Protocolo",description:"El protocolo proporciona una serie de ajustes controlables por la DAO. Modificar cada uno de ellos requiere que el llamante tenga un permiso espec\xedfico. Despu\xe9s de implementar la DAO, todos los permisos pertenecen a las aplicaciones DAO Voting o Agent, las cuales tambi\xe9n pueden gestionarlos. Esto significa que, inicialmente, las palancas solo pueden ser modificadas mediante votaci\xf3n de la DAO, y otras entidades solo pueden permitirse lo mismo como resultado de esa votaci\xf3n.",source:"@site/docs/gu\xedas/protocol-levers.md",sourceDirName:"gu\xedas",slug:"/gu\xedas/protocol-levers",permalink:"/lido-docs-spanish/gu\xedas/protocol-levers",draft:!1,unlisted:!1,editUrl:"https://github.com/adminseedlatam/lido-docs-spanish/edit/main/docs/gu\xedas/protocol-levers.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Despliegue de Multisig",permalink:"/lido-docs-spanish/gu\xedas/multisig-deployment"},next:{title:"Votaci\xf3n en la DAO con Etherscan",permalink:"/lido-docs-spanish/gu\xedas/etherscan-voting"}},l={},c=[{value:"Nota sobre la capacidad de actualizaci\xf3n",id:"nota-sobre-la-capacidad-de-actualizaci\xf3n",level:3},{value:"Lido",id:"lido",level:2},{value:"Quema de tokens stETH",id:"quema-de-tokens-steth",level:3},{value:"Pausa",id:"pausa",level:3},{value:"Anular el contador de validadores depositados",id:"anular-el-contador-de-validadores-depositados",level:3},{value:"Informe del or\xe1culo",id:"informe-del-or\xe1culo",level:3},{value:"Control de acceso al dep\xf3sito",id:"control-de-acceso-al-dep\xf3sito",level:3},{value:"L\xedmite de iteraci\xf3n del bucle de dep\xf3sito",id:"l\xedmite-de-iteraci\xf3n-del-bucle-de-dep\xf3sito",level:3},{value:"Recompensas de la capa de ejecuci\xf3n",id:"recompensas-de-la-capa-de-ejecuci\xf3n",level:3},{value:"Limitaci\xf3n de la tasa de staking",id:"limitaci\xf3n-de-la-tasa-de-staking",level:3},{value:"StakingRouter",id:"stakingrouter",level:2},{value:"Tarifa",id:"tarifa",level:3},{value:"Distribuci\xf3n de la tarifa",id:"distribuci\xf3n-de-la-tarifa",level:3},{value:"Credenciales de retiro de Ethereum",id:"credenciales-de-retiro-de-ethereum",level:3},{value:"NodeOperatorsRegistry",id:"nodeoperatorsregistry",level:2},{value:"Lista de Operadores de Nodos",id:"lista-de-operadores-de-nodos",level:3},{value:"Desactivaci\xf3n de un operador de nodo",id:"desactivaci\xf3n-de-un-operador-de-nodo",level:3},{value:"Gesti\xf3n de las claves de firma del operador de nodo",id:"gesti\xf3n-de-las-claves-de-firma-del-operador-de-nodo",level:3},{value:"Reporte de nuevos validadores detenidos",id:"reporte-de-nuevos-validadores-detenidos",level:3},{value:"LegacyOracle",id:"legacyoracle",level:2},{value:"Lido",id:"lido-1",level:3},{value:"Lista de miembros",id:"lista-de-miembros",level:3},{value:"El qu\xf3rum",id:"el-qu\xf3rum",level:3},{value:"Verificaci\xf3n de integridad",id:"verificaci\xf3n-de-integridad",level:3},{value:"Estado actual de los informes",id:"estado-actual-de-los-informes",level:3},{value:"Epoch esperado",id:"epoch-esperado",level:3},{value:"Versi\xf3n del contrato",id:"versi\xf3n-del-contrato",level:3},{value:"Especificaci\xf3n de Beacon",id:"especificaci\xf3n-de-beacon",level:3},{value:"Epoch actual",id:"epoch-actual",level:3},{value:"Informaci\xf3n adicional del epoch",id:"informaci\xf3n-adicional-del-epoch",level:3},{value:"\xdaltimo epoch completado",id:"\xfaltimo-epoch-completado",level:3},{value:"Informaci\xf3n adicional de recompensas",id:"informaci\xf3n-adicional-de-recompensas",level:3}];function t(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"palancas-del-protocolo",children:"Palancas del Protocolo"}),"\n",(0,i.jsxs)(n.p,{children:["El protocolo proporciona una serie de ajustes controlables por la DAO. Modificar cada uno de ellos requiere que el llamante tenga un permiso espec\xedfico. Despu\xe9s de implementar la DAO, todos los permisos pertenecen a las aplicaciones DAO ",(0,i.jsx)(n.code,{children:"Voting"})," o ",(0,i.jsx)(n.code,{children:"Agent"}),", las cuales tambi\xe9n pueden gestionarlos. Esto significa que, inicialmente, las palancas solo pueden ser modificadas mediante votaci\xf3n de la DAO, y otras entidades solo pueden permitirse lo mismo como resultado de esa votaci\xf3n."]}),"\n",(0,i.jsx)(n.p,{children:"A continuaci\xf3n se enumeran todas las palancas existentes, agrupadas por contrato."}),"\n",(0,i.jsx)(n.h3,{id:"nota-sobre-la-capacidad-de-actualizaci\xf3n",children:"Nota sobre la capacidad de actualizaci\xf3n"}),"\n",(0,i.jsx)(n.p,{children:"Los siguientes contratos pueden ser actualizables mediante votaci\xf3n de la DAO:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/contracts/lido-locator",children:(0,i.jsx)(n.code,{children:"LidoLocator"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/contracts/lido",children:(0,i.jsx)(n.code,{children:"Lido"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/contracts/staking-router",children:(0,i.jsx)(n.code,{children:"StakingRouter"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/contracts/node-operators-registry",children:(0,i.jsx)(n.code,{children:"NodeOperatorsRegistry"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/contracts/accounting-oracle",children:(0,i.jsx)(n.code,{children:"AccountingOracle"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/contracts/validators-exit-bus-oracle",children:(0,i.jsx)(n.code,{children:"ValidatorsExitBusOracle"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/contracts/withdrawal-vault",children:(0,i.jsx)(n.code,{children:"WithdrawalVault"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/contracts/withdrawal-queue-erc721",children:(0,i.jsx)(n.code,{children:"WithdrawalQueueERC721"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/contracts/legacy-oracle",children:(0,i.jsx)(n.code,{children:"LegacyOracle"})})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["La capacidad de actualizaci\xf3n est\xe1 implementada ya sea mediante el kernel y los contratos base de Aragon o mediante instancias de ",(0,i.jsx)(n.a,{href:"/contracts/ossifiable-proxy",children:"OssifiableProxy"}),".\nPara actualizar una aplicaci\xf3n de Aragon, se necesita el permiso ",(0,i.jsx)(n.code,{children:"dao.APP_MANAGER_ROLE"})," proporcionado por Aragon.\nPara actualizar una implementaci\xf3n de ",(0,i.jsx)(n.code,{children:"OssifiableProxy"}),", se necesita ser propietario del proxy.\nComo se mencion\xf3 anteriormente, ambos pertenecen a las aplicaciones DAO ",(0,i.jsx)(n.code,{children:"Voting"})," o ",(0,i.jsx)(n.code,{children:"Agent"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Todos los contratos actualizables utilizan el ",(0,i.jsx)(n.a,{href:"https://blog.openzeppelin.com/upgradeability-using-unstructured-storage",children:"patr\xf3n de almacenamiento no estructurado"})," para proporcionar una estructura de almacenamiento estable a trav\xe9s de las actualizaciones."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Algunos de los contratos todav\xeda contienen datos de almacenamiento estructurado, por lo que el orden de herencia siempre es importante."})}),"\n",(0,i.jsx)(n.h2,{id:"lido",children:(0,i.jsx)(n.a,{href:"/contracts/lido",children:"Lido"})}),"\n",(0,i.jsx)(n.h3,{id:"quema-de-tokens-steth",children:"Quema de tokens stETH"}),"\n",(0,i.jsxs)(n.p,{children:["Existe un contrato dedicado responsable de la quema de tokens ",(0,i.jsx)(n.code,{children:"stETH"}),".\nLa quema en s\xed misma es parte de los procedimientos centrales del protocolo:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["deducir la solicitud de retiro finalizada subyacente de ",(0,i.jsx)(n.code,{children:"stETH"}),", ver ",(0,i.jsx)(n.a,{href:"/contracts/lido#handleoraclereport",children:(0,i.jsx)(n.code,{children:"Lido.handleOracleReport"})})]}),"\n",(0,i.jsxs)(n.li,{children:["penalizar a los operadores de nodos morosos reduciendo a la mitad sus recompensas, ver ",(0,i.jsx)(n.a,{href:"/gu%C3%ADas/oracle-spec/penalties",children:"Salidas y penalizaciones de los validadores"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Estas responsabilidades est\xe1n controladas por el rol ",(0,i.jsx)(n.code,{children:"REQUEST_BURN_SHARES_ROLE"}),", que se asigna tanto a los contratos ",(0,i.jsx)(n.a,{href:"/contracts/lido",children:(0,i.jsx)(n.code,{children:"Lido"})})," como ",(0,i.jsx)(n.a,{href:"/contracts/node-operators-registry",children:(0,i.jsx)(n.code,{children:"NodeOperatorsRegistry"})}),".\nEste rol nunca debe asignarse permanentemente a otras entidades."]}),"\n",(0,i.jsxs)(n.p,{children:["Adem\xe1s de esto, la quema de tokens ",(0,i.jsx)(n.code,{children:"stETH"})," puede aplicarse para compensar penalizaciones/p\xe9rdidas por slashing seg\xfan la decisi\xf3n de la DAO.\nEs posible a trav\xe9s de un rol m\xe1s restrictivo ",(0,i.jsx)(n.code,{children:"REQUEST_BURN_MY_STETH_ROLE"}),", que actualmente no est\xe1 asignado."]}),"\n",(0,i.jsxs)(n.p,{children:["La diferencia clave es que ambos roles dependen de la asignaci\xf3n de ",(0,i.jsx)(n.code,{children:"stETH"})," proporcionada al contrato ",(0,i.jsx)(n.code,{children:"Burner"}),",\neste \xfaltimo permite la quema de tokens solo desde el saldo del originador de la solicitud."]}),"\n",(0,i.jsx)(n.h3,{id:"pausa",children:"Pausa"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Mutador: ",(0,i.jsx)(n.code,{children:"stop()"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Permiso requerido: ",(0,i.jsx)(n.code,{children:"PAUSE_ROLE"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Mutador: ",(0,i.jsx)(n.code,{children:"resume()"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Permiso requerido: ",(0,i.jsx)(n.code,{children:"RESUME_ROLE"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Accesorio: ",(0,i.jsx)(n.code,{children:"isStopped() returns (bool)"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Cuando est\xe1 pausado, ",(0,i.jsx)(n.code,{children:"Lido"})," no acepta env\xedos de usuarios, ni permite retiros de usuarios ni env\xedos de informes de or\xe1culo. No se permiten acciones con tokens (quema, transferencia, aprobaci\xf3n de transferencias y cambio de asignaciones). Las siguientes transacciones revierten:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["transferencias de ether simples a ",(0,i.jsx)(n.code,{children:"Lido"}),";"]}),"\n",(0,i.jsxs)(n.li,{children:["llamadas a ",(0,i.jsx)(n.code,{children:"submit(address)"}),";"]}),"\n",(0,i.jsxs)(n.li,{children:["llamadas a ",(0,i.jsx)(n.code,{children:"deposit(uint256, uint256, bytes)"}),";"]}),"\n",(0,i.jsxs)(n.li,{children:["llamadas a ",(0,i.jsx)(n.code,{children:"handleOracleReport(...)"}),";"]}),"\n",(0,i.jsxs)(n.li,{children:["llamadas a ",(0,i.jsx)(n.code,{children:"transfer(address, uint256)"}),";"]}),"\n",(0,i.jsxs)(n.li,{children:["llamadas a ",(0,i.jsx)(n.code,{children:"transferFrom(address, address, uint256)"}),";"]}),"\n",(0,i.jsxs)(n.li,{children:["llamadas a ",(0,i.jsx)(n.code,{children:"transferShares(address, uint256)"}),";"]}),"\n",(0,i.jsxs)(n.li,{children:["llamadas a ",(0,i.jsx)(n.code,{children:"transferSharesFrom(address, uint256)"}),";"]}),"\n",(0,i.jsxs)(n.li,{children:["llamadas a ",(0,i.jsx)(n.code,{children:"approve(address, uint256)"}),";"]}),"\n",(0,i.jsxs)(n.li,{children:["llamadas a ",(0,i.jsx)(n.code,{children:"increaseAllowance(address, uint256)"}),";"]}),"\n",(0,i.jsxs)(n.li,{children:["llamadas a ",(0,i.jsx)(n.code,{children:"decreaseAllowance(address, uint256)"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Como consecuencia de la lista anterior:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["llamadas a ",(0,i.jsx)(n.code,{children:"WithdrawalQueueERC721.requestWithdrawals(uint256[] calldata, address)"}),", y sus variantes;"]}),"\n",(0,i.jsxs)(n.li,{children:["llamadas a ",(0,i.jsx)(n.code,{children:"wstETH.wrap(uint256)"})," y ",(0,i.jsx)(n.code,{children:"wstETH.unwrap(uint256)"}),";"]}),"\n",(0,i.jsxs)(n.li,{children:["llamadas a ",(0,i.jsx)(n.code,{children:"Burner.requestBurnShares"}),", ",(0,i.jsx)(n.code,{children:"Burner.requestBurnMyStETH"}),", y sus variantes;"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Las integraciones externas de stETH/wstETH en DeFi tambi\xe9n se ven directamente afectadas."})}),"\n",(0,i.jsx)(n.h3,{id:"anular-el-contador-de-validadores-depositados",children:"Anular el contador de validadores depositados"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Mutador: ",(0,i.jsx)(n.code,{children:"unsafeChangeDepositedValidators(uint256)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Permiso requerido: ",(0,i.jsx)(n.code,{children:"UNSAFE_CHANGE_DEPOSITED_VALIDATORS_ROLE"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"El m\xe9todo cambia de forma insegura el contador de validadores depositados.\nPuede ser necesario al integrar validadores externos a Lido (es decir, que hayan depositado antes y rotado sus credenciales de retiro tipo-0x00 a Lido)."}),"\n",(0,i.jsx)(n.p,{children:"Valores incorrectos pueden afectar la operaci\xf3n del protocolo."}),"\n",(0,i.jsx)(n.h3,{id:"informe-del-or\xe1culo",children:"Informe del or\xe1culo"}),"\n",(0,i.jsx)(n.p,{children:"TODO: los informes del or\xe1culo son impulsados por el comit\xe9"}),"\n",(0,i.jsx)(n.h3,{id:"control-de-acceso-al-dep\xf3sito",children:"Control de acceso al dep\xf3sito"}),"\n",(0,i.jsxs)(n.p,{children:["El m\xe9todo ",(0,i.jsx)(n.code,{children:"Lido.deposit"})," realiza un dep\xf3sito real (stake) de ether almacenado en el Consensus Layer,\npasando por ",(0,i.jsx)(n.code,{children:"StakingRouter"}),", su m\xf3dulo seleccionado y finalmente el contrato oficial de dep\xf3sito de Ethereum."]}),"\n",(0,i.jsxs)(n.p,{children:["El m\xe9todo solo puede ser llamado por ",(0,i.jsx)(n.code,{children:"DepositSecurityModule"})," ya que el control de acceso es parte de la mitigaci\xf3n de vulnerabilidades de frontrunning en los dep\xf3sitos."]}),"\n",(0,i.jsxs)(n.p,{children:["Por favor, consulta ",(0,i.jsx)(n.a,{href:"https://github.com/lidofinance/lido-improvement-proposals/blob/develop/LIPS/lip-5.md",children:"LIP-5"})," para m\xe1s detalles."]}),"\n",(0,i.jsx)(n.h3,{id:"l\xedmite-de-iteraci\xf3n-del-bucle-de-dep\xf3sito",children:"L\xedmite de iteraci\xf3n del bucle de dep\xf3sito"}),"\n",(0,i.jsx)(n.p,{children:"Controla cu\xe1ntos dep\xf3sitos de Ethereum pueden hacerse en una sola transacci\xf3n."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["El par\xe1metro ",(0,i.jsx)(n.code,{children:"_maxDepositsCount"})," de la funci\xf3n ",(0,i.jsx)(n.code,{children:"deposit(uint256 _maxDepositsCount, uint256 _stakingModuleId, bytes _depositCalldata)"})]}),"\n",(0,i.jsxs)(n.li,{children:["Valor predeterminado: ",(0,i.jsx)(n.code,{children:"16"})]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/lidofinance/lido-dao/blob/master/test/scenario/lido_deposit_iteration_limit.js",children:"Prueba de escenario"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Cuando DSM llama a ",(0,i.jsx)(n.code,{children:"depositBufferedEther"}),", ",(0,i.jsx)(n.code,{children:"Lido"})," intenta registrar tantos validadores de Ethereum como sea posible dada la cantidad de ether almacenado en b\xfafer. El l\xedmite se pasa como argumento a esta funci\xf3n y es necesario para evitar que la transacci\xf3n falle debido al l\xedmite de gas del bloque, lo cual es posible si la cantidad de ether almacenado en b\xfafer se vuelve suficientemente grande."]}),"\n",(0,i.jsx)(n.h3,{id:"recompensas-de-la-capa-de-ejecuci\xf3n",children:"Recompensas de la capa de ejecuci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["Lido implementa un dise\xf1o arquitect\xf3nico propuesto en la Propuesta de Mejora de Lido ",(0,i.jsx)(n.a,{href:"https://github.com/lidofinance/lido-improvement-proposals/blob/develop/LIPS/lip-12.md",children:"#12"})," para recolectar las recompensas a nivel de ejecuci\xf3n (a partir del hardfork Merge) y distribuirlas como parte del informe del or\xe1culo de Lido."]}),"\n",(0,i.jsxs)(n.p,{children:["Estas recompensas de la capa de ejecuci\xf3n se acumulan inicialmente en el contrato dedicado ",(0,i.jsx)(n.a,{href:"/contracts/lido-execution-layer-rewards-vault",children:(0,i.jsx)(n.code,{children:"LidoExecutionLayerRewardsVault"})})," y consisten en tarifas de prioridad y MEV."]}),"\n",(0,i.jsxs)(n.p,{children:["Existe un l\xedmite adicional para prevenir eventos dr\xe1sticos de rebase de tokens.\nConsulte el siguiente problema: ",(0,i.jsx)(n.a,{href:"https://github.com/lidofinance/lido-dao/issues/405",children:(0,i.jsx)(n.code,{children:"#405"})})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Modificador: ",(0,i.jsx)(n.code,{children:"setELRewardsVault()"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Permiso requerido: ",(0,i.jsx)(n.code,{children:"SET_EL_REWARDS_VAULT_ROLE"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Modificador: ",(0,i.jsx)(n.code,{children:"setELRewardsWithdrawalLimit()"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Permiso requerido: ",(0,i.jsx)(n.code,{children:"SET_EL_REWARDS_WITHDRAWAL_LIMIT_ROLE"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Accesores:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"getELRewardsVault()"}),";"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"getELRewardsWithdrawalLimit()"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"limitaci\xf3n-de-la-tasa-de-staking",children:"Limitaci\xf3n de la tasa de staking"}),"\n",(0,i.jsxs)(n.p,{children:["Lido cuenta con un mecanismo de salvaguardia para prevenir p\xe9rdidas significativas en el APR frente a la demanda de la cola de entrada ",(0,i.jsx)(n.a,{href:"https://blog.lido.fi/modelling-the-entry-queue-post-merge-an-analysis-of-impacts-on-lidos-socialized-model/",children:"post-merge"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Las nuevas solicitudes de staking pueden estar limitadas con un l\xedmite m\xf3vil suave para la cantidad de staking por per\xedodo deseado."}),"\n",(0,i.jsx)(n.p,{children:"Esquema de explicaci\xf3n de l\xedmite:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    * \u25b2 L\xedmite de staking\n    * \u2502.....  .....   ........ ...            ....     ... L\xedmite de staking = m\xe1ximo\n    * \u2502      .       .        .   .   .      .    . . .\n    * \u2502     .       .              . .  . . .      . .\n    * \u2502            .                .  . . .\n    * \u2502\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500> Tiempo\n    * \u2502     ^      ^          ^   ^^^  ^ ^ ^     ^^^ ^     Eventos de staking\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Modificadores: ",(0,i.jsx)(n.code,{children:"resumeStaking()"}),", ",(0,i.jsx)(n.code,{children:"setStakingLimit(uint256, uint256)"}),", ",(0,i.jsx)(n.code,{children:"removeStakingLimit()"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Permiso requerido: ",(0,i.jsx)(n.code,{children:"STAKING_CONTROL_ROLE"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Modificador: ",(0,i.jsx)(n.code,{children:"pauseStaking()"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Permiso requerido: ",(0,i.jsx)(n.code,{children:"STAKING_PAUSE_ROLE"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Accesores:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"isStakingPaused()"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"getCurrentStakeLimit()"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"getStakeLimitFullInfo()"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Cuando el staking est\xe1 pausado, ",(0,i.jsx)(n.code,{children:"Lido"})," no acepta env\xedos de usuarios. Las siguientes transacciones revierten:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Transferencias simples de ether;"}),"\n",(0,i.jsxs)(n.li,{children:["llamadas a ",(0,i.jsx)(n.code,{children:"submit(address)"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Para m\xe1s detalles, consulte la Propuesta de Mejora de Lido ",(0,i.jsx)(n.a,{href:"https://github.com/lidofinance/lido-improvement-proposals/blob/develop/LIPS/lip-14.md",children:"#14"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"stakingrouter",children:(0,i.jsx)(n.a,{href:"/contracts/staking-router",children:"StakingRouter"})}),"\n",(0,i.jsx)(n.h3,{id:"tarifa",children:"Tarifa"}),"\n",(0,i.jsxs)(n.p,{children:["La tarifa total, en puntos base (",(0,i.jsx)(n.code,{children:"10000"})," correspondientes a ",(0,i.jsx)(n.code,{children:"100%"}),")."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Modificador: ",(0,i.jsx)(n.code,{children:"setFee(uint16)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Permiso requerido: ",(0,i.jsx)(n.code,{children:"MANAGE_FEE"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Accesor: ",(0,i.jsx)(n.code,{children:"getFee() returns (uint16)"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"La tarifa se aplica a las recompensas de staking y se distribuye entre el tesoro, el fondo de seguro y\nlos operadores de nodos."}),"\n",(0,i.jsx)(n.h3,{id:"distribuci\xf3n-de-la-tarifa",children:"Distribuci\xf3n de la tarifa"}),"\n",(0,i.jsxs)(n.p,{children:["Controla c\xf3mo se distribuye la tarifa entre el tesoro, el fondo de seguro y los operadores de nodos.\nCada componente de la tarifa est\xe1 en puntos base; la suma de todos los componentes debe sumar 1 (",(0,i.jsx)(n.code,{children:"10000"})," puntos base)."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Modificador: ",(0,i.jsx)(n.code,{children:"setFeeDistribution(uint16 treasury, uint16 insurance, uint16 operators)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Permiso requerido: ",(0,i.jsx)(n.code,{children:"MANAGE_FEE"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Accesor: ",(0,i.jsx)(n.code,{children:"getFeeDistribution() returns (uint16 treasury, uint16 insurance, uint16 operators)"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"credenciales-de-retiro-de-ethereum",children:"Credenciales de retiro de Ethereum"}),"\n",(0,i.jsx)(n.p,{children:"Credenciales para retirar ETH en el lado de la Capa de Ejecuci\xf3n"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Mutador: ",(0,i.jsx)(n.code,{children:"setWithdrawalCredentials(bytes)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Permiso requerido: ",(0,i.jsx)(n.code,{children:"MANAGE_WITHDRAWAL_KEY"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Accesor: ",(0,i.jsx)(n.code,{children:"getWithdrawalCredentials() returns (bytes)"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"El protocolo utiliza estas credenciales para registrar nuevos validadores de Ethereum."}),"\n",(0,i.jsx)(n.h2,{id:"nodeoperatorsregistry",children:(0,i.jsx)(n.a,{href:"/contracts/node-operators-registry",children:"NodeOperatorsRegistry"})}),"\n",(0,i.jsx)(n.h3,{id:"lista-de-operadores-de-nodos",children:"Lista de Operadores de Nodos"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Mutador: ",(0,i.jsx)(n.code,{children:"addNodeOperator(string _name, address _rewardAddress, uint64 _stakingLimit)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Permiso requerido: ",(0,i.jsx)(n.code,{children:"ADD_NODE_OPERATOR_ROLE"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Mutador: ",(0,i.jsx)(n.code,{children:"setNodeOperatorName(uint256 _id, string _name)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Permiso requerido: ",(0,i.jsx)(n.code,{children:"SET_NODE_OPERATOR_NAME_ROLE"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Mutador: ",(0,i.jsx)(n.code,{children:"setNodeOperatorRewardAddress(uint256 _id, address _rewardAddress)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Permiso requerido: ",(0,i.jsx)(n.code,{children:"SET_NODE_OPERATOR_ADDRESS_ROLE"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Mutador: ",(0,i.jsx)(n.code,{children:"setNodeOperatorStakingLimit(uint256 _id, uint64 _stakingLimit)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Permiso requerido: ",(0,i.jsx)(n.code,{children:"SET_NODE_OPERATOR_LIMIT_ROLE"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Los Operadores de Nodos act\xfaan como validadores en la cadena Beacon en beneficio del protocolo. Cada operador de nodo env\xeda no m\xe1s de ",(0,i.jsx)(n.code,{children:"_stakingLimit"})," claves de firma que ser\xe1n utilizadas m\xe1s tarde por el protocolo para registrar los validadores de Ethereum correspondientes. A medida que el comit\xe9 or\xe1culo reporta recompensas en el lado de Ethereum, se aplica una tarifa sobre estas recompensas, y parte de esa tarifa se env\xeda a las direcciones de recompensa de los operadores de nodos (",(0,i.jsx)(n.code,{children:"_rewardAddress"}),")."]}),"\n",(0,i.jsx)(n.h3,{id:"desactivaci\xf3n-de-un-operador-de-nodo",children:"Desactivaci\xf3n de un operador de nodo"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Mutador: ",(0,i.jsx)(n.code,{children:"setNodeOperatorActive(uint256 _id, bool _active)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Permiso requerido: ",(0,i.jsx)(n.code,{children:"SET_NODE_OPERATOR_ACTIVE_ROLE"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Los operadores de nodo que se comporten mal pueden ser desactivados llamando a esta funci\xf3n. El protocolo omite los operadores desactivados durante el registro de validadores; adem\xe1s, los operadores desactivados no participan en la distribuci\xf3n de tarifas."}),"\n",(0,i.jsx)(n.h3,{id:"gesti\xf3n-de-las-claves-de-firma-del-operador-de-nodo",children:"Gesti\xf3n de las claves de firma del operador de nodo"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Mutador: ",(0,i.jsx)(n.code,{children:"addSigningKeys(uint256 _operator_id, uint256 _quantity, bytes _pubkeys, bytes _signatures)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Permiso requerido: ",(0,i.jsx)(n.code,{children:"MANAGE_SIGNING_KEYS"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Mutador: ",(0,i.jsx)(n.code,{children:"removeSigningKey(uint256 _operator_id, uint256 _index)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Permiso requerido: ",(0,i.jsx)(n.code,{children:"MANAGE_SIGNING_KEYS"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Permite gestionar las claves de firma para el operador de nodo dado."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Las claves de firma tambi\xe9n pueden ser gestionadas por la direcci\xf3n de recompensa de un proveedor de firmas llamando a las funciones equivalentes con el sufijo ",(0,i.jsx)(n.code,{children:"OperatorBH"}),": ",(0,i.jsx)(n.code,{children:"addSigningKeysOperatorBH"}),", ",(0,i.jsx)(n.code,{children:"removeSigningKeyOperatorBH"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"reporte-de-nuevos-validadores-detenidos",children:"Reporte de nuevos validadores detenidos"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Mutador: ",(0,i.jsx)(n.code,{children:"reportStoppedValidators(uint256 _id, uint64 _stoppedIncrement)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Permiso requerido: ",(0,i.jsx)(n.code,{children:"REPORT_STOPPED_VALIDATORS_ROLE"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Permite informar que ",(0,i.jsx)(n.code,{children:"_stoppedIncrement"})," validadores adicionales de un operador de nodo se han detenido."]}),"\n",(0,i.jsx)(n.h2,{id:"legacyoracle",children:(0,i.jsx)(n.a,{href:"/contracts/legacy-oracle",children:"LegacyOracle"})}),"\n",(0,i.jsx)(n.h3,{id:"lido-1",children:"Lido"}),"\n",(0,i.jsx)(n.p,{children:"Direcci\xf3n del contrato Lido."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Accesor: ",(0,i.jsx)(n.code,{children:"getLido() returns (address)"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"lista-de-miembros",children:"Lista de miembros"}),"\n",(0,i.jsx)(n.p,{children:"La lista de miembros del comit\xe9 or\xe1culo."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Mutadores: ",(0,i.jsx)(n.code,{children:"addOracleMember(address)"}),", ",(0,i.jsx)(n.code,{children:"removeOracleMember(address)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Permiso requerido: ",(0,i.jsx)(n.code,{children:"MANAGE_MEMBERS"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Accesor: ",(0,i.jsx)(n.code,{children:"getOracleMembers() returns (address[])"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"el-qu\xf3rum",children:"El qu\xf3rum"}),"\n",(0,i.jsx)(n.p,{children:"El n\xfamero exacto de informes necesarios para finalizar el epoch."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Mutador: ",(0,i.jsx)(n.code,{children:"setQuorum(uint256)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Permiso requerido: ",(0,i.jsx)(n.code,{children:"MANAGE_QUORUM"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Accesor: ",(0,i.jsx)(n.code,{children:"getQuorum() returns (uint256)"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Cuando se recolecta el n\xfamero ",(0,i.jsx)(n.code,{children:"quorum"})," de informes iguales para el epoch actual,"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"el epoch se finaliza (no se aceptan m\xe1s informes para \xe9l),"}),"\n",(0,i.jsx)(n.li,{children:"el informe final se env\xeda a Lido,"}),"\n",(0,i.jsxs)(n.li,{children:["se recopilan estad\xedsticas y se eval\xfaa la ",(0,i.jsx)(n.a,{href:"#verificaci%C3%B3n-de-integridad",children:"verificaci\xf3n de integridad"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"verificaci\xf3n-de-integridad",children:"Verificaci\xf3n de integridad"}),"\n",(0,i.jsx)(n.p,{children:"Para hacer que los or\xe1culos sean menos peligrosos, podemos limitar el informe de recompensas por un aumento del 0.1% en el saldo y una disminuci\xf3n del 15% en el saldo, ambos valores configurables por el gobierno en caso de circunstancias extremadamente inusuales."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Mutadores: ",(0,i.jsx)(n.code,{children:"setAllowedBeaconBalanceAnnualRelativeIncrease(uint256)"})," y ",(0,i.jsx)(n.code,{children:"setAllowedBeaconBalanceRelativeDecrease(uint256)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Permiso requerido: ",(0,i.jsx)(n.code,{children:"SET_REPORT_BOUNDARIES"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Accesores: ",(0,i.jsx)(n.code,{children:"getAllowedBeaconBalanceAnnualRelativeIncrease() returns (uint256)"})," y ",(0,i.jsx)(n.code,{children:"getAllowedBeaconBalanceRelativeDecrease() returns (uint256)"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"estado-actual-de-los-informes",children:"Estado actual de los informes"}),"\n",(0,i.jsxs)(n.p,{children:['Para transparencia, proporcionamos accesos para devolver el estado de los informes de los demonios or\xe1culo para el "',(0,i.jsx)(n.a,{href:"#epoch-esperado",children:"epoch esperado"}),'" actual.']}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Accesores:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"getCurrentOraclesReportStatus() returns (uint256)"})," - devuelve el bitmap actual de informes, representando los or\xe1culos que ya han enviado su versi\xf3n del informe durante el ",(0,i.jsx)(n.a,{href:"#epoch-esperado",children:"epoch esperado"}),", cada bit de or\xe1culo corresponde al \xedndice del or\xe1culo en la lista actual de miembros,"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"getCurrentReportVariantsSize() returns (uint256)"})," - devuelve el tama\xf1o actual del array de variantes de informes,"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"getCurrentReportVariant(uint256 _index) returns (uint64 beaconBalance, uint32 beaconValidators, uint16 count)"})," - devuelve el elemento actual del array de informes con el \xedndice dado."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"epoch-esperado",children:"Epoch esperado"}),"\n",(0,i.jsx)(n.p,{children:"Los demonios or\xe1culo pueden proporcionar sus informes solo para un epoch en cada marco: el primero. El siguiente accesor puede usarse para buscar el epoch actual que este contrato espera para los informes."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Accesor: ",(0,i.jsx)(n.code,{children:"getExpectedEpochId() returns (uint256)"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Ten en cuenta que cualquier epoch posterior, que ya haya llegado y tambi\xe9n sea el primer epoch de su marco, tambi\xe9n es elegible para el informe. Si alg\xfan demonio or\xe1culo lo informa, el contrato descarta cualquier resultado de este epoch y avanza al que acaba de ser informado."}),"\n",(0,i.jsx)(n.h3,{id:"versi\xf3n-del-contrato",children:"Versi\xf3n del contrato"}),"\n",(0,i.jsx)(n.p,{children:"Devuelve la versi\xf3n inicializada de este contrato comenzando desde 0."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Accesor: ",(0,i.jsx)(n.code,{children:"getVersion() returns (uint256)"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"especificaci\xf3n-de-beacon",children:"Especificaci\xf3n de Beacon"}),"\n",(0,i.jsx)(n.p,{children:"Establece y consulta la especificaci\xf3n configurable de la cadena Beacon."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Mutador: ",(0,i.jsx)(n.code,{children:"setBeaconSpec( uint64 _epochsPerFrame, uint64 _slotsPerEpoch, uint64 _secondsPerSlot, uint64 _genesisTime )"}),",","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Permiso requerido: ",(0,i.jsx)(n.code,{children:"SET_BEACON_SPEC"}),","]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Accesor: ",(0,i.jsx)(n.code,{children:"getBeaconSpec() returns (uint64 epochsPerFrame, uint64 slotsPerEpoch, uint64 secondsPerSlot, uint64 genesisTime)"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"epoch-actual",children:"Epoch actual"}),"\n",(0,i.jsx)(n.p,{children:"Devuelve el epoch calculado a partir del timestamp actual."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Accesor: ",(0,i.jsx)(n.code,{children:"getCurrentEpochId() returns (uint256)"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"informaci\xf3n-adicional-del-epoch",children:"Informaci\xf3n adicional del epoch"}),"\n",(0,i.jsx)(n.p,{children:"Devuelve el epoch actualmente reportable (el primer epoch del marco actual) as\xed como su inicio y fin en segundos."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Accesor: ",(0,i.jsx)(n.code,{children:"getCurrentFrame() returns (uint256 frameEpochId, uint256 frameStartTime, uint256 frameEndTime)"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\xfaltimo-epoch-completado",children:"\xdaltimo epoch completado"}),"\n",(0,i.jsx)(n.p,{children:"Devuelve el \xfaltimo epoch que ha sido enviado a Lido."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Accesor: ",(0,i.jsx)(n.code,{children:"getLastCompletedEpochId() returns (uint256)"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"informaci\xf3n-adicional-de-recompensas",children:"Informaci\xf3n adicional de recompensas"}),"\n",(0,i.jsx)(n.p,{children:"Informa el saldo del beacon y su cambio durante el \xfaltimo frame."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Accesor: ",(0,i.jsx)(n.code,{children:"getLastCompletedReportDelta() returns (uint256 postTotalPooledEther, uint256 preTotalPooledEther, uint256 timeElapsed)"}),"."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>o});var i=s(6540);const d={},r=i.createContext(d);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);