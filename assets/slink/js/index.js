(()=>{var n={60:()=>{$.extend({jsonp2:function(n){return new Promise((t=>{!function(n,t){window._parseCb=n=>{t(n.s)};const e=document.createElement("script");e.src="https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+n+"&cb=_parseCb",document.body.appendChild(e),document.body.removeChild(e)}(n,t)}))}})},408:(n,t,e)=>{"use strict";e(60);const o=$("#key-ipt"),r=$("#forecast");let i=-1,s=[];o.on("input",function(n,t=300){let e=null;return function(){clearTimeout(e),e=setTimeout((()=>{n.apply(this,arguments)}),t)}}((function(n){!function(n,t){if(![13,37,38,39,40].includes(n.keyCode)){if(!t)return r.hide(),i=-1,s=[],!1;$.jsonp2(t).then((n=>{if(0===n.length)return!1;s=n;let t="";n.forEach((n=>{t+=`<li> <a target="_blank" href="https://www.baidu.com/s?wd=${n}">${n}</a></li>`})),r.html(t),r.show()}))}}(n,$.trim(o.val()))})));const a={13:"enter",37:"left",38:"up",39:"right",40:"down"},l=()=>{const n=s.length-1;-1===i?i=n:i===n&&(i=0),r.find("li").removeClass("cur"),r.find("li").eq(i).addClass("cur"),o.val(s[i])};o.on("keydown",(function(n){switch(a[n.keyCode]){case"up":i--,l();break;case"down":i++,l();break;case"enter":window.open("https://www.baidu.com/s?wd="+o.val())}})),$(".viewport").on("click",(function(){r.hide(),i=-1,s=[]}))}},t={};function e(o){if(t[o])return t[o].exports;var r=t[o]={exports:{}};return n[o](r,r.exports,e),r.exports}e.m=n,e.x=n=>{},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n={826:0},t=[[408]],o=n=>{},r=(r,i)=>{for(var s,a,[l,u,c,p]=i,h=0,d=[];h<l.length;h++)a=l[h],e.o(n,a)&&n[a]&&d.push(n[a][0]),n[a]=0;for(s in u)e.o(u,s)&&(e.m[s]=u[s]);for(c&&c(e),r&&r(i);d.length;)d.shift()();return p&&t.push.apply(t,p),o()},i=self.webpackChunklittl_navigation=self.webpackChunklittl_navigation||[];function s(){for(var o,r=0;r<t.length;r++){for(var i=t[r],s=!0,a=1;a<i.length;a++){var l=i[a];0!==n[l]&&(s=!1)}s&&(t.splice(r--,1),o=e(e.s=i[0]))}return 0===t.length&&(e.x(),e.x=n=>{}),o}i.forEach(r.bind(null,0)),i.push=r.bind(null,i.push.bind(i));var a=e.x;e.x=()=>(e.x=a||(n=>{}),(o=s)())})(),e.x()})();