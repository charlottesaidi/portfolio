(function() {
    // About side section

    if(document.querySelector('.js-about')) {
        var trigger = document.querySelector('.background_trigger');
        var logo = document.querySelector('#logo');

        trigger.addEventListener('click', (e) => {
            var container = document.querySelector('#'+e.target.dataset.target);
            container.classList.toggle('shrink');
            e.target.classList.toggle('out');
            logo.classList.toggle('opaque');
        })
    }

})();