(function() {
    // Portfolio Section
    
    if(document.querySelector('.js-portfolio')) {

        if(document.querySelector(".modal.bottom-sheet")) {
            var modals = document.querySelectorAll('.modal.bottom-sheet');
            var projects = M.Modal.init(modals);
        }

        if(document.querySelector(".slides")) {
            let slideIndex = 1;
            const $next = document.querySelector('.next');
            const $prev = document.querySelector('.prev');

            showSlides(slideIndex);
            
            $prev.addEventListener('click', () => {showSlides(slideIndex += -1)});
            $next.addEventListener('click', () => {showSlides(slideIndex += 1)});

            function showSlides(n) {
                let i;
                let slides = document.querySelectorAll(".slides");
        
                if (n > slides.length) {slideIndex = 1} 
                   
                if (n < 1) {slideIndex = slides.length}
        
                for (i = 0; i < slides.length; i++) {
                    slides[i].style.display = "none";  
                }
        
                slides[slideIndex-1].style.display = "block";  
            }
        }
    }
})();