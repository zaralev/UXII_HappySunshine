// $(document).ready(function(){
//     var cart = [];
//     localStorage.setItem("cart", JSON.stringify(cart));
//
//   $('.add-to').click(function(){
//
//     var li = $(this).parent();
//     var food = {};
//     food.name = $(li).attr('data-menu-item');
//     food.price = $(li).attr('data-item-price');
//
//     cart.push(food);
//
//     localStorage.setItem("cart", JSON.stringify(cart));
//     console.log(localStorage.getItem("cart"));
//
//     displayCart();
//
//     function displayCart(){
//       console.log("** Display Cart **");
//       var cartArray = localStorage.getItem("cart");
//       console.log(cartArray.length);
//       var output = "";
//       for (var i in cartArray){
//         output += "<li>" + cartArray[i].name+ " " + cartArray[i].price + "</li>"
//       }
//       $('.show-cart').html(output);
//     }
//
//   });
// });
