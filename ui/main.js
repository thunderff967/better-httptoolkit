!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="72d23974-7503-4232-b766-5fed2dd0212c",e._sentryDebugIdIdentifier="sentry-dbid-72d23974-7503-4232-b766-5fed2dd0212c")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"950a04d3fefe3091d67eec78862c7bdaaf64f65c"},(()=>{var e,t,n,r={80086(e,t,n){"use strict";var r={};n.r(r),n.d(r,{clear:()=>mt,getItem:()=>gt,removeItem:()=>ft,setItem:()=>yt});var o=n(73790),s=n(96677),a=n(2933),i=n(75083),l=n(69828),c=n(33478),d=n(57968),u=n(64251);class p extends Error{constructor(e,t,n,r){var o,s;super(`API error during ${t}: ${e}`),this.operationName=t,this.errorCode=n,this.apiError=r,r&&(this.cause=new Error(null!==(o=null==r?void 0:r.message)&&void 0!==o?o:"[Unknown API error]"),this.cause.code=null!==(s=null==r?void 0:r.code)&&void 0!==s?s:"unknown",this.cause.stack="(From server API)")}}class h extends Error{constructor(e,t,n,r){super(`Failed to activate interceptor ${e}: ${t}`),this.interceptorId=e,this.failureMessage=t,this.errorCode=n,this.cause=r}}class m extends Error{constructor(e,t){super(`Interceptor ${e} activation ran unsuccessfully`),this.interceptorId=e,this.metadata=t}}let g=!1;function f(e,t={}){console.log("Reporting error:",e,t),g&&d.v4(n=>{n.setExtras(t),"string"==typeof e?u.wd(e):e instanceof Error?u.Cp(e):(console.warn("Reporting non-error",e),u.wd(`Non-error thrown: ${e}`))})}var y=n(2543),v=n.n(y),b=n(96540),x=n(40961),w=n(22451),E=n(6359),C=n(64612),T=n(13863);const S=[0,25,45,60,80,120,155,175,200,220,245,270,290,315,335,350],P="0123456789ABCDEF";function k(e,t,n,r){const o=T.J1(n)<.5;let s=o?.35:.05,a=o?.95:.65;for(let i=0;i<25;i++){const i=(s+a)/2,l=T.bJ(T.KI(e,t,i),n);o?l>=r?a=i:s=i:l>=r?s=i:a=i}return(s+a)/2}function R(e){return`hex-${P[e].toLowerCase()}x`}function O(e){const{red:t,green:n,blue:r}=T.kN(e);return[t,n,r].map(e=>e.toString(16).padStart(2,"0")).join("")}n(76035),n(55175),n(85202);var H=n(42800);n(25833);const A={smallPrintSize:"12px",textInputFontSize:"13px",textSize:"14.5px",subHeadingSize:"17px",headingSize:"20px",largeHeadingSize:"24px",loudHeadingSize:"38px",screamingHeadingSize:"80px"},$=1100,I="#f1971f",q="#f1971f40",j="#e1421f",D="#000000",M="#16181e",F="#1e2028",B="#32343B",L="#53565e",N="#818490",U="#9a9da8",W="#f2f2f2",z="#fafafa",_="#ffffff",V="#2d4cbd",K="#6284fa",J={"editorWarning.foreground":"#ff0000"},Q={light:Object.assign(Object.assign({fontFamily:'"DM Sans", Arial, sans-serif',titleTextFamily:'Saira, "DM Sans", Arial, sans-serif',monoFontFamily:'"DM Mono", monospace',mainBackground:z,mainLowlightBackground:W,mainColor:F,mainLowlightColor:L,highlightBackground:_,highlightColor:F,lowlightTextOpacity:.65,boxShadowAlpha:.3,pillContrast:.9,pillDefaultColor:U,primaryInputBackground:V,primaryInputColor:_,secondaryInputBorder:K,secondaryInputColor:V,inputBackground:_,inputHoverBackground:W,inputBorder:L,inputColor:F,inputPlaceholderColor:L,inputWarningPlaceholder:"#8c5c1d",popColor:j,popOverlayColor:_,warningColor:I,warningBackground:q,containerBackground:"#e4e8ed",containerWatermark:N,containerBorder:U,linkColor:"#0000EE",visitedLinkColor:"#551A8B",editorBackground:"#ffffff",hexColorMinContrast:4.6,monacoTheme:"vs-custom",monacoThemeBase:"vs",monacoThemeOverrides:J,modalGradient:"radial-gradient(#40404b, #111118)",modalColor:z},A),{globalCss:""}),dark:Object.assign(Object.assign({fontFamily:'"DM Sans", Arial, sans-serif',titleTextFamily:'Saira, "DM Sans", Arial, sans-serif',monoFontFamily:'"DM Mono", monospace',mainBackground:B,mainLowlightBackground:"#25262e",mainColor:_,mainLowlightColor:N,highlightBackground:L,highlightColor:_,lowlightTextOpacity:.65,boxShadowAlpha:.4,pillContrast:.85,pillDefaultColor:U,primaryInputBackground:V,primaryInputColor:_,secondaryInputBorder:V,secondaryInputColor:K,inputBackground:M,inputHoverBackground:F,inputBorder:L,inputColor:_,inputPlaceholderColor:N,inputWarningPlaceholder:"#e8b978",popColor:j,popOverlayColor:_,warningColor:I,warningBackground:q,containerBackground:F,containerWatermark:U,containerBorder:D,linkColor:"#8699ff",visitedLinkColor:"#ac7ada",editorBackground:M,hexColorMinContrast:4.6,monacoTheme:"vs-dark-custom",monacoThemeBase:"vs-dark",monacoThemeOverrides:Object.assign(Object.assign({},J),{"editor.background":M}),modalGradient:`radial-gradient(${_}, ${U})`,modalColor:B},A),{globalCss:C.css`
        @supports (color-scheme: dark) {
            :root {
                color-scheme: dark;
            }
        }

        @supports not (color-scheme: dark) {
            ::-webkit-scrollbar {
                background-color: ${e=>T.e$(.2,e.theme.containerBackground)};
            }

            ::-webkit-scrollbar-thumb {
                background-color: ${e=>T.a(.2,e.theme.containerBackground)};
            }

            /* Standard, but poorly supported: */
            scrollbar-color: dark;
        }
    `}),"midnight":Object.assign(Object.assign({fontFamily:'"DM Sans", Arial, sans-serif',titleTextFamily:'Saira, "DM Sans", Arial, sans-serif',monoFontFamily:'"DM Mono", monospace',mainBackground:"#0d1117",mainLowlightBackground:"#161b22",mainColor:"#f0f6fc",mainLowlightColor:"#8b949e",highlightBackground:"#21262d",highlightColor:"#ffffff",lowlightTextOpacity:.7,boxShadowAlpha:.4,pillContrast:.85,pillDefaultColor:"#8b949e",primaryInputBackground:"#1f6feb",primaryInputColor:"#ffffff",secondaryInputBorder:"#388bfd",secondaryInputColor:"#58a6ff",inputBackground:"#0d1117",inputHoverBackground:"#161b22",inputBorder:"#30363d",inputColor:"#f0f6fc",inputPlaceholderColor:"#8b949e",inputWarningPlaceholder:"#e8b978",popColor:"#58a6ff",popOverlayColor:"#ffffff",warningColor:I,warningBackground:q,containerBackground:"#161b22",containerWatermark:"#8b949e",containerBorder:"#30363d",linkColor:"#58a6ff",visitedLinkColor:"#bc8cff",editorBackground:"#0d1117",hexColorMinContrast:4.6,monacoTheme:"vs-dark-custom",monacoThemeBase:"vs-dark",monacoThemeOverrides:Object.assign(Object.assign({},J),{"editor.background":"#0d1117"}),modalGradient:"radial-gradient(#58a6ff, #0d1117)",modalColor:"#0d1117"},A),{globalCss:""}),"dracula":Object.assign(Object.assign({fontFamily:'"DM Sans", Arial, sans-serif',titleTextFamily:'Saira, "DM Sans", Arial, sans-serif',monoFontFamily:'"DM Mono", monospace',mainBackground:"#282a36",mainLowlightBackground:"#21222c",mainColor:"#f8f8f2",mainLowlightColor:"#6272a4",highlightBackground:"#44475a",highlightColor:"#ffffff",lowlightTextOpacity:.7,boxShadowAlpha:.4,pillContrast:.85,pillDefaultColor:"#bd93f9",primaryInputBackground:"#bd93f9",primaryInputColor:"#282a36",secondaryInputBorder:"#ff79c6",secondaryInputColor:"#ff79c6",inputBackground:"#1e1f29",inputHoverBackground:"#282a36",inputBorder:"#6272a4",inputColor:"#f8f8f2",inputPlaceholderColor:"#6272a4",inputWarningPlaceholder:"#e8b978",popColor:"#ff79c6",popOverlayColor:"#ffffff",warningColor:I,warningBackground:q,containerBackground:"#21222c",containerWatermark:"#6272a4",containerBorder:"#44475a",linkColor:"#8be9fd",visitedLinkColor:"#ff79c6",editorBackground:"#1e1f29",hexColorMinContrast:4.6,monacoTheme:"vs-dark-custom",monacoThemeBase:"vs-dark",monacoThemeOverrides:Object.assign(Object.assign({},J),{"editor.background":"#1e1f29"}),modalGradient:"radial-gradient(#bd93f9, #282a36)",modalColor:"#282a36"},A),{globalCss:""}),"nord":Object.assign(Object.assign({fontFamily:'"DM Sans", Arial, sans-serif',titleTextFamily:'Saira, "DM Sans", Arial, sans-serif',monoFontFamily:'"DM Mono", monospace',mainBackground:"#eceff4",mainLowlightBackground:"#e5e9f0",mainColor:"#2e3440",mainLowlightColor:"#4c566a",highlightBackground:"#d8dee9",highlightColor:"#2e3440",lowlightTextOpacity:.7,boxShadowAlpha:.3,pillContrast:.9,pillDefaultColor:"#4c566a",primaryInputBackground:"#5e81ac",primaryInputColor:"#ffffff",secondaryInputBorder:"#88c0d0",secondaryInputColor:"#5e81ac",inputBackground:"#ffffff",inputHoverBackground:"#e5e9f0",inputBorder:"#d8dee9",inputColor:"#2e3440",inputPlaceholderColor:"#4c566a",inputWarningPlaceholder:"#8c5c1d",popColor:"#88c0d0",popOverlayColor:"#ffffff",warningColor:I,warningBackground:q,containerBackground:"#e5e9f0",containerWatermark:"#4c566a",containerBorder:"#d8dee9",linkColor:"#5e81ac",visitedLinkColor:"#b48ead",editorBackground:"#ffffff",hexColorMinContrast:4.6,monacoTheme:"vs-custom",monacoThemeBase:"vs",monacoThemeOverrides:J,modalGradient:"radial-gradient(#88c0d0, #eceff4)",modalColor:"#eceff4"},A),{globalCss:""}),"sepia":Object.assign(Object.assign({fontFamily:'"DM Sans", Arial, sans-serif',titleTextFamily:'Saira, "DM Sans", Arial, sans-serif',monoFontFamily:'"DM Mono", monospace',mainBackground:"#fdf6e3",mainLowlightBackground:"#eee8d5",mainColor:"#657b83",mainLowlightColor:"#93a1a1",highlightBackground:"#eee8d5",highlightColor:"#073642",lowlightTextOpacity:.7,boxShadowAlpha:.3,pillContrast:.9,pillDefaultColor:"#93a1a1",primaryInputBackground:"#b58900",primaryInputColor:"#ffffff",secondaryInputBorder:"#268bd2",secondaryInputColor:"#268bd2",inputBackground:"#fdf6e3",inputHoverBackground:"#eee8d5",inputBorder:"#93a1a1",inputColor:"#657b83",inputPlaceholderColor:"#93a1a1",inputWarningPlaceholder:"#8c5c1d",popColor:"#cb4b16",popOverlayColor:"#ffffff",warningColor:I,warningBackground:q,containerBackground:"#eee8d5",containerWatermark:"#93a1a1",containerBorder:"#93a1a1",linkColor:"#268bd2",visitedLinkColor:"#6c71c4",editorBackground:"#fdf6e3",hexColorMinContrast:4.6,monacoTheme:"vs-custom",monacoThemeBase:"vs",monacoThemeOverrides:J,modalGradient:"radial-gradient(#b58900, #fdf6e3)",modalColor:"#fdf6e3"},A),{globalCss:""}),"high-contrast":Object.assign(Object.assign({fontFamily:'"DM Sans", Arial, sans-serif',titleTextFamily:'Saira, "DM Sans", Arial, sans-serif',monoFontFamily:'"DM Mono", monospace',mainBackground:"#000000",mainLowlightBackground:"#262626",mainColor:"#ffffff",mainLowlightColor:"#ffffff",highlightBackground:"#ffffff",highlightColor:"#000",lowlightTextOpacity:.8,boxShadowAlpha:.1,pillContrast:.95,pillDefaultColor:N,primaryInputBackground:V,primaryInputColor:"#ffffff",secondaryInputBorder:"#ffffff",secondaryInputColor:"#ffffff",inputBackground:"#ffffff",inputHoverBackground:"#ddd",inputBorder:"#aaa",inputColor:"#000000",inputPlaceholderColor:"#444",inputWarningPlaceholder:"#e1b374",popColor:j,popOverlayColor:"#ffffff",warningColor:I,warningBackground:q,containerBackground:B,containerWatermark:"#a0a0b0",containerBorder:"#000000",linkColor:"#8699ff",visitedLinkColor:"#ac7ada",editorBackground:"#000000",hexColorMinContrast:7.5,monacoTheme:"hc-black-custom",monacoThemeBase:"hc-black",monacoThemeOverrides:J,modalGradient:"#f0f0f0",modalColor:D},A),{globalCss:""})};const{default:G,css:Y,createGlobalStyle:X,keyframes:Z,ThemeProvider:ee,StyleSheetManager:te}=C,ne=X`
    ${H.Ay};

    * {
        box-sizing: border-box;
    }

    body {
        font-family: ${e=>e.theme.fontFamily};
        color: ${e=>e.theme.mainColor};
        background-color: ${e=>e.theme.containerBackground};
    }

    input {
        font-family: ${e=>e.theme.fontFamily};
    }

    em {
        font-style: italic;
    }

    strong {
        font-weight: bold;
    }

    :active {
        outline: none;
    }

    .slow-spin {
        animation: fa-spin 5s infinite linear;
    }

    /* Override some Monaco CSS internals */
    .monaco-editor {
        /* Our editors don't have real filenames, so hide that from error popups: */
        .zone-widget .filename {
            display: none;
        }
    }

    .phosphor-icon {
        /* Ensures icons line up with FontAwesome & neighbouring text */
        vertical-align: -0.125em;
    }

    ${e=>e.theme.globalCss}
`;function re(e){return new Promise(t=>setTimeout(t,e))}function oe(){let e,t,n=new Promise((n,r)=>{e=n,t=r});return{resolve:e,reject:t,promise:n}}var se=n(83624),ae=n(17705),ie=n(86123);function le(e){const t=(0,ie.Sx)(e),n=t.then;t.then=function(){return le(n.apply(this,arguments))};const r=t.catch;return t.catch=function(){return le(r.apply(this,arguments))},t}function ce(e){return"object"==typeof e&&"then"in e&&"catch"in e&&"case"in e&&"value"in e&&"state"in e}function de(){let e,t;const n=le(new Promise((n,r)=>{e=n,t=r}));return{resolve:e,reject:t,promise:n}}function ue(e){const{resolve:t,promise:n}=oe(),r=le(n.then(e));["then","catch","case"].forEach(e=>{const n=r[e];r[e]=function(){return t(),n.apply(this,arguments)}});let o=w.observable.box();Object.defineProperty(r,"value",{get:()=>(t(),o.get()),set:e=>{t(),o.set(e)}});let s=w.observable.box();return Object.defineProperty(r,"state",{get:()=>(t(),s.get()),set:e=>{t(),s.set(e)}}),r}function pe(e,t){let n;return function(){return n?n.atom.reportObserved():(n={value:e.apply(this),atom:(0,w.createAtom)("DebounceAtom")},setTimeout(()=>{const{atom:e}=n;n=void 0,e.reportChanged()},t)),n.value}}function he(e,t,n){var r;let o,s,a;return"number"==typeof e?(s=e,a=null!==(r=t)&&void 0!==r?r:{},(e,t,n)=>{if(!n.get)throw new Error("debounceComputed requires a getter");return(0,w.computed)(a)(e,t,Object.assign(Object.assign({},n),{get:pe(n.get,s)}))}):(o=e,s=t,a=null!=n?n:{},(0,w.computed)(pe(o,s),a))}const me=new class{constructor(){this.atom=(0,w.createAtom)("Clock",()=>this.startTicking(),()=>this.stopTicking()),this.intervalHandler=null,this.currentDateTime=Date.now()}getTime(){return this.atom.reportObserved()?this.currentDateTime:Date.now()}tick(){this.currentDateTime=Date.now(),this.atom.reportChanged()}startTicking(){this.tick(),this.intervalHandler=setInterval(()=>this.tick(),50)}stopTicking(){null!=this.intervalHandler&&(clearInterval(this.intervalHandler),this.intervalHandler=null)}};var ge;function fe(e){return t=this,n=void 0,o=function*(){return"undefined"==typeof window?"service-worker":e in window?window[e]:new Promise(t=>{window.addEventListener("message",n=>{n.data[e]&&t(n.data[e])})})},new((r=void 0)||(r=Promise))(function(e,s){function a(e){try{l(o.next(e))}catch(e){s(e)}}function i(e){try{l(o.throw(e))}catch(e){s(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r(function(e){e(n)})).then(a,i)}l((o=o.apply(t,n||[])).next())});var t,n,r,o}const ye=null!==(ge=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:{}).desktopApi)&&void 0!==ge?ge:{},ve=()=>{var e,t;return null!==(t=null===(e=ye.getServerPort)||void 0===e?void 0:e.call(ye))&&void 0!==t?t:45457},be=()=>{var e,t;return null!==(t=null===(e=ye.getMockttpPort)||void 0===e?void 0:e.call(ye))&&void 0!==t?t:45456};var xe=function(e,t,n,r){return new(n||(n=Promise))(function(o,s){function a(e){try{l(r.next(e))}catch(e){s(e)}}function i(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(a,i)}l((r=r.apply(e,t||[])).next())})};class we{constructor(e){this.authToken=e}graphql(e,t,n){return xe(this,void 0,void 0,function*(){const r=yield fetch(`http://127.0.0.1:${ve()}`,{method:"POST",headers:Object.assign(Object.assign({},this.authToken?{Authorization:`Bearer ${this.authToken}`}:{}),{"content-type":"application/json"}),body:JSON.stringify({operationName:e,query:t,variables:n})}).catch(t=>{var n;throw new p(`fetch failed with '${null!==(n=t.message)&&void 0!==n?n:t}'`,e)});if(!r.ok)throw console.error(r),new p(`unexpected status ${r.status} ${r.statusText}`,e,r.status);const{data:o,errors:s}=yield r.json();if(s&&s.length){console.error(s);const t=s.length>1?`s (${s.length})`:"";throw new p(`GraphQL error${t}: ${s.map(e=>`${e.message} at ${e.path.join(".")}`).join(", ")}`,e)}return o})}getServerVersion(){return xe(this,void 0,void 0,function*(){return(yield this.graphql("getVersion","\n            query getVersion {\n                version\n            }\n        ",{})).version})}getConfig(e){return xe(this,void 0,void 0,function*(){const t=yield this.graphql("getConfig",`\n            ${je(yield Fe,Ke)?"query getConfig($proxyPort: Int!) {":"query getConfig {"}\n                config {\n                    certificatePath\n                    ${je(yield Fe,Ne)?"\n                        certificateContent\n                        certificateFingerprint\n                    ":""}\n                }\n\n                ${je(yield Fe,Ne)?"networkInterfaces":""}\n\n                ${je(yield Fe,_e)?"systemProxy {\n                    proxyUrl\n                    noProxy\n                }":""}\n\n                ${je(yield Fe,Ke)?"\n                    dnsServers(proxyPort: $proxyPort)\n                    ruleParameterKeys\n                ":""}\n            }\n        `,{proxyPort:e});return Object.assign(Object.assign({},t.config),{networkInterfaces:t.networkInterfaces||{},systemProxy:t.systemProxy,dnsServers:t.dnsServers||[],ruleParameterKeys:t.ruleParameterKeys||[]})})}getNetworkInterfaces(){return xe(this,void 0,void 0,function*(){return je(yield Fe,Ne)?(yield this.graphql("getNetworkInterfaces","\n            query getNetworkInterfaces {\n                networkInterfaces\n            }\n        ",{})).networkInterfaces:{}})}getInterceptors(e){return xe(this,void 0,void 0,function*(){return(yield this.graphql("getInterceptors",`\n            query getInterceptors($proxyPort: Int!) {\n                interceptors {\n                    id\n                    version\n                    isActive(proxyPort: $proxyPort)\n                    isActivable\n\n                    ${je(yield Fe,Ue)?"metadata":""}\n                }\n            }\n        `,{proxyPort:e})).interceptors})}getDetailedInterceptorMetadata(e,t){return xe(this,void 0,void 0,function*(){if(je(yield Fe,ze)){if(t)throw new Error("Metadata subqueries cannot be used with GraphQL API client");return(yield this.graphql("getDetailedInterceptorMetadata","\n            query getDetailedInterceptorMetadata($id: ID!) {\n                interceptor(id: $id) {\n                    metadata(type: DETAILED)\n                }\n            }\n        ",{id:e})).interceptor.metadata}})}activateInterceptor(e,t,n){return xe(this,void 0,void 0,function*(){const r=(yield this.graphql("Activate","\n            mutation Activate($id: ID!, $proxyPort: Int!, $options: Json) {\n                activateInterceptor(id: $id, proxyPort: $proxyPort, options: $options)\n            }\n        ",{id:e,proxyPort:t,options:n})).activateInterceptor;return y.isBoolean(r)?{success:r,metadata:void 0}:r})}triggerServerUpdate(){return xe(this,void 0,void 0,function*(){yield this.graphql("TriggerUpdate","\n            mutation TriggerUpdate {\n                triggerUpdate\n            }\n        ",{})})}}var Ee=function(e,t,n,r){return new(n||(n=Promise))(function(o,s){function a(e){try{l(r.next(e))}catch(e){s(e)}}function i(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(a,i)}l((r=r.apply(e,t||[])).next())})},Ce=n(48287).Buffer,Te=function(e,t,n,r){return new(n||(n=Promise))(function(o,s){function a(e){try{l(r.next(e))}catch(e){s(e)}}function i(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(a,i)}l((r=r.apply(e,t||[])).next())})};class Se{constructor(e){this.authToken=e}apiRequest(e,t){return Te(this,arguments,void 0,function*(e,t,n={},r,o){var s,a,i;const l=`${e} ${t}`,c=yield fetch(`http://127.0.0.1:${ve()}${t}${Object.keys(n).length?"?"+new URLSearchParams(y.mapValues(n,e=>e.toString())).toString():""}`,{method:e,headers:Object.assign(Object.assign({},this.authToken?{Authorization:`Bearer ${this.authToken}`}:{}),{"content-type":"application/json"}),body:r?JSON.stringify(r):void 0,signal:null==o?void 0:o.abortSignal}).catch(e=>{var t;const n=null!==(t=e.message)&&void 0!==t?t:e;throw new p(`fetch failed with '${n}'`,l)});if(!c.ok){const e=yield c.json().catch(e=>null);console.error(c.status,e);const t=null!==(a=null===(s=null==e?void 0:e.error)||void 0===s?void 0:s.message)&&void 0!==a?a:"[unknown]",n=null===(i=null==e?void 0:e.error)||void 0===i?void 0:i.code;throw new p(`unexpected ${c.status} ${c.statusText} - ${n?`${n} -`:""}`,l,c.status,{message:t,code:n})}return c})}apiJsonRequest(e,t){return Te(this,arguments,void 0,function*(e,t,n={},r){return yield(yield this.apiRequest(e,t,n,r)).json()})}apiNdJsonRequest(e,t){return Te(this,arguments,void 0,function*(e,t,n={},r,o){const s=yield this.apiRequest(e,t,n,r,o);return s.body?function(e){let t;return new ReadableStream({start(){t=e.getReader()},pull(e){return Ee(this,void 0,void 0,function*(){const{done:n,value:r}=yield t.read();if(n)return e.close();e.enqueue(JSON.parse(r))})},cancel(e){t.cancel(e)}})}(function(e){const t=/\r?\n/,n=new TextDecoder;let r,o="";return new ReadableStream({start(){r=e.getReader()},pull(e){return Ee(this,void 0,void 0,function*(){var s;const{done:a,value:i}=yield r.read();a&&(o.length>0&&e.enqueue(o),e.close());const l=n.decode(i,{stream:!0});o+=l;const c=o.split(t);o=null!==(s=c.pop())&&void 0!==s?s:"";for(const t of c)e.enqueue(t)})},cancel(e){r.cancel(e)}})}(s.body)):new ReadableStream({start(e){e.close()}})})}getServerVersion(){return Te(this,void 0,void 0,function*(){return(yield this.apiJsonRequest("get","/version")).version})}getConfig(e){return Te(this,void 0,void 0,function*(){return(yield this.apiJsonRequest("GET","/config",{proxyPort:e})).config})}getNetworkInterfaces(){return Te(this,void 0,void 0,function*(){return(yield this.apiJsonRequest("GET","/config/network-interfaces")).networkInterfaces})}getInterceptors(e){return Te(this,void 0,void 0,function*(){return(yield this.apiJsonRequest("GET","/interceptors",{proxyPort:e})).interceptors})}getDetailedInterceptorMetadata(e,t){return Te(this,void 0,void 0,function*(){return(yield this.apiJsonRequest("GET",`/interceptors/${e}/metadata/${t||""}`)).interceptorMetadata})}activateInterceptor(e,t,n){return Te(this,void 0,void 0,function*(){return(yield this.apiJsonRequest("POST",`/interceptors/${e}/activate/${t}`,{},n)).result})}sendRequest(e,t,n){return Te(this,void 0,void 0,function*(){var r;const o=Object.assign(Object.assign({},e),{rawBody:null===(r=e.rawBody)||void 0===r?void 0:r.toString("base64")}),s=Object.assign(Object.assign({},t),t.clientCertificate?{clientCertificate:Object.assign(Object.assign({},t.clientCertificate),{pfx:t.clientCertificate.pfx.toString("base64")})}:{}),a=yield this.apiNdJsonRequest("POST","/client/send",{},{request:o,options:s},n),i=a.getReader();return new ReadableStream({pull(e){return Te(this,void 0,void 0,function*(){const{done:t,value:n}=yield i.read();if(t)return e.close();"response-body-part"===n.type?e.enqueue(Object.assign(Object.assign({},n),{rawBody:Ce.from(n.rawBody,"base64")})):e.enqueue(n)})},cancel(e){a.cancel(e)}})})}triggerServerUpdate(){return Te(this,void 0,void 0,function*(){yield this.apiJsonRequest("POST","/update")})}}var Pe=function(e,t,n,r){return new(n||(n=Promise))(function(o,s){function a(e){try{l(r.next(e))}catch(e){s(e)}}function i(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(a,i)}l((r=r.apply(e,t||[])).next())})};const ke=oe(),Re=()=>ke.promise;let Oe;function He(){return Oe||(Oe=(()=>Pe(this,void 0,void 0,function*(){yield Re();const e=function(){var e;return null!==(e=new URLSearchParams(window.location.search).get("authToken"))&&void 0!==e?e:void 0}(),t=new Se(e),n=new we(e);let r;for(;!r;){if(r=yield t.getServerVersion().catch(()=>(console.log("Couldn't get version from REST API"),n.getServerVersion().catch(()=>{console.log("Couldn't get version from GraphQL API")}))),r)return je(r,Ge)?t:n;yield re(100)}throw new Error(`Unreachable error: got version ${r} but couldn't pick an API client`)}))())}function Ae(){return Pe(this,void 0,void 0,function*(){return(yield He()).getServerVersion()})}function $e(e,t){return Pe(this,void 0,void 0,function*(){return(yield He()).getDetailedInterceptorMetadata(e,t)})}var Ie=n(99589);const qe=o.getItem("last-server-version");function je(e,t){return"string"==typeof e&&Ie.satisfies(e,t,{includePrerelease:!0})}const De="950a04d3fefe3091d67eec78862c7bdaaf64f65c",Me=ue(()=>{return e=void 0,t=void 0,r=function*(){return fe("httpToolkitDesktopVersion")},new((n=void 0)||(n=Promise))(function(o,s){function a(e){try{l(r.next(e))}catch(e){s(e)}}function i(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(a,i)}l((r=r.apply(e,t||[])).next())});var e,t,n,r}),Fe=ue(()=>Re().then(Ae).then(e=>(o.setItem("last-server-version",e),e)));function Be(e){return!e||"*"===e||"fulfilled"===Fe.state&&je(Fe.value,e)}const Le="^0.1.28 || ^1.0.0",Ne="^0.1.30 || ^1.0.0",Ue="^0.1.31 || ^1.0.0",We="^1.1.4",ze="^1.2.0",_e="^1.4.1",Ve="^1.4.2",Ke="^1.5.0",Je="^1.9.0",Qe="^1.11.0",Ge="^1.13.0",Ye="^1.13.0",Xe="^1.23.0";if(ye.setComponentVersions){let e,t;const n=()=>{const n={};return e&&(n.Desktop=e),t&&(n.Server=t),n.UI=De.slice(0,8),n};ye.setComponentVersions(n()),Me.then(t=>{e=t,ye.setComponentVersions(n())}).catch(()=>{}),Fe.then(e=>{t=e,ye.setComponentVersions(n())}).catch(()=>{})}const Ze="1"!==navigator.doNotTrack,et=(0,ae.format)(new Date,"YYYY-MM-DD"),tt=null===localStorage.getItem("first-run-date")&&null===localStorage.getItem("theme-background-color"),nt=localStorage.getItem("first-run-date"),rt=null!=nt?nt:et;nt||localStorage.setItem("first-run-date",rt);const ot=localStorage.getItem("last-run-date")!==et;ot&&localStorage.setItem("last-run-date",et);const st=()=>{var e;const t=null===(e=ye.getDeviceInfo)||void 0===e?void 0:e.call(ye);return{"first-run":tt,"first-run-today":ot,"ui-version":De,"server-version":"fulfilled"===Fe.state?Fe.value:void 0,"desktop-version":"fulfilled"===Me.state?Me.value:void 0,platform:null==t?void 0:t.platform,"platform-release":null==t?void 0:t.release,"runtime-arch":null==t?void 0:t.runtimeArch,"real-arch":null==t?void 0:t.realArch}},at=new Set;function it(e){if(!Ze)return;const t=`${e.category}${e.action}${e.value}`;if(at.has(t))return;at.add(t);const n=location.href.replace(/\/view\/[a-z0-9\-]+/,"/view").replace(/\/modify\/[a-z0-9\-]+/,"/modify").replace(/\?.*/,"");se.bC.capture(`${e.category}:${e.action}`,{value:e.value,$current_url:n,$set_once:Object.assign({},st())})}var lt=n(22894),ct=n(40202);const dt=lt.parse(window.location.search.replace(/^\?/,"")),ut=(0,ct.nS)((()=>{let e=window.history.state,t=window.location;window.addEventListener("popstate",()=>{e=window.history.state,t=window.location});const n=y.throttle((...e)=>window.history.pushState.apply(window.history,e),250,{leading:!0,trailing:!0}),r=y.throttle((...e)=>window.history.replaceState.apply(window.history,e),250,{leading:!0,trailing:!0});return{get location(){return t},addEventListener:window.addEventListener.bind(window),removeEventListener:window.removeEventListener.bind(window),history:{get state(){return e},pushState(e,r,o){n(e,r,o);let[s,a=""]=o.split("?");t=Object.assign({},window.location,{pathname:s,search:a})},replaceState(e,n,o){r(e,n,o);let[s,a=""]=o.split("?");t=Object.assign({},window.location,{pathname:s,search:a})}}}})()),pt=ut.navigate.bind(ut);ut.navigate=function(e,t={}){const[n,r]=e.split("?"),o=lt.parse(r);return pt(n+"?"+lt.stringify(Object.assign(Object.assign({},o),dt)),t)};var ht=n(22166);function mt(){return new Promise((e,t)=>{try{window.localStorage.clear(),e(null)}catch(e){t(e)}})}function gt(e){return new Promise((t,n)=>{try{t(window.localStorage.getItem(e))}catch(e){n(e)}})}function ft(e){return new Promise((t,n)=>{try{window.localStorage.removeItem(e),t(null)}catch(e){n(e)}})}function yt(e,t){return new Promise((n,r)=>{try{window.localStorage.setItem(e,t),n(null)}catch(e){r(e)}})}function vt(e){if("object"==typeof e&&e)if(Array.isArray(e))for(let t=0;t<e.length;t++)vt(e[t]);else Object.keys(e).map(t=>vt(e[t]));return e}function bt(e){return e?(0,ht.Ik)(e):(0,ht.Ie)(vt,e=>e)}const xt={object:bt,list:function(e){return(0,ht.p_)(bt(e))},map:function(e){return(0,ht.Tj)(bt(e))}};function wt(e,t){const n=Et(t);return(0,ht.U8)(e,n),e}function Et(e){const t={};return Object.keys(e).forEach(n=>{"object"==typeof e[n]?e[n].type in xt&&("object"==typeof e[n].schema?t[n]=xt[e[n].type](Et(e[n].schema)):t[n]=xt[e[n].type](e[n].schema)):!0===e[n]&&(t[n]=!0)}),(0,ht.gt)(t)}function Ct(...e){const[t,n]=e;return t in xt?(0,ht.sU)(xt[t](n)):1===e.length?e=>wt(e,t):ht.sU.apply(null,e)}function Tt(e){return t=this,n=void 0,s=function*(){const{key:t,store:n,storage:o,jsonify:s,dataTransform:a,customArgs:i}=y.defaults(e,{customArgs:{},storage:r,jsonify:!0,dataTransform:y.identity}),l=(0,ht.Yu)(n),c=yield o.getItem(t);if(c){const e=s?JSON.parse(c):c;e&&"object"==typeof e&&(0,w.runInAction)(()=>{(0,ht.yo)(l,n,a(e),void 0,i)})}(0,w.reaction)(()=>(0,ht.lK)(l,n),e=>o.setItem(t,s?JSON.stringify(e):e))},new((o=void 0)||(o=Promise))(function(e,r){function a(e){try{l(s.next(e))}catch(e){r(e)}}function i(e){try{l(s.throw(e))}catch(e){r(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o(function(e){e(n)})).then(a,i)}l((s=s.apply(t,n||[])).next())});var t,n,o,s}function St(e){return"object"==typeof e&&(e instanceof Error||e.message||e.code||e.stack)}function Pt(e){return St(e)?e:new Error(e.message||e.toString())}class kt extends Error{constructor(e,t=e=>e){super(`Unhandled case value: ${t(e)}`)}}const Rt=(e,t=e=>e)=>{throw new kt(e,t)},Ot=(e,t=e=>e)=>{console.warn(`Unhandled case value: ${t(e)}`)};function Ht(e,t=", ",n=" and "){return 1===e.length?e[0]:e.slice(0,-1).join(t)+n+e[e.length-1]}const At=["a","e","i","o","u","y"];function $t(e){return e[0].toUpperCase()+e.slice(1)}function It(e){return $t(e.replace(/([a-z])([A-Z])/g,"$1 $2").toLowerCase())}const qt=(e,t)=>e.toFixed(t).replace(/\.0+$/,""),jt=e=>e<100?qt(e,1)+"ms":e<1010?qt(e,0)+"ms":e<5e3?qt(e/1e3,2)+" seconds":e<9900?qt(e/1e3,1)+" seconds":e<9e4?qt(e/1e3,0)+" seconds":e<54e5?`${qt(e/6e4,1)} minutes`:`${qt(e/36e5,1)} hours`;var Dt=n(48287).Buffer;const Mt=new TextEncoder,Ft=new TextDecoder("utf8",{fatal:!0}),Bt=new TextDecoder("utf8",{fatal:!1}),Lt=new TextDecoder("latin1",{fatal:!1});function Nt(e){let t;if(e.byteLength>1028){const n=e.subarray(1024,1028).findIndex(e=>128!=(192&e));if(-1===n)return!1;const r=1024+n;t=e.subarray(0,r)}else t=e;try{return Ft.decode(t),!0}catch(e){return!1}}function Ut(e,t="utf8"){if("utf8"===t)return Dt.from(Mt.encode(e));if("binary"===t)return Dt.from(e,t);throw new Error(`Cannot decode string from unrecognized encoding: ${t}`)}function Wt(e,t="utf8"){if("detect-encoding"===t)return Nt(e)?Wt(e,"utf8"):Wt(e,"binary");if("utf8"===t)return Bt.decode(e);if("binary"===t)return Lt.decode(e);throw new Error(`Cannot convert buffer to unrecognized encoding: ${t}`)}function zt(e){return e&&"Buffer"===e.type&&!!e.data}function _t(e){return e?Dt.isBuffer(e)?e:"string"==typeof e?Ut(e):zt(e)?Dt.from(e.data):Dt.from(e.buffer,e.byteOffset,e.byteLength):Dt.from([])}function Vt(e){return e?"string"==typeof e?new Blob([e]).size:zt(e)?e.data.length:e.length:0}const Kt=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0").toUpperCase());function Jt(e,t=!0){const n=Dt.isBuffer(e)?e.byteLength:"string"==typeof e?e.length:e;let r=t?1e3:1024,o=t?["bytes","kB","MB","GB","TB","PB","EB","ZB","YB"]:["bytes","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],s=0===n?0:Math.floor(Math.log(n)/Math.log(r)),a=1===n?"byte":o[s];return(n/Math.pow(r,s)).toFixed(1).replace(/\.0$/,"")+" "+a}const Qt={100:{name:"100 Continue",mdnSlug:"Web/HTTP/Status/100",summary:"The HTTP 100 Continue informational status response code indicates that everything so far is OK and that the client should continue with the request or ignore it if it is already finished."},101:{name:"101 Switching Protocols",mdnSlug:"Web/HTTP/Status/101",summary:"The HTTP 101 Switching Protocols response code indicates the protocol the server is switching to as requested by a client which sent the message including the Upgrade request header."},103:{name:"103 Early Hints",mdnSlug:"Web/HTTP/Status/103",summary:"The HTTP 103 Early Hints information response status code is primarily intended to be used with the Link header to allow the user agent to start preloading resources while the server is still preparing a response."},200:{name:"200 OK",mdnSlug:"Web/HTTP/Status/200",summary:"The HTTP 200 OK success status response code indicates that the request has succeeded. A 200 response is cacheable by default."},201:{name:"201 Created",mdnSlug:"Web/HTTP/Status/201",summary:"The HTTP 201 Created success status response code indicates that the request has succeeded and has led to the creation of a resource. The new resource is effectively created before this response is sent back and the new resource is returned in the body of the message, its location being either the URL of the request, or the content of the Location header."},202:{name:"202 Accepted",mdnSlug:"Web/HTTP/Status/202",summary:"The HTTP 202 Accepted response status code indicates that the request has been accepted for processing, but the processing has not been completed; in fact, processing may not have started yet. The request might or might not eventually be acted upon, as it might be disallowed when processing actually takes place."},203:{name:"203 Non-Authoritative Information",mdnSlug:"Web/HTTP/Status/203",summary:"The HTTP 203 Non-Authoritative Information response status indicates that the request was successful but the enclosed payload has been modified by a transforming proxy from that of the origin server's 200 (OK) response ."},204:{name:"204 No Content",mdnSlug:"Web/HTTP/Status/204",summary:"The HTTP 204 No Content success status response code indicates that the request has succeeded, but that the client doesn't need to go away from its current page. A 204 response is cacheable by default. An ETag header is included in such a response."},205:{name:"205 Reset Content",mdnSlug:"Web/HTTP/Status/205",summary:"The HTTP 205 Reset Content response status tells the client to reset the document view, so for example to clear the content of a form, reset a canvas state, or to refresh the UI."},206:{name:"206 Partial Content",mdnSlug:"Web/HTTP/Status/206",summary:"The HTTP 206 Partial Content success status response code indicates that the request has succeeded and has the body contains the requested ranges of data, as described in the Range header of the request."},300:{name:"300 Multiple Choices",mdnSlug:"Web/HTTP/Status/300",summary:"The HTTP 300 Multiple Choices redirect status response code indicates that the request has more than one possible responses. The user-agent or the user should choose one of them. As there is no standardized way of choosing one of the responses, this response code is very rarely used."},301:{name:"301 Moved Permanently",mdnSlug:"Web/HTTP/Status/301",summary:"The HTTP 301 Moved Permanently redirect status response code indicates that the resource requested has been definitively moved to the URL given by the Location headers. A browser redirects to this page and search engines update their links to the resource (in 'SEO-speak', it is said that the 'link-juice' is sent to the new URL)."},302:{name:"302 Found",mdnSlug:"Web/HTTP/Status/302",summary:"The HTTP 302 Found redirect status response code indicates that the resource requested has been temporarily moved to the URL given by the Location header. A browser redirects to this page but search engines don't update their links to the resource (in 'SEO-speak', it is said that the 'link-juice' is not sent to the new URL)."},303:{name:"303 See Other",mdnSlug:"Web/HTTP/Status/303",summary:"The HTTP 303 See Other redirect status response code indicates that the redirects don't link to the newly uploaded resources, but to another page (such as a confirmation page or an upload progress page). This response code is usually sent back as a result of PUT or POST. The method used to display this redirected page is always GET."},304:{name:"304 Not Modified",mdnSlug:"Web/HTTP/Status/304",summary:"The HTTP 304 Not Modified client redirection response code indicates that there is no need to retransmit the requested resources. It is an implicit redirection to a cached resource. This happens when the request method is safe, like a GET or a HEAD request, or when the request is conditional and uses a If-None-Match or a If-Modified-Since header."},307:{name:"307 Temporary Redirect",mdnSlug:"Web/HTTP/Status/307",summary:'The method and the body of the original request are reused to perform the redirected request. In the cases where you want the method used to be changed to GET, use 303 See Other instead. This is useful when you want to give an answer to a PUT method that is not the uploaded resources, but a confirmation message (like "You successfully uploaded XYZ").'},308:{name:"308 Permanent Redirect",mdnSlug:"Web/HTTP/Status/308",summary:"The request method and the body will not be altered, whereas 301 may incorrectly sometimes be changed to a GET method."},400:{name:"400 Bad Request",mdnSlug:"Web/HTTP/Status/400",summary:"The HTTP 400 Bad Request response status code indicates that the server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing)."},401:{name:"401 Unauthorized",mdnSlug:"Web/HTTP/Status/401",summary:"The HTTP 401 Unauthorized client error status response code indicates that the request has not been applied because it lacks valid authentication credentials for the target resource."},402:{name:"402 Payment Required",mdnSlug:"Web/HTTP/Status/402",summary:"The HTTP 402 Payment Required is a nonstandard client error status response code that is reserved for future use."},403:{name:"403 Forbidden",mdnSlug:"Web/HTTP/Status/403",summary:"The HTTP 403 Forbidden client error status response code indicates that the server understood the request but refuses to authorize it."},404:{name:"404 Not Found",mdnSlug:"Web/HTTP/Status/404",summary:"The HTTP 404 Not Found client error response code indicates that the server can't find the requested resource. Links that lead to a 404 page are often called broken or dead links and can be subject to link rot."},405:{name:"405 Method Not Allowed",mdnSlug:"Web/HTTP/Status/405",summary:"The HTTP 405 Method Not Allowed response status code indicates that the request method is known by the server but is not supported by the target resource."},406:{name:"406 Not Acceptable",mdnSlug:"Web/HTTP/Status/406",summary:"The HTTP 406 Not Acceptable client error response code indicates that the server cannot produce a response matching the list of acceptable values defined in the request's proactive content negotiation headers, and that the server is unwilling to supply a default representation."},407:{name:"407 Proxy Authentication Required",mdnSlug:"Web/HTTP/Status/407",summary:"The HTTP 407 Proxy Authentication Required  client error status response code indicates that the request has not been applied because it lacks valid authentication credentials for a proxy server that is between the browser and the server that can access the requested resource."},408:{name:"408 Request Timeout",mdnSlug:"Web/HTTP/Status/408",summary:"The HTTP 408 Request Timeout response status code means that the server would like to shut down this unused connection. It is sent on an idle connection by some servers, even without any previous request by the client."},409:{name:"409 Conflict",mdnSlug:"Web/HTTP/Status/409",summary:"The HTTP 409 Conflict response status code indicates a request conflict with current state of the target resource."},410:{name:"410 Gone",mdnSlug:"Web/HTTP/Status/410",summary:"The HTTP 410 Gone client error response code indicates that access to the target resource is no longer available at the origin server and that this condition is likely to be permanent."},411:{name:"411 Length Required",mdnSlug:"Web/HTTP/Status/411",summary:"The HTTP 411 Length Required client error response code indicates that the server refuses to accept the request without a defined Content-Length header."},412:{name:"412 Precondition Failed",mdnSlug:"Web/HTTP/Status/412",summary:"The HTTP 412 Precondition Failed client error response code indicates that access to the target resource has been denied. This happens with conditional requests on methods other than GET or HEAD when the condition defined by the If-Unmodified-Since or If-None-Match headers is not fulfilled. In that case, the request, usually an upload or a modification of a resource, cannot be made and this error response is sent back."},413:{name:"413 Payload Too Large",mdnSlug:"Web/HTTP/Status/413",summary:"The HTTP 413 Payload Too Large response status code indicates that the request entity is larger than limits defined by server; the server might close the connection or return a Retry-After header field."},414:{name:"414 URI Too Long",mdnSlug:"Web/HTTP/Status/414",summary:"The HTTP 414 URI Too Long response status code indicates that the URI requested by the client is longer than the server is willing to interpret."},415:{name:"415 Unsupported Media Type",mdnSlug:"Web/HTTP/Status/415",summary:"The HTTP 415 Unsupported Media Type client error response code indicates that the server refuses to accept the request because the payload format is in an unsupported format."},416:{name:"416 Range Not Satisfiable",mdnSlug:"Web/HTTP/Status/416",summary:"The HTTP 416 Range Not Satisfiable error response code indicates that a server cannot serve the requested ranges. The most likely reason is that the document doesn't contain such ranges, or that the Range header value, though syntactically correct, doesn't make sense."},417:{name:"417 Expectation Failed",mdnSlug:"Web/HTTP/Status/417",summary:"The HTTP 417 Expectation Failed client error response code indicates that the expectation given in the request's Expect header could not be met."},418:{name:"418 I'm a teapot",mdnSlug:"Web/HTTP/Status/418",summary:"The HTTP 418 I'm a teapot client error response code indicates that the server refuses to brew coffee because it is, permanently, a teapot. A combined coffee/tea pot that is temporarily out of coffee should instead return 503. This error is a reference to Hyper Text Coffee Pot Control Protocol defined in April Fools' jokes in 1998 and 2014."},422:{name:"422 Unprocessable Entity",mdnSlug:"Web/HTTP/Status/422",summary:"The HTTP 422 Unprocessable Entity response status code indicates that the server understands the content type of the request entity, and the syntax of the request entity is correct, but it was unable to process the contained instructions."},425:{name:"425 Too Early",mdnSlug:"Web/HTTP/Status/425",summary:"The HTTP 425 Too Early response status code indicates that the server is unwilling to risk processing a request that might be replayed, which creates the potential for a replay attack."},426:{name:"426 Upgrade Required",mdnSlug:"Web/HTTP/Status/426",summary:"The HTTP 426 Upgrade Required client error response code indicates that the server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol."},428:{name:"428 Precondition Required",mdnSlug:"Web/HTTP/Status/428",summary:"The HTTP 428 Precondition Required response status code indicates that the server requires the request to be conditional."},429:{name:"429 Too Many Requests",mdnSlug:"Web/HTTP/Status/429",summary:'The HTTP 429 Too Many Requests response status code indicates the user has sent too many requests in a given amount of time ("rate limiting").'},431:{name:"431 Request Header Fields Too Large",mdnSlug:"Web/HTTP/Status/431",summary:"The HTTP 431 Request Header Fields Too Large response status code indicates that the server refuses to process the request because the request’s HTTP headers are too long."},451:{name:"451 Unavailable For Legal Reasons",mdnSlug:"Web/HTTP/Status/451",summary:"The HTTP 451 Unavailable For Legal Reasons client error response code indicates that the user requested a resource that is not available due to legal reasons, such as a web page for which a legal action has been issued."},500:{name:"500 Internal Server Error",mdnSlug:"Web/HTTP/Status/500",summary:"The HTTP 500 Internal Server Error server error response code indicates that the server encountered an unexpected condition that prevented it from fulfilling the request."},501:{name:"501 Not Implemented",mdnSlug:"Web/HTTP/Status/501",summary:"The HTTP 501 Not Implemented server error response code means that the server does not support the functionality required to fulfill the request."},502:{name:"502 Bad Gateway",mdnSlug:"Web/HTTP/Status/502",summary:"The HTTP 502 Bad Gateway server error response code indicates that the server, while acting as a gateway or proxy, received an invalid response from the upstream server."},503:{name:"503 Service Unavailable",mdnSlug:"Web/HTTP/Status/503",summary:"The HTTP 503 Service Unavailable server error response code indicates that the server is not ready to handle the request."},504:{name:"504 Gateway Timeout",mdnSlug:"Web/HTTP/Status/504",summary:"The HTTP 504 Gateway Timeout server error response code indicates that the server, while acting as a gateway or proxy, did not get a response in time from the upstream server that it needed in order to complete the request."},505:{name:"505 HTTP Version Not Supported",mdnSlug:"Web/HTTP/Status/505",summary:"The HTTP 505 HTTP Version Not Supported response status code indicates that the HTTP version used in the request is not supported by the server."},506:{name:"506 Variant Also Negotiates",mdnSlug:"Web/HTTP/Status/506",summary:"The HTTP 506 Variant Also Negotiates response status code may be given in the context of Transparent Content Negotiation (see RFC 2295). This protocol enables a client to retrieve the best variant of a given resource, where the server supports multiple variants."},507:{name:"507 Insufficient Storage",mdnSlug:"Web/HTTP/Status/507",summary:"The HTTP 507 Insufficient Storage response status code may be given in the context of the Web Distributed Authoring and Versioning (WebDAV) protocol (see RFC 4918)."},508:{name:"508 Loop Detected",mdnSlug:"Web/HTTP/Status/508",summary:"The HTTP 508 Loop Detected response status code may be given in the context of the Web Distributed Authoring and Versioning (WebDAV) protocol."},510:{name:"510 Not Extended",mdnSlug:"Web/HTTP/Status/510",summary:"The HTTP  510 Not Extended response status code is sent in the context of the HTTP Extension Framework, defined in RFC 2774."},511:{name:"511 Network Authentication Required",mdnSlug:"Web/HTTP/Status/511",summary:"The HTTP 511 Network Authentication Required response status code indicates that the client needs to authenticate to gain network access."}},Gt={1e3:{name:"Normal Closure",summary:"A normal WebSocket closure, meaning that the purpose for which the connection was established has been fulfilled."},1001:{name:"Going Away",summary:'An endpoint is "going away", such as a server going down or a browser having navigated away from a page.'},1002:{name:"Protocol Error",summary:"An endpoint terminated the connection due to a protocol error"},1003:{name:"Unsupported Data",summary:"An endpoint is terminating the connection because it has received a type of data it cannot accept (e.g., an endpoint that understands only text data MAY send this if it receives a binary message)."},1004:{name:"Reserved",summary:"This close code is not used. A specific meaning might be defined in future."},1005:{name:"No Close Code Received",summary:"This is a reserved value that must not be sent by an endpoint. It is designated for use in applications expecting a status code, to indicate that no status code was actually present."},1006:{name:"Abnormal Closure",summary:"This is a reserved value that must not be sent by an endpoint. It is designated for use in applications expecting a status code, to indicate that the connection was closed abnormally, e.g., without sending or receiving a Close control frame."},1007:{name:"Invalid Frame Payload Data",summary:"An endpoint is terminating the connection because it has received data within a message that was not consistent with the type of the message (e.g., non-UTF-8 data within a text message)."},1008:{name:"Policy Violation",summary:"An endpoint is terminating the connection because it has received a message that violates its policy. This is a generic status code that can be returned when there is no other more suitable status code (e.g., 1003 or 1009) or if there is a need to hide specific details about the policy."},1009:{name:"Message Too Large",summary:"An endpoint is terminating the connection because it has received a message that is too big for it to process."},1010:{name:"Mandatory Extension",summary:"The client is terminating the connection because it has expected the server to negotiate one or more extensions, but the server didn't return them in the response message of the WebSocket handshake.  The list of extensions that are needed SHOULD appear in the /reason/ part of the Close frame."},1011:{name:"Internal Error",summary:"The server is terminating the connection because it encountered an unexpected condition that prevented it from fulfilling the request."},1012:{name:"Service Restart",summary:"The server is terminating the connection because it is restarting."},1013:{name:"Try Again Later",summary:"The server is terminating the connection due to a temporary condition, such as being overloaded."},1014:{name:"Bad Gateway",summary:"The server was acting as a gateway or proxy, and received an invalid response from an upstream server."},1015:{name:"TLS Handshake",summary:"This is a reserved value that must not be sent by an endpoint. It is designated for use in applications expecting a status code, to indicate that the connection was closed due to a failure to perform a TLS handshake (e.g., the server certificate can't be verified)."}},Yt={accept:{mdnSlug:"Web/HTTP/Headers/Accept",name:"Accept",summary:"The Accept request HTTP header advertises which content types, expressed as MIME types, the client is able to understand."},"accept-ch":{mdnSlug:"Web/HTTP/Headers/Accept-CH",name:"Accept-CH",summary:"The Accept-CH header is set by the server to specify which Client Hints headers a client should include in subsequent requests."},"accept-ch-lifetime":{mdnSlug:"Web/HTTP/Headers/Accept-CH-Lifetime",name:"Accept-CH-Lifetime",summary:"The Accept-CH-Lifetime header is set by the server to specify the persistence of Accept-CH header value that specifies for which Client Hints headers client should include in subsequent requests."},"accept-charset":{mdnSlug:"Web/HTTP/Headers/Accept-Charset",name:"Accept-Charset",summary:"The Accept-Charset request HTTP header advertises which character encodings the client understands."},"accept-encoding":{mdnSlug:"Web/HTTP/Headers/Accept-Encoding",name:"Accept-Encoding",summary:"The Accept-Encoding request HTTP header advertises which content encoding, usually a compression algorithm, the client is able to understand."},"accept-language":{mdnSlug:"Web/HTTP/Headers/Accept-Language",name:"Accept-Language",summary:"The Accept-Language request HTTP header advertises which languages the client is able to understand, and which locale variant is preferred."},"accept-patch":{mdnSlug:"Web/HTTP/Headers/Accept-Patch",name:"Accept-Patch",summary:"The Accept-Patch response HTTP header advertises which media-type the server is able to understand."},"accept-ranges":{mdnSlug:"Web/HTTP/Headers/Accept-Ranges",name:"Accept-Ranges",summary:"The Accept-Ranges response HTTP header is a marker used by the server to advertise its support of partial requests."},"access-control-allow-credentials":{mdnSlug:"Web/HTTP/Headers/Access-Control-Allow-Credentials",name:"Access-Control-Allow-Credentials",summary:"The Access-Control-Allow-Credentials response header tells browsers whether to expose the response to frontend JavaScript code when the request's credentials mode (Request.credentials) is include."},"access-control-allow-headers":{mdnSlug:"Web/HTTP/Headers/Access-Control-Allow-Headers",name:"Access-Control-Allow-Headers",summary:"The Access-Control-Allow-Headers response header is used in response to a preflight request which includes the Access-Control-Request-Headers to indicate which HTTP headers can be used during the actual request."},"access-control-allow-methods":{mdnSlug:"Web/HTTP/Headers/Access-Control-Allow-Methods",name:"Access-Control-Allow-Methods",summary:"The Access-Control-Allow-Methods response header specifies the method or methods allowed when accessing the resource in response to a preflight request."},"access-control-allow-origin":{mdnSlug:"Web/HTTP/Headers/Access-Control-Allow-Origin",name:"Access-Control-Allow-Origin",summary:"The Access-Control-Allow-Origin response header indicates whether the response can be shared with requesting code from the given origin."},"access-control-expose-headers":{mdnSlug:"Web/HTTP/Headers/Access-Control-Expose-Headers",name:"Access-Control-Expose-Headers",summary:"The Access-Control-Expose-Headers response header indicates which headers can be exposed as part of the response by listing their names."},"access-control-max-age":{mdnSlug:"Web/HTTP/Headers/Access-Control-Max-Age",name:"Access-Control-Max-Age",summary:"The Access-Control-Max-Age response header indicates how long the results of a preflight request (that is the information contained in the Access-Control-Allow-Methods and Access-Control-Allow-Headers headers) can be cached."},"access-control-request-headers":{mdnSlug:"Web/HTTP/Headers/Access-Control-Request-Headers",name:"Access-Control-Request-Headers",summary:"The Access-Control-Request-Headers request header is used by browsers when issuing a preflight request, to let the server know which HTTP headers the client might send when the actual request is made."},"access-control-request-method":{mdnSlug:"Web/HTTP/Headers/Access-Control-Request-Method",name:"Access-Control-Request-Method",summary:"The Access-Control-Request-Method request header is used by browsers when issuing a preflight request, to let the server know which HTTP method will be used when the actual request is made."},age:{mdnSlug:"Web/HTTP/Headers/Age",name:"Age",summary:"The Age header contains the time in seconds the object has been in a proxy cache."},allow:{mdnSlug:"Web/HTTP/Headers/Allow",name:"Allow",summary:"The Allow header lists the set of methods supported by a resource."},"alt-svc":{mdnSlug:"Web/HTTP/Headers/Alt-Svc",name:"Alt-Svc",summary:"The Alt-Svc HTTP response header is used to advertise alternative services through which the same resource can be reached."},authorization:{mdnSlug:"Web/HTTP/Headers/Authorization",name:"Authorization",summary:"The HTTP Authorization request header contains the credentials to authenticate a user agent with a server, usually, but not necessarily, after the server has responded with a 401 Unauthorized status and the WWW-Authenticate header."},"cache-control":{mdnSlug:"Web/HTTP/Headers/Cache-Control",name:"Cache-Control",summary:"The Cache-Control HTTP header holds directives (instructions) for caching in both requests and responses."},"clear-site-data":{mdnSlug:"Web/HTTP/Headers/Clear-Site-Data",name:"Clear-Site-Data",summary:"The Clear-Site-Data header clears browsing data (cookies, storage, cache) associated with the requesting website."},connection:{mdnSlug:"Web/HTTP/Headers/Connection",name:"Connection",summary:"The Connection general header controls whether or not the network connection stays open after the current transaction finishes."},"content-disposition":{mdnSlug:"Web/HTTP/Headers/Content-Disposition",name:"Content-Disposition",summary:"In a regular HTTP response, the Content-Disposition response header is a header indicating if the content is expected to be displayed inline in the browser, that is, as a Web page or as part of a Web page, or as an attachment, that is downloaded and saved locally."},"content-encoding":{mdnSlug:"Web/HTTP/Headers/Content-Encoding",name:"Content-Encoding",summary:"The Content-Encoding entity header is used to compress the media-type."},"content-language":{mdnSlug:"Web/HTTP/Headers/Content-Language",name:"Content-Language",summary:"The Content-Language entity header is used to describe the language(s) intended for the audience, so that it allows a user to differentiate according to the users' own preferred language."},"content-length":{mdnSlug:"Web/HTTP/Headers/Content-Length",name:"Content-Length",summary:"The Content-Length entity header indicates the size of the entity-body, in bytes, sent to the recipient."},"content-location":{mdnSlug:"Web/HTTP/Headers/Content-Location",name:"Content-Location",summary:"The Content-Location header indicates an alternate location for the returned data."},"content-range":{mdnSlug:"Web/HTTP/Headers/Content-Range",name:"Content-Range",summary:"The Content-Range response HTTP header indicates where in a full body message a partial message belongs."},"content-security-policy":{mdnSlug:"Web/HTTP/Headers/Content-Security-Policy",name:"Content-Security-Policy",summary:"The HTTP Content-Security-Policy response header allows web site administrators to control resources the user agent is allowed to load for a given page."},"content-security-policy-report-only":{mdnSlug:"Web/HTTP/Headers/Content-Security-Policy-Report-Only",name:"Content-Security-Policy-Report-Only",summary:"The HTTP Content-Security-Policy-Report-Only response header allows web developers to experiment with policies by monitoring (but not enforcing) their effects."},"content-type":{mdnSlug:"Web/HTTP/Headers/Content-Type",name:"Content-Type",summary:"The Content-Type entity header is used to indicate the media type of the resource."},cookie:{mdnSlug:"Web/HTTP/Headers/Cookie",name:"Cookie",summary:"The Cookie HTTP request header contains stored HTTP cookies previously sent by the server with the Set-Cookie header."},cookie2:{mdnSlug:"Web/HTTP/Headers/Cookie2",name:"Cookie2",summary:'The obsolete Cookie2 HTTP request header used to advise the server that the user agent understands "new-style" cookies, but nowadays user agents will use the Cookie header instead, not this one.'},"cross-origin-embedder-policy":{mdnSlug:"Web/HTTP/Headers/Cross-Origin-Embedder-Policy",name:"Cross-Origin-Embedder-Policy",summary:"The HTTP Cross-Origin-Embedder-Policy (COEP) response header prevents a document from loading any cross-origin resources that don't explicitly grant the document permission (using CORP or CORS)."},"cross-origin-opener-policy":{mdnSlug:"Web/HTTP/Headers/Cross-Origin-Opener-Policy",name:"Cross-Origin-Opener-Policy",summary:"The HTTP Cross-Origin-Opener-Policy (COOP) response header allows you to ensure a top-level document does not share a browsing context group with cross-origin documents."},"cross-origin-resource-policy":{mdnSlug:"Web/HTTP/Headers/Cross-Origin-Resource-Policy",name:"Cross-Origin-Resource-Policy",summary:"The HTTP Cross-Origin-Resource-Policy response header conveys a desire that the browser blocks no-cors cross-origin/cross-site requests to the given resource."},dnt:{mdnSlug:"Web/HTTP/Headers/DNT",name:"DNT",summary:"The DNT (Do Not Track) request header indicates the user's tracking preference."},dpr:{mdnSlug:"Web/HTTP/Headers/DPR",name:"DPR",summary:"The DPR header is a Client Hints headers which represents the client device pixel ratio (DPR), which is the the number of physical device pixels corresponding to every CSS pixel."},date:{mdnSlug:"Web/HTTP/Headers/Date",name:"Date",summary:"The Date general HTTP header contains the date and time at which the message was originated."},"device-memory":{mdnSlug:"Web/HTTP/Headers/Device-Memory",name:"Device-Memory",summary:"The Device-Memory header is a Device Memory API header that works like Client Hints header which represents the approximate amount of RAM client device has."},digest:{mdnSlug:"Web/HTTP/Headers/Digest",name:"Digest",summary:"The Digest response HTTP header provides a digest of the requested resource."},etag:{mdnSlug:"Web/HTTP/Headers/ETag",name:"ETag",summary:"The ETag HTTP response header is an identifier for a specific version of a resource."},"early-data":{mdnSlug:"Web/HTTP/Headers/Early-Data",name:"Early-Data",summary:"The Early-Data header is set by an intermediary to indicate that the request has been conveyed in TLS early data, and also indicates that the intermediary understands the 425 (Too Early) status code."},expect:{mdnSlug:"Web/HTTP/Headers/Expect",name:"Expect",summary:"The Expect HTTP request header indicates expectations that need to be fulfilled by the server in order to properly handle the request."},"expect-ct":{mdnSlug:"Web/HTTP/Headers/Expect-CT",name:"Expect-CT",summary:"The Expect-CT header lets sites opt in to reporting and/or enforcement of Certificate Transparency requirements, to prevent the use of misissued certificates for that site from going unnoticed."},expires:{mdnSlug:"Web/HTTP/Headers/Expires",name:"Expires",summary:"The Expires header contains the date/time after which the response is considered stale."},"feature-policy":{mdnSlug:"Web/HTTP/Headers/Feature-Policy",name:"Feature-Policy",summary:"The HTTP Feature-Policy header provides a mechanism to allow and deny the use of browser features in its own frame, and in content within any <iframe> elements in the document."},forwarded:{mdnSlug:"Web/HTTP/Headers/Forwarded",name:"Forwarded",summary:"The Forwarded header contains information from the reverse proxy servers that is altered or lost when a proxy is involved in the path of the request."},from:{mdnSlug:"Web/HTTP/Headers/From",name:"From",summary:"The From request header contains an Internet email address for a human user who controls the requesting user agent."},host:{mdnSlug:"Web/HTTP/Headers/Host",name:"Host",summary:"The Host request header specifies the host and port number of the server to which the request is being sent."},"if-match":{mdnSlug:"Web/HTTP/Headers/If-Match",name:"If-Match",summary:"The If-Match HTTP request header makes the request conditional."},"if-modified-since":{mdnSlug:"Web/HTTP/Headers/If-Modified-Since",name:"If-Modified-Since",summary:"The If-Modified-Since request HTTP header makes the request conditional: the server will send back the requested resource, with a 200 status, only if it has been last modified after the given date."},"if-none-match":{mdnSlug:"Web/HTTP/Headers/If-None-Match",name:"If-None-Match",summary:"The If-None-Match HTTP request header makes the request conditional."},"if-range":{mdnSlug:"Web/HTTP/Headers/If-Range",name:"If-Range",summary:"The If-Range HTTP request header makes a range request conditional: if the condition is fulfilled, the range request will be issued and the server sends back a 206 Partial Content answer with the appropriate body."},"if-unmodified-since":{mdnSlug:"Web/HTTP/Headers/If-Unmodified-Since",name:"If-Unmodified-Since",summary:"The If-Unmodified-Since request HTTP header makes the request conditional: the server will send back the requested resource, or accept it in the case of a POST or another non-safe method, only if it has not been last modified after the given date."},"keep-alive":{mdnSlug:"Web/HTTP/Headers/Keep-Alive",name:"Keep-Alive",summary:"The Keep-Alive general header allows the sender to hint about how the connection may be used to set a timeout and a maximum amount of requests."},"large-allocation":{mdnSlug:"Web/HTTP/Headers/Large-Allocation",name:"Large-Allocation",summary:"The non-standard Large-Allocation response header tells the browser that the page being loaded is going to want to perform a large allocation."},"last-modified":{mdnSlug:"Web/HTTP/Headers/Last-Modified",name:"Last-Modified",summary:"The Last-Modified response HTTP header contains the date and time at which the origin server believes the resource was last modified."},link:{mdnSlug:"Web/HTTP/Headers/Link",name:"Link",summary:"The HTTP Link entity-header field provides a means for serialising one or more links in HTTP headers."},location:{mdnSlug:"Web/HTTP/Headers/Location",name:"Location",summary:"The Location response header indicates the URL to redirect a page to."},nel:{mdnSlug:"Web/HTTP/Headers/NEL",name:"NEL",summary:"The HTTP NEL response header is used to configure network request logging."},origin:{mdnSlug:"Web/HTTP/Headers/Origin",name:"Origin",summary:"The Origin request header indicates where a fetch originates from."},pragma:{mdnSlug:"Web/HTTP/Headers/Pragma",name:"Pragma",summary:"The Pragma HTTP/1.0 general header is an implementation-specific header that may have various effects along the request-response chain."},"proxy-authenticate":{mdnSlug:"Web/HTTP/Headers/Proxy-Authenticate",name:"Proxy-Authenticate",summary:"The HTTP Proxy-Authenticate response header defines the authentication method that should be used to gain access to a resource behind a proxy server."},"proxy-authorization":{mdnSlug:"Web/HTTP/Headers/Proxy-Authorization",name:"Proxy-Authorization",summary:"The HTTP Proxy-Authorization request header contains the credentials to authenticate a user agent to a proxy server, usually after the server has responded with a 407 Proxy Authentication Required status and the Proxy-Authenticate header."},"public-key-pins":{mdnSlug:"Web/HTTP/Headers/Public-Key-Pins",name:"Public-Key-Pins",summary:"The HTTP Public-Key-Pins response header used to associate a specific cryptographic public key with a certain web server to decrease the risk of MITM attacks with forged certificates, however, it has been removed from modern browsers and is no longer supported."},"public-key-pins-report-only":{mdnSlug:"Web/HTTP/Headers/Public-Key-Pins-Report-Only",name:"Public-Key-Pins-Report-Only",summary:"The HTTP Public-Key-Pins-Report-Only response header was used to send reports of pinning violation to the report-uri specified in the header but, unlike Public-Key-Pins still allows browsers to connect to the server if the pinning is violated."},range:{mdnSlug:"Web/HTTP/Headers/Range",name:"Range",summary:"The Range HTTP request header indicates the part of a document that the server should return."},referer:{mdnSlug:"Web/HTTP/Headers/Referer",name:"Referer",summary:"The Referer request header contains the address of the page making the request."},"referrer-policy":{mdnSlug:"Web/HTTP/Headers/Referrer-Policy",name:"Referrer-Policy",summary:"The Referrer-Policy HTTP header controls how much referrer information (sent via the Referer header) should be included with requests."},"retry-after":{mdnSlug:"Web/HTTP/Headers/Retry-After",name:"Retry-After",summary:"The Retry-After response HTTP header indicates how long the user agent should wait before making a follow-up request."},"save-data":{mdnSlug:"Web/HTTP/Headers/Save-Data",name:"Save-Data",summary:"The Save-Data header field is a boolean which, in requests, indicates the client's preference for reduced data usage."},"sec-fetch-dest":{mdnSlug:"Web/HTTP/Headers/Sec-Fetch-Dest",name:"Sec-Fetch-Dest",summary:"The Sec-Fetch-Dest fetch metadata header indicates the request's destination, that is how the fetched data will be used."},"sec-fetch-mode":{mdnSlug:"Web/HTTP/Headers/Sec-Fetch-Mode",name:"Sec-Fetch-Mode",summary:"The Sec-Fetch-Mode fetch metadata header indicates the request's mode."},"sec-fetch-site":{mdnSlug:"Web/HTTP/Headers/Sec-Fetch-Site",name:"Sec-Fetch-Site",summary:"The Sec-Fetch-Site fetch metadata header indicates the relationship between a request initiator's origin and the origin of the resource."},"sec-fetch-user":{mdnSlug:"Web/HTTP/Headers/Sec-Fetch-User",name:"Sec-Fetch-User",summary:"The Sec-Fetch-User fetch metadata header indicates whether or not a navigation request was triggered by a user activation."},"sec-websocket-accept":{mdnSlug:"Web/HTTP/Headers/Sec-WebSocket-Accept",name:"Sec-WebSocket-Accept",summary:"The Sec-WebSocket-Accept header is used in the websocket opening handshake."},server:{mdnSlug:"Web/HTTP/Headers/Server",name:"Server",summary:"The Server header describes the software used by the origin server that handled the request — that is, the server that generated the response."},"server-timing":{mdnSlug:"Web/HTTP/Headers/Server-Timing",name:"Server-Timing",summary:"The Server-Timing header communicates one or more metrics and descriptions for a given request-response cycle."},"set-cookie":{mdnSlug:"Web/HTTP/Headers/Set-Cookie",name:"Set-Cookie",summary:"The Set-Cookie HTTP response header is used to send a cookie from the server to the user agent, so the user agent can send it back to the server later."},"set-cookie2":{mdnSlug:"Web/HTTP/Headers/Set-Cookie2",name:"Set-Cookie2",summary:"The obsolete Set-Cookie2 HTTP response header used to send cookies from the server to the user agent, but has been deprecated by the specification."},sourcemap:{mdnSlug:"Web/HTTP/Headers/SourceMap",name:"SourceMap",summary:"The SourceMap HTTP response header links generated code to a source map, enabling the browser to reconstruct the original source and present the reconstructed original in the debugger."},"strict-transport-security":{mdnSlug:"Web/HTTP/Headers/Strict-Transport-Security",name:"Strict-Transport-Security",summary:"The HTTP Strict-Transport-Security response header (often abbreviated as HSTS) lets a web site tell browsers that it should only be accessed using HTTPS, instead of using HTTP."},te:{mdnSlug:"Web/HTTP/Headers/TE",name:"TE",summary:"The TE request header specifies the transfer encodings the user agent is willing to accept."},"timing-allow-origin":{mdnSlug:"Web/HTTP/Headers/Timing-Allow-Origin",name:"Timing-Allow-Origin",summary:"The Timing-Allow-Origin response header specifies origins that are allowed to see values of attributes retrieved via features of the Resource Timing API, which would otherwise be reported as zero due to cross-origin restrictions."},tk:{mdnSlug:"Web/HTTP/Headers/Tk",name:"Tk",summary:"The Tk response header indicates the tracking status that applied to the corresponding request."},trailer:{mdnSlug:"Web/HTTP/Headers/Trailer",name:"Trailer",summary:"The Trailer response header allows the sender to include additional fields at the end of chunked messages in order to supply metadata that might be dynamically generated while the message body is sent, such as a message integrity check, digital signature, or post-processing status."},"transfer-encoding":{mdnSlug:"Web/HTTP/Headers/Transfer-Encoding",name:"Transfer-Encoding",summary:"The Transfer-Encoding header specifies the form of encoding used to safely transfer the payload body to the user."},"upgrade-insecure-requests":{mdnSlug:"Web/HTTP/Headers/Upgrade-Insecure-Requests",name:"Upgrade-Insecure-Requests",summary:"The HTTP Upgrade-Insecure-Requests request header sends a signal to the server expressing the client’s preference for an encrypted and authenticated response, and that it can successfully handle the upgrade-insecure-requests CSP directive."},"user-agent":{mdnSlug:"Web/HTTP/Headers/User-Agent",name:"User-Agent",summary:"The User-Agent request header is a characteristic string that lets servers and network peers identify the application, operating system, vendor, and/or version of the requesting user agent."},vary:{mdnSlug:"Web/HTTP/Headers/Vary",name:"Vary",summary:"The Vary HTTP response header determines how to match future request headers to decide whether a cached response can be used rather than requesting a fresh one from the origin server."},via:{mdnSlug:"Web/HTTP/Headers/Via",name:"Via",summary:"The Via general header is added by proxies, both forward and reverse proxies, and can appear in the request headers and the response headers."},"www-authenticate":{mdnSlug:"Web/HTTP/Headers/WWW-Authenticate",name:"WWW-Authenticate",summary:"The HTTP WWW-Authenticate response header defines the authentication method that should be used to gain access to a resource."},"want-digest":{mdnSlug:"Web/HTTP/Headers/Want-Digest",name:"Want-Digest",summary:"The Want-Digest HTTP header is primarily used in a HTTP request, to ask the responder to provide a digest of the requested resource using the Digest response header."},warning:{mdnSlug:"Web/HTTP/Headers/Warning",name:"Warning",summary:"The Warning general HTTP header contains information about possible problems with the status of the message."},"x-content-type-options":{mdnSlug:"Web/HTTP/Headers/X-Content-Type-Options",name:"X-Content-Type-Options",summary:"The X-Content-Type-Options response HTTP header is a marker used by the server to indicate that the MIME types advertised in the Content-Type headers should not be changed and be followed."},"x-dns-prefetch-control":{mdnSlug:"Web/HTTP/Headers/X-DNS-Prefetch-Control",name:"X-DNS-Prefetch-Control",summary:"The X-DNS-Prefetch-Control HTTP response header controls DNS prefetching, a feature by which browsers proactively perform domain name resolution on both links that the user may choose to follow as well as URLs for items referenced by the document, including images, CSS, JavaScript, and so forth."},"x-forwarded-for":{mdnSlug:"Web/HTTP/Headers/X-Forwarded-For",name:"X-Forwarded-For",summary:"The X-Forwarded-For (XFF) header is a de-facto standard header for identifying the originating IP address of a client connecting to a web server through an HTTP proxy or a load balancer."},"x-forwarded-host":{mdnSlug:"Web/HTTP/Headers/X-Forwarded-Host",name:"X-Forwarded-Host",summary:"The X-Forwarded-Host (XFH) header is a de-facto standard header for identifying the original host requested by the client in the Host HTTP request header."},"x-forwarded-proto":{mdnSlug:"Web/HTTP/Headers/X-Forwarded-Proto",name:"X-Forwarded-Proto",summary:"The X-Forwarded-Proto (XFP) header is a de-facto standard header for identifying the protocol (HTTP or HTTPS) that a client used to connect to your proxy or load balancer."},"x-frame-options":{mdnSlug:"Web/HTTP/Headers/X-Frame-Options",name:"X-Frame-Options",summary:"The X-Frame-Options HTTP response header can be used to indicate whether or not a browser should be allowed to render a page in a <frame>, <iframe>, <embed> or <object>."},"x-xss-protection":{mdnSlug:"Web/HTTP/Headers/X-XSS-Protection",name:"X-XSS-Protection",summary:"The HTTP X-XSS-Protection response header is a feature of Internet Explorer, Chrome and Safari that stops pages from loading when they detect reflected cross-site scripting (XSS) attacks."}},Xt={connect:{mdnSlug:"Web/HTTP/Methods/CONNECT",name:"CONNECT",summary:"The HTTP CONNECT method starts two-way communications with the requested resource."},delete:{mdnSlug:"Web/HTTP/Methods/DELETE",name:"DELETE",summary:"The HTTP DELETE request method deletes the specified resource."},get:{mdnSlug:"Web/HTTP/Methods/GET",name:"GET",summary:"The HTTP GET method requests a representation of the specified resource."},head:{mdnSlug:"Web/HTTP/Methods/HEAD",name:"HEAD",summary:"The HTTP HEAD method requests the headers that would be returned if the HEAD request's URL was instead requested with the HTTP GET method."},options:{mdnSlug:"Web/HTTP/Methods/OPTIONS",name:"OPTIONS",summary:"The HTTP OPTIONS method requests permitted communication options for a given URL or server."},patch:{mdnSlug:"Web/HTTP/Methods/PATCH",name:"PATCH",summary:"The HTTP PATCH request method applies partial modifications to a resource."},post:{mdnSlug:"Web/HTTP/Methods/POST",name:"POST",summary:"The HTTP POST method sends data to the server."},put:{mdnSlug:"Web/HTTP/Methods/PUT",name:"PUT",summary:"The HTTP PUT request method creates a new resource or replaces a representation of the target resource with the request payload."},trace:{mdnSlug:"Web/HTTP/Methods/TRACE",name:"TRACE",summary:"The HTTP TRACE method performs a message loop-back test along the path to the target resource, providing a useful debugging mechanism."}};function Zt(e,t){const n=e[t];if(n)return{url:`https://developer.mozilla.org/en-US/docs/${n.mdnSlug}`,name:n.name,summary:n.summary}}function en(e){return Zt(Yt,e.toLowerCase())}function tn(e){const t=Zt(Qt,e.toString());if(t)return t.message=t.name.split(" ").slice(1).join(" "),t}const nn=Object.values(Xt).map(({name:e})=>e.toUpperCase());function rn(e){if(!e)return"";const t=Qt[e.toString()];return t?t.name.slice(4):""}function on(e,t){var n;let r=e.filter(([e])=>":"!==e[0]);!un(r,"host")&&un(e,":authority")&&r.unshift(["Host",un(e,":authority")]);const o=pn(r,"cookie");return o.length>1&&(r=r.filter(([e])=>"cookie"!==e.toLowerCase()),r.push(["Cookie",o.join("; ")])),"GET"===t||"HEAD"===t||un(r,"content-length")||(null===(n=un(r,"transfer-encoding"))||void 0===n?void 0:n.includes("chunked"))||r.push(["Transfer-Encoding","chunked"]),r}const sn="^[!#$%&'*+\\-.^_`\\|~A-Za-z0-9]+$",an=new RegExp(sn),ln=e=>Object.entries(e||{}).reduce((e,[t,n])=>(Array.isArray(n)?e=e.concat(n.map(e=>[t,e])):e.push([t,n||""]),e),[]),cn=e=>e.reduce((e,[t,n])=>{const r=t.toLowerCase(),o=e[r];return void 0===o?e[r]=n:"string"==typeof o?e[r]=[o,n]:o.push(n),e},{}),dn=e=>e.filter(([e])=>!e.startsWith(":"));function un(e,t){if(Array.isArray(e)){const n=y.findLast(e,([e])=>e.toLowerCase()===t);return null==n?void 0:n[1]}{const n=null==e?void 0:e[t];return Array.isArray(n)?n[n.length-1]:n}}const pn=(e,t)=>{if(Array.isArray(e))return t=t.toLowerCase(),e.filter(([e])=>e.toLowerCase()===t).map(([e,t])=>t);{const n=e[t];return Array.isArray(n)?n:void 0!==n?[n]:[]}},hn=(e,t,n,r={})=>{const o=t.toLowerCase();if(Array.isArray(e)){const s=y.findLast(e,([e])=>e.toLowerCase()===o);s?s[1]=n:r.prepend?e.unshift([t,n]):e.push([t,n])}else e[Object.keys(e).find(e=>e.toLowerCase()===o)||t]=n},mn=(e,t)=>{const n=t.toLowerCase();if(Array.isArray(e)){const t=y.findLastIndex(e,([e])=>e.toLowerCase()===n);-1!==t&&e.splice(t,1)}else delete e[Object.keys(e).find(e=>e.toLowerCase()===n)||t]},gn=(e,t)=>(e=y.cloneDeep(e),Object.entries(t).forEach(([t,n])=>hn(e,t,n)),e);function fn(e,t=","){return Array.isArray(e)?y.flatMap(e,e=>e.split(t).map(e=>e.trim())):e?e.split(t).map(e=>e.trim()):[]}var yn=n(19381),vn=n(78559);function bn(e){if(e.length<2)return!1;const t=e[0]>>>3,n=7&e[0];return t>=1&&t<=3&&[0,1,2,5].includes(n)}const xn=yn.Ay;var wn=n(13815);const En=/^\s*[\[\{tfn"\d-]/,Cn=/^\u001E\s*[\[\{]/,Tn=/^\s*\{/,Sn=/\}\s*\u001E$/,Pn=/[\]\}](\r?\n)+$/,kn=/[\]\}](\r?\n)+[\{\[]/,Rn=e=>{if(!e||e.length<2)return!1;const t=e.subarray(0,6).toString("utf8");return En.test(t)},On=e=>{if(!e||e.length<3)return!1;const t=e.subarray(0,6).toString("utf8"),n=e.subarray(-6).toString("utf8");return!!Cn.test(t)||!(!Tn.test(t)||!Sn.test(n))||!!(En.test(t)&&Pn.test(n)&&kn.test(e.subarray(0,16384).toString("utf8")))},Hn=["","\n","\r"];function An(e,t={formatRecords:!1}){const n=(0,wn.z1)(e);let r,o="",s=0;const a="  ";let i=!1,l=null,c=!1;for(;(r=n.scan())!==wn.a6.EOF;){const d=n.getTokenOffset(),u=n.getTokenLength(),p=e.slice(d,d+u);if(t.formatRecords&&0===s&&(c=!0),c&&""===p[0])n.setPosition(d+1);else if(r!==wn.a6.Trivia&&r!==wn.a6.LineBreakTrivia){switch(c&&(c=!1,o&&"\n"!==o[o.length-1]&&!$n(r)&&(o+="\n")),i&&(o+=a.repeat(s),i=!1),r){case wn.a6.OpenBraceToken:case wn.a6.OpenBracketToken:o+=p,s++;const e=In(n);e===wn.a6.CloseBraceToken||e===wn.a6.CloseBracketToken||e===wn.a6.EOF||e===wn.a6.LineCommentTrivia||(o+="\n",i=!0);break;case wn.a6.CloseBraceToken:case wn.a6.CloseBracketToken:const t=l===wn.a6.OpenBraceToken||l===wn.a6.OpenBracketToken;let c=0===s;s=Math.max(0,s-1),t||(o.endsWith("\n")||(o+="\n"),o+=a.repeat(s)),o+=p,c&&(o+="\n");break;case wn.a6.CommaToken:o+=p;const d=In(n);d!==wn.a6.LineCommentTrivia&&d!==wn.a6.BlockCommentTrivia&&d!==wn.a6.CloseBraceToken&&d!==wn.a6.CloseBracketToken&&d!==wn.a6.EOF&&d!==wn.a6.CommaToken&&(o+="\n",i=!0);break;case wn.a6.ColonToken:o+=p,o+=" ";break;case wn.a6.LineCommentTrivia:if((l===wn.a6.OpenBraceToken||l===wn.a6.OpenBracketToken)&&!o.endsWith("\n")&&(o+="\n",i=!0),i)o+=a.repeat(s),i=!1,o+=p;else{const e=o.trimEnd();o.length>e.length?o=e+p:o+=" "+p}const u=In(n);u!==wn.a6.CloseBraceToken&&u!==wn.a6.CloseBracketToken&&u!==wn.a6.EOF&&(o+="\n",i=!0);break;case wn.a6.BlockCommentTrivia:const h=o[o.length-1];"\n"===h||" "===h&&"\n"===o[o.length-2]?o+=p:o+=" "+p;const m=In(n);m!==wn.a6.CommaToken&&m!==wn.a6.CloseBraceToken&&m!==wn.a6.CloseBracketToken&&m!==wn.a6.EOF&&(o+="\n",i=!0);break;default:$n(l)&&$n(r)&&!o.endsWith("\n")&&(o+="\n",o+=a.repeat(s)),o+=p}l=r}}return o}function $n(e){return e===wn.a6.StringLiteral||e===wn.a6.NumericLiteral||e===wn.a6.TrueKeyword||e===wn.a6.FalseKeyword||e===wn.a6.NullKeyword||e===wn.a6.CloseBraceToken||e===wn.a6.CloseBracketToken}function In(e){const t=e.getPosition();let n=e.scan();for(;n===wn.a6.Trivia||n===wn.a6.LineBreakTrivia;)n=e.scan();return e.setPosition(t),n}var qn=n(48287).Buffer;const jn=e=>{const t=(e||"").split(";")[0];let[n,r]=t.split(/\/(.+)/);if(!r)return n;if(Dn[r]&&(r=`${r}+${Dn[r]}`),Fn[n+"/"+r])return n+"/"+r;const o=r.split("+").map(e=>n+"/"+e);return y.find(o,e=>!!Fn[e])||y.last(o)},Dn={grpc:"proto"},Mn=["text","json","xml","html","css","javascript"],Fn={"application/json":"json","text/json":"json","application/xml":"xml","text/xml":"xml","application/rss":"xml","application/javascript":"javascript","application/x-javascript":"javascript","application/ecmascript":"javascript","text/javascript":"javascript","text/plain":"text","text/csv":"text","application/x-www-form-urlencoded":"url-encoded","text/markdown":"markdown","text/x-markdown":"markdown","text/x-yaml":"yaml","text/yaml":"yaml","application/yaml":"yaml","image/png":"image","image/gif":"image","image/jpg":"image","image/jpeg":"image","image/svg":"image","image/tiff":"image","image/webp":"image","image/avif":"image","image/x-icon":"image","image/vnd.microsoft.icon":"image","text/css":"css","text/html":"html","application/xhtml":"html","application/protobuf":"protobuf","application/x-protobuf":"protobuf","application/vnd.google.protobuf":"protobuf","application/x-google-protobuf":"protobuf","application/proto":"protobuf","application/x-protobuffer":"protobuf","application/grpc+proto":"grpc-proto","application/grpc+protobuf":"grpc-proto","application/grpc-proto":"grpc-proto","application/grpc-protobuf":"grpc-proto","application/jsonlines":"json-records","application/json-lines":"json-records","application/x-jsonlines":"json-records","application/jsonl":"json-records","application/x-ndjson":"json-records","application/json-seq":"json-records","application/octet-stream":"raw"};function Bn(e){const t=jn(e);return Fn[t]}function Ln(e){if(Mn.includes(e))return e}function Nn(e){const t=jn(e);return Ln(Fn[t])}function Un(e){return"raw"===e?"Hex":"json-records"===e?"JSON Records":"json"===e?"JSON":"css"===e?"CSS":"url-encoded"===e?"URL-Encoded":"grpc-proto"===e?"gRPC":y.capitalize(e)}function Wn(e){return y.findKey(Fn,t=>t===e)}function zn(e){return e>=65&&e<=90||e>=97&&e<=122||e>=48&&e<=57||61===e}function _n(e){return 43===e||47===e||zn(e)}function Vn(e){return 45===e||95===e||zn(e)}function Kn(e,t,n,r){let o,s=e,a=new Set([e]);n&&qn.isBuffer(n)?o=n:n&&(o=n.decodedData);const i="raw"===e||"text"===e||"html"===e,l=function(e){if(!e||0===e.length)return null;let t=0;e.length>=3&&239===e[0]&&187===e[1]&&191===e[2]&&(t=3);const n=e.subarray(t,t+1024).find(e=>32!==e&&9!==e&&10!==e&&13!==e);return void 0!==n?String.fromCharCode(n):null}(o);return!a.has("json-records")&&On(o)&&(a.add("json-records"),s="json-records",i&&(s="json-records")),!a.has("json-records")&&Rn(o)&&(a.add("json"),i&&(s="json")),o&&!a.has("protobuf")&&!a.has("grpc-proto")&&bn(o)&&o.length<1e5&&(e=>{try{return xn(e),!0}catch(e){return!1}})(o)&&(a.add("protobuf"),i&&o.length<1e5&&(s="protobuf")),o&&!a.has("grpc-proto")&&((e,t)=>{if(e.byteLength<7)return!1;const n=e.readUInt8(),r=e.readUInt32BE(1),o=e.subarray(5,5+r);return r>=2&&o.length==r&&(0==n&&bn(o)||1==n&&Object.keys(t).includes("grpc-encoding"))})(o,null!=r?r:{})&&o.length<1e5&&((e,t)=>{try{const n=((e,t)=>{var n;const r=(null!==(n=un(t,"grpc-encoding"))&&void 0!==n?n:"identity").toLocaleLowerCase(),o="gzip"==r?vn.gunzipSync:"deflate"==r?vn.inflateSync:void 0,s=[];let a=0,i=0;for(;e.length>0;){const t=`gRPC message #${i} @${a}: `,n=e.readUInt8(),l=e.readUInt32BE(1);let c=e.subarray(5,5+l);if(c.length!=l)throw new Error(`${t}length of message is corrupted`);switch(n){case 0:break;case 1:if(!o)throw new Error(`${t}not expected to be compressed`);try{c=o(c)}catch(e){throw new Error(`${t}failed decompression (from ${r})`)}break;default:throw new Error(`${t}unsupported compression flag (0x${n.toString(16).padStart(2,"0")})`)}s.push(c),e=e.subarray(5+l),a+=5+l,i++}return s})(e,t);return n.forEach(e=>xn(e)),!0}catch(e){return!1}})(o,null!=r?r:{})&&(a.add("grpc-proto"),i&&o.length<1e5&&(s="grpc-proto")),t&&t.startsWith("image/svg")&&a.add("xml"),"<"===l?a.has("xml")||(a.add("xml"),"html"!==e&&i&&(s="xml"),"image"!==e&&a.add("html")):"html"===s&&(s="text"),o&&!a.has("base64")&&o.length>=8&&o.length<1e5&&(o.every(_n)||o.every(Vn))&&a.add("base64"),a.add("text"),a.add("raw"),{preferredContentType:s,availableContentTypes:Array.from(a)}}const Jn=e=>{var t;return((null===(t=un(e.headers,"accept"))||void 0===t?void 0:t.split(","))||[]).map(e=>jn(e))},Qn=e=>jn(un(e.headers,"content-type")),Gn=e=>y.includes(["POST","PATCH","PUT","DELETE"],e.request.method),Yn=["application/json","application/xml","application/rss","text/plain","text/xml","text/json","multipart/form-data","application/x-www-form-urlencoded","application/x-protobuf"];function Xn(e){const t=er(e);return`${y.startCase(y.findKey(Zn,e=>e===t))}: ${{mutative:"a request that might affect the server state (unlike a GET request)",incomplete:"an incomplete request",aborted:"an aborted request",image:"a request for an image",js:"a request for JavaScript",css:"a request for CSS",html:"a request for HTML",font:"a request for a font file",data:"an API request",websocket:"a WebSocket stream","rtc-data":"a WebRTC data stream","rtc-media":"a WebRTC media stream",unknown:"an unknown type of request"}[e]}`}const Zn={black:"#000",grey:"#888",red:"#ce3939",lightGreen:"#4caf7d",brightGreen:"#409309",orange:"#ff8c38",yellow:"#e9f05b",lightBlue:"#2fb4e0",darkBlue:"#5a80cc",purple:"#6e40aa",pink:"#dd3a96"};function er(e){switch("string"==typeof e?e:e.category){case"incomplete":case"aborted":return Zn.black;case"mutative":return Zn.red;case"data":case"rtc-data":return Zn.purple;case"websocket":return Zn.lightBlue;case"image":return Zn.lightGreen;case"font":case"rtc-media":return Zn.brightGreen;case"js":return Zn.orange;case"css":return Zn.yellow;case"html":return Zn.darkBlue;case"unknown":return Zn.grey}}function tr(e,t){return!e||"aborted"===e||e<100||e>=600?t.mainColor:e>=500?Zn.red:e>=400?Zn.orange:e>=300?Zn.darkBlue:e>=200?Zn.lightGreen:101===e?Zn.lightBlue:e>=100?Zn.grey:Zn.black}function nr(e,t){return e&&"aborted"!==e?1e3===e||1001===e?Zn.lightGreen:e>=1002&&e<=3e3?Zn.red:e>=3e3?Zn.orange:Zn.black:t.mainColor}function rr(e){return"GET"===e?Zn.lightGreen:"POST"===e?Zn.orange:"DELETE"===e?Zn.red:"PUT"===e?Zn.purple:"PATCH"===e?Zn.pink:"HEAD"===e?Zn.darkBlue:"OPTIONS"===e?Zn.lightBlue:Zn.grey}var or,sr,ar,ir,lr,cr,dr,ur=function(e,t,n,r){if("a"===n&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(e):r?r.value:t.get(e)},pr=function(e,t,n,r,o){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?o.call(e,n):o?o.value=n:t.set(e,n),n};class hr{constructor(){or.add(this),sr.set(this,void 0),ar.set(this,void 0),ir.set(this,!1),lr.set(this,!1)}has(e){var t;return ur(this,or,"m",dr).call(this,"has",e),ur(this,or,"m",cr).call(this,e).reportObserved(),!!(null===(t=ur(this,sr,"f"))||void 0===t?void 0:t.has(e))}get(e){return ur(this,or,"m",dr).call(this,"get",e),ur(this,or,"m",cr).call(this,e).reportObserved(),ur(this,sr,"f")&&ur(this,sr,"f").get(e)}set(e,t){var n;ur(this,ir,"f")?ur(this,or,"m",dr).call(this,"set",e):(null===(n=ur(this,sr,"f"))||void 0===n?void 0:n.has(e))?f("ObservableCache.set called with an already-set key",{key:e.toString()}):(ur(this,sr,"f")||pr(this,sr,new Map,"f"),ur(this,sr,"f").set(e,t),ur(this,or,"m",cr).call(this,e).reportChanged())}clear(){ur(this,ir,"f")?f("Duplicate call to ObservableCache.clear()"):(pr(this,ir,!0,"f"),pr(this,sr,void 0,"f"),pr(this,ar,void 0,"f"))}}sr=new WeakMap,ar=new WeakMap,ir=new WeakMap,lr=new WeakMap,or=new WeakSet,cr=function(e){ur(this,ar,"f")||pr(this,ar,new Map,"f");let t=ur(this,ar,"f").get(e);return t||(t=(0,w.createAtom)(`ObservableCache.${e.toString()}`),ur(this,ar,"f").set(e,t)),t},dr=function(e,t){ur(this,ir,"f")&&(ur(this,lr,"f")||(pr(this,lr,!0,"f"),f(`ObservableCache.${e} called after clear()`,{key:t.toString()})))};var mr=n(48287).Buffer,gr=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};class fr{constructor(e,t,n){this.messageIndex=t,this.subprotocol=n,this.cache=new hr,this.inputMessage=e}get direction(){return this.inputMessage.direction}get content(){return _t(this.inputMessage.content)}get isBinary(){return this.inputMessage.isBinary}get contentType(){var e,t;return this.inputMessage.isBinary&&!Nt(this.inputMessage.content)?(null===(e=this.subprotocol)||void 0===e?void 0:e.includes("proto"))?"protobuf":"raw":On(this.content)?"json-records":Rn(this.content)||(null===(t=this.subprotocol)||void 0===t?void 0:t.includes("json"))?"json":"text"}get timestamp(){return this.inputMessage.eventTimestamp}cleanup(){this.inputMessage.content=mr.from([]),this.cache.clear()}}gr([w.observable],fr.prototype,"inputMessage",void 0),gr([w.computed],fr.prototype,"content",null);var yr=n(77232),vr=n(25214),br=n(26101),xr=n(85692),wr=n(84578),Er=n(10124),Cr=n(4455),Tr=n(96065),Sr=n(38309),Pr=n(48246),kr=n(37430),Rr=n(6154),Or=n(17023),Hr=n(86061),Ar=n(15451),$r=n(57289),Ir=n(35179),qr=n(64178),jr=n(5805),Dr=n(90716),Mr=n(94310),Fr=n(86429),Br=n(7612),Lr=n(59841),Nr=n(81021),Ur=n(61145),Wr=n(31393),zr=n(25796),_r=n(15201),Vr=n(18633),Kr=n(52169),Jr=n(19179),Qr=n(86419),Gr=n(31226),Yr=n(62672),Xr=n(6151),Zr=n(29332),eo=n(64992),to=n(35177),no=n(41607),ro=n(28045),oo=n(14133),so=n(34496),ao=n(35532),io=n(62882),lo=n(14190),co=n(83070),uo=n(83383),po=n(98808),ho=n(50726),mo=n(19616),go=n(80961),fo=n(64265),yo=n(61087),vo=n(59095),bo=n(76638),xo=n(78967),wo=n(97879),Eo=n(54123),Co=n(23608),To=n(22017),So=n(34213),Po=n(22085),ko=n(10518),Ro=n(77312),Oo=n(5709),Ho=n(50912),Ao=n(31304),$o=n(900),Io=n(43594),qo=n(22777),jo=n(91651),Do=n(81617),Mo=n(488),Fo=n(25936),Bo=n(29338),Lo=n(64479),No=n(33348),Uo=n(38217),Wo=n(86342),zo=n(35540),_o=n(57589),Vo=n(62110),Ko=n(58437),Jo=n(98152),Qo=n(50915),Go=n(20579),Yo=n(35406),Xo=n(17842),Zo=n(83720),es=n(27064),ts=n(11564),ns=n(46784);const rs=b.memo(e=>{const{icon:t}=e,n=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["icon"]),r=os[e.icon];return b.createElement(r,Object.assign({},n,{className:"phosphor-icon "+(e.className||"")}))}),os={Plugs:br.w,MagnifyingGlass:xr.e,Pencil:wr.g,PaperPlaneTilt:Er.M,GearSix:Cr._,Lightning:Tr.l,Sparkle:Sr.R,ChatText:Pr.o,Pause:kr.v,Plug:Rr.F,QuestionMark:Or.a,ArrowLeft:Hr.n,MagicWand:Ar.a,Sun:$r.b,Moon:Ir.A,CircleHalf:qr.e,Swatches:jr.l,Repeat:Dr.k,ListChecks:Mr.y};Fr.Yv.add({prefix:"fac",iconName:"spinner-arc",icon:[50,50,[],"","M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z"]},Nr.Ce,Br.z1,Lr.Be,Ur.Mj,Wr.Qt,zr.Ni,_r.Ar,Vr.MN,Kr.Ev,Jr.GR,Qr.w2,Gr.Jt,Yr.Df,Xr.DN,Zr.np,eo.tK,to.jP,no.A,ro.QL,oo.EZ,so.zp,ao.bx,io.rC,lo.dB,co.nE,uo.oM,po.PJ,ho.Rp,mo.Jm,go.cb,fo.oH,yo.ij,vo.G1,bo.R7,xo.SZ,wo.S9,Eo.U2,Co.hS,To.Uj,So.KK,Po.MT,ko._v,Ro.XR,Oo.oZ,Ho.l0,Ao.vJ,$o.pS,Io.xB,qo.ec,jo.$3,Do.e6,Mo.rr,Fo.is,Bo.EK,Lo.lC,No._y,Uo.VL,Wo.qK,zo.Ck,_o.RI,Vo.yb,Ko.ny,{prefix:"fac",iconName:"brave-browser",icon:[11.1,13.23,[],"","m 5.53752561206,8.23273389478 c 0.07589,0 0.562136,0.174874 0.952332,0.380547 0.39017,0.205699 0.672941,0.351155 0.76334,0.408778 0.09038,0.05764 0.03526,0.166326 -0.04706,0.225614 -0.08235,0.05928 -1.188755,0.932071 -1.296127,1.028532 -0.107394,0.09649 -0.265189,0.255822 -0.372477,0.255822 -0.107288,0 -0.265105,-0.159332 -0.372478,-0.255822 -0.107393,-0.09646 -1.213784,-0.969245 -1.296127,-1.028532 -0.08235,-0.05928 -0.137439,-0.167962 -0.04706,-0.225614 0.09041,-0.05761 0.37317,-0.203079 0.763368,-0.408778 0.390141,-0.205673 0.876414,-0.380547 0.952305,-0.380547 z m 0.0059,-6.216331 c 0.03726,0.001 0.247208,0.01141 0.547814,0.113516 0.332248,0.112822 0.692182,0.253848 0.858305,0.253848 0.166126,0 1.398212,-0.239745 1.398212,-0.239745 0,0 1.460117,1.798085 1.460117,2.182382 0,0.384295 -0.183677,0.485723 -0.368352,0.6855 -0.184673,0.199778 -0.991233,1.072279 -1.094811,1.18431 -0.103578,0.112061 -0.319207,0.28194 -0.192371,0.587712 0.126834,0.305775 0.313945,0.694866 0.105872,1.089514 -0.208099,0.394647 -0.564572,0.658056 -0.792993,0.614507 -0.228419,-0.04357 -0.764862,-0.329155 -0.962134,-0.459604 -0.197272,-0.130452 -0.822508,-0.655744 -0.822508,-0.856734 0,-0.200962 0.646305,-0.561821 0.765694,-0.643814 0.119441,-0.08196 0.664051,-0.399302 0.67521,-0.523856 0.01115,-0.124579 0.0069,-0.161108 -0.153831,-0.468883 -0.160725,-0.307805 -0.450169,-0.71853 -0.401992,-0.991811 0.04818,-0.273252 0.514985,-0.415351 0.848119,-0.543515 0.333078,-0.128132 0.974454,-0.370165 1.054553,-0.407791 0.08015,-0.03766 0.05946,-0.07349 -0.183289,-0.09695 -0.24268,-0.02344 -0.93143,-0.11657 -1.241942,-0.0284 -0.310514,0.08816 -0.841003,0.222315 -0.883974,0.293448 -0.04297,0.07114 -0.08088,0.07353 -0.03675,0.318918 0.0441,0.245385 0.271308,1.422841 0.293347,1.631983 0.02206,0.209143 0.06521,0.347404 -0.156157,0.398964 -0.221387,0.05155 -0.594031,0.141082 -0.722085,0.141082 -0.128053,0 -0.500724,-0.08953 -0.722085,-0.141082 -0.221388,-0.05155 -0.178251,-0.189821 -0.156185,-0.398964 0.02207,-0.209142 0.249242,-1.386598 0.293376,-1.631983 0.0441,-0.245386 0.0061,-0.247783 -0.03675,-0.318918 -0.04297,-0.07114 -0.573487,-0.205278 -0.884001,-0.293448 -0.310513,-0.08816 -0.999234,0.005 -1.241942,0.0284 -0.242707,0.02344 -0.263418,0.05928 -0.18329,0.09695 0.08012,0.03762 0.721504,0.279654 1.054581,0.407791 0.333108,0.128171 0.799944,0.270263 0.848119,0.543515 0.04818,0.273281 -0.241294,0.684006 -0.401992,0.991811 -0.160724,0.307775 -0.164988,0.3443 -0.153829,0.468883 0.01115,0.124552 0.555766,0.441892 0.675182,0.523856 0.119415,0.08199 0.765693,0.442852 0.765693,0.643814 0,0.20099 -0.625209,0.726284 -0.822481,0.856734 -0.197272,0.130452 -0.733713,0.416028 -0.962134,0.459604 -0.22842,0.04355 -0.584894,-0.21986 -0.792992,-0.614507 -0.20807,-0.394648 -0.02096,-0.783739 0.105846,-1.089514 0.126835,-0.305772 -0.08877,-0.475652 -0.192372,-0.587712 -0.103552,-0.112035 -0.910138,-0.984532 -1.094811,-1.18431 -0.184675,-0.199777 -0.368325,-0.301205 -0.368325,-0.6855 0,-0.384297 1.460119,-2.182382 1.460119,-2.182382 0,0 1.232086,0.239745 1.39821,0.239745 0.166123,0 0.526058,-0.141026 0.858306,-0.253848 0.300606,-0.102072 0.510551,-0.112467 0.547815,-0.113516 z m 5.143909,1.157116 0.304561,-0.761542 c 0,0 -0.387622,-0.423078 -0.858308,-0.902568 -0.470683,-0.479489 -1.467428,-0.197436 -1.467428,-0.197436 l -1.135179,-1.311968 h -1.993525 -1.993488 l -1.135179,1.311968 c 0,0 -0.996745,-0.282053 -1.467428,0.197436 -0.470686,0.47949 -0.858308,0.902568 -0.858308,0.902568 l 0.304561,0.761542 -0.387622,1.128209 c 0,0 1.140025,4.398751 1.273616,4.935921 0.263029,1.057696 0.442998,1.466672 1.190555,2.002574 0.747558,0.535898 2.104237,1.466672 2.325735,1.607698 0.221498,0.141026 0.498373,0.38125 0.747558,0.38125 0.249185,0 0.52606,-0.240224 0.747558,-0.38125 0.221498,-0.141026 1.578177,-1.0718 2.325735,-1.607698 0.747557,-0.535902 0.927525,-0.944878 1.190555,-2.002574 0.133563,-0.53717 1.273616,-4.935921 1.273616,-4.935921 z"]},{prefix:"fac",iconName:"arc-browser",icon:[56.4,67.36,[],"","m 58.458706,45.75 -3.5,-7.36 -6.63,-13.95 -0.01,0.01 c 0,0 0,-0.01 0.01,-0.01 l -9.64,-20.28 a 7.292,7.292 0 0 0 -6.58,-4.16 c -2.81,0 -5.37,1.62 -6.58,4.16 l -9.83,20.68 c 2.76,3.65 7.64,6.65 12.49,7.68 l 3.18,-6.68 c 0.3,-0.63 1.2,-0.63 1.5,0 l 3.11,6.54 h 0.02 -0.02 l 6.33,13.32 3.11,6.54 a 7.28,7.28 0 0 0 6.59,4.16 c 0.65,0 1.3,-0.09 1.94,-0.27 4.39,-1.21 6.47,-6.26 4.51,-10.38 m -22.49,-13.37 c -1.42,0.34 -2.87,0.52 -4.32,0.52 -1.13,0 -2.3,-0.13 -3.47,-0.38 -4.85,-1.03 -9.73,-4.03 -12.49,-7.68 -0.69,-0.91 -1.25,-1.86 -1.64,-2.83 -1.51,-3.73 -5.7600005,-5.53 -9.4900005,-4.03 -3.73000009,1.51 -5.53000009,5.76 -4.03000009,9.49 C 2.2387054,31.71 5.2587055,35.6 9.0487055,38.8 a 37.84,37.84 0 0 0 12.7700005,7.08 c 3.21,1.03 6.54,1.6 9.82,1.6 3.64,0 7.23,-0.63 10.65,-1.78 z m 25.54,-23.1800005 a 7.29,7.29 0 0 0 -8.58,5.7200005 c -0.7,3.5 -2.34,6.759999 -4.6,9.53 l 6.63,13.96 c 6.12,-5.31 10.64,-12.54 12.26,-20.63 0.79,-3.96 -1.77,-7.8000005 -5.71,-8.5800005 M 9.0487055,38.8 l -3.32,6.98 c -1.69,3.549999 -0.42,7.92 3.06,9.769999 3.6900005,1.96 8.2300005,0.43 10.0100005,-3.299999 l 3.03,-6.37 A 37.885,37.885 0 0 1 9.0487055,38.8"]},Jo.Xb,Qo.lS,Go.H,Yo.Ou,Xo.ar,Zo.RS,es.Bw,ts.SY);const ss={Chrome:{icon:["fab","chrome"],color:"#1da462"},Chromium:{icon:["fab","chrome"],color:"#4489f4"},Firefox:{icon:["fab","firefox"],color:"#e66000"},Safari:{icon:["fab","safari"],color:"#448aff"},Edge:{icon:["fab","edge"],color:"#2c75be"},IE:{icon:["fab","internet-explorer"],color:"#00baf0"},Opera:{icon:["fab","opera"],color:"#cb0b1e"},Brave:{icon:["fac","brave-browser"],color:"#fb542b"},Arc:{icon:["fac","arc-browser"],color:"#ff536a"},Git:{icon:["fas","code-branch"],color:"#f05033"},Php:{icon:["fab","php"],color:"#8892bf"},Ruby:{icon:["fas","gem"],color:"#CC342D"},Faraday:{icon:["fas","gem"],color:"#CC342D"},Excon:{icon:["fas","gem"],color:"#CC342D"},Typhoeus:{icon:["fas","gem"],color:"#CC342D"},Rubybindings:{icon:["fas","gem"],color:"#CC342D"},Npm:{icon:["fab","npm"],color:"#cc3534"},Node:{icon:["fab","node-js"],color:"#3c873a"},Got:{icon:["fab","node-js"],color:"#3c873a"},Axios:{icon:["fab","node-js"],color:"#3c873a"},Nodebindings:{icon:["fab","node-js"],color:"#3c873a"},Pip:{icon:["fab","python"],color:"#646464"},Python:{icon:["fab","python"],color:"#4584b6"},Urlfetch:{icon:["fab","python"],color:"#4584b6"},Pycurl:{icon:["fab","python"],color:"#4584b6"},Pythonbindings:{icon:["fab","python"],color:"#4584b6"},Java:{icon:["fab","java"],color:"#007396"},Reactornetty:{icon:["fab","java"],color:"#007396"},Jetty:{icon:["fab","java"],color:"#007396"},Jakarta:{icon:["fab","java"],color:"#007396"},Akka:{icon:["fab","java"],color:"#007396"},Intellij:{icon:["fab","java"],color:"#007396"},Ktor:{icon:["fab","java"],color:"#007396"},Ahc:{icon:["fab","java"],color:"#007396"},Android:{icon:["fab","android"],color:"#78C257"},Okhttp:{icon:["fab","android"],color:"#78C257"},Fbandroidsdk:{icon:["fab","android"],color:"#78C257"},Iphone:{icon:["fab","apple"],color:"#000"},iOS:{icon:["fab","apple"],color:"#000"},Ios:{icon:["fab","apple"],color:"#000"},Ipad:{icon:["fab","apple"],color:"#000"},Darwin:{icon:["fab","apple"],color:"#000"},Docker:{icon:["fab","docker"],color:"#0db7ed"},Terminal:{icon:["fas","terminal"],color:"#20c20e"},Network:{icon:["fas","network-wired"],color:"#888"},Electron:{icon:["fas","atom"],color:"#9FEAF9"},Desktop:{icon:["fas","desktop"],color:"#888"},Unknown:{icon:["fas","question"],color:"#888"}},as=b.memo(ns.g),is=e=>Array.isArray(e.icon)?b.createElement(as,Object.assign({},e,{size:e.size,icon:e.icon})):b.createElement(rs,{icon:e.icon,onClick:e.onClick,onKeyPress:e.onKeyPress,color:e.color,size:e.size||"1.25em",className:e.className,alt:e.title}),ls=G(as).attrs(()=>({icon:["fas","lightbulb"]}))`
    margin: 0 6px;
    color: #2fb4e0;
`,cs=hs({prefix:"fas",iconName:"lightbulb"},{styles:{margin:"0 6px",color:"#2fb4e0"}}),ds=G(as).attrs(()=>({icon:["fas","exclamation-triangle"]}))`
    margin: 0 6px;
    color: ${e=>e.theme.warningColor};
`,us=hs({prefix:"fas",iconName:"exclamation-triangle"},{styles:{margin:"0 6px",color:I}}),ps=G(as).attrs(()=>({fixedWidth:!0,icon:["fas","arrow-left"]}))`
    ${e=>"right"===e.direction?"transform: rotate(180deg);":""}
    padding: 0 15px;
`;function hs(e,t){return(0,Fr.Kk)(e,t).html.join("")}function ms(e){return e?" "+e.split(".").slice(0,2).join(".").replace(/\.0$/,""):""}const gs=e=>{const t=y(e.os).values().some(),n=y(e.browser).values().some(),r=y.upperFirst(e.ua.split(" ")[0]);if(t||n){const o=t?` (${y.upperFirst(e.os.name)}${ms(e.os.version)})`:"";return(n?(e.browser.name||"")+ms(e.browser.version):r)+o}return r};function fs(e){const t=e[0].toLowerCase();return"a"===t||"e"===t||"i"===t||"o"===t||"u"===t?"an ":"a "}const ys=e=>{if(!e.browser.name&&!e.os.name&&!e.device.type)return;const t=e.browser.name?e.browser.name+ms(e.browser.version)+(e.engine.name?`, based on the ${e.engine.name}${"Blink"!==e.engine.name?ms(e.engine.version):""} engine`:""):e.engine.name?`a browser built on the ${e.engine.name}${ms(e.engine.version)} engine`:"",n=(e.device.vendor?`${e.device.vendor} `:"")+(e.device.model?`${e.device.model} `:"")+(e.device.type?"mobile"===e.device.type?"mobile phone":e.device.type+" ":""),r=e.os.name?`running ${e.os.name}${ms(e.os.version)}`:"",o=e.cpu.architecture?`${fs(e.cpu.architecture)}${e.cpu.architecture} CPU`:"",s=(n?`${fs(n)}${n}`:"")+(n&&r?", ":"")+r+(o?(n||r?", with ":" using ")+o:"");return`This request came from ${t?t+(s?". The device is "+s:""):n?s:"a device "+s}.`},vs=e=>!(!e||!y.has(ss,e)),bs=e=>{const t=(0,vr.Jt)(e,"browser","name");if(vs(t))return ss[t];const n=e.ua.match(/[A-Za-z]+/g)||[],r=y.find(n.map(e=>y.upperFirst(e.toLowerCase())),e=>vs(e));return r?ss[r]:ss.Unknown},xs={ua:"",summary:"Unknown client",icon:ss.Unknown},ws={ua:"",summary:"HTTP Toolkit (Send)",description:"Sent manually from HTTP Toolkit",icon:{icon:"PaperPlaneTilt",color:j}},Es=e=>{if(!e)return xs;const t=new yr.UAParser(e).getResult();return function(e){const t=e.ua.match(/Electron\/(\S+)/);t&&(e.engine=e.browser||e.engine,e.browser={name:"Electron",version:t[1],major:t[1].split(".")[0]})}(t),{ua:t.ua,summary:gs(t),description:ys(t),icon:bs(t)}};var Cs=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};class Ts{constructor(){this._searchIndex="",this._pinned=!1}isHttp(){return!1}isWebSocket(){return!1}isTlsFailure(){return!1}isTlsTunnel(){return!1}isRawTunnel(){return!1}isTunnel(){return this.isTlsTunnel()||this.isRawTunnel()}isRTCConnection(){return!1}isRTCDataChannel(){return!1}isRTCMediaTrack(){return!1}isRTC(){return this.isRTCConnection()||this.isRTCDataChannel()||this.isRTCMediaTrack()}get category(){return function(e){if(e.isHttp()){if(!e.isCompletedExchange())return Gn(e)?"mutative":"incomplete";if(!e.isSuccessfulExchange())return"aborted";if(e.isWebSocket())return"websocket";if(Gn(e))return"mutative";if((e=>{const t=Jn(e.request);return!!(t.length>0&&t.every(e=>e.startsWith("image/")))||"image"===e.request.headers["sec-fetch-dest"]||Qn(e.response).startsWith("image/")})(e))return"image";if("script"===(t=e).request.headers["sec-fetch-dest"]||y.includes(["text/javascript","application/javascript","application/x-javascript","application/ecmascript"],Qn(t.response)))return"js";if((e=>"style"===e.request.headers["sec-fetch-dest"]||y.includes(["text/css"],Qn(e.response)))(e))return"css";if((e=>"document"===e.request.headers["sec-fetch-dest"]||"text/html"===Qn(e.response))(e))return"html";if((e=>"font"===e.request.headers["sec-fetch-dest"]||Qn(e.response).startsWith("font/")||y.includes(["application/font-woff","application/x-font-woff","application/font-otf","application/font","application/vnd.ms-fontobject","application/x-font-ttf","application/x-font-typetype","application/x-font-opentype"],Qn(e.response)))(e))return"font";if((e=>{const t=Jn(e.request);return!!(t.length>0&&t.every(e=>Yn.includes(e)))||y.includes(Yn,Qn(e.response))})(e))return"data"}else{if(e.isRTCDataChannel())return"rtc-data";if(e.isRTCMediaTrack())return"rtc-media"}var t;return"unknown"}(this)}get searchIndex(){return this._searchIndex}set searchIndex(e){this._searchIndex=e}get pinned(){return this._pinned}set pinned(e){this._pinned=e}}Cs([w.computed],Ts.prototype,"category",null),Cs([w.observable],Ts.prototype,"_searchIndex",void 0),Cs([w.observable],Ts.prototype,"_pinned",void 0);var Ss=n(88483);const Ps=Object.values(Ss.IT).filter(e=>"string"==typeof e);function ks(...e){for(let t of e)if(y.isArray(t)&&y.isFunction(t[0])){const[e,n]=t;if(e()&&n)return n}else if(t)return t}function Rs(e){return t=>e.includes(t)}function Os(e){try{return JSON.parse(e)}catch(e){return}}function Hs(e,t,n=void 0){return y.isArray(e)?e.map(e=>Hs(e,t)):y.isPlainObject(e)?y.mapValues(e,(e,n)=>Hs(e,t,n)):t(e,n)}var As=n(48287).Buffer;const $s=e=>ht.Ie(e,()=>ht._Z),Is=ht.Ie(e=>({source:e.source,flags:e.flags}),e=>new RegExp(e.source,e.flags)),qs=ht.Ie(e=>void 0!==e?_t(e).toString("base64"):void 0,e=>void 0!==e?As.from(e,"base64"):void 0),js="__http_toolkit_undefined_placeholder__",Ds=ht.Ie(e=>e?JSON.stringify(e,(e,t)=>void 0===t?js:t):void 0,e=>e?Hs(JSON.parse(e),e=>e===js?void 0:e):void 0);function Ms(e,t,n){let r,o;if(e.deserializer(t,(e,t)=>{e?o=e:r=t},n,void 0),o)throw o;return r}const Fs=e=>!!ht.Yu(e);function Bs(e){return y.isObject(e)&&"items"in(e||{})}function Ls(e){return Bs(e)&&"isRoot"in e&&!0===e.isRoot}function Ns(e,t){return Us(e,t.slice(0,-1))}function Us(e,t){return t.reduce((e,n,r)=>{if(!Bs(e))throw new Error(`Invalid path ${t} at step #${r}, found ${e}`);return e.items[n]},e)}function Ws(e,t,n){const r=t.slice(0,-1),o=y.last(t),s=r.length?Us(e,r):e;return s.items[o]=n,s}function zs(e,t){const n=Ns(e,t),r=y.last(t);n.items.splice(r,1),0!==n.items.length||Ls(n)||zs(e,t.slice(0,-1))}function _s(e,t){return y.isMatch(e,t)?e:y.reduce(e.items,(e,n)=>e||(Bs(n)?_s(n,t):y.isMatch(n,t)?n:void 0),void 0)}function Vs(e,t,n=[]){return y.isMatch(e,t)?n:y.reduce(e.items,(e,r,o)=>e||(Bs(r)?Vs(r,t,n.concat(o)):y.isMatch(r,t)?n.concat(o):void 0),void 0)}ht.gt({"*":!0});const Ks=e=>Js(e,e=>e);function Js(e,t,n=[],r=0){return e.items.reduce((e,o,s)=>{const a=r+s;return Bs(o)?e.concat(Js(o,t,n.concat(s),a)):e.concat([t(o,n.concat(s),a)])},[])}function Qs(e){return Bs(e)?(n=e,Object.assign(Object.assign({},n),{items:n.items.map(e=>Qs(e)),collapsed:!0,id:crypto.randomUUID()})):(t=e,(0,w.observable)(Object.assign(Object.assign({},t),{matchers:[...t.matchers],id:crypto.randomUUID()})));var t,n}const Gs=(e,t)=>Bs(e)?!!Bs(t)&&Ys(e,t):!Bs(t)&&Zs(e,t),Ys=(e,t)=>e.id===t.id&&e.title===t.title&&y.isEqualWith(e.items,t.items,Gs),Xs=Symbol("custom-rule-is-equals"),Zs=(e,t)=>e&&t&&e[Xs]&&e[Xs]===t[Xs]?(0,e[Xs])(e,t):y.isFunction(e)&&y.isFunction(t)?e.toString()===t.toString():y.isObject(e)&&y.isObject(t)&&(Object.values(e).includes(void 0)||Object.values(t).includes(void 0))?y.isEqualWith(y.omitBy(e,e=>void 0===e),y.omitBy(t,e=>void 0===e),Zs):void 0;var ea=n(48287).Buffer;const ta=y.reduce(Ps,(e,t)=>(e[t]=class extends Ss.yN.MethodMatcher{constructor(){super(Ss.IT[t]),this.uiType=t}explain(){return`${Ss.IT[this.method]} requests`}},e),{});class na extends Ss.yN.WildcardMatcher{explain(){return"Any requests"}}class ra extends Ss.yN.WildcardMatcher{constructor(){super(...arguments),this.uiType="default-wildcard"}explain(){return"Any other requests"}}class oa extends Ss.yN.RegexPathMatcher{constructor(){super(/^https?:\/\/amiusing\.httptoolkit\.tech\/?$/),this.uiType="am-i-using"}explain(){return"for amiusing.httptoolkit.tech"}}class sa extends Ss.bV.FixedResponseStep{explain(){return`respond with status ${this.status}${Vt(this.data)?" and static content":""}`}}ht.PL(sa,{data:ht.Ie(e=>!e||"string"==typeof e||zt(e)?e:{type:"Buffer",data:[...e]},e=>e?"string"==typeof e?e:ea.from(e.data):void 0),"*":Object.assign(ht.Ie(e=>e,e=>e),{pattern:{test:e=>"data"!==e}})},()=>new sa(200));class aa extends Ss.bV.FileStep{explain(){return`respond with status ${this.status} and content from ${this.filePath||"a file"}`}}class ia extends Ss.bV.PassThroughStep{constructor(e){super(e.activePassthroughOptions)}}ht.PL(ia,{type:ht.MY()},e=>new ia(e.args.rulesStore));class la extends Ss.bV.PassThroughStep{constructor(e,t,n,r){super(Object.assign(Object.assign({},r.activePassthroughOptions),{transformRequest:Object.assign(Object.assign(Object.assign({},r.activePassthroughOptions.transformRequest),{replaceHost:{targetHost:t,updateHostHeader:n}}),e?{setProtocol:e}:{})})),this.uiType="forward-to-host"}}ht.PL(la,{uiType:$s(()=>"forward-to-host"),type:ht.MY(),transformRequest:ht.Ik(ht.gt({replaceHost:ht.lS(),setProtocol:ht.MY()}))},e=>{const t=e.json;return new la(t.transformRequest.setProtocol,t.transformRequest.replaceHost.targetHost,t.transformRequest.replaceHost.updateHostHeader,e.args.rulesStore)});class ca extends Ss.bV.PassThroughStep{constructor(e,t,n){super(Object.assign(Object.assign({},e.activePassthroughOptions),{transformRequest:t,transformResponse:n})),this.uiType="req-res-transformer"}explain(){const e=y.pickBy(this.transformRequest||{},e=>void 0!==e),t=y.pickBy(this.transformResponse||{},e=>void 0!==e);return y.isEmpty(e)&&y.isEmpty(t)?super.explain():y.isEmpty(e)||y.isEmpty(t)?y.isEmpty(e)?"automatically transform the response from the target host":"automatically transform the request then pass it through to the target host":"automatically transform the request and response"}[Xs](e,t){return y.isEqual(e.transformRequest,t.transformRequest)&&y.isEqual(e.transformResponse,t.transformResponse)}}const da=ht.p_(ht.Ie(([e,t])=>[{source:e.source,flags:e.flags},t],([e,t])=>[new RegExp(e.source,e.flags),t]));ht.PL(ca,{uiType:$s(()=>"req-res-transformer"),transformRequest:ht.Ik(ht.gt({matchReplaceHost:ht.Ik(ht.gt({replacements:da,"*":Object.assign(ht.lS(),{pattern:{test:()=>!0}})})),matchReplacePath:da,matchReplaceQuery:da,updateHeaders:Ds,updateJsonBody:Ds,replaceBody:qs,matchReplaceBody:da,"*":Object.assign(ht.lS(),{pattern:{test:()=>!0}})})),transformResponse:ht.Ik(ht.gt({updateHeaders:Ds,updateJsonBody:Ds,replaceBody:qs,matchReplaceBody:ht.p_(ht.Ie(([e,t])=>[{source:e.source,flags:e.flags},t],([e,t])=>[new RegExp(e.source,e.flags),t])),"*":Object.assign(ht.lS(),{pattern:{test:()=>!0}})}))},e=>{const t=e.json;return new ca(e.args.rulesStore,t.transformRequest,t.transformResponse)});class ua extends Ss.bV.PassThroughStep{constructor(e){super(Object.assign(Object.assign({},e.activePassthroughOptions),{beforeRequest:e.triggerRequestBreakpoint})),this.uiType="request-breakpoint"}explain(){return"manually rewrite the request before it's forwarded"}}ht.PL(ua,{uiType:$s(()=>"request-breakpoint"),type:ht.MY()},e=>new ua(e.args.rulesStore));class pa extends Ss.bV.PassThroughStep{constructor(e){super(Object.assign(Object.assign({},e.activePassthroughOptions),{beforeResponse:e.triggerResponseBreakpoint})),this.uiType="response-breakpoint"}explain(){return"manually rewrite the response before it's returned"}}ht.PL(pa,{uiType:$s(()=>"response-breakpoint"),type:ht.MY()},e=>new pa(e.args.rulesStore));class ha extends Ss.bV.PassThroughStep{constructor(e){super(Object.assign(Object.assign({},e.activePassthroughOptions),{beforeRequest:e.triggerRequestBreakpoint,beforeResponse:e.triggerResponseBreakpoint})),this.uiType="request-and-response-breakpoint"}explain(){return"manually rewrite the request and response"}}ht.PL(ha,{uiType:$s(()=>"request-and-response-breakpoint"),type:ht.MY()},e=>new ha(e.args.rulesStore));class ma extends Ss.bV.WebhookStep{explain(){return`enable ${1===this.events.length?this.events[0]:""} webhooks`}}const ga=Ss.bV.DelayStep,fa=Ss.bV.TimeoutStep,ya=Ss.bV.CloseConnectionStep,va=Ss.bV.ResetConnectionStep,ba=Object.assign(Object.assign(Object.assign({},y.omit(Ss.yN.MatcherLookup,["method"])),ta),{wildcard:na,"default-wildcard":ra,"am-i-using":oa}),xa=[na,...Object.values(ta)],wa=Object.assign(Object.assign({},Ss.bV.StepDefinitionLookup),{passthrough:ia,simple:sa,file:aa,"forward-to-host":la,"req-res-transformer":ca,"request-breakpoint":ua,"response-breakpoint":pa,"request-and-response-breakpoint":ha,webhook:ma}),{EchoWebSocketStep:Ea,RejectWebSocketStep:Ca,ListenWebSocketStep:Ta}=Ss.xJ;class Sa extends na{constructor(){super(...arguments),this.uiType="ws-wildcard"}explain(){return"Any WebSocket"}}class Pa extends na{constructor(){super(...arguments),this.uiType="default-ws-wildcard"}explain(){return"Any other WebSockets"}}class ka extends Ss.yN.MethodMatcher{explain(){return`started with ${Ss.IT[this.method]}`}}class Ra extends Ss.xJ.PassThroughWebSocketStep{constructor(e){super(e.activePassthroughOptions)}}ht.PL(Ra,{type:ht.MY()},e=>new Ra(e.args.rulesStore));class Oa extends Ss.xJ.PassThroughWebSocketStep{constructor(e,t,n,r){super(Object.assign(Object.assign({},r.activePassthroughOptions),{transformRequest:Object.assign(Object.assign(Object.assign({},r.activePassthroughOptions.transformRequest),{replaceHost:{targetHost:t,updateHostHeader:n}}),e?{setProtocol:e}:{})})),this.uiType="ws-forward-to-host"}}ht.PL(Oa,{uiType:$s(()=>"ws-forward-to-host"),type:ht.MY(),transformRequest:ht.Ik(ht.gt({setProtocol:ht.MY(),replaceHost:ht.lS()}))},e=>{const t=e.json;return new Oa(t.transformRequest.setProtocol,t.transformRequest.replaceHost.targetHost,t.transformRequest.replaceHost.updateHostHeader,e.args.rulesStore)});const Ha=Object.assign(Object.assign({},y.omit(ba,Ps)),{method:ka,"ws-wildcard":Sa,"default-ws-wildcard":Pa}),Aa=[Sa],$a=Object.assign(Object.assign({},Ss.xJ.WsStepDefinitionLookup),{"ws-passthrough":Ra,"ws-forward-to-host":Oa});var Ia=n(52405);const qa=Ia.D.encode.bind(Ia.D),ja=["bool","int","uint",...y.flatMap(y.range(8,257,8),e=>[`int${e}`,`uint${e}`]),"address","string","bytes",...y.range(1,33).map(e=>`bytes${e}`)],Da={eth_call:"Call a contract method (without a transaction)",eth_sendRawTransaction:"Submit a signed transaction",eth_sendTransaction:"Submit an unsigned transaction",eth_getTransactionReceipt:"Return the receipt of a submitted transaction",eth_getBalance:"Return the balance of an account",eth_gasPrice:"Return the current gas price",eth_blockNumber:"Return the latest block number",eth_getBlockByNumber:"Return information about a block by number",eth_getBlockByHash:"Return information about a block by hash"};class Ma extends Ss.yN.JsonBodyFlexibleMatcher{constructor(e="eth_call"){super({jsonrpc:"2.0",method:e}),this.methodName=e,this.uiType="eth-method"}explain(){return`Ethereum ${this.methodName} requests`}}class Fa extends Ss.yN.JsonBodyFlexibleMatcher{constructor(e){super({params:e}),this.params=e,this.uiType="eth-params"}explain(){return`matching ${JSON.stringify(this.params)}`}}class Ba extends wa["json-rpc-response"]{constructor(e,t){super({result:qa(e,t)}),this.outputTypes=e,this.values=t,this.uiType="eth-call-result"}explain(){return this.values.length?`Return an eth_call result of ${this.values.join(", ")}`:"Return an empty eth_call result"}}class La extends wa["json-rpc-response"]{constructor(e){super({result:`0x${e.toString(16)}`}),this.value=e,this.uiType="eth-number-result"}explain(){return`Return ${this.value}`}}class Na extends wa["json-rpc-response"]{constructor(e){super({result:e}),this.value=e,this.uiType="eth-hash-result"}explain(){return`Return transaction hash ${this.value}`}}class Ua extends wa["json-rpc-response"]{constructor(e={status:"0x1",transactionHash:"012345",blockNumber:"0x100",blockHash:"0x1",from:"0x0",to:"0x0",cumulativeGasUsed:"0x1",gasUsed:"0x1",effectiveGasPrice:"0x0",contractAddress:null,logs:[],logsBloom:"0x0",type:"0x0"}){super({result:e}),this.receiptValue=e,this.uiType="eth-receipt-result"}explain(){return"Return a fixed transaction receipt"}}class Wa extends wa["json-rpc-response"]{constructor(e={difficulty:"0x1",extraData:"0x0",gasLimit:"0x1",gasUsed:"0x1",hash:"0x1234",logsBloom:"0x0",miner:"0x1",mixHash:"0x0",nonce:"0x0",number:"0x0",parentHash:"0x1",receiptsRoot:"0x1",sha3Uncles:"0x1",size:"0x1",stateRoot:"0x1",timestamp:"0x1",totalDifficulty:"0x1",transactions:["0x1234"],transactionsRoot:"0x1",uncles:[]}){super({result:e}),this.blockValue=e,this.uiType="eth-block-result"}explain(){return"Return fixed block data"}}class za extends wa["json-rpc-response"]{constructor(e,t="0x",n=-32099,r=void 0){super({error:{message:e,data:t,code:n,name:r}}),this.message=e,this.data=t,this.code=n,this.name=r,this.uiType="eth-error"}explain(){return"Fail with "+(this.message?`"${this.message}"`:`code ${this.code}`)}}const _a={"eth-method":Ma,"eth-params":Fa,protocol:Ss.yN.ProtocolMatcher,host:Ss.yN.HostMatcher,hostname:Ss.yN.HostnameMatcher,port:Ss.yN.PortMatcher,"simple-path":Ss.yN.FlexiblePathMatcher,"regex-path":Ss.yN.RegexPathMatcher,header:Ss.yN.HeaderMatcher,query:Ss.yN.QueryMatcher,"exact-query-string":Ss.yN.ExactQueryMatcher,cookie:Ss.yN.CookieMatcher},Va=[Ma],Ka={"eth-call-result":Ba,"eth-number-result":La,"eth-hash-result":Na,"eth-receipt-result":Ua,"eth-block-result":Wa,"eth-error":za,passthrough:wa.passthrough,"forward-to-host":wa["forward-to-host"],timeout:wa.timeout,"close-connection":wa["close-connection"],"request-breakpoint":wa["request-breakpoint"],"response-breakpoint":wa["response-breakpoint"],"request-and-response-breakpoint":wa["request-and-response-breakpoint"]},Ja={cat:"Read IPFS content",add:"Add a file or directory to IPFS","name/resolve":"Resolve an IPNS name","name/publish":"Publish an IPNS name","pin/add":"Pin some IPFS content","pin/rm":"Unpin some IPFS content","pin/ls":"List the pinned IPFS content"};class Qa extends Ss.yN.FlexiblePathMatcher{constructor(e="cat"){super(`/api/v0/${e}`),this.interactionName=e,this.uiType="ipfs-interaction"}explain(){return`IPFS ${this.interactionName} requests`}}const Ga={cat:{argType:"IPFS path",placeholder:"The path to the IPFS object(s) to be read"},"name/resolve":{argType:"IPNS name",placeholder:"The IPNS name to resolve"},"name/publish":{argType:"IPFS path",placeholder:"The IPFS path of the object to be published"},"pin/add":{argType:"IPFS path",placeholder:"The IPFS path to the object(s) to be pinned"},"pin/rm":{argType:"IPFS path",placeholder:"The IPFS path to the object(s) to be unpinned"}};class Ya extends Ss.yN.QueryMatcher{constructor(e,t=void 0){super(t?{arg:t}:{}),this.interaction=e,this.argValue=t,this.uiType="ipfs-arg"}explain(){var e,t,n;return`for ${null!==(e=this.argValue)&&void 0!==e?e:`any ${null!==(n=null===(t=Ga[this.interaction])||void 0===t?void 0:t.argType)&&void 0!==n?n:"value"}`}`}}const Xa=e=>Object.assign({"cache-control":"no-cache",connection:"close",date:(new Date).toUTCString(),"content-type":"application/json; charset=utf-8"},void 0!==e?{"content-length":Vt(e).toString()}:{}),Za=()=>({"cache-control":"no-cache",connection:"close",date:(new Date).toUTCString(),"content-type":"application/json; charset=utf-8","transfer-encoding":"chunked","x-chunked-output":"1"}),ei=ht.Yu(wa.simple);class ti extends wa.simple{constructor(e){super(200,void 0,e,Xa(e)),this.result=e,this.uiType="ipfs-cat-text"}explain(){return"Return fixed IPFS content"}}ht.PL(ti,ei.props,()=>new ti(""));class ni extends wa.file{constructor(e){super(200,void 0,e,Xa()),this.path=e,this.uiType="ipfs-cat-file"}explain(){return`Return IPFS content from ${this.path||"a file"}`}}class ri extends wa.simple{constructor(e=[{Name:"uploaded-file.txt",Hash:"QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco"}]){super(200,void 0,e.map(e=>JSON.stringify(e)).join("\n"),Za()),this.result=e,this.uiType="ipfs-add-result"}explain(){return`Return ${0===this.result.length?"an empty":"fixed"} IPFS add result${this.result.length>1?"s":""}`}}ht.PL(ri,ei.props,()=>new ri);class oi extends wa.simple{constructor(e={Path:"/ipfs/QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco"}){super(200,void 0,JSON.stringify(e),Xa(JSON.stringify(e))),this.result=e,this.uiType="ipns-resolve-result"}explain(){return"Return a fixed IPNS resolved address"}}ht.PL(oi,ei.props,()=>new oi);class si extends wa.simple{constructor(e={Name:"QmY7Yh4UquoXHLPFo2XbhXkhBvFoPwmQUSa92pxnxjQuPU",Value:"/ipfs/QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco"}){super(200,void 0,JSON.stringify(e),Xa(JSON.stringify(e))),this.result=e,this.uiType="ipns-publish-result"}explain(){return"Return a fixed IPNS resolve result"}}ht.PL(si,ei.props,()=>new si);class ai extends wa.simple{constructor(e={Pins:["QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco"]}){super(200,void 0,JSON.stringify(e),Xa(JSON.stringify(e))),this.result=e,this.uiType="ipfs-pins-result"}explain(){return"Return fixed IPFS pinning results"}}ht.PL(ai,ei.props,()=>new ai);class ii extends wa.simple{constructor(e=[{Type:"direct",Cid:"QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco"}]){super(200,void 0,e.map(e=>JSON.stringify(e)).join("\n"),Za()),this.result=e,this.uiType="ipfs-pin-ls-result"}explain(){return"Return fixed list of IPFS pins"}}ht.PL(ii,ei.props,()=>new ii);const li={"ipfs-interaction":Qa,"ipfs-arg":Ya,query:Ss.yN.QueryMatcher,"exact-query-string":Ss.yN.ExactQueryMatcher,protocol:Ss.yN.ProtocolMatcher,host:Ss.yN.HostMatcher,hostname:Ss.yN.HostnameMatcher,port:Ss.yN.PortMatcher,header:Ss.yN.HeaderMatcher,cookie:Ss.yN.CookieMatcher},ci=[Qa],di={"ipfs-cat-text":ti,"ipfs-cat-file":ni,"ipfs-add-result":ri,"ipns-publish-result":si,"ipns-resolve-result":oi,"ipfs-pins-result":ai,"ipfs-pin-ls-result":ii,passthrough:wa.passthrough,"forward-to-host":wa["forward-to-host"],timeout:wa.timeout,"close-connection":wa["close-connection"],"request-breakpoint":wa["request-breakpoint"],"response-breakpoint":wa["response-breakpoint"],"request-and-response-breakpoint":wa["request-and-response-breakpoint"]};var ui=n(56095);const{Serializable:pi}=Ss.PluggableAdmin.Serialization;class hi extends pi{constructor(){super(...arguments),this.type="rtc-wildcard"}explain(){return"WebRTC connections"}}const{HasDataChannelMatcher:mi,HasVideoTrackMatcher:gi,HasAudioTrackMatcher:fi,HasMediaTrackMatcher:yi}=ui.matchers,vi=Object.assign(Object.assign({},ui.matchers.MatcherDefinitionLookup),{"rtc-wildcard":hi}),bi=[hi],{DynamicProxyStep:xi,EchoStep:wi,CloseStep:Ei,WaitForMediaStep:Ci,WaitForDurationStep:Ti,WaitForChannelStep:Si,WaitForMessageStep:Pi,CreateChannelStep:ki,SendStep:Ri}=ui.steps,Oi=Object.assign({},ui.steps.StepDefinitionLookup),Hi=e=>{var t;return null!==(t=e.uiType)&&void 0!==t?t:e.type},Ai={host:"^0.1.22 || ^1.0.0","raw-body":We,"raw-body-regexp":We,"raw-body-includes":We,"json-body":We,"json-body-matching":We,"eth-method":"^1.11.0","rtc-wildcard":Qe,file:Le,"req-res-transformer":"^1.4.0","ws-echo":Je,"ws-listen":Je,"ws-reject":Je,"reset-connection":"^1.12.0",delay:Xe,webhook:Xe},$i={http:ba,websocket:Ha,ethereum:_a,ipfs:li,webrtc:vi},Ii=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},$i.http),$i.websocket),$i.ethereum),$i.ipfs),$i.webrtc),qi=new Map(Object.entries(Ii).map(([e,t])=>[t,e])),ji={http:wa,websocket:$a,ethereum:Ka,ipfs:di,webrtc:Oi},Di=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},ji.http),ji.websocket),ji.ethereum),ji.ipfs),ji.webrtc),Mi=new Map(Object.entries(Di).map(([e,t])=>[t,e])),Fi=[...xa,...Aa,...Va,...ci,...bi],Bi=["http","websocket"],Li=e=>{const t=y.isString(e)?Ii[e]:e.constructor;if(xa.includes(t))return"http";if(Aa.includes(t))return"websocket";if(Va.includes(t))return"ethereum";if(ci.includes(t))return"ipfs";if(bi.includes(t))return"webrtc";throw new Error(`Unknown type for initial matcher class: ${t.name}`)},Ni=["callback","am-i-using","default-wildcard","default-ws-wildcard","multipart-form-data","raw-body-regexp","regex-url","hostname","port","protocol","form-data","cookie","rtc-page-hostname","rtc-page-regex","rtc-user-agent-regex"],Ui=e=>Ni.includes(e),Wi=["json-rpc-response","rtc-peer-proxy","callback","stream","informational-response","wait-for-rtc-track","wait-for-request-body"],zi={"eth-call-result":e=>e instanceof Ma&&"eth_call"===e.methodName,"eth-number-result":e=>e instanceof Ma&&["eth_getBalance","eth_blockNumber","eth_gasPrice"].includes(e.methodName),"eth-hash-result":e=>e instanceof Ma&&["eth_sendRawTransaction","eth_sendTransaction"].includes(e.methodName),"eth-receipt-result":e=>e instanceof Ma&&"eth_getTransactionReceipt"===e.methodName,"eth-block-result":e=>e instanceof Ma&&["eth_getBlockByHash","eth_getBlockByNumber"].includes(e.methodName),"ipfs-cat-text":e=>e instanceof Qa&&"cat"===e.interactionName,"ipfs-cat-file":e=>e instanceof Qa&&"cat"===e.interactionName,"ipfs-add-result":e=>e instanceof Qa&&"add"===e.interactionName,"ipns-resolve-result":e=>e instanceof Qa&&"name/resolve"===e.interactionName,"ipns-publish-result":e=>e instanceof Qa&&"name/publish"===e.interactionName,"ipfs-pins-result":e=>e instanceof Qa&&["pin/add","pin/rm"].includes(e.interactionName),"ipfs-pin-ls-result":e=>e instanceof Qa&&"pin/ls"===e.interactionName},_i=[ua,pa,ha,ia,Ra,Oa],Vi=(e,t)=>("http"===e||"websocket"===e)&&!y.some(_i,e=>t instanceof e);function Ki(e){return!!(null==e?void 0:e.length)&&!(null==e?void 0:e.every(e=>"passthrough"===e||"ws-passthrough"===e||"webhook"===e))}const Ji=(...e)=>t=>e.includes(t),Qi=e=>t=>e(t.type),Gi=Ji("http","ethereum","ipfs"),Yi=Qi(Gi),Xi=Qi(Ji("websocket")),Zi=Qi(Ji("webrtc"));var el;!function(e){e[e.FALLBACK=0]="FALLBACK",e[e.DEFAULT=1]="DEFAULT",e[e.OVERRIDE=2]="OVERRIDE"}(el||(el={}));var tl=n(63282),nl=n.n(tl),rl=n(68182),ol=n.n(rl);n(36623);const sl=(e,t)=>0===t.length?e:sl(e[t[0]],t.slice(1));function al(e,t,n=y.identity){var r;const o=(null===(r=t.instancePath)||void 0===r?void 0:r.length)?sl(e,t.instancePath.slice(1).split("/")):e;return(n(t.instancePath)||"Document")+` (${s=JSON.stringify(o),s.length<=50?s:s.slice(0,47)+"..."}) ${t.message}${"enum"===t.keyword?` (${Ht(t.params.allowedValues,", ",", or ")})`:""}.`;var s}var il=n(27681),ll=n(84997);const cl=new il({html:!0,linkify:!0,linkTarget:"_blank"}),dl=new il({html:!0,linkify:!1});function ul(e,t){if(e){const n=((null==t?void 0:t.linkify)?cl:dl).render(e).replace(/\n$/,"");return{__html:ll.A.sanitize(n)}}}function pl(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/([\\`*_{}\[\]()#+\-.!~|])/g,"\\$1")}ll.A.addHook("afterSanitizeAttributes",function(e){e instanceof Element&&((e.hasAttribute("target")||"target"in e)&&(e.setAttribute("target","_blank"),e.setAttribute("rel","noreferrer")),e.hasAttribute("target")||!e.hasAttribute("xlink:href")&&!e.hasAttribute("href")||e.setAttribute("xlink:show","new"))}),ll.A.addHook("afterSanitizeAttributes",function(e){if(e instanceof Element&&e.hasAttribute("href")){const t=e.getAttribute("href");(null==t?void 0:t.startsWith("/"))&&e.removeAttribute("href")}});var hl=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const ml=new(nl())({coerceTypes:"array",strict:!1,strictSchema:!1,formats:new Proxy({},{get:(e,t)=>!(t in e)||e[t]})});function gl(e,t,n){if(!t||!n||"aborted"===n)return{};const r=un(n.headers,"content-type")||"*/*",o=t.content;if(!o)return{};const s=y.sortBy(Object.keys(o),e=>y.sumBy(e,e=>"*"===e?1:0)),a=y.find(s,e=>null!==new RegExp("^"+e.replace(/\*/g,".*").replace(/;.*/g,"")).exec(r));return a?Object.assign({description:t.description,components:e.components},o[a].schema):{}}function fl(e,t){const{parsedUrl:n}=t,r=`${n.protocol}//${n.hostname}${n.pathname}`,o=e.serverMatcher.exec(r);return o?r.slice(o[0].length):n.pathname}function yl(e){return e?e.replace(/(<([^>]+)>)/gi,""):e}ol()(ml);class vl{constructor(e,t){const{request:n}=t;this.service=new bl(e.spec),this._spec=e.spec,this._opSpec=xl(e,n),this.operation=new wl(this._opSpec),this.request=new El(e.spec,this._opSpec,n),t.response&&this.updateWithResponse(t.response)}updateWithResponse(e){"aborted"!==e&&void 0!==e&&(this.response=new Cl(this._spec,this._opSpec,e))}matchedOperation(){return this._opSpec.matched}}hl([w.observable.ref],vl.prototype,"response",void 0),hl([w.action],vl.prototype,"updateWithResponse",null);class bl{constructor(e){var t,n,r;const{info:o}=e;this.name=o.title,this.shortName=null!==(t=o["x-httptoolkit-short-name"])&&void 0!==t?t:this.name.split(" ")[0],this.logoUrl=null===(n=o["x-logo"])||void 0===n?void 0:n.url,this.description=ul(o.description,{linkify:!0}),this.docsUrl=null===(r=null==e?void 0:e.externalDocs)||void 0===r?void 0:r.url}}function xl(e,t){const n=function(e,t){const{parsedUrl:n}=t,r=`${n.protocol}//${n.host}${n.pathname}`;if(e.serverMatcher.exec(r))for(let t of e.requestMatchers.keys())if(t.pathMatcher.exec(r)&&y.every(t.queryMatcher,(e,t)=>{const r=n.searchParams.getAll(t);return e?"string"==typeof e?y.includes(r,e):y.intersection(r,e).length===e.length:r.length>0}))return e.requestMatchers.get(t)}(e,t),{pathSpec:r,path:o}=n||{pathSpec:{},path:fl(e,t)},s=(un(t.headers,"x-http-method-override")||t.method).toLowerCase();let a=(0,vr.Jt)(r,s);return a||"head"!==s||(a=(0,vr.Jt)(r,"get")),{method:s,path:o,pathSpec:r,spec:a||{},matched:void 0!==a}}class wl{constructor(e){this.warnings=[],this.name=yl(ul(ks([()=>((0,vr.Jt)(e.spec,"summary","length")||1/0)<40,e.spec.summary],(0,vr.Jt)(e.spec,"operationId"),[()=>((0,vr.Jt)(e.spec,"description","length")||1/0)<40,e.spec.description],e.pathSpec.summary)||`${e.method.toUpperCase()} ${e.path}`,{linkify:!0}).__html),this.description=ul(ks([()=>(0,vr.Jt)(e.spec,"description")!==this.name,(0,vr.Jt)(e.spec,"description")],[()=>(0,vr.Jt)(e.spec,"summary")!==this.name,(0,vr.Jt)(e.spec,"summary")],e.pathSpec.description),{linkify:!0}),e.matched||this.warnings.push(`Unknown operation '${this.name}'.`),e.spec.deprecated&&this.warnings.push(`The '${this.name}' operation is deprecated.`),this.docsUrl=(0,vr.Jt)(e.spec,"externalDocs","url"),this.warnings=this.warnings.map(e=>yl(e))}}class El{constructor(e,t,n){this.parameters=function(e,t,n){if(!t)return[];const r=n.parsedUrl.searchParams;return y.uniqBy(t,e=>`${e.name}::${e.in}`).map(t=>{const o=t.schema,s={specParam:t,name:t.name,in:t.in,description:ul(t.description,{linkify:!0}),required:t.required||"path"===t.in,type:o&&o.type,defaultValue:o&&o.default,enum:o&&(o.enum||o.items&&o.items.enum),deprecated:t.deprecated||!1,warnings:[]};switch(t.in){case"query":let o=r.getAll(t.name);return s.type&&"boolean"===s.type&&t.allowEmptyValue&&(o=o.map(e=>""===e||e)),Object.assign(Object.assign({},s),{value:ks([()=>o.length>1,o],[()=>1===o.length,o[0]])});case"path":const a=new RegExp(e.replace(`{${t.name}}`,"([^/]+)").replace(/\{[^\}]+\}/g,"[^/]+")+"$","i").exec(n.parsedUrl.pathname);return Object.assign(Object.assign({},s),{value:a?a[1]:void 0});case"header":return Object.assign(Object.assign({},s),{value:n.headers[t.name.toLowerCase()]});default:return Object.assign(Object.assign({},s),{value:void 0})}}).map(e=>{const{specParam:t}=e,n=t.style||{query:"form",path:"simple",header:"simple",cookie:"form"}[t.in];if("array"===e.type&&(("simple"===n||"form"===n&&!1===t.explode)&&(e.value=y.isString(e.value)?e.value.split(","):e.value),"spaceDelimited"===n&&(e.value=y.isString(e.value)?e.value.split(" "):e.value),"pipeDelimited"===n&&(e.value=y.isString(e.value)?e.value.split("|"):e.value)),e.required&&void 0===e.value&&void 0===e.defaultValue&&e.warnings.push(`The '${e.name}' ${t.in} parameter is required.`),e.deprecated&&void 0!==e.value&&e.warnings.push(`The '${e.name}' ${t.in} parameter is deprecated.`),t.schema&&void 0!==e.value){const n={value:e.value};!ml.validate({type:"object",properties:{value:t.schema}},n)&&ml.errors&&e.warnings.push(...ml.errors.map(t=>al(n,t,t=>t.replace(/^\/value/,e.name)))),e.value=n.value}return Object.assign(Object.assign({},e),{warnings:e.warnings.map(e=>yl(e))})})}(t.path,(t.pathSpec.parameters||[]).concat(t.spec.parameters||[]),n),this.bodySchema=gl(e,t.spec.requestBody,n)}}class Cl{constructor(e,t,n){const r=t.spec.responses?t.spec.responses[n.statusCode.toString()]||t.spec.responses.default:void 0;this.description=(null==r?void 0:r.description)&&r.description!==n.statusMessage&&r.description.split(" ").filter(Boolean).length>2?ul(r.description,{linkify:!0}):void 0,this.bodySchema=gl(e,r,n)}}class Tl{constructor(e,t,n){var r,o;this._rpcMethod=n,this.service=new Sl(e),St(n)?(this.operation={name:"Unrecognized request to JSON-RPC API",warnings:[null!==(r=n.message)&&void 0!==r?r:n.toString()]},this.request={parameters:[]}):(this.operation=new Pl(n,null===(o=e.spec.externalDocs)||void 0===o?void 0:o["x-method-base-url"]),this.request=new Rl(n))}updateWithResponse(e){"aborted"===e||void 0===e||St(this._rpcMethod)||(this.response=new Ol(this._rpcMethod))}matchedOperation(){return this._rpcMethod&&!St(this._rpcMethod)}}class Sl{constructor(e){var t,n,r;this.name=e.spec.info.title,this.shortName=null!==(t=e.spec.info["x-httptoolkit-short-name"])&&void 0!==t?t:this.name.split(" ")[0],this.logoUrl=null===(n=e.spec.info["x-logo"])||void 0===n?void 0:n.url,this.description=ul(e.spec.info.description,{linkify:!0}),this.docsUrl=null===(r=e.spec.externalDocs)||void 0===r?void 0:r.url}}class Pl{constructor(e,t){var n,r;this.warnings=[];const{methodSpec:o}=e;this.name=o.name,this.description=ul([o.summary,o.description].filter(e=>!!e).join("\n\n"),{linkify:!0}),this.docsUrl=null!==(r=null===(n=o.externalDocs)||void 0===n?void 0:n.url)&&void 0!==r?r:t?t+o.name.toLowerCase():void 0,o.deprecated&&this.warnings.push(`The '${this.name}' method is deprecated.`)}}const kl=e=>e?e.charAt(0).toUpperCase()+e.slice(1):void 0;class Rl{constructor(e){const{methodSpec:t,parsedBody:n}=e;this.parameters=t.params.map((e,t)=>{var r,o;const s=e.schema;return{name:e.name,description:ul([e.summary,e.description,kl(null==s?void 0:s.title),...(null===(r=null==s?void 0:s.oneOf)||void 0===r?void 0:r.length)?["One of:",s.oneOf.map(e=>`* ${kl(e.title)}: ${e.description||e.type||"unknown"}`).join("\n")]:[]].filter(e=>!!e).join("\n\n"),{linkify:!0}),in:"body",required:!!e.required,deprecated:!!e.deprecated,type:null==s?void 0:s.type,value:n.params[t],defaultValue:null==s?void 0:s.default,enum:(null==s?void 0:s.enum)||(null===(o=null==s?void 0:s.items)||void 0===o?void 0:o.enum),warnings:[...e.deprecated?[`The '${e.name}' parameter is deprecated.`]:[],...e.required&&void 0===n.params[t]&&s&&void 0===s.default?[`The '${e.name}' parameter is required.`]:[]]}})}}class Ol{constructor(e){const t=e.methodSpec.result;this.description=ul(t.description,{linkify:!0}),this.bodySchema={type:"object",properties:{id:{type:"number"},jsonrpc:{type:"string",enum:["2.0"]},result:t.schema,error:{type:"object",properties:{code:{type:"number"},message:{type:"string"}}}},required:["id","jsonrpc"]}}}var Hl=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},Al=function(e,t,n,r){return new(n||(n=Promise))(function(o,s){function a(e){try{l(r.next(e))}catch(e){s(e)}}function i(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(a,i)}l((r=r.apply(e,t||[])).next())})};class $l{constructor(e,t){this.exchange=e,this.apiMetadata=void 0,this._parsedApiPromise=void 0,this._parsedApi=void 0,t.getApi(e.request).then((0,w.action)(e=>{this.apiMetadata=e})).catch(console.warn)}get parsedApi(){if(this.apiMetadata)return this._parsedApi||this._parsedApiPromise||(this._parsedApiPromise=(()=>Al(this,void 0,void 0,function*(){yield(0,w.when)(()=>this.exchange.isCompletedRequest());const e=this.apiMetadata,t=this.exchange.request;try{let n;if("openapi"===e.type)n=new vl(e,this.exchange);else{if("openrpc"!==e.type)throw console.log("Unknown API metadata type for host",t.parsedUrl.hostname),console.log(e),new kt(e,e=>e.type);n=yield function(e,t){return n=this,r=void 0,s=function*(){try{const n=yield t.request.body.waitForDecoding();if(!(null==n?void 0:n.length))throw new Error("No JSON-RPC request body");let r,o;try{if(r=JSON.parse(null==n?void 0:n.toString()),"2.0"!==r.jsonrpc)throw new Error(`JSON-RPC request body had bad 'jsonrpc' field: ${r.jsonrpc}`);o=r.method}catch(e){throw console.warn(e),new Error("Could not parse JSON-RPC request body")}const s=e.requestMatchers[o];if(!s)throw new Error(`Unrecognized JSON-RPC method name: ${o}`);return new Tl(e,t,{methodSpec:s,parsedBody:r})}catch(n){return new Tl(e,t,n)}},new((o=void 0)||(o=Promise))(function(e,t){function a(e){try{l(s.next(e))}catch(e){t(e)}}function i(e){try{l(s.throw(e))}catch(e){t(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o(function(e){e(n)})).then(a,i)}l((s=s.apply(n,r||[])).next())});var n,r,o,s}(e,this.exchange)}return(0,w.runInAction)(()=>{this._parsedApi=n}),this.exchange.isCompletedExchange()||(0,w.when)(()=>this.exchange.isCompletedExchange()).then(()=>Al(this,void 0,void 0,function*(){this.exchange.response&&n.updateWithResponse(this.exchange.response)})),n}catch(e){throw f(e),e}}))()),this._parsedApi}}Hl([w.observable.ref],$l.prototype,"apiMetadata",void 0),Hl([w.observable.ref],$l.prototype,"_parsedApi",void 0);var Il=n(12875),ql=n.n(Il),jl=n(37007);const Dl=Symbol("encoded-body-test");function Ml(e,t){return!(0===t.length||1===t.length&&"identity"===t[0]||0===e.length)}var Fl=n(48287).Buffer,Bl=function(e,t,n,r){return new(n||(n=Promise))(function(o,s){function a(e){try{l(r.next(e))}catch(e){s(e)}}function i(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(a,i)}l((r=r.apply(e,t||[])).next())})};const Ll=new Worker(new URL(n.p+n.u("src_services_ui-worker_ts"),n.b));let Nl=0;const Ul=new jl.EventEmitter;function Wl(e,t=[]){const n=Nl++;return new Promise((r,o)=>{Ll.postMessage(Object.assign({id:n},e),t),Ul.once(n.toString(),e=>{e.error?o(ql()(e.error)):r(e)})})}function zl(e,t){return Bl(this,void 0,void 0,function*(){if(!Ml(e,t))return{encoded:e,decoded:e};try{const n=yield Wl({type:"decode",buffer:e.buffer,encodings:t},[e.buffer]);return{encoded:Fl.from(n.inputBuffer),decoded:Fl.from(n.decodedBuffer)}}catch(e){throw e.inputBuffer&&(e.inputBuffer=Fl.from(e.inputBuffer)),e}})}function _l(e,t){return Bl(this,void 0,void 0,function*(){return(yield Wl({type:"build-api",spec:e,baseUrlOverrides:t})).api})}function Vl(e,t){return Bl(this,void 0,void 0,function*(){return(yield Wl({type:"validate-pkcs12",buffer:e,passphrase:t})).result})}function Kl(e,t,n){return Bl(this,void 0,void 0,function*(){return(yield Wl({type:"format",buffer:e.buffer,format:t,headers:n})).formatted})}Ll.addEventListener("message",e=>{Ul.emit(e.data.id.toString(),e.data)});var Jl=n(48287).Buffer,Ql=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};class Gl{constructor(e,t){if(this._encodedByteLength=0,this._bodyState="completed",this._contentEncoding=fn(pn(t,"content-encoding")),"streaming"in e)return this._bodyState="streaming",this._encodedChunks=[],void(this._encodedByteLength=0);this._bodyState="completed","body"in e&&e.body?Jl.isBuffer(e.body)?(this._encodedChunks=[e.body],this._encodedByteLength=e.body.byteLength):"buffer"in e.body?(this._encodedChunks=[e.body.buffer],this._encodedByteLength=e.body.buffer.byteLength):(this._encodedChunks=void 0,this._encodedByteLength=e.body.encodedLength,this._decoded=e.body.decoded):(this._encodedChunks=[],this._encodedByteLength=0)}static streaming(e){return new Gl({streaming:!0},e)}get encodedByteLength(){return this._encodedByteLength}get encodedData(){if(this._decodingError)return this._encodedRecovered}isComplete(){return"streaming"!==this._bodyState}isAborted(){return"aborted"===this._bodyState}appendChunk(e){if("streaming"!==this._bodyState)throw new Error(`Cannot append body chunk: body is in '${this._bodyState}' state`);this._encodedChunks.push(e),this._encodedByteLength+=e.byteLength}markBodyComplete(){if("streaming"!==this._bodyState)throw new Error(`Cannot mark body complete: body is in '${this._bodyState}' state`);this._bodyState="completed"}markBodyAborted(){if("streaming"!==this._bodyState)throw new Error(`Cannot mark body aborted: body is in '${this._bodyState}' state`);this._bodyState="aborted"}get decodedData(){return this._decoded||this.startDecodingAsync(),this._decoded}isPending(){return!this._decoded&&!this._decodingError}isDecoded(){return this._decoded||this.startDecodingAsync(),!!this._decoded}isFailed(){return!!this._decodingError}get decodingError(){return this._decodingError}startDecodingAsync(){this._decodedPromise||this.waitForDecoding().catch(()=>{})}waitForDecoding(){return this._decoded?Promise.resolve(this._decoded):this._decodingError?Promise.resolve(void 0):(this._decodedPromise||(this._decodedPromise=this._runDecode()),this._decodedPromise)}_runDecode(){return e=this,t=void 0,r=function*(){var e;"streaming"===this._bodyState&&(yield(0,w.when)(()=>"streaming"!==this._bodyState));const t=null!==(e=this._encodedChunks)&&void 0!==e?e:[],n=0===t.length?Yl:1===t.length?t[0]:Jl.concat(t);(0,w.runInAction)(()=>{this._encodedChunks=void 0});try{const{decoded:e}=Ml(n,this._contentEncoding)?yield zl(n,this._contentEncoding):{decoded:n};return(0,w.runInAction)(()=>{this._decoded=e}),e}catch(e){return console.log("Body decoding failed",e),void(0,w.runInAction)(()=>{e.inputBuffer&&(this._encodedRecovered=e.inputBuffer),this._decodingError=e})}finally{this._decodedPromise=void 0}},new((n=void 0)||(n=Promise))(function(o,s){function a(e){try{l(r.next(e))}catch(e){s(e)}}function i(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(a,i)}l((r=r.apply(e,t||[])).next())});var e,t,n,r}cleanup(){this._decoded=Yl,this._encodedChunks=void 0,this._encodedByteLength=0,this._encodedRecovered=void 0,this._decodingError=void 0,this._decodedPromise=void 0,this._bodyState="completed"}}Ql([w.observable],Gl.prototype,"_encodedByteLength",void 0),Ql([w.observable.ref],Gl.prototype,"_encodedRecovered",void 0),Ql([w.observable],Gl.prototype,"_bodyState",void 0),Ql([w.action],Gl.prototype,"appendChunk",null),Ql([w.action],Gl.prototype,"markBodyComplete",null),Ql([w.action],Gl.prototype,"markBodyAborted",null),Ql([w.observable.ref],Gl.prototype,"_decoded",void 0),Ql([w.observable.ref],Gl.prototype,"_decodingError",void 0);const Yl=Jl.from([]);var Xl=n(49644),Zl=n.n(Xl),ec=n(48287).Buffer,tc=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};class nc{constructor(e,t,n,r={}){var o;this.getHeaders=n,this.options=r,this.updateEncodedBody=(0,w.action)(()=>{if(this._throttledEncodingDeferred)return this._throttledEncodingDeferred.promise;const e=this._throttledEncodingDeferred=de();return this._runThrottledEncodingPromise(),e.promise}),this._runThrottledEncodingPromise=y.throttle(()=>{return e=this,t=void 0,r=function*(){if(!this._throttledEncodingDeferred)throw new Error("_runThrottledEncodingPromise should not be called without a queued promise target");const e=this._throttledEncodingDeferred;(0,w.runInAction)(()=>{this._encodingPromise=e.promise,this._throttledEncodingDeferred=void 0});const t=this.contentEncodings;try{const n=yield function(e,t){return Bl(this,void 0,void 0,function*(){if(0===t.length||1===t.length&&"identity"===t[0])return e;const n=yield Wl({type:"encode",buffer:e.buffer,encodings:t});return Fl.from(n.encodedBuffer)})}(this._decodedBody,t);(0,w.runInAction)(()=>{this._encodingPromise===e.promise&&(this._lastEncodedBody=this._lastEncodingResult=n)}),e.resolve(n)}catch(t){(0,w.runInAction)(()=>{this._encodingPromise===e.promise&&(this._lastEncodingResult=t)}),e.reject(t)}},new((n=void 0)||(n=Promise))(function(o,s){function a(e){try{l(r.next(e))}catch(e){s(e)}}function i(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(a,i)}l((r=r.apply(e,t||[])).next())});var e,t,n,r},null!==(o=this.options.throttleDuration)&&void 0!==o?o:500,{leading:!0,trailing:!0}),this._decodedBody=e,t?(this._lastEncodedBody=this._lastEncodingResult=t,this._encodingPromise=le(Promise.resolve(t))):(this._lastEncodedBody=this._lastEncodingResult=void 0,this._encodingPromise=this.updateEncodedBody()),(0,w.reaction)(()=>this._decodedBody,()=>this.updateEncodedBody()),(0,w.reaction)(()=>this.contentEncodings,()=>this.updateEncodedBody())}get contentEncodings(){return fn(pn(this.getHeaders(),"content-encoding"))}updateDecodedBody(e){this._decodedBody=e}get latestEncodedLength(){var e;return null===(e=this._lastEncodedBody)||void 0===e?void 0:e.byteLength}get latestEncodingResult(){return ec.isBuffer(this._lastEncodingResult)?{state:"fulfilled",value:this._lastEncodingResult}:void 0===this._lastEncodingResult?{state:"pending"}:{state:"rejected",value:this._lastEncodingResult}}get encodingPromise(){var e,t;return null!==(t=null===(e=this._throttledEncodingDeferred)||void 0===e?void 0:e.promise)&&void 0!==t?t:this._encodingPromise}get encodingBestEffortPromise(){return this.encodingPromise.catch(()=>this._decodedBody)}get decoded(){return this._decodedBody}}tc([w.observable.ref],nc.prototype,"_decodedBody",void 0),tc([w.observable.ref],nc.prototype,"_lastEncodedBody",void 0),tc([w.observable.ref],nc.prototype,"_lastEncodingResult",void 0),tc([w.observable.ref],nc.prototype,"_encodingPromise",void 0),tc([w.observable.ref],nc.prototype,"_throttledEncodingDeferred",void 0),tc([w.computed.struct],nc.prototype,"contentEncodings",null),tc([w.action],nc.prototype,"updateDecodedBody",null),tc([w.computed],nc.prototype,"latestEncodedLength",null),tc([w.computed],nc.prototype,"latestEncodingResult",null);var rc=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},oc=function(e,t,n,r){return new(n||(n=Promise))(function(o,s){function a(e){try{l(r.next(e))}catch(e){s(e)}}function i(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(a,i)}l((r=r.apply(e,t||[])).next())})};function sc(e){return zl(e.body.buffer,fn(e.headers["content-encoding"])).catch(e=>{console.log("Breakpoint body decoding failed",e);const t=Zl()`
            HTTP TOOLKIT ERROR: Could not decode body, \
            check content-encoding
        `;return{encoded:Ut(t),decoded:Ut(t)}})}class ac{constructor(e,t,n){this.resume=()=>oc(this,void 0,void 0,function*(){var e;this.deferred.resolve(Object.assign(Object.assign(Object.assign({},this.resultMetadata),je(yield Fe,"^1.9.0")?{rawBody:yield this.editableBody.encodingBestEffortPromise}:{body:yield this.editableBody.encodingBestEffortPromise}),{headers:(e=cn(this.resultMetadata.rawHeaders),y.omitBy(e,(e,t)=>t.startsWith(":")))}))}),this.deferred=oe(),this.resultMetadata=e,this.editableBody=new nc(t,n,()=>this.resultMetadata.rawHeaders),(0,w.observe)(this.editableBody,"latestEncodedLength",({oldValue:e,newValue:t})=>{var n;const{rawHeaders:r}=this.resultMetadata;parseInt(un(r,"content-length")||"",10)===e&&this.updateMetadata({rawHeaders:gn(r,{"Content-Length":null!==(n=null==t?void 0:t.toString())&&void 0!==n?n:"0"})})});let r=un(this.resultMetadata.rawHeaders,"content-length");(0,w.reaction)(()=>un(this.resultMetadata.rawHeaders,"content-length"),e=>{var t,n;if(void 0===r&&""===e){const{rawHeaders:e}=this.resultMetadata;this.updateMetadata({rawHeaders:gn(e,{"Content-Length":null!==(n=null===(t=this.editableBody.latestEncodedLength)||void 0===t?void 0:t.toString())&&void 0!==n?n:"0"})})}r=e})}get inProgressResult(){return Object.assign({body:this.editableBody},this.resultMetadata)}updateMetadata(e){this.resultMetadata=Object.assign(Object.assign({},this.resultMetadata),y.omit(e,"body","rawBody"))}updateBody(e){this.editableBody.updateDecodedBody(e)}waitForCompletedResult(){return this.deferred.promise}reject(e){this.deferred.reject(e)}}rc([w.observable.shallow],ac.prototype,"resultMetadata",void 0),rc([w.action.bound],ac.prototype,"updateMetadata",null),rc([w.action.bound],ac.prototype,"updateBody",null);class ic extends ac{constructor(){super(...arguments),this.close=()=>{this.deferred.resolve({response:"close"})}}respondDirectly(e){this.deferred.resolve({response:e})}}class lc extends ac{constructor(){super(...arguments),this.close=()=>{this.deferred.resolve("close")}}}class cc extends Ts{constructor(e,t){super(),this.downstream=e,this.apiStore=t,this._apiDetector=new $l(this,t)}get upstream(){return this.downstream.upstream}get original(){return this.downstream.original}get transformed(){return this.downstream.transformed}get id(){return this.downstream.id}get matchedRule(){return this.downstream.matchedRule}get tags(){return this.downstream.tags}get timingEvents(){return this.downstream.timingEvents}get api(){return this._apiDetector.parsedApi}get apiSpec(){return this._apiDetector.apiMetadata}isHttp(){return!0}isCompletedRequest(){return this.downstream.isCompletedRequest()}isCompletedExchange(){return!!this.response}isSuccessfulExchange(){return this.isCompletedExchange()&&"aborted"!==this.response}hasRequestBody(){return this.isCompletedRequest()&&this.request.body.encodedByteLength>0}hasResponseBody(){return this.isSuccessfulExchange()&&this.response.body.encodedByteLength>0}get pinned(){return this.downstream.pinned}set pinned(e){this.downstream.pinned=e}get hideErrors(){return this.downstream.hideErrors}set hideErrors(e){this.downstream.hideErrors=e}}class dc extends cc{constructor(e,t){super(e,t)}get httpVersion(){return this.downstream.httpVersion}get request(){return this.downstream.request}get response(){var e,t;return null!==(t=null===(e=this.upstream)||void 0===e?void 0:e.response)&&void 0!==t?t:this.downstream.response}get abortMessage(){var e,t;return null!==(t=null===(e=this.upstream)||void 0===e?void 0:e.abortMessage)&&void 0!==t?t:this.downstream.abortMessage}}class uc extends cc{constructor(e,t){super(e,t)}get httpVersion(){var e,t,n;return null!==(t=null===(e=this.upstream)||void 0===e?void 0:e.httpVersion)&&void 0!==t?t:null===(n=this.downstream)||void 0===n?void 0:n.httpVersion}get request(){var e,t;return null!==(t=null===(e=this.upstream)||void 0===e?void 0:e.request)&&void 0!==t?t:this.downstream.request}get response(){return this.downstream.response}get abortMessage(){return this.downstream.abortMessage}get api(){var e;return null===(e=this.upstream)||void 0===e?void 0:e.api}}var pc=n(48287).Buffer,hc=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};class mc extends cc{constructor(e,t){super(e,t),this.computedKeepAlive={dispose:(0,w.autorun)(()=>{this.request,this.response})}}get upstream(){return this}get wasRequestTransformed(){if(!this.upstreamRequestData)return!1;const{url:e,method:t,rawHeaders:n,body:r}=this.upstreamRequestData;return!!(e||t||n||r)}get wasResponseTransformed(){if(!this.upstreamResponseData)return!1;const e=this.downstream.response;if(void 0===e)return!1;if("aborted"===e)return"aborted"!==this.upstreamResponseData;if("aborted"===this.upstreamResponseData)return!0;const{statusCode:t,statusMessage:n,rawHeaders:r,body:o}=this.upstreamResponseData;return!!(t||n||r||o)}get wasTransformed(){return this.wasRequestTransformed||this.wasResponseTransformed}get httpVersion(){return yc(this.request.httpVersion)}get request(){const e=this.downstream.request;if(!this.upstreamRequestData)return e;const{url:t,method:n,rawHeaders:r,body:o}=this.upstreamRequestData,s=r?cn(r):e.headers;return{id:this.id,matchedRuleId:e.matchedRuleId,remoteIpAddress:e.remoteIpAddress,remotePort:e.remotePort,timingEvents:this.timingEvents,tags:e.tags,cache:new hr,parsedUrl:t||e.parsedUrl,url:(null==t?void 0:t.toString())||e.url,method:n||e.method,headers:s,rawHeaders:r||e.rawHeaders,body:o||e.body,source:Es(un(s,"user-agent")),contentType:Bn(un(s,"content-type"))||"text",httpVersion:this.upstreamHttpVersion||e.httpVersion,trailers:e.trailers,rawTrailers:e.rawTrailers}}get response(){const e=this.downstream.response;if(!this.upstreamResponseData)return e;if("aborted"===this.upstreamResponseData)return"aborted";if("aborted"!==e&&e){const{statusCode:t,statusMessage:n,rawHeaders:r,body:o}=this.upstreamResponseData,s=r?cn(r):e.headers;return{id:this.id,timingEvents:this.timingEvents,tags:this.tags,cache:new hr,contentType:Bn(un(s,"content-type"))||"text",statusCode:t||e.statusCode,statusMessage:n||"",rawHeaders:r||e.rawHeaders,headers:s,body:o||e.body||new Gl({body:pc.alloc(0)},s),trailers:e.trailers||{},rawTrailers:e.rawTrailers||[]}}{if(e&&!this.wasResponseTransformed)return"aborted";const{statusCode:t,statusMessage:n,rawHeaders:r,body:o}=this.upstreamResponseData;return{id:this.id,timingEvents:this.timingEvents,tags:this.tags,cache:new hr,contentType:Bn(un(r,"content-type"))||"text",statusCode:t,statusMessage:n||"",rawHeaders:r,headers:cn(r),body:o||new Gl({body:pc.alloc(0)},r),trailers:{},rawTrailers:[]}}}updateWithRequestHead(e){const t=this.downstream.request,n=(e=>{const t=e.port?`:${e.port}`:"";return Object.assign(new URL(`${e.protocol}://${e.hostname}${t}${e.path}`),{parseable:!0})})(e),r=t.rawHeaders.filter(([e])=>"proxy-connection"!==e.toLowerCase()),o=y.isEqual(dn(e.rawHeaders),dn(r))?void 0:e.rawHeaders,s=n.toString()!==this.downstream.request.parsedUrl.toString()?n:void 0,a=e.method!==this.downstream.request.method?e.method:void 0;this.upstreamRequestData={url:s,method:a,rawHeaders:o}}updateWithResponseHead(e){this.upstreamResponseData={statusCode:e.statusCode,statusMessage:e.statusMessage||"",rawHeaders:e.rawHeaders},this.upstreamHttpVersion=e.httpVersion}updateWithRequestBody(e){var t;if(!e.overridden)return;const n=null!==(t=this.upstreamRequestData.rawHeaders)&&void 0!==t?t:this.downstream.request.rawHeaders;this.upstreamRequestData.body=new Gl({body:_t(e.rawBody)},n)}updateWithResponseBody(e){var t;if(!e.overridden||"aborted"===this.upstreamResponseData)return;const n=(null===(t=this.upstreamResponseData)||void 0===t?void 0:t.rawHeaders)||this.downstream.isSuccessfulExchange()&&this.downstream.response.rawHeaders||[];this.upstreamResponseData.body=new Gl({body:_t(e.rawBody)},n)}updateAfterDownstreamResponse(e){var t;this.upstreamResponseData&&"aborted"!==this.upstreamResponseData&&"aborted"!==e&&(this.upstreamResponseData.statusCode===e.statusCode&&delete this.upstreamResponseData.statusCode,this.upstreamResponseData.statusMessage===e.statusMessage&&delete this.upstreamResponseData.statusMessage,y.isEqual(dn(null!==(t=this.upstreamResponseData.rawHeaders)&&void 0!==t?t:[]),dn(e.rawHeaders))&&delete this.upstreamResponseData.rawHeaders)}updateFromUpstreamAbort(e){var t,n;this.upstreamResponseData="aborted";const{error:r}=e;this.upstreamAbortMessage=null!==(t=r.message)&&void 0!==t?t:"Unknown error",r.code&&!(null===(n=this.upstreamAbortMessage)||void 0===n?void 0:n.includes(r.code))&&(this.upstreamAbortMessage=`${r.code}: ${this.upstreamAbortMessage}`)}get abortMessage(){return"aborted"===this.upstreamResponseData?this.upstreamAbortMessage:this.wasResponseTransformed?void 0:this.downstream.abortMessage}cleanup(){var e,t;this.computedKeepAlive.dispose(),this.request.cache.clear(),this.request.body.cleanup(),this.isSuccessfulExchange()&&(null===(e=this.response)||void 0===e||e.cache.clear(),null===(t=this.response)||void 0===t||t.body.cleanup())}}hc([w.observable],mc.prototype,"upstreamHttpVersion",void 0),hc([w.observable],mc.prototype,"upstreamRequestData",void 0),hc([w.observable],mc.prototype,"upstreamResponseData",void 0),hc([w.observable],mc.prototype,"upstreamAbortMessage",void 0),hc([w.computed],mc.prototype,"wasRequestTransformed",null),hc([w.computed],mc.prototype,"wasResponseTransformed",null),hc([w.computed],mc.prototype,"request",null),hc([w.computed],mc.prototype,"response",null);var gc=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},fc=function(e,t,n,r){return new(n||(n=Promise))(function(o,s){function a(e){try{l(r.next(e))}catch(e){s(e)}}function i(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(a,i)}l((r=r.apply(e,t||[])).next())})};function yc(e){return"0.9"===e?.9:"1.0"===e||"1"===e?1:"1.1"===e?1.1:"2.0"===e||"2"===e?2:"3.0"===e||"3"===e?3:(console.log("Unknown HTTP version:",e),1.1)}function vc(e){try{return Object.assign(new URL(e),{parseable:!0})}catch(t){return console.log("Unparseable URL:",e),bc}}const bc=Object.assign(new URL("unknown://unparseable.invalid/"),{parseable:!1});function xc(e){try{return Object.assign(e,{parsedUrl:e.url?vc(e.url):bc,source:e.tags.includes("httptoolkit:manually-sent-request")?ws:Es(e.headers["user-agent"]),body:new Gl(e,e.headers),contentType:Bn(un(e.headers,"content-type"))||"text",cache:new hr})}catch(t){throw console.log(`Failed to build request for ${e.url}`),t}}class wc extends Ts{constructor(e,t){super(),this.apiStore=t,this.downstream=this,this.computedKeepAlive={dispose:(0,w.autorun)(()=>{this.original,this.transformed})},this.hideErrors=!1,this.cleanupListeners=[],this.request=xc(e),this.timingEvents=e.timingEvents,this.tags=this.request.tags,this.id=this.request.id,this.searchIndex=[this.request.url,this.request.parsedUrl.protocol+"//"+this.request.parsedUrl.hostname+this.request.parsedUrl.pathname+this.request.parsedUrl.search].concat(...y.map(this.request.headers,(e,t)=>`${t}: ${e}`)).concat(...y.map(this.request.trailers,(e,t)=>`${t}: ${e}`)).concat(this.request.method).join("\n").toLowerCase(),this._apiDetector=new $l(this,t)}get original(){return this.upstream?this.upstream.wasRequestTransformed?new dc(this.downstream,this.apiStore):this.upstream:this}get transformed(){var e;return this.upstream?(null===(e=this.upstream)||void 0===e?void 0:e.wasResponseTransformed)?new uc(this.downstream,this.apiStore):this.upstream:this}get wasTransformed(){return!!this.upstream&&this.upstream.wasTransformed}get httpVersion(){return yc(this.request.httpVersion)}isHttp(){return!0}isCompletedRequest(){return void 0!==this.matchedRule}isCompletedExchange(){return!!this.response}isSuccessfulExchange(){return this.isCompletedExchange()&&"aborted"!==this.response}hasRequestBody(){return this.isCompletedRequest()&&this.request.body.encodedByteLength>0}hasResponseBody(){return this.isSuccessfulExchange()&&this.response.body.encodedByteLength>0}updateFromCompletedRequest(e,t){if(e.body instanceof Gl)throw new Error("Can't update from already-processed request");this.request.body=new Gl(e,e.headers),this.matchedRule=!!t&&{id:t.id,stepTypes:t.steps.map(Hi)},Object.assign(this.timingEvents,e.timingEvents),this.tags=y.union(this.tags,e.tags)}updateFromUpstreamRequestHead(e){this.upstream||(this.upstream=new mc(this,this.apiStore)),this.upstream.updateWithRequestHead(e)}updateFromUpstreamRequestBody(e){this.upstream||(this.upstream=new mc(this,this.apiStore)),this.upstream.updateWithRequestBody(e)}markAborted(e){var t,n,r,o;this.response="aborted",this.searchIndex+="\naborted",Object.assign(this.timingEvents,e.timingEvents),this.tags=y.union(this.tags,e.tags),"error"in e&&(null===(t=e.error)||void 0===t?void 0:t.message)&&(this.abortMessage=null!==(n=e.error.message)&&void 0!==n?n:"Unknown error",(null===(r=e.error)||void 0===r?void 0:r.code)&&!(null===(o=this.abortMessage)||void 0===o?void 0:o.includes(e.error.code))&&(this.abortMessage=`${e.error.code}: ${this.abortMessage}`)),this.requestBreakpoint&&(this.requestBreakpoint.reject(new Error("Request aborted whilst breakpointed at request")),this._requestBreakpoint=void 0),this.responseBreakpoint&&(this.responseBreakpoint.reject(new Error("Request aborted whilst breakpointed at response")),this._responseBreakpoint=void 0)}setResponse(e){var t;this.response=function(e){return Object.assign(e,{body:new Gl(e,e.headers),contentType:Bn(un(e.headers,"content-type"))||"text",cache:new hr})}(e),Object.assign(this.timingEvents,e.timingEvents),this.tags=y.union(this.tags,e.tags),this.searchIndex=[this.searchIndex,e.statusCode.toString(),e.statusMessage.toString(),...y.map(e.headers,(e,t)=>`${t}: ${e}`),...y.map(e.trailers,(e,t)=>`${t}: ${e}`)].join("\n").toLowerCase(),null===(t=this.upstream)||void 0===t||t.updateAfterDownstreamResponse(this.response)}updateFromUpstreamResponseHead(e){this.upstream||(this.upstream=new mc(this,this.apiStore)),this.upstream.updateWithResponseHead(e)}updateFromUpstreamResponseBody(e){this.upstream||(this.upstream=new mc(this,this.apiStore)),this.upstream.updateWithResponseBody(e)}updateFromUpstreamAbort(e){this.upstream||(this.upstream=new mc(this,this.apiStore)),this.upstream.updateFromUpstreamAbort(e)}onCleanup(e){this.cleanupListeners.push(e)}cleanup(){this.computedKeepAlive.dispose(),this.request.cache.clear(),this.request.body.cleanup(),this.isSuccessfulExchange()&&(this.response.cache.clear(),this.response.body.cleanup()),this.upstream&&this.upstream.cleanup(),this.cleanupListeners.forEach(e=>e()),this.cleanupListeners=[]}get api(){return this._apiDetector.parsedApi}get apiSpec(){return this._apiDetector.apiMetadata}get requestBreakpoint(){return this._requestBreakpoint}get responseBreakpoint(){return this._responseBreakpoint}get isBreakpointed(){return this.requestBreakpoint||this.responseBreakpoint}triggerRequestBreakpoint(e){return fc(this,void 0,void 0,function*(){const t=yield function(e){return oc(this,void 0,void 0,function*(){var t;const{encoded:n,decoded:r}=yield sc(e);return(0,w.observable)(e.headers),new ic({method:e.method,url:e.url,rawHeaders:null!==(t=e.rawHeaders)&&void 0!==t?t:ln(e.headers)},r,n)})}(e);(0,w.runInAction)(()=>{this._requestBreakpoint=t});const n=yield t.waitForCompletedResult();return this._requestBreakpoint===t&&(0,w.runInAction)(()=>{this._requestBreakpoint=void 0}),n})}triggerResponseBreakpoint(e){return fc(this,void 0,void 0,function*(){const t=yield function(e){return oc(this,void 0,void 0,function*(){var t;const n=rn(e.statusCode)===e.statusMessage?void 0:e.statusMessage,{encoded:r,decoded:o}=yield sc(e);return new lc({statusCode:e.statusCode,statusMessage:n,rawHeaders:null!==(t=e.rawHeaders)&&void 0!==t?t:ln(e.headers)},o,r)})}(e);(0,w.runInAction)(()=>{this._responseBreakpoint=t});const n=yield t.waitForCompletedResult();return this._responseBreakpoint===t&&(0,w.runInAction)(()=>{this._responseBreakpoint=void 0}),n})}respondToBreakpointedRequest(){var e;this._responseBreakpoint=(e=this.httpVersion,new lc({statusCode:200,statusMessage:void 0,rawHeaders:e>=2?[[":status","200"]]:[]},Ut(""),Ut("")));const t=this.requestBreakpoint;this._requestBreakpoint=void 0,this._responseBreakpoint.waitForCompletedResult().then((0,w.action)(e=>{t.respondDirectly(e),this._responseBreakpoint=void 0}))}}gc([w.observable],wc.prototype,"upstream",void 0),gc([w.computed],wc.prototype,"original",null),gc([w.computed],wc.prototype,"transformed",null),gc([w.computed],wc.prototype,"wasTransformed",null),gc([w.observable],wc.prototype,"matchedRule",void 0),gc([w.observable],wc.prototype,"tags",void 0),gc([w.observable],wc.prototype,"hideErrors",void 0),gc([w.computed],wc.prototype,"httpVersion",null),gc([w.observable],wc.prototype,"timingEvents",void 0),gc([w.observable.ref],wc.prototype,"response",void 0),gc([w.observable],wc.prototype,"abortMessage",void 0),gc([w.observable.ref],wc.prototype,"_requestBreakpoint",void 0),gc([w.observable.ref],wc.prototype,"_responseBreakpoint",void 0),gc([w.computed],wc.prototype,"isBreakpointed",null),gc([w.action.bound],wc.prototype,"respondToBreakpointedRequest",null);class Ec extends dc{constructor(e,t){super(e,t)}isWebSocket(){return!0}get upstream(){return this.downstream.upstream}get original(){return this}get transformed(){return this.downstream.transformed}get wasAccepted(){return this.downstream.wasAccepted}get selectedSubprotocol(){return this.downstream.selectedSubprotocol}get messages(){return this.downstream.messages}get closeState(){return this.downstream.closeState}}class Cc extends uc{constructor(e,t){super(e,t)}isWebSocket(){return!0}get upstream(){return this.downstream.upstream}get original(){return this.downstream.original}get transformed(){return this}get wasAccepted(){return this.downstream.wasAccepted}get selectedSubprotocol(){return this.downstream.selectedSubprotocol}get messages(){return this.downstream.messages}get closeState(){return this.downstream.closeState}}class Tc extends mc{constructor(e,t){super(e,t)}isWebSocket(){return!0}get upstream(){return this}get original(){return this.downstream.original}get transformed(){return this.downstream.transformed}get wasAccepted(){return this.downstream.wasAccepted}get selectedSubprotocol(){return this.downstream.selectedSubprotocol}get messages(){return this.downstream.messages}get closeState(){return this.downstream.closeState}}var Sc=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};class Pc extends wc{constructor(e,t){super(e,t),this.accepted=!1,this.messages=[],this.searchIndex+="\nwebsocket"}isWebSocket(){return!0}get original(){return this.upstream?this.upstream.wasRequestTransformed?new Ec(this.downstream,this.apiStore):this.upstream:this}get transformed(){var e;return this.upstream?(null===(e=this.upstream)||void 0===e?void 0:e.wasResponseTransformed)?new Cc(this.downstream,this.apiStore):this.upstream:this}get wasAccepted(){return this.accepted}get selectedSubprotocol(){return this.subprotocol}setAccepted(e){const t=e.headers["sec-websocket-protocol"];y.isString(t)&&(this.subprotocol=t),this.accepted=!0,Object.assign(this.timingEvents,e.timingEvents)}addMessage(e){this.messages.push(new fr(e,this.messages.length,this.selectedSubprotocol))}markClosed(e){this.closeData=e,Object.assign(this.timingEvents,e.timingEvents)}get closeState(){return this.closeData}markAborted(e){if(!this.wasAccepted)return super.markAborted(e);this.closeData="aborted",this.searchIndex+="\naborted",Object.assign(this.timingEvents,e.timingEvents),this.tags=y.union(this.tags,e.tags)}updateWithUpstreamConnect(e){this.upstream||(this.upstream=new Tc(this,this.apiStore)),this.upstream.updateWithRequestHead(e)}clearMessages(){this.messages.forEach(e=>e.cleanup()),this.messages.length=0}cleanup(){super.cleanup(),this.clearMessages()}}function kc(e,t,n){let r,o=n,s=0,a=!0,i=0,l=n;for(r=0;r<e.length&&o<=t.length&&a;r++){const n=e[r].match(t,o);if(!n)return;a="full"===n.type,n.consumed>0&&(i=r,l=o),o+=n.consumed,s+=a?n.consumed:0}return{type:r===e.length&&a?"full":"partial",fullyConsumed:s,partiallyConsumed:o-n,partsMatched:r,lastConsumingPartSyntaxIndex:i,lastConsumingPartStringIndex:l}}function Rc(e,t,n,r){const o=e.map(({key:e,syntax:r})=>({key:e,syntax:r,match:kc(r,t,n)})).filter(({match:e})=>!!e&&n+e.partiallyConsumed===t.length),[s,a]=y.partition(o,({match:e})=>"full"===e.type);if(s.length)return y.flatMap(s,({key:e,syntax:n,match:o})=>{const s=n.length-1,a=s===o.lastConsumingPartSyntaxIndex?o.lastConsumingPartStringIndex:t.length;return n[s].getSuggestions(t,a,r.context).map(t=>({key:e,suggestion:t}))});const i=y.max(a.map(({match:e})=>e.partsMatched)),l=a.filter(e=>e.match.partsMatched===i),c=y.flatMap(l,({key:e,syntax:n,match:o})=>{const s=o.lastConsumingPartSyntaxIndex,a=o.lastConsumingPartStringIndex,i=n[s],l=s===n.length-1;return i.getSuggestions(t,a,r.context).map(t=>({key:e,syntax:n,syntaxPartIndex:s,suggestion:Object.assign(Object.assign({},t),{matchType:"full"===t.matchType?l?"full":"partial":t.matchType})}))});if(1!==c.length||!1===r.canExtend)return c.map(({key:e,suggestion:t})=>({key:e,suggestion:t}));const{key:d,syntax:u,suggestion:p}=c[0];let h,m=c[0].syntaxPartIndex+1,g=[p];for(;1===g.length&&m<u.length;){const e=g[0];h||(h="template"===e.matchType?e:void 0);const n=Oc(t,e),o=u[m].getSuggestions(n,n.length,r.context);if(h&&o.length>1)break;if(g=o.map(t=>({value:e.value+t.value,showAs:e.showAs+t.showAs,index:e.index,matchType:t.matchType})),g.some(e=>"partial"===e.matchType))break;m+=1}const f=m===u.length;return h?[{key:d,suggestion:Object.assign(Object.assign({},h),{showAs:g[0].showAs})}]:g.map(e=>({key:d,suggestion:Object.assign(Object.assign({},e),{matchType:"full"!==e.matchType||f?e.matchType:"partial"})}))}function Oc(e,t){return e.slice(0,t.index)+t.value}function Hc(e,t){return t?[e.charCodeAt(0),t.charCodeAt(0)]:[e.charCodeAt(0),e.charCodeAt(0)]}Sc([w.computed],Pc.prototype,"original",null),Sc([w.computed],Pc.prototype,"transformed",null),Sc([w.observable],Pc.prototype,"accepted",void 0),Sc([w.observable],Pc.prototype,"subprotocol",void 0),Sc([w.action],Pc.prototype,"setAccepted",null),Sc([w.observable],Pc.prototype,"messages",void 0),Sc([w.action],Pc.prototype,"addMessage",null),Sc([w.observable],Pc.prototype,"closeData",void 0),Sc([w.action],Pc.prototype,"markClosed",null),Sc([w.action],Pc.prototype,"clearMessages",null);const Ac=[Hc("a","z"),Hc("A","Z")],$c=Hc("0","9"),Ic=[...Ac,$c];function qc(e,t){return e>=t[0]&&e<=t[1]}const jc=(e,t)=>Dc(e,t,[Mc]);function Dc(e,t,n){let r;for(r=t;r<e.length;r++){const t=e.charCodeAt(r);if(!y.some(n,e=>qc(t,e)))break}return r!==t?e.substring(t,r):r===e.length?"":void 0}const Mc=[48,57];function Fc(e,t,n){const r=e.match(t,n);if(!r||"full"!==r.type)throw console.log("Unparseable expected-parseable input",t),new Error("Can't parse expected-parseable value");return t.slice(n,n+r.consumed)}function Bc(e,t,n,r,o,s){if(!n||!o)return[];const a=(r||"").toLowerCase();return o(e,t,n).filter(e=>(!a||e.toLowerCase().startsWith(a))&&s).slice(0,10).map(e=>({showAs:e,index:t,value:e,matchType:"full"}))}class Lc{constructor(e){this.matcher=e}match(e,t){const n=this.matcher.toLowerCase();let r;for(r=t;r-t<this.matcher.length&&r<e.length;r++)if(n[r-t]!==e[r].toLowerCase())return;const o=r-t;return{type:o===this.matcher.length?"full":"partial",consumed:o}}getSuggestions(e,t){return[{showAs:this.matcher,index:t,value:this.matcher,matchType:"full"}]}parse(e,t){return Fc(this,e,t),this.matcher}}class Nc{constructor(e,t={}){this.templateText=e,this.options=t,this.allowedCharRanges=t.allowedChars||Nc.AnyAsciiExceptSpaces,this.allowEmpty=t.allowEmpty||(()=>!1)}match(e,t){const n=Dc(e,t,this.allowedCharRanges);if(void 0===n)return;const r=n.length;return{type:r>0||this.allowEmpty(e,t)?"full":"partial",consumed:r}}getSuggestions(e,t,n){const r=Dc(e,t,this.allowedCharRanges),o=Bc(e,t,n,r,this.options.suggestionGenerator,e=>![...e].map(e=>e.charCodeAt(0)).some(e=>!this.allowedCharRanges.some(t=>qc(e,t))));return r?[{showAs:r,index:t,value:r,matchType:"full"},...o.filter(e=>e.value!==r)]:[{showAs:`{${this.templateText}}`,index:t,value:"",matchType:"template"},...this.allowEmpty(e,t)&&""===r?[{showAs:"",index:t,value:"",matchType:"full"}]:[],...o]}parse(e,t){return Fc(this,e,t)}}Nc.AnyAsciiExceptSpaces=[Hc("!","~")];class Uc{constructor(e,t,n={}){this.wrapper=e,this.wrappedSyntax=t,this.optional=!!n.optional}match(e,t){let n,r=t;if(void 0===e[r])return{type:"partial",consumed:0};if(e[r]===this.wrapper[0])r+=1,n=!0;else{if(!this.optional)return;n=!1}const o=n?this.wrapper[1]:" ",s=e.slice(r).indexOf(o),a=-1!==s?e.slice(0,r+s):e,i=this.wrappedSyntax.match(a,r);if(i){if(r+=i.consumed,"full"!==i.type)return{type:"partial",consumed:r-t};if(n){if(void 0===e[r])return{type:"partial",consumed:r-t};if(e[r]!==this.wrapper[1])return;r+=1}return{type:"full",consumed:r-t}}}getSuggestions(e,t,n){const r=e[t]===this.wrapper[0],o=!this.optional||r?this.wrapper[1]:" ",s=e.slice(t).indexOf(o),a=-1!==s?e.slice(0,t+s):e,i=r?t+1:t;return this.wrappedSyntax.getSuggestions(a,i,n).map(t=>{const n=!this.optional||t.value.includes(" "),o=n&&!r,s=(n||r)&&"full"===t.matchType?this.wrapper[1]:"",a=!n&&!r||"full"!==t.matchType&&"template"!==t.matchType?"":this.wrapper[1];if(o){const n=this.wrapper[0]+e.slice(i,t.index)+t.value+s,r=this.wrapper[0]+e.slice(i,t.index)+t.showAs+a;return Object.assign(Object.assign({},t),{showAs:r,value:n,index:i})}return Object.assign(Object.assign({},t),{showAs:t.showAs+a,value:t.value+s})})}parse(e,t){const n=e[t]===this.wrapper[0],r=-1!==e.slice(t).indexOf(this.wrapper[1]),o=!this.optional||n&&r,s=o?this.wrapper[1]:" ",a=e.slice(t).indexOf(s),i=-1!==a?e.slice(0,t+a):e;return this.wrappedSyntax.parse(i,o?t+1:t)}}class Wc{constructor(e="number"){this.stringSyntax=new Nc(e,{allowedChars:[Mc]})}match(e,t){return this.stringSyntax.match(e,t)}getSuggestions(e,t){return this.stringSyntax.getSuggestions(e,t)}parse(e,t){const n=this.stringSyntax.parse(e,t);return parseInt(n,10)}}class zc{constructor(e){this.options=e}match(e,t){const n=this.options.map(n=>n.match(e,t)).filter(e=>!!e),[r,o]=y.partition(n,{type:"full"}),s=r.length?r:o;return y.maxBy(s,e=>e.consumed)}getSuggestions(e,t,n){const r=this.options.map(n=>({option:n,match:n.match(e,t)})).filter(({match:e})=>!!e);if(r.some(({match:e})=>"full"===e.type)){const o=r.filter(({match:e})=>"full"===e.type);return y.maxBy(o,({match:e})=>e.consumed).option.getSuggestions(e,t,n)}return y.flatMap(r,({option:o})=>r.length>1&&o instanceof Vc?o.getSuggestions(e,t,Object.assign({},n,{canExtend:!1})):o.getSuggestions(e,t,n))}parse(e,t){const n=this.options.map(n=>({option:n,match:n.match(e,t)})).filter(({match:e})=>"full"===(null==e?void 0:e.type));return y.maxBy(n,({match:e})=>e.consumed).option.parse(e,t)}}class _c extends zc{constructor(e){super(e.map(e=>new Lc(e)))}}class Vc{constructor(...e){this.subParts=e}match(e,t){const n=kc(this.subParts,e,t);return n?{type:null==n?void 0:n.type,consumed:null==n?void 0:n.partiallyConsumed}:void 0}getSuggestions(e,t,n){return Rc([{key:null,syntax:this.subParts}],e,t,{context:n,canExtend:null==n?void 0:n.canExtend}).map(({suggestion:e})=>e)}parse(e,t){return y.reduce(this.subParts,(n,r)=>{const o=r.parse(e,t);return t+=o.toString().length,n.push(o),n},[])}}class Kc{constructor(e){this.filterString=e}serialize(){return this.filterString}get filterDescription(){return this.constructor.filterDescription(this.filterString,!1)}}const Jc=()=>[new Qc("")];class Qc extends Kc{constructor(e=""){super(e),this.filter=e}matches(e){if(""===this.filter)return!0;const t=this.filter.toLocaleLowerCase();return e.searchIndex.includes(t)}toString(){return`"${this.filter}"`}}const Gc={"=":(e,t)=>e===t,"!=":(e,t)=>e!==t},Yc=Object.assign(Object.assign({},Gc),{">":(e,t)=>e>t,">=":(e,t)=>e>=t,"<":(e,t)=>e<t,"<=":(e,t)=>e<=t}),Xc=Object.assign(Object.assign({},Gc),{"*=":(e,t)=>e.includes(t),"^=":(e,t)=>e.startsWith(t),"$=":(e,t)=>e.endsWith(t)}),Zc={"=":(e,t)=>e.equals(t),"!=":(e,t)=>!e.equals(t),"*=":(e,t)=>e.includes(t),"^=":(e,t)=>e.slice(0,t.length).equals(t),"$=":(e,t)=>e.slice(-t.length).equals(t)},ed={"=":"equal to","!=":"not equal to",">":"greater than",">=":"greater than or equal to","<":"less than","<=":"less than or equal to","*=":"containing","^=":"starting with","$=":"ending with"},td=Object.assign(Object.assign({},ed),{">":"larger than",">=":"larger than or equal to","<":"smaller than","<=":"smaller than or equal to"});function nd(e,t){let n=0;const r=[];for(let o of e.filterSyntax)r.push(o.parse(t,n)),n+=o.match(t,n).consumed;return r}function rd(e,t){return od(t,...e.filterSyntax)}function od(e,...t){let n=0;const r=[];for(let o of t){const t=o.match(e,n);if(!t||"full"!==t.type)break;r.push(o.parse(e,n)),n+=t.consumed}return r}class sd extends Kc{static filterDescription(e){var t;const[,n,r]=rd(sd,e);if(!n||"="==n&&!r)return"responses with a given status code";if(r){const e=null===(t=tn(r))||void 0===t?void 0:t.message,o="="!==n&&"!="!==n||!e?"":` (${e})`;return"="===n?`responses with status ${r}${o}`:`responses with a status ${ed[n]} ${r}${o}`}return`responses with a status ${ed[n]} a given value`}constructor(e){super(e),[,this.op,this.status]=nd(sd,e),this.predicate=Yc[this.op]}matches(e){return e.isHttp()&&e.isSuccessfulExchange()&&this.predicate(e.response.statusCode,this.status)}toString(){return`Status ${this.op} ${this.status}`}}sd.filterSyntax=[new Lc("status"),new _c(["=","!=",">=",">","<=","<"]),new class{constructor(e,t={}){this.requiredLength=e,this.options=t}match(e,t){const n=jc(e,t);if(void 0===n)return;const r=n.length;return r===this.requiredLength?{type:"full",consumed:r}:r<this.requiredLength?{type:"partial",consumed:r}:void 0}getSuggestions(e,t,n){const r=jc(e,t),o=Bc(e,t,n,r,this.options.suggestionGenerator,e=>e.length===this.requiredLength&&![...e].map(e=>e.charCodeAt(0)).some(e=>!qc(e,Mc)));if(r){if(o.length)return o;{const e=r+y.repeat("0",this.requiredLength-r.length);return[{showAs:e,index:t,value:e,matchType:"full"}]}}return[{showAs:`{${this.requiredLength}-digit number}`,index:t,value:"",matchType:"template"},...o]}parse(e,t){const n=Fc(this,e,t);return parseInt(n,10)}}(3,{suggestionGenerator:(e,t,n)=>y(n).map(e=>"response"in e&&e.isSuccessfulExchange()&&e.response.statusCode.toString()).uniq().filter(Boolean).sort().valueOf()})],sd.filterName="status";class ad extends Kc{static filterDescription(e){return"requests & connections that have completed without errors"}matches(e){return e.isHttp()&&e.isSuccessfulExchange()&&!e.isWebSocket()||e.isWebSocket()&&e.closeState&&"aborted"!==e.closeState||e.isRTC()&&!!e.closeState||e.isTunnel()&&!e.isOpen()}toString(){return"Completed"}}ad.filterSyntax=[new Lc("completed")],ad.filterName="completed";class id extends Kc{static filterDescription(e){return"requests & connections that are still ongoing"}matches(e){return e.isHttp()&&!e.isCompletedExchange()||e.isWebSocket()&&!e.closeState||e.isRTC()&&!e.closeState||e.isTunnel()&&e.isOpen()}toString(){return"Pending"}}id.filterSyntax=[new Lc("pending")],id.filterName="pending";class ld extends Kc{static filterDescription(e){return"requests & connections which failed to cleanly complete"}matches(e){return e.isHttp()&&"aborted"===e.response||e.isWebSocket()&&"aborted"===e.closeState||e.isTlsFailure()}toString(){return"Aborted"}}ld.filterSyntax=[new Lc("aborted")],ld.filterName="aborted";class cd extends Kc{static filterDescription(e){return"requests that weren't transmitted successfully"}matches(e){return e.isTlsFailure()||e.isHttp()&&e.tags.some(e=>e.startsWith("client-error")||e.startsWith("passthrough-error"))}toString(){return"Error"}}cd.filterSyntax=[new Lc("errored")],cd.filterName="error";class dd extends Kc{static filterDescription(e){return"exchanges that are pinned"}matches(e){return e.pinned}toString(){return"Pinned"}}dd.filterSyntax=[new Lc("pinned")],dd.filterName="pinned";class ud extends Kc{static filterDescription(e){const[,t,n]=rd(ud,e);return t?n?"="===t?`all ${n} exchanges`:`all except ${n} exchanges`:`exchanges ${"="===t?"in":"not in"} a given category`:"exchanges by their general category"}constructor(e){super(e);const[,t,n]=nd(ud,e);this.op=t,this.predicate=Gc[this.op],this.expectedCategory=n}matches(e){return e.isHttp()&&this.predicate(e.category,this.expectedCategory)}toString(){return"="===this.op?y.startCase(this.expectedCategory):`Not ${y.startCase(this.expectedCategory)}`}}ud.filterSyntax=[new Lc("category"),new _c(["=","!="]),new _c(["image","js","css","html","font","data","rtc-data","rtc-media","mutative","websocket","incomplete","aborted","unknown"])],ud.filterName="category";class pd extends Kc{static filterDescription(e){const[,t,n]=rd(pd,e);return t?"="===t?n?`${n.toUpperCase()} requests`:"requests with a given method":n?`non-${n.toUpperCase()} requests`:"requests not sent with a given method":"requests with a given method"}constructor(e){super(e);const[,t,n]=nd(pd,e);this.op=t,this.predicate=Gc[this.op],this.expectedMethod=n.toUpperCase()}matches(e){return e.isHttp()&&this.predicate(e.request.method.toUpperCase(),this.expectedMethod)}toString(){return`Method ${this.op} ${this.expectedMethod}`}}pd.filterSyntax=[new Lc("method"),new _c(["=","!="]),new Nc("method",{allowedChars:Ac,suggestionGenerator:(e,t,n)=>y(n).filter(e=>e.isHttp()&&!!e.request.method&&nn.includes(e.request.method.toUpperCase())).map(e=>e.request.method.toUpperCase()).uniq().valueOf()})],pd.filterName="method";class hd extends Kc{static filterDescription(e){const[,,t]=rd(hd,e);return t?`exchanges using HTTP/${t}`:"exchanges using a given version of HTTP"}constructor(e){super(e);const[,,t]=nd(hd,e);this.expectedVersion=parseInt(t,10)}matches(e){return e.isHttp()&&Math.round(e.httpVersion)===this.expectedVersion}toString(){return`HTTP ${this.expectedVersion}`}}hd.filterSyntax=[new Lc("httpVersion"),new Lc("="),new _c(["1","2","3"])],hd.filterName="httpVersion";class md extends Kc{static filterDescription(){return"websocket streams"}constructor(e){super(e)}matches(e){return e instanceof Pc}toString(){return"WebSocket"}}md.filterSyntax=[new Lc("websocket")],md.filterName="websocket";class gd extends Kc{static filterDescription(e){const[,,t]=rd(gd,e);return t?"unknown"===t?"traffic with no identified protocol":`${"webrtc"===t?"WebRTC":t.toUpperCase()} traffic`:"traffic using a specific protocol like HTTPS, or WebSockets"}constructor(e){super(e);const[,,t]=nd(gd,e);this.expectedProtocol=t.toLowerCase()}matches(e){return"unknown"===this.expectedProtocol?!e.isHttp()&&!e.isRTC():"webrtc"===this.expectedProtocol?e.isRTC():!!e.isHttp()&&e.request.parsedUrl.protocol.toLowerCase().slice(0,-1)===this.expectedProtocol}toString(){return"unknown"===this.expectedProtocol?"Unknown protocol":"webrtc"===this.expectedProtocol?"WebRTC":`${this.expectedProtocol.toUpperCase()}`}}gd.filterSyntax=[new Lc("protocol"),new Lc("="),new _c(["http","https","ws","wss","webrtc","unknown"])],gd.filterName="protocol";class fd extends Kc{static filterDescription(e){const[,t,n]=rd(fd,e);return!t||!n&&"="===t?"requests sent to a given hostname":"="===t?`requests to ${n}`:`requests to any hostname ${ed[t]} ${n||"a given value"}`}constructor(e){super(e);const[,t,n]=nd(fd,e);this.op=t,this.predicate=Xc[t],this.expectedHostname=n.toLowerCase()}matches(e){return e.isHttp()&&this.predicate(e.request.parsedUrl.hostname.toLowerCase(),this.expectedHostname)}toString(){return`Hostname ${this.op} ${this.expectedHostname}`}}fd.filterSyntax=[new Lc("hostname"),new _c(["=","!=","*=","^=","$="]),new Nc("hostname",{allowedChars:[...Ic,Hc("-"),Hc(".")],suggestionGenerator:(e,t,n)=>y(n).map(e=>e.isHttp()&&e.request.parsedUrl.hostname.toLowerCase()).uniq().filter(Boolean).valueOf()})],fd.filterName="hostname";const yd={"http:":80,"https:":443};class vd extends Kc{static filterDescription(e){const[,t,n]=rd(vd,e);return!t||!n&&"="===t?"requests sent to a given port":"="===t?`requests to port ${n}`:`requests to any port ${ed[t]} ${n||"a given value"}`}constructor(e){super(e),[,this.op,this.expectedPort]=nd(vd,e),this.predicate=Yc[this.op]}matches(e){if(!e.isHttp())return!1;const{protocol:t,port:n}=e.request.parsedUrl,r=parseInt((n||yd[t]||0).toString(),10);return e.isHttp()&&this.predicate(r,this.expectedPort)}toString(){return`Port ${this.op} ${this.expectedPort}`}}vd.filterSyntax=[new Lc("port"),new _c(["=","!=",">=",">","<=","<"]),new Wc("port")],vd.filterName="port";class bd extends Kc{static filterDescription(e){const[,t,n]=rd(bd,e);return!t||!n&&"="===t?"requests sent to a given path":"="===t?`requests to ${n}`:`requests to any path ${ed[t]} ${n||"a given value"}`}constructor(e){super(e),[,this.op,this.expectedPath]=nd(bd,e),this.predicate=Xc[this.op]}matches(e){return e.isHttp()&&this.predicate(e.request.parsedUrl.pathname,this.expectedPath)}toString(){return`Path ${this.op} ${this.expectedPath}`}}bd.filterSyntax=[new Lc("path"),new _c(["=","!=","*=","^=","$="]),new Nc("path",{suggestionGenerator:(e,t,n)=>y(n).map(e=>e.isHttp()&&e.request.parsedUrl.pathname).uniq().filter(Boolean).valueOf()})],bd.filterName="path";class xd extends Kc{static filterDescription(e,t){const[,n,r]=rd(xd,e);return n?void 0===r||t?"="===n?"requests with a given query string":`requests with a query string ${ed[n]} a given query string`:""===r?"="===n?"requests with an empty query string":"requests with a non-empty query string":`requests with a query string ${ed[n]} ${r}`:"requests with a given query string"}constructor(e){super(e),[,this.op,this.expectedQuery]=nd(xd,e),this.predicate=Xc[this.op]}matches(e){return e.isHttp()&&this.predicate(e.request.parsedUrl.search,this.expectedQuery)}toString(){return`Query ${this.op} ${this.expectedQuery}`}}xd.filterSyntax=[new Lc("query"),new _c(["=","!=","*=","^=","$="]),new Nc("query",{allowEmpty:(e,t)=>{const n=e.slice(0,t).lastIndexOf("query")+5,r=xd.filterSyntax[1].parse(e,n);return"="===r||"!="===r},suggestionGenerator:(e,t,n)=>y(n).map(e=>e.isHttp()&&e.request.parsedUrl.search).uniq().filter(Boolean).valueOf()})],xd.filterName="query";const wd=e=>e.isHttp()?[...Object.entries(e.request.headers),...e.isSuccessfulExchange()?Object.entries(e.response.headers):[]]:[];class Ed extends Kc{static filterDescription(e){const[,t,n]=rd(Ed,e);return t?`exchanges with any header value ${ed[t]} ${n?`'${n}'`:"a given string"}`:"exchanges by all header values"}constructor(e){super(e);const[,t,n]=nd(Ed,e);this.op=t,this.predicate=Xc[t],this.expectedHeaderValue=n.toLowerCase()}matches(e){if(!e.isHttp())return!1;const t=wd(e),{predicate:n,expectedHeaderValue:r}=this;return y(t).flatMap(([e,t])=>null!=t?t:[]).some(e=>n(e.toLowerCase(),r))}toString(){return`Any header ${this.op} ${this.expectedHeaderValue}`}}Ed.filterSyntax=[new Lc("headers"),new _c(["=","*=","^=","$="]),new Uc(["[","]"],new Nc("header value",{allowedChars:[[0,255]],suggestionGenerator:(e,t,n)=>y(n).map(e=>y(wd(e)).map(([e,t])=>Array.isArray(t)?t:[t]).flatten().valueOf()).flatten().uniq().valueOf()}),{optional:!0})],Ed.filterName="headers";class Cd extends Kc{static filterDescription(e){const[,t]=rd(Cd,e),[n,r]=od(e.slice(8+(t||"").length),...Cd.valueMatchSyntax);return t?n?`exchanges with a '${t}' header ${ed[n]} ${r?`'${r}'`:"a given value"}`:`exchanges with a '${t}' header`:"exchanges with a specific header"}constructor(e){super(e);const[,t,[n,r]]=nd(Cd,e);this.expectedHeaderName=t.toLowerCase(),n&&r&&(this.op=n,this.predicate=Xc[n],this.expectedHeaderValue=r.toLowerCase())}matches(e){if(!e.isHttp())return!1;const t=wd(e),{predicate:n,expectedHeaderValue:r}=this;return n&&r?y(t).filter(([e])=>e.toLowerCase()===this.expectedHeaderName).flatMap(([e,t])=>null!=t?t:[]).some(e=>n(e.toLowerCase(),r)):t.some(([e])=>e.toLowerCase()===this.expectedHeaderName)}toString(){return this.op?`${this.expectedHeaderName} ${this.op} ${this.expectedHeaderValue}`:`Has ${this.expectedHeaderName} header`}}Cd.valueMatchSyntax=[new _c(["=","!=","*=","^=","$="]),new Uc(["[","]"],new Nc("header value",{allowedChars:[[0,255]],suggestionGenerator:(e,t,n)=>{const r=e.slice(0,t-1).lastIndexOf("["),o=Cd.filterSyntax[1].parse(e,r).toLowerCase();return y(n).map(e=>y(wd(e)).filter(([e])=>e.toLowerCase()===o).map(([e,t])=>Array.isArray(t)?t:[t]).flatten().valueOf()).flatten().uniq().valueOf()}}),{optional:!0})],Cd.filterSyntax=[new Lc("header"),new Uc(["[","]"],new Nc("header name",{suggestionGenerator:(e,t,n)=>y(n).map(e=>wd(e).map(([e])=>e.toLowerCase())).flatten().uniq().valueOf()})),new class{constructor(...e){this.subParts=e}match(e,t){if(t>=e.length)return{type:"full",consumed:0};const n=kc(this.subParts,e,t);return n?"full"===n.type?{type:"full",consumed:n.fullyConsumed}:t+n.partiallyConsumed===e.length?{type:"partial",consumed:n.partiallyConsumed}:{type:"full",consumed:0}:{type:"full",consumed:0}}getSuggestions(e,t,n){const r=this.match(e,t),o=Rc([{key:null,syntax:this.subParts}],e,t,{context:n}).map(({suggestion:e})=>e);return e.length===t?[{showAs:"",index:t,value:"",matchType:"full"},...o]:"full"===(null==r?void 0:r.type)&&0===(null==r?void 0:r.consumed)?[{showAs:"",index:t,value:"",matchType:"full"}]:o}parse(e,t){const n=this.match(e,t);return n&&0!==n.consumed?y.reduce(this.subParts,(n,r)=>{const o=r.parse(e,t);return t+=o.toString().length,n.push(o),n},[]):[]}}(...Cd.valueMatchSyntax)],Cd.filterName="header";class Td extends Kc{static filterDescription(e){const[,t,n]=rd(Td,e);return t?`exchanges with a body ${td[t]} ${void 0!==n?Jt(n):"a given size"}`:"exchanges by body size"}constructor(e){super(e),[,this.op,this.expectedSize]=nd(Td,e),this.predicate=Yc[this.op]}matches(e){if(!e.isHttp())return!1;const t=e.request.body,n=e.isSuccessfulExchange()?e.response.body:void 0,r=t.encodedByteLength+((null==n?void 0:n.encodedByteLength)||0);return e.isHttp()&&this.predicate(r,this.expectedSize)}toString(){return`Size ${this.op} ${this.expectedSize}`}}Td.filterSyntax=[new Lc("bodySize"),new _c(["=","!=",">=",">","<=","<"]),new Wc("size")],Td.filterName="bodySize";class Sd extends Kc{static filterDescription(e){const[,t,n]=rd(Sd,e);return t?`exchanges with a body ${ed[t]} ${n||"a given value"}`:"exchanges by body content"}constructor(e){super(e);const[,t,n]=nd(Sd,e);this.op=t,this.expectedBody=Ut(n),this.predicate=Zc[this.op]}matches(e){if(!e.isHttp())return!1;if(!e.hasRequestBody()&&!e.hasResponseBody())return!1;const t=e.request.body.decodedData,n=e.isSuccessfulExchange()?e.response.body.decodedData:void 0,r=!!t&&t.byteLength>0&&this.predicate(t,this.expectedBody),o=!!n&&n.byteLength>0&&this.predicate(n,this.expectedBody);return r||o}toString(){return`Body ${this.op} ${this.expectedBody}`}}Sd.filterSyntax=[new Lc("body"),new _c(["=","!=","*=","^=","$="]),new Uc(["[","]"],new Nc("body content",{allowedChars:[[0,1/0]]}),{optional:!0})],Sd.filterName="body";class Pd extends Kc{static filterDescription(e){const[,t]=rd(Pd,e);return`exchanges that contain ${t?`'${t.toLowerCase()}'`:"a given value"} anywhere`}constructor(e){super(e);const[,t]=nd(Pd,e);this.expectedContent=t.toLowerCase()}matches(e){let t;return t=e.isHttp()?[e.request.method,e.request.url,...Object.entries(e.request.rawHeaders).map(([e,t])=>`${e}: ${t}`),e.request.body.decodedData,...e.isSuccessfulExchange()?[e.response.statusCode,e.response.statusMessage,...Object.entries(e.response.rawHeaders).map(([e,t])=>`${e}: ${t}`),e.response.body.decodedData]:[],...e.isWebSocket()?e.messages.map(e=>e.content):[]]:e.isRTCConnection()?[e.clientURL,e.remoteURL]:e.isRTCDataChannel()?[...e.messages.map(e=>e.content),e.label,e.protocol]:e.isTlsTunnel()?[e.upstreamHostname,e.upstreamPort]:e.isTlsFailure()?[e.upstreamHostname]:[],t.some(e=>!!e&&0!==e.length&&e.toString().toLowerCase().includes(this.expectedContent))}toString(){return`Contains(${this.expectedContent})`}}Pd.filterSyntax=[new Lc("contains"),new Uc(["(",")"],new Nc("content",{allowedChars:[[0,1/0]]}))],Pd.filterName="contains";const kd=[pd,fd,bd,xd,sd,Ed,Cd,Sd,Td,Pd,ad,id,ld,cd,dd,ud,vd,gd,hd,md];class Rd extends Kc{static filterDescription(e,t){const n=")"===e[e.length-1]?e.slice(4,-1):e.slice(4);if(0===n.length)return"exchanges that do not match a given condition";{const e=kd.map(e=>({filter:e,match:kc(e.filterSyntax,n,0)})).filter(({match:e})=>((null==e?void 0:e.partiallyConsumed)||0)>0),r=y.maxBy(e,e=>e.match.fullyConsumed+e.match.partiallyConsumed);return`excluding ${r?r.filter.filterDescription(n,t):"..."}`}}constructor(e){super(e);const t=e.slice(4,-1),n=y.find(kd,e=>{var n;return"full"===(null===(n=kc(e.filterSyntax,t,0))||void 0===n?void 0:n.type)});this.innerFilter=new n(t)}matches(e){return!this.innerFilter.matches(e)}toString(){return`not(${this.innerFilter.toString()})`}}Rd.innerFilterSyntax=new zc(kd.map(e=>new Vc(...e.filterSyntax))),Rd.filterSyntax=[new Lc("not"),new Uc(["(",")"],Rd.innerFilterSyntax)],Rd.filterName="not";class Od extends Kc{static filterDescription(e,t){")"===e[e.length-1]&&(e=e.slice(0,-1));const n=e.slice(3).split(",").map(e=>e.trim());if(1===n.length&&0===n[0].length)return"exchanges that match any one of multiple conditions";{const e=n.map((e,r)=>{const o=r===n.length-1,s=t&&o,a=kd.map(t=>({filter:t,match:kc(t.filterSyntax,e,0)})).filter(({match:e})=>((null==e?void 0:e.partiallyConsumed)||0)>0),i=y.maxBy(a,e=>e.match.partiallyConsumed);return i?i.filter.filterDescription(e,s):"..."});return e.length<2&&e.push("..."),Ht(e,", ",", or ")}}constructor(e){super(e),this.filterValue=e,this.innerFilters=e.slice(3,-1).split(",").map(e=>e.trim()).map(e=>{const t=y.find(kd,t=>{var n;return"full"===(null===(n=kc(t.filterSyntax,e,0))||void 0===n?void 0:n.type)});return new t(e)})}matches(e){return this.innerFilters.some(t=>t.matches(e))}toString(){return Ht(this.innerFilters.map(e=>e.toString()),", "," or ")}}Od.innerFilterSyntax=new class{constructor(e,t,n={}){var r,o;this.delimiterString=e,this.wrappedSyntax=t,this.minimumRepetitions=null!==(r=n.minimumRepetitions)&&void 0!==r?r:2,this.placeholderName=null!==(o=n.placeholderName)&&void 0!==o?o:"value",this.delimiterSyntax=new Lc(this.delimiterString)}matchSyntaxOnly(e,t){const{wrappedSyntax:n,delimiterString:r,delimiterSyntax:o}=this;let s=t,a=0,i=0;for(;;){const l=e.slice(s).indexOf(r),c=e.slice(0,-1!==l?s+l:void 0),d=n.match(c,s);if(!d)return{matchCount:a,type:"full",consumed:i-t};if(s+=d.consumed,i=s,"partial"===d.type)return{matchCount:a,type:"partial",consumed:s-t};a+=1;const u=o.match(e,s);if(!u||0===u.consumed)return{matchCount:a,type:"full",consumed:s-t};if("partial"===u.type)return{matchCount:a,type:"partial",consumed:u.consumed+(s-t)};for(s+=u.consumed;" "===e[s];)s+=1}}match(e,t){const{minimumRepetitions:n}=this,{matchCount:r,type:o,consumed:s}=this.matchSyntaxOnly(e,t);return 0===s?n<=0?{type:"full",consumed:s}:{type:"partial",consumed:s}:"full"===o?r>=n?{type:"full",consumed:s}:t+s===e.length?{type:"partial",consumed:s}:void 0:{type:o,consumed:s}}getSuggestions(e,t,n){const{wrappedSyntax:r,delimiterSyntax:o,delimiterString:s,minimumRepetitions:a}=this;let i=t,l=0;for(;;){const t=e.slice(i).indexOf(s),c=e.slice(0,-1!==t?i+t:void 0),d=r.match(c,i);if(!d)return[{matchType:"full",index:l>0?i-s.length:i,showAs:"",value:""}];if("partial"===d.type){const t=r.getSuggestions(e,i,n);return l+1<a?t.map(e=>Object.assign(Object.assign({},e),{matchType:"full"===e.matchType?"partial":e.matchType})):t}i+=d.consumed,l+=1;const u=o.match(e,i);if(!u)return[{matchType:"full",index:i,showAs:"",value:""}];if("partial"===u.type||void 0===e[i+u.consumed]){const e=[{showAs:`${s} {another ${this.placeholderName}}`,index:i,value:s+" ",matchType:"template"}];return 0===u.consumed&&l>=a&&e.unshift({showAs:"",index:i,value:"",matchType:"full"}),e}for(i+=u.consumed;" "===e[i];)i+=1}}parse(e,t){const n=this.match(e,t);return"full"===n.type&&0===n.consumed?[]:e.slice(t,t+n.consumed).split(this.delimiterString).map(e=>this.wrappedSyntax.parse(e.trim(),0))}}(",",new zc(kd.map(e=>new Vc(...e.filterSyntax))),{placeholderName:"condition"}),Od.filterSyntax=[new Lc("or"),new Uc(["(",")"],Od.innerFilterSyntax)],Od.filterName="or";const Hd=[...kd,Rd,Od];function Ad(e,t=[]){return e.map((e,n)=>{if("separator"===e.type)return e;if("submenu"===e.type)return Object.assign(Object.assign({},e),{items:Ad(e.items,t.concat(`${n}.items`))});if("option"===e.type)return Object.assign(Object.assign({},e),{callback:void 0,id:t.concat(n).join(".")});throw new kt(e,e=>e.type)})}var $d=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const Id=["requestBody","responseBody","webSocketMessages","rawTunnelPackets"],qd=e=>Id.includes(e),jd=["requestHeaders","requestBody","responseHeaders","responseBody"],Dd=e=>e.startsWith("request"),Md=e=>e.startsWith("response"),Fd=jd.filter(Dd),Bd=jd.filter(Md),Ld=["requestHeaders","requestBody"],Nd=["responseHeaders","responseBody"],Ud=e=>Ld.includes(e)||Nd.includes(e);class Wd{constructor(e){this.accountStore=e,this.initialized=ue(()=>{return e=this,t=void 0,r=function*(){yield this.accountStore.initialized,(0,w.autorun)(()=>{document.querySelector("html").style.backgroundColor=this.theme.containerBackground,localStorage.setItem("theme-background-color",this.theme.containerBackground)}),(0,w.observe)(this.accountStore,"accountDataLastUpdated",()=>{void 0}),yield Tt({key:"ui-store",store:this});const e=window.matchMedia("(prefers-color-scheme: dark)");this._setPrefersDarkTheme(e.matches),e.addEventListener("change",e=>{this._setPrefersDarkTheme(e.matches)}),console.log("UI store initialized")},new((n=void 0)||(n=Promise))(function(o,s){function a(e){try{l(r.next(e))}catch(e){s(e)}}function i(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(a,i)}l((r=r.apply(e,t||[])).next())});var e,t,n,r}),this._themeName="automatic",this._prefersDarkTheme=!1,this.customTheme=void 0,this.contentPerspective="transformed",this.viewCardStates={api:{collapsed:!0},request:{collapsed:!1},requestBody:{collapsed:!1},requestTrailers:{collapsed:!1},response:{collapsed:!1},responseBody:{collapsed:!1},responseTrailers:{collapsed:!1},webSocketMessages:{collapsed:!1},webSocketClose:{collapsed:!1},rawTunnelPackets:{collapsed:!1},rtcConnection:{collapsed:!1},rtcSessionOffer:{collapsed:!1},rtcSessionAnswer:{collapsed:!1},performance:{collapsed:!0},export:{collapsed:!0}},this.collapsibleSectionStates={httpRequestHeaders:!0,httpResponseHeaders:!0},this.viewScrollPosition="end",this.selectedEventIds=w.observable.set(),this.sendCardStates={requestHeaders:{collapsed:!1},requestBody:{collapsed:!1},responseHeaders:{collapsed:!1},responseBody:{collapsed:!1}},this.settingsCardStates={account:{collapsed:!1},proxy:{collapsed:!1},connection:{collapsed:!1},api:{collapsed:!1},themes:{collapsed:!1}},this.previousElectronAppPaths=[],this.activeFilterSet=Jc(),this._customFilters={},this.preferredShell="Bash",this.mcpModalOpen=!1,this.zipExportSelectedFormatIds=[],this.zipExportIncludeHar=!1}setTheme(e){if("string"==typeof e){this._themeName=e;this.customTheme=void 0;}else{this._themeName="custom";this.customTheme=e;try{localStorage.setItem("httptoolkit-custom-theme",JSON.stringify(e))}catch(e){}}}buildCustomTheme(e){const t=Os(e);if(!t)throw new Error("Could not parse theme JSON");if(!t.name)throw new Error("Theme must contain a `name` field");const ext=t.extends||"dark";const n=Q[ext]||Q["dark"];return Object.assign(Object.assign({},n),t)}get themeName(){return this._themeName}_setPrefersDarkTheme(e){this._prefersDarkTheme=e}get theme(){switch(this.themeName){case"automatic":return Object.assign({},Q[this._prefersDarkTheme?"dark":"light"]);case"custom":{if(!this.customTheme){try{const saved=localStorage.getItem("httptoolkit-custom-theme");if(saved)this.customTheme=JSON.parse(saved);}catch(e){}}return this.customTheme||Q["dark"];}default:return Q[this.themeName]}}get viewCardProps(){return y.mapValues(this.viewCardStates,(e,t)=>({key:t,ariaLabel:`${y.startCase(t)} section`,expanded:t===this.animatedExpansionCard?"starting":t===this.expandedViewCard,collapsed:e.collapsed&&t!==this.expandedViewCard,onCollapseToggled:this.toggleViewCardCollapsed.bind(this,t),onExpandToggled:qd(t)?this.toggleViewCardExpanded.bind(this,t):y.noop}))}toggleViewCardCollapsed(e){const t=this.viewCardStates[e];t.collapsed=!t.collapsed,this.expandedViewCard=void 0}toggleViewCardExpanded(e){this.expandedViewCard===e?this.expandedViewCard=void 0:qd(e)&&(this.viewCardStates[e].collapsed=!1,this.expandedViewCard=e,this.animatedExpansionCard=e,requestAnimationFrame((0,w.action)(()=>{this.animatedExpansionCard=void 0})))}get sendCardProps(){return y.mapValues(this.sendCardStates,(e,t)=>{const n=t===this.expandedSendRequestCard||t===this.expandedSentResponseCard;return{key:t,ariaLabel:`${y.startCase(t)} section`,expanded:n,collapsed:e.collapsed&&!n,onCollapseToggled:this.toggleSendCardCollapsed.bind(this,t),onExpandToggled:Ud(t)?this.toggleSendCardExpanded.bind(this,t):y.noop}})}toggleSendCardCollapsed(e){const t=this.sendCardStates[e];t.collapsed=!t.collapsed;const n=Dd(e)?Fd:Bd;if(n.every(e=>this.sendCardStates[e].collapsed)){const t=n.indexOf(e),r=t===n.length-1?n[t-1]:n[t+1];this.toggleSendCardCollapsed(r)}if(Dd(e))this.expandedSendRequestCard=void 0;else{if(!Md(e))throw new kt(e);this.expandedSentResponseCard=void 0}}toggleSendCardExpanded(e){const t=Dd(e)?"expandedSendRequestCard":Md(e)?"expandedSentResponseCard":Rt(e);this[t]===e?this[t]=void 0:Ud(e)&&(this.sendCardStates[e].collapsed=!1,this[t]=e)}get settingsCardProps(){return y.mapValues(this.settingsCardStates,(e,t)=>({key:t,ariaLabel:`${y.startCase(t)} section`,collapsed:e.collapsed,onCollapseToggled:this.toggleSettingsCardCollapsed.bind(this,t)}))}toggleSettingsCardCollapsed(e){const t=this.settingsCardStates[e];t.collapsed=!t.collapsed}rememberElectronPath(e){this.previousElectronAppPaths.includes(e)||this.previousElectronAppPaths.unshift(e),this.previousElectronAppPaths=this.previousElectronAppPaths.slice(0,3)}forgetElectronPath(e){this.previousElectronAppPaths=this.previousElectronAppPaths.filter(t=>t!=e)}get customFilters(){return this.accountStore.user.isPaidUser()?this._customFilters:{}}openMcpModal(){this.mcpModalOpen=!0}closeMcpModal(){this.mcpModalOpen=!1}setZipExportSelectedFormatIds(e){this.zipExportSelectedFormatIds=e}setZipExportIncludeHar(e){this.zipExportIncludeHar=e}openZipExport(e){this.zipExportRequest={events:e}}closeZipExport(){this.zipExportRequest=void 0}setViewScrollPosition(e){this.viewScrollPosition=e}selectSingleEvent(e){this.selectedEventIds.clear(),e?(this.selectedEventIds.add(e),this.activeEventId=e):this.activeEventId=void 0}toggleEventSelection(e){this.selectedEventIds.has(e)?this.selectedEventIds.delete(e):this.selectedEventIds.add(e),this.activeEventId=e}setSelectedEvents(e){this.selectedEventIds.clear();for(const t of e)this.selectedEventIds.add(t)}clearSelection(){this.selectedEventIds.clear(),this.activeEventId=void 0}handleContextMenuEvent(e,t,n){if(!t.length)return;e.preventDefault();const r="contextmenu"===e.type?void 0:(()=>{const t=e.currentTarget.getBoundingClientRect();return{x:t.left,y:t.bottom}})();if(ye.openContextMenu){const o=null!=r?r:{x:e.pageX,y:e.pageY};this.contextMenuState=void 0,ye.openContextMenu({position:o,items:Ad(t)}).then(e=>{e&&y.get(t,e).callback(n)}).catch(e=>{throw console.log(e),new Error("Error opening context menu")})}else e.persist(),this.contextMenuState={data:n,event:e,position:r,items:t}}clearHtmlContextMenu(){this.contextMenuState=void 0}}$d([w.action.bound],Wd.prototype,"setTheme",null),$d([Ct,w.observable],Wd.prototype,"_themeName",void 0),$d([w.observable],Wd.prototype,"_prefersDarkTheme",void 0),$d([w.action.bound],Wd.prototype,"_setPrefersDarkTheme",null),$d([Ct("object"),w.observable],Wd.prototype,"customTheme",void 0),$d([w.computed],Wd.prototype,"theme",null),$d([w.observable],Wd.prototype,"animatedExpansionCard",void 0),$d([w.observable],Wd.prototype,"contentPerspective",void 0),$d([w.observable],Wd.prototype,"viewCardStates",void 0),$d([w.observable],Wd.prototype,"expandedViewCard",void 0),$d([w.observable],Wd.prototype,"collapsibleSectionStates",void 0),$d([w.observable],Wd.prototype,"viewScrollPosition",void 0),$d([w.observable],Wd.prototype,"selectedEventIds",void 0),$d([w.observable],Wd.prototype,"activeEventId",void 0),$d([w.computed],Wd.prototype,"viewCardProps",null),$d([w.action],Wd.prototype,"toggleViewCardCollapsed",null),$d([w.action],Wd.prototype,"toggleViewCardExpanded",null),$d([w.observable],Wd.prototype,"sendCardStates",void 0),$d([w.observable],Wd.prototype,"expandedSendRequestCard",void 0),$d([w.observable],Wd.prototype,"expandedSentResponseCard",void 0),$d([w.computed],Wd.prototype,"sendCardProps",null),$d([w.action],Wd.prototype,"toggleSendCardCollapsed",null),$d([w.action],Wd.prototype,"toggleSendCardExpanded",null),$d([w.observable],Wd.prototype,"settingsCardStates",void 0),$d([w.computed],Wd.prototype,"settingsCardProps",null),$d([w.action],Wd.prototype,"toggleSettingsCardCollapsed",null),$d([w.action.bound],Wd.prototype,"rememberElectronPath",null),$d([w.action.bound],Wd.prototype,"forgetElectronPath",null),$d([Ct("list"),w.observable],Wd.prototype,"previousElectronAppPaths",void 0),$d([w.observable],Wd.prototype,"activeFilterSet",void 0),$d([Ct("object"),w.observable],Wd.prototype,"_customFilters",void 0),$d([w.computed],Wd.prototype,"customFilters",null),$d([Ct,w.observable],Wd.prototype,"preferredShell",void 0),$d([Ct,w.observable],Wd.prototype,"exportSnippetFormat",void 0),$d([w.observable],Wd.prototype,"mcpModalOpen",void 0),$d([w.action.bound],Wd.prototype,"openMcpModal",null),$d([w.action.bound],Wd.prototype,"closeMcpModal",null),$d([Ct("list"),w.observable],Wd.prototype,"zipExportSelectedFormatIds",void 0),$d([w.action.bound],Wd.prototype,"setZipExportSelectedFormatIds",null),$d([Ct,w.observable],Wd.prototype,"zipExportIncludeHar",void 0),$d([w.action.bound],Wd.prototype,"setZipExportIncludeHar",null),$d([w.observable.ref],Wd.prototype,"zipExportRequest",void 0),$d([w.action.bound],Wd.prototype,"openZipExport",null),$d([w.action.bound],Wd.prototype,"closeZipExport",null),$d([w.action.bound],Wd.prototype,"setViewScrollPosition",null),$d([w.action.bound],Wd.prototype,"selectSingleEvent",null),$d([w.action.bound],Wd.prototype,"toggleEventSelection",null),$d([w.action.bound],Wd.prototype,"setSelectedEvents",null),$d([w.action.bound],Wd.prototype,"clearSelection",null),$d([w.observable.ref],Wd.prototype,"contextMenuState",void 0),$d([w.action.bound],Wd.prototype,"handleContextMenuEvent",null),$d([w.action.bound],Wd.prototype,"clearHtmlContextMenu",null);var zd=n(10185),_d=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};class Vd{constructor(e){this.goToSettings=e,this.initialized=ue(()=>{return e=this,t=void 0,r=function*(){this.subscriptionPlans=le((0,zd.loadPlanPricesUntilSuccess)()),this.updateUser(),setInterval(this.updateUser,6e5),(0,w.observe)(this,"accountDataLastUpdated",()=>{!this.user.subscription&&this.user.teamSubscription&&(alert("You are the administrator of an HTTP Toolkit team, but you aren't listed as an active member, so you don't have access to HTTP Toolkit's paid features yourself.\n\nTo manage your team, please visit accounts.httptoolkit.tech."),window.open("https://accounts.httptoolkit.tech","_blank","noreferrer noopener"),void 0),"hi@httptoolkit.com"===this.userEmail&&"true"!==localStorage.getItem("patched")&&(localStorage.setItem("patched","true"),it({category:"Account",action:"Patch detected"}))}),console.log("Account store initialized")},new((n=void 0)||(n=Promise))(function(o,s){function a(e){try{l(r.next(e))}catch(e){s(e)}}function i(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(a,i)}l((r=r.apply(e,t||[])).next())});var e,t,n,r}),this.user=(0,zd.getLastUserData)(),this.accountDataLastUpdated=0,this.isAccountUpdateInProcess=!1,this.updateUser=(0,w.flow)(function*(){var e;this.user=yield(0,zd.getLatestUserData)(),this.accountDataLastUpdated=Date.now(),e=this.user.userId,g&&(e?(e=e.replace("email|",""),d.o5().setUser({id:e})):d.o5().setUser(null)),this.user.banned&&(alert("Your account has been blocked for abuse. Please contact help@httptoolkit.com."),window.close())}.bind(this)),this.getPro=(0,w.flow)(function*(e){try{it({category:"Account",action:"Get Pro",value:e});const t=yield this.pickPlan();if(!t)return;if(this.isLoggedIn||(yield this.logIn()),!this.isLoggedIn||this.user.userHasSubscription())return void(this.user.isPastDueUser()&&this.goToSettings());yield this.purchasePlan(this.user.email,t)}catch(e){f(e),alert(`${e.message||e.code||"Error"}\n\nPlease check your email for details.\nIf you need help, get in touch at billing@httptoolkit.com.`),this.modal=void 0}finally{this.selectedPlan=void 0}}.bind(this)),this.logIn=(0,w.flow)(function*(){let e=this.modal;return this.modal="login",it({category:"Account",action:"Login"}),yield(0,w.when)(()=>"login"!==this.modal),this.isLoggedIn?(it({category:"Account",action:"Login success"}),this.user.userHasSubscription()?(it({category:"Account",action:"Paid user login"}),this.modal=void 0,this.user.isPastDueUser()&&this.goToSettings()):this.modal=e):(it({category:"Account",action:"Login failed"}),this.modal=void 0),this.isLoggedIn}.bind(this)),this.finalizeLogin=(0,w.flow)(function*(e){this.selectedPlan&&(0,zd.prepareCheckout)(e,this.selectedPlan,"app"),yield this.updateUser(),this.modal=void 0}).bind(this),this.pickPlan=(0,w.flow)(function*(){return this.selectedPlan=void 0,this.modal="pick-a-plan",yield(0,w.when)(()=>void 0===this.modal||!!this.selectedPlan),this.modal=void 0,this.selectedPlan?it({category:"Account",action:"Plan selected",value:this.selectedPlan}):this.user.isPaidUser()||it({category:"Account",action:"Plans rejected"}),this.selectedPlan}),this.purchasePlan=(0,w.flow)(function*(e,t){(0,zd.openNewCheckoutWindow)(e,t,"app"),this.modal="post-checkout",this.isAccountUpdateInProcess=!0,yield this.waitForUserUpdate(()=>this.user.isPaidUser()||!this.modal),this.isAccountUpdateInProcess=!1,this.modal=void 0,it({category:"Account",action:this.user.isPaidUser()?"Checkout complete":"Checkout cancelled",value:t})}),this.waitForUserUpdate=(0,w.flow)(function*(e){let t=!0;const n=()=>{t=!0,this.updateUser()},r=()=>{t=!1};window.addEventListener("focus",n),window.addEventListener("blur",r),yield this.updateUser();let o=0;for(;!e();)yield re(1e3),o+=1,(t||o>10)&&(o=0,yield this.updateUser());e()&&!t&&window.focus(),window.removeEventListener("focus",n),window.removeEventListener("blur",r)}),this.cancelSubscription=(0,w.flow)(function*(){try{this.isAccountUpdateInProcess=!0,yield(0,zd.cancelSubscription)(),yield this.waitForUserUpdate(()=>!this.user.subscription||"deleted"===this.user.subscription.status),console.log("Subscription cancellation confirmed")}catch(e){throw console.log(e),f(`Subscription cancellation failed: ${e.message||e}`),e}finally{this.isAccountUpdateInProcess=!1}})}get userEmail(){return this.user.email}get userSubscription(){return this.user.userHasSubscription()?this.user.subscription:void 0}get userJwt(){if(this.isLoggedIn&&this.accountDataLastUpdated!==1/0){const e=localStorage.getItem("last_jwt");if(!e)throw new Error("No JWT found for logged in user");return e}throw new Error("Can't get JWT for logged out user")}get isLoggedIn(){return!!this.user.email}get featureFlags(){return y.clone(this.user.featureFlags)}get mightBePaidUser(){var e,t;return this.user.isPaidUser()||0===this.accountDataLastUpdated&&!!(null===(e=this.user.subscription)||void 0===e?void 0:e.status)&&"past_due"!==(null===(t=this.user.subscription)||void 0===t?void 0:t.status)}cancelLogin(){this.modal=void 0}logOut(){/* offline build - logout disabled */}setSelectedPlan(e){this.selectedPlan=e||(this.modal=void 0)}cancelCheckout(){this.modal=this.selectedPlan=void 0}get canManageSubscription(){var e;return!!(null===(e=this.userSubscription)||void 0===e?void 0:e.canManageSubscription)}}_d([w.observable],Vd.prototype,"user",void 0),_d([w.observable],Vd.prototype,"accountDataLastUpdated",void 0),_d([w.observable],Vd.prototype,"isAccountUpdateInProcess",void 0),_d([w.computed],Vd.prototype,"userEmail",null),_d([w.computed],Vd.prototype,"userSubscription",null),_d([w.observable],Vd.prototype,"selectedPlan",void 0),_d([w.computed],Vd.prototype,"isLoggedIn",null),_d([w.computed],Vd.prototype,"featureFlags",null),_d([w.computed],Vd.prototype,"mightBePaidUser",null),_d([w.observable],Vd.prototype,"modal",void 0),_d([w.action.bound],Vd.prototype,"cancelLogin",null),_d([w.action.bound],Vd.prototype,"logOut",null),_d([w.action.bound],Vd.prototype,"setSelectedPlan",null),_d([w.action.bound],Vd.prototype,"cancelCheckout",null);var Kd=n(30640);function Jd(e){return e>0&&e<=65535}function Qd(e){return!!(null==e?void 0:e.match(/^[A-Za-z0-9\-.]+(:\d+)?$/))}function Gd(e){return!!(null==e?void 0:e.match(/^[A-Za-z0-9\-.]+$/))}const Yd={unspecified:"unknown",loopback:"this machine",private:"a local network device",uniqueLocal:"a local network device",unicast:""};function Xd(e){let t;try{t=Kd.parse(e)}catch(t){return f("Failed to parse IP",{ip:e}),e}(function(e){return"ipv6"===e.kind()})(t)&&t.isIPv4MappedAddress()&&(t=t.toIPv4Address());const n=t.range(),r=(n in Yd?Yd[n]:n).replace(/([A-Z])/g," $1").toLowerCase().replace(/^rfc/,"see RFC ");return t.toNormalizedString()+(r?` (${r})`:"")}var Zd=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},eu=function(e,t,n,r){return new(n||(n=Promise))(function(o,s){function a(e){try{l(r.next(e))}catch(e){s(e)}}function i(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(a,i)}l((r=r.apply(e,t||[])).next())})};function tu(e,t,n=500,r=200){return e.start(t).catch(o=>{var s;return console.log("Server initialization failed",o),o.response?(t=(null===(s=o.message)||void 0===s?void 0:s.includes("unrecognized plugin: webrtc"))?Object.assign(Object.assign({},t),{webrtc:void 0}):Object.assign(Object.assign({},t),{http:Object.assign(Object.assign({},t.http),{port:void 0})}),re(100).then(()=>tu(e,t,n,r))):re(Math.min(r,n)).then(()=>tu(e,t,n,1.2*r))})}function nu(e){return void 0===e||e.endPort>=e.startPort&&Jd(e.startPort)&&Jd(e.endPort)}class ru{constructor(e){this.accountStore=e,this.mockRTCRequestBuilder=new ui.$T,this.externalNetworkAddresses=[],this.dnsServers=[],this.ruleParameterKeys=[],this.initialized=ue(()=>eu(this,void 0,void 0,function*(){yield this.accountStore.initialized,yield this.loadSettings(),yield this.startIntercepting(),this.serverVersion=yield Fe,console.log(`Proxy store initialized (server version ${this.serverVersion})`)})),this.startIntercepting=(0,w.flow)(function*(){this.adminClient=new Ss.PluggableAdmin.AdminClient({adminServerUrl:`http://127.0.0.1:${be()}`,adminStreamReconnectAttempts:1/0}),this._http2CurrentlyEnabled=this.http2Enabled,this._currentTlsInterceptionConfig=y.cloneDeep(this.tlsInterceptionConfig),this._currentKeyLogFilePath=this.keyLogFilePath,this.monitorRemoteClientConnection(this.adminClient),yield tu(this.adminClient,{http:{options:{cors:!1,suggestChanges:!1,http2:this._http2CurrentlyEnabled,https:Object.assign(Object.assign({},this._currentTlsInterceptionConfig),{keyLogFile:this._currentKeyLogFilePath}),socks:!0,passthrough:this.accountStore.featureFlags.includes("raw-tunnels")?["unknown-protocol"]:void 0},port:this.portConfig,messageBodyDecoding:"none"},webrtc:{}}),this.mockttpRequestBuilder=new Ss.MockttpPluggableAdmin.MockttpAdminRequestBuilder(this.adminClient.schema,{messageBodyDecoding:"none"}),ke.resolve(),console.log("Server started"),yield function(e){return Pe(this,void 0,void 0,function*(){return(yield He()).getConfig(e)})}(this.httpProxyPort).then(e=>{this.certPath=e.certificatePath,this.certContent=e.certificateContent,this.certFingerprint=e.certificateFingerprint,this.setNetworkAddresses(e.networkInterfaces),this.systemProxyConfig=e.systemProxy,this.dnsServers=e.dnsServers,this.ruleParameterKeys=e.ruleParameterKeys,this.toolPaths=e.toolPaths,console.log("Config loaded")}),console.log(`Server started on port ${this.httpProxyPort}`),window.addEventListener("beforeunload",()=>{this.adminClient.stop().catch(()=>{})})}),this.streamDisconnected=!1,this.http2Enabled="fallback",this._http2CurrentlyEnabled=this.http2Enabled,this.tlsInterceptionConfig={tlsPassthrough:[]},this._currentTlsInterceptionConfig=y.cloneDeep(this.tlsInterceptionConfig),this.keyLogFilePath=void 0,this._currentKeyLogFilePath=this.keyLogFilePath,this.setRequestRules=(...e)=>{const{adminStream:t}=this.adminClient;return this.adminClient.sendQuery(this.mockttpRequestBuilder.buildAddRulesQuery("http",e,!0,t))},this.setWebSocketRules=(...e)=>{const{adminStream:t}=this.adminClient;return this.adminClient.sendQuery(this.mockttpRequestBuilder.buildAddRulesQuery("ws",e,!0,t))},this.setRTCRules=(...e)=>{const{adminStream:t}=this.adminClient;return this.adminClient.sendQuery(this.mockRTCRequestBuilder.buildSetRulesQuery(e,t))},this.onMockttpEvent=(e,t)=>{const n=this.mockttpRequestBuilder.buildSubscriptionRequest(e);return n?this.adminClient.subscribe(n,t):(console.warn(`Ignoring subscription for event unrecognized by Mockttp client: ${e}`),Promise.resolve())},this.onMockRTCEvent=(e,t)=>{const n=this.mockRTCRequestBuilder.buildSubscriptionRequest(e);return n?this.adminClient.subscribe(n,t):(console.warn(`Ignoring subscription for event unrecognized by MockRTC client: ${e}`),Promise.resolve())},this.refreshNetworkAddresses=(0,w.flow)(function*(){this.setNetworkAddresses(yield function(){return Pe(this,void 0,void 0,function*(){return(yield He()).getNetworkInterfaces()})}())})}loadSettings(){return eu(this,void 0,void 0,function*(){const{accountStore:e}=this;(0,w.observe)(e,"accountDataLastUpdated",()=>{e.user.isPaidUser()||(this.setPortConfig(void 0),this.http2Enabled="fallback",this.tlsInterceptionConfig={tlsPassthrough:[]})}),yield Tt({key:"server-store",store:this,dataTransform:e=>{if(e.tlsPassthroughConfig&&!e.tlsInterceptionConfig){const t=e.tlsPassthroughConfig;e.tlsInterceptionConfig={tlsPassthrough:t},delete e.tlsPassthroughConfig}return e}}),console.log("Proxy settings loaded")})}monitorRemoteClientConnection(e){return eu(this,void 0,void 0,function*(){e.on("stream-reconnecting",(0,w.action)(()=>{console.log("Admin client stream reconnecting..."),this.streamDisconnected=!0})),e.on("stream-reconnected",(0,w.action)(()=>{console.log("Admin client reconnected"),this.streamDisconnected=!1})),e.on("stopped",(0,w.action)(()=>{console.log("Server stopped"),this.streamDisconnected=!0})),e.on("stream-error",e=>{console.log("Admin client stream error",e)}),e.on("subscription-error",e=>{console.log("Admin client subscription error",e)}),e.on("stream-reconnect-failed",e=>{f(e.message?e:new Error("Client reconnect error"),{cause:e})})})}get portConfig(){return this._portConfig}setPortConfig(e){if(!nu(e))throw new TypeError(`Invalid port config: ${JSON.stringify(e)}`);!e||8e3===e.startPort&&65535===e.endPort?this._portConfig=void 0:this._portConfig=e}get httpProxyPort(){return this.adminClient.metadata.http.port}get http2CurrentlyEnabled(){return this._http2CurrentlyEnabled}get currentTlsInterceptionConfig(){return this._currentTlsInterceptionConfig}get currentKeyLogFilePath(){return this._currentKeyLogFilePath}setNetworkAddresses(e){this.externalNetworkAddresses=y.flatMap(e,(e,t)=>e.filter(e=>!e.internal&&"IPv4"===e.family&&"docker0"!==t&&!t.startsWith("br-")&&!t.startsWith("veth")).map(e=>e.address))}}Zd([w.observable.ref],ru.prototype,"adminClient",void 0),Zd([w.observable],ru.prototype,"certPath",void 0),Zd([w.observable],ru.prototype,"certContent",void 0),Zd([w.observable],ru.prototype,"certFingerprint",void 0),Zd([w.observable],ru.prototype,"externalNetworkAddresses",void 0),Zd([w.observable],ru.prototype,"systemProxyConfig",void 0),Zd([w.observable],ru.prototype,"dnsServers",void 0),Zd([w.observable],ru.prototype,"ruleParameterKeys",void 0),Zd([w.observable.ref],ru.prototype,"toolPaths",void 0),Zd([w.observable],ru.prototype,"serverVersion",void 0),Zd([w.observable],ru.prototype,"streamDisconnected",void 0),Zd([Ct("object"),w.observable],ru.prototype,"_portConfig",void 0),Zd([w.computed],ru.prototype,"portConfig",null),Zd([w.action],ru.prototype,"setPortConfig",null),Zd([w.computed],ru.prototype,"httpProxyPort",null),Zd([Ct,w.observable],ru.prototype,"http2Enabled",void 0),Zd([Ct("object"),w.observable],ru.prototype,"tlsInterceptionConfig",void 0),Zd([Ct,w.observable],ru.prototype,"keyLogFilePath",void 0);class ou{constructor(){this._events=w.observable.array([],{deep:!1}),this._eventIdIndex=w.observable.map({},{deep:!1}),this._exchanges=w.observable.array([],{deep:!1}),this._websockets=w.observable.array([],{deep:!1}),this._tlsFailures=w.observable.array([],{deep:!1}),this._rtcConnections=w.observable.array([],{deep:!1}),this._rtcDataChannels=w.observable.array([],{deep:!1}),this._rtcMediaTracks=w.observable.array([],{deep:!1}),this._activeSources=w.observable.array([]),this.getExchangeById=e=>this.getById(e,e=>e.isHttp()),this.getWebSocketById=e=>this.getById(e,e=>e.isWebSocket()),this.getTlsTunnelById=e=>this.getById(e,e=>e.isTlsTunnel()),this.getRawTunnelById=e=>this.getById(e,e=>e.isRawTunnel()),this.getRTCConnectionById=e=>this.getById(e,e=>e.isRTCConnection())}get events(){return this._events}get exchanges(){return this._exchanges}get websockets(){return this._websockets}get tlsFailures(){return this._tlsFailures}get rtcConnections(){return this._rtcConnections}get rtcDataChannels(){return this._rtcDataChannels}get rtcMediaTracks(){return this._rtcMediaTracks}get activeSources(){return this._activeSources}push(...e){this._events.push(...e),e.forEach(e=>{if(this._eventIdIndex.set(e.id,e),e.isHttp()){this._exchanges.push(e);const t=e.request.source;this._activeSources.some(e=>e.summary===t.summary)||this._activeSources.push(t)}e.isWebSocket()&&this._websockets.push(e),e.isTlsFailure()&&this._tlsFailures.push(e),e.isRTCConnection()&&this._rtcConnections.push(e),e.isRTCDataChannel()&&this._rtcDataChannels.push(e),e.isRTCMediaTrack()&&this._rtcMediaTracks.push(e)})}remove(e){if(this._events.remove(e),this._eventIdIndex.delete(e.id),e.isHttp()){this._exchanges.remove(e);const t=e.request.source;this._exchanges.some(e=>e.request.source.summary===t.summary)||this._activeSources.remove(t)}e.isWebSocket()&&this._websockets.remove(e),e.isTlsFailure()&&this._tlsFailures.remove(e),e.isRTCConnection()&&this._rtcConnections.remove(e),e.isRTCDataChannel()&&this._rtcDataChannels.remove(e),e.isRTCMediaTrack()&&this._rtcMediaTracks.remove(e)}getById(e,t){const n=this._eventIdIndex.get(e);if(!t||!n||t(n))return n}clear(){this._events.clear(),this._eventIdIndex.clear(),this._exchanges.clear(),this._websockets.clear(),this._tlsFailures.clear(),this._rtcConnections.clear(),this._rtcDataChannels.clear(),this._rtcMediaTracks.clear(),this._activeSources.clear()}}var su=n(4022);function au(e){var t,n;Array.isArray(e)||(e=[e]);const r=[];for(const o of e){const[e,...s]=o.split(";"),[a,i]=null!==(t=null==e?void 0:e.split("="))&&void 0!==t?t:[];if(!a||void 0===i)continue;const l={name:a,value:i};for(const e of s){let[t,r]=e.split("=");t=t.trim().toLowerCase(),r=null===(n=null==r?void 0:r.trim())||void 0===n||n,l[t]=r}r.push(l)}return r}function iu(e,t,n){do{const n=e.charCodeAt(t);if(32!==n&&9!==n)return t}while(++t<n);return n}function lu(e,t,n){for(;t>n;){const n=e.charCodeAt(--t);if(32!==n&&9!==n)return t+1}return n}function cu(e){if(-1===e.indexOf("%"))return e;try{return decodeURIComponent(e)}catch(t){return e}}var du=n(48287).Buffer,uu=function(e,t,n,r){return new(n||(n=Promise))(function(o,s){function a(e){try{l(r.next(e))}catch(e){s(e)}}function i(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(a,i)}l((r=r.apply(e,t||[])).next())})};const pu=new TextDecoder("utf8",{fatal:!0}),hu=(e,t)=>ae.parse(e.startedDateTime).getTime()-ae.parse(t.startedDateTime).getTime();function mu(e){return uu(this,arguments,void 0,function*(e,t={bodySizeLimit:5e5}){const[n,r]=y.partition(e,e=>e.isHttp()),o=n.filter(e=>!e.tags.some(e=>e.startsWith("client-error:"))),s=r.filter(e=>e.isTlsFailure()),a=function(e){const t=y.groupBy(e,e=>e.request.source.summary);return y.map(t,(e,t)=>{const n=Math.min(...e.map(e=>{var t;return null!==(t=e.timingEvents.startTime)&&void 0!==t?t:Date.now()}),Date.now());return{id:t,title:t,startedDateTime:ae.format(n),pageTimings:{}}})}(o),i=(yield Promise.all(o.map(e=>function(e,t){return uu(this,void 0,void 0,function*(){var n,r,o;const{timingEvents:s}=e,a=null!==(n=s.startTime)&&void 0!==n?n:Date.now(),i=s.bodyReceivedTimestamp?s.bodyReceivedTimestamp-s.startTimestamp:0,l=s.bodyReceivedTimestamp&&s.headersSentTimestamp?s.headersSentTimestamp-s.bodyReceivedTimestamp:0,c=s.responseSentTimestamp?s.responseSentTimestamp-s.headersSentTimestamp:0,d=null!==(o=null!==(r=s.wsClosedTimestamp)&&void 0!==r?r:s.responseSentTimestamp)&&void 0!==o?o:s.abortedTimestamp,u=d?d-s.startTimestamp:-1;return Object.assign({pageref:e.request.source.summary,startedDateTime:ae.format(a),time:u,request:yield bu(e.request,!0,t),response:yield xu(e,t),cache:{},timings:{blocked:-1,dns:-1,connect:-1,ssl:-1,send:Math.max(i,0),wait:Math.max(l,0),receive:Math.max(c,0)},_pinned:e.pinned||void 0},e.isWebSocket()?{_resourceType:"websocket",_webSocketMessages:e.messages.map(e=>function(e,t){return{type:"sent"===e.direction?"receive":"received"===e.direction?"send":Rt(e.direction),opcode:e.isBinary?2:1,data:e.isBinary?e.content.toString("base64"):e.content.toString("utf8"),time:(t.startTime+(e.timestamp-t.startTimestamp))/1e3}}(e,s)),_webSocketClose:e.closeState&&"aborted"!==e.closeState?{code:e.closeState.closeCode,reason:e.closeState.closeReason,timestamp:s.wsClosedTimestamp?s.wsClosedTimestamp/1e3:void 0}:e.closeState}:{})})}(e,t)))).sort(hu),l=s.map(wu);return{log:{version:"1.2",creator:{name:"HTTP Toolkit",version:De},pages:a,entries:i,_tlsErrors:l}}})}function gu(e){return e.map(([e,t])=>({name:e,value:t}))}function fu(e){return y(e).keyBy(e=>e.name).mapKeys((e,t)=>t.toLowerCase()).mapValues(e=>e.value).value()}function yu(e){const t=pn(e,"cookie").join("; ");try{return function(e){const t=[],n=e.length;if(n<2)return t;let r=0;do{const o=e.indexOf("=",r);if(-1===o)break;const s=e.indexOf(";",r),a=-1===s?n:s;if(o>a){r=e.lastIndexOf(";",o-1)+1;continue}const i=iu(e,r,o),l=lu(e,o,i),c=e.slice(i,l),d=iu(e,o+1,a),u=lu(e,a,d),p=cu(e.slice(d,u));t.push({name:c,value:p}),r=a+1}while(r<n);return t}(t)}catch(e){return console.warn("Could not parse request cookies for HAR",t),[]}}function vu(e){const t=pn(e,"set-cookie");try{return au(t).map(e=>({name:e.name,value:e.value,path:e.path,domain:e.domain,expires:e.expires,httpOnly:e.httponly,secure:e.secure,sameSite:e.samesite}))}catch(e){return console.warn("Could not parse response cookies for HAR",t),[]}}function bu(e,t,n){if(t&&e.body.isPending())return le(e.body.waitForDecoding().then(()=>bu(e,!1,n)));const r=Object.assign(Object.assign({method:e.method,url:e.parsedUrl.toString(),httpVersion:`HTTP/${e.httpVersion||"1.1"}`,cookies:yu(e.headers),headers:gu(e.rawHeaders)},e.rawTrailers?{_trailers:gu(e.rawTrailers)}:{}),{queryString:Array.from(e.parsedUrl.searchParams.entries()).map(([e,t])=>({name:e,value:t})),headersSize:-1,bodySize:e.body.encodedByteLength});if(e.body.isDecoded())if(e.body.decodedData.byteLength>n.bodySizeLimit)r._requestBodyStatus="discarded:too-large",r.comment=`Body discarded during HAR generation: longer than limit of ${n.bodySizeLimit} bytes`;else try{r.postData=function(e,t){if(e){if("application/x-www-form-urlencoded"===t){let r;try{r=lt.parse(e)}catch(t){console.log("Failed to parse url encoded body",e)}return r?{mimeType:t,params:(n=r,y.flatMap(Object.entries(n),([e,t])=>y.isString(t)?[[e,t]]:t.map(t=>[e,t])).map(([e,t])=>({name:e,value:t}))),text:e}:{mimeType:t,text:e}}var n;return{mimeType:t,text:e}}}(pu.decode(e.body.decodedData),un(e.headers,"content-type")||"application/octet-stream")}catch(t){if(!(t instanceof TypeError))throw t;r._requestBodyStatus="discarded:not-representable",r._content={text:e.body.decodedData.toString("base64"),size:e.body.decodedData.byteLength,encoding:"base64"}}else r._requestBodyStatus="discarded:not-decodable";return r}function xu(e,t){return uu(this,void 0,void 0,function*(){const{request:n,response:r}=e;if(!r||"aborted"===r)return{status:0,statusText:"",httpVersion:"",headers:[],cookies:[],content:{size:0,mimeType:"application/x-unknown"},redirectURL:"",headersSize:-1,bodySize:-1};const o=yield r.body.waitForDecoding();let s;try{s=!o||o.byteLength>t.bodySizeLimit?{comment:`Body discarded during HAR generation: longer than limit of ${t.bodySizeLimit} bytes`}:{text:pu.decode(o)}}catch(e){s={text:o.toString("base64"),encoding:"base64"}}return{status:r.statusCode,statusText:r.statusMessage,httpVersion:`HTTP/${n.httpVersion||"1.1"}`,cookies:vu(r.headers),headers:gu(r.rawHeaders),content:Object.assign({mimeType:un(r.headers,"content-type")||"application/octet-stream",size:(null==o?void 0:o.byteLength)||0},s),redirectURL:"",headersSize:-1,bodySize:r.body.encodedByteLength||0}})}function wu(e){var t;const n=null!==(t=e.timingEvents)&&void 0!==t?t:{},r="startTime"in n?n.startTime:new Date,o="failureTimestamp"in n?n.failureTimestamp-n.connectTimestamp:0;return{startedDateTime:ae.format(r),time:o,cause:e.failureCause,hostname:e.upstreamHostname,clientIPAddress:e.remoteIpAddress,clientPort:e.remotePort,tlsMetadata:e.tlsMetadata}}const Eu=(e,...t)=>y.sumBy(t,t=>{const n=Number(e[t]);return!n||n<0?0:n});function Cu(e,t,n){var r,o,s;const a=new URL(t.url);return{id:e,timingEvents:n,tags:[],matchedRuleId:!1,httpVersion:Tu(t.httpVersion,t.headers),protocol:t.url.split(":")[0],method:t.method,url:t.url,path:a.pathname,headers:fu(t.headers),rawHeaders:t.headers.map(e=>[e.name,e.value]),body:{decoded:t._content?Su(t._content):(i=t.postData,(null==i?void 0:i.text)?Ut(i.text,"utf8"):(null==i?void 0:i.params)?Ut(lt.stringify(y(i.params).groupBy(({name:e})=>e).mapValues(e=>e.map(e=>e.value||"")).valueOf())):Ut("")),encodedLength:t.bodySize},rawTrailers:null!==(o=null===(r=t._trailers)||void 0===r?void 0:r.map(e=>[e.name,e.value]))&&void 0!==o?o:[],trailers:fu(null!==(s=t._trailers)&&void 0!==s?s:[])};var i}function Tu(e,t){if(!e)return t.some(({name:e})=>e.startsWith(":"))?"2.0":"1.1";if("h3"===e)return"3.0";const n=/^(HTTP\/)?([\d\.]+)$/i.exec(e);if(n)return n[2];throw TypeError(`Invalid HTTP version: ${e}`)}function Su(e){if(du.isEncoding(e.encoding))return du.from(e.text,e.encoding);throw TypeError("Invalid encoding")}function Pu(e,t,n){var r,o,s;return{id:e,timingEvents:n,tags:[],statusCode:t.status,statusMessage:t.statusText,headers:fu(t.headers),rawHeaders:t.headers.map(e=>[e.name,e.value]),body:{decoded:du.from(t.content.text||"",t.content.encoding||"utf8"),encodedLength:t.bodySize&&-1!==t.bodySize?t.bodySize:0},rawTrailers:null!==(o=null===(r=t._trailers)||void 0===r?void 0:r.map(e=>[e.name,e.value]))&&void 0!==o?o:[],trailers:fu(null!==(s=t._trailers)&&void 0!==s?s:[])}}class ku extends Ts{constructor(e){var t,n,r;super(),this.failureEvent=e,this.id=crypto.randomUUID(),this.upstreamHostname=null!==(r=null!==(t=this.failureEvent.tlsMetadata.sniHostname)&&void 0!==t?t:null===(n=this.failureEvent.destination)||void 0===n?void 0:n.hostname)&&void 0!==r?r:this.failureEvent.hostname,this.remoteIpAddress=this.failureEvent.remoteIpAddress,this.remotePort=this.failureEvent.remotePort,this.failureCause=this.failureEvent.failureCause,this.tags=this.failureEvent.tags,this.timingEvents=this.failureEvent.timingEvents,this.tlsMetadata=this.failureEvent.tlsMetadata,this.searchIndex=[this.upstreamHostname,e.remoteIpAddress].filter(e=>!!e).join("\n")}isTlsFailure(){return!0}}class Ru extends Ts{constructor(e){var t,n,r,o;super(),this.openEvent=e,this.id=this.openEvent.id,this.remoteIpAddress=this.openEvent.remoteIpAddress,this.remotePort=this.openEvent.remotePort,this.upstreamHostname=null!==(n=null===(t=this.openEvent.destination)||void 0===t?void 0:t.hostname)&&void 0!==n?n:this.openEvent.hostname,this.upstreamPort=null!==(o=null===(r=this.openEvent.destination)||void 0===r?void 0:r.port)&&void 0!==o?o:this.openEvent.upstreamPort,this.tags=this.openEvent.tags,this.timingEvents=this.openEvent.timingEvents,this.open=!0,this.searchIndex=[this.upstreamHostname,e.remoteIpAddress].filter(e=>!!e).join("\n")}isTlsTunnel(){return!0}markClosed(e){this.timingEvents.disconnectTimestamp=e.timingEvents.disconnectedTimestamp||e.timingEvents.disconnectTimestamp,this.open=!1}isOpen(){return this.open}}!function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);s>3&&a&&Object.defineProperty(t,n,a)}([w.observable],Ru.prototype,"open",void 0);var Ou=n(48287).Buffer,Hu=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};class Au extends Ts{constructor(e){super(),this.openEvent=e,this.id=this.openEvent.id,this.remoteIpAddress=this.openEvent.remoteIpAddress,this.remotePort=this.openEvent.remotePort,this.upstreamHostname=this.openEvent.destination.hostname,this.upstreamPort=this.openEvent.destination.port,this.tags=this.openEvent.tags,this.timingEvents=this.openEvent.timingEvents,this.packets=[],this.open=!0,this.searchIndex=[this.upstreamHostname,this.upstreamPort,e.remoteIpAddress].filter(e=>!!e).join("\n")}isRawTunnel(){return!0}addChunk(e){const t=this.packets[this.packets.length-1];(null==t?void 0:t.direction)===e.direction&&e.eventTimestamp-t.timestamp<10&&t.content.byteLength+e.content.byteLength<5e5?this.packets[this.packets.length-1]=new fr({id:this.id,direction:t.direction,eventTimestamp:t.timestamp,content:Ou.concat([t.content,e.content]),isBinary:!0},this.packets.length):this.packets.push(new fr(Object.assign(e,{isBinary:!0}),this.packets.length))}markClosed(e){this.timingEvents.disconnectTimestamp=e.timingEvents.disconnectedTimestamp||e.timingEvents.disconnectTimestamp,this.open=!1}isOpen(){return this.open}}Hu([w.observable],Au.prototype,"packets",void 0),Hu([w.action],Au.prototype,"addChunk",null),Hu([w.observable],Au.prototype,"open",void 0),Hu([w.action],Au.prototype,"markClosed",null);var $u=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const Iu=e=>`${e.protocol}://${e.address}:${e.port}`;class qu extends Ts{constructor(e){super(),this.connectionEvent=e,this.id=this.connectionEvent.sessionId,this.streams=w.observable.array([],{deep:!1}),this.cache=new hr}isRTCConnection(){return!0}get peerId(){return this.connectionEvent.peerId}get localSessionDescription(){return this.connectionEvent.localSessionDescription}get remoteSessionDescription(){return this.connectionEvent.remoteSessionDescription}get source(){return Es(this.connectionEvent.metadata.userAgent)}get sourceURL(){if(this.connectionEvent.metadata.sourceURL)try{return new URL(this.connectionEvent.metadata.sourceURL)}catch(e){return}}get clientURL(){return Iu(this.connectionEvent.selectedRemoteCandidate)}attachExternalPeer(e,t){this.attachedConnection={externalConnection:e.externalConnection,otherHalf:t}}isOtherHalfOf(e){if(!this.attachedConnection)return!1;const{externalConnection:t}=this.attachedConnection,{externalConnection:n}=e,r=Iu(t.selectedLocalCandidate),o=Iu(t.selectedRemoteCandidate),s=Iu(n.selectedLocalCandidate);return r===Iu(n.selectedRemoteCandidate)&&s===o}connectOtherHalf(e){this.attachedConnection.otherHalf=e}get remoteCandidate(){if(!this.attachedConnection)return this.connectionEvent.selectedLocalCandidate;const{externalConnection:e,otherHalf:t}=this.attachedConnection;return t?t.connectionEvent.selectedRemoteCandidate:e.selectedRemoteCandidate}get remoteURL(){return Iu(this.remoteCandidate)}addStream(e){this.streams.push(e)}removeStream(e){this.streams.remove(e)}markClosed(e){this.closeData=e}get closeState(){return this.closeData}}$u([w.computed],qu.prototype,"source",null),$u([w.computed],qu.prototype,"sourceURL",null),$u([w.computed],qu.prototype,"clientURL",null),$u([w.observable],qu.prototype,"attachedConnection",void 0),$u([w.action],qu.prototype,"attachExternalPeer",null),$u([w.action],qu.prototype,"connectOtherHalf",null),$u([w.computed],qu.prototype,"remoteCandidate",null),$u([w.computed],qu.prototype,"remoteURL",null),$u([w.action],qu.prototype,"addStream",null),$u([w.action],qu.prototype,"removeStream",null),$u([w.observable],qu.prototype,"closeData",void 0),$u([w.action],qu.prototype,"markClosed",null);var ju=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};class Du extends Ts{constructor(e,t){super(),this.openEvent=e,this.connection=t,this.id=this.sessionId+":data:"+this.channelId,this.messages=[]}isRTCDataChannel(){return!0}get rtcConnection(){return this.connection}get sessionId(){return this.rtcConnection.id}get channelId(){return this.openEvent.channelId}get label(){return this.openEvent.channelLabel}get protocol(){return this.openEvent.channelProtocol}addMessage(e){this.messages.push(new fr(e,this.messages.length))}markClosed(e){this.closeData=e}get closeState(){return this.closeData}cleanup(){this.messages.forEach(e=>e.cleanup()),this.messages.length=0}}ju([w.observable],Du.prototype,"messages",void 0),ju([w.action],Du.prototype,"addMessage",null),ju([w.observable],Du.prototype,"closeData",void 0),ju([w.action],Du.prototype,"markClosed",null);var Mu=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};class Fu extends Ts{constructor(e,t){super(),this.openEvent=e,this.connection=t,this.id=this.sessionId+":media:"+this.mid,this.stats=[],this._totalBytesSent=0,this._totalBytesReceived=0}isRTCMediaTrack(){return!0}get rtcConnection(){return this.connection}get sessionId(){return this.rtcConnection.id}get mid(){return this.openEvent.trackMid}get direction(){return this.openEvent.trackDirection}get type(){return this.openEvent.trackType}addStats(e){const t=this.stats[this.stats.length-1];(null==t?void 0:t.timestamp)<e.eventTimestamp-1500&&Math.round((e.eventTimestamp-t.timestamp)/1e3)-1>0&&this.stats.push(...v().range(t.timestamp+1e3,e.eventTimestamp-500,1e3).map(e=>({timestamp:e,sentDelta:0,receivedDelta:0}))),this.stats.push({timestamp:e.eventTimestamp,sentDelta:e.totalBytesSent-this.totalBytesSent,receivedDelta:e.totalBytesReceived-this.totalBytesReceived}),this._totalBytesSent=e.totalBytesSent,this._totalBytesReceived=e.totalBytesReceived}get totalBytesSent(){return this._totalBytesSent}get totalBytesReceived(){return this._totalBytesReceived}markClosed(e){this.closeData=e}get closeState(){return this.closeData}cleanup(){this.stats.length=0}}Mu([w.observable],Fu.prototype,"stats",void 0),Mu([w.action],Fu.prototype,"addStats",null),Mu([w.observable],Fu.prototype,"_totalBytesSent",void 0),Mu([w.observable],Fu.prototype,"_totalBytesReceived",void 0),Mu([w.observable],Fu.prototype,"closeData",void 0),Mu([w.action],Fu.prototype,"markClosed",null);var Bu=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},Lu=function(e,t,n,r){return new(n||(n=Promise))(function(o,s){function a(e){try{l(r.next(e))}catch(e){s(e)}}function i(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(a,i)}l((r=r.apply(e,t||[])).next())})};const Nu=["request-initiated","request","response","websocket-request","websocket-accepted","websocket-message-received","websocket-message-sent","websocket-close","abort","tls-client-error","tls-passthrough-opened","tls-passthrough-closed","client-error","raw-passthrough-opened","raw-passthrough-closed","raw-passthrough-data","rule-event"],Uu=["peer-connected","peer-disconnected","external-peer-attached","data-channel-opened","data-channel-message-sent","data-channel-message-received","data-channel-closed","media-track-opened","media-track-stats","media-track-closed"],Wu=1033;class zu{constructor(e,t,n){this.proxyStore=e,this.apiStore=t,this.rulesStore=n,this.initialized=ue(()=>Lu(this,void 0,void 0,function*(){yield Promise.all([this.proxyStore.initialized,this.apiStore.initialized,this.rulesStore.initialized]),Nu.forEach(e=>{this.proxyStore.onMockttpEvent(e,t=>{this.isPaused||(this.eventQueue.push({type:e,event:t}),this.queueEventFlush())})}),Uu.forEach(e=>{this.proxyStore.onMockRTCEvent(e,t=>{this.isPaused||(this.eventQueue.push({type:e,event:t}),this.queueEventFlush())})}),console.log("Events store initialized")})),this.isPaused=!1,this.eventQueue=[],this.orphanedEvents={},this.isFlushQueued=!1,this.eventsList=new ou,this.updateFromQueuedEvent=e=>{try{switch(e.type){case"request-initiated":return this.addInitiatedRequest(e.event),this.checkForOrphan(e.event.id);case"request":return this.addCompletedRequest(e.event),this.checkForOrphan(e.event.id);case"response":return this.setResponse(e.event);case"websocket-request":return this.addWebSocketRequest(e.event),this.checkForOrphan(e.event.id);case"websocket-accepted":return this.addAcceptedWebSocketResponse(e.event);case"websocket-message-received":case"websocket-message-sent":return this.addWebSocketMessage(e.event);case"websocket-close":return this.markWebSocketClosed(e.event);case"abort":return this.markRequestAborted(e.event);case"tls-passthrough-opened":return this.addTlsTunnel(e.event),this.checkForOrphan(e.event.id);case"tls-passthrough-closed":return this.markTlsTunnelClosed(e.event);case"tls-client-error":return this.addFailedTlsRequest(e.event);case"client-error":return this.addClientError(e.event);case"raw-passthrough-opened":return this.addRawTunnel(e.event);case"raw-passthrough-closed":return this.markRawTunnelClosed(e.event);case"raw-passthrough-data":return this.addRawTunnelChunk(e.event);case"rule-event":return this.addRuleEvent(e.event);case"peer-connected":return this.addRTCPeerConnection(e.event);case"external-peer-attached":return this.attachExternalRTCPeer(e.event);case"peer-disconnected":return this.markRTCPeerDisconnected(e.event);case"data-channel-opened":return this.addRTCDataChannel(e.event);case"data-channel-message-sent":case"data-channel-message-received":return this.addRTCDataChannelMessage(e.event);case"data-channel-closed":return this.markRTCDataChannelClosed(e.event);case"media-track-opened":return this.addRTCMediaTrack(e.event);case"media-track-stats":return this.addRTCMediaTrackStats(e.event);case"media-track-closed":return this.markRTCMediaTrackClosed(e.event);case"queued-callback":return void e.cb()}}catch(e){f(e)}}}queueEventFlush(){this.isFlushQueued||(this.isFlushQueued=!0,setTimeout(this.flushQueuedUpdates,500),requestAnimationFrame(this.flushQueuedUpdates))}get events(){return this.eventsList.events}get exchanges(){return this.eventsList.exchanges}get websockets(){return this.eventsList.websockets}get tlsFailures(){return this.eventsList.tlsFailures}get rtcConnections(){return this.eventsList.rtcConnections}get rtcDataChannels(){return this.eventsList.rtcDataChannels}get rtcMediaTracks(){return this.eventsList.rtcMediaTracks}get activeSources(){return this.eventsList.activeSources}flushQueuedUpdates(){this.isFlushQueued=!1,this.eventQueue.length>Wu?(this.eventQueue.slice(0,Wu).forEach(this.updateFromQueuedEvent),this.eventQueue=this.eventQueue.slice(Wu),setTimeout(()=>{this.queueEventFlush()},10)):(this.eventQueue.forEach(this.updateFromQueuedEvent),this.eventQueue=[])}checkForOrphan(e){const t=this.orphanedEvents[e];t&&(delete this.orphanedEvents[e],this.updateFromQueuedEvent(t))}togglePause(){this.isPaused=!this.isPaused}addInitiatedRequest(e){if(this.eventsList.getById(e.id))return void f("Duplicate event received",{eventType:"request-initiated",id:e.id});const t=new wc(e,this.apiStore);this.eventsList.push(t)}getMatchedRule(e){if(!e.matchedRuleId)return!1;const t=_s(this.rulesStore.rules,{id:e.matchedRuleId});if(!t)return!1;if(Bs(t))throw new Error("Request event unexpectedly matched rule group");return t}addCompletedRequest(e){const t=this.eventsList.getById(e.id);let n;t?n=t:(n=new wc(Object.assign({},e),this.apiStore),this.eventsList.push(n)),n.updateFromCompletedRequest(e,this.getMatchedRule(e))}markRequestAborted(e){const t=this.eventsList.getExchangeById(e.id);t?t.markAborted(e):this.orphanedEvents[e.id]={type:"abort",event:e}}setResponse(e){const t=this.eventsList.getExchangeById(e.id);t?t.setResponse(e):this.orphanedEvents[e.id]={type:"response",event:e}}addWebSocketRequest(e){if(this.eventsList.getById(e.id))return void f("Duplicate event received",{eventType:"websocket-request",id:e.id});const t=new Pc(Object.assign({},e),this.apiStore);t.updateFromCompletedRequest(e,this.getMatchedRule(e)),this.eventsList.push(t)}addAcceptedWebSocketResponse(e){const t=this.eventsList.getWebSocketById(e.id);t?(t.setResponse(e),t.setAccepted(e)):this.orphanedEvents[e.id]={type:"websocket-accepted",event:e}}addWebSocketMessage(e){const t=this.eventsList.getWebSocketById(e.streamId);t?t.addMessage(e):this.orphanedEvents[e.streamId]={type:`websocket-message-${e.direction}`,event:e}}markWebSocketClosed(e){const t=this.eventsList.getWebSocketById(e.streamId);t?t.markClosed(e):this.orphanedEvents[e.streamId]={type:"websocket-close",event:e}}addTlsTunnel(e){this.eventsList.getById(e.id)?f("Duplicate event received",{eventType:"tls-passthrough-opened",id:e.id}):this.eventsList.push(new Ru(e))}markTlsTunnelClosed(e){const t=this.eventsList.getTlsTunnelById(e.id);t?t.markClosed(e):this.orphanedEvents[e.id]={type:"tls-passthrough-closed",event:close}}addRawTunnel(e){if(this.eventsList.getById(e.id))return void f("Duplicate event received",{eventType:"raw-passthrough-opened",id:e.id});const t=new Au(e);this.eventsList.push(t)}markRawTunnelClosed(e){const t=this.eventsList.getRawTunnelById(e.id);t?t.markClosed(e):this.orphanedEvents[e.id]={type:"raw-passthrough-closed",event:e}}addRawTunnelChunk(e){const t=this.eventsList.getRawTunnelById(e.id);t?t.addChunk(e):this.orphanedEvents[e.id]={type:"raw-passthrough-data",event:e}}addFailedTlsRequest(e){var t,n,r;const o=null!==(r=null!==(t=e.tlsMetadata.sniHostname)&&void 0!==t?t:null===(n=e.destination)||void 0===n?void 0:n.hostname)&&void 0!==r?r:e.hostname;this.tlsFailures.some(t=>t.upstreamHostname===o&&t.remoteIpAddress===e.remoteIpAddress)||this.eventsList.push(new ku(e))}addClientError(e){if("ECONNRESET"===e.errorCode&&!e.request.method&&!e.request.url)return;if("ERR_SSL_DECRYPTION_FAILED_OR_BAD_RECORD_MAC"===e.errorCode)return;if(this.eventsList.getById(e.request.id))return void f("Duplicate event received",{eventType:"client-error",id:e.request.id});const t=Object.assign(Object.assign({},e.request),{matchedRuleId:!1,method:e.request.method||"",url:e.request.url||`${e.request.protocol||"http"}://`,headers:e.request.headers}),n=new wc(t,this.apiStore);"aborted"===e.response?n.markAborted(t):n.setResponse(e.response),this.eventsList.push(n)}addRuleEvent(e){const t=this.eventsList.getExchangeById(e.requestId);if(t)switch(e.eventType){case"passthrough-request-head":t.updateFromUpstreamRequestHead(e.eventData);break;case"passthrough-request-body":t.updateFromUpstreamRequestBody(e.eventData);break;case"passthrough-response-head":t.updateFromUpstreamResponseHead(e.eventData);break;case"passthrough-response-body":t.updateFromUpstreamResponseBody(e.eventData);break;case"passthrough-abort":t.updateFromUpstreamAbort(e.eventData);break;case"passthrough-websocket-connect":if(!t.isWebSocket())throw new Error("Received WS connect event for non-WS");t.updateWithUpstreamConnect(e.eventData)}else this.orphanedEvents[e.requestId]={type:"rule-event",event:e}}addRTCPeerConnection(e){this.eventsList.getById(e.sessionId)?f("Duplicate event received",{eventType:"peer-connected",id:e.sessionId}):this.eventsList.push(new qu(e))}attachExternalRTCPeer(e){const t=this.eventsList.getRTCConnectionById(e.sessionId),n=this.rtcConnections.find(t=>t.isOtherHalfOf(e));t?(t.attachExternalPeer(e,n),n&&n.connectOtherHalf(t)):this.orphanedEvents[e.sessionId]={type:"external-peer-attached",event:e}}markRTCPeerDisconnected(e){const t=this.eventsList.getRTCConnectionById(e.sessionId);t?t.markClosed(e):this.orphanedEvents[e.sessionId]={type:"peer-disconnected",event:e}}addRTCDataChannel(e){const t=this.eventsList.getRTCConnectionById(e.sessionId);if(t){const n=e.sessionId+":data:"+e.channelId;if(this.eventsList.getById(n))return void f("Duplicate event received",{eventType:"data-channel-opened",id:n});const r=new Du(e,t);this.eventsList.push(r),t.addStream(r)}else this.orphanedEvents[e.sessionId]={type:"data-channel-opened",event:e}}addRTCDataChannelMessage(e){const t=this.rtcDataChannels.find(t=>t.sessionId===e.sessionId&&t.channelId===e.channelId);t?t.addMessage(e):this.orphanedEvents[e.sessionId]={type:`data-channel-message-${e.direction}`,event:e}}markRTCDataChannelClosed(e){const t=this.rtcDataChannels.find(t=>t.sessionId===e.sessionId&&t.channelId===e.channelId);t?t.markClosed(e):this.orphanedEvents[e.sessionId]={type:"data-channel-closed",event:e}}addRTCMediaTrack(e){const t=this.eventsList.getRTCConnectionById(e.sessionId);if(t){const n=e.sessionId+":media:"+e.trackMid;if(this.eventsList.getById(n))return void f("Duplicate event received",{eventType:"media-track-opened",id:n});const r=new Fu(e,t);this.eventsList.push(r),t.addStream(r)}else this.orphanedEvents[e.sessionId]={type:"media-track-opened",event:e}}addRTCMediaTrackStats(e){const t=this.rtcMediaTracks.find(t=>t.sessionId===e.sessionId&&t.mid===e.trackMid);t?t.addStats(e):this.orphanedEvents[e.sessionId]={type:"media-track-stats",event:e}}markRTCMediaTrackClosed(e){const t=this.rtcMediaTracks.find(t=>t.sessionId===e.sessionId&&t.mid===e.trackMid);t?t.markClosed(e):this.orphanedEvents[e.sessionId]={type:"media-track-closed",event:e}}deleteEvent(e){this.eventsList.remove(e),e.isRTCDataChannel()||e.isRTCMediaTrack()?e.rtcConnection.removeStream(e):e.isRTCConnection()&&[...e.streams].forEach(e=>this.deleteEvent(e)),"cleanup"in e&&e.cleanup()}clearInterceptedData(e){const[t,n]=y.partition(this.events,e?()=>!1:e=>e.pinned);this.eventsList.clear(),n.forEach(e=>{"cleanup"in e&&e.cleanup()}),this.eventsList.push(...t),this.orphanedEvents={},"gc"in window&&window.gc()}loadFromHar(e){return Lu(this,void 0,void 0,function*(){const{events:t,pinnedIds:n}=yield function(e){return uu(this,void 0,void 0,function*(){const t=yield su.G(function(e){var t,n,r,o;return(null!==(n=null===(t=null==e?void 0:e.log)||void 0===t?void 0:t.entries)&&void 0!==n?n:[]).forEach(e=>{var t,n,r,o,s,a,i,l,c,d,u,p,h,m,g,f,v,b;if(delete e.serverIPAddress,e.request&&(null!==(t=(d=e.request).headersSize)&&void 0!==t||(d.headersSize=-1),e.request.postData&&(null!==(n=(u=e.request.postData).mimeType)&&void 0!==n||(u.mimeType="application/octet-stream")),e.request.cookies=[]),e.timings&&(null!==(r=(p=e.timings).send)&&void 0!==r||(p.send=-1),null!==(o=(h=e.timings).wait)&&void 0!==o||(h.wait=-1),null!==(s=(m=e.timings).receive)&&void 0!==s||(m.receive=-1)),e.response){if(null!==(a=(g=e.response).redirectURL)&&void 0!==a||(g.redirectURL=""),null!==(i=(f=e.response).headersSize)&&void 0!==i||(f.headersSize=-1),null==e.response.statusText&&(e.response.statusText=rn(e.response.status)),null===e.response.bodySize){const t=y.find(e.response.headers||[],({name:e})=>"content-length"===e.toLowerCase());e.response.bodySize=t?parseInt(t.value,10):-1}e.response.content&&(null!==(l=(v=e.response.content).size)&&void 0!==l||(v.size=-1),null!==(c=(b=e.response.content).mimeType)&&void 0!==c||(b.mimeType="application/octet-stream")),e.response.cookies=[]}e.cache={}}),(null!==(o=null===(r=null==e?void 0:e.log)||void 0===r?void 0:r.pages)&&void 0!==o?o:[]).forEach(e=>{void 0===e.title&&(e.title=e.id),e.pageTimings={}}),e}(e)),n=y.random(1e6)+"-",r=[],o=[];return t.log.entries.sort(hu).forEach((e,t)=>{var s,a,i;const l=n+t,c="websocket"===e._resourceType,d={startTime:ae.parse(e.startedDateTime).getTime(),startTimestamp:0,bodyReceivedTimestamp:Eu(e.timings,"blocked","dns","connect","send"),headersSentTimestamp:Eu(e.timings,"blocked","dns","connect","send","wait")};Object.assign(d,0!==e.response.status?{responseSentTimestamp:e.time}:{abortedTimestamp:e.time},c?{wsAcceptedTimestamp:d.headersSentTimestamp,wsClosedTimestamp:e.time}:{});const u=Cu(l,e.request,d);if(r.push({type:c?"websocket-request":"request",event:u}),0!==e.response.status?r.push({type:c&&101===e.response.status?"websocket-accepted":"response",event:Pu(l,e.response,d)}):r.push({type:"abort",event:u}),c){r.push(...null!==(a=null===(s=e._webSocketMessages)||void 0===s?void 0:s.map(e=>({type:"websocket-message-"+("send"===e.type?"received":"sent"),event:{streamId:u.id,direction:"send"===e.type?"received":"sent",isBinary:2===e.opcode,content:du.from(e.data,2===e.opcode?"base64":"utf8"),eventTimestamp:1e3*e.time-d.startTime,timingEvents:d,tags:[]}})))&&void 0!==a?a:[]);const t=e._webSocketClose;t&&"aborted"!==t?r.push({type:"websocket-close",event:{streamId:u.id,closeCode:t.code,closeReason:null!==(i=t.reason)&&void 0!==i?i:"",timingEvents:d,tags:[]}}):r.push({type:"abort",event:u})}e._pinned&&o.push(l)}),t.log._tlsErrors&&r.push(...t.log._tlsErrors.map(e=>{var t;return{type:"tls-client-error",event:{failureCause:e.cause,hostname:e.hostname,remoteIpAddress:e.clientIPAddress,remotePort:e.clientPort,tlsMetadata:null!==(t=e.tlsMetadata)&&void 0!==t?t:{},tags:[],timingEvents:{startTime:ae.parse(e.startedDateTime).getTime(),connectTimestamp:0,failureTimestamp:e.time}}}})),{events:r,pinnedIds:o}})}(e).catch(e=>{throw e.errors?e.errors.forEach(e=>{console.log(e)}):console.log(e),e});this.eventQueue.push(...t),this.eventQueue.push({type:"queued-callback",cb:(0,w.action)(()=>n.forEach(e=>{this.events.find(t=>t.id===e).pinned=!0}))}),this.queueEventFlush()})}recordSentRequest(e){const t=new wc(Object.assign({},e),this.apiStore);return t.updateFromCompletedRequest(e,!1),this.eventsList.push(t),t}}Bu([w.observable],zu.prototype,"isPaused",void 0),Bu([w.action.bound],zu.prototype,"flushQueuedUpdates",null),Bu([w.action.bound],zu.prototype,"togglePause",null),Bu([w.action],zu.prototype,"addInitiatedRequest",null),Bu([w.action],zu.prototype,"addCompletedRequest",null),Bu([w.action],zu.prototype,"markRequestAborted",null),Bu([w.action],zu.prototype,"setResponse",null),Bu([w.action],zu.prototype,"addWebSocketRequest",null),Bu([w.action],zu.prototype,"addAcceptedWebSocketResponse",null),Bu([w.action],zu.prototype,"addWebSocketMessage",null),Bu([w.action],zu.prototype,"markWebSocketClosed",null),Bu([w.action],zu.prototype,"addTlsTunnel",null),Bu([w.action],zu.prototype,"markTlsTunnelClosed",null),Bu([w.action],zu.prototype,"addRawTunnel",null),Bu([w.action],zu.prototype,"markRawTunnelClosed",null),Bu([w.action],zu.prototype,"addRawTunnelChunk",null),Bu([w.action],zu.prototype,"addFailedTlsRequest",null),Bu([w.action],zu.prototype,"addClientError",null),Bu([w.action],zu.prototype,"addRuleEvent",null),Bu([w.action],zu.prototype,"addRTCPeerConnection",null),Bu([w.action],zu.prototype,"attachExternalRTCPeer",null),Bu([w.action],zu.prototype,"markRTCPeerDisconnected",null),Bu([w.action],zu.prototype,"addRTCDataChannel",null),Bu([w.action],zu.prototype,"addRTCDataChannelMessage",null),Bu([w.action],zu.prototype,"markRTCDataChannelClosed",null),Bu([w.action],zu.prototype,"addRTCMediaTrack",null),Bu([w.action],zu.prototype,"addRTCMediaTrackStats",null),Bu([w.action],zu.prototype,"markRTCMediaTrackClosed",null),Bu([w.action.bound],zu.prototype,"deleteEvent",null),Bu([w.action.bound],zu.prototype,"clearInterceptedData",null),Bu([w.action],zu.prototype,"recordSentRequest",null);var _u=n(53371);const Vu='<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="UTF-8" />\n  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />\n  <link rel=\'shortcut icon\' type=\'image/x-icon\' href=\'/favicon.ico\' />\n  <script type="application/json" id="amiusing">\n    { "amiusing": true }\n  <\/script>\n  <title>\n    Are you using HTTP Toolkit? Yes!\n  </title>\n  <style>\n    html {\n      height: 100%;\n    }\n\n    body {\n      min-height: 100%;\n      box-sizing: border-box;\n      margin: 0;\n      padding: 8px;\n\n      background-color: #fafafa;\n      color: #1e2028;\n\n      font-family: "DM Sans", Arial, sans-serif;\n      letter-spacing: -0.5px;\n      line-height: 1.3;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n    }\n\n    .content {\n      max-width: 600px;\n    }\n\n    h1 {\n      font-size: 48px;\n      letter-spacing: -2px;\n    }\n\n    p {\n      font-size: 24px;\n    }\n\n    .logo {\n      display: block;\n      margin: 40px auto;\n      height: 200px;\n      width: 200px;\n    }\n\n    @media (prefers-color-scheme: dark) {\n      body {\n        background-color: #32343B;\n        color: #ffffff;\n      }\n    }\n\n    @media not (prefers-color-scheme: dark) {\n      body {\n        background-color: #fafafa;\n        color: #1e2028;\n      }\n    }\n  </style>\n</head>\n<body>\n  <div class="content">\n    <h1>You\'re being intercepted by HTTP Toolkit</h1>\n    <p>\n      This response came from HTTP Toolkit, which is currently intercepting this connection.\n    </p>\n    <p>\n      All requests made by this browser will be recorded by HTTP Toolkit.\n      Take a look at the \'View\' tab there now to see the request & response\n      that brought you this page, or start browsing elsewhere to collect more data.\n    </p>\n  </div>\n  <link href="https://fonts.cdnfonts.com/css/dm-sans" rel="stylesheet">\n</body>\n</html>';function Ku(e,t){switch(e){case"http":case"ethereum":case"ipfs":return new ia(t);case"websocket":return new Ra(t);case"webrtc":return new xi}}function Ju(e){const t=!!e.body.decodedData&&e.body.decodedData.length<1e4,n=t&&"json"===e.contentType&&Os(e.body.decodedData.toString())?[new Ss.yN.JsonBodyMatcher(Os(e.body.decodedData.toString()))]:t?[new Ss.yN.RawBodyMatcher(e.body.decodedData.toString())]:[],r=e.parsedUrl.toString().split("?"),o=r[0],s=r.length>1?[new Ss.yN.QueryMatcher(lt.parse(r.slice(1).join("?")))]:[];return[new(ta[e.method]||na),new Ss.yN.FlexiblePathMatcher(o),...s,...n]}function Qu(e){const{statusCode:t,statusMessage:n,headers:r}=e.isSuccessfulExchange()?e.response:{statusCode:200,statusMessage:"OK",headers:{}},o=e.isSuccessfulExchange()&&e.response.body.encodedByteLength<=1048576&&e.response.body.decodedData?e.response.body.decodedData:"A mock response",s=Object.assign({},r);return delete s.date,delete s.expires,delete s[":status"],delete s["content-encoding"],s["content-length"]&&(s["content-length"]=Vt(o).toString()),{id:crypto.randomUUID(),type:"http",activated:!0,matchers:Ju(e.request),steps:[new sa(t,n||rn(t),o,s)],completionChecker:new Ss.zO.Always}}const Gu=e=>({id:"default-group",title:"Default rules",collapsed:!0,items:e}),Yu=(e,t)=>[{id:"default-amiusing",type:"http",activated:!0,priority:el.OVERRIDE,matchers:[new ta.GET,new oa],completionChecker:new Ss.zO.Always,steps:[new sa(200,void 0,Vu,{"content-type":"text/html","cache-control":"no-store","httptoolkit-active":"true"})]},...je(t.serverVersion,Le)?[{id:"default-certificate",type:"http",activated:!0,priority:el.OVERRIDE,matchers:[new ta.GET,new Ss.yN.FlexiblePathMatcher("amiusing.httptoolkit.tech/certificate")],completionChecker:new Ss.zO.Always,steps:[new aa(200,void 0,t.certPath,{"content-type":"application/x-x509-ca-cert"})]}]:[],{id:"default-wildcard",type:"http",activated:!0,matchers:[new ra],completionChecker:new Ss.zO.Always,steps:[new ia(e)]},{id:"default-ws-wildcard",type:"websocket",activated:!0,matchers:[new Pa],completionChecker:new Ss.zO.Always,steps:[new Ra(e)]}],Xu=(e,t)=>({id:"root",title:"HTTP Toolkit Rules",isRoot:!0,items:[Gu(Yu(e,t))]});function Zu(e){if(!e)return e;if(void 0!==e.version)throw new Error(Xl`
            Could not migrate rules from unknown format (${e.version}).
            Please restart HTTP Toolkit to update.
        `);if(e.rules){e.id="root",e.title="HTTP Toolkit Rules",e.isRoot=!0;const[t,n]=y.partition(e.rules,e=>e.id.startsWith("default-"));t.length?e.items=[...n,Gu(t)]:e.items=n,delete e.rules}return e.items=e.items.map(ep),e}function ep(e){return Bs(e)?e.items=e.items.map(ep):e=function(e){var t;void 0===e.type&&(e.type="http");const{handler:n}=e;if("passthrough"===(null==n?void 0:n.type)&&(n.forwardToLocation&&!n.forwarding&&(n.forwarding={targetHost:n.forwardToLocation,updateHostHeader:!0},delete n.forwardToLocation),n.forwarding)){const{targetHost:e,updateHostHeader:t}=n.forwarding,r=e.split("://"),[o,s]=r.length>1?r:[void 0,r[0]];n.transformRequest=Object.assign(Object.assign(Object.assign({},n.transformRequest),{replaceHost:{targetHost:s,updateHostHeader:null==t||t}}),o?{setProtocol:o}:{}),delete n.forwarding}return n&&(null!==(t=e.steps)&&void 0!==t||(e.steps=[n]),delete e.handler),e}(e),e}const tp=(e,t,n)=>{const r=Hi(e),o=t[r];if(!o)throw new Error(`Can't load unrecognized rule type: ${r}`);return Fs(o)?ht.iu(o,e,()=>{},n):y.create(o.prototype,e)},np=ht.Ie(e=>{const t=y.cloneDeep((0,w.toJS)(e));return t.matchers=t.matchers.map(e=>Fs(e)?ht.lK(e):e),t.steps=t.steps.map(e=>Fs(e)?ht.lK(e):e),"completionChecker"in t&&Fs(t.completionChecker)&&(t.completionChecker=ht.lK(t.completionChecker)),t},(e,t)=>Object.assign(Object.assign({id:e.id,type:e.type,title:e.title,activated:e.activated,priority:"priority"in e?e.priority:void 0,matchers:e.matchers.map(e=>tp(e,Ii,t.args))},e.handler?{steps:[tp(e.handler,Di,t.args)]}:{steps:e.steps.map(e=>tp(e,Di,t.args))}),{completionChecker:"completionChecker"in e&&tp(e.completionChecker,Ss.zO.CompletionCheckerLookup,t.args)})),rp=ht.Ie(e=>Bs(e)?ht.lK(op,e):np.serializer(e),(e,t,n,r)=>{if(Bs(e)){const n=ht.iu(op,e,r,t.args);return n.collapsed=!0,n}return np.deserializer(e,r,t,n)}),op=ht.gt({id:ht.MY(),title:ht.MY(),items:ht.p_(rp)}),sp=ht.gt({id:ht.MY(),title:ht.MY(),version:$s(()=>{}),isRoot:ht.lq(ht.MY()),items:ht.p_(rp)}),ap=e=>ht.lK(sp,e),ip=(e,t)=>ht.iu(sp,Zu(e),void 0,t);var lp=n(48287).Buffer,cp=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},dp=function(e,t,n,r){return new(n||(n=Promise))(function(o,s){function a(e){try{l(r.next(e))}catch(e){s(e)}}function i(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(a,i)}l((r=r.apply(e,t||[])).next())})};const up=ht.gt({passphrase:ht.MY(),filename:ht.MY(),pfx:ht.Ie(_u.l,_u.D)}),pp=(e,t)=>ip(ap(e),{rulesStore:t}),hp=e=>`docker-tunnel-proxy-${e}`;class mp{constructor(e,t,n){this.accountStore=e,this.proxyStore=t,this.jumpToExchange=n,this.initialized=ue(()=>dp(this,void 0,void 0,function*(){yield Promise.all([this.accountStore.initialized,this.proxyStore.initialized]),yield this.loadSettings();const{setRequestRules:e,setWebSocketRules:t,setRTCRules:n,serverVersion:r}=this.proxyStore;(0,w.reaction)(()=>this.activePassthroughOptions,()=>{this.rules=pp(this.rules,this),this.draftRules=pp(this.draftRules,this)}),(0,w.reaction)(()=>this.upstreamProxyType,e=>{"direct"!==e&&"system"!==e||(this.upstreamProxyHost=void 0)}),yield new Promise(o=>{(0,w.reaction)(()=>y.cloneDeep(Ks(this.rules).filter(e=>e.activated&&e.matchers.length)),s=>dp(this,void 0,void 0,function*(){try{yield Promise.all([e(...s.filter(Yi)),...Ie.satisfies(r,"^1.1.3")?[t(...s.filter(Xi))]:[],...Ie.satisfies(r,Qe)?[n(...s.filter(Zi).map(({matchers:e,steps:t})=>({matchers:e.slice(1),steps:t})))]:[]]),o()}catch(e){console.log("Failed to activate stored rules",e,JSON.stringify(s)),f("Failed to activate configured ruleset"),alert("Configured rules could not be activated, so were reset to default."),this.resetRulesToDefault()}}),{fireImmediately:!0})}),console.log("Rules store initialized")})),this.upstreamProxyType="system",this.upstreamProxyHost=void 0,this.upstreamNoProxyHosts=[],this.whitelistedCertificateHosts=["localhost"],this.clientCertificateHostMap={},this.additionalCaCertificates=[],this.triggerRequestBreakpoint=e=>this.triggerBreakpoint(e.id,t=>t.triggerRequestBreakpoint(e)),this.triggerResponseBreakpoint=e=>this.triggerBreakpoint(e.id,t=>t.triggerResponseBreakpoint(e)),this.triggerBreakpoint=(0,w.flow)(function*(e,t){const n=yield this.jumpToExchange(e);return yield t(n)})}loadSettings(){return dp(this,void 0,void 0,function*(){var e;const{accountStore:t}=this;yield Tt({key:"rules-store",store:this,dataTransform:e=>y.omit(e,"rules")});try{const t=JSON.parse(null!==(e=localStorage.getItem("rules-store"))&&void 0!==e?e:"{}");(0,w.runInAction)(()=>{"draftWhitelistedCertificateHosts"in t&&(this.whitelistedCertificateHosts=t.draftWhitelistedCertificateHosts),"draftClientCertificateHostMap"in t&&(this.clientCertificateHostMap=t.draftClientCertificateHostMap)})}catch(e){f(e)}t.mightBePaidUser?(yield Tt({key:"rules-store",store:this,dataTransform:e=>({rules:Zu(e.rules)}),customArgs:{rulesStore:this}}).catch(e=>{var t,n;console.log("Failed to load last-run rules",e,null===(n=JSON.parse(null!==(t=localStorage.getItem("rules-store"))&&void 0!==t?t:"{}"))||void 0===n?void 0:n.rules),f(e),alert(`Could not load rules from last run.\n\n${e}`)}),this.rules?(this.resetRuleDrafts(),Yu(this,this.proxyStore).forEach(e=>this.ensureRuleExists(e))):this.resetRulesToDefault()):this.resetRulesToDefault(),this.ensureRuleDoesNotExist("default-forwarding-rule"),fe("httpToolkitForwardingDefault").then((0,w.action)(e=>{const[t,n]=e.split("|"),r=((e,t,n)=>({id:"default-forwarding-rule",type:"http",activated:!0,matchers:[new na,new Ss.yN.HostMatcher(e)],completionChecker:new Ss.zO.Always,steps:[new la(void 0,t,!0,n)]}))(t,n,this);this.ensureRuleExists(r)})),"socks"===this.upstreamProxyType&&(0,w.runInAction)(()=>{this.upstreamProxyType="socks5h"}),(0,w.observe)(t,"accountDataLastUpdated",()=>{t.user.isPaidUser()||(this.whitelistedCertificateHosts=["localhost"],this.clientCertificateHostMap={},this.upstreamProxyType="system",this.upstreamNoProxyHosts=[])})})}get activePassthroughOptions(){const e={ignoreHostHttpsErrors:this.whitelistedCertificateHosts,additionalTrustedCAs:this.additionalCaCertificates.map(e=>({cert:e.rawPEM})),clientCertificateHostMap:y.mapValues(this.clientCertificateHostMap,e=>({pfx:lp.from(e.pfx),passphrase:e.passphrase})),proxyConfig:this.proxyConfig,lookupOptions:this.proxyStore.dnsServers.length?{servers:this.proxyStore.dnsServers}:void 0,simulateConnectionErrors:!0};return y.cloneDeep(e)}get effectiveSystemProxyConfig(){const{systemProxyConfig:e}=this.proxyStore;if(!e)return;const{proxyUrl:t}=e;try{const n=new URL(t),{hostname:r}=n;return"localhost"===r||r.startsWith("127.0.0")?"ignored":Object.assign(Object.assign({},e),{additionalTrustedCAs:this.additionalCaCertificates.map(e=>({cert:e.rawPEM}))})}catch(e){return console.log("Could not parse proxy",t),f(e),"unparseable"}}get userProxyConfig(){if("direct"!==this.upstreamProxyType){if("system"===this.upstreamProxyType){const e=this.effectiveSystemProxyConfig;return!e||y.isString(e)?void 0:e}return{proxyUrl:`${this.upstreamProxyType}://${this.upstreamProxyHost}`,noProxy:this.upstreamNoProxyHosts,additionalTrustedCAs:this.additionalCaCertificates.map(e=>({cert:e.rawPEM}))}}}get proxyConfig(){const{userProxyConfig:e}=this,{httpProxyPort:t}=this.proxyStore;if(this.proxyStore.ruleParameterKeys.includes(hp(t))){const n={[Ss.hY]:hp(t)};return e?[n,e]:n}return e}saveRules(){this.rules=this.draftRules,this.resetRuleDrafts()}resetRuleDrafts(){this.draftRules=y.cloneDeep(this.rules)}resetRulesToDefault(){this.rules=Xu(this,this.proxyStore),this.resetRuleDrafts()}get areSomeRulesUnsaved(){return!y.isEqualWith(this.draftRules,this.rules,Gs)}get areSomeRulesNonDefault(){const e=Xu(this,this.proxyStore);return!y.isEqualWith(this.draftRules,e,Gs)}resetRule(e){const{draftRules:t,rules:n}=this,r=Us(t,e);if(Bs(r))throw new Error("Can't reset single rule group");const o=r.id,s=Vs(n,{id:o});if(!s)throw new Error("Can't reset a new rule");const a=Us(n,s),i=Ns(n,s),l=Ns(t,e);let c=_s(t,{id:i.id});if(!c){let e=[i];for(;e.length;){const r=Ns(n,s.slice(0,-e.length)),o=_s(t,{id:r.id});o?(c=e.reduce(({draftParent:e,activeParent:t},n)=>{const r=(0,w.observable)(y.clone(Object.assign(Object.assign({},n),{items:[]}))),o=y.intersectionBy(e.items,t.items,"id"),s=y.intersectionBy(t.items,e.items.concat(n),"id"),a=y.findIndex(s,{id:n.id});if(a>0){const t=o[a-1],n=y.findIndex(e.items,{id:t.id})+1;e.items.splice(n,0,r)}else e.items.unshift(r);return{draftParent:r,activeParent:n}},{draftParent:o,activeParent:r}).draftParent,e=[]):e.unshift(r)}}const d=y.cloneDeep(a);l.id===c.id?Ws(t,e,d):(y.remove(l.items,{id:d.id}),c.items.splice(0,0,d),0!==l.items.length||Ls(l)||this.deleteDraftItem(Vs(this.draftRules,{id:l.id})));const u=c.items,p=i.items,h=y.intersectionBy(u,p,"id"),m=y.intersectionBy(p,u,"id"),g=y.findIndex(m,{id:o});if(y.findIndex(h,{id:o})!==g)if(y.remove(u,{id:o}),y.remove(h,{id:o}),g>0){const e=h[g-1],t=y.findIndex(u,{id:e.id})+1;u.splice(t,0,d)}else u.unshift(d)}saveItem(e){const{draftRules:t,rules:n}=this,r=Us(t,e),o=Ns(t,e);let s=_s(n,{id:o.id});s||(s=this.saveItem(e.slice(0,-1)));const a=r.id,i=Vs(n,{id:a}),l=(0,w.observable)(y.cloneDeep(y.omit(r,"items")));if(Bs(r))if(i){const e=Us(n,i);l.items=y.cloneDeep(e.items)}else l.items=[];if(i){const e=Ns(n,i);if(e===s)Ws(n,i,l);else{const t=y.last(i);e.items.splice(t,1),s.items.push(l),0!==e.items.length||Ls(e)||zs(n,Vs(n,{id:e.id}))}}else s.items.push(l);const c=y.differenceBy(s.items,o.items,"id"),d=y.intersectionBy(s.items,o.items,"id"),u=y.intersectionBy(o.items,s.items,"id");if(y.findIndex(u,{id:a})===y.findIndex(d,{id:a}))return l;const p=y.sortBy(d,e=>y.findIndex(o.items,{id:e.id}));return c.forEach(e=>{const t=Math.min(s.items.indexOf(e),s.items.length);p.splice(t,0,e)}),s.items=p,l}addDraftItem(e,t){if(!t)return void this.draftRules.items.unshift(e);const n=Ns(this.draftRules,t),r=y.last(t);n.items.splice(r,0,e)}deleteDraftItem(e){zs(this.draftRules,e)}moveDraftRule(e,t){const n=Ns(this.draftRules,e),r=Ns(this.draftRules,t),o=y.last(e),s=y.last(t),[a]=n.items.splice(o,1);r.items.splice(s,0,a),0!==n.items.length||Ls(n)||this.deleteDraftItem(Vs(this.draftRules,{id:n.id}))}combineDraftRulesAsGroup(e,t){const n=Us(this.draftRules,e),r=Ns(this.draftRules,t),o=y.last(t),s=r.items[o];r.items[o]={id:crypto.randomUUID(),title:"New group",items:[s,n]},this.deleteDraftItem(e)}updateGroupTitle(e,t){const n=_s(this.draftRules,{id:e}),r=_s(this.rules,{id:e});n.title=t,r&&(r.title=t)}ensureRuleExists(e){const t=Vs(this.rules,{id:e.id}),n=t?Us(this.rules,t):void 0,r=Vs(this.draftRules,{id:e.id}),o=r?Us(this.draftRules,r):void 0;if(Gs(e,n)&&Gs(e,o))return;if(r)return Ws(this.draftRules,r,e),void this.saveItem(r);let s=Vs(this.draftRules,{id:"default-group"});s?Us(this.draftRules,s).items.unshift(e):(this.draftRules.items.push(Gu([e])),s=[this.draftRules.items.length-1]),this.saveItem(s.concat(0))}ensureRuleDoesNotExist(e){const t=Vs(this.rules,{id:e});t&&zs(this.rules,t);const n=Vs(this.draftRules,{id:e});n&&zs(this.draftRules,n)}loadSavedRules(e){this.rules=ip(e,{rulesStore:this}),this.resetRuleDrafts()}}cp([w.computed.struct],mp.prototype,"activePassthroughOptions",null),cp([Ct,w.observable],mp.prototype,"upstreamProxyType",void 0),cp([Ct,w.observable],mp.prototype,"upstreamProxyHost",void 0),cp([Ct("list"),w.observable],mp.prototype,"upstreamNoProxyHosts",void 0),cp([w.computed],mp.prototype,"effectiveSystemProxyConfig",null),cp([w.computed.struct],mp.prototype,"userProxyConfig",null),cp([w.computed.struct],mp.prototype,"proxyConfig",null),cp([Ct("list"),w.observable],mp.prototype,"whitelistedCertificateHosts",void 0),cp([Ct("map",up),w.observable],mp.prototype,"clientCertificateHostMap",void 0),cp([Ct("list"),w.observable],mp.prototype,"additionalCaCertificates",void 0),cp([Ct("object",sp),w.observable],mp.prototype,"rules",void 0),cp([w.observable],mp.prototype,"draftRules",void 0),cp([w.action.bound],mp.prototype,"saveRules",null),cp([w.action.bound],mp.prototype,"resetRuleDrafts",null),cp([w.action.bound],mp.prototype,"resetRulesToDefault",null),cp([w.computed],mp.prototype,"areSomeRulesUnsaved",null),cp([w.computed],mp.prototype,"areSomeRulesNonDefault",null),cp([w.action.bound],mp.prototype,"resetRule",null),cp([w.action.bound],mp.prototype,"saveItem",null),cp([w.action.bound],mp.prototype,"addDraftItem",null),cp([w.action.bound],mp.prototype,"deleteDraftItem",null),cp([w.action.bound],mp.prototype,"moveDraftRule",null),cp([w.action.bound],mp.prototype,"combineDraftRulesAsGroup",null),cp([w.action.bound],mp.prototype,"updateGroupTitle",null),cp([w.action.bound],mp.prototype,"ensureRuleExists",null),cp([w.action.bound],mp.prototype,"ensureRuleDoesNotExist",null),cp([w.action.bound],mp.prototype,"loadSavedRules",null);var gp=n(6289);function fp(e){return e&&!!e.$$typeof}const yp=(0,w.observable)({height:window.innerHeight,width:window.innerWidth});window.addEventListener("resize",(0,w.action)(()=>{yp.height=window.innerHeight,yp.width=window.innerWidth}));const vp=navigator.platform.startsWith("Win"),bp=navigator.platform.startsWith("Mac"),xp=bp?"⌘":"Ctrl",wp=bp?"meta":"control";function Ep(e){return bp?e.metaKey:e.ctrlKey}const Cp=e=>{if(!e)return!1;const t=e,n=t.tagName;return t.isContentEditable||"TEXTAREA"===n||"INPUT"===n||"SELECT"===n},Tp=(e,t,n)=>(0,gp.v)(e,t,{filter:()=>!0},n);function Sp(e,t,n){const r=document.createElement("a"),o=new Blob([n],{type:t}),s=window.URL.createObjectURL(o);r.setAttribute("href",s),r.setAttribute("download",e),r.style.display="none",document.body.appendChild(r),r.click(),document.body.removeChild(r),setTimeout(()=>window.URL.revokeObjectURL(s),1e4)}function Pp(e="arraybuffer",t=[]){var n;if("path"===e&&!Me.value)try{const e=window.prompt("Path selection can only be used from Electron. Please enter a path manually:");return Promise.resolve(e)}catch(e){if(!(null===(n=null==e?void 0:e.message)||void 0===n?void 0:n.includes("prompt() is and will not be supported")))return Promise.reject(e);console.warn("Unexpected Electron prompt() error")}const r=document.createElement("input");r.setAttribute("type","file"),t.length>0&&r.setAttribute("accept",t.join(","));const o=oe();return r.addEventListener("change",()=>{if(!r.files||!r.files.length)return o.resolve(null);const t=r.files[0];if("path"===e){const e=t;return ye.getPathForFile?o.resolve(ye.getPathForFile(t)):e.path?o.resolve(e.path):(window.alert("File path access is not available due to a temporary issue in this release.\n\nPlease update to the latest HTTP Toolkit from httptoolkit.com"),o.resolve(null))}{const n=new FileReader;n.addEventListener("load",()=>{o.resolve(n.result)}),n.addEventListener("error",e=>{o.reject(e)}),"text"===e?n.readAsText(t):n.readAsArrayBuffer(t)}}),r.click(),Promise.race([o.promise,re(6e5)]).catch(()=>{}).then(()=>r.remove()),o.promise}function kp(e){return t=this,n=void 0,o=function*(){if(navigator.clipboard)try{return void(yield navigator.clipboard.writeText(e))}catch(e){console.warn("Copy to clipboard with navigator.clipboard failed",e)}const t=document.createElement("textarea");try{t.value=e,t.style.position="absolute",t.style.left="-9999px",document.body.prepend(t),t.select(),document.execCommand("copy")}catch(e){throw console.warn("Copy to clipboard fallback failed",e),e}finally{t.remove()}},new((r=void 0)||(r=Promise))(function(e,s){function a(e){try{l(o.next(e))}catch(e){s(e)}}function i(e){try{l(o.throw(e))}catch(e){s(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r(function(e){e(n)})).then(a,i)}l((o=o.apply(t,n||[])).next())});var t,n,r,o}function Rp(e){e.target===e.currentTarget&&"Enter"===e.key&&e.currentTarget.dispatchEvent(new MouseEvent("click",{bubbles:!0}))}const Op=e=>t=>{t.stopPropagation(),e(t)},Hp=(e,t)=>n=>{const r="string"!=typeof n,o=r?n.value:n;return r?(!o||e(o)?n.setCustomValidity(""):n.setCustomValidity(t),n.reportValidity(),n.validity.valid):e(o)};const Ap=G(e=>b.createElement(is,{className:e.className,icon:["fas",e.collapsed?"chevron-down":"chevron-up"],onClick:e.onClick}))`
    cursor: pointer;
    user-select: none;

    padding: 4px 10px;
    box-sizing: content-box;
    
    ${e=>"right"===e.headerAlignment?"margin: 0 -10px 0 -3px;":"margin: 0 -3px 0 -10px;"}

    &:hover {
        color: ${e=>e.theme.popColor};
    }
`,$p=G.section.attrs(e=>{var t;return{onClick:e.disabled?void 0:e.onClick,onKeyDown:e.disabled?void 0:e.onKeyDown,tabIndex:e.disabled?void 0:e.tabIndex,headerAlignment:null!==(t=e.headerAlignment)&&void 0!==t?t:"right"}})`
    box-sizing: border-box;

    ${e=>e.disabled&&"\n        opacity: 0.5;\n    "}

    ${e=>!e.disabled&&e.onClick&&Y`
        cursor: pointer;

        &:hover {
            box-shadow: 0 2px 20px 0 rgba(0,0,0,${e=>2*e.theme.boxShadowAlpha});
        }

        &:active {
            box-shadow: unset;
        }
    `}

    background-color: ${e=>e.theme.mainBackground};
    border-radius: 4px;
    box-shadow: 0 2px 10px 0 rgba(0,0,0,${e=>e.theme.boxShadowAlpha});

    position: relative;

    > header h1, > h1 {
        font-size: ${e=>e.theme.headingSize};
        font-weight: bold;
    }

    > header {
        display: flex;
        align-items: center;
        justify-content: flex-end;

        ${e=>"left"===e.headerAlignment&&"\n            flex-direction: row-reverse;\n        "}

        gap: 8px;
    }
`,Ip=G($p)`
    padding: 15px;

    > header:not(:last-child), > h1:not(:last-child) {
        margin-bottom: 15px;
    }
`,qp=G($p)`
    padding: 20px;
    margin-bottom: 20px;

    > header, > h1 {
        text-transform: uppercase;
        text-align: ${e=>e.headerAlignment};
        color: ${e=>e.theme.containerWatermark};

        &:not(:last-child) {
            margin-bottom: 20px;
        }
    }
`,jp=G(qp)`
    padding: 30px;

    > header:not(:last-child), > h1:not(:last-child) {
        margin-bottom: 30px;
    }
`;let Dp=class extends b.Component{constructor(){super(...arguments),this.cardRef=b.createRef(),this.toggleCollapse=()=>{this.props.onCollapseToggled&&(requestAnimationFrame(()=>{this.cardRef.current&&this.cardRef.current.scrollIntoView({block:"nearest",behavior:"smooth"})}),this.props.onCollapseToggled())},this.onKeyDown=e=>{e.target===this.cardRef.current&&"Enter"===e.key&&this.toggleCollapse()}}render(){var e,t;const n=!!this.props.onCollapseToggled;return b.createElement(Mp,{className:this.props.className,collapsed:this.props.collapsed,expanded:null!==(e=this.props.expanded)&&void 0!==e&&e,direction:this.props.direction,headerAlignment:null!==(t=this.props.headerAlignment)&&void 0!==t?t:"right","aria-expanded":n?!this.props.collapsed:void 0,tabIndex:n?0:void 0,ref:this.cardRef,onKeyDown:this.onKeyDown,"aria-label":this.props.ariaLabel},this.renderChildren())}renderChildren(){const{children:e,collapsed:t,headerAlignment:n}=this.props,r=!!this.props.onCollapseToggled;return b.Children.map(e,(e,o)=>{if(0!==o)return t?null:e;if(!r)return e;if("header"!==e.type)throw new Error(`First child of collapsible card must be a header but was ${"string"==typeof e.type?e.type:e.type.name}`);return b.cloneElement(e,{},b.Children.toArray(e.props.children).concat(b.createElement(Ap,{key:"collapse-icon",collapsed:t,onClick:this.toggleCollapse,headerAlignment:null!=n?n:"right"})))})}};Dp=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a}([E.PA],Dp);const Mp=G(qp)`
    display: flex;
    flex-direction: column;

    transition: margin-bottom 0.1s;

    ${e=>e.collapsed&&Y`
        :not(:last-child) {
            margin-bottom: -16px;
        }
    `}

    ${e=>{return e.expanded?Y`
            /* Override the Send container setting this to 'none', which hides non-expanded parts: */
            display: flex !important;

            height: 100%;
            width: 100%;
            border-radius: 0;
            margin: 0;

            flex-shrink: 1;
            min-height: 0;

            ${"starting"===e.expanded?"\n                    padding-top: 40px;\n                    padding-bottom: 40px;\n                ":"transition: padding 0.1s;"}
        `:"right"===(t=e.direction)?Y`
        padding-right: 15px;
        border-right: solid 5px ${e=>e.theme.containerBorder};
    `:"left"===t?Y`
        padding-left: 15px;
        border-left: solid 5px ${e=>e.theme.containerBorder};
    `:"";var t}}

    &:focus {
        ${Ap} {
            color: ${e=>e.theme.popColor};
        }
    }

    &:focus-within {
        header h1 {
            color: ${e=>e.theme.popColor};
        }

        outline: none;
        border-color: ${e=>e.theme.popColor};
    }
`,Fp=G(e=>b.createElement("h1",{className:e.className,onClick:e.onCollapseToggled},e.children))`
    cursor: pointer;
    user-select: none;
`,Bp=Y`
    &[disabled] {
        cursor: default;
    }

    &:not([disabled]) {
        cursor: pointer;
        &:hover {
            background-image: linear-gradient(transparent, rgba(0,0,0,.1) 40%, rgba(0,0,0,.2));
            color: ${e=>e.theme.mainColor};
        }

        &:active {
            background-image: linear-gradient(rgba(0,0,0,.1), rgba(0,0,0,.1) 40%, transparent);
            color: ${e=>e.theme.mainColor};
        }

        &:focus {
            outline-offset: -1px;
            color: ${e=>e.theme.mainColor};
        }
    }
`,Lp=G.button.attrs(()=>({type:"button"}))`
    /* Reset styles that get broken because <button> overrides them: */
    border: none;
    background: none;
    font-family: inherit;
    font-size: inherit;
    color: inherit;

    &[disabled] {
        cursor: default;
    }

    &:not([disabled]) {
        cursor: pointer;
    }
`,Np=Lp.withComponent("a"),Up=Y`
    -webkit-appearance: none;
    cursor: pointer;
    padding: 15px 36px;
    border-radius: 4px;
    border: none;

    font-family: ${e=>e.theme.fontFamily};
    font-size: ${e=>e.theme.headingSize};

    display: block;
    text-decoration: none;
    text-align: center;
    font-weight: inherit;
    line-height: normal;

    ${Bp}
`,Wp=G.button`
    ${Up}

    /*
     * Need both to ensure link button colours have higher
     * specificity than the a:visited default.
     */
    &, &:visited {
        color: ${e=>e.theme.primaryInputColor};
    }

    &[disabled] {
        background-color: ${e=>e.theme.containerWatermark};
    }

    &:not([disabled]) {
        background-color: ${e=>e.theme.primaryInputBackground};
    }
`;Wp.defaultProps={type:"button"};const zp=Wp.withComponent("a"),_p=G.button.attrs(()=>({type:"button"}))`
    ${Up}

    background-color: transparent;

    &, &:visited {
        color: ${e=>e.theme.secondaryInputColor};
    }

    border-width: 2px;
    border-style: solid;

    &[disabled] {
        color: ${e=>e.theme.containerWatermark};
        border-color: ${e=>e.theme.containerWatermark};
    }

    &:not([disabled]) {
        border-color: ${e=>e.theme.secondaryInputBorder};
    }
`,Vp=Y`
    border-color: ${e=>e.theme.warningColor};
    background-color: ${e=>e.theme.warningBackground};
    color: ${e=>e.theme.mainColor};

    &:hover:not(:disabled) {
        border-color: ${e=>e.theme.mainColor};
        background-color: ${e=>e.theme.warningBackground};
    }

    &::placeholder {
        color: ${e=>e.theme.inputWarningPlaceholder};
    }
`,Kp=G.input.attrs(e=>({type:e.type||"text"}))`
    font-size: ${e=>e.theme.textInputFontSize};
    padding: 5px 10px;
    border-radius: 4px;
    border: solid 1px ${e=>e.theme.inputBorder};

    min-width: 20px; /* Without this, editable headers especially refuse to shrink */

    background-color: ${e=>e.theme.inputBackground};
    &:hover:not(:disabled) {
        background-color: ${e=>e.theme.inputHoverBackground};
    }

    &:focus {
        outline-offset: -1px;
    }

    color: ${e=>e.theme.inputColor};

    &:disabled {
        opacity: 0.6;
    }

    &::placeholder {
        color: ${e=>e.theme.inputPlaceholderColor};
    }

    &:invalid {
        ${Vp}
    }

    &:read-only {
        cursor: default;
        outline: none;
    }

    ${e=>e.invalid&&Vp}
`,Jp=G.select`
    ${Bp}

    font-size: ${e=>e.theme.headingSize};
    font-family: ${e=>e.theme.fontFamily};

    width: 100%;
    border-radius: 4px;
`,Qp=Y`
    display: inline-block;
    border-radius: 4px;
    padding: 5px 8px 3px;

    text-align: center;
    text-transform: none;
    font-weight: bold;
    word-spacing: 3px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    color: ${e=>function(e,t,n){const r=.35+(T.bJ(e,t)-1)/20*(1-n)*.65;return T.jh(r,e,t)}(e.color||e.theme.pillDefaultColor,e.theme.mainColor,e.theme.pillContrast)};

    background-color: ${e=>{return t=e.color||e.theme.pillDefaultColor,n=e.theme.mainBackground,T.jh(.3,t,n);var t,n}};
`,Gp=G.span`
    ${Qp}
`,Yp=G(Lp)`
    ${Qp}
    ${Bp}

    padding: 3.5px 8px;
    line-height: 1;

    &[disabled] {
        opacity: 0.5;
    }
`,Xp=G(Gp.withComponent("select"))`
    text-align: left;
    border: none;

    height: 24px;
    padding: 0 4px 0 8px;

    font-size: ${e=>e.theme.textSize};
    font-family: ${e=>e.theme.fontFamily};

    ${Bp}

    * {
        background-color: ${e=>{return t=e.color||e.theme.pillDefaultColor,n=e.theme,T.jh(.3,t,n.mainBackground);var t,n}};
    }
`,Zp=e=>{const t=e.keyFormatter||(e=>e.toString()),n=e.nameFormatter||(e=>e.toString());return b.createElement(Xp,{className:e.className,onChange:t=>e.onChange(t.target.value),value:t(e.value)},"options"in e?e.options.map(e=>b.createElement("option",{key:t(e),value:t(e)},n(e))):y.map(e.optGroups,(e,r)=>b.createElement("optgroup",{key:r,label:r},e.map(e=>b.createElement("option",{key:t(e),value:t(e)},n(e))))))},eh=G(is).attrs(e=>({icon:["fas","times"],size:"2x",tabIndex:0,onClick:e.onClose,onKeyPress:Rp}))`
    position: absolute;
    z-index: 1;
    cursor: pointer;

    color: ${e=>e.theme.mainColor};

    &:focus-visible {
        outline: none;
        color: ${e=>e.theme.popColor};
    }

    top: ${e=>e.top||"10px"};
    right: ${e=>e.right||"15px"};

    &:hover {
        opacity: 0.6;
    }
`,th=G(is).attrs(()=>({icon:["fas","external-link-alt"]}))`
    opacity: 0.5;
    margin-left: 5px;

    &:focus {
        outline: none;
        color: ${e=>e.theme.popColor};
    }
`,nh=G.a`
    &[href] {
        color: ${e=>e.theme.linkColor};

        &:visited {
            color: ${e=>e.theme.visitedLinkColor};
        }
    }
`,rh=e=>e.href?b.createElement(nh,Object.assign({},e,{target:"_blank",rel:"noreferrer noopener"}),e.children?b.createElement(b.Fragment,null,e.children," "):null,b.createElement(th,null)):null;var oh=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const sh=G.div`
    z-index: 0;

    position: absolute;
    bottom: -10px;
    right: -10px;
    z-index: 0;
    opacity: 0.3;

    > svg {
        &:not(:first-child) {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
`,ah=G(Ip)`
    height: 100%;
    width: 100%;
    overflow: hidden;

    ${e=>{if(!e.expanded||!e.uiConfig)return`order: ${e.index};`;const t=Math.min(e.uiConfig.columnWidth,e.gridWidth),n=e.uiConfig.rowHeight;return`\n            order: ${Math.max(-1,e.index-t)};\n            grid-row: span ${n};\n            grid-column: span ${t};\n        `}}

    user-select: none;

    > :not(${sh}) {
        z-index: 1;
    }

    > h1:not(:last-child) {
        margin-bottom: 10px; /* Override LittleCard default */
    }

    > p {
        color: ${e=>e.theme.mainColor};
        line-height: 1.2;

        &:not(:first-of-type) {
            margin-top: 10px;
        }
    }

    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`,ih=G.h1`
    ${e=>e.expanded?"margin-right: 20px;":""}
`,lh=G.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    background-color: rgba(0,0,0,0.2);
    box-shadow: inset 0 2px 10px 0 rgba(0,0,0,${e=>e.theme.boxShadowAlpha});

    display: flex;
    align-items: center;
    justify-content: center;
`,ch=G(Gp)`
    white-space: normal; /* Useful for layout in tiny screens, e.g. the 'proxy port' badge */

    margin-top: auto;
`;let dh=class extends b.Component{constructor(e){super(e),this.expanded=!1,this.cardRef=b.createRef(),this.onActivationStarted=(e={})=>{it({category:"Interceptors",action:"Activated",value:e.idSuffix?`${this.props.interceptor.id}-${e.idSuffix}`:this.props.interceptor.id})},this.activateInterceptor=(e={})=>{const{interceptor:t,interceptorStore:n}=this.props;return n.activateInterceptor(t.id,e)},this.onActivationSuccessful=(e={})=>{it({category:"Interceptors",action:"Successfully Activated",value:e.idSuffix?`${this.props.interceptor.id}-${e.idSuffix}`:this.props.interceptor.id}),!1!==e.showRequests&&this.props.showRequests()}}render(){const{expanded:e,onActivationStarted:t,activateInterceptor:n,onActivationSuccessful:r}=this,{interceptor:o,index:s}=this.props,a=!o.isActivable,{uiConfig:i}=o,l=null==i?void 0:i.configComponent,c=y.isArray(o.iconProps)?o.iconProps:[o.iconProps],d=yp.width>=$?4:3,u=!!l&&!a;return b.createElement(ah,{ref:this.cardRef,index:s,expanded:e,uiConfig:i,gridWidth:d,"data-interceptor-id":o.id,role:this.expanded?"section":"button","aria-expanded":u?this.expanded:void 0,disabled:a,onKeyDown:Rp,onClick:this.expanded?void 0:this.onClick,tabIndex:a||this.expanded?void 0:0},b.createElement(sh,null,c.map((e,t)=>b.createElement(is,Object.assign({key:t,size:"8x"},e)))),b.createElement(ih,{expanded:e},o.name),l&&e?b.createElement(b.Fragment,null,b.createElement(eh,{title:"Close this interceptor",onClose:this.onClose}),b.createElement(l,{interceptor:o,activateInterceptor:n,reportStarted:t,reportSuccess:r,closeSelf:this.onClose})):b.createElement(b.Fragment,null,o.description.map((e,t)=>b.createElement("p",{key:t},e)),function(e){var t,n;if(null===(t=e.uiConfig)||void 0===t?void 0:t.customPill){const t=null===(n=e.uiConfig)||void 0===n?void 0:n.customPill;return b.createElement(t,null)}return e.isActive?b.createElement(ch,{color:"#4caf7d"},"Activated"):e.isActivable?e.experimental?b.createElement(ch,{color:I},"Experimental"):null:e.isSupported?b.createElement(ch,null,"Not available",e.notAvailableHelpUrl?b.createElement(rh,{href:e.notAvailableHelpUrl}):null):b.createElement(ch,{color:j},"Coming soon")}(o),o.inProgress&&b.createElement(lh,null,b.createElement(is,{icon:["fac","spinner-arc"],size:"4x",spin:!0}))))}onClick(){const{onActivationStarted:e,activateInterceptor:t,onActivationSuccessful:n}=this,{interceptor:r}=this.props;r.inProgress||(r.isActivable?r.uiConfig?(this.expanded=!0,requestAnimationFrame(()=>{var e;null===(e=this.cardRef.current)||void 0===e||e.scrollIntoView({block:"nearest",behavior:"smooth"})})):r.customActivation?(e(),r.customActivation(r,this.activateInterceptor,e,n).catch(e=>f(e))):(e(),t(r.activationOptions).then(()=>n()).catch(e=>f(e))):e())}onClose(){this.expanded=!1}};oh([w.observable],dh.prototype,"expanded",void 0),oh([w.action.bound],dh.prototype,"onClick",null),oh([w.action.bound],dh.prototype,"onClose",null),dh=oh([(0,E.WQ)("interceptorStore"),E.PA],dh);const uh=G.h2`
    text-transform: uppercase;
    font-family: ${e=>e.theme.titleTextFamily};
    opacity: ${e=>e.theme.lowlightTextOpacity};

    display: inline-block;
    margin-right: 5px;
`,ph=G.div`
    display: inline-block;
`,hh=G(uh)`
    padding: 3px 0 0;
    margin: 0 0 5px 0;
    min-height: 26px;
    display: block;
    box-sizing: border-box;
`,mh=G.div`
    padding: 3px 0 11px;
    width: 100%;

    &:last-child {
        padding-bottom: 0;
    }

    font-family: ${e=>e.theme.monoFontFamily};
    word-break: break-all;
    line-height: 1.1;
`,gh=G(mh)`
    display: inline;
`,fh=G.span`
    font-family: ${e=>e.theme.monoFontFamily};
    font-size: 90%;
    user-select: all;
    font-weight: bold;

    word-break: break-all; /* Fallback for anybody without break-word */
    word-break: break-word;
`,yh=G.div`
    opacity: ${e=>e.theme.lowlightTextOpacity};
    font-style: italic;
    display: inline-block;
`,vh=e=>b.createElement(bh,Object.assign({},y.omit(e,"htmlContent"),{dangerouslySetInnerHTML:e.htmlContent})),bh=G.div`
    line-height: 1.3;

    p, li, ul, ol, table, h1, h2, h3, h4, h5, h6, pre {
        margin-bottom: 10px;
    }

    p::first-letter,
    li::first-letter,
    h1::first-letter,
    h2::first-letter,
    h3::first-letter,
    h4::first-letter,
    h5::first-letter,
    h6::first-letter {
        text-transform: capitalize;
    }

    ol, ul {
        padding-left: 20px;
    }

    ol {
        list-style: decimal;
    }

    ul {
        list-style: circle;
    }

    table {
        border-collapse: unset;
        border-spacing: 5px;
        margin-left: -5px;
    }

    th {
        min-width: 80px;
    }

    code {
        word-break: break-all; /* Fallback for anybody without break-word */
        word-break: break-word;
        font-family: ${e=>e.theme.monoFontFamily};
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight: bold;
        margin-bottom: 10px;
    }

    pre {
        white-space: pre-wrap;
        display: block;
        border-left: 3px solid ${e=>e.theme.containerWatermark};
        padding-left: 8px;
    }

    img {
        max-width: 100%;
    }

    a[href] {
        color: ${e=>e.theme.linkColor};

        &:visited {
            color: ${e=>e.theme.visitedLinkColor};
        }
    }

    :last-child :last-child {
        margin-bottom: 0;
    }
`,xh=e=>e.content?b.createElement(vh,{htmlContent:ul(e.content.replace(/:suggestion:/g,cs).replace(/:warning:/g,us),{linkify:e.linkify})}):null,wh=G.div`
    display: flex;
    flex-direction: row;
    user-select: text;
    margin-top: 5px;
`,Eh=G.div`
    flex: 1 1 0;

    &:not(:last-child) {
        margin-right: 40px;
    }

    > h2 {
        font-size: ${e=>e.theme.headingSize};
        margin-bottom: 10px;
    }

    > ol {
        list-style: decimal;

        > li {
            margin-left: 20px;
            margin-bottom: 10px;
        }
    }

    > p {
        line-height: 1.3;

        &:not(:last-child) {
            margin-bottom: 10px;
        }
    }

    strong {
        font-weight: bold;
    }

    a[href] {
        color: ${e=>e.theme.linkColor};

        &:visited {
            color: ${e=>e.theme.visitedLinkColor};
        }
    }
`,Ch=G.span`
    white-space: nowrap;
`,Th=(0,E.WQ)("proxyStore")((0,E.PA)(e=>b.createElement(ch,{color:"#4caf7d"},"Proxy port: ",e.proxyStore.httpProxyPort))),Sh=G(e=>b.createElement(Yp,{className:e.className,onClick:()=>Sp("http-toolkit-ca-certificate.crt","application/x-x509-ca-cert",e.certContent)},b.createElement(is,{icon:["fas","download"]})," Export CA certificate"))`
    margin: 0 0 10px 0;
`,Ph={rowHeight:1,columnWidth:4,configComponent:(0,E.WQ)("proxyStore")(e=>{b.useEffect(()=>{e.reportStarted(),e.proxyStore.refreshNetworkAddresses()},[]);const{httpProxyPort:t,certPath:n,certContent:r,externalNetworkAddresses:o}=e.proxyStore;return b.createElement(E.nu,null,()=>b.createElement(wh,null,b.createElement(Eh,null,b.createElement("p",null,"To intercept traffic you need to:"),b.createElement("ol",null,b.createElement("li",null,b.createElement("strong",null,"Proxy your traffic through HTTP Toolkit")),b.createElement("li",null,b.createElement("strong",null,"Trust the certificate authority"))),b.createElement("p",null,"The steps to do this manually depend on the client, but all the details you'll need are shown here."),b.createElement("p",null,"Want your client to be supported automatically? ",b.createElement(Ch,null,b.createElement("a",{href:"https://github.com/httptoolkit/httptoolkit/issues/new"},"Send some feedback")),".")),b.createElement(Eh,null,b.createElement("h2",null,"1. Proxy traffic through HTTP Toolkit"),b.createElement("p",null,"To intercept an HTTP client on this machine, configure it to send traffic via"," ",b.createElement(fh,null,"http://localhost:",t),"."),b.createElement("p",null,"Most tools can be configured to do so by using the above address as an HTTP or HTTPS proxy."),b.createElement("p",null,"In other cases, it's also possible to forcibly reroute traffic using networking tools like iptables."),b.createElement("p",null,"Remote clients like phones should use the IP address of this machine, not localhost",o.length>0?b.createElement(b.Fragment,null,": ",o.map((e,n)=>{const r=0===n?null:n===o.length-1?o.length>2?", or ":" or ":", ";return b.createElement(b.Fragment,{key:e},r,b.createElement(fh,null,"http://",e,":",t))}),"."):".")),b.createElement(Eh,null,b.createElement("h2",null,"2. Trust the certificate authority"),b.createElement("p",null,b.createElement("em",null,"Only required to intercept traffic using HTTPS")),b.createElement("p",null,"HTTP Toolkit has generated a certificate authority (CA) on your machine. All HTTPS interception uses this CA."),r?b.createElement(Sh,{certContent:r}):b.createElement("p",null,"The certificate is stored on your machine at ",b.createElement(fh,null,n),"."),b.createElement("p",null,"To intercept HTTPS traffic you need to configure your HTTP client to trust this certificate as a certificate authority, or to temporarily disable certificate checks entirely."))))}),customPill:Th},kh=G(e=>{var t;return b.createElement(Lp,{className:e.className,title:e.title,tabIndex:null!==(t=e.tabIndex)&&void 0!==t?t:e.disabled?-1:0,disabled:e.disabled,onClick:e.onClick,onKeyDown:e.onKeyDown},Array.isArray(e.icon)?b.createElement(is,{icon:e.icon,size:e.iconSize,fixedWidth:!!e.fixedWidth}):b.createElement(rs,{icon:e.icon,size:e.iconSize||"1.25em"}))})`
    color: ${e=>e.theme.mainColor};
    font-size: ${e=>e.theme.textSize};
    padding: 5px 10px;

    &:disabled {
        opacity: 0.5;
    }

    &:not([disabled]) {
        &:hover, &:focus {
            outline: none;
            color: ${e=>e.theme.popColor};
        }
    }

    .phosphor-icon {
        margin: 0 -3px; /* Fix alignment with FontAwesome in rows e.g. View right footer */
    }
`,Rh=G(e=>b.createElement(Np,{className:e.className,title:e.title,href:e.href,target:e.target,rel:e.rel},b.createElement(is,{icon:e.icon,fixedWidth:!!e.fixedWidth})))`
    color: ${e=>e.theme.mainColor};
    font-size: ${e=>e.theme.textSize};
    padding: 5px 10px;

    &:hover, &:focus {
        outline: none;
        color: ${e=>e.theme.popColor};
    }
`,Oh=G(kh)`
    color: ${e=>e.theme.mainColor};

    &:hover, &:focus {
        color: ${e=>e.theme.popColor};
        outline: none;
    }

    &:active {
        color: ${e=>e.theme.mainColor};
    }
`,Hh=()=>{const[e,t]=b.useState(),[n,r]=b.useState();return[n,()=>{r(!0),e&&(clearTimeout(e),t(void 0)),t(setTimeout(()=>r(void 0),2e3))}]},Ah=e=>{const[t,n]=Hh();return b.createElement(Oh,{title:"Copy this to your clipboard",className:e.className,icon:t?["fas","check"]:["far","copy"],fixedWidth:!0,onClick:()=>{kp(e.content),n(),e.onClick()}})},$h=G(e=>{const[t,n]=Hh();return b.createElement(Yp,{tabIndex:0,onClick:()=>{kp(e.content),n()},className:e.className},b.createElement(is,{icon:t?["fas","check"]:["far","copy"],fixedWidth:!0}),e.children)})`
    padding: 5px 6px;

    > svg {
        margin-right: 4px;
    }
`;var Ih=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const qh=G(e=>b.createElement("div",{className:e.className},b.createElement("code",{onCopy:e.onCopy},e.children),b.createElement(Ah,{onClick:e.onCopy,content:e.children})))`
    display: inline-block;
    margin-top: 20px;

    ${e=>e.disabled&&Y`
        opacity: 0.5;
        pointer-events: none;
    `}

    background-color: ${e=>e.theme.inputBackground};
    &:hover {
        background-color: ${e=>e.theme.inputHoverBackground};
    }
    border: solid 1px ${e=>e.theme.inputBorder};
    color: ${e=>e.theme.inputColor};

    padding: 10px 75px 10px 20px;
    border-radius: 4px;

    > code {
        font-family: ${e=>e.theme.monoFontFamily};
        user-select: all;
    }

    position: relative;
    > button {
        padding: 10px 20px 10px 20px;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;

        border-radius: 0 4px 4px 0;
        border-left: solid 1px ${e=>e.theme.containerBorder};

        background-color: ${e=>e.theme.mainLowlightBackground};

        &:active {
            background-image: linear-gradient(transparent, rgba(0,0,0,.05) 40%, rgba(0,0,0,.1));
        }
    }

    > svg {
        margin: 1px 0 2px;
    }
`,jh=G.div`
    user-select: text;

    > select {
        display: block;
        margin-top: 20px;
        margin-left: 0;
    }
`,Dh="...";let Mh=class extends b.Component{constructor(){super(...arguments),this.reportedActivated=!1,this.shellCommands={[Dh]:{command:'eval "$(curl -sS localhost:..../setup)"',description:""}},this.selectedShell=Dh}get interceptCommand(){return this.shellCommands[this.selectedShell].command}get shellDescription(){return this.shellCommands[this.selectedShell].description}get shouldShowDropdown(){const e="fulfilled"!==Fe.state||je(Fe.value,"^1.8.0"),t=this.selectedShell===Dh||Object.keys(this.shellCommands).length>1;return e&&t}selectShell(e){this.selectedShell=e,this.props.uiStore.preferredShell=e}reportActivated(){this.reportedActivated||(this.reportedActivated=!0,this.props.reportStarted())}componentDidMount(){return e=this,t=void 0,r=function*(){const{port:e,commands:t}=yield this.props.activateInterceptor();if((0,w.runInAction)(()=>{this.shellCommands=t||{Bash:{command:`eval "$(curl -sS localhost:${e}/setup)"`,description:"Bash-compatible"}};const{preferredShell:n}=this.props.uiStore;n&&n in this.shellCommands&&(this.selectedShell=n),this.shellCommands[this.selectedShell]||(this.selectedShell=Object.keys(this.shellCommands)[0])}),this.props.interceptor.isActive)this.reportedActivated=!0;else{const e=setInterval(()=>{this.props.interceptorStore.refreshInterceptors()},2e3);(0,E.bH)(this,()=>clearInterval(e)),(0,w.when)(()=>this.props.interceptor.isActive,()=>{this.reportActivated(),this.props.reportSuccess(),clearInterval(e)})}},new((n=void 0)||(n=Promise))(function(o,s){function a(e){try{l(r.next(e))}catch(e){s(e)}}function i(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(a,i)}l((r=r.apply(e,t||[])).next())});var e,t,n,r}render(){return b.createElement(jh,null,b.createElement("p",null,"Run the command below in any ",this.shellDescription," terminal on this machine to intercept all new processes & containers launched there."),this.shouldShowDropdown?b.createElement(Zp,{onChange:this.selectShell,value:this.selectedShell,options:Object.keys(this.shellCommands)}):null,b.createElement(qh,{onCopy:this.reportActivated,disabled:this.selectedShell===Dh},this.interceptCommand))}};Ih([w.observable],Mh.prototype,"reportedActivated",void 0),Ih([w.observable],Mh.prototype,"shellCommands",void 0),Ih([w.observable],Mh.prototype,"selectedShell",void 0),Ih([w.computed],Mh.prototype,"interceptCommand",null),Ih([w.computed],Mh.prototype,"shellDescription",null),Ih([w.computed],Mh.prototype,"shouldShowDropdown",null),Ih([w.action.bound],Mh.prototype,"selectShell",null),Ih([w.action.bound],Mh.prototype,"reportActivated",null),Mh=Ih([(0,E.WQ)("interceptorStore"),(0,E.WQ)("accountStore"),(0,E.WQ)("uiStore"),E.PA],Mh);const Fh={columnWidth:2,rowHeight:1,configComponent:Mh};var Bh=function(e,t,n,r){return new(n||(n=Promise))(function(o,s){function a(e){try{l(r.next(e))}catch(e){s(e)}}function i(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(a,i)}l((r=r.apply(e,t||[])).next())})};const Lh=G.div`
    user-select: text;

    > p {
        line-height: 1.2;

        &:not(:last-child) {
            margin-bottom: 10px;
        }
    }

    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
`,Nh=G.div`
    flex: 1 1 100%;
`,Uh=G.hr`
    width: 100%;
    margin: 0 0 10px 0;
    border-top: solid 1px ${e=>e.theme.containerBorder};
`,Wh=G(Wp)`
    font-size: ${e=>e.theme.textSize};
    font-weight: bold;
    padding: 10px 24px;

    width: 100%;
    flex-shrink: 0;

    &:not(:last-child) {
        margin-bottom: 10px;
    }
`,zh=G.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    &:not(:last-child) {
        margin-bottom: 10px;
    }

    flex-shrink: 0;
`,_h=G(_p)`
    font-size: ${e=>e.theme.textSize};
    font-weight: bold;
    padding: 10px 24px;

    width: 100%;
    word-break: break-word;
`,Vh=G(Lp)`
    &:hover {
        opacity: 0.6;
    }
`,Kh=navigator.platform.startsWith("Mac")?"mac":navigator.platform.startsWith("Win")?"win":navigator.platform.includes("Linux")?"linux":"unknown";let Jh=class extends b.Component{constructor(){super(...arguments),this.selectApplication=()=>Bh(this,void 0,void 0,function*(){var e;const t=null!==(e=ye.selectApplication)&&void 0!==e?e:()=>Pp("path"),n=yield t();n?this.runApplication(n).then(()=>{this.props.uiStore.rememberElectronPath(n)}):this.props.closeSelf()})}componentDidMount(){return Bh(this,void 0,void 0,function*(){const{previousElectronAppPaths:e}=this.props.uiStore;0===e.length&&(this.selectApplication(),"mac"!==Kh&&this.props.closeSelf())})}runApplication(e){return Bh(this,void 0,void 0,function*(){const{activateInterceptor:t,reportStarted:n,reportSuccess:r}=this.props;n(),t({pathToApplication:e}).then(()=>{r()}).catch(t=>{this.props.uiStore.forgetElectronPath(e),f(t)})})}render(){const e=this.props.uiStore,{previousElectronAppPaths:t,forgetElectronPath:n}=e,r="mac"===Kh?"application":"win"===Kh?"exe":"linux"===Kh?"binary":"application",o="a"===(s=r)[0]||"e"===s[0]?"an":"a";var s;return b.createElement(Lh,null,b.createElement("p",null,"Start an Electron ",r," with HTTP Toolkit's settings injected, to intercept all its HTTP & HTTPS traffic."),"mac"===Kh&&t.length<2&&b.createElement("p",null,"For .app bundles, you can intercept either the bundle (the .app directory) or the executable itself, typically stored in Contents/MacOS inside the bundle."),b.createElement("p",null,t.length?`You can also rerun a previously started ${r}, using the buttons below`:`Once you've run ${o} ${r}, it'll be saved and shown here so you can rerun it later`,"."),b.createElement(Nh,null),b.createElement(Wh,{onClick:this.selectApplication},"Select ",o," ",r),t.length>0&&b.createElement(Uh,null),t.map(e=>b.createElement(zh,{key:e},b.createElement(_h,{title:e,onClick:()=>this.runApplication(e)},"Start ",function(e){if("win"===Kh)return y.last(e.split("\\"));{const t=e.split("/").filter(e=>"bin"!==e&&"run"!==e),n=y.find(t,e=>e.endsWith(".app"));return n?n.slice(0,-4):t[t.length-1]}}(e)),b.createElement(Vh,{onClick:()=>n(e)},b.createElement(is,{icon:["fas","times"]})))))}};Jh=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a}([(0,E.WQ)("uiStore"),E.PA],Jh);const Qh={columnWidth:1,rowHeight:2,configComponent:Jh};var Gh=n(36459);const Yh=G.div`
    user-select: text;

    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;

    > p {
        line-height: 1.2;

        &:not(:last-child) {
            margin-bottom: 5px;
        }

        &:not(:first-child) {
            margin-top: 5px;
        }
    }

    > svg {
        flex: 1 1 200px;
        margin: 0 auto;
        width: auto;

        /* Without white padding, the QR code sometimes isn't scannable */
        padding: 5px;
        background-color: #fff;
    }

    a[href] {
        color: ${e=>e.theme.linkColor};

        &:visited {
            color: ${e=>e.theme.visitedLinkColor};
        }
    }
`,Xh=G.div`
    flex: 1 1 20px;
`;function Zh(e){return e.exchanges.filter(e=>"http://android.httptoolkit.tech/config"===e.request.url).map(e=>e.id)}function em(e,t,n,r){t.ensureRuleExists({id:"default-android-certificate",type:"http",activated:!0,priority:el.OVERRIDE,matchers:[new ta.GET,new Ss.yN.FlexiblePathMatcher("http://android.httptoolkit.tech/config")],completionChecker:new Ss.zO.Always,steps:[new sa(200,void 0,JSON.stringify({certificate:e}),{"content-type":"application/json"})]});const o=Zh(n);(0,w.when)(()=>y.difference(Zh(n),o).length>0).then(()=>{r()})}let tm=class extends b.Component{componentDidMount(){return e=this,t=void 0,r=function*(){const e=this.props.rulesStore,t=this.props.eventsStore,n=this.props.proxyStore,{reportStarted:r,reportSuccess:o}=this.props;n.refreshNetworkAddresses().then(()=>{0===n.externalNetworkAddresses.length&&(alert("Cannot activate Android interception as no network addresses could be detected.\n\nPlease open an issue at github.com/httptoolkit/httptoolkit"),f("Android QR activation failed - no network addresses"),this.props.closeSelf())}),em(n.certContent,e,t,0===Zh(t).length?o:()=>o({showRequests:!1})),r()},new((n=void 0)||(n=Promise))(function(o,s){function a(e){try{l(r.next(e))}catch(e){s(e)}}function i(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(a,i)}l((r=r.apply(e,t||[])).next())});var e,t,n,r}render(){const{certFingerprint:e,httpProxyPort:t,externalNetworkAddresses:n}=this.props.proxyStore,r={addresses:n,port:t,certFingerprint:e},o=Ut(JSON.stringify(r)).toString("base64").replace(/\+/g,"-").replace(/\//g,"_");return b.createElement(Yh,null,b.createElement("p",null,"Scan the QR code below on your device to install the HTTP Toolkit app, and start intercepting HTTP & HTTPS traffic."),b.createElement("p",null,"Don't have a barcode scanner? Install the ",b.createElement("a",{href:`https://play.google.com/store/apps/details?id=tech.httptoolkit.android.v1&referrer=${o}`,target:"_blank",rel:"noreferrer noopener"},"HTTP Toolkit app")," manually instead."),b.createElement(Xh,null),b.createElement(Gh.h,{height:"",width:"",level:"L",value:`https://android.httptoolkit.tech/connect/?data=${o}`}),b.createElement(Xh,null),b.createElement("p",null,"Once activated, this will send all HTTP & HTTPS traffic to HTTP Toolkit, and configure the device to trust its HTTPS certificate by default."),b.createElement("p",null,b.createElement("strong",null,"This won't work immediately for all apps.")," Some may need changes to trust HTTP Toolkit for HTTPS traffic. ",b.createElement("a",{href:"https://httptoolkit.com/docs/guides/android",target:"_blank",rel:"noreferrer noopener"},"See the docs")," for more details."))}};tm=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a}([(0,E.WQ)("proxyStore"),(0,E.WQ)("rulesStore"),(0,E.WQ)("eventsStore"),E.PA],tm);const nm={columnWidth:2,rowHeight:2,configComponent:tm};const rm=G.div`
    text-align: center;
    flex-grow: 1;
    flex-shrink: 1;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    word-break: break-word;
    padding: 0 10px;
`,om=G(is).attrs(()=>({icon:["fas","spinner"],spin:!0,size:"2x"}))`
    display: block;
    margin: 0 auto 10px;
`,sm=G.div`
    overflow-y: auto;
    overscroll-behavior: contain;

    margin: 10px -15px;
    flex-grow: 1;
    flex-shrink: 1;
`,am=G.ul`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
`,im=G.li`
    margin-bottom: -10px;
    padding: 10px;

    &:first-child {
        padding-top: 0;
    }

    &:last-child {
        padding-bottom: 0;
        margin-bottom: 0;
    }
`,lm=G(Wp)`
    user-select: none;
    font-size: ${e=>e.theme.textSize};
    padding: 10px;
    width: 100%;

    display: flex;
    align-items: center;

    ${e=>"active"===e.state&&"&& { background-color: #4caf7d; }"}

    > svg:first-child {
        margin-right: 10px;
        width: 15px;
    }

    position: relative;
`,cm=G.div`
    position: absolute;

    top: 0;
    bottom: 0;
    left: 0;
    width: ${e=>e.progress}%;
    transition: width 0.1s linear;

    background-color: ${e=>e.theme.primaryInputBackground};
    mix-blend-mode: overlay;
    border-radius: 4px;
`,dm=G.div`
    flex-grow: 1;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: center;

    &, & * {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    ${e=>"left"===e.ellipseDirection?"direction: rtl;":""}
`,um=G.div`
    flex-basis: 25px;
    flex-shrink: 999;
`;let pm=class extends b.Component{render(){const{className:e,spinnerText:t,targets:n,interceptTarget:r,ellipseDirection:o}=this.props;return 0===n.length?b.createElement(rm,null,b.createElement(om,null),t):b.createElement(sm,{className:e},b.createElement(am,null,y.map(n,e=>b.createElement(hm,{key:e.id,target:e,interceptTarget:r,ellipseDirection:o}))))}};pm=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a}([E.PA],pm);const hm=e=>{const{target:t,interceptTarget:n,ellipseDirection:r}=e,o="activating"===t.status?b.createElement(is,{icon:["fas","spinner"],spin:!0}):"active"===t.status?b.createElement(is,{icon:["fas","check"]}):t.icon?t.icon:null,s=void 0!==t.progress?b.createElement(cm,{progress:t.progress}):null;return b.createElement(im,null,b.createElement(lm,{title:t.title,state:t.status,disabled:"available"!==t.status,onClick:"available"===t.status?()=>n(t.id):y.noop},s,o,b.createElement(dm,{ellipseDirection:r},t.content),null!==o?b.createElement(um,null):null))};var mm=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const gm=G.div`
    user-select: text;

    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;

    > p {
        line-height: 1.2;

        &:not(:last-child) {
            margin-bottom: 5px;
        }

        &:not(:first-child) {
            margin-top: 5px;
        }
    }

    a[href] {
        color: ${e=>e.theme.linkColor};

        &:visited {
            color: ${e=>e.theme.visitedLinkColor};
        }
    }
`,fm=G(pm)`
    max-height: 280px;
`,ym=G.p`
    font-size: 85%;
    font-style: italic;
`;let vm=class extends b.Component{constructor(){super(...arguments),this.inProgressIds=[],this.onSuccess=()=>{this.props.reportSuccess({showRequests:this.deviceIds.length<=1})}}get deviceIds(){var e;return(null===(e=this.props.interceptor.metadata)||void 0===e?void 0:e.deviceIds)||[]}componentDidMount(){return e=this,t=void 0,r=function*(){1===this.deviceIds.length&&(this.interceptDevice(this.deviceIds[0]),this.props.closeSelf()),(0,E.bH)(this,(0,w.autorun)(()=>{var e;0===(null===(e=this.deviceIds)||void 0===e?void 0:e.length)&&this.props.closeSelf()}))},new((n=void 0)||(n=Promise))(function(o,s){function a(e){try{l(r.next(e))}catch(e){s(e)}}function i(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(a,i)}l((r=r.apply(e,t||[])).next())});var e,t,n,r}render(){return b.createElement(gm,null,this.deviceIds.length>1?b.createElement(b.Fragment,null,b.createElement("p",null,"There are multiple ADB devices connected. Pick which device you'd like to intercept:")):1===this.deviceIds.length?b.createElement(b.Fragment,null,b.createElement("p",null,"There is one ADB device connected."),b.createElement("p",null,"Select the device below to begin setup:")):b.createElement(b.Fragment,null,b.createElement("p",null,"There are no ADB devices connected."),b.createElement("p",null,"Connect an Android device to ADB to begin setup.")),b.createElement(fm,{spinnerText:"Waiting for Android devices to intercept...",targets:this.deviceIds.map(e=>{var t,n,r;const o=this.inProgressIds.includes(e),s=null!==(r=null===(n=null===(t=this.props.interceptor.metadata)||void 0===t?void 0:t.devices)||void 0===n?void 0:n[e].name)&&void 0!==r?r:e;return{id:e,title:`Intercept Android device ${s}${e!==s?` (ID: ${e})`:""}`,status:o?"activating":"available",icon:e.includes("emulator-")?b.createElement(is,{icon:["far","window-maximize"]}):e.match(/\d+\.\d+\.\d+\.\d+:\d+/)?b.createElement(is,{icon:["fas","network-wired"]}):b.createElement(is,{icon:["fas","mobile-alt"]}),content:s}}),interceptTarget:this.interceptDevice,ellipseDirection:"right"}),b.createElement(ym,null,"Take a look at ",b.createElement("a",{href:"https://httptoolkit.com/docs/guides/android/"},"the Android docs")," for a detailed setup guide."))}interceptDevice(e){const{inProgressIds:t,onSuccess:n,props:{proxyStore:r,rulesStore:o,eventsStore:s,reportStarted:a,activateInterceptor:i}}=this;em(r.certContent,o,s,n),a();const l=i({deviceId:e});t.push(e),l.finally((0,w.action)(()=>{y.pull(t,e)}))}};mm([w.computed],vm.prototype,"deviceIds",null),mm([w.observable],vm.prototype,"inProgressIds",void 0),mm([w.action.bound],vm.prototype,"interceptDevice",null),vm=mm([(0,E.WQ)("proxyStore"),(0,E.WQ)("rulesStore"),(0,E.WQ)("eventsStore"),(0,E.WQ)("accountStore"),E.PA],vm);const bm={columnWidth:1,rowHeight:2,configComponent:vm};var xm=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},wm=function(e,t,n,r){return new(n||(n=Promise))(function(o,s){function a(e){try{l(r.next(e))}catch(e){s(e)}}function i(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(a,i)}l((r=r.apply(e,t||[])).next())})};const Em=G.div`
    user-select: text;

    height: 100%;
    max-height: 410px;
    display: flex;
    flex-direction: column;
    justify-content: start;

    margin: 5px -15px -15px -15px;
    width: calc(100% + 30px);

    > p {
        line-height: 1.2;

        &:not(:last-child) {
            margin-bottom: 5px;
        }

        &:not(:first-child) {
            margin-top: 5px;
        }
    }

    a[href] {
        color: ${e=>e.theme.linkColor};

        &:visited {
            color: ${e=>e.theme.visitedLinkColor};
        }
    }
`,Cm=G(pm)`
    padding: 10px 0;
    margin: 0;
    max-height: unset;
`,Tm=G.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;

    z-index: 1;
    box-shadow: 0 0 5px 2px rgba(0,0,0,${e=>e.theme.boxShadowAlpha});

    background-color: ${e=>e.theme.highlightBackground};
    color: ${e=>e.theme.highlightColor};
`,Sm=G.h2`
    height: 34px;
    flex-grow: 1;

    line-height: 32px;
    text-align: center;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`,Pm=G(kh).attrs(()=>({icon:["fas","arrow-left"],title:"Jump to this request on the View page"}))`
    font-size: ${e=>e.theme.textSize};
    color: ${e=>e.theme.highlightColor};
    padding: 0 10px;
`,km=G.div`
    flex-basis: 34px;
    flex-shrink: 999;
    min-width: 5px;
`,Rm=G(Kp)`
    border-style: solid;
    border-width: 1px 0 1px 0;
    border-color: ${e=>e.theme.inputHoverBackground};
    border-radius: 0;

    padding: 10px 10px 8px;

    z-index: 0;
    box-shadow: 0 0 5px 2px rgba(0,0,0,${e=>e.theme.boxShadowAlpha});

    :focus {
        outline: none;
        border-color: ${e=>e.theme.inputBorder};
    }
`,Om=G.p`
    font-weight: bold;
`,Hm=G(({type:e,state:t,className:n})=>"available"===t?null:b.createElement("p",{className:n},(({type:e,state:t})=>{if("launch-required"===t)return"Frida launch required";if("setup-required"===t)return"Frida installation required";if("unavailable"===t)return"android"===e?"Root access not available":"Device must be jailbroken and running Frida server";throw new kt(t)})({type:e,state:t})))`
    margin-top: 5px;
    font-style: italic;

    white-space: normal;
    text-wrap: balance;
`,Am=["com.apple.mobilesafari","com.google.android.googlequicksearchbox"],$m=(e,t)=>{var n;throw t instanceof h?alert(`Failed to ${e}: ${t.failureMessage} (${t.errorCode})`):alert(`Failed to ${e}: ${null!==(n=t.message)&&void 0!==n?n:t}`),t};let Im=class extends b.Component{constructor(){super(...arguments),this.fridaTargets=[],this.updateTargets=(0,w.flow)(function*(){var e,t,n,r;if(!this.selectedHost)return void(this.fridaTargets=[]);const o=yield $e(this.props.interceptor.id,null===(e=this.selectedHost)||void 0===e?void 0:e.id);this.fridaTargets=null!==(r=null===(n=null===(t=null==o?void 0:o.targets)||void 0===t?void 0:t.filter(e=>!Am.includes(e.id)))||void 0===n?void 0:n.map(e=>Object.assign(Object.assign({},e),{name:"App"===e.name?e.id:e.name})))&&void 0!==r?r:[]}.bind(this)),this.inProgressTargetIds=[],this.hostProgress={},this.searchInput=""}get fridaHosts(){var e;return(null===(e=this.props.interceptor.metadata)||void 0===e?void 0:e.hosts)||{}}setHostProgress(e,t){void 0===t?delete this.hostProgress[e]:this.hostProgress[e]=t}componentDidMount(){return wm(this,void 0,void 0,function*(){const e=Object.values(this.fridaHosts);1===e.length&&"available"===e[0].state&&this.selectHost(e[0].id),(0,E.bH)(this,(0,w.autorun)(()=>{var e;this.selectedHostId&&"available"!==(null===(e=this.fridaHosts[this.selectedHostId])||void 0===e?void 0:e.state)&&this.deselectHost(),0===Object.keys(this.fridaHosts).length&&this.props.closeSelf()})),this.updateTargets();const t=setInterval(this.updateTargets,4e3);(0,E.bH)(this,()=>clearInterval(t))})}get deviceClassName(){const e=this.props.interceptor.id;if("android-frida"===e)return"Android";if("ios-frida"===e)return"iOS";throw new Error(`Unknown Frida interceptor type: ${e}`)}get selectedHost(){if(!this.selectedHostId)return;const e=this.getHost(this.selectedHostId);return"unavailable"!==(null==e?void 0:e.state)?e:void 0}getHost(e){return this.fridaHosts[e]}selectHost(e){return wm(this,void 0,void 0,function*(){const t=this.getHost(e);if("available"!==(null==t?void 0:t.state)){if(void 0===this.hostProgress[e])if(this.hostProgress[e]=10,"launch-required"===(null==t?void 0:t.state))yield this.launchInterceptor(e);else{if("setup-required"!==(null==t?void 0:t.state))return;yield this.setupInterceptor(e)}}else this.viewHostTargets(e)})}deselectHost(){this.selectedHostId=void 0}viewHostTargets(e){this.selectedHostId=e,this.searchInput="",this.updateTargets()}setupInterceptor(e){return wm(this,void 0,void 0,function*(){let t=setInterval(()=>{const t=this.hostProgress[e],n=74-t;this.setHostProgress(e,t+Math.floor(n/10))},100);try{this.props.reportStarted({idSuffix:"setup"}),yield this.props.activateInterceptor({action:"setup",hostId:e}).catch(e=>$m("setup Frida",e)),this.props.reportSuccess({idSuffix:"setup",showRequests:!1}),this.setHostProgress(e,75),yield this.launchInterceptor(e)}finally{clearInterval(t),this.setHostProgress(e,void 0)}})}launchInterceptor(e){return wm(this,void 0,void 0,function*(){let t=setInterval(()=>{const t=this.hostProgress[e],n=99-t;this.setHostProgress(e,t+Math.floor(n/5))},100);try{this.props.reportStarted({idSuffix:"launch"}),yield this.props.activateInterceptor({action:"launch",hostId:e}).catch(e=>$m("launch Frida",e)),this.props.reportSuccess({idSuffix:"launch",showRequests:!1}),this.setHostProgress(e,100),yield re(10),(0,w.runInAction)(()=>{this.props.interceptor.metadata.hosts[e].state="available"}),1===Object.values(this.hostProgress).length&&this.viewHostTargets(e)}finally{clearInterval(t),this.setHostProgress(e,void 0)}})}interceptTarget(e){const t=this.selectedHost;t&&(this.inProgressTargetIds.push(e),this.props.reportStarted({idSuffix:"app"}),this.props.activateInterceptor({action:"intercept",hostId:t.id,targetId:e,enableSocks:this.props.accountStore.featureFlags.includes("raw-tunnels")}).catch(t=>$m(`intercept ${e}`,t)).then(()=>{this.props.reportSuccess({idSuffix:"app",showRequests:!0})}).finally((0,w.action)(()=>{y.pull(this.inProgressTargetIds,e)})))}onSearchChange(e){this.searchInput=e.currentTarget.value}render(){const e=this.selectedHost;if(e){const t=this.searchInput.toLowerCase(),n=y.sortBy(this.fridaTargets.filter(({name:e})=>e.toLowerCase().includes(t)),e=>e.name.toLowerCase()),r=this.fridaTargets.length>0&&0===n.length;return b.createElement(Em,null,b.createElement(Tm,null,b.createElement(Pm,{onClick:this.deselectHost}),b.createElement(Sm,null,e.name),b.createElement(km,null)),b.createElement(Rm,{value:this.searchInput,onChange:this.onSearchChange,placeholder:"Search for a target...",autoFocus:!0}),b.createElement(Cm,{spinnerText:r?`No '${this.searchInput}' apps found...`:"Scanning for apps to intercept...",targets:n.map(e=>{const{id:t,name:n}=e,r=this.inProgressTargetIds.includes(t);return{id:t,title:n!==t?`${this.deviceClassName} app: ${n} (${t})`:`${this.deviceClassName} app: ${n}`,status:r?"activating":"available",content:n}}),interceptTarget:this.interceptTarget,ellipseDirection:"right"}))}return b.createElement(Em,null,b.createElement(Cm,{spinnerText:`Waiting for ${this.deviceClassName} devices to attach to...`,targets:Object.values(this.fridaHosts).map(e=>{const{id:t,name:n,state:r}=e,o=void 0!==this.hostProgress[t];return{id:t,title:`${this.deviceClassName} device ${n} (${t}): ${y.startCase(r)}`,icon:t.includes("emulator-")?b.createElement(is,{icon:["far","window-maximize"]}):t.match(/\d+\.\d+\.\d+\.\d+:\d+/)?b.createElement(is,{icon:["fas","network-wired"]}):b.createElement(is,{icon:["fas","mobile-alt"]}),status:o?"activating":"unavailable"===r?"unavailable":"available",progress:this.hostProgress[t],content:b.createElement("div",null,b.createElement(Om,null,n),b.createElement(Hm,{type:e.type,state:e.state}))}}),interceptTarget:this.selectHost,ellipseDirection:"right"}))}};xm([w.computed],Im.prototype,"fridaHosts",null),xm([w.observable],Im.prototype,"fridaTargets",void 0),xm([w.observable],Im.prototype,"inProgressTargetIds",void 0),xm([w.observable],Im.prototype,"hostProgress",void 0),xm([w.action],Im.prototype,"setHostProgress",null),xm([w.computed],Im.prototype,"deviceClassName",null),xm([w.observable],Im.prototype,"selectedHostId",void 0),xm([w.computed],Im.prototype,"selectedHost",null),xm([w.action.bound],Im.prototype,"selectHost",null),xm([w.action.bound],Im.prototype,"deselectHost",null),xm([w.action],Im.prototype,"viewHostTargets",null),xm([w.action.bound],Im.prototype,"interceptTarget",null),xm([w.observable],Im.prototype,"searchInput",void 0),xm([w.action.bound],Im.prototype,"onSearchChange",null),Im=xm([(0,E.WQ)("proxyStore"),(0,E.WQ)("rulesStore"),(0,E.WQ)("eventsStore"),(0,E.WQ)("accountStore"),E.PA],Im);const qm={columnWidth:1,rowHeight:2,configComponent:Im};function jm(e,t,n,r){return o=this,s=void 0,i=function*(){try{yield t({},!1),n()}catch(e){if(!e.metadata||!0!==e.metadata.closeConfirmRequired)throw n(),e;if(!confirm(Zl()`
            Your browser is currently open, and needs to be
            restarted to enable interception. Restart it now?
        `.replace("\n"," ")))return;n(),yield t({closeConfirmed:!0})}r()},new((a=void 0)||(a=Promise))(function(e,t){function n(e){try{l(i.next(e))}catch(e){t(e)}}function r(e){try{l(i.throw(e))}catch(e){t(e)}}function l(t){var o;t.done?e(t.value):(o=t.value,o instanceof a?o:new a(function(e){e(o)})).then(n,r)}l((i=i.apply(o,s||[])).next())});var o,s,a,i}var Dm=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const Mm=G(pm)`
    max-height: 282px;
`;let Fm=class extends b.Component{constructor(){super(...arguments),this.jvmTargets={},this.updateTargets=(0,w.flow)(function*(){var e;const t=yield $e("attach-jvm");this.jvmTargets=null!==(e=null==t?void 0:t.jvmTargets)&&void 0!==e?e:{}}.bind(this)),this.inProgressPids=[]}componentDidMount(){this.updateTargets();const e=setInterval(this.updateTargets,2e3);(0,E.bH)(this,()=>clearInterval(e))}render(){const e=Object.values(this.jvmTargets).filter(e=>!e.name.startsWith("org.apache.maven.wrapper.MavenWrapperMain ")),t=this.props.proxyStore.httpProxyPort;return b.createElement(Bm,null,b.createElement("p",null,"Pick which JVM process you'd like to intercept:"),b.createElement(Mm,{spinnerText:"Looking for JVM processes to intercept...",interceptTarget:this.interceptTarget,ellipseDirection:"left",targets:e.map(e=>{const n=this.inProgressPids.includes(e.pid),r=void 0!==e.interceptedByProxy,o=e.interceptedByProxy===t,s=e.name.split(" ")[0];let a,i;if(s.includes("/")||s.includes("\\")){const[e,...t]=s.split(/\/|\\/).reverse(),n=t.reverse().join("/");a=n?n+"/":"",i=e}else{const[e,...t]=s.split(".").reverse(),n=t.reverse().join(".");a=n?n+".":"",i=e}return{id:e.pid,title:e.name,status:n?"activating":o?"active":r?"unavailable":"available",content:b.createElement(b.Fragment,null,b.createElement(Nm,null,a),b.createElement(Um,null,i))}})}),b.createElement(Lm,null,"You can also launch JVM processes from an intercepted terminal, where they'll be intercepted automatically."))}interceptTarget(e){const{inProgressPids:t,props:{reportStarted:n,activateInterceptor:r,proxyStore:o}}=this;n();const s=r({targetPid:e});s.then(()=>{const t=this.jvmTargets[e];t&&(t.interceptedByProxy=o.httpProxyPort),this.props.reportSuccess({showRequests:!1})}),t.push(e),s.finally((0,w.action)(()=>{y.pull(t,e)}))}};Dm([w.observable.shallow],Fm.prototype,"jvmTargets",void 0),Dm([w.observable],Fm.prototype,"inProgressPids",void 0),Dm([w.action.bound],Fm.prototype,"interceptTarget",null),Fm=Dm([(0,E.WQ)("proxyStore"),E.PA],Fm);const Bm=G.div`
    user-select: text;

    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > p {
        line-height: 1.2;

        &:not(:last-child) {
            margin-bottom: 5px;
        }

        &:not(:first-child) {
            margin-top: 5px;
        }
    }

    a[href] {
        color: ${e=>e.theme.linkColor};

        &:visited {
            color: ${e=>e.theme.visitedLinkColor};
        }
    }
`,Lm=G.p`
    font-size: 85%;
    font-style: italic;
`,Nm=G.span`
    opacity: 0.6;
`,Um=G.span`
    font-weight: bold;
`,Wm={columnWidth:1,rowHeight:2,configComponent:Fm};var zm=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const _m=G.div`
    user-select: text;

    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > p {
        line-height: 1.2;

        &:not(:last-child) {
            margin-bottom: 5px;
        }

        &:not(:first-child) {
            margin-top: 5px;
        }
    }

    a[href] {
        color: ${e=>e.theme.linkColor};

        &:visited {
            color: ${e=>e.theme.visitedLinkColor};
        }
    }
`,Vm=G(pm)`
    max-height: 262px;
`,Km=G.p`
    font-size: 85%;
    font-style: italic;
`,Jm="tech.httptoolkit.docker.proxy";let Qm=class extends b.Component{constructor(){super(...arguments),this.targets={},this.updateTargets=(0,w.flow)(function*(){var e;const t=yield $e("docker-attach");this.targets=null!==(e=null==t?void 0:t.targets)&&void 0!==e?e:{}}.bind(this)),this.inProgressIds=[]}componentDidMount(){this.updateTargets();const e=setInterval(this.updateTargets,2e3);(0,E.bH)(this,()=>clearInterval(e))}render(){const e=this.props.proxyStore.httpProxyPort,t=Object.values(this.targets).filter(e=>!e.image.startsWith("httptoolkit/docker-socks-tunnel"));return b.createElement(_m,null,b.createElement("p",null,"Pick a container to restart it with all traffic intercepted:"),b.createElement(Vm,{spinnerText:"Looking for Docker containers to intercept...",interceptTarget:this.interceptTarget,ellipseDirection:"left",targets:t.map(t=>{var n;const r=this.inProgressIds.includes(t.id),o=t.labels[Jm]===e.toString(),s=(null===(n=t.names[0])||void 0===n?void 0:n.replace(/^\//,""))||t.id.slice(0,8),a=t.id.startsWith(s)?`'${s}'`:`'${s}' (${t.id.slice(0,8)})`;return{id:t.id,title:`Container ${a}, from image '${t.image}'`,status:r?"activating":o?"active":"available",content:b.createElement(b.Fragment,null,b.createElement(Gm,null,s),b.createElement(Ym,null,t.image))}})}),b.createElement(Km,null,"You can also create Docker containers from an intercepted terminal, where they'll be intercepted automatically."))}interceptTarget(e){const{inProgressIds:t,props:{reportStarted:n,activateInterceptor:r,proxyStore:o}}=this;n();const s=r({containerId:e});s.then(()=>{const t=this.targets[e];t&&(t.labels[Jm]=o.httpProxyPort.toString()),this.props.reportSuccess({showRequests:!1})}),t.push(e),s.finally((0,w.action)(()=>{y.pull(t,e)}))}};zm([w.observable.shallow],Qm.prototype,"targets",void 0),zm([w.observable],Qm.prototype,"inProgressIds",void 0),zm([w.action.bound],Qm.prototype,"interceptTarget",null),Qm=zm([(0,E.WQ)("proxyStore"),E.PA],Qm);const Gm=G.div`
    font-weight: bold;
`,Ym=G.div`
    opacity: 0.6;
`,Xm={columnWidth:1,rowHeight:2,configComponent:Qm};let Zm=class extends b.Component{componentDidMount(){return e=this,t=void 0,r=function*(){const{eventsStore:e,reportStarted:t,reportSuccess:n,closeSelf:r}=this.props;r(),window.open("https://httptoolkit.com/docs/guides/ios/","_blank","noreferrer noopener"),t();const o=eg(e);(0,w.when)(()=>y.difference(eg(e),o).length>0).then(()=>{n()})},new((n=void 0)||(n=Promise))(function(o,s){function a(e){try{l(r.next(e))}catch(e){s(e)}}function i(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(a,i)}l((r=r.apply(e,t||[])).next())});var e,t,n,r}render(){return null}};function eg(e){return e.exchanges.filter(e=>y.isEqual(e.request.source.icon,ss.iOS)).map(e=>e.id)}Zm=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a}([(0,E.WQ)("eventsStore"),E.PA],Zm);const tg={columnWidth:1,rowHeight:1,configComponent:Zm},ng=["browsers","web","pwa"],rg=["jvm","java","scala","kotlin","clojure","groovy"],og=["mobile","phone","app"],sg=["samsung","galaxy","nokia","lg","android","google","motorola",...rg],ag=["apple","ios","iphone","ipad"],ig=["command line","cli","docker","bash","cmd","shell","php","ruby","node","js",...rg],lg=y.assign({style:{transform:"translateY(32px)"}},ss.Android),cg=(e,t)=>Object.assign(Object.assign({},e),{color:t}),dg="manual-setup",ug=({serverVersion:e})=>({webExtensionEnabled:je(e||"","^1.10.3")}),pg={"docker-attach":{name:"Attach to Docker Container",description:["Intercept all traffic from running Docker containers"],uiConfig:Xm,iconProps:ss.Docker,tags:["bridge","services","images"]},"fresh-chrome":{name:"Chrome",description:["Intercept a fresh independent Chrome window"],iconProps:ss.Chrome,tags:ng,getActivationOptions:ug},"existing-chrome":{name:"Global Chrome",description:["Intercept your main Chrome profile globally","This captures all default Chrome traffic, so may interfere with normal usage"],customActivation:jm,iconProps:[ss.Chrome,{icon:["fas","globe"],color:"#fafafa",size:"2x"}],tags:ng,getActivationOptions:ug},"fresh-chrome-beta":{name:"Chrome (Beta)",description:["Intercept a fresh independent Chrome window"],iconProps:cg(ss.Chrome,"#DB4437"),tags:ng,getActivationOptions:ug},"fresh-chrome-dev":{name:"Chrome (Dev)",description:["Intercept a fresh independent Chrome window"],iconProps:cg(ss.Chrome,"#74929f"),tags:ng,getActivationOptions:ug},"fresh-chrome-canary":{name:"Chrome (Canary)",description:["Intercept a fresh independent Chrome window"],iconProps:cg(ss.Chrome,"#e8ab01"),tags:ng,getActivationOptions:ug},"fresh-chromium":{name:"Chromium",description:["Intercept a fresh independent Chromium window"],iconProps:ss.Chromium,tags:ng,getActivationOptions:ug},"existing-chromium":{name:"Global Chromium",description:["Intercept your main Chromium profile globally","This captures all default Chromium traffic, so may interfere with normal usage"],customActivation:jm,iconProps:[ss.Chromium,{icon:["fas","globe"],color:"#fafafa",size:"2x"}],tags:ng,getActivationOptions:ug},"fresh-chromium-dev":{name:"Chromium (Dev)",description:["Intercept a fresh independent Chromium window"],iconProps:cg(ss.Chromium,"#74929f"),tags:ng,getActivationOptions:ug},"fresh-brave":{name:"Brave",description:["Intercept a fresh independent Brave window"],iconProps:ss.Brave,tags:ng,getActivationOptions:ug},"fresh-firefox":{name:"Firefox",description:["Intercept a fresh independent Firefox window"],iconProps:ss.Firefox,tags:ng,checkRequirements:({interceptorVersion:e})=>je(e,"^1.1.0")},"fresh-firefox-dev":{name:"Firefox (Dev)",description:["Intercept a fresh independent Firefox Developer window"],iconProps:cg(ss.Firefox,"#007EE7"),tags:ng},"fresh-firefox-nightly":{name:"Firefox (Nightly)",description:["Intercept a fresh independent Firefox Nightly window"],iconProps:cg(ss.Firefox,"#1ED5E2"),tags:ng},"existing-arc":{name:"Global Arc Browser",description:["Intercept Arc Browser globally on this machine","This captures all Arc traffic, so may interfere with normal usage"],iconProps:ss.Arc,tags:ng,getActivationOptions:ug,checkRequirements:({accountStore:e})=>e.featureFlags.includes("arc-browser")},"fresh-safari":{name:"Safari",description:["Intercept a fresh independent Safari window"],iconProps:ss.Safari,tags:ng},"fresh-edge":{name:"Edge",description:["Intercept a fresh independent Edge window"],iconProps:ss.Edge,tags:ng,getActivationOptions:ug},"fresh-edge-beta":{name:"Edge (Beta)",description:["Intercept a fresh independent Edge window"],iconProps:cg(ss.Edge,"#50e6ff"),tags:ng,getActivationOptions:ug},"fresh-edge-dev":{name:"Edge (Dev)",description:["Intercept a fresh independent Edge window"],iconProps:cg(ss.Edge,"#74929f"),tags:ng,getActivationOptions:ug},"fresh-edge-canary":{name:"Edge (Canary)",description:["Intercept a fresh independent Edge window"],iconProps:cg(ss.Edge,"#ffc225"),tags:ng,getActivationOptions:ug},"fresh-opera":{name:"Opera",description:["Intercept a fresh independent Opera window"],iconProps:ss.Opera,tags:ng,checkRequirements:({interceptorVersion:e})=>je(e,"^1.0.3"),getActivationOptions:ug},"attach-jvm":{name:"Attach to JVM",description:["Attach to any local running JVM process, including Java, Kotlin & Clojure"],iconProps:ss.Java,uiConfig:Wm,tags:rg},"fresh-terminal":{name:"Fresh Terminal",description:["Open a new terminal that intercepts all processes & Docker containers"],iconProps:ss.Terminal,tags:ig},"existing-terminal":{name:"Existing Terminal",description:["Intercept launched processes & Docker containers from an existing terminal window"],iconProps:cg(ss.Terminal,"#dd44dd"),uiConfig:Fh,tags:ig},"android-adb":{name:"Android Device via ADB",description:["Intercept an Android device or emulator connected to ADB","Automatically injects system HTTPS certificates into rooted devices & most emulators"],notAvailableHelpUrl:"https://httptoolkit.com/docs/guides/android/#android-device-via-adb-interception-option-is-not-available",iconProps:lg,checkRequirements:({serverVersion:e})=>je(e||"",Ne),uiConfig:bm,tags:[...og,...sg,"emulator","root","adb"]},"android-device":{name:"Android Device via QR code",description:["Intercept any Android device on your network","Manual setup required for HTTPS in some apps"],iconProps:cg(lg,"#4285F4"),checkRequirements:({serverVersion:e})=>je(e||"",Ne),clientOnly:!0,uiConfig:nm,tags:[...og,...sg]},"android-frida":{name:"Android App via Frida",description:["Intercept a target Android app","This automatically disables most certificate pinning","Requires a rooted device connected to ADB"],iconProps:cg(lg,"#ef6456"),uiConfig:qm,tags:[...og,...sg],experimental:!0},"ios-frida":{name:"iOS App via Frida",description:["Intercept a target iOS app","This automatically disables most certificate pinning","Requires a jailbroken device running Frida Server"],iconProps:cg(ss.iOS,"#ef6456"),uiConfig:qm,tags:[...og,...ag],experimental:!0},"manual-ios-device":{name:"iOS via Manual Setup",description:["Manually intercept all HTTP and HTTPS traffic from any iPhone or iPad"],iconProps:ss.iOS,clientOnly:!0,uiConfig:tg,tags:[...og,...ag]},"ios-device":{name:"Automatic iOS Device Setup",description:["Intercept all HTTP traffic from an iOS device on your network"],iconProps:ss.iOS,tags:[...og,...ag]},"network-device":{name:"A Device on Your Network",description:["Intercept all HTTP traffic from another device on your network"],iconProps:ss.Network,tags:[...og,...ag,...sg,"lan","arp","wifi"]},"virtualbox-machine":{name:"A Virtualbox VM",description:["Intercept all traffic from a Virtualbox VM"],iconProps:ss.Desktop,tags:["virtual machine","vagrant"]},"system-proxy":{name:"Everything",description:["Intercept all HTTP traffic on this machine"],iconProps:ss.Desktop,tags:["local","machine","system","me"]},electron:{name:"Electron Application",description:["Launch an Electron application with all its traffic intercepted"],iconProps:ss.Electron,uiConfig:Qh,tags:["electron","desktop","postman"]},[dg]:{name:"Anything",description:["Manually configure any source using the proxy settings and CA certificate"],iconProps:ss.Unknown,clientOnly:!0,uiConfig:Ph,tags:[]}};function hg(e,t,n){const r=y.keyBy(e,"id");return y.mapValues(pg,(e,o)=>{if(!e.clientOnly&&!r[o]||e.checkRequirements&&!e.checkRequirements({interceptorVersion:(r[o]||{}).version,accountStore:t,serverVersion:n}))return y.assign({},e,{id:o,isSupported:!1,isActive:!1,isActivable:!1,activationOptions:void 0});if(e.clientOnly)return y.assign({},e,{id:o,isSupported:!0,isActive:!1,isActivable:!0,activationOptions:e.getActivationOptions?e.getActivationOptions({accountStore:t,serverVersion:n}):void 0});{const s=r[o];return y.assign({},e,s,{id:o,isSupported:!0,activationOptions:e.getActivationOptions?e.getActivationOptions({accountStore:t,serverVersion:n}):void 0})}})}var mg=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},gg=function(e,t,n,r){return new(n||(n=Promise))(function(o,s){function a(e){try{l(r.next(e))}catch(e){s(e)}}function i(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(a,i)}l((r=r.apply(e,t||[])).next())})};class fg{constructor(e,t){this.proxyStore=e,this.accountStore=t,this.initialized=ue(()=>gg(this,void 0,void 0,function*(){yield Promise.all([this.proxyStore.initialized,this.accountStore.initialized]),yield this.refreshInterceptors();const e=setInterval(()=>this.refreshInterceptors(),1e4);window.addEventListener("beforeunload",()=>{clearInterval(e)}),console.log("Interceptor store initialized")})),this.activateInterceptor=(e,t)=>(this.interceptors[e].inProgress=!0,function(e,t,n){return Pe(this,void 0,void 0,function*(){var r,o,s;try{const r=yield(yield He()).activateInterceptor(e,t,n);if(r.success)return r.metadata;throw console.log("Activation result",JSON.stringify(r)),new m(e,r.metadata)}catch(t){throw t instanceof p?new h(e,null!==(o=null===(r=t.apiError)||void 0===r?void 0:r.message)&&void 0!==o?o:`Failed to activate interceptor ${e}`,null===(s=t.apiError)||void 0===s?void 0:s.code,t):t}})}(e,this.proxyStore.httpProxyPort,t).then(e=>e||!0).finally((0,w.action)(()=>{this.interceptors[e].inProgress=!1,this.refreshInterceptors()}))),this.interceptors=hg([],t)}refreshInterceptors(){return gg(this,void 0,void 0,function*(){const e=yield function(e){return Pe(this,void 0,void 0,function*(){return(yield He()).getInterceptors(e)})}(this.proxyStore.httpProxyPort),t=yield Fe;(0,w.runInAction)(()=>{const n=hg(e,this.accountStore,t);!n["fresh-chrome"].isActivable&&n["existing-chrome"].isActivable&&(n["existing-chrome"].isActivable=!1),this.interceptors=n})})}}mg([w.observable],fg.prototype,"interceptors",void 0),mg([w.action.bound],fg.prototype,"activateInterceptor",void 0);var yg=n(781),vg=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},bg=function(e,t,n,r){return new(n||(n=Promise))(function(o,s){function a(e){try{l(r.next(e))}catch(e){s(e)}}function i(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(a,i)}l((r=r.apply(e,t||[])).next())})};const xg=ht.gt({spec:ht.lS(),serverMatcher:Is,requestMatchers:(wg=ht.Ik(ht.gt({pathMatcher:Is,queryMatcher:ht.lS()})),Eg=ht.Ie(({path:e})=>e,(e,t)=>({path:e,pathSpec:t.json.spec.paths[e]})),ht.Ie(e=>Array.from(e.entries()).map(e=>[wg.serializer(e[0]),Eg.serializer(e[1])]),(e,t,n,r)=>r(null,new Map(e.map(e=>[Ms(wg,e[0],t),Ms(Eg,e[1],t)])))))});var wg,Eg;const Cg={"localhost:5001/api/v0":"ipfs","127.0.0.1:5001/api/v0":"ipfs","localhost:5002/api/v0":"ipfs","127.0.0.1:5002/api/v0":"ipfs","ipfs.infura.io:5001/api/v0":"ipfs","localhost:8545/":"ethereum","127.0.0.1:8545/":"ethereum","mainnet.":"ethereum","ropsten.":"ethereum","rinkeby.":"ethereum","kovan.":"ethereum","goerli.":"ethereum","mainnet-":"ethereum","web3.ens.domains/v1/mainnet":"ethereum"};class Tg{constructor(e){this.accountStore=e,this.initialized=ue(()=>bg(this,void 0,void 0,function*(){yield this.accountStore.initialized,(0,w.observe)(this.accountStore,"accountDataLastUpdated",()=>{this.accountStore.user.isPaidUser()||(this.customOpenApiSpecs={})}),yield Tt({storage:o,jsonify:!1,key:"api-store",store:this}),console.log("API store initialized")})),this.customOpenApiSpecs={},this.publicApiCache={}}addCustomApi(e,t){this.customOpenApiSpecs[e]=t}deleteCustomApi(e){delete this.customOpenApiSpecs[e]}get customOpenApiInfo(){return y.mapValues(this.customOpenApiSpecs,e=>({info:y.cloneDeep(e.spec.info)}))}get customOpenApiSpecsByUrl(){return new Map(Object.entries(this.customOpenApiSpecs).map(([e,t])=>[new URL("https://"+e.replace(/\/$/,"")),t]).sort(([e,t],[n,r])=>e.port&&!n.port?-1:n.port&&!e.port?1:n.pathname.length-e.pathname.length))}getPrivateApi(e){const t=y.find([...this.customOpenApiSpecsByUrl.keys()],t=>t.hostname===e.hostname&&(!t.port||t.port===e.port||"443"===t.port&&"https"===e.protocol||"80"===t.port&&"http"===e.protocol)&&e.pathname.startsWith(t.pathname));return t?this.customOpenApiSpecsByUrl.get(t):void 0}getPublicApi(e){const{publicApiCache:t}=this;return t[e]||(t[e]=function(e){return bg(this,void 0,void 0,function*(){return(yield fetch(`/api/${e}.json`)).json()})}(e).then(_l).catch(t=>{if("Failed to fetch"===t.message)throw console.warn("Failed to fetch API spec",e,t),t;throw console.log(`Failed to build API ${e}`),f(t,{apiSpecId:e}),t})),t[e]}getApi(e){return bg(this,void 0,void 0,function*(){const{parsedUrl:t}=e;if("github.com"===t.hostname)return;let n=this.getPrivateApi(t);if(n)return Promise.resolve(n);let r=function(e){const t=(0,yg.findApi)(e);if(t)return t;const n=Object.keys(Cg).find(t=>e.startsWith(t));return n?Cg[n]:void 0}(`${t.host}${t.pathname}`);if(!r)return;Array.isArray(r)||(r=[r]),r=r.filter(e=>"microsoft.com/graph"!==e);const o=yield Promise.all(r.map(e=>this.getPublicApi(e)));return 1===o.length?o[0]:function(e,t){const n=e.filter(e=>"openrpc"==e.type||xl(e,t).matched);return 1===n.length?n[0]:0===n.length?y.maxBy(e,e=>e.spec.paths.length):(f("Overlapping APIs",n),y.maxBy(n,e=>Object.keys(e.spec.paths).length))}(o,e)})}}function Sg(e){try{return new URL(e).host}catch(e){return}}vg([Ct("map",xg),w.observable.shallow],Tg.prototype,"customOpenApiSpecs",void 0),vg([w.computed],Tg.prototype,"customOpenApiInfo",null),vg([w.computed],Tg.prototype,"customOpenApiSpecsByUrl",null);var Pg=n(48287).Buffer,kg=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};class Rg{constructor(e){if(this.method="GET",this.url="",this.headers=[],this.requestContentType="text",e){this.method=e.method,this.url=e.url,this.headers=e.headers,this.requestContentType=e.requestContentType;const t=e.rawBody instanceof nc?e.rawBody.decoded:e.rawBody;this.rawBody=new nc(t,void 0,()=>this.headers)}else this.rawBody=new nc(Pg.from([]),void 0,()=>this.headers);!function(e,t){let n=Sg(e());(0,w.reaction)(()=>e(),e=>{var r;const o=t(),s=null!==(r=un(o,"host"))&&void 0!==r?r:"",a=Sg(e);s!==n&&void 0!==n||(a?hn(o,"host",a,{prepend:!0}):mn(o,"host")),n=a})}(()=>this.url,()=>this.headers),function(e,t){let n=e.latestEncodedLength,r=e.encodingPromise;(0,w.reaction)(()=>e.latestEncodedLength,o=>{if(r===e.encodingPromise)return void(n=o);const s=t(),a=function(e){return un(e,"transfer-encoding")?"transfer-encoding":un(e,"content-length")?"content-length":void 0}(s);o?n?"content-length"===a&&n===parseInt(un(s,"content-length"))&&hn(s,"content-length",o.toString()):a&&"content-length"!==a||hn(s,"content-length",o.toString()):a&&mn(s,a),n=o})}(this.rawBody,()=>this.headers),function(e,t,n){let r=t();(0,w.reaction)(()=>un(e(),"content-type"),e=>{const t=Nn(e);t&&n(t)}),(0,w.reaction)(()=>t(),t=>{const n=un(e(),"content-type"),o=Nn(n);n&&r!==o||hn(e(),"content-type",Wn(t)),r=t})}(()=>this.headers,()=>this.requestContentType,e=>{this.requestContentType=e})}}kg([w.observable],Rg.prototype,"method",void 0),kg([w.observable],Rg.prototype,"url",void 0),kg([w.observable],Rg.prototype,"headers",void 0),kg([w.observable],Rg.prototype,"requestContentType",void 0),kg([w.observable],Rg.prototype,"rawBody",void 0);const Og=ht.PL(Rg,{method:ht.MY(),url:ht.MY(),headers:ht.p_(ht.p_(ht.MY())),requestContentType:ht.MY(),rawBody:ht.Ie(e=>e.decoded.toString("base64"),()=>ht._Z)},e=>{const t=e.json,n=Pg.from(t.rawBody,"base64");return new Rg(Object.assign(Object.assign({},t),{rawBody:n}))}),Hg=ht.gt({id:ht.MY(),request:ht.Ik(Og),sentExchange:!1,pendingSend:!1});function Ag(e,t){const n=new URL(e.url);return{id:crypto.randomUUID(),httpVersion:"1.1",matchedRuleId:!1,method:e.method,url:e.url,protocol:n.protocol.slice(0,-1),path:n.pathname,headers:cn(e.headers),rawHeaders:y.cloneDeep(e.headers),body:t,timingEvents:{startTime:Date.now()},tags:["httptoolkit:manually-sent-request"]}}const $g="__rule_param_reference__";var Ig=n(48287).Buffer,qg=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},jg=function(e,t,n,r){return new(n||(n=Promise))(function(o,s){function a(e){try{l(r.next(e))}catch(e){s(e)}}function i(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(a,i)}l((r=r.apply(e,t||[])).next())})};class Dg{constructor(e,t,n,r){this.accountStore=e,this.eventStore=t,this.rulesStore=n,this.proxyStore=r,this.initialized=ue(()=>jg(this,void 0,void 0,function*(){yield Promise.all([this.accountStore.initialized,this.eventStore.initialized,this.rulesStore.initialized,this.proxyStore.initialized]),this.accountStore.mightBePaidUser&&(yield Tt({key:"send-store",store:this})),0===this.sendRequests.length&&this.addRequestInput(),this.selectedRequest=this.sendRequests[this.sendRequests.length-1],console.log("Send store initialized")})),this.sendRequests=[],this.sendRequest=e=>jg(this,void 0,void 0,function*(){var t,n,r;it({category:"Send",action:"Sent request"});const o=e.request,s=de(),a=new AbortController;try{(0,w.runInAction)(()=>{e.sentExchange=void 0,e.pendingSend={promise:s.promise,abort:()=>a.abort()};const t=(0,w.action)(()=>{e.pendingSend=void 0});e.pendingSend.promise.then(t,t)});const i=this.rulesStore.activePassthroughOptions,l=new URL(o.url),c=(e=>e.port?parseInt(e.port,10):"https:"===e.protocol||"wss:"===e.protocol?443:80)(l),d=`${l.hostname}:${c}`,u=(null===(t=i.clientCertificateHostMap)||void 0===t?void 0:t[d])||(null===(n=i.clientCertificateHostMap)||void 0===n?void 0:n[l.hostname])||(null===(r=i.clientCertificateHostMap)||void 0===r?void 0:r["*"])||void 0,p=this.rulesStore.additionalCaCertificates.map(e=>({cert:e.rawPEM})),h={ignoreHostHttpsErrors:i.ignoreHostHttpsErrors,additionalTrustedCAs:p,trustAdditionalCAs:p,clientCertificate:u,proxyConfig:Fg(this.rulesStore.proxyConfig),lookupOptions:i.lookupOptions,keyLogFile:this.proxyStore.keyLogFilePath},m=yield o.rawBody.encodingBestEffortPromise,g=yield function(e,t,n){return Pe(this,void 0,void 0,function*(){const r=yield He();if(!(r instanceof Se))throw new Error("Requests cannot be sent via the GraphQL API client");return r.sendRequest(e,t,{abortSignal:n})})}({url:o.url,method:o.method,headers:o.headers,rawBody:m},h,a.signal),f=this.eventStore.recordSentRequest(Ag(o,{buffer:m}));Mg(g,f).catch((0,w.action)(e=>{var t;if("AbortError"===e.name&&a.signal.aborted){const n=f.timingEvents.startTime,r=Date.now()-n,o=null!==(t=f.timingEvents.startTimestamp)&&void 0!==t?t:n,s=o+r;f.markAborted({id:f.id,error:{message:"Request cancelled"},timingEvents:Object.assign(Object.assign({startTimestamp:o,abortedTimestamp:s},f.timingEvents),e.timingEvents),tags:["client-error:ECONNABORTED"]})}else f.markAborted({id:f.id,error:e,timingEvents:Object.assign(Object.assign({},f.timingEvents),e.timingEvents),tags:e.code?[`passthrough-error:${e.code}`]:[]})})).then(()=>s.resolve()),(0,w.runInAction)(()=>{e.sentExchange=f});const y=new WeakRef(e);f.onCleanup((0,w.action)(()=>{const e=y.deref();(null==e?void 0:e.sentExchange)===f&&(e.sentExchange=void 0)}))}catch(t){throw s.reject(t),(0,w.runInAction)(()=>{e.pendingSend=void 0,e.sentExchange=void 0}),t}})}addRequestInput(e=new Rg){const t=(0,w.observable)({id:crypto.randomUUID(),request:e,sentExchange:void 0});return this.sendRequests.push(t),this.selectedRequest=t,e}addRequestInputFromExchange(e){return jg(this,void 0,void 0,function*(){it({category:"Send",action:"Resend exchange"}),this.addRequestInput(yield function(e){return t=this,n=void 0,o=function*(){var t,n;const r=null!==(t=yield e.request.body.waitForDecoding())&&void 0!==t?t:Pg.from("!!! ORIGINAL REQUEST BODY COULD NOT BE DECODED !!!"),o=e.httpVersion>=2?on(e.request.rawHeaders,e.request.method):e.request.rawHeaders;return new Rg({method:e.request.method,url:e.request.url,headers:o,requestContentType:null!==(n=Ln(e.request.contentType))&&void 0!==n?n:"text",rawBody:r})},new((r=void 0)||(r=Promise))(function(e,s){function a(e){try{l(o.next(e))}catch(e){s(e)}}function i(e){try{l(o.throw(e))}catch(e){s(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r(function(e){e(n)})).then(a,i)}l((o=o.apply(t,n||[])).next())});var t,n,r,o}(e))})}selectRequest(e){this.selectedRequest=e}moveSelection(e){const t=this.sendRequests.indexOf(this.selectedRequest);if(-1===t)throw new Error("Selected request is somehow not in Send requests list");const n=y.clamp(t+e,0,this.sendRequests.length-1);this.selectRequest(this.sendRequests[n])}deleteRequest(e){const t=this.sendRequests.indexOf(e);if(-1===t)throw new Error("Attempt to delete non-existent Send request");if(1===this.sendRequests.length)return this.addRequestInput(),void this.sendRequests.shift();if(this.selectedRequest==e){const e=this.sendRequests.length>t+1?t+1:t-1;this.selectRequest(this.sendRequests[e])}this.sendRequests.splice(t,1)}}qg([Ct("list",Hg),w.observable],Dg.prototype,"sendRequests",void 0),qg([w.observable],Dg.prototype,"selectedRequest",void 0),qg([w.action.bound],Dg.prototype,"addRequestInput",null),qg([w.action.bound],Dg.prototype,"selectRequest",null),qg([w.action.bound],Dg.prototype,"moveSelection",null),qg([w.action.bound],Dg.prototype,"deleteRequest",null);const Mg=(0,w.flow)(function*(e,t){var n,r;const o=e.getReader(),s=Object.assign({},t.timingEvents);let a,i=[],l=[];for(;;){const{done:e,value:c}=yield o.read();if(e)return;const d=c.type;switch(d){case"request-start":s.startTimestamp=c.timestamp,s.bodyReceivedTimestamp=c.timestamp;break;case"response-head":a=c,s.headersSentTimestamp=c.timestamp;break;case"response-body-part":i.push(c.rawBody);break;case"response-trailers":l.push(...c.trailers);break;case"response-end":if(!a)throw new Error("Received response-end before response-head!");s.responseSentTimestamp=c.timestamp,t.setResponse({id:t.id,statusCode:a.statusCode,statusMessage:null!==(n=a.statusMessage)&&void 0!==n?n:"",headers:cn(a.headers),rawHeaders:a.headers,body:{buffer:Ig.concat(i)},trailers:cn(l),rawTrailers:l,tags:[],timingEvents:s});break;case"error":throw c.error.message?(null!==(r=s.startTimestamp)&&void 0!==r||(s.startTimestamp=c.timestamp),s.abortedTimestamp=c.timestamp,Object.assign(new Error(c.error.message+(c.error.code?` (${c.error.code})`:"")),{code:c.error.code,timingEvents:s})):(f(`Unknown response error for sent request: ${JSON.stringify(c.error)}`),new Error("Unknown response error"));default:Ot(d)}}});function Fg(e){if(e){if(y.isArray(e))return e.map(e=>Fg(e));if(Ss.hY in e){const t=e[Ss.hY];return{[$g]:t}}return e}}const Bg=JSON.parse('{"yp":{"httptoolkit-server":">=1.9.0","httptoolkit-desktop":">=1.7.0"}}');var Lg=n(65606);const Ng=()=>function(){return Pe(this,void 0,void 0,function*(){return(yield He()).triggerServerUpdate().catch(console.log)})}().catch(console.warn);let Ug=!1;const Wg=e=>{if(Ug)return;Ug=!0;const t="Initialization failed - background updates & cached/offline startup will be unavailable";f(t,{cause:e}),alert(t)};function zg(){alert("This HTTP Toolkit installation is now very outdated, and this version is no longer supported.\n\nYou can continue to use HTTP Toolkit, but you may experience issues & instability.\n\nPlease update to the latest version from httptoolkit.com when you can to access the many new features, bug fixes & performance improvements available there.")}const _g=n.p+"9357c065ca2935d0d323.svg",Vg="75px",Kg=G.nav`
    width: ${Vg};
    flex-shrink: 0;

    background-color: ${e=>e.theme.mainBackground};
    color: ${e=>e.theme.mainColor};
    z-index: 5;

    border-right: 1px solid rgba(0,0,0,0.12);
    box-sizing: border-box;
    box-shadow: 0 0 30px rgba(0,0,0,${e=>e.theme.boxShadowAlpha});

    font-size: ${e=>e.theme.textSize};
    letter-spacing: -0.3px;

    display: flex;
    flex-direction: column;
`,Jg=Y`
    width: 72px;
    height: 72px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    box-sizing: border-box;

    user-select: none;
    -webkit-user-drag: none;
`,Qg=G.img.attrs(()=>({src:_g,alt:"HTTP Toolkit logo"}))`
    ${Jg}
    padding: 13px;
    margin: 3px auto 4px;
`,Gg=G(ct.N_)`
    ${Jg}

    color: ${e=>e.theme.mainColor};
    text-decoration: none;
    line-height: normal;

    width: calc(100% + 2px);
    margin: 0 -1px;

    cursor: pointer;
    user-select: none;
    &:hover, &:focus {
        outline: none;
        color: ${e=>e.theme.popColor};
        opacity: 1;
    }

    border-width: 0 4px;
    border-style: solid;
    border-color: transparent;

    opacity: 0.8;

    ${e=>e.selected&&Y`{
        opacity: 1;
        border-right-color: ${e=>e.theme.popColor};
    }`}

    > svg {
        margin-bottom: 5px;
    }
`,Yg=G.div`
    margin-top: auto;
`,Xg=G.a`
    ${Jg}

    ${e=>e.highlight&&Y`
        color:  ${e.theme.popColor};
        font-weight: bold;
    `};

    &:hover, &:focus {
        outline: none;
        color: ${e=>e.highlight?e.theme.mainColor:e.theme.popColor};
    }

    text-decoration: none;

    margin-bottom: 5px;

    > svg {
        margin-bottom: 5px;
    }
`,Zg=G(Lp)`
    ${Jg}

    color: ${e=>e.theme.mainColor};
    opacity: 0.8;

    &:hover, &:focus {
        outline: none;
        color: ${e=>e.theme.popColor};
        opacity: 1;
    }

    ${e=>e.highlight&&Y`
        color:  ${e.theme.popColor};
        font-weight: bold;
    `};

    > svg {
        margin-bottom: 5px;
    }
`,ef=(0,E.PA)(e=>{const t=e.items.map((e,t)=>{const n=b.createElement(b.Fragment,null,b.createElement(rs,{icon:e.icon,size:34}),e.name);return"web"===e.type?{position:e.position,component:b.createElement(Xg,{key:e.name,title:e.title,highlight:e.highlight,href:e.url,target:"_blank"},n)}:"router"===e.type?{position:e.position,component:b.createElement(ct.YG,{key:e.name,path:`${e.url}/*`},({match:t})=>b.createElement(Gg,{to:e.url,title:e.title,selected:!!t},n))}:{position:e.position,component:b.createElement(Zg,{key:e.name,title:e.title,highlight:e.highlight,onClick:e.onClick},n)}});return b.createElement(Kg,null,b.createElement(Qg,{title:Xl`
                UI version: ${De.slice(0,8)}
                Desktop version: ${"fulfilled"===Me.state?Me.value:"Unknown"}
                Server version: ${"fulfilled"===Fe.state?Fe.value:"Unknown"}
            `}),t.filter(e=>"top"===e.position).map(e=>e.component),b.createElement(Yg,null),t.filter(e=>"bottom"===e.position).map(e=>e.component))}),tf=G.div`
    &:not(:last-child) {
        margin-bottom: 30px;
    }

    font-size: ${e=>e.theme.headingSize};

    > svg {
        margin-right: 30px;
    }
`,nf=G(e=>b.createElement(jp,{className:e.className},b.createElement("h1",null,"Connected Sources"),e.activeSources.length?e.activeSources.map(e=>b.createElement(tf,{key:e.ua,title:e.ua},b.createElement(is,Object.assign({},e.icon,{size:"1.1em",fixedWidth:!0})),e.summary)):null))``;var rf=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const of=G.section`
    display: grid;

    @media (min-width: ${$}px) {
        grid-gap: 40px;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 320px;
        padding: 60px 40px;
    }

    @media not (min-width: ${$}px) {
        grid-gap: 20px;
        grid-template-columns: 1fr 1fr 1fr;
        padding: 40px;
    }

    grid-auto-rows: minmax(210px, auto);
    grid-auto-flow: row dense;

    max-width: 1200px;
    margin: 0 auto 20px;

    > ${nf} {
        @media not (min-width: ${$}px) {
            display: none;
        }

        order: -1;
        grid-column: 3 / span 2;
        overflow-y: auto;
        margin-bottom: 0;
    }
`,sf=G.div`
    order: -1;

    @media (min-width: ${$}px) {
        grid-column: 1 / span 2;
    }

    @media not (min-width: ${$}px) {
        grid-column: 1 / -1;
    }

    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    > h1 {
        font-size: ${e=>e.theme.loudHeadingSize};
        font-weight: bold;
        margin-bottom: 40px;
    }

    > p {
        font-size: ${e=>e.theme.headingSize};

        margin-bottom: 20px;
        text-align: left;
        line-height: 1.2;
    }
`,af=G(Kp)`
    width: 100%;
    padding: 15px;
    box-sizing: border-box;

    box-shadow: inset 0 2px 4px 1px rgba(0, 0, 0, ${e=>e.theme.boxShadowAlpha/2});

    font-size: ${e=>e.theme.headingSize};
`,lf=G(kh)`
    position: absolute;

    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
`,cf=G(e=>b.createElement("div",{className:e.className},b.createElement(af,{autoFocus:!0,value:e.value,placeholder:"Browsers, mobile, docker...","aria-label":"Filter the list of intercept options below",onChange:t=>e.onSearch(t.currentTarget.value)}),!!e.value&&b.createElement(lf,{icon:["fas","times"],iconSize:"2x",onClick:()=>e.onSearch(""),title:"Clear search input"})))`
    position: relative;

    @media (min-width: ${$}px) {
        margin: 20px 0 0;
    }
`;let df=class extends b.Component{constructor(){super(...arguments),this.filter=!1,this.gridRef=b.createRef()}render(){const{interceptors:e}=this.props.interceptorStore,{activeSources:t}=this.props.eventsStore,n=!!this.filter&&this.filter.toLocaleLowerCase(),r=y.pickBy(e,e=>!n||y.includes(e.name.toLocaleLowerCase(),n)||y.includes(e.description.join(" ").toLocaleLowerCase(),n)||y.some(e.tags,e=>y.includes(e.toLocaleLowerCase(),n)));return y.some(r,e=>e.isActivable)||(r[dg]=e[dg]),b.createElement("div",{className:this.props.className},b.createElement(of,{ref:this.gridRef},b.createElement(sf,null,b.createElement("h1",null,"Intercept HTTP"),b.createElement("p",null,"To collect & view HTTP traffic, you need to connect a source of traffic, like a browser, mobile device, or docker container."),b.createElement("p",null,"Click an option below to connect a traffic source, or search for connectors that could work for you:"),b.createElement(cf,{value:this.filter||"",onSearch:this.onSearchInput})),b.createElement(nf,{activeSources:t}),y(r).sortBy(e=>-1*(0+(n&&(e.tags.includes(n)||e.name.toLocaleLowerCase().split(" ").includes(n))?100:0)+(e.isActive||e.isActivable?50:0)+(e.isSupported?25:0))).map((e,t)=>b.createElement(dh,{key:e.id,index:t,interceptor:e,showRequests:this.showRequests})).value()))}showRequests(){this.props.navigate("/view")}onSearchInput(e){this.filter=e||!1}};rf([w.observable],df.prototype,"filter",void 0),rf([w.action.bound],df.prototype,"showRequests",null),rf([w.action.bound],df.prototype,"onSearchInput",null),df=rf([(0,E.WQ)("interceptorStore"),(0,E.WQ)("eventsStore"),E.PA],df);const uf=G(df)`
    height: 100%;
    overflow-y: auto;
    position: relative;
`;var pf=n(27104);const hf=G(n(63210).A)`
    .Resizer {
        background: #000;
        opacity: .5;
        z-index: 25;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        -moz-background-clip: padding;
        -webkit-background-clip: padding;
        background-clip: padding-box;
    }

    .Resizer:hover {
        -webkit-transition: all 1s ease;
        transition: all 1s ease;
        opacity: 0.9;
    }

    .Resizer.horizontal {
        height: 11px;
        margin: -5px 0;
        border-top: 5px solid rgba(255, 255, 255, 0);
        border-bottom: 5px solid rgba(255, 255, 255, 0);
        cursor: row-resize;
        width: 100%;
    }

    .Resizer.horizontal:hover {
        border-top: 5px solid rgba(0, 0, 0, 0.2);
        border-bottom: 5px solid rgba(0, 0, 0, 0.2);
    }

    .Resizer.vertical {
        width: 11px;
        margin: 0 -5px;
        border-left: 5px solid rgba(255, 255, 255, 0);
        border-right: 5px solid rgba(255, 255, 255, 0);
        cursor: col-resize;
    }

    .Resizer.vertical:hover {
        border-left: 5px solid rgba(0, 0, 0, 0.2);
        border-right: 5px solid rgba(0, 0, 0, 0.2);
    }

    .Resizer.disabled {
        cursor: not-allowed;
    }

    .Resizer.disabled:hover {
        border-color: transparent;
    }

    .Pane {
        min-width: 0; /* Don't let flexbox force panes to expand */
    }

    ${({hiddenPane:e})=>e?`\n            .Resizer {\n                display: none !important;\n            }\n\n            .Pane${e} {\n                display: none !important;\n            }\n        `:""}
`,mf=G(e=>b.createElement("div",{className:e.className},b.createElement(rs,{icon:e.icon}),e.children&&b.createElement(b.Fragment,null,b.createElement("br",null),e.children)))`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    color: ${e=>e.theme.containerWatermark};
    font-size: ${e=>e.theme.loudHeadingSize};
    letter-spacing: -1px;

    text-align: center;

    box-sizing: border-box;
    padding: 20px;
    height: 100%;
    width: 100%;

    margin: auto 0;

    > svg {
        font-size: 150px;
    }
`;var gf,ff=n(72272);function yf(e){const t=[];if(!e.trim())return t;const n=ff.iI.validate(e,{allowBooleanAttributes:!0});return!0!==n&&t.push({severity:gf.Error,startLineNumber:n.err.line,startColumn:n.err.col,endLineNumber:n.err.line,endColumn:1/0,message:n.err.msg}),t}function vf(e,t){const n=[];if(!e.trim())return n;let r=0,o=e.trimEnd();for(;o;){if(Hn.includes(o[0])){o=o.slice(1),r++;continue}const e=[],s=wn.cZ(o,e,{allowTrailingComma:!1,disallowComments:!0}),a=s?s.offset+s.length:Math.max(...e.map(e=>e.offset+e.length));if(e.length){const o=e[0];if(o&&o.offset<a){const e=t.getPositionAt(r+o.offset);n.push({severity:gf.Error,startLineNumber:e.lineNumber,endLineNumber:e.lineNumber,startColumn:e.column,endColumn:e.column+o.length,message:It(wn._n(o.error))})}}if(0===a)throw console.log(`Parsing ${o} (${o.length}) parsedContentLength was 0 with ${s} result and ${JSON.stringify(e)} errors`),new Error("JSON record parsed content length was 0");o=o.slice(a),r+=a}return n}!function(e){e[e.Hint=1]="Hint",e[e.Info=2]="Info",e[e.Warning=4]="Warning",e[e.Error=8]="Error"}(gf||(gf={}));let bf,xf=re(100).then(()=>wf());function wf(){return e=this,t=arguments,o=function*(e=5){try{const e=yield Promise.all([n.e("monaco"),n.e("data_image_png_base64_iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5_AAAAAXNSR0IArs4c6QAAAARnQU1-b0d6d80")]).then(n.bind(n,76259)),t=yield Promise.all([n.e("monaco"),n.e("data_image_png_base64_iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5_AAAAAXNSR0IArs4c6QAAAARnQU1-b0d6d81")]).then(n.bind(n,35576));(function(e){Object.values(Q).forEach(t=>{const n=function(e){const t=[{token:"hex-00",foreground:O(e.zeroColor)},{token:"hex-ff",foreground:O(e.ffColor)}];for(let n=0;n<16;n++)t.push({token:R(n),foreground:O(e.nibbleColors[n])});return t}(function(e,t){const n=T.J1(e)<.5,r=S.map(n=>{const r=k(n,.75,e,t);return T.KI(n,.75,r)}),o=k(0,0,e,t),s=n?.93:.07;return{nibbleColors:r,zeroColor:T.KI(0,0,o),ffColor:T.KI(0,0,s)}}(t.editorBackground,t.hexColorMinContrast));e.editor.defineTheme(t.monacoTheme,{base:t.monacoThemeBase,inherit:!0,rules:n,colors:t.monacoThemeOverrides})})})(t),t.editor.onDidChangeMarkers(e=>{const n=t.editor.getModelMarkers({});(0,w.runInAction)(()=>{Cf.clear(),n.forEach(e=>{var t;const n=e.resource,r=null!==(t=Cf.get(n))&&void 0!==t?t:[];r.push(e),Cf.set(n,r)})})}),t.languages.register({id:"hex"}),t.languages.setMonarchTokensProvider("hex",function(){const e=[[/00/,"hex-00"],[/FF/,"hex-ff"]];for(let t=0;t<16;t++){const n=P[t];e.push([new RegExp(`${n}[0-9A-F]`),R(t)])}return e.push([/\s+/,""]),e.push([/./,""]),{tokenizer:{root:e}}}()),t.languages.register({id:"protobuf"}),t.languages.registerCodeLensProvider("protobuf",{provideCodeLenses:function(e,t){return{lenses:[{range:{startLineNumber:1,startColumn:1,endLineNumber:2,endColumn:1},id:"protobuf-decoding-header",command:{id:"",title:"Automatically decoded from raw Protobuf/gRPC data"}}],dispose:()=>{}}},resolveCodeLens:function(e,t,n){return t}}),t.languages.register({id:"json-records"}),Ef(t,"xml",yf),Ef(t,"json-records",vf),bf=e.default}catch(t){if(console.log("Monaco load failed",Pt(t).message),e<=0)throw console.warn("Repeatedly failed to load monaco editor, giving up"),t;return wf(e-1)}},new((r=void 0)||(r=Promise))(function(n,s){function a(e){try{l(o.next(e))}catch(e){s(e)}}function i(e){try{l(o.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r(function(e){e(t)})).then(a,i)}l((o=o.apply(e,t||[])).next())});var e,t,r,o}function Ef(e,t,n){function r(r){const o=r.getValue(),s=n(o,r);e.editor.setModelMarkers(r,t,s)}const o=new Map;function s(n){const s=n.getModeId()===t,a=o.get(n);s&&!a?(o.set(n,n.onDidChangeContent(()=>r(n))),r(n)):!s&&a&&(a.dispose(),o.delete(n),e.editor.setModelMarkers(n,t,[]))}e.editor.onWillDisposeModel(e=>{o.delete(e)}),e.editor.onDidChangeModelLanguage(({model:e})=>{s(e)}),e.editor.onDidCreateModel(e=>{s(e)})}const Cf=w.observable.map(),Tf=["a:not([disabled])","button:not([disabled])","textarea:not([disabled])","input:not([disabled])","select:not([disabled])",'[tabindex]:not([disabled]):not([tabindex="-1"])'].join(",");function Sf(e){return y.filter(e.querySelectorAll(Tf),e=>null!==e.offsetParent)}var Pf=function(e,t,n,r){return new(n||(n=Promise))(function(o,s){function a(e){try{l(r.next(e))}catch(e){s(e)}}function i(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(a,i)}l((r=r.apply(e,t||[])).next())})};function kf(e,t,n){return r=>{var o;const s=null===(o=n.current)||void 0===o?void 0:o.editor;if(!s)return;const a=s.getSelection(),i=[];t||i.push({type:"option",label:"Cut",enabled:!!a&&!a.isEmpty(),callback:()=>Pf(this,void 0,void 0,function*(){var e;const t=s.getSelection();if(!t)return;const n=null===(e=s.getModel())||void 0===e?void 0:e.getValueInRange(t);n&&(yield kp(n),s.executeEdits("clipboard",[{range:t,text:"",forceMoveMarkers:!0}]))})}),a&&!a.isEmpty()&&i.push({type:"option",label:"Copy",enabled:!!a&&!a.isEmpty(),callback:()=>{var e;const t=s.getSelection();if(!t)return;const n=null===(e=s.getModel())||void 0===e?void 0:e.getValueInRange(t);n&&kp(n)}}),a&&navigator.clipboard&&i.push({type:"option",label:"Paste",enabled:!t,callback:()=>Pf(this,void 0,void 0,function*(){const e=s.getSelection();if(!e)return;const t=yield navigator.clipboard.readText();s.executeEdits("clipboard",[{range:e,text:t,forceMoveMarkers:!0}])})}),e.handleContextMenuEvent(r,i)}}var Rf=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const Of=G.div`
    ${e=>e.expanded?"\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            height: auto;\n        ":"\n            max-height: 560px;\n        "}
`;let Hf=class extends b.Component{constructor(){super(...arguments),this.container=b.createRef(),this.editor=b.createRef(),this.onResize=y.throttle(()=>{this.editor.current&&this.editor.current.relayout()},50,{leading:!0,trailing:!0}),this.resizeObserver=new ResizeObserver(this.onResize),this.contentHeight=0}onContentSizeChange(e){this.contentHeight=e.contentHeight}componentDidUpdate(){this.editor.current&&this.editor.current.relayout()}componentDidMount(){this.container.current&&this.resizeObserver.observe(this.container.current)}componentWillUnmount(){this.resizeObserver.disconnect()}render(){var e;return b.createElement(Of,{ref:this.container,expanded:!!this.props.expanded,style:this.props.expanded?{}:{height:this.contentHeight+"px",maxHeight:this.props.maxHeight},onContextMenu:kf(this.props.uiStore,!!(null===(e=this.props.options)||void 0===e?void 0:e.readOnly),this.editor)},b.createElement(qf,Object.assign({theme:this.props.uiStore.theme.monacoTheme},this.props,{ref:this.editor,onContentSizeChange:this.onContentSizeChange})))}};Rf([w.action.bound],Hf.prototype,"onContentSizeChange",null),Rf([w.observable],Hf.prototype,"contentHeight",void 0),Hf=Rf([(0,E.WQ)("uiStore"),E.PA],Hf);const Af=G.div`
    ${e=>e.expanded?"\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            height: auto !important;\n        ":"\n            height: 100%;\n        "}
`;let $f=class extends b.Component{constructor(){super(...arguments),this.container=b.createRef(),this.editor=b.createRef(),this.onResize=y.throttle(()=>{this.editor.current&&this.editor.current.relayout()},25,{leading:!0,trailing:!0}),this.resizeObserver=new ResizeObserver(this.onResize)}componentDidUpdate(){this.editor.current&&this.editor.current.relayout()}componentDidMount(){this.container.current&&this.resizeObserver.observe(this.container.current)}componentWillUnmount(){this.resizeObserver.disconnect()}render(){var e;return b.createElement(Af,{ref:this.container,expanded:!!this.props.expanded,onContextMenu:kf(this.props.uiStore,!!(null===(e=this.props.options)||void 0===e?void 0:e.readOnly),this.editor)},b.createElement(qf,Object.assign({theme:this.props.uiStore.theme.monacoTheme},this.props,{ref:this.editor})))}};$f=Rf([(0,E.WQ)("uiStore"),E.PA],$f);const If=G(e=>b.createElement("div",{className:e.className,"aria-label":"Press enter to focus this editor, and use escape to unfocus it later",tabIndex:0,onKeyDown:e=>{const t=e.currentTarget;if(e.target===t){if("Tab"===e.key){if(e.shiftKey)return;{const n=Sf(document.body),r=y.last(t.children),o=n.indexOf(r),s=n[o+1];return s?(s.focus(),void e.preventDefault()):(n[0].focus(),void e.preventDefault())}}if("Enter"===e.key){const n=Sf(t)[0];return void(n&&(n.focus(),e.preventDefault()))}}else if(t.contains(document.activeElement)&&"Escape"===e.key)return void t.focus()}},e.children,b.createElement("div",{tabIndex:0,onFocus:e=>{e.target===e.currentTarget&&e.currentTarget.parentElement.focus()}})))`
    height: 100%;
    width: 100%;
`;let qf=class extends b.Component{constructor(e){super(e),this.monacoEditorLoaded=!!bf,this.modelUri=void 0,this.registeredSchemaUri=void 0,this.monacoEditorLoaded||xf.catch(()=>xf=wf(0)).then((0,w.action)(()=>this.monacoEditorLoaded=!0)),(0,w.reaction)(()=>this.props.contentId,()=>this.resetUIState())}relayout(){if(this.editor)try{this.editor.layout()}catch(e){return void console.log("Monaco layout error:",e)}}getMarkerController(){var e;return null===(e=this.editor)||void 0===e?void 0:e.getContribution("editor.contrib.markerController")}withoutFocusingEditor(e){if(!this.editor)return;const t=this.editor.focus;this.editor.focus=()=>{},e(),this.editor.focus=t}resetUIState(){return e=this,t=void 0,r=function*(){this.editor&&this.monaco&&(this.editor.setSelection(new this.monaco.Selection(0,0,0,0)),this.props.value?this.relayout():requestAnimationFrame(()=>this.relayout()),requestAnimationFrame(()=>{var e;this.editor&&this.monaco&&this.editor.setSelection(new this.monaco.Selection(0,0,0,0)),null===(e=this.getMarkerController())||void 0===e||e.close(!1)}))},new((n=void 0)||(n=Promise))(function(o,s){function a(e){try{l(r.next(e))}catch(e){s(e)}}function i(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(a,i)}l((r=r.apply(e,t||[])).next())});var e,t,n,r}onEditorDidMount(e,t){this.editor=e,this.monaco=t;const n=e.getModel();this.modelUri=null==n?void 0:n.uri,this.editor.onDidChangeModel((0,w.action)(e=>{var t;this.modelUri=null!==(t=e.newModelUrl)&&void 0!==t?t:void 0})),this.props.onContentSizeChange&&this.editor.onDidContentSizeChange(this.props.onContentSizeChange),(0,E.bH)(this,(0,w.reaction)(()=>{var e;return{markers:null!==(e=this.modelUri&&Cf.get(this.modelUri))&&void 0!==e?e:[]}},({markers:e})=>{var t;e.length&&(null===(t=this.props.options)||void 0===t?void 0:t.readOnly)&&requestAnimationFrame(()=>{this.withoutFocusingEditor(()=>{this.getMarkerController().showAtMarker(e[0])})})},{equals:w.comparer.structural}))}componentDidMount(){(0,E.bH)(this,(0,w.autorun)(()=>{var e;if(!this.editor||!this.monaco)return;const t=this.monaco.languages.json.jsonDefaults.diagnosticsOptions;let n=t.schemas||[];const r=null===(e=this.modelUri)||void 0===e?void 0:e.toString();if(r){const e=this.props.schema,o=y.find(t.schemas||[],e=>e.uri===r);!e||o&&o.schema===e?e||(n=n.filter(e=>e!==o)):n=n.filter(e=>e!==o).concat({uri:r,fileMatch:[r],schema:e})}this.registeredSchemaUri&&r!=this.registeredSchemaUri&&(n=n.filter(e=>e.uri!==this.registeredSchemaUri));const o=Object.assign({},t,{validate:!0,schemas:n});y.isEqual(t,o)||this.monaco.languages.json.jsonDefaults.setDiagnosticsOptions(o),this.registeredSchemaUri=r}))}componentWillUnmount(){if(this.editor&&this.monaco&&this.registeredSchemaUri){const e=this.monaco.languages.json.jsonDefaults.diagnosticsOptions,t=(e.schemas||[]).filter(e=>e.uri!==this.registeredSchemaUri),n=Object.assign({},e,{schemas:t});y.isMatch(e,n)||this.monaco.languages.json.jsonDefaults.setDiagnosticsOptions(n),this.registeredSchemaUri=void 0}}render(){if(!this.monacoEditorLoaded||!bf)return f("Monaco editor failed to load"),null;const e=Object.assign({showFoldingControls:"always",scrollbar:{alwaysConsumeMouseWheel:!1},quickSuggestions:!1,parameterHints:{enabled:!1},codeLens:!0,minimap:{enabled:!1},contextmenu:!1,scrollBeyondLastLine:!1,colorDecorators:!1,renderValidationDecorations:"on",fixedOverflowWidgets:!0,fontSize:16,wordWrap:"on"},this.props.options);return e.readOnly?b.createElement(bf,Object.assign({},this.props,{options:e,editorDidMount:this.onEditorDidMount})):b.createElement(If,null,b.createElement(bf,Object.assign({},this.props,{options:e,editorDidMount:this.onEditorDidMount})))}};Rf([w.observable],qf.prototype,"monacoEditorLoaded",void 0),Rf([w.observable],qf.prototype,"modelUri",void 0),Rf([w.action.bound],qf.prototype,"onEditorDidMount",null),qf=Rf([E.PA],qf);var jf=n(76148),Df=n(5373),Mf=function(e,t,n,r){return new(n||(n=Promise))(function(o,s){function a(e){try{l(r.next(e))}catch(e){s(e)}}function i(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(a,i)}l((r=r.apply(e,t||[])).next())})};const Ff=(0,E.PA)(e=>b.createElement(kh,{icon:["far","trash-alt"],title:`Clear all (${xp}+Shift+Delete)`,disabled:e.disabled,onClick:e.onClear})),Bf=(0,E.WQ)("accountStore")((0,E.PA)(e=>{const t=e.accountStore.user.isPaidUser();return b.createElement(kh,{icon:["fas","save"],title:t?"Export these exchanges as a HAR file":"With Pro: Export requests & responses as a HAR file, to save for later or share with others",disabled:!t||0===e.events.length,onClick:()=>Mf(void 0,void 0,void 0,function*(){const t=JSON.stringify(yield mu(e.events));Sp(`HTTPToolkit_${ae.format(Date.now(),"YYYY-MM-DD_HH-mm")}.har`,"application/har+json;charset=utf-8",t)})})})),Lf=(0,E.WQ)("eventsStore","accountStore")((0,E.PA)(e=>{const t=e.accountStore.user.isPaidUser();return b.createElement(kh,{icon:["fas","folder-open"],title:t?"Import exchanges from a HAR file":"With Pro: Import requests & responses from HAR files, to examine past recordings or data from other tools",disabled:!t,onClick:()=>Mf(void 0,void 0,void 0,function*(){const t=yield Pp("text",[".har","application/har","application/har+json"]);if(t){let n;try{n=JSON.parse(t),yield e.eventsStore.loadFromHar(n)}catch(e){f(e),"HARError"===e.name&&e.errors?alert(Xl`
                                HAR file is not valid.

                                ${e.errors.map(e=>al(n,e)).join("\n")}
                            `):alert(Xl`
                                Could not parse HAR file.

                                ${e.message||e}
                            `)}}})})})),Nf=(0,E.WQ)("eventsStore")((0,E.PA)(e=>{const{isPaused:t,togglePause:n}=e.eventsStore;return b.createElement(kh,{icon:["fas",t?"play":"pause"],title:(t?"Resume":"Pause")+" collecting intercepted exchanges",onClick:n})})),Uf=e=>b.createElement(kh,{icon:["fas","level-down-alt"],title:"Scroll to the bottom of the list",onClick:e.onScrollToEnd});var Wf=n(65540);function zf(e,t){let n=t.trim(),r=[];for(;n.length>0;){const t=e.map(e=>({filterClass:e,match:kc(e.filterSyntax,n,0)})).filter(e=>!!e.match&&"full"===e.match.type)[0];if(!t)break;const o=t.match.fullyConsumed,s=n.slice(0,o);n=n.slice(o).trimLeft(),r.unshift(new t.filterClass(s))}return[new Qc(n),...y.flatten(r)]}function _f(e,t){const n=Oc(e[0].filter,t);return"full"===t.matchType?[new Qc(""),...y.flatten([new t.filterClass(n.trim())]),...e.slice(1)]:[new Qc(n),...e.slice(1)]}const Vf=G(is).attrs(()=>({icon:["fas","times"]}))`
    position: absolute;
    right: -20px;
    top: 50%;
    transform: translateY(-50%);
    transition: right 0.1s;
    cursor: pointer;
    box-sizing: content-box;

    padding: 6px;
    background-image: radial-gradient(
        ${e=>T.B3(e.theme.mainBackground,.9)} 50%,
        transparent 100%
    );

    &:hover {
        color: ${e=>e.theme.popColor};
    }
`,Kf=G.span`
    white-space: pre; /* Nowrap + show spaces accurately */
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 4px;
`,Jf=G.div`
    flex-shrink: 0;

    display: flex;
    align-items: center;

    position: relative;
    overflow: hidden;

    min-width: 0;
    max-width: 100%;
    box-sizing: border-box;

    margin-right: 5px;

    background-color: ${e=>e.theme.mainBackground};
    color: ${e=>e.theme.mainColor};

    border: 1px solid ${e=>e.theme.containerWatermark};
    box-shadow: 0 2px 4px 0 rgba(0,0,0,${e=>e.theme.boxShadowAlpha});
    border-radius: 3px;

    cursor: pointer;

    &:hover, &:focus-within {
        box-shadow: 0 2px 4px 0 rgba(0,0,0,${e=>2*e.theme.boxShadowAlpha});
    }

    &:hover {
        > ${Vf} {
            right: 0;
        }
    }

    &:focus-within {
        outline: none;
        border-color: ${e=>e.theme.popColor};
    }

    &.is-selected {
        background-color: ${e=>e.theme.mainLowlightBackground};
        box-shadow: inset 0 0 12px -8px #000;
    }

    & ::selection {
        background-color: transparent;
    }
`;function Qf(e){3===e.detail&&e.preventDefault()}const Gf=b.forwardRef((e,t)=>b.createElement(Jf,{ref:t,className:"filter-tag"+(e.isSelected?" is-selected":""),tabIndex:-1,onKeyDown:e.onKeyDown,onMouseDown:Qf,title:`Match ${e.filter.filterDescription}`},b.createElement(Kf,null,e.filter.toString()),b.createElement(Vf,{onClick:e.onDelete})));var Yf=n(62243);const Xf=G.span`
    font-weight: bold;
`,Zf=G.span`
    opacity: 0.7;
`,ey=G.div`
    background-color: ${e=>e.isHighlighted?e.theme.highlightBackground:e.theme.mainBackground};
    color: ${e=>e.isHighlighted?e.theme.highlightColor:e.theme.mainColor};

    ${e=>e.isHighlighted&&Y`
        ${Zf} {
            opacity: 1;
        }
    `}

    width: 100%;
    cursor: pointer;

    font-size: ${e=>e.theme.textSize};
`,ty=G.p`
    padding: 8px;
`,ny=G(ty)`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: pre; /* Nowrap + show spaces accurately */

    ${e=>e.isHighlighted&&Y`
        box-shadow: 0px -8px 10px -10px rgba(0,0,0,${e=>2*e.theme.boxShadowAlpha});
    `}

    svg {
        margin-left: auto;
    }
`,ry=G(kh).attrs(()=>({icon:["far","trash-alt"]}))`
    float: right;
    padding: 4px;
    margin: -4px -4px;
`,oy=G(ty)`
    background-color: ${e=>e.theme.mainLowlightBackground};
    color: ${e=>e.theme.mainColor};
    box-shadow:
        inset 0px 12px 8px -10px rgba(0,0,0,${e=>e.theme.boxShadowAlpha}),
        inset 0px -8px 8px -10px rgba(0,0,0,${e=>e.theme.boxShadowAlpha});

    white-space: pre; /* Nowrap + show spaces accurately */
    overflow: hidden;
    text-overflow: ellipsis;
    font-style: italic;
`,sy=e=>{const{suggestion:t,query:n,isHighlighted:r,onDelete:o}=e,s=function(e,...t){let n="";const r=Math.min(e.length,...t.map(e=>e.length));for(let o=0;o<r;o++){const r=e[o];if(!t.every(e=>e[o]===r))break;n+=r}return n}(n.slice(t.index),t.value,t.showAs).length,a=n.slice(0,t.index+s),i=t.showAs.slice(s),l=`Match ${t.filterClass.filterDescription(Oc(n,t),"template"===t.matchType)}`;return b.createElement(ey,{isHighlighted:r},b.createElement(ny,{isHighlighted:r},b.createElement(Xf,null,a),b.createElement(Zf,null,i),o&&b.createElement(ry,{title:"Delete this custom filter shortcut",onClick:e=>{o(),e.preventDefault(),e.stopPropagation()}})),r&&b.createElement(oy,{title:l},l))},ay=e=>"saveFilters"in e&&!0===e.saveFilters,iy=G.div`
    background-color: ${e=>e.isHighlighted?e.theme.highlightBackground:e.theme.mainBackground};

    :not(:first-child) {
        border-top: 1px solid ${e=>e.theme.containerBorder};
    }

    ${e=>e.isHighlighted&&Y`
        box-shadow: 0px -8px 10px -10px rgba(0,0,0,${e=>2*e.theme.boxShadowAlpha});
        font-weight: bold;
    `}

    width: 100%;
    cursor: pointer;

    padding: 8px;
    box-sizing: border-box;

    font-size: ${e=>e.theme.textSize};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    svg {
        margin-right: 5px;
    }
`,ly=e=>b.createElement(iy,{isHighlighted:e.isHighlighted},e.isPaidUser?b.createElement(b.Fragment,null,b.createElement(is,{icon:["fas","save"]}),"Save ",e.filterCount>1?`these ${e.filterCount} filters`:"this filter"," as ",`'${e.query}'`||"..."):b.createElement(b.Fragment,null,b.createElement(is,{icon:"Lightning"}),"Get Pro to save ",e.filterCount>1?`these ${e.filterCount} filters`:"this filter"," as ",`'${e.query}'`||"...")),cy=G.input`
    box-sizing: border-box;
    width: 100%;
    height: 100%;

    padding: 3px 0 4px 1px;
    border: none;
    outline: none;

    background-color: ${e=>e.theme.inputBackground};
    color: ${e=>e.theme.inputColor};
    font-size: ${e=>e.theme.textSize};

    ::placeholder {
        /*
        For some reason, I think related to react-split-pane setting 'user-select: text',
        the placeholder gets selected by selection.selectAllChildren. This stops that:
        */
        user-select: none;
    }
`,dy=G.div`
    position: absolute;
    bottom: calc(100% + 10px);
    left: 0;
    right: 0;
    z-index: 1;

    background-color: ${e=>e.theme.mainBackground};
    color: ${e=>e.theme.mainColor};

    border: 1px solid ${e=>e.theme.containerBorder};
    box-shadow: 0 2px 4px 0 rgba(0,0,0,${e=>e.theme.boxShadowAlpha});

    border-radius: 4px;
    .react-autosuggest__suggestion:first-child > * {
        border-radius: 4px 4px 0 0;
    }
    .react-autosuggest__suggestion:last-child > *, .react-autosuggest__suggestion:last-child > * > * {
        border-radius: 0 0 4px 4px;
    }
    .react-autosuggest__suggestion:first-child:last-child > * {
        border-radius: 4px;
    }

    font-size: ${e=>e.theme.textSize};

    &:empty {
        display: none;
    }
`,uy=e=>b.createElement(cy,Object.assign({},e)),py=e=>b.createElement(dy,Object.assign({},e.containerProps),e.children),hy=e=>{var t,n;const r=null===(n=null===(t=e.current)||void 0===t?void 0:t.input)||void 0===n?void 0:n.parentElement,o=null==r?void 0:r.querySelector("[role='listbox']");return((null==o?void 0:o.children.length)||0)>0},my=e=>{const t=b.useRef(null),n=b.useMemo(()=>{return t=e.availableFilters,n=e.value,r=e.suggestionContext,Rc(t.map(e=>({key:e,syntax:e.filterSyntax})),n,0,{context:r}).map(({key:e,suggestion:t})=>Object.assign({filterClass:e},t));var t,n,r},[e.availableFilters,e.value,e.suggestionContext]),r=b.useCallback(n=>{n.suggestion&&!ay(n.suggestion)&&hy(t)?"full"===n.suggestion.matchType?e.onFiltersConsidered(_f(e.activeFilters,n.suggestion)):e.onFiltersConsidered([new Qc(""),...e.activeFilters.slice(1)]):e.onFiltersConsidered(void 0)},[e.onFiltersConsidered,e.activeFilters,t]);let o;const s=b.useCallback((n,r)=>{if(hy(t))if(ay(r.suggestion)){if(!e.value)return;e.isPaidUser?e.onFiltersSaved(e.activeFilters.slice(1),e.value):e.getPro("save-filter")}else o=_f(e.activeFilters,r.suggestion),o.length!==e.activeFilters.length&&it({category:"Filters",action:"Create",value:r.suggestion.filterClass.filterName}),e.onFiltersChanged(o)},[o,e.value,e.isPaidUser,e.getPro,e.activeFilters,e.onFiltersChanged]),a=b.useCallback(()=>{const n=t.current;o&&o.length===e.activeFilters.length&&(n.justSelectedSuggestion=!1,n.revealSuggestions(),o=void 0),n.resetHighlightedSuggestion(),r({suggestion:null})},[o,s,e.activeFilters.length,t]),i=b.useCallback((e,t)=>e.trim().length>0||!["input-focused","input-changed","escape-pressed"].includes(t),[]),l=b.useCallback(t=>ay(t)?"":Oc(e.value,t),[e.value]),c=b.useCallback(t=>{t.target.value!==e.value&&e.onChange(t)},[e.onChange,e.value]),d=b.useMemo(()=>({type:"text",value:e.value,onChange:c,placeholder:e.placeholder,"aria-label":e.label,ref:e.searchInputRef}),[e.value,c,e.placeholder,e.searchInputRef]),u=e.activeFilters.length>1&&e.value.length>=1&&!e.value.includes(" ")&&1!==y.uniq(n.map(e=>e.filterClass)).length,p=!(u&&0===n.length),h=b.useMemo(()=>u?n.concat({saveFilters:!0,isPaidUser:e.isPaidUser,filterCount:e.activeFilters.length-1}):n,[u,e.isPaidUser,n,e.activeFilters]),m=b.useMemo(()=>{return t=e.onCustomFilterDeleted,n=e.value,(e,r)=>{if(ay(e))return b.createElement(ly,Object.assign({},e,r,{query:n}));const{filterClass:o}=e,s=o.isCustomFilter?()=>t(o):void 0;return b.createElement(sy,Object.assign({suggestion:e},r,{query:n,onDelete:s}))};var t,n},[e.onCustomFilterDeleted,e.value]);return b.createElement(Yf,{ref:t,multiSection:!1,suggestions:h,highlightFirstSuggestion:p,shouldRenderSuggestions:i,onSuggestionsFetchRequested:y.noop,onSuggestionsClearRequested:a,onSuggestionHighlighted:r,onSuggestionSelected:s,getSuggestionValue:l,renderSuggestion:m,renderInputComponent:uy,renderSuggestionsContainer:py,inputProps:d})};var gy=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const fy="30px",yy=G.div`
    position: relative;

    &:focus-within {
        border-color: ${e=>e.theme.highlightColor};
    }

    flex-grow: 1;
    min-width: 0; /* Don't let flexbox force this to expand given long tags */
    padding-right: ${e=>e.hasContents?fy:"0"};

    border-radius: 4px;

    border: 1px solid ${e=>e.theme.containerBorder};
    box-shadow: inset 0 2px 4px 1px rgba(0, 0, 0, ${e=>e.theme.boxShadowAlpha/2});
    background-color: ${e=>e.theme.inputBackground};
    color: ${e=>e.theme.highlightColor};

    font-size: ${e=>e.theme.textSize};

    display: flex;

    &:hover, &:focus-within {
        flex-wrap: wrap;
    }
    &:not(:hover):not(:focus-within) {
        overflow: hidden;
    }

    /* Add a layer to act as a button background over non-wrapping content */
    &:after {
        content: "";
        position: absolute;
        display: block;

        z-index: 5;

        top: 4px;
        bottom: 4px;

        right: 0px;
        width: 36px;
        background: linear-gradient(
            to right,
            transparent 0%,
            ${e=>T.B3(e.theme.inputBackground,.9)} 25%
        );
    }

    .react-autosuggest__container {
        flex-grow: 1;
        flex-basis: 100px; /* Shrink down to this, then wrap */
    }

    padding-bottom: 4px;
    > div {
        margin: 4px 0 0 4px;
    }
`,vy=Y`
    width: ${fy};
    padding: 4px 10px;
    box-sizing: border-box;

    /* This isn't needed for button, but is for buttonlink - unclear why but it works */
    display: flex;
    align-items: center;

    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;

    /* Appears in front of the :after background layer */
    z-index: 10;
`,by=G(kh)`${vy}`,xy=G(Rh)`
    ${vy}
    opacity: 0.8;
`;let wy=class extends b.Component{constructor(){super(...arguments),this.boxRef=b.createRef(),this.tagRefs=new Map,this.selectedFilters=[],this.undoer=(0,Wf.M)(()=>this.activeFilters,e=>this.onFiltersChanged(e)),this.updateSelectedTags=(0,w.action)(()=>{this.selectedFilters=this.getSelectedFilters()}),this.onKeyDown=e=>{var t;const n=this.boxRef.current;if(!n)return;const{onFiltersChanged:r,activeFilters:o}=this,s=(e=>{const t=document.getSelection();return!t||t.isCollapsed?[]:[...Array.from(e.querySelectorAll(".filter-tag")),e.querySelector("input")].filter(e=>t.containsNode(e,!0))})(n);if(!n.contains(document.activeElement))return void(s&&document.getSelection().removeAllRanges());if("a"===e.key&&Ep(e))return this.selectAllFilterTags(),void e.preventDefault();if("z"===e.key.toLowerCase()&&Ep(e))return e.shiftKey?this.undoer.redo():this.undoer.undo(),void e.preventDefault();const a=Array.from(n.querySelectorAll(".filter-tag")),i=n.querySelector("input"),l=[...a,i],c=document.activeElement,d=l.indexOf(c);if(c!==i&&"v"===e.key&&Ep(e)){i.focus();const e=i.value.length;return void i.setSelectionRange(e,e)}var u,p;if(-1!==d)if(s.length>0){if("ArrowLeft"===e.key||"ArrowRight"===e.key){const t=s["ArrowLeft"===e.key?0:s.length-1];if(document.getSelection().removeAllRanges(),t.focus(),t===i){const t="ArrowLeft"===e.key?0:i.value.length;i.setSelectionRange(t,t)}e.preventDefault()}else if("Delete"===e.key||"Backspace"===e.key){const t=l.indexOf(s[s.length-1]);this.deleteSelectedFilters(),document.getSelection().removeAllRanges(),l.length-t<3&&(i.focus(),i.setSelectionRange(0,0)),e.preventDefault()}else if("Escape"===e.key){document.getSelection().removeAllRanges(),i.focus();const t=i.value.length;i.setSelectionRange(t,t),e.preventDefault()}else if(1===[...e.key].length&&!e.ctrlKey&&!e.altKey&&!e.metaKey){const e=i.selectionStart||i.value.length;this.deleteSelectedFilters(),document.getSelection().removeAllRanges(),i.setSelectionRange(e,e),i.focus()}}else if(i.selectionStart===i.selectionEnd){const n=null!==(t=i.selectionStart)&&void 0!==t?t:-1,s=c===i;if("Backspace"===e.key||"Delete"===e.key){let t=s?n<=0&&"Backspace"===e.key?1:null:l.length-1-d;t&&(r((u=o,0===(p=t)||0===u.length?u:[u[0],...u.slice(1,p),...u.slice(p+1)])),1===t&&i.focus(),e.preventDefault())}else if("ArrowLeft"===e.key&&d>0&&n<=0)l[d-1].focus(),e.preventDefault();else if("ArrowRight"===e.key&&d<l.length-1){const t=l[d+1];t.focus(),t===i&&i.setSelectionRange(0,0),e.preventDefault()}}},this.onCopy=e=>{const{activeFilters:t}=this,n=y.orderBy(this.getSelectedFilters(),e=>t.indexOf(e),["desc"]);n.length>0&&(kp(n.map(e=>e.serialize()).join(" ")),e.preventDefault())},this.onCut=e=>{this.onCopy(e),this.deleteSelectedFilters()},this.onPaste=e=>{var t,n;const r=this.boxRef.current,o=null==r?void 0:r.querySelector("input");if(!r||!o)return;e.preventDefault();const{selectedFilters:s,activeFilters:a,onFiltersChanged:i,props:{availableFilters:l}}=this,c=zf(l,e.clipboardData.getData("text")),d=c[0].filter,u=null!==(t=o.selectionStart)&&void 0!==t?t:0,p=null!==(n=o.selectionEnd)&&void 0!==n?n:0,h=a[0].filter,m=s.includes(a[0])?d:h.slice(0,u)+d+h.slice(p);i([new Qc(m),...c.slice(1),...a.slice(1).filter(e=>!s.includes(e))]),requestAnimationFrame(()=>{const e=u+d.length;o.setSelectionRange(e,e),o.focus()})},this.onInputChanged=e=>{const{onFiltersChanged:t,activeFilters:n}=this;t([new Qc(e.target.value),...n.slice(1)])},this.onFiltersCleared=()=>{var e;this.onFiltersChanged(Jc());const t=null===(e=this.boxRef.current)||void 0===e?void 0:e.querySelector("input[type=text]");null==t||t.focus()}}get activeFilters(){return this.props.uiStore.activeFilterSet}onFiltersChanged(e){this.props.uiStore.activeFilterSet=e}get availableFilters(){const e=this.props.availableFilters,t=Object.entries(this.props.uiStore.customFilters).map(([t,n])=>function(e,t,n){const r=zf(n,t),o=""===r[0].filter?r.slice(1):r;return Object.assign(function(){return o},{filterSyntax:[new Lc(e)],filterDescription:()=>t,filterName:e,isCustomFilter:!0})}(t,n,e));return e.concat(t)}getSelectedFilters(){const e=document.getSelection();if(!e||e.isCollapsed)return[];const{boxRef:t,tagRefs:n,activeFilters:r}=this,o=t.current;o&&n.set(o.querySelector("input"),r[0]);const s=[];return Array.from(n.entries()).forEach(([t,r])=>{document.contains(t)?e.containsNode(t,!0)&&s.push(r):n.delete(t)}),s}componentDidMount(){this.updateSelectedTags(),document.addEventListener("selectionchange",this.updateSelectedTags),(0,E.bH)(this,()=>{document.removeEventListener("selectionchange",this.updateSelectedTags)})}selectAllFilterTags(){const e=this.boxRef.current;e&&window.getSelection().setBaseAndExtent(e,0,e.querySelector("[role=listbox]"),0)}deleteSelectedFilters(){const{selectedFilters:e,onFiltersChanged:t,activeFilters:n}=this,r=e.includes(n[0])?"":n[0].filter||"";t([new Qc(r),...n.filter((t,n)=>n>0&&!e.includes(t))])}onFiltersSaved(e,t){const n=this.props.uiStore;n.customFilters[t]=e.map(e=>e.serialize()).reverse().join(" "),n.activeFilterSet=[new Qc(""),...n.activeFilterSet.slice(1)]}onCustomFilterDeleted(e){delete this.props.uiStore.customFilters[e.filterName]}render(){var e;const{boxRef:t,onCopy:n,onCut:r,onPaste:o,onKeyDown:s,onInputChanged:a,onFiltersCleared:i,onFiltersChanged:l,onFiltersSaved:c,onCustomFilterDeleted:d,tagRefs:u,selectedFilters:p,activeFilters:h,availableFilters:m,props:{accountStore:g,placeholder:f,searchInputRef:y,filterSuggestionContext:v,onFiltersConsidered:x}}=this,[w,...E]=h,C=null!==(e=null==w?void 0:w.filter)&&void 0!==e?e:"",T=!!C||!!E.length;return b.createElement(yy,{ref:t,hasContents:T,onCopy:n,onCut:r,onPaste:o,onKeyDown:s},E.reverse().map((e,t)=>b.createElement(Gf,{key:t,filter:e,isSelected:p.includes(e),onDelete:()=>{return l((n=e,[(t=h)[0],...t.slice(1).filter((e,t)=>e!==n)]));var t,n},ref:t=>{t&&u.set(t,e)}})),b.createElement(my,{value:C,onChange:a,label:"Enter a string like 'hello' or a structured filter like hostname=google.com to filter the requests in the list",placeholder:0===E.length?f:"...",searchInputRef:y,onFiltersConsidered:x,onFiltersChanged:l,onFiltersSaved:c,onCustomFilterDeleted:d,activeFilters:h,availableFilters:m,suggestionContext:v,isPaidUser:g.user.isPaidUser(),getPro:g.getPro}),T?b.createElement(by,{title:"Clear all search filters",icon:["fas","times"],onClick:i}):b.createElement(xy,{icon:["fas","question"],title:"Open filtering docs",href:"https://httptoolkit.com/docs/reference/view-page/#filtering-intercepted-traffic",target:"_blank",rel:"noreferrer noopener"}))}};gy([w.observable.struct],wy.prototype,"selectedFilters",void 0),gy([w.computed],wy.prototype,"activeFilters",null),gy([w.action.bound],wy.prototype,"onFiltersChanged",null),gy([w.computed],wy.prototype,"availableFilters",null),gy([w.action.bound],wy.prototype,"onFiltersSaved",null),gy([w.action.bound],wy.prototype,"onCustomFilterDeleted",null),wy=gy([(0,E.WQ)("uiStore"),(0,E.WQ)("accountStore"),E.PA],wy);const Ey=G((0,E.PA)(e=>b.createElement("div",{className:e.className},b.createElement("span",{className:"count"},e.filteredEventCount,e.eventCount!==e.filteredEventCount&&` / ${e.eventCount}`),b.createElement("span",{className:"label"},"requests"))))`
    margin-left: auto;
    padding: 0 10px;

    display: flex;
    flex-direction: column;
    align-items: flex-end;

    .count {
        font-size: 20px;
        font-weight: bold;
        white-space: nowrap;

        font-variant-numeric: tabular-nums;
        font-family: ${e=>e.theme.monoFontFamily}
    }

    .label {
        margin-top: -4px;
        font-size: ${e=>e.theme.textSize};
        opacity: 0.8;
        font-weight: lighter;
    }
`,Cy=G.div`
    display: flex;
`,Ty=G((0,E.PA)(e=>b.createElement("div",{className:e.className},b.createElement(wy,{onFiltersConsidered:e.onFiltersConsidered,availableFilters:Hd,filterSuggestionContext:e.allEvents,placeholder:"Filter by method, host, headers, status...",searchInputRef:e.searchInputRef}),b.createElement(Ey,{filteredEventCount:e.filteredCount[0],eventCount:e.filteredCount[1]}),b.createElement(Cy,null,b.createElement(Nf,null),b.createElement(Uf,{onScrollToEnd:e.onScrollToEnd}),b.createElement(Bf,{events:e.filteredEvents}),b.createElement(Lf,null),b.createElement(Ff,{disabled:0===e.allEvents.length,onClear:e.onClear})))))`
    order: 1;

    min-height: ${38}px;
    width: 100%;
    padding-left: 2px;
    box-sizing: border-box;

    background-color: ${e=>e.theme.mainBackground};

    display: flex;
    align-items: center;
    justify-content: space-between;
`,Sy=G(e=>b.createElement("div",{className:e.className,title:e.status?e.message||void 0:"Waiting for response..."},"aborted"===e.status?b.createElement(is,{icon:["fas","ban"]}):"WS:open"===e.status?b.createElement(b.Fragment,null,"WS ",b.createElement(is,{icon:["fas","spinner"],spin:!0})):"WS:closed"===e.status?"WS":e.status||b.createElement(is,{icon:["fas","spinner"],spin:!0})))`
    > svg {
        box-sizing: content-box;
    }

    font-weight: bold;

    display: flex;
    align-items: center;

    .fa-spinner {
        padding: 6px;
    }

    .fa-ban {
        padding: 5px;
    }

    color: ${e=>tr("WS:open"===e.status||"WS:closed"===e.status?void 0:e.status,e.theme)};
`,Py=G.div`
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 3px 0;
`,ky=G(Py)`
    transition: color 0.2s;
    color: ${e=>er(e.category)};

    background-color: currentColor;

    flex-basis: 5px;
    flex-shrink: 0;
    flex-grow: 0;
    height: 100%;
    padding: 0;

    border-left: 5px solid ${e=>e.theme.containerBackground};
    box-sizing: content-box;
`,Ry=G.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    user-select: none;
    cursor: pointer;

    &.selected {
        background-color: ${e=>e.theme.highlightBackground};
        font-weight: bold;

        color: ${e=>e.theme.highlightColor};
        fill: ${e=>e.theme.highlightColor};
        * {
            /* Override status etc colours to ensure contrast & give row max visibility */
            color: ${e=>e.theme.highlightColor};
            fill: ${e=>e.theme.highlightColor};
        }
    }
`,Oy=G(Ry)`
    background-color: ${e=>e.theme.mainBackground};

    border-width: 2px 0;
    border-style: solid;
    border-color: transparent;
    background-clip: padding-box;
    box-sizing: border-box;

    &:hover ${ky}, &.selected ${ky} {
        border-color: currentColor;
    }

    > * {
        margin-right: 10px;
    }
`,Hy=G(Ry)`
    height: 28px !important; /* Important required to override react-window's style attr */
    margin: 2px 0;

    font-style: italic;
    justify-content: center;
    text-align: center;

    opacity: 0.7;

    &:hover {
        opacity: 1;
    }

    &.selected {
        opacity: 1;
        color: ${e=>e.theme.mainColor};
        background-color: ${e=>e.theme.mainBackground};
    }
`,Ay=G(function(e,...t){return n=>b.createElement(e,Object.assign({},y.omit(n,t)))}(is,"pinned")).attrs(e=>({icon:["fas","thumbtack"],title:e.pinned?"This exchange is pinned, and won't be deleted by default":""}))`
    font-size: 90%;
    box-sizing: content-box;
    background-color: ${e=>e.theme.containerBackground};

    /* Without this, 0 width pins create a large & invisible but still clickable icon */
    overflow: hidden;

    transition: width 0.1s, padding 0.1s, margin 0.1s;

    ${e=>e.pinned?"\n            width: auto;\n            padding: 8px 7px;\n            && { margin-right: -3px; }\n        ":"\n            padding: 8px 0;\n            width: 0 !important;\n            margin: 0 !important;\n\n            > path {\n                display: none;\n            }\n        "}
`,$y=G.div`
    flex-basis: 10px;
    flex-shrink: 0;
`,Iy=G(Py)`
    transition: flex-basis 0.1s;
    ${e=>e.pinned?"flex-basis: 50px;":"flex-basis: 71px;"}

    flex-shrink: 0;
    flex-grow: 0;
`,qy=G(Py)`
    flex-basis: 45px;
    flex-shrink: 0;
    flex-grow: 0;
`,jy=G(Py)`
    flex-basis: 49px;
    flex-shrink: 0;
    flex-grow: 0;

    display: flex;
    align-items: center;
    justify-content: center;
`,Dy=G(Py)`
    flex-shrink: 1;
    flex-grow: 0;
    flex-basis: 500px;
`,My=G(Py)`
    flex-shrink: 1;
    flex-grow: 0;
    flex-basis: 1000px;
`,Fy=G(Py)`
    transition: flex-basis 0.1s;
    ${e=>e.pinned?"flex-basis: 109px;":"flex-basis: 130px;"}

    margin-right: 6px !important;

    flex-shrink: 0;
    flex-grow: 0;
`,By=G(Py)`
    flex-shrink: 1;
    flex-grow: 0;
    flex-basis: 500px;

    > svg {
        padding-right: 0; /* Right, not left - it's rotated */
    }
`,Ly=G(Py)`
    flex-shrink: 1;
    flex-grow: 0;
    flex-basis: 1000px;
`,Ny=G(Ly)`
    text-align: center;
`,Uy=G(Py)`
    flex-shrink: 1;
    flex-grow: 0;
    flex-basis: 1000px;
`,Wy=G(is).attrs(()=>({icon:["fas","spinner"],spin:!0,title:"Connected"}))`
    margin: 0 5px 0 0;
    box-sizing: content-box;
`,zy=G.div`
    height: 38px;
    overflow: hidden;
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;

    background-color: ${e=>e.theme.mainBackground};
    color: ${e=>e.theme.mainColor};
    font-weight: bold;

    border-bottom: 1px solid ${e=>e.theme.containerBorder};
    box-shadow: 0 0 30px rgba(0,0,0,0.2);

    padding-right: 18px;
    box-sizing: border-box;

    > div[role=columnheader] {
        padding: 5px 0;
        margin-right: 10px;
        min-width: 0px;

        &:first-of-type {
            margin-left: 0;
        }
    }
`,_y=G(is)`
    flex-shrink: 0;
`,Vy=G(Sy)`
    flex-shrink: 0;
`,Ky=G.span`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    min-width: 0;
`;function Jy(e){if((e=>e in ta)(e))return`${e} requests`;switch(e){case"wildcard":case"default-wildcard":return"Any requests";case"ws-wildcard":case"default-ws-wildcard":return"Any WebSocket";case"rtc-wildcard":return"Any WebRTC connection";case"method":return"Sent with HTTP method";case"host":return"For a host";case"simple-path":return"For a URL";case"regex-path":return"For URLs matching";case"query":return"With query parameters including";case"exact-query-string":return"With exact query string";case"header":return"Including headers";case"cookie":return"With cookie";case"raw-body":return"With exact body";case"raw-body-includes":return"With body including";case"form-data":return"With form data";case"json-body":return"With JSON body";case"json-body-matching":return"With JSON body including";case"protocol":return"With protocol";case"port":return"For port";case"hostname":return"For hostname";case"eth-method":return"An Ethereum interaction";case"eth-params":return"With Ethereum parameters matching";case"ipfs-interaction":return"An IPFS interaction";case"ipfs-arg":return"With IPFS argument";case"has-rtc-data-channel":return"Including a data channel";case"has-rtc-video-track":return"Including a video track";case"has-rtc-audio-track":return"Including an audio track";case"has-rtc-media-track":return"Including any media track";case"rtc-page-hostname":return"Sent from a web page on a specific hostname";case"rtc-page-regex":return"Sent from a web page matching a URL regex";case"rtc-user-agent-regex":return"Sent by a user agent matching a regex";case"am-i-using":case"callback":case"multipart-form-data":case"raw-body-regexp":case"regex-url":throw new Error(`${e} step should not be used directly`);default:throw new kt(e)}}function Qy(e){switch(e){case"simple":return"fixed response";case"file":return"file response";case"forward-to-host":case"ws-forward-to-host":return"forwarding";case"passthrough":case"ws-passthrough":return"passthrough";case"req-res-transformer":return"transform";case"request-breakpoint":case"response-breakpoint":case"request-and-response-breakpoint":return"breakpoint";case"delay":return"delay";case"timeout":return"timeout";case"close-connection":return"connection close";case"reset-connection":return"connection reset";case"webhook":return"webhook";case"ws-reject":return"reject";case"ws-listen":return"listen";case"ws-echo":return"echo";case"eth-call-result":case"eth-number-result":case"eth-hash-result":case"eth-receipt-result":case"eth-block-result":case"ipfs-cat-text":case"ipfs-add-result":case"ipns-resolve-result":case"ipns-publish-result":case"ipfs-pins-result":case"ipfs-pin-ls-result":return"fixed result";case"eth-error":return"error";case"ipfs-cat-file":return"file";case"wait-for-duration":case"wait-for-rtc-data-channel":case"wait-for-rtc-track":case"wait-for-rtc-media":case"wait-for-rtc-message":case"create-rtc-data-channel":case"send-rtc-data-message":case"close-rtc-connection":case"echo-rtc":case"rtc-dynamic-proxy":return"WebRTC";case"json-rpc-response":case"rtc-peer-proxy":case"callback":case"stream":case"wait-for-request-body":case"informational-response":throw new Error(`${e} step should not be used directly`);default:throw new kt(e)}}function Gy(e){const{matchers:t}=e;return 0===t.length?"Never":1===t.length?t[0].explain():2===t.length?`${t[0].explain()} ${t[1].explain()}`:t[0].explain()+" "+t.slice(1,-1).map(e=>e.explain()).join(", ")+(t.length>3?", and ":", ")+t.slice(-1)[0].explain()}function Yy(e){const t=e.steps.map(e=>e.explain());return(n=t.length>1?t.slice(0,-1).join(", ")+" then "+t.slice(-1)[0]:t[0])[0].toUpperCase()+n.slice(1);var n}function Xy(e){const{response:t}=e;return"aborted"===t?"aborted":t?e.isWebSocket()&&101===t.statusCode?e.closeState?"WS:closed":"WS:open":t.statusCode:void 0}const Zy=(0,E.WQ)("uiStore")((0,E.PA)(e=>{const{exchange:t,contextMenuBuilder:n}=e,{request:r,response:o,pinned:s,category:a}=t;return b.createElement(Oy,Object.assign({role:"row","aria-label":`${y.startCase(t.category)} ${r.method} request ${"aborted"===o||t.isWebSocket()?"":t.downstream.isBreakpointed?"waiting at a breakpoint":o?`with a ${o.statusCode} response`:"waiting for a response"} sent to ${r.parsedUrl.host+r.parsedUrl.pathname} by ${r.source.summary}`},e.rowProps,{onContextMenu:n.getContextMenuCallback(t)}),b.createElement(Ay,{"aria-label":s?"Pinned":void 0,pinned:s}),b.createElement(ky,{role:"gridcell",category:a,title:Xn(a)}),b.createElement(Iy,{role:"gridcell",pinned:s},r.method),b.createElement(qy,{role:"gridcell"},"aborted"===o?b.createElement(Sy,{status:"aborted"}):t.downstream.isBreakpointed?b.createElement(ds,{title:"Breakpointed, waiting to be resumed"}):t.isWebSocket()&&101===(null==o?void 0:o.statusCode)?b.createElement(Sy,{status:t.closeState?"WS:closed":"WS:open",message:(t.closeState?"A closed":"An open")+" WebSocket connection"}):b.createElement(Sy,{status:null==o?void 0:o.statusCode,message:null==o?void 0:o.statusMessage})),b.createElement(jy,{role:"gridcell"},b.createElement(is,Object.assign({title:r.source.summary},r.source.icon,{fixedWidth:!0})),t.matchedRule&&Ki(t.matchedRule.stepTypes)&&b.createElement(rs,{icon:"Pencil",alt:`Handled by ${1===t.matchedRule.stepTypes.length?Qy(t.matchedRule.stepTypes[0]):"multi-step"} rule`,size:"20px",color:er("mutative")})),b.createElement(Dy,{role:"gridcell",title:r.parsedUrl.host},r.parsedUrl.host),b.createElement(My,{role:"gridcell",title:r.parsedUrl.pathname+r.parsedUrl.search},r.parsedUrl.pathname+r.parsedUrl.search))})),ev=(0,E.PA)(e=>{const{request:t,pinned:n,category:r}=e.exchange,o=e.exchange.api,s=y.startCase(o.operation.name.replace("eth_","")),a=o.request.parameters.filter(e=>void 0!==e.value).map(e=>`${e.name}=${JSON.stringify(e.value)}`).join(", ");return b.createElement(Oy,Object.assign({role:"row","aria-label":`${y.startCase(r)} ${o.service.shortName} ${s}${a?` with ${a}`:""} sent by ${t.source.summary}`},e.rowProps,{onContextMenu:e.contextMenuBuilder.getContextMenuCallback(e.exchange)}),b.createElement(Ay,{pinned:n}),b.createElement(ky,{role:"gridcell",category:r,title:Xn(r)}),b.createElement(Fy,{role:"gridcell"},o.service.shortName,": ",s),b.createElement(jy,{role:"gridcell",title:t.source.summary},b.createElement(is,Object.assign({},t.source.icon,{fixedWidth:!0}))),b.createElement(Uy,{role:"gridcell"},a))}),tv=(0,E.PA)(e=>{var t;const{event:n}=e,{category:r,pinned:o}=n;return b.createElement(Oy,Object.assign({role:"row","aria-label":`${n.closeState?"Closed":"Open"} RTC connection from ${n.clientURL} to ${null!==(t=n.remoteURL)&&void 0!==t?t:"an unknown peer"} opened by ${n.source.summary}`},e.rowProps),b.createElement(Ay,{pinned:o}),b.createElement(ky,{role:"gridcell",category:r,title:Xn(r)}),b.createElement(Fy,{role:"gridcell"},!n.closeState&&b.createElement(Wy,null)," WebRTC"),b.createElement(jy,{role:"gridcell",title:n.source.summary},b.createElement(is,Object.assign({},n.source.icon,{fixedWidth:!0}))),b.createElement(Ny,{role:"gridcell"},n.clientURL," ",b.createElement(ps,{direction:"right"})," ",n.remoteURL||"?"))}),nv=(0,E.PA)(e=>{const{event:t}=e,{category:n,pinned:r}=t;return b.createElement(Oy,Object.assign({role:"row","aria-label":`${t.closeState?"Closed":"Open"} RTC ${t.isRTCDataChannel()?"data":"media"} stream to ${t.rtcConnection.remoteURL} opened by ${t.rtcConnection.source.summary} ${t.isRTCDataChannel()?`called ${t.label}${t.protocol?` (${t.protocol})`:""} with ${t.messages.length} message${1!==t.messages.length?"s":""}`:`for ${t.direction} ${t.type} with ${Jt(t.totalBytesSent)} sent and ${Jt(t.totalBytesReceived)} received`}`},e.rowProps),b.createElement(Ay,{pinned:r}),b.createElement(ky,{role:"gridcell",category:n,title:Xn(n)}),b.createElement(Fy,{role:"gridcell"},!t.closeState&&b.createElement(Wy,null)," WebRTC ",t.isRTCDataChannel()?"Data":"Media"),b.createElement(jy,{role:"gridcell",title:t.rtcConnection.source.summary},b.createElement(is,Object.assign({},t.rtcConnection.source.icon,{fixedWidth:!0}))),b.createElement(By,{role:"gridcell"},b.createElement(ps,{direction:"right"})," ",t.rtcConnection.remoteURL),b.createElement(Ly,{role:"gridcell"},t.isRTCDataChannel()?b.createElement(b.Fragment,null,t.label," ",b.createElement("em",null,"(",t.protocol?`${t.protocol} - `:"",t.messages.length," message",1!==t.messages.length?"s":"",")")):b.createElement(b.Fragment,null,t.direction," ",t.type," ",b.createElement("em",null,Jt(t.totalBytesSent)," sent, ",Jt(t.totalBytesReceived)," received"))))});function rv(e){return e.upstreamHostname?`${e.upstreamHostname}:${e.upstreamPort}`:"unknown destination"}const ov=(0,E.PA)(e=>{const{event:t}=e,n=rv(t);return b.createElement(Hy,Object.assign({role:"row","aria-label":`Non-HTTP connection to ${n}`},e.rowProps),t.isOpen()&&b.createElement(Wy,null)," Non-HTTP connection to ",n)});function sv(e){return e.isTlsTunnel()?"Tunnelled TLS":{closed:"Aborted",reset:"Aborted",unknown:"Aborted","cert-rejected":"Certificate rejected for","no-shared-cipher":"HTTPS setup failed for"}[e.failureCause]}const av=(0,E.PA)(e=>{const{tlsEvent:t}=e,n=sv(t),r=t.upstreamHostname||"unknown domain";return b.createElement(Hy,Object.assign({role:"row","aria-label":`${n} connection to ${r}`},e.rowProps),t.isTlsTunnel()&&t.isOpen()&&b.createElement(Wy,null)," ",n," connection to ",r)}),iv=(0,E.PA)(e=>{var t,n;const{index:r,style:o}=e,{events:s,selectedEventIds:a,activeEventId:i,contextMenuBuilder:l}=e.data,c=s[r],d=a.has(c.id),u=c.id===i,p={"aria-rowindex":r+1,"aria-selected":d,id:`event-row-${c.id}`,"data-event-id":c.id,className:(d?"selected":"")+(u?" active":""),style:o};if(c.isTlsFailure()||c.isTlsTunnel())return b.createElement(av,{rowProps:p,tlsEvent:c});if(c.isHttp())return(null===(t=c.apiSpec)||void 0===t?void 0:t.isBuiltInApi)&&(null===(n=c.api)||void 0===n?void 0:n.matchedOperation())?b.createElement(ev,{rowProps:p,exchange:c,contextMenuBuilder:l}):b.createElement(Zy,{rowProps:p,exchange:c,contextMenuBuilder:l});if(c.isRTCConnection())return b.createElement(tv,{rowProps:p,event:c});if(c.isRTCDataChannel()||c.isRTCMediaTrack())return b.createElement(nv,{rowProps:p,event:c});if(c.isRawTunnel())return b.createElement(ov,{rowProps:p,event:c});throw new kt(c)});function lv(e){return e.isTlsFailure()||e.isTlsTunnel()||e.isRawTunnel()}function cv(e){return lv(e)?"transparent":er(e.category)}var dv=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const uv=G(mf)`
    position: absolute;
    top: ${38}px;
    bottom: 0;
    height: auto;

    line-height: 1.3;
`,pv=G.div`
    display: block;
    flex-grow: 1;
    position: relative;
    width: 100%;
    box-sizing: border-box;

    font-size: ${e=>e.theme.textSize};

    &::after { /* Insert shadow over table contents */
        content: '';
        position: absolute;
        top: ${38}px;
        bottom: 0;
        left: 0;
        right: 0;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 30px inset;
        pointer-events: none;
    }

    /* Disable default outline */
    & > div > div[tabindex="0"]:focus {
        outline: none;
    }

    /* When focused via keyboard and no active row is visible, outline the list */
    & > div > div[tabindex="0"]:focus-visible:not(:has(.active)) {
        outline: thin dotted ${e=>e.theme.popColor};
    }

    /* When the list is focused, outline the active row */
    & > div > div[tabindex="0"]:focus .active {
        outline: thin dotted ${e=>e.theme.popColor};
    }
`;let hv=class extends b.Component{constructor(){super(...arguments),this.listBodyRef=b.createRef(),this.listRef=b.createRef(),this.setListBodyRef=e=>{this.listBodyRef.current=e,e&&!this.hasRestoredScrollState&&(this.restoreScrollPosition(),this.hasRestoredScrollState=!0)},this.KeyBoundListWindow=(0,E.PA)(b.forwardRef((e,t)=>b.createElement("div",Object.assign({},e,{style:Object.assign({},e.style,{overflowY:"scroll"}),ref:t,onKeyDown:this.onKeyDown,onMouseDown:this.onListMouseDown,"aria-activedescendant":this.activeRowDomId,tabIndex:0})))),this.wasListAtBottom=!0,this.updateScrolledState=()=>{requestAnimationFrame(()=>{var e,t;if(this.wasListAtBottom=this.isListAtBottom(),this.hasRestoredScrollState){const n=null===(e=this.listBodyRef.current)||void 0===e?void 0:e.parentElement,r=this.wasListAtBottom?"end":null!==(t=null==n?void 0:n.scrollTop)&&void 0!==t?t:"end";n&&this.props.uiStore.setViewScrollPosition(r)}})},this.hasRestoredScrollState=!1,this.lastEventCount=0,this.restoreScrollPosition=()=>{var e;const t=this.props.uiStore.viewScrollPosition,n=null===(e=this.listBodyRef.current)||void 0===e?void 0:e.parentElement;n&&("end"===t?n.scrollTop=n.scrollHeight:Math.abs(n.scrollTop-t)>10&&(n.scrollTop=t))},this.onListMouseDown=e=>{if(0!==e.button)return;let t=e.target,n=null;for(;null===n&&t&&t!==this.listBodyRef.current;)n=t.getAttribute&&t.getAttribute("aria-rowindex"),t=t.parentElement;if(!n)return;const r=parseInt(n,10)-1,o=this.props.filteredEvents[r];o&&(e.shiftKey?(e.preventDefault(),this.props.onRangeSelected(o)):Ep(e)?this.props.onToggleSelected(o):1===this.props.selectedEventIds.size&&this.props.selectedEventIds.has(o.id)?this.props.onClearSelection():this.props.onSelected(o))}}get listItemData(){return{selectedEventIds:this.props.selectedEventIds,activeEventId:this.props.activeEventId,events:this.props.filteredEvents,contextMenuBuilder:this.props.contextMenuBuilder}}get activeRowDomId(){const e=this.props.activeEventId;if(!e)return;const t=this.listBodyRef.current;return t&&t.querySelector(`[data-event-id='${e}']`)?`event-row-${e}`:void 0}render(){const{events:e,filteredEvents:t,isPaused:n}=this.props;return b.createElement(pv,{role:"grid"},b.createElement(zy,{role:"row"},b.createElement($y,{role:"columnheader","aria-label":"Category"}),b.createElement(Iy,{role:"columnheader"},"Method"),b.createElement(qy,{role:"columnheader"},"Status"),b.createElement(jy,{role:"columnheader"},"Source"),b.createElement(Dy,{role:"columnheader"},"Host"),b.createElement(My,{role:"columnheader"},"Path and query")),0===e.length?n?b.createElement(uv,{icon:"Pause"},"Interception is paused, resume it to collect intercepted requests"):b.createElement(uv,{icon:"Plug"},"Connect a client and intercept some requests, and they'll appear here"):0===t.length?b.createElement(uv,{icon:"QuestionMark"},"No requests match this search filter",n?" and interception is paused":""):b.createElement(jf.A,null,({height:e,width:n})=>b.createElement(E.nu,null,()=>b.createElement(Df.Y1,{innerRef:this.setListBodyRef,outerElementType:this.KeyBoundListWindow,ref:this.listRef,height:e-38,width:n,itemCount:t.length,itemSize:32,itemData:this.listItemData,onScroll:this.updateScrolledState},iv))))}focusListWindow(){var e;const t=null===(e=this.listBodyRef.current)||void 0===e?void 0:e.parentElement;null==t||t.focus()}focusList(){this.focusListWindow();const{activeEventId:e}=this.props;if(e){const t=this.props.filteredEvents.find(t=>t.id===e);t&&this.scrollToEvent(t)}}isListAtBottom(){var e;const t=null===(e=this.listBodyRef.current)||void 0===e?void 0:e.parentElement;return!t||t.scrollTop+5>=t.scrollHeight-t.offsetHeight}componentDidUpdate(){var e;const t=this.props.events.length,n=t>this.lastEventCount;this.lastEventCount=t,n&&this.wasListAtBottom&&!this.isListAtBottom()&&(null===(e=this.listRef.current)||void 0===e||e.scrollToItem(t-1))}scrollToEvent(e){var t;const n=this.props.filteredEvents.indexOf(e);-1!==n&&(null===(t=this.listRef.current)||void 0===t||t.scrollToItem(n))}scrollToCenterEvent(e){const t=this.listRef.current,n=this.listBodyRef.current;if(!t||!n)return;const r=n.parentElement,o=this.props.filteredEvents.indexOf(e);if(-1===o)return;const s=this.props.filteredEvents.length,a=r.clientHeight,i=a/2,l=32*o,c=Math.max(0,32*s-a),d=l-i+16;t.scrollTo(y.clamp(d,0,c)),r.focus()}scrollToEnd(){var e;null===(e=this.listRef.current)||void 0===e||e.scrollToItem(this.props.filteredEvents.length,"start")}onKeyDown(e){const{moveSelection:t}=this.props,n=e.shiftKey;switch(e.key){case"ArrowDown":t(1,n);break;case"ArrowUp":t(-1,n);break;case"PageUp":t(-10,n);break;case"PageDown":t(10,n);break;case"Home":t(-1/0,n);break;case"End":t(1/0,n);break;case"Escape":this.props.onClearSelection();break;case"a":if(!Ep(e))return;this.props.onSelectAll();break;default:return}e.preventDefault()}};dv([w.computed],hv.prototype,"listItemData",null),dv([w.action.bound],hv.prototype,"onKeyDown",null),hv=dv([E.PA],hv);var mv=n(98456);const gv=e=>{return t=void 0,n=void 0,o=function*(){const t=JSON.stringify(yield mu([e],{bodySizeLimit:1/0}));Sp(`${e.request.method} ${e.request.parsedUrl.hostname}.har`,"application/har+json;charset=utf-8",t)},new((r=void 0)||(r=Promise))(function(e,s){function a(e){try{l(o.next(e))}catch(e){s(e)}}function i(e){try{l(o.throw(e))}catch(e){s(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r(function(e){e(n)})).then(a,i)}l((o=o.apply(t,n||[])).next())});var t,n,r,o};function fv(e,t,n={}){return n.waitForBodyDecoding&&e.request.body.isPending()?e.request.body.waitForDecoding().catch(()=>{}).then(()=>fv(e,t,n)):yv(bu(e.request,!1,{bodySizeLimit:1/0}),t)}function yv(e,t){const n=function(e){const t=e.postData?e.postData:"discarded:not-representable"===e._requestBodyStatus?{mimeType:"text/plain",text:"!!! UNREPRESENTABLE BINARY REQUEST BODY - BODY MUST BE EXPORTED SEPARATELY !!!"}:"discarded:too-large"===e._requestBodyStatus?{mimeType:"text/plain",text:"!!! VERY LARGE REQUEST BODY - BODY MUST BE EXPORTED & INCLUDED SEPARATELY !!!"}:"discarded:not-decodable"===e._requestBodyStatus?{mimeType:"text/plain",text:"!!! REQUEST BODY COULD NOT BE DECODED !!!"}:void 0;return Object.assign(Object.assign({},e),{postData:t,headers:e.headers.filter(e=>"content-length"!==e.name.toLowerCase()&&!e.name.startsWith(":")&&"content-encoding"!==e.name.toLowerCase()),cookies:[]})}(e);return new mv(n).convert(t.target,t.client).trim()}const vv=y(mv.availableTargets()).keyBy(e=>e.title).mapValues(e=>e.clients.map(t=>({target:e.key,client:t.key,name:t.title,description:t.description,link:t.link}))).value(),bv="~~",xv=`shell${bv}curl`,wv=e=>e.target+bv+e.client,Ev=e=>{const[t,n]=e.split(bv);return y(vv).values().flatten().find({target:t,client:n})},Cv=e=>({"php~~curl":"PHP ext-cURL","php~~http1":"PHP HTTP v1","php~~http2":"PHP HTTP v2","node~~native":"Node.js HTTP"}[wv(e)]||e.name);var Tv=function(e,t,n,r){return new(n||(n=Promise))(function(o,s){function a(e){try{l(r.next(e))}catch(e){s(e)}}function i(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(a,i)}l((r=r.apply(e,t||[])).next())})};class Sv{constructor(e,t,n,r){this.accountStore=e,this.uiStore=t,this.getSelectedEvents=n,this.callbacks=r}getContextMenuCallback(e){return t=>{const{selectedEventIds:n}=this.uiStore;n.size>1&&n.has(e.id)?this.showMultiSelectionMenu(t):e.isHttp()?this.showHttpEventMenu(t,e):this.showBasicEventMenu(t,e)}}showMultiSelectionMenu(e){const t=this.accountStore.user.isPaidUser(),n=this.getSelectedEvents(),r=n.length,o=n.filter(e=>e.isHttp()&&!e.isWebSocket()).length,s=[{type:"option",label:"Toggle Pinning",callback:()=>this.callbacks.onPin()},...o>0?[{type:"option",enabled:t,label:`Create ${o} Matching Rule${1!==o?"s":""}`,callback:()=>this.callbacks.onBuildRuleFromSelectedExchanges()}]:[],{type:"option",label:`Delete ${r} Event${1!==r?"s":""}`,callback:()=>this.callbacks.onDeleteSelection()}];this.uiStore.handleContextMenuEvent(e,s,void 0)}showHttpEventMenu(e,t){const n=this.accountStore.user.isPaidUser(),r=this.uiStore.exportSnippetFormat?Ev(this.uiStore.exportSnippetFormat):void 0,o=[{type:"option",label:"Toggle Pinning",callback:(0,w.action)(e=>{e.pinned=!e.pinned})},{type:"submenu",label:"Filter traffic like this",items:[{type:"option",label:"Show only this hostname",callback:()=>this.callbacks.onAddFilter(new fd(`hostname=${t.request.parsedUrl.hostname}`))},{type:"option",label:"Hide this hostname",callback:()=>this.callbacks.onAddFilter(new fd(`hostname!=${t.request.parsedUrl.hostname}`))}]},{type:"option",label:"Copy Request URL",callback:e=>kp(e.request.url)},...n?[]:[{type:"separator"},{type:"option",label:"With Pro:",enabled:!1,callback:()=>{}}],...this.callbacks.onPrepareToResendRequest?[{type:"option",enabled:n,label:"Resend Request",callback:e=>this.callbacks.onPrepareToResendRequest(e)}]:[],{type:"option",enabled:n,label:"Create Matching Modify Rule",callback:this.callbacks.onBuildRuleFromExchange},{type:"option",enabled:n,label:"Export Exchange as HAR",callback:gv},...r&&n?[{type:"option",label:`Copy as ${Cv(r)} Snippet`,callback:e=>Tv(this,void 0,void 0,function*(){kp(yield fv(e,r,{waitForBodyDecoding:!0}))})}]:[],{type:"submenu",enabled:n,label:"Copy as Code Snippet",items:Object.keys(vv).map(e=>({type:"submenu",label:e,items:vv[e].map(e=>({type:"option",label:Cv(e),callback:t=>Tv(this,void 0,void 0,function*(){(0,w.runInAction)(()=>{this.uiStore.exportSnippetFormat=wv(e)}),kp(yield fv(t,e,{waitForBodyDecoding:!0}))})}))}))},{type:"option",label:"Delete",callback:this.callbacks.onDelete}],s=y.sortBy(o,e=>{var t;return"separator"===e.type||!(null===(t=e.enabled)||void 0===t||t)});this.uiStore.handleContextMenuEvent(e,s,t)}showBasicEventMenu(e,t){this.uiStore.handleContextMenuEvent(e,[{type:"option",label:"Toggle Pinning",callback:(0,w.action)(e=>{e.pinned=!e.pinned})},{type:"option",label:"Delete",callback:this.callbacks.onDelete}],t)}}const Pv=G.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,kv=G.div`
    position: relative;
    overflow-y: scroll;

    flex-grow: 1;
    padding: 0 20px 0 20px;

    background-color: ${e=>e.theme.containerBackground};

    container-type: size;
`,Rv=G.div`
    min-height: 100%;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;

    /*
    * This padding could be padding on the scroll container, but doing so causes odd
    * behaviour where position: sticky headers don't take it into account, on OSX only.
    * Moving to the direct parent of the header makes that consistent, for some reason. Ew.
    */
    padding-top: 20px;
`,Ov=e=>b.createElement(kv,null,b.createElement(Rv,null,e.children)),Hv=Rs(["invalid-http-version","invalid-method","client-unparseable","client-unparseable-url","header-overflow","invalid-headers"]),Av=Rs(["client-unparseable","client-unparseable-url","invalid-headers"]),$v=Rs(["untrusted","expired","not-yet-valid","wrong-host","tls-error","host-not-found","host-unreachable","dns-error","connection-refused"]),Iv=Rs(["server-unparseable","server-timeout","connection-reset"]),qv=Rs(["server-unparseable","connection-reset"]),jv=Rs(["client-timeout","server-timeout"]),Dv=Rs(["untrusted","expired","not-yet-valid","wrong-host","tls-error"]),Mv=Rs(["host-not-found","host-unreachable","dns-error","connection-refused","connection-reset","server-timeout"]);function Fv(e){return e.includes("passthrough-error:SELF_SIGNED_CERT_IN_CHAIN")||e.includes("passthrough-error:DEPTH_ZERO_SELF_SIGNED_CERT")||e.includes("passthrough-error:UNABLE_TO_VERIFY_LEAF_SIGNATURE")||e.includes("passthrough-error:UNABLE_TO_GET_ISSUER_CERT_LOCALLY")?"untrusted":e.includes("passthrough-error:CERT_HAS_EXPIRED")?"expired":e.includes("passthrough-error:CERT_NOT_YET_VALID")?"not-yet-valid":e.includes("passthrough-error:ERR_TLS_CERT_ALTNAME_INVALID")?"wrong-host":e.filter(e=>e.startsWith("passthrough-tls-error:")).length>0||e.includes("passthrough-error:EPROTO")||e.includes("passthrough-error:ERR_SSL_WRONG_VERSION_NUMBER")||e.includes("passthrough-error:ERR_SSL_DECRYPTION_FAILED_OR_BAD_RECORD_MAC")||e.includes("passthrough-error:ERR_SSL_CIPHER_OPERATION_FAILED")||e.includes("passthrough-error:ERR_SSL_BAD_RECORD_TYPE")||e.includes("passthrough-error:ERR_SSL_INTERNAL_ERROR")?"tls-error":e.includes("passthrough-error:ENOTFOUND")?"host-not-found":e.includes("passthrough-error:EHOSTUNREACH")||e.includes("passthrough-error:ENETUNREACH")?"host-unreachable":e.includes("passthrough-error:EAI_AGAIN")?"dns-error":e.includes("passthrough-error:ECONNREFUSED")?"connection-refused":e.includes("passthrough-error:ECONNRESET")?"connection-reset":e.includes("passthrough-error:ETIMEDOUT")?"server-timeout":e.includes("passthrough-error:HPE_INVALID_CONSTANT")||e.includes("passthrough-error:ERR_INVALID_HTTP_TOKEN")||e.includes("passthrough-error:ERR_HTTP_INVALID_STATUS_CODE")||e.includes("passthrough-error:ERR_INVALID_CHAR")?"server-unparseable":e.includes("http-2")||e.includes("client-error:HPE_INVALID_VERSION")?"invalid-http-version":e.includes("client-error:HPE_INVALID_METHOD")?"invalid-method":e.includes("client-error:HPE_INVALID_URL")?"client-unparseable-url":e.includes("client-error:HPE_INVALID_CONSTANT")||e.includes("client-error:HPE_INVALID_EOF_STATE")?"client-unparseable":e.includes("client-error:HPE_HEADER_OVERFLOW")?"header-overflow":e.includes("client-error:HPE_INVALID_CONTENT_LENGTH")||e.includes("client-error:HPE_INVALID_TRANSFER_ENCODING")||e.includes("client-error:HPE_INVALID_HEADER_TOKEN")||e.includes("client-error:HPE_UNEXPECTED_CONTENT_LENGTH")||e.includes("passthrough-error:HPE_INVALID_HEADER_TOKEN")?"invalid-headers":e.includes("client-error:ERR_HTTP_REQUEST_TIMEOUT")?"client-timeout":e.includes("client-error:ECONNABORTED")||e.includes("client-error:EPIPE")?"client-abort":e.includes("passthrough-error:E_RULE_BREQ_CLOSE")||e.includes("passthrough-error:E_RULE_BREQ_RESET")||e.includes("passthrough-error:E_RULE_BRES_CLOSE")||e.includes("passthrough-error:E_RULE_BRES_RESET")||e.includes("passthrough-error:E_RULE_CLOSE")||e.includes("passthrough-error:E_RULE_RESET")?"rule-abort":e.filter(e=>e.startsWith("passthrough-error:")).length>0||e.filter(e=>e.startsWith("client-error:")).length>0?(f(`Unrecognized error tag ${JSON.stringify(e)}`),"unknown"):void 0}const Bv=G.div`
    overflow: hidden;
    display: flex;
    flex-direction: inherit;
`,Lv=G.div`
    position: relative;
`,Nv=G.div`
    position: absolute;
    left: 0;
    top: 100%;
    z-index: 1;
    display: flex;
    flex-direction: column;

    background-color: ${e=>e.theme.mainBackground};
    padding-bottom: 2px;

    opacity: 0;
    pointer-events: none;
    &:hover, &:focus-within {
        opacity: 1;
        pointer-events: auto;
    }
`,Uv=G.div`
    flex-grow: 1;
    flex-shrink: 1;
    min-width: 0;

    position: relative;
    display: flex;

    /* Try to avoid button padding expanding outer containers */
    margin: -5px -9px;

    /* Match the parent (typically card header) flex direction, but justify
       content in the opposite direction */
    flex-direction: inherit;
    justify-content: flex-start;
`,Wv=G(is)`
    color: ${e=>e.theme.mainColor};
    font-size: ${e=>e.theme.textSize};
    padding: 5px 10px;

    box-sizing: content-box;

    &:hover + ${Nv} {
        opacity: 1;
        pointer-events: auto;
    }
`;function zv(){"blur"in(document.activeElement||{})&&document.activeElement.blur()}const _v=e=>{var t,n;const r=b.useRef(null),o=function(e){const[t,n]=b.useState(1/0);return b.useEffect(()=>{const t=new ResizeObserver(()=>{const t=e.current;t?n(t.clientWidth):console.warn("Element resized, but no ref available")});return e.current?t.observe(e.current):f("No element to observe for resizing!"),()=>t.disconnect()},[]),t}(r);null===(t=r.current)||void 0===t||t.children;const s=Array.from((null===(n=r.current)||void 0===n?void 0:n.querySelectorAll("button"))||[]),a=y.max(s.map(e=>e.clientWidth)),i=a?Math.max(Math.floor(o/a),1):1/0,l=b.Children.toArray(e.children),[c,d]=i>=l.length?[l,[]]:[l.slice(0,i-1),l.slice(i-1)];return b.createElement(Uv,{ref:r,className:e.className},b.createElement(Bv,null,c),d.length>0&&b.createElement(Lv,null,b.createElement(Wv,{icon:["fas","caret-down"],title:"Show more"}),b.createElement(Nv,{onClick:zv},d)))},Vv=e=>b.createElement(kh,{icon:["fas",e.expanded?"compress-arrows-alt":"expand"],onClick:e.onClick,title:e.expanded?"Shrink this area, so you can see other details":"Expand this area to view it in more detail, hiding other areas"});var Kv=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const Jv=G.div`
    display: grid;
    grid-gap: 5px;
    grid-template-columns: 1fr 2fr;
`,Qv=G(Jv)`
    grid-template-columns: 1fr 2fr min-content;

    > :last-child {
        grid-column: 2 / span 2;
    }
`,Gv=G(Wp)`
    font-size: ${e=>e.theme.textSize};
    padding: 3px 10px 5px;
`;let Yv=class extends b.Component{render(){const{pairs:e,className:t}=this.props;return b.createElement(Jv,{className:t},y.flatMap(e,({key:e,value:t},n)=>[b.createElement(Kp,{value:e,readOnly:!0,spellCheck:!1,key:`${n}-key`}),b.createElement(Kp,{value:t,readOnly:!0,spellCheck:!1,key:`${n}-val`})]))}};Yv=Kv([E.PA],Yv);let Xv=class extends b.Component{constructor(){super(...arguments),this.containerRef=b.createRef(),this.values=y.cloneDeep(this.props.pairs),this.lastValuesLength=this.values.length,this.convert=e=>this.props.convertResult?this.props.convertResult(e):y.cloneDeep(e),this.onChangeValues=e=>{const{props:{transformInput:t,onChange:n},convert:r}=this;this.values=t?t(e):e;const o=this.values.length===this.lastValuesLength+1;this.lastValuesLength=this.values.length,o&&requestAnimationFrame(()=>{const e=this.containerRef.current,t=null==e?void 0:e.querySelector("input:last-child");null==t||t.scrollIntoView({block:"nearest",behavior:"smooth"})}),n(r(this.values))}}componentDidMount(){(0,E.bH)(this,(0,w.reaction)(()=>this.props.pairs,e=>{y.isEqual(this.convert(e),this.convert(this.values))||(this.values=y.cloneDeep(e),this.lastValuesLength=this.values.length)},{equals:w.comparer.structural})),(0,E.bH)(this,(0,w.autorun)(()=>{var e,t;let{keyValidation:n,valueValidation:r}=this.props;if(!y.isFunction(n)&&!y.isFunction(r))return;const o=null===(t=null===(e=this.containerRef)||void 0===e?void 0:e.current)||void 0===t?void 0:t.querySelectorAll("input");o&&this.values.forEach((e,t)=>{const s=null==o?void 0:o[2*t],a=null==o?void 0:o[2*t+1];[[s,e.key,n],[a,e.value,r]].forEach(([e,t,n])=>{if(!e||!y.isFunction(n))return;const r=n(t);!0===r?e.setCustomValidity(""):e.setCustomValidity(r),e.reportValidity()})})}))}render(){const{className:e,keyTitle:t,keyValidation:n,keyPlaceholder:r,valuePlaceholder:o,allowEmptyValues:s}=this.props,{values:a,onChangeValues:i,containerRef:l}=this,c="string"==typeof n?n:void 0;return b.createElement(Qv,{className:e,ref:l},y.flatMap(a,({key:e,value:n,disabled:r},o)=>[b.createElement(Kp,{value:e,required:!0,pattern:c,title:t,disabled:r,spellCheck:!1,key:`${o}-key`,onChange:(0,w.action)(e=>{e.target.reportValidity(),a[o].key=e.target.value,i(a)})}),b.createElement(Kp,{value:n,required:!s,disabled:r,spellCheck:!1,key:`${o}-val`,onChange:(0,w.action)(e=>{e.target.reportValidity(),a[o].value=e.target.value,i(a)})}),b.createElement(Gv,{key:`${o}-del`,disabled:r,onClick:(0,w.action)(()=>{a.splice(o,1),i(a)})},b.createElement(is,{icon:["far","trash-alt"]}))]).concat([b.createElement(Kp,{value:"",pattern:c,placeholder:r,spellCheck:!1,key:`${a.length}-key`,onChange:(0,w.action)(e=>{let t=e.target.value;t&&a.push({key:t,value:""}),i(a)})}),b.createElement(Kp,{value:"",placeholder:o,spellCheck:!1,key:`${a.length}-val`,onChange:(0,w.action)(e=>{e.target.value&&a.push({key:"",value:e.target.value}),i(a)})})]))}};Kv([w.observable],Xv.prototype,"values",void 0),Xv=Kv([E.PA],Xv);const Zv=G(e=>b.createElement("img",{className:e.className,src:`data:${e.rawContentType||""};base64,${e.content.toString("base64")}`}))`
    display: block;
    max-width: 100%;
    max-height: 100%;
    margin: 0 auto;
    object-fit: scale-down;
`;var eb=n(2758);const tb=(e,t=1)=>"number"==typeof e&&Number.isFinite(e)?Number.isInteger(e)?String(e):e.toFixed(t):null,nb=e=>e instanceof Date&&!isNaN(e.getTime())?e.toISOString().replace("T"," ").replace(/\.\d+Z$/,""):"string"==typeof e?e:null,rb=(e,t)=>{const n=e>=0?"N":"S",r=t>=0?"E":"W";return`${Math.abs(e).toFixed(4)}°${n} ${Math.abs(t).toFixed(4)}°${r}`},ob=[{name:"Captured",match:e=>/^(DateTime|CreateDate|ModifyDate|OffsetTime|SubSecTime)/.test(e)||"GPSDateStamp"===e||"GPSTimeStamp"===e},{name:"Location",match:e=>"latitude"===e||"longitude"===e||e.startsWith("GPS")},{name:"Description",match:e=>["ImageDescription","Artist","Copyright","UserComment","XPTitle","XPComment","XPAuthor","XPKeywords","XPSubject"].includes(e)},{name:"Device",match:e=>["Make","Model","Software","HostComputer","BodySerialNumber","CameraSerialNumber"].includes(e)||e.startsWith("Lens")},{name:"Settings",match:e=>/^(Exposure|FNumber|ISO|Aperture|Shutter|Flash|WhiteBalance|Metering|Scene|Saturation|Sharpness|Contrast|DigitalZoom|SubjectDistance|LightSource|Sensitivity|Brightness|FocalLength|MaxAperture|FocalPlane)/.test(e)},{name:"Image",match:e=>/^(Image|Exif|Dimension|Orientation|ColorSpace|Resolution|XResolution|YResolution|Compression|YCbCr|Photometric|Pixel|BitsPerSample|SamplesPerPixel|PlanarConfiguration|Components|Thumbnail|Interop)/.test(e)}],sb="Other",ab=e=>{for(const t of ob)if(t.match(e))return t.name;return sb},ib=[{a:"Width",b:"Height",label:e=>e||"Dimensions",format:(e,t)=>`${e}×${t}`},{a:"XResolution",b:"YResolution",label:e=>`${e}Resolution`,format:(e,t)=>e===t?String(e):`${e}×${t}`},{a:"XDimension",b:"YDimension",label:e=>`${e}Dimensions`,format:(e,t)=>`${e}×${t}`}],lb=G.div`
    ${e=>"left"===e.direction?Y`margin: 0 -20px 0 -15px;`:"right"===e.direction?Y`margin: 0 -15px 0 -20px;`:Y`margin: 0 -20px;`}

    display: flex;
    flex-direction: column;
    min-height: 0;

    background-color: ${e=>e.theme.mainLowlightBackground};
    border-top: solid 1px ${e=>e.theme.containerBorder};
    color: ${e=>e.theme.mainColor};
    font-size: ${e=>e.theme.textSize};
    font-family: ${e=>e.theme.fontFamily};
`,cb=e=>"left"===e?Y`padding-left: 15px; padding-right: 20px;`:"right"===e?Y`padding-left: 20px; padding-right: 15px;`:Y`padding-left: 20px; padding-right: 20px;`,db=G.button`
    width: 100%;
    flex-shrink: 0;
    padding-top: 6px;
    padding-bottom: 6px;
    ${e=>cb(e.direction)}
    background: none;
    border: none;
    ${e=>e.expanded&&Y`
        border-bottom: solid 1px ${e.theme.containerBorder};
    `}
    color: inherit;
    font: inherit;
    text-align: left;
    cursor: pointer;

    display: flex;
    align-items: baseline;
    gap: 8px;
    white-space: nowrap;
    overflow: hidden;

    &:hover { color: ${e=>e.theme.popColor}; }
    &:focus { outline: none; color: ${e=>e.theme.popColor}; }
`,ub=G(is)`
    flex: 0 0 auto;
    opacity: ${e=>e.theme.lowlightTextOpacity};
    width: 12px;
    align-self: center;
`,pb=G(uh).attrs({as:"span"})`
    flex: 0 0 auto;
`,hb=G.span`
    flex: 1 1 auto;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
`,mb=G.div`
    min-height: 0;
    overflow-y: auto;

    padding-top: 8px;
    padding-bottom: 10px;
    ${e=>cb(e.direction)}
    background-color: ${e=>e.theme.mainBackground};
    box-shadow:
        inset 0px 12px 8px -10px rgba(0, 0, 0, ${e=>e.theme.boxShadowAlpha}),
        inset 0px -8px 8px -10px rgba(0, 0, 0, ${e=>e.theme.boxShadowAlpha});
`,gb=G.div`
    display: grid;
    grid-template-columns: fit-content(40%) 1fr;
    column-gap: 12px;
    row-gap: 2px;
`,fb=G(uh)`
    grid-column: 1 / -1;
    margin-top: 10px;

    &:first-child { margin-top: 0; }
`,yb=G.div`
    font-family: ${e=>e.theme.monoFontFamily};
    word-break: break-all;
    text-align: right;
    opacity: ${e=>e.theme.lowlightTextOpacity};
`,vb=G.div`
    font-family: ${e=>e.theme.monoFontFamily};
    word-break: break-word;
    white-space: pre-wrap;
`;function bb(e){return!!e.language}const xb=e=>(t,n)=>le(Kl(t,e,n)),wb={raw:{language:"hex",cacheKey:Symbol("raw"),isEditApplicable:!1,render:(e,t)=>{if(!(e.byteLength<2e3))return le(Kl(e,"raw",t));try{return function(e){const t=new Array(e.length);for(let n=0;n<e.length;n++)t[n]=Kt[e[n]];return t.join(" ")}(e)}catch(e){return le(Promise.reject(e))}}},text:{language:"text",cacheKey:Symbol("text"),isEditApplicable:!1,render:e=>Wt(e)},base64:{language:"text",cacheKey:Symbol("base64"),isEditApplicable:!1,render:xb("base64")},markdown:{language:"markdown",cacheKey:Symbol("markdown"),isEditApplicable:!1,render:xb("markdown")},yaml:{language:"yaml",cacheKey:Symbol("yaml"),isEditApplicable:!1,render:xb("yaml")},html:{language:"html",cacheKey:Symbol("html"),isEditApplicable:!0,render:xb("html")},xml:{language:"xml",cacheKey:Symbol("xml"),isEditApplicable:!0,render:xb("xml")},json:{language:"json",cacheKey:Symbol("json"),isEditApplicable:!0,render:(e,t)=>e.byteLength<1e4?An(Wt(e),{formatRecords:!1}):le(Kl(e,"json",t))},"json-records":{language:"json-records",cacheKey:Symbol("json-records"),isEditApplicable:!1,render:(e,t)=>e.byteLength<1e4?An(Wt(e),{formatRecords:!0}):le(Kl(e,"json-records",t))},javascript:{language:"javascript",cacheKey:Symbol("javascript"),isEditApplicable:!0,render:xb("javascript")},css:{language:"css",cacheKey:Symbol("css"),isEditApplicable:!0,render:xb("css")},protobuf:{language:"protobuf",cacheKey:Symbol("protobuf"),isEditApplicable:!1,render:xb("protobuf")},"grpc-proto":{language:"protobuf",cacheKey:Symbol("grpc-proto"),isEditApplicable:!1,render:xb("grpc-proto")},"url-encoded":{layout:"scrollable",Component:G(e=>{const t=[...new URLSearchParams(e.content)].map(([e,t])=>({key:e,value:t}));return b.createElement(Yv,{className:e.className,pairs:t})}).attrs(e=>({content:Wt(e.content)}))`
            padding: 5px;
        `},image:{layout:"centered",Component:Zv,metadata:{cacheKey:Symbol("image-exif"),extract:e=>{return t=void 0,n=void 0,o=function*(){try{const t=new Uint8Array(e.buffer,e.byteOffset,e.byteLength),n=yield(0,eb.qg)(t);if(!n||y.isEmpty(n))return;return n}catch(e){return}},new((r=void 0)||(r=Promise))(function(e,s){function a(e){try{l(o.next(e))}catch(e){s(e)}}function i(e){try{l(o.throw(e))}catch(e){s(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r(function(e){e(n)})).then(a,i)}l((o=o.apply(t,n||[])).next())});var t,n,r,o},Component:e=>{const t=e.metadata,[n,r]=b.useState(!1),o=(e=>{var t,n;const r=[],o=nb(null!==(n=null!==(t=e.DateTimeOriginal)&&void 0!==t?t:e.CreateDate)&&void 0!==n?n:e.ModifyDate);o&&r.push(o),"number"==typeof e.latitude&&"number"==typeof e.longitude&&r.push(rb(e.latitude,e.longitude));const s="string"==typeof e.Make?e.Make.trim():"",a="string"==typeof e.Model?e.Model.trim():"",i=a&&s&&!a.startsWith(s)?`${s} ${a}`:a||s;i&&r.push(i),"string"==typeof e.LensModel&&e.LensModel.trim()&&r.push(e.LensModel.trim());const l=tb(e.FocalLength,0);l&&r.push(`${l}mm`);const c="number"==typeof e.ExposureTime?(d=e.ExposureTime,!Number.isFinite(d)||d<=0?null:d>=1?`${d}s`:`1/${Math.round(1/d)}s`):null;var d;c&&r.push(c);const u=tb(e.FNumber,1);return u&&r.push(`f/${u}`),"number"==typeof e.ISO&&r.push(`ISO ${e.ISO}`),r.join(" · ")})(t)||`${Object.keys(t).length} properties`,s=(e=>{const t=Object.entries(e).filter(([,e])=>null!=e&&""!==e),n=new Map(t),r=new Set,o=[];"number"==typeof e.latitude&&"number"==typeof e.longitude&&(r.add("latitude"),r.add("longitude"),o.push({label:"Location",value:rb(e.latitude,e.longitude),isLocation:!0}));for(const[e,s]of t){if(r.has(e))continue;let t=!1;for(const{a,b:i,label:l,format:c}of ib)if(e.endsWith(a)){const d=e.slice(0,-a.length),u=d+i;if(n.has(u)&&!r.has(u)){r.add(e),r.add(u),o.push({label:l(d),value:c(s,n.get(u))}),t=!0;break}}t||o.push({label:e,value:s})}return o})(t),a=(e=>{const t=new Map;for(const n of e){const e=n.isLocation?"Location":ab(n.label);t.has(e)||t.set(e,[]),t.get(e).push(n)}return[...ob.map(e=>e.name),sb].filter(e=>t.has(e)).map(e=>({name:e,rows:t.get(e).sort((e,t)=>e.label.localeCompare(t.label))}))})(s),i="number"==typeof t.latitude?t.latitude:null,l="number"==typeof t.longitude?t.longitude:null,c=null!==i&&null!==l?((e,t)=>`https://www.openstreetmap.org/?mlat=${e}&mlon=${t}#map=16/${e}/${t}`)(i,l):null;return b.createElement(lb,{direction:e.direction},b.createElement(db,{type:"button",expanded:n,direction:e.direction,"aria-expanded":n,"aria-label":(n?"Hide":"Show")+" EXIF metadata",onClick:()=>r(e=>!e)},b.createElement(ub,{icon:["fas",n?"minus":"plus"]}),b.createElement(pb,null,"EXIF Data:"),!n&&b.createElement(hb,{title:o},o)),n&&b.createElement(mb,{direction:e.direction},b.createElement(gb,null,a.map(e=>b.createElement(b.Fragment,{key:e.name},b.createElement(fb,null,e.name),e.rows.map(e=>{const t=e.isLocation&&c?b.createElement(rh,{href:c},String(e.value)):(e=>{var t;return e instanceof Date?null!==(t=nb(e))&&void 0!==t?t:e.toString():e instanceof Uint8Array?e.length>8?`[${e.length} bytes]`:`[${Array.from(e).join(", ")}]`:Array.isArray(e)&&e.every(e=>"number"==typeof e)?e.length>8?`[${e.length} bytes]`:`[${e.join(", ")}]`:"number"==typeof e?Number.isInteger(e)?String(e):e.toFixed(4).replace(/\.?0+$/,""):String(e)})(e.value);return b.createElement(b.Fragment,{key:e.label},b.createElement(yb,null,e.label),b.createElement(vb,null,t))}))))))}}}},Eb=G(e=>b.createElement("div",{className:e.className},b.createElement(is,{spin:!0,icon:["fac","spinner-arc"],size:"8x"})))`
    ${e=>e.height&&Y`
        height: ${e.height};
    `}

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`,Cb=e=>b.createElement(Dp,Object.assign({},e),e.children,b.createElement(Eb,{height:e.height?e.height:e.expanded?"auto":"550px"}));var Tb=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const Sb=G.div`
    overflow-y: auto;
    max-height: ${e=>e.expanded?"100%":"560px"}
`,Pb=G.div`
    display: flex;
    justify-content: center;

    ${e=>e.expanded?"\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            align-items: stretch;\n        ":"\n            height: 100%;\n            align-items: center;\n        "}
`,kb=G.div`
    padding: 10px;

    font-size: ${e=>e.theme.textSize};
    color: ${e=>e.theme.mainColor};
    background-color: ${e=>e.theme.warningBackground};

    svg {
        margin-left: 0;
    }
`,Rb=G(mh)`
    padding: 0;
    margin: 10px 0 0;
`,Ob=e=>b.createElement(kb,null,b.createElement("p",null,b.createElement(ds,null),"Failed to render ",e.contentType," content due to:"),b.createElement(Rb,null,e.error.toString()));let Hb=class extends b.Component{constructor(e){super(e),this.editorOptions={readOnly:!0},(0,E.bH)(this,(0,w.reaction)(()=>{try{return this.renderedContent}catch(e){}},e=>{e&&!ce(e)&&requestAnimationFrame(()=>{var e,t;null===(t=(e=this.props).onContentRendered)||void 0===t||t.call(e)})},{fireImmediately:!0}))}get formatter(){return wb[this.props.contentType]||wb.text}get contentBuffer(){return y.isString(this.props.children)?Ut(this.props.children):this.props.children}get renderedContent(){if(!bb(this.formatter))return;const{cache:e}=this.props,t=this.formatter.cacheKey;let n;if(e.has(t)?n=e.get(t):(n=this.formatter.render(this.contentBuffer,this.props.headers),e.set(t,n)),"string"==typeof n)return n;if("fulfilled"===n.state)return n.value;if("rejected"===n.state)throw n.value;return n}render(){if(!bb(this.formatter)){const e=this.formatter,t="scrollable"===e.layout?Sb:"centered"===e.layout?Pb:Rt(e.layout);return b.createElement(t,{expanded:this.props.expanded},b.createElement(e.Component,{content:this.contentBuffer,rawContentType:un(this.props.headers,"content-type")}))}try{const e=this.renderedContent;return ce(e)?b.createElement(Eb,{height:"500px"}):b.createElement(pf.bL,{contentId:this.props.contentId,node:this.props.editorNode,options:this.editorOptions,language:this.formatter.language,value:e,schema:this.props.schema,expanded:this.props.expanded,maxHeight:this.props.maxHeight})}catch(e){return b.createElement(Ob,{contentType:this.props.contentType,error:Pt(e)})}}};Tb([w.computed],Hb.prototype,"formatter",null),Tb([w.computed],Hb.prototype,"contentBuffer",null),Tb([w.computed],Hb.prototype,"renderedContent",null),Hb=Tb([E.PA],Hb);const Ab=G(bh)`
    ${e=>"left"===e.direction?"margin: 0 -20px 0 -15px;":"right"===e.direction?"margin: 0 -15px 0 -20px;":"margin: 0 -20px 0 -20px;"}

    padding: 10px 30px 0;

    font-size: ${e=>e.theme.textSize};
    color: ${e=>e.theme.mainColor};
    background-color: ${e=>e.theme.warningBackground};
    border-top: solid 1px ${e=>e.theme.containerBorder};

    svg {
        margin-left: 0;
    }
`;const $b=e=>{const{format:t,content:n,onFormatted:r}=e,o=wb[t],s=!!o&&bb(o)&&o.isEditApplicable;return b.createElement(kh,{className:e.className,title:s?`Format as ${Un(e.format)}`:"",disabled:!s,icon:["fas","align-left"],onClick:()=>{return e=void 0,t=void 0,a=function*(){r(yield o.render(n))},new((s=void 0)||(s=Promise))(function(n,r){function o(e){try{l(a.next(e))}catch(e){r(e)}}function i(e){try{l(a.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof s?t:new s(function(e){e(t)})).then(o,i)}l((a=a.apply(e,t||[])).next())});var e,t,s,a}})},Ib=G.div`
    margin: 0 -20px -20px -20px;

    ${e=>e.showFullBorder?Y`
            border: solid 1px ${e=>e.theme.containerBorder};
            padding-right: 1px; /* Seemingly required to show right border */
            border-radius: 0 0 3px 3px;
        `:Y`
            border-top: solid 1px ${e=>e.theme.containerBorder};
        `}

    background-color: ${e=>e.theme.highlightBackground};
    color: ${e=>e.theme.highlightColor};

    .monaco-editor-overlaymessage {
        display: none;
    }

    position: relative;
    flex-grow: 1;

    /*
    Allows shrinking smaller than content, to allow scrolling overflow e.g. for
    scrollable URL param content
    */
    min-height: 0;
`;function qb(e,t){const n=un(t,"content-disposition")||"",r=/ filename="([^"]+)"/.exec(n);if(r){const e=r[1];return y.last(y.last(e.split("/")).split("\\"))}const o=y.last(e.split("/"));if(null==o?void 0:o.includes("."))return o}const jb=e=>{const{body:t}=e;return b.createElement(b.Fragment,null,b.createElement(_v,null,b.createElement(Vv,{expanded:e.expanded,onClick:e.onExpandToggled}),b.createElement(kh,{icon:["fas","download"],title:e.isPaidUser?"Save this body as a file":"With Pro: Save this body as a file",disabled:!e.isPaidUser||!t,onClick:()=>Sp(e.downloadFilename||"",e.mimeType||"application/octet-stream",t)})),t&&b.createElement(Gp,null,Jt(t.byteLength)),b.createElement(Zp,{onChange:e.onChangeContentType,value:e.selectedContentType,options:e.contentTypeOptions,nameFormatter:Un}),b.createElement(Fp,{onCollapseToggled:e.onCollapseToggled},e.title))},Db=(0,E.PA)(e=>{const{body:t}=e;return b.createElement(b.Fragment,null,b.createElement(_v,null,b.createElement(Vv,{expanded:e.expanded,onClick:e.onExpandToggled}),b.createElement($b,{format:e.selectedContentType,content:t.decoded,onFormatted:e.onBodyFormatted})),b.createElement(Gp,null,Jt(t.decoded)),b.createElement(Zp,{onChange:e.onChangeContentType,value:e.selectedContentType,options:e.contentTypeOptions,nameFormatter:Un}),b.createElement(Fp,{onCollapseToggled:e.onCollapseToggled},e.title))}),Mb=G(mh)`
    padding: 0;
    margin: 10px 0;
`,Fb=(0,E.PA)(e=>{var t;const{content:n,contentType:r,headers:o,cache:s,direction:a}=e;if(!n)return null;const i=null===(t=wb[r])||void 0===t?void 0:t.metadata;if(!i)return null;let l=s.get(i.cacheKey);if(l||(l=le(i.extract(n,o)),s.set(i.cacheKey,l)),"fulfilled"!==l.state)return null;const c=l.value;if(null==c)return null;const d=i.Component;return b.createElement(d,{metadata:c,direction:a})}),Bb=e=>b.createElement(Ab,{direction:e.direction},b.createElement("p",null,b.createElement(ds,null)," Body ",e.type," failed for encoding '",fn(pn(e.headers,"content-encoding")),"' due to:"),b.createElement(Mb,null,e.error.code?`${e.error.code}: `:"",e.error.message||e.error.toString()),b.createElement("p",null,"This typically means the ",b.createElement("code",null,"content-encoding")," header is incorrect or unsupported","decoding"===e.type?", or the body was corrupted":"",". The raw content ","decoding"===e.type?"(not decoded) is shown below":"(not encoded) will be used as-is","."));var Lb=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const Nb=e=>"sent"===e.direction?"left":"right",Ub=b.memo(e=>b.createElement(zb,{messageDirection:Nb(e.message),onClick:()=>e.onClick(e.index),tabIndex:0,onKeyDown:t=>{var n,r,o,s;"Enter"===t.key&&e.onClick(e.index),"ArrowDown"===t.key&&(t.preventDefault(),null===(r=null===(n=t.currentTarget.nextElementSibling)||void 0===n?void 0:n.focus)||void 0===r||r.call(n)),"ArrowUp"===t.key&&(t.preventDefault(),null===(s=null===(o=t.currentTarget.previousElementSibling)||void 0===o?void 0:o.focus)||void 0===s||s.call(o))}},b.createElement(Wb,{selected:!1,messageDirection:Nb(e.message)}),b.createElement(_b,null,Wt(e.message.content.subarray(0,200))),b.createElement(Vb,null,e.message.isBinary&&b.createElement(Gp,{color:I},"Binary"),b.createElement(Gp,null,Jt(e.message.content.byteLength))))),Wb=G(b.memo(e=>b.createElement("div",{className:e.className},b.createElement(ps,{direction:e.messageDirection}))))`
    width: 25px;
    flex-grow: 0;
    flex-shrink: 0;

    padding-right: 1px;
    box-sizing: border-box;
    margin: -4px 0;

    > svg {
        padding: 0;
        color: ${e=>e.selected?e.theme.popColor:e.theme.containerWatermark};
    }

    text-align: center;
`,zb=G.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    border-style: solid;
    border-width: 0 5px 1px;

    border-color: transparent;
    border-${e=>e.messageDirection}-color: ${e=>e.theme.containerBorder};
    border-bottom-color: ${e=>e.theme.containerWatermark};

    cursor: pointer;
    &:hover, &:focus {
        outline: none;
        border-${e=>e.messageDirection}-color: ${e=>e.theme.popColor};
        background-color: ${e=>e.theme.mainBackground};
    }

    padding: 4px 15px 4px 0;

    ${Gp} {
        flex-shrink: 0;
        &:last-of-type {
            margin-right: 0;
        }
    }
`,_b=G(mh)`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    flex-grow: 1;
    width: auto;
    padding: 3px 0 4px;
`,Vb=G.div`
    display: flex;
    gap: 8px;
    flex-direction: row;
`;let Kb=class extends b.Component{constructor(){super(...arguments),this.containerRef=b.createRef(),this.onEditorContentRendered=()=>{var e;if(this.containerRef.current===document.activeElement){const t=null===(e=this.containerRef.current)||void 0===e?void 0:e.querySelector(".monaco-editor textarea");null==t||t.focus()}}}componentDidMount(){(0,E.bH)(this,(0,w.autorun)(()=>{this.props.message||this.setContentType(void 0)})),this.onMessageChanged()}componentDidUpdate(e){(null==e?void 0:e.message.messageIndex)!==this.props.message.messageIndex&&this.onMessageChanged()}onMessageChanged(){const e=this.containerRef.current;e.scrollIntoView({behavior:"smooth"});const t=e.querySelector(".monaco-editor textarea");t?t.focus():e.focus()}get contentViewOptions(){const{message:e}=this.props;return Kn(e.contentType,void 0,_t(e.content))}setContentType(e){e===this.props.message.contentType?this.selectedContentType=void 0:this.selectedContentType=e}render(){const{message:e,isPaidUser:t,onExportMessage:n,editorNode:r,streamId:o}=this.props,{preferredContentType:s,availableContentTypes:a}=this.contentViewOptions,i=a.includes(this.selectedContentType)?this.selectedContentType:s,l="sent"===e.direction?"left":"right";return b.createElement(Jb,{ref:this.containerRef,tabIndex:-1,onKeyDown:e=>{var t,n,r,o;if(e.target===e.currentTarget)if(e.target===e.currentTarget&&"Enter"===e.key){const t=e.target.querySelector(".monaco-editor textarea");null==t||t.focus()}else"ArrowDown"===e.key?(e.preventDefault(),null===(n=null===(t=e.currentTarget.nextElementSibling)||void 0===t?void 0:t.focus)||void 0===n||n.call(t)):"ArrowUp"===e.key&&(e.preventDefault(),null===(o=null===(r=e.currentTarget.previousElementSibling)||void 0===r?void 0:r.focus)||void 0===o||o.call(r))}},b.createElement(Qb,{messageDirection:l},b.createElement(Wb,{selected:!0,messageDirection:l}),b.createElement(uh,null,"sent"===e.direction?"Received from server":"Sent by client",":"),b.createElement(kh,{icon:["fas","download"],title:t?"Save this message as a file":"With Pro: Save this message as a file",disabled:!t,onClick:()=>n(e)}),b.createElement(Zp,{onChange:this.setContentType,value:i,options:a,nameFormatter:Un}),b.createElement(Gp,null,Jt(e.content.byteLength))),b.createElement(Gb,{showFullBorder:!1},b.createElement(Hb,{contentId:`ws-${o}-${e.messageIndex}`,editorNode:r,contentType:i,cache:e.cache,expanded:!1,onContentRendered:this.onEditorContentRendered},e.content)))}};Lb([w.observable],Kb.prototype,"selectedContentType",void 0),Lb([w.computed],Kb.prototype,"contentViewOptions",null),Lb([w.action.bound],Kb.prototype,"setContentType",null),Kb=Lb([E.PA],Kb);const Jb=G.div`
    background-color: ${e=>e.theme.mainBackground};
    border-bottom: 1px solid ${e=>e.theme.containerWatermark};

    display: flex;
    flex-direction: column;
`,Qb=G.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;

    padding: 4px 15px 4px 0;

    cursor: pointer;

    border-style: solid;
    border-width: 0 5px 1px;

    border-color: transparent;
    border-${e=>e.messageDirection}-color: ${e=>e.theme.popColor};
    border-bottom-color: ${e=>e.theme.containerWatermark};

    > ${uh} {
        flex-grow: 1;
        text-overflow: ellipsis;
        overflow: hidden;

        margin-left: -8px;
    }

    > ${kh} {
        margin: -5px 0;
    }

    ${Gp}, select {
        &:last-of-type {
            margin-right: 0;
        }
    }
`,Gb=G(Ib)`
    /* Undo the whole-card specific bits of styling */
    border-top: none;
    margin: 0;
`;var Yb=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};function Xb(e,t,n){return`${e} ${n?`message ${n}`:"messages"}.${t?"bin":"txt"}`}let Zb=class extends b.Component{constructor(){super(...arguments),this.expandedRow=void 0,this.exportMessages=()=>{Sp(Xb(this.props.filenamePrefix,this.someBinaryMessages),this.someBinaryMessages?"application/octet-stream":"text/plain",this.props.messages.map(e=>e.content).join("\n\n---\n\n"))},this.exportMessage=e=>{Sp(Xb(this.props.filenamePrefix,e.isBinary,this.props.messages.indexOf(e)),e.isBinary?"application/octet-stream":"text/plain",e.content)}}get someBinaryMessages(){return this.props.messages.some(e=>e.isBinary)}render(){const{streamId:e,cardHeading:t,streamLabel:n,messages:r,isPaidUser:o,editorNode:s,collapsed:a,expanded:i,onCollapseToggled:l,onExpandToggled:c,onClearMessages:d,ariaLabel:u}=this.props;return b.createElement(Dp,{collapsed:a,onCollapseToggled:l,expanded:i,ariaLabel:u},b.createElement("header",null,b.createElement(_v,null,c&&b.createElement(Vv,{expanded:i,onClick:c}),b.createElement(kh,{icon:["fas","download"],title:o?"Save these messages as a file":"With Pro: Save these messages as a file",disabled:!o,onClick:this.exportMessages}),d&&b.createElement(kh,{icon:["far","trash-alt"],title:"Clear all messages",onClick:d})),n&&b.createElement(Gp,{color:er("data"),title:n},n),b.createElement(Gp,null,r.length," message",1!==r.length?"s":""),b.createElement(Fp,{onCollapseToggled:l},t)),b.createElement(ex,{expanded:!!i},r.map((t,n)=>this.expandedRow===n?b.createElement(Kb,{key:"expanded",message:t,streamId:e,isPaidUser:o,onExportMessage:this.exportMessage,editorNode:s}):b.createElement(Ub,{key:n,message:t,index:n,onClick:this.expandRow}))))}expandRow(e){this.expandedRow=e}};Yb([w.observable],Zb.prototype,"expandedRow",void 0),Yb([w.computed],Zb.prototype,"someBinaryMessages",null),Yb([w.action.bound],Zb.prototype,"expandRow",null),Zb=Yb([E.PA],Zb);const ex=G.div`
    width: calc(100% + 40px);
    margin: 0 -20px -20px -20px;

    border-top: solid 1px ${e=>e.theme.containerWatermark};
    background-color: ${e=>e.theme.mainLowlightBackground};

    display: flex;
    flex-direction: column;
    white-space: nowrap;

    position: relative;
    ${e=>e.expanded&&"\n        height: auto !important;\n        overflow-y: auto;\n    "}
`;var tx,nx=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const rx=G.section`
    ${e=>e.withinGrid&&Y`
        display: contents;
    `}
`,ox=G.span`
    margin-right: 10px;

    ${e=>e.withinGrid&&Y`
        display: contents;
    `}
`,sx=G.div`
    visibility: hidden;
    margin-top: -2px;
    margin-bottom: 6px;
    display: inline-block;

    max-height: 31px;
    overflow: hidden;
`;let ax=tx=class extends b.Component{constructor(){var e;super(...arguments),this.id="collapsible-"+tx.idCounter++,this.open=!!this.props.collapsePersistKey&&!!(null===(e=this.props.uiStore)||void 0===e?void 0:e.collapsibleSectionStates[this.props.collapsePersistKey])}render(){const{children:e,withinGrid:t=!1}=this.props,n=t||this.props.prefixTrigger,[r,o,...s]=b.Children.toArray(e);if(s.length)throw new Error(`Collapsible section has extra children: ${s}`);if(!fp(r))throw new Error("Collapsible section 1st child must be a summary element");const a=!!o;if(a&&!fp(o))throw new Error("Collapsible section 2nd child must be a body element");const i=o,l=this.id+"-body",c=b.createElement(cx,{open:this.open,canOpen:a,withinGrid:t,onClick:this.toggleOpen,targetId:l,targetName:this.props.contentName}),d=b.cloneElement(r,{open:this.open,withinGrid:t},n?b.createElement(b.Fragment,null,c,b.createElement(ox,{withinGrid:t},r.props.children)):b.createElement(b.Fragment,null,b.createElement(ox,{withinGrid:t},r.props.children),a&&c)),u=a&&this.open?b.cloneElement(i,{withinGrid:t,id:l},t?i.props.children:b.createElement(b.Fragment,null,b.createElement(sx,{"aria-hidden":"true"},d),i.props.children)):null;return b.createElement(rx,{withinGrid:t},d,u)}toggleOpen(e){e.preventDefault(),this.open=!this.open,this.props.collapsePersistKey&&(this.props.uiStore.collapsibleSectionStates[this.props.collapsePersistKey]=this.open)}};ax.idCounter=0,nx([w.observable],ax.prototype,"open",void 0),nx([w.action.bound],ax.prototype,"toggleOpen",null),ax=tx=nx([(0,E.WQ)("uiStore"),E.PA],ax);const ix=["fas","minus"],lx=["fas","plus"],cx=G(e=>b.createElement("button",Object.assign({"aria-hidden":!e.canOpen,"aria-label":`${e.open?"Hide":"Show"} ${e.targetName}`,"aria-expanded":e.open,"aria-controls":e.targetId},y.omit(e,["open","canOpen","withinGrid","targetName","targetId"])),b.createElement(is,{icon:e.open?ix:lx})))`
    border: none;
    background: none;

    position: relative;
    top: -1px;

    cursor: pointer;
    user-select: none;

    outline: none;
    &:focus {
        color: ${e=>e.theme.popColor};
    }
    &:hover {
        color: ${e=>e.theme.mainColor};
    }

    box-sizing: content-box;
    padding: 5px 10px;

    ${e=>e.withinGrid?Y`
        margin: -3px 0 -5px -10px;
        align-self: baseline;
    `:Y`
        margin: -5px 0 -5px -10px;
        vertical-align: baseline;
    `}

    scale: 0.7;
    color: ${e=>e.theme.containerWatermark};

    ${e=>!e.canOpen&&Y`
        visibility: hidden;
    `}
`,dx=G.header`
    ${e=>e.withinGrid?Y`
        display: contents;
    `:Y`
        display: inline-block;
    `}

    margin: -6px 0 0 -20px;
    padding: 9px 0 12px 20px;

    box-sizing: border-box;

    ${e=>e.open&&!e.withinGrid&&Y`
        z-index: 1;
        position: relative;

        background-color: ${e=>e.theme.mainBackground};

        &:before {
            content: '';
            position: absolute;
            right: -1px;
            bottom: 0;
            height: 35px;
            width: 1px;
            background-color: rgba(0,0,0,0.1);
            box-shadow: 1px 1px 5px rgba(0,0,0,${e=>e.theme.boxShadowAlpha});
        }

        &:after {
            content: '';
            position: absolute;
            bottom: -1px;
            left: 0;
            right: 0;
            height: 1px;
            background-color: rgba(0,0,0,0.1);
            box-shadow: 1px 1px 5px rgba(0,0,0,${e=>e.theme.boxShadowAlpha});
        }
    `}
`,ux=G.div`
    ${e=>e.withinGrid?Y`
        grid-column: 1 / -1; /* Full width grid row */
    `:Y`
        margin-top: -37px; /* Pull up behind the summary section */
        margin-bottom: 10px; /* Spacing below (grid uses grid-gap) */
    `}

    background-color: ${e=>e.theme.mainLowlightBackground};
    box-shadow:
        inset 0px 12px 8px -10px rgba(0,0,0,${e=>e.theme.boxShadowAlpha}),
        inset 0px -8px 8px -10px rgba(0,0,0,${e=>e.theme.boxShadowAlpha});

    padding: 8px 10px 10px 10px;

    word-break: break-all; /* Fallback for anybody without break-word */
    word-break: break-word;

    line-height: 1.3;

    position: relative;

    margin-left: -20px;
    margin-right: -20px;
    padding-left: 20px;
    padding-right: 20px;
`,px=(0,E.PA)(e=>{const{closeState:t,theme:n}=e,r="aborted"!==e.closeState?function(e){if(e)return Gt[e.toString()]}(e.closeState.closeCode):void 0,o=r&&[b.createElement(xh,{key:"code-docs",content:r.summary}),b.createElement("p",{key:"docs-link"},b.createElement(rh,{href:"https://www.rfc-editor.org/rfc/rfc6455.html#section-7.4.1"},"Find out more"))];if("aborted"===t)return b.createElement(Dp,Object.assign({},e),b.createElement("header",null,b.createElement(Gp,{color:nr("aborted",n)},"Aborted"),b.createElement(Fp,{onCollapseToggled:e.onCollapseToggled},"Connection closed")),b.createElement("div",null,"The connection was closed abruptly, without a clean close message."));{const{closeCode:r,closeReason:s}=t;return b.createElement(Dp,Object.assign({},e),b.createElement("header",null,b.createElement(Gp,{color:nr(r,n)},null!=r?r:"No close code"),b.createElement(Fp,{onCollapseToggled:e.onCollapseToggled},"Connection closed")),b.createElement(ax,{contentName:"close code details"},b.createElement(dx,null,b.createElement(uh,null,"Close code: "),r?b.createElement(ph,null,r):b.createElement(yh,null,"(No close code)")),o&&b.createElement(ux,null,o)),b.createElement("div",null,b.createElement(uh,null,"Close reason: "),s?b.createElement(ph,null,s):b.createElement(yh,null,"(No reason provided)")))}});var hx=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const mx=["text","raw","base64","image"];let gx=class extends b.Component{componentDidMount(){(0,E.bH)(this,(0,w.autorun)(()=>{this.props.message||this.onChangeContentType(void 0)}))}get contentViewOptions(){const{message:e}=this.props;return Kn(e.contentType,un(e.headers,"content-type"),e.body,e.headers)}onChangeContentType(e){e===this.contentViewOptions.preferredContentType?this.selectedContentType=void 0:this.selectedContentType=e}render(){const{title:e,url:t,message:n,apiBodySchema:r,direction:o,isPaidUser:s,collapsed:a,expanded:i,onCollapseToggled:l,onExpandToggled:c,ariaLabel:d,editorKey:u,editorNode:p}=this.props,{preferredContentType:h,availableContentTypes:m}=this.contentViewOptions,g=m.includes(this.selectedContentType)?this.selectedContentType:h;if(n.body.isDecoded())return b.createElement(Dp,{ariaLabel:d,direction:o,collapsed:a,onCollapseToggled:l,expanded:i},b.createElement("header",null,b.createElement(jb,{body:n.body.decodedData,mimeType:un(n.headers,"content-type"),downloadFilename:qb(t,n.headers),title:e,expanded:!!i,onExpandToggled:c,onCollapseToggled:l,selectedContentType:g,contentTypeOptions:m,onChangeContentType:this.onChangeContentType,isPaidUser:s})),b.createElement(Fb,{content:n.body.decodedData,contentType:g,headers:n.headers,cache:n.cache,direction:i?void 0:o}),b.createElement(Ib,{showFullBorder:!i},b.createElement(Hb,{contentId:u,editorNode:p,headers:n.headers,contentType:g,schema:r,expanded:!!i,maxHeight:"70cqh",cache:n.cache},n.body.decodedData)));if(n.body.isFailed()){const r=n.body.decodingError,u=n.body.encodedData,p=mx.includes(this.selectedContentType)?this.selectedContentType:"text";return b.createElement(Dp,{ariaLabel:d,direction:o,collapsed:a,onCollapseToggled:l,expanded:i},b.createElement("header",null,b.createElement(jb,{body:u,mimeType:"application/octet-stream",downloadFilename:qb(t,n.headers),title:e,expanded:i,onExpandToggled:c,onCollapseToggled:l,selectedContentType:p,contentTypeOptions:mx,onChangeContentType:this.onChangeContentType,isPaidUser:s})),b.createElement(Bb,{type:"decoding",direction:this.props.direction,error:r,headers:n.rawHeaders}),u&&b.createElement(Ib,{showFullBorder:!i},b.createElement(Hb,{contentId:`${n.id}-${o}`,editorNode:this.props.editorNode,contentType:p,expanded:!!i,cache:n.cache,maxHeight:"70cqh"},u)))}return b.createElement(Cb,{ariaLabel:d,direction:o,collapsed:a,onCollapseToggled:l,expanded:i},b.createElement("header",null,b.createElement(jb,{body:void 0,title:e,expanded:!!i,onExpandToggled:c,onCollapseToggled:l,selectedContentType:g,contentTypeOptions:m,onChangeContentType:this.onChangeContentType,isPaidUser:s})))}};function fx(e){e.target.style.display="initial"}hx([w.observable],gx.prototype,"selectedContentType",void 0),hx([w.computed],gx.prototype,"contentViewOptions",null),hx([w.action.bound],gx.prototype,"onChangeContentType",null),gx=hx([E.PA],gx);const yx=G((0,E.WQ)("uiStore")(e=>b.createElement(Gp,{className:e.className,color:e.uiStore.theme.popColor},e.children||"PRO")))`
    font-size: ${e=>e.theme.textSize};

    color: ${j};
    background-color: rgba(225,66,31,0.2);
`,vx=G(yx)`
    margin-right: auto;
`,bx=G(Lp)`
    box-sizing: border-box;
    padding: 20px;

    margin: 0 auto;

    user-select: none;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    font-weight: bold;
    color: ${e=>e.theme.primaryInputColor};
    background-color: ${e=>e.theme.primaryInputBackground};
    border-radius: 4px;
    box-shadow: 0 2px 10px 0 rgba(0,0,0,${e=>e.theme.boxShadowAlpha/2});

    > svg {
        margin-bottom: 5px;
    }

    &:hover {
        background-image: linear-gradient(transparent, rgba(0,0,0,.05) 40%, rgba(0,0,0,.1));
    }

    &:active {
        background-image: linear-gradient(rgba(0,0,0,.1), rgba(0,0,0,.05) 40%, transparent);
    }
`,xx=(0,E.WQ)("accountStore")((0,E.PA)(e=>b.createElement(wx,null,e.children,b.createElement(bx,{onClick:()=>e.accountStore.getPro(e.source)},b.createElement(is,{icon:"Lightning",size:"2em"}),"Get HTTP Toolkit Pro")))),wx=G.div`
    padding: 20px 25%;
    margin: 0 -20px -20px -20px;
    background-color: ${e=>e.theme.mainLowlightBackground};
    box-shadow: inset 0px 12px 8px -10px rgba(0,0,0,0.15);

    p {
        color: ${e=>e.theme.mainColor};
        line-height: 1.2;
        font-weight: bold;
        margin-bottom: 10px;
    }

    ${bx} {
        width: 100%;
    }
`,Ex=G.div`
    filter: blur(1px);
    opacity: 0.6;

    pointer-events: none;
    user-select: none;
`,Cx=G.div`
    position: relative;
    min-height: 140px;
`,Tx=G(bx)`
    position: absolute;
    top: 52%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
`;let Sx=class extends b.Component{constructor(){super(...arguments),this.buttonRef=b.createRef()}render(){return b.createElement(Cx,{className:this.props.className},b.createElement(Tx,{ref:this.buttonRef,onClick:()=>this.props.getPro(this.props.source)},b.createElement(is,{icon:"Lightning",size:"2em"}),"Get Pro"),b.createElement(Ex,{inert:!0,ref:e=>e&&e.setAttribute("inert",""),onFocus:()=>this.buttonRef.current&&this.buttonRef.current.focus()},this.props.children))}};Sx=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a}([E.PA],Sx);const Px=G(e=>b.createElement("img",Object.assign({},e,{onLoad:fx,style:{display:"none"}})))`
    float: right;
    height: 26px;

    border: 4px solid #ffffff;
    border-radius: 2px;
`,kx=G.section`
    display: grid;
    grid-template-columns: 20px fit-content(40%) 1fr min-content;

    grid-gap: 5px 0;
    &:not(:last-child) {
        margin-bottom: 10px;
    }
`,Rx=G(dx)`
    word-break: break-all; /* Fallback for anybody without break-word */
    word-break: break-word;
    font-family: ${e=>e.theme.monoFontFamily};
    line-height: 1.1;
`,Ox=G.span`
    margin-right: 10px;
`,Hx=G.span`
    font-style: italic;
    opacity: ${e=>e.theme.lowlightTextOpacity};
    margin-right: 5px;
`,Ax=G(e=>b.createElement("div",{className:e.className},[e.param.required?"Required":"Optional",e.param.type,e.param.in].filter(e=>!!e).join(" ")," parameter",void 0!==e.param.defaultValue?`. Defaults to ${e.param.defaultValue}`:"",void 0!==e.param.enum&&e.param.enum.length>0?b.createElement(b.Fragment,null,".",b.createElement("br",null),"Valid values: ",Ht(e.param.enum.map(e=>JSON.stringify(e)))):"","."))`
    font-style: italic;
`,$x=G(is).attrs(()=>({icon:["fas","exclamation-triangle"]}))`
    color: ${e=>e.theme.warningColor};
    line-height: 1.2;

    &:not(:first-child) {
        margin-left: 9px;
    }

    &:not(:last-child) {
        margin-right: 9px;
    }
`,Ix=G(e=>b.createElement("div",Object.assign({},e),b.createElement($x,null),b.createElement("span",null,e.children)))`
    color: ${e=>e.theme.popColor};

    :not(:last-child) {
        margin-bottom: 10px;
    }
`;function qx(e){return"string"==typeof e?e:"number"==typeof e?e.toString(10):"boolean"==typeof e?e.toString():null==e?void 0:JSON.stringify(e)}const jx=(e,t)=>[t.length&&t.map((e,t)=>b.createElement(Ix,{key:e},e)),e&&b.createElement(vh,{key:"details",htmlContent:e})].filter(e=>!!e),Dx=G.div`
    display: grid;
    grid-template-columns: fit-content(30%) auto;
    grid-gap: 5px;
    margin-bottom: 10px;
`,Mx=G.div`
    font-family: ${e=>e.theme.monoFontFamily};
    word-break: break-all;
    text-align: right;
`,Fx=G.pre`
    font-family: ${e=>e.theme.monoFontFamily};
    word-break: break-all;
    white-space: pre-wrap;
`,Bx=e=>b.createElement(Dx,null,Object.entries(e.value).map(([e,t],n)=>[b.createElement(Mx,{key:`${n}-key`},e,":"),b.createElement(Fx,{key:`${n}-value`},t)])),Lx=e=>{const{api:t}=e,n=t.request.parameters.filter(e=>!!e.value||e.required||e.defaultValue),r=n.length>5?n.filter(e=>!!e.value||e.required):n,o=jx(t.operation.description,t.operation.warnings),s=!!o.length;return b.createElement(b.Fragment,null,b.createElement(ax,{contentName:"service description"},b.createElement(dx,null,b.createElement(uh,null,"Service:")," ",t.service.name,!t.service.description&&b.createElement(rh,{href:t.service.docsUrl})),t.service.description&&b.createElement(ux,null,b.createElement(Px,{src:t.service.logoUrl,alt:""}),b.createElement(vh,{htmlContent:t.service.description}),b.createElement(rh,{href:t.service.docsUrl},"Find out more"))),b.createElement(ax,{contentName:"operation description"},b.createElement(dx,null,b.createElement(uh,null,"Operation:")," ",t.operation.name,!s&&b.createElement(rh,{href:t.operation.docsUrl}),t.operation.warnings.length?b.createElement($x,null):null),s&&b.createElement(ux,null,o,b.createElement(rh,{href:t.operation.docsUrl},"Find out more"))),r.length>=1&&b.createElement(b.Fragment,null,b.createElement(hh,null,"Parameters"),b.createElement(kx,null,r.map(e=>b.createElement(ax,{contentName:"parameter description",withinGrid:!0,key:e.name},b.createElement(Rx,null,b.createElement(Ox,null,e.name,": "),b.createElement("span",null,qx(e.value)||b.createElement(Hx,null,e.defaultValue?qx(e.defaultValue)+" [default]":"[not set]")),e.warnings.length?b.createElement($x,null):b.createElement("div",null)),b.createElement(ux,null,jx(e.description,e.warnings),"object"===e.type&&Object.keys(e).length>1?b.createElement(Bx,{value:e.value}):null,b.createElement(Ax,{param:e})))))))},Nx=(0,E.PA)(e=>{const{apiName:t,apiExchange:n}=e;return b.createElement(Dp,Object.assign({},e),b.createElement("header",null,b.createElement(Fp,{onCollapseToggled:e.onCollapseToggled},t)),b.createElement(Lx,{api:n}))}),Ux=(0,E.PA)(e=>{const{apiName:t}=e;return b.createElement(Dp,Object.assign({},e),b.createElement("header",null,b.createElement(vx,null),b.createElement(Fp,{onCollapseToggled:e.onCollapseToggled},t)),b.createElement(xx,{source:"api"},b.createElement("p",null,"HTTP Toolkit Pro can show you more information about this API."),b.createElement("p",null,"Instantly understand this request with inline documentation for the endpoint, parameters, and responses."),b.createElement("p",null,"Automatically validate that this request & its body match the API schema. See all the parameters that you're ",b.createElement("em",null,"not")," sending too, and their default values, and get warned about deprecated or invalid endpoints and parameters.")))}),Wx=G(({source:e,className:t})=>{if(e.icon===ss.Unknown)return null;const n=e.icon.icon;return Array.isArray(n)?b.createElement(is,Object.assign({className:t,title:e.summary},e.icon,{icon:n})):b.createElement(rs,Object.assign({className:t,alt:e.summary,size:"1.25em"},e.icon,{icon:n}))})`
    margin-left: 8px;
`,zx=G(({request:e,className:t})=>e.httpVersion?b.createElement(Gp,{title:`The client sent this request using HTTP ${e.httpVersion}`},"HTTP/",e.httpVersion.replace(".0","")):null)``;function _x(e){const t=(0,ae.format)(e,"YYYY-MM-DD [at] HH:mm:ss"),n=(0,ae.distanceInWordsToNow)(e);return(0,ae.isFuture)(e)?b.createElement(b.Fragment,null,"will expire ",b.createElement("span",{title:t},"in ",n)):b.createElement(b.Fragment,null,"expired ",b.createElement("span",{title:t},n," ago"))}const Vx=e=>{const t=au(e.value),n=e.requestUrl.pathname.replace(/\/[^\/]*$/,"")||"/";return b.createElement(b.Fragment,null,t.map(t=>{var r;return"none"!==(null===(r=t.samesite)||void 0===r?void 0:r.toLowerCase())||t.secure?b.createElement(bh,{key:t.name},b.createElement("p",null,"Set cookie '",b.createElement("code",null,t.name),"' to '",b.createElement("code",null,t.value),"'"),b.createElement("p",null,"This cookie will be sent in future",t.secure?" secure ":" secure and insecure ","requests to"," ",t.domain?b.createElement(b.Fragment,null,t.domain.replace(/^\./,"")," and subdomains"):b.createElement(b.Fragment,null,e.requestUrl.hostname,", but not its subdomains"),"/"===t.path||"/"===n?b.createElement(b.Fragment,null,"."):void 0!==t.path?b.createElement(b.Fragment,null,", for paths within '",t.path,"'."):b.createElement(b.Fragment,null,", for paths within '",n,"'.")),b.createElement("p",null,"The cookie is ",t.httponly?"not accessible from client-side scripts":"accessible from client-side scripts running on matching pages",void 0===t.samesite||"lax"===t.samesite.toLowerCase()?b.createElement(b.Fragment,null,". Matching requests triggered from other origins will ",t.httponly?"however":"also"," include this cookie, if they are top-level navigations (not subresources)."):"strict"===t.samesite.toLowerCase()&&t.httponly?b.createElement(b.Fragment,null,", or sent in requests triggered from other origins."):"strict"!==t.samesite.toLowerCase()||t.httponly?"none"===t.samesite.toLowerCase()&&t.secure?b.createElement(b.Fragment,null,". Matching requests triggered from other origins will ",t.httponly?"however":"also"," include this cookie."):b.createElement(b.Fragment,null,". This cookie uses an unrecognized SameSite property, which may cause issues."):b.createElement(b.Fragment,null,", but will not be sent in requests triggered from other origins.")),b.createElement("p",null,"The cookie ",t["max-age"]?b.createElement(b.Fragment,null,_x((0,ae.addSeconds)(new Date,parseInt(t["max-age"],10))),t.expires&&" ('max-age' overrides 'expires')"):t.expires?_x(new Date(t.expires)):"expires at the end of the current session",".")):b.createElement(bh,{key:t.name},b.createElement("p",null,"This attempts to set cookie '",b.createElement("code",null,t.name),"' to '",b.createElement("code",null,t.value),"'"),b.createElement("p",null,b.createElement("strong",null,"This will fail so this cookie will not be set"),", because ",b.createElement("code",null,"SameSite=None")," can only be used for cookies with the ",b.createElement("code",null,"Secure")," flag."))}))},Kx=e=>{const{description:t}=Es(e.value);return t?b.createElement(bh,null,b.createElement("p",null,t)):b.createElement("p",null,en("user-agent").summary)},Jx=G.section`
    display: grid;
    grid-template-columns: 20px fit-content(30%) 1fr;

    grid-gap: 5px 0;
    &:not(:last-child) {
        margin-bottom: 10px;
    }
`,Qx=G(dx)`
    word-break: break-all; /* Fallback for anybody without break-word */
    word-break: break-word;
    font-family: ${e=>e.theme.monoFontFamily};
    line-height: 1.1;
`,Gx=[{type:"option",label:"Copy header value",callback:({value:e})=>kp(e)},{type:"option",label:"Copy header name",callback:({key:e})=>kp(e)},{type:"option",label:'Copy header as "name: value"',callback:({key:e,value:t})=>kp(`${e}: ${t}`)}],Yx=(0,E.WQ)("uiStore")(e=>{const t=e.headerValue.length>500,[n,r]=b.useState(!1),o=b.useCallback(()=>r(!0),[r]),s=b.useCallback(()=>r(!1),[r]),a=b.useCallback(t=>{var n;"Range"!==(null===(n=window.getSelection())||void 0===n?void 0:n.type)&&e.uiStore.handleContextMenuEvent(t,Gx,{key:e.headerKey,value:e.headerValue})},[e.uiStore,e.headerKey,e.headerValue]);return b.createElement(Qx,{open:e.open,withinGrid:e.withinGrid,onContextMenu:a},e.children,b.createElement(ew,null,e.headerKey,": "),t?n?b.createElement("span",null,e.headerValue,b.createElement(Zx,{title:"Collapse this large header value",onClick:s},b.createElement(is,{icon:["fas","minus"]}))):b.createElement(Xx,null,e.headerValue.slice(0,490),b.createElement(Zx,{title:"Expand to show the full contents of this large header value",onClick:o},"...")):b.createElement("span",null,e.headerValue))}),Xx=G.span`
    position: relative;

    :after {
        content: '';
        background-image: linear-gradient(to bottom, transparent, transparent 60%, ${e=>e.theme.mainBackground});
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
`,Zx=G(Yp)`
    position: relative;
    z-index: 1;

    vertical-align: middle;
    padding: 2px 4px;
    font-size: 10px;
    margin-left: 4px;
`,ew=G.span`
    margin-right: 10px;
`,tw=G(ux)`
    line-height: 1.3;
`,nw=G(rh)`
    display: block;
    margin-top: 10px;
`,rw=(0,E.WQ)("accountStore")((0,E.PA)(e=>{const t=y.sortBy(e.headers,([e])=>e.toLowerCase());if(0===t.length)return b.createElement(yh,null,"(None)");const n=t.filter(([e])=>!e.startsWith(":"));return b.createElement(Jx,null,y.flatMap(n,([t,n],r)=>{const o=en(t),s=((e,t,n,r)=>{var o;if(e=e.toLowerCase(),r){if("set-cookie"===e)return b.createElement(Vx,{value:t,requestUrl:n});if("user-agent"===e)return b.createElement(Kx,{value:t})}const s=null===(o=en(e))||void 0===o?void 0:o.summary;return s&&b.createElement("p",null,s)})(t,n,e.requestUrl,e.accountStore.user.isPaidUser());return b.createElement(ax,{contentName:`${t} header details`,withinGrid:!0,key:`${t}-${r}`},b.createElement(Yx,{headerKey:t,headerValue:n}),s&&b.createElement(tw,null,s,o&&b.createElement(nw,{href:o.url},"Find out more")))}))})),ow=G.div`
    display: flex;
    align-items: baseline;
    justify-content: flex-start;
    ${e=>!0!==e.open&&"\n        margin-bottom: -10px;\n    "}
`,sw=G.dl`
    display: grid;
    grid-template-columns: fit-content(50%) auto;
    grid-gap: 5px;
`,aw=G.dt`
    font-family: ${e=>e.theme.monoFontFamily};
    word-break: break-all;
    text-align: right;
`,iw=G.dd`
    font-family: ${e=>e.theme.monoFontFamily};
    word-break: break-all;
    white-space: pre-wrap;
`,lw=G(uh)`
    margin-top: 10px;
    grid-column: 1 / span 2;
`,cw=e=>{const t=[...e.url.searchParams];let n;try{n=decodeURIComponent(e.url.pathname)}catch(t){n=e.url.pathname}return b.createElement(sw,{role:"region"},b.createElement(aw,null,"Protocol:")," ",b.createElement(iw,null,e.url.protocol.slice(0,-1)),(e.url.username||e.url.password)&&b.createElement(b.Fragment,null,b.createElement(aw,null,"Username:")," ",b.createElement(iw,null,e.url.username),b.createElement(aw,null,"Password:")," ",b.createElement(iw,null,e.url.password)),b.createElement(aw,null,"Host:")," ",b.createElement(iw,null,e.url.host),b.createElement(aw,null,"Path:")," ",b.createElement(iw,null,n),t.length?b.createElement(lw,null,"Parameters"):null,t.map(([e,t],n)=>[b.createElement(aw,{key:`${n}-key`},e,":"),b.createElement(iw,{key:`${n}-value`},t)]))},dw=G((0,E.WQ)("uiStore")(e=>{const{stepTypes:t}=e.ruleData,n=1!==t.length?"multi-step":Qy(t[0]);return b.createElement(Yp,{color:er("mutative"),className:e.className,disabled:"deleted"===e.ruleData.status,onClick:"deleted"!==e.ruleData.status?e.onClick:void 0,title:`This exchange was handled by ${r=n,At.includes(r[0].toLowerCase())?"an":"a"} ${n} rule${"deleted"===e.ruleData.status?" which has since been deleted":"modified-types"===e.ruleData.status?" (which has since been modified)":""}.${"deleted"!==e.ruleData.status?"\nClick here to jump to the rule on the Modify page.":""}`},b.createElement(rs,{icon:"Pencil",size:"16px"}),$t(n));var r}))`
    margin-right: auto;

    text-decoration: none;
    word-spacing: 0;

    > svg {
        margin: -1px 5px 0 -1px;
    }
`,uw=e=>{const t=(n=e.request.method,Zt(Xt,n.toLowerCase()));var n;const r=[t&&b.createElement(xh,{key:"method-docs",content:t.summary}),t&&b.createElement("p",{key:"method-link"},b.createElement(rh,{href:t.url},"Find out more"))].filter(e=>!!e);return b.createElement("div",null,b.createElement(ax,{contentName:`${e.request.method} method documentation`},b.createElement(dx,null,b.createElement(uh,null,"Method:")," ",e.request.method),r.length?b.createElement(ux,null,r):null),b.createElement(hh,null,"URL"),b.createElement(ax,{contentName:"URL components",prefixTrigger:!0},b.createElement(dx,null,b.createElement(gh,null,e.request.parsedUrl.parseable?e.request.parsedUrl.toString():e.request.url)),b.createElement(ux,null,b.createElement(cw,{url:e.request.parsedUrl}))),b.createElement(ax,{contentName:"Headers",collapsePersistKey:"httpRequestHeaders"},b.createElement(ow,null,b.createElement(hh,null,"Headers")),b.createElement(rw,{httpVersion:e.httpVersion,headers:e.request.rawHeaders,requestUrl:e.request.parsedUrl})))},pw=(0,E.PA)(e=>{const{exchange:t,matchedRuleData:n,onRuleClicked:r}=e,{request:o}=t;return b.createElement(Dp,Object.assign({},e,{direction:"right"}),b.createElement("header",null,Ki(null==n?void 0:n.stepTypes)&&b.createElement(dw,{ruleData:n,onClick:r}),b.createElement(Wx,{source:o.source}),b.createElement(zx,{request:o}),b.createElement(Gp,{color:er(t)},t.isWebSocket()?"WebSocket ":"",o.method," ",(o.parsedUrl.hostname||"").replace(/\./g," . ")),b.createElement(Fp,{onCollapseToggled:e.onCollapseToggled},"Request")),b.createElement(uw,{request:o,httpVersion:t.httpVersion}))}),hw=(0,E.PA)(e=>{const{httpVersion:t,response:n,requestUrl:r,theme:o,apiExchange:s}=e,a=(0,vr.Jt)(s,"response","description"),i=tn(n.statusCode),l=[a&&b.createElement(vh,{key:"api-response-docs",htmlContent:a}),i&&b.createElement(xh,{key:"status-docs",content:i.summary}),i&&b.createElement("p",{key:"status-link"},b.createElement(rh,{href:i.url},"Find out more"))].filter(e=>!!e);return b.createElement(Dp,Object.assign({},e,{direction:"left"}),b.createElement("header",null,b.createElement(Gp,{color:tr(n.statusCode,o)},n.statusCode),b.createElement(Fp,{onCollapseToggled:e.onCollapseToggled},"Response")),b.createElement("div",null,b.createElement(ax,{contentName:"status details"},b.createElement(dx,null,b.createElement(uh,null,"Status:")," ",n.statusCode," ",n.statusMessage||rn(n.statusCode)),l.length?b.createElement(ux,null,l):null),b.createElement(ax,{contentName:"Headers",collapsePersistKey:"httpResponseHeaders"},b.createElement(ow,null,b.createElement(hh,null,"Headers")),b.createElement(rw,{httpVersion:t,headers:n.rawHeaders,requestUrl:r}))))}),mw=G(mh)`
    margin-top: 10px;
`,gw=(0,E.WQ)("uiStore")((0,E.PA)(e=>b.createElement(Dp,Object.assign({},e.cardProps,{direction:"left"}),b.createElement("header",null,b.createElement(Gp,{color:tr("aborted",e.uiStore.theme)},"Aborted"),b.createElement(Fp,{onCollapseToggled:e.cardProps.onCollapseToggled},"Response")),b.createElement("div",null,"The connection failed before a response could be completed",e.exchange.abortMessage?b.createElement(b.Fragment,null," with error:",b.createElement(mw,null,e.exchange.abortMessage)):".")))),fw=(0,E.PA)(e=>{const{type:t,requestUrl:n,httpVersion:r,trailers:o}=e;return b.createElement(Dp,Object.assign({},e,{direction:"left"}),b.createElement("header",null,b.createElement(Fp,{onCollapseToggled:e.onCollapseToggled},"request"===t?"Request":"Response"," Trailers")),b.createElement("div",null,b.createElement(rw,{httpVersion:r,headers:o,requestUrl:n})))}),yw=["GET","HEAD","POST"],vw=[200,203,204,206,300,301,404,405,410,414,501],bw=[300,301,308,410],xw=["GET","HEAD","POST"],ww=["Cache-Control","Content-Language","Content-Type","Expires","Last-Modified","Pragma"];function Ew(e){return e.toLowerCase().replace(/(\b\w)/g,e=>e.toUpperCase())}function Cw(e){return`<code>${pl(Ew(e))}</code>`}const Tw=(0,ae.parse)(0);function Sw(e){return(0,ae.distanceInWordsStrict)(Tw,(0,ae.parse)(1e3*e))}function Pw(e){return fn(e.headers["cache-control"]).reduce((e,t)=>{const[n,r]=t.split("=");return e[n.trim()]=void 0===r||parseInt(r),e},{})}const kw="May be cached in both private and shared caches",Rw="May only be cached in private caches";function Ow(e){const{request:t,response:n}=e;if("object"!=typeof n)return;if("OPTIONS"===t.method&&t.headers.origin)return{summary:Rw,explanation:Xl`
                OPTIONS responses are not cached through the normal HTTP response caching mechanisms.
                Only the CORS metadata for the resource is cached, and only by HTTP clients that
                implement CORS checks, such as browsers, not by intermediate caches.
            `};const r=Pw(n);return void 0!==r.private?{summary:Rw,explanation:Xl`
                This response may only be cached by private caches, such as your browser cache,
                because it includes an explicit \`private\` Cache-Control directive.
            `}:void 0!==r.public?{summary:kw,explanation:Xl`
                This response may be cached by both private HTTP client caches and shared caches
                such as CDNs and proxies, because it includes an explicit \`public\` Cache-Control
                directive.
            `}:void 0!==t.headers.authorization&&void 0===r["s-maxage"]&&void 0===r["must-revalidate"]&&void 0===r.public?{summary:Rw,explanation:Xl`
                This response may only be cached by private caches, such as your browser cache,
                because it includes an Authorization header, and doesn't include the explicit
                directives that would allow it to be stored by shared caches.

                Shared caches, such as CDNs and proxies, would only be allowed to store this
                response if it contained \`s-maxage\`, \`must-revalidate\` or \`public\`
                Cache-Control directives.
            `}:void 0===r["s-maxage"]||void 0!==r["max-age"]||void 0!==n.headers.expires||void 0!==r.public||vw.includes(n.statusCode)?{summary:kw,explanation:Xl`
            This response may be cached by both private client caches & shared
            CDN or proxy caches, because it is cacheable and does not include
            either a \`private\` Cache-Control directive or an Authorization header.
        `}:{summary:"May only be cached in shared caches",explanation:Xl`
                This response may only be cached by shared caches, such as proxies & CDNs,
                not by private client caches, because it includes an \`s-maxage\` Cache-Control
                directive but is otherwise not cacheable by default, and does not include
                any other explicit caching directives.
            `}}function Hw(e){const{request:t,response:n}=e;if("object"!=typeof n)return;if("OPTIONS"===t.method&&t.headers.origin){const e=y.union(xw,fn(n.headers["access-control-allow-methods"]).map(e=>e.toUpperCase())),r=y.union(ww,fn(n.headers["access-control-allow-headers"]).map(Cw)),o="true"===n.headers["Access-Control-Allow-Credentials"];return{summary:"Will match corresponding future CORS requests for this URL",explanation:Xl`
                The CORS configuration returned here may be used to avoid a preflight
                request for future CORS requests, when:

                * The CORS request would be sent to the same URL
                * The origin is <code>${pl(t.headers.origin.toString())}</code>
                ${o?"":"* No credentials are being sent\n"}* The request method would be ${pl(Ht(e,", "," or "))}
                * There are no extra request headers other than ${Ht(r)}
            `}}const r=fn(n.headers.vary),o=r.length>0,s=o?` that have the same ${Ht(r.map(e=>`'${Ew(e)}'`))} header${r.length>1?"s":""}`:"",a=o?Xl`
        , as long as those requests have ${Ht(r.map(e=>{const n=t.headers[e.toLowerCase()],r=Cw(e);return void 0===n?`no ${r} header`:`a ${r} header set to <code>${pl(n.toString())}</code>`}))}.

        ${r.length>1?"These headers are":"This header is"}
        required because ${r.length>1?"they're":"it's"} listed in
        the Vary header of the response.
    `:Xl`
        , regardless of header values or other factors.

        If this response is only valid for certain header configurations (e.g.
        Accept-Encoding or Accept-Language headers), it should include a Vary header.
    `;return"POST"===t.method?{summary:`Will match future GET & HEAD requests to this URL${s}`,explanation:Xl`
                The response content & headers returned here may be used for future safe requests
                for the resource updated by this POST${a}
            `}:{summary:`Will match future GET & HEAD requests to this URL${s}`,explanation:Xl`
            The response content & headers returned here may be used for future safe requests
            for the same resource${a}
        `}}function Aw(e){var t;const{request:n,response:r}=e;if("object"!=typeof r)return;const o=Pw(r);if("OPTIONS"===n.method){const e=un(r.headers,"access-control-max-age");if(e){const t=parseInt(e,10);return{summary:`Expires after ${Sw(t)}`,explanation:Xl`
                    This CORS response includes an Access-Control-Max-Age header explicitly
                    set to ${t} seconds, which defines the valid lifetime for the
                    cached response. Once this expires it will immediately cease to be used.
                `}}return{summary:"Expires unpredictably, around 5 seconds",explanation:Xl`
                This CORS response does not include an Access-Control-Max-Age header, so
                does not explicitly specify when it should expire. That means the
                exact expiry is left up to the client implementation. This may be a
                small number of seconds, or it may be considered expired immediately.
            `}}if(o["no-cache"])return{summary:"Must be revalidated every time it's used",explanation:Xl`
                This response includes an explicit \`no-cache\` directive. This means that
                before the cached content can be used, the matching requests must always be
                forwarded to the origin server, and the response content must be revalidated.

                This requires a request to the origin server for every client request, but
                does still offer performance benefits compared to not caching at all,
                because conditional requests can be used to avoid redownloading the
                full response from scratch if it hasn't changed.
            `};const s=un(r.headers,"date"),a=un(r.headers,"expires"),i=o["max-age"],l=void 0!==o["s-maxage"]?o["s-maxage"]:i,c=void 0!==i||void 0!==a,d=void 0!==i?i:void 0!==a?(0,ae.differenceInSeconds)(a,s?(0,ae.parse)(s):(0,ae.parse)(null!==(t=e.timingEvents.startTime)&&void 0!==t?t:Date.now())):void 0,u=void 0!==d&&d<=0;if(!c&&bw.includes(r.statusCode))return{summary:"Never expires"+(l!==i?` from private caches, expires from shared caches after ${Sw(l)}`:""),explanation:Xl`
                This ${r.statusCode} response is intended to describe a permanent state,
                and has no explicitly defined expiry time, so by default most clients will
                cache it forever.

                ${l!==i?Xl`
                    The response does include a \`s-maxage\` directive however, set to ${l} seconds, which overrides this for shared caches such as CDNs and
                    proxies. In that specific case, the response will be considered stale
                    after ${Sw(l)}. As there is no \`proxy-revalidate\`
                    directive, it may still be used whilst stale if necessary or explicitly
                    allowed by a client.

                    If the response included a specific expiry time for private caches, e.g.
                    with a \`max-age\` Cache-Control directive, that typically would limit the
                    lifetime of this response in those caches too. In general though in that
                    case it would be better to use a more accurate status code.
                `:Xl`
                    If this response did include a specific expiry time, e.g. with a max-age
                    Cache-Control directive, that would typically override this. In general
                    though in that case it would be better to use a more accurate status code.
                `}
            `};const p=l!==i?Xl`
        .

        This response also includes a \`s-maxage\` directive, set to ${Sw(l)} seconds which overrides this expiry for shared caches such as CDNs or proxies.
        This means in that case, the response will become stale in ${Sw(l)}
    `:"",h=c?u?Xl`
            This response expires immediately because it has ${i<=0?Xl`
                    a \`max-age\` directive set to ${i} seconds
                `:s?Xl`
                    an Expires header set to ${pl(a.toString())}, which is
                    not after its Date header value (${pl(s)})
                `:Xl`
                    an Expires header set to ${pl(a)}, which is
                    before the response was received
                `}${p}
        `:void 0!==i?Xl`
            This response expires after ${i} seconds (${Sw(i)}),
            as specified by its \`max-age\` directive${p}
        `:Xl`
            This response expires at ${pl(a)} (after ${Sw(d)}),
            as specified by its Expires header${p}
        `:Xl`
            ${l===i?Xl`
                This response does not explicitly declare its expiry time. Caches
            `:Xl`
                This response only declares an explicit expiry time for shared caches, such
                as proxies or CDNs, not for private caches. Content in shared caches will
                expire after ${Sw(l)}, as declared by the \`s-maxage\`
                Cache-Control directive, whilst content in private caches may expire
                unpredictably.

                Private caches
            `} may
            use a heuristic to decide when this response is considered stale, typically
            some percentage of the time since the content was last modified, often using
            the Last-Modified header value${r.headers["last-modified"]?` (<code>${pl(r.headers["last-modified"].toString())}</code>)`:", although that is not explicitly defined in this response either"}
        `;if(u&&o["must-revalidate"])return{summary:"Must be revalidated every time it's used"+(l!==i?` (or after ${Sw(l)} for shared caches)`:""),explanation:Xl`
                ${h}.

                In addition, it includes a \`must-revalidate\` directive.

                Together, these mean that before the cached content can be used${l!==i&&l>0?" by private caches":""} the matching requests must always be forwarded to the origin server,
                and the response content must be revalidated.

                This requires a request to the origin server for every client request, but
                does still offer performance benefits compared to not caching at all,
                because conditional requests can be used to avoid redownloading the
                full response from scratch if it hasn't changed.
            `};const m=void 0!==o["stale-while-revalidate"]&&void 0!==o["stale-if-error"]?"can be served stale temporarily whilst revalidating or if receiving errors":void 0!==o["stale-while-revalidate"]?`can be served stale whilst revalidating for ${Sw(o["stale-while-revalidate"])}`:void 0!==o["stale-if-error"]?`can be served stale if errors are received for ${Sw(o["stale-if-error"])}`:"",g=o["must-revalidate"]?", then must always be revalidated":o["proxy-revalidate"]&&m?`, then ${m} (but must be revalidated by shared caches)`:o["proxy-revalidate"]?", then must always be revalidated by shared caches, but may be used privately":m?`, then ${m}`:"",f=void 0!==o["stale-while-revalidate"]&&void 0!==o["stale-if-error"]?Xl`
            The response includes both \`stale-while-revalidate\` and \`stale-if-error\`
            directives, set to ${o["stale-while-revalidate"]} seconds and ${o["stale-if-error"]} seconds respectively.

            \`stale-while-revalidate\` means that after the response has expired, new
            requests should trigger revalidation, but the stale content can still be served
            in the meantime, for ${Sw(o["stale-while-revalidate"])} extra.

            \`stale-if-error\` means that after the response has expired, new
            requests should trigger revalidation, but the stale content can still be served
            in the meantime if any errors are encountered, for ${Sw(o["stale-if-error"])} after the response expires.
        `:void 0!==o["stale-while-revalidate"]?Xl`
            The response includes a \`stale-while-revalidate\` directive set to ${o["stale-while-revalidate"]} seconds. This means that after the response has expired new requests
            should trigger revalidation, but the stale content can still be served in
            the meantime for ${Sw(o["stale-while-revalidate"])} extra.
        `:void 0!==o["stale-if-error"]?Xl`
            The response includes a \`stale-if-error\` directive set to ${o["stale-if-error"]} seconds. This means that after the response has expired, new
            requests should trigger revalidation, but the stale content can still be
            served in the meantime if any errors are encountered, for ${Sw(o["stale-if-error"])} after the response expires.
        `:"",y=o["must-revalidate"]?Xl`
            This response includes a \`must-revalidate\` directive, which means caches must
            ensure expired content is _always_ forwarded to & revalidated by the origin server,
            and expired content must never be used, even if the server is unavailable, if
            requested explicitly, or if serving stale content has been enabled elsewhere.
        `:o["proxy-revalidate"]?Xl`
            This response includes a \`proxy-revalidate\` directive, which means shared
            caches (e.g. CDNs or proxies) must ensure expired content is always forwarded
            to & revalidated by the origin server, and expired content must never be used,
            even if the server is unavailable, if requested explicitly, or if serving
            stale content has been enabled elsewhere.

            ${f||Xl`
                It does not include a \`must-revalidate\` directive, so private client caches
                are still allowed to use stale responses if necessary.
            `}
        `:Xl`
            ${f}

            As the response does not include a \`must-revalidate\` directive,
            expired responses may be used if explicitly requested or necessary, for
            example if the origin server is not responding.
        `;if(u)return{summary:`Expires immediately${l!==i?` (or after ${Sw(l)} for shared caches)`:""}${g}`,explanation:Xl`
                ${h}.

                ${y}
            `};const v=!o.immutable&&d&&d>=31536e3;return{summary:void 0!==d?`Expires after ${Sw(d)}${l!==i?` (${Sw(l)} for shared caches)`:""}${g}`:`Expires unpredictably${l!==i?` for private caches, or after ${Sw(l)} for shared caches`:""}${g}`,type:v?"suggestion":void 0,explanation:Xl`
            ${h}.

            ${y}

            ${v?Xl`
                :suggestion: This expiry time is more than a year away, which suggests that the
                content never changes. This could be more effective with the \`immutable\`
                Cache-Control directive, which completely avoids revalidation
                requests for this content in extra cases, such as explicit page refreshes,
                saving validation time.
            `:""}
        `}}const $w=(0,E.PA)(e=>{let t;return"durationMs"in e?t=e.durationMs:e.timingEvents&&(t=(e=>{var t;const n=null!==(t=e.responseSentTimestamp)&&void 0!==t?t:e.abortedTimestamp;return void 0!==e.startTimestamp&&void 0!==n?n-e.startTimestamp:void 0!==e.startTime?me.getTime()-e.startTime:void 0})(e.timingEvents)),void 0===t?null:b.createElement(Gp,{className:e.className},jt(t))}),Iw=(0,E.WQ)("accountStore")((0,E.PA)(e=>{const{exchange:t,accountStore:n}=e,r=n.user.isPaidUser();return b.createElement(Dp,Object.assign({},e),b.createElement("header",null,r?b.createElement($w,{timingEvents:t.timingEvents}):b.createElement(vx,null),b.createElement(Fp,{onCollapseToggled:e.onCollapseToggled},"Performance")),r?b.createElement("div",null,b.createElement(Uw,{exchange:t}),b.createElement(Ww,{exchange:t})):b.createElement(xx,{source:"performance"},b.createElement("p",null,"See timing info, dive into the real and potential compression of every exchange, and understand how & where this response could be cached, for a full performance overview.")))}));function qw(e){return"br"===e?"brotli":"zstd"===e?"zstandard":"gzip"===e||"x-gzip"===e?"gzip":"deflate"===e||"x-deflate"===e?"zlib":y.upperFirst(e)}const jw=(0,E.PA)(e=>{const{encodings:t,encodedBodyLength:n,decodedBodyLength:r}=e,o=r?Math.round(100*(1-n/r)):void 0;return b.createElement(b.Fragment,null,t.length?b.createElement(b.Fragment,null,"compressed with ",b.createElement("strong",null,Ht(t,", "," and then ")),", making it ",void 0!==o&&r?b.createElement(b.Fragment,null,b.createElement("strong",null,o>=0?`${o}% smaller`:-o+"% bigger")," (",Jt(r)," to ",Jt(n),")"):b.createElement(is,{icon:["fas","spinner"],spin:!0})):b.createElement("strong",null,"not compressed"))}),Dw=G.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-right: 10px;
`,Mw=G(Gp)`
    flex-shrink: 0;
`,Fw=(0,E.PA)(e=>{const{encodings:t,encodedBodyLength:n,decodedBodyLength:r,encodingTestResults:o}=e;if(!y.isEmpty(o)&&r){const e=Math.round(100*(1-n/r));return b.createElement(Dw,null,y(o).omitBy((e,n)=>1===t.length&&n===t[0]).map((t,n)=>{const o=Math.round(100*(1-t/r));return b.createElement(Mw,{key:n,title:`${Jt(r)} would compress to ${Jt(t)} using ${n}`,color:o>e&&o>0?"#4caf7d":"#888"},y.upperFirst(n),": ",o,"%")}).valueOf())}return b.createElement(is,{icon:["fas","spinner"],spin:!0})}),Bw=G.div`
    display: flex;
    align-items: center;

    margin-bottom: 10px;
    &:last-child {
        margin-bottom: 0;
    }
`,Lw=G.p`
    margin-bottom: 10px;
    line-height: 1.3;

    &:last-child {
        margin-bottom: 0;
    }
`,Nw=G(Lw)`
    font-style: italic;
`,Uw=(0,E.PA)(e=>{const t=fn(e.exchange.request.headers["accept-encoding"]).map(qw);return b.createElement(b.Fragment,null,["request","response"].map(n=>{const r=e.exchange[n];if("object"!=typeof r||!(null==r?void 0:r.body)||!r.body.encodedByteLength||r.body.isFailed())return null;const o=function(e){return e&&"aborted"!==e?fn(e.headers["content-encoding"]).filter(e=>!!e&&"identity"!==e).map(qw):[]}(r),s=r.body.encodedByteLength,a=r.body.decodedData,i=a?a.byteLength:0,l=y.mapKeys(function(e){if(!e.body.isDecoded())return;const t=e.cache,n=t.get(Dl);if(n)return n.get();{const n=w.observable.box();return t.set(Dl,n),function(e){return Bl(this,void 0,void 0,function*(){return(yield Wl({type:"test-encodings",decodedBuffer:e})).encodingSizes})}(e.body.decodedData).then((0,w.action)(e=>{n.set(e)})).catch(()=>{}),n.get()}}(r),(e,t)=>qw(t));let c=y.minBy(Object.keys(l),e=>l[e]);const d=i&&c&&!(1===o.length&&c===o[0])&&l[c]<Math.min(s,i);return b.createElement(b.Fragment,{key:n},b.createElement(hh,null,y.upperFirst(n)," Compression"),b.createElement(Lw,null,"The ",n," body was ",b.createElement(jw,{encodings:o,encodedBodyLength:s,decodedBodyLength:(0,vr.Jt)(a,"byteLength")}),"."),b.createElement(Bw,null,b.createElement(Fw,{encodings:o,encodedBodyLength:s,decodedBodyLength:(0,vr.Jt)(a,"byteLength"),encodingTestResults:l}),b.createElement(Nw,null,!!d&&b.createElement(b.Fragment,null,b.createElement(ls,null),"This would be ",Math.round(100*(1-l[c]/s)),"% smaller ",i!==s&&`(${Math.round(100*(1-l[c]/i))}% total compression)`," with ",c,"response"===n&&t&&!y.includes(t,c)&&" (not supported by this client)","."),!!i&&!d&&i<s&&b.createElement(b.Fragment,null,b.createElement(ds,null),"This ",n," would be smaller without compression."))))}))}),Ww=(0,E.PA)(e=>{if("object"!=typeof e.exchange.response)return null;const t=function(e){const{request:t,response:n}=e;if("object"!=typeof n)return;if(!yw.includes(t.method)){if("OPTIONS"===t.method&&t.headers.origin){const e=un(n.headers,"access-control-max-age"),t=e?parseInt(e,10):void 0;return void 0!==t&&t>=1?{cacheable:!0,summary:"Cacheable",explanation:Xl`
                        OPTIONS preflight requests are not normally cacheable, and don't observe
                        standard Cache-Control mechanisms, but the CORS result itself will be
                        cached if a Access-Control-Max-Age header is provided, as here.

                        This only affects CORS behaviour for cross-origin requests, and should be
                        ignored (so not cached at all) by all other clients and proxies.
                    `}:void 0!==t&&t<=0?{cacheable:!1,summary:"Not cacheable",explanation:Xl`
                        OPTIONS preflight requests don't observe standard Cache-Control
                        mechanisms, but the CORS result itself can be cached if a
                        Access-Control-Max-Age header is provided.

                        In this case that header is set to ${pl(e)}, explicitly requesting that this result should not be cached,
                        and that clients should not reuse this CORS response in future.
                    `}:{cacheable:!0,summary:"Very briefly cacheable",explanation:Xl`
                    OPTIONS preflight requests are not cacheable, unless an Access-Control-Max-Age
                    header is provided. Many clients will very briefly cache the CORS response
                    though, for example Chrome will cache this for 5 seconds.
                `}}return{cacheable:!1,summary:"Not cacheable",explanation:`${pl(t.method)} requests are never cacheable.`}}const r=Pw(n),o=n.headers.etag||n.headers["last-modified"],s=o||!n.body.encodedByteLength||r.immutable?"":Xl`
            :suggestion: This response doesn't however include any validation headers. That
            means that once it expires, the content must be requested again from scratch. If
            a Last-Modified or ETag header were included then these could be used to make
            conditional HTTP requests and revalidate cached content without re-requesting
            it, saving time and bandwidth.
        `;if(r["no-store"])return{cacheable:!1,summary:"Not cacheable",explanation:Xl`
                This response includes a \`no-store\` directive in its Cache-Control
                header. This explicitly tells all caches that this response should
                never be cached. It should never be persistently stored, should
                be removed from any volatile/temporary storage as soon as possible,
                and should be requested fresh from the network in future.
            `};if(fn(n.headers.pragma).includes("no-store"))return{cacheable:!1,summary:"Not cacheable",type:"suggestion",explanation:Xl`
                This response includes a \`no-store\` directive in its Pragma
                header. This explicitly tells all caches that this response should
                never be cached. It should never be persistently stored, should
                be removed from any volatile/temporary storage as soon as possible,
                and should be requested fresh from the network in future.

                :suggestion: This Pragma header is commonly supported, but officially
                deprecated. It's typically better to use \`Cache-Control: no-store\` instead.
            `};if(fn(n.headers.vary).includes("*"))return{cacheable:!1,summary:"Not cacheable",explanation:Xl`
                This response includes a \`*\` value in its Vary header. This tells caches
                that the response content may vary unpredictably, possibly including factors
                outside the request's content (e.g. the client's network address),
                and so must never be cached.
            `};if("POST"===t.method){const e=Xl`
            POST responses are not typically cacheable, but can be used in some
            specific circumstances to prepopulate GET & HEAD caches for the same URI.
            This is allowed by the spec, but not supported by many clients.

            A POST response may be cached and used by for future GET/HEAD requests only if:

            * Explicit freshness information is included (e.g. a \`max-age\` Cache-Control
                directive), and
            * a Content-Location header is included, set to the same
                URI as this request
        `,o=n.headers["content-location"]?new URL(un(n.headers,"content-location"),t.url):void 0,a=!!r["max-age"]||void 0!==n.headers.expires,i=o&&o.toString().split("#")[0]===t.parsedUrl.toString().split("#")[0];return a&&i?{cacheable:!0,summary:"May be cacheable for future GET/HEAD requests",type:s?"suggestion":void 0,explanation:[e,"This response fulfills those conditions, so may be cacheable by some clients.",s].join("\n\n")}:{cacheable:!1,summary:"Not cacheable",explanation:e+"\n\nThis response does not fulfill those conditions, so is not cacheable by anybody."}}if(void 0!==r["max-age"]){let e;const t=n.headers.date?(0,ae.parse)(un(n.headers,"date")):void 0;return t?n.headers.expires&&Math.abs((0,ae.differenceInSeconds)((0,ae.parse)(un(n.headers,"expires")),(0,ae.addSeconds)(t,r["max-age"])))>60&&(e=Xl`
                :warning: This response also includes an Expires header, which appears to disagree
                with the expiry time calculated from the \`max-age\` directive. The Cache-Control
                headers take precedence, so this will only be used by clients that don't
                support that, but this could cause unpredictable behaviour. It's typically
                better to ensure these values agree on a single expiry time.
            `):e=Xl`
                :warning: However, this response does not include a Date header. That value
                would be used in combination with the \`max-age\` value to calculate
                the exact time to expire this content.

                Clients may infer their own expiry start time, potentially using the time they
                received this response, but it's strongly recommended to explicitly specify
                one in the response instead, to ensure this content expires reliably and
                predictably.
            `,{cacheable:!0,summary:"Cacheable",type:e?"warning":s?"suggestion":void 0,explanation:Xl`
                This response is cacheable because it specifies an explicit expiry time,
                using a \`max-age\` directive in its Cache-Control header.
                ${e?"\n"+e:s?"\n"+s:""}
            `}}if(void 0!==un(n.headers,"expires"))return{cacheable:!0,summary:"Cacheable",type:"suggestion",explanation:Xl`
                This response is cacheable because it specifies an explicit expiry time,
                using an Expires header.

                :suggestion: The Expires header is commonly supported, but officially deprecated.
                It's typically better to use \`Cache-Control: max-age=<seconds>\` instead,
                or in addition.
            `};const a=vw.includes(n.statusCode);if(a||r.public){if(bw.includes(n.statusCode))return{cacheable:!0,summary:"Cacheable",explanation:Xl`
                    ${n.statusCode} responses are cacheable by default. The lifetime of the
                    cached response isn't strictly specified, but since this status code is
                    intended to indicate a permanent change the overwhelming majority of clients
                    will cache it forever.
                `};const e=a?`${n.statusCode} responses are cacheable by default`:"This response includes a `public` Cache-Control directive, explicitly marking it cacheable";return o?r["no-cache"]?{cacheable:!0,summary:"Cacheable",explanation:Xl`
                    ${e}.

                    The response does not include any explicit expiry information,
                    but does include a \`no-cache\` directive, meaning the cached content will
                    be revalidated with the origin server on every request, making
                    expiry irrelevant.
                `}:{cacheable:!0,summary:"Probably cacheable",type:"warning",explanation:Xl`
                    ${e}. However this response does not explicitly
                    specify when it expires (e.g. with a \`max-age\` Cache-Control
                    directive), so its expiry behaviour is not well defined. Caches
                    may use a heuristic to decide when this response is no longer
                    considered fresh, and some clients may refuse to cache the response
                    entirely.

                    :warning: It's typically better to be explicit about how responses should
                    be cached and expired, rather than depending on this unpredictable behaviour.

                    If an explicit expiry time was set (e.g. using a \`max-age\` Cache-Control
                    directive), this would take precedence over any heuristics, and provide
                    reliable cache expiry. Alternatively this content would be reliably
                    excluded from caching if a \`no-store\` Cache-Control directive was present.
                `}:{cacheable:!1,summary:"Typically not cacheable",type:"warning",explanation:Xl`
                    ${e}. However most caches will not store a response
                    like this, which has no explicit expiry time and no way to revalidate
                    the content in future.

                    :warning: It's typically better to be explicit about if and how responses
                    should be cached, rather than depending on the unpredictable behaviour this
                    can cause.

                    This request would be reliably cached if an explicit expiry was set (e.g.
                    with a \`max-age\` Cache-Control directive). Alternatively this would be
                    reliably excluded from caching if a \`no-store\` Cache-Control directive
                    was present.
                `}}return void 0!==r["s-maxage"]?{cacheable:!0,summary:"Not cacheable by private (HTTP client) caches",explanation:Xl`
                This response is cacheable because it specifies an explicit expiry time,
                using an \`s-maxage\` Cache-Control directive. This only applies to shared
                caches (e.g. proxies and CDNs), and this response would otherwise not be
                cacheable, so it won't be cached by any HTTP user agents (e.g. browsers).
            `}:{cacheable:!1,summary:"Not cacheable",explanation:Xl`
            ${n.statusCode} responses are not cacheable by default.
            This could become cacheable if explicit caching headers were added,
            such as a \`max-age\` Cache-Control directive.
        `}}(e.exchange);if(!t)return null;const n=t.cacheable?[t,Hw(e.exchange),Ow(e.exchange),Aw(e.exchange)]:[t];return b.createElement(b.Fragment,null,b.createElement(hh,null,"Caching"),n.map((e,t)=>b.createElement(ax,{contentName:"detailed explanation",prefixTrigger:!0,key:t},b.createElement(dx,null,e.summary," ","warning"===e.type&&b.createElement(ds,null),"suggestion"===e.type&&b.createElement(ls,null)),b.createElement(ux,null,b.createElement(xh,{content:e.explanation})))))});var zw=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const _w=G(Zp)`
    max-width: 33%;
`,Vw=G.div`
    p {
        margin-bottom: 10px;
    }
`,Kw=G.div`
    display: flex;
    align-items: center;

    gap: 10px;
    margin-bottom: 10px;
`,Jw=G.div`
    margin: 0 -20px -20px -20px;

    border: solid 1px ${e=>e.theme.containerBorder};
    padding-right: 1px;
    border-radius: 0 0 3px 3px;

    background-color: ${e=>e.theme.highlightBackground};
    color: ${e=>e.theme.highlightColor};
`,Qw={readOnly:!0,hover:{enabled:!1}},Gw=(0,E.PA)(e=>{const{target:t,client:n,link:r,description:o}=e.exportOption;let s;try{s=fv(e.exchange,e.exportOption)}catch(e){console.log(`Failed to export request for ${t}--${n}`),f(e),s=Zl()`
            Could not generate a snippet for this request

            Is this unexpected? Please file a bug at github.com/httptoolkit/httptoolkit.
        `}return b.createElement(b.Fragment,null,b.createElement(Vw,null,b.createElement("p",null,b.createElement("strong",null,Cv(e.exportOption)),": ",o),b.createElement(Kw,null,b.createElement(rh,{href:r},"Find out more"),b.createElement($h,{content:s},"Copy snippet"))),b.createElement(Jw,null,b.createElement(Hf,{contentId:null,value:s,language:{javascript:"javascript",node:"javascript",shell:"shell"}[t]||"text",options:Qw})))}),Yw=G((0,E.PA)(e=>b.createElement(Yp,{className:e.className,onClick:()=>gv(e.exchange),disabled:!e.exchange.response||"aborted"===e.exchange.response},b.createElement(is,{icon:["fas","download"]})," Save as HAR")))`
    margin-right: auto;
`,Xw=(0,E.WQ)("uiStore")((0,E.PA)(e=>b.createElement(Yp,{title:"Export this request as code snippets in a ZIP archive",onClick:()=>e.uiStore.openZipExport([e.exchange])},b.createElement(is,{icon:["fas","file-archive"]})," Save snippet ZIP")));let Zw=class extends b.Component{render(){const{exchange:e,accountStore:t}=this.props,n=t.user.isPaidUser();return b.createElement(Dp,Object.assign({},this.props),b.createElement("header",null,n?b.createElement(b.Fragment,null,b.createElement(Yw,{exchange:e}),b.createElement(Xw,{exchange:e})):b.createElement(vx,null),b.createElement(_w,{onChange:this.setSnippetOption,value:this.snippetOption,optGroups:vv,keyFormatter:wv,nameFormatter:Cv}),b.createElement(Fp,{onCollapseToggled:this.props.onCollapseToggled},"Export")),n?b.createElement("div",null,b.createElement(Gw,{exchange:e,exportOption:this.snippetOption})):b.createElement(xx,{source:"export"},b.createElement("p",null,"Instantly export requests as code, for languages and tools including cURL, wget, JS (XHR, Node HTTP, Request, ...), Python (native or Requests), Ruby, Java (OkHttp or Unirest), Go, PHP, Swift, HTTPie, and a whole lot more."),b.createElement("p",null,"Want to save the exchange itself? Export one or all requests as HAR (the"," ",b.createElement("a",{href:"https://en.wikipedia.org/wiki/.har"},"HTTP Archive Format"),"), to import and examine elsewhere, share with your team, or store for future reference.")))}get snippetOption(){let e=this.props.uiStore.exportSnippetFormat||xv;return Ev(e)}setSnippetOption(e){this.props.uiStore.exportSnippetFormat=e}};zw([w.computed],Zw.prototype,"snippetOption",null),zw([w.action.bound],Zw.prototype,"setSnippetOption",null),Zw=zw([(0,E.WQ)("accountStore"),(0,E.WQ)("uiStore"),E.PA],Zw);const eE=G(qp)`
    position: sticky;
    top: -10px;
    z-index: 2;

    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;

    flex-shrink: 0;
`,tE=Y`
    padding: 10px 15px;
    font-weight: bold;
    font-size: ${e=>e.theme.textSize};

    margin: 10px 0 0 10px;
    align-self: stretch;
`,nE=G.p`
    width: 100%;
    margin-bottom: 10px;
    line-height: 1.3;

    a[href] {
        color: ${e=>e.theme.linkColor};

        &:visited {
            color: ${e=>e.theme.visitedLinkColor};
        }
    }
`,rE=G(Wp)`${tE}`,oE=G(_p)`${tE}`,sE=e=>{const t="fulfilled"===Me.state&&Ie.valid(Me.value)&&je(Me.value,"^0.1.20 || ^1.0.0");if("rule-abort"!==e.type)return b.createElement(eE,null,b.createElement(nE,null,b.createElement(ds,null)," ",Hv(e.type)?b.createElement("strong",null,"This request could not be handled"):$v(e.type)?b.createElement("strong",null,"This request was not forwarded successfully"):b.createElement("strong",null,"This exchange was not completed successfully")," ",b.createElement(ds,null)),b.createElement(nE,null,Hv(e.type)?b.createElement(b.Fragment,null,"The client's request ","invalid-method"===e.type?"used an unsupported HTTP method":"invalid-http-version"===e.type?"used an unsupported HTTP version":"invalid-headers"===e.type?"included an invalid or unparseable header":"client-unparseable-url"===e.type?"included an unparseable URL":"header-overflow"===e.type?"headers were too large to be processed":"client-unparseable"===e.type?"could not be parsed":Rt(e.type),", so HTTP Toolkit did not handle this request."):$v(e.type)?b.createElement(b.Fragment,null,"The upstream server ","wrong-host"===e.type?"responded with an HTTPS certificate for the wrong hostname":"expired"===e.type?"has an expired HTTPS certificate":"not-yet-valid"===e.type?"has an HTTPS certificate with a start date in the future":"untrusted"===e.type?"has an untrusted HTTPS certificate":"tls-error"===e.type?"could not complete a TLS handshake":"host-unreachable"===e.type?"was not reachable on your network connection":"host-not-found"===e.type||"dns-error"===e.type?"hostname could not be found":"connection-refused"===e.type?"refused the connection":Rt(e.type),", so HTTP Toolkit didn't forward the request."):jv(e.type)?b.createElement(b.Fragment,null,"The request timed out ","client-timeout"===e.type?"waiting for the client to send the complete request":"server-timeout"===e.type?"waiting for a response from the server":Rt(e.type)):"client-abort"===e.type?b.createElement(b.Fragment,null,"The client unexpectedly disconnected during the request, so the response could not be completed."):qv(e.type)?b.createElement(b.Fragment,null,"The upstream request failed because ","connection-reset"===e.type?"the connection to the server was reset":"server-unparseable"===e.type?"the response from the server was unparseable":Rt(e.type),", so HTTP Toolkit could not return a response to the client."):"unknown"===e.type?b.createElement(b.Fragment,null,"The request failed because of an unknown error, so HTTP Toolkit could not return a response."):Rt(e.type)),"tls-error"===e.type?b.createElement(b.Fragment,null,b.createElement(nE,null,"This could be caused by the server not supporting modern ciphers or TLS versions, expecting a client certificate that wasn't provided, or TLS configuration issues in either the server or HTTP Toolkit."),b.createElement(nE,null,e.isPaidUser?b.createElement(b.Fragment,null,"From the Settings page you can configure client certificates, or whitelist this host to relax security requirements and allow self-signed certificates, which may resolve some TLS issues."):b.createElement(b.Fragment,null,"Pro users can relax HTTPS requirements for configured hosts to accept older TLS configurations and self-signed/invalid certificates, and configure per-host client certificates for authentication."))):"host-not-found"===e.type?b.createElement(b.Fragment,null,b.createElement(nE,null,"This typically means the host doesn't exist, although it could be an issue with your DNS or network configuration."),b.createElement(nE,null,"You can define rules to handle requests like this from the Modify page, to return fake data even for servers and hostnames that don't exist.")):"host-unreachable"===e.type?b.createElement(b.Fragment,null,b.createElement(nE,null,"This is typically an issue with your network connection or the host's DNS records."),b.createElement(nE,null,"You can define rules to handle requests like this from the Modify page, to return fake data even for servers and hostnames that aren't accessible.")):"dns-error"===e.type?b.createElement(b.Fragment,null,b.createElement(nE,null,"The DNS server hit an unknown error looking up this hostname. This is likely due to a issue in your DNS configuration or network connectivity, and may just be a temporary issue."),b.createElement(nE,null,"You can define rules to handle requests like this from the Modify page, to return fake data even for servers and hostnames that don't exist or aren't accessible.")):"untrusted"===e.type?b.createElement(nE,null,"By default unrecognized certificate authorities (CAs) are only accepted for localhost servers, but ",e.isPaidUser?"additional CAs can be trusted from the Settings page.":"Pro users can trust additional CAs or disable HTTPS validation for a host entirely."):Dv(e.type)?b.createElement(nE,null,"By default this is only allowed for localhost servers, but ",e.isPaidUser?"other hosts can be added to the whitelist from the Settings page.":"Pro users can whitelist other custom hosts."):"connection-refused"===e.type?b.createElement(nE,null,"This typically means the server isn't running on the port you're using, though it is possible this is an intermittent connection issue. You can either try again, or create a rule for requests like this to avoid sending them upstream at all."):"connection-reset"===e.type?b.createElement(nE,null,"This could be due to a connection issue, or an issue with the server. This may be an intermittent issue that will be solved by retrying the request, or you can create a rule for requests like this to avoid sending them upstream at all."):"client-abort"===e.type?b.createElement(nE,null,"This could be due to connection issues, problems within the client, or that the client simply no longer wanted to receive the response and closed the connection intentionally."):"client-timeout"===e.type?b.createElement(nE,null,"This could be due to connection issues, problems within the client, or delays generating the complete body of the request. This might be resolved by retrying the request, or sending a simpler request with a smaller or easier to generate body."):"server-timeout"===e.type?b.createElement(nE,null,"This could be due to connection issues, problems within the server, or issues with handling this request specifically. This might be resolved by retrying the request, or you can create a rule for requests like this to avoid sending them upstream at all."):Av(e.type)?b.createElement(nE,null,"This means the client sent HTTP Toolkit some fundamentally invalid data that does not follow the HTTP spec. That suggests either a major bug in the client, or that they're not sending HTTP at all."):"server-unparseable"===e.type?b.createElement(nE,null,"This means the server sent HTTP Toolkit some fundamentally invalid data that does not follow the HTTP spec. That suggests either a major bug in the server, or that they're not sending HTTP at all."):"header-overflow"===e.type?b.createElement(nE,null,Me.value&&t?b.createElement(b.Fragment,null,"This means the request included more than 100KB of headers. The HTTP specification doesn't set a max length, but most servers will refuse to process anything longer than 8KB. This is likely an issue with your client, but if necessary you can increase the HTTP Toolkit limit by setting ",b.createElement("code",null,"max-http-header-size")," using the ",b.createElement("code",null,"HTTPTOOLKIT_NODE_OPTIONS")," environment variable."):Me.value?b.createElement(b.Fragment,null,"In more recent HTTP Toolkit versions the built-in limit has been increased, so please update HTTP Toolkit to handle requests like these."):b.createElement(b.Fragment,null,"The HTTP specification doesn't set a max length for HTTP headers, but most servers will refuse to process anything longer than 8KB.")):"invalid-method"===e.type?b.createElement(nE,null,"Because this method is unrecognized, HTTP Toolkit doesn't know how it should be handled, and cannot safely forward it on elsewhere. If you think this method should be supported, please ",b.createElement("a",{href:"https://github.com/httptoolkit/httptoolkit/issues/new"},"get in touch"),"."):"invalid-http-version"===e.type?b.createElement(nE,null,"The client may be using a newer or experimental HTTP version that HTTP Toolkit doesn't yet support. If you think this version should be supported, please ",b.createElement("a",{href:"https://github.com/httptoolkit/httptoolkit/issues/new"},"get in touch"),"."):"unknown"===e.type?b.createElement(nE,null,"It's not clear what's gone wrong here, but for some reason HTTP Toolkit couldn't successfully and/or securely complete this request. This might be an intermittent issue, and may be resolved by retrying the request."):Rt(e.type),Hv(e.type)&&b.createElement(nE,null,"The data shown below is a best guess from the data that was available and parseable, and may be incomplete or inaccurate."),b.createElement(rE,{onClick:e.ignoreError,onKeyPress:Rp},"Ignore"),Mv(e.type)?b.createElement(rE,{onClick:e.createRuleFromRequest,onKeyPress:Rp},"Create a rule"):Dv(e.type)?e.isPaidUser?b.createElement(rE,{onClick:()=>e.navigate("/settings"),onKeyPress:Rp},"Go to Settings"):b.createElement(rE,{onClick:()=>e.getPro(`error-header-${e.type}`),onKeyPress:Rp},"Get Pro"):null)},aE=G.div`
    height: ${38}px;
    flex-shrink: 0;
    width: 100%;
    padding-left: 5px;
    box-sizing: border-box;

    background-color: ${e=>e.theme.mainBackground};

    display: flex;

    align-items: center;
    justify-content: center;

    z-index: 1;
    box-shadow: 0 -10px 30px -5px rgba(0,0,0,${e=>e.theme.boxShadowAlpha});
`,iE=(0,E.PA)(e=>b.createElement(kh,{icon:["fas","eye"],title:"Scroll the list to show this exchange",onClick:e.onClick})),lE=G((0,E.PA)(e=>b.createElement(kh,{className:e.className,icon:["fas","thumbtack"],title:(e.pinned?"Unpin this exchange so it can be deleted":"Pin this exchange, so it can't be deleted")+` (${xp}+P)`,onClick:e.onClick})))`
    transition: transform 0.1s;

    ${e=>!e.pinned&&Y`
        transform: rotate(45deg);
    `}
`,cE=(0,E.PA)(e=>b.createElement(kh,{icon:["far","trash-alt"],title:`Delete this exchange (${xp}+Delete)`,onClick:e.onClick})),dE=(0,E.PA)(e=>b.createElement(kh,{icon:"Pencil",onClick:e.onClick,title:e.isPaidUser?`Create a modify rule from this exchange (${xp}+m)`:"With Pro: create a modify rule from this exchange",disabled:!e.isExchange||!e.isPaidUser})),uE=(0,E.PA)(e=>b.createElement(kh,{icon:"PaperPlaneTilt",onClick:e.onClick,title:e.isPaidUser?`Resend this request (${xp}+r)`:"With Pro: Resend this request",disabled:!e.isExchange||!e.isPaidUser})),pE=G((0,E.WQ)("accountStore")(e=>b.createElement(Lp,{onClick:()=>e.accountStore.getPro("http-event-footer"),className:e.className},b.createElement(yx,null,"With Pro:"))))`
    padding: 0;
    margin-left: 40px;
`,hE=(0,E.WQ)("rulesStore")((0,E.PA)(e=>{const{event:t}=e,{pinned:n}=t,r="downstream"in t?t.downstream:t;return b.createElement(aE,null,b.createElement(iE,{onClick:()=>e.onScrollToEvent(r)}),b.createElement(lE,{pinned:n,onClick:(0,w.action)(()=>{t.pinned=!t.pinned})}),b.createElement(cE,{pinned:n,onClick:()=>e.onDelete(r)}),!e.isPaidUser&&b.createElement(pE,null),b.createElement(dE,{isExchange:t.isHttp()&&!t.isWebSocket(),isPaidUser:e.isPaidUser,onClick:()=>e.onBuildRuleFromExchange(e.event)}),e.onPrepareToResendRequest&&b.createElement(uE,{isExchange:t.isHttp()&&!t.isWebSocket(),isPaidUser:e.isPaidUser,onClick:()=>e.onPrepareToResendRequest(e.event)}))})),mE=e=>b.createElement(eE,null,b.createElement(nE,null,b.createElement(ds,null)," ",b.createElement("strong",null,"This request is paused at a breakpoint")),b.createElement(nE,null,je(Fe.value,Ve)?b.createElement(b.Fragment,null,"Edit the request and then resume to let your edited request continue to the target URL, respond directly to provide a response yourself, or close to immediately end the connection."):b.createElement(b.Fragment,null,"Respond directly to provide a response yourself, or edit the request as you'd like and then resume to let your edited request continue to the target URL.")),b.createElement(oE,{onClick:e.onCreateResponse,onKeyPress:Rp},"Respond directly"),je(Fe.value,Ve)?b.createElement(oE,{onClick:e.onClose,onKeyPress:Rp},"Close"):null,b.createElement(rE,{onClick:e.onResume,onKeyPress:Rp},"Resume")),gE=e=>b.createElement(eE,null,b.createElement(nE,null,b.createElement(ds,null)," ",b.createElement("strong",null,"This response is paused at a breakpoint")),b.createElement(nE,null,je(Fe.value,Ve)?b.createElement(b.Fragment,null,"Edit it as you'd like and resume to let the edited response continue back to the client, or close to immediately end the connection."):b.createElement(b.Fragment,null,"Edit it as you'd like, then resume to let the edited response continue back to the client.")),je(Fe.value,Ve)?b.createElement(oE,{onClick:e.onClose,onKeyPress:Rp},"Close"):null,b.createElement(rE,{onClick:e.onResume,onKeyPress:Rp},"Resume"));var fE=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const yE=e=>e.map(({key:e,value:t})=>[e,t]),vE=e=>e.map(({key:e,value:t,disabled:n})=>({key:!n&&e.startsWith(":")?e.slice(1):e,value:t,disabled:n})),bE=e=>e.map(({key:e,value:t,disabled:n})=>({key:!n&&e.startsWith(":")?e.slice(1).toLowerCase():e.toLowerCase(),value:t,disabled:n})),xE=(0,E.PA)(e=>{const{headers:t,onChange:n,allowEmptyValues:r,preserveKeyCase:o}=e;return b.createElement(Xv,{pairs:(s=t,(e=>e.map(({key:e,value:t})=>e.startsWith(":")?{key:e,value:t,disabled:!0}:{key:e,value:t}))(s.map(([e,t])=>({key:e,value:t})))),onChange:n,transformInput:o?vE:bE,convertResult:yE,allowEmptyValues:r,keyValidation:sn,keyTitle:"Header names must contain only alphanumeric characters and !#$%&'*+-.^_`|~ symbols",keyPlaceholder:"Header name",valuePlaceholder:"Header value"});var s});let wE=class extends b.Component{constructor(){super(...arguments),this.rawHeaders=this.props.convertToRawHeaders(this.props.headers),this.output=this.props.headers}componentDidMount(){(0,E.bH)(this,(0,w.reaction)(()=>this.props.headers,e=>{if(!y.isEqual(e,this.output)){const t=this.props.convertToRawHeaders(e);(0,w.runInAction)(()=>{this.rawHeaders=t})}}))}onChangeRawHeaders(e){this.rawHeaders=e;const{allowEmptyValues:t,convertFromRawHeaders:n,onChange:r,onInvalidState:o}=this.props;if(t)this.output=n(e),r(this.output);else{if(e.some(([e,t])=>!t))return null==o?void 0:o();if(e.some(([e])=>!e))return null==o?void 0:o();this.output=n(e),r(this.output)}}render(){const{allowEmptyValues:e}=this.props,{rawHeaders:t,onChangeRawHeaders:n}=this;return b.createElement(xE,{headers:t,onChange:n,allowEmptyValues:e})}};fE([w.observable],wE.prototype,"rawHeaders",void 0),fE([w.action.bound],wE.prototype,"onChangeRawHeaders",null),wE=fE([E.PA],wE);var EE=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const CE=G(Kp)`
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 10px;
`,TE=Object.values(Ss.IT).filter(e=>"string"==typeof e),SE=G(Jp)`
    font-size: ${e=>e.theme.textSize};
    display: inline-block;

    width: auto;
    margin-left: 8px;
    margin-bottom: 5px;
`;let PE=class extends b.Component{render(){const e=this.props,{exchange:t,onChange:n}=e,r=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["exchange","onChange"]),{request:o}=t,{inProgressResult:s}=this.props.exchange.requestBreakpoint,a=s.rawHeaders||[],{method:i,url:l}=s;return b.createElement(Dp,Object.assign({},r,{direction:"right"}),b.createElement("header",null,b.createElement(Wx,{source:o.source}),b.createElement(Gp,{color:er(t)},i," ",(o.parsedUrl.hostname||"").replace(/\./g," . ")),b.createElement(Fp,{onCollapseToggled:r.onCollapseToggled},"Request")),b.createElement("div",null,b.createElement(uh,null,"Method:"),b.createElement(SE,{value:i,onChange:this.onMethodChanged},!TE.includes(i)&&b.createElement("option",{key:i,value:void 0},i),TE.map(e=>b.createElement("option",{key:e,value:e},e)))),b.createElement(hh,null,"URL"),b.createElement(CE,{value:l,onChange:this.onUrlChanged}),b.createElement(hh,null,"Headers"),b.createElement(xE,{headers:a,onChange:this.onHeadersChanged,preserveKeyCase:!0}))}get hasPseudoHeaders(){return this.props.exchange.httpVersion>=2}onMethodChanged(e){const t=e.target.value,{inProgressResult:n}=this.props.exchange.requestBreakpoint;t!==n.method&&(this.hasPseudoHeaders?this.props.onChange({method:t,rawHeaders:gn(n.rawHeaders,{":method":t})}):this.props.onChange({method:t}))}onUrlChanged(e){const t=e.target.value,{inProgressResult:n}=this.props.exchange.requestBreakpoint;let r=n.rawHeaders;try{const e=new URL(t);r=this.hasPseudoHeaders?gn(r,{":authority":e.host,":path":e.pathname+e.search,":scheme":e.protocol.slice(0,-1)}):gn(r,{host:e.host})}catch(e){}this.props.onChange({url:e.target.value,rawHeaders:r})}onHeadersChanged(e){this.props.onChange({rawHeaders:e})}};EE([w.computed],PE.prototype,"hasPseudoHeaders",null),EE([w.action.bound],PE.prototype,"onMethodChanged",null),EE([w.action.bound],PE.prototype,"onUrlChanged",null),EE([w.action.bound],PE.prototype,"onHeadersChanged",null),PE=EE([E.PA],PE);const kE=G.div`
    margin-top: 5px;

    display: flex;
    flex-direction: row;
    align-items: stretch;

    > :not(:last-child) {
        margin-right: 5px;
    }

    > :last-child {
        flex-grow: 1;
    }
`;function RE(e,t){return e.toLowerCase()===rn(t).toLowerCase()}const OE=e=>{const{statusCode:t}=e,n=void 0===e.statusMessage||e.httpVersion>=2?rn(t):e.statusMessage;return b.createElement(kE,{className:e.className},b.createElement(Kp,{type:"number",min:"100",max:"999",invalid:!t,value:t,onChange:r=>{let o=""!==r.target.value?parseInt(r.target.value,10):void 0;if(y.isNaN(o))return;const s=RE(n,t)?void 0:e.statusMessage;e.onChange(o,s)}}),b.createElement(Kp,{disabled:e.httpVersion>=2,value:n,onChange:n=>{let r=n.target.value;RE(r,t)&&(r=void 0),e.onChange(t,r)}}))};var HE=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const AE=G.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
`,$E=G(OE)`
    margin-left: 10px;
    margin-bottom: 5px;
    flex-basis: 100%;
`;let IE=class extends b.Component{render(){const e=this.props,{exchange:t,onChange:n,theme:r}=e,o=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["exchange","onChange","theme"]),{inProgressResult:s}=t.responseBreakpoint,a=s.rawHeaders||[],{statusCode:i,statusMessage:l}=s;return b.createElement(Dp,Object.assign({},o,{direction:"left"}),b.createElement("header",null,b.createElement(Gp,{color:tr(s.statusCode,r)},i),b.createElement(Fp,{onCollapseToggled:o.onCollapseToggled},"Response")),b.createElement(AE,null,b.createElement(uh,null,"Status:"),b.createElement($E,{httpVersion:t.httpVersion,statusCode:i,statusMessage:l,onChange:this.onStatusChange})),b.createElement(hh,null,"Headers"),b.createElement(xE,{headers:a,onChange:this.onHeadersChanged,preserveKeyCase:!0}))}onHeadersChanged(e){this.props.onChange({rawHeaders:e})}onStatusChange(e,t){var n;if(this.props.exchange.httpVersion>=2){const{rawHeaders:r}=this.props.exchange.responseBreakpoint.inProgressResult;this.props.onChange({statusCode:e||NaN,statusMessage:t,rawHeaders:gn(r,{":status":null!==(n=null==e?void 0:e.toString())&&void 0!==n?n:""})})}else this.props.onChange({statusCode:e||NaN,statusMessage:t})}};HE([w.action.bound],IE.prototype,"onHeadersChanged",null),HE([w.action.bound],IE.prototype,"onStatusChange",null),IE=HE([E.PA],IE);var qE=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};let jE=class extends b.Component{constructor(){super(...arguments),this.contentType="text",this.onBodyChange=e=>{this.props.onChange(Ut(e,this.textEncoding))}}onChangeContentType(e){this.contentType=e}componentDidMount(){(0,E.bH)(this,(0,w.reaction)(()=>un(this.props.rawHeaders,"content-type"),e=>{this.contentType=Nn(e)||"text"},{fireImmediately:!0}))}get textEncoding(){return Nt(this.props.body.decoded)?"utf8":"binary"}render(){const{body:e,rawHeaders:t,title:n,direction:r,collapsed:o,expanded:s,onCollapseToggled:a,onExpandToggled:i,ariaLabel:l,editorNode:c,editorKey:d}=this.props,u=Wt(e.decoded,this.textEncoding);return b.createElement(Dp,{ariaLabel:l,direction:r,collapsed:o,onCollapseToggled:a,expanded:s},b.createElement("header",null,b.createElement(Db,{body:e,onBodyFormatted:this.onBodyChange,title:n,expanded:s,onExpandToggled:i,onCollapseToggled:a,selectedContentType:this.contentType,contentTypeOptions:Mn,onChangeContentType:this.onChangeContentType})),"rejected"===e.latestEncodingResult.state&&b.createElement(Bb,{error:e.latestEncodingResult.value,headers:t,type:"encoding"}),b.createElement(Ib,{showFullBorder:!s},b.createElement(pf.bL,{contentId:`bp-${d}`,node:c,language:this.contentType,value:u,onChange:this.onBodyChange,expanded:!!s,maxHeight:"50cqh"})))}};qE([w.observable],jE.prototype,"contentType",void 0),qE([w.action.bound],jE.prototype,"onChangeContentType",null),qE([w.computed],jE.prototype,"textEncoding",null),jE=qE([E.PA],jE);var DE=n(68082);const ME=G.div`
    display: inline-block;
    float: right;
    user-select: none;
`,FE=G(Xp)`
    font-size: ${e=>e.theme.textSize};
    padding: 1px 4px 1px 8px;
`,BE=(0,DE.PA)(e=>{const t=b.useCallback((0,w.action)(t=>{const n=t.target.value;e.uiStore.contentPerspective=n}),[e.uiStore]);return b.createElement(ME,null,b.createElement(FE,{onChange:t,value:e.uiStore.contentPerspective},b.createElement("option",{value:"transformed"},"Show transformed content"),b.createElement("option",{value:"original"},"Show original content"),b.createElement("option",{value:"client"},"Show the client's perspective"),b.createElement("option",{value:"server"},"Show the server's perspective")))}),LE=e=>{var t;const n=Ki(null===(t=e.matchedRuleData)||void 0===t?void 0:t.stepTypes)?b.createElement(dw,{ruleData:e.matchedRuleData,onClick:e.onRuleClicked}):b.createElement(Gp,null,"Inconsistent perspectives");return b.createElement(qp,null,n,b.createElement(BE,{uiStore:e.uiStore}))};var NE=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const UE=G.div`
    margin-top: auto;
`;let WE=class extends b.Component{get cardProps(){return this.props.uiStore.viewCardProps}render(){var e,t;const{exchange:n,onDelete:r,onScrollToEvent:o,onBuildRuleFromExchange:s,onPrepareToResendRequest:a,uiStore:i,accountStore:l,navigate:c}=this.props,d=l.user.isPaidUser(),{expandedViewCard:u}=i,p=d||(null===(e=n.apiSpec)||void 0===e?void 0:e.isBuiltInApi)?n.api:void 0,h=(null===(t=n.api)||void 0===t?void 0:t.matchedOperation())?(e=>{const t=!e.includes(" ")&&e.length>6?y.startCase(e):e;return t.length>75?t.slice(0,72).trimRight()+"…":t})(n.api.service.name):void 0,m=this.renderHeaderCard(n);if(u)return b.createElement(b.Fragment,null,m,this.renderExpandedCard(u,n,p));const g=n.downstream.isBreakpointed?this.renderBreakpointCards(n,h,p):this.renderNormalCards(n,h,p);return b.createElement(b.Fragment,null,b.createElement(Ov,null,m,g),b.createElement(hE,{event:n,onDelete:r,onScrollToEvent:o,onBuildRuleFromExchange:s,onPrepareToResendRequest:a,navigate:c,isPaidUser:d}))}renderHeaderCard(e){const{accountStore:t,navigate:n}=this.props,r=t.user.isPaidUser(),{getPro:o}=t,{requestBreakpoint:s,respondToBreakpointedRequest:a,responseBreakpoint:i,tags:l}=e.downstream;if(s)return b.createElement(mE,{key:"breakpoint-header",onCreateResponse:a,onResume:s.resume,onClose:s.close});if(i)return b.createElement(gE,{key:"breakpoint-header",onResume:i.resume,onClose:i.close});const c={key:"error-header",isPaidUser:r,getPro:o,navigate:n,createRuleFromRequest:this.createRuleFromRequest,ignoreError:this.ignoreError},d=Fv(l);return d&&!e.hideErrors?b.createElement(sE,Object.assign({type:d},c)):null}renderApiCard(e,t){return e?t?b.createElement(Nx,Object.assign({},this.cardProps.api,{apiName:e,apiExchange:t})):b.createElement(Ux,Object.assign({},this.cardProps.api,{apiName:e})):null}renderExpandedCard(e,t,n){return"requestBody"===e?this.renderRequestBody(t,n):"responseBody"===e&&(t.isSuccessfulExchange()||t.downstream.responseBreakpoint)?this.renderResponseBody(t,n):"webSocketMessages"===e&&t.isWebSocket()&&t.wasAccepted?this.renderWebSocketMessages(t):(f(`Expanded ${e}, but can't show anything`),null)}renderBreakpointCards(e,t,n){const{uiStore:r}=this.props,{requestBreakpoint:o}=e.downstream,s=[];if(o)s.push(b.createElement(PE,Object.assign({},this.cardProps.request,{exchange:e.downstream,onChange:o.updateMetadata}))),s.push(this.renderRequestBody(e,n));else{const o=e.downstream.responseBreakpoint,a=this.renderTransformCard();a&&s.push(a),s.push(this.renderApiCard(t,n)),s.push(b.createElement(pw,Object.assign({},this.cardProps.request,{matchedRuleData:a?void 0:this.matchedRuleData,onRuleClicked:this.jumpToRule,exchange:e}))),e.hasRequestBody()&&s.push(this.renderRequestBody(e,n)),s.push(b.createElement(IE,Object.assign({},this.cardProps.response,{exchange:e.downstream,onChange:o.updateMetadata,theme:r.theme}))),s.push(this.renderResponseBody(e,n))}return s}renderNormalCards(e,t,n){var r,o,s;const{uiStore:a}=this.props,{response:i}=e,l=[],c=this.renderTransformCard();return c&&l.push(c),l.push(this.renderApiCard(t,n)),l.push(b.createElement(pw,Object.assign({},this.cardProps.request,{matchedRuleData:c?void 0:this.matchedRuleData,onRuleClicked:this.jumpToRule,exchange:e}))),e.hasRequestBody()&&l.push(this.renderRequestBody(e,n)),(null===(r=e.request.rawTrailers)||void 0===r?void 0:r.length)&&l.push(b.createElement(fw,Object.assign({},this.cardProps.requestTrailers,{type:"request",httpVersion:e.httpVersion,requestUrl:e.request.parsedUrl,trailers:e.request.rawTrailers}))),"aborted"===i?l.push(b.createElement(gw,{key:this.cardProps.response.key,cardProps:this.cardProps.response,exchange:e})):i&&(l.push(b.createElement(hw,Object.assign({},this.cardProps.response,{httpVersion:e.httpVersion,response:i,requestUrl:e.request.parsedUrl,apiExchange:n,theme:a.theme}))),e.hasResponseBody()&&l.push(this.renderResponseBody(e,n)),e.isSuccessfulExchange()&&(null===(s=null===(o=e.response)||void 0===o?void 0:o.rawTrailers)||void 0===s?void 0:s.length)&&l.push(b.createElement(fw,Object.assign({},this.cardProps.responseTrailers,{type:"response",httpVersion:e.httpVersion,requestUrl:e.request.parsedUrl,trailers:e.response.rawTrailers})))),e.isWebSocket()?e.wasAccepted&&(l.push(this.renderWebSocketMessages(e)),e.closeState&&l.push(b.createElement(px,Object.assign({},this.cardProps.webSocketClose,{theme:a.theme,closeState:e.closeState})))):e.tags.some(e=>e.startsWith("client-error:"))||(l.push(b.createElement(UE,{key:"divider"})),l.push(b.createElement(Iw,Object.assign({exchange:e},this.cardProps.performance))),l.push(b.createElement(Zw,Object.assign({exchange:e},this.cardProps.export)))),l}renderTransformCard(){var e;const{uiStore:t}=this.props;return!!(null===(e=this.props.exchange.upstream)||void 0===e?void 0:e.wasTransformed)&&b.createElement(LE,{key:"transform",matchedRuleData:this.matchedRuleData,onRuleClicked:this.jumpToRule,uiStore:t})}renderRequestBody(e,t){var n;const{request:r}=e,{requestBreakpoint:o}=e.downstream;return o?b.createElement(jE,Object.assign({},this.requestBodyParams(),{body:o.inProgressResult.body,rawHeaders:o.inProgressResult.rawHeaders,onChange:o.updateBody})):b.createElement(gx,Object.assign({},this.requestBodyParams(),{isPaidUser:this.props.accountStore.user.isPaidUser(),url:e.request.url,message:r,apiBodySchema:null===(n=null==t?void 0:t.request)||void 0===n?void 0:n.bodySchema}))}renderResponseBody(e,t){var n;const{response:r}=e,{responseBreakpoint:o}=e.downstream;return o?b.createElement(jE,Object.assign({},this.responseBodyParams(),{body:o.inProgressResult.body,rawHeaders:o.inProgressResult.rawHeaders,onChange:o.updateBody})):b.createElement(gx,Object.assign({},this.responseBodyParams(),{isPaidUser:this.props.accountStore.user.isPaidUser(),url:e.request.url,message:r,apiBodySchema:null===(n=null==t?void 0:t.response)||void 0===n?void 0:n.bodySchema}))}renderWebSocketMessages(e){const t=e.request.url.split("/"),n=t[2].split(":")[0],r=t.length>=2?t[t.length-1]:void 0,o=`${n}${r?`- ${r}`:""} - websocket`;return b.createElement(Zb,Object.assign({},this.cardProps.webSocketMessages,{key:`${this.cardProps.webSocketMessages.key}-${this.props.exchange.id}`,streamId:this.props.exchange.id,cardHeading:"WebSocket Messages",editorNode:this.props.streamMessageEditor,isPaidUser:this.props.accountStore.user.isPaidUser(),filenamePrefix:o,messages:e.messages,onClearMessages:this.clearMessages}))}requestBodyParams(){return Object.assign(Object.assign({},this.cardProps.requestBody),{title:"Request Body",direction:"right",editorKey:`${this.props.exchange.id}-${this.props.perspective}-request`,editorNode:this.props.requestEditor})}responseBodyParams(){return Object.assign(Object.assign({},this.cardProps.responseBody),{title:"Response Body",direction:"left",editorKey:`${this.props.exchange.id}-${this.props.perspective}-response`,editorNode:this.props.responseEditor})}createRuleFromRequest(){const{exchange:e,rulesStore:t,navigate:n}=this.props,r=function(e,t){return{id:crypto.randomUUID(),type:"http",activated:!0,matchers:Ju(t),steps:[new ua(e)],completionChecker:new Ss.zO.Always}}(t,e.request);t.draftRules.items.unshift(r),n(`/modify/${r.id}`)}get matchedRuleData(){const{exchange:e,rulesStore:t}=this.props,{matchedRule:n}=e;if(!n)return;const r=_s(t.draftRules,{id:n.id});if(!r)return{stepTypes:n.stepTypes,status:"deleted"};const o=r.steps.map(e=>Hi(e));return y.isEqual(o,n.stepTypes)?{stepTypes:n.stepTypes,status:"unchanged"}:{stepTypes:n.stepTypes,status:"modified-types"}}jumpToRule(){const{navigate:e,exchange:t}=this.props,{matchedRule:n}=t;n&&e(`/modify/${n.id}`)}ignoreError(){const{exchange:e}=this.props;e.hideErrors=!0}clearMessages(){const{exchange:e}=this.props;e.isWebSocket()&&e.downstream.clearMessages()}};NE([w.action.bound],WE.prototype,"createRuleFromRequest",null),NE([w.computed],WE.prototype,"matchedRuleData",null),NE([w.action.bound],WE.prototype,"jumpToRule",null),NE([w.action.bound],WE.prototype,"ignoreError",null),NE([w.action.bound],WE.prototype,"clearMessages",null),WE=NE([(0,E.WQ)("uiStore"),(0,E.WQ)("accountStore"),(0,E.WQ)("rulesStore"),E.PA],WE);const zE=G(is).attrs({icon:ss.Android.icon})`
    float: left;
    margin-right: 10px;
    margin-top: 3px;
    color: ${ss.Android.color};
`;class _E extends b.Component{render(){const{failure:e,certPath:t}=this.props,n=e.remoteIpAddress?Xd(e.remoteIpAddress).split(" "):void 0,r=null==n?void 0:n[0],o=null==n?void 0:n.slice(1).join(" ");return b.createElement(Ov,null,b.createElement(qp,null,b.createElement("header",null,b.createElement("h1",null,"Failed HTTPS Request")),b.createElement(hh,null,"Details"),b.createElement(bh,null,b.createElement("p",null,{closed:b.createElement(b.Fragment,null,"This connection was aborted and closed before any HTTP request was sent."),reset:b.createElement(b.Fragment,null,"This connection was aborted and reset before any HTTP request was sent."),"cert-rejected":b.createElement(b.Fragment,null,"This connection was aborted, before any HTTP request was sent, because the client did not trust the HTTP Toolkit certificate."),"no-shared-cipher":b.createElement(b.Fragment,null,"This connection was aborted, before any HTTP request was sent, because the client failed to agree on a TLS configuration."),unknown:b.createElement(b.Fragment,null,"This connection was aborted, before any HTTP request was sent, due to a TLS error.")}[e.failureCause]),r&&o&&b.createElement("p",null,"The request was sent by ",b.createElement(fh,null,r)," ",o,".")),b.createElement(hh,null,"Cause"),b.createElement(bh,null,"cert-rejected"===e.failureCause?b.createElement("p",null,"This means that the client hasn't yet been fully configured to work with HTTP Toolkit. It has the proxy settings, but it doesn't trust our certificate authority (CA), so we can't intercept its HTTPS traffic."):"no-shared-cipher"===e.failureCause?b.createElement(b.Fragment,null,b.createElement("p",null,"This usually means that the client hasn't yet been 100% configured to work with HTTP Toolkit, although it's also possible that it has an unusual TLS setup."),b.createElement("p",null,"The former case is much more likely. That would mean that the client has the right proxy settings, but doesn't trust our certificate authority (CA), so we can't imitate HTTPS sites and we can't collect or see its HTTPS traffic.")):b.createElement(b.Fragment,null,b.createElement("p",null,"This could be caused by a few things:"),b.createElement("ul",null,b.createElement("li",null,"The client might no longer want to make the request"),b.createElement("li",null,"The client might have connection issues"),b.createElement("li",null,"The client might not trust our HTTPS certificate")))),b.createElement(hh,null,"Solutions"),b.createElement(bh,null,b.createElement("p",null,"cert-rejected"===e.failureCause?b.createElement(b.Fragment,null,"To resolve this, you need to configure the client to trust your HTTP Toolkit CA."):"no-shared-cipher"===e.failureCause?b.createElement(b.Fragment,null,"You probably need to ensure the client is configured to trust the HTTP Toolkit CA."):b.createElement(b.Fragment,null,"In the first two cases, this is not related to HTTP Toolkit. In the third case, you need to configure the client to trust your HTTP Toolkit CA.")),b.createElement("p",null,"How you do this depends on the specific client. Opening the certificate file on the device may prompt you to trust it device-wide, or you may need a specific option for the HTTP library or tool that's being used."),b.createElement("p",null,"Your HTTP Toolkit certificate is stored on your machine at ",b.createElement(fh,null,t)),b.createElement(zE,null),b.createElement("p",null,b.createElement("strong",null,"For Android devices"),", modern apps will not trust your installed CA certificates by default. For apps targeting API level 24+, the app must opt in to trusting user CA certificates, or you need to inject a system certificate (only possible on rooted devices and emulators)."),b.createElement("p",null,"Trusting user CA certificates in your own app is a small & simple configuration change, see ",b.createElement("a",{href:"https://httptoolkit.com/docs/guides/android#intercepting-traffic-from-your-own-android-app"},"the HTTP Toolkit docs"),' for more details. Alternatively HTTP Toolkit can inject the system certificate for you automatically, on devices that support this, by connecting the device with ADB and using the "Android device via ADB" interception option.'),b.createElement("p",null,"Take a look at the ",b.createElement("a",{href:"https://httptoolkit.com/docs/guides/android/"},"Android interception guide")," for more information."))))}}class VE extends b.Component{render(){const{tunnel:e}=this.props,t=Xd(e.remoteIpAddress).split(" "),n=t[0],r=t.slice(1).join(" ");return b.createElement(Ov,null,b.createElement(qp,null,b.createElement("header",null,b.createElement("h1",null,"TLS Tunnel")),b.createElement(hh,null,"Details"),b.createElement(bh,null,b.createElement("p",null,"This TLS connection was not intercepted by HTTP Toolkit, as it is excluded from interception by the TLS passthrough configuration in your settings.")),b.createElement(bh,null,b.createElement("p",null,"The connection was made from ",b.createElement(fh,null,n,":",e.remotePort)," ",r," to ",b.createElement(fh,null,e.upstreamHostname,":",e.upstreamPort),"."))))}}const KE=(0,E.PA)(e=>{var{dataChannel:t,isPaidUser:n,streamMessageEditor:r}=e,o=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["dataChannel","isPaidUser","streamMessageEditor"]);return b.createElement(Zb,Object.assign({},o,{key:t.id,streamId:t.id,cardHeading:"DataChannel Messages",streamLabel:t.label,editorNode:r,isPaidUser:n,filenamePrefix:"DataChannel "+(t.label||t.channelId),messages:t.messages}))}),JE=(0,E.PA)(e=>b.createElement(eE,null,b.createElement(nE,null,"Part of a WebRTC Connection from ",b.createElement(fh,null,e.connection.clientURL)," to ",b.createElement(fh,null,e.connection.remoteURL)),b.createElement(oE,{onClick:e.hideConnection,onKeyPress:Rp},"Hide"),b.createElement(rE,{onClick:e.jumpToConnection,onKeyPress:Rp},"Jump to connection")));var QE=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};let GE=class extends b.Component{constructor(){super(...arguments),this.isConnectionHidden=!1,this.jumpToConnection=()=>{const{rtcConnection:e}=this.props.dataChannel;this.props.navigate(`/view/${e.id}`)}}hideConnection(){this.isConnectionHidden=!0}render(){const{dataChannel:e,streamMessageEditor:t,accountStore:n}=this.props;return b.createElement(b.Fragment,null,!this.isConnectionHidden&&b.createElement(JE,{connection:e.rtcConnection,hideConnection:this.hideConnection,jumpToConnection:this.jumpToConnection}),b.createElement(KE,{dataChannel:e,isPaidUser:n.user.isPaidUser(),streamMessageEditor:t,collapsed:!1,expanded:!0,onExpandToggled:this.jumpToConnection,onCollapseToggled:void 0,ariaLabel:"RTC Data Messages Section"}))}};QE([w.observable],GE.prototype,"isConnectionHidden",void 0),QE([w.action.bound],GE.prototype,"hideConnection",null),GE=QE([(0,E.WQ)("accountStore"),E.PA],GE);var YE=n(24919),XE=n(18995),ZE=n(41941),eC=n(9237),tC=n(67694),nC=n(99150),rC=n(16491);const oC=er("data"),sC=er("rtc-media"),aC=G.svg`
    background-color: ${e=>e.theme.mainLowlightBackground};
    color: ${e=>e.theme.mainColor};

    .axis-label {
        font-size: 15px;
    }

    .axis-tick text {
        font-size: 12px;
    }
`,iC=({width:e,height:t,graphPaddingPx:n,data:r})=>{var o;const s=n,a=t-n,i=a-s,l=85+n,c=e-l,d=(0,XE.A)().domain([0,r.length-1]).range([0,c]),u=null!==(o=v().max(r.map(e=>Math.max(e.sent,e.received))))&&void 0!==o?o:0,p=(0,XE.A)().domain([0,u]).range([i/2,s]),h=(0,XE.A)().domain([0,u]).range([i/2,a]),m=r.map(e=>e.sent),g=r.map(e=>e.received);return b.createElement(aC,{width:e,height:t},b.createElement(nC.A,{left:l},b.createElement(lC,{label:"Received",data:g,xScale:d,yScale:h,fill:sC}),b.createElement(lC,{label:"Sent",data:m,xScale:d,yScale:p,fill:oC})))},lC=e=>b.createElement(b.Fragment,null,b.createElement(rC.A,{scale:e.yScale,label:e.label,labelOffset:55,labelClassName:"axis-label",tickFormat:e=>Jt(e.valueOf()),tickClassName:"axis-tick",numTicks:6}),b.createElement(ZE.A,{data:e.data,x:(t,n)=>e.xScale(n),y:t=>{var n;return null!==(n=e.yScale(t))&&void 0!==n?n:0},yScale:e.yScale,fill:e.fill,curve:tC.G}),b.createElement(eC.A,{data:e.data,x:(t,n)=>e.xScale(n),y:t=>{var n;return null!==(n=e.yScale(t))&&void 0!==n?n:0},stroke:"#222",strokeWidth:1.5,curve:tC.G}));var cC=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const dC=(0,E.PA)(e=>{const{mediaTrack:t}=e,n=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["mediaTrack"]);return b.createElement(Dp,Object.assign({},n),b.createElement("header",null,b.createElement(_v,null,b.createElement(Vv,{expanded:n.expanded,onClick:n.onExpandToggled})),b.createElement(Gp,{color:oC},Jt(t.totalBytesSent)," sent"),b.createElement(Gp,{color:sC},Jt(t.totalBytesReceived)," received"),b.createElement(Fp,{onCollapseToggled:n.onCollapseToggled},"RTC ",t.type)),b.createElement(uC,null,b.createElement(pC,{mediaTrack:t})))}),uC=G.div`
    margin: 0 -20px -20px -20px;
    border-top: solid 1px ${e=>e.theme.containerBorder};
    background-color: ${e=>e.theme.highlightBackground};

    position: relative;
    flex-grow: 1;

    min-height: 400px;

    /* Fix the ParentSize measuring div to match our size exactly. */
    > div {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
`;let pC=class extends b.Component{get graphData(){const{stats:e}=this.props.mediaTrack;return y.map(e,e=>({sent:e.sentDelta,received:e.receivedDelta}))}render(){return b.createElement(YE.A,null,e=>b.createElement(E.nu,null,()=>b.createElement(iC,{width:e.width,height:e.height,graphPaddingPx:10,data:this.graphData})))}};cC([w.computed],pC.prototype,"graphData",null),pC=cC([E.PA],pC);var hC=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};let mC=class extends b.Component{constructor(){super(...arguments),this.isConnectionHidden=!1,this.jumpToConnection=()=>{const{rtcConnection:e}=this.props.mediaTrack;this.props.navigate(`/view/${e.id}`)}}hideConnection(){this.isConnectionHidden=!0}render(){const{mediaTrack:e}=this.props;return b.createElement(b.Fragment,null,!this.isConnectionHidden&&b.createElement(JE,{connection:e.rtcConnection,hideConnection:this.hideConnection,jumpToConnection:this.jumpToConnection}),b.createElement(dC,{collapsed:!1,expanded:!0,onExpandToggled:this.jumpToConnection,onCollapseToggled:void 0,ariaLabel:"RTC Media Stream Section",key:e.id,mediaTrack:e}))}};hC([w.observable],mC.prototype,"isConnectionHidden",void 0),hC([w.action.bound],mC.prototype,"hideConnection",null),mC=hC([E.PA],mC);var gC=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const fC=G.div`
    padding: 3px 0 12px 0;
`;let yC=class extends b.Component{get hasData(){const{streams:e}=this.props.connection;return e.some(e=>e.isRTCDataChannel())}get hasAudio(){const{streams:e}=this.props.connection;return e.some(e=>e.isRTCMediaTrack()&&"audio"===e.type)}get hasVideo(){const{streams:e}=this.props.connection;return e.some(e=>e.isRTCMediaTrack()&&"video"===e.type)}render(){const e=this.props,{connection:t}=e,n=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["connection"]);return b.createElement(Dp,Object.assign({},n),b.createElement("header",null,b.createElement(Wx,{source:t.source}),this.hasData&&b.createElement(Gp,{color:er("data")},"Data"),this.hasVideo&&b.createElement(Gp,{color:er("image")},"Video"),this.hasAudio&&b.createElement(Gp,{color:er("css")},"Audio"),b.createElement(Fp,{onCollapseToggled:n.onCollapseToggled},"WebRTC Connection")),b.createElement(fC,null,b.createElement(uh,null,"Connection type: "),b.createElement(ph,null,"host"===t.remoteCandidate.type?"Direct":"relay"===t.remoteCandidate.type?"TURN-relayed":"srflx"===t.remoteCandidate.type?"STUN-directed":"Peer-reflexive"," ",t.remoteCandidate.protocol.toUpperCase())),b.createElement(fC,null,b.createElement(uh,null,"From: "),b.createElement(gh,null,t.clientURL)),b.createElement(fC,null,b.createElement(uh,null,"To: "),b.createElement(gh,null,t.remoteURL)),t.sourceURL&&b.createElement(b.Fragment,null,b.createElement(hh,null,"Source page: "),b.createElement(ax,{contentName:"URL components",prefixTrigger:!0},b.createElement(dx,null,b.createElement(gh,null,t.sourceURL.toString())),b.createElement(ux,null,b.createElement(cw,{url:t.sourceURL})))),t.source!==xs&&b.createElement(b.Fragment,null,b.createElement(hh,null,"Client: "),b.createElement(ax,{contentName:"source details",prefixTrigger:!0},b.createElement(dx,null,b.createElement(gh,null,t.source.ua)),b.createElement(ux,null,b.createElement("p",null,t.source.description)))))}};gC([w.computed],yC.prototype,"hasData",null),gC([w.computed],yC.prototype,"hasAudio",null),gC([w.computed],yC.prototype,"hasVideo",null),yC=gC([E.PA],yC);let vC=class extends b.Component{render(){const e=this.props,{connection:t,type:n,sessionDescription:r,editorNode:o}=e,s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["connection","type","sessionDescription","editorNode"]);return b.createElement(Dp,Object.assign({},s),b.createElement("header",null,b.createElement(Fp,{onCollapseToggled:s.onCollapseToggled},"local"===n?"Sent":"Received"," Session ",y.capitalize(r.type))),b.createElement(Ib,{showFullBorder:!s.expanded},b.createElement(Hb,{contentId:`${t.id}:${n}:${r.type}:sdp`,editorNode:this.props.editorNode,contentType:"text",expanded:!1,cache:t.cache},r.sdp)))}};vC=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a}([E.PA],vC);var bC=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};let xC=class extends b.Component{constructor(){super(...arguments),this.dataChannelEditors=this.dataChannels.map(()=>pf.KF()),this.streamCardState={}}get mediaTracks(){const{streams:e}=this.props.connection;return e.filter(e=>e.isRTCMediaTrack())}get dataChannels(){const{streams:e}=this.props.connection;return e.filter(e=>e.isRTCDataChannel())}toggleCollapse(e){var t,n;this.streamCardState[e]={collapsed:void 0===(null===(t=this.streamCardState[e])||void 0===t?void 0:t.collapsed)||!(null===(n=this.streamCardState[e])||void 0===n?void 0:n.collapsed)}}expandStream(e){this.props.navigate(`/view/${e}`)}render(){const{connection:e,uiStore:t,offerEditor:n,answerEditor:r,accountStore:o}=this.props,{localSessionDescription:s,remoteSessionDescription:a}=e,i="offer"===s.type,l=i?s:a,c=i?a:s,d=Object.assign(Object.assign({},t.viewCardProps.rtcSessionOffer),{direction:i?"right":"left"}),u=Object.assign(Object.assign({},t.viewCardProps.rtcSessionAnswer),{direction:i?"left":"right"});return b.createElement(Ov,null,b.createElement(yC,Object.assign({},t.viewCardProps.rtcConnection,{connection:e})),b.createElement(vC,Object.assign({},d,{connection:e,type:i?"local":"remote",sessionDescription:l,editorNode:n})),b.createElement(vC,Object.assign({},u,{connection:e,type:i?"remote":"local",sessionDescription:c,editorNode:r})),this.mediaTracks.map(e=>{var t;return b.createElement(dC,{key:e.id,mediaTrack:e,expanded:!1,collapsed:!!(null===(t=this.streamCardState[e.id])||void 0===t?void 0:t.collapsed),onCollapseToggled:this.toggleCollapse.bind(this,e.id),onExpandToggled:this.expandStream.bind(this,e.id),ariaLabel:"RTC Media Stream Section"})}),this.dataChannels.map((e,t)=>{var n;return b.createElement(KE,{key:e.id,dataChannel:e,isPaidUser:o.user.isPaidUser(),streamMessageEditor:this.dataChannelEditors[t],expanded:!1,collapsed:!!(null===(n=this.streamCardState[e.id])||void 0===n?void 0:n.collapsed),onCollapseToggled:this.toggleCollapse.bind(this,e.id),onExpandToggled:this.expandStream.bind(this,e.id),ariaLabel:"RTC Data Messages Section"})}),this.dataChannelEditors.map((e,t)=>b.createElement(pf.oj,{key:t,node:e},b.createElement(Hf,{contentId:null}))))}};bC([w.computed.struct],xC.prototype,"mediaTracks",null),bC([w.computed.struct],xC.prototype,"dataChannels",null),bC([w.observable],xC.prototype,"streamCardState",void 0),bC([w.action.bound],xC.prototype,"toggleCollapse",null),xC=bC([(0,E.WQ)("uiStore"),(0,E.WQ)("accountStore"),E.PA],xC);let wC=class extends b.Component{render(){const{tunnel:e}=this.props,t=Xd(e.remoteIpAddress).split(" "),n=t[0],r=t.slice(1).join(" "),o=this.props.uiStore.viewCardProps.rawTunnelPackets,s=b.createElement(Zb,Object.assign({isPaidUser:this.props.isPaidUser},o,{streamId:e.id,cardHeading:"Raw Data",streamLabel:e.upstreamHostname,editorNode:this.props.streamMessageEditor,filenamePrefix:`Raw Tunnel ${e.upstreamHostname} ${e.upstreamPort} ${e.id}`,messages:e.packets}));return o.expanded?s:b.createElement(Ov,null,b.createElement(qp,null,b.createElement("header",null,b.createElement("h1",null,"Raw Tunnel")),b.createElement(hh,null,"Details"),b.createElement(bh,null,b.createElement("p",null,"This connection was not intercepted by HTTP Toolkit, as it contains an unrecognized non-HTTP protocol, so was tunnelled directly to its destination.")),b.createElement(bh,null,b.createElement("p",null,"The connection was made from ",b.createElement(fh,null,n,":",e.remotePort)," ",r," to ",b.createElement(fh,null,e.upstreamHostname,":",e.upstreamPort),"."))),s,!e.isOpen()&&b.createElement(qp,null,b.createElement("header",null,b.createElement("h1",null,"Connection Closed")),b.createElement(bh,null,"This tunnel was closed ",e.timingEvents.disconnectTimestamp?b.createElement(b.Fragment,null,"after ",jt(e.timingEvents.disconnectTimestamp-e.timingEvents.connectTimestamp)):b.createElement(b.Fragment,null),".")))}};wC=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a}([(0,E.WQ)("uiStore"),E.PA],wC);const EC=G.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 100%;
    width: 100%;
    box-sizing: border-box;
    padding: 20px;

    background-color: ${e=>e.theme.containerBackground};
`,CC=G.div`
    position: relative;
    width: 80%;
    height: 160px;
`,TC=G.div`
    position: absolute;
    top: calc(50% - ${e=>4*e.index}px);
    transform: translateY(-50%) scaleX(${e=>1-.03*e.index});
    height: 40px;

    left: 0;
    right: 0;

    background-color: ${e=>e.dimRow?e.theme.mainBackground+Math.round(255*e.theme.lowlightTextOpacity).toString(16):e.theme.mainBackground};
    border-radius: 4px;
    box-shadow: 0 2px 10px 0 rgba(0,0,0,${e=>e.theme.boxShadowAlpha});

    opacity: ${e=>1-.12*e.index};
    z-index: ${e=>9-e.index};

    border-left: 5px solid ${e=>e.markerColor};

    display: flex;
    align-items: center;
    gap: 8px;
    padding: 2px 10px 0;
    box-sizing: border-box;

    font-size: ${e=>e.theme.textSize};
    color: ${e=>e.dimRow?e.theme.mainColor:e.theme.containerWatermark};

    overflow: hidden;
    white-space: nowrap;

    transition: top 0.15s ease-out,
                transform 0.15s ease-out,
                opacity 0.15s ease-out;
`,SC=G.div`
    position: absolute;
    top: calc(50% - 24px);
    left: 0;
    right: 0;
    transform: translateY(-50%);
    z-index: 10;

    text-align: center;
    color: ${e=>e.theme.mainColor};
    font-size: ${e=>e.theme.loudHeadingSize};
    font-weight: bold;
    letter-spacing: -1px;

    background: radial-gradient(
        ellipse at center,
        ${e=>e.theme.containerBackground}c0 30%,
        transparent 70%
    );
    padding: 50px 0;

    pointer-events: none;
`,PC=G.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
    margin-top: 30px;
    width: 60%;
    max-width: 360px;
`,kC=G(Wp)`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;
    padding: 10px 16px;
    font-size: ${e=>e.theme.textSize};

    > .fa-fw {
        width: 1.25em;
        flex-shrink: 0;
    }
`,RC=G(is).attrs({icon:["fas","thumbtack"]})`
    transition: transform 0.1s;

    ${e=>!e.pinned&&Y`
        transform: rotate(45deg);
    `}
`,OC=G.hr`
    width: 100%;
    margin: 36px 0;
    border: none;
    border: solid 1px ${e=>e.theme.mainColor};
`,HC=G.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
    width: 100%;
`,AC=G(Sx)`
    min-height: 0;

    > button {
        top: 50%;
    }
`,$C=(0,E.WQ)("accountStore","uiStore")((0,E.PA)(e=>{const{selectedEvents:t}=e,n=t.length,r=e.accountStore.user.isPaidUser(),o=t.filter(e=>e.isHttp()&&!e.isWebSocket()),s=o.length,a=n>0&&t.every(e=>e.isHttp()),i=t.every(e=>e.pinned),l=a?"request":"event",c=t.slice(-10).reverse(),d=b.createElement(b.Fragment,null,b.createElement(kC,{title:r?`(${xp}+M)`:"Requires HTTP Toolkit Pro",disabled:!r||0===s,onClick:e.onBuildRule},b.createElement(is,{icon:"Pencil",fixedWidth:!0}),"Create ",s," Matching Rule",1!==s?"s":""),b.createElement(kC,{title:r?"Export selected exchanges as a HAR file":"With Pro: export as HAR",disabled:!r||0===n,onClick:()=>{return e=void 0,n=void 0,o=function*(){const e=JSON.stringify(yield mu(t,{bodySizeLimit:1/0}));Sp(`HTTPToolkit_${ae.format(Date.now(),"YYYY-MM-DD_HH-mm")}.har`,"application/har+json;charset=utf-8",e)},new((r=void 0)||(r=Promise))(function(t,s){function a(e){try{l(o.next(e))}catch(e){s(e)}}function i(e){try{l(o.throw(e))}catch(e){s(e)}}function l(e){var n;e.done?t(e.value):(n=e.value,n instanceof r?n:new r(function(e){e(n)})).then(a,i)}l((o=o.apply(e,n||[])).next())});var e,n,r,o}},b.createElement(is,{icon:["fas","save"],fixedWidth:!0}),"Export as HAR"),b.createElement(kC,{title:r?"Export selected exchanges as a ZIP (HAR + snippets + manifest)":"With Pro: export as code snippet ZIP",disabled:!r||0===s,onClick:()=>e.uiStore.openZipExport(o)},b.createElement(is,{icon:["fas","file-archive"],fixedWidth:!0}),"Export code snippet ZIP"));return b.createElement(EC,null,b.createElement(CC,null,c.map((e,t)=>b.createElement(TC,{key:e.id,index:t,markerColor:cv(e),dimRow:lv(e)},function(e){var t,n;return e.isTlsFailure()||e.isTlsTunnel()?function(e){const t=sv(e),n=e.upstreamHostname||"unknown domain";return e.isTlsTunnel()?b.createElement(b.Fragment,null,e.isOpen()&&b.createElement(Vy,{status:void 0}),b.createElement(Ky,null,t," to ",n)):b.createElement(Ky,null,t," connection to ",n)}(e):e.isHttp()?(null===(t=e.apiSpec)||void 0===t?void 0:t.isBuiltInApi)&&(null===(n=e.api)||void 0===n?void 0:n.matchedOperation())?function(e){const{source:t}=e.request,n=e.api,r=y.startCase(n.operation.name.replace("eth_",""));return b.createElement(b.Fragment,null,b.createElement("span",null,n.service.shortName,": ",r),b.createElement(_y,Object.assign({},t.icon,{fixedWidth:!0})))}(e):function(e){const{method:t,source:n}=e.request,{host:r,pathname:o,search:s}=e.request.parsedUrl;return b.createElement(b.Fragment,null,b.createElement("span",null,t),b.createElement(Vy,{status:Xy(e)}),b.createElement(_y,Object.assign({},n.icon,{fixedWidth:!0})),b.createElement(Ky,null,r,o,s))}(e):e.isRTCConnection()?function(e){return b.createElement(b.Fragment,null,!e.closeState&&b.createElement(Vy,{status:void 0}),b.createElement("span",null,"WebRTC"),b.createElement(_y,Object.assign({},e.source.icon,{fixedWidth:!0})),b.createElement(Ky,null,e.clientURL," → ",e.remoteURL||"?"))}(e):e.isRTCDataChannel()||e.isRTCMediaTrack()?function(e){return e.isRTCDataChannel()?b.createElement(b.Fragment,null,!e.closeState&&b.createElement(Vy,{status:void 0}),b.createElement("span",null,"WebRTC Data"),b.createElement(_y,Object.assign({},e.rtcConnection.source.icon,{fixedWidth:!0})),b.createElement(Ky,null,e.label)):b.createElement(b.Fragment,null,!e.closeState&&b.createElement(Vy,{status:void 0}),b.createElement("span",null,"WebRTC Media"),b.createElement(_y,Object.assign({},e.rtcConnection.source.icon,{fixedWidth:!0})),b.createElement(Ky,null,e.direction," ",e.type))}(e):e.isRawTunnel()?function(e){const t=rv(e);return b.createElement(b.Fragment,null,e.isOpen()&&b.createElement(Vy,{status:void 0}),b.createElement(Ky,null,"Non-HTTP connection to ",t))}(e):""}(e))),b.createElement(SC,null,n," ",l,1!==n?"s":""," selected")),b.createElement(PC,null,b.createElement(kC,{title:`(${xp}+P)`,onClick:e.onPin},b.createElement(RC,{pinned:i,fixedWidth:!0}),"Toggle Pinning"),b.createElement(kC,{title:`(${xp}+Delete)`,onClick:e.onDelete},b.createElement(is,{icon:["far","trash-alt"],fixedWidth:!0}),"Delete ",n," ",$t(l),1!==n?"s":""),r?d:b.createElement(b.Fragment,null,b.createElement(OC,null),b.createElement(AC,{getPro:e.accountStore.getPro,source:"multi-selection-pane"},b.createElement(HC,null,d)))))}));var IC=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const qC=e=>{const t=e.selectedEvent;return Tp("Ctrl+[, Cmd+[",t=>{t.preventDefault(),e.onFocusLeft()},[e.onFocusLeft]),Tp("Ctrl+], Cmd+]",t=>{t.preventDefault(),e.onFocusRight()},[e.onFocusRight]),Tp("j",t=>{Cp(t.target)||e.moveSelection(1)},[e.moveSelection]),Tp("k",t=>{Cp(t.target)||e.moveSelection(-1)},[e.moveSelection]),Tp("Ctrl+p, Cmd+p",n=>{(t||e.isMultiSelection)&&(e.onPin(),n.preventDefault())},[t,e.isMultiSelection,e.onPin]),Tp("Ctrl+r, Cmd+r",n=>{e.isPaidUser&&(null==t?void 0:t.isHttp())&&!(null==t?void 0:t.isWebSocket())&&(e.onResend(t),n.preventDefault())},[t,e.onResend,e.isPaidUser]),Tp("Ctrl+m, Cmd+m",n=>{e.isPaidUser&&((null==t?void 0:t.isHttp())||e.isMultiSelection)&&(e.onBuildRule(),n.preventDefault())},[t,e.isMultiSelection,e.onBuildRule,e.isPaidUser]),Tp("Ctrl+Delete, Cmd+Delete, Ctrl+Backspace, Cmd+Backspace",n=>{Cp(n.target)||(t||e.isMultiSelection)&&e.onDelete()},[t,e.isMultiSelection,e.onDelete]),Tp("Ctrl+Shift+Delete, Cmd+Shift+Delete, Ctrl+Shift+Backspace, Cmd+Shift+Backspace",t=>{e.onClear(),t.preventDefault()},[e.onClear]),Tp("Ctrl+f, Cmd+f",t=>{e.onStartSearch(),t.preventDefault()},[e.onStartSearch]),null},jC=["request","response","streamMessage"],DC={requestBody:e=>e.isHttp()&&(e.hasRequestBody()||!!e.downstream.requestBreakpoint),responseBody:e=>e.isHttp()&&(e.hasResponseBody()||!!e.downstream.responseBreakpoint),webSocketMessages:e=>e.isWebSocket()&&e.wasAccepted,rawTunnelPackets:e=>e.isRawTunnel()};let MC=class extends b.Component{constructor(){super(...arguments),this.editors=jC.reduce((e,t)=>Object.assign(Object.assign({},e),{[t]:pf.KF()}),{}),this.searchInputRef=b.createRef(),this.listRef=b.createRef(),this.splitPaneRef=b.createRef(),this.contextMenuBuilder=new Sv(this.props.accountStore,this.props.uiStore,()=>this.selectedEvents,{onPin:this.onPin,onDelete:this.onDelete,onDeleteSelection:this.onDeleteSelection,onBuildRuleFromExchange:this.onBuildRuleFromExchange,onBuildRuleFromSelectedExchanges:this.onBuildRuleFromSelectedExchanges,onPrepareToResendRequest:this.onPrepareToResendRequest,onAddFilter:this.onAddSearchFilter}),this.focusLeftPane=()=>{var e;null===(e=this.listRef.current)||void 0===e||e.focusList()},this.focusRightPane=()=>{var e;const t=null===(e=this.splitPaneRef.current)||void 0===e?void 0:e.pane2,n=null==t?void 0:t.querySelector('[tabindex]:not([tabindex="-1"])');null==n||n.focus()},this.lastActiveIndex=-1}get splitDirection(){return yp.width>=$?"vertical":"horizontal"}get confirmedSearchFilters(){return this.props.uiStore.activeFilterSet}get currentSearchFilters(){var e;return null!==(e=this.searchFiltersUnderConsideration)&&void 0!==e?e:this.confirmedSearchFilters}get filteredEventState(){const{events:e}=this.props.eventsStore,t=0===this.currentSearchFilters.length?e:e.filter(e=>e.isHttp()&&e.wasTransformed?this.currentSearchFilters.every(t=>t.matches(e.downstream)||t.matches(e.upstream)):this.currentSearchFilters.every(t=>t.matches(e)));return{filteredEvents:t,filteredEventCount:[t.length,e.length]}}get selectedEvent(){const{selectedEventIds:e}=this.props.uiStore;if(1!==e.size)return;const t=e.values().next().value;return this.props.eventsStore.eventsList.getById(t)}get isMultiSelection(){return this.props.uiStore.selectedEventIds.size>1}get isRightPaneVisible(){return this.isMultiSelection||void 0!==this.selectedEvent}get selectedEvents(){const{selectedEventIds:e}=this.props.uiStore;if(0===e.size)return[];const{eventsList:t}=this.props.eventsStore,n=[];for(const r of e){const e=t.getById(r);e&&n.push(e)}return n}get selectedExchange(){var e;const{contentPerspective:t}=this.props.uiStore;if(this.selectedEvent&&this.selectedEvent.isHttp())return"client"===t?this.selectedEvent.downstream:"server"===t?null!==(e=this.selectedEvent.upstream)&&void 0!==e?e:this.selectedEvent.downstream:"original"===t?this.selectedEvent.original:"transformed"===t?this.selectedEvent.transformed:Rt(t)}componentDidMount(){requestAnimationFrame(()=>{var e;this.props.eventId&&(this.props.uiStore.selectSingleEvent(this.props.eventId),this.selectionAnchorId=this.props.eventId,this.selectedEvent&&this.onScrollToEvent(this.selectedEvent)),null===(e=this.listRef.current)||void 0===e||e.focusListWindow()}),(0,E.bH)(this,(0,w.observe)(this,"isRightPaneVisible",({oldValue:e,newValue:t})=>{"horizontal"===this.splitDirection&&!e&&t&&setTimeout(()=>{var e;const t=this.props.uiStore.activeEventId;if(!t)return;const n=this.props.eventsStore.eventsList.getById(t);n&&(null===(e=this.listRef.current)||void 0===e||e.scrollToEvent(n))},50)})),(0,E.bH)(this,(0,w.autorun)(()=>{if(0===this.props.uiStore.selectedEventIds.size)return;const e=this.selectedEvent;if(!e&&1===this.props.uiStore.selectedEventIds.size)return void this.onSelected(void 0);const{expandedViewCard:t}=this.props.uiStore;t&&e&&(DC[t](e)||(0,w.runInAction)(()=>{this.props.uiStore.expandedViewCard=void 0}))})),(0,E.bH)(this,(0,w.observe)(this,"filteredEventState",({newValue:e,oldValue:t})=>{const n=e.filteredEvents,r=null==t?void 0:t.filteredEvents;r&&r!==n&&r!==this.props.eventsStore.events&&(r.length=0)}))}componentDidUpdate(e){this.props.eventId&&this.props.eventId!==e.eventId&&(this.props.uiStore.selectedEventIds.has(this.props.eventId)||(this.props.uiStore.selectSingleEvent(this.props.eventId),this.selectionAnchorId=this.props.eventId))}isSendAvailable(){return je(Fe.value,Ye)}render(){const{isPaused:e,events:t}=this.props.eventsStore,{certPath:n}=this.props.proxyStore,r=this.props.accountStore.user.isPaidUser(),{filteredEvents:o,filteredEventCount:s}=this.filteredEventState;let a;if(this.isMultiSelection)a=b.createElement($C,{selectedEvents:this.selectedEvents,onPin:this.onPin,onDelete:this.onDeleteSelection,onBuildRule:this.onBuildRuleFromSelectedExchanges});else if(this.selectedEvent)if(this.selectedEvent.isHttp())a=b.createElement(WE,{exchange:this.selectedExchange,perspective:this.props.uiStore.contentPerspective,requestEditor:this.editors.request,responseEditor:this.editors.response,streamMessageEditor:this.editors.streamMessage,navigate:this.props.navigate,onDelete:this.onDelete,onScrollToEvent:this.onScrollToCenterEvent,onBuildRuleFromExchange:this.onBuildRuleFromExchange,onPrepareToResendRequest:this.isSendAvailable()?this.onPrepareToResendRequest:void 0});else if(this.selectedEvent.isTlsFailure())a=b.createElement(_E,{failure:this.selectedEvent,certPath:n});else if(this.selectedEvent.isTlsTunnel())a=b.createElement(VE,{tunnel:this.selectedEvent});else if(this.selectedEvent.isRTCDataChannel())a=b.createElement(GE,{dataChannel:this.selectedEvent,streamMessageEditor:this.editors.streamMessage,navigate:this.props.navigate});else if(this.selectedEvent.isRTCMediaTrack())a=b.createElement(mC,{mediaTrack:this.selectedEvent,navigate:this.props.navigate});else if(this.selectedEvent.isRTCConnection())a=b.createElement(xC,{connection:this.selectedEvent,offerEditor:this.editors.request,answerEditor:this.editors.response,navigate:this.props.navigate});else{if(!this.selectedEvent.isRawTunnel())throw new kt(this.selectedEvent);a=b.createElement(wC,{tunnel:this.selectedEvent,streamMessageEditor:this.editors.streamMessage,isPaidUser:r})}else a="vertical"===this.splitDirection?b.createElement(mf,{key:"details",icon:"ArrowLeft"},"Select an exchange to see the full details."):null;const i="vertical"===this.splitDirection?300:200;return b.createElement("div",{className:this.props.className},b.createElement(qC,{isPaidUser:r,selectedEvent:this.selectedEvent,isMultiSelection:this.isMultiSelection,moveSelection:this.moveSelection,onFocusLeft:this.focusLeftPane,onFocusRight:this.focusRightPane,onPin:this.onPin,onResend:this.onPrepareToResendRequest,onBuildRule:this.onBuildRuleFromSelectedExchanges,onDelete:this.onDeleteSelection,onClear:this.onForceClear,onStartSearch:this.onStartSearch}),b.createElement(hf,{ref:this.splitPaneRef,split:this.splitDirection,primary:"second",defaultSize:"50%",minSize:i,maxSize:-i,hiddenPane:null===a?"2":void 0},b.createElement(FC,{"aria-label":"The collected events list pane","aria-keyshortcuts":`${wp}+[`},b.createElement(Ty,{searchInputRef:this.searchInputRef,allEvents:t,filteredEvents:o,filteredCount:s,onFiltersConsidered:this.onSearchFiltersConsidered,onClear:this.onClear,onScrollToEnd:this.onScrollToEnd}),b.createElement(hv,{events:t,filteredEvents:o,selectedEventIds:this.props.uiStore.selectedEventIds,activeEventId:this.props.uiStore.activeEventId,isPaused:e,moveSelection:this.moveSelection,onSelected:this.onSelected,onToggleSelected:this.onToggleSelected,onRangeSelected:this.onRangeSelected,onSelectAll:this.onSelectAll,onClearSelection:this.onClearSelection,contextMenuBuilder:this.contextMenuBuilder,uiStore:this.props.uiStore,ref:this.listRef})),b.createElement(Pv,{"aria-label":"The selected event details pane","aria-keyshortcuts":`${wp}+]`},a)),Object.values(this.editors).map((e,t)=>b.createElement(pf.oj,{key:t,node:e},b.createElement(Hf,{contentId:null}))))}onSearchFiltersConsidered(e){this.searchFiltersUnderConsideration=e}onAddSearchFilter(e){this.searchFiltersUnderConsideration&&(this.searchFiltersUnderConsideration=[this.searchFiltersUnderConsideration[0],e,...this.searchFiltersUnderConsideration.slice(1)]),this.props.uiStore.activeFilterSet=[this.props.uiStore.activeFilterSet[0],e,...this.props.uiStore.activeFilterSet.slice(1)]}onSelected(e){this.selectionBaseIds=void 0,this.props.uiStore.selectSingleEvent(null==e?void 0:e.id),this.selectionAnchorId=null==e?void 0:e.id,e&&this.props.navigate(`/view/${e.id}`)}onToggleSelected(e){this.selectionBaseIds=void 0,this.props.uiStore.toggleEventSelection(e.id),this.selectionAnchorId=e.id}onRangeSelected(e){this.extendSelectionTo(e)?this.onScrollToEvent(e):this.onSelected(e)}extendSelectionTo(e){const{filteredEvents:t}=this.filteredEventState,n=this.selectionAnchorId?t.findIndex(e=>e.id===this.selectionAnchorId):-1,r=t.findIndex(t=>t.id===e.id);if(-1===n||-1===r)return!1;this.selectionBaseIds||(this.selectionBaseIds=new Set(this.props.uiStore.selectedEventIds));const o=Math.min(n,r),s=Math.max(n,r),a=t.slice(o,s+1).map(e=>e.id);r<n&&a.reverse();const i=[...this.selectionBaseIds,...a];return this.props.uiStore.setSelectedEvents(i),this.props.uiStore.activeEventId=e.id,!0}onSelectAll(){this.selectionBaseIds=void 0;const{filteredEvents:e}=this.filteredEventState;this.props.uiStore.setSelectedEvents(e.map(e=>e.id))}onClearSelection(){this.selectionBaseIds=void 0,this.props.uiStore.clearSelection(),this.selectionAnchorId=void 0}moveSelection(e,t=!1){const{filteredEvents:n}=this.filteredEventState;if(0===n.length)return;const{activeEventId:r}=this.props.uiStore;let o;o=r?this.lastActiveIndex>=0&&this.lastActiveIndex<n.length&&n[this.lastActiveIndex].id===r?this.lastActiveIndex:y.findIndex(n,{id:r}):-1;const s=-1===o?e>=0?0:n.length-1:y.clamp(o+e,0,n.length-1),a=n[s];this.lastActiveIndex=s,t?this.extendSelectionTo(a):(this.selectionBaseIds=void 0,this.onSelected(a)),this.onScrollToEvent(a)}onPin(){const e=this.selectedEvents;if(0===e.length)return;const t=e.some(e=>!e.pinned);for(const n of e)n.pinned=t}onBuildRuleFromExchange(e){const{rulesStore:t,navigate:n}=this.props;if(!this.props.accountStore.user.isPaidUser())return;const r=Qu(e);t.draftRules.items.unshift(r),n(`/modify/${r.id}`)}onBuildRuleFromSelectedExchanges(){const{rulesStore:e,navigate:t}=this.props;if(!this.props.accountStore.user.isPaidUser())return;const n=this.selectedEvents.filter(e=>e.isHttp()&&!e.isWebSocket());if(0!==n.length)if(1===n.length){const r=Qu(n[0]);e.draftRules.items.unshift(r),t(`/modify/${r.id}`)}else{const r={id:crypto.randomUUID(),title:`Rules from ${n.length} requests`,items:n.map(e=>Qu(e))};e.draftRules.items.unshift(r),t(`/modify/${r.id}`)}}onPrepareToResendRequest(e){return t=this,n=void 0,o=function*(){const{sendStore:t,navigate:n}=this.props;this.props.accountStore.user.isPaidUser()&&(yield t.addRequestInputFromExchange(e),n("/send"))},new((r=void 0)||(r=Promise))(function(e,s){function a(e){try{l(o.next(e))}catch(e){s(e)}}function i(e){try{l(o.throw(e))}catch(e){s(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r(function(e){e(n)})).then(a,i)}l((o=o.apply(t,n||[])).next())});var t,n,r,o}onDelete(e){const{filteredEvents:t}=this.filteredEventState;if(e.pinned&&!confirm("Delete this pinned exchange?"))return;const n=t.indexOf(e),r=e===this.selectedEvent;if(this.props.uiStore.selectedEventIds.delete(e.id),-1!==n&&r&&t.length>0){const e=t[Math.min(n+1,t.length-1)];this.onSelected(e)}this.props.eventsStore.deleteEvent(e)}onDeleteSelection(){if(this.isMultiSelection){const e=[...this.selectedEvents];if(0===e.length)return;if(e.some(e=>e.pinned)&&!confirm(`Delete ${e.length} events including pinned?`))return;this.onClearSelection();for(const t of e)this.props.eventsStore.deleteEvent(t)}else this.selectedEvent&&this.onDelete(this.selectedEvent)}onForceClear(){this.onClear(!1)}onClear(e=!0){const{events:t}=this.props.eventsStore,n=t.some(e=>!0===e.pinned),r=t.length>0&&t.every(e=>!0===e.pinned);if(r){if(!confirm("Delete pinned traffic?"))return}else if(e&&t.length>0&&!confirm(n?"Delete all non-pinned traffic?":"Delete all collected traffic?"))return;this.props.uiStore.clearSelection(),this.selectionAnchorId=void 0,this.props.eventsStore.clearInterceptedData(r)}onStartSearch(){var e;null===(e=this.searchInputRef.current)||void 0===e||e.focus()}onScrollToEvent(e){var t;null===(t=this.listRef.current)||void 0===t||t.scrollToEvent(e)}onScrollToCenterEvent(e){var t;null===(t=this.listRef.current)||void 0===t||t.scrollToCenterEvent(e)}onScrollToEnd(){var e;null===(e=this.listRef.current)||void 0===e||e.scrollToEnd()}};IC([w.computed],MC.prototype,"splitDirection",null),IC([w.observable],MC.prototype,"searchFiltersUnderConsideration",void 0),IC([he(250,{equals:w.comparer.structural})],MC.prototype,"currentSearchFilters",null),IC([he(10)],MC.prototype,"filteredEventState",null),IC([w.observable],MC.prototype,"selectionAnchorId",void 0),IC([w.computed],MC.prototype,"selectedEvent",null),IC([w.computed],MC.prototype,"isMultiSelection",null),IC([w.computed],MC.prototype,"isRightPaneVisible",null),IC([w.computed],MC.prototype,"selectedEvents",null),IC([w.computed],MC.prototype,"selectedExchange",null),IC([w.action.bound],MC.prototype,"onSearchFiltersConsidered",null),IC([w.action.bound],MC.prototype,"onAddSearchFilter",null),IC([w.action.bound],MC.prototype,"onSelected",null),IC([w.action.bound],MC.prototype,"onToggleSelected",null),IC([w.action.bound],MC.prototype,"onRangeSelected",null),IC([w.action.bound],MC.prototype,"onSelectAll",null),IC([w.action.bound],MC.prototype,"onClearSelection",null),IC([w.action.bound],MC.prototype,"moveSelection",null),IC([w.action.bound],MC.prototype,"onPin",null),IC([w.action.bound],MC.prototype,"onBuildRuleFromExchange",null),IC([w.action.bound],MC.prototype,"onBuildRuleFromSelectedExchanges",null),IC([w.action.bound],MC.prototype,"onPrepareToResendRequest",null),IC([w.action.bound],MC.prototype,"onDelete",null),IC([w.action.bound],MC.prototype,"onDeleteSelection",null),IC([w.action.bound],MC.prototype,"onForceClear",null),IC([w.action.bound],MC.prototype,"onClear",null),IC([w.action.bound],MC.prototype,"onStartSearch",null),IC([w.action.bound],MC.prototype,"onScrollToEvent",null),IC([w.action.bound],MC.prototype,"onScrollToCenterEvent",null),IC([w.action.bound],MC.prototype,"onScrollToEnd",null),MC=IC([(0,E.WQ)("eventsStore"),(0,E.WQ)("proxyStore"),(0,E.WQ)("uiStore"),(0,E.WQ)("accountStore"),(0,E.WQ)("rulesStore"),(0,E.WQ)("sendStore"),E.PA],MC);const FC=G.div`
    position: relative;

    height: 100%;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
`,BC=G(MC)`
    height: 100vh;
    position: relative;
`;var LC=n(97542);const NC=G.div`
    position: absolute;
    left: -31px;
    top: calc(50% - 1px);
    transform: translateY(-50%);

    cursor: row-resize;

    opacity: 0;

    :focus, :active {
        outline: none;
        opacity: 0.5;
        color: ${e=>e.theme.popColor};
    }

    && svg {
        margin: 0;
    }
`,UC=G(e=>b.createElement(NC,Object.assign({},e),b.createElement(is,{icon:["fas","grip-vertical"]})))``,WC=G.div`
    position: absolute;
    top: ${e=>e.topOffset}px;
    right: 10px;

    display: none; /* Made flex by container, on hover/expand */
    align-items: center;
`,zC=G(b.memo(e=>b.createElement(kh,{className:e.className,icon:e.icon,title:e.title,disabled:e.disabled,onClick:e.onClick})))`
    padding: 5px;
    margin: 0 5px;

    z-index: 10;

    font-size: 1.2em;

    > svg {
        display: block;
    }

    :disabled {
        opacity: 1;
        color: ${e=>e.theme.containerWatermark};
    }

    :not(:disabled) {
        cursor: pointer;
        color: ${e=>e.theme.secondaryInputColor};

        &:hover, &:focus {
            outline: none;
            color: ${e=>e.theme.popColor};
        }
    }
`,_C=G.div`
    position: absolute;
    top: calc(50% - ${e=>3*e.index}px);
    transform: translateY(-50%);
    height: 150%;

    left: calc(-5px + ${e=>10*e.index}px);
    right: ${e=>10*e.index}px;

    background-color: ${e=>e.theme.mainBackground};
    border-radius: 4px;
    box-shadow: 0 2px 10px 0 rgba(0,0,0,${e=>e.theme.boxShadowAlpha});

    opacity: ${e=>(e.activated?1:.6)-.2*e.index};
    z-index: ${e=>9-e.index};

    border-left: 5px solid ${e=>e.borderColor};
`,VC=G.div`
    display: none; /* Made flex by container, on hover/expand */
    flex-direction: row;
    align-items: center;
    margin-left: 5px;
`,KC=G(zC)`
    font-size: 1em;
    padding: 0;
`,JC=e=>b.createElement(WC,{topOffset:-2},b.createElement(zC,{title:e.toggleState?"Deactivate these rules":"Activate these rules",icon:["fas",e.toggleState?"toggle-on":"toggle-off"],onClick:e.onToggleActivation}),b.createElement(zC,{title:"Clone this rule",icon:["far","clone"],onClick:e.onClone}),b.createElement(zC,{title:"Delete these rules",icon:["far","trash-alt"],onClick:e.onDelete})),QC=G.header`
    ${e=>e.collapsed?"\n            margin-top: 22px;\n            margin-bottom: 17px;\n        ":"\n            margin-top: 10px;\n        "}

    width: calc(100% - 5px - ${e=>40*e.depth}px);
    margin-left: calc(5px + ${e=>40*e.depth}px);

    transition: padding 0.1s ease-out;
    padding: ${e=>e.collapsed?"5px 20px 5px 15px":"5px 20px 5px 0px"};
    box-sizing: border-box;

    display: flex;
    align-items: center;

    position: relative;

    cursor: pointer;
    &:focus {
        outline: none;
        > h2 > svg {
            color: ${e=>e.theme.popColor};
        }
    }
    &:hover, &:focus-within {
        ${UC} {
            opacity: 0.5;
        }

        ${VC}, ${WC} {
            display: flex;
        }

        ${e=>e.collapsed?Y`
                > ${_C} {
                    box-shadow: 0 2px 20px 0 rgba(0,0,0,${e=>e.theme.boxShadowAlpha});
                }
            `:"text-shadow: 0 0 5px rgba(0,0,0,0.2);"}
    }

    ${e=>e.editingTitle&&Y`
        ${VC} {
            display: flex;
        }
    `}

    font-size: ${e=>e.theme.headingSize};

    > h2 {
        user-select: none;
        z-index: 10;

        > svg {
            margin-right: 10px;
        }
    }

    input[type=text] {
        margin: -7px 0;
        position: relative;
        top: -3px;
    }
`,GC=(e,t)=>{const n={};return e&&e.transition&&(n.transition=e.transition.replace(/transform [\d.]+s/,"transform 100ms")),t.combineWith&&t.combineWith.endsWith("-tail")&&(n.opacity="1"),Object.assign(Object.assign({},e),n)},YC=e=>Ks(e).every(e=>e.activated),XC=(0,DE.PA)(e=>{const[t,n]=b.useState(!1),[r,o]=b.useState(e.group.title),s=(0,w.action)(()=>{e.group.collapsed=!e.group.collapsed}),a=()=>{n(!0),o(e.group.title)},i=e=>{o(e.target.value)},l=()=>{n(!1)},c=()=>{n(!1),e.updateGroupTitle(e.group.id,r)},d=YC(e.group),u=Op((0,w.action)(()=>{Js(e.group,e=>{e.activated=!d})})),p=Op(()=>e.deleteGroup(e.path)),h=Op(()=>e.cloneGroup(e.path));return b.createElement(LC.sx,{draggableId:e.group.id,index:e.index},(n,o)=>b.createElement(DE.nu,null,()=>b.createElement(QC,Object.assign({depth:e.path.length-1,"aria-expanded":!e.collapsed,collapsed:e.collapsed,editingTitle:t},n.draggableProps,{style:GC(n.draggableProps.style,o),ref:n.innerRef,onClick:s,onKeyPress:Rp,tabIndex:0}),b.createElement(UC,Object.assign({"aria-label":`Drag handle for the '${t?r:e.group.title}' rule group`},n.dragHandleProps)),b.createElement("h2",null,b.createElement(is,{icon:["fas",e.group.collapsed?"chevron-down":"chevron-up"]}),t?b.createElement(Kp,{autoFocus:!0,value:r,onChange:i,onClick:e=>e.stopPropagation(),onKeyPress:e=>{"Enter"===e.key&&c()}}):e.group.title),b.createElement(VC,null,t?b.createElement(b.Fragment,null,b.createElement(KC,{title:"Save group name",icon:["fas","save"],onClick:Op(c)}),b.createElement(KC,{title:"Reset group name",icon:["fas","undo"],onClick:Op(l)})):b.createElement(KC,{title:"Edit group name",icon:["fas","edit"],onClick:Op(a)})),b.createElement(JC,{toggleState:d,onToggleActivation:u,onClone:h,onDelete:p}),e.collapsed&&e.group.items.slice(0,5).map((e,t)=>{const n=Bs(e)?void 0:e.matchers[0],r=void 0===n?void 0:n instanceof Ss.yN.MethodMatcher?Ss.IT[n.method]:"unknown",o=void 0===r?"transparent":rr(r),s=Bs(e)?YC(e):e.activated;return b.createElement(_C,{key:t,index:t,borderColor:o,activated:s})}))))}),ZC=G.div`
    width: 100%;
    height: 30px;
    margin-bottom: -20px;
`,eT=e=>b.createElement(LC.sx,{draggableId:e.group.id+"-tail",index:e.index,isDragDisabled:!0},e=>b.createElement(ZC,Object.assign({},e.draggableProps,{ref:e.innerRef})));var tT=n(41859),nT=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};class rT extends b.Component{}function oT(e){const{matcher:t}=e;if(!t)return null;const n=Hi(t),r={matcher:t,matcherIndex:0,onChange:e.onChange,onInvalidState:y.noop};switch(n){case"eth-method":return b.createElement(cT,Object.assign({},r));case"ipfs-interaction":return b.createElement(dT,Object.assign({},r));case"wildcard":case"ws-wildcard":case"default-wildcard":case"default-ws-wildcard":case"rtc-wildcard":case"GET":case"POST":case"PUT":case"PATCH":case"DELETE":case"HEAD":case"OPTIONS":return null;default:throw new kt(n)}}function sT(e){const{matcher:t}=e,{matcherClass:n}=e;let r="matcher"in e?Hi(e.matcher):qi.get(e.matcherClass);if(!r)return null;if(Ui(r)){if(!t||Ui(t.type))throw new Error(`Cannot configure hidden matcher type ${r}`);r=t.type}const o={matcher:t,matcherIndex:e.matcherIndex,onChange:e.onChange,onInvalidState:e.onInvalidState||y.noop};switch(r){case"method":return b.createElement(lT,Object.assign({},o));case"host":return b.createElement(uT,Object.assign({},o));case"simple-path":return b.createElement(pT,Object.assign({},o));case"regex-path":return b.createElement(gT,Object.assign({},o));case"query":return b.createElement(yT,Object.assign({},o));case"exact-query-string":return b.createElement(vT,Object.assign({},o));case"header":return b.createElement(bT,Object.assign({},o));case"raw-body":return b.createElement(wT,Object.assign({},o));case"raw-body-includes":return b.createElement(ET,Object.assign({},o));case"json-body":return b.createElement(TT,Object.assign({},o));case"json-body-matching":return b.createElement(ST,Object.assign({},o));case"eth-params":return b.createElement(RT,Object.assign({},o));case"ipfs-arg":return b.createElement(kT,Object.assign({},o));case"has-rtc-data-channel":case"has-rtc-video-track":case"has-rtc-audio-track":case"has-rtc-media-track":return b.createElement(OT,Object.assign({matcherKey:r,matcherClass:n},o));default:throw new kt(r)}}const aT=G.label`
    margin: 5px 0;

    text-transform: uppercase;
    font-family: ${e=>e.theme.titleTextFamily};
    font-size: ${e=>e.theme.textSize};
    opacity: ${e=>e.theme.lowlightTextOpacity};
`,iT=G.div`
    display: flex;
    flex-direction: column;
`;let lT=class extends rT{constructor(){super(...arguments),this.fieldId=y.uniqueId(),this.method=Ss.IT.GET}componentDidMount(){(0,E.bH)(this,(0,w.autorun)(()=>{var e,t;const n=null!==(t=null===(e=this.props.matcher)||void 0===e?void 0:e.method)&&void 0!==t?t:Ss.IT.GET;(0,w.runInAction)(()=>{this.method=n})})),this.props.matcher||this.props.onChange(new ka(this.method))}render(){const{method:e}=this,{matcherIndex:t}=this.props,n=Ss.IT[e],r=Object.values(Ss.IT).filter(e=>!isNaN(Number(e)));return b.createElement(iT,{title:n?`Matches all ${n} requests`:void 0},void 0!==t&&b.createElement(aT,{htmlFor:this.fieldId},0!==t&&"and "," with method"),b.createElement(Jp,{id:this.fieldId,value:e,onChange:this.onChange},r.map(e=>b.createElement("option",{value:e,key:e},Ss.IT[e]))))}onChange(e){this.method=parseInt(e.currentTarget.value,10),this.props.onChange(new ka(this.method))}};nT([w.observable],lT.prototype,"method",void 0),nT([w.action.bound],lT.prototype,"onChange",null),lT=nT([E.PA],lT);let cT=class extends b.Component{constructor(){super(...arguments),this.fieldId=y.uniqueId(),this.method="eth_call"}componentDidMount(){(0,E.bH)(this,(0,w.autorun)(()=>{var e,t;const n=null!==(t=null===(e=this.props.matcher)||void 0===e?void 0:e.methodName)&&void 0!==t?t:"eth_call";(0,w.runInAction)(()=>{this.method=n})})),this.props.matcher||this.props.onChange(new Ma(this.method))}render(){const{method:e}=this;return b.createElement(iT,{title:`Match ${e} requests to Ethereum nodes`},b.createElement(aT,{htmlFor:this.fieldId},"Requesting a node to"),b.createElement(Jp,{id:this.fieldId,value:e,onChange:this.onChange},Object.keys(Da).map(e=>b.createElement("option",{value:e,key:e},Da[e]))))}onChange(e){this.method=e.currentTarget.value,this.props.onChange(new Ma(this.method))}};nT([w.observable],cT.prototype,"method",void 0),nT([w.action.bound],cT.prototype,"onChange",null),cT=nT([E.PA],cT);let dT=class extends b.Component{constructor(){super(...arguments),this.fieldId=y.uniqueId(),this.interaction="cat"}componentDidMount(){(0,E.bH)(this,(0,w.autorun)(()=>{var e,t;const n=null!==(t=null===(e=this.props.matcher)||void 0===e?void 0:e.interactionName)&&void 0!==t?t:"cat";(0,w.runInAction)(()=>{this.interaction=n})})),this.props.matcher||this.props.onChange(new Qa(this.interaction))}render(){const{interaction:e}=this;return b.createElement(iT,{title:`Match ${e} IPFS interactions`},b.createElement(aT,{htmlFor:this.fieldId},"Requesting an IPFS node to"),b.createElement(Jp,{id:this.fieldId,value:e,onChange:this.onChange},Object.keys(Ja).map(e=>b.createElement("option",{value:e,key:e},Ja[e]))))}onChange(e){this.interaction=e.currentTarget.value,this.props.onChange(new Qa(this.interaction))}};nT([w.observable],dT.prototype,"interaction",void 0),nT([w.action.bound],dT.prototype,"onChange",null),dT=nT([E.PA],dT);let uT=class extends rT{constructor(){super(...arguments),this.fieldId=y.uniqueId(),this.host=""}componentDidMount(){(0,E.bH)(this,(0,w.autorun)(()=>{const e=this.props.matcher?this.props.matcher.host:"";(0,w.runInAction)(()=>{this.host=e})}))}render(){const{host:e}=this,{matcherIndex:t}=this.props;return b.createElement(iT,{title:e?`Matches all requests to ${e}, regardless of their path or protocol`:void 0},void 0!==t&&b.createElement(aT,{htmlFor:this.fieldId},0!==t&&"and "," for host"),b.createElement(Kp,{id:this.fieldId,invalid:!!this.error,spellCheck:!1,value:e,onChange:this.onChange,placeholder:"A specific host to match: example.com"}))}onChange(e){this.host=e.target.value;try{this.props.onChange(new Ss.yN.HostMatcher(this.host)),this.error=void 0,e.target.setCustomValidity("")}catch(t){console.log(t),this.error=Pt(t),this.props.onInvalidState(),e.target.setCustomValidity(this.error.message)}e.target.reportValidity()}};nT([w.observable],uT.prototype,"error",void 0),nT([w.observable],uT.prototype,"host",void 0),nT([w.action.bound],uT.prototype,"onChange",null),uT=nT([E.PA],uT);let pT=class extends rT{constructor(){super(...arguments),this.fieldId=y.uniqueId(),this.url=""}componentDidMount(){void 0!==this.props.matcherIndex&&(0,E.bH)(this,(0,w.autorun)(()=>{const e=this.props.matcher?this.props.matcher.path:"";(0,w.runInAction)(()=>{this.url=e})}))}render(){const{url:e}=this,{matcherIndex:t}=this.props,n=/(\w+:\/\/)?([^/?#]+)?(\/[^?#]*)?/.exec(e)||[],[r,o,s,a]=n;return b.createElement(iT,{title:s||a?`Matches ${o?o.slice(0,-3):"any"} requests to ${s?`host ${s}`:"any host"} at ${a?`path ${a}`:"path /"}`:void 0},void 0!==t&&b.createElement(aT,{htmlFor:this.fieldId},0!==t&&"and "," for URL"),b.createElement(Kp,{id:this.fieldId,invalid:!!this.error,spellCheck:!1,value:e,onChange:this.onChange,placeholder:"A specific URL to match: http://example.com/abc"}))}ensurePathIsValid(){if(!this.url)throw new Error("The URL must not be empty");this.url.match(/\w+:\//)&&new URL(this.url)}onChange(e){this.url=e.target.value.split("#")[0];try{this.ensurePathIsValid();const[t,n]=this.url.split("?");void 0===n?this.props.onChange(new Ss.yN.FlexiblePathMatcher(t)):(void 0!==this.props.matcherIndex&&(this.url=t),this.props.onChange(new Ss.yN.FlexiblePathMatcher(t),new Ss.yN.ExactQueryMatcher("?"+n))),this.error=void 0,e.target.setCustomValidity("")}catch(t){console.log(t),this.error=Pt(t),this.props.onInvalidState(),e.target.setCustomValidity(this.error.message)}e.target.reportValidity()}};nT([w.observable],pT.prototype,"error",void 0),nT([w.observable],pT.prototype,"url",void 0),nT([w.action.bound],pT.prototype,"onChange",null),pT=nT([E.PA],pT);const hT=G(Kp)`
    font-family: ${e=>e.theme.monoFontFamily};
`,mT=/([^\\]|^)\\(\?|u003F|x3F)|([^\\]|^)\[[^\]]*(\?|u003F|x3F)/;let gT=class extends rT{constructor(){super(...arguments),this.fieldId=y.uniqueId(),this.pattern=""}componentDidMount(){(0,E.bH)(this,(0,w.autorun)(()=>{const e=this.props.matcher?this.props.matcher.regexSource.replace(/\\\//g,"/"):"";(0,w.runInAction)(()=>{this.pattern=e})}))}render(){const{matcherIndex:e}=this.props;let t=[],n="like";if(!this.error&&this.props.matcher){const{regexSource:e}=this.props.matcher,r=new RegExp(e),o=new tT(r);o.defaultRange.subtract(32,47),o.defaultRange.subtract(58,64),o.defaultRange.subtract(123,126),o.max=10,t=y.uniq([o.gen(),o.gen(),o.gen()]).filter(e=>e.length&&e.match(r)).sort(),n=e.startsWith("^")&&e.endsWith("$")?"like":e.startsWith("^")?"that start with":e.endsWith("$")?"that end with":"including"}return b.createElement(iT,{title:0===t.length?void 0:1===t.length?`Would match absolute URLs ${n} ${t[0]}`:`Would match absolute URLs ${n}:\n\n${t.join("\n")}`},void 0!==e&&b.createElement(aT,{htmlFor:this.fieldId},0!==e&&"and "," for URLs matching"),b.createElement(hT,{id:this.fieldId,invalid:!!this.error,spellCheck:!1,value:this.pattern,onChange:this.onChange,placeholder:"Any regular expression: https?://abc.com/.*"}))}onChange(e){this.pattern=e.target.value;try{if(!this.pattern)throw new Error("A pattern to match is required");if(this.pattern.match(mT))throw new Error("Query strings are matched separately, so a literal ? character will never match");this.props.onChange(new Ss.yN.RegexPathMatcher(new RegExp(this.pattern))),this.error=void 0,e.target.setCustomValidity("")}catch(t){console.log(t),this.error=Pt(t),this.props.onInvalidState(),e.target.setCustomValidity(this.error.message)}e.target.reportValidity()}};nT([w.observable],gT.prototype,"error",void 0),nT([w.observable],gT.prototype,"pattern",void 0),nT([w.action.bound],gT.prototype,"onChange",null),gT=nT([E.PA],gT);const fT=e=>y.mapValues(y.groupBy(e,({key:e})=>e),e=>1===e.length?e[0].value:e.map(e=>e.value));let yT=class extends rT{render(){const{matcherIndex:e,matcher:t}=this.props,n=(r=(null==t?void 0:t.queryObject)||{},y.flatMap(Object.entries(r),([e,t])=>y.isArray(t)?t.map(t=>({key:e,value:t})):{key:e,value:t}));var r;return b.createElement(iT,null,void 0!==e&&b.createElement(aT,null,0!==e&&"and "," with query parameters including"),b.createElement(Xv,{pairs:n,convertResult:fT,onChange:this.onChange,keyPlaceholder:"Query parameter name",valuePlaceholder:"Query parameter value",allowEmptyValues:!0}))}onChange(e){try{if(Object.keys(e).some(e=>!e))throw new Error("Invalid query parameter; query parameter names can't be empty");0===Object.keys(e).length?this.props.onChange():this.props.onChange(new Ss.yN.QueryMatcher(e))}catch(e){console.log(e),this.props.onInvalidState()}}};nT([w.action.bound],yT.prototype,"onChange",null),yT=nT([E.PA],yT);let vT=class extends rT{constructor(){super(...arguments),this.fieldId=y.uniqueId(),this.query=""}componentDidMount(){(0,E.bH)(this,(0,w.autorun)(()=>{const e=this.props.matcher?this.props.matcher.query:"";(0,w.runInAction)(()=>{this.query=e})}))}render(){const{matcherIndex:e}=this.props;return b.createElement(iT,null,void 0!==e&&b.createElement(aT,{htmlFor:this.fieldId},0!==e&&"and "," with query"),b.createElement(Kp,{id:this.fieldId,invalid:!!this.error,spellCheck:!1,value:this.query,onChange:this.onChange,placeholder:"An exact query string to match, e.g. ?a=b"}))}onChange(e){this.query=e.target.value;try{this.props.onChange(new Ss.yN.ExactQueryMatcher(this.query)),this.error=void 0,e.target.setCustomValidity("")}catch(t){console.log(t),this.error=Pt(t),this.props.onInvalidState(),e.target.setCustomValidity(this.error.message)}e.target.reportValidity()}};nT([w.observable],vT.prototype,"error",void 0),nT([w.observable],vT.prototype,"query",void 0),nT([w.action.bound],vT.prototype,"onChange",null),vT=nT([E.PA],vT);let bT=class extends rT{render(){var e;const{matcherIndex:t}=this.props,n=(null===(e=this.props.matcher)||void 0===e?void 0:e.headers)||{};return b.createElement(iT,null,void 0!==t&&b.createElement(aT,null,0!==t&&"and "," with headers including"),b.createElement(wE,{headers:n,convertToRawHeaders:this.convertInput,convertFromRawHeaders:this.convertResult,onChange:this.onChange,onInvalidState:this.props.onInvalidState}))}convertInput(e){return ln(e)}convertResult(e){return t=cn(e),y.mapValues(y.pickBy(t,(e,t)=>e&&t),e=>y.isArray(e)?e.join(", "):e);var t}onChange(e){0===Object.keys(e).length?this.props.onChange():this.props.onChange(new Ss.yN.HeaderMatcher(e))}};nT([w.action.bound],bT.prototype,"onChange",null),bT=nT([E.PA],bT);const xT=G.div`
    > div {
        border-radius: 4px;
        border: solid 1px ${e=>e.theme.containerBorder};
        padding: 1px;

        ${e=>e.error&&Y`
            border-color: ${e=>e.theme.warningColor};
        `}
    }
`;class wT extends rT{render(){return b.createElement(CT,Object.assign({},this.props,{matcherClass:Ss.yN.RawBodyMatcher,description:"with a decoded body exactly matching"}))}}class ET extends rT{render(){return b.createElement(CT,Object.assign({},this.props,{matcherClass:Ss.yN.RawBodyIncludesMatcher,description:"with a decoded body including"}))}}let CT=class extends rT{constructor(){super(...arguments),this.content=""}componentDidMount(){(0,E.bH)(this,(0,w.autorun)(()=>{const e=this.props.matcher?this.props.matcher.content:"";(0,w.runInAction)(()=>{this.content=e})})),this.onBodyChange(this.content)}render(){const{content:e}=this,{matcherIndex:t}=this.props;return b.createElement(iT,null,void 0!==t&&b.createElement(aT,null,0!==t&&"and "," ",this.props.description),b.createElement(xT,null,b.createElement(Hf,{contentId:null,value:e,onChange:this.onBodyChange,language:"text"})))}onBodyChange(e){this.content=e,this.props.onChange(new this.props.matcherClass(e))}};nT([w.observable],CT.prototype,"content",void 0),nT([w.action.bound],CT.prototype,"onBodyChange",null),CT=nT([E.PA],CT);class TT extends rT{render(){return b.createElement(PT,Object.assign({},this.props,{matcherClass:Ss.yN.JsonBodyMatcher,description:"with a JSON body equivalent to"}))}}class ST extends rT{render(){return b.createElement(PT,Object.assign({},this.props,{matcherClass:Ss.yN.JsonBodyFlexibleMatcher,description:"with a JSON body including"}))}}let PT=class extends rT{constructor(){var e,t;super(...arguments),this.content=(null===(e=this.props.matcher)||void 0===e?void 0:e.body)?JSON.stringify(null===(t=this.props.matcher)||void 0===t?void 0:t.body,null,2):"{\n    \n}"}componentDidMount(){(0,E.bH)(this,(0,w.reaction)(()=>{var e,t;return null!==(t=null===(e=this.props.matcher)||void 0===e?void 0:e.body)&&void 0!==t?t:{}},e=>{const t=Os(this.content);void 0!==t&&y.isEqual(t,e)||(0,w.runInAction)(()=>{this.content=JSON.stringify(e,null,2)})})),this.onBodyChange(this.content)}render(){const{content:e,error:t}=this,{matcherIndex:n}=this.props;return b.createElement(iT,null,void 0!==n&&b.createElement(aT,null,0!==n&&"and "," ",this.props.description),b.createElement(xT,{error:!!t},b.createElement(Hf,{contentId:null,value:e,onChange:this.onBodyChange,language:"json"})))}onBodyChange(e){this.content=e;try{const t=JSON.parse(e);this.props.onChange(new this.props.matcherClass(t)),this.error=void 0}catch(e){console.log(e),this.error=Pt(e),this.props.onInvalidState()}}};nT([w.observable],PT.prototype,"content",void 0),nT([w.observable],PT.prototype,"error",void 0),nT([w.action.bound],PT.prototype,"onBodyChange",null),PT=nT([E.PA],PT);let kT=class extends rT{constructor(){super(...arguments),this.fieldId=y.uniqueId()}get interaction(){var e;return(null===(e=this.props.matcher)||void 0===e?void 0:e.interaction)||"cat"}componentDidMount(){(0,E.bH)(this,(0,w.autorun)(()=>{var e;const t=(null===(e=this.props.matcher)||void 0===e?void 0:e.argValue)||void 0;(0,w.runInAction)(()=>{this.arg=t})}))}render(){var e;const{matcherIndex:t}=this.props,{placeholder:n,argType:r}=null!==(e=Ga[this.interaction])&&void 0!==e?e:{placeholder:"",argType:"IPFS argument"};return b.createElement(iT,null,void 0!==t&&b.createElement(aT,{htmlFor:this.fieldId},0!==t&&"and "," for ",r),b.createElement(Kp,{id:this.fieldId,spellCheck:!1,value:this.arg||"",onChange:this.onChange,placeholder:n}))}onChange(e){this.arg=e.target.value,this.props.onChange(new Ya(this.interaction,this.arg))}};nT([w.observable],kT.prototype,"arg",void 0),nT([w.computed],kT.prototype,"interaction",null),nT([w.action.bound],kT.prototype,"onChange",null),kT=nT([E.PA],kT);let RT=class extends rT{constructor(){var e,t;super(...arguments),this.content=(null===(e=this.props.matcher)||void 0===e?void 0:e.params)?JSON.stringify(null===(t=this.props.matcher)||void 0===t?void 0:t.params,null,2):"[\n    \n]"}componentDidMount(){(0,E.bH)(this,(0,w.reaction)(()=>{var e,t;return null!==(t=null===(e=this.props.matcher)||void 0===e?void 0:e.params)&&void 0!==t?t:{}},e=>{const t=Os(this.content);void 0!==t&&y.isEqual(t,e)||(0,w.runInAction)(()=>{this.content=JSON.stringify(e,null,2)})})),this.onJsonChange(this.content)}render(){const{content:e,error:t}=this,{matcherIndex:n}=this.props;return b.createElement(iT,null,void 0!==n&&b.createElement(aT,null,0!==n&&"and "," with Ethereum parameters matching"),b.createElement(xT,{error:!!t},b.createElement(Hf,{contentId:null,value:e,onChange:this.onJsonChange,language:"json"})))}onJsonChange(e){this.content=e;try{const t=JSON.parse(e);this.props.onChange(new Fa(t)),this.error=void 0}catch(e){console.log(e),this.error=Pt(e),this.props.onInvalidState()}}};nT([w.observable],RT.prototype,"content",void 0),nT([w.observable],RT.prototype,"error",void 0),nT([w.action.bound],RT.prototype,"onJsonChange",null),RT=nT([E.PA],RT);let OT=class extends rT{componentDidMount(){(0,E.bH)(this,(0,w.autorun)(()=>{const{matcher:e,matcherClass:t,onChange:n}=this.props;!e&&t&&n(new t)}))}render(){const{matcherIndex:e,matcherKey:t}=this.props;return b.createElement(iT,null,void 0!==e&&b.createElement(aT,null,0!==e&&"and "," ",Jy(t)))}};OT=nT([E.PA],OT);var HT=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const AT=e=>qi.get(e)||qi.get(null==e?void 0:e.constructor),$T=G.li`
    display: flex;
    flex-direction: row;
    margin: 5px 0;

    &:first-child {
        margin-top: 0;
    }

    &:last-child {
        margin-bottom: 0;
    }
`,IT=G.div`
    flex-grow: 1;
    flex-shrink: 1;
    width: 0; /* Required to keep body editors resizing properly */
`,qT=G(Wp)`
    font-size: ${e=>e.theme.textSize};
    padding: 6px 10px;
    display: inline-block;
    margin-left: 5px;

    flex-grow: 0;
    flex-shrink: 0;
`,jT=G.div`
    &:not(:empty) {
        margin-top: 5px;
    }
`,DT=b.forwardRef((e,t)=>{const n=Fi.filter(e=>{const t=qi.get(e);return Be(Ai[t])}),[r,o]=y.partition(n,e=>Bi.includes(Li(AT(e))));return b.createElement($T,null,b.createElement(IT,null,b.createElement(Jp,{"aria-label":"Select the base matcher for this rule",ref:t,value:AT(e.matcher),onChange:t=>{const n=t.currentTarget.value;if(n){const t=Ii[n];e.onChange(new t)}}},void 0===e.matcher&&b.createElement("option",{value:""},"Never"),b.createElement(FT,{matchers:r}),o.length>0&&b.createElement("optgroup",{label:"Experimental"},b.createElement(FT,{matchers:o}))),b.createElement(jT,null,b.createElement(oT,{matcher:e.matcher,onChange:e.onChange}))))});let MT=class extends b.Component{render(){const{matcher:e,onChange:t,onDelete:n,matcherIndex:r}=this.props;return b.createElement($T,null,b.createElement(IT,null,b.createElement(sT,{matcherIndex:r,matcher:e,onChange:t})),b.createElement(qT,{onClick:n},b.createElement(is,{icon:["far","trash-alt"]})))}};MT=HT([E.PA],MT);const FT=e=>b.createElement(b.Fragment,null,e.matchers.map(e=>{const t=AT(e),n=Jy(t);return b.createElement("option",{key:t,value:t},n)})),BT=G.form`
    :not(:empty) {
        margin-top: 5px;
    }
`,LT=G.option`
    color: ${e=>e.theme.containerWatermark};
`;let NT=class extends b.Component{constructor(){super(...arguments),this.draftMatchers=[],this.invalidMatcherState=!1,this.dropdownRef=b.createRef()}selectMatcher(e){const t=e.target.value;this.matcherClass=Ii[t],this.updateDraftMatcher()}updateDraftMatcher(...e){this.draftMatchers=e,this.invalidMatcherState=!1}markMatcherInvalid(){this.invalidMatcherState=!0}saveMatcher(e){if(e&&e.preventDefault(),!this.draftMatchers.length)return;this.draftMatchers.forEach(e=>this.props.onAdd(e)),this.matcherClass=void 0,this.draftMatchers=[],this.invalidMatcherState=!1;const t=this.dropdownRef.current;t&&t.focus()}render(){var e;const{availableMatchers:t}=this.props,{matcherClass:n,draftMatchers:r,updateDraftMatcher:o,invalidMatcherState:s,markMatcherInvalid:a,saveMatcher:i}=this;return b.createElement($T,null,b.createElement(IT,null,b.createElement(Jp,{"aria-label":"Select another type of matcher to add to this rule",onChange:this.selectMatcher,value:null!==(e=AT(n))&&void 0!==e?e:"",ref:this.dropdownRef},b.createElement(LT,{value:""},"Add another matcher:"),b.createElement(LT,{disabled:!0},"─────────────"),b.createElement(FT,{matchers:t})),b.createElement(BT,{onSubmit:!s&&r.length?i:e=>e.preventDefault()},r.length>=1?b.createElement(sT,{matcherIndex:void 0,matcher:r[0],onChange:o,onInvalidState:a}):b.createElement(sT,{matcherIndex:void 0,matcherClass:n,onChange:o,onInvalidState:a}))),b.createElement(qT,{"aria-label":"Add this matcher to the rule",disabled:!r.length||s,onClick:i},b.createElement(is,{icon:["fas","plus"]})))}};HT([w.observable],NT.prototype,"matcherClass",void 0),HT([w.observable],NT.prototype,"draftMatchers",void 0),HT([w.observable],NT.prototype,"invalidMatcherState",void 0),HT([w.action.bound],NT.prototype,"selectMatcher",null),HT([w.action.bound],NT.prototype,"updateDraftMatcher",null),HT([w.action.bound],NT.prototype,"markMatcherInvalid",null),HT([w.action.bound],NT.prototype,"saveMatcher",null),NT=HT([E.PA],NT);const UT=e=>Mi.get(e)||Mi.get(e.constructor),WT=e=>b.createElement(b.Fragment,null,e.steps.map(e=>{const t=UT(e),n=function(e){switch(e){case"simple":return"Return a fixed response";case"file":return"Return a response from a file";case"forward-to-host":return"Forward the request to a different host";case"passthrough":return"Pass the request on to its destination";case"req-res-transformer":return"Transform the real request or response automatically";case"request-breakpoint":return"Pause the request to manually edit it";case"response-breakpoint":return"Pause the response to manually edit it";case"request-and-response-breakpoint":return"Pause the request & response to manually edit them";case"delay":return"Wait before continuing";case"timeout":return"Time out with no response";case"close-connection":return"Close the connection";case"reset-connection":return"Forcibly reset the connection";case"webhook":return"Enable webhooks";case"ws-passthrough":return"Pass the WebSocket through to its destination";case"ws-forward-to-host":return"Forward the WebSocket to a different host";case"ws-reject":return"Reject the WebSocket setup request";case"ws-listen":return"Accept the WebSocket but send no messages";case"ws-echo":return"Echo all messages";case"eth-call-result":return"Return a fixed eth_call result";case"eth-number-result":case"eth-hash-result":return"Return a fixed value";case"eth-receipt-result":return"Return a fixed transaction receipt";case"eth-block-result":return"Return fixed Ethereum block data";case"eth-error":return"Return an Ethereum error response";case"ipfs-cat-text":return"Return fixed IPFS content";case"ipfs-cat-file":return"Return IPFS content from a file";case"ipfs-add-result":return"Return a fixed IPFS add result";case"ipns-resolve-result":return"Return a fixed IPNS resolved address";case"ipns-publish-result":return"Return a fixed successful IPNS result";case"ipfs-pins-result":return"Return a fixed IPFS pinning result";case"ipfs-pin-ls-result":return"Return a fixed list of IPFS pins";case"wait-for-duration":return"Sleep for a given duration";case"wait-for-rtc-data-channel":return"Wait for a data channel to be opened";case"wait-for-rtc-track":return"Wait for a media track to be opened";case"wait-for-rtc-media":return"Wait for any media to be received";case"wait-for-rtc-message":return"Wait for a data message to be received";case"create-rtc-data-channel":return"Create a data channel";case"send-rtc-data-message":return"Send a data message";case"close-rtc-connection":return"Close the WebRTC connection";case"echo-rtc":return"Echo all messages and media";case"rtc-dynamic-proxy":return"Proxy all traffic to the real remote peer";case"json-rpc-response":case"rtc-peer-proxy":case"callback":case"stream":case"wait-for-request-body":case"informational-response":throw new Error(`${e} step should not be used directly`);default:throw new kt(e)}}(t);return b.createElement("option",{key:t,value:t},n)})),zT=G(Jp)`
    &:not(:first-of-type) {
        margin-top: 10px;
    }
`,_T=(0,E.WQ)("rulesStore","accountStore")((0,E.PA)(e=>{let[t,n]=y.partition(e.availableSteps,t=>e.accountStore.user.isPaidUser()||!((e,t)=>("http"===e||"websocket"===e)&&!_i.includes(t))(e.ruleType,t));return t=y.sortBy(t,e=>UT(e).includes("breakpoint")?0:1),b.createElement(zT,{"aria-label":0===e.stepIndex?"Select how matching requests should be handled":"Select the next step in how matching requests should be handled",value:UT(e.value),onChange:t=>{const n=t.target.value;it({category:"Modify",action:"Step Selected",value:n});const r=((e,t)=>{switch(e){case"simple":return new sa(200);case"file":return new aa(200,void 0,"");case"passthrough":return new ia(t);case"forward-to-host":return new la(void 0,"",!0,t);case"req-res-transformer":return new ca(t,{},{});case"request-breakpoint":return new ua(t);case"response-breakpoint":return new pa(t);case"request-and-response-breakpoint":return new ha(t);case"delay":return new ga(0);case"timeout":return new fa;case"close-connection":return new ya;case"reset-connection":return new va;case"webhook":return new ma("http://",["request","response"]);case"ws-passthrough":return new Ra(t);case"ws-forward-to-host":return new Oa(void 0,"",!0,t);case"ws-echo":return new Ea;case"ws-reject":return new Ca(400);case"ws-listen":return new Ta;case"eth-call-result":return new Ba([],[]);case"eth-number-result":return new La(0);case"eth-hash-result":return new Na("0x0");case"eth-receipt-result":return new Ua(void 0);case"eth-block-result":return new Wa(void 0);case"eth-error":return new za("Unknown Error");case"ipfs-cat-text":return new ti("");case"ipfs-cat-file":return new ni("");case"ipfs-add-result":return new ri;case"ipns-resolve-result":return new oi;case"ipns-publish-result":return new si;case"ipfs-pins-result":return new ai;case"ipfs-pin-ls-result":return new ii;case"rtc-dynamic-proxy":return new xi;case"echo-rtc":return new wi;case"close-rtc-connection":return new Ei;case"wait-for-rtc-media":return new Ci;case"wait-for-duration":return new Ti(0);case"wait-for-rtc-data-channel":return new Si;case"wait-for-rtc-message":return new Pi;case"create-rtc-data-channel":return new ki("mock-channel");case"send-rtc-data-message":return new Ri(void 0,"");default:throw new kt(e)}})(n,e.rulesStore);e.onChange(r)}},b.createElement(WT,{steps:t}),n.length&&b.createElement("optgroup",{label:"With HTTP Toolkit Pro:"},b.createElement(WT,{steps:n})))}));var VT,KT,JT=n(24221),QT=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},GT=function(e,t,n,r){return new(n||(n=Promise))(function(o,s){function a(e){try{l(r.next(e))}catch(e){s(e)}}function i(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(a,i)}l((r=r.apply(e,t||[])).next())})};class YT extends b.Component{}const XT=G.div`
    margin-top: 10px;
    font-size: ${e=>e.theme.textSize};
`,ZT=G.p`
    font-size: ${e=>e.theme.textSize};
    line-height: 1.3;
    opacity: ${e=>e.theme.lowlightTextOpacity};
    font-style: italic;
    overflow-wrap: break-word;

    &:not(:first-child) {
        margin-top: 10px;
    }
`;function eS(e){const{step:t,onChange:n,onInvalidState:r}=e,o={ruleType:e.ruleType,step:t,onChange:n,onInvalidState:r||y.noop},s=Hi(t);switch(s){case"simple":case"ws-reject":return b.createElement(aS,Object.assign({},o));case"file":return b.createElement(dS,Object.assign({},o));case"forward-to-host":case"ws-forward-to-host":return b.createElement(pS,Object.assign({},o,{stepKey:s}));case"passthrough":case"ws-passthrough":case"rtc-dynamic-proxy":return b.createElement(DS,Object.assign({},o));case"req-res-transformer":return b.createElement(bS,Object.assign({},o));case"request-breakpoint":return b.createElement(MS,Object.assign({},o));case"response-breakpoint":return b.createElement(FS,Object.assign({},o));case"request-and-response-breakpoint":return b.createElement(BS,Object.assign({},o));case"delay":case"wait-for-duration":return b.createElement(cP,Object.assign({},o));case"timeout":return b.createElement(LS,Object.assign({},o));case"close-connection":return b.createElement(NS,Object.assign({},o));case"reset-connection":return b.createElement(US,Object.assign({},o));case"webhook":return b.createElement(jS,Object.assign({},o));case"ws-echo":return b.createElement(WS,Object.assign({},o));case"ws-listen":return b.createElement(zS,Object.assign({},o));case"eth-call-result":return b.createElement(VS,Object.assign({},o));case"eth-number-result":return b.createElement(KS,Object.assign({},o));case"eth-hash-result":return b.createElement(JS,Object.assign({},o));case"eth-receipt-result":return b.createElement(GS,Object.assign({},o));case"eth-block-result":return b.createElement(YS,Object.assign({},o));case"eth-error":return b.createElement(XS,Object.assign({},o));case"ipfs-cat-text":return b.createElement(ZS,Object.assign({},o));case"ipfs-cat-file":return b.createElement(eP,Object.assign({},o));case"ipfs-add-result":return b.createElement(tP,Object.assign({},o));case"ipns-resolve-result":return b.createElement(nP,Object.assign({},o));case"ipns-publish-result":return b.createElement(rP,Object.assign({},o));case"ipfs-pins-result":return b.createElement(oP,Object.assign({},o));case"ipfs-pin-ls-result":return b.createElement(sP,Object.assign({},o));case"echo-rtc":return b.createElement(aP,Object.assign({},o));case"close-rtc-connection":return b.createElement(iP,Object.assign({},o));case"wait-for-rtc-media":return b.createElement(lP,Object.assign({},o));case"wait-for-rtc-data-channel":return b.createElement(dP,Object.assign({},o));case"wait-for-rtc-message":return b.createElement(uP,Object.assign({},o));case"create-rtc-data-channel":return b.createElement(pP,Object.assign({},o));case"send-rtc-data-message":return b.createElement(hP,Object.assign({},o));default:throw new kt(s)}}const tS=G.h2`
    margin-bottom: 5px;
    &:not(:first-child) {
        margin-top: 10px;
    }

    text-transform: uppercase;
    font-family: ${e=>e.theme.titleTextFamily};
    opacity: ${e=>e.theme.lowlightTextOpacity};
    width: 100%;
`,nS=G(Jp)`
    font-size: ${e=>e.theme.textSize};
    width: auto;
`,rS=G(Kp)`
    width: 100%;
    box-sizing: border-box;
`,oS=G.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    margin: 5px 0;

    > ${tS} {
        align-self: flex-end;
        flex-grow: 1;
        margin-bottom: 0;
        margin: 0;
    }

    > button {
        padding-top: 0;
        padding-bottom: 0;
    }
`,sS=G.div`
    margin-top: 5px;

    > div {
        margin-top: 5px;
        border-radius: 4px;
        border: solid 1px ${e=>e.isInvalid?e.theme.warningColor:e.theme.containerBorder};
        padding-right: 1px;
    }
`;let aS=class extends YT{constructor(){super(...arguments),this.statusCode=this.props.step instanceof sa?this.props.step.status:this.props.step.statusCode,this.statusMessage=this.props.step.statusMessage,this.rawHeaders=ln(this.props.step.headers||{}),this.contentType="text",this.body=_t(this.props.step instanceof sa?this.props.step.data:this.props.step.body)}get headers(){return cn(this.rawHeaders)}set headers(e){y.isEqual(e,this.headers)||void 0===e&&0===Object.keys(this.headers).length||(this.rawHeaders=ln(e||{}))}componentDidMount(){(0,E.bH)(this,(0,w.reaction)(()=>JSON.stringify(y.pick(this,["statusCode","statusMessage","headers","body"])),()=>this.updateStep())),(0,E.bH)(this,(0,w.autorun)(()=>{const{status:e,statusMessage:t}=this.props.step instanceof sa?this.props.step:Object.assign(Object.assign({},this.props.step),{status:this.props.step.statusCode});(0,w.runInAction)(()=>{this.statusCode=e,this.statusMessage=t})})),(0,E.bH)(this,(0,w.autorun)(()=>{const{data:e}=this.props.step instanceof sa?this.props.step:{data:this.props.step.body};(0,w.runInAction)(()=>{this.body=_t(e)})})),(0,E.bH)(this,(0,w.autorun)(()=>{const{headers:e}=this.props.step;(0,w.runInAction)(()=>{this.headers=e})})),(0,E.bH)(this,(0,w.autorun)(()=>{const e=Nn(un(this.rawHeaders,"content-type"));e&&(0,w.runInAction)(()=>{this.contentType=e})})),(0,E.bH)(this,(0,w.observe)(this,"contentType",({oldValue:e,newValue:t})=>{const n=un(this.rawHeaders,"content-type"),r=Wn(t);n?e===Nn(n)&&(0,w.runInAction)(()=>{hn(this.rawHeaders,"content-type",r)}):(0,w.runInAction)(()=>{this.rawHeaders.push(["content-type",r])})})),(0,E.bH)(this,(0,w.observe)(this,"body",({oldValue:e,newValue:t})=>{const n=un(this.rawHeaders,"content-length");n&&parseInt(n||"",10)===Vt(e)&&(0,w.runInAction)(()=>{(0,w.runInAction)(()=>{hn(this.rawHeaders,"content-length",Vt(t).toString())})})}))}get textEncoding(){return Nt(this.body)?"utf8":"binary"}render(){const{statusCode:e,statusMessage:t,rawHeaders:n,body:r}=this,o=r.toString(this.textEncoding);return b.createElement(XT,null,b.createElement(tS,null,"Status"),b.createElement(OE,{httpVersion:1,statusCode:e,statusMessage:t,onChange:this.setStatus}),b.createElement(tS,null,"Headers"),b.createElement(xE,{headers:n,onChange:this.onHeadersChanged}),b.createElement(oS,null,b.createElement(tS,null,"Response body"),b.createElement($b,{format:this.contentType,content:r,onFormatted:this.setBody}),b.createElement(nS,{value:this.contentType,onChange:this.setContentType},b.createElement("option",{value:"text"},"Plain text"),b.createElement("option",{value:"json"},"JSON"),b.createElement("option",{value:"xml"},"XML"),b.createElement("option",{value:"html"},"HTML"),b.createElement("option",{value:"css"},"CSS"),b.createElement("option",{value:"javascript"},"JavaScript"))),b.createElement(sS,null,b.createElement(Hf,{contentId:null,language:this.contentType,value:o,onChange:this.setBody})))}setStatus(e,t){this.statusCode=e,this.statusMessage=t}onHeadersChanged(e){this.rawHeaders=e}setContentType(e){const t=e.target.value;this.contentType=t}setBody(e){this.body=Ut(e,this.textEncoding)}updateStep(){var e;if(!this.statusCode||this.statusCode<100||this.statusCode>=1e3||this.rawHeaders.some(([e])=>!e.match(an))||this.rawHeaders.some(([e,t])=>!t))return this.props.onInvalidState();this.props.onChange("http"===this.props.ruleType?new sa(this.statusCode,this.statusMessage,this.body,this.headers):new Ca(this.statusCode,null!==(e=this.statusMessage)&&void 0!==e?e:rn(this.statusCode),this.headers,this.body))}};QT([w.observable],aS.prototype,"statusCode",void 0),QT([w.observable],aS.prototype,"statusMessage",void 0),QT([w.observable],aS.prototype,"rawHeaders",void 0),QT([w.computed],aS.prototype,"headers",null),QT([w.observable],aS.prototype,"contentType",void 0),QT([w.observable],aS.prototype,"body",void 0),QT([w.computed],aS.prototype,"textEncoding",null),QT([w.action.bound],aS.prototype,"setStatus",null),QT([w.action.bound],aS.prototype,"onHeadersChanged",null),QT([w.action.bound],aS.prototype,"setContentType",null),QT([w.action.bound],aS.prototype,"setBody",null),aS=QT([E.PA],aS);const iS=G.div`
    margin-top: 1px;
    display: flex;
    flex-direction: row;
    align-items: center;
`,lS=G(Wp)`
    font-size: ${e=>e.theme.textSize};
    padding: 10px 24px;

    flex-grow: 1;
    white-space: nowrap;
`,cS=G.div`
    margin-left: 15px;
    flex-shrink: 1;

    font-family: ${e=>e.theme.monoFontFamily};
    word-break: break-word;
`;let dS=class extends YT{constructor(){super(...arguments),this.statusCode=this.props.step.status,this.statusMessage=this.props.step.statusMessage,this.headers=this.props.step.headers||{},this.filePath=(this.props.step.filePath||"").toString(),this.selectFile=()=>GT(this,void 0,void 0,function*(){const e=yield Pp("path",[]);e&&(0,w.runInAction)(()=>{this.filePath=e})})}componentDidMount(){(0,E.bH)(this,(0,w.reaction)(()=>JSON.stringify(y.pick(this,["statusCode","statusMessage","headers","filePath"])),()=>this.updateStep())),(0,E.bH)(this,(0,w.autorun)(()=>{const{status:e,statusMessage:t,headers:n,filePath:r}=this.props.step;(0,w.runInAction)(()=>{this.statusCode=e,this.statusMessage=t,this.headers=n||{},this.filePath=r})}))}render(){const{statusCode:e,statusMessage:t,headers:n}=this;return b.createElement(XT,null,b.createElement(tS,null,"Status"),b.createElement(OE,{httpVersion:1,statusCode:e,statusMessage:t,onChange:this.setStatus}),b.createElement(tS,null,"Headers"),b.createElement(wE,{headers:n,convertToRawHeaders:ln,convertFromRawHeaders:cn,onChange:this.onHeadersChanged}),b.createElement(tS,null,"Response body"),b.createElement(iS,null,b.createElement(lS,{onClick:this.selectFile},this.filePath?"Change file":b.createElement(b.Fragment,null,"Select file ",b.createElement(ds,null))),this.filePath&&b.createElement(cS,null,this.filePath)),b.createElement(ZT,null,"All matching requests will receive a ",this.statusCode," response, with the response body containing the contents of the selected file."),b.createElement(ZT,null,"This file will be read fresh for each request, so future changes to the file will immediately affect matching requests."))}setStatus(e,t){this.statusCode=e,this.statusMessage=t}onHeadersChanged(e){this.headers=e}updateStep(){if(!this.statusCode||this.statusCode<100||this.statusCode>=1e3||y.some(Object.keys(this.headers),e=>!e.match(an)))return this.props.onInvalidState();this.props.onChange(new aa(this.statusCode,this.statusMessage,this.filePath,this.headers))}};QT([w.observable],dS.prototype,"statusCode",void 0),QT([w.observable],dS.prototype,"statusMessage",void 0),QT([w.observable],dS.prototype,"headers",void 0),QT([w.observable],dS.prototype,"filePath",void 0),QT([w.action.bound],dS.prototype,"setStatus",null),QT([w.action.bound],dS.prototype,"onHeadersChanged",null),dS=QT([E.PA],dS);const uS=G(Kp)`
    margin-top: 5px;
    width: 100%;
    box-sizing: border-box;
`;let pS=class extends YT{constructor(){super(...arguments),this.updateHostHeader=!0}componentDidMount(){(0,E.bH)(this,(0,w.autorun)(()=>{var e;const t=this.savedTarget,{updateHostHeader:n}=(null===(e=this.props.step.transformRequest)||void 0===e?void 0:e.replaceHost)||{};(0,w.runInAction)(()=>{this.target=t,this.updateHostHeader=void 0===n||!!n})}))}get savedTarget(){var e,t;const{targetHost:n}=(null===(e=this.props.step.transformRequest)||void 0===e?void 0:e.replaceHost)||{},r=(null===(t=this.props.step.transformRequest)||void 0===t?void 0:t.setProtocol)||"";return r?`${r}://${n}`:n}render(){var e,t;const{target:n,updateHostHeader:r,error:o,onTargetChange:s,onUpdateHeaderChange:a}=this,{targetHost:i}=(null===(e=this.props.step.transformRequest)||void 0===e?void 0:e.replaceHost)||{},l=(null===(t=this.props.step.transformRequest)||void 0===t?void 0:t.setProtocol)||"",c=l?`${l}://${i}`:i,d="ws-forward-to-host"===this.props.stepKey?"WebSocket":"request";return b.createElement(XT,null,b.createElement(tS,null,"Replacement host"),b.createElement(uS,{value:n||"",invalid:!!o,spellCheck:!1,onChange:s}),b.createElement(tS,null,"Host header"),b.createElement(hS,{updateHostHeader:r,messageType:d,onUpdateHeaderChange:a}),c&&b.createElement(ZT,null,"All matching ",d,"s will be forwarded to ",c,", keeping their existing path",c.includes("://")?"":", protocol,"," and query string.",r?" Their host header will be automatically updated to match.":""))}updateStep(){try{if(!this.target)throw new Error("A target host is required");let e;const t=this.target.match(/^(\w+):\/\//);if(t){const n="ws-forward-to-host"===this.props.stepKey?["ws","wss"]:["http","https"];if(!n.includes(t[1].toLowerCase()))throw new Error(`The protocol must be either ${n[0]} or ${n[1]}`);e=this.target.slice(t[0].length)}else e=this.target;if(e.includes("/"))throw new Error("The replacement host shouldn't include a path, since it won't be used");if(e.includes("?"))throw new Error("The replacement host shouldn't include a query string, since it won't be used");const n="ws-forward-to-host"===this.props.stepKey?Oa:la;this.props.onChange(new n(t?t[1]:void 0,e,this.updateHostHeader,this.props.rulesStore)),this.error=void 0}catch(e){throw console.log(e),this.error=Pt(e),this.props.onInvalidState&&this.props.onInvalidState(),e}}onTargetChange(e){this.target=e.target.value;try{this.updateStep(),e.target.setCustomValidity("")}catch(t){e.target.setCustomValidity(Pt(t).message)}e.target.reportValidity()}onUpdateHeaderChange(e){this.updateHostHeader=e;try{this.updateStep()}catch(e){}}};QT([w.observable],pS.prototype,"error",void 0),QT([w.observable],pS.prototype,"target",void 0),QT([w.observable],pS.prototype,"updateHostHeader",void 0),QT([w.computed],pS.prototype,"savedTarget",null),QT([w.action.bound],pS.prototype,"onTargetChange",null),QT([w.action.bound],pS.prototype,"onUpdateHeaderChange",null),pS=QT([(0,E.WQ)("rulesStore"),E.PA],pS);const hS=e=>b.createElement(Jp,{value:e.updateHostHeader.toString(),onChange:t=>e.onUpdateHeaderChange("true"===t.target.value),title:Xl`
            Most servers will not accept ${e.messageType}s that arrive
            with the wrong host header, so it's typically useful
            to automatically change it to match the new host
        `},b.createElement("option",{value:"true"},"Update the host header automatically (recommended)"),b.createElement("option",{value:"false"},"Leave the host header untouched")),mS=G(tS)`
    margin-top: 10px;
`,gS=G.hr`
    width: 100%;
    box-sizing: border-box;
    margin: 20px 0;
    border: solid 1px ${e=>e.theme.containerWatermark};
`,fS=G.div`
    margin: 0 0 5px 0;

    ${e=>e.active&&Y`
        border-left: solid 5px ${e=>e.theme.containerWatermark};

        &:focus-within {
            border-left: solid 5px ${e=>e.theme.primaryInputBackground};
        }

        padding-left: 5px;

        margin: 10px 0 15px;

        @supports selector(:has(*:nth-child(2))) {
            margin: 0 0 15px 0;

            &:has(> *:nth-child(2)) {
                margin: 10px 0 15px;
            }
        }
    `}
`,yS=G.div`
    > :first-child {
        margin-top: 0;
    }

    padding-top: 5px;
`,vS=G(Jp)`
    margin: 0;

    ${e=>"none"===e.value&&Y`
        color: ${e=>e.theme.mainColor};
        background-color: ${e=>e.theme.mainBackground};
    `}
`;let bS=class extends YT{constructor(){super(...arguments),this.transformRequest=this.props.step.transformRequest||{},this.transformResponse=this.props.step.transformResponse||{},this.transformField=e=>t=>(0,w.action)(n=>{this[e]=Object.assign(Object.assign({},this[e]),{[t]:n}),this.updateStep()})}render(){var e,t;return b.createElement(XT,null,b.createElement(mS,null,"Request Transforms:"),b.createElement(xS,{replacementMethod:null===(e=this.transformRequest)||void 0===e?void 0:e.replaceMethod,onChange:this.transformField("transformRequest")("replaceMethod")}),b.createElement(ES,{transform:this.transformRequest,onChange:this.transformField("transformRequest")}),b.createElement(PS,{type:"request",transform:this.transformRequest,onChange:this.transformField("transformRequest")}),b.createElement(kS,{type:"request",transform:this.transformRequest,onChange:this.transformField("transformRequest")}),b.createElement(gS,null),b.createElement(mS,null,"Response Transforms:"),b.createElement(SS,{replacementStatus:null===(t=this.transformResponse)||void 0===t?void 0:t.replaceStatus,onChange:this.transformField("transformResponse")("replaceStatus")}),b.createElement(PS,{type:"response",transform:this.transformResponse,onChange:this.transformField("transformResponse")}),b.createElement(kS,{type:"response",transform:this.transformResponse,onChange:this.transformField("transformResponse")}))}updateStep(){this.props.onChange(new ca(this.props.rulesStore,this.transformRequest,this.transformResponse))}};QT([w.observable],bS.prototype,"transformRequest",void 0),QT([w.observable],bS.prototype,"transformResponse",void 0),bS=QT([(0,E.WQ)("rulesStore"),E.PA],bS);const xS=e=>{var t;return b.createElement(fS,{active:!!e.replacementMethod},b.createElement(vS,{"aria-label":"Select how the method should be transformed",value:null!==(t=e.replacementMethod)&&void 0!==t?t:"none",onChange:t=>{const n=t.target.value;"none"===n?e.onChange(void 0):e.onChange(n)}},b.createElement("option",{value:"none"},"Use the original request method"),Ps.map(e=>b.createElement("option",{key:e,value:e},"Replace the request method with ",e))))},wS=["setProtocol","replaceHost","matchReplaceHost","matchReplacePath","matchReplaceQuery"],ES=e=>{const t=wS.some(t=>!!e.transform[t]),[n,r]=b.useState(t);return b.createElement(fS,{active:n},b.createElement(vS,{"aria-label":"Select whether the request URL should be transformed",value:n?"modify":"none",onChange:t=>{"none"===t.target.value?(wS.forEach(t=>e.onChange(t)(void 0)),r(!1)):r(!0)}},b.createElement("option",{value:"none"},"Use the original URL"),b.createElement("option",{value:"modify"},"Modify the request URL")),n&&b.createElement(b.Fragment,null,b.createElement(mS,null,"Request URL modifications"),b.createElement(fS,{active:!!e.transform.setProtocol},b.createElement(vS,{"aria-label":"Select how the request protocol should be transformed",value:e.transform.setProtocol||"none",onChange:t=>{const n=t.target.value;"none"===n?e.onChange("setProtocol")(void 0):e.onChange("setProtocol")(n)}},b.createElement("option",{value:"none"},"Use the original request protocol"),b.createElement("option",{value:"http"},"Change the request protocol to HTTP"),b.createElement("option",{value:"https"},"Change the request protocol to HTTPS"))),b.createElement(CS,{transform:e.transform,onChange:e.onChange}),b.createElement(TS,{partName:"path",transform:e.transform.matchReplacePath,onChange:e.onChange("matchReplacePath")}),b.createElement(TS,{partName:"query",transform:e.transform.matchReplaceQuery,onChange:e.onChange("matchReplaceQuery")})))},CS=e=>{var t;const n=e.transform.replaceHost||e.transform.matchReplaceHost,r=e.transform.replaceHost?"replaceHost":e.transform.matchReplaceHost?"matchReplaceHost":"none",[o,s]=b.useState(null===(t=null==n?void 0:n.updateHostHeader)||void 0===t||t);return b.createElement(fS,{active:"none"!==r},b.createElement(vS,{"aria-label":"Select how the request host should be transformed",value:null!=r?r:"none",onChange:t=>{const n=t.target.value;"none"===n?(e.onChange("replaceHost")(void 0),e.onChange("matchReplaceHost")(void 0)):"replaceHost"===n?(e.onChange("matchReplaceHost")(void 0),e.onChange("replaceHost")({targetHost:"",updateHostHeader:!0})):(e.onChange("replaceHost")(void 0),e.onChange("matchReplaceHost")({replacements:[],updateHostHeader:!0}))}},b.createElement("option",{value:"none"},"Use the original request host"),b.createElement("option",{value:"replaceHost"},"Replace the request host"),b.createElement("option",{value:"matchReplaceHost"},"Match & replace parts of the request host")),"replaceHost"===r&&b.createElement(yS,null,b.createElement(mS,null,"Replacement host"),b.createElement(rS,{placeholder:"example.com",spellCheck:!1,value:e.transform.replaceHost.targetHost,onChange:t=>{try{const n=t.target.value;if(e.onChange("replaceHost")({targetHost:t.target.value,updateHostHeader:o}),!n)throw new Error("A replacement host is required");t.target.setCustomValidity("")}catch(e){const n=Pt(e).message;t.target.setCustomValidity(n)}t.target.reportValidity()}})),"matchReplaceHost"===r&&b.createElement($S,{replacements:e.transform.matchReplaceHost.replacements,updateReplacements:t=>{e.onChange("matchReplaceHost")({replacements:t,updateHostHeader:o})},valueValidation:e=>!e.includes("/")||`Request transform replacement hosts cannot include a path or protocol, but "${e}" does`}),"none"!==r&&b.createElement(yS,null,b.createElement(mS,null,"Host header"),b.createElement(hS,{messageType:"request",updateHostHeader:!!o,onUpdateHeaderChange:s})))},TS=e=>{const t=void 0!==e.transform?"matchReplace":"none";return b.createElement(fS,{active:"none"!==t},b.createElement(vS,{"aria-label":`Select how the ${e.partName} should be transformed`,value:null!=t?t:"none",onChange:t=>{"none"===t.target.value?e.onChange(void 0):e.onChange([])}},b.createElement("option",{value:"none"},"Use the original request ",e.partName),b.createElement("option",{value:"matchReplace"},"Match & replace parts of the request ",e.partName)),"matchReplace"===t&&b.createElement($S,{replacements:e.transform,updateReplacements:e.onChange}))},SS=e=>{const t=void 0!==e.replacementStatus?"replace":"none";return b.createElement(fS,{active:"none"!==t},b.createElement(vS,{"aria-label":"Select how the status should be transformed",value:null!=t?t:"none",onChange:t=>{"none"===t.target.value?e.onChange(void 0):e.onChange(200)}},b.createElement("option",{value:"none"},"Use the original response status"),b.createElement("option",{value:"replace"},"Replace the response status")),"replace"===t&&b.createElement(yS,null,b.createElement(OE,{statusCode:e.replacementStatus,onChange:e.onChange,httpVersion:2,statusMessage:void 0})))};let PS=VT=class extends b.Component{constructor(){super(...arguments),this.convertResultFromRawHeaders=e=>"updateHeaders"===this.selected?cn(e.map(([e,t])=>[e,""===t?void 0:t])):cn(e),this.onTransformTypeChange=e=>{const t=e.currentTarget.value;this.clearValues(),"none"!==t&&this.props.onChange(t)({})}}get selected(){var e;return null!==(e=y.find(VT.FIELDS,e=>void 0!==this.props.transform[e]))&&void 0!==e?e:"none"}get headers(){return"none"===this.selected?{}:this.props.transform[this.selected]||{}}render(){const{type:e}=this.props,{selected:t,convertResultFromRawHeaders:n,onTransformTypeChange:r,setHeadersValue:o}=this;return b.createElement(fS,{active:"none"!==t},b.createElement(vS,{"aria-label":`Select how the ${e} headers should be transformed`,value:t,onChange:r},b.createElement("option",{value:"none"},"Use the original ",e," headers"),b.createElement("option",{value:"updateHeaders"},"Override specific ",e," headers"),b.createElement("option",{value:"replaceHeaders"},"Replace all ",e," headers")),"none"!==t&&b.createElement(yS,null,b.createElement(wE,{headers:this.headers,convertToRawHeaders:ln,convertFromRawHeaders:n,onChange:o,allowEmptyValues:"updateHeaders"===t})))}setHeadersValue(e){this.clearValues(),"none"!==this.selected&&this.props.onChange(this.selected)(e)}clearValues(){VT.FIELDS.forEach(e=>this.props.onChange(e)(void 0))}};PS.FIELDS=["replaceHeaders","updateHeaders"],QT([w.computed],PS.prototype,"selected",null),QT([w.computed],PS.prototype,"headers",null),QT([w.action.bound],PS.prototype,"setHeadersValue",null),QT([w.action.bound],PS.prototype,"onTransformTypeChange",void 0),QT([w.action.bound],PS.prototype,"clearValues",null),PS=VT=QT([E.PA],PS);let kS=KT=class extends b.Component{constructor(){super(...arguments),this.onTransformTypeChange=e=>{const t=e.currentTarget.value;if(this.clearValues(),"updateJsonBody"===t)this.props.onChange("updateJsonBody")({});else if("patchJsonBody"===t)this.props.onChange("patchJsonBody")([]);else if("replaceBody"===t)this.props.onChange("replaceBody")("");else if("replaceBodyFromFile"===t)this.props.onChange("replaceBodyFromFile")("");else if("matchReplaceBody"===t)this.props.onChange("matchReplaceBody")([]);else if("deepTransformBody"===t)this.props.onChange("deepTransformBody")({pipeline:["base64","json"],mutate:{}});else{if("none"===t)return;Rt(t)}},this.selectBodyReplacementFile=()=>GT(this,void 0,void 0,function*(){const e=yield Pp("path",[]);e&&(0,w.runInAction)(()=>{this.clearValues(),this.props.onChange("replaceBodyFromFile")(e)})})}get bodyReplacementBuffer(){return _t(this.props.transform.replaceBody)}render(){var e;const{type:t,transform:n}=this.props,{bodyReplacementBuffer:r,onTransformTypeChange:o,setBodyReplacement:s,selectBodyReplacementFile:a,setJsonBodyUpdate:i,setJsonBodyPatch:l}=this,c=Be("^1.18.0"),d=null!==(e=y.find(KT.FIELDS,e=>void 0!==n[e]))&&void 0!==e?e:"none";return b.createElement(fS,{active:"none"!==d},b.createElement(vS,{"aria-label":`Select how the ${t} body should be transformed`,value:d,onChange:o},b.createElement("option",{value:"none"},"Use the original ",t," body"),b.createElement("option",{value:"replaceBody"},"Replace the ",t," body with a fixed value"),b.createElement("option",{value:"replaceBodyFromFile"},"Replace the ",t," body with a file"),b.createElement("option",{value:"updateJsonBody"},"Update a JSON ",t," body by merging data"),c&&b.createElement(b.Fragment,null,b.createElement("option",{value:"patchJsonBody"},"Update a JSON ",t," body using JSON patch"),b.createElement("option",{value:"matchReplaceBody"},"Match & replace text in the ",t," body"),b.createElement("option",{value:"deepTransformBody"},"Deep transform (AES / Protobuf / URL / Base64)"))),"replaceBody"===d?b.createElement(RS,{type:t,body:r,updateBody:s}):"replaceBodyFromFile"===d?b.createElement(yS,null,b.createElement(iS,null,b.createElement(lS,{onClick:a},n.replaceBodyFromFile?"Change file":b.createElement(b.Fragment,null,"Select file ",b.createElement(ds,null))),n.replaceBodyFromFile&&b.createElement(cS,null,n.replaceBodyFromFile))):"updateJsonBody"===d?b.createElement(HS,{type:t,body:n.updateJsonBody,updateBody:i}):"patchJsonBody"===d?b.createElement(AS,{type:t,operations:n.patchJsonBody,updateOperations:l}):"matchReplaceBody"===d?b.createElement($S,{replacements:n.matchReplaceBody,updateReplacements:this.props.onChange("matchReplaceBody")}):"deepTransformBody"===d?b.createElement(HS,{type:t,body:n.deepTransformBody,updateBody:this.props.onChange("deepTransformBody")}):"none"===d?null:Rt(d))}clearValues(){KT.FIELDS.forEach(e=>this.props.onChange(e)(void 0))}setBodyReplacement(e){this.clearValues(),this.props.onChange("replaceBody")(e)}setJsonBodyUpdate(e){this.clearValues(),this.props.onChange("updateJsonBody")(e)}setJsonBodyPatch(e){this.clearValues(),this.props.onChange("patchJsonBody")(e)}};kS.FIELDS=["replaceBody","replaceBodyFromFile","updateJsonBody","patchJsonBody","matchReplaceBody","deepTransformBody"],QT([w.computed],kS.prototype,"bodyReplacementBuffer",null),QT([w.action.bound],kS.prototype,"clearValues",null),QT([w.action.bound],kS.prototype,"setBodyReplacement",null),QT([w.action.bound],kS.prototype,"setJsonBodyUpdate",null),QT([w.action.bound],kS.prototype,"setJsonBodyPatch",null),kS=KT=QT([E.PA],kS);const RS=e=>{const[t,n]=b.useState("text");return b.createElement(yS,null,b.createElement(oS,null,b.createElement(tS,null,"Replacement ",e.type," body"),b.createElement($b,{format:t,content:e.body,onFormatted:e.updateBody}),b.createElement(nS,{value:t,onChange:e=>n(e.target.value)},b.createElement("option",{value:"text"},"Plain text"),b.createElement("option",{value:"json"},"JSON"),b.createElement("option",{value:"xml"},"XML"),b.createElement("option",{value:"html"},"HTML"),b.createElement("option",{value:"css"},"CSS"),b.createElement("option",{value:"javascript"},"JavaScript"))),b.createElement(sS,null,b.createElement(Hf,{contentId:null,language:t,value:Wt(e.body),onChange:e.updateBody})))},OS=G($b)`
    padding-right: 0;
`,HS=e=>{const[t,n]=b.useState(),[r,o]=b.useState(JSON.stringify(e.body,null,2));return b.useEffect(()=>{try{e.updateBody(JSON.parse(r)),n(void 0)}catch(e){n(Pt(e))}},[r]),b.createElement(yS,null,b.createElement(oS,null,b.createElement(tS,null,"JSON to merge into ",e.type," body"),t&&b.createElement(ds,{title:t.message}),b.createElement(OS,{format:"json",content:_t(r),onFormatted:o})),b.createElement(sS,{isInvalid:!!t},b.createElement(Hf,{contentId:null,language:"json",value:r,onChange:e=>o(e)})))},AS=e=>{const[t,n]=b.useState(),[r,o]=b.useState(JSON.stringify(e.operations,null,2));return b.useEffect(()=>{try{const t=JSON.parse(r),o=(0,JT.validate)(t);if(o)throw o;e.updateOperations(t),n(void 0)}catch(e){n(Pt(e))}},[r]),b.createElement(yS,null,b.createElement(oS,null,b.createElement(tS,null,"JSON ",e.type," body patch (see ",b.createElement("a",{href:"https://jsonpatch.com/"},"jsonpatch.com"),")"),t&&b.createElement(ds,{title:t.message}),b.createElement(OS,{format:"json",content:_t(r),onFormatted:o})),b.createElement(sS,{isInvalid:!!t},b.createElement(Hf,{contentId:null,language:"json",value:r,onChange:e=>o(e)})))},$S=e=>{const[t,n]=b.useState(),[r,o]=b.useState(e.replacements.map(([e,t])=>({key:e instanceof RegExp?e.source:y.escapeRegExp(e),value:t})));return b.useEffect(()=>{try{const t=r.filter(e=>!0===qS(e.key)),o=r.length-t.length;if(e.updateReplacements(t.map(({key:e,value:t})=>[new RegExp(e,"g"),t])),o>0)throw new Error(`${o} regular expression${1===o?" is":"s are"} invalid`);n(void 0)}catch(e){n(Pt(e))}},[r]),b.createElement(yS,null,b.createElement(oS,null,b.createElement(tS,null,"Regex matchers & replacements"),t&&b.createElement(ds,{title:t.message})),b.createElement(IS,{pairs:r,onChange:o,keyPlaceholder:"Regular expression to match",valuePlaceholder:"Replacement value",keyValidation:qS,valueValidation:e.valueValidation,allowEmptyValues:!0}))},IS=G(Xv)`
    input:nth-of-type(odd) {
        font-family: ${e=>e.theme.monoFontFamily};
    }
`,qS=e=>{var t;try{return new RegExp(e,"g"),!0}catch(e){return null!==(t=e.message)&&void 0!==t?t:e.toString()}};let jS=class extends YT{constructor(){super(...arguments),this.webhookUrl=this.props.step.url,this.events=this.props.step.events}render(){return b.createElement(XT,null,b.createElement(tS,null,"Webhook target URL"),b.createElement(uS,{type:"url",value:this.webhookUrl,invalid:!!this.error,spellCheck:!1,onChange:this.onUrlChange}),b.createElement(tS,null,"Webhook events"),b.createElement("label",null,b.createElement("input",{type:"checkbox",checked:this.events.includes("request"),onChange:e=>this.setEvent("request",e.target.checked)}),"Request received"),b.createElement("br",null),b.createElement("label",null,b.createElement("input",{type:"checkbox",checked:this.events.includes("response"),onChange:e=>this.setEvent("response",e.target.checked)}),"Response sent"))}onUrlChange(e){this.webhookUrl=e.target.value,this.updateStep(e.target)}setEvent(e,t){t&&!this.events.includes(e)?this.events.push(e):!t&&this.events.includes(e)&&this.events.splice(this.events.indexOf(e),1),this.updateStep()}updateStep(e){try{if(!this.webhookUrl)throw new Error("A webhook URL is required");this.props.onChange(new ma(this.webhookUrl,this.events)),this.error=void 0,null==e||e.setCustomValidity("")}catch(t){this.error=Pt(t),null==e||e.setCustomValidity(this.error.message),this.props.onInvalidState&&this.props.onInvalidState()}null==e||e.reportValidity()}};QT([w.observable],jS.prototype,"error",void 0),QT([w.observable],jS.prototype,"webhookUrl",void 0),QT([w.observable],jS.prototype,"events",void 0),QT([w.action.bound],jS.prototype,"onUrlChange",null),QT([w.action.bound],jS.prototype,"setEvent",null),jS=QT([E.PA],jS);let DS=class extends YT{render(){return b.createElement(XT,null,b.createElement(ZT,null,"All matching ",Gi(this.props.ruleType)?"requests":"websocket"===this.props.ruleType?"WebSockets":"webrtc"===this.props.ruleType?"data and media":Rt(this.props.ruleType)," will be transparently passed through to the upstream ","webrtc"===this.props.ruleType?"RTC peer, once one is connected":"target host","."))}};DS=QT([E.PA],DS);let MS=class extends YT{render(){return b.createElement(XT,null,b.createElement(ZT,null,"All matching traffic will breakpoint when a request is sent."),b.createElement(ZT,null,"Once a request is breakpointed, you can edit the request URL to redirect the request elsewhere, edit the method, headers, or body before they are sent upstream, or provide your own response manually so the request is never sent onwards at all."))}};MS=QT([E.PA],MS);let FS=class extends YT{render(){return b.createElement(XT,null,b.createElement(ZT,null,"All matching traffic will breakpoint when a response is received from the upstream server."),b.createElement(ZT,null,"Once a response is breakpointed, you can rewrite the received message, to edit the status code, headers or body before they're returned to the downstream HTTP client."))}};FS=QT([E.PA],FS);let BS=class extends YT{render(){return b.createElement(XT,null,b.createElement(ZT,null,"All matching traffic will breakpoint when a request is sent, and when a response is received."),b.createElement(ZT,null,"From a request breakpoint, you can edit the request URL to redirect the request elsewhere, edit the method, headers, or body before they are sent upstream, or provide your own response manually so the request is never sent onwards at all."),b.createElement(ZT,null,"From a response breakpoint, you can rewrite a received response, to edit the status code, headers or body before they're returned to the downstream HTTP client."))}};BS=QT([E.PA],BS);let LS=class extends YT{render(){return b.createElement(XT,null,b.createElement(ZT,null,"The ",Gi(this.props.ruleType)?"request":"websocket"===this.props.ruleType?"WebSocket":"webrtc"===this.props.ruleType?(()=>{throw new Error("Not compatible with WebRTC rules")})():Rt(this.props.ruleType)," will receive no response, keeping the connection open but doing nothing. With no data or response, most clients will time out and abort the request after sufficient time has passed."))}};LS=QT([E.PA],LS);let NS=class extends YT{render(){return b.createElement(XT,null,b.createElement(ZT,null,"The ",Gi(this.props.ruleType)?"request":"websocket"===this.props.ruleType?"WebSocket":"webrtc"===this.props.ruleType?(()=>{throw new Error("Not compatible with WebRTC rules")})():Rt(this.props.ruleType),"'s connection will be cleanly closed, with no response."))}};NS=QT([E.PA],NS);let US=class extends YT{render(){return b.createElement(XT,null,b.createElement(ZT,null,"The ",Gi(this.props.ruleType)?"request":"websocket"===this.props.ruleType?"WebSocket":"webrtc"===this.props.ruleType?(()=>{throw new Error("Not compatible with WebRTC rules")})():Rt(this.props.ruleType),"'s connection will be abruptly killed with a TCP RST packet (or a RST_STREAM frame, for HTTP/2)."))}};US=QT([E.PA],US);let WS=class extends YT{render(){return b.createElement(XT,null,b.createElement(ZT,null,"The WebSocket will be opened successfully, but not forwarded upstream, and every message that's sent will be echoed back to the client until the client closes the connection."))}};WS=QT([E.PA],WS);let zS=class extends YT{render(){return b.createElement(XT,null,b.createElement(ZT,null,"The WebSocket will be opened successfully, but not forwarded upstream. All messages from the client will be accepted, but no responses will be sent."))}};zS=QT([E.PA],zS);const _S=`(${ja.join("|")})(\\[\\])?`;let VS=class extends YT{constructor(){super(...arguments),this.typeValuePairs=[]}componentDidMount(){(0,E.bH)(this,(0,w.autorun)(()=>{const{outputTypes:e,values:t}=this.props.step,n=t.map(e=>Array.isArray(e)?e.join(", "):null==e?void 0:e.toString());(0,w.runInAction)(()=>{this.typeValuePairs=y.zip(e,n).map(([e,t])=>({key:e,value:t}))})}))}render(){const{typeValuePairs:e}=this,t=this.props.step.result.result;return b.createElement(XT,null,b.createElement(tS,null,"Eth_Call return values"),b.createElement(Xv,{pairs:e,onChange:this.onChange,keyPlaceholder:"Return value type (e.g. string, int256, etc)",keyValidation:_S,valuePlaceholder:"Return value",allowEmptyValues:!0}),this.error?b.createElement(b.Fragment,null,b.createElement(ZT,null,b.createElement(ds,null)," Could not encode data. ",this.error.message)):b.createElement(b.Fragment,null,b.createElement(ZT,null,"Encoded return value:"),b.createElement(mh,null,t)),b.createElement(ZT,null,"All matching Ethereum JSON-RPC calls will be intercepted, and the encoded output above returned directly, without forwarding the call to the real Ethereum node."))}onChange(e){this.typeValuePairs=e;const t=this.typeValuePairs.map(({key:e,value:t})=>"string[]"===e?{key:e,value:t.split(/,\s?/g)}:e.startsWith("bytes")||e.endsWith("[]")?{key:e,value:t.split(/,\s?/g).map(e=>parseInt(e,10))}:{key:e,value:t});try{this.props.onChange(new Ba(t.map(({key:e})=>e),t.map(({value:e})=>e))),this.error=void 0}catch(e){if(!St(e))throw e;if("INVALID_ARGUMENT"===e.code){const{argument:t,value:n,reason:r}=e;this.error="type"===t||"param"===t?new Error(`Invalid type: ${n}`):"value"===t?new Error(`Invalid value: '${n}' (${r})`):e}else this.error=e;this.props.onInvalidState()}}};QT([w.observable],VS.prototype,"typeValuePairs",void 0),QT([w.observable],VS.prototype,"error",void 0),QT([w.action.bound],VS.prototype,"onChange",null),VS=QT([E.PA],VS);let KS=class extends YT{constructor(){super(...arguments),this.value=this.props.step.value}componentDidMount(){(0,E.bH)(this,(0,w.autorun)(()=>{const{value:e}=this.props.step;(0,w.runInAction)(()=>{0===e&&""===this.value||(this.value=e)})}))}render(){const{value:e}=this;return b.createElement(XT,null,b.createElement(tS,null,"Return value"),b.createElement(rS,{type:"number",min:0,value:e,onChange:this.onChange}),b.createElement(ZT,null,"All matching Ethereum JSON-RPC requests will be intercepted, and ",this.value," will be returned directly, without forwarding the call to the real Ethereum node."))}onChange(e){const t=e.target.value,n=""!==t?parseInt(t,10):"";y.isNaN(n)||(this.value=n,this.props.onChange(new La(n||0)))}};QT([w.observable],KS.prototype,"value",void 0),QT([w.action.bound],KS.prototype,"onChange",null),KS=QT([E.PA],KS);let JS=class extends YT{constructor(){super(...arguments),this.value=this.props.step.value}componentDidMount(){(0,E.bH)(this,(0,w.autorun)(()=>{const{value:e}=this.props.step;(0,w.runInAction)(()=>{this.value=e})}))}render(){const{value:e}=this;return b.createElement(XT,null,b.createElement(tS,null,"Return hash value"),b.createElement(rS,{type:"text",value:e,onChange:this.onChange}),b.createElement(ZT,null,"All matching Ethereum JSON-RPC requests will be intercepted, and ",this.value," will be returned directly, without forwarding the call to the real Ethereum node."),b.createElement(ZT,null,b.createElement(ds,null)," In most cases, you will also want to add a rule for transaction receipts matching this value, to mock subsequent queries for the transaction's result."))}onChange(e){const t=e.target.value;/^0x[0-9a-fA-F]*$/.test(t)&&this.props.onChange(new Na(e.target.value))}};QT([w.observable],JS.prototype,"value",void 0),QT([w.action.bound],JS.prototype,"onChange",null),JS=QT([E.PA],JS);let QS=class extends YT{constructor(){super(...arguments),this.valueString=JSON.stringify(this.props.valueGetter(this.props.step),null,2)}componentDidMount(){(0,E.bH)(this,(0,w.reaction)(()=>JSON.stringify(this.props.valueGetter(this.props.step),null,2),e=>{let t;try{t=JSON.stringify(JSON.parse(this.valueString),null,2)}catch(e){}e!==t&&(0,w.runInAction)(()=>{this.valueString=e,this.error=void 0})}))}render(){const{valueString:e,error:t}=this,{name:n,explanation:r}=this.props;return b.createElement(XT,null,b.createElement(oS,null,b.createElement(tS,null,n),t&&b.createElement(ds,{title:t.message}),b.createElement(OS,{format:"json",content:_t(e),onFormatted:this.onChange})),b.createElement(sS,{isInvalid:!!t},b.createElement(Hf,{contentId:null,language:"json",value:e,onChange:this.onChange})),r.map((e,t)=>b.createElement(ZT,{key:t},e)))}onChange(e){this.valueString=e;try{const t=JSON.parse(e);this.props.onChange(this.props.stepFactory(t)),this.error=void 0}catch(e){if(!St(e))throw e;this.error=e,this.props.onInvalidState()}}};QT([w.observable],QS.prototype,"valueString",void 0),QT([w.observable],QS.prototype,"error",void 0),QT([w.action.bound],QS.prototype,"onChange",null),QS=QT([E.PA],QS);let GS=class extends YT{render(){return b.createElement(QS,Object.assign({name:"Ethereum Transaction Receipt",explanation:["All matching Ethereum JSON-RPC requests will be intercepted, and this transaction receipt will returned directly, without forwarding the call to the real Ethereum node."],stepFactory:e=>new Ua(e),valueGetter:e=>e.receiptValue},this.props))}};GS=QT([E.PA],GS);let YS=class extends YT{render(){return b.createElement(QS,Object.assign({name:"Ethereum Block Data",explanation:["All matching Ethereum JSON-RPC requests will be intercepted, and this fixed block data will returned directly, without forwarding the call to the real Ethereum node."],stepFactory:e=>new Wa(e),valueGetter:e=>e.blockValue},this.props))}};YS=QT([E.PA],YS);let XS=class extends YT{constructor(){super(...arguments),this.errorMessage=this.props.step.message,this.errorCode=this.props.step.code||"",this.errorData=this.props.step.data,this.errorName=this.props.step.name}componentDidMount(){(0,E.bH)(this,(0,w.reaction)(()=>JSON.stringify(y.pick(this,["errorMessage","errorCode","errorData","errorName"])),()=>this.updateStep())),(0,E.bH)(this,(0,w.autorun)(()=>{const{message:e,code:t,data:n,name:r}=this.props.step;(0,w.runInAction)(()=>{this.errorMessage=e,this.errorData=n,this.errorName=r,""===this.errorCode&&0===t||(this.errorCode=t)})}))}render(){const{errorMessage:e,errorCode:t,errorData:n,errorName:r}=this;return b.createElement(XT,null,b.createElement(tS,null,"Error Message"),b.createElement(rS,{type:"text",value:e,onChange:this.onChangeMessage}),b.createElement(tS,null,"Error Code"),b.createElement(rS,{type:"number",value:t,onChange:this.onChangeCode}),b.createElement(tS,null,"Error Data"),b.createElement(rS,{type:"text",value:n,onChange:this.onChangeData}),b.createElement(tS,null,"Error Name"),b.createElement(rS,{type:"text",value:r||"",onChange:this.onChangeName}),b.createElement(ZT,null,"All matching Ethereum JSON-RPC requests will be intercepted, and this error response will returned directly, without forwarding the call to the real Ethereum node."))}onChangeMessage(e){this.errorMessage=e.target.value}onChangeCode(e){const t=e.target.value;if(!t)return void(this.errorCode="");const n=parseInt(t,10);y.isNaN(n)||(this.errorCode=n)}onChangeData(e){this.errorData=e.target.value}onChangeName(e){this.errorName=e.target.value}updateStep(){this.props.onChange(new za(this.errorMessage,this.errorData,this.errorCode||0,this.errorName))}};QT([w.observable],XS.prototype,"inputError",void 0),QT([w.observable],XS.prototype,"errorMessage",void 0),QT([w.observable],XS.prototype,"errorCode",void 0),QT([w.observable],XS.prototype,"errorData",void 0),QT([w.observable],XS.prototype,"errorName",void 0),QT([w.action.bound],XS.prototype,"onChangeMessage",null),QT([w.action.bound],XS.prototype,"onChangeCode",null),QT([w.action.bound],XS.prototype,"onChangeData",null),QT([w.action.bound],XS.prototype,"onChangeName",null),XS=QT([E.PA],XS);let ZS=class extends YT{constructor(){super(...arguments),this.contentType="text",this.body=_t(this.props.step.data)}componentDidMount(){(0,E.bH)(this,(0,w.autorun)(()=>{const{data:e}=this.props.step;(0,w.runInAction)(()=>{this.body=_t(e)})}))}get textEncoding(){return Nt(this.body)?"utf8":"binary"}render(){const{body:e}=this,t=e.toString(this.textEncoding);return b.createElement(XT,null,b.createElement(oS,null,b.createElement(tS,null,"IPFS content"),b.createElement($b,{format:this.contentType,content:e,onFormatted:this.setBody}),b.createElement(nS,{value:this.contentType,onChange:this.setContentType},b.createElement("option",{value:"text"},"Plain text"),b.createElement("option",{value:"json"},"JSON"),b.createElement("option",{value:"xml"},"XML"),b.createElement("option",{value:"html"},"HTML"),b.createElement("option",{value:"css"},"CSS"),b.createElement("option",{value:"javascript"},"JavaScript"))),b.createElement(sS,null,b.createElement(Hf,{contentId:null,language:this.contentType,value:t,onChange:this.setBody})))}setContentType(e){const t=e.target.value;this.contentType=t}setBody(e){this.body=Ut(e,this.textEncoding),this.props.onChange(new ti(this.body))}};QT([w.observable],ZS.prototype,"contentType",void 0),QT([w.observable],ZS.prototype,"body",void 0),QT([w.computed],ZS.prototype,"textEncoding",null),QT([w.action.bound],ZS.prototype,"setContentType",null),QT([w.action.bound],ZS.prototype,"setBody",null),ZS=QT([E.PA],ZS);let eP=class extends YT{constructor(){super(...arguments),this.filePath=(this.props.step.filePath||"").toString(),this.selectFile=()=>GT(this,void 0,void 0,function*(){const e=yield Pp("path",[]);e&&((0,w.runInAction)(()=>{this.filePath=e}),this.props.onChange(new ni(this.filePath)))})}componentDidMount(){(0,E.bH)(this,(0,w.autorun)(()=>{const{filePath:e}=this.props.step;(0,w.runInAction)(()=>{this.filePath=e})}))}render(){return b.createElement(XT,null,b.createElement(tS,null,"IPFS content"),b.createElement(iS,null,b.createElement(lS,{onClick:this.selectFile},this.filePath?"Change file":b.createElement(b.Fragment,null,"Select file ",b.createElement(ds,null))),this.filePath&&b.createElement(cS,null,this.filePath)),b.createElement(ZT,null,"All matching requests will receive a successful response containing the contents of the selected file."),b.createElement(ZT,null,"This file will be read fresh for each request, so future changes to the file will immediately affect matching requests."))}};QT([w.observable],eP.prototype,"filePath",void 0),eP=QT([E.PA],eP);let tP=class extends YT{constructor(){super(...arguments),this.resultPairs=[]}componentDidMount(){(0,E.bH)(this,(0,w.autorun)(()=>{const{result:e}=this.props.step;(0,w.runInAction)(()=>{this.resultPairs=e.map(({Name:e,Hash:t})=>({key:e,value:t}))})}))}render(){const{resultPairs:e}=this;return b.createElement(XT,null,b.createElement(tS,null,"IPFS Add Results"),b.createElement(Xv,{pairs:e,onChange:this.onChange,keyPlaceholder:"Name of the added file",valuePlaceholder:"Hash of the added file"}),b.createElement(ZT,null,"All matching IPFS Add calls will be intercepted, and the above results will always be returned directly, without forwarding the call to the real IPFS node."))}onChange(e){this.resultPairs=e,this.props.onChange(new ri(this.resultPairs.map(({key:e,value:t})=>({Name:e,Hash:t}))))}};QT([w.observable],tP.prototype,"resultPairs",void 0),QT([w.action.bound],tP.prototype,"onChange",null),tP=QT([E.PA],tP);let nP=class extends YT{render(){return b.createElement(QS,Object.assign({name:"IPNS Resolve Result",explanation:["All matching requests will be receive this data as a successful IPNS resolution."],stepFactory:e=>new oi(e),valueGetter:e=>e.result},this.props))}};nP=QT([E.PA],nP);let rP=class extends YT{render(){return b.createElement(QS,Object.assign({name:"IPNS Publish Result",explanation:["All matching requests will be receive this data as a successful IPNS publish result."],stepFactory:e=>new si(e),valueGetter:e=>e.result},this.props))}};rP=QT([E.PA],rP);let oP=class extends YT{render(){return b.createElement(QS,Object.assign({name:"IPFS Pinning Result",explanation:["All matching requests will be receive this data as a successful response."],stepFactory:e=>new ai(e),valueGetter:e=>e.result},this.props))}};oP=QT([E.PA],oP);let sP=class extends YT{constructor(){super(...arguments),this.resultPairs=[]}componentDidMount(){(0,E.bH)(this,(0,w.autorun)(()=>{const{result:e}=this.props.step;(0,w.runInAction)(()=>{this.resultPairs=e.map(({Type:e,Cid:t})=>({key:e,value:t}))})}))}render(){const{resultPairs:e}=this;return b.createElement(XT,null,b.createElement(tS,null,"IPFS Pin Ls Results"),b.createElement(Xv,{pairs:e,onChange:this.onChange,keyPlaceholder:"Type of pin (recursive, direct, indirect)",valuePlaceholder:"CID of the pinned content"}),b.createElement(ZT,null,"All matching IPFS Pin Ls calls will be intercepted, and the above results will always be returned directly, without forwarding the call to the real IPFS node."))}onChange(e){this.resultPairs=e,this.props.onChange(new ii(this.resultPairs.map(({key:e,value:t})=>({Type:e,Cid:t}))))}};QT([w.observable],sP.prototype,"resultPairs",void 0),QT([w.action.bound],sP.prototype,"onChange",null),sP=QT([E.PA],sP);let aP=class extends YT{render(){return b.createElement(XT,null,b.createElement(ZT,null,"Echo all sent data messages and all streamed video and audio media back to the intercepted peer wherever possible, until the connection is closed. No data will be forwarded to any connected remote peer."),b.createElement(ZT,null,"Note that in some cases echoing isn't possible - e.g. if the client opens a one-way video stream - in which case that data will simply be dropped."))}};aP=QT([E.PA],aP);let iP=class extends YT{render(){return b.createElement(XT,null,b.createElement(ZT,null,"Immediately close the WebRTC connection, with no further response and no data forwarded to any connected remote peer."))}};iP=QT([E.PA],iP);let lP=class extends YT{render(){return b.createElement(XT,null,b.createElement(ZT,null,"Wait until the next WebRTC media data is sent by the client."))}};lP=QT([E.PA],lP);let cP=class extends YT{constructor(){super(...arguments),this.inputDuration=this.stepDuration}get stepDuration(){return"durationMs"in this.props.step?this.props.step.durationMs:this.props.step.delayMs}componentDidMount(){(0,E.bH)(this,(0,w.autorun)(()=>{0===this.stepDuration&&""===this.inputDuration||(this.inputDuration=this.stepDuration)}))}render(){const{inputDuration:e}=this;return b.createElement(XT,null,"Wait for ",b.createElement(Kp,{type:"number",min:"0",placeholder:"Duration (ms)",value:e,onChange:this.onChange})," milliseconds",""!==e&&!jt(e).endsWith("ms")&&` (${jt(e)})`,".")}onChange(e){const t=e.target.value,n=""===t?"":Math.max(parseInt(t,10)||0,0);if(y.isNaN(n))return;this.inputDuration=n;const r="webrtc"===this.props.ruleType?new Ti(n||0):new ga(n||0);this.props.onChange(r)}};QT([w.computed],cP.prototype,"stepDuration",null),QT([w.observable],cP.prototype,"inputDuration",void 0),QT([w.action.bound],cP.prototype,"onChange",null),cP=QT([E.PA],cP);let dP=class extends YT{render(){const{channelLabel:e}=this.props.step;return b.createElement(XT,null,b.createElement(tS,null,"Channel Label"),b.createElement(rS,{placeholder:"The channel to wait for, or nothing to wait for any channel",value:null!=e?e:"",onChange:this.onChange}),b.createElement(ZT,null,"Wait until the client opens a WebRTC data channel ",e?`with the label "${e}"`:"with any label","."))}onChange(e){const t=e.target.value;this.props.onChange(new Si(t||""))}};QT([w.action.bound],dP.prototype,"onChange",null),dP=QT([E.PA],dP);let uP=class extends YT{render(){const{channelLabel:e}=this.props.step;return b.createElement(XT,null,b.createElement(tS,null,"Channel Label"),b.createElement(rS,{placeholder:"The channel to watch for messages, or nothing to watch every channel",value:null!=e?e:"",onChange:this.onChange}),b.createElement(ZT,null,"Wait until the client sends a WebRTC data message ",e?`on a channel with the label "${e}"`:"on any data channel","."))}onChange(e){const t=e.target.value;this.props.onChange(new Pi(t||""))}};QT([w.action.bound],uP.prototype,"onChange",null),uP=QT([E.PA],uP);let pP=class extends YT{render(){const{channelLabel:e}=this.props.step;return b.createElement(XT,null,b.createElement(tS,null,"Channel Label"),b.createElement(rS,{placeholder:"A label for the channel that will be created",value:e,onChange:this.onChange}),b.createElement(ZT,null,'Create a data channel on the WebRTC connection labelled "',e,'".'))}onChange(e){const t=e.target.value;this.props.onChange(new ki(t))}};QT([w.action.bound],pP.prototype,"onChange",null),pP=QT([E.PA],pP);let hP=class extends YT{constructor(){super(...arguments),this.channelLabel=this.props.step.channelLabel,this.contentType="text",this.message=_t(this.props.step.message)}componentDidMount(){(0,E.bH)(this,(0,w.autorun)(()=>{const{channelLabel:e,message:t}=this.props.step;(0,w.runInAction)(()=>{this.channelLabel=e,this.message=_t(t)})}))}get textEncoding(){return Nt(this.message)?"utf8":"binary"}render(){const{channelLabel:e,message:t}=this,n=t.toString(this.textEncoding);return b.createElement(XT,null,b.createElement(tS,null,"Channel Label"),b.createElement(rS,{placeholder:"The channel to send the message to, or nothing to send on all open channels",value:null!=e?e:"",onChange:this.setChannelLabel}),b.createElement(oS,null,b.createElement(tS,null,"Message content"),b.createElement($b,{format:this.contentType,content:t,onFormatted:this.setMessage}),b.createElement(nS,{value:this.contentType,onChange:this.setContentType},b.createElement("option",{value:"text"},"Plain text"),b.createElement("option",{value:"json"},"JSON"),b.createElement("option",{value:"xml"},"XML"))),b.createElement(sS,null,b.createElement(Hf,{contentId:null,language:this.contentType,value:n,onChange:this.setMessage})),b.createElement(ZT,null,"Send ",0===t.length?"an empty":"the above"," message on ",e?`any open channel with the label "${e}"`:"every open data channel","."))}setContentType(e){const t=e.target.value;this.contentType=t}setChannelLabel(e){const t=e.target.value;this.channelLabel=t||void 0,this.updateStep()}setMessage(e){this.message=Ut(e,this.textEncoding),this.updateStep()}updateStep(){this.props.onChange(new Ri(this.channelLabel,this.message.toString(this.textEncoding)))}};QT([w.observable],hP.prototype,"channelLabel",void 0),QT([w.observable],hP.prototype,"contentType",void 0),QT([w.observable],hP.prototype,"message",void 0),QT([w.computed],hP.prototype,"textEncoding",null),QT([w.action.bound],hP.prototype,"setContentType",null),QT([w.action.bound],hP.prototype,"setChannelLabel",null),QT([w.action.bound],hP.prototype,"setMessage",null),hP=QT([E.PA],hP);const mP=G.h2`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    flex-basis: 100%;
    width: 100%;
    box-sizing: border-box;

    /* Required to avoid overflow trimming hanging chars */
    padding: 5px;
    margin: -5px;

    font-style: italic;
`,gP=G.div`
    flex-basis: 100%;
    margin: -4px;
`,fP=G(Kp)`
    width: 30%;
    margin-right: 5px;
    margin-bottom: 10px;
`,yP=G(zC)`
    font-size: 1em;
    padding: 0;
    vertical-align: middle;
`,vP=e=>{var t;return b.createElement(gP,null,b.createElement(fP,{autoFocus:!0,value:e.value,placeholder:"A custom name for this rule",onChange:t=>{e.onEditTitle(t.target.value)},onClick:e=>e.stopPropagation(),onKeyPress:t=>{"Enter"===t.key&&e.onSave(t)}}),b.createElement(yP,{title:"Reset changes to rule name",icon:["fas","undo"],disabled:!e.onCancel,onClick:Op(null!==(t=e.onCancel)&&void 0!==t?t:()=>{})}))};var bP=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const xP=G(Ip)`
    margin-top: 10px;

    width: calc(100% - ${e=>40*e.depth}px);
    margin-left: ${e=>40*e.depth}px;

    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    font-size: ${e=>e.theme.headingSize};

    overflow: initial;

    ${e=>e.collapsed&&!e.disabled?Y`
            user-select: none;

            &:hover {
                ${WC} {
                    display: flex;
                }

                ${UC} {
                    opacity: 0.5;
                }

                box-shadow: 0 2px 15px 0 rgba(0,0,0,${e=>1.5*e.theme.boxShadowAlpha});
            }

            ${e.deactivated&&"opacity: 0.6;"}
        `:e.collapsed?"":Y`
                ${WC} {
                    display: flex;
                }
            `}

    border-left: 5px solid ${e=>e.borderColor};

    &:focus {
        outline: none;
        box-shadow: 0 0 1px 2px ${e=>T.B3(e.theme.popColor,.5)};
        background-color: ${e=>e.theme.mainBackground};
    }
`,wP=G(e=>b.createElement(xP,Object.assign({collapsed:!0,borderColor:"transparent"},y.omit(e,"onAdd"),{role:"button",tabIndex:0,depth:0,onClick:e.onAdd,onKeyPress:Rp}),b.createElement(is,{icon:["fas","plus"]}),"Add a new rule to rewrite requests or responses"))`
    > svg {
        margin: 0 10px;
    }

    margin-top: 20px;

    justify-content: center;
    background-color: ${e=>T.B3(e.theme.mainBackground,.4)};
    box-shadow: 0 0 4px 0 rgba(0,0,0,${e=>e.theme.boxShadowAlpha});
`,EP=G.section`
    align-self: stretch;
    flex-grow: 1;
    flex-basis: 0;
    max-width: calc(50% - 30px);
`,CP=G.h1`
    ${e=>!e.collapsed&&Y`
        opacity: 0.3;
    `}

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    /* Required to avoid overflow trimming hanging chars */
    padding: 5px;
    margin: -5px;
`,TP=G(is).attrs(()=>({icon:["fas","arrow-left"]}))`
    transform: rotate(180deg);
    box-sizing: content-box;
    padding: 0 10px;
    align-self: start;
}
`,SP=G(is).attrs(()=>({icon:["fas","arrow-left"],title:"Then..."}))`
    margin: 10px auto;
    transform: rotate(270deg);
`,PP=G.div`
    display: flex;
    flex-direction: column;
    text-align: left;
`,kP=G.div`
    margin-top: 20px;
    margin-bottom: 20px;
`,RP=G(is).attrs(()=>({icon:["fas","exclamation"],title:"High-priority rule: this rule overrides all non-high-priority rules"}))`
    margin-right: 10px;
    align-self: baseline;
}
`,OP=G(WC)`
    background-image: radial-gradient(
        ${e=>T.B3(e.theme.mainBackground,.9)} 50%,
        transparent 100%
    );
    z-index: 1;
`,HP=e=>b.createElement(OP,{topOffset:7},b.createElement(zC,{icon:["fas",e.hasUnsavedChanges?"save":e.isCollapsed?"chevron-down":"chevron-up"],title:e.hasUnsavedChanges?"Save changes to this rule":e.isCollapsed?"Show rule details":"Hide rule details",onClick:e.hasUnsavedChanges?e.onSave:e.onToggleCollapse}),b.createElement(zC,{title:"Revert this rule to the last saved version",icon:["fas","undo"],disabled:!e.hasUnsavedChanges||e.isNewRule,onClick:e.onReset}),b.createElement(zC,{title:"Give this rule a custom name",icon:["fas","edit"],disabled:e.isEditingTitle,onClick:e.onSetCustomTitle}),b.createElement(zC,{title:e.toggleState?"Deactivate this rule":"Activate this rule",icon:["fas",e.toggleState?"toggle-on":"toggle-off"],onClick:e.onToggleActivation}),b.createElement(zC,{title:"Clone this rule",icon:["far","clone"],onClick:e.onClone}),b.createElement(zC,{title:"Delete this rule",icon:["far","trash-alt"],onClick:e.onDelete})),AP=(e,t)=>{const n={};return e&&e.transition&&(n.transition=e.transition.replace(/transform [\d.]+s/,"transform 100ms")),t.combineWith&&t.combineWith.endsWith("-tail")&&(n.opacity="1"),Object.assign(Object.assign({},e),n)};let $P=class extends b.Component{constructor(){super(...arguments),this.initialMatcherSelect=b.createRef(),this.containerRef=null,this.saveRule=Op(()=>{this.stopEditingTitle(),this.props.saveRule(this.props.path)}),this.resetRule=Op(()=>{this.stopEditingTitle(),this.props.resetRule(this.props.path)}),this.deleteRule=Op(()=>this.props.deleteRule(this.props.path)),this.cloneRule=Op(()=>this.props.cloneRule(this.props.path)),this.toggleCollapse=Op(()=>{requestAnimationFrame(()=>{var e;this.containerRef&&this.containerRef.scrollIntoView({block:"nearest",behavior:"smooth"}),this.initialMatcherSelect.current&&(this.initialMatcherSelect.current.focus(),null===(e=getSelection())||void 0===e||e.empty())}),this.props.toggleRuleCollapsed(this.props.rule.id),this.stopEditingTitle()})}render(){const{index:e,rule:t,path:n,isNewRule:r,hasUnsavedChanges:o,collapsed:s,disabled:a}=this.props,{accountStore:i}=this.props,l=i.user.isPaidUser(),{getPro:c}=i,d=t.type,u=t.matchers.length?t.matchers[0]:void 0;let p;if("http"===d)p=u instanceof Ss.yN.MethodMatcher?rr(Ss.IT[u.method]):void 0!==u?rr("unknown"):"transparent";else if("websocket"===d)p=er("websocket");else if("ethereum"===d)p=er("mutative");else if("ipfs"===d)p=er("html");else{if("webrtc"!==d)throw new kt(d);p=er("rtc-data")}const h=(e=>Object.values($i[e]).filter(e=>{const t=qi.get(e);return!Ni.includes(t)&&!Fi.includes(e)&&Be(Ai[t])}))(d),m=((e,t)=>Object.values(ji[e]).filter(e=>{const n=Mi.get(e);if(Wi.includes(n))return!1;const r=zi[n];return!!(void 0===r||t&&r(t))&&Be(Ai[n])}))(d,u),g=!s||!t.title&&!this.titleEditState,f=!!this.titleEditState&&!s,y=t.title&&!f,v=Yi(t)&&t.priority&&t.priority>el.DEFAULT?b.createElement(RP,null):null;return b.createElement(LC.sx,{draggableId:t.id,index:e,isDragDisabled:!s},(e,i)=>b.createElement(E.nu,null,()=>b.createElement(xP,Object.assign({},e.draggableProps,{borderColor:p,ref:t=>{e.innerRef(t),this.containerRef=t},"aria-expanded":!s,collapsed:s,deactivated:!t.activated,disabled:a,tabIndex:s?0:void 0,onClick:s?this.toggleCollapse:void 0,onKeyPress:Rp,depth:n.length-1,style:AP(e.draggableProps.style,i)}),b.createElement(HP,{isCollapsed:s,isNewRule:r,hasUnsavedChanges:o,onToggleCollapse:this.toggleCollapse,onSave:this.saveRule,onReset:this.resetRule,toggleState:t.activated,onToggleActivation:this.toggleActivation,onClone:this.cloneRule,onDelete:this.deleteRule,isEditingTitle:f,onSetCustomTitle:this.startEnteringCustomTitle}),b.createElement(UC,Object.assign({"aria-label":`Drag handle for ${(y||f)&&t.title?`this '${t.title}'`:"this"} mock rule`},e.dragHandleProps)),y&&b.createElement(mP,null,v,t.title),f&&b.createElement(vP,{value:t.title||"",onEditTitle:this.editTitle,onSave:this.saveRule,onCancel:this.titleEditState.originalTitle!==this.props.rule.title?this.cancelEditingTitle:void 0}),b.createElement(EP,null,g&&b.createElement(CP,{collapsed:s,title:Gy(t)},!y&&v,Gy(t)),!s&&b.createElement(PP,null,b.createElement(kP,null,"Match:"),b.createElement("ul",null,b.createElement(DT,{ref:this.initialMatcherSelect,matcher:u,onChange:this.setInitialMatcher}),t.matchers.slice(1).map((e,n)=>b.createElement(MT,{key:`${n}/${t.matchers.length}`,matcher:e,matcherIndex:n,onChange:(...e)=>this.updateMatcher(n+1,...e),onDelete:()=>this.deleteMatcher(e)})),t.matchers.length>0&&b.createElement(NT,{key:t.type,availableMatchers:h,existingMatchers:t.matchers,onAdd:this.addMatcher})))),g&&b.createElement(TP,null),b.createElement(EP,null,g&&b.createElement(CP,{collapsed:s,title:Yy(t)},Yy(t)),!s&&b.createElement(PP,null,b.createElement(kP,null,"Then:"),t.steps.map((e,t)=>b.createElement(b.Fragment,null,t>0&&b.createElement(SP,{key:`then-${t}`}),b.createElement(IP,{key:t,step:e,stepIndex:t,isPaidUser:l,getPro:c,ruleType:d,availableSteps:m,updateStep:this.updateStep}))))))))}toggleActivation(e){const{rule:t}=this.props;t.activated=!t.activated,e.stopPropagation()}setInitialMatcher(e){const t=this.props.rule.type,n=Li(e);var r,o,s;if(t===n?this.props.rule.matchers[0]=e:(this.props.rule.type=n,this.props.rule.matchers=(r=n,o=e,s=this.props.rule.matchers,[o,...(s||[]).slice(1).filter(e=>((e,t)=>{const n=Hi(e);return!!$i[t][n]})(e,r))])),!this.props.rule.steps.every(t=>((e,t)=>{const n=Hi(e),r=Li(t),o=ji[r][n],s=zi[n];return!(void 0!==s&&!s(t))&&void 0!==o})(t,e))){const e=this.props.getRuleDefaultStep(n);this.props.rule.steps=[e]}!function(e){var t;if("ipfs"!==e.type)return;const n=null===(t=e.matchers[0])||void 0===t?void 0:t.interactionName;if(!n)return;const r=e.matchers.findIndex(e=>"ipfs-arg"===Hi(e));if(o=n,Object.keys(Ga).includes(o)){const t=new Ya(n,void 0);-1===r?e.matchers.splice(1,0,t):e.matchers.splice(r,1,t)}else-1!==r&&e.matchers.splice(r,1);var o}(this.props.rule)}addMatcher(e){this.props.rule.matchers.push(e)}updateMatcher(e,...t){this.props.rule.matchers.splice(e,1,...t)}deleteMatcher(e){const t=this.props.rule;t.matchers=t.matchers.filter(t=>t!==e)}updateStep(e,t){const n=this.props.rule;n.steps[e]=t,(e=>!0===Di[e.type].isFinal)(t)?n.steps=n.steps.slice(0,e+1):e===n.steps.length-1&&n.steps.push(this.props.getRuleDefaultStep(this.props.rule.type))}startEnteringCustomTitle(e){this.titleEditState={originalTitle:this.props.rule.title},this.props.collapsed&&this.props.toggleRuleCollapsed(this.props.rule.id),e.stopPropagation()}editTitle(e){this.props.rule.title=e||void 0}cancelEditingTitle(){this.titleEditState&&(this.editTitle(this.titleEditState.originalTitle),this.titleEditState=void 0)}stopEditingTitle(){var e;this.titleEditState&&(this.props.rule.title!==this.titleEditState.originalTitle&&(this.props.rule.title=(null===(e=this.props.rule.title)||void 0===e?void 0:e.trim())||void 0),this.titleEditState=void 0)}};bP([w.observable],$P.prototype,"titleEditState",void 0),bP([w.action.bound],$P.prototype,"toggleActivation",null),bP([w.action.bound],$P.prototype,"setInitialMatcher",null),bP([w.action.bound],$P.prototype,"addMatcher",null),bP([w.action.bound],$P.prototype,"updateMatcher",null),bP([w.action.bound],$P.prototype,"deleteMatcher",null),bP([w.action.bound],$P.prototype,"updateStep",null),bP([w.action.bound],$P.prototype,"startEnteringCustomTitle",null),bP([w.action.bound],$P.prototype,"editTitle",null),bP([w.action.bound],$P.prototype,"cancelEditingTitle",null),bP([w.action.bound],$P.prototype,"stopEditingTitle",null),$P=bP([(0,E.WQ)("accountStore"),E.PA],$P);let IP=class extends b.Component{componentDidMount(){(0,E.bH)(this,(0,w.reaction)(()=>this.props.step,()=>{this.demoStep=void 0}))}render(){var e;const{isPaidUser:t,getPro:n,ruleType:r,availableSteps:o,step:s,stepIndex:a}=this.props,i=null!==(e=this.demoStep)&&void 0!==e?e:s,l=!t&&i&&Vi(r,i);return b.createElement(b.Fragment,null,b.createElement(_T,{value:i,ruleType:r,onChange:this.updateStep,availableSteps:o,stepIndex:a}),l?b.createElement(Sx,{getPro:n,source:`rule-${s.type}`},b.createElement(eS,{ruleType:r,step:i,onChange:y.noop})):b.createElement(eS,{ruleType:r,step:i,onChange:this.updateStep}))}updateStep(e){const{isPaidUser:t,stepIndex:n,ruleType:r,updateStep:o}=this.props;!t&&Vi(r,e)?this.demoStep=e:o(n,e)}};bP([w.observable],IP.prototype,"demoStep",void 0),bP([w.action.bound],IP.prototype,"updateStep",null),IP=bP([E.PA],IP);var qP=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const jP=G.ol`
    padding: 0 40px 20px;
    min-height: calc(100% - 40px);
`;let DP=class extends b.Component{constructor(){super(...arguments),this.buildDragEndListener=(e,t)=>(0,w.action)(({source:n,destination:r,combine:o})=>{this.currentlyDraggingRuleId=void 0;const{draftRules:s}=this.props;if(o){const t=e[n.index],r=o.draggableId.endsWith("-tail"),a=Vs(s,{id:r?o.draggableId.slice(0,-5):o.draggableId}),i=Us(s,a);return void(Bs(i)?this.props.moveRule(t,a.concat(r?i.items.length:0)):this.props.combineRulesAsGroup(t,a))}if(!r)return void(this.wasGroupOpenBeforeDrag&&(Us(s,e[n.index]).collapsed=!1));const{sourcePath:a,targetPath:i}=function(e,t,n,r){const o=e[n],s=e[r],a=function(e,t){let n=0;for(;void 0!==e[n]&&void 0!==t[n];){const r=t[n]-e[n];if(0!==r)return r;n+=1}return void 0!==e[n]?-1:void 0!==t[n]?1:0}(o,s),i=Ns(t,s),l=y.last(s),c=i.items.length>l?Us(t,s):void 0,d=o.slice(0,-1),u=s.slice(0,-1);if(c&&Bs(c)&&!c.collapsed&&a>0)return{sourcePath:o,targetPath:s.concat(0)};if(void 0===c&&a>0){const e=u.slice(0,-1),t=y.isEqual(d,e)?0:1;return{sourcePath:o,targetPath:s.slice(0,-2).concat(s[s.length-2]+t)}}if(!y.isEqual(d,u)){const e=y.last(s);return{sourcePath:o,targetPath:a<0?u.concat(e):u.concat(e+1)}}return{sourcePath:o,targetPath:s}}(e,t,n.index,r.index);this.props.moveRule(a,i),this.wasGroupOpenBeforeDrag&&(Us(s,i).collapsed=!1)})}beforeDrag({draggableId:e}){this.currentlyDraggingRuleId=e;const t=_s(this.props.draftRules,{id:e});t&&Bs(t)?(this.wasGroupOpenBeforeDrag=!t.collapsed,t.collapsed=!0):this.wasGroupOpenBeforeDrag=void 0}render(){const{draftRules:e,activeRules:t,addRule:n,saveRule:r,resetRule:o,deleteItem:s,cloneItem:a,toggleRuleCollapsed:i,updateGroupTitle:l,getRuleDefaultStep:c,collapsedRulesMap:d}=this.props,{beforeDrag:u,buildDragEndListener:p,currentlyDraggingRuleId:h}=this,{ruleRows:m,indexMapping:g}=MP(e,t,d,h,i,r,o,a,s,l,c);return b.createElement(LC.JY,{onBeforeCapture:u,onDragEnd:p(g,e)},b.createElement(LC.gL,{isCombineEnabled:!0,droppableId:"modify-rule-list"},e=>b.createElement(E.nu,null,()=>b.createElement(jP,Object.assign({ref:e.innerRef},e.droppableProps),b.createElement(wP,{onAdd:n,disabled:void 0!==h}),m,e.placeholder))))}};function MP(e,t,n,r,o,s,a,i,l,c,d,u=e,p=[],h=0){const m={toggleRuleCollapsed:o,saveRule:s,resetRule:a,cloneRule:i,deleteRule:l,getRuleDefaultStep:d};return u.items.reduce((u,g,f)=>{const v=p.concat(f);if(Bs(g)){if(u.ruleRows.push(b.createElement(XC,{key:g.id,group:g,path:v,index:h+u.indexMapping.length,collapsed:!!g.collapsed,updateGroupTitle:c,cloneGroup:i,deleteGroup:l})),u.indexMapping.push(v),g.collapsed)return u;const p=MP(e,t,n,r,o,s,a,i,l,c,d,g,v,h+u.indexMapping.length);u.ruleRows.push(...p.ruleRows),u.indexMapping.push(...p.indexMapping),u.ruleRows.push(b.createElement(eT,{key:g.id+"-tail",group:g,index:h+u.indexMapping.length})),u.indexMapping.push(v.concat(g.items.length))}else{const o=n[g.id],s=function(e,t,n,r){const o=Vs(r,{id:e.id});if(!o)return"new";const s=Ns(n,t),a=Ns(r,o),i=a.items[y.last(o)];if(a.id!==s.id)return"changed";const l=y.intersectionBy(a.items,s.items,"id"),c=y.intersectionBy(s.items,a.items,"id");return(l.indexOf(i)!==c.indexOf(e)||!y.isEqualWith(i,e,Gs))&&"changed"}(g,v,e,t);u.ruleRows.push(b.createElement($P,Object.assign({key:g.id,index:h+u.indexMapping.length,path:v,rule:g,isNewRule:"new"===s,hasUnsavedChanges:!!s,collapsed:o,disabled:void 0!==r&&r!==g.id},m))),u.indexMapping.push(v)}return u},{indexMapping:[],ruleRows:[]})}qP([w.observable],DP.prototype,"currentlyDraggingRuleId",void 0),qP([w.action.bound],DP.prototype,"beforeDrag",null),DP=qP([E.PA],DP);var FP=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},BP=function(e,t,n,r){return new(n||(n=Promise))(function(o,s){function a(e){try{l(r.next(e))}catch(e){s(e)}}function i(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(a,i)}l((r=r.apply(e,t||[])).next())})};const LP=G.section`
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: stretch;
`,NP=G.div`
    overflow-y: scroll;
    flex-grow: 1;
`,UP=G.header`
    box-sizing: border-box;
    width: 100%;
    padding: 20px calc(40px + 16px) 20px 40px; /* ~16px to match scrollbar below */
    background-color: ${e=>e.theme.containerBackground};
    border-bottom: 1px solid rgba(0,0,0,0.12);
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    align-items: center;
`,WP=G.h1`
    font-size: ${e=>e.theme.loudHeadingSize};
    font-weight: bold;
    flex-grow: 1;
`,zP=G(Wp)`
    font-size: ${e=>e.theme.textSize};
    font-weight: bold;
    padding: 10px 24px;
    margin-left: 20px;

    svg {
        margin-right: 5px;
    }
`,_P=G(_p)`
    border: none;
    font-size: 1.2em;
    padding: 5px 10px;
    margin-left: 10px;
`;let VP=class extends b.Component{constructor(){super(...arguments),this.containerRef=b.createRef(),this.collapsedRulesMap=y.fromPairs(Js(this.props.rulesStore.draftRules,e=>[e.id,e.id!==this.props.initialRuleId])),this.getRuleDefaultStep=e=>Ku(e,this.props.rulesStore),this.importRules=()=>BP(this,void 0,void 0,function*(){const e=yield Pp("text",[".htkrules","application/json","application/htkrules+json"]);if(e)try{this.props.rulesStore.loadSavedRules(JSON.parse(e))}catch(e){f(e),alert(`Rules could not be imported: ${e}`)}}),this.exportRules=()=>BP(this,void 0,void 0,function*(){const e=JSON.stringify(ap(this.props.rulesStore.draftRules));Sp(`HTTPToolkit_${ae.format(Date.now(),"YYYY-MM-DD_HH-mm")}.htkrules`,"application/htkrules+json;charset=utf-8",e)})}componentDidMount(){(0,E.bH)(this,(0,w.autorun)(()=>{const e=Js(this.props.rulesStore.draftRules,e=>e.id),t=y.keys(this.collapsedRulesMap),n=y.difference(t,e),r=y.difference(e,t);(0,w.runInAction)(()=>{n.forEach(e=>{delete this.collapsedRulesMap[e]}),r.forEach(e=>{this.collapsedRulesMap[e]=!0})})}));const{initialRuleId:e}=this.props,t=this.containerRef.current;if(e&&t){const n=t.querySelector(`[data-rbd-draggable-id="${e}"]`);requestAnimationFrame(()=>null==n?void 0:n.scrollIntoView())}}render(){const{rules:e,draftRules:t,areSomeRulesUnsaved:n,areSomeRulesNonDefault:r,deleteDraftItem:o,moveDraftRule:s,updateGroupTitle:a,combineDraftRulesAsGroup:i}=this.props.rulesStore,l=this.props.accountStore.user.isPaidUser();return b.createElement(LP,{ref:this.containerRef},b.createElement(UP,null,b.createElement(WP,null,"Transform & Mock HTTP"),b.createElement(_P,{disabled:!r,onClick:this.resetToDefaults,onKeyPress:Rp,title:"Reset rules to default"},b.createElement(is,{icon:["far","trash-alt"]})),b.createElement(_P,{disabled:!l,onClick:this.importRules,onKeyPress:Rp,title:l?"Import a saved set of rules":"With Pro: Import a set of saved rules, so you can build your own ready-to-use collections of predefined rules"},b.createElement(is,{icon:["fas","folder-open"]})),b.createElement(_P,{disabled:!l||!r||0===t.items.length,onClick:this.exportRules,onKeyPress:Rp,title:l?"Export these rules":"With Pro: Export these rules, to save them for quick reuse later"},b.createElement(is,{icon:["fas","download"]})),b.createElement(_P,{disabled:!n,onClick:this.resetRuleDrafts,onKeyPress:Rp,title:"Revert changes since the last save"},b.createElement(is,{icon:["fas","undo"]})),b.createElement(zP,{disabled:!n,onClick:this.saveAll,onKeyPress:Rp,title:"Save all rule changes"},b.createElement(is,{icon:["fas","save"]})," Save changes")),b.createElement(NP,null,b.createElement(DP,{activeRules:e,draftRules:t,collapsedRulesMap:this.collapsedRulesMap,addRule:this.addRule,saveRule:this.saveRule,resetRule:this.resetRule,cloneItem:this.cloneItem,deleteItem:o,toggleRuleCollapsed:this.toggleRuleCollapsed,updateGroupTitle:a,getRuleDefaultStep:this.getRuleDefaultStep,moveRule:s,combineRulesAsGroup:i})))}collapseAll(){Object.keys(this.collapsedRulesMap).forEach(e=>{this.collapsedRulesMap[e]=!0})}saveRule(e){const t=this.props.rulesStore.saveItem(e);this.collapsedRulesMap[t.id]=!0}resetRule(e){this.props.rulesStore.resetRule(e)}cloneItem(e){const t=Qs(Us(this.props.rulesStore.draftRules,e));Bs(t)?t.collapsed=!0:this.collapsedRulesMap[t.id]=!0;const n=y.last(e);this.props.rulesStore.addDraftItem(t,[...e.slice(0,-1),n+1])}saveAll(){this.props.rulesStore.saveRules(),this.collapseAll()}resetToDefaults(){confirm("Reset all rules?")&&(this.props.rulesStore.resetRulesToDefault(),this.collapseAll())}resetRuleDrafts(){this.props.rulesStore.resetRuleDrafts(),this.collapseAll()}addRule(){const e=function(e){return(0,w.observable)({id:crypto.randomUUID(),type:"http",activated:!0,matchers:[],completionChecker:new Ss.zO.Always,steps:[Ku("http",e)]})}(this.props.rulesStore);this.collapsedRulesMap[e.id]=!1,this.props.rulesStore.addDraftItem(e),setTimeout(()=>{const e=this.containerRef.current;if(!e)return;const t=e.querySelector("ol > section:nth-child(2) select");t&&t.focus()},100)}toggleRuleCollapsed(e){this.collapsedRulesMap[e]=!this.collapsedRulesMap[e]}};FP([w.observable],VP.prototype,"collapsedRulesMap",void 0),FP([w.action.bound],VP.prototype,"collapseAll",null),FP([w.action.bound],VP.prototype,"saveRule",null),FP([w.action.bound],VP.prototype,"resetRule",null),FP([w.action.bound],VP.prototype,"cloneItem",null),FP([w.action.bound],VP.prototype,"saveAll",null),FP([w.action.bound],VP.prototype,"resetToDefaults",null),FP([w.action.bound],VP.prototype,"resetRuleDrafts",null),FP([w.action.bound],VP.prototype,"addRule",null),FP([w.action.bound],VP.prototype,"toggleRuleCollapsed",null),VP=FP([(0,E.WQ)("rulesStore"),(0,E.WQ)("accountStore"),E.PA],VP);const KP=VP,JP="38px",QP=G.div.attrs(()=>({role:"tablist"}))`
    width: 100%;
    height: ${JP};
    box-sizing: border-box;

    color: ${e=>e.theme.mainColor};
    background-color: ${e=>e.theme.mainLowlightBackground};

    font-size: ${e=>e.theme.textSize};

    display: flex;
    flex-direction: row;
    align-items: end;
`,GP=G.div`
    box-sizing: border-box;

    width: 200px;
    height: ${JP};

    flex-grow: 0;
    flex-shrink: 1;
    overflow: hidden;

    display: flex;
    flex-direction: row;

    ${e=>e.selected?Y`
            margin-bottom: -1px;

            border-bottom: 3px solid ${e=>e.theme.popColor};

            background-color: ${e=>e.theme.mainBackground};
            box-shadow: 0 0 10px 0 rgba(0,0,0,${e=>e.theme.boxShadowAlpha});
            z-index: 1;
        `:Y`
            background-color: ${e=>e.theme.mainLowlightBackground};

            border-bottom: 3px solid transparent;

            &:hover {
                background-color: ${e=>e.theme.mainBackground};
            }
        `}
`,YP=G.span`
    color: ${e=>rr(e.method)};
    font-size: ${e=>e.theme.textInputFontSize};
    margin-right: 5px;
`,XP=G.span`
    &:empty::before {
        content: 'New request';
        font-style: italic;
        opacity: ${e=>e.theme.lowlightTextOpacity};
        text-align: center;
    }
`,ZP=G(kh)`
`,ek=G(kh)`
    align-self: center;
`,tk=G(Lp).attrs(e=>({role:"tab","aria-selected":e.selected.toString(),tabindex:e.selected?"0":"-1"}))`
    flex-basis: 100%;
    flex-grow: 1;
    flex-shrink: 1;

    text-align: left;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;

    padding: 0 10px;

    :focus-visible {
        outline: none;
        font-weight: bold;

        & + ${ZP} {
            color: ${e=>e.theme.popColor};
        }
    }
`,nk=(0,DE.PA)(e=>{const{request:t}=e.sendRequest,n=b.useCallback(()=>{e.onSelectTab(e.sendRequest)},[e.onSelectTab,e.sendRequest]),r=b.useCallback(t=>{1===t.button&&e.onCloseTab(e.sendRequest)},[e.onCloseTab,e.sendRequest]),o=b.useCallback(t=>{e.onCloseTab(e.sendRequest),t.stopPropagation()},[e.onCloseTab,e.sendRequest]),s=b.useCallback(t=>{e.onContextMenu(t,e.sendRequest)},[e.onContextMenu,e.sendRequest]);return b.createElement(GP,{selected:e.isSelectedTab,onClick:n,onAuxClick:r,onContextMenu:s},b.createElement(tk,{selected:e.isSelectedTab,tabIndex:e.isSelectedTab?0:-1},b.createElement(YP,{method:t.method},t.method),b.createElement(XP,null,t.url.replace(/^https?:\/\//,"")||"")),e.isSelectedTab&&b.createElement(ZP,{title:"Close this tab",icon:["fas","times"],onClick:o,tabIndex:-1}))}),rk=(0,DE.PA)(e=>{const t=b.useRef(null),n=b.useCallback(()=>{const e=t.current;if(!e)return;const n=e.querySelector("[role=tab][aria-selected=true]");n&&n.focus()},[t]),r=b.useCallback(t=>{if("Delete"===t.key)e.onCloseTab(e.selectedTab);else if("ArrowRight"===t.key)e.onMoveSelection(1);else if("ArrowLeft"===t.key)e.onMoveSelection(-1);else if("Home"===t.key)e.onMoveSelection(-1/0);else{if("End"!==t.key)return;e.onMoveSelection(1/0)}requestAnimationFrame(()=>n())},[e.onCloseTab,e.selectedTab,e.onMoveSelection,n]),o=b.useCallback(e=>{e.stopPropagation()},[]),s=b.useCallback((t,n)=>{t.preventDefault(),e.onContextMenu(t,[{type:"option",label:"Duplicate Tab",callback:()=>e.onAddTab(new Rg(n.request))},{type:"option",label:"Close Tab",callback:()=>e.onCloseTab(n)},{type:"option",label:"Close Other Tabs",callback:()=>{const t=[...e.sendRequests];for(let r of t)r!==n&&e.onCloseTab(r)}}])},[e.onAddTab,e.onCloseTab,e.sendRequests]);return b.createElement(QP,{ref:t,onKeyDown:r},e.sendRequests.map(t=>{const n=e.selectedTab===t;return b.createElement(nk,{key:t.id,sendRequest:t,isSelectedTab:n,onSelectTab:e.onSelectTab,onCloseTab:e.onCloseTab,onContextMenu:s})}),b.createElement(ek,{title:"Add another tab to send a new request",icon:["fas","plus"],onKeyDown:o,onClick:()=>e.onAddTab()}))}),ok=G.section`
    display: flex;
    flex-direction: column;
    height: 100%;

    ${e=>e.hasExpandedChild&&Y`
        > :not(.ignores-expanded) {
            /* CollapsibleCard applies its own display property to override this for the expanded card */
            display: none;
        }

        > .ignores-expanded {
            /* Some components (request line & response status) don't disappear, but they shrink */
            transition: margin-bottom 0.1s;
            margin-bottom: -10px;
            z-index: 0;
        }
    `}
`,sk=G(Dp)`
    border-radius: 0;
    margin-bottom: 0;

    flex-basis: auto;

    ${e=>e.collapsed?Y`
                flex-grow: 0;
                flex-shrink: 0;
                min-height: 50px;
            `:Y`
                flex-grow: 1;
                flex-shrink: 1;
                min-height: 0;
            `};

    box-shadow: 0 -2px 5px 0 rgba(0,0,0,${e=>e.theme.boxShadowAlpha});
`,ak=e=>b.createElement(sk,Object.assign({},e),e.children,b.createElement(Eb,{height:"100%"})),ik=G(ak)`
    ${e=>!e.collapsed&&"\n        flex-basis: 50%;\n    "}
`,lk=G.div`
    overflow-y: auto;

    flex-grow: 1;
    flex-shrink: 1;

    margin: 0 -20px -20px -20px;
    padding: 0 20px 20px 20px;
`,ck=G(sk)`
    /* This is required to force the editor to shrink to fit, instead of going
       beyond the limits of the column when other item is expanded and pushes it down */
    overflow-y: hidden;

    ${e=>!e.collapsed&&"\n        /* When we're open, we want space more than any siblings */\n        flex-grow: 9999999;\n        flex-shrink: 0.1;\n\n        /* If we're open, never let us get squeezed to nothing: */\n        min-height: 25vh;\n\n        /* Fixed size required to avoid editor resize thrashing */\n        flex-basis: 60%;\n    "}
`,dk=G(Ib)`
    flex-shrink: 1;
`;var uk=n(25786);const pk=Object.values(Ss.IT).filter(e=>"string"==typeof e),hk=G.form`
    background-color: ${e=>e.theme.mainBackground};
    flex-grow: 0;
    display: flex;

    z-index: 1;
    box-shadow: 0 2px 3px 0 rgba(0,0,0,${e=>e.theme.boxShadowAlpha});
`,mk=G(is).attrs(()=>({icon:["fas","chevron-down"]}))`
    position: absolute;
    top: 50%;
    right: 8px;
    transform: translateY(-50%);

    color: ${e=>e.theme.mainColor};
    opacity: ${e=>e.theme.lowlightTextOpacity};
    font-size: ${e=>e.theme.textInputFontSize};

    pointer-events: none;
`,gk=G(Jp)`
    border-radius: 0;
    border: none;
    outline: none;
    appearance: none;

    border-left: 5px solid ${e=>e.borderColor};

    padding: 5px 0 5px 15px;
    font-size: ${e=>e.theme.textInputFontSize};

    height: 100%;
    width: 100%;

    color: ${e=>e.theme.mainColor};
    background-color: ${e=>e.theme.mainLowlightBackground};
`,fk=G.div`
    position: relative;
    font-size: ${e=>e.theme.textSize};

    flex-shrink: 0;
    flex-grow: 0;
    flex-basis: 105px;

    &:focus-within {
        > svg {
            color: ${e=>e.theme.popColor};
            opacity: 1;
        }

        > select {
            font-weight: bold;
        }
    }
`,yk=G(Kp)`
    flex-basis: 100%;
    flex-grow: 1;

    border-radius: 0;
    border: none;

    padding: 10px 10px 10px;

    font-size: ${e=>e.theme.textSize};

    &:focus {
        outline: none;
    }
`,vk=G(kh)`
    flex-shrink: 0;
    padding: 5px 12px;

    font-size: ${e=>e.theme.textSize};
`,bk=G(Wp)`
    padding: 4px 18px 5px;
    border-radius: 0;

    font-size: ${e=>e.theme.textSize};

    > svg {
        padding: 0;
    }

    &:focus {
        outline: none;
        background-color: ${e=>e.theme.popColor};
    }
`,xk=e=>{const t=b.useCallback(t=>{e.updateMethod(t.target.value)},[e.updateMethod]),n=b.useCallback(t=>{e.updateUrl(t.target.value)},[e.updateUrl]),r=b.useCallback(e=>{const t=e.target;t.value||(t.value="https://")},[]),o=b.useCallback(t=>(t.preventDefault(),e.sendRequest(),!1),[e.sendRequest]),s=b.useCallback(t=>{const n=t.clipboardData.getData("text/plain");if(n.match(/^\s*curl /)){t.preventDefault();try{const t=(0,uk.T)(n)[0];if(!t.url)throw new Error("Could not extract URL from pasted curl command.");e.updateFromHar(t)}catch(e){console.log(e),alert(`Could not parse pasted curl command:\n\n${e.message||e}`)}}},[e.updateFromHar]),a=rr(e.method);return b.createElement(hk,{className:"ignores-expanded",onSubmit:o},b.createElement(fk,null,b.createElement(gk,{value:e.method,onChange:t,borderColor:a},pk.map(e=>b.createElement("option",{key:e,value:e},e))),b.createElement(mk,null)),b.createElement(yk,{type:"url",spellCheck:"false",placeholder:"https://example.com/hello?name=world or paste a cURL command",required:!0,value:e.url,onFocus:r,onChange:n,onPaste:s}),b.createElement(vk,{title:"Copy this request as a code snippet",icon:["far","copy"],disabled:!e.url,onClick:e.showCopyAsSnippetMenu}),b.createElement(bk,{type:"submit",disabled:e.isSending,title:`Send this request (${xp}+Enter)`},e.isSending?b.createElement(is,{spin:!0,fixedWidth:!0,icon:["fas","spinner"]}):b.createElement(ps,{direction:"right"})))};const wk=(0,E.PA)(e=>{var{headers:t,updateHeaders:n}=e,r=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["headers","updateHeaders"]);return b.createElement(sk,Object.assign({},r,{headerAlignment:"left"}),b.createElement("header",null,b.createElement(_v,null,b.createElement(Vv,{expanded:r.expanded,onClick:r.onExpandToggled})),b.createElement(Fp,{onCollapseToggled:r.onCollapseToggled},"Request Headers")),b.createElement(lk,null,b.createElement(xE,{preserveKeyCase:!0,headers:t,onChange:n})))});var Ek=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};let Ck=class extends b.Component{constructor(){super(...arguments),this.updateBody=e=>{this.props.onBodyUpdated(Ut(e,this.textEncoding))}}get textEncoding(){return Nt(this.props.body.decoded)?"utf8":"binary"}render(){const{editorNode:e,expanded:t,onExpandToggled:n,onCollapseToggled:r,headers:o,contentType:s,onContentTypeUpdated:a,body:i}=this.props,l=Wt(i.decoded,this.textEncoding);return b.createElement(ck,Object.assign({},this.props,{headerAlignment:"left"}),b.createElement("header",null,b.createElement(Db,{body:i,onBodyFormatted:this.updateBody,title:"Request body",expanded:t,onExpandToggled:n,onCollapseToggled:r,selectedContentType:s,contentTypeOptions:Mn,onChangeContentType:a})),"rejected"===i.latestEncodingResult.state&&b.createElement(Bb,{error:i.latestEncodingResult.value,headers:o,type:"encoding"}),b.createElement(dk,{showFullBorder:!1},b.createElement(pf.bL,{node:e,contentId:"request",language:s,value:l,onChange:this.updateBody})))}};Ek([w.computed],Ck.prototype,"textEncoding",null),Ck=Ek([E.PA],Ck);var Tk=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const Sk=["GET","HEAD","OPTIONS"],Pk=e=>(Tp("Ctrl+Enter, Cmd+Enter",t=>{e.sendRequest()},[e.sendRequest]),null);let kk=class extends b.Component{constructor(){super(...arguments),this.copyRequestAsSnippet=e=>{return t=this,n=void 0,o=function*(){const{requestInput:t}=this.props;try{const n=function(e,t){const n=e.rawBody.decoded;return yv(bu(xc(Ag(e,{encodedLength:n.byteLength,decoded:n})),!1,{bodySizeLimit:1/0}),t)}(t,e);yield kp(n)}catch(e){console.log(e),alert(`Could not copy this request as a code snippet:\n\n${e.message||e}`)}},new((r=void 0)||(r=Promise))(function(e,s){function a(e){try{l(o.next(e))}catch(e){s(e)}}function i(e){try{l(o.throw(e))}catch(e){s(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r(function(e){e(n)})).then(a,i)}l((o=o.apply(t,n||[])).next())});var t,n,r,o},this.showCopyAsSnippetMenu=e=>{const t=this.props.uiStore,n=this.props.accountStore.user.isPaidUser(),r=t.exportSnippetFormat?Ev(t.exportSnippetFormat):void 0,o=[...n?[]:[{type:"option",label:"With Pro:",enabled:!1,callback:()=>{}}],...r&&n?[{type:"option",label:`Copy as ${Cv(r)} Snippet`,callback:()=>this.copyRequestAsSnippet(r)}]:[],{type:"submenu",enabled:n,label:"Copy as Code Snippet",items:Object.keys(vv).map(e=>({type:"submenu",label:e,items:vv[e].map(e=>({type:"option",label:Cv(e),callback:(0,w.action)(()=>{t.exportSnippetFormat=wv(e),this.copyRequestAsSnippet(e)})}))}))}];t.handleContextMenuEvent(e,o)}}get cardProps(){return this.props.uiStore.sendCardProps}componentDidMount(){(0,E.bH)(this,(0,w.reaction)(()=>this.props.requestInput.method,e=>{if(Sk.includes(e)){if(this.props.requestInput.rawBody.decoded.length>0)return;if(this.cardProps.requestBody.collapsed)return;this.cardProps.requestBody.onCollapseToggled()}else{if(!this.cardProps.requestBody.collapsed)return;this.cardProps.requestBody.onCollapseToggled()}},{fireImmediately:!0}))}render(){const{requestInput:e,sendRequest:t,isSending:n,editorNode:r,uiStore:o}=this.props;return b.createElement(ok,{hasExpandedChild:!!(null==o?void 0:o.expandedSendRequestCard)},b.createElement(Pk,{sendRequest:t}),b.createElement(xk,{method:e.method,updateMethod:this.updateMethod,url:e.url,updateUrl:this.updateUrl,isSending:n,sendRequest:t,updateFromHar:this.props.updateFromHar,showCopyAsSnippetMenu:this.showCopyAsSnippetMenu}),b.createElement(wk,Object.assign({},this.cardProps.requestHeaders,{headers:e.headers,updateHeaders:this.updateHeaders})),b.createElement(Ck,Object.assign({},this.cardProps.requestBody,{headers:e.headers,contentType:e.requestContentType,onContentTypeUpdated:this.updateRequestContentType,body:e.rawBody,onBodyUpdated:this.updateBody,editorNode:r})))}updateMethod(e){this.props.requestInput.method=e}updateUrl(e){this.props.requestInput.url=e}updateHeaders(e){const{requestInput:t}=this.props;t.headers=e}updateRequestContentType(e){const{requestInput:t}=this.props;t.requestContentType=e}updateBody(e){const{requestInput:t}=this.props;t.rawBody.updateDecodedBody(e)}};Tk([w.action.bound],kk.prototype,"updateMethod",null),Tk([w.action.bound],kk.prototype,"updateUrl",null),Tk([w.action.bound],kk.prototype,"updateHeaders",null),Tk([w.action.bound],kk.prototype,"updateRequestContentType",null),Tk([w.action.bound],kk.prototype,"updateBody",null),kk=Tk([(0,E.WQ)("rulesStore"),(0,E.WQ)("uiStore"),(0,E.WQ)("accountStore"),E.PA],kk);const Rk=G(sk)`
    padding-top: 7px;
    padding-bottom: 7px;
    flex-shrink: 0;
    flex-grow: 0;

    z-index: 1;
    box-shadow: 0 2px 3px 0 rgba(0,0,0,${e=>e.theme.boxShadowAlpha});

    > header {
        flex-direction: row;
        justify-content: flex-start;
    }
`,Ok=G(kh).attrs(()=>({icon:["fas","search"],title:"Jump to this request on the View page"}))`
    padding: 3px 10px;
    margin-right: -10px;

    margin-left: auto;
`,Hk=e=>{const t=e.exchange.response;return b.createElement(Rk,{className:"ignores-expanded",ariaLabel:"Response status section",collapsed:!1,headerAlignment:"left"},b.createElement("header",null,b.createElement(Gp,{color:tr(t.statusCode,e.theme)},t.statusCode,": ",t.statusMessage||rn(t.statusCode)),b.createElement($w,{timingEvents:e.exchange.timingEvents}),b.createElement(Gp,{title:"The size of the raw encoded response body"},Jt(t.body.encodedByteLength)),e.showRequestOnViewPage&&b.createElement(Ok,{onClick:e.showRequestOnViewPage})))},Ak=G(Yp)`
    margin-left: auto;
    svg {
        margin-right: 5px;
    }
`,$k=(0,DE.PA)(e=>{var t;return b.createElement(Rk,{className:"ignores-expanded",ariaLabel:"Response status section",collapsed:!1,headerAlignment:"left"},b.createElement("header",null,b.createElement(Gp,{color:tr(void 0,e.theme)},"    ...    "),b.createElement($w,{timingEvents:null!==(t=e.timingEvents)&&void 0!==t?t:{}}),e.abortRequest&&b.createElement(Ak,{color:e.theme.popColor,onClick:e.abortRequest},b.createElement(is,{icon:["fas","times"]}),"Cancel request")))}),Ik=e=>b.createElement(Rk,{className:"ignores-expanded",ariaLabel:"Response status section",collapsed:!1,headerAlignment:"left"},b.createElement("header",null,b.createElement(Gp,{color:tr("aborted",e.theme)},"Failed: ",y.startCase(e.errorType)),b.createElement($w,{timingEvents:e.exchange.timingEvents}),e.showRequestOnViewPage&&b.createElement(Ok,{onClick:e.showRequestOnViewPage})));var qk=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};const jk=e=>{var{httpVersion:t,requestUrl:n,headers:r}=e,o=qk(e,["httpVersion","requestUrl","headers"]);return b.createElement(sk,Object.assign({},o),b.createElement("header",null,b.createElement(_v,null,b.createElement(Vv,{expanded:o.expanded,onClick:o.onExpandToggled})),b.createElement(Fp,{onCollapseToggled:o.onCollapseToggled},"Response Headers")),b.createElement(lk,null,b.createElement(rw,{httpVersion:t,requestUrl:n,headers:r})))},Dk=e=>{var t=qk(e,[]);return b.createElement(ak,Object.assign({},t),b.createElement("header",null,b.createElement(_v,null,b.createElement(Vv,{expanded:t.expanded,onClick:t.onExpandToggled})),b.createElement(Fp,{onCollapseToggled:t.onCollapseToggled},"Response Headers")))};var Mk=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const Fk=["text","raw","base64","image"];let Bk=class extends b.Component{componentDidMount(){(0,E.bH)(this,(0,w.autorun)(()=>{this.props.message||this.onChangeContentType(void 0)}))}get contentViewOptions(){const{message:e}=this.props;return e?Kn(e.contentType,un(e.headers,"content-type"),e.body,e.headers):{preferredContentType:"text",availableContentTypes:["text"]}}onChangeContentType(e){var t;e===(null===(t=this.props.message)||void 0===t?void 0:t.contentType)?this.selectedContentType=void 0:this.selectedContentType=e}render(){const{url:e,message:t,isPaidUser:n,collapsed:r,expanded:o,onCollapseToggled:s,onExpandToggled:a,ariaLabel:i}=this.props,{preferredContentType:l,availableContentTypes:c}=this.contentViewOptions,d=c.includes(this.selectedContentType)?this.selectedContentType:l;if(null==t?void 0:t.body.isDecoded())return b.createElement(ck,{ariaLabel:i,collapsed:r,onCollapseToggled:s,expanded:o},b.createElement("header",null,b.createElement(jb,{body:t.body.decodedData,mimeType:un(t.headers,"content-type"),downloadFilename:qb(e,t.headers),title:"Response body",expanded:o,onExpandToggled:a,onCollapseToggled:s,selectedContentType:d,contentTypeOptions:c,onChangeContentType:this.onChangeContentType,isPaidUser:n})),b.createElement(Fb,{content:t.body.decodedData,contentType:d,headers:t.headers,cache:t.cache}),b.createElement(dk,{showFullBorder:!1},b.createElement(Hb,{contentId:t.id,editorNode:this.props.editorNode,headers:t.headers,contentType:d,expanded:!!o,cache:t.cache},t.body.decodedData)));if(null==t?void 0:t.body.isFailed()){const l=t.body.decodingError,c=t.body.encodedData,d=y.includes(Fk,this.selectedContentType)?this.selectedContentType:"text";return b.createElement(ck,{ariaLabel:i,collapsed:r,onCollapseToggled:s,expanded:o},b.createElement("header",null,b.createElement(jb,{body:c,mimeType:"application/octet-stream",downloadFilename:qb(e,t.headers),title:"Response body",expanded:o,onExpandToggled:a,onCollapseToggled:s,selectedContentType:d,contentTypeOptions:Fk,onChangeContentType:this.onChangeContentType,isPaidUser:n})),b.createElement(Bb,{type:"decoding",error:l,headers:t.rawHeaders}),c&&b.createElement(dk,{showFullBorder:!1},b.createElement(Hb,{contentId:t.id,editorNode:this.props.editorNode,contentType:d,expanded:!!o,cache:t.cache},c)))}return b.createElement(ik,{ariaLabel:i,collapsed:r,onCollapseToggled:s,expanded:o},b.createElement("header",null,b.createElement(jb,{body:void 0,title:"Response body",expanded:o,onExpandToggled:a,onCollapseToggled:s,selectedContentType:d,contentTypeOptions:c,onChangeContentType:this.onChangeContentType,isPaidUser:n})))}};Mk([w.observable],Bk.prototype,"selectedContentType",void 0),Mk([w.computed],Bk.prototype,"contentViewOptions",null),Mk([w.action.bound],Bk.prototype,"onChangeContentType",null),Bk=Mk([E.PA],Bk);const Lk=G.p`
    margin-bottom: 10px;
    line-height: 1.3;
`,Nk=G(Lk)`
    font-weight: bold;
`,Uk=e=>{const{errorType:t,errorMessage:n}=e;return $v(t)||Iv(t)||"client-abort"===t||f(`Unexpected Send error type: ${t}`),b.createElement(sk,{ariaLabel:"HTTP failure section",collapsed:!1},b.createElement("header",null,b.createElement("h1",null,"Request Failure")),b.createElement(Nk,null,b.createElement(ds,null)," ",$v(t)?"This request was not sent successfully":Iv(t)?"This response was not received successfully":"client-abort"===t?"This request was cancelled":`The request failed because of an unexpected error: ${t}`," ",b.createElement(ds,null)),$v(t)?b.createElement(Lk,null,"The upstream server ","wrong-host"===t?"responded with an HTTPS certificate for the wrong hostname":"expired"===t?"has an expired HTTPS certificate":"not-yet-valid"===t?"has an HTTPS certificate with a start date in the future":"untrusted"===t?"has an untrusted HTTPS certificate":"tls-error"===t?"could not complete a TLS handshake":"host-unreachable"===t?"was not reachable on your network connection":"host-not-found"===t||"dns-error"===t?"hostname could not be found":"connection-refused"===t?"refused the connection":Rt(t),", so HTTP Toolkit didn't send the request."):Iv(t)?b.createElement(Lk,null,"The upstream request failed because ","connection-reset"===t?"the connection to the server was reset":"server-unparseable"===t?"the response from the server was unparseable":"server-timeout"===t?"of a timeout waiting for a response from the server":Rt(t),"."):"client-abort"===t?b.createElement(b.Fragment,null,b.createElement(Lk,null,"This request was cancelled after sending, before a response was completed."),b.createElement(Lk,null,"The server may have received and could still be processing this request, but the connection has been closed so HTTP Toolkit will not receive any response.")):b.createElement(Lk,null,"It's not clear what's gone wrong here, but for some reason HTTP Toolkit couldn't successfully and/or securely complete this request. This might be an intermittent issue, and may be resolved by retrying the request."),!!n&&b.createElement(mh,null,"Error: ",n))};let Wk=class extends b.Component{get cardProps(){return this.props.uiStore.sendCardProps}render(){const{exchange:e,uiStore:t}=this.props;return e?b.createElement(ok,{hasExpandedChild:!!(null==t?void 0:t.expandedSentResponseCard)},e.isSuccessfulExchange()?this.renderSuccessfulResponse(e):e.isCompletedExchange()?this.renderFailedResponse(e):this.renderInProgressResponse()):null}renderSuccessfulResponse(e){const{uiStore:t,editorNode:n,showRequestOnViewPage:r}=this.props,o=e.response;return b.createElement(b.Fragment,null,b.createElement(Hk,{exchange:e,showRequestOnViewPage:r,theme:t.theme}),b.createElement(jk,Object.assign({},this.cardProps.responseHeaders,{httpVersion:e.httpVersion,requestUrl:e.request.parsedUrl,headers:o.rawHeaders})),b.createElement(Bk,Object.assign({},this.cardProps.responseBody,{isPaidUser:this.props.accountStore.user.isPaidUser(),url:e.request.url,message:o,editorNode:n})))}renderFailedResponse(e){const{uiStore:t,showRequestOnViewPage:n}=this.props,r=Fv(e.tags);return r||f(`Sent response failed with no error tags: ${JSON.stringify(e.tags)} (${e.abortMessage})`),b.createElement(b.Fragment,null,b.createElement(Ik,{exchange:e,errorType:null!=r?r:"unknown",showRequestOnViewPage:n,theme:t.theme}),b.createElement(Uk,{errorType:null!=r?r:"unknown",errorMessage:e.abortMessage}))}renderInProgressResponse(){const{uiStore:e,editorNode:t,requestInput:n,exchange:r,abortRequest:o}=this.props;return b.createElement(b.Fragment,null,b.createElement($k,{timingEvents:null==r?void 0:r.timingEvents,abortRequest:o,theme:e.theme}),b.createElement(Dk,Object.assign({},this.cardProps.responseHeaders)),b.createElement(Bk,Object.assign({},this.cardProps.responseBody,{isPaidUser:this.props.accountStore.user.isPaidUser(),url:n.url,editorNode:t})))}};Wk=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a}([(0,E.WQ)("uiStore"),(0,E.WQ)("accountStore"),E.PA],Wk);var zk=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const _k=G.div`
    height: 100vh;
    position: relative;
    background-color: ${e=>e.theme.mainBackground};
`,Vk=G.div`
    position: relative;
    height: calc(100vh - ${JP});
    box-shadow: 0 -2px 5px 1px rgba(0,0,0,${e=>e.theme.boxShadowAlpha});
`,Kk=e=>(Tp("Ctrl+Tab, Cmd+Tab",()=>{e.onMoveSelection(1)},[e.onMoveSelection]),Tp("Ctrl+Shift+Tab, Cmd+Shift+Tab",()=>{e.onMoveSelection(-1)},[e.onMoveSelection]),Tp("Ctrl+w, Cmd+w",()=>{e.onCloseTab()},[e.onCloseTab]),Tp("Escape",()=>{e.onAbortRequest&&e.onAbortRequest()},[e.onAbortRequest]),null);let Jk=class extends b.Component{constructor(){super(...arguments),this.requestEditorNode=pf.KF({attributes:{style:"height: 100%"}}),this.responseEditorNode=pf.KF({attributes:{style:"height: 100%"}}),this.sendRequest=()=>{const{sendRequest:e,selectedRequest:t}=this.props.sendStore;e(t).catch(e=>{var t,n,r;console.log(e);const o=e instanceof p&&(null===(t=e.apiError)||void 0===t?void 0:t.message)?null===(n=e.apiError)||void 0===n?void 0:n.message:null!==(r=e.message)&&void 0!==r?r:e;alert(o)})},this.deleteSelectedRequest=()=>{const{deleteRequest:e,selectedRequest:t}=this.props.sendStore;e(t)},this.showRequestOnViewPage=()=>{const{sentExchange:e}=this.props.sendStore.selectedRequest;if(!e)return;const{navigate:t}=this.props;t(`/view/${e.id}`)}}render(){var e,t,n;const{sendRequests:r,selectRequest:o,moveSelection:s,deleteRequest:a,selectedRequest:i,addRequestInput:l}=this.props.sendStore,{handleContextMenuEvent:c}=this.props.uiStore;return b.createElement(_k,null,b.createElement(rk,{sendRequests:r,selectedTab:i,onSelectTab:o,onMoveSelection:s,onCloseTab:a,onAddTab:l,onContextMenu:c}),b.createElement(Kk,{onCloseTab:this.deleteSelectedRequest,onMoveSelection:s,onAbortRequest:null===(e=null==i?void 0:i.pendingSend)||void 0===e?void 0:e.abort}),b.createElement(Vk,{id:"send-tabpanel",role:"tabpanel"},b.createElement(hf,{split:"vertical",primary:"second",defaultSize:"50%",minSize:300,maxSize:-300},b.createElement(kk,{requestInput:i.request,sendRequest:this.sendRequest,isSending:"pending"===(null===(t=i.pendingSend)||void 0===t?void 0:t.promise.state),editorNode:this.requestEditorNode,updateFromHar:this.updateFromHar}),b.createElement(Wk,{requestInput:i.request,exchange:i.sentExchange,abortRequest:null===(n=i.pendingSend)||void 0===n?void 0:n.abort,showRequestOnViewPage:i.sentExchange?this.showRequestOnViewPage:void 0,editorNode:this.responseEditorNode}))),b.createElement(pf.oj,{node:this.requestEditorNode},b.createElement($f,{contentId:null})),b.createElement(pf.oj,{node:this.responseEditorNode},b.createElement($f,{contentId:null})))}updateFromHar(e){const{selectedRequest:t}=this.props.sendStore;t.request=function(e){var t,n;const r=Cu("",e,{});let o=r.rawHeaders;return parseInt(r.httpVersion.split(".")[0],10)>=2&&(o=on(o,r.method)),new Rg({method:r.method,url:r.url,headers:o,requestContentType:null!==(n=Nn(null!==(t=un(r.headers,"content-type"))&&void 0!==t?t:"application/octet-stream"))&&void 0!==n?n:"text",rawBody:r.body.decoded})}(e)}};zk([w.action.bound],Jk.prototype,"updateFromHar",null),Jk=zk([(0,E.WQ)("sendStore"),(0,E.WQ)("uiStore"),E.PA],Jk);const Qk=Jk,Gk=G.div`
    display: flex;
    flex-direction: row;
`,Yk=G(e=>b.createElement("nav",Object.assign({},(0,y.omit)(e,"isSelected"),{onClick:t=>{t.tabValue&&e.onClick(t.tabValue)}}),e.children.map(t=>b.cloneElement(t,{key:t.props.value,selected:e.isSelected(t.props.value)}))))`
    width: 80px;
    border-right: solid 2px ${e=>e.theme.containerBackground};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`,Xk=G(e=>b.createElement(Lp,{className:e.className,onClick:t=>{t.tabValue=e.value}},b.createElement(is,{icon:e.icon}),e.children))`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;

    width: 100%;
    font-size: ${e=>e.theme.textSize};
    box-sizing: border-box;

    padding: 10px 20px 10px 0;

    user-select: none;
    &:hover, &:focus {
        outline: none;
        color: ${e=>e.theme.popColor};
    }

    opacity: 0.6;
    ${e=>e.selected&&Y`
        opacity: 1;
        font-weight: bold;
        border-right: solid 3px ${e.theme.popColor};
        padding-right: 22px;
        position: relative;
        right: -2px;
    `}

    > svg {
        margin-bottom: 10px;
        width: 2em;
        height: auto;
    }
`,Zk=Y`
    font-size: ${e=>e.theme.textSize};
    padding: 6px 16px;

    ${e=>e.highlight&&Y`
        &:not(:disabled) {
            background-color: ${e=>e.theme.popColor};
        }
    `}
`,eR=G(Wp)`${Zk}`,tR=G(zp)`${Zk}`,nR=G.p`
    font-style: italic;
    line-height: 1.3;
`,rR=G(uh)`
    &:not(header + &):not(:first-child) {
        margin-top: 40px;
    }
`,oR=G.div`
    display: flex;
    align-items: center;
    justify-content: start;

    &:not(header + &) {
        margin-top: 40px;
    }

    ${rR} {
        margin-top: 0;
    }
`;var sR=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const aR=G.div`
    width: 100%;

    display: grid;
    grid-template-columns: auto min-content;
    grid-gap: 10px;
    margin: 10px 0;

    align-items: baseline;

    ${Kp} {
        align-self: stretch;
    }
`,iR=G.div`
    min-width: 300px;
    font-family: ${e=>e.theme.monoFontFamily};
`;let lR=class extends b.Component{constructor(){super(...arguments),this.inputValue=""}render(){const{values:e,onDelete:t,placeholder:n}=this.props;return b.createElement(aR,null,e.map(e=>[b.createElement(iR,{key:`value-${e}`},e),b.createElement(eR,{key:`delete-${e}`,onClick:()=>t(e)},b.createElement(is,{icon:["far","trash-alt"]}))]),b.createElement(Kp,{placeholder:n,value:this.inputValue,onChange:this.changeInput}),b.createElement(eR,{disabled:!this.props.validationFn(this.inputValue)||e.includes(this.inputValue),onClick:this.addHost},b.createElement(is,{icon:["fas","plus"]})))}addHost(e){this.props.onAdd(this.inputValue),this.inputValue=""}changeInput(e){this.inputValue=e.target.value,this.props.validationFn(e.target)}};sR([w.observable],lR.prototype,"inputValue",void 0),sR([w.action.bound],lR.prototype,"addHost",null),sR([w.action.bound],lR.prototype,"changeInput",null),lR=sR([E.PA],lR);var cR=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const dR=G(eR).attrs(()=>({children:"Restart app to activate",onClick:()=>window.location.reload()}))`
    position: absolute;
    top: 18px;
    left: 20px;
    font-weight: bold;

    &:not(:disabled) {
        background-color: ${e=>e.theme.popColor};
    }

    ${e=>!e.visible&&"display: none;"}
`,uR=G(is).attrs(()=>({icon:["fas","save"]}))`
    margin-left: 10px;
    color: ${e=>e.theme.warningColor};
`,pR=G.div`
    display: grid;
    grid-template-columns: fit-content(45%) fit-content(45%) fit-content(10%);
    align-items: baseline;

    grid-gap: 10px;
    margin-bottom: 10px;

    input {
        & + ${ds} {
            visibility: hidden;
            align-self: center;
        }

        &:invalid + ${ds} {
            visibility: visible;
        }
    }
`,hR=G.p`
    margin-bottom: 10px;
`,mR=G(Jp)`
    display: inline-block;
    margin-top: 10px;
    width: auto;
    font-size: ${e=>e.theme.textSize};
    padding: 3px;
`,gR=G.button.attrs(()=>({type:"button"}))`
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;

    margin-left: auto;

    background: none;
    border: none;
    padding: 0;
    color: ${e=>e.theme.mainColor};
    font-family: ${e=>e.theme.fontFamily};
    font-size: ${e=>e.theme.textSize};
`,fR=G.div`
    margin: 10px 0;
    display: flex;
    flex-direction: column;
    position: relative;
`,yR=G.div`
    display: grid;
    grid-template-columns: auto min-content min-content;
    grid-gap: 10px;
    align-items: center;
    font-family: ${e=>e.theme.monoFontFamily};
`,vR=G(kh)`
    position: absolute;
    top: 1px;
    right: 2px;
`,bR=Hp(function(e){if(!e)return!1;if(Gd(e))return!0;const t=e.replace(/\*/g,"Z");return Gd(t)&&(!("URLPattern"in window)||new window.URLPattern(`https://${e}`).test(`https://${t}`))},"Should be a valid hostname (with optional * wildcards)"),xR=Hp(vp?e=>/^([a-zA-Z]:[\\\/]|[\\\/])((?:[^<>:"\/\\|?*]+)[\\\/]?)*$/.test(e):e=>/^\/(?:[^/]+\/?)*$/.test(e),"Should be a valid absolute file path");let wR=class extends b.Component{constructor(){var e,t;super(...arguments),this.minPortValue=((null===(e=this.props.proxyStore.portConfig)||void 0===e?void 0:e.startPort)||8e3).toString(),this.maxPortValue=((null===(t=this.props.proxyStore.portConfig)||void 0===t?void 0:t.endPort)||65535).toString(),this.tlsKeyFileInput=this.props.proxyStore.keyLogFilePath||""}onMinPortChange({target:{value:e}}){this.minPortValue=e,this.updatePortConfig()}onMaxPortChange({target:{value:e}}){this.maxPortValue=e,this.updatePortConfig()}get isCurrentPortInRange(){const{httpProxyPort:e,portConfig:t}=this.props.proxyStore;return t?e>=t.startPort&&e<=t.endPort:e>=8e3}get portConfig(){return{startPort:parseInt(this.minPortValue,10),endPort:parseInt(this.maxPortValue,10)}}get isCurrentPortConfigValid(){return nu(this.portConfig)}updatePortConfig(){this.isCurrentPortConfigValid&&this.props.proxyStore.setPortConfig(this.portConfig)}get tlsHostnames(){const e=this.props.proxyStore.tlsInterceptionConfig;return"tlsPassthrough"in e?e.tlsPassthrough:e.tlsInterceptOnly}get tlsMode(){return"tlsInterceptOnly"in this.props.proxyStore.tlsInterceptionConfig?"intercept-only":"passthrough"}addTlsPassthroughHostname(e){this.tlsHostnames.push({hostname:e})}removeTlsPassthroughHostname(e){const t=this.tlsHostnames,n=y.findIndex(t,t=>t.hostname===e);-1!==n&&t.splice(n,1)}toggleTlsMode(){const e=this.props.proxyStore,t=this.tlsHostnames;"passthrough"===this.tlsMode?e.tlsInterceptionConfig={tlsInterceptOnly:t}:e.tlsInterceptionConfig={tlsPassthrough:t}}setTlsKeyFilePath({target:e}){this.tlsKeyFileInput=e.value,this.tlsKeyFileInput.trim()?xR(e)&&(this.props.proxyStore.keyLogFilePath=this.tlsKeyFileInput.trim()):this.props.proxyStore.keyLogFilePath=void 0}setTlsKeyFilePathFromDialog(){return e=this,t=void 0,r=function*(){const e=yield ye.selectSaveFilePath();e&&(0,w.runInAction)(()=>{this.props.proxyStore.keyLogFilePath=e})},new((n=void 0)||(n=Promise))(function(o,s){function a(e){try{l(r.next(e))}catch(e){s(e)}}function i(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(a,i)}l((r=r.apply(e,t||[])).next())});var e,t,n,r}clearTlsKeyFilePath(){this.tlsKeyFileInput="",this.props.proxyStore.keyLogFilePath=void 0}render(){const e=this.props,{proxyStore:t}=e,n=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["proxyStore"]),{httpProxyPort:r,http2Enabled:o,http2CurrentlyEnabled:s,tlsInterceptionConfig:a,currentTlsInterceptionConfig:i,keyLogFilePath:l,currentKeyLogFilePath:c}=t,d=this.tlsMode,u=this.tlsHostnames;return b.createElement(Dp,Object.assign({},n),b.createElement("header",null,b.createElement(Fp,{onCollapseToggled:n.onCollapseToggled},"Proxy Settings")),b.createElement(dR,{visible:this.isCurrentPortConfigValid&&!this.isCurrentPortInRange||o!==s||!y.isEqual(a,i)||l!==c}),b.createElement(pR,null,b.createElement(uh,null,"Minimum port"),b.createElement(Kp,{type:"number",required:!0,min:"1",max:"65535",value:this.minPortValue,onChange:this.onMinPortChange}),b.createElement(ds,null),b.createElement(uh,null,"Maximum port"),b.createElement(Kp,{type:"number",required:!0,min:this.minPortValue,max:"65535",value:this.maxPortValue,onChange:this.onMaxPortChange}),b.createElement(ds,null)),b.createElement(hR,null,"The proxy is currently using port ",b.createElement("strong",null,r),this.isCurrentPortConfigValid&&!this.isCurrentPortInRange?", outside this range. Restart the app now to use this configuration.":"."),b.createElement(nR,null,"When opening HTTP Toolkit, it will start the proxy on the first port in this range that is available. If all ports in the range are in use, the first free port above 8000 will be used instead."),je(Fe.value,"^1.12.0")&&b.createElement(b.Fragment,null,b.createElement(oR,null,b.createElement(rR,null,"TLS Passthrough"),!y.isEqual(a,i)&&b.createElement(uR,{title:"Restart app to apply changes"}),b.createElement(gR,{title:"passthrough"===d?"Listed hostnames are not intercepted. Click to switch to intercept-only mode.":"Only listed hostnames are intercepted. Click to switch to passthrough mode.",onClick:this.toggleTlsMode},"passthrough"===d?"Exclude hostnames":"Intercept only these hostnames",b.createElement(is,{icon:["fas","passthrough"===d?"toggle-on":"toggle-off"]}))),b.createElement(lR,{values:u.map(e=>e.hostname),onAdd:this.addTlsPassthroughHostname,onDelete:this.removeTlsPassthroughHostname,placeholder:"intercept-only"===d?"A hostname whose TLS connections should be intercepted":"A hostname whose TLS connections should not be intercepted",validationFn:bR}),b.createElement(nR,null,"intercept-only"===d?b.createElement(b.Fragment,null,"Only TLS connections to these hostnames will be intercepted by HTTP Toolkit. All other TLS connections will be forwarded upstream without interception. Non-TLS traffic is always visible regardless of this setting."):b.createElement(b.Fragment,null,"TLS connections to these hostnames will be forwarded upstream untouched, without interception. This may solve some certificate trust connectivity issues, but traffic within these TLS connections will not be accessible."))),je(Fe.value,"^0.1.44 || ^1.0.0")&&b.createElement(b.Fragment,null,b.createElement(oR,null,b.createElement(rR,null,"HTTP/2 Support"),o!==s&&b.createElement(uR,{title:"Restart app to apply changes"})),b.createElement(mR,{value:JSON.stringify(o),onChange:(0,w.action)(e=>{const n=e.currentTarget.value;n&&(t.http2Enabled=JSON.parse(n))})},b.createElement("option",{value:"true"},"Enabled for all clients"),b.createElement("option",{value:'"fallback"'},"Enabled only for HTTP/2-only clients"),b.createElement("option",{value:"false"},"Disabled for all clients"))),je(Fe.value,"^1.23.0")&&b.createElement(b.Fragment,null,b.createElement(oR,null,b.createElement(rR,null,"TLS Key Log File"),l!==c&&b.createElement(uR,{title:"Restart app to apply changes"})),b.createElement(fR,null,je(Me.value,"^1.23.0")?l?b.createElement(yR,null,l,b.createElement(eR,{onClick:this.setTlsKeyFilePathFromDialog},b.createElement(is,{icon:["fas","folder-open"]})),b.createElement(eR,{onClick:this.clearTlsKeyFilePath},b.createElement(is,{icon:["far","trash-alt"]}))):b.createElement(eR,{onClick:this.setTlsKeyFilePathFromDialog},"Select where to save the TLS keylog file"):b.createElement(b.Fragment,null,b.createElement(Kp,{placeholder:navigator.platform.startsWith("Win")?"C:\\tls-keys.log":"/tmp/tls-keys.log",value:this.tlsKeyFileInput,onChange:this.setTlsKeyFilePath}),!!this.tlsKeyFileInput&&b.createElement(vR,{title:"Unset TLS key file",icon:["fas","times"],onClick:this.clearTlsKeyFilePath}))),b.createElement(nR,null,"If set, TLS keys for all client & server traffic will be logged to this file, allowing inspection of raw TLS packet contents & details in low-level packet inspection tools like Wireshark.")))}};cR([w.observable],wR.prototype,"minPortValue",void 0),cR([w.observable],wR.prototype,"maxPortValue",void 0),cR([w.action.bound],wR.prototype,"onMinPortChange",null),cR([w.action.bound],wR.prototype,"onMaxPortChange",null),cR([w.computed],wR.prototype,"isCurrentPortInRange",null),cR([w.computed],wR.prototype,"portConfig",null),cR([w.computed],wR.prototype,"isCurrentPortConfigValid",null),cR([w.action.bound],wR.prototype,"addTlsPassthroughHostname",null),cR([w.action.bound],wR.prototype,"removeTlsPassthroughHostname",null),cR([w.action.bound],wR.prototype,"toggleTlsMode",null),cR([w.observable],wR.prototype,"tlsKeyFileInput",void 0),cR([w.action.bound],wR.prototype,"setTlsKeyFilePath",null),cR([w.action.bound],wR.prototype,"setTlsKeyFilePathFromDialog",null),cR([w.action.bound],wR.prototype,"clearTlsKeyFilePath",null),wR=cR([(0,E.WQ)("proxyStore"),E.PA],wR);const ER="[A-Za-z0-9\\-.]+",CR="\\d+",TR="[^@/:]+",SR=[new RegExp(`^(${ER})(:${CR})?$`),new RegExp(`^(${TR})(:${TR})?@(${ER})(:${CR})?$`),new RegExp(`^(${ER}):(${CR})@(${TR}):(${TR})$`),new RegExp(`^(${ER}):(${CR}):(${TR}):(${TR})$`),new RegExp(`^(${TR}):(${TR}):(${ER}):(${CR})$`)],PR=e=>{const t=SR.findIndex(t=>t.test(e));if(-1===t)throw new Error(`Proxy format does not match expected patterns: ${e}`);const n=e.match(SR[t]);switch(t){case 0:case 1:return e;case 2:case 3:return`${n[3]}:${n[4]}@${n[1]}:${n[2]}`;case 4:return`${n[1]}:${n[2]}@${n[3]}:${n[4]}`;default:throw new Error(`Unexpected regex index: ${t}`)}};var kR=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const RR=G.div`
    margin-top: 10px;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    > ${rR}, > ${nR} {
        flex-basis: 100%;
    }

    > ${ds} {
        align-self: center;
    }

    > ${Kp} {
        flex-grow: 1;
    }

    > ${eR} {
        margin-left: 10px;
    }
`,OR=G(Jp)`
    width: auto;
    font-size: ${e=>e.theme.textSize};
    padding: 3px;

    margin-right: 10px;
`,HR=e=>Qd(e)||"*"===e,AR=Hp(Qd,"Should be a plain hostname, optionally with a specific port"),$R=Hp(HR,"Should be a plain hostname, optionally with a specific port, or '*'"),IR=e=>!!e&&SR.some(t=>t.test(e)),qR=Hp(IR,"Should be a plain hostname, optionally with a specific port and/or username:password");let jR=class extends b.Component{constructor(){super(...arguments),this.proxyType=this.props.rulesStore.upstreamProxyType,this.proxyHostInput=this.props.rulesStore.upstreamProxyHost||""}setProxyType(e){const t=e.currentTarget.value;this.proxyType=t,it({category:"Config",action:"Set Proxy",value:this.proxyType}),("direct"===t||"system"===t)&&(this.props.rulesStore.upstreamProxyType=this.proxyType)}setProxyHostInput(e){qR(e.target),this.proxyHostInput=e.target.value}saveProxyHost(){if("direct"===this.proxyType||"system"===this.proxyType)throw new Error(`Can't save proxy host for ${this.proxyType} proxy`);const e=this.props.rulesStore;e.upstreamProxyType=this.proxyType,e.upstreamProxyHost=PR(this.proxyHostInput)}addNoProxyHost(e){const{rulesStore:t}=this.props;t.upstreamNoProxyHosts=[...t.upstreamNoProxyHosts,e]}removeNoProxyHost(e){const{rulesStore:t}=this.props;t.upstreamNoProxyHosts=y.without(t.upstreamNoProxyHosts,e)}render(){const{effectiveSystemProxyConfig:e,upstreamProxyType:t,upstreamProxyHost:n,upstreamNoProxyHosts:r}=this.props.rulesStore,{proxyType:o,proxyHostInput:s,setProxyType:a,setProxyHostInput:i,saveProxyHost:l,addNoProxyHost:c,removeNoProxyHost:d}=this;return b.createElement(b.Fragment,null,b.createElement(rR,null,"Upstream Proxy"),b.createElement(RR,null,b.createElement(OR,{value:o,onChange:a},b.createElement("option",{value:"system"},"Use system settings"),b.createElement("option",{value:"direct"},"Connect directly"),b.createElement("option",{value:"http"},"Use an HTTP proxy"),b.createElement("option",{value:"https"},"Use an HTTPS proxy"),b.createElement("option",{value:"socks4"},"Use a SOCKS 4 proxy"),b.createElement("option",{value:"socks4a"},"Use a SOCKS 4a proxy"),b.createElement("option",{value:"socks5"},"Use a SOCKS 5 proxy"),b.createElement("option",{value:"socks5h"},"Use a SOCKS 5h proxy")),"system"===o&&("ignored"===e||"unparseable"===e)&&b.createElement(ds,null),"system"===o&&e&&b.createElement(nR,null,"ignored"===e?b.createElement(b.Fragment,null,"The system is configured with a localhost proxy. To avoid issues with recursive proxy loops, this will be ignored and requests will be sent directly. Localhost proxies must be manually configured."):"unparseable"===e?b.createElement(b.Fragment,null,"The system proxy settings could not be parsed, so requests will be sent directly."):b.createElement(b.Fragment,null,"The configured system proxy is ",e.proxyUrl,".")),"direct"!==o&&"system"!==o&&b.createElement(b.Fragment,null,b.createElement(Kp,{placeholder:`The ${o} proxy host details, e.g. example.com or user:pwd@example.com:8080`,value:s,onChange:i}),b.createElement(eR,{disabled:!IR(s)||PR(s)===n&&o===t,onClick:l},b.createElement(is,{icon:["fas","save"]})))),"direct"!==o&&"system"!==o&&b.createElement(b.Fragment,null,b.createElement(rR,null,"Non-proxied hosts"),b.createElement(lR,{placeholder:"A host whose traffic should not be sent via the proxy",onAdd:c,onDelete:d,values:r,validationFn:AR}),b.createElement(nR,null,"Requests to these hosts will always be sent directly, not via the configured proxy.")))}};kR([w.observable],jR.prototype,"proxyType",void 0),kR([w.action.bound],jR.prototype,"setProxyType",null),kR([w.observable],jR.prototype,"proxyHostInput",void 0),kR([w.action.bound],jR.prototype,"setProxyHostInput",null),kR([w.action.bound],jR.prototype,"saveProxyHost",null),kR([w.action.bound],jR.prototype,"addNoProxyHost",null),kR([w.action.bound],jR.prototype,"removeNoProxyHost",null),jR=kR([E.PA],jR);const DR=G.div`
    display: grid;
    grid-template-columns: 1fr 1fr min-content;
    grid-gap: 10px;
    margin: 10px 0;

    align-items: baseline;

    ${Kp} {
        align-self: stretch;
    }

    input[type=file] {
        display: none;
    }
`,MR=G.div`
    font-style: italic;
`,FR=G.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;

    > :first-child {
        flex: 1 1;
    }

    > button {
        margin-left: 10px;
    }

    > svg {
        flex: 1 1 100%;
        text-align: center;
    }
`,BR=G(is).attrs(()=>({icon:["fas","spinner"],spin:!0}))`
    margin: 0 auto;
`;let LR=class extends b.Component{constructor(){super(...arguments),this.clientCertHostInput="",this.certFileInputRef=b.createRef(),this.decryptClientCertData=(0,w.flow)(function*(){const{pfx:e,passphrase:t}=this.clientCertData;this.clientCertState="processing",this.clientCertError=void 0;const n=yield Vl(e,t);this.handleClientCertValidationResult(n)})}removeClientCertificate(e){const{clientCertificateHostMap:t}=this.props.rulesStore;delete t[e]}addClientCertificate(){const{clientCertificateHostMap:e}=this.props.rulesStore;e[this.clientCertHostInput]=this.clientCertData,it({category:"Config",action:"Add Client Cert"}),this.clientCertHostInput="",this.clientCertData=void 0,this.clientCertState=void 0}onClientCertSelected(e){const t=e.target;if(!t.files||!t.files.length)return;const n=t.files[0],r=new FileReader;r.readAsArrayBuffer(n),this.clientCertState="processing",this.clientCertError=void 0;const o=this;r.addEventListener("load",(0,w.flow)(function*(){let e;o.clientCertData={pfx:r.result,filename:n.name},e=yield Vl(o.clientCertData.pfx,void 0),"invalid-passphrase"===e?(e=yield Vl(o.clientCertData.pfx,""),"valid"===e&&(o.clientCertData.passphrase=""),o.handleClientCertValidationResult(e)):o.handleClientCertValidationResult(e)})),r.addEventListener("error",()=>{o.clientCertState="error"})}handleClientCertValidationResult(e){this.clientCertError=void 0,"valid"===e?this.clientCertState="decrypted":"invalid-passphrase"===e?this.clientCertState="encrypted":"invalid-format"===e?(this.clientCertState="error",this.clientCertError="Parsing failed"):"missing-key"===e?(this.clientCertState="error",this.clientCertError="No private key found"):"missing-cert"===e?(this.clientCertState="error",this.clientCertError="No certificate found"):Rt(e)}dropClientCertData(){this.clientCertData=void 0,this.clientCertState=void 0}render(){const{clientCertificateHostMap:e}=this.props.rulesStore;return b.createElement(b.Fragment,null,b.createElement(rR,null,"Client Certificates"),b.createElement(DR,null,Object.entries(e).map(([e,t])=>[b.createElement(iR,{key:`host-${e}`},e),b.createElement(MR,{key:`filename-${e}`},t.filename),b.createElement(eR,{key:`delete-${e}`,onClick:()=>this.removeClientCertificate(e)},b.createElement(is,{icon:["far","trash-alt"]}))]),b.createElement(Kp,{placeholder:"A host where the certificate should be used",value:this.clientCertHostInput,onChange:(0,w.action)(e=>{this.clientCertHostInput=e.target.value,$R(e.target)})}),void 0===this.clientCertState?b.createElement(b.Fragment,null,b.createElement(eR,{onClick:()=>this.certFileInputRef.current.click()},"Load a client certificate"),b.createElement("input",{ref:this.certFileInputRef,type:"file",accept:".pfx,.p12,application/x-pkcs12",onChange:this.onClientCertSelected})):"processing"===this.clientCertState?b.createElement(BR,null):"decrypted"===this.clientCertState?b.createElement(FR,null,b.createElement(MR,null,this.clientCertData.filename),b.createElement(eR,{onClick:this.dropClientCertData},b.createElement(is,{icon:["fas","undo"],title:"Deselect this certificate"}))):"encrypted"===this.clientCertState?b.createElement(FR,null,b.createElement(Kp,{placeholder:`The passphrase for ${this.clientCertData.filename}`,value:this.clientCertData.passphrase||"",onChange:(0,w.action)(e=>{this.clientCertData.passphrase=e.target.value})}),b.createElement(eR,{onClick:()=>this.decryptClientCertData()},b.createElement(is,{icon:["fas","unlock"],title:"Decrypt with this passphrase"})),b.createElement(eR,{onClick:this.dropClientCertData},b.createElement(is,{icon:["fas","undo"],title:"Deselect this certificate"}))):"error"===this.clientCertState?b.createElement(FR,null,b.createElement("p",null,b.createElement(ds,null)," ",this.clientCertError||"Invalid certificate"),b.createElement(eR,{onClick:this.dropClientCertData},b.createElement(is,{icon:["fas","undo"],title:"Deselect this certificate"}))):Rt(this.clientCertState),b.createElement(eR,{disabled:!HR(this.clientCertHostInput)||"decrypted"!==this.clientCertState||!!e[this.clientCertHostInput],onClick:this.addClientCertificate},b.createElement(is,{icon:["fas","plus"]}))),b.createElement(nR,null,"These certificates will be used for client TLS authentication, if requested by the server, when connecting to their corresponding hostname. ",je(Fe.value,"^1.22.0")?b.createElement(b.Fragment,null,"Use ",b.createElement("code",null,"*")," to use a certificate for all hosts."):""))}};kR([w.observable],LR.prototype,"clientCertHostInput",void 0),kR([w.action.bound],LR.prototype,"removeClientCertificate",null),kR([w.action.bound],LR.prototype,"addClientCertificate",null),kR([w.observable],LR.prototype,"clientCertData",void 0),kR([w.observable],LR.prototype,"clientCertState",void 0),kR([w.observable],LR.prototype,"clientCertError",void 0),kR([w.action.bound],LR.prototype,"onClientCertSelected",null),kR([w.action.bound],LR.prototype,"dropClientCertData",null),LR=kR([E.PA],LR);const NR=G.div`
    display: grid;
    grid-template-columns: 1fr min-content;
    grid-gap: 10px;
    margin: 10px 0;

    align-items: baseline;

    input[type=file] {
        display: none;
    }
`,UR=G.div`
    font-style: italic;
`,WR=G(eR)`
    grid-column: 1 / span 2;
`;let zR=class extends b.Component{constructor(){super(...arguments),this.certFileButtonRef=b.createRef(),this.addCertificate=(0,w.flow)(function*(){const{rulesStore:e}=this.props,t=this.certFileButtonRef.current;try{const n=yield Pp("arraybuffer",[".pem",".crt",".cert",".der","application/x-pem-file","application/x-x509-ca-cert"]),r=yield function(e){return Bl(this,void 0,void 0,function*(){return(yield Wl({type:"parse-cert",buffer:e})).result})}(n);if(e.additionalCaCertificates.some(({rawPEM:e})=>e===r.rawPEM))return t.setCustomValidity("This CA is already trusted."),void t.reportValidity();e.additionalCaCertificates.push(r)}catch(e){console.warn(e);const n=Pt(e).message;t.setCustomValidity(`Could not load certificate: ${n}${n.endsWith(".")?"":"."} File must be a PEM or DER-formatted CA certificate.`),t.reportValidity()}}.bind(this))}removeCertificate(e){const{rulesStore:t}=this.props;y.pull(t.additionalCaCertificates,e)}render(){const{additionalCaCertificates:e}=this.props.rulesStore;return b.createElement(b.Fragment,null,b.createElement(rR,null,"Trusted CA Certificates"),b.createElement(NR,null,e.map(e=>{const{subject:{org:t,name:n},serial:r}=e;return[b.createElement(UR,{key:r},[t&&(!n||n.length<=5)?t:void 0,n,r?`(serial ${r})`:void 0].filter(e=>!!e).join(" ")),b.createElement(eR,{key:`delete-${r}`,onClick:()=>this.removeCertificate(e)},b.createElement(is,{icon:["far","trash-alt"]}))]}),b.createElement(WR,{onClick:this.addCertificate,type:"submit",ref:this.certFileButtonRef},"Load a CA certificate")),b.createElement(nR,null,"These Certificate Authority (CA) certificates will be considered as trusted certificate roots for all HTTPS requests, in addition to the existing set of built-in trusted CAs."))}};kR([w.action.bound],zR.prototype,"removeCertificate",null),zR=kR([E.PA],zR);let _R=class extends b.Component{unwhitelistHost(e){const{whitelistedCertificateHosts:t}=this.props.rulesStore,n=t.indexOf(e);n>-1&&t.splice(n,1)}addHostToWhitelist(e){this.props.rulesStore.whitelistedCertificateHosts.push(e),it({category:"Config",action:"Whitelist Host"})}render(){const e=this.props,{rulesStore:t}=e,n=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["rulesStore"]),{whitelistedCertificateHosts:r}=t;return b.createElement(Dp,Object.assign({},n),b.createElement("header",null,b.createElement(Fp,{onCollapseToggled:n.onCollapseToggled},"Connection Settings")),y.isString(Fe.value)&&je(Fe.value,_e)&&b.createElement(jR,{rulesStore:t}),y.isString(Fe.value)&&je(Fe.value,"^1.7.0")&&b.createElement(zR,{rulesStore:t}),y.isString(Fe.value)&&je(Fe.value,"^0.1.26 || ^1.0.0")&&b.createElement(b.Fragment,null,b.createElement(LR,{rulesStore:t})),b.createElement(rR,null,"Host HTTPS Whitelist"),b.createElement(lR,{placeholder:"A host to exclude from strict HTTPS checks",onAdd:this.addHostToWhitelist,onDelete:this.unwhitelistHost,values:r,validationFn:AR}),b.createElement(nR,null,"Requests to these hosts will skip certificate validation and accept some older TLS configurations. These requests will be successful regardless of any self-signed, expired or otherwise invalid HTTPS configurations."))}};kR([w.action.bound],_R.prototype,"unwhitelistHost",null),kR([w.action.bound],_R.prototype,"addHostToWhitelist",null),_R=kR([(0,E.WQ)("rulesStore"),E.PA],_R);var VR=n(46670),KR=n(65),JR=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const QR=G(eR).attrs(()=>({type:"submit"}))`
    grid-column: 1 / span 3;
`,GR=G(Kp)`
    align-self: stretch;
`,YR=G.div`
    font-family: ${e=>e.theme.monoFontFamily};
`,XR=G.div`
    grid-column: 2;
    font-style: italic;

    display: flex;
    align-items: baseline;
`,ZR=G(eR)`
    margin-left: auto;
`,eO=G(eR)``,tO=G(eR)``,nO=G.div`
    display: grid;
    grid-template-columns: 1fr 1fr min-content;
    grid-gap: 10px;
    margin: 10px 0;
    align-items: baseline;
`;function rO(e,t){e.setCustomValidity(t||""),e.reportValidity()}let oO=class extends b.Component{constructor(){super(...arguments),this.uploadSpecButtonRef=b.createRef(),this.specProcessingInProgress=!1,this.enteredBaseUrl="",this.baseUrlInputRef=b.createRef(),this.uploadSpec=(0,w.flow)(function*(){rO(this.uploadSpecButtonRef.current);try{const e=yield Pp("text",[".json",".yaml"]);if(!e)return;this.specProcessingInProgress=!0;let t,n=yield function(){try{const t=JSON.parse(e);return Promise.resolve(t)}catch(e){return Promise.reject(e)}}().catch(()=>VR.parse(e)).catch(e=>{throw console.warn("OpenAPI spec parsing error:",e),new Error("File could not be parsed as either YAML or JSON")});if("2.0"===n.swagger)t=yield new Promise((e,t)=>{KR.convertObj(n,{patch:!0,resolve:!1},(n,r)=>{if(n)return t(n);r.warnings&&r.warnings.length&&(console.warn("Some issues found whilst parsing spec:"),r.warnings.forEach(e=>console.warn(e))),e(r.openapi)})});else{if(!n.openapi||!Ie.satisfies(n.openapi,"^3"))throw new Error("This file doesn't contain an OpenAPI v3 or Swagger v2 specification");t=n}yield _l(t,["api.build.example"]),this.selectedSpec=t;const{servers:r}=t;if(r&&r.length>=1){let{url:e,variables:t}=r[0];t&&Object.entries(t).forEach(([t,n])=>{e=e.replace(`{${t}}`,n.default.toString())}),requestAnimationFrame(()=>this.onBaseUrl(e))}}catch(e){console.log(e),rO(this.uploadSpecButtonRef.current,Pt(e).message)}finally{this.specProcessingInProgress=!1}}).bind(this),this.saveApi=(0,w.flow)(function*(){const e=this.enteredBaseUrl.replace(/https?:\/\//,""),t=yield _l(this.selectedSpec,["http://"+e,"https://"+e]);this.props.apiStore.addCustomApi(e,t),it({category:"Config",action:"Add API spec"}),this.enteredBaseUrl="",this.selectedSpec=void 0}).bind(this)}render(){const e=this.props,{apiStore:t}=e,n=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["apiStore"]);return b.createElement(Dp,Object.assign({},n),b.createElement("header",null,b.createElement(Fp,{onCollapseToggled:n.onCollapseToggled},"API Settings")),b.createElement(uh,null,"OpenAPI specifications"),b.createElement(nO,null,y.map(t.customOpenApiInfo,(e,t)=>b.createElement(b.Fragment,{key:t},b.createElement(YR,null,t),b.createElement(XR,null,e.info.title),b.createElement(tO,{onClick:()=>this.deleteApi(t)},b.createElement(is,{icon:["far","trash-alt"]})))),this.selectedSpec?b.createElement(b.Fragment,null,b.createElement(GR,{placeholder:"Base URL for requests to match against this spec",value:this.enteredBaseUrl,onChange:e=>this.onBaseUrl(e.target.value),ref:this.baseUrlInputRef}),b.createElement(XR,null,this.selectedSpec.info.title,b.createElement(ZR,{onClick:this.resetApiInputs},b.createElement(is,{icon:["fas","undo"]}))),b.createElement(eO,{disabled:!this.selectedSpec||!this.enteredBaseUrl||!!this.baseUrlError,onClick:this.saveApi},b.createElement(is,{icon:["fas","save"]}))):b.createElement(QR,{type:"submit",onClick:this.specProcessingInProgress?void 0:this.uploadSpec,ref:this.uploadSpecButtonRef},this.specProcessingInProgress?b.createElement(is,{icon:["fas","spinner"],spin:!0}):"Load an OpenAPI or Swagger spec")),b.createElement(nR,null,"APIs here will provide documentation & validation for all matching requests within their base URL."),b.createElement(nR,null,"HTTP Toolkit also includes built-in specifications for 2600+ popular public APIs."))}validateBaseUrl(e){if(e.startsWith("/"))throw new Error("Base URLs must specify a host");e.startsWith("http://")||e.startsWith("https://")||(e="https://"+e);const t=new URL(e);if(!["http:","https:"].includes(t.protocol))throw new Error("Base URLs must be HTTP or HTTPS");if(t.search)throw new Error("Base URLs can't contain query parameters");if(t.hash)throw new Error("Base URLs can't contain hash fragments");const n=Object.keys(this.props.apiStore.customOpenApiInfo),r=e.replace(/^https?:\/\//,"");if(n.includes(r))throw new Error("This URL is already mapped to an API")}onBaseUrl(e){this.enteredBaseUrl=e;const t=this.baseUrlInputRef.current;try{this.validateBaseUrl(e),this.baseUrlError=void 0,rO(t)}catch(e){this.baseUrlError=Pt(e),rO(t,e instanceof TypeError?"Not a valid URL":Pt(e).message)}}resetApiInputs(){this.enteredBaseUrl="",this.baseUrlError=void 0,this.selectedSpec=void 0}deleteApi(e){this.props.apiStore.deleteCustomApi(e)}};JR([w.observable.ref],oO.prototype,"selectedSpec",void 0),JR([w.observable],oO.prototype,"specProcessingInProgress",void 0),JR([w.observable],oO.prototype,"enteredBaseUrl",void 0),JR([w.observable],oO.prototype,"baseUrlError",void 0),JR([w.action.bound],oO.prototype,"onBaseUrl",null),JR([w.action.bound],oO.prototype,"resetApiInputs",null),JR([w.action.bound],oO.prototype,"deleteApi",null),oO=JR([(0,E.WQ)("apiStore"),E.PA],oO);const sO=G.section`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`,aO=G.div`
    height: 100%;
    width: 100%;
    overflow-y: auto;
`,iO=G.section`
    margin: 0px auto 20px;
    padding: 40px;
    max-width: 800px;
    position: relative;

    * {
        transition: background-color 0.3s, margin-bottom 0.1s;
    }
`,lO=G.h1`
    font-size: ${e=>e.theme.loudHeadingSize};
    font-family: ${e=>e.theme.titleTextFamily};
    font-weight: bold;
    margin-bottom: 40px;
`,cO=G.div`
    display: grid;
    grid-template-columns: fit-content(40%) 1fr;
    grid-gap: 10px;
`,dO=G.div`
    margin-top: 30px;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
`,uO=G.div`
    margin-top: 30px;

    strong {
        user-select: all;
    }
`,pO=G.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    border: 3px solid #999;
    margin: auto 20px;
`,hO=G.div`
    width: 60px;
    height: 60px;
    background-color: ${e=>e.theme[e.themeColor]};
`,mO=G.div`
    border: 3px solid #999;
    height: 300px;
    flex-grow: 1;
    margin: auto 0;
`,gO=G(is).attrs(()=>({icon:["fas","spinner"],spin:!0}))`
    margin: 0 0 0 10px;
`;let fO=class extends b.Component{constructor(){super(...arguments),this.confirmSubscriptionCancellation=()=>{const e=this.props.accountStore.userSubscription;if(!e)throw new Error("Can't cancel without a subscription");const t=zd.SubscriptionPlans[e.sku].name;let n;if("active"===e.status)n=`It will remain usable until it expires in ${(0,ae.distanceInWordsToNow)(e.expiry)} but will not renew.`;else{if("past_due"!==e.status)throw new Error(`Cannot cancel subscription with status ${e.status}`);n="No more renewals will be attempted and it will deactivate immediately."}confirm([`This will cancel your HTTP Toolkit ${t} subscription.`,n,"Are you sure?"].join("\n\n"))&&this.props.accountStore.cancelSubscription().catch(e=>{alert(e.message)})}}render(){var e;const{uiStore:t}=this.props,{user:n,userEmail:r,userSubscription:o,subscriptionPlans:s,isAccountUpdateInProcess:a,getPro:i,canManageSubscription:l,logOut:c}=this.props.accountStore,d=t.settingsCardProps;if(!n.userHasSubscription())return b.createElement(sO,null,b.createElement(Wp,{onClick:()=>i("settings-page")},"Get Pro"));const u=o;return b.createElement(aO,null,b.createElement(iO,null,b.createElement(lO,null,"Settings"),b.createElement(Dp,Object.assign({},d.account),b.createElement("header",null,b.createElement(Fp,{onCollapseToggled:d.account.onCollapseToggled},"Account")),b.createElement(cO,null,b.createElement(uh,null,"Account email"),b.createElement(ph,null,r),b.createElement(uh,null,"Subscription status"),b.createElement(ph,null,{active:"Active",trialing:"Active (trial)",past_due:b.createElement("strong",{title:Xl`
                                            Your subscription payment failed, and will be reattempted.
                                            If retried payments fail your subscription will be cancelled.
                                        `},"Past due ",b.createElement(ds,null)),deleted:u.expiry&&(0,ae.isFuture)(u.expiry)?`Active (until ${u.expiry.toLocaleDateString()})`:"Cancelled"}[u.status]||"Unknown",a&&b.createElement(gO,null)),b.createElement(uh,null,"Subscription plan"),b.createElement(ph,null,"fulfilled"===s.state?null===(e=s.value[u.sku])||void 0===e?void 0:e.name:y.startCase(u.sku)),b.createElement(uh,null,{active:"Next renews",trialing:"Renews",past_due:"Next payment attempt",deleted:"Ends"}[u.status]||"Current period ends"),b.createElement(ph,null,(0,ae.distanceInWordsStrict)(new Date,u.expiry,{addSuffix:!0,partialMethod:"round"})," (",(0,ae.format)(u.expiry.toString(),"Do [of] MMMM YYYY"),")")),b.createElement(dO,null,u.lastReceiptUrl&&b.createElement(tR,{href:u.lastReceiptUrl,target:"_blank",rel:"noreferrer noopener"},"View latest invoice"),l&&b.createElement(b.Fragment,null,u.updateBillingDetailsUrl&&b.createElement(tR,{href:u.updateBillingDetailsUrl,target:"_blank",rel:"noreferrer noopener",highlight:"past_due"===u.status},"Update billing details"),b.createElement(eR,{onClick:this.confirmSubscriptionCancellation,disabled:a},"Cancel subscription",a&&b.createElement(gO,null))),null),b.createElement(uO,null,"Questions? Email ",b.createElement("strong",null,"billing@httptoolkit.com"))),n.isPaidUser()&&b.createElement(b.Fragment,null,y.isString(Fe.value)&&je(Fe.value,"^0.1.14 || ^1.0.0")&&b.createElement(b.Fragment,null,b.createElement(wR,Object.assign({},d.proxy)),b.createElement(_R,Object.assign({},d.connection))),b.createElement(oO,Object.assign({},d.api)),b.createElement(Dp,Object.assign({},d.themes),b.createElement("header",null,b.createElement(Fp,{onCollapseToggled:d.themes.onCollapseToggled},"Themes")),b.createElement(Gk,null,b.createElement(Yk,{onClick:e=>{return n=this,r=void 0,s=function*(){if("custom"===e){const e=yield Pp("text",[".htktheme",".htk-theme",".json"]);if(!e)return;try{const n=t.buildCustomTheme(e);t.setTheme(n)}catch(e){alert(e.message||e)}}else t.setTheme(e)},new((o=void 0)||(o=Promise))(function(e,t){function a(e){try{l(s.next(e))}catch(e){t(e)}}function i(e){try{l(s.throw(e))}catch(e){t(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o(function(e){e(n)})).then(a,i)}l((s=s.apply(n,r||[])).next())});var n,r,o,s},isSelected:e=>t.themeName===e},b.createElement(Xk,{icon:"MagicWand",value:"automatic"},"Automatic"),b.createElement(Xk,{icon:"Sun",value:"light"},"Light"),b.createElement(Xk,{icon:"Moon",value:"dark"},"Dark"),b.createElement(Xk,{icon:"Sun",value:"nord"},"Nord Light"),b.createElement(Xk,{icon:"Sun",value:"sepia"},"Sepia Light"),b.createElement(Xk,{icon:"Moon",value:"midnight"},"Midnight Dark"),b.createElement(Xk,{icon:"Moon",value:"dracula"},"Dracula Dark"),b.createElement(Xk,{icon:"CircleHalf",value:"high-contrast"},"High Contrast"),b.createElement(Xk,{icon:"Swatches",value:"custom"},"Custom")),b.createElement(pO,null,b.createElement(hO,{themeColor:"mainColor"}),b.createElement(hO,{themeColor:"mainBackground"}),b.createElement(hO,{themeColor:"highlightColor"}),b.createElement(hO,{themeColor:"highlightBackground"}),b.createElement(hO,{themeColor:"primaryInputColor"}),b.createElement(hO,{themeColor:"primaryInputBackground"}),b.createElement(hO,{themeColor:"containerWatermark"}),b.createElement(hO,{themeColor:"containerBorder"}),b.createElement(hO,{themeColor:"mainLowlightBackground"}),b.createElement(hO,{themeColor:"containerBackground"})),b.createElement(mO,null,b.createElement($f,{contentId:null,language:"html",defaultValue:Vu})))))))}};fO=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a}([(0,E.WQ)("accountStore"),(0,E.WQ)("uiStore"),E.PA],fO);const yO=fO;var vO=n(1681);const bO=G.dialog`
    /* Modal dialogs render in the browser's top layer, centered natively,
       so no positioning or z-index is required. We just reset the default
       chrome, ready for each modal's own styling: */
    padding: 0;
    border: none;
    background: transparent;

    overflow: visible;

    &::backdrop {
        /* This must not use CSS variables: ::backdrop can't inherit custom
           properties from the page in Chromium <122 (i.e. old Electron): */
        background: ${e=>e.theme.modalGradient};
        opacity: ${e=>{var t;return null!==(t=e["data-backdrop-opacity"])&&void 0!==t?t:.9}};
    }
`,xO=e=>{const t=b.useRef(null),n=b.useRef(e.onClose);n.current=e.onClose,b.useLayoutEffect(()=>{const e=t.current;e.showModal();const r=()=>{var e;return null===(e=n.current)||void 0===e?void 0:e.call(n)};return e.addEventListener("close",r),()=>{e.removeEventListener("close",r),e.close()}},[]);const{onClose:r}=e,o=b.useCallback(e=>{e.preventDefault(),null==r||r()},[r]),s=b.useCallback(e=>{e.target===t.current&&(null==r||r())},[r]);return b.createElement(bO,{ref:t,onCancel:o,onClick:s,"data-backdrop-opacity":e.backdropOpacity,className:e.className,"aria-labelledby":e["aria-labelledby"],"aria-label":e["aria-label"]},e.children)};var wO=function(e,t,n,r){return new(n||(n=Promise))(function(o,s){function a(e){try{l(r.next(e))}catch(e){s(e)}}function i(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(a,i)}l((r=r.apply(e,t||[])).next())})};const EO=G(xO)`
    width: auto;
    max-width: 340px;

    border-radius: 16px;
    /* Clip children (e.g. the square-cornered small print strip at the
       bottom) to the rounded corners: */
    overflow: hidden;
    box-shadow: 0 0 0 1px ${e=>e.theme.containerBorder} inset;

    outline: none;

    background-color: ${e=>e.theme.mainBackground};
    color: ${e=>e.theme.mainColor};

    line-height: 1.5;
`,CO=G.button`
    margin: 20px;
    width: calc(100% - 40px);
    min-height: 58px;

    font-family: ${e=>e.theme.fontFamily};
    font-size: ${e=>e.theme.subHeadingSize};
    font-weight: bold;
    line-height: 1;

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    background: linear-gradient(to bottom, #F65430, #D93815);
    border: 1px solid ${e=>e.theme.popColor};
    color: ${e=>e.theme.popOverlayColor};
    border-radius: 12px;

    &:hover:not([disabled]) {
        border: 1px solid ${e=>e.theme.mainColor};
        transition: all ease-in 0.3s;
        background: linear-gradient(to bottom, #F65430, #D93815);
    }

    padding: 19px 24px;
    box-shadow:
        rgba(255, 255, 255, 0.15) 0px 2px 1px 0px inset,
        rgba(0, 0, 0, 0.05) 0px -2px 2px 0px inset;
`,TO=G.button`
    position: absolute;
    top: 0;
    left: 0;
    padding: 16px;

    background: none;
    border: none;
    color: ${e=>e.theme.mainColor};
    cursor: pointer;

    &:hover {
        color: ${e=>e.theme.mainLowlightColor};
    }

    > svg {
        width: 20px;
        height: 20px;
    }
`,SO=G.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`,PO=G.img.attrs(()=>({src:_g}))`
    margin: 48px 16px 16px;
    width: 30%;
    fill: var(--cinnabar-red);
`,kO=G.h2`
    margin: 16px 32px;
    text-align: center;
    font-size: ${({theme:e})=>e.largeHeadingSize};
    line-height: 1.2;
`,RO=G.h3`
    margin: -10px 32px 16px;
    text-align: center;
`,OO=G.span`
    white-space: break-spaces;
    word-break: break-word;
    hyphens: auto;
`,HO=G.input`
    padding: 16px;
    margin: 16px 0 0;
    width: 100%;

    border-style: solid;
    color: ${e=>e.theme.inputColor};
    border-color: ${e=>e.theme.inputBorder};
    background-color: ${e=>e.theme.inputBackground};

    border-width: 1px 0 1px 0;
    z-index: 1;

    font-size: ${({theme:e})=>e.textSize};

    &:focus {
        border-color: ${e=>e.theme.inputColor};
    }
`,AO=G(HO)`
    :not(:placeholder-shown) {
        letter-spacing: 4px;
    }

    text-align: center;
`,$O=G.p`
    margin: 0;
    padding: 10px 16px 12px;
    width: 100%;

    font-size: ${({theme:e})=>e.smallPrintSize};
    font-style: italic;

    background-color: ${e=>e.theme.mainLowlightBackground};
    color: ${e=>e.theme.mainColor};

    a {
        color: ${e=>e.theme.mainColor};
        text-decoration: underline;

        &:hover {
            color: ${e=>e.theme.mainLowlightColor};
        }
    }
`,IO=Z`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`,qO=G.div`
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-top: 4px solid ${e=>e.theme.popOverlayColor};
    border-radius: 50%;
    width: 24px;
    height: 24px;
    animation: ${IO} 1s linear infinite;
    margin: -4px 0;
`,jO=G.div`
    color: red;
    margin: 16px 20px 0;
`,DO=(0,DE.PA)(({accountStore:e})=>{const t=b.useCallback(()=>{e.cancelLogin()},[]);return b.createElement(EO,{onClose:t},b.createElement(eh,{onClose:t}),b.createElement(FO,{accountStore:e}))}),MO=e=>{requestAnimationFrame(()=>null==e?void 0:e.focus())},FO=({accountStore:e})=>{const[t,n]=(0,b.useState)(""),[r,o]=(0,b.useState)(""),[s,a]=(0,b.useState)(!1),[i,l]=(0,b.useState)(!1),[c,d]=(0,b.useState)(!1),u=b.createElement($O,null,"By creating an account you accept the ",b.createElement("a",{href:"https://httptoolkit.com/terms-of-service/",target:"_blank"},"Terms of Service")," and ",b.createElement("a",{href:"https://httptoolkit.com/privacy-policy/",target:"_blank"},"Privacy Policy"),".");return s?b.createElement(SO,{onSubmit:n=>wO(void 0,void 0,void 0,function*(){n.preventDefault(),l(!0),d(!1);try{yield(0,zd.loginWithCode)(t,r),yield e.finalizeLogin(t)}catch(e){l(!1),d((0,vO.asErrorLike)(e).message||"An error occurred")}})},b.createElement(TO,{type:"button",onClick:()=>{a(!1),d(!1),o("")},"aria-label":"Go back"},b.createElement(is,{icon:["fas","arrow-left"],size:"2x"})),b.createElement(PO,null),b.createElement(kO,null,"Enter the code"),b.createElement(RO,null,"sent to you at",b.createElement("br",null),b.createElement(OO,null,t)),b.createElement(AO,{name:"otp",type:"text",inputMode:"numeric",pattern:"\\d{6}",required:!0,placeholder:"Enter the 6 digit code",ref:MO,value:r,onChange:e=>{const t=e.target.value.replace(/\D/g,"").slice(0,6);o(t)},disabled:i}),c&&b.createElement(jO,null,c),b.createElement(CO,{type:"submit",disabled:i},i?b.createElement(qO,null):"Login"),u):b.createElement(SO,{onSubmit:e=>wO(void 0,void 0,void 0,function*(){e.preventDefault(),l(!0),d(!1);try{yield(0,zd.sendAuthCode)(t,"website"),l(!1),a(!0)}catch(e){l(!1),d((0,vO.asErrorLike)(e).message||"An error occurred")}})},b.createElement(PO,null),b.createElement(kO,null,"Enter your email"),b.createElement(HO,{name:"email",type:"email",required:!0,placeholder:"you@email.example",ref:MO,value:t,onChange:e=>n(e.target.value),disabled:i}),c&&b.createElement(jO,null,c),b.createElement(CO,{type:"submit",disabled:i},i?b.createElement(qO,null):"Send Code"),u)},BO=G(_p)`
    padding: 5px 20px;
    margin: 20px auto;

    &:not([disabled]) {
        color: ${e=>e.theme.mainBackground};
        border-color: ${e=>e.theme.mainBackground};
    }

    border-color: rgba(255, 255, 255, 0.6);
    font-size: ${e=>e.theme.textSize};
`;var LO=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const NO=G(xO)`
    display: flex;
    flex-direction: row;
    color: ${e=>e.theme.mainBackground};

    min-width: 850px;
    max-width: 980px;
    width: 90%;
`,UO=G.section`
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding-right: 20px;
    max-width: 400px;
`,WO=G.h1`
    font-size: ${e=>e.theme.loudHeadingSize};
    font-weight: bold;
    letter-spacing: -1px;
    text-align: center;
`,zO=G(Lp)`
    background: none;
    border: none;

    margin: 10px auto;
    padding: 10px 10px;

    font-family: ${e=>e.theme.fontFamily};
    font-size: ${e=>e.theme.headingSize};
    color: ${e=>e.theme.mainColor};

    display: flex;
    align-items: center;
    flex-direction: row;

    > svg {
        margin: 0 10px;
        z-index: 1;
    }
`,_O=G.span`
    padding: 10px 15px;
    border-radius: 8px;

    &:first-child {
        padding-right: 40px;
        margin-right: -40px;
    }

    &:last-child {
        padding-left: 40px;
        margin-left: -40px;
    }

    ${e=>e.selected&&Y`
        background-color: ${e=>e.theme.mainBackground};
        border-bottom: 3px solid ${e=>e.theme.containerBorder};
        box-shadow: 0 4px 10px 0 rgba(0,0,0,${e=>e.theme.boxShadowAlpha/2});
    `}

    ${e=>!e.selected&&Y`
        color: ${e=>e.theme.mainBackground};
        opacity: 0.7;
    `}
`,VO=G.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    width: 300px;
    margin: 50px auto 0;

    > p {
        margin-bottom: 10px;
        text-align: center;
        word-break: break-word;
    }
`,KO=G(_p)`
    letter-spacing: -0.5px;

    &:not(:last-child) {
        margin-bottom: 10px;
    }

    &:not([disabled]) {
        color: ${e=>e.theme.mainBackground};
        border-color: ${e=>e.theme.mainBackground};
    }
`,JO=G.span`
    white-space: nowrap;
`,QO=G.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    color: ${e=>e.theme.mainColor};
    max-width: 830px;
`,GO=G.section`
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 10px 0 rgba(0,0,0,${e=>e.theme.boxShadowAlpha/2});
    border-radius: 4px;
    border: 1px solid ${e=>e.theme.containerBorder};

    > * {
        padding: 0 20px;
    }

    flex: 1 1;

    ${e=>e.highlighted?Y`
        background-color: ${e=>e.theme.mainBackground};
        color: ${e=>e.theme.mainColor};

        z-index: 1;
        margin: -15px -5px -15px 0;

        flex-basis: 1%;

        > ${YO} {
            padding: 37.5px 0;
        }
    `:Y`
        background-color: ${e=>e.theme.mainLowlightBackground};
        opacity: 0.9;
    `}
`,YO=G.h2`
    width: 100%;
    padding: 30px 0;
    color: ${e=>e.theme.popColor};
    text-align: center;
    font-weight: bold;
    font-size: ${e=>e.theme.loudHeadingSize};
`,XO=G.div`
    text-align: center;
    color: ${e=>e.theme.mainColor};
    margin: 0 20px;
`,ZO=G.div`
    font-size: ${e=>e.theme.largeHeadingSize};
    color: ${e=>e.theme.mainColor};
    font-weight: bold;
`,eH=G.small`
    display: block;
    font-size: 80%;
    opacity: 0.8;
`,tH=G.div`
    display: block;
    margin-top: 10px;
    font-size: ${e=>e.theme.headingSize};
`,nH=G.ul`
    padding: 40px 20px 30px;
    font-size: ${e=>e.theme.textSize};
    line-height: 1.2;
`,rH=G.li`
    margin-top: 20px;
    margin-left: 0;
    list-style-type: none;

    &:first-child {
        margin-top: 0;
    }
`,oH=G.li`
    &:not(:first-child) {
        margin-top: 20px;
    }

    strong {
        color: ${e=>e.theme.popColor};
    }
`,sH=G(oH)`
    list-style: circle;
    margin-left: 20px;
`,aH=G.ul`
    margin-top: 15px;

    > ${sH} {
        margin-top: 4px;
    }
`,iH=G.div`
    margin-top: 0;
    margin-bottom: 20px;
    font-weight: bold;

    > ${Wp} {
        text-align: center;
        width: 100%
    }
`,lH=G.div`
    color: ${e=>e.theme.mainBackground};
    font-size: ${e=>e.theme.textSize};

    margin-top: 10px;
    text-align: center;
    line-height: 1.2;

    strong {
        font-weight: bold;
    }

    a {
        color: ${e=>e.theme.mainBackground};
    }

    p {
        margin-top: 10px;
    }
`,cH=G(xO)`
    transform: scale(2);

    display: flex;
    flex-direction: column;
    text-align: center;

    > p {
        max-width: 500px;
        line-height: 1.2;
    }

    > p, > svg {
        color: ${e=>e.theme.mainBackground};
        margin: 20px auto;
    }

    a[href] {
        color: #6e8ff4;
    }
`;let dH=class extends b.Component{constructor(){super(...arguments),this.planCycle="monthly",this.getPlanMonthlyPrice=e=>{if(!this.isPricingAvailable)throw new Error("Can't query prices if pricing is not available");const t=this.props.plans.value[this.getSKU(e)];if("priceless"===t.prices)throw new Error("Can't show price for non-priced plan");return t.prices.monthly},this.getSKU=e=>`${e}-${this.planCycle}`,this.buyPlan=e=>{this.props.onPlanPicked(this.getSKU(e))},this.closePicker=()=>{this.props.onPlanPicked(void 0)}}render(){const{isPricingAvailable:e,planCycle:t,toggleCycle:n,buyPlan:r,closePicker:o,getPlanMonthlyPrice:s}=this,{email:a,logOut:i,logIn:l}=this.props;return e?b.createElement(NO,{onClose:o,"aria-label":"Choose your plan"},b.createElement(UO,null,b.createElement(WO,null,"Choose your Plan"),b.createElement(zO,{onClick:n},b.createElement(_O,{selected:"monthly"===t},"Monthly"),b.createElement(ns.g,{icon:["fas","annual"===t?"toggle-on":"toggle-off"]}),b.createElement(_O,{selected:"annual"===t},"Annual")),b.createElement(lH,null,b.createElement("p",null,b.createElement("strong",null,"Cancel in two clicks, anytime"),". ",b.createElement("br",null),"Have questions? ",b.createElement("strong",null,b.createElement("a",{href:"https://httptoolkit.com/docs/guides/subscription-faq"},"Read the FAQ"))," or email billing@httptoolkit.com."),b.createElement("p",null,"By subscribing to a paid plan, you accept ",b.createElement(JO,null,b.createElement("a",{href:"https://httptoolkit.com/terms-of-service"},"the HTTP Toolkit Terms of Service")),".")),b.createElement(VO,null,a&&b.createElement("p",null,"Logged in as ",b.createElement(JO,null,a),"."),null,b.createElement(KO,{onClick:o},"Cancel"))),b.createElement(QO,null,b.createElement(GO,{highlighted:!0},b.createElement(YO,null,"Professional"),b.createElement(XO,null,b.createElement(ZO,null,s("pro")," / month"),b.createElement(eH,null,"plus local tax, paid ","annual"===this.planCycle?"annually":"monthly"),b.createElement(tH,{title:"Licensed for a specific individual. See the terms of service for full details."},"Personal user account")),b.createElement(nH,null,b.createElement(oH,null,b.createElement("strong",null,"Automated HTTP rewriting rules"),", including traffic redirection, mock responses, and errors & timeouts."),b.createElement(oH,null,b.createElement("strong",null,"Reusable Modify & Send tools"),'. Persistent by default, with import/export support and "Resend" and "Create rule from request" functionality.'),b.createElement(oH,null,b.createElement("strong",null,"Import/export for all traffic")," as ",b.createElement("a",{href:"https://en.wikipedia.org/wiki/HAR_(file_format)",target:"_blank",rel:"noopener noreferrer"},"HARs")," or ready-to-use code for 20+ tools."),b.createElement(oH,null,b.createElement("strong",null,"Advanced debugging tools")," like MCP integration for AI agents, compression & caching analysis, and built-in docs for 2600+ popular APIs & your own ",b.createElement("a",{href:"https://swagger.io/docs/specification/about/",target:"_blank",rel:"noopener noreferrer"},"OpenAPI")," specs."),b.createElement(oH,null,b.createElement("strong",null,"Custom configuration")," including upstream proxy settings, whitelisted & client TLS certificates, protocol negotation, and UI themes."),b.createElement(oH,null,b.createElement("strong",null,"Support open-source development!"))),b.createElement(iH,null,b.createElement(Wp,{onClick:()=>r("pro")},"Get Pro Now"))),b.createElement(GO,null,b.createElement(YO,null,"Team"),b.createElement(XO,null,b.createElement(ZO,null,s("team")," / user / month"),b.createElement(eH,null,"plus local tax, paid ","annual"===this.planCycle?"annually":"monthly"),b.createElement(tH,{title:"One team license, linked to many individuals, who can be added and removed. See the terms of service for details."},"Team account")),b.createElement(nH,null,b.createElement(rH,null,b.createElement("em",null,"All Professional features, and:")),b.createElement(oH,null,b.createElement("strong",null,"Centralized billing")," to simplify payment for your team"),b.createElement(oH,null,"Licensed to your team, rather than individuals"),b.createElement(oH,null,b.createElement("strong",null,"Centralized control")," to easily manage your team members and subscription"),b.createElement(oH,null,b.createElement("strong",null,"Team workspaces")," for low-friction collaboration ",b.createElement(JO,null,"(",b.createElement("em",null,"coming soon"),")")),b.createElement(rH,null,"Options available on request:"),b.createElement(aH,null,b.createElement(sH,null,"Self-hosted infrastructure"),b.createElement(sH,null,"Private support"),b.createElement(sH,null,"Training & consultancy"),b.createElement(sH,null,"Bulk discounts"))),b.createElement(iH,null,b.createElement(zp,{href:"https://httptoolkit.com/contact"},"Get in touch"))))):b.createElement(cH,{onClose:o,"aria-label":"Loading plans"},b.createElement("p",null,"Unable to connect to HTTP Toolkit account servers..."),b.createElement("p",null,"Having problems? Open an issue ",b.createElement("a",{href:"https://github.com/httptoolkit/httptoolkit/issues/new/choose"},"on GitHub")," or email ",b.createElement("strong",null,"billing@httptoolkit.com")," to ask for help."),b.createElement(is,{icon:["fac","spinner-arc"],spin:!0,size:"10x"}),b.createElement(BO,{onClick:o},"Cancel"))}toggleCycle(){this.planCycle="annual"===this.planCycle?"monthly":"annual"}get isPricingAvailable(){return"fulfilled"===this.props.plans.state}};LO([w.observable],dH.prototype,"planCycle",void 0),LO([w.action.bound],dH.prototype,"toggleCycle",null),LO([w.computed],dH.prototype,"isPricingAvailable",null),dH=LO([E.PA],dH);const uH=G(e=>b.createElement(xO,{className:e.className,"aria-label":"Waiting for checkout"},b.createElement("p",null,"The checkout has been opened in your browser.",b.createElement("br",null),"Please follow the steps there to complete your subscription."),b.createElement("p",null,"Have questions? Take a look at ",b.createElement("a",{href:"https://httptoolkit.com/docs/faq/payments/"},"the FAQ")," or email ",b.createElement("strong",null,"billing@httptoolkit.com"),"."),b.createElement(is,{icon:["fac","spinner-arc"],spin:!0,size:"10x"}),b.createElement(BO,{onClick:e.onCancel},"Cancel checkout")))`
    > p {
        max-width: 500px;
        line-height: 1.2;
    }

    > p, > svg {
        color: ${e=>e.theme.modalColor};
        margin: 20px auto;
    }

    a[href] {
        color: ${e=>e.theme.modalColor};
        font-weight: bold;
        text-decoration: underline;
    }

    text-align: center;
    transform: scale(2);
`;var pH=n(63599);let hH=class extends b.Component{constructor(){super(...arguments),this.renderItem=(e,t)=>{if("separator"===e.type)return b.createElement(pH.wv,{key:t});if("option"===e.type)return b.createElement(pH.q7,{key:t,onClick:()=>e.callback(this.props.menuState.data),disabled:!1===e.enabled},e.label);if("submenu"===e.type)return b.createElement(pH.Qw,{key:t,label:e.label,disabled:!1===e.enabled},e.items.map(this.renderItem));throw new kt(e,e=>e.type)},this.onVisibilityChange=e=>{e||this.props.onHidden()}}componentDidMount(){(0,E.bH)(this,(0,w.autorun)(()=>{const e=this.props.menuState;setTimeout(()=>{pH.He.show({id:"menu",event:e.event,position:e.position})},10)}))}render(){return b.createElement(mH,{id:"menu",onVisibilityChange:this.onVisibilityChange},this.props.menuState.items.map(this.renderItem))}};hH=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a}([E.PA],hH);const mH=G(pH.W1)`
    --contexify-menu-bgColor: ${e=>e.theme.mainLowlightBackground};
    --contexify-item-color: ${e=>e.theme.mainColor};
    --contexify-separator-color: ${e=>e.theme.containerBorder};

    --contexify-rightSlot-color: ${e=>e.theme.containerWatermark};
    --contexify-activeRightSlot-color: ${e=>e.theme.mainColor};

    --contexify-arrow-color: ${e=>e.theme.containerWatermark};
    --contexify-activeArrow-color: ${e=>e.theme.mainColor};

    --contexify-activeItem-color: #fff;
    --contexify-activeItem-bgColor: #3498db;
`,gH=G.div`
    position: absolute;
    bottom: 40px;
    right: 40px;
    max-width: 300px;

    background-color: ${e=>e.theme.mainBackground};
    color: ${e=>e.theme.mainColor};
    border: 2px solid ${e=>e.theme.warningColor};
    box-shadow: 0 2px 10px 5px rgba(0,0,0,${e=>e.theme.boxShadowAlpha});
    border-radius: 4px;

    z-index: 1000;
    padding: 15px 15px;
    line-height: 1.4;

    display: flex;
    gap: 10px;
    flex-direction: column;
`,fH=G(Wp)`
    &:not(:disabled) {
        background-color: ${e=>e.theme.popColor};
        font-weight: bold;
        padding: 10px 15px;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;
    }
`,yH=(0,E.WQ)("proxyStore")((0,E.PA)(e=>{var t;return(null===(t=e.proxyStore)||void 0===t?void 0:t.streamDisconnected)?b.createElement(gH,null,b.createElement("p",null,b.createElement("strong",null,"Disconnected from internal proxy server")),b.createElement("p",null,"Please wait a moment for reconnection..."),b.createElement("p",null,"In the meantime, some features may be unavailable. If this doesn't resolve quickly, or happens frequently, please ",b.createElement("a",{href:"https://github.com/httptoolkit/httptoolkit/issues/new?template=bug.yml",target:"_blank",rel:"noreferrer"},"report a bug")," and share as much information as possible to help get this fixed."),function(){var e,t;return void 0!==(null===(e=window.desktopApi)||void 0===e?void 0:e.restartApp)||"fulfilled"===Me.state&&!(null===(t=navigator.platform)||void 0===t?void 0:t.startsWith("Mac"))}()?b.createElement(b.Fragment,null,b.createElement("p",null,"Restart the app below to fix this automatically:"),b.createElement(fH,{onClick:()=>{f("Manual restart required to fix server disconnect"),setTimeout(()=>function(){var e;ye.restartApp?ye.restartApp():"fulfilled"!==Me.state||(null===(e=navigator.platform)||void 0===e?void 0:e.startsWith("Mac"))?(alert("Please fully quit the application to restart all internal components."),window.close()):window.close()}(),100)}},b.createElement(is,{icon:"Repeat"})," Restart App")):b.createElement("p",null,"If this problem persists, please restart the application to reinitialize the proxy server.")):null}));var vH=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const bH=e=>JSON.stringify({mcpServers:{"http-toolkit":Object.assign({command:e.command},e.args.length>0?{args:e.args}:{})}},null,2),xH=e=>/^[A-Za-z0-9_\-./:=@%+,]+$/.test(e)?e:`'${e.replace(/'/g,"'\\''")}'`,wH=[{id:"claude-code",name:"Claude Code",description:"Register HTTP Toolkit as an MCP server in Claude Code by running this command in your terminal:",buildSnippet:({command:e,args:t})=>`claude mcp add http-toolkit -- ${[e,...t].map(xH).join(" ")}`,docsUrl:"https://docs.claude.com/en/docs/claude-code/mcp"},{id:"claude-desktop",name:"Claude Desktop",description:"Give Claude Desktop access to your intercepted traffic by adding the following to claude_desktop_config.json (Settings → Developer → Edit Config):",buildSnippet:bH,docsUrl:"https://modelcontextprotocol.io/quickstart/user"},{id:"vscode",name:"VS Code",description:"Use HTTP Toolkit from GitHub Copilot in VS Code by adding the following to .vscode/mcp.json in your project (or your user mcp.json):",buildSnippet:e=>JSON.stringify({servers:{"http-toolkit":Object.assign({type:"stdio",command:e.command},e.args.length>0?{args:e.args}:{})}},null,2),docsUrl:"https://code.visualstudio.com/docs/copilot/customization/mcp-servers"},{id:"cursor",name:"Cursor",description:"Use HTTP Toolkit from Cursor's AI features by adding the following to ~/.cursor/mcp.json (or .cursor/mcp.json in your project):",buildSnippet:bH,docsUrl:"https://docs.cursor.com/context/mcp"},{id:"windsurf",name:"Windsurf",description:"Use HTTP Toolkit from Windsurf's Cascade by adding the following to ~/.codeium/windsurf/mcp_config.json:",buildSnippet:bH,docsUrl:"https://docs.windsurf.com/windsurf/cascade/mcp"},{id:"generic",name:"Other MCP clients",description:"HTTP Toolkit speaks the standard Model Context Protocol over stdio — configure your client to spawn the following command:",buildSnippet:({command:e,args:t})=>[e,...t].map(xH).join(" ")}],EH=G(xO)`
    background-color: ${e=>e.theme.mainBackground};
    color: ${e=>e.theme.mainColor};
    border: 1px solid ${e=>e.theme.containerBorder};
    border-radius: 4px;

    box-shadow: 0 2px 30px rgba(0, 0, 0, 0.3);

    width: 90%;
    max-width: 760px;
    max-height: 85vh;

    display: flex;
    flex-direction: column;
`,CH=G.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 20px 24px;
    border-bottom: 1px solid ${e=>e.theme.containerBorder};

    h1 {
        font-size: ${e=>e.theme.loudHeadingSize};
        font-weight: bold;
        letter-spacing: -0.5px;
    }
`,TH=G(Lp)`
    color: ${e=>e.theme.mainColor};
    opacity: 0.7;
    font-size: 20px;
    padding: 4px 8px;

    &:hover, &:focus {
        opacity: 1;
        outline: none;
    }
`,SH=G.div`
    padding: 16px 24px 24px;
    overflow-y: auto;

    font-size: ${e=>e.theme.textSize};

    p {
        line-height: 1.4;
    }

    p.intro {
        margin-bottom: 16px;
    }

    a {
        color: ${e=>e.theme.linkColor};
    }
`,PH=G.nav`
    display: flex;
    gap: 4px;
    border-bottom: 1px solid ${e=>e.theme.containerBorder};
    margin-bottom: 16px;
`,kH=G(Lp)`
    padding: 8px 14px;
    font-family: ${e=>e.theme.fontFamily};
    font-size: ${e=>e.theme.textSize};
    color: ${e=>e.theme.mainColor};
    border-bottom: 2px solid transparent;
    margin-bottom: -1px;

    ${e=>e.selected&&Y`
        color: ${e.theme.popColor};
        border-bottom-color: ${e.theme.popColor};
        font-weight: bold;
    `}

    &:hover {
        color: ${e=>e.theme.popColor};
    }
`,RH=G.div`
    margin-top: 16px;

    position: relative;
    background-color: ${e=>e.theme.mainLowlightBackground};
    border: 1px solid ${e=>e.theme.containerBorder};
    border-radius: 3px;

    pre {
        font-family: ${e=>e.theme.monoFontFamily};
        font-size: 13px;
        line-height: 1.4;
        padding: 12px 44px 12px 14px;
        margin: 0;
        white-space: pre-wrap;
        word-break: break-all;
        overflow-x: auto;
    }

    > button {
        position: absolute;
        top: 6px;
        right: 6px;
    }
`,OH=G.p`
    margin-top: 16px;
`;let HH=class extends b.Component{constructor(){super(...arguments),this.selectedId=wH[0].id,this.select=e=>{this.selectedId=e}}get mcpCommand(){const e=this.props.proxyStore.toolPaths.mcp;return{command:e[0],args:e.slice(1)}}componentDidMount(){it({category:"MCP",action:"Open"})}render(){const e=wH.find(e=>e.id===this.selectedId),{onClose:t}=this.props,{mcpCommand:n}=this;return b.createElement(EH,{onClose:t,backdropOpacity:.6,"aria-labelledby":"mcp-modal-title"},b.createElement(CH,null,b.createElement("h1",{id:"mcp-modal-title"},"Connect HTTP Toolkit to your LLM"),b.createElement(TH,{title:"Close",onClick:t},b.createElement(is,{icon:["fas","times"]}))),b.createElement(SH,null,b.createElement("p",{className:"intro"},"HTTP Toolkit exposes intercepted traffic and operations to AI agents via the"," ",b.createElement("a",{href:"https://modelcontextprotocol.io/",target:"_blank",rel:"noreferrer"},"Model Context Protocol"),". Pick your client below and follow the instructions to give it access."),b.createElement(PH,{role:"tablist"},wH.map(e=>b.createElement(kH,{key:e.id,role:"tab","aria-selected":e.id===this.selectedId,selected:e.id===this.selectedId,onClick:()=>this.select(e.id)},e.name))),b.createElement("p",null,e.description),b.createElement(RH,null,b.createElement("pre",null,e.buildSnippet(n)),b.createElement(Ah,{content:e.buildSnippet(n),onClick:()=>it({category:"MCP",action:"Copy snippet",value:e.id})})),e.docsUrl&&b.createElement(OH,null,"Need help? See the"," ",b.createElement("a",{href:e.docsUrl,target:"_blank",rel:"noreferrer"},e.name," MCP setup docs"),"."),b.createElement(OH,null,"HTTP Toolkit must be running for the AI client to connect.",!this.props.accountStore.user.isPaidUser()&&b.createElement(b.Fragment,null," ","Free accounts have per-session call limits — see"," ",b.createElement("a",{href:"https://httptoolkit.com/pricing/",target:"_blank",rel:"noreferrer"},"Pro")," ","for unlimited access."))))}};vH([w.observable],HH.prototype,"selectedId",void 0),vH([w.action],HH.prototype,"select",void 0),vH([w.computed],HH.prototype,"mcpCommand",null),HH=vH([(0,E.WQ)("proxyStore"),(0,E.WQ)("accountStore"),E.PA],HH);const AH=HH;var $H=n(48287).Buffer,IH=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const qH={generateHar:mu,exportAsZip:function(e){return Bl(this,void 0,void 0,function*(){return Wl({type:"zip-export",har:e.har,formatIds:e.formatIds,includeHar:e.includeHar,httpToolkitVersion:e.httpToolkitVersion})})},saveFile:Sp};class jH{constructor(e=qH){this.deps=e,this.state={kind:"idle"},this.runVersion=0}dispose(){this.runVersion+=1}run(e){return t=this,n=void 0,o=function*(){const t=++this.runVersion,n=e.events.slice(),r=Array.from(e.formatIds);this.state={kind:"running"};try{const o=yield this.deps.generateHar(n,{bodySizeLimit:1/0});if(t!==this.runVersion)return;const s=(0,w.toJS)(o),a=yield this.deps.exportAsZip({har:s,formatIds:r,includeHar:e.includeHar,httpToolkitVersion:De});if(t!==this.runVersion)return;a.snippetErrorCount>0&&f("Some snippets failed during ZIP export",{failedCount:a.snippetErrorCount,successCount:a.snippetSuccessCount,errors:a.errors.slice(0,10).map(e=>({format:e.formatId,error:e.error}))});const i=function(e=new Date){const t=e=>String(e).padStart(2,"0");return`HTTPToolkit_Export_${e.getFullYear()}-${t(e.getMonth()+1)}-${t(e.getDate())}_${t(e.getHours())}-${t(e.getMinutes())}.zip`}();this.deps.saveFile(i,"application/zip",$H.from(a.archive)),(0,w.runInAction)(()=>{this.state={kind:"done",snippetSuccessCount:a.snippetSuccessCount,snippetErrorCount:a.snippetErrorCount,downloadName:i,downloadBytes:a.archive.byteLength}})}catch(e){if(t!==this.runVersion)return;f(e),(0,w.runInAction)(()=>{this.state={kind:"error",message:e&&e.message?String(e.message):"Unknown error during ZIP export."}})}},new((r=void 0)||(r=Promise))(function(e,s){function a(e){try{l(o.next(e))}catch(e){s(e)}}function i(e){try{l(o.throw(e))}catch(e){s(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r(function(e){e(n)})).then(a,i)}l((o=o.apply(t,n||[])).next())});var t,n,r,o}}IH([w.observable],jH.prototype,"state",void 0),IH([w.action.bound],jH.prototype,"dispose",null),IH([w.action.bound],jH.prototype,"run",null);const DH=new Map(mv.availableTargets().map(e=>[e.key,e.extname.replace(/^\./,"")||"txt"])),MH=y(vv).toPairs().flatMap(([e,t])=>t.map(t=>function(e,t){var n;return Object.assign(Object.assign({},e),{id:wv(e),category:t,label:Cv(e),folderName:`${e.target}-${e.client}`.toLowerCase().replace(/[^a-z0-9._-]+/g,"-"),extension:null!==(n=DH.get(e.target))&&void 0!==n?n:"txt"})}(t,e))).value(),FH=y.groupBy(MH,"category"),BH=new Map(MH.map(e=>[e.id,e]));var LH=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const NH=G(xO)`
    background-color: ${e=>e.theme.mainBackground};
    color: ${e=>e.theme.mainColor};
    border: 1px solid ${e=>e.theme.containerBorder};
    border-radius: 4px;

    box-shadow: 0 2px 30px rgba(0, 0, 0, 0.3);

    width: 90%;
    max-width: 680px;
    max-height: 85vh;

    display: flex;
    flex-direction: column;
`,UH=G.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 20px 24px;
    border-bottom: 1px solid ${e=>e.theme.containerBorder};

    h1 {
        font-size: ${e=>e.theme.loudHeadingSize};
        font-weight: bold;
        letter-spacing: -0.5px;
    }
`,WH=G(Lp)`
    color: ${e=>e.theme.mainColor};
    opacity: 0.7;
    font-size: 20px;
    padding: 4px 8px;

    &:hover, &:focus {
        opacity: 1;
        outline: none;
    }
`,zH=G.div`
    display: flex;
    align-items: center;
    gap: 10px;

    padding: 12px 24px;
`,_H=G.span`
    margin-right: auto;
    opacity: 0.8;
`,VH=G(_p)`
    padding: 4px 10px;
    font-size: ${e=>e.theme.textSize};
`,KH=G.div`
    padding: 8px 24px 16px;
    overflow-y: auto;

    background-color: ${e=>e.theme.mainLowlightBackground};
    box-shadow:
        inset 0px 12px 8px -10px rgba(0,0,0,${e=>e.theme.boxShadowAlpha}),
        inset 0px -8px 8px -10px rgba(0,0,0,${e=>e.theme.boxShadowAlpha});
`,JH=G.h2`
    font-size: ${e=>e.theme.subHeadingSize};
    font-weight: bold;
    text-transform: uppercase;
    opacity: 0.7;

    margin: 16px 0 8px;
`,QH=G.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 4px 16px;
`,GH=G.label`
    display: flex;
    align-items: center;
    gap: 8px;

    padding: 5px 8px;
    border-radius: 3px;
    cursor: pointer;

    &:hover {
        background-color: ${e=>e.theme.mainBackground};
    }

    input {
        cursor: pointer;
    }
`,YH=G.label`
    display: flex;
    align-items: center;
    gap: 12px;

    padding: 14px 24px;

    cursor: pointer;

    input {
        cursor: pointer;
    }
`,XH=G.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`,ZH=G.span`
    font-size: ${e=>e.theme.textSize};
    opacity: 0.7;
`,eA=G.footer`
    display: flex;
    align-items: center;
    gap: 10px;

    padding: 16px 24px;
    border-top: 1px solid ${e=>e.theme.containerBorder};
`,tA=G.div`
    margin-right: auto;

    display: flex;
    flex-direction: column;
    gap: 6px;

    flex-grow: 1;
`,nA=G(tA)`
    color: ${e=>e.theme.warningColor};
`;let rA=class extends b.Component{constructor(e){super(e),this.controller=new jH;const t=function(e){const t=[];for(const n of e){const e=BH.get(n);e&&t.push(e)}return t}(e.uiStore.zipExportSelectedFormatIds);this.selected=new Set(t.length?t.map(e=>e.id):[xv]),this.includeHar=e.uiStore.zipExportIncludeHar}componentWillUnmount(){this.controller.dispose()}toggleFormat(e){this.selected.has(e)?this.selected.delete(e):this.selected.add(e)}selectAll(){this.selected=new Set(MH.map(e=>e.id))}selectNone(){this.selected=new Set}toggleIncludeHar(){this.includeHar=!this.includeHar}startExport(){this.props.uiStore.setZipExportSelectedFormatIds(Array.from(this.selected)),this.props.uiStore.setZipExportIncludeHar(this.includeHar),this.controller.run({events:this.props.events,formatIds:this.selected,includeHar:this.includeHar})}render(){const{events:e,onClose:t}=this.props,{state:n}=this.controller,r=e.length,o=this.selected.size,s=0===o&&!this.includeHar;return b.createElement(NH,{onClose:t,backdropOpacity:.6,"aria-labelledby":"zip-export-title"},b.createElement(UH,null,b.createElement("h1",{id:"zip-export-title"},"Export as ZIP"),b.createElement(WH,{title:"Close",onClick:t},b.createElement(is,{icon:["fas","times"]}))),b.createElement(zH,null,b.createElement(_H,null,o," of ",MH.length," formats selected"),b.createElement(VH,{onClick:this.selectAll},"All"),b.createElement(VH,{onClick:this.selectNone},"None")),b.createElement(KH,null,Object.keys(FH).map(e=>b.createElement(b.Fragment,{key:e},b.createElement(JH,null,e),b.createElement(QH,null,FH[e].map(e=>b.createElement(GH,{key:e.id},b.createElement("input",{type:"checkbox",checked:this.selected.has(e.id),onChange:()=>this.toggleFormat(e.id)}),e.label)))))),b.createElement(YH,null,b.createElement("input",{type:"checkbox",checked:this.includeHar,onChange:this.toggleIncludeHar}),b.createElement(XH,null,"Include all raw data in HAR format",b.createElement(ZH,null,"Include complete request & response raw data - this can make the export much larger."))),b.createElement(eA,null,"idle"===n.kind&&b.createElement(b.Fragment,null,b.createElement(tA,null,r," request",1===r?"":"s"," to export"),b.createElement(Wp,{disabled:s,onClick:this.startExport},"Download ZIP")),"running"===n.kind&&b.createElement(b.Fragment,null,b.createElement(tA,{role:"status"},b.createElement("span",null,b.createElement(is,{icon:["fas","spinner"],spin:!0})," Exporting...")),b.createElement(Wp,{disabled:!0},"Download ZIP")),"done"===n.kind&&b.createElement(b.Fragment,null,b.createElement(tA,{role:"status"},"Saved ",n.downloadName," (",Jt(n.downloadBytes),"): ",n.snippetSuccessCount," snippet",1===n.snippetSuccessCount?"":"s"," exported",n.snippetErrorCount>0?`, ${n.snippetErrorCount} failed (see manifest.json)`:"","."),b.createElement(Wp,{onClick:t},"Done")),"error"===n.kind&&b.createElement(b.Fragment,null,b.createElement(nA,{role:"alert"},"Export failed: ",n.message),b.createElement(Wp,{disabled:s,onClick:this.startExport},"Try again"))))}};LH([w.observable],rA.prototype,"selected",void 0),LH([w.observable],rA.prototype,"includeHar",void 0),LH([w.action.bound],rA.prototype,"toggleFormat",null),LH([w.action.bound],rA.prototype,"selectAll",null),LH([w.action.bound],rA.prototype,"selectNone",null),LH([w.action.bound],rA.prototype,"toggleIncludeHar",null),LH([w.action.bound],rA.prototype,"startExport",null),rA=LH([(0,E.WQ)("uiStore"),E.PA],rA);var oA=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},sA=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};const aA=G.div`
    display: flex;
    height: 100%;

    > :not(:first-child) {
        flex: 1 1;
        width: calc(100% - ${Vg});
    }
`,iA=e=>{var{children:t}=e,n=sA(e,["children"]);const{pageComponent:r}=n,o=sA(n,["pageComponent"]);return b.createElement(n.pageComponent,Object.assign({},o),t)},lA=e=>(Tp("Ctrl+1,Cmd+1",t=>{e.navigate("/intercept"),t.preventDefault()},[e.navigate]),Tp("Ctrl+2,Cmd+2",t=>{e.navigate("/view"),t.preventDefault()},[e.navigate]),Tp("Ctrl+3,Cmd+3",t=>{e.navigate("/modify"),t.preventDefault()},[e.navigate]),Tp("Ctrl+4,Cmd+4",t=>{e.navigate("/send"),t.preventDefault()},[e.navigate]),Tp("Ctrl+9,Cmd+9",t=>{e.canVisitSettings&&e.navigate("/settings"),t.preventDefault()},[e.navigate,e.canVisitSettings]),null);let cA=class extends b.Component{get canUseMcp(){var e;const t=null===(e=this.props.proxyStore.toolPaths)||void 0===e?void 0:e.mcp;return!!t&&t.length>0}componentDidMount(){this.closeZipExportOnOtherModal=(0,w.autorun)(()=>{(this.props.accountStore.modal||this.props.uiStore.mcpModalOpen)&&this.props.uiStore.closeZipExport()})}componentWillUnmount(){var e;null===(e=this.closeZipExportOnOtherModal)||void 0===e||e.call(this)}get canVisitSettings(){return this.props.accountStore.user.userHasSubscription()}get canVisitSend(){return"fulfilled"!==Fe.state||je(Fe.value,Ye)}get menuItems(){return[{name:"Intercept",title:`Connect clients to HTTP Toolkit (${xp}+1)`,icon:"Plugs",position:"top",type:"router",url:"/intercept"},{name:"View",title:`View intercepted HTTP traffic (${xp}+2)`,icon:"MagnifyingGlass",position:"top",type:"router",url:"/view"},..."fulfilled"!==Fe.state||je(Fe.value,"^0.1.21 || ^1.0.0")?[{name:"Modify",title:`Add rules to transform & mock HTTP traffic (${xp}+3)`,icon:"Pencil",position:"top",type:"router",url:"/modify"}]:[],...this.canVisitSend?[{name:"Send",title:`Send HTTP requests directly (${xp}+4)`,icon:"PaperPlaneTilt",position:"top",type:"router",url:"/send"}]:[],this.canVisitSettings?{name:"Settings",title:`Reconfigure HTTP Toolkit and manage your account (${xp}+9)`,icon:"GearSix",position:"bottom",type:"router",url:"/settings"}:{name:"Get Pro",title:"Sign up for HTTP Toolkit Pro",icon:"Lightning",position:"bottom",type:"callback",onClick:()=>this.props.accountStore.getPro("sidebar")},...this.canUseMcp?[{name:"MCP",title:"Connect HTTP Toolkit to AI assistants via MCP",icon:"Sparkle",position:"bottom",type:"callback",onClick:this.props.uiStore.openMcpModal}]:[],{name:"Give feedback",title:"Suggest features or report issues",icon:"ChatText",position:"bottom",highlight:!0,type:"web",url:"https://github.com/httptoolkit/httptoolkit/issues/new/choose"}]}render(){const{modal:e,setSelectedPlan:t,subscriptionPlans:n,userEmail:r,logIn:o,logOut:s,cancelCheckout:a}=this.props.accountStore,{contextMenuState:i,clearHtmlContextMenu:l}=this.props.uiStore;return b.createElement(ct.dP,{history:ut},b.createElement(lA,{navigate:ut.navigate,canVisitSettings:this.canVisitSettings}),b.createElement(aA,null,b.createElement(ef,{items:this.menuItems}),b.createElement(ct.Ix,null,b.createElement(ct.rd,{noThrow:!0,from:"/",to:"/intercept"}),b.createElement(iA,{path:"/intercept",pageComponent:uf}),b.createElement(iA,{path:"/view",pageComponent:BC}),b.createElement(iA,{path:"/view/:eventId",pageComponent:BC}),b.createElement(iA,{path:"/modify",pageComponent:KP}),b.createElement(iA,{path:"/modify/:initialRuleId",pageComponent:KP}),b.createElement(iA,{path:"/send",pageComponent:Qk}),b.createElement(iA,{path:"/settings",pageComponent:yO})),b.createElement(yH,null)),"login"===e&&b.createElement(DO,{accountStore:this.props.accountStore}),"pick-a-plan"===e&&b.createElement(dH,{email:r,onPlanPicked:t,logOut:s,logIn:o,plans:n}),"post-checkout"===e&&b.createElement(uH,{onCancel:a}),this.props.uiStore.mcpModalOpen&&this.canUseMcp&&b.createElement(AH,{onClose:this.props.uiStore.closeMcpModal}),this.props.uiStore.zipExportRequest&&b.createElement(rA,{events:this.props.uiStore.zipExportRequest.events,onClose:this.props.uiStore.closeZipExport}),i&&b.createElement(hH,{menuState:i,onHidden:l}))}};oA([w.computed],cA.prototype,"canUseMcp",null),oA([w.computed],cA.prototype,"canVisitSettings",null),oA([w.computed],cA.prototype,"canVisitSend",null),oA([w.computed],cA.prototype,"menuItems",null),cA=oA([(0,E.WQ)("accountStore"),(0,E.WQ)("uiStore"),(0,E.WQ)("proxyStore"),E.PA],cA);const dA=cA,uA=(0,E.WQ)("uiStore")((0,E.PA)(e=>b.createElement(ee,{theme:e.uiStore.theme},b.createElement(te,{disableVendorPrefixes:!0},e.children))));var pA=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const hA=G(e=>b.createElement("section",{className:e.className},e.children))`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    overflow-y: auto;

    color: ${e=>e.theme.mainColor};

    h1 {
        font-size: ${e=>e.theme.screamingHeadingSize};
        font-family: ${e=>e.theme.titleTextFamily};
        font-weight: bold;
        margin-bottom: 50px;
    }

    h2 {
        font-size: ${e=>e.theme.loudHeadingSize};
        margin-bottom: 50px;
    }

    button, a {
        display: block;
        margin: 40px 40px 0;

        padding: 20px;

        font-size: ${e=>e.theme.loudHeadingSize};
        font-weight: bolder;
    }
`,mA=G.div`
    display: flex;
    flex-wrap: wrap;
`,gA=G.code`
    font-family: ${e=>e.theme.monoFontFamily};
    white-space: preserve;
`;let fA=class extends b.Component{componentDidCatch(e,t){this.error=e,s.setExtras(t),s.captureException(e),it({category:"Error",action:"UI crashed"})}render(){var e;return this.error?b.createElement(hA,null,b.createElement("h1",null,"Oh no!"),b.createElement("h2",null,"Sorry, it's all gone wrong."),St(this.error)&&b.createElement(gA,null,null!==(e=this.error.stack)&&void 0!==e?e:this.error.message),b.createElement(mA,null,b.createElement(zp,{href:`https://github.com/httptoolkit/httptoolkit/issues/new?template=bug.yml&title=[UI Crash]%3A+${this.error.message||""}`},"Tell us what happened"),b.createElement(Wp,{onClick:()=>window.location.reload()},"Reload HTTP Toolkit"))):this.props.children}};pA([w.observable],fA.prototype,"error",void 0),pA([w.action],fA.prototype,"componentDidCatch",null),fA=pA([E.PA],fA);class yA{constructor(e){this.isPaidUser=e,this.operations=new Map,this.sessionLimitCounters=new Map}register(e){this.operations.set(e.definition.name,e)}getUserTier(){return this.isPaidUser()?"pro":"free"}getDefinitions(){const e=this.getUserTier();return Array.from(this.operations.values()).filter(t=>{const{tiers:n}=t.definition;return!!n.includes(e)}).map(t=>{const n=t.definition,{freeTierNote:r,sessionLimit:o}=n,s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(n,["freeTierNote","sessionLimit"]);if("pro"===e)return s;let a=s.description;return o&&(a+=`\n\n[Free tier] Limited to ${o} calls per session. Use account.upgrade to subscribe to Pro for unlimited access.`),r&&(a+=`\n\n[Free tier] ${r}`),a===s.description?s:Object.assign(Object.assign({},s),{description:a})})}execute(e,t){return n=this,r=void 0,s=function*(){var n;const r=this.operations.get(e);if(!r)return{success:!1,error:{code:"UNKNOWN_OPERATION",message:`Unknown operation: ${e}`}};const o=this.getUserTier(),{tiers:s,sessionLimit:a}=r.definition;if(!s.includes(o))return function(e){const t=e.charAt(0).toUpperCase()+e.slice(1);return{success:!1,error:{code:`TIER_REQUIRED_${e.toUpperCase()}`,message:`This feature requires an HTTP Toolkit ${t} subscription. Get ${t} at https://httptoolkit.com/pricing/ to unlock programmatic access to HTTP Toolkit via MCP, CLI, and more.`}}}(s[0]);if("free"===o&&a){const t=null!==(n=this.sessionLimitCounters.get(e))&&void 0!==n?n:0;if(t>=a)return{success:!1,error:{code:"SESSION_LIMIT",message:`Free users are limited to ${a} calls per session. Upgrade to HTTP Toolkit Pro for unlimited access: https://httptoolkit.com/pricing/`}};this.sessionLimitCounters.set(e,t+1)}try{const e=yield r.handler(t);return JSON.parse(JSON.stringify(e))}catch(e){return{success:!1,error:{code:"EXECUTION_ERROR",message:e.message||String(e)}}}},new((o=void 0)||(o=Promise))(function(e,t){function a(e){try{l(s.next(e))}catch(e){t(e)}}function i(e){try{l(s.throw(e))}catch(e){t(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o(function(e){e(n)})).then(a,i)}l((s=s.apply(n,r||[])).next())});var n,r,o,s}}var vA=function(e,t,n,r){return new(n||(n=Promise))(function(o,s){function a(e){try{l(r.next(e))}catch(e){s(e)}}function i(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(a,i)}l((r=r.apply(e,t||[])).next())})};function bA(e){return"aborted"===e.response?"aborted":e.response?e.response.statusCode:void 0}function xA(e){return{id:e.id,type:"http",method:e.request.method,url:e.request.url,status:bA(e),source:e.request.source.summary,timestamp:e.timingEvents.startTime}}function wA(e){let t;if("aborted"===e.response)t="aborted";else if(e.response){const n=e.response;t={statusCode:n.statusCode,statusMessage:n.statusMessage||"",headers:(0,w.toJS)(n.headers),bodySize:n.body.encodedByteLength}}return Object.assign(Object.assign({},xA(e)),{httpVersion:e.request.httpVersion,tags:(0,w.toJS)(e.tags),timing:(0,w.toJS)(e.timingEvents),request:{method:e.request.method,url:e.request.url,httpVersion:e.request.httpVersion,headers:(0,w.toJS)(e.request.headers),bodySize:e.request.body.encodedByteLength},response:t})}function EA(e,t,n){return vA(this,void 0,void 0,function*(){return"response"===t?"aborted"!==e.response&&e.response?CA(e.response.body,n):{body:void 0,totalSize:0,isTruncated:!1}:CA(e.request.body,n)})}function CA(e,t){return vA(this,void 0,void 0,function*(){var n;const r=yield e.waitForDecoding();if(!r)return{body:void 0,totalSize:0,isTruncated:!1};const o=r.toString("utf8"),s=o.length,a=null!==(n=t.offset)&&void 0!==n?n:0;return a>=s?{body:"",totalSize:s,isTruncated:!1}:void 0!==t.maxLength?{body:o.slice(a,a+t.maxLength),totalSize:s,isTruncated:a+t.maxLength<s}:{body:a>0?o.slice(a):o,totalSize:s,isTruncated:!1}})}var TA=function(e,t,n,r){return new(n||(n=Promise))(function(o,s){function a(e){try{l(r.next(e))}catch(e){s(e)}}function i(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(a,i)}l((r=r.apply(e,t||[])).next())})};const SA=1e5;function PA(e,t){if(!t)return{error:{code:"INVALID_PARAMS",message:"Missing required parameter: id"}};const n=e().find(e=>e.id===t);return n?n.isHttp()?{exchange:n}:{error:{code:"NOT_SUPPORTED",message:`Event ${t} is not an HTTP exchange`}}:{error:{code:"NOT_FOUND",message:`No event found with ID: ${t}`}}}const kA={id:{type:"string",description:"The event ID"},offset:{type:"number",description:"Character offset to start from (default 0)"},maxLength:{type:"number",description:"Maximum characters to return. Omit for full body."}},RA={type:"object",properties:{body:{type:"string",description:"Body content (text)"},totalSize:{type:"number",description:"Total body size in characters"},isTruncated:{type:"boolean",description:"Whether the body was truncated by maxLength"}}};function OA(e,t){return t?e:void 0===e?SA:Math.min(e,SA)}function HA(e,t){e.register(function(e){return{definition:{name:"proxy.get-config",description:"Get the current proxy configuration: port, certificate path, certificate fingerprint, and external network addresses.",category:"proxy",tiers:["free","pro"],annotations:{readOnlyHint:!0},inputSchema:{type:"object",properties:{}},outputSchema:{type:"object",properties:{httpProxyPort:{type:"number",description:"The HTTP proxy port"},certPath:{type:"string",description:"Path to the CA certificate file"},certFingerprint:{type:"string",description:"SHA256 fingerprint of the CA certificate"},externalNetworkAddresses:{type:"array",items:{type:"string"},description:"External IPv4 addresses of this machine"}}}},handler:()=>{return t=this,n=void 0,o=function*(){return{success:!0,data:{httpProxyPort:e.httpProxyPort,certPath:e.certPath,certFingerprint:e.certFingerprint,externalNetworkAddresses:e.externalNetworkAddresses}}},new((r=void 0)||(r=Promise))(function(e,s){function a(e){try{l(o.next(e))}catch(e){s(e)}}function i(e){try{l(o.throw(e))}catch(e){s(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r(function(e){e(n)})).then(a,i)}l((o=o.apply(t,n||[])).next())});var t,n,r,o}}}(t))}var AA=function(e,t,n,r){return new(n||(n=Promise))(function(o,s){function a(e){try{l(r.next(e))}catch(e){s(e)}}function i(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(a,i)}l((r=r.apply(e,t||[])).next())})};function $A(e){return{id:e.id,name:e.name,description:e.description.join(" "),isActive:e.isActive,isActivable:e.isActivable,isSupported:e.isSupported,inProgress:!!e.inProgress}}function IA(e,t){e.register(function(e){return{definition:{name:"account.upgrade",description:"Start the upgrade process to HTTP Toolkit Pro. Opens the subscription signup flow in the HTTP Toolkit desktop app. Pro unlocks advanced remote control & MCP features including unlimited data access, interceptor activation, CLI control, and all future operations, in addition to all core UI features like advanced debugging, import/export, automated rewriting rules, persistent sessions, and advanced configuration. Starting this flow doesn't commit you to purchasing - the initial step just lists the plans and features available so you can make a decision.",category:"account",tiers:["free"],annotations:{readOnlyHint:!1},inputSchema:{type:"object",properties:{}},outputSchema:{type:"object",properties:{message:{type:"string"}}}},handler:()=>{return t=this,n=void 0,o=function*(){return e.getPro("mcp"),{success:!0,data:{message:"The upgrade flow has been started in the HTTP Toolkit desktop app. Please complete the checkout process there."}}},new((r=void 0)||(r=Promise))(function(e,s){function a(e){try{l(o.next(e))}catch(e){s(e)}}function i(e){try{l(o.throw(e))}catch(e){s(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r(function(e){e(n)})).then(a,i)}l((o=o.apply(t,n||[])).next())});var t,n,r,o}}}(t))}var qA=function(e,t,n,r){return new(n||(n=Promise))(function(o,s){function a(e){try{l(r.next(e))}catch(e){s(e)}}function i(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(a,i)}l((r=r.apply(e,t||[])).next())})};document.dispatchEvent(new Event("load:executing")),o.config({name:"httptoolkit",version:1});const jA=new URLSearchParams(window.location.search).get("authToken");o.setItem("latest-auth-token",jA),function(e,t={}){if(!e)return;a.Ts({dsn:e,release:"950a04d3fefe3091d67eec78862c7bdaaf64f65c",ignoreErrors:["ResizeObserver loop limit exceeded","ResizeObserver loop completed with undelivered notifications."],autoSessionTracking:!1,integrations:[i.s(),l.X(),c.c()],beforeSend:function(e,t){if(!g)return null;const n=null==t?void 0:t.originalException;return n instanceof p&&(e.fingerprint=["{{ default }}",n.operationName,...n.errorCode?[n.errorCode.toString()]:[]]),e}}),g=!0,Object.entries(t).forEach(([e,t])=>{t.then(t=>{t&&function(e,t){g&&d.o5().setTag(e,t)}(e,t)},()=>{})}),"undefined"!=typeof window&&window.addEventListener("beforeunload",()=>{g=!1});const n=crypto.randomUUID();d.o5().setUser({id:n,username:`anon-${n}`})}("",{"version:server":Fe,"version:desktop":Me}),console.log(`Initialising UI (version ${De})`),w.configure({enforceActions:"observed"}),re(5e3).then(function(){return e=this,t=void 0,r=function*(){var e;if(!Lg.env.DISABLE_UPDATES){Ng();try{if(!(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.register))return console.warn("Service worker not supported"),void Wg("Not supported");const t=yield navigator.serviceWorker.register("/ui-update-worker.js",{scope:"/"}).catch(e=>{throw console.warn("Service worker registration failed"),Wg(e),e});console.log("Service worker loaded"),t.update().catch(console.log),setInterval(()=>{Ng(),t.update().catch(console.log)},3e5)}catch(e){throw e}}},new((n=void 0)||(n=Promise))(function(o,s){function a(e){try{l(r.next(e))}catch(e){s(e)}}function i(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(a,i)}l((r=r.apply(e,t||[])).next())});var e,t,n,r}),function(){const{yp:e}=Bg;let t=!1;Fe.then(n=>{je(n,e["httptoolkit-server"])||t||(zg(),t=!0)}).catch(()=>{}),Me.then(n=>{je(n,e["httptoolkit-desktop"])||t||(zg(),t=!0)}).catch(()=>{})}();const DA=new Vd(()=>ut.navigate("/settings")),MA=new Tg(DA),FA=new Wd(DA),BA=new ru(DA),LA=new fg(BA,DA),NA=new mp(DA,BA,function(e){return qA(this,void 0,void 0,function*(){let t;return yield UA.initialized,yield w.when(()=>(t=y.find(UA.exchanges,{id:e}),!!t&&t.isCompletedRequest())),ut.navigate(`/view/${e}`),t})}),UA=new zu(BA,MA,NA),WA=new Dg(DA,UA,NA,BA),zA={accountStore:DA,apiStore:MA,uiStore:FA,proxyStore:BA,eventsStore:UA,interceptorStore:LA,rulesStore:NA,sendStore:WA},_A=Promise.all(Object.values(zA).map(e=>e.initialized));!function(){}(),function(e){var t;const{accountStore:n,eventsStore:r,proxyStore:o,interceptorStore:s}=e,a=new yA(()=>n.user.isPaidUser());!function(e,t){(function(e,t,n,r){e.register(function(e){return{definition:{name:"events.list",description:"List captured HTTP exchanges with optional filtering and pagination. Uses the same filter syntax as the UI search bar. See https://httptoolkit.com/docs/reference/view-page/#filtering-intercepted-traffic for full docs.",category:"events",tiers:["free","pro"],annotations:{readOnlyHint:!0},inputSchema:{type:"object",properties:{filter:{type:"string",description:'Filter expression. Space-separated filters are ANDed together. Operators: = != ^= $= *= > >= < <=\n\nCommon filters (subset - see https://httptoolkit.com/docs/reference/view-page/#filtering-intercepted-traffic for all options):\n- method (method=GET)\n- hostname (hostname=example.com, hostname$=.google.com)\n- path (path^=/api)\n- status (status=200, status>=400)\n- header[name] (header[Authorization]^=Bearer)\n- body (body*=error)\n- bodySize (bodySize>=1000)\n- completed, pending, aborted, errored\n- contains(x) - search method, URL, headers & body at once\n- not(filter) and or(a, b) for logical composition\n\nExamples:\n- "status!=404 method=POST" - non-404 POST requests\n- "hostname*=api contains(password)" - requests to API hosts containing "password" anywhere\n- "not(path$=.css) bodySize>=10000" - large responses excluding CSS files'},offset:{type:"number",description:"Number of events to skip (default 0)"},limit:{type:"number",description:"Maximum number of events to return (default 20)"}}},outputSchema:{type:"object",properties:{total:{type:"number",description:"Total matching events (before pagination)"},events:{type:"array",items:{type:"object",properties:{id:{type:"string"},type:{type:"string"},method:{type:"string"},url:{type:"string"},status:{},source:{type:"string"},timestamp:{type:"number"}}}}}}},handler:t=>TA(this,void 0,void 0,function*(){const n=t.filter,r=t.offset||0,o=t.limit||20;let s=e().filter(e=>e.isHttp());if(n){const e=zf(Hd,n);s=s.filter(t=>e.every(e=>e.matches(t)))}return{success:!0,data:{total:s.length,events:s.slice(r,r+o).map(xA)}}})}}(n)),e.register(function(e){return{definition:{name:"events.get-outline",description:"Get the outline of a captured HTTP exchange: request and response headers, status, timing, and body sizes, but not the body content itself. Use events.get-request-body or events.get-response-body to retrieve bodies.",category:"events",tiers:["free","pro"],sessionLimit:500,freeTierNote:"This operation is limited to 500 calls per session for free users, so ensure only the necessary events are queried. Upgrade to Pro (account.upgrade) for unlimited access to all features.",annotations:{readOnlyHint:!0},inputSchema:{type:"object",properties:{id:{type:"string",description:"The event ID to retrieve"}},required:["id"]},outputSchema:{type:"object",properties:{id:{type:"string"},type:{type:"string"},method:{type:"string"},url:{type:"string"},httpVersion:{type:"string"},status:{},source:{type:"string"},timestamp:{type:"number"},tags:{type:"array",items:{type:"string"}},timing:{type:"object"},request:{type:"object",properties:{method:{type:"string"},url:{type:"string"},httpVersion:{type:"string"},headers:{type:"object"},bodySize:{type:"number"}}},response:{}}}},handler:t=>TA(this,void 0,void 0,function*(){const n=PA(e,t.id);return"error"in n?{success:!1,error:n.error}:{success:!0,data:wA(n.exchange)}})}}(n)),e.register(function(e,t){return{definition:{name:"events.get-request-body",description:"Get the request body of a captured HTTP exchange. Use offset and maxLength to retrieve specific ranges of large bodies.",category:"events",tiers:["free","pro"],sessionLimit:100,freeTierNote:"Response bodies are capped at 100000 characters per call. Page through larger bodies with offset, or upgrade to Pro (account.upgrade) for full bodies.",annotations:{readOnlyHint:!0},inputSchema:{type:"object",properties:kA,required:["id"]},outputSchema:RA},handler:n=>TA(this,void 0,void 0,function*(){const r=PA(e,n.id);return"error"in r?{success:!1,error:r.error}:{success:!0,data:yield EA(r.exchange,"request",{offset:n.offset,maxLength:OA(n.maxLength,t())})}})}}(n,r)),e.register(function(e,t){return{definition:{name:"events.get-response-body",description:"Get the response body of a captured HTTP exchange. Use offset and maxLength to retrieve specific ranges of large bodies.",category:"events",tiers:["free","pro"],sessionLimit:100,freeTierNote:"Response bodies are capped at 100000 characters per call. Page through larger bodies with offset, or upgrade to Pro (account.upgrade) for full bodies.",annotations:{readOnlyHint:!0},inputSchema:{type:"object",properties:kA,required:["id"]},outputSchema:RA},handler:n=>TA(this,void 0,void 0,function*(){const r=PA(e,n.id);return"error"in r?{success:!1,error:r.error}:{success:!0,data:yield EA(r.exchange,"response",{offset:n.offset,maxLength:OA(n.maxLength,t())})}})}}(n,r)),e.register(function(e){return{definition:{name:"events.clear",description:"Clear all captured events. By default, pinned events are preserved.",category:"events",tiers:["free","pro"],annotations:{readOnlyHint:!1,destructiveHint:!0},inputSchema:{type:"object",properties:{clearPinned:{type:"boolean",description:"Whether to also clear pinned events (default false)"}}},outputSchema:{type:"object",properties:{success:{type:"boolean"}}}},handler:t=>TA(this,void 0,void 0,function*(){const n=t.clearPinned||!1;return e.clearInterceptedData(n),{success:!0,data:{}}})}}(t))})(e,t.eventsStore,()=>r.events,()=>t.accountStore.user.isPaidUser()),HA(e,t.proxyStore),function(e,t){e.register(function(e){return{definition:{name:"interceptors.list",description:"List available interceptors and their current status. Shows which interceptors are supported, activable, and currently active.",category:"interceptors",tiers:["free","pro"],annotations:{readOnlyHint:!0},inputSchema:{type:"object",properties:{}},outputSchema:{type:"object",properties:{interceptors:{type:"array",items:{type:"object",properties:{id:{type:"string"},name:{type:"string"},description:{type:"string"},isActive:{type:"boolean"},isActivable:{type:"boolean"},isSupported:{type:"boolean"},inProgress:{type:"boolean"}}}}}}},handler:()=>AA(this,void 0,void 0,function*(){return{success:!0,data:{interceptors:Object.values(e.interceptors).filter(e=>!!e).map($A)}}})}}(t)),e.register(function(e){return{definition:{name:"interceptors.activate",description:"Activate a non-interactive interceptor. Only simple interceptors that require no UI interaction or confirmation are supported (e.g. fresh browser windows, fresh-terminal, system-proxy). Interactive interceptors like docker-attach, android-adb, electron etc. require the full UI.",category:"interceptors",tiers:["pro"],annotations:{readOnlyHint:!1},inputSchema:{type:"object",properties:{id:{type:"string",description:'The interceptor ID to activate (e.g. "fresh-chrome", "fresh-terminal", "system-proxy")'}},required:["id"]},outputSchema:{type:"object",properties:{success:{type:"boolean"}}}},handler:t=>AA(this,void 0,void 0,function*(){const n=t.id;if(!n)return{success:!1,error:{code:"INVALID_PARAMS",message:"Missing required parameter: id"}};const r=e.interceptors[n];if(!r)return{success:!1,error:{code:"NOT_FOUND",message:`Unknown interceptor: ${n}`}};if(!function(e){return!e.uiConfig&&!e.customActivation&&!e.clientOnly}(r))return{success:!1,error:{code:"INTERACTIVE_REQUIRED",message:`Interceptor '${n}' (${r.name}) requires interactive setup through the UI. Only non-interactive interceptors can be activated via this API.`}};if(!r.isActivable)return{success:!1,error:{code:"NOT_ACTIVABLE",message:`Interceptor '${n}' (${r.name}) is not currently activable. It may not be installed or supported on this system.`}};try{return yield e.activateInterceptor(n,r.activationOptions),{success:!0,data:{}}}catch(e){return{success:!1,error:{code:"ACTIVATION_FAILED",message:`Failed to activate interceptor '${n}': ${e instanceof Error?e.message:String(e)}`}}}})}}(t))}(e,t.interceptorStore),IA(e,t.accountStore)}(a,{eventsStore:r,proxyStore:o,interceptorStore:s,accountStore:n}),function(e,t,n){let r=null,o=1e3,s=null,a=[];function i(){const s=`ws://127.0.0.1:${ve()}/ui-operations`;try{r=new WebSocket(s)}catch(e){return void l()}r.onopen=()=>{o=1e3,r&&r.readyState===WebSocket.OPEN&&(a.push((0,w.autorun)(()=>{r.send(JSON.stringify({type:"auth",token:t,jwt:!!n.user.isPaidUser()&&n.userJwt}))})),a.push((0,w.autorun)(()=>{r.send(JSON.stringify({type:"operations",operations:e.getDefinitions()}))})))},r.onmessage=t=>{try{!function(t){if(!t)return;if("auth-result"===t.type)return void(t.success||console.warn("Server auth failed:",t.error));if("request"!==t.type)return;const{id:n,operation:o,params:s}=t;e.execute(o,s||{}).then(e=>{r&&r.readyState===WebSocket.OPEN&&r.send(JSON.stringify({type:"response",id:n,result:e}))})}(JSON.parse(t.data))}catch(e){}},r.onclose=()=>{a.forEach(e=>e()),a=[],r=null,l()},r.onerror=()=>{}}function l(){s||(s=setTimeout(()=>{s=null,o=Math.min(2*o,3e4),i()},o))}i()}(a,null!==(t=new URLSearchParams(window.location.search).get("authToken"))&&void 0!==t?t:void 0,n)}({accountStore:DA,eventsStore:UA,proxyStore:BA,interceptorStore:LA}),_A.then(()=>{Ng(),console.log("App started, rendering"),document.dispatchEvent(new Event("load:rendering")),x.render(b.createElement(E.Kq,Object.assign({},zA),b.createElement(uA,null,b.createElement(fA,null,b.createElement(ne,null),b.createElement(dA,null)))),document.querySelector("#app"))}),Promise.race([_A,re(1e4).then(()=>qA(void 0,void 0,void 0,function*(){throw console.log("Previous server version was",yield qe),Object.assign(new Error("Failed to initialize application"),{isTimeout:!0})}))]).catch(e=>{const t=Object.assign(new Event("load:failed"),{error:e});document.dispatchEvent(t),f(e),_A.then(()=>{Fe.then(e=>qA(void 0,void 0,void 0,function*(){console.log("Server version was",yield qe,"now started late with",e),f("Successfully initialized application, but after timeout")}))})})},47790(){},80693(){},64141(){},38989(){},69100(){},42634(){},15340(){},79838(){},63779(){},77199(){},33375(){},14842(){}},o={};function s(e){var t=o[e];if(void 0!==t)return t.exports;var n=o[e]={id:e,loaded:!1,exports:{}};return r[e].call(n.exports,n,n.exports,s),n.loaded=!0,n.exports}s.m=r,s.amdO={},e=[],s.O=(t,n,r,o)=>{if(!n){var a=1/0;for(d=0;d<e.length;d++){for(var[n,r,o]=e[d],i=!0,l=0;l<n.length;l++)(!1&o||a>=o)&&Object.keys(s.O).every(e=>s.O[e](n[l]))?n.splice(l--,1):(i=!1,o<a&&(a=o));if(i){e.splice(d--,1);var c=r();void 0!==c&&(t=c)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[n,r,o]},s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},s.f={},s.e=e=>Promise.all(Object.keys(s.f).reduce((t,n)=>(s.f[n](e,t),t),[])),s.u=e=>e+".bundle.js",s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),t={},n="httptoolkit-ui:",s.l=(e,r,o,a)=>{if(t[e])t[e].push(r);else{var i,l;if(void 0!==o)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==n+o){i=u;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",s.nc&&i.setAttribute("nonce",s.nc),i.setAttribute("data-webpack",n+o),i.src=e),t[e]=[r];var p=(n,r)=>{i.onerror=i.onload=null,clearTimeout(h);var o=t[e];if(delete t[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach(e=>e(r)),n)return n(r)},h=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),l&&document.head.appendChild(i)}},s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;s.g.importScripts&&(e=s.g.location+"");var t=s.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var r=n.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=n[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/^blob:/,"").replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),s.p=e})(),(()=>{s.b="undefined"!=typeof document&&document.baseURI||self.location.href;var e={main:0};s.f.j=(t,n)=>{var r=s.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var o=new Promise((n,o)=>r=e[t]=[n,o]);n.push(r[2]=o);var a=s.p+s.u(t),i=new Error;s.l(a,n=>{if(s.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,r[1](i)}},"chunk-"+t,t)}},s.O.j=t=>0===e[t];var t=(t,n)=>{var r,o,[a,i,l]=n,c=0;if(a.some(t=>0!==e[t])){for(r in i)s.o(i,r)&&(s.m[r]=i[r]);if(l)var d=l(s)}for(t&&t(n);c<a.length;c++)o=a[c],s.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return s.O(d)},n=self.webpackChunkhttptoolkit_ui=self.webpackChunkhttptoolkit_ui||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),s.nc=void 0;var a=s.O(void 0,["mockttp","apis","vendors-node_modules_httptoolkit_httpsnippet_src_index_js-node_modules_ajv_dist_ajv_js-node_m-0597f9","vendors-node_modules_bn_js_lib_bn_js-node_modules_path-browserify_index_js-node_modules_reada-421888","vendors-node_modules_ethersproject_abi_lib_esm_abi-coder_js-node_modules_fortawesome_free-bra-b884c5"],()=>s(80086));a=s.O(a)})();
