import './particleground.js';

(function() {
    // About side section

    if(document.querySelector('.js-about')) {
        particleground(document.querySelector('.background'), {
            dotColor: '#5cbdaa',
            lineColor: '#5cbdaa',
            curvedLines: true
        });

        var trigger = document.querySelector('.background_trigger');
        var logo = document.querySelector('#logo');

        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            var container = document.querySelector('#'+e.target.dataset.target);
            container.classList.toggle('shrink');
            e.target.classList.toggle('out');
        })
    }

})();