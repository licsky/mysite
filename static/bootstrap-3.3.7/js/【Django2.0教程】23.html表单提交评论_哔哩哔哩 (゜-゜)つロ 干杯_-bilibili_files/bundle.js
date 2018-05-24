!function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return e[i].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,exports,t){"use strict";window.BiliCm={env:"ENV_PRO",installed:!1},window.BiliCm.installed||(t(1),t(3),t(4),window.ad_rp=window.BiliCm.base=window.BiliCm.Base=t(5),window.BiliCm.Core=t(7),function($,e){e.BiliCm.installed=!0,e.BiliCm.Base.init(),$(function(){e.BiliCm.Core.init()})}(jQuery,window))},function(e,exports,t){"use strict";var n=t(2);e.exports=n},function(e,exports){"use strict";e.exports={API_BILIBILI_HOSTNAME:"//api.bilibili.com",DATA_BILIBILI_HOSTNAME:"//data.bilibili.com",CM_BILIBILI_HOSTNAME:"//cm.bilibili.com",MAIN_HOSTNAME:"www.bilibili.com",PGC_HOSTNAME:"bangumi.bilibili.com",VEDIO_URL_REG:/www\.bilibili\.com\/video\/av/i,BASE_AD_IMG:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAUBAMAAAAevyJ8AAAAMFBMVEUAAAAAAAD///8AAAAAAAAAAAD09PQAAAAAAAAAAAAAAAAAAAB1dXUAAACampqcnJz5p6DmAAAAEHRSTlMAIJkIDhiQQDgZMChOTUlIbtV9VgAAAKNJREFUGNNjwASegkhgCgMDyzMlJJDnwMCZA5TYtRGq4tgEBkZFoDYnYQZmZxMDBgYhAZAAc+B2LVFTrUULg6ECrCDd0UCsAhVg1BAUFBW6ful6owFYAGJMEEiZA5KAYXt5ObIKsEGqUDOsVYECQIMkFCECzELCqAIsigYgAaAWmApnBpAZWoJSMDPAACgMREABoOdAAOE5lm/I3s93wAggDAAAb40kwcFa11kAAAAASUVORK5CYII=",ADOBE_SHOCKWAVE_URL:"//www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash",GOOGLE_AD_JS_URL:"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",CM_AJAX_TIMEOUT:3e4}},function(module,exports){"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};"object"!==_typeof(window.JSON)&&(window.JSON={}),function(){function f(e){return e<10?"0"+e:e}function this_value(){return this.valueOf()}function quote(e){return rx_escapable.lastIndex=0,rx_escapable.test(e)?'"'+e.replace(rx_escapable,function(e){var t=meta[e];return"string"==typeof t?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,t){var n,i,r,a,o,s=gap,c=t[e];switch(c&&"object"===("undefined"==typeof c?"undefined":_typeof(c))&&"function"==typeof c.toJSON&&(c=c.toJSON(e)),"function"==typeof rep&&(c=rep.call(t,e,c)),"undefined"==typeof c?"undefined":_typeof(c)){case"string":return quote(c);case"number":return isFinite(c)?String(c):"null";case"boolean":case"null":return String(c);case"object":if(!c)return"null";if(gap+=indent,o=[],"[object Array]"===Object.prototype.toString.apply(c)){for(a=c.length,n=0;n<a;n+=1)o[n]=str(n,c)||"null";return r=0===o.length?"[]":gap?"[\n"+gap+o.join(",\n"+gap)+"\n"+s+"]":"["+o.join(",")+"]",gap=s,r}if(rep&&"object"===("undefined"==typeof rep?"undefined":_typeof(rep)))for(a=rep.length,n=0;n<a;n+=1)"string"==typeof rep[n]&&(i=rep[n],r=str(i,c),r&&o.push(quote(i)+(gap?": ":":")+r));else for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(r=str(i,c),r&&o.push(quote(i)+(gap?": ":":")+r));return r=0===o.length?"{}":gap?"{\n"+gap+o.join(",\n"+gap)+"\n"+s+"}":"{"+o.join(",")+"}",gap=s,r}}var rx_one=/^[\],:{}\s]*$/,rx_two=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,rx_three=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,rx_four=/(?:^|:|,)(?:\s*\[)+/g,rx_escapable=/[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,rx_dangerous=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},Boolean.prototype.toJSON=this_value,Number.prototype.toJSON=this_value,String.prototype.toJSON=this_value);var gap,indent,meta,rep;"function"!=typeof JSON.stringify&&(meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},JSON.stringify=function(e,t,n){var i;if(gap="",indent="","number"==typeof n)for(i=0;i<n;i+=1)indent+=" ";else"string"==typeof n&&(indent=n);if(rep=t,t&&"function"!=typeof t&&("object"!==("undefined"==typeof t?"undefined":_typeof(t))||"number"!=typeof t.length))throw new Error("JSON.stringify");return str("",{"":e})}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){function walk(e,t){var n,i,r=e[t];if(r&&"object"===("undefined"==typeof r?"undefined":_typeof(r)))for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(i=walk(r,n),void 0!==i?r[n]=i:delete r[n]);return reviver.call(e,t,r)}var j;if(text=String(text),rx_dangerous.lastIndex=0,rx_dangerous.test(text)&&(text=text.replace(rx_dangerous,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})),rx_one.test(text.replace(rx_two,"@").replace(rx_three,"]").replace(rx_four,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}()},function(e,exports){"use strict";!function($,e){var t=function(e,t){var n;return function(){function i(){e.apply(r,a),n=null}var r=this,a=arguments;n&&clearTimeout(n),n=setTimeout(i,t||100)}};jQuery.fn[e]=function(n){return n?this.on("resize",t(n)):this.trigger(e)}}(jQuery,"smartresize")},function(e,exports,t){"use strict";var n=t(1),i=t(6);e.exports=function($,e,t,n,i,r){var a={124:{slot:4993155050},126:{slot:6469888252},130:{slot:8033278259}},o={_list:[],_log:[],_cached:[],_loadTs:i.getNowTs(),_getNowTs:function(){return(new Date).getTime()},_getDataHostname:function(){return n["DATA_BILIBILI_HOSTNAME"]},_getCmHostname:function(){return n["CM_BILIBILI_HOSTNAME"]},_getWebAdLogUrl:function(){return this._getDataHostname()+"/v/web/web_cm_event"},_getApiPvUrl:function(){return this._getCmHostname()+"/cm/api/apidata/pc"},_getFeesUrl:function(){return this._getCmHostname()+"/cm/api/fees/pc"},_getShowContentUrl:function(){return this._getCmHostname()+"/cm/api/receive/content/pc"},_getClickContentUrl:function(){return this._getCmHostname()+"/cm/api/receive/content/pc/clk"},_getFeesSyncUrl:function(){return this._getCmHostname()+"/cm/api/fees/pc/sync"},_getFeesSyncUrlv2:function(){return this._getCmHostname()+"/cm/api/fees/pc/sync/v2"},_getCookie:function(t){if(document.cookie.length>0){var n=document.cookie.indexOf(t+"=");if(n!==-1){n=n+t.length+1;var i=document.cookie.indexOf(";",n);return i===-1&&(i=document.cookie.length),e.decodeURIComponent(document.cookie.substring(n,i))}return""}return""},_checkAd:function(e){return!(!e["is_ad_loc"]||!e["ad_cb"])},_genMark:function(e,t){var n=Object.prototype.toString||null,i=[e.id||"",e.request_id||"",e.creative_id||"",e.src_id||"",e.locid||e.locId||e.resource_id||""];if(t&&n)if("[object Array]"===n.call(t))for(var r=0;r<t.length;r++)i.push(t[r]);else"[object String]"===n.call(t)&&i.push(t);return i.join("|")},_genGoogleScript:function(e){var t=a[e]||{};return'<script async src="'+n["GOOGLE_AD_JS_URL"]+'"></script><ins class="adsbygoogle" style="display:inline-block;width:468px;height:60px" data-ad-client="ca-pub-7192215716035284" data-ad-slot="'+(t["slot"]||"")+'"></ins> <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>'},_genReqOpsSe:function(e,t,n,i,r){var a=this;return{uploads:[{a:e.src_id||"",b:e.server?e.server:"bilibili",c:e.is_ad?1:0,d:$.isNumeric(e.area)?e.area:"",e:e.ad_cb||"",f:t||"",g:1,h:e.pos_num,i:r||a._getCookie("DedeUserID")||"",j:n||"",k:a._getNowTs(),l:i||e.resource_id||"",m:a._loadTs,n:$.isNumeric(e.server_type)?e.server_type:"",o:e.id||""}]}},_genReqOpsPro:function(e,t,n){var i=this;return{uploads:[{src_id:e.src_id||"",ad_server:e.server?e.server:"bilibili",is_ad:e.is_ad?1:0,area:$.isNumeric(e.area)?e.area:"",ad_cb:e.ad_cb||"",event:t||"",is_visible:1,idx:e.pos_num,mid:i._getCookie("DedeUserID"),client_version:n||"",ts:i._getNowTs(),resource_id:e.resource_id&&$.isNumeric(e.resource_id)?e.resource_id:"",load_ts:i._loadTs||"",server_type:$.isNumeric(e.server_type)?e.server_type:"",id:e.id||""}]}},_genReqDataParams:function(e,t,n,i,r){var a=this,o=a._genReqOpsSe(e,t,n,i,r),s=function(e){for(var t=[],n=0,i=e["uploads"].length;n<i;n++){var r=e["uploads"][n],a=[];for(var o in r)a.push(o+"|"+r[o]);t.push(a.join(","))}return t.join("||")};return s(o)||""},_genReqGetOps:function(e,t,n,i){var r=this;return{url:e+"?msg="+encodeURIComponent(r._genReqDataParams(t,n,i))+"&ts="+r._getNowTs(),type:"GET",dataType:"json",xhrFields:{withCredentials:!0},success:function(e){},error:function(e){}}},_genReqPostOps:function(e,t,n,i,r,a){var o=this,s=JSON.stringify(o._genReqOpsPro(t,n,i));return{url:e,type:"POST",data:$.browser.msie&&parseInt($.browser.version,10)<=9?{message:s}:s,headers:{"Content-Type":"application/json"},contentType:"application/json",dataType:"json",xhrFields:{withCredentials:!0},success:function(e){r&&r(e)},error:function(e){a&&a(e)}}},_sendTposReq:function(e){var t=this,n=!!e&&e["show_url"]||"";if(!n)return!1;var i=new Image(1,1);i.onload=i.onerror=function(){i=null},i.src=t._repMacroArgs(n,!!e&&e["request_id"]||"")},_genLogReqOps:function(t){var n=function(e){return e===r?"":"boolean"==typeof e?e?1:0:"number"==typeof e?e?1:0:e?1:0};return{log_name:t["log_name"],page_ref:e.encodeURIComponent(e.location.href),resource_id:t["resource_id"],src_id:t["src_id"]!==r?t["src_id"]:"",is_cm_loc:n(t["is_ad_loc"]),is_cm:n(t["is_ad"]),event:t["event"]!==r?t["event"]:"",ts:t["ts"]}},_showCmReport:function(e,t,n){var r=this,a=$.extend({},e.data,{ts:r._getNowTs(),_:parseInt(1e6*Math.random(),10)});!!a&&r._sendTposReq(a),i.adPostJSONLite(r._genReqPostOps(r._getFeesUrl(),a,t,e.version||"",function(){n&&n()}))},_showContentReport:function(e,t,n){var r=this,a=$.extend({},e.data,{ts:r._getNowTs(),_:parseInt(1e6*Math.random(),10)});i.adPostJSONLite(r._genReqPostOps(r._getShowContentUrl(),a,t,e.version||"",function(){n&&n()}))},_removeItem:function(e,t){for(var n=this,i=n._genMark(t),r=0,a=e.length;r<a;r++)if(n._genMark(e[r])===i)return e.splice(r,1),!0;return!1},_resetSyncUrlTs:function(e){var t=this,n="",i=/ts=\d{13}/gi,r=$(e),a="a"!==e.tagName.toLowerCase()?$("a",r):r;return!!a.length&&(n=a.attr("href")||null,void(n&&i.test(n)&&a.attr("href",n.replace(i,"ts="+t._getNowTs()))))},_hitCmReport:function(e,t){var n=this,r=$.extend({},e.data,{ts:n._getNowTs(),_:parseInt(1e6*Math.random(),10)});i.adPostJSONLite(n._genReqPostOps(n._getFeesUrl(),r,t,e.version||""))},_hitContentReport:function(e,t){var n=this,r=$.extend({},e.data,{ts:n._getNowTs(),_:parseInt(1e6*Math.random(),10)});i.adPostJSONLite(n._genReqGetOps(n._getClickContentUrl(),r,t,e.version||""))},_repMacroArgs:function(e,t,n,i){var r=this._getCookie||null;return n=n||r&&r("DedeUserID")||"",i=i||r&&r("buvid3")||"",e=e?e.replace("__MID__",n).replace("__BUVID__",i).replace("__REQUESTID__",t):""},_bindEvent:function(){var n=this,i=$(t),r=$(e);r.on("scroll.filter",function(){n._filter()}),i.on("add.BiliCm",function(e,t){n.add(t.elem,t.data)}),i.on("send.BiliCm",function(e,t){n.send(t.event,t.data,t.version)}),r.on("scroll.BiliCm",function(){n._filter()})},_checkUrl:function(e){return e.replace(/^http:\/\//i,"//").replace(/(\/av\d+)$/,"$1/")},_genSyncParams:function(e,t,n,i){var r=this,a=r._getCookie("DedeUserID")||"";return"msg="+encodeURIComponent(r._genReqDataParams(e,i,n,t,a))+"&ts="+r._getNowTs()},_getSyncUrl:function(e,t,n){var i=this,r=e["url"]||"",a="javascript:void(0);";if(!r)return a;if(!i._checkAd(e))return i._checkUrl(r);try{return i._getFeesSyncUrlv2()+"?"+i._genSyncParams(e,t,n,"click_sync_3")}catch(o){return i._checkUrl(r)}},_send:function(e,t,n){var r=this,a=!e||"show"!==e&&"strict_show"!==e&&"click"!==e?r._getApiPvUrl():r._getFeesUrl(),o=$.extend({},t,{ts:r._getNowTs(),_:parseInt(1e6*Math.random(),10)});return("click"!==e||!r._checkAd(o))&&void i.adPostJSONLite(r._genReqPostOps(a,o,e,n))},_filter:function(){var e=this;for(var t in e._list)e._list.hasOwnProperty(t)&&e._watch(e._list[t])},_watch:function(t){var n=this,i=$(e),r=$(t.el),a=t.data,o=t.height=t.height||r.height(),s=t.top=t.top||r.offset()&&r.offset().top,c=i.scrollTop(),d=c+i.height(),l=!!a.server||t.img[0]&&t.img[0].complete;s+Math.floor(o/2)>c&&s+Math.floor(o/2)<d&&l&&(a["is_ad_loc"]?a.focus?a.show&&n._showCmReport(t,"show"):n._showCmReport(t,"show"):a.focus?a.show&&n._showContentReport(t,"show"):n._showContentReport(t,"show"),n._removeItem(n._list,t))},_add:function(t,n){var r=this,a=n["resource_id"]||$(t).attr("data-loc-id")||$("[data-loc-id]",t).attr("data-loc-id"),o={el:t,locid:a,id:n.id||"",request_id:n.request_id||"",creative_id:n.creative_id||"",src_id:n.src_id||"",data:n?n["resource_id"]?n:$.extend(n,{resource_id:a?+a:""}):null,img:$("img",t)},s=r._genMark(o);try{n&&n.is_ad_loc&&i.adPostJSONLite(r._genReqPostOps(r._getApiPvUrl(),n,"apidata"))}catch(c){}if(n.is_ad&&n.is_ad_loc||$("img[img-ad]",t).remove(),r._log.indexOf(s)===-1){var d=e.navigator.userAgent.match(/iPad/i)?"touchstart":"click",l=$(t)||null;if(r._log.push(s),r._list.push(o),n.focus&&(n.trigger=function(){r._filter()}),r._checkAd(n))return!1;l&&l.on(d,function(e){n["is_ad_loc"]?(r._resetSyncUrlTs(e.currentTarget),r._hitCmReport(o)):r._hitContentReport(o)})}},_checkedRepeat:function(e){for(var t=this._cached,n=0,i=t.length;n<i;n++)if(t[n]===e)return!0;return!1},_insertFlag:function(e){return this._cached.push(e),!0},_sendApidataData:function(e,t,n,r){var a=this,o=$.extend({},e,{resource_id:t||"",ts:a._getNowTs(),_:parseInt(1e6*Math.random(),10)});return i.adPostJSONLite(a._genReqPostOps(a._getApiPvUrl(),o,r,n)),!0},_sendShowData:function(e,t,n,i){var r=this,a={data:$.extend({},e,{resource_id:t||""}),version:n},o=r._genMark(a.data,[i]);return!r._checkedRepeat(o)&&(e["is_ad_loc"]?r._showCmReport(a,i):r._showContentReport(a,i),r._insertFlag(o),!0)},_sendClickData:function(e,t,n,i){var r=this,a={data:$.extend({},e,{resource_id:t||""}),version:n};return!r._checkAd(e)&&(e["is_ad_loc"]?r._hitCmReport(a,i):r._hitContentReport(a,i),!0)},_sendContentShowData:function(e,t,n,i){var r=this,a={data:$.extend({},e,{resource_id:t||""}),version:n},o=r._genMark(a.data,[i]);return!r._checkedRepeat(o)&&(r._showContentReport(a,i),r._insertFlag(o),!0)},_sendContentClickData:function(e,t,n,i){var r=this,a={data:$.extend({},e,{resource_id:t||""}),version:n};return r._hitContentReport(a,i),!0},_reset:function(){var e=this;e._list=[],e._log=[],e._cached=[],e._loadTs=i.getNowTs()},_init:function(){var e=this,t=function n(){e._filter(),setTimeout(function(){n()},2e3)};t(),e._bindEvent()}};return{sendApidataData:function(e,t,n){return o._sendApidataData(e,t,n,"apidata")},sendShowData:function(e,t,n){return o._sendShowData(e,t,n,"show")},sendStrictShowData:function(e,t,n){return o._sendShowData(e,t,n,"strict_show")},sendContentShowData:function(e,t,n){return o._sendContentShowData(e,t,n,"show")},sendContentStrictShowData:function(e,t,n){return o._sendContentShowData(e,t,n,"strict_show")},sendClickData:function(e,t,n){return o._sendClickData(e,t,n,"click")},sendContentClickData:function(e,t,n){return o._sendContentClickData(e,t,n,"click")},send:function(e,t,n){return o._send(e,t,n)},add:function(e,t){return o._add(e,t)},getGoogleScript:function(e){return o._genGoogleScript(e)},formatCmSyncUrl:function(e,t,n){return this.getSyncUrl(e,t,n)},getSyncUrl:function(e,t,n){return o._getSyncUrl(e,t,n)},reset:function(){return o._reset()},init:function(){return o._init()}}}(jQuery,window,document,n,i)},function(e,exports,t){"use strict";var n=t(1);e.exports=function($,e,t,n){return{getNowTs:function(){return Date.now?Date.now():(new Date).getTime()},adJsonp:function(e){if(e.url){var t={type:"GET",url:e.url,dataType:"jsonp",data:e.data,success:e.success||function(e){},error:e.error||function(e){}};e.callback&&(t.callback=e.callback),this.sendReq(t)}},sendReq:function(t){var i=function(e){e&&!e["timeout"]&&n&&n["CM_AJAX_TIMEOUT"]&&(e["timeout"]=n["CM_AJAX_TIMEOUT"]),$.ajax(e)};try{if(t&&t.data&&t.data.ids&&/124/.test(t.data.ids)){var r=function(t){i({url:n["DATA_BILIBILI_HOSTNAME"]+"/v/web/web_cm_event",dataType:"jsonp",type:"GET",data:{log_name:t["log_name"],page_ref:e.encodeURIComponent(e.location.href),resource_id:"124,126,130",src_id:"125,127,131"},success:function(){},error:function(){}})},a=$.extend({},t,{beforeSend:function(){return r({log_name:"apidata-request-beforeSend"}),!0},success:function(){var e=Array.prototype.slice.call(arguments);r({log_name:"apidata-request-success"}),t.success.apply(t,e)},error:function(){var e=Array.prototype.slice.call(arguments);r({log_name:"apidata-request-error"}),t.error.apply(t,e)},complete:function(){r({log_name:"apidata-request-complete"})}});return r({log_name:"apidata-request-before"}),i(a)}}catch(o){}return i(t)},adPostJSONLite:function(e,t){$.browser.msie&&parseInt($.browser.version)<=9?(e.data.script="script",e.callback=t&&t.callback?t.callback:null,this.adPostJSON(e)):this.sendReq(e)},adPostJSON:function(n){var i=e.location.href||"",r=function(n,i){e.Bilibili&&(e.Bilibili.interface_domain=n),t.domain=i};i.match(/\.bilibili\.tv/)?r("interface.bilibili.tv","bilibili.tv"):i.match(/\.bilibili\.com/)?r("interface.bilibili.com","bilibili.com"):r("interface.bilibili.cn","bilibili.cn");var a=n.callback||"_jsonpCallback_"+(new Date).getTime(),o=$('<iframe name="frm'+a+'" id="frm'+a+'" style="visibility:hidden; width:1px; height:1px"></iframe>').appendTo("body"),s=$('<form action="'+n.url+'" enctype="application/x-www-form-urlencoded" method="POST" target="frm'+a+'"></form>').appendTo("body");"undefined"==typeof n.data&&(n.data={}),n.data[n.jsonpCallback||"callback"]=a;for(var c in n.data)$('<input type="hidden" name="'+c+'" />').appendTo(s).val(n.data[c]);e[a]=function(e){"function"==typeof n.success&&n.success(e),"function"==typeof n.complete&&n.complete(e),o.remove(),s.remove()},s.submit()}}}(jQuery,window,document,n)},function(e,exports,t){"use strict";var n=t(1),i=t(6),r=t(8),a=t(9);e.exports=function($,e,t,n,i,r,a,o){var s=e.BiliCm||{},c={0:[40,42,44],1:[151,152,153],3:[243,245,247],129:[249,251,253],4:[255,257,259],36:[261,263,265],160:[273,275,277],5:[267,269,271],119:[285,287,289],155:[279,281,283]},d={124:["arc",51,".ad-fl",4993155050],126:["arc",46,".ad-fr",6469888252],130:["arc",3,".ad-e1",8033278259]},l={banner:{wide:{width:1160,height:96},thin:{width:980,height:80}},arc:{wide:{".ad-e1":{width:870,height:72},".ad-fl":{width:468,height:60},".ad-fr":{width:468,height:60}},thin:{".ad-e1":{width:690,height:56},".ad-fl":{width:468,height:60},".ad-fr":{width:468,height:60}}}},u={indexAd1:1630,indexAd2:1630,indexAd3:2,indexAd4:3,indexAd5:4,partitionAd1:11,partitionAd2:11,partitionAd3:12,partitionAd4:13,partitionAd5:14,secondPartitionAd1:11,secondPartitionAd2:11,rankAd1:1626,rankAd2:1626,rankAd3:136,rankAd4:138,topicAd1:132,topicAd2:134,topicAd3:1628},f={1:"1578",13:"1614",3:"1582",129:"1586",4:"1590",36:"1594",160:"1602",119:"1610",155:"1606",5:"1598"};return function(){var t=s&&s.Base||{},r={_adCache:{},_getScreenType:function(){return $("body").hasClass("widescreen")?"wide":"thin"},_isWideScreen:function(){return!!$("body").hasClass("widescreen")},_getResLocsUrl:function(){return n["API_BILIBILI_HOSTNAME"]+"/x/web-show/res/locs"},_getKeys:function(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n);return t},_winSmartSize:function(t){var n=this;$(e).smartresize(function(){$.isFunction(t)&&t.call(n)})},_sendAdData:function(e,n){return t&&$.isFunction(t.add)&&t.add(e,n)},_newAdAjaxs:function(e,t,n){for(var r=this,a=[],o=0,s=e.length;o<s;o++)a.push(e[o]);return i.adJsonp({url:r._getResLocsUrl(),data:{pf:0,ids:a.sort(function(){return 1}).join(","),jsonp:"jsonp"},success:function(i,a,o){i&&0===i.code?!!t&&$.isFunction(t)&&t.call(r,i,n):r._errorHandle(e,1)},error:function(t,n,i){r._errorHandle(e,2)}})},_createBannerAd:function(e){var t=$('<span style="display: none; overflow: hidden; border-radius: 5px; position: relative;"><a target="_blank"><img style="width: 100%; height: 100%;" /><img img-ad src="'+n["BASE_AD_IMG"]+'" style="width:32px;height:20px;position:absolute;left:2px;bottom:2px;" /></a></span>'),i=t.find("a"),r=t.find("a img:eq(0)");return t.attr({"data-loc-id":e||"","data-ad-type":"banner"}),{bannerWrp:t,bannerLink:i,bannerImg:r}},_resetBannerSize:function(e,t){var n=this,i={display:"block"},r=n._adCache,a=e["banner"][n._getScreenType()],o=function(e){return!!e&&(e.bannerLink.data("target-url")?e.bannerWrp.css($.extend({width:a["width"],height:a["height"],visibility:"visible"},t||{},i)):e.bannerWrp.css($.extend({width:a["width"],height:"1px",margin:"0 auto",visibility:"hidden"},i)),void e.bannerWrp.show())};for(var s in r)o(r[s])},_createBannerTpl:function(e,t){for(var n=this,i=n._adCache||(n._adCache={}),r=0,a=e.length;r<a;r++){var o=n._createBannerAd(e[r]||"");t&&o.bannerWrp.css(t),i["bannerAd_"+e[r]]=o}},_mainBannerRender:function(t,n,i){var r=this,a=e.localStorage||null,o=a&&a.getItem("killSideBarAd");if(parseInt(o)+864e5>(new Date).getTime())return!1;var s=r["_adCache"]["bannerAd_"+(n||t["resource_id"])]||null;return!!s&&(s["bannerLink"].css({display:"block"}).attr({"data-target-url":t.url||"",href:t.url?i&&$.isFunction(i.getSyncUrl)?i.getSyncUrl(t,n||t["resource_id"]):t.url:"javascript: void(0);"}),s["bannerImg"].attr({src:t.pic||t.litpic||""}),s["bannerWrp"].attr({"data-id":t.id,"data-name":t.name||""}).show(),s["bannerWrp"])},_mainSuccessHandle:function(e,t){var n=this,i=e.data||{};for(var r in i){var a=i[r]&&i[r][0];if(a)if(a){var o=$.extend(a,{loc_id:+r,resource_id:+r}),s=n._mainBannerRender(o,r,t)||null;s&&n._sendAdData(s,o)}else n._errorHandle([r],0)}},_errorHandle:function(e,t){for(var n=this,i=$(document),r=0,a=e.lenth;r<a;r++){var o=n["_adCache"]["bannerAd_"+e[r]]||null;o&&o["bannerWrp"]&&o["bannerWrp"].attr({"data-error-type":t}),i.trigger("adLoadError",{"data-loc-id":e[r],"data-error-type":t})}},_vedioSuccessHandle:function(e,t,i){var r=this,a=e.data,o=function(e,t,i,a,o){try{var s=t[0],c=t[1],d=t[2],l=$(d);if(l.html(""),i["is_ad_loc"]&&0!==i.area&&1!==i.area)return i.server="google",l.css({"text-align":"center",display:"block"}).html('<script async src="'+n["GOOGLE_AD_JS_URL"]+'"></script><ins class="adsbygoogle" style="display:inline-block;width:468px;height:60px" data-ad-client="ca-pub-7192215716035284" data-ad-slot="'+t[3]+'"></ins> <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>').show(),!0;if($(d+" #a_ds_"+c).remove(),"img"===a){var u=i["url"]?o&&$.isFunction(o.getSyncUrl)?o.getSyncUrl(i,e):i["url"]:"javascript: void(0);";126===+e&&i["url"].indexOf("i8952")>-1&&(u=i["url"]);var f=['<a id="a_ds_'+c+'" data-id="'+(i["id"]||"")+'" data-loc-id="'+(e||"")+'" href="'+u+'" data-target-url="'+(i["url"]||"")+'" target="_blank" style="display: block; position: relative;">','<img src="'+i["pic"]+'" border="0" />',"</a>"];i.is_ad_loc&&i.is_ad&&f.splice(-1,0,'<img img-ad src="'+n["BASE_AD_IMG"]+'" style="width:32px;height:20px;position:absolute;left:2px;bottom:2px;">'),l.html(f.join("")),r._sendAdData(l.find("a[data-loc-id]"),i)}else l.html('<embed id="a_ds_'+c+'" wmode="opaque" pluginspage="'+n["ADOBE_SHOCKWAVE_URL"]+'" allowscriptaccess="none" rel="noreferrer" src="'+(isWide?i["pic"]:i["pic"])+'" type="application/x-shockwave-flash" allowfullscreen="true" quality="high">');l.attr({"b-stat":s+d,"b-stat-v":i["url"]||""}).css({overflow:"hidden",position:"relative",height:i["url"]?"auto":"1px",visibility:i["url"]?"visible":"hidden"}),l.show()}catch(p){}};if($.isPlainObject(a))for(var s in a)if(a.hasOwnProperty(s)){var c=t[s]||null,d=a[s]&&a[s][0]||null;c&&d&&o(s,c,d,"img",i)}},_resetVedioBanner:function(e,t){var n=this;for(var i in e){var r=e[i],a=r[2],o=t[r[0]][n._getScreenType()][a],s=$(a).find("a[data-loc-id]");s.data("target-url")?s.find("img").attr({width:o["width"],height:o["height"]}):s.find("img").attr({width:o["width"],height:1})}},_bindEvent:function(){$(e).on("onNavigatorChange",function(){})},_genBanner:function(e){var t=this,n=e.ids||[],i=e.callback||function(){},r=$.extend(e.initStyle||{},{overflow:"hidden"}),a=e.adsSize||a,o=e.resize||!0,s=e.cmBase||{};t._createBannerTpl(n,r),t._newAdAjaxs(n,function(e){t._mainSuccessHandle(e,s),$.isFunction(i)&&i.call(t,t["_adCache"]),o&&t._resetBannerSize(a,r)}),o&&t._winSmartSize(function(){t._resetBannerSize(a,r)})},_init:function(r,o,s,c,d){var l=this,u=[],f=e.location,p=f.pathname,_=f.hostname,h=/^\/video\/(douga|music|dance|game|technology|life|ent|kichiku|fashion)\.html$/,g=/^\/video\/av/gi,m=/^\/video\//i,v=/^\/topic\/[^i]/,w=/^(\/blackboard\/)/i,b=/^(\/video\/av)/i,A=$(".header .num .m-i.on").attr("data-tid"),y=$("#home-app"),x=$("#channel-app"),S=$("#video-page-app"),C=$("#rank-app"),I={adsSize:d,resize:!0,cmBase:t};if(o.partitionAd1=o.partitionAd2=s[A],l._bindEvent(),_===n["MAIN_HOSTNAME"])if("/"===p||"/index.html"===p){if(y.length)return!1;u=[r[0][0],r[0][1],r[0][2]];var O=[{idx:0,locId:u[0]},{idx:2,locId:u[1]},{idx:4,locId:u[2]}],k=null,T=null,D=[500,500,500,1e3,1e3,1e3,2e3,2e3,2e3,3e3,5e3,8e3,1e4,1e4,1e4],B=function(e,t,n){for(var i=0,r=n.length;i<r;i++)e.eq(n[i]["idx"]).after(t["bannerAd_"+n[i]["locId"]]["bannerWrp"])},N=function U(){var t,n,r=$(".container-row").not("#b_tag_promote");try{n=e.indexNav&&e.indexNav.localDataName?e.indexNav.localDataName:"index_user_setting",t=e.ChatGetSettings&&$.isFunction(e.ChatGetSettings)?JSON.parse(e.ChatGetSettings(n)||"{}"):null}catch(a){t=null}if(k&&r.length>=5&&(e.biliLoginStatus&&!e.biliLoginStatus.isLogin||e.biliLoginStatus&&e.biliLoginStatus.isLogin&&t&&t.expires>i.getNowTs()))return B(r,k,O);var o=D.shift()||null;o&&(clearTimeout(T),T=setTimeout(function(){U()},o))};I["ids"]=u,I["initStyle"]={margin:"0 auto 10px",position:"relative",top:"-10px"},I["callback"]=function(e){k=$.extend({},e)},l._genBanner(I),N()}else if(h.test(p)&&r[e.tid]){if(x.length)return!1;u=[r[e.tid][0],r[e.tid][1],r[e.tid][2]];var O=[{idx:0,locId:u[0]},{idx:2,locId:u[1]},{idx:4,locId:u[2]}];I["ids"]=u,I["initStyle"]={margin:"0 auto 10px",position:"relative",top:"-10px"},I["callback"]=function(e){setTimeout(function(){for(var t=$(".container-top-wrapper"),n=$(".container-row").not("#b_tag_promote"),i=0,r=O.length;i<r;i++){var a=e["bannerAd_"+O[i]["locId"]]["bannerWrp"];0===i?t.after(a):1===i?n.eq(O[i]["idx"]).after(a):2===i&&(n.length-1>3?n.eq(O[i]["idx"]).after(a):n.last().after(a))}},0)},l._genBanner(I)}else{if(!h.test(p)&&!g.test(p)&&m.test(p))return!1;if("/ranking"===p||"/ranking_beta"===p){if(C.length)return!1;u=[o.rankAd3,o.rankAd4];var O=[{idx:0,locId:u[0]},{idx:0,locId:u[1]}];I["ids"]=u,I["initStyle"]={margin:"20px auto"},I["callback"]=function(e){setTimeout(function(){for(var t=$("body > .b-page-body"),n=O.length-1;n>=0;n--)t.eq(0).after(e["bannerAd_"+O[n]["locId"]]["bannerWrp"])},0)},l._genBanner(I)}else if(v.test(p)){u=[o.topicAd1,o.topicAd2];var O=[{idx:0,locId:u[0]},{idx:0,locId:u[1]}];I["ids"]=u,I["initStyle"]={margin:"20px auto"},I["resize"]=!1,I["callback"]=function(e,t){setTimeout(function(){for(var t=$("body > .b-page-body"),n=O.length-1;n>=0;n--)t.eq(0).after(e["bannerAd_"+O[n]["locId"]]["bannerWrp"])},0)},l._genBanner(I)}else if(w.test(p)&&"1"===e.__pageType){u=[o.topicAd1,o.topicAd2];var O=[{idx:0,locId:u[0]},{idx:0,locId:u[1]}];I["ids"]=u,I["initStyle"]={margin:"20px auto"},I["resize"]=!1,I["callback"]=function(e,t){setTimeout(function(){for(var t=$("body .box-body"),n=O.length-1;n>=0;n--)t.eq(0).after(e["bannerAd_"+O[n]["locId"]]["bannerWrp"])},0)},l._genBanner(I)}else if(b.test(p))return!S.length&&(u=l._getKeys(c),l._newAdAjaxs(u,function(e){l._vedioSuccessHandle(e,c,t),l._resetVedioBanner(c,d)}),l._winSmartSize(function(){l._resetVedioBanner(c,d)}),!0)}else _===n["PGC_HOSTNAME"]&&a.mainAd(t)},_reset:function(e,n,i,r,a){var o=this;t.reset(),o._init(e,n,i,r,a)}};return{init:function(){return r._init(c,u,f,d,l)},reset:function(){return r._reset(c,u,f,d,l)}}}()}(jQuery,window,document,n,i,r,a)},function(e,exports){"use strict";e.exports=function(e,t){return{isWebp:function(){try{return 0==t.createElement("canvas").toDataURL("image/webp").indexOf("data:image/webp")}catch(e){return!1}}(),setSrc:function(e){var t=this._urlFormat(e);e=t?t:e;var n="",i=e.match(/_(\d+)x(\d+)./),r=e.indexOf("/bfs/")!=-1,a=e.indexOf(".gif")!=-1,o=e.indexOf(".webp")!=-1;return!this.isWebp||!r||a||o?e.replace(/^http:/i,""):(n=null===i?e+"@.webp":e.substring(0,e.lastIndexOf("_"))+"@"+i[1]+"w_"+i[2]+"h.webp",n.replace(/^http:/i,""))},_urlFormat:function(t){var n=/\/\d+?_\d+?\/bfs/,i=t.replace(n,"/bfs"),r=e.RegExp;if(!n.test(t))return!1;var a=/\/(\d+?)_(\d+?)\/bfs\/\w+?\/.+?(\.\w{3,4})/;a.exec(t);return i+"_"+r.$1+"x"+r.$2+r.$3}}}(window,document)},function(e,exports,t){"use strict";function n(e,t){var n=m["home"][w()]||{},i={display:"block"};t?e.css($.extend({width:n["width"],height:n["height"],margin:"0px auto 50px",visibility:"visible"},i)):e.css($.extend({width:n["width"],height:"1px",margin:"0px auto",visibility:"hidden"},i))}function i(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0}function r(e,t,n){e=e.data||e,t=t||e["resource_id"]||"";var i=e["url"]||"",r=i?n&&$.isFunction(n.getSyncUrl)?n.getSyncUrl(e,t):i:"javascript: void(0);";return'<a data-name="'+e.name+'" href="'+r+'" data-target-url="'+i+'" target="_blank" style="display:block; position:relative;" rel="nofollow">'+(e.is_ad_loc&&e.is_ad?'<img src="'+f["BASE_AD_IMG"]+'" style="width:32px;height:20px;margin-right:5px;position:absolute;bottom:2px;left:2px;" />':"")+'<img src="'+(e.pic||"")+'" alt="'+e.name+'" style="width:100%;height:100%;" /></a>'}function a(e,t){if(e&&!h[e.request_id+e.src_id+e.creative_id]&&($.isFunction(t.send)&&(h[e.request_id+e.src_id+e.creative_id]=e,t.send("show",e)),e.show_url)){var n=new Image(1,1);n.onload=n.onerror=function(){n=null},n.src=e.show_url}}function o(e,t){e&&$.isFunction(t.send)&&t.send("click",e)}function s(e){clearTimeout(_),_=setTimeout(function(){$("div[data-loc-id], span[data-loc-id]").each(function(t,n){var i=$(n),r=$(window),o=$(n).data("loc-id"),s=window.adDatasLoc[o],c=i.height(),d=i.offset().top>0?i.offset().top:n.offsetTop,l=r.scrollTop(),u=l+r.height();d>l-c/2&&d+c/2<u&&a(s,e)})},0)}function c(e,t){p.adJsonp({url:f["API_BILIBILI_HOSTNAME"]+"/x/web-show/res/locs",data:{pf:0,ids:e&&e.idObj||"",jsonp:"jsonp"},success:function(n){0!==n.code||i(n.data)||t(n.data,e)},error:function(){return!1}})}function d(e,t){var i=t.cmBase||{};m["home"][w()];for(var a in e){var o=e[a]&&e[a][0]||null,c=null;if(o){if(o["resource_id"]=parseInt(a,10),window.adDatasLoc[a]=o,c=$("div[data-loc-id="+a+"]"),c.length||(c=$("span[data-loc-id="+a+"]")),!c.length)return!1;c.css({overflow:"hidden","border-radius":"5px",position:"relative"}).attr({"data-id":o.id}).html(r({data:o,type:window.tid||23},parseInt(a,10),i)),n(c,!!o.url),c.show();try{o.is_ad_loc&&i&&$.isFunction(i.send)&&i.send("",o)}catch(d){}}}s(i)}function l(e,t){var n=t.cmBase||{};m["play"]["f-wide"],m["play"]["e-wide"];for(var i in e){var a=e[i][0],o=null;if(a){if(a["resource_id"]=parseInt(i,10),window.adDatasLoc[i]=a,o=$("div[data-loc-id="+i+"]"),o.length||(o=$("span[data-loc-id="+i+"]")),!o.length)return!1;o.css({overflow:"hidden"}).attr({"data-id":a.id}).html(r({data:a,type:""},parseInt(i,10),n)),a.url||o.css({height:"1px"}),o.show();try{a.is_ad_loc&&n&&$.isFunction(n.send)&&n.send("",a)}catch(c){}}}s(n)}function u(e){e=e||window.BiliCm&&window.BiliCm.Base||{};var t=window.tid,i=null,r=$(window),a=window.location.pathname,u=["13","23","11","167"];if(u.indexOf(t)>-1)i=g[t],i&&c({idObj:i,cmBase:e},d);else if(/^\/33\//.test(a))i=g["bm"],i&&c({idObj:i,cmBase:e},d);else{var f=$(".movie_head");if(f&&f.length&&f.attr("style"))return!1;try{var p=a.substr(1).split("/")[0];"anime"!==p&&"movie"!==p||($(".ad-fl").length||$(".ad-fr").length||$(".ad-e1").length)&&(i=g[p],i&&c({idObj:i,cmBase:e},l))}catch(_){}}r.resize(function(t){var i=$("body").hasClass("widescreen"),r=$("div[data-loc-id]").length?$("div[data-loc-id]"):$("span[data-loc-id]"),a=$(".couplet"),o=$(window).width(),c=(o-1160)/2-118-20,d=(o+1160)/2+20,l=(o-980)/2-118-20,u=(o+980)/2+20,f=r.not(".topic-preview-wrapper,.couplet,.ad-fl,.ad-fr,.ad-e1");
$.each(f,function(e,t){n($(t),!!$(t).find("a[data-target-url]").data("target-url"))}),i?(a.eq(0).css("left",c+"px"),a.eq(1).css("left",d+"px")):(a.eq(0).css("left",l+"px"),a.eq(1).css("left",u+"px")),s(e)}),r.on("scroll",function(){s(e)}),$(document).on("click","li[data-loc-id], div[data-loc-id], span[data-loc-id]",function(t){var n=$(this).data("loc-id"),i=window.adDatasLoc[n];o($.extend({},window.adDatasLoc[n],{src_id:v[n],resource_id:i&&i["resource_id"]?i["resource_id"]:n}),e)})}var f=t(1),p=t(6),_=(t(8),null),h={},g={13:"291,293,295",23:"405,412,417",11:"406,413,418",bm:"403,414,415",167:"1923,1922,1921",anime:"124,126,130",movie:"124,126,130"},m={home:{wide:{width:1160,height:96},thin:{width:980,height:80}},play:{"f-wide":{width:468,height:60},"e-wide":{width:870,height:72}}},v={395:"397",118:"120",112:"114",106:"108"};window.adDatasLoc=window.adDatasLoc||{};var w=function(){return $("body").hasClass("widescreen")?"wide":"thin"};e.exports.mainAd=function(e){return $(function(){u(e)}),!0}}]);