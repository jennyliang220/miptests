(window.MIP=window.MIP||[]).push({name:"mip-app-banner",func:function(){define("mip-app-banner/mip-app-banner",["require","customElement","fetch-jsonp","viewer","util"],function(n){function e(n){var e=document.getElementById("logg");if(!e)e=document.createElement("div"),e.id="logg",e.setAttribute("style","display: block; position: fixed; bottom:0px; opacity: 0.8; background: #ddd; color: black; width: 100%; padding: 10px; max-height: 100px; overflow-y: scroll;"),document.body.appendChild(e);e.innerHTML+=n+"<br>"}var i=n("customElement").create(),t=n("fetch-jsonp"),o=n("viewer"),a=n("util"),r=a.platform;return i.prototype.jumpToLink=function(n,i){var t=setTimeout(function(){window.top.location.href=i,e("页面失焦1，猜测调起成功"),clearTimeout(t)},2500);window.open(n,"_top");var o=function(){e("页面失焦2，猜测调起成功"),(document.hidden||document.webkitHidden)&&clearTimeout(t)};document.addEventListener("visibilitychange",o,!1),document.addEventListener("webkitvisibilitychange",o,!1),window.addEventListener("pagehide",function(){e("页面失焦3，猜测调起成功"),clearTimeout(t)},!1)},i.prototype.hasSystemBanner=function(){var n=r.isSafari();if(!o.isIframed&&n&&this.opt.iosMetaTag)return e("safari 系统默认显示下载"),!0;else return e("无原生默认banner, 显示app-banner"),!1},i.prototype.initIosBanner=function(){var n="",i="";if(r.isWechatApp()){var t=this.opt.wechatOpenSafari,o=this.opt.wechatIosYyb;e("ios 在微信中"),n=t||o}else{var a=this.opt.iosMetaTag&&this.opt.iosMetaTag.getAttribute("content"),p=a.replace(/\s/,"").split(","),d={};p.forEach(function(n){var e=n.split("=");d[e[0]]=e[1]});var n=r.getOsVersion().split(".")[0]>=9?this.opt.iosUniversalLink:"";if(!n){var s=d["app-argument"];if(s)n=s}i="https://itunes.apple.com/cn/app/id"+d["app-id"]}var c=this;this.element.querySelector("[open-button]").addEventListener("click",function(){c.jumpToLink(n,i)}),e("ios 调起链接："+n),e("ios 下载链接: "+i)},i.prototype.initAndroidBanner=function(){var n="",i="",o=this;if(r.isWechatApp()){var a=this.opt.wechatAndroidYyb;e("安卓：在微信中"),n=a}else{new Promise(function(a,r){if(!o.opt.androidManifest)return void r("manifest 不存在");var p=o.opt.androidManifest.getAttribute("href");if(/http:\/\//.test(p))return void r("manifest必须是https的连接");t(p).then(function(n){return n.json()}).then(function(t){var o=t.related_applications;if(!o)return void r("manifest 不合法，无 related_applications");for(var p=0;p<o.length;p++){var d=o[p];if("play"===d.platform||"mip-app-banner"===d.platform)i=d.install,n=d.open,a(),e("manifest 获取跳转链接完成")}},function(){r("manifest.json 数据格式不合法")})}).then(function(){return new Promise(function(n,e){n()})},function(n){return console.warn("mip-app-banner解析manifest失败："+n),new Promise(function(n,e){n()})}).then(function(){var t=r.isChrome()&&navigator.userAgent.match(/Chrome\/(\d+)/)[1]>25&&o.opt.androidChromeIntent,a=navigator.userAgent.match(/Android ([\d.]+)/)&&navigator.userAgent.match(/Android ([\d.]+)/)[1]>="6.0"&&o.opt.androidAppLink;if(t)n=o.opt.androidChromeIntent;else if(a)n=o.opt.androidAppLink;else if(!n)n=o.opt.androidScheme;if(!i)i=o.opt.androidDownload;o.element.querySelector("[open-button]").addEventListener("click",function(){o.jumpToLink(n,i)}),e("android openInAppUrl："+n),e("android androidInstallUrl: "+i)})}},i.prototype.firstInviewCallback=function(){var n,i=this.element,t=i.querySelector('script[type="application/json"]'),o=t?t.innerHTML:"";try{n=JSON.parse(o)}catch(n){return void console.warn("<mip-app-banner>配置不是合法JSON, "+n.message)}if(this.opt={iosMetaTag:document.head.querySelector('meta[name="apple-itunes-app"]'),iosUniversalLink:n&&n["ios-universal-link"],androidManifest:document.head.querySelector('link[rel="manifest"]'),androidScheme:n&&n["android-scheme"],androidDownload:n&&n["android-download"],androidAppLink:n&&n["android-app-link"],androidChromeIntent:n&&n["android-chrome-intent"],wechatOpenSafari:n&&n["wechat-open-safari"],wechatIosYyb:n&&n["wechat-ios-yyb"],wechatAndroidYyb:n&&n["wechat-android-yyb"]},console.log(this.opt),this.hasSystemBanner())return e("存在原生 banner，移除组件"),void this.element.remove();if(r.isIos())this.initIosBanner(),e("初始化ios banner");else if(r.isAndroid())this.initAndroidBanner(),e("初始化安卓 banner");a.css(i,{display:"",visibility:"visible"}),e("banner 初始化完成，显示给用户")},i}),define("mip-app-banner",["mip-app-banner/mip-app-banner"],function(n){return n}),function(){function n(n,e){n.registerMipElement("mip-app-banner",e,"mip-app-banner{width:100%;display:block;box-sizing:border-box;background:#fff;z-index:13 !important}[open-button]{display:block}")}if(window.MIP)require(["mip-app-banner"],function(e){n(window.MIP,e)});else require(["mip","mip-app-banner"],n)}()}});