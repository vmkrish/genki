if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let d={};const t=e=>i(e,o),l={module:{uri:o},exports:d,require:t};s[o]=Promise.all(n.map((e=>l[e]||t(e)))).then((e=>(r(...e),d)))}}define(["./workbox-fa446783"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-4fb310bf.css",revision:null},{url:"assets/index-e03c5863.js",revision:null},{url:"assets/NewView-5ffef850.js",revision:null},{url:"assets/workbox-window.prod.es5-a7b12eab.js",revision:null},{url:"favicon.ico",revision:"1ba2ae710d927f13d483fd5d1e548c9b"},{url:"index.html",revision:"153de586f54066cedbe358f565e334a0"},{url:"star-512x512.png",revision:"99d73f4febad5ae9277d26e5f1a94156"},{url:"ufo-192x192.png",revision:"15e6d6701796a89b66028e4d2b157149"},{url:"ufo-192x192.png",revision:"15e6d6701796a89b66028e4d2b157149"},{url:"star-512x512.png",revision:"99d73f4febad5ae9277d26e5f1a94156"},{url:"manifest.webmanifest",revision:"3b8a4fd8c8016838d104e5a9d0ac269d"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
