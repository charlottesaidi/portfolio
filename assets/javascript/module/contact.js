(function() {
    // Contact section

    if(document.querySelector('.js-contact')) {
        
        // Allow submit message if agree to rgpd
        document.querySelector('#agree').addEventListener('click', function() {
            document.querySelector('#submitted').classList.toggle('disabled');
        }) 

        // Success flash message
        if(document.querySelector('#close_flash_message')) {
            document.querySelector('#close_flash_message').addEventListener('click', function() {
                document.querySelector('#flash_messages').classList.add('hidden');
            });
        }
    }
    
})();