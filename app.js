form = document.querySelector("form");
email = document.querySelector("#email");

button = document.querySelector("#btn");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkEmail();
});

email.addEventListener("input", function () {
  removeError();
});

function removeError() {
  const emailValue = email.value;
  if (emailValue !== "") {
    setSuccessFor(button);
  }
}

function checkEmail() {
  const emailValue = email.value;

  if (emailValue === "") {
    setErrorFor(button);
  } else if (emailValue !== "") {
    setSuccessFor(button);
  }
}

function setErrorFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  let formRemove = input.parentElement;
  formRemove.className = "form-control";
}
