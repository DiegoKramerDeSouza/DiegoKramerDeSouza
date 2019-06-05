$(function(){
    $('input[type="radio"]').click(populate);
    populate();

});

function populate(){
    $('#people .person').addClass(getGender());
}

function getGender(){
    return $('input[type="radio"]:checked').val();
}