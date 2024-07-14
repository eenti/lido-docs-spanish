"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3331],{5384:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var n=i(4848),r=i(8453);const s={},l="Verificaci\xf3n de propiedad de direcci\xf3n para operaciones del Lido DAO",c={id:"gu\xedas/address-ownership-guide",title:"Verificaci\xf3n de propiedad de direcci\xf3n para operaciones del Lido DAO",description:'El uso de una cuenta externa (EOA) en las operaciones del Lido DAO o contratos del protocolo requiere proporcionar una "prueba de propiedad" p\xfablica. Los principales casos de uso son utilizar la direcci\xf3n como firmante en las multisigs del Lido DAO o usar EOAs para herramientas fuera de la cadena donde se pueden requerir derechos espec\xedficos.',source:"@site/docs/gu\xedas/address-ownership-guide.md",sourceDirName:"gu\xedas",slug:"/gu\xedas/address-ownership-guide",permalink:"/lido-docs-spanish/gu\xedas/address-ownership-guide",draft:!1,unlisted:!1,editUrl:"https://github.com/adminseedlatam/lido-docs-spanish/edit/main/docs/gu\xedas/address-ownership-guide.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Gu\xeda para Easy Track",permalink:"/lido-docs-spanish/gu\xedas/easy-track-guide"},next:{title:"Gu\xeda para ser un firmante en cualquier multisig del Lido DAO",permalink:"/lido-docs-spanish/gu\xedas/multisig-signer-manual"}},d={},o=[{value:"Preparaci\xf3n y compartici\xf3n de direcci\xf3n y firma",id:"preparaci\xf3n-y-compartici\xf3n-de-direcci\xf3n-y-firma",level:2},{value:"En caso de usar una cuenta externa (EOA)",id:"en-caso-de-usar-una-cuenta-externa-eoa",level:3},{value:"En caso de usar Safe multisig",id:"en-caso-de-usar-safe-multisig",level:3},{value:"Verificaci\xf3n de la firma de Ethereum",id:"verificaci\xf3n-de-la-firma-de-ethereum",level:2},{value:"En caso de usar EOA",id:"en-caso-de-usar-eoa",level:3},{value:"Interfaz de Etherscan",id:"interfaz-de-etherscan",level:3},{value:"MyEtherWallet",id:"myetherwallet",level:3},{value:"Publicaci\xf3n de la firma en Etherscan",id:"publicaci\xf3n-de-la-firma-en-etherscan",level:3},{value:"En caso de usar Safe multisig",id:"en-caso-de-usar-safe-multisig-1",level:3}];function t(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"verificaci\xf3n-de-propiedad-de-direcci\xf3n-para-operaciones-del-lido-dao",children:"Verificaci\xf3n de propiedad de direcci\xf3n para operaciones del Lido DAO"}),"\n",(0,n.jsx)(a.p,{children:'El uso de una cuenta externa (EOA) en las operaciones del Lido DAO o contratos del protocolo requiere proporcionar una "prueba de propiedad" p\xfablica. Los principales casos de uso son utilizar la direcci\xf3n como firmante en las multisigs del Lido DAO o usar EOAs para herramientas fuera de la cadena donde se pueden requerir derechos espec\xedficos.'}),"\n",(0,n.jsx)(a.h2,{id:"preparaci\xf3n-y-compartici\xf3n-de-direcci\xf3n-y-firma",children:"Preparaci\xf3n y compartici\xf3n de direcci\xf3n y firma"}),"\n",(0,n.jsx)(a.h3,{id:"en-caso-de-usar-una-cuenta-externa-eoa",children:"En caso de usar una cuenta externa (EOA)"}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsxs)(a.li,{children:["Firma el mensaje con algo como ",(0,n.jsx)(a.code,{children:"@my_social_handle is looking to join X Lido DAO multisig with address 0x..."})," con la clave privada que est\xe1s buscando usar como clave de firma. Una de las opciones es usar la interfaz web de MyEtherWallet:","\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsxs)(a.li,{children:["Conecta tu billetera a ",(0,n.jsx)(a.a,{href:"https://www.myetherwallet.com/wallet/access",children:"https://www.myetherwallet.com/wallet/access"}),"."]}),"\n",(0,n.jsxs)(a.li,{children:["Ve a ",(0,n.jsx)(a.a,{href:"https://www.myetherwallet.com/wallet/sign",children:"https://www.myetherwallet.com/wallet/sign"}),' (el enlace de la interfaz est\xe1 bajo el desplegable "Message" a la izquierda).']}),"\n",(0,n.jsx)(a.li,{children:'Ingresa el mensaje, haz clic en "sign" y firma el mensaje en la billetera.'}),"\n",(0,n.jsxs)(a.li,{children:["El campo ",(0,n.jsx)(a.code,{children:"sig"})," en el resultado json es el hash de la firma."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(a.li,{children:"Publica el mensaje junto con el hash de la firma en Twitter u otra red social f\xe1cilmente accesible."}),"\n",(0,n.jsxs)(a.li,{children:["Comparte el enlace a la publicaci\xf3n como un comentario en la publicaci\xf3n relevante del ",(0,n.jsx)(a.a,{href:"https://research.lido.fi",children:"foro de Lido DAO"}),"."]}),"\n",(0,n.jsxs)(a.li,{children:["Aseg\xfarate de seguir las ",(0,n.jsx)(a.a,{href:"./multisig-signer-manual",children:"reglas generales"})," para ser un firmante en las multisigs del Lido DAO."]}),"\n"]}),"\n",(0,n.jsx)(a.h3,{id:"en-caso-de-usar-safe-multisig",children:"En caso de usar Safe multisig"}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsxs)(a.li,{children:["En la pantalla principal de tu billetera multisig en ",(0,n.jsx)(a.a,{href:"https://app.safe.global",children:"https://app.safe.global"}),', presiona el bot\xf3n "New transaction" y selecciona "Contract interaction" en la pantalla que aparece.']}),"\n",(0,n.jsx)(a.li,{children:'En la pantalla de Nueva Transacci\xf3n, activa el interruptor "Custom data".'}),"\n",(0,n.jsxs)(a.li,{children:["Ingresa cualquier direcci\xf3n EOA (por ejemplo ",(0,n.jsx)(a.code,{children:"0x0000000000000000000000000000000000000000"}),') en el campo "Enter Address or ENS Name".']}),"\n",(0,n.jsxs)(a.li,{children:["Usa cualquier codificador hexadecimal (como ",(0,n.jsx)(a.a,{href:"https://www.duplichecker.com/hex-to-text.php",children:"https://www.duplichecker.com/hex-to-text.php"}),") para codificar un mensaje que consista en informaci\xf3n sobre qui\xe9n se une a qu\xe9 comit\xe9 o multisig del Lido con qu\xe9 direcci\xf3n, por ejemplo, ",(0,n.jsx)(a.code,{children:"@mi_manejo_social est\xe1 buscando unirse a X multisig del Lido DAO con la direcci\xf3n 0x..."}),"."]}),"\n",(0,n.jsx)(a.li,{children:'Pega el c\xf3digo generado en el paso anterior en el campo "Data (Hex encoded)" de la pantalla de Nueva Transacci\xf3n en la interfaz multisig (agrega "0x" al inicio del c\xf3digo HEX si falta), pon "0" en el campo de valor ETH.'}),"\n",(0,n.jsx)(a.li,{children:"Publica el mensaje junto con el hash de la transacci\xf3n en Twitter u otra red social f\xe1cilmente accesible."}),"\n",(0,n.jsxs)(a.li,{children:["Comparte el hash de la transacci\xf3n en la publicaci\xf3n como un comentario en la publicaci\xf3n relevante del ",(0,n.jsx)(a.a,{href:"https://research.lido.fi",children:"foro del Lido DAO"}),"."]}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"verificaci\xf3n-de-la-firma-de-ethereum",children:"Verificaci\xf3n de la firma de Ethereum"}),"\n",(0,n.jsx)(a.h3,{id:"en-caso-de-usar-eoa",children:"En caso de usar EOA"}),"\n",(0,n.jsx)(a.p,{children:"Para verificar la firma compartida, se puede usar las interfaces de Etherscan o MyEtherWallet."}),"\n",(0,n.jsx)(a.h3,{id:"interfaz-de-etherscan",children:"Interfaz de Etherscan"}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsxs)(a.li,{children:["Ve a ",(0,n.jsx)(a.a,{href:"https://etherscan.io/verifiedSignatures",children:"https://etherscan.io/verifiedSignatures"}),"."]}),"\n",(0,n.jsxs)(a.li,{children:["Haz clic en el bot\xf3n ",(0,n.jsx)(a.code,{children:"Verify Signature"}),"."]}),"\n",(0,n.jsxs)(a.li,{children:["Ingresa los datos de la direcci\xf3n, el mensaje y el hash de la firma y haz clic en ",(0,n.jsx)(a.code,{children:"Continue"}),"."]}),"\n",(0,n.jsx)(a.li,{children:"Verifica si la firma proporcionada es v\xe1lida."}),"\n"]}),"\n",(0,n.jsx)(a.h3,{id:"myetherwallet",children:"MyEtherWallet"}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsxs)(a.li,{children:["Ve a ",(0,n.jsx)(a.a,{href:"https://www.myetherwallet.com/tools?tool=verify",children:"https://www.myetherwallet.com/tools?tool=verify"}),"."]}),"\n",(0,n.jsxs)(a.li,{children:["Codifica el texto del mensaje como una cadena hexadecimal (usa una herramienta como ",(0,n.jsx)(a.a,{href:"https://appdevtools.com/text-hex-converter",children:"https://appdevtools.com/text-hex-converter"}),")."]}),"\n",(0,n.jsxs)(a.li,{children:["Ingresa el json y haz clic en ",(0,n.jsx)(a.code,{children:"Verify"}),":","\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:'{\n  "address": "0x...",\n  "msg": "0x...",\n  "sig": "signature_hash"\n}\n'})}),"\n",'Nota que "msg" es texto hexadecimal que comienza con ',(0,n.jsx)(a.code,{children:"0x"})," (agrega ",(0,n.jsx)(a.code,{children:"0x"})," antes de la cadena codificada en hexadecimal si es necesario)."]}),"\n",(0,n.jsx)(a.li,{children:"Verifica si la firma proporcionada es v\xe1lida."}),"\n"]}),"\n",(0,n.jsx)(a.h3,{id:"publicaci\xf3n-de-la-firma-en-etherscan",children:"Publicaci\xf3n de la firma en Etherscan"}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsxs)(a.li,{children:["Ve a ",(0,n.jsx)(a.a,{href:"https://etherscan.io/verifiedSignatures",children:"https://etherscan.io/verifiedSignatures"}),' y haz clic en "Verify Signature".']}),"\n",(0,n.jsxs)(a.li,{children:["Ingresa la direcci\xf3n, el mensaje en texto plano (no la versi\xf3n hexadecimal que MyEtherWallet dar\xe1) y la firma (con el prefijo ",(0,n.jsx)(a.code,{children:"0x"}),'), elige la opci\xf3n "Verify & publish" y haz clic en "Continue".']}),"\n",(0,n.jsx)(a.li,{children:"Despu\xe9s de que se verifique la firma, obtendr\xe1s el enlace para compartir."}),"\n"]}),"\n",(0,n.jsx)(a.h3,{id:"en-caso-de-usar-safe-multisig-1",children:"En caso de usar Safe multisig"}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsxs)(a.li,{children:["Ve a la transacci\xf3n firmada en ",(0,n.jsx)(a.a,{href:"https://etherscan.io/",children:"Etherscan"}),"."]}),"\n",(0,n.jsx)(a.li,{children:'Haz clic para mostrar m\xe1s detalles y encuentra el campo "input Data", haz clic en "Decode input data".'}),"\n",(0,n.jsxs)(a.li,{children:['Copia el c\xf3digo hexadecimal en la fila "data" y ll\xe9valo a cualquier decodificador hexadecimal (como ',(0,n.jsx)(a.a,{href:"https://www.duplichecker.com/hex-to-text.php",children:"duplichecker"}),")."]}),"\n",(0,n.jsxs)(a.li,{children:["Decodifica y verifica el mensaje (ten en cuenta que es posible que necesites eliminar el ",(0,n.jsx)(a.code,{children:"0x"})," inicial del c\xf3digo hexadecimal obtenido en el paso anterior)."]}),"\n"]})]})}function h(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(t,{...e})}):t(e)}},8453:(e,a,i)=>{i.d(a,{R:()=>l,x:()=>c});var n=i(6540);const r={},s=n.createContext(r);function l(e){const a=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(s.Provider,{value:a},e.children)}}}]);