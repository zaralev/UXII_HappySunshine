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

    $(".close-button").click(function() {
        var form = jQuery('form');
        for (var i = 0; i < form.length; i++) {
            $("form")[length - 1].reset();
        };
    });


});
