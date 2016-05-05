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

 if (email || pw == ""){
   alert("Please Enter an email or password");
 }
}
console.log(localStorage.getItem("account-email"));
console.log(localStorage.getItem("account-password"));

// this function
function loginValidation() {
 // getting the values entered in the login screen
 var enteredEmail = document.getElementById("email");
 var enteredPw = document.getElementById("password");

 var userEmail = enteredEmail.value;
 var userPw = enteredPw.value;

// if/else to determine if email and pw are equal and proceed to menu page
 if(userEmail == localStorage.getItem("account-email") && userPw == localStorage.getItem("account-password")){
  window.location.href="menu.html";
 }else{
  alert("Email or password not recognized. Please re-enter valid email or password or create an account");
 }
}
