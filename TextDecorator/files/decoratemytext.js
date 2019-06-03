'use strict';

const mytext = document.querySelector('#mytext');
const decoration = document.querySelector('#decoration');
const bling = document.querySelector('#bling');
let isBigger = false;
let crescent;

decoration.onclick = function(){
    //mytext.classList.add('bigger');
    let size;
    if(isBigger){
        isBigger = false;
        clearInterval(crescent);  
    } else {
        isBigger = true;
        crescent = setInterval(function(){
            size = window.getComputedStyle(mytext, null).getPropertyValue('font-size');
            mytext.style.fontSize = (parseInt(size) + 2) + 'px';
        }, 500); 
    }
}

bling.onchange = function(){
    if(bling.checked){
        mytext.classList.add('bling');
    } else {
        mytext.classList.remove('bling');
    }
}