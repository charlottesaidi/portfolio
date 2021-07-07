$(window).on('load', function() {
// flexslider plugins
    $('#header_flex').flexslider({
      animation: 'slider',
      controlNav: false,
      directionNav: false,
      slideshowSpeed: 15000,
    });
    $('.section_flex').flexslider({
      animation: 'slider',
      controlNav: false,
      slideshow: false,
      touch: true,
    });

// navigation
    $('#open').on('click', function() {
      $('#nav').fadeIn('slow');
      $(this).fadeOut('slow');
    })
    $('#close').on('click', function() {
      $('#nav').fadeOut('slow');
      $('#open').fadeIn('slow');
    })
  });

// section_2 appearing at scroll end
// articles appearing on end scroll
    $(window).scroll(function() {
      $('.section_flex').flexslider({
        animation: 'slider',
        controlNav: false,
        slideshow: false
      });
       if($(window).scrollTop() + $(window).height() == $(document).height()) {
         if(!$('#section_1').hasClass('onedo')) {
           $('#section_1').append('<section id="section_2" class="reveal"> <article class="product"><div class="flex_product"><div class="flexslider section_flex"><ul class="slides"><li><img src="asset/img/vehicule1.png"></li><li><img src="asset/img/vehicule2.png"></li></ul></div></div><div class="description"><h2 class="desc_title">Peugeot 208</h2><p class="desc_text">Diesel, 5 portes, GPS, AutoRadio, Forfait 1000 km (0./km supplémentaire).</p><p class="desc_price">999€ - Agence de Paris</p><a class="desc_btn" href="#">Réserver et payer</a></div></article><article class="product"><div class="flex_product"><div class="flexslider section_flex"><ul class="slides"><li><img src="asset/img/vehicule2.png"></li><li><img src="asset/img/vehicule3.png"></li></ul></div></div><div class="description"><h2 class="desc_title">Ford Focus</h2><p class="desc_text">Diesel, 5 portes, GPS, AutoRadio, Forfait 1000 km (0./km supplémentaire).</p><p class="desc_price">999€ - Agence de Paris</p><a class="desc_btn" href="#">Réserver et payer</a></div></article><article class="product"><div class="flex_product"><div class="flexslider section_flex"><ul class="slides"><li><img src="asset/img/vehicule4.png"></li><li><img src="asset/img/vehicule1.png"></li></ul></div></div><div class="description"><h2 class="desc_title">Audi A1</h2><p class="desc_text">Diesel, 5 portes, GPS, AutoRadio, Forfait 1000 km (0./kmsupplémentaire).</p><p class="desc_price">999€ - Agence de Paris</p><a class="desc_btn" href="#">Réserver et payer</a></div></article><article class="product"><div class="flex_product"><div class="flexslider section_flex"><ul class="slides"><li><img src="asset/img/vehicule1.png"></li><li><img src="asset/img/vehicule3.png"></li></ul></div></div><div class="description"><h2 class="desc_title">Opel Mokka</h2><p class="desc_text">Diesel, 5 portes, GPS, AutoRadio, Forfait 1000 km (0./kmsupplémentaire).</p><p class="desc_price">999€ - Agence de Paris</p><a class="desc_btn" href="#">Réserver et payer</a></div></article></section>');
         }
        $('#section_1').addClass('onedo')
       }
  });
