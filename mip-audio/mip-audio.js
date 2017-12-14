(window.MIP=window.MIP||[]).push({name:"mip-audio",func:function(){define("mip-audio/mip-audio",["require","util","customElement"],function(t){function i(t){var i={};return Array.prototype.slice.apply(t).forEach(function(t){i[t.name]=t.value}),i}function e(t){this.audioAttrs=t.audioAttrs,this.container=t.audioContainer,this.content=t.audioContent,this.customControls=t.audioCustomCtr||"",this.totalTimeShown=!1}var o=t("util"),n=t("customElement").create(),a=["autoplay","buffered","loop","autoplay","muted","played","preload","src","volume"];return n.prototype.firstInviewCallback=function(){var t=this.element;if(!t.rendered){t.rendered=!0;new e({audioAttrs:i(this.element.attributes),audioContent:t.childNodes,audioContainer:t,audioCustomCtr:this.element.querySelector("[controller]")}).init()}},e.prototype={constructor:e,init:function(){var t=this;this.audioElement=this._createAudioTag();for(var i=this.content.length,e=0;e<i;e++)this.audioElement.appendChild(this.content[0]);if(this.container.appendChild(this.audioElement),this.audioElement.load(),"controls"in this.audioAttrs){if(!this.customControls)this.customControls=this._createDefaultController(),this.container.classList.add("mip-audio-default-style"),this.container.innerHTML+=this.customControls;else this.container.appendChild(this.customControls);this.audioElement.addEventListener("loadedmetadata",t._applyTotalTime.bind(this),!1),this.container.querySelector("[play-button]").addEventListener("click",t._playOrPause.bind(this),!1),this.audioElement.addEventListener("timeupdate",t._timeUpdate.bind(this),!1),this._bindSeekEvent(),this.audioElement.addEventListener("ended",t._playEnded.bind(this),!1)}},_createAudioTag:function(){var t=document.createElement("audio");for(var i in this.audioAttrs)if(this.audioAttrs.hasOwnProperty(i)&&a.indexOf(i)>-1)t.setAttribute(i,this.audioAttrs[i]);return t.classList.add("mip-audio-tag"),t},_createDefaultController:function(){return'<div controller><i play-button class="mip-audio-stopped-icon"></i><div current-time>00:00</div><div seekbar><div seekbar-fill></div><div seekbar-button></div></div><div total-time>--:--</div></div>'},_playOrPause:function(t){var i=this.container.querySelector("[play-button]").classList;if(!this.audioElement.paused||"pause"===t)this.audioElement.pause(),i.remove("mip-audio-playing-icon"),i.add("mip-audio-stopped-icon");else this.audioElement.play(),i.remove("mip-audio-stopped-icon"),i.add("mip-audio-playing-icon")},_playEnded:function(){this._playOrPause("pause"),this._timeUpdate(0)},_progressShow:function(){var t=this.audioElement.currentTime,i=t/this.audioElement.duration*100;o.css(this.container.querySelector("[seekbar-button]"),"left",i+"%"),o.css(this.container.querySelector("[seekbar-fill]"),"width",i+"%")},_applyTotalTime:function(){var t=this.audioElement.duration,i=this._msToDate(t);this.container.querySelector("[total-time]").innerHTML=i},_timeUpdate:function(t){var i;if(!this.totalTimeShown)this._applyTotalTime(),this.totalTimeShown=!0;if("number"==typeof t)i=this.audioElement.duration*t,this.audioElement.currentTime=i;if(this._progressShow(),i=this._msToDate(this.audioElement.currentTime),this.audioElement.currentTimeShown!==i)this.audioElement.currentTimeShown=i,this.container.querySelector("[current-time]").innerHTML=i},_bindSeekEvent:function(){var t,i,e,o,n=this.container.querySelector("[seekbar-button]"),a=this.container.querySelector("[seekbar]"),r=a.getBoundingClientRect(),u={left:r.left,width:r.width,right:r.right},d=this,s="paused",l="ontouchmove"in document?"touch":"mouse";n.addEventListener("touch"===l?"touchstart":"mousedown",function(e){var a="ontouchmove"in document?e.touches[0]:e;t=a.clientX,i=n.offsetLeft+.5*n.offsetWidth,s=d.audioElement.paused?"paused":"playing",o=!0,d.audioElement.pause()},!1),this.container.addEventListener(l+"move",function(n){if(o){n.preventDefault(),n.stopPropagation();var a="ontouchmove"in document?n.touches[0]:n,r=a.clientX,s=r-t;if(r>=u.right+10)e=.9999;else if(i+s<=0)e=0;else e=(i+s)/u.width;d._timeUpdate.call(d,e)}},!1),n.addEventListener("touch"===l?"touchend":"mouseup",function(t){if(o=!1,"playing"===s)d.audioElement.play()},!1)},_msToDate:function(t){var i=parseInt(t,10),e=0,o=0;if(i>60)if(e=parseInt(i/60,10),i=parseInt(i%60,10),e>60)o=parseInt(e/60,10),e=parseInt(e%60,10);if(parseInt(i,10)<10)i="0"+parseInt(i,10);var n=""+i;if(0===e)n="00:"+n;if(e>0)n=parseInt(e,10)+":"+n;if(o>0)n=parseInt(o,10)+":"+n;return n}},n}),define("mip-audio",["mip-audio/mip-audio"],function(t){return t}),function(){function t(t,i){t.registerMipElement("mip-audio",i,"mip-audio.mip-audio-default-style{font-size:0;max-width:100% !important;min-width:180px;-webkit-tap-highlight-color:transparent;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}mip-audio.mip-audio-default-style [controller]{background-color:#434343;border-radius:5px;padding:10px 15px;box-sizing:border-box;position:relative;display:-webkit-flex;display:flex;align-items:center;height:100%}mip-audio.mip-audio-default-style [play-button]{width:20px;height:20px;box-sizing:content-box;padding:10px;margin:-10px;vertical-align:top;background-size:42px 20px;background-clip:content-box;flex:0 0 auto}mip-audio.mip-audio-default-style [play-button].mip-audio-stopped-icon{background-image:url('https://mipcache.bdstatic.com/static/static/auido/audioimg.png');background-position:9px 11px}mip-audio.mip-audio-default-style [play-button].mip-audio-playing-icon{background-image:url('https://mipcache.bdstatic.com/static/static/auido/audioimg.png');background-position:-13px 11px}mip-audio.mip-audio-default-style [seekbar]{width:120px;height:8px;box-sizing:border-box;background-color:#818181;border:1px solid #989898;margin-left:15px;margin-top:1px;position:relative;border-radius:8px;flex-grow:2}mip-audio.mip-audio-default-style [seekbar-fill]{height:6px;background-color:#414141;position:absolute;top:50%;margin-top:-3px;border-radius:8px}mip-audio.mip-audio-default-style [seekbar-button]{width:20px;background-color:#fff;height:20px;border-radius:10px;position:absolute;left:0;top:50%;margin-top:-10px;margin-left:-10px}mip-audio.mip-audio-default-style [current-time],mip-audio.mip-audio-default-style [total-time]{font-size:13px;color:#fff;margin-left:10px;min-width:40px;white-space:nowrap;flex:0 0}mip-audio.mip-audio-default-style [total-time]{margin:0 0 0 20px}")}if(window.MIP)require(["mip-audio"],function(i){t(window.MIP,i)});else require(["mip","mip-audio"],t)}()}});