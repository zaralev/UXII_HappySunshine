$(document).ready(function(){
  var cart = {};
  cart.foodForCart = [];

  localStorage.setItem('cart', JSON.stringify(cart));

  $('.add-to').click(function(){
    var li = $(this).parent();
    var span = $('.price');

    var foodItems = {};
    foodItems.name = $(li).attr("data-menu-item");
    foodItems.price = $(span).attr("data-item-price");

    console.log(foodItems);
    addToCart(foodItems);
  });
});

function addToCart(foodItems){
  if (localStorage && localStorage.getItem('cart')) {
    var cart = JSON.parse(localStorage.getItem('cart'));

    cart.foodForCart.push(foodItems);

    localStorage.setItem('cart', JSON.stringify(cart));
  }
}
