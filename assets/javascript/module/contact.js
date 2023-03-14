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

        const form = document.querySelector('#contact_form');
        const url = form.getAttribute('action');
        const form_errors = form.querySelectorAll('.form_errors');

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            var formData = new FormData(form);

            fetch(url, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(Object.fromEntries(formData))
            }).then((res) => {return res.json()}).then((data) => {
                if(data.error) {
                    var violations = data.error.violations;
                    for(let _violations of violations) {
                        form_errors.forEach(message => {
                            if(message.getAttribute('id') == _violations.propertyPath) {
                                message.innerHTML = _violations.title;
                            }
                        })
                    }
                } else {
                    var message = document.querySelector('#flash_message');
                    message.closest('#flash_messages').classList.remove('hidden');
                    message.innerHTML = data.success;
                }
            })
            .catch(err => console.log(err));
        })
    }
    
})();