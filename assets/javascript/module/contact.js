(function() {
    // Contact section

    if(document.querySelector('.js-contact')) {
        
        var elem = document.querySelectorAll('.modal.js-contact');
        var contact = M.Modal.init(elem);
        
        // Allow submit message if agree to rgpd
        document.querySelector('#agree').addEventListener('click', function() {
            document.querySelector('#submitted').classList.toggle('disabled');
        }) 

        // Toggle 
        window.addEventListener('resize', function() {
            if($(window).width() <= 320) {
                document.querySelector('span').classList.add('hidden');
                document.querySelector('label').style.marginLeft = '0';
            } else {
                document.querySelector('span').classList.remove('hidden');
            }
        });

        // Success flash message
        if(document.querySelector('#close_flash_message')) {
            document.querySelector('#close_flash_message').addEventListener('click', function() {
                document.querySelector('#flash_messages').classList.add('hidden');
            });
        }
    }
    
})();