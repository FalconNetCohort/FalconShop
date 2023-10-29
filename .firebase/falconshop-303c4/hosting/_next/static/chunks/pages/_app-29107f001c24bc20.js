(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{4444:function(e,t,r){"use strict";r.d(t,{BH:function(){return Deferred},DV:function(){return safeGet},GJ:function(){return isAdmin},L:function(){return base64urlEncodeWithoutPadding},LL:function(){return ErrorFactory},P0:function(){return getDefaultEmulatorHostnameAndPort},Pz:function(){return getExperimentalSetting},Sg:function(){return createMockUserToken},UG:function(){return isNode},UI:function(){return map},US:function(){return s},Wl:function(){return stringify},Yr:function(){return isNodeSdk},ZR:function(){return FirebaseError},aH:function(){return getDefaultAppConfig},b$:function(){return isReactNative},cI:function(){return jsonEval},dS:function(){return stringToByteArray},eu:function(){return validateIndexedDBOpenable},g5:function(){return assertionError},gK:function(){return errorPrefix},gQ:function(){return Sha1},h$:function(){return base64Encode},hl:function(){return isIndexedDBAvailable},hu:function(){return assert},m9:function(){return getModularInstance},ne:function(){return createSubscribe},p$:function(){return deepCopy},pd:function(){return extractQuerystring},q4:function(){return getDefaultEmulatorHost},r3:function(){return contains},ru:function(){return isBrowserExtension},tV:function(){return base64Decode},uI:function(){return isMobileCordova},ug:function(){return stringLength},vZ:function(){return function deepEqual(e,t){if(e===t)return!0;let r=Object.keys(e),n=Object.keys(t);for(let i of r){if(!n.includes(i))return!1;let r=e[i],s=t[i];if(isObject(r)&&isObject(s)){if(!deepEqual(r,s))return!1}else if(r!==s)return!1}for(let e of n)if(!r.includes(e))return!1;return!0}},w1:function(){return isIE},w9:function(){return isValidFormat},xO:function(){return querystring},xb:function(){return isEmpty},z$:function(){return getUA},zd:function(){return querystringDecode}});var n=r(3454);/**
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
 */let i={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},assert=function(e,t){if(!e)throw assertionError(t)},assertionError=function(e){return Error("Firebase Database ("+i.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},stringToByteArray$1=function(e){let t=[],r=0;for(let n=0;n<e.length;n++){let i=e.charCodeAt(n);i<128?t[r++]=i:(i<2048?t[r++]=i>>6|192:((64512&i)==55296&&n+1<e.length&&(64512&e.charCodeAt(n+1))==56320?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++n)),t[r++]=i>>18|240,t[r++]=i>>12&63|128):t[r++]=i>>12|224,t[r++]=i>>6&63|128),t[r++]=63&i|128)}return t},byteArrayToString=function(e){let t=[],r=0,n=0;for(;r<e.length;){let i=e[r++];if(i<128)t[n++]=String.fromCharCode(i);else if(i>191&&i<224){let s=e[r++];t[n++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){let s=e[r++],o=e[r++],a=e[r++],l=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[n++]=String.fromCharCode(55296+(l>>10)),t[n++]=String.fromCharCode(56320+(1023&l))}else{let s=e[r++],o=e[r++];t[n++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let t=0;t<e.length;t+=3){let i=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,h=i>>2,c=(3&i)<<4|o>>4,u=(15&o)<<2|l>>6,d=63&l;a||(d=64,s||(u=64)),n.push(r[h],r[c],r[u],r[d])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(stringToByteArray$1(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):byteArrayToString(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let t=0;t<e.length;){let i=r[e.charAt(t++)],s=t<e.length,o=s?r[e.charAt(t)]:0;++t;let a=t<e.length,l=a?r[e.charAt(t)]:64;++t;let h=t<e.length,c=h?r[e.charAt(t)]:64;if(++t,null==i||null==o||null==l||null==c)throw new DecodeBase64StringError;let u=i<<2|o>>4;if(n.push(u),64!==l){let e=o<<4&240|l>>2;if(n.push(e),64!==c){let e=l<<6&192|c;n.push(e)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};let DecodeBase64StringError=class DecodeBase64StringError extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}};let base64Encode=function(e){let t=stringToByteArray$1(e);return s.encodeByteArray(t,!0)},base64urlEncodeWithoutPadding=function(e){return base64Encode(e).replace(/\./g,"")},base64Decode=function(e){try{return s.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function deepCopy(e){return function deepExtend(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(let r in t)t.hasOwnProperty(r)&&"__proto__"!==r&&(e[r]=deepExtend(e[r],t[r]));return e}(void 0,e)}/**
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
 */let getDefaultsFromGlobal=()=>/**
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
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==r.g)return r.g;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,getDefaultsFromEnvVariable=()=>{if(void 0===n||void 0===n.env)return;let e=n.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},getDefaultsFromCookie=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}let t=e&&base64Decode(e[1]);return t&&JSON.parse(t)},getDefaults=()=>{try{return getDefaultsFromGlobal()||getDefaultsFromEnvVariable()||getDefaultsFromCookie()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},getDefaultEmulatorHost=e=>{var t,r;return null===(r=null===(t=getDefaults())||void 0===t?void 0:t.emulatorHosts)||void 0===r?void 0:r[e]},getDefaultEmulatorHostnameAndPort=e=>{let t=getDefaultEmulatorHost(e);if(!t)return;let r=t.lastIndexOf(":");if(r<=0||r+1===t.length)throw Error(`Invalid host ${t} with no separate hostname and port!`);let n=parseInt(t.substring(r+1),10);return"["===t[0]?[t.substring(1,r-1),n]:[t.substring(0,r),n]},getDefaultAppConfig=()=>{var e;return null===(e=getDefaults())||void 0===e?void 0:e.config},getExperimentalSetting=e=>{var t;return null===(t=getDefaults())||void 0===t?void 0:t[`_${e}`]};/**
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
 */let Deferred=class Deferred{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,r))}}};/**
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
 */function createMockUserToken(e,t){if(e.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let r=t||"demo-project",n=e.iat||0,i=e.sub||e.user_id;if(!i)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:n,exp:n+3600,auth_time:n,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[base64urlEncodeWithoutPadding(JSON.stringify({alg:"none",type:"JWT"})),base64urlEncodeWithoutPadding(JSON.stringify(s)),""].join(".")}/**
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
 */function getUA(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function isMobileCordova(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA())}function isNode(){var e;let t=null===(e=getDefaults())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(r.g.process)}catch(e){return!1}}function isBrowserExtension(){let e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function isReactNative(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function isIE(){let e=getUA();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function isNodeSdk(){return!0===i.NODE_CLIENT||!0===i.NODE_ADMIN}function isIndexedDBAvailable(){try{return"object"==typeof indexedDB}catch(e){return!1}}function validateIndexedDBOpenable(){return new Promise((e,t)=>{try{let r=!0,n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},i.onupgradeneeded=()=>{r=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})}let FirebaseError=class FirebaseError extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name="FirebaseError",Object.setPrototypeOf(this,FirebaseError.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ErrorFactory.prototype.create)}};let ErrorFactory=class ErrorFactory{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){let r=t[0]||{},n=`${this.service}/${e}`,i=this.errors[e],s=i?i.replace(o,(e,t)=>{let n=r[t];return null!=n?String(n):`<${t}?>`}):"Error",a=`${this.serviceName}: ${s} (${n}).`,l=new FirebaseError(n,a,r);return l}};let o=/\{\$([^}]+)}/g;/**
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
 */function jsonEval(e){return JSON.parse(e)}function stringify(e){return JSON.stringify(e)}/**
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
 */let decode=function(e){let t={},r={},n={},i="";try{let s=e.split(".");t=jsonEval(base64Decode(s[0])||""),r=jsonEval(base64Decode(s[1])||""),i=s[2],n=r.d||{},delete r.d}catch(e){}return{header:t,claims:r,data:n,signature:i}},isValidFormat=function(e){let t=decode(e),r=t.claims;return!!r&&"object"==typeof r&&r.hasOwnProperty("iat")},isAdmin=function(e){let t=decode(e).claims;return"object"==typeof t&&!0===t.admin};/**
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
 */function contains(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function safeGet(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function isEmpty(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function map(e,t,r){let n={};for(let i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=t.call(r,e[i],i,e));return n}function isObject(e){return null!==e&&"object"==typeof e}/**
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
 */function querystring(e){let t=[];for(let[r,n]of Object.entries(e))Array.isArray(n)?n.forEach(e=>{t.push(encodeURIComponent(r)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(r)+"="+encodeURIComponent(n));return t.length?"&"+t.join("&"):""}function querystringDecode(e){let t={},r=e.replace(/^\?/,"").split("&");return r.forEach(e=>{if(e){let[r,n]=e.split("=");t[decodeURIComponent(r)]=decodeURIComponent(n)}}),t}function extractQuerystring(e){let t=e.indexOf("?");if(!t)return"";let r=e.indexOf("#",t);return e.substring(t,r>0?r:void 0)}/**
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
 */let Sha1=class Sha1{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){let r,n;t||(t=0);let i=this.W_;if("string"==typeof e)for(let r=0;r<16;r++)i[r]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let r=0;r<16;r++)i[r]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){let t=i[e-3]^i[e-8]^i[e-14]^i[e-16];i[e]=(t<<1|t>>>31)&4294967295}let s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],l=this.chain_[3],h=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(r=l^o&(a^l),n=1518500249):(r=o^a^l,n=1859775393):e<60?(r=o&a|l&(o|a),n=2400959708):(r=o^a^l,n=3395469782);let t=(s<<5|s>>>27)+r+h+n+i[e]&4294967295;h=l,l=a,a=(o<<30|o>>>2)&4294967295,o=s,s=t}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+h&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);let r=t-this.blockSize,n=0,i=this.buf_,s=this.inbuf_;for(;n<t;){if(0===s)for(;n<=r;)this.compress_(e,n),n+=this.blockSize;if("string"==typeof e){for(;n<t;)if(i[s]=e.charCodeAt(n),++s,++n,s===this.blockSize){this.compress_(i),s=0;break}}else for(;n<t;)if(i[s]=e[n],++s,++n,s===this.blockSize){this.compress_(i),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){let e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let r=0;for(let t=0;t<5;t++)for(let n=24;n>=0;n-=8)e[r]=this.chain_[t]>>n&255,++r;return e}};function createSubscribe(e,t){let r=new ObserverProxy(e,t);return r.subscribe.bind(r)}let ObserverProxy=class ObserverProxy{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let n;if(void 0===e&&void 0===t&&void 0===r)throw Error("Missing Observer.");void 0===(n=!function(e,t){if("object"!=typeof e||null===e)return!1;for(let r of t)if(r in e&&"function"==typeof e[r])return!0;return!1}(e,["next","error","complete"])?{next:e,error:t,complete:r}:e).next&&(n.next=noop),void 0===n.error&&(n.error=noop),void 0===n.complete&&(n.complete=noop);let i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(e){}}),this.observers.push(n),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}};function noop(){}function errorPrefix(e,t){return`${e} failed: ${t} argument `}/**
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
 */let stringToByteArray=function(e){let t=[],r=0;for(let n=0;n<e.length;n++){let i=e.charCodeAt(n);if(i>=55296&&i<=56319){let t=i-55296;assert(++n<e.length,"Surrogate pair missing trail surrogate.");let r=e.charCodeAt(n)-56320;i=65536+(t<<10)+r}i<128?t[r++]=i:(i<2048?t[r++]=i>>6|192:(i<65536?t[r++]=i>>12|224:(t[r++]=i>>18|240,t[r++]=i>>12&63|128),t[r++]=i>>6&63|128),t[r++]=63&i|128)}return t},stringLength=function(e){let t=0;for(let r=0;r<e.length;r++){let n=e.charCodeAt(r);n<128?t++:n<2048?t+=2:n>=55296&&n<=56319?(t+=4,r++):t+=3}return t};/**
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
 */function getModularInstance(e){return e&&e._delegate?e._delegate:e}},3454:function(e,t,r){"use strict";var n,i;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(i=r.g.process)?void 0:i.env)?r.g.process:r(7663)},6840:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(6198)}])},3050:function(e,t,r){"use strict";r.d(t,{Z:function(){return h},t:function(){return l}});var n=r(5816);/**
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
 */(0,n.KN)("firebase","10.5.2","app");var i=r(9355),s=r(6650);let o=(0,n.ZF)({apiKey:"AIzaSyCdd3VmqdWllIeiz5paGOe4h7JBWWE0ui8",authDomain:"falconshop-303c4.firebaseapp.com",databaseURL:"https://falconshop-303c4-default-rtdb.firebaseio.com",projectId:"falconshop-303c4",storageBucket:"falconshop-303c4.appspot.com",messagingSenderId:"415270323891",appId:"1:415270323891:web:f44f363a7743ee1f2b92c6",measurementId:"G-K8CME54MV1"}),a=(0,i.N8)(o),l=(0,s.cF)(o);var h=a},7498:function(e,t){"use strict";var r,n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{PrefetchKind:function(){return r},ACTION_REFRESH:function(){return i},ACTION_NAVIGATE:function(){return s},ACTION_RESTORE:function(){return o},ACTION_SERVER_PATCH:function(){return a},ACTION_PREFETCH:function(){return l},ACTION_FAST_REFRESH:function(){return h},ACTION_SERVER_ACTION:function(){return c}});let i="refresh",s="navigate",o="restore",a="server-patch",l="prefetch",h="fast-refresh",c="server-action";(n=r||(r={})).AUTO="auto",n.FULL="full",n.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},30:function(e,t,r){"use strict";function getDomainLocale(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return getDomainLocale}}),r(2866),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5170:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return v}});let n=r(8754),i=n._(r(7294)),s=r(4450),o=r(2227),a=r(4364),l=r(109),h=r(3607),c=r(1823),u=r(9031),d=r(920),p=r(30),f=r(7192),_=r(7498),m=new Set;function prefetch(e,t,r,n,i,s){if(!s&&!(0,o.isLocalURL)(t))return;if(!n.bypassPrefetchedCheck){let i=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,s=t+"%"+r+"%"+i;if(m.has(s))return;m.add(s)}let a=s?e.prefetch(t,i):e.prefetch(t,r,n);Promise.resolve(a).catch(e=>{})}function formatStringOrUrl(e){return"string"==typeof e?e:(0,a.formatUrl)(e)}let g=i.default.forwardRef(function(e,t){let r,n;let{href:a,as:m,children:g,prefetch:v=null,passHref:y,replace:C,shallow:w,scroll:b,locale:I,onClick:T,onMouseEnter:E,onTouchStart:S,legacyBehavior:P=!1,...R}=e;r=g,P&&("string"==typeof r||"number"==typeof r)&&(r=i.default.createElement("a",null,r));let k=i.default.useContext(c.RouterContext),N=i.default.useContext(u.AppRouterContext),A=null!=k?k:N,O=!k,D=!1!==v,x=null===v?_.PrefetchKind.AUTO:_.PrefetchKind.FULL,{href:L,as:F}=i.default.useMemo(()=>{if(!k){let e=formatStringOrUrl(a);return{href:e,as:m?formatStringOrUrl(m):e}}let[e,t]=(0,s.resolveHref)(k,a,!0);return{href:e,as:m?(0,s.resolveHref)(k,m):t||e}},[k,a,m]),M=i.default.useRef(L),U=i.default.useRef(F);P&&(n=i.default.Children.only(r));let W=P?n&&"object"==typeof n&&n.ref:t,[q,B,V]=(0,d.useIntersection)({rootMargin:"200px"}),j=i.default.useCallback(e=>{(U.current!==F||M.current!==L)&&(V(),U.current=F,M.current=L),q(e),W&&("function"==typeof W?W(e):"object"==typeof W&&(W.current=e))},[F,W,L,V,q]);i.default.useEffect(()=>{A&&B&&D&&prefetch(A,L,F,{locale:I},{kind:x},O)},[F,L,B,I,D,null==k?void 0:k.locale,A,O,x]);let H={ref:j,onClick(e){P||"function"!=typeof T||T(e),P&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),A&&!e.defaultPrevented&&function(e,t,r,n,s,a,l,h,c,u){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,r=t.getAttribute("target");return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,o.isLocalURL)(r)))return;e.preventDefault();let navigate=()=>{let e=null==l||l;"beforePopState"in t?t[s?"replace":"push"](r,n,{shallow:a,locale:h,scroll:e}):t[s?"replace":"push"](n||r,{forceOptimisticNavigation:!u,scroll:e})};c?i.default.startTransition(navigate):navigate()}(e,A,L,F,C,w,b,I,O,D)},onMouseEnter(e){P||"function"!=typeof E||E(e),P&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),A&&(D||!O)&&prefetch(A,L,F,{locale:I,priority:!0,bypassPrefetchedCheck:!0},{kind:x},O)},onTouchStart(e){P||"function"!=typeof S||S(e),P&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),A&&(D||!O)&&prefetch(A,L,F,{locale:I,priority:!0,bypassPrefetchedCheck:!0},{kind:x},O)}};if((0,l.isAbsoluteUrl)(F))H.href=F;else if(!P||y||"a"===n.type&&!("href"in n.props)){let e=void 0!==I?I:null==k?void 0:k.locale,t=(null==k?void 0:k.isLocaleDomain)&&(0,p.getDomainLocale)(F,e,null==k?void 0:k.locales,null==k?void 0:k.domainLocales);H.href=t||(0,f.addBasePath)((0,h.addLocale)(F,e,null==k?void 0:k.defaultLocale))}return P?i.default.cloneElement(n,H):i.default.createElement("a",{...R,...H},r)}),v=g;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},920:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return useIntersection}});let n=r(7294),i=r(3436),s="function"==typeof IntersectionObserver,o=new Map,a=[];function useIntersection(e){let{rootRef:t,rootMargin:r,disabled:l}=e,h=l||!s,[c,u]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);(0,n.useEffect)(()=>{if(s){if(h||c)return;let e=d.current;if(e&&e.tagName){let n=function(e,t,r){let{id:n,observer:i,elements:s}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=a.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=o.get(n)))return t;let i=new Map,s=new IntersectionObserver(e=>{e.forEach(e=>{let t=i.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:s,elements:i},a.push(r),o.set(r,t),t}(r);return s.set(e,t),i.observe(e),function(){if(s.delete(e),i.unobserve(e),0===s.size){i.disconnect(),o.delete(n);let e=a.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&u(e),{root:null==t?void 0:t.current,rootMargin:r});return n}}else if(!c){let e=(0,i.requestIdleCallback)(()=>u(!0));return()=>(0,i.cancelIdleCallback)(e)}},[h,r,t,c,d.current]);let f=(0,n.useCallback)(()=>{u(!1)},[]);return[p,c,f]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6198:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return _app}});var n,i=r(5893);r(9427);var s=r(7294),o=r(1664),a=r.n(o),l=r(4444),h=r(5816),c=r(3333);function __rest(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)0>t.indexOf(n[i])&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r}"function"==typeof SuppressedError&&SuppressedError;var u=r(8463);function _prodErrorMap(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}let d=new l.LL("auth","Firebase",_prodErrorMap()),p=new c.Yd("@firebase/auth");function _logError(e,...t){p.logLevel<=c.in.ERROR&&p.error(`Auth (${h.Jn}): ${e}`,...t)}/**
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
 */function _fail(e,...t){throw createErrorInternal(e,...t)}function _createError(e,...t){return createErrorInternal(e,...t)}function createErrorInternal(e,...t){if("string"!=typeof e){let r=t[0],n=[...t.slice(1)];return n[0]&&(n[0].appName=e.name),e._errorFactory.create(r,...n)}return d.create(e,...t)}function _assert(e,t,...r){if(!e)throw createErrorInternal(t,...r)}function debugFail(e){let t="INTERNAL ASSERTION FAILED: "+e;throw _logError(t),Error(t)}/**
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
 */function _getCurrentUrl(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function _getCurrentScheme(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}/**
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
 */let Delay=class Delay{constructor(e,t){this.shortDelay=e,this.longDelay=t,t>e||debugFail("Short delay should be less than long delay!"),this.isMobile=(0,l.uI)()||(0,l.b$)()}get(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&("http:"===_getCurrentScheme()||"https:"===_getCurrentScheme()||(0,l.ru)()||"connection"in navigator))||navigator.onLine?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}};/**
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
 */function _emulatorUrl(e,t){e.emulator||debugFail("Emulator should always be set here");let{url:r}=e.emulator;return t?`${r}${t.startsWith("/")?t.slice(1):t}`:r}/**
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
 */let FetchProvider=class FetchProvider{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void debugFail("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void debugFail("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void debugFail("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}};/**
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
 */let f={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},_=new Delay(3e4,6e4);function _addTidIfNecessary(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function _performApiRequest(e,t,r,n,i={}){return _performFetchWithErrorHandling(e,i,async()=>{let i={},s={};n&&("GET"===t?s=n:i={body:JSON.stringify(n)});let o=(0,l.xO)(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),FetchProvider.fetch()(_getFinalTarget(e,e.config.apiHost,r,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))})}async function _performFetchWithErrorHandling(e,t,r){e._canInitEmulator=!1;let n=Object.assign(Object.assign({},f),t);try{let t=new NetworkTimeout(e),i=await Promise.race([r(),t.promise]);t.clearNetworkTimeout();let s=await i.json();if("needConfirmation"in s)throw _makeTaggedError(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{let t=i.ok?s.errorMessage:s.error.message,[r,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===r)throw _makeTaggedError(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===r)throw _makeTaggedError(e,"email-already-in-use",s);if("USER_DISABLED"===r)throw _makeTaggedError(e,"user-disabled",s);let a=n[r]||r.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw function(e,t,r){let n=Object.assign(Object.assign({},_prodErrorMap()),{[t]:r}),i=new l.LL("auth","Firebase",n);return i.create(t,{appName:e.name})}(e,a,o);_fail(e,a)}}catch(t){if(t instanceof l.ZR)throw t;_fail(e,"network-request-failed",{message:String(t)})}}async function _performSignInRequest(e,t,r,n,i={}){let s=await _performApiRequest(e,t,r,n,i);return"mfaPendingCredential"in s&&_fail(e,"multi-factor-auth-required",{_serverResponse:s}),s}function _getFinalTarget(e,t,r,n){let i=`${t}${r}?${n}`;return e.config.emulator?_emulatorUrl(e.config,i):`${e.config.apiScheme}://${i}`}let NetworkTimeout=class NetworkTimeout{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(_createError(this.auth,"network-request-failed")),_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}};function _makeTaggedError(e,t,r){let n={appName:e.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);let i=_createError(e,t,n);return i.customData._tokenResponse=r,i}function isEnterprise(e){return void 0!==e&&void 0!==e.enterprise}let RecaptchaConfig=class RecaptchaConfig{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(let t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return function(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}};async function getRecaptchaConfig(e,t){return _performApiRequest(e,"GET","/v2/recaptchaConfig",_addTidIfNecessary(e,t))}/**
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
 */async function deleteAccount(e,t){return _performApiRequest(e,"POST","/v1/accounts:delete",t)}async function getAccountInfo(e,t){return _performApiRequest(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function utcTimestampToDateString(e){if(e)try{let t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}async function getIdTokenResult(e,t=!1){let r=(0,l.m9)(e),n=await r.getIdToken(t),i=_parseToken(n);_assert(i&&i.exp&&i.auth_time&&i.iat,r.auth,"internal-error");let s="object"==typeof i.firebase?i.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:i,token:n,authTime:utcTimestampToDateString(secondsStringToMilliseconds(i.auth_time)),issuedAtTime:utcTimestampToDateString(secondsStringToMilliseconds(i.iat)),expirationTime:utcTimestampToDateString(secondsStringToMilliseconds(i.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}function secondsStringToMilliseconds(e){return 1e3*Number(e)}function _parseToken(e){let[t,r,n]=e.split(".");if(void 0===t||void 0===r||void 0===n)return _logError("JWT malformed, contained fewer than 3 sections"),null;try{let e=(0,l.tV)(r);if(!e)return _logError("Failed to decode base64 JWT payload"),null;return JSON.parse(e)}catch(e){return _logError("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}/**
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
 */async function _logoutIfInvalidated(e,t,r=!1){if(r)return t;try{return await t}catch(t){throw t instanceof l.ZR&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}/**
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
 */let ProactiveRefresh=class ProactiveRefresh{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){let e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;let e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,r=e-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(null==e?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}};/**
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
 */let UserMetadata=class UserMetadata{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=utcTimestampToDateString(this.lastLoginAt),this.creationTime=utcTimestampToDateString(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};/**
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
 */async function _reloadWithoutSaving(e){var t;let r=e.auth,n=await e.getIdToken(),i=await _logoutIfInvalidated(e,getAccountInfo(r,{idToken:n}));_assert(null==i?void 0:i.users.length,r,"internal-error");let s=i.users[0];e._notifyReloadListener(s);let o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map(e=>{var{providerId:t}=e,r=__rest(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}}):[],a=function(e,t){let r=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...r,...t]}(e.providerData,o),l=e.isAnonymous,h=!(e.email&&s.passwordHash)&&!(null==a?void 0:a.length),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new UserMetadata(s.createdAt,s.lastLoginAt),isAnonymous:!!l&&h};Object.assign(e,c)}async function reload(e){let t=(0,l.m9)(e);await _reloadWithoutSaving(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}/**
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
 */async function requestStsToken(e,t){let r=await _performFetchWithErrorHandling(e,{},async()=>{let r=(0,l.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:n,apiKey:i}=e.config,s=_getFinalTarget(e,n,"/v1/token",`key=${i}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",FetchProvider.fetch()(s,{method:"POST",headers:o,body:r})});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}/**
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
 */let StsTokenManager=class StsTokenManager{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_assert(e.idToken,"internal-error"),_assert(void 0!==e.idToken,"internal-error"),_assert(void 0!==e.refreshToken,"internal-error");let t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){let t=_parseToken(e);return _assert(t,"internal-error"),_assert(void 0!==t.exp,"internal-error"),_assert(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return(_assert(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired)?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:r,refreshToken:n,expiresIn:i}=await requestStsToken(e,t);this.updateTokensAndExpiration(r,n,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*r}static fromJSON(e,t){let{refreshToken:r,accessToken:n,expirationTime:i}=t,s=new StsTokenManager;return r&&(_assert("string"==typeof r,"internal-error",{appName:e}),s.refreshToken=r),n&&(_assert("string"==typeof n,"internal-error",{appName:e}),s.accessToken=n),i&&(_assert("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new StsTokenManager,this.toJSON())}_performRefresh(){return debugFail("not implemented")}};/**
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
 */function assertStringOrUndefined(e,t){_assert("string"==typeof e||void 0===e,"internal-error",{appName:t})}let UserImpl=class UserImpl{constructor(e){var{uid:t,auth:r,stsTokenManager:n}=e,i=__rest(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ProactiveRefresh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new UserMetadata(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){let t=await _logoutIfInvalidated(this,this.stsTokenManager.getToken(this.auth,e));return _assert(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return getIdTokenResult(this,e)}reload(){return reload(this)}_assign(e){this!==e&&(_assert(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let t=new UserImpl(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){_assert(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await _reloadWithoutSaving(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){let e=await this.getIdToken();return await _logoutIfInvalidated(this,deleteAccount(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,n,i,s,o,a,l,h;let c=null!==(r=t.displayName)&&void 0!==r?r:void 0,u=null!==(n=t.email)&&void 0!==n?n:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,p=null!==(s=t.photoURL)&&void 0!==s?s:void 0,f=null!==(o=t.tenantId)&&void 0!==o?o:void 0,_=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(l=t.createdAt)&&void 0!==l?l:void 0,g=null!==(h=t.lastLoginAt)&&void 0!==h?h:void 0,{uid:v,emailVerified:y,isAnonymous:C,providerData:w,stsTokenManager:b}=t;_assert(v&&b,e,"internal-error");let I=StsTokenManager.fromJSON(this.name,b);_assert("string"==typeof v,e,"internal-error"),assertStringOrUndefined(c,e.name),assertStringOrUndefined(u,e.name),_assert("boolean"==typeof y,e,"internal-error"),_assert("boolean"==typeof C,e,"internal-error"),assertStringOrUndefined(d,e.name),assertStringOrUndefined(p,e.name),assertStringOrUndefined(f,e.name),assertStringOrUndefined(_,e.name),assertStringOrUndefined(m,e.name),assertStringOrUndefined(g,e.name);let T=new UserImpl({uid:v,auth:e,email:u,emailVerified:y,displayName:c,isAnonymous:C,photoURL:p,phoneNumber:d,tenantId:f,stsTokenManager:I,createdAt:m,lastLoginAt:g});return w&&Array.isArray(w)&&(T.providerData=w.map(e=>Object.assign({},e))),_&&(T._redirectEventId=_),T}static async _fromIdTokenResponse(e,t,r=!1){let n=new StsTokenManager;n.updateFromServerResponse(t);let i=new UserImpl({uid:t.localId,auth:e,stsTokenManager:n,isAnonymous:r});return await _reloadWithoutSaving(i),i}};/**
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
 */let m=new Map;function _getInstance(e){e instanceof Function||debugFail("Expected a class definition");let t=m.get(e);return t?t instanceof e||debugFail("Instance stored in cache mismatched with class"):(t=new e,m.set(e,t)),t}/**
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
 */let InMemoryPersistence=class InMemoryPersistence{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}};/**
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
 */function _persistenceKeyName(e,t,r){return`firebase:${e}:${t}:${r}`}InMemoryPersistence.type="NONE";let PersistenceUserManager=class PersistenceUserManager{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;let{config:n,name:i}=this.auth;this.fullUserKey=_persistenceKeyName(this.userKey,n.apiKey,i),this.fullPersistenceKey=_persistenceKeyName("persistence",n.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);return e?UserImpl._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new PersistenceUserManager(_getInstance(InMemoryPersistence),e,r);let n=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e),i=n[0]||_getInstance(InMemoryPersistence),s=_persistenceKeyName(r,e.config.apiKey,e.name),o=null;for(let r of t)try{let t=await r._get(s);if(t){let n=UserImpl._fromJSON(e,t);r!==i&&(o=n),i=r;break}}catch(e){}let a=n.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&a.length&&(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(s)}catch(e){}}))),new PersistenceUserManager(i,e,r)}};/**
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
 */function _getBrowserName(e){let t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(_isIEMobile(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";{if(t.includes("edge/"))return"Edge";if(_isFirefox(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(_isBlackBerry(t))return"Blackberry";if(_isWebOS(t))return"Webos";if(_isSafari(t))return"Safari";if((t.includes("chrome/")||_isChromeIOS(t))&&!t.includes("edge/"))return"Chrome";if(_isAndroid(t))return"Android";let r=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);if((null==r?void 0:r.length)===2)return r[1]}return"Other"}function _isFirefox(e=(0,l.z$)()){return/firefox\//i.test(e)}function _isSafari(e=(0,l.z$)()){let t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function _isChromeIOS(e=(0,l.z$)()){return/crios\//i.test(e)}function _isIEMobile(e=(0,l.z$)()){return/iemobile/i.test(e)}function _isAndroid(e=(0,l.z$)()){return/android/i.test(e)}function _isBlackBerry(e=(0,l.z$)()){return/blackberry/i.test(e)}function _isWebOS(e=(0,l.z$)()){return/webos/i.test(e)}function _isIOS(e=(0,l.z$)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function _isMobileBrowser(e=(0,l.z$)()){return _isIOS(e)||_isAndroid(e)||_isWebOS(e)||_isBlackBerry(e)||/windows phone/i.test(e)||_isIEMobile(e)}/**
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
 */function _getClientVersion(e,t=[]){let r;switch(e){case"Browser":r=_getBrowserName((0,l.z$)());break;case"Worker":r=`${_getBrowserName((0,l.z$)())}-${e}`;break;default:r=e}let n=t.length?t.join(","):"FirebaseCore-web";return`${r}/JsCore/${h.Jn}/${n}`}/**
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
 */let AuthMiddlewareQueue=class AuthMiddlewareQueue{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let wrappedCallback=t=>new Promise((r,n)=>{try{let n=e(t);r(n)}catch(e){n(e)}});wrappedCallback.onAbort=t,this.queue.push(wrappedCallback);let r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let t=[];try{for(let r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(e){for(let e of(t.reverse(),t))try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}};/**
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
 */async function _getPasswordPolicy(e,t={}){return _performApiRequest(e,"GET","/v2/passwordPolicy",_addTidIfNecessary(e,t))}let PasswordPolicyImpl=class PasswordPolicyImpl{constructor(e){var t,r,n,i;let s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=s.minPasswordLength)&&void 0!==t?t:6,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),void 0!==s.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),void 0!==s.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),void 0!==s.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),void 0!==s.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(n=null===(r=e.allowedNonAlphanumericCharacters)||void 0===r?void 0:r.join(""))&&void 0!==n?n:"",this.forceUpgradeOnSignin=null!==(i=e.forceUpgradeOnSignin)&&void 0!==i&&i,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,n,i,s,o;let a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=null===(t=a.meetsMinPasswordLength)||void 0===t||t),a.isValid&&(a.isValid=null===(r=a.meetsMaxPasswordLength)||void 0===r||r),a.isValid&&(a.isValid=null===(n=a.containsLowercaseLetter)||void 0===n||n),a.isValid&&(a.isValid=null===(i=a.containsUppercaseLetter)||void 0===i||i),a.isValid&&(a.isValid=null===(s=a.containsNumericCharacter)||void 0===s||s),a.isValid&&(a.isValid=null===(o=a.containsNonAlphanumericCharacter)||void 0===o||o),a}validatePasswordLengthOptions(e,t){let r=this.customStrengthOptions.minPasswordLength,n=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),n&&(t.meetsMaxPasswordLength=e.length<=n)}validatePasswordCharacterOptions(e,t){let r;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let n=0;n<e.length;n++)r=e.charAt(n),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,n,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=n)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}};/**
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
 */let AuthImpl=class AuthImpl{constructor(e,t,r,n){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Subscription(this),this.idTokenSubscription=new Subscription(this),this.beforeStateQueue=new AuthMiddlewareQueue(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=d,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=_getInstance(t)),this._initializationPromise=this.queue(async()=>{var r,n;if(!this._deleted&&(this.persistenceManager=await PersistenceUserManager.create(this,e),!this._deleted)){if(null===(r=this._popupRedirectResolver)||void 0===r?void 0:r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(n=this.currentUser)||void 0===n?void 0:n.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(this.currentUser||e){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;let r=await this.assertedPersistence.getCurrentUser(),n=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==n?void 0:n._redirectEventId,o=await this.tryRedirectSignIn(e);(!r||r===s)&&(null==o?void 0:o.user)&&(n=o.user,i=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(n)}catch(e){n=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(e))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return(_assert(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId)?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await _reloadWithoutSaving(e)}catch(e){if((null==e?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;let e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){let t=e?(0,l.m9)(e):null;return t&&_assert(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&_assert(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(_getInstance(e))})}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();let t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=await _getPasswordPolicy(this),t=new PasswordPolicyImpl(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new l.LL("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{let r=this.onAuthStateChanged(()=>{r(),e()},t)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){let r=await this.getOrInitRedirectPersistenceManager(t);return null===e?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&_getInstance(e)||this._popupRedirectResolver;_assert(t,this,"argument-error"),this.redirectPersistenceManager=await PersistenceUserManager.create(this,[_getInstance(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return(this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e)?this._currentUser:(null===(r=this.redirectUser)||void 0===r?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let r=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,n){if(this._deleted)return()=>{};let i="function"==typeof t?t:t.next.bind(t),s=!1,o=this._isInitialized?Promise.resolve():this._initializationPromise;if(_assert(o,this,"internal-error"),o.then(()=>{s||i(this.currentUser)}),"function"==typeof t){let i=e.addObserver(t,r,n);return()=>{s=!0,i()}}{let r=e.addObserver(t);return()=>{s=!0,r()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _assert(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=_getClientVersion(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);let r=await (null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);let n=await this._getAppCheckToken();return n&&(t["X-Firebase-AppCheck"]=n),t}async _getAppCheckToken(){var e;let t=await (null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){p.logLevel<=c.in.WARN&&p.warn(`Auth (${h.Jn}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}};function _castAuth(e){return(0,l.m9)(e)}let Subscription=class Subscription{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,l.ne)(e=>this.observer=e)}get next(){return _assert(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}};function _loadJS(e){return new Promise((t,r)=>{var n,i;let s=document.createElement("script");s.setAttribute("src",e),s.onload=t,s.onerror=e=>{let t=_createError("internal-error");t.customData=e,r(t)},s.type="text/javascript",s.charset="UTF-8",(null!==(i=null===(n=document.getElementsByTagName("head"))||void 0===n?void 0:n[0])&&void 0!==i?i:document).appendChild(s)})}function _generateCallbackName(e){return`__${e}${Math.floor(1e6*Math.random())}`}let RecaptchaEnterpriseVerifier=class RecaptchaEnterpriseVerifier{constructor(e){this.type="recaptcha-enterprise",this.auth=_castAuth(e)}async verify(e="verify",t=!1){async function retrieveSiteKey(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise(async(t,r)=>{getRecaptchaConfig(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(n=>{if(void 0===n.recaptchaKey)r(Error("recaptcha Enterprise site key undefined"));else{let r=new RecaptchaConfig(n);return null==e.tenantId?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,t(r.siteKey)}}).catch(e=>{r(e)})})}function retrieveRecaptchaToken(t,r,n){let i=window.grecaptcha;isEnterprise(i)?i.enterprise.ready(()=>{i.enterprise.execute(t,{action:e}).then(e=>{r(e)}).catch(()=>{r("NO_RECAPTCHA")})}):n(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((e,r)=>{retrieveSiteKey(this.auth).then(n=>{if(!t&&isEnterprise(window.grecaptcha))retrieveRecaptchaToken(n,e,r);else{if("undefined"==typeof window){r(Error("RecaptchaVerifier is only supported in browser"));return}_loadJS("https://www.google.com/recaptcha/enterprise.js?render="+n).then(()=>{retrieveRecaptchaToken(n,e,r)}).catch(e=>{r(e)})}}).catch(e=>{r(e)})})}};async function injectRecaptchaFields(e,t,r,n=!1){let i;let s=new RecaptchaEnterpriseVerifier(e);try{i=await s.verify(r)}catch(e){i=await s.verify(r,!0)}let o=Object.assign({},t);return n?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function handleRecaptchaFlow(e,t,r,n){var i;if(null===(i=e._getRecaptchaConfig())||void 0===i||!i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER"))return n(e,t).catch(async i=>{if("auth/missing-recaptcha-token"!==i.code)return Promise.reject(i);{console.log(`${r} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);let i=await injectRecaptchaFields(e,t,r,"getOobCode"===r);return n(e,i)}});{let i=await injectRecaptchaFields(e,t,r,"getOobCode"===r);return n(e,i)}}function extractProtocol(e){let t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function parsePort(e){if(!e)return null;let t=Number(e);return isNaN(t)?null:t}/**
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
 */let AuthCredential=class AuthCredential{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return debugFail("not implemented")}_getIdTokenResponse(e){return debugFail("not implemented")}_linkToIdToken(e,t){return debugFail("not implemented")}_getReauthenticationResolver(e){return debugFail("not implemented")}};async function updateEmailPassword(e,t){return _performApiRequest(e,"POST","/v1/accounts:update",t)}/**
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
 */async function signInWithPassword(e,t){return _performSignInRequest(e,"POST","/v1/accounts:signInWithPassword",_addTidIfNecessary(e,t))}/**
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
 */async function signInWithEmailLink$1(e,t){return _performSignInRequest(e,"POST","/v1/accounts:signInWithEmailLink",_addTidIfNecessary(e,t))}async function signInWithEmailLinkForLinking(e,t){return _performSignInRequest(e,"POST","/v1/accounts:signInWithEmailLink",_addTidIfNecessary(e,t))}/**
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
 */let EmailAuthCredential=class EmailAuthCredential extends AuthCredential{constructor(e,t,r,n=null){super("password",r),this._email=e,this._password=t,this._tenantId=n}static _fromEmailAndPassword(e,t){return new EmailAuthCredential(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new EmailAuthCredential(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":let t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return handleRecaptchaFlow(e,t,"signInWithPassword",signInWithPassword);case"emailLink":return signInWithEmailLink$1(e,{email:this._email,oobCode:this._password});default:_fail(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return updateEmailPassword(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return signInWithEmailLinkForLinking(e,{idToken:t,email:this._email,oobCode:this._password});default:_fail(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}};/**
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
 */async function signInWithIdp(e,t){return _performSignInRequest(e,"POST","/v1/accounts:signInWithIdp",_addTidIfNecessary(e,t))}let OAuthCredential=class OAuthCredential extends AuthCredential{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let t=new OAuthCredential(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):_fail("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e,{providerId:r,signInMethod:n}=t,i=__rest(t,["providerId","signInMethod"]);if(!r||!n)return null;let s=new OAuthCredential(r,n);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){let t=this.buildRequest();return signInWithIdp(e,t)}_linkToIdToken(e,t){let r=this.buildRequest();return r.idToken=t,signInWithIdp(e,r)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,signInWithIdp(e,t)}buildRequest(){let e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=(0,l.xO)(t)}return e}};/**
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
 */async function sendPhoneVerificationCode(e,t){return _performApiRequest(e,"POST","/v1/accounts:sendVerificationCode",_addTidIfNecessary(e,t))}async function signInWithPhoneNumber$1(e,t){return _performSignInRequest(e,"POST","/v1/accounts:signInWithPhoneNumber",_addTidIfNecessary(e,t))}async function linkWithPhoneNumber$1(e,t){let r=await _performSignInRequest(e,"POST","/v1/accounts:signInWithPhoneNumber",_addTidIfNecessary(e,t));if(r.temporaryProof)throw _makeTaggedError(e,"account-exists-with-different-credential",r);return r}let g={USER_NOT_FOUND:"user-not-found"};async function verifyPhoneNumberForExisting(e,t){let r=Object.assign(Object.assign({},t),{operation:"REAUTH"});return _performSignInRequest(e,"POST","/v1/accounts:signInWithPhoneNumber",_addTidIfNecessary(e,r),g)}/**
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
 */let PhoneAuthCredential=class PhoneAuthCredential extends AuthCredential{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new PhoneAuthCredential({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new PhoneAuthCredential({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return signInWithPhoneNumber$1(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return linkWithPhoneNumber$1(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return verifyPhoneNumberForExisting(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:n}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:n}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));let{verificationId:t,verificationCode:r,phoneNumber:n,temporaryProof:i}=e;return r||t||n||i?new PhoneAuthCredential({verificationId:t,verificationCode:r,phoneNumber:n,temporaryProof:i}):null}};let ActionCodeURL=class ActionCodeURL{constructor(e){var t,r,n,i,s,o;let a=(0,l.zd)((0,l.pd)(e)),h=null!==(t=a.apiKey)&&void 0!==t?t:null,c=null!==(r=a.oobCode)&&void 0!==r?r:null,u=/**
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
 */function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(n=a.mode)&&void 0!==n?n:null);_assert(h&&c&&u,"argument-error"),this.apiKey=h,this.operation=u,this.code=c,this.continueUrl=null!==(i=a.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(e){let t=function(e){let t=(0,l.zd)((0,l.pd)(e)).link,r=t?(0,l.zd)((0,l.pd)(t)).deep_link_id:null,n=(0,l.zd)((0,l.pd)(e)).deep_link_id,i=n?(0,l.zd)((0,l.pd)(n)).link:null;return i||n||r||t||e}(e);try{return new ActionCodeURL(t)}catch(e){return null}}};/**
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
 */let EmailAuthProvider=class EmailAuthProvider{constructor(){this.providerId=EmailAuthProvider.PROVIDER_ID}static credential(e,t){return EmailAuthCredential._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let r=ActionCodeURL.parseLink(t);return _assert(r,"argument-error"),EmailAuthCredential._fromEmailAndCode(e,r.code,r.tenantId)}};EmailAuthProvider.PROVIDER_ID="password",EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD="password",EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */let FederatedAuthProvider=class FederatedAuthProvider{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}};/**
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
 */let BaseOAuthProvider=class BaseOAuthProvider extends FederatedAuthProvider{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}};/**
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
 */let FacebookAuthProvider=class FacebookAuthProvider extends BaseOAuthProvider{constructor(){super("facebook.com")}static credential(e){return OAuthCredential._fromParams({providerId:FacebookAuthProvider.PROVIDER_ID,signInMethod:FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return FacebookAuthProvider.credentialFromTaggedObject(e)}static credentialFromError(e){return FacebookAuthProvider.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return FacebookAuthProvider.credential(e.oauthAccessToken)}catch(e){return null}}};FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD="facebook.com",FacebookAuthProvider.PROVIDER_ID="facebook.com";/**
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
 */let GoogleAuthProvider=class GoogleAuthProvider extends BaseOAuthProvider{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return OAuthCredential._fromParams({providerId:GoogleAuthProvider.PROVIDER_ID,signInMethod:GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return GoogleAuthProvider.credentialFromTaggedObject(e)}static credentialFromError(e){return GoogleAuthProvider.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return GoogleAuthProvider.credential(t,r)}catch(e){return null}}};GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD="google.com",GoogleAuthProvider.PROVIDER_ID="google.com";/**
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
 */let GithubAuthProvider=class GithubAuthProvider extends BaseOAuthProvider{constructor(){super("github.com")}static credential(e){return OAuthCredential._fromParams({providerId:GithubAuthProvider.PROVIDER_ID,signInMethod:GithubAuthProvider.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return GithubAuthProvider.credentialFromTaggedObject(e)}static credentialFromError(e){return GithubAuthProvider.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return GithubAuthProvider.credential(e.oauthAccessToken)}catch(e){return null}}};GithubAuthProvider.GITHUB_SIGN_IN_METHOD="github.com",GithubAuthProvider.PROVIDER_ID="github.com";/**
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
 */let TwitterAuthProvider=class TwitterAuthProvider extends BaseOAuthProvider{constructor(){super("twitter.com")}static credential(e,t){return OAuthCredential._fromParams({providerId:TwitterAuthProvider.PROVIDER_ID,signInMethod:TwitterAuthProvider.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return TwitterAuthProvider.credentialFromTaggedObject(e)}static credentialFromError(e){return TwitterAuthProvider.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return TwitterAuthProvider.credential(t,r)}catch(e){return null}}};TwitterAuthProvider.TWITTER_SIGN_IN_METHOD="twitter.com",TwitterAuthProvider.PROVIDER_ID="twitter.com";/**
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
 */let UserCredentialImpl=class UserCredentialImpl{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,n=!1){let i=await UserImpl._fromIdTokenResponse(e,r,n),s=providerIdForResponse(r),o=new UserCredentialImpl({user:i,providerId:s,_tokenResponse:r,operationType:t});return o}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);let n=providerIdForResponse(r);return new UserCredentialImpl({user:e,providerId:n,_tokenResponse:r,operationType:t})}};function providerIdForResponse(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */let MultiFactorError=class MultiFactorError extends l.ZR{constructor(e,t,r,n){var i;super(t.code,t.message),this.operationType=r,this.user=n,Object.setPrototypeOf(this,MultiFactorError.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,n){return new MultiFactorError(e,t,r,n)}};function _processCredentialSavingMfaContextIfNecessary(e,t,r,n){let i="reauthenticate"===t?r._getReauthenticationResolver(e):r._getIdTokenResponse(e);return i.catch(r=>{if("auth/multi-factor-auth-required"===r.code)throw MultiFactorError._fromErrorAndOperation(e,r,t,n);throw r})}async function _link$1(e,t,r=!1){let n=await _logoutIfInvalidated(e,t._linkToIdToken(e.auth,await e.getIdToken()),r);return UserCredentialImpl._forOperation(e,"link",n)}/**
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
 */async function _reauthenticate(e,t,r=!1){let{auth:n}=e,i="reauthenticate";try{let s=await _logoutIfInvalidated(e,_processCredentialSavingMfaContextIfNecessary(n,i,t,e),r);_assert(s.idToken,n,"internal-error");let o=_parseToken(s.idToken);_assert(o,n,"internal-error");let{sub:a}=o;return _assert(e.uid===a,n,"user-mismatch"),UserCredentialImpl._forOperation(e,i,s)}catch(e){throw(null==e?void 0:e.code)==="auth/user-not-found"&&_fail(n,"user-mismatch"),e}}/**
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
 */async function _signInWithCredential(e,t,r=!1){let n="signIn",i=await _processCredentialSavingMfaContextIfNecessary(e,n,t),s=await UserCredentialImpl._fromIdTokenResponse(e,n,i);return r||await e._updateCurrentUser(s.user),s}new WeakMap;let v="__sak";/**
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
 */let BrowserPersistenceClass=class BrowserPersistenceClass{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{if(!this.storage)return Promise.resolve(!1);return this.storage.setItem(v,"1"),this.storage.removeItem(v),Promise.resolve(!0)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}};let BrowserLocalPersistence=class BrowserLocalPersistence extends BrowserPersistenceClass{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=/**
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
 */function(){let e=(0,l.z$)();return _isSafari(e)||_isIOS(e)}()&&function(){try{return!!(window&&window!==window.top)}catch(e){return!1}}(),this.fallbackToPolling=_isMobileBrowser(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let t of Object.keys(this.listeners)){let r=this.storage.getItem(t),n=this.localCache[t];r!==n&&e(t,n,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((e,t,r)=>{this.notifyListeners(e,r)});return}let r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){let n=this.storage.getItem(r);if(e.newValue!==n)null!==e.newValue?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}let triggerListeners=()=>{let e=this.storage.getItem(r);(t||this.localCache[r]!==e)&&this.notifyListeners(r,e)},n=this.storage.getItem(r);(0,l.w1)()&&10===document.documentMode&&n!==e.newValue&&e.newValue!==e.oldValue?setTimeout(triggerListeners,10):triggerListeners()}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let e of Array.from(r))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}};BrowserLocalPersistence.type="LOCAL";/**
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
 */let BrowserSessionPersistence=class BrowserSessionPersistence extends BrowserPersistenceClass{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}};BrowserSessionPersistence.type="SESSION";/**
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
 */let Receiver=class Receiver{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;let r=new Receiver(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let{eventId:t,eventType:r,data:n}=e.data,i=this.handlersMap[r];if(!(null==i?void 0:i.size))return;e.ports[0].postMessage({status:"ack",eventId:t,eventType:r});let s=Array.from(i).map(async t=>t(e.origin,n)),o=await Promise.all(s.map(async e=>{try{let t=await e;return{fulfilled:!0,value:t}}catch(e){return{fulfilled:!1,reason:e}}}));e.ports[0].postMessage({status:"done",eventId:t,eventType:r,response:o})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}};/**
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
 */function _generateEventId(e="",t=10){let r="";for(let e=0;e<t;e++)r+=Math.floor(10*Math.random());return e+r}Receiver.receivers=[];/**
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
 */let Sender=class Sender{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){let n,i;let s="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!s)throw Error("connection_unavailable");return new Promise((o,a)=>{let l=_generateEventId("",20);s.port1.start();let h=setTimeout(()=>{a(Error("unsupported_event"))},r);i={messageChannel:s,onMessage(e){if(e.data.eventId===l)switch(e.data.status){case"ack":clearTimeout(h),n=setTimeout(()=>{a(Error("timeout"))},3e3);break;case"done":clearTimeout(n),o(e.data.response);break;default:clearTimeout(h),clearTimeout(n),a(Error("invalid_response"))}}},this.handlers.add(i),s.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[s.port2])}).finally(()=>{i&&this.removeMessageHandler(i)})}};/**
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
 */function _window(){return window}/**
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
 */function _isWorker(){return void 0!==_window().WorkerGlobalScope&&"function"==typeof _window().importScripts}async function _getActiveServiceWorker(){if(!(null==navigator?void 0:navigator.serviceWorker))return null;try{let e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}/**
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
 */let y="firebaseLocalStorageDb",C="firebaseLocalStorage",w="fbase_key";let DBPromise=class DBPromise{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}};function getObjectStore(e,t){return e.transaction([C],t?"readwrite":"readonly").objectStore(C)}function _openDatabase(){let e=indexedDB.open(y,1);return new Promise((t,r)=>{e.addEventListener("error",()=>{r(e.error)}),e.addEventListener("upgradeneeded",()=>{let t=e.result;try{t.createObjectStore(C,{keyPath:w})}catch(e){r(e)}}),e.addEventListener("success",async()=>{let r=e.result;r.objectStoreNames.contains(C)?t(r):(r.close(),await function(){let e=indexedDB.deleteDatabase(y);return new DBPromise(e).toPromise()}(),t(await _openDatabase()))})})}async function _putObject(e,t,r){let n=getObjectStore(e,!0).put({[w]:t,value:r});return new DBPromise(n).toPromise()}async function getObject(e,t){let r=getObjectStore(e,!1).get(t),n=await new DBPromise(r).toPromise();return void 0===n?null:n.value}function _deleteObject(e,t){let r=getObjectStore(e,!0).delete(t);return new DBPromise(r).toPromise()}let IndexedDBLocalPersistence=class IndexedDBLocalPersistence{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await _openDatabase()),this.db}async _withRetries(e){let t=0;for(;;)try{let t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return _isWorker()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Receiver._getInstance(_isWorker()?self:null),this.receiver._subscribe("keyChanged",async(e,t)=>{let r=await this._poll();return{keyProcessed:r.includes(t.key)}}),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await _getActiveServiceWorker(),!this.activeServiceWorker)return;this.sender=new Sender(this.activeServiceWorker);let r=await this.sender._send("ping",{},800);r&&(null===(e=r[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=r[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null==navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await _openDatabase();return await _putObject(e,v,"1"),await _deleteObject(e,v),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>_putObject(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(t=>getObject(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>_deleteObject(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(e=>{let t=getObjectStore(e,!1).getAll();return new DBPromise(t).toPromise()});if(!e||0!==this.pendingWrites)return[];let t=[],r=new Set;for(let{fbase_key:n,value:i}of e)r.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(i)&&(this.notifyListeners(n,i),t.push(n));for(let e of Object.keys(this.localCache))this.localCache[e]&&!r.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let e of Array.from(r))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}};async function _verifyPhoneNumber(e,t,r){var n,i,s;let o=await r.verify();try{let a;if(_assert("string"==typeof o,e,"argument-error"),_assert("recaptcha"===r.type,e,"argument-error"),a="string"==typeof t?{phoneNumber:t}:t,"session"in a){let t=a.session;if("phoneNumber"in a){_assert("enroll"===t.type,e,"internal-error");let r=await (i={idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:a.phoneNumber,recaptchaToken:o}},_performApiRequest(e,"POST","/v2/accounts/mfaEnrollment:start",_addTidIfNecessary(e,i)));return r.phoneSessionInfo.sessionInfo}{_assert("signin"===t.type,e,"internal-error");let r=(null===(n=a.multiFactorHint)||void 0===n?void 0:n.uid)||a.multiFactorUid;_assert(r,e,"missing-multi-factor-info");let i=await (s={mfaPendingCredential:t.credential,mfaEnrollmentId:r,phoneSignInInfo:{recaptchaToken:o}},_performApiRequest(e,"POST","/v2/accounts/mfaSignIn:start",_addTidIfNecessary(e,s)));return i.phoneResponseInfo.sessionInfo}}{let{sessionInfo:t}=await sendPhoneVerificationCode(e,{phoneNumber:a.phoneNumber,recaptchaToken:o});return t}}finally{r._reset()}}IndexedDBLocalPersistence.type="LOCAL",_generateCallbackName("rcb"),new Delay(3e4,6e4);/**
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
 */let PhoneAuthProvider=class PhoneAuthProvider{constructor(e){this.providerId=PhoneAuthProvider.PROVIDER_ID,this.auth=_castAuth(e)}verifyPhoneNumber(e,t){return _verifyPhoneNumber(this.auth,e,(0,l.m9)(t))}static credential(e,t){return PhoneAuthCredential._fromVerification(e,t)}static credentialFromResult(e){return PhoneAuthProvider.credentialFromTaggedObject(e)}static credentialFromError(e){return PhoneAuthProvider.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:r}=e;return t&&r?PhoneAuthCredential._fromTokenResponse(t,r):null}};PhoneAuthProvider.PROVIDER_ID="phone",PhoneAuthProvider.PHONE_SIGN_IN_METHOD="phone";/**
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
 */let IdpCredential=class IdpCredential extends AuthCredential{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return signInWithIdp(e,this._buildIdpRequest())}_linkToIdToken(e,t){return signInWithIdp(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return signInWithIdp(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}};function _signIn(e){return _signInWithCredential(e.auth,new IdpCredential(e),e.bypassAuthState)}function _reauth(e){let{auth:t,user:r}=e;return _assert(r,t,"internal-error"),_reauthenticate(r,new IdpCredential(e),e.bypassAuthState)}async function _link(e){let{auth:t,user:r}=e;return _assert(r,t,"internal-error"),_link$1(r,new IdpCredential(e),e.bypassAuthState)}/**
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
 */let AbstractPopupRedirectOperation=class AbstractPopupRedirectOperation{constructor(e,t,r,n,i=!1){this.auth=e,this.resolver=r,this.user=n,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:r,postBody:n,tenantId:i,error:s,type:o}=e;if(s){this.reject(s);return}let a={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return _signIn;case"linkViaPopup":case"linkViaRedirect":return _link;case"reauthViaPopup":case"reauthViaRedirect":return _reauth;default:_fail(this.auth,"internal-error")}}resolve(e){this.pendingPromise||debugFail("Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){this.pendingPromise||debugFail("Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}};/**
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
 */let b=new Delay(2e3,1e4);let PopupOperation=class PopupOperation extends AbstractPopupRedirectOperation{constructor(e,t,r,n,i){super(e,t,n,i),this.provider=r,this.authWindow=null,this.pollId=null,PopupOperation.currentPopupAction&&PopupOperation.currentPopupAction.cancel(),PopupOperation.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return _assert(e,this.auth,"internal-error"),e}async onExecution(){1===this.filter.length||debugFail("Popup operations only handle one event");let e=_generateEventId();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(_createError(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(_createError(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,PopupOperation.currentPopupAction=null}pollUserCancellation(){let poll=()=>{var e,t;if(null===(t=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===t?void 0:t.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_createError(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(poll,b.get())};poll()}};PopupOperation.currentPopupAction=null;let I=new Map;let RedirectAction=class RedirectAction extends AbstractPopupRedirectOperation{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=I.get(this.auth._key());if(!e){try{let t=await _getAndClearPendingRedirectStatus(this.resolver,this.auth),r=t?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}I.set(this.auth._key(),e)}return this.bypassAuthState||I.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"===e.type){this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}};async function _getAndClearPendingRedirectStatus(e,t){let r=_persistenceKeyName("pendingRedirect",t.config.apiKey,t.name),n=_getInstance(e._redirectPersistence);if(!await n._isAvailable())return!1;let i=await n._get(r)==="true";return await n._remove(r),i}function _overrideRedirectResult(e,t){I.set(e._key(),t)}async function _getRedirectResult(e,t,r=!1){let n=_castAuth(e),i=t?_getInstance(t):(_assert(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver),s=new RedirectAction(n,i,r),o=await s.execute();return o&&!r&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,t)),o}let AuthEventManager=class AuthEventManager{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return isNullRedirectEvent(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!isNullRedirectEvent(e)){let n=(null===(r=e.error.code)||void 0===r?void 0:r.split("auth/")[1])||"internal-error";t.onError(_createError(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let r=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(eventUid(e))}saveEventToCache(e){this.cachedEventUids.add(eventUid(e)),this.lastProcessedEventTime=Date.now()}};function eventUid(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function isNullRedirectEvent({type:e,error:t}){return"unknown"===e&&(null==t?void 0:t.code)==="auth/no-auth-event"}/**
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
 */async function _getProjectConfig(e,t={}){return _performApiRequest(e,"GET","/v1/projects",t)}/**
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
 */let T=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,E=/^https?/;async function _validateOrigin(e){if(e.config.emulator)return;let{authorizedDomains:t}=await _getProjectConfig(e);for(let e of t)try{if(function(e){let t=_getCurrentUrl(),{protocol:r,hostname:n}=new URL(t);if(e.startsWith("chrome-extension://")){let i=new URL(e);return""===i.hostname&&""===n?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&i.hostname===n}if(!E.test(r))return!1;if(T.test(e))return n===e;let i=e.replace(/\./g,"\\."),s=RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(n)}(e))return}catch(e){}_fail(e,"unauthorized-domain")}/**
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
 */let S=new Delay(3e4,6e4);function resetUnloadedGapiModules(){let e=_window().___jsl;if(null==e?void 0:e.H){for(let t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}}let P=null,R=new Delay(5e3,15e3),k={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},N=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);async function _openIframe(e){let t=await (P=P||new Promise((t,r)=>{var n,i,s;function loadGapiIframe(){resetUnloadedGapiModules(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{resetUnloadedGapiModules(),r(_createError(e,"network-request-failed"))},timeout:S.get()})}if(null===(i=null===(n=_window().gapi)||void 0===n?void 0:n.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else if(null===(s=_window().gapi)||void 0===s?void 0:s.load)loadGapiIframe();else{let t=_generateCallbackName("iframefcb");return _window()[t]=()=>{gapi.load?loadGapiIframe():r(_createError(e,"network-request-failed"))},_loadJS(`https://apis.google.com/js/api.js?onload=${t}`).catch(e=>r(e))}}).catch(e=>{throw P=null,e})),r=_window().gapi;return _assert(r,e,"internal-error"),t.open({where:document.body,url:function(e){let t=e.config;_assert(t.authDomain,e,"auth-domain-config-required");let r=t.emulator?_emulatorUrl(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,n={apiKey:t.apiKey,appName:e.name,v:h.Jn},i=N.get(e.config.apiHost);i&&(n.eid=i);let s=e._getFrameworks();return s.length&&(n.fw=s.join(",")),`${r}?${(0,l.xO)(n).slice(1)}`}(e),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:k,dontclear:!0},t=>new Promise(async(r,n)=>{await t.restyle({setHideOnLeave:!1});let i=_createError(e,"network-request-failed"),s=_window().setTimeout(()=>{n(i)},R.get());function clearTimerAndResolve(){_window().clearTimeout(s),r(t)}t.ping(clearTimerAndResolve).then(clearTimerAndResolve,()=>{n(i)})}))}/**
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
 */let A={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};let AuthPopup=class AuthPopup{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}};let O=encodeURIComponent("fac");async function _getRedirectUrl(e,t,r,n,i,s){_assert(e.config.authDomain,e,"auth-domain-config-required"),_assert(e.config.apiKey,e,"invalid-api-key");let o={apiKey:e.config.apiKey,appName:e.name,authType:r,redirectUrl:n,v:h.Jn,eventId:i};if(t instanceof FederatedAuthProvider)for(let[r,n]of(t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",(0,l.xb)(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters())),Object.entries(s||{})))o[r]=n;if(t instanceof BaseOAuthProvider){let e=t.getScopes().filter(e=>""!==e);e.length>0&&(o.scopes=e.join(","))}for(let t of(e.tenantId&&(o.tid=e.tenantId),Object.keys(o)))void 0===o[t]&&delete o[t];let a=await e._getAppCheckToken(),c=a?`#${O}=${encodeURIComponent(a)}`:"";return`${function({config:e}){return e.emulator?_emulatorUrl(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}(e)}?${(0,l.xO)(o).slice(1)}${c}`}/**
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
 */let D="webStorageSupport",x=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=BrowserSessionPersistence,this._completeRedirectFn=_getRedirectResult,this._overrideRedirectResult=_overrideRedirectResult}async _openPopup(e,t,r,n){var i;(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager)||debugFail("_initialize() not called before _openPopup()");let s=await _getRedirectUrl(e,t,r,_getCurrentUrl(),n);return function(e,t,r,n=500,i=600){let s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString(),a="",h=Object.assign(Object.assign({},A),{width:n.toString(),height:i.toString(),top:s,left:o}),c=(0,l.z$)().toLowerCase();r&&(a=_isChromeIOS(c)?"_blank":r),_isFirefox(c)&&(t=t||"http://localhost",h.scrollbars="yes");let u=Object.entries(h).reduce((e,[t,r])=>`${e}${t}=${r},`,"");if(function(e=(0,l.z$)()){var t;return _isIOS(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==a)return function(e,t){let r=document.createElement("a");r.href=e,r.target=t;let n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}(t||"",a),new AuthPopup(null);let d=window.open(t||"",a,u);_assert(d,e,"popup-blocked");try{d.focus()}catch(e){}return new AuthPopup(d)}(e,s,_generateEventId())}async _openRedirect(e,t,r,n){await this._originValidation(e);let i=await _getRedirectUrl(e,t,r,_getCurrentUrl(),n);return _window().location.href=i,new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){let{manager:e,promise:r}=this.eventManagers[t];return e?Promise.resolve(e):(r||debugFail("If manager is not set, promise should be"),r)}let r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){let t=await _openIframe(e),r=new AuthEventManager(e);return t.register("authEvent",t=>{_assert(null==t?void 0:t.authEvent,e,"invalid-auth-event");let n=r.onEvent(t.authEvent);return{status:n?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){let r=this.iframes[e._key()];r.send(D,{type:D},r=>{var n;let i=null===(n=null==r?void 0:r[0])||void 0===n?void 0:n[D];void 0!==i&&t(!!i),_fail(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=_validateOrigin(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return _isMobileBrowser()||_isSafari()||_isIOS()}};let MultiFactorAssertionImpl=class MultiFactorAssertionImpl{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return debugFail("unexpected MultiFactorSessionType")}}};let PhoneMultiFactorAssertionImpl=class PhoneMultiFactorAssertionImpl extends MultiFactorAssertionImpl{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new PhoneMultiFactorAssertionImpl(e)}_finalizeEnroll(e,t,r){return _performApiRequest(e,"POST","/v2/accounts/mfaEnrollment:finalize",_addTidIfNecessary(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}_finalizeSignIn(e,t){return _performApiRequest(e,"POST","/v2/accounts/mfaSignIn:finalize",_addTidIfNecessary(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}};let TotpMultiFactorAssertionImpl=class TotpMultiFactorAssertionImpl extends MultiFactorAssertionImpl{constructor(e,t,r){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=r}static _fromSecret(e,t){return new TotpMultiFactorAssertionImpl(t,void 0,e)}static _fromEnrollmentId(e,t){return new TotpMultiFactorAssertionImpl(t,e)}async _finalizeEnroll(e,t,r){return _assert(void 0!==this.secret,e,"argument-error"),_performApiRequest(e,"POST","/v2/accounts/mfaEnrollment:finalize",_addTidIfNecessary(e,{idToken:t,displayName:r,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)}))}async _finalizeSignIn(e,t){_assert(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");let r={verificationCode:this.otp};return _performApiRequest(e,"POST","/v2/accounts/mfaSignIn:finalize",_addTidIfNecessary(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:r}))}};let TotpSecret=class TotpSecret{constructor(e,t,r,n,i,s,o){this.sessionInfo=s,this.auth=o,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=r,this.codeIntervalSeconds=n,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(e,t){return new TotpSecret(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var r;let n=!1;return(_isEmptyString(e)||_isEmptyString(t))&&(n=!0),n&&(_isEmptyString(e)&&(e=(null===(r=this.auth.currentUser)||void 0===r?void 0:r.email)||"unknownuser"),_isEmptyString(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}};function _isEmptyString(e){return void 0===e||(null==e?void 0:e.length)===0}var L="@firebase/auth",F="1.3.2";/**
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
 */let AuthInterop=class AuthInterop{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;let t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){_assert(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}};let M=(0,l.Pz)("authIdTokenMaxAge")||300,U=null,mintCookieFactory=e=>async t=>{let r=t&&await t.getIdTokenResult(),n=r&&(new Date().getTime()-Date.parse(r.issuedAtTime))/1e3;if(n&&n>M)return;let i=null==r?void 0:r.token;U!==i&&(U=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function getAuth(e=(0,h.Mq)()){let t=(0,h.qX)(e,"auth");if(t.isInitialized())return t.getImmediate();let r=/**
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
 */function(e,t){let r=(0,h.qX)(e,"auth");if(r.isInitialized()){let e=r.getImmediate(),n=r.getOptions();if((0,l.vZ)(n,null!=t?t:{}))return e;_fail(e,"already-initialized")}let n=r.initialize({options:t});return n}(e,{popupRedirectResolver:x,persistence:[IndexedDBLocalPersistence,BrowserLocalPersistence,BrowserSessionPersistence]}),n=(0,l.Pz)("authTokenSyncURL");if(n){let e=mintCookieFactory(n);(0,l.m9)(r).beforeAuthStateChanged(e,()=>e(r.currentUser)),(0,l.m9)(r).onIdTokenChanged(t=>e(t),void 0,void 0)}let i=(0,l.q4)("auth");return i&&function(e,t,r){let n=_castAuth(e);_assert(n._canInitEmulator,n,"emulator-config-failed"),_assert(/^https?:\/\//.test(t),n,"invalid-emulator-scheme");let i=!!(null==r?void 0:r.disableWarnings),s=extractProtocol(t),{host:o,port:a}=function(e){let t=extractProtocol(e),r=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!r)return{host:"",port:null};let n=r[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){let e=i[1];return{host:e,port:parsePort(n.substr(e.length+1))}}{let[e,t]=n.split(":");return{host:e,port:parsePort(t)}}}(t),l=null===a?"":`:${a}`;n.config.emulator={url:`${s}//${o}${l}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function attachBanner(){let e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",attachBanner):attachBanner())}()}(r,`http://${i}`),r}function Navbar(){let[e,t]=(0,s.useState)(null);return(0,s.useEffect)(()=>{let e=getAuth();t(e.currentUser)},[]),(0,i.jsxs)("nav",{className:"flex justify-between items-center bg-blue-500 p-4 text-white",children:[(0,i.jsx)(a(),{href:"/",className:"text-2xl font-bold",children:"FalconShop"}),(0,i.jsx)("div",{className:"space-x-4",children:e?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a(),{href:"/profile",children:"Profile"}),(0,i.jsx)("button",{onClick:()=>getAuth().signOut(),children:"Logout"})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a(),{href:"/profile",children:"Login"}),(0,i.jsx)(a(),{href:"/components/Auth",children:"Sign Up"})]})})]})}n="Browser",(0,h.Xd)(new u.wA("auth",(e,{options:t})=>{let r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;_assert(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});let l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_getClientVersion(n)},h=new AuthImpl(r,i,s,l);return function(e,t){let r=(null==t?void 0:t.persistence)||[],n=(Array.isArray(r)?r:[r]).map(_getInstance);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(n,null==t?void 0:t.popupRedirectResolver)}(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{let n=e.getProvider("auth-internal");n.initialize()})),(0,h.Xd)(new u.wA("auth-internal",e=>{let t=_castAuth(e.getProvider("auth").getImmediate());return new AuthInterop(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),(0,h.KN)(L,F,/**
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
 */function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(n)),(0,h.KN)(L,F,"esm2017"),r(3050);var W=r(9008),q=r.n(W),_app=function(e){let{Component:t,pageProps:r}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(q(),{children:(0,i.jsx)("link",{rel:"icon",href:"../public/favicon.ico"})}),(0,i.jsx)(Navbar,{}),(0,i.jsx)(t,{...r})]})}},9427:function(){},7663:function(e){!function(){var t={229:function(e){var t,r,n,i=e.exports={};function defaultSetTimout(){throw Error("setTimeout has not been defined")}function defaultClearTimeout(){throw Error("clearTimeout has not been defined")}function runTimeout(e){if(t===setTimeout)return setTimeout(e,0);if((t===defaultSetTimout||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:defaultSetTimout}catch(e){t=defaultSetTimout}try{r="function"==typeof clearTimeout?clearTimeout:defaultClearTimeout}catch(e){r=defaultClearTimeout}}();var s=[],o=!1,a=-1;function cleanUpNextTick(){o&&n&&(o=!1,n.length?s=n.concat(s):a=-1,s.length&&drainQueue())}function drainQueue(){if(!o){var e=runTimeout(cleanUpNextTick);o=!0;for(var t=s.length;t;){for(n=s,s=[];++a<t;)n&&n[a].run();a=-1,t=s.length}n=null,o=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===defaultClearTimeout||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function Item(e,t){this.fun=e,this.array=t}function noop(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];s.push(new Item(e,t)),1!==s.length||o||runTimeout(drainQueue)},Item.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=noop,i.addListener=noop,i.once=noop,i.off=noop,i.removeListener=noop,i.removeAllListeners=noop,i.emit=noop,i.prependListener=noop,i.prependOnceListener=noop,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},r={};function __nccwpck_require__(e){var n=r[e];if(void 0!==n)return n.exports;var i=r[e]={exports:{}},s=!0;try{t[e](i,i.exports,__nccwpck_require__),s=!1}finally{s&&delete r[e]}return i.exports}__nccwpck_require__.ab="//";var n=__nccwpck_require__(229);e.exports=n}()},9008:function(e,t,r){e.exports=r(9201)},1664:function(e,t,r){e.exports=r(5170)},5816:function(e,t,r){"use strict";let n,i;r.d(t,{Jn:function(){return S},qX:function(){return _getProvider},Xd:function(){return _registerComponent},Mq:function(){return getApp},ZF:function(){return initializeApp},KN:function(){return registerVersion}});var s,o=r(8463),a=r(3333),l=r(4444);let instanceOfAny=(e,t)=>t.some(t=>e instanceof t),h=new WeakMap,c=new WeakMap,u=new WeakMap,d=new WeakMap,p=new WeakMap,f={get(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return c.get(e);if("objectStoreNames"===t)return e.objectStoreNames||u.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return wrap_idb_value_wrap(e[t])},set:(e,t,r)=>(e[t]=r,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function wrap_idb_value_wrap(e){var t;if(e instanceof IDBRequest)return function(e){let t=new Promise((t,r)=>{let unlisten=()=>{e.removeEventListener("success",success),e.removeEventListener("error",error)},success=()=>{t(wrap_idb_value_wrap(e.result)),unlisten()},error=()=>{r(e.error),unlisten()};e.addEventListener("success",success),e.addEventListener("error",error)});return t.then(t=>{t instanceof IDBCursor&&h.set(t,e)}).catch(()=>{}),p.set(t,e),t}(e);if(d.has(e))return d.get(e);let r="function"==typeof(t=e)?t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(i||(i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(unwrap(this),e),wrap_idb_value_wrap(h.get(this))}:function(...e){return wrap_idb_value_wrap(t.apply(unwrap(this),e))}:function(e,...r){let n=t.call(unwrap(this),e,...r);return u.set(n,e.sort?e.sort():[e]),wrap_idb_value_wrap(n)}:(t instanceof IDBTransaction&&function(e){if(c.has(e))return;let t=new Promise((t,r)=>{let unlisten=()=>{e.removeEventListener("complete",complete),e.removeEventListener("error",error),e.removeEventListener("abort",error)},complete=()=>{t(),unlisten()},error=()=>{r(e.error||new DOMException("AbortError","AbortError")),unlisten()};e.addEventListener("complete",complete),e.addEventListener("error",error),e.addEventListener("abort",error)});c.set(e,t)}(t),instanceOfAny(t,n||(n=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(t,f):t;return r!==e&&(d.set(e,r),p.set(r,e)),r}let unwrap=e=>p.get(e),_=["get","getKey","getAll","getAllKeys","count"],m=["put","add","delete","clear"],g=new Map;function getMethod(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(g.get(t))return g.get(t);let r=t.replace(/FromIndex$/,""),n=t!==r,i=m.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(i||_.includes(r)))return;let method=async function(e,...t){let s=this.transaction(e,i?"readwrite":"readonly"),o=s.store;return n&&(o=o.index(t.shift())),(await Promise.all([o[r](...t),i&&s.done]))[0]};return g.set(t,method),method}f={...s=f,get:(e,t,r)=>getMethod(e,t)||s.get(e,t,r),has:(e,t)=>!!getMethod(e,t)||s.has(e,t)};/**
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
 */let PlatformLoggerServiceImpl=class PlatformLoggerServiceImpl{constructor(e){this.container=e}getPlatformInfoString(){let e=this.container.getProviders();return e.map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}};let v="@firebase/app",y="0.9.22",C=new a.Yd("@firebase/app"),w="[DEFAULT]",b={[v]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},I=new Map,T=new Map;function _registerComponent(e){let t=e.name;if(T.has(t))return C.debug(`There were multiple attempts to register component ${t}.`),!1;for(let r of(T.set(t,e),I.values()))!function(e,t){try{e.container.addComponent(t)}catch(r){C.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,r)}}(r,e);return!0}function _getProvider(e,t){let r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}let E=new l.LL("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});/**
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
 */let FirebaseAppImpl=class FirebaseAppImpl{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new o.wA("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw E.create("app-deleted",{appName:this._name})}};/**
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
 */let S="10.5.2";function initializeApp(e,t={}){let r=e;if("object"!=typeof t){let e=t;t={name:e}}let n=Object.assign({name:w,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!=typeof i||!i)throw E.create("bad-app-name",{appName:String(i)});if(r||(r=(0,l.aH)()),!r)throw E.create("no-options");let s=I.get(i);if(s){if((0,l.vZ)(r,s.options)&&(0,l.vZ)(n,s.config))return s;throw E.create("duplicate-app",{appName:i})}let a=new o.H0(i);for(let e of T.values())a.addComponent(e);let h=new FirebaseAppImpl(r,n,a);return I.set(i,h),h}function getApp(e=w){let t=I.get(e);if(!t&&e===w&&(0,l.aH)())return initializeApp();if(!t)throw E.create("no-app",{appName:e});return t}function registerVersion(e,t,r){var n;let i=null!==(n=b[e])&&void 0!==n?n:e;r&&(i+=`-${r}`);let s=i.match(/\s|\//),a=t.match(/\s|\//);if(s||a){let e=[`Unable to register library "${i}" with version "${t}":`];s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),C.warn(e.join(" "));return}_registerComponent(new o.wA(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}let P="firebase-heartbeat-store",R=null;function getDbPromise(){return R||(R=(function(e,t,{blocked:r,upgrade:n,blocking:i,terminated:s}={}){let o=indexedDB.open(e,1),a=wrap_idb_value_wrap(o);return n&&o.addEventListener("upgradeneeded",e=>{n(wrap_idb_value_wrap(o.result),e.oldVersion,e.newVersion,wrap_idb_value_wrap(o.transaction),e)}),r&&o.addEventListener("blocked",e=>r(e.oldVersion,e.newVersion,e)),a.then(e=>{s&&e.addEventListener("close",()=>s()),i&&e.addEventListener("versionchange",e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),a})("firebase-heartbeat-database",0,{upgrade:(e,t)=>{0===t&&e.createObjectStore(P)}}).catch(e=>{throw E.create("idb-open",{originalErrorMessage:e.message})})),R}async function readHeartbeatsFromIndexedDB(e){try{let t=await getDbPromise(),r=await t.transaction(P).objectStore(P).get(computeKey(e));return r}catch(e){if(e instanceof l.ZR)C.warn(e.message);else{let t=E.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});C.warn(t.message)}}}async function writeHeartbeatsToIndexedDB(e,t){try{let r=await getDbPromise(),n=r.transaction(P,"readwrite"),i=n.objectStore(P);await i.put(t,computeKey(e)),await n.done}catch(e){if(e instanceof l.ZR)C.warn(e.message);else{let t=E.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});C.warn(t.message)}}}function computeKey(e){return`${e.name}!${e.options.appId}`}let HeartbeatServiceImpl=class HeartbeatServiceImpl{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new HeartbeatStorageImpl(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){let e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),r=getUTCDateString();return(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(e=>e.date===r))?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf(),r=Date.now();return r-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";let e=getUTCDateString(),{heartbeatsToSend:t,unsentEntries:r}=function(e,t=1024){let r=[],n=e.slice();for(let i of e){let e=r.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),countBytes(r)>t){e.dates.pop();break}}else if(r.push({agent:i.agent,dates:[i.date]}),countBytes(r)>t){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}(this._heartbeatsCache.heartbeats),n=(0,l.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n}};function getUTCDateString(){let e=new Date;return e.toISOString().substring(0,10)}let HeartbeatStorageImpl=class HeartbeatStorageImpl{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,l.hl)()&&(0,l.eu)().then(()=>!0).catch(()=>!1)}async read(){let e=await this._canUseIndexedDBPromise;if(!e)return{heartbeats:[]};{let e=await readHeartbeatsFromIndexedDB(this.app);return e||{heartbeats:[]}}}async overwrite(e){var t;let r=await this._canUseIndexedDBPromise;if(r){let r=await this.read();return writeHeartbeatsToIndexedDB(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;let r=await this._canUseIndexedDBPromise;if(r){let r=await this.read();return writeHeartbeatsToIndexedDB(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}}};function countBytes(e){return(0,l.L)(JSON.stringify({version:2,heartbeats:e})).length}_registerComponent(new o.wA("platform-logger",e=>new PlatformLoggerServiceImpl(e),"PRIVATE")),_registerComponent(new o.wA("heartbeat",e=>new HeartbeatServiceImpl(e),"PRIVATE")),registerVersion(v,y,""),registerVersion(v,y,"esm2017"),registerVersion("fire-js","")},8463:function(e,t,r){"use strict";r.d(t,{H0:function(){return ComponentContainer},wA:function(){return Component}});var n=r(4444);let Component=class Component{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};/**
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
 */let i="[DEFAULT]";/**
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
 */let Provider=class Provider{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new n.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let r=this.getOrInitializeService({instanceIdentifier:t});r&&e.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let r=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(e){if(n)return null;throw e}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:i})}catch(e){}for(let[e,t]of this.instancesDeferred.entries()){let r=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:r});t.resolve(e)}catch(e){}}}}clearInstance(e=i){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=i){return this.instances.has(e)}getOptions(e=i){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let n=this.getOrInitializeService({instanceIdentifier:r,options:t});for(let[e,t]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(e);r===i&&t.resolve(n)}return n}onInit(e,t){var r;let n=this.normalizeInstanceIdentifier(t),i=null!==(r=this.onInitCallbacks.get(n))&&void 0!==r?r:new Set;i.add(e),this.onInitCallbacks.set(n,i);let s=this.instances.get(n);return s&&e(s,n),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){let r=this.onInitCallbacks.get(t);if(r)for(let n of r)try{n(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:e===i?void 0:e,options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch(e){}return r||null}normalizeInstanceIdentifier(e=i){return this.component?this.component.multipleInstances?e:i:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}};/**
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
 */let ComponentContainer=class ComponentContainer{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){let t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new Provider(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},3333:function(e,t,r){"use strict";var n,i;r.d(t,{Yd:function(){return Logger},in:function(){return n}});/**
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
 */let s=[];(i=n||(n={}))[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT";let o={debug:n.DEBUG,verbose:n.VERBOSE,info:n.INFO,warn:n.WARN,error:n.ERROR,silent:n.SILENT},a=n.INFO,l={[n.DEBUG]:"log",[n.VERBOSE]:"log",[n.INFO]:"info",[n.WARN]:"warn",[n.ERROR]:"error"},defaultLogHandler=(e,t,...r)=>{if(t<e.logLevel)return;let n=new Date().toISOString(),i=l[t];if(i)console[i](`[${n}]  ${e.name}:`,...r);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};let Logger=class Logger{constructor(e){this.name=e,this._logLevel=a,this._logHandler=defaultLogHandler,this._userLogHandler=null,s.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in n))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,n.DEBUG,...e),this._logHandler(this,n.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,n.VERBOSE,...e),this._logHandler(this,n.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,n.INFO,...e),this._logHandler(this,n.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,n.WARN,...e),this._logHandler(this,n.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,n.ERROR,...e),this._logHandler(this,n.ERROR,...e)}}},9355:function(e,t,r){"use strict";let n,i,s,o,a,l,h,c,u,d,p;r.d(t,{N8:function(){return getDatabase},jM:function(){return onValue},VF:function(){return push},iH:function(){return ref},t8:function(){return set}});var f,_,m=r(5816),g=r(8463),v=r(4444),y=r(3333),C=r(3454);let w="@firebase/database",b="1.0.1",I="";/**
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
 */let DOMStorageWrapper=class DOMStorageWrapper{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),(0,v.Wl)(t))}get(e){let t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:(0,v.cI)(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}};/**
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
 */let MemoryStorage=class MemoryStorage{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return(0,v.r3)(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}};/**
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
 */let createStoragefor=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){let t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new DOMStorageWrapper(t)}}catch(e){}return new MemoryStorage},T=createStoragefor("localStorage"),E=createStoragefor("sessionStorage"),S=new y.Yd("@firebase/database"),P=(p=1,function(){return p++}),sha1=function(e){let t=(0,v.dS)(e),r=new v.gQ;r.update(t);let n=r.digest();return v.US.encodeByteArray(n)},buildLogMessage_=function(...e){let t="";for(let r=0;r<e.length;r++){let n=e[r];Array.isArray(n)||n&&"object"==typeof n&&"number"==typeof n.length?t+=buildLogMessage_.apply(null,n):"object"==typeof n?t+=(0,v.Wl)(n):t+=n,t+=" "}return t},R=null,k=!0,enableLogging$1=function(e,t){(0,v.hu)(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(S.logLevel=y.in.VERBOSE,R=S.log.bind(S),t&&E.set("logging_enabled",!0)):"function"==typeof e?R=e:(R=null,E.remove("logging_enabled"))},log=function(...e){if(!0===k&&(k=!1,null===R&&!0===E.get("logging_enabled")&&enableLogging$1(!0)),R){let t=buildLogMessage_.apply(null,e);R(t)}},logWrapper=function(e){return function(...t){log(e,...t)}},error=function(...e){let t="FIREBASE INTERNAL ERROR: "+buildLogMessage_(...e);S.error(t)},fatal=function(...e){let t=`FIREBASE FATAL ERROR: ${buildLogMessage_(...e)}`;throw S.error(t),Error(t)},warn=function(...e){let t="FIREBASE WARNING: "+buildLogMessage_(...e);S.warn(t)},warnIfPageIsSecure=function(){"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&warn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},isInvalidJSONNumber=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},executeWhenDOMReady=function(e){if((0,v.Yr)()||"complete"===document.readyState)e();else{let t=!1,wrappedFn=function(){if(!document.body){setTimeout(wrappedFn,Math.floor(10));return}t||(t=!0,e())};document.addEventListener?(document.addEventListener("DOMContentLoaded",wrappedFn,!1),window.addEventListener("load",wrappedFn,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{"complete"===document.readyState&&wrappedFn()}),window.attachEvent("onload",wrappedFn))}},N="[MIN_NAME]",A="[MAX_NAME]",nameCompare=function(e,t){if(e===t)return 0;if(e===N||t===A)return -1;if(t===N||e===A)return 1;{let r=tryParseInt(e),n=tryParseInt(t);return null!==r?null!==n?r-n==0?e.length-t.length:r-n:-1:null!==n?1:e<t?-1:1}},stringCompare=function(e,t){return e===t?0:e<t?-1:1},requireKey=function(e,t){if(t&&e in t)return t[e];throw Error("Missing required key ("+e+") in object: "+(0,v.Wl)(t))},ObjectToUniqueKey=function(e){if("object"!=typeof e||null===e)return(0,v.Wl)(e);let t=[];for(let r in e)t.push(r);t.sort();let r="{";for(let n=0;n<t.length;n++)0!==n&&(r+=","),r+=(0,v.Wl)(t[n])+":"+ObjectToUniqueKey(e[t[n]]);return r+"}"},splitStringBySize=function(e,t){let r=e.length;if(r<=t)return[e];let n=[];for(let i=0;i<r;i+=t)i+t>r?n.push(e.substring(i,r)):n.push(e.substring(i,i+t));return n};function each(e,t){for(let r in e)e.hasOwnProperty(r)&&t(r,e[r])}let doubleToIEEE754String=function(e){let t,r,n,i,s;(0,v.hu)(!isInvalidJSONNumber(e),"Invalid JSON number"),0===e?(r=0,n=0,t=1/e==-1/0?1:0):(t=e<0,(e=Math.abs(e))>=22250738585072014e-324?(r=(i=Math.min(Math.floor(Math.log(e)/Math.LN2),1023))+1023,n=Math.round(e*Math.pow(2,52-i)-4503599627370496)):(r=0,n=Math.round(e/5e-324)));let o=[];for(s=52;s;s-=1)o.push(n%2?1:0),n=Math.floor(n/2);for(s=11;s;s-=1)o.push(r%2?1:0),r=Math.floor(r/2);o.push(t?1:0),o.reverse();let a=o.join(""),l="";for(s=0;s<64;s+=8){let e=parseInt(a.substr(s,8),2).toString(16);1===e.length&&(e="0"+e),l+=e}return l.toLowerCase()},O=RegExp("^-?(0*)\\d{1,10}$"),tryParseInt=function(e){if(O.test(e)){let t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},exceptionGuard=function(e){try{e()}catch(e){setTimeout(()=>{let t=e.stack||"";throw warn("Exception was thrown by user callback.",t),e},Math.floor(0))}},beingCrawled=function(){let e="object"==typeof window&&window.navigator&&window.navigator.userAgent||"";return e.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},setTimeoutNonBlocking=function(e,t){let r=setTimeout(e,t);return"number"==typeof r&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(r):"object"==typeof r&&r.unref&&r.unref(),r};/**
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
 */let AppCheckTokenProvider=class AppCheckTokenProvider{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then(e=>this.appCheck=e)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){warn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}};/**
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
 */let FirebaseAuthTokenProvider=class FirebaseAuthTokenProvider{constructor(e,t,r){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(e=>this.auth_=e)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(e=>e&&"auth/token-not-initialized"===e.code?(log("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e)):new Promise((t,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',warn(e)}};let EmulatorTokenProvider=class EmulatorTokenProvider{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}};EmulatorTokenProvider.OWNER="owner";let D=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,x="websocket",L="long_polling";/**
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
 */let RepoInfo=class RepoInfo{constructor(e,t,r,n,i=!1,s="",o=!1,a=!1){this.secure=t,this.namespace=r,this.webSocketOnly=n,this.nodeAdmin=i,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=T.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&T.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){let e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}};function repoInfoConnectionURL(e,t,r){let n;if((0,v.hu)("string"==typeof t,"typeof type must == string"),(0,v.hu)("object"==typeof r,"typeof params must == object"),t===x)n=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else if(t===L)n=(e.secure?"https://":"http://")+e.internalHost+"/.lp?";else throw Error("Unknown connection type: "+t);(e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams)&&(r.ns=e.namespace);let i=[];return each(r,(e,t)=>{i.push(e+"="+t)}),n+i.join("&")}/**
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
 */let StatsCollection=class StatsCollection{constructor(){this.counters_={}}incrementCounter(e,t=1){(0,v.r3)(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return(0,v.p$)(this.counters_)}};/**
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
 */let F={},M={};function statsManagerGetCollection(e){let t=e.toString();return F[t]||(F[t]=new StatsCollection),F[t]}/**
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
 */let PacketReceiver=class PacketReceiver{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){let e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&exceptionGuard(()=>{this.onMessage_(e[t])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}};/**
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
 */let U="start";let BrowserPollConnection=class BrowserPollConnection{constructor(e,t,r,n,i,s,o){this.connId=e,this.repoInfo=t,this.applicationId=r,this.appCheckToken=n,this.authToken=i,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=logWrapper(e),this.stats_=statsManagerGetCollection(t),this.urlFn=e=>(this.appCheckToken&&(e.ac=this.appCheckToken),repoInfoConnectionURL(t,L,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new PacketReceiver(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(3e4)),executeWhenDOMReady(()=>{if(this.isClosed_)return;this.scriptTagHolder=new FirebaseIFrameScriptHolder((...e)=>{let[t,r,n,i,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder){if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===U)this.id=r,this.password=n;else if("close"===t)r?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(r,()=>{this.onClosed_()})):this.onClosed_();else throw Error("Unrecognized command received: "+t)}},(...e)=>{let[t,r]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,r)},()=>{this.onClosed_()},this.urlFn);let e={};e[U]="t",e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&D.test(location.hostname)&&(e.r="f");let t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){BrowserPollConnection.forceAllow_=!0}static forceDisallow(){BrowserPollConnection.forceDisallow_=!0}static isAvailable(){return!(0,v.Yr)()&&(!!BrowserPollConnection.forceAllow_||!BrowserPollConnection.forceDisallow_&&"undefined"!=typeof document&&null!=document.createElement&&!("object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))&&!("object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){!this.isClosed_&&(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){let t=(0,v.Wl)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);let r=(0,v.h$)(t),n=splitStringBySize(r,1840);for(let e=0;e<n.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,n.length,n[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if((0,v.Yr)())return;this.myDisconnFrame=document.createElement("iframe");let r={};r.dframe="t",r.id=e,r.pw=t,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){let t=(0,v.Wl)(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}};let FirebaseIFrameScriptHolder=class FirebaseIFrameScriptHolder{constructor(e,t,r,n){if(this.onDisconnect=r,this.urlFn=n,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,(0,v.Yr)())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=P(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=FirebaseIFrameScriptHolder.createIFrame_();let r="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){let e=document.domain;r='<script>document.domain="'+e+'";</script>'}let n="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(n),this.myIFrame.doc.close()}catch(e){log("frame writing exception"),e.stack&&log(e.stack),log(e)}}}static createIFrame_(){let e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{let t=e.contentWindow.document;t||log("No IE domain setting required")}catch(r){let t=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+t+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));let e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(!this.alive||!this.sendNewPolls||!(this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)))return!1;{this.currentSerial++;let e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),r="",n=0;for(;this.pendingSegs.length>0;){let e=this.pendingSegs[0];if(e.d.length+30+r.length<=1870){let e=this.pendingSegs.shift();r=r+"&seg"+n+"="+e.seg+"&ts"+n+"="+e.ts+"&d"+n+"="+e.d,n++}else break}return t+=r,this.addLongPollTag_(t,this.currentSerial),!0}}enqueueSegment(e,t,r){this.pendingSegs.push({seg:e,ts:t,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);let doNewRequest=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(doNewRequest,Math.floor(25e3));this.addTag(e,()=>{clearTimeout(r),doNewRequest()})}addTag(e,t){(0,v.Yr)()?this.doNodeLongPoll(e,t):setTimeout(()=>{try{if(!this.sendNewPolls)return;let r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){let e=r.readyState;e&&"loaded"!==e&&"complete"!==e||(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),t())},r.onerror=()=>{log("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch(e){}},Math.floor(1))}};let W=null;"undefined"!=typeof MozWebSocket?W=MozWebSocket:"undefined"!=typeof WebSocket&&(W=WebSocket);let WebSocketConnection=class WebSocketConnection{constructor(e,t,r,n,i,s,o){this.connId=e,this.applicationId=r,this.appCheckToken=n,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=logWrapper(this.connId),this.stats_=statsManagerGetCollection(t),this.connURL=WebSocketConnection.connectionURL_(t,s,o,n,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,r,n,i){let s={};return s.v="5",!(0,v.Yr)()&&"undefined"!=typeof location&&location.hostname&&D.test(location.hostname)&&(s.r="f"),t&&(s.s=t),r&&(s.ls=r),n&&(s.ac=n),i&&(s.p=i),repoInfoConnectionURL(e,x,s)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,T.set("previous_websocket_failure",!0);try{let e;if((0,v.Yr)()){let t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/5/${I}/${C.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);let r=C.env,n=0===this.connURL.indexOf("wss://")?r.HTTPS_PROXY||r.https_proxy:r.HTTP_PROXY||r.http_proxy;n&&(e.proxy={origin:n})}this.mySock=new W(this.connURL,[],e)}catch(t){this.log_("Error instantiating WebSocket.");let e=t.message||t.data;e&&this.log_(e),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");let t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){WebSocketConnection.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){let t=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);t&&t.length>1&&4.4>parseFloat(t[1])&&(e=!0)}return!e&&null!==W&&!WebSocketConnection.forceDisallow_}static previouslyFailed(){return T.isInMemoryStorage||!0===T.get("previous_websocket_failure")}markConnectionHealthy(){T.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){let e=this.frames.join("");this.frames=null;let t=(0,v.cI)(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if((0,v.hu)(null===this.frames,"We already have a frame buffer"),e.length<=6){let t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;let t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{let e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();let t=(0,v.Wl)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);let r=splitStringBySize(t,16384);r.length>1&&this.sendString_(String(r.length));for(let e=0;e<r.length;e++)this.sendString_(r[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){!this.isClosed_&&(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}};WebSocketConnection.responsesRequiredToBeHealthy=2,WebSocketConnection.healthyTimeout=3e4;/**
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
 */let TransportManager=class TransportManager{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[BrowserPollConnection,WebSocketConnection]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){let t=WebSocketConnection&&WebSocketConnection.isAvailable(),r=t&&!WebSocketConnection.previouslyFailed();if(e.webSocketOnly&&(t||warn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[WebSocketConnection];else{let e=this.transports_=[];for(let t of TransportManager.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);TransportManager.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}};TransportManager.globalTransportInitialized_=!1;let Connection=class Connection{constructor(e,t,r,n,i,s,o,a,l,h){this.id=e,this.repoInfo_=t,this.applicationId_=r,this.appCheckToken_=n,this.authToken_=i,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=logWrapper("c:"+this.id+":"),this.transportManager_=new TransportManager(t),this.log_("Connection created"),this.start_()}start_(){let e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;let t=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,r)},Math.floor(0));let n=e.healthyTimeout||0;n>0&&(this.healthyTimeout_=setTimeoutNonBlocking(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(n)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){this.sendData_({t:"d",d:e})}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){let t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){let t=requireKey("t",e),r=requireKey("d",e);if("c"===t)this.onSecondaryControl_(r);else if("d"===t)this.pendingDataMessages.push(r);else throw Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){let t=requireKey("t",e),r=requireKey("d",e);"c"===t?this.onControl_(r):"d"===t&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){!this.isHealthy_&&(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){let t=requireKey("t",e);if("d"in e){let r=e.d;if("h"===t){let e=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(r):"r"===t?this.onReset_(r):"e"===t?error("Server Error: "+r):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):error("Unknown control packet command: "+t)}}onHandshake_(e){let t=e.ts,r=e.v,n=e.h;this.sessionId=e.s,this.repoInfo_.host=n,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==r&&warn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){let e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;let t=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,r),setTimeoutNonBlocking(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):setTimeoutNonBlocking(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){let e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(T.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}};/**
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
 */let ServerActions=class ServerActions{put(e,t,r,n){}merge(e,t,r,n){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,r){}onDisconnectMerge(e,t,r){}onDisconnectCancel(e,t){}reportStats(e){}};/**
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
 */let EventEmitter=class EventEmitter{constructor(e){this.allowedEvents_=e,this.listeners_={},(0,v.hu)(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){let r=[...this.listeners_[e]];for(let e=0;e<r.length;e++)r[e].callback.apply(r[e].context,t)}}on(e,t,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:r});let n=this.getInitialEvent(e);n&&t.apply(r,n)}off(e,t,r){this.validateEventType_(e);let n=this.listeners_[e]||[];for(let e=0;e<n.length;e++)if(n[e].callback===t&&(!r||r===n[e].context)){n.splice(e,1);return}}validateEventType_(e){(0,v.hu)(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}};/**
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
 */let OnlineMonitor=class OnlineMonitor extends EventEmitter{constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||(0,v.uI)()||(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new OnlineMonitor}getInitialEvent(e){return(0,v.hu)("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}};let Path=class Path{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}};function newEmptyPath(){return new Path("")}function pathGetFront(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function pathGetLength(e){return e.pieces_.length-e.pieceNum_}function pathPopFront(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new Path(e.pieces_,t)}function pathGetBack(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function pathSlice(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function pathParent(e){if(e.pieceNum_>=e.pieces_.length)return null;let t=[];for(let r=e.pieceNum_;r<e.pieces_.length-1;r++)t.push(e.pieces_[r]);return new Path(t,0)}function pathChild(e,t){let r=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)r.push(e.pieces_[t]);if(t instanceof Path)for(let e=t.pieceNum_;e<t.pieces_.length;e++)r.push(t.pieces_[e]);else{let e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&r.push(e[t])}return new Path(r,0)}function pathIsEmpty(e){return e.pieceNum_>=e.pieces_.length}function newRelativePath(e,t){let r=pathGetFront(e),n=pathGetFront(t);if(null===r)return t;if(r===n)return newRelativePath(pathPopFront(e),pathPopFront(t));throw Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function pathEquals(e,t){if(pathGetLength(e)!==pathGetLength(t))return!1;for(let r=e.pieceNum_,n=t.pieceNum_;r<=e.pieces_.length;r++,n++)if(e.pieces_[r]!==t.pieces_[n])return!1;return!0}function pathContains(e,t){let r=e.pieceNum_,n=t.pieceNum_;if(pathGetLength(e)>pathGetLength(t))return!1;for(;r<e.pieces_.length;){if(e.pieces_[r]!==t.pieces_[n])return!1;++r,++n}return!0}let ValidationPath=class ValidationPath{constructor(e,t){this.errorPrefix_=t,this.parts_=pathSlice(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=(0,v.ug)(this.parts_[e]);validationPathCheckValid(this)}};function validationPathCheckValid(e){if(e.byteLength_>768)throw Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+validationPathToErrorString(e))}function validationPathToErrorString(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}/**
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
 */let VisibilityMonitor=class VisibilityMonitor extends EventEmitter{constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{let t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))},!1)}static getInstance(){return new VisibilityMonitor}getInitialEvent(e){return(0,v.hu)("visible"===e,"Unknown event type: "+e),[this.visible_]}};let PersistentConnection=class PersistentConnection extends ServerActions{constructor(e,t,r,n,i,s,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=r,this.onConnectStatus_=n,this.onServerInfoUpdate_=i,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=PersistentConnection.nextPersistentConnectionId_++,this.log_=logWrapper("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=1e3,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!(0,v.Yr)())throw Error("Auth override specified in options, but not supported on non Node.js platforms");VisibilityMonitor.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&OnlineMonitor.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,r){let n=++this.requestNumber_,i={r:n,a:e,b:t};this.log_((0,v.Wl)(i)),(0,v.hu)(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[n]=r)}get(e){this.initConnection_();let t=new v.BH,r={p:e._path.toString(),q:e._queryObject};this.outstandingGets_.push({action:"g",request:r,onComplete:e=>{let r=e.d;"ok"===e.s?t.resolve(r):t.reject(r)}}),this.outstandingGetCount_++;let n=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(n),t.promise}listen(e,t,r,n){this.initConnection_();let i=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+i),this.listens.has(s)||this.listens.set(s,new Map),(0,v.hu)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),(0,v.hu)(!this.listens.get(s).has(i),"listen() called twice for same path/queryId.");let o={onComplete:n,hashFn:t,query:e,tag:r};this.listens.get(s).set(i,o),this.connected_&&this.sendListen_(o)}sendGet_(e){let t=this.outstandingGets_[e];this.sendRequest("g",t.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(r)})}sendListen_(e){let t=e.query,r=t._path.toString(),n=t._queryIdentifier;this.log_("Listen on "+r+" for "+n);let i={p:r};e.tag&&(i.q=t._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest("q",i,i=>{let s=i.d,o=i.s;PersistentConnection.warnOnListenWarnings_(s,t);let a=this.listens.get(r)&&this.listens.get(r).get(n);a===e&&(this.log_("listen response",i),"ok"!==o&&this.removeListen_(r,n),e.onComplete&&e.onComplete(o,s))})}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&(0,v.r3)(e,"w")){let r=(0,v.DV)(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){let e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();warn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){let t=e&&40===e.length;(t||(0,v.GJ)(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){let e=this.authToken_,t=(0,v.w9)(e)?"auth":"gauth",r={cred:e};null===this.authOverride_?r.noauth=!0:"object"==typeof this.authOverride_&&(r.authvar=this.authOverride_),this.sendRequest(t,r,t=>{let r=t.s,n=t.d||"error";this.authToken_===e&&("ok"===r?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,n))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{let t=e.s,r=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,r)})}unlisten(e,t){let r=e._path.toString(),n=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+n),(0,v.hu)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");let i=this.removeListen_(r,n);i&&this.connected_&&this.sendUnlisten_(r,n,e._queryObject,t)}sendUnlisten_(e,t,r,n){this.log_("Unlisten on "+e+" for "+t);let i={p:e};n&&(i.q=r,i.t=n),this.sendRequest("n",i)}onDisconnectPut(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:r})}onDisconnectMerge(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:r})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,r,n){let i={p:t,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,e=>{n&&setTimeout(()=>{n(e.s,e.d)},Math.floor(0))})}put(e,t,r,n){this.putInternal("p",e,t,r,n)}merge(e,t,r,n){this.putInternal("m",e,t,r,n)}putInternal(e,t,r,n,i){this.initConnection_();let s={p:t,d:r};void 0!==i&&(s.h=i),this.outstandingPuts_.push({action:e,request:s,onComplete:n}),this.outstandingPutCount_++;let o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){let t=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,n=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,r,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),n&&n(r.s,r.d)})}reportStats(e){if(this.connected_){let t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,e=>{let t=e.s;if("ok"!==t){let t=e.d;this.log_("reportStats","Error sending stats: "+t)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+(0,v.Wl)(e));let t=e.r,r=this.requestCBHash_[t];r&&(delete this.requestCBHash_[t],r(e.b))}else if("error"in e)throw"A server-side error has occurred: "+e.error;else"a"in e&&this.onDataPush_(e.a,e.b)}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):error("Unrecognized action received from server: "+(0,v.Wl)(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){(0,v.hu)(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){!e||this.visible_||this.reconnectDelay_!==this.maxReconnectDelay_||(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){let e=new Date().getTime()-this.lastConnectionEstablishedTime_;e>3e4&&(this.reconnectDelay_=1e3),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime();let e=new Date().getTime()-this.lastConnectionAttemptTime_,t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;let e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),n=this.id+":"+PersistentConnection.nextConnectionId_++,i=this.lastSessionId,s=!1,o=null,closeFn=function(){o?o.close():(s=!0,r())};this.realtime_={close:closeFn,sendRequest:function(e){(0,v.hu)(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(e)}};let a=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{let[l,h]=await Promise.all([this.authTokenProvider_.getToken(a),this.appCheckTokenProvider_.getToken(a)]);s?log("getToken() completed but was canceled"):(log("getToken() completed. Creating connection."),this.authToken_=l&&l.accessToken,this.appCheckToken_=h&&h.token,o=new Connection(n,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,r,e=>{warn(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")},i))}catch(e){this.log_("Failed to get token: "+e),s||(this.repoInfo_.nodeAdmin&&warn(e),closeFn())}}}interrupt(e){log("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){log("Resuming connection for reason: "+e),delete this.interruptReasons_[e],(0,v.xb)(this.interruptReasons_)&&(this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){let t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){let t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let r;r=t?t.map(e=>ObjectToUniqueKey(e)).join("$"):"default";let n=this.removeListen_(e,r);n&&n.onComplete&&n.onComplete("permission_denied")}removeListen_(e,t){let r;let n=new Path(e).toString();if(this.listens.has(n)){let e=this.listens.get(n);r=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else r=void 0;return r}onAuthRevoked_(e,t){log("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),("invalid_token"===e||"permission_denied"===e)&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){log("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,("invalid_token"===e||"permission_denied"===e)&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){for(let e of(this.tryAuth(),this.tryAppCheck(),this.listens.values()))for(let t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){let e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){let e={},t="js";(0,v.Yr)()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+I.replace(/\./g,"-")]=1,(0,v.uI)()?e["framework.cordova"]=1:(0,v.b$)()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){let e=OnlineMonitor.getInstance().currentlyOnline();return(0,v.xb)(this.interruptReasons_)&&e}};PersistentConnection.nextPersistentConnectionId_=0,PersistentConnection.nextConnectionId_=0;/**
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
 */let NamedNode=class NamedNode{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new NamedNode(e,t)}};/**
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
 */let Index=class Index{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){let r=new NamedNode(N,e),n=new NamedNode(N,t);return 0!==this.compare(r,n)}minPost(){return NamedNode.MIN}};let KeyIndex=class KeyIndex extends Index{static get __EMPTY_NODE(){return n}static set __EMPTY_NODE(e){n=e}compare(e,t){return nameCompare(e.name,t.name)}isDefinedOn(e){throw(0,v.g5)("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return NamedNode.MIN}maxPost(){return new NamedNode(A,n)}makePost(e,t){return(0,v.hu)("string"==typeof e,"KeyIndex indexValue must always be a string."),new NamedNode(e,n)}toString(){return".key"}};let q=new KeyIndex;/**
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
 */let SortedMapIterator=class SortedMapIterator{constructor(e,t,r,n,i=null){this.isReverse_=n,this.resultGenerator_=i,this.nodeStack_=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,n&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else if(0===s){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}getNext(){let e;if(0===this.nodeStack_.length)return null;let t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;let e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}};let LLRBNode=class LLRBNode{constructor(e,t,r,n,i){this.key=e,this.value=t,this.color=null!=r?r:LLRBNode.RED,this.left=null!=n?n:SortedMap.EMPTY_NODE,this.right=null!=i?i:SortedMap.EMPTY_NODE}copy(e,t,r,n,i){return new LLRBNode(null!=e?e:this.key,null!=t?t:this.value,null!=r?r:this.color,null!=n?n:this.left,null!=i?i:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let n=this,i=r(e,n.key);return(n=i<0?n.copy(null,null,null,n.left.insert(e,t,r),null):0===i?n.copy(null,t,null,null,null):n.copy(null,null,null,null,n.right.insert(e,t,r))).fixUp_()}removeMin_(){if(this.left.isEmpty())return SortedMap.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),(e=e.copy(null,null,null,e.left.removeMin_(),null)).fixUp_()}remove(e,t){let r,n;if(r=this,0>t(e,r.key))r.left.isEmpty()||r.left.isRed_()||r.left.left.isRed_()||(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),r.right.isEmpty()||r.right.isRed_()||r.right.left.isRed_()||(r=r.moveRedRight_()),0===t(e,r.key)){if(r.right.isEmpty())return SortedMap.EMPTY_NODE;n=r.right.min_(),r=r.copy(n.key,n.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight_())).rotateLeft_()).colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=(e=e.rotateRight_()).colorFlip_()),e}rotateLeft_(){let e=this.copy(null,null,LLRBNode.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){let e=this.copy(null,null,LLRBNode.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){let e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw Error("Right child of ("+this.key+","+this.value+") is red");let e=this.left.check_();if(e===this.right.check_())return e+(this.isRed_()?0:1);throw Error("Black depths differ")}};LLRBNode.RED=!0,LLRBNode.BLACK=!1;let SortedMap=class SortedMap{constructor(e,t=SortedMap.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new SortedMap(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,LLRBNode.BLACK,null,null))}remove(e){return new SortedMap(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,LLRBNode.BLACK,null,null))}get(e){let t;let r=this.root_;for(;!r.isEmpty();){if(0===(t=this.comparator_(e,r.key)))return r.value;t<0?r=r.left:t>0&&(r=r.right)}return null}getPredecessorKey(e){let t,r=this.root_,n=null;for(;!r.isEmpty();){if(0===(t=this.comparator_(e,r.key))){if(r.left.isEmpty()){if(n)return n.key;return null}for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}t<0?r=r.left:t>0&&(n=r,r=r.right)}throw Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new SortedMapIterator(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new SortedMapIterator(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new SortedMapIterator(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new SortedMapIterator(this.root_,null,this.comparator_,!0,e)}};/**
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
 */function NAME_ONLY_COMPARATOR(e,t){return nameCompare(e.name,t.name)}function NAME_COMPARATOR(e,t){return nameCompare(e,t)}SortedMap.EMPTY_NODE=new class{copy(e,t,r,n,i){return this}insert(e,t,r){return new LLRBNode(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};let priorityHashText=function(e){return"number"==typeof e?"number:"+doubleToIEEE754String(e):"string:"+e},validatePriorityNode=function(e){if(e.isLeafNode()){let t=e.val();(0,v.hu)("string"==typeof t||"number"==typeof t||"object"==typeof t&&(0,v.r3)(t,".sv"),"Priority must be a string or number.")}else(0,v.hu)(e===i||e.isEmpty(),"priority of unexpected type.");(0,v.hu)(e===i||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};let LeafNode=class LeafNode{constructor(e,t=LeafNode.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,(0,v.hu)(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),validatePriorityNode(this.priorityNode_)}static set __childrenNodeConstructor(e){s=e}static get __childrenNodeConstructor(){return s}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new LeafNode(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:LeafNode.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return pathIsEmpty(e)?this:".priority"===pathGetFront(e)?this.priorityNode_:LeafNode.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:LeafNode.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){let r=pathGetFront(e);return null===r?t:t.isEmpty()&&".priority"!==r?this:((0,v.hu)(".priority"!==r||1===pathGetLength(e),".priority must be the last token in a path"),this.updateImmediateChild(r,LeafNode.__childrenNodeConstructor.EMPTY_NODE.updateChild(pathPopFront(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+priorityHashText(this.priorityNode_.val())+":");let t=typeof this.value_;e+=t+":","number"===t?e+=doubleToIEEE754String(this.value_):e+=this.value_,this.lazyHash_=sha1(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===LeafNode.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof LeafNode.__childrenNodeConstructor?-1:((0,v.hu)(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){let t=typeof e.value_,r=typeof this.value_,n=LeafNode.VALUE_TYPE_ORDER.indexOf(t),i=LeafNode.VALUE_TYPE_ORDER.indexOf(r);return((0,v.hu)(n>=0,"Unknown leaf type: "+t),(0,v.hu)(i>=0,"Unknown leaf type: "+r),n!==i)?i-n:"object"===r?0:this.value_<e.value_?-1:this.value_===e.value_?0:1}withIndex(){return this}isIndexed(){return!0}equals(e){return e===this||!!e.isLeafNode()&&this.value_===e.value_&&this.priorityNode_.equals(e.priorityNode_)}};LeafNode.VALUE_TYPE_ORDER=["object","boolean","number","string"];let B=new class extends Index{compare(e,t){let r=e.node.getPriority(),n=t.node.getPriority(),i=r.compareTo(n);return 0===i?nameCompare(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return NamedNode.MIN}maxPost(){return new NamedNode(A,new LeafNode("[PRIORITY-POST]",a))}makePost(e,t){let r=o(e);return new NamedNode(t,new LeafNode("[PRIORITY-POST]",r))}toString(){return".priority"}},V=Math.log(2);let Base12Num=class Base12Num{constructor(e){this.count=parseInt(Math.log(e+1)/V,10),this.current_=this.count-1;let t=parseInt(Array(this.count+1).join("1"),2);this.bits_=e+1&t}nextBitIsOne(){let e=!(this.bits_&1<<this.current_);return this.current_--,e}};let buildChildSet=function(e,t,r,n){e.sort(t);let buildBalancedTree=function(t,n){let i,s;let o=n-t;if(0===o)return null;if(1===o)return i=e[t],s=r?r(i):i,new LLRBNode(s,i.node,LLRBNode.BLACK,null,null);{let a=parseInt(o/2,10)+t,l=buildBalancedTree(t,a),h=buildBalancedTree(a+1,n);return i=e[a],s=r?r(i):i,new LLRBNode(s,i.node,LLRBNode.BLACK,l,h)}},i=new Base12Num(e.length),s=function(t){let n=null,i=null,s=e.length,buildPennant=function(t,n){let i=s-t,o=s;s-=t;let a=buildBalancedTree(i+1,o),l=e[i],h=r?r(l):l;attachPennant(new LLRBNode(h,l.node,n,null,a))},attachPennant=function(e){n?n.left=e:i=e,n=e};for(let e=0;e<t.count;++e){let r=t.nextBitIsOne(),n=Math.pow(2,t.count-(e+1));r?buildPennant(n,LLRBNode.BLACK):(buildPennant(n,LLRBNode.BLACK),buildPennant(n,LLRBNode.RED))}return i}(i);return new SortedMap(n||t,s)},j={};let IndexMap=class IndexMap{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return(0,v.hu)(j&&B,"ChildrenNode.ts has not been loaded"),l=l||new IndexMap({".priority":j},{".priority":B})}get(e){let t=(0,v.DV)(this.indexes_,e);if(!t)throw Error("No index defined for "+e);return t instanceof SortedMap?t:null}hasIndex(e){return(0,v.r3)(this.indexSet_,e.toString())}addIndex(e,t){let r;(0,v.hu)(e!==q,"KeyIndex always exists and isn't meant to be added to the IndexMap.");let n=[],i=!1,s=t.getIterator(NamedNode.Wrap),o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),n.push(o),o=s.getNext();r=i?buildChildSet(n,e.getCompare()):j;let a=e.toString(),l=Object.assign({},this.indexSet_);l[a]=e;let h=Object.assign({},this.indexes_);return h[a]=r,new IndexMap(h,l)}addToIndexes(e,t){let r=(0,v.UI)(this.indexes_,(r,n)=>{let i=(0,v.DV)(this.indexSet_,n);if((0,v.hu)(i,"Missing index implementation for "+n),r===j){if(!i.isDefinedOn(e.node))return j;{let r=[],n=t.getIterator(NamedNode.Wrap),s=n.getNext();for(;s;)s.name!==e.name&&r.push(s),s=n.getNext();return r.push(e),buildChildSet(r,i.getCompare())}}{let n=t.get(e.name),i=r;return n&&(i=i.remove(new NamedNode(e.name,n))),i.insert(e,e.node)}});return new IndexMap(r,this.indexSet_)}removeFromIndexes(e,t){let r=(0,v.UI)(this.indexes_,r=>{if(r===j)return r;{let n=t.get(e.name);return n?r.remove(new NamedNode(e.name,n)):r}});return new IndexMap(r,this.indexSet_)}};let ChildrenNode=class ChildrenNode{constructor(e,t,r){this.children_=e,this.priorityNode_=t,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&validatePriorityNode(this.priorityNode_),this.children_.isEmpty()&&(0,v.hu)(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return h||(h=new ChildrenNode(new SortedMap(NAME_COMPARATOR),null,IndexMap.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||h}updatePriority(e){return this.children_.isEmpty()?this:new ChildrenNode(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{let t=this.children_.get(e);return null===t?h:t}}getChild(e){let t=pathGetFront(e);return null===t?this:this.getImmediateChild(t).getChild(pathPopFront(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if((0,v.hu)(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{let r,n;let i=new NamedNode(e,t);t.isEmpty()?(r=this.children_.remove(e),n=this.indexMap_.removeFromIndexes(i,this.children_)):(r=this.children_.insert(e,t),n=this.indexMap_.addToIndexes(i,this.children_));let s=r.isEmpty()?h:this.priorityNode_;return new ChildrenNode(r,s,n)}}updateChild(e,t){let r=pathGetFront(e);if(null===r)return t;{(0,v.hu)(".priority"!==pathGetFront(e)||1===pathGetLength(e),".priority must be the last token in a path");let n=this.getImmediateChild(r).updateChild(pathPopFront(e),t);return this.updateImmediateChild(r,n)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;let t={},r=0,n=0,i=!0;if(this.forEachChild(B,(s,o)=>{t[s]=o.val(e),r++,i&&ChildrenNode.INTEGER_REGEXP_.test(s)?n=Math.max(n,Number(s)):i=!1}),e||!i||!(n<2*r))return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t;{let e=[];for(let r in t)e[r]=t[r];return e}}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+priorityHashText(this.getPriority().val())+":"),this.forEachChild(B,(t,r)=>{let n=r.hash();""!==n&&(e+=":"+t+":"+n)}),this.lazyHash_=""===e?"":sha1(e)}return this.lazyHash_}getPredecessorChildName(e,t,r){let n=this.resolveIndex_(r);if(!n)return this.children_.getPredecessorKey(e);{let r=n.getPredecessorKey(new NamedNode(e,t));return r?r.name:null}}getFirstChildName(e){let t=this.resolveIndex_(e);if(!t)return this.children_.minKey();{let e=t.minKey();return e&&e.name}}getFirstChild(e){let t=this.getFirstChildName(e);return t?new NamedNode(t,this.children_.get(t)):null}getLastChildName(e){let t=this.resolveIndex_(e);if(!t)return this.children_.maxKey();{let e=t.maxKey();return e&&e.name}}getLastChild(e){let t=this.getLastChildName(e);return t?new NamedNode(t,this.children_.get(t)):null}forEachChild(e,t){let r=this.resolveIndex_(e);return r?r.inorderTraversal(e=>t(e.name,e.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){let r=this.resolveIndex_(t);if(r)return r.getIteratorFrom(e,e=>e);{let r=this.children_.getIteratorFrom(e.name,NamedNode.Wrap),n=r.peek();for(;null!=n&&0>t.compare(n,e);)r.getNext(),n=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){let r=this.resolveIndex_(t);if(r)return r.getReverseIteratorFrom(e,e=>e);{let r=this.children_.getReverseIteratorFrom(e.name,NamedNode.Wrap),n=r.peek();for(;null!=n&&t.compare(n,e)>0;)r.getNext(),n=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===H?-1:0}withIndex(e){if(e===q||this.indexMap_.hasIndex(e))return this;{let t=this.indexMap_.addIndex(e,this.children_);return new ChildrenNode(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===q||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode()||!this.getPriority().equals(e.getPriority())||this.children_.count()!==e.children_.count())return!1;{let t=this.getIterator(B),r=e.getIterator(B),n=t.getNext(),i=r.getNext();for(;n&&i;){if(n.name!==i.name||!n.node.equals(i.node))return!1;n=t.getNext(),i=r.getNext()}return null===n&&null===i}}resolveIndex_(e){return e===q?null:this.indexMap_.get(e.toString())}};ChildrenNode.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;let H=new class extends ChildrenNode{constructor(){super(new SortedMap(NAME_COMPARATOR),ChildrenNode.EMPTY_NODE,IndexMap.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ChildrenNode.EMPTY_NODE}isEmpty(){return!1}};function nodeFromJSON(e,t=null){if(null===e)return ChildrenNode.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),(0,v.hu)(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){let r=e;return new LeafNode(r,nodeFromJSON(t))}if(e instanceof Array){let r=ChildrenNode.EMPTY_NODE;return each(e,(t,n)=>{if((0,v.r3)(e,t)&&"."!==t.substring(0,1)){let e=nodeFromJSON(n);(e.isLeafNode()||!e.isEmpty())&&(r=r.updateImmediateChild(t,e))}}),r.updatePriority(nodeFromJSON(t))}{let r=[],n=!1,i=e;if(each(i,(e,t)=>{if("."!==e.substring(0,1)){let i=nodeFromJSON(t);i.isEmpty()||(n=n||!i.getPriority().isEmpty(),r.push(new NamedNode(e,i)))}}),0===r.length)return ChildrenNode.EMPTY_NODE;let s=buildChildSet(r,NAME_ONLY_COMPARATOR,e=>e.name,NAME_COMPARATOR);if(!n)return new ChildrenNode(s,nodeFromJSON(t),IndexMap.Default);{let e=buildChildSet(r,B.getCompare());return new ChildrenNode(s,nodeFromJSON(t),new IndexMap({".priority":e},{".priority":B}))}}}Object.defineProperties(NamedNode,{MIN:{value:new NamedNode(N,ChildrenNode.EMPTY_NODE)},MAX:{value:new NamedNode(A,H)}}),KeyIndex.__EMPTY_NODE=ChildrenNode.EMPTY_NODE,LeafNode.__childrenNodeConstructor=ChildrenNode,i=H,a=H,o=nodeFromJSON;/**
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
 */let PathIndex=class PathIndex extends Index{constructor(e){super(),this.indexPath_=e,(0,v.hu)(!pathIsEmpty(e)&&".priority"!==pathGetFront(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){let r=this.extractChild(e.node),n=this.extractChild(t.node),i=r.compareTo(n);return 0===i?nameCompare(e.name,t.name):i}makePost(e,t){let r=nodeFromJSON(e),n=ChildrenNode.EMPTY_NODE.updateChild(this.indexPath_,r);return new NamedNode(t,n)}maxPost(){let e=ChildrenNode.EMPTY_NODE.updateChild(this.indexPath_,H);return new NamedNode(A,e)}toString(){return pathSlice(this.indexPath_,0).join("/")}};let G=new /**
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
 */class extends Index{compare(e,t){let r=e.node.compareTo(t.node);return 0===r?nameCompare(e.name,t.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return NamedNode.MIN}maxPost(){return NamedNode.MAX}makePost(e,t){let r=nodeFromJSON(e);return new NamedNode(t,r)}toString(){return".value"}};/**
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
 */function changeValue(e){return{type:"value",snapshotNode:e}}function changeChildAdded(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function changeChildRemoved(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function changeChildChanged(e,t,r){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:r}}/**
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
 */let IndexedFilter=class IndexedFilter{constructor(e){this.index_=e}updateChild(e,t,r,n,i,s){(0,v.hu)(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");let o=e.getImmediateChild(t);return o.getChild(n).equals(r.getChild(n))&&o.isEmpty()===r.isEmpty()?e:(null!=s&&(r.isEmpty()?e.hasChild(t)?s.trackChildChange(changeChildRemoved(t,o)):(0,v.hu)(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):o.isEmpty()?s.trackChildChange(changeChildAdded(t,r)):s.trackChildChange(changeChildChanged(t,r,o))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(t,r).withIndex(this.index_)}updateFullNode(e,t,r){return null==r||(e.isLeafNode()||e.forEachChild(B,(e,n)=>{t.hasChild(e)||r.trackChildChange(changeChildRemoved(e,n))}),t.isLeafNode()||t.forEachChild(B,(t,n)=>{if(e.hasChild(t)){let i=e.getImmediateChild(t);i.equals(n)||r.trackChildChange(changeChildChanged(t,n,i))}else r.trackChildChange(changeChildAdded(t,n))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?ChildrenNode.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}};/**
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
 */let RangedFilter=class RangedFilter{constructor(e){this.indexedFilter_=new IndexedFilter(e.getIndex()),this.index_=e.getIndex(),this.startPost_=RangedFilter.getStartPost_(e),this.endPost_=RangedFilter.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){let t=this.startIsInclusive_?0>=this.index_.compare(this.getStartPost(),e):0>this.index_.compare(this.getStartPost(),e),r=this.endIsInclusive_?0>=this.index_.compare(e,this.getEndPost()):0>this.index_.compare(e,this.getEndPost());return t&&r}updateChild(e,t,r,n,i,s){return this.matches(new NamedNode(t,r))||(r=ChildrenNode.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,r,n,i,s)}updateFullNode(e,t,r){t.isLeafNode()&&(t=ChildrenNode.EMPTY_NODE);let n=t.withIndex(this.index_);n=n.updatePriority(ChildrenNode.EMPTY_NODE);let i=this;return t.forEachChild(B,(e,t)=>{i.matches(new NamedNode(e,t))||(n=n.updateImmediateChild(e,ChildrenNode.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,n,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(!e.hasStart())return e.getIndex().minPost();{let t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}}static getEndPost_(e){if(!e.hasEnd())return e.getIndex().maxPost();{let t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}}};/**
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
 */let LimitedFilter=class LimitedFilter{constructor(e){this.withinDirectionalStart=e=>this.reverse_?this.withinEndPost(e):this.withinStartPost(e),this.withinDirectionalEnd=e=>this.reverse_?this.withinStartPost(e):this.withinEndPost(e),this.withinStartPost=e=>{let t=this.index_.compare(this.rangedFilter_.getStartPost(),e);return this.startIsInclusive_?t<=0:t<0},this.withinEndPost=e=>{let t=this.index_.compare(e,this.rangedFilter_.getEndPost());return this.endIsInclusive_?t<=0:t<0},this.rangedFilter_=new RangedFilter(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,r,n,i,s){return(this.rangedFilter_.matches(new NamedNode(t,r))||(r=ChildrenNode.EMPTY_NODE),e.getImmediateChild(t).equals(r))?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,r,n,i,s):this.fullLimitUpdateChild_(e,t,r,i,s)}updateFullNode(e,t,r){let n;if(t.isLeafNode()||t.isEmpty())n=ChildrenNode.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;n=ChildrenNode.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let r=0;for(;e.hasNext()&&r<this.limit_;){let t=e.getNext();if(this.withinDirectionalStart(t)){if(this.withinDirectionalEnd(t))n=n.updateImmediateChild(t.name,t.node),r++;else break}}}else{let e;n=(n=t.withIndex(this.index_)).updatePriority(ChildrenNode.EMPTY_NODE),e=this.reverse_?n.getReverseIterator(this.index_):n.getIterator(this.index_);let r=0;for(;e.hasNext();){let t=e.getNext(),i=r<this.limit_&&this.withinDirectionalStart(t)&&this.withinDirectionalEnd(t);i?r++:n=n.updateImmediateChild(t.name,ChildrenNode.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,n,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,r,n,i){let s;if(this.reverse_){let e=this.index_.getCompare();s=(t,r)=>e(r,t)}else s=this.index_.getCompare();(0,v.hu)(e.numChildren()===this.limit_,"");let o=new NamedNode(t,r),a=this.reverse_?e.getFirstChild(this.index_):e.getLastChild(this.index_),l=this.rangedFilter_.matches(o);if(e.hasChild(t)){let h=e.getImmediateChild(t),c=n.getChildAfterChild(this.index_,a,this.reverse_);for(;null!=c&&(c.name===t||e.hasChild(c.name));)c=n.getChildAfterChild(this.index_,c,this.reverse_);let u=null==c?1:s(c,o),d=l&&!r.isEmpty()&&u>=0;if(d)return null!=i&&i.trackChildChange(changeChildChanged(t,r,h)),e.updateImmediateChild(t,r);{null!=i&&i.trackChildChange(changeChildRemoved(t,h));let r=e.updateImmediateChild(t,ChildrenNode.EMPTY_NODE),n=null!=c&&this.rangedFilter_.matches(c);return n?(null!=i&&i.trackChildChange(changeChildAdded(c.name,c.node)),r.updateImmediateChild(c.name,c.node)):r}}return r.isEmpty()?e:l&&s(a,o)>=0?(null!=i&&(i.trackChildChange(changeChildRemoved(a.name,a.node)),i.trackChildChange(changeChildAdded(t,r))),e.updateImmediateChild(t,r).updateImmediateChild(a.name,ChildrenNode.EMPTY_NODE)):e}};/**
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
 */let QueryParams=class QueryParams{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=B}hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return(0,v.hu)(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return((0,v.hu)(this.startSet_,"Only valid if start has been set"),this.startNameSet_)?this.indexStartName_:N}hasEnd(){return this.endSet_}getIndexEndValue(){return(0,v.hu)(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return((0,v.hu)(this.endSet_,"Only valid if end has been set"),this.endNameSet_)?this.indexEndName_:A}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return(0,v.hu)(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===B}copy(){let e=new QueryParams;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}};function queryParamsToRestQueryStringParameters(e){let t;let r={};if(e.isDefault())return r;if(e.index_===B?t="$priority":e.index_===G?t="$value":e.index_===q?t="$key":((0,v.hu)(e.index_ instanceof PathIndex,"Unrecognized index type!"),t=e.index_.toString()),r.orderBy=(0,v.Wl)(t),e.startSet_){let t=e.startAfterSet_?"startAfter":"startAt";r[t]=(0,v.Wl)(e.indexStartValue_),e.startNameSet_&&(r[t]+=","+(0,v.Wl)(e.indexStartName_))}if(e.endSet_){let t=e.endBeforeSet_?"endBefore":"endAt";r[t]=(0,v.Wl)(e.indexEndValue_),e.endNameSet_&&(r[t]+=","+(0,v.Wl)(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?r.limitToFirst=e.limit_:r.limitToLast=e.limit_),r}function queryParamsGetQueryObject(e){let t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let r=e.viewFrom_;""===r&&(r=e.isViewFromLeft()?"l":"r"),t.vf=r}return e.index_!==B&&(t.i=e.index_.toString()),t}/**
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
 */let ReadonlyRestClient=class ReadonlyRestClient extends ServerActions{constructor(e,t,r,n){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=r,this.appCheckTokenProvider_=n,this.log_=logWrapper("p:rest:"),this.listens_={}}reportStats(e){throw Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:((0,v.hu)(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,r,n){let i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);let s=ReadonlyRestClient.getListenId_(e,r),o={};this.listens_[s]=o;let a=queryParamsToRestQueryStringParameters(e._queryParams);this.restRequest_(i+".json",a,(e,t)=>{let a=t;404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(i,a,!1,r),(0,v.DV)(this.listens_,s)===o&&n(e?401===e?"permission_denied":"rest_error:"+e:"ok",null)})}unlisten(e,t){let r=ReadonlyRestClient.getListenId_(e,t);delete this.listens_[r]}get(e){let t=queryParamsToRestQueryStringParameters(e._queryParams),r=e._path.toString(),n=new v.BH;return this.restRequest_(r+".json",t,(e,t)=>{let i=t;404===e&&(i=null,e=null),null===e?(this.onDataUpdate_(r,i,!1,null),n.resolve(i)):n.reject(Error(i))}),n.promise}refreshAuthToken(e){}restRequest_(e,t={},r){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([n,i])=>{n&&n.accessToken&&(t.auth=n.accessToken),i&&i.token&&(t.ac=i.token);let s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+(0,v.xO)(t);this.log_("Sending REST request for "+s);let o=new XMLHttpRequest;o.onreadystatechange=()=>{if(r&&4===o.readyState){this.log_("REST Response for "+s+" received. status:",o.status,"response:",o.responseText);let e=null;if(o.status>=200&&o.status<300){try{e=(0,v.cI)(o.responseText)}catch(e){warn("Failed to parse JSON response for "+s+": "+o.responseText)}r(null,e)}else 401!==o.status&&404!==o.status&&warn("Got unsuccessful REST response for "+s+" Status: "+o.status),r(o.status);r=null}},o.open("GET",s,!0),o.send()})}};/**
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
 */let SnapshotHolder=class SnapshotHolder{constructor(){this.rootNode_=ChildrenNode.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}};/**
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
 */function newSparseSnapshotTree(){return{value:null,children:new Map}}function sparseSnapshotTreeForEachTree(e,t,r){null!==e.value?r(t,e.value):function(e,t){e.children.forEach((e,r)=>{t(r,e)})}(e,(e,n)=>{let i=new Path(t.toString()+"/"+e);sparseSnapshotTreeForEachTree(n,i,r)})}/**
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
 */let StatsListener=class StatsListener{constructor(e){this.collection_=e,this.last_=null}get(){let e=this.collection_.get(),t=Object.assign({},e);return this.last_&&each(this.last_,(e,r)=>{t[e]=t[e]-r}),this.last_=e,t}};let StatsReporter=class StatsReporter{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new StatsListener(e),setTimeoutNonBlocking(this.reportStats_.bind(this),Math.floor(1e4+2e4*Math.random()))}reportStats_(){let e=this.statsListener_.get(),t={},r=!1;each(e,(e,n)=>{n>0&&(0,v.r3)(this.statsToReport_,e)&&(t[e]=n,r=!0)}),r&&this.server_.reportStats(t),setTimeoutNonBlocking(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}};function newOperationSourceUser(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function newOperationSourceServer(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function newOperationSourceServerTaggedQuery(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}(f=_||(_={}))[f.OVERWRITE=0]="OVERWRITE",f[f.MERGE=1]="MERGE",f[f.ACK_USER_WRITE=2]="ACK_USER_WRITE",f[f.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";/**
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
 */let AckUserWrite=class AckUserWrite{constructor(e,t,r){this.path=e,this.affectedTree=t,this.revert=r,this.type=_.ACK_USER_WRITE,this.source=newOperationSourceUser()}operationForChild(e){if(!pathIsEmpty(this.path))return(0,v.hu)(pathGetFront(this.path)===e,"operationForChild called for unrelated child."),new AckUserWrite(pathPopFront(this.path),this.affectedTree,this.revert);if(null!=this.affectedTree.value)return(0,v.hu)(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{let t=this.affectedTree.subtree(new Path(e));return new AckUserWrite(newEmptyPath(),t,this.revert)}}};/**
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
 */let ListenComplete=class ListenComplete{constructor(e,t){this.source=e,this.path=t,this.type=_.LISTEN_COMPLETE}operationForChild(e){return pathIsEmpty(this.path)?new ListenComplete(this.source,newEmptyPath()):new ListenComplete(this.source,pathPopFront(this.path))}};/**
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
 */let Overwrite=class Overwrite{constructor(e,t,r){this.source=e,this.path=t,this.snap=r,this.type=_.OVERWRITE}operationForChild(e){return pathIsEmpty(this.path)?new Overwrite(this.source,newEmptyPath(),this.snap.getImmediateChild(e)):new Overwrite(this.source,pathPopFront(this.path),this.snap)}};/**
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
 */let Merge=class Merge{constructor(e,t,r){this.source=e,this.path=t,this.children=r,this.type=_.MERGE}operationForChild(e){if(!pathIsEmpty(this.path))return(0,v.hu)(pathGetFront(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Merge(this.source,pathPopFront(this.path),this.children);{let t=this.children.subtree(new Path(e));return t.isEmpty()?null:t.value?new Overwrite(this.source,newEmptyPath(),t.value):new Merge(this.source,newEmptyPath(),t)}}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}};/**
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
 */let CacheNode=class CacheNode{constructor(e,t,r){this.node_=e,this.fullyInitialized_=t,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(pathIsEmpty(e))return this.isFullyInitialized()&&!this.filtered_;let t=pathGetFront(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}};/**
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
 */let EventGenerator=class EventGenerator{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}};function eventGeneratorGenerateEventsForType(e,t,r,n,i,s){let o=n.filter(e=>e.type===r);o.sort((t,r)=>(function(e,t,r){if(null==t.childName||null==r.childName)throw(0,v.g5)("Should only compare child_ events.");let n=new NamedNode(t.childName,t.snapshotNode),i=new NamedNode(r.childName,r.snapshotNode);return e.index_.compare(n,i)})(e,t,r)),o.forEach(r=>{let n=("value"===r.type||"child_removed"===r.type||(r.prevName=s.getPredecessorChildName(r.childName,r.snapshotNode,e.index_)),r);i.forEach(i=>{i.respondsTo(r.type)&&t.push(i.createEvent(n,e.query_))})})}/**
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
 */function newViewCache(e,t){return{eventCache:e,serverCache:t}}function viewCacheUpdateEventSnap(e,t,r,n){return newViewCache(new CacheNode(t,r,n),e.serverCache)}function viewCacheUpdateServerSnap(e,t,r,n){return newViewCache(e.eventCache,new CacheNode(t,r,n))}function viewCacheGetCompleteEventSnap(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function viewCacheGetCompleteServerSnap(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}let EmptyChildren=()=>(c||(c=new SortedMap(stringCompare)),c);let ImmutableTree=class ImmutableTree{constructor(e,t=EmptyChildren()){this.value=e,this.children=t}static fromObject(e){let t=new ImmutableTree(null);return each(e,(e,r)=>{t=t.set(new Path(e),r)}),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:newEmptyPath(),value:this.value};if(pathIsEmpty(e))return null;{let r=pathGetFront(e),n=this.children.get(r);if(null===n)return null;{let i=n.findRootMostMatchingPathAndValue(pathPopFront(e),t);if(null==i)return null;{let e=pathChild(new Path(r),i.path);return{path:e,value:i.value}}}}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(pathIsEmpty(e))return this;{let t=pathGetFront(e),r=this.children.get(t);return null!==r?r.subtree(pathPopFront(e)):new ImmutableTree(null)}}set(e,t){if(pathIsEmpty(e))return new ImmutableTree(t,this.children);{let r=pathGetFront(e),n=this.children.get(r)||new ImmutableTree(null),i=n.set(pathPopFront(e),t),s=this.children.insert(r,i);return new ImmutableTree(this.value,s)}}remove(e){if(pathIsEmpty(e))return this.children.isEmpty()?new ImmutableTree(null):new ImmutableTree(null,this.children);{let t=pathGetFront(e),r=this.children.get(t);if(!r)return this;{let n;let i=r.remove(pathPopFront(e));return(n=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&n.isEmpty())?new ImmutableTree(null):new ImmutableTree(this.value,n)}}}get(e){if(pathIsEmpty(e))return this.value;{let t=pathGetFront(e),r=this.children.get(t);return r?r.get(pathPopFront(e)):null}}setTree(e,t){if(pathIsEmpty(e))return t;{let r;let n=pathGetFront(e),i=this.children.get(n)||new ImmutableTree(null),s=i.setTree(pathPopFront(e),t);return r=s.isEmpty()?this.children.remove(n):this.children.insert(n,s),new ImmutableTree(this.value,r)}}fold(e){return this.fold_(newEmptyPath(),e)}fold_(e,t){let r={};return this.children.inorderTraversal((n,i)=>{r[n]=i.fold_(pathChild(e,n),t)}),t(e,this.value,r)}findOnPath(e,t){return this.findOnPath_(e,newEmptyPath(),t)}findOnPath_(e,t,r){let n=!!this.value&&r(t,this.value);if(n)return n;if(pathIsEmpty(e))return null;{let n=pathGetFront(e),i=this.children.get(n);return i?i.findOnPath_(pathPopFront(e),pathChild(t,n),r):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,newEmptyPath(),t)}foreachOnPath_(e,t,r){if(pathIsEmpty(e))return this;{this.value&&r(t,this.value);let n=pathGetFront(e),i=this.children.get(n);return i?i.foreachOnPath_(pathPopFront(e),pathChild(t,n),r):new ImmutableTree(null)}}foreach(e){this.foreach_(newEmptyPath(),e)}foreach_(e,t){this.children.inorderTraversal((r,n)=>{n.foreach_(pathChild(e,r),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,r)=>{r.value&&e(t,r.value)})}};/**
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
 */let CompoundWrite=class CompoundWrite{constructor(e){this.writeTree_=e}static empty(){return new CompoundWrite(new ImmutableTree(null))}};function compoundWriteAddWrite(e,t,r){if(pathIsEmpty(t))return new CompoundWrite(new ImmutableTree(r));{let n=e.writeTree_.findRootMostValueAndPath(t);if(null!=n){let i=n.path,s=n.value,o=newRelativePath(i,t);return s=s.updateChild(o,r),new CompoundWrite(e.writeTree_.set(i,s))}{let n=new ImmutableTree(r),i=e.writeTree_.setTree(t,n);return new CompoundWrite(i)}}}function compoundWriteAddWrites(e,t,r){let n=e;return each(r,(e,r)=>{n=compoundWriteAddWrite(n,pathChild(t,e),r)}),n}function compoundWriteRemoveWrite(e,t){if(pathIsEmpty(t))return CompoundWrite.empty();{let r=e.writeTree_.setTree(t,new ImmutableTree(null));return new CompoundWrite(r)}}function compoundWriteHasCompleteWrite(e,t){return null!=compoundWriteGetCompleteNode(e,t)}function compoundWriteGetCompleteNode(e,t){let r=e.writeTree_.findRootMostValueAndPath(t);return null!=r?e.writeTree_.get(r.path).getChild(newRelativePath(r.path,t)):null}function compoundWriteGetCompleteChildren(e){let t=[],r=e.writeTree_.value;return null!=r?r.isLeafNode()||r.forEachChild(B,(e,r)=>{t.push(new NamedNode(e,r))}):e.writeTree_.children.inorderTraversal((e,r)=>{null!=r.value&&t.push(new NamedNode(e,r.value))}),t}function compoundWriteChildCompoundWrite(e,t){if(pathIsEmpty(t))return e;{let r=compoundWriteGetCompleteNode(e,t);return new CompoundWrite(null!=r?new ImmutableTree(r):e.writeTree_.subtree(t))}}function compoundWriteIsEmpty(e){return e.writeTree_.isEmpty()}function compoundWriteApply(e,t){return function applySubtreeWrite(e,t,r){if(null!=t.value)return r.updateChild(e,t.value);{let n=null;return t.children.inorderTraversal((t,i)=>{".priority"===t?((0,v.hu)(null!==i.value,"Priority writes must always be leaf nodes"),n=i.value):r=applySubtreeWrite(pathChild(e,t),i,r)}),r.getChild(e).isEmpty()||null===n||(r=r.updateChild(pathChild(e,".priority"),n)),r}}(newEmptyPath(),e.writeTree_,t)}function writeTreeDefaultFilter_(e){return e.visible}function writeTreeLayerTree_(e,t,r){let n=CompoundWrite.empty();for(let i=0;i<e.length;++i){let s=e[i];if(t(s)){let e;let t=s.path;if(s.snap)pathContains(r,t)?n=compoundWriteAddWrite(n,e=newRelativePath(r,t),s.snap):pathContains(t,r)&&(e=newRelativePath(t,r),n=compoundWriteAddWrite(n,newEmptyPath(),s.snap.getChild(e)));else if(s.children){if(pathContains(r,t))n=compoundWriteAddWrites(n,e=newRelativePath(r,t),s.children);else if(pathContains(t,r)){if(pathIsEmpty(e=newRelativePath(t,r)))n=compoundWriteAddWrites(n,newEmptyPath(),s.children);else{let t=(0,v.DV)(s.children,pathGetFront(e));if(t){let r=t.getChild(pathPopFront(e));n=compoundWriteAddWrite(n,newEmptyPath(),r)}}}}else throw(0,v.g5)("WriteRecord should have .snap or .children")}}return n}function writeTreeCalcCompleteEventCache(e,t,r,n,i){if(n||i){let s=compoundWriteChildCompoundWrite(e.visibleWrites,t);if(!i&&compoundWriteIsEmpty(s))return r;if(!i&&null==r&&!compoundWriteHasCompleteWrite(s,newEmptyPath()))return null;{let s=writeTreeLayerTree_(e.allWrites,function(e){return(e.visible||i)&&(!n||!~n.indexOf(e.writeId))&&(pathContains(e.path,t)||pathContains(t,e.path))},t),o=r||ChildrenNode.EMPTY_NODE;return compoundWriteApply(s,o)}}{let n=compoundWriteGetCompleteNode(e.visibleWrites,t);if(null!=n)return n;{let n=compoundWriteChildCompoundWrite(e.visibleWrites,t);if(compoundWriteIsEmpty(n))return r;if(null==r&&!compoundWriteHasCompleteWrite(n,newEmptyPath()))return null;{let e=r||ChildrenNode.EMPTY_NODE;return compoundWriteApply(n,e)}}}}function writeTreeRefCalcCompleteEventCache(e,t,r,n){return writeTreeCalcCompleteEventCache(e.writeTree,e.treePath,t,r,n)}function writeTreeRefCalcCompleteEventChildren(e,t){return function(e,t,r){let n=ChildrenNode.EMPTY_NODE,i=compoundWriteGetCompleteNode(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(B,(e,t)=>{n=n.updateImmediateChild(e,t)}),n;if(r){let i=compoundWriteChildCompoundWrite(e.visibleWrites,t);return r.forEachChild(B,(e,t)=>{let r=compoundWriteApply(compoundWriteChildCompoundWrite(i,new Path(e)),t);n=n.updateImmediateChild(e,r)}),compoundWriteGetCompleteChildren(i).forEach(e=>{n=n.updateImmediateChild(e.name,e.node)}),n}{let r=compoundWriteChildCompoundWrite(e.visibleWrites,t);return compoundWriteGetCompleteChildren(r).forEach(e=>{n=n.updateImmediateChild(e.name,e.node)}),n}}(e.writeTree,e.treePath,t)}function writeTreeRefCalcEventCacheAfterServerOverwrite(e,t,r,n){return function(e,t,r,n,i){(0,v.hu)(n||i,"Either existingEventSnap or existingServerSnap must exist");let s=pathChild(t,r);if(compoundWriteHasCompleteWrite(e.visibleWrites,s))return null;{let t=compoundWriteChildCompoundWrite(e.visibleWrites,s);return compoundWriteIsEmpty(t)?i.getChild(r):compoundWriteApply(t,i.getChild(r))}}(e.writeTree,e.treePath,t,r,n)}function writeTreeRefShadowingWrite(e,t){var r,n;return r=e.writeTree,n=pathChild(e.treePath,t),compoundWriteGetCompleteNode(r.visibleWrites,n)}function writeTreeRefCalcCompleteChild(e,t,r){return function(e,t,r,n){let i=pathChild(t,r),s=compoundWriteGetCompleteNode(e.visibleWrites,i);if(null!=s)return s;if(!n.isCompleteForChild(r))return null;{let t=compoundWriteChildCompoundWrite(e.visibleWrites,i);return compoundWriteApply(t,n.getNode().getImmediateChild(r))}}(e.writeTree,e.treePath,t,r)}function writeTreeRefChild(e,t){return newWriteTreeRef(pathChild(e.treePath,t),e.writeTree)}function newWriteTreeRef(e,t){return{treePath:e,writeTree:t}}/**
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
 */let ChildChangeAccumulator=class ChildChangeAccumulator{constructor(){this.changeMap=new Map}trackChildChange(e){let t=e.type,r=e.childName;(0,v.hu)("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),(0,v.hu)(".priority"!==r,"Only non-priority child changes can be tracked.");let n=this.changeMap.get(r);if(n){let i=n.type;if("child_added"===t&&"child_removed"===i)this.changeMap.set(r,changeChildChanged(r,e.snapshotNode,n.snapshotNode));else if("child_removed"===t&&"child_added"===i)this.changeMap.delete(r);else if("child_removed"===t&&"child_changed"===i)this.changeMap.set(r,changeChildRemoved(r,n.oldSnap));else if("child_changed"===t&&"child_added"===i)this.changeMap.set(r,changeChildAdded(r,e.snapshotNode));else if("child_changed"===t&&"child_changed"===i)this.changeMap.set(r,changeChildChanged(r,e.snapshotNode,n.oldSnap));else throw(0,v.g5)("Illegal combination of changes: "+e+" occurred after "+n)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}};let z=new /**
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
 */class{getCompleteChild(e){return null}getChildAfterChild(e,t,r){return null}};let WriteTreeCompleteChildSource=class WriteTreeCompleteChildSource{constructor(e,t,r=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=r}getCompleteChild(e){let t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{let t=null!=this.optCompleteServerCache_?new CacheNode(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return writeTreeRefCalcCompleteChild(this.writes_,e,t)}}getChildAfterChild(e,t,r){var n;let i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:viewCacheGetCompleteServerSnap(this.viewCache_),s=function(e,t,r,n,i,s,o){let a;let l=compoundWriteChildCompoundWrite(e.visibleWrites,t),h=compoundWriteGetCompleteNode(l,newEmptyPath());if(null!=h)a=h;else{if(null==r)return[];a=compoundWriteApply(l,r)}if((a=a.withIndex(o)).isEmpty()||a.isLeafNode())return[];{let e=[],t=o.getCompare(),r=s?a.getReverseIteratorFrom(n,o):a.getIteratorFrom(n,o),i=r.getNext();for(;i&&e.length<1;)0!==t(i,n)&&e.push(i),i=r.getNext();return e}}((n=this.writes_).writeTree,n.treePath,i,t,0,r,e);return 0===s.length?null:s[0]}};function viewProcessorGenerateEventCacheAfterServerEvent(e,t,r,n,i,s){let o=t.eventCache;if(null!=writeTreeRefShadowingWrite(n,r))return t;{let a,l;if(pathIsEmpty(r)){if((0,v.hu)(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){let r=viewCacheGetCompleteServerSnap(t),i=r instanceof ChildrenNode?r:ChildrenNode.EMPTY_NODE,o=writeTreeRefCalcCompleteEventChildren(n,i);a=e.filter.updateFullNode(t.eventCache.getNode(),o,s)}else{let r=writeTreeRefCalcCompleteEventCache(n,viewCacheGetCompleteServerSnap(t));a=e.filter.updateFullNode(t.eventCache.getNode(),r,s)}}else{let h=pathGetFront(r);if(".priority"===h){(0,v.hu)(1===pathGetLength(r),"Can't have a priority with additional path components");let i=o.getNode();l=t.serverCache.getNode();let s=writeTreeRefCalcEventCacheAfterServerOverwrite(n,r,i,l);a=null!=s?e.filter.updatePriority(i,s):o.getNode()}else{let c;let u=pathPopFront(r);if(o.isCompleteForChild(h)){l=t.serverCache.getNode();let e=writeTreeRefCalcEventCacheAfterServerOverwrite(n,r,o.getNode(),l);c=null!=e?o.getNode().getImmediateChild(h).updateChild(u,e):o.getNode().getImmediateChild(h)}else c=writeTreeRefCalcCompleteChild(n,h,t.serverCache);a=null!=c?e.filter.updateChild(o.getNode(),h,c,u,i,s):o.getNode()}}return viewCacheUpdateEventSnap(t,a,o.isFullyInitialized()||pathIsEmpty(r),e.filter.filtersNodes())}}function viewProcessorApplyServerOverwrite(e,t,r,n,i,s,o,a){let l;let h=t.serverCache,c=o?e.filter:e.filter.getIndexedFilter();if(pathIsEmpty(r))l=c.updateFullNode(h.getNode(),n,null);else if(c.filtersNodes()&&!h.isFiltered()){let e=h.getNode().updateChild(r,n);l=c.updateFullNode(h.getNode(),e,null)}else{let e=pathGetFront(r);if(!h.isCompleteForPath(r)&&pathGetLength(r)>1)return t;let i=pathPopFront(r),s=h.getNode().getImmediateChild(e),o=s.updateChild(i,n);l=".priority"===e?c.updatePriority(h.getNode(),o):c.updateChild(h.getNode(),e,o,i,z,null)}let u=viewCacheUpdateServerSnap(t,l,h.isFullyInitialized()||pathIsEmpty(r),c.filtersNodes()),d=new WriteTreeCompleteChildSource(i,u,s);return viewProcessorGenerateEventCacheAfterServerEvent(e,u,r,i,d,a)}function viewProcessorApplyUserOverwrite(e,t,r,n,i,s,o){let a,l;let h=t.eventCache,c=new WriteTreeCompleteChildSource(i,t,s);if(pathIsEmpty(r))l=e.filter.updateFullNode(t.eventCache.getNode(),n,o),a=viewCacheUpdateEventSnap(t,l,!0,e.filter.filtersNodes());else{let i=pathGetFront(r);if(".priority"===i)l=e.filter.updatePriority(t.eventCache.getNode(),n),a=viewCacheUpdateEventSnap(t,l,h.isFullyInitialized(),h.isFiltered());else{let s;let l=pathPopFront(r),u=h.getNode().getImmediateChild(i);if(pathIsEmpty(l))s=n;else{let e=c.getCompleteChild(i);s=null!=e?".priority"===pathGetBack(l)&&e.getChild(pathParent(l)).isEmpty()?e:e.updateChild(l,n):ChildrenNode.EMPTY_NODE}if(u.equals(s))a=t;else{let r=e.filter.updateChild(h.getNode(),i,s,l,c,o);a=viewCacheUpdateEventSnap(t,r,h.isFullyInitialized(),e.filter.filtersNodes())}}}return a}function viewProcessorCacheHasChild(e,t){return e.eventCache.isCompleteForChild(t)}function viewProcessorApplyMerge(e,t,r){return r.foreach((e,r)=>{t=t.updateChild(e,r)}),t}function viewProcessorApplyServerMerge(e,t,r,n,i,s,o,a){let l;if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let h=t;l=pathIsEmpty(r)?n:new ImmutableTree(null).setTree(r,n);let c=t.serverCache.getNode();return l.children.inorderTraversal((r,n)=>{if(c.hasChild(r)){let l=t.serverCache.getNode().getImmediateChild(r),c=viewProcessorApplyMerge(e,l,n);h=viewProcessorApplyServerOverwrite(e,h,new Path(r),c,i,s,o,a)}}),l.children.inorderTraversal((r,n)=>{let l=!t.serverCache.isCompleteForChild(r)&&null===n.value;if(!c.hasChild(r)&&!l){let l=t.serverCache.getNode().getImmediateChild(r),c=viewProcessorApplyMerge(e,l,n);h=viewProcessorApplyServerOverwrite(e,h,new Path(r),c,i,s,o,a)}}),h}/**
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
 */let View=class View{constructor(e,t){this.query_=e,this.eventRegistrations_=[];let r=this.query_._queryParams,n=new IndexedFilter(r.getIndex()),i=r.loadsAllData()?new IndexedFilter(r.getIndex()):r.hasLimit()?new LimitedFilter(r):new RangedFilter(r);this.processor_={filter:i};let s=t.serverCache,o=t.eventCache,a=n.updateFullNode(ChildrenNode.EMPTY_NODE,s.getNode(),null),l=i.updateFullNode(ChildrenNode.EMPTY_NODE,o.getNode(),null),h=new CacheNode(a,s.isFullyInitialized(),n.filtersNodes()),c=new CacheNode(l,o.isFullyInitialized(),i.filtersNodes());this.viewCache_=newViewCache(c,h),this.eventGenerator_=new EventGenerator(this.query_)}get query(){return this.query_}};function viewIsEmpty(e){return 0===e.eventRegistrations_.length}function viewRemoveEventRegistration(e,t,r){let n=[];if(r){(0,v.hu)(null==t,"A cancel should cancel all event registrations.");let i=e.query._path;e.eventRegistrations_.forEach(e=>{let t=e.createCancelEvent(r,i);t&&n.push(t)})}if(t){let r=[];for(let n=0;n<e.eventRegistrations_.length;++n){let i=e.eventRegistrations_[n];if(i.matches(t)){if(t.hasAnyCallback()){r=r.concat(e.eventRegistrations_.slice(n+1));break}}else r.push(i)}e.eventRegistrations_=r}else e.eventRegistrations_=[];return n}function viewApplyOperation(e,t,r,n){var i,s;t.type===_.MERGE&&null!==t.source.queryId&&((0,v.hu)(viewCacheGetCompleteServerSnap(e.viewCache_),"We should always have a full cache before handling merges"),(0,v.hu)(viewCacheGetCompleteEventSnap(e.viewCache_),"Missing event cache, even though we have a server cache"));let o=e.viewCache_,a=function(e,t,r,n,i){let s,o;let a=new ChildChangeAccumulator;if(r.type===_.OVERWRITE)r.source.fromUser?s=viewProcessorApplyUserOverwrite(e,t,r.path,r.snap,n,i,a):((0,v.hu)(r.source.fromServer,"Unknown source."),o=r.source.tagged||t.serverCache.isFiltered()&&!pathIsEmpty(r.path),s=viewProcessorApplyServerOverwrite(e,t,r.path,r.snap,n,i,o,a));else if(r.type===_.MERGE){var l,h;let c;r.source.fromUser?(l=r.path,h=r.children,c=t,h.foreach((r,s)=>{let o=pathChild(l,r);viewProcessorCacheHasChild(t,pathGetFront(o))&&(c=viewProcessorApplyUserOverwrite(e,c,o,s,n,i,a))}),h.foreach((r,s)=>{let o=pathChild(l,r);viewProcessorCacheHasChild(t,pathGetFront(o))||(c=viewProcessorApplyUserOverwrite(e,c,o,s,n,i,a))}),s=c):((0,v.hu)(r.source.fromServer,"Unknown source."),o=r.source.tagged||t.serverCache.isFiltered(),s=viewProcessorApplyServerMerge(e,t,r.path,r.children,n,i,o,a))}else if(r.type===_.ACK_USER_WRITE)s=r.revert?function(e,t,r,n,i,s){let o;if(null!=writeTreeRefShadowingWrite(n,r))return t;{let a;let l=new WriteTreeCompleteChildSource(n,t,i),h=t.eventCache.getNode();if(pathIsEmpty(r)||".priority"===pathGetFront(r)){let r;if(t.serverCache.isFullyInitialized())r=writeTreeRefCalcCompleteEventCache(n,viewCacheGetCompleteServerSnap(t));else{let e=t.serverCache.getNode();(0,v.hu)(e instanceof ChildrenNode,"serverChildren would be complete if leaf node"),r=writeTreeRefCalcCompleteEventChildren(n,e)}a=e.filter.updateFullNode(h,r,s)}else{let i=pathGetFront(r),c=writeTreeRefCalcCompleteChild(n,i,t.serverCache);null==c&&t.serverCache.isCompleteForChild(i)&&(c=h.getImmediateChild(i)),(a=null!=c?e.filter.updateChild(h,i,c,pathPopFront(r),l,s):t.eventCache.getNode().hasChild(i)?e.filter.updateChild(h,i,ChildrenNode.EMPTY_NODE,pathPopFront(r),l,s):h).isEmpty()&&t.serverCache.isFullyInitialized()&&(o=writeTreeRefCalcCompleteEventCache(n,viewCacheGetCompleteServerSnap(t))).isLeafNode()&&(a=e.filter.updateFullNode(a,o,s))}return o=t.serverCache.isFullyInitialized()||null!=writeTreeRefShadowingWrite(n,newEmptyPath()),viewCacheUpdateEventSnap(t,a,o,e.filter.filtersNodes())}}(e,t,r.path,n,i,a):function(e,t,r,n,i,s,o){if(null!=writeTreeRefShadowingWrite(i,r))return t;let a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=n.value){if(pathIsEmpty(r)&&l.isFullyInitialized()||l.isCompleteForPath(r))return viewProcessorApplyServerOverwrite(e,t,r,l.getNode().getChild(r),i,s,a,o);if(!pathIsEmpty(r))return t;{let n=new ImmutableTree(null);return l.getNode().forEachChild(q,(e,t)=>{n=n.set(new Path(e),t)}),viewProcessorApplyServerMerge(e,t,r,n,i,s,a,o)}}{let h=new ImmutableTree(null);return n.foreach((e,t)=>{let n=pathChild(r,e);l.isCompleteForPath(n)&&(h=h.set(e,l.getNode().getChild(n)))}),viewProcessorApplyServerMerge(e,t,r,h,i,s,a,o)}}(e,t,r.path,r.affectedTree,n,i,a);else if(r.type===_.LISTEN_COMPLETE)s=function(e,t,r,n,i){let s=t.serverCache,o=viewCacheUpdateServerSnap(t,s.getNode(),s.isFullyInitialized()||pathIsEmpty(r),s.isFiltered());return viewProcessorGenerateEventCacheAfterServerEvent(e,o,r,n,z,i)}(e,t,r.path,n,a);else throw(0,v.g5)("Unknown operation type: "+r.type);let c=a.getChanges();return function(e,t,r){let n=t.eventCache;if(n.isFullyInitialized()){let i=n.getNode().isLeafNode()||n.getNode().isEmpty(),s=viewCacheGetCompleteEventSnap(e);!(r.length>0)&&e.eventCache.isFullyInitialized()&&(!i||n.getNode().equals(s))&&n.getNode().getPriority().equals(s.getPriority())||r.push(changeValue(viewCacheGetCompleteEventSnap(t)))}}(t,s,c),{viewCache:s,changes:c}}(e.processor_,o,t,r,n);return i=e.processor_,s=a.viewCache,(0,v.hu)(s.eventCache.getNode().isIndexed(i.filter.getIndex()),"Event snap not indexed"),(0,v.hu)(s.serverCache.getNode().isIndexed(i.filter.getIndex()),"Server snap not indexed"),(0,v.hu)(a.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=a.viewCache,viewGenerateEventsForChanges_(e,a.changes,a.viewCache.eventCache.getNode(),null)}function viewGenerateEventsForChanges_(e,t,r,n){let i=n?[n]:e.eventRegistrations_;return function(e,t,r,n){let i=[],s=[];return t.forEach(t=>{if("child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)){var r;s.push((r=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:r}))}}),eventGeneratorGenerateEventsForType(e,i,"child_removed",t,n,r),eventGeneratorGenerateEventsForType(e,i,"child_added",t,n,r),eventGeneratorGenerateEventsForType(e,i,"child_moved",s,n,r),eventGeneratorGenerateEventsForType(e,i,"child_changed",t,n,r),eventGeneratorGenerateEventsForType(e,i,"value",t,n,r),i}(e.eventGenerator_,t,r,i)}let SyncPoint=class SyncPoint{constructor(){this.views=new Map}};function syncPointApplyOperation(e,t,r,n){let i=t.source.queryId;if(null!==i){let s=e.views.get(i);return(0,v.hu)(null!=s,"SyncTree gave us an op for an invalid query."),viewApplyOperation(s,t,r,n)}{let i=[];for(let s of e.views.values())i=i.concat(viewApplyOperation(s,t,r,n));return i}}function syncPointGetQueryViews(e){let t=[];for(let r of e.views.values())r.query._queryParams.loadsAllData()||t.push(r);return t}function syncPointGetCompleteServerCache(e,t){let r=null;for(let n of e.views.values())r=r||function(e,t){let r=viewCacheGetCompleteServerSnap(e.viewCache_);return r&&(e.query._queryParams.loadsAllData()||!pathIsEmpty(t)&&!r.getImmediateChild(pathGetFront(t)).isEmpty())?r.getChild(t):null}(n,t);return r}function syncPointViewForQuery(e,t){let r=t._queryParams;if(r.loadsAllData())return syncPointGetCompleteView(e);{let r=t._queryIdentifier;return e.views.get(r)}}function syncPointHasCompleteView(e){return null!=syncPointGetCompleteView(e)}function syncPointGetCompleteView(e){for(let t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}let $=1;let SyncTree=class SyncTree{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ImmutableTree(null),this.pendingWriteTree_={visibleWrites:CompoundWrite.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}};function syncTreeApplyUserOverwrite(e,t,r,n,i){var s,o;return(s=e.pendingWriteTree_,o=i,(0,v.hu)(n>s.lastWriteId,"Stacking an older write on top of newer ones"),void 0===o&&(o=!0),s.allWrites.push({path:t,snap:r,writeId:n,visible:o}),o&&(s.visibleWrites=compoundWriteAddWrite(s.visibleWrites,t,r)),s.lastWriteId=n,i)?syncTreeApplyOperationToSyncPoints_(e,new Overwrite(newOperationSourceUser(),t,r)):[]}function syncTreeAckUserWrite(e,t,r=!1){let n=function(e,t){for(let r=0;r<e.allWrites.length;r++){let n=e.allWrites[r];if(n.writeId===t)return n}return null}(e.pendingWriteTree_,t),i=function(e,t){let r=e.allWrites.findIndex(e=>e.writeId===t);(0,v.hu)(r>=0,"removeWrite called with nonexistent writeId.");let n=e.allWrites[r];e.allWrites.splice(r,1);let i=n.visible,s=!1,o=e.allWrites.length-1;for(;i&&o>=0;){let t=e.allWrites[o];t.visible&&(o>=r&&function(e,t){if(e.snap)return pathContains(e.path,t);for(let r in e.children)if(e.children.hasOwnProperty(r)&&pathContains(pathChild(e.path,r),t))return!0;return!1}(t,n.path)?i=!1:pathContains(n.path,t.path)&&(s=!0)),o--}if(!i)return!1;if(s)return e.visibleWrites=writeTreeLayerTree_(e.allWrites,writeTreeDefaultFilter_,newEmptyPath()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1,!0;if(n.snap)e.visibleWrites=compoundWriteRemoveWrite(e.visibleWrites,n.path);else{let t=n.children;each(t,t=>{e.visibleWrites=compoundWriteRemoveWrite(e.visibleWrites,pathChild(n.path,t))})}return!0}(e.pendingWriteTree_,t);if(!i)return[];{let t=new ImmutableTree(null);return null!=n.snap?t=t.set(newEmptyPath(),!0):each(n.children,e=>{t=t.set(new Path(e),!0)}),syncTreeApplyOperationToSyncPoints_(e,new AckUserWrite(n.path,t,r))}}function syncTreeApplyServerOverwrite(e,t,r){return syncTreeApplyOperationToSyncPoints_(e,new Overwrite(newOperationSourceServer(),t,r))}function syncTreeRemoveEventRegistration(e,t,r,n,i=!1){let s=t._path,o=e.syncPointTree_.get(s),a=[];if(o&&("default"===t._queryIdentifier||null!=syncPointViewForQuery(o,t))){let l=function(e,t,r,n){let i=t._queryIdentifier,s=[],o=[],a=syncPointHasCompleteView(e);if("default"===i)for(let[t,i]of e.views.entries())o=o.concat(viewRemoveEventRegistration(i,r,n)),viewIsEmpty(i)&&(e.views.delete(t),i.query._queryParams.loadsAllData()||s.push(i.query));else{let t=e.views.get(i);t&&(o=o.concat(viewRemoveEventRegistration(t,r,n)),viewIsEmpty(t)&&(e.views.delete(i),t.query._queryParams.loadsAllData()||s.push(t.query)))}return a&&!syncPointHasCompleteView(e)&&s.push(new((0,v.hu)(u,"Reference.ts has not been loaded"),u)(t._repo,t._path)),{removed:s,events:o}}(o,t,r,n);0===o.views.size&&(e.syncPointTree_=e.syncPointTree_.remove(s));let h=l.removed;if(a=l.events,!i){let r=-1!==h.findIndex(e=>e._queryParams.loadsAllData()),i=e.syncPointTree_.findOnPath(s,(e,t)=>syncPointHasCompleteView(t));if(r&&!i){let t=e.syncPointTree_.subtree(s);if(!t.isEmpty()){let r=t.fold((e,t,r)=>{if(t&&syncPointHasCompleteView(t)){let e=syncPointGetCompleteView(t);return[e]}{let e=[];return t&&(e=syncPointGetQueryViews(t)),each(r,(t,r)=>{e=e.concat(r)}),e}});for(let t=0;t<r.length;++t){let n=r[t],i=n.query,s=syncTreeCreateListenerForView_(e,n);e.listenProvider_.startListening(syncTreeQueryForListening_(i),syncTreeTagForQuery(e,i),s.hashFn,s.onComplete)}}}i||!(h.length>0)||n||(r?e.listenProvider_.stopListening(syncTreeQueryForListening_(t),null):h.forEach(t=>{let r=e.queryToTagMap.get(syncTreeMakeQueryKey_(t));e.listenProvider_.stopListening(syncTreeQueryForListening_(t),r)}))}!function(e,t){for(let r=0;r<t.length;++r){let n=t[r];if(!n._queryParams.loadsAllData()){let t=syncTreeMakeQueryKey_(n),r=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(r)}}}(e,h)}return a}function syncTreeAddEventRegistration(e,t,r,n=!1){let i;let s=t._path,o=null,a=!1;e.syncPointTree_.foreachOnPath(s,(e,t)=>{let r=newRelativePath(e,s);o=o||syncPointGetCompleteServerCache(t,r),a=a||syncPointHasCompleteView(t)});let l=e.syncPointTree_.get(s);if(l?(a=a||syncPointHasCompleteView(l),o=o||syncPointGetCompleteServerCache(l,newEmptyPath())):(l=new SyncPoint,e.syncPointTree_=e.syncPointTree_.set(s,l)),null!=o)i=!0;else{i=!1,o=ChildrenNode.EMPTY_NODE;let t=e.syncPointTree_.subtree(s);t.foreachChild((e,t)=>{let r=syncPointGetCompleteServerCache(t,newEmptyPath());r&&(o=o.updateImmediateChild(e,r))})}let h=null!=syncPointViewForQuery(l,t);if(!h&&!t._queryParams.loadsAllData()){let r=syncTreeMakeQueryKey_(t);(0,v.hu)(!e.queryToTagMap.has(r),"View does not exist, but we have a tag");let n=$++;e.queryToTagMap.set(r,n),e.tagToQueryMap.set(n,r)}let c=newWriteTreeRef(s,e.pendingWriteTree_),u=function(e,t,r,n,i,s){let o=function(e,t,r,n,i){let s=t._queryIdentifier,o=e.views.get(s);if(!o){let e=writeTreeRefCalcCompleteEventCache(r,i?n:null),s=!1;e?s=!0:(e=n instanceof ChildrenNode?writeTreeRefCalcCompleteEventChildren(r,n):ChildrenNode.EMPTY_NODE,s=!1);let o=newViewCache(new CacheNode(e,s,!1),new CacheNode(n,i,!1));return new View(t,o)}return o}(e,t,n,i,s);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),!function(e,t){e.eventRegistrations_.push(t)}(o,r),function(e,t){let r=e.viewCache_.eventCache,n=[];if(!r.getNode().isLeafNode()){let e=r.getNode();e.forEachChild(B,(e,t)=>{n.push(changeChildAdded(e,t))})}return r.isFullyInitialized()&&n.push(changeValue(r.getNode())),viewGenerateEventsForChanges_(e,n,r.getNode(),t)}(o,r)}(l,t,r,c,o,i);if(!h&&!a&&!n){let r=syncPointViewForQuery(l,t);u=u.concat(function(e,t,r){let n=t._path,i=syncTreeTagForQuery(e,t),s=syncTreeCreateListenerForView_(e,r),o=e.listenProvider_.startListening(syncTreeQueryForListening_(t),i,s.hashFn,s.onComplete),a=e.syncPointTree_.subtree(n);if(i)(0,v.hu)(!syncPointHasCompleteView(a.value),"If we're adding a query, it shouldn't be shadowed");else{let t=a.fold((e,t,r)=>{if(!pathIsEmpty(e)&&t&&syncPointHasCompleteView(t))return[syncPointGetCompleteView(t).query];{let e=[];return t&&(e=e.concat(syncPointGetQueryViews(t).map(e=>e.query))),each(r,(t,r)=>{e=e.concat(r)}),e}});for(let r=0;r<t.length;++r){let n=t[r];e.listenProvider_.stopListening(syncTreeQueryForListening_(n),syncTreeTagForQuery(e,n))}}return o}(e,t,r))}return u}function syncTreeCalcCompleteEventCache(e,t,r){let n=e.pendingWriteTree_,i=e.syncPointTree_.findOnPath(t,(e,r)=>{let n=newRelativePath(e,t),i=syncPointGetCompleteServerCache(r,n);if(i)return i});return writeTreeCalcCompleteEventCache(n,t,i,r,!0)}function syncTreeApplyOperationToSyncPoints_(e,t){var r;return function syncTreeApplyOperationHelper_(e,t,r,n){if(pathIsEmpty(e.path))return function syncTreeApplyOperationDescendantsHelper_(e,t,r,n){let i=t.get(newEmptyPath());null==r&&null!=i&&(r=syncPointGetCompleteServerCache(i,newEmptyPath()));let s=[];return t.children.inorderTraversal((t,i)=>{let o=r?r.getImmediateChild(t):null,a=writeTreeRefChild(n,t),l=e.operationForChild(t);l&&(s=s.concat(syncTreeApplyOperationDescendantsHelper_(l,i,o,a)))}),i&&(s=s.concat(syncPointApplyOperation(i,e,n,r))),s}(e,t,r,n);{let i=t.get(newEmptyPath());null==r&&null!=i&&(r=syncPointGetCompleteServerCache(i,newEmptyPath()));let s=[],o=pathGetFront(e.path),a=e.operationForChild(o),l=t.children.get(o);if(l&&a){let e=r?r.getImmediateChild(o):null,t=writeTreeRefChild(n,o);s=s.concat(syncTreeApplyOperationHelper_(a,l,e,t))}return i&&(s=s.concat(syncPointApplyOperation(i,e,n,r))),s}}(t,e.syncPointTree_,null,(r=e.pendingWriteTree_,newWriteTreeRef(newEmptyPath(),r)))}function syncTreeCreateListenerForView_(e,t){let r=t.query,n=syncTreeTagForQuery(e,r);return{hashFn:()=>{let e=t.viewCache_.serverCache.getNode()||ChildrenNode.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t){var i;return n?function(e,t,r){let n=syncTreeQueryKeyForTag_(e,r);if(!n)return[];{let r=syncTreeParseQueryKey_(n),i=r.path,s=r.queryId,o=newRelativePath(i,t),a=new ListenComplete(newOperationSourceServerTaggedQuery(s),o);return syncTreeApplyTaggedOperation_(e,i,a)}}(e,r._path,n):(i=r._path,syncTreeApplyOperationToSyncPoints_(e,new ListenComplete(newOperationSourceServer(),i)))}{let n=function(e,t){let r="Unknown Error";"too_big"===e?r="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?r="Client doesn't have permission to access the desired data.":"unavailable"===e&&(r="The service is unavailable");let n=Error(e+" at "+t._path.toString()+": "+r);return n.code=e.toUpperCase(),n}(t,r);return syncTreeRemoveEventRegistration(e,r,null,n)}}}}function syncTreeTagForQuery(e,t){let r=syncTreeMakeQueryKey_(t);return e.queryToTagMap.get(r)}function syncTreeMakeQueryKey_(e){return e._path.toString()+"$"+e._queryIdentifier}function syncTreeQueryKeyForTag_(e,t){return e.tagToQueryMap.get(t)}function syncTreeParseQueryKey_(e){let t=e.indexOf("$");return(0,v.hu)(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new Path(e.substr(0,t))}}function syncTreeApplyTaggedOperation_(e,t,r){let n=e.syncPointTree_.get(t);(0,v.hu)(n,"Missing sync point for query tag that we're tracking");let i=newWriteTreeRef(t,e.pendingWriteTree_);return syncPointApplyOperation(n,r,i,null)}function syncTreeQueryForListening_(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new((0,v.hu)(d,"Reference.ts has not been loaded"),d)(e._repo,e._path):e}/**
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
 */let ExistingValueProvider=class ExistingValueProvider{constructor(e){this.node_=e}getImmediateChild(e){let t=this.node_.getImmediateChild(e);return new ExistingValueProvider(t)}node(){return this.node_}};let DeferredValueProvider=class DeferredValueProvider{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){let t=pathChild(this.path_,e);return new DeferredValueProvider(this.syncTree_,t)}node(){return syncTreeCalcCompleteEventCache(this.syncTree_,this.path_)}};let resolveDeferredLeafValue=function(e,t,r){return e&&"object"==typeof e?((0,v.hu)(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"])?resolveScalarDeferredValue(e[".sv"],t,r):"object"==typeof e[".sv"]?resolveComplexDeferredValue(e[".sv"],t):void(0,v.hu)(!1,"Unexpected server value: "+JSON.stringify(e,null,2)):e},resolveScalarDeferredValue=function(e,t,r){if("timestamp"===e)return r.timestamp;(0,v.hu)(!1,"Unexpected server value: "+e)},resolveComplexDeferredValue=function(e,t,r){e.hasOwnProperty("increment")||(0,v.hu)(!1,"Unexpected server value: "+JSON.stringify(e,null,2));let n=e.increment;"number"!=typeof n&&(0,v.hu)(!1,"Unexpected increment value: "+n);let i=t.node();if((0,v.hu)(null!=i,"Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return n;let s=i.getValue();return"number"!=typeof s?n:s+n},resolveDeferredValueSnapshot=function(e,t,r){return resolveDeferredValue(e,new ExistingValueProvider(t),r)};function resolveDeferredValue(e,t,r){let n;let i=e.getPriority().val(),s=resolveDeferredLeafValue(i,t.getImmediateChild(".priority"),r);if(!e.isLeafNode())return n=e,s!==e.getPriority().val()&&(n=n.updatePriority(new LeafNode(s))),e.forEachChild(B,(e,i)=>{let s=resolveDeferredValue(i,t.getImmediateChild(e),r);s!==i&&(n=n.updateImmediateChild(e,s))}),n;{let n=resolveDeferredLeafValue(e.getValue(),t,r);return n!==e.getValue()||s!==e.getPriority().val()?new LeafNode(n,nodeFromJSON(s)):e}}/**
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
 */let Tree=class Tree{constructor(e="",t=null,r={children:{},childCount:0}){this.name=e,this.parent=t,this.node=r}};function treeSubTree(e,t){let r=t instanceof Path?t:new Path(t),n=e,i=pathGetFront(r);for(;null!==i;){let e=(0,v.DV)(n.node.children,i)||{children:{},childCount:0};n=new Tree(i,n,e),i=pathGetFront(r=pathPopFront(r))}return n}function treeGetValue(e){return e.node.value}function treeSetValue(e,t){e.node.value=t,function treeUpdateParents(e){null!==e.parent&&function(e,t,r){let n=void 0===treeGetValue(r)&&!treeHasChildren(r),i=(0,v.r3)(e.node.children,t);n&&i?(delete e.node.children[t],e.node.childCount--,treeUpdateParents(e)):n||i||(e.node.children[t]=r.node,e.node.childCount++,treeUpdateParents(e))}(e.parent,e.name,e)}(e)}function treeHasChildren(e){return e.node.childCount>0}function treeForEachChild(e,t){each(e.node.children,(r,n)=>{t(new Tree(r,e,n))})}function treeGetPath(e){return new Path(null===e.parent?e.name:treeGetPath(e.parent)+"/"+e.name)}/**
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
 */let K=/[\[\].#$\/\u0000-\u001F\u007F]/,Q=/[\[\].#$\u0000-\u001F\u007F]/,isValidKey=function(e){return"string"==typeof e&&0!==e.length&&!K.test(e)},isValidPathString=function(e){return"string"==typeof e&&0!==e.length&&!Q.test(e)},validateFirebaseDataArg=function(e,t,r,n){n&&void 0===t||validateFirebaseData((0,v.gK)(e,"value"),t,r)},validateFirebaseData=function(e,t,r){let n=r instanceof Path?new ValidationPath(r,e):r;if(void 0===t)throw Error(e+"contains undefined "+validationPathToErrorString(n));if("function"==typeof t)throw Error(e+"contains a function "+validationPathToErrorString(n)+" with contents = "+t.toString());if(isInvalidJSONNumber(t))throw Error(e+"contains "+t.toString()+" "+validationPathToErrorString(n));if("string"==typeof t&&t.length>3495253.3333333335&&(0,v.ug)(t)>10485760)throw Error(e+"contains a string greater than 10485760 utf8 bytes "+validationPathToErrorString(n)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let r=!1,i=!1;if(each(t,(t,s)=>{if(".value"===t)r=!0;else if(".priority"!==t&&".sv"!==t&&(i=!0,!isValidKey(t)))throw Error(e+" contains an invalid key ("+t+") "+validationPathToErrorString(n)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(t),n.byteLength_+=(0,v.ug)(t),validationPathCheckValid(n),validateFirebaseData(e,s,n),function(e){let t=e.parts_.pop();e.byteLength_-=(0,v.ug)(t),e.parts_.length>0&&(e.byteLength_-=1)}(n)}),r&&i)throw Error(e+' contains ".value" child '+validationPathToErrorString(n)+" in addition to actual children.")}},validatePathString=function(e,t,r,n){if((!n||void 0!==r)&&!isValidPathString(r))throw Error((0,v.gK)(e,t)+'was an invalid path = "'+r+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},validateRootPathString=function(e,t,r,n){r&&(r=r.replace(/^\/*\.info(\/|$)/,"/")),validatePathString(e,t,r,n)},validateWritablePath=function(e,t){if(".info"===pathGetFront(t))throw Error(e+" failed = Can't modify data under /.info/")},validateUrl=function(e,t){var r;let n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!isValidKey(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&((r=n)&&(r=r.replace(/^\/*\.info(\/|$)/,"/")),!isValidPathString(r)))throw Error((0,v.gK)(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};/**
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
 */let EventQueue=class EventQueue{constructor(){this.eventLists_=[],this.recursionDepth_=0}};function eventQueueQueueEvents(e,t){let r=null;for(let n=0;n<t.length;n++){let i=t[n],s=i.getPath();null===r||pathEquals(s,r.path)||(e.eventLists_.push(r),r=null),null===r&&(r={events:[],path:s}),r.events.push(i)}r&&e.eventLists_.push(r)}function eventQueueRaiseEventsAtPath(e,t,r){eventQueueQueueEvents(e,r),eventQueueRaiseQueuedEventsMatchingPredicate(e,e=>pathEquals(e,t))}function eventQueueRaiseEventsForChangedPath(e,t,r){eventQueueQueueEvents(e,r),eventQueueRaiseQueuedEventsMatchingPredicate(e,e=>pathContains(e,t)||pathContains(t,e))}function eventQueueRaiseQueuedEventsMatchingPredicate(e,t){e.recursionDepth_++;let r=!0;for(let n=0;n<e.eventLists_.length;n++){let i=e.eventLists_[n];if(i){let s=i.path;t(s)?(function(e){for(let t=0;t<e.events.length;t++){let r=e.events[t];if(null!==r){e.events[t]=null;let n=r.getEventRunner();R&&log("event: "+r.toString()),exceptionGuard(n)}}}(e.eventLists_[n]),e.eventLists_[n]=null):r=!1}}r&&(e.eventLists_=[]),e.recursionDepth_--}let Repo=class Repo{constructor(e,t,r,n){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=r,this.appCheckProvider_=n,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new EventQueue,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=newSparseSnapshotTree(),this.transactionQueueTree_=new Tree,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}};function repoServerTime(e){let t=e.infoData_.getNode(new Path(".info/serverTimeOffset")),r=t.val()||0;return new Date().getTime()+r}function repoGenerateServerValues(e){var t;return(t=t={timestamp:repoServerTime(e)}).timestamp=t.timestamp||new Date().getTime(),t}function repoOnDataUpdate(e,t,r,n,i){e.dataUpdateCount++;let s=new Path(t);r=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,r):r;let o=[];if(i){if(n){let t=(0,v.UI)(r,e=>nodeFromJSON(e));o=function(e,t,r,n){let i=syncTreeQueryKeyForTag_(e,n);if(!i)return[];{let n=syncTreeParseQueryKey_(i),s=n.path,o=n.queryId,a=newRelativePath(s,t),l=ImmutableTree.fromObject(r),h=new Merge(newOperationSourceServerTaggedQuery(o),a,l);return syncTreeApplyTaggedOperation_(e,s,h)}}(e.serverSyncTree_,s,t,i)}else{let t=nodeFromJSON(r);o=function(e,t,r,n){let i=syncTreeQueryKeyForTag_(e,n);if(null==i)return[];{let n=syncTreeParseQueryKey_(i),s=n.path,o=n.queryId,a=newRelativePath(s,t),l=new Overwrite(newOperationSourceServerTaggedQuery(o),a,r);return syncTreeApplyTaggedOperation_(e,s,l)}}(e.serverSyncTree_,s,t,i)}}else if(n){let t=(0,v.UI)(r,e=>nodeFromJSON(e));o=function(e,t,r){let n=ImmutableTree.fromObject(r);return syncTreeApplyOperationToSyncPoints_(e,new Merge(newOperationSourceServer(),t,n))}(e.serverSyncTree_,s,t)}else{let t=nodeFromJSON(r);o=syncTreeApplyServerOverwrite(e.serverSyncTree_,s,t)}let a=s;o.length>0&&(a=repoRerunTransactions(e,s)),eventQueueRaiseEventsForChangedPath(e.eventQueue_,a,o)}function repoOnConnectStatus(e,t){repoUpdateInfo(e,"connected",t),!1===t&&function(e){repoLog(e,"onDisconnectEvents");let t=repoGenerateServerValues(e),r=newSparseSnapshotTree();sparseSnapshotTreeForEachTree(e.onDisconnect_,newEmptyPath(),(n,i)=>{var s;let o=(s=e.serverSyncTree_,resolveDeferredValue(i,new DeferredValueProvider(s,n),t));!function sparseSnapshotTreeRemember(e,t,r){if(pathIsEmpty(t))e.value=r,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,r);else{let n=pathGetFront(t);e.children.has(n)||e.children.set(n,newSparseSnapshotTree());let i=e.children.get(n);sparseSnapshotTreeRemember(i,t=pathPopFront(t),r)}}(r,n,o)});let n=[];sparseSnapshotTreeForEachTree(r,newEmptyPath(),(t,r)=>{n=n.concat(syncTreeApplyServerOverwrite(e.serverSyncTree_,t,r));let i=repoAbortTransactions(e,t);repoRerunTransactions(e,i)}),e.onDisconnect_=newSparseSnapshotTree(),eventQueueRaiseEventsForChangedPath(e.eventQueue_,newEmptyPath(),n)}(e)}function repoUpdateInfo(e,t,r){let n=new Path("/.info/"+t),i=nodeFromJSON(r);e.infoData_.updateSnapshot(n,i);let s=syncTreeApplyServerOverwrite(e.infoSyncTree_,n,i);eventQueueRaiseEventsForChangedPath(e.eventQueue_,n,s)}function repoGetNextWriteId(e){return e.nextWriteId_++}function repoRemoveEventCallbackForQuery(e,t,r){let n;n=".info"===pathGetFront(t._path)?syncTreeRemoveEventRegistration(e.infoSyncTree_,t,r):syncTreeRemoveEventRegistration(e.serverSyncTree_,t,r),eventQueueRaiseEventsAtPath(e.eventQueue_,t._path,n)}function repoLog(e,...t){let r="";e.persistentConnection_&&(r=e.persistentConnection_.id+":"),log(r,...t)}function repoGetLatestState(e,t,r){return syncTreeCalcCompleteEventCache(e.serverSyncTree_,t,r)||ChildrenNode.EMPTY_NODE}function repoRerunTransactions(e,t){let r=repoGetAncestorTransactionNode(e,t),n=treeGetPath(r),i=repoBuildTransactionQueue(e,r);return function(e,t,r){if(0===t.length)return;let n=[],i=[],s=t.filter(e=>0===e.status),o=s.map(e=>e.currentWriteId);for(let s=0;s<t.length;s++){let a=t[s],l=newRelativePath(r,a.path),h=!1,c;if((0,v.hu)(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null."),4===a.status)h=!0,c=a.abortReason,i=i.concat(syncTreeAckUserWrite(e.serverSyncTree_,a.currentWriteId,!0));else if(0===a.status){if(a.retryCount>=25)h=!0,c="maxretry",i=i.concat(syncTreeAckUserWrite(e.serverSyncTree_,a.currentWriteId,!0));else{let r=repoGetLatestState(e,a.path,o);a.currentInputSnapshot=r;let n=t[s].update(r.val());if(void 0!==n){validateFirebaseData("transaction failed: Data returned ",n,a.path);let t=nodeFromJSON(n),s="object"==typeof n&&null!=n&&(0,v.r3)(n,".priority");s||(t=t.updatePriority(r.getPriority()));let l=a.currentWriteId,h=repoGenerateServerValues(e),c=resolveDeferredValueSnapshot(t,r,h);a.currentOutputSnapshotRaw=t,a.currentOutputSnapshotResolved=c,a.currentWriteId=repoGetNextWriteId(e),o.splice(o.indexOf(l),1),i=(i=i.concat(syncTreeApplyUserOverwrite(e.serverSyncTree_,a.path,c,a.currentWriteId,a.applyLocally))).concat(syncTreeAckUserWrite(e.serverSyncTree_,l,!0))}else h=!0,c="nodata",i=i.concat(syncTreeAckUserWrite(e.serverSyncTree_,a.currentWriteId,!0))}}eventQueueRaiseEventsForChangedPath(e.eventQueue_,r,i),i=[],h&&(t[s].status=2,setTimeout(t[s].unwatcher,Math.floor(0)),t[s].onComplete&&("nodata"===c?n.push(()=>t[s].onComplete(null,!1,t[s].currentInputSnapshot)):n.push(()=>t[s].onComplete(Error(c),!1,null))))}repoPruneCompletedTransactionsBelowNode(e,e.transactionQueueTree_);for(let e=0;e<n.length;e++)exceptionGuard(n[e]);(function repoSendReadyTransactions(e,t=e.transactionQueueTree_){if(t||repoPruneCompletedTransactionsBelowNode(e,t),treeGetValue(t)){let r=repoBuildTransactionQueue(e,t);(0,v.hu)(r.length>0,"Sending zero length transaction queue");let n=r.every(e=>0===e.status);n&&function(e,t,r){let n=r.map(e=>e.currentWriteId),i=repoGetLatestState(e,t,n),s=i,o=i.hash();for(let e=0;e<r.length;e++){let n=r[e];(0,v.hu)(0===n.status,"tryToSendTransactionQueue_: items in queue should all be run."),n.status=1,n.retryCount++;let i=newRelativePath(t,n.path);s=s.updateChild(i,n.currentOutputSnapshotRaw)}let a=s.val(!0);e.server_.put(t.toString(),a,n=>{repoLog(e,"transaction put response",{path:t.toString(),status:n});let i=[];if("ok"===n){let n=[];for(let t=0;t<r.length;t++)r[t].status=2,i=i.concat(syncTreeAckUserWrite(e.serverSyncTree_,r[t].currentWriteId)),r[t].onComplete&&n.push(()=>r[t].onComplete(null,!0,r[t].currentOutputSnapshotResolved)),r[t].unwatcher();repoPruneCompletedTransactionsBelowNode(e,treeSubTree(e.transactionQueueTree_,t)),repoSendReadyTransactions(e,e.transactionQueueTree_),eventQueueRaiseEventsForChangedPath(e.eventQueue_,t,i);for(let e=0;e<n.length;e++)exceptionGuard(n[e])}else{if("datastale"===n)for(let e=0;e<r.length;e++)3===r[e].status?r[e].status=4:r[e].status=0;else{warn("transaction at "+t.toString()+" failed: "+n);for(let e=0;e<r.length;e++)r[e].status=4,r[e].abortReason=n}repoRerunTransactions(e,t)}},o)}(e,treeGetPath(t),r)}else treeHasChildren(t)&&treeForEachChild(t,t=>{repoSendReadyTransactions(e,t)})})(e,e.transactionQueueTree_)}(e,i,n),n}function repoGetAncestorTransactionNode(e,t){let r;let n=e.transactionQueueTree_;for(r=pathGetFront(t);null!==r&&void 0===treeGetValue(n);)n=treeSubTree(n,r),r=pathGetFront(t=pathPopFront(t));return n}function repoBuildTransactionQueue(e,t){let r=[];return function repoAggregateTransactionQueuesForNode(e,t,r){let n=treeGetValue(t);if(n)for(let e=0;e<n.length;e++)r.push(n[e]);treeForEachChild(t,t=>{repoAggregateTransactionQueuesForNode(e,t,r)})}(e,t,r),r.sort((e,t)=>e.order-t.order),r}function repoPruneCompletedTransactionsBelowNode(e,t){let r=treeGetValue(t);if(r){let e=0;for(let t=0;t<r.length;t++)2!==r[t].status&&(r[e]=r[t],e++);r.length=e,treeSetValue(t,r.length>0?r:void 0)}treeForEachChild(t,t=>{repoPruneCompletedTransactionsBelowNode(e,t)})}function repoAbortTransactions(e,t){let r=treeGetPath(repoGetAncestorTransactionNode(e,t)),n=treeSubTree(e.transactionQueueTree_,t);return!function(e,t,r){let n=e.parent;for(;null!==n;){if(t(n))return!0;n=n.parent}}(n,t=>{repoAbortTransactionsOnNode(e,t)}),repoAbortTransactionsOnNode(e,n),!function treeForEachDescendant(e,t,r,n){r&&!n&&t(e),treeForEachChild(e,e=>{treeForEachDescendant(e,t,!0,n)}),r&&n&&t(e)}(n,t=>{repoAbortTransactionsOnNode(e,t)}),r}function repoAbortTransactionsOnNode(e,t){let r=treeGetValue(t);if(r){let n=[],i=[],s=-1;for(let t=0;t<r.length;t++)3===r[t].status||(1===r[t].status?((0,v.hu)(s===t-1,"All SENT items should be at beginning of queue."),s=t,r[t].status=3,r[t].abortReason="set"):((0,v.hu)(0===r[t].status,"Unexpected transaction status in abort"),r[t].unwatcher(),i=i.concat(syncTreeAckUserWrite(e.serverSyncTree_,r[t].currentWriteId,!0)),r[t].onComplete&&n.push(r[t].onComplete.bind(null,Error("set"),!1,null))));-1===s?treeSetValue(t,void 0):r.length=s+1,eventQueueRaiseEventsForChangedPath(e.eventQueue_,treeGetPath(t),i);for(let e=0;e<n.length;e++)exceptionGuard(n[e])}}let parseRepoInfo=function(e,t){let r=parseDatabaseURL(e),n=r.namespace;"firebase.com"===r.domain&&fatal(r.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),n&&"undefined"!==n||"localhost"===r.domain||fatal("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),r.secure||warnIfPageIsSecure();let i="ws"===r.scheme||"wss"===r.scheme;return{repoInfo:new RepoInfo(r.host,r.secure,n,i,t,"",n!==r.subdomain),path:new Path(r.pathString)}},parseDatabaseURL=function(e){let t="",r="",n="",i="",s="",o=!0,a="https",l=443;if("string"==typeof e){let h=e.indexOf("//");h>=0&&(a=e.substring(0,h-1),e=e.substring(h+2));let c=e.indexOf("/");-1===c&&(c=e.length);let u=e.indexOf("?");-1===u&&(u=e.length),t=e.substring(0,Math.min(c,u)),c<u&&(i=/**
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
 */function(e){let t="",r=e.split("/");for(let e=0;e<r.length;e++)if(r[e].length>0){let n=r[e];try{n=decodeURIComponent(n.replace(/\+/g," "))}catch(e){}t+="/"+n}return t}(e.substring(c,u)));let d=function(e){let t={};for(let r of("?"===e.charAt(0)&&(e=e.substring(1)),e.split("&"))){if(0===r.length)continue;let n=r.split("=");2===n.length?t[decodeURIComponent(n[0])]=decodeURIComponent(n[1]):warn(`Invalid query segment '${r}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,u)));(h=t.indexOf(":"))>=0?(o="https"===a||"wss"===a,l=parseInt(t.substring(h+1),10)):h=t.length;let p=t.slice(0,h);if("localhost"===p.toLowerCase())r="localhost";else if(p.split(".").length<=2)r=p;else{let e=t.indexOf(".");n=t.substring(0,e).toLowerCase(),r=t.substring(e+1),s=n}"ns"in d&&(s=d.ns)}return{host:t,port:l,domain:r,subdomain:n,secure:o,scheme:a,pathString:i,namespace:s}},Y="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",J=function(){let e=0,t=[];return function(r){let n;let i=r===e;e=r;let s=Array(8);for(n=7;n>=0;n--)s[n]=Y.charAt(r%64),r=Math.floor(r/64);(0,v.hu)(0===r,"Cannot push at time == 0");let o=s.join("");if(i){for(n=11;n>=0&&63===t[n];n--)t[n]=0;t[n]++}else for(n=0;n<12;n++)t[n]=Math.floor(64*Math.random());for(n=0;n<12;n++)o+=Y.charAt(t[n]);return(0,v.hu)(20===o.length,"nextPushId: Length should be 20."),o}}();/**
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
 */let DataEvent=class DataEvent{constructor(e,t,r,n){this.eventType=e,this.eventRegistration=t,this.snapshot=r,this.prevName=n}getPath(){let e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+(0,v.Wl)(this.snapshot.exportVal())}};let CancelEvent=class CancelEvent{constructor(e,t,r){this.eventRegistration=e,this.error=t,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}};/**
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
 */let CallbackContext=class CallbackContext{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return(0,v.hu)(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}};/**
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
 */let QueryImpl=class QueryImpl{constructor(e,t,r,n){this._repo=e,this._path=t,this._queryParams=r,this._orderByCalled=n}get key(){return pathIsEmpty(this._path)?null:pathGetBack(this._path)}get ref(){return new ReferenceImpl(this._repo,this._path)}get _queryIdentifier(){let e=queryParamsGetQueryObject(this._queryParams),t=ObjectToUniqueKey(e);return"{}"===t?"default":t}get _queryObject(){return queryParamsGetQueryObject(this._queryParams)}isEqual(e){if(!((e=(0,v.m9)(e))instanceof QueryImpl))return!1;let t=this._repo===e._repo,r=pathEquals(this._path,e._path),n=this._queryIdentifier===e._queryIdentifier;return t&&r&&n}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let r=e.pieceNum_;r<e.pieces_.length;r++)""!==e.pieces_[r]&&(t+="/"+encodeURIComponent(String(e.pieces_[r])));return t||"/"}(this._path)}};let ReferenceImpl=class ReferenceImpl extends QueryImpl{constructor(e,t){super(e,t,new QueryParams,!1)}get parent(){let e=pathParent(this._path);return null===e?null:new ReferenceImpl(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}};let DataSnapshot=class DataSnapshot{constructor(e,t,r){this._node=e,this.ref=t,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){let t=new Path(e),r=child(this.ref,e);return new DataSnapshot(this._node.getChild(t),r,B)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;let t=this._node;return!!t.forEachChild(this._index,(t,r)=>e(new DataSnapshot(r,child(this.ref,t),B)))}hasChild(e){let t=new Path(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}};function ref(e,t){return(e=(0,v.m9)(e))._checkNotDeleted("ref"),void 0!==t?child(e._root,t):e._root}function child(e,t){return null===pathGetFront((e=(0,v.m9)(e))._path)?validateRootPathString("child","path",t,!1):validatePathString("child","path",t,!1),new ReferenceImpl(e._repo,pathChild(e._path,t))}function push(e,t){let r;validateWritablePath("push",(e=(0,v.m9)(e))._path),validateFirebaseDataArg("push",t,e._path,!0);let n=repoServerTime(e._repo),i=J(n),s=child(e,i),o=child(e,i);return r=null!=t?set(o,t).then(()=>o):Promise.resolve(o),s.then=r.then.bind(r),s.catch=r.then.bind(r,void 0),s}function set(e,t){validateWritablePath("set",(e=(0,v.m9)(e))._path),validateFirebaseDataArg("set",t,e._path,!1);let r=new v.BH;return!function(e,t,r,n,i){repoLog(e,"set",{path:t.toString(),value:r,priority:n});let s=repoGenerateServerValues(e),o=nodeFromJSON(r,n),a=syncTreeCalcCompleteEventCache(e.serverSyncTree_,t),l=resolveDeferredValueSnapshot(o,a,s),h=repoGetNextWriteId(e),c=syncTreeApplyUserOverwrite(e.serverSyncTree_,t,l,h,!0);eventQueueQueueEvents(e.eventQueue_,c),e.server_.put(t.toString(),o.val(!0),(r,n)=>{let s="ok"===r;s||warn("set at "+t+" failed: "+r);let o=syncTreeAckUserWrite(e.serverSyncTree_,h,!s);eventQueueRaiseEventsForChangedPath(e.eventQueue_,t,o),i&&exceptionGuard(()=>{if("ok"===r)i(null);else{let e=(r||"error").toUpperCase(),t=e;n&&(t+=": "+n);let s=Error(t);s.code=e,i(s)}})});let u=repoAbortTransactions(e,t);repoRerunTransactions(e,u),eventQueueRaiseEventsForChangedPath(e.eventQueue_,u,[])}(e._repo,e._path,t,null,r.wrapCallback(()=>{})),r.promise}let ValueEventRegistration=class ValueEventRegistration{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){let r=t._queryParams.getIndex();return new DataEvent("value",this,new DataSnapshot(e.snapshotNode,new ReferenceImpl(t._repo,t._path),r))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new CancelEvent(this,e,t):null}matches(e){return e instanceof ValueEventRegistration&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}};let ChildEventRegistration=class ChildEventRegistration{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new CancelEvent(this,e,t):null}createEvent(e,t){(0,v.hu)(null!=e.childName,"Child events should have a childName.");let r=child(new ReferenceImpl(t._repo,t._path),e.childName),n=t._queryParams.getIndex();return new DataEvent(e.type,this,new DataSnapshot(e.snapshotNode,r,n),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof ChildEventRegistration&&this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext))}hasAnyCallback(){return!!this.callbackContext}};function onValue(e,t,r,n){return function(e,t,r,n,i){var s;let o,a;if("object"==typeof n&&(o=void 0,i=n),"function"==typeof n&&(o=n),i&&i.onlyOnce){let t=r,onceCallback=(r,n)=>{repoRemoveEventCallbackForQuery(e._repo,e,h),t(r,n)};onceCallback.userCallback=r.userCallback,onceCallback.context=r.context,r=onceCallback}let l=new CallbackContext(r,o||void 0),h="value"===t?new ValueEventRegistration(l):new ChildEventRegistration(t,l);return s=e._repo,a=".info"===pathGetFront(e._path)?syncTreeAddEventRegistration(s.infoSyncTree_,e,h):syncTreeAddEventRegistration(s.serverSyncTree_,e,h),eventQueueRaiseEventsAtPath(s.eventQueue_,e._path,a),()=>repoRemoveEventCallbackForQuery(e._repo,e,h)}(e,"value",t,r,n)}(0,v.hu)(!u,"__referenceConstructor has already been defined"),u=ReferenceImpl,(0,v.hu)(!d,"__referenceConstructor has already been defined"),d=ReferenceImpl;let X={};let Database=class Database{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(function(e,t,r){if(e.stats_=statsManagerGetCollection(e.repoInfo_),e.forceRestClient_||beingCrawled())e.server_=new ReadonlyRestClient(e.repoInfo_,(t,r,n,i)=>{repoOnDataUpdate(e,t,r,n,i)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>repoOnConnectStatus(e,!0),0);else{if(null!=r){if("object"!=typeof r)throw Error("Only objects are supported for option databaseAuthVariableOverride");try{(0,v.Wl)(r)}catch(e){throw Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new PersistentConnection(e.repoInfo_,t,(t,r,n,i)=>{repoOnDataUpdate(e,t,r,n,i)},t=>{repoOnConnectStatus(e,t)},t=>{each(t,(t,r)=>{repoUpdateInfo(e,t,r)})},e.authTokenProvider_,e.appCheckProvider_,r),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(t=>{e.server_.refreshAuthToken(t)}),e.appCheckProvider_.addTokenChangeListener(t=>{e.server_.refreshAppCheckToken(t.token)}),e.statsReporter_=function(e,t){let r=e.toString();return M[r]||(M[r]=t()),M[r]}(e.repoInfo_,()=>new StatsReporter(e.stats_,e.server_)),e.infoData_=new SnapshotHolder,e.infoSyncTree_=new SyncTree({startListening:(t,r,n,i)=>{let s=[],o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=syncTreeApplyServerOverwrite(e.infoSyncTree_,t._path,o),setTimeout(()=>{i("ok")},0)),s},stopListening:()=>{}}),repoUpdateInfo(e,"connected",!1),e.serverSyncTree_=new SyncTree({startListening:(t,r,n,i)=>(e.server_.listen(t,n,r,(r,n)=>{let s=i(r,n);eventQueueRaiseEventsForChangedPath(e.eventQueue_,t._path,s)}),[]),stopListening:(t,r)=>{e.server_.unlisten(t,r)}})}(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ReferenceImpl(this._repo,newEmptyPath())),this._rootInternal}_delete(){return null!==this._rootInternal&&(function(e,t){let r=X[t];r&&r[e.key]===e||fatal(`Database ${t}(${e.repoInfo_}) has already been deleted.`),e.persistentConnection_&&e.persistentConnection_.interrupt("repo_interrupt"),delete r[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&fatal("Cannot call "+e+" on a deleted database.")}};function getDatabase(e=(0,m.Mq)(),t){let r=(0,m.qX)(e,"database").getImmediate({identifier:t});if(!r._instanceStarted){let e=(0,v.P0)("database");e&&function(e,t,r,n={}){var i;let s;(e=(0,v.m9)(e))._checkNotDeleted("useEmulator"),e._instanceStarted&&fatal("Cannot call useEmulator() after instance has already been initialized.");let o=e._repoInternal;if(o.repoInfo_.nodeAdmin)n.mockUserToken&&fatal('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new EmulatorTokenProvider(EmulatorTokenProvider.OWNER);else if(n.mockUserToken){let t="string"==typeof n.mockUserToken?n.mockUserToken:(0,v.Sg)(n.mockUserToken,e.app.options.projectId);s=new EmulatorTokenProvider(t)}i=s,o.repoInfo_=new RepoInfo(`${t}:${r}`,!1,o.repoInfo_.namespace,o.repoInfo_.webSocketOnly,o.repoInfo_.nodeAdmin,o.repoInfo_.persistenceKey,o.repoInfo_.includeNamespaceInQueryParams,!0),i&&(o.authTokenProvider_=i)}(r,...e)}return r}PersistentConnection.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},PersistentConnection.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)},I=m.Jn,(0,m.Xd)(new g.wA("database",(e,{instanceIdentifier:t})=>{let r=e.getProvider("app").getImmediate(),n=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return function(e,t,r,n,i){var s,o;let a,l,h,c,u=n||e.options.databaseURL;void 0===u&&(e.options.projectId||fatal("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),log("Using default host for project ",e.options.projectId),u=`${e.options.projectId}-default-rtdb.firebaseio.com`);let d=parseRepoInfo(u,i),p=d.repoInfo;void 0!==C&&C.env&&(h=C.env.FIREBASE_DATABASE_EMULATOR_HOST),h?(c=!0,p=(d=parseRepoInfo(u=`http://${h}?ns=${p.namespace}`,i)).repoInfo):c=!d.repoInfo.secure;let f=i&&c?new EmulatorTokenProvider(EmulatorTokenProvider.OWNER):new FirebaseAuthTokenProvider(e.name,e.options,t);validateUrl("Invalid Firebase Database URL",d),pathIsEmpty(d.path)||fatal("Database URL must point to the root of a Firebase Database (not including a child path).");let _=(s=p,o=new AppCheckTokenProvider(e.name,r),(a=X[e.name])||(a={},X[e.name]=a),(l=a[s.toURLString()])&&fatal("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new Repo(s,!1,f,o),a[s.toURLString()]=l,l);return new Database(_,e)}(r,n,i,t)},"PUBLIC").setMultipleInstances(!0)),(0,m.KN)(w,b,void 0),(0,m.KN)(w,b,"esm2017")},6650:function(e,t,r){"use strict";r.d(t,{Jt:function(){return getDownloadURL},cF:function(){return getStorage},iH:function(){return ref},B0:function(){return uploadBytesResumable}});var n,i,s,o,a=r(5816),l=r(4444),h=r(8463);/**
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
 */let c="firebasestorage.googleapis.com",u="storageBucket";/**
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
 */let StorageError=class StorageError extends l.ZR{constructor(e,t,r=0){super(prependCode(e),`Firebase Storage: ${t} (${prependCode(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,StorageError.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return prependCode(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}};function prependCode(e){return"storage/"+e}function unknown(){return new StorageError(s.UNKNOWN,"An unknown error occurred, please check the error payload for server response.")}function retryLimitExceeded(){return new StorageError(s.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function canceled(){return new StorageError(s.CANCELED,"User canceled the upload/download.")}function cannotSliceBlob(){return new StorageError(s.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function invalidArgument(e){return new StorageError(s.INVALID_ARGUMENT,e)}function appDeleted(){return new StorageError(s.APP_DELETED,"The Firebase app was deleted.")}function invalidFormat(e,t){return new StorageError(s.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function internalError(e){throw new StorageError(s.INTERNAL_ERROR,"Internal error: "+e)}(n=s||(s={})).UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment";/**
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
 */let Location=class Location{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){let e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){let e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=Location.makeFromUrl(e,t)}catch(t){return new Location(e,"")}if(""===r.path)return r;throw new StorageError(s.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}static makeFromUrl(e,t){let r=null,n="([A-Za-z0-9.\\-_]+)",i=RegExp("^gs://"+n+"(/(.*))?$","i");function httpModify(e){e.path_=decodeURIComponent(e.path)}let o=t.replace(/[.]/g,"\\."),a=RegExp(`^https?://${o}/v[A-Za-z0-9_]+/b/${n}/o(/([^?#]*).*)?$`,"i"),l=RegExp(`^https?://${t===c?"(?:storage.googleapis.com|storage.cloud.google.com)":t}/${n}/([^?#]*)`,"i"),h=[{regex:i,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:a,indices:{bucket:1,path:3},postModify:httpModify},{regex:l,indices:{bucket:1,path:2},postModify:httpModify}];for(let t=0;t<h.length;t++){let n=h[t],i=n.regex.exec(e);if(i){let e=i[n.indices.bucket],t=i[n.indices.path];t||(t=""),r=new Location(e,t),n.postModify(r);break}}if(null==r)throw new StorageError(s.INVALID_URL,"Invalid URL '"+e+"'.");return r}};let FailRequest=class FailRequest{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}};function isString(e){return"string"==typeof e||e instanceof String}function isNativeBlob(e){return isNativeBlobDefined()&&e instanceof Blob}function isNativeBlobDefined(){return"undefined"!=typeof Blob&&!(0,l.UG)()}function validateNumber(e,t,r,n){if(n<t)throw invalidArgument(`Invalid value for '${e}'. Expected ${t} or greater.`);if(n>r)throw invalidArgument(`Invalid value for '${e}'. Expected ${r} or less.`)}/**
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
 */function makeUrl(e,t,r){let n=t;return null==r&&(n=`https://${t}`),`${r}://${n}/v0${e}`}function makeQueryString(e){let t=encodeURIComponent,r="?";for(let n in e)if(e.hasOwnProperty(n)){let i=t(n)+"="+t(e[n]);r=r+i+"&"}return r.slice(0,-1)}/**
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
 */function isRetryStatusCode(e,t){let r=e>=500&&e<600,n=-1!==[408,429].indexOf(e),i=-1!==t.indexOf(e);return r||n||i}(i=o||(o={}))[i.NO_ERROR=0]="NO_ERROR",i[i.NETWORK_ERROR=1]="NETWORK_ERROR",i[i.ABORT=2]="ABORT";/**
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
 */let NetworkRequest=class NetworkRequest{constructor(e,t,r,n,i,s,o,a,l,h,c,u=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=n,this.successCodes_=i,this.additionalRetryCodes_=s,this.callback_=o,this.errorCallback_=a,this.timeout_=l,this.progressCallback_=h,this.connectionFactory_=c,this.retry=u,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()})}start_(){let backoffDone=(e,t)=>{let r=this.resolve_,n=this.reject_,i=t.connection;if(t.wasSuccessCode)try{let e=this.callback_(i,i.getResponse());void 0!==e?r(e):r()}catch(e){n(e)}else if(null!==i){let e=unknown();e.serverResponse=i.getErrorText(),n(this.errorCallback_?this.errorCallback_(i,e):e)}else if(t.canceled){let e=this.appDelete_?appDeleted():canceled();n(e)}else{let e=retryLimitExceeded();n(e)}};this.canceled_?backoffDone(!1,new RequestEndStatus(!1,null,!0)):this.backoffId_=/**
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
 */function(e,t,r){let n=1,i=null,s=null,o=!1,a=0,l=!1;function triggerCallback(...e){l||(l=!0,t.apply(null,e))}function callWithDelay(t){i=setTimeout(()=>{i=null,e(responseHandler,2===a)},t)}function clearGlobalTimeout(){s&&clearTimeout(s)}function responseHandler(e,...t){let r;if(l){clearGlobalTimeout();return}if(e){clearGlobalTimeout(),triggerCallback.call(null,e,...t);return}let i=2===a||o;if(i){clearGlobalTimeout(),triggerCallback.call(null,e,...t);return}n<64&&(n*=2),1===a?(a=2,r=0):r=(n+Math.random())*1e3,callWithDelay(r)}let h=!1;function stop(e){!h&&(h=!0,clearGlobalTimeout(),!l&&(null!==i?(e||(a=2),clearTimeout(i),callWithDelay(0)):e||(a=1)))}return callWithDelay(0),s=setTimeout(()=>{o=!0,stop(!0)},r),stop}((e,t)=>{if(t){e(!1,new RequestEndStatus(!1,null,!0));return}let r=this.connectionFactory_();this.pendingConnection_=r;let progressListener=e=>{let t=e.loaded,r=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,r)};null!==this.progressCallback_&&r.addUploadProgressListener(progressListener),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{null!==this.progressCallback_&&r.removeUploadProgressListener(progressListener),this.pendingConnection_=null;let t=r.getErrorCode()===o.NO_ERROR,n=r.getStatus();if(!t||isRetryStatusCode(n,this.additionalRetryCodes_)&&this.retry){let t=r.getErrorCode()===o.ABORT;e(!1,new RequestEndStatus(!1,null,t));return}let i=-1!==this.successCodes_.indexOf(n);e(!0,new RequestEndStatus(i,r))})},backoffDone,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}};let RequestEndStatus=class RequestEndStatus{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}};function getBlob$1(...e){let t="undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0;if(void 0!==t){let r=new t;for(let t=0;t<e.length;t++)r.append(e[t]);return r.getBlob()}if(isNativeBlobDefined())return new Blob(e);throw new StorageError(s.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}/**
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
 */let d={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};let StringData=class StringData{constructor(e,t){this.data=e,this.contentType=t||null}};function utf8Bytes_(e){let t=[];for(let r=0;r<e.length;r++){let n=e.charCodeAt(r);if(n<=127)t.push(n);else if(n<=2047)t.push(192|n>>6,128|63&n);else if((64512&n)==55296){let i=r<e.length-1&&(64512&e.charCodeAt(r+1))==56320;if(i){let i=n,s=e.charCodeAt(++r);n=65536|(1023&i)<<10|1023&s,t.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|63&n)}else t.push(239,191,189)}else(64512&n)==56320?t.push(239,191,189):t.push(224|n>>12,128|n>>6&63,128|63&n)}return new Uint8Array(t)}function base64Bytes_(e,t){let r;switch(e){case d.BASE64:{let r=-1!==t.indexOf("-"),n=-1!==t.indexOf("_");if(r||n)throw invalidFormat(e,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case d.BASE64URL:{let r=-1!==t.indexOf("+"),n=-1!==t.indexOf("/");if(r||n)throw invalidFormat(e,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/")}}try{r=/**
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
 */function(e){if("undefined"==typeof atob)throw new StorageError(s.UNSUPPORTED_ENVIRONMENT,"base-64 is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.");return atob(e)}(t)}catch(t){if(t.message.includes("polyfill"))throw t;throw invalidFormat(e,"Invalid character found")}let n=new Uint8Array(r.length);for(let e=0;e<r.length;e++)n[e]=r.charCodeAt(e);return n}let DataURLParts=class DataURLParts{constructor(e){this.base64=!1,this.contentType=null;let t=e.match(/^data:([^,]+)?,/);if(null===t)throw invalidFormat(d.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");let r=t[1]||null;null!=r&&(this.base64=function(e,t){let r=e.length>=t.length;return!!r&&e.substring(e.length-t.length)===t}(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}};/**
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
 */let FbsBlob=class FbsBlob{constructor(e,t){let r=0,n="";isNativeBlob(e)?(this.data_=e,r=e.size,n=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=n}size(){return this.size_}type(){return this.type_}slice(e,t){if(isNativeBlob(this.data_)){let r=this.data_,n=r.webkitSlice?r.webkitSlice(e,t):r.mozSlice?r.mozSlice(e,t):r.slice?r.slice(e,t):null;return null===n?null:new FbsBlob(n)}{let r=new Uint8Array(this.data_.buffer,e,t-e);return new FbsBlob(r,!0)}}static getBlob(...e){if(isNativeBlobDefined()){let t=e.map(e=>e instanceof FbsBlob?e.data_:e);return new FbsBlob(getBlob$1.apply(null,t))}{let t=e.map(e=>isString(e)?function(e,t){switch(e){case d.RAW:return new StringData(utf8Bytes_(t));case d.BASE64:case d.BASE64URL:return new StringData(base64Bytes_(e,t));case d.DATA_URL:return new StringData(function(e){let t=new DataURLParts(e);return t.base64?base64Bytes_(d.BASE64,t.rest):function(e){let t;try{t=decodeURIComponent(e)}catch(e){throw invalidFormat(d.DATA_URL,"Malformed data URL.")}return utf8Bytes_(t)}(t.rest)}(t),function(e){let t=new DataURLParts(e);return t.contentType}(t))}throw unknown()}(d.RAW,e).data:e.data_),r=0;t.forEach(e=>{r+=e.byteLength});let n=new Uint8Array(r),i=0;return t.forEach(e=>{for(let t=0;t<e.length;t++)n[i++]=e[t]}),new FbsBlob(n,!0)}}uploadData(){return this.data_}};/**
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
 */function jsonObjectOrNull(e){var t;let r;try{r=JSON.parse(e)}catch(e){return null}return"object"!=typeof(t=r)||Array.isArray(t)?null:r}function lastComponent(e){let t=e.lastIndexOf("/",e.length-2);return -1===t?e:e.slice(t+1)}/**
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
 */function noXform_(e,t){return t}let Mapping=class Mapping{constructor(e,t,r,n){this.server=e,this.local=t||e,this.writable=!!r,this.xform=n||noXform_}};let p=null;function getMappings(){if(p)return p;let e=[];e.push(new Mapping("bucket")),e.push(new Mapping("generation")),e.push(new Mapping("metageneration")),e.push(new Mapping("name","fullPath",!0));let t=new Mapping("name");t.xform=function(e,t){return!isString(t)||t.length<2?t:lastComponent(t)},e.push(t);let r=new Mapping("size");return r.xform=function(e,t){return void 0!==t?Number(t):t},e.push(r),e.push(new Mapping("timeCreated")),e.push(new Mapping("updated")),e.push(new Mapping("md5Hash",null,!0)),e.push(new Mapping("cacheControl",null,!0)),e.push(new Mapping("contentDisposition",null,!0)),e.push(new Mapping("contentEncoding",null,!0)),e.push(new Mapping("contentLanguage",null,!0)),e.push(new Mapping("contentType",null,!0)),e.push(new Mapping("metadata","customMetadata",!0)),p=e}function fromResourceString(e,t,r){let n=jsonObjectOrNull(t);return null===n?null:function(e,t,r){let n={};n.type="file";let i=r.length;for(let e=0;e<i;e++){let i=r[e];n[i.local]=i.xform(n,t[i.server])}return Object.defineProperty(n,"ref",{get:function(){let t=n.bucket,r=n.fullPath,i=new Location(t,r);return e._makeStorageReference(i)}}),n}(e,n,r)}function toResourceString(e,t){let r={},n=t.length;for(let i=0;i<n;i++){let n=t[i];n.writable&&(r[n.server]=e[n.local])}return JSON.stringify(r)}let RequestInfo=class RequestInfo{constructor(e,t,r,n){this.url=e,this.method=t,this.handler=r,this.timeout=n,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}};/**
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
 */function handlerCheck(e){if(!e)throw unknown()}function metadataHandler(e,t){return function(r,n){let i=fromResourceString(e,n,t);return handlerCheck(null!==i),i}}function sharedErrorHandler(e){return function(t,r){var n,i;let o;return 401===t.getStatus()?o=t.getErrorText().includes("Firebase App Check token is invalid")?new StorageError(s.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project."):new StorageError(s.UNAUTHENTICATED,"User is not authenticated, please authenticate using Firebase Authentication and try again."):402===t.getStatus()?(n=e.bucket,o=new StorageError(s.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===t.getStatus()?(i=e.path,o=new StorageError(s.UNAUTHORIZED,"User does not have permission to access '"+i+"'.")):o=r,o.status=t.getStatus(),o.serverResponse=r.serverResponse,o}}function objectErrorHandler(e){let t=sharedErrorHandler(e);return function(r,n){let i=t(r,n);if(404===r.getStatus()){var o;o=e.path,i=new StorageError(s.OBJECT_NOT_FOUND,"Object '"+o+"' does not exist.")}return i.serverResponse=n.serverResponse,i}}function metadataForUpload_(e,t,r){let n=Object.assign({},r);return n.fullPath=e.path,n.size=t.size(),!n.contentType&&(n.contentType=t&&t.type()||"application/octet-stream"),n}let ResumableUploadStatus=class ResumableUploadStatus{constructor(e,t,r,n){this.current=e,this.total=t,this.finalized=!!r,this.metadata=n||null}};function checkResumeHeader_(e,t){let r=null;try{r=e.getResponseHeader("X-Goog-Upload-Status")}catch(e){handlerCheck(!1)}return handlerCheck(!!r&&-1!==(t||["active"]).indexOf(r)),r}let f={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function taskStateFromInternalTaskState(e){switch(e){case"running":case"pausing":case"canceling":return f.RUNNING;case"paused":return f.PAUSED;case"success":return f.SUCCESS;case"canceled":return f.CANCELED;default:return f.ERROR}}/**
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
 */let Observer=class Observer{constructor(e,t,r){"function"==typeof e||null!=t||null!=r?(this.next=e,this.error=null!=t?t:void 0,this.complete=null!=r?r:void 0):(this.next=e.next,this.error=e.error,this.complete=e.complete)}};/**
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
 */function index_esm2017_async(e){return(...t)=>{Promise.resolve().then(()=>e(...t))}}let XhrConnection=class XhrConnection{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=o.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=o.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=o.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,n){if(this.sent_)throw internalError("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==n)for(let e in n)n.hasOwnProperty(e)&&this.xhr_.setRequestHeader(e,n[e].toString());return void 0!==r?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw internalError("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw internalError("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return -1}}getResponse(){if(!this.sent_)throw internalError("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw internalError("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}};let XhrTextConnection=class XhrTextConnection extends XhrConnection{initXhr(){this.xhr_.responseType="text"}};function newTextConnection(){return new XhrTextConnection}/**
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
 */let UploadTask=class UploadTask{constructor(e,t,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=r,this._mappings=getMappings(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=e=>{if(this._request=void 0,this._chunkMultiplier=1,e._codeEquals(s.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{let t=this.isExponentialBackoffExpired();if(isRetryStatusCode(e.status,[])){if(t)e=retryLimitExceeded();else{this.sleepTime=Math.max(2*this.sleepTime,1e3),this._needToFetchStatus=!0,this.completeTransitions_();return}}this._error=e,this._transition("error")}},this._metadataErrorHandler=e=>{this._request=void 0,e._codeEquals(s.CANCELED)?this.completeTransitions_():(this._error=e,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((e,t)=>{this._resolve=e,this._reject=t,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){let e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>262144}_start(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([t,r])=>{switch(this._state){case"running":e(t,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused")}})}_createResumable(){this._resolveToken((e,t)=>{let r=function(e,t,r,n,i){let s=t.bucketOnlyServerUrl(),o=metadataForUpload_(t,n,i),a={name:o.fullPath},l=makeUrl(s,e.host,e._protocol),h={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${n.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},c=toResourceString(o,r),u=e.maxUploadRetryTime,d=new RequestInfo(l,"POST",function(e){let t;checkResumeHeader_(e);try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(e){handlerCheck(!1)}return handlerCheck(isString(t)),t},u);return d.urlParams=a,d.headers=h,d.body=c,d.errorHandler=sharedErrorHandler(t),d}(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),n=this._ref.storage._makeRequest(r,newTextConnection,e,t);this._request=n,n.getPromise().then(e=>{this._request=void 0,this._uploadUrl=e,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){let e=this._uploadUrl;this._resolveToken((t,r)=>{let n=function(e,t,r,n){let i=e.maxUploadRetryTime,s=new RequestInfo(r,"POST",function(e){let t=checkResumeHeader_(e,["active","final"]),r=null;try{r=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(e){handlerCheck(!1)}r||handlerCheck(!1);let i=Number(r);return handlerCheck(!isNaN(i)),new ResumableUploadStatus(i,n.size(),"final"===t)},i);return s.headers={"X-Goog-Upload-Command":"query"},s.errorHandler=sharedErrorHandler(t),s}(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(n,newTextConnection,t,r);this._request=i,i.getPromise().then(e=>{this._request=void 0,this._updateProgress(e.current),this._needToFetchStatus=!1,e.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){let e=262144*this._chunkMultiplier,t=new ResumableUploadStatus(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((n,i)=>{let o;try{o=function(e,t,r,n,i,o,a,l){let h=new ResumableUploadStatus(0,0);if(a?(h.current=a.current,h.total=a.total):(h.current=0,h.total=n.size()),n.size()!==h.total)throw new StorageError(s.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.");let c=h.total-h.current,u=c;i>0&&(u=Math.min(u,i));let d=h.current,p=d+u,f="";f=0===u?"finalize":c===u?"upload, finalize":"upload";let _={"X-Goog-Upload-Command":f,"X-Goog-Upload-Offset":`${h.current}`},m=n.slice(d,p);if(null===m)throw cannotSliceBlob();let g=t.maxUploadRetryTime,v=new RequestInfo(r,"POST",function(e,r){let i;let s=checkResumeHeader_(e,["active","final"]),a=h.current+u,l=n.size();return i="final"===s?metadataHandler(t,o)(e,r):null,new ResumableUploadStatus(a,l,"final"===s,i)},g);return v.headers=_,v.body=m.uploadData(),v.progressCallback=l||null,v.errorHandler=sharedErrorHandler(e),v}(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(e){this._error=e,this._transition("error");return}let a=this._ref.storage._makeRequest(o,newTextConnection,n,i,!1);this._request=a,a.getPromise().then(e=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(e.current),e.finalized?(this._metadata=e.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){let e=262144*this._chunkMultiplier;2*e<33554432&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,t)=>{let r=function(e,t,r){let n=t.fullServerUrl(),i=makeUrl(n,e.host,e._protocol),s=e.maxOperationRetryTime,o=new RequestInfo(i,"GET",metadataHandler(e,r),s);return o.errorHandler=objectErrorHandler(t),o}(this._ref.storage,this._ref._location,this._mappings),n=this._ref.storage._makeRequest(r,newTextConnection,e,t);this._request=n,n.getPromise().then(e=>{this._request=void 0,this._metadata=e,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,t)=>{let r=function(e,t,r,n,i){let s=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"},a=function(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}();o["Content-Type"]="multipart/related; boundary="+a;let l=metadataForUpload_(t,n,i),h=toResourceString(l,r),c="--"+a+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+h+"\r\n--"+a+"\r\nContent-Type: "+l.contentType+"\r\n\r\n",u=FbsBlob.getBlob(c,n,"\r\n--"+a+"--");if(null===u)throw cannotSliceBlob();let d={name:l.fullPath},p=makeUrl(s,e.host,e._protocol),f=e.maxUploadRetryTime,_=new RequestInfo(p,"POST",metadataHandler(e,r),f);return _.urlParams=d,_.headers=o,_.body=u.uploadData(),_.errorHandler=sharedErrorHandler(t),_}(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),n=this._ref.storage._makeRequest(r,newTextConnection,e,t);this._request=n,n.getPromise().then(e=>{this._request=void 0,this._metadata=e,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){let t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,void 0!==this._request?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":let t="paused"===this._state;this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":case"error":case"success":this._state=e,this._notifyObservers();break;case"canceled":this._error=canceled(),this._state=e,this._notifyObservers()}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start()}}get snapshot(){let e=taskStateFromInternalTaskState(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,r,n){let i=new Observer(t||void 0,r||void 0,n||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){let t=this._observers.indexOf(e);-1!==t&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise();let e=this._observers.slice();e.forEach(e=>{this._notifyObserver(e)})}_finishPromise(){if(void 0!==this._resolve){let e=!0;switch(taskStateFromInternalTaskState(this._state)){case f.SUCCESS:index_esm2017_async(this._resolve.bind(null,this.snapshot))();break;case f.CANCELED:case f.ERROR:let t=this._reject;index_esm2017_async(t.bind(null,this._error))();break;default:e=!1}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){let t=taskStateFromInternalTaskState(this._state);switch(t){case f.RUNNING:case f.PAUSED:e.next&&index_esm2017_async(e.next.bind(e,this.snapshot))();break;case f.SUCCESS:e.complete&&index_esm2017_async(e.complete.bind(e))();break;case f.CANCELED:case f.ERROR:default:e.error&&index_esm2017_async(e.error.bind(e,this._error))()}}resume(){let e="paused"===this._state||"pausing"===this._state;return e&&this._transition("running"),e}pause(){let e="running"===this._state;return e&&this._transition("pausing"),e}cancel(){let e="running"===this._state||"pausing"===this._state;return e&&this._transition("canceling"),e}};/**
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
 */let Reference=class Reference{constructor(e,t){this._service=e,t instanceof Location?this._location=t:this._location=Location.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Reference(e,t)}get root(){let e=new Location(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return lastComponent(this._location.path)}get storage(){return this._service}get parent(){let e=/**
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
 */function(e){if(0===e.length)return null;let t=e.lastIndexOf("/");if(-1===t)return"";let r=e.slice(0,t);return r}(this._location.path);if(null===e)return null;let t=new Location(this._location.bucket,e);return new Reference(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw new StorageError(s.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}};function extractBucket(e,t){let r=null==t?void 0:t[u];return null==r?null:Location.makeFromBucketSpec(r,e)}let FirebaseStorageImpl=class FirebaseStorageImpl{constructor(e,t,r,n,i){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=n,this._firebaseVersion=i,this._bucket=null,this._host=c,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,null!=n?this._bucket=Location.makeFromBucketSpec(n,this._host):this._bucket=extractBucket(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=Location.makeFromBucketSpec(this._url,e):this._bucket=extractBucket(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){validateNumber("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){validateNumber("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;let e=this._authProvider.getImmediate({optional:!0});if(e){let t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){let e=this._appCheckProvider.getImmediate({optional:!0});if(e){let t=await e.getToken();return t.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Reference(this,e)}_makeRequest(e,t,r,n,i=!0){if(this._deleted)return new FailRequest(appDeleted());{let s=function(e,t,r,n,i,s,o=!0){let a=makeQueryString(e.urlParams),l=e.url+a,h=Object.assign({},e.headers);return t&&(h["X-Firebase-GMPID"]=t),null!==r&&r.length>0&&(h.Authorization="Firebase "+r),h["X-Firebase-Storage-Version"]="webjs/"+(null!=s?s:"AppManager"),null!==n&&(h["X-Firebase-AppCheck"]=n),new NetworkRequest(l,e.method,h,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,o)}(e,this._appId,r,n,t,this._firebaseVersion,i);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,t){let[r,n]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,n).getPromise()}};let _="@firebase/storage",m="0.11.2",g="storage";function uploadBytesResumable(e,t,r){var n;return(n=e=(0,l.m9)(e))._throwIfRoot("uploadBytesResumable"),new UploadTask(n,new FbsBlob(t),r)}function getDownloadURL(e){return function(e){e._throwIfRoot("getDownloadURL");let t=function(e,t,r){let n=t.fullServerUrl(),i=makeUrl(n,e.host,e._protocol),s=e.maxOperationRetryTime,o=new RequestInfo(i,"GET",function(t,n){let i=fromResourceString(e,n,r);return handlerCheck(null!==i),function(e,t,r,n){let i=jsonObjectOrNull(t);if(null===i||!isString(i.downloadTokens))return null;let s=i.downloadTokens;if(0===s.length)return null;let o=encodeURIComponent,a=s.split(","),l=a.map(t=>{let i=e.bucket,s=e.fullPath,a="/b/"+o(i)+"/o/"+o(s),l=makeUrl(a,r,n),h=makeQueryString({alt:"media",token:t});return l+h});return l[0]}(i,n,e.host,e._protocol)},s);return o.errorHandler=objectErrorHandler(t),o}(e.storage,e._location,getMappings());return e.storage.makeRequestWithTokens(t,newTextConnection).then(e=>{if(null===e)throw new StorageError(s.NO_DOWNLOAD_URL,"The given file does not have any download URLs.");return e})}(e=(0,l.m9)(e))}function ref(e,t){return function(e,t){if(!(t&&/^[A-Za-z]+:\/\//.test(t)))return function refFromPath(e,t){if(e instanceof FirebaseStorageImpl){if(null==e._bucket)throw new StorageError(s.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+u+"' property when initializing the app?");let r=new Reference(e,e._bucket);return null!=t?refFromPath(r,t):r}return void 0!==t?function(e,t){let r=function(e,t){let r=t.split("/").filter(e=>e.length>0).join("/");return 0===e.length?r:e+"/"+r}(e._location.path,t),n=new Location(e._location.bucket,r);return new Reference(e.storage,n)}(e,t):e}(e,t);if(e instanceof FirebaseStorageImpl)return new Reference(e,t);throw invalidArgument("To use ref(service, url), the first argument must be a Storage instance.")}(e=(0,l.m9)(e),t)}function getStorage(e=(0,a.Mq)(),t){e=(0,l.m9)(e);let r=(0,a.qX)(e,g),n=r.getImmediate({identifier:t}),i=(0,l.P0)("storage");return i&&function(e,t,r,n={}){!function(e,t,r,n={}){e.host=`${t}:${r}`,e._protocol="http";let{mockUserToken:i}=n;i&&(e._overrideAuthToken="string"==typeof i?i:(0,l.Sg)(i,e.app.options.projectId))}(e,t,r,n)}(n,...i),n}(0,a.Xd)(new h.wA(g,function(e,{instanceIdentifier:t}){let r=e.getProvider("app").getImmediate(),n=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new FirebaseStorageImpl(r,n,i,t,a.Jn)},"PUBLIC").setMultipleInstances(!0)),(0,a.KN)(_,m,""),(0,a.KN)(_,m,"esm2017")}},function(e){var __webpack_exec__=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return __webpack_exec__(6840),__webpack_exec__(9974)}),_N_E=e.O()}]);