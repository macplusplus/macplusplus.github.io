(this.webpackJsonpMETABALL_nft_minting_dapp=this.webpackJsonpMETABALL_nft_minting_dapp||[]).push([[0],{242:function(e,t){},265:function(e,t){},267:function(e,t){},344:function(e,t){},346:function(e,t){},379:function(e,t){},384:function(e,t){},386:function(e,t){},393:function(e,t){},406:function(e,t){},429:function(e,t){},438:function(e,t){},440:function(e,t){},517:function(e,t,n){},518:function(e,t,n){"use strict";n.r(t);var i,c,a,s,o,r,l,d,j,x,h,b,f,g,p,O,u,m,y,w,A,v,S,E,k,L,T=n(2),M=n(84),C=n.n(M),_=n(16),N=n.n(_),z=n(42),R=n(68),B=n(12),I=n(57),F=(n(67),n(216),n(69)),W=n(217),D=n(18),U={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONNECTION_REQUEST":return Object(D.a)(Object(D.a)({},U),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(D.a)(Object(D.a)({},e),{},{loading:!1,account:t.payload.account,smartContract:t.payload.smartContract,web3:t.payload.web3});case"CONNECTION_FAILED":return Object(D.a)(Object(D.a)({},U),{},{loading:!1,errorMsg:t.payload});case"UPDATE_ACCOUNT":return Object(D.a)(Object(D.a)({},e),{},{account:t.payload.account});default:return e}},P={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_DATA_REQUEST":return Object(D.a)(Object(D.a)({},e),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(D.a)(Object(D.a)({},e),{},{loading:!1,totalSupply:t.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(D.a)(Object(D.a)({},P),{},{loading:!1,error:!0,errorMsg:t.payload});default:return e}},Y=Object(F.b)({blockchain:H,data:K}),J=[W.a],G=Object(F.c)(F.a.apply(void 0,J)),X=Object(F.d)(Y,G),q=function(e){return{type:"CHECK_DATA_FAILED",payload:e}},Q=function(){return function(){var e=Object(z.a)(N.a.mark((function e(t){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CHECK_DATA_REQUEST"}),e.prev=1,e.next=4,X.getState().blockchain.smartContract.methods.totalSupply().call();case 4:n=e.sent,t({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:n}}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),t(q("Could not load data from contract."));case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},Z=n(13),V=Z.a.div(i||(i=Object(B.a)(["\n  background-color: black;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(e){var t=e.image;return t?"url(".concat(t,")"):"none"})),$=(Z.a.div(c||(c=Object(B.a)(["\n  height: 8px;\n  width: 8px;\n"]))),Z.a.div(a||(a=Object(B.a)(["\n  height: 16px;\n  width: 16px;\n"])))),ee=Z.a.div(s||(s=Object(B.a)(["\n  height: 24px;\n  width: 24px;\n"]))),te=Z.a.div(o||(o=Object(B.a)(["\n  height: 32px;\n  width: 32px;\n"]))),ne=Z.a.div(r||(r=Object(B.a)(["\n  height: 100px;\n  width: 100px;\n"]))),ie=Z.a.div(l||(l=Object(B.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(e){var t=e.flex;return t||0}),(function(e){var t=e.fd;return t||"column"}),(function(e){var t=e.jc;return t||"flex-start"}),(function(e){var t=e.ai;return t||"flex-start"}),(function(e){return e.test?"pink":"none"}),(function(e){var t=e.image;return t?"url(".concat(t,")"):"none"})),ce=Z.a.p(d||(d=Object(B.a)(["\n  color: var(--primary-text);\n  font-size: 24px;\n  font-weight: Bold;\n  line-height: 1.5;\n  letter-spacing: .8px;\n"]))),ae=(Z.a.p(j||(j=Object(B.a)(["\n  color: var(--primary-text);\n  font-size: 18px;\n  font-weight: Normal;\n  line-height: 1.5;\n  letter-spacing: .8px;\n"]))),Z.a.p(x||(x=Object(B.a)(["\n  color: var(--primary-text);\n  font-size: 16px;\n  font-weight: Normal;\n  line-height: 2;\n  letter-spacing: .5px;\n"])))),se=(Z.a.div(h||(h=Object(B.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),n(0)),oe=(Z.a.button(b||(b=Object(B.a)(['\n  padding: 10px;\n  // border-radius: 5px;\n  border: none;\n  background-color: var(--secondary);\n  padding: 20px;\n  font-size: 18px;\n  font-weight: bold;\n  font-family: "SpaceGrotesk", sans-serif;\n  color: var(--secondary-text);\n  width: 200px;\n  cursor: pointer;\n  // box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  // -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  // -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    // box-shadow: none;\n    // -webkit-box-shadow: none;\n    // -moz-box-shadow: none;\n  }\n']))),Z.a.button(f||(f=Object(B.a)(["\n  padding: 10px;\n  border-radius: 100%;\n  border: none;\n  background-color: var(--primary);\n  padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  color: var(--primary-text);\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  // box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  // -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  // -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  // :active {\n  //   box-shadow: none;\n  //   -webkit-box-shadow: none;\n  //   -moz-box-shadow: none;\n  }\n"]))),Z.a.div(g||(g=Object(B.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  // justify-content: center;\n  align-items: center;\n  background-image: ",";\n  background-size: cover;\n  background-position: left;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n  @media (min-width: 1160px) {\n    width: 1160px;\n  }\n"])),(function(e){var t=e.image;return t?"url(".concat(t,")"):"none"}))),re=Z.a.div(p||(p=Object(B.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column-reverse;\n  justify-content: center;\n  align-items: center;\n  background-image: ",";\n  background-size: cover;\n  background-position: left;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n  @media (min-width: 1160px) {\n    width: 1160px;\n  }\n"])),(function(e){var t=e.image;return t?"url(".concat(t,")"):"none"})),le=Z.a.div(O||(O=Object(B.a)(["\n  @media (max-width: 767px) {\n    display: none;\n  }\n"]))),de=Z.a.div(u||(u=Object(B.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  width: 100%;\n  @media (min-width: 1160px) {\n    width: 1160px;\n  }\n"]))),je=Z.a.div(m||(m=Object(B.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  @media (min-width: 1160px) {\n    width: 1160px;\n  }\n"]))),xe=Z.a.div(y||(y=Object(B.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  @media (max-width: 767px) {\n    display: none;\n  }\n"]))),he=Z.a.div(w||(w=Object(B.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  // justify-content: center;\n  // align-items: center;\n  width: 100%;\n  @media (min-width: 720px) {\n    width: 720px;\n  }\n"]))),be=Z.a.img(A||(A=Object(B.a)(["\n  width: 30px;\n"]))),fe=Z.a.img(v||(v=Object(B.a)(["\n  width: 26px;\n"]))),ge=Z.a.img(S||(S=Object(B.a)(["\n  width: 300px;\n  @media (min-width: 767px) {\n    width: 400px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),pe=Z.a.img(E||(E=Object(B.a)(["\n  // box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);\n  // border: 4px dashed var(--secondary);\n  // background-color: var(--accent);\n  // border-radius: 5%;\n  width: 400px;\n  @media (min-width: 900px) {\n    width: 400px;\n  }\n  @media (min-width: 1000px) {\n    width: 500px;\n  }\n  transition: width 0.5s;\n"]))),Oe=Z.a.img(k||(k=Object(B.a)(["\n  // box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);\n  // border: 4px dashed var(--secondary);\n  // background-color: var(--accent);\n  // border-radius: 5%;\n  width: 400px;\n  @media (min-width: 900px) {\n    width: 500px;\n  }\n  @media (min-width: 1000px) {\n    width: 600px;\n  }\n  transition: width 0.5s;\n"])));Z.a.a(L||(L=Object(B.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n"])));var ue=function(){var e=Object(I.b)(),t=Object(I.c)((function(e){return e.blockchain})),n=(Object(I.c)((function(e){return e.data})),Object(T.useState)(!1)),i=Object(R.a)(n,2),c=(i[0],i[1],Object(T.useState)("Click to claim your character.")),a=Object(R.a)(c,2),s=(a[0],a[1],Object(T.useState)(1)),o=Object(R.a)(s,2),r=(o[0],o[1],Object(T.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,WEI_COST:0,DISPLAY_COST:0,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1})),l=Object(R.a)(r,2),d=(l[0],l[1]),j=function(){var e=Object(z.a)(N.a.mark((function e(){var t,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,d(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(T.useEffect)((function(){j()})),Object(T.useEffect)((function(){""!==t.account&&null!==t.smartContract&&e(Q(t.account))}),[t.account]),Object(se.jsxs)(V,{style:{backgroundColor:"#17161b"},children:[Object(se.jsxs)(ie,{flex:.3,ai:"center",style:{padding:0},id:"home",image:"/config/images/bg.png",children:[Object(se.jsxs)(je,{flex:1,style:{padding:20},children:[Object(se.jsxs)(ie,{flex:.3,fd:"row",ai:"center",style:{padding:0},children:[Object(se.jsx)(be,{src:"logo512.png"}),Object(se.jsx)($,{}),Object(se.jsx)(ce,{style:{textAlign:"left",color:"var(--accent-text)",fontSize:24,fontWeight:"Bold",fontFamily:"Roboto, sans-serif"},children:"METABALL"}),Object(se.jsx)(ee,{}),Object(se.jsxs)(xe,{children:[Object(se.jsx)(ae,{style:{textAlign:"left",fontSize:16,fontWeight:"Bold",fontFamily:"Roboto, sans-serif"},children:Object(se.jsx)("a",{style:{color:"#fff"},target:"_self",href:"#intro",children:"INTRO"})}),Object(se.jsx)(ee,{}),Object(se.jsx)(ae,{style:{textAlign:"left",fontSize:16,fontWeight:"Bold",fontFamily:"Roboto, sans-serif"},children:Object(se.jsx)("a",{style:{color:"#fff"},target:"_self",href:"#roadmap",children:"ROADMAP"})}),Object(se.jsx)(ee,{}),Object(se.jsx)(ae,{style:{textAlign:"left",fontSize:16,fontWeight:"Bold",fontFamily:"Roboto, sans-serif"},children:Object(se.jsx)("a",{style:{color:"#fff"},target:"_self",href:"#team",children:"TEAM"})}),Object(se.jsx)(ee,{}),Object(se.jsx)(ae,{style:{textAlign:"left",fontSize:16,fontWeight:"Bold",fontFamily:"Roboto, sans-serif"},children:Object(se.jsx)("a",{style:{color:"#fff"},target:"_self",href:"#community",children:"COMMUNITY"})})]})]}),Object(se.jsxs)(ie,{flex:.3,fd:"row",jc:"flex-end",ai:"center",style:{padding:0},children:[Object(se.jsx)("a",{target:"_blank",href:"https://opensea.io/",children:Object(se.jsx)(fe,{src:"../config/images/opensea.svg"})}),Object(se.jsx)(te,{}),Object(se.jsx)("a",{target:"_blank",href:"https://twitter.com/",children:Object(se.jsx)(fe,{src:"../config/images/twitter.svg"})}),Object(se.jsx)(te,{}),Object(se.jsx)("a",{target:"_blank",href:"https://discord.com/",children:Object(se.jsx)(fe,{src:"../config/images/discord.svg"})})]})]}),Object(se.jsxs)(le,{children:[Object(se.jsx)(ne,{}),Object(se.jsx)(ne,{}),Object(se.jsx)(ne,{})]}),Object(se.jsxs)(oe,{flex:1,style:{padding:0},test:!0,children:[Object(se.jsx)(ne,{}),Object(se.jsxs)(ie,{flex:1,jc:"center",ai:"center",style:{backgroundColor:"rgba(0,0,0,0.8)",padding:24},children:[Object(se.jsx)(ee,{}),Object(se.jsx)(ce,{style:{textAlign:"center",padding:12,fontWeight:"bold",color:"var(--accent-text)"},children:"METABALL CHARACTERS MINT GUIDE"}),Object(se.jsx)($,{}),Object(se.jsx)(ae,{style:{padding:12,textAlign:"left",color:"var(--accent-text)"},children:"There will be 9,999 mintable METABALL characters available as ERC-721 tokens on the Ethereum blockchain. The mint price per METABALL character NFT is 0.08 ETH. The mint date has yet to be determined but we will announce it on all our official discord and twitter."}),Object(se.jsx)($,{}),Object(se.jsx)("a",{style:{textDecoration:"none",width:"200px"},target:"_blank",href:"https://discord.com/",children:Object(se.jsx)(ie,{flex:1,ai:"center",jc:"center",style:{color:"white",width:"200px",padding:24,backgroundColor:"var(--secondary)",fontSize:18,fontWeight:"bold"},children:"COMING SOON"})}),Object(se.jsx)(ee,{})]}),Object(se.jsx)($,{}),Object(se.jsx)(ie,{flex:1,jc:"center",ai:"center",children:Object(se.jsx)(ge,{src:"/config/images/banner.png"})})]})]}),Object(se.jsxs)(ie,{flex:1,ai:"center",style:{padding:24,backgroundColor:"#17161b"},id:"intro",children:[Object(se.jsx)(ne,{}),Object(se.jsxs)(le,{children:[Object(se.jsx)(ne,{}),Object(se.jsx)(ne,{})]}),Object(se.jsxs)(oe,{children:[Object(se.jsxs)(de,{style:{padding:24},children:[Object(se.jsx)(ce,{style:{textAlign:"left",color:"white",fontSize:40},children:"WHAT IS METABALL?"}),Object(se.jsx)(pe,{src:"/config/images/divider.svg",style:{width:"200px"}}),Object(se.jsx)($,{}),Object(se.jsx)(ae,{style:{textAlign:"left",color:"#848198"},children:"METABALL is a multiverse with 9,999 unique characters, composed of Humans, Saiyans, Namekians and other different races. It has the similar worldview as the DragonBall world, but not in the same universe. METABALL will become a huge sandbox game, all characters will complete their adventures and write their own stories in the METABALL world."}),Object(se.jsx)(ne,{})]}),Object(se.jsx)(pe,{alt:"example",src:"/config/images/example.gif",style:{padding:24,borderRadius:"0 5% 0 5%",border:"1px solid var(--secondary)"}})]})]}),Object(se.jsxs)(ie,{flex:1,ai:"center",style:{padding:24,backgroundColor:"#17161b"},id:"race",children:[Object(se.jsx)(ee,{}),Object(se.jsxs)(le,{children:[Object(se.jsx)(ne,{}),Object(se.jsx)(ne,{}),Object(se.jsx)(ne,{})]}),Object(se.jsxs)(oe,{image:"/config/images/types_name/HUMAN.png",style:{padding:24},children:[Object(se.jsxs)(de,{style:{padding:48},children:[Object(se.jsx)(ce,{style:{textAlign:"left",color:"#ddb49c",fontSize:40},children:"\u4eba\u9593"}),Object(se.jsx)(ce,{style:{textAlign:"left",color:"white",fontSize:40},children:"HUMAN"}),Object(se.jsx)(ae,{style:{textAlign:"left",color:"#848198"},children:"Humans are typically among the weakest races in the METABALL universe. Only a few humans show a reasonable aptitude in martial arts on the galactic scale. Humans make up for their lack of physical strength by using weapons and technology."})]}),Object(se.jsx)($,{}),Object(se.jsx)(pe,{src:"/config/images/types/HUMAN.png",style:{paddingRight:40,width:"350px"}})]}),Object(se.jsx)(ne,{}),Object(se.jsx)(le,{children:Object(se.jsx)(ne,{})}),Object(se.jsxs)(re,{image:"/config/images/types_name/SAIYAN.png",style:{padding:24},children:[Object(se.jsx)(pe,{src:"/config/images/types/SAIYAN.png",style:{paddingLeft:40,width:"350px"}}),Object(se.jsx)($,{}),Object(se.jsxs)(de,{style:{padding:48},children:[Object(se.jsx)(ce,{style:{textAlign:"left",color:"#e77431",fontSize:40},children:"\u30b5\u30a4\u30e4\u4eba"}),Object(se.jsx)(ce,{style:{textAlign:"left",color:"white",fontSize:40},children:"SAIYAN"}),Object(se.jsx)(ae,{style:{textAlign:"left",color:"#848198"},children:"Saiyans are outwardly very similar to Humans, with the exception of their monkey-like tails. They have black hair, black eyes, and yellow skin. Naturally growing stronger as they mature, they gain a very muscular and well-defined build. In the METABALL universe, Saiyans are a peace-loving race, and they often act as cosmic policemen to maintain the order of the METABALL universe."})]})]}),Object(se.jsx)(ne,{}),Object(se.jsx)(le,{children:Object(se.jsx)(ne,{})}),Object(se.jsxs)(oe,{image:"/config/images/types_name/NAMEKIAN.png",style:{padding:24},children:[Object(se.jsxs)(de,{style:{padding:48},children:[Object(se.jsx)(ce,{style:{textAlign:"left",color:"#043942",fontSize:40},children:"\u30ca\u30e1\u30c3\u30af\u661f\u4eba"}),Object(se.jsx)(ce,{style:{textAlign:"left",color:"white",fontSize:40},children:"NAMEKIAN"}),Object(se.jsx)(ae,{style:{textAlign:"left",color:"#848198"},children:"In METABALL universe, Namekians are humanoid with plant and slug-like characteristics, including blue skin and antennae. They used to be a peace-loving race, but under the bewitching of an evil Namekian, a coup took place in Namek. Since then, Namekians have become evil, destructive and caused chaos throughout the universe."})]}),Object(se.jsx)($,{}),Object(se.jsx)(pe,{src:"/config/images/types/NAMEKIAN.png",style:{paddingRight:40,width:"350px"}})]}),Object(se.jsx)(ne,{}),Object(se.jsx)(le,{children:Object(se.jsx)(ne,{})}),Object(se.jsxs)(re,{image:"/config/images/types_name/FRIEZA_RACE.png",style:{padding:24},children:[Object(se.jsx)(pe,{src:"/config/images/types/FRIEZA_RACE.png",style:{paddingLeft:40,width:"350px"}}),Object(se.jsx)($,{}),Object(se.jsxs)(de,{style:{padding:48},children:[Object(se.jsx)(ce,{style:{textAlign:"left",color:"#a607cb",fontSize:40},children:"\u30d5\u30ea\u30fc\u30b6\u7a2e\u65cf"}),Object(se.jsx)(ce,{style:{textAlign:"left",color:"white",fontSize:40},children:"FRIEZA RACE"}),Object(se.jsx)(ae,{style:{textAlign:"left",color:"#848198"},children:"Most members of Frieza Race have red pupils and bodies covered in white, keratinous exoskeletons. They also have reptilian features such as a long tails, three talon-like toes, spikes, and horns. In METABALL universe, Frieza Race has great power, they don't like aggression, but are willing to fight against others to enhance their power. They set the goal of life to obtain the strongest power in the universe."})]})]}),Object(se.jsx)(ne,{}),Object(se.jsx)(le,{children:Object(se.jsx)(ne,{})}),Object(se.jsxs)(oe,{image:"/config/images/types_name/ALIEN.png",style:{padding:24},children:[Object(se.jsxs)(de,{style:{padding:48},children:[Object(se.jsx)(ce,{style:{textAlign:"left",color:"#0076c2",fontSize:40},children:"\u5b87\u5b99\u4eba"}),Object(se.jsx)(ce,{style:{textAlign:"left",color:"white",fontSize:40},children:"ALIEN"}),Object(se.jsx)(ae,{style:{textAlign:"left",color:"#848198"},children:"In METABALL universe, Aliens refer to races that are not well-known in the universe or are sparsely populated. Most of them have the ability to integrate races, which also makes it difficult to classify aliens. They usually have good power, maintain the development of the entire universe. Some of them are kind, some are evil, it all depends on their own choice."})]}),Object(se.jsx)($,{}),Object(se.jsx)(pe,{src:"/config/images/types/ALIEN.png",style:{paddingRight:40,width:"350px"}})]}),Object(se.jsx)(ne,{}),Object(se.jsx)(le,{children:Object(se.jsx)(ne,{})}),Object(se.jsxs)(re,{image:"/config/images/types_name/SUPER_SAIYAN.png",style:{padding:24},children:[Object(se.jsx)(pe,{src:"/config/images/types/SUPER_SAIYAN.png",style:{paddingLeft:40,width:"350px"}}),Object(se.jsx)($,{}),Object(se.jsxs)(de,{style:{padding:48},children:[Object(se.jsx)(ce,{style:{textAlign:"left",color:"#cb7f07",fontSize:40},children:"\u8d85\u30b5\u30a4\u30e4\u4eba"}),Object(se.jsx)(ce,{style:{textAlign:"left",color:"white",fontSize:40},children:"SUPER SAIYAN"}),Object(se.jsx)(ae,{style:{textAlign:"left",color:"#848198"},children:"In METABALL universe, the number of Super Saiyans is very rare. The transformation to Super Saiyan has a significant and irreversible effect on the Saiyan's personality. Any Saiyan that had previously demonstrated a calm, collected, laid back, kind and even peaceful demeanor becomes ruthless, overcome with rage, impulsive, even becoming noticeably vengeful and unusually violent."})]})]}),Object(se.jsx)(ne,{}),Object(se.jsx)(le,{children:Object(se.jsx)(ne,{})})]}),Object(se.jsxs)(ie,{flex:1,ai:"center",style:{padding:24,backgroundColor:"#17161b"},id:"roadmap",children:[Object(se.jsx)(ne,{}),Object(se.jsx)(le,{children:Object(se.jsx)(ne,{})}),Object(se.jsxs)(he,{children:[Object(se.jsx)(ce,{style:{textAlign:"center",color:"white",fontSize:60},children:"ROADMAP"}),Object(se.jsx)(ae,{style:{textAlign:"center",color:"#848198"},children:"The following roadmaps are our exciting plans for the future, and many ideas are currently being realized. We will build METABALL into a fascinating metaverse world over time."})]}),Object(se.jsxs)(ie,{flex:1,ai:"center",style:{paddingTop:40,position:"relative"},children:[Object(se.jsx)(ne,{}),Object(se.jsxs)(he,{jc:"flex-start",ai:"flex-start",style:{padding:40,borderRadius:"0 20px 0 20px",border:"1px solid var(--secondary)"},children:[Object(se.jsx)("div",{class:"line",children:Object(se.jsx)("div",{class:"linedone"})}),Object(se.jsx)("div",{class:"shapeshadow",children:Object(se.jsx)("div",{class:"shapedone"})}),Object(se.jsxs)(ce,{style:{textAlign:"left",color:"white",fontSize:30,paddingLeft:40},children:[Object(se.jsx)("span",{style:{fontSize:24,color:"var(--secondary)"},children:"1."})," Website, Smart contract"]}),Object(se.jsx)(ae,{style:{textAlign:"left",color:"#848198",paddingLeft:40},children:"In the first stage, our main task is to make the website and smart contract launch smoothly, while polishing the quality of the NFTs. Make the first drop as cool as possible. At the same time, we will determine the whitelist to encourage early active community members."})]}),Object(se.jsx)(ne,{}),Object(se.jsxs)(he,{jc:"flex-start",ai:"flex-start",style:{padding:40,borderRadius:"0 20px 0 20px",border:"1px solid white"},children:[Object(se.jsx)("div",{class:"shapeshadow",children:Object(se.jsx)("div",{class:"shape"})}),Object(se.jsxs)(ce,{style:{textAlign:"left",color:"white",fontSize:30,paddingLeft:40},children:[Object(se.jsx)("span",{style:{fontSize:24,color:"var(--secondary)"},children:"2."})," Metaballs, Power Level"]}),Object(se.jsx)(ae,{style:{textAlign:"left",color:"#848198",paddingLeft:40},children:"We will create the NFT of seven Metaballs and randomly airdrop them to the holder of the METABALL character. If someone gather all 7 different types of Metaballs, exciting things will happen! At the same time, we will launch the Power Level system, each character will have its own Power Level."})]}),Object(se.jsx)(ne,{}),Object(se.jsxs)(he,{jc:"flex-start",ai:"flex-start",style:{padding:40,borderRadius:"0 20px 0 20px",border:"1px solid white"},children:[Object(se.jsx)("div",{class:"shapeshadow",children:Object(se.jsx)("div",{class:"shape"})}),Object(se.jsxs)(ce,{style:{textAlign:"left",color:"white",fontSize:30,paddingLeft:40},children:[Object(se.jsx)("span",{style:{fontSize:24,color:"var(--secondary)"},children:"3."})," METABALL, METAVERSE"]}),Object(se.jsx)(ae,{style:{textAlign:"left",color:"#848198",paddingLeft:40},children:"At this stage, the exciting Sandbox game will be launched. In the METABALL universe, you can explore and battle to obtain more in-game tokens and improve Power Level. The world will be divided into different camps. You need to join a camp to expand territory and influence on behalf of your camp."})]}),Object(se.jsx)(ne,{}),Object(se.jsxs)(he,{jc:"flex-start",ai:"flex-start",style:{padding:40,borderRadius:"0 20px 0 20px",border:"1px solid white"},children:[Object(se.jsx)("div",{class:"shapeshadow",children:Object(se.jsx)("div",{class:"shape"})}),Object(se.jsxs)(ce,{style:{textAlign:"left",color:"white",fontSize:30,paddingLeft:40},children:[Object(se.jsx)("span",{style:{fontSize:24,color:"var(--secondary)"},children:"4."})," Future of METABALL"]}),Object(se.jsx)(ae,{style:{textAlign:"left",color:"#848198",paddingLeft:40},children:"We will continue to expand the influence of METABALL, and create comics, animations, and movies about METABALL together with the Dragon Ball team. There will be more stories happening between the METABALL universe and the Dragon Ball universe. At the same time, the characters you love in Dragon Ball may come to the METABALL sandbox game. We look forward to seeing what happens in the future!"})]}),Object(se.jsx)(ne,{})]})]}),Object(se.jsxs)(ie,{flex:1,ai:"center",style:{padding:24,backgroundColor:"#17161b"},id:"team",children:[Object(se.jsx)(ne,{}),Object(se.jsx)(le,{children:Object(se.jsx)(ne,{})}),Object(se.jsxs)(oe,{children:[Object(se.jsxs)(he,{jc:"flex-start",ai:"flex-start",style:{padding:24},children:[Object(se.jsx)(ce,{style:{textAlign:"left",color:"white",fontSize:40},children:"WHO ARE WE?"}),Object(se.jsx)(pe,{src:"/config/images/divider.svg",style:{width:"200px"}}),Object(se.jsx)($,{}),Object(se.jsx)(ae,{style:{textAlign:"left",color:"#848198"},children:"We are a creative American animation production team currently living in Japan. Our team consists of 4 members: Yoshinobu, a Japanese-American who is responsible for creative hand-painting. Amelia, a quirky girl who is responsible for coloring, illustration and special effects. 0XXXd, a technical nerd who is responsible for digital synthesis and main UI. And MAC++, a mysterious geek who is responsible for website and smart contract development."})]}),Object(se.jsx)($,{}),Object(se.jsx)(Oe,{src:"/config/images/team.png"})]}),Object(se.jsx)(ne,{}),Object(se.jsx)(le,{children:Object(se.jsx)(ne,{})})]}),Object(se.jsxs)(ie,{flex:1,ai:"center",jc:"flex-start",style:{backgroundColor:"#17161b"},id:"community",image:"/config/images/WestCity.gif",children:[Object(se.jsx)(te,{}),Object(se.jsxs)(oe,{children:[Object(se.jsxs)(he,{jc:"flex-start",ai:"center",style:{padding:48,backgroundColor:"rgba(0,0,0,0.8)"},children:[Object(se.jsx)(ce,{style:{textAlign:"left",color:"white",fontSize:40},children:"Join the community"}),Object(se.jsx)(te,{}),Object(se.jsx)(ae,{style:{textAlign:"left",color:"#848198"},children:"We just built our Discord! Join us to get the news as soon as possible and follow our latest announcements."}),Object(se.jsx)(te,{}),Object(se.jsx)("a",{style:{textDecoration:"none",width:"200px"},target:"_blank",href:"https://discord.com/",children:Object(se.jsx)(ie,{flex:1,ai:"center",jc:"center",style:{color:"white",width:"200px",padding:24,backgroundColor:"var(--secondary)",fontSize:18,fontWeight:"bold"},children:"Join our discord"})})]}),Object(se.jsx)(Oe,{})]}),Object(se.jsx)(te,{})]}),Object(se.jsxs)(ie,{flex:1,ai:"center",style:{padding:24,backgroundColor:"#17161b"},id:"footer",children:[Object(se.jsx)(te,{}),Object(se.jsx)(te,{}),Object(se.jsxs)(oe,{jc:"flex-start",children:[Object(se.jsx)(be,{src:"logo512.png"}),Object(se.jsx)($,{}),Object(se.jsx)(ce,{style:{textAlign:"left",color:"var(--accent-text)",fontSize:24,fontWeight:"Bold",fontFamily:"Roboto, sans-serif"},children:"METABALL"}),Object(se.jsx)($,{}),Object(se.jsx)(ae,{style:{textAlign:"left",color:"var(--accent-text)",fontSize:16,fontFamily:"Roboto, sans-serif"},children:"\xa92021 METABALL. All Rights Reserved."})]}),Object(se.jsx)(te,{}),Object(se.jsx)($,{}),Object(se.jsx)(oe,{children:Object(se.jsx)("div",{class:"footline"})}),Object(se.jsx)(te,{}),Object(se.jsx)($,{}),Object(se.jsxs)(je,{flex:1,style:{padding:0},children:[Object(se.jsxs)(ie,{flex:.3,fd:"row",ai:"center",style:{padding:0},children:[Object(se.jsx)(ae,{style:{textAlign:"left",fontSize:16,fontWeight:"Bold",fontFamily:"Roboto, sans-serif"},children:Object(se.jsx)("a",{style:{color:"#555"},target:"_self",href:"#home",children:"HOME"})}),Object(se.jsx)(ee,{}),Object(se.jsxs)(xe,{children:[Object(se.jsx)(ae,{style:{textAlign:"left",fontSize:16,fontWeight:"Bold",fontFamily:"Roboto, sans-serif"},children:Object(se.jsx)("a",{style:{color:"#555"},target:"_self",href:"#intro",children:"INTRO"})}),Object(se.jsx)(ee,{}),Object(se.jsx)(ae,{style:{textAlign:"left",fontSize:16,fontWeight:"Bold",fontFamily:"Roboto, sans-serif"},children:Object(se.jsx)("a",{style:{color:"#555"},target:"_self",href:"#roadmap",children:"ROADMAP"})}),Object(se.jsx)(ee,{}),Object(se.jsx)(ae,{style:{textAlign:"left",fontSize:16,fontWeight:"Bold",fontFamily:"Roboto, sans-serif"},children:Object(se.jsx)("a",{style:{color:"#555"},target:"_self",href:"#team",children:"TEAM"})}),Object(se.jsx)(ee,{}),Object(se.jsx)(ae,{style:{textAlign:"left",fontSize:16,fontWeight:"Bold",fontFamily:"Roboto, sans-serif"},children:Object(se.jsx)("a",{style:{color:"#555"},target:"_self",href:"#community",children:"COMMUNITY"})})]})]}),Object(se.jsxs)(ie,{flex:.3,fd:"row",jc:"flex-end",ai:"center",style:{padding:0},children:[Object(se.jsx)("a",{target:"_blank",href:"https://opensea.io/",children:Object(se.jsx)(fe,{src:"../config/images/opensea.svg"})}),Object(se.jsx)(te,{}),Object(se.jsx)("a",{target:"_blank",href:"https://twitter.com/",children:Object(se.jsx)(fe,{src:"../config/images/twitter.svg"})}),Object(se.jsx)(te,{}),Object(se.jsx)("a",{target:"_blank",href:"https://discord.com/",children:Object(se.jsx)(fe,{src:"../config/images/discord.svg"})})]})]}),Object(se.jsx)(te,{}),Object(se.jsx)(te,{})]})]})},me=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,522)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),i(e),c(e),a(e),s(e)}))};n(517);C.a.render(Object(se.jsx)(I.a,{store:X,children:Object(se.jsx)(ue,{})}),document.getElementById("root")),me()}},[[518,1,2]]]);
//# sourceMappingURL=main.4e646a03.chunk.js.map