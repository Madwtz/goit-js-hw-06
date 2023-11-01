const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); 
  const emailValue = loginForm.elements.email.value;
  const passwordValue = loginForm.elements.password.value;

  if (emailValue.trim() === '' || passwordValue.trim() === '') {
    alert('Toate câmpurile trebuie completate!');
  } else {
    const formData = {
      email: emailValue,
      password: passwordValue
    };

console.log(formData);
loginForm.reset();
  }
});