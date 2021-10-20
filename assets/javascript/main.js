import '../javaScript/materialize/bin/materialize.min.js';

$(document).ready(function(){
    // PLUGINS INIT
    $('.sidenav').sidenav();
    $('.modal').modal();

    // CHANGE THEME

    $('#logo').on('click', function() {
        $('#body').toggleClass('teal-theme')
        $('.purple').toggleClass('teal')
        $('.purple-text').toggleClass('teal-text')
        $('.logo-img').attr('src', (_, attr) => attr == '/images/logo_purple.webp' ? '/images/teal-theme/logo.webp' : '/images/logo_purple.webp')
        $('.wave_up').attr('src', (_, attr) => attr == '/images/wave_up.svg' ? '/images/teal-theme/wave_up.svg' : '/images/wave_up.svg')
        $('.wave_down').attr('src', (_, attr) => attr == '/images/wave_down.svg' ? '/images/teal-theme/wave_down.svg' : '/images/wave_down.svg')
    })

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
            nav.addClass('white').removeClass('transparent');
        } else {
            nav.addClass('transparent').removeClass('white');
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

    // ajax form submit
    $('#contact_form').on('submit', function(e) {
        e.preventDefault();
        $('#preloader').removeClass('hidden');
        $('#contact_form_section').addClass('hidden');
        var formData = new FormData(document.getElementById('contact_form'));
        $.ajax({
            type: "POST",
            url: "/",
            cache: false,
            contentType: false,
            processData: false,
            data: formData,
            success: function() {
                $('#preloader').addClass('hidden');
                $('#modal_content').html('<p class="align-center grey-text text-darken-2">Merci, votre message m\'est bien parvenu. Je vous répondrai très bientôt !</p>')
            }
        })
    })
});
// end window.load