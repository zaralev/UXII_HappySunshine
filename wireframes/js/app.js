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

    $(".close-button").click(function(){
        $("form")[0].reset();
    });


});
