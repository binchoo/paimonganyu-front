"use strict";(self.webpackChunkpaimonganyu_doc=self.webpackChunkpaimonganyu_doc||[]).push([[832],{7349:function(e,t,n){n.d(t,{g:function(){return p}});function a(){return new Promise((function(e,t){e("MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAic4+NgKmwlM1RiKzLdwR/WsnZAWaD13FeEZAtomfFCiC7+iRVsQ3LrPcYo7Ulvzvcxo+bhvlSmADUqtEQXoU+q/HPVYHzL0Qv1JgwgcUr5xuY5ABoUSrdSfpZkUwiqBnk9kJLcznYKYr1At6KIeNyLTjA364GDlIwuqAlAU97Kp4r80LywRxxtXRiVBZ9YYoioLuJtSvLlRDME1gF652/eO863pQHkPyGQ+O215sWMUgiUheCOAmC7amDU9y+ilYeESxNN5+OaSEzf1QNIBJSEkzVirZoWvOrSX37Wq0R8xRSnyINKN+gj2UgxWOrS1626VZuRl/yPgbrXgJJZHcKQIDAQAB")}))}var o=n(7294),r=n(7565),i=n(8463),l=n(8793),u=n(3619),c=n(4987),d=n(253),s=n(4059);function p(){var e=(0,o.useState)(""),t=e[0],n=e[1],r=(0,o.useState)(""),p=r[0],g=r[1],b=(0,o.useState)(""),v=b[0],h=b[1],y=(0,o.useState)(""),C=y[0],E=y[1],N=(0,o.useState)(null),w=N[0],Z=N[1];(0,o.useEffect)((function(){a().then((function(e){Z(e)}))}),[]);var A=(0,o.useMemo)((function(){return w?k(w):function(){return""}}),[w]);return o.createElement(i.Z,{variant:"outlined",style:{padding:"20px "}},o.createElement("form",{onSubmit:function(e){return e.preventDefault()},style:{marginBottom:"30px"}},o.createElement("p",null,o.createElement(l.Z,{id:"standard-basic",label:"ltuid",variant:"standard",style:{width:"100%"},onChange:m(n)})),o.createElement("p",null,o.createElement(l.Z,{id:"standard-basic",label:"ltoken",variant:"standard",style:{width:"100%"},onChange:m(g)})),o.createElement("p",null,o.createElement(l.Z,{id:"standard-basic",label:"cookietoken",variant:"standard",style:{width:"100%"},onChange:m(h)})),o.createElement("div",null,o.createElement(u.Z,{variant:"contained",disabled:!t||!p||!v,onClick:function(){E(A({ltuid:t,ltoken:p,cookietoken:v}))}},"\uc0dd\uc131\ud558\uae30!"))),o.createElement(c.Z,{open:!!C,onClose:function(){return E("")},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description"},o.createElement(d.Z,{sx:f},o.createElement(s.Qd,{value:C,size:300,includeMargin:!0}))))}var m=function(e){return function(t){e(t.target.value)}},k=function(e){var t=new r.X;return t.setPublicKey(e),function(e){var n=e.ltuid,a=e.ltoken,o=e.cookietoken;return t.encrypt(n+":"+a+":"+o)||""}},f={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",bgcolor:"#FFF",border:"1px solid #000",boxShadow:50,p:4}},254:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return k}});var a=n(7462),o=n(3366),r=n(7294),i=n(3905),l=n(1262);function u(){return r.createElement(l.Z,{fallback:r.createElement("div",null,"Loading...")},(function(){var e=n(7349).g;return r.createElement(e,null)}))}var c=["components"],d={id:"create-qr-code",title:"\ud1b5\ud589\uc99d QR \ub9cc\ub4e4\uae30",sidebar_position:2},s=void 0,p={unversionedId:"tutorial/create-qr-code",id:"tutorial/create-qr-code",title:"\ud1b5\ud589\uc99d QR \ub9cc\ub4e4\uae30",description:"",source:"@site/docs/tutorial/create-qr-code.mdx",sourceDirName:"tutorial",slug:"/tutorial/create-qr-code",permalink:"/paimonganyu-doc/docs/tutorial/create-qr-code",draft:!1,editUrl:"https://github.com/binchoo/paimonganyu-doc/docs/tutorial/create-qr-code.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"create-qr-code",title:"\ud1b5\ud589\uc99d QR \ub9cc\ub4e4\uae30",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\uc5ec\ud589 \ube44\uc11c \ud398\uc774\ubaac! \ud29c\ud1a0\ub9ac\uc5bc",permalink:"/paimonganyu-doc/docs/tutorial/"},next:{title:"\ud568\uaed8\ud558\uae30",permalink:"/paimonganyu-doc/docs/tutorial/contribution"}},m={},k=[{value:"QR \ucf54\ub4dc \uc0dd\uc131\uae30",id:"qr-\ucf54\ub4dc-\uc0dd\uc131\uae30",level:2},{value:"\ubcf8\uc778\uc758 \ud1b5\ud589\uc99d \uac12 \uc54c\uc544\ub0b4\uae30",id:"\ubcf8\uc778\uc758-\ud1b5\ud589\uc99d-\uac12-\uc54c\uc544\ub0b4\uae30",level:3},{value:"<strong>1\ub2e8\uacc4. HoYoLab\uc5d0\uc11c \ub85c\uadf8\uc778</strong>",id:"1\ub2e8\uacc4-hoyolab\uc5d0\uc11c-\ub85c\uadf8\uc778",level:4},{value:"<strong>2\ub2e8\uacc4. \uac1c\ubc1c\uc790 \ub3c4\uad6c\ub85c \ucfe0\ud0a4 \uac12 \ub4e4\uc5ec\ub2e4 \ubcf4\uae30</strong>",id:"2\ub2e8\uacc4-\uac1c\ubc1c\uc790-\ub3c4\uad6c\ub85c-\ucfe0\ud0a4-\uac12-\ub4e4\uc5ec\ub2e4-\ubcf4\uae30",level:4}],f={toc:k};function g(e){var t=e.components,r=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,a.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"qr-\ucf54\ub4dc-\uc0dd\uc131\uae30"},"QR \ucf54\ub4dc \uc0dd\uc131\uae30"),(0,i.kt)(u,{mdxType:"CreateQrCode"}),(0,i.kt)("p",null,"\u300c\uc5ec\ud589 \ube44\uc11c \ud398\uc774\ubaac!\u300d \uc774\uc6a9\uc5d0 \ud544\uc218 \ubd88\uac00\uacb0\ud55c ",(0,i.kt)("strong",{parentName:"p"},"\ud1b5\ud589\uc99d"),"! \uaf2d \ud558\ub098 \uc774\uc0c1\uc758 \ud1b5\ud589\uc99d\uc744 \ub4f1\ub85d\ud574 \uc8fc\uc138\uc694."),(0,i.kt)("h3",{id:"\ubcf8\uc778\uc758-\ud1b5\ud589\uc99d-\uac12-\uc54c\uc544\ub0b4\uae30"},"\ubcf8\uc778\uc758 \ud1b5\ud589\uc99d \uac12 \uc54c\uc544\ub0b4\uae30"),(0,i.kt)("p",null,"\ubcf8\uc778\uc758 \ud1b5\ud589\uc99d \uc815\ubcf4\ub294 ",(0,i.kt)("u",null,"\ud638\uc694\ub7a9 \ub85c\uadf8\uc778 \ud6c4 \ube0c\ub77c\uc6b0\uc800\uc758 \ucfe0\ud0a4\uc5d0 \uc138\ud305"),"\ub418\uba70, 3\uac00\uc9c0 \uac12\uc73c\ub85c \uad6c\uc131\ub429\ub2c8\ub2e4."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"ltuid"),": \ud638\uc694\ubc84\uc2a4 \uacc4\uc815\uc758 \ud1b5\ud589\uc99d \uc544\uc774\ub514\uc785\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"ltoken"),": \ud1b5\ud589\uc99d \uc544\uc774\ub514\uc5d0 \ub300\uc751\ub418\ub294 \uac1c\uc778 \ud1a0\ud070\uc785\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"cookie_token"),": \ucf54\ub4dc \ub9ac\ub524 \uc11c\ube44\uc2a4\uc5d0\uc11c \uc774\uc6a9\ub418\ub294 \uac1c\uc778 \ud1a0\ud070\uc785\ub2c8\ub2e4. ")),(0,i.kt)("p",null,"\uc774 \uc138 \uac00\uc9c0 \uac12\uc744 \ucc3e\ub294 \ubc29\ubc95! \uac04\ub2e8\ud574\uc694."),(0,i.kt)("h4",{id:"1\ub2e8\uacc4-hoyolab\uc5d0\uc11c-\ub85c\uadf8\uc778"},(0,i.kt)("strong",{parentName:"h4"},"1\ub2e8\uacc4. HoYoLab\uc5d0\uc11c \ub85c\uadf8\uc778")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\ud638\uc694\ub7a9 \ub85c\uadf8\uc778",src:n(6821).Z,width:"768",height:"338"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"PC \ube0c\ub77c\uc6b0\uc800"),"\ub85c ",(0,i.kt)("a",{parentName:"p",href:"https://www.hoyolab.com/home"},"\ud638\uc694\ub7a9"),"\uc5d0 \ubc29\ubb38\ud574\uc11c \ubcf8\uc778\uc758 \ud638\uc694\ubc84\uc2a4 \uacc4\uc815\uc73c\ub85c \ub85c\uadf8\uc778 \ud574 \uc8fc\uc138\uc694."),(0,i.kt)("h4",{id:"2\ub2e8\uacc4-\uac1c\ubc1c\uc790-\ub3c4\uad6c\ub85c-\ucfe0\ud0a4-\uac12-\ub4e4\uc5ec\ub2e4-\ubcf4\uae30"},(0,i.kt)("strong",{parentName:"h4"},"2\ub2e8\uacc4. \uac1c\ubc1c\uc790 \ub3c4\uad6c\ub85c \ucfe0\ud0a4 \uac12 \ub4e4\uc5ec\ub2e4 \ubcf4\uae30")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\ud1b5\ud589\uc99d \ucfe0\ud0a4",src:n(1224).Z,width:"1099",height:"358"})),(0,i.kt)("details",null,(0,i.kt)("summary",null,"\ud55c\uad6d\uc5b4 \ub2e8\uacc4"),"`\uac1c\ubc1c\uc790\ub3c4\uad6c(F12)` > `\uc751\uc6a9 \ud504\ub85c\uadf8\ub7a8` \ud0ed> `\uc800\uc7a5\uc18c` \uc139\uc158> `\ucfe0\ud0a4` \ud56d\ubaa9> \ud638\uc694\ub7a9 URL \uc8fc\uc18c \ud074\ub9ad!"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"\uc601\uc5b4 \ub2e8\uacc4"),"`DevTools(F12)`> `Application` \ud0ed> `Storage` \uc139\uc158> `Cookies` \ud56d\ubaa9> \ud638\uc694\ub7a9 URL \uc8fc\uc18c \ud074\ub9ad!"),(0,i.kt)("p",null,"\uc774\ubbf8\uc9c0\ucc98\ub7fc ",(0,i.kt)("inlineCode",{parentName:"p"},"ltuid"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ltoken"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"cookie_token")," \uac12\uc744 \ubc1c\uacac\ud558\uba74 \uba54\ubaa8\uc7a5 \uac19\uc740 \ub370\uc5d0 \uc798 \ubcf5\uc0ac\ud574 \ub450\uc138\uc694~."))}g.isMDXComponent=!0},1224:function(e,t,n){t.Z=n.p+"assets/images/hoyopass_cookies-5dd5c7698d8dec4f6e785a1341f50cfe.png"},6821:function(e,t,n){t.Z=n.p+"assets/images/hoyopass_login-f6bcb9a6c8d6eb6e4b546f320b256d2a.png"}}]);