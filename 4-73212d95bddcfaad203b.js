(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./.linaria-cache/src/components/pack/NsfwModal.linaria.css":function(e,t,a){},"./.linaria-cache/src/components/pack/Sticker.linaria.css":function(e,t,a){},"./.linaria-cache/src/components/pack/StickerPackDetail.linaria.css":function(e,t,a){},"./.linaria-cache/src/components/pack/Tag.linaria.css":function(e,t,a){},"./config/modernizr-config.json":function(e,t){!function(t){var a="Modernizr"in t,r=t.Modernizr;!function(e,t,a,r){function n(e,t){return typeof e===t}function o(e,t){return!!~(""+e).indexOf(t)}function s(){return"function"!=typeof a.createElement?a.createElement(arguments[0]):x?a.createElementNS.call(a,"http://www.w3.org/2000/svg",arguments[0]):a.createElement.apply(a,arguments)}function l(e,t,r,n){var o,l,c,i,d="modernizr",u=s("div"),m=function(){var e=a.body;return e||((e=s(x?"svg":"body")).fake=!0),e}();if(parseInt(r,10))for(;r--;)(c=s("div")).id=n?n[r]:d+(r+1),u.appendChild(c);return(o=s("style")).type="text/css",o.id="s"+d,(m.fake?m:u).appendChild(o),m.appendChild(u),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(a.createTextNode(e)),u.id=d,m.fake&&(m.style.background="",m.style.overflow="hidden",i=E.style.overflow,E.style.overflow="hidden",E.appendChild(m)),l=t(u,e),m.fake?(m.parentNode.removeChild(m),E.style.overflow=i,E.offsetHeight):u.parentNode.removeChild(u),!!l}function c(e){return e.replace(/([A-Z])/g,(function(e,t){return"-"+t.toLowerCase()})).replace(/^ms-/,"-ms-")}function i(e,a){var n=e.length;if("CSS"in t&&"supports"in t.CSS){for(;n--;)if(t.CSS.supports(c(e[n]),a))return!0;return!1}if("CSSSupportsRule"in t){for(var o=[];n--;)o.push("("+c(e[n])+":"+a+")");return l("@supports ("+(o=o.join(" or "))+") { #modernizr { position: absolute; } }",(function(e){return"absolute"===function(e,a,r){var n;if("getComputedStyle"in t){n=getComputedStyle.call(t,e,a);var o=t.console;if(null!==n)r&&(n=n.getPropertyValue(r));else if(o){o[o.error?"error":"log"].call(o,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else n=!a&&e.currentStyle&&e.currentStyle[r];return n}(e,null,"position")}))}return r}function d(e){return e.replace(/([a-z])-([a-z])/g,(function(e,t,a){return t+a.toUpperCase()})).replace(/^-/,"")}function u(e,t,a,l){function c(){m&&(delete w.style,delete w.modElem)}if(l=!n(l,"undefined")&&l,!n(a,"undefined")){var u=i(e,a);if(!n(u,"undefined"))return u}for(var m,f,p,k,b,g=["modernizr","tspan","samp"];!w.style&&g.length;)m=!0,w.modElem=s(g.shift()),w.style=w.modElem.style;for(p=e.length,f=0;f<p;f++)if(k=e[f],b=w.style[k],o(k,"-")&&(k=d(k)),w.style[k]!==r){if(l||n(a,"undefined"))return c(),"pfx"!==t||k;try{w.style[k]=a}catch(e){}if(w.style[k]!==b)return c(),"pfx"!==t||k}return c(),!1}function m(e,t){return function(){return e.apply(t,arguments)}}function f(e,t,a,r,o){var s=e.charAt(0).toUpperCase()+e.slice(1),l=(e+" "+v.join(s+" ")+s).split(" ");return n(t,"string")||n(t,"undefined")?u(l,t,r,o):function(e,t,a){var r;for(var o in e)if(e[o]in t)return!1===a?e[o]:n(r=t[e[o]],"function")?m(r,a||t):r;return!1}(l=(e+" "+N.join(s+" ")+s).split(" "),t,a)}function p(e,t,a){return f(e,r,r,t,a)}var k=[],b={_version:"3.11.2",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var a=this;setTimeout((function(){t(a[e])}),0)},addTest:function(e,t,a){k.push({name:e,fn:t,options:a})},addAsyncTest:function(e){k.push({name:null,fn:e})}},g=function(){};g.prototype=b,g=new g;var y=[],h="Moz O ms Webkit",v=b._config.usePrefixes?h.split(" "):[];b._cssomPrefixes=v;var E=a.documentElement,x="svg"===E.nodeName.toLowerCase(),S={elem:s("modernizr")};g._q.push((function(){delete S.elem}));var w={style:S.elem.style};g._q.unshift((function(){delete w.style}));var N=b._config.usePrefixes?h.toLowerCase().split(" "):[];b._domPrefixes=N,b.testAllProps=f,b.testAllProps=p,g.addTest("backdropfilter",p("backdropFilter")),function(){var e,t,a,r,o,s;for(var l in k)if(k.hasOwnProperty(l)){if(e=[],(t=k[l]).name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(a=0;a<t.options.aliases.length;a++)e.push(t.options.aliases[a].toLowerCase());for(r=n(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)1===(s=e[o].split(".")).length?g[s[0]]=r:(g[s[0]]&&(!g[s[0]]||g[s[0]]instanceof Boolean)||(g[s[0]]=new Boolean(g[s[0]])),g[s[0]][s[1]]=r),y.push((r?"":"no-")+s.join("-"))}}(),delete b.addTest,delete b.addAsyncTest;for(var L=0;L<g._q.length;L++)g._q[L]();e.Modernizr=g}(t,t,document),e.exports=t.Modernizr,a?t.Modernizr=r:delete t.Modernizr}(window)},"./src/components/pack/NsfwModal.tsx":function(e,t,a){"use strict";(function(e){var r,n=a("./node_modules/linaria/react.js"),o=a("./config/modernizr-config.json"),s=a.n(o),l=a("./node_modules/react-router-dom/esm/react-router-dom.js"),c=a("./node_modules/react/index.js"),i=a.n(c),d=a("./node_modules/react-octicon/lib/index.js"),u=a.n(d);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e};const f=Object(n.styled)("div")({name:"NsfwModal",class:"n11e8w11",vars:{"n11e8w11-0":[()=>s.a.backdropfilter?.75:1]}}),p=()=>{Object(c.useEffect)(()=>{$("#nsfw-modal").modal({show:!0,keyboard:!1,backdrop:"static"}),$("#nsfw-modal").addClass("fade"),$(".modal-backdrop").css("display","none")},[]);return i.a.createElement(f,{id:"nsfw-modal",className:"modal",role:"dialog"},i.a.createElement("div",{className:"modal-dialog modal-dialog-centered",role:"document"},i.a.createElement("div",{className:"modal-content"},i.a.createElement("div",{className:"modal-header"},i.a.createElement("h3",{className:"modal-title"},i.a.createElement(u.a,{name:"alert"})," Content Warning")),i.a.createElement("div",{className:"modal-body"},i.a.createElement("p",null,"This pack has been marked ",i.a.createElement("i",null,"Not Safe For Work")," (",i.a.createElement("a",{href:"https://www.urbandictionary.com/define.php?term=NSFW",target:"_blank",rel:"noopener noreferrer"},"NSFW"),").",i.a.createElement("br",null),"This means that it may contain nudity, sexual content, or other potentially disturbing subject matter."),i.a.createElement("p",null,"You should not view this pack at work, or with children around.")),i.a.createElement("div",{className:"modal-footer"},i.a.createElement(l.Link,{to:"/",className:"btn btn-secondary",title:"Go back home"},"Go back home"),i.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:()=>{$("#nsfw-modal").modal("hide")}},"Show the pack")))))};m(p,"useEffect{}");const k=p;var b,g;t.a=k,a("./.linaria-cache/src/components/pack/NsfwModal.linaria.css"),(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(b.register(f,"NsfwModal","/home/travis/build/signalstickers/signalstickers/src/components/pack/NsfwModal.tsx"),b.register(p,"NsfwModalComponent","/home/travis/build/signalstickers/signalstickers/src/components/pack/NsfwModal.tsx"),b.register(k,"default","/home/travis/build/signalstickers/signalstickers/src/components/pack/NsfwModal.tsx")),(g="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&g(e)}).call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/components/pack/Sticker.tsx":function(e,t,a){"use strict";(function(e){var r,n=a("./node_modules/react/index.js"),o=a.n(n),s=a("./node_modules/linaria/react.js"),l=a("./node_modules/use-async-effect/index.js"),c=a.n(l),i=a("./src/lib/stickers.ts");(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e};const u=Object(s.styled)("div")({name:"Sticker",class:"sahlm9h"}),m=({packId:e,packKey:t,stickerId:a})=>{const[r,s]=Object(n.useState)(""),[l,d]=Object(n.useState)("");return c()(async()=>{const[r,n]=await Promise.all([Object(i.b)(e,t,a),Object(i.a)(e,t,a)]);s(r),d(n)},[e,t,a]),o.a.createElement(u,{className:"shadow-sm"},r&&l?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"emoji"},r),o.a.createElement("img",{src:l,alt:"Sticker"})):o.a.createElement("div",{className:"spinner-border text-light",role:"status"},o.a.createElement("span",{className:"sr-only"},"Loading...")))};d(m,"useState{[emoji, setEmoji]('')}\nuseState{[stickerSrc, setStickerSrc]('')}\nuseAsyncEffect{}",()=>[c.a]);const f=m;var p,k;t.a=f,a("./.linaria-cache/src/components/pack/Sticker.linaria.css"),(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(p.register(u,"Sticker","/home/travis/build/signalstickers/signalstickers/src/components/pack/Sticker.tsx"),p.register(m,"StickerComponent","/home/travis/build/signalstickers/signalstickers/src/components/pack/Sticker.tsx"),p.register(f,"default","/home/travis/build/signalstickers/signalstickers/src/components/pack/Sticker.tsx")),(k="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&k(e)}).call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/components/pack/StickerPackDetail.tsx":function(e,t,a){"use strict";a.r(t),function(e){var r,n=a("./node_modules/react/index.js"),o=a.n(n),s=a("./node_modules/react-router/esm/react-router.js"),l=a("./node_modules/react-router-dom/esm/react-router-dom.js"),c=a("./node_modules/react-linkify/dist/index.js"),i=a.n(c),d=a("./node_modules/linaria/react.js"),u=a("./node_modules/react-octicon/lib/index.js"),m=a.n(u),f=a("./node_modules/use-async-effect/index.js"),p=a.n(f),k=a("./src/hooks/use-query.ts"),b=a("./src/lib/stickers.ts"),g=a("./src/components/pack/Sticker.tsx"),y=a("./src/components/pack/StickerPackError.tsx"),h=a("./src/components/pack/Tag.tsx"),v=a("./src/contexts/StickersContext.tsx"),E=a("./src/components/pack/NsfwModal.tsx");(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var x="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e};const S=Object(d.styled)("div")({name:"StickerPackDetail",class:"s11r72gg"}),w=Object(d.styled)("div")({name:"StickerGridView",class:"sk46ngu"}),N=(e,t,a)=>o.a.createElement("a",{href:e,key:a,target:"_blank",rel:"noreferrer"},t),L=()=>{var e,t;const{setSearchQuery:a,searcher:r}=Object(n.useContext)(v.b),c=Object(s.k)(),d=Object(k.a)(),{packId:u}=Object(s.m)(),f="string"==typeof d.key?d.key:void 0,[x,L]=Object(n.useState)(),[j,H]=Object(n.useState)("");p()(async()=>{try{if(!u)return;L(await Object(b.c)(u,f))}catch(e){e.code&&H(e.code)}},[f,u]);if(!u||!x){if(j)switch(j){case"NO_KEY_PROVIDED":return o.a.createElement(y.a,null,o.a.createElement("p",null,"This sticker pack is not listed in the Signal Stickers directory. However, if you have the pack's ",o.a.createElement("strong",null,"key"),", you can still preview the sticker pack by supplying a ",o.a.createElement("code",null,"key"),"parameter in the URL."),o.a.createElement("p",null,"For example: ",o.a.createElement("code",null,`/pack/${u}?key=sticker-pack-key`)));case"MANIFEST_DECRYPT":return o.a.createElement(y.a,null,o.a.createElement("p",null,"The provided key is invalid."));default:return o.a.createElement(y.a,null,o.a.createElement("p",null,"An unknown error occurred (",j,")."))}return null}const G=null!==(e=x.meta.source)&&void 0!==e?e:"N/A",_=x.manifest.stickers.length,C=x.manifest.author.trim()?x.manifest.author:"Anonymous",P=null!==(t=x.meta.tags)&&void 0!==t?t:[],M=`https://signal.art/addstickers/#pack_id=${u}&pack_key=${x.meta.key}`;return o.a.createElement(S,{className:"px-1 px-sm-4 py-4 mt-0 mt-sm-5 mb-5"},x.meta.nsfw?o.a.createElement(E.a,null):null,o.a.createElement("div",{className:"row mb-4 flex-column-reverse flex-lg-row"},o.a.createElement("div",{className:"col-12 col-lg-8 mt-4 mt-lg-0"},o.a.createElement("div",{className:"title"},x.manifest.title),o.a.createElement("div",{className:"author"},o.a.createElement("button",{type:"button",className:"btn btn-link p-0",title:`View more packs from ${C}`,onClick:e=>{e.preventDefault(),r&&e.currentTarget.textContent&&(a(r.buildQueryString({attributeQueries:[{author:e.currentTarget.textContent}]})),c.push("/"))}},C))),o.a.createElement("div",{className:"col-12 col-lg-4 d-flex d-lg-block justify-content-between text-md-right"},x.meta?o.a.createElement(l.Link,{to:"/"},o.a.createElement("button",{type:"button",className:"btn btn-link mr-2"},"Home")):null,o.a.createElement("a",{href:M,target:"_blank",rel:"noreferrer",title:"Add to Signal"},o.a.createElement("button",{type:"button",className:"btn btn-primary"},o.a.createElement(m.a,{name:"plus"})," Add to Signal")))),x.meta?o.a.createElement("div",{className:"row mb-4"},o.a.createElement("div",{className:"col-12 col-lg-6"},o.a.createElement("ul",{className:"list-group"},x.meta.original?o.a.createElement("li",{className:"list-group-item text-wrap text-break"},o.a.createElement(m.a,{name:"star",title:"Original sticker pack"})," This pack has been created exclusively for Signal by the artist, from original artworks."):null,o.a.createElement("li",{className:"list-group-item text-wrap text-break"},o.a.createElement(m.a,{name:"globe",title:"Source"}),o.a.createElement("div",null,o.a.createElement(i.a,{componentDecorator:N},G))),o.a.createElement("li",{className:"list-group-item text-wrap text-break"},o.a.createElement(m.a,{name:"file-directory",title:"Sticker Count"}),_),o.a.createElement("li",{className:"list-group-item"},o.a.createElement(m.a,{name:"tag",title:"Tags"}),o.a.createElement("div",{className:"text-wrap text-break"},0===P.length?"None":P.map(e=>o.a.createElement(h.a,{key:e,label:e}))))))):null,o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-12"},o.a.createElement(w,null,x.manifest.stickers.map(e=>o.a.createElement(g.a,{packId:u,packKey:x.meta.key,stickerId:e.id,key:e.id}))))))};x(L,"useContext{{\n    setSearchQuery,\n    searcher\n  }}\nuseHistory{history}\nuseQuery{query}\nuseParams{{\n    packId\n  }}\nuseState{[stickerPack, setStickerPack]}\nuseState{[stickerPackError, setStickerPackError]('')}\nuseAsyncEffect{}",()=>[s.k,k.a,s.m,p.a]);const j=L;var H,G;t.default=j,a("./.linaria-cache/src/components/pack/StickerPackDetail.linaria.css"),(H="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(H.register(S,"StickerPackDetail","/home/travis/build/signalstickers/signalstickers/src/components/pack/StickerPackDetail.tsx"),H.register(w,"StickerGridView","/home/travis/build/signalstickers/signalstickers/src/components/pack/StickerPackDetail.tsx"),H.register(N,"linkifyHrefDecorator","/home/travis/build/signalstickers/signalstickers/src/components/pack/StickerPackDetail.tsx"),H.register(L,"StickerPackDetailComponent","/home/travis/build/signalstickers/signalstickers/src/components/pack/StickerPackDetail.tsx"),H.register(j,"default","/home/travis/build/signalstickers/signalstickers/src/components/pack/StickerPackDetail.tsx")),(G="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&G(e)}.call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/components/pack/StickerPackError.tsx":function(e,t,a){"use strict";(function(e){var r,n=a("./node_modules/react/index.js"),o=a.n(n);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const s=e=>o.a.createElement("div",{className:"p-4 my-4"},o.a.createElement("div",{className:"row mb-4"},o.a.createElement("div",{className:"col-10 offset-1 alert alert-danger"},o.a.createElement("h3",{className:"alert-heading mt-1 mb-3"},"Error"),e.children))),l=s;var c,i;t.a=l,(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(c.register(s,"StickerPackError","/home/travis/build/signalstickers/signalstickers/src/components/pack/StickerPackError.tsx"),c.register(l,"default","/home/travis/build/signalstickers/signalstickers/src/components/pack/StickerPackError.tsx")),(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&i(e)}).call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/components/pack/Tag.tsx":function(e,t,a){"use strict";(function(e){var r,n=a("./node_modules/react/index.js"),o=a.n(n),s=a("./node_modules/linaria/react.js"),l=a("./node_modules/react-router/esm/react-router.js"),c=a("./src/contexts/StickersContext.tsx");(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e};const d=Object(s.styled)("button")({name:"Tag",class:"t1fwmllz"}),u=({label:e})=>{const{searcher:t,setSearchQuery:a}=Object(n.useContext)(c.b),r=Object(l.k)();return o.a.createElement(d,{title:`View more packs with tag "${e}"`,className:"btn",onClick:e=>{e.preventDefault(),t&&e.currentTarget.textContent&&(a(t.buildQueryString({attributeQueries:[{tag:e.currentTarget.textContent}]})),r.push("/"))}},e)};i(u,"useContext{{\n    searcher,\n    setSearchQuery\n  }}\nuseHistory{history}",()=>[l.k]);const m=u;var f,p;t.a=m,a("./.linaria-cache/src/components/pack/Tag.linaria.css"),(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(f.register(d,"Tag","/home/travis/build/signalstickers/signalstickers/src/components/pack/Tag.tsx"),f.register(u,"TagComponent","/home/travis/build/signalstickers/signalstickers/src/components/pack/Tag.tsx"),f.register(m,"default","/home/travis/build/signalstickers/signalstickers/src/components/pack/Tag.tsx")),(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&p(e)}).call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/hooks/use-query.ts":function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return i}));var r,n,o,s=a("./node_modules/query-string/index.js"),l=a.n(s),c=a("./node_modules/react-router/esm/react-router.js");function i(){return l.a.parse(Object(c.l)().search)}(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e),("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e})(i,"useLocation{}",()=>[c.l]),(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&n.register(i,"useQuery","/home/travis/build/signalstickers/signalstickers/src/hooks/use-query.ts"),(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&o(e)}).call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))}}]);
//# sourceMappingURL=4-73212d95bddcfaad203b.js.map