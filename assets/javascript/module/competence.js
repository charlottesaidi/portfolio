// import {Dial} from './bundles/chart';

(function() {
    // Competence section

    if(document.querySelector('.js-competence')) {
        const $skills = document.querySelectorAll('.card-image');

        if ('registerProperty' in CSS) {
          CSS.registerProperty({
            name: '--p',
            syntax: '<integer>',
            initialValue: '0',
            inherits: true,
          });
        } else {
          document.documentElement.style.setProperty('--p', '0');
        }

        $skills.forEach(skill => {

            skill.addEventListener('mouseenter', (e) => {
                var id = e.target.dataset.target;
                var value = e.target.dataset.value;
                var skill_card = document.querySelector('#skill_card'+id);
                skill_card.classList.remove('hidden');

                addAnimation(
                    `@keyframes p { 95%, 100% { --p: ${value} } }`
                )
            })
            
            skill.addEventListener('mouseleave', (e) => {
                var id = e.target.dataset.target;
                var skill_card = document.querySelector('#skill_card'+id);
                skill_card.classList.add('hidden');
            })
        })
    }

})();

function addAnimation(body) {
    let dynamicStyles = null;
    if (!dynamicStyles) {
        dynamicStyles = document.createElement('style');
        dynamicStyles.type = 'text/css';
        document.head.appendChild(dynamicStyles);
    }

    dynamicStyles.sheet.insertRule(body, dynamicStyles.length);
}