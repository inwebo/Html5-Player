!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.subject=null}return r(e,[{key:"connect",value:function(e){}}]),e}();t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),i=(r=u)&&r.__esModule?r:{default:r};var c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default),o(t,[{key:"connect",value:function(e){this.subject=e.ctx.createOscillator(),this.subject.frequency.value=440,this.subject.connect(e.ctx.destination)}}]),t}();t.default=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),i=(r=u)&&r.__esModule?r:{default:r};var c=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.freqs=null,e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default),o(t,[{key:"connect",value:function(e){this.subject=e.ctx.createAnalyser(),this.subject.fftSize=256,this.subject.smoothingTimeConstant=.1,this.subject.minDecibels=-140,this.subject.maxDecibels=10,e.src.connect(this.subject),this.freqs=new Uint8Array(this.subject.frequencyBinCount)}},{key:"draw",value:function(e){this.subject.getByteFrequencyData(this.freqs);var t=e.getContext("2d");t.fillStyle="rgba(2,2,2,.1)",t.clearRect(0,0,e.width,e.height),t.fillRect(0,0,e.width,e.height);for(var n=0;n<this.subject.frequencyBinCount;n++){var r=this.freqs[n]/256,o=e.height*r,u=e.height-o,i=e.width/this.subject.frequencyBinCount,c=n/this.subject.frequencyBinCount*360;t.fillStyle="hsl("+c+", 100%, 50%)",t.fillRect(n*i,u,i,o)}}}]),t}();t.default=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),i=(r=u)&&r.__esModule?r:{default:r};var c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default),o(t,[{key:"connect",value:function(e){this.subject=e.ctx.createGain(),e.src.connect(this.subject),this.subject.connect(e.ctx.destination)}}]),t}();t.default=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0);(r=u)&&r.__esModule;var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.source=t,this.plugins=new Map}return o(e,[{key:"getVolume",value:function(){return this.plugins.get("_volume").subject}},{key:"add",value:function(e,t){try{this.plugins.set(e,t),t.connect(this.source)}catch(e){console.log(e)}}},{key:"play",value:function(e){this.source.src.start(e)}},{key:"volume",value:function(e){this.getVolume().gain.setTargetAtTime(e,this.source.ctx.currentTime,0)}}]),e}();t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.ctx=new(window.AudioContext||window.webkitAudioContext),this.src=this.ctx.createBufferSource()}return r(e,[{key:"load",value:function(e){var t=new XMLHttpRequest;t.open("GET",e,!0),t.responseType="arraybuffer",t.onload=function(){var e=this;this.ctx.decodeAudioData(t.response,function(t){e.src.buffer=t},function(e){console.log("Audio error! ",e)}).then(function(){return new CustomEvent("bufferready")})}.bind(this),t.send()}}]),e}();t.default=o},function(e,t,n){"use strict";var r=i(n(5)),o=i(n(4)),u=i(n(3));i(n(2)),i(n(1));function i(e){return e&&e.__esModule?e:{default:e}}var c=new r.default;c.load("./demos/audio/sample.mp3");var a=new o.default(c);a.add("_volume",new u.default),a.volume(1);document.getElementById("vue");var f=document.getElementById("player"),s=new(window.AudioContext||window.webkitAudioContext),l=s.createMediaElementSource(f),p=s.createBiquadFilter();p.type="lowshelf",p.frequency.value=1e3;var b=s.createGain();l.connect(p),p.connect(b),b.connect(s.destination),f.play(0)}]);
//# sourceMappingURL=app.js.map