!function(n){function t(e){if(o[e])return o[e].exports;var r=o[e]={i:e,l:!1,exports:{}};return n[e].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var o={};t.m=n,t.c=o,t.d=function(n,o,e){t.o(n,o)||Object.defineProperty(n,o,{configurable:!1,enumerable:!0,get:e})},t.n=function(n){var o=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(o,"a",o),o},t.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},t.p="./",t(t.s=1)}([function(n,t){},function(n,t,o){n.exports=o(2)},function(n,t,o){o(3),o(4),o(5);var e=o(10);!function(){document.getElementsByClassName("button")&&new e}()},function(n,t){},function(n,t){},function(n,t,o){function e(n){return o(r(n))}function r(n){var t=c[n];if(!(t+1))throw new Error("Cannot find module '"+n+"'.");return t}var c={"./button/button.css":0,"./colophon/colophon.css":6,"./masthead/masthead.css":7,"./primary/primary.css":8,"./secondary/secondary.css":9};e.keys=function(){return Object.keys(c)},e.resolve=r,n.exports=e,e.id=5},function(n,t){},function(n,t){},function(n,t){},function(n,t){},function(n,t,o){function e(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}o(0);var r=function(){function n(){e(this,n),this.init()}return n.prototype.init=function(){for(var n=document.getElementsByClassName("button"),t=0;t<n.length;t++)n[t].addEventListener("click",function(n){n.preventDefault(),this.classList.toggle("button--hit")})},n}();n.exports=r}]);