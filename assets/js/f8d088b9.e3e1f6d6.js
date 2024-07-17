"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8102],{4866:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>t,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var i=n(4848),o=n(8453);const s={},r="Flujo de Lanzamiento",l={id:"ipfs/release-flow",title:"Flujo de Lanzamiento",description:"Lanzar el widget a IPFS implica varios pasos, entre ellos:",source:"@site/docs/ipfs/release-flow.md",sourceDirName:"ipfs",slug:"/ipfs/release-flow",permalink:"/ipfs/release-flow",draft:!1,unlisted:!1,editUrl:"https://github.com/adminseedlatam/lido-docs-spanish/edit/main/docs/ipfs/release-flow.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Acerca de IPFS",permalink:"/ipfs/about"},next:{title:"Security",permalink:"/ipfs/security"}},t={},d=[{value:"Flujo de trabajo de GitHub Actions",id:"flujo-de-trabajo-de-github-actions",level:2},{value:"Pasos del flujo de trabajo",id:"pasos-del-flujo-de-trabajo",level:3}];function c(e){const a={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.h1,{id:"flujo-de-lanzamiento",children:"Flujo de Lanzamiento"}),"\n",(0,i.jsx)(a.p,{children:"Lanzar el widget a IPFS implica varios pasos, entre ellos:"}),"\n",(0,i.jsxs)(a.ol,{children:["\n",(0,i.jsx)(a.li,{children:"Crear un archivo de contenido direccionable (archivo CAR) que contenga los archivos necesarios para el funcionamiento del widget."}),"\n",(0,i.jsx)(a.li,{children:"Subir el archivo CAR a la red IPFS utilizando un proveedor de IPFS."}),"\n",(0,i.jsx)(a.li,{children:"Fijar el archivo CAR subido para asegurar su disponibilidad permanente en la red IPFS."}),"\n"]}),"\n",(0,i.jsx)(a.admonition,{title:"Fijaci\xf3n en IPFS",type:"note",children:(0,i.jsx)(a.p,{children:"Por defecto, los nodos de IPFS solo mantienen los datos en su cach\xe9 durante un tiempo limitado.\nLuego, los datos se eliminan mediante un proceso autom\xe1tico de recolecci\xf3n de basura.\nPara asegurar que el contenido permanezca disponible en la red IPFS de manera permanente,\ndebe ser fijado utilizando su Identificador de Contenido (CID)."})}),"\n",(0,i.jsx)(a.p,{children:"El poder de GitHub Actions se utiliza para completar y automatizar estos y otros pasos necesarios."}),"\n",(0,i.jsx)(a.h2,{id:"flujo-de-trabajo-de-github-actions",children:"Flujo de trabajo de GitHub Actions"}),"\n",(0,i.jsx)(a.p,{children:"GitHub Actions ya se ha utilizado para construir y desplegar aplicaciones de Lido, por lo que se decidi\xf3 adaptarlos para los lanzamientos en IPFS."}),"\n",(0,i.jsx)(a.p,{children:"El lanzamiento en IPFS ocurre como el siguiente paso despu\xe9s de un lanzamiento regular de la aplicaci\xf3n."}),"\n",(0,i.jsx)(a.p,{children:"Pero solo las actualizaciones mayores o cr\xedticas se lanzan a IPFS debido a las numerosas acciones requeridas para realizar un lanzamiento en IPFS, y tambi\xe9n al hecho de que cada nuevo lanzamiento de una aplicaci\xf3n de Lido producir\xe1 un nuevo CID y estar\xe1 disponible en la nueva direcci\xf3n, lo cual es inconveniente para los usuarios que desean usar siempre la \xfaltima versi\xf3n de una aplicaci\xf3n."}),"\n",(0,i.jsx)(a.p,{children:"El flujo de trabajo desarrollado permite la fijaci\xf3n autom\xe1tica de cualquier aplicaci\xf3n de Lido que est\xe9 t\xe9cnicamente lista para operar en IPFS.\nAdem\xe1s, la fijaci\xf3n no se limita a un solo proveedor, sino que se puede realizar en varios proveedores simult\xe1neamente.\nEste enfoque busca aprovechar la descentralizaci\xf3n, garantizando la accesibilidad al contenido de IPFS desde m\xfaltiples proveedores en caso de que uno de ellos falle. Esta configuraci\xf3n tambi\xe9n permite pruebas independientes de la interfaz de usuario en varias redes y entornos."}),"\n",(0,i.jsxs)(a.p,{children:["La fijaci\xf3n en IPFS y la preparaci\xf3n de transacciones ENS en el flujo de trabajo son facilitadas por el paquete ",(0,i.jsx)(a.a,{href:"https://github.com/StauroDEV/blumen",children:"Blumen"}),", desarrollado en colaboraci\xf3n con Lido."]}),"\n",(0,i.jsxs)(a.p,{children:["En cada lanzamiento en IPFS, la verificaci\xf3n del contenido es realizada por contribuyentes de desarrollo y QA de Lido para asegurar que no se agregue contenido inesperado al c\xf3digo durante el proceso de CI.\nLa verificaci\xf3n se basa en comparaciones de hash, y si lo deseas, tambi\xe9n puedes\nrealizarla utilizando las ",(0,i.jsx)(a.a,{href:"/ipfs/hash-verification",children:"instrucciones proporcionadas"}),"."]}),"\n",(0,i.jsxs)(a.p,{children:["Despu\xe9s de la verificaci\xf3n, se inicia el lanzamiento en IPFS, lo que resulta en la adici\xf3n de la informaci\xf3n de fijaci\xf3n obtenida a la ",(0,i.jsx)(a.a,{href:"https://github.com/lidofinance/ethereum-staking-widget/releases",children:"p\xe1gina de lanzamientos"})," de la aplicaci\xf3n.\nLos detalles sobre la fijaci\xf3n en IPFS (CID, proveedores de IPFS, puerta de enlace HTTPS, archivos fuente) se adjuntan a la descripci\xf3n del lanzamiento."]}),"\n",(0,i.jsx)(a.h3,{id:"pasos-del-flujo-de-trabajo",children:"Pasos del flujo de trabajo"}),"\n",(0,i.jsxs)(a.p,{children:["Puedes encontrar el c\xf3digo fuente del flujo de trabajo ",(0,i.jsx)(a.a,{href:"https://github.com/lidofinance/actions/blob/main/.github/workflows/ci-ipfs.yml",children:"en GitHub"}),".\nEl flujo de trabajo realiza los siguientes pasos:"]}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsx)(a.li,{children:"Recuperar los secretos necesarios, etiquetas y los archivos de compilaci\xf3n de la aplicaci\xf3n."}),"\n",(0,i.jsx)(a.li,{children:"Obtener informaci\xf3n sobre la fecha y el hash de commit de la etiqueta."}),"\n",(0,i.jsxs)(a.li,{children:["Ejecutar el script ",(0,i.jsx)(a.a,{href:"https://github.com/StauroDEV/blumen",children:"Blumen"})," para realizar la fijaci\xf3n en IPFS."]}),"\n",(0,i.jsx)(a.li,{children:"Crear artefactos para adjuntar al lanzamiento."}),"\n",(0,i.jsx)(a.li,{children:"Buscar un lanzamiento existente en GitHub basado en la etiqueta proporcionada para modificar la descripci\xf3n."}),"\n",(0,i.jsx)(a.li,{children:"Generar y modificar la descripci\xf3n existente del lanzamiento."}),"\n"]})]})}function u(e={}){const{wrapper:a}={...(0,o.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,a,n)=>{n.d(a,{R:()=>r,x:()=>l});var i=n(6540);const o={},s=i.createContext(o);function r(e){const a=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:a},e.children)}}}]);