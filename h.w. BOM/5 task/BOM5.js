
// Реалізуйте програму, яка по натисканню на кнопку виводитиме повідомлення
// "I was pressed!", при наведенні на кнопку виводитиме повідомлення "Mouse on me!", а при 
//відведенні курсора миші виводитиме повідомлення "Mouse is not on me!".
// Приклад роботи:
// https://user-images.githubusercontent.com/9075641/228462490-a2ec423a-44e3-40f5-9c0a-7e9d207f2822.png

const button = document.getElementById('button');
const output = document.getElementById('output');

button.addEventListener('click', () => {
  output.innerHTML += '<p>I was pressed!</p>'
});

button.addEventListener('mouseenter', () => {
  output.innerHTML += '<p>Mouse on me!</p>'
});

button.addEventListener('mouseleave', () => {
  output.innerHTML += '<p>Mouse is not on me!</p>'
});

