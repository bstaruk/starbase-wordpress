!function(n){function t(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var e={};t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:o})},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},t.p="./",t(t.s=0)}([function(n,t,e){n.exports=e(1)},function(n,t,e){e(2),e(3);var o=e(8);!function(){document.getElementsByClassName("button")&&new o}()},function(n,t){},function(n,t,e){function o(n){return e(r(n))}function r(n){var t=c[n];if(!(t+1))throw new Error("Cannot find module '"+n+"'.");return t}var c={"./colophon.css":4,"./masthead.css":5,"./primary.css":6,"./secondary.css":7};o.keys=function(){return Object.keys(c)},o.resolve=r,n.exports=o,o.id=3},function(n,t){},function(n,t){},function(n,t){},function(n,t){},function(n,t,e){function o(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}e(9);var r=function(){function n(){o(this,n),this.init()}return n.prototype.init=function(){for(var n=document.getElementsByClassName("button"),t=0;t<n.length;t++)n[t].addEventListener("click",function(n){n.preventDefault(),this.classList.toggle("hit")})},n}();n.exports=r},function(n,t){}]);