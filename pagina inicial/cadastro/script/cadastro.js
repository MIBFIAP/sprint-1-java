const form = document.querySelector('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const confirmEmail = document.getElementById('confirm-email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

form.addEventListener('submit', function(event) {
  if (email.value !== confirmEmail.value) {
    alert('Os e-mails não correspondem!');
    event.preventDefault();
  }
  
  if (password.value !== confirmPassword.value) {
    alert('As senhas não correspondem!');
    event.preventDefault();
  }
  if (name.value.trim() === '') {
    alert('Por favor, insira seu nome!');
    event.preventDefault();
  }
});
