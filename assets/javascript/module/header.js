(function() {
    // Headers

    if(document.querySelector('#navigation')) {
        var nav = document.querySelector('#navigation');
        var lastScrollPos = 0;
        var ticking = false;
    
        window.addEventListener('scroll', function() {
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
    }

    if(document.querySelector('#slide-out')) {
        var burgermenu = document.querySelector('.burgermenu');
        var navs = document.querySelectorAll('.sidenav');
        var sidenav = M.Sidenav.init(navs, {
            "preventScrolling": true
        });
        
        burgermenu.addEventListener('click', (e) => {
            navs.forEach(nav => {
                var sidenav_instance = M.Sidenav.getInstance(nav);
                burgermenu.classList.contains('opened') ? sidenav_instance.close() : sidenav_instance.open();
            });
            burgermenu.classList.toggle('opened');
        })
    }

})();

// Functions
// Change nav style on scroll
function setHeaderState(nav, scrollPos, direction) {
    var offsetTop = (window.outerWidth >= 1080) ? 42 : 12;
    
    if(scrollPos >= offsetTop) {
        nav.classList.remove('transparent');
    }
    else {
        nav.classList.add('transparent');
        nav.classList.remove('z-depth-2');
    }
    if(direction > 0) {
        nav.classList.add('hidden');
        nav.classList.remove('transparent');
    }
    else {
        nav.classList.remove('hidden');
    }
}