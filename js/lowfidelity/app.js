$(document).foundation()

$(document).ready(function() {
    $(".next").hide();
    $("input:radio").change(function() {
        $(".next").show();
        $(".FORMPLZ").hide();


        $(".next").click(function() {
            $(".next").hide();
            $(".FORMPLZ").show();
        });

    });

    $(".menu-reset").click(function() {
        var form = jQuery('form');
        for (var i = 0; i < form.length; i++) {
            $("form")[i].reset();
        };
    });


});

// New Accordion Menu
$(document).ready(function(){
  $('#accordion').find('.accordion-toggle').click(function(){
    $(this).next().slideToggle('slow');
  });
});


// remove icon for hamburger
$(document).ready(function(){
  $('.title-bar-left .hamburger').click(function(){
    $(this).toggle();
    $('.title-bar-left .x').toggle();
  });
  $('.title-bar-left .x').click(function(){
    $(this).toggle();
    $('.title-bar-left .hamburger').toggle();
  });
});


// change plus to minus
$(document).ready(function(){
  $('.accordion-toggle').click(function(){
    $(this).children('span').toggleClass('fa-plus');
        $(this).children('span').toggleClass('fa-minus');
    // $(this).children('.fa-minus').removeClass('fa-plus');
    // $(this).children('.fa-plus').addClass('fa-minus');
    // $(this).children('.fa-minus').addClass('fa-plus');
  });
});

// Make title bar sticky on menu page
$(document).ready(function(){
 var stickyTitleBar = $('.title-bar').offset().top;

 var stickyBar = function(){
  var scrollTop = $(window).scrollTop();
  if (scrollTop > stickyTitleBar){
   $('.title-bar').addClass('title-bar-sticky');
  }else {
   $('.title-bar').removeClass('title-bar-sticky');
  }
 };

 stickyBar();

 $(window).scroll(function(){
  stickyBar();
 });
});
