// Create Accout Local Storage
// NOT FINISHED NEEDS MORE WORK

// this function sets variables and local storage
function accountDetails() {
 // create variables to hold inputed values
 var email = document.getElementById("account-email");
 var pw = document.getElementById("account-password");
 // sets local storage to the variables that were set earlier
 localStorage.setItem("account-email", email.value);
 localStorage.setItem("account-password", pw.value);

 // console.log(localStorage.getItem("account-email").length);
 // console.log(localStorage.getItem("account-password").length);
 //
 // console.log(localStorage.getItem("account-email"));
 // console.log(localStorage.getItem("account-password"));

// If user does not enter anything, wont be allowed to go to home page
 if (localStorage.getItem("account-email").length <= 0 || localStorage.getItem("account-password").length <= 0) {
   alert("Please enter an Email or Password");
 }else {
   window.location.href="index.html";
 }

 }

// this function runs on the clicking login on index.html page
function loginValidation() {
 // getting the values entered in the login screen
 var enteredEmail = document.getElementById("email");
 var enteredPw = document.getElementById("password");

 var userEmail = enteredEmail.value;
 var userPw = enteredPw.value;

// if user does not enter anything on home page they will not be able to login in
if (userEmail.length <=0 || userPw.length <= 0) {
  alert("Please enter your email or password");
  // password and email need to be the same length in order to proceed to menu page/rest of app
}else if (userEmail.length == localStorage.getItem("account-email").length && userPw.length == localStorage.getItem("account-password").length) {
  window.location.href="menu.html";
}else{
  console.log(userEmail);
}

}
// localStorage.clear();
