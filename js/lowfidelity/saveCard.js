//------------------------- SAVING CREDIT CARD DETAILS -----------------------
$(".cards").hide();
$(".save-card-details").click(function(event) {
  // SAVING CARD DETAILS ON MODAL CLICK
  // CREATING VARS TO SAVE VALUES TO
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

// PUSHING VARS TO ARRAYS
  var cardDetailsArray = [];
  cardDetailsArray.push(cardName + " " + cardNumber + " " + cardMonthExp + " " + cardYearExp + " " + cardSecurityCode);
  console.log(cardDetailsArray);

  $(".cards").show();
  $(".card-name-detail").html(cardName);
  $(".card-number-detail").html(cardNumber);

  localStorage.setItem("cardDetails", JSON.stringify(cardDetailsArray));
  cardDetailsArray = JSON.parse(localStorage.getItem("cardDetails"));
});
