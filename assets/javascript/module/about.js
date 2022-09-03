import {particlesColorTheme} from './bundles/initParticles.js';
import {loadParticleJs} from './bundles/initParticles.js';

(function() {
    // About side section

    if(document.querySelector('.js-about')) {
        var options = {
            color: particlesColorTheme(),
            nb: 150,
            speed: 2
        }
        // About section background
        loadParticleJs('particles-js', options);

        // background particle's color change when switch theme light/dark
        var toggleSwitchTheme = document.getElementById("togButton");
        toggleSwitchTheme.addEventListener("change", (e) => {
            options.color = particlesColorTheme();
            loadParticleJs('particles-js', options);
        })

        // Slide in/out about section
        var trigger = document.querySelector('.background_trigger');
 
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            var container = document.querySelector('#'+e.target.dataset.target);
            var main_body = document.querySelector('.right_side');
            var background = document.querySelector('.background');
            container.classList.toggle('shrink');
            background.classList.toggle('shrink');
            e.target.classList.toggle('out');
            main_body.classList.toggle('out');
        })
    }

})();