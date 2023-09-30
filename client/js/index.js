const btn = document.getElementById("register-btn");
const email = document.getElementById("email");
const user_name = document.getElementById("name");
const password = document.getElementById("password");
const password_confirmation = document.getElementById("password-check");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  if (password.value === password_confirmation.value) {
    const data = {
      email: email.value,
      user_name: user_name.value,
      password: password.value,
      password_confirmation: password_confirmation.value,
    };
    console.log(data);
  } else {
    console.error("As senhas são diferentes");
  }
});

fetch(){
  
}