import Swiper from './swiper.js';

(function() {
    // Portfolio Section
    
    if(document.querySelector('.js-portfolio')) {

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
            var blocks = $('.portfolio_blocks');
            var hiddenBlocks = blocks.slice(3);
            var showBlocks = blocks.slice(0, 3);
    
            if($(window).width() <= 993) {
                hiddenBlocks = blocks.slice(4);
                showBlocks = blocks.slice(0, 4);
            }
    
            showBlocks.removeClass('portfolio_blocks');
            
            $('.show_blocks').click(function() {
                hiddenBlocks.slideToggle('slow');
                ($(this).text() === "+") ? $(this).text("-") : $(this).text("+");
            })
        }

    }

})();