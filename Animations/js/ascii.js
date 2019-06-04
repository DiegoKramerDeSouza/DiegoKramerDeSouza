(function(){
    'use strict';
    const panel = document.querySelector('#panel');
    const start = document.querySelector('#start');
    const stop = document.querySelector('#stop');
    const animation = document.querySelector('#animation');
    const turbo = document.querySelector('#turbo');
    const size = document.querySelector('#size');
    const limiter = '=====\n'
    let frames = 250;
    let interval;
    let anime;
    let num = 0;
    let started = false;

    const startAnimation = () => {
        if(!started){
            started = true;
            anime = panel.value.split(limiter);
        }
        interval = setInterval(() => {
            panel.value = anime[num];
            num == anime.length - 1 ? num = 0 : num++;
        }, frames);
    };
    const stopAnimation = () => {
        clearInterval(interval);
        start.disabled = false;
        stop.disabled = true;
        started = false;
        panel.value = ANIMATIONS[animation.value];
    }
    const blankMsg = () => 'Please select an Animation!';

    panel.innerHTML = ANIMATIONS[animation.value];

    start.onclick = () => {
        if(animation.value == 'blank') {
            panel.innerHTML = blankMsg();
            return;
        }
        start.disabled = true;
        stop.disabled = false;
        startAnimation();
    }
    stop.onclick = () => {
        stopAnimation();
    }
    animation.onchange = function() {
        num = 0;
        if(this.value == 'custom') stopAnimation();
        panel.value = ANIMATIONS[animation.value];
        if(started){
            anime = panel.value.split(limiter);
        }
    }
    turbo.onchange = () => {
        frames = turbo.checked ? 50 : 250;
        if(started && interval){
            clearInterval(interval);
            startAnimation();
        }
    }
    size.onchange = () => 
        panel.className = size.value;
})();