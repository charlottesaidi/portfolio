import '../javaScript/materialize/bin/materialize.min.js';

$(function(){
    // PLUGINS INIT
    $('.sidenav').sidenav();
    $('.modal').modal();

    // CHANGE THEME
    var svgWaveUp = document.getElementsByClassName('wave_up');
    var svgWaveDown = document.getElementsByClassName('wave_down');

    const toggleSwitch = document.getElementById("togButton");
    const toggleMobileSwitch = document.getElementById("togMobileButton");
    const currentTheme = localStorage.getItem("theme");
    const waveUp = localStorage.getItem("wave_up");
    const waveDown = localStorage.getItem("wave_down");
    
    if (currentTheme) {
        document.body.setAttribute("theme", currentTheme);
        if (currentTheme === "dark") {
            toggleSwitch.checked = true;
            toggleMobileSwitch.checked = true;
        }
        svgWaveUp.forEach(e => {
            e.setAttribute("src", waveUp);
        });
        svgWaveDown.forEach(e => {
            e.setAttribute("src", waveDown);
        });
    }
    
    function switchTheme(event) {
        if (event.target.checked) {
            document.body.setAttribute("theme", "dark");
            localStorage.setItem("theme", "dark");
            localStorage.setItem("wave_up", "/images/teal-theme/wave_up.svg");
            localStorage.setItem("wave_down", "/images/teal-theme/wave_down.svg");
            svgWaveUp.forEach(e => {
                e.setAttribute("src", "/images/teal-theme/wave_up.svg");
            });
            svgWaveDown.forEach(e => {
                e.setAttribute("src", "/images/teal-theme/wave_down.svg");
            });
        } else {
            document.body.setAttribute("theme", "light");
            localStorage.setItem("theme", "light");
            localStorage.setItem("wave_up", "/images/wave_up.svg");
            localStorage.setItem("wave_down", "/images/wave_down.svg");
            svgWaveUp.forEach(e => {
                e.setAttribute("src", "/images/wave_up.svg");
            });
            svgWaveDown.forEach(e => {
                e.setAttribute("src", "/images/wave_down.svg");
            });
        }
    }

    toggleSwitch.addEventListener("change", switchTheme, false);
    toggleMobileSwitch.addEventListener("change", switchTheme, false);

    // PORTFOLIO APPEARING BLOCKS
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

    // SCROLL SMOOTH
    $('.head-link').click(function(e) {
        e.preventDefault();
        var goto = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(goto).offset().top
        }, 800);
    });

    // ACTIVE CLASS FOR ANCHOR LINKS
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
    $(function () {
        $(window).on('scroll', function () {
            addClassOnScroll();
        });
    });

    // CHANGE NAV STYLE ON SCROLL
    var marker = $('#caption-border').offset().top;
    var nav = $('nav');

    $(window).on('scroll', function() {
        var currentScroll = $(window).scrollTop();
        if (currentScroll > marker) {
            nav.addClass('blur').removeClass('transparent');
        } else {
            nav.addClass('transparent').removeClass('blur');
        }
    });

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

    // TIMELINE ANIMATION
    (function() {
        'use strict';
        var timelines= document.querySelectorAll('.timeline2');

        function debounce(func, wait, immediate) {
            var timeout;
            return function() {
                var context = this, args = arguments;
                var later = function() {
                    timeout = null;
                    if (!immediate) func.apply(context, args);
                };
                var callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                if (callNow) func.apply(context, args);
            };
        }
        function callbackFunc() {
            var h,timeline, li,rect,parent_rect,i,items;
            for(h=0;h<timelines.length;h++){
                timeline=timelines[h];
                    parent_rect=timeline.getBoundingClientRect();
                    items = timeline.querySelectorAll(".timeline2 li");
                for (  i = 0; i < items.length; i++) {
                    li=items[i];
                    rect = li.getBoundingClientRect();  
                    if( (rect.bottom<=(parent_rect.top+(rect.height/2) ) ) || (rect.top >=(parent_rect.bottom-(rect.height/2)) ) ){
                        li.classList.remove("in-view");
                    }else{
                        li.classList.add("in-view");
                    }
                }
            }
        }
        var updateLayout =debounce(function(e) {
            // Does all the layout updating here
            callbackFunc();
        }, 500); // Maximum run of once per 500 milliseconds

        // listen for events
        window.addEventListener("load", callbackFunc);
        window.addEventListener("resize", updateLayout);
        window.addEventListener("scroll", callbackFunc);
        for(var h=0;h<timelines.length;h++) {
            var  timeline=timelines[h];
            timeline.addEventListener("scroll",callbackFunc );
        }
    })();

    // Allow submit message if agree to rgpd
    $('#agree').on('click', function(){
        $('#submitted').toggleClass('disabled')
    }) 
    
    $(window).resize(function() {
        if($(window).width() <= 320) {
            $('i').removeClass('prefix');
        } else {
            $('i').addClass('prefix');
        }
    });

    // Success flash message
    $('#close_flash_message').on('click', function() {
        $('#flash_messages').addClass('hidden');
    });
});
// end window.load