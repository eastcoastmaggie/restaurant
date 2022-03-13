(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>u});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),c=t(667),d=t.n(c),s=new URL(t(947),t.b),l=i()(o()),p=d()(s);l.push([e.id,"body{\n    background-color: rgb(189, 189, 189);\n    margin: 0px;\n    padding:0px;\n    font-family: monospace;\n}\n#content {\n    margin: 50px;\n    padding: 0px;\n    display: grid;\n    flex-direction: column;\n    grid-template-columns: 1fr;\n    grid-template-rows: auto auto 1fr 50px;\n}\n#content #layout{\n    grid-column: 2;\n}\n.logo{\n    padding: 0px;\n    margin: 0px;\n    grid-column: 1;\n}\nh1{\n    margin: 0px;\n    padding:0px;\n    grid-row: 1 / 3;\n    grid-column: 2;\n    color: #2bbbce;\n    font-size: 2.4rem;\n}\nh2{\n    align-self: center;\n    justify-self: center;\n    color: #2bbbce;\n    font-size: 1.2rem;\n    text-align: justify;\n    margin: 40px;\n    max-width: 800px;\n}\n#main-content{\n    background-color: #fff;\n    box-shadow: 0 1px 4px #000000;\n    min-height: 80vh;\n    display: flex;\n    flex-direction: column;\n\n\n}\n#main-content p{\n    margin: 20px;\n\n}\n#tab-nav{\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end;\n    align-items: stretch;\n    gap: 2px;\n}\nbutton{\n    border-radius: 6px 6px 0 0;\n    border: none;\n    border-right:#161616 1px dotted;\n    padding: 7px 20px 4px 20px;\n    width: 110px;\n    font-size: 1.4rem;\n    line-height: 1.4rem;\n    color: white;\n    background-color: #000000;\n    box-shadow: 0px 0px 4px #000000;\n}\n.selected{\n    background-color: #2bbbce;\n}\nbutton:hover{\n    text-decoration: underline;\n    background-color: #bd4cb3;\n}\n\n#hero-banner{\n    padding: 0px;\n    margin: 0px;\n    width: 100%;\n    height: 300px;\n    background-image: url("+p+");\n    background-size: cover;   \n    background-repeat: no-repeat;\n    background-position: 0 58%;\n}\n\n#cat-banner{\n    align-self: center;\n    padding: 0px;\n    margin: 10px auto;\n    display:flex;\n    flex-direction: row;\n    box-shadow: 0 1px 4px #000000;\n    justify-content: center;\n    align-items: center;\n    width: 80%;\n    border: none;\n}\n#cat-banner p{\n    text-align: justify;\n    margin: 20px;\n}\n#banner-image{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n#banner-image img{\n    width: 200px;\n    height: auto;\n    margin: 0px;\n    padding: 0px;\n}\n#footer{\n    background-color: #2e2e2e;\n    color: #fff;\n    padding: 5px 10px;\n    box-shadow: 0 1px 4px #000000;\n    z-index: 1;\n}\n@media only screen and (max-width: 600px) {\n    #content{\n        margin: 0;\n    }\n    #main-content{\n        border: none;\n    }\n    h2{\n        text-align: justify;\n    }\n    #hero-banner{\n        height: 230px;\n    }\n    #tab-nav{\n        grid-row: 2;\n        gap: 0;\n        display: flex;\n        flex-direction: row;\n        justify-content: space-evenly;\n        width: 100%;\n    }\n    button{\n        box-shadow: 0px 0px 0px #000000;\n        border-radius: 0;\n        width: 25%;\n        height: 50px;\n    }\n    #cat-banner{\n        width: 100%;\n    }\n    \n}",""]);const u=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var d=e[c],s=r.base?d[0]+r.base:d[0],l=a[s]||0,p="".concat(s," ").concat(l);a[s]=l+1;var u=t(p),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)n[u].references++,n[u].updater(f);else{var m=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var d=r(e,o),s=0;s<a.length;s++){var l=t(a[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=d}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},791:(e,n,t)=>{e.exports=t.p+"75d72412069a7fc6d17e.jpg"},68:(e,n,t)=>{e.exports=t.p+"d6b8435a3e195d0e6383.png"},947:(e,n,t)=>{e.exports=t.p+"001c9889ecfd1e8fd714.jpg"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),d=t.n(c),s=t(216),l=t.n(s),p=t(589),u=t.n(p),f=t(426),m={};m.styleTagTransform=u(),m.setAttributes=d(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),n()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;var h=t(68),b=t(791);const g=document.querySelector("#content"),x=g.parentElement;x.removeChild(g),x.appendChild(function(){const e=document.createElement("div");e.setAttribute("id","content");const n=document.createElement("header");n.setAttribute("id","heading");const t=new Image;t.src=h;const r=document.createElement("div");r.classList.add("logo"),r.appendChild(t),n.appendChild(r);const o=document.createElement("h1");o.textContent="Wobbles' Waffles and Cat Cafe",n.appendChild(o);const a=["home","menu","about","contact"],i=[];let c,d=document.createElement("div"),s=document.createElement("nav");s.setAttribute("id","tab-nav");for(let e of a){const n=document.createElement("button");n.classList.add("tab"),n.dataset.tab=e,n.textContent=e,n.addEventListener("click",p),d.textContent=e,i.push(n),s.appendChild(n),"home"==e&&n.click()}e.appendChild(n),e.appendChild(s),e.appendChild(c);const l=document.createElement("footer");return l.setAttribute("id","footer"),l.textContent="123 main st. Charlottetown, PE 555-123-4567",e.appendChild(l),e;function p(n){for(let e of i)e.classList.remove("selected");let t;switch(n.target.classList.add("selected"),n.target.dataset.tab){case"home":default:t=(()=>{const e=document.createElement("div");e.setAttribute("id","home-content");const n=document.createElement("div");n.setAttribute("id","hero-banner");const t=document.createElement("h2");t.textContent="Spend time with cats, and eat the waffles topped with fresh fruit, drizzled in syrup favourite toppings. Or enjoy a hot cup of tea.";const r=document.createElement("div");r.setAttribute("id","cat-banner");const o=document.createElement("div");o.setAttribute("id","banner-image");const a=new Image;a.src=b;const i=document.createElement("p");return i.textContent="Watson's foundation cats are on premises and are looking forward to your visit. Come play with them for $5. These kitties are looking for a fur-ever home. Inquire with our staff if you are interested in adopting.",o.appendChild(a),r.appendChild(o),r.appendChild(i),e.appendChild(n),e.appendChild(t),e.appendChild(r),e})();break;case"menu":t=(()=>{const e=document.createElement("div"),n=[{item:"tea",price:"$3"},{item:"coffee",price:"$3"},{item:"latte",price:"$4"},{item:"hot chocolate",price:"$4"},{item:"Italian Soda",price:"$4"},{item:"juice",price:"$2.50"}],t=[{item:"half waffle",price:"$4"},{item:"full waffle",price:"$7"},{item:"breakfast sandwich",price:"$5.50"},{item:"soup",price:"$5.50"},{item:"beet salad",price:"$10"},{item:"chicken pesto on waffle",price:"$15.50"}];e.textContent="drinks:";const r=document.createElement("ul");for(let e of n){let n=document.createElement("li"),t=document.createElement("span"),o="";for(;o.length<30-e.item.length;)o+=" .";t.textContent=o,n.insertAdjacentText("afterbegin",`${e.item}`),n.insertAdjacentElement("beforeend",t),n.insertAdjacentText("beforeend",` ${e.price}`),r.appendChild(n)}e.appendChild(r),e.insertAdjacentText("beforeend","Food:");const o=document.createElement("ul");for(let e of t){let n=document.createElement("li"),t=document.createElement("span"),r="";for(;r.length<30-e.item.length;)r+=" .";t.textContent=r,n.insertAdjacentText("afterbegin",`${e.item}`),n.insertAdjacentElement("beforeend",t),n.insertAdjacentText("beforeend",` ${e.price}`),o.appendChild(n)}return e.appendChild(o),e})();break;case"contact":t=(()=>{const e=document.createElement("div"),n=[{day:"Monday",hours:"10-3"},{day:"Tuesday",hours:"10-3"},{day:"Wednesday",hours:"closed"},{day:"Thursday",hours:"10-5"},{day:"Friday",hours:"10-5"},{day:"Saturday",hours:"9-5"},{day:"Sun",hours:"10-2"}];e.insertAdjacentText("beforeend","Open:");const t=document.createElement("ul");for(let e of n){let n=document.createElement("li");n.insertAdjacentText("afterbegin",`${e.day}: `),n.insertAdjacentText("beforeend",` ${e.hours}`),t.appendChild(n)}return e.appendChild(t),e.insertAdjacentHTML("beforeend",'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d88269.14561238376!2d-63.205930166120496!3d46.26193981593221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b5e52ddd47f83c5%3A0x5a5777b89f519b27!2sCharlottetown%2C%20PE!5e0!3m2!1sen!2sca!4v1647005524698!5m2!1sen!2sca" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'),e})();break;case"about":t=(()=>{const e=document.createElement("div");return e.textContent="about us:",e.insertAdjacentText("beforeend","Wobbles' Waffles and cat cafe is a waffle house, cafe, and a place to socialize with cats from Watson's Cat Foundation. A non-for-profit organization aimed at finding furever homes for cats and kittens in the local area. "),e})()}let r=e.querySelector("#main-content");c=t,c.setAttribute("id","main-content"),null!=r?e.replaceChild(c,r):e.appendChild(c)}}())})()})();