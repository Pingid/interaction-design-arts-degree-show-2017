"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["index.html","472211d3158d70aa2e4100132eea0cf8"],["static/css/main.c11d2987.css","217d7b4cc901446ddcdaf56123d3bae0"],["static/js/main.85347a55.js","73b88722cf19bc9d5fc253b7967013ba"],["static/media/01.15ee1d41.png","15ee1d4112b05f7f06450e5661148621"],["static/media/360.efbf1526.svg","efbf1526aa17cdea3fd3d473e525100c"],["static/media/Daichi.66da6ba0.jpg","66da6ba0b37e1ed2b55140ab11538c97"],["static/media/Daichi.afb46405.jpg","afb4640529e74296ebcf5f01bed304d4"],["static/media/Daichi.e919dbd4.pdf","e919dbd42e7ecfb277be1a3815540585"],["static/media/Eyob.07ef87a2.pdf","07ef87a2f8e29be481ff2664b4658e23"],["static/media/Eyob.6c8d737b.jpg","6c8d737b1a03db7656e389bf37bb7dc4"],["static/media/Eyob.d85041b4.jpg","d85041b4a061c36db0e094ad3d7da7a4"],["static/media/Hyo.4aba7f7c.pdf","4aba7f7c7ace35e6a8aece1d71c5ad94"],["static/media/Hyo.a4e544e6.jpg","a4e544e6250d4537e9af49eb0ebbed7e"],["static/media/Hyo.b65a79ae.jpg","b65a79ae77250e9c36262c931139d747"],["static/media/Jodie.9f878094.pdf","9f878094caa4cee746007eaf7da57f37"],["static/media/Jodie.a78a13fe.jpg","a78a13fe8b38a53a86f7f411ad27a8eb"],["static/media/Jodie.ef77d606.jpg","ef77d6062f0b79883ed94199dd7baf3b"],["static/media/Joe.02ccadfd.jpg","02ccadfd81d912ba4b671735837f9718"],["static/media/Joe.8e84d496.pdf","8e84d49628c3a1582f206a244bb25841"],["static/media/Joe.de31aa68.jpg","de31aa686d02c4f1c2f774071c58fd86"],["static/media/Marion.3ab2d5d2.pdf","3ab2d5d231972499f0cc56b907799744"],["static/media/Marion.84a1cf2d.jpg","84a1cf2de872a40455c88bdf2af43941"],["static/media/Marion.ecfccd93.jpg","ecfccd9333be66a7da26957476aeb781"],["static/media/Matto.184d33e6.jpg","184d33e6deb000ad8509a4632aa10644"],["static/media/Matto.735a8853.pdf","735a8853db107593fb58f053f9b0155c"],["static/media/Matto.a1d807bd.jpg","a1d807bd84f64e135506a80af2108e0f"],["static/media/Millennium by Stefon Grant.3272f3bf.jpg","3272f3bfa517ade73d3938d9bf469f53"],["static/media/Mo.337919d3.jpg","337919d317b1319a92942e946da95a9c"],["static/media/Mo.9451ec58.pdf","9451ec582b058e588b47bd5b17e95de8"],["static/media/Mo.d4b94dcf.jpg","d4b94dcfbda26c26247f7d3387b4731e"],["static/media/Pinks.905827f6.pdf","905827f6f286877f857451c3cc8f256d"],["static/media/Pinks.e5d37358.jpg","e5d37358b2490b2a5db312d2d91313d5"],["static/media/Pinks.e8956098.jpg","e8956098633acd5097dce0072cae31ed"],["static/media/Rob.245445bb.jpg","245445bb94f5b002f1fb42b6af26909d"],["static/media/Rob.a5ae721e.jpg","a5ae721e1b18d4a3d52207941dadd2f1"],["static/media/Rob.d5557a85.pdf","d5557a8520ad88ff6270b3b9332c8210"],["static/media/Rosie.79f4d1fc.jpg","79f4d1fc8b0752e485187abe52744d22"],["static/media/Rosie.d1658363.jpg","d1658363230b8d91f129f75e51ab823c"],["static/media/Rosie.ed32d345.pdf","ed32d345f9e34e68d1cf0a8f88a82837"],["static/media/Sasha.955b8152.jpg","955b815249f4f38c49ec5e9e47d4af32"],["static/media/Sasha.cf821cd9.jpg","cf821cd92daefa6d63b7c99ad2882daa"],["static/media/Sasha.de11a688.pdf","de11a688adb27e31a74a0b25b5bbaf78"],["static/media/Sasha.f8268d7f.jpg","f8268d7f0267b93abe6a693bdd97128e"],["static/media/Screen Shot 2017-06-05 at 14.05.36.90d5ab55.png","90d5ab5516ec0e04b0bd9b80f18551a0"],["static/media/Shinny.80431dac.jpg","80431dac519c2f56ca176560efac1fcb"],["static/media/Shinny.b9b1b10d.jpg","b9b1b10d647489a2a024f9d460f7a37b"],["static/media/Stefon.74eeda6c.jpg","74eeda6ca6d95e12618297e41d9c71ec"],["static/media/Stefon.78765c7b.pdf","78765c7b442878558065f9fc1a22198e"],["static/media/Stefon.bd85293f.jpg","bd85293f0ed95a60a05a5077b3c4bee4"],["static/media/Sydney.743ca5b5.jpg","743ca5b58b009798c27730b9c9a730b8"],["static/media/Sydney.8d7c010f.pdf","8d7c010fb7c7297399efaf67c38ae4f2"],["static/media/Sydney.be8303b8.jpg","be8303b8ee552bcb90e72e2b9ff93477"],["static/media/TOMMY.68395e62.pdf","68395e62786903273ab578a259a50271"],["static/media/Tommy.a5c11fc8.jpg","a5c11fc8820edb8c56a94eee8b54cf89"],["static/media/Tommy.b29ddd39.jpg","b29ddd39632577d3ea5364cf1c3c9822"],["static/media/Tudor.9d054787.jpg","9d054787013f335449556cde2363dfbf"],["static/media/Tudor.ea98240f.jpg","ea98240fe5b943719b66273aa54d8d5a"],["static/media/Tudor.eba56944.pdf","eba56944f22e439e97797169a5756f11"],["static/media/Viola.44443709.jpg","44443709c4ba80e61559eebeef32ef10"],["static/media/Viola.54dc80a4.pdf","54dc80a44f85bf70cffba9e61a4a02d4"],["static/media/Viola.cea2579b.jpg","cea2579beaa33a2f62c93406a1562655"],["static/media/cc42.59ac245d.jpg","59ac245df57952a7c68a8cc7e4603635"],["static/media/confession5.c9efa2cc.jpeg","c9efa2cc1f16b86c77402a03f2ee25b7"],["static/media/daichi-slice.6d8844d3.svg","6d8844d3f1c04ec8d9aba5965efa9565"],["static/media/ida.b69a8668.svg","b69a866835c760a39f6da7efcc79fd24"],["static/media/image1.9aba69d3.JPG","9aba69d3787e56d927086d022238bdce"],["static/media/myeong shin kim.f96bd070.pdf","f96bd07090940dc6c54b464298e77bde"],["static/media/shiny.dfb82e0d.pdf","dfb82e0d4df54f9eca799e761ad6f156"],["static/media/show.f2d92b65.jpg","f2d92b65447b4cef8f7a839bf620cd99"],["static/media/slice.728fd715.ai","728fd715b2afb936fd41f298833ce88d"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,d){var c=new URL(e);return d&&c.pathname.match(d)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],d=new URL(a,self.location),c=createCacheKey(d,hashParamName,t,/\.\w{8}\./);return[d.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var d=new Request(t,{credentials:"same-origin"});return fetch(d).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);a=urlsToCacheKeys.has(t);a||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/ida-degree-show-2017/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});