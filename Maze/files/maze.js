(function(){
    'use strict';

    let winner;
    let started;
    let msg;
    
    $(function(){
        $('#start').click(start);
        msg = $('#status').text();
    });
    function prepare(){
        winner = true;
        started = true;
        $('#status').text(msg);
        $('div.boundary').removeClass('youlose');
    }
    function start(){
        prepare();
        $('.boundary').mouseenter(lose);
        $('#maze').mouseleave(lose);
        $('#end').mouseenter(finish);
    }
    function finish(){
        if(started){
            let msg = winner ? 'You win! :]' : 'Sorry, you lost :[';
            if(!winner) $('div.boundary').addClass('youlose');
            $('#status').text(msg);
            started = false;
        }
    }
    function lose(){
        winner = false;
        finish();
    }
})();