/* sidehead is full screen so appears and take whole window's width / "open" button then disapears*/
function openNav() {
  document.getElementById("sidehead").style.width = "100%";
  document.getElementById("open").style.display = "none";
}
/* sidehead got no width so hiding / "open" button then comes back */
function closeNav() {
  document.getElementById("sidehead").style.width = "0";
  document.getElementById("open").style.display = "block";
}

// change the language of the page, dropdown btn active when clicking on it
$('#lang_btn').on('click', function() {
  var blocLang = $('#lang');
  if (blocLang.hasClass('show')) {
    blocLang.removeClass('show');
  } else {
    blocLang.addClass('show');
  }
})

$('.dropdown').find(':first').on('mouseenter', function() {
  $(this).css({'borderTop': 'solid', 'borderColor': '#811453 ', 'borderTopWidth': '2px', 'color': '#811453'}, 500)
}).on('mouseleave', function() {
  $(this).css({'border': 'none', 'color': '#3d3d3d'})
})

//flexslider
$(window).on('load', function() {
  $('.flexslider_1').flexslider({
    controlNav: false,
  });
})
new ScrollReveal();
ScrollReveal().reveal('.reveal', {
  delay: 0,
  easing: 'ease-in-out',
  cleanup: true,
  origin: 'left',
  distance: '500px',
  interval: 0,
  duration: 1000,
})
