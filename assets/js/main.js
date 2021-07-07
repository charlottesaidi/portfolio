$(document).ready(function(){

    // PLUGINS INIT
    $('.sidenav').sidenav();
    $('.modal').modal();
    (function() {
        emailjs.init("user_FIAzf2KTrflk0vpVglMAg");
    })();
    
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
        // var windowTop = $(window).scrollTop();
        $('.scrollspy').each(function (index, elem) {
            var offsetTop = $(elem).offset().top;
            var outerHeight = $(this).outerHeight(true);

            if( windowBottom > (offsetTop) && windowBottom < ( offsetTop + outerHeight)) {
                var elemId = $(elem).attr('id');
                $("nav ul a.active").removeClass('active');
                $("nav ul a[href='#" + elemId + "']").addClass('active');
            }
        });
    };
    $(function () {
        $(window).on('scroll', function () {
            addClassOnScroll();
        });
    });

    // CHANGE NAV STYLE ON SCROLL
    var marker = $('#caption-border-top').offset().top;
    var nav = $('nav');
    var borderTop = $('#header-border');
    var mobileBtn = $('nav .sidenav-trigger');
    var navLinks = $('.head-link:not(footer .head-link)');
    var underlineHover = $('nav ul a');
    $(window).scroll(function() {
        var currentScroll = $(window).scrollTop();
        if (currentScroll >= marker) {
            nav.addClass('white').removeClass('transparent');
            navLinks.addClass('grey-text')
            mobileBtn.addClass('grey-text')
            underlineHover.addClass('tealVersion');
            borderTop.removeClass('hide');
        } else {
            nav.addClass('transparent').removeClass('white');
            navLinks.removeClass('grey-text');
            mobileBtn.removeClass('grey-text');
            underlineHover.removeClass('tealVersion');
            borderTop.addClass('hide');
        }
    });

    // COMPETENCES BARS PROGRESS ON SCROLL
    var marker1 = $('#block1').offset().top;
    var marker2 = $('#block2').offset().top;
    var mob_html = $('#mobile_html');
    var mob_css = $('#mobile_css');
    var mob_js = $('#mobile_js');
    var mob_jquery = $('#mobile_jquery');
    var mob_php = $('#mobile_php');
    var mob_sql = $('#mobile_sql');
    var mob_laravel = $('#mobile_laravel');
    var mob_symfony = $('#mobile_symfony');
    var mob_vue = $('#mobile_vue');
    var mob_bootstrap = $('#mobile_bootstrap');

    var html = $('#html');
    var css = $('#css');
    var js = $('#js');
    var jquery = $('#jquery');
    var php = $('#php');
    var sql = $('#sql');
    var laravel = $('#laravel');
    var symfony = $('#symfony');
    var vue = $('#vue');
    var bootstrap = $('#bootstrap');
    var vs_code = $('#vs_code');
    var github = $('#github');
    var anglais = $('#anglais');
    $(window).scroll(function() {
        var currentScroll = $(window).scrollTop() + $(window).height() - 100;
        if (currentScroll >= marker1) {
            html.addClass('html');
            css.addClass('css');
            js.addClass('js');
            jquery.addClass('jquery');
            php.addClass('php');
            sql.addClass('sql');
            laravel.addClass('laravel');
            symfony.addClass('symfony');
            vue.addClass('vue');
            bootstrap.addClass('bootstrap');
            
            mob_html.addClass('html');
            mob_css.addClass('css');
            mob_js.addClass('js');
            mob_jquery.addClass('jquery');
            mob_php.addClass('php');
            mob_sql.addClass('sql');
            mob_laravel.addClass('laravel');
            mob_symfony.addClass('symfony');
            mob_vue.addClass('vue');
            mob_bootstrap.addClass('bootstrap');
        } 
        if (currentScroll >= marker2) {
            vs_code.addClass('vs_code');
            github.addClass('github');
            anglais.addClass('anglais');
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

    // EMAIL JS + VALIDATION
        // prep variables
    var success = '<p>Votre message a bien été envoyé. Je vous répondrai au plus vite.</p>';
    var successMessage = document.getElementById('success');

    function printError(elemId, hintMsg) {
        document.getElementById(elemId).innerHTML = hintMsg;
    }

    function stripTagInput(inputValue) {
        const originalString = inputValue;
        const strippedString = originalString.replace(/(<([^>]+)>)/gi, "");
        return strippedString
    }

    function validateForm() {
        var name = stripTagInput(document.forms["contact_form"]["user_name"].value);
        var email = stripTagInput(document.forms["contact_form"]["user_email"].value);
        var object = stripTagInput(document.forms["contact_form"]["object"].value);
        var message = stripTagInput(document.forms["contact_form"]["message"].value);

        var nameErr = emailErr = objectErr = messErr = true;

        if(name == "") {
            printError("nameErr", "<p>Veuillez renseigner au moins un nom</p>");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
        if(email == "") {
            printError("emailErr", "<p>Veuillez renseigner votre adresse e-mail</p>");
        } else {
            // Regular expression for basic email validation
            var regex = /^\S+@\S+\.\S+$/;
            if(regex.test(email) === false) {
                printError("emailErr", "<p>Entrez une adresse email valide</p>");
            } else{
                printError("emailErr", "");
                emailErr = false;
            }
        }
        if (object == "") {
            printError("objectErr", "<p>L'objet est obligatoire</p>");
        } else {
            if(object.length < 5) {
                printError("objectErr", "<p>L'objet doit contenir au moins 5 caractères</p>");
            } else{
                printError("objectErr", "");
                objectErr = false;
            }
        }
        if (message == "")  {
            printError("messErr", "<p>Le message est obligatoire</p>");
        } else {
            if(message.length < 10) {
                printError("messErr", "<p>Le message doit contenir au moins 10 caractères</p>");
            } else{
                printError("messErr", "");
                messErr = false;
            }
        }
        if((nameErr || emailErr || objectErr || messErr) == true) {
            return false;
        } else {
            return true;
        }
    }
    
    $('#agree').on('click', function(){
        $('#submitted').toggleClass('disabled')
    }) 

        // Validate and Send Email
    document.getElementById('contact_form').addEventListener('submit', function(event) {
        event.preventDefault();
        if(validateForm()) {
            $('#submitted').addClass('disabled');
            $('.waiting').fadeIn('slow');
            emailjs.sendForm('contact_service', 'contact_form', this)
            .then(function() {
                $('.waiting').fadeOut("slow");
                successMessage.innerHTML = success;
                $('#submitted').removeClass('disabled');
            }, function() {
                printError("errors", "<p>Une erreur est survenue... Réessayez ultérieurement</p>");
            })
        } 
    });
});

$(window).resize(function() {
    if($(window).width() <= 320) {
        $('i').removeClass('prefix');
    } else {
        $('i').addClass('prefix');
    }
});
// OR
if($(window).width() <= 320) {
    $('i').removeClass('prefix');
} else {
    $('i').addClass('prefix');
}
