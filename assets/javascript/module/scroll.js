(function() {
    
    // SCROLL SMOOTH
    $('.head-link').click(function(e) {
        e.preventDefault();
        var goto = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(goto).offset().top
        }, 800);
    });

    $(window).on('scroll', function () {
        addClassOnScroll();
    });

})();

// FUNCTIONS
// Active class for anchor link
var addClassOnScroll = function () {
    var windowBottom = $(window).scrollTop() + $(window).height();
    $('.scrollspy').each(function (index, elem) {
        var offsetTop = $(elem).offset().top;
        var outerHeight = $(this).outerHeight(true);
        if( windowBottom > (offsetTop) && windowBottom < ( offsetTop + outerHeight)) {
            var elemId = $(elem).attr('id');
            $("nav ul .head-link.active").removeClass('active');
            $("nav ul .head-link[href='#" + elemId + "']").addClass('active');
        }
    });
};