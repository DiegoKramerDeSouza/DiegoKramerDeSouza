'use strict';
(function(){
    let frames = 250;
    let interval;
    let anime;
    let num = 0;
    let started = false;

    const startAnimation = () => {
        if(!started){
            started = true;
            anime = document.querySelector('#panel').value.split('=====\n');
        }
        interval = setInterval(() => {
            document.querySelector('#panel').value = anime[num];
            num == anime.length - 1 ? num = 0 : num++;
        }, frames);
    };
    const stopAnimation = () => {
        clearInterval(interval);
        document.querySelector('#start').disabled = false;
        document.querySelector('#stop').disabled = true;
        started = false;
        document.querySelector('#panel').value = ANIMATIONS[document.querySelector('#animation').value];
    }
    const blankMsg = () => 'Please select an Animation!';

    document.querySelector('#panel').innerHTML = ANIMATIONS[document.querySelector('#animation').value];

    document.querySelector('#start').onclick = () => {
        if(document.querySelector('#animation').value == 'blank') {
            document.querySelector('#panel').innerHTML = blankMsg();
            return;
        }
        document.querySelector('#start').disabled = true;
        document.querySelector('#stop').disabled = false;
        startAnimation();
    }
    document.querySelector('#stop').onclick = () => {
        stopAnimation();
    }
    document.querySelector('#animation').onchange = function() {
        num = 0;
        if(this.value == 'custom') stopAnimation();
        document.querySelector('#panel').value = ANIMATIONS[document.querySelector('#animation').value];
        if(started){
            anime = document.querySelector('#panel').value.split('=====\n');
        }
    }
    document.querySelector('#turbo').onchange = () => {
        frames = document.querySelector('#turbo').checked ? 50 : 250;
        if(started && interval){
            clearInterval(interval);
            startAnimation();
        }
    }
    document.querySelector('#size').onchange = () => 
        document.querySelector('#panel').className = document.querySelector('#size').value;
})();