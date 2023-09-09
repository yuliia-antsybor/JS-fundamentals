//TASK 1:
//Напишіть функцію sumSliceArray(arr, first, second), яка приймає масив arr і два числа (first и second) – порядкові номери елементів масиву, які необхідно скласти.
//Наприклад, /якщо ввели 3 та 5 – сумуються 3-й та 5-й елементи.Функція повинна генерувати винятки, якщо були введені не числа, і коли одне з чисел або обидва більшого розміруза довжину масиву. 
//Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.//undefined

//РІШЕННЯ до Task 1:
function sumSliceArray(arr, first, second) {

  let summ = 0;
  for (let i = first; i <= second; i++) {
    summ += arr[i];
  }
  try {
    if (typeof first !== 'number' || typeof second !== 'number' || first < 0 || second >= arr.length || first > second) {
      throw new Error("Invalid parameters.");
    }
    return summ;

  } catch (error) {
    return `An error occurred: ${error.message}`;
  }
};

//TASK 2:
//Створіть функцію checkAge(), яка запитує у користувача його ім'я, вік та статус (адмін, модератор, користувач) та генерує модальне вікно з помилкою, 
// вік користувача менше 18 або більше 70 років (генерується помилка типу RangeError).
// Користувач не ввів жодних даних в будь-якому полі (виводиться повідомлення The field is empty! Please enter your age з типом помилки Error).
//  У полі статус введено неправильне слово (тип помилки EvalError). В полі вік введено нечислове значення.
// У всіх інших випадках користувач отримає доступ до перегляду фільму. 
// У блоці catch передбачена можливість виведення назви та опису помилки.

//РІШЕННЯ до Task 2:

function checkAge() {
  const allowedStatuses = ["admin", "moderator", "user"];
  const userAge = +prompt("Enter your age");
  const userName = prompt("Please, enter your name");
  const userStatus = prompt("Please, enter your status");

  if (!userAge || !userName || !userStatus) {
    throw new Error("The field is empty! Please enter your age");
  }

  if (userAge <= 18 || userAge >= 70) {
    throw new RangeError();
  }

  if (!allowedStatuses.includes(userStatus)) {
    throw new EvalError();
  }
}

try {
  checkAge()
}
catch (error) {
  console.error(error);
};




//TASK 3.
// Реалізуйте функцію calcRectangleArea(width, height), яка приймає 2 параметри ширина прямокутника width і висота прямокутника height і обраховує його площу. Передбачити припинення виконання програми і генерацію винятку у випадку, якщо функції передано не числові параметри.
// Напишіть код, який використовує цю функцію та обробляє можливі виняткові ситуації.

//РІШЕННЯ до Task 3:

function calcRectangleArea(width, height) {
  if (typeof width !== 'number' || isNaN(width)) throw new Error('Widht should be a number');
  if (typeof height !== 'number' || isNaN(height)) throw new Error('Height should be a number');

  return width * height;
}

try {
  const area = calcRectangleArea(1, 11);
  console.log(area);
} catch (e) {
  console.error(e);
}
// TASK 4.
// Створіть клас MonthException, конструктор якого приймає параметр message і ініціалізує поле name значенням MonthException.
// Реалізуйте функцію showMonthName(month), в якій параметр month – це порядковий номер місяця в році. 
// Функція повертає назву місяця відповідно до введеного номера місяця. У випадку некоректного вводу кидається ексепшн у вигляді об’єкта класу MonthException з повідомленням Incorrect month number.
// Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.
// Приклад роботи програми:


//РІШЕННЯ до Task 4:
class MonthException {
  constructor(message) {
    this.message = message;
    this.name = 'MonthException';
  }
}

function showMonthName(month) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  const monthName = months[month - 1];

  if (!monthName) {
    throw new MonthException('Incorrect month number')
  }

  return monthName;
}

try {
  const month = showMonthName(13);
  console.log(month);
} catch (e) {
  console.error(e);
};

//TASK 5.
//Реалізуйте функцію showUser(id), яка приймає параметром користувацьке id і повертає об’єкт, який містить значення переданої id. Також функція викидає помилку у разі якщо введено від’ємне id.
// Реалізуйте функцію showUsers(ids), яка приймає параметром масив користувацьких айді ids, 
// перевіряє з використанням функції showUser() кожен елемент масиву ids на коректність, 
// в разі виключної ситуації виводить повідомлення про помилку.
// Функція showUsers(ids) повертає масив об’єктів, де значеннями ключів є коректні елементи ids.

//РІШЕННЯ до Task 5:
//:(

const showUser = (id) => {
  if (id < 0) {
    console.log('User id could be a positive number only')
    return;
  }

  return { id }
}

c