function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},s={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in i)return i[e].exports;if(e in s){var t=s[e];delete s[e];var n={id:e,exports:{}};return i[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){s[e]=t},n.parcelRequired7c6=r),r.register("kyEFX",(function(t,n){var i,s;e(t.exports,"register",(function(){return i}),(function(e){return i=e})),e(t.exports,"resolve",(function(){return s}),(function(e){return s=e}));var r={};i=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)r[t[n]]=e[t[n]]},s=function(e){var t=r[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),r("kyEFX").register(JSON.parse('{"5ZPII":"index.502a7309.js","bfgFc":"sample_placeholder.00b25f0b.jpg"}'));const o={buttonRefHome:document.querySelector("#button-header-home"),buttonRefLibrary:document.querySelector("#button-header-library"),divRefButtonLibrary:document.querySelector(".header-logo--position"),divRefWatchedQueue:document.querySelector(".header-button__library"),buttonRefWatched:document.querySelector("#button-header-watched"),buttonRefQueue:document.querySelector("#button-header-queue"),filmNameRef:document.querySelector("#film-name"),filmVotesRef:document.querySelector("#votes"),filmAverageVotesRef:document.querySelector("#average-votes"),filmPopularityRef:document.querySelector("#popularity"),filmOriginalTitleRef:document.querySelector("#original-title"),filmGenreRef:document.querySelector("#genre"),filmOverviewRef:document.querySelector("#film-overview"),backdropRef:document.querySelector("#backdrop"),filmInfoCloseBtnRef:document.querySelector(".js-close"),filmImageRef:document.querySelector("#film-modal-image"),filmAddToWatchedBtnRef:document.querySelector("#js-watched"),filmAddToQueueBtnRef:document.querySelector("#js-queue"),filmWatchTrailerBtnRef:document.querySelector("#js-trailer"),galleryListRef:document.querySelector("#js-list"),formRef:document.querySelector(".header-form"),paginationRef:document.querySelector("#pagination"),watchedBtnRef:document.getElementById("js-watched"),queueBtnRef:document.getElementById("js-queue"),alertMessage:document.querySelector(".header-form--search"),errorSearchRef:document.querySelector(".header-form__input"),switchThemeRef:document.querySelector("#switch-theme"),arrowLinkRef:document.querySelector(".arrow-link"),WATCHED:"watched",QUEUE:"queue"};var a;function l(e,t,n){var i,s,r,o,a;function l(){var c=Date.now()-o;c<t&&c>=0?i=setTimeout(l,t-c):(i=null,n||(a=e.apply(r,s),r=s=null))}null==t&&(t=100);var c=function(){r=this,s=arguments,o=Date.now();var c=n&&!i;return i||(i=setTimeout(l,t)),c&&(a=e.apply(r,s),r=s=null),a};return c.clear=function(){i&&(clearTimeout(i),i=null)},c.flush=function(){i&&(a=e.apply(r,s),r=s=null,clearTimeout(i),i=null)},c}l.debounce=l,a=l;var c,u,h={};c=void 0===n?"undefined"==typeof window?h:window:n,u=function(e){if(void 0===e&&void 0===e.document)return!1;var t,n,i,s,r,o="\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation",a='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',l="Success",c="Failure",u="Warning",h="Info",d={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},p="Success",f="Failure",m="Warning",g="Info",y={ID:"NotiflixReportWrap",className:"notiflix-report",width:"320px",backgroundColor:"#f8f8f8",borderRadius:"25px",rtl:!1,zindex:4002,backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",backOverlayClickToClose:!1,fontFamily:"Quicksand",svgSize:"110px",plainText:!0,titleFontSize:"16px",titleMaxLength:34,messageFontSize:"13px",messageMaxLength:400,buttonFontSize:"14px",buttonMaxLength:34,cssAnimation:!0,cssAnimationDuration:360,cssAnimationStyle:"fade",success:{svgColor:"#32c682",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#32c682",buttonColor:"#fff",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{svgColor:"#ff5549",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#ff5549",buttonColor:"#fff",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{svgColor:"#eebf31",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#eebf31",buttonColor:"#fff",backOverlayColor:"rgba(238,191,49,0.2)"},info:{svgColor:"#26c0d3",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#26c0d3",buttonColor:"#fff",backOverlayColor:"rgba(38,192,211,0.2)"}},v="Show",b="Ask",w="Prompt",_={ID:"NotiflixConfirmWrap",className:"notiflix-confirm",width:"300px",zindex:4003,position:"center",distance:"10px",backgroundColor:"#f8f8f8",borderRadius:"25px",backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,cssAnimationStyle:"fade",plainText:!0,titleColor:"#32c682",titleFontSize:"16px",titleMaxLength:34,messageColor:"#1e1e1e",messageFontSize:"14px",messageMaxLength:110,buttonsFontSize:"15px",buttonsMaxLength:34,okButtonColor:"#f8f8f8",okButtonBackground:"#32c682",cancelButtonColor:"#f8f8f8",cancelButtonBackground:"#a9a9a9"},k="Standard",x="Hourglass",T="Circle",C="Arrows",E="Dots",I="Pulse",N="Custom",S="Notiflix",A={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},R="Standard",L="Hourglass",P="Circle",D="Arrows",M="Dots",O="Pulse",F={ID:"NotiflixBlockWrap",querySelectorLimit:200,className:"notiflix-block",position:"absolute",zindex:1e3,backgroundColor:"rgba(255,255,255,0.9)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,svgSize:"45px",svgColor:"#383838",messageFontSize:"14px",messageMaxLength:34,messageColor:"#383838"},U=function(e){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+e+o)},V=function(e){return console.log("%c Notiflix Info ","padding:2px;border-radius:20px;color:#fff;background:#26c0d3","\n"+e+o)},z=function(t){return t||(t="head"),null!==e.document[t]||(U('\nNotiflix needs to be appended to the "<'+t+'>" element, but you called it before the "<'+t+'>" element has been created.'),!1)},B=function(t,n){if(!z("head"))return!1;if(null!==t()&&!e.document.getElementById(n)){var i=e.document.createElement("style");i.id=n,i.innerHTML=t(),e.document.head.appendChild(i)}},j=function(){var e={},t=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var i=function(n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=t&&"[object Object]"===Object.prototype.toString.call(n[i])?j(e[i],n[i]):n[i])};n<arguments.length;n++)i(arguments[n]);return e},q=function(t){var n=e.document.createElement("div");return n.innerHTML=t,n.textContent||n.innerText||""},W=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+t+'" width="'+e+'" height="'+e+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>'},H=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>'},$=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" width="'+e+'" height="'+e+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+e+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+e+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+t+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>'},K=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>'},G=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>'},X=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>'},Q=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},Y=0,J=function(n,i,s,r){if(!z("body"))return!1;t||le.Notify.init({});var o=j(!0,t,{});if("object"==typeof s&&!Array.isArray(s)||"object"==typeof r&&!Array.isArray(r)){var p={};"object"==typeof s?p=s:"object"==typeof r&&(p=r),t=j(!0,t,p)}var f=t[n.toLocaleLowerCase("en")];Y++,"string"!=typeof i&&(i="Notiflix "+n),t.plainText&&(i=q(i)),!t.plainText&&i.length>t.messageMaxLength&&(t=j(!0,t,{closeButton:!0,messageMaxLength:150}),i='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),i.length>t.messageMaxLength&&(i=i.substring(0,t.messageMaxLength)+"..."),"shadow"===t.fontAwesomeIconStyle&&(f.fontAwesomeIconColor=f.background),t.cssAnimation||(t.cssAnimationDuration=0);var m=e.document.getElementById(d.wrapID)||e.document.createElement("div");if(m.id=d.wrapID,m.style.width=t.width,m.style.zIndex=t.zindex,m.style.opacity=t.opacity,"center-center"===t.position?(m.style.left=t.distance,m.style.top=t.distance,m.style.right=t.distance,m.style.bottom=t.distance,m.style.margin="auto",m.classList.add("nx-flex-center-center"),m.style.maxHeight="calc((100vh - "+t.distance+") - "+t.distance+")",m.style.display="flex",m.style.flexWrap="wrap",m.style.flexDirection="column",m.style.justifyContent="center",m.style.alignItems="center",m.style.pointerEvents="none"):"center-top"===t.position?(m.style.left=t.distance,m.style.right=t.distance,m.style.top=t.distance,m.style.bottom="auto",m.style.margin="auto"):"center-bottom"===t.position?(m.style.left=t.distance,m.style.right=t.distance,m.style.bottom=t.distance,m.style.top="auto",m.style.margin="auto"):"right-bottom"===t.position?(m.style.right=t.distance,m.style.bottom=t.distance,m.style.top="auto",m.style.left="auto"):"left-top"===t.position?(m.style.left=t.distance,m.style.top=t.distance,m.style.right="auto",m.style.bottom="auto"):"left-bottom"===t.position?(m.style.left=t.distance,m.style.bottom=t.distance,m.style.top="auto",m.style.right="auto"):(m.style.right=t.distance,m.style.top=t.distance,m.style.left="auto",m.style.bottom="auto"),t.backOverlay){var g=e.document.getElementById(d.overlayID)||e.document.createElement("div");g.id=d.overlayID,g.style.width="100%",g.style.height="100%",g.style.position="fixed",g.style.zIndex=t.zindex-1,g.style.left=0,g.style.top=0,g.style.right=0,g.style.bottom=0,g.style.background=f.backOverlayColor||t.backOverlayColor,g.className=t.cssAnimation?"nx-with-animation":"",g.style.animationDuration=t.cssAnimation?t.cssAnimationDuration+"ms":"",e.document.getElementById(d.overlayID)||e.document.body.appendChild(g)}e.document.getElementById(d.wrapID)||e.document.body.appendChild(m);var y=e.document.createElement("div");y.id=t.ID+"-"+Y,y.className=t.className+" "+f.childClassName+" "+(t.cssAnimation?"nx-with-animation":"")+" "+(t.useIcon?"nx-with-icon":"")+" nx-"+t.cssAnimationStyle+" "+(t.closeButton&&"function"!=typeof s?"nx-with-close-button":"")+" "+("function"==typeof s?"nx-with-callback":"")+" "+(t.clickToClose?"nx-notify-click-to-close":""),y.style.fontSize=t.fontSize,y.style.color=f.textColor,y.style.background=f.background,y.style.borderRadius=t.borderRadius,y.style.pointerEvents="all",t.rtl&&(y.setAttribute("dir","rtl"),y.classList.add("nx-rtl-on")),y.style.fontFamily='"'+t.fontFamily+'", '+a,t.cssAnimation&&(y.style.animationDuration=t.cssAnimationDuration+"ms");var v="";if(t.closeButton&&"function"!=typeof s&&(v='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+f.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),t.useIcon)if(t.useFontAwesome)y.innerHTML='<i style="color:'+f.fontAwesomeIconColor+"; font-size:"+t.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+f.fontAwesomeClassName+" "+("shadow"===t.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+i+"</span>"+(t.closeButton?v:"");else{var b="";n===l?b='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+f.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':n===c?b='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+f.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':n===u?b='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+f.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':n===h&&(b='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+f.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),y.innerHTML=b+'<span class="nx-message nx-with-icon">'+i+"</span>"+(t.closeButton?v:"")}else y.innerHTML='<span class="nx-message">'+i+"</span>"+(t.closeButton?v:"");if("left-bottom"===t.position||"right-bottom"===t.position){var w=e.document.getElementById(d.wrapID);w.insertBefore(y,w.firstChild)}else e.document.getElementById(d.wrapID).appendChild(y);var _=e.document.getElementById(y.id);if(_){var k,x,T=function(){_.classList.add("nx-remove");var t=e.document.getElementById(d.overlayID);t&&0>=m.childElementCount&&t.classList.add("nx-remove"),clearTimeout(k)},C=function(){if(_&&null!==_.parentNode&&_.parentNode.removeChild(_),0>=m.childElementCount&&null!==m.parentNode){m.parentNode.removeChild(m);var t=e.document.getElementById(d.overlayID);t&&null!==t.parentNode&&t.parentNode.removeChild(t)}clearTimeout(x)};if(t.closeButton&&"function"!=typeof s&&e.document.getElementById(y.id).querySelector("span.nx-close-button").addEventListener("click",(function(){T();var e=setTimeout((function(){C(),clearTimeout(e)}),t.cssAnimationDuration)})),("function"==typeof s||t.clickToClose)&&_.addEventListener("click",(function(){"function"==typeof s&&s(),T();var e=setTimeout((function(){C(),clearTimeout(e)}),t.cssAnimationDuration)})),!t.closeButton&&"function"!=typeof s){var E=function(){k=setTimeout((function(){T()}),t.timeout),x=setTimeout((function(){C()}),t.timeout+t.cssAnimationDuration)};E(),t.pauseOnHover&&(_.addEventListener("mouseenter",(function(){_.classList.add("nx-paused"),clearTimeout(k),clearTimeout(x)})),_.addEventListener("mouseleave",(function(){_.classList.remove("nx-paused"),E()})))}}if(t.showOnlyTheLastOne&&0<Y)for(var I,N=e.document.querySelectorAll("[id^="+t.ID+"-]:not([id="+t.ID+"-"+Y+"])"),S=0;S<N.length;S++)null!==(I=N[S]).parentNode&&I.parentNode.removeChild(I);t=j(!0,t,o)},Z=function(){return'[id^=NotiflixReportWrap]{position:fixed;z-index:4002;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;left:0;top:0;padding:10px;color:#1e1e1e;border-radius:25px;background:transparent;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixReportWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixReportWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixReportWrap]>div.nx-report-click-to-close{cursor:pointer}[id^=NotiflixReportWrap]>div[class*="-content"]{width:320px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:inherit;padding:10px;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));border:1px solid rgba(0,0,0,.03);background:#f8f8f8;position:relative;z-index:1}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:110px;height:110px;display:block;margin:6px auto 12px}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"] svg{min-width:100%;max-width:100%;height:auto}[id^=NotiflixReportWrap]>*>h5{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:16px;font-weight:500;line-height:1.4;margin:0 0 10px;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);float:left;width:100%;text-align:center}[id^=NotiflixReportWrap]>*>p{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:13px;line-height:1.4;font-weight:normal;float:left;width:100%;padding:0 10px;margin:0 0 10px}[id^=NotiflixReportWrap] a#NXReportButton{word-break:break-all;word-break:break-word;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;cursor:pointer;float:right;padding:7px 17px;background:#32c682;font-size:14px;line-height:1.4;font-weight:500;border-radius:inherit!important;color:#fff}[id^=NotiflixReportWrap] a#NXReportButton:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixReportWrap].nx-rtl-on a#NXReportButton{float:left}[id^=NotiflixReportWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:report-overlay-animation .3s ease-in-out 0s normal;animation:report-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-fade{-webkit-animation:report-animation-fade .3s ease-in-out 0s normal;animation:report-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-zoom{-webkit-animation:report-animation-zoom .3s ease-in-out 0s normal;animation:report-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixReportWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:report-overlay-animation-remove .3s ease-in-out 0s normal;animation:report-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-fade{opacity:0;-webkit-animation:report-animation-fade-remove .3s ease-in-out 0s normal;animation:report-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-zoom{opacity:0;-webkit-animation:report-animation-zoom-remove .3s ease-in-out 0s normal;animation:report-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},ee=function(t,i,s,r,o,l){if(!z("body"))return!1;n||le.Report.init({});var c={};if("object"==typeof o&&!Array.isArray(o)||"object"==typeof l&&!Array.isArray(l)){var u={};"object"==typeof o?u=o:"object"==typeof l&&(u=l),c=j(!0,n,{}),n=j(!0,n,u)}var h=n[t.toLocaleLowerCase("en")];"string"!=typeof i&&(i="Notiflix "+t),"string"!=typeof s&&(t===p?s='"Do not try to become a person of success but try to become a person of value." <br><br>- Albert Einstein':t===f?s='"Failure is simply the opportunity to begin again, this time more intelligently." <br><br>- Henry Ford':t===m?s='"The peoples who want to live comfortably without producing and fatigue; they are doomed to lose their dignity, then liberty, and then independence and destiny." <br><br>- Mustafa Kemal Ataturk':t===g&&(s='"Knowledge rests not upon truth alone, but upon error also." <br><br>- Carl Gustav Jung')),"string"!=typeof r&&(r="Okay"),n.plainText&&(i=q(i),s=q(s),r=q(r)),n.plainText||(i.length>n.titleMaxLength&&(i="Possible HTML Tags Error",s='The "plainText" option is "false" and the title content length is more than the "titleMaxLength" option.',r="Okay"),s.length>n.messageMaxLength&&(i="Possible HTML Tags Error",s='The "plainText" option is "false" and the message content length is more than the "messageMaxLength" option.',r="Okay"),r.length>n.buttonMaxLength&&(i="Possible HTML Tags Error",s='The "plainText" option is "false" and the button content length is more than the "buttonMaxLength" option.',r="Okay")),i.length>n.titleMaxLength&&(i=i.substring(0,n.titleMaxLength)+"..."),s.length>n.messageMaxLength&&(s=s.substring(0,n.messageMaxLength)+"..."),r.length>n.buttonMaxLength&&(r=r.substring(0,n.buttonMaxLength)+"..."),n.cssAnimation||(n.cssAnimationDuration=0);var d=e.document.createElement("div");d.id=y.ID,d.className=n.className,d.style.zIndex=n.zindex,d.style.borderRadius=n.borderRadius,d.style.fontFamily='"'+n.fontFamily+'", '+a,n.rtl&&(d.setAttribute("dir","rtl"),d.classList.add("nx-rtl-on")),d.style.display="flex",d.style.flexWrap="wrap",d.style.flexDirection="column",d.style.alignItems="center",d.style.justifyContent="center";var v="",b=!0===n.backOverlayClickToClose;n.backOverlay&&(v='<div class="'+n.className+"-overlay"+(n.cssAnimation?" nx-with-animation":"")+(b?" nx-report-click-to-close":"")+'" style="background:'+(h.backOverlayColor||n.backOverlayColor)+";animation-duration:"+n.cssAnimationDuration+'ms;"></div>');var w,_,k="";if(t===p?(w=n.svgSize,_=h.svgColor,w||(w="110px"),_||(_="#32c682"),k='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportSuccess" width="'+w+'" height="'+w+'" fill="'+_+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@-webkit-keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportSuccess *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportSuccess2-animation;animation-name:NXReportSuccess2-animation;-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportSuccess3-animation;animation-name:NXReportSuccess3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportSuccess1-animation;animation-name:NXReportSuccess1-animation;-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M88.27 35.39L52.8 75.29 31.43 58.2c-.98-.81-2.44-.63-3.24.36-.79.99-.63 2.44.36 3.24l23.08 18.46c.43.34.93.51 1.44.51.64 0 1.27-.26 1.74-.78l36.91-41.53a2.3 2.3 0 0 0-.19-3.26c-.95-.86-2.41-.77-3.26.19z" style="-webkit-animation-name:NXReportSuccess4-animation;animation-name:NXReportSuccess4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'):t===f?k=function(e,t){return e||(e="110px"),t||(t="#ff5549"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportFailure" width="'+e+'" height="'+e+'" fill="'+t+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportFailure *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportFailure1-animation;animation-name:NXReportFailure1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M4.35 34.95c0-16.82 13.78-30.6 30.6-30.6h50.1c16.82 0 30.6 13.78 30.6 30.6v50.1c0 16.82-13.78 30.6-30.6 30.6h-50.1c-16.82 0-30.6-13.78-30.6-30.6v-50.1zM34.95 120h50.1c19.22 0 34.95-15.73 34.95-34.95v-50.1C120 15.73 104.27 0 85.05 0h-50.1C15.73 0 0 15.73 0 34.95v50.1C0 104.27 15.73 120 34.95 120z" style="-webkit-animation-name:NXReportFailure2-animation;animation-name:NXReportFailure2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportFailure3-animation;animation-name:NXReportFailure3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M82.4 37.6c-.9-.9-2.37-.9-3.27 0L60 56.73 40.86 37.6a2.306 2.306 0 0 0-3.26 3.26L56.73 60 37.6 79.13c-.9.9-.9 2.37 0 3.27.45.45 1.04.68 1.63.68.59 0 1.18-.23 1.63-.68L60 63.26 79.13 82.4c.45.45 1.05.68 1.64.68.58 0 1.18-.23 1.63-.68.9-.9.9-2.37 0-3.27L63.26 60 82.4 40.86c.9-.91.9-2.36 0-3.26z" style="-webkit-animation-name:NXReportFailure4-animation;animation-name:NXReportFailure4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,h.svgColor):t===m?k=function(e,t){return e||(e="110px"),t||(t="#eebf31"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportWarning" width="'+e+'" height="'+e+'" fill="'+t+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@-webkit-keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportWarning *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportWarning1-animation;animation-name:NXReportWarning1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M115.46 106.15l-54.04-93.8c-.61-1.06-2.23-1.06-2.84 0l-54.04 93.8c-.62 1.07.21 2.29 1.42 2.29h108.08c1.21 0 2.04-1.22 1.42-2.29zM65.17 10.2l54.04 93.8c2.28 3.96-.65 8.78-5.17 8.78H5.96c-4.52 0-7.45-4.82-5.17-8.78l54.04-93.8c2.28-3.95 8.03-4 10.34 0z" style="-webkit-animation-name:NXReportWarning2-animation;animation-name:NXReportWarning2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportWarning3-animation;animation-name:NXReportWarning3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)"><path d="M57.83 94.01c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17v-3.2c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v3.2zm0-14.15c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17V39.21c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v40.65z" style="-webkit-animation-name:NXReportWarning4-animation;animation-name:NXReportWarning4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,h.svgColor):t===g&&(k=function(e,t){return e||(e="110px"),t||(t="#26c0d3"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportInfo" width="'+e+'" height="'+e+'" fill="'+t+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportInfo *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportInfo1-animation;animation-name:NXReportInfo1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportInfo2-animation;animation-name:NXReportInfo2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportInfo3-animation;animation-name:NXReportInfo3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M57.75 43.85c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v48.18c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25V43.85zm0-15.88c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v3.32c0 1.25-1.01 2.25-2.25 2.25s-2.25-1-2.25-2.25v-3.32z" style="-webkit-animation-name:NXReportInfo4-animation;animation-name:NXReportInfo4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,h.svgColor)),d.innerHTML=v+'<div class="'+n.className+"-content"+(n.cssAnimation?" nx-with-animation ":"")+" nx-"+n.cssAnimationStyle+'" style="width:'+n.width+"; background:"+n.backgroundColor+"; animation-duration:"+n.cssAnimationDuration+'ms;"><div style="width:'+n.svgSize+"; height:"+n.svgSize+';" class="'+n.className+'-icon">'+k+'</div><h5 class="'+n.className+'-title" style="font-weight:500; font-size:'+n.titleFontSize+"; color:"+h.titleColor+';">'+i+'</h5><p class="'+n.className+'-message" style="font-size:'+n.messageFontSize+"; color:"+h.messageColor+';">'+s+'</p><a id="NXReportButton" class="'+n.className+'-button" style="font-weight:500; font-size:'+n.buttonFontSize+"; background:"+h.buttonBackground+"; color:"+h.buttonColor+';">'+r+"</a></div>",!e.document.getElementById(d.id)){e.document.body.appendChild(d);var x=function(){var t=e.document.getElementById(d.id);t.classList.add("nx-remove");var i=setTimeout((function(){null!==t.parentNode&&t.parentNode.removeChild(t),clearTimeout(i)}),n.cssAnimationDuration)};e.document.getElementById("NXReportButton").addEventListener("click",(function(){"function"==typeof o&&o(),x()})),v&&b&&e.document.querySelector(".nx-report-click-to-close").addEventListener("click",(function(){x()}))}n=j(!0,n,c)},te=function(){return'[id^=NotiflixConfirmWrap]{position:fixed;z-index:4003;width:100%;height:100%;left:0;top:0;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixConfirmWrap].nx-position-center-top{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-center-bottom{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-left-top{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-center{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-bottom{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-top{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-right-center{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-bottom{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixConfirmWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixConfirmWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:confirm-overlay-animation .3s ease-in-out 0s normal;animation:confirm-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal;animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap]>div[class*="-content"]{width:300px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:25px;padding:10px;margin:0;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));background:#f8f8f8;color:#1e1e1e;position:relative;z-index:1;text-align:center}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]{float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>h5{float:left;width:100%;margin:0;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);color:#32c682;font-family:inherit!important;font-size:16px;line-height:1.4;font-weight:500;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div{font-family:inherit!important;margin:15px 0 20px;padding:0 10px;float:left;width:100%;font-size:14px;line-height:1.4;font-weight:normal;color:inherit;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div{font-family:inherit!important;float:left;width:100%;margin:15px 0 0;padding:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input{font-family:inherit!important;float:left;width:100%;height:40px;margin:0;padding:0 15px;border:1px solid rgba(0,0,0,.1);border-radius:25px;font-size:14px;font-weight:normal;line-height:1;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;text-align:left}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-head"]>div>div>input{text-align:right}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:hover{border-color:rgba(0,0,0,.1)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:focus{border-color:rgba(0,0,0,.3)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-failure{border-color:#ff5549}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-success{border-color:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:inherit;float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a{cursor:pointer;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;float:left;width:48%;padding:9px 5px;border-radius:inherit!important;font-weight:500;font-size:15px;line-height:1.4;color:#f8f8f8;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-ok{margin:0 2% 0 0;background:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-cancel{margin:0 0 0 2%;background:#a9a9a9}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-full{margin:0;width:100%}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"],[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"]>a{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade>div[class*="-content"]{-webkit-animation:confirm-animation-fade .3s ease-in-out 0s normal;animation:confirm-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom>div[class*="-content"]{-webkit-animation:confirm-animation-zoom .3s ease-in-out 0s normal;animation:confirm-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-fade-remove .3s ease-in-out 0s normal;animation:confirm-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal;animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},ne=function(t,n,s,r,o,l,c,u,h){if(!z("body"))return!1;i||le.Confirm.init({});var d=j(!0,i,{});"object"!=typeof h||Array.isArray(h)||(i=j(!0,i,h)),"string"!=typeof n&&(n="Notiflix Confirm"),"string"!=typeof s&&(s="Do you agree with me?"),"string"!=typeof o&&(o="Yes"),"string"!=typeof l&&(l="No"),"function"!=typeof c&&(c=void 0),"function"!=typeof u&&(u=void 0),i.plainText&&(n=q(n),s=q(s),o=q(o),l=q(l)),i.plainText||(n.length>i.titleMaxLength&&(n="Possible HTML Tags Error",s='The "plainText" option is "false" and the title content length is more than "titleMaxLength" option.',o="Okay",l="..."),s.length>i.messageMaxLength&&(n="Possible HTML Tags Error",s='The "plainText" option is "false" and the message content length is more than "messageMaxLength" option.',o="Okay",l="..."),(o.length||l.length)>i.buttonsMaxLength&&(n="Possible HTML Tags Error",s='The "plainText" option is "false" and the buttons content length is more than "buttonsMaxLength" option.',o="Okay",l="...")),n.length>i.titleMaxLength&&(n=n.substring(0,i.titleMaxLength)+"..."),s.length>i.messageMaxLength&&(s=s.substring(0,i.messageMaxLength)+"..."),o.length>i.buttonsMaxLength&&(o=o.substring(0,i.buttonsMaxLength)+"..."),l.length>i.buttonsMaxLength&&(l=l.substring(0,i.buttonsMaxLength)+"..."),i.cssAnimation||(i.cssAnimationDuration=0);var p=e.document.createElement("div");p.id=_.ID,p.className=i.className+(i.cssAnimation?" nx-with-animation nx-"+i.cssAnimationStyle:""),p.style.zIndex=i.zindex,p.style.padding=i.distance,i.rtl&&(p.setAttribute("dir","rtl"),p.classList.add("nx-rtl-on"));var f="string"==typeof i.position?i.position.trim():"center";p.classList.add("nx-position-"+f),p.style.fontFamily='"'+i.fontFamily+'", '+a;var m="";i.backOverlay&&(m='<div class="'+i.className+"-overlay"+(i.cssAnimation?" nx-with-animation":"")+'" style="background:'+i.backOverlayColor+";animation-duration:"+i.cssAnimationDuration+'ms;"></div>');var g="";"function"==typeof c&&(g='<a id="NXConfirmButtonCancel" class="nx-confirm-button-cancel" style="color:'+i.cancelButtonColor+";background:"+i.cancelButtonBackground+";font-size:"+i.buttonsFontSize+';">'+l+"</a>");var y="",v=null,k=void 0;if(t===b||t===w){v=r||"";var x=t===b||200<v.length?Math.ceil(1.5*v.length):250;y='<div><input id="NXConfirmValidationInput" type="text" '+(t===w?'value="'+v+'"':"")+' maxlength="'+x+'" style="font-size:'+i.messageFontSize+";border-radius: "+i.borderRadius+';" autocomplete="off" spellcheck="false" autocapitalize="none" /></div>'}if(p.innerHTML=m+'<div class="'+i.className+'-content" style="width:'+i.width+"; background:"+i.backgroundColor+"; animation-duration:"+i.cssAnimationDuration+"ms; border-radius: "+i.borderRadius+';"><div class="'+i.className+'-head"><h5 style="color:'+i.titleColor+";font-size:"+i.titleFontSize+';">'+n+'</h5><div style="color:'+i.messageColor+";font-size:"+i.messageFontSize+';">'+s+y+'</div></div><div class="'+i.className+'-buttons"><a id="NXConfirmButtonOk" class="nx-confirm-button-ok'+("function"==typeof c?"":" nx-full")+'" style="color:'+i.okButtonColor+";background:"+i.okButtonBackground+";font-size:"+i.buttonsFontSize+';">'+o+"</a>"+g+"</div></div>",!e.document.getElementById(p.id)){e.document.body.appendChild(p);var T=e.document.getElementById(p.id),C=e.document.getElementById("NXConfirmButtonOk"),E=e.document.getElementById("NXConfirmValidationInput");E&&(E.focus(),E.setSelectionRange(0,(E.value||"").length),E.addEventListener("keyup",(function(e){var n=e.target.value;t===b&&n!==v?(e.preventDefault(),E.classList.add("nx-validation-failure"),E.classList.remove("nx-validation-success")):(t===b&&(E.classList.remove("nx-validation-failure"),E.classList.add("nx-validation-success")),("enter"===(e.key||"").toLocaleLowerCase("en")||13===e.keyCode)&&C.dispatchEvent(new Event("click")))}))),C.addEventListener("click",(function(e){if(t===b&&v&&E){if((E.value||"").toString()!==v)return E.focus(),E.classList.add("nx-validation-failure"),e.stopPropagation(),e.preventDefault(),e.returnValue=!1,e.cancelBubble=!0,!1;E.classList.remove("nx-validation-failure")}"function"==typeof c&&(t===w&&E&&(k=E.value||""),c(k)),T.classList.add("nx-remove");var n=setTimeout((function(){null!==T.parentNode&&(T.parentNode.removeChild(T),clearTimeout(n))}),i.cssAnimationDuration)})),"function"==typeof c&&e.document.getElementById("NXConfirmButtonCancel").addEventListener("click",(function(){"function"==typeof u&&(t===w&&E&&(k=E.value||""),u(k)),T.classList.add("nx-remove");var e=setTimeout((function(){null!==T.parentNode&&(T.parentNode.removeChild(T),clearTimeout(e))}),i.cssAnimationDuration)}))}i=j(!0,i,d)},ie=function(){return'[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}'},se=function(t,n,i,r,o){if(!z("body"))return!1;s||le.Loading.init({});var l=j(!0,s,{});if("object"==typeof n&&!Array.isArray(n)||"object"==typeof i&&!Array.isArray(i)){var c={};"object"==typeof n?c=n:"object"==typeof i&&(c=i),s=j(!0,s,c)}var u="";if("string"==typeof n&&0<n.length&&(u=n),r){var h="";0<(u=u.length>s.messageMaxLength?q(u).toString().substring(0,s.messageMaxLength)+"...":q(u).toString()).length&&(h='<p id="'+s.messageID+'" class="nx-loading-message" style="color:'+s.messageColor+";font-size:"+s.messageFontSize+';">'+u+"</p>"),s.cssAnimation||(s.cssAnimationDuration=0);var d="";if(t===k)d=W(s.svgSize,s.svgColor);else if(t===x)d=H(s.svgSize,s.svgColor);else if(t===T)d=$(s.svgSize,s.svgColor);else if(t===C)d=K(s.svgSize,s.svgColor);else if(t===E)d=G(s.svgSize,s.svgColor);else if(t===I)d=X(s.svgSize,s.svgColor);else if(t===N&&null!==s.customSvgCode&&null===s.customSvgUrl)d=s.customSvgCode||"";else if(t===N&&null!==s.customSvgUrl&&null===s.customSvgCode)d='<img class="nx-custom-loading-icon" width="'+s.svgSize+'" height="'+s.svgSize+'" src="'+s.customSvgUrl+'" alt="Notiflix">';else{if(t===N&&(null===s.customSvgUrl||null===s.customSvgCode))return U('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'),!1;d=function(e,t,n){return e||(e="60px"),t||(t="#f8f8f8"),n||(n="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:'+t+';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="'+n+'" stroke="'+n+'" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>'}(s.svgSize,"#f8f8f8","#32c682")}var p=parseInt((s.svgSize||"").replace(/[^0-9]/g,"")),f=e.innerWidth,m=p>=f?f-40+"px":p+"px",g='<div style="width:'+m+"; height:"+m+';" class="'+s.className+"-icon"+(0<u.length?" nx-with-message":"")+'">'+d+"</div>",y=e.document.createElement("div");y.id=A.ID,y.className=s.className+(s.cssAnimation?" nx-with-animation":"")+(s.clickToClose?" nx-loading-click-to-close":""),y.style.zIndex=s.zindex,y.style.background=s.backgroundColor,y.style.animationDuration=s.cssAnimationDuration+"ms",y.style.fontFamily='"'+s.fontFamily+'", '+a,y.style.display="flex",y.style.flexWrap="wrap",y.style.flexDirection="column",y.style.alignItems="center",y.style.justifyContent="center",s.rtl&&(y.setAttribute("dir","rtl"),y.classList.add("nx-rtl-on")),y.innerHTML=g+h,!e.document.getElementById(y.id)&&(e.document.body.appendChild(y),s.clickToClose)&&e.document.getElementById(y.id).addEventListener("click",(function(){y.classList.add("nx-remove");var e=setTimeout((function(){null!==y.parentNode&&(y.parentNode.removeChild(y),clearTimeout(e))}),s.cssAnimationDuration)}))}else if(e.document.getElementById(A.ID))var v=e.document.getElementById(A.ID),b=setTimeout((function(){v.classList.add("nx-remove");var e=setTimeout((function(){null!==v.parentNode&&(v.parentNode.removeChild(v),clearTimeout(e))}),s.cssAnimationDuration);clearTimeout(b)}),o);s=j(!0,s,l)},re=function(){return'[id^=NotiflixBlockWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1000;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;background:rgba(255,255,255,.9);text-align:center;animation-duration:.4s;width:100%;height:100%;left:0;top:0;border-radius:inherit;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixBlockWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixBlockWrap]>span[class*="-icon"]{display:block;width:45px;height:45px;position:relative;margin:0 auto}[id^=NotiflixBlockWrap]>span[class*="-icon"] svg{width:inherit;height:inherit}[id^=NotiflixBlockWrap]>span[class*="-message"]{position:relative;display:block;width:100%;margin:10px auto 0;padding:0 10px;font-family:inherit!important;font-weight:normal;font-size:14px;line-height:1.4}[id^=NotiflixBlockWrap].nx-with-animation{-webkit-animation:block-animation-fade .3s ease-in-out 0s normal;animation:block-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixBlockWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:block-animation-fade-remove .3s ease-in-out 0s normal;animation:block-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}'},oe=0,ae=function(t,n,i,s,o,l){var c;if(Array.isArray(i)){if(1>i.length)return U("Array of HTMLElements should contains at least one HTMLElement."),!1;c=i}else if(Object.prototype.isPrototypeOf.call(NodeList.prototype,i)){if(1>i.length)return U("NodeListOf<HTMLElement> should contains at least one HTMLElement."),!1;c=Array.prototype.slice.call(i)}else{if("string"!=typeof i||1>(i||"").length||1===(i||"").length&&("#"===(i||"")[0]||"."===(i||"")[0]))return U("The selector parameter must be a string and matches a specified CSS selector(s)."),!1;var u=e.document.querySelectorAll(i);if(1>u.length)return U('You called the "Notiflix.Block..." function with "'+i+'" selector, but there is no such element(s) in the document.'),!1;c=u}r||le.Block.init({});var h=j(!0,r,{});if("object"==typeof s&&!Array.isArray(s)||"object"==typeof o&&!Array.isArray(o)){var d={};"object"==typeof s?d=s:"object"==typeof o&&(d=o),r=j(!0,r,d)}var p="";"string"==typeof s&&0<s.length&&(p=s),r.cssAnimation||(r.cssAnimationDuration=0);var f=F.className;"string"==typeof r.className&&(f=r.className.trim());var m="number"==typeof r.querySelectorLimit?r.querySelectorLimit:200,g=(c||[]).length>=m?m:c.length,y="nx-block-temporary-position";if(t){for(var v,b=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr","html","head","title","script","style","iframe"],w=0;w<g;w++)if(v=c[w]){if(-1<b.indexOf(v.tagName.toLocaleLowerCase("en")))break;var _=v.querySelectorAll("[id^="+F.ID+"]");if(1>_.length){var k="";n&&(k=n===L?H(r.svgSize,r.svgColor):n===P?$(r.svgSize,r.svgColor):n===D?K(r.svgSize,r.svgColor):n===M?G(r.svgSize,r.svgColor):n===O?X(r.svgSize,r.svgColor):W(r.svgSize,r.svgColor));var x='<span class="'+f+'-icon" style="width:'+r.svgSize+";height:"+r.svgSize+';">'+k+"</span>",T="";0<p.length&&(p=p.length>r.messageMaxLength?q(p).substring(0,r.messageMaxLength)+"...":q(p),T='<span style="font-size:'+r.messageFontSize+";color:"+r.messageColor+';" class="'+f+'-message">'+p+"</span>"),oe++;var C=e.document.createElement("div");C.id=F.ID+"-"+oe,C.className=f+(r.cssAnimation?" nx-with-animation":""),C.style.position=r.position,C.style.zIndex=r.zindex,C.style.background=r.backgroundColor,C.style.animationDuration=r.cssAnimationDuration+"ms",C.style.fontFamily='"'+r.fontFamily+'", '+a,C.style.display="flex",C.style.flexWrap="wrap",C.style.flexDirection="column",C.style.alignItems="center",C.style.justifyContent="center",r.rtl&&(C.setAttribute("dir","rtl"),C.classList.add("nx-rtl-on")),C.innerHTML=x+T;var E,I=e.getComputedStyle(v).getPropertyValue("position"),N="string"==typeof I?I.toLocaleLowerCase("en"):"relative",S=Math.round(1.25*parseInt(r.svgSize))+40,A="";S>(v.offsetHeight||0)&&(A="min-height:"+S+"px;"),E=v.getAttribute("id")?"#"+v.getAttribute("id"):v.classList[0]?"."+v.classList[0]:(v.tagName||"").toLocaleLowerCase("en");var R="",B=-1>=["absolute","relative","fixed","sticky"].indexOf(N);if(B||0<A.length){if(!z("head"))return!1;B&&(R="position:relative!important;");var Q='<style id="Style-'+F.ID+"-"+oe+'">'+E+"."+y+"{"+R+A+"}</style>",Y=e.document.createRange();Y.selectNode(e.document.head);var J=Y.createContextualFragment(Q);e.document.head.appendChild(J),v.classList.add(y)}v.appendChild(C)}}}else var Z=function(t){var n=setTimeout((function(){null!==t.parentNode&&t.parentNode.removeChild(t);var i=t.getAttribute("id"),s=e.document.getElementById("Style-"+i);s&&null!==s.parentNode&&s.parentNode.removeChild(s),clearTimeout(n)}),r.cssAnimationDuration)},ee=function(e){if(e&&0<e.length)for(var t,n=0;n<e.length;n++)(t=e[n])&&(t.classList.add("nx-remove"),Z(t));else V("string"==typeof i?'"Notiflix.Block.remove();" function called with "'+i+'" selector, but this selector does not have a "Block" element to remove.':'"Notiflix.Block.remove();" function called with "'+i+'", but this "Array<HTMLElement>" or "NodeListOf<HTMLElement>" does not have a "Block" element to remove.')},te=function(e){var t=setTimeout((function(){e.classList.remove(y),clearTimeout(t)}),r.cssAnimationDuration+300)},ne=setTimeout((function(){for(var e,t=0;t<g;t++)(e=c[t])&&(te(e),_=e.querySelectorAll("[id^="+F.ID+"]"),ee(_));clearTimeout(ne)}),l);r=j(!0,r,h)},le={Notify:{init:function(e){t=j(!0,d,e),B(Q,"NotiflixNotifyInternalCSS")},merge:function(e){return t?void(t=j(!0,t,e)):(U("You have to initialize the Notify module before call Merge function."),!1)},success:function(e,t,n){J(l,e,t,n)},failure:function(e,t,n){J(c,e,t,n)},warning:function(e,t,n){J(u,e,t,n)},info:function(e,t,n){J(h,e,t,n)}},Report:{init:function(e){n=j(!0,y,e),B(Z,"NotiflixReportInternalCSS")},merge:function(e){return n?void(n=j(!0,n,e)):(U("You have to initialize the Report module before call Merge function."),!1)},success:function(e,t,n,i,s){ee(p,e,t,n,i,s)},failure:function(e,t,n,i,s){ee(f,e,t,n,i,s)},warning:function(e,t,n,i,s){ee(m,e,t,n,i,s)},info:function(e,t,n,i,s){ee(g,e,t,n,i,s)}},Confirm:{init:function(e){i=j(!0,_,e),B(te,"NotiflixConfirmInternalCSS")},merge:function(e){return i?void(i=j(!0,i,e)):(U("You have to initialize the Confirm module before call Merge function."),!1)},show:function(e,t,n,i,s,r,o){ne(v,e,t,null,n,i,s,r,o)},ask:function(e,t,n,i,s,r,o,a){ne(b,e,t,n,i,s,r,o,a)},prompt:function(e,t,n,i,s,r,o,a){ne(w,e,t,n,i,s,r,o,a)}},Loading:{init:function(e){s=j(!0,A,e),B(ie,"NotiflixLoadingInternalCSS")},merge:function(e){return s?void(s=j(!0,s,e)):(U("You have to initialize the Loading module before call Merge function."),!1)},standard:function(e,t){se(k,e,t,!0,0)},hourglass:function(e,t){se(x,e,t,!0,0)},circle:function(e,t){se(T,e,t,!0,0)},arrows:function(e,t){se(C,e,t,!0,0)},dots:function(e,t){se(E,e,t,!0,0)},pulse:function(e,t){se(I,e,t,!0,0)},custom:function(e,t){se(N,e,t,!0,0)},notiflix:function(e,t){se(S,e,t,!0,0)},remove:function(e){"number"!=typeof e&&(e=0),se(null,null,null,!1,e)},change:function(t){!function(t){"string"!=typeof t&&(t="");var n=e.document.getElementById(A.ID);if(n)if(0<t.length){t=t.length>s.messageMaxLength?q(t).substring(0,s.messageMaxLength)+"...":q(t);var i=n.getElementsByTagName("p")[0];if(i)i.innerHTML=t;else{var r=e.document.createElement("p");r.id=s.messageID,r.className="nx-loading-message nx-loading-message-new",r.style.color=s.messageColor,r.style.fontSize=s.messageFontSize,r.innerHTML=t,n.appendChild(r)}}else U("Where is the new message?")}(t)}},Block:{init:function(e){r=j(!0,F,e),B(re,"NotiflixBlockInternalCSS")},merge:function(e){return r?void(r=j(!0,r,e)):(U('You have to initialize the "Notiflix.Block" module before call Merge function.'),!1)},standard:function(e,t,n){ae(!0,R,e,t,n)},hourglass:function(e,t,n){ae(!0,L,e,t,n)},circle:function(e,t,n){ae(!0,P,e,t,n)},arrows:function(e,t,n){ae(!0,D,e,t,n)},dots:function(e,t,n){ae(!0,M,e,t,n)},pulse:function(e,t,n){ae(!0,O,e,t,n)},remove:function(e,t){"number"!=typeof t&&(t=0),ae(!1,null,e,null,null,t)}}};return"object"==typeof e.Notiflix?j(!0,e.Notiflix,{Notify:le.Notify,Report:le.Report,Confirm:le.Confirm,Loading:le.Loading,Block:le.Block}):{Notify:le.Notify,Report:le.Report,Confirm:le.Confirm,Loading:le.Loading,Block:le.Block}},"function"==typeof define&&define.amd?define([],(function(){return u(c)})):"object"==typeof h?h=u(c):c.Notiflix=u(c);var d,p,f,m=d={};function g(){throw new Error("setTimeout has not been defined")}function y(){throw new Error("clearTimeout has not been defined")}function v(e){if(p===setTimeout)return setTimeout(e,0);if((p===g||!p)&&setTimeout)return p=setTimeout,setTimeout(e,0);try{return p(e,0)}catch(t){try{return p.call(null,e,0)}catch(t){return p.call(this,e,0)}}}!function(){try{p="function"==typeof setTimeout?setTimeout:g}catch(e){p=g}try{f="function"==typeof clearTimeout?clearTimeout:y}catch(e){f=y}}();var b,w=[],_=!1,k=-1;function x(){_&&b&&(_=!1,b.length?w=b.concat(w):k=-1,w.length&&T())}function T(){if(!_){var e=v(x);_=!0;for(var t=w.length;t;){for(b=w,w=[];++k<t;)b&&b[k].run();k=-1,t=w.length}b=null,_=!1,function(e){if(f===clearTimeout)return clearTimeout(e);if((f===y||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}(e)}}function C(e,t){this.fun=e,this.array=t}function E(){}m.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];w.push(new C(e,t)),1!==w.length||_||v(T)},C.prototype.run=function(){this.fun.apply(null,this.array)},m.title="browser",m.browser=!0,m.env={},m.argv=[],m.version="",m.versions={},m.on=E,m.addListener=E,m.once=E,m.off=E,m.removeListener=E,m.removeAllListeners=E,m.emit=E,m.prependListener=E,m.prependOnceListener=E,m.listeners=function(e){return[]},m.binding=function(e){throw new Error("process.binding is not supported")},m.cwd=function(){return"/"},m.chdir=function(e){throw new Error("process.chdir is not supported")},m.umask=function(){return 0};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const I=!1,N=!1,S="${JSCORE_VERSION}",A=function(e,t){if(!e)throw R(t)},R=function(e){return new Error("Firebase Database ("+S+") INTERNAL ASSERT FAILED: "+e)},L=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):55296==(64512&s)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(s=65536+((1023&s)<<10)+(1023&e.charCodeAt(++i)),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},P={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){const s=e[t],r=t+1<e.length,o=r?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,c=s>>2,u=(3&s)<<4|o>>4;let h=(15&o)<<2|l>>6,d=63&l;a||(d=64,r||(h=64)),i.push(n[c],n[u],n[h],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(L(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const s=e[n++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=e[n++];t[i++]=String.fromCharCode((31&s)<<6|63&r)}else if(s>239&&s<365){const r=((7&s)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(r>>10)),t[i++]=String.fromCharCode(56320+(1023&r))}else{const r=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&s)<<12|(63&r)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){const s=n[e.charAt(t++)],r=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==s||null==r||null==o||null==a)throw new D;const l=s<<2|r>>4;if(i.push(l),64!==o){const e=r<<4&240|o>>2;if(i.push(e),64!==a){const e=o<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const M=function(e){const t=L(e);return P.encodeByteArray(t,!0)},O=function(e){return M(e).replace(/\./g,"")},F=function(e){try{return P.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function U(e){return V(void 0,e)}function V(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=V(e[n],t[n]));return e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const z=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n)return n;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,B=()=>{try{return z()||(()=>{if(void 0===d||void 0===d.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&F(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},j=e=>{var t,n;return null===(n=null===(t=B())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},q=e=>{const t=j(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),i]:[t.substring(0,n),i]},W=e=>{var t;return null===(t=B())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class H{wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const r=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e);return[O(JSON.stringify({alg:"none",type:"JWT"})),O(JSON.stringify(r)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function G(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(K())}function X(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function Q(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function Y(){const e=K();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function J(){return!0===I||!0===N}function Z(){try{return"object"==typeof indexedDB}catch(e){return!1}}class ee extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,ee.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,te.prototype.create)}}class te{create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],r=s?function(e,t){return e.replace(ne,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}(s,n):"Error",o=`${this.serviceName}: ${r} (${i}).`;return new ee(i,o,n)}constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}}const ne=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(e){return JSON.parse(e)}function se(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const re=function(e){let t={},n={},i={},s="";try{const r=e.split(".");t=ie(F(r[0])||""),n=ie(F(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:i,signature:s}},oe=function(e){const t=re(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},ae=function(e){const t=re(e).claims;return"object"==typeof t&&!0===t.admin};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function le(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function ce(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function ue(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function he(e,t,n){const i={};for(const s in e)Object.prototype.hasOwnProperty.call(e,s)&&(i[s]=t.call(n,e[s],s,e));return i}function de(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const s of n){if(!i.includes(s))return!1;const n=e[s],r=t[s];if(pe(n)&&pe(r)){if(!de(n,r))return!1}else if(n!==r)return!1}for(const e of i)if(!n.includes(e))return!1;return!0}function pe(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function fe(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function me(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}})),t}function ge(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"==typeof e)for(let i=0;i<16;i++)n[i]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let i=0;i<16;i++)n[i]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){const t=n[e-3]^n[e-8]^n[e-14]^n[e-16];n[e]=4294967295&(t<<1|t>>>31)}let i,s,r=this.chain_[0],o=this.chain_[1],a=this.chain_[2],l=this.chain_[3],c=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(i=l^o&(a^l),s=1518500249):(i=o^a^l,s=1859775393):e<60?(i=o&a|l&(o|a),s=2400959708):(i=o^a^l,s=3395469782);const t=(r<<5|r>>>27)+i+c+s+n[e]&4294967295;c=l,l=a,a=4294967295&(o<<30|o>>>2),o=r,r=t}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let i=0;const s=this.buf_;let r=this.inbuf_;for(;i<t;){if(0===r)for(;i<=n;)this.compress_(e,i),i+=this.blockSize;if("string"==typeof e){for(;i<t;)if(s[r]=e.charCodeAt(i),++r,++i,r===this.blockSize){this.compress_(s),r=0;break}}else for(;i<t;)if(s[r]=e[i],++r,++i,r===this.blockSize){this.compress_(s),r=0;break}}this.inbuf_=r,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let i=24;i>=0;i-=8)e[n]=this.chain_[t]>>i&255,++n;return e}constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}}function ve(e,t){const n=new be(e,t);return n.subscribe.bind(n)}class be{next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=we),void 0===i.error&&(i.error=we),void 0===i.complete&&(i.complete=we);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}})),this.observers.push(i),s}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}}function we(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(e,t){return`${e} failed: ${t} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ke=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);if(s>=55296&&s<=56319){const t=s-55296;i++,A(i<e.length,"Surrogate pair missing trail surrogate.");s=65536+(t<<10)+(e.charCodeAt(i)-56320)}s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):s<65536?(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},xe=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Te(e){return e&&e._delegate?e._delegate:e}class Ce{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ee{get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new H;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),s=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;s.add(e),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&e(r,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,"[DEFAULT]"===i?void 0:i),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var i;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class Ie{addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ee(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}constructor(e){this.name=e,this.providers=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ne=[];var Se,Ae;(Ae=Se||(Se={}))[Ae.DEBUG=0]="DEBUG",Ae[Ae.VERBOSE=1]="VERBOSE",Ae[Ae.INFO=2]="INFO",Ae[Ae.WARN=3]="WARN",Ae[Ae.ERROR=4]="ERROR",Ae[Ae.SILENT=5]="SILENT";const Re={debug:Se.DEBUG,verbose:Se.VERBOSE,info:Se.INFO,warn:Se.WARN,error:Se.ERROR,silent:Se.SILENT},Le=Se.INFO,Pe={[Se.DEBUG]:"log",[Se.VERBOSE]:"log",[Se.INFO]:"info",[Se.WARN]:"warn",[Se.ERROR]:"error"},De=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),s=Pe[t];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[s](`[${i}]  ${e.name}:`,...n)};class Me{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Re[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Se.DEBUG,...e),this._logHandler(this,Se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Se.VERBOSE,...e),this._logHandler(this,Se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Se.INFO,...e),this._logHandler(this,Se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Se.WARN,...e),this._logHandler(this,Se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Se.ERROR,...e),this._logHandler(this,Se.ERROR,...e)}constructor(e){this.name=e,this._logLevel=Le,this._logHandler=De,this._userLogHandler=null,Ne.push(this)}}let Oe,Fe;const Ue=new WeakMap,Ve=new WeakMap,ze=new WeakMap,Be=new WeakMap,je=new WeakMap;let qe={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Ve.get(e);if("objectStoreNames"===t)return e.objectStoreNames||ze.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return $e(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function We(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Fe||(Fe=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Ke(this),t),$e(Ue.get(this))}:function(...t){return $e(e.apply(Ke(this),t))}:function(t,...n){const i=e.call(Ke(this),t,...n);return ze.set(i,t.sort?t.sort():[t]),$e(i)}}function He(e){return"function"==typeof e?We(e):(e instanceof IDBTransaction&&function(e){if(Ve.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",r),e.removeEventListener("abort",r)},s=()=>{t(),i()},r=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",r),e.addEventListener("abort",r)}));Ve.set(e,t)}(e),t=e,(Oe||(Oe=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,qe):e);var t}function $e(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",r)},s=()=>{t($e(e.result)),i()},r=()=>{n(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",r)}));return t.then((t=>{t instanceof IDBCursor&&Ue.set(t,e)})).catch((()=>{})),je.set(t,e),t}(e);if(Be.has(e))return Be.get(e);const t=He(e);return t!==e&&(Be.set(e,t),je.set(t,e)),t}const Ke=e=>je.get(e);function Ge(e,t,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(e,t),a=$e(o);return i&&o.addEventListener("upgradeneeded",(e=>{i($e(o.result),e.oldVersion,e.newVersion,$e(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{r&&e.addEventListener("close",(()=>r())),s&&e.addEventListener("versionchange",(()=>s()))})).catch((()=>{})),a}const Xe=["get","getKey","getAll","getAllKeys","count"],Qe=["put","add","delete","clear"],Ye=new Map;function Je(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Ye.get(t))return Ye.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,s=Qe.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!s&&!Xe.includes(n))return;const r=async function(e,...t){const r=this.transaction(e,s?"readwrite":"readonly");let o=r.store;return i&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),s&&r.done]))[0]};return Ye.set(t,r),r}qe=(e=>({...e,get:(t,n,i)=>Je(t,n)||e.get(t,n,i),has:(t,n)=>!!Je(t,n)||e.has(t,n)}))(qe);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ze{getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}constructor(e){this.container=e}}const et=new Me("@firebase/app"),tt={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},nt=new Map,it=new Map;function st(e,t){try{e.container.addComponent(t)}catch(n){et.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function rt(e){const t=e.name;if(it.has(t))return et.debug(`There were multiple attempts to register component ${t}.`),!1;it.set(t,e);for(const t of nt.values())st(t,e);return!0}function ot(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const at=new te("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lt{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw at.create("app-deleted",{appName:this._name})}constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Ce("app",(()=>this),"PUBLIC"))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const i=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),s=i.name;if("string"!=typeof s||!s)throw at.create("bad-app-name",{appName:String(s)});var r;if(n||(n=null===(r=B())||void 0===r?void 0:r.config),!n)throw at.create("no-options");const o=nt.get(s);if(o){if(de(n,o.options)&&de(i,o.config))return o;throw at.create("duplicate-app",{appName:s})}const a=new Ie(s);for(const e of it.values())a.addComponent(e);const l=new lt(n,i,a);return nt.set(s,l),l}function ut(e="[DEFAULT]"){const t=nt.get(e);if(!t&&"[DEFAULT]"===e)return ct();if(!t)throw at.create("no-app",{appName:e});return t}function ht(e,t,n){var i;let s=null!==(i=tt[e])&&void 0!==i?i:e;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const e=[`Unable to register library "${s}" with version "${t}":`];return r&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void et.warn(e.join(" "))}rt(new Ce(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}let dt=null;function pt(){return dt||(dt=Ge("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore("firebase-heartbeat-store")}}).catch((e=>{throw at.create("idb-open",{originalErrorMessage:e.message})}))),dt}async function ft(e,t){try{const n=(await pt()).transaction("firebase-heartbeat-store","readwrite"),i=n.objectStore("firebase-heartbeat-store");return await i.put(t,mt(e)),n.done}catch(e){if(e instanceof ee)et.warn(e.message);else{const t=at.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});et.warn(t.message)}}}function mt(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=yt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=yt(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let i=e.slice();for(const s of e){const e=n.find((e=>e.agent===s.agent));if(e){if(e.dates.push(s.date),bt(n)>t){e.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),bt(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=O(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new vt(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}}function yt(){return(new Date).toISOString().substring(0,10)}class vt{async runIndexedDBEnvironmentCheck(){return!!Z()&&new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var e;t((null===(e=s.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{return(await pt()).transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(mt(e))}catch(e){if(e instanceof ee)et.warn(e.message);else{const t=at.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});et.warn(t.message)}}}(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return ft(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return ft(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function bt(e){return O(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var wt;wt="",rt(new Ce("platform-logger",(e=>new Ze(e)),"PRIVATE")),rt(new Ce("heartbeat",(e=>new gt(e)),"PRIVATE")),ht("@firebase/app","0.9.8",wt),ht("@firebase/app","0.9.8","esm2017"),ht("fire-js","");function _t(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(n[i[s]]=e[i[s]])}return n}Object.create;Object.create;function kt(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const xt=kt,Tt=new te("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Ct=new Me("@firebase/auth");function Et(e,...t){Ct.logLevel<=Se.ERROR&&Ct.error(`Auth (9.20.0): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(e,...t){throw Rt(e,...t)}function Nt(e,...t){return Rt(e,...t)}function St(e,t,n){const i=Object.assign(Object.assign({},xt()),{[t]:n});return new te("auth","Firebase",i).create(t,{appName:e.name})}function At(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&It(e,"argument-error"),St(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Rt(e,...t){if("string"!=typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return Tt.create(e,...t)}function Lt(e,t,...n){if(!e)throw Rt(t,...n)}function Pt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Et(t),new Error(t)}function Dt(e,t){e||Pt(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Ot(){return"http:"===Ft()||"https:"===Ft()}function Ft(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(Ot()||X()||"connection"in navigator))||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vt{get(){return Ut()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}constructor(e,t){this.shortDelay=e,this.longDelay=t,Dt(t>e,"Short delay should be less than long delay!"),this.isMobile=G()||Q()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(e,t){Dt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Pt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Pt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Pt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},qt=new Vt(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Ht(e,t,n,i,s={}){return $t(e,s,(async()=>{let s={},r={};i&&("GET"===t?r=i:s={body:JSON.stringify(i)});const o=fe(Object.assign({key:e.config.apiKey},r)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),Bt.fetch()(Gt(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},s))}))}async function $t(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},jt),t);try{const t=new Xt(e),s=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const r=await s.json();if("needConfirmation"in r)throw Qt(e,"account-exists-with-different-credential",r);if(s.ok&&!("errorMessage"in r))return r;{const t=s.ok?r.errorMessage:r.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Qt(e,"credential-already-in-use",r);if("EMAIL_EXISTS"===n)throw Qt(e,"email-already-in-use",r);if("USER_DISABLED"===n)throw Qt(e,"user-disabled",r);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw St(e,a,o);It(e,a)}}catch(t){if(t instanceof ee)throw t;It(e,"network-request-failed",{message:String(t)})}}async function Kt(e,t,n,i,s={}){const r=await Ht(e,t,n,i,s);return"mfaPendingCredential"in r&&It(e,"multi-factor-auth-required",{_serverResponse:r}),r}function Gt(e,t,n,i){const s=`${t}${n}?${i}`;return e.config.emulator?zt(e.config,s):`${e.config.apiScheme}://${s}`}class Xt{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(Nt(this.auth,"network-request-failed"))),qt.get())}))}}function Qt(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=Nt(e,t,i);return s.customData._tokenResponse=n,s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Yt(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(e){return 1e3*Number(e)}function Zt(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return Et("JWT malformed, contained fewer than 3 sections"),null;try{const e=F(n);return e?JSON.parse(e):(Et("Failed to decode base64 JWT payload"),null)}catch(e){return Et("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function en(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof ee&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class tn{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{_initializeTime(){this.lastSignInTime=Yt(this.lastLoginAt),this.creationTime=Yt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sn(e){var t;const n=e.auth,i=await e.getIdToken(),s=await en(e,async function(e,t){return Ht(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:i}));Lt(null==s?void 0:s.users.length,n,"internal-error");const r=s.users[0];e._notifyReloadListener(r);const o=(null===(t=r.providerUserInfo)||void 0===t?void 0:t.length)?r.providerUserInfo.map((e=>{var{providerId:t}=e,n=_t(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(l=e.providerData,c=o,[...l.filter((e=>!c.some((t=>t.providerId===e.providerId)))),...c]);var l,c;const u=e.isAnonymous,h=!(e.email&&r.passwordHash||(null==a?void 0:a.length)),d=!!u&&h,p={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new nn(r.createdAt,r.lastLoginAt),isAnonymous:d};Object.assign(e,p)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rn{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Lt(e.idToken,"internal-error"),Lt(void 0!==e.idToken,"internal-error"),Lt(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=Zt(e);return Lt(t,"internal-error"),Lt(void 0!==t.exp,"internal-error"),Lt(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return Lt(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:s}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await $t(e,{},(async()=>{const n=fe({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,r=Gt(e,i,"/v1/token",`key=${s}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",Bt.fetch()(r,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,i,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:s}=t,r=new rn;return n&&(Lt("string"==typeof n,"internal-error",{appName:e}),r.refreshToken=n),i&&(Lt("string"==typeof i,"internal-error",{appName:e}),r.accessToken=i),s&&(Lt("number"==typeof s,"internal-error",{appName:e}),r.expirationTime=s),r}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new rn,this.toJSON())}_performRefresh(){return Pt("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(e,t){Lt("string"==typeof e||void 0===e,"internal-error",{appName:t})}class an{async getIdToken(e){const t=await en(this,this.stsTokenManager.getToken(this.auth,e));return Lt(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=Te(e),i=await n.getIdToken(t),s=Zt(i);Lt(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r="object"==typeof s.firebase?s.firebase:void 0,o=null==r?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:Yt(Jt(s.auth_time)),issuedAtTime:Yt(Jt(s.iat)),expirationTime:Yt(Jt(s.exp)),signInProvider:o||null,signInSecondFactor:(null==r?void 0:r.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=Te(e);await sn(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(Lt(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new an(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Lt(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await sn(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await en(this,async function(e,t){return Ht(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,s,r,o,a,l,c;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(i=t.email)&&void 0!==i?i:void 0,d=null!==(s=t.phoneNumber)&&void 0!==s?s:void 0,p=null!==(r=t.photoURL)&&void 0!==r?r:void 0,f=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,y=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:v,emailVerified:b,isAnonymous:w,providerData:_,stsTokenManager:k}=t;Lt(v&&k,e,"internal-error");const x=rn.fromJSON(this.name,k);Lt("string"==typeof v,e,"internal-error"),on(u,e.name),on(h,e.name),Lt("boolean"==typeof b,e,"internal-error"),Lt("boolean"==typeof w,e,"internal-error"),on(d,e.name),on(p,e.name),on(f,e.name),on(m,e.name),on(g,e.name),on(y,e.name);const T=new an({uid:v,auth:e,email:h,emailVerified:b,displayName:u,isAnonymous:w,photoURL:p,phoneNumber:d,tenantId:f,stsTokenManager:x,createdAt:g,lastLoginAt:y});return _&&Array.isArray(_)&&(T.providerData=_.map((e=>Object.assign({},e)))),m&&(T._redirectEventId=m),T}static async _fromIdTokenResponse(e,t,n=!1){const i=new rn;i.updateFromServerResponse(t);const s=new an({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await sn(s),s}constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,s=_t(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new tn(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new nn(s.createdAt||void 0,s.lastLoginAt||void 0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln=new Map;function cn(e){Dt(e instanceof Function,"Expected a class definition");let t=ln.get(e);return t?(Dt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,ln.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}constructor(){this.type="NONE",this.storage={}}}un.type="NONE";const hn=un;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(e,t,n){return`firebase:${e}:${t}:${n}`}class pn{setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?an._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new pn(cn(hn),e,n);const i=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let s=i[0]||cn(hn);const r=dn(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(r);if(t){const i=an._fromJSON(e,t);n!==s&&(o=i),s=n;break}}catch(e){}const a=i.filter((e=>e._shouldAllowMigration));return s._shouldAllowMigration&&a.length?(s=a[0],o&&await s._set(r,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==s)try{await e._remove(r)}catch(e){}}))),new pn(s,e,n)):new pn(s,e,n)}constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:s}=this.auth;this.fullUserKey=dn(this.userKey,i.apiKey,s),this.fullPersistenceKey=dn("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(vn(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(mn(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(wn(t))return"Blackberry";if(_n(t))return"Webos";if(gn(t))return"Safari";if((t.includes("chrome/")||yn(t))&&!t.includes("edge/"))return"Chrome";if(bn(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function mn(e=K()){return/firefox\//i.test(e)}function gn(e=K()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function yn(e=K()){return/crios\//i.test(e)}function vn(e=K()){return/iemobile/i.test(e)}function bn(e=K()){return/android/i.test(e)}function wn(e=K()){return/blackberry/i.test(e)}function _n(e=K()){return/webos/i.test(e)}function kn(e=K()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function xn(){return Y()&&10===document.documentMode}function Tn(e=K()){return kn(e)||bn(e)||_n(e)||wn(e)||/windows phone/i.test(e)||vn(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Cn(e,t=[]){let n;switch(e){case"Browser":n=fn(K());break;case"Worker":n=`${fn(K())}-${e}`;break;default:n=e}return`${n}/JsCore/9.20.0/${t.length?t.join(","):"FirebaseCore-web"}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function En(e,t){return Ht(e,"GET","/v2/recaptchaConfig",Wt(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(e){return void 0!==e&&void 0!==e.enterprise}class Nn{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some((e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(e){return new Promise(((t,n)=>{const i=document.createElement("script");var s,r;i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=Nt("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",(null!==(r=null===(s=document.getElementsByTagName("head"))||void 0===s?void 0:s[0])&&void 0!==r?r:document).appendChild(i)}))}function An(e){return`__${e}${Math.floor(1e6*Math.random())}`}class Rn{async verify(e="verify",t=!1){function n(t,n,i){const s=window.grecaptcha;In(s)?s.enterprise.ready((()=>{try{s.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((e=>{i(e)}))}catch(e){i(e)}})):i(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,i)=>{(async function(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{En(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((i=>{if(void 0!==i.recaptchaKey){const n=new Nn(i);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))})(this.auth).then((s=>{if(!t&&In(window.grecaptcha))n(s,e,i);else{if("undefined"==typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));Sn("https://www.google.com/recaptcha/enterprise.js?render="+s).then((()=>{n(s,e,i)})).catch((e=>{i(e)}))}})).catch((e=>{i(e)}))}))}constructor(e){this.type="recaptcha-enterprise",this.auth=Mn(e)}}async function Ln(e,t,n,i=!1){const s=new Rn(e);let r;try{r=await s.verify(n)}catch(e){r=await s.verify(n,!0)}const o=Object.assign({},t);return i?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{pushCallback(e,t){const n=t=>new Promise(((n,i)=>{try{n(e(t))}catch(e){i(e)}}));n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}constructor(e){this.auth=e,this.queue=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=cn(t)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await pn.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let i=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,r=null==i?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==r||!(null==o?void 0:o.user)||(i=o.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(e){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Lt(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await sn(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Te(e):null;return t&&Lt(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Lt(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(cn(e))}))}async initializeRecaptchaConfig(){const e=await En(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new Nn(e);if(null==this.tenantId?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled){new Rn(this).verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new te("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&cn(e)||this._popupRedirectResolver;Lt(t,this,"argument-error"),this.redirectPersistenceManager=await pn.create(this,[cn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const s="function"==typeof t?t:t.next.bind(t),r=this._isInitialized?Promise.resolve():this._initializationPromise;return Lt(r,this,"internal-error"),r.then((()=>s(this.currentUser))),"function"==typeof t?e.addObserver(t,n,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Lt(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Cn(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){Ct.logLevel<=Se.WARN&&Ct.warn(`Auth (9.20.0): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}constructor(e,t,n,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new On(this),this.idTokenSubscription=new On(this),this.beforeStateQueue=new Pn(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Tt,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}}function Mn(e){return Te(e)}class On{get next(){return Lt(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(e){this.auth=e,this.observer=null,this.addObserver=ve((e=>this.observer=e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(e,t,n){const i=Mn(e);Lt(i._canInitEmulator,i,"emulator-config-failed"),Lt(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const s=!!(null==n?void 0:n.disableWarnings),r=Un(t),{host:o,port:a}=function(e){const t=Un(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const e=s[1];return{host:e,port:Vn(i.substr(e.length+1))}}{const[e,t]=i.split(":");return{host:e,port:Vn(t)}}}(t),l=null===a?"":`:${a}`;i.config.emulator={url:`${r}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function Un(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Vn(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class zn{toJSON(){return Pt("not implemented")}_getIdTokenResponse(e){return Pt("not implemented")}_linkToIdToken(e,t){return Pt("not implemented")}_getReauthenticationResolver(e){return Pt("not implemented")}constructor(e,t){this.providerId=e,this.signInMethod=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bn(e,t){return Ht(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function jn(e,t){return Kt(e,"POST","/v1/accounts:signInWithPassword",Wt(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qn extends zn{static _fromEmailAndPassword(e,t){return new qn(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new qn(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(t=e._getRecaptchaConfig())||void 0===t?void 0:t.emailPasswordEnabled){const t=await Ln(e,n,"signInWithPassword");return jn(e,t)}return jn(e,n).catch((async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const t=await Ln(e,n,"signInWithPassword");return jn(e,t)}return Promise.reject(t)}));case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return Kt(e,"POST","/v1/accounts:signInWithEmailLink",Wt(e,t))}(e,{email:this._email,oobCode:this._password});default:It(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Bn(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return Kt(e,"POST","/v1/accounts:signInWithEmailLink",Wt(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:It(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wn(e,t){return Kt(e,"POST","/v1/accounts:signInWithIdp",Wt(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends zn{static _fromParams(e){const t=new Hn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):It("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,s=_t(t,["providerId","signInMethod"]);if(!n||!i)return null;const r=new Hn(n,i);return r.idToken=s.idToken||void 0,r.accessToken=s.accessToken||void 0,r.secret=s.secret,r.nonce=s.nonce,r.pendingToken=s.pendingToken||null,r}_getIdTokenResponse(e){return Wn(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Wn(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Wn(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=fe(t)}return e}constructor(){super(...arguments),this.pendingToken=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kn extends zn{static _fromVerification(e,t){return new Kn({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Kn({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return Kt(e,"POST","/v1/accounts:signInWithPhoneNumber",Wt(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await Kt(e,"POST","/v1/accounts:signInWithPhoneNumber",Wt(e,t));if(n.temporaryProof)throw Qt(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return Kt(e,"POST","/v1/accounts:signInWithPhoneNumber",Wt(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),$n)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:s}=e;return n||t||i||s?new Kn({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:s}):null}constructor(e){super("phone","phone"),this.params=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{static parseLink(e){const t=function(e){const t=me(ge(e)).link,n=t?me(ge(t)).deep_link_id:null,i=me(ge(e)).deep_link_id;return(i?me(ge(i)).link:null)||i||n||t||e}(e);try{return new Gn(t)}catch(e){return null}}constructor(e){var t,n,i,s,r,o;const a=me(ge(e)),l=null!==(t=a.apiKey)&&void 0!==t?t:null,c=null!==(n=a.oobCode)&&void 0!==n?n:null,u=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=a.mode)&&void 0!==i?i:null);Lt(l&&c&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=c,this.continueUrl=null!==(s=a.continueUrl)&&void 0!==s?s:null,this.languageCode=null!==(r=a.languageCode)&&void 0!==r?r:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xn{static credential(e,t){return qn._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Gn.parseLink(t);return Lt(n,"argument-error"),qn._fromEmailAndCode(e,n.code,n.tenantId)}constructor(){this.providerId=Xn.PROVIDER_ID}}Xn.PROVIDER_ID="password",Xn.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Xn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qn{setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends Qn{addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jn extends Yn{static credential(e){return Hn._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Jn.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("facebook.com")}}Jn.FACEBOOK_SIGN_IN_METHOD="facebook.com",Jn.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zn extends Yn{static credential(e,t){return Hn._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Zn.credential(t,n)}catch(e){return null}}constructor(){super("google.com"),this.addScope("profile")}}Zn.GOOGLE_SIGN_IN_METHOD="google.com",Zn.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ei extends Yn{static credential(e){return Hn._fromParams({providerId:ei.PROVIDER_ID,signInMethod:ei.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ei.credentialFromTaggedObject(e)}static credentialFromError(e){return ei.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return ei.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("github.com")}}ei.GITHUB_SIGN_IN_METHOD="github.com",ei.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ti extends Yn{static credential(e,t){return Hn._fromParams({providerId:ti.PROVIDER_ID,signInMethod:ti.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ti.credentialFromTaggedObject(e)}static credentialFromError(e){return ti.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return ti.credential(t,n)}catch(e){return null}}constructor(){super("twitter.com")}}ti.TWITTER_SIGN_IN_METHOD="twitter.com",ti.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ni{static async _fromIdTokenResponse(e,t,n,i=!1){const s=await an._fromIdTokenResponse(e,n,i),r=ii(n);return new ni({user:s,providerId:r,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=ii(n);return new ni({user:e,providerId:i,_tokenResponse:n,operationType:t})}constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}}function ii(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class si extends ee{static _fromErrorAndOperation(e,t,n,i){return new si(e,t,n,i)}constructor(e,t,n,i){var s;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,si.prototype),this.customData={appName:e.name,tenantId:null!==(s=e.tenantId)&&void 0!==s?s:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}}function ri(e,t,n,i){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw si._fromErrorAndOperation(e,n,t,i);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oi(e,t,n=!1){const i=await en(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return ni._forOperation(e,"link",i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ai(e,t,n=!1){const{auth:i}=e,s="reauthenticate";try{const r=await en(e,ri(i,s,t,e),n);Lt(r.idToken,i,"internal-error");const o=Zt(r.idToken);Lt(o,i,"internal-error");const{sub:a}=o;return Lt(e.uid===a,i,"user-mismatch"),ni._forOperation(e,s,r)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&It(i,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function li(e,t,n=!1){const i="signIn",s=await ri(e,i,t),r=await ni._fromIdTokenResponse(e,i,s);return n||await e._updateCurrentUser(r.user),r}function ci(e,t,n,i){return Te(e).onAuthStateChanged(t,n,i)}new WeakMap;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ui{_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(e,t){this.storageRetriever=e,this.type=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi extends ui{forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},s=this.storage.getItem(n);xn()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,10):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=K();return gn(e)||kn(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=Tn(),this._shouldAllowMigration=!0}}hi.type="LOCAL";const di=hi;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi extends ui{_addListener(e,t){}_removeListener(e,t){}constructor(){super((()=>window.sessionStorage),"SESSION")}}pi.type="SESSION";const fi=pi;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mi{static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new mi(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:s}=t.data,r=this.handlersMap[i];if(!(null==r?void 0:r.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(r).map((async e=>e(t.origin,s))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function gi(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */mi.receivers=[];class yi{removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,r;return new Promise(((o,a)=>{const l=gi("",20);i.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);r={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),s=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),o(t.data.response);break;default:clearTimeout(c),clearTimeout(s),a(new Error("invalid_response"))}}},this.handlers.add(r),i.port1.addEventListener("message",r.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[i.port2])})).finally((()=>{r&&this.removeMessageHandler(r)}))}constructor(e){this.target=e,this.handlers=new Set}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function bi(){return void 0!==vi().WorkerGlobalScope&&"function"==typeof vi().importScripts}class wi{toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}constructor(e){this.request=e}}function _i(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function ki(){const e=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new wi(e).toPromise()}(),t(await ki()))}))}))}async function xi(e,t,n){const i=_i(e,!0).put({fbase_key:t,value:n});return new wi(i).toPromise()}function Ti(e,t){const n=_i(e,!0).delete(t);return new wi(n).toPromise()}class Ci{async _openDb(){return this.db||(this.db=await ki()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return bi()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=mi._getInstance(bi()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new yi(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ki();return await xi(e,"__sak","1"),await Ti(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>xi(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=_i(e,!1).get(t),i=await new wi(n).toPromise();return void 0===i?null:i.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Ti(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=_i(e,!1).getAll();return new wi(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:i,value:s}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}Ci.type="LOCAL";const Ei=Ci;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
An("rcb"),new Vt(3e4,6e4);async function Ii(e,t,n){var i;const s=await n.verify();try{let r;if(Lt("string"==typeof s,e,"argument-error"),Lt("recaptcha"===n.type,e,"argument-error"),r="string"==typeof t?{phoneNumber:t}:t,"session"in r){const t=r.session;if("phoneNumber"in r){Lt("enroll"===t.type,e,"internal-error");const n=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return Ht(e,"POST","/v2/accounts/mfaEnrollment:start",Wt(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,recaptchaToken:s}});return n.phoneSessionInfo.sessionInfo}{Lt("signin"===t.type,e,"internal-error");const n=(null===(i=r.multiFactorHint)||void 0===i?void 0:i.uid)||r.multiFactorUid;Lt(n,e,"missing-multi-factor-info");const o=await function(e,t){return Ht(e,"POST","/v2/accounts/mfaSignIn:start",Wt(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:s}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return Ht(e,"POST","/v1/accounts:sendVerificationCode",Wt(e,t))}(e,{phoneNumber:r.phoneNumber,recaptchaToken:s});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ni{verifyPhoneNumber(e,t){return Ii(this.auth,e,Te(t))}static credential(e,t){return Kn._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Ni.credentialFromTaggedObject(t)}static credentialFromError(e){return Ni.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Kn._fromTokenResponse(t,n):null}constructor(e){this.providerId=Ni.PROVIDER_ID,this.auth=Mn(e)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Si(e,t){return t?cn(t):(Lt(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ni.PROVIDER_ID="phone",Ni.PHONE_SIGN_IN_METHOD="phone";class Ai extends zn{_getIdTokenResponse(e){return Wn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Wn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Wn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}constructor(e){super("custom","custom"),this.params=e}}function Ri(e){return li(e.auth,new Ai(e),e.bypassAuthState)}function Li(e){const{auth:t,user:n}=e;return Lt(n,t,"internal-error"),ai(n,new Ai(e),e.bypassAuthState)}async function Pi(e){const{auth:t,user:n}=e;return Lt(n,t,"internal-error"),oi(n,new Ai(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:s,error:r,type:o}=e;if(r)return void this.reject(r);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ri;case"linkViaPopup":case"linkViaRedirect":return Pi;case"reauthViaPopup":case"reauthViaRedirect":return Li;default:It(this.auth,"internal-error")}}resolve(e){Dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(e,t,n,i,s=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mi=new Vt(2e3,1e4);async function Oi(e,t,n){const i=Mn(e);At(e,t,Qn);const s=Si(i,n);return new Fi(i,"signInViaPopup",t,s).executeNotNull()}class Fi extends Di{async executeNotNull(){const e=await this.execute();return Lt(e,this.auth,"internal-error"),e}async onExecution(){Dt(1===this.filter.length,"Popup operations only handle one event");const e=gi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(Nt(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(Nt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Fi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Nt(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,Mi.get())};e()}constructor(e,t,n,i,s){super(e,t,i,s),this.provider=n,this.authWindow=null,this.pollId=null,Fi.currentPopupAction&&Fi.currentPopupAction.cancel(),Fi.currentPopupAction=this}}Fi.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ui=new Map;class Vi extends Di{async execute(){let e=Ui.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=ji(t),i=Bi(e);if(!await i._isAvailable())return!1;const s="true"===await i._get(n);return await i._remove(n),s}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Ui.set(this.auth._key(),e)}return this.bypassAuthState||Ui.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}}function zi(e,t){Ui.set(e._key(),t)}function Bi(e){return cn(e._redirectPersistence)}function ji(e){return dn("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qi(e,t,n=!1){const i=Mn(e),s=Si(i,t),r=new Vi(i,s,n),o=await r.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}class Wi{registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $i(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!$i(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(Nt(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Hi(e))}saveEventToCache(e){this.cachedEventUids.add(Hi(e)),this.lastProcessedEventTime=Date.now()}constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function Hi(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function $i({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ki=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Gi=/^https?/;async function Xi(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Ht(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(Qi(e))return}catch(e){}It(e,"unauthorized-domain")}function Qi(e){const t=Mt(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return""===s.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&s.hostname===i}if(!Gi.test(n))return!1;if(Ki.test(e))return i===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yi=new Vt(3e4,6e4);function Ji(){const e=vi().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let Zi=null;function es(e){return Zi=Zi||function(e){return new Promise(((t,n)=>{var i,s,r;function o(){Ji(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Ji(),n(Nt(e,"network-request-failed"))},timeout:Yi.get()})}if(null===(s=null===(i=vi().gapi)||void 0===i?void 0:i.iframes)||void 0===s?void 0:s.Iframe)t(gapi.iframes.getContext());else{if(!(null===(r=vi().gapi)||void 0===r?void 0:r.load)){const t=An("iframefcb");return vi()[t]=()=>{gapi.load?o():n(Nt(e,"network-request-failed"))},Sn(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Zi=null,e}))}(e),Zi}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts=new Vt(5e3,15e3),ns={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},is=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ss(e){const t=e.config;Lt(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?zt(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,i={apiKey:t.apiKey,appName:e.name,v:"9.20.0"},s=is.get(e.config.apiHost);s&&(i.eid=s);const r=e._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${fe(i).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const rs={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class os{close(){if(this.window)try{this.window.close()}catch(e){}}constructor(e){this.window=e,this.associatedEvent=null}}function as(e,t,n,i=500,s=600){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},rs),{width:i.toString(),height:s.toString(),top:r,left:o}),c=K().toLowerCase();n&&(a=yn(c)?"_blank":n),mn(c)&&(t=t||"http://localhost",l.scrollbars="yes");const u=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=K()){var t;return kn(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",a),new os(null);const h=window.open(t||"",a,u);Lt(h,e,"popup-blocked");try{h.focus()}catch(e){}return new os(h)}const ls=encodeURIComponent("fac");async function cs(e,t,n,i,s,r){Lt(e.config.authDomain,e,"auth-domain-config-required"),Lt(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:"9.20.0",eventId:s};if(t instanceof Qn){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",ue(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(r||{}))o[e]=t}if(t instanceof Yn){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];const l=await e._getAppCheckToken(),c=l?`#${ls}=${encodeURIComponent(l)}`:"";return`${function({config:e}){return e.emulator?zt(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${fe(a).slice(1)}${c}`}const us=class{async _openPopup(e,t,n,i){var s;Dt(null===(s=this.eventManagers[e._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()");return as(e,await cs(e,t,n,Mt(),i),gi())}async _openRedirect(e,t,n,i){await this._originValidation(e);return function(e){vi().location.href=e}(await cs(e,t,n,Mt(),i)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(Dt(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await es(e),n=vi().gapi;return Lt(n,e,"internal-error"),t.open({where:document.body,url:ss(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ns,dontclear:!0},(t=>new Promise((async(n,i)=>{await t.restyle({setHideOnLeave:!1});const s=Nt(e,"network-request-failed"),r=vi().setTimeout((()=>{i(s)}),ts.get());function o(){vi().clearTimeout(r),n(t)}t.ping(o).then(o,(()=>{i(s)}))}))))}(e),n=new Wi(e);return t.register("authEvent",(t=>{Lt(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var i;const s=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i.webStorageSupport;void 0!==s&&t(!!s),It(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Xi(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Tn()||gn()||kn()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=fi,this._completeRedirectFn=qi,this._overrideRedirectResult=zi}};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hs{getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Lt(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(e){this.auth=e,this.internalListeners=new Map}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ds=W("authIdTokenMaxAge")||300;let ps=null;var fs;fs="Browser",rt(new Ce("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:r,authDomain:o}=n.options;Lt(r&&!r.includes(":"),"invalid-api-key",{appName:n.name}),Lt(!(null==o?void 0:o.includes(":")),"argument-error",{appName:n.name});const a={apiKey:r,authDomain:o,clientPlatform:fs,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Cn(fs)},l=new Dn(n,i,s,a);return function(e,t){const n=(null==t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(cn);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null==t?void 0:t.popupRedirectResolver)}(l,t),l}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),rt(new Ce("auth-internal",(e=>{const t=Mn(e.getProvider("auth").getImmediate());return new hs(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),ht("@firebase/auth","0.23.0",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(fs)),ht("@firebase/auth","0.23.0","esm2017");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
ht("firebase","9.20.0","app");var ms,gs={};
/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */window,ms=function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var s=t[i]={i:i,l:!1,exports:{}};return e[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(i,s,function(t){return e[t]}.bind(null,s));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="dist",n(n.s=10)}([function(e,t,n){e.exports=function(e,t){var n,i,s,r,o=Object.prototype.hasOwnProperty;for(s=1,r=arguments.length;s<r;s+=1)for(i in n=arguments[s])o.call(n,i)&&(e[i]=n[i]);return e}},function(e,t,n){e.exports=function(e){return void 0===e}},function(e,t,n){e.exports=function(e){return e instanceof Array}},function(e,t,n){var i=n(2),s=n(17),r=n(6);e.exports=function(e,t,n){i(e)?s(e,t,n):r(e,t,n)}},function(e,t,n){e.exports=function(e){return"string"==typeof e||e instanceof String}},function(e,t,n){e.exports=function(e){return e instanceof Function}},function(e,t,n){e.exports=function(e,t,n){var i;for(i in n=n||null,e)if(e.hasOwnProperty(i)&&!1===t.call(n,e[i],i,e))break}},function(e,t,n){var i=n(18),s=n(0);e.exports=function(e,t){var n;return t||(t=e,e=null),n=t.init||function(){},e&&i(n,e),t.hasOwnProperty("static")&&(s(n,t.static),delete t.static),s(n.prototype,t),n}},function(e,t,n){var i=n(2);e.exports=function(e,t,n){var s,r;if(n=n||0,!i(t))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(t,e,n);for(r=t.length,s=n;n>=0&&s<r;s+=1)if(t[s]===e)return s;return-1}},function(e,t,n){var i=n(29),s=n(30),r=n(5),o={capitalizeFirstLetter:function(e){return e.substring(0,1).toUpperCase()+e.substring(1,e.length)},isContained:function(e,t){return!!t&&(e===t||t.contains(e))},createElementByTemplate:function(e,t){var n=document.createElement("div"),s=r(e)?e(t):i(e,t);return n.innerHTML=s,n.firstChild},bind:function(e,t){var n,i=Array.prototype.slice;return e.bind?e.bind.apply(e,i.call(arguments,1)):(n=i.call(arguments,2),function(){return e.apply(t,n.length?n.concat(i.call(arguments)):arguments)})},sendHostName:function(){s("pagination","UA-129987462-1")}};e.exports=o},function(e,t,n){n(11),e.exports=n(12)},function(e,t,n){},function(e,t,n){var i=n(13),s=n(7),r=n(0),o=n(1),a=n(20),l=n(9),c={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},u=s({init:function(e,t){this._options=r({},c,t),this._currentPage=0,this._view=new a(e,this._options,l.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&l.sendHostName()},_setCurrentPage:function(e){this._currentPage=e||this._options.page},_getLastPage:function(){var e=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return e||1},_getPageIndex:function(e){var t;return this._options.centerAlign?(t=e-Math.floor(this._options.visiblePages/2),t=Math.max(t,1),t=Math.min(t,this._getLastPage()-this._options.visiblePages+1)):Math.ceil(e/this._options.visiblePages)},_getRelativePage:function(e){var t="prev"===e,n=this.getCurrentPage();return t?n-1:n+1},_getMorePageIndex:function(e){var t=this._getPageIndex(this.getCurrentPage()),n=this._options.visiblePages,i="prev"===e;return this._options.centerAlign?i?t-1:t+n:i?(t-1)*n:t*n+1},_convertToValidPage:function(e){var t=this._getLastPage();return e=Math.max(e,1),e=Math.min(e,t)},_paginate:function(e){var t=this._makeViewData(e||this._options.page);this._setCurrentPage(e),this._view.update(t)},_makeViewData:function(e){var t={},n=this._getLastPage(),i=this._getPageIndex(e),s=this._getPageIndex(n),r=this._getEdge(e);return t.leftPageNumber=r.left,t.rightPageNumber=r.right,t.prevMore=i>1,t.nextMore=i<s,t.page=e,t.currentPageIndex=e,t.lastPage=n,t.lastPageListIndex=n,t},_getEdge:function(e){var t,n,i,s=this._getLastPage(),r=this._options.visiblePages,o=this._getPageIndex(e);return this._options.centerAlign?(i=Math.floor(r/2),(n=(t=Math.max(e-i,1))+r-1)>s&&(t=Math.max(s-r+1,1),n=s)):(t=(o-1)*r+1,n=o*r,n=Math.min(n,s)),{left:t,right:n}},_onClickHandler:function(e,t){switch(e){case"first":t=1;break;case"prev":t=this._getRelativePage("prev");break;case"next":t=this._getRelativePage("next");break;case"prevMore":t=this._getMorePageIndex("prev");break;case"nextMore":t=this._getMorePageIndex("next");break;case"last":t=this._getLastPage();break;default:if(!t)return}this.movePageTo(t)},reset:function(e){o(e)&&(e=this._options.totalItems),this._options.totalItems=e,this._paginate(1)},movePageTo:function(e){e=this._convertToValidPage(e),this.invoke("beforeMove",{page:e})&&(this._paginate(e),this.fire("afterMove",{page:e}))},setTotalItems:function(e){this._options.totalItems=e},setItemsPerPage:function(e){this._options.itemsPerPage=e},getCurrentPage:function(){return this._currentPage||this._options.page}});i.mixin(u),e.exports=u},function(e,t,n){var i=n(0),s=n(14),r=n(4),o=n(16),a=n(2),l=n(5),c=n(3),u=/\s+/g;function h(){this.events=null,this.contexts=null}h.mixin=function(e){i(e.prototype,h.prototype)},h.prototype._getHandlerItem=function(e,t){var n={handler:e};return t&&(n.context=t),n},h.prototype._safeEvent=function(e){var t,n=this.events;return n||(n=this.events={}),e&&((t=n[e])||(t=[],n[e]=t),n=t),n},h.prototype._safeContext=function(){var e=this.contexts;return e||(e=this.contexts=[]),e},h.prototype._indexOfContext=function(e){for(var t=this._safeContext(),n=0;t[n];){if(e===t[n][0])return n;n+=1}return-1},h.prototype._memorizeContext=function(e){var t,n;s(e)&&(t=this._safeContext(),(n=this._indexOfContext(e))>-1?t[n][1]+=1:t.push([e,1]))},h.prototype._forgetContext=function(e){var t,n;s(e)&&(t=this._safeContext(),(n=this._indexOfContext(e))>-1&&(t[n][1]-=1,t[n][1]<=0&&t.splice(n,1)))},h.prototype._bindEvent=function(e,t,n){var i=this._safeEvent(e);this._memorizeContext(n),i.push(this._getHandlerItem(t,n))},h.prototype.on=function(e,t,n){var i=this;r(e)?(e=e.split(u),c(e,(function(e){i._bindEvent(e,t,n)}))):o(e)&&(n=t,c(e,(function(e,t){i.on(t,e,n)})))},h.prototype.once=function(e,t,n){var i=this;if(o(e))return n=t,void c(e,(function(e,t){i.once(t,e,n)}));this.on(e,(function s(){t.apply(n,arguments),i.off(e,s,n)}),n)},h.prototype._spliceMatches=function(e,t){var n,i=0;if(a(e))for(n=e.length;i<n;i+=1)!0===t(e[i])&&(e.splice(i,1),n-=1,i-=1)},h.prototype._matchHandler=function(e){var t=this;return function(n){var i=e===n.handler;return i&&t._forgetContext(n.context),i}},h.prototype._matchContext=function(e){var t=this;return function(n){var i=e===n.context;return i&&t._forgetContext(n.context),i}},h.prototype._matchHandlerAndContext=function(e,t){var n=this;return function(i){var s=e===i.handler,r=t===i.context,o=s&&r;return o&&n._forgetContext(i.context),o}},h.prototype._offByEventName=function(e,t){var n=this,i=l(t),s=n._matchHandler(t);e=e.split(u),c(e,(function(e){var t=n._safeEvent(e);i?n._spliceMatches(t,s):(c(t,(function(e){n._forgetContext(e.context)})),n.events[e]=[])}))},h.prototype._offByHandler=function(e){var t=this,n=this._matchHandler(e);c(this._safeEvent(),(function(e){t._spliceMatches(e,n)}))},h.prototype._offByObject=function(e,t){var n,i=this;this._indexOfContext(e)<0?c(e,(function(e,t){i.off(t,e)})):r(t)?(n=this._matchContext(e),i._spliceMatches(this._safeEvent(t),n)):l(t)?(n=this._matchHandlerAndContext(t,e),c(this._safeEvent(),(function(e){i._spliceMatches(e,n)}))):(n=this._matchContext(e),c(this._safeEvent(),(function(e){i._spliceMatches(e,n)})))},h.prototype.off=function(e,t){r(e)?this._offByEventName(e,t):arguments.length?l(e)?this._offByHandler(e):o(e)&&this._offByObject(e,t):(this.events={},this.contexts=[])},h.prototype.fire=function(e){this.invoke.apply(this,arguments)},h.prototype.invoke=function(e){var t,n,i,s;if(!this.hasListener(e))return!0;for(t=this._safeEvent(e),n=Array.prototype.slice.call(arguments,1),i=0;t[i];){if(!1===(s=t[i]).handler.apply(s.context,n))return!1;i+=1}return!0},h.prototype.hasListener=function(e){return this.getListenerLength(e)>0},h.prototype.getListenerLength=function(e){return this._safeEvent(e).length},e.exports=h},function(e,t,n){var i=n(1),s=n(15);e.exports=function(e){return!i(e)&&!s(e)}},function(e,t,n){e.exports=function(e){return null===e}},function(e,t,n){e.exports=function(e){return e===Object(e)}},function(e,t,n){e.exports=function(e,t,n){var i=0,s=e.length;for(n=n||null;i<s&&!1!==t.call(n,e[i],i,e);i+=1);}},function(e,t,n){var i=n(19);e.exports=function(e,t){var n=i(t.prototype);n.constructor=e,e.prototype=n}},function(e,t,n){e.exports=function(e){function t(){}return t.prototype=e,new t}},function(e,t,n){var i=n(3),s=n(7),r=n(21),o=n(22),a=n(24),l=n(25),c=n(0),u=n(4),h=n(28),d=n(9),p={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},f=["first","prev","next","last"],m=["prev","next"],g=s({init:function(e,t,n){this._containerElement=null,this._firstItemClassName=t.firstItemClassName,this._lastItemClassName=t.lastItemClassName,this._template=c({},p,t.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(e),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(n)},_setRootElement:function(e){if(u(e)?e=document.getElementById(e)||document.querySelector(e):e.jquery&&(e=e[0]),!h(e))throw new Error("The container element is invalid.");this._containerElement=e},_setMoveButtons:function(){i(f,(function(e){this._buttons[e]=d.createElementByTemplate(this._template.moveButton,{type:e})}),this)},_setDisabledMoveButtons:function(){i(f,(function(e){var t="disabled"+d.capitalizeFirstLetter(e);this._buttons[t]=d.createElementByTemplate(this._template.disabledMoveButton,{type:e})}),this)},_setMoreButtons:function(){i(m,(function(e){var t=e+"More";this._buttons[t]=d.createElementByTemplate(this._template.moreButton,{type:e})}),this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(e){var t;t=e.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(t)},_appendPrevButton:function(e){var t;t=e.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(t)},_appendNextButton:function(e){var t;t=e.currentPageIndex<e.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(t)},_appendLastButton:function(e){var t;t=e.page<e.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(t)},_appendPrevMoreButton:function(e){var t;e.prevMore&&(t=this._buttons.prevMore,l(t,this._firstItemClassName),this._getContainerElement().appendChild(t))},_appendNextMoreButton:function(e){var t;e.nextMore&&(t=this._buttons.nextMore,l(t,this._lastItemClassName),this._getContainerElement().appendChild(t))},_appendPages:function(e){var t,n,i=e.leftPageNumber,s=e.rightPageNumber;for(n=i;n<=s;n+=1)n===e.page?t=d.createElementByTemplate(this._template.currentPage,{page:n}):(t=d.createElementByTemplate(this._template.page,{page:n}),this._enabledPageElements.push(t)),n!==i||e.prevMore||l(t,this._firstItemClassName),n!==s||e.nextMore||l(t,this._lastItemClassName),this._getContainerElement().appendChild(t)},_attachClickEvent:function(e){var t=this._getContainerElement();o(t,"click",(function(t){var n,i,s=r(t);a(t),(i=this._getButtonType(s))||(n=this._getPageNumber(s)),e(i,n)}),this)},_getButtonType:function(e){var t,n=this._buttons;return i(n,(function(n,i){return!d.isContained(e,n)||(t=i,!1)}),this),t},_getPageNumber:function(e){var t,n=this._findPageElement(e);return n&&(t=parseInt(n.innerText,10)),t},_findPageElement:function(e){for(var t,n=0,i=this._enabledPageElements.length;n<i;n+=1)if(t=this._enabledPageElements[n],d.isContained(e,t))return t;return null},_empty:function(){this._enabledPageElements=[],i(this._buttons,(function(e,t){this._buttons[t]=e.cloneNode(!0)}),this),this._getContainerElement().innerHTML=""},update:function(e){this._empty(),this._appendFirstButton(e),this._appendPrevButton(e),this._appendPrevMoreButton(e),this._appendPages(e),this._appendNextMoreButton(e),this._appendNextButton(e),this._appendLastButton(e)}});e.exports=g},function(e,t,n){e.exports=function(e){return e.target||e.srcElement}},function(e,t,n){var i=n(4),s=n(3),r=n(23);function o(e,t,n,i){function o(t){n.call(i||e,t||window.event)}"addEventListener"in e?e.addEventListener(t,o):"attachEvent"in e&&e.attachEvent("on"+t,o),function(e,t,n,i){var o=r(e,t),a=!1;s(o,(function(e){return e.handler!==n||(a=!0,!1)})),a||o.push({handler:n,wrappedHandler:i})}(e,t,n,o)}e.exports=function(e,t,n,r){i(t)?s(t.split(/\s+/g),(function(t){o(e,t,n,r)})):s(t,(function(t,i){o(e,i,t,n)}))}},function(e,t,n){var i="_feEventKey";e.exports=function(e,t){var n,s=e[i];return s||(s=e[i]={}),(n=s[t])||(n=s[t]=[]),n}},function(e,t,n){e.exports=function(e){e.preventDefault?e.preventDefault():e.returnValue=!1}},function(e,t,n){var i=n(3),s=n(8),r=n(26),o=n(27);e.exports=function(e){var t,n=Array.prototype.slice.call(arguments,1),a=e.classList,l=[];a?i(n,(function(t){e.classList.add(t)})):((t=r(e))&&(n=[].concat(t.split(/\s+/),n)),i(n,(function(e){s(e,l)<0&&l.push(e)})),o(e,l))}},function(e,t,n){var i=n(1);e.exports=function(e){return e&&e.className?i(e.className.baseVal)?e.className:e.className.baseVal:""}},function(e,t,n){var i=n(2),s=n(1);e.exports=function(e,t){t=(t=i(t)?t.join(" "):t).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),s(e.className.baseVal)?e.className=t:e.className.baseVal=t}},function(e,t,n){e.exports=function(e){return"object"==typeof HTMLElement?e&&(e instanceof HTMLElement||!!e.nodeType):!(!e||!e.nodeType)}},function(e,t,n){var i=n(8),s=n(3),r=n(2),o=n(4),a=n(0),l=/{{\s?|\s?}}/g,c=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,u=/\[\s?|\s?\]/,h=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,d=/\./,p=/^["']\w+["']$/,f=/"|'/g,m=/^-?\d+\.?\d*$/,g={if:function(e,t,n){var i=function(e,t){var n=[e],i=[],r=0,o=0;return s(t,(function(e,s){0===e.indexOf("if")?r+=1:"/if"===e?r-=1:r||0!==e.indexOf("elseif")&&"else"!==e||(n.push("else"===e?["true"]:e.split(" ").slice(1)),i.push(t.slice(o,s)),o=s+1)})),i.push(t.slice(o)),{exps:n,sourcesInsideIf:i}}(e,t),r=!1,o="";return s(i.exps,(function(e,t){return(r=w(e,n))&&(o=_(i.sourcesInsideIf[t],n)),!r})),o},each:function(e,t,n){var i=w(e,n),o=r(i)?"@index":"@key",l={},c="";return s(i,(function(e,i){l[o]=i,l["@this"]=e,a(n,l),c+=_(t.slice(),n)})),c},with:function(e,t,n){var s=i("as",e),r=e[s+1],o=w(e.slice(0,s),n),l={};return l[r]=o,_(t,a(n,l))||""}},y=3==="a".split(/a/).length?function(e,t){return e.split(t)}:function(e,t){var n,i,s=[],r=0;for(t.global||(t=new RegExp(t,"g")),n=t.exec(e);null!==n;)i=n.index,s.push(e.slice(r,i)),r=i+n[0].length,n=t.exec(e);return s.push(e.slice(r)),s};function v(e,t){var n,i=t[e];return"true"===e?i=!0:"false"===e?i=!1:p.test(e)?i=e.replace(f,""):c.test(e)?i=v((n=e.split(u))[0],t)[v(n[1],t)]:h.test(e)?i=v((n=e.split(d))[0],t)[n[1]]:m.test(e)&&(i=parseFloat(e)),i}function b(e,t,n){for(var i,s,r,a,l=g[e],c=1,u=2,h=t[u];c&&o(h);)0===h.indexOf(e)?c+=1:0===h.indexOf("/"+e)&&(c-=1,i=u),h=t[u+=2];if(c)throw Error(e+" needs {{/"+e+"}} expression.");return t[0]=l(t[0].split(" ").slice(1),(s=0,r=i,(a=t.splice(s+1,r-s)).pop(),a),n),t}function w(e,t){var n=v(e[0],t);return n instanceof Function?function(e,t,n){var i=[];return s(t,(function(e){i.push(v(e,n))})),e.apply(null,i)}(n,e.slice(1),t):n}function _(e,t){for(var n,i,s,r=1,a=e[r];o(a);)i=(n=a.split(" "))[0],g[i]?(s=b(i,e.splice(r,e.length-r),t),e=e.concat(s)):e[r]=w(n,t),a=e[r+=2];return e.join("")}e.exports=function(e,t){return _(y(e,l),t)}},function(e,t,n){var i=n(1),s=n(31);e.exports=function(e,t){var n=location.hostname,r="TOAST UI "+e+" for "+n+": Statistics",o=window.localStorage.getItem(r);(i(window.tui)||!1!==window.tui.usageStatistics)&&(o&&!function(e){return(new Date).getTime()-e>6048e5}(o)||(window.localStorage.setItem(r,(new Date).getTime()),setTimeout((function(){"interactive"!==document.readyState&&"complete"!==document.readyState||s("https://www.google-analytics.com/collect",{v:1,t:"event",tid:t,cid:n,dp:n,dh:e,el:e,ec:"use"})}),1e3)))}},function(e,t,n){var i=n(6);e.exports=function(e,t){var n=document.createElement("img"),s="";return i(t,(function(e,t){s+="&"+t+"="+e})),s=s.substring(1),n.src=e+"?"+s,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n}}])},gs=ms();const ys={TRENDING:"trending",SEARCH:"search",MOVIE_DETAILS:"movieDetails",MOVIE_VIDEO:"movieVideo"};async function vs({param:e=ys.TRENDING,id:t=0,page:n=1,query:i=""}){const s={trending:`/trending/all/day?api_key=cb1bcc244723619ea7f2217b5a84ccd8&page=${n}`,search:`/search/movie?api_key=cb1bcc244723619ea7f2217b5a84ccd8&query=${i}&page=${n}`,movieDetails:`/movie/${t}?api_key=cb1bcc244723619ea7f2217b5a84ccd8`,movieVideo:`/movie/${t}/videos?api_key=cb1bcc244723619ea7f2217b5a84ccd8`};return await fetch(`https://api.themoviedb.org/3${s[e]}`).then((e=>e.json()))}const bs=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}];var ws;ws=new URL(r("kyEFX").resolve("bfgFc"),import.meta.url).toString();function _s(e){if(0===e.length)return void(o.galleryListRef.innerHTML='<p class="error_localstoragy">Nothing here...🤷🏽‍♀️</p>');const n=e.map((e=>{const{title:n,name:i,poster_path:s,id:r,release_date:o,first_air_date:a="",genre_ids:l=[]}=e;let c=ks(o||a),u=n||i;u=u.length>30?u.slice(0,30)+"...":u;const h=function(e,t){const n=[];e.forEach((e=>{const i=t.find((t=>t.id===e));i&&n.push(i.name)})),n.length>2&&n.splice(2,n.length-2,"Other");return n.join(", ")}(l,bs);return`<li class="movie" data-id=${r}>\n  <div class = "movie-image__wrapper">\n  <img src="${s?`https://image.tmdb.org/t/p/w500${s}`:t(ws)}" alt="${u}"/></div>\n  <p class="movie__title">${u}</p>\n  <div class="movie__position">\n   <p class="movie__genres">${h}</p>\n  <p class="movie__genres">|</p>\n  <p class="movie__year">${c}</p>\n  </div>\n \n  </li>\n  `})).join("");o.galleryListRef.innerHTML=n}function ks(e){return e.slice(0,4)}const xs=(e,t={page:1,perPage:1/0})=>{const n=[],i=JSON.parse(localStorage.getItem(e));return i?(n.push(...i.slice((t.page-1)*t.perPage,t.page*t.perPage)),n):n},Ts=e=>{const t=JSON.parse(localStorage.getItem(e));return t?t.length:0},Cs=(e,t)=>{if("user"===e)return void localStorage.setItem(e,JSON.stringify(t));const n=xs(e);if(n.find((e=>e.id===t.id)))return;const i=Object.keys(t).reduce(((e,n)=>(void 0!==t[n]&&(e[n]=t[n]),e)),{});n.push(i),localStorage.setItem(e,JSON.stringify(n)),Es(e===o.WATCHED?o.QUEUE:o.WATCHED,t.id),i_()},Es=(e,t)=>{const n=xs(e);if(!n.find((e=>e.id===t)))return;const i=n.filter((e=>e.id!==t));localStorage.setItem(e,JSON.stringify(i)),i_()};function Is(e,n,i){i&&i.reset();const s={totalItems:e,itemsPerPage:20,visiblePages:3,currentPage:1,centerAlign:!0};o.paginationRef.style.display=e<=s.itemsPerPage?"none":"block",(i=new(t(gs))(o.paginationRef,s)).on("afterMove",(e=>{s.currentPage=e.page,function(e){vs(e).then((e=>{_s(e.results)})).catch((e=>{console.error("Error performing movie search:",e)}))}({...n,page:s.currentPage})}))}function Ns(e,n){n&&n.reset(),n=new(t(gs))(o.paginationRef,{totalItems:Ts(e),itemsPerPage:5,visiblePages:3,currentPage:1,centerAlign:!0}),o.paginationRef.style.display=Ts(e)<=n._options.itemsPerPage?"none":"block",n.on("afterMove",(t=>{const n=t.page;_s(xs(e,{page:n,perPage:5}))}));_s(xs(e,{page:1,perPage:5}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ss="";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class As{set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),se(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:ie(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}constructor(e){this.domStorage_=e,this.prefix_="firebase:"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return le(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}constructor(){this.cache_={},this.isInMemoryStorage=!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ls=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new As(t)}}catch(e){}return new Rs},Ps=Ls("localStorage"),Ds=Ls("sessionStorage"),Ms=new Me("@firebase/database"),Os=function(){let e=1;return function(){return e++}}(),Fs=function(e){const t=ke(e),n=new ye;n.update(t);const i=n.digest();return P.encodeByteArray(i)},Us=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"==typeof i&&"number"==typeof i.length?t+=Us.apply(null,i):t+="object"==typeof i?se(i):i,t+=" "}return t};let Vs=null,zs=!0;const Bs=function(e,t){A(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(Ms.logLevel=Se.VERBOSE,Vs=Ms.log.bind(Ms),t&&Ds.set("logging_enabled",!0)):"function"==typeof e?Vs=e:(Vs=null,Ds.remove("logging_enabled"))},js=function(...e){if(!0===zs&&(zs=!1,null===Vs&&!0===Ds.get("logging_enabled")&&Bs(!0)),Vs){const t=Us.apply(null,e);Vs(t)}},qs=function(e){return function(...t){js(e,...t)}},Ws=function(...e){const t="FIREBASE INTERNAL ERROR: "+Us(...e);Ms.error(t)},Hs=function(...e){const t=`FIREBASE FATAL ERROR: ${Us(...e)}`;throw Ms.error(t),new Error(t)},$s=function(...e){const t="FIREBASE WARNING: "+Us(...e);Ms.warn(t)},Ks=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},Gs=function(e,t){if(e===t)return 0;if("[MIN_NAME]"===e||"[MAX_NAME]"===t)return-1;if("[MIN_NAME]"===t||"[MAX_NAME]"===e)return 1;{const n=nr(e),i=nr(t);return null!==n?null!==i?n-i==0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},Xs=function(e,t){return e===t?0:e<t?-1:1},Qs=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+se(t))},Ys=function(e){if("object"!=typeof e||null===e)return se(e);const t=[];for(const n in e)t.push(n);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=se(t[i]),n+=":",n+=Ys(e[t[i]]);return n+="}",n},Js=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let s=0;s<n;s+=t)s+t>n?i.push(e.substring(s,n)):i.push(e.substring(s,s+t));return i};function Zs(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const er=function(e){A(!Ks(e),"Invalid JSON number");const t=1023;let n,i,s,r,o;0===e?(i=0,s=0,n=1/e==-1/0?1:0):(n=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(r=Math.min(Math.floor(Math.log(e)/Math.LN2),t),i=r+t,s=Math.round(e*Math.pow(2,52-r)-Math.pow(2,52))):(i=0,s=Math.round(e/Math.pow(2,-1074))));const a=[];for(o=52;o;o-=1)a.push(s%2?1:0),s=Math.floor(s/2);for(o=11;o;o-=1)a.push(i%2?1:0),i=Math.floor(i/2);a.push(n?1:0),a.reverse();const l=a.join("");let c="";for(o=0;o<64;o+=8){let e=parseInt(l.substr(o,8),2).toString(16);1===e.length&&(e="0"+e),c+=e}return c.toLowerCase()};const tr=new RegExp("^-?(0*)\\d{1,10}$"),nr=function(e){if(tr.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},ir=function(e){try{e()}catch(e){setTimeout((()=>{const t=e.stack||"";throw $s("Exception was thrown by user callback.",t),e}),Math.floor(0))}},sr=function(e,t){const n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rr{getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){$s(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then((e=>this.appCheck=e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(js("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',$s(e)}constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}}class ar{getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}constructor(e){this.accessToken=e}}ar.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const lr=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cr{isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ps.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}constructor(e,t,n,i,s=!1,r="",o=!1,a=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=r,this.includeNamespaceInQueryParams=o,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ps.get("host:"+e)||this._host}}function ur(e,t,n){let i;if(A("string"==typeof t,"typeof type must == string"),A("object"==typeof n,"typeof params must == object"),"websocket"===t)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if("long_polling"!==t)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const s=[];return Zs(n,((e,t)=>{s.push(e+"="+t)})),i+s.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{incrementCounter(e,t=1){le(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return U(this.counters_)}constructor(){this.counters_={}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr={},pr={};function fr(e){const t=e.toString();return dr[t]||(dr[t]=new hr),dr[t]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mr{closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&ir((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new mr(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if(J()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new yr(((...e)=>{const[t,n,i,s,r]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,"start"===t)this.id=n,this.password=i;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={start:"t"};e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&lr.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){gr.forceAllow_=!0}static forceDisallow(){gr.forceDisallow_=!0}static isAvailable(){return!J()&&(!!gr.forceAllow_||!(gr.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=se(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=M(t),i=Js(n,1840);for(let e=0;e<i.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(J())return;this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=se(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}constructor(e,t,n,i,s,r,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.transportSessionId=r,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=qs(e),this.stats_=fr(t),this.urlFn=e=>(this.appCheckToken&&(e.ac=this.appCheckToken),ur(t,"long_polling",e))}}class yr{static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||js("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",i=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+i+"="+e.seg+"&ts"+i+"="+e.ts+"&d"+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(25e3));this.addTag(e,(()=>{clearTimeout(i),n()}))}addTag(e,t){J()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{js("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}}),Math.floor(1))}constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,J())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=Os(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=yr.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){n='<script>document.domain="'+document.domain+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(e){js("frame writing exception"),e.stack&&js(e.stack),js(e)}}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vr=null;"undefined"!=typeof MozWebSocket?vr=MozWebSocket:"undefined"!=typeof WebSocket&&(vr=WebSocket);class br{static connectionURL_(e,t,n,i,s){const r={v:"5"};return!J()&&"undefined"!=typeof location&&location.hostname&&lr.test(location.hostname)&&(r.r="f"),t&&(r.s=t),n&&(r.ls=n),i&&(r.ac=i),s&&(r.p=s),ur(e,"websocket",r)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ps.set("previous_websocket_failure",!0);try{let e;if(J()){const t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/5/${Ss}/${d.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={},i=0===this.connURL.indexOf("wss://")?n.HTTPS_PROXY||n.https_proxy:n.HTTP_PROXY||n.http_proxy;i&&(e.proxy={origin:i})}this.mySock=new vr(this.connURL,[],e)}catch(e){this.log_("Error instantiating WebSocket.");const t=e.message||e.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){br.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==vr&&!br.forceDisallow_}static previouslyFailed(){return Ps.isInMemoryStorage||!0===Ps.get("previous_websocket_failure")}markConnectionHealthy(){Ps.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=ie(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(A(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=se(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=Js(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}constructor(e,t,n,i,s,r,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=qs(this.connId),this.stats_=fr(t),this.connURL=br.connectionURL_(t,r,o,i,n),this.nodeAdmin=t.nodeAdmin}}br.responsesRequiredToBeHealthy=2,br.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wr{static get ALL_TRANSPORTS(){return[gr,br]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=br&&br.isAvailable();let n=t&&!br.previouslyFailed();if(e.webSocketOnly&&(t||$s("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[br];else{const e=this.transports_=[];for(const t of wr.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);wr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}constructor(e){this.initTransports_(e)}}wr.globalTransportInitialized_=!1;class _r{start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=sr((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Qs("t",e),n=Qs("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Qs("t",e),n=Qs("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Qs("t",e);if("d"in e){const n=e.d;if("h"===t){const e=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?Ws("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ws("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==n&&$s("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),sr((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):sr((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ps.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}constructor(e,t,n,i,s,r,o,a,l,c){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=r,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=qs("c:"+this.id+":"),this.transportManager_=new wr(t),this.log_("Connection created"),this.start_()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let e=0;e<i.length;e++)if(i[e].callback===t&&(!n||n===i[e].context))return void i.splice(e,1)}validateEventType_(e){A(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}constructor(e){this.allowedEvents_=e,this.listeners_={},A(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr extends xr{static getInstance(){return new Tr}getInitialEvent(e){return A("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||G()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}}function Er(){return new Cr("")}function Ir(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function Nr(e){return e.pieces_.length-e.pieceNum_}function Sr(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new Cr(e.pieces_,t)}function Ar(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function Rr(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function Lr(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new Cr(t,0)}function Pr(e,t){const n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof Cr)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new Cr(n,0)}function Dr(e){return e.pieceNum_>=e.pieces_.length}function Mr(e,t){const n=Ir(e),i=Ir(t);if(null===n)return t;if(n===i)return Mr(Sr(e),Sr(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function Or(e,t){if(Nr(e)!==Nr(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function Fr(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(Nr(e)>Nr(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class Ur{constructor(e,t){this.errorPrefix_=t,this.parts_=Rr(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=xe(this.parts_[e]);Vr(this)}}function Vr(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+zr(e))}function zr(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br extends xr{static getInstance(){return new Br}getInitialEvent(e){return A("visible"===e,"Unknown event type: "+e),[this.visible_]}constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr extends kr{sendRequest(e,t,n){const i=++this.requestNumber_,s={r:i,a:e,b:t};this.log_(se(s)),A(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const t=new H,n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:e=>{const n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,i){this.initConnection_();const s=e._queryIdentifier,r=e._path.toString();this.log_("Listen called for "+r+" "+s),this.listens.has(r)||this.listens.set(r,new Map),A(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),A(!this.listens.get(r).has(s),"listen() called twice for same path/queryId.");const o={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(r).set(s,o),this.connected_&&this.sendListen_(o)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const s={p:n};e.tag&&(s.q=t._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest("q",s,(s=>{const r=s.d,o=s.s;jr.warnOnListenWarnings_(r,t);(this.listens.get(n)&&this.listens.get(n).get(i))===e&&(this.log_("listen response",s),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,r))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&le(e,"w")){const n=ce(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();$s(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||ae(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=oe(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,i=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),A(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,i)&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const s={p:e};i&&(s.q=n,s.t=i),this.sendRequest("n",s)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const s={p:t,d:n};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,(e=>{i&&setTimeout((()=>{i(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,s){this.initConnection_();const r={p:t,d:n};void 0!==s&&(r.h=s),this.outstandingPuts_.push({action:e,request:r,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+se(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):Ws("Unrecognized action received from server: "+se(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){A(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=1e3),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+jr.nextConnectionId_++,s=this.lastSessionId;let r=!1,o=null;const a=function(){o?o.close():(r=!0,n())},l=function(e){A(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(e)};this.realtime_={close:a,sendRequest:l};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[a,l]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);r?js("getToken() completed but was canceled"):(js("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=l&&l.token,o=new _r(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{$s(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),s))}catch(e){this.log_("Failed to get token: "+e),r||(this.repoInfo_.nodeAdmin&&$s(e),a())}}}interrupt(e){js("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){js("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ue(this.interruptReasons_)&&(this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>Ys(e))).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new Cr(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){js("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){js("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";J()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+Ss.replace(/\./g,"-")]=1,G()?e["framework.cordova"]=1:Q()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Tr.getInstance().currentlyOnline();return ue(this.interruptReasons_)&&e}constructor(e,t,n,i,s,r,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=r,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=jr.nextPersistentConnectionId_++,this.log_=qs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=1e3,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!J())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Br.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&Tr.getInstance().on("online",this.onOnline_,this)}}jr.nextPersistentConnectionId_=0,jr.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qr{static Wrap(e,t){return new qr(e,t)}constructor(e,t){this.name=e,this.node=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new qr("[MIN_NAME]",e),i=new qr("[MIN_NAME]",t);return 0!==this.compare(n,i)}minPost(){return qr.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hr;class $r extends Wr{static get __EMPTY_NODE(){return Hr}static set __EMPTY_NODE(e){Hr=e}compare(e,t){return Gs(e.name,t.name)}isDefinedOn(e){throw R("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return qr.MIN}maxPost(){return new qr("[MAX_NAME]",Hr)}makePost(e,t){return A("string"==typeof e,"KeyIndex indexValue must always be a string."),new qr(e,Hr)}toString(){return".key"}}const Kr=new $r;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}constructor(e,t,n,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let r=1;for(;!e.isEmpty();)if(r=t?n(e.key,t):1,i&&(r*=-1),r<0)e=this.isReverse_?e.left:e.right;else{if(0===r){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}}class Xr{copy(e,t,n,i,s){return new Xr(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=s?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const s=n(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===s?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Qr.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return Qr.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Xr.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Xr.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}constructor(e,t,n,i,s){this.key=e,this.value=t,this.color=null!=n?n:Xr.RED,this.left=null!=i?i:Qr.EMPTY_NODE,this.right=null!=s?s:Qr.EMPTY_NODE}}Xr.RED=!0,Xr.BLACK=!1;class Qr{insert(e,t){return new Qr(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Xr.BLACK,null,null))}remove(e){return new Qr(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Xr.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Gr(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Gr(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Gr(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Gr(this.root_,null,this.comparator_,!0,e)}constructor(e,t=Qr.EMPTY_NODE){this.comparator_=e,this.root_=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Yr(e,t){return Gs(e.name,t.name)}function Jr(e,t){return Gs(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zr;Qr.EMPTY_NODE=new class{copy(e,t,n,i,s){return this}insert(e,t,n){return new Xr(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const eo=function(e){return"number"==typeof e?"number:"+er(e):"string:"+e},to=function(e){if(e.isLeafNode()){const t=e.val();A("string"==typeof t||"number"==typeof t||"object"==typeof t&&le(t,".sv"),"Priority must be a string or number.")}else A(e===Zr||e.isEmpty(),"priority of unexpected type.");A(e===Zr||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let no,io,so;class ro{static set __childrenNodeConstructor(e){no=e}static get __childrenNodeConstructor(){return no}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ro(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:ro.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Dr(e)?this:".priority"===Ir(e)?this.priorityNode_:ro.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:ro.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=Ir(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(A(".priority"!==n||1===Nr(e),".priority must be the last token in a path"),this.updateImmediateChild(n,ro.__childrenNodeConstructor.EMPTY_NODE.updateChild(Sr(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+eo(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?er(this.value_):this.value_,this.lazyHash_=Fs(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ro.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ro.__childrenNodeConstructor?-1:(A(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,i=ro.VALUE_TYPE_ORDER.indexOf(t),s=ro.VALUE_TYPE_ORDER.indexOf(n);return A(i>=0,"Unknown leaf type: "+t),A(s>=0,"Unknown leaf type: "+n),i===s?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}constructor(e,t=ro.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,A(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),to(this.priorityNode_)}}ro.VALUE_TYPE_ORDER=["object","boolean","number","string"];const oo=new class extends Wr{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),s=n.compareTo(i);return 0===s?Gs(e.name,t.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return qr.MIN}maxPost(){return new qr("[MAX_NAME]",new ro("[PRIORITY-POST]",so))}makePost(e,t){const n=io(e);return new qr(t,new ro("[PRIORITY-POST]",n))}toString(){return".priority"}},ao=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/ao,10)),this.current_=this.count-1;const n=(i=this.count,parseInt(Array(i+1).join("1"),2));var i;this.bits_=e+1&n}}const co=function(e,t,n,i){e.sort(t);const s=function(t,i){const r=i-t;let o,a;if(0===r)return null;if(1===r)return o=e[t],a=n?n(o):o,new Xr(a,o.node,Xr.BLACK,null,null);{const l=parseInt(r/2,10)+t,c=s(t,l),u=s(l+1,i);return o=e[l],a=n?n(o):o,new Xr(a,o.node,Xr.BLACK,c,u)}},r=function(t){let i=null,r=null,o=e.length;const a=function(t,i){const r=o-t,a=o;o-=t;const c=s(r+1,a),u=e[r],h=n?n(u):u;l(new Xr(h,u.node,i,null,c))},l=function(e){i?(i.left=e,i=e):(r=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,Xr.BLACK):(a(i,Xr.BLACK),a(i,Xr.RED))}return r}(new lo(e.length));return new Qr(i||t,r)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uo;const ho={};class po{static get Default(){return A(ho&&oo,"ChildrenNode.ts has not been loaded"),uo=uo||new po({".priority":ho},{".priority":oo}),uo}get(e){const t=ce(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Qr?t:null}hasIndex(e){return le(this.indexSet_,e.toString())}addIndex(e,t){A(e!==Kr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const s=t.getIterator(qr.Wrap);let r,o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),n.push(o),o=s.getNext();r=i?co(n,e.getCompare()):ho;const a=e.toString(),l=Object.assign({},this.indexSet_);l[a]=e;const c=Object.assign({},this.indexes_);return c[a]=r,new po(c,l)}addToIndexes(e,t){const n=he(this.indexes_,((n,i)=>{const s=ce(this.indexSet_,i);if(A(s,"Missing index implementation for "+i),n===ho){if(s.isDefinedOn(e.node)){const n=[],i=t.getIterator(qr.Wrap);let r=i.getNext();for(;r;)r.name!==e.name&&n.push(r),r=i.getNext();return n.push(e),co(n,s.getCompare())}return ho}{const i=t.get(e.name);let s=n;return i&&(s=s.remove(new qr(e.name,i))),s.insert(e,e.node)}}));return new po(n,this.indexSet_)}removeFromIndexes(e,t){const n=he(this.indexes_,(n=>{if(n===ho)return n;{const i=t.get(e.name);return i?n.remove(new qr(e.name,i)):n}}));return new po(n,this.indexSet_)}constructor(e,t){this.indexes_=e,this.indexSet_=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fo;class mo{static get EMPTY_NODE(){return fo||(fo=new mo(new Qr(Jr),null,po.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||fo}updatePriority(e){return this.children_.isEmpty()?this:new mo(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?fo:t}}getChild(e){const t=Ir(e);return null===t?this:this.getImmediateChild(t).getChild(Sr(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(A(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new qr(e,t);let i,s;t.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),s=this.indexMap_.addToIndexes(n,this.children_));const r=i.isEmpty()?fo:this.priorityNode_;return new mo(i,r,s)}}updateChild(e,t){const n=Ir(e);if(null===n)return t;{A(".priority"!==Ir(e)||1===Nr(e),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(Sr(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,s=!0;if(this.forEachChild(oo,((r,o)=>{t[r]=o.val(e),n++,s&&mo.INTEGER_REGEXP_.test(r)?i=Math.max(i,Number(r)):s=!1})),!e&&s&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+eo(this.getPriority().val())+":"),this.forEachChild(oo,((t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)})),this.lazyHash_=""===e?"":Fs(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new qr(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new qr(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new qr(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,qr.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)<0;)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,qr.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)>0;)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===go?-1:0}withIndex(e){if(e===Kr||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new mo(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Kr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(oo),n=t.getIterator(oo);let i=e.getNext(),s=n.getNext();for(;i&&s;){if(i.name!==s.name||!i.node.equals(s.node))return!1;i=e.getNext(),s=n.getNext()}return null===i&&null===s}return!1}return!1}}resolveIndex_(e){return e===Kr?null:this.indexMap_.get(e.toString())}constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&to(this.priorityNode_),this.children_.isEmpty()&&A(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}}mo.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const go=new class extends mo{compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return mo.EMPTY_NODE}isEmpty(){return!1}constructor(){super(new Qr(Jr),mo.EMPTY_NODE,po.Default)}};Object.defineProperties(qr,{MIN:{value:new qr("[MIN_NAME]",mo.EMPTY_NODE)},MAX:{value:new qr("[MAX_NAME]",go)}}),$r.__EMPTY_NODE=mo.EMPTY_NODE,ro.__childrenNodeConstructor=mo,Zr=go,function(e){so=e}(go);function yo(e,t=null){if(null===e)return mo.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),A(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new ro(e,yo(t))}if(e instanceof Array){let n=mo.EMPTY_NODE;return Zs(e,((t,i)=>{if(le(e,t)&&"."!==t.substring(0,1)){const e=yo(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(yo(t))}{const n=[];let i=!1;if(Zs(e,((e,t)=>{if("."!==e.substring(0,1)){const s=yo(t);s.isEmpty()||(i=i||!s.getPriority().isEmpty(),n.push(new qr(e,s)))}})),0===n.length)return mo.EMPTY_NODE;const s=co(n,Yr,(e=>e.name),Jr);if(i){const e=co(n,oo.getCompare());return new mo(s,yo(t),new po({".priority":e},{".priority":oo}))}return new mo(s,yo(t),po.Default)}}!function(e){io=e}(yo);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vo extends Wr{extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),s=n.compareTo(i);return 0===s?Gs(e.name,t.name):s}makePost(e,t){const n=yo(e),i=mo.EMPTY_NODE.updateChild(this.indexPath_,n);return new qr(t,i)}maxPost(){const e=mo.EMPTY_NODE.updateChild(this.indexPath_,go);return new qr("[MAX_NAME]",e)}toString(){return Rr(this.indexPath_,0).join("/")}constructor(e){super(),this.indexPath_=e,A(!Dr(e)&&".priority"!==Ir(e),"Can't create PathIndex with empty path or .priority key")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bo=new class extends Wr{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?Gs(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return qr.MIN}maxPost(){return qr.MAX}makePost(e,t){const n=yo(e);return new qr(t,n)}toString(){return".value"}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wo(e){return{type:"value",snapshotNode:e}}function _o(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function ko(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function xo(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class To{hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return A(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return A(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:"[MIN_NAME]"}hasEnd(){return this.endSet_}getIndexEndValue(){return A(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return A(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:"[MAX_NAME]"}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return A(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===oo}copy(){const e=new To;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=oo}}function Co(e){const t={};if(e.isDefault())return t;let n;if(e.index_===oo?n="$priority":e.index_===bo?n="$value":e.index_===Kr?n="$key":(A(e.index_ instanceof vo,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=se(n),e.startSet_){const n=e.startAfterSet_?"startAfter":"startAt";t[n]=se(e.indexStartValue_),e.startNameSet_&&(t[n]+=","+se(e.indexStartName_))}if(e.endSet_){const n=e.endBeforeSet_?"endBefore":"endAt";t[n]=se(e.indexEndValue_),e.endNameSet_&&(t[n]+=","+se(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function Eo(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==oo&&(t.i=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io extends kr{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(A(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const r=Io.getListenId_(e,n),o={};this.listens_[r]=o;const a=Co(e._queryParams);this.restRequest_(s+".json",a,((e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(s,a,!1,n),ce(this.listens_,r)===o){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}}))}unlisten(e,t){const n=Io.getListenId_(e,t);delete this.listens_[n]}get(e){const t=Co(e._queryParams),n=e._path.toString(),i=new H;return this.restRequest_(n+".json",t,((e,t)=>{let s=t;404===e&&(s=null,e=null),null===e?(this.onDataUpdate_(n,s,!1,null),i.resolve(s)):i.reject(new Error(s))})),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,s])=>{i&&i.accessToken&&(t.auth=i.accessToken),s&&s.token&&(t.ac=s.token);const r=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+fe(t);this.log_("Sending REST request for "+r);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+r+" received. status:",o.status,"response:",o.responseText);let e=null;if(o.status>=200&&o.status<300){try{e=ie(o.responseText)}catch(e){$s("Failed to parse JSON response for "+r+": "+o.responseText)}n(null,e)}else 401!==o.status&&404!==o.status&&$s("Got unsuccessful REST response for "+r+" Status: "+o.status),n(o.status);n=null}},o.open("GET",r,!0),o.send()}))}constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=qs("p:rest:"),this.listens_={}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}constructor(){this.rootNode_=mo.EMPTY_NODE}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function So(){return{value:null,children:new Map}}function Ao(e,t,n){if(Dr(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=Ir(t);e.children.has(i)||e.children.set(i,So());Ao(e.children.get(i),t=Sr(t),n)}}function Ro(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,((e,i)=>{Ro(i,new Cr(t.toString()+"/"+e),n)}))}class Lo{get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Zs(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}constructor(e){this.collection_=e,this.last_=null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;Zs(e,((e,i)=>{i>0&&le(this.statsToReport_,e)&&(t[e]=i,n=!0)})),n&&this.server_.reportStats(t),sr(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Lo(e);const n=1e4+2e4*Math.random();sr(this.reportStats_.bind(this),Math.floor(n))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Do,Mo;function Oo(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(Mo=Do||(Do={}))[Mo.OVERWRITE=0]="OVERWRITE",Mo[Mo.MERGE=1]="MERGE",Mo[Mo.ACK_USER_WRITE=2]="ACK_USER_WRITE",Mo[Mo.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";class Fo{operationForChild(e){if(Dr(this.path)){if(null!=this.affectedTree.value)return A(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Cr(e));return new Fo(Er(),t,this.revert)}}return A(Ir(this.path)===e,"operationForChild called for unrelated child."),new Fo(Sr(this.path),this.affectedTree,this.revert)}constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=Do.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Uo{operationForChild(e){return Dr(this.path)?new Uo(this.source,Er(),this.snap.getImmediateChild(e)):new Uo(this.source,Sr(this.path),this.snap)}constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=Do.OVERWRITE}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{operationForChild(e){if(Dr(this.path)){const t=this.children.subtree(new Cr(e));return t.isEmpty()?null:t.value?new Uo(this.source,Er(),t.value):new Vo(this.source,Er(),t)}return A(Ir(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Vo(this.source,Sr(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=Do.MERGE}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Dr(e))return this.isFullyInitialized()&&!this.filtered_;const t=Ir(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bo(e,t,n,i,s,r){const o=i.filter((e=>e.type===n));o.sort(((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw R("Should only compare child_ events.");const i=new qr(t.childName,t.snapshotNode),s=new qr(n.childName,n.snapshotNode);return e.index_.compare(i,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n))),o.forEach((n=>{const i=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,r);s.forEach((s=>{s.respondsTo(n.type)&&t.push(s.createEvent(i,e.query_))}))}))}function jo(e,t){return{eventCache:e,serverCache:t}}function qo(e,t,n,i){return jo(new zo(t,n,i),e.serverCache)}function Wo(e,t,n,i){return jo(e.eventCache,new zo(t,n,i))}function Ho(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function $o(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ko;class Go{static fromObject(e){let t=new Go(null);return Zs(e,((e,n)=>{t=t.set(new Cr(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:Er(),value:this.value};if(Dr(e))return null;{const n=Ir(e),i=this.children.get(n);if(null!==i){const s=i.findRootMostMatchingPathAndValue(Sr(e),t);if(null!=s){return{path:Pr(new Cr(n),s.path),value:s.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(Dr(e))return this;{const t=Ir(e),n=this.children.get(t);return null!==n?n.subtree(Sr(e)):new Go(null)}}set(e,t){if(Dr(e))return new Go(t,this.children);{const n=Ir(e),i=(this.children.get(n)||new Go(null)).set(Sr(e),t),s=this.children.insert(n,i);return new Go(this.value,s)}}remove(e){if(Dr(e))return this.children.isEmpty()?new Go(null):new Go(null,this.children);{const t=Ir(e),n=this.children.get(t);if(n){const i=n.remove(Sr(e));let s;return s=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&s.isEmpty()?new Go(null):new Go(this.value,s)}return this}}get(e){if(Dr(e))return this.value;{const t=Ir(e),n=this.children.get(t);return n?n.get(Sr(e)):null}}setTree(e,t){if(Dr(e))return t;{const n=Ir(e),i=(this.children.get(n)||new Go(null)).setTree(Sr(e),t);let s;return s=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new Go(this.value,s)}}fold(e){return this.fold_(Er(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((i,s)=>{n[i]=s.fold_(Pr(e,i),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,Er(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(Dr(e))return null;{const i=Ir(e),s=this.children.get(i);return s?s.findOnPath_(Sr(e),Pr(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Er(),t)}foreachOnPath_(e,t,n){if(Dr(e))return this;{this.value&&n(t,this.value);const i=Ir(e),s=this.children.get(i);return s?s.foreachOnPath_(Sr(e),Pr(t,i),n):new Go(null)}}foreach(e){this.foreach_(Er(),e)}foreach_(e,t){this.children.inorderTraversal(((n,i)=>{i.foreach_(Pr(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}constructor(e,t=(()=>(Ko||(Ko=new Qr(Xs)),Ko))()){this.value=e,this.children=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{static empty(){return new Xo(new Go(null))}constructor(e){this.writeTree_=e}}function Qo(e,t,n){if(Dr(t))return new Xo(new Go(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const s=i.path;let r=i.value;const o=Mr(s,t);return r=r.updateChild(o,n),new Xo(e.writeTree_.set(s,r))}{const i=new Go(n),s=e.writeTree_.setTree(t,i);return new Xo(s)}}}function Yo(e,t,n){let i=e;return Zs(n,((e,n)=>{i=Qo(i,Pr(t,e),n)})),i}function Jo(e,t){if(Dr(t))return Xo.empty();{const n=e.writeTree_.setTree(t,new Go(null));return new Xo(n)}}function Zo(e,t){return null!=ea(e,t)}function ea(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(Mr(n.path,t)):null}function ta(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(oo,((e,n)=>{t.push(new qr(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new qr(e,n.value))})),t}function na(e,t){if(Dr(t))return e;{const n=ea(e,t);return new Xo(null!=n?new Go(n):e.writeTree_.subtree(t))}}function ia(e){return e.writeTree_.isEmpty()}function sa(e,t){return ra(Er(),e.writeTree_,t)}function ra(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal(((t,s)=>{".priority"===t?(A(null!==s.value,"Priority writes must always be leaf nodes"),i=s.value):n=ra(Pr(e,t),s,n)})),n.getChild(e).isEmpty()||null===i||(n=n.updateChild(Pr(e,".priority"),i)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oa(e,t){return ba(t,e)}function aa(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));A(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let s=i.visible,r=!1,o=e.allWrites.length-1;for(;s&&o>=0;){const t=e.allWrites[o];t.visible&&(o>=n&&la(t,i.path)?s=!1:Fr(i.path,t.path)&&(r=!0)),o--}if(s){if(r)return function(e){e.visibleWrites=ua(e.allWrites,ca,Er()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(i.snap)e.visibleWrites=Jo(e.visibleWrites,i.path);else{Zs(i.children,(t=>{e.visibleWrites=Jo(e.visibleWrites,Pr(i.path,t))}))}return!0}return!1}function la(e,t){if(e.snap)return Fr(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Fr(Pr(e.path,n),t))return!0;return!1}function ca(e){return e.visible}function ua(e,t,n){let i=Xo.empty();for(let s=0;s<e.length;++s){const r=e[s];if(t(r)){const e=r.path;let t;if(r.snap)Fr(n,e)?(t=Mr(n,e),i=Qo(i,t,r.snap)):Fr(e,n)&&(t=Mr(e,n),i=Qo(i,Er(),r.snap.getChild(t)));else{if(!r.children)throw R("WriteRecord should have .snap or .children");if(Fr(n,e))t=Mr(n,e),i=Yo(i,t,r.children);else if(Fr(e,n))if(t=Mr(e,n),Dr(t))i=Yo(i,Er(),r.children);else{const e=ce(r.children,Ir(t));if(e){const n=e.getChild(Sr(t));i=Qo(i,Er(),n)}}}}}return i}function ha(e,t,n,i,s){if(i||s){const r=na(e.visibleWrites,t);if(!s&&ia(r))return n;if(s||null!=n||Zo(r,Er())){const r=function(e){return(e.visible||s)&&(!i||!~i.indexOf(e.writeId))&&(Fr(e.path,t)||Fr(t,e.path))};return sa(ua(e.allWrites,r,t),n||mo.EMPTY_NODE)}return null}{const i=ea(e.visibleWrites,t);if(null!=i)return i;{const i=na(e.visibleWrites,t);if(ia(i))return n;if(null!=n||Zo(i,Er())){return sa(i,n||mo.EMPTY_NODE)}return null}}}function da(e,t,n,i){return ha(e.writeTree,e.treePath,t,n,i)}function pa(e,t){return function(e,t,n){let i=mo.EMPTY_NODE;const s=ea(e.visibleWrites,t);if(s)return s.isLeafNode()||s.forEachChild(oo,((e,t)=>{i=i.updateImmediateChild(e,t)})),i;if(n){const s=na(e.visibleWrites,t);return n.forEachChild(oo,((e,t)=>{const n=sa(na(s,new Cr(e)),t);i=i.updateImmediateChild(e,n)})),ta(s).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}return ta(na(e.visibleWrites,t)).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}(e.writeTree,e.treePath,t)}function fa(e,t,n,i){return function(e,t,n,i,s){A(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=Pr(t,n);if(Zo(e.visibleWrites,r))return null;{const t=na(e.visibleWrites,r);return ia(t)?s.getChild(n):sa(t,s.getChild(n))}}(e.writeTree,e.treePath,t,n,i)}function ma(e,t){return function(e,t){return ea(e.visibleWrites,t)}(e.writeTree,Pr(e.treePath,t))}function ga(e,t,n,i,s,r){return function(e,t,n,i,s,r,o){let a;const l=na(e.visibleWrites,t),c=ea(l,Er());if(null!=c)a=c;else{if(null==n)return[];a=sa(l,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let l=n.getNext();for(;l&&e.length<s;)0!==t(l,i)&&e.push(l),l=n.getNext();return e}}(e.writeTree,e.treePath,t,n,i,s,r)}function ya(e,t,n){return function(e,t,n,i){const s=Pr(t,n),r=ea(e.visibleWrites,s);if(null!=r)return r;if(i.isCompleteForChild(n))return sa(na(e.visibleWrites,s),i.getNode().getImmediateChild(n));return null}(e.writeTree,e.treePath,t,n)}function va(e,t){return ba(Pr(e.treePath,t),e.writeTree)}function ba(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{trackChildChange(e){const t=e.type,n=e.childName;A("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),A(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const s=i.type;if("child_added"===t&&"child_removed"===s)this.changeMap.set(n,xo(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===s)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===s)this.changeMap.set(n,ko(n,i.oldSnap));else if("child_changed"===t&&"child_added"===s)this.changeMap.set(n,_o(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==s)throw R("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,xo(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}constructor(){this.changeMap=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _a=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class ka{getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new zo(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ya(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:$o(this.viewCache_),s=ga(this.writes_,i,t,1,n,e);return 0===s.length?null:s[0]}constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xa(e,t,n,i,s){const r=new wa;let o,a;if(n.type===Do.OVERWRITE){const l=n;l.source.fromUser?o=Ea(e,t,l.path,l.snap,i,s,r):(A(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered()&&!Dr(l.path),o=Ca(e,t,l.path,l.snap,i,s,a,r))}else if(n.type===Do.MERGE){const l=n;l.source.fromUser?o=function(e,t,n,i,s,r,o){let a=t;return i.foreach(((i,l)=>{const c=Pr(n,i);Ia(t,Ir(c))&&(a=Ea(e,a,c,l,s,r,o))})),i.foreach(((i,l)=>{const c=Pr(n,i);Ia(t,Ir(c))||(a=Ea(e,a,c,l,s,r,o))})),a}(e,t,l.path,l.children,i,s,r):(A(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered(),o=Sa(e,t,l.path,l.children,i,s,a,r))}else if(n.type===Do.ACK_USER_WRITE){const a=n;o=a.revert?function(e,t,n,i,s,r){let o;if(null!=ma(i,n))return t;{const a=new ka(i,t,s),l=t.eventCache.getNode();let c;if(Dr(n)||".priority"===Ir(n)){let n;if(t.serverCache.isFullyInitialized())n=da(i,$o(t));else{const e=t.serverCache.getNode();A(e instanceof mo,"serverChildren would be complete if leaf node"),n=pa(i,e)}c=e.filter.updateFullNode(l,n,r)}else{const s=Ir(n);let u=ya(i,s,t.serverCache);null==u&&t.serverCache.isCompleteForChild(s)&&(u=l.getImmediateChild(s)),c=null!=u?e.filter.updateChild(l,s,u,Sr(n),a,r):t.eventCache.getNode().hasChild(s)?e.filter.updateChild(l,s,mo.EMPTY_NODE,Sr(n),a,r):l,c.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=da(i,$o(t)),o.isLeafNode()&&(c=e.filter.updateFullNode(c,o,r)))}return o=t.serverCache.isFullyInitialized()||null!=ma(i,Er()),qo(t,c,o,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,a.path,i,s,r):function(e,t,n,i,s,r,o){if(null!=ma(s,n))return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=i.value){if(Dr(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Ca(e,t,n,l.getNode().getChild(n),s,r,a,o);if(Dr(n)){let i=new Go(null);return l.getNode().forEachChild(Kr,((e,t)=>{i=i.set(new Cr(e),t)})),Sa(e,t,n,i,s,r,a,o)}return t}{let c=new Go(null);return i.foreach(((e,t)=>{const i=Pr(n,e);l.isCompleteForPath(i)&&(c=c.set(e,l.getNode().getChild(i)))})),Sa(e,t,n,c,s,r,a,o)}}(e,t,a.path,a.affectedTree,i,s,r)}else{if(n.type!==Do.LISTEN_COMPLETE)throw R("Unknown operation type: "+n.type);o=function(e,t,n,i,s){const r=t.serverCache,o=Wo(t,r.getNode(),r.isFullyInitialized()||Dr(n),r.isFiltered());return Ta(e,o,n,i,_a,s)}(e,t,n.path,i,r)}const l=r.getChanges();return function(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Ho(e);(n.length>0||!e.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(wo(Ho(t)))}}(t,o,l),{viewCache:o,changes:l}}function Ta(e,t,n,i,s,r){const o=t.eventCache;if(null!=ma(i,n))return t;{let a,l;if(Dr(n))if(A(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=$o(t),s=pa(i,n instanceof mo?n:mo.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),s,r)}else{const n=da(i,$o(t));a=e.filter.updateFullNode(t.eventCache.getNode(),n,r)}else{const c=Ir(n);if(".priority"===c){A(1===Nr(n),"Can't have a priority with additional path components");const s=o.getNode();l=t.serverCache.getNode();const r=fa(i,n,s,l);a=null!=r?e.filter.updatePriority(s,r):o.getNode()}else{const u=Sr(n);let h;if(o.isCompleteForChild(c)){l=t.serverCache.getNode();const e=fa(i,n,o.getNode(),l);h=null!=e?o.getNode().getImmediateChild(c).updateChild(u,e):o.getNode().getImmediateChild(c)}else h=ya(i,c,t.serverCache);a=null!=h?e.filter.updateChild(o.getNode(),c,h,u,s,r):o.getNode()}}return qo(t,a,o.isFullyInitialized()||Dr(n),e.filter.filtersNodes())}}function Ca(e,t,n,i,s,r,o,a){const l=t.serverCache;let c;const u=o?e.filter:e.filter.getIndexedFilter();if(Dr(n))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const e=l.getNode().updateChild(n,i);c=u.updateFullNode(l.getNode(),e,null)}else{const e=Ir(n);if(!l.isCompleteForPath(n)&&Nr(n)>1)return t;const s=Sr(n),r=l.getNode().getImmediateChild(e).updateChild(s,i);c=".priority"===e?u.updatePriority(l.getNode(),r):u.updateChild(l.getNode(),e,r,s,_a,null)}const h=Wo(t,c,l.isFullyInitialized()||Dr(n),u.filtersNodes());return Ta(e,h,n,s,new ka(s,h,r),a)}function Ea(e,t,n,i,s,r,o){const a=t.eventCache;let l,c;const u=new ka(s,t,r);if(Dr(n))c=e.filter.updateFullNode(t.eventCache.getNode(),i,o),l=qo(t,c,!0,e.filter.filtersNodes());else{const s=Ir(n);if(".priority"===s)c=e.filter.updatePriority(t.eventCache.getNode(),i),l=qo(t,c,a.isFullyInitialized(),a.isFiltered());else{const r=Sr(n),c=a.getNode().getImmediateChild(s);let h;if(Dr(r))h=i;else{const e=u.getCompleteChild(s);h=null!=e?".priority"===Ar(r)&&e.getChild(Lr(r)).isEmpty()?e:e.updateChild(r,i):mo.EMPTY_NODE}if(c.equals(h))l=t;else{l=qo(t,e.filter.updateChild(a.getNode(),s,h,r,u,o),a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function Ia(e,t){return e.eventCache.isCompleteForChild(t)}function Na(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function Sa(e,t,n,i,s,r,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l,c=t;l=Dr(n)?i:new Go(null).setTree(n,i);const u=t.serverCache.getNode();return l.children.inorderTraversal(((n,i)=>{if(u.hasChild(n)){const l=Na(0,t.serverCache.getNode().getImmediateChild(n),i);c=Ca(e,c,new Cr(n),l,s,r,o,a)}})),l.children.inorderTraversal(((n,i)=>{const l=!t.serverCache.isCompleteForChild(n)&&null===i.value;if(!u.hasChild(n)&&!l){const l=Na(0,t.serverCache.getNode().getImmediateChild(n),i);c=Ca(e,c,new Cr(n),l,s,r,o,a)}})),c}function Aa(e,t){const n=$o(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!Dr(t)&&!n.getImmediateChild(Ir(t)).isEmpty())?n.getChild(t):null}function Ra(e,t,n,i){t.type===Do.MERGE&&null!==t.source.queryId&&(A($o(e.viewCache_),"We should always have a full cache before handling merges"),A(Ho(e.viewCache_),"Missing event cache, even though we have a server cache"));const s=e.viewCache_,r=xa(e.processor_,s,t,n,i);var o,a;return o=e.processor_,a=r.viewCache,A(a.eventCache.getNode().isIndexed(o.filter.getIndex()),"Event snap not indexed"),A(a.serverCache.getNode().isIndexed(o.filter.getIndex()),"Server snap not indexed"),A(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=r.viewCache,La(e,r.changes,r.viewCache.eventCache.getNode(),null)}function La(e,t,n,i){const s=i?[i]:e.eventRegistrations_;return function(e,t,n,i){const s=[],r=[];return t.forEach((t=>{var n;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&r.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),Bo(e,s,"child_removed",t,i,n),Bo(e,s,"child_added",t,i,n),Bo(e,s,"child_moved",r,i,n),Bo(e,s,"child_changed",t,i,n),Bo(e,s,"value",t,i,n),s}(e.eventGenerator_,t,n,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pa,Da;function Ma(e,t,n,i){const s=t.source.queryId;if(null!==s){const r=e.views.get(s);return A(null!=r,"SyncTree gave us an op for an invalid query."),Ra(r,t,n,i)}{let s=[];for(const r of e.views.values())s=s.concat(Ra(r,t,n,i));return s}}function Oa(e,t){let n=null;for(const i of e.views.values())n=n||Aa(i,t);return n}class Fa{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Go(null),this.pendingWriteTree_={visibleWrites:Xo.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Ua(e,t,n,i,s){return function(e,t,n,i,s){A(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===s&&(s=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:s}),s&&(e.visibleWrites=Qo(e.visibleWrites,t,n)),e.lastWriteId=i}(e.pendingWriteTree_,t,n,i,s),s?qa(e,new Uo({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function Va(e,t,n=!1){const i=function(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}(e.pendingWriteTree_,t);if(aa(e.pendingWriteTree_,t)){let t=new Go(null);return null!=i.snap?t=t.set(Er(),!0):Zs(i.children,(e=>{t=t.set(new Cr(e),!0)})),qa(e,new Fo(i.path,t,n))}return[]}function za(e,t,n){return qa(e,new Uo({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function Ba(e,t,n,i){const s=$a(e,i);if(null!=s){const i=Ka(s),r=i.path,o=i.queryId,a=Mr(r,t);return Ga(e,r,new Uo(Oo(o),a,n))}return[]}function ja(e,t,n){const i=e.pendingWriteTree_,s=e.syncPointTree_.findOnPath(t,((e,n)=>{const i=Oa(n,Mr(e,t));if(i)return i}));return ha(i,t,s,n,!0)}function qa(e,t){return Wa(t,e.syncPointTree_,null,oa(e.pendingWriteTree_,Er()))}function Wa(e,t,n,i){if(Dr(e.path))return Ha(e,t,n,i);{const s=t.get(Er());null==n&&null!=s&&(n=Oa(s,Er()));let r=[];const o=Ir(e.path),a=e.operationForChild(o),l=t.children.get(o);if(l&&a){const e=n?n.getImmediateChild(o):null,t=va(i,o);r=r.concat(Wa(a,l,e,t))}return s&&(r=r.concat(Ma(s,e,i,n))),r}}function Ha(e,t,n,i){const s=t.get(Er());null==n&&null!=s&&(n=Oa(s,Er()));let r=[];return t.children.inorderTraversal(((t,s)=>{const o=n?n.getImmediateChild(t):null,a=va(i,t),l=e.operationForChild(t);l&&(r=r.concat(Ha(l,s,o,a)))})),s&&(r=r.concat(Ma(s,e,i,n))),r}function $a(e,t){return e.tagToQueryMap.get(t)}function Ka(e){const t=e.indexOf("$");return A(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new Cr(e.substr(0,t))}}function Ga(e,t,n){const i=e.syncPointTree_.get(t);A(i,"Missing sync point for query tag that we're tracking");return Ma(i,n,oa(e.pendingWriteTree_,t),null)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xa{getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Xa(t)}node(){return this.node_}constructor(e){this.node_=e}}class Qa{getImmediateChild(e){const t=Pr(this.path_,e);return new Qa(this.syncTree_,t)}node(){return ja(this.syncTree_,this.path_)}constructor(e,t){this.syncTree_=e,this.path_=t}}const Ya=function(e,t,n){return e&&"object"==typeof e?(A(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?Ja(e[".sv"],t,n):"object"==typeof e[".sv"]?Za(e[".sv"],t):void A(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},Ja=function(e,t,n){if("timestamp"===e)return n.timestamp;A(!1,"Unexpected server value: "+e)},Za=function(e,t,n){e.hasOwnProperty("increment")||A(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e.increment;"number"!=typeof i&&A(!1,"Unexpected increment value: "+i);const s=t.node();if(A(null!=s,"Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const r=s.getValue();return"number"!=typeof r?i:r+i},el=function(e,t,n,i){return nl(t,new Qa(n,e),i)},tl=function(e,t,n){return nl(e,new Xa(t),n)};function nl(e,t,n){const i=e.getPriority().val(),s=Ya(i,t.getImmediateChild(".priority"),n);let r;if(e.isLeafNode()){const i=e,r=Ya(i.getValue(),t,n);return r!==i.getValue()||s!==i.getPriority().val()?new ro(r,yo(s)):e}{const i=e;return r=i,s!==i.getPriority().val()&&(r=r.updatePriority(new ro(s))),i.forEachChild(oo,((e,i)=>{const s=nl(i,t.getImmediateChild(e),n);s!==i&&(r=r.updateImmediateChild(e,s))})),r}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function sl(e,t){let n=t instanceof Cr?t:new Cr(t),i=e,s=Ir(n);for(;null!==s;){const e=ce(i.node.children,s)||{children:{},childCount:0};i=new il(s,i,e),n=Sr(n),s=Ir(n)}return i}function rl(e){return e.node.value}function ol(e,t){e.node.value=t,hl(e)}function al(e){return e.node.childCount>0}function ll(e,t){Zs(e.node.children,((n,i)=>{t(new il(n,e,i))}))}function cl(e,t,n,i){n&&!i&&t(e),ll(e,(e=>{cl(e,t,!0,i)})),n&&i&&t(e)}function ul(e){return new Cr(null===e.parent?e.name:ul(e.parent)+"/"+e.name)}function hl(e){null!==e.parent&&function(e,t,n){const i=function(e){return void 0===rl(e)&&!al(e)}(n),s=le(e.node.children,t);i&&s?(delete e.node.children[t],e.node.childCount--,hl(e)):i||s||(e.node.children[t]=n.node,e.node.childCount++,hl(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.parent,e.name,e)}const dl=/[\[\].#$\/\u0000-\u001F\u007F]/,pl=/[\[\].#$\u0000-\u001F\u007F]/,fl=function(e){return"string"==typeof e&&0!==e.length&&!dl.test(e)},ml=function(e){return"string"==typeof e&&0!==e.length&&!pl.test(e)},gl=function(e,t,n){const i=n instanceof Cr?new Ur(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+zr(i));if("function"==typeof t)throw new Error(e+"contains a function "+zr(i)+" with contents = "+t.toString());if(Ks(t))throw new Error(e+"contains "+t.toString()+" "+zr(i));if("string"==typeof t&&t.length>10485760/3&&xe(t)>10485760)throw new Error(e+"contains a string greater than 10485760 utf8 bytes "+zr(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,s=!1;if(Zs(t,((t,r)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(s=!0,!fl(t)))throw new Error(e+" contains an invalid key ("+t+") "+zr(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var o,a;a=t,(o=i).parts_.length>0&&(o.byteLength_+=1),o.parts_.push(a),o.byteLength_+=xe(a),Vr(o),gl(e,r,i),function(e){const t=e.parts_.pop();e.byteLength_-=xe(t),e.parts_.length>0&&(e.byteLength_-=1)}(i)})),n&&s)throw new Error(e+' contains ".value" child '+zr(i)+" in addition to actual children.")}},yl=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!fl(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),ml(e)}(n))throw new Error(_e(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vl{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function bl(e,t){let n=null;for(let i=0;i<t.length;i++){const s=t[i],r=s.getPath();null===n||Or(r,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:r}),n.events.push(s)}n&&e.eventLists_.push(n)}function wl(e,t,n){bl(e,n),_l(e,(e=>Fr(e,t)||Fr(t,e)))}function _l(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const s=e.eventLists_[i];if(s){t(s.path)?(kl(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function kl(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();Vs&&js("event: "+n.toString()),ir(i)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new vl,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=So(),this.transactionQueueTree_=new il,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}}function Tl(e,t,n){if(e.stats_=fr(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new Io(e.repoInfo_,((t,n,i,s)=>{Il(e,t,n,i,s)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>Nl(e,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{se(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new jr(e.repoInfo_,t,((t,n,i,s)=>{Il(e,t,n,i,s)}),(t=>{Nl(e,t)}),(t=>{!function(e,t){Zs(t,((t,n)=>{Sl(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(e,t){const n=e.toString();return pr[n]||(pr[n]=t()),pr[n]}(e.repoInfo_,(()=>new Po(e.stats_,e.server_))),e.infoData_=new No,e.infoSyncTree_=new Fa({startListening:(t,n,i,s)=>{let r=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(r=za(e.infoSyncTree_,t._path,o),setTimeout((()=>{s("ok")}),0)),r},stopListening:()=>{}}),Sl(e,"connected",!1),e.serverSyncTree_=new Fa({startListening:(t,n,i,s)=>(e.server_.listen(t,i,n,((n,i)=>{const r=s(n,i);wl(e.eventQueue_,t._path,r)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function Cl(e){const t=e.infoData_.getNode(new Cr(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function El(e){return(t=(t={timestamp:Cl(e)})||{}).timestamp=t.timestamp||(new Date).getTime(),t;var t}function Il(e,t,n,i,s){e.dataUpdateCount++;const r=new Cr(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(s)if(i){const t=he(n,(e=>yo(e)));o=function(e,t,n,i){const s=$a(e,i);if(s){const i=Ka(s),r=i.path,o=i.queryId,a=Mr(r,t),l=Go.fromObject(n);return Ga(e,r,new Vo(Oo(o),a,l))}return[]}(e.serverSyncTree_,r,t,s)}else{const t=yo(n);o=Ba(e.serverSyncTree_,r,t,s)}else if(i){const t=he(n,(e=>yo(e)));o=function(e,t,n){const i=Go.fromObject(n);return qa(e,new Vo({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,i))}(e.serverSyncTree_,r,t)}else{const t=yo(n);o=za(e.serverSyncTree_,r,t)}let a=r;o.length>0&&(a=Ml(e,r)),wl(e.eventQueue_,a,o)}function Nl(e,t){Sl(e,"connected",t),!1===t&&function(e){Ll(e,"onDisconnectEvents");const t=El(e),n=So();Ro(e.onDisconnect_,Er(),((i,s)=>{const r=el(i,s,e.serverSyncTree_,t);Ao(n,i,r)}));let i=[];Ro(n,Er(),((t,n)=>{i=i.concat(za(e.serverSyncTree_,t,n));const s=zl(e,t);Ml(e,s)})),e.onDisconnect_=So(),wl(e.eventQueue_,Er(),i)}(e)}function Sl(e,t,n){const i=new Cr("/.info/"+t),s=yo(n);e.infoData_.updateSnapshot(i,s);const r=za(e.infoSyncTree_,i,s);wl(e.eventQueue_,i,r)}function Al(e){return e.nextWriteId_++}function Rl(e){e.persistentConnection_&&e.persistentConnection_.interrupt("repo_interrupt")}function Ll(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),js(n,...t)}function Pl(e,t,n){return ja(e.serverSyncTree_,t,n)||mo.EMPTY_NODE}function Dl(e,t=e.transactionQueueTree_){if(t||Vl(e,t),rl(t)){const n=Fl(e,t);A(n.length>0,"Sending zero length transaction queue");n.every((e=>0===e.status))&&function(e,t,n){const i=n.map((e=>e.currentWriteId)),s=Pl(e,t,i);let r=s;const o=s.hash();for(let e=0;e<n.length;e++){const i=n[e];A(0===i.status,"tryToSendTransactionQueue_: items in queue should all be run."),i.status=1,i.retryCount++;const s=Mr(t,i.path);r=r.updateChild(s,i.currentOutputSnapshotRaw)}const a=r.val(!0),l=t;e.server_.put(l.toString(),a,(i=>{Ll(e,"transaction put response",{path:l.toString(),status:i});let s=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,s=s.concat(Va(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();Vl(e,sl(e.transactionQueueTree_,t)),Dl(e,e.transactionQueueTree_),wl(e.eventQueue_,t,s);for(let e=0;e<i.length;e++)ir(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{$s("transaction at "+l.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}Ml(e,t)}}),o)}(e,ul(t),n)}else al(t)&&ll(t,(t=>{Dl(e,t)}))}function Ml(e,t){const n=Ol(e,t),i=ul(n);return function(e,t,n){if(0===t.length)return;const i=[];let s=[];const r=t.filter((e=>0===e.status)).map((e=>e.currentWriteId));for(let a=0;a<t.length;a++){const l=t[a],c=Mr(n,l.path);let u,h=!1;if(A(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===l.status)h=!0,u=l.abortReason,s=s.concat(Va(e.serverSyncTree_,l.currentWriteId,!0));else if(0===l.status)if(l.retryCount>=25)h=!0,u="maxretry",s=s.concat(Va(e.serverSyncTree_,l.currentWriteId,!0));else{const n=Pl(e,l.path,r);l.currentInputSnapshot=n;const i=t[a].update(n.val());if(void 0!==i){gl("transaction failed: Data returned ",i,l.path);let t=yo(i);"object"==typeof i&&null!=i&&le(i,".priority")||(t=t.updatePriority(n.getPriority()));const o=l.currentWriteId,a=El(e),c=tl(t,n,a);l.currentOutputSnapshotRaw=t,l.currentOutputSnapshotResolved=c,l.currentWriteId=Al(e),r.splice(r.indexOf(o),1),s=s.concat(Ua(e.serverSyncTree_,l.path,c,l.currentWriteId,l.applyLocally)),s=s.concat(Va(e.serverSyncTree_,o,!0))}else h=!0,u="nodata",s=s.concat(Va(e.serverSyncTree_,l.currentWriteId,!0))}wl(e.eventQueue_,n,s),s=[],h&&(t[a].status=2,o=t[a].unwatcher,setTimeout(o,Math.floor(0)),t[a].onComplete&&("nodata"===u?i.push((()=>t[a].onComplete(null,!1,t[a].currentInputSnapshot))):i.push((()=>t[a].onComplete(new Error(u),!1,null)))))}var o;Vl(e,e.transactionQueueTree_);for(let e=0;e<i.length;e++)ir(i[e]);Dl(e,e.transactionQueueTree_)}(e,Fl(e,n),i),i}function Ol(e,t){let n,i=e.transactionQueueTree_;for(n=Ir(t);null!==n&&void 0===rl(i);)i=sl(i,n),n=Ir(t=Sr(t));return i}function Fl(e,t){const n=[];return Ul(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function Ul(e,t,n){const i=rl(t);if(i)for(let e=0;e<i.length;e++)n.push(i[e]);ll(t,(t=>{Ul(e,t,n)}))}function Vl(e,t){const n=rl(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,ol(t,n.length>0?n:void 0)}ll(t,(t=>{Vl(e,t)}))}function zl(e,t){const n=ul(Ol(e,t)),i=sl(e.transactionQueueTree_,t);return function(e,t,n){let i=n?e:e.parent;for(;null!==i;){if(t(i))return!0;i=i.parent}}(i,(t=>{Bl(e,t)})),Bl(e,i),cl(i,(t=>{Bl(e,t)})),n}function Bl(e,t){const n=rl(t);if(n){const i=[];let s=[],r=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(A(r===t-1,"All SENT items should be at beginning of queue."),r=t,n[t].status=3,n[t].abortReason="set"):(A(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),s=s.concat(Va(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===r?ol(t,void 0):n.length=r+1,wl(e.eventQueue_,ul(t),s);for(let e=0;e<i.length;e++)ir(i[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jl=function(e,t){const n=ql(e),i=n.namespace;"firebase.com"===n.domain&&Hs(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||Hs("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&$s("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const s="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new cr(n.host,n.secure,i,s,t,"",i!==n.subdomain),path:new Cr(n.pathString)}},ql=function(e){let t="",n="",i="",s="",r="",o=!0,a="https",l=443;if("string"==typeof e){let c=e.indexOf("//");c>=0&&(a=e.substring(0,c-1),e=e.substring(c+2));let u=e.indexOf("/");-1===u&&(u=e.length);let h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(u,h)),u<h&&(s=function(e){let t="";const n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let i=n[e];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(e){}t+="/"+i}return t}(e.substring(u,h)));const d=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):$s(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,h)));c=t.indexOf(":"),c>=0?(o="https"===a||"wss"===a,l=parseInt(t.substring(c+1),10)):c=t.length;const p=t.slice(0,c);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),r=i}"ns"in d&&(r=d.ns)}return{host:t,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};!function(){let e=0;const t=[]}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wl{get key(){return Dr(this._path)?null:Ar(this._path)}get ref(){return new Hl(this._repo,this._path)}get _queryIdentifier(){const e=Eo(this._queryParams),t=Ys(e);return"{}"===t?"default":t}get _queryObject(){return Eo(this._queryParams)}isEqual(e){if(!((e=Te(e))instanceof Wl))return!1;const t=this._repo===e._repo,n=Or(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}}class Hl extends Wl{get parent(){const e=Lr(this._path);return null===e?null:new Hl(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}constructor(e,t){super(e,t,new To,!1)}}!function(e){A(!Pa,"__referenceConstructor has already been defined"),Pa=e}(Hl),function(e){A(!Da,"__referenceConstructor has already been defined"),Da=e}(Hl);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const $l={};let Kl=!1;function Gl(e,t,n,i,s){let r=i||e.options.databaseURL;void 0===r&&(e.options.projectId||Hs("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),js("Using default host for project ",e.options.projectId),r=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a,l=jl(r,s),c=l.repoInfo;void 0!==d&&d.env&&(a=d.env.FIREBASE_DATABASE_EMULATOR_HOST),a?(o=!0,r=`http://${a}?ns=${c.namespace}`,l=jl(r,s),c=l.repoInfo):o=!l.repoInfo.secure;const u=s&&o?new ar(ar.OWNER):new or(e.name,e.options,t);yl("Invalid Firebase Database URL",l),Dr(l.path)||Hs("Database URL must point to the root of a Firebase Database (not including a child path).");const h=function(e,t,n,i){let s=$l[t.name];s||(s={},$l[t.name]=s);let r=s[e.toURLString()];r&&Hs("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return r=new xl(e,Kl,n,i),s[e.toURLString()]=r,r}(c,e,u,new rr(e.name,n));return new Xl(h,e)}class Xl{get _repo(){return this._instanceStarted||(Tl(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Hl(this._repo,Er())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(e,t){const n=$l[t];n&&n[e.key]===e||Hs(`Database ${t}(${e.repoInfo_}) has already been deleted.`),Rl(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&Hs("Cannot call "+e+" on a deleted database.")}constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}}jr.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},jr.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};!
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){Ss="9.20.0",rt(new Ce("database",((e,{instanceIdentifier:t})=>Gl(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),ht("@firebase/database","0.14.4",e),ht("@firebase/database","0.14.4","esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ql extends ee{get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return tc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}constructor(e,t,n=0){super(tc(e),`Firebase Storage: ${t} (${tc(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ql.prototype)}}var Yl,Jl,Zl,ec;function tc(e){return"storage/"+e}function nc(){return new Ql(Yl.UNKNOWN,"An unknown error occurred, please check the error payload for server response.")}function ic(){return new Ql(Yl.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function sc(){return new Ql(Yl.CANCELED,"User canceled the upload/download.")}function rc(e){return new Ql(Yl.INVALID_ARGUMENT,e)}function oc(){return new Ql(Yl.APP_DELETED,"The Firebase app was deleted.")}(Jl=Yl||(Yl={})).UNKNOWN="unknown",Jl.OBJECT_NOT_FOUND="object-not-found",Jl.BUCKET_NOT_FOUND="bucket-not-found",Jl.PROJECT_NOT_FOUND="project-not-found",Jl.QUOTA_EXCEEDED="quota-exceeded",Jl.UNAUTHENTICATED="unauthenticated",Jl.UNAUTHORIZED="unauthorized",Jl.UNAUTHORIZED_APP="unauthorized-app",Jl.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",Jl.INVALID_CHECKSUM="invalid-checksum",Jl.CANCELED="canceled",Jl.INVALID_EVENT_NAME="invalid-event-name",Jl.INVALID_URL="invalid-url",Jl.INVALID_DEFAULT_BUCKET="invalid-default-bucket",Jl.NO_DEFAULT_BUCKET="no-default-bucket",Jl.CANNOT_SLICE_BLOB="cannot-slice-blob",Jl.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",Jl.NO_DOWNLOAD_URL="no-download-url",Jl.INVALID_ARGUMENT="invalid-argument",Jl.INVALID_ARGUMENT_COUNT="invalid-argument-count",Jl.APP_DELETED="app-deleted",Jl.INVALID_ROOT_OPERATION="invalid-root-operation",Jl.INVALID_FORMAT="invalid-format",Jl.INTERNAL_ERROR="internal-error",Jl.UNSUPPORTED_ENVIRONMENT="unsupported-environment";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ac{get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=ac.makeFromUrl(e,t)}catch(t){return new ac(e,"")}if(""===n.path)return n;throw i=e,new Ql(Yl.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+i+"'.");var i}static makeFromUrl(e,t){let n=null;const i="([A-Za-z0-9.\\-_]+)";const s=new RegExp("^gs://"+i+"(/(.*))?$","i");function r(e){e.path_=decodeURIComponent(e.path)}const o=t.replace(/[.]/g,"\\."),a=[{regex:s,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:new RegExp(`^https?://${o}/v[A-Za-z0-9_]+/b/${i}/o(/([^?#]*).*)?$`,"i"),indices:{bucket:1,path:3},postModify:r},{regex:new RegExp(`^https?://${"firebasestorage.googleapis.com"===t?"(?:storage.googleapis.com|storage.cloud.google.com)":t}/${i}/([^?#]*)`,"i"),indices:{bucket:1,path:2},postModify:r}];for(let t=0;t<a.length;t++){const i=a[t],s=i.regex.exec(e);if(s){const e=s[i.indices.bucket];let t=s[i.indices.path];t||(t=""),n=new ac(e,t),i.postModify(n);break}}if(null==n)throw function(e){return new Ql(Yl.INVALID_URL,"Invalid URL '"+e+"'.")}(e);return n}constructor(e,t){this.bucket=e,this.path_=t}}class lc{getPromise(){return this.promise_}cancel(e=!1){}constructor(e){this.promise_=Promise.reject(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cc(e,t,n,i){if(i<t)throw rc(`Invalid value for '${e}'. Expected ${t} or greater.`);if(i>n)throw rc(`Invalid value for '${e}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uc(e){const t=encodeURIComponent;let n="?";for(const i in e)if(e.hasOwnProperty(i)){n=n+(t(i)+"="+t(e[i]))+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function hc(e,t){const n=e>=500&&e<600,i=-1!==[408,429].indexOf(e),s=-1!==t.indexOf(e);return n||i||s}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(ec=Zl||(Zl={}))[ec.NO_ERROR=0]="NO_ERROR",ec[ec.NETWORK_ERROR=1]="NETWORK_ERROR",ec[ec.ABORT=2]="ABORT";class dc{start_(){const e=(e,t)=>{const n=this.resolve_,i=this.reject_,s=t.connection;if(t.wasSuccessCode)try{const e=this.callback_(s,s.getResponse());void 0!==e?n(e):n()}catch(e){i(e)}else if(null!==s){const e=nc();e.serverResponse=s.getErrorText(),this.errorCallback_?i(this.errorCallback_(s,e)):i(e)}else if(t.canceled){i(this.appDelete_?oc():sc())}else{i(ic())}};this.canceled_?e(0,new pc(!1,null,!0)):this.backoffId_=function(e,t,n){let i=1,s=null,r=null,o=!1,a=0;function l(){return 2===a}let c=!1;function u(...e){c||(c=!0,t.apply(null,e))}function h(t){s=setTimeout((()=>{s=null,e(p,l())}),t)}function d(){r&&clearTimeout(r)}function p(e,...t){if(c)return void d();if(e)return d(),void u.call(null,e,...t);if(l()||o)return d(),void u.call(null,e,...t);let n;i<64&&(i*=2),1===a?(a=2,n=0):n=1e3*(i+Math.random()),h(n)}let f=!1;function m(e){f||(f=!0,d(),c||(null!==s?(e||(a=2),clearTimeout(s),h(0)):e||(a=1)))}return h(0),r=setTimeout((()=>{o=!0,m(!0)}),n),m}(((e,t)=>{if(t)return void e(!1,new pc(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const i=e=>{const t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(i),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(i),this.pendingConnection_=null;const t=n.getErrorCode()===Zl.NO_ERROR,s=n.getStatus();if(!t||hc(s,this.additionalRetryCodes_)&&this.retry){const t=n.getErrorCode()===Zl.ABORT;return void e(!1,new pc(!1,null,t))}const r=-1!==this.successCodes_.indexOf(s);e(!0,new pc(r,n))}))}),e,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}constructor(e,t,n,i,s,r,o,a,l,c,u,h=!0){this.url_=e,this.method_=t,this.headers_=n,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=r,this.callback_=o,this.errorCallback_=a,this.timeout_=l,this.progressCallback_=c,this.connectionFactory_=u,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()}))}}class pc{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function fc(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mc{toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new mc(e,t)}get root(){const e=new ac(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return fc(this._location.path)}get storage(){return this._service}get parent(){const e=
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){if(0===e.length)return null;const t=e.lastIndexOf("/");return-1===t?"":e.slice(0,t)}(this._location.path);if(null===e)return null;const t=new ac(this._location.bucket,e);return new mc(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw t=e,new Ql(Yl.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').");var t}constructor(e,t){this._service=e,this._location=t instanceof ac?t:ac.makeFromUrl(t,e.host)}}function gc(e,t){const n=null==t?void 0:t.storageBucket;return null==n?null:ac.makeFromBucketSpec(n,e)}class yc{get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=ac.makeFromBucketSpec(this._url,e):this._bucket=gc(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){cc("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){cc("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});if(e){return(await e.getToken()).token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((e=>e.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new mc(this,e)}_makeRequest(e,t,n,i,s=!0){if(this._deleted)return new lc(oc());{const r=function(e,t,n,i,s,r,o=!0){const a=uc(e.urlParams),l=e.url+a,c=Object.assign({},e.headers);return function(e,t){t&&(e["X-Firebase-GMPID"]=t)}(c,t),function(e,t){null!==t&&t.length>0&&(e.Authorization="Firebase "+t)}(c,n),function(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!=t?t:"AppManager")}(c,r),function(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}(c,i),new dc(l,e.method,c,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,s,o)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,this._appId,n,i,t,this._firebaseVersion,s);return this._requests.add(r),r.getPromise().then((()=>this._requests.delete(r)),(()=>this._requests.delete(r))),r}}async makeRequestWithTokens(e,t){const[n,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,i).getPromise()}constructor(e,t,n,i,s){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host="firebasestorage.googleapis.com",this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=i?ac.makeFromBucketSpec(i,this._host):gc(this._host,this.app.options)}}function vc(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return new yc(n,i,s,t,"9.20.0")}rt(new Ce("storage",vc,"PUBLIC").setMultipleInstances(!0)),ht("@firebase/storage","0.11.2",""),ht("@firebase/storage","0.11.2","esm2017");var bc={};!function(e,t){"function"==typeof define&&define.amd?define([],(function(){return t(e)})):"object"==typeof bc?bc=t(e):e.Notiflix=t(e)}(void 0!==n?n:"undefined"!=typeof window?window:bc,(function(e){if(void 0===e&&void 0===e.document)return!1;var t,n="Standard",i="Hourglass",s="Circle",r="Arrows",o="Dots",a="Pulse",l="Custom",c="Notiflix",u={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},h=function(e){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+e+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},d=function(t){return t||(t="head"),null!==e.document[t]||(h('\nNotiflix needs to be appended to the "<'+t+'>" element, but you called it before the "<'+t+'>" element has been created.'),!1)},p=function(){var e={},t=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var i=function(n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t&&"[object Object]"===Object.prototype.toString.call(n[i])?e[i]=p(e[i],n[i]):e[i]=n[i])};n<arguments.length;n++)i(arguments[n]);return e},f=function(t){var n=e.document.createElement("div");return n.innerHTML=t,n.textContent||n.innerText||""},m=function(){return'[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}'},g=function(c,m,g,v,b){if(!d("body"))return!1;t||y.Loading.init({});var w=p(!0,t,{});if("object"==typeof m&&!Array.isArray(m)||"object"==typeof g&&!Array.isArray(g)){var _={};"object"==typeof m?_=m:"object"==typeof g&&(_=g),t=p(!0,t,_)}var k,x,T="";if("string"==typeof m&&m.length>0&&(T=m),v){var C="";(T=T.length>t.messageMaxLength?f(T).toString().substring(0,t.messageMaxLength)+"...":f(T).toString()).length>0&&(C='<p id="'+t.messageID+'" class="nx-loading-message" style="color:'+t.messageColor+";font-size:"+t.messageFontSize+';">'+T+"</p>"),t.cssAnimation||(t.cssAnimationDuration=0);var E="";if(c===n)k=t.svgSize,x=t.svgColor,k||(k="60px"),x||(x="#32c682"),E='<svg xmlns="http://www.w3.org/2000/svg" stroke="'+x+'" width="'+k+'" height="'+k+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>';else if(c===i)E=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>'}(t.svgSize,t.svgColor);else if(c===s)E=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" width="'+e+'" height="'+e+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+e+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+e+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+t+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>'}(t.svgSize,t.svgColor);else if(c===r)E=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>'}(t.svgSize,t.svgColor);else if(c===o)E=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>'}(t.svgSize,t.svgColor);else if(c===a)E=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>'}(t.svgSize,t.svgColor);else if(c===l&&null!==t.customSvgCode&&null===t.customSvgUrl)E=t.customSvgCode||"";else if(c===l&&null!==t.customSvgUrl&&null===t.customSvgCode)E='<img class="nx-custom-loading-icon" width="'+t.svgSize+'" height="'+t.svgSize+'" src="'+t.customSvgUrl+'" alt="Notiflix">';else{if(c===l&&(null===t.customSvgUrl||null===t.customSvgCode))return h('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'),!1;E=function(e,t,n){return e||(e="60px"),t||(t="#f8f8f8"),n||(n="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:'+t+';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="'+n+'" stroke="'+n+'" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>'}(t.svgSize,"#f8f8f8","#32c682")}var I=parseInt((t.svgSize||"").replace(/[^0-9]/g,"")),N=e.innerWidth,S=I>=N?N-40+"px":I+"px",A='<div style="width:'+S+"; height:"+S+';" class="'+t.className+"-icon"+(T.length>0?" nx-with-message":"")+'">'+E+"</div>",R=e.document.createElement("div");if(R.id=u.ID,R.className=t.className+(t.cssAnimation?" nx-with-animation":"")+(t.clickToClose?" nx-loading-click-to-close":""),R.style.zIndex=t.zindex,R.style.background=t.backgroundColor,R.style.animationDuration=t.cssAnimationDuration+"ms",R.style.fontFamily='"'+t.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',R.style.display="flex",R.style.flexWrap="wrap",R.style.flexDirection="column",R.style.alignItems="center",R.style.justifyContent="center",t.rtl&&(R.setAttribute("dir","rtl"),R.classList.add("nx-rtl-on")),R.innerHTML=A+C,!e.document.getElementById(R.id))if(e.document.body.appendChild(R),t.clickToClose)e.document.getElementById(R.id).addEventListener("click",(function(){R.classList.add("nx-remove");var e=setTimeout((function(){null!==R.parentNode&&(R.parentNode.removeChild(R),clearTimeout(e))}),t.cssAnimationDuration)}))}else if(e.document.getElementById(u.ID))var L=e.document.getElementById(u.ID),P=setTimeout((function(){L.classList.add("nx-remove");var e=setTimeout((function(){null!==L.parentNode&&(L.parentNode.removeChild(L),clearTimeout(e))}),t.cssAnimationDuration);clearTimeout(P)}),b);t=p(!0,t,w)},y={Loading:{init:function(n){t=p(!0,u,n),function(t,n){if(!d("head"))return!1;if(null!==t()&&!e.document.getElementById(n)){var i=e.document.createElement("style");i.id=n,i.innerHTML=t(),e.document.head.appendChild(i)}}(m,"NotiflixLoadingInternalCSS")},merge:function(e){if(!t)return h("You have to initialize the Loading module before call Merge function."),!1;t=p(!0,t,e)},standard:function(e,t){g(n,e,t,!0,0)},hourglass:function(e,t){g(i,e,t,!0,0)},circle:function(e,t){g(s,e,t,!0,0)},arrows:function(e,t){g(r,e,t,!0,0)},dots:function(e,t){g(o,e,t,!0,0)},pulse:function(e,t){g(a,e,t,!0,0)},custom:function(e,t){g(l,e,t,!0,0)},notiflix:function(e,t){g(c,e,t,!0,0)},remove:function(e){"number"!=typeof e&&(e=0),g(null,null,null,!1,e)},change:function(n){!function(n){"string"!=typeof n&&(n="");var i=e.document.getElementById(u.ID);if(i)if(n.length>0){n=n.length>t.messageMaxLength?f(n).substring(0,t.messageMaxLength)+"...":f(n);var s=i.getElementsByTagName("p")[0];if(s)s.innerHTML=n;else{var r=e.document.createElement("p");r.id=t.messageID,r.className="nx-loading-message nx-loading-message-new",r.style.color=t.messageColor,r.style.fontSize=t.messageFontSize,r.innerHTML=n,i.appendChild(r)}}else h("Where is the new message?")}(n)}}};return"object"==typeof e.Notiflix?p(!0,e.Notiflix,{Loading:y.Loading}):{Loading:y.Loading}}));const wc=[],_c=async()=>{try{const e=await(async()=>await vs({page:1}))();return wc.push(...e.results),e}catch(e){console.error("Error:",e)}};const kc=async()=>{bc.Loading.hourglass("Loading...",{svgColor:"#b92f2c"}),await _c().then((e=>{_s(wc),Is(e.total_results,{param:ys.TRENDING},undefined),wc.length=0,bc.Loading.remove()}))};var xc,Tc="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n?n:"undefined"!=typeof self?self:{},Cc={},Ec=Ec||{},Ic=Tc||self;function Nc(){}function Sc(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function Ac(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var Rc="closure_uid_"+(1e9*Math.random()>>>0),Lc=0;function Pc(e,t,n){return e.call.apply(e.bind,arguments)}function Dc(e,t,n){if(!e)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function Mc(e,t,n){return(Mc=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Pc:Dc).apply(null,arguments)}function Oc(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function Fc(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(e,n,i){for(var s=Array(arguments.length-2),r=2;r<arguments.length;r++)s[r-2]=arguments[r];return t.prototype[n].apply(e,s)}}function Uc(){this.s=this.s,this.o=this.o}Uc.prototype.s=!1,Uc.prototype.na=function(){var e;!this.s&&(this.s=!0,this.M(),0)&&(e=this,Object.prototype.hasOwnProperty.call(e,Rc)&&e[Rc]||(e[Rc]=++Lc))},Uc.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Vc=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function zc(e){const t=e.length;if(0<t){const n=Array(t);for(let i=0;i<t;i++)n[i]=e[i];return n}return[]}function Bc(e,t){for(let t=1;t<arguments.length;t++){const n=arguments[t];if(Sc(n)){const t=e.length||0,i=n.length||0;e.length=t+i;for(let s=0;s<i;s++)e[t+s]=n[s]}else e.push(n)}}function jc(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}jc.prototype.h=function(){this.defaultPrevented=!0};var qc=function(){if(!Ic.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{Ic.addEventListener("test",Nc,t),Ic.removeEventListener("test",Nc,t)}catch(e){}return e}();function Wc(e){return/^[\s\xa0]*$/.test(e)}var Hc=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function $c(e,t){return e<t?-1:e>t?1:0}function Kc(){var e=Ic.navigator;return e&&(e=e.userAgent)?e:""}function Gc(e){return-1!=Kc().indexOf(e)}function Xc(e){return Xc[" "](e),e}Xc[" "]=Nc;var Qc,Yc,Jc=Gc("Opera"),Zc=Gc("Trident")||Gc("MSIE"),eu=Gc("Edge"),tu=eu||Zc,nu=Gc("Gecko")&&!(-1!=Kc().toLowerCase().indexOf("webkit")&&!Gc("Edge"))&&!(Gc("Trident")||Gc("MSIE"))&&!Gc("Edge"),iu=-1!=Kc().toLowerCase().indexOf("webkit")&&!Gc("Edge");function su(){var e=Ic.document;return e?e.documentMode:void 0}e:{var ru="",ou=(Yc=Kc(),nu?/rv:([^\);]+)(\)|;)/.exec(Yc):eu?/Edge\/([\d\.]+)/.exec(Yc):Zc?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Yc):iu?/WebKit\/(\S+)/.exec(Yc):Jc?/(?:Version)[ \/]?(\S+)/.exec(Yc):void 0);if(ou&&(ru=ou?ou[1]:""),Zc){var au=su();if(null!=au&&au>parseFloat(ru)){Qc=String(au);break e}}Qc=ru}var lu,cu={};function uu(){return function(e){var t=cu;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}((function(){let e=0;const t=Hc(String(Qc)).split("."),n=Hc("9").split("."),i=Math.max(t.length,n.length);for(let o=0;0==e&&o<i;o++){var s=t[o]||"",r=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],0==s[0].length&&0==r[0].length)break;e=$c(0==s[1].length?0:parseInt(s[1],10),0==r[1].length?0:parseInt(r[1],10))||$c(0==s[2].length,0==r[2].length)||$c(s[2],r[2]),s=s[3],r=r[3]}while(0==e)}return 0<=e}))}if(Ic.document&&Zc){var hu=su();lu=hu||(parseInt(Qc,10)||void 0)}else lu=void 0;var du=lu;function pu(e,t){if(jc.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,i=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(nu){e:{try{Xc(t.nodeName);var s=!0;break e}catch(e){}s=!1}s||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:fu[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&pu.X.h.call(this)}}Fc(pu,jc);var fu={2:"touch",3:"pen",4:"mouse"};pu.prototype.h=function(){pu.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var mu="closure_listenable_"+(1e6*Math.random()|0),gu=0;function yu(e,t,n,i,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!i,this.ha=s,this.key=++gu,this.ba=this.ea=!1}function vu(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function bu(e,t,n){for(const i in e)t.call(n,e[i],i,e)}function wu(e){const t={};for(const n in e)t[n]=e[n];return t}const _u="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ku(e,t){let n,i;for(let t=1;t<arguments.length;t++){for(n in i=arguments[t],i)e[n]=i[n];for(let t=0;t<_u.length;t++)n=_u[t],Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}}function xu(e){this.src=e,this.g={},this.h=0}function Tu(e,t){var n=t.type;if(n in e.g){var i,s=e.g[n],r=Vc(s,t);(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(vu(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function Cu(e,t,n,i){for(var s=0;s<e.length;++s){var r=e[s];if(!r.ba&&r.listener==t&&r.capture==!!n&&r.ha==i)return s}return-1}xu.prototype.add=function(e,t,n,i,s){var r=e.toString();(e=this.g[r])||(e=this.g[r]=[],this.h++);var o=Cu(e,t,i,s);return-1<o?(t=e[o],n||(t.ea=!1)):((t=new yu(t,this.src,r,!!i,s)).ea=n,e.push(t)),t};var Eu="closure_lm_"+(1e6*Math.random()|0),Iu={};function Nu(e,t,n,i,s){if(i&&i.once)return Au(e,t,n,i,s);if(Array.isArray(t)){for(var r=0;r<t.length;r++)Nu(e,t[r],n,i,s);return null}return n=Fu(n),e&&e[mu]?e.N(t,n,Ac(i)?!!i.capture:!!i,s):Su(e,t,n,!1,i,s)}function Su(e,t,n,i,s,r){if(!t)throw Error("Invalid event type");var o=Ac(s)?!!s.capture:!!s,a=Mu(e);if(a||(e[Eu]=a=new xu(e)),(n=a.add(t,n,i,o,r)).proxy)return n;if(i=function(){function e(n){return t.call(e.src,e.listener,n)}const t=Du;return e}(),n.proxy=i,i.src=e,i.listener=n,e.addEventListener)qc||(s=o),void 0===s&&(s=!1),e.addEventListener(t.toString(),i,s);else if(e.attachEvent)e.attachEvent(Pu(t.toString()),i);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(i)}return n}function Au(e,t,n,i,s){if(Array.isArray(t)){for(var r=0;r<t.length;r++)Au(e,t[r],n,i,s);return null}return n=Fu(n),e&&e[mu]?e.O(t,n,Ac(i)?!!i.capture:!!i,s):Su(e,t,n,!0,i,s)}function Ru(e,t,n,i,s){if(Array.isArray(t))for(var r=0;r<t.length;r++)Ru(e,t[r],n,i,s);else i=Ac(i)?!!i.capture:!!i,n=Fu(n),e&&e[mu]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=Cu(r=e.g[t],n,i,s))&&(vu(r[n]),Array.prototype.splice.call(r,n,1),0==r.length&&(delete e.g[t],e.h--)))):e&&(e=Mu(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Cu(t,n,i,s)),(n=-1<e?t[e]:null)&&Lu(n))}function Lu(e){if("number"!=typeof e&&e&&!e.ba){var t=e.src;if(t&&t[mu])Tu(t.i,e);else{var n=e.type,i=e.proxy;t.removeEventListener?t.removeEventListener(n,i,e.capture):t.detachEvent?t.detachEvent(Pu(n),i):t.addListener&&t.removeListener&&t.removeListener(i),(n=Mu(t))?(Tu(n,e),0==n.h&&(n.src=null,t[Eu]=null)):vu(e)}}}function Pu(e){return e in Iu?Iu[e]:Iu[e]="on"+e}function Du(e,t){if(e.ba)e=!0;else{t=new pu(t,this);var n=e.listener,i=e.ha||e.src;e.ea&&Lu(e),e=n.call(i,t)}return e}function Mu(e){return(e=e[Eu])instanceof xu?e:null}var Ou="__closure_events_fn_"+(1e9*Math.random()>>>0);function Fu(e){return"function"==typeof e?e:(e[Ou]||(e[Ou]=function(t){return e.handleEvent(t)}),e[Ou])}function Uu(){Uc.call(this),this.i=new xu(this),this.P=this,this.I=null}function Vu(e,t){var n,i=e.I;if(i)for(n=[];i;i=i.I)n.push(i);if(e=e.P,i=t.type||t,"string"==typeof t)t=new jc(t,e);else if(t instanceof jc)t.target=t.target||e;else{var s=t;ku(t=new jc(i,e),s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=t.g=n[r];s=zu(o,i,!0,t)&&s}if(s=zu(o=t.g=e,i,!0,t)&&s,s=zu(o,i,!1,t)&&s,n)for(r=0;r<n.length;r++)s=zu(o=t.g=n[r],i,!1,t)&&s}function zu(e,t,n,i){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var s=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&Tu(e.i,o),s=!1!==a.call(l,i)&&s}}return s&&!i.defaultPrevented}Fc(Uu,Uc),Uu.prototype[mu]=!0,Uu.prototype.removeEventListener=function(e,t,n,i){Ru(this,e,t,n,i)},Uu.prototype.M=function(){if(Uu.X.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)vu(n[i]);delete t.g[e],t.h--}}this.I=null},Uu.prototype.N=function(e,t,n,i){return this.i.add(String(e),t,!1,n,i)},Uu.prototype.O=function(e,t,n,i){return this.i.add(String(e),t,!0,n,i)};var Bu=Ic.JSON.stringify;function ju(){var e=Xu;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var qu,Wu=new class{get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}}((()=>new Hu),(e=>e.reset()));class Hu{set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}constructor(){this.next=this.g=this.h=null}}function $u(e){Ic.setTimeout((()=>{throw e}),0)}function Ku(e,t){qu||function(){var e=Ic.Promise.resolve(void 0);qu=function(){e.then(Qu)}}(),Gu||(qu(),Gu=!0),Xu.add(e,t)}var Gu=!1,Xu=new class{add(e,t){const n=Wu.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}constructor(){this.h=this.g=null}};function Qu(){for(var e;e=ju();){try{e.h.call(e.g)}catch(e){$u(e)}var t=Wu;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Gu=!1}function Yu(e,t){Uu.call(this),this.h=e||1,this.g=t||Ic,this.j=Mc(this.lb,this),this.l=Date.now()}function Ju(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}function Zu(e,t,n){if("function"==typeof e)n&&(e=Mc(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=Mc(e.handleEvent,e)}return 2147483647<Number(t)?-1:Ic.setTimeout(e,t||0)}function eh(e){e.g=Zu((()=>{e.g=null,e.i&&(e.i=!1,eh(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}Fc(Yu,Uu),(xc=Yu.prototype).ca=!1,xc.R=null,xc.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Vu(this,"tick"),this.ca&&(Ju(this),this.start()))}},xc.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},xc.M=function(){Yu.X.M.call(this),Ju(this),delete this.g};class th extends Uc{l(e){this.h=arguments,this.g?this.i=!0:eh(this)}M(){super.M(),this.g&&(Ic.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}}function nh(e){Uc.call(this),this.h=e,this.g={}}Fc(nh,Uc);var ih=[];function sh(e,t,n,i){Array.isArray(n)||(n&&(ih[0]=n.toString()),n=ih);for(var s=0;s<n.length;s++){var r=Nu(t,n[s],i||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function rh(e){bu(e.g,(function(e,t){this.g.hasOwnProperty(t)&&Lu(e)}),e),e.g={}}function oh(){this.g=!0}function ah(e,t,n,i){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var i=n[e];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<s.length;o++)s[o]=""}}}return Bu(n)}catch(e){return t}}(e,n)+(i?" "+i:"")}))}nh.prototype.M=function(){nh.X.M.call(this),rh(this)},nh.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},oh.prototype.Aa=function(){this.g=!1},oh.prototype.info=function(){};var lh={},ch=null;function uh(){return ch=ch||new Uu}function hh(e){jc.call(this,lh.Pa,e)}function dh(e){const t=uh();Vu(t,new hh(t))}function ph(e,t){jc.call(this,lh.STAT_EVENT,e),this.stat=t}function fh(e){const t=uh();Vu(t,new ph(t,e))}function mh(e,t){jc.call(this,lh.Qa,e),this.size=t}function gh(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return Ic.setTimeout((function(){e()}),t)}lh.Pa="serverreachability",Fc(hh,jc),lh.STAT_EVENT="statevent",Fc(ph,jc),lh.Qa="timingevent",Fc(mh,jc);var yh={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},vh={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function bh(){}function wh(e){return e.h||(e.h=e.i())}function _h(){}bh.prototype.h=null;var kh,xh={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Th(){jc.call(this,"d")}function Ch(){jc.call(this,"c")}function Eh(){}function Ih(e,t,n,i){this.l=e,this.j=t,this.m=n,this.U=i||1,this.S=new nh(this),this.O=Sh,e=tu?125:void 0,this.T=new Yu(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Nh}function Nh(){this.i=null,this.g="",this.h=!1}Fc(Th,jc),Fc(Ch,jc),Fc(Eh,bh),Eh.prototype.g=function(){return new XMLHttpRequest},Eh.prototype.i=function(){return{}},kh=new Eh;var Sh=45e3,Ah={},Rh={};function Lh(e,t,n){e.K=1,e.v=Yh($h(t)),e.s=n,e.P=!0,Ph(e,null)}function Ph(e,t){e.F=Date.now(),Fh(e),e.A=$h(e.v);var n=e.A,i=e.U;Array.isArray(i)||(i=[String(i)]),ud(n.i,"t",i),e.C=0,n=e.l.H,e.h=new Nh,e.g=cp(e.l,n?t:null,!e.s),0<e.N&&(e.L=new th(Mc(e.La,e,e.g),e.N)),sh(e.S,e.g,"readystatechange",e.ib),t=e.H?wu(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),dh(),function(e,t,n,i,s,r){e.info((function(){if(e.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+c+"&":o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+t+"\n"+n+"\n"+o}))}(e.j,e.u,e.A,e.m,e.U,e.s)}function Dh(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Da)}function Mh(e,t,n){let i,s=!0;for(;!e.I&&e.C<n.length;){if(i=Oh(e,n),i==Rh){4==t&&(e.o=4,fh(14),s=!1),ah(e.j,e.m,null,"[Incomplete Response]");break}if(i==Ah){e.o=4,fh(15),ah(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}ah(e.j,e.m,i,null),jh(e,i)}Dh(e)&&i!=Rh&&i!=Ah&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,fh(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.$&&(e.$=!0,(t=e.l).g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),tp(t),t.K=!0,fh(11))):(ah(e.j,e.m,n,"[Invalid Chunked Response]"),Bh(e),zh(e))}function Oh(e,t){var n=e.C,i=t.indexOf("\n",n);return-1==i?Rh:(n=Number(t.substring(n,i)),isNaN(n)?Ah:(i+=1)+n>t.length?Rh:(t=t.substr(i,n),e.C=i+n,t))}function Fh(e){e.V=Date.now()+e.O,Uh(e,e.O)}function Uh(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=gh(Mc(e.gb,e),t)}function Vh(e){e.B&&(Ic.clearTimeout(e.B),e.B=null)}function zh(e){0==e.l.G||e.I||sp(e.l,e)}function Bh(e){Vh(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,Ju(e.T),rh(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function jh(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||gd(n.h,e)))if(!e.J&&gd(n.h,e)&&3==n.G){try{var i=n.Fa.g.parse(t)}catch(e){i=null}if(Array.isArray(i)&&3==i.length){var s=i;if(0==s[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;ip(n),Kd(n)}ep(n),fh(18)}}else n.Ba=s[1],0<n.Ba-n.T&&37500>s[2]&&n.L&&0==n.A&&!n.v&&(n.v=gh(Mc(n.cb,n),6e3));if(1>=md(n.h)&&n.ja){try{n.ja()}catch(e){}n.ja=void 0}}else op(n,11)}else if((e.J||n.g==e)&&ip(n),!Wc(t))for(s=n.Fa.g.parse(t),t=0;t<s.length;t++){let c=s[t];if(n.T=c[0],c=c[1],2==n.G)if("c"==c[0]){n.I=c[1],n.ka=c[2];const t=c[3];null!=t&&(n.ma=t,n.j.info("VER="+n.ma));const s=c[4];null!=s&&(n.Ca=s,n.j.info("SVER="+n.Ca));const u=c[5];null!=u&&"number"==typeof u&&0<u&&(i=1.5*u,n.J=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var r=i.h;r.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(r.j=r.l,r.g=new Set,r.h&&(yd(r,r.h),r.h=null))}if(i.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(i.za=e,Qh(i.F,i.D,e))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms"));var o=e;if((i=n).sa=lp(i,i.H?i.ka:null,i.V),o.J){vd(i.h,o);var a=o,l=i.J;l&&a.setTimeout(l),a.B&&(Vh(a),Fh(a)),i.g=o}else Zd(i);0<n.i.length&&Xd(n)}else"stop"!=c[0]&&"close"!=c[0]||op(n,7);else 3==n.G&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?op(n,7):$d(n):"noop"!=c[0]&&n.l&&n.l.wa(c),n.A=0)}dh()}catch(e){}}function qh(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(Sc(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.oa&&"function"==typeof e.oa)return e.oa();if(!e.W||"function"!=typeof e.W){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(Sc(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const i in e)t[n++]=i;return t}}}(e),i=function(e){if(e.W&&"function"==typeof e.W)return e.W();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(Sc(e)){for(var t=[],n=e.length,i=0;i<n;i++)t.push(e[i]);return t}for(i in t=[],n=0,e)t[n++]=e[i];return t}(e),s=i.length,r=0;r<s;r++)t.call(void 0,i[r],n&&n[r],e)}(xc=Ih.prototype).setTimeout=function(e){this.O=e},xc.ib=function(e){e=e.target;const t=this.L;t&&3==zd(e)?t.l():this.La(e)},xc.La=function(e){try{if(e==this.g)e:{const u=zd(this.g);var t=this.g.Ea();this.g.aa();if(!(3>u)&&(3!=u||tu||this.g&&(this.h.h||this.g.fa()||Bd(this.g)))){this.I||4!=u||7==t||dh(),Vh(this);var n=this.g.aa();this.Y=n;t:if(Dh(this)){var i=Bd(this.g);e="";var s=i.length,r=4==zd(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Bh(this),zh(this);var o="";break t}this.h.i=new Ic.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(i[t],{stream:r&&t==s-1});i.splice(0,s),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,function(e,t,n,i,s,r,o){e.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+t+"\n"+n+"\n"+r+" "+o}))}(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Wc(a)){var c=a;break t}}c=null}if(!(n=c)){this.i=!1,this.o=3,fh(12),Bh(this),zh(this);break e}ah(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,jh(this,n)}this.P?(Mh(this,u,o),tu&&this.i&&3==u&&(sh(this.S,this.T,"tick",this.hb),this.T.start())):(ah(this.j,this.m,o,null),jh(this,o)),4==u&&Bh(this),this.i&&!this.I&&(4==u?sp(this.l,this):(this.i=!1,Fh(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,fh(12)):(this.o=0,fh(13)),Bh(this),zh(this)}}}catch(e){}},xc.hb=function(){if(this.g){var e=zd(this.g),t=this.g.fa();this.C<t.length&&(Vh(this),Mh(this,e,t),this.i&&4!=e&&Fh(this))}},xc.cancel=function(){this.I=!0,Bh(this)},xc.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.K&&(dh(),fh(17)),Bh(this),this.o=2,zh(this)):Uh(this,this.V-e)};var Wh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Hh(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Hh){this.h=void 0!==t?t:e.h,Kh(this,e.j),this.s=e.s,this.g=e.g,Gh(this,e.m),this.l=e.l,t=e.i;var n=new od;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Xh(this,n),this.o=e.o}else e&&(n=String(e).match(Wh))?(this.h=!!t,Kh(this,n[1]||"",!0),this.s=Jh(n[2]||""),this.g=Jh(n[3]||"",!0),Gh(this,n[4]),this.l=Jh(n[5]||"",!0),Xh(this,n[6]||"",!0),this.o=Jh(n[7]||"")):(this.h=!!t,this.i=new od(null,this.h))}function $h(e){return new Hh(e)}function Kh(e,t,n){e.j=n?Jh(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Gh(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Xh(e,t,n){t instanceof od?(e.i=t,function(e,t){t&&!e.j&&(ad(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(ld(this,t),ud(this,n,e))}),e)),e.j=t}(e.i,e.h)):(n||(t=Zh(t,sd)),e.i=new od(t,e.h))}function Qh(e,t,n){e.i.set(t,n)}function Yh(e){return Qh(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Jh(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Zh(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,ed),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function ed(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}Hh.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Zh(t,td,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Zh(t,td,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(Zh(n,"/"==n.charAt(0)?id:nd,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Zh(n,rd)),e.join("")};var td=/[#\/\?@]/g,nd=/[#\?:]/g,id=/[#\?]/g,sd=/[#\?@]/g,rd=/#/g;function od(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function ad(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var i=e[n].indexOf("="),s=null;if(0<=i){var r=e[n].substring(0,i);s=e[n].substring(i+1)}else r=e[n];t(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function ld(e,t){ad(e),t=hd(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function cd(e,t){return ad(e),t=hd(e,t),e.g.has(t)}function ud(e,t,n){ld(e,t),0<n.length&&(e.i=null,e.g.set(hd(e,t),zc(n)),e.h+=n.length)}function hd(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(xc=od.prototype).add=function(e,t){ad(this),this.i=null,e=hd(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},xc.forEach=function(e,t){ad(this),this.g.forEach((function(n,i){n.forEach((function(n){e.call(t,n,i,this)}),this)}),this)},xc.oa=function(){ad(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let i=0;i<t.length;i++){const s=e[i];for(let e=0;e<s.length;e++)n.push(t[i])}return n},xc.W=function(e){ad(this);let t=[];if("string"==typeof e)cd(this,e)&&(t=t.concat(this.g.get(hd(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},xc.set=function(e,t){return ad(this),this.i=null,cd(this,e=hd(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},xc.get=function(e,t){return e&&0<(e=this.W(e)).length?String(e[0]):t},xc.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var i=t[n];const r=encodeURIComponent(String(i)),o=this.W(i);for(i=0;i<o.length;i++){var s=r;""!==o[i]&&(s+="="+encodeURIComponent(String(o[i]))),e.push(s)}}return this.i=e.join("&")};function dd(e){this.l=e||pd,Ic.PerformanceNavigationTiming?e=0<(e=Ic.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(Ic.g&&Ic.g.Ga&&Ic.g.Ga()&&Ic.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var pd=10;function fd(e){return!!e.h||!!e.g&&e.g.size>=e.j}function md(e){return e.h?1:e.g?e.g.size:0}function gd(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function yd(e,t){e.g?e.g.add(t):e.h=t}function vd(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function bd(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return zc(e.i)}function wd(){}function _d(){this.g=new wd}function kd(e,t,n){const i=n||"";try{qh(e,(function(e,n){let s=e;Ac(e)&&(s=Bu(e)),t.push(i+n+"="+encodeURIComponent(s))}))}catch(e){throw t.push(i+"type="+encodeURIComponent("_badmap")),e}}function xd(e,t,n,i,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(i)}catch(e){}}function Td(e){this.l=e.ac||null,this.j=e.jb||!1}function Cd(e,t){Uu.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Ed,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}dd.prototype.cancel=function(){if(this.i=bd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},wd.prototype.stringify=function(e){return Ic.JSON.stringify(e,void 0)},wd.prototype.parse=function(e){return Ic.JSON.parse(e,void 0)},Fc(Td,bh),Td.prototype.g=function(){return new Cd(this.l,this.j)},Td.prototype.i=function(e){return function(){return e}}({}),Fc(Cd,Uu);var Ed=0;function Id(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}function Nd(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Sd(e)}function Sd(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(xc=Cd.prototype).open=function(e,t){if(this.readyState!=Ed)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Sd(this)},xc.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||Ic).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))},xc.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Nd(this)),this.readyState=Ed},xc.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Sd(this)),this.g&&(this.readyState=3,Sd(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(void 0!==Ic.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Id(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))},xc.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Nd(this):Sd(this),3==this.readyState&&Id(this)}},xc.Va=function(e){this.g&&(this.response=this.responseText=e,Nd(this))},xc.Ua=function(e){this.g&&(this.response=e,Nd(this))},xc.ga=function(){this.g&&Nd(this)},xc.setRequestHeader=function(e,t){this.v.append(e,t)},xc.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},xc.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Cd.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var Ad=Ic.JSON.parse;function Rd(e){Uu.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Ld,this.K=this.L=!1}Fc(Rd,Uu);var Ld="",Pd=/^https?$/i,Dd=["POST","PUT"];function Md(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Od(e),Ud(e)}function Od(e){e.D||(e.D=!0,Vu(e,"complete"),Vu(e,"error"))}function Fd(e){if(e.h&&void 0!==Ec&&(!e.C[1]||4!=zd(e)||2!=e.aa()))if(e.v&&4==zd(e))Zu(e.Ha,0,e);else if(Vu(e,"readystatechange"),4==zd(e)){e.h=!1;try{const a=e.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var i;if(i=0===a){var s=String(e.H).match(Wh)[1]||null;if(!s&&Ic.self&&Ic.self.location){var r=Ic.self.location.protocol;s=r.substr(0,r.length-1)}i=!Pd.test(s?s.toLowerCase():"")}n=i}if(n)Vu(e,"complete"),Vu(e,"success");else{e.m=6;try{var o=2<zd(e)?e.g.statusText:""}catch(e){o=""}e.j=o+" ["+e.aa()+"]",Od(e)}}finally{Ud(e)}}}function Ud(e,t){if(e.g){Vd(e);const n=e.g,i=e.C[0]?Nc:null;e.g=null,e.C=null,t||Vu(e,"ready");try{n.onreadystatechange=i}catch(e){}}}function Vd(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(Ic.clearTimeout(e.A),e.A=null)}function zd(e){return e.g?e.g.readyState:0}function Bd(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Ld:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function jd(e){let t="";return bu(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function qd(e,t,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=jd(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):Qh(e,t,n))}function Wd(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Hd(e){this.Ca=0,this.i=[],this.j=new oh,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Wd("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Wd("baseRetryDelayMs",5e3,e),this.bb=Wd("retryDelaySeedMs",1e4,e),this.$a=Wd("forwardChannelMaxRetries",2,e),this.ta=Wd("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new dd(e&&e.concurrentRequestLimit),this.Fa=new _d,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function $d(e){if(Gd(e),3==e.G){var t=e.U++,n=$h(e.F);Qh(n,"SID",e.I),Qh(n,"RID",t),Qh(n,"TYPE","terminate"),Yd(e,n),(t=new Ih(e,e.j,t,void 0)).K=2,t.v=Yh($h(n)),n=!1,Ic.navigator&&Ic.navigator.sendBeacon&&(n=Ic.navigator.sendBeacon(t.v.toString(),"")),!n&&Ic.Image&&((new Image).src=t.v,n=!0),n||(t.g=cp(t.l,null),t.g.da(t.v)),t.F=Date.now(),Fh(t)}ap(e)}function Kd(e){e.g&&(tp(e),e.g.cancel(),e.g=null)}function Gd(e){Kd(e),e.u&&(Ic.clearTimeout(e.u),e.u=null),ip(e),e.h.cancel(),e.m&&("number"==typeof e.m&&Ic.clearTimeout(e.m),e.m=null)}function Xd(e){fd(e.h)||e.m||(e.m=!0,Ku(e.Ja,e),e.C=0)}function Qd(e,t){var n;n=t?t.m:e.U++;const i=$h(e.F);Qh(i,"SID",e.I),Qh(i,"RID",n),Qh(i,"AID",e.T),Yd(e,i),e.o&&e.s&&qd(i,e.o,e.s),n=new Ih(e,e.j,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=Jd(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),yd(e.h,n),Lh(n,i,t)}function Yd(e,t){e.ia&&bu(e.ia,(function(e,n){Qh(t,n,e)})),e.l&&qh({},(function(e,n){Qh(t,n,e)}))}function Jd(e,t,n){n=Math.min(e.i.length,n);var i=e.l?Mc(e.l.Ra,e.l,e):null;e:{var s=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=s[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let r=!0;for(let o=0;o<n;o++){let n=s[o].h;const a=s[o].g;if(n-=t,0>n)t=Math.max(0,s[o].h-100),r=!1;else try{kd(a,e,"req"+n+"_")}catch(e){i&&i(a)}}if(r){i=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,i}function Zd(e){e.g||e.u||(e.Z=1,Ku(e.Ia,e),e.A=0)}function ep(e){return!(e.g||e.u||3<=e.A)&&(e.Z++,e.u=gh(Mc(e.Ia,e),rp(e,e.A)),e.A++,!0)}function tp(e){null!=e.B&&(Ic.clearTimeout(e.B),e.B=null)}function np(e){e.g=new Ih(e,e.j,"rpc",e.Z),null===e.o&&(e.g.H=e.s),e.g.N=0;var t=$h(e.sa);Qh(t,"RID","rpc"),Qh(t,"SID",e.I),Qh(t,"CI",e.L?"0":"1"),Qh(t,"AID",e.T),Qh(t,"TYPE","xmlhttp"),Yd(e,t),e.o&&e.s&&qd(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=Yh($h(t)),n.s=null,n.P=!0,Ph(n,e)}function ip(e){null!=e.v&&(Ic.clearTimeout(e.v),e.v=null)}function sp(e,t){var n=null;if(e.g==t){ip(e),tp(e),e.g=null;var i=2}else{if(!gd(e.h,t))return;n=t.D,vd(e.h,t),i=1}if(0!=e.G)if(e.pa=t.Y,t.i)if(1==i){n=t.s?t.s.length:0,t=Date.now()-t.F;var s=e.C;Vu(i=uh(),new mh(i,n)),Xd(e)}else Zd(e);else if(3==(s=t.o)||0==s&&0<e.pa||!(1==i&&function(e,t){return!(md(e.h)>=e.h.j-(e.m?1:0)||(e.m?(e.i=t.D.concat(e.i),0):1==e.G||2==e.G||e.C>=(e.Za?0:e.$a)||(e.m=gh(Mc(e.Ja,e,t),rp(e,e.C)),e.C++,0)))}(e,t)||2==i&&ep(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),s){case 1:op(e,5);break;case 4:op(e,10);break;case 3:op(e,6);break;default:op(e,2)}}function rp(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function op(e,t){if(e.j.info("Error code "+t),2==t){var n=null;e.l&&(n=null);var i=Mc(e.kb,e);n||(n=new Hh("//www.google.com/images/cleardot.gif"),Ic.location&&"http"==Ic.location.protocol||Kh(n,"https"),Yh(n)),function(e,t){const n=new oh;if(Ic.Image){const i=new Image;i.onload=Oc(xd,n,i,"TestLoadImage: loaded",!0,t),i.onerror=Oc(xd,n,i,"TestLoadImage: error",!1,t),i.onabort=Oc(xd,n,i,"TestLoadImage: abort",!1,t),i.ontimeout=Oc(xd,n,i,"TestLoadImage: timeout",!1,t),Ic.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=e}else t(!1)}(n.toString(),i)}else fh(2);e.G=0,e.l&&e.l.va(t),ap(e),Gd(e)}function ap(e){if(e.G=0,e.la=[],e.l){const t=bd(e.h);0==t.length&&0==e.i.length||(Bc(e.la,t),Bc(e.la,e.i),e.h.i.length=0,zc(e.i),e.i.length=0),e.l.ua()}}function lp(e,t,n){var i=n instanceof Hh?$h(n):new Hh(n,void 0);if(""!=i.g)t&&(i.g=t+"."+i.g),Gh(i,i.m);else{var s=Ic.location;i=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var r=new Hh(null,void 0);i&&Kh(r,i),t&&(r.g=t),s&&Gh(r,s),n&&(r.l=n),i=r}return n=e.D,t=e.za,n&&t&&Qh(i,n,t),Qh(i,"VER",e.ma),Yd(e,i),i}function cp(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Da&&!e.ra?new Rd(new Td({jb:!0})):new Rd(e.ra)).Ka(e.H),t}function up(){}function hp(){if(Zc&&!(10<=Number(du)))throw Error("Environmental error: no available transport.")}function dp(e,t){Uu.call(this),this.g=new Hd(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!Wc(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Wc(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new mp(this)}function pp(e){Th.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function fp(){Ch.call(this),this.status=1}function mp(e){this.g=e}(xc=Rd.prototype).Ka=function(e){this.L=e},xc.da=function(e,t,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():kh.g(),this.C=this.u?wh(this.u):wh(kh),this.g.onreadystatechange=Mc(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(e){return void Md(this,e)}if(e=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else{if("function"!=typeof i.keys||"function"!=typeof i.get)throw Error("Unknown input type for opt_headers: "+String(i));for(const e of i.keys())n.set(e,i.get(e))}i=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),s=Ic.FormData&&e instanceof Ic.FormData,!(0<=Vc(Dd,t))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[e,t]of n)this.g.setRequestHeader(e,t);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Vd(this),0<this.B&&((this.K=function(e){return Zc&&uu()&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Mc(this.qa,this)):this.A=Zu(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){Md(this,e)}},xc.qa=function(){void 0!==Ec&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Vu(this,"timeout"),this.abort(8))},xc.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Vu(this,"complete"),Vu(this,"abort"),Ud(this))},xc.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ud(this,!0)),Rd.X.M.call(this)},xc.Ha=function(){this.s||(this.F||this.v||this.l?Fd(this):this.fb())},xc.fb=function(){Fd(this)},xc.aa=function(){try{return 2<zd(this)?this.g.status:-1}catch(e){return-1}},xc.fa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},xc.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),Ad(t)}},xc.Ea=function(){return this.m},xc.Oa=function(){return"string"==typeof this.j?this.j:String(this.j)},(xc=Hd.prototype).ma=8,xc.G=1,xc.Ja=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const s=new Ih(this,this.j,e,void 0);let r=this.s;if(this.S&&(r?(r=wu(r),ku(r,this.S)):r=this.S),null!==this.o||this.N||(s.H=r,r=null),this.O)e:{for(var t=0,n=0;n<this.i.length;n++){var i=this.i[n];if(void 0===(i="__data__"in i.g&&"string"==typeof(i=i.g.__data__)?i.length:void 0))break;if(4096<(t+=i)){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Jd(this,s,t),Qh(n=$h(this.F),"RID",e),Qh(n,"CVER",22),this.D&&Qh(n,"X-HTTP-Session-Id",this.D),Yd(this,n),r&&(this.N?t="headers="+encodeURIComponent(String(jd(r)))+"&"+t:this.o&&qd(n,this.o,r)),yd(this.h,s),this.Ya&&Qh(n,"TYPE","init"),this.O?(Qh(n,"$req",t),Qh(n,"SID","null"),s.Z=!0,Lh(s,n,null)):Lh(s,n,t),this.G=2}}else 3==this.G&&(e?Qd(this,e):0==this.i.length||fd(this.h)||Qd(this))},xc.Ia=function(){if(this.u=null,np(this),this.$&&!(this.K||null==this.g||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=gh(Mc(this.eb,this),e)}},xc.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,fh(10),Kd(this),np(this))},xc.cb=function(){null!=this.v&&(this.v=null,Kd(this),ep(this),fh(19))},xc.kb=function(e){e?(this.j.info("Successfully pinged google.com"),fh(2)):(this.j.info("Failed to ping google.com"),fh(1))},(xc=up.prototype).xa=function(){},xc.wa=function(){},xc.va=function(){},xc.ua=function(){},xc.Ra=function(){},hp.prototype.g=function(e,t){return new dp(e,t)},Fc(dp,Uu),dp.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;fh(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=lp(e,null,e.V),Xd(e)},dp.prototype.close=function(){$d(this.g)},dp.prototype.u=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=Bu(e),e=n);t.i.push(new class{constructor(e,t){this.h=e,this.g=t}}(t.ab++,e)),3==t.G&&Xd(t)},dp.prototype.M=function(){this.g.l=null,delete this.j,$d(this.g),delete this.g,dp.X.M.call(this)},Fc(pp,Th),Fc(fp,Ch),Fc(mp,up),mp.prototype.xa=function(){Vu(this.g,"a")},mp.prototype.wa=function(e){Vu(this.g,new pp(e))},mp.prototype.va=function(e){Vu(this.g,new fp)},mp.prototype.ua=function(){Vu(this.g,"b")},hp.prototype.createWebChannel=hp.prototype.g,dp.prototype.send=dp.prototype.u,dp.prototype.open=dp.prototype.m,dp.prototype.close=dp.prototype.close,yh.NO_ERROR=0,yh.TIMEOUT=8,yh.HTTP_ERROR=6,vh.COMPLETE="complete",_h.EventType=xh,xh.OPEN="a",xh.CLOSE="b",xh.ERROR="c",xh.MESSAGE="d",Uu.prototype.listen=Uu.prototype.N,Rd.prototype.listenOnce=Rd.prototype.O,Rd.prototype.getLastError=Rd.prototype.Oa,Rd.prototype.getLastErrorCode=Rd.prototype.Ea,Rd.prototype.getStatus=Rd.prototype.aa,Rd.prototype.getResponseJson=Rd.prototype.Sa,Rd.prototype.getResponseText=Rd.prototype.fa,Rd.prototype.send=Rd.prototype.da,Rd.prototype.setWithCredentials=Rd.prototype.Ka;var gp=Cc.createWebChannelTransport=function(){return new hp},yp=Cc.getStatEventTarget=function(){return uh()},vp=Cc.ErrorCode=yh,bp=Cc.EventType=vh,wp=Cc.Event=lh,_p=Cc.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},kp=Cc.FetchXmlHttpFactory=Td,xp=Cc.WebChannel=_h,Tp=Cc.XhrIo=Rd;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cp{isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}constructor(e){this.uid=e}}Cp.UNAUTHENTICATED=new Cp(null),Cp.GOOGLE_CREDENTIALS=new Cp("google-credentials-uid"),Cp.FIRST_PARTY=new Cp("first-party-uid"),Cp.MOCK_USER=new Cp("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Ep="9.20.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ip=new Me("@firebase/firestore");function Np(){return Ip.logLevel}function Sp(e,...t){if(Ip.logLevel<=Se.DEBUG){const n=t.map(Lp);Ip.debug(`Firestore (${Ep}): ${e}`,...n)}}function Ap(e,...t){if(Ip.logLevel<=Se.ERROR){const n=t.map(Lp);Ip.error(`Firestore (${Ep}): ${e}`,...n)}}function Rp(e,...t){if(Ip.logLevel<=Se.WARN){const n=t.map(Lp);Ip.warn(`Firestore (${Ep}): ${e}`,...n)}}function Lp(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pp(e="Unexpected state"){const t=`FIRESTORE (${Ep}) INTERNAL ASSERTION FAILED: `+e;throw Ap(t),new Error(t)}function Dp(e,t){e||Pp()}function Mp(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Op={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Fp extends ee{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class zp{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Cp.UNAUTHENTICATED)))}shutdown(){}}class Bp{getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}constructor(e){this.token=e,this.changeListener=null}}class jp{start(e,t){let n=this.i;const i=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let s=new Up;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Up,e.enqueueRetryable((()=>i(this.currentUser)))};const r=()=>{const t=s;e.enqueueRetryable((async()=>{await t.promise,await i(this.currentUser)}))},o=e=>{Sp("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(Sp("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Up)}}),0),r()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(Sp("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(Dp("string"==typeof t.accessToken),new Vp(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Dp(null===e||"string"==typeof e),new Cp(e)}constructor(e){this.t=e,this.currentUser=Cp.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}}class qp{p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}constructor(e,t,n){this.h=e,this.l=t,this.m=n,this.type="FirstParty",this.user=Cp.FIRST_PARTY,this.g=new Map}}class Wp{getToken(){return Promise.resolve(new qp(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(Cp.FIRST_PARTY)))}shutdown(){}invalidateToken(){}constructor(e,t,n){this.h=e,this.l=t,this.m=n}}class Hp{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class $p{start(e,t){const n=e=>{null!=e.error&&Sp("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.T;return this.T=e.token,Sp("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const i=e=>{Sp("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.I.onInit((e=>i(e))),setTimeout((()=>{if(!this.appCheck){const e=this.I.getImmediate({optional:!0});e?i(e):Sp("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(Dp("string"==typeof e.token),this.T=e.token,new Hp(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Kp(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const i=Kp(40);for(let s=0;s<i.length;++s)n.length<20&&i[s]<t&&(n+=e.charAt(i[s]%e.length))}return n}}function Xp(e,t){return e<t?-1:e>t?1:0}function Qp(e,t,n){return e.length===t.length&&e.every(((e,i)=>n(e,t[i])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yp{static now(){return Yp.fromMillis(Date.now())}static fromDate(e){return Yp.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new Yp(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Xp(this.nanoseconds,e.nanoseconds):Xp(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Fp(Op.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Fp(Op.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new Fp(Op.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Fp(Op.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{static fromTimestamp(e){return new Jp(e)}static min(){return new Jp(new Yp(0,0))}static max(){return new Jp(new Yp(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}constructor(e){this.timestamp=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{get length(){return this.len}isEqual(e){return 0===Zp.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Zp?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const n=e.get(i),s=t.get(i);if(n<s)return-1;if(n>s)return 1}return e.length<t.length?-1:e.length>t.length?1:0}constructor(e,t,n){void 0===t?t=0:t>e.length&&Pp(),void 0===n?n=e.length-t:n>e.length-t&&Pp(),this.segments=e,this.offset=t,this.len=n}}class ef extends Zp{construct(e,t,n){return new ef(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new Fp(Op.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new ef(t)}static emptyPath(){return new ef([])}}const tf=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class nf extends Zp{construct(e,t,n){return new nf(e,t,n)}static isValidIdentifier(e){return tf.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),nf.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new nf(["__name__"])}static fromServerFormat(e){const t=[];let n="",i=0;const s=()=>{if(0===n.length)throw new Fp(Op.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let r=!1;for(;i<e.length;){const t=e[i];if("\\"===t){if(i+1===e.length)throw new Fp(Op.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[i+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new Fp(Op.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,i+=2}else"`"===t?(r=!r,i++):"."!==t||r?(n+=t,i++):(s(),i++)}if(s(),r)throw new Fp(Op.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new nf(t)}static emptyPath(){return new nf([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{static fromPath(e){return new sf(ef.fromString(e))}static fromName(e){return new sf(ef.fromString(e).popFirst(5))}static empty(){return new sf(ef.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===ef.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return ef.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new sf(new ef(e.slice()))}constructor(e){this.path=e}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(e,t,n,i){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=i}}rf.UNKNOWN_ID=-1;function of(e,t){const n=e.toTimestamp().seconds,i=e.toTimestamp().nanoseconds+1,s=Jp.fromTimestamp(1e9===i?new Yp(n+1,0):new Yp(n,i));return new lf(s,sf.empty(),t)}function af(e){return new lf(e.readTime,e.key,-1)}class lf{static min(){return new lf(Jp.min(),sf.empty(),-1)}static max(){return new lf(Jp.max(),sf.empty(),-1)}constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}}function cf(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=sf.comparator(e.documentKey,t.documentKey),0!==n?n:Xp(e.largestBatchId,t.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uf="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class hf{addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}constructor(){this.onCommittedListeners=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function df(e){if(e.code!==Op.FAILED_PRECONDITION||e.message!==uf)throw e;Sp("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Pp(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new pf(((n,i)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,i)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,i)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof pf?t:pf.resolve(t)}catch(e){return pf.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):pf.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):pf.reject(t)}static resolve(e){return new pf(((t,n)=>{t(e)}))}static reject(e){return new pf(((t,n)=>{n(e)}))}static waitFor(e){return new pf(((t,n)=>{let i=0,s=0,r=!1;e.forEach((e=>{++i,e.next((()=>{++s,r&&s===i&&t()}),(e=>n(e)))})),r=!0,s===i&&t()}))}static or(e){let t=pf.resolve(!1);for(const n of e)t=t.next((e=>e?pf.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,i)=>{n.push(t.call(this,e,i))})),this.waitFor(n)}static mapArray(e,t){return new pf(((n,i)=>{const s=e.length,r=new Array(s);let o=0;for(let a=0;a<s;a++){const l=a;t(e[l]).next((e=>{r[l]=e,++o,o===s&&n(r)}),(e=>i(e)))}}))}static doWhile(e,t){return new pf(((n,i)=>{const s=()=>{!0===e()?t().next((()=>{s()}),i):n()};s()}))}constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ff(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mf{ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ot(e),this.ut=e=>t.writeSequenceNumber(e))}}function gf(e){return null==e}function yf(e){return 0===e&&1/e==-1/0}function vf(e){return"number"==typeof e&&Number.isInteger(e)&&!yf(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */mf.ct=-1;const bf=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],wf=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],_f=wf;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function kf(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function xf(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Tf(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{insert(e,t){return new Cf(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,If.BLACK,null,null))}remove(e){return new Cf(this.comparator,this.root.remove(e,this.comparator).copy(null,null,If.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(0===i)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ef(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ef(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ef(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ef(this.root,e,this.comparator,!0)}constructor(e,t){this.comparator=e,this.root=t||If.EMPTY}}class Ef{getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(0===s){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}}class If{copy(e,t,n,i,s){return new If(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const s=n(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===s?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return If.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===t(e,i.key)){if(i.right.isEmpty())return If.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,If.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,If.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Pp();if(this.right.isRed())throw Pp();const e=this.left.check();if(e!==this.right.check())throw Pp();return e+(this.isRed()?0:1)}constructor(e,t,n,i,s){this.key=e,this.value=t,this.color=null!=n?n:If.RED,this.left=null!=i?i:If.EMPTY,this.right=null!=s?s:If.EMPTY,this.size=this.left.size+1+this.right.size}}If.EMPTY=null,If.RED=!0,If.BLACK=!1,If.EMPTY=new class{get key(){throw Pp()}get value(){throw Pp()}get color(){throw Pp()}get left(){throw Pp()}get right(){throw Pp()}copy(e,t,n,i,s){return this}insert(e,t,n){return new If(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}constructor(){this.size=0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nf{has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Sf(this.data.getIterator())}getIteratorFrom(e){return new Sf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof Nf))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,i=n.getNext().key;if(0!==this.comparator(e,i))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Nf(this.comparator);return t.data=e,t}constructor(e){this.comparator=e,this.data=new Cf(this.comparator)}}class Sf{getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}constructor(e){this.iter=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Af{static empty(){return new Af([])}unionWith(e){let t=new Nf(nf.comparator);for(const e of this.fields)t=t.add(e);for(const n of e)t=t.add(n);return new Af(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Qp(this.fields,e.fields,((e,t)=>e.isEqual(t)))}constructor(e){this.fields=e,e.sort(nf.comparator)}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lf=Symbol.iterator;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new Rf("Invalid base64 string: "+e):e}}(e);return new Pf(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Pf(t)}[Lf](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){var e;return e=this.binaryString,btoa(e)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Xp(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}constructor(e){this.binaryString=e}}Pf.EMPTY_BYTE_STRING=new Pf("");const Df=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Mf(e){if(Dp(!!e),"string"==typeof e){let t=0;const n=Df.exec(e);if(Dp(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:Of(e.seconds),nanos:Of(e.nanos)}}function Of(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Ff(e){return"string"==typeof e?Pf.fromBase64String(e):Pf.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uf(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Vf(e){const t=e.mapValue.fields.__previous_value__;return Uf(t)?Vf(t):t}function zf(e){const t=Mf(e.mapValue.fields.__local_write_time__.timestampValue);return new Yp(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(e,t,n,i,s,r,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=s,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class jf{static empty(){return new jf("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof jf&&e.projectId===this.projectId&&e.database===this.database}constructor(e,t){this.projectId=e,this.database=t||"(default)"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qf={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Wf(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Uf(e)?4:im(e)?9007199254740991:10:Pp()}function Hf(e,t){if(e===t)return!0;const n=Wf(e);if(n!==Wf(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return zf(e).isEqual(zf(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Mf(e.timestampValue),i=Mf(t.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return Ff(e.bytesValue).isEqual(Ff(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Of(e.geoPointValue.latitude)===Of(t.geoPointValue.latitude)&&Of(e.geoPointValue.longitude)===Of(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Of(e.integerValue)===Of(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Of(e.doubleValue),i=Of(t.doubleValue);return n===i?yf(n)===yf(i):isNaN(n)&&isNaN(i)}return!1}(e,t);case 9:return Qp(e.arrayValue.values||[],t.arrayValue.values||[],Hf);case 10:return function(e,t){const n=e.mapValue.fields||{},i=t.mapValue.fields||{};if(kf(n)!==kf(i))return!1;for(const e in n)if(n.hasOwnProperty(e)&&(void 0===i[e]||!Hf(n[e],i[e])))return!1;return!0}(e,t);default:return Pp()}}function $f(e,t){return void 0!==(e.values||[]).find((e=>Hf(e,t)))}function Kf(e,t){if(e===t)return 0;const n=Wf(e),i=Wf(t);if(n!==i)return Xp(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return Xp(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Of(e.integerValue||e.doubleValue),i=Of(t.integerValue||t.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(e,t);case 3:return Gf(e.timestampValue,t.timestampValue);case 4:return Gf(zf(e),zf(t));case 5:return Xp(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Ff(e),i=Ff(t);return n.compareTo(i)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),i=t.split("/");for(let e=0;e<n.length&&e<i.length;e++){const t=Xp(n[e],i[e]);if(0!==t)return t}return Xp(n.length,i.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=Xp(Of(e.latitude),Of(t.latitude));return 0!==n?n:Xp(Of(e.longitude),Of(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],i=t.values||[];for(let e=0;e<n.length&&e<i.length;++e){const t=Kf(n[e],i[e]);if(t)return t}return Xp(n.length,i.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===qf.mapValue&&t===qf.mapValue)return 0;if(e===qf.mapValue)return 1;if(t===qf.mapValue)return-1;const n=e.fields||{},i=Object.keys(n),s=t.fields||{},r=Object.keys(s);i.sort(),r.sort();for(let e=0;e<i.length&&e<r.length;++e){const t=Xp(i[e],r[e]);if(0!==t)return t;const o=Kf(n[i[e]],s[r[e]]);if(0!==o)return o}return Xp(i.length,r.length)}(e.mapValue,t.mapValue);default:throw Pp()}}function Gf(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Xp(e,t);const n=Mf(e),i=Mf(t),s=Xp(n.seconds,i.seconds);return 0!==s?s:Xp(n.nanos,i.nanos)}function Xf(e){return Qf(e)}function Qf(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Mf(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Ff(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,sf.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const i of e.values||[])n?n=!1:t+=",",t+=Qf(i);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",i=!0;for(const s of t)i?i=!1:n+=",",n+=`${s}:${Qf(e.fields[s])}`;return n+"}"}(e.mapValue):Pp()}function Yf(e){return!!e&&"integerValue"in e}function Jf(e){return!!e&&"arrayValue"in e}function Zf(e){return!!e&&"nullValue"in e}function em(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function tm(e){return!!e&&"mapValue"in e}function nm(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return xf(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=nm(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=nm(e.arrayValue.values[n]);return t}return Object.assign({},e)}function im(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sm{static empty(){return new sm({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!tm(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=nm(t)}setAll(e){let t=nf.emptyPath(),n={},i=[];e.forEach(((e,s)=>{if(!t.isImmediateParentOf(s)){const e=this.getFieldsMap(t);this.applyChanges(e,n,i),n={},i=[],t=s.popLast()}e?n[s.lastSegment()]=nm(e):i.push(s.lastSegment())}));const s=this.getFieldsMap(t);this.applyChanges(s,n,i)}delete(e){const t=this.field(e.popLast());tm(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Hf(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];tm(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){xf(t,((t,n)=>e[t]=n));for(const t of n)delete e[t]}clone(){return new sm(nm(this.value))}constructor(e){this.value=e}}function rm(e){const t=[];return xf(e.fields,((e,n)=>{const i=new nf([e]);if(tm(n)){const e=rm(n.mapValue).fields;if(0===e.length)t.push(i);else for(const n of e)t.push(i.child(n))}else t.push(i)})),new Af(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class om{static newInvalidDocument(e){return new om(e,0,Jp.min(),Jp.min(),Jp.min(),sm.empty(),0)}static newFoundDocument(e,t,n,i){return new om(e,1,t,Jp.min(),n,i,0)}static newNoDocument(e,t){return new om(e,2,t,Jp.min(),Jp.min(),sm.empty(),0)}static newUnknownDocument(e,t){return new om(e,3,t,Jp.min(),Jp.min(),sm.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Jp.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=sm.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=sm.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Jp.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof om&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new om(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}constructor(e,t,n,i,s,r,o){this.key=e,this.documentType=t,this.version=n,this.readTime=i,this.createTime=s,this.data=r,this.documentState=o}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(e,t){this.position=e,this.inclusive=t}}function lm(e,t,n){let i=0;for(let s=0;s<e.position.length;s++){const r=t[s],o=e.position[s];if(i=r.field.isKeyField()?sf.comparator(sf.fromName(o.referenceValue),n.key):Kf(o,n.data.field(r.field)),"desc"===r.dir&&(i*=-1),0!==i)break}return i}function cm(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Hf(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(e,t="asc"){this.field=e,this.dir=t}}function hm(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{}class pm extends dm{static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new _m(e,t,n):"array-contains"===t?new Cm(e,n):"in"===t?new Em(e,n):"not-in"===t?new Im(e,n):"array-contains-any"===t?new Nm(e,n):new pm(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new km(e,n):new xm(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(Kf(t,this.value)):null!==t&&Wf(this.value)===Wf(t)&&this.matchesComparison(Kf(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Pp()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}}class fm extends dm{static create(e,t){return new fm(e,t)}matches(e){return mm(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.ht||(this.ht=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt((e=>e.isInequality()));return null!==e?e.field:null}lt(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}constructor(e,t){super(),this.filters=e,this.op=t,this.ht=null}}function mm(e){return"and"===e.op}function gm(e){return ym(e)&&mm(e)}function ym(e){for(const t of e.filters)if(t instanceof fm)return!1;return!0}function vm(e){if(e instanceof pm)return e.field.canonicalString()+e.op.toString()+Xf(e.value);if(gm(e))return e.filters.map((e=>vm(e))).join(",");{const t=e.filters.map((e=>vm(e))).join(",");return`${e.op}(${t})`}}function bm(e,t){return e instanceof pm?function(e,t){return t instanceof pm&&e.op===t.op&&e.field.isEqual(t.field)&&Hf(e.value,t.value)}(e,t):e instanceof fm?function(e,t){return t instanceof fm&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,i)=>e&&bm(n,t.filters[i])),!0)}(e,t):void Pp()}function wm(e){return e instanceof pm?function(e){return`${e.field.canonicalString()} ${e.op} ${Xf(e.value)}`}(e):e instanceof fm?function(e){return e.op.toString()+" {"+e.getFilters().map(wm).join(" ,")+"}"}(e):"Filter"}class _m extends pm{matches(e){const t=sf.comparator(e.key,this.key);return this.matchesComparison(t)}constructor(e,t,n){super(e,t,n),this.key=sf.fromName(n.referenceValue)}}class km extends pm{matches(e){return this.keys.some((t=>t.isEqual(e.key)))}constructor(e,t){super(e,"in",t),this.keys=Tm("in",t)}}class xm extends pm{matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}constructor(e,t){super(e,"not-in",t),this.keys=Tm("not-in",t)}}function Tm(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>sf.fromName(e.referenceValue)))}class Cm extends pm{matches(e){const t=e.data.field(this.field);return Jf(t)&&$f(t.arrayValue,this.value)}constructor(e,t){super(e,"array-contains",t)}}class Em extends pm{matches(e){const t=e.data.field(this.field);return null!==t&&$f(this.value.arrayValue,t)}constructor(e,t){super(e,"in",t)}}class Im extends pm{matches(e){if($f(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!$f(this.value.arrayValue,t)}constructor(e,t){super(e,"not-in",t)}}class Nm extends pm{matches(e){const t=e.data.field(this.field);return!(!Jf(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>$f(this.value.arrayValue,e)))}constructor(e,t){super(e,"array-contains-any",t)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(e,t=null,n=[],i=[],s=null,r=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=s,this.startAt=r,this.endAt=o,this.ft=null}}function Am(e,t=null,n=[],i=[],s=null,r=null,o=null){return new Sm(e,t,n,i,s,r,o)}function Rm(e){const t=Mp(e);if(null===t.ft){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>vm(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),gf(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>Xf(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>Xf(e))).join(",")),t.ft=e}return t.ft}function Lm(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!hm(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!bm(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!cm(e.startAt,t.startAt)&&cm(e.endAt,t.endAt)}function Pm(e){return sf.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dm{constructor(e,t=null,n=[],i=[],s=null,r="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=s,this.limitType=r,this.startAt=o,this.endAt=a,this.dt=null,this.wt=null,this.startAt,this.endAt}}function Mm(e,t,n,i,s,r,o,a){return new Dm(e,t,n,i,s,r,o,a)}function Om(e){return new Dm(e)}function Fm(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function Um(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Vm(e){for(const t of e.filters){const e=t.getFirstInequalityField();if(null!==e)return e}return null}function zm(e){return null!==e.collectionGroup}function Bm(e){const t=Mp(e);if(null===t.dt){t.dt=[];const e=Vm(t),n=Um(t);if(null!==e&&null===n)e.isKeyField()||t.dt.push(new um(e)),t.dt.push(new um(nf.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.dt.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new um(nf.keyField(),e))}}}return t.dt}function jm(e){const t=Mp(e);if(!t.wt)if("F"===t.limitType)t.wt=Am(t.path,t.collectionGroup,Bm(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const n of Bm(t)){const t="desc"===n.dir?"asc":"desc";e.push(new um(n.field,t))}const n=t.endAt?new am(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new am(t.startAt.position,t.startAt.inclusive):null;t.wt=Am(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}return t.wt}function qm(e,t,n){return new Dm(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Wm(e,t){return Lm(jm(e),jm(t))&&e.limitType===t.limitType}function Hm(e){return`${Rm(jm(e))}|lt:${e.limitType}`}function $m(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>wm(e))).join(", ")}]`),gf(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>Xf(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>Xf(e))).join(",")),`Target(${t})`}(jm(e))}; limitType=${e.limitType})`}function Km(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):sf.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of Bm(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(i=t,!((n=e).startAt&&!function(e,t,n){const i=lm(e,t,n);return e.inclusive?i<=0:i<0}(n.startAt,Bm(n),i)||n.endAt&&!function(e,t,n){const i=lm(e,t,n);return e.inclusive?i>=0:i>0}(n.endAt,Bm(n),i)));var n,i}function Gm(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Xm(e){return(t,n)=>{let i=!1;for(const s of Bm(e)){const e=Qm(s,t,n);if(0!==e)return e;i=i||s.field.isKeyField()}return 0}}function Qm(e,t,n){const i=e.field.isKeyField()?sf.comparator(t.key,n.key):function(e,t,n){const i=t.data.field(e),s=n.data.field(e);return null!==i&&null!==s?Kf(i,s):Pp()}(e.field,t,n);switch(e.dir){case"asc":return i;case"desc":return-1*i;default:return Pp()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[t,i]of n)if(this.equalsFn(t,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),i=this.inner[n];if(void 0===i)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<i.length;n++)if(this.equalsFn(i[n][0],e))return void(i[n]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return 1===n.length?delete this.inner[t]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(e){xf(this.inner,((t,n)=>{for(const[t,i]of n)e(t,i)}))}isEmpty(){return Tf(this.inner)}size(){return this.innerSize}constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jm=new Cf(sf.comparator);function Zm(){return Jm}const eg=new Cf(sf.comparator);function tg(...e){let t=eg;for(const n of e)t=t.insert(n.key,n);return t}function ng(e){let t=eg;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function ig(){return rg()}function sg(){return rg()}function rg(){return new Ym((e=>e.toString()),((e,t)=>e.isEqual(t)))}const og=new Cf(sf.comparator),ag=new Nf(sf.comparator);function lg(...e){let t=ag;for(const n of e)t=t.add(n);return t}const cg=new Nf(Xp);function ug(){return cg}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hg(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:yf(t)?"-0":t}}function dg(e){return{integerValue:""+e}}function pg(e,t){return vf(t)?dg(t):hg(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(){this._=void 0}}function mg(e,t,n){return e instanceof vg?bg(e,t):e instanceof wg?_g(e,t):n}function gg(e,t){var n;return e instanceof kg?Yf(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null}class yg extends fg{}class vg extends fg{constructor(e){super(),this.elements=e}}function bg(e,t){const n=Tg(t);for(const t of e.elements)n.some((e=>Hf(e,t)))||n.push(t);return{arrayValue:{values:n}}}class wg extends fg{constructor(e){super(),this.elements=e}}function _g(e,t){let n=Tg(t);for(const t of e.elements)n=n.filter((e=>!Hf(e,t)));return{arrayValue:{values:n}}}class kg extends fg{constructor(e,t){super(),this.serializer=e,this._t=t}}function xg(e){return Of(e.integerValue||e.doubleValue)}function Tg(e){return Jf(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(e,t){this.version=e,this.transformResults=t}}class Eg{static none(){return new Eg}static exists(e){return new Eg(void 0,e)}static updateTime(e){return new Eg(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}constructor(e,t){this.updateTime=e,this.exists=t}}function Ig(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class Ng{}function Sg(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new Ug(e.key,Eg.none()):new Pg(e.key,e.data,Eg.none());{const n=e.data,i=sm.empty();let s=new Nf(nf.comparator);for(let e of t.fields)if(!s.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?i.delete(e):i.set(e,t),s=s.add(e)}return new Dg(e.key,i,new Af(s.toArray()),Eg.none())}}function Ag(e,t,n,i){return e instanceof Pg?function(e,t,n,i){if(!Ig(e.precondition,t))return n;const s=e.value.clone(),r=Fg(e.fieldTransforms,i,t);return s.setAll(r),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null}(e,t,n,i):e instanceof Dg?function(e,t,n,i){if(!Ig(e.precondition,t))return n;const s=Fg(e.fieldTransforms,i,t),r=t.data;return r.setAll(Mg(e)),r.setAll(s),t.convertToFoundDocument(t.version,r).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,i):function(e,t,n){return Ig(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function Rg(e,t){let n=null;for(const i of e.fieldTransforms){const e=t.data.field(i.field),s=gg(i.transform,e||null);null!=s&&(null===n&&(n=sm.empty()),n.set(i.field,s))}return n||null}function Lg(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,i=t.fieldTransforms,!!(void 0===n&&void 0===i||n&&i&&Qp(n,i,((e,t)=>{return i=t,(n=e).field.isEqual(i.field)&&function(e,t){return e instanceof vg&&t instanceof vg||e instanceof wg&&t instanceof wg?Qp(e.elements,t.elements,Hf):e instanceof kg&&t instanceof kg?Hf(e._t,t._t):e instanceof yg&&t instanceof yg}(n.transform,i.transform);var n,i}))))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask));var n,i}class Pg extends Ng{getFieldMask(){return null}constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}}class Dg extends Ng{getFieldMask(){return this.fieldMask}constructor(e,t,n,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=s,this.type=1}}function Mg(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=e.data.field(n);t.set(n,i)}})),t}function Og(e,t,n){const i=new Map;Dp(e.length===n.length);for(let s=0;s<n.length;s++){const r=e[s],o=r.transform,a=t.data.field(r.field);i.set(r.field,mg(o,a,n[s]))}return i}function Fg(e,t,n){const i=new Map;for(const a of e){const e=a.transform,l=n.data.field(a.field);i.set(a.field,(r=l,o=t,(s=e)instanceof yg?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(o,r):s instanceof vg?bg(s,r):s instanceof wg?_g(s,r):function(e,t){const n=gg(e,t),i=xg(n)+xg(e._t);return Yf(n)&&Yf(e._t)?dg(i):hg(e.serializer,i)}(s,r)))}var s,r,o;return i}class Ug extends Ng{getFieldMask(){return null}constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class Vg extends Ng{getFieldMask(){return null}constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{applyToRemoteDocument(e,t){const n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){const o=this.mutations[t];o.key.isEqual(e.key)&&(i=o,s=e,r=n[t],i instanceof Pg?function(e,t,n){const i=e.value.clone(),s=Og(e.fieldTransforms,t,n.transformResults);i.setAll(s),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(i,s,r):i instanceof Dg?function(e,t,n){if(!Ig(e.precondition,t))return void t.convertToUnknownDocument(n.version);const i=Og(e.fieldTransforms,t,n.transformResults),s=t.data;s.setAll(Mg(e)),s.setAll(i),t.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(i,s,r):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,s,r))}var i,s,r}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Ag(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Ag(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=sg();return this.mutations.forEach((i=>{const s=e.get(i.key),r=s.overlayedDocument;let o=this.applyToLocalView(r,s.mutatedFields);o=t.has(i.key)?null:o;const a=Sg(r,o);null!==a&&n.set(i.key,a),r.isValidDocument()||r.convertToNoDocument(Jp.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),lg())}isEqual(e){return this.batchId===e.batchId&&Qp(this.mutations,e.mutations,((e,t)=>Lg(e,t)))&&Qp(this.baseMutations,e.baseMutations,((e,t)=>Lg(e,t)))}constructor(e,t,n,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=i}}class Bg{static from(e,t,n){Dp(e.mutations.length===n.length);let i=og;const s=e.mutations;for(let e=0;e<s.length;e++)i=i.insert(s[e].key,n[e].version);return new Bg(e,t,n,i)}constructor(e,t,n,i){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=i}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}constructor(e,t){this.largestBatchId=e,this.mutation=t}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qg{constructor(e){this.count=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Wg,Hg;function $g(e){switch(e){default:return Pp();case Op.CANCELLED:case Op.UNKNOWN:case Op.DEADLINE_EXCEEDED:case Op.RESOURCE_EXHAUSTED:case Op.INTERNAL:case Op.UNAVAILABLE:case Op.UNAUTHENTICATED:return!1;case Op.INVALID_ARGUMENT:case Op.NOT_FOUND:case Op.ALREADY_EXISTS:case Op.PERMISSION_DENIED:case Op.FAILED_PRECONDITION:case Op.ABORTED:case Op.OUT_OF_RANGE:case Op.UNIMPLEMENTED:case Op.DATA_LOSS:return!0}}function Kg(e){if(void 0===e)return Ap("GRPC error has no .code"),Op.UNKNOWN;switch(e){case Wg.OK:return Op.OK;case Wg.CANCELLED:return Op.CANCELLED;case Wg.UNKNOWN:return Op.UNKNOWN;case Wg.DEADLINE_EXCEEDED:return Op.DEADLINE_EXCEEDED;case Wg.RESOURCE_EXHAUSTED:return Op.RESOURCE_EXHAUSTED;case Wg.INTERNAL:return Op.INTERNAL;case Wg.UNAVAILABLE:return Op.UNAVAILABLE;case Wg.UNAUTHENTICATED:return Op.UNAUTHENTICATED;case Wg.INVALID_ARGUMENT:return Op.INVALID_ARGUMENT;case Wg.NOT_FOUND:return Op.NOT_FOUND;case Wg.ALREADY_EXISTS:return Op.ALREADY_EXISTS;case Wg.PERMISSION_DENIED:return Op.PERMISSION_DENIED;case Wg.FAILED_PRECONDITION:return Op.FAILED_PRECONDITION;case Wg.ABORTED:return Op.ABORTED;case Wg.OUT_OF_RANGE:return Op.OUT_OF_RANGE;case Wg.UNIMPLEMENTED:return Op.UNIMPLEMENTED;case Wg.DATA_LOSS:return Op.DATA_LOSS;default:return Pp()}}(Hg=Wg||(Wg={}))[Hg.OK=0]="OK",Hg[Hg.CANCELLED=1]="CANCELLED",Hg[Hg.UNKNOWN=2]="UNKNOWN",Hg[Hg.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Hg[Hg.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Hg[Hg.NOT_FOUND=5]="NOT_FOUND",Hg[Hg.ALREADY_EXISTS=6]="ALREADY_EXISTS",Hg[Hg.PERMISSION_DENIED=7]="PERMISSION_DENIED",Hg[Hg.UNAUTHENTICATED=16]="UNAUTHENTICATED",Hg[Hg.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Hg[Hg.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Hg[Hg.ABORTED=10]="ABORTED",Hg[Hg.OUT_OF_RANGE=11]="OUT_OF_RANGE",Hg[Hg.UNIMPLEMENTED=12]="UNIMPLEMENTED",Hg[Hg.INTERNAL=13]="INTERNAL",Hg[Hg.UNAVAILABLE=14]="UNAVAILABLE",Hg[Hg.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gg{static get instance(){return Xg}static getOrCreateInstance(){return null===Xg&&(Xg=new Gg),Xg}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach((t=>t(e)))}constructor(){this.onExistenceFilterMismatchCallbacks=new Map}}let Xg=null;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{static createSynthesizedRemoteEventForCurrentChange(e,t,n){const i=new Map;return i.set(e,Yg.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Qg(Jp.min(),i,ug(),Zm(),lg())}constructor(e,t,n,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=s}}class Yg{static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Yg(n,t,lg(),lg(),lg())}constructor(e,t,n,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=s}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{constructor(e,t,n,i){this.It=e,this.removedTargetIds=t,this.key=n,this.Tt=i}}class Zg{constructor(e,t){this.targetId=e,this.Et=t}}class ey{constructor(e,t,n=Pf.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=i}}class ty{get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return 0!==this.At}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=lg(),t=lg(),n=lg();return this.Rt.forEach(((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:n=n.add(i);break;default:Pp()}})),new Yg(this.vt,this.bt,e,t,n)}xt(){this.Pt=!1,this.Rt=sy()}Nt(e,t){this.Pt=!0,this.Rt=this.Rt.insert(e,t)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}constructor(){this.At=0,this.Rt=sy(),this.vt=Pf.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}}class ny{Kt(e){for(const t of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(t,e.Tt):this.Qt(t,e.key,e.Tt);for(const t of e.removedTargetIds)this.Qt(t,e.key,e.Tt)}zt(e){this.forEachTarget(e,(t=>{const n=this.jt(t);switch(e.state){case 0:this.Wt(t)&&n.Dt(e.resumeToken);break;case 1:n.$t(),n.Vt||n.xt(),n.Dt(e.resumeToken);break;case 2:n.$t(),n.Vt||this.removeTarget(t);break;case 3:this.Wt(t)&&(n.Mt(),n.Dt(e.resumeToken));break;case 4:this.Wt(t)&&(this.Ht(t),n.Dt(e.resumeToken));break;default:Pp()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Bt.forEach(((e,n)=>{this.Wt(n)&&t(n)}))}Jt(e){var t;const n=e.targetId,i=e.Et.count,s=this.Yt(n);if(s){const r=s.target;if(Pm(r))if(0===i){const e=new sf(r.path);this.Qt(n,e,om.newNoDocument(e,Jp.min()))}else Dp(1===i);else{const s=this.Zt(n);s!==i&&(this.Ht(n),this.Ut=this.Ut.add(n),null===(t=Gg.instance)||void 0===t||t.notifyOnExistenceFilterMismatch({localCacheCount:s,existenceFilterCount:e.Et.count}))}}}Xt(e){const t=new Map;this.Bt.forEach(((n,i)=>{const s=this.Yt(i);if(s){if(n.current&&Pm(s.target)){const t=new sf(s.target.path);null!==this.Lt.get(t)||this.te(i,t)||this.Qt(i,t,om.newNoDocument(t,e))}n.St&&(t.set(i,n.Ct()),n.xt())}}));let n=lg();this.qt.forEach(((e,t)=>{let i=!0;t.forEachWhile((e=>{const t=this.Yt(e);return!t||2===t.purpose||(i=!1,!1)})),i&&(n=n.add(e))})),this.Lt.forEach(((t,n)=>n.setReadTime(e)));const i=new Qg(e,t,this.Ut,this.Lt,n);return this.Lt=Zm(),this.qt=iy(),this.Ut=new Nf(Xp),i}Gt(e,t){if(!this.Wt(e))return;const n=this.te(e,t.key)?2:0;this.jt(e).Nt(t.key,n),this.Lt=this.Lt.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ee(t.key).add(e))}Qt(e,t,n){if(!this.Wt(e))return;const i=this.jt(e);this.te(e,t)?i.Nt(t,1):i.kt(t),this.qt=this.qt.insert(t,this.ee(t).delete(e)),n&&(this.Lt=this.Lt.insert(t,n))}removeTarget(e){this.Bt.delete(e)}Zt(e){const t=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let t=this.Bt.get(e);return t||(t=new ty,this.Bt.set(e,t)),t}ee(e){let t=this.qt.get(e);return t||(t=new Nf(Xp),this.qt=this.qt.insert(e,t)),t}Wt(e){const t=null!==this.Yt(e);return t||Sp("WatchChangeAggregator","Detected inactive target",e),t}Yt(e){const t=this.Bt.get(e);return t&&t.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new ty),this.Ft.getRemoteKeysForTarget(e).forEach((t=>{this.Qt(e,t,null)}))}te(e,t){return this.Ft.getRemoteKeysForTarget(e).has(t)}constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=Zm(),this.qt=iy(),this.Ut=new Nf(Xp)}}function iy(){return new Cf(sf.comparator)}function sy(){return new Cf(sf.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ry={asc:"ASCENDING",desc:"DESCENDING"},oy={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ay={and:"AND",or:"OR"};class ly{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function cy(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function uy(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function hy(e,t){return cy(e,t.toTimestamp())}function dy(e){return Dp(!!e),Jp.fromTimestamp(function(e){const t=Mf(e);return new Yp(t.seconds,t.nanos)}(e))}function py(e,t){return function(e){return new ef(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function fy(e){const t=ef.fromString(e);return Dp(Dy(t)),t}function my(e,t){return py(e.databaseId,t.path)}function gy(e,t){const n=fy(t);if(n.get(1)!==e.databaseId.projectId)throw new Fp(Op.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new Fp(Op.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new sf(wy(n))}function yy(e,t){return py(e.databaseId,t)}function vy(e){const t=fy(e);return 4===t.length?ef.emptyPath():wy(t)}function by(e){return new ef(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function wy(e){return Dp(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function _y(e,t,n){return{name:my(e,t),fields:n.value.mapValue.fields}}function ky(e,t){let n;if(t instanceof Pg)n={update:_y(e,t.key,t.value)};else if(t instanceof Ug)n={delete:my(e,t.key)};else if(t instanceof Dg)n={update:_y(e,t.key,t.data),updateMask:Py(t.fieldMask)};else{if(!(t instanceof Vg))return Pp();n={verify:my(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof yg)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof vg)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof wg)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof kg)return{fieldPath:t.field.canonicalString(),increment:n._t};throw Pp()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:hy(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:Pp()}(e,t.precondition)),n}function xy(e,t){return{documents:[yy(e,t.path)]}}function Ty(e,t){const n={structuredQuery:{}},i=t.path;null!==t.collectionGroup?(n.parent=yy(e,i),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=yy(e,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const s=function(e){if(0!==e.length)return Ly(fm.create(e,"and"))}(t.filters);s&&(n.structuredQuery.where=s);const r=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:Ay(e.field),direction:Iy(e.dir)}}(e)))}(t.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(e,t){return e.useProto3Json||gf(t)?t:{value:t}}(e,t.limit);var a;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function Cy(e){let t=vy(e.parent);const n=e.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){Dp(1===i);const e=n.from[0];e.allDescendants?s=e.collectionId:t=t.child(e.collectionId)}let r=[];n.where&&(r=function(e){const t=Ey(e);return t instanceof fm&&gm(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>{return new um(Ry((t=e).field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction));var t})));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,gf(t)?null:t}(n.limit));let l=null;n.startAt&&(l=function(e){const t=!!e.before,n=e.values||[];return new am(n,t)}(n.startAt));let c=null;return n.endAt&&(c=function(e){const t=!e.before,n=e.values||[];return new am(n,t)}(n.endAt)),Mm(t,s,o,r,a,"F",l,c)}function Ey(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Ry(e.unaryFilter.field);return pm.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Ry(e.unaryFilter.field);return pm.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ry(e.unaryFilter.field);return pm.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Ry(e.unaryFilter.field);return pm.create(s,"!=",{nullValue:"NULL_VALUE"});default:return Pp()}}(e):void 0!==e.fieldFilter?(n=e,pm.create(Ry(n.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Pp()}}(n.fieldFilter.op),n.fieldFilter.value)):void 0!==e.compositeFilter?(t=e,fm.create(t.compositeFilter.filters.map((e=>Ey(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return Pp()}}(t.compositeFilter.op))):Pp();var t,n}function Iy(e){return ry[e]}function Ny(e){return oy[e]}function Sy(e){return ay[e]}function Ay(e){return{fieldPath:e.canonicalString()}}function Ry(e){return nf.fromServerFormat(e.fieldPath)}function Ly(e){return e instanceof pm?function(e){if("=="===e.op){if(em(e.value))return{unaryFilter:{field:Ay(e.field),op:"IS_NAN"}};if(Zf(e.value))return{unaryFilter:{field:Ay(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(em(e.value))return{unaryFilter:{field:Ay(e.field),op:"IS_NOT_NAN"}};if(Zf(e.value))return{unaryFilter:{field:Ay(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ay(e.field),op:Ny(e.op),value:e.value}}}(e):e instanceof fm?function(e){const t=e.getFilters().map((e=>Ly(e)));return 1===t.length?t[0]:{compositeFilter:{op:Sy(e.op),filters:t}}}(e):Pp()}function Py(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Dy(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{withSequenceNumber(e){return new My(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new My(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new My(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}constructor(e,t,n,i,s=Jp.min(),r=Jp.min(),o=Pf.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=o}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(e){this.se=e}}function Fy(e){const t=Cy({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?qm(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy{oe(e,t){this.ue(e,t),t.ce()}ue(e,t){if("nullValue"in e)this.ae(t,5);else if("booleanValue"in e)this.ae(t,10),t.he(e.booleanValue?1:0);else if("integerValue"in e)this.ae(t,15),t.he(Of(e.integerValue));else if("doubleValue"in e){const n=Of(e.doubleValue);isNaN(n)?this.ae(t,13):(this.ae(t,15),yf(n)?t.he(0):t.he(n))}else if("timestampValue"in e){const n=e.timestampValue;this.ae(t,20),"string"==typeof n?t.le(n):(t.le(`${n.seconds||""}`),t.he(n.nanos||0))}else if("stringValue"in e)this.fe(e.stringValue,t),this.de(t);else if("bytesValue"in e)this.ae(t,30),t.we(Ff(e.bytesValue)),this.de(t);else if("referenceValue"in e)this._e(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.ae(t,45),t.he(n.latitude||0),t.he(n.longitude||0)}else"mapValue"in e?im(e)?this.ae(t,Number.MAX_SAFE_INTEGER):(this.me(e.mapValue,t),this.de(t)):"arrayValue"in e?(this.ge(e.arrayValue,t),this.de(t)):Pp()}fe(e,t){this.ae(t,25),this.ye(e,t)}ye(e,t){t.le(e)}me(e,t){const n=e.fields||{};this.ae(t,55);for(const e of Object.keys(n))this.fe(e,t),this.ue(n[e],t)}ge(e,t){const n=e.values||[];this.ae(t,50);for(const e of n)this.ue(e,t)}_e(e,t){this.ae(t,37),sf.fromName(e).path.forEach((e=>{this.ae(t,60),this.ye(e,t)}))}ae(e,t){e.he(t)}de(e){e.he(2)}constructor(){}}Uy.pe=new Uy;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vy{addToCollectionParentIndex(e,t){return this.He.add(t),pf.resolve()}getCollectionParents(e,t){return pf.resolve(this.He.getEntries(t))}addFieldIndex(e,t){return pf.resolve()}deleteFieldIndex(e,t){return pf.resolve()}getDocumentsMatchingTarget(e,t){return pf.resolve(null)}getIndexType(e,t){return pf.resolve(0)}getFieldIndexes(e,t){return pf.resolve([])}getNextCollectionGroupToUpdate(e){return pf.resolve(null)}getMinOffset(e,t){return pf.resolve(lf.min())}getMinOffsetFromCollectionGroup(e,t){return pf.resolve(lf.min())}updateCollectionGroup(e,t,n){return pf.resolve()}updateIndexEntries(e,t){return pf.resolve()}constructor(){this.He=new zy}}class zy{add(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t]||new Nf(ef.comparator),s=!i.has(n);return this.index[t]=i.add(n),s}has(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t];return i&&i.has(n)}getEntries(e){return(this.index[e]||new Nf(ef.comparator)).toArray()}constructor(){this.index={}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class By{static withCacheSize(e){return new By(e,By.DEFAULT_COLLECTION_PERCENTILE,By.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */By.DEFAULT_COLLECTION_PERCENTILE=10,By.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,By.DEFAULT=new By(41943040,By.DEFAULT_COLLECTION_PERCENTILE,By.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),By.DISABLED=new By(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jy{next(){return this.Rn+=2,this.Rn}static vn(){return new jy(0)}static bn(){return new jy(-1)}constructor(e){this.Rn=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qy{addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,om.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?pf.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}constructor(){this.changes=new Ym((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wy{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((i=>(n=i,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&Ag(n.mutation,e,Af.empty(),Yp.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,lg()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=lg()){const i=ig();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,n).next((e=>{let t=tg();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=ig();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,lg())))}populateOverlays(e,t,n){const i=[];return n.forEach((e=>{t.has(e)||i.push(e)})),this.documentOverlayCache.getOverlays(e,i).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,i){let s=Zm();const r=rg(),o=rg();return t.forEach(((e,t)=>{const o=n.get(t.key);i.has(t.key)&&(void 0===o||o.mutation instanceof Dg)?s=s.insert(t.key,t):void 0!==o?(r.set(t.key,o.mutation.getFieldMask()),Ag(o.mutation,t,o.mutation.getFieldMask(),Yp.now())):r.set(t.key,Af.empty())})),this.recalculateAndSaveOverlays(e,s).next((e=>(e.forEach(((e,t)=>r.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new Wy(t,null!==(n=r.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=rg();let i=new Cf(((e,t)=>e-t)),s=lg();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const s of e)s.keys().forEach((e=>{const r=t.get(e);if(null===r)return;let o=n.get(e)||Af.empty();o=s.applyToLocalView(r,o),n.set(e,o);const a=(i.get(s.batchId)||lg()).add(e);i=i.insert(s.batchId,a)}))})).next((()=>{const r=[],o=i.getReverseIterator();for(;o.hasNext();){const i=o.getNext(),a=i.key,l=i.value,c=sg();l.forEach((e=>{if(!s.has(e)){const i=Sg(t.get(e),n.get(e));null!==i&&c.set(e,i),s=s.add(e)}})),r.push(this.documentOverlayCache.saveOverlays(e,a,c))}return pf.waitFor(r)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n){return function(e){return sf.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):zm(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,i).next((s=>{const r=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,i-s.size):pf.resolve(ig());let o=-1,a=s;return r.next((t=>pf.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),s.get(t)?pf.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,s))).next((()=>this.computeViews(e,a,t,lg()))).next((e=>({batchId:o,changes:ng(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new sf(t)).next((e=>{let t=tg();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n){const i=t.collectionGroup;let s=tg();return this.indexManager.getCollectionParents(e,i).next((r=>pf.forEach(r,(r=>{const o=function(e,t){return new Dm(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,r.child(i));return this.getDocumentsMatchingCollectionQuery(e,o,n).next((e=>{e.forEach(((e,t)=>{s=s.insert(e,t)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(e,t,n){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i)))).next((e=>{i.forEach(((t,n)=>{const i=n.getKey();null===e.get(i)&&(e=e.insert(i,om.newInvalidDocument(i)))}));let n=tg();return e.forEach(((e,s)=>{const r=i.get(e);void 0!==r&&Ag(r.mutation,s,Af.empty(),Yp.now()),Km(t,s)&&(n=n.insert(e,s))})),n}))}constructor(e,t,n,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y{getBundleMetadata(e,t){return pf.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){var n;return this.Zn.set(t.id,{id:(n=t).id,version:n.version,createTime:dy(n.createTime)}),pf.resolve()}getNamedQuery(e,t){return pf.resolve(this.Xn.get(t))}saveNamedQuery(e,t){return this.Xn.set(t.name,function(e){return{name:e.name,query:Fy(e.bundledQuery),readTime:dy(e.readTime)}}(t)),pf.resolve()}constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ky{getOverlay(e,t){return pf.resolve(this.overlays.get(t))}getOverlays(e,t){const n=ig();return pf.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,i)=>{this.re(e,t,i)})),pf.resolve()}removeOverlaysForBatchId(e,t,n){const i=this.ts.get(n);return void 0!==i&&(i.forEach((e=>this.overlays=this.overlays.remove(e))),this.ts.delete(n)),pf.resolve()}getOverlaysForCollection(e,t,n){const i=ig(),s=t.length+1,r=new sf(t.child("")),o=this.overlays.getIteratorFrom(r);for(;o.hasNext();){const e=o.getNext().value,r=e.getKey();if(!t.isPrefixOf(r.path))break;r.path.length===s&&e.largestBatchId>n&&i.set(e.getKey(),e)}return pf.resolve(i)}getOverlaysForCollectionGroup(e,t,n,i){let s=new Cf(((e,t)=>e-t));const r=this.overlays.getIterator();for(;r.hasNext();){const e=r.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=s.get(e.largestBatchId);null===t&&(t=ig(),s=s.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=ig(),a=s.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((e,t)=>o.set(e,t))),!(o.size()>=i)););return pf.resolve(o)}re(e,t,n){const i=this.overlays.get(n.key);if(null!==i){const e=this.ts.get(i.largestBatchId).delete(n.key);this.ts.set(i.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new jg(t,n));let s=this.ts.get(t);void 0===s&&(s=lg(),this.ts.set(t,s)),this.ts.set(t,s.add(n.key))}constructor(){this.overlays=new Cf(sf.comparator),this.ts=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{isEmpty(){return this.es.isEmpty()}addReference(e,t){const n=new Xy(e,t);this.es=this.es.add(n),this.ss=this.ss.add(n)}os(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.us(new Xy(e,t))}cs(e,t){e.forEach((e=>this.removeReference(e,t)))}hs(e){const t=new sf(new ef([])),n=new Xy(t,e),i=new Xy(t,e+1),s=[];return this.ss.forEachInRange([n,i],(e=>{this.us(e),s.push(e.key)})),s}ls(){this.es.forEach((e=>this.us(e)))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const t=new sf(new ef([])),n=new Xy(t,e),i=new Xy(t,e+1);let s=lg();return this.ss.forEachInRange([n,i],(e=>{s=s.add(e.key)})),s}containsKey(e){const t=new Xy(e,0),n=this.es.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}constructor(){this.es=new Nf(Xy.ns),this.ss=new Nf(Xy.rs)}}class Xy{static ns(e,t){return sf.comparator(e.key,t.key)||Xp(e.ds,t.ds)}static rs(e,t){return Xp(e.ds,t.ds)||sf.comparator(e.key,t.key)}constructor(e,t){this.key=e,this.ds=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{checkEmpty(e){return pf.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const r=new zg(s,t,n,i);this.mutationQueue.push(r);for(const t of i)this._s=this._s.add(new Xy(t.key,s)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return pf.resolve(r)}lookupMutationBatch(e,t){return pf.resolve(this.gs(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=this.ys(n),s=i<0?0:i;return pf.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return pf.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(e){return pf.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Xy(t,0),i=new Xy(t,Number.POSITIVE_INFINITY),s=[];return this._s.forEachInRange([n,i],(e=>{const t=this.gs(e.ds);s.push(t)})),pf.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Nf(Xp);return t.forEach((e=>{const t=new Xy(e,0),i=new Xy(e,Number.POSITIVE_INFINITY);this._s.forEachInRange([t,i],(e=>{n=n.add(e.ds)}))})),pf.resolve(this.ps(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1;let s=n;sf.isDocumentKey(s)||(s=s.child(""));const r=new Xy(new sf(s),0);let o=new Nf(Xp);return this._s.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===i&&(o=o.add(e.ds)),!0)}),r),pf.resolve(this.ps(o))}ps(e){const t=[];return e.forEach((e=>{const n=this.gs(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){Dp(0===this.Is(t.batchId,"removed")),this.mutationQueue.shift();let n=this._s;return pf.forEach(t.mutations,(i=>{const s=new Xy(i.key,t.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this._s=n}))}En(e){}containsKey(e,t){const n=new Xy(t,0),i=this._s.firstAfterOrEqual(n);return pf.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,pf.resolve()}Is(e,t){return this.ys(e)}ys(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}gs(e){const t=this.ys(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this._s=new Nf(Xy.ns)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,i=this.docs.get(n),s=i?i.size:0,r=this.Ts(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:r}),this.size+=r-s,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return pf.resolve(n?n.document.mutableCopy():om.newInvalidDocument(t))}getEntries(e,t){let n=Zm();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():om.newInvalidDocument(e))})),pf.resolve(n)}getDocumentsMatchingQuery(e,t,n,i){let s=Zm();const r=t.path,o=new sf(r.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:e,value:{document:o}}=a.getNext();if(!r.isPrefixOf(e.path))break;e.path.length>r.length+1||cf(af(o),n)<=0||(i.has(o.key)||Km(t,o))&&(s=s.insert(o.key,o.mutableCopy()))}return pf.resolve(s)}getAllFromCollectionGroup(e,t,n,i){Pp()}Es(e,t){return pf.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new Jy(this)}getSize(e){return pf.resolve(this.size)}constructor(e){this.Ts=e,this.docs=new Cf(sf.comparator),this.size=0}}class Jy extends qy{applyChanges(e){const t=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?t.push(this.Jn.addEntry(e,i)):this.Jn.removeEntry(n)})),pf.waitFor(t)}getFromCache(e,t){return this.Jn.getEntry(e,t)}getAllFromCache(e,t){return this.Jn.getEntries(e,t)}constructor(e){super(),this.Jn=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{forEachTarget(e,t){return this.As.forEach(((e,n)=>t(n))),pf.resolve()}getLastRemoteSnapshotVersion(e){return pf.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return pf.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),pf.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Rs&&(this.Rs=t),pf.resolve()}Sn(e){this.As.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.bs=new jy(t),this.highestTargetId=t),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,t){return this.Sn(t),this.targetCount+=1,pf.resolve()}updateTargetData(e,t){return this.Sn(t),pf.resolve()}removeTargetData(e,t){return this.As.delete(t.target),this.vs.hs(t.targetId),this.targetCount-=1,pf.resolve()}removeTargets(e,t,n){let i=0;const s=[];return this.As.forEach(((r,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.As.delete(r),s.push(this.removeMatchingKeysForTargetId(e,o.targetId)),i++)})),pf.waitFor(s).next((()=>i))}getTargetCount(e){return pf.resolve(this.targetCount)}getTargetData(e,t){const n=this.As.get(t)||null;return pf.resolve(n)}addMatchingKeys(e,t,n){return this.vs.os(t,n),pf.resolve()}removeMatchingKeys(e,t,n){this.vs.cs(t,n);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach((t=>{s.push(i.markPotentiallyOrphaned(e,t))})),pf.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.vs.hs(t),pf.resolve()}getMatchingKeysForTargetId(e,t){const n=this.vs.fs(t);return pf.resolve(n)}containsKey(e,t){return pf.resolve(this.vs.containsKey(t))}constructor(e){this.persistence=e,this.As=new Ym((e=>Rm(e)),Lm),this.lastRemoteSnapshotVersion=Jp.min(),this.highestTargetId=0,this.Rs=0,this.vs=new Gy,this.targetCount=0,this.bs=jy.vn()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Ky,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Ps[e.toKey()];return n||(n=new Qy(t,this.referenceDelegate),this.Ps[e.toKey()]=n),n}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,t,n){Sp("MemoryPersistence","Starting transaction:",e);const i=new tv(this.Vs.next());return this.referenceDelegate.Ns(),n(i).next((e=>this.referenceDelegate.ks(i).next((()=>e)))).toPromise().then((e=>(i.raiseOnCommittedEvent(),e)))}Os(e,t){return pf.or(Object.values(this.Ps).map((n=>()=>n.containsKey(e,t))))}constructor(e,t){this.Ps={},this.overlays={},this.Vs=new mf(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new Zy(this),this.indexManager=new Vy,this.remoteDocumentCache=function(e){return new Yy(e)}((e=>this.referenceDelegate.Cs(e))),this.serializer=new Oy(t),this.xs=new $y(this.serializer)}}class tv extends hf{constructor(e){super(),this.currentSequenceNumber=e}}class nv{static Fs(e){return new nv(e)}get Bs(){if(this.Ms)return this.Ms;throw Pp()}addReference(e,t,n){return this.$s.addReference(n,t),this.Bs.delete(n.toString()),pf.resolve()}removeReference(e,t,n){return this.$s.removeReference(n,t),this.Bs.add(n.toString()),pf.resolve()}markPotentiallyOrphaned(e,t){return this.Bs.add(t.toString()),pf.resolve()}removeTarget(e,t){this.$s.hs(t.targetId).forEach((e=>this.Bs.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Bs.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Ns(){this.Ms=new Set}ks(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return pf.forEach(this.Bs,(n=>{const i=sf.fromPath(n);return this.Ls(e,i).next((e=>{e||t.removeEntry(i,Jp.min())}))})).next((()=>(this.Ms=null,t.apply(e))))}updateLimboDocument(e,t){return this.Ls(e,t).next((e=>{e?this.Bs.delete(t.toString()):this.Bs.add(t.toString())}))}Cs(e){return 0}Ls(e,t){return pf.or([()=>pf.resolve(this.$s.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Os(e,t)])}constructor(e){this.persistence=e,this.$s=new Gy,this.Ms=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class iv{static Di(e,t){let n=lg(),i=lg();for(const e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:i=i.add(e.doc.key)}return new iv(e,t.fromCache,n,i)}constructor(e,t,n,i){this.targetId=e,this.fromCache=t,this.Vi=n,this.Si=i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{initialize(e,t){this.xi=e,this.indexManager=t,this.Ci=!0}getDocumentsMatchingQuery(e,t,n,i){return this.Ni(e,t).next((s=>s||this.ki(e,t,i,n))).next((n=>n||this.Oi(e,t)))}Ni(e,t){if(Fm(t))return pf.resolve(null);let n=jm(t);return this.indexManager.getIndexType(e,n).next((i=>0===i?null:(null!==t.limit&&1===i&&(t=qm(t,null,"F"),n=jm(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((i=>{const s=lg(...i);return this.xi.getDocuments(e,s).next((i=>this.indexManager.getMinOffset(e,n).next((n=>{const r=this.$i(t,i);return this.Mi(t,r,s,n.readTime)?this.Ni(e,qm(t,null,"F")):this.Fi(e,r,t,n)}))))})))))}ki(e,t,n,i){return Fm(t)||i.isEqual(Jp.min())?this.Oi(e,t):this.xi.getDocuments(e,n).next((s=>{const r=this.$i(t,s);return this.Mi(t,r,n,i)?this.Oi(e,t):(Np()<=Se.DEBUG&&Sp("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),$m(t)),this.Fi(e,r,t,of(i,-1)))}))}$i(e,t){let n=new Nf(Xm(e));return t.forEach(((t,i)=>{Km(e,i)&&(n=n.add(i))})),n}Mi(e,t,n,i){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const s="F"===e.limitType?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Oi(e,t){return Np()<=Se.DEBUG&&Sp("QueryEngine","Using full collection scan to execute query:",$m(t)),this.xi.getDocumentsMatchingQuery(e,t,lf.min())}Fi(e,t,n,i){return this.xi.getDocumentsMatchingQuery(e,n,i).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}constructor(){this.Ci=!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Hy(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Li)))}constructor(e,t,n,i){this.persistence=e,this.Bi=t,this.serializer=i,this.Li=new Cf(Xp),this.qi=new Ym((e=>Rm(e)),Lm),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(n)}}function ov(e,t,n,i){return new rv(e,t,n,i)}async function av(e,t){const n=Mp(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let i;return n.mutationQueue.getAllMutationBatches(e).next((s=>(i=s,n.Gi(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const s=[],r=[];let o=lg();for(const e of i){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){r.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({Qi:e,removedBatchIds:s,addedBatchIds:r})))}))}))}function lv(e){const t=Mp(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Ds.getLastRemoteSnapshotVersion(e)))}function cv(e,t,n){let i=lg(),s=lg();return n.forEach((e=>i=i.add(e))),t.getEntries(e,i).next((e=>{let i=Zm();return n.forEach(((n,r)=>{const o=e.get(n);r.isFoundDocument()!==o.isFoundDocument()&&(s=s.add(n)),r.isNoDocument()&&r.version.isEqual(Jp.min())?(t.removeEntry(n,r.readTime),i=i.insert(n,r)):!o.isValidDocument()||r.version.compareTo(o.version)>0||0===r.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(r),i=i.insert(n,r)):Sp("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",r.version)})),{zi:i,ji:s}}))}function uv(e,t){const n=Mp(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function hv(e,t){const n=Mp(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let i;return n.Ds.getTargetData(e,t).next((s=>s?(i=s,pf.resolve(i)):n.Ds.allocateTargetId(e).next((s=>(i=new My(t,s,0,e.currentSequenceNumber),n.Ds.addTargetData(e,i).next((()=>i)))))))})).then((e=>{const i=n.Li.get(e.targetId);return(null===i||e.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Li=n.Li.insert(e.targetId,e),n.qi.set(t,e.targetId)),e}))}async function dv(e,t,n){const i=Mp(e),s=i.Li.get(t),r=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",r,(e=>i.persistence.referenceDelegate.removeTarget(e,s)))}catch(e){if(!ff(e))throw e;Sp("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}i.Li=i.Li.remove(t),i.qi.delete(s.target)}function pv(e,t,n){const i=Mp(e);let s=Jp.min(),r=lg();return i.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const i=Mp(e),s=i.qi.get(n);return void 0!==s?pf.resolve(i.Li.get(s)):i.Ds.getTargetData(t,n)}(i,e,jm(t)).next((t=>{if(t)return s=t.lastLimboFreeSnapshotVersion,i.Ds.getMatchingKeysForTargetId(e,t.targetId).next((e=>{r=e}))})).next((()=>i.Bi.getDocumentsMatchingQuery(e,t,n?s:Jp.min(),n?r:lg()))).next((e=>(fv(i,Gm(t),e),{documents:e,Wi:r})))))}function fv(e,t,n){let i=e.Ui.get(t)||Jp.min();n.forEach(((e,t)=>{t.readTime.compareTo(i)>0&&(i=t.readTime)})),e.Ui.set(t,i)}class mv{tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}constructor(){this.activeTargetIds=ug()}}class gv{addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,t,n){this.Lr[e]=t}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new mv,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}constructor(){this.Br=new mv,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv{qr(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){Sp("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){Sp("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bv=null;function wv(){return null===bv?bv=268435456+Math.round(2147483648*Math.random()):bv++,"0x"+bv.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const _v={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv{Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xv extends class{get uo(){return!1}co(e,t,n,i,s){const r=wv(),o=this.ao(e,t);Sp("RestConnection",`Sending RPC '${e}' ${r}:`,o,n);const a={};return this.ho(a,i,s),this.lo(e,o,a,n).then((t=>(Sp("RestConnection",`Received RPC '${e}' ${r}: `,t),t)),(t=>{throw Rp("RestConnection",`RPC '${e}' ${r} failed with error: `,t,"url: ",o,"request:",n),t}))}fo(e,t,n,i,s,r){return this.co(e,t,n,i,s)}ho(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ep,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}ao(e,t){const n=_v[e];return`${this.ro}/v1/${t}:${n}`}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.ro=t+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}}{lo(e,t,n,i){const s=wv();return new Promise(((r,o)=>{const a=new Tp;a.setWithCredentials(!0),a.listenOnce(bp.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case vp.NO_ERROR:const t=a.getResponseJson();Sp("WebChannelConnection",`XHR for RPC '${e}' ${s} received:`,JSON.stringify(t)),r(t);break;case vp.TIMEOUT:Sp("WebChannelConnection",`RPC '${e}' ${s} timed out`),o(new Fp(Op.DEADLINE_EXCEEDED,"Request time out"));break;case vp.HTTP_ERROR:const n=a.getStatus();if(Sp("WebChannelConnection",`RPC '${e}' ${s} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(Op).indexOf(t)>=0?t:Op.UNKNOWN}(t.status);o(new Fp(e,t.message))}else o(new Fp(Op.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new Fp(Op.UNAVAILABLE,"Connection failed."));break;default:Pp()}}finally{Sp("WebChannelConnection",`RPC '${e}' ${s} completed.`)}}));const l=JSON.stringify(i);Sp("WebChannelConnection",`RPC '${e}' ${s} sending request:`,i),a.send(t,"POST",l,n,15)}))}wo(e,t,n){const i=wv(),s=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=gp(),o=yp(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new kp({})),this.ho(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const l=s.join("");Sp("WebChannelConnection",`Creating RPC '${e}' stream ${i}: ${l}`,a);const c=r.createWebChannel(l,a);let u=!1,h=!1;const d=new kv({Wr:t=>{h?Sp("WebChannelConnection",`Not sending because RPC '${e}' stream ${i} is closed:`,t):(u||(Sp("WebChannelConnection",`Opening RPC '${e}' stream ${i} transport.`),c.open(),u=!0),Sp("WebChannelConnection",`RPC '${e}' stream ${i} sending:`,t),c.send(t))},Hr:()=>c.close()}),p=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return p(c,xp.EventType.OPEN,(()=>{h||Sp("WebChannelConnection",`RPC '${e}' stream ${i} transport opened.`)})),p(c,xp.EventType.CLOSE,(()=>{h||(h=!0,Sp("WebChannelConnection",`RPC '${e}' stream ${i} transport closed`),d.so())})),p(c,xp.EventType.ERROR,(t=>{h||(h=!0,Rp("WebChannelConnection",`RPC '${e}' stream ${i} transport errored:`,t),d.so(new Fp(Op.UNAVAILABLE,"The operation could not be completed")))})),p(c,xp.EventType.MESSAGE,(t=>{var n;if(!h){const s=t.data[0];Dp(!!s);const r=s,o=r.error||(null===(n=r[0])||void 0===n?void 0:n.error);if(o){Sp("WebChannelConnection",`RPC '${e}' stream ${i} received error:`,o);const t=o.status;let n=function(e){const t=Wg[e];if(void 0!==t)return Kg(t)}(t),s=o.message;void 0===n&&(n=Op.INTERNAL,s="Unknown error status: "+t+" with message "+o.message),h=!0,d.so(new Fp(n,s)),c.close()}else Sp("WebChannelConnection",`RPC '${e}' stream ${i} received:`,s),d.io(s)}})),p(o,wp.STAT_EVENT,(t=>{t.stat===_p.PROXY?Sp("WebChannelConnection",`RPC '${e}' stream ${i} detected buffering proxy`):t.stat===_p.NOPROXY&&Sp("WebChannelConnection",`RPC '${e}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{d.no()}),0),d}constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tv(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cv(e){return new ly(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev{reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const t=Math.floor(this.po+this.Ro()),n=Math.max(0,Date.now()-this.To),i=Math.max(0,t-n);i>0&&Sp("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.po} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,i,(()=>(this.To=Date.now(),e()))),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){null!==this.Io&&(this.Io.skipDelay(),this.Io=null)}cancel(){null!==this.Io&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}constructor(e,t,n=1e3,i=1.5,s=6e4){this.Ws=e,this.timerId=t,this._o=n,this.mo=i,this.yo=s,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv{xo(){return 1===this.state||5===this.state||this.No()}No(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&null===this.So&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,(()=>this.Mo())))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,t){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,4!==e?this.Co.reset():t&&t.code===Op.RESOURCE_EXHAUSTED?(Ap(t.toString()),Ap("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):t&&t.code===Op.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),t=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Vo===t&&this.Ko(e,n)}),(t=>{e((()=>{const e=new Fp(Op.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Go(e)}))}))}Ko(e,t){const n=this.Uo(this.Vo);this.stream=this.Qo(e,t),this.stream.Jr((()=>{n((()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,(()=>(this.No()&&(this.state=3),Promise.resolve()))),this.listener.Jr())))})),this.stream.Zr((e=>{n((()=>this.Go(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}ko(){this.state=5,this.Co.Ao((async()=>{this.state=0,this.start()}))}Go(e){return Sp("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return t=>{this.Ws.enqueueAndForget((()=>this.Vo===e?t():(Sp("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}constructor(e,t,n,i,s,r,o,a){this.Ws=e,this.bo=n,this.Po=i,this.connection=s,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new Ev(e,t)}}class Nv extends Iv{Qo(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.Co.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const i=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:Pp()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],r=function(e,t){return e.useProto3Json?(Dp(void 0===t||"string"==typeof t),Pf.fromBase64String(t||"")):(Dp(void 0===t||t instanceof Uint8Array),Pf.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?Op.UNKNOWN:Kg(e.code);return new Fp(t,e.message||"")}(o);n=new ey(i,s,r,a||null)}else if("documentChange"in t){t.documentChange;const i=t.documentChange;i.document,i.document.name,i.document.updateTime;const s=gy(e,i.document.name),r=dy(i.document.updateTime),o=i.document.createTime?dy(i.document.createTime):Jp.min(),a=new sm({mapValue:{fields:i.document.fields}}),l=om.newFoundDocument(s,r,o,a),c=i.targetIds||[],u=i.removedTargetIds||[];n=new Jg(c,u,l.key,l)}else if("documentDelete"in t){t.documentDelete;const i=t.documentDelete;i.document;const s=gy(e,i.document),r=i.readTime?dy(i.readTime):Jp.min(),o=om.newNoDocument(s,r),a=i.removedTargetIds||[];n=new Jg([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const i=t.documentRemove;i.document;const s=gy(e,i.document),r=i.removedTargetIds||[];n=new Jg([],r,s,null)}else{if(!("filter"in t))return Pp();{t.filter;const e=t.filter;e.targetId;const i=e.count||0,s=new qg(i),r=e.targetId;n=new Zg(r,s)}}return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return Jp.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?Jp.min():t.readTime?dy(t.readTime):Jp.min()}(e);return this.listener.zo(t,n)}jo(e){const t={};t.database=by(this.serializer),t.addTarget=function(e,t){let n;const i=t.target;return n=Pm(i)?{documents:xy(e,i)}:{query:Ty(e,i)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=uy(e,t.resumeToken):t.snapshotVersion.compareTo(Jp.min())>0&&(n.readTime=cy(e,t.snapshotVersion.toTimestamp())),n}(this.serializer,e);const n=function(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Pp()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.Fo(t)}Wo(e){const t={};t.database=by(this.serializer),t.removeTarget=e,this.Fo(t)}constructor(e,t,n,i,s,r){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,i,r),this.serializer=s}}class Sv extends Iv{get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,t){return this.connection.wo("Write",e,t)}onMessage(e){if(Dp(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const i=(t=e.writeResults,n=e.commitTime,t&&t.length>0?(Dp(void 0!==n),t.map((e=>function(e,t){let n=e.updateTime?dy(e.updateTime):dy(t);return n.isEqual(Jp.min())&&(n=dy(t)),new Cg(n,e.transformResults||[])}(e,n)))):[]),s=dy(e.commitTime);return this.listener.Zo(s,i)}var t,n;return Dp(!e.writeResults||0===e.writeResults.length),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=by(this.serializer),this.Fo(e)}Yo(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>ky(this.serializer,e)))};this.Fo(t)}constructor(e,t,n,i,s,r){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,i,r),this.serializer=s,this.Ho=!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av extends class{}{nu(){if(this.eu)throw new Fp(Op.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,t,n){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.co(e,t,n,i,s))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Op.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Fp(Op.UNKNOWN,e.toString())}))}fo(e,t,n,i){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,r])=>this.connection.fo(e,t,n,s,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Op.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Fp(Op.UNKNOWN,e.toString())}))}terminate(){this.eu=!0}constructor(e,t,n,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=i,this.eu=!1}}class Rv{ou(){0===this.su&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve()))))}au(e){"Online"===this.state?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,"Online"===e&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(Ap(t),this.ru=!1):Sp("OnlineStateTracker",t)}hu(){null!==this.iu&&(this.iu.cancel(),this.iu=null)}constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lv{constructor(e,t,n,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=s,this._u.qr((e=>{n.enqueueAndForget((async()=>{Bv(this)&&(Sp("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=Mp(e);t.du.add(4),await Dv(t),t.mu.set("Unknown"),t.du.delete(4),await Pv(t)}(this))}))})),this.mu=new Rv(n,i)}}async function Pv(e){if(Bv(e))for(const t of e.wu)await t(!0)}async function Dv(e){for(const t of e.wu)await t(!1)}function Mv(e,t){const n=Mp(e);n.fu.has(t.targetId)||(n.fu.set(t.targetId,t),zv(n)?Vv(n):rb(n).No()&&Fv(n,t))}function Ov(e,t){const n=Mp(e),i=rb(n);n.fu.delete(t),i.No()&&Uv(n,t),0===n.fu.size&&(i.No()?i.$o():Bv(n)&&n.mu.set("Unknown"))}function Fv(e,t){e.gu.Ot(t.targetId),rb(e).jo(t)}function Uv(e,t){e.gu.Ot(t),rb(e).Wo(t)}function Vv(e){e.gu=new ny({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ne:t=>e.fu.get(t)||null}),rb(e).start(),e.mu.ou()}function zv(e){return Bv(e)&&!rb(e).xo()&&e.fu.size>0}function Bv(e){return 0===Mp(e).du.size}function jv(e){e.gu=void 0}async function qv(e){e.fu.forEach(((t,n)=>{Fv(e,t)}))}async function Wv(e,t){jv(e),zv(e)?(e.mu.au(t),Vv(e)):e.mu.set("Unknown")}async function Hv(e,t,n){if(e.mu.set("Online"),t instanceof ey&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const i of t.targetIds)e.fu.has(i)&&(await e.remoteSyncer.rejectListen(i,n),e.fu.delete(i),e.gu.removeTarget(i))}(e,t)}catch(n){Sp("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await $v(e,n)}else if(t instanceof Jg?e.gu.Kt(t):t instanceof Zg?e.gu.Jt(t):e.gu.zt(t),!n.isEqual(Jp.min()))try{const t=await lv(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.gu.Xt(t);return n.targetChanges.forEach(((n,i)=>{if(n.resumeToken.approximateByteSize()>0){const s=e.fu.get(i);s&&e.fu.set(i,s.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((t=>{const n=e.fu.get(t);if(!n)return;e.fu.set(t,n.withResumeToken(Pf.EMPTY_BYTE_STRING,n.snapshotVersion)),Uv(e,t);const i=new My(n.target,t,1,n.sequenceNumber);Fv(e,i)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){Sp("RemoteStore","Failed to raise snapshot:",t),await $v(e,t)}}async function $v(e,t,n){if(!ff(t))throw t;e.du.add(1),await Dv(e),e.mu.set("Offline"),n||(n=()=>lv(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{Sp("RemoteStore","Retrying IndexedDB access"),await n(),e.du.delete(1),await Pv(e)}))}function Kv(e,t){return t().catch((n=>$v(e,n,t)))}async function Gv(e){const t=Mp(e),n=ob(t);let i=t.lu.length>0?t.lu[t.lu.length-1].batchId:-1;for(;Xv(t);)try{const e=await uv(t.localStore,i);if(null===e){0===t.lu.length&&n.$o();break}i=e.batchId,Qv(t,e)}catch(e){await $v(t,e)}Yv(t)&&Jv(t)}function Xv(e){return Bv(e)&&e.lu.length<10}function Qv(e,t){e.lu.push(t);const n=ob(e);n.No()&&n.Jo&&n.Yo(t.mutations)}function Yv(e){return Bv(e)&&!ob(e).xo()&&e.lu.length>0}function Jv(e){ob(e).start()}async function Zv(e){ob(e).tu()}async function eb(e){const t=ob(e);for(const n of e.lu)t.Yo(n.mutations)}async function tb(e,t,n){const i=e.lu.shift(),s=Bg.from(i,t,n);await Kv(e,(()=>e.remoteSyncer.applySuccessfulWrite(s))),await Gv(e)}async function nb(e,t){t&&ob(e).Jo&&await async function(e,t){if($g(n=t.code)&&n!==Op.ABORTED){const n=e.lu.shift();ob(e).Oo(),await Kv(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await Gv(e)}var n}(e,t),Yv(e)&&Jv(e)}async function ib(e,t){const n=Mp(e);n.asyncQueue.verifyOperationInProgress(),Sp("RemoteStore","RemoteStore received new credentials");const i=Bv(n);n.du.add(3),await Dv(n),i&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.du.delete(3),await Pv(n)}async function sb(e,t){const n=Mp(e);t?(n.du.delete(2),await Pv(n)):t||(n.du.add(2),await Dv(n),n.mu.set("Unknown"))}function rb(e){return e.yu||(e.yu=function(e,t,n){const i=Mp(e);return i.nu(),new Nv(t,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,n)}(e.datastore,e.asyncQueue,{Jr:qv.bind(null,e),Zr:Wv.bind(null,e),zo:Hv.bind(null,e)}),e.wu.push((async t=>{t?(e.yu.Oo(),zv(e)?Vv(e):e.mu.set("Unknown")):(await e.yu.stop(),jv(e))}))),e.yu}function ob(e){return e.pu||(e.pu=function(e,t,n){const i=Mp(e);return i.nu(),new Sv(t,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,n)}(e.datastore,e.asyncQueue,{Jr:Zv.bind(null,e),Zr:nb.bind(null,e),Xo:eb.bind(null,e),Zo:tb.bind(null,e)}),e.wu.push((async t=>{t?(e.pu.Oo(),await Gv(e)):(await e.pu.stop(),e.lu.length>0&&(Sp("RemoteStore",`Stopping write stream with ${e.lu.length} pending writes`),e.lu=[]))}))),e.pu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class ab{static createAndSchedule(e,t,n,i,s){const r=Date.now()+n,o=new ab(e,t,r,i,s);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Fp(Op.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}constructor(e,t,n,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=s,this.deferred=new Up,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}}function lb(e,t){if(Ap("AsyncQueue",`${t}: ${e}`),ff(e))return new Fp(Op.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cb{static emptySet(e){return new cb(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof cb))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,i=n.getNext().key;if(!e.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new cb;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}constructor(e){this.comparator=e?(t,n)=>e(t,n)||sf.comparator(t.key,n.key):(e,t)=>sf.comparator(e.key,t.key),this.keyedMap=tg(),this.sortedSet=new Cf(this.comparator)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ub{track(e){const t=e.doc.key,n=this.Iu.get(t);n?0!==e.type&&3===n.type?this.Iu=this.Iu.insert(t,e):3===e.type&&1!==n.type?this.Iu=this.Iu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Iu=this.Iu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Iu=this.Iu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Iu=this.Iu.remove(t):1===e.type&&2===n.type?this.Iu=this.Iu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Iu=this.Iu.insert(t,{type:2,doc:e.doc}):Pp():this.Iu=this.Iu.insert(t,e)}Tu(){const e=[];return this.Iu.inorderTraversal(((t,n)=>{e.push(n)})),e}constructor(){this.Iu=new Cf(sf.comparator)}}class hb{static fromInitialDocuments(e,t,n,i,s){const r=[];return t.forEach((e=>{r.push({type:0,doc:e})})),new hb(e,t,cb.emptySet(t),r,n,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Wm(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}constructor(e,t,n,i,s,r,o,a,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=s,this.fromCache=r,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=l}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class db{constructor(){this.Eu=void 0,this.listeners=[]}}class pb{constructor(){this.queries=new Ym((e=>Hm(e)),Wm),this.onlineState="Unknown",this.Au=new Set}}async function fb(e,t){const n=Mp(e),i=t.query;let s=!1,r=n.queries.get(i);if(r||(s=!0,r=new db),s)try{r.Eu=await n.onListen(i)}catch(e){const n=lb(e,`Initialization of query '${$m(t.query)}' failed`);return void t.onError(n)}n.queries.set(i,r),r.listeners.push(t),t.Ru(n.onlineState),r.Eu&&t.vu(r.Eu)&&vb(n)}async function mb(e,t){const n=Mp(e),i=t.query;let s=!1;const r=n.queries.get(i);if(r){const e=r.listeners.indexOf(t);e>=0&&(r.listeners.splice(e,1),s=0===r.listeners.length)}if(s)return n.queries.delete(i),n.onUnlisten(i)}function gb(e,t){const n=Mp(e);let i=!1;for(const e of t){const t=e.query,s=n.queries.get(t);if(s){for(const t of s.listeners)t.vu(e)&&(i=!0);s.Eu=e}}i&&vb(n)}function yb(e,t,n){const i=Mp(e),s=i.queries.get(t);if(s)for(const e of s.listeners)e.onError(n);i.queries.delete(t)}function vb(e){e.Au.forEach((e=>{e.next()}))}class bb{vu(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new hb(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),t=!0):this.Du(e,this.onlineState)&&(this.Cu(e),t=!0),this.Vu=e,t}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let t=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),t=!0),t}Du(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.xu||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Su(e){if(e.docChanges.length>0)return!0;const t=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Cu(e){e=hb.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}constructor(e,t,n){this.query=e,this.bu=t,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=n||{}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wb{constructor(e){this.key=e}}class _b{constructor(e){this.key=e}}class kb{get Qu(){return this.Lu}zu(e,t){const n=t?t.ju:new ub,i=t?t.Gu:this.Gu;let s=t?t.mutatedKeys:this.mutatedKeys,r=i,o=!1;const a="F"===this.query.limitType&&i.size===this.query.limit?i.last():null,l="L"===this.query.limitType&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal(((e,t)=>{const c=i.get(e),u=Km(this.query,t)?t:null,h=!!c&&this.mutatedKeys.has(c.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let p=!1;c&&u?c.data.isEqual(u.data)?h!==d&&(n.track({type:3,doc:u}),p=!0):this.Wu(c,u)||(n.track({type:2,doc:u}),p=!0,(a&&this.Ku(u,a)>0||l&&this.Ku(u,l)<0)&&(o=!0)):!c&&u?(n.track({type:0,doc:u}),p=!0):c&&!u&&(n.track({type:1,doc:c}),p=!0,(a||l)&&(o=!0)),p&&(u?(r=r.add(u),s=d?s.add(e):s.delete(e)):(r=r.delete(e),s=s.delete(e)))})),null!==this.query.limit)for(;r.size>this.query.limit;){const e="F"===this.query.limitType?r.last():r.first();r=r.delete(e.key),s=s.delete(e.key),n.track({type:1,doc:e})}return{Gu:r,ju:n,Mi:o,mutatedKeys:s}}Wu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const i=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const s=e.ju.Tu();s.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Pp()}};return n(e)-n(t)}(e.type,t.type)||this.Ku(e.doc,t.doc))),this.Hu(n);const r=t?this.Ju():[],o=0===this.Uu.size&&this.current?1:0,a=o!==this.qu;return this.qu=o,0!==s.length||a?{snapshot:new hb(this.query,e.Gu,i,s,e.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),Yu:r}:{Yu:r}}Ru(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new ub,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach((e=>this.Lu=this.Lu.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.Lu=this.Lu.delete(e))),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=lg(),this.Gu.forEach((e=>{this.Zu(e.key)&&(this.Uu=this.Uu.add(e.key))}));const t=[];return e.forEach((e=>{this.Uu.has(e)||t.push(new _b(e))})),this.Uu.forEach((n=>{e.has(n)||t.push(new wb(n))})),t}Xu(e){this.Lu=e.Wi,this.Uu=lg();const t=this.zu(e.documents);return this.applyChanges(t,!0)}tc(){return hb.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,0===this.qu,this.hasCachedResults)}constructor(e,t){this.query=e,this.Lu=t,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=lg(),this.mutatedKeys=lg(),this.Ku=Xm(e),this.Gu=new cb(this.Ku)}}class xb{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Tb{constructor(e){this.key=e,this.ec=!1}}class Cb{get isPrimaryClient(){return!0===this.fc}constructor(e,t,n,i,s,r){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=r,this.nc={},this.sc=new Ym((e=>Hm(e)),Wm),this.ic=new Map,this.rc=new Set,this.oc=new Cf(sf.comparator),this.uc=new Map,this.cc=new Gy,this.ac={},this.hc=new Map,this.lc=jy.bn(),this.onlineState="Unknown",this.fc=void 0}}async function Eb(e,t){const n=Wb(e);let i,s;const r=n.sc.get(t);if(r)i=r.targetId,n.sharedClientState.addLocalQueryTarget(i),s=r.view.tc();else{const e=await hv(n.localStore,jm(t));n.isPrimaryClient&&Mv(n.remoteStore,e);const r=n.sharedClientState.addLocalQueryTarget(e.targetId);i=e.targetId,s=await Ib(n,t,i,"current"===r,e.resumeToken)}return s}async function Ib(e,t,n,i,s){e.dc=(t,n,i)=>async function(e,t,n,i){let s=t.view.zu(n);s.Mi&&(s=await pv(e.localStore,t.query,!1).then((({documents:e})=>t.view.zu(e,s))));const r=i&&i.targetChanges.get(t.targetId),o=t.view.applyChanges(s,e.isPrimaryClient,r);return Ub(e,t.targetId,o.Yu),o.snapshot}(e,t,n,i);const r=await pv(e.localStore,t,!0),o=new kb(t,r.Wi),a=o.zu(r.documents),l=Yg.createSynthesizedTargetChangeForCurrentChange(n,i&&"Offline"!==e.onlineState,s),c=o.applyChanges(a,e.isPrimaryClient,l);Ub(e,n,c.Yu);const u=new xb(t,n,o);return e.sc.set(t,u),e.ic.has(n)?e.ic.get(n).push(t):e.ic.set(n,[t]),c.snapshot}async function Nb(e,t){const n=Mp(e),i=n.sc.get(t),s=n.ic.get(i.targetId);if(s.length>1)return n.ic.set(i.targetId,s.filter((e=>!Wm(e,t)))),void n.sc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await dv(n.localStore,i.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(i.targetId),Ov(n.remoteStore,i.targetId),Ob(n,i.targetId)})).catch(df)):(Ob(n,i.targetId),await dv(n.localStore,i.targetId,!0))}async function Sb(e,t){const n=Mp(e);try{const e=await function(e,t){const n=Mp(e),i=t.snapshotVersion;let s=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const r=n.Ki.newChangeBuffer({trackRemovals:!0});s=n.Li;const o=[];t.targetChanges.forEach(((r,a)=>{const l=s.get(a);if(!l)return;o.push(n.Ds.removeMatchingKeys(e,r.removedDocuments,a).next((()=>n.Ds.addMatchingKeys(e,r.addedDocuments,a))));let c=l.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(a)?c=c.withResumeToken(Pf.EMPTY_BYTE_STRING,Jp.min()).withLastLimboFreeSnapshotVersion(Jp.min()):r.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(r.resumeToken,i)),s=s.insert(a,c),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0}(l,c,r)&&o.push(n.Ds.updateTargetData(e,c))}));let a=Zm(),l=lg();if(t.documentUpdates.forEach((i=>{t.resolvedLimboDocuments.has(i)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,i))})),o.push(cv(e,r,t.documentUpdates).next((e=>{a=e.zi,l=e.ji}))),!i.isEqual(Jp.min())){const t=n.Ds.getLastRemoteSnapshotVersion(e).next((t=>n.Ds.setTargetsMetadata(e,e.currentSequenceNumber,i)));o.push(t)}return pf.waitFor(o).next((()=>r.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,l))).next((()=>a))})).then((e=>(n.Li=s,e)))}(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const i=n.uc.get(t);i&&(Dp(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?i.ec=!0:e.modifiedDocuments.size>0?Dp(i.ec):e.removedDocuments.size>0&&(Dp(i.ec),i.ec=!1))})),await Bb(n,e,t)}catch(e){await df(e)}}function Ab(e,t,n){const i=Mp(e);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const e=[];i.sc.forEach(((n,i)=>{const s=i.view.Ru(t);s.snapshot&&e.push(s.snapshot)})),function(e,t){const n=Mp(e);n.onlineState=t;let i=!1;n.queries.forEach(((e,n)=>{for(const e of n.listeners)e.Ru(t)&&(i=!0)})),i&&vb(n)}(i.eventManager,t),e.length&&i.nc.zo(e),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function Rb(e,t,n){const i=Mp(e);i.sharedClientState.updateQueryState(t,"rejected",n);const s=i.uc.get(t),r=s&&s.key;if(r){let e=new Cf(sf.comparator);e=e.insert(r,om.newNoDocument(r,Jp.min()));const n=lg().add(r),s=new Qg(Jp.min(),new Map,new Nf(Xp),e,n);await Sb(i,s),i.oc=i.oc.remove(r),i.uc.delete(t),zb(i)}else await dv(i.localStore,t,!1).then((()=>Ob(i,t,n))).catch(df)}async function Lb(e,t){const n=Mp(e),i=t.batch.batchId;try{const e=await function(e,t){const n=Mp(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const i=t.batch.keys(),s=n.Ki.newChangeBuffer({trackRemovals:!0});return function(e,t,n,i){const s=n.batch,r=s.keys();let o=pf.resolve();return r.forEach((e=>{o=o.next((()=>i.getEntry(t,e))).next((t=>{const r=n.docVersions.get(e);Dp(null!==r),t.version.compareTo(r)<0&&(s.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),i.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,s)))}(n,e,t,s).next((()=>s.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,i,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=lg();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,i)))}))}(n.localStore,t);Mb(n,i,null),Db(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await Bb(n,e)}catch(e){await df(e)}}async function Pb(e,t,n){const i=Mp(e);try{const e=await function(e,t){const n=Mp(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let i;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(Dp(null!==t),i=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,i,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,i))).next((()=>n.localDocuments.getDocuments(e,i)))}))}(i.localStore,t);Mb(i,t,n),Db(i,t),i.sharedClientState.updateMutationState(t,"rejected",n),await Bb(i,e)}catch(e){await df(e)}}function Db(e,t){(e.hc.get(t)||[]).forEach((e=>{e.resolve()})),e.hc.delete(t)}function Mb(e,t,n){const i=Mp(e);let s=i.ac[i.currentUser.toKey()];if(s){const e=s.get(t);e&&(n?e.reject(n):e.resolve(),s=s.remove(t)),i.ac[i.currentUser.toKey()]=s}}function Ob(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const i of e.ic.get(t))e.sc.delete(i),n&&e.nc.wc(i,n);e.ic.delete(t),e.isPrimaryClient&&e.cc.hs(t).forEach((t=>{e.cc.containsKey(t)||Fb(e,t)}))}function Fb(e,t){e.rc.delete(t.path.canonicalString());const n=e.oc.get(t);null!==n&&(Ov(e.remoteStore,n),e.oc=e.oc.remove(t),e.uc.delete(n),zb(e))}function Ub(e,t,n){for(const i of n)i instanceof wb?(e.cc.addReference(i.key,t),Vb(e,i)):i instanceof _b?(Sp("SyncEngine","Document no longer in limbo: "+i.key),e.cc.removeReference(i.key,t),e.cc.containsKey(i.key)||Fb(e,i.key)):Pp()}function Vb(e,t){const n=t.key,i=n.path.canonicalString();e.oc.get(n)||e.rc.has(i)||(Sp("SyncEngine","New document in limbo: "+n),e.rc.add(i),zb(e))}function zb(e){for(;e.rc.size>0&&e.oc.size<e.maxConcurrentLimboResolutions;){const t=e.rc.values().next().value;e.rc.delete(t);const n=new sf(ef.fromString(t)),i=e.lc.next();e.uc.set(i,new Tb(n)),e.oc=e.oc.insert(n,i),Mv(e.remoteStore,new My(jm(Om(n.path)),i,2,mf.ct))}}async function Bb(e,t,n){const i=Mp(e),s=[],r=[],o=[];i.sc.isEmpty()||(i.sc.forEach(((e,a)=>{o.push(i.dc(a,t,n).then((e=>{if((e||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){s.push(e);const t=iv.Di(a.targetId,e);r.push(t)}})))})),await Promise.all(o),i.nc.zo(s),await async function(e,t){const n=Mp(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>pf.forEach(t,(t=>pf.forEach(t.Vi,(i=>n.persistence.referenceDelegate.addReference(e,t.targetId,i))).next((()=>pf.forEach(t.Si,(i=>n.persistence.referenceDelegate.removeReference(e,t.targetId,i)))))))))}catch(e){if(!ff(e))throw e;Sp("LocalStore","Failed to update sequence numbers: "+e)}for(const e of t){const t=e.targetId;if(!e.fromCache){const e=n.Li.get(t),i=e.snapshotVersion,s=e.withLastLimboFreeSnapshotVersion(i);n.Li=n.Li.insert(t,s)}}}(i.localStore,r))}async function jb(e,t){const n=Mp(e);if(!n.currentUser.isEqual(t)){Sp("SyncEngine","User change. New user:",t.toKey());const e=await av(n.localStore,t);n.currentUser=t,(i=n).hc.forEach((e=>{e.forEach((e=>{e.reject(new Fp(Op.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),i.hc.clear(),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Bb(n,e.Qi)}var i}function qb(e,t){const n=Mp(e),i=n.uc.get(t);if(i&&i.ec)return lg().add(i.key);{let e=lg();const i=n.ic.get(t);if(!i)return e;for(const t of i){const i=n.sc.get(t);e=e.unionWith(i.view.Qu)}return e}}function Wb(e){const t=Mp(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Sb.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=qb.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Rb.bind(null,t),t.nc.zo=gb.bind(null,t.eventManager),t.nc.wc=yb.bind(null,t.eventManager),t}function Hb(e){const t=Mp(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Lb.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Pb.bind(null,t),t}class $b{async initialize(e){this.serializer=Cv(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return ov(this.persistence,new sv,e.initialUser,this.serializer)}createPersistence(e){return new ev(nv.Fs,this.serializer)}createSharedClientState(e){return new gv}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}constructor(){this.synchronizeTabs=!1}}class Kb{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Ab(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=jb.bind(null,this.syncEngine),await sb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new pb}createDatastore(e){const t=Cv(e.databaseInfo.databaseId),n=(i=e.databaseInfo,new xv(i));var i;return function(e,t,n,i){return new Av(e,t,n,i)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){var t,n,i,s,r;return t=this.localStore,n=this.datastore,i=e.asyncQueue,s=e=>Ab(this.syncEngine,e,0),r=vv.D()?new vv:new yv,new Lv(t,n,i,s,r)}createSyncEngine(e,t){return function(e,t,n,i,s,r,o){const a=new Cb(e,t,n,i,s,r);return o&&(a.fc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=Mp(e);Sp("RemoteStore","RemoteStore shutting down."),t.du.add(5),await Dv(t),t._u.shutdown(),t.mu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gb{next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):Ap("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}constructor(e){this.observer=e,this.muted=!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xb{async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Fp(Op.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Up;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=lb(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}constructor(e,t,n,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=i,this.user=Cp.UNAUTHENTICATED,this.clientId=Gp.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{Sp("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(Sp("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}}async function Qb(e,t){e.asyncQueue.verifyOperationInProgress(),Sp("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let i=n.initialUser;e.setCredentialChangeListener((async e=>{i.isEqual(e)||(await av(t.localStore,e),i=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function Yb(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Zb(e);Sp("FirestoreClient","Initializing OnlineComponentProvider");const i=await e.getConfiguration();await t.initialize(n,i),e.setCredentialChangeListener((e=>ib(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>ib(t.remoteStore,n))),e._onlineComponents=t}function Jb(e){return"FirebaseError"===e.name?e.code===Op.FAILED_PRECONDITION||e.code===Op.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}async function Zb(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){Sp("FirestoreClient","Using user provided OfflineComponentProvider");try{await Qb(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!Jb(n))throw n;Rp("Error using user provided cache. Falling back to memory cache: "+n),await Qb(e,new $b)}}else Sp("FirestoreClient","Using default OfflineComponentProvider"),await Qb(e,new $b);return e._offlineComponents}async function ew(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(Sp("FirestoreClient","Using user provided OnlineComponentProvider"),await Yb(e,e._uninitializedComponentsProvider._online)):(Sp("FirestoreClient","Using default OnlineComponentProvider"),await Yb(e,new Kb))),e._onlineComponents}function tw(e){return ew(e).then((e=>e.syncEngine))}async function nw(e){const t=await ew(e),n=t.eventManager;return n.onListen=Eb.bind(null,t.syncEngine),n.onUnlisten=Nb.bind(null,t.syncEngine),n}function iw(e,t,n={}){const i=new Up;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,i,s){const r=new Gb({next:r=>{t.enqueueAndForget((()=>mb(e,o)));const a=r.docs.has(n);!a&&r.fromCache?s.reject(new Fp(Op.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&r.fromCache&&i&&"server"===i.source?s.reject(new Fp(Op.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):s.resolve(r)},error:e=>s.reject(e)}),o=new bb(Om(n.path),r,{includeMetadataChanges:!0,xu:!0});return fb(e,o)}(await nw(e),e.asyncQueue,t,n,i))),i.promise}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const sw=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rw(e,t,n){if(!n)throw new Fp(Op.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function ow(e){if(!sf.isDocumentKey(e))throw new Fp(Op.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function aw(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":Pp()}function lw(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Fp(Op.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=aw(e);throw new Fp(Op.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cw{isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new Fp(Op.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new Fp(Op.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,n,i){if(!0===t&&!0===i)throw new Fp(Op.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw{get app(){if(!this._app)throw new Fp(Op.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new Fp(Op.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new cw(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new zp;switch(e.type){case"firstParty":return new Wp(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new Fp(Op.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=sw.get(e);t&&(Sp("ComponentProvider","Removing Datastore"),sw.delete(e),t.terminate())}(this),Promise.resolve()}constructor(e,t,n,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new cw({}),this._settingsFrozen=!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hw{get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new pw(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new hw(this.firestore,e,this._key)}constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}}class dw{withConverter(e){return new dw(this.firestore,e,this._query)}constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}}class pw extends dw{get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new hw(this.firestore,null,new sf(e))}withConverter(e){return new pw(this.firestore,e,this._path)}constructor(e,t,n){super(e,t,Om(n)),this._path=n,this.type="collection"}}function fw(e,t,...n){if(e=Te(e),1===arguments.length&&(t=Gp.A()),rw("doc","path",t),e instanceof uw){const i=ef.fromString(t,...n);return ow(i),new hw(e,null,new sf(i))}{if(!(e instanceof hw||e instanceof pw))throw new Fp(Op.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(ef.fromString(t,...n));return ow(i),new hw(e.firestore,e instanceof pw?e.converter:null,new sf(i))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mw{get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const t=Tv();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise((()=>{}));const t=new Up;return this.Kc((()=>this.Oc&&this.Bc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.kc.push(e),this.Gc())))}async Gc(){if(0!==this.kc.length){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!ff(e))throw e;Sp("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao((()=>this.Gc()))}}Kc(e){const t=this.Nc.then((()=>(this.Fc=!0,e().catch((e=>{this.Mc=e,this.Fc=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}(e);throw Ap("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Fc=!1,e))))));return this.Nc=t,t}enqueueAfterDelay(e,t,n){this.Uc(),this.Lc.indexOf(e)>-1&&(t=0);const i=ab.createAndSchedule(this,e,t,n,(e=>this.Qc(e)));return this.$c.push(i),i}Uc(){this.Mc&&Pp()}verifyOperationInProgress(){}async zc(){let e;do{e=this.Nc,await e}while(e!==this.Nc)}jc(e){for(const t of this.$c)if(t.timerId===e)return!0;return!1}Wc(e){return this.zc().then((()=>{this.$c.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.$c)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.zc()}))}Hc(e){this.Lc.push(e)}Qc(e){const t=this.$c.indexOf(e);this.$c.splice(t,1)}constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new Ev(this,"async_queue_retry"),this.qc=()=>{const e=Tv();e&&Sp("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Co.vo()};const e=Tv();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.qc)}}class gw extends uw{_terminate(){return this._firestoreClient||vw(this),this._firestoreClient.terminate()}constructor(e,t,n,i){super(e,t,n,i),this.type="firestore",this._queue=new mw,this._persistenceKey=(null==i?void 0:i.name)||"[DEFAULT]"}}function yw(e){return e._firestoreClient||vw(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function vw(e){var t,n,i;const s=e._freezeSettings(),r=function(e,t,n,i){return new Bf(e,t,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,s);e._firestoreClient=new Xb(e._authCredentials,e._appCheckCredentials,e._queue,r),(null===(n=s.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(i=s.cache)||void 0===i?void 0:i._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.cache.kind,_offline:s.cache._offlineComponentProvider,_online:s.cache._onlineComponentProvider})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bw{static fromBase64String(e){try{return new bw(Pf.fromBase64String(e))}catch(e){throw new Fp(Op.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new bw(Pf.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}constructor(e){this._byteString=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ww{isEqual(e){return this._internalPath.isEqual(e._internalPath)}constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new Fp(Op.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new nf(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _w{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Xp(this._lat,e._lat)||Xp(this._long,e._long)}constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Fp(Op.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Fp(Op.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xw=/^__.*__$/;class Tw{toMutation(e,t){return null!==this.fieldMask?new Dg(e,this.data,this.fieldMask,t,this.fieldTransforms):new Pg(e,this.data,t,this.fieldTransforms)}constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}}function Cw(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Pp()}}class Ew{get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new Ew(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),i=this.Zc({path:n,ta:!1});return i.ea(e),i}na(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),i=this.Zc({path:n,ta:!1});return i.Jc(),i}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return Fw(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(0===e.length)throw this.ia("Document fields must not be empty");if(Cw(this.Yc)&&xw.test(e))throw this.ia('Document fields cannot begin and end with "__"')}constructor(e,t,n,i,s,r){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=i,void 0===s&&this.Jc(),this.fieldTransforms=s||[],this.fieldMask=r||[]}}class Iw{ua(e,t,n,i=!1){return new Ew({Yc:e,methodName:t,oa:n,path:nf.emptyPath(),ta:!1,ra:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Cv(e)}}function Nw(e){const t=e._freezeSettings(),n=Cv(e._databaseId);return new Iw(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Sw(e,t,n,i,s,r={}){const o=e.ua(r.merge||r.mergeFields?2:0,t,n,s);Pw("Data must be an object, but it was:",o,i);const a=Rw(i,o);let l,c;if(r.merge)l=new Af(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const e=[];for(const i of r.mergeFields){const s=Dw(t,i,n);if(!o.contains(s))throw new Fp(Op.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);Uw(e,s)||e.push(s)}l=new Af(e),c=o.fieldTransforms.filter((e=>l.covers(e.field)))}else l=null,c=o.fieldTransforms;return new Tw(new sm(a),l,c)}function Aw(e,t){if(Lw(e=Te(e)))return Pw("Unsupported field value:",t,e),Rw(e,t);if(e instanceof _w)return function(e,t){if(!Cw(t.Yc))throw t.ia(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.ia(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ta&&4!==t.Yc)throw t.ia("Nested arrays are not supported");return function(e,t){const n=[];let i=0;for(const s of e){let e=Aw(s,t.sa(i));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),i++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=Te(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return pg(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=Yp.fromDate(e);return{timestampValue:cy(t.serializer,n)}}if(e instanceof Yp){const n=new Yp(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:cy(t.serializer,n)}}if(e instanceof kw)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof bw)return{bytesValue:uy(t.serializer,e._byteString)};if(e instanceof hw){const n=t.databaseId,i=e.firestore._databaseId;if(!i.isEqual(n))throw t.ia(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:py(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.ia(`Unsupported field value: ${aw(e)}`)}(e,t)}function Rw(e,t){const n={};return Tf(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):xf(e,((e,i)=>{const s=Aw(i,t.Xc(e));null!=s&&(n[e]=s)})),{mapValue:{fields:n}}}function Lw(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Yp||e instanceof kw||e instanceof bw||e instanceof hw||e instanceof _w)}function Pw(e,t,n){if(!Lw(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const i=aw(n);throw"an object"===i?t.ia(e+" a custom object"):t.ia(e+" "+i)}}function Dw(e,t,n){if((t=Te(t))instanceof ww)return t._internalPath;if("string"==typeof t)return Ow(e,t);throw Fw("Field path arguments must be of type string or ",e,!1,void 0,n)}const Mw=new RegExp("[~\\*/\\[\\]]");function Ow(e,t,n){if(t.search(Mw)>=0)throw Fw(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new ww(...t.split("."))._internalPath}catch(i){throw Fw(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Fw(e,t,n,i,s){const r=i&&!i.isEmpty(),o=void 0!==s;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${i}`),o&&(l+=` in document ${s}`),l+=")"),new Fp(Op.INVALID_ARGUMENT,a+e+l)}function Uw(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vw{get id(){return this._key.path.lastSegment()}get ref(){return new hw(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new zw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Bw("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}constructor(e,t,n,i,s){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=i,this._converter=s}}class zw extends Vw{data(){return super.data()}}function Bw(e,t){return"string"==typeof t?Ow(e,t):t instanceof ww?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{convertValue(e,t="none"){switch(Wf(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Of(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ff(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw Pp()}}convertObject(e,t){const n={};return xf(e.fields,((e,i)=>{n[e]=this.convertValue(i,t)})),n}convertGeoPoint(e){return new kw(Of(e.latitude),Of(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Vf(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(zf(e));default:return null}}convertTimestamp(e){const t=Mf(e);return new Yp(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=ef.fromString(e);Dp(Dy(n));const i=new jf(n.get(1),n.get(3)),s=new sf(n.popFirst(5));return i.isEqual(t)||Ap(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qw(e,t,n){let i;return i=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ww{isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}}class Hw extends Vw{exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new $w(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Bw("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}constructor(e,t,n,i,s,r){super(e,t,n,i,r),this._firestore=e,this._firestoreImpl=e,this.metadata=s}}class $w extends Hw{data(e={}){return super.data(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Kw(e){e=lw(e,hw);const t=lw(e.firestore,gw);return iw(yw(t),e._key).then((n=>Yw(t,e,n)))}class Gw extends jw{convertBytes(e){return new bw(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new hw(this.firestore,null,t)}constructor(e){super(),this.firestore=e}}function Xw(e,t,n){e=lw(e,hw);const i=lw(e.firestore,gw),s=qw(e.converter,t,n);return Qw(i,[Sw(Nw(i),"setDoc",e._key,s,null!==e.converter,n).toMutation(e._key,Eg.none())])}function Qw(e,t){return function(e,t){const n=new Up;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){const i=Hb(e);try{const e=await function(e,t){const n=Mp(e),i=Yp.now(),s=t.reduce(((e,t)=>e.add(t.key)),lg());let r,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=Zm(),l=lg();return n.Ki.getEntries(e,s).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(l=l.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((s=>{r=s;const o=[];for(const e of t){const t=Rg(e,r.get(e.key).overlayedDocument);null!=t&&o.push(new Dg(e.key,t,rm(t.value.mapValue),Eg.exists(!0)))}return n.mutationQueue.addMutationBatch(e,i,o,t)})).next((t=>{o=t;const i=t.applyToLocalDocumentSet(r,l);return n.documentOverlayCache.saveOverlays(e,t.batchId,i)}))})).then((()=>({batchId:o.batchId,changes:ng(r)})))}(i.localStore,t);i.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let i=e.ac[e.currentUser.toKey()];i||(i=new Cf(Xp)),i=i.insert(t,n),e.ac[e.currentUser.toKey()]=i}(i,e.batchId,n),await Bb(i,e.changes),await Gv(i.remoteStore)}catch(e){const t=lb(e,"Failed to persist write");n.reject(t)}}(await tw(e),t,n))),n.promise}(yw(e),t)}function Yw(e,t,n){const i=n.docs.get(t._key),s=new Gw(e);return new Hw(e,s,t._key,i,new Ww(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e,t=!0){Ep="9.20.0",rt(new Ce("firestore",((e,{instanceIdentifier:n,options:i})=>{const s=e.getProvider("app").getImmediate(),r=new gw(new jp(e.getProvider("auth-internal")),new $p(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new Fp(Op.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new jf(e.options.projectId,t)}(s,n),s);return i=Object.assign({useFetchStreams:t},i),r._setSettings(i),r}),"PUBLIC").setMultipleInstances(!0)),ht("@firebase/firestore","3.10.1",e),ht("@firebase/firestore","3.10.1","esm2017")}();const Jw=ct({apiKey:"AIzaSyChg8lDgINrc-F_mlrFvP9Chmjr_-TXkdg",authDomain:"films-5503c.firebaseapp.com",projectId:"films-5503c",storageBucket:"films-5503c.appspot.com",messagingSenderId:"193451105367",appId:"1:193451105367:web:c8230906413bec152b9712"}),Zw=function(e,t){const n="string"==typeof e?e:t||"(default)",i=ot("object"==typeof e?e:ut(),"firestore").getImmediate({identifier:n});if(!i._initialized){const e=q("firestore");e&&function(e,t,n,i={}){var s;const r=(e=lw(e,uw))._getSettings();if("firestore.googleapis.com"!==r.host&&r.host!==t&&Rp("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},r),{host:`${t}:${n}`,ssl:!1})),i.mockUserToken){let t,n;if("string"==typeof i.mockUserToken)t=i.mockUserToken,n=Cp.MOCK_USER;else{t=$(i.mockUserToken,null===(s=e._app)||void 0===s?void 0:s.options.projectId);const r=i.mockUserToken.sub||i.mockUserToken.user_id;if(!r)throw new Fp(Op.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Cp(r)}e._authCredentials=new Bp(new Vp(t,n))}}(i,...e)}return i}(Jw),e_=function(e=ut()){const t=ot(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=ot(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(de(n.getOptions(),null!=t?t:{}))return e;It(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:us,persistence:[Ei,di,fi]}),i=W("authTokenSyncURL");if(i){const e=(s=i,async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>ds)return;const i=null==t?void 0:t.token;ps!==i&&(ps=i,await fetch(s,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))});!function(e,t,n){Te(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,i){Te(e).onIdTokenChanged(t,n,i)}(n,(t=>e(t)))}var s;const r=j("auth");return r&&Fn(n,`http://${r}`),n}(Jw),t_=(function(e=ut(),t){const n=ot(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const e=q("database");e&&function(e,t,n,i={}){(e=Te(e))._checkNotDeleted("useEmulator"),e._instanceStarted&&Hs("Cannot call useEmulator() after instance has already been initialized.");const s=e._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&Hs('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new ar(ar.OWNER);else if(i.mockUserToken){const t="string"==typeof i.mockUserToken?i.mockUserToken:$(i.mockUserToken,e.app.options.projectId);r=new ar(t)}!function(e,t,n,i){e.repoInfo_=new cr(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),i&&(e.authTokenProvider_=i)}(s,t,n,r)}(n,...e)}}(Jw),new Zn);const n_=()=>{Oi(e_,t_).then((e=>{Zn.credentialFromResult(e).accessToken,e.user;h.Notify.info("You Logged In")})).catch((e=>{console.log(e);e.code,e.message,Zn.credentialFromError(e)}))},i_=async()=>{const e=xs(o.QUEUE),t=xs(o.WATCHED),n=xs("user").join(""),i={queue:e,watched:t};try{await Xw(fw(Zw,"users",n),i)}catch(e){console.log(e)}},s_=async e=>{var t;await(t=e_,Te(t).signOut()),h.Notify.info("You Logged Out"),localStorage.clear(),kc()};function r_(e){const{original_title:n,name:i,title:s,genres:r,overview:a,popularity:l="0",vote_count:c,vote_average:u,poster_path:h,id:d,release_date:p}=e,{filmNameRef:f,filmVotesRef:m,filmAverageVotesRef:g,filmPopularityRef:y,filmOriginalTitleRef:v,filmGenreRef:b,filmOverviewRef:w,filmImageRef:_,filmAddToWatchedBtnRef:k,filmAddToQueueBtnRef:x,filmWatchTrailerBtnRef:T}=o;_.src=`https://image.tmdb.org/t/p/w500${h}`,h||(_.src=t(ws)),_.alt=n,f.textContent=n,v.textContent=n,w.textContent=a,y.textContent=l.toFixed(1),m.textContent=c,g.textContent=u.toFixed(1);const C=r.map((e=>e.name));b.textContent=C.join(", ");const E=r.map((e=>e.id)).join(" ");k.dataset.id=d,k.dataset.original_title=n,s&&(k.dataset.title=s),i&&(k.dataset.name=i),k.dataset.poster_path=h,k.dataset.genre_ids=E,k.dataset.release_date=p,x.dataset.id=d,x.dataset.original_title=n,s&&(x.dataset.title=s),i&&(x.dataset.name=i),x.dataset.poster_path=h,x.dataset.genre_ids=E,x.dataset.release_date=p,T.dataset.id=d}const{watchedBtnRef:o_,queueBtnRef:a_}=o;function l_(){const e=o_,t=a_,n=e.dataset.id,i=xs(o.WATCHED).some((e=>e.id===n)),s=xs(o.QUEUE).some((e=>e.id===n));i?(e.textContent="Remove from watched",e.classList.remove("add-watched"),e.classList.add("remove-watched"),e.classList.add("buttons-list__button--black")):(e.textContent="Add to watched",e.classList.remove("remove-watched"),e.classList.add("add-watched"),e.classList.remove("buttons-list__button--black")),s?(t.textContent="Remove from queue",t.classList.remove("add-queue"),t.classList.add("remove-queue"),t.classList.add("buttons-list__button--black")):(t.textContent="Add to queue",t.classList.remove("remove-queue"),t.classList.add("add-queue"),t.classList.remove("buttons-list__button--black"))}function c_(e){const t=e.target,n=t.dataset.id,i=t.dataset.original_title,s=document.getElementById("film-modal-image").getAttribute("src"),r=s.slice(s.lastIndexOf("/")+0),a=t.dataset.genre_ids,l=a?a.split(" ").map((e=>parseInt(e))):[12],c=t.dataset.release_date,u={id:n,name:t.dataset.name,title:t.dataset.title,original_title:i,poster_path:r,genre_ids:l,release_date:c};if(t.classList.contains("add-watched"))return Cs(o.WATCHED,u),void l_();Es(o.WATCHED,n),l_(),!o.buttonRefHome.classList.contains("header-nav--active")&&o.buttonRefWatched.classList.contains("header-button__library--active")&&_s(xs(o.WATCHED))}function u_(e){const t=e.target,n=t.dataset.id,i=t.dataset.original_title,s=document.getElementById("film-modal-image").getAttribute("src"),r=s.slice(s.lastIndexOf("/")+0),a=t.dataset.genre_ids,l=a?a.split(" ").map((e=>parseInt(e))):[12],c=t.dataset.release_date,u={id:n,name:t.dataset.name,title:t.dataset.title,original_title:i,poster_path:r,genre_ids:l,release_date:c};if(t.classList.contains("add-queue"))return Cs(o.QUEUE,u),void l_();Es(o.QUEUE,n),l_(),!o.buttonRefHome.classList.contains("header-nav--active")&&o.buttonRefQueue.classList.contains("header-button__library--active")&&_s(xs(o.QUEUE))}const{backdropRef:h_,watchedBtnRef:d_,queueBtnRef:p_}=o;function f_(e){e.target.classList.contains("backdrop")&&(e.currentTarget.classList.add("is-hidden"),y_(e))}function m_(e){"Escape"===e.code&&(h_.classList.add("is-hidden"),y_(e))}function g_(e){h_.classList.add("is-hidden"),y_(e)}function y_(e){document.body.style.overflow="",e.currentTarget.removeEventListener("click",g_),d_.removeEventListener("click",c_),p_.removeEventListener("click",u_)}function v_(e,t,n){const i=e.id,s=xs(o.WATCHED),r=s?s.find((e=>e.id===i.toString())):null,a=xs(o.QUEUE),l=a?a.find((e=>e.id===i.toString())):null;r?(t.classList.remove("add-watched"),t.classList.add("remove-watched"),t.textContent="Remove from Watched",t.classList.add("buttons-list__button--black")):(t.classList.remove("remove-watched"),t.classList.add("add-watched"),t.textContent="Add to Watched",t.classList.remove("buttons-list__button--black")),l?(n.classList.remove("add-queue"),n.classList.add("remove-queue"),n.textContent="Remove from Queue",n.classList.add("buttons-list__button--black"),console.log(n)):(n.classList.remove("remove-queue"),n.classList.add("add-queue"),n.textContent="Add to Queue",n.classList.remove("buttons-list__button--black")),t.addEventListener("click",c_),n.addEventListener("click",u_)}var b_={};"object"==typeof navigator&&(b_=function(){function e(e,t,n){return i=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==typeof i?i:String(i))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e;var i}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var o={addCSS:!0,thumbWidth:15,watch:!0},a=function(e){return null!=e?e.constructor:null},l=function(e,t){return!!(e&&t&&e instanceof t)},c=function(e){return null==e},u=function(e){return a(e)===Object},h=function(e){return a(e)===String},d=function(e){return Array.isArray(e)},p=function(e){return l(e,NodeList)},f={nullOrUndefined:c,object:u,number:function(e){return a(e)===Number&&!Number.isNaN(e)},string:h,boolean:function(e){return a(e)===Boolean},function:function(e){return a(e)===Function},array:d,nodeList:p,element:function(e){return l(e,Element)},event:function(e){return l(e,Event)},empty:function(e){return c(e)||(h(e)||d(e)||p(e))&&!e.length||u(e)&&!Object.keys(e).length}};function m(e,t){if(1>t){var n=function(e){var t="".concat(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return t?Math.max(0,(t[1]?t[1].length:0)-(t[2]?+t[2]:0)):0}(t);return parseFloat(e.toFixed(n))}return Math.round(e/t)*t}var g=function(){function e(t,n){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),f.element(t)?this.element=t:f.string(t)&&(this.element=document.querySelector(t)),f.element(this.element)&&f.empty(this.element.rangeTouch)&&(this.config=r({},o,{},n),this.init())}return function(e,n,i){n&&t(e.prototype,n),i&&t(e,i)}(e,[{key:"init",value:function(){e.enabled&&(this.config.addCSS&&(this.element.style.userSelect="none",this.element.style.webKitUserSelect="none",this.element.style.touchAction="manipulation"),this.listeners(!0),this.element.rangeTouch=this)}},{key:"destroy",value:function(){e.enabled&&(this.config.addCSS&&(this.element.style.userSelect="",this.element.style.webKitUserSelect="",this.element.style.touchAction=""),this.listeners(!1),this.element.rangeTouch=null)}},{key:"listeners",value:function(e){var t=this,n=e?"addEventListener":"removeEventListener";["touchstart","touchmove","touchend"].forEach((function(e){t.element[n](e,(function(e){return t.set(e)}),!1)}))}},{key:"get",value:function(t){if(!e.enabled||!f.event(t))return null;var n,i=t.target,s=t.changedTouches[0],r=parseFloat(i.getAttribute("min"))||0,o=parseFloat(i.getAttribute("max"))||100,a=parseFloat(i.getAttribute("step"))||1,l=i.getBoundingClientRect(),c=100/l.width*(this.config.thumbWidth/2)/100;return 0>(n=100/l.width*(s.clientX-l.left))?n=0:100<n&&(n=100),50>n?n-=(100-2*n)*c:50<n&&(n+=2*(n-50)*c),r+m(n/100*(o-r),a)}},{key:"set",value:function(t){e.enabled&&f.event(t)&&!t.target.disabled&&(t.preventDefault(),t.target.value=this.get(t),function(e,t){if(e&&t){var n=new Event(t,{bubbles:!0});e.dispatchEvent(n)}}(t.target,"touchend"===t.type?"change":"input"))}}],[{key:"setup",value:function(t){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=null;if(f.empty(t)||f.string(t)?i=Array.from(document.querySelectorAll(f.string(t)?t:'input[type="range"]')):f.element(t)?i=[t]:f.nodeList(t)?i=Array.from(t):f.array(t)&&(i=t.filter(f.element)),f.empty(i))return null;var s=r({},o,{},n);if(f.string(t)&&s.watch){var a=new MutationObserver((function(n){Array.from(n).forEach((function(n){Array.from(n.addedNodes).forEach((function(n){f.element(n)&&function(e,t){return function(){return Array.from(document.querySelectorAll(t)).includes(this)}.call(e,t)}(n,t)&&new e(n,s)}))}))}));a.observe(document.body,{childList:!0,subtree:!0})}return i.map((function(t){return new e(t,n)}))}},{key:"enabled",get:function(){return"ontouchstart"in document.documentElement}}]),e}();const y=e=>null!=e?e.constructor:null,v=(e,t)=>Boolean(e&&t&&e instanceof t),b=e=>null==e,w=e=>y(e)===Object,_=e=>y(e)===String,k=e=>"function"==typeof e,x=e=>Array.isArray(e),T=e=>v(e,NodeList),C=e=>b(e)||(_(e)||x(e)||T(e))&&!e.length||w(e)&&!Object.keys(e).length;var E={nullOrUndefined:b,object:w,number:e=>y(e)===Number&&!Number.isNaN(e),string:_,boolean:e=>y(e)===Boolean,function:k,array:x,weakMap:e=>v(e,WeakMap),nodeList:T,element:e=>null!==e&&"object"==typeof e&&1===e.nodeType&&"object"==typeof e.style&&"object"==typeof e.ownerDocument,textNode:e=>y(e)===Text,event:e=>v(e,Event),keyboardEvent:e=>v(e,KeyboardEvent),cue:e=>v(e,window.TextTrackCue)||v(e,window.VTTCue),track:e=>v(e,TextTrack)||!b(e)&&_(e.kind),promise:e=>v(e,Promise)&&k(e.then),url:e=>{if(v(e,window.URL))return!0;if(!_(e))return!1;let t=e;e.startsWith("http://")&&e.startsWith("https://")||(t=`http://${e}`);try{return!C(new URL(t).hostname)}catch(e){return!1}},empty:C};const I=(()=>{const e=document.createElement("span"),t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},n=Object.keys(t).find((t=>void 0!==e.style[t]));return!!E.string(n)&&t[n]})();function N(e,t){setTimeout((()=>{try{e.hidden=!0,e.offsetHeight,e.hidden=!1}catch(e){}}),t)}var S={isIE:Boolean(window.document.documentMode),isEdge:/Edge/g.test(navigator.userAgent),isWebKit:"WebkitAppearance"in document.documentElement.style&&!/Edge/g.test(navigator.userAgent),isIPhone:/iPhone|iPod/gi.test(navigator.userAgent)&&navigator.maxTouchPoints>1,isIPadOS:"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1,isIos:/iPad|iPhone|iPod/gi.test(navigator.userAgent)&&navigator.maxTouchPoints>1};function A(e,t){return t.split(".").reduce(((e,t)=>e&&e[t]),e)}function R(e={},...t){if(!t.length)return e;const n=t.shift();return E.object(n)?(Object.keys(n).forEach((t=>{E.object(n[t])?(Object.keys(e).includes(t)||Object.assign(e,{[t]:{}}),R(e[t],n[t])):Object.assign(e,{[t]:n[t]})})),R(e,...t)):e}function L(e,t){const n=e.length?e:[e];Array.from(n).reverse().forEach(((e,n)=>{const i=n>0?t.cloneNode(!0):t,s=e.parentNode,r=e.nextSibling;i.appendChild(e),r?s.insertBefore(i,r):s.appendChild(i)}))}function P(e,t){E.element(e)&&!E.empty(t)&&Object.entries(t).filter((([,e])=>!E.nullOrUndefined(e))).forEach((([t,n])=>e.setAttribute(t,n)))}function D(e,t,n){const i=document.createElement(e);return E.object(t)&&P(i,t),E.string(n)&&(i.innerText=n),i}function M(e,t,n,i){E.element(t)&&t.appendChild(D(e,n,i))}function O(e){E.nodeList(e)||E.array(e)?Array.from(e).forEach(O):E.element(e)&&E.element(e.parentNode)&&e.parentNode.removeChild(e)}function F(e){if(!E.element(e))return;let{length:t}=e.childNodes;for(;t>0;)e.removeChild(e.lastChild),t-=1}function U(e,t){return E.element(t)&&E.element(t.parentNode)&&E.element(e)?(t.parentNode.replaceChild(e,t),e):null}function V(e,t){if(!E.string(e)||E.empty(e))return{};const n={},i=R({},t);return e.split(",").forEach((e=>{const t=e.trim(),s=t.replace(".",""),r=t.replace(/[[\]]/g,"").split("="),[o]=r,a=r.length>1?r[1].replace(/["']/g,""):"";switch(t.charAt(0)){case".":E.string(i.class)?n.class=`${i.class} ${s}`:n.class=s;break;case"#":n.id=t.replace("#","");break;case"[":n[o]=a}})),R(i,n)}function z(e,t){if(!E.element(e))return;let n=t;E.boolean(n)||(n=!e.hidden),e.hidden=n}function B(e,t,n){if(E.nodeList(e))return Array.from(e).map((e=>B(e,t,n)));if(E.element(e)){let i="toggle";return void 0!==n&&(i=n?"add":"remove"),e.classList[i](t),e.classList.contains(t)}return!1}function j(e,t){return E.element(e)&&e.classList.contains(t)}function q(e,t){const{prototype:n}=Element;return(n.matches||n.webkitMatchesSelector||n.mozMatchesSelector||n.msMatchesSelector||function(){return Array.from(document.querySelectorAll(t)).includes(this)}).call(e,t)}function W(e){return this.elements.container.querySelectorAll(e)}function H(e){return this.elements.container.querySelector(e)}function $(e=null,t=!1){E.element(e)&&e.focus({preventScroll:!0,focusVisible:t})}const K={"audio/ogg":"vorbis","audio/wav":"1","video/webm":"vp8, vorbis","video/mp4":"avc1.42E01E, mp4a.40.2","video/ogg":"theora"},G={audio:"canPlayType"in document.createElement("audio"),video:"canPlayType"in document.createElement("video"),check(e,t){const n=G[e]||"html5"!==t;return{api:n,ui:n&&G.rangeInput}},pip:!(S.isIPhone||!E.function(D("video").webkitSetPresentationMode)&&(!document.pictureInPictureEnabled||D("video").disablePictureInPicture)),airplay:E.function(window.WebKitPlaybackTargetAvailabilityEvent),playsinline:"playsInline"in document.createElement("video"),mime(e){if(E.empty(e))return!1;const[t]=e.split("/");let n=e;if(!this.isHTML5||t!==this.type)return!1;Object.keys(K).includes(n)&&(n+=`; codecs="${K[e]}"`);try{return Boolean(n&&this.media.canPlayType(n).replace(/no/,""))}catch(e){return!1}},textTracks:"textTracks"in document.createElement("video"),rangeInput:(()=>{const e=document.createElement("input");return e.type="range","range"===e.type})(),touch:"ontouchstart"in document.documentElement,transitions:!1!==I,reducedMotion:"matchMedia"in window&&window.matchMedia("(prefers-reduced-motion)").matches},X=(()=>{let e=!1;try{const t=Object.defineProperty({},"passive",{get:()=>(e=!0,null)});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(e){}return e})();function Q(e,t,n,i=!1,s=!0,r=!1){if(!e||!("addEventListener"in e)||E.empty(t)||!E.function(n))return;const o=t.split(" ");let a=r;X&&(a={passive:s,capture:r}),o.forEach((t=>{this&&this.eventListeners&&i&&this.eventListeners.push({element:e,type:t,callback:n,options:a}),e[i?"addEventListener":"removeEventListener"](t,n,a)}))}function Y(e,t="",n,i=!0,s=!1){Q.call(this,e,t,n,!0,i,s)}function J(e,t="",n,i=!0,s=!1){Q.call(this,e,t,n,!1,i,s)}function Z(e,t="",n,i=!0,s=!1){const r=(...o)=>{J(e,t,r,i,s),n.apply(this,o)};Q.call(this,e,t,r,!0,i,s)}function ee(e,t="",n=!1,i={}){if(!E.element(e)||E.empty(t))return;const s=new CustomEvent(t,{bubbles:n,detail:{...i,plyr:this}});e.dispatchEvent(s)}function te(){this&&this.eventListeners&&(this.eventListeners.forEach((e=>{const{element:t,type:n,callback:i,options:s}=e;t.removeEventListener(n,i,s)})),this.eventListeners=[])}function ne(){return new Promise((e=>this.ready?setTimeout(e,0):Y.call(this,this.elements.container,"ready",e))).then((()=>{}))}function ie(e){E.promise(e)&&e.then(null,(()=>{}))}function se(e){return E.array(e)?e.filter(((t,n)=>e.indexOf(t)===n)):e}function re(e,t){return E.array(e)&&e.length?e.reduce(((e,n)=>Math.abs(n-t)<Math.abs(e-t)?n:e)):null}function oe(e){return!(!window||!window.CSS)&&window.CSS.supports(e)}const ae=[[1,1],[4,3],[3,4],[5,4],[4,5],[3,2],[2,3],[16,10],[10,16],[16,9],[9,16],[21,9],[9,21],[32,9],[9,32]].reduce(((e,[t,n])=>({...e,[t/n]:[t,n]})),{});function le(e){return!!(E.array(e)||E.string(e)&&e.includes(":"))&&(E.array(e)?e:e.split(":")).map(Number).every(E.number)}function ce(e){if(!E.array(e)||!e.every(E.number))return null;const[t,n]=e,i=(e,t)=>0===t?e:i(t,e%t),s=i(t,n);return[t/s,n/s]}function ue(e){const t=e=>le(e)?e.split(":").map(Number):null;let n=t(e);if(null===n&&(n=t(this.config.ratio)),null===n&&!E.empty(this.embed)&&E.array(this.embed.ratio)&&({ratio:n}=this.embed),null===n&&this.isHTML5){const{videoWidth:e,videoHeight:t}=this.media;n=[e,t]}return ce(n)}function he(e){if(!this.isVideo)return{};const{wrapper:t}=this.elements,n=ue.call(this,e);if(!E.array(n))return{};const[i,s]=ce(n),r=100/i*s;if(oe(`aspect-ratio: ${i}/${s}`)?t.style.aspectRatio=`${i}/${s}`:t.style.paddingBottom=`${r}%`,this.isVimeo&&!this.config.vimeo.premium&&this.supported.ui){const e=100/this.media.offsetWidth*parseInt(window.getComputedStyle(this.media).paddingBottom,10),n=(e-r)/(e/50);this.fullscreen.active?t.style.paddingBottom=null:this.media.style.transform=`translateY(-${n}%)`}else this.isHTML5&&t.classList.add(this.config.classNames.videoFixedRatio);return{padding:r,ratio:n}}function de(e,t,n=.05){const i=e/t,s=re(Object.keys(ae),i);return Math.abs(s-i)<=n?ae[s]:[e,t]}const pe={getSources(){return this.isHTML5?Array.from(this.media.querySelectorAll("source")).filter((e=>{const t=e.getAttribute("type");return!!E.empty(t)||G.mime.call(this,t)})):[]},getQualityOptions(){return this.config.quality.forced?this.config.quality.options:pe.getSources.call(this).map((e=>Number(e.getAttribute("size")))).filter(Boolean)},setup(){if(!this.isHTML5)return;const e=this;e.options.speed=e.config.speed.options,E.empty(this.config.ratio)||he.call(e),Object.defineProperty(e.media,"quality",{get(){const t=pe.getSources.call(e).find((t=>t.getAttribute("src")===e.source));return t&&Number(t.getAttribute("size"))},set(t){if(e.quality!==t){if(e.config.quality.forced&&E.function(e.config.quality.onChange))e.config.quality.onChange(t);else{const n=pe.getSources.call(e).find((e=>Number(e.getAttribute("size"))===t));if(!n)return;const{currentTime:i,paused:s,preload:r,readyState:o,playbackRate:a}=e.media;e.media.src=n.getAttribute("src"),("none"!==r||o)&&(e.once("loadedmetadata",(()=>{e.speed=a,e.currentTime=i,s||ie(e.play())})),e.media.load())}ee.call(e,e.media,"qualitychange",!1,{quality:t})}}})},cancelRequests(){this.isHTML5&&(O(pe.getSources.call(this)),this.media.setAttribute("src",this.config.blankVideo),this.media.load(),this.debug.log("Cancelled network requests"))}};function fe(e,...t){return E.empty(e)?e:e.toString().replace(/{(\d+)}/g,((e,n)=>t[n].toString()))}const me=(e="",t="",n="")=>e.replace(new RegExp(t.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g,"\\$1"),"g"),n.toString()),ge=(e="")=>e.toString().replace(/\w\S*/g,(e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()));function ye(e=""){let t=e.toString();return t=function(e=""){let t=e.toString();return t=me(t,"-"," "),t=me(t,"_"," "),t=ge(t),me(t," ","")}(t),t.charAt(0).toLowerCase()+t.slice(1)}function ve(e){const t=document.createElement("div");return t.appendChild(e),t.innerHTML}const be={pip:"PIP",airplay:"AirPlay",html5:"HTML5",vimeo:"Vimeo",youtube:"YouTube"},we={get(e="",t={}){if(E.empty(e)||E.empty(t))return"";let n=A(t.i18n,e);if(E.empty(n))return Object.keys(be).includes(e)?be[e]:"";const i={"{seektime}":t.seekTime,"{title}":t.title};return Object.entries(i).forEach((([e,t])=>{n=me(n,e,t)})),n}};class _e{static get supported(){try{if(!("localStorage"in window))return!1;const e="___test";return window.localStorage.setItem(e,e),window.localStorage.removeItem(e),!0}catch(e){return!1}}constructor(t){e(this,"get",(e=>{if(!_e.supported||!this.enabled)return null;const t=window.localStorage.getItem(this.key);if(E.empty(t))return null;const n=JSON.parse(t);return E.string(e)&&e.length?n[e]:n})),e(this,"set",(e=>{if(!_e.supported||!this.enabled)return;if(!E.object(e))return;let t=this.get();E.empty(t)&&(t={}),R(t,e);try{window.localStorage.setItem(this.key,JSON.stringify(t))}catch(e){}})),this.enabled=t.config.storage.enabled,this.key=t.config.storage.key}}function ke(e,t="text"){return new Promise(((n,i)=>{try{const i=new XMLHttpRequest;if(!("withCredentials"in i))return;i.addEventListener("load",(()=>{if("text"===t)try{n(JSON.parse(i.responseText))}catch(e){n(i.responseText)}else n(i.response)})),i.addEventListener("error",(()=>{throw new Error(i.status)})),i.open("GET",e,!0),i.responseType=t,i.send()}catch(e){i(e)}}))}function xe(e,t){if(!E.string(e))return;const n="cache",i=E.string(t);let s=!1;const r=()=>null!==document.getElementById(t),o=(e,t)=>{e.innerHTML=t,i&&r()||document.body.insertAdjacentElement("afterbegin",e)};if(!i||!r()){const r=_e.supported,a=document.createElement("div");if(a.setAttribute("hidden",""),i&&a.setAttribute("id",t),r){const e=window.localStorage.getItem(`${n}-${t}`);if(s=null!==e,s){const t=JSON.parse(e);o(a,t.content)}}ke(e).then((e=>{if(!E.empty(e)){if(r)try{window.localStorage.setItem(`${n}-${t}`,JSON.stringify({content:e}))}catch(e){}o(a,e)}})).catch((()=>{}))}}const Te=e=>Math.trunc(e/60/60%60,10),Ce=e=>Math.trunc(e/60%60,10),Ee=e=>Math.trunc(e%60,10);function Ie(e=0,t=!1,n=!1){if(!E.number(e))return Ie(void 0,t,n);const i=e=>`0${e}`.slice(-2);let s=Te(e);const r=Ce(e),o=Ee(e);return s=t||s>0?`${s}:`:"",`${n&&e>0?"-":""}${s}${i(r)}:${i(o)}`}const Ne={getIconUrl(){const e=new URL(this.config.iconUrl,window.location),t=window.location.host?window.location.host:window.top.location.host,n=e.host!==t||S.isIE&&!window.svg4everybody;return{url:this.config.iconUrl,cors:n}},findElements(){try{return this.elements.controls=H.call(this,this.config.selectors.controls.wrapper),this.elements.buttons={play:W.call(this,this.config.selectors.buttons.play),pause:H.call(this,this.config.selectors.buttons.pause),restart:H.call(this,this.config.selectors.buttons.restart),rewind:H.call(this,this.config.selectors.buttons.rewind),fastForward:H.call(this,this.config.selectors.buttons.fastForward),mute:H.call(this,this.config.selectors.buttons.mute),pip:H.call(this,this.config.selectors.buttons.pip),airplay:H.call(this,this.config.selectors.buttons.airplay),settings:H.call(this,this.config.selectors.buttons.settings),captions:H.call(this,this.config.selectors.buttons.captions),fullscreen:H.call(this,this.config.selectors.buttons.fullscreen)},this.elements.progress=H.call(this,this.config.selectors.progress),this.elements.inputs={seek:H.call(this,this.config.selectors.inputs.seek),volume:H.call(this,this.config.selectors.inputs.volume)},this.elements.display={buffer:H.call(this,this.config.selectors.display.buffer),currentTime:H.call(this,this.config.selectors.display.currentTime),duration:H.call(this,this.config.selectors.display.duration)},E.element(this.elements.progress)&&(this.elements.display.seekTooltip=this.elements.progress.querySelector(`.${this.config.classNames.tooltip}`)),!0}catch(e){return this.debug.warn("It looks like there is a problem with your custom controls HTML",e),this.toggleNativeControls(!0),!1}},createIcon(e,t){const n="http://www.w3.org/2000/svg",i=Ne.getIconUrl.call(this),s=`${i.cors?"":i.url}#${this.config.iconPrefix}`,r=document.createElementNS(n,"svg");P(r,R(t,{"aria-hidden":"true",focusable:"false"}));const o=document.createElementNS(n,"use"),a=`${s}-${e}`;return"href"in o&&o.setAttributeNS("http://www.w3.org/1999/xlink","href",a),o.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a),r.appendChild(o),r},createLabel(e,t={}){const n=we.get(e,this.config);return D("span",{...t,class:[t.class,this.config.classNames.hidden].filter(Boolean).join(" ")},n)},createBadge(e){if(E.empty(e))return null;const t=D("span",{class:this.config.classNames.menu.value});return t.appendChild(D("span",{class:this.config.classNames.menu.badge},e)),t},createButton(e,t){const n=R({},t);let i=ye(e);const s={element:"button",toggle:!1,label:null,icon:null,labelPressed:null,iconPressed:null};switch(["element","icon","label"].forEach((e=>{Object.keys(n).includes(e)&&(s[e]=n[e],delete n[e])})),"button"!==s.element||Object.keys(n).includes("type")||(n.type="button"),Object.keys(n).includes("class")?n.class.split(" ").some((e=>e===this.config.classNames.control))||R(n,{class:`${n.class} ${this.config.classNames.control}`}):n.class=this.config.classNames.control,e){case"play":s.toggle=!0,s.label="play",s.labelPressed="pause",s.icon="play",s.iconPressed="pause";break;case"mute":s.toggle=!0,s.label="mute",s.labelPressed="unmute",s.icon="volume",s.iconPressed="muted";break;case"captions":s.toggle=!0,s.label="enableCaptions",s.labelPressed="disableCaptions",s.icon="captions-off",s.iconPressed="captions-on";break;case"fullscreen":s.toggle=!0,s.label="enterFullscreen",s.labelPressed="exitFullscreen",s.icon="enter-fullscreen",s.iconPressed="exit-fullscreen";break;case"play-large":n.class+=` ${this.config.classNames.control}--overlaid`,i="play",s.label="play",s.icon="play";break;default:E.empty(s.label)&&(s.label=i),E.empty(s.icon)&&(s.icon=e)}const r=D(s.element);return s.toggle?(r.appendChild(Ne.createIcon.call(this,s.iconPressed,{class:"icon--pressed"})),r.appendChild(Ne.createIcon.call(this,s.icon,{class:"icon--not-pressed"})),r.appendChild(Ne.createLabel.call(this,s.labelPressed,{class:"label--pressed"})),r.appendChild(Ne.createLabel.call(this,s.label,{class:"label--not-pressed"}))):(r.appendChild(Ne.createIcon.call(this,s.icon)),r.appendChild(Ne.createLabel.call(this,s.label))),R(n,V(this.config.selectors.buttons[i],n)),P(r,n),"play"===i?(E.array(this.elements.buttons[i])||(this.elements.buttons[i]=[]),this.elements.buttons[i].push(r)):this.elements.buttons[i]=r,r},createRange(e,t){const n=D("input",R(V(this.config.selectors.inputs[e]),{type:"range",min:0,max:100,step:.01,value:0,autocomplete:"off",role:"slider","aria-label":we.get(e,this.config),"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":0},t));return this.elements.inputs[e]=n,Ne.updateRangeFill.call(this,n),g.setup(n),n},createProgress(e,t){const n=D("progress",R(V(this.config.selectors.display[e]),{min:0,max:100,value:0,role:"progressbar","aria-hidden":!0},t));if("volume"!==e){n.appendChild(D("span",null,"0"));const t={played:"played",buffer:"buffered"}[e],i=t?we.get(t,this.config):"";n.innerText=`% ${i.toLowerCase()}`}return this.elements.display[e]=n,n},createTime(e,t){const n=V(this.config.selectors.display[e],t),i=D("div",R(n,{class:`${n.class?n.class:""} ${this.config.classNames.display.time} `.trim(),"aria-label":we.get(e,this.config),role:"timer"}),"00:00");return this.elements.display[e]=i,i},bindMenuItemShortcuts(e,t){Y.call(this,e,"keydown keyup",(n=>{if(![" ","ArrowUp","ArrowDown","ArrowRight"].includes(n.key))return;if(n.preventDefault(),n.stopPropagation(),"keydown"===n.type)return;const i=q(e,'[role="menuitemradio"]');if(!i&&[" ","ArrowRight"].includes(n.key))Ne.showMenuPanel.call(this,t,!0);else{let t;" "!==n.key&&("ArrowDown"===n.key||i&&"ArrowRight"===n.key?(t=e.nextElementSibling,E.element(t)||(t=e.parentNode.firstElementChild)):(t=e.previousElementSibling,E.element(t)||(t=e.parentNode.lastElementChild)),$.call(this,t,!0))}}),!1),Y.call(this,e,"keyup",(e=>{"Return"===e.key&&Ne.focusFirstMenuItem.call(this,null,!0)}))},createMenuItem({value:e,list:t,type:n,title:i,badge:s=null,checked:r=!1}){const o=V(this.config.selectors.inputs[n]),a=D("button",R(o,{type:"button",role:"menuitemradio",class:`${this.config.classNames.control} ${o.class?o.class:""}`.trim(),"aria-checked":r,value:e})),l=D("span");l.innerHTML=i,E.element(s)&&l.appendChild(s),a.appendChild(l),Object.defineProperty(a,"checked",{enumerable:!0,get:()=>"true"===a.getAttribute("aria-checked"),set(e){e&&Array.from(a.parentNode.children).filter((e=>q(e,'[role="menuitemradio"]'))).forEach((e=>e.setAttribute("aria-checked","false"))),a.setAttribute("aria-checked",e?"true":"false")}}),this.listeners.bind(a,"click keyup",(t=>{if(!E.keyboardEvent(t)||" "===t.key){switch(t.preventDefault(),t.stopPropagation(),a.checked=!0,n){case"language":this.currentTrack=Number(e);break;case"quality":this.quality=e;break;case"speed":this.speed=parseFloat(e)}Ne.showMenuPanel.call(this,"home",E.keyboardEvent(t))}}),n,!1),Ne.bindMenuItemShortcuts.call(this,a,n),t.appendChild(a)},formatTime(e=0,t=!1){return E.number(e)?Ie(e,Te(this.duration)>0,t):e},updateTimeDisplay(e=null,t=0,n=!1){E.element(e)&&E.number(t)&&(e.innerText=Ne.formatTime(t,n))},updateVolume(){this.supported.ui&&(E.element(this.elements.inputs.volume)&&Ne.setRange.call(this,this.elements.inputs.volume,this.muted?0:this.volume),E.element(this.elements.buttons.mute)&&(this.elements.buttons.mute.pressed=this.muted||0===this.volume))},setRange(e,t=0){E.element(e)&&(e.value=t,Ne.updateRangeFill.call(this,e))},updateProgress(e){if(!this.supported.ui||!E.event(e))return;let t=0;const n=(e,t)=>{const n=E.number(t)?t:0,i=E.element(e)?e:this.elements.display.buffer;if(E.element(i)){i.value=n;const e=i.getElementsByTagName("span")[0];E.element(e)&&(e.childNodes[0].nodeValue=n)}};if(e)switch(e.type){case"timeupdate":case"seeking":case"seeked":i=this.currentTime,s=this.duration,t=0===i||0===s||Number.isNaN(i)||Number.isNaN(s)?0:(i/s*100).toFixed(2),"timeupdate"===e.type&&Ne.setRange.call(this,this.elements.inputs.seek,t);break;case"playing":case"progress":n(this.elements.display.buffer,100*this.buffered)}var i,s},updateRangeFill(e){const t=E.event(e)?e.target:e;if(E.element(t)&&"range"===t.getAttribute("type")){if(q(t,this.config.selectors.inputs.seek)){t.setAttribute("aria-valuenow",this.currentTime);const e=Ne.formatTime(this.currentTime),n=Ne.formatTime(this.duration),i=we.get("seekLabel",this.config);t.setAttribute("aria-valuetext",i.replace("{currentTime}",e).replace("{duration}",n))}else if(q(t,this.config.selectors.inputs.volume)){const e=100*t.value;t.setAttribute("aria-valuenow",e),t.setAttribute("aria-valuetext",`${e.toFixed(1)}%`)}else t.setAttribute("aria-valuenow",t.value);(S.isWebKit||S.isIPadOS)&&t.style.setProperty("--value",t.value/t.max*100+"%")}},updateSeekTooltip(e){var t,n;if(!this.config.tooltips.seek||!E.element(this.elements.inputs.seek)||!E.element(this.elements.display.seekTooltip)||0===this.duration)return;const i=this.elements.display.seekTooltip,s=`${this.config.classNames.tooltip}--visible`,r=e=>B(i,s,e);if(this.touch)return void r(!1);let o=0;const a=this.elements.progress.getBoundingClientRect();if(E.event(e))o=100/a.width*(e.pageX-a.left);else{if(!j(i,s))return;o=parseFloat(i.style.left,10)}o<0?o=0:o>100&&(o=100);const l=this.duration/100*o;i.innerText=Ne.formatTime(l);const c=null===(t=this.config.markers)||void 0===t||null===(n=t.points)||void 0===n?void 0:n.find((({time:e})=>e===Math.round(l)));c&&i.insertAdjacentHTML("afterbegin",`${c.label}<br>`),i.style.left=`${o}%`,E.event(e)&&["mouseenter","mouseleave"].includes(e.type)&&r("mouseenter"===e.type)},timeUpdate(e){const t=!E.element(this.elements.display.duration)&&this.config.invertTime;Ne.updateTimeDisplay.call(this,this.elements.display.currentTime,t?this.duration-this.currentTime:this.currentTime,t),e&&"timeupdate"===e.type&&this.media.seeking||Ne.updateProgress.call(this,e)},durationUpdate(){if(!this.supported.ui||!this.config.invertTime&&this.currentTime)return;if(this.duration>=2**32)return z(this.elements.display.currentTime,!0),void z(this.elements.progress,!0);E.element(this.elements.inputs.seek)&&this.elements.inputs.seek.setAttribute("aria-valuemax",this.duration);const e=E.element(this.elements.display.duration);!e&&this.config.displayDuration&&this.paused&&Ne.updateTimeDisplay.call(this,this.elements.display.currentTime,this.duration),e&&Ne.updateTimeDisplay.call(this,this.elements.display.duration,this.duration),this.config.markers.enabled&&Ne.setMarkers.call(this),Ne.updateSeekTooltip.call(this)},toggleMenuButton(e,t){z(this.elements.settings.buttons[e],!t)},updateSetting(e,t,n){const i=this.elements.settings.panels[e];let s=null,r=t;if("captions"===e)s=this.currentTrack;else{if(s=E.empty(n)?this[e]:n,E.empty(s)&&(s=this.config[e].default),!E.empty(this.options[e])&&!this.options[e].includes(s))return void this.debug.warn(`Unsupported value of '${s}' for ${e}`);if(!this.config[e].options.includes(s))return void this.debug.warn(`Disabled value of '${s}' for ${e}`)}if(E.element(r)||(r=i&&i.querySelector('[role="menu"]')),!E.element(r))return;this.elements.settings.buttons[e].querySelector(`.${this.config.classNames.menu.value}`).innerHTML=Ne.getLabel.call(this,e,s);const o=r&&r.querySelector(`[value="${s}"]`);E.element(o)&&(o.checked=!0)},getLabel(e,t){switch(e){case"speed":return 1===t?we.get("normal",this.config):`${t}&times;`;case"quality":if(E.number(t)){const e=we.get(`qualityLabel.${t}`,this.config);return e.length?e:`${t}p`}return ge(t);case"captions":return Re.getLabel.call(this);default:return null}},setQualityMenu(e){if(!E.element(this.elements.settings.panels.quality))return;const t="quality",n=this.elements.settings.panels.quality.querySelector('[role="menu"]');E.array(e)&&(this.options.quality=se(e).filter((e=>this.config.quality.options.includes(e))));const i=!E.empty(this.options.quality)&&this.options.quality.length>1;if(Ne.toggleMenuButton.call(this,t,i),F(n),Ne.checkMenu.call(this),!i)return;const s=e=>{const t=we.get(`qualityBadge.${e}`,this.config);return t.length?Ne.createBadge.call(this,t):null};this.options.quality.sort(((e,t)=>{const n=this.config.quality.options;return n.indexOf(e)>n.indexOf(t)?1:-1})).forEach((e=>{Ne.createMenuItem.call(this,{value:e,list:n,type:t,title:Ne.getLabel.call(this,"quality",e),badge:s(e)})})),Ne.updateSetting.call(this,t,n)},setCaptionsMenu(){if(!E.element(this.elements.settings.panels.captions))return;const e="captions",t=this.elements.settings.panels.captions.querySelector('[role="menu"]'),n=Re.getTracks.call(this),i=Boolean(n.length);if(Ne.toggleMenuButton.call(this,e,i),F(t),Ne.checkMenu.call(this),!i)return;const s=n.map(((e,n)=>({value:n,checked:this.captions.toggled&&this.currentTrack===n,title:Re.getLabel.call(this,e),badge:e.language&&Ne.createBadge.call(this,e.language.toUpperCase()),list:t,type:"language"})));s.unshift({value:-1,checked:!this.captions.toggled,title:we.get("disabled",this.config),list:t,type:"language"}),s.forEach(Ne.createMenuItem.bind(this)),Ne.updateSetting.call(this,e,t)},setSpeedMenu(){if(!E.element(this.elements.settings.panels.speed))return;const e="speed",t=this.elements.settings.panels.speed.querySelector('[role="menu"]');this.options.speed=this.options.speed.filter((e=>e>=this.minimumSpeed&&e<=this.maximumSpeed));const n=!E.empty(this.options.speed)&&this.options.speed.length>1;Ne.toggleMenuButton.call(this,e,n),F(t),Ne.checkMenu.call(this),n&&(this.options.speed.forEach((n=>{Ne.createMenuItem.call(this,{value:n,list:t,type:e,title:Ne.getLabel.call(this,"speed",n)})})),Ne.updateSetting.call(this,e,t))},checkMenu(){const{buttons:e}=this.elements.settings,t=!E.empty(e)&&Object.values(e).some((e=>!e.hidden));z(this.elements.settings.menu,!t)},focusFirstMenuItem(e,t=!1){if(this.elements.settings.popup.hidden)return;let n=e;E.element(n)||(n=Object.values(this.elements.settings.panels).find((e=>!e.hidden)));const i=n.querySelector('[role^="menuitem"]');$.call(this,i,t)},toggleMenu(e){const{popup:t}=this.elements.settings,n=this.elements.buttons.settings;if(!E.element(t)||!E.element(n))return;const{hidden:i}=t;let s=i;if(E.boolean(e))s=e;else if(E.keyboardEvent(e)&&"Escape"===e.key)s=!1;else if(E.event(e)){const i=E.function(e.composedPath)?e.composedPath()[0]:e.target,r=t.contains(i);if(r||!r&&e.target!==n&&s)return}n.setAttribute("aria-expanded",s),z(t,!s),B(this.elements.container,this.config.classNames.menu.open,s),s&&E.keyboardEvent(e)?Ne.focusFirstMenuItem.call(this,null,!0):s||i||$.call(this,n,E.keyboardEvent(e))},getMenuSize(e){const t=e.cloneNode(!0);t.style.position="absolute",t.style.opacity=0,t.removeAttribute("hidden"),e.parentNode.appendChild(t);const n=t.scrollWidth,i=t.scrollHeight;return O(t),{width:n,height:i}},showMenuPanel(e="",t=!1){const n=this.elements.container.querySelector(`#plyr-settings-${this.id}-${e}`);if(!E.element(n))return;const i=n.parentNode,s=Array.from(i.children).find((e=>!e.hidden));if(G.transitions&&!G.reducedMotion){i.style.width=`${s.scrollWidth}px`,i.style.height=`${s.scrollHeight}px`;const e=Ne.getMenuSize.call(this,n),t=e=>{e.target===i&&["width","height"].includes(e.propertyName)&&(i.style.width="",i.style.height="",J.call(this,i,I,t))};Y.call(this,i,I,t),i.style.width=`${e.width}px`,i.style.height=`${e.height}px`}z(s,!0),z(n,!1),Ne.focusFirstMenuItem.call(this,n,t)},setDownloadUrl(){const e=this.elements.buttons.download;E.element(e)&&e.setAttribute("href",this.download)},create(e){const{bindMenuItemShortcuts:t,createButton:n,createProgress:i,createRange:s,createTime:r,setQualityMenu:o,setSpeedMenu:a,showMenuPanel:l}=Ne;this.elements.controls=null,E.array(this.config.controls)&&this.config.controls.includes("play-large")&&this.elements.container.appendChild(n.call(this,"play-large"));const c=D("div",V(this.config.selectors.controls.wrapper));this.elements.controls=c;const u={class:"plyr__controls__item"};return se(E.array(this.config.controls)?this.config.controls:[]).forEach((o=>{if("restart"===o&&c.appendChild(n.call(this,"restart",u)),"rewind"===o&&c.appendChild(n.call(this,"rewind",u)),"play"===o&&c.appendChild(n.call(this,"play",u)),"fast-forward"===o&&c.appendChild(n.call(this,"fast-forward",u)),"progress"===o){const t=D("div",{class:`${u.class} plyr__progress__container`}),n=D("div",V(this.config.selectors.progress));if(n.appendChild(s.call(this,"seek",{id:`plyr-seek-${e.id}`})),n.appendChild(i.call(this,"buffer")),this.config.tooltips.seek){const e=D("span",{class:this.config.classNames.tooltip},"00:00");n.appendChild(e),this.elements.display.seekTooltip=e}this.elements.progress=n,t.appendChild(this.elements.progress),c.appendChild(t)}if("current-time"===o&&c.appendChild(r.call(this,"currentTime",u)),"duration"===o&&c.appendChild(r.call(this,"duration",u)),"mute"===o||"volume"===o){let{volume:t}=this.elements;if(E.element(t)&&c.contains(t)||(t=D("div",R({},u,{class:`${u.class} plyr__volume`.trim()})),this.elements.volume=t,c.appendChild(t)),"mute"===o&&t.appendChild(n.call(this,"mute")),"volume"===o&&!S.isIos&&!S.isIPadOS){const n={max:1,step:.05,value:this.config.volume};t.appendChild(s.call(this,"volume",R(n,{id:`plyr-volume-${e.id}`})))}}if("captions"===o&&c.appendChild(n.call(this,"captions",u)),"settings"===o&&!E.empty(this.config.settings)){const i=D("div",R({},u,{class:`${u.class} plyr__menu`.trim(),hidden:""}));i.appendChild(n.call(this,"settings",{"aria-haspopup":!0,"aria-controls":`plyr-settings-${e.id}`,"aria-expanded":!1}));const s=D("div",{class:"plyr__menu__container",id:`plyr-settings-${e.id}`,hidden:""}),r=D("div"),o=D("div",{id:`plyr-settings-${e.id}-home`}),a=D("div",{role:"menu"});o.appendChild(a),r.appendChild(o),this.elements.settings.panels.home=o,this.config.settings.forEach((n=>{const i=D("button",R(V(this.config.selectors.buttons.settings),{type:"button",class:`${this.config.classNames.control} ${this.config.classNames.control}--forward`,role:"menuitem","aria-haspopup":!0,hidden:""}));t.call(this,i,n),Y.call(this,i,"click",(()=>{l.call(this,n,!1)}));const s=D("span",null,we.get(n,this.config)),o=D("span",{class:this.config.classNames.menu.value});o.innerHTML=e[n],s.appendChild(o),i.appendChild(s),a.appendChild(i);const c=D("div",{id:`plyr-settings-${e.id}-${n}`,hidden:""}),u=D("button",{type:"button",class:`${this.config.classNames.control} ${this.config.classNames.control}--back`});u.appendChild(D("span",{"aria-hidden":!0},we.get(n,this.config))),u.appendChild(D("span",{class:this.config.classNames.hidden},we.get("menuBack",this.config))),Y.call(this,c,"keydown",(e=>{"ArrowLeft"===e.key&&(e.preventDefault(),e.stopPropagation(),l.call(this,"home",!0))}),!1),Y.call(this,u,"click",(()=>{l.call(this,"home",!1)})),c.appendChild(u),c.appendChild(D("div",{role:"menu"})),r.appendChild(c),this.elements.settings.buttons[n]=i,this.elements.settings.panels[n]=c})),s.appendChild(r),i.appendChild(s),c.appendChild(i),this.elements.settings.popup=s,this.elements.settings.menu=i}if("pip"===o&&G.pip&&c.appendChild(n.call(this,"pip",u)),"airplay"===o&&G.airplay&&c.appendChild(n.call(this,"airplay",u)),"download"===o){const e=R({},u,{element:"a",href:this.download,target:"_blank"});this.isHTML5&&(e.download="");const{download:t}=this.config.urls;!E.url(t)&&this.isEmbed&&R(e,{icon:`logo-${this.provider}`,label:this.provider}),c.appendChild(n.call(this,"download",e))}"fullscreen"===o&&c.appendChild(n.call(this,"fullscreen",u))})),this.isHTML5&&o.call(this,pe.getQualityOptions.call(this)),a.call(this),c},inject(){if(this.config.loadSprite){const e=Ne.getIconUrl.call(this);e.cors&&xe(e.url,"sprite-plyr")}this.id=Math.floor(1e4*Math.random());let e=null;this.elements.controls=null;const t={id:this.id,seektime:this.config.seekTime,title:this.config.title};let n,i=!0;if(E.function(this.config.controls)&&(this.config.controls=this.config.controls.call(this,t)),this.config.controls||(this.config.controls=[]),E.element(this.config.controls)||E.string(this.config.controls)?e=this.config.controls:(e=Ne.create.call(this,{id:this.id,seektime:this.config.seekTime,speed:this.speed,quality:this.quality,captions:Re.getLabel.call(this)}),i=!1),i&&E.string(this.config.controls)&&(e=(e=>{let n=e;return Object.entries(t).forEach((([e,t])=>{n=me(n,`{${e}}`,t)})),n})(e)),E.string(this.config.selectors.controls.container)&&(n=document.querySelector(this.config.selectors.controls.container)),E.element(n)||(n=this.elements.container),n[E.element(e)?"insertAdjacentElement":"insertAdjacentHTML"]("afterbegin",e),E.element(this.elements.controls)||Ne.findElements.call(this),!E.empty(this.elements.buttons)){const e=e=>{const t=this.config.classNames.controlPressed;e.setAttribute("aria-pressed","false"),Object.defineProperty(e,"pressed",{configurable:!0,enumerable:!0,get:()=>j(e,t),set(n=!1){B(e,t,n),e.setAttribute("aria-pressed",n?"true":"false")}})};Object.values(this.elements.buttons).filter(Boolean).forEach((t=>{E.array(t)||E.nodeList(t)?Array.from(t).filter(Boolean).forEach(e):e(t)}))}if(S.isEdge&&N(n),this.config.tooltips.controls){const{classNames:e,selectors:t}=this.config,n=`${t.controls.wrapper} ${t.labels} .${e.hidden}`,i=W.call(this,n);Array.from(i).forEach((e=>{B(e,this.config.classNames.hidden,!1),B(e,this.config.classNames.tooltip,!0)}))}},setMediaMetadata(){try{"mediaSession"in navigator&&(navigator.mediaSession.metadata=new window.MediaMetadata({title:this.config.mediaMetadata.title,artist:this.config.mediaMetadata.artist,album:this.config.mediaMetadata.album,artwork:this.config.mediaMetadata.artwork}))}catch(e){}},setMarkers(){var e,t;if(!this.duration||this.elements.markers)return;const n=null===(e=this.config.markers)||void 0===e||null===(t=e.points)||void 0===t?void 0:t.filter((({time:e})=>e>0&&e<this.duration));if(null==n||!n.length)return;const i=document.createDocumentFragment(),s=document.createDocumentFragment();let r=null;const o=`${this.config.classNames.tooltip}--visible`,a=e=>B(r,o,e);n.forEach((e=>{const t=D("span",{class:this.config.classNames.marker},""),n=e.time/this.duration*100+"%";r&&(t.addEventListener("mouseenter",(()=>{e.label||(r.style.left=n,r.innerHTML=e.label,a(!0))})),t.addEventListener("mouseleave",(()=>{a(!1)}))),t.addEventListener("click",(()=>{this.currentTime=e.time})),t.style.left=n,s.appendChild(t)})),i.appendChild(s),this.config.tooltips.seek||(r=D("span",{class:this.config.classNames.tooltip},""),i.appendChild(r)),this.elements.markers={points:s,tip:r},this.elements.progress.appendChild(i)}};function Se(e,t=!0){let n=e;if(t){const e=document.createElement("a");e.href=n,n=e.href}try{return new URL(n)}catch(e){return null}}function Ae(e){const t=new URLSearchParams;return E.object(e)&&Object.entries(e).forEach((([e,n])=>{t.set(e,n)})),t}const Re={setup(){if(!this.supported.ui)return;if(!this.isVideo||this.isYouTube||this.isHTML5&&!G.textTracks)return void(E.array(this.config.controls)&&this.config.controls.includes("settings")&&this.config.settings.includes("captions")&&Ne.setCaptionsMenu.call(this));var e,t;if(E.element(this.elements.captions)||(this.elements.captions=D("div",V(this.config.selectors.captions)),this.elements.captions.setAttribute("dir","auto"),e=this.elements.captions,t=this.elements.wrapper,E.element(e)&&E.element(t)&&t.parentNode.insertBefore(e,t.nextSibling)),S.isIE&&window.URL){const e=this.media.querySelectorAll("track");Array.from(e).forEach((e=>{const t=e.getAttribute("src"),n=Se(t);null!==n&&n.hostname!==window.location.href.hostname&&["http:","https:"].includes(n.protocol)&&ke(t,"blob").then((t=>{e.setAttribute("src",window.URL.createObjectURL(t))})).catch((()=>{O(e)}))}))}const n=se((navigator.languages||[navigator.language||navigator.userLanguage||"en"]).map((e=>e.split("-")[0])));let i=(this.storage.get("language")||this.config.captions.language||"auto").toLowerCase();"auto"===i&&([i]=n);let s=this.storage.get("captions");if(E.boolean(s)||({active:s}=this.config.captions),Object.assign(this.captions,{toggled:!1,active:s,language:i,languages:n}),this.isHTML5){const e=this.config.captions.update?"addtrack removetrack":"removetrack";Y.call(this,this.media.textTracks,e,Re.update.bind(this))}setTimeout(Re.update.bind(this),0)},update(){const e=Re.getTracks.call(this,!0),{active:t,language:n,meta:i,currentTrackNode:s}=this.captions,r=Boolean(e.find((e=>e.language===n)));this.isHTML5&&this.isVideo&&e.filter((e=>!i.get(e))).forEach((e=>{this.debug.log("Track added",e),i.set(e,{default:"showing"===e.mode}),"showing"===e.mode&&(e.mode="hidden"),Y.call(this,e,"cuechange",(()=>Re.updateCues.call(this)))})),(r&&this.language!==n||!e.includes(s))&&(Re.setLanguage.call(this,n),Re.toggle.call(this,t&&r)),this.elements&&B(this.elements.container,this.config.classNames.captions.enabled,!E.empty(e)),E.array(this.config.controls)&&this.config.controls.includes("settings")&&this.config.settings.includes("captions")&&Ne.setCaptionsMenu.call(this)},toggle(e,t=!0){if(!this.supported.ui)return;const{toggled:n}=this.captions,i=this.config.classNames.captions.active,s=E.nullOrUndefined(e)?!n:e;if(s!==n){if(t||(this.captions.active=s,this.storage.set({captions:s})),!this.language&&s&&!t){const e=Re.getTracks.call(this),t=Re.findTrack.call(this,[this.captions.language,...this.captions.languages],!0);return this.captions.language=t.language,void Re.set.call(this,e.indexOf(t))}this.elements.buttons.captions&&(this.elements.buttons.captions.pressed=s),B(this.elements.container,i,s),this.captions.toggled=s,Ne.updateSetting.call(this,"captions"),ee.call(this,this.media,s?"captionsenabled":"captionsdisabled")}setTimeout((()=>{s&&this.captions.toggled&&(this.captions.currentTrackNode.mode="hidden")}))},set(e,t=!0){const n=Re.getTracks.call(this);if(-1!==e)if(E.number(e))if(e in n){if(this.captions.currentTrack!==e){this.captions.currentTrack=e;const i=n[e],{language:s}=i||{};this.captions.currentTrackNode=i,Ne.updateSetting.call(this,"captions"),t||(this.captions.language=s,this.storage.set({language:s})),this.isVimeo&&this.embed.enableTextTrack(s),ee.call(this,this.media,"languagechange")}Re.toggle.call(this,!0,t),this.isHTML5&&this.isVideo&&Re.updateCues.call(this)}else this.debug.warn("Track not found",e);else this.debug.warn("Invalid caption argument",e);else Re.toggle.call(this,!1,t)},setLanguage(e,t=!0){if(!E.string(e))return void this.debug.warn("Invalid language argument",e);const n=e.toLowerCase();this.captions.language=n;const i=Re.getTracks.call(this),s=Re.findTrack.call(this,[n]);Re.set.call(this,i.indexOf(s),t)},getTracks(e=!1){return Array.from((this.media||{}).textTracks||[]).filter((t=>!this.isHTML5||e||this.captions.meta.has(t))).filter((e=>["captions","subtitles"].includes(e.kind)))},findTrack(e,t=!1){const n=Re.getTracks.call(this),i=e=>Number((this.captions.meta.get(e)||{}).default),s=Array.from(n).sort(((e,t)=>i(t)-i(e)));let r;return e.every((e=>(r=s.find((t=>t.language===e)),!r))),r||(t?s[0]:void 0)},getCurrentTrack(){return Re.getTracks.call(this)[this.currentTrack]},getLabel(e){let t=e;return!E.track(t)&&G.textTracks&&this.captions.toggled&&(t=Re.getCurrentTrack.call(this)),E.track(t)?E.empty(t.label)?E.empty(t.language)?we.get("enabled",this.config):e.language.toUpperCase():t.label:we.get("disabled",this.config)},updateCues(e){if(!this.supported.ui)return;if(!E.element(this.elements.captions))return void this.debug.warn("No captions element to render to");if(!E.nullOrUndefined(e)&&!Array.isArray(e))return void this.debug.warn("updateCues: Invalid input",e);let t=e;if(!t){const e=Re.getCurrentTrack.call(this);t=Array.from((e||{}).activeCues||[]).map((e=>e.getCueAsHTML())).map(ve)}const n=t.map((e=>e.trim())).join("\n");if(n!==this.elements.captions.innerHTML){F(this.elements.captions);const e=D("span",V(this.config.selectors.caption));e.innerHTML=n,this.elements.captions.appendChild(e),ee.call(this,this.media,"cuechange")}}},Le={enabled:!0,title:"",debug:!1,autoplay:!1,autopause:!0,playsinline:!0,seekTime:10,volume:1,muted:!1,duration:null,displayDuration:!0,invertTime:!0,toggleInvert:!0,ratio:null,clickToPlay:!0,hideControls:!0,resetOnEnd:!1,disableContextMenu:!0,loadSprite:!0,iconPrefix:"plyr",iconUrl:"https://cdn.plyr.io/3.7.8/plyr.svg",blankVideo:"https://cdn.plyr.io/static/blank.mp4",quality:{default:576,options:[4320,2880,2160,1440,1080,720,576,480,360,240],forced:!1,onChange:null},loop:{active:!1},speed:{selected:1,options:[.5,.75,1,1.25,1.5,1.75,2,4]},keyboard:{focused:!0,global:!1},tooltips:{controls:!1,seek:!0},captions:{active:!1,language:"auto",update:!1},fullscreen:{enabled:!0,fallback:!0,iosNative:!1},storage:{enabled:!0,key:"plyr"},controls:["play-large","play","progress","current-time","mute","volume","captions","settings","pip","airplay","fullscreen"],settings:["captions","quality","speed"],i18n:{restart:"Restart",rewind:"Rewind {seektime}s",play:"Play",pause:"Pause",fastForward:"Forward {seektime}s",seek:"Seek",seekLabel:"{currentTime} of {duration}",played:"Played",buffered:"Buffered",currentTime:"Current time",duration:"Duration",volume:"Volume",mute:"Mute",unmute:"Unmute",enableCaptions:"Enable captions",disableCaptions:"Disable captions",download:"Download",enterFullscreen:"Enter fullscreen",exitFullscreen:"Exit fullscreen",frameTitle:"Player for {title}",captions:"Captions",settings:"Settings",pip:"PIP",menuBack:"Go back to previous menu",speed:"Speed",normal:"Normal",quality:"Quality",loop:"Loop",start:"Start",end:"End",all:"All",reset:"Reset",disabled:"Disabled",enabled:"Enabled",advertisement:"Ad",qualityBadge:{2160:"4K",1440:"HD",1080:"HD",720:"HD",576:"SD",480:"SD"}},urls:{download:null,vimeo:{sdk:"https://player.vimeo.com/api/player.js",iframe:"https://player.vimeo.com/video/{0}?{1}",api:"https://vimeo.com/api/oembed.json?url={0}"},youtube:{sdk:"https://www.youtube.com/iframe_api",api:"https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}"},googleIMA:{sdk:"https://imasdk.googleapis.com/js/sdkloader/ima3.js"}},listeners:{seek:null,play:null,pause:null,restart:null,rewind:null,fastForward:null,mute:null,volume:null,captions:null,download:null,fullscreen:null,pip:null,airplay:null,speed:null,quality:null,loop:null,language:null},events:["ended","progress","stalled","playing","waiting","canplay","canplaythrough","loadstart","loadeddata","loadedmetadata","timeupdate","volumechange","play","pause","error","seeking","seeked","emptied","ratechange","cuechange","download","enterfullscreen","exitfullscreen","captionsenabled","captionsdisabled","languagechange","controlshidden","controlsshown","ready","statechange","qualitychange","adsloaded","adscontentpause","adscontentresume","adstarted","adsmidpoint","adscomplete","adsallcomplete","adsimpression","adsclick"],selectors:{editable:"input, textarea, select, [contenteditable]",container:".plyr",controls:{container:null,wrapper:".plyr__controls"},labels:"[data-plyr]",buttons:{play:'[data-plyr="play"]',pause:'[data-plyr="pause"]',restart:'[data-plyr="restart"]',rewind:'[data-plyr="rewind"]',fastForward:'[data-plyr="fast-forward"]',mute:'[data-plyr="mute"]',captions:'[data-plyr="captions"]',download:'[data-plyr="download"]',fullscreen:'[data-plyr="fullscreen"]',pip:'[data-plyr="pip"]',airplay:'[data-plyr="airplay"]',settings:'[data-plyr="settings"]',loop:'[data-plyr="loop"]'},inputs:{seek:'[data-plyr="seek"]',volume:'[data-plyr="volume"]',speed:'[data-plyr="speed"]',language:'[data-plyr="language"]',quality:'[data-plyr="quality"]'},display:{currentTime:".plyr__time--current",duration:".plyr__time--duration",buffer:".plyr__progress__buffer",loop:".plyr__progress__loop",volume:".plyr__volume--display"},progress:".plyr__progress",captions:".plyr__captions",caption:".plyr__caption"},classNames:{type:"plyr--{0}",provider:"plyr--{0}",video:"plyr__video-wrapper",embed:"plyr__video-embed",videoFixedRatio:"plyr__video-wrapper--fixed-ratio",embedContainer:"plyr__video-embed__container",poster:"plyr__poster",posterEnabled:"plyr__poster-enabled",ads:"plyr__ads",control:"plyr__control",controlPressed:"plyr__control--pressed",playing:"plyr--playing",paused:"plyr--paused",stopped:"plyr--stopped",loading:"plyr--loading",hover:"plyr--hover",tooltip:"plyr__tooltip",cues:"plyr__cues",marker:"plyr__progress__marker",hidden:"plyr__sr-only",hideControls:"plyr--hide-controls",isTouch:"plyr--is-touch",uiSupported:"plyr--full-ui",noTransition:"plyr--no-transition",display:{time:"plyr__time"},menu:{value:"plyr__menu__value",badge:"plyr__badge",open:"plyr--menu-open"},captions:{enabled:"plyr--captions-enabled",active:"plyr--captions-active"},fullscreen:{enabled:"plyr--fullscreen-enabled",fallback:"plyr--fullscreen-fallback"},pip:{supported:"plyr--pip-supported",active:"plyr--pip-active"},airplay:{supported:"plyr--airplay-supported",active:"plyr--airplay-active"},previewThumbnails:{thumbContainer:"plyr__preview-thumb",thumbContainerShown:"plyr__preview-thumb--is-shown",imageContainer:"plyr__preview-thumb__image-container",timeContainer:"plyr__preview-thumb__time-container",scrubbingContainer:"plyr__preview-scrubbing",scrubbingContainerShown:"plyr__preview-scrubbing--is-shown"}},attributes:{embed:{provider:"data-plyr-provider",id:"data-plyr-embed-id",hash:"data-plyr-embed-hash"}},ads:{enabled:!1,publisherId:"",tagUrl:""},previewThumbnails:{enabled:!1,src:""},vimeo:{byline:!1,portrait:!1,title:!1,speed:!0,transparent:!1,customControls:!0,referrerPolicy:null,premium:!1},youtube:{rel:0,showinfo:0,iv_load_policy:3,modestbranding:1,customControls:!0,noCookie:!1},mediaMetadata:{title:"",artist:"",album:"",artwork:[]},markers:{enabled:!1,points:[]}},Pe="picture-in-picture",De="inline",Me={html5:"html5",youtube:"youtube",vimeo:"vimeo"},Oe="audio",Fe="video",Ue=()=>{};class Ve{get log(){return this.enabled?Function.prototype.bind.call(console.log,console):Ue}get warn(){return this.enabled?Function.prototype.bind.call(console.warn,console):Ue}get error(){return this.enabled?Function.prototype.bind.call(console.error,console):Ue}constructor(e=!1){this.enabled=window.console&&e,this.enabled&&this.log("Debugging enabled")}}class ze{static get nativeSupported(){return!!(document.fullscreenEnabled||document.webkitFullscreenEnabled||document.mozFullScreenEnabled||document.msFullscreenEnabled)}get useNative(){return ze.nativeSupported&&!this.forceFallback}static get prefix(){if(E.function(document.exitFullscreen))return"";let e="";return["webkit","moz","ms"].some((t=>!(!E.function(document[`${t}ExitFullscreen`])&&!E.function(document[`${t}CancelFullScreen`])||(e=t,0)))),e}static get property(){return"moz"===this.prefix?"FullScreen":"Fullscreen"}get supported(){return[this.player.config.fullscreen.enabled,this.player.isVideo,ze.nativeSupported||this.player.config.fullscreen.fallback,!this.player.isYouTube||ze.nativeSupported||!S.isIos||this.player.config.playsinline&&!this.player.config.fullscreen.iosNative].every(Boolean)}get active(){if(!this.supported)return!1;if(!ze.nativeSupported||this.forceFallback)return j(this.target,this.player.config.classNames.fullscreen.fallback);const e=this.prefix?this.target.getRootNode()[`${this.prefix}${this.property}Element`]:this.target.getRootNode().fullscreenElement;return e&&e.shadowRoot?e===this.target.getRootNode().host:e===this.target}get target(){var e;return S.isIos&&this.player.config.fullscreen.iosNative?this.player.media:null!==(e=this.player.elements.fullscreen)&&void 0!==e?e:this.player.elements.container}constructor(t){e(this,"onChange",(()=>{if(!this.supported)return;const e=this.player.elements.buttons.fullscreen;E.element(e)&&(e.pressed=this.active);const t=this.target===this.player.media?this.target:this.player.elements.container;ee.call(this.player,t,this.active?"enterfullscreen":"exitfullscreen",!0)})),e(this,"toggleFallback",((e=!1)=>{var t,n;if(e?this.scrollPosition={x:null!==(t=window.scrollX)&&void 0!==t?t:0,y:null!==(n=window.scrollY)&&void 0!==n?n:0}:window.scrollTo(this.scrollPosition.x,this.scrollPosition.y),document.body.style.overflow=e?"hidden":"",B(this.target,this.player.config.classNames.fullscreen.fallback,e),S.isIos){let t=document.head.querySelector('meta[name="viewport"]');const n="viewport-fit=cover";t||(t=document.createElement("meta"),t.setAttribute("name","viewport"));const i=E.string(t.content)&&t.content.includes(n);e?(this.cleanupViewport=!i,i||(t.content+=`,${n}`)):this.cleanupViewport&&(t.content=t.content.split(",").filter((e=>e.trim()!==n)).join(","))}this.onChange()})),e(this,"trapFocus",(e=>{if(S.isIos||S.isIPadOS||!this.active||"Tab"!==e.key)return;const t=document.activeElement,n=W.call(this.player,"a[href], button:not(:disabled), input:not(:disabled), [tabindex]"),[i]=n,s=n[n.length-1];t!==s||e.shiftKey?t===i&&e.shiftKey&&(s.focus(),e.preventDefault()):(i.focus(),e.preventDefault())})),e(this,"update",(()=>{if(this.supported){let e;e=this.forceFallback?"Fallback (forced)":ze.nativeSupported?"Native":"Fallback",this.player.debug.log(`${e} fullscreen enabled`)}else this.player.debug.log("Fullscreen not supported and fallback disabled");B(this.player.elements.container,this.player.config.classNames.fullscreen.enabled,this.supported)})),e(this,"enter",(()=>{this.supported&&(S.isIos&&this.player.config.fullscreen.iosNative?this.player.isVimeo?this.player.embed.requestFullscreen():this.target.webkitEnterFullscreen():!ze.nativeSupported||this.forceFallback?this.toggleFallback(!0):this.prefix?E.empty(this.prefix)||this.target[`${this.prefix}Request${this.property}`]():this.target.requestFullscreen({navigationUI:"hide"}))})),e(this,"exit",(()=>{if(this.supported)if(S.isIos&&this.player.config.fullscreen.iosNative)this.player.isVimeo?this.player.embed.exitFullscreen():this.target.webkitEnterFullscreen(),ie(this.player.play());else if(!ze.nativeSupported||this.forceFallback)this.toggleFallback(!1);else if(this.prefix){if(!E.empty(this.prefix)){const e="moz"===this.prefix?"Cancel":"Exit";document[`${this.prefix}${e}${this.property}`]()}}else(document.cancelFullScreen||document.exitFullscreen).call(document)})),e(this,"toggle",(()=>{this.active?this.exit():this.enter()})),this.player=t,this.prefix=ze.prefix,this.property=ze.property,this.scrollPosition={x:0,y:0},this.forceFallback="force"===t.config.fullscreen.fallback,this.player.elements.fullscreen=t.config.fullscreen.container&&function(e,t){const{prototype:n}=Element;return(n.closest||function(){let e=this;do{if(q.matches(e,t))return e;e=e.parentElement||e.parentNode}while(null!==e&&1===e.nodeType);return null}).call(e,t)}(this.player.elements.container,t.config.fullscreen.container),Y.call(this.player,document,"ms"===this.prefix?"MSFullscreenChange":`${this.prefix}fullscreenchange`,(()=>{this.onChange()})),Y.call(this.player,this.player.elements.container,"dblclick",(e=>{E.element(this.player.elements.controls)&&this.player.elements.controls.contains(e.target)||this.player.listeners.proxy(e,this.toggle,"fullscreen")})),Y.call(this,this.player.elements.container,"keydown",(e=>this.trapFocus(e))),this.update()}}function Be(e,t=1){return new Promise(((n,i)=>{const s=new Image,r=()=>{delete s.onload,delete s.onerror,(s.naturalWidth>=t?n:i)(s)};Object.assign(s,{onload:r,onerror:r,src:e})}))}const je={addStyleHook(){B(this.elements.container,this.config.selectors.container.replace(".",""),!0),B(this.elements.container,this.config.classNames.uiSupported,this.supported.ui)},toggleNativeControls(e=!1){e&&this.isHTML5?this.media.setAttribute("controls",""):this.media.removeAttribute("controls")},build(){if(this.listeners.media(),!this.supported.ui)return this.debug.warn(`Basic support only for ${this.provider} ${this.type}`),void je.toggleNativeControls.call(this,!0);E.element(this.elements.controls)||(Ne.inject.call(this),this.listeners.controls()),je.toggleNativeControls.call(this),this.isHTML5&&Re.setup.call(this),this.volume=null,this.muted=null,this.loop=null,this.quality=null,this.speed=null,Ne.updateVolume.call(this),Ne.timeUpdate.call(this),Ne.durationUpdate.call(this),je.checkPlaying.call(this),B(this.elements.container,this.config.classNames.pip.supported,G.pip&&this.isHTML5&&this.isVideo),B(this.elements.container,this.config.classNames.airplay.supported,G.airplay&&this.isHTML5),B(this.elements.container,this.config.classNames.isTouch,this.touch),this.ready=!0,setTimeout((()=>{ee.call(this,this.media,"ready")}),0),je.setTitle.call(this),this.poster&&je.setPoster.call(this,this.poster,!1).catch((()=>{})),this.config.duration&&Ne.durationUpdate.call(this),this.config.mediaMetadata&&Ne.setMediaMetadata.call(this)},setTitle(){let e=we.get("play",this.config);if(E.string(this.config.title)&&!E.empty(this.config.title)&&(e+=`, ${this.config.title}`),Array.from(this.elements.buttons.play||[]).forEach((t=>{t.setAttribute("aria-label",e)})),this.isEmbed){const e=H.call(this,"iframe");if(!E.element(e))return;const t=E.empty(this.config.title)?"video":this.config.title,n=we.get("frameTitle",this.config);e.setAttribute("title",n.replace("{title}",t))}},togglePoster(e){B(this.elements.container,this.config.classNames.posterEnabled,e)},setPoster(e,t=!0){return t&&this.poster?Promise.reject(new Error("Poster already set")):(this.media.setAttribute("data-poster",e),this.elements.poster.removeAttribute("hidden"),ne.call(this).then((()=>Be(e))).catch((t=>{throw e===this.poster&&je.togglePoster.call(this,!1),t})).then((()=>{if(e!==this.poster)throw new Error("setPoster cancelled by later call to setPoster")})).then((()=>(Object.assign(this.elements.poster.style,{backgroundImage:`url('${e}')`,backgroundSize:""}),je.togglePoster.call(this,!0),e))))},checkPlaying(e){B(this.elements.container,this.config.classNames.playing,this.playing),B(this.elements.container,this.config.classNames.paused,this.paused),B(this.elements.container,this.config.classNames.stopped,this.stopped),Array.from(this.elements.buttons.play||[]).forEach((e=>{Object.assign(e,{pressed:this.playing}),e.setAttribute("aria-label",we.get(this.playing?"pause":"play",this.config))})),E.event(e)&&"timeupdate"===e.type||je.toggleControls.call(this)},checkLoading(e){this.loading=["stalled","waiting"].includes(e.type),clearTimeout(this.timers.loading),this.timers.loading=setTimeout((()=>{B(this.elements.container,this.config.classNames.loading,this.loading),je.toggleControls.call(this)}),this.loading?250:0)},toggleControls(e){const{controls:t}=this.elements;if(t&&this.config.hideControls){const n=this.touch&&this.lastSeekTime+2e3>Date.now();this.toggleControls(Boolean(e||this.loading||this.paused||t.pressed||t.hover||n))}},migrateStyles(){Object.values({...this.media.style}).filter((e=>!E.empty(e)&&E.string(e)&&e.startsWith("--plyr"))).forEach((e=>{this.elements.container.style.setProperty(e,this.media.style.getPropertyValue(e)),this.media.style.removeProperty(e)})),E.empty(this.media.style)&&this.media.removeAttribute("style")}};class qe{handleKey(e){const{player:t}=this,{elements:n}=t,{key:i,type:s,altKey:r,ctrlKey:o,metaKey:a,shiftKey:l}=e,c="keydown"===s,u=c&&i===this.lastKey;var h;if(!(r||o||a||l)&&i)if(c){const s=document.activeElement;if(E.element(s)){const{editable:i}=t.config.selectors,{seek:r}=n.inputs;if(s!==r&&q(s,i))return;if(" "===e.key&&q(s,'button, [role^="menuitem"]'))return}switch([" ","ArrowLeft","ArrowUp","ArrowRight","ArrowDown","0","1","2","3","4","5","6","7","8","9","c","f","k","l","m"].includes(i)&&(e.preventDefault(),e.stopPropagation()),i){case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":u||(h=parseInt(i,10),t.currentTime=t.duration/10*h);break;case" ":case"k":u||ie(t.togglePlay());break;case"ArrowUp":t.increaseVolume(.1);break;case"ArrowDown":t.decreaseVolume(.1);break;case"m":u||(t.muted=!t.muted);break;case"ArrowRight":t.forward();break;case"ArrowLeft":t.rewind();break;case"f":t.fullscreen.toggle();break;case"c":u||t.toggleCaptions();break;case"l":t.loop=!t.loop}"Escape"===i&&!t.fullscreen.usingNative&&t.fullscreen.active&&t.fullscreen.toggle(),this.lastKey=i}else this.lastKey=null}toggleMenu(e){Ne.toggleMenu.call(this.player,e)}constructor(t){e(this,"firstTouch",(()=>{const{player:e}=this,{elements:t}=e;e.touch=!0,B(t.container,e.config.classNames.isTouch,!0)})),e(this,"global",((e=!0)=>{const{player:t}=this;t.config.keyboard.global&&Q.call(t,window,"keydown keyup",this.handleKey,e,!1),Q.call(t,document.body,"click",this.toggleMenu,e),Z.call(t,document.body,"touchstart",this.firstTouch)})),e(this,"container",(()=>{const{player:e}=this,{config:t,elements:n,timers:i}=e;!t.keyboard.global&&t.keyboard.focused&&Y.call(e,n.container,"keydown keyup",this.handleKey,!1),Y.call(e,n.container,"mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen",(t=>{const{controls:s}=n;s&&"enterfullscreen"===t.type&&(s.pressed=!1,s.hover=!1);let r=0;["touchstart","touchmove","mousemove"].includes(t.type)&&(je.toggleControls.call(e,!0),r=e.touch?3e3:2e3),clearTimeout(i.controls),i.controls=setTimeout((()=>je.toggleControls.call(e,!1)),r)}));const s=()=>{if(!e.isVimeo||e.config.vimeo.premium)return;const t=n.wrapper,{active:i}=e.fullscreen,[s,r]=ue.call(e),o=oe(`aspect-ratio: ${s} / ${r}`);if(!i)return void(o?(t.style.width=null,t.style.height=null):(t.style.maxWidth=null,t.style.margin=null));const[a,l]=[Math.max(document.documentElement.clientWidth||0,window.innerWidth||0),Math.max(document.documentElement.clientHeight||0,window.innerHeight||0)],c=a/l>s/r;o?(t.style.width=c?"auto":"100%",t.style.height=c?"100%":"auto"):(t.style.maxWidth=c?l/r*s+"px":null,t.style.margin=c?"0 auto":null)},r=()=>{clearTimeout(i.resized),i.resized=setTimeout(s,50)};Y.call(e,n.container,"enterfullscreen exitfullscreen",(t=>{const{target:i}=e.fullscreen;i===n.container&&(!e.isEmbed&&E.empty(e.config.ratio)||(s(),("enterfullscreen"===t.type?Y:J).call(e,window,"resize",r)))}))})),e(this,"media",(()=>{const{player:e}=this,{elements:t}=e;if(Y.call(e,e.media,"timeupdate seeking seeked",(t=>Ne.timeUpdate.call(e,t))),Y.call(e,e.media,"durationchange loadeddata loadedmetadata",(t=>Ne.durationUpdate.call(e,t))),Y.call(e,e.media,"ended",(()=>{e.isHTML5&&e.isVideo&&e.config.resetOnEnd&&(e.restart(),e.pause())})),Y.call(e,e.media,"progress playing seeking seeked",(t=>Ne.updateProgress.call(e,t))),Y.call(e,e.media,"volumechange",(t=>Ne.updateVolume.call(e,t))),Y.call(e,e.media,"playing play pause ended emptied timeupdate",(t=>je.checkPlaying.call(e,t))),Y.call(e,e.media,"waiting canplay seeked playing",(t=>je.checkLoading.call(e,t))),e.supported.ui&&e.config.clickToPlay&&!e.isAudio){const n=H.call(e,`.${e.config.classNames.video}`);if(!E.element(n))return;Y.call(e,t.container,"click",(i=>{([t.container,n].includes(i.target)||n.contains(i.target))&&(e.touch&&e.config.hideControls||(e.ended?(this.proxy(i,e.restart,"restart"),this.proxy(i,(()=>{ie(e.play())}),"play")):this.proxy(i,(()=>{ie(e.togglePlay())}),"play")))}))}e.supported.ui&&e.config.disableContextMenu&&Y.call(e,t.wrapper,"contextmenu",(e=>{e.preventDefault()}),!1),Y.call(e,e.media,"volumechange",(()=>{e.storage.set({volume:e.volume,muted:e.muted})})),Y.call(e,e.media,"ratechange",(()=>{Ne.updateSetting.call(e,"speed"),e.storage.set({speed:e.speed})})),Y.call(e,e.media,"qualitychange",(t=>{Ne.updateSetting.call(e,"quality",null,t.detail.quality)})),Y.call(e,e.media,"ready qualitychange",(()=>{Ne.setDownloadUrl.call(e)}));const n=e.config.events.concat(["keyup","keydown"]).join(" ");Y.call(e,e.media,n,(n=>{let{detail:i={}}=n;"error"===n.type&&(i=e.media.error),ee.call(e,t.container,n.type,!0,i)}))})),e(this,"proxy",((e,t,n)=>{const{player:i}=this,s=i.config.listeners[n];let r=!0;E.function(s)&&(r=s.call(i,e)),!1!==r&&E.function(t)&&t.call(i,e)})),e(this,"bind",((e,t,n,i,s=!0)=>{const{player:r}=this,o=r.config.listeners[i],a=E.function(o);Y.call(r,e,t,(e=>this.proxy(e,n,i)),s&&!a)})),e(this,"controls",(()=>{const{player:e}=this,{elements:t}=e,n=S.isIE?"change":"input";if(t.buttons.play&&Array.from(t.buttons.play).forEach((t=>{this.bind(t,"click",(()=>{ie(e.togglePlay())}),"play")})),this.bind(t.buttons.restart,"click",e.restart,"restart"),this.bind(t.buttons.rewind,"click",(()=>{e.lastSeekTime=Date.now(),e.rewind()}),"rewind"),this.bind(t.buttons.fastForward,"click",(()=>{e.lastSeekTime=Date.now(),e.forward()}),"fastForward"),this.bind(t.buttons.mute,"click",(()=>{e.muted=!e.muted}),"mute"),this.bind(t.buttons.captions,"click",(()=>e.toggleCaptions())),this.bind(t.buttons.download,"click",(()=>{ee.call(e,e.media,"download")}),"download"),this.bind(t.buttons.fullscreen,"click",(()=>{e.fullscreen.toggle()}),"fullscreen"),this.bind(t.buttons.pip,"click",(()=>{e.pip="toggle"}),"pip"),this.bind(t.buttons.airplay,"click",e.airplay,"airplay"),this.bind(t.buttons.settings,"click",(t=>{t.stopPropagation(),t.preventDefault(),Ne.toggleMenu.call(e,t)}),null,!1),this.bind(t.buttons.settings,"keyup",(t=>{[" ","Enter"].includes(t.key)&&("Enter"!==t.key?(t.preventDefault(),t.stopPropagation(),Ne.toggleMenu.call(e,t)):Ne.focusFirstMenuItem.call(e,null,!0))}),null,!1),this.bind(t.settings.menu,"keydown",(t=>{"Escape"===t.key&&Ne.toggleMenu.call(e,t)})),this.bind(t.inputs.seek,"mousedown mousemove",(e=>{const n=t.progress.getBoundingClientRect(),i=100/n.width*(e.pageX-n.left);e.currentTarget.setAttribute("seek-value",i)})),this.bind(t.inputs.seek,"mousedown mouseup keydown keyup touchstart touchend",(t=>{const n=t.currentTarget,i="play-on-seeked";if(E.keyboardEvent(t)&&!["ArrowLeft","ArrowRight"].includes(t.key))return;e.lastSeekTime=Date.now();const s=n.hasAttribute(i),r=["mouseup","touchend","keyup"].includes(t.type);s&&r?(n.removeAttribute(i),ie(e.play())):!r&&e.playing&&(n.setAttribute(i,""),e.pause())})),S.isIos){const t=W.call(e,'input[type="range"]');Array.from(t).forEach((e=>this.bind(e,n,(e=>N(e.target)))))}this.bind(t.inputs.seek,n,(t=>{const n=t.currentTarget;let i=n.getAttribute("seek-value");E.empty(i)&&(i=n.value),n.removeAttribute("seek-value"),e.currentTime=i/n.max*e.duration}),"seek"),this.bind(t.progress,"mouseenter mouseleave mousemove",(t=>Ne.updateSeekTooltip.call(e,t))),this.bind(t.progress,"mousemove touchmove",(t=>{const{previewThumbnails:n}=e;n&&n.loaded&&n.startMove(t)})),this.bind(t.progress,"mouseleave touchend click",(()=>{const{previewThumbnails:t}=e;t&&t.loaded&&t.endMove(!1,!0)})),this.bind(t.progress,"mousedown touchstart",(t=>{const{previewThumbnails:n}=e;n&&n.loaded&&n.startScrubbing(t)})),this.bind(t.progress,"mouseup touchend",(t=>{const{previewThumbnails:n}=e;n&&n.loaded&&n.endScrubbing(t)})),S.isWebKit&&Array.from(W.call(e,'input[type="range"]')).forEach((t=>{this.bind(t,"input",(t=>Ne.updateRangeFill.call(e,t.target)))})),e.config.toggleInvert&&!E.element(t.display.duration)&&this.bind(t.display.currentTime,"click",(()=>{0!==e.currentTime&&(e.config.invertTime=!e.config.invertTime,Ne.timeUpdate.call(e))})),this.bind(t.inputs.volume,n,(t=>{e.volume=t.target.value}),"volume"),this.bind(t.controls,"mouseenter mouseleave",(n=>{t.controls.hover=!e.touch&&"mouseenter"===n.type})),t.fullscreen&&Array.from(t.fullscreen.children).filter((e=>!e.contains(t.container))).forEach((n=>{this.bind(n,"mouseenter mouseleave",(n=>{t.controls&&(t.controls.hover=!e.touch&&"mouseenter"===n.type)}))})),this.bind(t.controls,"mousedown mouseup touchstart touchend touchcancel",(e=>{t.controls.pressed=["mousedown","touchstart"].includes(e.type)})),this.bind(t.controls,"focusin",(()=>{const{config:n,timers:i}=e;B(t.controls,n.classNames.noTransition,!0),je.toggleControls.call(e,!0),setTimeout((()=>{B(t.controls,n.classNames.noTransition,!1)}),0);const s=this.touch?3e3:4e3;clearTimeout(i.controls),i.controls=setTimeout((()=>je.toggleControls.call(e,!1)),s)})),this.bind(t.inputs.volume,"wheel",(t=>{const n=t.webkitDirectionInvertedFromDevice,[i,s]=[t.deltaX,-t.deltaY].map((e=>n?-e:e)),r=Math.sign(Math.abs(i)>Math.abs(s)?i:s);e.increaseVolume(r/50);const{volume:o}=e.media;(1===r&&o<1||-1===r&&o>0)&&t.preventDefault()}),"volume",!1)})),this.player=t,this.lastKey=null,this.focusTimer=null,this.lastKeyDown=null,this.handleKey=this.handleKey.bind(this),this.toggleMenu=this.toggleMenu.bind(this),this.firstTouch=this.firstTouch.bind(this)}}"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n||"undefined"!=typeof self&&self;var We=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e,t){e.exports=function(){var e=function(){},t={},n={},i={};function s(e,t){e=e.push?e:[e];var s,r,o,a=[],l=e.length,c=l;for(s=function(e,n){n.length&&a.push(e),--c||t(a)};l--;)r=e[l],(o=n[r])?s(r,o):(i[r]=i[r]||[]).push(s)}function r(e,t){if(e){var s=i[e];if(n[e]=t,s)for(;s.length;)s[0](e,t),s.splice(0,1)}}function o(t,n){t.call&&(t={success:t}),n.length?(t.error||e)(n):(t.success||e)(t)}function a(t,n,i,s){var r,o,l=document,c=i.async,u=(i.numRetries||0)+1,h=i.before||e,d=t.replace(/[\?|#].*$/,""),p=t.replace(/^(css|img)!/,"");s=s||0,/(^css!|\.css$)/.test(d)?((o=l.createElement("link")).rel="stylesheet",o.href=p,(r="hideFocus"in o)&&o.relList&&(r=0,o.rel="preload",o.as="style")):/(^img!|\.(png|gif|jpg|svg|webp)$)/.test(d)?(o=l.createElement("img")).src=p:((o=l.createElement("script")).src=t,o.async=void 0===c||c),o.onload=o.onerror=o.onbeforeload=function(e){var l=e.type[0];if(r)try{o.sheet.cssText.length||(l="e")}catch(e){18!=e.code&&(l="e")}if("e"==l){if((s+=1)<u)return a(t,n,i,s)}else if("preload"==o.rel&&"style"==o.as)return o.rel="stylesheet";n(t,l,e.defaultPrevented)},!1!==h(t,o)&&l.head.appendChild(o)}function l(e,t,n){var i,s,r=(e=e.push?e:[e]).length,o=r,l=[];for(i=function(e,n,i){if("e"==n&&l.push(e),"b"==n){if(!i)return;l.push(e)}--r||t(l)},s=0;s<o;s++)a(e[s],i,n)}function c(e,n,i){var s,a;if(n&&n.trim&&(s=n),a=(s?i:n)||{},s){if(s in t)throw"LoadJS";t[s]=!0}function c(t,n){l(e,(function(e){o(a,e),t&&o({success:t,error:n},e),r(s,e)}),a)}if(a.returnPromise)return new Promise(c);c()}return c.ready=function(e,t){return s(e,(function(e){o(t,e)})),c},c.done=function(e){r(e,[])},c.reset=function(){t={},n={},i={}},c.isDefined=function(e){return e in t},c}()}));function He(e){return new Promise(((t,n)=>{We(e,{success:t,error:n})}))}function $e(e){e&&!this.embed.hasPlayed&&(this.embed.hasPlayed=!0),this.media.paused===e&&(this.media.paused=!e,ee.call(this,this.media,e?"play":"pause"))}const Ke={setup(){const e=this;B(e.elements.wrapper,e.config.classNames.embed,!0),e.options.speed=e.config.speed.options,he.call(e),E.object(window.Vimeo)?Ke.ready.call(e):He(e.config.urls.vimeo.sdk).then((()=>{Ke.ready.call(e)})).catch((t=>{e.debug.warn("Vimeo SDK (player.js) failed to load",t)}))},ready(){const e=this,t=e.config.vimeo,{premium:n,referrerPolicy:i,...s}=t;let r=e.media.getAttribute("src"),o="";E.empty(r)?(r=e.media.getAttribute(e.config.attributes.embed.id),o=e.media.getAttribute(e.config.attributes.embed.hash)):o=function(e){const t=e.match(/^.*(vimeo.com\/|video\/)(\d+)(\?.*&*h=|\/)+([\d,a-f]+)/);return t&&5===t.length?t[4]:null}(r);const a=o?{h:o}:{};n&&Object.assign(s,{controls:!1,sidedock:!1});const l=Ae({loop:e.config.loop.active,autoplay:e.autoplay,muted:e.muted,gesture:"media",playsinline:e.config.playsinline,...a,...s}),c=(u=r,E.empty(u)?null:E.number(Number(u))?u:u.match(/^.*(vimeo.com\/|video\/)(\d+).*/)?RegExp.$2:u);var u;const h=D("iframe"),d=fe(e.config.urls.vimeo.iframe,c,l);if(h.setAttribute("src",d),h.setAttribute("allowfullscreen",""),h.setAttribute("allow",["autoplay","fullscreen","picture-in-picture","encrypted-media","accelerometer","gyroscope"].join("; ")),E.empty(i)||h.setAttribute("referrerPolicy",i),n||!t.customControls)h.setAttribute("data-poster",e.poster),e.media=U(h,e.media);else{const t=D("div",{class:e.config.classNames.embedContainer,"data-poster":e.poster});t.appendChild(h),e.media=U(t,e.media)}t.customControls||ke(fe(e.config.urls.vimeo.api,d)).then((t=>{!E.empty(t)&&t.thumbnail_url&&je.setPoster.call(e,t.thumbnail_url).catch((()=>{}))})),e.embed=new window.Vimeo.Player(h,{autopause:e.config.autopause,muted:e.muted}),e.media.paused=!0,e.media.currentTime=0,e.supported.ui&&e.embed.disableTextTrack(),e.media.play=()=>($e.call(e,!0),e.embed.play()),e.media.pause=()=>($e.call(e,!1),e.embed.pause()),e.media.stop=()=>{e.pause(),e.currentTime=0};let{currentTime:p}=e.media;Object.defineProperty(e.media,"currentTime",{get:()=>p,set(t){const{embed:n,media:i,paused:s,volume:r}=e,o=s&&!n.hasPlayed;i.seeking=!0,ee.call(e,i,"seeking"),Promise.resolve(o&&n.setVolume(0)).then((()=>n.setCurrentTime(t))).then((()=>o&&n.pause())).then((()=>o&&n.setVolume(r))).catch((()=>{}))}});let f=e.config.speed.selected;Object.defineProperty(e.media,"playbackRate",{get:()=>f,set(t){e.embed.setPlaybackRate(t).then((()=>{f=t,ee.call(e,e.media,"ratechange")})).catch((()=>{e.options.speed=[1]}))}});let{volume:m}=e.config;Object.defineProperty(e.media,"volume",{get:()=>m,set(t){e.embed.setVolume(t).then((()=>{m=t,ee.call(e,e.media,"volumechange")}))}});let{muted:g}=e.config;Object.defineProperty(e.media,"muted",{get:()=>g,set(t){const n=!!E.boolean(t)&&t;e.embed.setMuted(!!n||e.config.muted).then((()=>{g=n,ee.call(e,e.media,"volumechange")}))}});let y,{loop:v}=e.config;Object.defineProperty(e.media,"loop",{get:()=>v,set(t){const n=E.boolean(t)?t:e.config.loop.active;e.embed.setLoop(n).then((()=>{v=n}))}}),e.embed.getVideoUrl().then((t=>{y=t,Ne.setDownloadUrl.call(e)})).catch((e=>{this.debug.warn(e)})),Object.defineProperty(e.media,"currentSrc",{get:()=>y}),Object.defineProperty(e.media,"ended",{get:()=>e.currentTime===e.duration}),Promise.all([e.embed.getVideoWidth(),e.embed.getVideoHeight()]).then((t=>{const[n,i]=t;e.embed.ratio=de(n,i),he.call(this)})),e.embed.setAutopause(e.config.autopause).then((t=>{e.config.autopause=t})),e.embed.getVideoTitle().then((t=>{e.config.title=t,je.setTitle.call(this)})),e.embed.getCurrentTime().then((t=>{p=t,ee.call(e,e.media,"timeupdate")})),e.embed.getDuration().then((t=>{e.media.duration=t,ee.call(e,e.media,"durationchange")})),e.embed.getTextTracks().then((t=>{e.media.textTracks=t,Re.setup.call(e)})),e.embed.on("cuechange",(({cues:t=[]})=>{const n=t.map((e=>function(e){const t=document.createDocumentFragment(),n=document.createElement("div");return t.appendChild(n),n.innerHTML=e,t.firstChild.innerText}(e.text)));Re.updateCues.call(e,n)})),e.embed.on("loaded",(()=>{e.embed.getPaused().then((t=>{$e.call(e,!t),t||ee.call(e,e.media,"playing")})),E.element(e.embed.element)&&e.supported.ui&&e.embed.element.setAttribute("tabindex",-1)})),e.embed.on("bufferstart",(()=>{ee.call(e,e.media,"waiting")})),e.embed.on("bufferend",(()=>{ee.call(e,e.media,"playing")})),e.embed.on("play",(()=>{$e.call(e,!0),ee.call(e,e.media,"playing")})),e.embed.on("pause",(()=>{$e.call(e,!1)})),e.embed.on("timeupdate",(t=>{e.media.seeking=!1,p=t.seconds,ee.call(e,e.media,"timeupdate")})),e.embed.on("progress",(t=>{e.media.buffered=t.percent,ee.call(e,e.media,"progress"),1===parseInt(t.percent,10)&&ee.call(e,e.media,"canplaythrough"),e.embed.getDuration().then((t=>{t!==e.media.duration&&(e.media.duration=t,ee.call(e,e.media,"durationchange"))}))})),e.embed.on("seeked",(()=>{e.media.seeking=!1,ee.call(e,e.media,"seeked")})),e.embed.on("ended",(()=>{e.media.paused=!0,ee.call(e,e.media,"ended")})),e.embed.on("error",(t=>{e.media.error=t,ee.call(e,e.media,"error")})),t.customControls&&setTimeout((()=>je.build.call(e)),0)}};function Ge(e){e&&!this.embed.hasPlayed&&(this.embed.hasPlayed=!0),this.media.paused===e&&(this.media.paused=!e,ee.call(this,this.media,e?"play":"pause"))}function Xe(e){return e.noCookie?"https://www.youtube-nocookie.com":"http:"===window.location.protocol?"http://www.youtube.com":void 0}const Qe={setup(){if(B(this.elements.wrapper,this.config.classNames.embed,!0),E.object(window.YT)&&E.function(window.YT.Player))Qe.ready.call(this);else{const e=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=()=>{E.function(e)&&e(),Qe.ready.call(this)},He(this.config.urls.youtube.sdk).catch((e=>{this.debug.warn("YouTube API failed to load",e)}))}},getTitle(e){ke(fe(this.config.urls.youtube.api,e)).then((e=>{if(E.object(e)){const{title:t,height:n,width:i}=e;this.config.title=t,je.setTitle.call(this),this.embed.ratio=de(i,n)}he.call(this)})).catch((()=>{he.call(this)}))},ready(){const e=this,t=e.config.youtube,n=e.media&&e.media.getAttribute("id");if(!E.empty(n)&&n.startsWith("youtube-"))return;let i=e.media.getAttribute("src");E.empty(i)&&(i=e.media.getAttribute(this.config.attributes.embed.id));const s=(r=i,E.empty(r)?null:r.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/)?RegExp.$2:r);var r;const o=D("div",{id:`${e.provider}-${Math.floor(1e4*Math.random())}`,"data-poster":t.customControls?e.poster:void 0});if(e.media=U(o,e.media),t.customControls){const t=e=>`https://i.ytimg.com/vi/${s}/${e}default.jpg`;Be(t("maxres"),121).catch((()=>Be(t("sd"),121))).catch((()=>Be(t("hq")))).then((t=>je.setPoster.call(e,t.src))).then((t=>{t.includes("maxres")||(e.elements.poster.style.backgroundSize="cover")})).catch((()=>{}))}e.embed=new window.YT.Player(e.media,{videoId:s,host:Xe(t),playerVars:R({},{autoplay:e.config.autoplay?1:0,hl:e.config.hl,controls:e.supported.ui&&t.customControls?0:1,disablekb:1,playsinline:e.config.playsinline&&!e.config.fullscreen.iosNative?1:0,cc_load_policy:e.captions.active?1:0,cc_lang_pref:e.config.captions.language,widget_referrer:window?window.location.href:null},t),events:{onError(t){if(!e.media.error){const n=t.data,i={2:"The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",5:"The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",100:"The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",101:"The owner of the requested video does not allow it to be played in embedded players.",150:"The owner of the requested video does not allow it to be played in embedded players."}[n]||"An unknown error occurred";e.media.error={code:n,message:i},ee.call(e,e.media,"error")}},onPlaybackRateChange(t){const n=t.target;e.media.playbackRate=n.getPlaybackRate(),ee.call(e,e.media,"ratechange")},onReady(n){if(E.function(e.media.play))return;const i=n.target;Qe.getTitle.call(e,s),e.media.play=()=>{Ge.call(e,!0),i.playVideo()},e.media.pause=()=>{Ge.call(e,!1),i.pauseVideo()},e.media.stop=()=>{i.stopVideo()},e.media.duration=i.getDuration(),e.media.paused=!0,e.media.currentTime=0,Object.defineProperty(e.media,"currentTime",{get:()=>Number(i.getCurrentTime()),set(t){e.paused&&!e.embed.hasPlayed&&e.embed.mute(),e.media.seeking=!0,ee.call(e,e.media,"seeking"),i.seekTo(t)}}),Object.defineProperty(e.media,"playbackRate",{get:()=>i.getPlaybackRate(),set(e){i.setPlaybackRate(e)}});let{volume:r}=e.config;Object.defineProperty(e.media,"volume",{get:()=>r,set(t){r=t,i.setVolume(100*r),ee.call(e,e.media,"volumechange")}});let{muted:o}=e.config;Object.defineProperty(e.media,"muted",{get:()=>o,set(t){const n=E.boolean(t)?t:o;o=n,i[n?"mute":"unMute"](),i.setVolume(100*r),ee.call(e,e.media,"volumechange")}}),Object.defineProperty(e.media,"currentSrc",{get:()=>i.getVideoUrl()}),Object.defineProperty(e.media,"ended",{get:()=>e.currentTime===e.duration});const a=i.getAvailablePlaybackRates();e.options.speed=a.filter((t=>e.config.speed.options.includes(t))),e.supported.ui&&t.customControls&&e.media.setAttribute("tabindex",-1),ee.call(e,e.media,"timeupdate"),ee.call(e,e.media,"durationchange"),clearInterval(e.timers.buffering),e.timers.buffering=setInterval((()=>{e.media.buffered=i.getVideoLoadedFraction(),(null===e.media.lastBuffered||e.media.lastBuffered<e.media.buffered)&&ee.call(e,e.media,"progress"),e.media.lastBuffered=e.media.buffered,1===e.media.buffered&&(clearInterval(e.timers.buffering),ee.call(e,e.media,"canplaythrough"))}),200),t.customControls&&setTimeout((()=>je.build.call(e)),50)},onStateChange(n){const i=n.target;switch(clearInterval(e.timers.playing),e.media.seeking&&[1,2].includes(n.data)&&(e.media.seeking=!1,ee.call(e,e.media,"seeked")),n.data){case-1:ee.call(e,e.media,"timeupdate"),e.media.buffered=i.getVideoLoadedFraction(),ee.call(e,e.media,"progress");break;case 0:Ge.call(e,!1),e.media.loop?(i.stopVideo(),i.playVideo()):ee.call(e,e.media,"ended");break;case 1:t.customControls&&!e.config.autoplay&&e.media.paused&&!e.embed.hasPlayed?e.media.pause():(Ge.call(e,!0),ee.call(e,e.media,"playing"),e.timers.playing=setInterval((()=>{ee.call(e,e.media,"timeupdate")}),50),e.media.duration!==i.getDuration()&&(e.media.duration=i.getDuration(),ee.call(e,e.media,"durationchange")));break;case 2:e.muted||e.embed.unMute(),Ge.call(e,!1);break;case 3:ee.call(e,e.media,"waiting")}ee.call(e,e.elements.container,"statechange",!1,{code:n.data})}}})}},Ye={setup(){this.media?(B(this.elements.container,this.config.classNames.type.replace("{0}",this.type),!0),B(this.elements.container,this.config.classNames.provider.replace("{0}",this.provider),!0),this.isEmbed&&B(this.elements.container,this.config.classNames.type.replace("{0}","video"),!0),this.isVideo&&(this.elements.wrapper=D("div",{class:this.config.classNames.video}),L(this.media,this.elements.wrapper),this.elements.poster=D("div",{class:this.config.classNames.poster}),this.elements.wrapper.appendChild(this.elements.poster)),this.isHTML5?pe.setup.call(this):this.isYouTube?Qe.setup.call(this):this.isVimeo&&Ke.setup.call(this)):this.debug.warn("No media element found!")}};class Je{get enabled(){const{config:e}=this;return this.player.isHTML5&&this.player.isVideo&&e.enabled&&(!E.empty(e.publisherId)||E.url(e.tagUrl))}get tagUrl(){const{config:e}=this;return E.url(e.tagUrl)?e.tagUrl:`https://go.aniview.com/api/adserver6/vast/?${Ae({AV_PUBLISHERID:"58c25bb0073ef448b1087ad6",AV_CHANNELID:"5a0458dc28a06145e4519d21",AV_URL:window.location.hostname,cb:Date.now(),AV_WIDTH:640,AV_HEIGHT:480,AV_CDIM2:e.publisherId})}`}constructor(t){e(this,"load",(()=>{this.enabled&&(E.object(window.google)&&E.object(window.google.ima)?this.ready():He(this.player.config.urls.googleIMA.sdk).then((()=>{this.ready()})).catch((()=>{this.trigger("error",new Error("Google IMA SDK failed to load"))})))})),e(this,"ready",(()=>{var e;this.enabled||((e=this).manager&&e.manager.destroy(),e.elements.displayContainer&&e.elements.displayContainer.destroy(),e.elements.container.remove()),this.startSafetyTimer(12e3,"ready()"),this.managerPromise.then((()=>{this.clearSafetyTimer("onAdsManagerLoaded()")})),this.listeners(),this.setupIMA()})),e(this,"setupIMA",(()=>{this.elements.container=D("div",{class:this.player.config.classNames.ads}),this.player.elements.container.appendChild(this.elements.container),google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED),google.ima.settings.setLocale(this.player.config.ads.language),google.ima.settings.setDisableCustomPlaybackForIOS10Plus(this.player.config.playsinline),this.elements.displayContainer=new google.ima.AdDisplayContainer(this.elements.container,this.player.media),this.loader=new google.ima.AdsLoader(this.elements.displayContainer),this.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,(e=>this.onAdsManagerLoaded(e)),!1),this.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR,(e=>this.onAdError(e)),!1),this.requestAds()})),e(this,"requestAds",(()=>{const{container:e}=this.player.elements;try{const t=new google.ima.AdsRequest;t.adTagUrl=this.tagUrl,t.linearAdSlotWidth=e.offsetWidth,t.linearAdSlotHeight=e.offsetHeight,t.nonLinearAdSlotWidth=e.offsetWidth,t.nonLinearAdSlotHeight=e.offsetHeight,t.forceNonLinearFullSlot=!1,t.setAdWillPlayMuted(!this.player.muted),this.loader.requestAds(t)}catch(e){this.onAdError(e)}})),e(this,"pollCountdown",((e=!1)=>{if(!e)return clearInterval(this.countdownTimer),void this.elements.container.removeAttribute("data-badge-text");this.countdownTimer=setInterval((()=>{const e=Ie(Math.max(this.manager.getRemainingTime(),0)),t=`${we.get("advertisement",this.player.config)} - ${e}`;this.elements.container.setAttribute("data-badge-text",t)}),100)})),e(this,"onAdsManagerLoaded",(e=>{if(!this.enabled)return;const t=new google.ima.AdsRenderingSettings;t.restoreCustomPlaybackStateOnAdBreakComplete=!0,t.enablePreloading=!0,this.manager=e.getAdsManager(this.player,t),this.cuePoints=this.manager.getCuePoints(),this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR,(e=>this.onAdError(e))),Object.keys(google.ima.AdEvent.Type).forEach((e=>{this.manager.addEventListener(google.ima.AdEvent.Type[e],(e=>this.onAdEvent(e)))})),this.trigger("loaded")})),e(this,"addCuePoints",(()=>{E.empty(this.cuePoints)||this.cuePoints.forEach((e=>{if(0!==e&&-1!==e&&e<this.player.duration){const t=this.player.elements.progress;if(E.element(t)){const n=100/this.player.duration*e,i=D("span",{class:this.player.config.classNames.cues});i.style.left=`${n.toString()}%`,t.appendChild(i)}}}))})),e(this,"onAdEvent",(e=>{const{container:t}=this.player.elements,n=e.getAd(),i=e.getAdData();switch((e=>{ee.call(this.player,this.player.media,`ads${e.replace(/_/g,"").toLowerCase()}`)})(e.type),e.type){case google.ima.AdEvent.Type.LOADED:this.trigger("loaded"),this.pollCountdown(!0),n.isLinear()||(n.width=t.offsetWidth,n.height=t.offsetHeight);break;case google.ima.AdEvent.Type.STARTED:this.manager.setVolume(this.player.volume);break;case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:this.player.ended?this.loadAds():this.loader.contentComplete();break;case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:this.pauseContent();break;case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:this.pollCountdown(),this.resumeContent();break;case google.ima.AdEvent.Type.LOG:i.adError&&this.player.debug.warn(`Non-fatal ad error: ${i.adError.getMessage()}`)}})),e(this,"onAdError",(e=>{this.cancel(),this.player.debug.warn("Ads error",e)})),e(this,"listeners",(()=>{const{container:e}=this.player.elements;let t;this.player.on("canplay",(()=>{this.addCuePoints()})),this.player.on("ended",(()=>{this.loader.contentComplete()})),this.player.on("timeupdate",(()=>{t=this.player.currentTime})),this.player.on("seeked",(()=>{const e=this.player.currentTime;E.empty(this.cuePoints)||this.cuePoints.forEach(((n,i)=>{t<n&&n<e&&(this.manager.discardAdBreak(),this.cuePoints.splice(i,1))}))})),window.addEventListener("resize",(()=>{this.manager&&this.manager.resize(e.offsetWidth,e.offsetHeight,google.ima.ViewMode.NORMAL)}))})),e(this,"play",(()=>{const{container:e}=this.player.elements;this.managerPromise||this.resumeContent(),this.managerPromise.then((()=>{this.manager.setVolume(this.player.volume),this.elements.displayContainer.initialize();try{this.initialized||(this.manager.init(e.offsetWidth,e.offsetHeight,google.ima.ViewMode.NORMAL),this.manager.start()),this.initialized=!0}catch(e){this.onAdError(e)}})).catch((()=>{}))})),e(this,"resumeContent",(()=>{this.elements.container.style.zIndex="",this.playing=!1,ie(this.player.media.play())})),e(this,"pauseContent",(()=>{this.elements.container.style.zIndex=3,this.playing=!0,this.player.media.pause()})),e(this,"cancel",(()=>{this.initialized&&this.resumeContent(),this.trigger("error"),this.loadAds()})),e(this,"loadAds",(()=>{this.managerPromise.then((()=>{this.manager&&this.manager.destroy(),this.managerPromise=new Promise((e=>{this.on("loaded",e),this.player.debug.log(this.manager)})),this.initialized=!1,this.requestAds()})).catch((()=>{}))})),e(this,"trigger",((e,...t)=>{const n=this.events[e];E.array(n)&&n.forEach((e=>{E.function(e)&&e.apply(this,t)}))})),e(this,"on",((e,t)=>(E.array(this.events[e])||(this.events[e]=[]),this.events[e].push(t),this))),e(this,"startSafetyTimer",((e,t)=>{this.player.debug.log(`Safety timer invoked from: ${t}`),this.safetyTimer=setTimeout((()=>{this.cancel(),this.clearSafetyTimer("startSafetyTimer()")}),e)})),e(this,"clearSafetyTimer",(e=>{E.nullOrUndefined(this.safetyTimer)||(this.player.debug.log(`Safety timer cleared from: ${e}`),clearTimeout(this.safetyTimer),this.safetyTimer=null)})),this.player=t,this.config=t.config.ads,this.playing=!1,this.initialized=!1,this.elements={container:null,displayContainer:null},this.manager=null,this.loader=null,this.cuePoints=null,this.events={},this.safetyTimer=null,this.countdownTimer=null,this.managerPromise=new Promise(((e,t)=>{this.on("loaded",e),this.on("error",t)})),this.load()}}function Ze(e=0,t=0,n=255){return Math.min(Math.max(e,t),n)}const et=e=>{const t=[];return e.split(/\r\n\r\n|\n\n|\r\r/).forEach((e=>{const n={};e.split(/\r\n|\n|\r/).forEach((e=>{if(E.number(n.startTime)){if(!E.empty(e.trim())&&E.empty(n.text)){const t=e.trim().split("#xywh=");[n.text]=t,t[1]&&([n.x,n.y,n.w,n.h]=t[1].split(","))}}else{const t=e.match(/([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/);t&&(n.startTime=60*Number(t[1]||0)*60+60*Number(t[2])+Number(t[3])+Number(`0.${t[4]}`),n.endTime=60*Number(t[6]||0)*60+60*Number(t[7])+Number(t[8])+Number(`0.${t[9]}`))}})),n.text&&t.push(n)})),t},tt=(e,t)=>{const n={};return e>t.width/t.height?(n.width=t.width,n.height=1/e*t.width):(n.height=t.height,n.width=e*t.height),n};class nt{get enabled(){return this.player.isHTML5&&this.player.isVideo&&this.player.config.previewThumbnails.enabled}get currentImageContainer(){return this.mouseDown?this.elements.scrubbing.container:this.elements.thumb.imageContainer}get usingSprites(){return Object.keys(this.thumbnails[0].frames[0]).includes("w")}get thumbAspectRatio(){return this.usingSprites?this.thumbnails[0].frames[0].w/this.thumbnails[0].frames[0].h:this.thumbnails[0].width/this.thumbnails[0].height}get thumbContainerHeight(){if(this.mouseDown){const{height:e}=tt(this.thumbAspectRatio,{width:this.player.media.clientWidth,height:this.player.media.clientHeight});return e}return this.sizeSpecifiedInCSS?this.elements.thumb.imageContainer.clientHeight:Math.floor(this.player.media.clientWidth/this.thumbAspectRatio/4)}get currentImageElement(){return this.mouseDown?this.currentScrubbingImageElement:this.currentThumbnailImageElement}set currentImageElement(e){this.mouseDown?this.currentScrubbingImageElement=e:this.currentThumbnailImageElement=e}constructor(t){e(this,"load",(()=>{this.player.elements.display.seekTooltip&&(this.player.elements.display.seekTooltip.hidden=this.enabled),this.enabled&&this.getThumbnails().then((()=>{this.enabled&&(this.render(),this.determineContainerAutoSizing(),this.listeners(),this.loaded=!0)}))})),e(this,"getThumbnails",(()=>new Promise((e=>{const{src:t}=this.player.config.previewThumbnails;if(E.empty(t))throw new Error("Missing previewThumbnails.src config attribute");const n=()=>{this.thumbnails.sort(((e,t)=>e.height-t.height)),this.player.debug.log("Preview thumbnails",this.thumbnails),e()};if(E.function(t))t((e=>{this.thumbnails=e,n()}));else{const e=(E.string(t)?[t]:t).map((e=>this.getThumbnail(e)));Promise.all(e).then(n)}})))),e(this,"getThumbnail",(e=>new Promise((t=>{ke(e).then((n=>{const i={frames:et(n),height:null,urlPrefix:""};i.frames[0].text.startsWith("/")||i.frames[0].text.startsWith("http://")||i.frames[0].text.startsWith("https://")||(i.urlPrefix=e.substring(0,e.lastIndexOf("/")+1));const s=new Image;s.onload=()=>{i.height=s.naturalHeight,i.width=s.naturalWidth,this.thumbnails.push(i),t()},s.src=i.urlPrefix+i.frames[0].text}))})))),e(this,"startMove",(e=>{if(this.loaded&&E.event(e)&&["touchmove","mousemove"].includes(e.type)&&this.player.media.duration){if("touchmove"===e.type)this.seekTime=this.player.media.duration*(this.player.elements.inputs.seek.value/100);else{var t,n;const i=this.player.elements.progress.getBoundingClientRect(),s=100/i.width*(e.pageX-i.left);this.seekTime=this.player.media.duration*(s/100),this.seekTime<0&&(this.seekTime=0),this.seekTime>this.player.media.duration-1&&(this.seekTime=this.player.media.duration-1),this.mousePosX=e.pageX,this.elements.thumb.time.innerText=Ie(this.seekTime);const r=null===(t=this.player.config.markers)||void 0===t||null===(n=t.points)||void 0===n?void 0:n.find((({time:e})=>e===Math.round(this.seekTime)));r&&this.elements.thumb.time.insertAdjacentHTML("afterbegin",`${r.label}<br>`)}this.showImageAtCurrentTime()}})),e(this,"endMove",(()=>{this.toggleThumbContainer(!1,!0)})),e(this,"startScrubbing",(e=>{(E.nullOrUndefined(e.button)||!1===e.button||0===e.button)&&(this.mouseDown=!0,this.player.media.duration&&(this.toggleScrubbingContainer(!0),this.toggleThumbContainer(!1,!0),this.showImageAtCurrentTime()))})),e(this,"endScrubbing",(()=>{this.mouseDown=!1,Math.ceil(this.lastTime)===Math.ceil(this.player.media.currentTime)?this.toggleScrubbingContainer(!1):Z.call(this.player,this.player.media,"timeupdate",(()=>{this.mouseDown||this.toggleScrubbingContainer(!1)}))})),e(this,"listeners",(()=>{this.player.on("play",(()=>{this.toggleThumbContainer(!1,!0)})),this.player.on("seeked",(()=>{this.toggleThumbContainer(!1)})),this.player.on("timeupdate",(()=>{this.lastTime=this.player.media.currentTime}))})),e(this,"render",(()=>{this.elements.thumb.container=D("div",{class:this.player.config.classNames.previewThumbnails.thumbContainer}),this.elements.thumb.imageContainer=D("div",{class:this.player.config.classNames.previewThumbnails.imageContainer}),this.elements.thumb.container.appendChild(this.elements.thumb.imageContainer);const e=D("div",{class:this.player.config.classNames.previewThumbnails.timeContainer});this.elements.thumb.time=D("span",{},"00:00"),e.appendChild(this.elements.thumb.time),this.elements.thumb.imageContainer.appendChild(e),E.element(this.player.elements.progress)&&this.player.elements.progress.appendChild(this.elements.thumb.container),this.elements.scrubbing.container=D("div",{class:this.player.config.classNames.previewThumbnails.scrubbingContainer}),this.player.elements.wrapper.appendChild(this.elements.scrubbing.container)})),e(this,"destroy",(()=>{this.elements.thumb.container&&this.elements.thumb.container.remove(),this.elements.scrubbing.container&&this.elements.scrubbing.container.remove()})),e(this,"showImageAtCurrentTime",(()=>{this.mouseDown?this.setScrubbingContainerSize():this.setThumbContainerSizeAndPos();const e=this.thumbnails[0].frames.findIndex((e=>this.seekTime>=e.startTime&&this.seekTime<=e.endTime)),t=e>=0;let n=0;this.mouseDown||this.toggleThumbContainer(t),t&&(this.thumbnails.forEach(((t,i)=>{this.loadedImages.includes(t.frames[e].text)&&(n=i)})),e!==this.showingThumb&&(this.showingThumb=e,this.loadImage(n)))})),e(this,"loadImage",((e=0)=>{const t=this.showingThumb,n=this.thumbnails[e],{urlPrefix:i}=n,s=n.frames[t],r=n.frames[t].text,o=i+r;if(this.currentImageElement&&this.currentImageElement.dataset.filename===r)this.showImage(this.currentImageElement,s,e,t,r,!1),this.currentImageElement.dataset.index=t,this.removeOldImages(this.currentImageElement);else{this.loadingImage&&this.usingSprites&&(this.loadingImage.onload=null);const n=new Image;n.src=o,n.dataset.index=t,n.dataset.filename=r,this.showingThumbFilename=r,this.player.debug.log(`Loading image: ${o}`),n.onload=()=>this.showImage(n,s,e,t,r,!0),this.loadingImage=n,this.removeOldImages(n)}})),e(this,"showImage",((e,t,n,i,s,r=!0)=>{this.player.debug.log(`Showing thumb: ${s}. num: ${i}. qual: ${n}. newimg: ${r}`),this.setImageSizeAndOffset(e,t),r&&(this.currentImageContainer.appendChild(e),this.currentImageElement=e,this.loadedImages.includes(s)||this.loadedImages.push(s)),this.preloadNearby(i,!0).then(this.preloadNearby(i,!1)).then(this.getHigherQuality(n,e,t,s))})),e(this,"removeOldImages",(e=>{Array.from(this.currentImageContainer.children).forEach((t=>{if("img"!==t.tagName.toLowerCase())return;const n=this.usingSprites?500:1e3;if(t.dataset.index!==e.dataset.index&&!t.dataset.deleting){t.dataset.deleting=!0;const{currentImageContainer:e}=this;setTimeout((()=>{e.removeChild(t),this.player.debug.log(`Removing thumb: ${t.dataset.filename}`)}),n)}}))})),e(this,"preloadNearby",((e,t=!0)=>new Promise((n=>{setTimeout((()=>{const i=this.thumbnails[0].frames[e].text;if(this.showingThumbFilename===i){let s;s=t?this.thumbnails[0].frames.slice(e):this.thumbnails[0].frames.slice(0,e).reverse();let r=!1;s.forEach((e=>{const t=e.text;if(t!==i&&!this.loadedImages.includes(t)){r=!0,this.player.debug.log(`Preloading thumb filename: ${t}`);const{urlPrefix:e}=this.thumbnails[0],i=e+t,s=new Image;s.src=i,s.onload=()=>{this.player.debug.log(`Preloaded thumb filename: ${t}`),this.loadedImages.includes(t)||this.loadedImages.push(t),n()}}})),r||n()}}),300)})))),e(this,"getHigherQuality",((e,t,n,i)=>{if(e<this.thumbnails.length-1){let s=t.naturalHeight;this.usingSprites&&(s=n.h),s<this.thumbContainerHeight&&setTimeout((()=>{this.showingThumbFilename===i&&(this.player.debug.log(`Showing higher quality thumb for: ${i}`),this.loadImage(e+1))}),300)}})),e(this,"toggleThumbContainer",((e=!1,t=!1)=>{const n=this.player.config.classNames.previewThumbnails.thumbContainerShown;this.elements.thumb.container.classList.toggle(n,e),!e&&t&&(this.showingThumb=null,this.showingThumbFilename=null)})),e(this,"toggleScrubbingContainer",((e=!1)=>{const t=this.player.config.classNames.previewThumbnails.scrubbingContainerShown;this.elements.scrubbing.container.classList.toggle(t,e),e||(this.showingThumb=null,this.showingThumbFilename=null)})),e(this,"determineContainerAutoSizing",(()=>{(this.elements.thumb.imageContainer.clientHeight>20||this.elements.thumb.imageContainer.clientWidth>20)&&(this.sizeSpecifiedInCSS=!0)})),e(this,"setThumbContainerSizeAndPos",(()=>{const{imageContainer:e}=this.elements.thumb;if(this.sizeSpecifiedInCSS){if(e.clientHeight>20&&e.clientWidth<20){const t=Math.floor(e.clientHeight*this.thumbAspectRatio);e.style.width=`${t}px`}else if(e.clientHeight<20&&e.clientWidth>20){const t=Math.floor(e.clientWidth/this.thumbAspectRatio);e.style.height=`${t}px`}}else{const t=Math.floor(this.thumbContainerHeight*this.thumbAspectRatio);e.style.height=`${this.thumbContainerHeight}px`,e.style.width=`${t}px`}this.setThumbContainerPos()})),e(this,"setThumbContainerPos",(()=>{const e=this.player.elements.progress.getBoundingClientRect(),t=this.player.elements.container.getBoundingClientRect(),{container:n}=this.elements.thumb,i=t.left-e.left+10,s=t.right-e.left-n.clientWidth-10,r=this.mousePosX-e.left-n.clientWidth/2,o=Ze(r,i,s);n.style.left=`${o}px`,n.style.setProperty("--preview-arrow-offset",r-o+"px")})),e(this,"setScrubbingContainerSize",(()=>{const{width:e,height:t}=tt(this.thumbAspectRatio,{width:this.player.media.clientWidth,height:this.player.media.clientHeight});this.elements.scrubbing.container.style.width=`${e}px`,this.elements.scrubbing.container.style.height=`${t}px`})),e(this,"setImageSizeAndOffset",((e,t)=>{if(!this.usingSprites)return;const n=this.thumbContainerHeight/t.h;e.style.height=e.naturalHeight*n+"px",e.style.width=e.naturalWidth*n+"px",e.style.left=`-${t.x*n}px`,e.style.top=`-${t.y*n}px`})),this.player=t,this.thumbnails=[],this.loaded=!1,this.lastMouseMoveTime=Date.now(),this.mouseDown=!1,this.loadedImages=[],this.elements={thumb:{},scrubbing:{}},this.load()}}const it={insertElements(e,t){E.string(t)?M(e,this.media,{src:t}):E.array(t)&&t.forEach((t=>{M(e,this.media,t)}))},change(e){A(e,"sources.length")?(pe.cancelRequests.call(this),this.destroy.call(this,(()=>{this.options.quality=[],O(this.media),this.media=null,E.element(this.elements.container)&&this.elements.container.removeAttribute("class");const{sources:t,type:n}=e,[{provider:i=Me.html5,src:s}]=t,r="html5"===i?n:"div",o="html5"===i?{}:{src:s};Object.assign(this,{provider:i,type:n,supported:G.check(n,i,this.config.playsinline),media:D(r,o)}),this.elements.container.appendChild(this.media),E.boolean(e.autoplay)&&(this.config.autoplay=e.autoplay),this.isHTML5&&(this.config.crossorigin&&this.media.setAttribute("crossorigin",""),this.config.autoplay&&this.media.setAttribute("autoplay",""),E.empty(e.poster)||(this.poster=e.poster),this.config.loop.active&&this.media.setAttribute("loop",""),this.config.muted&&this.media.setAttribute("muted",""),this.config.playsinline&&this.media.setAttribute("playsinline","")),je.addStyleHook.call(this),this.isHTML5&&it.insertElements.call(this,"source",t),this.config.title=e.title,Ye.setup.call(this),this.isHTML5&&Object.keys(e).includes("tracks")&&it.insertElements.call(this,"track",e.tracks),(this.isHTML5||this.isEmbed&&!this.supported.ui)&&je.build.call(this),this.isHTML5&&this.media.load(),E.empty(e.previewThumbnails)||(Object.assign(this.config.previewThumbnails,e.previewThumbnails),this.previewThumbnails&&this.previewThumbnails.loaded&&(this.previewThumbnails.destroy(),this.previewThumbnails=null),this.config.previewThumbnails.enabled&&(this.previewThumbnails=new nt(this))),this.fullscreen.update()}),!0)):this.debug.warn("Invalid source format")}};class st{get isHTML5(){return this.provider===Me.html5}get isEmbed(){return this.isYouTube||this.isVimeo}get isYouTube(){return this.provider===Me.youtube}get isVimeo(){return this.provider===Me.vimeo}get isVideo(){return this.type===Fe}get isAudio(){return this.type===Oe}get playing(){return Boolean(this.ready&&!this.paused&&!this.ended)}get paused(){return Boolean(this.media.paused)}get stopped(){return Boolean(this.paused&&0===this.currentTime)}get ended(){return Boolean(this.media.ended)}set currentTime(e){if(!this.duration)return;const t=E.number(e)&&e>0;this.media.currentTime=t?Math.min(e,this.duration):0,this.debug.log(`Seeking to ${this.currentTime} seconds`)}get currentTime(){return Number(this.media.currentTime)}get buffered(){const{buffered:e}=this.media;return E.number(e)?e:e&&e.length&&this.duration>0?e.end(0)/this.duration:0}get seeking(){return Boolean(this.media.seeking)}get duration(){const e=parseFloat(this.config.duration),t=(this.media||{}).duration,n=E.number(t)&&t!==1/0?t:0;return e||n}set volume(e){let t=e;E.string(t)&&(t=Number(t)),E.number(t)||(t=this.storage.get("volume")),E.number(t)||({volume:t}=this.config),t>1&&(t=1),t<0&&(t=0),this.config.volume=t,this.media.volume=t,!E.empty(e)&&this.muted&&t>0&&(this.muted=!1)}get volume(){return Number(this.media.volume)}set muted(e){let t=e;E.boolean(t)||(t=this.storage.get("muted")),E.boolean(t)||(t=this.config.muted),this.config.muted=t,this.media.muted=t}get muted(){return Boolean(this.media.muted)}get hasAudio(){return!this.isHTML5||!!this.isAudio||Boolean(this.media.mozHasAudio)||Boolean(this.media.webkitAudioDecodedByteCount)||Boolean(this.media.audioTracks&&this.media.audioTracks.length)}set speed(e){let t=null;E.number(e)&&(t=e),E.number(t)||(t=this.storage.get("speed")),E.number(t)||(t=this.config.speed.selected);const{minimumSpeed:n,maximumSpeed:i}=this;t=Ze(t,n,i),this.config.speed.selected=t,setTimeout((()=>{this.media&&(this.media.playbackRate=t)}),0)}get speed(){return Number(this.media.playbackRate)}get minimumSpeed(){return this.isYouTube?Math.min(...this.options.speed):this.isVimeo?.5:.0625}get maximumSpeed(){return this.isYouTube?Math.max(...this.options.speed):this.isVimeo?2:16}set quality(e){const t=this.config.quality,n=this.options.quality;if(!n.length)return;let i=[!E.empty(e)&&Number(e),this.storage.get("quality"),t.selected,t.default].find(E.number),s=!0;if(!n.includes(i)){const e=re(n,i);this.debug.warn(`Unsupported quality option: ${i}, using ${e} instead`),i=e,s=!1}t.selected=i,this.media.quality=i,s&&this.storage.set({quality:i})}get quality(){return this.media.quality}set loop(e){const t=E.boolean(e)?e:this.config.loop.active;this.config.loop.active=t,this.media.loop=t}get loop(){return Boolean(this.media.loop)}set source(e){it.change.call(this,e)}get source(){return this.media.currentSrc}get download(){const{download:e}=this.config.urls;return E.url(e)?e:this.source}set download(e){E.url(e)&&(this.config.urls.download=e,Ne.setDownloadUrl.call(this))}set poster(e){this.isVideo?je.setPoster.call(this,e,!1).catch((()=>{})):this.debug.warn("Poster can only be set for video")}get poster(){return this.isVideo?this.media.getAttribute("poster")||this.media.getAttribute("data-poster"):null}get ratio(){if(!this.isVideo)return null;const e=ce(ue.call(this));return E.array(e)?e.join(":"):e}set ratio(e){this.isVideo?E.string(e)&&le(e)?(this.config.ratio=ce(e),he.call(this)):this.debug.error(`Invalid aspect ratio specified (${e})`):this.debug.warn("Aspect ratio can only be set for video")}set autoplay(e){this.config.autoplay=E.boolean(e)?e:this.config.autoplay}get autoplay(){return Boolean(this.config.autoplay)}toggleCaptions(e){Re.toggle.call(this,e,!1)}set currentTrack(e){Re.set.call(this,e,!1),Re.setup.call(this)}get currentTrack(){const{toggled:e,currentTrack:t}=this.captions;return e?t:-1}set language(e){Re.setLanguage.call(this,e,!1)}get language(){return(Re.getCurrentTrack.call(this)||{}).language}set pip(e){if(!G.pip)return;const t=E.boolean(e)?e:!this.pip;E.function(this.media.webkitSetPresentationMode)&&this.media.webkitSetPresentationMode(t?Pe:De),E.function(this.media.requestPictureInPicture)&&(!this.pip&&t?this.media.requestPictureInPicture():this.pip&&!t&&document.exitPictureInPicture())}get pip(){return G.pip?E.empty(this.media.webkitPresentationMode)?this.media===document.pictureInPictureElement:this.media.webkitPresentationMode===Pe:null}setPreviewThumbnails(e){this.previewThumbnails&&this.previewThumbnails.loaded&&(this.previewThumbnails.destroy(),this.previewThumbnails=null),Object.assign(this.config.previewThumbnails,e),this.config.previewThumbnails.enabled&&(this.previewThumbnails=new nt(this))}static supported(e,t){return G.check(e,t)}static loadSprite(e,t){return xe(e,t)}static setup(e,t={}){let n=null;return E.string(e)?n=Array.from(document.querySelectorAll(e)):E.nodeList(e)?n=Array.from(e):E.array(e)&&(n=e.filter(E.element)),E.empty(n)?null:n.map((e=>new st(e,t)))}constructor(t,n){if(e(this,"play",(()=>E.function(this.media.play)?(this.ads&&this.ads.enabled&&this.ads.managerPromise.then((()=>this.ads.play())).catch((()=>ie(this.media.play()))),this.media.play()):null)),e(this,"pause",(()=>this.playing&&E.function(this.media.pause)?this.media.pause():null)),e(this,"togglePlay",(e=>(E.boolean(e)?e:!this.playing)?this.play():this.pause())),e(this,"stop",(()=>{this.isHTML5?(this.pause(),this.restart()):E.function(this.media.stop)&&this.media.stop()})),e(this,"restart",(()=>{this.currentTime=0})),e(this,"rewind",(e=>{this.currentTime-=E.number(e)?e:this.config.seekTime})),e(this,"forward",(e=>{this.currentTime+=E.number(e)?e:this.config.seekTime})),e(this,"increaseVolume",(e=>{const t=this.media.muted?0:this.volume;this.volume=t+(E.number(e)?e:0)})),e(this,"decreaseVolume",(e=>{this.increaseVolume(-e)})),e(this,"airplay",(()=>{G.airplay&&this.media.webkitShowPlaybackTargetPicker()})),e(this,"toggleControls",(e=>{if(this.supported.ui&&!this.isAudio){const t=j(this.elements.container,this.config.classNames.hideControls),n=void 0===e?void 0:!e,i=B(this.elements.container,this.config.classNames.hideControls,n);if(i&&E.array(this.config.controls)&&this.config.controls.includes("settings")&&!E.empty(this.config.settings)&&Ne.toggleMenu.call(this,!1),i!==t){const e=i?"controlshidden":"controlsshown";ee.call(this,this.media,e)}return!i}return!1})),e(this,"on",((e,t)=>{Y.call(this,this.elements.container,e,t)})),e(this,"once",((e,t)=>{Z.call(this,this.elements.container,e,t)})),e(this,"off",((e,t)=>{J(this.elements.container,e,t)})),e(this,"destroy",((e,t=!1)=>{if(!this.ready)return;const n=()=>{document.body.style.overflow="",this.embed=null,t?(Object.keys(this.elements).length&&(O(this.elements.buttons.play),O(this.elements.captions),O(this.elements.controls),O(this.elements.wrapper),this.elements.buttons.play=null,this.elements.captions=null,this.elements.controls=null,this.elements.wrapper=null),E.function(e)&&e()):(te.call(this),pe.cancelRequests.call(this),U(this.elements.original,this.elements.container),ee.call(this,this.elements.original,"destroyed",!0),E.function(e)&&e.call(this.elements.original),this.ready=!1,setTimeout((()=>{this.elements=null,this.media=null}),200))};this.stop(),clearTimeout(this.timers.loading),clearTimeout(this.timers.controls),clearTimeout(this.timers.resized),this.isHTML5?(je.toggleNativeControls.call(this,!0),n()):this.isYouTube?(clearInterval(this.timers.buffering),clearInterval(this.timers.playing),null!==this.embed&&E.function(this.embed.destroy)&&this.embed.destroy(),n()):this.isVimeo&&(null!==this.embed&&this.embed.unload().then(n),setTimeout(n,200))})),e(this,"supports",(e=>G.mime.call(this,e))),this.timers={},this.ready=!1,this.loading=!1,this.failed=!1,this.touch=G.touch,this.media=t,E.string(this.media)&&(this.media=document.querySelectorAll(this.media)),(window.jQuery&&this.media instanceof jQuery||E.nodeList(this.media)||E.array(this.media))&&(this.media=this.media[0]),this.config=R({},Le,st.defaults,n||{},(()=>{try{return JSON.parse(this.media.getAttribute("data-plyr-config"))}catch(e){return{}}})()),this.elements={container:null,fullscreen:null,captions:null,buttons:{},display:{},progress:{},inputs:{},settings:{popup:null,menu:null,panels:{},buttons:{}}},this.captions={active:null,currentTrack:-1,meta:new WeakMap},this.fullscreen={active:!1},this.options={speed:[],quality:[]},this.debug=new Ve(this.config.debug),this.debug.log("Config",this.config),this.debug.log("Support",G),E.nullOrUndefined(this.media)||!E.element(this.media))return void this.debug.error("Setup failed: no suitable element passed");if(this.media.plyr)return void this.debug.warn("Target already setup");if(!this.config.enabled)return void this.debug.error("Setup failed: disabled by config");if(!G.check().api)return void this.debug.error("Setup failed: no support");const i=this.media.cloneNode(!0);i.autoplay=!1,this.elements.original=i;const s=this.media.tagName.toLowerCase();let r=null,o=null;switch(s){case"div":if(r=this.media.querySelector("iframe"),E.element(r)){if(o=Se(r.getAttribute("src")),this.provider=function(e){return/^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(e)?Me.youtube:/^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(e)?Me.vimeo:null}(o.toString()),this.elements.container=this.media,this.media=r,this.elements.container.className="",o.search.length){const e=["1","true"];e.includes(o.searchParams.get("autoplay"))&&(this.config.autoplay=!0),e.includes(o.searchParams.get("loop"))&&(this.config.loop.active=!0),this.isYouTube?(this.config.playsinline=e.includes(o.searchParams.get("playsinline")),this.config.youtube.hl=o.searchParams.get("hl")):this.config.playsinline=!0}}else this.provider=this.media.getAttribute(this.config.attributes.embed.provider),this.media.removeAttribute(this.config.attributes.embed.provider);if(E.empty(this.provider)||!Object.values(Me).includes(this.provider))return void this.debug.error("Setup failed: Invalid provider");this.type=Fe;break;case"video":case"audio":this.type=s,this.provider=Me.html5,this.media.hasAttribute("crossorigin")&&(this.config.crossorigin=!0),this.media.hasAttribute("autoplay")&&(this.config.autoplay=!0),(this.media.hasAttribute("playsinline")||this.media.hasAttribute("webkit-playsinline"))&&(this.config.playsinline=!0),this.media.hasAttribute("muted")&&(this.config.muted=!0),this.media.hasAttribute("loop")&&(this.config.loop.active=!0);break;default:return void this.debug.error("Setup failed: unsupported type")}this.supported=G.check(this.type,this.provider),this.supported.api?(this.eventListeners=[],this.listeners=new qe(this),this.storage=new _e(this),this.media.plyr=this,E.element(this.elements.container)||(this.elements.container=D("div"),L(this.media,this.elements.container)),je.migrateStyles.call(this),je.addStyleHook.call(this),Ye.setup.call(this),this.config.debug&&Y.call(this,this.elements.container,this.config.events.join(" "),(e=>{this.debug.log(`event: ${e.type}`)})),this.fullscreen=new ze(this),(this.isHTML5||this.isEmbed&&!this.supported.ui)&&je.build.call(this),this.listeners.container(),this.listeners.global(),this.config.ads.enabled&&(this.ads=new Je(this)),this.isHTML5&&this.config.autoplay&&this.once("canplay",(()=>ie(this.play()))),this.lastSeekTime=0,this.config.previewThumbnails.enabled&&(this.previewThumbnails=new nt(this))):this.debug.error("Setup failed: no support")}}var rt;return st.defaults=(rt=Le,JSON.parse(JSON.stringify(rt))),st}());const w_=document.getElementById("modal-player"),__=document.getElementById("player");async function k_(){const e=o.filmWatchTrailerBtnRef.dataset.id;w_.classList.remove("is-hidden"),__.style.display="block",__.innerHTML="";try{bc.Loading.hourglass("Loading...",{svgColor:"#b92f2c"});const n=await vs({param:ys.MOVIE_VIDEO,id:e}),i=await n.results.find((e=>"Trailer"===e.type)).key,s=new(t(b_))("#player",{}),r=`<iframe\n    src="https://www.youtube.com/embed/${i}?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1"\n    allowfullscreen\n    allowtransparency\n    allow="autoplay"\n  ></iframe>`;__.innerHTML=r,document.addEventListener("click",x_),bc.Loading.remove(),window.player=s,s.on(error,(()=>{console.log("error= "+error)}))}catch(e){return}}function x_(e){e.target.classList.contains("backdrop")&&(player.destroy(),w_.classList.add("is-hidden"),__.innerHTML="",document.removeEventListener("click",x_))}const T_=document.getElementById("modal-team-open"),C_=document.getElementById("modal-team"),E_=document.querySelectorAll(".modal-team__close");T_.addEventListener("click",(()=>{C_.classList.remove("is-hidden")})),E_.forEach((e=>{e.addEventListener("click",(()=>{C_.classList.add("is-hidden")}))})),C_.addEventListener("click",(e=>{e.target===C_&&C_.classList.add("is-hidden")})),document.addEventListener("keydown",(e=>{"Escape"!==e.key&&27!==e.key||C_.classList.add("is-hidden")})),function(){if("dark"===localStorage.getItem("theme"))return document.body.classList.add("dark"),void o.switchThemeRef.classList.add("checked");document.body.classList.remove("dark"),o.switchThemeRef.classList.remove("checked")}(),o.switchThemeRef.addEventListener("click",(function(){const e=document.body.classList.contains("dark")?"light":"dark";document.body.classList.toggle("dark"),o.switchThemeRef.classList.toggle("checked"),localStorage.setItem("theme",e)})),o.buttonRefWatched.addEventListener("click",(function(){o.buttonRefWatched.classList.add("header-button__library--active"),o.buttonRefQueue.classList.remove("header-button__library--active"),Ns(o.WATCHED,undefined)})),o.buttonRefQueue.addEventListener("click",(function(){o.buttonRefQueue.classList.add("header-button__library--active"),o.buttonRefWatched.classList.remove("header-button__library--active"),Ns(o.QUEUE,undefined)})),o.formRef.addEventListener("submit",(async function(e){e.preventDefault();const t=e.currentTarget.elements.film.value.trim();o.divRefButtonLibrary.classList.remove("header-logo__library--position"),o.buttonRefLibrary.classList.remove("header-nav--active"),o.buttonRefHome.classList.add("header-nav--active"),bc.Loading.hourglass("Loading...",{svgColor:"#b92f2c"});const n=await vs({param:ys.SEARCH,page:1,query:t}),i=n.total_results;return bc.Loading.remove(),""===t?(o.alertMessage.textContent="Searching starts after providing data to search!",void(o.alertMessage.style.display="flex")):0===i?(o.alertMessage.textContent="Search result not successful. Enter the correct movie name!",o.alertMessage.style.display="flex",void _s(n.results)):(o.formRef.reset(),_s(n.results),void Is(n.total_results,{param:ys.SEARCH,query:t},undefined))})),o.buttonRefHome.addEventListener("click",(function(){o.divRefButtonLibrary.classList.remove("header-logo__library--position"),o.buttonRefLibrary.classList.remove("header-nav--active"),o.buttonRefHome.classList.add("header-nav--active"),kc()})),o.buttonRefLibrary.addEventListener("click",(function(){"LOG IN"===o.buttonRefLibrary.textContent&&n_(),"LOG OUT"===o.buttonRefLibrary.textContent&&s_()})),o.galleryListRef.addEventListener("click",(function(e){if("LI"!==e.target.nodeName&&"LI"!==e.target.parentNode.nodeName&&"LI"!==e.target.parentNode.parentNode.nodeName)return;const{backdropRef:t,filmInfoCloseBtnRef:n,watchedBtnRef:i,queueBtnRef:s,filmWatchTrailerBtnRef:r}=o;var a,l;bc.Loading.hourglass("Loading...",{svgColor:"#b92f2c"}),vs({param:ys.MOVIE_DETAILS,id:Number(null!==(l=null!==(a=e.target.dataset.id)&&void 0!==a?a:e.target.parentNode.dataset.id)&&void 0!==l?l:e.target.parentNode.parentNode.dataset.id)}).then((e=>{bc.Loading.remove(),34!==e.status_code?(v_(e,i,s),r_(e),t.classList.remove("is-hidden"),document.body.style.overflow="hidden",document.addEventListener("click",m_),t.addEventListener("click",f_),n.addEventListener("click",g_),r.addEventListener("click",k_)):h.Notify.failure("No info")}))})),o.errorSearchRef.addEventListener("input",t(a)((function(){o.alertMessage.style.display="none"}),250)),(async()=>{ci(e_,(async e=>{if(e){const n=await Kw(fw(Zw,"users",e.uid));n.exists()&&(t=n.data(),Object.keys(t).forEach((e=>localStorage.setItem(e,JSON.stringify(t[e]))))),Cs("user",e.uid),o.divRefButtonLibrary.classList.add("header-logo__library--position"),o.buttonRefLibrary.classList.add("header-nav--active"),o.buttonRefLibrary.style.cursor="auto",o.buttonRefHome.classList.remove("header-nav--active"),o.divRefWatchedQueue.style.display="flex",Ns(o.QUEUE,undefined),console.log("were in"),o.buttonRefLibrary.textContent="LOG OUT"}else console.log("were out"),o.divRefButtonLibrary.classList.remove("header-logo__library--position"),o.buttonRefLibrary.classList.remove("header-nav--active"),o.buttonRefHome.classList.add("header-nav--active"),o.buttonRefLibrary.style.opacity="1",o.buttonRefLibrary.style.cursor="pointer",o.divRefWatchedQueue.style.display="none",o.divRefWatchedQueue.style.display="none",o.buttonRefLibrary.textContent="LOG IN",kc();var t}))})();
//# sourceMappingURL=index.502a7309.js.map
