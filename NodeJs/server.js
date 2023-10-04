const os = require('os');
//node os module (google it!)
os.platform();
console.log("architecture:", os.arch());
console.log("userInfo:", os.userInfo());

// модуль файлової системи
const fs = require('fs');
//з його допомогою можемо записати дані,с творити файл, наприклад, код нижче створив файл 'my_text.txt у папці server.js
fs.writeFile('dcvjbnk/my_text.txt', 'Hello there', function (err) {
  if (err) {
    console.log(err.message)
    return;
  }
  console.log('Saved');
})