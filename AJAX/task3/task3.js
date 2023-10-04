//3.
//  Використати сервіс: https://randomuser.me/
// Та при кожному завантаженні сторінки робити запит до API та рендерити базову інформацію про користувача
// (аватар, ім`я, вік, стать, країна, логін, пароль, пошта).

const app = document.getElementById('app');
const userApiRandom = 'https://randomuser.me/api';
const renderUserData = (user) => `
<picture>
    <source srcset="${user.picture.large}" media="(min-width: 1024px)">
    <source srcset="${user.picture.medium}" media="(min-width: 768px)">
    <img src="${user.picture.thumbnail}" alt="User Picture" width="auto" height="auto" loading="lazy">
  </picture>
  <p>Name: ${user.name.first} ${user.name.last}</p>
  <p>Age: ${user.dob.age}</p>
  <p>Gender: ${user.gender}</p>
  <p>country: ${user.location.country}</p>
  <p>login: ${user.login.username}</p>
  <p>Password: ${user.login.password}</p>
  <p>Email: ${user.email}</p>
  

`

fetch(userApiRandom)
  .then(res => res.json())
  .then(data => {
    const user = data.results[0];
    app.innerHTML = renderUserData(user);
  });

