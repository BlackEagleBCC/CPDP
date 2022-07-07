/*! For license information please see 5858-ff1abf27888faccf5fbe.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[5858],{62705:function(e,t,n){var r=n(55639).Symbol;e.exports=r},44239:function(e,t,n){var r=n(62705),o=n(89607),i=n(2333),a=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":a&&a in Object(e)?o(e):i(e)}},27561:function(e,t,n){var r=n(67990),o=/^\s+/;e.exports=function(e){return e?e.slice(0,r(e)+1).replace(o,""):e}},31957:function(e,t,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=r},89607:function(e,t,n){var r=n(62705),o=Object.prototype,i=o.hasOwnProperty,a=o.toString,l=r?r.toStringTag:void 0;e.exports=function(e){var t=i.call(e,l),n=e[l];try{e[l]=void 0;var r=!0}catch(e){}var o=a.call(e);return r&&(t?e[l]=n:delete e[l]),o}},2333:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},55639:function(e,t,n){var r=n(31957),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();e.exports=i},67990:function(e){var t=/\s/;e.exports=function(e){for(var n=e.length;n--&&t.test(e.charAt(n)););return n}},23279:function(e,t,n){var r=n(13218),o=n(7771),i=n(14841),a=Math.max,l=Math.min;e.exports=function(e,t,n){var s,c,u,f,d,p,g=0,h=!1,v=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function w(t){var n=s,r=c;return s=c=void 0,g=t,f=e.apply(r,n)}function y(e){return g=e,d=setTimeout(b,t),h?w(e):f}function S(e){var n=e-p;return void 0===p||n>=t||n<0||v&&e-g>=u}function b(){var e=o();if(S(e))return E(e);d=setTimeout(b,function(e){var n=t-(e-p);return v?l(n,u-(e-g)):n}(e))}function E(e){return d=void 0,m&&s?w(e):(s=c=void 0,f)}function R(){var e=o(),n=S(e);if(s=arguments,c=this,p=e,n){if(void 0===d)return y(p);if(v)return clearTimeout(d),d=setTimeout(b,t),w(p)}return void 0===d&&(d=setTimeout(b,t)),f}return t=i(t)||0,r(n)&&(h=!!n.leading,u=(v="maxWait"in n)?a(i(n.maxWait)||0,t):u,m="trailing"in n?!!n.trailing:m),R.cancel=function(){void 0!==d&&clearTimeout(d),g=0,s=p=c=d=void 0},R.flush=function(){return void 0===d?f:E(o())},R}},13218:function(e){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},37005:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},33448:function(e,t,n){var r=n(44239),o=n(37005);e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==r(e)}},7771:function(e,t,n){var r=n(55639);e.exports=function(){return r.Date.now()}},23493:function(e,t,n){var r=n(23279),o=n(13218);e.exports=function(e,t,n){var i=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return o(n)&&(i="leading"in n?!!n.leading:i,a="trailing"in n?!!n.trailing:a),r(e,t,{leading:i,maxWait:t,trailing:a})}},14841:function(e,t,n){var r=n(27561),o=n(13218),i=n(33448),a=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,s=/^0o[0-7]+$/i,c=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(i(e))return NaN;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=r(e);var n=l.test(e);return n||s.test(e)?c(e.slice(2),n?2:8):a.test(e)?NaN:+e}},24648:function(e){e.exports={ScrollMagicPluginGsap:function(e,t,n){var r=t,o="animation.gsap",i=window.console||{},a=Function.prototype.bind.call(i.error||i.log||function(){},i);e||a("("+o+") -> ERROR: The ScrollMagic main module could not be found. Please make sure it's loaded before this plugin or use an asynchronous loader like requirejs."),r||a("("+o+") -> ERROR: TweenLite or TweenMax could not be found. Please make sure GSAP is loaded before ScrollMagic or use an asynchronous loader like requirejs."),e.Scene.addOption("tweenChanges",!1,(function(e){return!!e})),e.Scene.extend((function(){var e,t=this,i=function(){t._log&&(Array.prototype.splice.call(arguments,1,0,"("+o+")","->"),t._log.apply(this,arguments))};t.on("progress.plugin_gsap",(function(){a()})),t.on("destroy.plugin_gsap",(function(e){t.removeTween(e.reset)}));var a=function(){if(e){var n=t.progress(),r=t.state();e.repeat&&-1===e.repeat()?"DURING"===r&&e.paused()?e.play():"DURING"===r||e.paused()||e.pause():n!=e.progress()&&(0===t.duration()?n>0?e.play():e.reverse():t.tweenChanges()&&e.tweenTo?e.tweenTo(n*e.duration()):e.progress(n).pause())}};t.setTween=function(o,l,s){var c;arguments.length>1&&(arguments.length<3&&(s=l,l=1),o=r.to(o,l,s));try{(c=n?new n({smoothChildTiming:!0}).add(o):o).pause()}catch(e){return i(1,"ERROR calling method 'setTween()': Supplied argument is not a valid TweenObject"),t}if(e&&t.removeTween(),e=c,o.repeat&&-1===o.repeat()&&(e.repeat(-1),e.yoyo(o.yoyo())),t.tweenChanges()&&!e.tweenTo&&i(2,"WARNING: tweenChanges will only work if the TimelineMax object is available for ScrollMagic."),e&&t.controller()&&t.triggerElement()&&t.loglevel()>=2){var u=r.getTweensOf(t.triggerElement()),f=t.controller().info("vertical");u.forEach((function(e,t){var n=e.vars.css||e.vars;if(f?void 0!==n.top||void 0!==n.bottom:void 0!==n.left||void 0!==n.right)return i(2,"WARNING: Tweening the position of the trigger element affects the scene timing and should be avoided!"),!1}))}if(parseFloat(r.version)>=1.14)for(var d,p,g=e.getChildren?e.getChildren(!0,!0,!1):[e],h=function(){i(2,"WARNING: tween was overwritten by another. To learn how to avoid this issue see here: https://github.com/janpaepke/ScrollMagic/wiki/WARNING:-tween-was-overwritten-by-another")},v=0;v<g.length;v++)d=g[v],p!==h&&(p=d.vars.onOverwrite,d.vars.onOverwrite=function(){p&&p.apply(this,arguments),h.apply(this,arguments)});return i(3,"added tween"),a(),t},t.removeTween=function(n){return e&&(n&&e.progress(0).pause(),e.kill(),e=void 0,i(3,"removed tween (reset: "+(n?"true":"false")+")")),t}}))}}},42306:function(e,t,n){var r,o;r=function(){"use strict";var e=function(){o.log(2,"(COMPATIBILITY NOTICE) -> As of ScrollMagic 2.0.0 you need to use 'new ScrollMagic.Controller()' to create a new controller instance. Use 'new ScrollMagic.Scene()' to instance a scene.")};e.version="2.0.7",window.addEventListener("mousewheel",(function(){}));var t="data-scrollmagic-pin-spacer";e.Controller=function(r){var i,a,l="ScrollMagic.Controller",s="FORWARD",c="REVERSE",u="PAUSED",f=n.defaults,d=this,p=o.extend({},f,r),g=[],h=!1,v=0,m=u,w=!0,y=0,S=!0,b=function(){for(var t in p)f.hasOwnProperty(t)||(P(2,'WARNING: Unknown option "'+t+'"'),delete p[t]);if(p.container=o.get.elements(p.container)[0],!p.container)throw P(1,"ERROR creating object "+l+": No valid scroll container supplied"),l+" init failed.";(w=p.container===window||p.container===document.body||!document.body.contains(p.container))&&(p.container=window),y=T(),p.container.addEventListener("resize",N),p.container.addEventListener("scroll",N);var n=parseInt(p.refreshInterval,10);p.refreshInterval=o.type.Number(n)?n:f.refreshInterval,E(),P(3,"added new "+l+" controller (v"+e.version+")")},E=function(){p.refreshInterval>0&&(a=window.setTimeout(F,p.refreshInterval))},R=function(){return p.vertical?o.get.scrollTop(p.container):o.get.scrollLeft(p.container)},T=function(){return p.vertical?o.get.height(p.container):o.get.width(p.container)},x=this._setScrollPos=function(e){p.vertical?w?window.scrollTo(o.get.scrollLeft(),e):p.container.scrollTop=e:w?window.scrollTo(e,o.get.scrollTop()):p.container.scrollLeft=e},O=function(){if(S&&h){var e=o.type.Array(h)?h:g.slice(0);h=!1;var t=v,n=(v=d.scrollPos())-t;0!==n&&(m=n>0?s:c),m===c&&e.reverse(),e.forEach((function(t,n){P(3,"updating Scene "+(n+1)+"/"+e.length+" ("+g.length+" total)"),t.update(!0)})),0===e.length&&p.loglevel>=3&&P(3,"updating 0 Scenes (nothing added to controller)")}},C=function(){i=o.rAF(O)},N=function(e){P(3,"event fired causing an update:",e.type),"resize"==e.type&&(y=T(),m=u),!0!==h&&(h=!0,C())},F=function(){if(!w&&y!=T()){var e;try{e=new Event("resize",{bubbles:!1,cancelable:!1})}catch(t){(e=document.createEvent("Event")).initEvent("resize",!1,!1)}p.container.dispatchEvent(e)}g.forEach((function(e,t){e.refresh()})),E()},P=this._log=function(e,t){p.loglevel>=e&&(Array.prototype.splice.call(arguments,1,0,"("+l+") ->"),o.log.apply(window,arguments))};this._options=p;var A=function(e){if(e.length<=1)return e;var t=e.slice(0);return t.sort((function(e,t){return e.scrollOffset()>t.scrollOffset()?1:-1})),t};return this.addScene=function(t){if(o.type.Array(t))t.forEach((function(e,t){d.addScene(e)}));else if(t instanceof e.Scene){if(t.controller()!==d)t.addTo(d);else if(g.indexOf(t)<0){for(var n in g.push(t),g=A(g),t.on("shift.controller_sort",(function(){g=A(g)})),p.globalSceneOptions)t[n]&&t[n].call(t,p.globalSceneOptions[n]);P(3,"adding Scene (now "+g.length+" total)")}}else P(1,"ERROR: invalid argument supplied for '.addScene()'");return d},this.removeScene=function(e){if(o.type.Array(e))e.forEach((function(e,t){d.removeScene(e)}));else{var t=g.indexOf(e);t>-1&&(e.off("shift.controller_sort"),g.splice(t,1),P(3,"removing Scene (now "+g.length+" left)"),e.remove())}return d},this.updateScene=function(t,n){return o.type.Array(t)?t.forEach((function(e,t){d.updateScene(e,n)})):n?t.update(!0):!0!==h&&t instanceof e.Scene&&(-1==(h=h||[]).indexOf(t)&&h.push(t),h=A(h),C()),d},this.update=function(e){return N({type:"resize"}),e&&O(),d},this.scrollTo=function(n,r){if(o.type.Number(n))x.call(p.container,n,r);else if(n instanceof e.Scene)n.controller()===d?d.scrollTo(n.scrollOffset(),r):P(2,"scrollTo(): The supplied scene does not belong to this controller. Scroll cancelled.",n);else if(o.type.Function(n))x=n;else{var i=o.get.elements(n)[0];if(i){for(;i.parentNode.hasAttribute(t);)i=i.parentNode;var a=p.vertical?"top":"left",l=o.get.offset(p.container),s=o.get.offset(i);w||(l[a]-=d.scrollPos()),d.scrollTo(s[a]-l[a],r)}else P(2,"scrollTo(): The supplied argument is invalid. Scroll cancelled.",n)}return d},this.scrollPos=function(e){return arguments.length?(o.type.Function(e)?R=e:P(2,"Provided value for method 'scrollPos' is not a function. To change the current scroll position use 'scrollTo()'."),d):R.call(d)},this.info=function(e){var t={size:y,vertical:p.vertical,scrollPos:v,scrollDirection:m,container:p.container,isDocument:w};return arguments.length?void 0!==t[e]?t[e]:void P(1,'ERROR: option "'+e+'" is not available'):t},this.loglevel=function(e){return arguments.length?(p.loglevel!=e&&(p.loglevel=e),d):p.loglevel},this.enabled=function(e){return arguments.length?(S!=e&&(S=!!e,d.updateScene(g,!0)),d):S},this.destroy=function(e){window.clearTimeout(a);for(var t=g.length;t--;)g[t].destroy(e);return p.container.removeEventListener("resize",N),p.container.removeEventListener("scroll",N),o.cAF(i),P(3,"destroyed "+l+" (reset: "+(e?"true":"false")+")"),null},b(),d};var n={defaults:{container:window,vertical:!0,globalSceneOptions:{},loglevel:2,refreshInterval:100}};e.Controller.addOption=function(e,t){n.defaults[e]=t},e.Controller.extend=function(t){var n=this;e.Controller=function(){return n.apply(this,arguments),this.$super=o.extend({},this),t.apply(this,arguments)||this},o.extend(e.Controller,n),e.Controller.prototype=n.prototype,e.Controller.prototype.constructor=e.Controller},e.Scene=function(n){var i,a,l="ScrollMagic.Scene",s="BEFORE",c="DURING",u="AFTER",f=r.defaults,d=this,p=o.extend({},f,n),g=s,h=0,v={start:0,end:0},m=0,w=!0,y=function(){for(var e in p)f.hasOwnProperty(e)||(b(2,'WARNING: Unknown option "'+e+'"'),delete p[e]);for(var t in f)A(t);F()},S={};this.on=function(e,t){return o.type.Function(t)?(e=e.trim().split(" ")).forEach((function(e){var n=e.split("."),r=n[0],o=n[1];"*"!=r&&(S[r]||(S[r]=[]),S[r].push({namespace:o||"",callback:t}))})):b(1,"ERROR when calling '.on()': Supplied callback for '"+e+"' is not a valid function!"),d},this.off=function(e,t){return e?((e=e.trim().split(" ")).forEach((function(e,n){var r=e.split("."),o=r[0],i=r[1]||"";("*"===o?Object.keys(S):[o]).forEach((function(e){for(var n=S[e]||[],r=n.length;r--;){var o=n[r];!o||i!==o.namespace&&"*"!==i||t&&t!=o.callback||n.splice(r,1)}n.length||delete S[e]}))})),d):(b(1,"ERROR: Invalid event name supplied."),d)},this.trigger=function(t,n){if(t){var r=t.trim().split("."),o=r[0],i=r[1],a=S[o];b(3,"event fired:",o,n?"->":"",n||""),a&&a.forEach((function(t,r){i&&i!==t.namespace||t.callback.call(d,new e.Event(o,t.namespace,d,n))}))}else b(1,"ERROR: Invalid event name supplied.");return d},d.on("change.internal",(function(e){"loglevel"!==e.what&&"tweenChanges"!==e.what&&("triggerElement"===e.what?O():"reverse"===e.what&&d.update())})).on("shift.internal",(function(e){T(),d.update()}));var b=this._log=function(e,t){p.loglevel>=e&&(Array.prototype.splice.call(arguments,1,0,"("+l+") ->"),o.log.apply(window,arguments))};this.addTo=function(t){return t instanceof e.Controller?a!=t&&(a&&a.removeScene(d),a=t,F(),x(!0),O(!0),T(),a.info("container").addEventListener("resize",C),t.addScene(d),d.trigger("add",{controller:a}),b(3,"added "+l+" to controller"),d.update()):b(1,"ERROR: supplied argument of 'addTo()' is not a valid ScrollMagic Controller"),d},this.enabled=function(e){return arguments.length?(w!=e&&(w=!!e,d.update(!0)),d):w},this.remove=function(){if(a){a.info("container").removeEventListener("resize",C);var e=a;a=void 0,e.removeScene(d),d.trigger("remove"),b(3,"removed "+l+" from controller")}return d},this.destroy=function(e){return d.trigger("destroy",{reset:e}),d.remove(),d.off("*.*"),b(3,"destroyed "+l+" (reset: "+(e?"true":"false")+")"),null},this.update=function(e){if(a)if(e)if(a.enabled()&&w){var t,n=a.info("scrollPos");t=p.duration>0?(n-v.start)/(v.end-v.start):n>=v.start?1:0,d.trigger("update",{startPos:v.start,endPos:v.end,scrollPos:n}),d.progress(t)}else E&&g===c&&z(!0);else a.updateScene(d,!1);return d},this.refresh=function(){return x(),O(),d},this.progress=function(e){if(arguments.length){var t=!1,n=g,r=a?a.info("scrollDirection"):"PAUSED",o=p.reverse||e>=h;if(0===p.duration?(t=h!=e,g=0==(h=e<1&&o?0:1)?s:c):e<0&&g!==s&&o?(h=0,g=s,t=!0):e>=0&&e<1&&o?(h=e,g=c,t=!0):e>=1&&g!==u?(h=1,g=u,t=!0):g!==c||o||z(),t){var i={progress:h,state:g,scrollDirection:r},l=g!=n,f=function(e){d.trigger(e,i)};l&&n!==c&&(f("enter"),f(n===s?"start":"end")),f("progress"),l&&g!==c&&(f(g===s?"start":"end"),f("leave"))}return d}return h};var E,R,T=function(){v={start:m+p.offset},a&&p.triggerElement&&(v.start-=a.info("size")*p.triggerHook),v.end=v.start+p.duration},x=function(e){if(i){var t="duration";P(t,i.call(d))&&!e&&(d.trigger("change",{what:t,newval:p[t]}),d.trigger("shift",{reason:t}))}},O=function(e){var n=0,r=p.triggerElement;if(a&&(r||m>0)){if(r)if(r.parentNode){for(var i=a.info(),l=o.get.offset(i.container),s=i.vertical?"top":"left";r.parentNode.hasAttribute(t);)r=r.parentNode;var c=o.get.offset(r);i.isDocument||(l[s]-=a.scrollPos()),n=c[s]-l[s]}else b(2,"WARNING: triggerElement was removed from DOM and will be reset to",void 0),d.triggerElement(void 0);var u=n!=m;m=n,u&&!e&&d.trigger("shift",{reason:"triggerElementPosition"})}},C=function(e){p.triggerHook>0&&d.trigger("shift",{reason:"containerResize"})},N=o.extend(r.validate,{duration:function(e){if(o.type.String(e)&&e.match(/^(\.|\d)*\d+%$/)){var t=parseFloat(e)/100;e=function(){return a?a.info("size")*t:0}}if(o.type.Function(e)){i=e;try{e=parseFloat(i.call(d))}catch(t){e=-1}}if(e=parseFloat(e),!o.type.Number(e)||e<0)throw i?(i=void 0,['Invalid return value of supplied function for option "duration":',e]):['Invalid value for option "duration":',e];return e}}),F=function(e){(e=arguments.length?[e]:Object.keys(N)).forEach((function(e,t){var n;if(N[e])try{n=N[e](p[e])}catch(t){n=f[e];var r=o.type.String(t)?[t]:t;o.type.Array(r)?(r[0]="ERROR: "+r[0],r.unshift(1),b.apply(this,r)):b(1,"ERROR: Problem executing validation callback for option '"+e+"':",t.message)}finally{p[e]=n}}))},P=function(e,t){var n=!1,r=p[e];return p[e]!=t&&(p[e]=t,F(e),n=r!=p[e]),n},A=function(e){d[e]||(d[e]=function(t){return arguments.length?("duration"===e&&(i=void 0),P(e,t)&&(d.trigger("change",{what:e,newval:p[e]}),r.shifts.indexOf(e)>-1&&d.trigger("shift",{reason:e})),d):p[e]})};this.controller=function(){return a},this.state=function(){return g},this.scrollOffset=function(){return v.start},this.triggerPosition=function(){var e=p.offset;return a&&(p.triggerElement?e+=m:e+=a.info("size")*d.triggerHook()),e},d.on("shift.internal",(function(e){var t="duration"===e.reason;(g===u&&t||g===c&&0===p.duration)&&z(),t&&I()})).on("progress.internal",(function(e){z()})).on("add.internal",(function(e){I()})).on("destroy.internal",(function(e){d.removePin(e.reset)}));var z=function(e){if(E&&a){var t=a.info(),n=R.spacer.firstChild;if(e||g!==c){var r={position:R.inFlow?"relative":"absolute",top:0,left:0},i=o.css(n,"position")!=r.position;R.pushFollowers?p.duration>0&&(g===u&&0===parseFloat(o.css(R.spacer,"padding-top"))||g===s&&0===parseFloat(o.css(R.spacer,"padding-bottom")))&&(i=!0):r[t.vertical?"top":"left"]=p.duration*h,o.css(n,r),i&&I()}else{"fixed"!=o.css(n,"position")&&(o.css(n,{position:"fixed"}),I());var l=o.get.offset(R.spacer,!0),f=p.reverse||0===p.duration?t.scrollPos-v.start:Math.round(h*p.duration*10)/10;l[t.vertical?"top":"left"]+=f,o.css(R.spacer.firstChild,{top:l.top,left:l.left})}}},I=function(){if(E&&a&&R.inFlow){var e=g===c,t=a.info("vertical"),n=R.spacer.firstChild,r=o.isMarginCollapseType(o.css(R.spacer,"display")),i={};R.relSize.width||R.relSize.autoFullWidth?e?o.css(E,{width:o.get.width(R.spacer)}):o.css(E,{width:"100%"}):(i["min-width"]=o.get.width(t?E:n,!0,!0),i.width=e?i["min-width"]:"auto"),R.relSize.height?e?o.css(E,{height:o.get.height(R.spacer)-(R.pushFollowers?p.duration:0)}):o.css(E,{height:"100%"}):(i["min-height"]=o.get.height(t?n:E,!0,!r),i.height=e?i["min-height"]:"auto"),R.pushFollowers&&(i["padding"+(t?"Top":"Left")]=p.duration*h,i["padding"+(t?"Bottom":"Right")]=p.duration*(1-h)),o.css(R.spacer,i)}},k=function(){a&&E&&g===c&&!a.info("isDocument")&&z()},L=function(){a&&E&&g===c&&((R.relSize.width||R.relSize.autoFullWidth)&&o.get.width(window)!=o.get.width(R.spacer.parentNode)||R.relSize.height&&o.get.height(window)!=o.get.height(R.spacer.parentNode))&&I()},M=function(e){a&&E&&g===c&&!a.info("isDocument")&&(e.preventDefault(),a._setScrollPos(a.info("scrollPos")-((e.wheelDelta||e[a.info("vertical")?"wheelDeltaY":"wheelDeltaX"])/3||30*-e.detail)))};this.setPin=function(e,n){var r={pushFollowers:!0,spacerClass:"scrollmagic-pin-spacer"},i=n&&n.hasOwnProperty("pushFollowers");if(n=o.extend({},r,n),!(e=o.get.elements(e)[0]))return b(1,"ERROR calling method 'setPin()': Invalid pin element supplied."),d;if("fixed"===o.css(e,"position"))return b(1,"ERROR calling method 'setPin()': Pin does not work with elements that are positioned 'fixed'."),d;if(E){if(E===e)return d;d.removePin()}var a=(E=e).parentNode.style.display,l=["top","left","bottom","right","margin","marginLeft","marginRight","marginTop","marginBottom"];E.parentNode.style.display="none";var s="absolute"!=o.css(E,"position"),c=o.css(E,l.concat(["display"])),u=o.css(E,["width","height"]);E.parentNode.style.display=a,!s&&n.pushFollowers&&(b(2,"WARNING: If the pinned element is positioned absolutely pushFollowers will be disabled."),n.pushFollowers=!1),window.setTimeout((function(){E&&0===p.duration&&i&&n.pushFollowers&&b(2,"WARNING: pushFollowers =",!0,"has no effect, when scene duration is 0.")}),0);var f=E.parentNode.insertBefore(document.createElement("div"),E),g=o.extend(c,{position:s?"relative":"absolute",boxSizing:"content-box",mozBoxSizing:"content-box",webkitBoxSizing:"content-box"});if(s||o.extend(g,o.css(E,["width","height"])),o.css(f,g),f.setAttribute(t,""),o.addClass(f,n.spacerClass),R={spacer:f,relSize:{width:"%"===u.width.slice(-1),height:"%"===u.height.slice(-1),autoFullWidth:"auto"===u.width&&s&&o.isMarginCollapseType(c.display)},pushFollowers:n.pushFollowers,inFlow:s},!E.___origStyle){E.___origStyle={};var h=E.style;l.concat(["width","height","position","boxSizing","mozBoxSizing","webkitBoxSizing"]).forEach((function(e){E.___origStyle[e]=h[e]||""}))}return R.relSize.width&&o.css(f,{width:u.width}),R.relSize.height&&o.css(f,{height:u.height}),f.appendChild(E),o.css(E,{position:s?"relative":"absolute",margin:"auto",top:"auto",left:"auto",bottom:"auto",right:"auto"}),(R.relSize.width||R.relSize.autoFullWidth)&&o.css(E,{boxSizing:"border-box",mozBoxSizing:"border-box",webkitBoxSizing:"border-box"}),window.addEventListener("scroll",k),window.addEventListener("resize",k),window.addEventListener("resize",L),E.addEventListener("mousewheel",M),E.addEventListener("DOMMouseScroll",M),b(3,"added pin"),z(),d},this.removePin=function(e){if(E){if(g===c&&z(!0),e||!a){var n=R.spacer.firstChild;if(n.hasAttribute(t)){var r=R.spacer.style,i={};["margin","marginLeft","marginRight","marginTop","marginBottom"].forEach((function(e){i[e]=r[e]||""})),o.css(n,i)}R.spacer.parentNode.insertBefore(n,R.spacer),R.spacer.parentNode.removeChild(R.spacer),E.parentNode.hasAttribute(t)||(o.css(E,E.___origStyle),delete E.___origStyle)}window.removeEventListener("scroll",k),window.removeEventListener("resize",k),window.removeEventListener("resize",L),E.removeEventListener("mousewheel",M),E.removeEventListener("DOMMouseScroll",M),E=void 0,b(3,"removed pin (reset: "+(e?"true":"false")+")")}return d};var _,j=[];return d.on("destroy.internal",(function(e){d.removeClassToggle(e.reset)})),this.setClassToggle=function(e,t){var n=o.get.elements(e);return 0!==n.length&&o.type.String(t)?(j.length>0&&d.removeClassToggle(),_=t,j=n,d.on("enter.internal_class leave.internal_class",(function(e){var t="enter"===e.type?o.addClass:o.removeClass;j.forEach((function(e,n){t(e,_)}))})),d):(b(1,"ERROR calling method 'setClassToggle()': Invalid "+(0===n.length?"element":"classes")+" supplied."),d)},this.removeClassToggle=function(e){return e&&j.forEach((function(e,t){o.removeClass(e,_)})),d.off("start.internal_class end.internal_class"),_=void 0,j=[],d},y(),d};var r={defaults:{duration:0,offset:0,triggerElement:void 0,triggerHook:.5,reverse:!0,loglevel:2},validate:{offset:function(e){if(e=parseFloat(e),!o.type.Number(e))throw['Invalid value for option "offset":',e];return e},triggerElement:function(e){if(e=e||void 0){var t=o.get.elements(e)[0];if(!t||!t.parentNode)throw['Element defined in option "triggerElement" was not found:',e];e=t}return e},triggerHook:function(e){var t={onCenter:.5,onEnter:1,onLeave:0};if(o.type.Number(e))e=Math.max(0,Math.min(parseFloat(e),1));else{if(!(e in t))throw['Invalid value for option "triggerHook": ',e];e=t[e]}return e},reverse:function(e){return!!e},loglevel:function(e){if(e=parseInt(e),!o.type.Number(e)||e<0||e>3)throw['Invalid value for option "loglevel":',e];return e}},shifts:["duration","offset","triggerHook"]};e.Scene.addOption=function(t,n,o,i){t in r.defaults?e._util.log(1,"[static] ScrollMagic.Scene -> Cannot add Scene option '"+t+"', because it already exists."):(r.defaults[t]=n,r.validate[t]=o,i&&r.shifts.push(t))},e.Scene.extend=function(t){var n=this;e.Scene=function(){return n.apply(this,arguments),this.$super=o.extend({},this),t.apply(this,arguments)||this},o.extend(e.Scene,n),e.Scene.prototype=n.prototype,e.Scene.prototype.constructor=e.Scene},e.Event=function(e,t,n,r){for(var o in r=r||{})this[o]=r[o];return this.type=e,this.target=this.currentTarget=n,this.namespace=t||"",this.timeStamp=this.timestamp=Date.now(),this};var o=e._util=function(e){var t,n={},r=function(e){return parseFloat(e)||0},o=function(t){return t.currentStyle?t.currentStyle:e.getComputedStyle(t)},i=function(t,n,i,a){if((n=n===document?e:n)===e)a=!1;else if(!g.DomElement(n))return 0;t=t.charAt(0).toUpperCase()+t.substr(1).toLowerCase();var l=(i?n["offset"+t]||n["outer"+t]:n["client"+t]||n["inner"+t])||0;if(i&&a){var s=o(n);l+="Height"===t?r(s.marginTop)+r(s.marginBottom):r(s.marginLeft)+r(s.marginRight)}return l},a=function(e){return e.replace(/^[^a-z]+([a-z])/g,"$1").replace(/-([a-z])/g,(function(e){return e[1].toUpperCase()}))};n.extend=function(e){for(e=e||{},t=1;t<arguments.length;t++)if(arguments[t])for(var n in arguments[t])arguments[t].hasOwnProperty(n)&&(e[n]=arguments[t][n]);return e},n.isMarginCollapseType=function(e){return["block","flex","list-item","table","-webkit-box"].indexOf(e)>-1};var l=0,s=["ms","moz","webkit","o"],c=e.requestAnimationFrame,u=e.cancelAnimationFrame;for(t=0;!c&&t<s.length;++t)c=e[s[t]+"RequestAnimationFrame"],u=e[s[t]+"CancelAnimationFrame"]||e[s[t]+"CancelRequestAnimationFrame"];c||(c=function(t){var n=(new Date).getTime(),r=Math.max(0,16-(n-l)),o=e.setTimeout((function(){t(n+r)}),r);return l=n+r,o}),u||(u=function(t){e.clearTimeout(t)}),n.rAF=c.bind(e),n.cAF=u.bind(e);var f=["error","warn","log"],d=e.console||{};for(d.log=d.log||function(){},t=0;t<f.length;t++){var p=f[t];d[p]||(d[p]=d.log)}n.log=function(e){(e>f.length||e<=0)&&(e=f.length);var t=new Date,n=("0"+t.getHours()).slice(-2)+":"+("0"+t.getMinutes()).slice(-2)+":"+("0"+t.getSeconds()).slice(-2)+":"+("00"+t.getMilliseconds()).slice(-3),r=f[e-1],o=Array.prototype.splice.call(arguments,1),i=Function.prototype.bind.call(d[r],d);o.unshift(n),i.apply(d,o)};var g=n.type=function(e){return Object.prototype.toString.call(e).replace(/^\[object (.+)\]$/,"$1").toLowerCase()};g.String=function(e){return"string"===g(e)},g.Function=function(e){return"function"===g(e)},g.Array=function(e){return Array.isArray(e)},g.Number=function(e){return!g.Array(e)&&e-parseFloat(e)+1>=0},g.DomElement=function(e){return"object"==typeof HTMLElement||"function"==typeof HTMLElement?e instanceof HTMLElement||e instanceof SVGElement:e&&"object"==typeof e&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName};var h=n.get={};return h.elements=function(t){var n=[];if(g.String(t))try{t=document.querySelectorAll(t)}catch(e){return n}if("nodelist"===g(t)||g.Array(t)||t instanceof NodeList)for(var r=0,o=n.length=t.length;r<o;r++){var i=t[r];n[r]=g.DomElement(i)?i:h.elements(i)}else(g.DomElement(t)||t===document||t===e)&&(n=[t]);return n},h.scrollTop=function(t){return t&&"number"==typeof t.scrollTop?t.scrollTop:e.pageYOffset||0},h.scrollLeft=function(t){return t&&"number"==typeof t.scrollLeft?t.scrollLeft:e.pageXOffset||0},h.width=function(e,t,n){return i("width",e,t,n)},h.height=function(e,t,n){return i("height",e,t,n)},h.offset=function(e,t){var n={top:0,left:0};if(e&&e.getBoundingClientRect){var r=e.getBoundingClientRect();n.top=r.top,n.left=r.left,t||(n.top+=h.scrollTop(),n.left+=h.scrollLeft())}return n},n.addClass=function(e,t){t&&(e.classList?e.classList.add(t):e.className+=" "+t)},n.removeClass=function(e,t){t&&(e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," "))},n.css=function(e,t){if(g.String(t))return o(e)[a(t)];if(g.Array(t)){var n={},r=o(e);return t.forEach((function(e,t){n[e]=r[a(e)]})),n}for(var i in t){var l=t[i];l==parseFloat(l)&&(l+="px"),e.style[a(i)]=l}},n}(window||{});return e.Scene.prototype.addIndicators=function(){return e._util.log(1,"(ScrollMagic.Scene) -> ERROR calling addIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"),this},e.Scene.prototype.removeIndicators=function(){return e._util.log(1,"(ScrollMagic.Scene) -> ERROR calling removeIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"),this},e.Scene.prototype.setTween=function(){return e._util.log(1,"(ScrollMagic.Scene) -> ERROR calling setTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"),this},e.Scene.prototype.removeTween=function(){return e._util.log(1,"(ScrollMagic.Scene) -> ERROR calling removeTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"),this},e.Scene.prototype.setVelocity=function(){return e._util.log(1,"(ScrollMagic.Scene) -> ERROR calling setVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"),this},e.Scene.prototype.removeVelocity=function(){return e._util.log(1,"(ScrollMagic.Scene) -> ERROR calling removeVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"),this},e},void 0===(o="function"==typeof r?r.call(t,n,t,e):r)||(e.exports=o)}}]);