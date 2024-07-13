"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1421],{8464:(e,a,d)=>{d.r(a),d.d(a,{assets:()=>n,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var s=d(4848),l=d(8453);const i={},r=void 0,o={id:"gu\xedas/oracle-spec/validator-exit-bus",title:"validator-exit-bus",description:"Autob\xfas de Salida de Validadores: Explicaci\xf3n Detallada",source:"@site/docs/gu\xedas/oracle-spec/validator-exit-bus.md",sourceDirName:"gu\xedas/oracle-spec",slug:"/gu\xedas/oracle-spec/validator-exit-bus",permalink:"/lido-docs-spanish/gu\xedas/oracle-spec/validator-exit-bus",draft:!1,unlisted:!1,editUrl:"https://github.com/adminseedlatam/lido-docs-spanish/edit/main/docs/gu\xedas/oracle-spec/validator-exit-bus.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Or\xe1culo contable",permalink:"/lido-docs-spanish/gu\xedas/oracle-spec/accounting-oracle"},next:{title:"Validator exits and penalties",permalink:"/lido-docs-spanish/gu\xedas/oracle-spec/penalties"}},n={},c=[{value:"Autob\xfas de Salida de Validadores: Explicaci\xf3n Detallada",id:"autob\xfas-de-salida-de-validadores-explicaci\xf3n-detallada",level:2},{value:"Pasos para el C\xe1lculo del Informe",id:"pasos-para-el-c\xe1lculo-del-informe",level:3},{value:"Algoritmo para el Pr\xf3ximo Validador en Salir",id:"algoritmo-para-el-pr\xf3ximo-validador-en-salir",level:3},{value:"Secuencia de Predicados para el Orden de Salida",id:"secuencia-de-predicados-para-el-orden-de-salida",level:3},{value:"Obtener Informaci\xf3n para Preparar la Cola Ordenada",id:"obtener-informaci\xf3n-para-preparar-la-cola-ordenada",level:3},{value:"L\xedmites del Informe",id:"l\xedmites-del-informe",level:3},{value:"Obtener Validadores Exiteables",id:"obtener-validadores-exiteables",level:3},{value:"Estad\xedsticas del Operador de Nodo",id:"estad\xedsticas-del-operador-de-nodo",level:3},{value:"\xcdndices de los \xdaltimos Validadores Solicitados",id:"\xedndices-de-los-\xfaltimos-validadores-solicitados",level:3},{value:"Recopilaci\xf3n de Estado",id:"recopilaci\xf3n-de-estado",level:3},{value:"Obtener Datos",id:"obtener-datos",level:3},{value:"Obtener la Cantidad de Solicitudes de Retiro de stETH No Cubiertas",id:"obtener-la-cantidad-de-solicitudes-de-retiro-de-steth-no-cubiertas",level:4},{value:"Calcular la Velocidad Promedio de Recompensas por \xc9poca",id:"calcular-la-velocidad-promedio-de-recompensas-por-\xe9poca",level:4},{value:"Calcular las \xc9pocas Necesarias para el Barrido",id:"calcular-las-\xe9pocas-necesarias-para-el-barrido",level:4},{value:"Predicci\xf3n Promedio del Barrido",id:"predicci\xf3n-promedio-del-barrido",level:5},{value:"Validadores retirables",id:"validadores-retirables",level:5},{value:"Predicci\xf3n del ether disponible antes del pr\xf3ximo retiro",id:"predicci\xf3n-del-ether-disponible-antes-del-pr\xf3ximo-retiro",level:4},{value:"Calcular el saldo esperado a retirar",id:"calcular-el-saldo-esperado-a-retirar",level:4},{value:"Recompensas futuras",id:"recompensas-futuras",level:5},{value:"Cantidad futura de retiros",id:"cantidad-futura-de-retiros",level:5},{value:"Saldo total disponible",id:"saldo-total-disponible",level:5},{value:"Suma acumulativa de los validadores a expulsar",id:"suma-acumulativa-de-los-validadores-a-expulsar",level:5},{value:"Validadores que van a salir",id:"validadores-que-van-a-salir",level:5},{value:"Comparar saldo esperado vs. saldo a retirar",id:"comparar-saldo-esperado-vs-saldo-a-retirar",level:5},{value:"Enlaces \xfatiles",id:"enlaces-\xfatiles",level:2}];function t(e){const a={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h2,{id:"autob\xfas-de-salida-de-validadores-explicaci\xf3n-detallada",children:"Autob\xfas de Salida de Validadores: Explicaci\xf3n Detallada"}),"\n",(0,s.jsxs)(a.p,{children:["El ",(0,s.jsx)(a.strong,{children:"Autob\xfas de Salida de Validadores Oracle"})," es un mecanismo dentro del protocolo Lido responsable de solicitar la salida de validadores para cubrir los retiros de los usuarios cuando el protocolo necesita fondos adicionales. Este documento describe paso a paso el proceso para calcular y ejecutar las salidas de los validadores."]}),"\n",(0,s.jsx)(a.h3,{id:"pasos-para-el-c\xe1lculo-del-informe",children:"Pasos para el C\xe1lculo del Informe"}),"\n",(0,s.jsxs)(a.ol,{children:["\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.strong,{children:"Calcular la cantidad de retiros a cubrir con ether."})}),"\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.strong,{children:"Calcular la predicci\xf3n de recompensas en ether por \xe9poca."})}),"\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.strong,{children:"Calcular la \xe9poca de retiro para el pr\xf3ximo validador elegible para salir y cubrir las solicitudes de retiro si es necesario."})}),"\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.strong,{children:"Preparar la cola de orden de salida de validadores."})}),"\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.strong,{children:"Recorrer la cola hasta que los saldos de los validadores salientes cubran todas las solicitudes de retiro (considerando el saldo final predicho de cada validador)."})}),"\n"]}),"\n",(0,s.jsx)(a.h3,{id:"algoritmo-para-el-pr\xf3ximo-validador-en-salir",children:"Algoritmo para el Pr\xf3ximo Validador en Salir"}),"\n",(0,s.jsxs)(a.p,{children:["El algoritmo para la salida de validadores se basa en el ",(0,s.jsx)(a.a,{href:"https://research.lido.fi/t/withdrawals-on-validator-exiting-order/3048#combined-approach-17",children:"algoritmo descrito en el foro de investigaci\xf3n"}),"."]}),"\n",(0,s.jsx)(a.p,{children:"El algoritmo supone corregir el n\xfamero futuro de validadores para cada Operador de Nodo. Supongamos que los validadores y dep\xf3sitos en proceso de uno de los Operadores de Nodo se representan de la siguiente manera, donde los validadores est\xe1n ordenados por sus \xedndices:"}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"VEBO 1",src:d(3652).A+"",width:"1000",height:"160"})}),"\n",(0,s.jsx)(a.p,{children:"El algoritmo asume que los validadores m\xe1s antiguos salen primero. Por lo tanto, los validadores previamente solicitados se pueden separar para salir sabiendo el \xedndice del \xfaltimo solicitado."}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"VEBO 2",src:d(511).A+"",width:"1000",height:"160"})}),"\n",(0,s.jsx)(a.p,{children:"Cabe destacar que cada validador tiene un estado. Algunos validadores pueden estar castigados o haber salido sin una solicitud del protocolo:"}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"VEBO 3",src:d(3574).A+"",width:"1000",height:"180"})}),"\n",(0,s.jsxs)(a.p,{children:["Entre todos los validadores, los proyectados son el punto de inter\xe9s. Incluyen todos los validadores activos y dep\xf3sitos en proceso, pero excluyen los validadores cuyo ",(0,s.jsx)(a.code,{children:"exit_epoch != FAR_FUTURE_EPOCH"})," y aquellos validadores que fueron solicitados para salir."]}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"VEBO 4",src:d(3657).A+"",width:"1000",height:"240"})}),"\n",(0,s.jsxs)(a.p,{children:["Unas horas despu\xe9s, podr\xeda verse de la siguiente manera:\n",(0,s.jsx)(a.img,{alt:"VEBO 5",src:d(9184).A+"",width:"1000",height:"240"})]}),"\n",(0,s.jsx)(a.p,{children:"Nota que el algoritmo descrito est\xe1 buscando un validador para salir solo entre aquellos que pueden salir, mientras usa el n\xfamero proyectado de validadores, que incluye validadores a\xfan no existentes. Son solo ponderaciones, por lo que no hay malentendidos aqu\xed."}),"\n",(0,s.jsx)(a.h3,{id:"secuencia-de-predicados-para-el-orden-de-salida",children:"Secuencia de Predicados para el Orden de Salida"}),"\n",(0,s.jsxs)(a.ol,{children:["\n",(0,s.jsx)(a.li,{children:"Validador cuyo operador tenga el menor n\xfamero de validadores retrasados."}),"\n",(0,s.jsx)(a.li,{children:"Validador cuyo operador tenga el mayor n\xfamero de validadores objetivo para salir."}),"\n",(0,s.jsx)(a.li,{children:"Validador cuyo operador tenga el mayor peso de participaci\xf3n."}),"\n",(0,s.jsx)(a.li,{children:"Validador cuyo operador tenga el mayor n\xfamero de validadores."}),"\n",(0,s.jsx)(a.li,{children:"Validador con el \xedndice m\xe1s bajo."}),"\n"]}),"\n",(0,s.jsx)(a.h3,{id:"obtener-informaci\xf3n-para-preparar-la-cola-ordenada",children:"Obtener Informaci\xf3n para Preparar la Cola Ordenada"}),"\n",(0,s.jsx)(a.p,{children:"Para preparar una cola de validadores para salir, se involucran las siguientes acciones y consideraciones:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"El n\xfamero m\xe1ximo de validadores que pueden ser solicitados para salir en un informe."}),"\n",(0,s.jsx)(a.li,{children:"Porcentaje de penetraci\xf3n en la red del operador: solo si la participaci\xf3n del operador es mayor al 1%."}),"\n",(0,s.jsx)(a.li,{children:"Validadores 'exiteables' de Lido."}),"\n",(0,s.jsx)(a.li,{children:"Obtener estad\xedsticas de los operadores de nodos para ordenar los validadores exiteables."}),"\n",(0,s.jsx)(a.li,{children:"Total de validadores predecibles."}),"\n",(0,s.jsx)(a.li,{children:"\xcdndices de los \xfaltimos validadores solicitados."}),"\n"]}),"\n",(0,s.jsx)(a.h3,{id:"l\xedmites-del-informe",children:"L\xedmites del Informe"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.code,{children:"maxValidatorExitRequestsPerReport"}),": n\xfamero m\xe1ximo de solicitudes de salida permitidas en el informe al ",(0,s.jsx)(a.code,{children:"ValidatorsExitBusOracle"})," desde ",(0,s.jsx)(a.code,{children:"OracleReportSanityChecker.getOracleReportLimits()"}),"."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.code,{children:"VALIDATOR_DELAYED_TIMEOUT_IN_SLOTS"}),": un par\xe1metro del contrato ",(0,s.jsx)(a.code,{children:"OracleDaemonConfig"})," usado para calcular los validadores que van a salir."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.code,{children:"NODE_OPERATOR_NETWORK_PENETRATION_THRESHOLD_BP"}),": un par\xe1metro del ",(0,s.jsx)(a.code,{children:"OracleDaemonConfig"})," que se tiene en cuenta al determinar la penetraci\xf3n del operador en la red."]}),"\n"]}),"\n",(0,s.jsx)(a.h3,{id:"obtener-validadores-exiteables",children:"Obtener Validadores Exiteables"}),"\n",(0,s.jsx)(a.p,{children:"Un validador es 'exiteable' si NO se cumplen estrictamente dos condiciones:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.code,{children:"validator.exit_epoch != FAR_FUTURE_EPOCH"})," y"]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.code,{children:"validator.index <= last_requested_to_exit_index"}),"."]}),"\n"]}),"\n",(0,s.jsx)(a.h3,{id:"estad\xedsticas-del-operador-de-nodo",children:"Estad\xedsticas del Operador de Nodo"}),"\n",(0,s.jsx)(a.p,{children:"Estad\xedsticas para cada operador de nodo, necesarias para ordenar sus validadores en orden de salida:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"N\xfamero de validadores que a\xfan no est\xe1n en CL."}),"\n",(0,s.jsx)(a.li,{children:"Validadores que est\xe1n en CL y a\xfan no han sido solicitados para salir y no est\xe1n en salida."}),"\n",(0,s.jsx)(a.li,{children:"Validadores que est\xe1n en CL y se han solicitado para salir pero no est\xe1n en salida y no se han solicitado para salir recientemente."}),"\n",(0,s.jsx)(a.li,{children:"N\xfamero objetivo de validadores."}),"\n",(0,s.jsx)(a.li,{children:"Comprueba si la bandera de l\xedmite de objetivo est\xe1 habilitada."}),"\n"]}),"\n",(0,s.jsxs)(a.p,{children:["NB: Un validador no puede considerarse retrasado si se solicit\xf3 su salida en los \xfaltimos ",(0,s.jsx)(a.code,{children:"VALIDATOR_DELAYED_TIMEOUT_IN_SLOTS"})," slots."]}),"\n",(0,s.jsx)(a.h3,{id:"\xedndices-de-los-\xfaltimos-validadores-solicitados",children:"\xcdndices de los \xdaltimos Validadores Solicitados"}),"\n",(0,s.jsxs)(a.p,{children:["El contrato ",(0,s.jsx)(a.a,{href:"/lido-docs-spanish/contracts/validators-exit-bus-oracle",children:(0,s.jsx)(a.code,{children:"ValidatorsExitBusOracle"})})," almacena el \xedndice del \xfaltimo validador que se solicit\xf3 para salir. Dado que los validadores se solicitan en un orden estricto desde el ",(0,s.jsx)(a.code,{children:"validatorIndex"})," m\xe1s bajo hasta el m\xe1s alto, los \xedndices ayudan a encontrar todos los validadores solicitados previamente sin necesidad de obtener todos los eventos."]}),"\n",(0,s.jsxs)(a.p,{children:["Devuelve los \xedndices de los \xfaltimos validadores que se solicitaron para salir para los ",(0,s.jsx)(a.code,{children:"operator_indexes"})," dados en el ",(0,s.jsx)(a.code,{children:"module"})," dado. Para los operadores de nodo que nunca solicitaron la salida de ning\xfan validador, el \xedndice se establece en ",(0,s.jsx)(a.code,{children:"-1"}),"."]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-solidity",children:"ValidatorsExitBusOracle.getLastRequestedValidatorIndices(\n    uint256 moduleId,\n    uint256[] nodeOpIds\n): int256[]\n"})}),"\n",(0,s.jsx)(a.h3,{id:"recopilaci\xf3n-de-estado",children:"Recopilaci\xf3n de Estado"}),"\n",(0,s.jsx)(a.p,{children:"Para encontrar los pr\xf3ximos validadores que saldr\xe1n, el Autob\xfas de Salida de Validadores Oracle recopila el siguiente estado tanto de las capas de Consenso de Ethereum como de Ejecuci\xf3n."}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["Del contrato ",(0,s.jsx)(a.a,{href:"/contracts/oracle-daemon-config",children:"OracleDaemonConfig"}),":","\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"PREDICTION_DURATION_IN_SLOTS"}),"\n",(0,s.jsx)(a.li,{children:"VALIDATOR_DELAYED_TIMEOUT_IN_SLOTS"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["De la ",(0,s.jsx)(a.a,{href:"/contracts/withdrawal-queue-erc721",children:"Cola de Retiros"}),":","\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"Obtener la cantidad total de solicitudes de retiro no finalizadas"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["Del contrato ",(0,s.jsx)(a.a,{href:"/contracts/lido",children:"Lido"}),":","\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"Balance reciente postCL/preCL y retiros de las recompensas de la Capa de Ejecuci\xf3n y de los cofres de retiro a trav\xe9s de eventos"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["Del nodo de la Capa de Consenso:","\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"Todos los validadores y sus estados en el slot de referencia"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["Del ",(0,s.jsx)(a.a,{href:"/contracts/staking-router",children:"Staking Router"}),":","\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"Claves p\xfablicas de todos los validadores de Lido"}),"\n",(0,s.jsx)(a.li,{children:"\xcdndices del \xfaltimo validador solicitado para salir para cada Operador de Nodo"}),"\n",(0,s.jsx)(a.li,{children:"Estad\xedsticas de claves de validadores para cada Operador de Nodo"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["Del contrato Oracle:","\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"N\xfamero m\xe1ximo de solicitudes de salida para el marco actual"}),"\n",(0,s.jsx)(a.li,{children:"Claves p\xfablicas solicitadas recientemente a trav\xe9s del Autob\xfas de Salida"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(a.h3,{id:"obtener-datos",children:"Obtener Datos"}),"\n",(0,s.jsx)(a.h4,{id:"obtener-la-cantidad-de-solicitudes-de-retiro-de-steth-no-cubiertas",children:"Obtener la Cantidad de Solicitudes de Retiro de stETH No Cubiertas"}),"\n",(0,s.jsxs)(a.p,{children:["Recopila la cantidad de stETH en la cola a\xfan por finalizar de ",(0,s.jsx)(a.code,{children:"WithdrawalQueue.unfinalizedStETH()"})]}),"\n",(0,s.jsx)(a.h4,{id:"calcular-la-velocidad-promedio-de-recompensas-por-\xe9poca",children:"Calcular la Velocidad Promedio de Recompensas por \xc9poca"}),"\n",(0,s.jsxs)(a.p,{children:["Obtiene los eventos ",(0,s.jsx)(a.code,{children:"ETHDistributed"})," y ",(0,s.jsx)(a.code,{children:"TokenRebased"})," del contrato ",(0,s.jsx)(a.a,{href:"../../contracts/lido",children:(0,s.jsx)(a.code,{children:"Lido"})})," y calcula la cantidad promedio de recompensas por \xe9poca. El per\xedodo de predicci\xf3n de recompensas se obtiene del contrato ",(0,s.jsx)(a.a,{href:"/contracts/oracle-daemon-config",children:"OracleDaemonConfig"}),"."]}),"\n",(0,s.jsx)(a.p,{children:"Para obtener eventos en el pasado, abordando los casos donde puede haber slots con bloque perdido, se introduce el siguiente esquema:"}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"VEBO 6",src:d(7515).A+"",width:"3712",height:"1888"})}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["Obtener el valor ",(0,s.jsx)(a.code,{children:"PREDICTION_DURATION_IN_SLOTS"})," del contrato ",(0,s.jsx)(a.a,{href:"/contracts/oracle-daemon-config",children:"OracleDaemonConfig"}),"."]}),"\n",(0,s.jsxs)(a.li,{children:["Obtener eventos ",(0,s.jsx)(a.code,{children:"TokenRebased"})," de Lido."]}),"\n",(0,s.jsxs)(a.li,{children:["Obtener eventos ",(0,s.jsx)(a.code,{children:"ETHDistributed"})," de Lido."]}),"\n",(0,s.jsx)(a.li,{children:"Agrupar esos eventos por hash de transacci\xf3n."}),"\n",(0,s.jsxs)(a.li,{children:["Recopilar de los eventos:","\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.code,{children:"total_rewards"})," como ",(0,s.jsx)(a.code,{children:"postCLBalance + withdrawalsWithdrawn - preCLBalance executionLayerRewardsWithdrawn"}),"."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.code,{children:"time_spent"})," como suma de ",(0,s.jsx)(a.code,{children:"timeElapsed"})," de cada evento."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["Calcular ",(0,s.jsx)(a.code,{children:"rewards_speed_per_epoch"})," como ",(0,s.jsx)(a.code,{children:"max(total_rewards * chain_configs.seconds_per_slot * chain_configs.slots_per_epoch // time_spent, 0)"}),"."]}),"\n"]}),"\n",(0,s.jsx)(a.h4,{id:"calcular-las-\xe9pocas-necesarias-para-el-barrido",children:"Calcular las \xc9pocas Necesarias para el Barrido"}),"\n",(0,s.jsx)(a.h5,{id:"predicci\xf3n-promedio-del-barrido",children:"Predicci\xf3n Promedio del Barrido"}),"\n",(0,s.jsxs)(a.p,{children:["Predice las \xe9pocas promedio del ciclo de barrido. En la especificaci\xf3n: ",(0,s.jsx)(a.a,{href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/capella/beacon-chain.md#new-get_expected_withdrawals",children:"get expected withdrawals"}),", ",(0,s.jsx)(a.a,{href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/capella/beacon-chain.md#new-process_withdrawals",children:"process withdrawals"}),"."]}),"\n",(0,s.jsx)(a.h5,{id:"validadores-retirables",children:"Validadores retirables"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["Verifica si ",(0,s.jsx)(a.code,{children:"validator"}),' tiene las credenciales de retiro "eth1" con prefijo 0x01, y']}),"\n",(0,s.jsxs)(a.li,{children:["Verifica si ",(0,s.jsx)(a.code,{children:"validator"})," es parcialmente retirable, o"]}),"\n",(0,s.jsxs)(a.li,{children:["Verifica si ",(0,s.jsx)(a.code,{children:"validator"})," es completamente retirable"]}),"\n"]}),"\n",(0,s.jsx)(a.h4,{id:"predicci\xf3n-del-ether-disponible-antes-del-pr\xf3ximo-retiro",children:"Predicci\xf3n del ether disponible antes del pr\xf3ximo retiro"}),"\n",(0,s.jsx)(a.p,{children:"Para estimar la cantidad necesaria para cubrir completamente las solicitudes de retiro no finalizadas, se calculan los siguientes valores:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.strong,{children:"Recompensas futuras"})}),"\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.strong,{children:"Cantidad futura de retiros"})}),"\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.strong,{children:"Saldo total disponible"})}),"\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.strong,{children:"Suma acumulativa de los validadores a expulsar"})}),"\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.strong,{children:"Balance que se va a retirar"})}),"\n"]}),"\n",(0,s.jsxs)(a.p,{children:["Para calcular las ",(0,s.jsx)(a.strong,{children:"recompensas futuras"}),", es necesario ",(0,s.jsx)(a.a,{href:"https://github.com/lidofinance/lido-oracle/blob/master/src/modules/ejector/ejector.py#L244",children:"predecir"})," un epoch en el cual todos los validadores en la cola y ",(0,s.jsx)(a.code,{children:"validators_to_eject"})," ser\xe1n retirados:"]}),"\n",(0,s.jsxs)(a.ol,{children:["\n",(0,s.jsx)(a.li,{children:"Calcula el n\xfamero de epoch de salida m\xe1s reciente y la cantidad de validadores que est\xe1n saliendo en este epoch."}),"\n",(0,s.jsxs)(a.li,{children:["Si la cola est\xe1 vac\xeda, el epoch de salida se calcular\xe1 como ",(0,s.jsx)(a.code,{children:"epoch actual + MAX_SEED_LOOK AHEAD + 1"}),". La constante ",(0,s.jsx)(a.strong,{children:"MAX_SEED_LOOKAHEAD"})," ayuda a mitigar algunos ataques, m\xe1s detalles ",(0,s.jsx)(a.a,{href:"https://eth2book.info/bellatrix/part3/config/preset/#max_seed_lookahead",children:"aqu\xed"}),"."]}),"\n",(0,s.jsxs)(a.li,{children:["Calcula el ",(0,s.jsx)(a.strong,{children:"l\xedmite de churn"})," - similar a un l\xedmite de velocidad en los cambios al conjunto de validadores. El m\xednimo es de 4 validadores por epoch y se recalcula cada ",(0,s.jsx)(a.code,{children:"CHURN_LIMIT_QUOTIENT = 2**16"}),". Por ejemplo, cuando el n\xfamero de validadores activos alcanza hasta 327,680, el l\xedmite de churn aumenta a 5, ",(0,s.jsx)(a.a,{href:"https://github.com/ethereum/consensus-specs/blob/master/specs/phase0/beacon-chain.md#get_validator_churn_limit",children:"especificaci\xf3n"}),"."]}),"\n",(0,s.jsx)(a.li,{children:"Calcula la capacidad de slots para la salida:"}),"\n"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-python",children:"remain_exits_capacity_for_epoch = churn_limit - (cantidad de validadores que est\xe1n saliendo en este epoch)\n"})}),"\n",(0,s.jsxs)(a.ol,{start:"5",children:["\n",(0,s.jsxs)(a.li,{children:["Calcula el epoch para retirar todos los ",(0,s.jsx)(a.code,{children:"validators_to_eject_count"}),":"]}),"\n"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-python",children:"epochs_required_to_exit_validators = (validators_to_eject_count - remain_exits_capacity_for_epoch) // churn_limit + 1\n"})}),"\n",(0,s.jsxs)(a.ol,{start:"6",children:["\n",(0,s.jsx)(a.li,{children:"Entonces el epoch predecible para retirar:"}),"\n"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-python",children:"withdrawal_epoch = max_exit_epoch_number + epochs_required_to_exit_validators + MIN_VALIDATOR_WITHDRAWABILITY_DELAY\n"})}),"\n",(0,s.jsxs)(a.p,{children:["MIN_VALIDATOR_WITHDRAWABILITY_DELAY ",(0,s.jsx)(a.a,{href:"https://eth2book.info/altair/part3/config/configuration#min_validator_withdrawability_delay",children:"aqu\xed"})]}),"\n",(0,s.jsx)(a.p,{children:"Ahora podemos calcular la cantidad (y el n\xfamero de validadores) necesarios para cubrir completamente la cantidad de solicitudes de retiro no finalizadas en la cola de retirada."}),"\n",(0,s.jsx)(a.h4,{id:"calcular-el-saldo-esperado-a-retirar",children:"Calcular el saldo esperado a retirar"}),"\n",(0,s.jsx)(a.h5,{id:"recompensas-futuras",children:"Recompensas futuras"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-python",children:"future_rewards = (withdrawal_epoch + epochs_to_sweep - blockstamp.ref_epoch) * rewards_speed_per_epoch\n"})}),"\n",(0,s.jsx)(a.h5,{id:"cantidad-futura-de-retiros",children:"Cantidad futura de retiros"}),"\n",(0,s.jsx)(a.p,{children:"Obtener el saldo total de los validadores que pueden ser retirados completamente."}),"\n",(0,s.jsx)(a.h5,{id:"saldo-total-disponible",children:"Saldo total disponible"}),"\n",(0,s.jsx)(a.p,{children:"Obt\xe9n el saldo total como suma de:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.code,{children:"Lido.getBufferedEther()"})," +"]}),"\n",(0,s.jsxs)(a.li,{children:["Saldo de ",(0,s.jsx)(a.code,{children:"elRewardsVault"})," +"]}),"\n",(0,s.jsxs)(a.li,{children:["Saldo de ",(0,s.jsx)(a.code,{children:"withdrawalVault"})]}),"\n"]}),"\n",(0,s.jsx)(a.h5,{id:"suma-acumulativa-de-los-validadores-a-expulsar",children:"Suma acumulativa de los validadores a expulsar"}),"\n",(0,s.jsx)(a.p,{children:"Obt\xe9n el saldo del pr\xf3ximo validador en la cola de salida."}),"\n",(0,s.jsx)(a.h5,{id:"validadores-que-van-a-salir",children:"Validadores que van a salir"}),"\n",(0,s.jsxs)(a.p,{children:["Recupera eventos ",(0,s.jsx)(a.code,{children:"ValidatorExitRequest"})," emitidos recientemente del contrato ",(0,s.jsx)(a.code,{children:"ValidatorsExitBusOracle"})," y extrae claves p\xfablicas de ellos. La configuraci\xf3n de timeout diferido se obtiene del contrato ",(0,s.jsx)(a.code,{children:"OracleDaemonConfig"}),"."]}),"\n",(0,s.jsx)(a.p,{children:"Validadores que han solicitado salir, pero no han enviado un mensaje de salida:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"Si el epoch de activaci\xf3n no es lo suficientemente antiguo para iniciar la salida."}),"\n",(0,s.jsx)(a.li,{children:"Si el operador del nodo no tuvo suficiente tiempo para enviar el mensaje de salida (VALIDATOR_DELAYED_TIMEOUT_IN_SLOTS)."}),"\n"]}),"\n",(0,s.jsx)(a.p,{children:"Para obtener los validadores, el or\xe1culo calcula:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.code,{children:"lido_validators_by_operator"})," - Recupera todas las claves Lido utilizadas desde ",(0,s.jsx)(a.a,{href:"https://github.com/lidofinance/lido-keys-api",children:"Keys API"})," + Recupera todos los validadores en el slot de referencia y los fusiona con las claves."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.code,{children:"ejected_indexes"})," - Obtiene los operadores con los \xfaltimos \xedndices de validadores que han salido de todos los m\xf3dulos de estaca y operadores de nodos mediante ",(0,s.jsx)(a.code,{children:"ValidatorsExitBusOracle.getLastRequestedValidatorIndices(module_id, uint256[] nodeOpIds)"}),"."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.code,{children:"recent_pubkeys"})," - Obtiene las \xfaltimas claves p\xfablicas solicitadas para salir del evento ",(0,s.jsx)(a.code,{children:"ValidatorExitRequest"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(a.p,{children:["Para cada ",(0,s.jsx)(a.code,{children:"lido_validators_by_operator"}),", el or\xe1culo intenta encontrar ",(0,s.jsx)(a.strong,{children:"validadores no salidos"}),":"]}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["Si no ",(0,s.jsx)(a.code,{children:"validator_asked_to_exit"})," -> devuelve Falso."]}),"\n",(0,s.jsxs)(a.li,{children:["Si ",(0,s.jsx)(a.code,{children:"is_on_exit"})," -> devuelve Falso."]}),"\n",(0,s.jsxs)(a.li,{children:["Si ",(0,s.jsx)(a.code,{children:"validator_recently_asked_to_exit"})," -> devuelve ",(0,s.jsx)(a.strong,{children:"Verdadero"}),"."]}),"\n",(0,s.jsxs)(a.li,{children:["Si no ",(0,s.jsx)(a.code,{children:"validator_eligible_to_exit"})," -> devuelve ",(0,s.jsx)(a.strong,{children:"Verdadero"}),"."]}),"\n",(0,s.jsx)(a.li,{children:"De lo contrario, devuelve Falso."}),"\n"]}),"\n",(0,s.jsxs)(a.p,{children:["El or\xe1culo calcula ",(0,s.jsx)(a.code,{children:"going_to_withdraw_balance"})," para todos los ",(0,s.jsx)(a.strong,{children:"validadores no salidos"}),"."]}),"\n",(0,s.jsx)(a.h5,{id:"comparar-saldo-esperado-vs-saldo-a-retirar",children:"Comparar saldo esperado vs. saldo a retirar"}),"\n",(0,s.jsx)(a.p,{children:"El saldo esperado es:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{children:"expected_balance = (\n  future_withdrawals +  # Validadores que tienen epoch de retiro\n  future_rewards +  # Recompensas que obtenemos hasta que se retire el \xfaltimo validador en validators_to_eject\n  total_available_balance +  # Saldo actual de EL (el vault, wc vault, buffered eth)\n  validator_to_eject_balance_sum +  # Validadores que esperamos que sean expulsados (solicitados para salir, no demorados)\n  going_to_withdraw_balance  # Saldo de validadores_to_eject\n)\n"})}),"\n",(0,s.jsx)(a.p,{children:"Primero, se verifica sin sacar al validador si el protocolo ya tiene suficiente ether disponible para cubrir las solicitudes de retiro en la cola. Si es as\xed, no es razonable expulsar validadores."}),"\n",(0,s.jsx)(a.p,{children:"Si no hay suficiente, se considera sacar a un validador m\xe1s y se vuelve a calcular el saldo esperado. El proceso contin\xfaa hasta que el saldo esperado sea mayor o igual a la cantidad de solicitudes de retiro no finalizadas."}),"\n",(0,s.jsx)(a.h2,{id:"enlaces-\xfatiles",children:"Enlaces \xfatiles"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.a,{href:"https://github.com/lidofinance/lido-oracle",children:"C\xf3digo fuente de Lido Oracle"})}),"\n"]})]})}function h(e={}){const{wrapper:a}={...(0,l.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}},3652:(e,a,d)=>{d.d(a,{A:()=>s});const s=d.p+"assets/images/vebo-1-145f4921e5955dba11d50f16f253a99b.png"},511:(e,a,d)=>{d.d(a,{A:()=>s});const s=d.p+"assets/images/vebo-2-fa54c7fe656cf66c7e255590ee86ecf0.png"},3574:(e,a,d)=>{d.d(a,{A:()=>s});const s=d.p+"assets/images/vebo-3-46967b3a524c0a3a468c05b85db3281f.png"},3657:(e,a,d)=>{d.d(a,{A:()=>s});const s=d.p+"assets/images/vebo-4-35a93314617c2d7a596a0b331b05ebcd.png"},9184:(e,a,d)=>{d.d(a,{A:()=>s});const s=d.p+"assets/images/vebo-5-3ca953cdab240ac6a58164f07e42efeb.png"},7515:(e,a,d)=>{d.d(a,{A:()=>s});const s=d.p+"assets/images/vebo-6-f4da2f2471dcb76ffd9a05a3abd9c0b5.png"},8453:(e,a,d)=>{d.d(a,{R:()=>r,x:()=>o});var s=d(6540);const l={},i=s.createContext(l);function r(e){const a=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(i.Provider,{value:a},e.children)}}}]);