(function(){
    "use strict";

    $(function(){
        $('#password, #confirmPassword').on('keyup', function () {
            if ($('#password').val() === $('#confirmPassword').val()) {
                $('#matching').html('Matching').css('color', 'green');
                $('#registerbtn').prop('disabled', false);

            }
            else{
                $('#matching').html('Not Matching').css('color', 'red');
                $('#registerbtn').prop('disabled', true);
            }
        });

        if(($('#fullName').val().length || $('#email').val().length|| $('#address').val().length|| $('#password').val().length) == 0){
            $('#registerbtn').prop('disabled', true);
        }
        else{
            $('#registerbtn').prop('disabled', false);
        }
    });

})();
