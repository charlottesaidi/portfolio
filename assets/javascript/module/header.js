(function() {
    // Header

    var nav = $('#navigation');
    var lastScrollPos = 0;
    var ticking = false;

    $(window).on('scroll', function() {
        var scrollPos = window.pageYOffset || document.documentElement.scrollTop;
        var direction = scrollPos > lastScrollPos ? 1 : -1;
        if(!ticking) {
            window.requestAnimationFrame(function() {
                setHeaderState(nav, scrollPos, direction)
                ticking = false;
            })
        }
        lastScrollPos = (scrollPos <= 0) ? 0 : scrollPos;
        ticking = true;
    });

})();

// Functions
// Change nav style on scroll
function setHeaderState(nav, scrollPos, direction) {
    var offsetTop = (window.outerWidth >= 1080) ? 42 : 12;
    
    if(scrollPos >= offsetTop) {
        nav.addClass('z-depth-2 blur').removeClass('z-depth-0 transparent');
    }
    else {
        nav.addClass('z-depth-0 transparent ').removeClass('z-depth-2 blur');
    }
    if(direction > 0) {
        nav.addClass('nav-hidden');
        nav.addClass('blur').removeClass('transparent');
    }
    else {
        nav.removeClass('nav-hidden');
    }
}