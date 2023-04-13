const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const userData = Object.fromEntries(formData.entries());

  console.log(userData);

  alert('Cadastro realizado com sucesso!');
});