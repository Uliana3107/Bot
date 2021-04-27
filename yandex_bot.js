// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://yandex.ru
// @icon
// @grant        none
// ==/UserScript==

let keywords = ["гобой", "как звучит флейта"];
let links = document.links;
let keyword = keywords[GetRandom(0,keywords.length)];

if("button" !== undefined){
    document.getElementsByName('text')[0].value = keyword;
    document.getElementsByTagName("button")[0].click();
} else {
    for(let i=0; i<links.length; i++) {
     if(links[i].href.indexOf('xn----7sbab5aqcbiddtdj1e1g.xn--p1ai')!=-1) {
     let link = links[i];
        console.log("Нашел фразу" + link);
         link.removeAttribute("target");
        link.click();
        break;
     }
    }
}

function GetRandom(min,max) {
    return Math.floor(Math.random()*(max-min)+min);
}
