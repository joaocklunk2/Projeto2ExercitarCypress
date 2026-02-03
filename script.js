const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginBtn = document.getElementById('loginBtn');
const successMsg = document.getElementById('successMsg');
const errorMsg = document.getElementById('errorMsg');

loginBtn.addEventListener('click', () => {
  successMsg.style.display = 'none';
  errorMsg.style.display = 'none';

  const email = emailInput.value;
  const password = passwordInput.value;

  if (email === 'teste@teste.com' && password === '123456') {
    successMsg.style.display = 'block';
  } else {
    errorMsg.style.display = 'block';
  }
});