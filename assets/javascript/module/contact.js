(function() {
    // Contact section

    if(document.querySelector('.js-contact')) {

        // Allow submit message if agree to rgpd
        $('#agree').on('click', function(){
            $('#submitted').toggleClass('disabled')
        }) 

        // Toggle 
        $(window).resize(function() {
            if($(window).width() <= 320) {
                $('span').addClass('hidden');
                $('label').css('margin-left', '0')
            } else {
                $('span').removeClass('hidden');
            }
        });

        // Success flash message
        $('#close_flash_message').on('click', function() {
            $('#flash_messages').addClass('hidden');
        });
    }
    
})();