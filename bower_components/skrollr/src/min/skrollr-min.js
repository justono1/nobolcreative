!function(e,t,r){"use strict";function n(r){if(s=t.documentElement,c=t.body,Y(),bt=this,r=r||{},Ft=r.constants||{},r.easing)for(var n in r.easing)X[n]=r.easing[n];_t=r.edgeStrategy||"set",wt={beforerender:r.beforerender,render:r.render,keyframe:r.keyframe},xt=r.forceHeight!==!1,xt&&(At=r.scale||1),Ct=r.mobileDeceleration||x,zt=r.smoothScrolling!==!1,qt=r.smoothScrollingDuration||E,Lt={targetTop:bt.getScrollTop()},Bt=(r.mobileCheck||function(){return/Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent||navigator.vendor||e.opera)})(),Bt?(kt=t.getElementById("skrollr-body"),kt&&it(),j(),gt(s,[y,S],[T])):gt(s,[y,b],[T]),bt.refresh(),lt(e,"resize orientationchange",function(){var e=s.clientWidth,t=s.clientHeight;(t!==Nt||e!==Pt)&&(Nt=t,Pt=e,Ot=!0)});var o=R();return function a(){J(),Rt=o(a)}(),bt}var o={get:function(){return bt},init:function(e){return bt||new n(e)},VERSION:"0.6.26"},a=Object.prototype.hasOwnProperty,i=e.Math,l=e.getComputedStyle,s,c,f="touchstart",u="touchmove",m="touchcancel",p="touchend",d="skrollable",g=d+"-before",v=d+"-between",h=d+"-after",y="skrollr",T="no-"+y,b=y+"-desktop",S=y+"-mobile",k="linear",w=1e3,x=.004,E=200,A="start",F="end",C="center",D="bottom",H="___skrollable_id",I=/^(?:input|textarea|button|select)$/i,P=/^\s+|\s+$/g,N=/^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,O=/\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,V=/^(@?[a-z\-]+)\[(\w+)\]$/,z=/-([a-z0-9_])/g,q=function(e,t){return t.toUpperCase()},L=/[\-+]?[\d]*\.?[\d]+/g,M=/\{\?\}/g,_=/rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,B=/[a-z\-]+-gradient/g,G="",K="",Y=function(){var e=/^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;if(l){var t=l(c,null);for(var r in t)if(G=r.match(e)||+r==r&&t[r].match(e))break;if(!G)return void(G=K="");G=G[0],"-"===G.slice(0,1)?(K=G,G={"-webkit-":"webkit","-moz-":"Moz","-ms-":"ms","-o-":"O"}[G]):K="-"+G.toLowerCase()+"-"}},R=function(){var t=e.requestAnimationFrame||e[G.toLowerCase()+"RequestAnimationFrame"],r=yt();return(Bt||!t)&&(t=function(t){var n=yt()-r,o=i.max(0,1e3/60-n);return e.setTimeout(function(){r=yt(),t()},o)}),t},U=function(){var t=e.cancelAnimationFrame||e[G.toLowerCase()+"CancelAnimationFrame"];return(Bt||!t)&&(t=function(t){return e.clearTimeout(t)}),t},X={begin:function(){return 0},end:function(){return 1},linear:function(e){return e},quadratic:function(e){return e*e},cubic:function(e){return e*e*e},swing:function(e){return-i.cos(e*i.PI)/2+.5},sqrt:function(e){return i.sqrt(e)},outCubic:function(e){return i.pow(e-1,3)+1},bounce:function(e){var t;if(.5083>=e)t=3;else if(.8489>=e)t=9;else if(.96208>=e)t=27;else{if(!(.99981>=e))return 1;t=91}return 1-i.abs(3*i.cos(e*t*1.028)/t)}};n.prototype.refresh=function(e){var n,o,a=!1;for(e===r?(a=!0,St=[],$t=0,e=t.getElementsByTagName("*")):e.length===r&&(e=[e]),n=0,o=e.length;o>n;n++){var i=e[n],l=i,s=[],c=zt,f=_t,u=!1;if(a&&H in i&&delete i[H],i.attributes){for(var m=0,p=i.attributes.length;p>m;m++){var g=i.attributes[m];if("data-anchor-target"!==g.name)if("data-smooth-scrolling"!==g.name)if("data-edge-strategy"!==g.name)if("data-emit-events"!==g.name){var v=g.name.match(N);if(null!==v){var h={props:g.value,element:i,eventType:g.name.replace(z,q)};s.push(h);var y=v[1];y&&(h.constant=y.substr(1));var T=v[2];/p$/.test(T)?(h.isPercentage=!0,h.offset=(0|T.slice(0,-1))/100):h.offset=0|T;var b=v[3],S=v[4]||b;b&&b!==A&&b!==F?(h.mode="relative",h.anchors=[b,S]):(h.mode="absolute",b===F?h.isEnd=!0:h.isPercentage||(h.offset=h.offset*At))}}else u=!0;else f=g.value;else c="off"!==g.value;else if(l=t.querySelector(g.value),null===l)throw'Unable to find anchor target "'+g.value+'"'}if(s.length){var k,w,x;!a&&H in i?(x=i[H],k=St[x].styleAttr,w=St[x].classAttr):(x=i[H]=$t++,k=i.style.cssText,w=dt(i)),St[x]={element:i,styleAttr:k,classAttr:w,anchorTarget:l,keyFrames:s,smoothScrolling:c,edgeStrategy:f,emitEvents:u,lastFrameIndex:-1},gt(i,[d],[])}}}for(ut(),n=0,o=e.length;o>n;n++){var E=St[e[n][H]];E!==r&&(Q(E),tt(E))}return bt},n.prototype.relativeToAbsolute=function(e,t,r){var n=s.clientHeight,o=e.getBoundingClientRect(),a=o.top,i=o.bottom-o.top;return t===D?a-=n:t===C&&(a-=n/2),r===D?a+=i:r===C&&(a+=i/2),a+=bt.getScrollTop(),a+.5|0},n.prototype.animateTo=function(e,t){t=t||{};var n=yt(),o=bt.getScrollTop();return Vt={startTop:o,topDiff:e-o,targetTop:e,duration:t.duration||w,startTime:n,endTime:n+(t.duration||w),easing:X[t.easing||k],done:t.done},Vt.topDiff||(Vt.done&&Vt.done.call(bt,!1),Vt=r),bt},n.prototype.stopAnimateTo=function(){Vt&&Vt.done&&Vt.done.call(bt,!0),Vt=r},n.prototype.isAnimatingTo=function(){return!!Vt},n.prototype.isMobile=function(){return Bt},n.prototype.setScrollTop=function(t,r){return Mt=r===!0,Bt?Gt=i.min(i.max(t,0),Et):e.scrollTo(0,t),bt},n.prototype.getScrollTop=function(){return Bt?Gt:e.pageYOffset||s.scrollTop||c.scrollTop||0},n.prototype.getMaxScrollTop=function(){return Et},n.prototype.on=function(e,t){return wt[e]=t,bt},n.prototype.off=function(e){return delete wt[e],bt},n.prototype.destroy=function(){var e=U();e(Rt),ct(),gt(s,[T],[y,b,S]);for(var t=0,n=St.length;n>t;t++)at(St[t].element);s.style.overflow=c.style.overflow="",s.style.height=c.style.height="",kt&&o.setStyle(kt,"transform","none"),bt=r,kt=r,wt=r,xt=r,Et=0,At=1,Ft=r,Ct=r,Dt="down",Ht=-1,Pt=0,Nt=0,Ot=!1,Vt=r,zt=r,qt=r,Lt=r,Mt=r,$t=0,_t=r,Bt=!1,Gt=0,Kt=r};var j=function(){var n,o,a,l,d,g,v,h,y,T,b,S;lt(s,[f,u,m,p].join(" "),function(e){var s=e.changedTouches[0];for(l=e.target;3===l.nodeType;)l=l.parentNode;switch(d=s.clientY,g=s.clientX,T=e.timeStamp,I.test(l.tagName)||e.preventDefault(),e.type){case f:n&&n.blur(),bt.stopAnimateTo(),n=l,o=v=d,a=g,y=T;break;case u:I.test(l.tagName)&&t.activeElement!==l&&e.preventDefault(),h=d-v,S=T-b,bt.setScrollTop(Gt-h,!0),v=d,b=T;break;default:case m:case p:var c=o-d,k=a-g,w=k*k+c*c;if(49>w){if(!I.test(n.tagName)){n.focus();var x=t.createEvent("MouseEvents");x.initMouseEvent("click",!0,!0,e.view,1,s.screenX,s.screenY,s.clientX,s.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,0,null),n.dispatchEvent(x)}return}n=r;var E=h/S;E=i.max(i.min(E,3),-3);var A=i.abs(E/Ct),F=E*A+.5*Ct*A*A,C=bt.getScrollTop()-F,D=0;C>Et?(D=(Et-C)/F,C=Et):0>C&&(D=-C/F,C=0),A*=1-D,bt.animateTo(C+.5|0,{easing:"outCubic",duration:A})}}),e.scrollTo(0,0),s.style.overflow=c.style.overflow="hidden"},W=function(){var e=s.clientHeight,t=mt(),r,n,o,a,l,c,f,u,m,p,d;for(u=0,m=St.length;m>u;u++)for(r=St[u],n=r.element,o=r.anchorTarget,a=r.keyFrames,l=0,c=a.length;c>l;l++)f=a[l],p=f.offset,d=t[f.constant]||0,f.frame=p,f.isPercentage&&(p*=e,f.frame=p),"relative"===f.mode&&(at(n),f.frame=bt.relativeToAbsolute(o,f.anchors[0],f.anchors[1])-p,at(n,!0)),f.frame+=d,xt&&!f.isEnd&&f.frame>Et&&(Et=f.frame);for(Et=i.max(Et,pt()),u=0,m=St.length;m>u;u++){for(r=St[u],a=r.keyFrames,l=0,c=a.length;c>l;l++)f=a[l],d=t[f.constant]||0,f.isEnd&&(f.frame=Et-f.offset+d);r.keyFrames.sort(Tt)}},Z=function(e,t){for(var r=0,n=St.length;n>r;r++){var i=St[r],l=i.element,s=i.smoothScrolling?e:t,c=i.keyFrames,f=c.length,u=c[0],m=c[c.length-1],p=s<u.frame,y=s>m.frame,T=p?u:m,b=i.emitEvents,S=i.lastFrameIndex,k,w;if(p||y){if(p&&-1===i.edge||y&&1===i.edge)continue;switch(p?(gt(l,[g],[h,v]),b&&S>-1&&(ft(l,u.eventType,Dt),i.lastFrameIndex=-1)):(gt(l,[h],[g,v]),b&&f>S&&(ft(l,m.eventType,Dt),i.lastFrameIndex=f)),i.edge=p?-1:1,i.edgeStrategy){case"reset":at(l);continue;case"ease":s=T.frame;break;default:case"set":var x=T.props;for(k in x)a.call(x,k)&&(w=ot(x[k].value),0===k.indexOf("@")?l.setAttribute(k.substr(1),w):o.setStyle(l,k,w));continue}}else 0!==i.edge&&(gt(l,[d,v],[g,h]),i.edge=0);for(var E=0;f-1>E;E++)if(s>=c[E].frame&&s<=c[E+1].frame){var A=c[E],F=c[E+1];for(k in A.props)if(a.call(A.props,k)){var C=(s-A.frame)/(F.frame-A.frame);C=A.props[k].easing(C),w=nt(A.props[k].value,F.props[k].value,C),w=ot(w),0===k.indexOf("@")?l.setAttribute(k.substr(1),w):o.setStyle(l,k,w)}b&&S!==E&&("down"===Dt?ft(l,A.eventType,Dt):ft(l,F.eventType,Dt),i.lastFrameIndex=E);break}}},J=function(){Ot&&(Ot=!1,ut());var e=bt.getScrollTop(),t,n=yt(),a;if(Vt)n>=Vt.endTime?(e=Vt.targetTop,t=Vt.done,Vt=r):(a=Vt.easing((n-Vt.startTime)/Vt.duration),e=Vt.startTop+a*Vt.topDiff|0),bt.setScrollTop(e,!0);else if(!Mt){var i=Lt.targetTop-e;i&&(Lt={startTop:Ht,topDiff:e-Ht,targetTop:e,startTime:It,endTime:It+qt}),n<=Lt.endTime&&(a=X.sqrt((n-Lt.startTime)/qt),e=Lt.startTop+a*Lt.topDiff|0)}if(Bt&&kt&&o.setStyle(kt,"transform","translate(0, "+-Gt+"px) "+Kt),Mt||Ht!==e){Dt=e>Ht?"down":Ht>e?"up":Dt,Mt=!1;var l={curTop:e,lastTop:Ht,maxTop:Et,direction:Dt},s=wt.beforerender&&wt.beforerender.call(bt,l);s!==!1&&(Z(e,bt.getScrollTop()),Ht=e,wt.render&&wt.render.call(bt,l)),t&&t.call(bt,!1)}It=n},Q=function(e){for(var t=0,r=e.keyFrames.length;r>t;t++){for(var n=e.keyFrames[t],o,a,i,l={},s;null!==(s=O.exec(n.props));)i=s[1],a=s[2],o=i.match(V),null!==o?(i=o[1],o=o[2]):o=k,a=a.indexOf("!")?et(a):[a.slice(1)],l[i]={value:a,easing:X[o]};n.props=l}},et=function(e){var t=[];return _.lastIndex=0,e=e.replace(_,function(e){return e.replace(L,function(e){return e/255*100+"%"})}),K&&(B.lastIndex=0,e=e.replace(B,function(e){return K+e})),e=e.replace(L,function(e){return t.push(+e),"{?}"}),t.unshift(e),t},tt=function(e){var t={},r,n;for(r=0,n=e.keyFrames.length;n>r;r++)rt(e.keyFrames[r],t);for(t={},r=e.keyFrames.length-1;r>=0;r--)rt(e.keyFrames[r],t)},rt=function(e,t){var r;for(r in t)a.call(e.props,r)||(e.props[r]=t[r]);for(r in e.props)t[r]=e.props[r]},nt=function(e,t,r){var n,o=e.length;if(o!==t.length)throw"Can't interpolate between \""+e[0]+'" and "'+t[0]+'"';var a=[e[0]];for(n=1;o>n;n++)a[n]=e[n]+(t[n]-e[n])*r;return a},ot=function(e){var t=1;return M.lastIndex=0,e[0].replace(M,function(){return e[t++]})},at=function(e,t){e=[].concat(e);for(var r,n,o=0,a=e.length;a>o;o++)n=e[o],r=St[n[H]],r&&(t?(n.style.cssText=r.dirtyStyleAttr,gt(n,r.dirtyClassAttr)):(r.dirtyStyleAttr=n.style.cssText,r.dirtyClassAttr=dt(n),n.style.cssText=r.styleAttr,gt(n,r.classAttr)))},it=function(){Kt="translateZ(0)",o.setStyle(kt,"transform",Kt);var e=l(kt),t=e.getPropertyValue("transform"),r=e.getPropertyValue(K+"transform"),n=t&&"none"!==t||r&&"none"!==r;n||(Kt="")};o.setStyle=function(e,t,r){var n=e.style;if(t=t.replace(z,q).replace("-",""),"zIndex"===t)n[t]=isNaN(r)?r:""+(0|r);else if("float"===t)n.styleFloat=n.cssFloat=r;else try{G&&(n[G+t.slice(0,1).toUpperCase()+t.slice(1)]=r),n[t]=r}catch(o){}};var lt=o.addEvent=function(t,r,n){var o=function(t){return t=t||e.event,t.target||(t.target=t.srcElement),t.preventDefault||(t.preventDefault=function(){t.returnValue=!1,t.defaultPrevented=!0}),n.call(this,t)};r=r.split(" ");for(var a,i=0,l=r.length;l>i;i++)a=r[i],t.addEventListener?t.addEventListener(a,n,!1):t.attachEvent("on"+a,o),Yt.push({element:t,name:a,listener:n})},st=o.removeEvent=function(e,t,r){t=t.split(" ");for(var n=0,o=t.length;o>n;n++)e.removeEventListener?e.removeEventListener(t[n],r,!1):e.detachEvent("on"+t[n],r)},ct=function(){for(var e,t=0,r=Yt.length;r>t;t++)e=Yt[t],st(e.element,e.name,e.listener);Yt=[]},ft=function(e,t,r){wt.keyframe&&wt.keyframe.call(bt,e,t,r)},ut=function(){var e=bt.getScrollTop();Et=0,xt&&!Bt&&(c.style.height=""),W(),xt&&!Bt&&(c.style.height=Et+s.clientHeight+"px"),Bt?bt.setScrollTop(i.min(bt.getScrollTop(),Et)):bt.setScrollTop(e,!0),Mt=!0},mt=function(){var e=s.clientHeight,t={},r,n;for(r in Ft)n=Ft[r],"function"==typeof n?n=n.call(bt):/p$/.test(n)&&(n=n.slice(0,-1)/100*e),t[r]=n;return t},pt=function(){var e=kt&&kt.offsetHeight||0,t=i.max(e,c.scrollHeight,c.offsetHeight,s.scrollHeight,s.offsetHeight,s.clientHeight);return t-s.clientHeight},dt=function(t){var r="className";return e.SVGElement&&t instanceof e.SVGElement&&(t=t[r],r="baseVal"),t[r]},gt=function(t,n,o){var a="className";if(e.SVGElement&&t instanceof e.SVGElement&&(t=t[a],a="baseVal"),o===r)return void(t[a]=n);for(var i=t[a],l=0,s=o.length;s>l;l++)i=ht(i).replace(ht(o[l])," ");i=vt(i);for(var c=0,f=n.length;f>c;c++)-1===ht(i).indexOf(ht(n[c]))&&(i+=" "+n[c]);t[a]=vt(i)},vt=function(e){return e.replace(P,"")},ht=function(e){return" "+e+" "},yt=Date.now||function(){return+new Date},Tt=function(e,t){return e.frame-t.frame},bt,St,kt,wt,xt,Et=0,At=1,Ft,Ct,Dt="down",Ht=-1,It=yt(),Pt=0,Nt=0,Ot=!1,Vt,zt,qt,Lt,Mt,$t=0,_t,Bt=!1,Gt=0,Kt,Yt=[],Rt;"function"==typeof define&&define.amd?define([],function(){return o}):"undefined"!=typeof module&&module.exports?module.exports=o:e.skrollr=o}(window,document);