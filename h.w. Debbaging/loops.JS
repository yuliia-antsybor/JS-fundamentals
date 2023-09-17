
// -------------------------------------------------------------
//TASK 1. Написати функцію createArray(start, end), яка приймає на вхід 2 параметри:
//початкове значення і  кінцеве значення, а на виході отримує масив із діапазоном цих значень
//(реалізувати достатньо лише із числовими значеннями)
//let arr = createArray(2, 9);
//console.log(arr); // [2,3,4,5,6,7,8,9] 


//РІШЕННЯ до Task 1:
function createArray(start, end) {
  const res = [];
  for (let i = start; i <= end; i++) {
    res.push(i);
  }
  return res;
}

const arrRange = createArray;
console.log(arrRange);


// -------------------------------------------------------------

//TASK 2.
//2.Задані цілі числа a і b (a < b). Виведіть усі цілі числа від a до b включно, при цьому a виводится 1 раз,
//число а+1 - два рази і т.д.


//РІШЕННЯ до Task 2:
function printNumbers(a, b) {
  for (let i = a; i <= b; i++) {
    for (let k = a; k <= k; k++) {
      console.log(i);
    }
  }
}

const a = 2;
const b = 5;
printNumbers(a, b);


// -------------------------------------------------------------
// TASK 3.
//Напишіть функцію randArray(k), яка заповнюватиме масив k випадковими цілими числами.
//Випадкові числа генеруються із діапазону 1-500.

//РІШЕННЯ до Task 3:

function randArray(k, min, max) {
  const randomNumbers = []
  for (let i = 0; i < k; i++) {
    const randomNumber = Math.floor(min + Math.random() * (max - min) + 1);
    randomNumbers.push(randomNumber);
  }

  return randomNumbers;
}

const randomArray = randArray(10, 1, 500);
console.log(randomArray);


// -------------------------------------------------------------
// TASK 4.
//Написати функцію compact() яка має приймати на вхід масив, а на вихід має повертати значення нового масиву без повторень.

//РІШЕННЯ до Task 4;
function compact(array) {
  return array.reduce((acc, currentValue) => {
    if (!acc.includes(currentValue)) {
      acc.push(currentValue);
    }
    return acc;
  }, []);
}

const inputArray = [1, 2, 2, 3, 4, 4, 5, 6, 6];
const resultArray = compact(inputArray);
console.log(resultArray);



// -------------------------------------------------------------
// TASK 5.
//Є масив [5, “Limit”, 12, “a”, “3”, 99, 2, [2, 4, 3, “33”, “a”, “text”], “strong”, “broun”]
//Написати функцію яка виведе нові масиви які складаються із даних початкового масиву, але одного типу даних (не приводити тип стрінг в число навіть якщо там лише число)
//let  arr = [5, “Limit”, 12, “a”, “3”, 99, 2, [2, 4, 3, “33”, “a”, “text”], “strong”, “broun”];
//let arrNew = funcName(arr);


//РІШЕННЯ до Task 5;
const input = [5, "Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "broun"];
const sameTypeArrays = (arr) => Object.values(arr.flat().reduce((acc, cur, index) => {
  switch (typeof cur) {
    case 'number':
      acc.number = [...(acc.number || []), cur]
      break
    case 'string':
      acc.string = [...(acc.string || []), cur]
      break
  }
  return acc;
}, {}))

sameTypeArrays(input)
//---!!! не зрозуміла до кінця умови завдання, які там типи можуть бути, що хоче умова загалом.



// -------------------------------------------------------------
//TASK 6.
//Напишіть функцію calc(a, b, op), яка виконує над числами a і b одну із арифметичних операцій та повертає її результат.
// Вид операції визначається цілим числом op: 1 – віднімання, 2 – добуток, 3 – ділення, інші значення – додавання.

//РІШЕННЯ до Task 6;
function calc(a, b, op) {
  switch (op) {
    case 1:
      return a - b;
    case 2:
      return a * b;
    case 3:
      return a / b;
    default:
      return a + b;
  }
}


// -------------------------------------------------------------
//TASK 7
//Напишіть функцію findUnique(arr), яка приймає масив arr і перевіряє на унікальність його елементи. 
//Якщо всі елементи масиву унікальні (не мають дублів), то функція поверне true, інакше - false.

//РІШЕННЯ до Task 7;
function findUnique(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return false;
      }
    }
  }
  return true;

// -------------------------------------------------------------