import Swiper from './swiper.js';

(function() {
    // Portfolio Section
    
    if(document.querySelector('.js-portfolio')) {

        if(document.querySelector(".modal.bottom-sheet")) {
            var modals = document.querySelectorAll('.modal.bottom-sheet');
            var projects = M.Modal.init(modals);
        }

        const swiper = new Swiper('.swiper', {
            effect: 'cards',
            speed: 400,
            spaceBetween: 100,
            scrollbar: {
                el: '.swiper-scrollbar',
                draggable: true,
            },
            
        });

        if(document.querySelector(".hex_modal")) {

            document.addEventListener('click', (e) => {
                console.log(e.target)
            })
        }
        
        if(document.querySelector('.portfolio_blocks')) {
            // 
        }

    }

})();