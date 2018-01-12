(window.MIP=window.MIP||[]).push({name:"mip-stats-baidu",func:function(){define("mip-stats-baidu/mip-stats-baidu",["require","viewer","util","customElement"],function(t){function e(){for(var t=document.querySelectorAll("*[data-stats-baidu-obj]"),e=0;e<t.length;e++){var r=t[e].getAttribute("data-stats-baidu-obj");if(r){try{r=JSON.parse(decodeURIComponent(r))}catch(t){console.warn("事件追踪data-stats-baidu-obj数据不正确");continue}var a=r.type;if(r.data){var o=i(r.data);if("click"===a||"mouseup"===a||"load"===a)if(!t[e].classList.contains("mip-stats-eventload"))if(t[e].classList.add("mip-stats-eventload"),"load"===a)window._hmt.push(o);else if("click"===a&&t[e].hasAttribute("on")&&t[e].getAttribute("on").match("tap:")&&d.hasTouch()){var s=new c(t[e]);s.on("tap",n)}else t[e].addEventListener(a,n,!1)}}}}function n(t){var e=this.getAttribute("data-stats-baidu-obj");if(e){var n;try{n=JSON.parse(decodeURIComponent(e))}catch(t){return void console.warn("事件追踪data-stats-baidu-obj数据不正确")}if(n.data){var r=i(n.data);window._hmt.push(r);var a=document.createElement("p");a.innerText=r,document.body.appendChild(a)}}}function i(t){if(t){if("object"==typeof t)return t;for(var e=t.slice(1,t.length-1).split(","),n=[],i=0;i<e.length;i++){var r=e[i].replace(/(^\s*)|(\s*$)/g,"").replace(/\'/g,"");if("false"===r||"true"===r)r=Boolean(r);n.push(r)}return n}}function r(){var t="",e={},n=MIP.hash.get("word")||"",i=MIP.hash.get("eqid")||"";if(a(MIP.hash.get("from")||"","result")){if((n||i)&&document.referrer)e.url="",e.eqid=i,e.word=n,t=document.referrer}else e.url="",t=location.origin+location.pathname+location.search;window._hmt.push(["_setReferrerOverride",o(t,e)])}function a(t,e){if(t&&e&&t===e)return!0;else return!1}function o(t,e){var n="",i=t.indexOf("?")<0?"?":"&",r="";for(var a in e)r+="&"+a+"="+e[a];if(r=r.slice(1),t.indexOf("#")<0&&r)n=t+i+r;else n=t.replace("#",i+r+"#");return n}var s=t("viewer"),u=t("util"),c=u.Gesture,d=t("util").fn,l=t("customElement").create();return l.prototype.createdCallback=function(){var t=this.element,n=this.getConfig(),i=n.token;if(i){if(window._hmt=window._hmt||[],window._hmt.push(["_setAccount",i]),s.isIframed)r();if(n&&Array.isArray(n.conf)&&n.conf.length)for(var a=n.conf,o=0;o<a.length;o++)window._hmt.push(a[o]);e();var u=document.createElement("script");u.src="https://hm.baidu.com/hm.js?"+i,t.appendChild(u)}else console.warn("token is unavailable")},l.prototype.getConfig=function(){var t={},e=this.element.getAttribute("setconfig");try{var n=this.element.querySelector('script[type="application/json"]');if(n){var r=JSON.parse(n.textContent);if("{}"!==JSON.stringify(r))t.token=r.token,u.fn.del(r,"token"),t.conf=this.objToArray(r);return t}}catch(t){console.warn("json is illegal"),console.warn(t)}return{token:this.element.getAttribute("token"),conf:e?new Array(i(decodeURIComponent(e))):null}},l.prototype.objToArray=function(t){var e=[];if(t){for(var n in t)if(t.hasOwnProperty(n)&&Array.isArray(t[n]))t[n].unshift(n),e.push(t[n]);return e}},l}),define("mip-stats-baidu",["mip-stats-baidu/mip-stats-baidu"],function(t){return t}),function(){function t(t,e){t.registerMipElement("mip-stats-baidu",e)}if(window.MIP)require(["mip-stats-baidu"],function(e){t(window.MIP,e)});else require(["mip","mip-stats-baidu"],t)}()}});