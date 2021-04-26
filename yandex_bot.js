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
}

for(let i=0; i<links.length; i++) {

    if((keyword ==="гобой") && links[i].href.indexOf('vplate.ru')!=-1) {
        let link = links[i];
        console.log("Нашел фразу" + link);
        link.click();
        break;} else {
            if ((keyword === "как звучит флейта") && links[i].href.indexOf('lightaudio.ru')!=-1) {
                let link = links[i];
                console.log("Нашел фразу" + link);
                link.click();
                break;
            }
        }
}

function GetRandom(min,max) {
    return Math.floor(Math.random()*(max-min)+min);
}
