const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const form = document.querySelector("form");
const errMsg = document.querySelectorAll("#err-message");
const errIcon = document.querySelectorAll("#err-icon");

const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email-address");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let passwordValid = validatePassword();
  let emailValid = validateEmail();
  let lastNameValid = validateLastName();
  let firstNameValid = validateFirstName();

  if (firstNameValid && lastNameValid && emailValid && passwordValid) {
    alert("for demo purposes only");
    //form.submit();
    form.reset();
  }
});

validateFirstName = () => {
  if (firstName.value === "") {
    errMsg[0].innerHTML = "First Name cannot be empty";
    errIcon[0].classList.remove("hidden");
    firstName.style.border = "2px solid #FF7979";
    firstName.focus();
  }
  else {
    errMsg[0].innerHTML = "";
    errIcon[0].classList.add("hidden");
    firstName.style.border = "1px solid #DEDEDE";
    return true;
  }
}

validateLastName = () => {
  if (lastName.value === "") {
    errMsg[1].innerHTML = "Last Name cannot be empty";
    errIcon[1].classList.remove("hidden");
    lastName.style.border = "2px solid #FF7979";
    lastName.focus();
  }
  else {
    errMsg[1].innerHTML = "";
    errIcon[1].classList.add("hidden");
    lastName.style.border = "1px solid #DEDEDE";
    return true;
  } 
}

validateEmail = () => {
  if (email.value === "" || !email.value.match(emailFormat)) {
    errMsg[2].innerHTML = "Looks like this is not an email";
    errIcon[2].classList.remove("hidden");
    email.style.border = "2px solid #FF7979";
    email.focus();
  }
  else {
    errMsg[2].innerHTML = "";
    errIcon[2].classList.add("hidden");
    email.style.border = "1px solid #DEDEDE";
    return true;
  }
}

validatePassword = () => {
  if (password.value === "") {
    errMsg[3].innerHTML = "Password cannot be empty";
    errIcon[3].classList.remove("hidden");
    password.style.border = "2px solid #FF7979";
    password.focus();
  }
  else {
    errMsg[3].innerHTML = "";
    errIcon[3].classList.add("hidden");
    password.style.border = "1px solid #DEDEDE";
    return true;
  }
}

// hasValue function instead of repeating myself with firstname, lastname and password