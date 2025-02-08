const form = document.forms.signin__form;
const seeForm = document.getElementById('signin');
const welcome = document.getElementById('welcome');
const idUser = document.getElementById('user_id');
const inputLogin = [... document.getElementsByName('login')][0];
const inputPassword = [... document.getElementsByName('password')][0];
const buttonOut = document.getElementById('signout__btn');
window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.user) {
        seeForm.classList.toggle('signin_active');
        welcome.classList.add('welcome_active'); 
        idUser.textContent = localStorage.user; 
    }
})
form.addEventListener('submit', (e) => {
  e.preventDefault();
  let formData = new FormData(form);
  let xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
  xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE && xhr.status === 201) {
        if (idUser.textContent = JSON.parse(xhr.responseText).user_id) {
            seeForm.classList.toggle('signin_active');
            welcome.classList.add('welcome_active');
            localStorage.user = idUser.textContent;
        } else {
          alert('Неверный логин/пароль');
          inputLogin.value = '';
          inputPassword.value = '';
        }
    } 
  })  
  xhr.send(formData); 
})

buttonOut.addEventListener('click', () => {
    localStorage.clear();
    seeForm.classList.toggle('signin_active');
    welcome.classList.toggle('welcome_active'); 
    inputLogin.value = '';
    inputPassword.value = '';
})
