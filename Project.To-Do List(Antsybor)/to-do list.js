
const container = document.createElement('div');
// container.id = 'todo-container';
const h1 = document.createElement('h1');
h1.textContent = 'To-do List';
h1.style.backgroundColor = "#7FFFD4";
h1.style.fontSize = "x-large"
container.appendChild(h1);
document.body.appendChild(container)

const  input = document.createElement("input");
input.type = "text";
container.appendChild(input); 
