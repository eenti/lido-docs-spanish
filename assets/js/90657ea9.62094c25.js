"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1213],{1857:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var t=s(4848),n=s(8453);const o={},r="Advertencias de stETH en AAVE",i={id:"gu\xedas-token/steth-on-aave-caveats",title:"Advertencias de stETH en AAVE",description:"Flashloans",source:"@site/docs/gu\xedas-token/steth-on-aave-caveats.md",sourceDirName:"gu\xedas-token",slug:"/gu\xedas-token/steth-on-aave-caveats",permalink:"/gu\xedas-token/steth-on-aave-caveats",draft:!1,unlisted:!1,editUrl:"https://github.com/adminseedlatam/lido-docs-spanish/edit/main/docs/gu\xedas-token/steth-on-aave-caveats.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Funciones de superusuario de stETH",permalink:"/gu\xedas-token/steth-superuser-functions"},next:{title:"Gu\xeda de puenteo para wstETH en rollups",permalink:"/gu\xedas-token/wsteth-bridging-guide"}},d={},l=[{value:"Flashloans",id:"flashloans",level:3},{value:"Soluciones alternativas",id:"soluciones-alternativas",level:3},{value:"\xbfPor qu\xe9 ocurre esto?",id:"por-qu\xe9-ocurre-esto",level:3},{value:"Dep\xf3sitos",id:"dep\xf3sitos",level:3},{value:"Ejemplo de dep\xf3sito",id:"ejemplo-de-dep\xf3sito",level:4}];function c(e){const a={a:"a",br:"br",code:"code",h1:"h1",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"advertencias-de-steth-en-aave",children:"Advertencias de stETH en AAVE"}),"\n",(0,t.jsx)(a.h3,{id:"flashloans",children:"Flashloans"}),"\n",(0,t.jsxs)(a.p,{children:["El protocolo AAVE permite el pr\xe9stamo de cualquier token a trav\xe9s de flashloans, independientemente de si el pr\xe9stamo est\xe1 habilitado o no para el token espec\xedfico. Cualquier usuario puede pedir prestado stETH en AAVE mediante un flashloan.",(0,t.jsx)(a.br,{}),"\n","Debido a las mec\xe1nicas internas de stETH necesarias para el soporte de rebase, en la mayor\xeda de los casos las transferencias de stETH se realizan por el valor de 1 wei menos que el valor pasado al m\xe9todo ",(0,t.jsx)(a.code,{children:"transfer"}),". Esto podr\xeda causar problemas al devolver un flashloan, con la transacci\xf3n revirtiendo con el error ",(0,t.jsx)(a.code,{children:"SafeERC20: low-level call failed"}),"."]}),"\n",(0,t.jsx)(a.h3,{id:"soluciones-alternativas",children:"Soluciones alternativas"}),"\n",(0,t.jsx)(a.p,{children:"Existen dos soluciones alternativas:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Tener al menos 1 wei m\xe1s de stETH del necesario para cerrar el flashloan. En este caso, la cantidad de stETH transferida ser\xe1 igual o 1 wei mayor que la cantidad prestada."}),"\n",(0,t.jsxs)(a.li,{children:["Si no es posible dejar un wei extra por alguna raz\xf3n, se debe verificar si la cantidad a transferir coincide realmente con la cantidad prestada antes de tiempo. Esto se puede hacer utilizando la siguiente f\xf3rmula:","\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{children:"uint256 exactTransferedAmount = StETH.getPooledEthByShares(StETH.getSharesByPooledEth(amount))\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.h3,{id:"por-qu\xe9-ocurre-esto",children:"\xbfPor qu\xe9 ocurre esto?"}),"\n",(0,t.jsxs)(a.p,{children:["Los rebase diarios de stETH se implementan mediante ",(0,t.jsx)(a.code,{children:"shares"}),", que es la unidad b\xe1sica que representa la participaci\xf3n del titular de stETH en la cantidad total de ether controlada por el protocolo Lido.\nDebido al redondeo matem\xe1tico hacia abajo, es com\xfan que no se pueda transferir todo el saldo de stETH de una cuenta, dejando 1 wei en la cuenta del remitente. Esto sucede porque el \xfaltimo wei es inferior a 1 share y se redondea a cero en la transferencia."]}),"\n",(0,t.jsx)(a.h3,{id:"dep\xf3sitos",children:"Dep\xf3sitos"}),"\n",(0,t.jsxs)(a.p,{children:["Cuando se deposita stETH en el pool de pr\xe9stamos en AAVE, la siguiente declaraci\xf3n se considera correcta:",(0,t.jsx)(a.br,{}),"\n",'"En cualquier momento, un usuario puede depositar X stETH para emitir X astETH. El suministro total de astETH aumenta en X."\nDe hecho, la cantidad real de astETH emitidos puede ser menor o igual a X debido a la divisi\xf3n doble de enteros (en la tasa de rebase del token stETH y la tasa de inter\xe9s de AAVE). Sin embargo, el error de redondeo real no se espera que exceda un par de wei en cualquier momento. Mientras tanto, el evento emitido reportar\xe1 la cantidad inicialmente depositada completa.']}),"\n",(0,t.jsx)(a.h4,{id:"ejemplo-de-dep\xf3sito",children:"Ejemplo de dep\xf3sito"}),"\n",(0,t.jsxs)(a.p,{children:["En este ",(0,t.jsx)(a.a,{href:"https://etherscan.io/tx/0xd599641193da40080f3effa175874624f49a8efd6f5b748abd8bc7950fc270f0",children:"caso de dep\xf3sito"})," podemos ver que se depositaron 369 stETH en el pool de pr\xe9stamos stETH de AAVE. Pero de hecho, se transfirieron 368.999999999999999999 stETH desde el remitente y se emitieron 368.999999999999999998 astETH en la direcci\xf3n del remitente. Sin embargo, los eventos reportaron exactamente 369 stETH transferidos y 369 astETH emitidos."]})]})}function u(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,a,s)=>{s.d(a,{R:()=>r,x:()=>i});var t=s(6540);const n={},o=t.createContext(n);function r(e){const a=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),t.createElement(o.Provider,{value:a},e.children)}}}]);