"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2143],{1793:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>n,toc:()=>t});var o=i(4848),d=i(8453);const s={},r="Comit\xe9 de Seguridad de Dep\xf3sitos: Manual",n={id:"gu\xedas/deposit-security-manual",title:"Comit\xe9 de Seguridad de Dep\xf3sitos: Manual",description:"Esta instrucci\xf3n ha sido preparada para los participantes del Comit\xe9 de Seguridad de Dep\xf3sitos y describe los puntos generales, los pasos de preparaci\xf3n para actuar como guardianes y los detalles del mecanismo de protecci\xf3n. El Comit\xe9 de Seguridad de Dep\xf3sitos es necesario para evitar la sustituci\xf3n de credenciales de retiro con frontrunning por parte de los operadores de nodos. Cada miembro del comit\xe9 debe realizar varias acciones para garantizar la seguridad de los dep\xf3sitos realizados en Lido. Para participar en la validaci\xf3n, deber\xe1 desplegar un lido-council-daemon y preparar una clave privada para firmar mensajes sobre la correcci\xf3n de datos o la necesidad de detener los dep\xf3sitos en caso de ataque.",source:"@site/docs/gu\xedas/deposit-security-manual.md",sourceDirName:"gu\xedas",slug:"/gu\xedas/deposit-security-manual",permalink:"/gu\xedas/deposit-security-manual",draft:!1,unlisted:!1,editUrl:"https://github.com/adminseedlatam/lido-docs-spanish/edit/main/docs/gu\xedas/deposit-security-manual.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Salidas de validadores y penalizaciones",permalink:"/gu\xedas/oracle-spec/penalties"},next:{title:"Resumen de Herramientas",permalink:"/gu\xedas/tooling"}},l={},t=[{value:"TL;DR",id:"tldr",level:2},{value:"Descripci\xf3n detallada",id:"descripci\xf3n-detallada",level:2},{value:"La vulnerabilidad",id:"la-vulnerabilidad",level:3},{value:"El Comit\xe9 de Seguridad de Dep\xf3sitos",id:"el-comit\xe9-de-seguridad-de-dep\xf3sitos",level:3},{value:"Membres\xeda del Comit\xe9",id:"membres\xeda-del-comit\xe9",level:3},{value:"Responsabilidades de los miembros",id:"responsabilidades-de-los-miembros",level:3},{value:"Pasos de preparaci\xf3n",id:"pasos-de-preparaci\xf3n",level:2},{value:"Cuenta EOA",id:"cuenta-eoa",level:3},{value:"Ejecutar lido-council-daemon",id:"ejecutar-lido-council-daemon",level:3}];function c(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...(0,d.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.h1,{id:"comit\xe9-de-seguridad-de-dep\xf3sitos-manual",children:"Comit\xe9 de Seguridad de Dep\xf3sitos: Manual"}),"\n",(0,o.jsxs)(a.p,{children:["Esta instrucci\xf3n ha sido preparada para los participantes del Comit\xe9 de Seguridad de Dep\xf3sitos y describe los puntos generales, los pasos de preparaci\xf3n para actuar como guardianes y los detalles del mecanismo de protecci\xf3n. El Comit\xe9 de Seguridad de Dep\xf3sitos es necesario para evitar la sustituci\xf3n de credenciales de retiro con frontrunning por parte de los operadores de nodos. Cada miembro del comit\xe9 debe realizar varias acciones para garantizar la seguridad de los dep\xf3sitos realizados en Lido. Para participar en la validaci\xf3n, deber\xe1 desplegar un ",(0,o.jsx)(a.code,{children:"lido-council-daemon"})," y preparar una clave privada para firmar mensajes sobre la correcci\xf3n de datos o la necesidad de detener los dep\xf3sitos en caso de ataque."]}),"\n",(0,o.jsx)(a.h2,{id:"tldr",children:"TL;DR"}),"\n",(0,o.jsx)(a.p,{children:"Antes de ejecutar en la red principal, todos los pasos deben completarse en la red de prueba Hole\u0161ky."}),"\n",(0,o.jsxs)(a.ol,{children:["\n",(0,o.jsx)(a.li,{children:"Prepare una cuenta EOA para firmar datos con una clave privada disponible (no en una billetera de hardware). Ser\xe1 una clave privada caliente moderadamente sensible. Use cuentas diferentes para la red de prueba y la red principal."}),"\n",(0,o.jsx)(a.li,{children:"Env\xede la direcci\xf3n de la cuenta a Lido para que la incluya en el contrato inteligente."}),"\n",(0,o.jsxs)(a.li,{children:["Despliegue y ejecute ",(0,o.jsx)(a.code,{children:"lido-council-daemon"})," con la clave privada de la cuenta EOA. Funcionar\xe1 en modo de prueba hasta que su direcci\xf3n est\xe9 incluida en el contrato inteligente."]}),"\n"]}),"\n",(0,o.jsx)(a.h2,{id:"descripci\xf3n-detallada",children:"Descripci\xf3n detallada"}),"\n",(0,o.jsx)(a.h3,{id:"la-vulnerabilidad",children:"La vulnerabilidad"}),"\n",(0,o.jsxs)(a.p,{children:["Existe una vulnerabilidad que permite a un operador de nodo malicioso interceptar los fondos de los usuarios en los dep\xf3sitos a la cadena Beacon en el protocolo Lido. La vulnerabilidad solo podr\xeda ser explotada si el operador de nodo realiza un frontrunning de la transacci\xf3n ",(0,o.jsx)(a.code,{children:"Lido.depositBufferedEther"})," con un dep\xf3sito directo al Contrato de Dep\xf3sitos de al menos 1 ETH con la misma clave p\xfablica del validador y credenciales de retiro diferentes a las de Lido, obteniendo efectivamente el control sobre 32 ETH de Lido. Para mitigar esto, los contratos de Lido deber\xedan poder verificar que las claves de los operadores de nodos no se hayan utilizado para pre-dep\xf3sitos maliciosos."]}),"\n",(0,o.jsx)(a.h3,{id:"el-comit\xe9-de-seguridad-de-dep\xf3sitos",children:"El Comit\xe9 de Seguridad de Dep\xf3sitos"}),"\n",(0,o.jsx)(a.p,{children:"Proponemos establecer el Comit\xe9 de Seguridad de Dep\xf3sitos dedicado a garantizar la seguridad de los dep\xf3sitos en la cadena Beacon:"}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsx)(a.li,{children:"monitoreando el historial de dep\xf3sitos y el conjunto de claves de Lido disponibles para el dep\xf3sito, firmando y difundiendo mensajes que permitan los dep\xf3sitos;"}),"\n",(0,o.jsx)(a.li,{children:"firmando el mensaje especial que permite a cualquiera pausar los dep\xf3sitos una vez detectados los pre-dep\xf3sitos maliciosos del operador de nodo."}),"\n"]}),"\n",(0,o.jsxs)(a.p,{children:["Para realizar un dep\xf3sito, proponemos reunir un qu\xf3rum de 2/3 de las firmas de los miembros del comit\xe9. Los miembros del comit\xe9 pueden coludirse con los operadores de nodos y robar dinero firmando datos incorrectos que contengan pre-dep\xf3sitos maliciosos. Para mitigar esto, proponemos permitir que un \xfanico miembro del comit\xe9 detenga los dep\xf3sitos y tambi\xe9n imponer l\xedmites de espacio en el tiempo (por ejemplo, no m\xe1s de 150 dep\xf3sitos con 150 bloques entre ellos), para proporcionar a un \xfanico participante honesto la capacidad de detener futuros dep\xf3sitos incluso si la mayor\xeda supermayoritaria coludiera. La idea se deline\xf3 en el post del foro de investigaci\xf3n como la opci\xf3n ",(0,o.jsx)(a.a,{href:"https://research.lido.fi/t/mitigations-for-deposit-front-running-vulnerability/1239#d-approving-deposit-contract-merkle-root-7",children:"d"}),"."]}),"\n",(0,o.jsx)(a.h3,{id:"membres\xeda-del-comit\xe9",children:"Membres\xeda del Comit\xe9"}),"\n",(0,o.jsx)(a.p,{children:"El primer conjunto de guardianes est\xe1 compuesto por seis operadores de nodos (Stakefish, Skillz, Chorus one, Blockscape, Staking facilities, P2P) y el equipo de desarrollo de Lido. En el futuro, queremos involucrar a tantos operadores de nodos como sea posible, por lo que se espera que mientras los 7 guardianes comienzan, el resto de los operadores de nodos tambi\xe9n puedan participar a trav\xe9s de la red de prueba y gradualmente ser incorporados en la red principal."}),"\n",(0,o.jsx)(a.h3,{id:"responsabilidades-de-los-miembros",children:"Responsabilidades de los miembros"}),"\n",(0,o.jsxs)(a.p,{children:["Cada miembro debe preparar una cuenta EOA para firmar el par ",(0,o.jsx)(a.code,{children:"(depositRoot, keysOpIndex)"})," con su clave privada. Las direcciones de los miembros del comit\xe9 se agregar\xe1n al contrato inteligente. Adem\xe1s, el miembro debe ejecutar ",(0,o.jsx)(a.code,{children:"DSC Daemon"})," que monitorea las claves p\xfablicas de los validadores en ",(0,o.jsx)(a.code,{children:"DepositContract"})," y ",(0,o.jsx)(a.code,{children:"NodeOperatorRegistry"}),". El daemon debe tener acceso a la clave privada del miembro del comit\xe9 para poder realizar la firma ECDSA."]}),"\n",(0,o.jsxs)(a.p,{children:["El daemon vigila constantemente todas las actualizaciones en ",(0,o.jsx)(a.code,{children:"DepositContract"})," y ",(0,o.jsx)(a.code,{children:"NodeOperatorRegistry"}),":"]}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsxs)(a.li,{children:["Si el estado es correcto, firma la estructura actual ",(0,o.jsx)(a.code,{children:"to_sign"})," y la emite a una cola de mensajes fuera de cadena."]}),"\n",(0,o.jsxs)(a.li,{children:['Si el estado tiene pre-dep\xf3sitos maliciosos, firma el mensaje de "algo est\xe1 mal" en el bloque actual, lo emite a una cola de mensajes e intenta enviar la transacci\xf3n ',(0,o.jsx)(a.code,{children:"pauseDeposits()"}),"."]}),"\n"]}),"\n",(0,o.jsx)(a.h2,{id:"pasos-de-preparaci\xf3n",children:"Pasos de preparaci\xf3n"}),"\n",(0,o.jsx)(a.p,{children:"Antes de ejecutar en la red principal, todos los pasos deben completarse en la red de prueba Hole\u0161ky."}),"\n",(0,o.jsx)(a.h3,{id:"cuenta-eoa",children:"Cuenta EOA"}),"\n",(0,o.jsx)(a.p,{children:"Puede ser cualquier cuenta EOA bajo el control del miembro. Env\xede la direcci\xf3n de su cuenta a Lido para incluirla en el contrato inteligente. Lido proporcionar\xe1 ETH para realizar transacciones de detenci\xf3n si fuera necesario (lo cual no deber\xeda ocurrir). Tenga en cuenta que todas las acciones, excepto el env\xedo del mensaje de detenci\xf3n, se realizar\xe1n fuera de la cadena."}),"\n",(0,o.jsx)(a.h3,{id:"ejecutar-lido-council-daemon",children:"Ejecutar lido-council-daemon"}),"\n",(0,o.jsxs)(a.p,{children:["Para iniciar la aplicaci\xf3n, consulte la documentaci\xf3n t\xe9cnica en el ",(0,o.jsx)(a.a,{href:"https://github.com/lidofinance/lido-council-daemon#table-of-contents",children:"repositorio del proyecto"}),"."]})]})}function p(e={}){const{wrapper:a}={...(0,d.R)(),...e.components};return a?(0,o.jsx)(a,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,a,i)=>{i.d(a,{R:()=>r,x:()=>n});var o=i(6540);const d={},s=o.createContext(d);function r(e){const a=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function n(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),o.createElement(s.Provider,{value:a},e.children)}}}]);