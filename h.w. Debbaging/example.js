// ** 4. DEBUGGING.HANDLING EXCEPTIONS *


//   1.
// Напишіть функцію`sumSliceArray(arr, first, second)`, яка приймає масив arr і два числа(first и second) – 
//порядкові номери елементів масиву, які необхідно скласти. Наприклад, якщо ввели 3 та 5 – сумуються 3 - й та 5 - й елементи.
// Функція повинна генерувати винятки, якщо були введені не числа, і коли одне з чисел або обидва більшого розміруза довжину масиву. 
// Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.

// function sumSliceArray(arr, first, second) {
//   let summ = 0;
//   for (let i = first; i <= second; i++) {
//     summ += arr[i];
//   }
//   try {
//     if (typeof first !== 'number' || typeof second !== 'number' || first < 0 || second >= arr.length || first > second) {
//       throw new Error("Invalid parameters.");
//     } 
//     return summ;

//   } catch (error) {
//     return `An error occurred: ${error.message}`;
//   }
// };

function sumSliceArray(arr, first, second) {
  if (typeof first !== 'number' || isNaN(first) || typeof second !== 'number' || isNaN(second)) {
    throw new TypeError('You should use numbers');
  }

  const length = arr.length;

  if (first < 0 || second < 0 || first > length || second > length) {
    throw new RangeError('Value are outside of the array');
  }

  return arr[first] + arr[second];
}

try {
  const sum = sumSliceArray([1, 2, 4], 0, 2);
} catch (e) {
  console.log(e);
}


// 2.
// Створіть функцію`checkAge()`, яка запитує у користувача його ім'я, вік та статус (адмін, модератор, користувач) 
// та генерує модальне вікно з помилкою, якщо:вік користувача менше 18 або більше 70 років(генерується помилка 
// типу RangeError).користувач не ввів жодних даних в будь - якому полі(виводиться повідомлення The field is empty! 
//  Please enter your age з типом помилки Error). 
// У полі статус введено неправильне слово(тип помилки EvalError).в полі вік введено нечислове значення. 
// У всіх інших випадках користувач отримає доступ до перегляду фільму.У блоці catch передбачена можливість виведення назви та опису помилки.



// 3.
// Реалізуйте функцію`calcRectangleArea(width, height)`, яка приймає 2 параметри ширина прямокутника width і висота прямокутника height і обраховує його площу.Передбачити припинення виконання програми і генерацію винятку у випадку, якщо функції передано не числові параметри.
// Напишіть код, який використовує цю функцію та обробляє можливі виняткові ситуації.