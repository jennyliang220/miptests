(window.MIP=window.MIP||[]).push({name:"mip-stats-baidu",func:function(){define("mip-stats-baidu/mip-stats-baidu",["require","viewer","util","customElement"],function(t){function e(){for(var t=document.querySelectorAll("*[data-stats-baidu-obj]"),e=0;e<t.length;e++){var r=t[e].getAttribute("data-stats-baidu-obj");if(r){try{r=JSON.parse(decodeURIComponent(r))}catch(t){console.warn("事件追踪data-stats-baidu-obj数据不正确");continue}var a=r.type;if(r.data){var o=n(r.data);if("click"===a||"mouseup"===a||"load"===a)if(!t[e].classList.contains("mip-stats-eventload"))if(t[e].classList.add("mip-stats-eventload"),"load"===a)window._hmt.push(o);else if("click"===a&&t[e].hasAttribute("on")&&t[e].getAttribute("on").match("tap:")&&d.hasTouch()){var s=new c(t[e]);s.on("tap",i)}else t[e].addEventListener(a,i,!1)}}}}function i(t){var e=this.getAttribute("data-stats-baidu-obj");if(e){var i;try{i=JSON.parse(decodeURIComponent(e))}catch(t){return void console.warn("事件追踪data-stats-baidu-obj数据不正确")}if(i.data){var r=n(i.data);window._hmt.push(r)}}}function n(t){if(t){if("object"==typeof t)return t;for(var e=t.slice(1,t.length-1).split(","),i=[],n=0;n<e.length;n++){var r=e[n].replace(/(^\s*)|(\s*$)/g,"").replace(/\'/g,"");if("false"===r||"true"===r)r=Boolean(r);i.push(r)}return i}}function r(){var t="",e={},i=MIP.hash.get("word")||"",n=MIP.hash.get("eqid")||"";if(a(MIP.hash.get("from")||"","result")){if((i||n)&&document.referrer)e.url="",e.eqid=n,e.word=i,t=document.referrer}else e.url="",t=location.origin+location.pathname+location.search;window._hmt.push(["_setReferrerOverride",o(t,e)])}function a(t,e){if(t&&e&&t===e)return!0;else return!1}function o(t,e){var i="",n=t.indexOf("?")<0?"?":"&",r="";for(var a in e)r+="&"+a+"="+e[a];if(r=r.slice(1),t.indexOf("#")<0&&r)i=t+n+r;else i=t.replace("#",n+r+"#");return i}var s=t("viewer"),u=t("util"),c=u.Gesture,d=t("util").fn,f=t("customElement").create();return f.prototype.createdCallback=function(){var t=this.element,i=this.getConfig(),n=i.token;if(n){if(window._hmt=window._hmt||[],window._hmt.push(["_setAccount",n]),s.isIframed)r();if(i&&Array.isArray(i.conf)&&i.conf.length)for(var a=i.conf,o=0;o<a.length;o++)window._hmt.push(a[o]);e();var u=document.createElement("script");u.src="https://hm.baidu.com/hm.js?"+n,t.appendChild(u)}else console.warn("token is unavailable")},f.prototype.getConfig=function(){var t={},e=this.element.getAttribute("setconfig");try{var i=this.element.querySelector('script[type="application/json"]');if(i){var r=JSON.parse(i.textContent);if("{}"!==JSON.stringify(r))t.token=r.token,u.fn.del(r,"token"),t.conf=this.objToArray(r);return t}}catch(t){console.warn("json is illegal"),console.warn(t)}return{token:this.element.getAttribute("token"),conf:e?new Array(n(decodeURIComponent(e))):null}},f.prototype.objToArray=function(t){var e=[];if(t){for(var i in t)if(t.hasOwnProperty(i)&&Array.isArray(t[i]))t[i].unshift(i),e.push(t[i]);return e}},f}),define("mip-stats-baidu",["mip-stats-baidu/mip-stats-baidu"],function(t){return t}),function(){function t(t,e){t.registerMipElement("mip-stats-baidu",e)}if(window.MIP)require(["mip-stats-baidu"],function(e){t(window.MIP,e)});else require(["mip","mip-stats-baidu"],t)}()}});