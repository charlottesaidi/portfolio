import Swiper from "swiper";
import {Pagination, Navigation} from "swiper/modules";
import 'swiper/css/pagination';
import 'swiper/css/navigation';

(function() {
    // Portfolio Section
    
    if(document.querySelector('.js-portfolio')) {

        if(document.querySelector(".modal.bottom-sheet")) {
            var modals = document.querySelectorAll('.modal.bottom-sheet');
            var projects = M.Modal.init(modals);
        }

        if (document.querySelector('.swiper')) {
          const swiper = new Swiper('.swiper', {
            speed: 400,
            spaceBetween: 100,
            modules: [Navigation, Pagination],
            pagination: {
              el: '.swiper-pagination',
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          });

          swiper.slideNext();
        }
    }

})();