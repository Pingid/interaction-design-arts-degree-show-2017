"use strict";function setOfCachedUrls(a){return a.keys().then(function(a){return a.map(function(a){return a.url})}).then(function(a){return new Set(a)})}var precacheConfig=[["index.html","5e15ceff7d672b2bcc0cbd4a21ba5331"],["static/css/main.579cb879.css","c13d85c7081444f3f4f4ff172cc1ccbc"],["static/js/main.fb81b465.js","60ef7569a7c2c5bcbc5b8c190cdef976"],["static/media/Annie-1.5b283ddf.jpg","5b283ddf8a7526379b02c7bbb316229c"],["static/media/Annie.19b4e450.jpg","19b4e450be874b7596fbe2ffb6b6cb2c"],["static/media/Annie.59ff2182.jpg","59ff2182258715b2015c9af15d428087"],["static/media/Chiara-1.4095cdf8.jpg","4095cdf8937463b846043f657a8ff30a"],["static/media/Chiara.72f05d2c.jpg","72f05d2c857de97c9c582465ac1112e9"],["static/media/Chiara.c1697ee8.jpg","c1697ee8314fa4afdde7c32cf814b62c"],["static/media/Daichi-1.5409e6e7.jpg","5409e6e7bc0a7df19f93fff24ec41b05"],["static/media/Daichi.66da6ba0.jpg","66da6ba0b37e1ed2b55140ab11538c97"],["static/media/Daichi.e215910c.jpg","e215910c83e92425d5196b58b8ed6fac"],["static/media/Eyob-1.88d25a1a.jpg","88d25a1a607564921fcb64facd9940f2"],["static/media/Eyob.6c8d737b.jpg","6c8d737b1a03db7656e389bf37bb7dc4"],["static/media/Eyob.7d940720.jpg","7d940720549802e88ddf6b2ec4c705c0"],["static/media/Georgia-1.5be4ef65.jpg","5be4ef655ec023c3df0a12a0f72e5377"],["static/media/Georgia-1.d2f40f16.jpg","d2f40f16f2c5f4766b4a1c62122c24c1"],["static/media/Georgia-2.9219e803.jpg","9219e80317be4cf547d356019e42950b"],["static/media/Georgia.db5d9c06.jpg","db5d9c0698f6678f48add7f045c3ccc0"],["static/media/Hari-1.accf24c5.jpg","accf24c57d07eaaacd5183707bec52ff"],["static/media/Hari.10b9d955.jpg","10b9d9559044d8723ba31a036d15b79d"],["static/media/Hari.a09cadd1.jpg","a09cadd1974c334e9e224b602d4fda3f"],["static/media/Hyo-1.58c3c5a9.jpg","58c3c5a9fba25871ac29cc08349c265b"],["static/media/Hyo.b65a79ae.jpg","b65a79ae77250e9c36262c931139d747"],["static/media/Hyo.b9bd9a24.jpg","b9bd9a243cedb819e869e9f6917105dc"],["static/media/IDA.03cb979e.jpg","03cb979e5b455865ad5a10b8ff28ce27"],["static/media/Jodie-1.e83a647d.jpg","e83a647d5307a8e3ccfbe4618296e00c"],["static/media/Jodie.370f479a.jpg","370f479a6bab0c7995917303e9afef2e"],["static/media/Jodie.ef77d606.jpg","ef77d6062f0b79883ed94199dd7baf3b"],["static/media/Joe-1.5f8d4662.jpg","5f8d4662355c40a0c424d01a3d33239a"],["static/media/Joe.5afdf129.jpg","5afdf12980ff958b658addabdc642951"],["static/media/Joe.de31aa68.jpg","de31aa686d02c4f1c2f774071c58fd86"],["static/media/Marion-1.2.28fbb7ba.jpg","28fbb7ba9df73fa0d5ef051a133831f6"],["static/media/Marion-1.821aa4a0.jpg","821aa4a0b27ae20c93724ffa84ebaaf6"],["static/media/Marion-1.da6816a7.jpg","da6816a7d0921239050eba68d4dbca1f"],["static/media/Marion.ecfccd93.jpg","ecfccd9333be66a7da26957476aeb781"],["static/media/Matthew1.6f64cb75.jpg","6f64cb75b2e5e34ddc67ae269cee3c96"],["static/media/Matthew2.d2dfb2af.jpg","d2dfb2afb0e4b10ced56cabfcd6a9948"],["static/media/Matto-1.7655ccc5.jpg","7655ccc55d60d10704d6b7dc00b8e598"],["static/media/Matto.a1d807bd.jpg","a1d807bd84f64e135506a80af2108e0f"],["static/media/Mo-1.22eb08e0.jpg","22eb08e051bc1688a1b89766e5ab7db8"],["static/media/Mo.337919d3.jpg","337919d317b1319a92942e946da95a9c"],["static/media/Mo1.66dbfcfc.jpg","66dbfcfc64d8443ab920763c3bfbaffc"],["static/media/Mo2.ad867a17.jpg","ad867a172d913a3019a709cc8e75367b"],["static/media/Pinks-1.421b7767.jpg","421b7767c1914a696b3d8d5808cd866c"],["static/media/Pinks-1.4e55323d.jpg","4e55323d276f872851e39ee5ae3b2df7"],["static/media/Pinks-2.19ce8b2e.jpg","19ce8b2e2e287608a3467a9d4249fc69"],["static/media/Pinks.e5d37358.jpg","e5d37358b2490b2a5db312d2d91313d5"],["static/media/Rob-1.d0d194d2.jpg","d0d194d2e55268964eb536bdec21799a"],["static/media/Rob-2.f6d83666.jpg","f6d83666cc9b7a9f0df62b228a3bb0e7"],["static/media/Rob.a5ae721e.jpg","a5ae721e1b18d4a3d52207941dadd2f1"],["static/media/Rosie-1.9af4973f.jpg","9af4973f964a4723a597528092dd5fc6"],["static/media/Rosie-2.69025e6e.jpg","69025e6ecf2d90ea3e5947f9261259b5"],["static/media/Rosie.79f4d1fc.jpg","79f4d1fc8b0752e485187abe52744d22"],["static/media/Rosie.836a429c.jpg","836a429c60226f1e5a429c54f416a50b"],["static/media/Sara-1.95ee88b6.jpg","95ee88b696e8c036ced677422336939f"],["static/media/Sara.82af9c8b.jpg","82af9c8b05c2a413c0885e34fff325be"],["static/media/Sara.f6e748d9.jpg","f6e748d92dc53d7abd8de336e91a2883"],["static/media/Sasha-1.a72c281e.jpg","a72c281e191168e924f68f7516d39fab"],["static/media/Sasha-1.cd9c239c.jpg","cd9c239c6332b35f67111c1149243552"],["static/media/Sasha.cf821cd9.jpg","cf821cd92daefa6d63b7c99ad2882daa"],["static/media/Shini.fb7c9242.jpg","fb7c9242571e3b450f0b765b3c917f62"],["static/media/Shinny-1.d2dcf559.jpg","d2dcf559c8c8b01232786aa1dd7e4f2f"],["static/media/Shinny.80431dac.jpg","80431dac519c2f56ca176560efac1fcb"],["static/media/Stefon-1.4f3203c9.jpg","4f3203c95bccd507da60efeda06014a5"],["static/media/Stefon.582a4249.jpg","582a424998b1a3389b6e45a9351f262a"],["static/media/Stefon.bd85293f.jpg","bd85293f0ed95a60a05a5077b3c4bee4"],["static/media/Sydney-1.ae623e86.jpg","ae623e869b4741a345473c0ab48a4050"],["static/media/Sydney.743ca5b5.jpg","743ca5b58b009798c27730b9c9a730b8"],["static/media/Tommaso-Sasha.0a65099e.jpg","0a65099edae91ff3939dbdec5b14f1a5"],["static/media/Tommy-1.0c7d3457.jpg","0c7d34578ea1b204812fc6b626d5e3df"],["static/media/Tommy.a5c11fc8.jpg","a5c11fc8820edb8c56a94eee8b54cf89"],["static/media/Tudor-1.4ab359ec.jpg","4ab359ec77d4af9698b12bd2fde04290"],["static/media/Tudor-2.80a588d2.jpg","80a588d2834b0e5121cb44af622a75c0"],["static/media/Tudor.9d054787.jpg","9d054787013f335449556cde2363dfbf"],["static/media/Tudor1.afd4cb2a.jpg","afd4cb2a209f573b0ebab57e02ecace5"],["static/media/Tudor2.b18fe8c5.jpg","b18fe8c5e8fa841cd8f1760c5e14d982"],["static/media/Viola-1.9b661a13.jpg","9b661a13d0e0fed3f824da7cd8deacd0"],["static/media/Viola-Rosie-Jodie.88e4befd.jpg","88e4befdac65c9bf69ddf9eb9aba0f02"],["static/media/Viola.44443709.jpg","44443709c4ba80e61559eebeef32ef10"],["static/media/Viola2.52cf7884.jpg","52cf788406d5c30206f2bfa3fca39f52"],["static/media/Yasmine-1.b53a9aa4.jpg","b53a9aa44bc0dd5d79aca93e7e970b12"],["static/media/Yasmine.90988f74.jpg","90988f7420faf057d1e1da9162ef0974"],["static/media/times.b77cbe37.svg","b77cbe3747963cb81ac7f17fc8878cea"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(a,e){var c=new URL(a);return"/"===c.pathname.slice(-1)&&(c.pathname+=e),c.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(a,e,c,t){var d=new URL(a);return t&&d.pathname.match(t)||(d.search+=(d.search?"&":"")+encodeURIComponent(e)+"="+encodeURIComponent(c)),d.toString()},isPathWhitelisted=function(a,e){if(0===a.length)return!0;var c=new URL(e).pathname;return a.some(function(a){return c.match(a)})},stripIgnoredUrlParameters=function(a,e){var c=new URL(a);return c.hash="",c.search=c.search.slice(1).split("&").map(function(a){return a.split("=")}).filter(function(a){return e.every(function(e){return!e.test(a[0])})}).map(function(a){return a.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(a){var e=a[0],c=a[1],t=new URL(e,self.location),d=createCacheKey(t,hashParamName,c,/\.\w{8}\./);return[t.toString(),d]}));self.addEventListener("install",function(a){a.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(e){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!e.has(c)){var t=new Request(c,{credentials:"same-origin"});return fetch(t).then(function(e){if(!e.ok)throw new Error("Request for "+c+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(c,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(a){var e=new Set(urlsToCacheKeys.values());a.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(c){return Promise.all(c.map(function(c){if(!e.has(c.url))return a.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,c=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching);e=urlsToCacheKeys.has(c);e||(c=addDirectoryIndex(c,"index.html"),e=urlsToCacheKeys.has(c));!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(c=new URL("/ida-degree-show-2017/index.html",self.location).toString(),e=urlsToCacheKeys.has(c)),e&&a.respondWith(caches.open(cacheName).then(function(a){return a.match(urlsToCacheKeys.get(c)).then(function(a){if(a)return a;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});