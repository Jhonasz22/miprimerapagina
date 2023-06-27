function ShowAlert() {
  alert("Hola, esta es una alerta de JavaScripts");
}

const form = document.getElementById("myForm");

form.addEventListener("submit", function (dxdx) {
  dxdx.preventDefault();
  validateForm();
});

function validateForm() {
  const input = document.getElementById("email");
  const inputValue = input.value;

  if (!validateEmail(inputValue)) {
    alert("Por favor ingrese un correo electronico valido :)");
  } else {
    alert("Correo electronico enviado de manera correcta");
  }
}

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/;
  return regex.test(email);
}

function validateForm() {
  const emailInput = document.getElementById("email");
  const email = emailInput.value;
  if (!validateEmail(email)) {
    alert("Por favor ingrese un correo electrónico válido.");
  } else {
    alert("Correo electrónico enviado correctamente.");
  }
}

document
  .querySelector("button.button-menu-toggle")
  .addEventListener("click", function () {
    document
      .querySelector(".nav-links")
      .classList.toggle("nav-links-responsive");
  });
