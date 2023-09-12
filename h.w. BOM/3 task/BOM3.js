
// Задано сторінку з 3 кнопками і 1 лінкою. Напишіть Javascript код і реалізуйте HTML-сторінку з відповідними подіями на кожному елементові:
//      1) 1-ша кнопка – при кліку на неї колір фону сторінки міняється на синій
//      2) 2-га кнопка – при подвійному кліку на неї колір фону сторінки міняється на рожевий
//      3) 3-я кнопка – при натисненні і утримуванні кнопки колір фону сторінки стає коричневий. При відпусканні – білий.
//      4) При наведенні на лінку – колір фону стає жовтим, при відведенні – білим.
//      Приклад – курсор наведений на лінку.
// https://user-images.githubusercontent.com/9075641/228461056-455d4dbf-527b-43de-a3dd-7c079dfbffed.png


// const myButton = document.getElementsByClassName('buttons');

const btnBlue = document.getElementById('btnBlue')
const btnPink = document.getElementById('btnPink')
const btnBrown = document.getElementById('btnBrown')
const element4 = document.getElementById('element4')

//  1) 1-ша кнопка – при кліку на неї колір фону сторінки міняється на синій
document.getElementById("btnBlue").onclick = () => {
  document.body.style.backgroundColor = "blue";
};

//2) 2-га кнопка – при подвійному кліку на неї колір фону сторінки міняється на рожевий
btnPink.addEventListener("dblclick", () => {
  document.body.style.backgroundColor = "pink"; // Змінюємо фон на рожевий
});

// 3) 3-я кнопка – при натисненні і утримуванні кнопки колір фону сторінки стає коричневий. При відпусканні – білий.
btnBrown.addEventListener("mousedown", () => {
  document.body.style.backgroundColor = "brown"; 
});

btnBrown.addEventListener("mouseup", () => {
  document.body.style.backgroundColor = "white";
});


//4) При наведенні на лінку – колір фону стає жовтим, при відведенні – білим.

element4.addEventListener("mouseenter", () => {
  document.body.style.backgroundColor = "yellow";
});

element4.addEventListener("mouseleave", () => {
  document.body.style.backgroundColor = "white";
});