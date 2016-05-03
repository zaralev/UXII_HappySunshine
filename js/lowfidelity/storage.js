// Create Accout Local Storage

// STILL NEEDS TO BE WORKED ON!

// this function sets variables and local storage
function accountDetails() {
 // create variables to hold inputed values
 var email = document.getElementById("create-email");
 var pw = document.getElementById("create-password");
 // sets local storage to the variables that were set earlier
 localStorage.setItem("create-email", email.value);
 localStorage.setItem("create-password", pw.value);
}
console.log(localStorage.getItem("create-email"));
console.log(localStorage.getItem("create-password"));

// this function
function loginValidation() {
 // getting the values entered in the login screen
 var enteredEmail = document.getElementById("email");
 var enteredPw = document.getElementById("password");

 var userEmail = enteredEmail.value;
 var userPw = enteredPw.value;
// if/else to determine if email and pw are equal and proceed to menu page
 if(userEmail == localStorage.getItem("create-email") && userPw == localStorage.getItem("create-password")){
  window.location.href="menu.html";
 }else{
  alert("Email or password not recognized. Please re-enter valid email or password or create an account");
 }
}
