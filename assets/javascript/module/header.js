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

    if(document.querySelector('.sidenav_container')) {
        const containers = document.querySelectorAll('.scrollspy');
        const links = document.querySelectorAll('.nav_link');

        var selectors = [
            containers,
            links
        ]

        window.onscroll = () => {
            addActiveClassOnLinks(selectors);
        };
    }

})();

// Functions
// Change nav style on scroll
var setHeaderState = (nav, scrollPos, direction) => {
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
// active class for anchor links
var addActiveClassOnLinks = (selectors) => {
    var current = "";

    selectors[0].forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute("id"); 
        }
    });

    selectors[1].forEach((link) => {
        link.classList.remove("active");
        if (link.classList.contains(current)) {
            link.classList.add("active");
        }
    });
};