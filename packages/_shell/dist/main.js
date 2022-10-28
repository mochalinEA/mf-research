(()=>{var e,r,t,n,a,o,i={302:(e,r,t)=>{Promise.all([t.e(603),t.e(945)]).then(t.bind(t,945))},451:(e,r,t)=>{"use strict";var n=new Error;e.exports=new Promise(((e,r)=>{if("undefined"!=typeof chat)return e();t.l("http://localhost:3005/remoteEntry.js",(t=>{if("undefined"!=typeof chat)return e();var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;n.message="Loading script failed.\n("+a+": "+o+")",n.name="ScriptExternalLoadError",n.type=a,n.request=o,r(n)}),"chat")})).then((()=>chat))},642:(e,r,t)=>{"use strict";var n=new Error;e.exports=new Promise(((e,r)=>{if("undefined"!=typeof header)return e();t.l("http://localhost:3002/remoteEntry.js",(t=>{if("undefined"!=typeof header)return e();var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;n.message="Loading script failed.\n("+a+": "+o+")",n.name="ScriptExternalLoadError",n.type=a,n.request=o,r(n)}),"header")})).then((()=>header))},353:(e,r,t)=>{"use strict";var n=new Error;e.exports=new Promise(((e,r)=>{if("undefined"!=typeof login)return e();t.l("http://localhost:3001/remoteEntry.js",(t=>{if("undefined"!=typeof login)return e();var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;n.message="Loading script failed.\n("+a+": "+o+")",n.name="ScriptExternalLoadError",n.type=a,n.request=o,r(n)}),"login")})).then((()=>login))},783:(e,r,t)=>{"use strict";var n=new Error;e.exports=new Promise(((e,r)=>{if("undefined"!=typeof profile)return e();t.l("http://localhost:3004/remoteEntry.js",(t=>{if("undefined"!=typeof profile)return e();var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;n.message="Loading script failed.\n("+a+": "+o+")",n.name="ScriptExternalLoadError",n.type=a,n.request=o,r(n)}),"profile")})).then((()=>profile))},641:(e,r,t)=>{"use strict";var n=new Error;e.exports=new Promise(((e,r)=>{if("undefined"!=typeof sidebar)return e();t.l("http://localhost:3003/remoteEntry.js",(t=>{if("undefined"!=typeof sidebar)return e();var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;n.message="Loading script failed.\n("+a+": "+o+")",n.name="ScriptExternalLoadError",n.type=a,n.request=o,r(n)}),"sidebar")})).then((()=>sidebar))}},s={};function l(e){var r=s[e];if(void 0!==r)return r.exports;var t=s[e]={id:e,exports:{}};return i[e](t,t.exports,l),t.exports}l.m=i,l.c=s,l.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return l.d(r,{a:r}),r},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,l.t=function(t,n){if(1&n&&(t=this(t)),8&n)return t;if("object"==typeof t&&t){if(4&n&&t.__esModule)return t;if(16&n&&"function"==typeof t.then)return t}var a=Object.create(null);l.r(a);var o={};e=e||[null,r({}),r([]),r(r)];for(var i=2&n&&t;"object"==typeof i&&!~e.indexOf(i);i=r(i))Object.getOwnPropertyNames(i).forEach((e=>o[e]=()=>t[e]));return o.default=()=>t,l.d(a,o),a},l.d=(e,r)=>{for(var t in r)l.o(r,t)&&!l.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},l.f={},l.e=e=>Promise.all(Object.keys(l.f).reduce(((r,t)=>(l.f[t](e,r),r)),[])),l.u=e=>e+".js",l.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t={},n="shell:",l.l=(e,r,a,o)=>{if(t[e])t[e].push(r);else{var i,s;if(void 0!==a)for(var p=document.getElementsByTagName("script"),d=0;d<p.length;d++){var f=p[d];if(f.getAttribute("src")==e||f.getAttribute("data-webpack")==n+a){i=f;break}}i||(s=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,l.nc&&i.setAttribute("nonce",l.nc),i.setAttribute("data-webpack",n+a),i.src=e),t[e]=[r];var u=(r,n)=>{i.onerror=i.onload=null,clearTimeout(c);var a=t[e];if(delete t[e],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((e=>e(n))),r)return r(n)},c=setTimeout(u.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=u.bind(null,i.onerror),i.onload=u.bind(null,i.onload),s&&document.head.appendChild(i)}},l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a={945:[104,330,534,836,949]},o={104:["default","./app",642],330:["default","./app",641],534:["default","./app",451],836:["default","./app",353],949:["default","./app",783]},l.f.remotes=(e,r)=>{l.o(a,e)&&a[e].forEach((e=>{var t=l.R;t||(t=[]);var n=o[e];if(!(t.indexOf(n)>=0)){if(t.push(n),n.p)return r.push(n.p);var a=r=>{r||(r=new Error("Container missing")),"string"==typeof r.message&&(r.message+='\nwhile loading "'+n[1]+'" from '+n[2]),l.m[e]=()=>{throw r},n.p=0},i=(e,t,o,i,s,l)=>{try{var p=e(t,o);if(!p||!p.then)return s(p,i,l);var d=p.then((e=>s(e,i)),a);if(!l)return d;r.push(n.p=d)}catch(e){a(e)}},s=(e,r,a)=>i(r.get,n[1],t,0,p,a),p=r=>{n.p=1,l.m[e]=e=>{e.exports=r()}};i(l,n[2],0,0,((e,r,t)=>e?i(l.I,n[0],0,e,s,t):a()),1)}}))},(()=>{l.S={};var e={},r={};l.I=(t,n)=>{n||(n=[]);var a=r[t];if(a||(a=r[t]={}),!(n.indexOf(a)>=0)){if(n.push(a),e[t])return e[t];l.o(l.S,t)||(l.S[t]={}),l.S[t];var o=e=>{var r=e=>{return r="Initialization of sharing external failed: "+e,"undefined"!=typeof console&&console.warn&&console.warn(r);var r};try{var a=l(e);if(!a)return;var o=e=>e&&e.init&&e.init(l.S[t],n);if(a.then)return i.push(a.then(o,r));var s=o(a);if(s&&s.then)return i.push(s.catch(r))}catch(e){r(e)}},i=[];return"default"===t&&(o(451),o(642),o(353),o(783),o(641)),i.length?e[t]=Promise.all(i).then((()=>e[t]=1)):e[t]=1}}})(),l.p="http://localhost:3000/",(()=>{var e={179:0};l.f.j=(r,t)=>{var n=l.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else{var a=new Promise(((t,a)=>n=e[r]=[t,a]));t.push(n[2]=a);var o=l.p+l.u(r),i=new Error;l.l(o,(t=>{if(l.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+a+": "+o+")",i.name="ChunkLoadError",i.type=a,i.request=o,n[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,a,[o,i,s]=t,p=0;if(o.some((r=>0!==e[r]))){for(n in i)l.o(i,n)&&(l.m[n]=i[n]);s&&s(l)}for(r&&r(t);p<o.length;p++)a=o[p],l.o(e,a)&&e[a]&&e[a][0](),e[a]=0},t=self.webpackChunkshell=self.webpackChunkshell||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),l.nc=void 0,l(302)})();