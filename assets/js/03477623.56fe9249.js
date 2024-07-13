"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2141],{9497:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>n,toc:()=>t});var s=o(4848),d=o(8453);const i={},r="Salidas de validadores y penalizaciones",n={id:"gu\xedas/oracle-spec/penalties",title:"Salidas de validadores y penalizaciones",description:'El protocolo Lido ha establecido la pol\xedtica sobre el orden de salida de los validadores, las expectativas de rendimiento a lo largo del tiempo, las responsabilidades de los operadores de nodos, y la monitorizaci\xf3n y penalizaciones. Las salidas de los validadores deben ser determin\xedsticas e independientes para garantizar la confianza, y el orden de salida propuesto actualmente es el "enfoque combinado". Inicialmente, los mecanismos de ejecuci\xf3n y las expectativas de nivel de servicio son lo suficientemente suaves como para resolver problemas iniciales sin penalizaciones irrazonables, pero las penalizaciones por falta de rendimiento deben aumentar una vez que los procesos y mecanismos maduren. Los operadores de nodos tienen el deber de salir a los validadores de manera correcta y oportuna, y las herramientas para el procesamiento semi o completamente automatizado de solicitudes de salida de validadores incluyen el servicio de API de Claves, los informes del Or\xe1culo de Ejector y el Ejector de Validadores. Los operadores de nodos deben adherirse a los niveles de servicio requeridos para las salidas de validadores, o corren el riesgo de ser clasificados como retrasados o morosos.',source:"@site/docs/gu\xedas/oracle-spec/penalties.md",sourceDirName:"gu\xedas/oracle-spec",slug:"/gu\xedas/oracle-spec/penalties",permalink:"/lido-docs-spanish/gu\xedas/oracle-spec/penalties",draft:!1,unlisted:!1,editUrl:"https://github.com/adminseedlatam/lido-docs-spanish/edit/main/docs/gu\xedas/oracle-spec/penalties.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"validator-exit-bus",permalink:"/lido-docs-spanish/gu\xedas/oracle-spec/validator-exit-bus"},next:{title:"Comit\xe9 de Seguridad de Dep\xf3sitos: Manual",permalink:"/lido-docs-spanish/gu\xedas/deposit-security-manual"}},l={},t=[{value:"Enlaces \xfatiles",id:"enlaces-\xfatiles",level:4}];function c(e){const a={a:"a",h1:"h1",h4:"h4",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h1,{id:"salidas-de-validadores-y-penalizaciones",children:"Salidas de validadores y penalizaciones"}),"\n",(0,s.jsx)(a.p,{children:'El protocolo Lido ha establecido la pol\xedtica sobre el orden de salida de los validadores, las expectativas de rendimiento a lo largo del tiempo, las responsabilidades de los operadores de nodos, y la monitorizaci\xf3n y penalizaciones. Las salidas de los validadores deben ser determin\xedsticas e independientes para garantizar la confianza, y el orden de salida propuesto actualmente es el "enfoque combinado". Inicialmente, los mecanismos de ejecuci\xf3n y las expectativas de nivel de servicio son lo suficientemente suaves como para resolver problemas iniciales sin penalizaciones irrazonables, pero las penalizaciones por falta de rendimiento deben aumentar una vez que los procesos y mecanismos maduren. Los operadores de nodos tienen el deber de salir a los validadores de manera correcta y oportuna, y las herramientas para el procesamiento semi o completamente automatizado de solicitudes de salida de validadores incluyen el servicio de API de Claves, los informes del Or\xe1culo de Ejector y el Ejector de Validadores. Los operadores de nodos deben adherirse a los niveles de servicio requeridos para las salidas de validadores, o corren el riesgo de ser clasificados como retrasados o morosos.'}),"\n",(0,s.jsx)(a.p,{children:'Se ha implementado una herramienta denominada "Monitor Daemon" para conciliar las solicitudes de salida de validadores se\xf1aladas con las salidas procesadas por la Capa de Consenso de Ethereum para determinar si los validadores han sido retirados de manera oportuna. Los resultados de este monitoreo est\xe1n disponibles p\xfablicamente para asegurar que la DAO tenga acceso a los datos necesarios para comprender la tasa, flujo y eficacia de las salidas de validadores.'}),"\n",(0,s.jsx)(a.p,{children:"Aunque el proceso puede ser en gran parte automatizado, para tener en cuenta diferencias en infraestructura, horas de trabajo y tiempos de mecanismo, se establecen los siguientes niveles de servicio requeridos para las salidas de validadores a los cuales los operadores de nodos deben adherirse."}),"\n",(0,s.jsx)(a.p,{children:'Si los operadores de nodos est\xe1n procesando las solicitudes de salida de validadores se\xf1aladas tan pronto como est\xe1n disponibles, el tiempo m\xe1s corto posible para que una solicitud de salida de validador pase de "se\xf1alada" a "procesada" estar\xe1 en alg\xfan lugar dentro del rango de unos pocos minutos a una hora. Con respecto al rendimiento de la salida de validadores, cada operador de nodo puede ser considerado con uno de los siguientes tres estados.'}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"En buen estado - las solicitudes de salida de validadores se procesan completamente, correctamente y puntualmente."}),"\n",(0,s.jsx)(a.li,{children:"Retrasado - las solicitudes de salida de validadores se procesan de manera incompleta, incorrecta o no dentro del marco de tiempo deseado."}),"\n",(0,s.jsx)(a.li,{children:"Moroso - las solicitudes de salida de validadores se procesan de manera incompleta, incorrecta o no dentro del marco de tiempo m\xe1ximo aceptable."}),"\n"]}),"\n",(0,s.jsxs)(a.table,{children:[(0,s.jsx)(a.thead,{children:(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.th,{children:"Evento"}),(0,s.jsx)(a.th,{children:"Requisito para no ser considerado Retrasado"}),(0,s.jsx)(a.th,{children:"Requisito para no ser considerado Moroso"})]})}),(0,s.jsxs)(a.tbody,{children:[(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"Procesamiento de solicitudes de salida de validadores se\xf1aladas"}),(0,s.jsx)(a.td,{children:"Todas las solicitudes se\xf1aladas se procesan lo antes posible (no m\xe1s de 1 d\xeda)"}),(0,s.jsx)(a.td,{children:"Algunas solicitudes se\xf1aladas est\xe1n tardando m\xe1s de 1 pero menos de 4 d\xedas en procesarse"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"Escalaci\xf3n de incapacidad para ejecutar solicitud de salida de validador se\xf1alada con raz\xf3n"}),(0,s.jsx)(a.td,{children:"Lo antes posible pero no m\xe1s de 1 d\xeda"}),(0,s.jsx)(a.td,{children:"Lo antes posible pero no m\xe1s de 4 d\xedas"})]})]})]}),"\n",(0,s.jsx)(a.p,{children:"En caso de que los operadores de nodos no est\xe9n procesando las solicitudes de salida de validadores de manera oportuna, se tomar\xe1n las siguientes acciones:\nSi un operador de nodo tiene un estado de Retrasado, se debe plantear un problema en las comunicaciones internas con el operador de nodo y solicitar acci\xf3n correctiva."}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["Si un operador de nodo tiene un estado de Moroso, los contribuyentes de la DAO pueden plantear un problema formal con el operador de nodo en el foro de investigaci\xf3n de Lido. Mientras un operador de nodo tenga un estado de Moroso:","\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"No se asignar\xe1 autom\xe1ticamente nueva participaci\xf3n al operador de nodo;"}),"\n",(0,s.jsx)(a.li,{children:"Las recompensas diarias enviadas al operador de nodo se reducir\xe1n a la mitad (con la mitad restante enviada hacia el rebase de ese d\xeda) (esto ocurre autom\xe1ticamente);"}),"\n",(0,s.jsx)(a.li,{children:"Las recompensas reducidas continuar\xe1n durante la duraci\xf3n de un per\xedodo de enfriamiento lo suficientemente largo como para determinar si, inmediatamente despu\xe9s de la restauraci\xf3n del servicio por parte del operador de nodo, las solicitudes de salida de validadores recibidas posteriormente se procesan de manera oportuna."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["Si un operador de nodo tiene un estado de Retrasado o Moroso, el m\xf3dulo fuera de la cadena ",(0,s.jsx)(a.a,{href:"/lido-docs-spanish/gu%C3%ADas/oracle-spec/validator-exit-bus",children:"Validators Exit Bus"})," Oracle asumir\xe1 que el operador de nodo no responde y reenrutar\xe1 nuevas solicitudes de salida de validadores a operadores que no sean considerados morosos. Debido al reenrutamiento de solicitudes de salida de validadores, la DAO deber\xe1 considerar (mediante una votaci\xf3n ad-hoc) anular el l\xedmite total de validadores activos para el operador de nodo relevante de manera que si/cuando vuelvan a tener un estado de buen estado, no se beneficien a expensas de operadores de nodo que hayan asumido el procesamiento de las solicitudes reenrutadas."]}),"\n",(0,s.jsx)(a.li,{children:'Una vez que un operador de nodo moroso haya procesado todas las solicitudes de salida de validadores se\xf1aladas (y as\xed se actualice su n\xfamero de validadores morosos en el siguiente informe del Or\xe1culo de Contabilidad a 0), volver\xe1n a recibir solicitudes de salida de validadores. Su estado se revertir\xe1 a "En buen estado" despu\xe9s de 5 d\xedas (es decir, siempre que las nuevas solicitudes de salida de validadores recibidas se procesen de manera oportuna). Durante este per\xedodo de "enfriamiento" de 5 d\xedas, continuar\xe1n sin recibir nueva participaci\xf3n y recibir\xe1n recompensas reducidas.'}),"\n",(0,s.jsx)(a.li,{children:'En los casos m\xe1s graves (por ejemplo, morosidad durante semanas), la DAO puede considerar una votaci\xf3n en cadena para "detener" al operador de nodo, lo que tiene el efecto de establecer en cero las tarifas que reciben (la DAO puede considerar tal votaci\xf3n en cualquier momento). Si el operador de nodo no responde a las solicitudes de la DAO, entonces se considera que el operador de nodo ha sido efectivamente "dado de baja" del protocolo Lido y la DAO debe tomar m\xe1s medidas para formalizar la salida del operador de nodo.'}),"\n"]}),"\n",(0,s.jsx)(a.p,{children:'En el caso de que un operador de nodo no pueda, por cualquier motivo, retirar a un validador (por ejemplo, p\xe9rdida de la clave privada asociada con ese validador), se espera que reembolse a los participantes del protocolo proporcionando el saldo m\xe1ximo irrecuperable del validador (es decir, 32 ETH, ya que cualquier cantidad superior se puede obtener a trav\xe9s de recompensas parciales). Hacerlo convierte al validador en cuesti\xf3n en "irrecuperable y reembolsado" y no cuenta en contra del operador de nodo en t\xe9rminos de evaluar su estado de solicitud de salida de validador.'}),"\n",(0,s.jsx)(a.h4,{id:"enlaces-\xfatiles",children:"Enlaces \xfatiles"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.a,{href:"https://github.com/lidofinance/documents-and-policies/blob/main/Lido%20on%20Ethereum%20-%20Validator%20Exits%20Policy.md",children:"Pol\xedtica de Salidas de Validadores de Lido"})}),"\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.a,{href:"https://research.lido.fi/t/lido-validator-exits-policy-draft-for-discussion/3864",children:"Pol\xedtica de Salidas de Validadores de Lido: Discusi\xf3n en el foro"})}),"\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.a,{href:"https://research.lido.fi/t/withdrawals-on-validator-exiting-order/3048/1",children:"Retiros: sobre el orden de salida de validadores"})}),"\n"]})]})}function p(e={}){const{wrapper:a}={...(0,d.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,a,o)=>{o.d(a,{R:()=>r,x:()=>n});var s=o(6540);const d={},i=s.createContext(d);function r(e){const a=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function n(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),s.createElement(i.Provider,{value:a},e.children)}}}]);