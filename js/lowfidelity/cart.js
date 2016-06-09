$(document).ready(function() {
    //--------------- Create Your Own Sandwich ---------------
    $("input").one("click", function(event) {
        var name = $(this).attr("data-menu-item");
        var price = Number($(this).attr("data-item-price")).toFixed(2);
        shoppingCart.addItemToCart(name, price, 1);
    });
    //Prevents User From adding more items when clicked multiple times
    $("input").dblclick(function(event) {
        event.preventDefault();
    });
    // --------------- Hide Counter-icon---------------------
    $(".counter-icon").hide();
    // --------------- Add to Cart Animation -------------------
    var counter = 0;
    $(".add-to").click(function(event) {
        $(".counter-icon").show();
        $(".counter-icon").addClass('pulse');
        counter++;
        $(".counter").text(counter);
        setTimeout(function() {
            $(".counter-icon").removeClass('pulse')
        }, 500);
        console.log("count count");
    });
    // ---------------- Clear Cart on Confirm Order --------------
    // $("#modal1Desc").on("click", ".not-today", function(event) {
    //   shoppingCart.clearCart();
    //   displayCart();
    // });
    //
    $("#modal1Desc").on("click", ".yes", function(event) {
      displayCart();
    });
    // ------------- Adding items to array on click ------------------
    $(".add-to").click(function(event) {
        event.preventDefault();
        var name = $(this).attr("data-menu-item");
        var price = Number($(this).attr("data-item-price")).toFixed(2);
        shoppingCart.addItemToCart(name, price, 1);
        displayCart();
    });
    // ---------------- Clear Entire Cart -------------------
    $("#clear-cart").click(function() {
        shoppingCart.clearCart();
        displayCart();
    });
    // ----------------- Function to Print out Cart Items to Cart.html ----------------
    function displayCart() {
        var cartArray = shoppingCart.listCart();
        var output = "";
        var orderOutput = "";
        var favoriteOutput = "";

        for (var i in cartArray) {
            output += "<tr>" + "<td>" + " <b>" + cartArray[i].name + "</b>" + " <button class ='delete-item' data-menu-item='" + cartArray[i].name + "'> <i class='fa fa-times fa-lg' style='color:#f00; position:absolute; left: 0.7em; margin-top:-0.6em;'></i></button> "

            + "<div style='padding: 0.2em;position:absolute; margin-top: -1.8em; right: 1em;'> <button class ='sub-item' data-menu-item='" + cartArray[i].name + "'> <i class='fa fa-minus' style='color:#2c688b;'></i> </button> <b style='padding-right: 0.3em; padding-left:0.3em;'>" + cartArray[i].count + "</b> <button class ='plus-item' data-menu-item='" + cartArray[i].name + "'> <i class='fa fa-plus' style='color:#2c688b;'></i> </button> </div>" + "<br>"
                // + " x "
                // + "$"
                // + cartArray[i].price
                + " <div style='position:relative; left: 16.8em;'>" + "<b>$" + cartArray[i].total + "</b></div></td>" + "</tr>"
        }

        for (var i in cartArray) {
            orderOutput += "<tr>" + "<td>" + "<b>" + cartArray[i].name + "</b>" + "</td>" + "</tr>"
        }


        for (var i in cartArray) {
            favoriteOutput += "<li>" + "<b>" + cartArray[i].name + "</b>" + "</li>"
        }

        $("#show-cart").html(output);
        $("#past-order").html(orderOutput);
        $("#favorite-food").html(favoriteOutput);
        $("#total-cart").html(shoppingCart.totalCart());
        $("#item-count").html(shoppingCart.countCart());
    }
    // -------------- Functions to add, delete, or remove item from cart directly form cart page -----------
    // when any button class named .delete-item is clicked remove item from cart
    $("#show-cart").on("click", ".delete-item", function(event) {
        var name = $(this).attr("data-menu-item");
        shoppingCart.removeItemFromCartAll(name);

        displayCart();
        console.log("item removed");
    });

    // when any button class named .sub-item is clicked remove a quantity of 1 from items total quantity
    $("#show-cart").on("click", ".sub-item", function(event) {
        var name = $(this).attr("data-menu-item");
        shoppingCart.removeItemFromCart(name);
        displayCart();
        console.log("quantity subtracted");
    });

    // when any button class named .plus-item is clicked add a quanity of 1 to items total quantity
    $("#show-cart").on("click", ".plus-item", function(event) {
        var name = $(this).attr("data-menu-item");
        shoppingCart.addItemToCart(name, 0, 1);
        displayCart();
        console.log("quantity added");
    });

    displayCart();
});

// ----------------- Building Shopping Cart + Setting/Getting Local Storage -----------------------

var shoppingCart = (function() {
    var cart = [];

    // ------------- Defining Properties of each menu item in cart -------------------------

    function Item(name, price, count) {
        this.name = name;
        this.price = price;
        this.count = count;
    }

    function saveCart() {
        localStorage.setItem("shoppingCart", JSON.stringify(cart));
    }

    function loadCart() {
        cart = JSON.parse(localStorage.getItem("shoppingCart"));
    }

    loadCart();

    var foodItem = {};
    // --------- Loops through array and will either add a new menu item or add to menu item count if item exists ----------------
    foodItem.addItemToCart = function(name, price, count) {
        // loops through every item
        for (var i in cart) {
            console.log(cart[i]);
            // if data-name matches then count will increase
            if (cart[i].name === name) {
                cart[i].count += count;
                saveCart();
                return;
            }
        }
        // if name does not match a new Item will be created
        var item = new Item(name, price, count);
        cart.push(item);
        saveCart();
    };
    // ------------ Remove a single count of a menu item from cart -------------------
    foodItem.removeItemFromCart = function(name) {
        // loop through array
        console.log(name);
        for (var i in cart) {
            console.log(cart[i]);
            // if name matches decrecment count
            if (cart[i].name === name) {
                console.log("Log");
                cart[i].count--;
                if (cart[i].count === 0) {
                    cart.splice(i, 1);
                }
                break;
            }
        }
        saveCart();
    };
    // ----------------- Remove an entire Menu Item -----------------------
    foodItem.removeItemFromCartAll = function(name) {
        // loops array
        for (var i in cart) {
            // matches name
            if (cart[i].name === name) {
                // removes item if names match
                cart.splice(i, 1);
                break;
            }
        }
        saveCart();
    };

    // ---------------- Deletes all menu items from cart --------------------
    foodItem.clearCart = function() {
        cart = [];
        saveCart();
    };
    // ----------------- Counts the number of items a menu option was selected ----------------
    foodItem.countCart = function() {
        // set count at 0
        var totalCount = 0;
        // loop through items in array
        for (var i in cart) {
            // adds quanitity to item count
            totalCount += cart[i].count;
        }
        return totalCount;
    };
    // ---------------- Calculates total price of menu items ----------------------------
    foodItem.totalCart = function() {
        var totalCost = 0;
        for (var i in cart) {
            // multiply price of item by quantity
            totalCost += cart[i].price * cart[i].count;
        }
        // return total cost of item with two decimal places.
        return totalCost.toFixed(2);
    };
    // -------------- Creates a copy of cart array to list --------------------------
    foodItem.listCart = function() {
        var cartCopy = [];
        for (var i in cart) {
            var item = cart[i];
            var itemCopy = {};
            for (var p in item) {
                itemCopy[p] = item[p];
            }
            itemCopy.total = (item.price * item.count).toFixed(2);
            cartCopy.push(itemCopy);
        }
        return cartCopy;
    };

    return foodItem;
})();
