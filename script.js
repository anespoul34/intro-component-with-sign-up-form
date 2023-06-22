let firstname = document.getElementById("firstname");
let firstnameContainer = document.getElementById("firstname-container");
let lastname = document.getElementById("lastname");
let lastnameContainer = document.getElementById("lastname-container");
let email = document.getElementById("email");
let emailContainer = document.getElementById("email-container");
let password = document.getElementById("password");
let passwordContainer = document.getElementById("password-container");


function validateEmail(email) {
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function handleFirstname() {
  console.log(firstname.value);
  if (firstname.value === null || firstname.value === "") {
    firstnameContainer.classList.add("error");
    return;
  }
  if (firstnameContainer.classList.contains("error")) {
    firstnameContainer.classList.remove("error");
  }
}
function handleLastname() {
  if (!lastname.value) {
    lastnameContainer.classList.add("error");
    return;
  }
  if (lastnameContainer.classList.contains("error")) {
    lastnameContainer.classList.remove("error");
  }
}
function handleEmail() {
  if (!validateEmail(email.value)) {
    emailContainer.classList.add("error");
    return;
  }
  if (emailContainer.classList.contains("error")) {
    emailContainer.classList.remove("error");
  }
}
function handlePassword() {
  if (!password.value) {
    passwordContainer.classList.add("error");
    return;
  }
  if (passwordContainer.classList.contains("error")) {
    passwordContainer.classList.remove("error");
  }
}

firstname.onchange = handleFirstname;
lastname.onchange = handleLastname;
email.onchange = handleEmail;
password.onchange = handlePassword;
