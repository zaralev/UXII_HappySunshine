$(".cards").hide();
$(".save-card-details").click(function(event) {
  var cardName = $("#card-names option:selected").val();
  console.log(cardName);

  var cardNumber = $(".card-number").val();
  console.log(cardNumber);

  var cardMonthExp = $(".card-expiration-month").val();
  console.log(cardMonthExp);

  var cardYearExp = $(".card-expiration-year").val();
  console.log(cardYearExp);

  var cardSecurityCode = $(".card-security-number").val();
  console.log(cardSecurityCode);

  var cardDetailsArray = [];
  cardDetailsArray.push(cardName + " " + cardNumber + " " + cardMonthExp + " " + cardYearExp + " " + cardSecurityCode);
  console.log(cardDetailsArray);

  $(".cards").show();
  $(".card-name-detail").html(cardName);
  $(".card-number-detail").html(cardNumber);
  $(".add menu-reset").html("Add Another Card");

  localStorage.setItem("cardDetails", JSON.stringify(cardDetailsArray));
  cardDetailsArray = JSON.parse(localStorage.getItem("cardDetails"));
});
