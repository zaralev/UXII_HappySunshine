// localStorage.setItem("username", "John");
// console.log(localStorage.getItem("username"));

// Create Accout Local Storage

// STILL NEEDS TO BE WORKED ON!

var email = document.getElementsByClassName('.account-email');
var pw = document.getElementsByClassName('.account-password');

// Store email and pw
function saveAccount(){
 localStorage.setItem('email', email.value);
 localStorage.setItem('pw', pw.value);
}

// Checks stored email/pw against entered email/pw
function loginValidation(){
 // email and pw that were stored
 var storedEmail = localStorage.getItem('email');
 var storedPw = localStorage.getItem('pw');


 // what user enters at home screen
 var enteredEmail = document.getElementById('email');
 var enteredPw = document.getElementById('password');

 // if/else to check stored against entered vars
 if(enteredEmail != storedEmail || enteredPw != storedPw){
  alert("Email or Password Do Not Match. Please make sure you have the correct email and password or create an account")
 }else{
  alert("Hello!")
 }
}
