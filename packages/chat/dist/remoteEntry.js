var chat;(()=>{"use strict";var e,r,t={707:(e,r,t)=>{var o={"./app":()=>Promise.all([t.e(745),t.e(986)]).then((()=>()=>t(986)))},a=(e,r)=>(t.R=r,r=t.o(o,e)?o[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),n=(e,r)=>{if(t.S){var o="default",a=t.S[o];if(a&&a!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[o]=e,t.I(o,r)}};t.d(r,{get:()=>a,init:()=>n})}},o={};function a(e){var r=o[e];if(void 0!==r)return r.exports;var n=o[e]={exports:{}};return t[e](n,n.exports,a),n.exports}a.m=t,a.c=o,a.d=(e,r)=>{for(var t in r)a.o(r,t)&&!a.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((r,t)=>(a.f[t](e,r),r)),[])),a.u=e=>e+".js",a.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="chat:",a.l=(t,o,n,i)=>{if(e[t])e[t].push(o);else{var l,d;if(void 0!==n)for(var s=document.getElementsByTagName("script"),u=0;u<s.length;u++){var c=s[u];if(c.getAttribute("src")==t||c.getAttribute("data-webpack")==r+n){l=c;break}}l||(d=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,a.nc&&l.setAttribute("nonce",a.nc),l.setAttribute("data-webpack",r+n),l.src=t),e[t]=[o];var f=(r,o)=>{l.onerror=l.onload=null,clearTimeout(p);var a=e[t];if(delete e[t],l.parentNode&&l.parentNode.removeChild(l),a&&a.forEach((e=>e(o))),r)return r(o)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=f.bind(null,l.onerror),l.onload=f.bind(null,l.onload),d&&document.head.appendChild(l)}},a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{a.S={};var e={},r={};a.I=(t,o)=>{o||(o=[]);var n=r[t];if(n||(n=r[t]={}),!(o.indexOf(n)>=0)){if(o.push(n),e[t])return e[t];a.o(a.S,t)||(a.S[t]={}),a.S[t];var i=[];return e[t]=i.length?Promise.all(i).then((()=>e[t]=1)):1}}})(),a.p="http://localhost:3005/",(()=>{var e={348:0};a.f.j=(r,t)=>{var o=a.o(e,r)?e[r]:void 0;if(0!==o)if(o)t.push(o[2]);else{var n=new Promise(((t,a)=>o=e[r]=[t,a]));t.push(o[2]=n);var i=a.p+a.u(r),l=new Error;a.l(i,(t=>{if(a.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var n=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;l.message="Loading chunk "+r+" failed.\n("+n+": "+i+")",l.name="ChunkLoadError",l.type=n,l.request=i,o[1](l)}}),"chunk-"+r,r)}};var r=(r,t)=>{var o,n,[i,l,d]=t,s=0;if(i.some((r=>0!==e[r]))){for(o in l)a.o(l,o)&&(a.m[o]=l[o]);d&&d(a)}for(r&&r(t);s<i.length;s++)n=i[s],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0},t=self.webpackChunkchat=self.webpackChunkchat||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var n=a(707);chat=n})();