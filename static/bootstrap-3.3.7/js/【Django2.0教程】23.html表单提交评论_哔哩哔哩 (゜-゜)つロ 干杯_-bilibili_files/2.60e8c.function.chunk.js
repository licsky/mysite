webpackJsonpwebpackReporter([2],{14:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))try{throw new TypeError("Cannot call a class as a function")}catch(e){}}e.__esModule=!0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p=o(1),s=n(p),f=function(){function t(e,o){i(this,t),this.divName1="report-scroll-module",this.win=e,this.spmPrefix=o+".",this.checkScroll()}return t.prototype.setSpmPrefix=function(t){this.spmPrefix=t+"."},t.prototype.throttleV2=function(t,e,o,n){var i,r=null;return function(){var p=this,s=arguments,f=+new Date;clearTimeout(r),n&&"function"==typeof n&&n(),i||(i=f),f-i>=o?(t.apply(p,s),i=f):r=setTimeout(function(){t.apply(p,s)},e)}},t.prototype.getOffset1=function(t){var e={top:0,left:0};return void 0!==r(t.getBoundingClientRect)&&(e=t.getBoundingClientRect()),{top:e.top+(window.pageYOffset||t.scrollTop)-(t.clientTop||0),left:e.left+(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}},t.prototype.judgeAppear=function(){for(var t=(void 0!==this.win.pageXOffset?this.win.pageXOffset:(document.documentElement||document.body.parentNode||document.body).scrollLeft,void 0!==this.win.pageYOffset?this.win.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop),e=this.win.screen.availHeight,o=document.querySelectorAll("."+this.divName1),n=0;n<o.length;n++)if(!o[n].getAttribute("scrollshow")){var i=this.getOffset1(o[n]).top;i>=t&&i+200<t+e&&(o[n].setAttribute("scrollshow",!0),this.todo("AppearInView",this.divName1,o[n].id,n))}},t.prototype.checkScroll=function(){var t=this;t.judgeAppear(),this.win.addEventListener("scroll",t.throttleV2(function(){t.judgeAppear()},100,200),!1)},t.prototype.todo=function(){for(var t=arguments.length,e=Array(t),o=0;o<t;o++)e[o]=arguments[o];var n=(e[0],e[1]),i=e[2],r=e[3],p={},f={};p.spm_id=this.spmPrefix+i+".0",p.timestamp=(new Date).getTime(),f.num=r+1,f.name=n,p.msg=JSON.stringify(f);var c={type:"appear",obj:p};s["default"].receiveGroupMsg(c)},t}();e["default"]=f}});