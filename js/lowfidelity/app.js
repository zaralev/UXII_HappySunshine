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

// Midnight.JS for sticky "Create Your Own Sandwich" options
// $(document).ready(function(){
//   $('.create-your-own').midnight();
// })
