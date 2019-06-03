'use strict';

(function(){
    let isBigger = false;
    let crescent;
    const mytext = document.querySelector('#mytext');
    const bling = document.querySelector('#bling');
    const decoration = document.querySelector('#decoration');

    decoration.onclick = () => {
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

    bling.onchange = () => {
        if(bling.checked){
            mytext.classList.add('bling');
        } else {
            mytext.classList.remove('bling');
        }
    }
})();