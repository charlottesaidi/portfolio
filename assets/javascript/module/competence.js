(function() {
    // Competence section

    if(document.querySelector('.js-competence')) {
        // COMPETENCES BARS PROGRESS ON SCROLL
        var marker1 = $('#block1').offset().top;
        var marker2 = $('#block2').offset().top;
        var progressBar1 = $('#block1 .progress-inner-bar');
        var progressBar2 = $('#block2 .progress-inner-bar');
    
        $(window).scroll(function() {
            var currentScroll = $(window).scrollTop() + $(window).height() - 100;
            if (currentScroll >= marker1) {
                progressBar1.each(function (index, elem) {
                    var classValue = $(elem).attr('class').split(' ').pop();
                    elem.style.width = classValue + '%';
                });
            } 
            if (currentScroll >= marker2) {
                progressBar2.each(function (index, elem) {
                    var classValue = $(elem).attr('class').split(' ').pop();
                    elem.style.width = classValue + '%';
                });
            }
        });
    }

})();