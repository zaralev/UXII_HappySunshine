$(document).ready(function() {
  // this doesn't work and I don't know whyg
    var count;
    $("#confirm-button").click(function() {
        count++;
        var rewardNum = parseInt(localStorage.getItem("clicks"));
        var newCount = rewardNum + count;
        localStorage.setItem("clicks", newCount);
        console.log(localStorage.getItem("clicks"));
    });


});
