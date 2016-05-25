var currentDate = new Date();
var month = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

var CurrentMonth = month[currentDate.getMonth()];
var CurrentDay = currentDate.getDate();
// console.log(CurrentDay);

$(".order-date").html(CurrentMonth + " " + CurrentDay);
