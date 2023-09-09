// Напишіть скріпт, який за допомогою засобів DOM створить для порожньої HTML-сторінки таку структуру з тегів і їх атрибутів.
// <body>
//   <main class="mainClass check item">         
//      <div id="myDiv">
//          <p>First paragraph</p>           
//      </div>
//  </main>
const main = document.createElement('main');
const myDiv = document.createElement('div');
const p = document.createElement('p');

main.classList.add('mainClass', 'check', 'item');
myDiv.setAttribute('id', 'myDiv');
p.innerText = 'First paragraph';

main.appendChild(myDiv);
myDiv.appendChild(p);

document.body.prepend(main);
