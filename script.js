const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const form = document.querySelector("form");

const firstNameErrMsg = "First Name cannot be empty";
const lastNameErrMsg = "Last Name cannot be empty";
const passwordErrMsg = "Password cannot be empty";
const emailErrMsg = "Looks like this is not an email";

const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email-address");
const password = document.getElementById("password");

hasValue = (input, message) => {
  let errMsg = input.parentNode.querySelector("#err-message");
  let errIcon = input.parentNode.querySelector("#err-icon");

  if (input.value === "") {
    errMsg.innerHTML = message;
    errIcon.classList.remove("hidden");
    input.style.border = "2px solid #FF7979";
    input.focus();
  }
  else {
    errMsg.innerHTML = "";
    errIcon.classList.add("hidden");
    input.style.border = "1px solid #DEDEDE";
    return true;
  }
}

validateEmail = () => {
  if (hasValue(email, emailErrMsg) && email.value.match(emailFormat)) {
    return true;
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let passwordValid = hasValue(password, passwordErrMsg);
  let emailValid = validateEmail();
  let lastNameValid = hasValue(lastName, lastNameErrMsg);
  let firstNameValid = hasValue(firstName, firstNameErrMsg);

  if (firstNameValid && lastNameValid && emailValid && passwordValid) {
    form.reset();
    alert("Form valid. No data stored. (For demo purposes only)");
  }
});