const list = document.querySelectorAll('#list li');
const arr = Array.from(list);

const res = [
    arr[0], 
    arr[arr.length - 1], 
    arr[1], 
    arr[3], 
    arr[2]
].map(el => el.textContent).join(', ');
alert(res);